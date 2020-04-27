import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidatorInitialCompanySetup } from 'src/app/shared/validators/custom-validator-initial-company-setup';

@Component({
  selector: 'app-request-for-quote',
  templateUrl: './request-for-quote.component.html',
  styleUrls: ['./request-for-quote.component.scss']
})
export class RequestForQuoteComponent implements OnInit {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  userForm: FormGroup;


  constructor(private _formbuilder: FormBuilder) {

  }

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }


  createFormGroup() {
    return new FormGroup({

      company_name: this._formbuilder.group(['', Validators.compose([Validators.required, Validators.minLength(3)])]),

      continents_name: this._formbuilder.group(['', Validators.compose([
        Validators.required,
        CustomValidatorInitialCompanySetup.
          patternValidator(/\bASIA|\bAFRICA|\bNORTH AMERICA|\bSOUTH AMERICA|\bANTARCTICA|\bEUROPE|\bAUSTRALIA/,
            { belongToContinents: true })

      ])]),

      continental_region_name: this._formbuilder.group(['', Validators.compose([
        Validators.required,
        CustomValidatorInitialCompanySetup.
          // tslint:disable-next-line:max-line-length
          patternValidator(/\bEASTERN AFRICA|\bMIDDLE AFRICA|\bNORTHERN AFRICA|\bSOUTHERN AFRICA|\bWESTERN AFRICA|\bTHE CARIBBEAN|\bCENTRAL AMERICA |\bSOUTH AMERICA|\bNORTHERN AMERICA|\bMIDDLE EAST|\bOCEANIA|\bCENTRAL ASIA|\bEAST ASIA|\bSOUTH ASIA|\bSOUTHEAST ASIA|\bWESTERN ASIA|\bCENTRAL EUROPE|\bEASTERN EUROPE|\bNORTHEN EUROPE|\bSOUTHERN EUROPE|\bSOUTHEASTERN EUROPE|\bSOUTHWESTERN EUROPE|\bWESTERN EUROPE/, { belongToContinentalRegions: true })

      ])]),

      countries_name: this._formbuilder.group(['', Validators.compose([
        Validators.required,
        CustomValidatorInitialCompanySetup.
          // tslint:disable-next-line:max-line-length
          patternValidator(/\bEASTERN AFRICA|\bALAND ISLANDS|\bALBANIA|\bALGERIA|\bAMERICAN SAMOA|\bANDORRA|\bANGOLA|\bANGUILLA|\bANTARCTICA|\bANTIGUA AND BARBUDA|\bARGENTINA|\bARMENIA|\bARUBA|\bAUSTRALIA|\bAUSTRIA|\bAZERBAIJAN|\bBAHAMAS|\bBAHRAIN|\bBANGLADESH|\bBARBADOS|\bBELARUS|\bBELGIUM|\bBELIZE|\bBENIN|\bBERMUDA|\bBHUTAN|\bBOLIVIA|\bBONAIRE-SINT EUSTATIUS AND SABA|\bBOSNIA AND HERZEGOVINA|\bBOTSWANA|\bBOUVET ISLAND|\bBRAZIL|\bBRITISH INDIAN OCEAN TERRITORY|\bBRUNEI DARUSSALAM|\bBULGARIA|\bBURKINA FASO|\bBURUNDI|\bCAMBODIA|\bCAMEROON|\bCANADA|\bCAPE VERDE|\bCAYMAN ISLANDS|\bCENTRAL AFRICAN REPUBLIC|\bCHAD|\bCHILE|\bCHINA|\bCHRISTMAS ISLAND|\bCOCOS-KEELING ISLANDS|\bCOLOMBIA|\bCOMOROS|\bCONGO|\bCONGO-THE DEMOCRATIC REPUBLIC OF |\bCOOK ISLANDS|\bCOSTA RICA|\bCROATIA|\bCUBA|\bCURAÇAO|\bCYPRUS|\bCZECHIA|\bDENMARK|\bDJIBOUTI|\bDOMINICA|\bDOMINICAN REPUBLIC|\bECUADOR|\bEGYPT|\bEL SALVADOR|\bEQUATORIAL GUINEA|\bERITREA|\bESTONIA|\bETHIOPIA|\bFALKLAND ISLANDS -MALVINAS|\bFAROE ISLANDS|\bFIJI|\bFINLAND|\bFRANCE|\bFRENCH GUIANA|\bFRENCH POLYNESIA|\bFRENCH SOUTHERN TERRITORIES|\bGABON|\bGAMBIA|\bGEORGIA|\bGERMANY|\bGHANA|\bGIBRALTAR|\bGREECE|\bGREENLAND|\bGRENADA|\bGUADELOUPE|\bGUAM|\bGUATEMALA|\bGUERNSEY|\bGUINEA|\bGUINEA-BISSAU|\bGUYANA|\bHAITI|\bHEARD AND MC DONALD ISLANDS|\bHOLY SEE-VATICAN CITY STATE|\bHONDURAS|\bHONG KONG|\bHUNGARY|\bICELAND|\bINDIA|\bINDONESIA|\bIRAN-ISLAMIC REPUBLIC OF|\bIRAQ|\bIRELAND|\bISLE OF MAN|\bISRAEL|\bITALY|\bJAMAICA|\bJAPAN|\bJERSEY|\bJORDAN|\bKAZAKSTAN|\bKENYA|\bKIRIBATI|\bKOREA-REPUBLIC OF|\bKOSOVO-TEMPORARY CODE|\bKUWAIT|\bKYRGYZSTAN|\bLATVIA|\bLEBANON|\bLESOTHO|\bLIBERIA|\bLIBYAN ARAB JAMAHIRIYA|\bLIECHTENSTEIN|\bLITHUANIA|\bLUXEMBOURG|\bMACAO|\bMACEDONIA-THE FORMER YUGOSLAV REPUBLIC OF|\bMADAGASCAR|\bMALAWI|\bMALAYSIA|\bMALDIVES|\bMALI|\bMALTA|\bMARSHALL ISLANDS|\bMARTINIQUE|\bMAURITANIA|\bMAURITIUS|\bMAYOTTE|\bMEXICO|\bMICRONESIA-FEDERATED STATES OF|\bMOLDOVA-REPUBLIC OF|\bMONACO|\bMONGOLIA|\bMONTENEGRO|\bMONTSERRAT|\bMOROCCO|\bMOZAMBIQUE|\bMYANMAR|\bNAMIBIA|\bNAURU|\bNEPAL|\bNETHERLANDS|\bNETHERLANDS ANTILLES|\bNEW CALEDONIA|\bNEW ZEALAND|\bNICARAGUA|\bNIGER|\bNIGERIA|\bNIUE|\bNORFOLK ISLAND|\bNORTHERN MARIANA ISLANDS|\bNORWAY|\bOMAN|\bPAKISTAN|\bPALAU|\bPALESTINIAN TERRITORY-OCCUPIED|\bPANAMA|\bPAPUA NEW GUINEA|\bPARAGUAY|\bPERU|\bPHILIPPINES|\bPITCAIRN|\bPOLAND|\bPORTUGAL|\bPUERTO RICO|\bQATAR|\bREPUBLIC OF SERBIA|\bREUNION|\bROMANIA|\bRUSSIA FEDERATION|\bRWANDA|\bSAINT BARTHÉLEMY|\bSAINT HELENA|\bSAINT KITTS-NEVIS|\bSAINT LUCIA|\bSAINT MARTIN|\bSAINT PIERRE AND MIQUELON|\bSAINT VINCENT AND THE GRENADINES|\bSAMOA|\bSAN MARINO|\bSAO TOME AND PRINCIPE|\bSAUDI ARABIA|\bSENEGAL|\bSERBIA AND MONTENEGRO|\bSEYCHELLES|\bSIERRA LEONE|\bSINGAPORE|\bSINT MAARTEN|\bSLOVAKIA|\bSLOVENIA|\bSOLOMON ISLANDS|\bSOMALIA|\bSOUTH AFRICA|\bSOUTH GEORGIA-THE SOUTH SANDWICH ISLANDS|\bSOUTH SUDAN|\bSPAIN|\bSRI LANKA|\bSUDAN|\bSURINAME|\bSVALBARD AND JAN MAYEN|\bSWAZILAND|\bSWEDEN|\bSWITZERLAND|\bSYRIAN ARAB REPUBLIC|\bTAIWAN-PROVINCE OF CHINA|\bTAJIKISTAN|\bTANZANIA-UNITED REPUBLIC OF|\bTHAILAND|\bTIMOR-LESTE|\bTOGO|\bTOKELAU|\bTONGA|\bTRINIDAD AND TOBAGO|\bTUNISIA|\bTURKEY|\bTURKISH REP N CYPRUS-TEMPORARY CODE|\bTURKMENISTAN|\bTURKS AND CAICOS ISLANDS|\bTUVALU|\bUGANDA|\bUKRAINE|\bUNITED ARAB EMIRATES|\bUNITED KINGDOM|\bUNITED STATES|\bUNITED STATES MINOR OUTLYING ISLANDS|\bURUGUAY|\bUZBEKISTAN|\bVANUATU|\bVENEZUELA|\bVIETNAM|\bVIRGIN ISLANDS-BRITISH|\bVIRGIN ISLANDS-US|\bWALLIS AND FUTUNA|\bWESTERN SAHARA|\bYEMEN|\bZAMBIA|\bZIMBABWE/, { belongToCountry: true })

      ])]),

     business_unit_type: this._formbuilder.group(['', Validators.compose([Validators.required])]),
       business_unit_name: this._formbuilder.group(['', Validators.compose([Validators.required, Validators.minLength(4)])])
     });
  }



  get fval() { return this.userForm.controls; }




  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

}
