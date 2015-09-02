/// <reference path='../min.references.ts'/>

module Plugins {


    export interface IError {
        code:any;
        message:string;
    }

    export module NetworkConnection{
        export interface INetworkConnection{
            type:any;
        }
    }

    export module Globalization{
        export interface ILanguage{
            value:string;
        }

        export interface IGlobalization
        {
            getPreferredLanguage(success:(language:ILanguage)=>void, error:(error:IError)=>void);
        }
    }

    export module GeoLocation {
        export interface IError {
            code:any;
            message:string;
        }

        export interface IOptions {
            maximumAge: number;
            timeout: number;
            enableHighAccuracy: boolean;
        }

        export interface ICoordinates {
            latitude:number;
            longitude:number;
            altitude:number;
            accuracy:number;
            altitudeAccuracy:number;
            heading:number;
            speed:number;
        }

        export interface IPosition {
            coords:ICoordinates;
            timestamp:Date;
        }

        export interface IGeoLocationPlugin {
            getCurrentPosition(geolocationSuccess:(position:IPosition)=>void, geolocationError?:(error:IError)=>void,
                               geolocationOptions?:IOptions);
            watchPosition(geolocationSuccess:(position:IPosition)=>void, geolocationError?:(error:IError)=>void,
                          geolocationOptions?:IOptions):number;
            clearWatch(watchId:number);
        }
    }
}