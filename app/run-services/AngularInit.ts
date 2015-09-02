class AngularInit {
    constructor() {
        angular.module($injections.Constants.AppName)
            .constant($injections.Constants.ApiHost, 'http://bringmehome.2bitcloud.ch/')
            //.constant($injections.Constants.ApiHost, 'http://localhost:26321/')
            .constant($injections.Constants.HostConstant, 'http://transport.opendata.ch/v1/')
            .constant($injections.Constants.PedestrianRouteHost, 'http://www.mapquest.com/')
            .constant($injections.Constants.$Enumerable, (<any>window).Enumerable)
            .constant($injections.Plugins.GeoLocationPlugin, this.getGeoLocationPlugin())
            .constant($injections.Plugins.GlobalizationPlugin, this.getGlobalizationPlugin())
            .constant($injections.Plugins.NetworkConnectionPlugin, this.getNetworkConnectionPlugin())
            .constant($injections.Constants.$JQuery, $)
            .constant($injections.Constants.$Navigator, navigator)
            .constant($injections.Constants.$Angular, angular);
    }

    private isDefined(value) {
        return value !== null && value !== undefined;
    }

    private getGeoLocationPlugin() {
        if (this.isDefined(navigator) && this.isDefined(navigator.geolocation)) {
            navigator.geolocation.getCurrentPosition(() => { }, () => { }, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
            return navigator.geolocation;
        }

        return null;
    }

    private getGlobalizationPlugin() {        
        if (this.isDefined(navigator) && this.isDefined((<any>navigator).globalization))
            return (<any>navigator).globalization;
        return null;
    }

    private getNetworkConnectionPlugin() {
        if (this.isDefined(navigator) && this.isDefined((<any>navigator).connection))
            return (<any>navigator).connection;
        return null;
    }
} 