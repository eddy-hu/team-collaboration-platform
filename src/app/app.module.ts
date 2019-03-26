import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatSidenavModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports :[
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
