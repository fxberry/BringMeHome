/// <reference path='../min.references.ts'/>
var Framework;
(function (Framework) {
    var Event = (function () {
        function Event(Name) {
            var _this = this;
            this.Name = Name;
            this._handlers = new Array();
            this.Subscribe = function (handler) {
                if (_this._handlers === null)
                    return function () {
                    };

                var index = _this._handlers.push(handler) - 1;

                return function () {
                    if (_this._handlers !== null)
                        delete _this._handlers[index];
                };
            };
            this.Fire = function () {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    args[_i] = arguments[_i + 0];
                }
                if (_this._handlers === null)
                    return;

                for (var index = 0; index < _this._handlers.length; index++) {
                    var handler = _this._handlers[index];
                    if (handler === undefined || handler === null)
                        continue;
                    handler.apply(null, args);
                }
            };
            this.Dispose = function () {
                _this._handlers = null;
            };
        }
        return Event;
    })();

    var EventFactory = (function () {
        function EventFactory() {
            this.factory = function (name) {
                return new Event(name);
            };
        }
        return EventFactory;
    })();

    var EventFactoryProvider = (function () {
        function EventFactoryProvider() {
            this.$get = [
                $injections.Angular.$injector, function ($injector) {
                    var provider = $injector.instantiate(EventFactory);
                    return provider.factory;
                }];
        }
        return EventFactoryProvider;
    })();

    var EventFactoryRegister = (function () {
        function EventFactoryRegister($module) {
            $module.provider($injections.Framework.EventFactory, EventFactoryProvider);
        }
        return EventFactoryRegister;
    })();
    Framework.EventFactoryRegister = EventFactoryRegister;
})(Framework || (Framework = {}));
//# sourceMappingURL=Event.js.map
