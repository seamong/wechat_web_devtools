'use strict';!function(require,directRequire){async function a(){return new Promise((a)=>{chrome.debugger.getTargets((b)=>{a(b)})})}async function b(a,b){return new Promise((c,d)=>{let e=b.find((b)=>{return b&&!b.attach&&b.url===a.src});if(!e)return void d(`did not find target`);var f={targetId:e.id};chrome.debugger.attach(f,'1.2',()=>{c(f)})})}async function c(a){return new Promise((b)=>{chrome.debugger.sendCommand(a,'DOM.enable',()=>{b(a)})})}async function d(a){return new Promise((b)=>{chrome.debugger.sendCommand(a,'Overlay.enable',()=>{b(a)})})}async function e(a){return new Promise((b)=>{chrome.debugger.sendCommand(a,'CSS.enable',()=>{b(a)})})}async function f(a,b){return new Promise((c)=>{chrome.debugger.sendCommand(a,'Emulation.setDeviceMetricsOverride',{width:parseInt(b.width),height:parseInt(b.height),deviceScaleFactor:parseFloat(b.dpr),mobile:!0,fitWindow:!1,scale:1,screenHeight:parseInt(b.height),screenWidth:parseInt(b.width),positionX:0,positionY:0,screenOrientation:{angle:0,type:'portraitPrimary'}},()=>{c(a)})})}var g={};chrome.debugger.onEvent.addListener(function(a,b,c){let d=a.targetId;g[d]&&'function'==typeof g[d].onEventCall&&g[d].onEventCall(a,b,c)}),chrome.debugger.onDetach.addListener(function(a,b){let c=a.targetId;g[c]&&('function'==typeof g[c].onDetachCall&&g[c].onDetachCall(a,b),delete g[c])}),module.exports={start:async function(h,i){let j=await a(),k=await b(h,j);return g[k.targetId]={onEventCall:i.onEventCall,onDetachCall:i.onDetachCall},await c(k),await e(k),await d(k),await f(k,i.device),k},sendCommand:function(a,b,c,d){c?chrome.debugger.sendCommand(a,b,c,d):chrome.debugger.sendCommand(a,b,d)},setEmulationTouch:async function(a,b=!0){return new Promise((c)=>{chrome.debugger.sendCommand(a,'Emulation.setTouchEmulationEnabled',{enabled:b,configuration:'desktop'},()=>{c(a)})})},setEmulationDeviceMetricsOverride:f}}(require('lazyload'),require);