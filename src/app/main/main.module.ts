import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule
];


@NgModule({
  declarations: [
    LogInComponent,
    HomeComponent,
    DialogDeleteComponent,
    DialogAddUserComponent
  ],
  exports:[],
  imports: [
    CommonModule,
    MainRoutingModule,
    modules,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
