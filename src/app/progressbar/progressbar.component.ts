import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [],
  template: '<div class="bar" [style.width.%]="value"></div>',
  styleUrl: './progressbar.component.css',
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',
    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  },  
})
export class ProgressbarComponent {
  @Input() value = 0; // Now 'value' can be bound by parent components
}