'use strict';!function(require,directRequire){function a(){u={}}function b(a,b){let c=e.extname(b);'.js'===c&&delete u[b]}async function c(c){let d=await i(c);s&&s.srcPath==d.srcPath||(a(),s&&s.unWatch(b),s=d,s.watch(b)),t&&t.es6!=c.setting.es6&&a(),t=c.setting}function d(a){w.push(a),v&&clearTimeout(v),v=setTimeout(()=>{v=void 0,k.display({command:l.DISPLAY_INFO,type:'COMPILE_JS_TOO_LARGE_IGNORE',data:{files:[...w]}}),w=[]},1e3)}const e=require('path'),f=require('./d28a711224425b00101635efe1034c99.js'),g=require('babel-code-frame'),h=require('babel-core'),i=require('./162bf2ee28b76d3b3d95b685cede4146.js'),j=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),k=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./949d8235c744ced2a80121e4dba34c28.js'),n=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),o=require('./9beb6be9c4f08fd7406b0e6f964234ea.js'),p=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js');let q;const{noBrowser:r}=require('./ebfcad0a5e72b6e693634486564b1394.js');var s,t,u={};let v,w=[];const x={};a(),module.exports=async function(a,b,f={}){if(b=decodeURI(b),await c(a),!u[b]||f.force){let c=await s.getFile(b),g=await n(a),h=g.workers&&0===b.indexOf(g.workers);if(a.setting.es6){let a=e.basename(b);if(512000>c.length){let d=!0;try{d=!p.getState().settings.compiler.clusterCompile,'number'!=typeof q&&(q=require('os').cpus().length),d=d||4>=q}catch(a){console.error(a),d=!0}x[b]=!1;let e=await o({taskName:'processJS',config:{projectPath:s.srcPath,file:b,es6:'yes',sourceMaps:'map',sourceFileName:a},dataStr:c,useBackup:!0,maxTimeout:60000,forceBackup:d});if(e.error)throw e.error;c=e.map?`${e.code}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${new Buffer(e.map).toString('base64')}`:e.code}else x[b]=!0,f.noWarnings||d(b)}c=`define("${b}", function(require, module, exports, ${r}){ ${c}\n});`,h&&(c=`__workersCode__['${b}'] = ${JSON.stringify(c)}`),u[b]=c}else u[b]&&a.setting.es6&&x[b]&&(f.noWarnings||d(b));return u[b]}}(require('lazyload'),require);