# jiji-container-scrolling
[![NPM version][npm-image]][npm-url]
[![license][license-image]][license-url]

Javascript librarie for load intelligently list of pictures or greedy elements html.

<img src="https://github.com/jguyet/jiji-container-scrolling/raw/master/img/img.gif"/>

For the container element this librarie check all elements contained in container and an of an of three function is called for all elements


example :

````html
<div id="photos">
    <img src="...">
    <img src="...">
    <img src="...">
    ... 3000 other pictures
</div>
````

I want load pictures only if is displayable.

````js
const JijiContainerScrolling = require("jiji-container-scrolling");

let visibleFunctionCallBack = (element) => {
    element.src = "...";
};
let partialVisibleFunction = (element) => {};
let unVisibleFunction = (element) => {};

// visibleFunctionCallBack is callled if element visible in first parameter scrolling through each event
JijiContainerScrolling.init(document.getElementById('photos'), visibleFunctionCallBack, partialVisibleFunction, unVisibleFunction);

// manual check is callled if element visible in first parameter scrolling through each event
JijiContainerScrolling.checkVisibleContainerElementsWithoutCallBack(document.getElementById('photos'), visibleFunctionCallBack, partialVisibleFunction, unVisibleFunction);
````

If you search a simple framework js see [jiji-js.io]: https://jiji-js.io

Ref: How to check if element is visible after scrolling?

[npm-image]: https://img.shields.io/npm/v/jiji-container-scrolling.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jiji-container-scrolling
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license