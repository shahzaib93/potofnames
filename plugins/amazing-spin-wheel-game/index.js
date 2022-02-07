var React = require('react');
const { default: ReactHowler } = require('react-howler');
var WheelComponent = function WheelComponent(_ref) {
  const {shouldWeSpin, setShouldWeSpin} = _ref;
  const [sound, setSound] = React.useState(false);
  const [LogoImg, setLogoImg] = React.useState("");
  const [ArrowImg, setArrowImg] = React.useState("");
  const [NormalStop, setNormalStop] = React.useState(false);
  const [css,setCss] = React.useState("")

  var segments = _ref.segments,
      startNormalSpin = _ref.startNormalSpin,
      entriesToShow = _ref.entriesToShow,
      spinSeconds = _ref.spinSeconds,
      segColors = _ref.segColors,
      winningSegment = _ref.winningSegment,
      onFinished = _ref.onFinished,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor,
      _ref$contrastColor = _ref.contrastColor,
      contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor,
      _ref$isOnlyOnce = _ref.isOnlyOnce,
      isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 290 : _ref$size,
      _ref$upDuration = _ref.upDuration,
      upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration,
      _ref$downDuration = _ref.downDuration,
      downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;
  var currentSegment = '';
  var isStarted = false;
  var newsegments = segments
  var  remainingsegments = segments


  if(entriesToShow+1<segments.length && entriesToShow>9){
    newsegments = segments.slice(0,entriesToShow)
       remainingsegments = segments.slice(entriesToShow+1,segments.length)
     
     }

  var NormalDelay = 100

    // // console.log("ENTRIESSSSS",newsegments)
  var _useState = React.useState(false),
      isFinished = _useState[0],
      setFinished = _useState[1];

  var timerHandle = 0
  var timerHandleNormal = 0
  var timerManualDelay = 50
  if(spinSeconds > 60){
    timerManualDelay = 60
  }
  // spinSeconds
  var timerDelay = (newsegments.length < timerManualDelay  ? timerManualDelay : newsegments.length);
  var timerDelayNormal = newsegments.length
  var angleCurrent = 0
  var angleDelta = 0
  var angleCurrentNormal = 0
  var angleDeltaNormal = 0
  var maxSpeedNormal = 0.008

  var canvasContext = null
  // var maxSpeed = Math.PI / (newsegments.length);
  var maxSpeed = 4
  // // console.log(`Total newsegments ${newsegments.length}`)
  // // console.log(`Max speed ${maxSpeed}`)
  // // console.log(`Timer delay ${timerManualDelay}`)
  var upTime = newsegments.length * upDuration
  var downTime = newsegments.length * downDuration
  var spinStart = 0
  // var spinStartNormal = 0

  var frames = 0
  var framesNormal = 0

  var centerX = 300
  var centerY = 300

 

  React.useEffect(()=>
  {
    // console.log("NEWSEGS",newsegments)
    wheelInit()
    // spinNormal()
  // console.log("CALEED")
  },
  [newsegments]);


  React.useEffect(()=>{
    // window.location.reload()
    
    if(entriesToShow+1<segments.length && entriesToShow>9){
      newsegments = segments.slice(0,entriesToShow)
      
         remainingsegments = segments.slice(entriesToShow+1,segments.length)
     
       
       }
    console.log("SEGMENTS",segments,newsegments,entriesToShow)

  },[entriesToShow,newsegments,segments])

  const FROMSTORE  = localStorage.getItem("NORMALSPINSTORE")

  React.useEffect(() => {
    
    if(startNormalSpin && !shouldWeSpin && JSON.parse(FROMSTORE)){
console.log("RunNormal")
      spinNormal()
    }

    if(shouldWeSpin) {
      NormalDelay = 0
      setNormalStop(true)
      startNormalSpin = false
        setSound(true)
        // wheelInit();
        spin()
        setShouldWeSpin(false);
    }
    
  }, [shouldWeSpin,startNormalSpin])

  // React.useEffect(() => {
  //     wheelInit();
  // },[])

  var wheelInit = function wheelInit() {
    
    const myimg = new Image
    if(LogoImg!="" && LogoImg != null){
      myimg.src = LogoImg
    }
    else{
    myimg.src = "roundlogo.png"}

    initCanvas();
    wheelDraw(myimg);
    
    // spinNormal()
  };

  var initCanvas = function initCanvas() {
    var canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');

  }

  

  
  if(!shouldWeSpin){

  var spinNormal = function spinNormal() {
    
    // console.log("NORMALLY",NormalDelay,angleCurrentNormal,angleDeltaNormal)
    if (timerHandleNormal === 0) {
 
      if(!shouldWeSpin){
        setInterval(()=>onTimerTickNormal(), NormalDelay);
      }


    }
 
  };
}
  const counter = 1

  const count = 1
  const mainCount = 0

  function onTimerTickNormal() {
    
    // // console.log("THE TICKNORMAL",NormalDelay)


    var ctx = canvasContext;  
    
    var lastAngle = angleCurrentNormal;
    var len = newsegments.length;
    var PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '1em ' + fontFamily;
    
const fixedNoofSeg = 8
const fixedAngle = 4.8

// // // console.log("WHEELsegs",newsegments)
const num = 0

    for (var i = 1; i <= len; i++) {
      // // // console.log("WHEELlen")
      
      var angle = PI2 * (i / len) + angleCurrentNormal;
      // // // console.log("WHEELangleangle",angle)
      // // // console.log("WHEELin",i)
      const FROMSTORE  = localStorage.getItem("NORMALSPINSTORE")
    // // console.log("qqqq",JSON.parse(FROMSTORE))
      if(JSON.parse(FROMSTORE)){
        if(startNormalSpin){
          
      drawSegmentNormal(i - 1, lastAngle, angle);
    }
      lastAngle = angle;
    }
    // // // console.log("WHEELnum",num)

    angleCurrentNormal+=maxSpeedNormal
  
    while (angleCurrentNormal >= Math.PI * 2) {
      angleCurrentNormal -= Math.PI * 2;
    // // // console.log("angle-",angleCurrentNormal)

    }

  
  };
const fix = 8
  function drawSegmentNormal(key, lastAngle, angle) {
    

    var ctx = canvasContext;

    var value = newsegments[key];
    // // console.log("SEGSSSS",newsegments)

    if((Math.trunc(angleCurrentNormal)+6.02==6.02) && entriesToShow+1<segments.length && entriesToShow>9  ){

        newsegments[0] = remainingsegments[Math.floor(Math.random() * remainingsegments.length)]
        newsegments[1] = remainingsegments[Math.floor(Math.random() * remainingsegments.length)]
        
          mainCount+=1
      // }
      if(mainCount>7){
        count=1
        mainCount = 1
      }
      else{
        count+=1
      }
    }
  
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor;
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
    
    ctx.restore();
    function drawImageRot(img,x,y,width,height,deg){
      ctx.save()
      var rad = deg
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate(rad);
      ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height)
      ctx.restore();
  }
    var img = new Image()
    
    if(LogoImg!="" && LogoImg != null){
      img.src = LogoImg
    }
    else{
    img.src = "roundlogo.png"}
      drawImageRot(img,centerX-50,centerY-50,100,100,angleCurrentNormal)


  }
    
  };
  function spin() {
    
    startNormalSpin = false
    // // console.log("spinning")
    isStarted = true;

    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / newsegments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  function onTimerTick() {
    var myimg = new Image()
    
if(LogoImg!="" && LogoImg != null){
  myimg.src = LogoImg
}
else{
myimg.src = "roundlogo.png"}
    maxSpeedNormal=0
    timerDelayNormal = 0
    NormalDelay = 0
    angleDeltaNormal = 0
    angleCurrentNormal=0
    timerHandleNormal = 0
    frames++;
    draw(myimg);
    var duration = new Date().getTime() - spinStart;
    // // console.log(`duration ${duration}`);
    var progress = 0;
    var finished = false;

    if (duration < upTime) {

      progress = duration / upTime;
      // // console.log(`progress ${progress}`)
      // // console.log(`upTime ${upTime}`)
      angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2)
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > newsegments.length) {
          progress = duration / upTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
      }

      if (progress >= 1) finished = true;
      // // console.log(`progress ${progress}`);
    }

    angleCurrent += angleDelta;
    while (angleCurrent >= Math.PI * 2) {
      angleCurrent -= Math.PI * 2;
    }

    if (finished) {
      startNormalSpin = false
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  var wheelDraw = function wheelDraw(myimg) {
    clear();
    drawWheel(myimg);
    drawNeedle();
  };

  var draw = function draw(myimg) {
    clear();
    drawWheel(myimg);
    drawNeedle();
  };

  function drawSegment(key, lastAngle, angle,myimg) {
    var ctx = canvasContext;
   
    function drawImageRot(img,x,y,width,height,deg){
// console.log("ROUNDDDDD",img)
      ctx.save()
      var rad = deg
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate(rad);
      ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height)
      ctx.restore();
  }


    

    var value = newsegments[key];
    if((Math.trunc(angleCurrent)+6.02==6.02 || Math.trunc(angleCurrent)+6.03==6.03) && entriesToShow+1<segments.length && entriesToShow>9  ){
    newsegments[0] = remainingsegments[Math.floor(Math.random() * remainingsegments.length)]
    newsegments[1] = remainingsegments[Math.floor(Math.random() * remainingsegments.length)]
    
  }
  console.log("Value",value.substr(0,21))
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor;
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
    ctx.restore();
    drawImageRot(myimg,centerX-50,centerY-50,100,100,angleCurrent)

    

    
  };

  var drawWheel = function drawWheel(myimg) {
    var ctx = canvasContext;

    // var Wheelimg = new Image()
    // Wheelimg.src = "wheel_frame.png"
    // Wheelimg.onload = function(){
    // ctx.drawImage(Wheelimg,-50,-100,700,900)

    // }
    
    
    var lastAngle = angleCurrent;
    var len = newsegments.length;
    var PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '1em ' + fontFamily;
    
const fixedNoofSeg = 8
const fixedAngle = 4.8
// // console.log("WHEELsegs",newsegments)
// var img = new Image()
    
// if(LogoImg!="" && LogoImg != null){
//   img.src = LogoImg
// }
// else{
// img.src = "roundlogo.png"}
myimg.onload =function(){

    for (var i = 1; i <= len; i++) {
    
      var angle = PI2 * (i / len) + angleCurrent;
      // console.log("ROUNDDDDDED",myimg)
     
      drawSegment(i - 1, lastAngle, angle,myimg);
      lastAngle = angle;
    }
  
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    // ctx.fillStyle = primaryColor;
    ctx.lineWidth = 10;}
    ctx.strokeStyle = contrastColor;
    ctx.fill();
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillStyle = contrastColor;
    ctx.textAlign = 'center';
    // ctx.fillText(buttonText, centerX, centerY + 3);
    ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(centerX, centerY, size, 0, PI2, false);
    // ctx.closePath();
    // ctx.lineWidth = 10;
    // ctx.strokeStyle = primaryColor;
    // ctx.stroke();
    
    
  };

  var drawNeedle = function drawNeedle() {
    var arrow = new Image()
    
    var change;
    var ArrowPos = ""
    // // console.log("ARROW",ArrowPos)
    if(localStorage.getItem("ArrowPosition")!==null){
      ArrowPos=localStorage.getItem("ArrowPosition")
    }
    else{
      ArrowPos="At-3"
      change = angleCurrent

    }
    var ctx = canvasContext;
    arrow.onload = function(){
      function drawRotate12(){
        ctx.drawImage(arrow,225,-55,150,160)
        }
        function drawRotated3(){
        ctx.rotate(Math.PI/2)
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(arrow,centerX-75,-670,150,160)
        ctx.restore()
        }
        function drawRotated6(){
        ctx.rotate(Math.PI);
        ctx.drawImage(arrow,centerX-685,-650,170,160)
        ctx.restore()
        }
        function drawRotated9(){ 
        ctx.rotate(Math.PI*7/4.7);
        ctx.drawImage(arrow,-388,-50,170,160)
        ctx.restore()
        }
        if(ArrowPos=="At-12"){
                drawRotate12()
        }

        else if(ArrowPos=="At-6"){
                drawRotated6()
        }
        else if(ArrowPos=="At-9"){
                drawRotated9()      
        }
      else if(ArrowPos=="At-3"){
              drawRotated3()     
      }
    }
  //   if(!localStorage.getItem("ArrowImage")===null){
  //     arrow.src = localStorage.getItem("ArrowImage")
  //   }
  //   else{
  //   arrow.src = "arrow.png"
  // }
    if(ArrowPos=="At-12"){
     
      change = angleCurrent + Math.PI / 2;
}

else if(ArrowPos=="At-6"){
      
      change = angleCurrent + Math.PI*3 / 2;

}
else if(ArrowPos=="At-9"){
     
      change = angleCurrent + Math.PI;
      
}
else if(ArrowPos=="At-3"){
    
    change = angleCurrent
}


    // // // console.log("ARRR",change)
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = contrastColor;
    // ctx.fileStyle = contrastColor;
    // ctx.beginPath();
    // ctx.moveTo(centerX + 20, centerY - 50);
    // ctx.lineTo(centerX - 20, centerY - 50);
    // ctx.lineTo(centerX, centerY - 70);
    // ctx.closePath();
    // ctx.fill();
    // var change = angleCurrent + Math.PI / 2;

    var i = newsegments.length - Math.floor(change / (Math.PI * 2) * newsegments.length) - 1;
    if (i < 0) i = i + newsegments.length;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 1.5em ' + fontFamily;
    currentSegment = newsegments[i];
    isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
    // var img = new Image()
  
    
    
setLogoImg(localStorage.getItem("CenterLogo"))
    
    // ctx.drawImage(img,centerX-50,centerY-50,100,100)
  };

  var clear = function clear() {
    var ctx = canvasContext;
    ctx.clearRect(0, 0, 1000, 800);
  };

  
  return React.createElement("div", {
    id: "wheel"
  }, React.createElement("canvas", {
    id: "canvas",
    className:"CANVAS",
    width: "600",
    height: "600",
    style: {
      marginTop: "45px",
      marginLeft: "38px",
      pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto',
      
    },
  }));
};

module.exports = React.memo(WheelComponent);