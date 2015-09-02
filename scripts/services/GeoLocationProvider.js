/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var Coordinates = (function () {
        function Coordinates() {
        }
        return Coordinates;
    })();

    var Position = (function () {
        function Position() {
        }
        return Position;
    })();

    var Error = (function () {
        function Error() {
        }
        return Error;
    })();

    var GeoLocationOptions = (function () {
        function GeoLocationOptions() {
            this.maximumAge = 3000;
            this.timeout = 10000;
            this.enableHighAccuracy = true;
        }
        return GeoLocationOptions;
    })();

    var GeoLocationProvider = (function () {
        function GeoLocationProvider(geoLocationPlugin, $q) {
            var _this = this;
            this.geoLocationPlugin = geoLocationPlugin;
            this.$q = $q;
            this.Provider = function () {
                var defer = _this.$q.defer();

                var onSuccess = function (position) {
                    return _this.OnPositionReceived(position, defer);
                };
                var onError = function (error) {
                    return _this.OnError(error, defer);
                };
                _this.geoLocationPlugin.getCurrentPosition(onSuccess, onError, new GeoLocationOptions());

                return defer.promise;
            };
            this.OnPositionReceived = function (pos, defer) {
                var coordinates = new Coordinates();
                coordinates.Accuracy = pos.coords.accuracy;
                coordinates.Altitude = pos.coords.altitude;
                coordinates.AltitudeAccuracy = pos.coords.altitudeAccuracy;
                coordinates.Heading = pos.coords.heading;

                coordinates.Latitude = pos.coords.latitude;
                coordinates.Longitude = pos.coords.longitude;

                //coordinates.Latitude =  47.500358;
                //coordinates.Longitude = 8.724345;
                coordinates.Speed = pos.coords.speed;

                var position = new Position();
                position.TimeStamp = pos.timestamp;
                position.Coordinates = coordinates;

                defer.resolve(position);
            };
            this.OnError = function (er, defer) {
                var error = new Error();
                error.Code = er.code;
                error.Message = er.message;

                defer.reject(error);
            };
        }
        GeoLocationProvider.$inject = [
            $injections.Plugins.GeoLocationPlugin,
            $injections.Angular.$QService
        ];
        return GeoLocationProvider;
    })();

    var GeoLocationProviderFactory = (function () {
        function GeoLocationProviderFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(GeoLocationProvider);
                    return provider.Provider;
                }];
        }
        return GeoLocationProviderFactory;
    })();

    var GeoLocationProviderRegister = (function () {
        function GeoLocationProviderRegister($module) {
            $module.provider($injections.Services.GeoLocation, GeoLocationProviderFactory);
        }
        return GeoLocationProviderRegister;
    })();
    Services.GeoLocationProviderRegister = GeoLocationProviderRegister;
})(Services || (Services = {}));
//# sourceMappingURL=GeoLocationProvider.js.map
