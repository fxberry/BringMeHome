/// <reference path='../min.references.ts'/>

module Filters {

    class DurationFilter {
        filter = (millseconds:number) => {

            var timeString = "";

            return timeString;
        };
    }

    var DurationFilterProvider = [$injections.Angular.$injector, ($injector:angular.auto.IInjectorService) => {
        var instance = $injector.instantiate(DurationFilter);
        return  instance.filter;
    }];

    export class DurationFilterRegister {
        constructor($module:angular.IModule) {
            $module.filter($injections.Filters.DurationFilter, DurationFilterProvider);
        }
    }
}