import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { LoginMainFrameComponent } from './login-main-frame/login-main-frame.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../services/login-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginMainFrameComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  providers: [
    LoginService,
  ],
  exports: [
  ]
})
export class LoginModule { }
