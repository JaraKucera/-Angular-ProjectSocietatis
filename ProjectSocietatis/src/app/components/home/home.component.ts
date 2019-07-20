import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Observable<Posts[]>;

  constructor(public auth: AuthService, private psService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.psService.getPosts();
  }
  delete(id: string){
    this.psService.delete(id);
  }
}
