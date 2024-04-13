import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarInfoComponent } from '../star-info/star-info.component';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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
