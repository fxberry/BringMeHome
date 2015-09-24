/// <reference path='min.references.ts'/>

module Routes {

    interface IStateProvider extends angular.ui.IStateProvider {
        state(config: any): IStateProvider;
        state(name: string, config: any): IStateProvider;
    }

    class UIRoutesConfig {
        static $inject = [
            $injections.UIRouter.$StateProvider,
            $injections.UIRouter.$UrlRouterProvider
        ];

        constructor($stateProvider: IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

            $stateProvider.
                state('menu', {
                    url: "/menu",
                    abstract: true,
                    templateUrl: "app/views/menu.html",
                    controller: $injections.Controllers.MenuController,
                    resolve: {
                        loadLocalization: [$injections.Services.LocalizationProvider, (localizationProvider: Services.LocalizationConfig) => {
                            return localizationProvider.ExecuteLocalization();
                        }]
                    }
                })

                .state($injections.Routes.HomeState, {
                    url: "/home",
                    views: {
                        'menuContent': {
                            templateUrl: "app/views/home.html",
                            controller: $injections.Controllers.HomeController
                        }
                    },
                    clearHistory: true
                })
                .state($injections.Routes.LocationState, {
                    url: "/location/:type",
                    views: {
                        'menuContent': {
                            templateUrl: "app/views/location.html",
                            controller: $injections.Controllers.LocationController
                        }
                    }
                });


            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/menu/home');
        }
    }


    export class UIRoutesRegister {
        constructor($module: angular.IModule) {
            $module.config(UIRoutesConfig);
        }
    }
}