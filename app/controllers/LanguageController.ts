/// <reference path='../min.references.ts'/>

module Controllers {

    interface ILanguageScope extends angular.IScope {
        Cancel();
        Save();        
        SelectedLanguage: any;
        Languages: any;        
    }

    class LanguageController {

        static $inject = [
            $injections.Angular.$Scope,
            $injections.Constants.$Angular
        ];

        private languages = [
            { name: 'English', code: 'en-US' },
            { name: 'Deutsch', code: 'de-DE' },
            { name: 'Français', code: 'fr-CH' },
            { name: 'Italiano', code: 'it-CH' },            
            { name: 'Rumantsch Grischun', code: 'de-RM' },
            { name: 'Pündner Tütsch', code: 'de-GR' },
            { name: 'Züri dütsch', code: 'de-CH' }
        ];        

        constructor(
            private $scope: ILanguageScope,
            private $angular: angular.IAngularStatic) {


        }

        private Save = () => {
        };

        private Cancel = () => {
        };
    }

    export class LanguageControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.LanguageController, LanguageController);
        }
    }
}