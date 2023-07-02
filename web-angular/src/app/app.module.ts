import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';    
import { HomeComponent } from './components/home/home.component';
import { AuthorizationGuard } from './auth/authorization.guard';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LoginModule],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent],
})

export class AppModule {}
