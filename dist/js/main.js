!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.audioPlayer=function(){var e=document.querySelector(".audioPlayer__play"),t=document.querySelector(".audioPlayer__next"),n=document.querySelector(".audioPlayer__prev"),r=document.querySelector(".audioPlayer__repeat"),c=document.querySelector(".random__random"),o=[],a=document.querySelector(".volume__item"),s=document.querySelector(".audioPlayer__volume"),l=document.querySelector(".audioPlayer__track"),u=document.querySelector(".track__item"),d=document.querySelector(".audioPlayer__wrapp"),v=document.querySelector(".track__current-time"),f=new Audio,m=function(){function e(t,n,i,r,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.authorName=n,this.formatMusic=r,this.srcMusic=i+this.authorName+"-"+this.title+"."+this.formatMusic,this.numblist=c,this.addPlayList()}return i(e,[{key:"addPlayList",value:function(){o.push(this)}}]),e}();new m("_Save_Me","XXXTENTACION_","music/","mp3",0),new m("numb","xxxtentacion","music/","mp3",1);var y=null,p=function(e){E(),f.src=e[0].srcMusic,y=e[0].numblist,t.onclick=function(t){_(e)},n.onclick=function(t){g(e)},f.onended=function(){h(e,f.src)<e.length-1&&_(e)}},_=function(e){var t=h(e,f.src);f.src=e[t+1].srcMusic,y=t+1,L(),E()},g=function(e){var t=h(e,f.src);f.src=e[t-1].srcMusic,y=t-1,L(),E()},h=function(e,t){t=t.split("/").slice(4).join("/");for(var n=0;n<e.length;n++)if(e[n].srcMusic==t)return n};f.addEventListener("timeupdate",function(e){var t=e.currentTarget.duration,n=e.currentTarget.currentTime;u.style.width=100/t*n+"%"});var L=function(){var e=document.querySelector(".svg-play-js");f.paused?(f.play(),e.classList.remove("svg-active"),e.nextElementSibling.classList.add("svg-active")):(f.pause(),e.classList.add("svg-active"),e.nextElementSibling.classList.remove("svg-active"))},E=function(){y<=0?n.classList.add("song-last"):n.classList.remove("song-last"),y===o.length-1?t.classList.add("song-last"):t.classList.remove("song-last")};e.addEventListener("click",function(){L()});a.style.width=100*f.volume+"%",s.addEventListener("mousedown",function(e){e.preventDefault();var t=a.clientWidth,n=function(n){b(e.pageX,n.pageX,t)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",n)})}),s.addEventListener("click",function(e){var t=-1*(e.currentTarget.offsetLeft-e.pageX);a.style.width=t+"px",S(t)});var b=function(e,t,n){var i=e-t,r=a.clientWidth/1.6;a.style.width=Math.min(n-i,Math.max(0,s.clientWidth))+"px",S(r)},S=function(e){f.volume=1*e/100>1?1:1*e/100};l.addEventListener("click",function(e){u.style.width=0,u.style.width=e.offsetX/e.currentTarget.offsetWidth*100+"%",f.currentTime=q(e.offsetX,e.currentTarget.offsetWidth)});var q=function(e,t){return e/t*100*f.duration/100};d.addEventListener("mouseover",function(e){e.preventDefault();var t=e.pageX,n=e.offsetX,i=function(e){var i=t-e.pageX;v.style.left=Math.min(n-i,Math.max(0,d.offsetWidth))+"px",v.classList.add("visible");var r=q(e.offsetX,e.target.offsetWidth);f.duration<60?v.textContent="0."+Math.floor(r):v.textContent=(r/60).toFixed(2)};document.addEventListener("mousemove",i),d.addEventListener("mouseout",function(){v.classList.remove("visible"),document.removeEventListener("mousemove",i)})}),r.addEventListener("click",function(){f.loop?f.loop=!1:f.loop=!0}),c.addEventListener("click",function(e){var t=o.slice();if(e.currentTarget.classList.contains("active")){var n=function(e){for(var t=void 0,n=void 0,i=e.length-1;i>0;i--)n=e[t=Math.floor(Math.random()*(i+1))],e[t]=e[i],e[i]=n;return e}(t);p(n)}else p(o);L()}),p(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.scroll=function(){var e=document.querySelector(".scroll-bar"),t=document.querySelector(".scroll-bar__track"),n=document.querySelectorAll(".playlist__list"),i=new Event("scroll");n.forEach(function(n){n.addEventListener("scroll",function(n){var i=document.querySelector(".playlist__list--active");t.style.height=e.clientHeight*i.clientHeight/i.scrollHeight+"px",t.style.top=e.clientHeight*i.scrollTop/i.scrollHeight+"px"})}),n.forEach(function(e){e.dispatchEvent(i)}),t.addEventListener("mousedown",function(i){i.preventDefault();var r=t.offsetTop,c=function(c){var o=document.querySelector(".playlist__list--active"),a=c.pageY-i.pageY;t.style.bacgroundColor="#d24a43",t.style.top=Math.min(e.clientHeight-t.clientHeight,Math.max(0,r+a))+"px",t.scrollTop=n.clientHeight+t.offsetTop/e.clientHeight,o.scrollTop=o.scrollHeight*t.offsetTop/e.clientHeight};document.addEventListener("mousemove",c),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",c)})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.eventClick=function(){var e,t=document.querySelector(".audioPlayer__play"),n=document.querySelector(".audioPlayer__next"),i=document.querySelector(".audioPlayer__prev"),r=document.querySelector(".audioPlayer__repeat"),c=document.querySelector(".random__random");(e=document.querySelectorAll(".playlist__item")).forEach(function(t){t.addEventListener("click",function(t){var n=event.currentTarget;e.forEach(function(e){e.classList.remove("playlist__item--active")}),n.classList.contains("playlist__item--active")||n.classList.add("playlist__item--active")})}),n.addEventListener("click",function(e){var n=e.currentTarget,i=t.children;n.classList.contains("song-last")||(i[1].classList.add("svg-active"),i[0].classList.remove("svg-active"))}),i.addEventListener("click",function(e){var n=t.children;e.currentTarget.classList.contains("song-last")||(n[1].classList.add("svg-active"),n[0].classList.remove("svg-active"))}),r.addEventListener("click",function(e){o(e.currentTarget)}),c.addEventListener("click",function(e){o(e.currentTarget)});var o=function(e){var t=e;t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.carusel=function(){for(var e=document.querySelectorAll(".playlist__btn"),t=document.querySelector(".playlist__name--active"),n=document.querySelectorAll(".playlist__list"),i=document.querySelector(".playlist__list--active"),r=function(e,n){var r=e.previousElementSibling,c=n.previousElementSibling;e.classList.remove("playlist__list--active"),n.classList.remove("playlist__name--active"),r.classList.add("playlist__list--active"),c.classList.add("playlist__name--active"),i=r,t=c},c=function(){for(var e=0;e<n.length;e++)if(n[e].classList.contains("playlist__list--active"))return e},o=0;o<e.length;o++)e[o].addEventListener("click",function(e){var o,a,s,l,u=c(),d=e.currentTarget;if(d.classList.contains("playlist__btn--next")){if(!(u<n.length-1))return;a=t,s=(o=i).nextElementSibling,l=a.nextElementSibling,o.classList.remove("playlist__list--active"),a.classList.remove("playlist__name--active"),l.classList.add("playlist__name--active"),s.classList.add("playlist__list--active"),i=s,t=l}if(d.classList.contains("playlist__btn--prev")){if(!(u>0))return;r(i,t)}})}},function(e,t,n){"use strict";var i=n(3),r=n(2),c=n(1),o=n(0);document.addEventListener("DOMContentLoaded",function(e){(0,i.carusel)(),(0,r.eventClick)(),(0,c.scroll)(),(0,o.audioPlayer)()})}]);
//# sourceMappingURL=main.js.map