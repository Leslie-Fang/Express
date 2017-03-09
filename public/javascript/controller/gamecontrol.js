var canvas = null;
var context = null;
var img = null;
var frameRate = 1000/30;
var frame = 0;
var frames = [];
var assets = [];
for (var i=0; i<19;i++){
  if(i<10){
    i = "0"+i;
  }
  assets.push("/images/robots/"+i+".png");
}

setup = function(){
  canvas = document.getElementById('my_canvas');
  canvas.width = 1200;
  canvas.height = 700;
  //canvas.getContext() is the build in method
  //could be used to draw lots of pics 
  context = canvas.getContext('2d');

  /*img = new Image();
  img.onload = onImageLoad;
  img.src = "images/ralphyrobot.png";*/
  for (var i =0;i<assets.length;i++){
    frames.push(new Image());
    frames[i].onload = onImageLoad;
    frames[i].src = assets[i];
  }
  setInterval(animate,frameRate); 
}
onImageLoad = function(){
  console.log("loading each image in the frames for the invoke of animate!");
  //context.drawImage(img,192,192);
}

animate = function(){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(frames[frame],192,192);
  frame = (frame+1)%frames.length;
}
setup();