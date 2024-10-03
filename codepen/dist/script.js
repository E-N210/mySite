"use strict";
/// store the wrapper HTMLElement into a constant
const imageWrapper = document.querySelector('.ImageWrapper');
const animatedImage = imageWrapper.querySelector('.AnimatedImage');
/// then get the width and height properties
const { offsetWidth, offsetHeight } = imageWrapper;
/// create a timeout handler for requestAnimationFrame
let rafTimeout = null, callTimeout = null;
const CalculateOrigin = (event) => {
    /// get local cursor offset
    const { offsetX, offsetY } = event;
    /// we know than transform-origin centered is equal to 50% 50%
    /// so we need to handle this position with the delta between
    /// mouse position and wrapper bounds
    /// calculate deltas
    const deltaX = (100 / offsetWidth) * offsetX;
    const deltaY = (100 / offsetHeight) * offsetY;
    /// apply the style property to the image
    animatedImage.style.transformOrigin = `${Math.min(100, deltaX)}% ${Math.min(100, deltaY)}%`;
};
/// add an event listener
imageWrapper.addEventListener('mousemove', (event) => {
    if (rafTimeout) {
        window.cancelAnimationFrame(rafTimeout);
    }
    /// use requestAnimationFrame for event debouncing and animation frame improvements
    rafTimeout = window.requestAnimationFrame(() => CalculateOrigin(event));
});