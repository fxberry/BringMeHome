/// <reference path='all.references.ts'/>

class RegisterComponents {
    constructor(application: angular.IModule) {

        new Routes.UIRoutesRegister(application);

        new Services.IonicConfigServicesRegister(application);

        new Framework.EventFactoryRegister(application);

    }
}

new RegisterComponents(angular.module($injections.Constants.AppName));