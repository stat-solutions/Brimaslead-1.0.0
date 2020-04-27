import { FormGroup, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googo',
  templateUrl: './googo.component.html',
  styleUrls: ['./googo.component.sass']
})
export class GoogoComponent implements OnInit {
  // employee = {
  //   name: "Davis",
  //   age: 23,
  //   id: 342,
  //   date: new Date(),
  //   nextOfKin: { name: "Googo", residence: "nansana" }
  // };

  employeeForm: FormGroup;

  constructor() {}

  ngOnInit() {

    this.employeeForm = this.createEmployeeForm();

    // console.log(this.employee);
    // console.log(this.employee.name);
  }



  createEmployeeForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      nextOfKin: new FormArray([this.createNetxtKin()])
    });

    }

  createNetxtKin(): FormGroup {

    return new FormGroup({
      nextOfKinName: new FormControl('', Validators.required),
      nextOfKinAge: new FormControl('', Validators.required),
      relationship: new  FormControl('', Validators.required)
    });
  }

get nextOfKinDetails(): FormArray {
  return this.employeeForm.get('nextOfKin') as FormArray;
}

  get fVal() {
    return this.employeeForm.controls;
  }
  
  addNextOfKinDetails() {
    this.nextOfKinDetails.push(this.createNetxtKin());
  }
  removeNextOfKin(indx: number) {
    this.nextOfKinDetails.removeAt(indx);
  }
processFormData() {



  }
}
