/// <reference path='../min.references.ts'/>

module Services {
    class SelectedLocationProvider {

        private selectedLocation: string = $constants.TargetAdresses.home;

        static $inject = [
            $injections.Constants.$Angular
        ];
        constructor(private $angular: angular.IAngularStatic) {

        }

        Provider: Services.ISelectedLocation = (selectedLocation?: string) => {
            if (this.$angular.isDefined(selectedLocation))
                this.selectedLocation = selectedLocation;

            return this.selectedLocation;
        };
    }

    class SelectedLocationProviderFactory {

        $get = [$injections.Angular.$injector, ($injector: angular.auto.IInjectorService): ISelectedRoute => {
            var provider = $injector.instantiate(SelectedLocationProvider);
            return provider.Provider;
        }]
    }

    export class SelectedLocationRegister {
        constructor($module: angular.IModule) {
            $module.provider($injections.Services.SelectedLocation, SelectedLocationProviderFactory);
        }
    }

}