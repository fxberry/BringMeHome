/// <reference path='../min.references.ts'/>
var Controllers;
(function (Controllers) {
    var TravelController = (function () {
        function TravelController($scope, startStation, connections, strings, settings, connectionsConverter, navigation, $ionicPopup) {
            var _this = this;
            this.$scope = $scope;
            this.startStation = startStation;
            this.connections = connections;
            this.strings = strings;
            this.connectionsConverter = connectionsConverter;
            this.navigation = navigation;
            this.$ionicPopup = $ionicPopup;
            this.Select = function (connection) {
                _this.navigation.TravelDetails(connection);
            };
            this.ConnectionsResolved = function (response) {
                _this.$scope.Connections = _this.connectionsConverter.ToConnectionUIPresentation(response, _this.startStation());
            };
            this.ConnectionsResolvingError = function (httpStatus) {
                _this.$ionicPopup.alert({
                    title: _this.strings('travel: error title: no results'),
                    template: _this.strings('travel: error message: no results')
                });
            };
            $scope.Label = strings('travel: label', settings.GetAddress());
            $scope.ConnectionsResolvingError = null;
            $scope.Select = this.Select;
            connections(startStation().Location).then(this.ConnectionsResolved, this.ConnectionsResolvingError);
        }
        TravelController.$inject = [
            $injections.Angular.$Scope,
            $injections.Services.StartStation,
            $injections.Services.Connections,
            $injections.Services.Strings,
            $injections.Services.Settings,
            $injections.Services.ConnectionsConverter,
            $injections.Services.Navigation,
            $injections.Ionic.$ionicPopup
        ];
        return TravelController;
    })();

    var TravelControllerRegister = (function () {
        function TravelControllerRegister($module) {
            $module.controller($injections.Controllers.TravelController, TravelController);
        }
        return TravelControllerRegister;
    })();
    Controllers.TravelControllerRegister = TravelControllerRegister;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=TravelController.js.map
