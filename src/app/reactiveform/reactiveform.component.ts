import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  get userName() {
    return this.registrationForm.get('userName');
  }
  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    email:[''],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  }, { validator: PasswordValidator });
  // registrationForm = new FormGroup({
  //   userName: new FormControl('hello'),   //hello is a default username
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  ngOnInit() {
  }
  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'hello',
      password: 'test',
      confirmPassword: 'test',
      // address: {
      //   city: 'Hyd',
      //   state: 'TG',
      //   postalCode: '1234'
      // }
    })
  }
}
//setvalue is for all the formcontrols. we have to give data for all the values
//in patchvalue we can give data for some values


