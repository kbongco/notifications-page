import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationstitleComponent } from 'src/Components/notificationstitle/notificationstitle.component';
import { NotificationContainerComponent } from '../Components/notificationstitle/notification-container/notification-container.component';
import { LargeNotificationContainerComponent } from 'src/Components/notificationstitle/large-notification-container/large-notification-container.component';
import { NotificationWithPictureComponent } from '../Components/notification-with-picture/notification-with-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationstitleComponent,
    NotificationContainerComponent,
    LargeNotificationContainerComponent,
    NotificationWithPictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
