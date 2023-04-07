import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BebidaFormComponent } from './components/bebida-form/bebida-form.component';
import { BebidaListComponent } from './components/bebida-list/bebida-list.component';
import { ComidaFormComponent } from './components/comida-form/comida-form.component';
import { ComidaListComponent } from './components/comida-list/comida-list.component';
import { PostreFormComponent } from './components/postre-form/postre-form.component';
import { PostreListComponent } from './components/postre-list/postre-list.component';
import { SnackFormComponent } from './components/snack-form/snack-form.component';
import { SnackListComponent } from './components/snack-list/snack-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { OrdenFormComponent } from './components/orden-form/orden-form.component';
import { OrdenListComponent } from './components/orden-list/orden-list.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { PagoListComponent } from './components/pago-list/pago-list.component';
import { TipopagoFormComponent } from './components/tipopago-form/tipopago-form.component';
import { TipopagoListComponent } from './components/tipopago-list/tipopago-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BebeidasService } from './services/bebeidas.service';
import { ComidasService } from './services/comidas.service';
import { PostresService } from './services/postres.service';
import { SnacksService } from './services/snacks.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BebidaFormComponent,
    BebidaListComponent,
    ComidaFormComponent,
    ComidaListComponent,
    PostreFormComponent,
    PostreListComponent,
    SnackFormComponent,
    SnackListComponent,
    ClienteFormComponent,
    ClienteListComponent,
    OrdenFormComponent,
    OrdenListComponent,
    PagoFormComponent,
    PagoListComponent,
    TipopagoFormComponent,
    TipopagoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BebeidasService, ComidasService, PostresService, SnacksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
