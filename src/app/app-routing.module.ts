import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  
    { path:'login', loadChildren:'./login/login.module#LoginModule' },
    { path:'project', loadChildren:'./project/project.module#ProjectModule' },
    { path:'task', loadChildren:'./task/task.module#TaskModule' },
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
