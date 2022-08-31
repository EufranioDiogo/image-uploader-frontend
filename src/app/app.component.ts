import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    imageInput: new FormControl(File),
  });
  http: HttpClient;
  progress: Number = 0;
  response: any = null;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {}

  onChangeInputImage(event: any) {
    let files: FileList = event.target.files;

    let validExtensions: any = {
      'image/png': true,
      'image/jpg': true,
      'image/jpeg': true,
      '': false,
    };
    let validFiles = [];

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        let file: File | null = files?.item(i);

        const fileExtension: string = file === null ? '' : file.type;
        const fileSize: number = file === null ? 0 : file.size;

        if (validExtensions[fileExtension] && fileSize < 1048576) {
          validFiles.push(file);
        }
      }
      if (validFiles.length > 0) {
        this.form.controls['imageInput'].setValue(validFiles[0]);
      }
    }
  }

  onSubmit(): void {
    let formData: FormData = new FormData();
    let normalForm = this.form.value;

    for (let key in normalForm) {
      if (normalForm[key] instanceof Blob) {
        formData.append('file', normalForm[key], normalForm[key].name);
      } else {
        formData.append(key, normalForm[key].name);
      }
    }

    this.response = 'loading';

    this.http
      .post('http://localhost:8080/upload/image', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total == undefined ? 1 : event.total;

          this.progress = Math.round((100 * event.loaded) / total);
          console.log(this.progress + '%');
        }

        if (event.type === HttpEventType.Response) {
          this.response = event.body;
          this.response = 'loaded';
        }
      });
  }
}
