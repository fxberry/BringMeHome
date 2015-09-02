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

            $stateProvider
                .state('menu', {
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

                .state($injections.Routes.LanguageState, {
                url: "/language",
                views: {
                    'menuContent': {
                        templateUrl: "app/views/language.html",
                        controller: $injections.Controllers.LanguageController
                    }
                }
            })

                .state($injections.Routes.LocationState, {
                url: "/location/:type",
                views: {
                    'menuContent': {
                        templateUrl: "app/views/location.html",
                        controller: $injections.Controllers.LocationController
                    }
                }
            })

                .state($injections.Routes.MapState, {
                url: "/mapstate?from&to",
                views: {
                    'menuContent': {
                        templateUrl: "app/views/map.html",
                        controller: $injections.Controllers.MapController
                    }
                }
            })

                .state($injections.Routes.TravelDetailsState, {
                url: "/traveldetails",
                views: {
                    'menuContent': {
                        templateUrl: "app/views/sections.html",
                        controller: $injections.Controllers.TravelDetailsController
                    }
                }
            })

                .state($injections.Routes.ConnectionsState, {
                url: "/travel",
                views: {
                    'menuContent': {
                        templateUrl: "app/views/connections.html",
                        controller: $injections.Controllers.ConnectionsController
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