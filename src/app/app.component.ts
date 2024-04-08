import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GalaxyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkillTree';
  apprenant: any[] = []
  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.dataService.getAllApprenant();
    this.dataService.getAllCompetence();
    this.dataService.getAllActivite();
    this.dataService.getCompentenceByIdApprenant(1);
  }

  

}
