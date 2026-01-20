import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/admin-menu/admin-menu.page.component'),
    children: [
      {
        path: 'animes',
        loadComponent: () =>
          import('./components/anime-management/anime-management.page.component'),
      },
    ],
  },
];

export default adminRoutes;
