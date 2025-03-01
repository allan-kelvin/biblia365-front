import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { AreaEstudanteComponent } from './area-estudante/area-estudante.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'area-estudante', component: AreaEstudanteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
