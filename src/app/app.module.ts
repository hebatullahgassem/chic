import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CasualComponent } from './casual/casual.component';
import { FormalComponent } from './formal/formal.component';
import { ActivewearComponent } from './activewear/activewear.component';
import { SoireeComponent } from './soiree/soiree.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CasualComponent,
    FormalComponent,
    ActivewearComponent,
    SoireeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
