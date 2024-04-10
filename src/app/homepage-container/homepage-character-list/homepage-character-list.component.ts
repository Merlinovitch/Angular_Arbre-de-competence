import { Component } from '@angular/core';
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

  constructor(private dataService: DataServiceService) {}

  async ngOnInit():Promise<void>
  {
      this.chars = await this.dataService.getAllApprenant();
  }

}
