/// <reference path='../min.references.ts'/>

module Services {
    class SelectedPedestrainRouteProvider {

        private SelectedPedestrainRoute: Models.IPedestrianRoute = null;

        static $inject = [
            $injections.Constants.$Angular
        ];
        constructor(private $angular: angular.IAngularStatic) {

        }

        Provider: Services.ISelectedPedestrianRoute = (pedestrianRoute?: Models.IPedestrianRoute) => {
            if (this.$angular.isDefined(pedestrianRoute))
                this.SelectedPedestrainRoute = pedestrianRoute;

            return this.SelectedPedestrainRoute;
        };
    }

    class SelectedPedestrainRouteFactory {

        $get = [$injections.Angular.$injector, ($injector: angular.auto.IInjectorService): ISelectedRoute => {
            var provider = $injector.instantiate(SelectedPedestrainRouteProvider);
            return provider.Provider;
        }]
    }

    export class SelectedPedestrainRouteRegister {
        constructor($module: angular.IModule) {
            $module.provider($injections.Services.SelectedPedestrianRoute, SelectedPedestrainRouteFactory);
        }
    }

}