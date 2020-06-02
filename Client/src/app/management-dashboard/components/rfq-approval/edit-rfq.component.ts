
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';
import { Router } from '@angular/router';
import { RfqData } from 'src/app/shared/models/other-models/rfqRelatedModels/rfq-data.model';
import { ItemStock } from 'src/app/shared/models/other-models/rfqRelatedModels/item_stock.model';

@Component({
  selector: "app-edit-rfq",
  templateUrl: "./edit-rfq.component.html",
  styleUrls: ["./edit-rfq.component.scss"]
})
export class EditRfqComponent implements OnInit {
  @Input() rfqData: RfqData[];

  itemsForm: FormGroup;
  itemsStock: ItemStock[];
  isEditable = false;
  edited = false;
  removEditTable = true;

  constructor(private _formbuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.itemsForm = this.createFormGroup();
  }

  createFormGroup() {
    return this._formbuilder.group({
      stockId: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],

      itemName: ["", Validators.compose([Validators.required])],

      unit: [
        { value: "", disabled: false },
        Validators.compose([Validators.required])
      ],

      qtyRequired: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ],

      unitCost: [
        { value: "", disabled: false },
        Validators.compose([Validators.required])
      ],

      totalCost: [
        { value: "", disabled: false },
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          CustomValidatorInitialCompanySetup.patternValidator(
            /^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/,
            { hasNumber: true }
          )
        ])
      ]
    });
  }

  //get function for itemsForm form controls
  get fcont() {
    return this.itemsForm.controls;
  }
  //method for editing rfq items
  edit(record: any) {
    record.isEditable = !record.isEditable
    this.edited = !this.edited;
    if (!this.edited) {
      console.log(record.value);
    }
  }

  //method for saving rfq
  onSubmit() {
    console.log(this.itemsForm.value);
    this.removEditTable = !this.removEditTable
  }
}
