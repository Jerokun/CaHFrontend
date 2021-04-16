import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyPageComponent } from './lobby-page/lobby.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyPageComponent },
  { path: '', redirectTo: '/lobby', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
