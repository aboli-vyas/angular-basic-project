import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service:EmployeeService,private router:Router){}

  employee= new FormGroup({
    email: new FormControl('',[Validators.email]),
    name: new FormControl('',[Validators.required , Validators.minLength(3)]),
    password: new FormControl('',[Validators.required])
  })

  register(){

    this.service.register(this.employee.value).subscribe(res =>{
      if(res){
        alert('Registration Successful!');
        this.router.navigateByUrl('login');
      }
      else{
        alert('Something went wrong');
        this.router.navigateByUrl('');      }
    })

  }
}
