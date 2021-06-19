import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MyFilesComponent } from './my-files/my-files.component';
import { SharedWithMeComponent } from './shared-with-me/shared-with-me.component';
import { StaredComponent } from './stared/stared.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFilesComponent,
    SharedWithMeComponent,
    StaredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatSidenavModule, MatIconModule,
    MatButtonModule, MatDividerModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
