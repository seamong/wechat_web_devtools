'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){if('yes'!==process.env.START_SERVER)module.exports={fileName:__filename,dirName:__dirname};else{const a=require('http'),b=require('./1a65b74faf1961119d793d42533968a7.js'),c=require('cluster'),d=require('querystring'),e=require('url'),f=require('./3dc69cc05e660d78ed40092685e884d4.js'),g=require('os');c.schedulingPolicy=c.SCHED_RR;const{SelfManagedMap:h,getAvailablePort:i}=require('./33da93553a752e5ce5e6f14dfcc180a6.js'),j=require('./2cb776ac3852147688b9f47fc1e99760.js'),k=g.cpus().length,l=k-1;let m,n,o,q=[],p=[],r=[];const s={verbose:!0,respawn:!1,workerListener(a,b){'object'==typeof a&&a.childHttpReady&&(process.send({httpReady:!0,port:m}),b&&b())},onDisconnect(){}},t=new h,u=async()=>{p.length<l&&B(n)},v=async(a,b,c,d,e='')=>{try{const b=await(async()=>new Promise(async(a,b)=>{let e=10,f=!1;const g=async()=>{try{const b=await j({url:c,body:d,method:'post'});f=!0,t.delete(c),a(b)}catch(a){--e;const d=400+100*(10-e);0<=e?(console.warn('[server] request error, retry in '+d+'ms',a&&a.message?a.message:a),setTimeout(()=>{g()},d)):(console.warn('[server] tried a lot of times. give up.'),t.delete(c),b(a))}};g()}))();a(b)}catch(a){a instanceof Error?b(a):b(new Error(a))}},w=async()=>{const a=[...r];r=[],o=void 0;const b=!a.every((a)=>'yes'===a[4])&&1<a.length;try{if(1>q.length){C();n=await i(),console.log('prime children has been killed. restart at',n),await z(n)}b&&u()}catch(b){for(const c of a)c[1](b);return}for(const b of a)b[2].startsWith('/')||(b[2]='/'+b[2]),b[2]=`http://127.0.0.1:${n}${b[2]}`,v(...b)},x=async(b)=>{let c;const g=a.createServer((a,b)=>{clearTimeout(c);const g=[];a.on('data',(a)=>{g.push(a)}),a.on('end',async()=>{const c=Buffer.concat(g).toString(),h=e.parse(a.url),i=h.pathname,j=d.parse(h.query),k={};for(const a in j)k[a]=`${decodeURIComponent(j[a])}`;const l=await f(i,k,c);b.writeHead(200,{"Content-Type":'text/plain'});const m=JSON.stringify(l);b.write(m),b.end()})}).listen(b,'127.0.0.1',()=>{process.send({pid:process.pid,childHttpReady:!0,port:b})});process.on('message',(a)=>{if(!('quit'===a))'downgrade'===a&&'prime'===process.env.workerIdentifier&&(clearTimeout(c),c=setTimeout(()=>{let a=!1;if(process.memoryUsage){const b=process.memoryUsage().rss/1024/1024;if(80<b){console.log('prime children used a lot of memory, suicide.'),a=!0;try{g.close(()=>{process.kill(process.pid,'SIGTERM'),process.exit()})}catch(a){process.kill(process.pid,'SIGTERM'),process.exit()}}}global.gc&&!a&&global.gc(),c=void 0},5e3));else if(g)try{g.close(()=>{process.kill(process.pid,'SIGTERM'),process.exit()})}catch(a){process.kill(process.pid,'SIGTERM'),process.exit()}})},y=()=>{for(const a of[...q])console.log('killing prime children',a.process.pid),a.kill('SIGTERM');q=[]},z=async(a)=>{0<q.length&&y();let c=!1;const d=new Promise((d,e)=>{setTimeout(()=>{process.env.workerIdentifier||c||e()},1e4),b(x.bind(null,a),_extends({},s,{workers:q,identifier:'prime',port:a,count:1,workerListener:(a)=>{return s.workerListener(a,function(){c=!0,d()})}}))});return d.then((a)=>{return c=!0,a},(a)=>{throw a})},A=async()=>{const b=a.createServer((a,b)=>{let c='';a.on('data',(a)=>{c+=a.toString()}),a.on('end',async()=>{let d;const e=`${Math.random()}-${Date.now()}`;t.add(e);try{d=await(async()=>{return new Promise((b,d)=>{r.push([b,d,a.url,c,a.headers.downgrade]),o==void 0&&(o=setTimeout(()=>{w()},80))})})(),d=d.body}catch(a){d=JSON.stringify({error:a})}t.delete(e),C();const f=d;b.write(f),b.end()})}).listen(m,'127.0.0.1',async()=>{console.log(process.pid,'Master server running at http://127.0.0.1:'+m);let a=10;const c=async()=>{try{await z(n)}catch(d){if(0<a--)setTimeout(()=>{c()},400);else try{b.close(()=>{process.kill(process.pid,'SIGTERM'),process.exit()})}catch(a){process.kill(process.pid,'SIGTERM'),process.exit()}}};c()});process.on('message',(a)=>{if('quit'===a&&b)try{b.close(()=>{process.kill(process.pid,'SIGTERM'),process.exit()})}catch(a){process.kill(process.pid,'SIGTERM'),process.exit()}}),process.on('disconnect',()=>{process.kill(process.pid,'SIGTERM'),process.exit()})},B=async(a)=>{b(x.bind(null,a),_extends({},s,{workers:p,count:l-p.length,identifier:'plain',port:a}))},C=async()=>{if(1>t.size){for(const a of[...p])a.kill('SIGTERM');p=[];for(const a of q)a.send('downgrade')}};(async()=>{c.isMaster?(m=await i(),n=await i(),A(m)):'prime'===process.env.workerIdentifier?z(process.env.port):B(process.env.port)})(),process.on('unhandledRejection',()=>{console.log('(Unhandled Promise Rejection)')})}}(require('lazyload'),require);