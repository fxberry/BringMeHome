/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var Navigation = (function () {
        function Navigation($state, homeState, settingsState, travelState, travelDetailsState, startStation, selectedConnection) {
            var _this = this;
            this.$state = $state;
            this.homeState = homeState;
            this.settingsState = settingsState;
            this.travelState = travelState;
            this.travelDetailsState = travelDetailsState;
            this.startStation = startStation;
            this.selectedConnection = selectedConnection;
            this.Home = function () {
                _this.$state.go(_this.homeState);
            };
            this.Settings = function (init) {
                var params = { init: init };
                _this.$state.go(_this.settingsState, params);
            };
            this.Travel = function (nearestStation) {
                _this.startStation(nearestStation);
                _this.$state.go(_this.travelState);
            };
            this.TravelDetails = function (connection) {
                _this.selectedConnection(connection);
                _this.$state.go(_this.travelDetailsState);
            };
        }
        Navigation.$inject = [
            $injections.UIRouter.$StateService,
            $injections.Routes.HomeState,
            $injections.Routes.SettingsState,
            $injections.Routes.TravelState,
            $injections.Routes.TravelDetailsState,
            $injections.Services.StartStation,
            $injections.Services.SelectedConnection
        ];
        return Navigation;
    })();

    var NavigationRegister = (function () {
        function NavigationRegister($module) {
            $module.service($injections.Services.Navigation, Navigation);
        }
        return NavigationRegister;
    })();
    Services.NavigationRegister = NavigationRegister;
})(Services || (Services = {}));
//# sourceMappingURL=Navigation.js.map
