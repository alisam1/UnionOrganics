/* Rotate img */ 

var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wow.init();




  /* View 
    document.getElementById("line");
      TweenLite.to(bar, 0.5, {width:"60px", height:"1px",  delay:1});
  
      document.getElementById("line1");
      TweenLite.to(bar1, 1, {width:"1px", height:"175px",  delay:1});

      document.getElementById("line2");
      TweenLite.to(bar2, 0.5, {height: "80px", width:" 1px",  delay:0.5});
  
      document.getElementById("line3");
      TweenLite.to(bar3, 1, {width:"65px", height:"1px",  delay:1});

      document.getElementById("line4");
      TweenLite.to(bar4, 1.5, {width:"1px", height:"70px",  delay:1.5});

      document.getElementById("line5");
      TweenLite.to(bar5, 0.5, {height: "170px", width: "1px", delay:0.5});
  
      document.getElementById("line6");
      TweenLite.to(bar6, 1, {width:"15px", height:"1px",  delay:1});

      document.getElementById("line7");
      TweenLite.to(bar7, 1.5, {width:"1px", height:"35px",  delay:1.5});

      document.getElementById("line8");
      TweenLite.to(bar8, 1.5, {width:"1px", height:"58px",  delay:1.5});

      document.getElementById("line9");
      TweenLite.to(bar9, 1.5, {width:"1px", height:"40px",  delay:0.5});

      document.getElementById("line10");
      TweenLite.to(bar10, 1.5, {width:"50px", height:"1px",  delay:1});

      document.getElementById("line11");
      TweenLite.to(bar11, 1.5, {width:"1px", height:"15px",  delay:1.5});
      */
/*
      $(function(){
        setTimeout(function() {
            $('.line-board').addClass("absolut")
        }, 200);
    });
*/
/* Методы для анимации при скролле */
function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  console.log(((top + height >= 0) && (height + window.innerHeight >= bottom)))
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

 function animationBox() {
  var bigPack = document.querySelector(".big-pack__content");
  var lines = bigPack.querySelectorAll("[data-scroll]");
  console.log(lines);
  console.log(bigPack);
  if(bigPack) {
      if (isPartiallyVisible(bigPack)) {
        console.log("1")
          lines.forEach(line => {
            line.classList.add("absolut");
          });
      } else {
        console.log("2")
        lines.forEach(line => {
          line.classList.remove("absolut");
        });
      }
  }

  if(bigPack) {
    if (isPartiallyVisible(bigPack)) {
        lines.forEach(path => {
          path.classList.add("path");
        });
    } else {
      lines.forEach(path => {
        path.classList.remove("path");
      });
    }
}
}

animationBox();

 function animationScroling() {
  var isScrolling = false;

  window.addEventListener("scroll", throttleScroll, false);
  
  function throttleScroll(e) {
      if (isScrolling == false) {
          window.requestAnimationFrame(function() {
              animationBox();
              isScrolling = false;
          });
      }
      isScrolling = true;
  }
}

animationScroling();
