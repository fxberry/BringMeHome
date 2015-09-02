/// <reference path='../min.references.ts'/>

module Services {
    class OpenPedestrianRoute{
        static $inject = [
            $injections.Services.OpenLink,
            $injections.Services.Urls
        ];
        constructor(private openLink:Services.IOpenLink, private urls:Services.IUrls){

        }

        Action:IOpenPedestrianRoute = (from:Models.ICoordinates, to:Models.ICoordinates) =>{
            var f = from.xLatitude + ',' + from.yLongitude;
            var t = to.xLatitude + ',' + to.yLongitude;
            var url = this.urls.PedestrianRouteMap(f, t);
            this.openLink(url);
        };
    }

    class OpenPedestrianRouteFactory {
    
        $get = [$injections.Angular.$injector, ($injector:angular.auto.IInjectorService):IOpenPedestrianRoute => {
            var provider = $injector.instantiate(OpenPedestrianRoute);
            return provider.Action;
        }]
    }

    export class OpenPedestrianRouteRegister{
        constructor($module:angular.IModule)
        {
            $module.provider($injections.Services.OpenPedestrianRoute, OpenPedestrianRouteFactory);
        }
    }
}