import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/models/posts';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

  post: Posts;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data=>
      this.post = data
    );
  }
}
