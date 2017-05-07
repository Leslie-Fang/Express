var main=function(evt){
    var bodyarea=document.querySelector("body");
    var begindiv = document.createElement("div");
    begindiv.classList.add("beginDiv");
    begindiv.innerHTML="<button class='loginButton'>welcome</button>";
  //  bodyarea.appendChild(begindiv);
};

document.addEventListener('DOMContentLoaded', main);
