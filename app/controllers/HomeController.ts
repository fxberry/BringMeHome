/// <reference path='../min.references.ts'/>
module Controllers {

    interface IHomeScope extends angular.IScope {

    }

    class HomeController {
        static $inject = [
            $injections.Angular.$Scope,
            $injections.Ionic.$ionicPopup,
            $injections.Ionic.$ionicLoading,
            $injections.Services.Logger
        ];

        constructor(private $scope: IHomeScope,
                    private $ionicPopup: any,
                    private $ionicLoading: any,
                    private logger : Services.Logger) {

            this.logger.log('request finished successfull', 'empty', this, true);

        }
    }

    export class HomeControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.HomeController, HomeController);
        }
    }
}