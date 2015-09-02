/// <reference path='all.references.ts'/>
var RegisterComponents = (function () {
    function RegisterComponents(application) {
        new Routes.UIRoutesRegister(application);
        new Routes.DefaultStateRegister(application);
        new Routes.HomeStateRegister(application);
        new Routes.SettingsStateRegister(application);
        new Routes.TravelStateRegister(application);
        new Routes.TravelDetailsStateRegister(application);

        new Controllers.TravelDetailsControllerRegister(application);
        new Controllers.DefaultControllerRegister(application);
        new Controllers.HomeControllerRegister(application);
        new Controllers.SettingsControllerRegister(application);
        new Controllers.TravelControllerRegister(application);

        new Services.SelectedConnectionRegister(application);
        new Services.ConnectionsConverterRegister(application);
        new Services.OpenPedestrianRouteRegister(application);
        new Services.OpenLinkServiceRegister(application);
        new Services.StringsRegister(application);
        new Services.WalkDistanceProviderRegister(application);
        new Services.StartStationRegister(application);
        new Services.NearestStationResolverRegister(application);
        new Services.ConnectionsProviderRegister(application);
        new Services.GeoLocationProviderRegister(application);
        new Services.LocationsProviderRegister(application);
        new Services.UrlsRegister(application);
        new Services.LocalStorageRegister(application);
        new Services.SettingsRegister(application);
        new Services.NavigationRegister(application);
        new Services.ConnectionWatcherServiceRegister(application);
        new Services.LocalizationConfigRegister(application);

        new StateMachines.ConnectionsStateMachineFactoryRegister(application);
        new Framework.EventFactoryRegister(application);

        new Filters.FormatFilterRegister(application);
        new Filters.DurationFilterRegister(application);

        new Directives.MaxHeightDirectiveRegister(application);
        new Directives.LogoFooterDirectiveRegister(application);
    }
    return RegisterComponents;
})();

new RegisterComponents(angular.module($injections.Constants.AppName));
//# sourceMappingURL=registrations.js.map
