import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './shared/components/components.component';
import { PipesComponent } from './shared/pipes/pipes.component';
import { ValidatorsComponent } from './shared/validators/validators.component';
import { DirectivesComponent } from './shared/directives/directives.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    ComponentsComponent,
    PipesComponent,
    ValidatorsComponent,
    DirectivesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
