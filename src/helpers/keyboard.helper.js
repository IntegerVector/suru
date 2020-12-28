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

  _nextKeySubject$ = new Subject();
  _nextKeySubscription = null;
  _nextKeyCode = null;

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
        this._prevent($event);
        this.onTab$.next();
        break;
      case 'Enter':
        this._prevent($event);
        this.onEnter$.next();
        break;
      case 'ArrowUp':
        this._prevent($event);
        this.onArrowUp$.next();
        break;
      case 'ArrowDown':
        this._prevent($event);
        this.onArrowDown$.next();
        break;
      case 'Space':
        this.onSpace$.next();
        break;
      case 'Delete':
        this._prevent($event);
        this.onDelete$.next();
        break;
      case 'Escape':
        this._prevent($event);
        this.onEscape$.next();
        break;
      default: break;
    }
  }

  _prevent($event) {
    $event.preventDefault();
  }
}

export const keyboardHelper = new KeyBoard();
