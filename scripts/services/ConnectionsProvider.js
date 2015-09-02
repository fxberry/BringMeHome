/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var ConnectionsProvider = (function () {
        function ConnectionsProvider(urls, $http, $q, settings) {
            var _this = this;
            this.urls = urls;
            this.$http = $http;
            this.$q = $q;
            this.settings = settings;
            this.Provider = function (startStation) {
                var defer = _this.$q.defer();
                var url = _this.urls.Connections();

                var params = { from: startStation.id, to: _this.settings.GetAddress() };
                var config = { params: params };

                _this.$http.get(url, config).success(function (response) {
                    return _this.ResponseReceived(response, defer);
                }).error(defer.reject);

                return defer.promise;
            };
            this.ResponseReceived = function (response, defer) {
                defer.resolve(response);
            };
        }
        ConnectionsProvider.$inject = [
            $injections.Services.Urls,
            $injections.Angular.$HttpService,
            $injections.Angular.$QService,
            $injections.Services.Settings
        ];
        return ConnectionsProvider;
    })();

    var ConnectionsProviderFactory = (function () {
        function ConnectionsProviderFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(ConnectionsProvider);
                    return provider.Provider;
                }];
        }
        return ConnectionsProviderFactory;
    })();

    var ConnectionsProviderRegister = (function () {
        function ConnectionsProviderRegister($module) {
            $module.provider($injections.Services.Connections, ConnectionsProviderFactory);
        }
        return ConnectionsProviderRegister;
    })();
    Services.ConnectionsProviderRegister = ConnectionsProviderRegister;
})(Services || (Services = {}));
//# sourceMappingURL=ConnectionsProvider.js.map
