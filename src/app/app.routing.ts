import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocalFoodComponent } from './local-food/local-food.component';
import { TrailsComponent } from './trails/trails.component';
import { FictionComponent } from './fiction/fiction.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'local-food',
    component: LocalFoodComponent
  },
  {
    path: 'trails',
    component: TrailsComponent
  },
  {
    path: 'fiction',
    component: FictionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
