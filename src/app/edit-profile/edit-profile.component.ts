import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{UpdateService} from '../update.service';
import{ UpdatedInfo } from '../_models/updatedinfo';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private updateService: UpdateService
    ) { }

  updateForm: FormGroup;
  loading = false;
  submitted = false;


  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      address:['',Validators.required],
      email: ['', [Validators.required,Validators.email]],

  });
  }
  get fval() { return this.updateForm.controls; }

  update(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }
    this.loading = true;
        alert('User Registered successfully!!');
        const result:UpdatedInfo= Object.assign({}, this.updateForm.value);
        
    
      
        
          this.updateService.update(result.firstName, result.lastName, result.email, result.phone, result.address).subscribe(
            (data : any) =>{
              localStorage.clear();
              localStorage.setItem('user',JSON.stringify(data));
    
            }
          );
        
      

  
  

  }
}
