import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'home', component: Home },
  { path: 'contato', component: Contato }
];
