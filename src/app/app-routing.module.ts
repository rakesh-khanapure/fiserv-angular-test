import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsInformationComponent } from './dogs-information/dogs-information.component';

const routes: Routes = [
  { path: '', redirectTo: '/dog-information', pathMatch: 'full' },
  {path: 'dog-information', component: DogsInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
