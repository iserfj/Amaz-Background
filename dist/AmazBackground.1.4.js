document.AB = {
    init: function (cfg=this.cfg()) {
        window.requestAF = (function(){
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        })();
        let ctx;
        let app = cfg.app||"amazbackgroundcanvas";
        let c = document.getElementById(app);
        if(c) document.body.removeChild(c);
        c = document.createElement("canvas");
        document.body.appendChild(c);
        c.id=app;
        c.width=cfg.width||window.innerWidth;
        c.height=cfg.height||window.innerHeight;
        c.style.position="fixed";
        c.style.left=c.style.top=0;
        c.style.zIndex=cfg.zIndex||-10;
        ctx = c.getContext("2d");
        document.body.onmousemove = function (e) {
            drawRandomPoint(ctx,e.clientX,e.clientY,cfg.starcolor[0],cfg.starcolor[1],cfg.rearsize,cfg.pointsize,cfg.amount);
        }
        console.log("Amaz Background. Version Beta 1.4\nCopyright © 2020 Wenpu Zhang, China http://www.axeswp.cn/");
        document.rAF = window.requestAF(run);
        function run () {
            ctx.save();
            ctx.fillStyle=`rgb(${cfg.bgcolor.r||0},${cfg.bgcolor.g||0},${cfg.bgcolor.b||0},${cfg.bgcolor.a||0.1})`;
            ctx.fillRect(0,0,cfg.width,cfg.height);
            ctx.restore();
            document.rAF = window.requestAF(run);
        }
        function drawRandomPoint (p,x,y,colorl=192,colorh=255,offset=20,size=3,n=5) {
            while(n-->0){
                p.fillStyle=randBrightColor(colorl,colorh);
                randpt=randCyclePlot(x,y,offset);
                p.fillRect(randpt.x,randpt.y,size,size);
            }
        }
        function randCyclePlot (x,y,r) {
            alpha=Math.random()*Math.PI*2;
            rn=Math.random();
            return {
                "x":rn*rn*r*Math.cos(alpha)+x,
                "y":rn*rn*r*Math.sin(alpha)+y
            }
        }
        function randBrightColor(lower,higher) {
            clr=[randint(lower,higher),randint(lower,higher),randint(lower,higher)];
            clr[randint(0,3)]=0;
            return `rgb(${clr[0]},${clr[1]},${clr[2]})`;
        }
        function randint(lower,higher) {
            return (parseInt(Math.random()*(higher-lower)+lower));
        }
    },
    cfg: function (){
        return {
            app:"amazbackgroundcanvas",
            width:window.innerWidth,
            height:window.innerHeight,
            zIndex:-10,
            bgcolor:{
                r:255,
                g:255,
                b:255,
                a:0.1
            },
            starcolor:[192,255],
            pointsize:5,
            amount:5,
            rearsize:20
        }
    },
}