import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataServiceService } from './data-service.service';
import { GalaxyComponent } from './homepage-container/galaxy/galaxy.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { FooterComponent } from './footer/footer.component';
import { ConstellationContainerComponent } from './constellation-container/constellation-container.component';
import { CanvasComponent } from './canvas/canvas.component';
import { MuteVolumeComponent } from './mute-volume/mute-volume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GalaxyComponent,
    HomepageContainerComponent,
    FooterComponent,
    ConstellationContainerComponent,
    CanvasComponent,
    MuteVolumeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SkillTree';
  data: any;
  constructor(private dataService: DataServiceService) {}

  
}
