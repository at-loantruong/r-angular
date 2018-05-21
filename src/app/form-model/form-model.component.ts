import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html'
})

export class FormModelComponent {

  demoModelForm: any;
  showDiv: any;

  constructor () {
    this.demoModelForm = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      code: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern("^(AT)[0-9]{4}$")
      ]),
      skill: new FormControl('', Validators.required),
      citizen: new FormControl('', Validators.required),
      certificate: new FormControl('', Validators.required),
    })
  }

  showCertificate(event: any) {
    this.showDiv = event.srcElement && event.srcElement.value === '1';
  }

}
