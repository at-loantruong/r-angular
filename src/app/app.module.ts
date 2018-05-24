import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormTemplateComponent} from './form-template/form-template.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
