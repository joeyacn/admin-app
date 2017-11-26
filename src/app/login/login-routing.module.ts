import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainFrameComponent } from './login-main-frame/login-main-frame.component';

const LoginRoutes: Routes = [
  { path: '', component: LoginMainFrameComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule],

})
export class LoginRoutingModule {}
