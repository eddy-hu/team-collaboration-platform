import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from '../app-routing.module';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';

import 'hammerjs';
import { map, take } from 'rxjs/operators';
import { from } from 'rxjs';
import { ServicesModule } from '../services/services.module';





@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: 'BASE_CONFIG_URI', useValue: 'http://localhost:3000'},//config properties

  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
  iconRegistry: MatIconRegistry, 
  sanitizer: DomSanitizer
  ){
    if(parent){
      throw new Error('Module is exist');
    }
    loadSvgResources(iconRegistry,sanitizer);
  }

 }
