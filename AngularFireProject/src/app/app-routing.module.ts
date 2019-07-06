import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
