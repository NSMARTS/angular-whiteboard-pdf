import { Injectable } from '@angular/core';
import { Store } from './store';

// const widthSet: {
//   pen: [4, 7, 13],
//   eraser: [30, 45, 60]
// }

class InitEditInfo {
  mode = 'draw'; // draw, sync(여기? 또는 별도?)
  tool = 'pen'; // eraser, ...

  toolsConfig = {
    pen: { width: 4, color: 'black' },
    eraser: { width: 60, color: '#ffffff' }
  };

  toolDisabled = false; // move인 경우
  editDisabled = false; // Edit 자체 동작을 모두 방지(권한 관련)

  // syncMode, ....
}


@Injectable({
  providedIn: 'root'
})

export class EditInfoService extends Store<any> {

  constructor() {
    super(new InitEditInfo());
  }


  /**
   * 그리기 모드, 드래그(move) 모드 세팅, 펜 지우개 같은 도구 세팅
   * @param editInfo 
   */
  setEditInfo(editInfo: any): void {

    // Tool Disable 설정
    if (editInfo.mode == 'draw') {
      editInfo.toolDisabled = false;
    }
    if (editInfo.mode == 'move') {
      editInfo.toolDisabled = true;
    }

    this.setState({
      ...this.state, ...editInfo
    });
  }
}
