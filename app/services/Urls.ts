/// <reference path='../min.references.ts'/>
module Services {

    class Urls implements IUrls {
        static $inject = [
            $injections.Constants.HostConstant,
            $injections.Constants.PedestrianRouteHost,
            $injections.Constants.ApiHost
        ];

        constructor(private host: string,
            private pedestrianRoute: string,
            private apiHost: string) {
        }

        Addresses = (): string => {
            return this.apiHost + 'api/addresses';
        };

        public Routes(): string {
            return this.apiHost + 'api/routes/GetRoutes';
        }

        PedestrianRouteMap = (from: string, to: string): string => {
            return this.pedestrianRoute + '?saddr=' + from + '&daddr=' + to + '&maptype=map&vs=directions&routeType=pedestrian';
        };
    }

    export class UrlsRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.Urls, Urls);
        }
    }
}