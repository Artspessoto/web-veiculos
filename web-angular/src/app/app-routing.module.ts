import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthorizationGuard } from './auth/authorization.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthorizationGuard] },
  {
    path: 'veiculo',
    loadChildren: () =>
      import('./components/veiculo/veiculo.module').then(
        (module) => module.VeiculoModule
      ),
      canActivate: [AuthorizationGuard]
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
