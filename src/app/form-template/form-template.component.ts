import { Component } from '@angular/core';
import { User }    from './user';

@Component({
  selector: 'app-form',
  templateUrl: './form-template.component.html'
})

export class FormTemplateComponent {
  user = { email: 'loan.truong@asiantech.vn', pass: '123' }
}
