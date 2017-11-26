import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserAdminComponent } from './user/userAdmin/userAdmin.component';
import { UserInfoComponent } from './user/userInfo/userInfo.component';
import { RoleComponent } from './role/role.component';

const HomeRoutes: Routes = [
  { path: '', component: HomeComponent,
    children: [
    { path: 'userInfo', component: UserInfoComponent},
    { path: 'userAdmin', component: UserAdminComponent},
    { path: 'role', component: RoleComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule],

})
export class HomeRoutingModule {}
