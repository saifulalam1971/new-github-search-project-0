import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'searchpage', pathMatch: 'full' },
  { path: 'searchpage', component: SearchpageComponent },
  { path: 'profile', component: ProfileComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
