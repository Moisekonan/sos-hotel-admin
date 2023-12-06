import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { messageRoutingModule } from './message-routing.module';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    messageRoutingModule
  ]
})
export class MessageModule { }
