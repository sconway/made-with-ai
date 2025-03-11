(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Df={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Cy(){if(tg)return wo;tg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var eg;function Ly(){return eg||(eg=1,Df.exports=Cy()),Df.exports}var We=Ly(),Uf={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Dy(){if(ng)return Me;ng=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function v(L,Y,ft){this.props=L,this.context=Y,this.refs=C,this.updater=ft||M}v.prototype.isReactComponent={},v.prototype.setState=function(L,Y){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Y,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=v.prototype;function z(L,Y,ft){this.props=L,this.context=Y,this.refs=C,this.updater=ft||M}var D=z.prototype=new _;D.constructor=z,b(D,v.prototype),D.isPureReactComponent=!0;var B=Array.isArray,V={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function F(L,Y,ft,At,k,ct){return ft=ct.ref,{$$typeof:o,type:L,key:Y,ref:ft!==void 0?ft:null,props:ct}}function pt(L,Y){return F(L.type,Y,void 0,void 0,void 0,L.props)}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function T(L){var Y={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ft){return Y[ft]})}var N=/\/+/g;function ht(L,Y){return typeof L=="object"&&L!==null&&L.key!=null?T(""+L.key):Y.toString(36)}function Tt(){}function j(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(Tt,Tt):(L.status="pending",L.then(function(Y){L.status==="pending"&&(L.status="fulfilled",L.value=Y)},function(Y){L.status==="pending"&&(L.status="rejected",L.reason=Y)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function rt(L,Y,ft,At,k){var ct=typeof L;(ct==="undefined"||ct==="boolean")&&(L=null);var Mt=!1;if(L===null)Mt=!0;else switch(ct){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(L.$$typeof){case o:case e:Mt=!0;break;case g:return Mt=L._init,rt(Mt(L._payload),Y,ft,At,k)}}if(Mt)return k=k(L),Mt=At===""?"."+ht(L,0):At,B(k)?(ft="",Mt!=null&&(ft=Mt.replace(N,"$&/")+"/"),rt(k,Y,ft,"",function(Ot){return Ot})):k!=null&&(I(k)&&(k=pt(k,ft+(k.key==null||L&&L.key===k.key?"":(""+k.key).replace(N,"$&/")+"/")+Mt)),Y.push(k)),1;Mt=0;var jt=At===""?".":At+":";if(B(L))for(var Nt=0;Nt<L.length;Nt++)At=L[Nt],ct=jt+ht(At,Nt),Mt+=rt(At,Y,ft,ct,k);else if(Nt=x(L),typeof Nt=="function")for(L=Nt.call(L),Nt=0;!(At=L.next()).done;)At=At.value,ct=jt+ht(At,Nt++),Mt+=rt(At,Y,ft,ct,k);else if(ct==="object"){if(typeof L.then=="function")return rt(j(L),Y,ft,At,k);throw Y=String(L),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(L,Y,ft){if(L==null)return L;var At=[],k=0;return rt(L,At,"","",function(ct){return Y.call(ft,ct,k++)}),At}function st(L){if(L._status===-1){var Y=L._result;Y=Y(),Y.then(function(ft){(L._status===0||L._status===-1)&&(L._status=1,L._result=ft)},function(ft){(L._status===0||L._status===-1)&&(L._status=2,L._result=ft)}),L._status===-1&&(L._status=0,L._result=Y)}if(L._status===1)return L._result.default;throw L._result}var et=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ut(){}return Me.Children={map:H,forEach:function(L,Y,ft){H(L,function(){Y.apply(this,arguments)},ft)},count:function(L){var Y=0;return H(L,function(){Y++}),Y},toArray:function(L){return H(L,function(Y){return Y})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Me.Component=v,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=z,Me.StrictMode=r,Me.Suspense=p,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Me.act=function(){throw Error("act(...) is not supported in production builds of React.")},Me.cache=function(L){return function(){return L.apply(null,arguments)}},Me.cloneElement=function(L,Y,ft){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=b({},L.props),k=L.key,ct=void 0;if(Y!=null)for(Mt in Y.ref!==void 0&&(ct=void 0),Y.key!==void 0&&(k=""+Y.key),Y)!G.call(Y,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&Y.ref===void 0||(At[Mt]=Y[Mt]);var Mt=arguments.length-2;if(Mt===1)At.children=ft;else if(1<Mt){for(var jt=Array(Mt),Nt=0;Nt<Mt;Nt++)jt[Nt]=arguments[Nt+2];At.children=jt}return F(L.type,k,void 0,void 0,ct,At)},Me.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},Me.createElement=function(L,Y,ft){var At,k={},ct=null;if(Y!=null)for(At in Y.key!==void 0&&(ct=""+Y.key),Y)G.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(k[At]=Y[At]);var Mt=arguments.length-2;if(Mt===1)k.children=ft;else if(1<Mt){for(var jt=Array(Mt),Nt=0;Nt<Mt;Nt++)jt[Nt]=arguments[Nt+2];k.children=jt}if(L&&L.defaultProps)for(At in Mt=L.defaultProps,Mt)k[At]===void 0&&(k[At]=Mt[At]);return F(L,ct,void 0,void 0,null,k)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(L){return{$$typeof:h,render:L}},Me.isValidElement=I,Me.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:st}},Me.memo=function(L,Y){return{$$typeof:m,type:L,compare:Y===void 0?null:Y}},Me.startTransition=function(L){var Y=V.T,ft={};V.T=ft;try{var At=L(),k=V.S;k!==null&&k(ft,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(ut,et)}catch(ct){et(ct)}finally{V.T=Y}},Me.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Me.use=function(L){return V.H.use(L)},Me.useActionState=function(L,Y,ft){return V.H.useActionState(L,Y,ft)},Me.useCallback=function(L,Y){return V.H.useCallback(L,Y)},Me.useContext=function(L){return V.H.useContext(L)},Me.useDebugValue=function(){},Me.useDeferredValue=function(L,Y){return V.H.useDeferredValue(L,Y)},Me.useEffect=function(L,Y){return V.H.useEffect(L,Y)},Me.useId=function(){return V.H.useId()},Me.useImperativeHandle=function(L,Y,ft){return V.H.useImperativeHandle(L,Y,ft)},Me.useInsertionEffect=function(L,Y){return V.H.useInsertionEffect(L,Y)},Me.useLayoutEffect=function(L,Y){return V.H.useLayoutEffect(L,Y)},Me.useMemo=function(L,Y){return V.H.useMemo(L,Y)},Me.useOptimistic=function(L,Y){return V.H.useOptimistic(L,Y)},Me.useReducer=function(L,Y,ft){return V.H.useReducer(L,Y,ft)},Me.useRef=function(L){return V.H.useRef(L)},Me.useState=function(L){return V.H.useState(L)},Me.useSyncExternalStore=function(L,Y,ft){return V.H.useSyncExternalStore(L,Y,ft)},Me.useTransition=function(){return V.H.useTransition()},Me.version="19.0.0",Me}var ig;function Ah(){return ig||(ig=1,Uf.exports=Dy()),Uf.exports}var ge=Ah(),Nf={exports:{}},Ro={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Uy(){return ag||(ag=1,function(o){function e(H,st){var et=H.length;H.push(st);t:for(;0<et;){var ut=et-1>>>1,L=H[ut];if(0<l(L,st))H[ut]=st,H[et]=L,et=ut;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var st=H[0],et=H.pop();if(et!==st){H[0]=et;t:for(var ut=0,L=H.length,Y=L>>>1;ut<Y;){var ft=2*(ut+1)-1,At=H[ft],k=ft+1,ct=H[k];if(0>l(At,et))k<L&&0>l(ct,At)?(H[ut]=ct,H[k]=et,ut=k):(H[ut]=At,H[ft]=et,ut=ft);else if(k<L&&0>l(ct,et))H[ut]=ct,H[k]=et,ut=k;else break t}}return st}function l(H,st){var et=H.sortIndex-st.sortIndex;return et!==0?et:H.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,y=null,x=3,M=!1,b=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(H){for(var st=i(m);st!==null;){if(st.callback===null)r(m);else if(st.startTime<=H)r(m),st.sortIndex=st.expirationTime,e(p,st);else break;st=i(m)}}function B(H){if(C=!1,D(H),!b)if(i(p)!==null)b=!0,j();else{var st=i(m);st!==null&&rt(B,st.startTime-H)}}var V=!1,G=-1,F=5,pt=-1;function I(){return!(o.unstable_now()-pt<F)}function T(){if(V){var H=o.unstable_now();pt=H;var st=!0;try{t:{b=!1,C&&(C=!1,_(G),G=-1),M=!0;var et=x;try{e:{for(D(H),y=i(p);y!==null&&!(y.expirationTime>H&&I());){var ut=y.callback;if(typeof ut=="function"){y.callback=null,x=y.priorityLevel;var L=ut(y.expirationTime<=H);if(H=o.unstable_now(),typeof L=="function"){y.callback=L,D(H),st=!0;break e}y===i(p)&&r(p),D(H)}else r(p);y=i(p)}if(y!==null)st=!0;else{var Y=i(m);Y!==null&&rt(B,Y.startTime-H),st=!1}}break t}finally{y=null,x=et,M=!1}st=void 0}}finally{st?N():V=!1}}}var N;if(typeof z=="function")N=function(){z(T)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Tt=ht.port2;ht.port1.onmessage=T,N=function(){Tt.postMessage(null)}}else N=function(){v(T,0)};function j(){V||(V=!0,N())}function rt(H,st){G=v(function(){H(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){b||M||(b=!0,j())},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(H){switch(x){case 1:case 2:case 3:var st=3;break;default:st=x}var et=x;x=st;try{return H()}finally{x=et}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,st){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var et=x;x=H;try{return st()}finally{x=et}},o.unstable_scheduleCallback=function(H,st,et){var ut=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ut+et:ut):et=ut,H){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=et+L,H={id:g++,callback:st,priorityLevel:H,startTime:et,expirationTime:L,sortIndex:-1},et>ut?(H.sortIndex=et,e(m,H),i(p)===null&&H===i(m)&&(C?(_(G),G=-1):C=!0,rt(B,et-ut))):(H.sortIndex=L,e(p,H),b||M||(b=!0,j())),H},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(H){var st=x;return function(){var et=x;x=st;try{return H.apply(this,arguments)}finally{x=et}}}}(Pf)),Pf}var rg;function Ny(){return rg||(rg=1,Of.exports=Uy()),Of.exports}var zf={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Oy(){if(sg)return Ln;sg=1;var o=Ah();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Ln.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Ln.requestFormReset=function(p){r.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.0.0",Ln}var og;function Py(){if(og)return zf.exports;og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Oy(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function zy(){if(lg)return Ro;lg=1;var o=Ny(),e=Ah(),i=Py();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case h:return"Portal";case g:return"Profiler";case m:return"StrictMode";case C:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case b:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case z:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,N,ht;function Tt(t){if(N===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+t+ht}var j=!1;function rt(t,n){if(!t||j)return"";j=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(dt){var ot=dt}Reflect.construct(t,[],bt)}else{try{bt.call()}catch(dt){ot=dt}t.call(bt.prototype)}}else{try{throw Error()}catch(dt){ot=dt}(bt=t())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(dt){if(dt&&ot&&typeof dt.stack=="string")return[dt.stack,ot.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var P=S.split(`
`),Z=R.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===Z.length)for(s=P.length-1,c=Z.length-1;1<=s&&0<=c&&P[s]!==Z[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==Z[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==Z[c]){var gt=`
`+P[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{j=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Tt(a):""}function H(t){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return t=rt(t.type,!1),t;case 11:return t=rt(t.type.render,!1),t;case 1:return t=rt(t.type,!0),t;default:return""}}function st(t){try{var n="";do n+=H(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function et(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ut(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function L(t){if(et(t)!==t)throw Error(r(188))}function Y(t){var n=t.alternate;if(!n){if(n=et(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),t;if(f===s)return L(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,R=c.child;R;){if(R===a){S=!0,a=c,s=f;break}if(R===s){S=!0,s=c,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,s=c;break}if(R===s){S=!0,s=f,a=c;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function ft(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=ft(t),n!==null)return n;t=t.sibling}return null}var At=Array.isArray,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},Mt=[],jt=-1;function Nt(t){return{current:t}}function Ot(t){0>jt||(t.current=Mt[jt],Mt[jt]=null,jt--)}function ae(t,n){jt++,Mt[jt]=t.current,t.current=n}var oe=Nt(null),J=Nt(null),Ie=Nt(null),re=Nt(null);function fe(t,n){switch(ae(Ie,n),ae(J,t),ae(oe,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Cm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Cm(t),n=Lm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ot(oe),ae(oe,n)}function Jt(){Ot(oe),Ot(J),Ot(Ie)}function Pt(t){t.memoizedState!==null&&ae(re,t);var n=oe.current,a=Lm(n,t.type);n!==a&&(ae(J,t),ae(oe,a))}function vt(t){J.current===t&&(Ot(oe),Ot(J)),re.current===t&&(Ot(re),Mo._currentValue=ct)}var A=Object.prototype.hasOwnProperty,E=o.unstable_scheduleCallback,X=o.unstable_cancelCallback,lt=o.unstable_shouldYield,at=o.unstable_requestPaint,_t=o.unstable_now,Ft=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Kt=o.unstable_NormalPriority,Lt=o.unstable_LowPriority,yt=o.unstable_IdlePriority,Yt=o.log,te=o.unstable_setDisableYieldValue,Ht=null,qt=null;function zt(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Ht,t,void 0,(t.current.flags&128)===128)}catch{}}function ue(t){if(typeof Yt=="function"&&te(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Ht,t)}catch{}}var O=Math.clz32?Math.clz32:Zt,Et=Math.log,Bt=Math.LN2;function Zt(t){return t>>>=0,t===0?32:31-(Et(t)/Bt|0)|0}var U=128,wt=4194304;function xt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,S=t.warmLanes;t=t.finishedLanes!==0;var R=a&134217727;return R!==0?(a=R&~c,a!==0?s=xt(a):(f&=R,f!==0?s=xt(f):t||(S=R&~S,S!==0&&(s=xt(S))))):(R=a&~c,R!==0?s=xt(R):f!==0?s=xt(f):t||(S=a&~S,S!==0&&(s=xt(S)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Se(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function ze(){var t=wt;return wt<<=1,!(wt&62914560)&&(wt=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qe(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,P=t.expirationTimes,Z=t.hiddenUpdates;for(a=S&~a;0<a;){var gt=31-O(a),bt=1<<gt;R[gt]=0,P[gt]=-1;var ot=Z[gt];if(ot!==null)for(Z[gt]=null,gt=0;gt<ot.length;gt++){var dt=ot[gt];dt!==null&&(dt.lane&=-536870913)}a&=~bt}s!==0&&tn(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function tn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-O(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function Pi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-O(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ut(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Vt(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:jm(t.type))}function Xt(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var kt=Math.random().toString(36).slice(2),Rt="__reactFiber$"+kt,Ct="__reactProps$"+kt,le="__reactContainer$"+kt,he="__reactEvents$"+kt,Ee="__reactListeners$"+kt,w="__reactHandles$"+kt,K="__reactResources$"+kt,$="__reactMarker$"+kt;function it(t){delete t[Rt],delete t[Ct],delete t[he],delete t[Ee],delete t[w]}function tt(t){var n=t[Rt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[le]||a[Rt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Nm(t);t!==null;){if(a=t[Rt])return a;t=Nm(t)}return n}t=a,a=t.parentNode}return null}function It(t){if(t=t[Rt]||t[le]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function $t(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ie(t){var n=t[K];return n||(n=t[K]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qt(t){t[$]=!0}var ve=new Set,de={};function pe(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(de[t]=n,t=0;t<n.length;t++)ve.add(n[t])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),On={},Ae={};function Te(t){return A.call(Ae,t)?!0:A.call(On,t)?!1:Ge.test(t)?Ae[t]=!0:(On[t]=!0,!1)}function oa(t,n,a){if(Te(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Mn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Pn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function la(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Us(t){var n=la(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function on(t){t._valueTracker||(t._valueTracker=Us(t))}function Ti(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=la(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gn=/[\n"\\]/g;function Rn(t){return t.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(t,n,a,s,c,f,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Pn(n)):t.value!==""+Pn(n)&&(t.value=""+Pn(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,S,Pn(n)):a!=null?Cc(t,S,Pn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Pn(R):t.removeAttribute("name")}function Os(t,n,a,s,c,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Pn(a):"",n=n!=null?""+Pn(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Cc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Pn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ph(t,n,a){if(n!=null&&(n=""+Pn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Pn(a):""}function zh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Pn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Bh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Bh(t,f,n[f])}function Lc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Dc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Ih(t){var n=It(t);if(n&&(t=n.stateNode)){var a=t[Ct]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Ct]||null;if(!c)throw Error(r(90));Ns(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ti(s)}break t;case"textarea":Ph(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var Nc=!1;function Hh(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(Tl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Ih(n),t)))for(n=0;n<t.length;n++)Ih(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Ct]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Je)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Oc=!1}var ua=null,Pc=null,Vo=null;function Gh(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Vh(){return!1}function Vn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Vh,this.isPropagationStopped=Vh,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Vn(Wa),Bs=T({},Wa,{view:0,detail:0}),C0=Vn(Bs),zc,Bc,Fs,qo=T({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(zc=t.screenX-Fs.screenX,Bc=t.screenY-Fs.screenY):Bc=zc=0,Fs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),kh=Vn(qo),L0=T({},qo,{dataTransfer:0}),D0=Vn(L0),U0=T({},Bs,{relatedTarget:0}),Fc=Vn(U0),N0=T({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Vn(N0),P0=T({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Vn(P0),B0=T({},Wa,{data:0}),Wh=Vn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=T({},Bs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Vn(V0),W0=T({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Vn(W0),X0=T({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Vn(X0),Y0=T({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Vn(Y0),Z0=T({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Vn(Z0),Q0=T({},Wa,{newState:0,oldState:0}),J0=Vn(Q0),$0=[9,13,27,32],Hc=Je&&"CompositionEvent"in window,Is=null;Je&&"documentMode"in document&&(Is=document.documentMode);var tv=Je&&"TextEvent"in window&&!Is,qh=Je&&(!Hc||Is&&8<Is&&11>=Is),Yh=" ",jh=!1;function Zh(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(jh=!0,Yh);case"textInput":return t=n.data,t===Yh&&jh?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Zh(t,n)?(t=Gh(),Vo=Pc=ua=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qh&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function Jh(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function av(t){Tm(t,0)}function Yo(t){var n=$t(t);if(Ti(n))return t}function $h(t,n){if(t==="change")return n}var td=!1;if(Je){var Gc;if(Je){var Vc="oninput"in document;if(!Vc){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Vc=typeof ed.oninput=="function"}Gc=Vc}else Gc=!1;td=Gc&&(!document.documentMode||9<document.documentMode)}function nd(){Hs&&(Hs.detachEvent("onpropertychange",id),Gs=Hs=null)}function id(t){if(t.propertyName==="value"&&Yo(Gs)){var n=[];Jh(n,Gs,t,Uc(t)),Hh(av,n)}}function rv(t,n,a){t==="focusin"?(nd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",id)):t==="focusout"&&nd()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Gs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:cv;function Vs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!A.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,n){var a=ad(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ad(a)}}function sd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=od(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&sd(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=rd(n,f);var S=rd(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(S.node,S.offset)):(t.setEnd(S.node,S.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=Je&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,ks=null,Xc=!1;function ld(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==ca(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},qc={},cd={};Je&&(cd=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function qa(t){if(qc[t])return qc[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cd)return qc[t]=n[a];return t}var ud=qa("animationend"),fd=qa("animationiteration"),hd=qa("animationstart"),hv=qa("transitionrun"),dv=qa("transitionstart"),pv=qa("transitioncancel"),dd=qa("transitionend"),pd=new Map,md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(t,n){pd.set(t,n),pe(n,[t])}var ni=[],Dr=0,Yc=0;function jo(){for(var t=Dr,n=Yc=Dr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&gd(a,c,f)}}function Zo(t,n,a,s){ni[Dr++]=t,ni[Dr++]=n,ni[Dr++]=a,ni[Dr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function fa(t,n){return Zo(t,null,null,n),Ko(t)}function gd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-O(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<mo)throw mo=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},_d=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=_d.get(t);return a!==void 0?a:(n={value:t,source:n,stack:st(n)},_d.set(t,n),n)}return{value:t,source:n,stack:st(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ai=[],ri=0,Ya=null,zi=1,Bi="";function ja(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function vd(t,n,a){ai[ri++]=zi,ai[ri++]=Bi,ai[ri++]=Ya,Ya=t;var s=zi;t=Bi;var c=32-O(s)-1;s&=~(1<<c),a+=1;var f=32-O(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,zi=1<<32-O(n)+c|a<<c|s,Bi=f+t}else zi=1<<f|a<<c|s,Bi=t}function Zc(t){t.return!==null&&(ja(t,1),vd(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===Ya;)Ya=ai[--ri],ai[ri]=null,Bi=ai[--ri],ai[ri]=null,zi=ai[--ri],ai[ri]=null}var zn=null,En=null,Be=!1,gi=null,bi=!1,Qc=Error(r(519));function Za(t){var n=Error(r(418,""));throw qs(ii(n,t)),Qc}function yd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Rt]=t,n[Ct]=s,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)Ne(_o[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),on(n);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),zh(n,s.value,s.defaultValue,s.children),on(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rm(n.textContent,a)?(s.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),s.onScroll!=null&&Ne("scroll",n),s.onScrollEnd!=null&&Ne("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Za(t)}function Sd(t){for(zn=t.return;zn;)switch(zn.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:zn=zn.return}}function Ws(t){if(t!==zn)return!1;if(!Be)return Sd(t),Be=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&En&&Za(t),Sd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){En=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}En=null}}else En=zn?vi(t.stateNode.nextSibling):null;return!0}function Xs(){En=zn=null,Be=!1}function qs(t){gi===null?gi=[t]:gi.push(t)}var Ys=Error(r(460)),xd=Error(r(474)),Jc={then:function(){}};function Md(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function Ed(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ys?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ys?Error(r(483)):t}throw js=n,Ys}}var js=null;function Td(){if(js===null)throw Error(r(459));var t=js;return js=null,t}var Pr=null,Zs=0;function tl(t){var n=Zs;return Zs+=1,Pr===null&&(Pr=[]),Ed(Pr,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bd(t){var n=t._init;return n(t._payload)}function Ad(t){function n(Q,q){if(t){var nt=Q.deletions;nt===null?(Q.deletions=[q],Q.flags|=16):nt.push(q)}}function a(Q,q){if(!t)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function s(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function c(Q,q){return Q=Ea(Q,q),Q.index=0,Q.sibling=null,Q}function f(Q,q,nt){return Q.index=nt,t?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<q?(Q.flags|=33554434,q):nt):(Q.flags|=33554434,q)):(Q.flags|=1048576,q)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=33554434),Q}function R(Q,q,nt,St){return q===null||q.tag!==6?(q=qu(nt,Q.mode,St),q.return=Q,q):(q=c(q,nt),q.return=Q,q)}function P(Q,q,nt,St){var ne=nt.type;return ne===p?gt(Q,q,nt.props.children,St,nt.key):q!==null&&(q.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===z&&bd(ne)===q.type)?(q=c(q,nt.props),Ks(q,nt),q.return=Q,q):(q=yl(nt.type,nt.key,nt.props,null,Q.mode,St),Ks(q,nt),q.return=Q,q)}function Z(Q,q,nt,St){return q===null||q.tag!==4||q.stateNode.containerInfo!==nt.containerInfo||q.stateNode.implementation!==nt.implementation?(q=Yu(nt,Q.mode,St),q.return=Q,q):(q=c(q,nt.children||[]),q.return=Q,q)}function gt(Q,q,nt,St,ne){return q===null||q.tag!==7?(q=rr(nt,Q.mode,St,ne),q.return=Q,q):(q=c(q,nt),q.return=Q,q)}function bt(Q,q,nt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=qu(""+q,Q.mode,nt),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return nt=yl(q.type,q.key,q.props,null,Q.mode,nt),Ks(nt,q),nt.return=Q,nt;case h:return q=Yu(q,Q.mode,nt),q.return=Q,q;case z:var St=q._init;return q=St(q._payload),bt(Q,q,nt)}if(At(q)||G(q))return q=rr(q,Q.mode,nt,null),q.return=Q,q;if(typeof q.then=="function")return bt(Q,tl(q),nt);if(q.$$typeof===M)return bt(Q,gl(Q,q),nt);el(Q,q)}return null}function ot(Q,q,nt,St){var ne=q!==null?q.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ne!==null?null:R(Q,q,""+nt,St);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case d:return nt.key===ne?P(Q,q,nt,St):null;case h:return nt.key===ne?Z(Q,q,nt,St):null;case z:return ne=nt._init,nt=ne(nt._payload),ot(Q,q,nt,St)}if(At(nt)||G(nt))return ne!==null?null:gt(Q,q,nt,St,null);if(typeof nt.then=="function")return ot(Q,q,tl(nt),St);if(nt.$$typeof===M)return ot(Q,q,gl(Q,nt),St);el(Q,nt)}return null}function dt(Q,q,nt,St,ne){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(nt)||null,R(q,Q,""+St,ne);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case d:return Q=Q.get(St.key===null?nt:St.key)||null,P(q,Q,St,ne);case h:return Q=Q.get(St.key===null?nt:St.key)||null,Z(q,Q,St,ne);case z:var Ce=St._init;return St=Ce(St._payload),dt(Q,q,nt,St,ne)}if(At(St)||G(St))return Q=Q.get(nt)||null,gt(q,Q,St,ne,null);if(typeof St.then=="function")return dt(Q,q,nt,tl(St),ne);if(St.$$typeof===M)return dt(Q,q,nt,gl(q,St),ne);el(q,St)}return null}function se(Q,q,nt,St){for(var ne=null,Ce=null,ce=q,me=q=0,Sn=null;ce!==null&&me<nt.length;me++){ce.index>me?(Sn=ce,ce=null):Sn=ce.sibling;var Fe=ot(Q,ce,nt[me],St);if(Fe===null){ce===null&&(ce=Sn);break}t&&ce&&Fe.alternate===null&&n(Q,ce),q=f(Fe,q,me),Ce===null?ne=Fe:Ce.sibling=Fe,Ce=Fe,ce=Sn}if(me===nt.length)return a(Q,ce),Be&&ja(Q,me),ne;if(ce===null){for(;me<nt.length;me++)ce=bt(Q,nt[me],St),ce!==null&&(q=f(ce,q,me),Ce===null?ne=ce:Ce.sibling=ce,Ce=ce);return Be&&ja(Q,me),ne}for(ce=s(ce);me<nt.length;me++)Sn=dt(ce,Q,me,nt[me],St),Sn!==null&&(t&&Sn.alternate!==null&&ce.delete(Sn.key===null?me:Sn.key),q=f(Sn,q,me),Ce===null?ne=Sn:Ce.sibling=Sn,Ce=Sn);return t&&ce.forEach(function(La){return n(Q,La)}),Be&&ja(Q,me),ne}function ye(Q,q,nt,St){if(nt==null)throw Error(r(151));for(var ne=null,Ce=null,ce=q,me=q=0,Sn=null,Fe=nt.next();ce!==null&&!Fe.done;me++,Fe=nt.next()){ce.index>me?(Sn=ce,ce=null):Sn=ce.sibling;var La=ot(Q,ce,Fe.value,St);if(La===null){ce===null&&(ce=Sn);break}t&&ce&&La.alternate===null&&n(Q,ce),q=f(La,q,me),Ce===null?ne=La:Ce.sibling=La,Ce=La,ce=Sn}if(Fe.done)return a(Q,ce),Be&&ja(Q,me),ne;if(ce===null){for(;!Fe.done;me++,Fe=nt.next())Fe=bt(Q,Fe.value,St),Fe!==null&&(q=f(Fe,q,me),Ce===null?ne=Fe:Ce.sibling=Fe,Ce=Fe);return Be&&ja(Q,me),ne}for(ce=s(ce);!Fe.done;me++,Fe=nt.next())Fe=dt(ce,Q,me,Fe.value,St),Fe!==null&&(t&&Fe.alternate!==null&&ce.delete(Fe.key===null?me:Fe.key),q=f(Fe,q,me),Ce===null?ne=Fe:Ce.sibling=Fe,Ce=Fe);return t&&ce.forEach(function(Ry){return n(Q,Ry)}),Be&&ja(Q,me),ne}function sn(Q,q,nt,St){if(typeof nt=="object"&&nt!==null&&nt.type===p&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case d:t:{for(var ne=nt.key;q!==null;){if(q.key===ne){if(ne=nt.type,ne===p){if(q.tag===7){a(Q,q.sibling),St=c(q,nt.props.children),St.return=Q,Q=St;break t}}else if(q.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===z&&bd(ne)===q.type){a(Q,q.sibling),St=c(q,nt.props),Ks(St,nt),St.return=Q,Q=St;break t}a(Q,q);break}else n(Q,q);q=q.sibling}nt.type===p?(St=rr(nt.props.children,Q.mode,St,nt.key),St.return=Q,Q=St):(St=yl(nt.type,nt.key,nt.props,null,Q.mode,St),Ks(St,nt),St.return=Q,Q=St)}return S(Q);case h:t:{for(ne=nt.key;q!==null;){if(q.key===ne)if(q.tag===4&&q.stateNode.containerInfo===nt.containerInfo&&q.stateNode.implementation===nt.implementation){a(Q,q.sibling),St=c(q,nt.children||[]),St.return=Q,Q=St;break t}else{a(Q,q);break}else n(Q,q);q=q.sibling}St=Yu(nt,Q.mode,St),St.return=Q,Q=St}return S(Q);case z:return ne=nt._init,nt=ne(nt._payload),sn(Q,q,nt,St)}if(At(nt))return se(Q,q,nt,St);if(G(nt)){if(ne=G(nt),typeof ne!="function")throw Error(r(150));return nt=ne.call(nt),ye(Q,q,nt,St)}if(typeof nt.then=="function")return sn(Q,q,tl(nt),St);if(nt.$$typeof===M)return sn(Q,q,gl(Q,nt),St);el(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,q!==null&&q.tag===6?(a(Q,q.sibling),St=c(q,nt),St.return=Q,Q=St):(a(Q,q),St=qu(nt,Q.mode,St),St.return=Q,Q=St),S(Q)):a(Q,q)}return function(Q,q,nt,St){try{Zs=0;var ne=sn(Q,q,nt,St);return Pr=null,ne}catch(ce){if(ce===Ys)throw ce;var Ce=ci(29,ce,null,Q.mode);return Ce.lanes=St,Ce.return=Q,Ce}finally{}}}var Ka=Ad(!0),wd=Ad(!1),zr=Nt(null),nl=Nt(0);function Rd(t,n){t=ji,ae(nl,t),ae(zr,n),ji=t|n.baseLanes}function $c(){ae(nl,ji),ae(zr,zr.current)}function tu(){ji=nl.current,Ot(zr),Ot(nl)}var si=Nt(null),Ai=null;function ha(t){var n=t.alternate;ae(pn,pn.current&1),ae(si,t),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Cd(t){if(t.tag===22){if(ae(pn,pn.current),ae(si,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else da()}function da(){ae(pn,pn.current),ae(si,si.current)}function Fi(t){Ot(si),Ai===t&&(Ai=null),Ot(pn)}var pn=Nt(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,mn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var Js=null,nu=0,Br=0,Fr=null;function vv(t,n){if(Js===null){var a=Js=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Ld,Ld),n}function Ld(){if(--nu===0&&Js!==null){Fr!==null&&(Fr.status="fulfilled");var t=Js;Js=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Dd=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Dd!==null&&Dd(t,n)};var Qa=Nt(null);function iu(){var t=Qa.current;return t!==null?t:Ze.pooledCache}function al(t,n){n===null?ae(Qa,Qa.current):ae(Qa,n.pool)}function Ud(){var t=iu();return t===null?null:{parent:mn._currentValue,pool:t}}var pa=0,we=null,Ve=null,un=null,rl=!1,Ir=!1,Ja=!1,sl=0,$s=0,Hr=null,Sv=0;function ln(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return pa=f,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?$a:ma,Ja=!1,f=a(s,c),Ja=!1,Ir&&(f=Od(n,a,s,c)),Nd(t),f}function Nd(t){I.H=wi;var n=Ve!==null&&Ve.next!==null;if(pa=0,un=Ve=we=null,rl=!1,$s=0,Hr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Od(t,n,a,s){we=t;var c=0;do{if(Ir&&(Hr=null),$s=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,un=Ve=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=tr,f=n(a,s)}while(Ir);return f}function xv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(we.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}pa=0,un=Ve=we=null,Ir=!1,$s=sl=0,Hr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?we.memoizedState=un=t:un=un.next=t,un}function fn(){if(Ve===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=un===null?we.memoizedState:un.next;if(n!==null)un=n,Ve=t;else{if(t===null)throw we.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?we.memoizedState=un=t:un=un.next=t}return un}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(t){var n=$s;return $s+=1,Hr===null&&(Hr=[]),t=Ed(Hr,t,n),n=we,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?$a:ma),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===M)return Cn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=we.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=we.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),we.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=fn();return uu(n,Ve,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=S=null,P=null,Z=n,gt=!1;do{var bt=Z.lane&-536870913;if(bt!==Z.lane?(Oe&bt)===bt:(pa&bt)===bt){var ot=Z.revertLane;if(ot===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),bt===Br&&(gt=!0);else if((pa&ot)===ot){Z=Z.next,ot===Br&&(gt=!0);continue}else bt={lane:0,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},P===null?(R=P=bt,S=f):P=P.next=bt,we.lanes|=ot,Ta|=ot;bt=Z.action,Ja&&a(f,bt),f=Z.hasEagerState?Z.eagerState:a(f,bt)}else ot={lane:bt,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},P===null?(R=P=ot,S=f):P=P.next=ot,we.lanes|=bt,Ta|=bt;Z=Z.next}while(Z!==null&&Z!==n);if(P===null?S=f:P.next=R,!Yn(f,t.memoizedState)&&(vn=!0,gt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Yn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Pd(t,n,a){var s=we,c=fn(),f=Be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((Ve||c).memoizedState,a);if(S&&(c.memoizedState=a,vn=!0),c=c.queue,pu(Fd.bind(null,s,c,t),[t]),c.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Bd.bind(null,s,c,a,n),{destroy:void 0},null),Ze===null)throw Error(r(349));f||pa&60||zd(s,n,a)}return a}function zd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=we.updateQueue,n===null?(n=ol(),we.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Bd(t,n,a,s){n.value=a,n.getSnapshot=s,Id(n)&&Hd(t)}function Fd(t,n,a){return a(function(){Id(n)&&Hd(t)})}function Id(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Hd(t){var n=fa(t,2);n!==null&&Bn(n,t,2)}function hu(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ja){ue(!0);try{a()}finally{ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function Gd(t,n,a,s){return t.baseState=a,uu(t,Ve,typeof s=="function"?s:Ii)}function Mv(t,n,a,s,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Vd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=I.T,S={};I.T=S;try{var R=a(c,s),P=I.S;P!==null&&P(S,R),kd(t,n,R)}catch(Z){du(t,n,Z)}finally{I.T=f}}else try{f=a(c,s),kd(t,n,f)}catch(Z){du(t,n,Z)}}function kd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wd(t,n,s)},function(s){return du(t,n,s)}):Wd(t,n,a)}function Wd(t,n,a){n.status="fulfilled",n.value=a,Xd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vd(t,a)))}function du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xd(n),n=n.next;while(n!==s)}t.action=null}function Xd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qd(t,n){return n}function Yd(t,n){if(Be){var a=Ze.formState;if(a!==null){t:{var s=we;if(Be){if(En){e:{for(var c=En,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){En=vi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qd,lastRenderedState:n},a.queue=s,a=fp.bind(null,we,s),s.dispatch=a,s=hu(!1),f=yu.bind(null,we,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,we,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function jd(t){var n=fn();return Zd(n,Ve,t)}function Zd(t,n,a){n=uu(t,n,qd)[0],t=cl(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var s=fn(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(we.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Kd(t){var n=fn(),a=Ve;if(a!==null)return Zd(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=we.updateQueue,n===null&&(n=ol(),we.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Qd(){return fn().memoizedState}function ul(t,n,a,s){var c=kn();we.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=fn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ve!==null&&s!==null&&au(s,Ve.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(we.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function Jd(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function $d(t,n){return fl(4,2,t,n)}function tp(t,n){return fl(4,4,t,n)}function ep(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function np(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,ep.bind(null,n,t),a)}function mu(){}function ip(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ap(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Ja){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||pa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=sm(),we.lanes|=t,Ta|=t,a)}function rp(t,n,a,s){return Yn(a,n)?a:zr.current!==null?(t=gu(t,a,s),Yn(t,n)||(vn=!0),t):pa&42?(t=sm(),we.lanes|=t,Ta|=t,n):(vn=!0,t.memoizedState=a)}function sp(t,n,a,s,c){var f=k.p;k.p=f!==0&&8>f?f:8;var S=I.T,R={};I.T=R,yu(t,!1,n,a);try{var P=c(),Z=I.S;if(Z!==null&&Z(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var gt=yv(P,s);eo(t,n,gt,Qn(t))}else eo(t,n,s,Qn(t))}catch(bt){eo(t,n,{then:function(){},status:"rejected",reason:bt},Qn())}finally{k.p=f,I.T=S}}function Tv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=op(t).queue;sp(t,c,n,ct,a===null?Tv:function(){return lp(t),a(s)})}function op(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lp(t){var n=op(t).next.queue;eo(t,n,{},Qn())}function vu(){return Cn(Mo)}function cp(){return fn().memoizedState}function up(){return fn().memoizedState}function bv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=va(a);var s=ya(n,t,a);s!==null&&(Bn(s,n,a),ao(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?hp(n,a):(a=jc(t,n,a,s),a!==null&&(Bn(a,t,s),dp(a,n,s)))}function fp(t,n,a){var s=Qn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))hp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(c.hasEagerState=!0,c.eagerState=R,Yn(R,S))return Zo(t,n,c,0),Ze===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return Bn(a,t,s),dp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&Bn(n,t,2)}function hl(t){var n=t.alternate;return t===we||n!==null&&n===we}function hp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function dp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Pi(t,a)}}var wi={readContext:Cn,use:ll,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln};wi.useCacheRefresh=ln,wi.useMemoCache=ln,wi.useHostTransitionStatus=ln,wi.useFormState=ln,wi.useActionState=ln,wi.useOptimistic=ln;var $a={readContext:Cn,use:ll,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Jd,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,ep.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Ja){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var c=a(n);if(Ja){ue(!0);try{a(n)}finally{ue(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,we,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,a=fp.bind(null,we,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=kn();return gu(a,t,n)},useTransition:function(){var t=hu(!1);return t=sp.bind(null,we,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=we,c=kn();if(Be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));Oe&60||zd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jd(Fd.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Bd.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=kn(),n=Ze.identifierPrefix;if(Be){var a=Bi,s=zi;a=(s&~(1<<32-O(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Sv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return kn().memoizedState=bv.bind(null,we)}};$a.useMemoCache=cu,$a.useHostTransitionStatus=vu,$a.useFormState=Yd,$a.useActionState=Yd,$a.useOptimistic=function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,we,!0,a),a.dispatch=n,[t,n]};var ma={readContext:Cn,use:ll,useCallback:ip,useContext:Cn,useEffect:pu,useImperativeHandle:np,useInsertionEffect:$d,useLayoutEffect:tp,useMemo:ap,useReducer:cl,useRef:Qd,useState:function(){return cl(Ii)},useDebugValue:mu,useDeferredValue:function(t,n){var a=fn();return rp(a,Ve.memoizedState,t,n)},useTransition:function(){var t=cl(Ii)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Pd,useId:cp};ma.useCacheRefresh=up,ma.useMemoCache=cu,ma.useHostTransitionStatus=vu,ma.useFormState=jd,ma.useActionState=jd,ma.useOptimistic=function(t,n){var a=fn();return Gd(a,Ve,t,n)};var tr={readContext:Cn,use:ll,useCallback:ip,useContext:Cn,useEffect:pu,useImperativeHandle:np,useInsertionEffect:$d,useLayoutEffect:tp,useMemo:ap,useReducer:fu,useRef:Qd,useState:function(){return fu(Ii)},useDebugValue:mu,useDeferredValue:function(t,n){var a=fn();return Ve===null?gu(a,t,n):rp(a,Ve.memoizedState,t,n)},useTransition:function(){var t=fu(Ii)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Pd,useId:cp};tr.useCacheRefresh=up,tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Kd,tr.useActionState=Kd,tr.useOptimistic=function(t,n){var a=fn();return Ve!==null?Gd(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])};function Su(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:T({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xu={isMounted:function(t){return(t=t._reactInternals)?et(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Bn(n,t,s),ao(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Bn(n,t,s),ao(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(Bn(n,t,a),ao(n,t,a))}};function pp(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function mp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&xu.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=T({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gp(t){dl(t)}function _p(t){console.error(t)}function vp(t){dl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Sp(t){return t=va(t),t.tag=3,t}function xp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){yp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){yp(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ai===null?af():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Be)return n=si.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),qs(ii(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),qs(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),rn!==4&&(rn=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sp(c),xp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Mp=Error(r(461)),vn=!1;function Tn(t,n,a,s){n.child=t===null?wd(n,null,a,s):Ka(n,t.child,a,s)}function Ep(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var R in s)R!=="ref"&&(S[R]=s[R])}else S=s;return ir(n),s=ru(t,n,a,S,f,c),R=su(),t!==null&&!vn?(ou(t,n,c),Hi(t,n,c)):(Be&&R&&Zc(n),n.flags|=1,Tn(t,n,s,c),n.child)}function Tp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bp(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Du(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(S,s)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Ea(f,s),t.ref=n.ref,t.return=n,n.child=t}function bp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Du(t,c))t.flags&131072&&(vn=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return Eu(t,n,a,s,c)}function Ap(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=t!==null?t.memoizedState:null;if(no(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=S!==null?S.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return wp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,S!==null?S.cachePool:null),S!==null?Rd(n,S):$c(),Cd(n);else return n.lanes=n.childLanes=536870912,wp(t,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(al(n,S.cachePool),Rd(n,S),da(),n.memoizedState=null):(t!==null&&al(n,null),$c(),da());return Tn(t,n,c,a),n.child}function wp(t,n,a,s){var c=iu();return c=c===null?null:{parent:mn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Cd(n),t!==null&&io(t,n,s,!0),null}function no(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ir(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!vn?(ou(t,n,c),Hi(t,n,c)):(Be&&s&&Zc(n),n.flags|=1,Tn(t,n,a,c),n.child)}function Rp(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Od(n,s,a,c),Nd(t),s=su(),t!==null&&!vn?(ou(t,n,f),Hi(t,n,f)):(Be&&s&&Zc(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Cp(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Ur,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Ur,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Su(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&xu.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,P=er(a,R);f.props=P;var Z=f.context,gt=a.contextType;S=Ur,typeof gt=="object"&&gt!==null&&(S=Cn(gt));var bt=a.getDerivedStateFromProps;gt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||Z!==S)&&mp(n,f,s,S),_a=!1;var ot=n.memoizedState;f.state=ot,so(n,s,f,c),ro(),Z=n.memoizedState,R||ot!==Z||_a?(typeof bt=="function"&&(Su(n,a,bt,s),Z=n.memoizedState),(P=_a||pp(n,a,P,s,ot,Z,S))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=S,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),S=n.memoizedProps,gt=er(a,S),f.props=gt,bt=n.pendingProps,ot=f.context,Z=a.contextType,P=Ur,typeof Z=="object"&&Z!==null&&(P=Cn(Z)),R=a.getDerivedStateFromProps,(Z=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==bt||ot!==P)&&mp(n,f,s,P),_a=!1,ot=n.memoizedState,f.state=ot,so(n,s,f,c),ro();var dt=n.memoizedState;S!==bt||ot!==dt||_a||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof R=="function"&&(Su(n,a,R,s),dt=n.memoizedState),(gt=_a||pp(n,a,gt,s,ot,dt,P)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,dt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,dt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),f.props=s,f.state=dt,f.context=P,s=gt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,no(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ka(n,t.child,null,c),n.child=Ka(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function Lp(t,n,a,s){return Xs(),n.flags|=256,Tn(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:Ud()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Dp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Be){if(c?ha(n):da(),Be){var R=En,P;if(P=R){t:{for(P=R,R=bi;P.nodeType!==8;){if(!R){R=null;break t}if(P=vi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(n.memoizedState={dehydrated:R,treeContext:Ya!==null?{id:zi,overflow:Bi}:null,retryLane:536870912},P=ci(18,null,null,0),P.stateNode=R,P.return=n,n.child=P,zn=n,En=null,P=!0):P=!1}P||Za(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return R=s.children,s=s.fallback,c?(da(),c=n.mode,R=Ru({mode:"hidden",children:R},c),s=rr(s,c,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,S,a),n.memoizedState=Tu,s):(ha(n),wu(n,R))}if(P=t.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),c=s.fallback,R=n.mode,s=Ru({mode:"visible",children:s.children},R),c=rr(c,R,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ka(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,S,a),n.memoizedState=Tu,n=c);else if(ha(n),R.data==="$!"){if(S=R.nextSibling&&R.nextSibling.dataset,S)var Z=S.dgst;S=Z,s=Error(r(419)),s.stack="",s.digest=S,qs({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(vn||io(t,n,a,!1),S=(a&t.childLanes)!==0,vn||S){if(S=Ze,S!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(S.suspendedLanes|a)?0:s,s!==0&&s!==P.retryLane)throw P.retryLane=s,fa(t,s),Bn(S,t,s),Mp}R.data==="$?"||af(),n=Cu(t,n,a)}else R.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),R._reactRetry=n,n=null):(t=P.treeContext,En=vi(R.nextSibling),zn=n,Be=!0,gi=null,bi=!1,t!==null&&(ai[ri++]=zi,ai[ri++]=Bi,ai[ri++]=Ya,zi=t.id,Bi=t.overflow,Ya=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(da(),c=s.fallback,R=n.mode,P=t.child,Z=P.sibling,s=Ea(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&31457280,Z!==null?c=Ea(Z,c):(c=rr(c,R,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,R=t.child.memoizedState,R===null?R=bu(a):(P=R.cachePool,P!==null?(Z=mn._currentValue,P=P.parent!==Z?{parent:Z,pool:Z}:P):P=Ud(),R={baseLanes:R.baseLanes|a,cachePool:P}),c.memoizedState=R,c.childLanes=Au(t,S,a),n.memoizedState=Tu,s):(ha(n),a=t.child,t=a.sibling,a=Ea(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return im(t,n,0,null)}function Cu(t,n,a){return Ka(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Up(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Lu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Np(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Tn(t,n,s.children,a),s=pn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,a,n);else if(t.tag===19)Up(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(ae(pn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Lu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Lu(n,!0,a,null,f);break;case"together":Lu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,!(a&n.childLanes))if(t!==null){if(io(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Du(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:fe(n,n.stateNode.containerInfo),ga(n,mn,t.memoizedState.cache),Xs();break;case 27:case 5:Pt(n);break;case 4:fe(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):a&n.child.childLanes?Dp(t,n,a):(ha(n),t=Hi(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(io(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Np(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ae(pn,pn.current),s)break;return null;case 22:case 23:return n.lanes=0,Ap(t,n,a);case 24:ga(n,mn,t.memoizedState.cache)}return Hi(t,n,a)}function Op(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Du(t,a)&&!(n.flags&128))return vn=!1,Rv(t,n,a);vn=!!(t.flags&131072)}else vn=!1,Be&&n.flags&1048576&&vd(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=er(s,t),n.tag=1,n=Cp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===b){n.tag=11,n=Ep(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=Tp(null,n,s,t,a);break t}}throw n=pt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Cp(t,n,s,c,a);case 3:t:{if(fe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),so(n,f,null,a);var S=n.memoizedState;if(f=S.cache,ga(n,mn,f),f!==c.cache&&Ou(n,[mn],a,!0),ro(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Lp(t,n,f,a);break t}else if(f!==s){s=ii(Error(r(424)),n),qs(s),n=Lp(t,n,f,a);break t}else for(En=vi(n.stateNode.containerInfo.firstChild),zn=n,Be=!0,gi=null,bi=!0,a=wd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),f===s){n=Hi(t,n,a);break t}Tn(t,n,f,a)}n=n.child}return n;case 26:return no(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,t=n.pendingProps,s=Dl(Ie.current).createElement(a),s[Rt]=n,s[Ct]=t,bn(s,a,t),Qt(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pt(n),t===null&&Be&&(s=n.stateNode=Om(n.type,n.pendingProps,Ie.current),zn=n,bi=!0,En=vi(s.firstChild)),s=n.pendingProps.children,t!==null||Be?Tn(t,n,s,a):n.child=Ka(n,null,s,a),no(t,n),n.child;case 5:return t===null&&Be&&((c=s=En)&&(s=ay(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,zn=n,En=vi(s.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),Pt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,xv,null,null,a),Mo._currentValue=c),no(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&Be&&((t=a=En)&&(a=ry(a,n.pendingProps,bi),a!==null?(n.stateNode=a,zn=n,En=null,t=!0):t=!1),t||Za(n)),null;case 13:return Dp(t,n,a);case 4:return fe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ka(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return Ep(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Cn(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return bp(t,n,n.type,n.pendingProps,a);case 19:return Np(t,n,a);case 22:return Ap(t,n,a);case 24:return ir(n),s=Cn(mn),t===null?(c=iu(),c===null&&(c=Ze,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ga(n,mn,c)):(t.lanes&a&&(zu(t,n),so(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,mn,s)):(s=f.cache,ga(n,mn,s),s!==c.cache&&Ou(n,[mn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Nt(null),nr=null,Gi=null;function ga(t,n,a){ae(Uu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Uu.current,Ot(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var P=0;P<n.length;P++)if(R.context===n[P]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Nu(f.return,a,t),s||(S=null);break t}f=R.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=c.type;Yn(c.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(c===re.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Pp(nr,t)}function gl(t,n){return nr===null&&ir(t),Pp(t,n)}function Pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var _a=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,nn&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),gd(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Pi(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function ro(){if(Fu){var t=Fr;if(t!==null)throw t}}function so(t,n,a,s){Fu=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var P=R,Z=P.next;P.next=null,S===null?f=Z:S.next=Z,S=P;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==S&&(R===null?gt.firstBaseUpdate=Z:R.next=Z,gt.lastBaseUpdate=P))}if(f!==null){var bt=c.baseState;S=0,gt=Z=P=null,R=f;do{var ot=R.lane&-536870913,dt=ot!==R.lane;if(dt?(Oe&ot)===ot:(s&ot)===ot){ot!==0&&ot===Br&&(Fu=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var se=t,ye=R;ot=n;var sn=a;switch(ye.tag){case 1:if(se=ye.payload,typeof se=="function"){bt=se.call(sn,bt,ot);break t}bt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ye.payload,ot=typeof se=="function"?se.call(sn,bt,ot):se,ot==null)break t;bt=T({},bt,ot);break t;case 2:_a=!0}}ot=R.callback,ot!==null&&(t.flags|=64,dt&&(t.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[ot]:dt.push(ot))}else dt={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(Z=gt=dt,P=bt):gt=gt.next=dt,S|=ot;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;dt=R,R=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);gt===null&&(P=bt),c.baseState=P,c.firstBaseUpdate=Z,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),Ta|=S,t.lanes=S,t.memoizedState=bt}}function zp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}function oo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(R){je(n,n.return,R)}}function Sa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,c=n;var P=a;try{R()}catch(Z){je(c,P,Z)}}}s=s.next}while(s!==f)}}catch(Z){je(n,n.return,Z)}}function Fp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bp(n,a)}catch(s){je(t,t.return,s)}}}function Ip(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){je(t,n,s)}}function ar(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){je(t,n,f)}}function jn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){je(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){je(t,n,c)}else a.current=null}function Hp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){je(t,t.return,c)}}function Gp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[Ct]=n}catch(c){je(t,t.return,c)}}function Vp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var ki=!1,an=!1,Gu=!1,kp=typeof WeakSet=="function"?WeakSet:Set,yn=null,Wp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=od(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,R=-1,P=-1,Z=0,gt=0,bt=t,ot=null;e:for(;;){for(var dt;bt!==a||c!==0&&bt.nodeType!==3||(R=S+c),bt!==f||s!==0&&bt.nodeType!==3||(P=S+s),bt.nodeType===3&&(S+=bt.nodeValue.length),(dt=bt.firstChild)!==null;)ot=bt,bt=dt;for(;;){if(bt===t)break e;if(ot===a&&++Z===c&&(R=S),ot===f&&++gt===s&&(P=S),(dt=bt.nextSibling)!==null)break;bt=ot,ot=bt.parentNode}bt=dt}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var se=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(se,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ye){je(a,a.return,ye)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}return se=Wp,Wp=!1,se}function Xp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),s&4&&oo(5,a);break;case 1:if(Xi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(R){je(a,a.return,R)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(R){je(a,a.return,R)}}s&64&&Fp(a),s&512&&ar(a,a.return);break;case 3:if(Xi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bp(s,t)}catch(R){je(a,a.return,R)}}break;case 26:Xi(t,a),s&512&&ar(a,a.return);break;case 27:case 5:Xi(t,a),n===null&&s&4&&Hp(a),s&512&&ar(a,a.return);break;case 12:Xi(t,a);break;case 13:Xi(t,a),s&4&&jp(t,a);break;case 22:if(c=a.memoizedState!==null||ki,!c){n=n!==null&&n.memoizedState!==null||an;var f=ki,S=an;ki=c,(an=n)&&!S?xa(t,a,(a.subtreeFlags&8772)!==0):Xi(t,a),ki=f,an=S}s&512&&(a.memoizedProps.mode==="manual"?ar(a,a.return):jn(a,a.return));break;default:Xi(t,a)}}function qp(t){var n=t.alternate;n!==null&&(t.alternate=null,qp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&it(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,Zn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Yp(t,n,a),a=a.sibling}function Yp(t,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Ht,a)}catch{}switch(a.tag){case 26:an||jn(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||jn(a,n);var s=hn,c=Zn;for(hn=a.stateNode,Wi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);it(a),hn=s,Zn=c;break;case 5:an||jn(a,n);case 6:c=hn;var f=Zn;if(hn=null,Wi(t,n,a),hn=c,Zn=f,hn!==null)if(Zn)try{t=hn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(S){je(a,n,S)}else try{hn.removeChild(a.stateNode)}catch(S){je(a,n,S)}break;case 18:hn!==null&&(Zn?(n=hn,a=a.stateNode,n.nodeType===8?Sf(n.parentNode,a):n.nodeType===1&&Sf(n,a),Ao(n)):Sf(hn,a.stateNode));break;case 4:s=hn,c=Zn,hn=a.stateNode.containerInfo,Zn=!0,Wi(t,n,a),hn=s,Zn=c;break;case 0:case 11:case 14:case 15:an||Sa(2,a,n),an||Sa(4,a,n),Wi(t,n,a);break;case 1:an||(jn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Ip(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:an||jn(a,n),an=(s=an)||a.memoizedState!==null,Wi(t,n,a),an=s;break;default:Wi(t,n,a)}}function jp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ao(t)}catch(a){je(n,n.return,a)}}function Lv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new kp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new kp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Lv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function oi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:case 5:hn=R.stateNode,Zn=!1;break t;case 3:hn=R.stateNode.containerInfo,Zn=!0;break t;case 4:hn=R.stateNode.containerInfo,Zn=!0;break t}R=R.return}if(hn===null)throw Error(r(160));Yp(f,S,c),hn=null,Zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Zp(n,t),n=n.sibling}var _i=null;function Zp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(n,t),li(t),s&4&&(Sa(3,t,t.return),oo(3,t),Sa(5,t,t.return));break;case 1:oi(n,t),li(t),s&512&&(an||a===null||jn(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(oi(n,t),li(t),s&512&&(an||a===null||jn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$]||f[Rt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[Rt]=t,Qt(f),s=f;break t;case"link":var S=Hm("link","href",c).get(s+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(f=S[R],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Hm("meta","content",c).get(s+(a.content||""))){for(R=0;R<S.length;R++)if(f=S[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Rt]=t,Qt(f),s=f}t.stateNode=s}else Gm(c,t.type,t.stateNode);else t.stateNode=Im(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gm(c,t.type,t.stateNode):Im(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var P=c.firstChild;P;){var Z=P.nextSibling,gt=P.nodeName;P[$]||gt==="HEAD"||gt==="BODY"||gt==="SCRIPT"||gt==="STYLE"||gt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||c.removeChild(P),P=Z}for(var bt=t.type,ot=c.attributes;ot.length;)c.removeAttributeNode(ot[0]);bn(c,bt,f),c[Rt]=t,c[Ct]=f}catch(se){je(t,t.return,se)}}case 5:if(oi(n,t),li(t),s&512&&(an||a===null||jn(a,a.return)),t.flags&32){c=t.stateNode;try{br(c,"")}catch(se){je(t,t.return,se)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Gp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(oi(n,t),li(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(se){je(t,t.return,se)}}break;case 3:if(Ol=null,c=_i,_i=Ul(n.containerInfo),oi(n,t),_i=c,li(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(se){je(t,t.return,se)}Gu&&(Gu=!1,Kp(t));break;case 4:s=_i,_i=Ul(t.stateNode.containerInfo),oi(n,t),li(t),_i=s;break;case 12:oi(n,t),li(t);break;case 13:oi(n,t),li(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=_t()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(an||a===null||jn(a,a.return)),P=t.memoizedState!==null,Z=a!==null&&a.memoizedState!==null,gt=ki,bt=an,ki=gt||P,an=bt||Z,oi(n,t),an=bt,ki=gt,li(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=ki||an,a===null||Z||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){Z=a=n;try{if(c=Z.stateNode,P)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=Z.stateNode,R=Z.memoizedProps.style;var dt=R!=null&&R.hasOwnProperty("display")?R.display:null;S.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(se){je(Z,Z.return,se)}}}else if(n.tag===6){if(a===null){Z=n;try{Z.stateNode.nodeValue=P?"":Z.memoizedProps}catch(se){je(Z,Z.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:oi(n,t),li(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:oi(n,t),li(t)}}function li(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(Vp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(br(S,""),s.flags&=-33);var R=Iu(t);_l(t,R,S);break;case 3:case 4:var P=s.stateNode.containerInfo,Z=Iu(t);Hu(t,Z,P);break;default:throw Error(r(161))}}}catch(gt){je(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Kp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Kp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Vr(n);break;case 1:jn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ip(n,n.return,a),Vr(n);break;case 26:case 27:case 5:jn(n,n.return),Vr(n);break;case 22:jn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),oo(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){je(s,s.return,Z)}if(s=f,c=s.updateQueue,c!==null){var R=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)zp(P[c],R)}catch(Z){je(s,s.return,Z)}}a&&S&64&&Fp(f),ar(f,f.return);break;case 26:case 27:case 5:xa(c,f,a),a&&s===null&&S&4&&Hp(f),ar(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&jp(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),ar(f,f.return);break;default:xa(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function Ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qp(t,n,a,s),n=n.sibling}function Qp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(t,n,a,s),c&2048&&oo(9,n);break;case 3:Ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){Ma(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,R=f.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){je(n,n.return,P)}}else Ma(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(t,n,a,s):lo(t,n):f._visibility&4?Ma(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ma(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ma(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,R=a,P=s,Z=S.flags;switch(S.tag){case 0:case 11:case 15:kr(f,S,R,P,c),oo(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&4?kr(f,S,R,P,c):lo(f,S):(gt._visibility|=4,kr(f,S,R,P,c)),c&&Z&2048&&ku(S.alternate,S);break;case 24:kr(f,S,R,P,c),c&&Z&2048&&Wu(S.alternate,S);break;default:kr(f,S,R,P,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&ku(s.alternate,s);break;case 24:lo(a,s),c&2048&&Wu(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Wr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)Jp(t),t=t.sibling}function Jp(t){switch(t.tag){case 26:Wr(t),t.flags&co&&t.memoizedState!==null&&vy(_i,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=_i;_i=Ul(t.stateNode.containerInfo),Wr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Wr(t),co=n):Wr(t));break;default:Wr(t)}}function $p(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,em(s,t)}$p(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tm(t),t=t.sibling}function tm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):uo(t);break;default:uo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,em(s,t)}$p(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function em(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(qp(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}function Dv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,s){return new Dv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Xu(t)&&(S=1);else if(typeof t=="string")S=gy(t,a,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return rr(a.children,c,f,n);case m:S=8,c|=24;break;case g:return t=ci(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case C:return t=ci(13,a,n,c),t.elementType=C,t.lanes=f,t;case v:return t=ci(19,a,n,c),t.elementType=v,t.lanes=f,t;case D:return im(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case M:S=10;break t;case x:S=9;break t;case b:S=11;break t;case _:S=14;break t;case z:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ci(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=ci(7,t,s,n),t.lanes=a,t}function im(t,n,a,s){t=ci(22,t,s,n),t.elementType=D,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=fa(f,2);S!==null&&(c._pendingVisibility|=2,Bn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=fa(f,2);S!==null&&(c._pendingVisibility&=-3,Bn(S,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function qi(t){t.flags|=4}function am(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Vm(n)){if(n=si.current,n!==null&&((Oe&4194176)===Oe?Ai!==null:(Oe&62914560)!==Oe&&!(Oe&536870912)||n!==Ai))throw js=Jc,xd;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,qr|=n)}function fo(t,n){if(!Be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(mn),Jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?qi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gi!==null&&(ef(gi),gi=null))),en(n),null;case 26:return a=n.memoizedState,t===null?(qi(n),a!==null?(en(n),am(n,a)):(en(n),n.flags&=-16777217)):a?a!==t.memoizedState?(qi(n),en(n),am(n,a)):(en(n),n.flags&=-16777217):(t.memoizedProps!==s&&qi(n),en(n),n.flags&=-16777217),null;case 27:vt(n),a=Ie.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=oe.current,Ws(n)?yd(n):(t=Om(c,s,a),n.stateNode=t,qi(n))}return en(n),null;case 5:if(vt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(t=oe.current,Ws(n))yd(n);else{switch(c=Dl(Ie.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[Rt]=n,t[Ct]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(bn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&qi(n)}}return en(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ie.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=zn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Rt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rm(t.nodeValue,a)),t||Za(n)}else t=Dl(t).createTextNode(s),t[Rt]=n,n.stateNode=t}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Rt]=n}else Xs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else gi!==null&&(ef(gi),gi=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),en(n),null;case 4:return Jt(),t===null&&df(n.stateNode.containerInfo),en(n),null;case 10:return Vi(n.type),en(n),null;case 19:if(Ot(pn),c=n.memoizedState,c===null)return en(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)fo(c,!1);else{if(rn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,fo(c,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return ae(pn,pn.current&1|2),n.child}t=t.sibling}c.tail!==null&&_t()>xl&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Be)return en(n),null}else 2*_t()-c.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=_t(),n.sibling=null,t=pn.current,ae(pn,s?t&1|2:t&1),n):(en(n),null);case 22:case 23:return Fi(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ot(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(mn),en(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(mn),Jt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 13:if(Fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ot(pn),null;case 4:return Jt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Fi(n),tu(),t!==null&&Ot(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(mn),null;case 25:return null;default:return null}}function rm(t,n){switch(Kc(n),n.tag){case 3:Vi(mn),Jt();break;case 26:case 27:case 5:vt(n);break;case 4:Jt();break;case 13:Fi(n);break;case 19:Ot(pn);break;case 10:Vi(n.type);break;case 22:case 23:Fi(n),tu(),t!==null&&Ot(Qa);break;case 24:Vi(mn)}}var Ov={getCacheForType:function(t){var n=Cn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,nn=0,Ze=null,De=null,Oe=0,Ke=0,Kn=null,Yi=!1,Xr=!1,ju=!1,ji=0,rn=0,Ta=0,sr=0,Zu=0,ui=0,qr=0,ho=null,Ri=null,Ku=!1,Qu=0,xl=1/0,Ml=null,ba=null,El=!1,or=null,po=0,Ju=0,$u=null,mo=0,tf=null;function Qn(){if(nn&2&&Oe!==0)return Oe&-Oe;if(I.T!==null){var t=Br;return t!==0?t:cf()}return Vt()}function sm(){ui===0&&(ui=!(Oe&536870912)||Be?Se():536870912);var t=si.current;return t!==null&&(t.flags|=32),ui}function Bn(t,n,a){(t===Ze&&Ke===2||t.cancelPendingCommit!==null)&&(Yr(t,0),Zi(t,Oe,ui,!1)),xe(t,a),(!(nn&2)||t!==Ze)&&(t===Ze&&(!(nn&2)&&(sr|=a),rn===4&&Zi(t,Oe,ui,!1)),Ci(t))}function om(t,n,a){if(nn&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||ee(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&Zi(t,n,0,!1);break}else if(c===6)Zi(t,n,0,!Yi);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=t;c=ho;var P=R.current.memoizedState.isDehydrated;if(P&&(Yr(R,S).flags|=256),S=rf(R,S,!1),S!==2){if(ju&&!P){R.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Ri,Ri=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Zi(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Zi(s,n,ui,!Yi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-_t(),10<f)){if(Zi(s,n,ui,!Yi),Gt(s,0)!==0)break t;s.timeoutHandle=Dm(lm.bind(null,s,a,Ri,Ml,Ku,n,ui,sr,qr,Yi,2,-0,0),f);break t}lm(s,a,Ri,Ml,Ku,n,ui,sr,qr,Yi,0,-0,0)}}break}while(!0);Ci(t)}function ef(t){Ri===null?Ri=t:Ri.push.apply(Ri,t)}function lm(t,n,a,s,c,f,S,R,P,Z,gt,bt,ot){var dt=n.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:_y},Jp(n),n=yy(),n!==null)){t.cancelPendingCommit=n(mm.bind(null,t,a,s,c,S,R,P,1,bt,ot)),Zi(t,f,S,!Z);return}mm(t,a,s,c,S,R,P,gt,bt,ot)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zi(t,n,a,s){n&=~Zu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-O(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&tn(t,a,n)}function Tl(){return nn&6?!0:(go(0),!1)}function nf(){if(De!==null){if(Ke===0)var t=De.return;else t=De,Gi=nr=null,lu(t),Pr=null,Zs=0,t=De;for(;t!==null;)rm(t.alternate,t),t=t.return;De=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ze=t,De=a=Ea(t.current,null),Oe=n,Ke=0,Kn=null,Yi=!1,Xr=ee(t,n),ju=!1,qr=ui=Zu=sr=Ta=rn=0,Ri=ho=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-O(s),f=1<<c;n|=t[c],s&=~f}return ji=n,jo(),a}function cm(t,n){we=null,I.H=wi,n===Ys?(n=Td(),Ke=3):n===xd?(n=Td(),Ke=4):Ke=n===Mp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,De===null&&(rn=1,pl(t,ii(n,t.current)))}function um(){var t=I.H;return I.H=wi,t===null?wi:t}function fm(){var t=I.A;return I.A=Ov,t}function af(){rn=4,Yi||(Oe&4194176)!==Oe&&si.current!==null||(Xr=!0),!(Ta&134217727)&&!(sr&134217727)||Ze===null||Zi(Ze,Oe,ui,!1)}function rf(t,n,a){var s=nn;nn|=2;var c=um(),f=fm();(Ze!==t||Oe!==n)&&(Ml=null,Yr(t,n)),n=!1;var S=rn;t:do try{if(Ke!==0&&De!==null){var R=De,P=Kn;switch(Ke){case 8:nf(),S=6;break t;case 3:case 2:case 6:si.current===null&&(n=!0);var Z=Ke;if(Ke=0,Kn=null,jr(t,R,P,Z),a&&Xr){S=0;break t}break;default:Z=Ke,Ke=0,Kn=null,jr(t,R,P,Z)}}Bv(),S=rn;break}catch(gt){cm(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Gi=nr=null,nn=s,I.H=c,I.A=f,De===null&&(Ze=null,Oe=0,jo()),S}function Bv(){for(;De!==null;)hm(De)}function Fv(t,n){var a=nn;nn|=2;var s=um(),c=fm();Ze!==t||Oe!==n?(Ml=null,xl=_t()+500,Yr(t,n)):Xr=ee(t,n);t:do try{if(Ke!==0&&De!==null){n=De;var f=Kn;e:switch(Ke){case 1:Ke=0,Kn=null,jr(t,n,f,1);break;case 2:if(Md(f)){Ke=0,Kn=null,dm(n);break}n=function(){Ke===2&&Ze===t&&(Ke=7),Ci(t)},f.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:Md(f)?(Ke=0,Kn=null,dm(n)):(Ke=0,Kn=null,jr(t,n,f,7));break;case 5:var S=null;switch(De.tag){case 26:S=De.memoizedState;case 5:case 27:var R=De;if(!S||Vm(S)){Ke=0,Kn=null;var P=R.sibling;if(P!==null)De=P;else{var Z=R.return;Z!==null?(De=Z,bl(Z)):De=null}break e}}Ke=0,Kn=null,jr(t,n,f,5);break;case 6:Ke=0,Kn=null,jr(t,n,f,6);break;case 8:nf(),rn=6;break t;default:throw Error(r(462))}}Iv();break}catch(gt){cm(t,gt)}while(!0);return Gi=nr=null,I.H=s,I.A=c,nn=a,De!==null?0:(Ze=null,Oe=0,jo(),rn)}function Iv(){for(;De!==null&&!lt();)hm(De)}function hm(t){var n=Op(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?bl(t):De=n}function dm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rp(a,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=Rp(a,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:lu(n);default:rm(a,n),n=De=nm(n,ji),n=Op(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?bl(t):De=n}function jr(t,n,a,s){Gi=nr=null,lu(n),Pr=null,Zs=0;var c=n.return;try{if(wv(t,c,n,a,Oe)){rn=1,pl(t,ii(a,t.current)),De=null;return}}catch(f){if(c!==null)throw De=c,f;rn=1,pl(t,ii(a,t.current)),De=null;return}n.flags&32768?(Be||s===1?t=!0:Xr||Oe&536870912?t=!1:(Yi=t=!0,(s===2||s===3||s===6)&&(s=si.current,s!==null&&s.tag===13&&(s.flags|=16384))),pm(n,t)):bl(n)}function bl(t){var n=t;do{if(n.flags&32768){pm(n,Yi);return}t=n.return;var a=Uv(n.alternate,n,ji);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);rn===0&&(rn=5)}function pm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);rn=6,De=null}function mm(t,n,a,s,c,f,S,R,P,Z){var gt=I.T,bt=k.p;try{k.p=2,I.T=null,Hv(t,n,a,s,bt,c,f,S,R,P,Z)}finally{I.T=gt,k.p=bt}}function Hv(t,n,a,s,c,f,S,R){do Zr();while(or!==null);if(nn&6)throw Error(r(327));var P=t.finishedWork;if(s=t.finishedLanes,P===null)return null;if(t.finishedWork=null,t.finishedLanes=0,P===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var Z=P.lanes|P.childLanes;if(Z|=Yc,qe(t,s,Z,f,S,R),t===Ze&&(De=Ze=null,Oe=0),!(P.subtreeFlags&10256)&&!(P.flags&10256)||El||(El=!0,Ju=Z,$u=a,Wv(Kt,function(){return Zr(),null})),a=(P.flags&15990)!==0,P.subtreeFlags&15990||a?(a=I.T,I.T=null,f=k.p,k.p=2,S=nn,nn|=4,Cv(t,P),Zp(P,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=P,Xp(t,P.alternate,P),at(),nn=S,k.p=f,I.T=a):t.current=P,El?(El=!1,or=t,po=s):gm(t,Z),Z=t.pendingLanes,Z===0&&(ba=null),zt(P.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,P=0;P<n.length;P++)Z=n[P],c(Z.value,{componentStack:Z.stack});return po&3&&Zr(),Z=t.pendingLanes,s&4194218&&Z&42?t===tf?mo++:(mo=0,tf=t):mo=0,go(0),null}function gm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Zr(){if(or!==null){var t=or,n=Ju;Ju=0;var a=Ut(po),s=I.T,c=k.p;try{if(k.p=32>a?32:a,I.T=null,or===null)var f=!1;else{a=$u,$u=null;var S=or,R=po;if(or=null,po=0,nn&6)throw Error(r(331));var P=nn;if(nn|=4,tm(S.current),Qp(S,S.current,R,a),nn=P,go(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Ht,S)}catch{}f=!0}return f}finally{k.p=c,I.T=s,gm(t,n)}}return!1}function _m(t,n,a){n=ii(a,n),n=Mu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(xe(t,2),Ci(t))}function je(t,n,a){if(t.tag===3)_m(t,t,a);else for(;n!==null;){if(n.tag===3){_m(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){t=ii(a,t),a=Sp(2),s=ya(n,a,2),s!==null&&(xp(a,s,n,t),xe(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Oe&a)===a&&(rn===4||rn===3&&(Oe&62914560)===Oe&&300>_t()-Qu?!(nn&2)&&Yr(t,0):Zu|=a,qr===Oe&&(qr=0)),Ci(t)}function vm(t,n){n===0&&(n=ze()),t=fa(t,n),t!==null&&(xe(t,n),Ci(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vm(t,a)}function Wv(t,n){return E(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,lr=0;function Ci(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Xv))}function go(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-O(42|t)+1)-1,f&=c&~(S&~R),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,xm(s,f))}else f=Oe,f=Gt(s,s===Ze?f:0),!(f&3)||ee(s,f)||(a=!0,xm(s,f));s=s.next}while(a);lf=!1}}function Xv(){wl=of=!1;var t=0;lr!==0&&(ty()&&(t=lr),lr=0);for(var n=_t(),a=null,s=Al;s!==null;){var c=s.next,f=ym(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}go(t)}function ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-O(f),R=1<<S,P=c[S];P===-1?(!(R&a)||R&s)&&(c[S]=Ue(R,n)):P<=n&&(t.expiredLanes|=R),f&=~R}if(n=Ze,a=Oe,a=Gt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Ke===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&X(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&X(s),Ut(a)){case 2:case 8:a=Dt;break;case 32:a=Kt;break;case 268435456:a=yt;break;default:a=Kt}return s=Sm.bind(null,t),a=E(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&X(s),t.callbackPriority=2,t.callbackNode=null,2}function Sm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Oe;return s=Gt(t,t===Ze?s:0),s===0?null:(om(t,s,n),ym(t,_t()),t.callbackNode!=null&&t.callbackNode===a?Sm.bind(null,t):null)}function xm(t,n){if(Zr())return null;om(t,n,!0)}function qv(t){ny(function(){nn&6?E(mt,t):t()})}function cf(){return lr===0&&(lr=Se()),lr}function Mm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Em(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Mm((c[Ct]||null).action),S=s.submitter;S&&(n=(n=S[Ct]||null)?Mm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new Xo("action","action",null,s,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var P=S?Em(c,S):new FormData(c);_u(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(R.preventDefault(),P=S?Em(c,S):new FormData(c),_u(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var uf=0;uf<md.length;uf++){var ff=md[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);mi(jv,"on"+Zv)}mi(ud,"onAnimationEnd"),mi(fd,"onAnimationIteration"),mi(hd,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(hv,"onTransitionRun"),mi(dv,"onTransitionStart"),mi(pv,"onTransitionCancel"),mi(dd,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Tm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var R=s[S],P=R.instance,Z=R.currentTarget;if(R=R.listener,P!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=Z;try{f(c)}catch(gt){dl(gt)}c.currentTarget=null,f=P}else for(S=0;S<s.length;S++){if(R=s[S],P=R.instance,Z=R.currentTarget,R=R.listener,P!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=Z;try{f(c)}catch(gt){dl(gt)}c.currentTarget=null,f=P}}}}function Ne(t,n){var a=n[he];a===void 0&&(a=n[he]=new Set);var s=t+"__bubble";a.has(s)||(bm(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),bm(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Rl]){t[Rl]=!0,ve.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,hf("selectionchange",!1,n))}}function bm(t,n,a,s){switch(jm(n)){case 2:var c=My;break;case 8:c=Ey;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var R=s.stateNode.containerInfo;if(R===c||R.nodeType===8&&R.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&(P=S.stateNode.containerInfo,P===c||P.nodeType===8&&P.parentNode===c))return;S=S.return}for(;R!==null;){if(S=tt(R),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=f=S;continue t}R=R.parentNode}}s=s.return}Hh(function(){var Z=f,gt=Uc(a),bt=[];t:{var ot=pd.get(t);if(ot!==void 0){var dt=Xo,se=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":dt=k0;break;case"focusin":se="focus",dt=Fc;break;case"focusout":se="blur",dt=Fc;break;case"beforeblur":case"afterblur":dt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=q0;break;case ud:case fd:case hd:dt=O0;break;case dd:dt=j0;break;case"scroll":case"scrollend":dt=C0;break;case"wheel":dt=K0;break;case"copy":case"cut":case"paste":dt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Xh;break;case"toggle":case"beforetoggle":dt=J0}var ye=(n&4)!==0,sn=!ye&&(t==="scroll"||t==="scrollend"),Q=ye?ot!==null?ot+"Capture":null:ot;ye=[];for(var q=Z,nt;q!==null;){var St=q;if(nt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||nt===null||Q===null||(St=Ps(q,Q),St!=null&&ye.push(vo(q,St,nt))),sn)break;q=q.return}0<ye.length&&(ot=new dt(ot,se,null,a,gt),bt.push({event:ot,listeners:ye}))}}if(!(n&7)){t:{if(ot=t==="mouseover"||t==="pointerover",dt=t==="mouseout"||t==="pointerout",ot&&a!==Dc&&(se=a.relatedTarget||a.fromElement)&&(tt(se)||se[le]))break t;if((dt||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,dt?(se=a.relatedTarget||a.toElement,dt=Z,se=se?tt(se):null,se!==null&&(sn=et(se),ye=se.tag,se!==sn||ye!==5&&ye!==27&&ye!==6)&&(se=null)):(dt=null,se=Z),dt!==se)){if(ye=kh,St="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Xh,St="onPointerLeave",Q="onPointerEnter",q="pointer"),sn=dt==null?ot:$t(dt),nt=se==null?ot:$t(se),ot=new ye(St,q+"leave",dt,a,gt),ot.target=sn,ot.relatedTarget=nt,St=null,tt(gt)===Z&&(ye=new ye(Q,q+"enter",se,a,gt),ye.target=nt,ye.relatedTarget=sn,St=ye),sn=St,dt&&se)e:{for(ye=dt,Q=se,q=0,nt=ye;nt;nt=Qr(nt))q++;for(nt=0,St=Q;St;St=Qr(St))nt++;for(;0<q-nt;)ye=Qr(ye),q--;for(;0<nt-q;)Q=Qr(Q),nt--;for(;q--;){if(ye===Q||Q!==null&&ye===Q.alternate)break e;ye=Qr(ye),Q=Qr(Q)}ye=null}else ye=null;dt!==null&&Am(bt,ot,dt,ye,!1),se!==null&&sn!==null&&Am(bt,sn,se,ye,!0)}}t:{if(ot=Z?$t(Z):window,dt=ot.nodeName&&ot.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ot.type==="file")var ne=$h;else if(Qh(ot))if(td)ne=lv;else{ne=sv;var Ce=rv}else dt=ot.nodeName,!dt||dt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?Z&&Lc(Z.elementType)&&(ne=$h):ne=ov;if(ne&&(ne=ne(t,Z))){Jh(bt,ne,a,gt);break t}Ce&&Ce(t,ot,Z),t==="focusout"&&Z&&ot.type==="number"&&Z.memoizedProps.value!=null&&Cc(ot,"number",ot.value)}switch(Ce=Z?$t(Z):window,t){case"focusin":(Qh(Ce)||Ce.contentEditable==="true")&&(Cr=Ce,Wc=Z,ks=null);break;case"focusout":ks=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,ld(bt,a,gt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":ld(bt,a,gt)}var ce;if(Hc)t:{switch(t){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Rr?Zh(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(qh&&a.locale!=="ko"&&(Rr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Rr&&(ce=Gh()):(ua=gt,Pc="value"in ua?ua.value:ua.textContent,Rr=!0)),Ce=Cl(Z,me),0<Ce.length&&(me=new Wh(me,t,null,a,gt),bt.push({event:me,listeners:Ce}),ce?me.data=ce:(ce=Kh(a),ce!==null&&(me.data=ce)))),(ce=tv?ev(t,a):nv(t,a))&&(me=Cl(Z,"onBeforeInput"),0<me.length&&(Ce=new Wh("onBeforeInput","beforeinput",null,a,gt),bt.push({event:Ce,listeners:me}),Ce.data=ce)),Yv(bt,t,Z,a,gt)}Tm(bt,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&s.unshift(vo(t,c,f)),c=Ps(t,n),c!=null&&s.push(vo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Am(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var R=a,P=R.alternate,Z=R.stateNode;if(R=R.tag,P!==null&&P===s)break;R!==5&&R!==26&&R!==27||Z===null||(P=Z,c?(Z=Ps(a,f),Z!=null&&S.unshift(vo(a,Z,P))):c||(Z=Ps(a,f),Z!=null&&S.push(vo(a,Z,P)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Rm(t,n){return n=wm(n),wm(t)===n}function Ll(){}function ke(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(t,""+s);break;case"className":Ye(t,"class",s);break;case"tabIndex":Ye(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,a,s);break;case"style":Fh(t,s,f);break;case"data":if(n!=="object"){Ye(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(t,n,"name",c.name,c,null),ke(t,n,"formEncType",c.formEncType,c,null),ke(t,n,"formMethod",c.formMethod,c,null),ke(t,n,"formTarget",c.formTarget,c,null)):(ke(t,n,"encType",c.encType,c,null),ke(t,n,"method",c.method,c,null),ke(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ll);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),oa(t,"popover",s);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oa(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,oa(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Fh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?br(t,s):(typeof s=="number"||typeof s=="bigint")&&br(t,""+s);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!de.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Ct]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):oa(t,a,s)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,f,S,a,null)}}c&&ke(t,n,"srcSet",a.srcSet,a,null),s&&ke(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var R=f=S=c=null,P=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":S=gt;break;case"checked":P=gt;break;case"defaultChecked":Z=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:ke(t,n,s,gt,a,null)}}Os(t,f,R,P,Z,S,c,!1),on(t);return;case"select":Ne("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":s=R;default:ke(t,n,c,R,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Tr(t,!!s,n,!1):a!=null&&Tr(t,!!s,a,!0);return;case"textarea":Ne("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:ke(t,n,S,R,a,null)}zh(t,s,c,f),on(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(t,n,P,s,a,null)}return;case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(s=0;s<_o.length;s++)Ne(_o[s],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,Z,s,a,null)}return;default:if(Lc(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&mf(t,n,gt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&ke(t,n,R,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,R=null,P=null,Z=null,gt=null;for(dt in a){var bt=a[dt];if(a.hasOwnProperty(dt)&&bt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":P=bt;default:s.hasOwnProperty(dt)||ke(t,n,dt,null,s,bt)}}for(var ot in s){var dt=s[ot];if(bt=a[ot],s.hasOwnProperty(ot)&&(dt!=null||bt!=null))switch(ot){case"type":f=dt;break;case"name":c=dt;break;case"checked":Z=dt;break;case"defaultChecked":gt=dt;break;case"value":S=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==bt&&ke(t,n,ot,dt,s,bt)}}Ns(t,S,R,P,Z,gt,f,c);return;case"select":dt=S=R=ot=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":dt=P;default:s.hasOwnProperty(f)||ke(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":S=f;default:f!==P&&ke(t,n,c,f,s,P)}n=R,a=S,s=dt,ot!=null?Tr(t,!!a,ot,!1):!!s!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":dt=ot=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ke(t,n,R,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ot=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ke(t,n,S,c,s,f)}Ph(t,ot,dt);return;case"option":for(var se in a)if(ot=a[se],a.hasOwnProperty(se)&&ot!=null&&!s.hasOwnProperty(se))switch(se){case"selected":t.selected=!1;break;default:ke(t,n,se,null,s,ot)}for(P in s)if(ot=s[P],dt=a[P],s.hasOwnProperty(P)&&ot!==dt&&(ot!=null||dt!=null))switch(P){case"selected":t.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:ke(t,n,P,ot,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)ot=a[ye],a.hasOwnProperty(ye)&&ot!=null&&!s.hasOwnProperty(ye)&&ke(t,n,ye,null,s,ot);for(Z in s)if(ot=s[Z],dt=a[Z],s.hasOwnProperty(Z)&&ot!==dt&&(ot!=null||dt!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ke(t,n,Z,ot,s,dt)}return;default:if(Lc(n)){for(var sn in a)ot=a[sn],a.hasOwnProperty(sn)&&ot!==void 0&&!s.hasOwnProperty(sn)&&mf(t,n,sn,void 0,s,ot);for(gt in s)ot=s[gt],dt=a[gt],!s.hasOwnProperty(gt)||ot===dt||ot===void 0&&dt===void 0||mf(t,n,gt,ot,s,dt);return}}for(var Q in a)ot=a[Q],a.hasOwnProperty(Q)&&ot!=null&&!s.hasOwnProperty(Q)&&ke(t,n,Q,null,s,ot);for(bt in s)ot=s[bt],dt=a[bt],!s.hasOwnProperty(bt)||ot===dt||ot==null&&dt==null||ke(t,n,bt,ot,s,dt)}var gf=null,_f=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function Cm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function ty(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Dm=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(iy)}:Dm;function iy(t){setTimeout(function(){throw t})}function Sf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),Ao(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);Ao(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),it(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[$])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Nm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Om(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var fi=new Map,Pm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Ki=k.d;k.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:dy,S:hy,M:py};function sy(){var t=Ki.f(),n=Tl();return t||n}function oy(t){var n=It(t);n!==null&&n.tag===5&&n.type==="form"?lp(n):Ki.r(t)}var Jr=typeof document>"u"?null:document;function zm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pm.has(c)||(Pm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",t),Qt(n),s.head.appendChild(n)))}}function ly(t){Ki.D(t),zm("dns-prefetch",t,null)}function cy(t,n){Ki.C(t,n),zm("preconnect",t,n)}function uy(t,n,a){Ki.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}fi.has(f)||(t=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),bn(n,"link",t),Qt(n),s.head.appendChild(n)))}}function fy(t,n){Ki.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!fi.has(f)&&(t=T({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),bn(s,"link",t),Qt(s),a.head.appendChild(s)}}}function hy(t,n,a){Ki.S(t,n,a);var s=Jr;if(s&&t){var c=ie(s).hoistableStyles,f=$r(t);n=n||"default";var S=c.get(f);if(!S){var R={loading:0,preload:null};if(S=s.querySelector(yo(f)))R.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Mf(t,a);var P=S=s.createElement("link");Qt(P),bn(P,"link",t),P._p=new Promise(function(Z,gt){P.onload=Z,P.onerror=gt}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Nl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:R},c.set(f,S)}}}function dy(t,n){Ki.X(t,n);var a=Jr;if(a&&t){var s=ie(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=T({src:t,async:!0},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Qt(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function py(t,n){Ki.M(t,n);var a=Jr;if(a&&t){var s=ie(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=T({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Qt(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=Ie.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=ie(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=ie(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(yo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||my(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=ie(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Fm(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),Qt(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function So(t){return"script[async]"+t}function Im(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Qt(s),s;var c=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Qt(s),bn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,Qt(f),f;s=Fm(a),(c=fi.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),Qt(f);var S=f;return S._p=new Promise(function(R,P){S.onload=R,S.onerror=P}),bn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(So(f)))?(n.instance=c,Qt(c),c):(s=a,(c=fi.get(f))&&(s=T({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Qt(c),bn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var R=s[S];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Hm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[$]||f[Rt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var R=s.get(S);R?R.push(f):s.set(S,[f])}}return s}function Gm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vm(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var xo=null;function _y(){}function vy(t,n,a){if(xo===null)throw Error(r(475));var s=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(yo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Qt(f);return}f=t.ownerDocument||t,a=Fm(a),(c=fi.get(c))&&Mf(a,c),f=f.createElement("link"),Qt(f);var S=f;S._p=new Promise(function(R,P){S.onload=R,S.onerror=P}),bn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yy(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(Sy,t),zl=null,Pl.call(t))}function Sy(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function xy(t,n,a,s,c,f,S,R){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function km(t,n,a,s,c,f,S,R,P,Z,gt,bt){return t=new xy(t,n,a,S,R,P,Z,bt),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Wm(t){return t?(t=Ur,t):Ur}function Xm(t,n,a,s,c,f){c=Wm(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(Bn(a,t,n),ao(a,t,n))}function qm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){qm(t,n),(t=t.alternate)&&qm(t,n)}function Ym(t){if(t.tag===13){var n=fa(t,67108864);n!==null&&Bn(n,t,67108864),bf(t,67108864)}}var Bl=!0;function My(t,n,a,s){var c=I.T;I.T=null;var f=k.p;try{k.p=2,Af(t,n,a,s)}finally{k.p=f,I.T=c}}function Ey(t,n,a,s){var c=I.T;I.T=null;var f=k.p;try{k.p=8,Af(t,n,a,s)}finally{k.p=f,I.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Zm(t,s);else if(by(c,t,n,a,s))s.stopPropagation();else if(Zm(t,s),n&4&&-1<Ty.indexOf(t)){for(;c!==null;){var f=It(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=xt(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var P=1<<31-O(S);R.entanglements[1]|=P,S&=~P}Ci(f),!(nn&6)&&(xl=_t()+500,go(0))}}break;case 13:R=fa(f,2),R!==null&&Bn(R,f,2),Tl(),bf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=tt(t),t!==null){var n=et(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ut(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function jm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case mt:return 2;case Dt:return 8;case Kt:case Lt:return 32;case yt:return 268435456;default:return 32}default:return 32}}var Cf=!1,Aa=null,wa=null,Ra=null,Eo=new Map,To=new Map,Ca=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=It(n),n!==null&&Ym(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function by(t,n,a,s,c){switch(n){case"focusin":return Aa=bo(Aa,t,n,a,s,c),!0;case"dragenter":return wa=bo(wa,t,n,a,s,c),!0;case"mouseover":return Ra=bo(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,t,n,a,s,c)),!0}return!1}function Km(t){var n=tt(t.target);if(n!==null){var a=et(n);if(a!==null){if(n=a.tag,n===13){if(n=ut(a),n!==null){t.blockedOn=n,Xt(t.priority,function(){if(a.tag===13){var s=Qn(),c=fa(a,s);c!==null&&Bn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Dc=s,a.target.dispatchEvent(s),Dc=null}else return n=It(a),n!==null&&Ym(n),t.blockedOn=a,!1;n.shift()}return!0}function Qm(t,n,a){Il(t)&&a.delete(n)}function Ay(){Cf=!1,Aa!==null&&Il(Aa)&&(Aa=null),wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),Eo.forEach(Qm),To.forEach(Qm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ay)))}var Gl=null;function Jm(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=It(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(t){function n(P){return Hl(P,t)}Aa!==null&&Hl(Aa,t),wa!==null&&Hl(wa,t),Ra!==null&&Hl(Ra,t),Eo.forEach(n),To.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Km(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Ct]||null;if(typeof f=="function")S||Jm(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Ct]||null)R=S.formAction;else if(Rf(c)!==null)continue}else R=S.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),Jm(a)}}}function Lf(t){this._internalRoot=t}Vl.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();Xm(a,s,t,n,null,null)},Vl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),Xm(t.current,2,null,t,null,null),Tl(),n[le]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Km(t)}};var $m=e.version;if($m!=="19.0.0")throw Error(r(527,$m,"19.0.0"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Y(n),t=t!==null?ft(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:I,findFiberByHostInstance:tt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ht=kl.inject(wy),qt=kl}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gp,f=_p,S=vp,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=km(t,1,!1,null,null,a,s,c,f,S,R,null),t[le]=n.current,df(t.nodeType===8?t.parentNode:t),new Lf(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=gp,S=_p,R=vp,P=null,Z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Z=a.formState)),n=km(t,1,!0,n,a??null,s,c,f,S,R,P,Z),n.context=Wm(null),a=n.current,s=Qn(),c=va(s),c.callback=null,ya(a,c,s),n.current.lanes=s,xe(n,s),Ci(n),t[le]=n.current,df(t),new Vl(n)},Ro.version="19.0.0",Ro}var cg;function By(){if(cg)return Nf.exports;cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zy(),Nf.exports}var Fy=By();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,ug=1,Hy=2,k_=1,W_=2,na=3,ka=0,Xn=1,Di=2,Ia=0,Ms=1,mh=2,fg=3,hg=4,Gy=5,mr=100,Vy=101,ky=102,dg=103,pg=104,Wy=200,Xy=201,qy=202,Yy=203,gh=204,_h=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tS=212,eS=213,nS=214,iS=0,aS=1,rS=2,mc=3,sS=4,oS=5,lS=6,cS=7,X_=0,uS=1,fS=2,Ha=0,hS=1,dS=2,pS=3,mS=4,gS=5,_S=6,q_=300,bs=301,As=302,vh=303,yh=304,Ec=306,Sh=1e3,Mi=1001,xh=1002,Hn=1003,mg=1004,Co=1005,Wn=1006,Bf=1007,_r=1008,Ga=1009,vS=1010,yS=1011,Rh=1012,Y_=1013,Fa=1014,ia=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,SS=1021,Ei=1023,xS=1024,MS=1025,yr=1026,ws=1027,ES=1028,K_=1029,TS=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,gg=35840,_g=35841,vg=35842,yg=35843,$_=36196,Sg=37492,xg=37496,Mg=37808,Eg=37809,Tg=37810,bg=37811,Ag=37812,wg=37813,Rg=37814,Cg=37815,Lg=37816,Dg=37817,Ug=37818,Ng=37819,Og=37820,Pg=37821,Vf=36492,zg=36494,Bg=36495,bS=36283,Fg=36284,Ig=36285,Hg=36286,t0=3e3,Sr=3001,AS=3200,wS=3201,e0=0,RS=1,di="",An="srgb",ra="srgb-linear",Ch="display-p3",Tc="display-p3-linear",gc="linear",Qe="srgb",_c="rec709",vc="p3",is=7680,Gg=519,CS=512,LS=513,DS=514,n0=515,US=516,NS=517,OS=518,PS=519,Vg=35044,kg="300 es",Mh=1035,aa=2e3,yc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Cs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function Lh(o,e){return(o%e+e)%e}function zS(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function BS(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function FS(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function IS(o,e=1){return e-Math.abs(Lh(o,e*2)-e)}function HS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function GS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function VS(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kS(o,e){return o+Math.random()*(e-o)}function WS(o){return o*(.5-Math.random())}function XS(o){o!==void 0&&(Wg=o);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qS(o){return o*zo}function YS(o){return o*Io}function Eh(o){return(o&o-1)===0&&o!==0}function jS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Sc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ZS(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),p=d(i/2),m=u((e+r)/2),g=d((e+r)/2),y=u((e-r)/2),x=d((e-r)/2),M=u((r-e)/2),b=d((r-e)/2);switch(l){case"XYX":o.set(h*g,p*y,p*x,h*m);break;case"YZY":o.set(p*x,h*g,p*y,h*m);break;case"ZXZ":o.set(p*y,p*x,h*g,h*m);break;case"XZX":o.set(h*g,p*b,p*M,h*m);break;case"YXY":o.set(p*M,h*g,p*b,h*m);break;case"ZYZ":o.set(p*b,p*M,h*g,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Cs,clamp:Nn,euclideanModulo:Lh,mapLinear:zS,inverseLerp:BS,lerp:Bo,damp:FS,pingpong:IS,smoothstep:HS,smootherstep:GS,randInt:VS,randFloat:kS,randFloatSpread:WS,seededRandom:XS,degToRad:qS,radToDeg:YS,isPowerOfTwo:Eh,ceilPowerOfTwo:jS,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:ZS,normalize:Fn,denormalize:ys};class _e{constructor(e=0,i=0){_e.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,i,r,l,u,d,h,p,m){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],y=r[7],x=r[2],M=r[5],b=r[8],C=l[0],v=l[3],_=l[6],z=l[1],D=l[4],B=l[7],V=l[2],G=l[5],F=l[8];return u[0]=d*C+h*z+p*V,u[3]=d*v+h*D+p*G,u[6]=d*_+h*B+p*F,u[1]=m*C+g*z+y*V,u[4]=m*v+g*D+y*G,u[7]=m*_+g*B+y*F,u[2]=x*C+M*z+b*V,u[5]=x*v+M*D+b*G,u[8]=x*_+M*B+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],y=g*d-h*m,x=h*p-g*u,M=m*u-d*p,b=i*y+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=y*C,e[1]=(l*m-g*r)*C,e[2]=(h*r-l*d)*C,e[3]=x*C,e[4]=(g*i-l*p)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(r*p-m*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Le;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=xc("canvas");return o.style.display="block",o}const Xg={};function Es(o){o in Xg||(Xg[o]=!0,console.warn(o))}const qg=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yg=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[ra]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[An]:{transfer:Qe,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Tc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(Yg),fromReference:o=>o.applyMatrix3(qg)},[Ch]:{transfer:Qe,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Yg),fromReference:o=>o.applyMatrix3(qg).convertLinearToSRGB()}},QS=new Set([ra,Tc]),Xe={enabled:!0,_workingColorSpace:ra,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!QS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===di?gc:Wl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=xc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ts(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Xf(l[d].image)):u.push(Xf(l[d]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class qn extends Er{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Mi,l=Mi,u=Wn,d=_r,h=Ei,p=Ga,m=qn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Cs(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Sr?An:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?Sr:t0}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?An:di}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=q_;qn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],y=p[8],x=p[1],M=p[5],b=p[9],C=p[2],v=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(y-C)<.01&&Math.abs(b-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+C)<.1&&Math.abs(b+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,B=(M+1)/2,V=(_+1)/2,G=(g+x)/4,F=(y+C)/4,pt=(b+v)/4;return D>B&&D>V?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=G/r,u=F/r):B>V?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=G/l,u=pt/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=F/u,l=pt/u),this.set(r,l,u,i),this}let z=Math.sqrt((v-b)*(v-b)+(y-C)*(y-C)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(v-b)/z,this.y=(y-C)/z,this.z=(x-g)/z,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tx extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Sr?An:di),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new qn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends tx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ex extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const x=u[d+0],M=u[d+1],b=u[d+2],C=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(y!==C||p!==x||m!==M||g!==b){let v=1-h;const _=p*x+m*M+g*b+y*C,z=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const V=Math.sqrt(D),G=Math.atan2(V,_*z);v=Math.sin(v*G)/V,h=Math.sin(h*G)/V}const B=h*z;if(p=p*v+x*B,m=m*v+M*B,g=g*v+b*B,y=y*v+C*B,v===1-h){const V=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=V,m*=V,g*=V,y*=V}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=u[d],x=u[d+1],M=u[d+2],b=u[d+3];return e[i]=h*b+g*y+p*M-m*x,e[i+1]=p*b+g*x+m*y-h*M,e[i+2]=m*b+g*M+h*x-p*y,e[i+3]=g*b-h*y-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),y=h(u/2),x=p(r/2),M=p(l/2),b=p(u/2);switch(d){case"XYZ":this._x=x*g*y+m*M*b,this._y=m*M*y-x*g*b,this._z=m*g*b+x*M*y,this._w=m*g*y-x*M*b;break;case"YXZ":this._x=x*g*y+m*M*b,this._y=m*M*y-x*g*b,this._z=m*g*b-x*M*y,this._w=m*g*y+x*M*b;break;case"ZXY":this._x=x*g*y-m*M*b,this._y=m*M*y+x*g*b,this._z=m*g*b+x*M*y,this._w=m*g*y-x*M*b;break;case"ZYX":this._x=x*g*y-m*M*b,this._y=m*M*y+x*g*b,this._z=m*g*b-x*M*y,this._w=m*g*y+x*M*b;break;case"YZX":this._x=x*g*y+m*M*b,this._y=m*M*y+x*g*b,this._z=m*g*b-x*M*y,this._w=m*g*y-x*M*b;break;case"XZY":this._x=x*g*y-m*M*b,this._y=m*M*y-x*g*b,this._z=m*g*b+x*M*y,this._w=m*g*y+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],y=i[10],x=r+h+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),y=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,i=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(jg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(jg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-u*l),y=2*(u*r-d*i);return this.x=i+p*m+d*y-h*g,this.y=r+p*g+h*m-u*y,this.z=l+p*y+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new W,jg=new Mr;class Ho{constructor(e=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ql.subVectors(this.max,Lo),rs.subVectors(e.a,Lo),ss.subVectors(e.b,Lo),os.subVectors(e.c,Lo),Da.subVectors(ss,rs),Ua.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-cr.z,cr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,cr.z,0,-cr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-cr.y,cr.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(Da,Ua),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new W,new W,new W,new W,new W,new W,new W,new W],yi=new W,Xl=new Ho,rs=new W,ss=new W,os=new W,Da=new W,Ua=new W,cr=new W,Lo=new W,ql=new W,Yl=new W,ur=new W;function Yf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const nx=new Ho,Do=new W,jf=new W;class bc{constructor(e=new W,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nx.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(jf)),this.expandByPoint(Do.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new W,Zf=new W,jl=new W,Na=new W,Kf=new W,Zl=new W,Qf=new W;class Dh{constructor(e=new W,i=new W(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(jl),h=Na.dot(this.direction),p=-Na.dot(jl),m=Na.lengthSq(),g=Math.abs(1-d*d);let y,x,M,b;if(g>0)if(y=d*p-h,x=d*h-p,b=u*g,y>=0)if(x>=-b)if(x<=b){const C=1/g;y*=C,x*=C,M=y*(y+d*x+2*h)+x*(d*y+x+2*p)+m}else x=u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*p)+m;else x<=-b?(y=Math.max(0,-(-d*u+h)),x=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+x*(x+2*p)+m):x<=b?(y=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(y=Math.max(0,-(d*u+h)),x=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+x*(x+2*p)+m);else x=d>0?-u:u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(jl,x),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let d=this.direction.dot(Qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Na.subVectors(this.origin,e);const p=h*this.direction.dot(Zl.crossVectors(Na,Zl));if(p<0)return null;const m=h*this.direction.dot(Kf.cross(Na));if(m<0||p+m>d)return null;const g=-h*Na.dot(Qf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,l,u,d,h,p,m,g,y,x,M,b,C,v){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,g,y,x,M,b,C,v)}set(e,i,r,l,u,d,h,p,m,g,y,x,M,b,C,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=M,_[7]=b,_[11]=C,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),d=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*g,M=d*y,b=h*g,C=h*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=M+b*m,i[5]=x-C*m,i[9]=-h*p,i[2]=C-x*m,i[6]=b+M*m,i[10]=d*p}else if(e.order==="YXZ"){const x=p*g,M=p*y,b=m*g,C=m*y;i[0]=x+C*h,i[4]=b*h-M,i[8]=d*m,i[1]=d*y,i[5]=d*g,i[9]=-h,i[2]=M*h-b,i[6]=C+x*h,i[10]=d*p}else if(e.order==="ZXY"){const x=p*g,M=p*y,b=m*g,C=m*y;i[0]=x-C*h,i[4]=-d*y,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*g,i[9]=C-x*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const x=d*g,M=d*y,b=h*g,C=h*y;i[0]=p*g,i[4]=b*m-M,i[8]=x*m+C,i[1]=p*y,i[5]=C*m+x,i[9]=M*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*m,b=h*p,C=h*m;i[0]=p*g,i[4]=C-x*y,i[8]=b*y+M,i[1]=y,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*y+b,i[10]=x-C*y}else if(e.order==="XZY"){const x=d*p,M=d*m,b=h*p,C=h*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=x*y+C,i[5]=d*g,i[9]=M*y-b,i[2]=b*y-M,i[6]=h*g,i[10]=C*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,ax)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Oa.crossVectors(r,Jn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Oa.crossVectors(r,Jn)),Oa.normalize(),Kl.crossVectors(Jn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Jn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Jn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],y=r[5],x=r[9],M=r[13],b=r[2],C=r[6],v=r[10],_=r[14],z=r[3],D=r[7],B=r[11],V=r[15],G=l[0],F=l[4],pt=l[8],I=l[12],T=l[1],N=l[5],ht=l[9],Tt=l[13],j=l[2],rt=l[6],H=l[10],st=l[14],et=l[3],ut=l[7],L=l[11],Y=l[15];return u[0]=d*G+h*T+p*j+m*et,u[4]=d*F+h*N+p*rt+m*ut,u[8]=d*pt+h*ht+p*H+m*L,u[12]=d*I+h*Tt+p*st+m*Y,u[1]=g*G+y*T+x*j+M*et,u[5]=g*F+y*N+x*rt+M*ut,u[9]=g*pt+y*ht+x*H+M*L,u[13]=g*I+y*Tt+x*st+M*Y,u[2]=b*G+C*T+v*j+_*et,u[6]=b*F+C*N+v*rt+_*ut,u[10]=b*pt+C*ht+v*H+_*L,u[14]=b*I+C*Tt+v*st+_*Y,u[3]=z*G+D*T+B*j+V*et,u[7]=z*F+D*N+B*rt+V*ut,u[11]=z*pt+D*ht+B*H+V*L,u[15]=z*I+D*Tt+B*st+V*Y,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],y=e[6],x=e[10],M=e[14],b=e[3],C=e[7],v=e[11],_=e[15];return b*(+u*p*y-l*m*y-u*h*x+r*m*x+l*h*M-r*p*M)+C*(+i*p*M-i*m*x+u*d*x-l*d*M+l*m*g-u*p*g)+v*(+i*m*y-i*h*M-u*d*y+r*d*M+u*h*g-r*m*g)+_*(-l*h*g-i*p*y+i*h*x+l*d*y-r*d*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],y=e[9],x=e[10],M=e[11],b=e[12],C=e[13],v=e[14],_=e[15],z=y*v*m-C*x*m+C*p*M-h*v*M-y*p*_+h*x*_,D=b*x*m-g*v*m-b*p*M+d*v*M+g*p*_-d*x*_,B=g*C*m-b*y*m+b*h*M-d*C*M-g*h*_+d*y*_,V=b*y*p-g*C*p-b*h*x+d*C*x+g*h*v-d*y*v,G=i*z+r*D+l*B+u*V;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return e[0]=z*F,e[1]=(C*x*u-y*v*u-C*l*M+r*v*M+y*l*_-r*x*_)*F,e[2]=(h*v*u-C*p*u+C*l*m-r*v*m-h*l*_+r*p*_)*F,e[3]=(y*p*u-h*x*u-y*l*m+r*x*m+h*l*M-r*p*M)*F,e[4]=D*F,e[5]=(g*v*u-b*x*u+b*l*M-i*v*M-g*l*_+i*x*_)*F,e[6]=(b*p*u-d*v*u-b*l*m+i*v*m+d*l*_-i*p*_)*F,e[7]=(d*x*u-g*p*u+g*l*m-i*x*m-d*l*M+i*p*M)*F,e[8]=B*F,e[9]=(b*y*u-g*C*u-b*r*M+i*C*M+g*r*_-i*y*_)*F,e[10]=(d*C*u-b*h*u+b*r*m-i*C*m-d*r*_+i*h*_)*F,e[11]=(g*h*u-d*y*u-g*r*m+i*y*m+d*r*M-i*h*M)*F,e[12]=V*F,e[13]=(g*C*l-b*y*l+b*r*x-i*C*x-g*r*v+i*y*v)*F,e[14]=(b*h*l-d*C*l-b*r*p+i*C*p+d*r*v-i*h*v)*F,e[15]=(d*y*l-g*h*l+g*r*p-i*y*p-d*r*x+i*h*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,y=h+h,x=u*m,M=u*g,b=u*y,C=d*g,v=d*y,_=h*y,z=p*m,D=p*g,B=p*y,V=r.x,G=r.y,F=r.z;return l[0]=(1-(C+_))*V,l[1]=(M+B)*V,l[2]=(b-D)*V,l[3]=0,l[4]=(M-B)*G,l[5]=(1-(x+_))*G,l[6]=(v+z)*G,l[7]=0,l[8]=(b+D)*F,l[9]=(v-z)*F,l[10]=(1-(x+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const d=ls.set(l[4],l[5],l[6]).length(),h=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const m=1/u,g=1/d,y=1/h;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=y,Si.elements[9]*=y,Si.elements[10]*=y,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=aa){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),x=(r+l)/(r-l);let M,b;if(h===aa)M=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===yc)M=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=aa){const p=this.elements,m=1/(i-e),g=1/(r-l),y=1/(d-u),x=(i+e)*m,M=(r+l)*g;let b,C;if(h===aa)b=(d+u)*y,C=-2*y;else if(h===yc)b=u*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new W,Si=new cn,ix=new W(0,0,0),ax=new W(1,1,1),Oa=new W,Kl=new W,Jn=new W,Zg=new cn,Kg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rx=0;const Qg=new W,cs=new Mr,$i=new cn,Ql=new W,Uo=new W,sx=new W,ox=new Mr,Jg=new W(1,0,0),$g=new W(0,1,0),t_=new W(0,0,1),lx={type:"added"},cx={type:"removed"};class wn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new W,i=new Ac,r=new Mr,l=new W(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new Le}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Qg.copy(e).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Uo,Ql,this.up):$i.lookAt(Ql,Uo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),cs.setFromRotationMatrix($i),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new W(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new W,ta=new W,Jf=new W,ea=new W,us=new W,fs=new W,e_=new W,$f=new W,th=new W,eh=new W;class Ui{constructor(e=new W,i=new W,r=new W){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){xi.subVectors(l,i),ta.subVectors(r,i),Jf.subVectors(e,i);const d=xi.dot(xi),h=xi.dot(ta),p=xi.dot(Jf),m=ta.dot(ta),g=ta.dot(Jf),y=d*m-h*h;if(y===0)return u.set(0,0,0),null;const x=1/y,M=(m*p-h*g)*x,b=(d*g-h*p)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ea.x),p.addScaledVector(d,ea.y),p.addScaledVector(h,ea.z),p)}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),ta.subVectors(e,i),xi.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),xi.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);th.subVectors(e,l);const g=us.dot(th),y=fs.dot(th);if(g>=0&&y<=g)return i.copy(l);const x=p*y-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(us,d);eh.subVectors(e,u);const M=us.dot(eh),b=fs.dot(eh);if(b>=0&&M<=b)return i.copy(u);const C=M*m-p*b;if(C<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector(fs,h);const v=g*b-M*y;if(v<=0&&y-g>=0&&M-b>=0)return e_.subVectors(u,l),h=(y-g)/(y-g+(M-b)),i.copy(l).addScaledVector(e_,h);const _=1/(v+C+x);return d=C*_,h=x*_,i.copy(r).addScaledVector(us,d).addScaledVector(fs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Pe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Xe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Xe.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Xe.workingColorSpace){if(e=Lh(e,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=nh(d,u,e+1/3),this.g=nh(d,u,e),this.b=nh(d,u,e-1/3)}return Xe.toWorkingColorSpace(this,l),this}setStyle(e,i=An){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=An){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Xe.fromWorkingColorSpace(Un.copy(this),e),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const y=d-h;switch(m=g<=.5?y/(d+h):y/(2-d-h),d){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=An){Xe.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==An?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Bo(Pa.h,Jl.h,i),l=Bo(Pa.s,Jl.s,i),u=Bo(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Pe;Pe.NAMES=l0;let ux=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Ms,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new W,$l=new _e;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Vg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}}class u0 extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fx=0;const hi=new cn,ih=new wn,hs=new W,$n=new Ho,No=new Ho,xn=new W;class Oi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new pi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];No.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors($n.min,No.min),$n.expandByPoint(xn),xn.addVectors($n.max,No.max),$n.expandByPoint(xn)):($n.expandByPoint(No.min),$n.expandByPoint(No.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)xn.fromBufferAttribute(h,m),p&&(hs.fromBufferAttribute(e,m),xn.add(hs)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let T=0;T<h;T++)m[T]=new W,g[T]=new W;const y=new W,x=new W,M=new W,b=new _e,C=new _e,v=new _e,_=new W,z=new W;function D(T,N,ht){y.fromArray(l,T*3),x.fromArray(l,N*3),M.fromArray(l,ht*3),b.fromArray(d,T*2),C.fromArray(d,N*2),v.fromArray(d,ht*2),x.sub(y),M.sub(y),C.sub(b),v.sub(b);const Tt=1/(C.x*v.y-v.x*C.y);isFinite(Tt)&&(_.copy(x).multiplyScalar(v.y).addScaledVector(M,-C.y).multiplyScalar(Tt),z.copy(M).multiplyScalar(C.x).addScaledVector(x,-v.x).multiplyScalar(Tt),m[T].add(_),m[N].add(_),m[ht].add(_),g[T].add(z),g[N].add(z),g[ht].add(z))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let T=0,N=B.length;T<N;++T){const ht=B[T],Tt=ht.start,j=ht.count;for(let rt=Tt,H=Tt+j;rt<H;rt+=3)D(r[rt+0],r[rt+1],r[rt+2])}const V=new W,G=new W,F=new W,pt=new W;function I(T){F.fromArray(u,T*3),pt.copy(F);const N=m[T];V.copy(N),V.sub(F.multiplyScalar(F.dot(N))).normalize(),G.crossVectors(pt,N);const Tt=G.dot(g[T])<0?-1:1;p[T*4]=V.x,p[T*4+1]=V.y,p[T*4+2]=V.z,p[T*4+3]=Tt}for(let T=0,N=B.length;T<N;++T){const ht=B[T],Tt=ht.start,j=ht.count;for(let rt=Tt,H=Tt+j;rt<H;rt+=3)I(r[rt+0]),I(r[rt+1]),I(r[rt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new W,u=new W,d=new W,h=new W,p=new W,m=new W,g=new W,y=new W;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),C=e.getX(x+1),v=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,v),g.subVectors(d,u),y.subVectors(l,u),g.cross(y),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),h.add(g),p.add(g),m.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),y.subVectors(l,u),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,y=h.normalized,x=new m.constructor(p.length*g);let M=0,b=0;for(let C=0,v=p.length;C<v;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*g;for(let _=0;_<g;_++)x[b++]=m[M++]}return new Ni(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,y=m.length;g<y;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let x=0,M=y.length;x<M;x++)g.push(y[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new cn,fr=new Dh,tc=new bc,i_=new W,ds=new W,ps=new W,ms=new W,ah=new W,ec=new W,nc=new _e,ic=new _e,ac=new _e,a_=new W,r_=new W,s_=new W,rc=new W,sc=new W;class ei extends wn{constructor(e=new Oi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],y=u[p];g!==0&&(ah.fromBufferAttribute(y,e),d?ec.addScaledVector(ah,g):ec.addScaledVector(ah.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(tc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(tc,i_)===null||fr.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(n_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=x.length;b<C;b++){const v=x[b],_=d[v.materialIndex],z=Math.max(v.start,M.start),D=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let B=z,V=D;B<V;B+=3){const G=h.getX(B),F=h.getX(B+1),pt=h.getX(B+2);l=oc(this,_,e,r,m,g,y,G,F,pt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let v=b,_=C;v<_;v+=3){const z=h.getX(v),D=h.getX(v+1),B=h.getX(v+2);l=oc(this,d,e,r,m,g,y,z,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,C=x.length;b<C;b++){const v=x[b],_=d[v.materialIndex],z=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let B=z,V=D;B<V;B+=3){const G=B,F=B+1,pt=B+2;l=oc(this,_,e,r,m,g,y,G,F,pt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let v=b,_=C;v<_;v+=3){const z=v,D=v+1,B=v+2;l=oc(this,d,e,r,m,g,y,z,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function hx(o,e,i,r,l,u,d,h){let p;if(e.side===Xn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===ka,h),p===null)return null;sc.copy(h),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,ds),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=hx(o,e,i,r,ds,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,h),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Ui.getInterpolation(rc,ds,ps,ms,nc,ic,ac,new _e)),u&&(nc.fromBufferAttribute(u,h),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Ui.getInterpolation(rc,ds,ps,ms,nc,ic,ac,new _e),g.uv2=g.uv1),d&&(a_.fromBufferAttribute(d,h),r_.fromBufferAttribute(d,p),s_.fromBufferAttribute(d,m),g.normal=Ui.getInterpolation(rc,ds,ps,ms,a_,r_,s_,new W),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new W,materialIndex:0};Ui.getNormal(ds,ps,ms,y.normal),g.face=y}return g}class Va extends Oi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],y=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pi(m,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(y,2));function b(C,v,_,z,D,B,V,G,F,pt,I){const T=B/F,N=V/pt,ht=B/2,Tt=V/2,j=G/2,rt=F+1,H=pt+1;let st=0,et=0;const ut=new W;for(let L=0;L<H;L++){const Y=L*N-Tt;for(let ft=0;ft<rt;ft++){const At=ft*T-ht;ut[C]=At*z,ut[v]=Y*D,ut[_]=j,m.push(ut.x,ut.y,ut.z),ut[C]=0,ut[v]=0,ut[_]=G>0?1:-1,g.push(ut.x,ut.y,ut.z),y.push(ft/F),y.push(1-L/pt),st+=1}}for(let L=0;L<pt;L++)for(let Y=0;Y<F;Y++){const ft=x+Y+rt*L,At=x+Y+rt*(L+1),k=x+(Y+1)+rt*(L+1),ct=x+(Y+1)+rt*L;p.push(ft,At,ct),p.push(At,k,ct),et+=6}h.addGroup(M,et,I),M+=et,x+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function dx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function h0(o){return o.getRenderTarget()===null?o.outputColorSpace:Xe.workingColorSpace}const px={clone:Rs,merge:In};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class d0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new W,o_=new _e,l_=new _e;class ti extends d0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,o_,l_),i.subVectors(l_,o_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _x extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new ti(gs,_s,e,i);u.layers=this.layers,this.add(u);const d=new ti(gs,_s,e,i);d.layers=this.layers,this.add(d);const h=new ti(gs,_s,e,i);h.layers=this.layers,this.add(h);const p=new ti(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new ti(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class p0 extends qn{constructor(e,i,r,l,u,d,h,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:bs,super(e,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vx extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?An:di),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Va(5,5,5),u=new sa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Ia});u.uniforms.tEquirect.value=i;const d=new ei(l,u),h=i.minFilter;return i.minFilter===_r&&(i.minFilter=Wn),new _x(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const rh=new W,yx=new W,Sx=new Le;class Ba{constructor(e=new W(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rh.subVectors(r,i).cross(yx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Sx.getNormalMatrix(e),l=this.coplanarPoint(rh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bc,lc=new W;class Uh{constructor(e=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,d=new Ba){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],y=l[6],x=l[7],M=l[8],b=l[9],C=l[10],v=l[11],_=l[12],z=l[13],D=l[14],B=l[15];if(r[0].setComponents(p-u,x-m,v-M,B-_).normalize(),r[1].setComponents(p+u,x+m,v+M,B+_).normalize(),r[2].setComponents(p+d,x+g,v+b,B+z).normalize(),r[3].setComponents(p-d,x-g,v-b,B-z).normalize(),r[4].setComponents(p-h,x-y,v-C,B-D).normalize(),i===aa)r[5].setComponents(p+h,x+y,v+C,B+D).normalize();else if(i===yc)r[5].setComponents(h,y,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function xx(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const y=m.array,x=m.usage,M=y.byteLength,b=o.createBuffer();o.bindBuffer(g,b),o.bufferData(g,y,x),m.onUploadCallback();let C;if(y instanceof Float32Array)C=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)C=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)C=o.SHORT;else if(y instanceof Uint32Array)C=o.UNSIGNED_INT;else if(y instanceof Int32Array)C=o.INT;else if(y instanceof Int8Array)C=o.BYTE;else if(y instanceof Uint8Array)C=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)C=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:b,type:C,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,y){const x=g.array,M=g._updateRange,b=g.updateRanges;if(o.bindBuffer(y,m),M.count===-1&&b.length===0&&o.bufferSubData(y,0,x),b.length!==0){for(let C=0,v=b.length;C<v;C++){const _=b[C];i?o.bufferSubData(y,_.start*x.BYTES_PER_ELEMENT,x,_.start,_.count):o.bufferSubData(y,_.start*x.BYTES_PER_ELEMENT,x.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x,M.offset,M.count):o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const x=r.get(m);(!x||x.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,l(m,g));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,g),y.version=m.version}}return{get:d,remove:h,update:p}}class wc extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,y=e/h,x=i/p,M=[],b=[],C=[],v=[];for(let _=0;_<g;_++){const z=_*x-d;for(let D=0;D<m;D++){const B=D*y-u;b.push(B,-z,0),C.push(0,0,1),v.push(D/h),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let z=0;z<h;z++){const D=z+m*_,B=z+m*(_+1),V=z+1+m*(_+1),G=z+1+m*_;M.push(D,B,G),M.push(B,V,G)}this.setIndex(M),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(C,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_M=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,IM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,CE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,be={alphahash_fragment:Mx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:bx,alphatest_fragment:Ax,alphatest_pars_fragment:wx,aomap_fragment:Rx,aomap_pars_fragment:Cx,batching_pars_vertex:Lx,batching_vertex:Dx,begin_vertex:Ux,beginnormal_vertex:Nx,bsdfs:Ox,iridescence_fragment:Px,bumpmap_pars_fragment:zx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:kx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:jx,displacementmap_vertex:Zx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Qx,colorspace_fragment:Jx,colorspace_pars_fragment:$x,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:dM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:xM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:LM,map_particle_fragment:DM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:yE,worldpos_vertex:SE,background_vert:xE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:LE,equirect_vert:DE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},Wt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Li={basic:{uniforms:In([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:In([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:In([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:In([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:In([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:In([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:In([Wt.points,Wt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:In([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:In([Wt.common,Wt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:In([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:In([Wt.sprite,Wt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:In([Wt.common,Wt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:In([Wt.lights,Wt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Li.physical={uniforms:In([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const cc={r:0,b:0,g:0};function eT(o,e,i,r,l,u,d){const h=new Pe(0);let p=u===!0?0:1,m,g,y=null,x=0,M=null;function b(v,_){let z=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:e).get(D)),D===null?C(h,p):D&&D.isColor&&(C(D,1),z=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||z)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Ec)?(g===void 0&&(g=new ei(new Va(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Rs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,G,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Xe.getTransfer(D.colorSpace)!==Qe,(y!==D||x!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=D,x=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ei(new wc(2,2),new sa({name:"BackgroundMaterial",uniforms:Rs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Xe.getTransfer(D.colorSpace)!==Qe,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function C(v,_){v.getRGB(cc,h0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,d)}return{getClearColor:function(){return h},setClearColor:function(v,_=1){h.set(v),p=_,C(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,C(h,p)},render:b}}function nT(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},p=v(null);let m=p,g=!1;function y(j,rt,H,st,et){let ut=!1;if(d){const L=C(st,H,rt);m!==L&&(m=L,M(m.object)),ut=_(j,st,H,et),ut&&z(j,st,H,et)}else{const L=rt.wireframe===!0;(m.geometry!==st.id||m.program!==H.id||m.wireframe!==L)&&(m.geometry=st.id,m.program=H.id,m.wireframe=L,ut=!0)}et!==null&&i.update(et,o.ELEMENT_ARRAY_BUFFER),(ut||g)&&(g=!1,pt(j,rt,H,st),et!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(et).buffer))}function x(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(j){return r.isWebGL2?o.bindVertexArray(j):u.bindVertexArrayOES(j)}function b(j){return r.isWebGL2?o.deleteVertexArray(j):u.deleteVertexArrayOES(j)}function C(j,rt,H){const st=H.wireframe===!0;let et=h[j.id];et===void 0&&(et={},h[j.id]=et);let ut=et[rt.id];ut===void 0&&(ut={},et[rt.id]=ut);let L=ut[st];return L===void 0&&(L=v(x()),ut[st]=L),L}function v(j){const rt=[],H=[],st=[];for(let et=0;et<l;et++)rt[et]=0,H[et]=0,st[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:H,attributeDivisors:st,object:j,attributes:{},index:null}}function _(j,rt,H,st){const et=m.attributes,ut=rt.attributes;let L=0;const Y=H.getAttributes();for(const ft in Y)if(Y[ft].location>=0){const k=et[ft];let ct=ut[ft];if(ct===void 0&&(ft==="instanceMatrix"&&j.instanceMatrix&&(ct=j.instanceMatrix),ft==="instanceColor"&&j.instanceColor&&(ct=j.instanceColor)),k===void 0||k.attribute!==ct||ct&&k.data!==ct.data)return!0;L++}return m.attributesNum!==L||m.index!==st}function z(j,rt,H,st){const et={},ut=rt.attributes;let L=0;const Y=H.getAttributes();for(const ft in Y)if(Y[ft].location>=0){let k=ut[ft];k===void 0&&(ft==="instanceMatrix"&&j.instanceMatrix&&(k=j.instanceMatrix),ft==="instanceColor"&&j.instanceColor&&(k=j.instanceColor));const ct={};ct.attribute=k,k&&k.data&&(ct.data=k.data),et[ft]=ct,L++}m.attributes=et,m.attributesNum=L,m.index=st}function D(){const j=m.newAttributes;for(let rt=0,H=j.length;rt<H;rt++)j[rt]=0}function B(j){V(j,0)}function V(j,rt){const H=m.newAttributes,st=m.enabledAttributes,et=m.attributeDivisors;H[j]=1,st[j]===0&&(o.enableVertexAttribArray(j),st[j]=1),et[j]!==rt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,rt),et[j]=rt)}function G(){const j=m.newAttributes,rt=m.enabledAttributes;for(let H=0,st=rt.length;H<st;H++)rt[H]!==j[H]&&(o.disableVertexAttribArray(H),rt[H]=0)}function F(j,rt,H,st,et,ut,L){L===!0?o.vertexAttribIPointer(j,rt,H,et,ut):o.vertexAttribPointer(j,rt,H,st,et,ut)}function pt(j,rt,H,st){if(r.isWebGL2===!1&&(j.isInstancedMesh||st.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const et=st.attributes,ut=H.getAttributes(),L=rt.defaultAttributeValues;for(const Y in ut){const ft=ut[Y];if(ft.location>=0){let At=et[Y];if(At===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(At=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(At=j.instanceColor)),At!==void 0){const k=At.normalized,ct=At.itemSize,Mt=i.get(At);if(Mt===void 0)continue;const jt=Mt.buffer,Nt=Mt.type,Ot=Mt.bytesPerElement,ae=r.isWebGL2===!0&&(Nt===o.INT||Nt===o.UNSIGNED_INT||At.gpuType===Y_);if(At.isInterleavedBufferAttribute){const oe=At.data,J=oe.stride,Ie=At.offset;if(oe.isInstancedInterleavedBuffer){for(let re=0;re<ft.locationSize;re++)V(ft.location+re,oe.meshPerAttribute);j.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<ft.locationSize;re++)B(ft.location+re);o.bindBuffer(o.ARRAY_BUFFER,jt);for(let re=0;re<ft.locationSize;re++)F(ft.location+re,ct/ft.locationSize,Nt,k,J*Ot,(Ie+ct/ft.locationSize*re)*Ot,ae)}else{if(At.isInstancedBufferAttribute){for(let oe=0;oe<ft.locationSize;oe++)V(ft.location+oe,At.meshPerAttribute);j.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let oe=0;oe<ft.locationSize;oe++)B(ft.location+oe);o.bindBuffer(o.ARRAY_BUFFER,jt);for(let oe=0;oe<ft.locationSize;oe++)F(ft.location+oe,ct/ft.locationSize,Nt,k,ct*Ot,ct/ft.locationSize*oe*Ot,ae)}}else if(L!==void 0){const k=L[Y];if(k!==void 0)switch(k.length){case 2:o.vertexAttrib2fv(ft.location,k);break;case 3:o.vertexAttrib3fv(ft.location,k);break;case 4:o.vertexAttrib4fv(ft.location,k);break;default:o.vertexAttrib1fv(ft.location,k)}}}}G()}function I(){ht();for(const j in h){const rt=h[j];for(const H in rt){const st=rt[H];for(const et in st)b(st[et].object),delete st[et];delete rt[H]}delete h[j]}}function T(j){if(h[j.id]===void 0)return;const rt=h[j.id];for(const H in rt){const st=rt[H];for(const et in st)b(st[et].object),delete st[et];delete rt[H]}delete h[j.id]}function N(j){for(const rt in h){const H=h[rt];if(H[j.id]===void 0)continue;const st=H[j.id];for(const et in st)b(st[et].object),delete st[et];delete H[j.id]}}function ht(){Tt(),g=!0,m!==p&&(m=p,M(m.object))}function Tt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:ht,resetDefaultState:Tt,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:D,enableAttribute:B,disableUnusedAttributes:G}}function iT(o,e,i,r){const l=r.isWebGL2;let u;function d(g){u=g}function h(g,y){o.drawArrays(u,g,y),i.update(y,u,1)}function p(g,y,x){if(x===0)return;let M,b;if(l)M=o,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](u,g,y,x),i.update(y,u,x)}function m(g,y,x){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<x;b++)this.render(g[b],y[b]);else{M.multiDrawArraysWEBGL(u,g,0,y,0,x);let b=0;for(let C=0;C<x;C++)b+=y[C];i.update(b,u,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function aT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),C=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,B=d||e.has("OES_texture_float"),V=D&&B,G=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:b,maxAttributes:C,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:z,vertexTextures:D,floatFragmentTextures:B,floatVertexTextures:V,maxSamples:G}}function rT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ba,h=new Le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=g(y,x,0)},this.setState=function(y,x,M){const b=y.clippingPlanes,C=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||u&&!v)u?g(null):m();else{const z=u?0:r,D=z*4;let B=_.clippingState||null;p.value=B,B=g(b,x,D,M);for(let V=0;V!==D;++V)B[V]=i[V];_.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,M,b){const C=y!==null?y.length:0;let v=null;if(C!==0){if(v=p.value,b!==!0||v===null){const _=M+C*4,z=x.matrixWorldInverse;h.getNormalMatrix(z),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,B=M;D!==C;++D,B+=4)d.copy(y[D]).applyMatrix4(z,h),d.normal.toArray(v,B),v[B+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function sT(o){let e=new WeakMap;function i(d,h){return h===vh?d.mapping=bs:h===yh&&(d.mapping=As),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===vh||h===yh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new vx(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends d0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,c_=[.125,.215,.35,.446,.526,.582],gr=20,sh=new g0,u_=new Pe;let oh=null,lh=0,ch=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,f_=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,pr,vs),new W(0,pr,-vs),new W(vs,0,pr),new W(-vs,0,pr),new W(pr,vs,0),new W(-pr,vs,0)];class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,lh,ch),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===bs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:ra,depthBuffer:!1},l=d_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(u)),this._blurMaterial=lT(u,e,i)}return l}_compileMaterial(e){const i=new ei(this._lodPlanes[0],e);this._renderer.compile(i,sh)}_sceneToCubeUV(e,i,r,l){const h=new ti(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(u_),g.toneMapping=Ha,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),b=new ei(new Va,M);let C=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,C=!0):(M.color.copy(u_),C=!0);for(let _=0;_<6;_++){const z=_%3;z===0?(h.up.set(0,p[_],0),h.lookAt(m[_],0,0)):z===1?(h.up.set(0,0,p[_]),h.lookAt(0,m[_],0)):(h.up.set(0,p[_],0),h.lookAt(0,0,m[_]));const D=this._cubeSize;uc(l,z*D,_>2?D:0,D,D),g.setRenderTarget(l),C&&g.render(b,h),g.render(e,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===bs||e.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ei(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,sh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=f_[(l-1)%f_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new ei(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),C=u/b,v=isFinite(u)?1+Math.floor(g*C):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let z=0;for(let F=0;F<gr;++F){const pt=F/C,I=Math.exp(-pt*pt/2);_.push(I),F===0?z+=I:F<v&&(z+=2*I)}for(let F=0;F<_.length;F++)_[F]=_[F]/z;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-r;const B=this._sizeLods[l],V=3*B*(l>D-Ss?l-D+Ss:0),G=4*(this._cubeSize-B);uc(i,V,G,3*B,2*B),p.setRenderTarget(i),p.render(y,sh)}}function oT(o){const e=[],i=[],r=[];let l=o;const u=o-Ss+1+c_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-Ss?p=c_[d-o+Ss-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,b=6,C=3,v=2,_=1,z=new Float32Array(C*b*M),D=new Float32Array(v*b*M),B=new Float32Array(_*b*M);for(let G=0;G<M;G++){const F=G%3*2/3-1,pt=G>2?0:-1,I=[F,pt,0,F+2/3,pt,0,F+2/3,pt+1,0,F,pt,0,F+2/3,pt+1,0,F,pt+1,0];z.set(I,C*b*G),D.set(x,v*b*G);const T=[G,G,G,G,G,G];B.set(T,_*b*G)}const V=new Oi;V.setAttribute("position",new Ni(z,C)),V.setAttribute("uv",new Ni(D,v)),V.setAttribute("faceIndex",new Ni(B,_)),e.push(V),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function d_(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lT(o,e,i){const r=new Float32Array(gr),l=new W(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function p_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function m_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===vh||p===yh,g=p===bs||p===As;if(m||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let y=e.get(h);return i===null&&(i=new h_(o)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),e.set(h,y),y.texture}else{if(e.has(h))return e.get(h).texture;{const y=h.image;if(m&&y&&y.height>0||g&&y&&l(y)){i===null&&(i=new h_(o));const x=m?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,x),h.addEventListener("dispose",u),x.texture}else return null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function uT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fT(o,e,i,r){const l={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);for(const b in x.morphAttributes){const C=x.morphAttributes[b];for(let v=0,_=C.length;v<_;v++)e.remove(C[v])}x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(y,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(y){const x=y.attributes;for(const b in x)e.update(x[b],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const C=M[b];for(let v=0,_=C.length;v<_;v++)e.update(C[v],o.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,b=y.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let D=0,B=z.length;D<B;D+=3){const V=z[D+0],G=z[D+1],F=z[D+2];x.push(V,G,G,F,F,V)}}else if(b!==void 0){const z=b.array;C=b.version;for(let D=0,B=z.length/3-1;D<B;D+=3){const V=D+0,G=D+1,F=D+2;x.push(V,G,G,F,F,V)}}else return;const v=new(i0(x)?f0:u0)(x,1);v.version=C;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const x=u.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:h,update:p,getWireframeAttribute:g}}function hT(o,e,i,r){const l=r.isWebGL2;let u;function d(M){u=M}let h,p;function m(M){h=M.type,p=M.bytesPerElement}function g(M,b){o.drawElements(u,b,h,M*p),i.update(b,u,1)}function y(M,b,C){if(C===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,b,h,M*p,C),i.update(b,u,C)}function x(M,b,C){if(C===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<C;_++)this.render(M[_]/p,b[_]);else{v.multiDrawElementsWEBGL(u,b,0,h,M,0,C);let _=0;for(let z=0;z<C;z++)_+=b[z];i.update(_,u,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=y,this.renderMultiDraw=x}function dT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pT(o,e){return o[0]-e[0]}function mT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new $e,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,g,y){const x=m.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,C=b!==void 0?b.length:0;let v=u.get(g);if(v===void 0||v.count!==C){let rt=function(){Tt.dispose(),u.delete(g),g.removeEventListener("dispose",rt)};var M=rt;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,V=g.morphAttributes.color!==void 0,G=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],pt=g.morphAttributes.color||[];let I=0;D===!0&&(I=1),B===!0&&(I=2),V===!0&&(I=3);let T=g.attributes.position.count*I,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ht=new Float32Array(T*N*4*C),Tt=new s0(ht,T,N,C);Tt.type=ia,Tt.needsUpdate=!0;const j=I*4;for(let H=0;H<C;H++){const st=G[H],et=F[H],ut=pt[H],L=T*N*4*H;for(let Y=0;Y<st.count;Y++){const ft=Y*j;D===!0&&(d.fromBufferAttribute(st,Y),ht[L+ft+0]=d.x,ht[L+ft+1]=d.y,ht[L+ft+2]=d.z,ht[L+ft+3]=0),B===!0&&(d.fromBufferAttribute(et,Y),ht[L+ft+4]=d.x,ht[L+ft+5]=d.y,ht[L+ft+6]=d.z,ht[L+ft+7]=0),V===!0&&(d.fromBufferAttribute(ut,Y),ht[L+ft+8]=d.x,ht[L+ft+9]=d.y,ht[L+ft+10]=d.z,ht[L+ft+11]=ut.itemSize===4?d.w:1)}}v={count:C,texture:Tt,size:new _e(T,N)},u.set(g,v),g.addEventListener("dispose",rt)}let _=0;for(let D=0;D<x.length;D++)_+=x[D];const z=g.morphTargetsRelative?1:1-_;y.getUniforms().setValue(o,"morphTargetBaseInfluence",z),y.getUniforms().setValue(o,"morphTargetInfluences",x),y.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const b=x===void 0?0:x.length;let C=r[g.id];if(C===void 0||C.length!==b){C=[];for(let B=0;B<b;B++)C[B]=[B,0];r[g.id]=C}for(let B=0;B<b;B++){const V=C[B];V[0]=B,V[1]=x[B]}C.sort(mT);for(let B=0;B<8;B++)B<b&&C[B][1]?(h[B][0]=C[B][0],h[B][1]=C[B][1]):(h[B][0]=Number.MAX_SAFE_INTEGER,h[B][1]=0);h.sort(pT);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let z=0;for(let B=0;B<8;B++){const V=h[B],G=V[0],F=V[1];G!==Number.MAX_SAFE_INTEGER&&F?(v&&g.getAttribute("morphTarget"+B)!==v[G]&&g.setAttribute("morphTarget"+B,v[G]),_&&g.getAttribute("morphNormal"+B)!==_[G]&&g.setAttribute("morphNormal"+B,_[G]),l[B]=F,z+=F):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const D=g.morphTargetsRelative?1:1-z;y.getUniforms().setValue(o,"morphTargetBaseInfluence",D),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _T(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return y}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class _0 extends qn{constructor(e,i,r,l,u,d,h,p,m,g){if(g=g!==void 0?g:yr,g!==yr&&g!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===yr&&(r=Fa),r===void 0&&g===ws&&(r=vr),super(null,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Hn,this.minFilter=p!==void 0?p:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new qn,y0=new _0(1,1);y0.compareFunction=n0;const S0=new s0,x0=new ex,M0=new p0,g_=[],__=[],v_=new Float32Array(16),y_=new Float32Array(9),S_=new Float32Array(4);function Ds(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=__[e];i===void 0&&(i=new Int32Array(e),__[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function MT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;S_.set(r),o.uniformMatrix2fv(this.addr,!1,S_),_n(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),_n(i,r)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;v_.set(r),o.uniformMatrix4fv(this.addr,!1,v_),_n(i,r)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?y0:v0;i.setTexture2D(e||u,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||x0,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||S0,l)}function BT(o){switch(o){case 5126:return vT;case 35664:return yT;case 35665:return ST;case 35666:return xT;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return LT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}function FT(o,e){o.uniform1fv(this.addr,e)}function IT(o,e){const i=Ds(e,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,e){const i=Ds(e,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,e){const i=Ds(e,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,e){const i=Ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kT(o,e){const i=Ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WT(o,e){const i=Ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XT(o,e){o.uniform1iv(this.addr,e)}function qT(o,e){o.uniform2iv(this.addr,e)}function YT(o,e){o.uniform3iv(this.addr,e)}function jT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function QT(o,e){o.uniform3uiv(this.addr,e)}function JT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||v0,u[d])}function tb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||x0,u[d])}function eb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||M0,u[d])}function nb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||S0,u[d])}function ib(o){switch(o){case 5126:return FT;case 35664:return IT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function x_(o,e){o.seq.push(e),o.map[e.id]=e}function ob(o,e,i){const r=o.name,l=r.length;for(uh.lastIndex=0;;){const u=uh.exec(r),d=uh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){x_(i,m===void 0?new ab(h,o,e):new rb(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new sb(h),x_(i,y)),i=y}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);ob(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function M_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let cb=0;function ub(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function fb(o){const e=Xe.getPrimaries(Xe.workingColorSpace),i=Xe.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case ra:case Tc:return[r,"LinearTransferOETF"];case An:case Ch:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function E_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ub(o.getShaderSource(e),d)}else return l}function hb(o,e){const i=fb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function db(o,e){let i;switch(e){case hS:i="Linear";break;case dS:i="Reinhard";break;case pS:i="OptimizedCineon";break;case mS:i="ACESFilmic";break;case _S:i="AgX";break;case gS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function gb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function xs(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(o){return o.replace(vb,Sb)}const yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sb(o,e){let i=be[e];if(i===void 0){const r=yb.get(e);if(r!==void 0)i=be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Th(i)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(o){return o.replace(xb,Mb)}function Mb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	`;return o.isWebGL2&&(e+=`precision ${o.precision} sampler3D;
		precision ${o.precision} sampler2DArray;
		precision ${o.precision} sampler2DShadow;
		precision ${o.precision} samplerCubeShadow;
		precision ${o.precision} sampler2DArrayShadow;
		precision ${o.precision} isampler2D;
		precision ${o.precision} isampler3D;
		precision ${o.precision} isamplerCube;
		precision ${o.precision} isampler2DArray;
		precision ${o.precision} usampler2D;
		precision ${o.precision} usampler3D;
		precision ${o.precision} usamplerCube;
		precision ${o.precision} usampler2DArray;
		`),o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bs:case As:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case X_:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function wb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Rb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=Eb(i),m=Tb(i),g=bb(i),y=Ab(i),x=wb(i),M=i.isWebGL2?"":pb(i),b=mb(i),C=gb(u),v=l.createProgram();let _,z,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(xs).join(`
`),_.length>0&&(_+=`
`),z=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(xs).join(`
`),z.length>0&&(z+=`
`)):(_=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),z=[M,w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?be.tonemapping_pars_fragment:"",i.toneMapping!==Ha?db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,hb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xs).join(`
`)),d=Th(d),d=T_(d,i),d=b_(d,i),h=Th(h),h=T_(h,i),h=b_(h,i),d=A_(d),h=A_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,z=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+z);const B=D+_+d,V=D+z+h,G=M_(l,l.VERTEX_SHADER,B),F=M_(l,l.FRAGMENT_SHADER,V);l.attachShader(v,G),l.attachShader(v,F),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function pt(ht){if(o.debug.checkShaderErrors){const Tt=l.getProgramInfoLog(v).trim(),j=l.getShaderInfoLog(G).trim(),rt=l.getShaderInfoLog(F).trim();let H=!0,st=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,G,F);else{const et=E_(l,G,"vertex"),ut=E_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+ht.name+`
Material Type: `+ht.type+`

Program Info Log: `+Tt+`
`+et+`
`+ut)}else Tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Tt):(j===""||rt==="")&&(st=!1);st&&(ht.diagnostics={runnable:H,programLog:Tt,vertexShader:{log:j,prefix:_},fragmentShader:{log:rt,prefix:z}})}l.deleteShader(G),l.deleteShader(F),I=new pc(l,v),T=_b(l,v)}let I;this.getUniforms=function(){return I===void 0&&pt(this),I};let T;this.getAttributes=function(){return T===void 0&&pt(this),T};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(v,lb)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=G,this.fragmentShader=F,this}let Cb=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Db(e),i.set(e,r)),r}}class Db{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Ub(o,e,i,r,l,u,d){const h=new o0,p=new Lb,m=new Set,g=[],y=l.isWebGL2,x=l.logarithmicDepthBuffer,M=l.vertexTextures;let b=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return m.add(T),T===0?"uv":`uv${T}`}function _(T,N,ht,Tt,j){const rt=Tt.fog,H=j.geometry,st=T.isMeshStandardMaterial?Tt.environment:null,et=(T.isMeshStandardMaterial?i:e).get(T.envMap||st),ut=et&&et.mapping===Ec?et.image.height:null,L=C[T.type];T.precision!==null&&(b=l.getMaxPrecision(T.precision),b!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",b,"instead."));const Y=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=Y!==void 0?Y.length:0;let At=0;H.morphAttributes.position!==void 0&&(At=1),H.morphAttributes.normal!==void 0&&(At=2),H.morphAttributes.color!==void 0&&(At=3);let k,ct,Mt,jt;if(L){const Se=Li[L];k=Se.vertexShader,ct=Se.fragmentShader}else k=T.vertexShader,ct=T.fragmentShader,p.update(T),Mt=p.getVertexShaderID(T),jt=p.getFragmentShaderID(T);const Nt=o.getRenderTarget(),Ot=j.isInstancedMesh===!0,ae=j.isBatchedMesh===!0,oe=!!T.map,J=!!T.matcap,Ie=!!et,re=!!T.aoMap,fe=!!T.lightMap,Jt=!!T.bumpMap,Pt=!!T.normalMap,vt=!!T.displacementMap,A=!!T.emissiveMap,E=!!T.metalnessMap,X=!!T.roughnessMap,lt=T.anisotropy>0,at=T.clearcoat>0,_t=T.iridescence>0,Ft=T.sheen>0,mt=T.transmission>0,Dt=lt&&!!T.anisotropyMap,Kt=at&&!!T.clearcoatMap,Lt=at&&!!T.clearcoatNormalMap,yt=at&&!!T.clearcoatRoughnessMap,Yt=_t&&!!T.iridescenceMap,te=_t&&!!T.iridescenceThicknessMap,Ht=Ft&&!!T.sheenColorMap,qt=Ft&&!!T.sheenRoughnessMap,zt=!!T.specularMap,ue=!!T.specularColorMap,O=!!T.specularIntensityMap,Et=mt&&!!T.transmissionMap,Bt=mt&&!!T.thicknessMap,Zt=!!T.gradientMap,U=!!T.alphaMap,wt=T.alphaTest>0,xt=!!T.alphaHash,Gt=!!T.extensions;let ee=Ha;T.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(ee=o.toneMapping);const Ue={isWebGL2:y,shaderID:L,shaderType:T.type,shaderName:T.name,vertexShader:k,fragmentShader:ct,defines:T.defines,customVertexShaderID:Mt,customFragmentShaderID:jt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:b,batching:ae,instancing:Ot,instancingColor:Ot&&j.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Nt===null?o.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ra,alphaToCoverage:!!T.alphaToCoverage,map:oe,matcap:J,envMap:Ie,envMapMode:Ie&&et.mapping,envMapCubeUVHeight:ut,aoMap:re,lightMap:fe,bumpMap:Jt,normalMap:Pt,displacementMap:M&&vt,emissiveMap:A,normalMapObjectSpace:Pt&&T.normalMapType===RS,normalMapTangentSpace:Pt&&T.normalMapType===e0,metalnessMap:E,roughnessMap:X,anisotropy:lt,anisotropyMap:Dt,clearcoat:at,clearcoatMap:Kt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:yt,iridescence:_t,iridescenceMap:Yt,iridescenceThicknessMap:te,sheen:Ft,sheenColorMap:Ht,sheenRoughnessMap:qt,specularMap:zt,specularColorMap:ue,specularIntensityMap:O,transmission:mt,transmissionMap:Et,thicknessMap:Bt,gradientMap:Zt,opaque:T.transparent===!1&&T.blending===Ms&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:wt,alphaHash:xt,combine:T.combine,mapUv:oe&&v(T.map.channel),aoMapUv:re&&v(T.aoMap.channel),lightMapUv:fe&&v(T.lightMap.channel),bumpMapUv:Jt&&v(T.bumpMap.channel),normalMapUv:Pt&&v(T.normalMap.channel),displacementMapUv:vt&&v(T.displacementMap.channel),emissiveMapUv:A&&v(T.emissiveMap.channel),metalnessMapUv:E&&v(T.metalnessMap.channel),roughnessMapUv:X&&v(T.roughnessMap.channel),anisotropyMapUv:Dt&&v(T.anisotropyMap.channel),clearcoatMapUv:Kt&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:qt&&v(T.sheenRoughnessMap.channel),specularMapUv:zt&&v(T.specularMap.channel),specularColorMapUv:ue&&v(T.specularColorMap.channel),specularIntensityMapUv:O&&v(T.specularIntensityMap.channel),transmissionMapUv:Et&&v(T.transmissionMap.channel),thicknessMapUv:Bt&&v(T.thicknessMap.channel),alphaMapUv:U&&v(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||lt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(oe||U),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:At,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,useLegacyLights:o._useLegacyLights,decodeVideoTexture:oe&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===Qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Di,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Gt&&T.extensions.derivatives===!0,extensionFragDepth:Gt&&T.extensions.fragDepth===!0,extensionDrawBuffers:Gt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Gt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Gt&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ue.vertexUv1s=m.has(1),Ue.vertexUv2s=m.has(2),Ue.vertexUv3s=m.has(3),m.clear(),Ue}function z(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)N.push(ht),N.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(D(N,T),B(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function D(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function B(T,N){h.disableAll(),N.isWebGL2&&h.enable(0),N.supportsVertexTextures&&h.enable(1),N.instancing&&h.enable(2),N.instancingColor&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),T.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.skinning&&h.enable(4),N.morphTargets&&h.enable(5),N.morphNormals&&h.enable(6),N.morphColors&&h.enable(7),N.premultipliedAlpha&&h.enable(8),N.shadowMapEnabled&&h.enable(9),N.useLegacyLights&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.alphaToCoverage&&h.enable(20),T.push(h.mask)}function V(T){const N=C[T.type];let ht;if(N){const Tt=Li[N];ht=px.clone(Tt.uniforms)}else ht=T.uniforms;return ht}function G(T,N){let ht;for(let Tt=0,j=g.length;Tt<j;Tt++){const rt=g[Tt];if(rt.cacheKey===N){ht=rt,++ht.usedTimes;break}}return ht===void 0&&(ht=new Rb(o,N,T,u),g.push(ht)),ht}function F(T){if(--T.usedTimes===0){const N=g.indexOf(T);g[N]=g[g.length-1],g.pop(),T.destroy()}}function pt(T){p.remove(T)}function I(){p.dispose()}return{getParameters:_,getProgramCacheKey:z,getUniforms:V,acquireProgram:G,releaseProgram:F,releaseShaderCache:pt,programs:g,dispose:I}}function Nb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function R_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function C_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(y,x,M,b,C,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:b,renderOrder:y.renderOrder,z:C,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=y.renderOrder,_.z=C,_.group=v),e++,_}function h(y,x,M,b,C,v){const _=d(y,x,M,b,C,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(y,x,M,b,C,v){const _=d(y,x,M,b,C,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,x){i.length>1&&i.sort(y||Ob),r.length>1&&r.sort(x||R_),l.length>1&&l.sort(x||R_)}function g(){for(let y=e,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function Pb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new C_,o.set(r,[d])):l>=u.length?(d=new C_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new W,color:new Pe};break;case"SpotLight":i={position:new W,direction:new W,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=i,i}}}function Bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Fb=0;function Ib(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hb(o,e){const i=new zb,r=Bb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new W);const u=new W,d=new cn,h=new cn;function p(g,y){let x=0,M=0,b=0;for(let ht=0;ht<9;ht++)l.probe[ht].set(0,0,0);let C=0,v=0,_=0,z=0,D=0,B=0,V=0,G=0,F=0,pt=0,I=0;g.sort(Ib);const T=y===!0?Math.PI:1;for(let ht=0,Tt=g.length;ht<Tt;ht++){const j=g[ht],rt=j.color,H=j.intensity,st=j.distance,et=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=rt.r*H*T,M+=rt.g*H*T,b+=rt.b*H*T;else if(j.isLightProbe){for(let ut=0;ut<9;ut++)l.probe[ut].addScaledVector(j.sh.coefficients[ut],H);I++}else if(j.isDirectionalLight){const ut=i.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity*T),j.castShadow){const L=j.shadow,Y=r.get(j);Y.shadowBias=L.bias,Y.shadowNormalBias=L.normalBias,Y.shadowRadius=L.radius,Y.shadowMapSize=L.mapSize,l.directionalShadow[C]=Y,l.directionalShadowMap[C]=et,l.directionalShadowMatrix[C]=j.shadow.matrix,B++}l.directional[C]=ut,C++}else if(j.isSpotLight){const ut=i.get(j);ut.position.setFromMatrixPosition(j.matrixWorld),ut.color.copy(rt).multiplyScalar(H*T),ut.distance=st,ut.coneCos=Math.cos(j.angle),ut.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ut.decay=j.decay,l.spot[_]=ut;const L=j.shadow;if(j.map&&(l.spotLightMap[F]=j.map,F++,L.updateMatrices(j),j.castShadow&&pt++),l.spotLightMatrix[_]=L.matrix,j.castShadow){const Y=r.get(j);Y.shadowBias=L.bias,Y.shadowNormalBias=L.normalBias,Y.shadowRadius=L.radius,Y.shadowMapSize=L.mapSize,l.spotShadow[_]=Y,l.spotShadowMap[_]=et,G++}_++}else if(j.isRectAreaLight){const ut=i.get(j);ut.color.copy(rt).multiplyScalar(H),ut.halfWidth.set(j.width*.5,0,0),ut.halfHeight.set(0,j.height*.5,0),l.rectArea[z]=ut,z++}else if(j.isPointLight){const ut=i.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity*T),ut.distance=j.distance,ut.decay=j.decay,j.castShadow){const L=j.shadow,Y=r.get(j);Y.shadowBias=L.bias,Y.shadowNormalBias=L.normalBias,Y.shadowRadius=L.radius,Y.shadowMapSize=L.mapSize,Y.shadowCameraNear=L.camera.near,Y.shadowCameraFar=L.camera.far,l.pointShadow[v]=Y,l.pointShadowMap[v]=et,l.pointShadowMatrix[v]=j.shadow.matrix,V++}l.point[v]=ut,v++}else if(j.isHemisphereLight){const ut=i.get(j);ut.skyColor.copy(j.color).multiplyScalar(H*T),ut.groundColor.copy(j.groundColor).multiplyScalar(H*T),l.hemi[D]=ut,D++}}z>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=M,l.ambient[2]=b;const N=l.hash;(N.directionalLength!==C||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==z||N.hemiLength!==D||N.numDirectionalShadows!==B||N.numPointShadows!==V||N.numSpotShadows!==G||N.numSpotMaps!==F||N.numLightProbes!==I)&&(l.directional.length=C,l.spot.length=_,l.rectArea.length=z,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=V,l.pointShadowMap.length=V,l.spotShadow.length=G,l.spotShadowMap.length=G,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=V,l.spotLightMatrix.length=G+F-pt,l.spotLightMap.length=F,l.numSpotLightShadowsWithMaps=pt,l.numLightProbes=I,N.directionalLength=C,N.pointLength=v,N.spotLength=_,N.rectAreaLength=z,N.hemiLength=D,N.numDirectionalShadows=B,N.numPointShadows=V,N.numSpotShadows=G,N.numSpotMaps=F,N.numLightProbes=I,l.version=Fb++)}function m(g,y){let x=0,M=0,b=0,C=0,v=0;const _=y.matrixWorldInverse;for(let z=0,D=g.length;z<D;z++){const B=g[z];if(B.isDirectionalLight){const V=l.directional[x];V.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),V.direction.sub(u),V.direction.transformDirection(_),x++}else if(B.isSpotLight){const V=l.spot[b];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),V.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),V.direction.sub(u),V.direction.transformDirection(_),b++}else if(B.isRectAreaLight){const V=l.rectArea[C];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),h.identity(),d.copy(B.matrixWorld),d.premultiply(_),h.extractRotation(d),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),V.halfWidth.applyMatrix4(h),V.halfHeight.applyMatrix4(h),C++}else if(B.isPointLight){const V=l.point[M];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),M++}else if(B.isHemisphereLight){const V=l.hemi[v];V.direction.setFromMatrixPosition(B.matrixWorld),V.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function L_(o,e){const i=new Hb(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(y){r.push(y)}function h(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function Gb(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let p;return h===void 0?(p=new L_(o,e),i.set(u,[p])):d>=h.length?(p=new L_(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class Vb extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qb(o,e,i){let r=new Uh;const l=new _e,u=new _e,d=new $e,h=new Vb({depthPacking:wS}),p=new kb,m={},g=i.maxTextureSize,y={[ka]:Xn,[Xn]:ka,[Di]:Di},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Oi;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ei(b,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let _=this.type;this.render=function(G,F,pt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||G.length===0)return;const I=o.getRenderTarget(),T=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),ht=o.state;ht.setBlending(Ia),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const Tt=_!==na&&this.type===na,j=_===na&&this.type!==na;for(let rt=0,H=G.length;rt<H;rt++){const st=G[rt],et=st.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;l.copy(et.mapSize);const ut=et.getFrameExtents();if(l.multiply(ut),u.copy(et.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ut.x),l.x=u.x*ut.x,et.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ut.y),l.y=u.y*ut.y,et.mapSize.y=u.y)),et.map===null||Tt===!0||j===!0){const Y=this.type!==na?{minFilter:Hn,magFilter:Hn}:{};et.map!==null&&et.map.dispose(),et.map=new xr(l.x,l.y,Y),et.map.texture.name=st.name+".shadowMap",et.camera.updateProjectionMatrix()}o.setRenderTarget(et.map),o.clear();const L=et.getViewportCount();for(let Y=0;Y<L;Y++){const ft=et.getViewport(Y);d.set(u.x*ft.x,u.y*ft.y,u.x*ft.z,u.y*ft.w),ht.viewport(d),et.updateMatrices(st,Y),r=et.getFrustum(),B(F,pt,et.camera,st,this.type)}et.isPointLightShadow!==!0&&this.type===na&&z(et,pt),et.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(I,T,N)};function z(G,F){const pt=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new xr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(F,null,pt,x,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(F,null,pt,M,C,null)}function D(G,F,pt,I){let T=null;const N=pt.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(N!==void 0)T=N;else if(T=pt.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ht=T.uuid,Tt=F.uuid;let j=m[ht];j===void 0&&(j={},m[ht]=j);let rt=j[Tt];rt===void 0&&(rt=T.clone(),j[Tt]=rt,F.addEventListener("dispose",V)),T=rt}if(T.visible=F.visible,T.wireframe=F.wireframe,I===na?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:y[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,pt.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ht=o.properties.get(T);ht.light=pt}return T}function B(G,F,pt,I,T){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&T===na)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,G.matrixWorld);const Tt=e.update(G),j=G.material;if(Array.isArray(j)){const rt=Tt.groups;for(let H=0,st=rt.length;H<st;H++){const et=rt[H],ut=j[et.materialIndex];if(ut&&ut.visible){const L=D(G,ut,I,T);G.onBeforeShadow(o,G,F,pt,Tt,L,et),o.renderBufferDirect(pt,null,Tt,L,G,et),G.onAfterShadow(o,G,F,pt,Tt,L,et)}}}else if(j.visible){const rt=D(G,j,I,T);G.onBeforeShadow(o,G,F,pt,Tt,rt,null),o.renderBufferDirect(pt,null,Tt,rt,G,null),G.onAfterShadow(o,G,F,pt,Tt,rt,null)}}const ht=G.children;for(let Tt=0,j=ht.length;Tt<j;Tt++)B(ht[Tt],F,pt,I,T)}function V(G){G.target.removeEventListener("dispose",V);for(const pt in m){const I=m[pt],T=G.target.uuid;T in I&&(I[T].dispose(),delete I[T])}}}function Yb(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const wt=new $e;let xt=null;const Gt=new $e(0,0,0,0);return{setMask:function(ee){xt!==ee&&!U&&(o.colorMask(ee,ee,ee,ee),xt=ee)},setLocked:function(ee){U=ee},setClear:function(ee,Ue,Se,ze,Re){Re===!0&&(ee*=ze,Ue*=ze,Se*=ze),wt.set(ee,Ue,Se,ze),Gt.equals(wt)===!1&&(o.clearColor(ee,Ue,Se,ze),Gt.copy(wt))},reset:function(){U=!1,xt=null,Gt.set(-1,0,0,0)}}}function u(){let U=!1,wt=null,xt=null,Gt=null;return{setTest:function(ee){ee?Ot(o.DEPTH_TEST):ae(o.DEPTH_TEST)},setMask:function(ee){wt!==ee&&!U&&(o.depthMask(ee),wt=ee)},setFunc:function(ee){if(xt!==ee){switch(ee){case iS:o.depthFunc(o.NEVER);break;case aS:o.depthFunc(o.ALWAYS);break;case rS:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sS:o.depthFunc(o.EQUAL);break;case oS:o.depthFunc(o.GEQUAL);break;case lS:o.depthFunc(o.GREATER);break;case cS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=ee}},setLocked:function(ee){U=ee},setClear:function(ee){Gt!==ee&&(o.clearDepth(ee),Gt=ee)},reset:function(){U=!1,wt=null,xt=null,Gt=null}}}function d(){let U=!1,wt=null,xt=null,Gt=null,ee=null,Ue=null,Se=null,ze=null,Re=null;return{setTest:function(xe){U||(xe?Ot(o.STENCIL_TEST):ae(o.STENCIL_TEST))},setMask:function(xe){wt!==xe&&!U&&(o.stencilMask(xe),wt=xe)},setFunc:function(xe,qe,tn){(xt!==xe||Gt!==qe||ee!==tn)&&(o.stencilFunc(xe,qe,tn),xt=xe,Gt=qe,ee=tn)},setOp:function(xe,qe,tn){(Ue!==xe||Se!==qe||ze!==tn)&&(o.stencilOp(xe,qe,tn),Ue=xe,Se=qe,ze=tn)},setLocked:function(xe){U=xe},setClear:function(xe){Re!==xe&&(o.clearStencil(xe),Re=xe)},reset:function(){U=!1,wt=null,xt=null,Gt=null,ee=null,Ue=null,Se=null,ze=null,Re=null}}}const h=new l,p=new u,m=new d,g=new WeakMap,y=new WeakMap;let x={},M={},b=new WeakMap,C=[],v=null,_=!1,z=null,D=null,B=null,V=null,G=null,F=null,pt=null,I=new Pe(0,0,0),T=0,N=!1,ht=null,Tt=null,j=null,rt=null,H=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,ut=0;const L=o.getParameter(o.VERSION);L.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(L)[1]),et=ut>=1):L.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),et=ut>=2);let Y=null,ft={};const At=o.getParameter(o.SCISSOR_BOX),k=o.getParameter(o.VIEWPORT),ct=new $e().fromArray(At),Mt=new $e().fromArray(k);function jt(U,wt,xt,Gt){const ee=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(U,Ue),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Se=0;Se<xt;Se++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(wt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,ee):o.texImage2D(wt+Se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ee);return Ue}const Nt={};Nt[o.TEXTURE_2D]=jt(o.TEXTURE_2D,o.TEXTURE_2D,1),Nt[o.TEXTURE_CUBE_MAP]=jt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Nt[o.TEXTURE_2D_ARRAY]=jt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Nt[o.TEXTURE_3D]=jt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ot(o.DEPTH_TEST),p.setFunc(mc),vt(!1),A(ug),Ot(o.CULL_FACE),Jt(Ia);function Ot(U){x[U]!==!0&&(o.enable(U),x[U]=!0)}function ae(U){x[U]!==!1&&(o.disable(U),x[U]=!1)}function oe(U,wt){return M[U]!==wt?(o.bindFramebuffer(U,wt),M[U]=wt,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=wt),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=wt)),!0):!1}function J(U,wt){let xt=C,Gt=!1;if(U)if(xt=b.get(wt),xt===void 0&&(xt=[],b.set(wt,xt)),U.isWebGLMultipleRenderTargets){const ee=U.texture;if(xt.length!==ee.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,Se=ee.length;Ue<Se;Ue++)xt[Ue]=o.COLOR_ATTACHMENT0+Ue;xt.length=ee.length,Gt=!0}}else xt[0]!==o.COLOR_ATTACHMENT0&&(xt[0]=o.COLOR_ATTACHMENT0,Gt=!0);else xt[0]!==o.BACK&&(xt[0]=o.BACK,Gt=!0);Gt&&(i.isWebGL2?o.drawBuffers(xt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Ie(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const re={[mr]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};if(r)re[dg]=o.MIN,re[pg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(re[dg]=U.MIN_EXT,re[pg]=U.MAX_EXT)}const fe={[Wy]:o.ZERO,[Xy]:o.ONE,[qy]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[Jy]:o.SRC_ALPHA_SATURATE,[Ky]:o.DST_COLOR,[jy]:o.DST_ALPHA,[Yy]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[Qy]:o.ONE_MINUS_DST_COLOR,[Zy]:o.ONE_MINUS_DST_ALPHA,[$y]:o.CONSTANT_COLOR,[tS]:o.ONE_MINUS_CONSTANT_COLOR,[eS]:o.CONSTANT_ALPHA,[nS]:o.ONE_MINUS_CONSTANT_ALPHA};function Jt(U,wt,xt,Gt,ee,Ue,Se,ze,Re,xe){if(U===Ia){_===!0&&(ae(o.BLEND),_=!1);return}if(_===!1&&(Ot(o.BLEND),_=!0),U!==Gy){if(U!==z||xe!==N){if((D!==mr||G!==mr)&&(o.blendEquation(o.FUNC_ADD),D=mr,G=mr),xe)switch(U){case Ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.ONE,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}B=null,V=null,F=null,pt=null,I.set(0,0,0),T=0,z=U,N=xe}return}ee=ee||wt,Ue=Ue||xt,Se=Se||Gt,(wt!==D||ee!==G)&&(o.blendEquationSeparate(re[wt],re[ee]),D=wt,G=ee),(xt!==B||Gt!==V||Ue!==F||Se!==pt)&&(o.blendFuncSeparate(fe[xt],fe[Gt],fe[Ue],fe[Se]),B=xt,V=Gt,F=Ue,pt=Se),(ze.equals(I)===!1||Re!==T)&&(o.blendColor(ze.r,ze.g,ze.b,Re),I.copy(ze),T=Re),z=U,N=!1}function Pt(U,wt){U.side===Di?ae(o.CULL_FACE):Ot(o.CULL_FACE);let xt=U.side===Xn;wt&&(xt=!xt),vt(xt),U.blending===Ms&&U.transparent===!1?Jt(Ia):Jt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),h.setMask(U.colorWrite);const Gt=U.stencilWrite;m.setTest(Gt),Gt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ot(o.SAMPLE_ALPHA_TO_COVERAGE):ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function vt(U){ht!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),ht=U)}function A(U){U!==Iy?(Ot(o.CULL_FACE),U!==Tt&&(U===ug?o.cullFace(o.BACK):U===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ae(o.CULL_FACE),Tt=U}function E(U){U!==j&&(et&&o.lineWidth(U),j=U)}function X(U,wt,xt){U?(Ot(o.POLYGON_OFFSET_FILL),(rt!==wt||H!==xt)&&(o.polygonOffset(wt,xt),rt=wt,H=xt)):ae(o.POLYGON_OFFSET_FILL)}function lt(U){U?Ot(o.SCISSOR_TEST):ae(o.SCISSOR_TEST)}function at(U){U===void 0&&(U=o.TEXTURE0+st-1),Y!==U&&(o.activeTexture(U),Y=U)}function _t(U,wt,xt){xt===void 0&&(Y===null?xt=o.TEXTURE0+st-1:xt=Y);let Gt=ft[xt];Gt===void 0&&(Gt={type:void 0,texture:void 0},ft[xt]=Gt),(Gt.type!==U||Gt.texture!==wt)&&(Y!==xt&&(o.activeTexture(xt),Y=xt),o.bindTexture(U,wt||Nt[U]),Gt.type=U,Gt.texture=wt)}function Ft(){const U=ft[Y];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function mt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){ct.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function O(U){Mt.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function Et(U,wt){let xt=y.get(wt);xt===void 0&&(xt=new WeakMap,y.set(wt,xt));let Gt=xt.get(U);Gt===void 0&&(Gt=o.getUniformBlockIndex(wt,U.name),xt.set(U,Gt))}function Bt(U,wt){const Gt=y.get(wt).get(U);g.get(wt)!==Gt&&(o.uniformBlockBinding(wt,Gt,U.__bindingPointIndex),g.set(wt,Gt))}function Zt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Y=null,ft={},M={},b=new WeakMap,C=[],v=null,_=!1,z=null,D=null,B=null,V=null,G=null,F=null,pt=null,I=new Pe(0,0,0),T=0,N=!1,ht=null,Tt=null,j=null,rt=null,H=null,ct.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:Ot,disable:ae,bindFramebuffer:oe,drawBuffers:J,useProgram:Ie,setBlending:Jt,setMaterial:Pt,setFlipSided:vt,setCullFace:A,setLineWidth:E,setPolygonOffset:X,setScissorTest:lt,activeTexture:at,bindTexture:_t,unbindTexture:Ft,compressedTexImage2D:mt,compressedTexImage3D:Dt,texImage2D:qt,texImage3D:zt,updateUBOMapping:Et,uniformBlockBinding:Bt,texStorage2D:te,texStorage3D:Ht,texSubImage2D:Kt,texSubImage3D:Lt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Yt,scissor:ue,viewport:O,reset:Zt}}function jb(o,e,i,r,l,u,d){const h=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,E){return M?new OffscreenCanvas(A,E):xc("canvas")}function C(A,E,X,lt){let at=1;if((A.width>lt||A.height>lt)&&(at=lt/Math.max(A.width,A.height)),at<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const _t=E?Sc:Math.floor,Ft=_t(at*A.width),mt=_t(at*A.height);y===void 0&&(y=b(Ft,mt));const Dt=X?b(Ft,mt):y;return Dt.width=Ft,Dt.height=mt,Dt.getContext("2d").drawImage(A,0,0,Ft,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ft+"x"+mt+")."),Dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Eh(A.width)&&Eh(A.height)}function _(A){return h?!1:A.wrapS!==Mi||A.wrapT!==Mi||A.minFilter!==Hn&&A.minFilter!==Wn}function z(A,E){return A.generateMipmaps&&E&&A.minFilter!==Hn&&A.minFilter!==Wn}function D(A){o.generateMipmap(A)}function B(A,E,X,lt,at=!1){if(h===!1)return E;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t=E;if(E===o.RED&&(X===o.FLOAT&&(_t=o.R32F),X===o.HALF_FLOAT&&(_t=o.R16F),X===o.UNSIGNED_BYTE&&(_t=o.R8)),E===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(_t=o.R8UI),X===o.UNSIGNED_SHORT&&(_t=o.R16UI),X===o.UNSIGNED_INT&&(_t=o.R32UI),X===o.BYTE&&(_t=o.R8I),X===o.SHORT&&(_t=o.R16I),X===o.INT&&(_t=o.R32I)),E===o.RG&&(X===o.FLOAT&&(_t=o.RG32F),X===o.HALF_FLOAT&&(_t=o.RG16F),X===o.UNSIGNED_BYTE&&(_t=o.RG8)),E===o.RGBA){const Ft=at?gc:Xe.getTransfer(lt);X===o.FLOAT&&(_t=o.RGBA32F),X===o.HALF_FLOAT&&(_t=o.RGBA16F),X===o.UNSIGNED_BYTE&&(_t=Ft===Qe?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function V(A,E,X){return z(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Hn&&A.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function G(A){return A===Hn||A===mg||A===Co?o.NEAREST:o.LINEAR}function F(A){const E=A.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&g.delete(E)}function pt(A){const E=A.target;E.removeEventListener("dispose",pt),N(E)}function I(A){const E=r.get(A);if(E.__webglInit===void 0)return;const X=A.source,lt=x.get(X);if(lt){const at=lt[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&T(A),Object.keys(lt).length===0&&x.delete(X)}r.remove(A)}function T(A){const E=r.get(A);o.deleteTexture(E.__webglTexture);const X=A.source,lt=x.get(X);delete lt[E.__cacheKey],d.memory.textures--}function N(A){const E=A.texture,X=r.get(A),lt=r.get(E);if(lt.__webglTexture!==void 0&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(X.__webglFramebuffer[at]))for(let _t=0;_t<X.__webglFramebuffer[at].length;_t++)o.deleteFramebuffer(X.__webglFramebuffer[at][_t]);else o.deleteFramebuffer(X.__webglFramebuffer[at]);X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer[at])}else{if(Array.isArray(X.__webglFramebuffer))for(let at=0;at<X.__webglFramebuffer.length;at++)o.deleteFramebuffer(X.__webglFramebuffer[at]);else o.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&o.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let at=0;at<X.__webglColorRenderbuffer.length;at++)X.__webglColorRenderbuffer[at]&&o.deleteRenderbuffer(X.__webglColorRenderbuffer[at]);X.__webglDepthRenderbuffer&&o.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let at=0,_t=E.length;at<_t;at++){const Ft=r.get(E[at]);Ft.__webglTexture&&(o.deleteTexture(Ft.__webglTexture),d.memory.textures--),r.remove(E[at])}r.remove(E),r.remove(A)}let ht=0;function Tt(){ht=0}function j(){const A=ht;return A>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l.maxTextures),ht+=1,A}function rt(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function H(A,E){const X=r.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const lt=A.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(X,A,E);return}}i.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+E)}function st(A,E){const X=r.get(A);if(A.version>0&&X.__version!==A.version){ct(X,A,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+E)}function et(A,E){const X=r.get(A);if(A.version>0&&X.__version!==A.version){ct(X,A,E);return}i.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+E)}function ut(A,E){const X=r.get(A);if(A.version>0&&X.__version!==A.version){Mt(X,A,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+E)}const L={[Sh]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[xh]:o.MIRRORED_REPEAT},Y={[Hn]:o.NEAREST,[mg]:o.NEAREST_MIPMAP_NEAREST,[Co]:o.NEAREST_MIPMAP_LINEAR,[Wn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},ft={[CS]:o.NEVER,[PS]:o.ALWAYS,[LS]:o.LESS,[n0]:o.LEQUAL,[DS]:o.EQUAL,[OS]:o.GEQUAL,[US]:o.GREATER,[NS]:o.NOTEQUAL};function At(A,E,X){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===Bf||E.magFilter===Co||E.magFilter===_r||E.minFilter===Wn||E.minFilter===Bf||E.minFilter===Co||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(o.texParameteri(A,o.TEXTURE_WRAP_S,L[E.wrapS]),o.texParameteri(A,o.TEXTURE_WRAP_T,L[E.wrapT]),(A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY)&&o.texParameteri(A,o.TEXTURE_WRAP_R,L[E.wrapR]),o.texParameteri(A,o.TEXTURE_MAG_FILTER,Y[E.magFilter]),o.texParameteri(A,o.TEXTURE_MIN_FILTER,Y[E.minFilter])):(o.texParameteri(A,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(A,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY)&&o.texParameteri(A,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==Mi||E.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,o.TEXTURE_MAG_FILTER,G(E.magFilter)),o.texParameteri(A,o.TEXTURE_MIN_FILTER,G(E.minFilter)),E.minFilter!==Hn&&E.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(A,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(A,o.TEXTURE_COMPARE_FUNC,ft[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const lt=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Hn||E.minFilter!==Co&&E.minFilter!==_r||E.type===ia&&e.has("OES_texture_float_linear")===!1||h===!1&&E.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(o.texParameterf(A,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function k(A,E){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",F));const lt=E.source;let at=x.get(lt);at===void 0&&(at={},x.set(lt,at));const _t=rt(E);if(_t!==A.__cacheKey){at[_t]===void 0&&(at[_t]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,X=!0),at[_t].usedTimes++;const Ft=at[A.__cacheKey];Ft!==void 0&&(at[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&T(E)),A.__cacheKey=_t,A.__webglTexture=at[_t].texture}return X}function ct(A,E,X){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const at=k(A,E),_t=E.source;i.bindTexture(lt,A.__webglTexture,o.TEXTURE0+X);const Ft=r.get(_t);if(_t.version!==Ft.__version||at===!0){i.activeTexture(o.TEXTURE0+X);const mt=Xe.getPrimaries(Xe.workingColorSpace),Dt=E.colorSpace===di?null:Xe.getPrimaries(E.colorSpace),Kt=E.colorSpace===di||mt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Lt=_(E)&&v(E.image)===!1;let yt=C(E.image,Lt,!1,l.maxTextureSize);yt=vt(E,yt);const Yt=v(yt)||h,te=u.convert(E.format,E.colorSpace);let Ht=u.convert(E.type),qt=B(E.internalFormat,te,Ht,E.colorSpace,E.isVideoTexture);At(lt,E,Yt);let zt;const ue=E.mipmaps,O=h&&E.isVideoTexture!==!0&&qt!==$_,Et=Ft.__version===void 0||at===!0,Bt=_t.dataReady,Zt=V(E,yt,Yt);if(E.isDepthTexture)qt=o.DEPTH_COMPONENT,h?E.type===ia?qt=o.DEPTH_COMPONENT32F:E.type===Fa?qt=o.DEPTH_COMPONENT24:E.type===vr?qt=o.DEPTH24_STENCIL8:qt=o.DEPTH_COMPONENT16:E.type===ia&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===yr&&qt===o.DEPTH_COMPONENT&&E.type!==Rh&&E.type!==Fa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fa,Ht=u.convert(E.type)),E.format===ws&&qt===o.DEPTH_COMPONENT&&(qt=o.DEPTH_STENCIL,E.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vr,Ht=u.convert(E.type))),Et&&(O?i.texStorage2D(o.TEXTURE_2D,1,qt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,qt,yt.width,yt.height,0,te,Ht,null));else if(E.isDataTexture)if(ue.length>0&&Yt){O&&Et&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,ue[0].width,ue[0].height);for(let U=0,wt=ue.length;U<wt;U++)zt=ue[U],O?Bt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,zt.width,zt.height,te,Ht,zt.data):i.texImage2D(o.TEXTURE_2D,U,qt,zt.width,zt.height,0,te,Ht,zt.data);E.generateMipmaps=!1}else O?(Et&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,yt.width,yt.height),Bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,te,Ht,yt.data)):i.texImage2D(o.TEXTURE_2D,0,qt,yt.width,yt.height,0,te,Ht,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&Et&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Zt,qt,ue[0].width,ue[0].height,yt.depth);for(let U=0,wt=ue.length;U<wt;U++)zt=ue[U],E.format!==Ei?te!==null?O?Bt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,zt.width,zt.height,yt.depth,te,zt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,qt,zt.width,zt.height,yt.depth,0,zt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,zt.width,zt.height,yt.depth,te,Ht,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,qt,zt.width,zt.height,yt.depth,0,te,Ht,zt.data)}else{O&&Et&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,ue[0].width,ue[0].height);for(let U=0,wt=ue.length;U<wt;U++)zt=ue[U],E.format!==Ei?te!==null?O?Bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,zt.width,zt.height,te,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,qt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Bt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,zt.width,zt.height,te,Ht,zt.data):i.texImage2D(o.TEXTURE_2D,U,qt,zt.width,zt.height,0,te,Ht,zt.data)}else if(E.isDataArrayTexture)O?(Et&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Zt,qt,yt.width,yt.height,yt.depth),Bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,te,Ht,yt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,yt.width,yt.height,yt.depth,0,te,Ht,yt.data);else if(E.isData3DTexture)O?(Et&&i.texStorage3D(o.TEXTURE_3D,Zt,qt,yt.width,yt.height,yt.depth),Bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,te,Ht,yt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,yt.width,yt.height,yt.depth,0,te,Ht,yt.data);else if(E.isFramebufferTexture){if(Et)if(O)i.texStorage2D(o.TEXTURE_2D,Zt,qt,yt.width,yt.height);else{let U=yt.width,wt=yt.height;for(let xt=0;xt<Zt;xt++)i.texImage2D(o.TEXTURE_2D,xt,qt,U,wt,0,te,Ht,null),U>>=1,wt>>=1}}else if(ue.length>0&&Yt){O&&Et&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,ue[0].width,ue[0].height);for(let U=0,wt=ue.length;U<wt;U++)zt=ue[U],O?Bt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,te,Ht,zt):i.texImage2D(o.TEXTURE_2D,U,qt,te,Ht,zt);E.generateMipmaps=!1}else O?(Et&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,yt.width,yt.height),Bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,te,Ht,yt)):i.texImage2D(o.TEXTURE_2D,0,qt,te,Ht,yt);z(E,Yt)&&D(lt),Ft.__version=_t.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Mt(A,E,X){if(E.image.length!==6)return;const lt=k(A,E),at=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,A.__webglTexture,o.TEXTURE0+X);const _t=r.get(at);if(at.version!==_t.__version||lt===!0){i.activeTexture(o.TEXTURE0+X);const Ft=Xe.getPrimaries(Xe.workingColorSpace),mt=E.colorSpace===di?null:Xe.getPrimaries(E.colorSpace),Dt=E.colorSpace===di||Ft===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Kt=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let U=0;U<6;U++)!Kt&&!Lt?yt[U]=C(E.image[U],!1,!0,l.maxCubemapSize):yt[U]=Lt?E.image[U].image:E.image[U],yt[U]=vt(E,yt[U]);const Yt=yt[0],te=v(Yt)||h,Ht=u.convert(E.format,E.colorSpace),qt=u.convert(E.type),zt=B(E.internalFormat,Ht,qt,E.colorSpace),ue=h&&E.isVideoTexture!==!0,O=_t.__version===void 0||lt===!0,Et=at.dataReady;let Bt=V(E,Yt,te);At(o.TEXTURE_CUBE_MAP,E,te);let Zt;if(Kt){ue&&O&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,zt,Yt.width,Yt.height);for(let U=0;U<6;U++){Zt=yt[U].mipmaps;for(let wt=0;wt<Zt.length;wt++){const xt=Zt[wt];E.format!==Ei?Ht!==null?ue?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt,0,0,xt.width,xt.height,Ht,xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt,zt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt,0,0,xt.width,xt.height,Ht,qt,xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt,zt,xt.width,xt.height,0,Ht,qt,xt.data)}}}else{Zt=E.mipmaps,ue&&O&&(Zt.length>0&&Bt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,zt,yt[0].width,yt[0].height));for(let U=0;U<6;U++)if(Lt){ue?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,yt[U].width,yt[U].height,Ht,qt,yt[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,zt,yt[U].width,yt[U].height,0,Ht,qt,yt[U].data);for(let wt=0;wt<Zt.length;wt++){const Gt=Zt[wt].image[U].image;ue?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt+1,0,0,Gt.width,Gt.height,Ht,qt,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt+1,zt,Gt.width,Gt.height,0,Ht,qt,Gt.data)}}else{ue?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ht,qt,yt[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,zt,Ht,qt,yt[U]);for(let wt=0;wt<Zt.length;wt++){const xt=Zt[wt];ue?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt+1,0,0,Ht,qt,xt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt+1,zt,Ht,qt,xt.image[U])}}}z(E,te)&&D(o.TEXTURE_CUBE_MAP),_t.__version=at.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function jt(A,E,X,lt,at,_t){const Ft=u.convert(X.format,X.colorSpace),mt=u.convert(X.type),Dt=B(X.internalFormat,Ft,mt,X.colorSpace);if(!r.get(E).__hasExternalTextures){const Lt=Math.max(1,E.width>>_t),yt=Math.max(1,E.height>>_t);at===o.TEXTURE_3D||at===o.TEXTURE_2D_ARRAY?i.texImage3D(at,_t,Dt,Lt,yt,E.depth,0,Ft,mt,null):i.texImage2D(at,_t,Dt,Lt,yt,0,Ft,mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,A),Jt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,at,r.get(X).__webglTexture,0,fe(E)):(at===o.TEXTURE_2D||at>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,at,r.get(X).__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(A,E,X){if(o.bindRenderbuffer(o.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let lt=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(X||Jt(E)){const at=E.depthTexture;at&&at.isDepthTexture&&(at.type===ia?lt=o.DEPTH_COMPONENT32F:at.type===Fa&&(lt=o.DEPTH_COMPONENT24));const _t=fe(E);Jt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_t,lt,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,_t,lt,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const lt=fe(E);X&&Jt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,o.DEPTH24_STENCIL8,E.width,E.height):Jt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,A)}else{const lt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let at=0;at<lt.length;at++){const _t=lt[at],Ft=u.convert(_t.format,_t.colorSpace),mt=u.convert(_t.type),Dt=B(_t.internalFormat,Ft,mt,_t.colorSpace),Kt=fe(E);X&&Jt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Dt,E.width,E.height):Jt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const lt=r.get(E.depthTexture).__webglTexture,at=fe(E);if(E.depthTexture.format===yr)Jt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,lt,0,at):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,lt,0);else if(E.depthTexture.format===ws)Jt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,lt,0,at):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function ae(A){const E=r.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ot(E.__webglFramebuffer,A)}else if(X){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]=o.createRenderbuffer(),Nt(E.__webglDepthbuffer[lt],A,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Nt(E.__webglDepthbuffer,A,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(A,E,X){const lt=r.get(A);E!==void 0&&jt(lt.__webglFramebuffer,A,A.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&ae(A)}function J(A){const E=A.texture,X=r.get(A),lt=r.get(E);A.addEventListener("dispose",pt),A.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,d.memory.textures++);const at=A.isWebGLCubeRenderTarget===!0,_t=A.isWebGLMultipleRenderTargets===!0,Ft=v(A)||h;if(at){X.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(h&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[mt]=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)X.__webglFramebuffer[mt][Dt]=o.createFramebuffer()}else X.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(h&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)X.__webglFramebuffer[mt]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(_t)if(l.drawBuffers){const mt=A.texture;for(let Dt=0,Kt=mt.length;Dt<Kt;Dt++){const Lt=r.get(mt[Dt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&A.samples>0&&Jt(A)===!1){const mt=_t?E:[E];X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Dt=0;Dt<mt.length;Dt++){const Kt=mt[Dt];X.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[Dt]);const Lt=u.convert(Kt.format,Kt.colorSpace),yt=u.convert(Kt.type),Yt=B(Kt.internalFormat,Lt,yt,Kt.colorSpace,A.isXRRenderTarget===!0),te=fe(A);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Yt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,X.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(X.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(at){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),At(o.TEXTURE_CUBE_MAP,E,Ft);for(let mt=0;mt<6;mt++)if(h&&E.mipmaps&&E.mipmaps.length>0)for(let Dt=0;Dt<E.mipmaps.length;Dt++)jt(X.__webglFramebuffer[mt][Dt],A,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt);else jt(X.__webglFramebuffer[mt],A,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);z(E,Ft)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(_t){const mt=A.texture;for(let Dt=0,Kt=mt.length;Dt<Kt;Dt++){const Lt=mt[Dt],yt=r.get(Lt);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),At(o.TEXTURE_2D,Lt,Ft),jt(X.__webglFramebuffer,A,Lt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),z(Lt,Ft)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let mt=o.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(h?mt=A.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(mt,lt.__webglTexture),At(mt,E,Ft),h&&E.mipmaps&&E.mipmaps.length>0)for(let Dt=0;Dt<E.mipmaps.length;Dt++)jt(X.__webglFramebuffer[Dt],A,E,o.COLOR_ATTACHMENT0,mt,Dt);else jt(X.__webglFramebuffer,A,E,o.COLOR_ATTACHMENT0,mt,0);z(E,Ft)&&D(mt),i.unbindTexture()}A.depthBuffer&&ae(A)}function Ie(A){const E=v(A)||h,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let lt=0,at=X.length;lt<at;lt++){const _t=X[lt];if(z(_t,E)){const Ft=A.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,mt=r.get(_t).__webglTexture;i.bindTexture(Ft,mt),D(Ft),i.unbindTexture()}}}function re(A){if(h&&A.samples>0&&Jt(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,lt=A.height;let at=o.COLOR_BUFFER_BIT;const _t=[],Ft=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=r.get(A),Dt=A.isWebGLMultipleRenderTargets===!0;if(Dt)for(let Kt=0;Kt<E.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Kt=0;Kt<E.length;Kt++){_t.push(o.COLOR_ATTACHMENT0+Kt),A.depthBuffer&&_t.push(Ft);const Lt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Lt===!1&&(A.depthBuffer&&(at|=o.DEPTH_BUFFER_BIT),A.stencilBuffer&&(at|=o.STENCIL_BUFFER_BIT)),Dt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,mt.__webglColorRenderbuffer[Kt]),Lt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ft]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ft])),Dt){const yt=r.get(E[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,X,lt,0,0,X,lt,at,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_t)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Kt=0;Kt<E.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,mt.__webglColorRenderbuffer[Kt]);const Lt=r.get(E[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Lt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function fe(A){return Math.min(l.maxSamples,A.samples)}function Jt(A){const E=r.get(A);return h&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(A){const E=d.render.frame;g.get(A)!==E&&(g.set(A,E),A.update())}function vt(A,E){const X=A.colorSpace,lt=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Mh||X!==ra&&X!==di&&(Xe.getTransfer(X)===Qe?h===!1?e.has("EXT_sRGB")===!0&&lt===Ei?(A.format=Mh,A.minFilter=Wn,A.generateMipmaps=!1):E=a0.sRGBToLinear(E):(lt!==Ei||at!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=j,this.resetTextureUnits=Tt,this.setTexture2D=H,this.setTexture2DArray=st,this.setTexture3D=et,this.setTextureCube=ut,this.rebindTextures=oe,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Jt}function Zb(o,e,i){const r=i.isWebGL2;function l(u,d=di){let h;const p=Xe.getTransfer(d);if(u===Ga)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vS)return o.BYTE;if(u===yS)return o.SHORT;if(u===Rh)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Fa)return o.UNSIGNED_INT;if(u===ia)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===SS)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===xS)return o.LUMINANCE;if(u===MS)return o.LUMINANCE_ALPHA;if(u===yr)return o.DEPTH_COMPONENT;if(u===ws)return o.DEPTH_STENCIL;if(u===Mh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===ES)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===TS)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Qe)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Ff)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Ff)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===gg||u===_g||u===vg||u===yg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===gg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===_g)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===vg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===yg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Sg||u===xg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Sg)return p===Qe?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===xg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Mg||u===Eg||u===Tg||u===bg||u===Ag||u===wg||u===Rg||u===Cg||u===Lg||u===Dg||u===Ug||u===Ng||u===Og||u===Pg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Mg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Eg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Tg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===bg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Ag)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===wg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Rg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Cg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Lg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Dg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ug)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Ng)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Og)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Pg)return p===Qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===zg||u===Bg)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Vf)return p===Qe?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===zg)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Bg)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===bS||u===Fg||u===Ig||u===Hg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Vf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===Fg)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Ig)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Hg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Kb extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const v=i.getJointPose(C,r),_=this._getHandJoint(m,C);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),M=.02,b=.005;m.inputState.pinching&&x>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new qn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new sa({extensions:{fragDepth:!0},vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new ei(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,y=null,x=null,M=null,b=null;const C=new tA,v=i.getContextAttributes();let _=null,z=null;const D=[],B=[],V=new _e;let G=null;const F=new ti;F.layers.enable(1),F.viewport=new $e;const pt=new ti;pt.layers.enable(2),pt.viewport=new $e;const I=[F,pt],T=new Kb;T.layers.enable(1),T.layers.enable(2);let N=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ct=D[k];return ct===void 0&&(ct=new fh,D[k]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(k){let ct=D[k];return ct===void 0&&(ct=new fh,D[k]=ct),ct.getGripSpace()},this.getHand=function(k){let ct=D[k];return ct===void 0&&(ct=new fh,D[k]=ct),ct.getHandSpace()};function Tt(k){const ct=B.indexOf(k.inputSource);if(ct===-1)return;const Mt=D[ct];Mt!==void 0&&(Mt.update(k.inputSource,k.frame,m||d),Mt.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){l.removeEventListener("select",Tt),l.removeEventListener("selectstart",Tt),l.removeEventListener("selectend",Tt),l.removeEventListener("squeeze",Tt),l.removeEventListener("squeezestart",Tt),l.removeEventListener("squeezeend",Tt),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",rt);for(let k=0;k<D.length;k++){const ct=B[k];ct!==null&&(B[k]=null,D[k].disconnect(ct))}N=null,ht=null,C.reset(),e.setRenderTarget(_),M=null,x=null,y=null,l=null,z=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",Tt),l.addEventListener("selectstart",Tt),l.addEventListener("selectend",Tt),l.addEventListener("squeeze",Tt),l.addEventListener("squeezestart",Tt),l.addEventListener("squeezeend",Tt),l.addEventListener("end",j),l.addEventListener("inputsourceschange",rt),v.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(V),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ct={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new xr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Ga,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ct=null,Mt=null,jt=null;v.depth&&(jt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=v.stencil?ws:yr,Mt=v.stencil?vr:Fa);const Nt={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(Nt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new xr(x.textureWidth,x.textureHeight,{format:Ei,type:Ga,depthTexture:new _0(x.textureWidth,x.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ot=e.properties.get(z);Ot.__ignoreDepthValues=x.ignoreDepthValues}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function rt(k){for(let ct=0;ct<k.removed.length;ct++){const Mt=k.removed[ct],jt=B.indexOf(Mt);jt>=0&&(B[jt]=null,D[jt].disconnect(Mt))}for(let ct=0;ct<k.added.length;ct++){const Mt=k.added[ct];let jt=B.indexOf(Mt);if(jt===-1){for(let Ot=0;Ot<D.length;Ot++)if(Ot>=B.length){B.push(Mt),jt=Ot;break}else if(B[Ot]===null){B[Ot]=Mt,jt=Ot;break}if(jt===-1)break}const Nt=D[jt];Nt&&Nt.connect(Mt)}}const H=new W,st=new W;function et(k,ct,Mt){H.setFromMatrixPosition(ct.matrixWorld),st.setFromMatrixPosition(Mt.matrixWorld);const jt=H.distanceTo(st),Nt=ct.projectionMatrix.elements,Ot=Mt.projectionMatrix.elements,ae=Nt[14]/(Nt[10]-1),oe=Nt[14]/(Nt[10]+1),J=(Nt[9]+1)/Nt[5],Ie=(Nt[9]-1)/Nt[5],re=(Nt[8]-1)/Nt[0],fe=(Ot[8]+1)/Ot[0],Jt=ae*re,Pt=ae*fe,vt=jt/(-re+fe),A=vt*-re;ct.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(A),k.translateZ(vt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const E=ae+vt,X=oe+vt,lt=Jt-A,at=Pt+(jt-A),_t=J*oe/X*E,Ft=Ie*oe/X*E;k.projectionMatrix.makePerspective(lt,at,_t,Ft,E,X),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function ut(k,ct){ct===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ct.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;C.texture!==null&&(k.near=C.depthNear,k.far=C.depthFar),T.near=pt.near=F.near=k.near,T.far=pt.far=F.far=k.far,(N!==T.near||ht!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,ht=T.far,F.near=N,F.far=ht,pt.near=N,pt.far=ht,F.updateProjectionMatrix(),pt.updateProjectionMatrix(),k.updateProjectionMatrix());const ct=k.parent,Mt=T.cameras;ut(T,ct);for(let jt=0;jt<Mt.length;jt++)ut(Mt[jt],ct);Mt.length===2?et(T,F,pt):T.projectionMatrix.copy(F.projectionMatrix),L(k,T,ct)};function L(k,ct,Mt){Mt===null?k.matrix.copy(ct.matrixWorld):(k.matrix.copy(Mt.matrixWorld),k.matrix.invert(),k.matrix.multiply(ct.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ct.projectionMatrix),k.projectionMatrixInverse.copy(ct.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Io*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(k){p=k,x!==null&&(x.fixedFoveation=k),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=k)},this.hasDepthSensing=function(){return C.texture!==null};let Y=null;function ft(k,ct){if(g=ct.getViewerPose(m||d),b=ct,g!==null){const Mt=g.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let jt=!1;Mt.length!==T.cameras.length&&(T.cameras.length=0,jt=!0);for(let Ot=0;Ot<Mt.length;Ot++){const ae=Mt[Ot];let oe=null;if(M!==null)oe=M.getViewport(ae);else{const Ie=y.getViewSubImage(x,ae);oe=Ie.viewport,Ot===0&&(e.setRenderTargetTextures(z,Ie.colorTexture,x.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(z))}let J=I[Ot];J===void 0&&(J=new ti,J.layers.enable(Ot),J.viewport=new $e,I[Ot]=J),J.matrix.fromArray(ae.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ae.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(oe.x,oe.y,oe.width,oe.height),Ot===0&&(T.matrix.copy(J.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),jt===!0&&T.cameras.push(J)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ot=y.getDepthInformation(Mt[0]);Ot&&Ot.isValid&&Ot.texture&&C.init(e,Ot,l.renderState)}}for(let Mt=0;Mt<D.length;Mt++){const jt=B[Mt],Nt=D[Mt];jt!==null&&Nt!==void 0&&Nt.update(jt,ct,m||d)}C.render(e,T),Y&&Y(k,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),b=null}const At=new m0;At.setAnimationLoop(ft),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,h0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,z,D,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),x(v,_),_.isMeshPhysicalMaterial&&M(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),b(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),C(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&h(v,_)):_.isPointsMaterial?p(v,_,z,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Xn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Xn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const z=e.get(_).envMap;if(z&&(v.envMap.value=z,v.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function h(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,z,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*z,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,z){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=z.texture,v.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,_){_.matcap&&(v.matcap.value=_.matcap)}function C(v,_){const z=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(z.matrixWorld),v.nearDistance.value=z.shadow.camera.near,v.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(z,D){const B=D.program;r.uniformBlockBinding(z,B)}function m(z,D){let B=l[z.id];B===void 0&&(b(z),B=g(z),l[z.id]=B,z.addEventListener("dispose",v));const V=D.program;r.updateUBOMapping(z,V);const G=e.render.frame;u[z.id]!==G&&(x(z),u[z.id]=G)}function g(z){const D=y();z.__bindingPointIndex=D;const B=o.createBuffer(),V=z.__size,G=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,V,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,B),B}function y(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const D=l[z.id],B=z.uniforms,V=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let G=0,F=B.length;G<F;G++){const pt=Array.isArray(B[G])?B[G]:[B[G]];for(let I=0,T=pt.length;I<T;I++){const N=pt[I];if(M(N,G,I,V)===!0){const ht=N.__offset,Tt=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let rt=0;rt<Tt.length;rt++){const H=Tt[rt],st=C(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,ht+j,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,j),j+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ht,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,D,B,V){const G=z.value,F=D+"_"+B;if(V[F]===void 0)return typeof G=="number"||typeof G=="boolean"?V[F]=G:V[F]=G.clone(),!0;{const pt=V[F];if(typeof G=="number"||typeof G=="boolean"){if(pt!==G)return V[F]=G,!0}else if(pt.equals(G)===!1)return pt.copy(G),!0}return!1}function b(z){const D=z.uniforms;let B=0;const V=16;for(let F=0,pt=D.length;F<pt;F++){const I=Array.isArray(D[F])?D[F]:[D[F]];for(let T=0,N=I.length;T<N;T++){const ht=I[T],Tt=Array.isArray(ht.value)?ht.value:[ht.value];for(let j=0,rt=Tt.length;j<rt;j++){const H=Tt[j],st=C(H),et=B%V;et!==0&&V-et<st.boundary&&(B+=V-et),ht.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=B,B+=st.storage}}}const G=B%V;return G>0&&(B+=V-G),z.__size=B,z.__cache={},this}function C(z){const D={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(D.boundary=4,D.storage=4):z.isVector2?(D.boundary=8,D.storage=8):z.isVector3||z.isColor?(D.boundary=16,D.storage=12):z.isVector4?(D.boundary=16,D.storage=16):z.isMatrix3?(D.boundary=48,D.storage=48):z.isMatrix4?(D.boundary=64,D.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),D}function v(z){const D=z.target;D.removeEventListener("dispose",v);const B=d.indexOf(D.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=d;const M=new Uint32Array(4),b=new Int32Array(4);let C=null,v=null;const _=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let B=!1,V=0,G=0,F=null,pt=-1,I=null;const T=new $e,N=new $e;let ht=null;const Tt=new Pe(0);let j=0,rt=i.width,H=i.height,st=1,et=null,ut=null;const L=new $e(0,0,rt,H),Y=new $e(0,0,rt,H);let ft=!1;const At=new Uh;let k=!1,ct=!1,Mt=null;const jt=new cn,Nt=new _e,Ot=new W,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return F===null?st:1}let J=r;function Ie(w,K){for(let $=0;$<w.length;$++){const it=w[$],tt=i.getContext(it,K);if(tt!==null)return tt}return null}try{const w={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",wt,!1),J===null){const K=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&K.shift(),J=Ie(K,w),J===null)throw Ie(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,fe,Jt,Pt,vt,A,E,X,lt,at,_t,Ft,mt,Dt,Kt,Lt,yt,Yt,te,Ht,qt,zt,ue,O;function Et(){re=new uT(J),fe=new aT(J,re,e),re.init(fe),zt=new Zb(J,re,fe),Jt=new Yb(J,re,fe),Pt=new dT(J),vt=new Nb,A=new jb(J,re,Jt,vt,fe,zt,Pt),E=new sT(D),X=new cT(D),lt=new xx(J,fe),ue=new nT(J,re,lt,fe),at=new fT(J,lt,Pt,ue),_t=new _T(J,at,lt,Pt),te=new gT(J,fe,A),Lt=new rT(vt),Ft=new Ub(D,E,X,re,fe,ue,Lt),mt=new nA(D,vt),Dt=new Pb,Kt=new Gb(re,fe),Yt=new eT(D,E,X,Jt,_t,x,p),yt=new qb(D,_t,fe),O=new iA(J,Pt,fe,Jt),Ht=new iT(J,re,Pt,fe),qt=new hT(J,re,Pt,fe),Pt.programs=Ft.programs,D.capabilities=fe,D.extensions=re,D.properties=vt,D.renderLists=Dt,D.shadowMap=yt,D.state=Jt,D.info=Pt}Et();const Bt=new eA(D,J);this.xr=Bt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(rt,H,!1))},this.getSize=function(w){return w.set(rt,H)},this.setSize=function(w,K,$=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=w,H=K,i.width=Math.floor(w*st),i.height=Math.floor(K*st),$===!0&&(i.style.width=w+"px",i.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(rt*st,H*st).floor()},this.setDrawingBufferSize=function(w,K,$){rt=w,H=K,st=$,i.width=Math.floor(w*$),i.height=Math.floor(K*$),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(L)},this.setViewport=function(w,K,$,it){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,K,$,it),Jt.viewport(T.copy(L).multiplyScalar(st).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,K,$,it){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,K,$,it),Jt.scissor(N.copy(Y).multiplyScalar(st).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){Jt.setScissorTest(ft=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(w=!0,K=!0,$=!0){let it=0;if(w){let tt=!1;if(F!==null){const It=F.texture.format;tt=It===J_||It===Q_||It===K_}if(tt){const It=F.texture.type,$t=It===Ga||It===Fa||It===Rh||It===vr||It===j_||It===Z_,ie=Yt.getClearColor(),Qt=Yt.getClearAlpha(),ve=ie.r,de=ie.g,pe=ie.b;$t?(M[0]=ve,M[1]=de,M[2]=pe,M[3]=Qt,J.clearBufferuiv(J.COLOR,0,M)):(b[0]=ve,b[1]=de,b[2]=pe,b[3]=Qt,J.clearBufferiv(J.COLOR,0,b))}else it|=J.COLOR_BUFFER_BIT}K&&(it|=J.DEPTH_BUFFER_BIT),$&&(it|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Dt.dispose(),Kt.dispose(),vt.dispose(),E.dispose(),X.dispose(),_t.dispose(),ue.dispose(),O.dispose(),Ft.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Re),Bt.removeEventListener("sessionend",xe),Mt&&(Mt.dispose(),Mt=null),qe.stop()};function Zt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=Pt.autoReset,K=yt.enabled,$=yt.autoUpdate,it=yt.needsUpdate,tt=yt.type;Et(),Pt.autoReset=w,yt.enabled=K,yt.autoUpdate=$,yt.needsUpdate=it,yt.type=tt}function wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const K=w.target;K.removeEventListener("dispose",xt),Gt(K)}function Gt(w){ee(w),vt.remove(w)}function ee(w){const K=vt.get(w).programs;K!==void 0&&(K.forEach(function($){Ft.releaseProgram($)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,$,it,tt,It){K===null&&(K=ae);const $t=tt.isMesh&&tt.matrixWorld.determinant()<0,ie=le(w,K,$,it,tt);Jt.setMaterial(it,$t);let Qt=$.index,ve=1;if(it.wireframe===!0){if(Qt=at.getWireframeAttribute($),Qt===void 0)return;ve=2}const de=$.drawRange,pe=$.attributes.position;let He=de.start*ve,Je=(de.start+de.count)*ve;It!==null&&(He=Math.max(He,It.start*ve),Je=Math.min(Je,(It.start+It.count)*ve)),Qt!==null?(He=Math.max(He,0),Je=Math.min(Je,Qt.count)):pe!=null&&(He=Math.max(He,0),Je=Math.min(Je,pe.count));const Ge=Je-He;if(Ge<0||Ge===1/0)return;ue.setup(tt,it,ie,$,Qt);let On,Ae=Ht;if(Qt!==null&&(On=lt.get(Qt),Ae=qt,Ae.setIndex(On)),tt.isMesh)it.wireframe===!0?(Jt.setLineWidth(it.wireframeLinewidth*oe()),Ae.setMode(J.LINES)):Ae.setMode(J.TRIANGLES);else if(tt.isLine){let Te=it.linewidth;Te===void 0&&(Te=1),Jt.setLineWidth(Te*oe()),tt.isLineSegments?Ae.setMode(J.LINES):tt.isLineLoop?Ae.setMode(J.LINE_LOOP):Ae.setMode(J.LINE_STRIP)}else tt.isPoints?Ae.setMode(J.POINTS):tt.isSprite&&Ae.setMode(J.TRIANGLES);if(tt.isBatchedMesh)Ae.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)Ae.renderInstances(He,Ge,tt.count);else if($.isInstancedBufferGeometry){const Te=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,oa=Math.min($.instanceCount,Te);Ae.renderInstances(He,Ge,oa)}else Ae.render(He,Ge)};function Ue(w,K,$){w.transparent===!0&&w.side===Di&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,kt(w,K,$),w.side=ka,w.needsUpdate=!0,kt(w,K,$),w.side=Di):kt(w,K,$)}this.compile=function(w,K,$=null){$===null&&($=w),v=Kt.get($),v.init(),z.push(v),$.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(v.pushLight(tt),tt.castShadow&&v.pushShadow(tt))}),w!==$&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(v.pushLight(tt),tt.castShadow&&v.pushShadow(tt))}),v.setupLights(D._useLegacyLights);const it=new Set;return w.traverse(function(tt){const It=tt.material;if(It)if(Array.isArray(It))for(let $t=0;$t<It.length;$t++){const ie=It[$t];Ue(ie,$,tt),it.add(ie)}else Ue(It,$,tt),it.add(It)}),z.pop(),v=null,it},this.compileAsync=function(w,K,$=null){const it=this.compile(w,K,$);return new Promise(tt=>{function It(){if(it.forEach(function($t){vt.get($t).currentProgram.isReady()&&it.delete($t)}),it.size===0){tt(w);return}setTimeout(It,10)}re.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Se=null;function ze(w){Se&&Se(w)}function Re(){qe.stop()}function xe(){qe.start()}const qe=new m0;qe.setAnimationLoop(ze),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(w){Se=w,Bt.setAnimationLoop(w),w===null?qe.stop():qe.start()},Bt.addEventListener("sessionstart",Re),Bt.addEventListener("sessionend",xe),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(K),K=Bt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,K,F),v=Kt.get(w,z.length),v.init(),z.push(v),jt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),At.setFromProjectionMatrix(jt),ct=this.localClippingEnabled,k=Lt.init(this.clippingPlanes,ct),C=Dt.get(w,_.length),C.init(),_.push(C),tn(w,K,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(et,ut),this.info.render.frame++,k===!0&&Lt.beginShadows();const $=v.state.shadowsArray;if(yt.render($,w,K),k===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1)&&Yt.render(C,w),v.setupLights(D._useLegacyLights),K.isArrayCamera){const it=K.cameras;for(let tt=0,It=it.length;tt<It;tt++){const $t=it[tt];Pi(C,w,$t,$t.viewport)}}else Pi(C,w,K);F!==null&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(D,w,K),ue.resetDefaultState(),pt=-1,I=null,z.pop(),z.length>0?v=z[z.length-1]:v=null,_.pop(),_.length>0?C=_[_.length-1]:C=null};function tn(w,K,$,it){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||At.intersectsSprite(w)){it&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(jt);const $t=_t.update(w),ie=w.material;ie.visible&&C.push(w,$t,ie,$,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||At.intersectsObject(w))){const $t=_t.update(w),ie=w.material;if(it&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Ot.copy($t.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(jt)),Array.isArray(ie)){const Qt=$t.groups;for(let ve=0,de=Qt.length;ve<de;ve++){const pe=Qt[ve],He=ie[pe.materialIndex];He&&He.visible&&C.push(w,$t,He,$,Ot.z,pe)}}else ie.visible&&C.push(w,$t,ie,$,Ot.z,null)}}const It=w.children;for(let $t=0,ie=It.length;$t<ie;$t++)tn(It[$t],K,$,it)}function Pi(w,K,$,it){const tt=w.opaque,It=w.transmissive,$t=w.transparent;v.setupLightsView($),k===!0&&Lt.setGlobalState(D.clippingPlanes,$),It.length>0&&Ut(tt,It,K,$),it&&Jt.viewport(T.copy(it)),tt.length>0&&Vt(tt,K,$),It.length>0&&Vt(It,K,$),$t.length>0&&Vt($t,K,$),Jt.buffers.depth.setTest(!0),Jt.buffers.depth.setMask(!0),Jt.buffers.color.setMask(!0),Jt.setPolygonOffset(!1)}function Ut(w,K,$,it){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const It=fe.isWebGL2;Mt===null&&(Mt=new xr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Fo:Ga,minFilter:_r,samples:It?4:0})),D.getDrawingBufferSize(Nt),It?Mt.setSize(Nt.x,Nt.y):Mt.setSize(Sc(Nt.x),Sc(Nt.y));const $t=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(Tt),j=D.getClearAlpha(),j<1&&D.setClearColor(16777215,.5),D.clear();const ie=D.toneMapping;D.toneMapping=Ha,Vt(w,$,it),A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt);let Qt=!1;for(let ve=0,de=K.length;ve<de;ve++){const pe=K[ve],He=pe.object,Je=pe.geometry,Ge=pe.material,On=pe.group;if(Ge.side===Di&&He.layers.test(it.layers)){const Ae=Ge.side;Ge.side=Xn,Ge.needsUpdate=!0,Xt(He,$,it,Je,Ge,On),Ge.side=Ae,Ge.needsUpdate=!0,Qt=!0}}Qt===!0&&(A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt)),D.setRenderTarget($t),D.setClearColor(Tt,j),D.toneMapping=ie}function Vt(w,K,$){const it=K.isScene===!0?K.overrideMaterial:null;for(let tt=0,It=w.length;tt<It;tt++){const $t=w[tt],ie=$t.object,Qt=$t.geometry,ve=it===null?$t.material:it,de=$t.group;ie.layers.test($.layers)&&Xt(ie,K,$,Qt,ve,de)}}function Xt(w,K,$,it,tt,It){w.onBeforeRender(D,K,$,it,tt,It),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(D,K,$,it,w,It),tt.transparent===!0&&tt.side===Di&&tt.forceSinglePass===!1?(tt.side=Xn,tt.needsUpdate=!0,D.renderBufferDirect($,K,it,tt,w,It),tt.side=ka,tt.needsUpdate=!0,D.renderBufferDirect($,K,it,tt,w,It),tt.side=Di):D.renderBufferDirect($,K,it,tt,w,It),w.onAfterRender(D,K,$,it,tt,It)}function kt(w,K,$){K.isScene!==!0&&(K=ae);const it=vt.get(w),tt=v.state.lights,It=v.state.shadowsArray,$t=tt.state.version,ie=Ft.getParameters(w,tt.state,It,K,$),Qt=Ft.getProgramCacheKey(ie);let ve=it.programs;it.environment=w.isMeshStandardMaterial?K.environment:null,it.fog=K.fog,it.envMap=(w.isMeshStandardMaterial?X:E).get(w.envMap||it.environment),ve===void 0&&(w.addEventListener("dispose",xt),ve=new Map,it.programs=ve);let de=ve.get(Qt);if(de!==void 0){if(it.currentProgram===de&&it.lightsStateVersion===$t)return Ct(w,ie),de}else ie.uniforms=Ft.getUniforms(w),w.onBuild($,ie,D),w.onBeforeCompile(ie,D),de=Ft.acquireProgram(ie,Qt),ve.set(Qt,de),it.uniforms=ie.uniforms;const pe=it.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(pe.clippingPlanes=Lt.uniform),Ct(w,ie),it.needsLights=Ee(w),it.lightsStateVersion=$t,it.needsLights&&(pe.ambientLightColor.value=tt.state.ambient,pe.lightProbe.value=tt.state.probe,pe.directionalLights.value=tt.state.directional,pe.directionalLightShadows.value=tt.state.directionalShadow,pe.spotLights.value=tt.state.spot,pe.spotLightShadows.value=tt.state.spotShadow,pe.rectAreaLights.value=tt.state.rectArea,pe.ltc_1.value=tt.state.rectAreaLTC1,pe.ltc_2.value=tt.state.rectAreaLTC2,pe.pointLights.value=tt.state.point,pe.pointLightShadows.value=tt.state.pointShadow,pe.hemisphereLights.value=tt.state.hemi,pe.directionalShadowMap.value=tt.state.directionalShadowMap,pe.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,pe.spotShadowMap.value=tt.state.spotShadowMap,pe.spotLightMatrix.value=tt.state.spotLightMatrix,pe.spotLightMap.value=tt.state.spotLightMap,pe.pointShadowMap.value=tt.state.pointShadowMap,pe.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.currentProgram=de,it.uniformsList=null,de}function Rt(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=pc.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Ct(w,K){const $=vt.get(w);$.outputColorSpace=K.outputColorSpace,$.batching=K.batching,$.instancing=K.instancing,$.instancingColor=K.instancingColor,$.skinning=K.skinning,$.morphTargets=K.morphTargets,$.morphNormals=K.morphNormals,$.morphColors=K.morphColors,$.morphTargetsCount=K.morphTargetsCount,$.numClippingPlanes=K.numClippingPlanes,$.numIntersection=K.numClipIntersection,$.vertexAlphas=K.vertexAlphas,$.vertexTangents=K.vertexTangents,$.toneMapping=K.toneMapping}function le(w,K,$,it,tt){K.isScene!==!0&&(K=ae),A.resetTextureUnits();const It=K.fog,$t=it.isMeshStandardMaterial?K.environment:null,ie=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ra,Qt=(it.isMeshStandardMaterial?X:E).get(it.envMap||$t),ve=it.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,de=!!$.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),pe=!!$.morphAttributes.position,He=!!$.morphAttributes.normal,Je=!!$.morphAttributes.color;let Ge=Ha;it.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const On=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ae=On!==void 0?On.length:0,Te=vt.get(it),oa=v.state.lights;if(k===!0&&(ct===!0||w!==I)){const Gn=w===I&&it.id===pt;Lt.setState(it,w,Gn)}let Ye=!1;it.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==oa.state.version||Te.outputColorSpace!==ie||tt.isBatchedMesh&&Te.batching===!1||!tt.isBatchedMesh&&Te.batching===!0||tt.isInstancedMesh&&Te.instancing===!1||!tt.isInstancedMesh&&Te.instancing===!0||tt.isSkinnedMesh&&Te.skinning===!1||!tt.isSkinnedMesh&&Te.skinning===!0||tt.isInstancedMesh&&Te.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Te.instancingColor===!1&&tt.instanceColor!==null||Te.envMap!==Qt||it.fog===!0&&Te.fog!==It||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Lt.numPlanes||Te.numIntersection!==Lt.numIntersection)||Te.vertexAlphas!==ve||Te.vertexTangents!==de||Te.morphTargets!==pe||Te.morphNormals!==He||Te.morphColors!==Je||Te.toneMapping!==Ge||fe.isWebGL2===!0&&Te.morphTargetsCount!==Ae)&&(Ye=!0):(Ye=!0,Te.__version=it.version);let Mn=Te.currentProgram;Ye===!0&&(Mn=kt(it,K,tt));let Pn=!1,la=!1,Us=!1;const on=Mn.getUniforms(),Ti=Te.uniforms;if(Jt.useProgram(Mn.program)&&(Pn=!0,la=!0,Us=!0),it.id!==pt&&(pt=it.id,la=!0),Pn||I!==w){on.setValue(J,"projectionMatrix",w.projectionMatrix),on.setValue(J,"viewMatrix",w.matrixWorldInverse);const Gn=on.map.cameraPosition;Gn!==void 0&&Gn.setValue(J,Ot.setFromMatrixPosition(w.matrixWorld)),fe.logarithmicDepthBuffer&&on.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&on.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,la=!0,Us=!0)}if(tt.isSkinnedMesh){on.setOptional(J,tt,"bindMatrix"),on.setOptional(J,tt,"bindMatrixInverse");const Gn=tt.skeleton;Gn&&(fe.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),on.setValue(J,"boneTexture",Gn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(on.setOptional(J,tt,"batchingTexture"),on.setValue(J,"batchingTexture",tt._matricesTexture,A));const ca=$.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&fe.isWebGL2===!0)&&te.update(tt,$,Mn),(la||Te.receiveShadow!==tt.receiveShadow)&&(Te.receiveShadow=tt.receiveShadow,on.setValue(J,"receiveShadow",tt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ti.envMap.value=Qt,Ti.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),la&&(on.setValue(J,"toneMappingExposure",D.toneMappingExposure),Te.needsLights&&he(Ti,Us),It&&it.fog===!0&&mt.refreshFogUniforms(Ti,It),mt.refreshMaterialUniforms(Ti,it,st,H,Mt),pc.upload(J,Rt(Te),Ti,A)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(pc.upload(J,Rt(Te),Ti,A),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&on.setValue(J,"center",tt.center),on.setValue(J,"modelViewMatrix",tt.modelViewMatrix),on.setValue(J,"normalMatrix",tt.normalMatrix),on.setValue(J,"modelMatrix",tt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Gn=it.uniformsGroups;for(let Rn=0,Ns=Gn.length;Rn<Ns;Rn++)if(fe.isWebGL2){const Os=Gn[Rn];O.update(Os,Mn),O.bind(Os,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function he(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Ee(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,K,$){vt.get(w.texture).__webglTexture=K,vt.get(w.depthTexture).__webglTexture=$;const it=vt.get(w);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=$===void 0,it.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,K){const $=vt.get(w);$.__webglFramebuffer=K,$.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(w,K=0,$=0){F=w,V=K,G=$;let it=!0,tt=null,It=!1,$t=!1;if(w){const Qt=vt.get(w);Qt.__useDefaultFramebuffer!==void 0?(Jt.bindFramebuffer(J.FRAMEBUFFER,null),it=!1):Qt.__webglFramebuffer===void 0?A.setupRenderTarget(w):Qt.__hasExternalTextures&&A.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);const ve=w.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&($t=!0);const de=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(de[K])?tt=de[K][$]:tt=de[K],It=!0):fe.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?tt=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(de)?tt=de[$]:tt=de,T.copy(w.viewport),N.copy(w.scissor),ht=w.scissorTest}else T.copy(L).multiplyScalar(st).floor(),N.copy(Y).multiplyScalar(st).floor(),ht=ft;if(Jt.bindFramebuffer(J.FRAMEBUFFER,tt)&&fe.drawBuffers&&it&&Jt.drawBuffers(w,tt),Jt.viewport(T),Jt.scissor(N),Jt.setScissorTest(ht),It){const Qt=vt.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qt.__webglTexture,$)}else if($t){const Qt=vt.get(w.texture),ve=K||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Qt.__webglTexture,$||0,ve)}pt=-1},this.readRenderTargetPixels=function(w,K,$,it,tt,It,$t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$t!==void 0&&(ie=ie[$t]),ie){Jt.bindFramebuffer(J.FRAMEBUFFER,ie);try{const Qt=w.texture,ve=Qt.format,de=Qt.type;if(ve!==Ei&&zt.convert(ve)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pe=de===Fo&&(re.has("EXT_color_buffer_half_float")||fe.isWebGL2&&re.has("EXT_color_buffer_float"));if(de!==Ga&&zt.convert(de)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(de===ia&&(fe.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-it&&$>=0&&$<=w.height-tt&&J.readPixels(K,$,it,tt,zt.convert(ve),zt.convert(de),It)}finally{const Qt=F!==null?vt.get(F).__webglFramebuffer:null;Jt.bindFramebuffer(J.FRAMEBUFFER,Qt)}}},this.copyFramebufferToTexture=function(w,K,$=0){const it=Math.pow(2,-$),tt=Math.floor(K.image.width*it),It=Math.floor(K.image.height*it);A.setTexture2D(K,0),J.copyTexSubImage2D(J.TEXTURE_2D,$,0,0,w.x,w.y,tt,It),Jt.unbindTexture()},this.copyTextureToTexture=function(w,K,$,it=0){const tt=K.image.width,It=K.image.height,$t=zt.convert($.format),ie=zt.convert($.type);A.setTexture2D($,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment),K.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,it,w.x,w.y,tt,It,$t,ie,K.image.data):K.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,it,w.x,w.y,K.mipmaps[0].width,K.mipmaps[0].height,$t,K.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,it,w.x,w.y,$t,ie,K.image),it===0&&$.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Jt.unbindTexture()},this.copyTextureToTexture3D=function(w,K,$,it,tt=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const It=w.max.x-w.min.x+1,$t=w.max.y-w.min.y+1,ie=w.max.z-w.min.z+1,Qt=zt.convert(it.format),ve=zt.convert(it.type);let de;if(it.isData3DTexture)A.setTexture3D(it,0),de=J.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)A.setTexture2DArray(it,0),de=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,it.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,it.unpackAlignment);const pe=J.getParameter(J.UNPACK_ROW_LENGTH),He=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Je=J.getParameter(J.UNPACK_SKIP_PIXELS),Ge=J.getParameter(J.UNPACK_SKIP_ROWS),On=J.getParameter(J.UNPACK_SKIP_IMAGES),Ae=$.isCompressedTexture?$.mipmaps[tt]:$.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Ae.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ae.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?J.texSubImage3D(de,tt,K.x,K.y,K.z,It,$t,ie,Qt,ve,Ae.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(de,tt,K.x,K.y,K.z,It,$t,ie,Qt,Ae.data)):J.texSubImage3D(de,tt,K.x,K.y,K.z,It,$t,ie,Qt,ve,Ae),J.pixelStorei(J.UNPACK_ROW_LENGTH,pe),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,He),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Je),J.pixelStorei(J.UNPACK_SKIP_ROWS,Ge),J.pixelStorei(J.UNPACK_SKIP_IMAGES,On),tt===0&&it.generateMipmaps&&J.generateMipmap(de),Jt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Jt.unbindTexture()},this.resetState=function(){V=0,G=0,F=null,Jt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Ch?"display-p3":"srgb",i.unpackColorSpace=Xe.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?Sr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?An:ra}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class T0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D_=new cn,bh=new Dh,fc=new bc,hc=new W;class sA extends wn{constructor(e=new Oi,i=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;D_.copy(l).invert(),bh.copy(e.ray).applyMatrix4(D_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let b=x,C=M;b<C;b++){const v=m.getX(b);hc.fromBufferAttribute(y,v),U_(hc,v,p,l,e,i,this)}}else{const x=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let b=x,C=M;b<C;b++)hc.fromBufferAttribute(y,b),U_(hc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function U_(o,e,i,r,l,u,d){const h=bh.distanceSqToPoint(o);if(h<i){const p=new W;bh.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class Mc extends Oi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const g=[],y=new W,x=new W,M=[],b=[],C=[],v=[];for(let _=0;_<=r;_++){const z=[],D=_/r;let B=0;_===0&&d===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let V=0;V<=i;V++){const G=V/i;y.x=-e*Math.cos(l+G*u)*Math.sin(d+D*h),y.y=e*Math.cos(d+D*h),y.z=e*Math.sin(l+G*u)*Math.sin(d+D*h),b.push(y.x,y.y,y.z),x.copy(y).normalize(),C.push(x.x,x.y,x.z),v.push(G+B,1-D),z.push(m++)}g.push(z)}for(let _=0;_<r;_++)for(let z=0;z<i;z++){const D=g[_][z+1],B=g[_][z],V=g[_+1][z],G=g[_+1][z+1];(_!==0||d>0)&&M.push(D,B,G),(_!==r-1||p<Math.PI)&&M.push(B,V,G)}this.setIndex(M),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(C,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const hh=new cn,N_=new W,O_=new W;class b0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;N_.setFromMatrixPosition(e.matrixWorld),i.position.copy(N_),O_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(O_),i.updateMatrixWorld(),hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const P_=new cn,Oo=new W,dh=new W;class lA extends b0{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Oo),dh.copy(r.position),dh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(dh),r.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),P_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P_)}}class z_ extends Oh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends b0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B_ extends Oh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F_ extends Oh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class I_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);const H_={type:"change"},ph={type:"start"},G_={type:"end"},dc=new Dh,V_=new Ba,uA=Math.cos(70*dr.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Kt),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Kt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(H_),r.update(),u=l.NONE},this.update=function(){const O=new W,Et=new Mr().setFromUnitVectors(e.up,new W(0,1,0)),Bt=Et.clone().invert(),Zt=new W,U=new Mr,wt=new W,xt=2*Math.PI;return function(ee=null){const Ue=r.object.position;O.copy(Ue).sub(r.target),O.applyQuaternion(Et),h.setFromVector3(O),r.autoRotate&&u===l.NONE&&ht(T(ee)),r.enableDamping?(h.theta+=p.theta*r.dampingFactor,h.phi+=p.phi*r.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let Se=r.minAzimuthAngle,ze=r.maxAzimuthAngle;isFinite(Se)&&isFinite(ze)&&(Se<-Math.PI?Se+=xt:Se>Math.PI&&(Se-=xt),ze<-Math.PI?ze+=xt:ze>Math.PI&&(ze-=xt),Se<=ze?h.theta=Math.max(Se,Math.min(ze,h.theta)):h.theta=h.theta>(Se+ze)/2?Math.max(Se,h.theta):Math.min(ze,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&G||r.object.isOrthographicCamera?h.radius=L(h.radius):h.radius=L(h.radius*m),O.setFromSpherical(h),O.applyQuaternion(Bt),Ue.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Re=!1;if(r.zoomToCursor&&G){let xe=null;if(r.object.isPerspectiveCamera){const qe=O.length();xe=L(qe*m);const tn=qe-xe;r.object.position.addScaledVector(B,tn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const qe=new W(V.x,V.y,0);qe.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Re=!0;const tn=new W(V.x,V.y,0);tn.unproject(r.object),r.object.position.sub(tn).add(qe),r.object.updateMatrixWorld(),xe=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(xe).add(r.object.position):(dc.origin.copy(r.object.position),dc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(dc.direction))<uA?e.lookAt(r.target):(V_.setFromNormalAndCoplanarPoint(r.object.up,r.target),dc.intersectPlane(V_,r.target))))}else r.object.isOrthographicCamera&&(Re=m!==1,Re&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,G=!1,Re||Zt.distanceToSquared(r.object.position)>d||8*(1-U.dot(r.object.quaternion))>d||wt.distanceToSquared(r.target)>0?(r.dispatchEvent(H_),Zt.copy(r.object.position),U.copy(r.object.quaternion),wt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Yt),r.domElement.removeEventListener("pointerdown",A),r.domElement.removeEventListener("pointercancel",X),r.domElement.removeEventListener("wheel",_t),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",X),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Kt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new I_,p=new I_;let m=1;const g=new W,y=new _e,x=new _e,M=new _e,b=new _e,C=new _e,v=new _e,_=new _e,z=new _e,D=new _e,B=new W,V=new _e;let G=!1;const F=[],pt={};let I=!1;function T(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function N(O){const Et=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*Et)}function ht(O){p.theta-=O}function Tt(O){p.phi-=O}const j=function(){const O=new W;return function(Bt,Zt){O.setFromMatrixColumn(Zt,0),O.multiplyScalar(-Bt),g.add(O)}}(),rt=function(){const O=new W;return function(Bt,Zt){r.screenSpacePanning===!0?O.setFromMatrixColumn(Zt,1):(O.setFromMatrixColumn(Zt,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Bt),g.add(O)}}(),H=function(){const O=new W;return function(Bt,Zt){const U=r.domElement;if(r.object.isPerspectiveCamera){const wt=r.object.position;O.copy(wt).sub(r.target);let xt=O.length();xt*=Math.tan(r.object.fov/2*Math.PI/180),j(2*Bt*xt/U.clientHeight,r.object.matrix),rt(2*Zt*xt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(j(Bt*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),rt(Zt*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function st(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function et(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ut(O,Et){if(!r.zoomToCursor)return;G=!0;const Bt=r.domElement.getBoundingClientRect(),Zt=O-Bt.left,U=Et-Bt.top,wt=Bt.width,xt=Bt.height;V.x=Zt/wt*2-1,V.y=-(U/xt)*2+1,B.set(V.x,V.y,1).unproject(r.object).sub(r.object.position).normalize()}function L(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function Y(O){y.set(O.clientX,O.clientY)}function ft(O){ut(O.clientX,O.clientX),_.set(O.clientX,O.clientY)}function At(O){b.set(O.clientX,O.clientY)}function k(O){x.set(O.clientX,O.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const Et=r.domElement;ht(2*Math.PI*M.x/Et.clientHeight),Tt(2*Math.PI*M.y/Et.clientHeight),y.copy(x),r.update()}function ct(O){z.set(O.clientX,O.clientY),D.subVectors(z,_),D.y>0?st(N(D.y)):D.y<0&&et(N(D.y)),_.copy(z),r.update()}function Mt(O){C.set(O.clientX,O.clientY),v.subVectors(C,b).multiplyScalar(r.panSpeed),H(v.x,v.y),b.copy(C),r.update()}function jt(O){ut(O.clientX,O.clientY),O.deltaY<0?et(N(O.deltaY)):O.deltaY>0&&st(N(O.deltaY)),r.update()}function Nt(O){let Et=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?Tt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(0,r.keyPanSpeed),Et=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?Tt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(0,-r.keyPanSpeed),Et=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?ht(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(r.keyPanSpeed,0),Et=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?ht(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(-r.keyPanSpeed,0),Et=!0;break}Et&&(O.preventDefault(),r.update())}function Ot(O){if(F.length===1)y.set(O.pageX,O.pageY);else{const Et=zt(O),Bt=.5*(O.pageX+Et.x),Zt=.5*(O.pageY+Et.y);y.set(Bt,Zt)}}function ae(O){if(F.length===1)b.set(O.pageX,O.pageY);else{const Et=zt(O),Bt=.5*(O.pageX+Et.x),Zt=.5*(O.pageY+Et.y);b.set(Bt,Zt)}}function oe(O){const Et=zt(O),Bt=O.pageX-Et.x,Zt=O.pageY-Et.y,U=Math.sqrt(Bt*Bt+Zt*Zt);_.set(0,U)}function J(O){r.enableZoom&&oe(O),r.enablePan&&ae(O)}function Ie(O){r.enableZoom&&oe(O),r.enableRotate&&Ot(O)}function re(O){if(F.length==1)x.set(O.pageX,O.pageY);else{const Bt=zt(O),Zt=.5*(O.pageX+Bt.x),U=.5*(O.pageY+Bt.y);x.set(Zt,U)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const Et=r.domElement;ht(2*Math.PI*M.x/Et.clientHeight),Tt(2*Math.PI*M.y/Et.clientHeight),y.copy(x)}function fe(O){if(F.length===1)C.set(O.pageX,O.pageY);else{const Et=zt(O),Bt=.5*(O.pageX+Et.x),Zt=.5*(O.pageY+Et.y);C.set(Bt,Zt)}v.subVectors(C,b).multiplyScalar(r.panSpeed),H(v.x,v.y),b.copy(C)}function Jt(O){const Et=zt(O),Bt=O.pageX-Et.x,Zt=O.pageY-Et.y,U=Math.sqrt(Bt*Bt+Zt*Zt);z.set(0,U),D.set(0,Math.pow(z.y/_.y,r.zoomSpeed)),st(D.y),_.copy(z);const wt=(O.pageX+Et.x)*.5,xt=(O.pageY+Et.y)*.5;ut(wt,xt)}function Pt(O){r.enableZoom&&Jt(O),r.enablePan&&fe(O)}function vt(O){r.enableZoom&&Jt(O),r.enableRotate&&re(O)}function A(O){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",X)),te(O),O.pointerType==="touch"?Lt(O):lt(O))}function E(O){r.enabled!==!1&&(O.pointerType==="touch"?yt(O):at(O))}function X(O){switch(Ht(O),F.length){case 0:r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",X),r.dispatchEvent(G_),u=l.NONE;break;case 1:const Et=F[0],Bt=pt[Et];Lt({pointerId:Et,pageX:Bt.x,pageY:Bt.y});break}}function lt(O){let Et;switch(O.button){case 0:Et=r.mouseButtons.LEFT;break;case 1:Et=r.mouseButtons.MIDDLE;break;case 2:Et=r.mouseButtons.RIGHT;break;default:Et=-1}switch(Et){case es.DOLLY:if(r.enableZoom===!1)return;ft(O),u=l.DOLLY;break;case es.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;At(O),u=l.PAN}else{if(r.enableRotate===!1)return;Y(O),u=l.ROTATE}break;case es.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;Y(O),u=l.ROTATE}else{if(r.enablePan===!1)return;At(O),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function at(O){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;k(O);break;case l.DOLLY:if(r.enableZoom===!1)return;ct(O);break;case l.PAN:if(r.enablePan===!1)return;Mt(O);break}}function _t(O){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(O.preventDefault(),r.dispatchEvent(ph),jt(Ft(O)),r.dispatchEvent(G_))}function Ft(O){const Et=O.deltaMode,Bt={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(Et){case 1:Bt.deltaY*=16;break;case 2:Bt.deltaY*=100;break}return O.ctrlKey&&!I&&(Bt.deltaY*=10),Bt}function mt(O){O.key==="Control"&&(I=!0,r.domElement.getRootNode().addEventListener("keyup",Dt,{passive:!0,capture:!0}))}function Dt(O){O.key==="Control"&&(I=!1,r.domElement.getRootNode().removeEventListener("keyup",Dt,{passive:!0,capture:!0}))}function Kt(O){r.enabled===!1||r.enablePan===!1||Nt(O)}function Lt(O){switch(qt(O),F.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;Ot(O),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;ae(O),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;J(O),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ie(O),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function yt(O){switch(qt(O),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;re(O),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;fe(O),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Pt(O),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;vt(O),r.update();break;default:u=l.NONE}}function Yt(O){r.enabled!==!1&&O.preventDefault()}function te(O){F.push(O.pointerId)}function Ht(O){delete pt[O.pointerId];for(let Et=0;Et<F.length;Et++)if(F[Et]==O.pointerId){F.splice(Et,1);return}}function qt(O){let Et=pt[O.pointerId];Et===void 0&&(Et=new _e,pt[O.pointerId]=Et),Et.set(O.pageX,O.pageY)}function zt(O){const Et=O.pointerId===F[0]?F[1]:F[0];return pt[Et]}r.domElement.addEventListener("contextmenu",Yt),r.domElement.addEventListener("pointerdown",A),r.domElement.addEventListener("pointercancel",X),r.domElement.addEventListener("wheel",_t,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",mt,{passive:!0,capture:!0}),this.update()}}function hA(){const o=ge.useRef(null),[e,i]=ge.useState(!1),[r,l]=ge.useState(!1),[u,d]=ge.useState(!1),[h,p]=ge.useState(!1),[m,g]=ge.useState(!1),[y,x]=ge.useState(!1),[M,b]=ge.useState(!1),[C,v]=ge.useState(!1),[_,z]=ge.useState(!1),[D,B]=ge.useState(!1),V=ge.useRef({beta:0,gamma:0}),G=ge.useRef(0),F=ge.useRef(!1),pt=ge.useRef(!1),I=ge.useRef({position:{x:1,z:1},direction:new W(0,0,1),worldPosition:new W(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),T=ge.useRef({}),N=ge.useRef(null),ht=ge.useRef(!1);ge.useEffect(()=>{pt.current=u},[u]),ge.useEffect(()=>{ht.current=e},[e]);const[Tt,j]=ge.useState(null),rt=ge.useRef(null);ge.useRef(!1);const H=ge.useRef(null),st=ge.useRef(!1),[et,ut]=ge.useState({showDebug:!1,beta:0,gamma:0,velocity:{x:0,z:0},position:{x:0,z:0},gravity:{x:0,z:0},eventCount:0,lastUpdate:Date.now(),eventType:"",collision:!1,collisionEdge:""}),L=()=>{if(console.log("Restarting game..."),!T.current.generateMaze||!T.current.createWalls){console.error("Game functions not initialized");return}if(N.current&&N.current.parent&&(console.log("Cleaning up celebration particles"),N.current.parent.remove(N.current),N.current.geometry&&N.current.geometry.dispose(),N.current.material&&N.current.material.dispose(),N.current=null,j(null)),console.log("Resetting game state"),i(!1),l(!1),d(!1),st.current=!1,console.log("Resetting player position and direction"),I.current.position={x:1,z:1},I.current.direction.set(0,0,1),console.log("Resetting maze reference"),H.current=null,console.log("Generating new maze"),T.current.generateMaze(),console.log("Creating new walls"),T.current.createWalls(),console.log("Updating player world position"),I.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),T.current.createPlayer&&T.current.mazeGroup){console.log("Creating new player mesh"),I.current.mesh&&I.current.mesh.parent&&(console.log("Removing old player mesh"),I.current.mesh.parent.remove(I.current.mesh),I.current.mesh.children.forEach(vt=>{vt.geometry&&vt.geometry.dispose(),vt.material&&vt.material.dispose()})),console.log("Creating new player mesh");const Pt=T.current.createPlayer();console.log("Positioning new player at entrance"),Pt.position.copy(I.current.worldPosition),console.log("Adding new player to maze group"),T.current.mazeGroup.add(Pt),console.log("Added new player to maze group"),console.log("Updating player ref"),I.current.mesh=Pt}if(T.current.setInitialPlayerDirection?T.current.setInitialPlayerDirection(I.current.mesh):I.current.direction.set(0,0,1),I.current.mesh){I.current.mesh.position.copy(I.current.worldPosition);const Pt=Math.atan2(I.current.direction.x,I.current.direction.z);I.current.mesh.rotation.y=Pt,I.current.mesh.visible=!0,I.current.mesh.children.forEach(vt=>{vt.material&&(vt.material.opacity=1,vt.material.transparent=!0)})}},Y=()=>{const Pt=navigator.userAgent||navigator.vendor||window.opera,vt=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(Pt.toLowerCase());return console.log("Device detection:",vt?"Mobile":"Desktop"),F.current=vt,vt},ft=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",At=()=>window.DeviceOrientationEvent!==void 0,k=Pt=>{const vt=performance.now(),A=vt<3e3;A&&console.log("Orientation event received:",{beta:Pt.beta,gamma:Pt.gamma,time:vt}),V.current={beta:Pt.beta,gamma:Pt.gamma},!A&&vt%3e3<20&&console.log("Orientation data:",V.current)};ge.useEffect(()=>{const Pt=Y();return console.log("Is mobile:",Pt),Pt&&(ft()?(console.log("iOS device detected - showing permission button"),z(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):At()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",k),b(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",k)}},[]),ge.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let Pt=function(Ut){if(Pi=requestAnimationFrame(Pt),F.current&&M&&!ht.current&&!h){const Xt=performance.now(),{beta:kt,gamma:Rt}=V.current;if(Xt<5e3&&Xt%500<20&&console.log("Animation loop - orientation:",{beta:kt,gamma:Rt}),kt!==null&&Rt!==null){const Ct=Math.abs(kt),le=Math.abs(Rt);let he="";const Ee=5;Ct>le&&Ct>Ee?he=kt>0?"ArrowDown":"ArrowUp":le>Ee&&(he=Rt>0?"ArrowRight":"ArrowLeft");const w=Math.max(Ct,le),K=Math.max(100,500-w*5);he&&Xt-G.current>K&&(console.log(`Gyroscope movement: ${he} (tilt: ${w.toFixed(1)}°)`),tn({key:he,preventDefault:()=>{},stopPropagation:()=>{}}),G.current=Xt)}}if(!Gt&&!e){const Xt=Ut-ee,kt=Math.min(Xt/Ue,1);if(kt===1)Gt=!0,Ht.rotation.x=0,Ht.rotation.y=0;else{const Rt=dr.lerp(0,0,kt);Ht.rotation.x=Rt,Ht.rotation.y=0}}else!Gt&&e&&(Gt=!0),pt.current||(Ht.rotation.x=0,Ht.rotation.y=0,Ht.rotation.z=0);const Vt=Ut*.001;Ht.children.forEach(Xt=>{Xt.material&&Xt.material.uniforms&&(Xt.material.uniforms.time.value=Vt)}),rt.current?(console.log("Calling updateParticles from animation loop"),rt.current()||(console.log("updateParticles returned false, setting to null"),rt.current=null)):ht.current&&!rt.current&&console.log("Game won but updateParticles is null"),pt.current?F.current||(Yt.enabled=!1,Yt.enableRotate=!1,Yt.enableZoom=!1,Yt.enablePan=!1):((Math.abs(Lt.position.x)>.1||Math.abs(Lt.position.z)>.1||Math.abs(Lt.position.y-Dt())>.1||Math.abs(Yt.target.x)>.1||Math.abs(Yt.target.y)>.1||Math.abs(Yt.target.z)>.1)&&(Lt.position.set(0,Dt(),0),Yt.target.set(0,0,0)),!F.current&&Yt.update&&Yt.update()),Ot(),lt.render(A,Lt)},vt=function(){const Ut=window.innerWidth,Vt=window.innerHeight;lt.setSize(Ut,Vt),Lt.aspect=Ut/Vt;const Xt=Ut<768,kt=Ut>Vt;Xt?Lt.fov=kt?75:80:Lt.fov=60,pt.current||(Lt.position.y=Dt(),Lt.lookAt(0,0,0)),Lt.updateProjectionMatrix()};console.log("Initializing 3D scene"),F.current=Y(),console.log("Is mobile device:",F.current),F.current&&v(!0);const A=new rA;A.background=new Pe(0);const E=new F_(4210752,1.5);A.add(E);const X=new B_(16777215,1);if(X.position.set(1,1,1),A.add(X),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const lt=new E0({antialias:!0,canvas:o.current});if(lt.setSize(window.innerWidth,window.innerHeight),lt.setPixelRatio(Math.min(window.devicePixelRatio,2)),lt.shadowMap.enabled=!0,lt.shadowMap.type=W_,console.log("Renderer set up"),F.current){console.log("Setting up orientation handling for mobile");const Ut=Vt=>{var Xt;if(!(e||h)&&(!M&&(Vt.beta!==null||Vt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),b(!0)),!!M&&Vt.beta!==null&&Vt.gamma!==null)){let kt=Vt.beta,Rt=Vt.gamma;if(window.orientation!==void 0){const Ct=window.orientation;if(performance.now()%5e3<20&&((Xt=window.physics)!=null&&Xt.debug)&&console.log(`Device orientation: ${Ct}°, beta: ${kt.toFixed(2)}°, gamma: ${Rt.toFixed(2)}°`),Ct===90){const he=kt;kt=Rt,Rt=-he}else if(Ct===-90){const he=kt;kt=-Rt,Rt=he}else Ct===180&&(kt=-kt,Rt=-Rt)}if(window.physics){let he=0,Ee=0;Math.abs(Rt)>5&&(he=Math.min(Math.abs(Rt)-5,25)/25*Math.sign(Rt)),Math.abs(kt)>5&&(Ee=Math.min(Math.abs(kt)-5,25)/25*Math.sign(kt)),window.physics.gravityX=he,window.physics.gravityZ=Ee,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${he.toFixed(3)}, Z=${Ee.toFixed(3)}`)}V.current={beta:kt,gamma:Rt}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Vt=async()=>{console.log("Requesting iOS device orientation permission");try{const Xt=await window.DeviceOrientationEvent.requestPermission();Xt==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",Ut),b(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),ae(),setTimeout(()=>{I.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),I.current.velocity.x=.05,I.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",Xt)}catch(Xt){console.error("❌ Error requesting permission:",Xt)}};document.addEventListener("touchstart",()=>{Vt(),document.removeEventListener("touchstart",Vt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",Ut),b(!0)}const at=21,_t=2,Ft=3,mt=2,Dt=(Ut=!1)=>{const Vt=window.innerWidth<768,Xt=window.innerWidth>window.innerHeight,kt=at*mt;let Rt=kt*1.5;return Vt&&(Ut||D)&&(Xt?Rt=kt*1.6:Rt=kt*1.8),Vt?Xt?Rt*.8:Rt*1.2:Rt};window.calculateOptimalCameraHeight=Dt;const Kt=Dt(),Lt=new ti(60,window.innerWidth/window.innerHeight,.1,1e3);Lt.position.set(0,Kt,0),Lt.lookAt(0,0,0),Jt.current=Lt,window.gameCamera=Lt,console.log("Camera set up and assigned to cameraRef");const yt=Y();let Yt;yt?(Yt={target:new W(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(Yt=new fA(Lt,lt.domElement),Yt.enableDamping=!0,Yt.dampingFactor=.1,Yt.target.set(0,0,0),Yt.update(),console.log("Desktop controls set up"));const te=e&&H.current?H.current:Array(at).fill().map(()=>Array(at).fill(1));H.current=te,window.MAZE_SIZE=at,window.WALL_THICKNESS=mt,window.playerRef=I,window.mazeRef=H,window.isThirdPersonRef=pt,window.gameCamera=Lt,window.maze=te,window.celebrateWin=()=>{st.current=!0,i(!0),l(!0),Se()};const Ht=new Po;A.add(Ht),console.log("Maze group created"),T.current.mazeGroup=Ht;const qt=new sa({uniforms:{time:{value:0},baseColor:{value:new Pe(4482815)}},vertexShader:`
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform float time;
          uniform vec3 baseColor;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            // Enhanced edge detection
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
            
            // Pulsing effect
            float pulse = sin(time * 2.0) * 0.15 + 0.85;
            
            // Enhanced edge glow with fresnel
            float edgeGlow = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 2.0) * 1.5;
            
            // Height-based gradient
            float heightFactor = (vPosition.y + 3.0) / 6.0;
            
            // Combine colors with enhanced edge effect
            vec3 color = mix(baseColor, vec3(0.7, 0.8, 1.0), heightFactor * 0.3);
            vec3 edgeColor = vec3(0.8, 0.9, 1.0);
            
            // Final color with stronger edges
            vec3 finalColor = mix(
              color * pulse,
              edgeColor,
              edgeGlow + fresnel * 0.5
            );
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `,side:Di});console.log("Wall material created");const zt=(Ut,Vt)=>Ut>=0&&Ut<at&&Vt>=0&&Vt<at,ue=(Ut,Vt)=>{const Xt=[],kt=[[0,2],[2,0],[0,-2],[-2,0]];for(let Rt=kt.length-1;Rt>0;Rt--){const Ct=Math.floor(Math.random()*(Rt+1));[kt[Rt],kt[Ct]]=[kt[Ct],kt[Rt]]}for(const[Rt,Ct]of kt){const le=Ut+Rt,he=Vt+Ct;zt(le,he)&&te[le][he]===1&&Xt.push([le,he,Rt/2,Ct/2])}return Xt},O=()=>{if(e&&H.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let Ct=0;Ct<at;Ct++)for(let le=0;le<at;le++)te[Ct][le]=1;const Ut=[],Vt=1,Xt=1;for(te[Vt][Xt]=0,Ut.push([Vt,Xt]);Ut.length>0;){const[Ct,le]=Ut[Ut.length-1],he=ue(Ct,le);if(he.length===0){Ut.pop();continue}const[Ee,w,K,$]=he[Math.floor(Math.random()*he.length)];te[Ee][w]=0,te[Ct+K][le+$]=0,Ut.push([Ee,w])}te[0][1]=0,te[at-1][at-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(at-1)+","+(at-2)+")");const kt=new Set,Rt=Ct=>{const[le,he]=Ct;if(le===at-2&&he===at-2)return!0;kt.add(`${le},${he}`);const Ee=[[0,1],[1,0],[0,-1],[-1,0]];for(const[w,K]of Ee){const $=le+w,it=he+K;if(zt($,it)&&te[$][it]===0&&!kt.has(`${$},${it}`)&&Rt([$,it]))return!0}return!1};Rt([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),O()),H.current=te,window.maze=te,window.MAZE_SIZE=at,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Et=()=>{if(!e||!H.current){for(console.log("Creating new walls for the maze");Ht.children.length>0;){const Ut=Ht.children[0];Ut.isGroup?Ut.children.forEach(Vt=>{Vt.geometry&&Vt.geometry.dispose(),Vt.material&&Vt.material.dispose()}):(Ut.geometry&&Ut.geometry.dispose(),Ut.material&&Ut.material.dispose()),Ht.remove(Ut)}for(let Ut=0;Ut<at;Ut++)for(let Vt=0;Vt<at;Vt++)if(te[Ut][Vt]===1){const Xt=new Va(mt,Ft,mt),kt=new ei(Xt,qt);if(kt.position.set((Ut-at/2)*mt,Ft/2,(Vt-at/2)*mt),Ht.add(kt),Ut===0||Ut===at-1||Vt===0||Vt===at-1){if(Ut<at-1&&te[Ut+1][Vt]===1){const Rt=new ei(new Va(mt,Ft,mt),qt);Rt.position.set((Ut-at/2+.5)*mt,Ft/2,(Vt-at/2)*mt),Ht.add(Rt)}if(Vt<at-1&&te[Ut][Vt+1]===1){const Rt=new ei(new Va(mt,Ft,mt),qt);Rt.position.set((Ut-at/2)*mt,Ft/2,(Vt-at/2+.5)*mt),Ht.add(Rt)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),T.current.generateMaze=O,T.current.createWalls=Et;const Bt=Ut=>{if(console.log("Setting initial player direction"),!Ut){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Vt=1,Xt=1,kt=[{dx:0,dz:1,name:"down",vector:new W(0,0,1)},{dx:1,dz:0,name:"right",vector:new W(1,0,0)},{dx:0,dz:-1,name:"up",vector:new W(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new W(-1,0,0)}];console.log("Checking available directions from starting position:",Vt,Xt);const Rt=kt.filter(Ct=>{const le=Vt+Ct.dx,he=Xt+Ct.dz;if(le===0&&he===1)return console.log(`Direction ${Ct.name} leads to entrance, skipping`),!1;const Ee=zt(le,he)&&te[le][he]===0;return console.log(`Direction ${Ct.name} leads to (${le}, ${he}): ${Ee?"valid":"invalid"}`),Ee});if(console.log("Valid directions:",Rt.map(Ct=>Ct.name)),Rt.length>0){const Ct=Rt[0];console.log("Chosen direction:",Ct.name),I.current.direction.copy(Ct.vector);const le=Math.atan2(Ct.vector.x,Ct.vector.z);Ut.rotation.y=le,console.log("Set player rotation to:",le)}else console.log("No valid directions found, defaulting to down"),I.current.direction.set(0,0,1),Ut.rotation.y=0};T.current.setInitialPlayerDirection=Bt,e?console.log("Game has been won, preserving maze and player position"):(O(),Et(),console.log("Initial maze created"));const Zt=new F_(16777215,.6);A.add(Zt);const U=new B_(16777215,1);U.position.set(50,100,50),A.add(U);const wt=new z_(4474111,2,150);wt.position.set(50,50,50),A.add(wt);const xt=new z_(4474111,2,150);xt.position.set(-50,50,-50),A.add(xt),console.log("Lights added");let Gt=!1;const ee=performance.now(),Ue=1e3,Se=()=>{console.log("Celebration function called - START");const Ut=2e3,Vt=new Oi,Xt=new Float32Array(Ut*3),kt=new Float32Array(Ut*3);for(let w=0;w<Ut;w++)Xt[w*3]=I.current.worldPosition.x,Xt[w*3+1]=I.current.worldPosition.y,Xt[w*3+2]=I.current.worldPosition.z,kt[w*3]=Math.random(),kt[w*3+1]=Math.random(),kt[w*3+2]=Math.random();Vt.setAttribute("position",new pi(Xt,3)),Vt.setAttribute("color",new pi(kt,3));const Rt=new T0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:mh}),Ct=new sA(Vt,Rt);A.add(Ct),console.log("Particle system added to scene");const le=[];for(let w=0;w<Ut;w++){const K=Math.random()*Math.PI*2,$=Math.acos(Math.random()*2-1),it=.05+Math.random()*.1;le.push(Math.sin($)*Math.cos(K)*it,Math.sin($)*Math.sin(K)*it,Math.cos($)*it)}N.current=Ct;const he=()=>{if(console.log("Update particles function called - frame"),!ht.current)return console.log("Game no longer in won state, cleaning up particles"),Ct.parent&&(A.remove(Ct),Ct.geometry.dispose(),Rt.dispose()),N.current=null,rt.current=null,!1;const w=Ct.geometry.attributes.position.array;let K=!1;for(let it=0;it<Ut;it++){const tt=it*3;w[tt]+=le[tt],w[tt+1]+=le[tt+1],w[tt+2]+=le[tt+2],le[tt+1]-=.001;const It=w[tt]-I.current.worldPosition.x,$t=w[tt+1]-I.current.worldPosition.y,ie=w[tt+2]-I.current.worldPosition.z;Math.sqrt(It*It+$t*$t+ie*ie)<20&&(K=!0)}Ct.geometry.attributes.position.needsUpdate=!0;const $=performance.now()-Ee;return $>1e3&&(Rt.opacity=Math.max(0,1-($-1e3)/1e3)),!K||$>2e3?(console.log("Animation complete, cleaning up particles"),A.remove(Ct),Ct.geometry.dispose(),Rt.dispose(),N.current=null,rt.current=null,!1):!0},Ee=performance.now();return console.log("Setting updateParticles function"),rt.current=he,()=>{console.log("Cleanup function called"),Ct.parent&&(A.remove(Ct),Ct.geometry.dispose(),Rt.dispose()),N.current=null,rt.current=null}},ze=()=>{if(!A)return;console.log("Creating player...");const Ut=window.MAZE_SIZE||21,Vt=window.WALL_THICKNESS||2,Xt=new Mc(.4,32,32),kt=new oA({color:16763904,roughness:.3,metalness:.7,envMapIntensity:.9}),Rt=new ei(Xt,kt);Rt.castShadow=!0,Rt.receiveShadow=!0;const Ct=1,le=1,he=(Ct-Ut/2)*Vt,Ee=(le-Ut/2)*Vt;return Rt.position.set(he,Vt/2,Ee),A.add(Rt),I.current={position:{x:Ct,z:le},velocity:{x:0,z:0},direction:new W(0,0,1),worldPosition:new W(he,Vt/2,Ee),mesh:Rt},console.log(`Player created at entrance - Maze coords: (${Ct},${le}), World coords: (${he},${Ee})`),Rt},Re=ze();T.current.createPlayer=ze;let xe=null;if(e){for(let Ut=0;Ut<Ht.children.length;Ut++){const Vt=Ht.children[Ut];if(Vt.isGroup&&Vt.children.length>0&&Vt.children[0].geometry instanceof Mc){xe=Vt;break}}xe&&(xe.children.forEach(Ut=>{Ut.geometry&&Ut.geometry.dispose(),Ut.material&&Ut.material.dispose()}),Ht.remove(xe),console.log("Removed existing player from maze group"))}if(!e)Re.position.set((1-at/2)*mt,mt/2,(1-at/2)*mt),I.current.mesh=Re,I.current.worldPosition.copy(Re.position),Bt(Re);else{if(st.current){const Vt=at-1,Xt=at-2,kt=new W((Vt-at/2)*mt,mt/2,(Xt-at/2)*mt);console.log("Positioning player at exit:",kt),Re.position.copy(kt),I.current.worldPosition.copy(kt),I.current.position={x:Vt,z:Xt}}else console.log("Using existing player position:",I.current.worldPosition),Re.position.copy(I.current.worldPosition);I.current.mesh=Re;const Ut=Math.atan2(I.current.direction.x,I.current.direction.z);Re.rotation.y=Ut}Ht.add(Re),I.current.mesh=Re,console.log("Player created and added to maze group");const qe=Ut=>{if(Ut.key.toLowerCase()==="v")return console.log("View toggle key pressed"),Ut.preventDefault(),Ut.stopPropagation(),Ut.stopImmediatePropagation(),h?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),d(Vt=>{const Xt=!Vt;console.log("Switching to:",Xt?"POV mode":"Top-down mode"),pt.current=Xt;const kt=Lt.position.clone(),Rt=new W().copy(Yt.target),Ct=Lt.fov,le={x:Ht.rotation.x,y:Ht.rotation.y,z:Ht.rotation.z},he=Xt?new W(I.current.worldPosition.x,I.current.worldPosition.y+1.5,I.current.worldPosition.z):new W(0,Dt(),0),Ee=Xt?new W(I.current.worldPosition.x+I.current.direction.x*mt,I.current.worldPosition.y+1.5,I.current.worldPosition.z+I.current.direction.z*mt):new W(0,0,0),w=window.innerWidth<768,K=window.innerWidth>window.innerHeight;let $=Xt?75:60;w&&($=Xt||K?75:80);const it={x:0,y:0,z:0},tt=Re.visible?1:0,It=Xt?0:1;Re.visible=!0,Re.children.forEach(de=>{de.material&&(de.material.transparent||(de.material.transparent=!0),de.material.opacity=tt)}),F.current||(Yt.enabled=!1);const $t=1200;let ie=null;const Qt=de=>{const pe=de-ve,He=Math.min(pe/$t,1),Ge=(Ae=>Ae<.5?4*Ae*Ae*Ae:1-Math.pow(-2*Ae+2,3)/2)(He);Lt.position.lerpVectors(kt,he,Ge);const On=new W().lerpVectors(Rt,Ee,Ge);if(F.current||Yt.target.copy(On),Lt.lookAt(On),Lt.fov=dr.lerp(Ct,$,Ge),Lt.updateProjectionMatrix(),Ht.rotation.x=dr.lerp(le.x,it.x,Ge),Ht.rotation.y=dr.lerp(le.y,it.y,Ge),Ht.rotation.z=dr.lerp(le.z,it.z,Ge),Re.children.forEach(Ae=>{Ae.material&&(Ae.material.opacity=dr.lerp(tt,It,Ge))}),He===1){cancelAnimationFrame(ie),Re.visible=!Xt,Re.children.forEach(Ae=>{Ae.material&&(Ae.material.opacity=It,It===1&&(Ae.material.transparent=!1))}),!F.current&&!Xt?(Yt.enabled=!0,Yt.enableRotate=!0,Yt.enableZoom=!0,Yt.enablePan=!0):(Lt.position.copy(he),Lt.lookAt(Ee)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}ie=requestAnimationFrame(Qt)},ve=performance.now();return ie=requestAnimationFrame(Qt),Xt}),!1)},tn=Ut=>{if(ht.current||!Gt||h){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Vt=Ut.key.toLowerCase();if(console.log("Key pressed:",Vt,"Current mode:",pt.current?"POV":"Top-down"),Vt==="v")return;Ut.preventDefault();const Xt=I.current.position.x,kt=I.current.position.z;let Rt=Xt,Ct=kt,le=!1;const he=I.current.mesh;if(!he){console.error("Player mesh not found");return}if(pt.current){switch(console.log("Handling POV mode controls"),Vt){case"arrowup":case"w":console.log("Moving forward - Current position:",Xt,kt),console.log("Current direction:",I.current.direction),Rt=Xt+Math.round(I.current.direction.x),Ct=kt+Math.round(I.current.direction.z),console.log("New position will be:",Rt,Ct),le="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",Xt,kt),console.log("Current direction:",I.current.direction),Rt=Xt-Math.round(I.current.direction.x),Ct=kt-Math.round(I.current.direction.z),console.log("New position will be:",Rt,Ct),le="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",I.current.direction),I.current.direction.applyAxisAngle(new W(0,1,0),Math.PI/2),console.log("New direction:",I.current.direction),le="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",I.current.direction),I.current.direction.applyAxisAngle(new W(0,1,0),-Math.PI/2),console.log("New direction:",I.current.direction),le="rotate";break}if(le==="move")if(zt(Rt,Ct)&&te[Rt][Ct]===0){console.log("Movement is valid, updating positions"),I.current.position.x=Rt,I.current.position.z=Ct;const Ee=new W((Rt-at/2)*mt,mt/2,(Ct-at/2)*mt);console.log("New world position:",Ee),I.current.worldPosition.copy(Ee),he.position.copy(Ee),console.log("Updated player mesh position to:",he.position),Lt.position.set(Ee.x,Ee.y+1.5,Ee.z),console.log("New camera position:",Lt.position);const w=Lt.position.clone();if(w.add(I.current.direction.clone().multiplyScalar(mt)),Lt.lookAt(w),console.log("Camera looking at:",w),Lt.updateProjectionMatrix(),Lt.updateMatrixWorld(),Rt===at-1&&Ct===at-2){st.current=!0,i(!0),l(!0);const K=Se();return()=>{K&&K()}}}else console.log("Movement blocked - Out of bounds or wall:",Rt,Ct);else if(le==="rotate"){console.log("Handling rotation");const Ee=Math.atan2(I.current.direction.x,I.current.direction.z);he.rotation.y=Ee,console.log("Updated player mesh rotation to:",Ee);const w=Lt.position.clone();w.add(I.current.direction.clone().multiplyScalar(mt)),Lt.lookAt(w),console.log("Camera looking at new direction:",w),Lt.updateProjectionMatrix(),Lt.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Vt){case"arrowup":case"w":console.log("Moving up - Current position:",Xt,kt),Ct=kt-1,I.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",Xt,kt),Ct=kt+1,I.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",Xt,kt),Rt=Xt-1,I.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",Xt,kt),Rt=Xt+1,I.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",Rt,Ct),console.log("Maze value at target position:",te[Rt][Ct]),console.log("Is in bounds:",zt(Rt,Ct)),zt(Rt,Ct)&&te[Rt][Ct]===0){console.log("Movement is valid, updating positions"),I.current.position.x=Rt,I.current.position.z=Ct;const Ee=new W((Rt-at/2)*mt,mt/2,(Ct-at/2)*mt);I.current.worldPosition.copy(Ee),he.position.copy(Ee);const w=Math.atan2(I.current.direction.x,I.current.direction.z);if(he.rotation.y=w,Rt===at-1&&Ct===at-2){st.current=!0,i(!0),l(!0);const K=Se();return()=>{K&&K()}}}}};window.removeEventListener("keydown",qe,!0),window.removeEventListener("keydown",tn),console.log("Attaching event listeners"),window.addEventListener("keydown",qe,!0),window.addEventListener("keydown",tn),console.log("Event listeners attached");let Pi;return console.log("Starting animation"),Pt(),window.addEventListener("resize",vt),()=>{console.log("Cleanup running"),window.removeEventListener("resize",vt),window.removeEventListener("keydown",qe,!0),window.removeEventListener("keydown",tn),Pi&&cancelAnimationFrame(Pi),A.traverse(Ut=>{Ut.geometry&&Ut.geometry.dispose(),Ut.material&&(Array.isArray(Ut.material)?Ut.material.forEach(Vt=>Vt.dispose()):Ut.material.dispose())}),lt.dispose(),Yt&&typeof Yt.dispose=="function"&&Yt.dispose()}}catch(Pt){console.error("Error in setup:",Pt)}},[]),ge.useEffect(()=>{const Pt=()=>{const A=Y();return A&&(!At()||ft()&&!M)&&(console.log("Setting up touch controls for mobile"),B(!0)),vt(),A},vt=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const A=E=>{console.log("Device orientation event received:",E),window.removeEventListener("deviceorientation",A)};window.addEventListener("deviceorientation",A,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};Pt()},[M]);const ct=ge.useRef(null),Mt=ge.useRef(null),jt=ge.useRef(null),Nt=ge.useRef(null);ge.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const Pt=_t=>{if(e||h)return;const Ft=.1;switch(_t){case"up":I.current.velocity.z-=Ft,I.current.direction.set(0,0,-1);break;case"down":I.current.velocity.z+=Ft,I.current.direction.set(0,0,1);break;case"left":I.current.velocity.x-=Ft,I.current.direction.set(-1,0,0);break;case"right":I.current.velocity.x+=Ft,I.current.direction.set(1,0,0);break}const mt=.2,Dt=I.current.velocity,Kt=Math.sqrt(Dt.x*Dt.x+Dt.z*Dt.z);Kt>mt&&(Dt.x=Dt.x/Kt*mt,Dt.z=Dt.z/Kt*mt)},vt=(_t,Ft)=>(_t.preventDefault(),_t.stopPropagation(),Pt(Ft),!1),A=(_t,Ft)=>{if(!_t.current)return;const mt=_t.current,Dt=Yt=>vt(Yt,Ft),Kt=Yt=>Yt.preventDefault(),Lt=Yt=>vt(Yt,Ft),yt=Yt=>vt(Yt,Ft);return mt.addEventListener("touchstart",Dt,{passive:!1}),mt.addEventListener("touchend",Kt,{passive:!1}),mt.addEventListener("mousedown",Lt),mt.addEventListener("click",yt),()=>{mt.removeEventListener("touchstart",Dt),mt.removeEventListener("touchend",Kt),mt.removeEventListener("mousedown",Lt),mt.removeEventListener("click",yt)}},E=A(ct,"up"),X=A(Mt,"down"),lt=A(jt,"left"),at=A(Nt,"right");return()=>{E&&E(),X&&X(),lt&&lt(),at&&at()}},[D]),ge.useEffect(()=>{const Pt=()=>{let E=document.querySelector('meta[name="viewport"]');E||(E=document.createElement("meta"),E.name="viewport",document.head.appendChild(E)),E.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},vt=E=>{E.touches&&E.touches.length>1&&E.preventDefault()},A=E=>{E.preventDefault()};return Pt(),document.addEventListener("touchmove",vt,{passive:!1}),document.addEventListener("touchstart",A,{passive:!1}),()=>{document.removeEventListener("touchmove",vt),document.removeEventListener("touchstart",A)}},[]),ge.useEffect(()=>{if(!window.gameCamera||pt.current)return;const vt=setTimeout(()=>{const A=window.gameCamera;if(A&&!pt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const E=window.calculateOptimalCameraHeight(D);A.position.y=E,A.updateProjectionMatrix(),console.log(`Adjusted camera height to ${E} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(vt)},[D]);const Ot=()=>{if(!M||e||h)return;const Pt=window.maze||H.current;if(!Pt){console.warn("No maze available for physics update");return}const vt=window.MAZE_SIZE||21,A=window.WALL_THICKNESS||2,E=I.current,X=E.velocity,lt=E.position,at=E.mesh;if(!at){console.warn("No player mesh available for physics update");return}const _t=window.physics||{},Ft=_t.gravityX||0,mt=_t.gravityZ||0,Dt=.01,Kt=.97,Lt=.5,yt=.45;if(X.x+=Ft*Dt,X.z+=mt*Dt,X.x*=Kt,X.z*=Kt,Math.abs(X.x)<2e-4&&Math.abs(X.z)<2e-4)return;const Yt=lt.x,te=lt.z;let Ht=lt.x+X.x,qt=lt.z+X.z;const zt=(Gt,ee)=>Gt<0||Gt>=vt||ee<0||ee>=vt?!0:Pt[Gt][ee]===1,ue=Math.floor(lt.x),O=Math.floor(lt.z);lt.x-ue,lt.z-O,lt.x=Ht;const Et=Math.floor(lt.x);lt.x-Et;let Bt=!1;X.x>0&&Et+1<vt&&zt(Et+1,Math.floor(lt.z))?Et+1-lt.x<yt&&(Bt=!0,lt.x=Et+1-yt-.01,X.x=-X.x*Lt):X.x<0&&Et>=0&&zt(Et,Math.floor(lt.z))&&lt.x-Et<yt&&(Bt=!0,lt.x=Et+yt+.01,X.x=-X.x*Lt),lt.z=qt;const Zt=Math.floor(lt.z);lt.z-Zt;let U=!1;X.z>0&&Zt+1<vt&&zt(Math.floor(lt.x),Zt+1)?Zt+1-lt.z<yt&&(U=!0,lt.z=Zt+1-yt-.01,X.z=-X.z*Lt):X.z<0&&Zt>=0&&zt(Math.floor(lt.x),Zt)&&lt.z-Zt<yt&&(U=!0,lt.z=Zt+yt+.01,X.z=-X.z*Lt),zt(Et,Zt)&&!Bt&&!U&&(X.x=-X.x*Lt,X.z=-X.z*Lt,lt.x=Yt,lt.z=te),zt(Math.floor(lt.x),Math.floor(lt.z))&&(lt.x=Yt,lt.z=te,X.x=0,X.z=0);const wt=(lt.x-vt/2)*A,xt=(lt.z-vt/2)*A;if(E.worldPosition&&E.worldPosition.set(wt,A/2,xt),at.position.copy(E.worldPosition),Math.abs(X.x)>.01||Math.abs(X.z)>.01){const Gt=Math.atan2(X.x,X.z);at.rotation.y=Gt,E.direction.set(X.x,0,X.z).normalize()}Math.floor(lt.x)===vt-2&&Math.floor(lt.z)===vt-2&&(console.log("Victory reached!"),i(!0),celebrate())},ae=()=>{console.log("⚡ Initializing physics system");const Pt=window.MAZE_SIZE||21,vt=window.WALL_THICKNESS||2;if(I.current){I.current.position={x:1,z:1},I.current.velocity={x:0,z:0};const A=(1-Pt/2)*vt,E=(1-Pt/2)*vt;console.log(`Converting maze coords (1,1) to world coords (${A}, ${E})`),I.current.worldPosition?I.current.worldPosition.set(A,vt/2,E):I.current.worldPosition=new W(A,vt/2,E),I.current.mesh&&(I.current.mesh.position.copy(I.current.worldPosition),console.log(`Set player mesh position to world coords: (${I.current.worldPosition.x}, ${I.current.worldPosition.y}, ${I.current.worldPosition.z})`))}window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:0,mazeSize:Pt,wallThickness:vt},console.log("Physics initialized - player at entrance position with gravity-based movement")};ge.useEffect(()=>{let Pt,vt=0;const A=1e3/60;let E=0;function X(lt){if(Pt=requestAnimationFrame(X),vt===0){vt=lt;return}const at=lt-vt;for(vt=lt,E+=at;E>=A;)F.current&&M&&!e&&!h&&Ot(),E-=A}return Pt=requestAnimationFrame(X),()=>{Pt&&cancelAnimationFrame(Pt)}},[M,e,h]),ge.useEffect(()=>{I.current?I.current.worldPosition||(I.current.worldPosition=new W(2,0,2),console.log("Added missing worldPosition to existing playerRef")):(I.current={position:{x:1,z:1},velocity:{x:0,z:0},direction:new W(0,0,1),worldPosition:new W(2,0,2),mesh:null},console.log("Initialized playerRef with default values including worldPosition"))},[]),ge.useEffect(()=>{const Pt=()=>{if(!Y()){console.log("Not a mobile device, skipping orientation lock");return}try{window.screen&&window.screen.orientation?window.screen.orientation.lock("portrait").then(()=>console.log("✓ Orientation locked to portrait")).catch(vt=>console.warn("Cannot lock orientation:",vt)):window.orientation!==void 0&&(console.log("Using orientation event fallback for iOS"),window.addEventListener("orientationchange",function(){window.orientation===90||window.orientation===-90?J("Please rotate your device to portrait mode"):J("")}))}catch(vt){console.warn("Orientation locking not supported:",vt)}};return Y()?(console.log("Mobile device detected, locking to portrait orientation"),Pt(),Ie("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait")):(console.log("Desktop device detected, allowing any orientation"),Ie("width=device-width, initial-scale=1.0")),()=>{window.removeEventListener("orientationchange",()=>{})}},[]);const[oe,J]=ge.useState(""),Ie=Pt=>{let vt=document.querySelector('meta[name="viewport"]');if(vt||(vt=document.createElement("meta"),vt.name="viewport",document.head.appendChild(vt)),vt.setAttribute("content",Pt),console.log("✓ Viewport meta set:",Pt),Y()){let A=document.querySelector('meta[name="screen-orientation"]');A||(A=document.createElement("meta"),A.name="screen-orientation",document.head.appendChild(A)),A.setAttribute("content","portrait")}},re=()=>{if(!Y())return J(""),window.physics&&(window.physics.active=!0),!0;const Pt=window.matchMedia("(orientation: landscape)").matches;return Pt?(J("Please rotate your device to portrait mode"),window.physics&&(window.physics.active=!1)):(J(""),window.physics&&(window.physics.active=!0)),!Pt};ge.useEffect(()=>{re();const Pt=()=>{re(),Jt.current&&!u&&setTimeout(()=>{const vt=calculateOptimalCameraHeight(D);Jt.current.position.y=vt},300)};if(Y()){window.addEventListener("orientationchange",Pt),window.addEventListener("resize",Pt);const vt=window.matchMedia("(orientation: portrait)");return vt.addEventListener("change",Pt),()=>{window.removeEventListener("orientationchange",Pt),window.removeEventListener("resize",Pt),vt.removeEventListener("change",Pt)}}},[u,D]);const fe={position:"fixed",top:0,left:0,width:"100%",height:"100%",display:oe?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.85)",color:"white",fontSize:"1.5rem",textAlign:"center",padding:"2rem",zIndex:9999,fontFamily:"Arial, sans-serif"},Jt=ge.useRef(null);return ge.useRef(null),ge.useRef(null),ge.useRef(null),We.jsxs(We.Fragment,{children:[We.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),r&&We.jsxs("div",{className:"victory-message",children:[We.jsx("h1",{children:"You Win!"}),We.jsx("button",{onClick:L,children:"Play Again"})]}),D&&We.jsxs("div",{className:"touch-controls",children:[We.jsxs("div",{className:"touch-controls-row",children:[We.jsx("div",{className:"touch-button-spacer"}),We.jsx("div",{ref:ct,className:"touch-button up-button",children:"▲"}),We.jsx("div",{className:"touch-button-spacer"})]}),We.jsxs("div",{className:"touch-controls-row",children:[We.jsx("div",{ref:jt,className:"touch-button left-button",children:"◀"}),We.jsx("div",{className:"touch-button-spacer"}),We.jsx("div",{ref:Nt,className:"touch-button right-button",children:"▶"})]}),We.jsxs("div",{className:"touch-controls-row",children:[We.jsx("div",{className:"touch-button-spacer"}),We.jsx("div",{ref:Mt,className:"touch-button down-button",children:"▼"}),We.jsx("div",{className:"touch-button-spacer"})]})]}),m&&We.jsx("div",{className:"view-mode-indicator",children:u?"First Person View":"Top-Down View"}),We.jsxs("div",{style:fe,children:[We.jsx("div",{style:{marginBottom:"1rem"},children:We.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",children:We.jsx("path",{fill:"white",d:"M7.5,21.5C4.25,21.5 1.5,18.75 1.5,15.5V8.5C1.5,5.5 4,3 7,3H17C20,3 22.5,5.5 22.5,8.5V15.5C22.5,18.75 19.75,21.5 16.5,21.5H7.5M7,5C5.17,5 3.5,6.67 3.5,8.5V15.5C3.5,17.7 5.3,19.5 7.5,19.5H16.5C18.7,19.5 20.5,17.7 20.5,15.5V8.5C20.5,6.67 18.83,5 17,5H7M7,8H17V16H7V8M12,17H7V19H12V17Z"})})}),We.jsx("p",{style:{margin:"0 0 1rem 0"},children:oe}),We.jsx("div",{style:{marginTop:"1rem",fontSize:"1rem",opacity:.8},children:"The maze game works best in portrait orientation on mobile devices"})]})]})}Fy.createRoot(document.getElementById("root")).render(We.jsx(ge.StrictMode,{children:We.jsx(hA,{})}));
