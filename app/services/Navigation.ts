/// <reference path='../min.references.ts'/>

module Services {
    class Navigation implements Services.INavigation {
        static $inject = [
            $injections.UIRouter.$StateService,
            $injections.Services.AvailableRoutes,
            $injections.Services.SelectedRoute,
            $injections.Services.SelectedPedestrianRoute
        ];

        constructor(private $state: angular.ui.IStateService,
            private availableRoutes: Services.IAvailableRoutes,
            private selectedRoute: Services.ISelectedRoute,
            private selectedPedestrianRoute: Services.ISelectedPedestrianRoute) {

        }

        Home = () => {
            this.$state.go($injections.Routes.HomeState, {});
        };

        Language = () => {
            this.$state.go($injections.Routes.LanguageState, {});
        };

        Location = (type: string) => {
            var params = { type: type };
            this.$state.go($injections.Routes.LocationState, params);
        };

        Connections = (routes: Models.IRoute[]) => {
            this.availableRoutes(routes);
            this.$state.go($injections.Routes.ConnectionsState);
        };

        TravelDetails = (route: Models.IRoute) => {
            this.selectedRoute(route);
            this.$state.go($injections.Routes.TravelDetailsState);
        };

        Map = (from: any, to: any) => {
            this.selectedPedestrianRoute({ from: from, to: to });
            this.$state.go($injections.Routes.MapState);
        }
    }

    export class NavigationRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.Navigation, Navigation);
        }
    }
}