import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-templates-forms',
  templateUrl: './templates-forms.component.html',
  styleUrl: './templates-forms.component.css'
})
export class TemplatesFormsComponent {

  loginForm(data:Form){
    console.log(data);
    
  }

}
