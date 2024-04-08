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
  Math: Math = Math;
  constructor(
    private dataService: DataServiceService
  )
  {
  }
  
  async ngOnInit():Promise<void>
  {
      this.chars = await this.dataService.getAllApprenant();
      console.log(this.chars)
  }
  
}
