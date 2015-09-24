/// <reference path='../min.references.ts'/>

module Controllers {

    class InputModel{
        Address:string;
    }

    interface ILocationScope extends angular.IScope {
        Model: InputModel;
        Cancel();
        Save();
        Addresses: string[];
        Address: string;
        Selected: string;
        Select(address: string);
        Type: string;
        HasNoSelection: () => boolean;
        Init: boolean;
    }

    class LocationController {
        private stopWatch:Function = null;

        static $inject = [
            $injections.Angular.$Scope,
            $injections.UIRouter.$StateParams,
            $injections.Constants.$Angular,
            $injections.Services.Logger
        ];

        constructor(
            private $scope: ILocationScope,
            private $stateParams:angular.ui.IStateParamsService,
            private $angular: angular.IAngularStatic,
            private logger: Services.Logger) {

            $scope.Model = new InputModel();
            $scope.Save = this.Save;
            $scope.Cancel = this.Cancel;
            $scope.Selected = null;
            $scope.Type = this.GetInitParam();
            $scope.HasNoSelection = () => this.HasNoSelection();

        }

        private HasNoSelection(): boolean {
            return this.$scope.Selected === null;
        }

        private GetInitParam = () =>{
            var value = this.$stateParams['type'];
            if (this.$angular.isUndefined(value)) return false;
            return value;
        };

        private Save = () =>{

            this.Cancel();
        };

        private Cancel = () =>{
            //this.navigation.Home();
        };

    }

    export class LocationControllerRegister {
        constructor($module:angular.IModule) {
            $module.controller($injections.Controllers.LocationController, LocationController);
        }
    }
}