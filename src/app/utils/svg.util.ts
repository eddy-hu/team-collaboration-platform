import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources =(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)=>{
    iconRegistry.addSvgIcon('icons8-home',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icons8-home.svg'));
}