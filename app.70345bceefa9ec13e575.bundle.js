!function(t){function e(e){for(var r,a,u=e[0],s=e[1],h=e[2],c=0,l=[];c<u.length;c++)a=u[c],i[a]&&l.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(f&&f(e);l.length;)l.shift()();return o.push.apply(o,h||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={0:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var f=s;o.push([9,2]),n()}({9:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(2),a=n.n(o);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e,n){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.right=n,this.offset=20,this.speed=1,this.width=15,this.height=Math.min(100,e.height/5);var r=Math.floor((e.height-this.height)/2),o=this.offset-this.width/2;n&&(o=e.width-o-this.offset),this.position=new i.a.Vector(o,r)}var e,n;return e=t,(n=[{key:"move",value:function(t,e){var n=this.position.y+t*this.speed;n<=0||e<=n||(this.position.y=n)}},{key:"draw",value:function(t){t.stroke(255,255,255),t.rect(this.position.x,this.position.y,this.width,this.height)}}])&&u(e.prototype,n),t}();function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.radius=15;var n=(e.width-this.radius)/2,r=(e.height-this.radius)/2;this.position=new i.a.Vector(n,r)}var e,n;return e=t,(n=[{key:"draw",value:function(t){t.stroke(255,255,255),t.rect(this.position.x,this.position.y,this.radius,this.radius)}}])&&h(e.prototype,n),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.left=new s(e,!1),this.right=new s(e,!0),this.ball=new f(e)}var e,n;return e=t,(n=[{key:"draw",value:function(t){this.left.draw(t),t.stroke(255,255,255,150),t.strokeWeight(2),t.line(t.width/2,0,t.width/2,t.height),this.right.draw(t),this.ball.draw(t)}}])&&c(e.prototype,n),t}();function d(t){return Number(t.replace("px",""))}document.addEventListener("DOMContentLoaded",function(){var t=window.getComputedStyle(document.getElementById("gameContainer"),null),e=d(t.width)-(d(t.paddingLeft)+d(t.paddingRight)),n=d(t.height)-(d(t.paddingTop)+d(t.paddingBottom)),r=new a.a;r.setMode(0),document.body.appendChild(r.domElement),new i.a(function(t){var i;t.setup=function(){t.createCanvas(e,n),i=new l(t)},t.draw=function(){t.clear(),t.background("#000"),r.begin(),i.draw(t),r.end()}},document.getElementById("root"))},!1)}});
//# sourceMappingURL=app.70345bceefa9ec13e575.bundle.js.map