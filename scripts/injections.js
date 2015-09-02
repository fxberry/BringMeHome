var $injections;
(function ($injections) {
    (function (Directives) {
        Directives.MaxHeightDirective = 'maxHeight';
        Directives.LogoFooterDirective = 'logoFooter';
    })($injections.Directives || ($injections.Directives = {}));
    var Directives = $injections.Directives;

    (function (Constants) {
        Constants.AppName = 'bring.me.home.app';
        Constants.HostConstant = 'host';
        Constants.$Angular = '$angular';
        Constants.$Navigator = '$navigator';
        Constants.$JQuery = '$jquery';
        Constants.$Enumerable = '$Enumerable';
        Constants.MapQuestHost = 'MapQuestHost';
        Constants.PedestrianRouteHost = 'PedestrianRouteHost';
    })($injections.Constants || ($injections.Constants = {}));
    var Constants = $injections.Constants;

    (function (Framework) {
        Framework.EventFactory = 'EventFactory';
    })($injections.Framework || ($injections.Framework = {}));
    var Framework = $injections.Framework;

    (function (Filters) {
        Filters.DurationFilter = 'duration';
        Filters.FormatFilter = 'format';
    })($injections.Filters || ($injections.Filters = {}));
    var Filters = $injections.Filters;

    (function (StateMachines) {
        StateMachines.ConnectionsStateMachine = 'ConnectionsStateMachine';
    })($injections.StateMachines || ($injections.StateMachines = {}));
    var StateMachines = $injections.StateMachines;

    (function (Routes) {
        Routes.DefaultState = 'DefaultState';
        Routes.SettingsState = 'SettingsState';
        Routes.HomeState = 'HomeState';
        Routes.TravelState = 'TravelState';
        Routes.TravelDetailsState = 'TravelDetailsState';
    })($injections.Routes || ($injections.Routes = {}));
    var Routes = $injections.Routes;

    (function (Controllers) {
        Controllers.TravelDetailsController = 'TravelDetailsController';
        Controllers.DefaultController = 'DefaultController';
        Controllers.SettingsController = 'SettingsController';
        Controllers.HomeController = 'HomeController';
        Controllers.TravelController = 'TravelController';
    })($injections.Controllers || ($injections.Controllers = {}));
    var Controllers = $injections.Controllers;

    (function (Services) {
        Services.SelectedConnection = 'SelectedConnection';
        Services.ConnectionsConverter = 'ConnectionsConverter';
        Services.OpenPedestrianRoute = 'OpenPedestrianRoute';
        Services.OpenLink = 'OpenLink';
        Services.Strings = 'Strings';
        Services.WalkDistance = 'WalkDistance';
        Services.StartStation = 'StartStation';
        Services.NearestStationResolver = 'NearestStationResolver';
        Services.Connections = 'Connections';
        Services.GeoLocation = 'GeoLocation';
        Services.Locations = 'Locations';
        Services.Urls = 'Urls';
        Services.LocalStorage = 'LocalStorage';
        Services.Settings = 'Settings';
        Services.Navigation = 'Navigation';
    })($injections.Services || ($injections.Services = {}));
    var Services = $injections.Services;

    (function (Ionic) {
        Ionic.$ionicLoading = '$ionicLoading';
        Ionic.$ionicPopup = '$ionicPopup';
    })($injections.Ionic || ($injections.Ionic = {}));
    var Ionic = $injections.Ionic;

    (function (Angular) {
        Angular.$templateCache = '$templateCache';
        Angular.$interpolate = '$interpolate';
        Angular.$injector = '$injector';
        Angular.$Scope = '$scope';
        Angular.$RootScope = '$rootScope';
        Angular.$filter = '$filter';
        Angular.$controller = '$controller';
        Angular.$HttpService = '$http';
        Angular.$HttpProvider = '$httpProvider';
        Angular.$QService = '$q';
        Angular.$TimeoutService = '$timeout';
        Angular.$Window = '$window';
        Angular.$SCEDelegateProvider = '$sceDelegateProvider';
    })($injections.Angular || ($injections.Angular = {}));
    var Angular = $injections.Angular;

    (function (Plugins) {
        Plugins.NetworkConnectionPlugin = 'NetworkConnectionPlugin';
        Plugins.GlobalizationPlugin = 'GlobalizationPlugin';
        Plugins.GeoLocationPlugin = 'GeoLocationPlugin';
    })($injections.Plugins || ($injections.Plugins = {}));
    var Plugins = $injections.Plugins;

    (function (UIRouter) {
        UIRouter.$StateProvider = '$stateProvider';
        UIRouter.$UrlRouterProvider = '$urlRouterProvider';
        UIRouter.$StateService = '$state';
        UIRouter.$StateParams = '$stateParams';
    })($injections.UIRouter || ($injections.UIRouter = {}));
    var UIRouter = $injections.UIRouter;
})($injections || ($injections = {}));
//# sourceMappingURL=injections.js.map
