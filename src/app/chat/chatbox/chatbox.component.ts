import { Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/dto/MessageDto';
import { ChatService } from 'src/app/shared/chat/chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  ngOnInit(): void {
    this.chatService
      .retrieveMappedObject()
      .subscribe((receivedObj: MessageDto) => {
        this.addToInbox(receivedObj);
      }); // calls the service method to get the new messages sent
  }

  send(): void {
    if (this.msgDto) {
      if (this.msgDto.user.length === 0 || this.msgDto.user.length === 0) {
        window.alert('Both fields are required.');
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto); // Send the message via a service
      }
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);
  }
}
