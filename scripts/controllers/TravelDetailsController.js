/// <reference path='../min.references.ts'/>
var Controllers;
(function (Controllers) {
    var TravelDetailsController = (function () {
        function TravelDetailsController($scope, selectedConnection, connectionConverter, startStation, openPedestrianRoute) {
            var _this = this;
            this.$scope = $scope;
            this.openPedestrianRoute = openPedestrianRoute;
            this.OpenDirection = function (direction) {
                if (direction === null)
                    return;
                _this.openPedestrianRoute(direction.From, direction.To);
            };
            $scope.Connection = selectedConnection();
            $scope.Sections = connectionConverter.ToSectionUIPresentation(selectedConnection(), startStation());
            $scope.OpenDirection = this.OpenDirection;
        }
        TravelDetailsController.$inject = [
            $injections.Angular.$Scope,
            $injections.Services.SelectedConnection,
            $injections.Services.ConnectionsConverter,
            $injections.Services.StartStation,
            $injections.Services.OpenPedestrianRoute
        ];
        return TravelDetailsController;
    })();

    var TravelDetailsControllerRegister = (function () {
        function TravelDetailsControllerRegister($module) {
            $module.controller($injections.Controllers.TravelDetailsController, TravelDetailsController);
        }
        return TravelDetailsControllerRegister;
    })();
    Controllers.TravelDetailsControllerRegister = TravelDetailsControllerRegister;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=TravelDetailsController.js.map
