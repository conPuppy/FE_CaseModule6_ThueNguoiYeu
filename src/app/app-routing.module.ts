
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './User/login/login.component';
import {ChangeInfoComponent} from "./change-info/change-info.component";
import {ChangeAvatarComponent} from "./change-avatar/change-avatar.component";
import {ChangeAppearanceComponent} from "./change-appearance/change-appearance.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ShowComponent} from "./show/show.component";
import {ShowtopviewComponent} from "./showtopview/showtopview.component";

import {SupplierComponent} from "./User/supplier/supplier.component";
import { HomeComponent } from './User/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShowProfileComponent } from './User/show-profile/show-profile.component';
import { HomeboyComponent } from './homeboy/homeboy.component';
import { HomegirlComponent } from './homegirl/homegirl.component';

const routes: Routes = [
  {path:"admin", component: HomeAdminComponent},
  {path:"show", component: ShowComponent},
  {path:"topview", component: ShowtopviewComponent},
  {path:"register", component: RegisterComponent},
  {path:"admin", component: HomeAdminComponent},
  {path:"login", component: LoginComponent},
  {path:"", component: HomeComponent},
  {path:"supplier", component: SupplierComponent},
  {path:"changeInfo", component: ChangeInfoComponent},
  {path:"changeAvatar", component: ChangeAvatarComponent},
  {path:"changeAppearance", component: ChangeAppearanceComponent},
  {path:"changePassword", component: ChangePasswordComponent},
  {path:"showProfile", component: ShowProfileComponent},
  {path:"homeBoy", component: HomeboyComponent},
  {path:"homeGirl", component: HomegirlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
