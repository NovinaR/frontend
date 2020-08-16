import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransferService } from '../transfer.service';
import{ TransferHistory } from '../_models/transferhistory'


@Component({
  selector: 'app-transfer-between-accounts',
  templateUrl: './transfer-between-accounts.component.html',
  styleUrls: ['./transfer-between-accounts.component.css']
})
export class TransferBetweenAccountsComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private transferService: TransferService) { }
  transferForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.transferForm = this.formBuilder.group({
      saccountNo: ['', [Validators.required]],
      ifscNo: ['', [Validators.required, Validators.minLength(10)]],
      raccountNo: ['', [Validators.required]],
      amount:['',[Validators.required]]
  
  });

}

get fval() { return this.transferForm.controls; }

  transfer(){
    this.submitted = true;
    if (this.transferForm.invalid) {
      return;
    }
    this.loading = true;
    alert("Transaction successful");
    const result:TransferHistory = Object.assign({}, this.transferForm.value);
        
    
    // Do useful stuff with the gathered data
    
      this.transferService.insertEntry(result.saccount,result.ifscNo,result.raccount,result.amount).subscribe(
        (data : any) =>{
          
       
        }
      );

  }
}





  
  
  
  

  

  

  


