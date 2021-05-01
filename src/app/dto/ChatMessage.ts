import { IChatMessage } from "./IChatMessage";

export class ChatMessage implements IChatMessage {
  public message: string;
  public date: Date;
  public userName: string;
}
