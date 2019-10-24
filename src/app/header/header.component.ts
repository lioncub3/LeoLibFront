import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginFormVisible : boolean;
  @Input() title : string;

  constructor() {
    this.loginFormVisible = false;
  }

  ngOnInit() {
  }

  toggleLoginForm () {
    this.loginFormVisible = !this.loginFormVisible;
  }
}
