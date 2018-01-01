import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  // 定义并且初始化为空数组(已经赋值)
  messages: string[] = [];

  constructor() {
  }

  // add() a message to the cache, 添加一个元素到数组
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
