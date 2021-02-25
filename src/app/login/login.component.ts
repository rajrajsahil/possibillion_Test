import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private loginRegisterService: LoginRegisterService) { }

  ngOnInit() {
  }
  login() {
    this.loginRegisterService.login(this.email, this.password).subscribe(data => {
      console.log(data);
    });
  }

}
