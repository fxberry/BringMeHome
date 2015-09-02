/// <reference path='../min.references.ts'/>
var Directives;
(function (Directives) {
    var LogoFooterDirective = (function () {
        function LogoFooterDirective() {
            this.restrict = "E";
            this.templateUrl = "views/logo-footer.html";
        }
        LogoFooterDirective.$inject = [];
        return LogoFooterDirective;
    })();

    var LogoFooterDirectiveProvider = [
        $injections.Angular.$injector, function ($injector) {
            return $injector.instantiate(LogoFooterDirective);
        }];

    var LogoFooterDirectiveRegister = (function () {
        function LogoFooterDirectiveRegister($module) {
            $module.directive($injections.Directives.LogoFooterDirective, LogoFooterDirectiveProvider);
        }
        return LogoFooterDirectiveRegister;
    })();
    Directives.LogoFooterDirectiveRegister = LogoFooterDirectiveRegister;
})(Directives || (Directives = {}));
//# sourceMappingURL=logoFooter.js.map
