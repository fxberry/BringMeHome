/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var Urls = (function () {
        function Urls(host, mapquest, pedestrianRoute) {
            var _this = this;
            this.host = host;
            this.mapquest = mapquest;
            this.pedestrianRoute = pedestrianRoute;
            this.Locations = function () {
                return _this.host + 'locations';
            };
            this.Connections = function () {
                return _this.host + 'connections';
            };
            this.WalkDistance = function () {
                return _this.mapquest;
            };
            this.PedestrianRouteMap = function (from, to) {
                return _this.pedestrianRoute + '?saddr=' + from + '&daddr=' + to + '&maptype=map&vs=directions&routeType=pedestrian';
            };
        }
        Urls.$inject = [
            $injections.Constants.HostConstant,
            $injections.Constants.MapQuestHost,
            $injections.Constants.PedestrianRouteHost
        ];
        return Urls;
    })();

    var UrlsRegister = (function () {
        function UrlsRegister($module) {
            $module.service($injections.Services.Urls, Urls);
        }
        return UrlsRegister;
    })();
    Services.UrlsRegister = UrlsRegister;
})(Services || (Services = {}));
//# sourceMappingURL=Urls.js.map
