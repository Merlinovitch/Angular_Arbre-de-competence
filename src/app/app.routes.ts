import { Routes } from '@angular/router';
import { GalaxyComponent } from './homepage-container/galaxy/galaxy.component';
import { ConstellationContainerComponent } from './constellation-container/constellation-container.component';

export const routes: Routes = [
  { component: GalaxyComponent, path: 'galaxy' },
  { component: ConstellationContainerComponent, path: 'constellation'},
];
