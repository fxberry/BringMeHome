/// <reference path='../min.references.ts'/>

module Services {

    export interface ILocalStorage {
        get(key:string): any;
        save(key:string, data:any): void;
        remove(key:string): void;
        clearAll(): void;
    }

    export interface ITargetAddress {
        //GetAddress(): string;
        GetAddressBy(type: string): string;
        SetAddress(type: string, address: string);
        HasAddress(type: string): boolean;
        hasAllLocationSet(): boolean;
    }

    export interface IAddressesProvider {
        getAddresses(query: string): angular.IPromise<string[]>;
    }

    export interface IUrls {
        Addresses(): string;
    }

}