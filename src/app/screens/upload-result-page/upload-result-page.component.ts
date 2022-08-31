import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-result-page',
  templateUrl: './upload-result-page.component.html',
  styleUrls: ['./upload-result-page.component.css']
})
export class UploadResultPageComponent implements OnInit {
  @Input()
  imageUrl: string = '';

  copied: boolean = false;
  public imageUrlText = '';

  constructor() { }

  ngOnInit(): void {
  }

  copyTheImageUrl() {
    if (!this.copied) {
      const spanText: HTMLInputElement | null = document.querySelector('.image-url');

      spanText?.select();

      navigator.clipboard.writeText(spanText === null ? '' : spanText?.value);

      this.copied = true;
    }
    
  }
}
