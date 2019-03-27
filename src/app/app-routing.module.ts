import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path:'login', loadChildren:'./login/login.module#LoginModule' }
];

@NgModule({
  imports: [SharedModule,RouterModule.forRoot(routes),  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
