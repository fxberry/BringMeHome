/// <reference path='../min.references.ts'/>

module Services {

    export interface ISelectedRoute {
        (connection?: Models.IRoute): Models.IRoute;
    }

    export interface ISelectedPedestrianRoute {
        (pedestrianRoute?: Models.IPedestrianRoute): Models.IPedestrianRoute;
    }

    export interface ISelectedLocation {
        (selectedLocation?: string): string;
    }

    export interface IOpenPedestrianRoute {
        (from: Models.ICoordinates, to: Models.ICoordinates);
    }

    export interface IOpenLink {
        (url: string);
    }

    export interface IStrings {
        (key: string, ...args: any[]): string;
    }

    export interface IAvailableRoutes {
        (routes?: Models.IRoute[]): Models.IRoute[];
    }

    export interface IGeoLocationProvider {
        (): angular.IPromise<GeoPosition.IPosition>;
    }

    export interface IAddressesProvider {
        getAddresses(query: string): angular.IPromise<string[]>;
    }

    export interface IRoutesProvider {
        GetRoutes(position: GeoPosition.IPosition): angular.IPromise<Models.IRoutes>;
    }

    export interface IRoutesConverter {
        Convert(response: Models.Messages.IRoutes): Models.IRoutes;
    }

    export interface IUrls {
        Addresses(): string;
        Routes():string;
        PedestrianRouteMap(from: string, to: string): string;
    }

    export interface INavigation {
        Home();
        Location(type: string);
        Language();
        Connections(routes: Models.IRoute[]);
        TravelDetails(route: Models.IRoute);
        Map(from: any, to: any);
    }

    export interface ILocalStorage {
        get(key: string): any;
        save(key: string, data: any): void;
        remove(key: string): void;
        clearAll(): void;
    }

    export interface ITargetAddress {
        GetAddress(): string;
        GetAddressBy(type: string): string;
        SetAddress(type: string, address: string);
        HasAddress(type: string): boolean;
        hasAllLocationSet(): boolean;
    }
}