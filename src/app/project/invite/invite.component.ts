import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'jack',
    },
    {
      id: 2,
      name: 'mark',
    },
    {
      id: 3,
      name: 'luke',
    },
    {
      id: 4,
      name: 'mike',
    },
    {
      id: 5,
      name: 'peter',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}){
    return user ? user.name : '';
  }
}
