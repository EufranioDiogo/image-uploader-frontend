import { Component, OnInit, ViewRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    imageContainerInput: new FormControl(''),
    imageInput: new FormControl('')
  })

  constructor() {}

  ngOnInit(): void {
    console.log('dsidsi');
  }
}
