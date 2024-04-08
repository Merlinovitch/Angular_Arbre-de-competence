import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxyComponent } from '../homepage-container/galaxy/galaxy.component';
import { CharacterComponent } from '../homepage-container/galaxy/character/character.component';

@Component({
  selector: 'app-homepage-container',
  standalone: true,
  imports: [CommonModule, GalaxyComponent, CharacterComponent],
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.scss']
})
export class HomepageContainerComponent {

}
