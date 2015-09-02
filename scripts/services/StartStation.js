/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var StartStationProvider = (function () {
        function StartStationProvider($angular) {
            var _this = this;
            this.$angular = $angular;
            this.StartStation = null;
            this.Provider = function (station) {
                if (_this.$angular.isDefined(station))
                    _this.StartStation = station;

                return _this.StartStation;
            };
        }
        StartStationProvider.$inject = [
            $injections.Constants.$Angular
        ];
        return StartStationProvider;
    })();

    var StartStationFactory = (function () {
        function StartStationFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(StartStationProvider);
                    return provider.Provider;
                }];
        }
        return StartStationFactory;
    })();

    var StartStationRegister = (function () {
        function StartStationRegister($module) {
            $module.provider($injections.Services.StartStation, StartStationFactory);
        }
        return StartStationRegister;
    })();
    Services.StartStationRegister = StartStationRegister;
})(Services || (Services = {}));
//# sourceMappingURL=StartStation.js.map
