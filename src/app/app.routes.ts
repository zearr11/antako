import { Routes } from '@angular/router';
import { MainMenuPageComponent } from './features/main/components/main-menu/main-menu.page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMenuPageComponent,
  },
  {
    path: 'animes',
    loadChildren: () => import('./features/anime/anime.routes'),
  },
  {
    path: 'horarios',
    loadComponent: () =>
      import('./features/other/components/schedule/schedule.page.component'),
  },
  {
    path: 'solicitud',
    loadComponent: () =>
      import('./features/other/components/anime-request/anime-request.page.component'),
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./features/about/about.routes'),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes')
  }
];
