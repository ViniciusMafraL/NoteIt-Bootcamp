import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HalfCircleSpinnerModule } from 'angular-epic-spinners';
import { LogoComponent } from '../../components/logo/logo.component';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HalfCircleSpinnerModule,
  ],
  declarations: [LoginPage, LogoComponent],
  exports: [
    LogoComponent,
  ],
})
export class LoginPageModule {}
