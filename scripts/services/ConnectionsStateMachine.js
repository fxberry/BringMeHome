/// <reference path='../min.references.ts'/>
/// <reference path='../models/StateMachines.ts'/>
var StateMachines;
(function (StateMachines) {
    var ConnectionsStates = Models.ConnectionsStates;

    var StateMachineFactory = (function () {
        function StateMachineFactory() {
            this.$get = [function () {
                    var Transitions = {
                        Initialize: 'RequestInitialize',
                        RequestGeoCoordinates: 'RequestGeoCoordinates',
                        RequestGeoCoordinatesError: 'RequestGeoCoordinatesError',
                        RequestAroundStations: 'RequestAroundStations',
                        RequestAroundStationsError: 'RequestAroundStationsError',
                        RequestNearestStation: 'RequestNearestStation',
                        RequestNearestStationError: 'RequestNearestStationError',
                        RequestResolved: 'RequestResolved'
                    };

                    var config = {
                        events: [
                            {
                                name: Transitions.Initialize,
                                from: [
                                    ConnectionsStates.Undefined,
                                    ConnectionsStates.GeoCoordinatesError,
                                    ConnectionsStates.NearestStationError,
                                    ConnectionsStates.AroundStationsError,
                                    ConnectionsStates.QueryingAroundStations,
                                    ConnectionsStates.QueryingGeoCoordinates,
                                    ConnectionsStates.QueryingNearestStation,
                                    ConnectionsStates.Resolved,
                                    'none'],
                                to: ConnectionsStates.Undefined
                            },
                            {
                                name: Transitions.RequestGeoCoordinates,
                                from: ConnectionsStates.Undefined,
                                to: ConnectionsStates.QueryingGeoCoordinates
                            },
                            {
                                name: Transitions.RequestGeoCoordinatesError,
                                from: ConnectionsStates.QueryingGeoCoordinates,
                                to: ConnectionsStates.GeoCoordinatesError
                            },
                            {
                                name: Transitions.RequestAroundStations,
                                from: ConnectionsStates.QueryingGeoCoordinates,
                                to: ConnectionsStates.QueryingAroundStations
                            },
                            {
                                name: Transitions.RequestAroundStationsError,
                                from: ConnectionsStates.QueryingAroundStations,
                                to: ConnectionsStates.AroundStationsError
                            },
                            {
                                name: Transitions.RequestNearestStation,
                                from: ConnectionsStates.QueryingAroundStations,
                                to: ConnectionsStates.QueryingNearestStation
                            },
                            {
                                name: Transitions.RequestNearestStationError,
                                from: ConnectionsStates.QueryingNearestStation,
                                to: ConnectionsStates.NearestStationError
                            },
                            {
                                name: Transitions.RequestResolved,
                                from: ConnectionsStates.QueryingNearestStation,
                                to: ConnectionsStates.Resolved
                            }
                        ]
                    };

                    return StateMachine.create(config);
                }];
        }
        return StateMachineFactory;
    })();

    var ConnectionsStateMachineFactoryRegister = (function () {
        function ConnectionsStateMachineFactoryRegister($module) {
            $module.provider($injections.StateMachines.ConnectionsStateMachine, StateMachineFactory);
        }
        return ConnectionsStateMachineFactoryRegister;
    })();
    StateMachines.ConnectionsStateMachineFactoryRegister = ConnectionsStateMachineFactoryRegister;
})(StateMachines || (StateMachines = {}));
//# sourceMappingURL=ConnectionsStateMachine.js.map
