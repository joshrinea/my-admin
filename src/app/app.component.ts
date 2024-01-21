import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'admin';

  ngOnInit(): void {}

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}
  showSpinner() {
    this.spinner.show();
  }

  showToast() {
    this.toastr.success('Hey Joshrine');
  }
}
