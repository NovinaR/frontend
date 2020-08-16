import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService:AuthService, public userService:UserService) { }

  ngOnInit(): void {
  }

  displayuserdetails(userName) {
    this.userService.getUser(userName).subscribe(res=>this.ngOnInit());
  }

}
