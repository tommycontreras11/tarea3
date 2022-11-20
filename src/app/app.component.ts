import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'person' },
    { title: 'Calculator', url: '/calculator', icon: 'calculator' },
    { title: 'Translator', url: '/translator', icon: 'repeat' },
    { title: 'Times table', url: '/times-table', icon: 'clipboard' },
    { title: 'Video', url: '/video', icon: 'film' }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
