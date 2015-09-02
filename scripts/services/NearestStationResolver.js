/// <reference path='../min.references.ts'/>
/// <reference path='../models/enums.ts'/>
/// <reference path='../models/StateMachines.ts'/>
var Services;
(function (Services) {
    var Coordinates = (function () {
        function Coordinates() {
        }
        return Coordinates;
    })();

    var NearestStationResolver = (function () {
        function NearestStationResolver(eventFactory, stateMachine, geoLocationProvider, locations, $enumerable, walkDistance) {
            var _this = this;
            this.stateMachine = stateMachine;
            this.geoLocationProvider = geoLocationProvider;
            this.locations = locations;
            this.$enumerable = $enumerable;
            this.walkDistance = walkDistance;
            this.UndefinedEvent = null;
            this.GeoLocationResolvedEvent = null;
            this.GeoLocationErrorEvent = null;
            this.AroundStationsResolvedEvent = null;
            this.AroundStationsErrorEvent = null;
            this.ResolvedEvent = null;
            this.NearestStationErrorEvent = null;
            this.GeoPosition = null;
            this.ResolveNearestStation = function () {
                _this.stateMachine.RequestInitialize();
            };
            this.OnUndefined = function (subscriber) {
                return _this.UndefinedEvent.Subscribe(subscriber);
            };
            this.OnGeoLocationResolved = function (subscriber) {
                return _this.GeoLocationResolvedEvent.Subscribe(subscriber);
            };
            this.OnGeoLocationError = function (subscriber) {
                return _this.GeoLocationErrorEvent.Subscribe(subscriber);
            };
            this.OnAroundStationsResolved = function (subscriber) {
                return _this.AroundStationsResolvedEvent.Subscribe(subscriber);
            };
            this.OnAroundStationsError = function (subscriber) {
                return _this.AroundStationsErrorEvent.Subscribe(subscriber);
            };
            this.OnResolved = function (subscriber) {
                return _this.ResolvedEvent.Subscribe(subscriber);
            };
            this.OnNearestStationError = function (subscriber) {
                return _this.NearestStationErrorEvent.Subscribe(subscriber);
            };
            this.GeoLocationResolved = function (coordinates) {
                _this.stateMachine.RequestAroundStations(coordinates);
            };
            this.GeoLocationError = function (error) {
                _this.stateMachine.RequestGeoCoordinatesError(error);
            };
            this.OnAroundStationsResolvedCallback = function (locations) {
                if (locations.length === 0)
                    _this.stateMachine.RequestAroundStationsError(0);
                else
                    _this.stateMachine.RequestNearestStation(locations);
            };
            this.OnAroundStationsErrorCallback = function (status) {
                _this.stateMachine.RequestAroundStationsError(status);
            };
            this.OnWalkDistanceError = function (status) {
                _this.stateMachine.RequestNearestStationError(status);
            };
            this.OnWalkDistanceResolved = function (walkDistance) {
                var nearestStation = _this.$enumerable.from(walkDistance).minBy(function (item) {
                    return item.Distance;
                });
                _this.stateMachine.RequestResolved(nearestStation);
            };
            this.OnUndefinedHandler = function () {
                _this.UndefinedEvent.Fire();
                _this.stateMachine.RequestGeoCoordinates();
            };
            this.OnQueryingGeoCoordinatesHandler = function () {
                _this.geoLocationProvider().then(_this.GeoLocationResolved, _this.GeoLocationError);
            };
            this.OnGeoCoordinatesErrorHandler = function (event, from, to, error) {
                _this.GeoLocationErrorEvent.Fire(error);
            };
            this.OnAroundStationsErrorHandler = function (event, from, to, status) {
                _this.AroundStationsErrorEvent.Fire(status);
            };
            this.OnQueryingAroundStationsHandler = function (event, from, to, currentPosition) {
                _this.GeoLocationResolvedEvent.Fire();
                _this.locations.FromCoordinates(currentPosition).then(_this.OnAroundStationsResolvedCallback, _this.OnAroundStationsErrorCallback);
                var coordinates = new Coordinates();
                coordinates.xLatitude = currentPosition.Coordinates.Latitude;
                coordinates.yLongitude = currentPosition.Coordinates.Longitude;
                _this.GeoPosition = coordinates;
            };
            this.OnQueryingNearestStationHandler = function (event, from, to, locations) {
                _this.AroundStationsResolvedEvent.Fire();
                _this.walkDistance(_this.GeoPosition, locations).then(_this.OnWalkDistanceResolved, _this.OnWalkDistanceError);
            };
            this.OnNearestStationErrorHandler = function (event, from, to, status) {
                _this.NearestStationErrorEvent.Fire(status);
            };
            this.OnResolvedHandler = function (event, from, to, nearestStation) {
                _this.ResolvedEvent.Fire(nearestStation);
            };
            this.UndefinedEvent = eventFactory('OnUndefined');
            this.GeoLocationResolvedEvent = eventFactory('OnGeoLocationResolved');
            this.GeoLocationErrorEvent = eventFactory('OnGeoLocationError');
            this.AroundStationsResolvedEvent = eventFactory('OnAroundStationsResolved');
            this.AroundStationsErrorEvent = eventFactory('OnAroundStationsError');
            this.ResolvedEvent = eventFactory('OnResolved');
            this.NearestStationErrorEvent = eventFactory('OnNearestStationError');

            stateMachine.onenterUndefined = this.OnUndefinedHandler;
            stateMachine.onenterQueryingGeoCoordinates = this.OnQueryingGeoCoordinatesHandler;
            stateMachine.onenterGeoCoordinatesError = this.OnGeoCoordinatesErrorHandler;
            stateMachine.onenterQueryingAroundStations = this.OnQueryingAroundStationsHandler;
            stateMachine.onenterAroundStationsError = this.OnAroundStationsErrorHandler;
            stateMachine.onenterQueryingNearestStation = this.OnQueryingNearestStationHandler;
            stateMachine.onenterNearestStationError = this.OnNearestStationErrorHandler;
            stateMachine.onenterResolved = this.OnResolvedHandler;
        }
        NearestStationResolver.$inject = [
            $injections.Framework.EventFactory,
            $injections.StateMachines.ConnectionsStateMachine,
            $injections.Services.GeoLocation,
            $injections.Services.Locations,
            $injections.Constants.$Enumerable,
            $injections.Services.WalkDistance
        ];
        return NearestStationResolver;
    })();

    var NearestStationResolverRegister = (function () {
        function NearestStationResolverRegister($module) {
            $module.service($injections.Services.NearestStationResolver, NearestStationResolver);
        }
        return NearestStationResolverRegister;
    })();
    Services.NearestStationResolverRegister = NearestStationResolverRegister;
})(Services || (Services = {}));
//# sourceMappingURL=NearestStationResolver.js.map
