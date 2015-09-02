/// <reference path='../min.references.ts'/>
var Routes;
(function (Routes) {
    var SettingsState = (function () {
        function SettingsState() {
            this.url = '/settings/:init';
            this.name = 'settings';
            this.templateUrl = 'views/settings.html';
            this.controller = $injections.Controllers.SettingsController;
        }
        return SettingsState;
    })();

    var SettingsStateRegister = (function () {
        function SettingsStateRegister($module) {
            $module.constant($injections.Routes.SettingsState, new SettingsState());
        }
        return SettingsStateRegister;
    })();
    Routes.SettingsStateRegister = SettingsStateRegister;
})(Routes || (Routes = {}));
//# sourceMappingURL=SettingsState.js.map
