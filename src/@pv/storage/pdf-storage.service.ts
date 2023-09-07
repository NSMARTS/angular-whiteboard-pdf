import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/lib/pdf/pdf.worker.js';


@Injectable({
  providedIn: 'root'
})

export class PdfStorageService {

  private _pdfVar: any = {
    pdfPages: []
  };

  constructor() { }


  get pdfVar(): any {
    return this._pdfVar;
  }

  setPdfVar(pdfVar) {
    this._pdfVar = pdfVar;
  }


  /**
   * pdf Page return
   * @param {number} pageNum 페이지 번호
   * @return 해당 page의 pdf document
  */
  getPdfPage(pageNum) {
    return this._pdfVar.pdfPages[pageNum - 1];
  }

  /**
   * 해당 page의 scale 1에 해당하는 viewport size.
   * @param {number} pageNum 페이지 번호
  */
  getViewportSize(pageNum) {
    // console.log(`> get ViewPort size: pageNum : ${pageNum}`);
    return this._pdfVar.pdfPages[pageNum - 1].getViewport({ scale: 1 });
  }


  /**
   * Memory Release
   * - pdf.js Destory for memory release
   * {@link https://github.com/mozilla/pdf.js/issues/9662 }
   * {@link https://stackoverflow.com/questions/40890212/viewer-js-pdf-js-memory-usage-increases-every-time-a-pdf-is-rendered?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa}
   */
  memoryRelease() {
    // console.log('PDF Memeory Release');

    if (this._pdfVar.pdfDestroy) {
      this._pdfVar.pdfDestroy.cleanup();
      this._pdfVar.pdfDestroy.destroy();
    }

    for (const pdfPage of this._pdfVar.pdfPages) {
      pdfPage.cleanup();
    }

    this._pdfVar.pdfDestroy = '';
    this._pdfVar.pdfPages = [];
  }

}
