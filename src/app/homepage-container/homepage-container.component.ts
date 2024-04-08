import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxyComponent } from '../galaxy/galaxy.component';

@Component({
  selector: 'app-homepage-container',
  standalone: true,
  imports: [CommonModule, GalaxyComponent],
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.scss']
})
export class HomepageContainerComponent {

}
