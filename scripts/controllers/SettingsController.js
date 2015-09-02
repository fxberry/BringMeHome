/// <reference path='../min.references.ts'/>
var Controllers;
(function (Controllers) {
    var InputModel = (function () {
        function InputModel() {
        }
        return InputModel;
    })();

    var SettingsController = (function () {
        function SettingsController($scope, navigation, settings, locations, $stateParams, $angular) {
            var _this = this;
            this.$scope = $scope;
            this.navigation = navigation;
            this.settings = settings;
            this.locations = locations;
            this.$stateParams = $stateParams;
            this.$angular = $angular;
            this.stopWatch = null;
            this.GetInitParam = function () {
                var value = _this.$stateParams['init'];
                if (_this.$angular.isUndefined(value))
                    return false;
                return 'true' === value;
            };
            this.Save = function () {
                if (_this.$scope.Selected === null)
                    return;
                _this.settings.SetAddress(_this.$scope.Selected.name);
                _this.Cancel();
            };
            this.Cancel = function () {
                _this.navigation.Home();
            };
            this.AddressChanged = function (newValue, oldValue) {
                if (newValue === oldValue)
                    return;
                _this.locations.FromAddress(newValue).then(_this.LocationsReceived);
            };
            this.Select = function (location) {
                _this.$scope.Selected = location;
            };
            this.LocationsReceived = function (response) {
                _this.$scope.Locations = response;
            };
            this.StartWatch = function () {
                _this.stopWatch = _this.$scope.$watch(function (scope) {
                    return scope.Model.Address;
                }, _this.AddressChanged);
            };
            $scope.Model = new InputModel();
            $scope.Address = settings.GetAddress();
            $scope.Save = this.Save;
            $scope.Cancel = this.Cancel;
            $scope.Selected = null;
            $scope.Select = this.Select;
            $scope.Init = this.GetInitParam();

            this.StartWatch();
        }
        SettingsController.$inject = [
            $injections.Angular.$Scope,
            $injections.Services.Navigation,
            $injections.Services.Settings,
            $injections.Services.Locations,
            $injections.UIRouter.$StateParams,
            $injections.Constants.$Angular
        ];
        return SettingsController;
    })();

    var SettingsControllerRegister = (function () {
        function SettingsControllerRegister($module) {
            $module.controller($injections.Controllers.SettingsController, SettingsController);
        }
        return SettingsControllerRegister;
    })();
    Controllers.SettingsControllerRegister = SettingsControllerRegister;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=SettingsController.js.map
