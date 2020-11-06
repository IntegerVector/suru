import { fromEvent, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

class KeyBoard {
  onTab$ = new Subject();
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
          this._filter($event);
        }))
      .subscribe();
  }

  stopObserve() {
    this._onKeydown$.unsubscribe();
    this._onKeydown$ = null;
  }

  _filter($event) {
    switch ($event.code) {
      case 'Tab':
        $event.preventDefault();
        this.onTab$.next();
        break;
      case 'Enter':
        $event.preventDefault();
        this.onEnter$.next();
        break;
      case 'ArrowUp':
        $event.preventDefault();
        this.onArrowUp$.next();
        break;
      case 'ArrowDown':
        $event.preventDefault();
        this.onArrowDown$.next();
        break;
      case 'Space':
        this.onSpace$.next();
        break;
      case 'Delete':
        $event.preventDefault();
        this.onDelete$.next();
        break;
      case 'Escape':
        $event.preventDefault();
        this.onEscape$.next();
        break;
      default: break;
    }
  }
}

export const keyboardHelper = new KeyBoard();
