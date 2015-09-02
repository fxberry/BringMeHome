/// <reference path='../min.references.ts'/>
var Directives;
(function (Directives) {
    var MaxHeightDirective = (function () {
        function MaxHeightDirective($window, $timeout, $angular) {
            var _this = this;
            this.$window = $window;
            this.$timeout = $timeout;
            this.$angular = $angular;
            this.restrict = "A";
            this.link = function ($scope, $element, $attr, ionContentRef) {
                var footerHeight = 30;
                var OnResize = function () {
                    var additionalHeight = $attr.additionalHeight || 0;
                    var parentHeight = _this.$window.innerHeight - $element.parent()[0].getBoundingClientRect().top;
                    var siblingsHeight = _this.CombineHeights(_this.Siblings($element)) - additionalHeight;
                    $element.height(parentHeight - siblingsHeight - footerHeight);
                };

                _this.$angular.element(_this.$window).bind('resize', OnResize);

                _this.$timeout(OnResize, 100);

                $scope.$on('$destroy', function () {
                    _this.$angular.element(_this.$window).unbind('resize', OnResize);
                });
            };
            this.CombineHeights = function (collection) {
                var heights = 0;
                for (var index = 0; index < collection.length; index++) {
                    var node = collection[index];
                    heights += _this.GetBoxHeight(node);
                }
                return heights;
            };
            this.GetBoxHeight = function (element) {
                element = (typeof element === 'string') ? document.querySelector(element) : element;

                var styles = _this.$window.getComputedStyle(element);
                var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

                return Math.ceil(element.offsetHeight + margin);
            };
            this.Siblings = function ($element) {
                var children = $element.parent().children();
                var results = [];
                for (var index = 0; index < children.length; index++) {
                    if (children[index] !== $element[0]) {
                        results.push(children[index]);
                    }
                }
                return results;
            };
        }
        MaxHeightDirective.$inject = [
            $injections.Angular.$Window,
            $injections.Angular.$TimeoutService,
            $injections.Constants.$Angular
        ];
        return MaxHeightDirective;
    })();

    var MaxHeightDirectiveProvider = [
        $injections.Angular.$injector, function ($injector) {
            return $injector.instantiate(MaxHeightDirective);
        }];

    var MaxHeightDirectiveRegister = (function () {
        function MaxHeightDirectiveRegister($module) {
            $module.directive($injections.Directives.MaxHeightDirective, MaxHeightDirectiveProvider);
        }
        return MaxHeightDirectiveRegister;
    })();
    Directives.MaxHeightDirectiveRegister = MaxHeightDirectiveRegister;
})(Directives || (Directives = {}));
//# sourceMappingURL=MaxHeight.js.map
