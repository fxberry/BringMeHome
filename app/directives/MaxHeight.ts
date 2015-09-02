/// <reference path='../min.references.ts'/>
module Directives {
    class MaxHeightDirective implements angular.IDirective {
        restrict:string = "A";

        static $inject = [
            $injections.Angular.$Window,
            $injections.Angular.$TimeoutService,
            $injections.Constants.$Angular
        ];

        constructor(private $window:angular.IWindowService,
                    private $timeout:angular.ITimeoutService,
                    private $angular:angular.IAngularStatic) {

        }

        link = ($scope, $element, $attr, ionContentRef:any) => {
            var footerHeight = 40;
            var OnResize = () => {
                var additionalHeight = $attr.additionalHeight || 0;
                var parentHeight = this.$window.innerHeight - $element.parent()[0].getBoundingClientRect().top;
                var siblingsHeight = this.CombineHeights(this.Siblings($element)) - additionalHeight;
                $element.height(parentHeight - siblingsHeight - footerHeight);
            };

            this.$angular.element(this.$window).bind('resize', OnResize);

            this.$timeout(OnResize, 100);

            $scope.$on('$destroy', () => {
                this.$angular.element(this.$window).unbind('resize', OnResize);
            });
        };

        private CombineHeights = (collection) => {
            var heights = 0;
            for (var index = 0; index < collection.length; index++) {
                var node = collection[index];
                heights += this.GetBoxHeight(node);
            }
            return heights;
        };

        private GetBoxHeight = (element:any) => {
            element = (typeof element === 'string') ? document.querySelector(element) : element;

            var styles = this.$window.getComputedStyle(element);
            var margin = parseFloat(styles['marginTop']) +
                parseFloat(styles['marginBottom']);

            return Math.ceil(element.offsetHeight + margin);
        };

        private Siblings = ($element) => {
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

    var MaxHeightDirectiveProvider = [$injections.Angular.$injector, function ($injector:angular.auto.IInjectorService) {
        return $injector.instantiate(MaxHeightDirective);
    }];

    export class MaxHeightDirectiveRegister {
        constructor($module:angular.IModule) {
            $module.directive($injections.Directives.MaxHeightDirective, MaxHeightDirectiveProvider);
        }
    }
}