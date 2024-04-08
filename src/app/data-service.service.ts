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
  
  getAllApprenant() {
	return new Promise((resolve, reject) => {
	  this.supabase.from("Apprenant").select()
		.then(({ data, error }) => {
		  if (error) {
			console.log(error);
			reject(error);
		  } else {
			console.log(data);
			resolve(data);
		  }
		})
	});
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
