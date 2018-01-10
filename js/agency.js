(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: $('#mainNav').height()
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogo.png');
            $(".navbar-toggler i").css('font-size', '1.5em');
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogoWhite.png');
            $(".navbar-toggler i").css('font-size', '2em');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('ul.timeline>li').addClass('lightSpeedIn animated');
        }
    });


    // backgrounds to slider
    $('.carousel-item').each( function(index, element) {
        element = $(element);
        var bgPos = element.attr('data-bg-pos');
        var bg = element.attr('data-bg');

        element.css('background-image', 'url("'+bg+'")');
        
        if (bgPos !== undefined) {
            element.css('background-position', bgPos);
        }
    });

    // Datatables
    $('.dataTable').DataTable({
        language: {
            search: "Buscar ",
            paginate: {
                next: 'Sig',
                previous: 'Prev'
            },
            infoEmpty: 'Viendo 0 de 0 registros',
            emptyTable: 'No hay registros en la tabla',
            info: "<em><small>Mostrando _START_ a _END_ de _TOTAL_ registros</small></em>",
            lengthMenu: "Ver _MENU_ registros"
        }
    });

    $('#filter_table').DataTable();
    $('#buttons_table').DataTable({
        dom: 'flBrtip',
        buttons: [
            {
                extend: 'copy',
                'text': 'Copiar'

            },
            'pdf',
            'excel'
        ],
        language: {

            search: "Buscar ",
            paginate: {
                next: 'Sig',
                previous: 'Prev'
            },
            infoEmpty: 'Viendo 0 de 0 registros',
            emptyTable: 'No hay registros en la tabla',
            info: "<em><small>Mostrando _START_ a _END_ de _TOTAL_ registros</small></em>",
            lengthMenu: "Ver _MENU_ registros"
        }
    });

    // Collapse
    var group = $('#tablesGroup');
    var samples = $('#samples-tab');
    group.on('show.bs.collapse','.collapse', function() {
        group.find('.collapse.show').collapse('hide');
    });
    samples.on('click', function () {
        group.find('.collapse.show').collapse('hide');
    });

})(jQuery); // End of use strict

//////////////////////////////////////// variables





var svg = document.getElementById('svg');
var dotMatrix = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
var dots = [];
var lineMatrix = document.createElementNS("http://www.w3.org/2000/svg", 'line');
var lines = [];
var dotNumber = 300;
var lineNumber = 5;

var screenW;
var screenH;
var dotColumns;
var dotRows;
var dotRandomMax = 2;

var mouseMoving = false;
var mouse = {};
    mouse.distances = [];
    mouse.power = 10;





//////////////////////////////////////// init


function init() {
  console.log('--- init')
  screenW = window.innerWidth;
  screenH = window.innerHeight;

  dotRows = Math.sqrt(dotNumber * (screenH / screenW));
  dotColumns = dotNumber / dotRows;
  var dotPosStepX = Math.round(screenW / dotColumns);
  var dotPosStepY = Math.round(screenH / dotRows);
  dotRows = Math.round(dotRows);
  dotColumns = Math.round(dotColumns);
  console.log('--- calc done');




  for (i = 0, j = 0, k = 0; i < dotNumber; i++, k++) {
    if (i % dotColumns === 0) {
      j++;
      k = 0;
    }
    
    dots[i] = {};
    dots[i].distances = [];
    dots[i].el = dotMatrix.cloneNode(false);
    dots[i].X = k * dotPosStepX + dotPosStepX / 2;
    dots[i].X += Math.floor((Math.random() * dotRandomMax) + 1 - dotRandomMax / 2);
    dots[i].Y = j * dotPosStepY - dotPosStepY / 2;
    dots[i].Y += Math.floor((Math.random() * dotRandomMax) + 1 - dotRandomMax / 2);
    dots[i].r = 1;
    dots[i].lines = [];
    dots[i].el.setAttribute('cx', dots[i].X);
    dots[i].el.setAttribute('cy', dots[i].Y);
    dots[i].el.setAttribute('r', dots[i].r);
    
    svg.appendChild(dots[i].el);
    
    for(l=0;l<lineNumber;l++) {
      dots[i].lines[l] = {};
      dots[i].lines[l].el = lineMatrix.cloneNode(false);
      dots[i].lines[l].X1 = dots[i].X;
      dots[i].lines[l].Y1 = dots[i].Y;
      dots[i].lines[l].X2 = dots[i].X;
      dots[i].lines[l].Y2 = dots[i].Y;
      dots[i].lines[l].el.setAttribute('x1', dots[i].lines[l].X1);
      dots[i].lines[l].el.setAttribute('y1', dots[i].lines[l].Y1);
      svg.appendChild(dots[i].lines[l].el);
    }
  }
  console.log('--- dots positioned');

}

function destroy(){
  
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
}
  dots.length = 0;
  lines.length = 0;
  console.log('--- destroying')
}

init();

//////////////////////////////////////// update dots and lines position





function dotUpdate() {
  for (i=0;i<dotNumber;i++) {
    dots[i].el.setAttribute('cx', dots[i].X);
    dots[i].el.setAttribute('cy', dots[i].Y);
    dots[i].el.setAttribute('r', dots[i].r);
    for(l=0;l<lineNumber;l++) {
      dots[i].lines[l].el.setAttribute('x1',dots[i].lines[l].X1);
      dots[i].lines[l].el.setAttribute('y1',dots[i].lines[l].Y1);
      dots[i].lines[l].el.setAttribute('x2',dots[i].lines[l].X2);
      dots[i].lines[l].el.setAttribute('y2',dots[i].lines[l].Y2);
    }
  }
}





//////////////////////////////////////// helpers





function getDistance(obj1, obj2) {
  return Math.floor(Math.sqrt(Math.pow((obj1.X - obj2.X), 2) + Math.pow((obj1.Y - obj2.Y), 2)));
}

function Comparator(a, b) {
   if (a[1] < b[1]) return -1;
   if (a[1] > b[1]) return 1;
   return 0;
 }





//////////////////////////////////////// movement function





function moveDots(){
  for (i=0;i<dotNumber;i++) {
    dots[i].X += Math.floor((Math.random() * 5)  - 2);
    dots[i].Y += Math.floor((Math.random() * 5)  - 2);
    for (j=0;j<dotNumber;j++) {
      dots[i].distances[j] = [j , getDistance(dots[i], dots[j])];
    }
    dots[i].distances = dots[i].distances.sort(Comparator);
     for(k=0;k<lineNumber;k++) {
        dots[i].lines[k].X1 = dots[i].X;     
        dots[i].lines[k].Y1 = dots[i].Y;
        dots[i].lines[k].X2 = dots[dots[i].distances[k][0]].X;     
        dots[i].lines[k].Y2 = dots[dots[i].distances[k][0]].Y;
    }
  }
  dotUpdate();
}





//////////////////////////////////////// mouse interaction function




function mouseInteraction() {
  if(mouseMoving) {
  
    mouse.X = mouseX;
    mouse.Y = mouseY;
    
    for (i=0;i<dotNumber;i++) {
      dots[i].r = 1;
      mouse.distances[i] = [i, getDistance(mouse, dots[i])];
    }
    mouse.distances = mouse.distances.sort(Comparator);
    
    for(j=0;j<mouse.power;j++) {
      
      var maxDist = mouse.distances[mouse.power-1][1];
      var thisDist = mouse.distances[j][1];
      dots[mouse.distances[j][0]].r = 2;
      
      if(mouseX >= dots[mouse.distances[j][0]].X) {
        dots[mouse.distances[j][0]].X -= (maxDist - thisDist)/15;
      } else {
        dots[mouse.distances[j][0]].X += (maxDist - thisDist)/15;
      }
      if(mouseY >= dots[mouse.distances[j][0]].Y) {
        dots[mouse.distances[j][0]].Y -= (maxDist - thisDist)/15;
      } else {
        dots[mouse.distances[j][0]].Y += (maxDist - thisDist)/15;
      }
      
    }
    
    mouseMoving = false;
  }
}





//////////////////////////////////////// listeners





var initInterval = setInterval(function(){
  moveDots();
  mouseInteraction();
}, 20);


svg.addEventListener('mousemove', function(e){
  mouseMoving = true;
  mouseX = e.pageX;
  mouseY = e.pageY - document.getElementById("portfolio").offsetTop;
});

window.addEventListener('resize', function(){
  destroy();
  init();
});

