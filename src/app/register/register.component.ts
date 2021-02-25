import { Component, OnInit } from '@angular/core';
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
  constructor(private loginRegisterService: LoginRegisterService) { }

  ngOnInit() {
  }
  creteAccount() {
    this.loginRegisterService.register(this.firstName,this.lastName, this.mobileNumber,this.emailAdddress,this.password,this.confirmPassword)
    .subscribe(data => {
      console.log(data);
    });
  }

}
