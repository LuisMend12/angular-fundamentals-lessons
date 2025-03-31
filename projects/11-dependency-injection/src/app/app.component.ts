import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { data, User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';
import { DetailsComponent } from "../../../08-routing-recap/src/app/details/details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: ` 
  <h1>User Listing</h1> 
  @for(user of userData; track user.id) {
    <app-user-info [user] = "user" />
  }
  `,
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  userData: User[] = [];


  async ngOnInit(): Promise<void> {
    const data = await this.userService.getUserData()
    this.userData = data;
  }
  // async constructor
  //lifecycle of the component happens onint before the constructor, safes way to make api calls that are not fsat

  // constructor() {
  //   this.userService.getUserData().then((data) =>{
  //     this.userData = data;
  //   });
  // }
}
