import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component'
import { DetailsComponent } from './details/details.component'
import { EditComponent } from './edit/edit.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { PetsComponent } from './pets/pets.component'


const routes: Routes = [
  { path: 'pets', component: PetsComponent, },
    { path: 'pets/:id/edit', component: EditComponent },
    { path: 'pets/:id', component: DetailsComponent},
  
  { path: 'new', component: CreateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pets' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
