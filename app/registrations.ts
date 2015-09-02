/// <reference path='all.references.ts'/>

class RegisterComponents {
    constructor(application: angular.IModule) {

        new Routes.UIRoutesRegister(application);

        new Controllers.MenuControllerRegister(application);
        new Controllers.TravelDetailsControllerRegister(application);
        new Controllers.HomeControllerRegister(application);
        new Controllers.LanguageControllerRegister(application);
        new Controllers.LocationControllerRegister(application);
        new Controllers.ConnectionsControllerRegister(application);
        new Controllers.MapControllerRegister(application);

        new Services.RoutesConverterRegister(application);
        new Services.AddressesProviderRegister(application);
        new Services.SelectedRouteRegister(application);
        new Services.SelectedPedestrainRouteRegister(application);
        new Services.OpenPedestrianRouteRegister(application);
        new Services.OpenLinkServiceRegister(application);
        Services.StringsRegister(application);
        new Services.AvailableRoutesRegister(application);
        new Services.GeoLocationProviderRegister(application);
        new Services.RoutesProviderRegister(application);
        new Services.UrlsRegister(application);
        new Services.LocalStorageRegister(application);
        new Services.LocationsRegister(application);
        new Services.ConnectionWatcherServiceRegister(application);
        new Services.LocalizationConfigRegister(application);
        new Services.SelectedLocationRegister(application);
        new Services.NavigationRegister(application);
        new Services.ClearHistoryServicesRegister(application);
        new Services.IonicConfigServicesRegister(application);

        new Framework.EventFactoryRegister(application);

        new Filters.FormatFilterRegister(application);
        new Filters.DurationFilterRegister(application);

        new Directives.MaxHeightDirectiveRegister(application);
        new Directives.PieMenuDirectiveRegister(application);
    }
}

new RegisterComponents(angular.module($injections.Constants.AppName));