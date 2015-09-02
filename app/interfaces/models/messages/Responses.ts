module Models {
    export module Messages {
        export interface ICoordinates {
            XLatitude: number;
            YLongitude: number;
        }

        export interface IConnection {
            StartStation: string;
            StartTime: number;
            EndTime: number;
            Duration: number;
            Changing: number;
            Sections: Array<ISection>;
        }

        export interface IRoutes {
            IsTooCloseForFoot: boolean;
            Connections: Array<IConnection>;
            GenerationTime:number;
        }

        export interface ISection {
            SequenceId: number;
            Departure: number;
            Arrival: number;
            From: string;
            To: string;
            Direction: IDirection;
            JourneyName: string;
            Platform: string;
        }

        export interface IDirection {
            From: ICoordinates;
            To: ICoordinates;
        }
    }
}