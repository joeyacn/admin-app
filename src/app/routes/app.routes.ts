import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { LoginMainFrameComponent } from '../login/login-main-frame/login-main-frame.component';
import { HomeComponent } from '../home/home.component';

const appRouters : Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginMainFrameComponent},
    {path: 'home', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);