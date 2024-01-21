import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  employees: any[] = [];

  ngOnInit(): void {
    this.getEmployees();
  }

  constructor(
    private employeeService: EmployeeService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  getEmployees() {
    this.spinner.show();
    this.employeeService.getEmployees().subscribe((employee: any) => {
      this.employees = employee;
      // setTimeout(() => {

      // }, 2000);
      this.spinner.hide();

      console.log(this.employees);
    });
  }

  navigateToProfile(id: any) {
    this.router.navigate(['/employee/', id]);
  }
}
