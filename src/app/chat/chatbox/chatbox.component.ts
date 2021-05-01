import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/dto/ChatMessage';
import { ChatService } from 'src/app/shared/chat/chat.service';

@Component({
	selector: 'app-chatbox',
	templateUrl: './chatbox.component.html',
	styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit {
	constructor(private chatService: ChatService) {}

	chatMessage: ChatMessage = new ChatMessage();
	chatMessages: ChatMessage[] = [];

	ngOnInit(): void {
		this.chatService.retrieveChatMessage().subscribe((chatMessage: ChatMessage) => {
      console.log(chatMessage);
    }); // calls the service method to get the new messages sent
	}

	send(): void {
    console.log("ChatboxComponent > send()");
		this.chatService.broadcastMessage(this.chatMessage); // Send the message via a service
	}
}
