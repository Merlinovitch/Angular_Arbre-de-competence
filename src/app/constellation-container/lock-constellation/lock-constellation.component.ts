import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { StarInfoComponent } from '../star-info/star-info.component';

@Component({
  selector: 'app-lock-constellation',
  standalone: true,
  imports: [CommonModule, StarInfoComponent],
  templateUrl: './lock-constellation.component.html',
  styleUrls: ['./lock-constellation.component.scss']
})
export class LockConstellationComponent {
  idApprenant: string = '';
  @Input() activityTitle: string | undefined;
  @Output()
  public idStarHover: EventEmitter<{string: string,event :Event}> = new EventEmitter<{string: string,event :Event}>();
  @Output()
  public starLeave: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  data: any;
  star39: number = 0;
  star38: number = 0;
  star40: number = 0;
  star41: number = 0;

  constructor() {
  }


  ngAfterViewInit(): void {
    console.log('in');
    
    this.data.forEach((element:any) => {  
      switch(element.Competence.id){        
        case 38: {
          this.star38 = element.niveau
          break;
        }
        case 39: {
          this.star39 = element.niveau
          break;
        }
        case 40: {
          this.star40 = element.niveau
          break;
        }
        case 41: {
          this.star41 = element.niveau
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
