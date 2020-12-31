import { DbServiceService } from "../../../../shared/services/firestore-db/DbServiceService";
import { Component, OnInit, Pipe, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { AuthUser } from "src/app/shared/models/user-profile/auth-user";
import { Department } from "src/app/auth/register/register.component";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { RfqRelatedServiceService } from "src/app/shared/services/front-desk-services/rfq-related-service.service";
import { Observable } from "rxjs";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { Column, GridOption } from "angular-slickgrid";
import { Module } from "ag-grid-community";

// tslint:disable-next-line: max-line-length
export interface TradingProductCatalog {
  tradingProductId: string;
  /*Generated*/ tradingProductName: string;
  tradingProductCategory: string;
  /*Stockable=Stockable items are physical objects whose quantity should be tracked,composite=Serialized products are objects that have a unique serial number on each unit.,non-stoked=Non-stocked products are not tracked by quantity, but you can assign costs and prices to them,service=Services are not tracked by quantity, but you can assign costs and prices to them.*/ tradingProductType: string;
  /*Standard=This item has one variant which is itself,Variant=This item has different attributes, like size or color. Each variant can be uniquely tracked,Composite=A composite contains one or more standard items. It can be tracked as one item for all the standard items linked to it*/ tradingProductDescription: string;
  /**/ tradingProductUnitOfMeasure: string;
  /*Cases,Packs,Pieces,Each,Weight={kilogram(kg),gram(g),milligram(mg)},Height={metre(m),centimetre (cm),millimetre (mm), inch (in), the foot (ft), the yard (yd)},Width={metre(m),centimetre (cm),millimetre (mm), inch (in), the foot (ft), the yard (yd)},Length{metre(m),centimetre (cm),millimetre (mm), inch (in), the foot (ft), the yard (yd),volume={litres,millitres}}*/ tradingProductAverageCostPrice: number;
  tradingProductAverageMarkUp: number;
  tradingProductAverageSellingPrice: number;
  tradingProductInventoryStatus: string;
  /*Available,Not Available*/ inventoryColRef: string;
  inventoryDocRef: string;
  supplierColRef: string;
  supplierDocRef: string;
  employeeColRefCB: string;
  /*Created by*/ employeeDocRefCB: string;
  /*Created by*/ employeeColRefFA: string;
  /*First Approved by*/ employeeDocRefCBSA: string;
  /*First Approved*/ employeeColRefSA: string;
  /*Second Approved by*/ employeeDocRefSA: string;
  /*Second Approved*/ tradingProductVariants: any;
  createdAt: firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.FieldValue;
}

export interface TradingProductCatalogWithVId extends TradingProductCatalog {
  variantId: string /*Unique id representing the variant in variants*/;
}

export interface TradingProductVariants {
  variantAttributesValues: string;
  /*Value of the attribute like Red,Blue*/ variantCostPrice: number;
  variantMarkUp: number;
}

export interface TradingProductComposites {
  compositeId: string;
  tradingProductsColRefs: string;
  tradingProductsDocRefs: string;
}
export interface UomData {
  uomAbbreviation: string;
  uomName: string;
}
export interface PType {
  pTypeName: string;
}
export interface PCat {
  pCatName: string;
}
@Component({
  selector: "app-create-catalog-items",
  templateUrl: "./create-catalog-items.component.html",
  styleUrls: ["./create-catalog-items.component.scss"],
})
export class CreateCatalogItemsComponent implements OnInit {
  stocked = false;
  standard = false;
  composite = false;
  variant = false;
  service = false;
  selectitemtype = false;
  tradingProductForm: FormGroup;
  value: string;
  values: any;
  numberValue: number;
  averageSellingPrice = 0;
  isHovering: boolean;
  file: any;
  files: File[] = [];
  authData: AuthUser;
  hide = true;
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  serviceErrors: any = {};
  mySubscription: any;
  userForm: FormGroup;
  imageSrc: string;
  previewPhoto = false;
  loginFormGroup: FormGroup;
  personalFormGroup: FormGroup;
  employeeFormGroup: FormGroup;
  appData: any;
  department: Department[];
  userFilter: any = { stage: "" };
  unitOfMeasure$: Observable<UomData[]>;
  theTradingProducts$: Observable<TradingProductCatalog[]>;
  tradingProductType: PType[] = [
    { pTypeName: "Standard" },
    { pTypeName: "Composite" },
    { pTypeName: "Variants" },
  ];

  tradingProductCategory: PCat[] = [
    { pCatName: "Stockable" },
    { pCatName: "Service" },
  ];

  attiCount: number[] = [];
  private gridApi: any;
  private gridColumnApi: any;

  public modalRef: BsModalRef;
  columnDefinitions: Column[] = [];
  columnDefs: any[] = [];
  gridOptions: GridOption = {};
  dataset: TradingProductCatalog[] = [];
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private rfqR: RfqRelatedServiceService,
    private modalService: BsModalService,
    private db: DbServiceService
  ) {}
  // createTheProductVariants

  get variants(): FormGroup {
    return this.fb.group({
      variantAttributesValues: this.fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),

      variantCostPrice: this.fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      variantMarkUp: this.fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
    });
  }

  get composites(): FormGroup {
    return this.fb.group({
      compositeId: this.fb.control(""),
      tradingProductsColRefs: this.fb.control({ value: "", disabled: true }),
      tradingProductsDocRefs: this.fb.control({ value: "", disabled: true }),
    });
  }

  get fval() {
    return this.tradingProductForm.controls;
  }

  ngOnInit(): void {
    this.tradingProductForm = this.creatFormGroup();
    this.theTradingProducts$ = this.rfqR.getAllProductDetails();
    this.unitOfMeasure$ = this.db.colWithIds$<UomData>("unitOfMeasures");

    this.columnDefs = [
      {
        headerName: "#",
        field: "id",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product Name",
        field: "tradingProductName",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product Category",
        field: "tradingProductCategory",
        sortable: true,
        filter: true,
        checkboxSelection: true,
        resizable: true,
      },
      {
        headerName: "Product Type",
        field: "tradingProductType",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product Description",
        field: "tradingProductDescription",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product UnitOfMeasure",
        field: "tradingProductUnitOfMeasure",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product Average CostPrice",
        field: "tradingProductAverageCostPrice",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product Average MarkUp",
        field: "tradingProductAverageMarkUp",
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: "Product Average Selling Price",
        field: "tradingProductAverageSellingPrice",
        sortable: true,
        filter: true,
        resizable: true,
      },
    ];

    this.gridOptions = { enableAutoResize: true, enableCellNavigation: true };
  }
  onGridReady(params) {
    // this.rfqR.getAllProductDetails().subscribe(data => this.dataset = data);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  exportExcel(params) {
    console.log(params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.exportDataAsCsv(params);
  }
  creatFormGroup() {
    return this.fb.group({
      tradingProductId: this.fb.control(""),
      variantId: this.fb.control(""),
      tradingProductName: this.fb.control("", [Validators.required]),
      tradingProductCategory: this.fb.control("", [Validators.required]),
      tradingProductType: this.fb.control("", [Validators.required]),
      tradingProductDescription: this.fb.control("", [
        Validators.required,
        Validators.minLength(14),
      ]),
      tradingProductUnitOfMeasure: this.fb.control("", [Validators.required]),
      tradingProductAverageCostPrice: this.fb.control("", [
        Validators.required,
      ]),
      tradingProductAverageMarkUp: this.fb.control("", [Validators.required]),

      tradingProductInventoryStatus: this.fb.control(""),
      tradingProductVariants: this.fb.array([this.variants]),
      tradingProductComposites: this.fb.array([this.composites]),
    });
  }

  //  tradingProductAverageSellingPrice: this.fb.control('', [Validators.required]),
  checkV(v: any) {
    console.table(v);
  }
  addVariant() {
    (this.tradingProductForm.get("tradingProductVariants") as FormArray).push(
      this.variants
    );
  }

  check() {
    console.log(this.tradingProductForm.value);
    console.log(this.tradingProductForm);
  }

  setSelectedChanges(selectedChange: any) {
    switch (selectedChange.target.value) {
      case "Stockable":
        this.stocked = true;
        this.service = false;

        break;

      case "Service":
        this.stocked = false;
        this.service = true;

        break;

      case "Select Unit Of Measure":
        this.fval.tradingProductUnitOfMeasure.setValidators([
          Validators.required,
        ]);

        break;
      case "Select Product Type":
        this.fval.tradingProductType.setValidators([Validators.required]);
        break;
      case "Select Unit Of Measure":
        this.fval.tradingProductUnitOfMeasure.setValidators([
          Validators.required,
        ]);
        break;

      case "Select Trading Product Category":
        this.fval.tradingProductCategory.setValidators([Validators.required]);

        break;

      case "Variants":
        this.fval.tradingProductVariants.setValidators([Validators.required]);
        // this. addToAttCount();
        break;

      default:
        this.stocked = false;
        this.service = false;
      // this.fval.tradingProductType.setErrors({ required: true });
    }
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "white modal-lg" })
    );
  }

  setValidationVariants(name: string, clientId: string) {}

  onKey(event: any) {
    // without type info
    this.values = event.target.value.replace(/[\D\s\._\-]+/g, "");

    this.numberValue = this.values ? parseInt(this.values, 10) : 0;

    // tslint:disable-next-line:no-unused-expression
    this.values =
      this.numberValue === 0 ? "" : this.numberValue.toLocaleString("en-US");

    this.tradingProductForm.controls.tradingProductAverageCostPrice.setValue(
      this.values
    );
  }

  addToAttCount() {
    this.attiCount.push(this.attiCount.length + 1);
    this.triggerAtValidate();
  }

  triggerAtValidate() {
    this.tradingProductForm
      .get("tradingProductVariants")
      ["controls"][this.attiCount.length][
        "controls"
      ].variantAttributesValues.enable();

    this.tradingProductForm
      .get("tradingProductVariants")
      ["controls"][this.attiCount.length]["controls"].variantMarkUp.enable();
    this.tradingProductForm
      .get("tradingProductVariants")
      ["controls"][this.attiCount.length]["controls"].variantCostPrice.enable();
  }

  validateForm() {
    // this.triggerAtValidate();
    console.table(this.tradingProductForm.controls);
    this.averageSellingPrice =
      parseInt(
        this.fval.tradingProductAverageCostPrice.value.replace(
          /[\D\s\._\-]+/g,
          ""
        ),
        10
      ) +
      parseInt(
        this.fval.tradingProductAverageCostPrice.value.replace(
          /[\D\s\._\-]+/g,
          ""
        ),
        10
      ) *
        (this.fval.tradingProductAverageMarkUp.value / 100);

    // console.log(  Math.round(this.averageSellingPrice)  );
    const price = Math.round(this.averageSellingPrice);

    this.values = price === 0 ? "" : price.toLocaleString("en-US");

    this.tradingProductForm.controls.tradingProductAverageSellingPrice.setValue(
      this.values
    );
  }

  setTypeChanges(selectedChange: any) {
    switch (selectedChange.target.value) {
      case "Standard":
        this.standard = true;
        this.composite = false;
        this.variant = false;

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantAttributesValues.disable();

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantCostPrice.disable();

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantMarkUp.disable();
        this.fval.tradingProductAverageCostPrice.enable();
        this.fval.tradingProductAverageMarkUp.enable();
        break;

      case "Composite":
        this.composite = true;
        this.standard = false;
        this.variant = false;
        this.fval.tradingProductVariants.clearValidators();

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantAttributesValues.disable();

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantCostPrice.disable();

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantMarkUp.disable();

        this.fval.tradingProductAverageCostPrice.disable();
        this.fval.tradingProductAverageMarkUp.disable();
        break;

      case "Variants":
        this.composite = false;
        this.standard = false;
        this.variant = true;
        this.fval.tradingProductVariants.setValidators([Validators.required]);
        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantCostPrice.enable();
        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantAttributesValues.enable();

        this.tradingProductForm
          .get("tradingProductVariants")
          ["controls"][0]["controls"].variantMarkUp.enable();
        this.fval.tradingProductAverageCostPrice.disable();
        this.fval.tradingProductAverageMarkUp.disable();
        break;

      default:
        this.composite = false;
        this.standard = false;
        this.stocked = false;
        // this.fval.tradingProductType.setErrors({ required: true });
        this.fval.tradingProductVariants.setErrors({ required: false });
        // this.fval.tradingProductComposites.setErrors({ required: false });
        this.fval.tradingProductAverageCostPrice.enable();
        this.fval.tradingProductAverageMarkUp.enable();
    }
  }

  showSuccess() {
    this.toastr.success(
      "Creation of the product was successfull",
      this.serviceErrors,
      { timeOut: 6000, positionClass: "toast-top-right" }
    );
  }
  showDanger() {
    this.toastr.warning(this.serviceErrors, "Product Creation Failed!!", {
      timeOut: 6000,
      positionClass: "toast-bottom-left",
    });
  }

  uploadForm() {
    this.spinner.show();
    console.log(this.tradingProductForm.value);
    switch (this.fval.tradingProductType.value) {
      case "Standard":
        delete this.tradingProductForm.value.tradingProductVariants;
        delete this.tradingProductForm.value.tradingProductComposites;

        // this.spinner.hide();
        this.rfqR
          .createTheProductStandard(
            "tradingProductData",
            this.tradingProductForm.value
          )
          .subscribe(
            (data: string) => {
              if (data === "User created successfully") {
                this.serviceErrors = "Product creation  was Successful";

                setTimeout(() => {
                  this.posted = true;
                  this.spinner.hide();
                  this.showSuccess();
                  location.reload();
                }, 2000);
              }
            },

            (error: string) => {
              this.spinner.hide();
              this.errored = true;
              this.serviceErrors = error;
              this.showDanger();
            }
          );
        break;

      case "Composite":
        delete this.tradingProductForm.value.tradingProductVariants;
        // this.spinner.hide();
        this.rfqR
          .createTheProductStandard(
            "tradingProductData",
            this.tradingProductForm.value
          )
          .subscribe(
            (data: string) => {
              if (data === "User created successfully") {
                this.serviceErrors = "Product creation  was Successful";

                setTimeout(() => {
                  this.posted = true;
                  this.spinner.hide();
                  this.showSuccess();
                  location.reload();
                }, 2000);
              }
            },

            (error: string) => {
              this.spinner.hide();
              this.errored = true;
              this.serviceErrors = error;
              this.showDanger();
            }
          );
        break;

      case "Variants":
        delete this.tradingProductForm.value.tradingProductComposites;

        console.table(this.tradingProductForm.value.tradingProductVariants);
        console.table(this.tradingProductForm.value);

        this.rfqR
          .createTheProductVariants(
            "tradingProductData",
            this.tradingProductForm.value
          )
          .subscribe(
            (data: string) => {
              if (data === "User created successfully") {
                this.serviceErrors = "Product creation  was Successful";

                setTimeout(() => {
                  this.posted = true;
                  this.spinner.hide();
                  this.showSuccess();
                  // location.reload();
                }, 2000);
              }
            },

            (error: string) => {
              this.spinner.hide();
              this.errored = true;
              this.serviceErrors = error;
              this.showDanger();
            }
          );
        break;
    }
  }
}
