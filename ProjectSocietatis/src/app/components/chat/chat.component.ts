import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat$: Observable<any>;
  newMsg: string;

  constructor(public cs: ChatService, private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    const chatId = this.route.snapshot.paramMap.get('id');
    const source = this.cs.get(chatId);
    this.chat$ = this.cs.joinUsers(source);
  }

  submit(chatId){
    console.log(this.newMsg);
    this.cs.sendMessage(chatId, this.newMsg);
    console.log(this.newMsg);
    this.newMsg = '';
  }
  trackByCreated(i,msg){
    return msg.createdAt;
  }

}
