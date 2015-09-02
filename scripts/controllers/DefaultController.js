/// <reference path='../min.references.ts'/>
var Controllers;
(function (Controllers) {
    var DefaultController = (function () {
        function DefaultController(settings, navigation) {
            if (settings.HasAddress() === false) {
                navigation.Settings(true);
            } else {
                navigation.Home();
            }
        }
        DefaultController.$inject = [
            $injections.Services.Settings,
            $injections.Services.Navigation
        ];
        return DefaultController;
    })();

    var DefaultControllerRegister = (function () {
        function DefaultControllerRegister($module) {
            $module.controller($injections.Controllers.DefaultController, DefaultController);
        }
        return DefaultControllerRegister;
    })();
    Controllers.DefaultControllerRegister = DefaultControllerRegister;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=DefaultController.js.map
