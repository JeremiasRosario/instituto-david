import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full',
    },
    {
        path: 'form',
        loadChildren: () => import('./features/form/form.routes')
    },
    {
        path: '**',
        redirectTo: 'form',
    },
];
