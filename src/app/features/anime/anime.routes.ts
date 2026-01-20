import { Routes } from '@angular/router';

export const animeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/catalog/catalog.page.component'),
  },
  {
    path: ':anime',
    loadComponent: () => import('./components/catalog/catalog.page.component'),
  },
  {
    path: ':anime/:chapter',
    loadComponent: () => import('./components/catalog/catalog.page.component'),
  },
];

export default animeRoutes;
