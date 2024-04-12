import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
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
