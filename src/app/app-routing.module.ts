import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRouters: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
