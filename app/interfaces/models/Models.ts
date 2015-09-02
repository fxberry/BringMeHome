/// <reference path='../../min.references.ts'/>

module Models{
    export interface IRoutes {
        IsTooCloseForFoot: boolean;
        Routes: IRoute[];
    }

    export interface IDirection{
        From:Models.ICoordinates;
        To:Models.ICoordinates;
    }

    export interface ISection
    {
        SequencePosition:number;
        Departure:Date;
        Arrival:Date;
        From:string;
        To:string;
        TravelWith:string;
        Platform:string;
        Direction: IDirection;
    }

    export interface IPedestrianRoute {
        from: any;
        to: any;
    }

    export interface IRoute{
        StartTime:Date;
        EndTime:Date;
        Duration:number;
        StartStation:string;
        Changing: number;
        Sections: Array<Models.ISection>;
    }

    export interface ICoordinates{
        xLatitude:number;
        yLongitude:number;
    }
}