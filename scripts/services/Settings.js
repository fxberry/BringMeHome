/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var Settings = (function () {
        function Settings(localStorage) {
            var _this = this;
            this.localStorage = localStorage;
            this.GetAddress = function () {
                return _this.localStorage.get(Settings.key);
            };
            this.SetAddress = function (address) {
                _this.localStorage.save(Settings.key, address);
            };
            this.HasAddress = function () {
                return _this.localStorage.get(Settings.key) !== null;
            };
        }
        Settings.key = '_settings_address';

        Settings.$inject = [
            $injections.Services.LocalStorage
        ];
        return Settings;
    })();

    var SettingsRegister = (function () {
        function SettingsRegister($module) {
            $module.service($injections.Services.Settings, Settings);
        }
        return SettingsRegister;
    })();
    Services.SettingsRegister = SettingsRegister;
})(Services || (Services = {}));
//# sourceMappingURL=Settings.js.map
