(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=302)})({2:function(a){function b(a){l=a?a:l,j=new f(k,l),j.onopen=function(){let a=[].concat(n);n=[],a.forEach((a)=>{c(a)})},j.onclose=function(){j=null,setTimeout(()=>{b(a)})},j.onmessage=function(a){try{let b=JSON.parse(a.data);d(b)}catch(a){}}}function c(a){j&&j.readyState===f.OPEN?j.send(JSON.stringify(a)):n.push(a)}function d(){m.forEach((a)=>{try{a.apply(this,arguments)}catch(a){console.error(a)}})}var e=window.navigator||window.__global.navigator,f=window.WebSocket||window.__global.WebSocket,g=e.userAgent,h=g.match(/port\/(\d*)/),i=h?parseInt(h[1]):9974,j=null,k=`ws://127.0.0.1:${i}`,l=null,m=[],n=[];a.exports={connect:b,send:c,registerCallback:(a)=>{m.push(a)}}},246:function(a,b,c){'use strict';b.a=function(a,b,c){let d=g++;f[d]=c,e.a.send({command:'WEBVIEW_INVOKE',data:{api:a,args:b,callbackID:d}})};var d=c(34),e=c.n(d);let f={},g=1;e.a.registerCallback((a)=>{let{command:b,data:c}=a;if('WEBVIEW_INVOKE_CALLBACK'===b){let a=c.callbackID,b=f[a];'function'==typeof b&&b(c.res),delete f[a]}})},247:function(a,b,c){'use strict';function d(a,b){let c=h[a];'function'==typeof c&&c(b,g.a)}b.a=function(a,b){b&&(h[a]=b)};var e=c(34),f=c.n(e),g=c(303);const h={};f.a.registerCallback((a)=>{let{command:b,data:c}=a;'WEBVIEW_ON_EVENT'===b&&d(c.eventName,c.data)})},248:function(a,b,c){'use strict';b.a=function(a,b){e.a.send({command:'WEBVIEW_PUBLISH',data:{eventName:a,data:b}})};var d=c(34),e=c.n(d)},249:function(a,b,c){'use strict';function d(a,b,c){let d=g[a];'function'==typeof d&&d(b,c)}b.a=function(a,b){g[a]=b};var e=c(34),f=c.n(e),g={};f.a.registerCallback((a)=>{let{command:b,data:c,webviewID:e}=a;'APPSERVICE_PUBLISH'===b&&d(c.eventName,c.data,e)})},302:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(247),e=c(246),f=c(248),g=c(249);window.WeixinJSBridge={on:d.a,invoke:e.a,publish:f.a,subscribe:g.a}},303:function(a,b,c){'use strict';c.d(b,'a',function(){return f});const d=navigator.userAgent;let e=d.match(/webview\/(\d*)/),f=e?parseInt(d.match(/webview\/(\d*)/)[1]):0,g=-1!==d.indexOf('Android'),h=-1!==d.indexOf('iPhone'),i=-1!==d.indexOf('weapp')},34:function(a,b,c){const d=c(2);var e=navigator.userAgent,f=e.match(/gamenativeview\/([^\s]*)/)[1];(function(){let a=`GAMENATIVEVIEW_${f}`;console.error(a),d.connect(a)})(),a.exports={send:function(a){console.error(a),a.fromWebviewID=f,d.send(a)},registerCallback:d.registerCallback}}});