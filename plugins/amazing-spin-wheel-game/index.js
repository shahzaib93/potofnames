var React = require('react');
const { default: ReactHowler } = require('react-howler');
import img from "../../public/logo.jpg"
var WheelComponent = function WheelComponent(_ref) {
  // console.log(_ref.segments);
  const {shouldWeSpin, setShouldWeSpin} = _ref;
  const [sound, setSound] = React.useState(false);
  const [LogoImg, setLogoImg] = React.useState("");
  const [ArrowImg, setArrowImg] = React.useState("");


{/* <ReactHowler src="/wheel-spin.mp3" playing={true}/> */}

{/* <img id="myImage" src={imge}/> */}
  var segments = _ref.segments,
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

  var _useState = React.useState(false),
      isFinished = _useState[0],
      setFinished = _useState[1];

  var timerHandle = 0
  var timerManualDelay = 50
  if(spinSeconds > 60){
    timerManualDelay = 60
  }
  // spinSeconds
  var timerDelay = (segments.length < timerManualDelay  ? timerManualDelay : segments.length);
  var angleCurrent = 0
  var angleDelta = 0
  var canvasContext = null
  // var maxSpeed = Math.PI / (segments.length);
  var maxSpeed = 4
  console.log(`Total segments ${segments.length}`)
  console.log(`Max speed ${maxSpeed}`)
  console.log(`Timer delay ${timerManualDelay}`)
  var upTime = segments.length * upDuration
  var downTime = segments.length * downDuration
  var spinStart = 0
  var frames = 0
  var centerX = 300
  var centerY = 300

  React.useEffect(function () {
    wheelInit();
  }, [segments]);

  React.useEffect(() => {
    if(shouldWeSpin) {
      // console.log("shouldspin",shouldWeSpin)
      setSound(true)
      wheelInit();
      spin();
      setShouldWeSpin(false);
      // setSound(false)
    }
  }, [shouldWeSpin])

  // React.useEffect(() => {
  //     wheelInit();
  // },[])

  var wheelInit = function wheelInit() {
    initCanvas();
    wheelDraw();
  };

  var initCanvas = function initCanvas() {
    var canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');

    // var background = new Image();
    // background.src = "../wheel_frame.png";
    // canvasContext.drawImage(background,100,100,4000,2770);  

    // var spinBtn = document.getElementById('spinBtn');
    // console.log("33333");
    // spinBtn.addEventListener('click', spin, false);
  };

  var spin = function spin() {
    console.log("spinning")
    isStarted = true;

    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  var onTimerTick = function onTimerTick() {
    frames++;
    draw();
    var duration = new Date().getTime() - spinStart;
    console.log(`duration ${duration}`);
    var progress = 0;
    var finished = false;

    if (duration < upTime) {

      progress = duration / upTime;
      console.log(`progress ${progress}`)
      console.log(`upTime ${upTime}`)
      angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2)
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
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
      console.log(`progress ${progress}`);
    }

    angleCurrent += angleDelta;
    while (angleCurrent >= Math.PI * 2) {
      angleCurrent -= Math.PI * 2;
    }

    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  var wheelDraw = function wheelDraw() {
    clear();
    drawWheel();
    drawNeedle();
  };

  var draw = function draw() {
    clear();
    drawWheel();
    drawNeedle();
  };

  var drawSegment = function drawSegment(key, lastAngle, angle) {
    
    var ctx = canvasContext;
    
    var value = segments[key];
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
  };

  var drawWheel = function drawWheel() {

    
    var ctx = canvasContext;
    
    var lastAngle = angleCurrent;
    var len = segments.length;
    var PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '1em ' + fontFamily;
    

    for (var i = 1; i <= len; i++) {
      var angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    // ctx.fillStyle = primaryColor;
    ctx.lineWidth = 10;
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

    setLogoImg(localStorage.getItem("CenterLogo"))
    var ctx = canvasContext;
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = contrastColor;
    // ctx.fileStyle = contrastColor;
    // ctx.beginPath();
    // ctx.moveTo(centerX + 20, centerY - 50);
    // ctx.lineTo(centerX - 20, centerY - 50);
    // ctx.lineTo(centerX, centerY - 70);
    // ctx.closePath();
    // ctx.fill();
    var change = angleCurrent + Math.PI / 2;
    var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;
    if (i < 0) i = i + segments.length;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 1.5em ' + fontFamily;
    currentSegment = segments[i];
    isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
    var img = new Image()
    var arrow = new Image()
    if(localStorage.getItem("ArrowImage")!=undefined){
      arrow.src = localStorage.getItem("ArrowImage")
    }
    else{
    arrow.src = "arrow.png"}
    if(LogoImg!="" && LogoImg != null){
      img.src = LogoImg
    }
    else{
    img.src = "roundlogo.png"}
    // ctx.globalCompositeOperation='destination-over';
    ctx.drawImage(arrow,232,-55,150,160)
    ctx.drawImage(img,centerX-50,centerY-50,100,100)
  };

  var clear = function clear() {
    var ctx = canvasContext;
    ctx.clearRect(0, 0, 1000, 800);
  };

  return React.createElement("div", {
    id: "wheel",
  }, React.createElement("canvas", {
    id: "canvas",
    width: "590",
    height: "590",
    style: {
      marginTop: "42px",
      marginLeft: "39px",
      pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
    }
  }));
};

module.exports = React.memo(WheelComponent);