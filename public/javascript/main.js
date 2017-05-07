var main=function(evt){
  //  var SVGarea=document.getElementById("s-text");
    var bodyarea=document.querySelector("body");
    var begindiv = document.createElement("div");
    begindiv.classList.add("beginDiv");
    begindiv.innerHTML="<button class='loginButton'>Welcome</button>";
    //bodyarea.appendChild(begindiv);
};

document.addEventListener('DOMContentLoaded', main);
