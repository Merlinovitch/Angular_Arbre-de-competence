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
        "11",
        "12.4",
        "13.2",
        "14",
        "12.5",
        "13.4",
        "14.2",
        "12.8",
        "13.5",
        "14.4",
        "12.6",
        "13.6",
      ];
  }
  
}
