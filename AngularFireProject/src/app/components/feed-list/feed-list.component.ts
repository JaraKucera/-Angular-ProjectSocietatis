import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../../class/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})

export class FeedListComponent implements OnInit {

  posts: Observable<Posts[]>

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this);
  }

}
