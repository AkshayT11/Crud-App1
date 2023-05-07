import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datatype } from '../interfaces/datatype';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   url = 'http://localhost:3000/posts/';

  constructor(private http:HttpClient) { }

  // add employee 
    Addemployee(data:Datatype){
      return this.http.post<Datatype>(this.url,data);
    }

   // get employee details
   
   Getemployee(){
    return this.http.get<Datatype[]>(this.url);
   }

   // delete the data

   DeleteEmployee(id:number){
    return this.http.delete<Datatype>(this.url + id);
   }

  // fetch the data

  fetchData(id:number){
    return this.http.get<Datatype>(this.url + id);
  }

  // update http 

  updateEmp(data:Datatype, id:number){
    return this.http.put<Datatype>(this.url +id,data);
  }

}
