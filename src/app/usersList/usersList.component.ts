import {Component, Input, Output, EventEmitter} from '@angular/core'
import {UserInterface} from 'src/app/types/user.interface'

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent {
  @Input() users: UserInterface[];
  @Output() removeUser = new EventEmitter<string>();
  @Output() addUserEvent = new EventEmitter<string>();

  public newUserName: string = '';

  public setNewUserName(userName: string): void {
    this.newUserName = userName;
  }

  public addUser(): void {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = '';
  }
}
