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

            var params = {
                XLatitude: position.Coordinates.Latitude,
                YLongitude: position.Coordinates.Longitude,
                Address: this.targetAddress.GetAddress()
            };

            var defer = this.$q.defer<Models.IRoutes>();
            var url = this.urls.Routes();

            this.logger.log('starting request for routes', null, this, false);
            this.$http.post(url, params)
                .success((response: any) => {
                    this.logger.log('request finished successfull', response, this, false);
                    this.ResponseReceived(<Models.Messages.IRoutes>response, defer);
                })
                .error((data: any, status: number) => {
                    defer.reject(status);
                }).finally(() => {
                    this.logger.log('request finished', null, this, false);
                });

            return defer.promise;
        };

        private ResponseReceived = (response: Models.Messages.IRoutes, defer: angular.IDeferred<Models.IRoutes>) => {
            console.log('The connections result has been generated in: ' + (response.GenerationTime / 1000) + ' sec');
            var models = this.routesConverter.Convert(response);
            defer.resolve(models);
        };
    }

    export class RoutesProviderRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.RoutesProvider, RoutesProvider);
        }
    }
}