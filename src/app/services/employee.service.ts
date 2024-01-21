import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private base_url = 'https://dummyapi.online/api/users';

  constructor(private http: HttpClient ) {}

  getEmployees() {
    return this.http.get(`${this.base_url}`);
  }

  getEmployeeByID(id: any) {
    return this.http.get(`${this.base_url}/${id}`);
  }
}
