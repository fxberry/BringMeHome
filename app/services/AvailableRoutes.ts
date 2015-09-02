/// <reference path='../min.references.ts'/>

module Services {
    class AvailableRoutesProvider {

        private routes: Models.IRoute[] = null;

        static $inject = [
            $injections.Constants.$Angular
        ];
        constructor(private $angular:angular.IAngularStatic){

        }

        Provider: Services.IAvailableRoutes = (connections?: Models.IRoute[]) => {
            if (this.$angular.isDefined(connections))
                this.routes = connections;

            return this.routes;
        };
    }

    class CalculatedConnectionFactory {
    
        $get = [$injections.Angular.$injector, ($injector: angular.auto.IInjectorService): IAvailableRoutes => {
            var provider = $injector.instantiate(AvailableRoutesProvider);
            return provider.Provider;
        }]
    }

    export class AvailableRoutesRegister{
        constructor($module:angular.IModule)
        {
            $module.provider($injections.Services.AvailableRoutes, CalculatedConnectionFactory);
        }
    }

}