var shareData,scrollDirection = "left",scrollPro = 0,wrap = $('.main'),ww = window.innerWidth,wh = window.innerHeight,shayuPlay = false,loader;
var imgArr = [
    "../images/bg.jpg",
];
// 横屏内容长度
var lastWidth = $(window).height();
var contentLength = 4002+lastWidth;

//防止屏幕移动
$(document).bind("touchmove",function(e){
    e.preventDefault();
});

$(function(){
    // loading图片加载
    var loadingImg = new Image();
    loadingImg.src = "../images/loading.png";
    loadingImg.onload = function(){
        // pixi初始化
        pixiFn();
        // 调整画布位置和大小初始化
        changeScene();
        window.onresize = function(){
            changeScene();
        };
    }
});


function scrollBegin(){
    scroller = new Scroller(function(left, top, zoom) {
        if(scrollDirection == "top"){
            container.x = -top;
        }
        if(scrollDirection == "left"){
            container.x = -left;
        }
        scrollPro = left > top ? left : top;
        console.log(scrollPro);
        if(scrollPro>0&&scrollPro<=50){
            part1mount2.x = 0;
            part1mount1.x = 0;
        }
        if(scrollPro>0&&scrollPro<=160){
            part1car.x = scrollNum(0,160,scrollPro,-100,200);
            part1gas.x = scrollNum(0,160,scrollPro,50,350);

            part1mount2.x = scrollNum(0,160,scrollPro,0,-150);
            part1mount1.x = scrollNum(0,160,scrollPro,0,150);

            part1t2.y = scrollNum(0,160,scrollPro,235,750);
            part1t2.x = scrollNum(0,160,scrollPro,250,420);
            part1t2.alpha = scrollNum(0,160,scrollPro,1,0);
            part1t2.rotation = scrollNum(0,160,scrollPro,0,-3);

            part1t3.y = scrollNum(0,160,scrollPro,345,650);
            part1t3.x = scrollNum(0,160,scrollPro,175,50);
            part1t3.alpha = scrollNum(0,160,scrollPro,1,0);
            part1t3.rotation = scrollNum(0,160,scrollPro,0,-1);

            part1t4.y = scrollNum(0,160,scrollPro,375,750);
            part1t4.x = scrollNum(0,160,scrollPro,310,150);
            part1t4.alpha = scrollNum(0,160,scrollPro,1,0);
            part1t4.rotation = scrollNum(0,160,scrollPro,0,3);

            part1t5.y = scrollNum(0,160,scrollPro,390,750);
            part1t5.x = scrollNum(0,160,scrollPro,40,150);
            part1t5.alpha = scrollNum(0,160,scrollPro,1,0);
            part1t5.rotation = scrollNum(0,160,scrollPro,0,-5);

            for(var i = 0; i < 3; i++){
                var num1 = 100/3 * i;
                var num2 = 100/3 * (i+1);
                if(num1 < scrollPro && scrollPro < num2){
                    part1t1.gotoAndStop(i);
                }
            }
        }
        if(scrollPro>50&&scrollPro<=450){
            part1tittleMask.scale.x = scrollNum(100,450,scrollPro,0,1);
        }
        if(0 < scrollPro && scrollPro < 50){
            part1tittleMask.scale.x = 0;
        }
        if(450 < scrollPro){
            part1tittleMask.scale.x = 1;
        }

        if(100 < scrollPro && scrollPro < 350){
            part1bird2.rotation = scrollNum(100,350,scrollPro,2.5,-0.5);
            part1bird2.scale.x = scrollNum(100,350,scrollPro,0.2,1);
            part1bird2.scale.y = scrollNum(100,350,scrollPro,0.2,1);

            part1bird1.rotation = scrollNum(100,350,scrollPro,-1.2,0.5);

        }
        if(0 < scrollPro && scrollPro < 100){
            part1bird2.rotation = 2.5;
            part1bird1.rotation = -1.2;
        }
        if(350 < scrollPro){
            part1bird2.rotation = -0.5;
            part1bird1.rotation = 0.5;
        }

        if(350 < scrollPro && scrollPro < 480){
            part1trees.rotation = scrollNum(350,480,scrollPro,-1.5,0);
            part1mount4.x = scrollNum(350,480,scrollPro,1031,1200);
        }
        if(0 < scrollPro && scrollPro < 350){
            part1trees.rotation = -1.5;
        }
        if(480 < scrollPro){
            part1trees.rotation = 0;
        }

        if(scrollPro>480&&scrollPro<=1200){
            part2tuan1Mask.scale.x = scrollNum(480,1200,scrollPro,0,1);
            part2tuan1Mask.scale.y = scrollNum(480,1200,scrollPro,0,1);
        }
        if(0 < scrollPro && scrollPro < 480){
            part2tuan1Mask.scale.x = 0;
            part2tuan1Mask.scale.y = 0;
        }
        if(1200 < scrollPro){
            part2tuan1Mask.scale.x = 1;
            part2tuan1Mask.scale.y = 1;
        }
        if(scrollPro>1200&&scrollPro<=1450){
            part2tuan1landBg.x = scrollNum(1200,1450,scrollPro,-200,0);
            point.y = scrollNum(1200,1450,scrollPro,760,246);
        }
        if(scrollPro>1400&&scrollPro<=1600){
            wen1.alpha = scrollNum(1400,1500,scrollPro,0,1);
            guang.x = scrollNum(1400,1600,scrollPro,280,222);
            guang.alpha = scrollNum(1400,1600,scrollPro,0,1);
            xi.x = scrollNum(1400,1600,scrollPro,548,348);
            xi.alpha = scrollNum(1400,1600,scrollPro,0,1);
        }
        if(scrollPro>1600&&scrollPro<1800){
            gxcloud.x = scrollNum(1600,1800,scrollPro,503,553);
            gxmount.x = scrollNum(1600,1800,scrollPro,488,300);
        }
        if(scrollPro<1400){
            wen1.alpha = 0;
            xi.alpha = 0;
            guang.alpha = 0;
        }
        
        if(scrollPro>1500&&scrollPro<=2600){
            part2tuan2Mask.scale.x = scrollNum(1500,2600,scrollPro,0,1);
            part2tuan2Mask.scale.y = scrollNum(1500,2600,scrollPro,0,1);
        }
        if(0 < scrollPro && scrollPro < 1500){
            part2tuan2Mask.scale.x = 0;
            part2tuan2Mask.scale.y = 0;
        }
        if(2600 < scrollPro){
            part2tuan2Mask.scale.x = 1;
            part2tuan2Mask.scale.y = 1;
        }
        if(scrollPro>2300&&scrollPro<=2800){
            part2tuan2landBg.x = scrollNum(2300,2800,scrollPro,-200,0);
        }
        if(scrollPro>1800&&scrollPro<=2200){
            part2cloud2.x = scrollNum(1800,2200,scrollPro,1029,1200);
        }
        if(2600 < scrollPro && scrollPro < 2800){
            part2trees.rotation = scrollNum(2600,2800,scrollPro,-1.5,0);
        }
        if(2600 < scrollPro && scrollPro < 3000){
            point2.y = scrollNum(2600,3000,scrollPro,760,-60);
            yun.x = scrollNum(2600,3000,scrollPro,1900,1846);
            nan.x = scrollNum(2600,3000,scrollPro,2100,1950);
            yun.alpha = scrollNum(2600,3000,scrollPro,0,1);
            nan.alpha = scrollNum(2600,3000,scrollPro,0,1);
            wen2.alpha = scrollNum(2600,3000,scrollPro,0,1);
        }
        if(scrollPro<2600){
            wen2.alpha = 0
        }


    }, {
        zooming: true,
        bouncing: false
    });
    // scroller.setDimensions(app.view.width, app.view.height, app.view.height, (part1.width+part2.width-(1040-640)));
    
    var mousedown = false;
    document.addEventListener("touchstart", function(e) {
        scroller.doTouchStart(e.touches, e.timeStamp);
        mousedown = true;
    }, false);

    document.addEventListener("touchmove", function(e) {
        if (!mousedown) {
            return;
        }
        scroller.doTouchMove(e.touches, e.timeStamp);
        mousedown = true;
    }, false);

    document.addEventListener("touchend", function(e) {
        if (!mousedown) {
            return;
        }
        scroller.doTouchEnd(e.timeStamp);
        mousedown = false;
    }, false);
}

function init(){
    changeScene();
    scrollBegin();
    scroller.setDimensions(app.view.width, app.view.height, app.view.height, contentLength);
}


function pixiFn(){
    app = new PIXI.Application(1508, 750, {
        backgroundColor: '0xffffff'
    });
    $(".main").append(app.view);
    // display
    app.stage.displayList = new PIXI.DisplayList();
    var index1 = new PIXI.DisplayGroup(1, false);

    // 预加载
    loader = new PIXI.loaders.Loader();
    loader.add(imgArr)
        .onProgress.add(function(e){
    });

    container = new PIXI.Container();
    container.interactive = true;

    

    loader.load(function(loader){
        part1 = new PIXI.Container();
        part1.x = 0;
        part1.y = 0;
        part1.width = 1815;
        part1.height = 750;

        bgimg = createSprite("../images/bg.jpg",{
            x:0,
            y:0
        });
        //柳树
        part1t1 = createAnimatedSprite("../images/tree",3,{
            x:0,
            y:0
        });
        //树叶1
        part1t2 = createSprite("../images/thief1.png",{
            x:250,
            y:235
        });
        //树叶2
        part1t3 = createSprite("../images/thief2.png",{
            x:175,
            y:345
        });
        //树叶3
        part1t4 = createSprite("../images/thief3.png",{
            x:310,
            y:375
        });
        //树叶4
        part1t5 = createSprite("../images/thief4.png",{
            x:40,
            y:390
        });
        //汽车
        part1car = createSprite("../images/car.png",{
            x:-100,
            y:553
        });
        carTween = TweenMax.fromTo(part1car,.5,{y:550,ease:Linear.easeNone},{y:555,ease:Linear.easeNone},{onComplete:function(){
            carTween.restart();
        }}).repeat(-1).yoyo(true);
        //尾气
        part1gas = createSprite("../images/cloud.png",{
            x:50,
            y:507
        });
        gasTween = TweenMax.fromTo(part1gas,1.5,{pixi:{scale:1.2,alpha:0}},{pixi:{scale:1,alpha:1},onComplete:function(){
            gasTween.restart();
        }}).repeat(-1).yoyo(true);
        part1gas.pivot.set(245,0)
        //山2
        part1mount2 = createSprite("../images/mount2.png",{
            x:0,
            y:177
        });
        //山1
        part1mount1 = createSprite("../images/mount1.png",{
            x:0,
            y:360
        });
        //标题
        part1tittleCont = new PIXI.Container();
        part1tittleCont.x = 402;
        part1tittleCont.y = 199;
        part1tittle = createSprite("../images/tittle.png",{
            x:0,
            y:0
        });
        //标题遮罩
        part1tittleMask = new PIXI.Container();
        part1tittleMask.x = 0;
        part1tittleMask.y = 0;
        part1tittleMask.pivot.x = 0;
        part1tittleMask.scale.x = 0;
        part1tittleMaskshape = new PIXI.Graphics();
        part1tittleMaskshape.beginFill("0xOFOFOF","0.5");
        part1tittleMaskshape.drawRect(0,0,1600,600);
        part1tittleMaskshape.endFill();
        part1tittleMask.addChild(part1tittleMaskshape);
        part1tittleCont.mask = part1tittleMaskshape;

        part1tittleCont.addChild(part1tittle)

         //鸟1
         part1bird1 = createSprite("../images/bird1.png",{
            x:730,
            y:980,
            rotation: -1.2,
        });
        part1bird1.pivot.set(0,900)
        //鸟2
        part1bird2 = createSprite("../images/bird2.png",{
            x:880,
            y:-150,
            rotation: 2.5,
        });
        part1bird2.pivot.set(0,-450)
        //三棵树
        part1trees = createSprite("../images/threetree.png",{
            x:1132,
            y:910,
            rotation: -1.5,
        });
        part1trees.pivot.set(0,410)
        //山3
        part1mount3 = createSprite("../images/mount3.png",{
            x:926,
            y:563
        });
        //山4
        part1mount4 = createSprite("../images/mount4.png",{
            x:1031,
            y:440
        });
        part1.addChild(bgimg,part1mount2,part1mount1,part1t1,part1t2,part1t3,part1t4,part1t5,part1car,part1gas,part1tittleCont,part1tittleMask,part1bird2,part1bird1,part1mount4,part1mount3,part1trees);

        part2 = new PIXI.Container();
        part2.x = 1815;
        part2.y = 0;
        part2.width = 2488;
        part2.height = 750;

        bgimg2 = createSprite("../images/bg2.jpg",{
            x:0,
            y:0
        });

        //团1
        part2tuan1Cont = new PIXI.Container();
        part2tuan1Cont.x = -511;
        part2tuan1Cont.y = 0;

        part2tuan1 = createSprite("../images/tuan1.png",{
            x:0,
            y:0
        });
        //团1 透明遮罩
        part2tuan1Mask = new PIXI.Container();
        part2tuan1Mask.x = 0;
        part2tuan1Mask.y = 0;
        // part2tuan1Mask.pivot.x = 700;
        // part2tuan1Mask.pivot.y = 0;
        part2tuan1Mask.scale.x = 0;
        part2tuan1Mask.scale.y = 0;

        part2tuan1Maskshape = new PIXI.Graphics();
        part2tuan1Maskshape.beginFill("0xOFOFOF","1");
        part2tuan1Maskshape.drawCircle(0,0,850);
        part2tuan1Maskshape.endFill();
        part2tuan1Mask.addChild(part2tuan1Maskshape);
        part2tuan1Cont.mask = part2tuan1Maskshape;
        //团1 风景背景

        part2tuan1BgCont = new PIXI.Container();
        part2tuan1BgCont.x = -53;
        
        part2landMask = createSprite("../images/tuan1-2.png",{
           x:0,
            y:0
        });

        part2tuan1landBg = createSprite("../images/tuan1-3.png",{
           x:-200,
            y:0
        });
        part2tuan1landBg.mask = part2landMask;
        part2tuan1BgCont.addChild(part2landMask,part2tuan1Mask,part2tuan1landBg);
        part2tuan1Cont.addChild(part2tuan1,part2tuan1BgCont)
        
        //点1 
        point = createSprite("../images/point1.png",{
            x:196,
            y:760,
         });
        //文1
        wen1 = createSprite("../images/wen1.png",{
            x:208,
            y:459,
            alpha:0
         });
        //广
        guang = createSprite("../images/landt1-1.png",{
            x:280,
            y:278,
            alpha:0
         });
         //西
         xi = createSprite("../images/landt1-2.png",{
            x:548,
            y:278,
            alpha:0
         });
         gxcloud = createSprite("../images/cloud.png",{
            x:503,
            y:332,
         });
         gxmount = createSprite("../images/gxmount.png",{
            x:488,
            y:109,
         });
         gxmount2 = createSprite("../images/gxmount2.png",{
            x:379,
            y:268,
         });

        //团2
        part2tuan2Cont = new PIXI.Container();
        part2tuan2Cont.x = 888;
        part2tuan2Cont.y = 271;

        part2tuan2 = createSprite("../images/tuan2-1.png",{
            x:0,
            y:0
        });
        //团2 透明遮罩
        part2tuan2Mask = new PIXI.Container();
        part2tuan2Mask.x = 0;
        part2tuan2Mask.y = 0;
        part2tuan2Mask.scale.x = 0;
        part2tuan2Mask.scale.y = 0;

        part2tuan2Maskshape = new PIXI.Graphics();
        part2tuan2Maskshape.beginFill("0xOFOFOF","1");
        part2tuan2Maskshape.drawCircle(700,700,850);
        part2tuan2Maskshape.endFill();
        part2tuan2Mask.addChild(part2tuan2Maskshape);
        part2tuan2Cont.mask = part2tuan2Maskshape;
        //团2 风景背景

        part2tuan2BgCont = new PIXI.Container();
        part2tuan2BgCont.x = -53;
        
        part2land2Mask = createSprite("../images/tuan2-2.png",{
           x:0,
            y:0
        });

        part2tuan2landBg = createSprite("../images/tuan2-3.png",{
           x:-200,
            y:0
        });
        part2tuan2landBg.mask = part2land2Mask;
        part2tuan2BgCont.addChild(part2land2Mask,part2tuan2Mask,part2tuan2landBg);
        part2tuan2Cont.addChild(part2tuan2,part2tuan2BgCont)

        //云南云1
        part2cloud2 = createSprite("../images/cloud.png",{
            x:1029,
            y:117,
         });
         part2cloud2.scale.x = 1.2;
         part2cloud2.scale.y = 1.2;
        //云南三棵树
        part2trees = createSprite("../images/threetree.png",{
            x:2150,
            y:910,
            rotation: -1.5,
        });
        part2trees.pivot.set(0,410)
        //云南点
        point2 = createSprite("../images/point2.png",{
            x:1782,
            y:760,
         });
         yun = createSprite("../images/yun.png",{
            x:1900,
            y:82,
            alpha:0
         });
        nan = createSprite("../images/nan.png",{
            x:2100,
            y:82,
            alpha:0
         });
        wen2 = createSprite("../images/wen2.png",{
            x:1855,
            y:211,
            alpha:0
         });
         mount5 = createSprite("../images/mount5.png",{
            x:1780,
            y:375,
         });

        part2.addChild(bgimg2,mount5,gxmount,part2tuan1Mask,part2tuan1Cont,point,wen1,guang,xi,gxmount2,gxcloud,part2tuan2Cont,part2cloud2,part2trees,point2,yun,nan,wen2);
        container.addChild(part1,part2)
        app.stage.addChild(container);
        init();
    });
}


// 横竖屏旋转
function changeScene(){
        iniW = 1624,
        iniH = 750,
        tarW = 0,
        tarH = 0;
    ww = $(window).width();
    wh = $(window).height();
    // if("onorientationchange" in window){
    // if(netease.ua.weixin){
    //     if(window.orientation === 90 || window.orientation === -90){
    //         // 横屏 浏览器的宽度大于高度
    //         h();
    //     }
    //     if(window.orientation === 180 || window.orientation === 0){
    //         // 竖屏 浏览器的宽度小于高度
    //         v();
    //     }
    // }else{
        if(ww < wh){
            // 竖屏
            v();
        }else{
            // 横屏
            h();
        }
    // }
}

// 横屏
function h(){
    console.log("heng")
    setTimeout(function(){
        ww = $(window).width();
        wh =$(window).height();
        tarW = ww;
        tarH = tarW*iniH/iniW;

        $(".main").css({
            'left':"50%",
            'top':'50%',
            'width':ww + 'px',
            'height':wh + 'px',
            'transform':'translate3d(-50%,-50%,0)',
            '-webkit-transform':'translate3d(-50%,-50%,0)'
        });
        if(!(typeof scroller == "undefined")){
            app.renderer.resize(ww,wh);
            setTimeout(function(){
                scrollDirection = "left";
                lastWidth = ww;
                contentLength = 4303+lastWidth-1620;
                scroller.setDimensions(app.view.width, app.view.height, contentLength ,app.view.height);
                scroller.scrollTo(scrollPro,0,false);
                
            },200);
        }
    },300);
}
// 竖屏
function v(){
    screenOrientation = "horizontal";
    setTimeout(function(){
        ww = $(window).width();
        wh =$(window).height();
        tarW = wh;
        tarH = tarW*iniH/iniW;
        $(".main").css({
            'left':"50%",
            'top':'50%',
            'width':wh + 'px',
            'height':ww + 'px',
            'transform':'translate3d(-50%,-50%,0) rotate(90deg)',
            '-webkit-transform':'translate3d(-50%,-50%,0) rotate(90deg)'
        });
        if(!(typeof scroller == "undefined")){
            app.renderer.resize(wh,ww);
            setTimeout(function(){
                scrollDirection = "top";
                lastWidth = wh;
                contentLength = 4303+lastWidth-2050;
                scroller.setDimensions(app.view.width, app.view.height, app.view.height, contentLength);
                scroller.scrollTo(0,scrollPro,false);
                // 初始页提示
            },200);
        }
    },300);
}

// 区间最小值, 区间最大值, top, 初始位置, 终点, 速度, 方向
function scrollNum(minNum,maxNum,top,start,end){
    return start + ((top - minNum)/(maxNum - minNum)*(end-start));
}

// 创建序列帧动画
function createAnimatedSprite(name, num, opt, start) {
    // 用json 资源创建一个 AnimatedSprite 对象
    var Textures = [],
        i, AnimatedSpriteInstance;
    i = start || 0;
    for (; i < num; i++) {
        var Texture = PIXI.Texture.fromImage(name + i + '.png');
        Textures.push(Texture);
    }
    AnimatedSpriteInstance = new PIXI.extras.AnimatedSprite(Textures);
    if (opt) {
        _.forIn(opt, function(value, key) {
            AnimatedSpriteInstance[key] = value;
        });
    }
    return AnimatedSpriteInstance;
}

// 创建sprite对象
function createSprite(name,opt){
    var newSprite = new PIXI.Sprite.fromImage(name);
    if (opt) {
        _.forIn(opt, function(value, key) {
            newSprite[key] = value;
        });
    }
    return newSprite;
}

// loading
function loadingFn(imgs,callback){
    if(!imgs){return false};
    var img=[];
    var len=imgs.length;
    var loadedCount = 0;
    for(var i=0;i<len;i++){
        img[i]=new Image();
        img[i].src=imgs[i];
        img[i].onload = function(){
            loadedCount++;
            // $('.loading-num').html(Math.floor(loadedCount/len*100)+"%").attr('title',Math.floor(loadedCount/len*100));
            if (loadedCount>=len){
                // $('.loading-wrap').fadeOut(700,function(){
                //     $(this).remove();
                // });
                // callback ? callback() : null;
            }
        };
    }
}
