import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcConstellationComponent } from './pc-constellation/pc-constellation.component';

@Component({
  selector: 'app-constellation-container',
  standalone: true,
  imports: [CommonModule, PcConstellationComponent],
  templateUrl: './constellation-container.component.html',
  styleUrls: ['./constellation-container.component.scss']
})
export class ConstellationContainerComponent {

}
