(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Cx(){if(eg)return Ro;eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var ng;function Dx(){return ng||(ng=1,Lf.exports=Cx()),Lf.exports}var re=Dx(),Uf={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Lx(){if(ig)return Ee;ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function v(D,K,pt){this.props=D,this.context=K,this.refs=C,this.updater=pt||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=v.prototype;function P(D,K,pt){this.props=D,this.context=K,this.refs=C,this.updater=pt||M}var L=P.prototype=new _;L.constructor=P,A(L,v.prototype),L.isPureReactComponent=!0;var B=Array.isArray,W={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function F(D,K,pt,wt,X,dt){return pt=dt.ref,{$$typeof:o,type:D,key:K,ref:pt!==void 0?pt:null,props:dt}}function vt(D,K){return F(D.type,K,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function b(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pt){return K[pt]})}var N=/\/+/g;function mt(D,K){return typeof D=="object"&&D!==null&&D.key!=null?b(""+D.key):K.toString(36)}function bt(){}function j(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(bt,bt):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function st(D,K,pt,wt,X){var dt=typeof D;(dt==="undefined"||dt==="boolean")&&(D=null);var Et=!1;if(D===null)Et=!0;else switch(dt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(D.$$typeof){case o:case e:Et=!0;break;case g:return Et=D._init,st(Et(D._payload),K,pt,wt,X)}}if(Et)return X=X(D),Et=wt===""?"."+mt(D,0):wt,B(X)?(pt="",Et!=null&&(pt=Et.replace(N,"$&/")+"/"),st(X,K,pt,"",function(Ft){return Ft})):X!=null&&(I(X)&&(X=vt(X,pt+(X.key==null||D&&D.key===X.key?"":(""+X.key).replace(N,"$&/")+"/")+Et)),K.push(X)),1;Et=0;var Zt=wt===""?".":wt+":";if(B(D))for(var Bt=0;Bt<D.length;Bt++)wt=D[Bt],dt=Zt+mt(wt,Bt),Et+=st(wt,K,pt,dt,X);else if(Bt=S(D),typeof Bt=="function")for(D=Bt.call(D),Bt=0;!(wt=D.next()).done;)wt=wt.value,dt=Zt+mt(wt,Bt++),Et+=st(wt,K,pt,dt,X);else if(dt==="object"){if(typeof D.then=="function")return st(j(D),K,pt,wt,X);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Et}function G(D,K,pt){if(D==null)return D;var wt=[],X=0;return st(D,wt,"","",function(dt){return K.call(pt,dt,X++)}),wt}function ot(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(pt){(D._status===0||D._status===-1)&&(D._status=1,D._result=pt)},function(pt){(D._status===0||D._status===-1)&&(D._status=2,D._result=pt)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var $=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ut(){}return Ee.Children={map:G,forEach:function(D,K,pt){G(D,function(){K.apply(this,arguments)},pt)},count:function(D){var K=0;return G(D,function(){K++}),K},toArray:function(D){return G(D,function(K){return K})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ee.Component=v,Ee.Fragment=i,Ee.Profiler=l,Ee.PureComponent=P,Ee.StrictMode=r,Ee.Suspense=p,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Ee.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ee.cache=function(D){return function(){return D.apply(null,arguments)}},Ee.cloneElement=function(D,K,pt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var wt=A({},D.props),X=D.key,dt=void 0;if(K!=null)for(Et in K.ref!==void 0&&(dt=void 0),K.key!==void 0&&(X=""+K.key),K)!V.call(K,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&K.ref===void 0||(wt[Et]=K[Et]);var Et=arguments.length-2;if(Et===1)wt.children=pt;else if(1<Et){for(var Zt=Array(Et),Bt=0;Bt<Et;Bt++)Zt[Bt]=arguments[Bt+2];wt.children=Zt}return F(D.type,X,void 0,void 0,dt,wt)},Ee.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Ee.createElement=function(D,K,pt){var wt,X={},dt=null;if(K!=null)for(wt in K.key!==void 0&&(dt=""+K.key),K)V.call(K,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(X[wt]=K[wt]);var Et=arguments.length-2;if(Et===1)X.children=pt;else if(1<Et){for(var Zt=Array(Et),Bt=0;Bt<Et;Bt++)Zt[Bt]=arguments[Bt+2];X.children=Zt}if(D&&D.defaultProps)for(wt in Et=D.defaultProps,Et)X[wt]===void 0&&(X[wt]=Et[wt]);return F(D,dt,void 0,void 0,null,X)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(D){return{$$typeof:d,render:D}},Ee.isValidElement=I,Ee.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:ot}},Ee.memo=function(D,K){return{$$typeof:m,type:D,compare:K===void 0?null:K}},Ee.startTransition=function(D){var K=W.T,pt={};W.T=pt;try{var wt=D(),X=W.S;X!==null&&X(pt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(ut,$)}catch(dt){$(dt)}finally{W.T=K}},Ee.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Ee.use=function(D){return W.H.use(D)},Ee.useActionState=function(D,K,pt){return W.H.useActionState(D,K,pt)},Ee.useCallback=function(D,K){return W.H.useCallback(D,K)},Ee.useContext=function(D){return W.H.useContext(D)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(D,K){return W.H.useDeferredValue(D,K)},Ee.useEffect=function(D,K){return W.H.useEffect(D,K)},Ee.useId=function(){return W.H.useId()},Ee.useImperativeHandle=function(D,K,pt){return W.H.useImperativeHandle(D,K,pt)},Ee.useInsertionEffect=function(D,K){return W.H.useInsertionEffect(D,K)},Ee.useLayoutEffect=function(D,K){return W.H.useLayoutEffect(D,K)},Ee.useMemo=function(D,K){return W.H.useMemo(D,K)},Ee.useOptimistic=function(D,K){return W.H.useOptimistic(D,K)},Ee.useReducer=function(D,K,pt){return W.H.useReducer(D,K,pt)},Ee.useRef=function(D){return W.H.useRef(D)},Ee.useState=function(D){return W.H.useState(D)},Ee.useSyncExternalStore=function(D,K,pt){return W.H.useSyncExternalStore(D,K,pt)},Ee.useTransition=function(){return W.H.useTransition()},Ee.version="19.0.0",Ee}var ag;function Ad(){return ag||(ag=1,Uf.exports=Lx()),Uf.exports}var be=Ad(),Nf={exports:{}},Co={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Ux(){return rg||(rg=1,function(o){function e(G,ot){var $=G.length;G.push(ot);t:for(;0<$;){var ut=$-1>>>1,D=G[ut];if(0<l(D,ot))G[ut]=ot,G[$]=D,$=ut;else break t}}function i(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ot=G[0],$=G.pop();if($!==ot){G[0]=$;t:for(var ut=0,D=G.length,K=D>>>1;ut<K;){var pt=2*(ut+1)-1,wt=G[pt],X=pt+1,dt=G[X];if(0>l(wt,$))X<D&&0>l(dt,wt)?(G[ut]=dt,G[X]=$,ut=X):(G[ut]=wt,G[pt]=$,ut=pt);else if(X<D&&0>l(dt,$))G[ut]=dt,G[X]=$,ut=X;else break t}}return ot}function l(G,ot){var $=G.sortIndex-ot.sortIndex;return $!==0?$:G.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,S=3,M=!1,A=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(G){for(var ot=i(m);ot!==null;){if(ot.callback===null)r(m);else if(ot.startTime<=G)r(m),ot.sortIndex=ot.expirationTime,e(p,ot);else break;ot=i(m)}}function B(G){if(C=!1,L(G),!A)if(i(p)!==null)A=!0,j();else{var ot=i(m);ot!==null&&st(B,ot.startTime-G)}}var W=!1,V=-1,F=5,vt=-1;function I(){return!(o.unstable_now()-vt<F)}function b(){if(W){var G=o.unstable_now();vt=G;var ot=!0;try{t:{A=!1,C&&(C=!1,_(V),V=-1),M=!0;var $=S;try{e:{for(L(G),x=i(p);x!==null&&!(x.expirationTime>G&&I());){var ut=x.callback;if(typeof ut=="function"){x.callback=null,S=x.priorityLevel;var D=ut(x.expirationTime<=G);if(G=o.unstable_now(),typeof D=="function"){x.callback=D,L(G),ot=!0;break e}x===i(p)&&r(p),L(G)}else r(p);x=i(p)}if(x!==null)ot=!0;else{var K=i(m);K!==null&&st(B,K.startTime-G),ot=!1}}break t}finally{x=null,S=$,M=!1}ot=void 0}}finally{ot?N():W=!1}}}var N;if(typeof P=="function")N=function(){P(b)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,bt=mt.port2;mt.port1.onmessage=b,N=function(){bt.postMessage(null)}}else N=function(){v(b,0)};function j(){W||(W=!0,N())}function st(G,ot){V=v(function(){G(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,j())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(G){switch(S){case 1:case 2:case 3:var ot=3;break;default:ot=S}var $=S;S=ot;try{return G()}finally{S=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,ot){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var $=S;S=G;try{return ot()}finally{S=$}},o.unstable_scheduleCallback=function(G,ot,$){var ut=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ut+$:ut):$=ut,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=$+D,G={id:g++,callback:ot,priorityLevel:G,startTime:$,expirationTime:D,sortIndex:-1},$>ut?(G.sortIndex=$,e(m,G),i(p)===null&&G===i(m)&&(C?(_(V),V=-1):C=!0,st(B,$-ut))):(G.sortIndex=D,e(p,G),A||M||(A=!0,j())),G},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(G){var ot=S;return function(){var $=S;S=ot;try{return G.apply(this,arguments)}finally{S=$}}}}(Pf)),Pf}var sg;function Nx(){return sg||(sg=1,Of.exports=Ux()),Of.exports}var zf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Ox(){if(og)return Dn;og=1;var o=Ad();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Dn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Dn.requestFormReset=function(p){r.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.0.0",Dn}var lg;function Px(){if(lg)return zf.exports;lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Ox(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function zx(){if(cg)return Co;cg=1;var o=Nx(),e=Ad(),i=Px();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case C:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,N,mt;function bt(t){if(N===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+t+mt}var j=!1;function st(t,n){if(!t||j)return"";j=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(gt){var lt=gt}Reflect.construct(t,[],At)}else{try{At.call()}catch(gt){lt=gt}t.call(At.prototype)}}else{try{throw Error()}catch(gt){lt=gt}(At=t())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(gt){if(gt&&lt&&typeof gt.stack=="string")return[gt.stack,lt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],w=f[1];if(y&&w){var z=y.split(`
`),Z=w.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Z.length)for(s=z.length-1,c=Z.length-1;1<=s&&0<=c&&z[s]!==Z[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Z[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Z[c]){var xt=`
`+z[s].replace(" at new "," at ");return t.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",t.displayName)),xt}while(1<=s&&0<=c);break}}}finally{j=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?bt(a):""}function G(t){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return t=st(t.type,!1),t;case 11:return t=st(t.type.render,!1),t;case 1:return t=st(t.type,!0),t;default:return""}}function ot(t){try{var n="";do n+=G(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ut(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function D(t){if($(t)!==t)throw Error(r(188))}function K(t){var n=t.alternate;if(!n){if(n=$(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return D(c),t;if(f===s)return D(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var y=!1,w=c.child;w;){if(w===a){y=!0,a=c,s=f;break}if(w===s){y=!0,s=c,a=f;break}w=w.sibling}if(!y){for(w=f.child;w;){if(w===a){y=!0,a=f,s=c;break}if(w===s){y=!0,s=f,a=c;break}w=w.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function pt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=pt(t),n!==null)return n;t=t.sibling}return null}var wt=Array.isArray,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},Et=[],Zt=-1;function Bt(t){return{current:t}}function Ft(t){0>Zt||(t.current=Et[Zt],Et[Zt]=null,Zt--)}function te(t,n){Zt++,Et[Zt]=t.current,t.current=n}var ne=Bt(null),J=Bt(null),Be=Bt(null),ie=Bt(null);function fe(t,n){switch(te(Be,n),te(J,t),te(ne,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Dm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Dm(t),n=Lm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ft(ne),te(ne,n)}function Qt(){Ft(ne),Ft(J),Ft(Be)}function ze(t){t.memoizedState!==null&&te(ie,t);var n=ne.current,a=Lm(n,t.type);n!==a&&(te(J,t),te(ne,a))}function _t(t){J.current===t&&(Ft(ne),Ft(J)),ie.current===t&&(Ft(ie),Eo._currentValue=dt)}var T=Object.prototype.hasOwnProperty,E=o.unstable_scheduleCallback,H=o.unstable_cancelCallback,rt=o.unstable_shouldYield,ht=o.unstable_requestPaint,nt=o.unstable_now,It=o.unstable_getCurrentPriorityLevel,Tt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,Ht=o.unstable_NormalPriority,se=o.unstable_LowPriority,ct=o.unstable_IdlePriority,Se=o.log,Gt=o.unstable_setDisableYieldValue,qt=null,Rt=null;function Nt(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(qt,t,void 0,(t.current.flags&128)===128)}catch{}}function Jt(t){if(typeof Se=="function"&&Gt(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(qt,t)}catch{}}var O=Math.clz32?Math.clz32:ee,Ct=Math.log,Vt=Math.LN2;function ee(t){return t>>>=0,t===0?32:31-(Ct(t)/Vt|0)|0}var U=128,yt=4194304;function ft(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ot(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,y=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=ft(a):(f&=w,f!==0?s=ft(f):t||(y=w&~y,y!==0&&(s=ft(y))))):(w=a&~c,w!==0?s=ft(w):f!==0?s=ft(f):t||(y=a&~y,y!==0&&(s=ft(y)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,y=n&-n,c>=y||c===32&&(y&4194176)!==0)?n:s}function kt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Me(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ge(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function we(){var t=yt;return yt<<=1,!(yt&62914560)&&(yt=4194304),t}function Ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ue(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function He(t,n,a,s,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,z=t.expirationTimes,Z=t.hiddenUpdates;for(a=y&~a;0<a;){var xt=31-O(a),At=1<<xt;w[xt]=0,z[xt]=-1;var lt=Z[xt];if(lt!==null)for(Z[xt]=null,xt=0;xt<lt.length;xt++){var gt=lt[xt];gt!==null&&(gt.lane&=-536870913)}a&=~At}s!==0&&tn(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function tn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-O(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function Ei(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-O(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function sa(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Lt(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Zm(t.type))}function Yt(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Pt=Math.random().toString(36).slice(2),zt="__reactFiber$"+Pt,Dt="__reactProps$"+Pt,Wt="__reactContainer$"+Pt,he="__reactEvents$"+Pt,_e="__reactListeners$"+Pt,R="__reactHandles$"+Pt,k="__reactResources$"+Pt,et="__reactMarker$"+Pt;function at(t){delete t[zt],delete t[Dt],delete t[he],delete t[_e],delete t[R]}function tt(t){var n=t[zt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wt]||a[zt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Om(t);t!==null;){if(a=t[zt])return a;t=Om(t)}return n}t=a,a=t.parentNode}return null}function Ut(t){if(t=t[zt]||t[Wt]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ae(t){var n=t[k];return n||(n=t[k]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function jt(t){t[et]=!0}var ve=new Set,me={};function le(t,n){Fe(t,n),Fe(t+"Capture",n)}function Fe(t,n){for(me[t]=n,t=0;t<n.length;t++)ve.add(n[t])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cn={},Ie={};function de(t){return T.call(Ie,t)?!0:T.call(cn,t)?!1:rn.test(t)?Ie[t]=!0:(cn[t]=!0,!1)}function oa(t,n,a){if(de(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Mn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function On(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function la(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(t){var n=la(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sn(t){t._valueTracker||(t._valueTracker=Ns(t))}function bi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=la(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hn=/[\n"\\]/g;function Rn(t){return t.replace(Hn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Os(t,n,a,s,c,f,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+On(n)):t.value!==""+On(n)&&(t.value=""+On(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,y,On(n)):a!=null?Cc(t,y,On(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+On(w):t.removeAttribute("name")}function Ps(t,n,a,s,c,f,y,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+On(a):"",n=n!=null?""+On(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=w?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Cc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function br(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+On(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function zd(t,n,a){if(n!=null&&(n=""+On(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+On(a):""}function Bd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(wt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=On(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Id(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Fd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Hd(t){var n=Ut(t);if(n&&(t=n.stateNode)){var a=t[Dt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Os(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Dt]||null;if(!c)throw Error(r(90));Os(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&bi(s)}break t;case"textarea":zd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&br(t,!!a.multiple,n,!1)}}}var Nc=!1;function Gd(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(bl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Hd(n),t)))for(n=0;n<t.length;n++)Hd(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Dt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(qe)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oc=!1}var ua=null,Pc=null,Vo=null;function Vd(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function kd(){return!1}function Gn(t){function n(a,s,c,f,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:kd,this.isPropagationStopped=kd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Gn(Wa),Fs=b({},Wa,{view:0,detail:0}),C0=Gn(Fs),zc,Bc,Is,qo=b({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(zc=t.screenX-Is.screenX,Bc=t.screenY-Is.screenY):Bc=zc=0,Is=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Wd=Gn(qo),D0=b({},qo,{dataTransfer:0}),L0=Gn(D0),U0=b({},Fs,{relatedTarget:0}),Fc=Gn(U0),N0=b({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Gn(N0),P0=b({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Gn(P0),B0=b({},Wa,{data:0}),Xd=Gn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=b({},Fs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Gn(V0),W0=b({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Gn(W0),X0=b({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Gn(X0),Y0=b({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Gn(Y0),Z0=b({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Gn(Z0),Q0=b({},Wa,{newState:0,oldState:0}),J0=Gn(Q0),$0=[9,13,27,32],Hc=qe&&"CompositionEvent"in window,Hs=null;qe&&"documentMode"in document&&(Hs=document.documentMode);var tv=qe&&"TextEvent"in window&&!Hs,Yd=qe&&(!Hc||Hs&&8<Hs&&11>=Hs),jd=" ",Zd=!1;function Kd(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Qd(n);case"keypress":return n.which!==32?null:(Zd=!0,jd);case"textInput":return t=n.data,t===jd&&Zd?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Kd(t,n)?(t=Vd(),Vo=Pc=ua=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yd&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function $d(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function av(t){Tm(t,0)}function Yo(t){var n=Kt(t);if(bi(n))return t}function th(t,n){if(t==="change")return n}var eh=!1;if(qe){var Gc;if(qe){var Vc="oninput"in document;if(!Vc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),Vc=typeof nh.oninput=="function"}Gc=Vc}else Gc=!1;eh=Gc&&(!document.documentMode||9<document.documentMode)}function ih(){Gs&&(Gs.detachEvent("onpropertychange",ah),Vs=Gs=null)}function ah(t){if(t.propertyName==="value"&&Yo(Vs)){var n=[];$d(n,Vs,t,Uc(t)),Gd(av,n)}}function rv(t,n,a){t==="focusin"?(ih(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",ah)):t==="focusout"&&ih()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Vs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:cv;function ks(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!T.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,n){var a=rh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rh(a)}}function oh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?oh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=lh(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&oh(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=sh(n,f);var y=sh(n,s);c&&y&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==y.node||a.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=qe&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,Ws=null,Xc=!1;function ch(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==ca(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&ks(Ws,s)||(Ws=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},qc={},uh={};qe&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in uh)return qc[t]=n[a];return t}var fh=qa("animationend"),dh=qa("animationiteration"),hh=qa("animationstart"),dv=qa("transitionrun"),hv=qa("transitionstart"),pv=qa("transitioncancel"),ph=qa("transitionend"),mh=new Map,gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function pi(t,n){mh.set(t,n),le(n,[t])}var ei=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&_h(a,c,f)}}function Zo(t,n,a,s){ei[Lr++]=t,ei[Lr++]=n,ei[Lr++]=a,ei[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function fa(t,n){return Zo(t,null,null,n),Ko(t)}function _h(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-O(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<go)throw go=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},vh=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=vh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ot(n)},vh.set(t,n),n)}return{value:t,source:n,stack:ot(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ii=[],ai=0,Ya=null,Pi=1,zi="";function ja(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function xh(t,n,a){ii[ai++]=Pi,ii[ai++]=zi,ii[ai++]=Ya,Ya=t;var s=Pi;t=zi;var c=32-O(s)-1;s&=~(1<<c),a+=1;var f=32-O(n)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Pi=1<<32-O(n)+c|a<<c|s,zi=f+t}else Pi=1<<f|a<<c|s,zi=t}function Zc(t){t.return!==null&&(ja(t,1),xh(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===Ya;)Ya=ii[--ai],ii[ai]=null,zi=ii[--ai],ii[ai]=null,Pi=ii[--ai],ii[ai]=null}var Pn=null,En=null,Oe=!1,mi=null,Ti=!1,Qc=Error(r(519));function Za(t){var n=Error(r(418,""));throw Ys(ni(n,t)),Qc}function yh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[zt]=t,n[Dt]=s,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)Le(vo[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),Ps(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),sn(n);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),Bd(n,s.value,s.defaultValue,s.children),sn(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cm(n.textContent,a)?(s.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),s.onScroll!=null&&Le("scroll",n),s.onScrollEnd!=null&&Le("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Za(t)}function Sh(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 3:case 27:Ti=!0;return;case 5:case 13:Ti=!1;return;default:Pn=Pn.return}}function Xs(t){if(t!==Pn)return!1;if(!Oe)return Sh(t),Oe=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&En&&Za(t),Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){En=_i(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}En=null}}else En=Pn?_i(t.stateNode.nextSibling):null;return!0}function qs(){En=Pn=null,Oe=!1}function Ys(t){mi===null?mi=[t]:mi.push(t)}var js=Error(r(460)),Mh=Error(r(474)),Jc={then:function(){}};function Eh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function bh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t}throw Zs=n,js}}var Zs=null;function Th(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}var Pr=null,Ks=0;function tl(t){var n=Ks;return Ks+=1,Pr===null&&(Pr=[]),bh(Pr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ah(t){var n=t._init;return n(t._payload)}function wh(t){function n(Q,q){if(t){var it=Q.deletions;it===null?(Q.deletions=[q],Q.flags|=16):it.push(q)}}function a(Q,q){if(!t)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function s(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function c(Q,q){return Q=Ea(Q,q),Q.index=0,Q.sibling=null,Q}function f(Q,q,it){return Q.index=it,t?(it=Q.alternate,it!==null?(it=it.index,it<q?(Q.flags|=33554434,q):it):(Q.flags|=33554434,q)):(Q.flags|=1048576,q)}function y(Q){return t&&Q.alternate===null&&(Q.flags|=33554434),Q}function w(Q,q,it,Mt){return q===null||q.tag!==6?(q=qu(it,Q.mode,Mt),q.return=Q,q):(q=c(q,it),q.return=Q,q)}function z(Q,q,it,Mt){var $t=it.type;return $t===p?xt(Q,q,it.props.children,Mt,it.key):q!==null&&(q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===P&&Ah($t)===q.type)?(q=c(q,it.props),Qs(q,it),q.return=Q,q):(q=xl(it.type,it.key,it.props,null,Q.mode,Mt),Qs(q,it),q.return=Q,q)}function Z(Q,q,it,Mt){return q===null||q.tag!==4||q.stateNode.containerInfo!==it.containerInfo||q.stateNode.implementation!==it.implementation?(q=Yu(it,Q.mode,Mt),q.return=Q,q):(q=c(q,it.children||[]),q.return=Q,q)}function xt(Q,q,it,Mt,$t){return q===null||q.tag!==7?(q=rr(it,Q.mode,Mt,$t),q.return=Q,q):(q=c(q,it),q.return=Q,q)}function At(Q,q,it){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=qu(""+q,Q.mode,it),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case h:return it=xl(q.type,q.key,q.props,null,Q.mode,it),Qs(it,q),it.return=Q,it;case d:return q=Yu(q,Q.mode,it),q.return=Q,q;case P:var Mt=q._init;return q=Mt(q._payload),At(Q,q,it)}if(wt(q)||V(q))return q=rr(q,Q.mode,it,null),q.return=Q,q;if(typeof q.then=="function")return At(Q,tl(q),it);if(q.$$typeof===M)return At(Q,gl(Q,q),it);el(Q,q)}return null}function lt(Q,q,it,Mt){var $t=q!==null?q.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return $t!==null?null:w(Q,q,""+it,Mt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case h:return it.key===$t?z(Q,q,it,Mt):null;case d:return it.key===$t?Z(Q,q,it,Mt):null;case P:return $t=it._init,it=$t(it._payload),lt(Q,q,it,Mt)}if(wt(it)||V(it))return $t!==null?null:xt(Q,q,it,Mt,null);if(typeof it.then=="function")return lt(Q,q,tl(it),Mt);if(it.$$typeof===M)return lt(Q,q,gl(Q,it),Mt);el(Q,it)}return null}function gt(Q,q,it,Mt,$t){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return Q=Q.get(it)||null,w(q,Q,""+Mt,$t);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case h:return Q=Q.get(Mt.key===null?it:Mt.key)||null,z(q,Q,Mt,$t);case d:return Q=Q.get(Mt.key===null?it:Mt.key)||null,Z(q,Q,Mt,$t);case P:var Re=Mt._init;return Mt=Re(Mt._payload),gt(Q,q,it,Mt,$t)}if(wt(Mt)||V(Mt))return Q=Q.get(it)||null,xt(q,Q,Mt,$t,null);if(typeof Mt.then=="function")return gt(Q,q,it,tl(Mt),$t);if(Mt.$$typeof===M)return gt(Q,q,it,gl(q,Mt),$t);el(q,Mt)}return null}function oe(Q,q,it,Mt){for(var $t=null,Re=null,ce=q,pe=q=0,yn=null;ce!==null&&pe<it.length;pe++){ce.index>pe?(yn=ce,ce=null):yn=ce.sibling;var Pe=lt(Q,ce,it[pe],Mt);if(Pe===null){ce===null&&(ce=yn);break}t&&ce&&Pe.alternate===null&&n(Q,ce),q=f(Pe,q,pe),Re===null?$t=Pe:Re.sibling=Pe,Re=Pe,ce=yn}if(pe===it.length)return a(Q,ce),Oe&&ja(Q,pe),$t;if(ce===null){for(;pe<it.length;pe++)ce=At(Q,it[pe],Mt),ce!==null&&(q=f(ce,q,pe),Re===null?$t=ce:Re.sibling=ce,Re=ce);return Oe&&ja(Q,pe),$t}for(ce=s(ce);pe<it.length;pe++)yn=gt(ce,Q,pe,it[pe],Mt),yn!==null&&(t&&yn.alternate!==null&&ce.delete(yn.key===null?pe:yn.key),q=f(yn,q,pe),Re===null?$t=yn:Re.sibling=yn,Re=yn);return t&&ce.forEach(function(Da){return n(Q,Da)}),Oe&&ja(Q,pe),$t}function ye(Q,q,it,Mt){if(it==null)throw Error(r(151));for(var $t=null,Re=null,ce=q,pe=q=0,yn=null,Pe=it.next();ce!==null&&!Pe.done;pe++,Pe=it.next()){ce.index>pe?(yn=ce,ce=null):yn=ce.sibling;var Da=lt(Q,ce,Pe.value,Mt);if(Da===null){ce===null&&(ce=yn);break}t&&ce&&Da.alternate===null&&n(Q,ce),q=f(Da,q,pe),Re===null?$t=Da:Re.sibling=Da,Re=Da,ce=yn}if(Pe.done)return a(Q,ce),Oe&&ja(Q,pe),$t;if(ce===null){for(;!Pe.done;pe++,Pe=it.next())Pe=At(Q,Pe.value,Mt),Pe!==null&&(q=f(Pe,q,pe),Re===null?$t=Pe:Re.sibling=Pe,Re=Pe);return Oe&&ja(Q,pe),$t}for(ce=s(ce);!Pe.done;pe++,Pe=it.next())Pe=gt(ce,Q,pe,Pe.value,Mt),Pe!==null&&(t&&Pe.alternate!==null&&ce.delete(Pe.key===null?pe:Pe.key),q=f(Pe,q,pe),Re===null?$t=Pe:Re.sibling=Pe,Re=Pe);return t&&ce.forEach(function(Rx){return n(Q,Rx)}),Oe&&ja(Q,pe),$t}function an(Q,q,it,Mt){if(typeof it=="object"&&it!==null&&it.type===p&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case h:t:{for(var $t=it.key;q!==null;){if(q.key===$t){if($t=it.type,$t===p){if(q.tag===7){a(Q,q.sibling),Mt=c(q,it.props.children),Mt.return=Q,Q=Mt;break t}}else if(q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===P&&Ah($t)===q.type){a(Q,q.sibling),Mt=c(q,it.props),Qs(Mt,it),Mt.return=Q,Q=Mt;break t}a(Q,q);break}else n(Q,q);q=q.sibling}it.type===p?(Mt=rr(it.props.children,Q.mode,Mt,it.key),Mt.return=Q,Q=Mt):(Mt=xl(it.type,it.key,it.props,null,Q.mode,Mt),Qs(Mt,it),Mt.return=Q,Q=Mt)}return y(Q);case d:t:{for($t=it.key;q!==null;){if(q.key===$t)if(q.tag===4&&q.stateNode.containerInfo===it.containerInfo&&q.stateNode.implementation===it.implementation){a(Q,q.sibling),Mt=c(q,it.children||[]),Mt.return=Q,Q=Mt;break t}else{a(Q,q);break}else n(Q,q);q=q.sibling}Mt=Yu(it,Q.mode,Mt),Mt.return=Q,Q=Mt}return y(Q);case P:return $t=it._init,it=$t(it._payload),an(Q,q,it,Mt)}if(wt(it))return oe(Q,q,it,Mt);if(V(it)){if($t=V(it),typeof $t!="function")throw Error(r(150));return it=$t.call(it),ye(Q,q,it,Mt)}if(typeof it.then=="function")return an(Q,q,tl(it),Mt);if(it.$$typeof===M)return an(Q,q,gl(Q,it),Mt);el(Q,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,q!==null&&q.tag===6?(a(Q,q.sibling),Mt=c(q,it),Mt.return=Q,Q=Mt):(a(Q,q),Mt=qu(it,Q.mode,Mt),Mt.return=Q,Q=Mt),y(Q)):a(Q,q)}return function(Q,q,it,Mt){try{Ks=0;var $t=an(Q,q,it,Mt);return Pr=null,$t}catch(ce){if(ce===js)throw ce;var Re=li(29,ce,null,Q.mode);return Re.lanes=Mt,Re.return=Q,Re}finally{}}}var Ka=wh(!0),Rh=wh(!1),zr=Bt(null),nl=Bt(0);function Ch(t,n){t=Yi,te(nl,t),te(zr,n),Yi=t|n.baseLanes}function $c(){te(nl,Yi),te(zr,zr.current)}function tu(){Yi=nl.current,Ft(zr),Ft(nl)}var ri=Bt(null),Ai=null;function da(t){var n=t.alternate;te(pn,pn.current&1),te(ri,t),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Dh(t){if(t.tag===22){if(te(pn,pn.current),te(ri,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else ha()}function ha(){te(pn,pn.current),te(ri,ri.current)}function Bi(t){Ft(ri),Ai===t&&(Ai=null),Ft(pn)}var pn=Bt(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,mn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var $s=null,nu=0,Br=0,Fr=null;function vv(t,n){if($s===null){var a=$s=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Lh,Lh),n}function Lh(){if(--nu===0&&$s!==null){Fr!==null&&(Fr.status="fulfilled");var t=$s;$s=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Uh=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Uh!==null&&Uh(t,n)};var Qa=Bt(null);function iu(){var t=Qa.current;return t!==null?t:Ye.pooledCache}function al(t,n){n===null?te(Qa,Qa.current):te(Qa,n.pool)}function Nh(){var t=iu();return t===null?null:{parent:mn._currentValue,pool:t}}var pa=0,Ae=null,Ge=null,un=null,rl=!1,Ir=!1,Ja=!1,sl=0,to=0,Hr=null,yv=0;function on(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return pa=f,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?$a:ma,Ja=!1,f=a(s,c),Ja=!1,Ir&&(f=Ph(n,a,s,c)),Oh(t),f}function Oh(t){I.H=wi;var n=Ge!==null&&Ge.next!==null;if(pa=0,un=Ge=Ae=null,rl=!1,to=0,Hr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Ph(t,n,a,s){Ae=t;var c=0;do{if(Ir&&(Hr=null),to=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,un=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=tr,f=n(a,s)}while(Ir);return f}function Sv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(Ae.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}pa=0,un=Ge=Ae=null,Ir=!1,to=sl=0,Hr=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Ae.memoizedState=un=t:un=un.next=t,un}function fn(){if(Ge===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=un===null?Ae.memoizedState:un.next;if(n!==null)un=n,Ge=t;else{if(t===null)throw Ae.alternate===null?Error(r(467)):Error(r(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?Ae.memoizedState=un=t:un=un.next=t}return un}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function eo(t){var n=to;return to+=1,Hr===null&&(Hr=[]),t=bh(Hr,t,n),n=Ae,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?$a:ma),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===M)return Cn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ae.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=fn();return uu(n,Ge,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var w=y=null,z=null,Z=n,xt=!1;do{var At=Z.lane&-536870913;if(At!==Z.lane?(Ne&At)===At:(pa&At)===At){var lt=Z.revertLane;if(lt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),At===Br&&(xt=!0);else if((pa&lt)===lt){Z=Z.next,lt===Br&&(xt=!0);continue}else At={lane:0,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(w=z=At,y=f):z=z.next=At,Ae.lanes|=lt,ba|=lt;At=Z.action,Ja&&a(f,At),f=Z.hasEagerState?Z.eagerState:a(f,At)}else lt={lane:At,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(w=z=lt,y=f):z=z.next=lt,Ae.lanes|=At,ba|=At;Z=Z.next}while(Z!==null&&Z!==n);if(z===null?y=f:z.next=w,!qn(f,t.memoizedState)&&(vn=!0,xt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);qn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zh(t,n,a){var s=Ae,c=fn(),f=Oe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!qn((Ge||c).memoizedState,a);if(y&&(c.memoizedState=a,vn=!0),c=c.queue,pu(Ih.bind(null,s,c,t),[t]),c.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Fh.bind(null,s,c,a,n),{destroy:void 0},null),Ye===null)throw Error(r(349));f||pa&60||Bh(s,n,a)}return a}function Bh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=ol(),Ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fh(t,n,a,s){n.value=a,n.getSnapshot=s,Hh(n)&&Gh(t)}function Ih(t,n,a){return a(function(){Hh(n)&&Gh(t)})}function Hh(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Gh(t){var n=fa(t,2);n!==null&&zn(n,t,2)}function du(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Ja){Jt(!0);try{a()}finally{Jt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Vh(t,n,a,s){return t.baseState=a,uu(t,Ge,typeof s=="function"?s:Fi)}function Mv(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var w=a(c,s),z=I.S;z!==null&&z(y,w),Wh(t,n,w)}catch(Z){hu(t,n,Z)}finally{I.T=f}}else try{f=a(c,s),Wh(t,n,f)}catch(Z){hu(t,n,Z)}}function Wh(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xh(t,n,s)},function(s){return hu(t,n,s)}):Xh(t,n,a)}function Xh(t,n,a){n.status="fulfilled",n.value=a,qh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kh(t,a)))}function hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qh(n),n=n.next;while(n!==s)}t.action=null}function qh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yh(t,n){return n}function jh(t,n){if(Oe){var a=Ye.formState;if(a!==null){t:{var s=Ae;if(Oe){if(En){e:{for(var c=En,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){En=_i(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yh,lastRenderedState:n},a.queue=s,a=dp.bind(null,Ae,s),s.dispatch=a,s=du(!1),f=xu.bind(null,Ae,!1,s.queue),s=Vn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,Ae,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zh(t){var n=fn();return Kh(n,Ge,t)}function Kh(t,n,a){n=uu(t,n,Yh)[0],t=cl(Fi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?eo(n):n;var s=fn(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(Ae.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Qh(t){var n=fn(),a=Ge;if(a!==null)return Kh(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=Ae.updateQueue,n===null&&(n=ol(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jh(){return fn().memoizedState}function ul(t,n,a,s){var c=Vn();Ae.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=fn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ge!==null&&s!==null&&au(s,Ge.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(Ae.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function $h(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function tp(t,n){return fl(4,2,t,n)}function ep(t,n){return fl(4,4,t,n)}function np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ip(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,np.bind(null,n,t),a)}function mu(){}function ap(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function rp(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Ja){Jt(!0);try{t()}finally{Jt(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||pa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=om(),Ae.lanes|=t,ba|=t,a)}function sp(t,n,a,s){return qn(a,n)?a:zr.current!==null?(t=gu(t,a,s),qn(t,n)||(vn=!0),t):pa&42?(t=om(),Ae.lanes|=t,ba|=t,n):(vn=!0,t.memoizedState=a)}function op(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var y=I.T,w={};I.T=w,xu(t,!1,n,a);try{var z=c(),Z=I.S;if(Z!==null&&Z(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var xt=xv(z,s);no(t,n,xt,Kn(t))}else no(t,n,s,Kn(t))}catch(At){no(t,n,{then:function(){},status:"rejected",reason:At},Kn())}finally{X.p=f,I.T=y}}function bv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=lp(t).queue;op(t,c,n,dt,a===null?bv:function(){return cp(t),a(s)})}function lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cp(t){var n=lp(t).next.queue;no(t,n,{},Kn())}function vu(){return Cn(Eo)}function up(){return fn().memoizedState}function fp(){return fn().memoizedState}function Tv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=va(a);var s=xa(n,t,a);s!==null&&(zn(s,n,a),ro(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?hp(n,a):(a=jc(t,n,a,s),a!==null&&(zn(a,t,s),pp(a,n,s)))}function dp(t,n,a){var s=Kn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))hp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,w=f(y,a);if(c.hasEagerState=!0,c.eagerState=w,qn(w,y))return Zo(t,n,c,0),Ye===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return zn(a,t,s),pp(a,n,s),!0}return!1}function xu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&zn(n,t,2)}function dl(t){var n=t.alternate;return t===Ae||n!==null&&n===Ae}function hp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ei(t,a)}}var wi={readContext:Cn,use:ll,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on};wi.useCacheRefresh=on,wi.useMemoCache=on,wi.useHostTransitionStatus=on,wi.useFormState=on,wi.useActionState=on,wi.useOptimistic=on;var $a={readContext:Cn,use:ll,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:$h,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var s=t();if(Ja){Jt(!0);try{t()}finally{Jt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Vn();if(a!==void 0){var c=a(n);if(Ja){Jt(!0);try{a(n)}finally{Jt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,Ae,t),[s.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=dp.bind(null,Ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Vn();return gu(a,t,n)},useTransition:function(){var t=du(!1);return t=op.bind(null,Ae,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Ae,c=Vn();if(Oe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));Ne&60||Bh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$h(Ih.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Fh.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Vn(),n=Ye.identifierPrefix;if(Oe){var a=zi,s=Pi;a=(s&~(1<<32-O(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=yv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Vn().memoizedState=Tv.bind(null,Ae)}};$a.useMemoCache=cu,$a.useHostTransitionStatus=vu,$a.useFormState=jh,$a.useActionState=jh,$a.useOptimistic=function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xu.bind(null,Ae,!0,a),a.dispatch=n,[t,n]};var ma={readContext:Cn,use:ll,useCallback:ap,useContext:Cn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:cl,useRef:Jh,useState:function(){return cl(Fi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=fn();return sp(a,Ge.memoizedState,t,n)},useTransition:function(){var t=cl(Fi)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zh,useId:up};ma.useCacheRefresh=fp,ma.useMemoCache=cu,ma.useHostTransitionStatus=vu,ma.useFormState=Zh,ma.useActionState=Zh,ma.useOptimistic=function(t,n){var a=fn();return Vh(a,Ge,t,n)};var tr={readContext:Cn,use:ll,useCallback:ap,useContext:Cn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:fu,useRef:Jh,useState:function(){return fu(Fi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=fn();return Ge===null?gu(a,t,n):sp(a,Ge.memoizedState,t,n)},useTransition:function(){var t=fu(Fi)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zh,useId:up};tr.useCacheRefresh=fp,tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Qh,tr.useActionState=Qh,tr.useOptimistic=function(t,n){var a=fn();return Ge!==null?Vh(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])};function yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Su={isMounted:function(t){return(t=t._reactInternals)?$(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(zn(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(zn(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=xa(t,s,a),n!==null&&(zn(n,t,a),ro(n,t,a))}};function mp(t,n,a,s,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function gp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Su.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _p(t){hl(t)}function vp(t){console.error(t)}function xp(t){hl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Sp(t){return t=va(t),t.tag=3,t}function Mp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){yp(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){yp(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ai===null?af():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Oe)return n=ri.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Ys(ni(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Ys(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),po===null?po=[f]:po.push(f),nn!==4&&(nn=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sp(c),Mp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Ep=Error(r(461)),vn=!1;function bn(t,n,a,s){n.child=t===null?Rh(n,null,a,s):Ka(n,t.child,a,s)}function bp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var w in s)w!=="ref"&&(y[w]=s[w])}else y=s;return ir(n),s=ru(t,n,a,y,f,c),w=su(),t!==null&&!vn?(ou(t,n,c),Ii(t,n,c)):(Oe&&w&&Zc(n),n.flags|=1,bn(t,n,s,c),n.child)}function Tp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ap(t,n,f,s,c)):(t=xl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(y,s)&&t.ref===n.ref)return Ii(t,n,c)}return n.flags|=1,t=Ea(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ap(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ks(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(vn=!0);else return n.lanes=t.lanes,Ii(t,n,c)}return Eu(t,n,a,s,c)}function wp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,y=t!==null?t.memoizedState:null;if(io(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=y!==null?y.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Rp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,y!==null?y.cachePool:null),y!==null?Ch(n,y):$c(),Dh(n);else return n.lanes=n.childLanes=536870912,Rp(t,n,y!==null?y.baseLanes|a:a,a)}else y!==null?(al(n,y.cachePool),Ch(n,y),ha(),n.memoizedState=null):(t!==null&&al(n,null),$c(),ha());return bn(t,n,c,a),n.child}function Rp(t,n,a,s){var c=iu();return c=c===null?null:{parent:mn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Dh(n),t!==null&&ao(t,n,s,!0),null}function io(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ir(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!vn?(ou(t,n,c),Ii(t,n,c)):(Oe&&s&&Zc(n),n.flags|=1,bn(t,n,a,c),n.child)}function Cp(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Ph(n,s,a,c),Oh(t),s=su(),t!==null&&!vn?(ou(t,n,f),Ii(t,n,f)):(Oe&&s&&Zc(n),n.flags|=1,bn(t,n,a,f),n.child)}function Dp(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Ur,y=a.contextType;typeof y=="object"&&y!==null&&(f=Cn(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Su,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Cn(y):Ur,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(yu(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Su.enqueueReplaceState(f,f.state,null),oo(n,s,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,z=er(a,w);f.props=z;var Z=f.context,xt=a.contextType;y=Ur,typeof xt=="object"&&xt!==null&&(y=Cn(xt));var At=a.getDerivedStateFromProps;xt=typeof At=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||Z!==y)&&gp(n,f,s,y),_a=!1;var lt=n.memoizedState;f.state=lt,oo(n,s,f,c),so(),Z=n.memoizedState,w||lt!==Z||_a?(typeof At=="function"&&(yu(n,a,At,s),Z=n.memoizedState),(z=_a||mp(n,a,z,s,lt,Z,y))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=y,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),y=n.memoizedProps,xt=er(a,y),f.props=xt,At=n.pendingProps,lt=f.context,Z=a.contextType,z=Ur,typeof Z=="object"&&Z!==null&&(z=Cn(Z)),w=a.getDerivedStateFromProps,(Z=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==At||lt!==z)&&gp(n,f,s,z),_a=!1,lt=n.memoizedState,f.state=lt,oo(n,s,f,c),so();var gt=n.memoizedState;y!==At||lt!==gt||_a||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof w=="function"&&(yu(n,a,w,s),gt=n.memoizedState),(xt=_a||mp(n,a,xt,s,lt,gt,z)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,gt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,gt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&lt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&lt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=gt),f.props=s,f.state=gt,f.context=z,s=xt):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&lt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&lt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,io(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ka(n,t.child,null,c),n.child=Ka(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ii(t,n,c),t}function Lp(t,n,a,s){return qs(),n.flags|=256,bn(t,n,a,s),n.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Tu(t){return{baseLanes:t,cachePool:Nh()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Up(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Oe){if(c?da(n):ha(),Oe){var w=En,z;if(z=w){t:{for(z=w,w=Ti;z.nodeType!==8;){if(!w){w=null;break t}if(z=_i(z.nextSibling),z===null){w=null;break t}}w=z}w!==null?(n.memoizedState={dehydrated:w,treeContext:Ya!==null?{id:Pi,overflow:zi}:null,retryLane:536870912},z=li(18,null,null,0),z.stateNode=w,z.return=n,n.child=z,Pn=n,En=null,z=!0):z=!1}z||Za(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Bi(n)}return w=s.children,s=s.fallback,c?(ha(),c=n.mode,w=Ru({mode:"hidden",children:w},c),s=rr(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=Tu(a),c.childLanes=Au(t,y,a),n.memoizedState=bu,s):(da(n),wu(n,w))}if(z=t.memoizedState,z!==null&&(w=z.dehydrated,w!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),c=s.fallback,w=n.mode,s=Ru({mode:"visible",children:s.children},w),c=rr(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ka(n,t.child,null,a),s=n.child,s.memoizedState=Tu(a),s.childLanes=Au(t,y,a),n.memoizedState=bu,n=c);else if(da(n),w.data==="$!"){if(y=w.nextSibling&&w.nextSibling.dataset,y)var Z=y.dgst;y=Z,s=Error(r(419)),s.stack="",s.digest=y,Ys({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(vn||ao(t,n,a,!1),y=(a&t.childLanes)!==0,vn||y){if(y=Ye,y!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(y.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,fa(t,s),zn(y,t,s),Ep}w.data==="$?"||af(),n=Cu(t,n,a)}else w.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),w._reactRetry=n,n=null):(t=z.treeContext,En=_i(w.nextSibling),Pn=n,Oe=!0,mi=null,Ti=!1,t!==null&&(ii[ai++]=Pi,ii[ai++]=zi,ii[ai++]=Ya,Pi=t.id,zi=t.overflow,Ya=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(ha(),c=s.fallback,w=n.mode,z=t.child,Z=z.sibling,s=Ea(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,Z!==null?c=Ea(Z,c):(c=rr(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=t.child.memoizedState,w===null?w=Tu(a):(z=w.cachePool,z!==null?(Z=mn._currentValue,z=z.parent!==Z?{parent:Z,pool:Z}:z):z=Nh(),w={baseLanes:w.baseLanes|a,cachePool:z}),c.memoizedState=w,c.childLanes=Au(t,y,a),n.memoizedState=bu,s):(da(n),a=t.child,t=a.sibling,a=Ea(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return am(t,n,0,null)}function Cu(t,n,a){return Ka(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Np(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Op(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(t,n,s.children,a),s=pn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,a,n);else if(t.tag===19)Np(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(te(pn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ii(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,!(a&n.childLanes))if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:fe(n,n.stateNode.containerInfo),ga(n,mn,t.memoizedState.cache),qs();break;case 27:case 5:ze(n);break;case 4:fe(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):a&n.child.childLanes?Up(t,n,a):(da(n),t=Ii(t,n,a),t!==null?t.sibling:null);da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ao(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Op(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),te(pn,pn.current),s)break;return null;case 22:case 23:return n.lanes=0,wp(t,n,a);case 24:ga(n,mn,t.memoizedState.cache)}return Ii(t,n,a)}function Pp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return vn=!1,Rv(t,n,a);vn=!!(t.flags&131072)}else vn=!1,Oe&&n.flags&1048576&&xh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=er(s,t),n.tag=1,n=Dp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===A){n.tag=11,n=bp(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=Tp(null,n,s,t,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Dp(t,n,s,c,a);case 3:t:{if(fe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),oo(n,f,null,a);var y=n.memoizedState;if(f=y.cache,ga(n,mn,f),f!==c.cache&&Ou(n,[mn],a,!0),so(),f=y.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Lp(t,n,f,a);break t}else if(f!==s){s=ni(Error(r(424)),n),Ys(s),n=Lp(t,n,f,a);break t}else for(En=_i(n.stateNode.containerInfo.firstChild),Pn=n,Oe=!0,mi=null,Ti=!0,a=Rh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),f===s){n=Ii(t,n,a);break t}bn(t,n,f,a)}n=n.child}return n;case 26:return io(t,n),t===null?(a=Fm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Oe||(a=n.type,t=n.pendingProps,s=Ll(Be.current).createElement(a),s[zt]=n,s[Dt]=t,Tn(s,a,t),jt(s),n.stateNode=s):n.memoizedState=Fm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ze(n),t===null&&Oe&&(s=n.stateNode=Pm(n.type,n.pendingProps,Be.current),Pn=n,Ti=!0,En=_i(s.firstChild)),s=n.pendingProps.children,t!==null||Oe?bn(t,n,s,a):n.child=Ka(n,null,s,a),io(t,n),n.child;case 5:return t===null&&Oe&&((c=s=En)&&(s=ax(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,Pn=n,En=_i(s.firstChild),Ti=!1,c=!0):c=!1),c||Za(n)),ze(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:y!==null&&vf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,Sv,null,null,a),Eo._currentValue=c),io(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&Oe&&((t=a=En)&&(a=rx(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Pn=n,En=null,t=!0):t=!1),t||Za(n)),null;case 13:return Up(t,n,a);case 4:return fe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ka(n,null,s,a):bn(t,n,s,a),n.child;case 11:return bp(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Cn(c),s=s(c),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return Ap(t,n,n.type,n.pendingProps,a);case 19:return Op(t,n,a);case 22:return wp(t,n,a);case 24:return ir(n),s=Cn(mn),t===null?(c=iu(),c===null&&(c=Ye,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ga(n,mn,c)):(t.lanes&a&&(zu(t,n),oo(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,mn,s)):(s=f.cache,ga(n,mn,s),s!==c.cache&&Ou(n,[mn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Bt(null),nr=null,Hi=null;function ga(t,n,a){te(Uu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=Uu.current,Ft(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var z=0;z<n.length;z++)if(w.context===n[z]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Nu(f.return,a,t),s||(y=null);break t}f=w.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Nu(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ao(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var w=c.type;qn(c.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(c===ie.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return zp(nr,t)}function gl(t,n){return nr===null&&ir(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var _a=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,$e&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),_h(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ei(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function so(){if(Fu){var t=Fr;if(t!==null)throw t}}function oo(t,n,a,s){Fu=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var z=w,Z=z.next;z.next=null,y===null?f=Z:y.next=Z,y=z;var xt=t.alternate;xt!==null&&(xt=xt.updateQueue,w=xt.lastBaseUpdate,w!==y&&(w===null?xt.firstBaseUpdate=Z:w.next=Z,xt.lastBaseUpdate=z))}if(f!==null){var At=c.baseState;y=0,xt=Z=z=null,w=f;do{var lt=w.lane&-536870913,gt=lt!==w.lane;if(gt?(Ne&lt)===lt:(s&lt)===lt){lt!==0&&lt===Br&&(Fu=!0),xt!==null&&(xt=xt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var oe=t,ye=w;lt=n;var an=a;switch(ye.tag){case 1:if(oe=ye.payload,typeof oe=="function"){At=oe.call(an,At,lt);break t}At=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ye.payload,lt=typeof oe=="function"?oe.call(an,At,lt):oe,lt==null)break t;At=b({},At,lt);break t;case 2:_a=!0}}lt=w.callback,lt!==null&&(t.flags|=64,gt&&(t.flags|=8192),gt=c.callbacks,gt===null?c.callbacks=[lt]:gt.push(lt))}else gt={lane:lt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xt===null?(Z=xt=gt,z=At):xt=xt.next=gt,y|=lt;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;gt=w,w=gt.next,gt.next=null,c.lastBaseUpdate=gt,c.shared.pending=null}}while(!0);xt===null&&(z=At),c.baseState=z,c.firstBaseUpdate=Z,c.lastBaseUpdate=xt,f===null&&(c.shared.lanes=0),ba|=y,t.lanes=y,t.memoizedState=At}}function Bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==c)}}catch(w){Xe(n,n.return,w)}}function ya(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var y=s.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,c=n;var z=a;try{w()}catch(Z){Xe(c,z,Z)}}}s=s.next}while(s!==f)}}catch(Z){Xe(n,n.return,Z)}}function Ip(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fp(n,a)}catch(s){Xe(t,t.return,s)}}}function Hp(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Xe(t,n,s)}}function ar(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Xe(t,n,f)}}function Yn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Xe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(t,n,c)}else a.current=null}function Gp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Xe(t,t.return,c)}}function Vp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[Dt]=n}catch(c){Xe(t,t.return,c)}}function kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var Vi=!1,en=!1,Gu=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,xn=null,Xp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=lh(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,w=-1,z=-1,Z=0,xt=0,At=t,lt=null;e:for(;;){for(var gt;At!==a||c!==0&&At.nodeType!==3||(w=y+c),At!==f||s!==0&&At.nodeType!==3||(z=y+s),At.nodeType===3&&(y+=At.nodeValue.length),(gt=At.firstChild)!==null;)lt=At,At=gt;for(;;){if(At===t)break e;if(lt===a&&++Z===c&&(w=y),lt===f&&++xt===s&&(z=y),(gt=At.nextSibling)!==null)break;At=lt,lt=At.parentNode}At=gt}a=w===-1||z===-1?null:{start:w,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var oe=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(oe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ye){Xe(a,a.return,ye)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}return oe=Xp,Xp=!1,oe}function qp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),s&4&&lo(5,a);break;case 1:if(Wi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(w){Xe(a,a.return,w)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Xe(a,a.return,w)}}s&64&&Ip(a),s&512&&ar(a,a.return);break;case 3:if(Wi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fp(s,t)}catch(w){Xe(a,a.return,w)}}break;case 26:Wi(t,a),s&512&&ar(a,a.return);break;case 27:case 5:Wi(t,a),n===null&&s&4&&Gp(a),s&512&&ar(a,a.return);break;case 12:Wi(t,a);break;case 13:Wi(t,a),s&4&&Zp(t,a);break;case 22:if(c=a.memoizedState!==null||Vi,!c){n=n!==null&&n.memoizedState!==null||en;var f=Vi,y=en;Vi=c,(en=n)&&!y?Sa(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Vi=f,en=y}s&512&&(a.memoizedProps.mode==="manual"?ar(a,a.return):Yn(a,a.return));break;default:Wi(t,a)}}function Yp(t){var n=t.alternate;n!==null&&(t.alternate=null,Yp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dn=null,jn=!1;function ki(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:en||Yn(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Yn(a,n);var s=dn,c=jn;for(dn=a.stateNode,ki(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);at(a),dn=s,jn=c;break;case 5:en||Yn(a,n);case 6:c=dn;var f=jn;if(dn=null,ki(t,n,a),dn=c,jn=f,dn!==null)if(jn)try{t=dn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(y){Xe(a,n,y)}else try{dn.removeChild(a.stateNode)}catch(y){Xe(a,n,y)}break;case 18:dn!==null&&(jn?(n=dn,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),wo(n)):yf(dn,a.stateNode));break;case 4:s=dn,c=jn,dn=a.stateNode.containerInfo,jn=!0,ki(t,n,a),dn=s,jn=c;break;case 0:case 11:case 14:case 15:en||ya(2,a,n),en||ya(4,a,n),ki(t,n,a);break;case 1:en||(Yn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hp(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:en||Yn(a,n),en=(s=en)||a.memoizedState!==null,ki(t,n,a),en=s;break;default:ki(t,n,a)}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){Xe(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function si(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,y=n,w=y;t:for(;w!==null;){switch(w.tag){case 27:case 5:dn=w.stateNode,jn=!1;break t;case 3:dn=w.stateNode.containerInfo,jn=!0;break t;case 4:dn=w.stateNode.containerInfo,jn=!0;break t}w=w.return}if(dn===null)throw Error(r(160));jp(f,y,c),dn=null,jn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Kp(n,t),n=n.sibling}var gi=null;function Kp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),oi(t),s&4&&(ya(3,t,t.return),lo(3,t),ya(5,t,t.return));break;case 1:si(n,t),oi(t),s&512&&(en||a===null||Yn(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(si(n,t),oi(t),s&512&&(en||a===null||Yn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[et]||f[zt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[zt]=t,jt(f),s=f;break t;case"link":var y=Gm("link","href",c).get(s+(a.href||""));if(y){for(var w=0;w<y.length;w++)if(f=y[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(y=Gm("meta","content",c).get(s+(a.content||""))){for(w=0;w<y.length;w++)if(f=y[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[zt]=t,jt(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Hm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Hm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var Z=z.nextSibling,xt=z.nodeName;z[et]||xt==="HEAD"||xt==="BODY"||xt==="SCRIPT"||xt==="STYLE"||xt==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=Z}for(var At=t.type,lt=c.attributes;lt.length;)c.removeAttributeNode(lt[0]);Tn(c,At,f),c[zt]=t,c[Dt]=f}catch(oe){Xe(t,t.return,oe)}}case 5:if(si(n,t),oi(t),s&512&&(en||a===null||Yn(a,a.return)),t.flags&32){c=t.stateNode;try{Tr(c,"")}catch(oe){Xe(t,t.return,oe)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(si(n,t),oi(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(oe){Xe(t,t.return,oe)}}break;case 3:if(Ol=null,c=gi,gi=Ul(n.containerInfo),si(n,t),gi=c,oi(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(oe){Xe(t,t.return,oe)}Gu&&(Gu=!1,Qp(t));break;case 4:s=gi,gi=Ul(t.stateNode.containerInfo),si(n,t),oi(t),gi=s;break;case 12:si(n,t),oi(t);break;case 13:si(n,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=nt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(en||a===null||Yn(a,a.return)),z=t.memoizedState!==null,Z=a!==null&&a.memoizedState!==null,xt=Vi,At=en,Vi=xt||z,en=At||Z,si(n,t),en=At,Vi=xt,oi(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=Vi||en,a===null||Z||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){Z=a=n;try{if(c=Z.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{y=Z.stateNode,w=Z.memoizedProps.style;var gt=w!=null&&w.hasOwnProperty("display")?w.display:null;y.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(oe){Xe(Z,Z.return,oe)}}}else if(n.tag===6){if(a===null){Z=n;try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(oe){Xe(Z,Z.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:si(n,t),oi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:si(n,t),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(kp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var y=s.stateNode;s.flags&32&&(Tr(y,""),s.flags&=-33);var w=Iu(t);_l(t,w,y);break;case 3:case 4:var z=s.stateNode.containerInfo,Z=Iu(t);Hu(t,Z,z);break;default:throw Error(r(161))}}}catch(xt){Xe(t,t.return,xt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),Vr(n);break;case 1:Yn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hp(n,n.return,a),Vr(n);break;case 26:case 27:case 5:Yn(n,n.return),Vr(n);break;case 22:Yn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),lo(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){Xe(s,s.return,Z)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],w)}catch(Z){Xe(s,s.return,Z)}}a&&y&64&&Ip(f),ar(f,f.return);break;case 26:case 27:case 5:Sa(c,f,a),a&&s===null&&y&4&&Gp(f),ar(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&y&4&&Zp(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),ar(f,f.return);break;default:Sa(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(t,n,a,s),n=n.sibling}function Jp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(t,n,a,s),c&2048&&lo(9,n);break;case 3:Ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){Ma(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,w=f.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Xe(n,n.return,z)}}else Ma(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(t,n,a,s):co(t,n):f._visibility&4?Ma(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ma(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ma(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,w=a,z=s,Z=y.flags;switch(y.tag){case 0:case 11:case 15:kr(f,y,w,z,c),lo(8,y);break;case 23:break;case 22:var xt=y.stateNode;y.memoizedState!==null?xt._visibility&4?kr(f,y,w,z,c):co(f,y):(xt._visibility|=4,kr(f,y,w,z,c)),c&&Z&2048&&ku(y.alternate,y);break;case 24:kr(f,y,w,z,c),c&&Z&2048&&Wu(y.alternate,y);break;default:kr(f,y,w,z,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&ku(s.alternate,s);break;case 24:co(a,s),c&2048&&Wu(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Wr(t){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)$p(t),t=t.sibling}function $p(t){switch(t.tag){case 26:Wr(t),t.flags&uo&&t.memoizedState!==null&&vx(gi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=gi;gi=Ul(t.stateNode.containerInfo),Wr(t),gi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Wr(t),uo=n):Wr(t));break;default:Wr(t)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,nm(s,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):fo(t);break;default:fo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,nm(s,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function nm(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=t;xn!==null;){s=xn;var c=s.sibling,f=s.return;if(Yp(s),s===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,a,s){return new Lv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,n){var a=t.alternate;return a===null?(a=li(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xl(t,n,a,s,c,f){var y=0;if(s=t,typeof t=="function")Xu(t)&&(y=1);else if(typeof t=="string")y=gx(t,a,ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return rr(a.children,c,f,n);case m:y=8,c|=24;break;case g:return t=li(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case C:return t=li(13,a,n,c),t.elementType=C,t.lanes=f,t;case v:return t=li(19,a,n,c),t.elementType=v,t.lanes=f,t;case L:return am(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case M:y=10;break t;case S:y=9;break t;case A:y=11;break t;case _:y=14;break t;case P:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=li(y,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=li(7,t,s,n),t.lanes=a,t}function am(t,n,a,s){t=li(22,t,s,n),t.elementType=L,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var y=fa(f,2);y!==null&&(c._pendingVisibility|=2,zn(y,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var y=fa(f,2);y!==null&&(c._pendingVisibility&=-3,zn(y,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=li(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Xi(t){t.flags|=4}function rm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!km(n)){if(n=ri.current,n!==null&&((Ne&4194176)===Ne?Ai!==null:(Ne&62914560)!==Ne&&!(Ne&536870912)||n!==Ai))throw Zs=Jc,Mh;t.flags|=8192}}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?we():536870912,t.lanes|=n,qr|=n)}function ho(t,n){if(!Oe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(mn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,mi!==null&&(ef(mi),mi=null))),Je(n),null;case 26:return a=n.memoizedState,t===null?(Xi(n),a!==null?(Je(n),rm(n,a)):(Je(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Xi(n),Je(n),rm(n,a)):(Je(n),n.flags&=-16777217):(t.memoizedProps!==s&&Xi(n),Je(n),n.flags&=-16777217),null;case 27:_t(n),a=Be.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}t=ne.current,Xs(n)?yh(n):(t=Pm(c,s,a),n.stateNode=t,Xi(n))}return Je(n),null;case 5:if(_t(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(t=ne.current,Xs(n))yh(n);else{switch(c=Ll(Be.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[zt]=n,t[Dt]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Xi(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Be.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[zt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cm(t.nodeValue,a)),t||Za(n)}else t=Ll(t).createTextNode(s),t[zt]=n,n.stateNode=t}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[zt]=n}else qs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else mi!==null&&(ef(mi),mi=null),c=!0;if(!c)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Je(n),null;case 4:return Qt(),t===null&&hf(n.stateNode.containerInfo),Je(n),null;case 10:return Gi(n.type),Je(n),null;case 19:if(Ft(pn),c=n.memoizedState,c===null)return Je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ho(c,!1);else{if(nn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,ho(c,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return te(pn,pn.current&1|2),n.child}t=t.sibling}c.tail!==null&&nt()>Sl&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Oe)return Je(n),null}else 2*nt()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=nt(),n.sibling=null,t=pn.current,te(pn,s?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return Bi(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ft(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(mn),Je(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(mn),Qt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ft(pn),null;case 4:return Qt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Bi(n),tu(),t!==null&&Ft(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(mn),null;case 25:return null;default:return null}}function sm(t,n){switch(Kc(n),n.tag){case 3:Gi(mn),Qt();break;case 26:case 27:case 5:_t(n);break;case 4:Qt();break;case 13:Bi(n);break;case 19:Ft(pn);break;case 10:Gi(n.type);break;case 22:case 23:Bi(n),tu(),t!==null&&Ft(Qa);break;case 24:Gi(mn)}}var Ov={getCacheForType:function(t){var n=Cn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,$e=0,Ye=null,De=null,Ne=0,je=0,Zn=null,qi=!1,Xr=!1,ju=!1,Yi=0,nn=0,ba=0,sr=0,Zu=0,ci=0,qr=0,po=null,Ri=null,Ku=!1,Qu=0,Sl=1/0,Ml=null,Ta=null,El=!1,or=null,mo=0,Ju=0,$u=null,go=0,tf=null;function Kn(){if($e&2&&Ne!==0)return Ne&-Ne;if(I.T!==null){var t=Br;return t!==0?t:cf()}return Lt()}function om(){ci===0&&(ci=!(Ne&536870912)||Oe?ge():536870912);var t=ri.current;return t!==null&&(t.flags|=32),ci}function zn(t,n,a){(t===Ye&&je===2||t.cancelPendingCommit!==null)&&(Yr(t,0),ji(t,Ne,ci,!1)),ue(t,a),(!($e&2)||t!==Ye)&&(t===Ye&&(!($e&2)&&(sr|=a),nn===4&&ji(t,Ne,ci,!1)),Ci(t))}function lm(t,n,a){if($e&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||kt(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&ji(t,n,0,!1);break}else if(c===6)ji(t,n,0,!qi);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var w=t;c=po;var z=w.current.memoizedState.isDehydrated;if(z&&(Yr(w,y).flags|=256),y=rf(w,y,!1),y!==2){if(ju&&!z){w.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Ri,Ri=c,f!==null&&ef(f)}c=y}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),ji(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){ji(s,n,ci,!qi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-nt(),10<f)){if(ji(s,n,ci,!qi),Ot(s,0)!==0)break t;s.timeoutHandle=Um(cm.bind(null,s,a,Ri,Ml,Ku,n,ci,sr,qr,qi,2,-0,0),f);break t}cm(s,a,Ri,Ml,Ku,n,ci,sr,qr,qi,0,-0,0)}}break}while(!0);Ci(t)}function ef(t){Ri===null?Ri=t:Ri.push.apply(Ri,t)}function cm(t,n,a,s,c,f,y,w,z,Z,xt,At,lt){var gt=n.subtreeFlags;if((gt&8192||(gt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:_x},$p(n),n=xx(),n!==null)){t.cancelPendingCommit=n(gm.bind(null,t,a,s,c,y,w,z,1,At,lt)),ji(t,f,y,!Z);return}gm(t,a,s,c,y,w,z,xt,At,lt)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ji(t,n,a,s){n&=~Zu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-O(c),y=1<<f;s[f]=-1,c&=~y}a!==0&&tn(t,a,n)}function bl(){return $e&6?!0:(_o(0),!1)}function nf(){if(De!==null){if(je===0)var t=De.return;else t=De,Hi=nr=null,lu(t),Pr=null,Ks=0,t=De;for(;t!==null;)sm(t.alternate,t),t=t.return;De=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ex(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ye=t,De=a=Ea(t.current,null),Ne=n,je=0,Zn=null,qi=!1,Xr=kt(t,n),ju=!1,qr=ci=Zu=sr=ba=nn=0,Ri=po=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-O(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,jo(),a}function um(t,n){Ae=null,I.H=wi,n===js?(n=Th(),je=3):n===Mh?(n=Th(),je=4):je=n===Ep?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,De===null&&(nn=1,pl(t,ni(n,t.current)))}function fm(){var t=I.H;return I.H=wi,t===null?wi:t}function dm(){var t=I.A;return I.A=Ov,t}function af(){nn=4,qi||(Ne&4194176)!==Ne&&ri.current!==null||(Xr=!0),!(ba&134217727)&&!(sr&134217727)||Ye===null||ji(Ye,Ne,ci,!1)}function rf(t,n,a){var s=$e;$e|=2;var c=fm(),f=dm();(Ye!==t||Ne!==n)&&(Ml=null,Yr(t,n)),n=!1;var y=nn;t:do try{if(je!==0&&De!==null){var w=De,z=Zn;switch(je){case 8:nf(),y=6;break t;case 3:case 2:case 6:ri.current===null&&(n=!0);var Z=je;if(je=0,Zn=null,jr(t,w,z,Z),a&&Xr){y=0;break t}break;default:Z=je,je=0,Zn=null,jr(t,w,z,Z)}}Bv(),y=nn;break}catch(xt){um(t,xt)}while(!0);return n&&t.shellSuspendCounter++,Hi=nr=null,$e=s,I.H=c,I.A=f,De===null&&(Ye=null,Ne=0,jo()),y}function Bv(){for(;De!==null;)hm(De)}function Fv(t,n){var a=$e;$e|=2;var s=fm(),c=dm();Ye!==t||Ne!==n?(Ml=null,Sl=nt()+500,Yr(t,n)):Xr=kt(t,n);t:do try{if(je!==0&&De!==null){n=De;var f=Zn;e:switch(je){case 1:je=0,Zn=null,jr(t,n,f,1);break;case 2:if(Eh(f)){je=0,Zn=null,pm(n);break}n=function(){je===2&&Ye===t&&(je=7),Ci(t)},f.then(n,n);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:Eh(f)?(je=0,Zn=null,pm(n)):(je=0,Zn=null,jr(t,n,f,7));break;case 5:var y=null;switch(De.tag){case 26:y=De.memoizedState;case 5:case 27:var w=De;if(!y||km(y)){je=0,Zn=null;var z=w.sibling;if(z!==null)De=z;else{var Z=w.return;Z!==null?(De=Z,Tl(Z)):De=null}break e}}je=0,Zn=null,jr(t,n,f,5);break;case 6:je=0,Zn=null,jr(t,n,f,6);break;case 8:nf(),nn=6;break t;default:throw Error(r(462))}}Iv();break}catch(xt){um(t,xt)}while(!0);return Hi=nr=null,I.H=s,I.A=c,$e=a,De!==null?0:(Ye=null,Ne=0,jo(),nn)}function Iv(){for(;De!==null&&!rt();)hm(De)}function hm(t){var n=Pp(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Tl(t):De=n}function pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cp(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Cp(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:lu(n);default:sm(a,n),n=De=im(n,Yi),n=Pp(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Tl(t):De=n}function jr(t,n,a,s){Hi=nr=null,lu(n),Pr=null,Ks=0;var c=n.return;try{if(wv(t,c,n,a,Ne)){nn=1,pl(t,ni(a,t.current)),De=null;return}}catch(f){if(c!==null)throw De=c,f;nn=1,pl(t,ni(a,t.current)),De=null;return}n.flags&32768?(Oe||s===1?t=!0:Xr||Ne&536870912?t=!1:(qi=t=!0,(s===2||s===3||s===6)&&(s=ri.current,s!==null&&s.tag===13&&(s.flags|=16384))),mm(n,t)):Tl(n)}function Tl(t){var n=t;do{if(n.flags&32768){mm(n,qi);return}t=n.return;var a=Uv(n.alternate,n,Yi);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);nn===0&&(nn=5)}function mm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);nn=6,De=null}function gm(t,n,a,s,c,f,y,w,z,Z){var xt=I.T,At=X.p;try{X.p=2,I.T=null,Hv(t,n,a,s,At,c,f,y,w,z,Z)}finally{I.T=xt,X.p=At}}function Hv(t,n,a,s,c,f,y,w){do Zr();while(or!==null);if($e&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var Z=z.lanes|z.childLanes;if(Z|=Yc,He(t,s,Z,f,y,w),t===Ye&&(De=Ye=null,Ne=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||El||(El=!0,Ju=Z,$u=a,Wv(Ht,function(){return Zr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=I.T,I.T=null,f=X.p,X.p=2,y=$e,$e|=4,Cv(t,z),Kp(z,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=z,qp(t,z.alternate,z),ht(),$e=y,X.p=f,I.T=a):t.current=z,El?(El=!1,or=t,mo=s):_m(t,Z),Z=t.pendingLanes,Z===0&&(Ta=null),Nt(z.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)Z=n[z],c(Z.value,{componentStack:Z.stack});return mo&3&&Zr(),Z=t.pendingLanes,s&4194218&&Z&42?t===tf?go++:(go=0,tf=t):go=0,_o(0),null}function _m(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Zr(){if(or!==null){var t=or,n=Ju;Ju=0;var a=sa(mo),s=I.T,c=X.p;try{if(X.p=32>a?32:a,I.T=null,or===null)var f=!1;else{a=$u,$u=null;var y=or,w=mo;if(or=null,mo=0,$e&6)throw Error(r(331));var z=$e;if($e|=4,em(y.current),Jp(y,y.current,w,a),$e=z,_o(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(qt,y)}catch{}f=!0}return f}finally{X.p=c,I.T=s,_m(t,n)}}return!1}function vm(t,n,a){n=ni(a,n),n=Mu(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(ue(t,2),Ci(t))}function Xe(t,n,a){if(t.tag===3)vm(t,t,a);else for(;n!==null;){if(n.tag===3){vm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){t=ni(a,t),a=Sp(2),s=xa(n,a,2),s!==null&&(Mp(a,s,n,t),ue(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ne&a)===a&&(nn===4||nn===3&&(Ne&62914560)===Ne&&300>nt()-Qu?!($e&2)&&Yr(t,0):Zu|=a,qr===Ne&&(qr=0)),Ci(t)}function xm(t,n){n===0&&(n=we()),t=fa(t,n),t!==null&&(ue(t,n),Ci(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),xm(t,a)}function Wv(t,n){return E(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,lr=0;function Ci(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Xv))}function _o(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-O(42|t)+1)-1,f&=c&~(y&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Mm(s,f))}else f=Ne,f=Ot(s,s===Ye?f:0),!(f&3)||kt(s,f)||(a=!0,Mm(s,f));s=s.next}while(a);lf=!1}}function Xv(){wl=of=!1;var t=0;lr!==0&&(tx()&&(t=lr),lr=0);for(var n=nt(),a=null,s=Al;s!==null;){var c=s.next,f=ym(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}_o(t)}function ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-O(f),w=1<<y,z=c[y];z===-1?(!(w&a)||w&s)&&(c[y]=Me(w,n)):z<=n&&(t.expiredLanes|=w),f&=~w}if(n=Ye,a=Ne,a=Ot(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&je===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&H(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||kt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&H(s),sa(a)){case 2:case 8:a=St;break;case 32:a=Ht;break;case 268435456:a=ct;break;default:a=Ht}return s=Sm.bind(null,t),a=E(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&H(s),t.callbackPriority=2,t.callbackNode=null,2}function Sm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Ne;return s=Ot(t,t===Ye?s:0),s===0?null:(lm(t,s,n),ym(t,nt()),t.callbackNode!=null&&t.callbackNode===a?Sm.bind(null,t):null)}function Mm(t,n){if(Zr())return null;lm(t,n,!0)}function qv(t){nx(function(){$e&6?E(Tt,t):t()})}function cf(){return lr===0&&(lr=ge()),lr}function Em(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function bm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Em((c[Dt]||null).action),y=s.submitter;y&&(n=(n=y[Dt]||null)?Em(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var w=new Xo("action","action",null,s,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var z=y?bm(c,y):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(w.preventDefault(),z=y?bm(c,y):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<gh.length;uf++){var ff=gh[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);pi(jv,"on"+Zv)}pi(fh,"onAnimationEnd"),pi(dh,"onAnimationIteration"),pi(hh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(dv,"onTransitionRun"),pi(hv,"onTransitionStart"),pi(pv,"onTransitionCancel"),pi(ph,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Tm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var w=s[y],z=w.instance,Z=w.currentTarget;if(w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=Z;try{f(c)}catch(xt){hl(xt)}c.currentTarget=null,f=z}else for(y=0;y<s.length;y++){if(w=s[y],z=w.instance,Z=w.currentTarget,w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=Z;try{f(c)}catch(xt){hl(xt)}c.currentTarget=null,f=z}}}}function Le(t,n){var a=n[he];a===void 0&&(a=n[he]=new Set);var s=t+"__bubble";a.has(s)||(Am(n,t,2,!1),a.add(s))}function df(t,n,a){var s=0;n&&(s|=4),Am(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Rl]){t[Rl]=!0,ve.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,df("selectionchange",!1,n))}}function Am(t,n,a,s){switch(Zm(n)){case 2:var c=Mx;break;case 8:c=Ex;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(y===4)for(y=s.return;y!==null;){var z=y.tag;if((z===3||z===4)&&(z=y.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;y=y.return}for(;w!==null;){if(y=tt(w),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){s=f=y;continue t}w=w.parentNode}}s=s.return}Gd(function(){var Z=f,xt=Uc(a),At=[];t:{var lt=mh.get(t);if(lt!==void 0){var gt=Xo,oe=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":gt=k0;break;case"focusin":oe="focus",gt=Fc;break;case"focusout":oe="blur",gt=Fc;break;case"beforeblur":case"afterblur":gt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=q0;break;case fh:case dh:case hh:gt=O0;break;case ph:gt=j0;break;case"scroll":case"scrollend":gt=C0;break;case"wheel":gt=K0;break;case"copy":case"cut":case"paste":gt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=qd;break;case"toggle":case"beforetoggle":gt=J0}var ye=(n&4)!==0,an=!ye&&(t==="scroll"||t==="scrollend"),Q=ye?lt!==null?lt+"Capture":null:lt;ye=[];for(var q=Z,it;q!==null;){var Mt=q;if(it=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||it===null||Q===null||(Mt=zs(q,Q),Mt!=null&&ye.push(xo(q,Mt,it))),an)break;q=q.return}0<ye.length&&(lt=new gt(lt,oe,null,a,xt),At.push({event:lt,listeners:ye}))}}if(!(n&7)){t:{if(lt=t==="mouseover"||t==="pointerover",gt=t==="mouseout"||t==="pointerout",lt&&a!==Lc&&(oe=a.relatedTarget||a.fromElement)&&(tt(oe)||oe[Wt]))break t;if((gt||lt)&&(lt=xt.window===xt?xt:(lt=xt.ownerDocument)?lt.defaultView||lt.parentWindow:window,gt?(oe=a.relatedTarget||a.toElement,gt=Z,oe=oe?tt(oe):null,oe!==null&&(an=$(oe),ye=oe.tag,oe!==an||ye!==5&&ye!==27&&ye!==6)&&(oe=null)):(gt=null,oe=Z),gt!==oe)){if(ye=Wd,Mt="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ye=qd,Mt="onPointerLeave",Q="onPointerEnter",q="pointer"),an=gt==null?lt:Kt(gt),it=oe==null?lt:Kt(oe),lt=new ye(Mt,q+"leave",gt,a,xt),lt.target=an,lt.relatedTarget=it,Mt=null,tt(xt)===Z&&(ye=new ye(Q,q+"enter",oe,a,xt),ye.target=it,ye.relatedTarget=an,Mt=ye),an=Mt,gt&&oe)e:{for(ye=gt,Q=oe,q=0,it=ye;it;it=Qr(it))q++;for(it=0,Mt=Q;Mt;Mt=Qr(Mt))it++;for(;0<q-it;)ye=Qr(ye),q--;for(;0<it-q;)Q=Qr(Q),it--;for(;q--;){if(ye===Q||Q!==null&&ye===Q.alternate)break e;ye=Qr(ye),Q=Qr(Q)}ye=null}else ye=null;gt!==null&&wm(At,lt,gt,ye,!1),oe!==null&&an!==null&&wm(At,an,oe,ye,!0)}}t:{if(lt=Z?Kt(Z):window,gt=lt.nodeName&&lt.nodeName.toLowerCase(),gt==="select"||gt==="input"&&lt.type==="file")var $t=th;else if(Jd(lt))if(eh)$t=lv;else{$t=sv;var Re=rv}else gt=lt.nodeName,!gt||gt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?Z&&Dc(Z.elementType)&&($t=th):$t=ov;if($t&&($t=$t(t,Z))){$d(At,$t,a,xt);break t}Re&&Re(t,lt,Z),t==="focusout"&&Z&&lt.type==="number"&&Z.memoizedProps.value!=null&&Cc(lt,"number",lt.value)}switch(Re=Z?Kt(Z):window,t){case"focusin":(Jd(Re)||Re.contentEditable==="true")&&(Cr=Re,Wc=Z,Ws=null);break;case"focusout":Ws=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,ch(At,a,xt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":ch(At,a,xt)}var ce;if(Hc)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else Rr?Kd(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Yd&&a.locale!=="ko"&&(Rr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Rr&&(ce=Vd()):(ua=xt,Pc="value"in ua?ua.value:ua.textContent,Rr=!0)),Re=Cl(Z,pe),0<Re.length&&(pe=new Xd(pe,t,null,a,xt),At.push({event:pe,listeners:Re}),ce?pe.data=ce:(ce=Qd(a),ce!==null&&(pe.data=ce)))),(ce=tv?ev(t,a):nv(t,a))&&(pe=Cl(Z,"onBeforeInput"),0<pe.length&&(Re=new Xd("onBeforeInput","beforeinput",null,a,xt),At.push({event:Re,listeners:pe}),Re.data=ce)),Yv(At,t,Z,a,xt)}Tm(At,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(xo(t,c,f)),c=zs(t,n),c!=null&&s.push(xo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wm(t,n,a,s,c){for(var f=n._reactName,y=[];a!==null&&a!==s;){var w=a,z=w.alternate,Z=w.stateNode;if(w=w.tag,z!==null&&z===s)break;w!==5&&w!==26&&w!==27||Z===null||(z=Z,c?(Z=zs(a,f),Z!=null&&y.unshift(xo(a,Z,z))):c||(Z=zs(a,f),Z!=null&&y.push(xo(a,Z,z)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Cm(t,n){return n=Rm(n),Rm(t)===n}function Dl(){}function Ve(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":We(t,"class",s);break;case"tabIndex":We(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,s);break;case"style":Id(t,s,f);break;case"data":if(n!=="object"){We(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",c.name,c,null),Ve(t,n,"formEncType",c.formEncType,c,null),Ve(t,n,"formMethod",c.formMethod,c,null),Ve(t,n,"formTarget",c.formTarget,c,null)):(Ve(t,n,"encType",c.encType,c,null),Ve(t,n,"method",c.method,c,null),Ve(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&Le("scroll",t);break;case"onScrollEnd":s!=null&&Le("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Le("beforetoggle",t),Le("toggle",t),oa(t,"popover",s);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oa(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,oa(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Id(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&Le("scroll",t);break;case"onScrollEnd":s!=null&&Le("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Dt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):oa(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",t),Le("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,f,y,a,null)}}c&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":Le("invalid",t);var w=f=y=c=null,z=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var xt=a[s];if(xt!=null)switch(s){case"name":c=xt;break;case"type":y=xt;break;case"checked":z=xt;break;case"defaultChecked":Z=xt;break;case"value":f=xt;break;case"defaultValue":w=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:Ve(t,n,s,xt,a,null)}}Ps(t,f,w,z,Z,y,c,!1),sn(t);return;case"select":Le("invalid",t),s=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":y=w;break;case"multiple":s=w;default:Ve(t,n,c,w,a,null)}n=f,a=y,t.multiple=!!s,n!=null?br(t,!!s,n,!1):a!=null&&br(t,!!s,a,!0);return;case"textarea":Le("invalid",t),f=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(w=a[y],w!=null))switch(y){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ve(t,n,y,w,a,null)}Bd(t,s,c,f),sn(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ve(t,n,z,s,a,null)}return;case"dialog":Le("cancel",t),Le("close",t);break;case"iframe":case"object":Le("load",t);break;case"video":case"audio":for(s=0;s<vo.length;s++)Le(vo[s],t);break;case"image":Le("error",t),Le("load",t);break;case"details":Le("toggle",t);break;case"embed":case"source":case"link":Le("error",t),Le("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,Z,s,a,null)}return;default:if(Dc(n)){for(xt in a)a.hasOwnProperty(xt)&&(s=a[xt],s!==void 0&&mf(t,n,xt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Ve(t,n,w,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,w=null,z=null,Z=null,xt=null;for(gt in a){var At=a[gt];if(a.hasOwnProperty(gt)&&At!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":z=At;default:s.hasOwnProperty(gt)||Ve(t,n,gt,null,s,At)}}for(var lt in s){var gt=s[lt];if(At=a[lt],s.hasOwnProperty(lt)&&(gt!=null||At!=null))switch(lt){case"type":f=gt;break;case"name":c=gt;break;case"checked":Z=gt;break;case"defaultChecked":xt=gt;break;case"value":y=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:gt!==At&&Ve(t,n,lt,gt,s,At)}}Os(t,y,w,z,Z,xt,f,c);return;case"select":gt=y=w=lt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":gt=z;default:s.hasOwnProperty(f)||Ve(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":lt=f;break;case"defaultValue":w=f;break;case"multiple":y=f;default:f!==z&&Ve(t,n,c,f,s,z)}n=w,a=y,s=gt,lt!=null?br(t,!!a,lt,!1):!!s!=!!a&&(n!=null?br(t,!!a,n,!0):br(t,!!a,a?[]:"",!1));return;case"textarea":gt=lt=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ve(t,n,w,null,s,c)}for(y in s)if(c=s[y],f=a[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":lt=c;break;case"defaultValue":gt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ve(t,n,y,c,s,f)}zd(t,lt,gt);return;case"option":for(var oe in a)if(lt=a[oe],a.hasOwnProperty(oe)&&lt!=null&&!s.hasOwnProperty(oe))switch(oe){case"selected":t.selected=!1;break;default:Ve(t,n,oe,null,s,lt)}for(z in s)if(lt=s[z],gt=a[z],s.hasOwnProperty(z)&&lt!==gt&&(lt!=null||gt!=null))switch(z){case"selected":t.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Ve(t,n,z,lt,s,gt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)lt=a[ye],a.hasOwnProperty(ye)&&lt!=null&&!s.hasOwnProperty(ye)&&Ve(t,n,ye,null,s,lt);for(Z in s)if(lt=s[Z],gt=a[Z],s.hasOwnProperty(Z)&&lt!==gt&&(lt!=null||gt!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Ve(t,n,Z,lt,s,gt)}return;default:if(Dc(n)){for(var an in a)lt=a[an],a.hasOwnProperty(an)&&lt!==void 0&&!s.hasOwnProperty(an)&&mf(t,n,an,void 0,s,lt);for(xt in s)lt=s[xt],gt=a[xt],!s.hasOwnProperty(xt)||lt===gt||lt===void 0&&gt===void 0||mf(t,n,xt,lt,s,gt);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!s.hasOwnProperty(Q)&&Ve(t,n,Q,null,s,lt);for(At in s)lt=s[At],gt=a[At],!s.hasOwnProperty(At)||lt===gt||lt==null&&gt==null||Ve(t,n,At,lt,s,gt)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function tx(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(ix)}:Um;function ix(t){setTimeout(function(){throw t})}function yf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),wo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);wo(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ax(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[et])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function rx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Pm(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ui=new Map,zm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Zi=X.d;X.d={f:sx,r:ox,D:lx,C:cx,L:ux,m:fx,X:hx,S:dx,M:px};function sx(){var t=Zi.f(),n=bl();return t||n}function ox(t){var n=Ut(t);n!==null&&n.tag===5&&n.type==="form"?cp(n):Zi.r(t)}var Jr=typeof document>"u"?null:document;function Bm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zm.has(c)||(zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),jt(n),s.head.appendChild(n)))}}function lx(t){Zi.D(t),Bm("dns-prefetch",t,null)}function cx(t,n){Zi.C(t,n),Bm("preconnect",t,n)}function ux(t,n,a){Zi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ui.has(f)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),Tn(n,"link",t),jt(n),s.head.appendChild(n)))}}function fx(t,n){Zi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ui.has(f)&&(t=b({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),Tn(s,"link",t),jt(s),a.head.appendChild(s)}}}function dx(t,n,a){Zi.S(t,n,a);var s=Jr;if(s&&t){var c=ae(s).hoistableStyles,f=$r(t);n=n||"default";var y=c.get(f);if(!y){var w={loading:0,preload:null};if(y=s.querySelector(yo(f)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Mf(t,a);var z=y=s.createElement("link");jt(z),Tn(z,"link",t),z._p=new Promise(function(Z,xt){z.onload=Z,z.onerror=xt}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:w},c.set(f,y)}}}function hx(t,n){Zi.X(t,n);var a=Jr;if(a&&t){var s=ae(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=b({src:t,async:!0},n),(n=ui.get(c))&&Ef(t,n),f=a.createElement("script"),jt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function px(t,n){Zi.M(t,n);var a=Jr;if(a&&t){var s=ae(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=b({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Ef(t,n),f=a.createElement("script"),jt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Fm(t,n,a,s){var c=(c=Be.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=ae(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=ae(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(yo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||mx(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=ae(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Im(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function mx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),jt(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function So(t){return"script[async]"+t}function Hm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,jt(s),s;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),jt(s),Tn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,jt(f),f;s=Im(a),(c=ui.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),jt(f);var y=f;return y._p=new Promise(function(w,z){y.onload=w,y.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(So(f)))?(n.instance=c,jt(c),c):(s=a,(c=ui.get(f))&&(s=b({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),jt(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var w=s[y];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Gm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[et]||f[zt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var w=s.get(y);w?w.push(f):s.set(y,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Mo=null;function _x(){}function vx(t,n,a){if(Mo===null)throw Error(r(475));var s=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(yo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,jt(f);return}f=t.ownerDocument||t,a=Im(a),(c=ui.get(c))&&Mf(a,c),f=f.createElement("link"),jt(f);var y=f;y._p=new Promise(function(w,z){y.onload=w,y.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function xx(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(yx,t),zl=null,Pl.call(t))}function yx(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,c),a.set(y,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:M,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function Sx(t,n,a,s,c,f,y,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Wm(t,n,a,s,c,f,y,w,z,Z,xt,At){return t=new Sx(t,n,a,y,w,z,Z,At),n=1,f===!0&&(n|=24),f=li(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Xm(t){return t?(t=Ur,t):Ur}function qm(t,n,a,s,c,f){c=Xm(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(t,s,n),a!==null&&(zn(a,t,n),ro(a,t,n))}function Ym(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Tf(t,n){Ym(t,n),(t=t.alternate)&&Ym(t,n)}function jm(t){if(t.tag===13){var n=fa(t,67108864);n!==null&&zn(n,t,67108864),Tf(t,67108864)}}var Bl=!0;function Mx(t,n,a,s){var c=I.T;I.T=null;var f=X.p;try{X.p=2,Af(t,n,a,s)}finally{X.p=f,I.T=c}}function Ex(t,n,a,s){var c=I.T;I.T=null;var f=X.p;try{X.p=8,Af(t,n,a,s)}finally{X.p=f,I.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Km(t,s);else if(Tx(c,t,n,a,s))s.stopPropagation();else if(Km(t,s),n&4&&-1<bx.indexOf(t)){for(;c!==null;){var f=Ut(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=ft(f.pendingLanes);if(y!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var z=1<<31-O(y);w.entanglements[1]|=z,y&=~z}Ci(f),!($e&6)&&(Sl=nt()+500,_o(0))}}break;case 13:w=fa(f,2),w!==null&&zn(w,f,2),bl(),Tf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=tt(t),t!==null){var n=$(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ut(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Zm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(It()){case Tt:return 2;case St:return 8;case Ht:case se:return 32;case ct:return 268435456;default:return 32}default:return 32}}var Cf=!1,Aa=null,wa=null,Ra=null,bo=new Map,To=new Map,Ca=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ut(n),n!==null&&jm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Tx(t,n,a,s,c){switch(n){case"focusin":return Aa=Ao(Aa,t,n,a,s,c),!0;case"dragenter":return wa=Ao(wa,t,n,a,s,c),!0;case"mouseover":return Ra=Ao(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0}return!1}function Qm(t){var n=tt(t.target);if(n!==null){var a=$(n);if(a!==null){if(n=a.tag,n===13){if(n=ut(a),n!==null){t.blockedOn=n,Yt(t.priority,function(){if(a.tag===13){var s=Kn(),c=fa(a,s);c!==null&&zn(c,a,s),Tf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=Ut(a),n!==null&&jm(n),t.blockedOn=a,!1;n.shift()}return!0}function Jm(t,n,a){Il(t)&&a.delete(n)}function Ax(){Cf=!1,Aa!==null&&Il(Aa)&&(Aa=null),wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),bo.forEach(Jm),To.forEach(Jm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ax)))}var Gl=null;function $m(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=Ut(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(t){function n(z){return Hl(z,t)}Aa!==null&&Hl(Aa,t),wa!==null&&Hl(wa,t),Ra!==null&&Hl(Ra,t),bo.forEach(n),To.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],y=c[Dt]||null;if(typeof f=="function")y||$m(a);else if(y){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Dt]||null)w=y.formAction;else if(Rf(c)!==null)continue}else w=y.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),$m(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();qm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),qm(t.current,2,null,t,null,null),bl(),n[Wt]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Lt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Qm(t)}};var tg=e.version;if(tg!=="19.0.0")throw Error(r(527,tg,"19.0.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=K(n),t=t!==null?pt(t):null,t=t===null?null:t.stateNode,t};var wx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:I,findFiberByHostInstance:tt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{qt=kl.inject(wx),Rt=kl}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=_p,f=vp,y=xp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=Wm(t,1,!1,null,null,a,s,c,f,y,w,null),t[Wt]=n.current,hf(t.nodeType===8?t.parentNode:t),new Df(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=_p,y=vp,w=xp,z=null,Z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(Z=a.formState)),n=Wm(t,1,!0,n,a??null,s,c,f,y,w,z,Z),n.context=Xm(null),a=n.current,s=Kn(),c=va(s),c.callback=null,xa(a,c,s),n.current.lanes=s,ue(n,s),Ci(n),t[Wt]=n.current,hf(t),new Vl(n)},Co.version="19.0.0",Co}var ug;function Bx(){if(ug)return Nf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zx(),Nf.exports}var Fx=Bx();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ix=0,fg=1,Hx=2,W_=1,X_=2,ea=3,ka=0,Wn=1,Li=2,Ia=0,Es=1,md=2,dg=3,hg=4,Gx=5,mr=100,Vx=101,kx=102,pg=103,mg=104,Wx=200,Xx=201,qx=202,Yx=203,gd=204,_d=205,jx=206,Zx=207,Kx=208,Qx=209,Jx=210,$x=211,ty=212,ey=213,ny=214,iy=0,ay=1,ry=2,mc=3,sy=4,oy=5,ly=6,cy=7,Rd=0,uy=1,fy=2,Ha=0,dy=1,hy=2,py=3,my=4,gy=5,_y=6,q_=300,As=301,ws=302,vd=303,xd=304,Ec=306,yd=1e3,Si=1001,Sd=1002,In=1003,gg=1004,Do=1005,kn=1006,Bf=1007,_r=1008,Ga=1009,vy=1010,xy=1011,Cd=1012,Y_=1013,Fa=1014,na=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,yy=1021,Mi=1023,Sy=1024,My=1025,xr=1026,Rs=1027,Ey=1028,K_=1029,by=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,_g=35840,vg=35841,xg=35842,yg=35843,$_=36196,Sg=37492,Mg=37496,Eg=37808,bg=37809,Tg=37810,Ag=37811,wg=37812,Rg=37813,Cg=37814,Dg=37815,Lg=37816,Ug=37817,Ng=37818,Og=37819,Pg=37820,zg=37821,Vf=36492,Bg=36494,Fg=36495,Ty=36283,Ig=36284,Hg=36285,Gg=36286,t0=3e3,yr=3001,Ay=3200,wy=3201,e0=0,Ry=1,di="",An="srgb",aa="srgb-linear",Dd="display-p3",bc="display-p3-linear",gc="linear",Ze="srgb",_c="rec709",vc="p3",is=7680,Vg=519,Cy=512,Dy=513,Ly=514,n0=515,Uy=516,Ny=517,Oy=518,Py=519,kg=35044,Wg="300 es",Md=1035,ia=2e3,xc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function Ld(o,e){return(o%e+e)%e}function zy(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function By(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function Fy(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function Iy(o,e=1){return e-Math.abs(Ld(o,e*2)-e)}function Hy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Gy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Vy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ky(o,e){return o+Math.random()*(e-o)}function Wy(o){return o*(.5-Math.random())}function Xy(o){o!==void 0&&(Xg=o);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qy(o){return o*zo}function Yy(o){return o*Io}function Ed(o){return(o&o-1)===0&&o!==0}function jy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zy(o,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((e+r)/2),g=h((e+r)/2),x=u((e-r)/2),S=h((e-r)/2),M=u((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":o.set(d*g,p*x,p*S,d*m);break;case"YZY":o.set(p*S,d*g,p*x,d*m);break;case"ZXZ":o.set(p*x,p*S,d*g,d*m);break;case"XZX":o.set(d*g,p*A,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*A,d*m);break;case"ZYZ":o.set(p*A,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function xs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const hr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Nn,euclideanModulo:Ld,mapLinear:zy,inverseLerp:By,lerp:Bo,damp:Fy,pingpong:Iy,smoothstep:Hy,smootherstep:Gy,randInt:Vy,randFloat:ky,randFloatSpread:Wy,seededRandom:Xy,degToRad:qy,radToDeg:Yy,isPowerOfTwo:Ed,ceilPowerOfTwo:jy,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Zy,normalize:Bn,denormalize:xs};class xe{constructor(e=0,i=0){xe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,i,r,l,u,h,d,p,m){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],x=r[7],S=r[2],M=r[5],A=r[8],C=l[0],v=l[3],_=l[6],P=l[1],L=l[4],B=l[7],W=l[2],V=l[5],F=l[8];return u[0]=h*C+d*P+p*W,u[3]=h*v+d*L+p*V,u[6]=h*_+d*B+p*F,u[1]=m*C+g*P+x*W,u[4]=m*v+g*L+x*V,u[7]=m*_+g*B+x*F,u[2]=S*C+M*P+A*W,u[5]=S*v+M*L+A*V,u[8]=S*_+M*B+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=g*h-d*m,S=d*p-g*u,M=m*u-h*p,A=i*x+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(l*m-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(g*i-l*p)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(r*p-m*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Ce;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ky(){const o=Sc("canvas");return o.style.display="block",o}const qg={};function bs(o){o in qg||(qg[o]=!0,console.warn(o))}const Yg=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jg=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[aa]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[An]:{transfer:Ze,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[bc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg)},[Dd]:{transfer:Ze,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg).convertLinearToSRGB()}},Qy=new Set([aa,bc]),ke={enabled:!0,_workingColorSpace:aa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===di?gc:Wl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Sc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Sc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ts(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $y=0;class Xn extends Er{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Si,l=Si,u=kn,h=_r,d=Mi,p=Ga,m=Xn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===yr?An:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?yr:t0}set encoding(e){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?An:di}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=q_;Xn.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],x=p[8],S=p[1],M=p[5],A=p[9],C=p[2],v=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(x-C)<.01&&Math.abs(A-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+C)<.1&&Math.abs(A+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,B=(M+1)/2,W=(_+1)/2,V=(g+S)/4,F=(x+C)/4,vt=(A+v)/4;return L>B&&L>W?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=V/r,u=F/r):B>W?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=V/l,u=vt/l):W<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(W),r=F/u,l=vt/u),this.set(r,l,u,i),this}let P=Math.sqrt((v-A)*(v-A)+(x-C)*(x-C)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(v-A)/P,this.y=(x-C)/P,this.z=(S-g)/P,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tS extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Qe(0,0,e,i),this.scissorTest=!1,this.viewport=new Qe(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===yr?An:di),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends tS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eS extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],C=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(x!==C||p!==S||m!==M||g!==A){let v=1-d;const _=p*S+m*M+g*A+x*C,P=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const W=Math.sqrt(L),V=Math.atan2(W,_*P);v=Math.sin(v*V)/W,d=Math.sin(d*V)/W}const B=d*P;if(p=p*v+S*B,m=m*v+M*B,g=g*v+A*B,x=x*v+C*B,v===1-d){const W=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=W,m*=W,g*=W,x*=W}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*x+p*M-m*S,e[i+1]=p*A+g*S+m*x-d*M,e[i+2]=m*A+g*M+d*S-p*x,e[i+3]=g*A-d*x-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),x=d(u/2),S=p(r/2),M=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=S*g*x+m*M*A,this._y=m*M*x-S*g*A,this._z=m*g*A+S*M*x,this._w=m*g*x-S*M*A;break;case"YXZ":this._x=S*g*x+m*M*A,this._y=m*M*x-S*g*A,this._z=m*g*A-S*M*x,this._w=m*g*x+S*M*A;break;case"ZXY":this._x=S*g*x-m*M*A,this._y=m*M*x+S*g*A,this._z=m*g*A+S*M*x,this._w=m*g*x-S*M*A;break;case"ZYX":this._x=S*g*x-m*M*A,this._y=m*M*x+S*g*A,this._z=m*g*A-S*M*x,this._w=m*g*x+S*M*A;break;case"YZX":this._x=S*g*x+m*M*A,this._y=m*M*x+S*g*A,this._z=m*g*A-S*M*x,this._w=m*g*x-S*M*A;break;case"XZY":this._x=S*g*x-m*M*A,this._y=m*M*x-S*g*A,this._z=m*g*A+S*M*x,this._w=m*g*x+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],x=i[10],S=r+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+p*m+h*x-d*g,this.y=r+p*g+d*m-u*x,this.z=l+p*x+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new Y,Zg=new Mr;class Ho{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ql.subVectors(this.max,Lo),rs.subVectors(e.a,Lo),ss.subVectors(e.b,Lo),os.subVectors(e.c,Lo),La.subVectors(ss,rs),Ua.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-cr.z,cr.y,La.z,0,-La.x,Ua.z,0,-Ua.x,cr.z,0,-cr.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-cr.y,cr.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(La,Ua),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],vi=new Y,Xl=new Ho,rs=new Y,ss=new Y,os=new Y,La=new Y,Ua=new Y,cr=new Y,Lo=new Y,ql=new Y,Yl=new Y,ur=new Y;function Yf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ur.fromArray(o,u);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const nS=new Ho,Uo=new Y,jf=new Y;class Tc{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(jf)),this.expandByPoint(Uo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new Y,Zf=new Y,jl=new Y,Na=new Y,Kf=new Y,Zl=new Y,Qf=new Y;class Ud{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Na.dot(this.direction),p=-Na.dot(jl),m=Na.lengthSq(),g=Math.abs(1-h*h);let x,S,M,A;if(g>0)if(x=h*p-d,S=h*d-p,A=u*g,x>=0)if(S>=-A)if(S<=A){const C=1/g;x*=C,S*=C,M=x*(x+h*S+2*d)+S*(h*x+S+2*p)+m}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;else S<=-A?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m):S<=A?(x=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Zf).addScaledVector(jl,S),M}intersectSphere(e,i){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,p=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,p=(e.min.z-S.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const p=d*this.direction.dot(Zl.crossVectors(Na,Zl));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Na));if(m<0||p+m>h)return null;const g=-d*Na.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,u,h,d,p,m,g,x,S,M,A,C,v){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,x,S,M,A,C,v)}set(e,i,r,l,u,h,d,p,m,g,x,S,M,A,C,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=S,_[3]=M,_[7]=A,_[11]=C,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*x,A=d*g,C=d*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+A*m,i[5]=S-C*m,i[9]=-d*p,i[2]=C-S*m,i[6]=A+M*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,M=p*x,A=m*g,C=m*x;i[0]=S+C*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=C+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,M=p*x,A=m*g,C=m*x;i[0]=S-C*d,i[4]=-h*x,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,M=h*x,A=d*g,C=d*x;i[0]=p*g,i[4]=A*m-M,i[8]=S*m+C,i[1]=p*x,i[5]=C*m+S,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,M=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=C-S*x,i[8]=A*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*x+A,i[10]=S-C*x}else if(e.order==="XZY"){const S=h*p,M=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=S*x+C,i[5]=h*g,i[9]=M*x-A,i[2]=A*x-M,i[6]=d*g,i[10]=C*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iS,e,aS)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Oa.crossVectors(r,Qn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Oa.crossVectors(r,Qn)),Oa.normalize(),Kl.crossVectors(Qn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Qn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Qn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],x=r[5],S=r[9],M=r[13],A=r[2],C=r[6],v=r[10],_=r[14],P=r[3],L=r[7],B=r[11],W=r[15],V=l[0],F=l[4],vt=l[8],I=l[12],b=l[1],N=l[5],mt=l[9],bt=l[13],j=l[2],st=l[6],G=l[10],ot=l[14],$=l[3],ut=l[7],D=l[11],K=l[15];return u[0]=h*V+d*b+p*j+m*$,u[4]=h*F+d*N+p*st+m*ut,u[8]=h*vt+d*mt+p*G+m*D,u[12]=h*I+d*bt+p*ot+m*K,u[1]=g*V+x*b+S*j+M*$,u[5]=g*F+x*N+S*st+M*ut,u[9]=g*vt+x*mt+S*G+M*D,u[13]=g*I+x*bt+S*ot+M*K,u[2]=A*V+C*b+v*j+_*$,u[6]=A*F+C*N+v*st+_*ut,u[10]=A*vt+C*mt+v*G+_*D,u[14]=A*I+C*bt+v*ot+_*K,u[3]=P*V+L*b+B*j+W*$,u[7]=P*F+L*N+B*st+W*ut,u[11]=P*vt+L*mt+B*G+W*D,u[15]=P*I+L*bt+B*ot+W*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],x=e[6],S=e[10],M=e[14],A=e[3],C=e[7],v=e[11],_=e[15];return A*(+u*p*x-l*m*x-u*d*S+r*m*S+l*d*M-r*p*M)+C*(+i*p*M-i*m*S+u*h*S-l*h*M+l*m*g-u*p*g)+v*(+i*m*x-i*d*M-u*h*x+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*x+i*d*S+l*h*x-r*h*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=e[9],S=e[10],M=e[11],A=e[12],C=e[13],v=e[14],_=e[15],P=x*v*m-C*S*m+C*p*M-d*v*M-x*p*_+d*S*_,L=A*S*m-g*v*m-A*p*M+h*v*M+g*p*_-h*S*_,B=g*C*m-A*x*m+A*d*M-h*C*M-g*d*_+h*x*_,W=A*x*p-g*C*p-A*d*S+h*C*S+g*d*v-h*x*v,V=i*P+r*L+l*B+u*W;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return e[0]=P*F,e[1]=(C*S*u-x*v*u-C*l*M+r*v*M+x*l*_-r*S*_)*F,e[2]=(d*v*u-C*p*u+C*l*m-r*v*m-d*l*_+r*p*_)*F,e[3]=(x*p*u-d*S*u-x*l*m+r*S*m+d*l*M-r*p*M)*F,e[4]=L*F,e[5]=(g*v*u-A*S*u+A*l*M-i*v*M-g*l*_+i*S*_)*F,e[6]=(A*p*u-h*v*u-A*l*m+i*v*m+h*l*_-i*p*_)*F,e[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*M+i*p*M)*F,e[8]=B*F,e[9]=(A*x*u-g*C*u-A*r*M+i*C*M+g*r*_-i*x*_)*F,e[10]=(h*C*u-A*d*u+A*r*m-i*C*m-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*x*u-g*r*m+i*x*m+h*r*M-i*d*M)*F,e[12]=W*F,e[13]=(g*C*l-A*x*l+A*r*S-i*C*S-g*r*v+i*x*v)*F,e[14]=(A*d*l-h*C*l-A*r*p+i*C*p+h*r*v-i*d*v)*F,e[15]=(h*x*l-g*d*l+g*r*p-i*x*p-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,x=d+d,S=u*m,M=u*g,A=u*x,C=h*g,v=h*x,_=d*x,P=p*m,L=p*g,B=p*x,W=r.x,V=r.y,F=r.z;return l[0]=(1-(C+_))*W,l[1]=(M+B)*W,l[2]=(A-L)*W,l[3]=0,l[4]=(M-B)*V,l[5]=(1-(S+_))*V,l[6]=(v+P)*V,l[7]=0,l[8]=(A+L)*F,l[9]=(v-P)*F,l[10]=(1-(S+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const m=1/u,g=1/h,x=1/d;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=x,xi.elements[9]*=x,xi.elements[10]*=x,i.setFromRotationMatrix(xi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ia){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),S=(r+l)/(r-l);let M,A;if(d===ia)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===xc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ia){const p=this.elements,m=1/(i-e),g=1/(r-l),x=1/(h-u),S=(i+e)*m,M=(r+l)*g;let A,C;if(d===ia)A=(h+u)*x,C=-2*x;else if(d===xc)A=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new Y,xi=new ln,iS=new Y(0,0,0),aS=new Y(1,1,1),Oa=new Y,Kl=new Y,Qn=new Y,Kg=new ln,Qg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const Jg=new Y,cs=new Mr,Ji=new ln,Ql=new Y,No=new Y,sS=new Y,oS=new Mr,$g=new Y(1,0,0),t_=new Y(0,1,0),e_=new Y(0,0,1),lS={type:"added"},cS={type:"removed"};class wn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new Y,i=new Ac,r=new Mr,l=new Y(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new Ce}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(No,Ql,this.up):Ji.lookAt(Ql,No,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(Ji),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Y(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new Y,$i=new Y,Jf=new Y,ta=new Y,us=new Y,fs=new Y,n_=new Y,$f=new Y,td=new Y,ed=new Y;class Ui{constructor(e=new Y,i=new Y,r=new Y){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),$i.subVectors(r,i),Jf.subVectors(e,i);const h=yi.dot(yi),d=yi.dot($i),p=yi.dot(Jf),m=$i.dot($i),g=$i.dot(Jf),x=h*m-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(m*p-d*g)*S,A=(h*g-d*p)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ta.x),p.addScaledVector(h,ta.y),p.addScaledVector(d,ta.z),p)}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),$i.subVectors(e,i),yi.cross($i).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),yi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);td.subVectors(e,l);const g=us.dot(td),x=fs.dot(td);if(g>=0&&x<=g)return i.copy(l);const S=p*x-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(us,h);ed.subVectors(e,u);const M=us.dot(ed),A=fs.dot(ed);if(A>=0&&M<=A)return i.copy(u);const C=M*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(fs,d);const v=g*A-M*x;if(v<=0&&x-g>=0&&M-A>=0)return n_.subVectors(u,l),d=(x-g)/(x-g+(M-A)),i.copy(l).addScaledVector(n_,d);const _=1/(v+C+S);return h=C*_,d=S*_,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=ke.workingColorSpace){return this.r=e,this.g=i,this.b=r,ke.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=ke.workingColorSpace){if(e=Ld(e,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nd(h,u,e+1/3),this.g=nd(h,u,e),this.b=nd(h,u,e-1/3)}return ke.toWorkingColorSpace(this,l),this}setStyle(e,i=An){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=An){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return ke.fromWorkingColorSpace(Un.copy(this),e),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ke.workingColorSpace){ke.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=ke.workingColorSpace){return ke.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=An){ke.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==An?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Bo(Pa.h,Jl.h,i),l=Bo(Pa.s,Jl.s,i),u=Bo(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ue;Ue.NAMES=l0;let uS=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new Y,$l=new xe;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class u0 extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fS=0;const fi=new ln,id=new wn,ds=new Y,Jn=new Ho,Oo=new Ho,Sn=new Y;class Oi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new hi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(Jn.min,Oo.min),Jn.expandByPoint(Sn),Sn.addVectors(Jn.max,Oo.max),Jn.expandByPoint(Sn)):(Jn.expandByPoint(Oo.min),Jn.expandByPoint(Oo.max))}Jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(ds.fromBufferAttribute(e,m),Sn.add(ds)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let b=0;b<d;b++)m[b]=new Y,g[b]=new Y;const x=new Y,S=new Y,M=new Y,A=new xe,C=new xe,v=new xe,_=new Y,P=new Y;function L(b,N,mt){x.fromArray(l,b*3),S.fromArray(l,N*3),M.fromArray(l,mt*3),A.fromArray(h,b*2),C.fromArray(h,N*2),v.fromArray(h,mt*2),S.sub(x),M.sub(x),C.sub(A),v.sub(A);const bt=1/(C.x*v.y-v.x*C.y);isFinite(bt)&&(_.copy(S).multiplyScalar(v.y).addScaledVector(M,-C.y).multiplyScalar(bt),P.copy(M).multiplyScalar(C.x).addScaledVector(S,-v.x).multiplyScalar(bt),m[b].add(_),m[N].add(_),m[mt].add(_),g[b].add(P),g[N].add(P),g[mt].add(P))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let b=0,N=B.length;b<N;++b){const mt=B[b],bt=mt.start,j=mt.count;for(let st=bt,G=bt+j;st<G;st+=3)L(r[st+0],r[st+1],r[st+2])}const W=new Y,V=new Y,F=new Y,vt=new Y;function I(b){F.fromArray(u,b*3),vt.copy(F);const N=m[b];W.copy(N),W.sub(F.multiplyScalar(F.dot(N))).normalize(),V.crossVectors(vt,N);const bt=V.dot(g[b])<0?-1:1;p[b*4]=W.x,p[b*4+1]=W.y,p[b*4+2]=W.z,p[b*4+3]=bt}for(let b=0,N=B.length;b<N;++b){const mt=B[b],bt=mt.start,j=mt.count;for(let st=bt,G=bt+j;st<G;st+=3)I(r[st+0]),I(r[st+1]),I(r[st+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new Y,u=new Y,h=new Y,d=new Y,p=new Y,m=new Y,g=new Y,x=new Y;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),C=e.getX(S+1),v=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,v),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,x=d.normalized,S=new m.constructor(p.length*g);let M=0,A=0;for(let C=0,v=p.length;C<v;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*g;for(let _=0;_<g;_++)S[A++]=m[M++]}return new Ni(S,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,x=m.length;g<x;g++){const S=m[g],M=e(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,S=m.length;x<S;x++){const M=m[x];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],x=u[m];for(let S=0,M=x.length;S<M;S++)g.push(x[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new ln,fr=new Ud,tc=new Tc,a_=new Y,hs=new Y,ps=new Y,ms=new Y,ad=new Y,ec=new Y,nc=new xe,ic=new xe,ac=new xe,r_=new Y,s_=new Y,o_=new Y,rc=new Y,sc=new Y;class ti extends wn{constructor(e=new Oi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],x=u[p];g!==0&&(ad.fromBufferAttribute(x,e),h?ec.addScaledVector(ad,g):ec.addScaledVector(ad.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(tc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(tc,a_)===null||fr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const v=S[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),L=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,W=L;B<W;B+=3){const V=d.getX(B),F=d.getX(B+1),vt=d.getX(B+2);l=oc(this,_,e,r,m,g,x,V,F,vt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let v=A,_=C;v<_;v+=3){const P=d.getX(v),L=d.getX(v+1),B=d.getX(v+2);l=oc(this,h,e,r,m,g,x,P,L,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const v=S[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),L=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,W=L;B<W;B+=3){const V=B,F=B+1,vt=B+2;l=oc(this,_,e,r,m,g,x,V,F,vt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let v=A,_=C;v<_;v+=3){const P=v,L=v+1,B=v+2;l=oc(this,h,e,r,m,g,x,P,L,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function dS(o,e,i,r,l,u,h,d){let p;if(e.side===Wn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===ka,d),p===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,hs),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=dS(o,e,i,r,hs,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,d),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Ui.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new xe)),u&&(nc.fromBufferAttribute(u,d),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Ui.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new xe),g.uv2=g.uv1),h&&(r_.fromBufferAttribute(h,d),s_.fromBufferAttribute(h,p),o_.fromBufferAttribute(h,m),g.normal=Ui.getInterpolation(rc,hs,ps,ms,r_,s_,o_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Y,materialIndex:0};Ui.getNormal(hs,ps,ms,x.normal),g.face=x}return g}class Va extends Oi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],x=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new hi(m,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(x,2));function A(C,v,_,P,L,B,W,V,F,vt,I){const b=B/F,N=W/vt,mt=B/2,bt=W/2,j=V/2,st=F+1,G=vt+1;let ot=0,$=0;const ut=new Y;for(let D=0;D<G;D++){const K=D*N-bt;for(let pt=0;pt<st;pt++){const wt=pt*b-mt;ut[C]=wt*P,ut[v]=K*L,ut[_]=j,m.push(ut.x,ut.y,ut.z),ut[C]=0,ut[v]=0,ut[_]=V>0?1:-1,g.push(ut.x,ut.y,ut.z),x.push(pt/F),x.push(1-D/vt),ot+=1}}for(let D=0;D<vt;D++)for(let K=0;K<F;K++){const pt=S+K+st*D,wt=S+K+st*(D+1),X=S+(K+1)+st*(D+1),dt=S+(K+1)+st*D;p.push(pt,wt,dt),p.push(wt,X,dt),$+=6}d.addGroup(M,$,I),M+=$,S+=ot}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function hS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function d0(o){return o.getRenderTarget()===null?o.outputColorSpace:ke.workingColorSpace}const pS={clone:Cs,merge:Fn};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=hS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new Y,l_=new xe,c_=new xe;class $n extends h0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _S extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new $n(gs,_s,e,i);u.layers=this.layers,this.add(u);const h=new $n(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new $n(gs,_s,e,i);d.layers=this.layers,this.add(d);const p=new $n(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new $n(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class p0 extends Xn{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vS extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?An:di),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Va(5,5,5),u=new ra({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new ti(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=kn),new _S(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const rd=new Y,xS=new Y,yS=new Ce;class Ba{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rd.subVectors(r,i).cross(xS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yS.getNormalMatrix(e),l=this.coplanarPoint(rd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Tc,lc=new Y;class Nd{constructor(e=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],x=l[6],S=l[7],M=l[8],A=l[9],C=l[10],v=l[11],_=l[12],P=l[13],L=l[14],B=l[15];if(r[0].setComponents(p-u,S-m,v-M,B-_).normalize(),r[1].setComponents(p+u,S+m,v+M,B+_).normalize(),r[2].setComponents(p+h,S+g,v+A,B+P).normalize(),r[3].setComponents(p-h,S-g,v-A,B-P).normalize(),r[4].setComponents(p-d,S-x,v-C,B-L).normalize(),i===ia)r[5].setComponents(p+d,S+x,v+C,B+L).normalize();else if(i===xc)r[5].setComponents(d,x,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SS(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const x=m.array,S=m.usage,M=x.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,x,S),m.onUploadCallback();let C;if(x instanceof Float32Array)C=o.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)C=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)C=o.SHORT;else if(x instanceof Uint32Array)C=o.UNSIGNED_INT;else if(x instanceof Int32Array)C=o.INT;else if(x instanceof Int8Array)C=o.BYTE;else if(x instanceof Uint8Array)C=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)C=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:A,type:C,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,x){const S=g.array,M=g._updateRange,A=g.updateRanges;if(o.bindBuffer(x,m),M.count===-1&&A.length===0&&o.bufferSubData(x,0,S),A.length!==0){for(let C=0,v=A.length;C<v;C++){const _=A[C];i?o.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):o.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):o.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=r.get(m);(!S||S.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);if(x===void 0)r.set(m,l(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,m,g),x.version=m.version}}return{get:h,remove:d,update:p}}class wc extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,x=e/d,S=i/p,M=[],A=[],C=[],v=[];for(let _=0;_<g;_++){const P=_*S-h;for(let L=0;L<m;L++){const B=L*x-u;A.push(B,-P,0),C.push(0,0,1),v.push(L/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const L=P+m*_,B=P+m*(_+1),W=P+1+m*(_+1),V=P+1+m*_;M.push(L,B,V),M.push(B,W,V)}this.setIndex(M),this.setAttribute("position",new hi(A,3)),this.setAttribute("normal",new hi(C,3)),this.setAttribute("uv",new hi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var MS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ES=`#ifdef USE_ALPHAHASH
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
#endif`,bS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RS=`#ifdef USE_AOMAP
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
#endif`,CS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS=`#ifdef USE_BATCHING
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
#endif`,LS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PS=`#ifdef USE_IRIDESCENCE
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
#endif`,zS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XS=`#define PI 3.141592653589793
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
} // validated`,qS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YS=`vec3 transformedNormal = objectNormal;
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
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`
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
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
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
#endif`,SM=`struct PhysicalMaterial {
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
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
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
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
}`,DE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
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
}`,tb=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:MS,alphahash_pars_fragment:ES,alphamap_fragment:bS,alphamap_pars_fragment:TS,alphatest_fragment:AS,alphatest_pars_fragment:wS,aomap_fragment:RS,aomap_pars_fragment:CS,batching_pars_vertex:DS,batching_vertex:LS,begin_vertex:US,beginnormal_vertex:NS,bsdfs:OS,iridescence_fragment:PS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:HS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:kS,color_vertex:WS,common:XS,cube_uv_reflection_fragment:qS,defaultnormal_vertex:YS,displacementmap_pars_vertex:jS,displacementmap_vertex:ZS,emissivemap_fragment:KS,emissivemap_pars_fragment:QS,colorspace_fragment:JS,colorspace_pars_fragment:$S,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:xM,lights_physical_fragment:yM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:bM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:yE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:bE,cube_vert:TE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tb},Xt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Di={basic:{uniforms:Fn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Fn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Fn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Fn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Fn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Fn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Fn([Xt.points,Xt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Fn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Fn([Xt.common,Xt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Fn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Fn([Xt.sprite,Xt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Fn([Xt.common,Xt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Fn([Xt.lights,Xt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Di.physical={uniforms:Fn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const cc={r:0,b:0,g:0};function eb(o,e,i,r,l,u,h){const d=new Ue(0);let p=u===!0?0:1,m,g,x=null,S=0,M=null;function A(v,_){let P=!1,L=_.isScene===!0?_.background:null;L&&L.isTexture&&(L=(_.backgroundBlurriness>0?i:e).get(L)),L===null?C(d,p):L&&L.isColor&&(C(L,1),P=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===Ec)?(g===void 0&&(g=new ti(new Va(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:Cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,V,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=ke.getTransfer(L.colorSpace)!==Ze,(x!==L||S!==L.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=L,S=L.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new ti(new wc(2,2),new ra({name:"BackgroundMaterial",uniforms:Cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=ke.getTransfer(L.colorSpace)!==Ze,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||S!==L.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=L,S=L.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function C(v,_){v.getRGB(cc,d0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,C(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,C(d,p)},render:A}}function nb(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function x(j,st,G,ot,$){let ut=!1;if(h){const D=C(ot,G,st);m!==D&&(m=D,M(m.object)),ut=_(j,ot,G,$),ut&&P(j,ot,G,$)}else{const D=st.wireframe===!0;(m.geometry!==ot.id||m.program!==G.id||m.wireframe!==D)&&(m.geometry=ot.id,m.program=G.id,m.wireframe=D,ut=!0)}$!==null&&i.update($,o.ELEMENT_ARRAY_BUFFER),(ut||g)&&(g=!1,vt(j,st,G,ot),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get($).buffer))}function S(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(j){return r.isWebGL2?o.bindVertexArray(j):u.bindVertexArrayOES(j)}function A(j){return r.isWebGL2?o.deleteVertexArray(j):u.deleteVertexArrayOES(j)}function C(j,st,G){const ot=G.wireframe===!0;let $=d[j.id];$===void 0&&($={},d[j.id]=$);let ut=$[st.id];ut===void 0&&(ut={},$[st.id]=ut);let D=ut[ot];return D===void 0&&(D=v(S()),ut[ot]=D),D}function v(j){const st=[],G=[],ot=[];for(let $=0;$<l;$++)st[$]=0,G[$]=0,ot[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:G,attributeDivisors:ot,object:j,attributes:{},index:null}}function _(j,st,G,ot){const $=m.attributes,ut=st.attributes;let D=0;const K=G.getAttributes();for(const pt in K)if(K[pt].location>=0){const X=$[pt];let dt=ut[pt];if(dt===void 0&&(pt==="instanceMatrix"&&j.instanceMatrix&&(dt=j.instanceMatrix),pt==="instanceColor"&&j.instanceColor&&(dt=j.instanceColor)),X===void 0||X.attribute!==dt||dt&&X.data!==dt.data)return!0;D++}return m.attributesNum!==D||m.index!==ot}function P(j,st,G,ot){const $={},ut=st.attributes;let D=0;const K=G.getAttributes();for(const pt in K)if(K[pt].location>=0){let X=ut[pt];X===void 0&&(pt==="instanceMatrix"&&j.instanceMatrix&&(X=j.instanceMatrix),pt==="instanceColor"&&j.instanceColor&&(X=j.instanceColor));const dt={};dt.attribute=X,X&&X.data&&(dt.data=X.data),$[pt]=dt,D++}m.attributes=$,m.attributesNum=D,m.index=ot}function L(){const j=m.newAttributes;for(let st=0,G=j.length;st<G;st++)j[st]=0}function B(j){W(j,0)}function W(j,st){const G=m.newAttributes,ot=m.enabledAttributes,$=m.attributeDivisors;G[j]=1,ot[j]===0&&(o.enableVertexAttribArray(j),ot[j]=1),$[j]!==st&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,st),$[j]=st)}function V(){const j=m.newAttributes,st=m.enabledAttributes;for(let G=0,ot=st.length;G<ot;G++)st[G]!==j[G]&&(o.disableVertexAttribArray(G),st[G]=0)}function F(j,st,G,ot,$,ut,D){D===!0?o.vertexAttribIPointer(j,st,G,$,ut):o.vertexAttribPointer(j,st,G,ot,$,ut)}function vt(j,st,G,ot){if(r.isWebGL2===!1&&(j.isInstancedMesh||ot.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const $=ot.attributes,ut=G.getAttributes(),D=st.defaultAttributeValues;for(const K in ut){const pt=ut[K];if(pt.location>=0){let wt=$[K];if(wt===void 0&&(K==="instanceMatrix"&&j.instanceMatrix&&(wt=j.instanceMatrix),K==="instanceColor"&&j.instanceColor&&(wt=j.instanceColor)),wt!==void 0){const X=wt.normalized,dt=wt.itemSize,Et=i.get(wt);if(Et===void 0)continue;const Zt=Et.buffer,Bt=Et.type,Ft=Et.bytesPerElement,te=r.isWebGL2===!0&&(Bt===o.INT||Bt===o.UNSIGNED_INT||wt.gpuType===Y_);if(wt.isInterleavedBufferAttribute){const ne=wt.data,J=ne.stride,Be=wt.offset;if(ne.isInstancedInterleavedBuffer){for(let ie=0;ie<pt.locationSize;ie++)W(pt.location+ie,ne.meshPerAttribute);j.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<pt.locationSize;ie++)B(pt.location+ie);o.bindBuffer(o.ARRAY_BUFFER,Zt);for(let ie=0;ie<pt.locationSize;ie++)F(pt.location+ie,dt/pt.locationSize,Bt,X,J*Ft,(Be+dt/pt.locationSize*ie)*Ft,te)}else{if(wt.isInstancedBufferAttribute){for(let ne=0;ne<pt.locationSize;ne++)W(pt.location+ne,wt.meshPerAttribute);j.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let ne=0;ne<pt.locationSize;ne++)B(pt.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Zt);for(let ne=0;ne<pt.locationSize;ne++)F(pt.location+ne,dt/pt.locationSize,Bt,X,dt*Ft,dt/pt.locationSize*ne*Ft,te)}}else if(D!==void 0){const X=D[K];if(X!==void 0)switch(X.length){case 2:o.vertexAttrib2fv(pt.location,X);break;case 3:o.vertexAttrib3fv(pt.location,X);break;case 4:o.vertexAttrib4fv(pt.location,X);break;default:o.vertexAttrib1fv(pt.location,X)}}}}V()}function I(){mt();for(const j in d){const st=d[j];for(const G in st){const ot=st[G];for(const $ in ot)A(ot[$].object),delete ot[$];delete st[G]}delete d[j]}}function b(j){if(d[j.id]===void 0)return;const st=d[j.id];for(const G in st){const ot=st[G];for(const $ in ot)A(ot[$].object),delete ot[$];delete st[G]}delete d[j.id]}function N(j){for(const st in d){const G=d[st];if(G[j.id]===void 0)continue;const ot=G[j.id];for(const $ in ot)A(ot[$].object),delete ot[$];delete G[j.id]}}function mt(){bt(),g=!0,m!==p&&(m=p,M(m.object))}function bt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:mt,resetDefaultState:bt,dispose:I,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:L,enableAttribute:B,disableUnusedAttributes:V}}function ib(o,e,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function p(g,x,S){if(S===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,g,x,S),i.update(x,u,S)}function m(g,x,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<S;A++)this.render(g[A],x[A]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,S);let A=0;for(let C=0;C<S;C++)A+=x[C];i.update(A,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function ab(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),C=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,B=h||e.has("OES_texture_float"),W=L&&B,V=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:A,maxAttributes:C,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:L,floatFragmentTextures:B,floatVertexTextures:W,maxSamples:V}}function rb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Ba,d=new Ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||l;return l=S,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,M){const A=x.clippingPlanes,C=x.clipIntersection,v=x.clipShadows,_=o.get(x);if(!l||A===null||A.length===0||u&&!v)u?g(null):m();else{const P=u?0:r,L=P*4;let B=_.clippingState||null;p.value=B,B=g(A,S,L,M);for(let W=0;W!==L;++W)B[W]=i[W];_.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,S,M,A){const C=x!==null?x.length:0;let v=null;if(C!==0){if(v=p.value,A!==!0||v===null){const _=M+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let L=0,B=M;L!==C;++L,B+=4)h.copy(x[L]).applyMatrix4(P,d),h.normal.toArray(v,B),v[B+3]=h.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function sb(o){let e=new WeakMap;function i(h,d){return d===vd?h.mapping=As:d===xd&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===xd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new vS(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends h0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ys=4,u_=[.125,.215,.35,.446,.526,.582],gr=20,sd=new g0,f_=new Ue;let od=null,ld=0,cd=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,d_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,pr,vs),new Y(0,pr,-vs),new Y(vs,0,pr),new Y(-vs,0,pr),new Y(pr,vs,0),new Y(-pr,vs,0)];class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Fo,format:Mi,colorSpace:aa,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(u)),this._blurMaterial=lb(u,e,i)}return l}_compileMaterial(e){const i=new ti(this._lodPlanes[0],e);this._renderer.compile(i,sd)}_sceneToCubeUV(e,i,r,l){const d=new $n(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(f_),g.toneMapping=Ha,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),A=new ti(new Va,M);let C=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,C=!0):(M.color.copy(f_),C=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):P===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const L=this._cubeSize;uc(l,P*L,_>2?L:0,L,L),g.setRenderTarget(l),C&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ti(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=d_[(l-1)%d_.length];this._blur(e,l-1,l,u,h)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ti(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),C=u/A,v=isFinite(u)?1+Math.floor(g*C):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let P=0;for(let F=0;F<gr;++F){const vt=F/C,I=Math.exp(-vt*vt/2);_.push(I),F===0?P+=I:F<v&&(P+=2*I)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=A,S.mipInt.value=L-r;const B=this._sizeLods[l],W=3*B*(l>L-ys?l-L+ys:0),V=4*(this._cubeSize-B);uc(i,W,V,3*B,2*B),p.setRenderTarget(i),p.render(x,sd)}}function ob(o){const e=[],i=[],r=[];let l=o;const u=o-ys+1+u_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-ys?p=u_[h-o+ys-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,x=1+m,S=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,A=6,C=3,v=2,_=1,P=new Float32Array(C*A*M),L=new Float32Array(v*A*M),B=new Float32Array(_*A*M);for(let V=0;V<M;V++){const F=V%3*2/3-1,vt=V>2?0:-1,I=[F,vt,0,F+2/3,vt,0,F+2/3,vt+1,0,F,vt,0,F+2/3,vt+1,0,F,vt+1,0];P.set(I,C*A*V),L.set(S,v*A*V);const b=[V,V,V,V,V,V];B.set(b,_*A*V)}const W=new Oi;W.setAttribute("position",new Ni(P,C)),W.setAttribute("uv",new Ni(L,v)),W.setAttribute("faceIndex",new Ni(B,_)),e.push(W),l>ys&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function p_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lb(o,e,i){const r=new Float32Array(gr),l=new Y(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function m_(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function g_(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Od(){return`

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
	`}function cb(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vd||p===xd,g=p===As||p===ws;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=e.get(d);return i===null&&(i=new h_(o)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),e.set(d,x),x.texture}else{if(e.has(d))return e.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new h_(o));const S=m?i.fromEquirectangular(d):i.fromCubemap(d);return e.set(d,S),d.addEventListener("dispose",u),S.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ub(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fb(o,e,i,r){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);for(const A in S.morphAttributes){const C=S.morphAttributes[A];for(let v=0,_=C.length;v<_;v++)e.remove(C[v])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(x){const S=x.attributes;for(const A in S)e.update(S[A],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const A in M){const C=M[A];for(let v=0,_=C.length;v<_;v++)e.update(C[v],o.ARRAY_BUFFER)}}function m(x){const S=[],M=x.index,A=x.attributes.position;let C=0;if(M!==null){const P=M.array;C=M.version;for(let L=0,B=P.length;L<B;L+=3){const W=P[L+0],V=P[L+1],F=P[L+2];S.push(W,V,V,F,F,W)}}else if(A!==void 0){const P=A.array;C=A.version;for(let L=0,B=P.length/3-1;L<B;L+=3){const W=L+0,V=L+1,F=L+2;S.push(W,V,V,F,F,W)}}else return;const v=new(i0(S)?f0:u0)(S,1);v.version=C;const _=u.get(x);_&&e.remove(_),u.set(x,v)}function g(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function db(o,e,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,A){o.drawElements(u,A,d,M*p),i.update(A,u,1)}function x(M,A,C){if(C===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,A,d,M*p,C),i.update(A,u,C)}function S(M,A,C){if(C===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<C;_++)this.render(M[_]/p,A[_]);else{v.multiDrawElementsWEBGL(u,A,0,d,M,0,C);let _=0;for(let P=0;P<C;P++)_+=A[P];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=S}function hb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pb(o,e){return o[0]-e[0]}function mb(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gb(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new Qe,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,x){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,C=A!==void 0?A.length:0;let v=u.get(g);if(v===void 0||v.count!==C){let st=function(){bt.dispose(),u.delete(g),g.removeEventListener("dispose",st)};var M=st;v!==void 0&&v.texture.dispose();const L=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,W=g.morphAttributes.color!==void 0,V=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],vt=g.morphAttributes.color||[];let I=0;L===!0&&(I=1),B===!0&&(I=2),W===!0&&(I=3);let b=g.attributes.position.count*I,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const mt=new Float32Array(b*N*4*C),bt=new s0(mt,b,N,C);bt.type=na,bt.needsUpdate=!0;const j=I*4;for(let G=0;G<C;G++){const ot=V[G],$=F[G],ut=vt[G],D=b*N*4*G;for(let K=0;K<ot.count;K++){const pt=K*j;L===!0&&(h.fromBufferAttribute(ot,K),mt[D+pt+0]=h.x,mt[D+pt+1]=h.y,mt[D+pt+2]=h.z,mt[D+pt+3]=0),B===!0&&(h.fromBufferAttribute($,K),mt[D+pt+4]=h.x,mt[D+pt+5]=h.y,mt[D+pt+6]=h.z,mt[D+pt+7]=0),W===!0&&(h.fromBufferAttribute(ut,K),mt[D+pt+8]=h.x,mt[D+pt+9]=h.y,mt[D+pt+10]=h.z,mt[D+pt+11]=ut.itemSize===4?h.w:1)}}v={count:C,texture:bt,size:new xe(b,N)},u.set(g,v),g.addEventListener("dispose",st)}let _=0;for(let L=0;L<S.length;L++)_+=S[L];const P=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(o,"morphTargetBaseInfluence",P),x.getUniforms().setValue(o,"morphTargetInfluences",S),x.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const A=S===void 0?0:S.length;let C=r[g.id];if(C===void 0||C.length!==A){C=[];for(let B=0;B<A;B++)C[B]=[B,0];r[g.id]=C}for(let B=0;B<A;B++){const W=C[B];W[0]=B,W[1]=S[B]}C.sort(mb);for(let B=0;B<8;B++)B<A&&C[B][1]?(d[B][0]=C[B][0],d[B][1]=C[B][1]):(d[B][0]=Number.MAX_SAFE_INTEGER,d[B][1]=0);d.sort(pb);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let P=0;for(let B=0;B<8;B++){const W=d[B],V=W[0],F=W[1];V!==Number.MAX_SAFE_INTEGER&&F?(v&&g.getAttribute("morphTarget"+B)!==v[V]&&g.setAttribute("morphTarget"+B,v[V]),_&&g.getAttribute("morphNormal"+B)!==_[V]&&g.setAttribute("morphNormal"+B,_[V]),l[B]=F,P+=F):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const L=g.morphTargetsRelative?1:1-P;x.getUniforms().setValue(o,"morphTargetBaseInfluence",L),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _b(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,x=e.get(p,g);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class _0 extends Xn{constructor(e,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:xr,g!==xr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===xr&&(r=Fa),r===void 0&&g===Rs&&(r=vr),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:In,this.minFilter=p!==void 0?p:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new Xn,x0=new _0(1,1);x0.compareFunction=n0;const y0=new s0,S0=new eS,M0=new p0,__=[],v_=[],x_=new Float32Array(16),y_=new Float32Array(9),S_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function Mb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;S_.set(r),o.uniformMatrix2fv(this.addr,!1,S_),_n(i,r)}}function Eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),_n(i,r)}}function bb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;x_.set(r),o.uniformMatrix4fv(this.addr,!1,x_),_n(i,r)}}function Tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function Cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function Lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function Nb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?x0:v0;i.setTexture2D(e||u,l)}function Ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||S0,l)}function Pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||y0,l)}function Bb(o){switch(o){case 5126:return vb;case 35664:return xb;case 35665:return yb;case 35666:return Sb;case 35674:return Mb;case 35675:return Eb;case 35676:return bb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return wb;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return Db;case 36295:return Lb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return zb}}function Fb(o,e){o.uniform1fv(this.addr,e)}function Ib(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function Hb(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function Gb(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function Vb(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kb(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Wb(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Xb(o,e){o.uniform1iv(this.addr,e)}function qb(o,e){o.uniform2iv(this.addr,e)}function Yb(o,e){o.uniform3iv(this.addr,e)}function jb(o,e){o.uniform4iv(this.addr,e)}function Zb(o,e){o.uniform1uiv(this.addr,e)}function Kb(o,e){o.uniform2uiv(this.addr,e)}function Qb(o,e){o.uniform3uiv(this.addr,e)}function Jb(o,e){o.uniform4uiv(this.addr,e)}function $b(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||v0,u[h])}function tT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||S0,u[h])}function eT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||M0,u[h])}function nT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||y0,u[h])}function iT(o){switch(o){case 5126:return Fb;case 35664:return Ib;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return kb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return Zb;case 36294:return Kb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}class aT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Bb(i.type)}}class rT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iT(i.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function oT(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),h=ud.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){M_(i,m===void 0?new aT(d,o,e):new rT(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new sT(d),M_(i,x)),i=x}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);oT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lT=37297;let cT=0;function uT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function fT(o){const e=ke.getPrimaries(ke.workingColorSpace),i=ke.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case aa:case bc:return[r,"LinearTransferOETF"];case An:case Dd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function b_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+uT(o.getShaderSource(e),h)}else return l}function dT(o,e){const i=fT(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function hT(o,e){let i;switch(e){case dy:i="Linear";break;case hy:i="Reinhard";break;case py:i="OptimizedCineon";break;case my:i="ACESFilmic";break;case _y:i="AgX";break;case gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function mT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function gT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _T(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ss(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(o){return o.replace(vT,yT)}const xT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yT(o,e){let i=Te[e];if(i===void 0){const r=xT.get(e);if(r!==void 0)i=Te[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bd(i)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(o){return o.replace(ST,MT)}function MT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function R_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function ET(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case uy:e="ENVMAP_BLENDING_MIX";break;case fy:e="ENVMAP_BLENDING_ADD";break}return e}function wT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function RT(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ET(i),m=bT(i),g=TT(i),x=AT(i),S=wT(i),M=i.isWebGL2?"":pT(i),A=mT(i),C=gT(u),v=l.createProgram();let _,P,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Ss).join(`
`),_.length>0&&(_+=`
`),P=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Ss).join(`
`),P.length>0&&(P+=`
`)):(_=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),P=[M,R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?Te.tonemapping_pars_fragment:"",i.toneMapping!==Ha?hT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,dT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ss).join(`
`)),h=bd(h),h=T_(h,i),h=A_(h,i),d=bd(d),d=T_(d,i),d=A_(d,i),h=w_(h),d=w_(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const B=L+_+h,W=L+P+d,V=E_(l,l.VERTEX_SHADER,B),F=E_(l,l.FRAGMENT_SHADER,W);l.attachShader(v,V),l.attachShader(v,F),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function vt(mt){if(o.debug.checkShaderErrors){const bt=l.getProgramInfoLog(v).trim(),j=l.getShaderInfoLog(V).trim(),st=l.getShaderInfoLog(F).trim();let G=!0,ot=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,V,F);else{const $=b_(l,V,"vertex"),ut=b_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+mt.name+`
Material Type: `+mt.type+`

Program Info Log: `+bt+`
`+$+`
`+ut)}else bt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",bt):(j===""||st==="")&&(ot=!1);ot&&(mt.diagnostics={runnable:G,programLog:bt,vertexShader:{log:j,prefix:_},fragmentShader:{log:st,prefix:P}})}l.deleteShader(V),l.deleteShader(F),I=new pc(l,v),b=_T(l,v)}let I;this.getUniforms=function(){return I===void 0&&vt(this),I};let b;this.getAttributes=function(){return b===void 0&&vt(this),b};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(v,lT)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=V,this.fragmentShader=F,this}let CT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new LT(e),i.set(e,r)),r}}class LT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function UT(o,e,i,r,l,u,h){const d=new o0,p=new DT,m=new Set,g=[],x=l.isWebGL2,S=l.logarithmicDepthBuffer,M=l.vertexTextures;let A=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return m.add(b),b===0?"uv":`uv${b}`}function _(b,N,mt,bt,j){const st=bt.fog,G=j.geometry,ot=b.isMeshStandardMaterial?bt.environment:null,$=(b.isMeshStandardMaterial?i:e).get(b.envMap||ot),ut=$&&$.mapping===Ec?$.image.height:null,D=C[b.type];b.precision!==null&&(A=l.getMaxPrecision(b.precision),A!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",A,"instead."));const K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=K!==void 0?K.length:0;let wt=0;G.morphAttributes.position!==void 0&&(wt=1),G.morphAttributes.normal!==void 0&&(wt=2),G.morphAttributes.color!==void 0&&(wt=3);let X,dt,Et,Zt;if(D){const ge=Di[D];X=ge.vertexShader,dt=ge.fragmentShader}else X=b.vertexShader,dt=b.fragmentShader,p.update(b),Et=p.getVertexShaderID(b),Zt=p.getFragmentShaderID(b);const Bt=o.getRenderTarget(),Ft=j.isInstancedMesh===!0,te=j.isBatchedMesh===!0,ne=!!b.map,J=!!b.matcap,Be=!!$,ie=!!b.aoMap,fe=!!b.lightMap,Qt=!!b.bumpMap,ze=!!b.normalMap,_t=!!b.displacementMap,T=!!b.emissiveMap,E=!!b.metalnessMap,H=!!b.roughnessMap,rt=b.anisotropy>0,ht=b.clearcoat>0,nt=b.iridescence>0,It=b.sheen>0,Tt=b.transmission>0,St=rt&&!!b.anisotropyMap,Ht=ht&&!!b.clearcoatMap,se=ht&&!!b.clearcoatNormalMap,ct=ht&&!!b.clearcoatRoughnessMap,Se=nt&&!!b.iridescenceMap,Gt=nt&&!!b.iridescenceThicknessMap,qt=It&&!!b.sheenColorMap,Rt=It&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Jt=!!b.specularColorMap,O=!!b.specularIntensityMap,Ct=Tt&&!!b.transmissionMap,Vt=Tt&&!!b.thicknessMap,ee=!!b.gradientMap,U=!!b.alphaMap,yt=b.alphaTest>0,ft=!!b.alphaHash,Ot=!!b.extensions;let kt=Ha;b.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(kt=o.toneMapping);const Me={isWebGL2:x,shaderID:D,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:dt,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:Zt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:A,batching:te,instancing:Ft,instancingColor:Ft&&j.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Bt===null?o.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:aa,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:J,envMap:Be,envMapMode:Be&&$.mapping,envMapCubeUVHeight:ut,aoMap:ie,lightMap:fe,bumpMap:Qt,normalMap:ze,displacementMap:M&&_t,emissiveMap:T,normalMapObjectSpace:ze&&b.normalMapType===Ry,normalMapTangentSpace:ze&&b.normalMapType===e0,metalnessMap:E,roughnessMap:H,anisotropy:rt,anisotropyMap:St,clearcoat:ht,clearcoatMap:Ht,clearcoatNormalMap:se,clearcoatRoughnessMap:ct,iridescence:nt,iridescenceMap:Se,iridescenceThicknessMap:Gt,sheen:It,sheenColorMap:qt,sheenRoughnessMap:Rt,specularMap:Nt,specularColorMap:Jt,specularIntensityMap:O,transmission:Tt,transmissionMap:Ct,thicknessMap:Vt,gradientMap:ee,opaque:b.transparent===!1&&b.blending===Es&&b.alphaToCoverage===!1,alphaMap:U,alphaTest:yt,alphaHash:ft,combine:b.combine,mapUv:ne&&v(b.map.channel),aoMapUv:ie&&v(b.aoMap.channel),lightMapUv:fe&&v(b.lightMap.channel),bumpMapUv:Qt&&v(b.bumpMap.channel),normalMapUv:ze&&v(b.normalMap.channel),displacementMapUv:_t&&v(b.displacementMap.channel),emissiveMapUv:T&&v(b.emissiveMap.channel),metalnessMapUv:E&&v(b.metalnessMap.channel),roughnessMapUv:H&&v(b.roughnessMap.channel),anisotropyMapUv:St&&v(b.anisotropyMap.channel),clearcoatMapUv:Ht&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(b.sheenRoughnessMap.channel),specularMapUv:Nt&&v(b.specularMap.channel),specularColorMapUv:Jt&&v(b.specularColorMap.channel),specularIntensityMapUv:O&&v(b.specularIntensityMap.channel),transmissionMapUv:Ct&&v(b.transmissionMap.channel),thicknessMapUv:Vt&&v(b.thicknessMap.channel),alphaMapUv:U&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ze||rt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(ne||U),fog:!!st,useFog:b.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:wt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&mt.length>0,shadowMapType:o.shadowMap.type,toneMapping:kt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&ke.getTransfer(b.map.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ot&&b.extensions.derivatives===!0,extensionFragDepth:Ot&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ot&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ot&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ot&&b.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Me.vertexUv1s=m.has(1),Me.vertexUv2s=m.has(2),Me.vertexUv3s=m.has(3),m.clear(),Me}function P(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const mt in b.defines)N.push(mt),N.push(b.defines[mt]);return b.isRawShaderMaterial===!1&&(L(N,b),B(N,b),N.push(o.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function L(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function B(b,N){d.disableAll(),N.isWebGL2&&d.enable(0),N.supportsVertexTextures&&d.enable(1),N.instancing&&d.enable(2),N.instancingColor&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),b.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.skinning&&d.enable(4),N.morphTargets&&d.enable(5),N.morphNormals&&d.enable(6),N.morphColors&&d.enable(7),N.premultipliedAlpha&&d.enable(8),N.shadowMapEnabled&&d.enable(9),N.useLegacyLights&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.alphaToCoverage&&d.enable(20),b.push(d.mask)}function W(b){const N=C[b.type];let mt;if(N){const bt=Di[N];mt=pS.clone(bt.uniforms)}else mt=b.uniforms;return mt}function V(b,N){let mt;for(let bt=0,j=g.length;bt<j;bt++){const st=g[bt];if(st.cacheKey===N){mt=st,++mt.usedTimes;break}}return mt===void 0&&(mt=new RT(o,N,b,u),g.push(mt)),mt}function F(b){if(--b.usedTimes===0){const N=g.indexOf(b);g[N]=g[g.length-1],g.pop(),b.destroy()}}function vt(b){p.remove(b)}function I(){p.dispose()}return{getParameters:_,getProgramCacheKey:P,getUniforms:W,acquireProgram:V,releaseProgram:F,releaseShaderCache:vt,programs:g,dispose:I}}function NT(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function OT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,S,M,A,C,v){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:A,renderOrder:x.renderOrder,z:C,group:v},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=C,_.group=v),e++,_}function d(x,S,M,A,C,v){const _=h(x,S,M,A,C,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(x,S,M,A,C,v){const _=h(x,S,M,A,C,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,S){i.length>1&&i.sort(x||OT),r.length>1&&r.sort(S||C_),l.length>1&&l.sort(S||C_)}function g(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function PT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new D_,o.set(r,[h])):l>=u.length?(h=new D_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function zT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Y,color:new Ue};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=i,i}}}function BT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let FT=0;function IT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HT(o,e){const i=new zT,r=BT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new Y);const u=new Y,h=new ln,d=new ln;function p(g,x){let S=0,M=0,A=0;for(let mt=0;mt<9;mt++)l.probe[mt].set(0,0,0);let C=0,v=0,_=0,P=0,L=0,B=0,W=0,V=0,F=0,vt=0,I=0;g.sort(IT);const b=x===!0?Math.PI:1;for(let mt=0,bt=g.length;mt<bt;mt++){const j=g[mt],st=j.color,G=j.intensity,ot=j.distance,$=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)S+=st.r*G*b,M+=st.g*G*b,A+=st.b*G*b;else if(j.isLightProbe){for(let ut=0;ut<9;ut++)l.probe[ut].addScaledVector(j.sh.coefficients[ut],G);I++}else if(j.isDirectionalLight){const ut=i.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity*b),j.castShadow){const D=j.shadow,K=r.get(j);K.shadowBias=D.bias,K.shadowNormalBias=D.normalBias,K.shadowRadius=D.radius,K.shadowMapSize=D.mapSize,l.directionalShadow[C]=K,l.directionalShadowMap[C]=$,l.directionalShadowMatrix[C]=j.shadow.matrix,B++}l.directional[C]=ut,C++}else if(j.isSpotLight){const ut=i.get(j);ut.position.setFromMatrixPosition(j.matrixWorld),ut.color.copy(st).multiplyScalar(G*b),ut.distance=ot,ut.coneCos=Math.cos(j.angle),ut.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ut.decay=j.decay,l.spot[_]=ut;const D=j.shadow;if(j.map&&(l.spotLightMap[F]=j.map,F++,D.updateMatrices(j),j.castShadow&&vt++),l.spotLightMatrix[_]=D.matrix,j.castShadow){const K=r.get(j);K.shadowBias=D.bias,K.shadowNormalBias=D.normalBias,K.shadowRadius=D.radius,K.shadowMapSize=D.mapSize,l.spotShadow[_]=K,l.spotShadowMap[_]=$,V++}_++}else if(j.isRectAreaLight){const ut=i.get(j);ut.color.copy(st).multiplyScalar(G),ut.halfWidth.set(j.width*.5,0,0),ut.halfHeight.set(0,j.height*.5,0),l.rectArea[P]=ut,P++}else if(j.isPointLight){const ut=i.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity*b),ut.distance=j.distance,ut.decay=j.decay,j.castShadow){const D=j.shadow,K=r.get(j);K.shadowBias=D.bias,K.shadowNormalBias=D.normalBias,K.shadowRadius=D.radius,K.shadowMapSize=D.mapSize,K.shadowCameraNear=D.camera.near,K.shadowCameraFar=D.camera.far,l.pointShadow[v]=K,l.pointShadowMap[v]=$,l.pointShadowMatrix[v]=j.shadow.matrix,W++}l.point[v]=ut,v++}else if(j.isHemisphereLight){const ut=i.get(j);ut.skyColor.copy(j.color).multiplyScalar(G*b),ut.groundColor.copy(j.groundColor).multiplyScalar(G*b),l.hemi[L]=ut,L++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Xt.LTC_FLOAT_1,l.rectAreaLTC2=Xt.LTC_FLOAT_2):(l.rectAreaLTC1=Xt.LTC_HALF_1,l.rectAreaLTC2=Xt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Xt.LTC_FLOAT_1,l.rectAreaLTC2=Xt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Xt.LTC_HALF_1,l.rectAreaLTC2=Xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=M,l.ambient[2]=A;const N=l.hash;(N.directionalLength!==C||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==P||N.hemiLength!==L||N.numDirectionalShadows!==B||N.numPointShadows!==W||N.numSpotShadows!==V||N.numSpotMaps!==F||N.numLightProbes!==I)&&(l.directional.length=C,l.spot.length=_,l.rectArea.length=P,l.point.length=v,l.hemi.length=L,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=W,l.pointShadowMap.length=W,l.spotShadow.length=V,l.spotShadowMap.length=V,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=W,l.spotLightMatrix.length=V+F-vt,l.spotLightMap.length=F,l.numSpotLightShadowsWithMaps=vt,l.numLightProbes=I,N.directionalLength=C,N.pointLength=v,N.spotLength=_,N.rectAreaLength=P,N.hemiLength=L,N.numDirectionalShadows=B,N.numPointShadows=W,N.numSpotShadows=V,N.numSpotMaps=F,N.numLightProbes=I,l.version=FT++)}function m(g,x){let S=0,M=0,A=0,C=0,v=0;const _=x.matrixWorldInverse;for(let P=0,L=g.length;P<L;P++){const B=g[P];if(B.isDirectionalLight){const W=l.directional[S];W.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(_),S++}else if(B.isSpotLight){const W=l.spot[A];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(_),W.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(_),A++}else if(B.isRectAreaLight){const W=l.rectArea[C];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(_),d.identity(),h.copy(B.matrixWorld),h.premultiply(_),d.extractRotation(h),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),W.halfWidth.applyMatrix4(d),W.halfHeight.applyMatrix4(d),C++}else if(B.isPointLight){const W=l.point[M];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(_),M++}else if(B.isHemisphereLight){const W=l.hemi[v];W.direction.setFromMatrixPosition(B.matrixWorld),W.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function L_(o,e){const i=new HT(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function h(x){r.push(x)}function d(x){l.push(x)}function p(x){i.setup(r,x)}function m(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function GT(o,e){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new L_(o,e),i.set(u,[p])):h>=d.length?(p=new L_(o,e),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class VT extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XT=`uniform sampler2D shadow_pass;
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
}`;function qT(o,e,i){let r=new Nd;const l=new xe,u=new xe,h=new Qe,d=new VT({depthPacking:wy}),p=new kT,m={},g=i.maxTextureSize,x={[ka]:Wn,[Wn]:ka,[Li]:Li},S=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:WT,fragmentShader:XT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Oi;A.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ti(A,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let _=this.type;this.render=function(V,F,vt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||V.length===0)return;const I=o.getRenderTarget(),b=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),mt=o.state;mt.setBlending(Ia),mt.buffers.color.setClear(1,1,1,1),mt.buffers.depth.setTest(!0),mt.setScissorTest(!1);const bt=_!==ea&&this.type===ea,j=_===ea&&this.type!==ea;for(let st=0,G=V.length;st<G;st++){const ot=V[st],$=ot.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const ut=$.getFrameExtents();if(l.multiply(ut),u.copy($.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ut.x),l.x=u.x*ut.x,$.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ut.y),l.y=u.y*ut.y,$.mapSize.y=u.y)),$.map===null||bt===!0||j===!0){const K=this.type!==ea?{minFilter:In,magFilter:In}:{};$.map!==null&&$.map.dispose(),$.map=new Sr(l.x,l.y,K),$.map.texture.name=ot.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const D=$.getViewportCount();for(let K=0;K<D;K++){const pt=$.getViewport(K);h.set(u.x*pt.x,u.y*pt.y,u.x*pt.z,u.y*pt.w),mt.viewport(h),$.updateMatrices(ot,K),r=$.getFrustum(),B(F,vt,$.camera,ot,this.type)}$.isPointLightShadow!==!0&&this.type===ea&&P($,vt),$.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(I,b,N)};function P(V,F){const vt=e.update(C);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(F,null,vt,S,C,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(F,null,vt,M,C,null)}function L(V,F,vt,I){let b=null;const N=vt.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(N!==void 0)b=N;else if(b=vt.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const mt=b.uuid,bt=F.uuid;let j=m[mt];j===void 0&&(j={},m[mt]=j);let st=j[bt];st===void 0&&(st=b.clone(),j[bt]=st,F.addEventListener("dispose",W)),b=st}if(b.visible=F.visible,b.wireframe=F.wireframe,I===ea?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:x[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,vt.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const mt=o.properties.get(b);mt.light=vt}return b}function B(V,F,vt,I,b){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&b===ea)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,V.matrixWorld);const bt=e.update(V),j=V.material;if(Array.isArray(j)){const st=bt.groups;for(let G=0,ot=st.length;G<ot;G++){const $=st[G],ut=j[$.materialIndex];if(ut&&ut.visible){const D=L(V,ut,I,b);V.onBeforeShadow(o,V,F,vt,bt,D,$),o.renderBufferDirect(vt,null,bt,D,V,$),V.onAfterShadow(o,V,F,vt,bt,D,$)}}}else if(j.visible){const st=L(V,j,I,b);V.onBeforeShadow(o,V,F,vt,bt,st,null),o.renderBufferDirect(vt,null,bt,st,V,null),V.onAfterShadow(o,V,F,vt,bt,st,null)}}const mt=V.children;for(let bt=0,j=mt.length;bt<j;bt++)B(mt[bt],F,vt,I,b)}function W(V){V.target.removeEventListener("dispose",W);for(const vt in m){const I=m[vt],b=V.target.uuid;b in I&&(I[b].dispose(),delete I[b])}}}function YT(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const yt=new Qe;let ft=null;const Ot=new Qe(0,0,0,0);return{setMask:function(kt){ft!==kt&&!U&&(o.colorMask(kt,kt,kt,kt),ft=kt)},setLocked:function(kt){U=kt},setClear:function(kt,Me,ge,we,Ke){Ke===!0&&(kt*=we,Me*=we,ge*=we),yt.set(kt,Me,ge,we),Ot.equals(yt)===!1&&(o.clearColor(kt,Me,ge,we),Ot.copy(yt))},reset:function(){U=!1,ft=null,Ot.set(-1,0,0,0)}}}function u(){let U=!1,yt=null,ft=null,Ot=null;return{setTest:function(kt){kt?Ft(o.DEPTH_TEST):te(o.DEPTH_TEST)},setMask:function(kt){yt!==kt&&!U&&(o.depthMask(kt),yt=kt)},setFunc:function(kt){if(ft!==kt){switch(kt){case iy:o.depthFunc(o.NEVER);break;case ay:o.depthFunc(o.ALWAYS);break;case ry:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sy:o.depthFunc(o.EQUAL);break;case oy:o.depthFunc(o.GEQUAL);break;case ly:o.depthFunc(o.GREATER);break;case cy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ft=kt}},setLocked:function(kt){U=kt},setClear:function(kt){Ot!==kt&&(o.clearDepth(kt),Ot=kt)},reset:function(){U=!1,yt=null,ft=null,Ot=null}}}function h(){let U=!1,yt=null,ft=null,Ot=null,kt=null,Me=null,ge=null,we=null,Ke=null;return{setTest:function(ue){U||(ue?Ft(o.STENCIL_TEST):te(o.STENCIL_TEST))},setMask:function(ue){yt!==ue&&!U&&(o.stencilMask(ue),yt=ue)},setFunc:function(ue,He,tn){(ft!==ue||Ot!==He||kt!==tn)&&(o.stencilFunc(ue,He,tn),ft=ue,Ot=He,kt=tn)},setOp:function(ue,He,tn){(Me!==ue||ge!==He||we!==tn)&&(o.stencilOp(ue,He,tn),Me=ue,ge=He,we=tn)},setLocked:function(ue){U=ue},setClear:function(ue){Ke!==ue&&(o.clearStencil(ue),Ke=ue)},reset:function(){U=!1,yt=null,ft=null,Ot=null,kt=null,Me=null,ge=null,we=null,Ke=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,x=new WeakMap;let S={},M={},A=new WeakMap,C=[],v=null,_=!1,P=null,L=null,B=null,W=null,V=null,F=null,vt=null,I=new Ue(0,0,0),b=0,N=!1,mt=null,bt=null,j=null,st=null,G=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ut=0;const D=o.getParameter(o.VERSION);D.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(D)[1]),$=ut>=1):D.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),$=ut>=2);let K=null,pt={};const wt=o.getParameter(o.SCISSOR_BOX),X=o.getParameter(o.VIEWPORT),dt=new Qe().fromArray(wt),Et=new Qe().fromArray(X);function Zt(U,yt,ft,Ot){const kt=new Uint8Array(4),Me=o.createTexture();o.bindTexture(U,Me),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ge=0;ge<ft;ge++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(yt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,kt):o.texImage2D(yt+ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,kt);return Me}const Bt={};Bt[o.TEXTURE_2D]=Zt(o.TEXTURE_2D,o.TEXTURE_2D,1),Bt[o.TEXTURE_CUBE_MAP]=Zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Bt[o.TEXTURE_2D_ARRAY]=Zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Bt[o.TEXTURE_3D]=Zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ft(o.DEPTH_TEST),p.setFunc(mc),_t(!1),T(fg),Ft(o.CULL_FACE),Qt(Ia);function Ft(U){S[U]!==!0&&(o.enable(U),S[U]=!0)}function te(U){S[U]!==!1&&(o.disable(U),S[U]=!1)}function ne(U,yt){return M[U]!==yt?(o.bindFramebuffer(U,yt),M[U]=yt,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=yt),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=yt)),!0):!1}function J(U,yt){let ft=C,Ot=!1;if(U)if(ft=A.get(yt),ft===void 0&&(ft=[],A.set(yt,ft)),U.isWebGLMultipleRenderTargets){const kt=U.texture;if(ft.length!==kt.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,ge=kt.length;Me<ge;Me++)ft[Me]=o.COLOR_ATTACHMENT0+Me;ft.length=kt.length,Ot=!0}}else ft[0]!==o.COLOR_ATTACHMENT0&&(ft[0]=o.COLOR_ATTACHMENT0,Ot=!0);else ft[0]!==o.BACK&&(ft[0]=o.BACK,Ot=!0);Ot&&(i.isWebGL2?o.drawBuffers(ft):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function Be(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const ie={[mr]:o.FUNC_ADD,[Vx]:o.FUNC_SUBTRACT,[kx]:o.FUNC_REVERSE_SUBTRACT};if(r)ie[pg]=o.MIN,ie[mg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ie[pg]=U.MIN_EXT,ie[mg]=U.MAX_EXT)}const fe={[Wx]:o.ZERO,[Xx]:o.ONE,[qx]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[Jx]:o.SRC_ALPHA_SATURATE,[Kx]:o.DST_COLOR,[jx]:o.DST_ALPHA,[Yx]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[Qx]:o.ONE_MINUS_DST_COLOR,[Zx]:o.ONE_MINUS_DST_ALPHA,[$x]:o.CONSTANT_COLOR,[ty]:o.ONE_MINUS_CONSTANT_COLOR,[ey]:o.CONSTANT_ALPHA,[ny]:o.ONE_MINUS_CONSTANT_ALPHA};function Qt(U,yt,ft,Ot,kt,Me,ge,we,Ke,ue){if(U===Ia){_===!0&&(te(o.BLEND),_=!1);return}if(_===!1&&(Ft(o.BLEND),_=!0),U!==Gx){if(U!==P||ue!==N){if((L!==mr||V!==mr)&&(o.blendEquation(o.FUNC_ADD),L=mr,V=mr),ue)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}B=null,W=null,F=null,vt=null,I.set(0,0,0),b=0,P=U,N=ue}return}kt=kt||yt,Me=Me||ft,ge=ge||Ot,(yt!==L||kt!==V)&&(o.blendEquationSeparate(ie[yt],ie[kt]),L=yt,V=kt),(ft!==B||Ot!==W||Me!==F||ge!==vt)&&(o.blendFuncSeparate(fe[ft],fe[Ot],fe[Me],fe[ge]),B=ft,W=Ot,F=Me,vt=ge),(we.equals(I)===!1||Ke!==b)&&(o.blendColor(we.r,we.g,we.b,Ke),I.copy(we),b=Ke),P=U,N=!1}function ze(U,yt){U.side===Li?te(o.CULL_FACE):Ft(o.CULL_FACE);let ft=U.side===Wn;yt&&(ft=!ft),_t(ft),U.blending===Es&&U.transparent===!1?Qt(Ia):Qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const Ot=U.stencilWrite;m.setTest(Ot),Ot&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),H(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ft(o.SAMPLE_ALPHA_TO_COVERAGE):te(o.SAMPLE_ALPHA_TO_COVERAGE)}function _t(U){mt!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),mt=U)}function T(U){U!==Ix?(Ft(o.CULL_FACE),U!==bt&&(U===fg?o.cullFace(o.BACK):U===Hx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):te(o.CULL_FACE),bt=U}function E(U){U!==j&&($&&o.lineWidth(U),j=U)}function H(U,yt,ft){U?(Ft(o.POLYGON_OFFSET_FILL),(st!==yt||G!==ft)&&(o.polygonOffset(yt,ft),st=yt,G=ft)):te(o.POLYGON_OFFSET_FILL)}function rt(U){U?Ft(o.SCISSOR_TEST):te(o.SCISSOR_TEST)}function ht(U){U===void 0&&(U=o.TEXTURE0+ot-1),K!==U&&(o.activeTexture(U),K=U)}function nt(U,yt,ft){ft===void 0&&(K===null?ft=o.TEXTURE0+ot-1:ft=K);let Ot=pt[ft];Ot===void 0&&(Ot={type:void 0,texture:void 0},pt[ft]=Ot),(Ot.type!==U||Ot.texture!==yt)&&(K!==ft&&(o.activeTexture(ft),K=ft),o.bindTexture(U,yt||Bt[U]),Ot.type=U,Ot.texture=yt)}function It(){const U=pt[K];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Tt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(U){dt.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function O(U){Et.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),Et.copy(U))}function Ct(U,yt){let ft=x.get(yt);ft===void 0&&(ft=new WeakMap,x.set(yt,ft));let Ot=ft.get(U);Ot===void 0&&(Ot=o.getUniformBlockIndex(yt,U.name),ft.set(U,Ot))}function Vt(U,yt){const Ot=x.get(yt).get(U);g.get(yt)!==Ot&&(o.uniformBlockBinding(yt,Ot,U.__bindingPointIndex),g.set(yt,Ot))}function ee(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},K=null,pt={},M={},A=new WeakMap,C=[],v=null,_=!1,P=null,L=null,B=null,W=null,V=null,F=null,vt=null,I=new Ue(0,0,0),b=0,N=!1,mt=null,bt=null,j=null,st=null,G=null,dt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Ft,disable:te,bindFramebuffer:ne,drawBuffers:J,useProgram:Be,setBlending:Qt,setMaterial:ze,setFlipSided:_t,setCullFace:T,setLineWidth:E,setPolygonOffset:H,setScissorTest:rt,activeTexture:ht,bindTexture:nt,unbindTexture:It,compressedTexImage2D:Tt,compressedTexImage3D:St,texImage2D:Rt,texImage3D:Nt,updateUBOMapping:Ct,uniformBlockBinding:Vt,texStorage2D:Gt,texStorage3D:qt,texSubImage2D:Ht,texSubImage3D:se,compressedTexSubImage2D:ct,compressedTexSubImage3D:Se,scissor:Jt,viewport:O,reset:ee}}function jT(o,e,i,r,l,u,h){const d=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,E){return M?new OffscreenCanvas(T,E):Sc("canvas")}function C(T,E,H,rt){let ht=1;if((T.width>rt||T.height>rt)&&(ht=rt/Math.max(T.width,T.height)),ht<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const nt=E?yc:Math.floor,It=nt(ht*T.width),Tt=nt(ht*T.height);x===void 0&&(x=A(It,Tt));const St=H?A(It,Tt):x;return St.width=It,St.height=Tt,St.getContext("2d").drawImage(T,0,0,It,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+It+"x"+Tt+")."),St}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Ed(T.width)&&Ed(T.height)}function _(T){return d?!1:T.wrapS!==Si||T.wrapT!==Si||T.minFilter!==In&&T.minFilter!==kn}function P(T,E){return T.generateMipmaps&&E&&T.minFilter!==In&&T.minFilter!==kn}function L(T){o.generateMipmap(T)}function B(T,E,H,rt,ht=!1){if(d===!1)return E;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let nt=E;if(E===o.RED&&(H===o.FLOAT&&(nt=o.R32F),H===o.HALF_FLOAT&&(nt=o.R16F),H===o.UNSIGNED_BYTE&&(nt=o.R8)),E===o.RED_INTEGER&&(H===o.UNSIGNED_BYTE&&(nt=o.R8UI),H===o.UNSIGNED_SHORT&&(nt=o.R16UI),H===o.UNSIGNED_INT&&(nt=o.R32UI),H===o.BYTE&&(nt=o.R8I),H===o.SHORT&&(nt=o.R16I),H===o.INT&&(nt=o.R32I)),E===o.RG&&(H===o.FLOAT&&(nt=o.RG32F),H===o.HALF_FLOAT&&(nt=o.RG16F),H===o.UNSIGNED_BYTE&&(nt=o.RG8)),E===o.RGBA){const It=ht?gc:ke.getTransfer(rt);H===o.FLOAT&&(nt=o.RGBA32F),H===o.HALF_FLOAT&&(nt=o.RGBA16F),H===o.UNSIGNED_BYTE&&(nt=It===Ze?o.SRGB8_ALPHA8:o.RGBA8),H===o.UNSIGNED_SHORT_4_4_4_4&&(nt=o.RGBA4),H===o.UNSIGNED_SHORT_5_5_5_1&&(nt=o.RGB5_A1)}return(nt===o.R16F||nt===o.R32F||nt===o.RG16F||nt===o.RG32F||nt===o.RGBA16F||nt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),nt}function W(T,E,H){return P(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==In&&T.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function V(T){return T===In||T===gg||T===Do?o.NEAREST:o.LINEAR}function F(T){const E=T.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&g.delete(E)}function vt(T){const E=T.target;E.removeEventListener("dispose",vt),N(E)}function I(T){const E=r.get(T);if(E.__webglInit===void 0)return;const H=T.source,rt=S.get(H);if(rt){const ht=rt[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&b(T),Object.keys(rt).length===0&&S.delete(H)}r.remove(T)}function b(T){const E=r.get(T);o.deleteTexture(E.__webglTexture);const H=T.source,rt=S.get(H);delete rt[E.__cacheKey],h.memory.textures--}function N(T){const E=T.texture,H=r.get(T),rt=r.get(E);if(rt.__webglTexture!==void 0&&(o.deleteTexture(rt.__webglTexture),h.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(H.__webglFramebuffer[ht]))for(let nt=0;nt<H.__webglFramebuffer[ht].length;nt++)o.deleteFramebuffer(H.__webglFramebuffer[ht][nt]);else o.deleteFramebuffer(H.__webglFramebuffer[ht]);H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[ht])}else{if(Array.isArray(H.__webglFramebuffer))for(let ht=0;ht<H.__webglFramebuffer.length;ht++)o.deleteFramebuffer(H.__webglFramebuffer[ht]);else o.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ht=0;ht<H.__webglColorRenderbuffer.length;ht++)H.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[ht]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ht=0,nt=E.length;ht<nt;ht++){const It=r.get(E[ht]);It.__webglTexture&&(o.deleteTexture(It.__webglTexture),h.memory.textures--),r.remove(E[ht])}r.remove(E),r.remove(T)}let mt=0;function bt(){mt=0}function j(){const T=mt;return T>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l.maxTextures),mt+=1,T}function st(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function G(T,E){const H=r.get(T);if(T.isVideoTexture&&ze(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const rt=T.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,T,E);return}}i.bindTexture(o.TEXTURE_2D,H.__webglTexture,o.TEXTURE0+E)}function ot(T,E){const H=r.get(T);if(T.version>0&&H.__version!==T.version){dt(H,T,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,H.__webglTexture,o.TEXTURE0+E)}function $(T,E){const H=r.get(T);if(T.version>0&&H.__version!==T.version){dt(H,T,E);return}i.bindTexture(o.TEXTURE_3D,H.__webglTexture,o.TEXTURE0+E)}function ut(T,E){const H=r.get(T);if(T.version>0&&H.__version!==T.version){Et(H,T,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+E)}const D={[yd]:o.REPEAT,[Si]:o.CLAMP_TO_EDGE,[Sd]:o.MIRRORED_REPEAT},K={[In]:o.NEAREST,[gg]:o.NEAREST_MIPMAP_NEAREST,[Do]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},pt={[Cy]:o.NEVER,[Py]:o.ALWAYS,[Dy]:o.LESS,[n0]:o.LEQUAL,[Ly]:o.EQUAL,[Oy]:o.GEQUAL,[Uy]:o.GREATER,[Ny]:o.NOTEQUAL};function wt(T,E,H){if(E.type===na&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Bf||E.magFilter===Do||E.magFilter===_r||E.minFilter===kn||E.minFilter===Bf||E.minFilter===Do||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),H?(o.texParameteri(T,o.TEXTURE_WRAP_S,D[E.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,D[E.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,D[E.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,K[E.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,K[E.minFilter])):(o.texParameteri(T,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(T,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==Si||E.wrapT!==Si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,o.TEXTURE_MAG_FILTER,V(E.magFilter)),o.texParameteri(T,o.TEXTURE_MIN_FILTER,V(E.minFilter)),E.minFilter!==In&&E.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const rt=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===In||E.minFilter!==Do&&E.minFilter!==_r||E.type===na&&e.has("OES_texture_float_linear")===!1||d===!1&&E.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(o.texParameterf(T,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function X(T,E){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",F));const rt=E.source;let ht=S.get(rt);ht===void 0&&(ht={},S.set(rt,ht));const nt=st(E);if(nt!==T.__cacheKey){ht[nt]===void 0&&(ht[nt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,H=!0),ht[nt].usedTimes++;const It=ht[T.__cacheKey];It!==void 0&&(ht[T.__cacheKey].usedTimes--,It.usedTimes===0&&b(E)),T.__cacheKey=nt,T.__webglTexture=ht[nt].texture}return H}function dt(T,E,H){let rt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=o.TEXTURE_3D);const ht=X(T,E),nt=E.source;i.bindTexture(rt,T.__webglTexture,o.TEXTURE0+H);const It=r.get(nt);if(nt.version!==It.__version||ht===!0){i.activeTexture(o.TEXTURE0+H);const Tt=ke.getPrimaries(ke.workingColorSpace),St=E.colorSpace===di?null:ke.getPrimaries(E.colorSpace),Ht=E.colorSpace===di||Tt===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const se=_(E)&&v(E.image)===!1;let ct=C(E.image,se,!1,l.maxTextureSize);ct=_t(E,ct);const Se=v(ct)||d,Gt=u.convert(E.format,E.colorSpace);let qt=u.convert(E.type),Rt=B(E.internalFormat,Gt,qt,E.colorSpace,E.isVideoTexture);wt(rt,E,Se);let Nt;const Jt=E.mipmaps,O=d&&E.isVideoTexture!==!0&&Rt!==$_,Ct=It.__version===void 0||ht===!0,Vt=nt.dataReady,ee=W(E,ct,Se);if(E.isDepthTexture)Rt=o.DEPTH_COMPONENT,d?E.type===na?Rt=o.DEPTH_COMPONENT32F:E.type===Fa?Rt=o.DEPTH_COMPONENT24:E.type===vr?Rt=o.DEPTH24_STENCIL8:Rt=o.DEPTH_COMPONENT16:E.type===na&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===xr&&Rt===o.DEPTH_COMPONENT&&E.type!==Cd&&E.type!==Fa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fa,qt=u.convert(E.type)),E.format===Rs&&Rt===o.DEPTH_COMPONENT&&(Rt=o.DEPTH_STENCIL,E.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vr,qt=u.convert(E.type))),Ct&&(O?i.texStorage2D(o.TEXTURE_2D,1,Rt,ct.width,ct.height):i.texImage2D(o.TEXTURE_2D,0,Rt,ct.width,ct.height,0,Gt,qt,null));else if(E.isDataTexture)if(Jt.length>0&&Se){O&&Ct&&i.texStorage2D(o.TEXTURE_2D,ee,Rt,Jt[0].width,Jt[0].height);for(let U=0,yt=Jt.length;U<yt;U++)Nt=Jt[U],O?Vt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Nt.width,Nt.height,Gt,qt,Nt.data):i.texImage2D(o.TEXTURE_2D,U,Rt,Nt.width,Nt.height,0,Gt,qt,Nt.data);E.generateMipmaps=!1}else O?(Ct&&i.texStorage2D(o.TEXTURE_2D,ee,Rt,ct.width,ct.height),Vt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ct.width,ct.height,Gt,qt,ct.data)):i.texImage2D(o.TEXTURE_2D,0,Rt,ct.width,ct.height,0,Gt,qt,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ee,Rt,Jt[0].width,Jt[0].height,ct.depth);for(let U=0,yt=Jt.length;U<yt;U++)Nt=Jt[U],E.format!==Mi?Gt!==null?O?Vt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Nt.width,Nt.height,ct.depth,Gt,Nt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,Rt,Nt.width,Nt.height,ct.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Vt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Nt.width,Nt.height,ct.depth,Gt,qt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,Rt,Nt.width,Nt.height,ct.depth,0,Gt,qt,Nt.data)}else{O&&Ct&&i.texStorage2D(o.TEXTURE_2D,ee,Rt,Jt[0].width,Jt[0].height);for(let U=0,yt=Jt.length;U<yt;U++)Nt=Jt[U],E.format!==Mi?Gt!==null?O?Vt&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,Nt.width,Nt.height,Gt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,Rt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Vt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Nt.width,Nt.height,Gt,qt,Nt.data):i.texImage2D(o.TEXTURE_2D,U,Rt,Nt.width,Nt.height,0,Gt,qt,Nt.data)}else if(E.isDataArrayTexture)O?(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ee,Rt,ct.width,ct.height,ct.depth),Vt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Gt,qt,ct.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Rt,ct.width,ct.height,ct.depth,0,Gt,qt,ct.data);else if(E.isData3DTexture)O?(Ct&&i.texStorage3D(o.TEXTURE_3D,ee,Rt,ct.width,ct.height,ct.depth),Vt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Gt,qt,ct.data)):i.texImage3D(o.TEXTURE_3D,0,Rt,ct.width,ct.height,ct.depth,0,Gt,qt,ct.data);else if(E.isFramebufferTexture){if(Ct)if(O)i.texStorage2D(o.TEXTURE_2D,ee,Rt,ct.width,ct.height);else{let U=ct.width,yt=ct.height;for(let ft=0;ft<ee;ft++)i.texImage2D(o.TEXTURE_2D,ft,Rt,U,yt,0,Gt,qt,null),U>>=1,yt>>=1}}else if(Jt.length>0&&Se){O&&Ct&&i.texStorage2D(o.TEXTURE_2D,ee,Rt,Jt[0].width,Jt[0].height);for(let U=0,yt=Jt.length;U<yt;U++)Nt=Jt[U],O?Vt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Gt,qt,Nt):i.texImage2D(o.TEXTURE_2D,U,Rt,Gt,qt,Nt);E.generateMipmaps=!1}else O?(Ct&&i.texStorage2D(o.TEXTURE_2D,ee,Rt,ct.width,ct.height),Vt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,qt,ct)):i.texImage2D(o.TEXTURE_2D,0,Rt,Gt,qt,ct);P(E,Se)&&L(rt),It.__version=nt.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Et(T,E,H){if(E.image.length!==6)return;const rt=X(T,E),ht=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+H);const nt=r.get(ht);if(ht.version!==nt.__version||rt===!0){i.activeTexture(o.TEXTURE0+H);const It=ke.getPrimaries(ke.workingColorSpace),Tt=E.colorSpace===di?null:ke.getPrimaries(E.colorSpace),St=E.colorSpace===di||It===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ht=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ct=[];for(let U=0;U<6;U++)!Ht&&!se?ct[U]=C(E.image[U],!1,!0,l.maxCubemapSize):ct[U]=se?E.image[U].image:E.image[U],ct[U]=_t(E,ct[U]);const Se=ct[0],Gt=v(Se)||d,qt=u.convert(E.format,E.colorSpace),Rt=u.convert(E.type),Nt=B(E.internalFormat,qt,Rt,E.colorSpace),Jt=d&&E.isVideoTexture!==!0,O=nt.__version===void 0||rt===!0,Ct=ht.dataReady;let Vt=W(E,Se,Gt);wt(o.TEXTURE_CUBE_MAP,E,Gt);let ee;if(Ht){Jt&&O&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,Nt,Se.width,Se.height);for(let U=0;U<6;U++){ee=ct[U].mipmaps;for(let yt=0;yt<ee.length;yt++){const ft=ee[yt];E.format!==Mi?qt!==null?Jt?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt,0,0,ft.width,ft.height,qt,ft.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt,Nt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt,0,0,ft.width,ft.height,qt,Rt,ft.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt,Nt,ft.width,ft.height,0,qt,Rt,ft.data)}}}else{ee=E.mipmaps,Jt&&O&&(ee.length>0&&Vt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,Nt,ct[0].width,ct[0].height));for(let U=0;U<6;U++)if(se){Jt?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ct[U].width,ct[U].height,qt,Rt,ct[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Nt,ct[U].width,ct[U].height,0,qt,Rt,ct[U].data);for(let yt=0;yt<ee.length;yt++){const Ot=ee[yt].image[U].image;Jt?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt+1,0,0,Ot.width,Ot.height,qt,Rt,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt+1,Nt,Ot.width,Ot.height,0,qt,Rt,Ot.data)}}else{Jt?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,qt,Rt,ct[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Nt,qt,Rt,ct[U]);for(let yt=0;yt<ee.length;yt++){const ft=ee[yt];Jt?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt+1,0,0,qt,Rt,ft.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt+1,Nt,qt,Rt,ft.image[U])}}}P(E,Gt)&&L(o.TEXTURE_CUBE_MAP),nt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Zt(T,E,H,rt,ht,nt){const It=u.convert(H.format,H.colorSpace),Tt=u.convert(H.type),St=B(H.internalFormat,It,Tt,H.colorSpace);if(!r.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>nt),ct=Math.max(1,E.height>>nt);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?i.texImage3D(ht,nt,St,se,ct,E.depth,0,It,Tt,null):i.texImage2D(ht,nt,St,se,ct,0,It,Tt,null)}i.bindFramebuffer(o.FRAMEBUFFER,T),Qt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,ht,r.get(H).__webglTexture,0,fe(E)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,ht,r.get(H).__webglTexture,nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(T,E,H){if(o.bindRenderbuffer(o.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let rt=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(H||Qt(E)){const ht=E.depthTexture;ht&&ht.isDepthTexture&&(ht.type===na?rt=o.DEPTH_COMPONENT32F:ht.type===Fa&&(rt=o.DEPTH_COMPONENT24));const nt=fe(E);Qt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,nt,rt,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,rt,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,rt,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const rt=fe(E);H&&Qt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,rt,o.DEPTH24_STENCIL8,E.width,E.height):Qt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,rt,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,T)}else{const rt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ht=0;ht<rt.length;ht++){const nt=rt[ht],It=u.convert(nt.format,nt.colorSpace),Tt=u.convert(nt.type),St=B(nt.internalFormat,It,Tt,nt.colorSpace),Ht=fe(E);H&&Qt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,St,E.width,E.height):Qt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ht,St,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,St,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const rt=r.get(E.depthTexture).__webglTexture,ht=fe(E);if(E.depthTexture.format===xr)Qt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,rt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,rt,0);else if(E.depthTexture.format===Rs)Qt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,rt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function te(T){const E=r.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ft(E.__webglFramebuffer,T)}else if(H){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]=o.createRenderbuffer(),Bt(E.__webglDepthbuffer[rt],T,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Bt(E.__webglDepthbuffer,T,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(T,E,H){const rt=r.get(T);E!==void 0&&Zt(rt.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),H!==void 0&&te(T)}function J(T){const E=T.texture,H=r.get(T),rt=r.get(E);T.addEventListener("dispose",vt),T.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=E.version,h.memory.textures++);const ht=T.isWebGLCubeRenderTarget===!0,nt=T.isWebGLMultipleRenderTargets===!0,It=v(T)||d;if(ht){H.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(d&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Tt]=[];for(let St=0;St<E.mipmaps.length;St++)H.__webglFramebuffer[Tt][St]=o.createFramebuffer()}else H.__webglFramebuffer[Tt]=o.createFramebuffer()}else{if(d&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)H.__webglFramebuffer[Tt]=o.createFramebuffer()}else H.__webglFramebuffer=o.createFramebuffer();if(nt)if(l.drawBuffers){const Tt=T.texture;for(let St=0,Ht=Tt.length;St<Ht;St++){const se=r.get(Tt[St]);se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&T.samples>0&&Qt(T)===!1){const Tt=nt?E:[E];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let St=0;St<Tt.length;St++){const Ht=Tt[St];H.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,H.__webglColorRenderbuffer[St]);const se=u.convert(Ht.format,Ht.colorSpace),ct=u.convert(Ht.type),Se=B(Ht.internalFormat,se,ct,Ht.colorSpace,T.isXRRenderTarget===!0),Gt=fe(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,Se,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,H.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(H.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),wt(o.TEXTURE_CUBE_MAP,E,It);for(let Tt=0;Tt<6;Tt++)if(d&&E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)Zt(H.__webglFramebuffer[Tt][St],T,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,St);else Zt(H.__webglFramebuffer[Tt],T,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);P(E,It)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(nt){const Tt=T.texture;for(let St=0,Ht=Tt.length;St<Ht;St++){const se=Tt[St],ct=r.get(se);i.bindTexture(o.TEXTURE_2D,ct.__webglTexture),wt(o.TEXTURE_2D,se,It),Zt(H.__webglFramebuffer,T,se,o.COLOR_ATTACHMENT0+St,o.TEXTURE_2D,0),P(se,It)&&L(o.TEXTURE_2D)}i.unbindTexture()}else{let Tt=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(d?Tt=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Tt,rt.__webglTexture),wt(Tt,E,It),d&&E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)Zt(H.__webglFramebuffer[St],T,E,o.COLOR_ATTACHMENT0,Tt,St);else Zt(H.__webglFramebuffer,T,E,o.COLOR_ATTACHMENT0,Tt,0);P(E,It)&&L(Tt),i.unbindTexture()}T.depthBuffer&&te(T)}function Be(T){const E=v(T)||d,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let rt=0,ht=H.length;rt<ht;rt++){const nt=H[rt];if(P(nt,E)){const It=T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Tt=r.get(nt).__webglTexture;i.bindTexture(It,Tt),L(It),i.unbindTexture()}}}function ie(T){if(d&&T.samples>0&&Qt(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,rt=T.height;let ht=o.COLOR_BUFFER_BIT;const nt=[],It=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=r.get(T),St=T.isWebGLMultipleRenderTargets===!0;if(St)for(let Ht=0;Ht<E.length;Ht++)i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ht=0;Ht<E.length;Ht++){nt.push(o.COLOR_ATTACHMENT0+Ht),T.depthBuffer&&nt.push(It);const se=Tt.__ignoreDepthValues!==void 0?Tt.__ignoreDepthValues:!1;if(se===!1&&(T.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),St&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ht]),se===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[It]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[It])),St){const ct=r.get(E[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ct,0)}o.blitFramebuffer(0,0,H,rt,0,0,H,rt,ht,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,nt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let Ht=0;Ht<E.length;Ht++){i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ht]);const se=r.get(E[Ht]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}}function fe(T){return Math.min(l.maxSamples,T.samples)}function Qt(T){const E=r.get(T);return d&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(T){const E=h.render.frame;g.get(T)!==E&&(g.set(T,E),T.update())}function _t(T,E){const H=T.colorSpace,rt=T.format,ht=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Md||H!==aa&&H!==di&&(ke.getTransfer(H)===Ze?d===!1?e.has("EXT_sRGB")===!0&&rt===Mi?(T.format=Md,T.minFilter=kn,T.generateMipmaps=!1):E=a0.sRGBToLinear(E):(rt!==Mi||ht!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=j,this.resetTextureUnits=bt,this.setTexture2D=G,this.setTexture2DArray=ot,this.setTexture3D=$,this.setTextureCube=ut,this.rebindTextures=ne,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=Qt}function ZT(o,e,i){const r=i.isWebGL2;function l(u,h=di){let d;const p=ke.getTransfer(h);if(u===Ga)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vy)return o.BYTE;if(u===xy)return o.SHORT;if(u===Cd)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Fa)return o.UNSIGNED_INT;if(u===na)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===yy)return o.ALPHA;if(u===Mi)return o.RGBA;if(u===Sy)return o.LUMINANCE;if(u===My)return o.LUMINANCE_ALPHA;if(u===xr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Md)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===Ey)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===by)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Ze)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Ff)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Ff)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===_g||u===vg||u===xg||u===yg)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===_g)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===vg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===xg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Sg||u===Mg)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Sg)return p===Ze?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Mg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Eg||u===bg||u===Tg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Eg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===bg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Tg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Ag)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===wg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Rg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Cg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Dg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Lg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ug)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ng)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Og)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Pg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===zg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Bg||u===Fg)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(u===Vf)return p===Ze?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Bg)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Fg)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Ty||u===Ig||u===Hg||u===Gg)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(u===Vf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Ig)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Hg)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Gg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class KT extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const v=i.getJointPose(C,r),_=this._getHandJoint(m,C);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=g.position.distanceTo(x.position),M=.02,A=.005;m.inputState.pinching&&S>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ms;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Xn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new ra({extensions:{fragDepth:!0},vertexShader:JT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new ti(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,S=null,M=null,A=null;const C=new tA,v=i.getContextAttributes();let _=null,P=null;const L=[],B=[],W=new xe;let V=null;const F=new $n;F.layers.enable(1),F.viewport=new Qe;const vt=new $n;vt.layers.enable(2),vt.viewport=new Qe;const I=[F,vt],b=new KT;b.layers.enable(1),b.layers.enable(2);let N=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let dt=L[X];return dt===void 0&&(dt=new fd,L[X]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(X){let dt=L[X];return dt===void 0&&(dt=new fd,L[X]=dt),dt.getGripSpace()},this.getHand=function(X){let dt=L[X];return dt===void 0&&(dt=new fd,L[X]=dt),dt.getHandSpace()};function bt(X){const dt=B.indexOf(X.inputSource);if(dt===-1)return;const Et=L[dt];Et!==void 0&&(Et.update(X.inputSource,X.frame,m||h),Et.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){l.removeEventListener("select",bt),l.removeEventListener("selectstart",bt),l.removeEventListener("selectend",bt),l.removeEventListener("squeeze",bt),l.removeEventListener("squeezestart",bt),l.removeEventListener("squeezeend",bt),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",st);for(let X=0;X<L.length;X++){const dt=B[X];dt!==null&&(B[X]=null,L[X].disconnect(dt))}N=null,mt=null,C.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,P=null,wt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){u=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",bt),l.addEventListener("selectstart",bt),l.addEventListener("selectend",bt),l.addEventListener("squeeze",bt),l.addEventListener("squeezestart",bt),l.addEventListener("squeezeend",bt),l.addEventListener("end",j),l.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(W),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const dt={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Sr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:Ga,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let dt=null,Et=null,Zt=null;v.depth&&(Zt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=v.stencil?Rs:xr,Et=v.stencil?vr:Fa);const Bt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Bt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Sr(S.textureWidth,S.textureHeight,{format:Mi,type:Ga,depthTexture:new _0(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ft=e.properties.get(P);Ft.__ignoreDepthValues=S.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function st(X){for(let dt=0;dt<X.removed.length;dt++){const Et=X.removed[dt],Zt=B.indexOf(Et);Zt>=0&&(B[Zt]=null,L[Zt].disconnect(Et))}for(let dt=0;dt<X.added.length;dt++){const Et=X.added[dt];let Zt=B.indexOf(Et);if(Zt===-1){for(let Ft=0;Ft<L.length;Ft++)if(Ft>=B.length){B.push(Et),Zt=Ft;break}else if(B[Ft]===null){B[Ft]=Et,Zt=Ft;break}if(Zt===-1)break}const Bt=L[Zt];Bt&&Bt.connect(Et)}}const G=new Y,ot=new Y;function $(X,dt,Et){G.setFromMatrixPosition(dt.matrixWorld),ot.setFromMatrixPosition(Et.matrixWorld);const Zt=G.distanceTo(ot),Bt=dt.projectionMatrix.elements,Ft=Et.projectionMatrix.elements,te=Bt[14]/(Bt[10]-1),ne=Bt[14]/(Bt[10]+1),J=(Bt[9]+1)/Bt[5],Be=(Bt[9]-1)/Bt[5],ie=(Bt[8]-1)/Bt[0],fe=(Ft[8]+1)/Ft[0],Qt=te*ie,ze=te*fe,_t=Zt/(-ie+fe),T=_t*-ie;dt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(T),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const E=te+_t,H=ne+_t,rt=Qt-T,ht=ze+(Zt-T),nt=J*ne/H*E,It=Be*ne/H*E;X.projectionMatrix.makePerspective(rt,ht,nt,It,E,H),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ut(X,dt){dt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(dt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;C.texture!==null&&(X.near=C.depthNear,X.far=C.depthFar),b.near=vt.near=F.near=X.near,b.far=vt.far=F.far=X.far,(N!==b.near||mt!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,mt=b.far,F.near=N,F.far=mt,vt.near=N,vt.far=mt,F.updateProjectionMatrix(),vt.updateProjectionMatrix(),X.updateProjectionMatrix());const dt=X.parent,Et=b.cameras;ut(b,dt);for(let Zt=0;Zt<Et.length;Zt++)ut(Et[Zt],dt);Et.length===2?$(b,F,vt):b.projectionMatrix.copy(F.projectionMatrix),D(X,b,dt)};function D(X,dt,Et){Et===null?X.matrix.copy(dt.matrixWorld):(X.matrix.copy(Et.matrixWorld),X.matrix.invert(),X.matrix.multiply(dt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(dt.projectionMatrix),X.projectionMatrixInverse.copy(dt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(X){p=X,S!==null&&(S.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return C.texture!==null};let K=null;function pt(X,dt){if(g=dt.getViewerPose(m||h),A=dt,g!==null){const Et=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Zt=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,Zt=!0);for(let Ft=0;Ft<Et.length;Ft++){const te=Et[Ft];let ne=null;if(M!==null)ne=M.getViewport(te);else{const Be=x.getViewSubImage(S,te);ne=Be.viewport,Ft===0&&(e.setRenderTargetTextures(P,Be.colorTexture,S.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(P))}let J=I[Ft];J===void 0&&(J=new $n,J.layers.enable(Ft),J.viewport=new Qe,I[Ft]=J),J.matrix.fromArray(te.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(te.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ne.x,ne.y,ne.width,ne.height),Ft===0&&(b.matrix.copy(J.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Zt===!0&&b.cameras.push(J)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Ft=x.getDepthInformation(Et[0]);Ft&&Ft.isValid&&Ft.texture&&C.init(e,Ft,l.renderState)}}for(let Et=0;Et<L.length;Et++){const Zt=B[Et],Bt=L[Et];Zt!==null&&Bt!==void 0&&Bt.update(Zt,dt,m||h)}C.render(e,b),K&&K(X,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),A=null}const wt=new m0;wt.setAnimationLoop(pt),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,d0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,P,L,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),x(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),S(v,_),_.isMeshPhysicalMaterial&&M(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),A(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),C(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,P,L):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Wn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Wn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(v.envMap.value=P,v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const L=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*L,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,P,L){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=L*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function S(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,P){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,_){_.matcap&&(v.matcap.value=_.matcap)}function C(v,_){const P=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(P,L){const B=L.program;r.uniformBlockBinding(P,B)}function m(P,L){let B=l[P.id];B===void 0&&(A(P),B=g(P),l[P.id]=B,P.addEventListener("dispose",v));const W=L.program;r.updateUBOMapping(P,W);const V=e.render.frame;u[P.id]!==V&&(S(P),u[P.id]=V)}function g(P){const L=x();P.__bindingPointIndex=L;const B=o.createBuffer(),W=P.__size,V=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,W,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,B),B}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const L=l[P.id],B=P.uniforms,W=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let V=0,F=B.length;V<F;V++){const vt=Array.isArray(B[V])?B[V]:[B[V]];for(let I=0,b=vt.length;I<b;I++){const N=vt[I];if(M(N,V,I,W)===!0){const mt=N.__offset,bt=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let st=0;st<bt.length;st++){const G=bt[st],ot=C(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,mt+j,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,j),j+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,mt,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,L,B,W){const V=P.value,F=L+"_"+B;if(W[F]===void 0)return typeof V=="number"||typeof V=="boolean"?W[F]=V:W[F]=V.clone(),!0;{const vt=W[F];if(typeof V=="number"||typeof V=="boolean"){if(vt!==V)return W[F]=V,!0}else if(vt.equals(V)===!1)return vt.copy(V),!0}return!1}function A(P){const L=P.uniforms;let B=0;const W=16;for(let F=0,vt=L.length;F<vt;F++){const I=Array.isArray(L[F])?L[F]:[L[F]];for(let b=0,N=I.length;b<N;b++){const mt=I[b],bt=Array.isArray(mt.value)?mt.value:[mt.value];for(let j=0,st=bt.length;j<st;j++){const G=bt[j],ot=C(G),$=B%W;$!==0&&W-$<ot.boundary&&(B+=W-$),mt.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),mt.__offset=B,B+=ot.storage}}}const V=B%W;return V>0&&(B+=W-V),P.__size=B,P.__cache={},this}function C(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function v(P){const L=P.target;L.removeEventListener("dispose",v);const B=h.indexOf(L.__bindingPointIndex);h.splice(B,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=Ky(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=h;const M=new Uint32Array(4),A=new Int32Array(4);let C=null,v=null;const _=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const L=this;let B=!1,W=0,V=0,F=null,vt=-1,I=null;const b=new Qe,N=new Qe;let mt=null;const bt=new Ue(0);let j=0,st=i.width,G=i.height,ot=1,$=null,ut=null;const D=new Qe(0,0,st,G),K=new Qe(0,0,st,G);let pt=!1;const wt=new Nd;let X=!1,dt=!1,Et=null;const Zt=new ln,Bt=new xe,Ft=new Y,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return F===null?ot:1}let J=r;function Be(R,k){for(let et=0;et<R.length;et++){const at=R[et],tt=i.getContext(at,k);if(tt!==null)return tt}return null}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",yt,!1),J===null){const k=["webgl2","webgl","experimental-webgl"];if(L.isWebGL1Renderer===!0&&k.shift(),J=Be(k,R),J===null)throw Be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,fe,Qt,ze,_t,T,E,H,rt,ht,nt,It,Tt,St,Ht,se,ct,Se,Gt,qt,Rt,Nt,Jt,O;function Ct(){ie=new ub(J),fe=new ab(J,ie,e),ie.init(fe),Nt=new ZT(J,ie,fe),Qt=new YT(J,ie,fe),ze=new hb(J),_t=new NT,T=new jT(J,ie,Qt,_t,fe,Nt,ze),E=new sb(L),H=new cb(L),rt=new SS(J,fe),Jt=new nb(J,ie,rt,fe),ht=new fb(J,rt,ze,Jt),nt=new _b(J,ht,rt,ze),Gt=new gb(J,fe,T),se=new rb(_t),It=new UT(L,E,H,ie,fe,Jt,se),Tt=new nA(L,_t),St=new PT,Ht=new GT(ie,fe),Se=new eb(L,E,H,Qt,nt,S,p),ct=new qT(L,nt,fe),O=new iA(J,ze,fe,Qt),qt=new ib(J,ie,ze,fe),Rt=new db(J,ie,ze,fe),ze.programs=It.programs,L.capabilities=fe,L.extensions=ie,L.properties=_t,L.renderLists=St,L.shadowMap=ct,L.state=Qt,L.info=ze}Ct();const Vt=new eA(L,J);this.xr=Vt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(R){R!==void 0&&(ot=R,this.setSize(st,G,!1))},this.getSize=function(R){return R.set(st,G)},this.setSize=function(R,k,et=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=R,G=k,i.width=Math.floor(R*ot),i.height=Math.floor(k*ot),et===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(st*ot,G*ot).floor()},this.setDrawingBufferSize=function(R,k,et){st=R,G=k,ot=et,i.width=Math.floor(R*et),i.height=Math.floor(k*et),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,k,et,at){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,k,et,at),Qt.viewport(b.copy(D).multiplyScalar(ot).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,k,et,at){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,k,et,at),Qt.scissor(N.copy(K).multiplyScalar(ot).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){Qt.setScissorTest(pt=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(R=!0,k=!0,et=!0){let at=0;if(R){let tt=!1;if(F!==null){const Ut=F.texture.format;tt=Ut===J_||Ut===Q_||Ut===K_}if(tt){const Ut=F.texture.type,Kt=Ut===Ga||Ut===Fa||Ut===Cd||Ut===vr||Ut===j_||Ut===Z_,ae=Se.getClearColor(),jt=Se.getClearAlpha(),ve=ae.r,me=ae.g,le=ae.b;Kt?(M[0]=ve,M[1]=me,M[2]=le,M[3]=jt,J.clearBufferuiv(J.COLOR,0,M)):(A[0]=ve,A[1]=me,A[2]=le,A[3]=jt,J.clearBufferiv(J.COLOR,0,A))}else at|=J.COLOR_BUFFER_BIT}k&&(at|=J.DEPTH_BUFFER_BIT),et&&(at|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),St.dispose(),Ht.dispose(),_t.dispose(),E.dispose(),H.dispose(),nt.dispose(),Jt.dispose(),O.dispose(),It.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ke),Vt.removeEventListener("sessionend",ue),Et&&(Et.dispose(),Et=null),He.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=ze.autoReset,k=ct.enabled,et=ct.autoUpdate,at=ct.needsUpdate,tt=ct.type;Ct(),ze.autoReset=R,ct.enabled=k,ct.autoUpdate=et,ct.needsUpdate=at,ct.type=tt}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ft(R){const k=R.target;k.removeEventListener("dispose",ft),Ot(k)}function Ot(R){kt(R),_t.remove(R)}function kt(R){const k=_t.get(R).programs;k!==void 0&&(k.forEach(function(et){It.releaseProgram(et)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,et,at,tt,Ut){k===null&&(k=te);const Kt=tt.isMesh&&tt.matrixWorld.determinant()<0,ae=Wt(R,k,et,at,tt);Qt.setMaterial(at,Kt);let jt=et.index,ve=1;if(at.wireframe===!0){if(jt=ht.getWireframeAttribute(et),jt===void 0)return;ve=2}const me=et.drawRange,le=et.attributes.position;let Fe=me.start*ve,qe=(me.start+me.count)*ve;Ut!==null&&(Fe=Math.max(Fe,Ut.start*ve),qe=Math.min(qe,(Ut.start+Ut.count)*ve)),jt!==null?(Fe=Math.max(Fe,0),qe=Math.min(qe,jt.count)):le!=null&&(Fe=Math.max(Fe,0),qe=Math.min(qe,le.count));const rn=qe-Fe;if(rn<0||rn===1/0)return;Jt.setup(tt,at,ae,et,jt);let cn,Ie=qt;if(jt!==null&&(cn=rt.get(jt),Ie=Rt,Ie.setIndex(cn)),tt.isMesh)at.wireframe===!0?(Qt.setLineWidth(at.wireframeLinewidth*ne()),Ie.setMode(J.LINES)):Ie.setMode(J.TRIANGLES);else if(tt.isLine){let de=at.linewidth;de===void 0&&(de=1),Qt.setLineWidth(de*ne()),tt.isLineSegments?Ie.setMode(J.LINES):tt.isLineLoop?Ie.setMode(J.LINE_LOOP):Ie.setMode(J.LINE_STRIP)}else tt.isPoints?Ie.setMode(J.POINTS):tt.isSprite&&Ie.setMode(J.TRIANGLES);if(tt.isBatchedMesh)Ie.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)Ie.renderInstances(Fe,rn,tt.count);else if(et.isInstancedBufferGeometry){const de=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,oa=Math.min(et.instanceCount,de);Ie.renderInstances(Fe,rn,oa)}else Ie.render(Fe,rn)};function Me(R,k,et){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Pt(R,k,et),R.side=ka,R.needsUpdate=!0,Pt(R,k,et),R.side=Li):Pt(R,k,et)}this.compile=function(R,k,et=null){et===null&&(et=R),v=Ht.get(et),v.init(),P.push(v),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(v.pushLight(tt),tt.castShadow&&v.pushShadow(tt))}),R!==et&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(v.pushLight(tt),tt.castShadow&&v.pushShadow(tt))}),v.setupLights(L._useLegacyLights);const at=new Set;return R.traverse(function(tt){const Ut=tt.material;if(Ut)if(Array.isArray(Ut))for(let Kt=0;Kt<Ut.length;Kt++){const ae=Ut[Kt];Me(ae,et,tt),at.add(ae)}else Me(Ut,et,tt),at.add(Ut)}),P.pop(),v=null,at},this.compileAsync=function(R,k,et=null){const at=this.compile(R,k,et);return new Promise(tt=>{function Ut(){if(at.forEach(function(Kt){_t.get(Kt).currentProgram.isReady()&&at.delete(Kt)}),at.size===0){tt(R);return}setTimeout(Ut,10)}ie.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let ge=null;function we(R){ge&&ge(R)}function Ke(){He.stop()}function ue(){He.start()}const He=new m0;He.setAnimationLoop(we),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(R){ge=R,Vt.setAnimationLoop(R),R===null?He.stop():He.start()},Vt.addEventListener("sessionstart",Ke),Vt.addEventListener("sessionend",ue),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,k,F),v=Ht.get(R,P.length),v.init(),P.push(v),Zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),wt.setFromProjectionMatrix(Zt),dt=this.localClippingEnabled,X=se.init(this.clippingPlanes,dt),C=St.get(R,_.length),C.init(),_.push(C),tn(R,k,0,L.sortObjects),C.finish(),L.sortObjects===!0&&C.sort($,ut),this.info.render.frame++,X===!0&&se.beginShadows();const et=v.state.shadowsArray;if(ct.render(et,R,k),X===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1)&&Se.render(C,R),v.setupLights(L._useLegacyLights),k.isArrayCamera){const at=k.cameras;for(let tt=0,Ut=at.length;tt<Ut;tt++){const Kt=at[tt];Ei(C,R,Kt,Kt.viewport)}}else Ei(C,R,k);F!==null&&(T.updateMultisampleRenderTarget(F),T.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(L,R,k),Jt.resetDefaultState(),vt=-1,I=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,_.pop(),_.length>0?C=_[_.length-1]:C=null};function tn(R,k,et,at){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||wt.intersectsSprite(R)){at&&Ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Zt);const Kt=nt.update(R),ae=R.material;ae.visible&&C.push(R,Kt,ae,et,Ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||wt.intersectsObject(R))){const Kt=nt.update(R),ae=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ft.copy(R.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),Ft.copy(Kt.boundingSphere.center)),Ft.applyMatrix4(R.matrixWorld).applyMatrix4(Zt)),Array.isArray(ae)){const jt=Kt.groups;for(let ve=0,me=jt.length;ve<me;ve++){const le=jt[ve],Fe=ae[le.materialIndex];Fe&&Fe.visible&&C.push(R,Kt,Fe,et,Ft.z,le)}}else ae.visible&&C.push(R,Kt,ae,et,Ft.z,null)}}const Ut=R.children;for(let Kt=0,ae=Ut.length;Kt<ae;Kt++)tn(Ut[Kt],k,et,at)}function Ei(R,k,et,at){const tt=R.opaque,Ut=R.transmissive,Kt=R.transparent;v.setupLightsView(et),X===!0&&se.setGlobalState(L.clippingPlanes,et),Ut.length>0&&sa(tt,Ut,k,et),at&&Qt.viewport(b.copy(at)),tt.length>0&&Lt(tt,k,et),Ut.length>0&&Lt(Ut,k,et),Kt.length>0&&Lt(Kt,k,et),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function sa(R,k,et,at){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const Ut=fe.isWebGL2;Et===null&&(Et=new Sr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?Fo:Ga,minFilter:_r,samples:Ut?4:0})),L.getDrawingBufferSize(Bt),Ut?Et.setSize(Bt.x,Bt.y):Et.setSize(yc(Bt.x),yc(Bt.y));const Kt=L.getRenderTarget();L.setRenderTarget(Et),L.getClearColor(bt),j=L.getClearAlpha(),j<1&&L.setClearColor(16777215,.5),L.clear();const ae=L.toneMapping;L.toneMapping=Ha,Lt(R,et,at),T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et);let jt=!1;for(let ve=0,me=k.length;ve<me;ve++){const le=k[ve],Fe=le.object,qe=le.geometry,rn=le.material,cn=le.group;if(rn.side===Li&&Fe.layers.test(at.layers)){const Ie=rn.side;rn.side=Wn,rn.needsUpdate=!0,Yt(Fe,et,at,qe,rn,cn),rn.side=Ie,rn.needsUpdate=!0,jt=!0}}jt===!0&&(T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et)),L.setRenderTarget(Kt),L.setClearColor(bt,j),L.toneMapping=ae}function Lt(R,k,et){const at=k.isScene===!0?k.overrideMaterial:null;for(let tt=0,Ut=R.length;tt<Ut;tt++){const Kt=R[tt],ae=Kt.object,jt=Kt.geometry,ve=at===null?Kt.material:at,me=Kt.group;ae.layers.test(et.layers)&&Yt(ae,k,et,jt,ve,me)}}function Yt(R,k,et,at,tt,Ut){R.onBeforeRender(L,k,et,at,tt,Ut),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(L,k,et,at,R,Ut),tt.transparent===!0&&tt.side===Li&&tt.forceSinglePass===!1?(tt.side=Wn,tt.needsUpdate=!0,L.renderBufferDirect(et,k,at,tt,R,Ut),tt.side=ka,tt.needsUpdate=!0,L.renderBufferDirect(et,k,at,tt,R,Ut),tt.side=Li):L.renderBufferDirect(et,k,at,tt,R,Ut),R.onAfterRender(L,k,et,at,tt,Ut)}function Pt(R,k,et){k.isScene!==!0&&(k=te);const at=_t.get(R),tt=v.state.lights,Ut=v.state.shadowsArray,Kt=tt.state.version,ae=It.getParameters(R,tt.state,Ut,k,et),jt=It.getProgramCacheKey(ae);let ve=at.programs;at.environment=R.isMeshStandardMaterial?k.environment:null,at.fog=k.fog,at.envMap=(R.isMeshStandardMaterial?H:E).get(R.envMap||at.environment),ve===void 0&&(R.addEventListener("dispose",ft),ve=new Map,at.programs=ve);let me=ve.get(jt);if(me!==void 0){if(at.currentProgram===me&&at.lightsStateVersion===Kt)return Dt(R,ae),me}else ae.uniforms=It.getUniforms(R),R.onBuild(et,ae,L),R.onBeforeCompile(ae,L),me=It.acquireProgram(ae,jt),ve.set(jt,me),at.uniforms=ae.uniforms;const le=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(le.clippingPlanes=se.uniform),Dt(R,ae),at.needsLights=_e(R),at.lightsStateVersion=Kt,at.needsLights&&(le.ambientLightColor.value=tt.state.ambient,le.lightProbe.value=tt.state.probe,le.directionalLights.value=tt.state.directional,le.directionalLightShadows.value=tt.state.directionalShadow,le.spotLights.value=tt.state.spot,le.spotLightShadows.value=tt.state.spotShadow,le.rectAreaLights.value=tt.state.rectArea,le.ltc_1.value=tt.state.rectAreaLTC1,le.ltc_2.value=tt.state.rectAreaLTC2,le.pointLights.value=tt.state.point,le.pointLightShadows.value=tt.state.pointShadow,le.hemisphereLights.value=tt.state.hemi,le.directionalShadowMap.value=tt.state.directionalShadowMap,le.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,le.spotShadowMap.value=tt.state.spotShadowMap,le.spotLightMatrix.value=tt.state.spotLightMatrix,le.spotLightMap.value=tt.state.spotLightMap,le.pointShadowMap.value=tt.state.pointShadowMap,le.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=me,at.uniformsList=null,me}function zt(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=pc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Dt(R,k){const et=_t.get(R);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function Wt(R,k,et,at,tt){k.isScene!==!0&&(k=te),T.resetTextureUnits();const Ut=k.fog,Kt=at.isMeshStandardMaterial?k.environment:null,ae=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:aa,jt=(at.isMeshStandardMaterial?H:E).get(at.envMap||Kt),ve=at.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,me=!!et.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),le=!!et.morphAttributes.position,Fe=!!et.morphAttributes.normal,qe=!!et.morphAttributes.color;let rn=Ha;at.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(rn=L.toneMapping);const cn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ie=cn!==void 0?cn.length:0,de=_t.get(at),oa=v.state.lights;if(X===!0&&(dt===!0||R!==I)){const Hn=R===I&&at.id===vt;se.setState(at,R,Hn)}let We=!1;at.version===de.__version?(de.needsLights&&de.lightsStateVersion!==oa.state.version||de.outputColorSpace!==ae||tt.isBatchedMesh&&de.batching===!1||!tt.isBatchedMesh&&de.batching===!0||tt.isInstancedMesh&&de.instancing===!1||!tt.isInstancedMesh&&de.instancing===!0||tt.isSkinnedMesh&&de.skinning===!1||!tt.isSkinnedMesh&&de.skinning===!0||tt.isInstancedMesh&&de.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&de.instancingColor===!1&&tt.instanceColor!==null||de.envMap!==jt||at.fog===!0&&de.fog!==Ut||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==se.numPlanes||de.numIntersection!==se.numIntersection)||de.vertexAlphas!==ve||de.vertexTangents!==me||de.morphTargets!==le||de.morphNormals!==Fe||de.morphColors!==qe||de.toneMapping!==rn||fe.isWebGL2===!0&&de.morphTargetsCount!==Ie)&&(We=!0):(We=!0,de.__version=at.version);let Mn=de.currentProgram;We===!0&&(Mn=Pt(at,k,tt));let On=!1,la=!1,Ns=!1;const sn=Mn.getUniforms(),bi=de.uniforms;if(Qt.useProgram(Mn.program)&&(On=!0,la=!0,Ns=!0),at.id!==vt&&(vt=at.id,la=!0),On||I!==R){sn.setValue(J,"projectionMatrix",R.projectionMatrix),sn.setValue(J,"viewMatrix",R.matrixWorldInverse);const Hn=sn.map.cameraPosition;Hn!==void 0&&Hn.setValue(J,Ft.setFromMatrixPosition(R.matrixWorld)),fe.logarithmicDepthBuffer&&sn.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&sn.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,la=!0,Ns=!0)}if(tt.isSkinnedMesh){sn.setOptional(J,tt,"bindMatrix"),sn.setOptional(J,tt,"bindMatrixInverse");const Hn=tt.skeleton;Hn&&(fe.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),sn.setValue(J,"boneTexture",Hn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(sn.setOptional(J,tt,"batchingTexture"),sn.setValue(J,"batchingTexture",tt._matricesTexture,T));const ca=et.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&fe.isWebGL2===!0)&&Gt.update(tt,et,Mn),(la||de.receiveShadow!==tt.receiveShadow)&&(de.receiveShadow=tt.receiveShadow,sn.setValue(J,"receiveShadow",tt.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bi.envMap.value=jt,bi.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),la&&(sn.setValue(J,"toneMappingExposure",L.toneMappingExposure),de.needsLights&&he(bi,Ns),Ut&&at.fog===!0&&Tt.refreshFogUniforms(bi,Ut),Tt.refreshMaterialUniforms(bi,at,ot,G,Et),pc.upload(J,zt(de),bi,T)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(pc.upload(J,zt(de),bi,T),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&sn.setValue(J,"center",tt.center),sn.setValue(J,"modelViewMatrix",tt.modelViewMatrix),sn.setValue(J,"normalMatrix",tt.normalMatrix),sn.setValue(J,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Hn=at.uniformsGroups;for(let Rn=0,Os=Hn.length;Rn<Os;Rn++)if(fe.isWebGL2){const Ps=Hn[Rn];O.update(Ps,Mn),O.bind(Ps,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function he(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function _e(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,k,et){_t.get(R.texture).__webglTexture=k,_t.get(R.depthTexture).__webglTexture=et;const at=_t.get(R);at.__hasExternalTextures=!0,at.__hasExternalTextures&&(at.__autoAllocateDepthBuffer=et===void 0,at.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const et=_t.get(R);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,et=0){F=R,W=k,V=et;let at=!0,tt=null,Ut=!1,Kt=!1;if(R){const jt=_t.get(R);jt.__useDefaultFramebuffer!==void 0?(Qt.bindFramebuffer(J.FRAMEBUFFER,null),at=!1):jt.__webglFramebuffer===void 0?T.setupRenderTarget(R):jt.__hasExternalTextures&&T.rebindTextures(R,_t.get(R.texture).__webglTexture,_t.get(R.depthTexture).__webglTexture);const ve=R.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(Kt=!0);const me=_t.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(me[k])?tt=me[k][et]:tt=me[k],Ut=!0):fe.isWebGL2&&R.samples>0&&T.useMultisampledRTT(R)===!1?tt=_t.get(R).__webglMultisampledFramebuffer:Array.isArray(me)?tt=me[et]:tt=me,b.copy(R.viewport),N.copy(R.scissor),mt=R.scissorTest}else b.copy(D).multiplyScalar(ot).floor(),N.copy(K).multiplyScalar(ot).floor(),mt=pt;if(Qt.bindFramebuffer(J.FRAMEBUFFER,tt)&&fe.drawBuffers&&at&&Qt.drawBuffers(R,tt),Qt.viewport(b),Qt.scissor(N),Qt.setScissorTest(mt),Ut){const jt=_t.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+k,jt.__webglTexture,et)}else if(Kt){const jt=_t.get(R.texture),ve=k||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,jt.__webglTexture,et||0,ve)}vt=-1},this.readRenderTargetPixels=function(R,k,et,at,tt,Ut,Kt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=_t.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Kt!==void 0&&(ae=ae[Kt]),ae){Qt.bindFramebuffer(J.FRAMEBUFFER,ae);try{const jt=R.texture,ve=jt.format,me=jt.type;if(ve!==Mi&&Nt.convert(ve)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const le=me===Fo&&(ie.has("EXT_color_buffer_half_float")||fe.isWebGL2&&ie.has("EXT_color_buffer_float"));if(me!==Ga&&Nt.convert(me)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(me===na&&(fe.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-at&&et>=0&&et<=R.height-tt&&J.readPixels(k,et,at,tt,Nt.convert(ve),Nt.convert(me),Ut)}finally{const jt=F!==null?_t.get(F).__webglFramebuffer:null;Qt.bindFramebuffer(J.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(R,k,et=0){const at=Math.pow(2,-et),tt=Math.floor(k.image.width*at),Ut=Math.floor(k.image.height*at);T.setTexture2D(k,0),J.copyTexSubImage2D(J.TEXTURE_2D,et,0,0,R.x,R.y,tt,Ut),Qt.unbindTexture()},this.copyTextureToTexture=function(R,k,et,at=0){const tt=k.image.width,Ut=k.image.height,Kt=Nt.convert(et.format),ae=Nt.convert(et.type);T.setTexture2D(et,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,et.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,et.unpackAlignment),k.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,at,R.x,R.y,tt,Ut,Kt,ae,k.image.data):k.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,at,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Kt,k.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,at,R.x,R.y,Kt,ae,k.image),at===0&&et.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Qt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,et,at,tt=0){if(L.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ut=R.max.x-R.min.x+1,Kt=R.max.y-R.min.y+1,ae=R.max.z-R.min.z+1,jt=Nt.convert(at.format),ve=Nt.convert(at.type);let me;if(at.isData3DTexture)T.setTexture3D(at,0),me=J.TEXTURE_3D;else if(at.isDataArrayTexture||at.isCompressedArrayTexture)T.setTexture2DArray(at,0),me=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,at.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,at.unpackAlignment);const le=J.getParameter(J.UNPACK_ROW_LENGTH),Fe=J.getParameter(J.UNPACK_IMAGE_HEIGHT),qe=J.getParameter(J.UNPACK_SKIP_PIXELS),rn=J.getParameter(J.UNPACK_SKIP_ROWS),cn=J.getParameter(J.UNPACK_SKIP_IMAGES),Ie=et.isCompressedTexture?et.mipmaps[tt]:et.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Ie.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ie.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,R.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,R.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,R.min.z),et.isDataTexture||et.isData3DTexture?J.texSubImage3D(me,tt,k.x,k.y,k.z,Ut,Kt,ae,jt,ve,Ie.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(me,tt,k.x,k.y,k.z,Ut,Kt,ae,jt,Ie.data)):J.texSubImage3D(me,tt,k.x,k.y,k.z,Ut,Kt,ae,jt,ve,Ie),J.pixelStorei(J.UNPACK_ROW_LENGTH,le),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Fe),J.pixelStorei(J.UNPACK_SKIP_PIXELS,qe),J.pixelStorei(J.UNPACK_SKIP_ROWS,rn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,cn),tt===0&&at.generateMipmaps&&J.generateMipmap(me),Qt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),Qt.unbindTexture()},this.resetState=function(){W=0,V=0,F=null,Qt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dd?"display-p3":"srgb",i.unpackColorSpace=ke.workingColorSpace===bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?yr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?An:aa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class b0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U_=new ln,Td=new Ud,fc=new Tc,dc=new Y;class sA extends wn{constructor(e=new Oi,i=new b0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;U_.copy(l).invert(),Td.copy(e.ray).applyMatrix4(U_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const S=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let A=S,C=M;A<C;A++){const v=m.getX(A);dc.fromBufferAttribute(x,v),N_(dc,v,p,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let A=S,C=M;A<C;A++)dc.fromBufferAttribute(x,A),N_(dc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function N_(o,e,i,r,l,u,h){const d=Td.distanceSqToPoint(o);if(d<i){const p=new Y;Td.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class Mc extends Oi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],x=new Y,S=new Y,M=[],A=[],C=[],v=[];for(let _=0;_<=r;_++){const P=[],L=_/r;let B=0;_===0&&h===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let W=0;W<=i;W++){const V=W/i;x.x=-e*Math.cos(l+V*u)*Math.sin(h+L*d),x.y=e*Math.cos(h+L*d),x.z=e*Math.sin(l+V*u)*Math.sin(h+L*d),A.push(x.x,x.y,x.z),S.copy(x).normalize(),C.push(S.x,S.y,S.z),v.push(V+B,1-L),P.push(m++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const L=g[_][P+1],B=g[_][P],W=g[_+1][P],V=g[_+1][P+1];(_!==0||h>0)&&M.push(L,B,V),(_!==r-1||p<Math.PI)&&M.push(B,W,V)}this.setIndex(M),this.setAttribute("position",new hi(A,3)),this.setAttribute("normal",new hi(C,3)),this.setAttribute("uv",new hi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const dd=new ln,O_=new Y,P_=new Y;class T0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;O_.setFromMatrixPosition(e.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const z_=new ln,Po=new Y,hd=new Y;class lA extends T0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),r.position.copy(Po),hd.copy(r.position),hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(hd),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),z_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z_)}}class B_ extends Pd{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends T0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends Pd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends Pd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class H_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const G_={type:"change"},pd={type:"start"},V_={type:"end"},hc=new Ud,k_=new Ba,uA=Math.cos(70*hr.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Ht),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ht),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(G_),r.update(),u=l.NONE},this.update=function(){const O=new Y,Ct=new Mr().setFromUnitVectors(e.up,new Y(0,1,0)),Vt=Ct.clone().invert(),ee=new Y,U=new Mr,yt=new Y,ft=2*Math.PI;return function(kt=null){const Me=r.object.position;O.copy(Me).sub(r.target),O.applyQuaternion(Ct),d.setFromVector3(O),r.autoRotate&&u===l.NONE&&mt(b(kt)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let ge=r.minAzimuthAngle,we=r.maxAzimuthAngle;isFinite(ge)&&isFinite(we)&&(ge<-Math.PI?ge+=ft:ge>Math.PI&&(ge-=ft),we<-Math.PI?we+=ft:we>Math.PI&&(we-=ft),ge<=we?d.theta=Math.max(ge,Math.min(we,d.theta)):d.theta=d.theta>(ge+we)/2?Math.max(ge,d.theta):Math.min(we,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&V||r.object.isOrthographicCamera?d.radius=D(d.radius):d.radius=D(d.radius*m),O.setFromSpherical(d),O.applyQuaternion(Vt),Me.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Ke=!1;if(r.zoomToCursor&&V){let ue=null;if(r.object.isPerspectiveCamera){const He=O.length();ue=D(He*m);const tn=He-ue;r.object.position.addScaledVector(B,tn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const He=new Y(W.x,W.y,0);He.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Ke=!0;const tn=new Y(W.x,W.y,0);tn.unproject(r.object),r.object.position.sub(tn).add(He),r.object.updateMatrixWorld(),ue=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(ue).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<uA?e.lookAt(r.target):(k_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(k_,r.target))))}else r.object.isOrthographicCamera&&(Ke=m!==1,Ke&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,V=!1,Ke||ee.distanceToSquared(r.object.position)>h||8*(1-U.dot(r.object.quaternion))>h||yt.distanceToSquared(r.target)>0?(r.dispatchEvent(G_),ee.copy(r.object.position),U.copy(r.object.quaternion),yt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Se),r.domElement.removeEventListener("pointerdown",T),r.domElement.removeEventListener("pointercancel",H),r.domElement.removeEventListener("wheel",nt),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",H),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Ht),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new H_,p=new H_;let m=1;const g=new Y,x=new xe,S=new xe,M=new xe,A=new xe,C=new xe,v=new xe,_=new xe,P=new xe,L=new xe,B=new Y,W=new xe;let V=!1;const F=[],vt={};let I=!1;function b(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function N(O){const Ct=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*Ct)}function mt(O){p.theta-=O}function bt(O){p.phi-=O}const j=function(){const O=new Y;return function(Vt,ee){O.setFromMatrixColumn(ee,0),O.multiplyScalar(-Vt),g.add(O)}}(),st=function(){const O=new Y;return function(Vt,ee){r.screenSpacePanning===!0?O.setFromMatrixColumn(ee,1):(O.setFromMatrixColumn(ee,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Vt),g.add(O)}}(),G=function(){const O=new Y;return function(Vt,ee){const U=r.domElement;if(r.object.isPerspectiveCamera){const yt=r.object.position;O.copy(yt).sub(r.target);let ft=O.length();ft*=Math.tan(r.object.fov/2*Math.PI/180),j(2*Vt*ft/U.clientHeight,r.object.matrix),st(2*ee*ft/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(j(Vt*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),st(ee*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function ot(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function $(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ut(O,Ct){if(!r.zoomToCursor)return;V=!0;const Vt=r.domElement.getBoundingClientRect(),ee=O-Vt.left,U=Ct-Vt.top,yt=Vt.width,ft=Vt.height;W.x=ee/yt*2-1,W.y=-(U/ft)*2+1,B.set(W.x,W.y,1).unproject(r.object).sub(r.object.position).normalize()}function D(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function K(O){x.set(O.clientX,O.clientY)}function pt(O){ut(O.clientX,O.clientX),_.set(O.clientX,O.clientY)}function wt(O){A.set(O.clientX,O.clientY)}function X(O){S.set(O.clientX,O.clientY),M.subVectors(S,x).multiplyScalar(r.rotateSpeed);const Ct=r.domElement;mt(2*Math.PI*M.x/Ct.clientHeight),bt(2*Math.PI*M.y/Ct.clientHeight),x.copy(S),r.update()}function dt(O){P.set(O.clientX,O.clientY),L.subVectors(P,_),L.y>0?ot(N(L.y)):L.y<0&&$(N(L.y)),_.copy(P),r.update()}function Et(O){C.set(O.clientX,O.clientY),v.subVectors(C,A).multiplyScalar(r.panSpeed),G(v.x,v.y),A.copy(C),r.update()}function Zt(O){ut(O.clientX,O.clientY),O.deltaY<0?$(N(O.deltaY)):O.deltaY>0&&ot(N(O.deltaY)),r.update()}function Bt(O){let Ct=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?bt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,r.keyPanSpeed),Ct=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?bt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,-r.keyPanSpeed),Ct=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?mt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(r.keyPanSpeed,0),Ct=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?mt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(-r.keyPanSpeed,0),Ct=!0;break}Ct&&(O.preventDefault(),r.update())}function Ft(O){if(F.length===1)x.set(O.pageX,O.pageY);else{const Ct=Nt(O),Vt=.5*(O.pageX+Ct.x),ee=.5*(O.pageY+Ct.y);x.set(Vt,ee)}}function te(O){if(F.length===1)A.set(O.pageX,O.pageY);else{const Ct=Nt(O),Vt=.5*(O.pageX+Ct.x),ee=.5*(O.pageY+Ct.y);A.set(Vt,ee)}}function ne(O){const Ct=Nt(O),Vt=O.pageX-Ct.x,ee=O.pageY-Ct.y,U=Math.sqrt(Vt*Vt+ee*ee);_.set(0,U)}function J(O){r.enableZoom&&ne(O),r.enablePan&&te(O)}function Be(O){r.enableZoom&&ne(O),r.enableRotate&&Ft(O)}function ie(O){if(F.length==1)S.set(O.pageX,O.pageY);else{const Vt=Nt(O),ee=.5*(O.pageX+Vt.x),U=.5*(O.pageY+Vt.y);S.set(ee,U)}M.subVectors(S,x).multiplyScalar(r.rotateSpeed);const Ct=r.domElement;mt(2*Math.PI*M.x/Ct.clientHeight),bt(2*Math.PI*M.y/Ct.clientHeight),x.copy(S)}function fe(O){if(F.length===1)C.set(O.pageX,O.pageY);else{const Ct=Nt(O),Vt=.5*(O.pageX+Ct.x),ee=.5*(O.pageY+Ct.y);C.set(Vt,ee)}v.subVectors(C,A).multiplyScalar(r.panSpeed),G(v.x,v.y),A.copy(C)}function Qt(O){const Ct=Nt(O),Vt=O.pageX-Ct.x,ee=O.pageY-Ct.y,U=Math.sqrt(Vt*Vt+ee*ee);P.set(0,U),L.set(0,Math.pow(P.y/_.y,r.zoomSpeed)),ot(L.y),_.copy(P);const yt=(O.pageX+Ct.x)*.5,ft=(O.pageY+Ct.y)*.5;ut(yt,ft)}function ze(O){r.enableZoom&&Qt(O),r.enablePan&&fe(O)}function _t(O){r.enableZoom&&Qt(O),r.enableRotate&&ie(O)}function T(O){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",H)),Gt(O),O.pointerType==="touch"?se(O):rt(O))}function E(O){r.enabled!==!1&&(O.pointerType==="touch"?ct(O):ht(O))}function H(O){switch(qt(O),F.length){case 0:r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",H),r.dispatchEvent(V_),u=l.NONE;break;case 1:const Ct=F[0],Vt=vt[Ct];se({pointerId:Ct,pageX:Vt.x,pageY:Vt.y});break}}function rt(O){let Ct;switch(O.button){case 0:Ct=r.mouseButtons.LEFT;break;case 1:Ct=r.mouseButtons.MIDDLE;break;case 2:Ct=r.mouseButtons.RIGHT;break;default:Ct=-1}switch(Ct){case es.DOLLY:if(r.enableZoom===!1)return;pt(O),u=l.DOLLY;break;case es.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;wt(O),u=l.PAN}else{if(r.enableRotate===!1)return;K(O),u=l.ROTATE}break;case es.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;K(O),u=l.ROTATE}else{if(r.enablePan===!1)return;wt(O),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function ht(O){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;X(O);break;case l.DOLLY:if(r.enableZoom===!1)return;dt(O);break;case l.PAN:if(r.enablePan===!1)return;Et(O);break}}function nt(O){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(O.preventDefault(),r.dispatchEvent(pd),Zt(It(O)),r.dispatchEvent(V_))}function It(O){const Ct=O.deltaMode,Vt={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(Ct){case 1:Vt.deltaY*=16;break;case 2:Vt.deltaY*=100;break}return O.ctrlKey&&!I&&(Vt.deltaY*=10),Vt}function Tt(O){O.key==="Control"&&(I=!0,r.domElement.getRootNode().addEventListener("keyup",St,{passive:!0,capture:!0}))}function St(O){O.key==="Control"&&(I=!1,r.domElement.getRootNode().removeEventListener("keyup",St,{passive:!0,capture:!0}))}function Ht(O){r.enabled===!1||r.enablePan===!1||Bt(O)}function se(O){switch(Rt(O),F.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;Ft(O),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;te(O),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;J(O),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Be(O),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function ct(O){switch(Rt(O),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ie(O),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;fe(O),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ze(O),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;_t(O),r.update();break;default:u=l.NONE}}function Se(O){r.enabled!==!1&&O.preventDefault()}function Gt(O){F.push(O.pointerId)}function qt(O){delete vt[O.pointerId];for(let Ct=0;Ct<F.length;Ct++)if(F[Ct]==O.pointerId){F.splice(Ct,1);return}}function Rt(O){let Ct=vt[O.pointerId];Ct===void 0&&(Ct=new xe,vt[O.pointerId]=Ct),Ct.set(O.pageX,O.pageY)}function Nt(O){const Ct=O.pointerId===F[0]?F[1]:F[0];return vt[Ct]}r.domElement.addEventListener("contextmenu",Se),r.domElement.addEventListener("pointerdown",T),r.domElement.addEventListener("pointercancel",H),r.domElement.addEventListener("wheel",nt,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Tt,{passive:!0,capture:!0}),this.update()}}function dA(){const o=be.useRef(null),[e,i]=be.useState(!1),[r,l]=be.useState(!1),[u,h]=be.useState(!1),[d,p]=be.useState(!1),[m,g]=be.useState(!1),[x,S]=be.useState(!1),[M,A]=be.useState(!1),[C,v]=be.useState(!1),[_,P]=be.useState(!1),[L,B]=be.useState(!1),W=be.useRef({beta:0,gamma:0}),V=be.useRef(0),F=be.useRef(!1),vt=be.useRef(!1),I=be.useRef({position:{x:1,z:1},direction:new Y(0,0,1),worldPosition:new Y(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),b=be.useRef({}),N=be.useRef(null),mt=be.useRef(!1);be.useEffect(()=>{vt.current=u},[u]),be.useEffect(()=>{mt.current=e},[e]);const[bt,j]=be.useState(null),st=be.useRef(null);be.useRef(!1);const G=be.useRef(null),ot=be.useRef(!1),[$,ut]=be.useState({beta:0,gamma:0,velocity:{x:0,z:0},gravity:{x:0,z:0},position:{x:0,z:0},collision:!1,collisionEdge:"",eventCount:0,lastUpdate:Date.now(),eventType:"none",showDebug:!0}),D=()=>{if(console.log("Restarting game..."),!b.current.generateMaze||!b.current.createWalls){console.error("Game functions not initialized");return}if(N.current&&N.current.parent&&(console.log("Cleaning up celebration particles"),N.current.parent.remove(N.current),N.current.geometry&&N.current.geometry.dispose(),N.current.material&&N.current.material.dispose(),N.current=null,j(null)),console.log("Resetting game state"),i(!1),l(!1),h(!1),ot.current=!1,console.log("Resetting player position and direction"),I.current.position={x:1,z:1},I.current.direction.set(0,0,1),console.log("Resetting maze reference"),G.current=null,console.log("Generating new maze"),b.current.generateMaze(),console.log("Creating new walls"),b.current.createWalls(),console.log("Updating player world position"),I.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),b.current.createPlayer&&b.current.mazeGroup){console.log("Creating new player mesh"),I.current.mesh&&I.current.mesh.parent&&(console.log("Removing old player mesh"),I.current.mesh.parent.remove(I.current.mesh),I.current.mesh.children.forEach(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()})),console.log("Creating new player mesh");const _t=b.current.createPlayer();console.log("Positioning new player at entrance"),_t.position.copy(I.current.worldPosition),console.log("Adding new player to maze group"),b.current.mazeGroup.add(_t),console.log("Added new player to maze group"),console.log("Updating player ref"),I.current.mesh=_t}if(b.current.setInitialPlayerDirection?b.current.setInitialPlayerDirection(I.current.mesh):I.current.direction.set(0,0,1),I.current.mesh){I.current.mesh.position.copy(I.current.worldPosition);const _t=Math.atan2(I.current.direction.x,I.current.direction.z);I.current.mesh.rotation.y=_t,I.current.mesh.visible=!0,I.current.mesh.children.forEach(T=>{T.material&&(T.material.opacity=1,T.material.transparent=!0)})}},K=()=>{const _t=navigator.userAgent||navigator.vendor||window.opera,T=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(_t.toLowerCase());return console.log("Device detection:",T?"Mobile":"Desktop"),F.current=T,T},pt=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",wt=()=>window.DeviceOrientationEvent!==void 0,X=async()=>{if(!pt())return console.log("No iOS permission needed, enabling gyroscope directly"),fe(),!0;console.log("Requesting iOS device orientation permission");try{const _t=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",_t),_t==="granted"?(console.log("✅ iOS permission granted!"),fe(),P(!1),B(!1),window.physics||ne(),!0):(console.log("❌ iOS permission denied:",_t),P(!1),B(!0),!1)}catch(_t){return console.error("❌ Error requesting iOS permission:",_t),P(!1),B(!0),!1}},dt=_t=>{const T=performance.now(),E=T<3e3;E&&console.log("Orientation event received:",{beta:_t.beta,gamma:_t.gamma,time:T}),W.current={beta:_t.beta,gamma:_t.gamma},!E&&T%3e3<20&&console.log("Orientation data:",W.current)};be.useEffect(()=>{const _t=K();return console.log("Is mobile:",_t),_t&&(pt()?(console.log("iOS device detected - showing permission button"),P(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):wt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",dt),A(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",dt)}},[]),be.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let _t=function(Lt){if(sa=requestAnimationFrame(_t),F.current&&M&&!mt.current&&!d){const Pt=performance.now(),{beta:zt,gamma:Dt}=W.current;if(Pt<5e3&&Pt%500<20&&console.log("Animation loop - orientation:",{beta:zt,gamma:Dt}),zt!==null&&Dt!==null){const Wt=Math.abs(zt),he=Math.abs(Dt);let _e="";const R=5;Wt>he&&Wt>R?_e=zt>0?"ArrowDown":"ArrowUp":he>R&&(_e=Dt>0?"ArrowRight":"ArrowLeft");const k=Math.max(Wt,he),et=Math.max(100,500-k*5);_e&&Pt-V.current>et&&(console.log(`Gyroscope movement: ${_e} (tilt: ${k.toFixed(1)}°)`),Ei({key:_e,preventDefault:()=>{},stopPropagation:()=>{}}),V.current=Pt)}}if(!kt&&!e){const Pt=Lt-Me,zt=Math.min(Pt/ge,1);if(zt===1)kt=!0,Rt.rotation.x=0,Rt.rotation.y=0;else{const Dt=hr.lerp(0,0,zt);Rt.rotation.x=Dt,Rt.rotation.y=0}}else!kt&&e&&(kt=!0),vt.current||(Rt.rotation.x=0,Rt.rotation.y=0,Rt.rotation.z=0);const Yt=Lt*.001;Rt.children.forEach(Pt=>{Pt.material&&Pt.material.uniforms&&(Pt.material.uniforms.time.value=Yt)}),st.current?(console.log("Calling updateParticles from animation loop"),st.current()||(console.log("updateParticles returned false, setting to null"),st.current=null)):mt.current&&!st.current&&console.log("Game won but updateParticles is null"),vt.current?F.current||(Gt.enabled=!1,Gt.enableRotate=!1,Gt.enableZoom=!1,Gt.enablePan=!1):((Math.abs(ct.position.x)>.1||Math.abs(ct.position.z)>.1||Math.abs(ct.position.y-Ht())>.1||Math.abs(Gt.target.x)>.1||Math.abs(Gt.target.y)>.1||Math.abs(Gt.target.z)>.1)&&(ct.position.set(0,Ht(),0),Gt.target.set(0,0,0)),!F.current&&Gt.update&&Gt.update()),te(),ht.render(E,ct)},T=function(){const Lt=window.innerWidth,Yt=window.innerHeight;ht.setSize(Lt,Yt),ct.aspect=Lt/Yt;const Pt=Lt<768,zt=Lt>Yt;Pt?ct.fov=zt?75:80:ct.fov=60,vt.current||(ct.position.y=Ht(),ct.lookAt(0,0,0)),ct.updateProjectionMatrix()};console.log("Initializing 3D scene"),F.current=K(),console.log("Is mobile device:",F.current),F.current&&v(!0);const E=new rA;E.background=new Ue(0);const H=new I_(4210752,1.5);E.add(H);const rt=new F_(16777215,1);if(rt.position.set(1,1,1),E.add(rt),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const ht=new E0({antialias:!0,canvas:o.current});if(ht.setSize(window.innerWidth,window.innerHeight),ht.setPixelRatio(Math.min(window.devicePixelRatio,2)),ht.shadowMap.enabled=!0,ht.shadowMap.type=X_,console.log("Renderer set up"),F.current){console.log("Setting up orientation handling for mobile");const Lt=Yt=>{var Pt;if(!(e||d)&&(!M&&(Yt.beta!==null||Yt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),A(!0)),!!M&&Yt.beta!==null&&Yt.gamma!==null)){let zt=Yt.beta,Dt=Yt.gamma;if(window.orientation!==void 0){const Wt=window.orientation;if(performance.now()%5e3<20&&((Pt=window.physics)!=null&&Pt.debug)&&console.log(`Device orientation: ${Wt}°, beta: ${zt.toFixed(2)}°, gamma: ${Dt.toFixed(2)}°`),Wt===90){const _e=zt;zt=Dt,Dt=-_e}else if(Wt===-90){const _e=zt;zt=-Dt,Dt=_e}else Wt===180&&(zt=-zt,Dt=-Dt)}if(window.physics){let _e=0,R=0;Math.abs(Dt)>5&&(_e=Math.min(Math.abs(Dt)-5,25)/25*Math.sign(Dt)),Math.abs(zt)>5&&(R=Math.min(Math.abs(zt)-5,25)/25*Math.sign(zt)),window.physics.gravityX=_e,window.physics.gravityZ=R,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${_e.toFixed(3)}, Z=${R.toFixed(3)}`)}W.current={beta:zt,gamma:Dt}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Yt=async()=>{console.log("Requesting iOS device orientation permission");try{const Pt=await window.DeviceOrientationEvent.requestPermission();Pt==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",Lt),A(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),ne(),setTimeout(()=>{I.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),I.current.velocity.x=.05,I.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",Pt)}catch(Pt){console.error("❌ Error requesting permission:",Pt)}};document.addEventListener("touchstart",()=>{Yt(),document.removeEventListener("touchstart",Yt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",Lt),A(!0)}const nt=21,It=2,Tt=3,St=2,Ht=(Lt=!1)=>{const Yt=window.innerWidth<768,Pt=window.innerWidth>window.innerHeight,zt=nt*St;let Dt=zt*1.5;return Yt&&(Lt||L)&&(Pt?Dt=zt*1.6:Dt=zt*1.8),Yt?Pt?Dt*.8:Dt*1.2:Dt};window.calculateOptimalCameraHeight=Ht;const se=Ht(),ct=new $n(60,window.innerWidth/window.innerHeight,.1,1e3);ct.position.set(0,se,0),ct.lookAt(0,0,0),console.log("Camera set up");const Se=K();let Gt;Se?(Gt={target:new Y(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(Gt=new fA(ct,ht.domElement),Gt.enableDamping=!0,Gt.dampingFactor=.1,Gt.target.set(0,0,0),Gt.update(),console.log("Desktop controls set up"));const qt=e&&G.current?G.current:Array(nt).fill().map(()=>Array(nt).fill(1));G.current=qt,window.MAZE_SIZE=nt,window.WALL_THICKNESS=St,window.playerRef=I,window.mazeRef=G,window.isThirdPersonRef=vt,window.gameCamera=ct,window.maze=qt,window.celebrateWin=()=>{ot.current=!0,i(!0),l(!0),we()};const Rt=new Ms;E.add(Rt),console.log("Maze group created"),b.current.mazeGroup=Rt;const Nt=new ra({uniforms:{time:{value:0},baseColor:{value:new Ue(4482815)}},vertexShader:`
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
        `,side:Li});console.log("Wall material created");const Jt=(Lt,Yt)=>Lt>=0&&Lt<nt&&Yt>=0&&Yt<nt,O=(Lt,Yt)=>{const Pt=[],zt=[[0,2],[2,0],[0,-2],[-2,0]];for(let Dt=zt.length-1;Dt>0;Dt--){const Wt=Math.floor(Math.random()*(Dt+1));[zt[Dt],zt[Wt]]=[zt[Wt],zt[Dt]]}for(const[Dt,Wt]of zt){const he=Lt+Dt,_e=Yt+Wt;Jt(he,_e)&&qt[he][_e]===1&&Pt.push([he,_e,Dt/2,Wt/2])}return Pt},Ct=()=>{if(e&&G.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let Wt=0;Wt<nt;Wt++)for(let he=0;he<nt;he++)qt[Wt][he]=1;const Lt=[],Yt=1,Pt=1;for(qt[Yt][Pt]=0,Lt.push([Yt,Pt]);Lt.length>0;){const[Wt,he]=Lt[Lt.length-1],_e=O(Wt,he);if(_e.length===0){Lt.pop();continue}const[R,k,et,at]=_e[Math.floor(Math.random()*_e.length)];qt[R][k]=0,qt[Wt+et][he+at]=0,Lt.push([R,k])}qt[0][1]=0,qt[nt-1][nt-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(nt-1)+","+(nt-2)+")");const zt=new Set,Dt=Wt=>{const[he,_e]=Wt;if(he===nt-2&&_e===nt-2)return!0;zt.add(`${he},${_e}`);const R=[[0,1],[1,0],[0,-1],[-1,0]];for(const[k,et]of R){const at=he+k,tt=_e+et;if(Jt(at,tt)&&qt[at][tt]===0&&!zt.has(`${at},${tt}`)&&Dt([at,tt]))return!0}return!1};Dt([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),Ct()),G.current=qt,window.maze=qt,window.MAZE_SIZE=nt,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Vt=()=>{if(!e||!G.current){for(console.log("Creating new walls for the maze");Rt.children.length>0;){const Lt=Rt.children[0];Lt.isGroup?Lt.children.forEach(Yt=>{Yt.geometry&&Yt.geometry.dispose(),Yt.material&&Yt.material.dispose()}):(Lt.geometry&&Lt.geometry.dispose(),Lt.material&&Lt.material.dispose()),Rt.remove(Lt)}for(let Lt=0;Lt<nt;Lt++)for(let Yt=0;Yt<nt;Yt++)if(qt[Lt][Yt]===1){const Pt=new Va(St,Tt,St),zt=new ti(Pt,Nt);if(zt.position.set((Lt-nt/2)*St,Tt/2,(Yt-nt/2)*St),Rt.add(zt),Lt===0||Lt===nt-1||Yt===0||Yt===nt-1){if(Lt<nt-1&&qt[Lt+1][Yt]===1){const Dt=new ti(new Va(St,Tt,St),Nt);Dt.position.set((Lt-nt/2+.5)*St,Tt/2,(Yt-nt/2)*St),Rt.add(Dt)}if(Yt<nt-1&&qt[Lt][Yt+1]===1){const Dt=new ti(new Va(St,Tt,St),Nt);Dt.position.set((Lt-nt/2)*St,Tt/2,(Yt-nt/2+.5)*St),Rt.add(Dt)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),b.current.generateMaze=Ct,b.current.createWalls=Vt;const ee=Lt=>{if(console.log("Setting initial player direction"),!Lt){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Yt=1,Pt=1,zt=[{dx:0,dz:1,name:"down",vector:new Y(0,0,1)},{dx:1,dz:0,name:"right",vector:new Y(1,0,0)},{dx:0,dz:-1,name:"up",vector:new Y(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new Y(-1,0,0)}];console.log("Checking available directions from starting position:",Yt,Pt);const Dt=zt.filter(Wt=>{const he=Yt+Wt.dx,_e=Pt+Wt.dz;if(he===0&&_e===1)return console.log(`Direction ${Wt.name} leads to entrance, skipping`),!1;const R=Jt(he,_e)&&qt[he][_e]===0;return console.log(`Direction ${Wt.name} leads to (${he}, ${_e}): ${R?"valid":"invalid"}`),R});if(console.log("Valid directions:",Dt.map(Wt=>Wt.name)),Dt.length>0){const Wt=Dt[0];console.log("Chosen direction:",Wt.name),I.current.direction.copy(Wt.vector);const he=Math.atan2(Wt.vector.x,Wt.vector.z);Lt.rotation.y=he,console.log("Set player rotation to:",he)}else console.log("No valid directions found, defaulting to down"),I.current.direction.set(0,0,1),Lt.rotation.y=0};b.current.setInitialPlayerDirection=ee,e?console.log("Game has been won, preserving maze and player position"):(Ct(),Vt(),console.log("Initial maze created"));const U=new I_(16777215,.6);E.add(U);const yt=new F_(16777215,1);yt.position.set(50,100,50),E.add(yt);const ft=new B_(4474111,2,150);ft.position.set(50,50,50),E.add(ft);const Ot=new B_(4474111,2,150);Ot.position.set(-50,50,-50),E.add(Ot),console.log("Lights added");let kt=!1;const Me=performance.now(),ge=1e3,we=()=>{console.log("Celebration function called - START");const Lt=2e3,Yt=new Oi,Pt=new Float32Array(Lt*3),zt=new Float32Array(Lt*3);for(let k=0;k<Lt;k++)Pt[k*3]=I.current.worldPosition.x,Pt[k*3+1]=I.current.worldPosition.y,Pt[k*3+2]=I.current.worldPosition.z,zt[k*3]=Math.random(),zt[k*3+1]=Math.random(),zt[k*3+2]=Math.random();Yt.setAttribute("position",new hi(Pt,3)),Yt.setAttribute("color",new hi(zt,3));const Dt=new b0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:md}),Wt=new sA(Yt,Dt);E.add(Wt),console.log("Particle system added to scene");const he=[];for(let k=0;k<Lt;k++){const et=Math.random()*Math.PI*2,at=Math.acos(Math.random()*2-1),tt=.05+Math.random()*.1;he.push(Math.sin(at)*Math.cos(et)*tt,Math.sin(at)*Math.sin(et)*tt,Math.cos(at)*tt)}N.current=Wt;const _e=()=>{if(console.log("Update particles function called - frame"),!mt.current)return console.log("Game no longer in won state, cleaning up particles"),Wt.parent&&(E.remove(Wt),Wt.geometry.dispose(),Dt.dispose()),N.current=null,st.current=null,!1;const k=Wt.geometry.attributes.position.array;let et=!1;for(let tt=0;tt<Lt;tt++){const Ut=tt*3;k[Ut]+=he[Ut],k[Ut+1]+=he[Ut+1],k[Ut+2]+=he[Ut+2],he[Ut+1]-=.001;const Kt=k[Ut]-I.current.worldPosition.x,ae=k[Ut+1]-I.current.worldPosition.y,jt=k[Ut+2]-I.current.worldPosition.z;Math.sqrt(Kt*Kt+ae*ae+jt*jt)<20&&(et=!0)}Wt.geometry.attributes.position.needsUpdate=!0;const at=performance.now()-R;return at>1e3&&(Dt.opacity=Math.max(0,1-(at-1e3)/1e3)),!et||at>2e3?(console.log("Animation complete, cleaning up particles"),E.remove(Wt),Wt.geometry.dispose(),Dt.dispose(),N.current=null,st.current=null,!1):!0},R=performance.now();return console.log("Setting updateParticles function"),st.current=_e,()=>{console.log("Cleanup function called"),Wt.parent&&(E.remove(Wt),Wt.geometry.dispose(),Dt.dispose()),N.current=null,st.current=null}},Ke=()=>{const Lt=new Ms,Yt=new Mc(St/2,16,16),Pt=new oA({color:16776960}),zt=new ti(Yt,Pt);return Lt.add(zt),Lt},ue=Ke();b.current.createPlayer=Ke;let He=null;if(e){for(let Lt=0;Lt<Rt.children.length;Lt++){const Yt=Rt.children[Lt];if(Yt.isGroup&&Yt.children.length>0&&Yt.children[0].geometry instanceof Mc){He=Yt;break}}He&&(He.children.forEach(Lt=>{Lt.geometry&&Lt.geometry.dispose(),Lt.material&&Lt.material.dispose()}),Rt.remove(He),console.log("Removed existing player from maze group"))}if(!e)ue.position.set((1-nt/2)*St,St/2,(1-nt/2)*St),I.current.mesh=ue,I.current.worldPosition.copy(ue.position),ee(ue);else{if(ot.current){const Yt=nt-1,Pt=nt-2,zt=new Y((Yt-nt/2)*St,St/2,(Pt-nt/2)*St);console.log("Positioning player at exit:",zt),ue.position.copy(zt),I.current.worldPosition.copy(zt),I.current.position={x:Yt,z:Pt}}else console.log("Using existing player position:",I.current.worldPosition),ue.position.copy(I.current.worldPosition);I.current.mesh=ue;const Lt=Math.atan2(I.current.direction.x,I.current.direction.z);ue.rotation.y=Lt}Rt.add(ue),I.current.mesh=ue,console.log("Player created and added to maze group");const tn=Lt=>{if(Lt.key.toLowerCase()==="v")return console.log("View toggle key pressed"),Lt.preventDefault(),Lt.stopPropagation(),Lt.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(Yt=>{const Pt=!Yt;console.log("Switching to:",Pt?"POV mode":"Top-down mode"),vt.current=Pt;const zt=ct.position.clone(),Dt=new Y().copy(Gt.target),Wt=ct.fov,he={x:Rt.rotation.x,y:Rt.rotation.y,z:Rt.rotation.z},_e=Pt?new Y(I.current.worldPosition.x,I.current.worldPosition.y+1.5,I.current.worldPosition.z):new Y(0,Ht(),0),R=Pt?new Y(I.current.worldPosition.x+I.current.direction.x*St,I.current.worldPosition.y+1.5,I.current.worldPosition.z+I.current.direction.z*St):new Y(0,0,0),k=window.innerWidth<768,et=window.innerWidth>window.innerHeight;let at=Pt?75:60;k&&(at=Pt||et?75:80);const tt={x:0,y:0,z:0},Ut=ue.visible?1:0,Kt=Pt?0:1;ue.visible=!0,ue.children.forEach(le=>{le.material&&(le.material.transparent||(le.material.transparent=!0),le.material.opacity=Ut)}),F.current||(Gt.enabled=!1);const ae=1200;let jt=null;const ve=le=>{const Fe=le-me,qe=Math.min(Fe/ae,1),cn=(de=>de<.5?4*de*de*de:1-Math.pow(-2*de+2,3)/2)(qe);ct.position.lerpVectors(zt,_e,cn);const Ie=new Y().lerpVectors(Dt,R,cn);if(F.current||Gt.target.copy(Ie),ct.lookAt(Ie),ct.fov=hr.lerp(Wt,at,cn),ct.updateProjectionMatrix(),Rt.rotation.x=hr.lerp(he.x,tt.x,cn),Rt.rotation.y=hr.lerp(he.y,tt.y,cn),Rt.rotation.z=hr.lerp(he.z,tt.z,cn),ue.children.forEach(de=>{de.material&&(de.material.opacity=hr.lerp(Ut,Kt,cn))}),qe===1){cancelAnimationFrame(jt),ue.visible=!Pt,ue.children.forEach(de=>{de.material&&(de.material.opacity=Kt,Kt===1&&(de.material.transparent=!1))}),!F.current&&!Pt?(Gt.enabled=!0,Gt.enableRotate=!0,Gt.enableZoom=!0,Gt.enablePan=!0):(ct.position.copy(_e),ct.lookAt(R)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}jt=requestAnimationFrame(ve)},me=performance.now();return jt=requestAnimationFrame(ve),Pt}),!1)},Ei=Lt=>{if(mt.current||!kt||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Yt=Lt.key.toLowerCase();if(console.log("Key pressed:",Yt,"Current mode:",vt.current?"POV":"Top-down"),Yt==="v")return;Lt.preventDefault();const Pt=I.current.position.x,zt=I.current.position.z;let Dt=Pt,Wt=zt,he=!1;const _e=I.current.mesh;if(!_e){console.error("Player mesh not found");return}if(vt.current){switch(console.log("Handling POV mode controls"),Yt){case"arrowup":case"w":console.log("Moving forward - Current position:",Pt,zt),console.log("Current direction:",I.current.direction),Dt=Pt+Math.round(I.current.direction.x),Wt=zt+Math.round(I.current.direction.z),console.log("New position will be:",Dt,Wt),he="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",Pt,zt),console.log("Current direction:",I.current.direction),Dt=Pt-Math.round(I.current.direction.x),Wt=zt-Math.round(I.current.direction.z),console.log("New position will be:",Dt,Wt),he="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",I.current.direction),I.current.direction.applyAxisAngle(new Y(0,1,0),Math.PI/2),console.log("New direction:",I.current.direction),he="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",I.current.direction),I.current.direction.applyAxisAngle(new Y(0,1,0),-Math.PI/2),console.log("New direction:",I.current.direction),he="rotate";break}if(he==="move")if(Jt(Dt,Wt)&&qt[Dt][Wt]===0){console.log("Movement is valid, updating positions"),I.current.position.x=Dt,I.current.position.z=Wt;const R=new Y((Dt-nt/2)*St,St/2,(Wt-nt/2)*St);console.log("New world position:",R),I.current.worldPosition.copy(R),_e.position.copy(R),console.log("Updated player mesh position to:",_e.position),ct.position.set(R.x,R.y+1.5,R.z),console.log("New camera position:",ct.position);const k=ct.position.clone();if(k.add(I.current.direction.clone().multiplyScalar(St)),ct.lookAt(k),console.log("Camera looking at:",k),ct.updateProjectionMatrix(),ct.updateMatrixWorld(),Dt===nt-1&&Wt===nt-2){ot.current=!0,i(!0),l(!0);const et=we();return()=>{et&&et()}}}else console.log("Movement blocked - Out of bounds or wall:",Dt,Wt);else if(he==="rotate"){console.log("Handling rotation");const R=Math.atan2(I.current.direction.x,I.current.direction.z);_e.rotation.y=R,console.log("Updated player mesh rotation to:",R);const k=ct.position.clone();k.add(I.current.direction.clone().multiplyScalar(St)),ct.lookAt(k),console.log("Camera looking at new direction:",k),ct.updateProjectionMatrix(),ct.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Yt){case"arrowup":case"w":console.log("Moving up - Current position:",Pt,zt),Wt=zt-1,I.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",Pt,zt),Wt=zt+1,I.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",Pt,zt),Dt=Pt-1,I.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",Pt,zt),Dt=Pt+1,I.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",Dt,Wt),console.log("Maze value at target position:",qt[Dt][Wt]),console.log("Is in bounds:",Jt(Dt,Wt)),Jt(Dt,Wt)&&qt[Dt][Wt]===0){console.log("Movement is valid, updating positions"),I.current.position.x=Dt,I.current.position.z=Wt;const R=new Y((Dt-nt/2)*St,St/2,(Wt-nt/2)*St);I.current.worldPosition.copy(R),_e.position.copy(R);const k=Math.atan2(I.current.direction.x,I.current.direction.z);if(_e.rotation.y=k,Dt===nt-1&&Wt===nt-2){ot.current=!0,i(!0),l(!0);const et=we();return()=>{et&&et()}}}}};window.removeEventListener("keydown",tn,!0),window.removeEventListener("keydown",Ei),console.log("Attaching event listeners"),window.addEventListener("keydown",tn,!0),window.addEventListener("keydown",Ei),console.log("Event listeners attached");let sa;return console.log("Starting animation"),_t(),window.addEventListener("resize",T),()=>{console.log("Cleanup running"),window.removeEventListener("resize",T),window.removeEventListener("keydown",tn,!0),window.removeEventListener("keydown",Ei),sa&&cancelAnimationFrame(sa),E.traverse(Lt=>{Lt.geometry&&Lt.geometry.dispose(),Lt.material&&(Array.isArray(Lt.material)?Lt.material.forEach(Yt=>Yt.dispose()):Lt.material.dispose())}),ht.dispose(),Gt&&typeof Gt.dispose=="function"&&Gt.dispose()}}catch(_t){console.error("Error in setup:",_t)}},[]),be.useEffect(()=>{const _t=()=>{const E=K();return E&&(!wt()||pt()&&!M)&&(console.log("Setting up touch controls for mobile"),B(!0)),T(),E},T=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const E=H=>{console.log("Device orientation event received:",H),window.removeEventListener("deviceorientation",E)};window.addEventListener("deviceorientation",E,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};_t()},[M]);const Et=be.useRef(null),Zt=be.useRef(null),Bt=be.useRef(null),Ft=be.useRef(null);be.useEffect(()=>{if(!L)return;console.log("Setting up touch control listeners");const _t=It=>{if(e||d)return;const Tt=.1;switch(It){case"up":I.current.velocity.z-=Tt,I.current.direction.set(0,0,-1);break;case"down":I.current.velocity.z+=Tt,I.current.direction.set(0,0,1);break;case"left":I.current.velocity.x-=Tt,I.current.direction.set(-1,0,0);break;case"right":I.current.velocity.x+=Tt,I.current.direction.set(1,0,0);break}const St=.2,Ht=I.current.velocity,se=Math.sqrt(Ht.x*Ht.x+Ht.z*Ht.z);se>St&&(Ht.x=Ht.x/se*St,Ht.z=Ht.z/se*St)},T=(It,Tt)=>(It.preventDefault(),It.stopPropagation(),_t(Tt),!1),E=(It,Tt)=>{if(!It.current)return;const St=It.current,Ht=Gt=>T(Gt,Tt),se=Gt=>Gt.preventDefault(),ct=Gt=>T(Gt,Tt),Se=Gt=>T(Gt,Tt);return St.addEventListener("touchstart",Ht,{passive:!1}),St.addEventListener("touchend",se,{passive:!1}),St.addEventListener("mousedown",ct),St.addEventListener("click",Se),()=>{St.removeEventListener("touchstart",Ht),St.removeEventListener("touchend",se),St.removeEventListener("mousedown",ct),St.removeEventListener("click",Se)}},H=E(Et,"up"),rt=E(Zt,"down"),ht=E(Bt,"left"),nt=E(Ft,"right");return()=>{H&&H(),rt&&rt(),ht&&ht(),nt&&nt()}},[L]),be.useEffect(()=>{const _t=()=>{let H=document.querySelector('meta[name="viewport"]');H||(H=document.createElement("meta"),H.name="viewport",document.head.appendChild(H)),H.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},T=H=>{H.touches&&H.touches.length>1&&H.preventDefault()},E=H=>{H.preventDefault()};return _t(),document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchstart",E,{passive:!1}),()=>{document.removeEventListener("touchmove",T),document.removeEventListener("touchstart",E)}},[]),be.useEffect(()=>{if(!window.gameCamera||vt.current)return;const T=setTimeout(()=>{const E=window.gameCamera;if(E&&!vt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const H=window.calculateOptimalCameraHeight(L);E.position.y=H,E.updateProjectionMatrix(),console.log(`Adjusted camera height to ${H} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(T)},[L]);const te=()=>{if(!M||e||d)return;const _t=window.maze||G.current;if(!_t){console.warn("⚠️ Maze not accessible for physics update");return}window.mazeDumped||(console.log("🧩 Maze data check:",_t),_t[0]&&_t[1]&&(console.log(`Entrance: (0,1) = ${_t[0][1]}, (1,1) = ${_t[1][1]}`),console.log(`Some walls: (0,0) = ${_t[0][0]}, (1,0) = ${_t[1][0]}`)),window.mazeDumped=!0);const T=window.MAZE_SIZE||21,E=I.current,H=E.velocity,rt=E.position,ht=E.mesh;if(!ht){console.warn("No player mesh available for physics update");return}const nt=window.physics||{},It=nt.gravityX||0,Tt=nt.gravityZ||0,St=.01,Ht=.97,se=.5,ct=.45;if(H.x+=It*St,H.z+=Tt*St,H.x*=Ht,H.z*=Ht,Math.abs(H.x)<2e-4&&Math.abs(H.z)<2e-4)return;const Se=rt.x,Gt=rt.z;let qt=rt.x+H.x,Rt=rt.z+H.z;window.collisionDebug=window.collisionDebug||{lastLog:0,walls:[]};const Nt=(U,yt)=>{if(U<0||U>=T||yt<0||yt>=T)return!0;if(!_t[U])return console.error(`Maze data error: Row ${U} is undefined`),!0;if(_t[U][yt]===void 0)return console.error(`Maze data error: Cell [${U}][${yt}] is undefined`),!0;const ft=_t[U][yt]===1;return ft&&performance.now()-window.collisionDebug.lastLog<100&&window.collisionDebug.walls.push([U,yt]),ft};let Jt=!1,O="";performance.now()-window.collisionDebug.lastLog>5e3&&(window.collisionDebug.lastLog=performance.now(),window.collisionDebug.walls=[],console.log(`🧩 Player position: (${rt.x.toFixed(2)},${rt.z.toFixed(2)})`));const Ct=(U,yt,ft)=>{const Ot=Math.floor(U),kt=Math.floor(yt);if(Nt(Ot,kt)||U+ft>Ot+1&&Nt(Ot+1,kt)||U-ft<Ot&&Nt(Ot-1,kt)||yt+ft>kt+1&&Nt(Ot,kt+1)||yt-ft<kt&&Nt(Ot,kt-1))return!0;const Me=U-Ot,ge=yt-kt;return!!(Me-ft<0&&ge-ft<0&&Math.pow(U-Ot,2)+Math.pow(yt-kt,2)<ft*ft&&Nt(Ot-1,kt-1)||Me+ft>1&&ge-ft<0&&Math.pow(U-(Ot+1),2)+Math.pow(yt-kt,2)<ft*ft&&Nt(Ot+1,kt-1)||Me-ft<0&&ge+ft>1&&Math.pow(U-Ot,2)+Math.pow(yt-(kt+1),2)<ft*ft&&Nt(Ot-1,kt+1)||Me+ft>1&&ge+ft>1&&Math.pow(U-(Ot+1),2)+Math.pow(yt-(kt+1),2)<ft*ft&&Nt(Ot+1,kt+1))};let Vt=rt.x;rt.x=qt,Ct(rt.x,rt.z,ct)&&(Jt=!0,O+=H.x>0?"R":"L",rt.x=Vt,H.x=-H.x*se);let ee=rt.z;if(rt.z=Rt,Ct(rt.x,rt.z,ct)&&(Jt=!0,O+=H.z>0?"B":"T",rt.z=ee,H.z=-H.z*se),Ct(rt.x,rt.z,ct)&&(console.warn("Player stuck in wall, reverting to original position"),rt.x=Se,rt.z=Gt,H.x=0,H.z=0,Jt=!0,O+="STUCK"),window.collisionDebug.walls.length>0&&console.log("🧱 Nearby walls:",window.collisionDebug.walls),ht.position.x=rt.x*2,ht.position.z=rt.z*2,Math.abs(H.x)>.01||Math.abs(H.z)>.01){const U=Math.atan2(H.x,H.z);ht.rotation.y=U,E.direction.set(H.x,0,H.z).normalize()}Math.floor(rt.x)===T-2&&Math.floor(rt.z)===T-2&&(console.log("Victory reached!"),i(!0),celebrate()),ut(U=>({...U,velocity:{x:H.x,z:H.z},position:{x:rt.x,z:rt.z},collision:Jt,collisionEdge:O}))},ne=()=>{console.log("⚡ Initializing physics system"),I.current&&(I.current.position={x:0,z:1},I.current.velocity={x:0,z:0},I.current.mesh&&(I.current.mesh.position.x=0*2,I.current.mesh.position.z=1*2,console.log("✓ Player mesh position set to entrance (0,1)"))),window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:0},console.log("✓ Physics initialized - player at entrance position (0,1)")},J=()=>{I.current&&(I.current.position={x:0,z:1},I.current.velocity={x:0,z:0},I.current.mesh&&(I.current.mesh.position.x=0*2,I.current.mesh.position.z=1*2),console.log("✓ Player position reset to entrance (0,1)"))},Be=()=>{var Se,Gt,qt,Rt,Nt,Jt;const{beta:_t,gamma:T,velocity:E,gravity:H,position:rt,eventCount:ht,lastUpdate:nt,eventType:It,collision:Tt,collisionEdge:St}=$,Ht=Math.sqrt(E.x*E.x+E.z*E.z),se=Ht>.01?`rgb(${Math.min(255,Math.floor(Ht*2e3))}, ${Math.min(255,Math.floor(255-Ht*500))}, 0)`:"#4CAF50",ct=()=>{const U=40+H.x*24*1.8,yt=40+H.z*24*1.8,ft=Math.sqrt(H.x*H.x+H.z*H.z)*24*1.5,Ot=Math.atan2(H.z,H.x);return re.jsxs("div",{style:{position:"relative",width:80,height:80,backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"50%",margin:"5px auto",border:"1px solid rgba(255,255,255,0.2)"},children:[re.jsx("div",{style:{position:"absolute",left:40-.5,top:0,width:1,height:80,backgroundColor:"rgba(255,255,255,0.2)"}}),re.jsx("div",{style:{position:"absolute",left:0,top:40-.5,width:80,height:1,backgroundColor:"rgba(255,255,255,0.2)"}}),ft>5&&re.jsx("div",{style:{position:"absolute",width:ft,height:2,backgroundColor:"rgba(255,100,100,0.8)",transformOrigin:"left center",transform:`translate(40px, 40px) rotate(${Ot}rad)`,borderRadius:"1px"},children:re.jsx("div",{style:{position:"absolute",right:-2,top:-3,width:0,height:0,borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"6px solid rgba(255,100,100,0.8)"}})}),re.jsx("div",{style:{position:"absolute",width:16,height:16,borderRadius:"50%",backgroundColor:se,transform:`translate(${U-8}px, ${yt-8}px)`,transition:"transform 0.05s ease-out, background-color 0.1s",boxShadow:"0 0 5px rgba(0,0,0,0.5)"}}),re.jsx("div",{style:{position:"absolute",left:0,top:28,textAlign:"center",width:12,fontSize:10},children:"L"}),re.jsx("div",{style:{position:"absolute",right:0,top:28,textAlign:"center",width:12,fontSize:10},children:"R"}),re.jsx("div",{style:{position:"absolute",top:0,left:34,textAlign:"center",width:12,fontSize:10},children:"U"}),re.jsx("div",{style:{position:"absolute",bottom:0,left:34,textAlign:"center",width:12,fontSize:10},children:"D"})]})};return re.jsxs("div",{style:{position:"fixed",top:10,left:10,backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"10px",borderRadius:"5px",fontSize:"14px",zIndex:1e4,maxWidth:"300px",fontFamily:"monospace"},children:[re.jsx("h3",{style:{margin:"0 0 8px 0",borderBottom:"1px solid #666"},children:"📱 Device Debug"}),re.jsx(ct,{}),re.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[re.jsxs("div",{children:[re.jsx("span",{style:{color:"#8cf"},children:"Tilt: "}),re.jsxs("span",{style:{fontWeight:"bold"},children:["β:",_t,"° γ:",T,"°"]})]}),re.jsxs("div",{children:[re.jsx("span",{style:{color:"#8cf"},children:"Gravity: "}),re.jsxs("span",{style:{color:Math.abs(H.x)+Math.abs(H.z)>.1?"#f88":"#8f8"},children:["X:",((Se=H.x)==null?void 0:Se.toFixed(2))||0,", Z:",((Gt=H.z)==null?void 0:Gt.toFixed(2))||0]})]}),re.jsxs("div",{children:[re.jsx("span",{style:{color:"#8cf"},children:"Velocity: "}),re.jsxs("span",{style:{color:se,fontWeight:Ht>.01?"bold":"normal"},children:[((qt=E.x)==null?void 0:qt.toFixed(3))||0,", ",((Rt=E.z)==null?void 0:Rt.toFixed(3))||0]})]}),re.jsxs("div",{children:[re.jsx("span",{style:{color:"#8cf"},children:"Position: "}),re.jsxs("span",{children:["(",((Nt=rt==null?void 0:rt.x)==null?void 0:Nt.toFixed(1))||"?",", ",((Jt=rt==null?void 0:rt.z)==null?void 0:Jt.toFixed(1))||"?",")"]})]}),re.jsxs("div",{children:[re.jsx("span",{style:{color:"#8cf"},children:"Collision: "}),re.jsx("span",{style:{color:Tt?"#f88":"#8f8"},children:Tt?`Yes (${St})`:"No"})]}),re.jsxs("div",{style:{display:"flex",gap:"5px",marginTop:"5px"},children:[re.jsx("button",{onClick:()=>{I.current&&(I.current.velocity={x:.1,z:.1},console.log("Manual impulse applied"))},style:{flex:1,background:"#4CAF50",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Impulse"}),re.jsx("button",{onClick:J,style:{flex:1,background:"#2196F3",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Reset"})]})]})]})},ie=()=>{ut(_t=>({..._t,showDebug:!_t.showDebug}))};be.useEffect(()=>{let _t,T=0;const E=1e3/60;let H=0;function rt(ht){if(_t=requestAnimationFrame(rt),T===0){T=ht;return}const nt=ht-T;for(T=ht,H+=nt;H>=E;)F.current&&M&&!e&&!d&&te(),H-=E}return _t=requestAnimationFrame(rt),()=>{_t&&cancelAnimationFrame(_t)}},[M,e,d]);const fe=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",ze,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",Qt,{passive:!0}),console.log("✓ Added devicemotion listener")),A(!0),v(!0),window.physics||ne()},Qt=_t=>{if(ut(E=>({...E,eventCount:E.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const T=_t.accelerationIncludingGravity;if(T&&T.x!==null&&T.y!==null&&T.z!==null){let H=Math.min(Math.max(T.x/5,-1),1),rt=Math.min(Math.max(T.y/5,-1),1);const ht=.05;Math.abs(H)<ht&&(H=0),Math.abs(rt)<ht&&(rt=0),window.physics.gravityX=-H,window.physics.gravityZ=rt}},ze=_t=>{if(!(_t.beta===null&&_t.gamma===null)&&(!M&&(_t.beta!==null||_t.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),A(!0),v(!0)),_t.beta!==null&&_t.gamma!==null)){let T=_t.beta,E=_t.gamma;if(performance.now()%5e3<20&&console.log(`Raw orientation: beta=${T.toFixed(2)}°, gamma=${E.toFixed(2)}°`),window.orientation!==void 0){const It=window.orientation;if(It===90){const Tt=T;T=E,E=-Tt}else if(It===-90){const Tt=T;T=-E,E=Tt}else It===180&&(T=-T,E=-E)}window.physics||ne();const H=30,rt=1;let ht=0,nt=0;Math.abs(E)>rt&&(ht=Math.sign(E)*Math.min(1,(Math.abs(E)-rt)/(H-rt))),Math.abs(T)>rt&&(nt=Math.sign(T)*Math.min(1,(Math.abs(T)-rt)/(H-rt))),window.physics&&(window.physics.gravityX=ht,window.physics.gravityZ=nt,console.log(`Gravity vector: X=${ht.toFixed(2)}, Z=${nt.toFixed(2)}`),ut(It=>({...It,beta:parseFloat(T.toFixed(2)),gamma:parseFloat(E.toFixed(2)),gravity:{x:ht,z:nt},eventCount:It.eventCount+1,lastUpdate:Date.now(),eventType:"orientation"}))),W.current={beta:T,gamma:E}}};return be.useEffect(()=>{if(!$.showDebug)return;const _t=()=>{if(document.getElementById("collision-visualizer"))return;const H=document.createElement("div");H.id="collision-visualizer",H.style.cssText=`
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px dashed rgba(255, 100, 100, 0.7);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: border-color 0.3s;
        z-index: 1000;
      `,document.body.appendChild(H),window.collisionVisualizer=H},T=()=>{var It;if(!window.collisionVisualizer||!((It=I.current)!=null&&It.mesh))return;const H=I.current.mesh,rt=new Y;rt.set(H.position.x,H.position.y,H.position.z),rt.project(camera);const ht=(rt.x*.5+.5)*window.innerWidth,nt=(-(rt.y*.5)+.5)*window.innerHeight;window.collisionVisualizer.style.left=`${ht}px`,window.collisionVisualizer.style.top=`${nt}px`,window.collisionVisualizer.style.borderColor=$.collision?"rgba(255, 0, 0, 0.9)":"rgba(100, 255, 100, 0.6)",requestAnimationFrame(T)};_t();const E=requestAnimationFrame(T);return()=>{cancelAnimationFrame(E),window.collisionVisualizer&&(window.collisionVisualizer.remove(),window.collisionVisualizer=null)}},[$.showDebug]),re.jsxs(re.Fragment,{children:[re.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),$.showDebug&&re.jsx(Be,{}),re.jsx("button",{onClick:ie,style:{position:"fixed",top:10,right:10,zIndex:1e4,background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px"},children:$.showDebug?"Hide Debug":"Show Debug"}),_&&re.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[re.jsx("button",{className:"permission-button",onClick:_t=>{_t.preventDefault(),_t.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{X()},10)},onTouchStart:_t=>{console.log("Button touch started"),_t.stopPropagation()},onTouchEnd:_t=>{console.log("Button touch ended"),_t.preventDefault(),_t.stopPropagation(),setTimeout(()=>{X()},10)},children:"Enable Tilt Controls"}),re.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),L&&re.jsxs("div",{className:"touch-controls",children:[re.jsx("div",{className:"touch-controls-row",children:re.jsx("button",{ref:Et,className:"touch-button up-button","data-direction":"up",children:"▲"})}),re.jsxs("div",{className:"touch-controls-row",children:[re.jsx("button",{ref:Bt,className:"touch-button left-button","data-direction":"left",children:"◀"}),re.jsx("div",{className:"touch-button-spacer"}),re.jsx("button",{ref:Ft,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),re.jsx("div",{className:"touch-controls-row",children:re.jsx("button",{ref:Zt,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),e&&re.jsxs("div",{className:"victory-message",children:[re.jsx("h1",{children:"You Won!"}),r&&re.jsx("button",{onClick:D,children:"Play Again"})]}),m&&re.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),C&&M&&re.jsxs("div",{className:"gyroscope-indicator",children:[re.jsx("div",{className:"gyroscope-icon",children:re.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:re.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),re.jsx("span",{children:"Tilt to Move"})]})]})}Fx.createRoot(document.getElementById("root")).render(re.jsx(be.StrictMode,{children:re.jsx(dA,{})}));
