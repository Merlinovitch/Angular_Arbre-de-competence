import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxyComponent } from '../homepage-container/galaxy/galaxy.component';
import { CharacterComponent } from '../homepage-container/galaxy/character/character.component';
import { HomepageCharacterListComponent } from './homepage-character-list/homepage-character-list.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';


@Component({
  selector: 'app-homepage-container',
  standalone: true,
  imports: [CommonModule, GalaxyComponent, CharacterComponent, HomepageCharacterListComponent, RouterModule],
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.scss']
})
export class HomepageContainerComponent {

}
