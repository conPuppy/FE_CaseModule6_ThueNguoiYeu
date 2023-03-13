import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

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

// @ts-ignore
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

    ],
    imports: [
        BrowserModule,
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
