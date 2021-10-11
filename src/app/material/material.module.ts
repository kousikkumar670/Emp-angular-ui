import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
    
  ],
 exports:[
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule
 ]
})
export class MaterialModule { }
