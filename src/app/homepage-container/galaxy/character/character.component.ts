import { Component } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
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
    
    this.addLevelToCharacters();
    

    // this.getCharactersSkills();

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
  
  addLevelToCharacters()
  {
    this.chars.forEach((char: { [x: string]: string; }) => {
      this.getCharacterSkillsById(char['id']).then(res => (char['lvl'] = `${res}`));
    });
  }
  
  getCharactersSkills():void
  {
    this.chars.forEach((character: any) => {
      this.getCharacterSkillsById(character.id);
    });
  }

  async getCharacterSkillsById(characterID: string):Promise<number>
  {
    const calcLvl = await this.dataService.getCompentenceByIdApprenant(characterID).then(res => this.calcCharacterGlobalLevel(res));
    return calcLvl;
  }

  calcCharacterGlobalLevel(skills: any):number
  {
    let currentLevel = 0;

    skills.forEach((skill: { niveau: number; }) => {
      currentLevel += skill.niveau;
    });
    
    const globalLevel = 100 / (11 * 3) * currentLevel;
    return globalLevel;
  }
}
