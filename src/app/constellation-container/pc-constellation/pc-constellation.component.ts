import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarInfoComponent } from '../star-info/star-info.component';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-pc-constellation',
  standalone: true,
  imports: [CommonModule, StarInfoComponent],
  templateUrl: './pc-constellation.component.html',
  styleUrls: ['./pc-constellation.component.scss'],
})
export class PcConstellationComponent {

  idApprenant: string = '';
  @Input() activityTitle: string | undefined;
  @Input() data:any
  @Output()
  public idStarHover: EventEmitter<{string: string,event :Event}> = new EventEmitter<{string: string,event :Event}>();
  @Output()
  public starLeave: EventEmitter<boolean> = new EventEmitter<boolean>();
  star34: number = 0;
  star35: number = 0;
  star36: number = 0;
  star37: number = 0;
  constructor() {
    
  }

  ngAfterViewInit(): void {
    console.log('in');
    
    this.data.forEach((element:any) => {  
      switch(element.Competence.id){        
        case 34: {
          this.star34 = element.niveau
          break;
        }
        case 35: {
          this.star35 = element.niveau
          break;
        }
        case 36: {
          this.star36 = element.niveau
          break;
        }
        case 37: {
          this.star37 = element.niveau
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
