import { useRef } from "react";

var useScrollBlock = function useScrollBlock() {
  var scroll = useRef(false);

  var blockScroll = function blockScroll() {
    if (typeof document === "undefined") {
      return;
    }

    var html = document.documentElement;
    var _document = document,
        body = _document.body;

    if (!body || !body.style || scroll.current) {
      return;
    }

    var scrollBarWidth = window.innerWidth - html.clientWidth; // eslint-disable-next-line radix

    var bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */

    html.style.position = "relative";
    /* [1] */

    body.style.position = "relative";
    /* [1] */

    html.style.overflow = "hidden";
    /* [2] */

    body.style.overflow = "hidden";
    /* [2] */

    body.style.paddingRight = "".concat(bodyPaddingRight + scrollBarWidth, "px");
    scroll.current = true;
  };

  var allowScroll = function allowScroll() {
    if (typeof document === "undefined") {
      return;
    }

    var html = document.documentElement;
    var _document2 = document,
        body = _document2.body;

    if (!body || !body.style || !scroll.current) {
      return;
    }

    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
    scroll.current = false;
  };

  return [blockScroll, allowScroll];
};

export { useScrollBlock };