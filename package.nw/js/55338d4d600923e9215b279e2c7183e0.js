'use strict';!function(require,directRequire){const a=require('react'),b=require('react-dom');module.exports=class extends a.Component{constructor(){super(),this.state={}}componentDidMount(){const a=b.findDOMNode(this.container);if(!a)return;let c,d;c=this.webview=document.createElement('webview'),c.setAttribute('partition','persist:devtools'),c.src='about:blank',a.appendChild(c);const e=()=>{c.removeEventListener('loadcommit',e),c.addEventListener('dialog',(a)=>{a.preventDefault();const b=a.messageType,c=a.messageText,d=a.dialog;if('alert'===b&&(d&&d.ok(),0<=c.indexOf('opennewtab:'))){const a=c.replace('opennewtab:','');this.handleNewWindow(a)}})},f=()=>{d.removeEventListener('loadcommit',f),d.showDevTools(!0,c);const a=`${c.getUserAgent()} qclouddebugdevtools port/${global.messageCenterPort}`;c.setUserAgentOverride(a),c.src=`${this.props.qcloud.inspectUrl}`,c.setAttribute('style','position: relative; width: 100%; height: 100%; margin: 0 auto;'),c.addEventListener('loadcommit',e),d.parentNode.removeChild(d)},g=()=>{c.removeEventListener('loadcommit',g),d=document.createElement('webview'),d.style.visibility='hidden',d.src='about:blank',a.parentNode.insertBefore(d,a),d.addEventListener('loadcommit',f)};c.addEventListener('loadcommit',g)}componentWillUnmount(){}handleOuterClick(){document.activeElement.blur()}handleNewWindow(a){function b(a){try{nw.Window.open(a,{width:799,height:799})}catch(a){}}0===a.indexOf(`http://127.0.0.1:${global.proxyPort}/appservice/appservice`)||`http://127.0.0.1:${global.proxyPort}/favicon.ico`===a||0===a.indexOf('ws://')||0===a.indexOf('wss://')||a&&('https://developers.google.com/web/tools/chrome-devtools/'===a?(a='https://mp.weixin.qq.com/debug/wxadoc/dev/index.html',b(a)):'https://developers.google.com/web/updates/2017/05/devtools-release-notes'===a?(a='https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/new.html',b(a)):0==a.indexOf('wxfile://')?(a=a.replace('wxfile://','http://wxfile.open.weixin.qq.com/'),function(a){try{nw.Window.open(a,{width:799,height:799})}catch(a){}}(a)):b(a))}render(){return a.createElement('div',{onClick:this.handleOuterClick.bind(this),className:'container'},a.createElement('div',{className:'debugger',ref:(a)=>this.container=a}))}}}(require('lazyload'),require);