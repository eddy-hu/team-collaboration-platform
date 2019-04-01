import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';


const routes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'item', component: ProjectItemComponent }
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
