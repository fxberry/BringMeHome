/// <reference path='../min.references.ts'/>

module Services {

    class RoutesProvider implements IRoutesProvider {
        static $inject = [
            $injections.Services.Urls,
            $injections.Angular.$HttpService,
            $injections.Angular.$QService,
            $injections.Services.Logger,
            $injections.Services.TargetAddress,
            $injections.Services.RoutesConverter
        ];

        constructor(private urls: Services.IUrls,
            private $http: angular.IHttpService,
            private $q: angular.IQService,
            private logger: Services.Logger,
            private targetAddress: Services.ITargetAddress,
            private routesConverter: Services.IRoutesConverter) {

        }

        GetRoutes = (position: GeoPosition.IPosition): angular.IPromise<Models.IRoutes>  => {

            // TODO: Fill params for the service request

            var params = {
                XLatitude: undefined,
                YLongitude: undefined,
                Address: undefined
            };

            var defer = this.$q.defer<Models.IRoutes>();

            // TODO: get the url for the routes remote services
            var url = undefined;

            this.logger.log('starting request for routes', null, this, false);

            // TODO: Do a post call to routes remote service and handle the deferred correctly
            

            return defer.promise;
        };

        private ResponseReceived = (response: Models.Messages.IRoutes, defer: angular.IDeferred<Models.IRoutes>) => {
            console.log('The connections result has been generated in: ' + (response.GenerationTime / 1000) + ' sec');

            // TODO: use routesConverter to convert the response in the actual model
        };
    }

    export class RoutesProviderRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.RoutesProvider, RoutesProvider);
        }
    }
}