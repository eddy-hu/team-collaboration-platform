import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists =[
    {
      id: 1,
      name: 'Open',
      tasks: [
        {
          id: 1,
          desc: 'Task one: finish test cases',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'jack',
            avatar: 'avatar1',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task two: finish fronend ui',
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: 'mark',
            avatar: 'avatar2',
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: 'Task three: finish the rest apis',
          completed: false,
          priority: 1,
          owner: {
            id: 3,
            name: 'peter',
            avatar: 'unassigned',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },

    {
      id: 2,
      name: 'In Progress',
      tasks: [
        {
          id: 1,
          desc: 'Task one: finish test cases',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: 'jack',
            avatar: 'avatar1',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: 'Task two: finish fronend ui',
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: 'mark',
            avatar: 'avatar2',
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: 'Task three: finish the rest apis',
          completed: false,
          priority: 3,
          owner: {
            id: 3,
            name: 'peter',
            avatar: 'unassigned',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 3,
          desc: 'Task three: finish the rest apis',
          completed: false,
          priority: 3,
          owner: {
            id: 3,
            name: 'peter',
            avatar: 'unassigned',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },


    {
      id: 3,
      name: 'Done',
      tasks: [
        {
          id: 1,
          desc: 'Task one: finish test cases',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'jack',
            avatar: 'avatar1',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task two: finish fronend ui',
          completed: false,
          priority: 1,
          owner: {
            id: 2,
            name: 'mark',
            avatar: 'avatar2',
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: 'Task three: finish the rest apis for new courses',
          completed: false,
          priority: 2,
          owner: {
            id: 3,
            name: 'peter',
            avatar: 'unassigned',
          },
          dueDate: new Date(),
        },
      ]
    },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog(){
    const dialogRef = this.dialog.open(NewTaskComponent,{data: {title: 'New Task'}});
  }

  launchCopyTaskDialog(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent,{data: {title: 'Update Task', task: task}});
  }

  launchConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title: 'Delete Tasks', content: 'Are you sure you want to delete?'}}) ;
  }

  launchEditListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title: 'Update List'}}) ;
  }

  launchNewTaskListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title: 'New List'}}) ;
  }

}
