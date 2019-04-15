import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routerAnim') state;

  lists =[
    {
      id: 1,
      name: 'Open',
      order: 1,
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
      order: 2,
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
      order: 3,
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

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    ) { }

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

  handleMove(srcData, list){
    switch(srcData.tag){
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        const srcList = srcData.data;
        const tempOrder =  srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        console.log('handling list');
        console.log('srcList.order'+srcList.order+'list.order'+list.order);
        break;
      default:
        break;
      }
  }

  handleQuickTask(desc: string){
    console.log(desc);
  }

}
