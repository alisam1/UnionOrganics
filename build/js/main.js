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

/* Методы для анимации при скролле */
function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
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
  if(bigPack) {
      if (isPartiallyVisible(bigPack)) {
          lines.forEach(line => {
            line.classList.add("absolut");
          });
      } else {
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


/* No scroll */