import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  login(userLogin:any):Observable<any>{
    return this.http.post('http://localhost:8080/login',userLogin);
  }

  register(employee:any):Observable<any>{
    return this.http.post('http://localhost:8080/register',employee);
  }

  getAllEmployee():Observable<any>{
    return this.http.get('http://localhost:8080/getAll')
  }

  deleteEmp(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8080/delete?id=${id}`)
  }

  getById(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/getById?id=${id}`)
  }

  update(employee:any):Observable<any>{
    return this.http.put('http://localhost:8080/update',employee)
  }
}
