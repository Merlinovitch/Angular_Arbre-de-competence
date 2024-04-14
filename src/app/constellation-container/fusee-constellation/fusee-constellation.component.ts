import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarInfoComponent } from '../star-info/star-info.component';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fusee-constellation',
  standalone: true,
  imports: [CommonModule, StarInfoComponent],
  templateUrl: './fusee-constellation.component.html',
  styleUrls: ['./fusee-constellation.component.scss']
})
export class FuseeConstellationComponent {
  idApprenant: string = '';
  @Input() activityTitle: string | undefined;
  @Output()
  public idStarHover: EventEmitter<{string: string,event :Event}> = new EventEmitter<{string: string,event :Event}>();
  @Output()
  public starLeave: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  data: any;
  star42: number = 0;
  star43: number = 0;
  star44: number = 0;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log('in');
    
    this.data.forEach((element:any) => {  
      switch(element.Competence.id){        
        case 42: {
          this.star42 = element.niveau
          break;
        }
        case 43: {
          this.star43 = element.niveau
          break;
        }
        case 44: {
          this.star44 = element.niveau
          break;
        }
        default:
          break;
      }
    });
  }

  showStar(idApprenant: string,event: Event): void {
    this.idStarHover.emit({string: idApprenant,event: event});
  }

  hideStar() {
    this.starLeave.emit(true);
  }
}
