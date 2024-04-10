import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataServiceService } from './data-service.service';
import { GalaxyComponent } from './homepage-container/galaxy/galaxy.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { FooterComponent } from './footer/footer.component';
import { ConstellationContainerComponent } from './constellation-container/constellation-container.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SkillTree';
  apprenant: any[] = [];
  constructor(private dataService: DataServiceService) {}

  async ngOnInit(): Promise<void> {

  }
}
