/// <reference path='../min.references.ts'/>
var Models;
(function (Models) {
    Models.ConnectionsStates = {
        Undefined: 'Undefined',
        QueryingGeoCoordinates: 'QueryingGeoCoordinates',
        GeoCoordinatesError: 'GeoCoordinatesError',
        QueryingAroundStations: 'QueryingAroundStations',
        AroundStationsError: 'AroundStationsError',
        QueryingNearestStation: 'QueryingNearestStation',
        NearestStationError: 'NearestStationError',
        Resolved: 'Resolved'
    };
})(Models || (Models = {}));
//# sourceMappingURL=StateMachines.js.map
