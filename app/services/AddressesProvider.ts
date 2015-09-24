/// <reference path='../min.references.ts'/>

module Services {

    class AddressesProvider implements IAddressesProvider{

        static $inject = [
            $injections.Services.Urls,
            $injections.Angular.$HttpService,
            $injections.Angular.$QService,
            $injections.Constants.$Enumerable,
            $injections.Services.Logger
        ];

        constructor(private urls: Services.IUrls,
                    private $http: angular.IHttpService,
                    private $q: angular.IQService,
                    private $enumerable: linqjs.EnumerableStatic,
                    private logger: Services.Logger) {

        }

        getAddresses(query: string): angular.IPromise<string[]> {

            var url = this.urls.Addresses();
            var params = { query: query, type: 'all' };
            var config = { params: params, timeout: 1000 };

            var defer = this.$q.defer<string[]>();

            this.logger.log('starting request for address', null, this, false);
            this.$http.get(url, config)
                .success((response: any) => {
                    this.logger.log('request finished successfull', response, this, false);
                    defer.resolve(response);
                })
                .error((data: any, status: number) => {
                    defer.reject(status);
                }).finally(() => {
                    this.logger.log('request finished', null, this, false);
                });

            return defer.promise;
        }
    }

    export class AddressesProviderRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.AddressesProvider, AddressesProvider);
        }
    }
} 