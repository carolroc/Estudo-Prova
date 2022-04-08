import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListComponent },
  { path: 'lista/:id', component: ListItemComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ListComponent,
    ListItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
