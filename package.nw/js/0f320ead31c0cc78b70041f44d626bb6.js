'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=require('./66b1f61488bc6b47514c1659489b40b9.js'),c=require('./cec6fa445b36e82b831c3020815b08b9.js'),d=require('./e221182c769190494810c4c8f9edfd6c.js'),e=require('./e2aa3243aab87fb8f8f64db0fc42c5cc.js'),f=require('./f81bd6d4e666827b025a83f7fc13cbce.js'),g=require('./4019450fe1287c4b4fbcee117cf71783.js'),h=require('./fb50036318d6bd7d2a71f03b2ad8f0a5.js'),i=require('./bca39c8f5fcb482686e5d83e1a22602b.js'),j=require('./9fbf5cd6cc9b8e6faf7b299ad64ad6d5.js'),k=require('./dcfedbd7abdb7daa64023e073a9fffd9.js'),{REHYDRATE:l}=require('redux-persist/constants');module.exports=function(a={rehydrated:!1},m){switch(m.type){case l:{_extends({},a,{rehydrated:!0});return{rehydrated:!0,user:b(void 0,m),window:c(void 0,m),project:d(void 0,m),simulator:e(void 0,m),toolbar:f(void 0,m),debug:g(void 0,m),settings:h(void 0,m),config:i(void 0,m),info:j(void 0,m),webdebugger:k(void 0,m)}}default:return _extends({},a,{user:b(a.user,m),window:c(a.window,m),project:d(a.project,m),simulator:e(a.simulator,m),toolbar:f(a.toolbar,m),debug:g(a.debug,m),settings:h(a.settings,m),config:i(a.config,m),info:j(a.info,m),webdebugger:k(a.webdebugger,m)});}}}(require('lazyload'),require);