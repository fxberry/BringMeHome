/// <reference path='../min.references.ts'/>

module Routes{
    
    export interface ICustomState extends angular.ui.IState
    {
        name:string;
        url:string;
        templateUrl: string;
        controller: string;
    }

    export interface ICustomSubState extends angular.ui.IState {
        name: string;
        url: string;
        views: {};
    }
}