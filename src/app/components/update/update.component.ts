import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  emp: any;
  employee!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.employee = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required]),
    });

    this.service.getById(id).subscribe((res) => {
      this.emp = res;
      this.employee.patchValue({
        id: this.emp.id,
        email: this.emp.email,
        name: this.emp.name,
        password: this.emp.password,
      });
    });
  }

  update() {
    this.service.update(this.employee.value).subscribe((res) => {
      if (res) {
        alert('Employee Updated!');
        this.router.navigateByUrl('dashboard');
      } else {
        alert('Something went wrong');
      }
    });
  }
}
