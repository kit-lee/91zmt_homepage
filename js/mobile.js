
 /*var html=" <iframe height=\'100%\' width=\'100%\' src=\"http://player.youku.com/embed/XMTMwMDE1MDk2MA==?isAutoPlay=true\" frameborder=0 allowfullscreen id=\"video1\" ></iframe>";*/


      var showPlayer = function(){
    playVideo();
    var dic = document.getElementById("play-img");
    dic.style.display = "none";
  var cvb = document.getElementById("home-btn");
  cvb.style.display = "block";
};
var playVideo = function(){
  var iframe = document.getElementById("91zmt-video");
  //iframe.src = "http://v.qq.com/iframe/player.html?vid=z0161tg7wfm&tiny=0&auto=0";
  //iframe.src = "http://player.youku.com/embed/XMTMwMDE1MDk2MA==";
  iframe.src = "http://ctpfc.sinaapp.com/youkufull.php?vid=XMTMwMDE1MDk2MA==&qua=mp4";
  iframe.style.position = "absolute";
  var w = window.innerWidth;
  var h = w*(3/4);
  iframe.style.top= (window.innerHeight-h) / 2 + "px";
  iframe.style.left = (window.innerWidth - w) / 2 + "px";
  iframe.style.width = w + "px";
  iframe.style.height = h + "px";
  iframe.width = w;
  iframe.height = h;
  iframe.style.display = "block";
  iframe.setAttribute("autoplay" , "autoplay");
  var videoPanel = document.getElementById("91zmt-video-panel");
  videoPanel.style.display = "block";
};
var hidePlayer = function(){
  var videoPanel = document.getElementById("91zmt-video-panel");
  videoPanel.style.display = "none";
  var iframe = document.getElementById("91zmt-video");
  iframe.src = "";
  iframe.removeAttribute("autoplay");
  iframe.style.display = "none";
  var cvb = document.getElementById("home-btn");
  cvb.style.display = "none";
  var dic = document.getElementById("play-img");
  dic.style.display = "block";
};






             



