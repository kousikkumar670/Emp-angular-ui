import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAppComponent } from './sub-app/sub-app.component';
import { SubAppRoutingModule } from './sub-app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SubAppComponent,
    TopBarComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SubAppRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SubAppModule { }
