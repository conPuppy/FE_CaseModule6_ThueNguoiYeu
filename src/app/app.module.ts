import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeAppearanceComponent } from './change-appearance/change-appearance.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { ShowComponent } from './show/show.component';
import { ShowprofileproviderComponent } from './showprofileprovider/showprofileprovider.component';
import { ShowtopviewComponent } from './showtopview/showtopview.component';
import { HomeComponent } from './User/home/home.component';
import { LoginComponent } from './User/login/login.component';
import { ShowProfileComponent } from './User/show-profile/show-profile.component';
import { SupplierComponent } from './User/supplier/supplier.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import { HomeboyComponent } from './homeboy/homeboy.component';
import { HomegirlComponent } from './homegirl/homegirl.component';

import { ShowAllBillComponent } from './admin/show-all-bill/show-all-bill.component';
import { ProviderShowBillComponent } from './User/provider-show-bill/provider-show-bill.component';

import { CreateProviderComponent } from './create-provider/create-provider.component';
import { ProfileOfProviderComponent } from './Provider/profile-of-provider/profile-of-provider.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        ShowComponent,
        ShowtopviewComponent,
        ShowprofileproviderComponent,
        HomeAdminComponent,
        ShowProfileComponent,
        LoginComponent,
        SupplierComponent,
        ChangeInfoComponent,
        ChangeAvatarComponent,
        ChangeAppearanceComponent,
        ChangePasswordComponent,
        HomeboyComponent,
        HomegirlComponent,
        ShowAllBillComponent,
        CreateProviderComponent,
        ShowAllBillComponent,
        ProviderShowBillComponent,
        ProfileOfProviderComponent

    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
