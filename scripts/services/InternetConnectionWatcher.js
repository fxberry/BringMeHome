/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var ConnectionWatcherService = (function () {
        function ConnectionWatcherService($rootScope, $window, networkConnectionPlugin, $navigator, $ionicPopup, strings) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ionicPopup = $ionicPopup;
            this.strings = strings;
            this.online = function () {
                _this.$rootScope.$apply(function () {
                    _this.$rootScope.online = true;
                });
            };
            this.offline = function () {
                _this.$rootScope.$apply(function () {
                    _this.$rootScope.online = false;
                    _this.$ionicPopup.alert({
                        title: _this.strings('alert:internet:title'),
                        template: _this.strings('alert:internet:message')
                    });
                });
            };
            $rootScope.online = networkConnectionPlugin !== null ? networkConnectionPlugin.type !== 'none' : $navigator.onLine;
            $window.addEventListener("offline", this.offline, false);
            $window.addEventListener("online", this.online, false);
        }
        ConnectionWatcherService.$inject = [
            $injections.Angular.$RootScope,
            $injections.Angular.$Window,
            $injections.Plugins.NetworkConnectionPlugin,
            $injections.Constants.$Navigator,
            $injections.Ionic.$ionicPopup,
            $injections.Services.Strings
        ];
        return ConnectionWatcherService;
    })();

    var ConnectionWatcherServiceRegister = (function () {
        function ConnectionWatcherServiceRegister($module) {
            $module.run(ConnectionWatcherService);
        }
        return ConnectionWatcherServiceRegister;
    })();
    Services.ConnectionWatcherServiceRegister = ConnectionWatcherServiceRegister;
})(Services || (Services = {}));
//# sourceMappingURL=InternetConnectionWatcher.js.map
