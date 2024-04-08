import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../data-service.service';
@Component({
  selector: 'app-homepage-character-list',
  standalone: true,
  templateUrl: './homepage-character-list.component.html',
  styleUrls: ['./homepage-character-list.component.scss']
})


export class HomepageCharacterListComponent {
  constructor(private dataService: DataServiceService) {}

  async ngOnInit(): Promise<void> {

}
}
