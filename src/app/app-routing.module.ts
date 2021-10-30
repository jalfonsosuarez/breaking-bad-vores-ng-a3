import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import( './@pages/characters/characters.module' ).then( (m) => m.CharactersModule) },
  { path: 'votes', loadChildren: () => import( './@pages/votes/votes.module' ).then( (m) => m.VotesModule) },
  { path: 'details/:id', loadChildren: () => import( './@pages/details/details.module' ).then( (m) => m.DetailsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
