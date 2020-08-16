import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../_models';
import { LoginService } from '../login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isLoginError : boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private loginService : LoginService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


    // for accessing the form fields
    get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.loading = true;
    const result:Login= Object.assign({}, this.loginForm.value);
    this.loginService.loginUser(result.username,result.password).subscribe(
      (data : any) =>{
        localStorage.setItem('login',data.loginStatus);
        alert(data.responseMessage);
        if(data.loginStatus){
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/login']);
          this.loading = false;
        }
      },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });

    const logindata = new Login();
    this.authService.authenticate(this.isLoginError);
        
  }
}
