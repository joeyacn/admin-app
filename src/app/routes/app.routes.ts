import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';

import { LoginMainFrameComponent } from '../login/login-main-frame/login-main-frame.component';
import { HomeComponent } from '../home/home.component';
import { RoleComponent } from './../home/content/role/role.component';

const appRouters: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginMainFrameComponent},
    {path: 'home', component: HomeComponent,
      children: [
        { path: 'role', component: RoleComponent}
      ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
