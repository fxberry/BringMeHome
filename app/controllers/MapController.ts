/// <reference path='../min.references.ts'/>

declare var google: any;

module Controllers {

    interface IDefaultScope extends angular.IScope {
    }

    class MapController {
        private from: any;
        private to: any;
        private directionDisplay: any;
        private directionsService = new google.maps.DirectionsService();
        private directionsDisplay = new google.maps.DirectionsRenderer();

        static $inject = [
            $injections.Services.SelectedPedestrianRoute
        ];

        constructor() {

            // TODO: Get the coords from the selected pedestrian route
            var coords = undefined;
            // TODO: Set the from and the to with coordinates
            this.from = undefined;
            this.to = undefined;

            this.createMap();
            this.calculateRoute();            
        }

        private createMap(): void {            
           // TODO: use direction renderer to render the directions

            // TODO: Use this map options
            var mapOptions = {
                zoom: 7,
                center: this.from
            };
            // TODO: Use to get the map from the DOM document.getElementById('map-canvas')
        }

        private calculateRoute(): void {

            // TODO: use the directions service to calculate the route (use Walking as TravelMode)
            // TODO: set it on the display

        }
  }

    export class MapControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.MapController, MapController);
        }
    }
}