import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CheckBookRequest} from '../_models/checkbookrequest';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-cheque-book-request',
  templateUrl: './cheque-book-request.component.html',
  styleUrls: ['./cheque-book-request.component.css']
})
export class ChequeBookRequestComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private requestService : RequestService,

  )
  {

  }
  requestForm: FormGroup;
  loading = false;
  submitted = false;
  ngOnInit(): void {

    this.requestForm = this.formBuilder.group({
      accNo: ['', Validators.required],
      pages: ['', Validators.required],

  });
  
  }
  get fval() { return this.requestForm.controls; }
  
  request(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.requestForm.invalid) {
      return;
    }
    this.loading = true;
        alert('Checkbook Request sent !!');

        const result:CheckBookRequest= Object.assign({}, this.requestForm.value);
        console.log(result.pages);
          this.requestService.insertRequest(result.accNo,result.pages).subscribe(
            (data : any) =>{
              this.router.navigate(['/checkbookRequest']);
            }
          );

}


}
