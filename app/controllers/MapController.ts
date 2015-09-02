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

        constructor(selectedPedestrianRoute: Services.ISelectedPedestrianRoute) {
            var coords = selectedPedestrianRoute();
            this.from = new google.maps.LatLng(coords.from.xLatitude, coords.from.yLongitude);
            this.to = new google.maps.LatLng(coords.to.xLatitude, coords.to.yLongitude);

            this.createMap();
            this.calculateRoute();            
        }

        private createMap(): void {            
            this.directionsDisplay = new google.maps.DirectionsRenderer();            
            var mapOptions = {
                zoom: 7,
                center: this.from
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            this.directionsDisplay.setMap(map);
        }

        private calculateRoute(): void {
            var request = {
                origin: this.from,
                destination: this.to,
                travelMode: google.maps.TravelMode.WALKING
            };
            this.directionsService.route(request, (response, status) => {
                if (status == google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                }
            });
        }
  }

    export class MapControllerRegister {
        constructor($module: angular.IModule) {
            $module.controller($injections.Controllers.MapController, MapController);
        }
    }
}