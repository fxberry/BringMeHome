/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var ConnectionUIRepresentation = (function () {
        function ConnectionUIRepresentation() {
        }
        return ConnectionUIRepresentation;
    })();

    var SectionUIRepresentation = (function () {
        function SectionUIRepresentation() {
        }
        return SectionUIRepresentation;
    })();

    var Direction = (function () {
        function Direction() {
        }
        return Direction;
    })();

    var Coordinates = (function () {
        function Coordinates() {
        }
        return Coordinates;
    })();

    var ConnectionsConverter = (function () {
        function ConnectionsConverter($enumerable, strings, settings) {
            var _this = this;
            this.$enumerable = $enumerable;
            this.strings = strings;
            this.settings = settings;
            this.ToConnectionUIPresentation = function (response, walkDistance) {
                return _this.$enumerable.from(response.connections).select(function (connection) {
                    var walkTime = (walkDistance.Time * 1000);
                    var walkSection = _this.$enumerable.from(connection.sections).where(function (section) {
                        return section.arrival.location.name === _this.settings.GetAddress();
                    }).firstOrDefault();

                    var representation = new ConnectionUIRepresentation();
                    representation.StartStation = connection.from.location.name;

                    var departure = new Date(Date.parse(connection.sections[0].departure.departure));
                    representation.StartTime = new Date(departure.getTime() - walkTime);

                    if (walkSection !== null) {
                        representation.EndTime = new Date(Date.parse(walkSection.arrival.arrival));
                    } else {
                        representation.EndTime = new Date(Date.parse(connection.to.arrival));
                    }

                    representation.Duration = (representation.EndTime - representation.StartTime);
                    representation.Changing = connection.sections.length - 1;
                    representation.Original = connection;
                    return representation;
                }).where(function (connection) {
                    return connection.StartTime.getTime() > new Date().getTime();
                }).toArray();
            };
            this.ToSectionUIPresentation = function (connection, walkDistance) {
                var sequencePosition = 1;
                var sections = _this.$enumerable.from(connection.Original.sections).select(function (section) {
                    var representation = new SectionUIRepresentation();
                    representation.Departure = new Date(Date.parse(section.departure.departure));
                    representation.Arrival = new Date(Date.parse(section.arrival.arrival));
                    representation.From = section.departure.location.name;
                    representation.To = section.arrival.location.name;
                    if (section.journey === null) {
                        representation.TravelWith = _this.strings('travel with: walk section');
                        var direction = new Direction();
                        direction.From = _this.ToCoordinates(section.departure.location.coordinate);
                        direction.To = _this.ToCoordinates(section.arrival.location.coordinate);
                        representation.Direction = direction;
                    } else {
                        representation.TravelWith = section.journey.name;
                        representation.Direction = null;
                        representation.Platform = section.departure.platform;
                    }
                    sequencePosition++;
                    representation.SequencePosition = sequencePosition;
                    return representation;
                });

                var array = sections.toArray();
                var departure = new Date(Date.parse(connection.Original.sections[0].departure.departure));
                array.splice(0, 0, _this.GetFirstWalkSection(walkDistance, departure));
                return array;
            };
            this.GetFirstWalkSection = function (walkDistance, departure) {
                var section = new SectionUIRepresentation();
                section.Departure = new Date(departure.getTime() - (walkDistance.Time * 1000));
                section.Arrival = departure;
                section.From = _this.strings('journey: current position');
                section.To = walkDistance.Location.name;
                section.TravelWith = _this.strings('travel with: walk section');
                section.SequencePosition = 1;

                var direction = new Direction();
                direction.From = walkDistance.From;
                direction.To = walkDistance.Location.coordinates;
                section.Direction = direction;

                return section;
            };
            this.ToCoordinates = function (coordinates) {
                var coords = new Coordinates();
                coords.xLatitude = coordinates.y;
                coords.yLongitude = coordinates.x;
                return coords;
            };
        }
        ConnectionsConverter.$inject = [
            $injections.Constants.$Enumerable,
            $injections.Services.Strings,
            $injections.Services.Settings
        ];
        return ConnectionsConverter;
    })();

    var ConnectionsConverterRegister = (function () {
        function ConnectionsConverterRegister($module) {
            $module.service($injections.Services.ConnectionsConverter, ConnectionsConverter);
        }
        return ConnectionsConverterRegister;
    })();
    Services.ConnectionsConverterRegister = ConnectionsConverterRegister;
})(Services || (Services = {}));
//# sourceMappingURL=ConnectionsConverter.js.map
