/// <reference path='../min.references.ts'/>
var Routes;
(function (Routes) {
    var TravelState = (function () {
        function TravelState() {
            this.url = '/travel';
            this.name = 'travel';
            this.templateUrl = 'views/travel.html';
            this.controller = $injections.Controllers.TravelController;
        }
        return TravelState;
    })();

    var TravelStateRegister = (function () {
        function TravelStateRegister($module) {
            $module.constant($injections.Routes.TravelState, new TravelState());
        }
        return TravelStateRegister;
    })();
    Routes.TravelStateRegister = TravelStateRegister;
})(Routes || (Routes = {}));
//# sourceMappingURL=TravelState.js.map
