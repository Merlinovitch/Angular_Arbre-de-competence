import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalaxyComponent } from './homepage-container/galaxy/galaxy.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GalaxyComponent, HomepageContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkillTree';
}
