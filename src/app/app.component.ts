import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from 'src/app/types/user.interface';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public users: UserInterface[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      console.log('users', users);
      this.users = users;
    });
  }

  public removeUser(id: string): void {
    this.usersService.removeUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  public addUser(name: string): void {
    this.usersService.addUser(name).subscribe(newUser => {
      this.users.push(newUser);
    });
  }
}
