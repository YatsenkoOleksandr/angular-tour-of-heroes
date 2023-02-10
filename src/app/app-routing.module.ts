import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, },
  { path: 'dashboard', component: DashboardComponent, },

  // Parameterized route, :id - placeholder
  { path: 'detail/:id', component: HeroDetailComponent, },

  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', },
];

@NgModule({
  // configure routes for the whole application
  imports: [RouterModule.forRoot(routes)],

  // exports RouterModule to be available throughout the application.
  exports: [RouterModule]
})
export class AppRoutingModule { }