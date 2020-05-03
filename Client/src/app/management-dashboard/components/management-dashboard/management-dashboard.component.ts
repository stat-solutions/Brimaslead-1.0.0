import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-management-dashboard',
  templateUrl: './management-dashboard.component.html',
  styleUrls: ['./management-dashboard.component.scss']
})
export class ManagementDashboardComponent implements OnInit {

    userForm: FormGroup;
    user = '/../../../assets/avatar3.jpeg';


  constructor() {}

  ngOnInit() {}
}
