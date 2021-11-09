window.addEventListener('scroll', function () {
   var header_top = document.querySelector('.header-top');
   header_top.classList.toggle('sticky', window.scrollY > 50);
})


var buttonUp = document.getElementById("scroll-up-btn");
// Option 1
buttonUp.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
});
// Option 2
function scrollUp() {
   if (document.body.scroll > 100 || document.documentElement.scrollTop > 100) {
      buttonUp.style.display = "block"
   }
   else {
      buttonUp.style.display = "none";
   }
}

window.onscroll = function () {
   scrollUp();
}