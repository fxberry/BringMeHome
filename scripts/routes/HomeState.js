/// <reference path='../min.references.ts'/>
var Routes;
(function (Routes) {
    var HomeState = (function () {
        function HomeState() {
            this.url = '/home';
            this.name = 'home';
            this.templateUrl = 'views/home.html';
            this.controller = $injections.Controllers.HomeController;
        }
        return HomeState;
    })();

    var HomeStateRegister = (function () {
        function HomeStateRegister($module) {
            $module.constant($injections.Routes.HomeState, new HomeState());
        }
        return HomeStateRegister;
    })();
    Routes.HomeStateRegister = HomeStateRegister;
})(Routes || (Routes = {}));
//# sourceMappingURL=HomeState.js.map
