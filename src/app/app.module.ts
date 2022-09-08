import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClassComponent } from './class/class.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { ModuleComponent } from './module/module.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    InterpolationComponent,
    ClassComponent,
    PropertybindingComponent,
    IfComponent,
    ForComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
