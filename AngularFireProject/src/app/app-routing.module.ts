import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { AuthGuard } from './services/auth.guard';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'feed-list', component: FeedListComponent },
  { path: 'feed-list/feed-detail/:id', component: FeedDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
