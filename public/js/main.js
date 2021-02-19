// Jquery
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href="#"]').on('click', function () {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        duration: 1500,
        once: true
    });
});

// Javascript
var svg1 = document.getElementById('svg5794');
var svgPath1 = svg1.getElementsByTagName('path');
// var myGradient = document.getElementById('myGradient')
// console.log(myGradient);
// //function that takes the svg path, svg mouseover fill
const honeyCombBG = (path, fill) => {
    for (var i  = 0; i < path.length; i++) {
        path[i].style['fill'] = 'rgba(255, 255, 255, 0)';
        path[i].style['stroke'] = 'rgba(232,232,232, 1)';
        path[i].style["stroke-width"] = ".785";
        path[i].style["stroke-opacity"] = ".225";
        
        path[i].onmouseover = function(e) {
          var color = '#'+ Math.floor(Math.random()*16777215).toString(16);
          this.setAttribute("fill", "#5cceee");
          this.style["stroke"] = color;
          this.style["stroke-opacity"] = ".30";
          this.style["stroke-width"] = "1.5";
        }  
        path[i].onmouseout = function(e) {
            this.style["fill"] = 'rgba(255, 255, 255, 0)';
            this.style["stroke"] = 'rgba(232,232,232, 1)';
            this.style["stroke-opacity"] = '.225';
            this.style["stroke-width"] = '.785';
        }
    } 
}
var bg1 = honeyCombBG(svgPath1, 'rgba(255, 255, 255, 0)');