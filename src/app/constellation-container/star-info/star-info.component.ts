import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-info.component.html',
  styleUrls: ['./star-info.component.scss']
})
export class StarInfoComponent {
  @Input() tooltipContent: any;

  constructor(){    
  }

  
  
  
}
