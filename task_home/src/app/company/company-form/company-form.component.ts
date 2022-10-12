import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  public companyform: FormGroup;
  
  constructor(public formBuilder: FormBuilder) 
  { 
    this.companyform = new FormGroup(''); 
  }

  ngOnInit(): void {
    this.companyform = this.formBuilder.group(
      {
        id: [],
        companyname: ['', Validators.required],
        companydescription: ['', Validators.required]        
      }
    )
  }

}
