/// <reference path='../min.references.ts'/>

module Services {
    class SelectedRouteProvider {

        private route:Models.IRoute = null;

        static $inject = [
            $injections.Constants.$Angular
        ];
        constructor(private $angular:angular.IAngularStatic){

        }

        Provider:Services.ISelectedRoute = (route?:Models.IRoute) => {
            if (this.$angular.isDefined(route))
                this.route = route;

            return this.route;
        };
    }

    class SelectedRouteFactory {
    
        $get = [$injections.Angular.$injector, ($injector:angular.auto.IInjectorService):ISelectedRoute => {
            var provider = $injector.instantiate(SelectedRouteProvider);
            return provider.Provider;
        }]
    }

    export class SelectedRouteRegister{
        constructor($module:angular.IModule)
        {
            $module.provider($injections.Services.SelectedRoute, SelectedRouteFactory);
        }
    }

}