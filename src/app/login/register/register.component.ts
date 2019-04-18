import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form= this.fb.group({
      email: [],
      name: [],
      password: [],
      repeat: [],
      dateOfBirth: [],

    })
  }

  onSubmit({value,valid}, ev: Event){
    ev.preventDefault();
    if(!valid){
      return;
    }
    console.log(value);
  }

}
