import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AllComponent} from './components/all/all.component'
import {PhotoFormComponent} from './components/photo-form/photo-form.component'
import {PhotoPreviewComponent} from './components/photo-preview/photo-preview.component'

const routes: Routes = [
  {
    path:'photos',
    component: AllComponent
  },
  {
    path:'new_photo',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
