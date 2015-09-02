/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var OpenLink = (function () {
        function OpenLink($window) {
            var _this = this;
            this.$window = $window;
            this.action = function (url) {
                _this.$window.open(url, '_blank');
            };
        }
        OpenLink.$inject = [$injections.Angular.$Window];
        return OpenLink;
    })();

    var OpenLinkFactory = (function () {
        function OpenLinkFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(OpenLink);
                    return provider.action;
                }];
        }
        return OpenLinkFactory;
    })();

    var OpenLinkServiceRegister = (function () {
        function OpenLinkServiceRegister($module) {
            $module.provider($injections.Services.OpenLink, OpenLinkFactory);
        }
        return OpenLinkServiceRegister;
    })();
    Services.OpenLinkServiceRegister = OpenLinkServiceRegister;
})(Services || (Services = {}));
//# sourceMappingURL=OpenLink.js.map
