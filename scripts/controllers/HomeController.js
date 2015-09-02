/// <reference path='../min.references.ts'/>
var Controllers;
(function (Controllers) {
    var HomeController = (function () {
        function HomeController($scope, navigation, nearestStationResolver, $ionicPopup, strings, $ionicLoading) {
            var _this = this;
            this.$scope = $scope;
            this.navigation = navigation;
            this.nearestStationResolver = nearestStationResolver;
            this.$ionicPopup = $ionicPopup;
            this.strings = strings;
            this.$ionicLoading = $ionicLoading;
            this.OnUndefined = function () {
                _this.$ionicLoading.hide();
            };
            this.OnGeoLocationError = function (error) {
                _this.$ionicLoading.hide();
                _this.$ionicPopup.alert({
                    title: _this.strings('alert:gps:title'),
                    template: _this.strings('alert:gps:message')
                });
            };
            this.OnError = function () {
                _this.$ionicLoading.hide();
                _this.$ionicPopup.alert({
                    title: _this.strings('home:nearest station resolving:title'),
                    template: _this.strings('home:nearest station resolving:message')
                });
            };
            this.OnResolved = function (nearestStation) {
                _this.$ionicLoading.hide();
                _this.navigation.Travel(nearestStation);
            };
            this.Start = function () {
                _this.nearestStationResolver.ResolveNearestStation();
                _this.$ionicLoading.show({
                    templateUrl: 'views/loading.html'
                });
            };
            this.Settings = function () {
                _this.navigation.Settings(false);
            };
            $scope.Start = this.Start;
            $scope.Settings = this.Settings;

            var u1 = nearestStationResolver.OnUndefined(this.OnUndefined);
            var u2 = nearestStationResolver.OnGeoLocationError(this.OnGeoLocationError);
            var u3 = nearestStationResolver.OnAroundStationsError(this.OnError);
            var u4 = nearestStationResolver.OnNearestStationError(this.OnError);
            var u5 = nearestStationResolver.OnResolved(this.OnResolved);

            $scope.$on('$destroy', function () {
                u1();
                u2();
                u3();
                u4();
                u5();
            });
        }
        HomeController.$inject = [
            $injections.Angular.$Scope,
            $injections.Services.Navigation,
            $injections.Services.NearestStationResolver,
            $injections.Ionic.$ionicPopup,
            $injections.Services.Strings,
            $injections.Ionic.$ionicLoading
        ];
        return HomeController;
    })();

    var HomeControllerRegister = (function () {
        function HomeControllerRegister($module) {
            $module.controller($injections.Controllers.HomeController, HomeController);
        }
        return HomeControllerRegister;
    })();
    Controllers.HomeControllerRegister = HomeControllerRegister;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=HomeController.js.map
