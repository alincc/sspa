import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelloComponent} from "./app.component";
import {enableProdMode} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//enableProdMode();


@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [HelloComponent],
    declarations: [HelloComponent]
})
export class AppModule {}