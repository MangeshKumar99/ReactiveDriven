import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms'
import {FormBuilder, Validators} from '@angular/forms'
import { PasswordValidator } from './shared/password.validator';
import { ForbiddenNameValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){

  }
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Mangesh'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })
  // })
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator]],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  },{validator: PasswordValidator})
  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Mangesh',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Patna',
        state: 'Bihar',
        postalCode: '9898',
      }
    })
  }
  onSubmit(){
    console.log(this.registrationForm.value)
  }
}

