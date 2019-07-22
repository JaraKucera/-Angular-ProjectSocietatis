import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PostcreateComponent } from './components/postcreate/postcreate.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/postdetail/:id', component: PostdetailComponent },
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'createpost', component: PostcreateComponent},
  { path: 'chats/:id', component: ChatComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
