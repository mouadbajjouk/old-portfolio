!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:1e3,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:50,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},i=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},c=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(s,u){var l,d,f,m,h={};h.cancelScroll=function(e){cancelAnimationFrame(m),m=null,e||c("scrollCancel",l)},h.animateScroll=function(o,s,u){h.cancelScroll();var d=n(l||t,u||{}),p="[object Number]"===Object.prototype.toString.call(o),g=p||!o.tagName?null:o;if(p||g){var y=e.pageYOffset;d.header&&!f&&(f=document.querySelector(d.header));var v,S,E,b=r(f),O=p?o:function(t,n,o,r){var i=0;if(t.offsetParent)do{i+=t.offsetTop,t=t.offsetParent}while(t);return i=Math.max(i-n-o,0),r&&(i=Math.min(i,a()-e.innerHeight)),i}(g,b,parseInt("function"==typeof d.offset?d.offset(o,s):d.offset,10),d.clip),I=O-y,M=a(),A=0,w=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(I,d),C=function(t){var n,a,r;v||(v=t),A+=t-v,E=y+I*(a=S=(S=0===w?0:A/w)>1?1:S,"easeInQuad"===(n=d).easing&&(r=a*a),"easeOutQuad"===n.easing&&(r=a*(2-a)),"easeInOutQuad"===n.easing&&(r=a<.5?2*a*a:(4-2*a)*a-1),"easeInCubic"===n.easing&&(r=a*a*a),"easeOutCubic"===n.easing&&(r=--a*a*a+1),"easeInOutCubic"===n.easing&&(r=a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1),"easeInQuart"===n.easing&&(r=a*a*a*a),"easeOutQuart"===n.easing&&(r=1- --a*a*a*a),"easeInOutQuart"===n.easing&&(r=a<.5?8*a*a*a*a:1-8*--a*a*a*a),"easeInQuint"===n.easing&&(r=a*a*a*a*a),"easeOutQuint"===n.easing&&(r=1+--a*a*a*a*a),"easeInOutQuint"===n.easing&&(r=a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a),n.customEasing&&(r=n.customEasing(a)),r||a),e.scrollTo(0,Math.floor(E)),function(t,n){var a=e.pageYOffset;if(t==n||a==n||(y<n&&e.innerHeight+a)>=M)return h.cancelScroll(!0),i(o,n,p),c("scrollStop",d,o,s),v=null,m=null,!0}(E,O)||(m=e.requestAnimationFrame(C),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(o,p,d),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(o,Math.floor(O),!1):(c("scrollStart",d,o,s),h.cancelScroll(!0),e.requestAnimationFrame(C))}};var p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(s))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var n,a;try{n=o(decodeURIComponent(d.hash))}catch(e){n=o(d.hash)}if("#"===n){if(!l.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(l),h.animateScroll(a,d))}},g=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||h.animateScroll(t,null,{updateURL:!1})}};h.destroy=function(){l&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",g,!1),h.cancelScroll(),l=null,d=null,f=null,m=null)};return function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),l=n(t,u||{}),f=l.header?document.querySelector(l.header):null,document.addEventListener("click",p,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",g,!1)}(),h}});