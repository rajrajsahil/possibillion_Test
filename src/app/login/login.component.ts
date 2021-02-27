import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private loginRegisterService: LoginRegisterService,
    private route: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  login() {
    this.loginRegisterService.login(this.email, this.password).subscribe(data => {
      console.log('Login Successful' + JSON.stringify(data));
      this.loginRegisterService.userData = data;
      this.route.navigateByUrl('/logged');
    },
      error => {
        this.toastr.error(error.message);
      },
      () => {
        this.toastr.success('Logged In Successfully');
      }
    );
  }

}
