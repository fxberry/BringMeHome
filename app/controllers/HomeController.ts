/// <reference path='../min.references.ts'/>
module Controllers {

    interface IHomeScope extends angular.IScope {

    }

    class HomeController {
        static $inject = [
            $injections.Angular.$Scope,
            $injections.Ionic.$ionicPopup,
            $injections.Ionic.$ionicLoading
        ];

        constructor(private $scope: IHomeScope,
            private $ionicPopup: any,
            private $ionicLoading: any) {


        }
    }

    export class HomeControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.HomeController, HomeController);
        }
    }
}