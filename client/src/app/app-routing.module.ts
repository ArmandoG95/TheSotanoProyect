import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidaListComponent } from './components/bebida-list/bebida-list.component';
import { ComidaListComponent } from './components/comida-list/comida-list.component';
import { PostreListComponent } from './components/postre-list/postre-list.component';
import { SnackListComponent } from './components/snack-list/snack-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/bebidas',
    pathMatch:'full',
  },
  {
    path:'bebidas',
    component:BebidaListComponent
  }
  ,{
    path:'',
    redirectTo:'/comidas',
    pathMatch:'full',
  },
  {
    path:'comidas',
    component:ComidaListComponent
  }
  ,{
    path:'',
    redirectTo:'/postres',
    pathMatch:'full',
  },
  {
    path:'postres',
    component:PostreListComponent
  }
  ,{
    path:'',
    redirectTo:'/snacks',
    pathMatch:'full',
  },
  {
    path:'snacks',
    component:SnackListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
