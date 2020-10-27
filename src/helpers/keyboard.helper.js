import { fromEvent, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

class KeyBoard {
  onEnter$ = new Subject();
  onArrowUp$ = new Subject();
  onArrowDown$ = new Subject();
  onSpace$ = new Subject();
  onDelete$ = new Subject();
  onEscape$ = new Subject();
  
  _onKeydown$ = null;

  constructor() {}

  startObserve() {
    this._onKeydown$ = fromEvent(document, 'keydown')
      .pipe(
        filter($event => {
          this._filter($event.code);
        }))
      .subscribe();
  }

  stopObserve() {
    this._onKeydown$.unsubscribe();
    this._onKeydown$ = null;
  }

  _filter(code) {
    switch (code) {
      case 'Enter':
        this.onEnter$.next();
        break;
      case 'ArrowUp':
        this.onArrowUp$.next();
        break;
      case 'ArrowDown':
        this.onArrowDown$.next();
        break;
      case 'Space':
        this.onSpace$.next();
        break;
      case 'Delete':
        this.onDelete$.next();
        break;
      case 'Escape':
        this.onEscape$.next();
        break;
      default: break;
    }
  }
}

export const keyboardHelper = new KeyBoard();
