/// <reference path='../min.references.ts'/>
class AngularInit {
    constructor() {
        angular.module($injections.Constants.AppName)
            .constant($injections.Constants.ApiHost, 'http://bringmehome.2bitcloud.ch/')
            .constant($injections.Constants.$Enumerable, (<any>window).Enumerable)
            .constant($injections.Constants.$JQuery, $)
            .constant($injections.Constants.$Navigator, navigator)
            .constant($injections.Constants.$Angular, angular);
    }

    private isDefined(value) {
        return value !== null && value !== undefined;
    }




} 