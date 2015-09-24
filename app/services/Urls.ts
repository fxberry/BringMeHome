/// <reference path='../min.references.ts'/>
module Services {

    class Urls implements IUrls {
        static $inject = [
            $injections.Constants.ApiHost
        ];

        constructor(private apiHost: string) {
        }

        Addresses = (): string => {
            return this.apiHost + 'api/addresses';
        };
    }

    export class UrlsRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.Urls, Urls);
        }
    }
}