let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WW............WWW............WW
WW.WWWW.WWWWW.WWW.WWWWW.WWWW.WW
WW*WWWW.WWWWW.WWW.WWWWW.WWWW*WW
WW.WWWW.WWWWW.WWW.WWWWW.WWWW.WW
WW...........................WW
WW.WWWW.WW.WWWWWWWWW.WW.WWWW.WW
WW.WWWW.WW.WWWWWWWWW.WW.WWWW.WW
WW......WW....WWW....WW......WW
WWWWWWW.WWWWW.WWW.WWWWW.WWWWWWW
WWWWWWW.WWWWW.WWW.WWWWW.WWWWWWW
WWWWWWW.WW...........WW.WWWWWWW
WWWWWWW.WW.WWW---WWW.WW.WWWWWWW
WWWWWWW.WW.Wo.o.oooW.WW.WWWWWWW
...........Wooo..o.W...........
WWWWWWW.WW.Wo.o.oooW.WW.WWWWWWW
WWWWWWW.WW.WWWWWWWWW.WW.WWWWWWW
WWWWWWW.WW...........WW.WWWWWWW
WWWWWWW.WW.WWWWWWWWW.WW.WWWWWWW
WWWWWWW.WW.WWWWWWWWW.WW.WWWWWWW
WW............WWW............WW
WW.WWWW.WWWWW.WWW.WWWWW.WWWW.WW
WW*WWWW.WWWWW.WWW.WWWWW.WWWW*WW
WW...WW.................WW...WW
WWWW.WW.WW.WWWWWWWWW.WW.WW.WWWW
WWWW.WW.WW.WWWWWWWWW.WW.WW.WWWW
WW......WW....WWW....WW......WW
WW.WWWWWWWWWW.WWW.WWWWWWWWWW.WW
WW.WWWWWWWWWW.WWW.WWWWWWWWWW.WW
WW...........................WW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

class Map {
    constructor(ctx) {
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;
        
        this.deltaX = Math.ceil(ctx.canvas.width / pacmanMap.split('\n').length);
        this.deltaY = Math.ceil(ctx.canvas.height / pacmanMap.split('\n').length);
       
   
      /* Fill the code */
    }

    keyboard_event() { }
    update() { }
    draw(ctx) {
       let x= 1;
      
        pacmanMap.split('\n').forEach((row, i) => {
            row.split('').forEach((char, j) => {
                switch (char) {
                    case 'W':
                        ctx.fillStyle = '#E82E8E';
                        ctx.fillRect(this.deltaX * j, (this.deltaY*i)-this.deltaY , this.deltaX,this.deltaY);
                        break;
                    case '.':
                        ctx.beginPath();
                        ctx.arc(this.deltaX /2 +this.deltaY* j,this.deltaY*i-this.deltaX /2, 1, 0, 2 * Math.PI);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = '#4CC5B4';
                        ctx.stroke();
                        break;
                    case '*':
                        ctx.beginPath();
                        ctx.arc(this.deltaX/2 + this.deltaY * j, this.deltaY * i - this.deltaX/2, 1, 0, 2 * Math.PI);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = '#67529C';
                        ctx.fillStyle = '#67529C';
                        ctx.fill()
                        ctx.stroke();
                        break;
                        case 'o':
                            ctx.beginPath();
                            ctx.arc(this.deltaX/2 + this.deltaY * j, this.deltaY * i - this.deltaX/2, 1, 0, 2 * Math.PI);
                            ctx.lineWidth = 3;
                            ctx.strokeStyle = '#EC823B';
                            ctx.fillStyle = '#EC823B';
                            ctx.fill();
                            ctx.stroke();
                            break;
                            case '-':
                                ctx.beginPath();
                                ctx.arc(this.deltaX/2 + this.deltaY * j, this.deltaY * i - this.deltaX/2, 1, 0, 2 * Math.PI);
                                ctx.lineWidth = 3;
                                ctx.strokeStyle = '#67529C';
                                ctx.fillStyle = '#67529C';
                                ctx.fill();
                                ctx.stroke();
                                break;
                }
            })
        })
    }
}