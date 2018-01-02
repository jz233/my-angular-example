import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

// the router will match that URL to path: 'heroes' and display the HeroesComponent
const routes: Routes = [
  // default route
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];


@NgModule({
  // initialize the router and start it listening for browser location changes,定义该routes为根Routing节点
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
