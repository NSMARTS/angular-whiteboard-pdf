import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusRenderService {

  constructor() { }


  initCanvasSet() {


    // canvas Element 할당
    this.coverCanvas = this.coverCanvasRef.nativeElement;
    this.teacherCanvas = this.teacherCanvasRef.nativeElement;
    this.bgCanvas = this.bgCanvasRef.nativeElement;
    this.tmpCanvas = this.tmpCanvasRef.nativeElement;
    this.canvasContainer = this.canvasContainerRef.nativeElement;

    /* container size 설정 */
    CANVAS_CONFIG.maxContainerHeight = window.innerHeight - CANVAS_CONFIG.navbarHeight;; // pdf 불러오기 사이즈
    CANVAS_CONFIG.maxContainerWidth = window.innerWidth - CANVAS_CONFIG.sidebarWidth;

    CANVAS_CONFIG.deviceScale = this.canvasService.getDeviceScale(this.bgCanvas);
  }
  etInitZoomScale() {
    console.log('>>> Calc init Zoom scale...');

    const containerSize = {
      width: CANVAS_CONFIG.maxContainerWidth,
      height: CANVAS_CONFIG.maxContainerHeight
    };
    const pdfPage: any = this.pdfStorageService.getPdfPage(1);


    // console.log(pdfPage)
    const docSize = pdfPage.getViewport({ scale: 1 * CANVAS_CONFIG.CSS_UNIT }); // 100%에 해당하는 document의 size (Css 기준)

    // console.log(docSize);
    // console.log(containerSize);

    const ratio = {
      w: containerSize.width / docSize.width,
      h: containerSize.height / docSize.height
    };

    // console.log(ratio)

    let zoomScale = 1;

    // 1. main container size보다 작은 경우
    if (ratio.w >= 1 && ratio.h >= 1) {
      // console.log(' - 문서가 container보다 작음.');
      // fit To page
      zoomScale = Math.min(ratio.w, ratio.h);
    }

    // 2. landscape 문서인 경우
    else if (docSize.width > docSize.height) {
      // console.log(' - 문서: Landscape');
      // fit To Page
      zoomScale = Math.min(ratio.w, ratio.h);
    }
    // 3, portrait 문서인 경우
    else if (docSize.width <= docSize.height) {
      // console.log(' - 문서: Portrait');
      if (ratio.w < 1) {
        // console.log(' - 문서 Width가 container보다 넓습니다.');
        zoomScale = ratio.w;
      }
    }

    zoomScale = Math.min(zoomScale, this.maxZoomScale);
    zoomScale = Math.max(zoomScale, this.minZoomScale);

    console.log(' - Init zoom Scale : ', zoomScale);

    return zoomScale;
  }


  // zoomscale 결정(zoomin, zoomout, fit to page .... etc)
  calcZoomScale(zoomInfo, pageNum, prevZoomScale = 1) {

    let zoomScale = 1;

    switch (zoomInfo) {
      case 'zoomIn':
        zoomScale = this.calcNewZoomScale(prevZoomScale, +1);
        break;

      case 'zoomOut':
        zoomScale = this.calcNewZoomScale(prevZoomScale, -1);
        break;

      // 너비에 맞춤
      case 'fitToWidth':
        zoomScale = this.fitToWidth(pageNum);
        break;

      // page에 맞춤
      case 'fitToPage':
        zoomScale = this.fitToPage(pageNum);
        break;
    }

    return zoomScale;
  }
}
