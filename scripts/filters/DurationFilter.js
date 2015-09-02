/// <reference path='../min.references.ts'/>
var Filters;
(function (Filters) {
    var DurationFilter = (function () {
        function DurationFilter() {
            this.filter = function (millseconds) {
                var seconds = Math.floor(millseconds / 1000);
                var days = Math.floor(seconds / 86400);
                var hours = Math.floor((seconds % 86400) / 3600);
                var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
                var timeString = '';

                //if(days > 0) timeString += (days > 1) ? (days + " ds ") : (days + " d ");
                //if(hours > 0) timeString += (hours > 1) ? (hours + " hs ") : (hours + " h ");
                //if (minutes >= 0) timeString += (minutes > 1) ? (minutes + " mins ") : (minutes + " min ");
                hours = hours + days * 24;
                timeString = hours + ":";
                timeString += (minutes === 0) ? "00" : (minutes < 10) ? "0" + minutes.toString() : minutes.toString();

                return timeString;
            };
        }
        return DurationFilter;
    })();

    var DurationFilterProvider = [
        $injections.Angular.$injector, function ($injector) {
            var instance = $injector.instantiate(DurationFilter);
            return instance.filter;
        }];

    var DurationFilterRegister = (function () {
        function DurationFilterRegister($module) {
            $module.filter($injections.Filters.DurationFilter, DurationFilterProvider);
        }
        return DurationFilterRegister;
    })();
    Filters.DurationFilterRegister = DurationFilterRegister;
})(Filters || (Filters = {}));
//# sourceMappingURL=DurationFilter.js.map
