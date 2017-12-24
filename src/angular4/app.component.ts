import {Component, NgZone, Inject} from "@angular/core";
import {data} from './../data/data.js';
import {messageBusSubject} from './../common/message-bus.js';

@Component({
    selector: "hellow-app",
    //template:`<p>Angular4 works!</p>`
    // template: `
    // <router-outlet></router-outlet>
    // `
    templateUrl: "./app.component.html",
    //styleUrls: ["./app.component.scss"],
})
export class HelloComponent {

    private ngZone: any;

    public galleryData = [];

    constructor(@Inject(NgZone) ngZone:NgZone){
        this.ngZone = ngZone;
        this.galleryData = data;
    }
    openItem(id: number){
        this.ngZone.runOutsideAngular(()=>{
           messageBusSubject.next({action:'OPEN_GALLERY_ITEM', data:id});
           return true;
        })
        
    }
}