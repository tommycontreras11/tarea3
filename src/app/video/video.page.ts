import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  vid = "https://www.youtube.com/embed/Zmq6VLOHiY0";
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

}
