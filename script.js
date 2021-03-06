var rellax = new Rellax('.rellax');

/* birds */
const birds = document.querySelectorAll(".bird-container");

document.addEventListener("scroll", function(){
    for (bird of birds){
      bird.style.animationIterationCount = "initial";
    }
})

/* show header background on scroll up IMPORTANT*/

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      document.querySelector(".header").style.background= "transparent";
   } else {
    document.querySelector(".header").style.background= "white";
   }
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);





//show divs on scroll

$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  
  $(window).scroll( function(){

    if ($(window).scrollTop() === 0) {
      /* $('.title').addClass('sticky-header');*/
      $('.header').css('background', "transparent");
    } 
      /* Check the location of each desired element */
      $('.project').each( function(i){
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object-450){
              $(this).animate({'opacity':'1'},300);
              
                  
          } 
      }); 
  
  });
  
});


/* TIMER SCROLL MORE */
var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);  
        document.querySelector(".sociale").style.opacity = "0.3"; 
          
    }
    timer = setTimeout(function() {
      document.querySelector(".sociale").style.opacity = "1"; 
    }, 50);
}, false);

/* scroll menu */

document.onscroll = function(){ 
  var pos = getVerticalScrollPercentage(document.body);
}; 

function getVerticalScrollPercentage( elm ){
    var p = elm.parentNode,
        pos = (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
        document.querySelector(".bal").style.top = Math.round(pos) + "%";
      };
     

/* hover videos */

 var figure = $(".project").hover(hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


/* darkmode 


document.querySelector("#darkMode").addEventListener("click", function(){
  changeColor()
});

function changeColor()
{
    if (document.body.style.backgroundColor == "white"){
      console.log("two");
      document.querySelector("#darkMode").style.color="red";
      document.querySelector("html").style.color="red";
      document.querySelector(".title").style.color="red";
      document.querySelector(".left a").style.color="red";
      document.querySelector(".right a").style.color="white";
      document.querySelector(".right").style.color="white";
      document.querySelector("footer").style.color="white";
      document.querySelector("footer").style.borderColor="white";
      document.querySelector(".line-down p").style.color="white";
    }
};

*/


function getScrollTop(){
  if(typeof pageYOffset!= 'undefined'){
      //most browsers except IE before #9
      return pageYOffset;
  }
  else{
      var B= document.body; //IE 'quirks'
      var D= document.documentElement; //IE with doctype
      D= (D.clientHeight)? D: B;
      return D.scrollTop;
  }
}

document.querySelector("#darkMode").addEventListener("click", function(){
  if (document.querySelector("html").style.backgroundColor=== "rgb(242, 243, 227)"){
    document.querySelector("html").style.backgroundColor = "rgb(41, 43, 42)";
    document.querySelector("footer").style.backgroundColor = "rgb(41, 43, 42)";
    document.querySelector("html").style.color = "rgb(150, 189, 182)";
    document.querySelector(".bal").style.backgroundColor = "white";
    document.querySelector(".scroll").style.backgroundColor = "rgb(150, 189, 182)";
    document.querySelector(".vertical-line").style.backgroundColor = "rgb(150, 189, 182)";
    const sociales = document.querySelectorAll(".sociale a");
    for (title of sociales){
      title.style.color = "rgb(150, 189, 182)";
    }
    const titles = document.querySelectorAll(".title p");
    for (title of titles){
      title.style.color = "rgb(150, 189, 182)";
    }
    const headers = document.querySelectorAll(".header a");
    for (title of headers){
      title.style.color = "rgb(150, 189, 182)";
    }
    document.querySelector("html").style.borderColor = "rgb(150, 189, 182)";
    const middles = document.querySelectorAll(".project-middle");
    for (middle of middles){
      middle.style.backgroundColor = "rgb(41, 43, 42)";
      middle.style.color = "rgb(150, 189, 182)";
    }
    const borders = document.querySelectorAll("div");
    for (middle of borders){
      middle.style.borderColor = "rgb(150, 189, 182)";
    }
    document.querySelector("footer").style.borderColor = "rgb(150, 189, 182)";
    document.querySelector("footer").style.color = "rgb(150, 189, 182)";
  } 
  else {
    document.querySelector(".bal").style.backgroundColor = "black";
    document.querySelector(".scroll").style.backgroundColor = "black";
    document.querySelector("html").style.backgroundColor = "rgb(242, 243, 227)";
    document.querySelector("html").style.color = "black";
    document.querySelector(".header").style.color = "black";
    document.querySelector(".sociale").style.color = "black";
    document.querySelector("html").style.borderColor = "rgba(0, 0, 0, 0.301)"
    const middles = document.querySelectorAll(".project-middle");
    for (middle of middles){
      middle.style.backgroundColor = "rgb(242, 243, 227)";
      middle.style.color = "black";
  }
    const sociales = document.querySelectorAll(".sociale a");
    for (title of sociales){
      title.style.color = "black";
    }
    const titles = document.querySelectorAll(".title p");
    for (title of titles){
      title.style.color = "black";
    }
    const headers = document.querySelectorAll(".header a");
    for (title of headers){
      title.style.color = "black";
    }
    document.querySelector("html").style.borderColor = "black";
    const borders = document.querySelectorAll("div");
    for (middle of borders){
      middle.style.borderColor = "black";
    }
    document.querySelector("footer").style.backgroundColor = "rgb(242, 243, 227)";
    document.querySelector("footer").style.borderColor = "black";
    document.querySelector("footer").style.color = "black";
}});

document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty('--x',(e.clientX)+'px');
  document.documentElement.style.setProperty('--y',(e.clientY)+'px');

  const banners = document.querySelectorAll(".banner div a");
  for (item of banners){
    item.style.right = Math.max(200- 0.30*e.clientX) + "px",0;}
  const spans = document.querySelectorAll(".banner div span");
  for (span of spans){
    span.style.right = Math.max(200- 0.30*e.clientX) + "px",0;
  } 
}

const projectsHeight = $(".projects").height()+200;

$(".vertical-line").css("height", projectsHeight + "px");

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.scroll').css('height','200.5px');
  } else {
    $('.scroll').css('height','45%');
  }
});