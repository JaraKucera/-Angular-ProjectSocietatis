import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  title: string = 'Title';
  image: string = null;
  content: string= 'content';

  constructor(public auth: AuthService,private postService: PostsService) { }

  ngOnInit() {
  }

  createPost(){

    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data);

  }
}
