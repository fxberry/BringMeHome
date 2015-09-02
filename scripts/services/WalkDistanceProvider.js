/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var WalkDistance = (function () {
        function WalkDistance() {
        }
        return WalkDistance;
    })();

    var WalkDistanceProvider = (function () {
        function WalkDistanceProvider($http, $q, urls, $enumerable) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.urls = urls;
            this.$enumerable = $enumerable;
            this.Provider = function (from, to) {
                var promises = _this.$enumerable.from(to).select(function (item) {
                    return _this.Resolve(from, item);
                }).toArray();
                return _this.$q.all(promises);
            };
            this.Resolve = function (from, to) {
                var defer = _this.$q.defer();
                var url = _this.urls.WalkDistance();

                var params = {
                    key: 'Fmjtd|luurn90t2l,ba=o5-9wtxq6',
                    from: from.xLatitude + ',' + from.yLongitude,
                    to: to.coordinates.xLatitude + ',' + to.coordinates.yLongitude,
                    unit: 'k',
                    routeType: 'pedestrian'
                };
                var config = { params: params };

                _this.$http.get(url, config).success(function (response) {
                    return _this.ResponseReceived(response, defer, to, from);
                }).error(function (data, status) {
                    defer.reject(status);
                });

                return defer.promise;
            };
            this.ResponseReceived = function (response, defer, to, from) {
                if (response.info.statuscode !== 0) {
                    defer.reject(response.info.statuscode);
                    return;
                }
                var model = new WalkDistance();
                model.Location = to;
                model.From = from;
                model.Distance = response.route.distance;
                model.Time = response.route.time;
                defer.resolve(model);
            };
        }
        WalkDistanceProvider.$inject = [
            $injections.Angular.$HttpService,
            $injections.Angular.$QService,
            $injections.Services.Urls,
            $injections.Constants.$Enumerable
        ];
        return WalkDistanceProvider;
    })();

    var WalkDistanceProviderFactory = (function () {
        function WalkDistanceProviderFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(WalkDistanceProvider);
                    return provider.Provider;
                }];
        }
        return WalkDistanceProviderFactory;
    })();

    var WalkDistanceProviderRegister = (function () {
        function WalkDistanceProviderRegister($module) {
            $module.provider($injections.Services.WalkDistance, WalkDistanceProviderFactory);
        }
        return WalkDistanceProviderRegister;
    })();
    Services.WalkDistanceProviderRegister = WalkDistanceProviderRegister;
})(Services || (Services = {}));
//# sourceMappingURL=WalkDistanceProvider.js.map
