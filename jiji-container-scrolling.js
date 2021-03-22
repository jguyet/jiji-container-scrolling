"use strict";
/**
 *  Jiji Container Scrolling 2021
 *  Author : Jeremy Guyet
 *  Version : 1.0.0
 */
const JijiContainerScrolling = {
    // Function search container elements states and call state function, call callback after loop
    checkVisibleContainerElements(callback, container, visibleFunction = () => {}, partialVisibleFunction = () => {}, unVisibleFunction = () => {}) {
        let elements = container.children;

        for (let element of elements) {
            let position = element.getBoundingClientRect();

            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                visibleFunction(element);
                continue ;
            }
            if(position.top < window.innerHeight && position.bottom >= 0) {
                partialVisibleFunction(element);
                continue ;
            }
            unVisibleFunction(element);
        }
        callback();
    },
    // Function checkVisibleContainerElementsWithoutCallBack
    checkVisibleContainerElementsWithoutCallBack(container, visibleFunction = () => {}, partialVisibleFunction = () => {}, unVisibleFunction = () => {}) {
        JijiContainerScrolling.checkVisibleContainerElements(() => {}, container, visibleFunction, partialVisibleFunction, unVisibleFunction);
    },
    // Function for initialize scrolling event and call function
    init(container, visibleFunction = () => {}, partialVisibleFunction = () => {}, unVisibleFunction = () => {}) {
        var awaitNextLoad = false;
        container.addEventListener('scroll', function(e) {
            if (awaitNextLoad == false) {
                awaitNextLoad = true;
                setTimeout(() => {
                    JijiContainerScrolling.checkVisibleContainerElements(() => {
                        awaitNextLoad = false;
                    }, container, visibleFunction, partialVisibleFunction, unVisibleFunction);
                }, 250);
            }
        });
    }
};

// only before browserify with nodejs
if (typeof(module) !== 'undefined') {
	module.exports = JijiContainerScrolling;
}
// [exports] Framework to GUI
if (typeof(document) !== 'undefined') {
    document.JijiContainerScrolling = JijiContainerScrolling;
}
if (typeof(window) !== "undefined") {
    window.JijiContainerScrolling = JijiContainerScrolling;
}