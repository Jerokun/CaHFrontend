import { Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr'; // import signalR
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../dto/ChatMessage';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
    .withUrl(environment.baseUrl + 'chatsocket') // mapping to the chathub as in startup.cs
    .configureLogging(signalR.LogLevel.Information)
    .build();
  readonly POST_URL = environment.baseUrl + 'api/chat/send';

  private receivedChatMessage: ChatMessage = new ChatMessage();
  private sharedChatMessage = new Subject<ChatMessage>();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    this.connection.on('ReceiveOne', (user, message) => {
      console.log('CONNECTION ON user/message??' + user + message)
      let receivedChatMessage = new ChatMessage();
      receivedChatMessage.message = message;
      receivedChatMessage.userName = user;
      this.sharedChatMessage.next(this.receivedChatMessage);
    });
    this.start();
  }

  // Strart the connection
  public async start() {
    try {
      await this.connection.start();
      console.log('connected');
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }

  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  public broadcastMessage(chatMess: ChatMessage) {
    console.log('broadcastMessage > chatMess' + chatMess);
    this.http
      .post(this.POST_URL, chatMess)
      .subscribe((data) => console.log(data));
    this.connection.invoke("SendMessage1", chatMess.userName, chatMess.message).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
  }

  public retrieveChatMessage(): Observable<ChatMessage> {
    return this.sharedChatMessage.asObservable();
  }
}
