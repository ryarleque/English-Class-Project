import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ProgramacionComponent } from './programacion/programacion.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BienvenidaComponent },
  { path: 'programacion', component: ProgramacionComponent },
  { path:'**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ProgramacionComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }