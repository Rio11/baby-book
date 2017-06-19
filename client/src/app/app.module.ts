import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';
import { SharedModule } from "shared/shared.module";

import { AlertComponent } from '../shared/directives/index';
import { AuthGuard } from '../shared/guards/index';
import { AlertService, AuthenticationService, UserService } from '../shared/services/index';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Template
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MenuLeftComponent } from '../shared/components/menu-left/menu-left.component';
import { DashboardsAlpha } from "../shared/components/dashboards/alpha.page";
import { TopBarComponent } from "../shared/components/top-bar/top-bar.component";
import { MenuRightComponent } from "../shared/components/menu-right/menu-right.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent,
        FooterComponent,
        MenuLeftComponent,
        DashboardsAlpha,
        TopBarComponent,
        MenuRightComponent
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }