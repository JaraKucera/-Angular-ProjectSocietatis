import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  createPost(){

    const data = {
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    }

  }
}
