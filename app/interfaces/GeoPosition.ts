/// <reference path='../min.references.ts'/>
module GeoPosition {
    export interface IError {
        Code:any;
        Message:string;
    }

    export interface ICoordinates {
        Latitude:number;
        Longitude:number;
        Altitude:number;
        Accuracy:number;
        AltitudeAccuracy:number;
        Heading:number;
        Speed:number;
    }

    export interface IPosition {
        Coordinates:ICoordinates;
        TimeStamp:Date;
    }
}