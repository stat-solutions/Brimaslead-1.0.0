import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FrontDeskModule } from './front-desk/front-desk.module';
import { MatIconModule } from '@angular/material/icon';
import { MenudropdownDirective } from './directives/menudropdown.directive';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenudropdownDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FrontDeskModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    BsDatepickerModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
