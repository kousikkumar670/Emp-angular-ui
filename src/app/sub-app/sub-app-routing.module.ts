import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubAppComponent } from "./sub-app/sub-app.component";

const routes: Routes = [
  {
  path:'',
  component:SubAppComponent
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SubAppRoutingModule { }
  