import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LogotypeComponent } from './logotype/logotype.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: ':username',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LogotypeComponent,
    SearchInputComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
