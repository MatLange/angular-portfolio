import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputfieldComponent } from './inputfield/inputfield.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    InputfieldComponent,
    ProgressbarComponent,
    MatProgressBarModule, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myportfolio'; 
  value = '50'; // Initialize the variable

  progress = 50;
  setProgress($event: Event) {
    this.progress = +($event.target as HTMLInputElement).value;
  }  
  
  onResize($event: Event) {
    console.log($event.target);
  }
}
