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
            $injections.Services.Logger,
            $injections.Services.TargetAddress,
            $injections.Services.AddressesProvider
        ];

        constructor(
            private $scope: ILocationScope,
            private $stateParams:angular.ui.IStateParamsService,
            private $angular: angular.IAngularStatic,
            private logger: Services.Logger,
            private locations: Services.ITargetAddress,
            private addressesProvider: Services.IAddressesProvider) {

            $scope.Model = new InputModel();
            $scope.Save = this.Save;
            $scope.Cancel = this.Cancel;
            $scope.Select = this.Select;
            $scope.Selected = null;
            $scope.Type = this.GetInitParam();
            $scope.HasNoSelection = () => this.HasNoSelection();

            if ($scope.Type) {
                $scope.Address = locations.GetAddressBy($scope.Type);
            }

            this.StartWatch();
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

            if (this.$scope.Selected === null) {
                this.logger.logError('error: no selection', null, this, true);
                return;
            }

            this.locations.SetAddress(this.$scope.Type, this.$scope.Selected);
            this.logger.logSuccess('success: location stored', null, this, true);
            this.Cancel();

        };

        private Cancel = () =>{
            //this.navigation.Home();
        };

        private Select = (address: string) => {
            this.logger.logSuccess('address selected', address, this, false);
            this.$scope.Selected = address;
        };

        private AddressesReceived = (response: string[]) => {
            this.logger.logSuccess('addresses received', response, this, false);
            this.$scope.Addresses = response;
        };

        private AddressChanged = (newValue: string, oldValue: string) => {
            if (newValue === oldValue) return;
            this.addressesProvider.getAddresses(newValue).then(this.AddressesReceived).catch(reason => {
                this.logger.logError('error: read address', reason, this, false);
            });
        };

        private StartWatch = () => {
            this.stopWatch = this.$scope.$watch((scope:ILocationScope)=> scope.Model.Address, this.AddressChanged);
        }

    }

    export class LocationControllerRegister {
        constructor($module:angular.IModule) {
            $module.controller($injections.Controllers.LocationController, LocationController);
        }
    }
}