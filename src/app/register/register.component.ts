import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAdddress: string;
  password: string;
  confirmPassword: string;
  constructor(private loginRegisterService: LoginRegisterService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  creteAccount() {
    this.loginRegisterService.register(this.firstName,this.lastName, this.mobileNumber,this.emailAdddress,this.password,this.confirmPassword)
    .subscribe(data => {
      console.log(data);
    },
    error => {
      this.toastr.error(error.message);
    },
    () => {
      this.toastr.success('Registered Successfully');
    } );
  }

}
