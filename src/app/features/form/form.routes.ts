import { Routes } from '@angular/router';
import { FormLayoutComponent } from '../../layouts/form-layout/form-layout.component';
import { FormPageComponent } from '../../page/form-page/form-page.component';

export const FormRoutes: Routes = [
    {
        path: '',
        component: FormLayoutComponent,
        children: [
            { path: '', component: FormPageComponent },
            { path: '**', redirectTo: '' }
        ]
    },
];

export default FormRoutes;