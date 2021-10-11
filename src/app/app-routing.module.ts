import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [{
  path:'login',
  component:LoginComponent
},
{
  path: 'app',
  loadChildren: () => import('./sub-app/sub-app.module').then(m => m.SubAppModule)
},
{
path:'',
redirectTo:"login",
pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
