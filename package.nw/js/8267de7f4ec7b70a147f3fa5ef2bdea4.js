'use strict';!function(require,directRequire){function a(a,b,c,d){c=0<c?c:1;let e=h(a,b,c);return`${d}\n${e}`}async function b(b){let h=await l(b),m=h.srcPath,n=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),q='app.json',r='';try{r=h.getFile(q)}catch(a){let b=new Error(g.config.FILE_NOT_FOUND.format(q));throw b.code=p.APP_JSON_READ_ERR,b.ext=a.toString(),b}let s={};try{s=f.parse(r),s=JSON.parse(r)}catch(b){let c=`Expecting ${b.expected}, got ${b.token}`,d=a(r,b.line,b.loc.first_column,c),e=new Error(d);throw e.code=p.APP_JSON_PARSE_ERR,e}let t=b.compileType,u=s.pages||[];if('array'!=e.getType(u)||0===u.length){let a=new Error(g.config.ENTRANCE_NOT_FOUND.format(JSON.stringify(u)));throw a.code=p.APP_JSON_ENTRANCE_NOT_FOUND_ERR,a}let v=!s.entryPagePath,w={};for(let a,e=0;e<u.length;e++){if(a=u[e],w[a]){let b=new Error(g.config.JSON_PAGES_REPEAT.format([q,a]));throw b.code=p.APP_JSON_PAGES_ERR,b}if(w[a]=!0,v||a!=s.entryPagePath||(v=!0),!d.existsSync(c.join(m,`${u[e]}\.wxml`))){let b=new Error(g.config.JSON_PAGE_WXML_NOT_EXISTS.format([q,a]));throw b.code=p.APP_JSON_WXML_NOT_FOUND,b}if(!d.existsSync(c.join(m,`${u[e]}\.js`))){let b=new Error(g.config.JSON_PAGE_JS_NOT_EXISTS.format([q,a]));throw b.code=p.APP_JSON_JS_NOT_FOUND,b}}let x=s.tabBar;if(x){let a;if('array'!=e.getType(x.list))a=new Error(g.config.JSON_TABBAR_SHOULD_BE_LIST);else if(!x.list||x.list.length<n.setting.MinTabbarCount)a=new Error(g.config.JSON_TABBAR_AT_LEAST.format(n.setting.MinTabbarCount));else if(x.list.length>n.setting.MaxTabbarCount)a=new Error(g.config.JSON_TABBAR_AT_MOST.format(n.setting.MaxTabbarCount));else{let b=[];for(var y=0;y<x.list.length;y++){let a=x.list[y];if('object'!=e.getType(a)){b.push(g.config.JSON_TABBAR_ITEM_OBJECT.format(y));continue}let f=a.pagePath;if(!f){b.push(g.config.JSON_TABBAR_PATH_EMPTY.format(y));continue}if('string'!=e.getType(f)){b.push(g.config.JSON_TABBAR_PATH_STRING.format(y));continue}2<=f.split('?').length&&b.push(g.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([y,'?'])),2<=f.split('.').length&&b.push(g.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([y,'.']));let h=[];if(a.iconPath){let b=c.join(m,a.iconPath);a.iconPath=c.relative(m,b),h.push({name:'iconPath',path:b})}if(a.selectedIconPath){let b=c.join(m,a.selectedIconPath);a.selectedIconPath=c.relative(m,b),h.push({name:'selectedIconPath',path:b})}h.forEach((a)=>{if(!d.existsSync(a.path))return b.push(g.config.JSON_TABBAR_ICON_NOT_FOUND.format([y,a.name]));let e=d.statSync(a.path);if(e.isDirectory())return b.push(g.config.JSON_TABBAR_ICON_NOT_DIR.format([y,a.name]));e.size>1024*n.setting.MaxTabbarIconSize&&b.push(g.config.JSON_TABBAR_ICON_MAX_SIZE.format([y,a.name,n.setting.MaxTabbarIconSize]));let f=c.extname(a.path);0>o.indexOf(f)&&b.push(g.config.JSON_TABBAR_ICON_EXT.format([y,a.name,o.join('\u3001')]))})}0<b.length&&(a=new Error(b.join('\n')))}if(a)throw a.code=p.APP_JSON_CONTENT_ERR,a}if(t==k.conversation||t==k.search){let a,f=s.widgets,h='';if(!f)a=new Error(g.config.JSON_WIDGETS_EMPTY);else if('array'!=e.getType(f))a=new Error(g.config.JSON_WIDGETS_NOT_ARRAY);else{let i=[];f.forEach((a,f)=>{if('object'!=e.getType(a))i.push(g.config.JSON_WIDGETS_ITEM_NOT_OBJECT.format(f));else if('conversation'!=a.type&&'search'!=a.type)i.push(g.config.JSON_WIDGETS_TYPE_INVALID.format([f,'conversation\u3001search']));else if(!a.path||'string'!=e.getType(a.path))i.push(g.config.JSON_WIDGETS_PATH_NOT_FOUND.format(f));else if(!d.existsSync(c.join(m,a.path)))i.push(g.config.JSON_WIDGETS_PATH_NOT_FOUND.format(f));else{let b=d.statSync(c.join(m,a.path));b.isDirectory()||i.push(g.config.JSON_WIDGETS_PATH_SHOULD_BE_DIR.format(f))}h||a.type!=b.compileType||(h=a.path)}),h||i.push(g.config.JSON_WIDGETS_TYPE_NOT_FOUND.format(b.compileType)),0<i.length&&(a=new Error(i.join('\n')))}if(a)throw a.code=p.APP_JSON_CONTENT_ERR,a}let i=await j(b);if(i)for(let a in i)'extPages'!=a&&(s[a]='object'==e.getType(i[a])?Object.assign({},s[a]||{},i[a]):i[a]);if(s.subPackages){if('array'!=e.getType(s.subPackages)){let a=new Error(g.config.JSON_CONTENT_SHOULD_BE.format(['subPackages','array']));throw a.code=p.APP_JSON_CONTENT_ERR,a}let a={},b={},f=[];if(s.subPackages.forEach((h,i)=>{if('string'!=e.getType(h.root))return void f.push(g.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'string']));if(u.forEach((a)=>{0==a.indexOf(h.root)&&f.push(g.config.JSON_PAGE_SHOULD_NOT_IN_SUBPACKAGE.format([`pages ${a}`,`subPackages[${i}]`]))}),!d.existsSync(c.join(m,h.root)))return void f.push(g.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'\u76EE\u5F55']));let j=d.statSync(c.join(m,h.root));return j.isDirectory()?a[h.root]?void f.push(g.config.JSON_SUBPACKAGE_EXIST.format([`subPackages[${i}].root`])):(a[h.root]=!0,'array'==e.getType(h.pages)?void h.pages.forEach((a)=>{let e=c.posix.join(h.root,a);return b[e]?void f.push(g.config.JSON_PAGES_REPEAT.format([`subPackages[${i}]`,a])):void(b[e]=!0,!v&&e==s.entryPagePath&&(v=!0),!d.existsSync(c.join(m,`${e}\.wxml`))&&f.push(g.config.JSON_PAGE_WXML_NOT_EXISTS.format([`subPackages[${i}]`,'pages',e])),!d.existsSync(c.join(m,`${e}\.js`))&&f.push(g.config.JSON_PAGE_JS_NOT_EXISTS.format([`subPackages[${i}]`,'pages',e])))}):void f.push(g.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].pages`,'array']))):void f.push(g.config.JSON_CONTENT_SHOULD_BE.format([`subPackages[${i}].root`,'\u76EE\u5F55']))}),0<f.length){let a=new Error(f.join('\n'));throw a.code=p.APP_JSON_CONTENT_ERR,a}}if(!v){let a=new Error(g.config.JSON_ENTRY_PAGE_PATH_NOT_FOUND.format(['pages\u3001subPackages','entryPagePath']));throw a.code=p.APP_JSON_PAGES_ERR,a}return s}const c=require('path'),d=require('fs'),e=require('./84b183688a46c9e2626d3e6f83365e13.js'),f=require('./libs/jsonlint.js').parser,g=require('./common/locales/index.js'),h=require('babel-code-frame'),j=require('./551bb965e1f344281d555a429cd2140c.js'),k=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),l=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),m=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),n=require('./6242f55dbdfe53c2f07b7a51568311f2.js').errorPrefix,o=['.png','.jpg','.jpeg'],p=require('./949d8235c744ced2a80121e4dba34c28.js');f.parseError=f.lexer.parseError=function(a,b){throw b},module.exports=async function(a){try{return await b(a)}catch(a){switch(a.code){case p.APP_JSON_READ_ERR:case p.APP_JSON_ENTRANCE_NOT_FOUND_ERR:case p.APP_JSON_PARSE_ERR:case p.APP_JSON_PAGES_ERR:case p.APP_JSON_CONTENT_ERR:case p.EXT_JSON_PAGES_ERR:case p.EXT_JSON_PARSE_ERR:break;default:a.code=p.APP_JSON_CONTENT_ERR;}throw a}}}(require('lazyload'),require);