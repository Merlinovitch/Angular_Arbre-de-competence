import { Routes } from '@angular/router';
import { GalaxyComponent } from './homepage-container/galaxy/galaxy.component';
import { ConstellationContainerComponent } from './constellation-container/constellation-container.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';

export const routes: Routes = [
  { component: HomepageContainerComponent, path:''},
  { component: ConstellationContainerComponent, path: 'constellation/:id'},
];
