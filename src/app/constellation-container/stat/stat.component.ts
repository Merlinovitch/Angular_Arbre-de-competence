import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  apprenantData: any;
  competencesData: any;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) {}
 
  calculateAge(birthdate: string): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.dataService.getApprenantById(id)
          .then(apprenantData => {
            this.apprenantData = apprenantData;
          })
          .catch(error => {
            console.error("Une erreur s'est produite lors du chargement des données de l'apprenant :", error);
          });

        this.dataService.getCompentenceByIdApprenant(id)
          .then(competencesData => {
            this.competencesData = competencesData;
          })
          .catch(error => {
            console.error("Une erreur s'est produite lors du chargement des données de compétences :", error);
          });
      }
    });
  }
}