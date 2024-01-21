import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  employeeID: any;
  employee: any = {};

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeID = this.route.snapshot.paramMap.get('id');
    this.getEmployeeProfile();
  }

  getEmployeeProfile() {
    this.spinner.show();
    this.employeeService
      .getEmployeeByID(this.employeeID)
      .subscribe((res: any) => {
        this.employee = res;
        this.spinner.hide();
      });
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
