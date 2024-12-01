import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveComponent } from './blog/save/save.component';
import { UpdateComponent } from './blog/update/update.component';
import { DeleteComponent } from './blog/delete/delete.component';
import { ViewComponent } from './blog/view/view.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HomeComponent } from './blog/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
