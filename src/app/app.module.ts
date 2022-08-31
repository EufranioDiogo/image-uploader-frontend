import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UploadResultPageComponent } from './screens/upload-result-page/upload-result-page.component';
//import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    UploadResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
