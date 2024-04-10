import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  canvas: any;
  ctx: any;
  cursor: any;
  sparkles: any;
  delay: any;

  constructor()
  {
    
  }

  ngOnInit()
  {
    this.canvas = document.querySelector("#canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.cursor = document.querySelector("#cursor");
    this.sparkles = [];
    this.delay = 4;
    this.animate();
  }

  @HostListener('window:resize', ['$event']) onResize(e: any)
  { 
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(e: any)
  { 
    this.cursor.style.left = `calc(${e.x}px - 16px)`;
    this.cursor.style.top = `calc(${e.y}px - 16px)`;

    if (
        e.target.classList.contains("character-content")
        ||
        e.target.classList.contains("homepage-character-card-name")
    )
    {
        this.cursor.classList.add("cursor-focus");
    } else {
        this.cursor.classList.remove("cursor-focus");
    }
    
    this.delay--;
    if(this.delay === 0)
      {
        this.spawnSparkles(e.x, e.y, 4, 1, this.sparkles);
        this.delay = 4;
      }
    
  }

  @HostListener('window:mousedown', ['$event']) onMouseDown(e: any)
  { 
    this.spawnSparkles(e.x, e.y, 200, 3, this.sparkles);
  }

  spawnSparkles(x: number, y: number, count: number, speed: number, sparkles: any)
  {
    for (let i = 0; i < count; i++)
    {
        let sparkle = new Sparkle(x, y, speed, this.ctx);
        sparkles.push(sparkle);
    }
  }

  
  animate()
  {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.sparkles.forEach((sparkle: { update: () => void; lifeTime: number; draw: () => void; }) => {
        sparkle.update();
        if (sparkle.lifeTime < 0)
        {
            this.sparkles.shift();
        }
        sparkle.draw();
    });
  }


}

class Sparkle {

  x: number;
  y: number;
  dirX: number;
  dirY: number;
  lifeTime: number;
  size: number;
  ctx: any;

  constructor(x: number, y: number, speed: number, ctx: any)
  {
      this.x = x,
      this.y = y,
      this.dirX = (Math.random() + (Math.random() - 1)) * speed,
      this.dirY = (Math.random() + (Math.random() - 1)) * speed,
      this.lifeTime = Math.floor(Math.random() * 360),
      this.size = Math.floor(Math.random() * 1 + 1),
      this.ctx = ctx
  }

  draw()
  {
    this.ctx.fillStyle = `rgb(${Math.floor(Math.random() * 200 + 55)},${Math.floor(Math.random() * 100 + 155)},${Math.floor(Math.random() * 100 + 155)})`;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fill();
  }

  update()
  {
      this.lifeTime--;
      // this.size -= 3 / 120 * this.lifeTime;
      this.x += this.dirX;
      this.y += this.dirY;
  }
}
