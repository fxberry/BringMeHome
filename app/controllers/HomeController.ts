/// <reference path='../min.references.ts'/>
module Controllers {

    interface IHomeScope extends angular.IScope {
        Start();
    }

    class HomeController {
        static $inject = [
            $injections.Angular.$Scope,
            $injections.Services.Navigation,
            $injections.Services.RoutesProvider,
            $injections.Ionic.$ionicPopup,
            $injections.Services.Strings,
            $injections.Ionic.$ionicLoading,
            $injections.Services.TargetAddress,
            $injections.Services.GeoLocation,
            $injections.Services.Logger
        ];

        private retryCount: number = 0;

        constructor(private $scope: IHomeScope,
                    private navigation: Services.INavigation,
                    private routesProvider: Services.IRoutesProvider,
                    private $ionicPopup: any,
                    private strings: Services.IStrings,
                    private $ionicLoading: any,
                    private locations: Services.ITargetAddress,
                    private geoLocation: Services.IGeoLocationProvider,
                    private logger: Services.Logger) {

            if (!this.ensureLocationSaved()) {
                this.remindOpenLocation();
            }

            $scope.Start = this.Start;
        }

        private remindOpenLocation(): void {
            if (!this.locations.hasAllLocationSet()) {
                this.logger.log('home: message open locations', null, this, true);
            }
        }

        private ensureLocationSaved(): boolean {
            if (!this.locations.HasAddress($constants.TargetAdresses.home)) {
                this.navigation.Location($constants.TargetAdresses.home);
                return true;
            } else {
                return false;
            }
        }

        private OnGeoLocationError = (error: GeoPosition.IError) => {
            this.hidePopupWithDealy(() => this.$ionicPopup.alert({
                title: this.strings('alert:gps:title'),
                template: this.strings('alert:gps:message')
            }));
        };

        private OnError = () => {
            if (this.retryCount < 3) {
                this.retryCount++;
                this.Start();
                return;
            }

            this.hidePopupWithDealy(() => this.$ionicPopup.alert({
                title: this.strings('home:nearest station resolving:title'),
                template: this.strings('home:nearest station resolving:message')
            }));
        };

        private OnRoutesError = (errorCode: number) => {
            if (this.retryCount < 3) {
                this.retryCount++;
                this.Start();
                return;
            }
            this.OnError();
        };

        private OnResolved = (routes: Models.IRoutes) => {
            if (routes.IsTooCloseForFoot) {
                this.hidePopupWithDealy(() => this.$ionicPopup.alert({
                    title: this.strings('home:fastest station resolving:title'),
                    template: this.strings('home:fastest station resolving:message')
                }));
            } else {
                this.navigation.Connections(routes.Routes);
                this.retryCount = 0;
            }
        };

        private Start = () => {
            this.geoLocation().then(this.GeoLocationResolved, this.OnGeoLocationError);
            this.$ionicLoading.show({
                templateUrl: 'app/views/loadingGps.html',
                delay: 0
            });
        };

        private GeoLocationResolved = (coordinates: GeoPosition.IPosition) => {
            this.$ionicLoading.show({
                templateUrl: 'app/views/loadingConnection.html',
                delay: 0
            });

            this.routesProvider.GetRoutes(coordinates).then(this.OnResolved, this.OnRoutesError);
        };

        private hidePopupWithDealy(after: () => void): void {
            //Delay is necessary because a race condition might occure
            window.setTimeout(() => {
                this.$ionicLoading.hide();
                after();
            }, 500);
        }
    }

    export class HomeControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.HomeController, HomeController);
        }
    }
}