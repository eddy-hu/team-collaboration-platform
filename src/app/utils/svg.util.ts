import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources =(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)=>{
    const iconDir = 'assets/icons';
    const sidebarDir = `${iconDir}/sidebar`;
    const avatarDir = 'assets/avatars';
    iconRegistry.addSvgIcon('icons8-home',sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/icons8-home.svg`));
    iconRegistry.addSvgIcon('month',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/icons8-calendar.svg`));
    iconRegistry.addSvgIcon('project',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
    iconRegistry.addSvgIcon('projects',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
    iconRegistry.addSvgIcon('week',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/baseline-view_week-24px.svg`));
    iconRegistry.addSvgIcon('day',sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/baseline-view_day-24px.svg`));

    iconRegistry.addSvgIcon('avatar1',sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/avatar1.svg`));
    iconRegistry.addSvgIcon('avatar2',sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/avatar2.svg`));
    iconRegistry.addSvgIcon('avatar3',sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/avatar3.svg`));
    iconRegistry.addSvgIcon('unassigned',sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));

}