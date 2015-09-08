/// <reference path='all.references.ts'/>

class RegisterComponents {
    constructor(application: angular.IModule) {

        new Routes.UIRoutesRegister(application);

        new Controllers.MenuControllerRegister(application);
        new Controllers.HomeControllerRegister(application);
        new Controllers.LanguageControllerRegister(application);

        new Services.IonicConfigServicesRegister(application);

        new Framework.EventFactoryRegister(application);

    }
}

new RegisterComponents(angular.module($injections.Constants.AppName));