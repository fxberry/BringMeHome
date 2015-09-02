/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var SelectedConnectionProvider = (function () {
        function SelectedConnectionProvider($angular) {
            var _this = this;
            this.$angular = $angular;
            this.SelectedConnection = null;
            this.Provider = function (connection) {
                if (_this.$angular.isDefined(connection))
                    _this.SelectedConnection = connection;

                return _this.SelectedConnection;
            };
        }
        SelectedConnectionProvider.$inject = [
            $injections.Constants.$Angular
        ];
        return SelectedConnectionProvider;
    })();

    var SelectedConnectionFactory = (function () {
        function SelectedConnectionFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(SelectedConnectionProvider);
                    return provider.Provider;
                }];
        }
        return SelectedConnectionFactory;
    })();

    var SelectedConnectionRegister = (function () {
        function SelectedConnectionRegister($module) {
            $module.provider($injections.Services.SelectedConnection, SelectedConnectionFactory);
        }
        return SelectedConnectionRegister;
    })();
    Services.SelectedConnectionRegister = SelectedConnectionRegister;
})(Services || (Services = {}));
//# sourceMappingURL=SelectedConnection.js.map
