import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveComponent } from './blog/save/save.component';
import { ViewComponent } from './blog/view/view.component';
import { DeleteComponent } from './blog/delete/delete.component';
import { UpdateComponent } from './blog/update/update.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './blog/home/home.component';
import { LoginComponent } from './blog/login/login.component';

const routes: Routes = [
  { path: 'save', component: SaveComponent },
  { path: 'view', component: ViewComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }

]; 

/*const routes: Routes = [
  {
    path: '/',
    component: HomeComponent,
    children: [
      { path: 'save', component: SaveComponent },
      { path: 'view', component: ViewComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'update', component: UpdateComponent }
    ],
  }
]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
