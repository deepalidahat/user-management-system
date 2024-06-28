import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:LogInComponent},
  {path:"Userlist",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
