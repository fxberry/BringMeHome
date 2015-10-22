/// <reference path='../min.references.ts'/>

declare var Btn: any;

module Directives {
    class PieMenuDirective implements angular.IDirective {
        public restrict: string = "A";
        private hasWpDoubleClickIssue: boolean = false;

        static $inject = [
            $injections.Services.SelectedLocation,
            $injections.Services.TargetAddress,
            $injections.Angular.$TimeoutService,
        ];

        constructor(private selectedLocation: Services.ISelectedLocation, private locations: Services.ITargetAddress, private $timeout: angular.ITimeoutService) {

        }

        link = ($scope, $element, $attr) => {

            // TODO: Check the selected location and set the style accordingly

            // TODO: Add the main menu skin (class) on the menu Btn
            var menu = new Btn(this.locations.GetAddressBy(this.selectedLocation()));

            // TODO: set the selected style on: $(menu._elButton);

            // TODO: create the buttons on the menu with the "createButton" function

            // TODO: add the menu button to the attributed element
        };

        private createButton(type: string, skin: string, icon: string, menu: any): any {
            var btn = new Btn(this.locations.GetAddressBy(type)).addClass(skin).on('click', () => {
                if (this.hasWpDoubleClickIssue)
                    return;

                this.hasWpDoubleClickIssue = true;
                this.selectedLocation(type);
                $(menu._elButtonTitle).text(this.locations.GetAddressBy(type));
                $(menu._elButton).empty();
                $(menu._elButton).append(icon);
                $(menu._elButton).click(); //To close menu again 
                this.$timeout(() => this.hasWpDoubleClickIssue = false, 1);
            });

            $(btn._elButton).append(icon);
            menu.append(btn);
        }
    }

    var PieMenuDirectiveProvider = [$injections.Angular.$injector, function ($injector: angular.auto.IInjectorService) {
        return $injector.instantiate(PieMenuDirective);
    }];

    export class PieMenuDirectiveRegister {
        constructor($module: angular.IModule) {
            $module.directive($injections.Directives.PieMenuDirective, PieMenuDirectiveProvider);
        }
    }
}