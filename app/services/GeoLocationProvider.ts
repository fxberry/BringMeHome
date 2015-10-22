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

            var onSuccess = (position: Plugins.GeoLocation.IPosition) => this.OnPositionReceived(position, defer);
            var onError = (error: Plugins.GeoLocation.IError) => this.OnError(error, defer);
            this.geoLocationPlugin.getCurrentPosition(onSuccess, onError, new GeoLocationOptions());

            return defer.promise;
        };

        private OnPositionReceived = (pos: Plugins.GeoLocation.IPosition, defer: angular.IDeferred<GeoPosition.IPosition>) => {
            var coordinates = new Coordinates();
            coordinates.Accuracy = pos.coords.accuracy;
            coordinates.Altitude = pos.coords.altitude;
            coordinates.AltitudeAccuracy = pos.coords.altitudeAccuracy;
            coordinates.Heading = pos.coords.heading;

            coordinates.Latitude = pos.coords.latitude;
            coordinates.Longitude = pos.coords.longitude;

            coordinates.Speed = pos.coords.speed;

            var position = new Position();
            position.TimeStamp = pos.timestamp;
            position.Coordinates = coordinates;

            defer.resolve(position);
        };

        private OnError = (er: Plugins.GeoLocation.IError, defer: angular.IDeferred<GeoPosition.IPosition>) => {
            var error = new Error();
            error.Code = er.code;
            error.Message = er.message;

            this.logger.logError(er.message, er, this, false);
            defer.reject(error);
        };
    }

    class GeoLocationProviderFactory {

        $get = [$injections.Angular.$injector, ($injector: angular.auto.IInjectorService): IGeoLocationProvider => {
            var provider = $injector.instantiate(GeoLocationProvider);
            return provider.Provider;
        }]
    }

    export class GeoLocationProviderRegister {
        constructor($module: angular.IModule) {
            $module.provider($injections.Services.GeoLocation, GeoLocationProviderFactory);
        }
    }
}