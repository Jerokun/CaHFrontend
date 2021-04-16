import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyPageComponent } from './lobby-page/lobby.page';

const routes: Routes = [
  { path: 'lobby', component: LobbyPageComponent },
  { path: '', redirectTo: '/lobby', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
