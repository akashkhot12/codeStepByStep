import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codeStepByStep';
  userDetails:any = {}

  getData(data:FormsModule){
    console.warn(data);
    this.userDetails = data
  }

}
