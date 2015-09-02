/// <reference path='../min.references.ts'/>

module Controllers {

    interface ITravelScope extends angular.IScope {
        Routes:Models.IRoute[];
        Label:string;
        Select(route:Models.IRoute);
    }

    class ConnectionsController {

        static $inject = [
            $injections.Angular.$Scope,
            $injections.Services.AvailableRoutes,            
            $injections.Services.Strings,
            $injections.Services.TargetAddress,            
            $injections.Services.Navigation,
            $injections.Ionic.$ionicPopup,
            $injections.Ionic.$ionicLoading,
            '$ionicScrollDelegate'           
        ];

        constructor(private $scope:ITravelScope,
                    private availableRoutes:Services.IAvailableRoutes,                    
                    private strings:Services.IStrings,
                    location:Services.ITargetAddress,                    
                    private navigation:Services.INavigation,
                    private $ionicPopup: any,
                    private $ionicLoading: any,
                    private $ionicScrollDelegate) {

            this.$scope.Label = strings('travel: label', location.GetAddress());
            this.$scope.Select = this.Select;
            this.$scope.Routes = this.availableRoutes();
            this.$ionicLoading.hide();
            
            this.$ionicScrollDelegate.scrollTop();
        }

        private Select = (route:Models.IRoute) =>{
            this.navigation.TravelDetails(route);
        };
    }

    export class ConnectionsControllerRegister {
        constructor($module:angular.IModule) {
            $module.controller($injections.Controllers.ConnectionsController, ConnectionsController);
        }
    }
}