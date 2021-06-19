import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFilesComponent } from './my-files/my-files.component';
import { SharedWithMeComponent } from './shared-with-me/shared-with-me.component';
import { StaredComponent } from './stared/stared.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-files',pathMatch:'full' },
  { path: 'my-files', component: MyFilesComponent },
  { path: 'shared-with-me', component: SharedWithMeComponent },
  { path: 'stared', component: StaredComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
