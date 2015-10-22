/// <reference path='../min.references.ts'/>

module Controllers {

    interface ITravelDetailsScope extends angular.IScope {
        Route:Models.IRoute;
        Sections:Models.ISection[];
        OpenDirection(direction:Models.IDirection);
    }

    class TravelDetailsController {

        static $inject = [
            $injections.Angular.$Scope,
            $injections.Services.SelectedRoute,
            $injections.Services.Navigation,
            $injections.Services.OpenPedestrianRoute,
            '$ionicScrollDelegate'
        ];

        constructor(private $scope:ITravelDetailsScope,
                    selectedRoute:Services.ISelectedRoute,
                    private navigation: Services.INavigation,
                    private openPedestrianRoute:Services.IOpenPedestrianRoute,
                    private $ionicScrollDelegate) {

            // TODO: get route
            var route = undefined;
            $scope.Route = route;
            $scope.Sections = route.Sections;
            $scope.OpenDirection = this.OpenDirection;

            setTimeout(() => this.$ionicScrollDelegate.scrollTop(),1000);
        }

        private OpenDirection = (direction:Models.IDirection) =>{
            // TODO: link to navigation
        }
    }

    export class TravelDetailsControllerRegister {
        constructor($module:angular.IModule) {
            $module.controller($injections.Controllers.TravelDetailsController, TravelDetailsController);
        }
    }
}