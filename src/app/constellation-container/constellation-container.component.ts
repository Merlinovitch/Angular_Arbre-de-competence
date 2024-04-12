import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcConstellationComponent } from './pc-constellation/pc-constellation.component';
import { LockConstellationComponent } from './lock-constellation/lock-constellation.component';
import { FuseeConstellationComponent } from './fusee-constellation/fusee-constellation.component';
import { StatComponent } from './stat/stat.component';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-constellation-container',
  standalone: true,
  imports: [CommonModule, PcConstellationComponent,LockConstellationComponent,FuseeConstellationComponent,StatComponent],
  templateUrl: './constellation-container.component.html',
  styleUrls: ['./constellation-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConstellationContainerComponent {

  data: any;
  soundsEnabled: any;
  warpSound: any;
  
  constructor(private router: Router)
  {
    this.warpSound = document.createElement('audio');
    this.warpSound.setAttribute('src', "../../assets/sounds/warp.mp3");
    this.warpSound.setAttribute('preload', "auto");
    this.soundsEnabled = document.querySelector(".mute-volume");
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

}