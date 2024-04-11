// import { Injectable } from '@angular/core';
// import { CanvasComponent } from './canvas.component';
import { CursorService } from './cursor-service';
// const cur = new CursorService();

// const tt = cur.isCursorInBrowser();
// console.log(tt);


/* @Injectable({
  providedIn: 'root'
})
export class CursorService {

  constructor(private canvasComponent: CanvasComponent) {}

  public isCursorInBrowser(): boolean {
    return this.canvasComponent.cursorIsInBrowser;
  }
} */

// const cursorService = new CursorService();
// const isCursorInBrowser = cursorService.isCursorInBrowser();
document.body.addEventListener("mouseenter", () => {
    // const cursor = document.querySelector("#cursor");
    // if (cursor)
    // {
    //     cursor.style.opacity = "1";
    // }
    console.log("in");
});

document.body.addEventListener("mouseleave", () => {
    // const cursor = document.querySelector("#cursor");
    // if (cursor)
    // {
    //     cursor.style.opacity = "0";
    // }
    console.log("out");
});
