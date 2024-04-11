import { Component, HostListener } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-homepage-character-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './homepage-character-list.component.html',
  styleUrls: ['./homepage-character-list.component.scss']
})


export class HomepageCharacterListComponent {
  chars: any;
  hoveredCharID: any;

  constructor(private dataService: DataServiceService) {}

  async ngOnInit():Promise<void>
  {
      this.chars = await this.dataService.getAllApprenant();
  }

  addFocus()
  {
    const target = document.querySelector(`#character-${this.hoveredCharID}`);
    target?.classList.add("character-hover");
  }

  removeFocus()
  {
    const target = document.querySelector(`#character-${this.hoveredCharID}`);
    target?.classList.remove("character-hover");
    this.hoveredCharID = null;
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(e: any)
  {
    switch (e.target.className)
    {
      case "homepage-character-card-name":
        if (this.hoveredCharID !== null)
          {
            this.removeFocus();
          }
          const id = e.target.id;
          this.hoveredCharID = id.substring(15);
          this.addFocus();
      break;
      
      default:
        if (this.hoveredCharID !== null)
          {
            this.removeFocus();
          }
      break;
    }
  }

}
