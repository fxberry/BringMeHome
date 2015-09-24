/// <reference path='../min.references.ts'/>

module Services {

    export interface ILocalStorage {
        get(key:string): any;
        save(key:string, data:any): void;
        remove(key:string): void;
        clearAll(): void;
    }

}