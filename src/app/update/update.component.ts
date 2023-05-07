import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Datatype } from '../interfaces/datatype';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public dataid!: number;
  public employeed!:  Datatype;

  constructor(private activatedroute:ActivatedRoute, private router:Router , private _employeeService:EmployeeService){}

  ngOnInit(){

    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']("id");
      console.log("data id is",this.dataid) 
    })
      this._employeeService.fetchData(this.dataid).subscribe((result:Datatype)=>{
          this.employeed = result;
        // console.log(this.employeed);
      })


  }

  update(){
    this._employeeService.updateEmp(this.employeed,this.dataid).subscribe((result:Datatype)=>{
      this.router.navigate(["/"]);
    })
  }

}
