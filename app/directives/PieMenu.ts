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
            var selectedStyle = '<i class="icon ion-home"></i>';
            if (this.selectedLocation() === 'work') {
                selectedStyle = '<i class="icon ion-briefcase"></i>';
            }
            else if (this.selectedLocation() === 'love') {
                selectedStyle = '<i class="icon ion-heart"></i>';
            }

            var menu = new Btn(this.locations.GetAddressBy(this.selectedLocation())).addClass('skin-main_menu');
            $(menu._elButton).append(selectedStyle);

            var loveAddress = this.locations.GetAddressBy('love');
            var workAddress = this.locations.GetAddressBy('work');

            if (loveAddress) {
                this.createButton('love', 'skin-love', '<i class="icon ion-heart"></i>', menu);
            }

            this.createButton('home', 'skin-home', '<i class="icon ion-home"></i>', menu);

            if (workAddress) {
                this.createButton('work', 'skin-work', '<i class="icon ion-briefcase"></i>', menu);
            }

            menu.appendTo($element[0]);
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