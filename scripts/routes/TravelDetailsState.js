/// <reference path='../min.references.ts'/>
var Routes;
(function (Routes) {
    var TravelDetailsState = (function () {
        function TravelDetailsState() {
            this.url = '/traveldetails';
            this.name = 'travel-details';
            this.templateUrl = 'views/travel-details.html';
            this.controller = $injections.Controllers.TravelDetailsController;
        }
        return TravelDetailsState;
    })();

    var TravelDetailsStateRegister = (function () {
        function TravelDetailsStateRegister($module) {
            $module.constant($injections.Routes.TravelDetailsState, new TravelDetailsState());
        }
        return TravelDetailsStateRegister;
    })();
    Routes.TravelDetailsStateRegister = TravelDetailsStateRegister;
})(Routes || (Routes = {}));
//# sourceMappingURL=TravelDetailsState.js.map
