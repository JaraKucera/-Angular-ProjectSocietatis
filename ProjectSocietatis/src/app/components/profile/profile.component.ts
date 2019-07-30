import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userRef: AngularFirestoreDocument<any>;
  user1: Observable<any[]>;
  //data: [any];

  constructor(private route: ActivatedRoute,public auth: AuthService, public afs:AngularFirestore) { }

  ngOnInit() {
    //this.user1 = this.getProfile();
    //console.log(this.user1);
    this.userRef = this.afs.collection('users').doc(this.route.snapshot.paramMap.get('id'));
    this.user1 = this.userRef.valueChanges();
   // this.user1.subscribe(data =>
      //this.data = data);
    //);
      //console.log(this.data);
  }

  getProfile(){
    const id = this.route.snapshot.paramMap.get('id');
   return this.auth.getUserById(id).valueChanges();
  }
}
