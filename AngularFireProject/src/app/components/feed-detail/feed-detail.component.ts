import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/class/posts';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})

export class FeedDetailComponent implements OnInit {

  post: Posts;
  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.getPost();
    console.log(this);
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data => this.post = data);

  }
}
