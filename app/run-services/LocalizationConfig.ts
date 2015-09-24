/// <reference path='../min.references.ts'/>

module Services {
    export class LocalizationConfig {
        static $inject = [
            'localize',
            '$templateCache',
            $injections.Services.LocalStorage,
            $injections.Angular.$HttpService,
            $injections.Angular.$QService
        ];

        constructor(private localize: any, private $templateCache: any, private localStorage: Services.ILocalStorage, private $http: angular.IHttpService, private $q: angular.IQService) {
            this.ExecuteLocalization();
        }

        public ExecuteLocalization(): angular.IPromise<void> {
            var deferred = this.$q.defer<void>();

            var languageFromStorage = this.localStorage.get('language');
            if (languageFromStorage) {
                this.TryToSetLanguage(languageFromStorage, deferred);
            }
            else {
                this.TryToSetLanguage('en-US', deferred);
                setTimeout(() => deferred.resolve(), 100);
            }

            return deferred.promise;

        }

        private TryToSetLanguage = (language: string, deferred: angular.IDeferred<void>) => {
            var url = this.GetLanguageResourceUrl(language);
            if (!this.TrySetLanguageFromTemplateCache(language, url)) {
                if (language !== 'en-US') {
                    this.$http.get(this.GetLanguageResourceUrl(language))
                        .success(() => {
                            this.SetLanguage(language, url);
                            setTimeout(() => deferred.resolve(), 100);
                        })
                        .error(() => this.TryToSetLanguage('en-US', deferred));
                } else this.SetLanguage(language, url);
            } else {
                deferred.resolve();
            }
        };

        private SetLanguage = (language: string, url: string) => {
            this.localize.setUrl(url);
            this.localize.language = language;
        };

        private TrySetLanguageFromTemplateCache(language: string, url: string): boolean {
            var fromCache = this.$templateCache.get(url);
            if (fromCache) {
                this.localize.successCallback(JSON.parse(fromCache));
                return true;
            }

            return false;
        }

        private GetLanguageResourceUrl = (language: string): string => {
            return 'app/localizations/' + language + '.json';
        };
    }

    export class LocalizationConfigRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.LocalizationProvider, LocalizationConfig);
        }
    }
}