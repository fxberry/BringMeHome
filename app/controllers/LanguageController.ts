/// <reference path='../min.references.ts'/>

module Controllers {

    class InputModel {
        Address: string;
    }

    interface ILanguageScope extends angular.IScope {
        Cancel();
        Save();        
        SelectedLanguage: any;
        Languages: any;        
    }

    class LanguageController {
        private stopWatch: Function = null;

        static $inject = [
            $injections.Angular.$Scope,
            $injections.Services.Navigation,            
            $injections.Services.LocalStorage,
            $injections.Services.LocalizationProvider,
            $injections.UIRouter.$StateParams,
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
            private navigation: Services.INavigation,
            private localStorage: Services.ILocalStorage,
            private localizationPorvider: any,
            private $stateParams: angular.ui.IStateParamsService,
            private $angular: angular.IAngularStatic) {

            $scope.Save = this.Save;
            $scope.Cancel = this.Cancel;
            $scope.SelectedLanguage = {code: this.localStorage.get('language') };
            $scope.Languages = this.languages;            
        }

        private Save = () => {
            if (!this.$scope.SelectedLanguage.code)
                return;

            this.localStorage.save('language', this.$scope.SelectedLanguage.code);
            this.localizationPorvider.ExecuteLocalization();

            //to ensure language is properly initialized a delay is required --> resolved with switch to angular translate
            setTimeout(() => this.Cancel(), 200);
        };

        private Cancel = () => {
            this.navigation.Home();
        };
    }

    export class LanguageControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.LanguageController, LanguageController);
        }
    }
}