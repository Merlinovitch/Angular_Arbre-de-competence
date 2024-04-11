import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarInfoComponent } from '../star-info/star-info.component';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pc-constellation',
  standalone: true,
  imports: [CommonModule, StarInfoComponent],
  templateUrl: './pc-constellation.component.html',
  styleUrls: ['./pc-constellation.component.scss'],
})
export class PcConstellationComponent {
  tooltipContent = {
    Competence : {
      title: ""
    }
  };
  data:any;
  idApprenant: string = '';
  constructor(
    private dataService: DataServiceService,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( parms=> this.idApprenant = parms["id"]);
  }

  async ngOnInit(): Promise<void> {
    this.data="";
    try {
      this.data = await this.dataService.getCompentenceByIdApprenant(this.idApprenant);
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
        this.tooltipContent = row
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
