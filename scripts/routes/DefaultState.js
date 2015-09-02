/// <reference path='../min.references.ts'/>
var Routes;
(function (Routes) {
    var DefaultState = (function () {
        function DefaultState() {
            this.url = '/';
            this.name = 'default';
            this.templateUrl = 'views/default.html';
            this.controller = $injections.Controllers.DefaultController;
        }
        return DefaultState;
    })();

    var DefaultStateRegister = (function () {
        function DefaultStateRegister($module) {
            $module.constant($injections.Routes.DefaultState, new DefaultState());
        }
        return DefaultStateRegister;
    })();
    Routes.DefaultStateRegister = DefaultStateRegister;
})(Routes || (Routes = {}));
//# sourceMappingURL=DefaultState.js.map
