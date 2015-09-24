/// <reference path='../min.references.ts'/>

module Services{

    class TargetAddress implements Services.ITargetAddress {
        private static key:string = '_settings_address';

        static $inject = [
            $injections.Services.LocalStorage
            //,$injections.Services.SelectedLocation
        ];
        constructor(private localStorage:Services.ILocalStorage/*, private selectedLocation: Services.ISelectedLocation*/){
        }

        //GetAddress = () => {
        //    return this.localStorage.get(this.selectedLocation() + TargetAddress.key);
        //};

        GetAddressBy = (type: string) => {
            return this.localStorage.get(type + TargetAddress.key);
        };

        SetAddress = (type: string, address:string) => {
            this.localStorage.save(type + TargetAddress.key, address);
        };

        HasAddress = (type: string) => {
            return this.localStorage.get(type + TargetAddress.key) !== null;
        };

        hasAllLocationSet = () => {
            return this.GetAddressBy($constants.TargetAdresses.home) &&
                this.GetAddressBy($constants.TargetAdresses.work) &&
                this.GetAddressBy($constants.TargetAdresses.love);
        }
    }

    export class LocationsRegister{
        constructor($module:angular.IModule)
        {
            $module.service($injections.Services.TargetAddress, TargetAddress);
        }
    }
}