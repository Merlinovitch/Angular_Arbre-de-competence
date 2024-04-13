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

  constructor() {
  }

  showStar(idApprenant: string,event: Event): void {
    this.idStarHover.emit({string: idApprenant,event: event});
  }

  hideStar() {
    this.starLeave.emit(true);
  }

  
}
