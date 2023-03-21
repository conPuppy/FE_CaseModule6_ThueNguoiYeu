import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionConnectService{

  private stompClient: any;
  disabled = true;
  greetings: string[] = [];
  constructor() { }

  connect( idAccountSend: number) {
    // đường dẫn đến server
    const socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      // là chờ xèm thằng server gửi về.
      _this.stompClient.subscribe('/topic/public/'+ idAccountSend, function (hello: any) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });

    });
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  showGreeting(message: any) {
    this.greetings.push(message);
  }
}
