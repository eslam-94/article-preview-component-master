const share = document.querySelector(".share-bg");
const popUp = document.querySelector(".popup");
const svg = document.querySelector("svg path");

function toggle() {
  if (popUp.style.visibility === "hidden") {
   popUp.style.visibility = "visible";
   svg.attributes.fill.nodeValue = "#ECF2F8";
   share.style.background = "hsl(214, 17%, 51%)";
   if(window.innerWidth <= 800){
     share.style.position = "relative";
     share.style.top = "7px";
   }
  } else {
   popUp.style.visibility = "hidden";
   svg.attributes.fill.nodeValue = "#6D7683";
   share.style.background = "hsl(210, 46%, 95%)";
   share.style.position = "relative";
   share.style.top = "0";
  };
};

share.addEventListener("click", toggle);
