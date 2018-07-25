import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { LogotypeComponent } from './logotype/logotype.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LogotypeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
