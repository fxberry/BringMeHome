/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var OpenPedestrianRoute = (function () {
        function OpenPedestrianRoute(openLink, urls) {
            var _this = this;
            this.openLink = openLink;
            this.urls = urls;
            this.Action = function (from, to) {
                var f = from.xLatitude + ',' + from.yLongitude;
                var t = to.xLatitude + ',' + to.yLongitude;
                var url = _this.urls.PedestrianRouteMap(f, t);
                _this.openLink(url);
            };
        }
        OpenPedestrianRoute.$inject = [
            $injections.Services.OpenLink,
            $injections.Services.Urls
        ];
        return OpenPedestrianRoute;
    })();

    var OpenPedestrianRouteFactory = (function () {
        function OpenPedestrianRouteFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(OpenPedestrianRoute);
                    return provider.Action;
                }];
        }
        return OpenPedestrianRouteFactory;
    })();

    var OpenPedestrianRouteRegister = (function () {
        function OpenPedestrianRouteRegister($module) {
            $module.provider($injections.Services.OpenPedestrianRoute, OpenPedestrianRouteFactory);
        }
        return OpenPedestrianRouteRegister;
    })();
    Services.OpenPedestrianRouteRegister = OpenPedestrianRouteRegister;
})(Services || (Services = {}));
//# sourceMappingURL=OpenPedestrianRoute.js.map
