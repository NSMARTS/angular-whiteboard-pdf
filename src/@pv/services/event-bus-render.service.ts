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

}
