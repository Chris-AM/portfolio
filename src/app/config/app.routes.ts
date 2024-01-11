import { Routes } from '@angular/router';
import { HomeComponent } from '../presentation/pages/home/home.component';
import { AboutComponent } from '../presentation/pages/about/about.component';
import { ProjectsComponent } from '../presentation/pages/projects/projects.component';
import { ArticlesComponent } from '../presentation/pages/articles/articles.component';
import { ContactComponent } from '../presentation/pages/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
