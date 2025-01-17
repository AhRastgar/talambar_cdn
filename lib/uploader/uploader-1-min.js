/*
 * Cropper.js v2.0.0-alpha.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-11-09T12:02:24.890Z
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Cropper=e()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function D(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach(function(t){var e,i,a;e=n,a=o[i=t],i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n="undefined"!=typeof window&&void 0!==window.document,r=n?window:{},t=n&&"ontouchstart"in r.document.documentElement,o=n&&"PointerEvent"in r,d="cropper",B="all",k="crop",W="move",O="zoom",H="e",E="w",T="s",N="n",z="ne",Y="nw",R="se",X="sw",h="".concat(d,"-crop"),s="".concat(d,"-disabled"),L="".concat(d,"-hidden"),l="".concat(d,"-hide"),p="".concat(d,"-invisible"),c="".concat(d,"-modal"),u="".concat(d,"-move"),g="".concat(d,"Action"),m="".concat(d,"Preview"),f="crop",v="move",w="none",b="crop",x="cropend",y="cropmove",M="cropstart",C="dblclick",S=o?"pointerdown":t?"touchstart":"mousedown",A=o?"pointermove":t?"touchmove":"mousemove",j=o?"pointerup pointercancel":t?"touchend touchcancel":"mouseup",I="ready",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,G=["left","top","width","height","naturalWidth","naturalHeight"],V={viewMode:0,dragMode:f,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,maxCanvasWidth:1/0,maxCanvasHeight:1/0,minCropBoxWidth:0,minCropBoxHeight:0,maxCropBoxWidth:1/0,maxCropBoxHeight:1/0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},F=Number.isNaN||r.isNaN;function J(t){return"number"==typeof t&&!F(t)}var _=function(t){return 0<t&&t<1/0};function tt(t){return void 0===t}function et(t){return"object"===e(t)&&null!==t}var it=Object.prototype.hasOwnProperty;function at(t){if(!et(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&it.call(i,"isPrototypeOf")}catch(t){return!1}}function nt(t){return"function"==typeof t}var ot=Array.prototype.slice;function rt(t){return Array.from?Array.from(t):ot.call(t)}function ht(i,a){return i&&nt(a)&&(Array.isArray(i)||J(i.length)?rt(i).forEach(function(t,e){a.call(i,t,e,i)}):et(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var st=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return et(i)&&0<e.length&&e.forEach(function(e){et(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},ct=/\.\d*(?:0|9){12}\d*$/;function dt(t,e){var i=1<arguments.length&&void 0!==e?e:1e11;return ct.test(t)?Math.round(t*i)/i:t}var lt=/^width|height|left|top|marginLeft|marginTop$/;function pt(t,e){var i=t.style;ht(e,function(t,e){lt.test(e)&&J(t)&&(t="".concat(t,"px")),i[e]=t})}function ut(t,e){if(e)if(J(t.length))ht(t,function(t){ut(t,e)});else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function gt(t,e){e&&(J(t.length)?ht(t,function(t){gt(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function mt(t,e,i){e&&(J(t.length)?ht(t,function(t){mt(t,e,i)}):i?ut(t,e):gt(t,e))}var ft=/([a-z\d])([A-Z])/g;function vt(t){return t.replace(ft,"$1-$2").toLowerCase()}function wt(t,e){return et(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(vt(e)))}function bt(t,e,i){et(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(vt(e)),i)}var xt=/\s\s*/,yt=function(){var t=!1;if(n){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});r.addEventListener("test",i,a),r.removeEventListener("test",i,a)}return t}();function Mt(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(xt).forEach(function(t){if(!yt){var e=i.listeners;e&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners)}i.removeEventListener(t,o,n)})}function Ct(o,t,r,e){var h=3<arguments.length&&void 0!==e?e:{},s=r;t.trim().split(xt).forEach(function(a){if(h.once&&!yt){var t=o.listeners,n=void 0===t?{}:t;s=function(){delete n[a][r],o.removeEventListener(a,s,h);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];r.apply(o,e)},n[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n}o.addEventListener(a,s,h)})}function Dt(t,e,i){var a;return nt(Event)&&nt(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Bt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var kt=r.location,Wt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Ot(t){var e=t.match(Wt);return null!==e&&(e[1]!==kt.protocol||e[2]!==kt.hostname||e[3]!==kt.port)}function Ht(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Et(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];J(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),J(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),J(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),J(i)&&1!==i&&r.push("scaleX(".concat(i,")")),J(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function Tt(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:D({startX:i,startY:a},n)}function Nt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",r=_(n),h=_(a);if(r&&h){var s=a*i;"contain"===o&&n<s||"cover"===o&&s<n?a=n/i:n=a*i}else r?a=n/i:h&&(n=a*i);return{width:n,height:a}}var zt=String.fromCharCode;var Yt=/^data:.*,/;function Rt(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=zt(t.getUint8(n));return a}(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var d=i.getUint32(s+4,a);8<=d&&(o=s+d)}}}if(o){var l,p,u=i.getUint16(o,a);for(p=0;p<u;p+=1)if(l=o+12*p+2,274===i.getUint16(l,a)){l+=8,e=i.getUint16(l,a),i.setUint16(l,1,a);break}}}catch(t){e=1}return e}var Xt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.initialImageData=st({},this.imageData),this.initialCanvasData=st({},this.canvasData),this.initialCropBoxData=st({},this.cropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;ut(a,L),gt(t,L);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};pt(a,n),ut(t,L),gt(a,L),this.containerData=n},initCanvas:function(){var t=this.options,e=this.containerData,i=this.imageData,a=t.viewMode,n=Math.abs(i.rotate)%180==90,o=n?i.naturalHeight:i.naturalWidth,r=n?i.naturalWidth:i.naturalHeight,h=o/r,s=e.width,c=e.height;s<c*h?3===a?s=c*h:c=s/h:3===a?c=s/h:s=c*h;var d={aspectRatio:h,naturalWidth:o,naturalHeight:r,width:s,height:c,left:(e.width-s)/2,top:(e.height-c)/2,scale:s/o};d.oldLeft=d.left,d.oldTop=d.top,this.canvasData=d,this.limitCanvas(!0,!0)},limitCanvas:function(t,e){var i=0<arguments.length&&void 0!==t&&t,a=1<arguments.length&&void 0!==e&&e,n=this.options,o=this.containerData,r=this.canvasData,h=n.viewMode,s=o.width,c=o.height,d=r.aspectRatio,l=r.width,p=r.height;if(i){var u=Math.max(n.minCanvasWidth,0)||0,g=Math.max(n.minCanvasHeight,0)||0,m=Math.max(n.maxCanvasWidth,u)||1/0,f=Math.max(n.maxCanvasHeight,g)||1/0;1<h&&(u=Math.max(u,s),g=Math.max(g,c),3===h&&(u<g*d?u=g*d:g=u/d));var v=Nt({aspectRatio:d,width:u,height:g});u=v.width,g=v.height;var w=Nt({aspectRatio:d,width:m,height:f});m=w.width,f=w.height,r.minWidth=u,r.minHeight=g,r.maxWidth=m,r.maxHeight=f}if(a){var b=-l,x=-p,y=s,M=c;if(1<h){var C=s-l,D=c-p;b=Math.min(0,C),x=Math.min(0,D),y=Math.max(0,C),M=Math.max(0,D)}r.minLeft=b,r.minTop=x,r.maxLeft=y,r.maxTop=M}},renderCanvas:function(t,e){var i=0<arguments.length&&void 0!==t&&t,a=1<arguments.length&&void 0!==e&&e,n=this.imageData,o=this.canvasData,r=this.cropBoxData;if(a){var h=function(t){var e=t.width,i=t.height,a=t.degree;if(90===(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return 90<a?{width:s,height:h}:{width:h,height:s}}({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),s=h.width,c=h.height,d=o.width*(s/o.naturalWidth),l=o.height*(c/o.naturalHeight);o.left-=(d-o.width)/2,o.top-=(l-o.height)/2,o.width=d,o.height=l,o.aspectRatio=s/c,o.naturalWidth=s,o.naturalHeight=c,this.limitCanvas(!0,!1)}(o.width>o.maxWidth||o.width<o.minWidth)&&(o.left=o.oldLeft),(o.height>o.maxHeight||o.height<o.minHeight)&&(o.top=o.oldTop),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight),o.scale=o.width/o.naturalWidth,this.limitCanvas(!1,!0),o.left=Math.min(Math.max(o.left,o.minLeft),o.maxLeft),o.top=Math.min(Math.max(o.top,o.minTop),o.maxTop),o.left===o.oldLeft&&(r.left=r.oldLeft),o.top===o.oldTop&&(r.top=r.oldTop),o.oldLeft=o.left,o.oldTop=o.top,pt(this.canvas,st({width:o.width,height:o.height},Et({translateX:o.left,translateY:o.top}))),this.renderImage(),i&&(this.cropped?(a?this.initCropBox():this.limitCropBox(!0,!0),this.renderCropBox()):this.output())},renderImage:function(){var t=this.imageData,e=this.canvasData,i=t.naturalWidth*(e.width/e.naturalWidth),a=t.naturalHeight*(e.height/e.naturalHeight);st(t,{width:i,height:a,left:(e.width-i)/2,top:(e.height-a)/2}),pt(this.image,st({width:t.width,height:t.height},Et(st({translateX:t.left,translateY:t.top},t))))},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=e.width,n=e.height;i&&(a<n*i?n=a/i:a=n*i);var o={width:a,height:n};this.cropBoxData=o,this.limitCropBox(!0,!0),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight);var r=Number(t.autoCropArea)||.8;o.width=Math.max(o.minWidth,o.width*r),o.height=Math.max(o.minHeight,o.height*r),o.left=e.left+(e.width-o.width)/2,o.top=e.top+(e.height-o.height)/2,o.oldLeft=o.left,o.oldTop=o.top,o.naturalWidth=o.width/e.scale,o.naturalHeight=o.height/e.scale},limitCropBox:function(t,e){var i=0<arguments.length&&void 0!==t&&t,a=1<arguments.length&&void 0!==e&&e,n=this.options,o=this.canvasData,r=this.cropBoxData,h=n.aspectRatio,s=n.viewMode,c=o.width,d=o.height,l=o.left,p=o.top;if(i){var u=Math.max(n.minCropBoxWidth,0)||0,g=Math.max(n.minCropBoxHeight,0)||0,m=Math.max(n.maxCropBoxWidth,u)||1/0,f=Math.max(n.maxCropBoxHeight,g)||1/0;if(0<s&&(u=Math.min(c,u),g=Math.min(d,g),m=Math.min(c,m),f=Math.min(d,f)),0<h){var v=Nt({aspectRatio:h,width:u,height:g});u=v.width,g=v.height;var w=Nt({aspectRatio:h,width:m,height:f});m=w.width,f=w.height}r.minWidth=u,r.minHeight=g,r.maxWidth=m,r.maxHeight=f}if(a){var b=-1/0,x=-1/0,y=1/0,M=1/0;0<s&&(x=p,y=(b=l)+c-r.width,M=p+d-r.height),r.minLeft=b,r.minTop=x,r.maxLeft=y,r.maxTop=M}},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.canvasData,a=this.cropBoxData;(a.width>a.maxWidth||a.width<a.minWidth)&&(a.left=a.oldLeft),(a.height>a.maxHeight||a.height<a.minHeight)&&(a.top=a.oldTop),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),this.limitCropBox(!1,!0),a.left=Math.min(Math.max(a.left,a.minLeft),a.maxLeft),a.top=Math.min(Math.max(a.top,a.minTop),a.maxTop),a.oldLeft=a.left,a.oldTop=a.top,a.naturalWidth=a.width/i.scale,a.naturalHeight=a.height/i.scale,t.movable&&t.cropBoxMovable&&bt(this.face,g,a.width>=e.width&&a.height>=e.height?W:B),pt(this.cropBox,st({width:a.width,height:a.height},Et({translateX:a.left,translateY:a.top}))),this.disabled||this.output()},output:function(){this.preview(),Dt(this.element,b,this.getData())}},Lt={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e){var r=e;"string"==typeof e?r=t.ownerDocument.querySelectorAll(e):e.querySelector&&(r=[e]),ht(this.previews=r,function(t){var e=document.createElement("img");bt(t,m,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)})}},resetPreview:function(){ht(this.previews,function(t){var e=wt(t,m);pt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(et(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(vt(i)))}(t,m)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,s=e.width,c=e.height,d=h.width,l=h.height,p=e.left-t.left-h.left,u=e.top-t.top-h.top;this.cropped&&!this.disabled&&(pt(this.viewBoxImage,st({width:d,height:l},Et(st({translateX:-p,translateY:-u},h)))),ht(this.previews,function(t){var e=wt(t,m),i=e.width,a=e.height,n=i,o=a,r=1;s&&(o=c*(r=i/s)),c&&a<o&&(n=s*(r=a/c),o=a),pt(t,{width:n,height:o}),pt(t.getElementsByTagName("img")[0],st({width:d*r,height:l*r},Et(st({translateX:-p*r,translateY:-u*r},h))))}))}},St={bind:function(){var t=this.element,e=this.options,i=this.cropper;nt(e.cropstart)&&Ct(t,M,e.cropstart),nt(e.cropmove)&&Ct(t,y,e.cropmove),nt(e.cropend)&&Ct(t,x,e.cropend),nt(e.crop)&&Ct(t,b,e.crop),nt(e.zoom)&&Ct(t,U,e.zoom),Ct(i,S,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Ct(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ct(i,C,this.onDblclick=this.dblclick.bind(this)),Ct(t.ownerDocument,A,this.onCropMove=this.cropMove.bind(this)),Ct(t.ownerDocument,j,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Ct(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;nt(e.cropstart)&&Mt(t,M,e.cropstart),nt(e.cropmove)&&Mt(t,y,e.cropmove),nt(e.cropend)&&Mt(t,x,e.cropend),nt(e.crop)&&Mt(t,b,e.crop),nt(e.zoom)&&Mt(t,U,e.zoom),Mt(i,S,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Mt(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Mt(i,C,this.onDblclick),Mt(t.ownerDocument,A,this.onCropMove),Mt(t.ownerDocument,j,this.onCropEnd),e.responsive&&Mt(window,"resize",this.onResize)}},At={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var o,r,h=e.offsetWidth/i.width;if(1!=h||e.offsetHeight!==i.height)t.restore&&(o=this.getCanvasData(),r=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ht(o,function(t,e){o[e]=t*h})),this.setCropBoxData(ht(r,function(t,e){r[e]=t*h})))}},dblclick:function(){this.disabled||this.options.dragMode===w||this.setDragMode(function(t,e){return t.classList?t.classList.contains(e):-1<t.className.indexOf(e)}(this.dragBox,h)?v:f)},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(J(e)&&1!==e||J(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?ht(t.changedTouches,function(t){o[t.identifier]=Tt(t)}):o[t.pointerId||0]=Tt(t),a=1<Object.keys(o).length&&n.zoomable&&n.zoomOnTouch?O:wt(t.target,g),$.test(a)&&!1!==Dt(this.element,M,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===k&&(this.cropping=!0,ut(this.dragBox,c)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==Dt(this.element,y,{originalEvent:t,action:e})&&(t.changedTouches?ht(t.changedTouches,function(t){st(i[t.identifier]||{},Tt(t,!0))}):st(i[t.pointerId||0]||{},Tt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?ht(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,mt(this.dragBox,c,this.cropped&&this.options.modal)),Dt(this.element,x,{originalEvent:t,action:e}))}}},jt={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,r=this.action,h=e.aspectRatio,s=n.left,c=n.top,d=n.width,l=n.height,p=s+d,u=c+l,g=0,m=0,f=a.width,v=a.height,w=!0;!h&&t.shiftKey&&(h=d&&l?d/l:1),0<e.viewMode&&(g=n.minLeft,m=n.minTop,f=g+Math.min(a.width,i.width,i.left+i.width),v=m+Math.min(a.height,i.height,i.top+i.height));function b(t){switch(t){case H:p+y.x>f&&(y.x=f-p);break;case E:s+y.x<g&&(y.x=g-s);break;case N:c+y.y<m&&(y.y=m-c);break;case T:u+y.y>v&&(y.y=v-u)}}var x=o[Object.keys(o)[0]],y={x:x.endX-x.startX,y:x.endY-x.startY};switch(r){case B:s+=y.x,c+=y.y;break;case H:if(0<=y.x&&(f<=p||h&&(c<=m||v<=u))){w=!1;break}b(H),(d+=y.x)<0&&(r=E,s-=d=-d),h&&(l=d/h,c+=(n.height-l)/2);break;case N:if(y.y<=0&&(c<=m||h&&(s<=g||f<=p))){w=!1;break}b(N),l-=y.y,c+=y.y,l<0&&(r=T,c-=l=-l),h&&(d=l*h,s+=(n.width-d)/2);break;case E:if(y.x<=0&&(s<=g||h&&(c<=m||v<=u))){w=!1;break}b(E),d-=y.x,s+=y.x,d<0&&(r=H,s-=d=-d),h&&(l=d/h,c+=(n.height-l)/2);break;case T:if(0<=y.y&&(v<=u||h&&(s<=g||f<=p))){w=!1;break}b(T),(l+=y.y)<0&&(r=N,c-=l=-l),h&&(d=l*h,s+=(n.width-d)/2);break;case z:if(h){if(y.y<=0&&(c<=m||f<=p)){w=!1;break}b(N),l-=y.y,c+=y.y,d=l*h}else b(N),b(H),0<=y.x?p<f?d+=y.x:y.y<=0&&c<=m&&(w=!1):d+=y.x,y.y<=0?m<c&&(l-=y.y,c+=y.y):(l-=y.y,c+=y.y);d<0&&l<0?(r=X,c-=l=-l,s-=d=-d):d<0?(r=Y,s-=d=-d):l<0&&(r=R,c-=l=-l);break;case Y:if(h){if(y.y<=0&&(c<=m||s<=g)){w=!1;break}b(N),l-=y.y,c+=y.y,d=l*h,s+=n.width-d}else b(N),b(E),y.x<=0?g<s?(d-=y.x,s+=y.x):y.y<=0&&c<=m&&(w=!1):(d-=y.x,s+=y.x),y.y<=0?m<c&&(l-=y.y,c+=y.y):(l-=y.y,c+=y.y);d<0&&l<0?(r=R,c-=l=-l,s-=d=-d):d<0?(r=z,s-=d=-d):l<0&&(r=X,c-=l=-l);break;case X:if(h){if(y.x<=0&&(s<=g||v<=u)){w=!1;break}b(E),d-=y.x,s+=y.x,l=d/h}else b(T),b(E),y.x<=0?g<s?(d-=y.x,s+=y.x):0<=y.y&&v<=u&&(w=!1):(d-=y.x,s+=y.x),0<=y.y?u<v&&(l+=y.y):l+=y.y;d<0&&l<0?(r=z,c-=l=-l,s-=d=-d):d<0?(r=R,s-=d=-d):l<0&&(r=Y,c-=l=-l);break;case R:if(h){if(0<=y.x&&(f<=p||v<=u)){w=!1;break}b(H),l=(d+=y.x)/h}else b(T),b(H),0<=y.x?p<f?d+=y.x:0<=y.y&&v<=u&&(w=!1):d+=y.x,0<=y.y?u<v&&(l+=y.y):l+=y.y;d<0&&l<0?(r=Y,c-=l=-l,s-=d=-d):d<0?(r=X,s-=d=-d):l<0&&(r=z,c-=l=-l);break;case W:this.move(y.x,y.y),w=!1;break;case O:this.zoom(function(t){var e=D({},t),s=[];return ht(t,function(h,t){delete e[t],ht(e,function(t){var e=Math.abs(h.startX-t.startX),i=Math.abs(h.startY-t.startY),a=Math.abs(h.endX-t.endX),n=Math.abs(h.endY-t.endY),o=Math.sqrt(e*e+i*i),r=(Math.sqrt(a*a+n*n)-o)/o;s.push(r)})}),s.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),s[0]}(o),t),w=!1;break;case k:if(r="",y.x&&y.y){var M=180*Math.atan(Math.abs(y.x)/Math.abs(y.y))/Math.PI;M<5?h&&(r=0<y.y?T:N):85<M?h&&(r=0<y.y?H:E):r=0<y.x?0<y.y?R:z:0<y.y?X:Y}else h&&(1<Math.abs(y.x)?r=0<y.x?H:E:1<Math.abs(y.y)&&(r=0<y.y?T:N));if(!r){w=!1;break}var C=Bt(this.cropper);s=x.startX-C.left,c=x.startY-C.top,d=n.minWidth,l=n.minHeight,y.x<0&&(s-=d),y.y<0&&(c-=l),this.cropped||(gt(this.cropBox,L),this.cropped=!0,0<e.viewMode&&this.limitCropBox(!0,!0))}w&&(n.width=d,n.height=l,n.left=s,n.top=c,this.action=r,this.renderCropBox()),ht(o,function(t){t.startX=t.endX,t.startY=t.endY})}},Pt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&ut(this.dragBox,c),gt(this.cropBox,L),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=st({},this.initialImageData),this.canvasData=st({},this.initialCanvasData),this.cropBoxData=st({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(st(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),gt(this.dragBox,c),ut(this.cropBox,L)),this},replace:function(e,t){var i=1<arguments.length&&void 0!==t&&t;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),i?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,ht(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,gt(this.cropper,s)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,ut(this.cropper,s)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(tt(t)?t:n+Number(t),tt(i)?i:o+Number(i))},moveTo:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=this.cropBoxData,o=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(J(t)&&(n.left-=a.left-t,a.left=t,o=!0),J(i)&&(n.top-=a.top-i,a.top=i,o=!0),o&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=1<arguments.length&&void 0!==e?e:null,a=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(a.width*t/a.naturalWidth,null,i)},zoomTo:function(t,e,i){var a=1<arguments.length&&void 0!==e?e:null,n=2<arguments.length&&void 0!==i?i:null,o=this.options,r=this.canvasData,h=this.cropBoxData,s=r.width,c=r.height,d=h.width,l=h.height;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&o.zoomable){var p=r.naturalWidth*t,u=r.naturalHeight*t;if(1<o.viewMode&&(p<r.minWidth||p>r.maxWidth||u<r.minHeight||u<r.minHeight))return this;var g=p-s,m=u-c,f=h.naturalWidth*t,v=h.naturalHeight*t,w=f-d,b=v-l;if(!1===Dt(this.element,U,{scale:t,oldScale:r.scale,originalEvent:n}))return this;if(n){var x=this.pointers,y=Bt(this.cropper);a=x&&Object.keys(x).length?function(t){var a=0,n=0,o=0;return ht(t,function(t){var e=t.startX,i=t.startY;a+=e,n+=i,o+=1}),{pageX:a/=o,pageY:n/=o}}(x):{pageX:n.pageX,pageY:n.pageY},r.left-=g*((a.pageX-y.left-r.left)/s),r.top-=m*((a.pageY-y.top-r.top)/c),h.left-=w*((a.pageX-y.left-h.left)/d),h.top-=b*((a.pageY-y.top-h.top)/l)}else at(a)&&J(a.x)&&J(a.y)?(r.left-=g*((a.x-r.left)/s),r.top-=m*((a.y-r.top)/c),h.left-=w*((a.x-h.left)/d),h.top-=b*((a.y-h.top)/l)):(r.left-=g/2,r.top-=m/2,h.left-=w/2,h.top-=b/2);r.width=p,r.height=u,h.width=f,h.height=v,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return J(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,J(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(J(e)?e:1,t)},scale:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(J(t)&&(a.scaleX=t,n=!0),J(i)&&(a.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,e=0<arguments.length&&void 0!==t&&t,a=this.options,n=this.imageData,o=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){i={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height};var h=n.width/n.naturalWidth;if(ht(i,function(t,e){i[e]=t/h}),e){var s=Math.round(i.y+i.height),c=Math.round(i.x+i.width);i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=c-i.x,i.height=s-i.y}}else i={x:0,y:0,width:0,height:0};return a.rotatable&&(i.rotate=n.rotate||0),a.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&at(t)){var o=!1;e.rotatable&&J(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(J(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),J(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;J(t.x)&&(n.left=t.x*r+a.left),J(t.y)&&(n.top=t.y*r+a.top),J(t.width)&&(n.width=t.width*r),J(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?st({},this.containerData):{}},getImageData:function(){return this.sized?st({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&ht(G,function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&at(t)&&(J(t.left)&&(e.left=t.left),J(t.top)&&(e.top=t.top),J(t.width)?(e.width=t.width,e.height=t.width/i):J(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var e=this.cropBoxData,i={};return this.ready&&this.cropped&&ht(G,function(t){i[t]=e[t]}),i},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&at(t)&&(J(t.left)&&(a.left=t.left),J(t.top)&&(a.top=t.top),J(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),J(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var e=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,a=function(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,h=e.rotate,s=void 0===h?0:h,c=e.scaleX,d=void 0===c?1:c,l=e.scaleY,p=void 0===l?1:l,u=i.aspectRatio,g=i.naturalWidth,m=i.naturalHeight,f=a.fillColor,v=void 0===f?"transparent":f,w=a.imageSmoothingEnabled,b=void 0===w||w,x=a.imageSmoothingQuality,y=void 0===x?"low":x,M=a.maxWidth,C=void 0===M?1/0:M,D=a.maxHeight,B=void 0===D?1/0:D,k=a.minWidth,W=void 0===k?0:k,O=a.minHeight,H=void 0===O?0:O,E=document.createElement("canvas"),T=E.getContext("2d"),N=Nt({aspectRatio:u,width:C,height:B}),z=Nt({aspectRatio:u,width:W,height:H},"cover"),Y=Math.min(N.width,Math.max(z.width,g)),R=Math.min(N.height,Math.max(z.height,m)),X=Nt({aspectRatio:n,width:C,height:B}),L=Nt({aspectRatio:n,width:W,height:H},"cover"),S=Math.min(X.width,Math.max(L.width,o)),A=Math.min(X.height,Math.max(L.height,r)),j=[-S/2,-A/2,S,A];return E.width=dt(Y),E.height=dt(R),T.fillStyle=v,T.fillRect(0,0,Y,R),T.save(),T.translate(Y/2,R/2),T.rotate(s*Math.PI/180),T.scale(d,p),T.imageSmoothingEnabled=b,T.imageSmoothingQuality=y,T.drawImage.apply(T,[t].concat(P(j.map(function(t){return Math.floor(dt(t))})))),T.restore(),E}(this.image,this.imageData,i,e);if(!this.cropped)return a;var n=this.getData(),o=n.x,r=n.y,h=n.width,s=n.height,c=a.width/Math.floor(i.naturalWidth);1!=c&&(o*=c,r*=c,h*=c,s*=c);var d=h/s,l=Nt({aspectRatio:d,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),p=Nt({aspectRatio:d,width:e.minWidth||0,height:e.minHeight||0},"cover"),u=Nt({aspectRatio:d,width:e.width||(1!=c?a.width:h),height:e.height||(1!=c?a.height:s)}),g=u.width,m=u.height;g=Math.min(l.width,Math.max(p.width,g)),m=Math.min(l.height,Math.max(p.height,m));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=dt(g),f.height=dt(m),v.fillStyle=e.fillColor||"transparent",v.fillRect(0,0,g,m);var w=e.imageSmoothingEnabled,b=void 0===w||w,x=e.imageSmoothingQuality;v.imageSmoothingEnabled=b,x&&(v.imageSmoothingQuality=x);var y,M,C,D,B,k,W=a.width,O=a.height,H=o,E=r;H<=-h||W<H?B=C=y=H=0:H<=0?(C=-H,H=0,B=y=Math.min(W,h+H)):H<=W&&(C=0,B=y=Math.min(h,W-H)),y<=0||E<=-s||O<E?k=D=M=E=0:E<=0?(D=-E,E=0,k=M=Math.min(O,s+E)):E<=O&&(D=0,k=M=Math.min(s,O-E));var T=[H,E,y,M];if(0<B&&0<k){var N=g/h;T.push(C*N,D*N,B*N,k*N)}return v.drawImage.apply(v,[a].concat(P(T.map(function(t){return Math.floor(dt(t))})))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||tt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===f,o=e.movable&&t===v;t=n||o?t:w,e.dragMode=t,bt(i,g,t),mt(i,h,n),mt(i,u,o),e.cropBoxMovable||(bt(a,g,t),mt(a,h,n),mt(a,u,o))}return this}},It=r.Cropper,Ut=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=st({},V,at(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return function(t,e,i){e&&a(t.prototype,e),i&&a(t,i)}(i,[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[d]){if(e[d]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(Q.test(t))K.test(t)?this.read(function(t){var e=t.replace(Yt,""),i=atob(e),a=new ArrayBuffer(i.length),n=new Uint8Array(a);return ht(n,function(t,e){n[e]=i.charCodeAt(e)}),a}(t)):this.clone();else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,(this.xhr=n).onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==q&&n.abort()},n.onload=function(){e.read(n.response)},n.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&Ot(t)&&i.crossOrigin&&(t=Ht(t)),n.open("GET",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===i.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=Rt(t),n=0,o=1,r=1;if(1<a){this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(zt.apply(null,rt(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q);var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Ot(e)&&(i=i||"anonymous",a=Ht(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),ut(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){st(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()}var a=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);if(!t.naturalWidth||a){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){e(n.width,n.height),a||o.removeChild(n)},n.src=t.src,a||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-canvas"></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><div class="cropper-view-box"></div><div class="cropper-dashed dashed-h"></div><div class="cropper-dashed dashed-v"></div><div class="cropper-center"></div><div class="cropper-face"></div><div class="cropper-line line-e" data-cropper-action="e"></div><div class="cropper-line line-n" data-cropper-action="n"></div><div class="cropper-line line-w" data-cropper-action="w"></div><div class="cropper-line line-s" data-cropper-action="s"></div><div class="cropper-point point-e" data-cropper-action="e"></div><div class="cropper-point point-n" data-cropper-action="n"></div><div class="cropper-point point-w" data-cropper-action="w"></div><div class="cropper-point point-s" data-cropper-action="s"></div><div class="cropper-point point-ne" data-cropper-action="ne"></div><div class="cropper-point point-nw" data-cropper-action="nw"></div><div class="cropper-point point-sw" data-cropper-action="sw"></div><div class="cropper-point point-se" data-cropper-action="se"></div></div></div>';var o=n.querySelector(".".concat(d,"-container")),r=o.querySelector(".".concat(d,"-canvas")),h=o.querySelector(".".concat(d,"-drag-box")),s=o.querySelector(".".concat(d,"-crop-box")),c=s.querySelector(".".concat(d,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(d,"-view-box")),this.face=c,r.appendChild(i),ut(t,L),a.insertBefore(o,t.nextSibling),this.isImg||gt(i,l),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,ut(s,L),e.guides||ut(s.getElementsByClassName("".concat(d,"-dashed")),L),e.center||ut(s.getElementsByClassName("".concat(d,"-center")),L),e.background&&ut(o,"".concat(d,"-bg")),e.highlight||ut(c,p),e.cropBoxMovable&&(ut(c,u),bt(c,g,B)),e.cropBoxResizable||(ut(s.getElementsByClassName("".concat(d,"-line")),L),ut(s.getElementsByClassName("".concat(d,"-point")),L)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),nt(e.ready)&&Ct(t,I,e.ready,{once:!0}),Dt(t,I)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),gt(this.element,L))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=It,i}},{key:"setDefaults",value:function(t){st(V,at(t)&&t)}}]),i}();return st(Ut.prototype,Xt,Lt,St,At,jt,Pt),Ut});


function runUploader()
{
  // console.log('run uploader');
  $('[data-uploader]').each(function(_el)
  {
    var $this = $(this);

    // define variables
    var myInput               = $this.find('input[type="file"]');
    var myLabel               = $this.find('input[type="file"] + label:first');
    var droppedFiles          = false;
    var cropperObj            = false;

    // check advance upload is enable or not
    // function isAdvancedUpload(_el)
    // {
    //   return ( ('draggable' in _el ) || ( 'ondragstart' in _el && 'ondrop' in _el ) ) && 'FormData' in window && 'FileReader' in window;
    // }

    // if(!isAdvancedUpload($this))
    // {
    //   console.log('Advance upload features is not enable on browser.');
    //   return false;
    // }

    // catch file change manually
    myInput.off('change.uploader').on('change.uploader', function(_e)
    {
      startHandleFileProcess($this, _e.target.files, myInput, myLabel)
    });
    myInput.off('click.uploader').on('click.uploader', function(_e)
    {
      // empty value of input
      this.value = null;
      // reset label
      resetUploaderLabel($this, myLabel);
    });
    // catch drop file
    $this.off('drop.uploader').on('drop.uploader', function(_e)
    {
      // set dropped files to use on form submit
      droppedFiles = _e.originalEvent.dataTransfer.files;
      startHandleFileProcess($this, droppedFiles, myInput, myLabel)
    });

  });


  function startHandleFileProcess(_myUploaderEl, _files, _input, _label)
  {
    // set file detail
    var fileInfo = setInputText(_myUploaderEl, _files, _input, _label);

    if(!checkFileFace(_myUploaderEl, _files))
    {
      return false;
    }

    if(_files.length > 0)
    {
      // if img
      if(isImgExt(fileInfo.ext))
      {
        // open crop modal
        cropFullScreen(_myUploaderEl, _label, fileInfo, _files);

        if (_files && _files[0])
        {
          // try to load file
          loadImageFile(_myUploaderEl, _files[0]);
        }
      }
      else
      {
        // on other ext append file to form
        appendFileToForm(_myUploaderEl, _files, fileInfo.size);
      }
    }
  }


  var fileErrorMSG =
  {
    fileChooseNone: "Please select one file!",
    fileChooseOnlyOne: "Please choose only one file!",
    fileUltraMaxSize: "Please select file with less than 20 MB!",
    fileMaxSizeInit: "Please select file with less than 2 MB!",
    fileMaxSize: "Your file size is too large!",
    yourFileSize: "Your file size is ",
    max: "Max allowed size",
  }

  if(urlLang() === 'fa')
  {
    fileErrorMSG =
    {
      fileChooseNone: "لطفا فایلی را انتخاب کنید!",
      fileChooseOnlyOne: "لطفا تنها یک فایل را انتخاب کنید",
      fileUltraMaxSize: "فایل انتخابی باید کمتر از ۲۰ مگ داشته باشد",
      fileMaxSizeInit: "حجم فایل شما باید کمتر از ۲ مگ باشد.",
      fileMaxSize: "حجم فایل شما بیش از اندازه مجاز است!",
      yourFileSize: "اندازه فایل شما برابر است با ",
      max: "حداکثر اندازه مجاز ",
    }
  }


  function checkFileFace(_uploader, _files)
  {
    if(_files.length == 1)
    {
      // return checkOneFileFace(_uploader, _files[0]);
      return true;
    }
    else if(_files.length > 1)
    {
      say({title: fileErrorMSG.fileChooseOnlyOne , type: 'error'});
      return false;
    }
    else
    {
      notif('info', fileErrorMSG.fileChooseNone);
      // choose one file
      return false;
    }
    return true;
  }


  function checkOneFileFace(_uploader, _file)
  {
    var fileSizeMB = Math.round( (Math.round(_file.size / 1024) / 1024) * 100) / 100;
    var fileUltraMaxSize = 20;

    // get from form if exist
    if(_uploader.attr('data-file-ultra-size'))
    {
      fileUltraMaxSize = parseInt(_uploader.attr('data-file-ultra-size'));
    }
    // if more than 10 MB
    if(fileSizeMB > fileUltraMaxSize)
    {
      say({title: fileErrorMSG.fileUltraMaxSize , type: 'error'});
      return false;
    }

    return true;
  }

  function OneFileMaxSizeOkay(_uploader, _fileSize, _type)
  {
    if(!_fileSize)
    {
      console.log('file size is not set!');
      return null;
    }

    var fileSizeMB = Math.round( (Math.round(_fileSize / 1024) / 1024) * 100) / 100;

    if(_type === 'init')
    {
      // check later
      var fileMaxSizeInit = 2;
      // get from form if exist
      if(_uploader.attr('data-file-max-size-init'))
      {
        fileMaxSizeInit = parseInt(_uploader.attr('data-file-max-size-init'));
      }

      // if more than 2 MB
      if(fileSizeMB > fileMaxSizeInit)
      {
        console.log('Your file size is ' + fileSizeMB);
        say({title: fileErrorMSG.fileMaxSizeInit , type: 'error', text: fileErrorMSG.yourFileSize + fileSizeMB+ "MB"});
        return false;
      }
    }
    else
    {
      var fileMaxSize = 1;
      // get from form if exist
      if(_uploader.attr('data-file-max-size'))
      {
        fileMaxSize = parseInt(_uploader.attr('data-file-max-size'));
      }
      else
      {
        fileMaxSize = 20;
      }

      // if more than 1 MB
      if(fileSizeMB > fileMaxSize)
      {
        console.log('Your file size is ' + fileSizeMB);
        say({title: fileErrorMSG.fileMaxSize , type: 'error', text: fileErrorMSG.yourFileSize + fileSizeMB + "MB"});
        return false;
      }
    }


    return true;
  }

  function isImgExt(_ext)
  {
    if(!_ext)
    {
      return null;
    }

    switch (_ext)
    {
      case 'gif':
        return false;
        return _ext;
        break;

      case 'png':
        return _ext;
        break;

      case 'jpg':
      case 'jpeg':
      case 'jfif':
        return _ext;
        break;
    }

    return false;
  }

  function resetUploaderLabel(_uploader, _label)
  {
    // set default if is not set
    if(!_label.prop('defaultText'))
    {
      _label.prop('defaultText', _label.html());
    }

    labelText = _label.prop('defaultText');
    _label.html(labelText);
    _uploader.attr('data-file-size', null);

    return labelText;
  }

  // show file Content
  function setInputText(_uploader, _files, _input, _label)
  {
    var labelText = "";
    var fileInfo = [];
    var fileSize = false;

    if(_files && _files.length > 1)
    {
      multipleCaption = _input.get(0).getAttribute( 'data-multiple-caption') || '{count} files selected';
      labelText = multipleCaption.replace( '{count}', _files.length );
    }
    else if(_files && _files.length === 1)
    {
      if(_files[0].name)
      {
        labelText = _files[0].name;
      }
      else
      {
        labelText = "File_Without_Name.jpg";
      }

      if(_files[0].type)
      {
        fileInfo['type'] = _files[0].type;
      }

      if(_files[0].size)
      {
        fileSize = _files[0].size;
        fileInfo['size'] = _files[0].size;
      }

    }
    else
    {
      labelText = resetUploaderLabel(_uploader, _label);
    }


    // clear labelText from xss!
    labelText = labelText.replace('<', '').replace('>', '').replace('"', '').replace("'", '').replace('/', '').replace('\\', '');
    // save name
    fileInfo['name'] = labelText;

    _label.find('abbr').html(labelText);
    if(fileInfo['size'] && fileInfo['size'] > 0)
    {
      _uploader.attr('data-file-size', Math.round(fileInfo['size'] / 1024) + ' KB');
    }
    else
    {
      _uploader.attr('data-file-size', null);
    }

    // set ext
    if(fileInfo['name'])
    {
      var fileName = fileInfo['name'];
      fileInfo['ext'] = fileName.substr(fileName.lastIndexOf('.') + 1, fileName.length);
      fileInfo['ext'] = fileInfo['ext'].toLowerCase();
    }

    return fileInfo;
  }



  function cropFullScreen(_uploader, _label, _fileInfo, _file)
  {
    var previewCircle = "";
    if(_uploader.attr('data-preview-circle') !== undefined)
    {
      previewCircle = 'data-preview-circle';
    }

    var footer = undefined;
    footer = '<div class="cropperActions flex">';
    if(!_uploader.attr('data-ratio') || _uploader.attr('data-ratio') === 'free')
    {
      footer += '<div class="cropRatioChanger mLR5">';
      footer += '<span class="btn-outline-dark m-1" data-do data-ratio="1.7777777777777777" data-ratio2="0.5625">16:9</span>';
      footer += '<span class="btn-outline-dark m-1" data-do data-ratio="1.3333333333333333" data-ratio2="0.75">4:3</span>';
      footer += '<span class="btn-outline-dark m-1" data-do data-ratio="1">1:1</span>';
      footer += '<span class="btn-outline-dark m-1" data-do data-ratio="0.6666666666666666" data-ratio2="1.5">2:3</span>';
      footer += '<span class="btn-outline-dark m-1" data-do data-ratio="1.61803398875" data-ratio2="0.61803398875">Golden Ratio</span>';
      footer += '<span class="btn-outline-dark m-1" data-do data-ratio="NaN">Free</span>';
      footer += '</div>';
    }
    footer += '<div class="cropRotateChanger mLR5">';
    footer += '<span class="btn-outline-dark m-1" data-do data-rotate="-90">';
    footer += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>';
    footer += '</span>';
    footer += '<span class="btn-outline-dark m-1" data-do data-rotate="90">';
    footer += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>';
    footer += '</span>';
    footer += '</div>';
    footer += '</div>';


    say({
      title: "",
      html: '<div class="cropBox" ' + previewCircle + '><img src="" alt="cropBox"></div>',
      footer: footer,
      focusConfirm: true,
      animation: false,
      showConfirmButton: true,
      showCancelButton: true,
      showCloseButton:false,
      grow: "fullscreen",
      allowOutsideClick: false,
      preConfirm: (login) =>
      {

        var myUploaderFinalResult = $(_uploader.attr('data-final'));
        var newType = 'image/jpeg';
        var quality = 0.75;
        if(_fileInfo.type)
        {
          newType = _fileInfo.type;
        }

        var cropOption = {};
        if(_uploader.attr('data-max-w') !== undefined)
        {
          cropOption.width = _uploader.attr('data-max-w');
        }
        else
        {
          // cropOption.width = 2000;
        }
        if(_uploader.attr('data-max-h') !== undefined)
        {
          cropOption.height = _uploader.attr('data-max-h');
        }
        else
        {
          // cropOption.height = 2000;
        }

        // set max width and height
        cropOption.maxWidth = 4096;
        cropOption.maxHeight = 4096;

        var myCropData = cropperObj.getData();
        var myImgData = cropperObj.getImageData();

        if(  myCropData.x == 0
          && myCropData.y == 0
          && myCropData.rotate == 0
          && Math.round(myCropData.height) == Math.round(myImgData.naturalHeight)
          && Math.round(myCropData.width) == Math.round(myImgData.naturalWidth)
          // if filesize is less than 200kb don't crop
          && _fileInfo.size / 1000 < 200
          )
        {
          console.log('100% without crop ' + _fileInfo.size);
          // on other ext append file to form
          appendFileToForm(_uploader, _file, _fileInfo.size);

          if(myUploaderFinalResult.prop('selectedFileSrc'))
          {
            myUploaderFinalResult.attr('src', myUploaderFinalResult.prop('selectedFileSrc'));
            _uploader.attr('data-fill', '');
          }
          return;
        }

        var myNewImg = cropperObj.getCroppedCanvas(cropOption);

        if(myNewImg)
        {
          var imgBlob  = myNewImg.toBlob(function (_blob)
          {
            if(_fileInfo.name)
            {
              _blob.name = _fileInfo.name;
            }
            else
            {
              _blob.name = 'my-photo.jpg';
            }
            if(_fileInfo.size)
            {
              _blob.sizeBefore = _fileInfo.size;
              _blob.KB_before = Math.round(_fileInfo.size / 1024);
            }
            if(_blob.size)
            {
              _blob.KB_after = Math.round(_blob.size / 1024);
              _uploader.attr('data-file-size', _blob.KB_after + ' KB');
            }
            if(_fileInfo.ext)
            {
              _blob.ext = _fileInfo.ext;
            }

            if(_blob.KB_after > _blob.KB_before)
            {
              console.log('image size is increased from ' + _blob.KB_before + ' to ' + _blob.KB_after + 'KB:/');
            }

            appendFileToForm(_uploader, _blob, _blob.size);

          }, newType, quality);

          if(myUploaderFinalResult.length > 0)
          {
            myUploaderFinalResult.attr('src', myNewImg.toDataURL(newType, quality));
            _uploader.attr('data-fill', '');
          }
        }
      },
    })
    .then((result) =>
    {
      if (result.value)
      {
      }
      else if (result.dismiss === alerty.DismissReason.cancel)
      {
        // do nothing
      }
    });
  }


  function appendFileToForm(_uploader, _files, _size)
  {
    if(!OneFileMaxSizeOkay(_uploader, _size))
    {
      return false;
    }

    if(!_files)
    {
      return false;
    }
    // if input simple file, use only key zero
    if(_files.length === 1)
    {
      _files = _files[0];
    }

    // add to prop of frame element
    _uploader.prop('droppedFiles', _files);

    myForm = _uploader.parents('form');

    // submit form
    if(myForm.length)
    {
      // set ultimate time for upload file
      myForm.attr('data-timeout', 0);

      if(_uploader.attr('data-autoSend') !== undefined)
      {
        // console.log('auto send form');
        myForm.submit();
      }
    }
    else
    {
      console.log('form is not exist for autoSend!');
    }


    return true;
  }


  function loadImageFile(_uploader, _file)
  {
    if (_file)
    {
      var myReader = new FileReader();
      myReader.onload = function (_e)
      {
        fillCropperImg(_uploader, this.result);
      };
      // read as data
      myReader.readAsDataURL(_file);
    }
  }


  function fillCropperImg(_uploader, _imgSrc)
  {
    // if modal is visible run cropper
    if(!say.isVisible())
    {
      console.warn('modal is not loaded!');
      return;
    }

    // load image
    var $image = $('.alerty2-content .cropBox img');
    // set my img
    var myImg = $image.get(0);
    var myUploaderFinalResult = $(_uploader.attr('data-final'));
    // set image src
    $image.attr('src', _imgSrc);

    if(myUploaderFinalResult.length > 0)
    {
      myUploaderFinalResult.prop('selectedFileSrc', _imgSrc);
    }

    var myInitRatio = _uploader.attr('data-ratio');
    var myAutoCropArea = 1;
    if(myInitRatio && myInitRatio > 0)
    {
      // do nothing
    }
    else
    {
      myInitRatio = 16 / 9;
    }

    // define ratio as same as init ratio
    var myRatio = myInitRatio;
    if(_uploader.attr('data-ratio-free') !== undefined)
    {
      if(_uploader.attr('data-ratio-free'))
      {
        myInitRatio = _uploader.attr('data-ratio-free');
      }
      else
      {
        myInitRatio = NaN;
      }
      myRatio = NaN;
      // myAutoCropArea = 0.9;
    }

    var minCropWidth = 250;
    var minCropHeight = 250;

    if(_uploader.attr('data-min-w') !== undefined)
    {
      minCropWidth = _uploader.attr('data-min-w');
    }

    // if(_uploader.attr('data-min-h') !== undefined)
    // {
    //   minCropHeight = _uploader.attr('data-min-h');
    // }
    var cropOptions =
    {
      viewMode:1,
      autoCropArea:myAutoCropArea,
      // zoomable:false,
      // zoomOnWheel: false,
      minCropBoxWidth:minCropWidth,
      minCropBoxHeight:minCropHeight,
      initialAspectRatio: myInitRatio,
      aspectRatio: myRatio,
      crop(event) {
        // console.log(event.detail.x);
        // console.log(event.detail.y);
        // console.log(event.detail.width);
        // console.log(event.detail.height);
      },
    };

    // draw new one
    cropperObj = new Cropper(myImg, cropOptions);

    $(document).off('click.cropBtn').on('click.cropBtn', '.cropperActions [data-do]', function ()
    {
      var newRotate = $(this).attr('data-rotate');
      if(newRotate)
      {
        cropperObj.rotate(newRotate);
      }
        var newRatio = $(this).attr('data-ratio');
        if(newRatio || newRatio === NaN)
        {
          var newRatio2 = $(this).attr('data-ratio2');
          var ratioBox = $(this).parents('.cropRatioChanger');
          var applyRatio = null;

          applyRatio = newRatio;
          // if we have ratio2 and last one is the same, use ratio2
          if(ratioBox.attr('data-applyRatio') === newRatio && newRatio2)
          {
            applyRatio = newRatio2;
          }

          // apply ratio
          ratioBox.attr('data-applyRatio', applyRatio);
          cropperObj.setAspectRatio(applyRatio);
        }
    });

  }


  function setDropEffect(dataTransfer, effect)
  {
    // is in try catch as IE11 will throw error if not
    try {
      dataTransfer.effectAllowed = effect;
      dataTransfer.dropEffect = effect;
    } catch (e) {}
  };

  // on dragover show class
  [ 'dragover', 'dragenter' ].forEach( function( _event )
  {
    $(document).off(_event).on(_event, function(_e)
    {
      myDataTransfer = _e.originalEvent.dataTransfer;
      var myDragEl = $(_e.target).parents('[data-uploader]');
      if(myDragEl.length)
      {
        setDropEffect(myDataTransfer, 'copy');
        if(myDragEl.attr('data-dragover') !== 'zone')
        {
          myDragEl.attr('data-dragover', 'zone');
        }
      }
      else
      {
        setDropEffect(myDataTransfer, 'none');
        if(myDragEl.attr('data-dragover') !== '')
        {
          myDragEl.attr('data-dragover', '');
        }
      }
      // preventing the unwanted behaviours
      _e.preventDefault();
      _e.stopPropagation();
    });
  });

  // on draglease remvoe class
  [ 'dragleave', 'dragend', 'drop' ].forEach( function( _event )
  {
    $(document).off(_event).on(_event, function(_e)
    {
      // preventing the unwanted behaviours
      _e.preventDefault();
      _e.stopPropagation();
      $('[data-uploader]').attr('data-dragover', null);
    });
  });

  function setFiles()
  {
      if( droppedFiles )
      {
        Array.prototype.forEach.call( droppedFiles, function( file )
        {
          ajaxData.append( input.getAttribute( 'name' ), file );
        });
      }
  }


}

