/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var Coordinates = (function () {
        function Coordinates() {
        }
        return Coordinates;
    })();

    var Location = (function () {
        function Location() {
        }
        return Location;
    })();

    var LocationsProvider = (function () {
        function LocationsProvider(urls, $http, $q, $enumerable) {
            var _this = this;
            this.urls = urls;
            this.$http = $http;
            this.$q = $q;
            this.$enumerable = $enumerable;
            this.FromAddress = function (query) {
                var params = { query: query, type: 'all' };
                return _this.provider(params);
            };
            this.FromCoordinates = function (position) {
                var params = { x: position.Coordinates.Latitude, y: position.Coordinates.Longitude, type: 'all' };
                return _this.provider(params);
            };
            this.provider = function (params) {
                var defer = _this.$q.defer();
                var url = _this.urls.Locations();

                var config = { params: params };

                _this.$http.get(url, config).success(function (response) {
                    return _this.ResponseReceived(response, defer);
                }).error(function (data, status) {
                    defer.reject(status);
                });

                return defer.promise;
            };
            this.ResponseReceived = function (response, defer) {
                var models = _this.$enumerable.from(response.stations).select(function (item) {
                    var model = new Location();
                    if (item.coordinate !== null) {
                        model.coordinates = new Coordinates();
                        model.coordinates.xLatitude = item.coordinate.x;
                        model.coordinates.yLongitude = item.coordinate.y;
                    }
                    model.distance = item.distance;
                    model.id = item.id;
                    model.name = item.name;
                    model.score = item.score;
                    model.type = item.type;
                    return model;
                }).toArray();
                defer.resolve(models);
            };
        }
        LocationsProvider.$inject = [
            $injections.Services.Urls,
            $injections.Angular.$HttpService,
            $injections.Angular.$QService,
            $injections.Constants.$Enumerable
        ];
        return LocationsProvider;
    })();

    var LocationsProviderRegister = (function () {
        function LocationsProviderRegister($module) {
            $module.service($injections.Services.Locations, LocationsProvider);
        }
        return LocationsProviderRegister;
    })();
    Services.LocationsProviderRegister = LocationsProviderRegister;
})(Services || (Services = {}));
//# sourceMappingURL=LocationsProvider.js.map
