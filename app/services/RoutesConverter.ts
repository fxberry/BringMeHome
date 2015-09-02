module Services {
    class Routes implements Models.IRoutes {
        IsTooCloseForFoot: boolean;
        Routes: Models.IRoute[];
    }

    class Route implements Models.IRoute {
        StartTime: Date;
        EndTime: Date;
        Duration: number;
        StartStation: string;
        Changing: number;
        Sections:Array<Models.ISection>;
    }

    class Section implements Models.ISection {
        SequencePosition: number;
        Departure: Date;
        Arrival: Date;
        From: string;
        To: string;
        TravelWith: string;
        Platform: string;
        Direction: Models.IDirection;
    }

    class Direction implements Models.IDirection {
        From: Models.ICoordinates;
        To: Models.ICoordinates;
    }

    class Coordinates implements Models.ICoordinates {
        xLatitude: number;
        yLongitude: number;
    }

    class RoutesConverter implements IRoutesConverter {
        static $inject = [
            $injections.Constants.$Enumerable,
            $injections.Services.Strings
        ];

        constructor(private $enumerable: linqjs.EnumerableStatic,
            private strings: Services.IStrings) {
            
        }

        Convert(response: Models.Messages.IRoutes): Models.IRoutes {
            var models = this.$enumerable.from(response.Connections).select((item: Models.Messages.IConnection) => {
                var model = new Route();
                model.StartStation = item.StartStation;
                model.StartTime = new Date(item.StartTime);
                model.EndTime = new Date(item.EndTime);
                model.Duration = item.Duration;
                model.Changing = item.Changing;
                model.Sections = this.SectionConvert(item.Sections);
                return model;
            }).toArray();
            var routes = new Routes();
            routes.IsTooCloseForFoot = response.IsTooCloseForFoot;
            routes.Routes = models;
            return routes;
        }

        private SectionConvert(sections: Models.Messages.ISection[]): Models.ISection[] {
            var models = this.$enumerable.from(sections).select((item: Models.Messages.ISection) => {
                var model = new Section();
                model.Departure = new Date(item.Departure);
                model.Arrival = new Date(item.Arrival);
                model.From = item.From;
                model.To = item.To;
                model.SequencePosition = item.SequenceId;
                if (item.Direction !== undefined && item.Direction !== null) {
                    model.TravelWith = this.strings('travel with: walk section');
                    var direction = new Direction();
                    direction.From = this.ToCoordinates(item.Direction.From);
                    direction.To = this.ToCoordinates(item.Direction.To);
                    model.Direction = direction;
                }
                else {
                    model.TravelWith = item.JourneyName;
                    model.Direction = null;
                    model.Platform = item.Platform;
                }
                return model;
            }).toArray();
            return models;
        }

        private ToCoordinates (coordinates: Models.Messages.ICoordinates): Models.ICoordinates {
            var coords = new Coordinates();
            coords.xLatitude = coordinates.XLatitude;
            coords.yLongitude = coordinates.YLongitude;
            return coords;
        }
    }

    export class RoutesConverterRegister {
        constructor($module: angular.IModule) {
            $module.service($injections.Services.RoutesConverter, RoutesConverter);
        }
    }
}