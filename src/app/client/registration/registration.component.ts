import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registration() {
    this.userService.save(this.user).subscribe(result => this.gotoBooksList());
  }

  gotoBooksList() {
    this.router.navigate(['/books']);
  }
}
