import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpclient } from "./httpservice/httpclient.services";
import { AppService } from "./appService/app.service";
import { HomeComponent } from './home/home.component';
import { StorageSevice } from "./appService/storage.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { authenticate } from "./appService/authenticate.service";
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MySharedService } from "./appService/MySharedService.service";
import { Filterpipe} from "./model/filter.pipe";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Filterpipe
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [httpclient,AppService,StorageSevice,authenticate],
  bootstrap: [AppComponent]
})
export class AppModule { }
