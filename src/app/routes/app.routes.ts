import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';

import { LoginMainFrameComponent } from '../login/login-main-frame/login-main-frame.component';
import { HomeComponent } from '../home/home.component';
import { RoleComponent } from './../home/content/role/role.component';
import { UserInfoComponent } from './../home/content/userInfo/userInfo.component';
import { UserAdminComponent } from './../home/content/userAdmin/userAdmin.component';

const appRouters: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginMainFrameComponent},
    {path: 'home', component: HomeComponent,
      children: [
        { path: 'userInfo', component: UserInfoComponent},
        { path: 'userAdmin', component: UserAdminComponent},
        { path: 'roleAdmin', component: RoleComponent},
      ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
