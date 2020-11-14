function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

document
  .querySelector(".navigation--btn__button")
  .addEventListener("click", () => {
    var checkBox = document.getElementById("navi-toggle");
    if (!checkBox.checked == true) {
      document.querySelector(".navigation--btn__nav").style.display = "block";
      document.querySelector(".popup--2").style.opacity = "1";
      document.querySelector(".popup--2").style.visibility = "visible";

      disableScroll();
      return true;
    } else {
      document.querySelector(".navigation--btn__nav").style.display = "none";
      document.querySelector(".popup--2").style.opacity = "0";
      document.querySelector(".popup--2").style.visibility = "hidden";
      enableScroll();
      return false;
    }
  });
