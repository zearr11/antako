import { Routes } from '@angular/router';

export const aboutRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/about-main/about-main.page.component'),
  },
  {
    path: 'terminos-y-condiciones',
    loadComponent: () =>
      import('./components/terms-and-conditions/terms-and-conditions.page.component'),
  },
  {
    path: 'politica-de-privacidad',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy.page.component'),
  },
];

export default aboutRoutes;
