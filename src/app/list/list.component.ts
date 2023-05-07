import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Datatype } from '../interfaces/datatype';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeForm!: FormGroup;

  empData: undefined | Datatype[];

  constructor(private fb: FormBuilder, private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phone: ['', Validators.required]
    })
    this.getEmployee();
  }
  // this from click event on form add button 
  addEmp(data:Datatype){
    // console.log(data)

    this._employeeService.Addemployee(data).subscribe((res)=>{
      // To reset form 
      this.employeeForm.reset();
    })
    this.getEmployee();
  }

  // Get data from employee 

  getEmployee(){
    this._employeeService.Getemployee().subscribe(res=>{
      this.empData = res
    })
  }

}
