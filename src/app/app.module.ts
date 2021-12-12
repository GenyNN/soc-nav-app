import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NetworkListComponent} from './network/network-list.component'
import { NetworkEmitentComponent} from './network/network-emitent.component'
import {NetworkService} from "./network/network.service";
@NgModule({
  declarations: [
    AppComponent,
    NetworkListComponent,
    NetworkEmitentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
