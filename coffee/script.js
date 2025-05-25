const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("menu-close-button");

menuOpenButton.addEventListener("click",() => {
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.clicl());



  // const swiper = new Swiper('.swiper', {
  //   loop: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   breakpoints:{
  //       0:{
  //       slidesPerView: 1
  //       }
  //   }
  // });
<script>
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
</script>
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
    // same config here
  });
});


