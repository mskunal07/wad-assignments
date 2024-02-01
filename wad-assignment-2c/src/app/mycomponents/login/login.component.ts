// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {

//   signupUsers: any[] = [];

//   signupObj:any = {
//     userName:'',
//     email:'',
//     password:''
//   };
//   loginObj: any = {
//     userName:'',
//     password:''
//   };

//   constructor(){ }

//   ngOnInit(): void {

//       const localData = localStorage.getItem('signUpUsers');
//       if(localData != null){
//         this.signupUsers = JSON.parse(localData);
//       }

//   }
  

//   onSignUp() {

//     this.signupUsers.push(this.signupObj);
//     localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
//     this.signupObj = {
//       userName:'',
//       email:'',
//       password:''
//     };

//   }

//   onLogin(){
//     // debugger
//     const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
//     if(isUserExist != undefined) {
//       alert("Logged in successfully !!!");
//     }
//     else alert("Invalid Credentials !");
//   }


// }






import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupUsers: any[] = [];

  signupForm: FormGroup = new FormGroup({}); // Initialize with an empty form group
  loginForm: FormGroup = new FormGroup({});  // Initialize with an empty form group

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }

    // Initialize and set up the Reactive Forms
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSignUp() {
    if (this.signupForm.valid) {
      this.signupUsers.push(this.signupForm.value);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
      this.signupForm.reset();
    } else {
      alert('Please fill in all the required fields with valid values.');
    }
  }

  onLogin(){
    if (this.loginForm.valid) {
      const isUserExist = this.signupUsers.find(m => m.userName === this.loginForm.value.userName && m.password === this.loginForm.value.password);
      if(isUserExist !== undefined) {
        alert('Logged in successfully !!!');
      } else {
        alert('Invalid Credentials !');
      }
    } else {
      alert('Please fill in all the required fields with valid values.');
    }
  }
}
