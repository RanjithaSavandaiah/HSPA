import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  userSubmitted: boolean;
  user: User;
  constructor(private fb: FormBuilder,private userService:UserService, private alertify:AlertifyService) {}

  ngOnInit() {
    // this.registerationForm=new FormGroup(
    //   {
    //     userName: new FormControl(null,Validators.required),
    //     email:new FormControl(null,[Validators.required,Validators.email]),
    //     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confirmPassword:new FormControl(null,Validators.required),
    //     mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    //   },this.passwordMatchingValidator);
    // this.registerationForm.controls['userName'].setValue('Default Value');
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { Validators: this.passwordMatchingValidator }
    );
  }
  onSubmit() {
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      //this.user=Object.assign(this.user,this.registerationForm.value);
      // this.userService.createUsers(this.user);
      localStorage.setItem('users', JSON.stringify(this.userData()));
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('congrats,you are successfully registered');
    }
    else{
      this.alertify.error('Please fill required fields');

    }
  }

  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notMatched: true };
  }
}
