import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawStorageService {
  /*--------------------------------
        Draw 관련 변수
      ---------------------------------*/
  drawVar: any = [];
  pageDrawingEvent = {};

  constructor() {

  }


  /**
   * Draw event 받아오기
   *
   * @param docNum 문서 번호
   * @param pageNum 페이지 번호
   * @returns
   */
  getDrawingEvents(pageNum) {
    return this.drawVar.find((item) => item.pageNum === pageNum);
  }


  /**
   * 해당 page에 새로운 draw event 저장
   * @param {number} pdfNum 페이지 번호
   * @param {object} drawingEvent 새로운 draw event
   */
  setDrawEvent(pageNum, drawingEvent) {

    const itemIndex = this.drawVar.findIndex((item) => item.pageNum === pageNum);

    // 현재 해당 page의 data가 없는 경우 최초 생성
    if (itemIndex < 0) {
      this.drawVar.push({ pageNum: pageNum, drawingEvent: [drawingEvent] });
    }
    // 기존 data에 event 추가
    else {
      this.drawVar[itemIndex].drawingEvent.push(drawingEvent);
    };

    // console.log(this.drawVar);
  }


  /**
   * 특정 page의 draw event 모두 삭제
   * @param {number} pageNum 페이지 번호
   */
  clearDrawingEvents(pageNum) {
    this.drawVar = this.drawVar.filter((item) => item.pageNum != pageNum);
  }

}
