import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import { FoumsLayoutComponent } from './Layouts/foums-layout/foums-layout.component';
import { GamesLayoutComponent } from './Layouts/games-layout/games-layout.component';
import { HomePageLayoutComponent } from './Layouts/home-page-layout/home-page-layout.component';
import { LeaderboardLayoutComponent } from './Layouts/leaderboard-layout/leaderboard-layout.component';
import { LogInLayoutComponent } from './Layouts/log-in-layout/log-in-layout.component';

const routes: Routes = [{
  path: '',
  component: HomePageLayoutComponent
 },
 {
  path: 'HomePage',
  component: HomePageLayoutComponent
 },
 {
  path: 'gamesLayout',
 component: GamesLayoutComponent
},
{
  path: 'forumsLayout',
  component: FoumsLayoutComponent
 },
 {
  path: 'leaderboardLayout',
  component: LeaderboardLayoutComponent
 },
 {
  path: 'LogInLayout',
  component: LogInLayoutComponent
 },
 {
  path: 'auth',
  component: AuthComponent
 },
 {
 path: 'admin',
 component: AddProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
