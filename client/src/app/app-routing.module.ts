import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidaListComponent } from './components/bebida-list/bebida-list.component';
import { ComidaListComponent } from './components/comida-list/comida-list.component';
import { PostreListComponent } from './components/postre-list/postre-list.component';
import { SnackListComponent } from './components/snack-list/snack-list.component';
import { BebidaFormComponent } from './components/bebida-form/bebida-form.component';
import { OrdenFormComponent } from './components/orden-form/orden-form.component';
import { ComidaFormComponent } from './components/comida-form/comida-form.component';
import { PostreFormComponent } from './components/postre-form/postre-form.component';
import { SnackFormComponent } from './components/snack-form/snack-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/bebidas',
    pathMatch:'full',
  },
  {
    path:'bebidas',
    component:BebidaListComponent
  },
  {
    path:'bebidas/add',
    component:BebidaFormComponent
  }
  ,{
    path:'',
    redirectTo:'/comidas',
    pathMatch:'full',
  },
  {
    path:'comidas',
    component:ComidaListComponent
  },
  {
    path:'comidas/add',
    component:ComidaFormComponent
  }
  ,{
    path:'',
    redirectTo:'/postres',
    pathMatch:'full',
  },
  {
    path:'postres',
    component:PostreListComponent
  },
  {
    path:'postres/add',
    component:PostreFormComponent
  }
  ,{
    path:'',
    redirectTo:'/snacks',
    pathMatch:'full',
  },
  {
    path:'snacks',
    component:SnackListComponent
  },
  {
    path:'snacks/add',
    component:SnackFormComponent
  }
  ,{
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
