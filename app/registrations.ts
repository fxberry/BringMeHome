/// <reference path='all.references.ts'/>

class RegisterComponents {
    constructor(application: angular.IModule) {

        new Routes.UIRoutesRegister(application);

        new Controllers.MenuControllerRegister(application);
        new Controllers.HomeControllerRegister(application);
        new Controllers.LocationControllerRegister(application);

        new Services.IonicConfigServicesRegister(application);
        new Services.LocalStorageRegister(application);
        new Services.AddressesProviderRegister(application);
        new Services.LocationsRegister(application);
        new Services.UrlsRegister(application);

        new Framework.EventFactoryRegister(application);

    }
}

new RegisterComponents(angular.module($injections.Constants.AppName));