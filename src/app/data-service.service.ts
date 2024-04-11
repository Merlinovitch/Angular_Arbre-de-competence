import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

  constructor() {}

  async getAllApprenant() {
    try {
      const { data, error } = await this.supabase.from('Apprenant').select();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getAllCompetence() {
    try {
      const { data, error } = await this.supabase.from('Competence').select();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getAllActivite() {
    try {
      const { data, error } = await this.supabase.from('Activite').select();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getCompentenceByIdApprenant(idApprenant: string) {
    try {
      const { data, error } = await this.supabase
        .from('apprenant_competence')
        .select(`
        niveau,
        Apprenant: id_apprenant (name, lastname), 
        Competence: id_competence (id,title)
        `)
        .eq('id_apprenant', idApprenant);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  addLevelToCharacters(chars: any)
  {
    chars.forEach((char: { [x: string]: string; }) => {
      this.getCharacterSkillsById(char['id']).then(res => (char['lvl'] = `${res}`));
    });
  }

  async getCharacterSkillsById(characterID: string):Promise<number>
  {
    const calcLvl = await this.getCompentenceByIdApprenant(characterID).then(res => this.calcCharacterGlobalLevel(res));
    return calcLvl;
  }

  calcCharacterGlobalLevel(skills: any):number
  {
    let currentLevel = 0;

    skills.forEach((skill: { niveau: number; }) => {
      currentLevel += skill.niveau;
    });
    
    const globalLevel = Math.floor(100 / (11 * 3) * currentLevel);
    return globalLevel;
  }

  async getCompentenceByIdAndIdApprenant(
    idCompetence: string,
    idApprenant: string
  ) {
    try {
      const { data, error } = await this.supabase
        .from('apprenant_competence') // Commence par la table de jointure
        .select(
          `
          niveau,
          Apprenant: id_apprenant (name, lastname), 
          Competence: id_competence (title)
        `
        )
        .eq('id_apprenant', idApprenant) // Filtre par l'ID de l'Apprenant
        .eq('id_competence', idCompetence)
        .single(); // Filtre par l'ID de la Competence

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      return undefined;
    }
  }
}
