import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "Demo data name",
      "desc": "Demo data description",
      "coverImg": "assets/images/covers/nokia-cpc.png",
    },
    {
      "name": "Demo data name",
      "desc": "Demo data description",
      "coverImg": "assets/images/covers/nokia-nnvcp.png",
    },
    {
      "name": "Demo data name",
      "desc": "Demo data description",
      "coverImg": "assets/images/covers/nokia-cpc.png",
    },
  
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data: 'this is my data'}) //{} is for configuration {width: '100px', height: '100px' },
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent) //{} is for configuration {width: '100px', height: '100px' },
  }

}
