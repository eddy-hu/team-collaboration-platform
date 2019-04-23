import { Component, OnInit , HostBinding, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from  '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimmation } from 'src/app/anims/list.anim';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimmation],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routerAnim') state;
  projects = [
    {
      "id":1,
      "name": "Demo data name",
      "desc": "Demo data description",
      "coverImg": "assets/images/covers/nokia-cpc.png",
    },
    {
      "id":2,
      "name": "Demo data name",
      "desc": "Demo data description",
      "coverImg": "assets/images/covers/nokia-nnvcp.png",
    },
    {
      "id":3,
      "name": "Demo data name",
      "desc": "Demo data description",
      "coverImg": "assets/images/covers/nokia-cpc.png",
    },
  
  ]
  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private service$: ProjectService,
    ) { }

  ngOnInit() {
    this.service$.get("1").subscribe(projects => this.projects = projects);
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data: {title: 'New Project'}}); //{} is for configuration {width: '100px', height: '100px' },
    dialogRef.afterClosed().
    subscribe(project => {
      this.service$.add(project);
      console.log(project);
    });
    this.cd.markForCheck();
  }

  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent); //{} is for configuration {width: '100px', height: '100px' },
    this.cd.markForCheck();
  }

  launchUpdateDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title: 'Update Project'}});
    this.cd.markForCheck();
  }

  launchConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title: 'Delete Project', content: 'Are you sure you want to delete?'}});
    this.cd.markForCheck();
  }



}
