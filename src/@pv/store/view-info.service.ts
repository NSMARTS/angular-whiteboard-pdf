import { Injectable } from '@angular/core';
import { Store } from './store';


class InitViewInfo {
  isDocLoaded: false;
  loadedDate =  new Date().getTime();
  numPages = 1;
  currentPage = 1;
  zoomScale = 1;
  thumbUpdateRequired: false;
}


@Injectable({
  providedIn: 'root'
})

export class ViewInfoService extends Store<any> {

  constructor() {
    super(new InitViewInfo());
  }

  setViewInfo(data: any): void {
    this.setState({
      ...this.state, ...data
    });
  }


  /**
   * 페이지 변경에 따른 Data Update
   *
   * @param pageNum 페이지 번호
   */
   updateCurrentPageNum(pageNum: any): void {

    this.setState({
      ...this.state, currentPage: pageNum
    })
  }


  /**
   * Update Zoom Scale
   * @param
   * @param Zoom
   */
  updateZoomScale(newZoomScale): void {
    this.setState({
      ...this.state, zoomScale: newZoomScale
    })
  }

}
