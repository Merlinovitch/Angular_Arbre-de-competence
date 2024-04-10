import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarInfoComponent } from '../star-info/star-info.component';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-pc-constellation',
  standalone: true,
  imports: [CommonModule, StarInfoComponent],
  templateUrl: './pc-constellation.component.html',
  styleUrls: ['./pc-constellation.component.scss'],
})
export class PcConstellationComponent {
  tooltipContent = '';
  data: any;
  constructor(
    private renderer: Renderer2,
    private dataService: DataServiceService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.data = await this.dataService.getCompentenceByIdApprenant('1');
    } catch (e) {
      console.error('error', e);
    }
    console.log(this.data);
  }
  async showStar(event: MouseEvent, elementId: string): Promise<any> {
    const tooltip = document.querySelector('app-star-info');
    if (tooltip) {
      this.renderer.setStyle(tooltip, 'display', 'block');
      this.renderer.setStyle(tooltip, 'position', 'absolute');
      this.renderer.setStyle(tooltip, 'left', event.clientX + 20 + 'px');
      this.renderer.setStyle(tooltip, 'top', event.clientY + 'px');
      console.log(elementId);
      
      const row = this.data.find((e :any) => e.Competence.id == elementId)
      console.log(row.niveau);
      
      if (row) {
        this.tooltipContent = row.niveau + ' ' + row.Competence.title;
      }
  }
}
  hideStar(event: MouseEvent) {
    const tooltip = document.querySelector('app-star-info');
    if (tooltip) {
      this.renderer.setStyle(tooltip, 'display', 'none');
      console.log('goodbye');
    }
  }

}
