import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


import { FileService } from '../@pv/services/file/file.service';
import { ZoomService } from '../@pv/services/zoom/zoom.service'

import { ViewInfoService } from '../@pv/store/view-info.service';

import { PdfStorageService } from '../@pv/storage/pdf-storage.service';


import { EventBusService } from '../@pv/services/eventBus/event-bus.service';
import { DrawStorageService } from '../@pv/storage/draw-storage.service';


/**
 * Main Component
 * - Socket 처리
 * - PDF File 변환 처리
 * - PDF, 판서 저장 처리
 * - API 처리
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  private meetingId;

  constructor(
    private viewInfoService: ViewInfoService,
    private pdfStorageService: PdfStorageService,
    private fileService: FileService,
    private zoomService: ZoomService,
    private eventBusService: EventBusService,
    private drawStorageService: DrawStorageService,) {

  }

  ngOnInit(): void {



    // 새로운 판서 Event 저장
    this.eventBusService.on('gen:newDrawEvent', this.unsubscribe$, async (data) => {
      const currentPage = this.viewInfoService.state.currentPage;
      this.drawStorageService.setDrawEvent(currentPage, data);
    });


  }
  ///////////////////////////////////////////////////////////

  ngOnDestroy() {
    // unsubscribe all subscription
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

  /**
   * Open Local PDF File
   *  - Board File View Component의 @output
   *  - File upload
   *
   * @param newDocumentFile
   */



  async onDocumentOpened(newDocumentFile) {

    // this.pdfStorageService.memoryRelease();


    const numPages = await this.fileService.openDoc(newDocumentFile);
    // console.log(this.pdfStorageService.pdfVar);
    const obj = {
      isDocLoaded: true,
      loadedDate: new Date().getTime(),
      numPages: numPages,
      currentPage: 1,
      zoomScale: this.zoomService.setInitZoomScale()
    };

    this.viewInfoService.setViewInfo(obj);

  }

}
