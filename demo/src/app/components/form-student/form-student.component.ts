import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent {
  formLogin: FormGroup;

  constructor(){

    let controles: any = {
      email_: new FormControl('', [ Validators.required , Validators.email  ]),
      password_: new FormControl('', [ Validators.required , Validators.minLength(5) ]),
    }

    this.formLogin = new FormGroup(controles);
  }

  handleLogin(){
    //console.log('login', this.formLogin);

    //check required fields
    if(this.formLogin.controls['email_'].errors?.['required']){
      console.log('This field is required');
    }

    if(this.formLogin.controls['password_'].errors?.['required']){
      console.log('This field is required');
    }

  }

}






