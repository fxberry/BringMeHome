/// <reference path='../min.references.ts'/>
var Filters;
(function (Filters) {
    var FormatFilter = (function () {
        function FormatFilter() {
            this.filter = function (input) {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    args[_i] = arguments[_i + 1];
                }
                return input.replace(/\{(\d+)\}/g, function (match, capture) {
                    return args[1 * capture];
                });
            };
        }
        return FormatFilter;
    })();

    var FormatFilterProvider = [
        $injections.Angular.$injector, function ($injector) {
            var instance = $injector.instantiate(FormatFilter);
            return instance.filter;
        }];

    var FormatFilterRegister = (function () {
        function FormatFilterRegister($module) {
            $module.filter($injections.Filters.FormatFilter, FormatFilterProvider);
        }
        return FormatFilterRegister;
    })();
    Filters.FormatFilterRegister = FormatFilterRegister;
})(Filters || (Filters = {}));
//# sourceMappingURL=FormatFilter.js.map
