/// <reference path='../min.references.ts'/>

module Services {

    class Coordinates implements GeoPosition.ICoordinates {
        Latitude: number;
        Longitude: number;
        Altitude: number;
        Accuracy: number;
        AltitudeAccuracy: number;
        Heading: number;
        Speed: number;
    }

    class Position implements GeoPosition.IPosition {
        Coordinates: GeoPosition.ICoordinates;
        TimeStamp: Date;
    }

    class Error implements GeoPosition.IError {
        Code: any;
        Message: string;
    }

    class GeoLocationOptions implements Plugins.GeoLocation.IOptions {
        maximumAge: number = 15000;
        timeout: number = 15000;
        enableHighAccuracy: boolean = false;
    }

    class GeoLocationProvider {
        static $inject = [
            $injections.Plugins.GeoLocationPlugin,
            $injections.Angular.$QService,
            $injections.Services.Logger
        ];
        constructor(
            private geoLocationPlugin: Plugins.GeoLocation.IGeoLocationPlugin,
            private $q: angular.IQService,
            private logger: Services.Logger) {

        }

        Provider: IGeoLocationProvider = () => {
            var defer = this.$q.defer<GeoPosition.IPosition>();

            // TODO: Create the success callback returning IPosition (think about passing the defer to handle the behavoir of the promise)
            // TODO: Create the error callback returning IError (think about passing the defer to handle the behavoir of the promise)


            return defer.promise;
        };

        private OnPositionReceived = (pos: Plugins.GeoLocation.IPosition, defer: angular.IDeferred<GeoPosition.IPosition>) => {
            // TODO: fill positions and coordinates and then resolve
        };

        private OnError = (er: Plugins.GeoLocation.IError, defer: angular.IDeferred<GeoPosition.IPosition>) => {
            // TODO: create Error object
            // TODO: Log the error via logger
            // TODO: reject the defer
        };
    }

    class GeoLocationProviderFactory {

        $get = [$injections.Angular.$injector, ($injector: angular.auto.IInjectorService): IGeoLocationProvider => {

            // TODO: Instantiate and return the instantiated Provider
        }]
    }

    export class GeoLocationProviderRegister {
        constructor($module: angular.IModule) {
            $module.provider($injections.Services.GeoLocation, GeoLocationProviderFactory);
        }
    }
}