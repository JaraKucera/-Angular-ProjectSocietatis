import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Posts } from '../class/posts';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsCollection: AngularFirestoreCollection<Posts>;
  postDoc: AngularFirestoreDocument<Posts>;

  constructor(private afs: AngularFirestore) { 
    this.postsCollection= this.afs.collection('posts', ref=>
    ref.orderBy('published', 'desc'));
  }

  getPosts(){
    return this.postsCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Posts
        const id = a.payload.doc.id
        return{id,...data};
      })
    }));
  }

  getPostData(id: string){
    this.postDoc= this.afs.doc<Posts>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }
}
