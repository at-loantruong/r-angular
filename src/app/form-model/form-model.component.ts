import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html'
})

export class FormModelComponent {

  demoModelForm: any;
  showDiv: boolean;
  submittedForm: any;
  skills: any[] = [];

  constructor (private fb: FormBuilder) {
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
      skills: this.fb.array([this.initItem()]),
      citizen: new FormControl('', Validators.required),
      certificate: new FormControl('', Validators.required),
    })
  }

  initItem() {
    return this.fb.group({
      skill: ['', Validators.required]
    });
  }

  addSkill () {
    const control  = this.demoModelForm.controls['skills'] as FormArray;
    control.push(this.initItem());
  }

  removeSkill (index: number) {
    const control  = this.demoModelForm.get('skills') as FormArray;
    control.removeAt(index);
  }


  showCertificate(event: any) {
    this.showDiv = event.srcElement && event.srcElement.value === '1';
    if (this.showDiv) {
      this.demoModelForm.controls['certificate'].setValidators([Validators.required]);
      this.demoModelForm.controls['certificate'].updateValueAndValidity()
    } else {
      this.demoModelForm.controls['certificate'].clearValidators()
      this.demoModelForm.controls['certificate'].updateValueAndValidity()
    }
  }

  onSubmit() {
    this.submittedForm = this.demoModelForm.value;
  }

}
