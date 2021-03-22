# jiji-container-scrolling
[![NPM version][npm-image]][npm-url]
[![license][license-image]][license-url]

Javascript librarie for load intelligently list of pictures or greedy elements html.

How to check if element is visible after scrolling?

Easy to use :

````
const JijiContainerScrolling = require("jiji-container-scrolling");

// visibleFunctionCallBack is callled if element visible in first parameter scrolling through each event
JijiContainerScrolling.init(document.getElementById('photos'), visibleFunctionCallBack, partialVisibleFunction, unVisibleFunction);

// manual check is callled if element visible in first parameter scrolling through each event
JijiContainerScrolling.checkVisibleContainerElementsWithoutCallBack(document.getElementById('photos'), visibleFunctionCallBack, partialVisibleFunction, unVisibleFunction);
````

If you search a simple framework js see [jiji-js.io]: https://jiji-js.io

[npm-image]: https://img.shields.io/npm/v/jiji-container-scrolling.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jiji-container-scrolling
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license