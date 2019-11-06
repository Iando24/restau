import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'detail-plat', loadChildren: './detail-plat/detail-plat.module#DetailPlatPageModule' },
  { path: 'detail-plat/:id', loadChildren: './detail-plat/detail-plat.module#DetailPlatPageModule' },
  { path: 'validation', loadChildren: './validation/validation.module#ValidationPageModule' },
  { path: 'commande', loadChildren: './commande/commande.module#CommandePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
