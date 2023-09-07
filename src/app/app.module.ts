import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


import { AppComponent } from './app.component';
import { BoardNavComponent } from './components/board-nav/board-nav.component';
import { BoardSlideViewComponent } from './components/board-slide-view/board-slide-view.component';
import { BoardCanvasComponent } from './components/board-canvas/board-canvas.component';
import { BoardFabsComponent } from './components/board-fabs/board-fabs.component';

import { DragScrollDirective } from '../@pv/directives/drag-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardNavComponent,
    BoardSlideViewComponent,
    BoardCanvasComponent,
    BoardFabsComponent,

    DragScrollDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
