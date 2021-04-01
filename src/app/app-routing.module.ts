import { DetalhesReceitaComponent } from './pages/detalhes-receita/detalhes-receita.component';
import { ListaReceitasComponent } from './pages/lista-receitas/lista-receitas.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "lista-receitas",
    component: ListaReceitasComponent
  },
  {
    path: "detalhes-receita/:id",
    component: DetalhesReceitaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
