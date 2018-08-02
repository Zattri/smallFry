import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { FishComponent } from './fish/fish.component';

import { FishGeneratorService } from './fish-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    FishComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    FlexLayoutModule,
    MatSidenavModule
  ],

  providers: [FishGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
