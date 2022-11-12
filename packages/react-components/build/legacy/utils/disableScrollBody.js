var top = 0;
export var disableScrollBody = function disableScrollBody(isOpen) {
  var topScroll = window.scrollY;

  if (!isOpen) {
    document.body.classList.remove("disable-scroll");
    window.scrollTo({
      top: top > topScroll ? top : topScroll
    });
    setTimeout(function () {
      window.scrollTo({
        top: top > topScroll ? top : topScroll
      });
    }, 100);
  } else {
    document.body.classList.add("disable-scroll");
    document.body.style.top = "-".concat(topScroll, "px");
    top = topScroll;
  }
};