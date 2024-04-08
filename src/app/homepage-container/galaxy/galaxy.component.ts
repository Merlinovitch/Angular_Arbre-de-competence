import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-galaxy',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent {

}
