(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=273)})({273:function(){function a(a){return`subcontext_${a}`}var b=__noderequire('vm'),c=__noderequire('fs'),d=__noderequire('path'),e=1,f={};__WeixinJSContext.create=(c)=>{if(/^subContext(\.js)?$/.test(c)){function c(a){return a.replace(/^function \(\)\{/,'').replace(/\}$/,'')}if(!window.__subVendors__||!window.__subVendorCode__||0===window.__subVendors__.length)return console.warn(`subcontext vendor code not found`),0;if(!__subContextCode__||0===Object.keys(__subVendorCode__).length)return console.warn(`subcontext code not found`),-1;const g=a(e),h=window.__global.getNewWeixinJSBridge(g);window.__global.WeixinJSBridgeMap[g]=h;var d={WeixinJSContext:__WeixinJSContext,__devtoolssubcontext:!0,WeixinJSBridge:h,__wxConfig};b.createContext(d),f[e]=d;for(let a,e=0;e<__subVendors__.length;e++)a=__subVendors__[e],code=c(__subVendorCode__[a].toString()),b.runInContext(code,d,{filename:a});for(let a in __subContextCode__){let e=c(__subContextCode__[a].toString());b.runInContext(e,d,{filename:a})}return b.runInContext(`require("${__subbegin__}")`,d),e++,e-1}return 0},__WeixinJSContext.destroy=(a)=>{delete f[a]},window.__sandbox_map_=f,console.group(`${new Date} subcontext 调试信息`),console.info('subcontext \u90E8\u5206\u811A\u672C\u4EE3\u7801\u6682\u65F6\u4E0D\u652F\u6301\u5355\u6B65\u8C03\u8BD5\uFF0C\u8BF7\u4F7F\u7528 console \u6253\u5370\u65E5\u5FD7\u6765\u5E2E\u52A9\u8C03\u8BD5\u3002'),console.groupEnd()}});