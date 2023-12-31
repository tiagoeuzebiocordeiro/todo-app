import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: 'finalizados',
    component: FinalizadosComponent
  },
  {
    path: '',
    component: ReadAllComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
