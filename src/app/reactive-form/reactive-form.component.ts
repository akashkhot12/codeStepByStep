import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
loginForm = new FormGroup({
user:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required, Validators.minLength(5)])
})

loginUser(){
  console.log(this.loginForm.value);
  
}

 get user(){
  return this.loginForm.get('user')
}

get password(){
  return this.loginForm.get('password')
}
}
