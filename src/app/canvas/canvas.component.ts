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
  cursorIsInBrowser: any;
  sparkles: any;
  public soundsEnabled: any;
  spaceAmbient: any;
  beamSound: any;
  clickSound: any;
  charSounds: any;
  delay: any;
  clickEffectDelay: any;
  hover: any;

  constructor()
  {
    this.soundsEnabled = false;
    this.spaceAmbient = document.createElement('audio');
    this.spaceAmbient.setAttribute('src', "../../assets/sounds/spaceambient.mp3");
    this.spaceAmbient.loop = true;
    this.beamSound = document.createElement('audio');
    this.beamSound.setAttribute('src', "../../assets/sounds/beam.mp3");
    this.beamSound.setAttribute('preload', "auto");
    this.clickSound = document.createElement('audio');
    this.clickSound.setAttribute('src', "../../assets/sounds/click.mp3");
    this.clickSound.setAttribute('preload', "auto");
    this.charSounds = [];
  }

  ngOnInit()
  {
    this.canvas = document.querySelector("#canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.cursor = new Cursor(32, 3, 180, this.ctx);
    this.cursorIsInBrowser = true;
    this.sparkles = [];
    this.delay = 4;
    this.clickEffectDelay = false;
    this.hover = false;
    this.canvas.click();

    for (let i = 0; i < 12; i++)
      {
        const sound = document.createElement('audio');
        sound.setAttribute('src', "../../assets/sounds/menu.mp3");
        sound.setAttribute('preload', "auto");
        this.charSounds.push(sound);
      }

    this.animate();
  }

  @HostListener('window:resize', ['$event']) onResize(e: any)
  { 
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(e: any)
  { 
    if (
        e.target.classList.contains("character-content")
        ||
        e.target.classList.contains("homepage-character-card-name")
        ||
        e.target.classList.contains("back-button")
        ||
        e.target.classList.contains("activity-title")
        ||
        e.target.classList.contains("mute-volume")
    )
    {
      if (this.hover === false && this.soundsEnabled === true)
        {
          if (e.target.classList.contains("homepage-character-card-name"))
            {
              const id = +e.target.id.substring(15);
              this.charSounds[id - 1].play();
            } else if (e.target.classList.contains("character-content"))
            {
              const id = +e.target.id.substring(10);
              this.charSounds[id - 1].play();
            } else if (!e.target.classList.contains("character-content")) {
              this.charSounds[0].play();
            }
        }
       
        this.hover = true;
        this.cursor.hover = true;
    } else {
        this.hover = false;
        this.cursor.hover = false;
    }
    
    this.cursor.x = e.x;
    this.cursor.y = e.y;

    this.delay--;
    if(this.delay === 0)
      {
        this.spawnSparkles(e.x, e.y, 4, 1, this.sparkles);
        this.delay = 4;
      }
    
  }

  @HostListener('window:mousedown', ['$event']) onMouseDown(e: any)
  {
    if (e.target.classList.contains("mute-volume")) {
      const muteBtn: any = document.querySelector(".mute-volume");
      if (this.soundsEnabled === false)
        {
          this.soundsEnabled = true;
          this.spaceAmbient.play();
          muteBtn.classList.add("enable-sounds");
        } else {
          this.soundsEnabled = false;
          this.spaceAmbient.pause();
          muteBtn.classList.remove("enable-sounds");
        }
    }
    if (this.clickEffectDelay === false)
      {
        this.clickEffectDelay = true;

        this.spawnSparkles(e.x, e.y, 200, 3, this.sparkles);

        if (this.soundsEnabled)
          {
            if (this.hover)
              {
                this.clickSound.play();
              } else {
                this.beamSound.play();
              }
          }

        setTimeout(() => {
          this.clickEffectDelay = false;
        }, 500);
      }

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
    
    if (this.cursorIsInBrowser)
      {
        this.cursor.draw();
      }

    this.sparkles.forEach((sparkle: { update: () => void; lifeTime: number; draw: () => void; }) => {
        sparkle.update();
        if (sparkle.lifeTime < 0)
        {
            this.sparkles.shift();
        }
        sparkle.draw();
    });
  }

  public getSoundsEnabled():boolean
  {
    return this.soundsEnabled;
  }
}

class Cursor {
  x: number;
  y: number;
  radius: number;
  width: number;
  color: number;
  hover: boolean;
  ctx: any;

  constructor(radius: number, width: number, color: number, ctx: any)
  {
    this.x = 0,
    this.y = 0,
    this.hover = false,
    this.radius = radius,
    this.width = width,
    this.color = color,
    this.ctx = ctx
  }

  draw() {
    if (this.hover === false)
      {
        this.ctx.strokeStyle = `hsl(${this.color}, 100%, 50%)`;
        this.ctx.lineWidth = this.width;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - this.radius / 2, this.y);
        this.ctx.lineTo(this.x - 5, this.y);
        this.ctx.moveTo(this.x + 5, this.y);
        this.ctx.lineTo(this.x + this.radius / 2, this.y);
        this.ctx.moveTo(this.x, this.y - this.radius / 2);
        this.ctx.lineTo(this.x, this.y - 5);
        this.ctx.moveTo(this.x, this.y + 5);
        this.ctx.lineTo(this.x, this.y + this.radius / 2);
        this.ctx.closePath();
        this.ctx.stroke();
      } else {
        this.ctx.strokeStyle = `hsl(${this.color}, 100%, 50%)`;
        this.ctx.lineWidth = this.width;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - this.radius / 2 + 5, this.y);
        this.ctx.lineTo(this.x + this.radius / 2 - 5, this.y);
        this.ctx.moveTo(this.x, this.y - this.radius / 2 + 5);
        this.ctx.lineTo(this.x, this.y + this.radius / 2 - 5);
        this.ctx.closePath();
        this.ctx.stroke();
      }

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
