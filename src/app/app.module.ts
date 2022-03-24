import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScannerComponent } from './QRModule/scanner/scanner.component';
import { GeneratorComponent } from './QRModule/generator/generator.component';
import { ImportComponent } from './QRModule/import/import.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { StudentModule } from './student/student.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MessModule } from './mess/mess.module';
import { SecurityModule } from './security/security.module';
import { WardenModule } from './warden/warden.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './SharedModule/Component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScannerComponent,
    GeneratorComponent,
    ImportComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    FormsModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    RouterModule,
    HttpClientModule,

    StudentModule,
    MessModule,
    SecurityModule,
    WardenModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
