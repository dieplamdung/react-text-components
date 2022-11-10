let top = 0;
export const disableScrollBody = (isOpen: boolean) => {
    const topScroll = window.scrollY;
    if (!isOpen) {
        document.body.classList.remove("disable-scroll");
        window.scrollTo({ top: top > topScroll ? top : topScroll });
        setTimeout(() => {
            window.scrollTo({ top: top > topScroll ? top : topScroll });
        }, 100);

    } else {
        document.body.classList.add("disable-scroll");
        document.body.style.top = `-${topScroll}px`;
        top = topScroll;
    }
};