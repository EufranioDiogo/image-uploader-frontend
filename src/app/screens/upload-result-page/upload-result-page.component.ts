import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-result-page',
  templateUrl: './upload-result-page.component.html',
  styleUrls: ['./upload-result-page.component.css']
})
export class UploadResultPageComponent implements OnInit {
  @Input()
  imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
