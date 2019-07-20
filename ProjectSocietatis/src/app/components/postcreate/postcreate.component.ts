import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss']
})
export class PostcreateComponent implements OnInit {
  
  title: string;
  image: string = null;
  content: string;
  buttonText: string ="Create Post";
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(public auth: AuthService, private postService: PostsService, private storage: AngularFireStorage) { }

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
    this.title = '';
    this.content='';
    this.buttonText = 'Post Created!';
    setTimeout(()=> this.buttonText="Create Post",3000);
  }

  uploadImage(event){
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    //console.log(event.target.files);
    const task = this.storage.upload(path,file);
    const ref =this.storage.ref(path);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(()=>{
        this.downloadURL = ref.getDownloadURL();
        this.downloadURL.subscribe(url => (this.image = url));
      })
    )
    .subscribe()
  }
}
