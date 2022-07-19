window.onload=function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    // 포트폴리오 슬라이더에 마우스올리면 슬라이더 멈춤
    $(".mySwiper").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });

    const Boxlayout = (() => {
        const wrapper = document.body,
          sections = [...document.querySelectorAll(".section")],
          closeButtons = [...document.querySelectorAll(".close-section")],
          expandedClass = "is-expanded",
          hasExpandedClass = "has-expanded-item";
      
        const initEvents = () => {
          sections.forEach((element) => {
            element.addEventListener("click", () => openSection(element));
          });
          closeButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
              event.stopPropagation();
              closeSection(element.parentElement);
            });
          });
        };
      
        const openSection = (element) => {
          if (!element.classList.contains(expandedClass)) {
            element.classList.add(expandedClass);
            wrapper.classList.add(hasExpandedClass);
          }
        };
      
        const closeSection = (element) => {
          if (element.classList.contains(expandedClass)) {
            element.classList.remove(expandedClass);
            wrapper.classList.remove(hasExpandedClass);
          }
        };
      
        return { init: initEvents };
      })();
      
      Boxlayout.init();
      

}