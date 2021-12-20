import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';



@NgModule({
  declarations: [
    AppComponent,
    DosificacionComponent,
    
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
