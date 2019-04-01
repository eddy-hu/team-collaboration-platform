import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  
  { path:'project', loadChildren:'./project/project.module#ProjectModule' },
    { path:'login', loadChildren:'./login/login.module#LoginModule' },
  
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [SharedModule,RouterModule.forRoot(routes),  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
