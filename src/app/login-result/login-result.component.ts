import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-login-result',
  templateUrl: './login-result.component.html',
  styleUrls: ['./login-result.component.css']
})
export class LoginResultComponent implements OnInit {

  userData: any;
  constructor(private loginRegisterService: LoginRegisterService,
    private route: Router,
    private toastr: ToastrService) {
   }

  ngOnInit() {
    this.userData = JSON.parse(this.loginRegisterService.userData);
    if (this.userData === undefined || this.userData === null) {
      this.route.navigateByUrl('/login');
    }
  }
  logout() {
    this.loginRegisterService.clearUserData();
    this.route.navigateByUrl('/login');
    this.toastr.success("Logged Out Successfully");
  }

}
