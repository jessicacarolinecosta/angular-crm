import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCheckboxModule, MatInput, MatInputModule, MatButtonToggleModule, MatChipsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { SliderComponent } from './modules/comum/slider/slider.component';
import { SelectCirclesComponent } from './modules/comum/select-circles/select-circles.component';
import { SelectToggleComponent } from './modules/comum/select-toggle/select-toggle.component';
import { MenuComponent } from './modules/comum/menu/menu.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { HeaderComponent } from './modules/comum/header/header.component';
import { LeadsFormComponent } from './modules/pages/leads/leads-form/leads-form.component';
import { BackButtonDirective } from './modules/comum/back-button/back-button.directive';
import { LeadsListComponent } from './modules/pages/leads/leads-list/leads-list.component';

registerLocaleData(ptBr);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SliderComponent,
    SelectCirclesComponent,
    SelectToggleComponent,
    MenuComponent,
    DashboardComponent,
    HeaderComponent,
    LeadsFormComponent,
    BackButtonDirective,
    LeadsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    Ng5SliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
