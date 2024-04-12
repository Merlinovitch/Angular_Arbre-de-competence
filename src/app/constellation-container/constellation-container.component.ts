import { Component, HostListener, Renderer2, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcConstellationComponent } from './pc-constellation/pc-constellation.component';
import { LockConstellationComponent } from './lock-constellation/lock-constellation.component';
import { FuseeConstellationComponent } from './fusee-constellation/fusee-constellation.component';
import { StatComponent } from './stat/stat.component';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StarInfoComponent } from './star-info/star-info.component';

@Component({
  selector: 'app-constellation-container',
  standalone: true,
  imports: [CommonModule, PcConstellationComponent,LockConstellationComponent,FuseeConstellationComponent,StatComponent,StarInfoComponent],
  templateUrl: './constellation-container.component.html',
  styleUrls: ['./constellation-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConstellationContainerComponent {

  idComp: string = '';
  tooltipContent = {
    Competence : {
      title: "Empty"
    }
  };
  data: any;
  soundsEnabled: any;
  warpSound: any;
  idApprenant: string = "";
  
  constructor(private router: Router, private dataService:DataServiceService, private route: ActivatedRoute,private renderer: Renderer2, )
  {
    this.warpSound = document.createElement('audio');
    this.warpSound.setAttribute('src', "../../assets/sounds/warp.mp3");
    this.warpSound.setAttribute('preload', "auto");
    this.soundsEnabled = document.querySelector(".mute-volume");
    this.route.params.subscribe( parms=> this.idApprenant = parms["id"]);
  }

  async ngOnInit(): Promise<void> {
    this.data="";
    try {
      this.data = await this.dataService.getCompentenceByIdApprenant(this.idApprenant);
    } catch (e) {
      console.error('error', e);
    }
    console.log(this.data);
    
  }
  @HostListener('window:click', ['$event']) onMouseClick(e: any)
  {
    switch (e.target.className)
    {
      case "back-button":
        const loadingScreen: any = document.querySelector(".container-loader");

        if (this.soundsEnabled.classList.contains("enable-sounds"))
          {
            setTimeout(() => {
              this.warpSound.play();
            }, 1000);
          }

        loadingScreen.classList.toggle("loader-visible");
        setTimeout(() => {
          loadingScreen.classList.toggle("loader-visible");
        }, 2000);

        setTimeout(() => {
          this.router.navigate([`/`]);
        }, 2000);

      break;

      default:

      break;
    }
  }

  public showStar({string,event} :any): void{
    console.log('id parent',string);
    const tooltip = document.querySelector('app-star-info');
    if (tooltip) {
      console.log(event);
      
      this.renderer.setStyle(tooltip, 'display', 'block');
      this.renderer.setStyle(tooltip, 'position', 'absolute');
      this.renderer.setStyle(tooltip, 'left', event.clientX + 20 + 'px');
      this.renderer.setStyle(tooltip, 'top', event.clientY + 'px');
      
      const row = this.data.find((e :any) => e.Competence.id == string)
      console.log('row in const',row);
      
      if (row) {
        this.tooltipContent = row
        console.log('tooltipContent',this.tooltipContent);
        
      }
  }
}

  public hideStar(leaveStar: boolean){
    const tooltip = document.querySelector('app-star-info');
    if (tooltip) {
      this.renderer.setStyle(tooltip, 'display', 'none');
      console.log('goodbye');
    }
    
  }
}