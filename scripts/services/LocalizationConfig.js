/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var LocalizationConfig = (function () {
        function LocalizationConfig(localize, $templateCache, globalization, $http) {
            var _this = this;
            this.localize = localize;
            this.$templateCache = $templateCache;
            this.$http = $http;
            this.OnSuccess = function (language) {
                _this.TryToSetLanguage(language.value);
            };
            this.OnError = function (error) {
                _this.TryToSetLanguage('en-US');
            };
            this.TryToSetLanguage = function (language) {
                if (language !== 'en-US') {
                    _this.$http.get(_this.GetLanguageResourceUrl(language)).success(function () {
                        return _this.SetLanguage(language);
                    }).error(function () {
                        return _this.TryToSetLanguage('en-US');
                    });
                } else
                    _this.SetLanguage(language);
            };
            this.SetLanguage = function (language) {
                //In PhoneGap case all the languages are built in
                var url = _this.GetLanguageResourceUrl(language);
                var fromCache = _this.$templateCache.get(url);
                if (fromCache) {
                    _this.localize.dictionary = fromCache;
                } else {
                    _this.localize.setUrl(url);
                }
                _this.localize.language = language;
            };
            this.GetLanguageResourceUrl = function (language) {
                return 'bring.me.home.app/' + language + '.json';
            };
            if (globalization !== null)
                globalization.getPreferredLanguage(this.OnSuccess, this.OnError);
            else
                this.TryToSetLanguage('en-US');
        }
        LocalizationConfig.$inject = [
            'localize',
            '$templateCache',
            $injections.Plugins.GlobalizationPlugin,
            $injections.Angular.$HttpService
        ];
        return LocalizationConfig;
    })();

    var LocalizationConfigRegister = (function () {
        function LocalizationConfigRegister($module) {
            $module.run(LocalizationConfig);
        }
        return LocalizationConfigRegister;
    })();
    Services.LocalizationConfigRegister = LocalizationConfigRegister;
})(Services || (Services = {}));
//# sourceMappingURL=LocalizationConfig.js.map
