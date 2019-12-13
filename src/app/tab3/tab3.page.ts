import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../servicios/chats.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  constructor(public chatsservice: ChatsService) { }
/*
implements OnInit
  ngOnInit() {
    this.chatsservice.getChatsRooms().subscribe( chats => {
      console.log(chats);
    });
*/
}
