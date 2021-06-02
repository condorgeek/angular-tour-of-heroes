import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  // @ts-ignore
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  videoSource: string = 'https://vjs.zencdn.net/v/oceans.mp4';
  videoPoster = '/assets/video-opener.png';

  constructor() {}

  ngOnInit(): void {}

  toggleVideo(event?: any) {
    this.videoplayer.nativeElement.play();
  }

  skip(value: any) {
    let video: any = document.getElementById('my_video_1');
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById('my_video_1');
    video.currentTime = 0;
  }
}
