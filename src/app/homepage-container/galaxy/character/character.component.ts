import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from 'src/app/data-service.service';
import { Data } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent {
  chars: any;
  timers: any;
  Math: Math = Math;
  constructor(
    private dataService: DataServiceService
  )
  {
  }
  
  async ngOnInit():Promise<void>
  {
      this.chars = await this.dataService.getAllApprenant();

      this.timers = [
        "2.2",
        "2.4",
        "3.2",
        "4",
        "2.5",
        "3.4",
        "4.2",
        "2.8",
        "3.5",
        "4.4",
        "2.6",
        "3.6",
      ];
  }
  
}
