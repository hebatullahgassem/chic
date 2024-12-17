import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasualComponent } from './casual/casual.component';
import { FormalComponent } from './formal/formal.component';
import { ActivewearComponent } from './activewear/activewear.component';
import { SoireeComponent } from './soiree/soiree.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'casual', component: CasualComponent },
  { path: 'formal', component: FormalComponent },
  { path: 'active', component: ActivewearComponent },
  { path: 'soiree', component: SoireeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
