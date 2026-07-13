import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { NotFound } from './feats/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Pablo Sborz | Portfólio' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  { path: 'sobre', redirectTo: '', pathMatch: 'full' },
  { path: 'sobremim', redirectTo: '', pathMatch: 'full' },
  { path: 'projetos', redirectTo: '', pathMatch: 'full' },
  { path: 'processo', redirectTo: '', pathMatch: 'full' },
  { path: 'contato', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFound, title: 'Página não encontrada | Pablo Sborz' },
];
