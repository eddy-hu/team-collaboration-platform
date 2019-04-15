import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.form = this.fb.group({
        email: ['example@gmail.com', Validators.compose([Validators.required,Validators.email])],
        password: ['',Validators.required],
      })

      // simple version:
      // this.form = new FormGroup({
      //   email: new FormControl('example@gmail.com', Validators.compose([Validators.required,Validators.email])),//compose used for conbine multi validators
      //   password: new FormControl('',Validators.required),
      // })
  }

  onSubmit({value, valid}, ev: Event){
    ev.preventDefault();
    console.log(JSON.stringify(value))
    console.log(JSON.stringify(valid))

  }

  validate(c: FormControl): {[key: string]: any}{ //: is return type
    if(!c.value){
      return null;
    }else{
      //validation logic here...
    }

    return null;

  }

}
