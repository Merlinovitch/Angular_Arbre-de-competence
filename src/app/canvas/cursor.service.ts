import { Injectable } from '@angular/core';
import { CanvasComponent } from './canvas.component';

@Injectable({
  providedIn: 'root'
})
export class CursorService {

  constructor(private canvasComponent: CanvasComponent) {}

  public isCursorInBrowser(): boolean {
    return this.canvasComponent.cursorIsInBrowser;
  }

  public setCursorInBrowser(val: boolean): void {
    this.canvasComponent.cursorIsInBrowser = val;
  }
}
