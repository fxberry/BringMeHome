module $injections{

    export module Directives {
        export var MaxHeightDirective: string = 'maxHeight';
        export var PieMenuDirective: string = 'pieMenu';
    }

    export module Constants{
        export var ApiHost: string = 'ApiHost';
        export var AppName:string = 'bringmehome';
        export var HostConstant:string = 'host';
        export var $Angular:string = '$angular';
        export var $Navigator:string = '$navigator';
        export var $JQuery:string = '$jquery';
        export var $Enumerable:string = '$Enumerable';
        export var PedestrianRouteHost:string = 'PedestrianRouteHost';
    }

    export module Framework{
        export var EventFactory:string = 'EventFactory';
    }

    export module Filters{
        export var DurationFilter:string = 'duration';
        export var FormatFilter:string = 'format';
    }

    export module Routes{
        export var LocationState: string = 'menu.location';
        export var LanguageState: string = 'menu.language';
        export var HomeState:string = 'menu.home';
        export var ConnectionsState:string = 'menu.connections';
        export var TravelDetailsState: string = 'menu.travel-details';
        export var MapState: string = 'menu.map';        
    }

    export module Controllers{
        export var TravelDetailsController:string = 'TravelDetailsController';
        export var DefaultController:string = 'DefaultController';
        export var LocationController: string = 'LocationController';
        export var LanguageController: string = 'LanguageController';
        export var HomeController:string = 'HomeController';
        export var ConnectionsController: string = 'ConnectionsController';
        export var MapController: string = 'MapController';
        export var LoadingController: string = 'LoadingController';
        export var MenuController: string = 'MenuController';
    }

    export module Services{
        export var RoutesConverter: string = 'RoutesConverter';
        export var AddressesProvider: string = 'AddressesProvider';
        export var SelectedRoute: string = 'SelectedRoute';
        export var SelectedPedestrianRoute: string = 'SelectedPedestrianRoute';
        export var OpenPedestrianRoute:string = 'OpenPedestrianRoute';
        export var OpenLink:string = 'OpenLink';
        export var Strings: string = 'Strings';
        export var LocalizationProvider: string = 'LocalizationProvider';
        export var AvailableRoutes:string = 'AvailableRoutes';
        export var GeoLocation:string = 'GeoLocation';
        export var TargetAddress:string = 'TargetAddress';
        export var Urls:string = 'Urls';
        export var LocalStorage:string = 'LocalStorage';
        export var RoutesProvider: string = 'RoutesProvider';
        export var Navigation: string = 'Navigation';
        export var Logger: string = 'Logger';
        export var SelectedLocation: string = 'SelectedLocation';
    }

    export module Ionic{
        export var $ionicLoading:string = '$ionicLoading';
        export var $ionicPopup:string = '$ionicPopup';
        export var $ionicHistory: string = '$ionicHistory';
        export var $ionicConfig: string = '$ionicConfig';
    }

    export module Angular{
        export var $templateCache:string = '$templateCache';
        export var $interpolate:string = '$interpolate';
        export var $injector:string = '$injector';
        export var $Scope:string = '$scope';
        export var $RootScope:string = '$rootScope';
        export var $filter:string = '$filter';
        export var $controller:string = '$controller';
        export var $HttpService:string = '$http';
        export var $HttpProvider:string = '$httpProvider';
        export var $QService:string = '$q';
        export var $TimeoutService:string = '$timeout';
        export var $Window:string = '$window';
        export var $SCEDelegateProvider:string = '$sceDelegateProvider';
    }

    export module UIRouter{
        export var $StateProvider:string = '$stateProvider';
        export var $UrlRouterProvider:string = '$urlRouterProvider';
        export var $StateService:string = '$state';
        export var $StateParams:string = '$stateParams';
    }
}