import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources =(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)=>{
    const iconDir = 'assets/icons';
    const sidebarDir = `${iconDir}/sidebar`;
    iconRegistry.addSvgIcon('icons8-home',sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/icons8-home.svg`));
    iconRegistry.addSvgIcon('month',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/icons8-calendar.svg`));
    iconRegistry.addSvgIcon('project',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
    iconRegistry.addSvgIcon('projects',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
    iconRegistry.addSvgIcon('week',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/baseline-view_week-24px.svg`));
    iconRegistry.addSvgIcon('day',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/baseline-view_day-24px.svg`));

}