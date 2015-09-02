/// <reference path='../min.references.ts'/>
var Services;
(function (Services) {
    var LocalStorage = (function () {
        function LocalStorage() {
        }
        LocalStorage.prototype.get = function (key) {
            var value = localStorage.getItem(key);
            return JSON.parse(value);
        };

        LocalStorage.prototype.save = function (key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        };

        LocalStorage.prototype.remove = function (key) {
            localStorage.removeItem(key);
        };

        LocalStorage.prototype.clearAll = function () {
            localStorage.clear();
        };
        return LocalStorage;
    })();

    var LocalStorageRegister = (function () {
        function LocalStorageRegister($module) {
            $module.service($injections.Services.LocalStorage, LocalStorage);
        }
        return LocalStorageRegister;
    })();
    Services.LocalStorageRegister = LocalStorageRegister;
})(Services || (Services = {}));
//# sourceMappingURL=LocalStorage.js.map
