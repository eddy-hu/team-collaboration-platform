import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';



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
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ]
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
