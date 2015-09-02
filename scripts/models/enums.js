/// <reference path='../min.references.ts'/>
var Models;
(function (Models) {
    (function (ConnectionsResolveStates) {
        ConnectionsResolveStates[ConnectionsResolveStates["Undefined"] = 1] = "Undefined";
        ConnectionsResolveStates[ConnectionsResolveStates["QueryingGeoCoordinates"] = 2] = "QueryingGeoCoordinates";
        ConnectionsResolveStates[ConnectionsResolveStates["GeoCoordinatesError"] = 4] = "GeoCoordinatesError";
        ConnectionsResolveStates[ConnectionsResolveStates["QueryingNearestStation"] = 8] = "QueryingNearestStation";
        ConnectionsResolveStates[ConnectionsResolveStates["NearestStationError"] = 16] = "NearestStationError";
        ConnectionsResolveStates[ConnectionsResolveStates["InternetConnectionError"] = 32] = "InternetConnectionError";
        ConnectionsResolveStates[ConnectionsResolveStates["Resolved"] = 64] = "Resolved";
    })(Models.ConnectionsResolveStates || (Models.ConnectionsResolveStates = {}));
    var ConnectionsResolveStates = Models.ConnectionsResolveStates;
})(Models || (Models = {}));
//# sourceMappingURL=enums.js.map
