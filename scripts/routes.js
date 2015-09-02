/// <reference path='min.references.ts'/>
var Routes;
(function (Routes) {
    var UIRoutesConfig = (function () {
        function UIRoutesConfig($stateProvider, $urlRouterProvider, defaultState, homeState, settingsState, travelState, travelDetailsState) {
            $urlRouterProvider.otherwise('/');

            $stateProvider.state(defaultState).state(homeState).state(travelState).state(travelDetailsState).state(settingsState);
        }
        UIRoutesConfig.$inject = [
            $injections.UIRouter.$StateProvider,
            $injections.UIRouter.$UrlRouterProvider,
            $injections.Routes.DefaultState,
            $injections.Routes.HomeState,
            $injections.Routes.SettingsState,
            $injections.Routes.TravelState,
            $injections.Routes.TravelDetailsState
        ];
        return UIRoutesConfig;
    })();

    var UIRoutesRegister = (function () {
        function UIRoutesRegister($module) {
            $module.config(UIRoutesConfig);
        }
        return UIRoutesRegister;
    })();
    Routes.UIRoutesRegister = UIRoutesRegister;
})(Routes || (Routes = {}));
//# sourceMappingURL=routes.js.map
