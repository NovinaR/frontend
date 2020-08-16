import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private registerService : RegisterService,

  ) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      address:['',Validators.required],
      pancard:['',Validators.required],
      email: ['', [Validators.required,Validators.email]],

  });
  }

  get fval() { return this.registerForm.controls; }

  

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
        alert('User Registered successfully!!');
        const result:User= Object.assign({}, this.registerForm.value);
        
    
        // Do useful stuff with the gathered data
        console.log(result.firstName);
        
        
          this.registerService.insertUser(result.userName,result.password,result.firstName, result.lastName, result.email, result.phone, result.address, result.pancard).subscribe(
            (data : any) =>{
              localStorage.clear();
              localStorage.setItem('user',JSON.stringify(data));
              this.router.navigate(['/login']);
            }
          );
        
      

  }

}
