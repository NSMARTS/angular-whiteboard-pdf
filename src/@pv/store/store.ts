import { Observable, BehaviorSubject } from 'rxjs';

/**
 * 상태관리 클래스.
 * 컴포넌트 간 상태(변수) 공유
 */
export class Store<T> {
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): T {
    return this._state$.getValue();
  }

  setState(nextState: T): void {
    this._state$.next(nextState);
  }
}
