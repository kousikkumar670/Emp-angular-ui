import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup(
 {userName:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
 }
)
passwordHide:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get logInFormControls(){
    return this.loginForm.controls;
  }
  logIn(){
    console.log("Successfully Logged In");
    this.router.navigateByUrl("/app")
  }

}
