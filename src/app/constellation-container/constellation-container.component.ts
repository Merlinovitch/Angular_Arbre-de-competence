import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcConstellationComponent } from './pc-constellation/pc-constellation.component';
import { LockConstellationComponent } from './lock-constellation/lock-constellation.component';
import { FuseeConstellationComponent } from './fusee-constellation/fusee-constellation.component';
import { StatComponent } from './stat/stat.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-constellation-container',
  standalone: true,
  imports: [CommonModule, PcConstellationComponent,LockConstellationComponent,FuseeConstellationComponent,StatComponent],
  templateUrl: './constellation-container.component.html',
  styleUrls: ['./constellation-container.component.scss']
})
export class ConstellationContainerComponent {

  data: any;
  constructor(private dataService: DataServiceService){}

  async ngOnInit(): Promise<void> {
    try {
      this.data = await this.dataService.getCompentenceByIdApprenant('1');
    } catch (e) {
      console.error('error', e);
    }
    console.log(this.data);
  }
}
