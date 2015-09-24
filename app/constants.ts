module $constants
{
    export module Events{
        export var Destroy:string = '$destroy';
        export var StateChangeSuccess:string = '$stateChangeSuccess';

        export module IonicView {
            export var beforeEnter: string = '$ionicView.beforeEnter';
        }
    }

    export module TargetAdresses {
        export var home: string = 'home';
        export var work: string = 'work';
        export var love: string = 'love';
    }

}
