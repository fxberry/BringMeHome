/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var Strings = (function () {
        function Strings($filter, localize) {
            var _this = this;
            this.localize = localize;
            this.format = null;
            this.Format = function (key) {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    args[_i] = arguments[_i + 1];
                }
                var params = Array.prototype.slice.call(arguments);
                params[0] = _this.localize.getLocalizedString(key);
                return _this.format.apply(null, params);
            };
            this.format = $filter($injections.Filters.FormatFilter);
        }
        Strings.$inject = [
            $injections.Angular.$filter,
            'localize'
        ];
        return Strings;
    })();

    var StringsFactory = (function () {
        function StringsFactory() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(Strings);
                    return provider.Format;
                }];
        }
        return StringsFactory;
    })();

    var StringsRegister = (function () {
        function StringsRegister($module) {
            $module.provider($injections.Services.Strings, StringsFactory);
        }
        return StringsRegister;
    })();
    Services.StringsRegister = StringsRegister;
})(Services || (Services = {}));
//# sourceMappingURL=Strings.js.map
