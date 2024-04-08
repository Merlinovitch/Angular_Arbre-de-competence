import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  apprenant: any[] = []

  constructor() { 
  }
  
  async getAllApprenant() {    
    try{
      const { data, error } = await this.supabase.from("Apprenant").select();
      console.log(data);
      return data;
    } catch(error){
      console.log(error);
      return [];
    }
  }


  async getAllCompetence(){
	try{
		const { data, error } = await this.supabase.from("Competence").select();
		console.log("competence",data);
		return data;
	  } catch(error){
		console.log(error);
		return [];
	  }
  }

  async getAllActivite(){
	try{
	  const { data, error } = await this.supabase.from("Activite").select();
	  console.log("activite",data);
	  return data;
	} catch(error){
	  console.log(error);
	  return [];
	}
  }

  async getCompentenceByIdApprenant(idApprenant: number){
	try{
	  const { data, error } = await this.supabase.from("apprenant_competence").select().eq("id",idApprenant);
	  console.log(data);
	  return data;
	} catch(error){
	  console.log(error);
	  return [];
	}
  }
}
