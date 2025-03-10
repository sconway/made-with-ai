(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Cx(){if(eg)return Ro;eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var ng;function Dx(){return ng||(ng=1,Lf.exports=Cx()),Lf.exports}var Kt=Dx(),Uf={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Lx(){if(ig)return xe;ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=x&&C[x]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function v(C,Z,pt){this.props=C,this.context=Z,this.refs=R,this.updater=pt||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function P(C,Z,pt){this.props=C,this.context=Z,this.refs=R,this.updater=pt||M}var D=P.prototype=new _;D.constructor=P,A(D,v.prototype),D.isPureReactComponent=!0;var B=Array.isArray,W={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function I(C,Z,pt,Dt,X,ht){return pt=ht.ref,{$$typeof:o,type:C,key:Z,ref:pt!==void 0?pt:null,props:ht}}function _t(C,Z){return I(C.type,Z,void 0,void 0,void 0,C.props)}function H(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function E(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(pt){return Z[pt]})}var O=/\/+/g;function mt(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?E(""+C.key):Z.toString(36)}function Rt(){}function K(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(Rt,Rt):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ot(C,Z,pt,Dt,X){var ht=typeof C;(ht==="undefined"||ht==="boolean")&&(C=null);var Tt=!1;if(C===null)Tt=!0;else switch(ht){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(C.$$typeof){case o:case e:Tt=!0;break;case g:return Tt=C._init,ot(Tt(C._payload),Z,pt,Dt,X)}}if(Tt)return X=X(C),Tt=Dt===""?"."+mt(C,0):Dt,B(X)?(pt="",Tt!=null&&(pt=Tt.replace(O,"$&/")+"/"),ot(X,Z,pt,"",function(It){return It})):X!=null&&(H(X)&&(X=_t(X,pt+(X.key==null||C&&C.key===X.key?"":(""+X.key).replace(O,"$&/")+"/")+Tt)),Z.push(X)),1;Tt=0;var Yt=Dt===""?".":Dt+":";if(B(C))for(var Ft=0;Ft<C.length;Ft++)Dt=C[Ft],ht=Yt+mt(Dt,Ft),Tt+=ot(Dt,Z,pt,ht,X);else if(Ft=S(C),typeof Ft=="function")for(C=Ft.call(C),Ft=0;!(Dt=C.next()).done;)Dt=Dt.value,ht=Yt+mt(Dt,Ft++),Tt+=ot(Dt,Z,pt,ht,X);else if(ht==="object"){if(typeof C.then=="function")return ot(K(C),Z,pt,Dt,X);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function G(C,Z,pt){if(C==null)return C;var Dt=[],X=0;return ot(C,Dt,"","",function(ht){return Z.call(pt,ht,X++)}),Dt}function lt(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(pt){(C._status===0||C._status===-1)&&(C._status=1,C._result=pt)},function(pt){(C._status===0||C._status===-1)&&(C._status=2,C._result=pt)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var at=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function dt(){}return xe.Children={map:G,forEach:function(C,Z,pt){G(C,function(){Z.apply(this,arguments)},pt)},count:function(C){var Z=0;return G(C,function(){Z++}),Z},toArray:function(C){return G(C,function(Z){return Z})||[]},only:function(C){if(!H(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},xe.Component=v,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=P,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,xe.act=function(){throw Error("act(...) is not supported in production builds of React.")},xe.cache=function(C){return function(){return C.apply(null,arguments)}},xe.cloneElement=function(C,Z,pt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Dt=A({},C.props),X=C.key,ht=void 0;if(Z!=null)for(Tt in Z.ref!==void 0&&(ht=void 0),Z.key!==void 0&&(X=""+Z.key),Z)!k.call(Z,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&Z.ref===void 0||(Dt[Tt]=Z[Tt]);var Tt=arguments.length-2;if(Tt===1)Dt.children=pt;else if(1<Tt){for(var Yt=Array(Tt),Ft=0;Ft<Tt;Ft++)Yt[Ft]=arguments[Ft+2];Dt.children=Yt}return I(C.type,X,void 0,void 0,ht,Dt)},xe.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},xe.createElement=function(C,Z,pt){var Dt,X={},ht=null;if(Z!=null)for(Dt in Z.key!==void 0&&(ht=""+Z.key),Z)k.call(Z,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(X[Dt]=Z[Dt]);var Tt=arguments.length-2;if(Tt===1)X.children=pt;else if(1<Tt){for(var Yt=Array(Tt),Ft=0;Ft<Tt;Ft++)Yt[Ft]=arguments[Ft+2];X.children=Yt}if(C&&C.defaultProps)for(Dt in Tt=C.defaultProps,Tt)X[Dt]===void 0&&(X[Dt]=Tt[Dt]);return I(C,ht,void 0,void 0,null,X)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(C){return{$$typeof:d,render:C}},xe.isValidElement=H,xe.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:lt}},xe.memo=function(C,Z){return{$$typeof:m,type:C,compare:Z===void 0?null:Z}},xe.startTransition=function(C){var Z=W.T,pt={};W.T=pt;try{var Dt=C(),X=W.S;X!==null&&X(pt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(dt,at)}catch(ht){at(ht)}finally{W.T=Z}},xe.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},xe.use=function(C){return W.H.use(C)},xe.useActionState=function(C,Z,pt){return W.H.useActionState(C,Z,pt)},xe.useCallback=function(C,Z){return W.H.useCallback(C,Z)},xe.useContext=function(C){return W.H.useContext(C)},xe.useDebugValue=function(){},xe.useDeferredValue=function(C,Z){return W.H.useDeferredValue(C,Z)},xe.useEffect=function(C,Z){return W.H.useEffect(C,Z)},xe.useId=function(){return W.H.useId()},xe.useImperativeHandle=function(C,Z,pt){return W.H.useImperativeHandle(C,Z,pt)},xe.useInsertionEffect=function(C,Z){return W.H.useInsertionEffect(C,Z)},xe.useLayoutEffect=function(C,Z){return W.H.useLayoutEffect(C,Z)},xe.useMemo=function(C,Z){return W.H.useMemo(C,Z)},xe.useOptimistic=function(C,Z){return W.H.useOptimistic(C,Z)},xe.useReducer=function(C,Z,pt){return W.H.useReducer(C,Z,pt)},xe.useRef=function(C){return W.H.useRef(C)},xe.useState=function(C){return W.H.useState(C)},xe.useSyncExternalStore=function(C,Z,pt){return W.H.useSyncExternalStore(C,Z,pt)},xe.useTransition=function(){return W.H.useTransition()},xe.version="19.0.0",xe}var ag;function Ad(){return ag||(ag=1,Uf.exports=Lx()),Uf.exports}var ge=Ad(),Nf={exports:{}},Co={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Ux(){return rg||(rg=1,function(o){function e(G,lt){var at=G.length;G.push(lt);t:for(;0<at;){var dt=at-1>>>1,C=G[dt];if(0<l(C,lt))G[dt]=lt,G[at]=C,at=dt;else break t}}function i(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var lt=G[0],at=G.pop();if(at!==lt){G[0]=at;t:for(var dt=0,C=G.length,Z=C>>>1;dt<Z;){var pt=2*(dt+1)-1,Dt=G[pt],X=pt+1,ht=G[X];if(0>l(Dt,at))X<C&&0>l(ht,Dt)?(G[dt]=ht,G[X]=at,dt=X):(G[dt]=Dt,G[pt]=at,dt=pt);else if(X<C&&0>l(ht,at))G[dt]=ht,G[X]=at,dt=X;else break t}}return lt}function l(G,lt){var at=G.sortIndex-lt.sortIndex;return at!==0?at:G.id-lt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,S=3,M=!1,A=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(G){for(var lt=i(m);lt!==null;){if(lt.callback===null)r(m);else if(lt.startTime<=G)r(m),lt.sortIndex=lt.expirationTime,e(p,lt);else break;lt=i(m)}}function B(G){if(R=!1,D(G),!A)if(i(p)!==null)A=!0,K();else{var lt=i(m);lt!==null&&ot(B,lt.startTime-G)}}var W=!1,k=-1,I=5,_t=-1;function H(){return!(o.unstable_now()-_t<I)}function E(){if(W){var G=o.unstable_now();_t=G;var lt=!0;try{t:{A=!1,R&&(R=!1,_(k),k=-1),M=!0;var at=S;try{e:{for(D(G),x=i(p);x!==null&&!(x.expirationTime>G&&H());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,S=x.priorityLevel;var C=dt(x.expirationTime<=G);if(G=o.unstable_now(),typeof C=="function"){x.callback=C,D(G),lt=!0;break e}x===i(p)&&r(p),D(G)}else r(p);x=i(p)}if(x!==null)lt=!0;else{var Z=i(m);Z!==null&&ot(B,Z.startTime-G),lt=!1}}break t}finally{x=null,S=at,M=!1}lt=void 0}}finally{lt?O():W=!1}}}var O;if(typeof P=="function")O=function(){P(E)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Rt=mt.port2;mt.port1.onmessage=E,O=function(){Rt.postMessage(null)}}else O=function(){v(E,0)};function K(){W||(W=!0,O())}function ot(G,lt){k=v(function(){G(o.unstable_now())},lt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,K())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(G){switch(S){case 1:case 2:case 3:var lt=3;break;default:lt=S}var at=S;S=lt;try{return G()}finally{S=at}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,lt){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var at=S;S=G;try{return lt()}finally{S=at}},o.unstable_scheduleCallback=function(G,lt,at){var dt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?dt+at:dt):at=dt,G){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=at+C,G={id:g++,callback:lt,priorityLevel:G,startTime:at,expirationTime:C,sortIndex:-1},at>dt?(G.sortIndex=at,e(m,G),i(p)===null&&G===i(m)&&(R?(_(k),k=-1):R=!0,ot(B,at-dt))):(G.sortIndex=C,e(p,G),A||M||(A=!0,K())),G},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(G){var lt=S;return function(){var at=S;S=lt;try{return G.apply(this,arguments)}finally{S=at}}}}(Pf)),Pf}var sg;function Nx(){return sg||(sg=1,Of.exports=Ux()),Of.exports}var zf={exports:{}},Dn={};/**
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
 */var cg;function zx(){if(cg)return Co;cg=1;var o=Nx(),e=Ad(),i=Px();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,O,mt;function Rt(t){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+O+t+mt}var K=!1;function ot(t,n){if(!t||K)return"";K=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(gt){var ct=gt}Reflect.construct(t,[],Ct)}else{try{Ct.call()}catch(gt){ct=gt}t.call(Ct.prototype)}}else{try{throw Error()}catch(gt){ct=gt}(Ct=t())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(gt){if(gt&&ct&&typeof gt.stack=="string")return[gt.stack,ct.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],w=f[1];if(y&&w){var z=y.split(`
`),Q=w.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Q.length)for(s=z.length-1,c=Q.length-1;1<=s&&0<=c&&z[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Q[c]){var vt=`
`+z[s].replace(" at new "," at ");return t.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",t.displayName)),vt}while(1<=s&&0<=c);break}}}finally{K=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Rt(a):""}function G(t){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return t=ot(t.type,!1),t;case 11:return t=ot(t.type.render,!1),t;case 1:return t=ot(t.type,!0),t;default:return""}}function lt(t){try{var n="";do n+=G(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function at(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function dt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if(at(t)!==t)throw Error(r(188))}function Z(t){var n=t.alternate;if(!n){if(n=at(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),t;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var y=!1,w=c.child;w;){if(w===a){y=!0,a=c,s=f;break}if(w===s){y=!0,s=c,a=f;break}w=w.sibling}if(!y){for(w=f.child;w;){if(w===a){y=!0,a=f,s=c;break}if(w===s){y=!0,s=f,a=c;break}w=w.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function pt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=pt(t),n!==null)return n;t=t.sibling}return null}var Dt=Array.isArray,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},Tt=[],Yt=-1;function Ft(t){return{current:t}}function It(t){0>Yt||(t.current=Tt[Yt],Tt[Yt]=null,Yt--)}function $t(t,n){Yt++,Tt[Yt]=t.current,t.current=n}var ee=Ft(null),nt=Ft(null),Pe=Ft(null),ne=Ft(null);function ue(t,n){switch($t(Pe,n),$t(nt,t),$t(ee,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Dm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Dm(t),n=Lm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}It(ee),$t(ee,n)}function Qt(){It(ee),It(nt),It(Pe)}function Oe(t){t.memoizedState!==null&&$t(ne,t);var n=ee.current,a=Lm(n,t.type);n!==a&&($t(nt,t),$t(ee,a))}function fe(t){nt.current===t&&(It(ee),It(nt)),ne.current===t&&(It(ne),Eo._currentValue=ht)}var U=Object.prototype.hasOwnProperty,T=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,Nt=o.unstable_shouldYield,tt=o.unstable_requestPaint,J=o.unstable_now,ut=o.unstable_getCurrentPriorityLevel,it=o.unstable_ImmediatePriority,ft=o.unstable_UserBlockingPriority,zt=o.unstable_NormalPriority,Lt=o.unstable_LowPriority,xt=o.unstable_IdlePriority,ie=o.log,Pt=o.unstable_setDisableYieldValue,Vt=null,Bt=null;function yt(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Vt,t,void 0,(t.current.flags&128)===128)}catch{}}function te(t){if(typeof ie=="function"&&Pt(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Vt,t)}catch{}}var L=Math.clz32?Math.clz32:jt,St=Math.log,At=Math.LN2;function jt(t){return t>>>=0,t===0?32:31-(St(t)/At|0)|0}var N=128,bt=4194304;function Et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,y=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=Et(a):(f&=w,f!==0?s=Et(f):t||(y=w&~y,y!==0&&(s=Et(y))))):(w=a&~c,w!==0?s=Et(w):f!==0?s=Et(f):t||(y=a&~y,y!==0&&(s=Et(y)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,y=n&-n,c>=y||c===32&&(y&4194176)!==0)?n:s}function qt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function _e(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ce(){var t=N;return N<<=1,!(N&4194176)&&(N=128),t}function ye(){var t=bt;return bt<<=1,!(bt&62914560)&&(bt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function he(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function We(t,n,a,s,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,z=t.expirationTimes,Q=t.hiddenUpdates;for(a=y&~a;0<a;){var vt=31-L(a),Ct=1<<vt;w[vt]=0,z[vt]=-1;var ct=Q[vt];if(ct!==null)for(Q[vt]=null,vt=0;vt<ct.length;vt++){var gt=ct[vt];gt!==null&&(gt.lane&=-536870913)}a&=~Ct}s!==0&&ln(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function ln(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-L(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function Pi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-L(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ka(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ye(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Zm(t.type))}function zi(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Mn=Math.random().toString(36).slice(2),je="__reactFiber$"+Mn,nn="__reactProps$"+Mn,Ot="__reactContainer$"+Mn,kt="__reactEvents$"+Mn,Wt="__reactListeners$"+Mn,b="__reactHandles$"+Mn,F="__reactResources$"+Mn,V="__reactMarker$"+Mn;function $(t){delete t[je],delete t[nn],delete t[kt],delete t[Wt],delete t[b]}function q(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ot]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Om(t);t!==null;){if(a=t[je])return a;t=Om(t)}return n}t=a,a=t.parentNode}return null}function wt(t){if(t=t[je]||t[Ot]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ut(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Xt(t){var n=t[F];return n||(n=t[F]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ht(t){t[V]=!0}var ae=new Set,re={};function oe(t,n){De(t,n),De(t+"Capture",n)}function De(t,n){for(re[t]=n,t=0;t<n.length;t++)ae.add(n[t])}var ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),In={},Le={};function ve(t){return U.call(Le,t)?!0:U.call(In,t)?!1:Ze.test(t)?Le[t]=!0:(In[t]=!0,!1)}function pi(t,n,a){if(ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Be(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function _n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function an(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(t){var n=an(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rn(t){t._valueTracker||(t._valueTracker=Ns(t))}function bi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=an(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function la(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hn=/[\n"\\]/g;function Rn(t){return t.replace(Hn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Os(t,n,a,s,c,f,y,w){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_n(n)):t.value!==""+_n(n)&&(t.value=""+_n(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,y,_n(n)):a!=null?Cc(t,y,_n(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+_n(w):t.removeAttribute("name")}function Ps(t,n,a,s,c,f,y,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_n(a):"",n=n!=null?""+_n(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=w?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Cc(t,n,a){n==="number"&&la(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function br(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+_n(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function zd(t,n,a){if(n!=null&&(n=""+_n(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_n(a):""}function Bd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_n(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Id(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Fd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Hd(t){var n=wt(t);if(n&&(t=n.stateNode)){var a=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Os(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[nn]||null;if(!c)throw Error(r(90));Os(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&bi(s)}break t;case"textarea":zd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&br(t,!!a.multiple,n,!1)}}}var Nc=!1;function Gd(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(bl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Hd(n),t)))for(n=0;n<t.length;n++)Hd(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[nn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(ze)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oc=!1}var ca=null,Pc=null,Vo=null;function Vd(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function kd(){return!1}function Gn(t){function n(a,s,c,f,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:kd,this.isPropagationStopped=kd,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Gn(Wa),Fs=E({},Wa,{view:0,detail:0}),C0=Gn(Fs),zc,Bc,Is,qo=E({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(zc=t.screenX-Is.screenX,Bc=t.screenY-Is.screenY):Bc=zc=0,Is=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Wd=Gn(qo),D0=E({},qo,{dataTransfer:0}),L0=Gn(D0),U0=E({},Fs,{relatedTarget:0}),Fc=Gn(U0),N0=E({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Gn(N0),P0=E({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Gn(P0),B0=E({},Wa,{data:0}),Xd=Gn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=E({},Fs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Gn(V0),W0=E({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Gn(W0),X0=E({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Gn(X0),Y0=E({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Gn(Y0),Z0=E({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Gn(Z0),Q0=E({},Wa,{newState:0,oldState:0}),J0=Gn(Q0),$0=[9,13,27,32],Hc=ze&&"CompositionEvent"in window,Hs=null;ze&&"documentMode"in document&&(Hs=document.documentMode);var tv=ze&&"TextEvent"in window&&!Hs,Yd=ze&&(!Hc||Hs&&8<Hs&&11>=Hs),jd=" ",Zd=!1;function Kd(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Qd(n);case"keypress":return n.which!==32?null:(Zd=!0,jd);case"textInput":return t=n.data,t===jd&&Zd?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Kd(t,n)?(t=Vd(),Vo=Pc=ca=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yd&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function $d(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function av(t){Tm(t,0)}function Yo(t){var n=Ut(t);if(bi(n))return t}function th(t,n){if(t==="change")return n}var eh=!1;if(ze){var Gc;if(ze){var Vc="oninput"in document;if(!Vc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),Vc=typeof nh.oninput=="function"}Gc=Vc}else Gc=!1;eh=Gc&&(!document.documentMode||9<document.documentMode)}function ih(){Gs&&(Gs.detachEvent("onpropertychange",ah),Vs=Gs=null)}function ah(t){if(t.propertyName==="value"&&Yo(Vs)){var n=[];$d(n,Vs,t,Uc(t)),Gd(av,n)}}function rv(t,n,a){t==="focusin"?(ih(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",ah)):t==="focusout"&&ih()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Vs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:cv;function ks(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!U.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,n){var a=rh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rh(a)}}function oh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?oh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=la(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=la(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=lh(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&oh(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=sh(n,f);var y=sh(n,s);c&&y&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==y.node||a.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=ze&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,Ws=null,Xc=!1;function ch(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==la(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&ks(Ws,s)||(Ws=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},qc={},uh={};ze&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in uh)return qc[t]=n[a];return t}var fh=qa("animationend"),dh=qa("animationiteration"),hh=qa("animationstart"),dv=qa("transitionrun"),hv=qa("transitionstart"),pv=qa("transitioncancel"),ph=qa("transitionend"),mh=new Map,gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(t,n){mh.set(t,n),oe(n,[t])}var ei=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&_h(a,c,f)}}function Zo(t,n,a,s){ei[Lr++]=t,ei[Lr++]=n,ei[Lr++]=a,ei[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function ua(t,n){return Zo(t,null,null,n),Ko(t)}function _h(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-L(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<go)throw go=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},vh=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=vh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:lt(n)},vh.set(t,n),n)}return{value:t,source:n,stack:lt(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ii=[],ai=0,Ya=null,Bi=1,Fi="";function ja(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function xh(t,n,a){ii[ai++]=Bi,ii[ai++]=Fi,ii[ai++]=Ya,Ya=t;var s=Bi;t=Fi;var c=32-L(s)-1;s&=~(1<<c),a+=1;var f=32-L(n)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Bi=1<<32-L(n)+c|a<<c|s,Fi=f+t}else Bi=1<<f|a<<c|s,Fi=t}function Zc(t){t.return!==null&&(ja(t,1),xh(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===Ya;)Ya=ii[--ai],ii[ai]=null,Fi=ii[--ai],ii[ai]=null,Bi=ii[--ai],ii[ai]=null}var On=null,En=null,Ue=!1,gi=null,Ti=!1,Qc=Error(r(519));function Za(t){var n=Error(r(418,""));throw Ys(ni(n,t)),Qc}function yh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[je]=t,n[nn]=s,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)we(vo[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Ps(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),rn(n);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Bd(n,s.value,s.defaultValue,s.children),rn(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cm(n.textContent,a)?(s.popover!=null&&(we("beforetoggle",n),we("toggle",n)),s.onScroll!=null&&we("scroll",n),s.onScrollEnd!=null&&we("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Za(t)}function Sh(t){for(On=t.return;On;)switch(On.tag){case 3:case 27:Ti=!0;return;case 5:case 13:Ti=!1;return;default:On=On.return}}function Xs(t){if(t!==On)return!1;if(!Ue)return Sh(t),Ue=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&En&&Za(t),Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){En=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}En=null}}else En=On?vi(t.stateNode.nextSibling):null;return!0}function qs(){En=On=null,Ue=!1}function Ys(t){gi===null?gi=[t]:gi.push(t)}var js=Error(r(460)),Mh=Error(r(474)),Jc={then:function(){}};function Eh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function bh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t}throw Zs=n,js}}var Zs=null;function Th(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}var Pr=null,Ks=0;function tl(t){var n=Ks;return Ks+=1,Pr===null&&(Pr=[]),bh(Pr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ah(t){var n=t._init;return n(t._payload)}function wh(t){function n(et,Y){if(t){var rt=et.deletions;rt===null?(et.deletions=[Y],et.flags|=16):rt.push(Y)}}function a(et,Y){if(!t)return null;for(;Y!==null;)n(et,Y),Y=Y.sibling;return null}function s(et){for(var Y=new Map;et!==null;)et.key!==null?Y.set(et.key,et):Y.set(et.index,et),et=et.sibling;return Y}function c(et,Y){return et=Ma(et,Y),et.index=0,et.sibling=null,et}function f(et,Y,rt){return et.index=rt,t?(rt=et.alternate,rt!==null?(rt=rt.index,rt<Y?(et.flags|=33554434,Y):rt):(et.flags|=33554434,Y)):(et.flags|=1048576,Y)}function y(et){return t&&et.alternate===null&&(et.flags|=33554434),et}function w(et,Y,rt,Mt){return Y===null||Y.tag!==6?(Y=qu(rt,et.mode,Mt),Y.return=et,Y):(Y=c(Y,rt),Y.return=et,Y)}function z(et,Y,rt,Mt){var Jt=rt.type;return Jt===p?vt(et,Y,rt.props.children,Mt,rt.key):Y!==null&&(Y.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===P&&Ah(Jt)===Y.type)?(Y=c(Y,rt.props),Qs(Y,rt),Y.return=et,Y):(Y=xl(rt.type,rt.key,rt.props,null,et.mode,Mt),Qs(Y,rt),Y.return=et,Y)}function Q(et,Y,rt,Mt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==rt.containerInfo||Y.stateNode.implementation!==rt.implementation?(Y=Yu(rt,et.mode,Mt),Y.return=et,Y):(Y=c(Y,rt.children||[]),Y.return=et,Y)}function vt(et,Y,rt,Mt,Jt){return Y===null||Y.tag!==7?(Y=rr(rt,et.mode,Mt,Jt),Y.return=et,Y):(Y=c(Y,rt),Y.return=et,Y)}function Ct(et,Y,rt){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=qu(""+Y,et.mode,rt),Y.return=et,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case h:return rt=xl(Y.type,Y.key,Y.props,null,et.mode,rt),Qs(rt,Y),rt.return=et,rt;case d:return Y=Yu(Y,et.mode,rt),Y.return=et,Y;case P:var Mt=Y._init;return Y=Mt(Y._payload),Ct(et,Y,rt)}if(Dt(Y)||k(Y))return Y=rr(Y,et.mode,rt,null),Y.return=et,Y;if(typeof Y.then=="function")return Ct(et,tl(Y),rt);if(Y.$$typeof===M)return Ct(et,gl(et,Y),rt);el(et,Y)}return null}function ct(et,Y,rt,Mt){var Jt=Y!==null?Y.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Jt!==null?null:w(et,Y,""+rt,Mt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case h:return rt.key===Jt?z(et,Y,rt,Mt):null;case d:return rt.key===Jt?Q(et,Y,rt,Mt):null;case P:return Jt=rt._init,rt=Jt(rt._payload),ct(et,Y,rt,Mt)}if(Dt(rt)||k(rt))return Jt!==null?null:vt(et,Y,rt,Mt,null);if(typeof rt.then=="function")return ct(et,Y,tl(rt),Mt);if(rt.$$typeof===M)return ct(et,Y,gl(et,rt),Mt);el(et,rt)}return null}function gt(et,Y,rt,Mt,Jt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return et=et.get(rt)||null,w(Y,et,""+Mt,Jt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case h:return et=et.get(Mt.key===null?rt:Mt.key)||null,z(Y,et,Mt,Jt);case d:return et=et.get(Mt.key===null?rt:Mt.key)||null,Q(Y,et,Mt,Jt);case P:var be=Mt._init;return Mt=be(Mt._payload),gt(et,Y,rt,Mt,Jt)}if(Dt(Mt)||k(Mt))return et=et.get(rt)||null,vt(Y,et,Mt,Jt,null);if(typeof Mt.then=="function")return gt(et,Y,rt,tl(Mt),Jt);if(Mt.$$typeof===M)return gt(et,Y,rt,gl(Y,Mt),Jt);el(Y,Mt)}return null}function se(et,Y,rt,Mt){for(var Jt=null,be=null,le=Y,de=Y=0,yn=null;le!==null&&de<rt.length;de++){le.index>de?(yn=le,le=null):yn=le.sibling;var Ne=ct(et,le,rt[de],Mt);if(Ne===null){le===null&&(le=yn);break}t&&le&&Ne.alternate===null&&n(et,le),Y=f(Ne,Y,de),be===null?Jt=Ne:be.sibling=Ne,be=Ne,le=yn}if(de===rt.length)return a(et,le),Ue&&ja(et,de),Jt;if(le===null){for(;de<rt.length;de++)le=Ct(et,rt[de],Mt),le!==null&&(Y=f(le,Y,de),be===null?Jt=le:be.sibling=le,be=le);return Ue&&ja(et,de),Jt}for(le=s(le);de<rt.length;de++)yn=gt(le,et,de,rt[de],Mt),yn!==null&&(t&&yn.alternate!==null&&le.delete(yn.key===null?de:yn.key),Y=f(yn,Y,de),be===null?Jt=yn:be.sibling=yn,be=yn);return t&&le.forEach(function(Ca){return n(et,Ca)}),Ue&&ja(et,de),Jt}function me(et,Y,rt,Mt){if(rt==null)throw Error(r(151));for(var Jt=null,be=null,le=Y,de=Y=0,yn=null,Ne=rt.next();le!==null&&!Ne.done;de++,Ne=rt.next()){le.index>de?(yn=le,le=null):yn=le.sibling;var Ca=ct(et,le,Ne.value,Mt);if(Ca===null){le===null&&(le=yn);break}t&&le&&Ca.alternate===null&&n(et,le),Y=f(Ca,Y,de),be===null?Jt=Ca:be.sibling=Ca,be=Ca,le=yn}if(Ne.done)return a(et,le),Ue&&ja(et,de),Jt;if(le===null){for(;!Ne.done;de++,Ne=rt.next())Ne=Ct(et,Ne.value,Mt),Ne!==null&&(Y=f(Ne,Y,de),be===null?Jt=Ne:be.sibling=Ne,be=Ne);return Ue&&ja(et,de),Jt}for(le=s(le);!Ne.done;de++,Ne=rt.next())Ne=gt(le,et,de,Ne.value,Mt),Ne!==null&&(t&&Ne.alternate!==null&&le.delete(Ne.key===null?de:Ne.key),Y=f(Ne,Y,de),be===null?Jt=Ne:be.sibling=Ne,be=Ne);return t&&le.forEach(function(Rx){return n(et,Rx)}),Ue&&ja(et,de),Jt}function en(et,Y,rt,Mt){if(typeof rt=="object"&&rt!==null&&rt.type===p&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case h:t:{for(var Jt=rt.key;Y!==null;){if(Y.key===Jt){if(Jt=rt.type,Jt===p){if(Y.tag===7){a(et,Y.sibling),Mt=c(Y,rt.props.children),Mt.return=et,et=Mt;break t}}else if(Y.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===P&&Ah(Jt)===Y.type){a(et,Y.sibling),Mt=c(Y,rt.props),Qs(Mt,rt),Mt.return=et,et=Mt;break t}a(et,Y);break}else n(et,Y);Y=Y.sibling}rt.type===p?(Mt=rr(rt.props.children,et.mode,Mt,rt.key),Mt.return=et,et=Mt):(Mt=xl(rt.type,rt.key,rt.props,null,et.mode,Mt),Qs(Mt,rt),Mt.return=et,et=Mt)}return y(et);case d:t:{for(Jt=rt.key;Y!==null;){if(Y.key===Jt)if(Y.tag===4&&Y.stateNode.containerInfo===rt.containerInfo&&Y.stateNode.implementation===rt.implementation){a(et,Y.sibling),Mt=c(Y,rt.children||[]),Mt.return=et,et=Mt;break t}else{a(et,Y);break}else n(et,Y);Y=Y.sibling}Mt=Yu(rt,et.mode,Mt),Mt.return=et,et=Mt}return y(et);case P:return Jt=rt._init,rt=Jt(rt._payload),en(et,Y,rt,Mt)}if(Dt(rt))return se(et,Y,rt,Mt);if(k(rt)){if(Jt=k(rt),typeof Jt!="function")throw Error(r(150));return rt=Jt.call(rt),me(et,Y,rt,Mt)}if(typeof rt.then=="function")return en(et,Y,tl(rt),Mt);if(rt.$$typeof===M)return en(et,Y,gl(et,rt),Mt);el(et,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,Y!==null&&Y.tag===6?(a(et,Y.sibling),Mt=c(Y,rt),Mt.return=et,et=Mt):(a(et,Y),Mt=qu(rt,et.mode,Mt),Mt.return=et,et=Mt),y(et)):a(et,Y)}return function(et,Y,rt,Mt){try{Ks=0;var Jt=en(et,Y,rt,Mt);return Pr=null,Jt}catch(le){if(le===js)throw le;var be=li(29,le,null,et.mode);return be.lanes=Mt,be.return=et,be}finally{}}}var Ka=wh(!0),Rh=wh(!1),zr=Ft(null),nl=Ft(0);function Ch(t,n){t=Zi,$t(nl,t),$t(zr,n),Zi=t|n.baseLanes}function $c(){$t(nl,Zi),$t(zr,zr.current)}function tu(){Zi=nl.current,It(zr),It(nl)}var ri=Ft(null),Ai=null;function fa(t){var n=t.alternate;$t(hn,hn.current&1),$t(ri,t),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Dh(t){if(t.tag===22){if($t(hn,hn.current),$t(ri,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else da()}function da(){$t(hn,hn.current),$t(ri,ri.current)}function Ii(t){It(ri),Ai===t&&(Ai=null),It(hn)}var hn=Ft(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,pn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var $s=null,nu=0,Br=0,Fr=null;function vv(t,n){if($s===null){var a=$s=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Lh,Lh),n}function Lh(){if(--nu===0&&$s!==null){Fr!==null&&(Fr.status="fulfilled");var t=$s;$s=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Uh=H.S;H.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Uh!==null&&Uh(t,n)};var Qa=Ft(null);function iu(){var t=Qa.current;return t!==null?t:Ve.pooledCache}function al(t,n){n===null?$t(Qa,Qa.current):$t(Qa,n.pool)}function Nh(){var t=iu();return t===null?null:{parent:pn._currentValue,pool:t}}var ha=0,Me=null,Fe=null,cn=null,rl=!1,Ir=!1,Ja=!1,sl=0,to=0,Hr=null,yv=0;function sn(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return ha=f,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?$a:pa,Ja=!1,f=a(s,c),Ja=!1,Ir&&(f=Ph(n,a,s,c)),Oh(t),f}function Oh(t){H.H=wi;var n=Fe!==null&&Fe.next!==null;if(ha=0,cn=Fe=Me=null,rl=!1,to=0,Hr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Ph(t,n,a,s){Me=t;var c=0;do{if(Ir&&(Hr=null),to=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,cn=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=tr,f=n(a,s)}while(Ir);return f}function Sv(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(Me.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}ha=0,cn=Fe=Me=null,Ir=!1,to=sl=0,Hr=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Me.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(Fe===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=cn===null?Me.memoizedState:cn.next;if(n!==null)cn=n,Fe=t;else{if(t===null)throw Me.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},cn===null?Me.memoizedState=cn=t:cn=cn.next=t}return cn}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function eo(t){var n=to;return to+=1,Hr===null&&(Hr=[]),t=bh(Hr,t,n),n=Me,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?$a:pa),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===M)return Cn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=un();return uu(n,Fe,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var w=y=null,z=null,Q=n,vt=!1;do{var Ct=Q.lane&-536870913;if(Ct!==Q.lane?(Ce&Ct)===Ct:(ha&Ct)===Ct){var ct=Q.revertLane;if(ct===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),Ct===Br&&(vt=!0);else if((ha&ct)===ct){Q=Q.next,ct===Br&&(vt=!0);continue}else Ct={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(w=z=Ct,y=f):z=z.next=Ct,Me.lanes|=ct,Ea|=ct;Ct=Q.action,Ja&&a(f,Ct),f=Q.hasEagerState?Q.eagerState:a(f,Ct)}else ct={lane:Ct,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(w=z=ct,y=f):z=z.next=ct,Me.lanes|=Ct,Ea|=Ct;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?y=f:z.next=w,!qn(f,t.memoizedState)&&(vn=!0,vt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);qn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zh(t,n,a){var s=Me,c=un(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!qn((Fe||c).memoizedState,a);if(y&&(c.memoizedState=a,vn=!0),c=c.queue,pu(Ih.bind(null,s,c,t),[t]),c.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Fh.bind(null,s,c,a,n),{destroy:void 0},null),Ve===null)throw Error(r(349));f||ha&60||Bh(s,n,a)}return a}function Bh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=ol(),Me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fh(t,n,a,s){n.value=a,n.getSnapshot=s,Hh(n)&&Gh(t)}function Ih(t,n,a){return a(function(){Hh(n)&&Gh(t)})}function Hh(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Gh(t){var n=ua(t,2);n!==null&&Pn(n,t,2)}function du(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Ja){te(!0);try{a()}finally{te(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function Vh(t,n,a,s){return t.baseState=a,uu(t,Fe,typeof s=="function"?s:Hi)}function Mv(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};H.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=H.T,y={};H.T=y;try{var w=a(c,s),z=H.S;z!==null&&z(y,w),Wh(t,n,w)}catch(Q){hu(t,n,Q)}finally{H.T=f}}else try{f=a(c,s),Wh(t,n,f)}catch(Q){hu(t,n,Q)}}function Wh(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xh(t,n,s)},function(s){return hu(t,n,s)}):Xh(t,n,a)}function Xh(t,n,a){n.status="fulfilled",n.value=a,qh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kh(t,a)))}function hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qh(n),n=n.next;while(n!==s)}t.action=null}function qh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yh(t,n){return n}function jh(t,n){if(Ue){var a=Ve.formState;if(a!==null){t:{var s=Me;if(Ue){if(En){e:{for(var c=En,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){En=vi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yh,lastRenderedState:n},a.queue=s,a=dp.bind(null,Me,s),s.dispatch=a,s=du(!1),f=xu.bind(null,Me,!1,s.queue),s=Vn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,Me,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zh(t){var n=un();return Kh(n,Fe,t)}function Kh(t,n,a){n=uu(t,n,Yh)[0],t=cl(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?eo(n):n;var s=un(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(Me.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Qh(t){var n=un(),a=Fe;if(a!==null)return Kh(n,a,t);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=Me.updateQueue,n===null&&(n=ol(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jh(){return un().memoizedState}function ul(t,n,a,s){var c=Vn();Me.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=un();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&au(s,Fe.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(Me.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function $h(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function tp(t,n){return fl(4,2,t,n)}function ep(t,n){return fl(4,4,t,n)}function np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ip(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,np.bind(null,n,t),a)}function mu(){}function ap(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function rp(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Ja){te(!0);try{t()}finally{te(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||ha&1073741824?t.memoizedState=n:(t.memoizedState=a,t=om(),Me.lanes|=t,Ea|=t,a)}function sp(t,n,a,s){return qn(a,n)?a:zr.current!==null?(t=gu(t,a,s),qn(t,n)||(vn=!0),t):ha&42?(t=om(),Me.lanes|=t,Ea|=t,n):(vn=!0,t.memoizedState=a)}function op(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var y=H.T,w={};H.T=w,xu(t,!1,n,a);try{var z=c(),Q=H.S;if(Q!==null&&Q(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var vt=xv(z,s);no(t,n,vt,Kn(t))}else no(t,n,s,Kn(t))}catch(Ct){no(t,n,{then:function(){},status:"rejected",reason:Ct},Kn())}finally{X.p=f,H.T=y}}function bv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=lp(t).queue;op(t,c,n,ht,a===null?bv:function(){return cp(t),a(s)})}function lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:ht},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cp(t){var n=lp(t).next.queue;no(t,n,{},Kn())}function vu(){return Cn(Eo)}function up(){return un().memoizedState}function fp(){return un().memoizedState}function Tv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=_a(a);var s=va(n,t,a);s!==null&&(Pn(s,n,a),ro(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?hp(n,a):(a=jc(t,n,a,s),a!==null&&(Pn(a,t,s),pp(a,n,s)))}function dp(t,n,a){var s=Kn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))hp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,w=f(y,a);if(c.hasEagerState=!0,c.eagerState=w,qn(w,y))return Zo(t,n,c,0),Ve===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return Pn(a,t,s),pp(a,n,s),!0}return!1}function xu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&Pn(n,t,2)}function dl(t){var n=t.alternate;return t===Me||n!==null&&n===Me}function hp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Pi(t,a)}}var wi={readContext:Cn,use:ll,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn};wi.useCacheRefresh=sn,wi.useMemoCache=sn,wi.useHostTransitionStatus=sn,wi.useFormState=sn,wi.useActionState=sn,wi.useOptimistic=sn;var $a={readContext:Cn,use:ll,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:$h,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var s=t();if(Ja){te(!0);try{t()}finally{te(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Vn();if(a!==void 0){var c=a(n);if(Ja){te(!0);try{a(n)}finally{te(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,Me,t),[s.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=dp.bind(null,Me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Vn();return gu(a,t,n)},useTransition:function(){var t=du(!1);return t=op.bind(null,Me,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Me,c=Vn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));Ce&60||Bh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$h(Ih.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Fh.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Vn(),n=Ve.identifierPrefix;if(Ue){var a=Fi,s=Bi;a=(s&~(1<<32-L(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=yv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Vn().memoizedState=Tv.bind(null,Me)}};$a.useMemoCache=cu,$a.useHostTransitionStatus=vu,$a.useFormState=jh,$a.useActionState=jh,$a.useOptimistic=function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xu.bind(null,Me,!0,a),a.dispatch=n,[t,n]};var pa={readContext:Cn,use:ll,useCallback:ap,useContext:Cn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:cl,useRef:Jh,useState:function(){return cl(Hi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=un();return sp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=cl(Hi)[0],n=un().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zh,useId:up};pa.useCacheRefresh=fp,pa.useMemoCache=cu,pa.useHostTransitionStatus=vu,pa.useFormState=Zh,pa.useActionState=Zh,pa.useOptimistic=function(t,n){var a=un();return Vh(a,Fe,t,n)};var tr={readContext:Cn,use:ll,useCallback:ap,useContext:Cn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:fu,useRef:Jh,useState:function(){return fu(Hi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=un();return Fe===null?gu(a,t,n):sp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=fu(Hi)[0],n=un().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zh,useId:up};tr.useCacheRefresh=fp,tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Qh,tr.useActionState=Qh,tr.useOptimistic=function(t,n){var a=un();return Fe!==null?Vh(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])};function yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Su={isMounted:function(t){return(t=t._reactInternals)?at(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=_a(s);c.payload=n,a!=null&&(c.callback=a),n=va(t,c,s),n!==null&&(Pn(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=_a(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(t,c,s),n!==null&&(Pn(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(t,s,a),n!==null&&(Pn(n,t,a),ro(n,t,a))}};function mp(t,n,a,s,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function gp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Su.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=E({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _p(t){hl(t)}function vp(t){console.error(t)}function xp(t){hl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Sp(t){return t=_a(t),t.tag=3,t}function Mp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){yp(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){yp(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ai===null?af():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Ue)return n=ri.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Ys(ni(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Ys(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),po===null?po=[f]:po.push(f),tn!==4&&(tn=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sp(c),Mp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Ep=Error(r(461)),vn=!1;function bn(t,n,a,s){n.child=t===null?Rh(n,null,a,s):Ka(n,t.child,a,s)}function bp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var w in s)w!=="ref"&&(y[w]=s[w])}else y=s;return ir(n),s=ru(t,n,a,y,f,c),w=su(),t!==null&&!vn?(ou(t,n,c),Gi(t,n,c)):(Ue&&w&&Zc(n),n.flags|=1,bn(t,n,s,c),n.child)}function Tp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ap(t,n,f,s,c)):(t=xl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(y,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ap(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ks(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(vn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return Eu(t,n,a,s,c)}function wp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,y=t!==null?t.memoizedState:null;if(io(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=y!==null?y.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Rp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,y!==null?y.cachePool:null),y!==null?Ch(n,y):$c(),Dh(n);else return n.lanes=n.childLanes=536870912,Rp(t,n,y!==null?y.baseLanes|a:a,a)}else y!==null?(al(n,y.cachePool),Ch(n,y),da(),n.memoizedState=null):(t!==null&&al(n,null),$c(),da());return bn(t,n,c,a),n.child}function Rp(t,n,a,s){var c=iu();return c=c===null?null:{parent:pn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Dh(n),t!==null&&ao(t,n,s,!0),null}function io(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ir(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!vn?(ou(t,n,c),Gi(t,n,c)):(Ue&&s&&Zc(n),n.flags|=1,bn(t,n,a,c),n.child)}function Cp(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Ph(n,s,a,c),Oh(t),s=su(),t!==null&&!vn?(ou(t,n,f),Gi(t,n,f)):(Ue&&s&&Zc(n),n.flags|=1,bn(t,n,a,f),n.child)}function Dp(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Ur,y=a.contextType;typeof y=="object"&&y!==null&&(f=Cn(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Su,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Cn(y):Ur,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(yu(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Su.enqueueReplaceState(f,f.state,null),oo(n,s,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,z=er(a,w);f.props=z;var Q=f.context,vt=a.contextType;y=Ur,typeof vt=="object"&&vt!==null&&(y=Cn(vt));var Ct=a.getDerivedStateFromProps;vt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||Q!==y)&&gp(n,f,s,y),ga=!1;var ct=n.memoizedState;f.state=ct,oo(n,s,f,c),so(),Q=n.memoizedState,w||ct!==Q||ga?(typeof Ct=="function"&&(yu(n,a,Ct,s),Q=n.memoizedState),(z=ga||mp(n,a,z,s,ct,Q,y))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=y,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),y=n.memoizedProps,vt=er(a,y),f.props=vt,Ct=n.pendingProps,ct=f.context,Q=a.contextType,z=Ur,typeof Q=="object"&&Q!==null&&(z=Cn(Q)),w=a.getDerivedStateFromProps,(Q=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Ct||ct!==z)&&gp(n,f,s,z),ga=!1,ct=n.memoizedState,f.state=ct,oo(n,s,f,c),so();var gt=n.memoizedState;y!==Ct||ct!==gt||ga||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof w=="function"&&(yu(n,a,w,s),gt=n.memoizedState),(vt=ga||mp(n,a,vt,s,ct,gt,z)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,gt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,gt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ct===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ct===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=gt),f.props=s,f.state=gt,f.context=z,s=vt):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ct===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ct===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,io(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ka(n,t.child,null,c),n.child=Ka(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function Lp(t,n,a,s){return qs(),n.flags|=256,bn(t,n,a,s),n.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Tu(t){return{baseLanes:t,cachePool:Nh()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Up(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(c?fa(n):da(),Ue){var w=En,z;if(z=w){t:{for(z=w,w=Ti;z.nodeType!==8;){if(!w){w=null;break t}if(z=vi(z.nextSibling),z===null){w=null;break t}}w=z}w!==null?(n.memoizedState={dehydrated:w,treeContext:Ya!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912},z=li(18,null,null,0),z.stateNode=w,z.return=n,n.child=z,On=n,En=null,z=!0):z=!1}z||Za(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ii(n)}return w=s.children,s=s.fallback,c?(da(),c=n.mode,w=Ru({mode:"hidden",children:w},c),s=rr(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=Tu(a),c.childLanes=Au(t,y,a),n.memoizedState=bu,s):(fa(n),wu(n,w))}if(z=t.memoizedState,z!==null&&(w=z.dehydrated,w!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),c=s.fallback,w=n.mode,s=Ru({mode:"visible",children:s.children},w),c=rr(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ka(n,t.child,null,a),s=n.child,s.memoizedState=Tu(a),s.childLanes=Au(t,y,a),n.memoizedState=bu,n=c);else if(fa(n),w.data==="$!"){if(y=w.nextSibling&&w.nextSibling.dataset,y)var Q=y.dgst;y=Q,s=Error(r(419)),s.stack="",s.digest=y,Ys({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(vn||ao(t,n,a,!1),y=(a&t.childLanes)!==0,vn||y){if(y=Ve,y!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(y.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,ua(t,s),Pn(y,t,s),Ep}w.data==="$?"||af(),n=Cu(t,n,a)}else w.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),w._reactRetry=n,n=null):(t=z.treeContext,En=vi(w.nextSibling),On=n,Ue=!0,gi=null,Ti=!1,t!==null&&(ii[ai++]=Bi,ii[ai++]=Fi,ii[ai++]=Ya,Bi=t.id,Fi=t.overflow,Ya=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(da(),c=s.fallback,w=n.mode,z=t.child,Q=z.sibling,s=Ma(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,Q!==null?c=Ma(Q,c):(c=rr(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=t.child.memoizedState,w===null?w=Tu(a):(z=w.cachePool,z!==null?(Q=pn._currentValue,z=z.parent!==Q?{parent:Q,pool:Q}:z):z=Nh(),w={baseLanes:w.baseLanes|a,cachePool:z}),c.memoizedState=w,c.childLanes=Au(t,y,a),n.memoizedState=bu,s):(fa(n),a=t.child,t=a.sibling,a=Ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return am(t,n,0,null)}function Cu(t,n,a){return Ka(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Np(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Op(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(t,n,s.children,a),s=hn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,a,n);else if(t.tag===19)Np(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch($t(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,!(a&n.childLanes))if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:ue(n,n.stateNode.containerInfo),ma(n,pn,t.memoizedState.cache),qs();break;case 27:case 5:Oe(n);break;case 4:ue(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(fa(n),n.flags|=128,null):a&n.child.childLanes?Up(t,n,a):(fa(n),t=Gi(t,n,a),t!==null?t.sibling:null);fa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ao(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Op(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$t(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,wp(t,n,a);case 24:ma(n,pn,t.memoizedState.cache)}return Gi(t,n,a)}function Pp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return vn=!1,Rv(t,n,a);vn=!!(t.flags&131072)}else vn=!1,Ue&&n.flags&1048576&&xh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=er(s,t),n.tag=1,n=Dp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===A){n.tag=11,n=bp(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=Tp(null,n,s,t,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Dp(t,n,s,c,a);case 3:t:{if(ue(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),oo(n,f,null,a);var y=n.memoizedState;if(f=y.cache,ma(n,pn,f),f!==c.cache&&Ou(n,[pn],a,!0),so(),f=y.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Lp(t,n,f,a);break t}else if(f!==s){s=ni(Error(r(424)),n),Ys(s),n=Lp(t,n,f,a);break t}else for(En=vi(n.stateNode.containerInfo.firstChild),On=n,Ue=!0,gi=null,Ti=!0,a=Rh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),f===s){n=Gi(t,n,a);break t}bn(t,n,f,a)}n=n.child}return n;case 26:return io(t,n),t===null?(a=Fm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,t=n.pendingProps,s=Ll(Pe.current).createElement(a),s[je]=n,s[nn]=t,Tn(s,a,t),Ht(s),n.stateNode=s):n.memoizedState=Fm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Oe(n),t===null&&Ue&&(s=n.stateNode=Pm(n.type,n.pendingProps,Pe.current),On=n,Ti=!0,En=vi(s.firstChild)),s=n.pendingProps.children,t!==null||Ue?bn(t,n,s,a):n.child=Ka(n,null,s,a),io(t,n),n.child;case 5:return t===null&&Ue&&((c=s=En)&&(s=ax(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,On=n,En=vi(s.firstChild),Ti=!1,c=!0):c=!1),c||Za(n)),Oe(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:y!==null&&vf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,Sv,null,null,a),Eo._currentValue=c),io(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&Ue&&((t=a=En)&&(a=rx(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,On=n,En=null,t=!0):t=!1),t||Za(n)),null;case 13:return Up(t,n,a);case 4:return ue(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ka(n,null,s,a):bn(t,n,s,a),n.child;case 11:return bp(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Cn(c),s=s(c),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return Ap(t,n,n.type,n.pendingProps,a);case 19:return Op(t,n,a);case 22:return wp(t,n,a);case 24:return ir(n),s=Cn(pn),t===null?(c=iu(),c===null&&(c=Ve,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ma(n,pn,c)):(t.lanes&a&&(zu(t,n),oo(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,pn,s)):(s=f.cache,ma(n,pn,s),s!==c.cache&&Ou(n,[pn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Ft(null),nr=null,Vi=null;function ma(t,n,a){$t(Uu,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=Uu.current,It(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var z=0;z<n.length;z++)if(w.context===n[z]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Nu(f.return,a,t),s||(y=null);break t}f=w.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Nu(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ao(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var w=c.type;qn(c.pendingProps.value,y.value)||(t!==null?t.push(w):t=[w])}}else if(c===ne.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return zp(nr,t)}function gl(t,n){return nr===null&&ir(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(r(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var ga=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,Je&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),_h(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Pi(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function so(){if(Fu){var t=Fr;if(t!==null)throw t}}function oo(t,n,a,s){Fu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var z=w,Q=z.next;z.next=null,y===null?f=Q:y.next=Q,y=z;var vt=t.alternate;vt!==null&&(vt=vt.updateQueue,w=vt.lastBaseUpdate,w!==y&&(w===null?vt.firstBaseUpdate=Q:w.next=Q,vt.lastBaseUpdate=z))}if(f!==null){var Ct=c.baseState;y=0,vt=Q=z=null,w=f;do{var ct=w.lane&-536870913,gt=ct!==w.lane;if(gt?(Ce&ct)===ct:(s&ct)===ct){ct!==0&&ct===Br&&(Fu=!0),vt!==null&&(vt=vt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var se=t,me=w;ct=n;var en=a;switch(me.tag){case 1:if(se=me.payload,typeof se=="function"){Ct=se.call(en,Ct,ct);break t}Ct=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=me.payload,ct=typeof se=="function"?se.call(en,Ct,ct):se,ct==null)break t;Ct=E({},Ct,ct);break t;case 2:ga=!0}}ct=w.callback,ct!==null&&(t.flags|=64,gt&&(t.flags|=8192),gt=c.callbacks,gt===null?c.callbacks=[ct]:gt.push(ct))}else gt={lane:ct,tag:w.tag,payload:w.payload,callback:w.callback,next:null},vt===null?(Q=vt=gt,z=Ct):vt=vt.next=gt,y|=ct;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;gt=w,w=gt.next,gt.next=null,c.lastBaseUpdate=gt,c.shared.pending=null}}while(!0);vt===null&&(z=Ct),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=vt,f===null&&(c.shared.lanes=0),Ea|=y,t.lanes=y,t.memoizedState=Ct}}function Bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==c)}}catch(w){Ge(n,n.return,w)}}function xa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var y=s.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,c=n;var z=a;try{w()}catch(Q){Ge(c,z,Q)}}}s=s.next}while(s!==f)}}catch(Q){Ge(n,n.return,Q)}}function Ip(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fp(n,a)}catch(s){Ge(t,t.return,s)}}}function Hp(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function ar(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Ge(t,n,f)}}function Yn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Gp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function Vp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[nn]=n}catch(c){Ge(t,t.return,c)}}function kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var Wi=!1,$e=!1,Gu=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,xn=null,Xp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=lh(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,w=-1,z=-1,Q=0,vt=0,Ct=t,ct=null;e:for(;;){for(var gt;Ct!==a||c!==0&&Ct.nodeType!==3||(w=y+c),Ct!==f||s!==0&&Ct.nodeType!==3||(z=y+s),Ct.nodeType===3&&(y+=Ct.nodeValue.length),(gt=Ct.firstChild)!==null;)ct=Ct,Ct=gt;for(;;){if(Ct===t)break e;if(ct===a&&++Q===c&&(w=y),ct===f&&++vt===s&&(z=y),(gt=Ct.nextSibling)!==null)break;Ct=ct,ct=Ct.parentNode}Ct=gt}a=w===-1||z===-1?null:{start:w,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var se=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(se,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(me){Ge(a,a.return,me)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}return se=Xp,Xp=!1,se}function qp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&lo(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(w){Ge(a,a.return,w)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ge(a,a.return,w)}}s&64&&Ip(a),s&512&&ar(a,a.return);break;case 3:if(qi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fp(s,t)}catch(w){Ge(a,a.return,w)}}break;case 26:qi(t,a),s&512&&ar(a,a.return);break;case 27:case 5:qi(t,a),n===null&&s&4&&Gp(a),s&512&&ar(a,a.return);break;case 12:qi(t,a);break;case 13:qi(t,a),s&4&&Zp(t,a);break;case 22:if(c=a.memoizedState!==null||Wi,!c){n=n!==null&&n.memoizedState!==null||$e;var f=Wi,y=$e;Wi=c,($e=n)&&!y?ya(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),Wi=f,$e=y}s&512&&(a.memoizedProps.mode==="manual"?ar(a,a.return):Yn(a,a.return));break;default:qi(t,a)}}function Yp(t){var n=t.alternate;n!==null&&(t.alternate=null,Yp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fn=null,jn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Vt,a)}catch{}switch(a.tag){case 26:$e||Yn(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Yn(a,n);var s=fn,c=jn;for(fn=a.stateNode,Xi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);$(a),fn=s,jn=c;break;case 5:$e||Yn(a,n);case 6:c=fn;var f=jn;if(fn=null,Xi(t,n,a),fn=c,jn=f,fn!==null)if(jn)try{t=fn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(y){Ge(a,n,y)}else try{fn.removeChild(a.stateNode)}catch(y){Ge(a,n,y)}break;case 18:fn!==null&&(jn?(n=fn,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),wo(n)):yf(fn,a.stateNode));break;case 4:s=fn,c=jn,fn=a.stateNode.containerInfo,jn=!0,Xi(t,n,a),fn=s,jn=c;break;case 0:case 11:case 14:case 15:$e||xa(2,a,n),$e||xa(4,a,n),Xi(t,n,a);break;case 1:$e||(Yn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hp(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:$e||Yn(a,n),$e=(s=$e)||a.memoizedState!==null,Xi(t,n,a),$e=s;break;default:Xi(t,n,a)}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){Ge(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function si(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,y=n,w=y;t:for(;w!==null;){switch(w.tag){case 27:case 5:fn=w.stateNode,jn=!1;break t;case 3:fn=w.stateNode.containerInfo,jn=!0;break t;case 4:fn=w.stateNode.containerInfo,jn=!0;break t}w=w.return}if(fn===null)throw Error(r(160));jp(f,y,c),fn=null,jn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Kp(n,t),n=n.sibling}var _i=null;function Kp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),oi(t),s&4&&(xa(3,t,t.return),lo(3,t),xa(5,t,t.return));break;case 1:si(n,t),oi(t),s&512&&($e||a===null||Yn(a,a.return)),s&64&&Wi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(si(n,t),oi(t),s&512&&($e||a===null||Yn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[V]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[je]=t,Ht(f),s=f;break t;case"link":var y=Gm("link","href",c).get(s+(a.href||""));if(y){for(var w=0;w<y.length;w++)if(f=y[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(y=Gm("meta","content",c).get(s+(a.content||""))){for(w=0;w<y.length;w++)if(f=y[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[je]=t,Ht(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Hm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Hm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var Q=z.nextSibling,vt=z.nodeName;z[V]||vt==="HEAD"||vt==="BODY"||vt==="SCRIPT"||vt==="STYLE"||vt==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=Q}for(var Ct=t.type,ct=c.attributes;ct.length;)c.removeAttributeNode(ct[0]);Tn(c,Ct,f),c[je]=t,c[nn]=f}catch(se){Ge(t,t.return,se)}}case 5:if(si(n,t),oi(t),s&512&&($e||a===null||Yn(a,a.return)),t.flags&32){c=t.stateNode;try{Tr(c,"")}catch(se){Ge(t,t.return,se)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(si(n,t),oi(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(se){Ge(t,t.return,se)}}break;case 3:if(Ol=null,c=_i,_i=Ul(n.containerInfo),si(n,t),_i=c,oi(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(se){Ge(t,t.return,se)}Gu&&(Gu=!1,Qp(t));break;case 4:s=_i,_i=Ul(t.stateNode.containerInfo),si(n,t),oi(t),_i=s;break;case 12:si(n,t),oi(t);break;case 13:si(n,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=J()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&($e||a===null||Yn(a,a.return)),z=t.memoizedState!==null,Q=a!==null&&a.memoizedState!==null,vt=Wi,Ct=$e,Wi=vt||z,$e=Ct||Q,si(n,t),$e=Ct,Wi=vt,oi(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=Wi||$e,a===null||Q||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){Q=a=n;try{if(c=Q.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{y=Q.stateNode,w=Q.memoizedProps.style;var gt=w!=null&&w.hasOwnProperty("display")?w.display:null;y.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(se){Ge(Q,Q.return,se)}}}else if(n.tag===6){if(a===null){Q=n;try{Q.stateNode.nodeValue=z?"":Q.memoizedProps}catch(se){Ge(Q,Q.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:si(n,t),oi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:si(n,t),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(kp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var y=s.stateNode;s.flags&32&&(Tr(y,""),s.flags&=-33);var w=Iu(t);_l(t,w,y);break;case 3:case 4:var z=s.stateNode.containerInfo,Q=Iu(t);Hu(t,Q,z);break;default:throw Error(r(161))}}}catch(vt){Ge(t,t.return,vt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),Vr(n);break;case 1:Yn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hp(n,n.return,a),Vr(n);break;case 26:case 27:case 5:Yn(n,n.return),Vr(n);break;case 22:Yn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),lo(4,f);break;case 1:if(ya(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ge(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],w)}catch(Q){Ge(s,s.return,Q)}}a&&y&64&&Ip(f),ar(f,f.return);break;case 26:case 27:case 5:ya(c,f,a),a&&s===null&&y&4&&Gp(f),ar(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&y&4&&Zp(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),ar(f,f.return);break;default:ya(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Sa(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(t,n,a,s),n=n.sibling}function Jp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Sa(t,n,a,s),c&2048&&lo(9,n);break;case 3:Sa(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){Sa(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,w=f.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ge(n,n.return,z)}}else Sa(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Sa(t,n,a,s):co(t,n):f._visibility&4?Sa(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Sa(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Sa(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,w=a,z=s,Q=y.flags;switch(y.tag){case 0:case 11:case 15:kr(f,y,w,z,c),lo(8,y);break;case 23:break;case 22:var vt=y.stateNode;y.memoizedState!==null?vt._visibility&4?kr(f,y,w,z,c):co(f,y):(vt._visibility|=4,kr(f,y,w,z,c)),c&&Q&2048&&ku(y.alternate,y);break;case 24:kr(f,y,w,z,c),c&&Q&2048&&Wu(y.alternate,y);break;default:kr(f,y,w,z,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&ku(s.alternate,s);break;case 24:co(a,s),c&2048&&Wu(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Wr(t){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)$p(t),t=t.sibling}function $p(t){switch(t.tag){case 26:Wr(t),t.flags&uo&&t.memoizedState!==null&&vx(_i,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=_i;_i=Ul(t.stateNode.containerInfo),Wr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Wr(t),uo=n):Wr(t));break;default:Wr(t)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,nm(s,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&xa(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):fo(t);break;default:fo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,nm(s,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function nm(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=t;xn!==null;){s=xn;var c=s.sibling,f=s.return;if(Yp(s),s===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,a,s){return new Lv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ma(t,n){var a=t.alternate;return a===null?(a=li(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xl(t,n,a,s,c,f){var y=0;if(s=t,typeof t=="function")Xu(t)&&(y=1);else if(typeof t=="string")y=gx(t,a,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return rr(a.children,c,f,n);case m:y=8,c|=24;break;case g:return t=li(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case R:return t=li(13,a,n,c),t.elementType=R,t.lanes=f,t;case v:return t=li(19,a,n,c),t.elementType=v,t.lanes=f,t;case D:return am(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case M:y=10;break t;case S:y=9;break t;case A:y=11;break t;case _:y=14;break t;case P:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=li(y,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=li(7,t,s,n),t.lanes=a,t}function am(t,n,a,s){t=li(22,t,s,n),t.elementType=D,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var y=ua(f,2);y!==null&&(c._pendingVisibility|=2,Pn(y,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var y=ua(f,2);y!==null&&(c._pendingVisibility&=-3,Pn(y,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=li(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Yi(t){t.flags|=4}function rm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!km(n)){if(n=ri.current,n!==null&&((Ce&4194176)===Ce?Ai!==null:(Ce&62914560)!==Ce&&!(Ce&536870912)||n!==Ai))throw Zs=Jc,Mh;t.flags|=8192}}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,qr|=n)}function ho(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ki(pn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gi!==null&&(ef(gi),gi=null))),Qe(n),null;case 26:return a=n.memoizedState,t===null?(Yi(n),a!==null?(Qe(n),rm(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Yi(n),Qe(n),rm(n,a)):(Qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Yi(n),Qe(n),n.flags&=-16777217),null;case 27:fe(n),a=Pe.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}t=ee.current,Xs(n)?yh(n):(t=Pm(c,s,a),n.stateNode=t,Yi(n))}return Qe(n),null;case 5:if(fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(t=ee.current,Xs(n))yh(n);else{switch(c=Ll(Pe.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[je]=n,t[nn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Yi(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Pe.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=On,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cm(t.nodeValue,a)),t||Za(n)}else t=Ll(t).createTextNode(s),t[je]=n,n.stateNode=t}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[je]=n}else qs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else gi!==null&&(ef(gi),gi=null),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Qe(n),null;case 4:return Qt(),t===null&&hf(n.stateNode.containerInfo),Qe(n),null;case 10:return ki(n.type),Qe(n),null;case 19:if(It(hn),c=n.memoizedState,c===null)return Qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ho(c,!1);else{if(tn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,ho(c,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return $t(hn,hn.current&1|2),n.child}t=t.sibling}c.tail!==null&&J()>Sl&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return Qe(n),null}else 2*J()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=J(),n.sibling=null,t=hn.current,$t(hn,s?t&1|2:t&1),n):(Qe(n),null);case 22:case 23:return Ii(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&It(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(pn),Qe(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(pn),Qt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return It(hn),null;case 4:return Qt(),null;case 10:return ki(n.type),null;case 22:case 23:return Ii(n),tu(),t!==null&&It(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(pn),null;case 25:return null;default:return null}}function sm(t,n){switch(Kc(n),n.tag){case 3:ki(pn),Qt();break;case 26:case 27:case 5:fe(n);break;case 4:Qt();break;case 13:Ii(n);break;case 19:It(hn);break;case 10:ki(n.type);break;case 22:case 23:Ii(n),tu(),t!==null&&It(Qa);break;case 24:ki(pn)}}var Ov={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,Je=0,Ve=null,Ae=null,Ce=0,ke=0,Zn=null,ji=!1,Xr=!1,ju=!1,Zi=0,tn=0,Ea=0,sr=0,Zu=0,ci=0,qr=0,po=null,Ri=null,Ku=!1,Qu=0,Sl=1/0,Ml=null,ba=null,El=!1,or=null,mo=0,Ju=0,$u=null,go=0,tf=null;function Kn(){if(Je&2&&Ce!==0)return Ce&-Ce;if(H.T!==null){var t=Br;return t!==0?t:cf()}return Ye()}function om(){ci===0&&(ci=!(Ce&536870912)||Ue?ce():536870912);var t=ri.current;return t!==null&&(t.flags|=32),ci}function Pn(t,n,a){(t===Ve&&ke===2||t.cancelPendingCommit!==null)&&(Yr(t,0),Ki(t,Ce,ci,!1)),he(t,a),(!(Je&2)||t!==Ve)&&(t===Ve&&(!(Je&2)&&(sr|=a),tn===4&&Ki(t,Ce,ci,!1)),Ci(t))}function lm(t,n,a){if(Je&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||qt(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&Ki(t,n,0,!1);break}else if(c===6)Ki(t,n,0,!ji);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var w=t;c=po;var z=w.current.memoizedState.isDehydrated;if(z&&(Yr(w,y).flags|=256),y=rf(w,y,!1),y!==2){if(ju&&!z){w.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Ri,Ri=c,f!==null&&ef(f)}c=y}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Ki(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ki(s,n,ci,!ji);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-J(),10<f)){if(Ki(s,n,ci,!ji),Zt(s,0)!==0)break t;s.timeoutHandle=Um(cm.bind(null,s,a,Ri,Ml,Ku,n,ci,sr,qr,ji,2,-0,0),f);break t}cm(s,a,Ri,Ml,Ku,n,ci,sr,qr,ji,0,-0,0)}}break}while(!0);Ci(t)}function ef(t){Ri===null?Ri=t:Ri.push.apply(Ri,t)}function cm(t,n,a,s,c,f,y,w,z,Q,vt,Ct,ct){var gt=n.subtreeFlags;if((gt&8192||(gt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:_x},$p(n),n=xx(),n!==null)){t.cancelPendingCommit=n(gm.bind(null,t,a,s,c,y,w,z,1,Ct,ct)),Ki(t,f,y,!Q);return}gm(t,a,s,c,y,w,z,vt,Ct,ct)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ki(t,n,a,s){n&=~Zu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-L(c),y=1<<f;s[f]=-1,c&=~y}a!==0&&ln(t,a,n)}function bl(){return Je&6?!0:(_o(0),!1)}function nf(){if(Ae!==null){if(ke===0)var t=Ae.return;else t=Ae,Vi=nr=null,lu(t),Pr=null,Ks=0,t=Ae;for(;t!==null;)sm(t.alternate,t),t=t.return;Ae=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ex(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ve=t,Ae=a=Ma(t.current,null),Ce=n,ke=0,Zn=null,ji=!1,Xr=qt(t,n),ju=!1,qr=ci=Zu=sr=Ea=tn=0,Ri=po=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-L(s),f=1<<c;n|=t[c],s&=~f}return Zi=n,jo(),a}function um(t,n){Me=null,H.H=wi,n===js?(n=Th(),ke=3):n===Mh?(n=Th(),ke=4):ke=n===Ep?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,Ae===null&&(tn=1,pl(t,ni(n,t.current)))}function fm(){var t=H.H;return H.H=wi,t===null?wi:t}function dm(){var t=H.A;return H.A=Ov,t}function af(){tn=4,ji||(Ce&4194176)!==Ce&&ri.current!==null||(Xr=!0),!(Ea&134217727)&&!(sr&134217727)||Ve===null||Ki(Ve,Ce,ci,!1)}function rf(t,n,a){var s=Je;Je|=2;var c=fm(),f=dm();(Ve!==t||Ce!==n)&&(Ml=null,Yr(t,n)),n=!1;var y=tn;t:do try{if(ke!==0&&Ae!==null){var w=Ae,z=Zn;switch(ke){case 8:nf(),y=6;break t;case 3:case 2:case 6:ri.current===null&&(n=!0);var Q=ke;if(ke=0,Zn=null,jr(t,w,z,Q),a&&Xr){y=0;break t}break;default:Q=ke,ke=0,Zn=null,jr(t,w,z,Q)}}Bv(),y=tn;break}catch(vt){um(t,vt)}while(!0);return n&&t.shellSuspendCounter++,Vi=nr=null,Je=s,H.H=c,H.A=f,Ae===null&&(Ve=null,Ce=0,jo()),y}function Bv(){for(;Ae!==null;)hm(Ae)}function Fv(t,n){var a=Je;Je|=2;var s=fm(),c=dm();Ve!==t||Ce!==n?(Ml=null,Sl=J()+500,Yr(t,n)):Xr=qt(t,n);t:do try{if(ke!==0&&Ae!==null){n=Ae;var f=Zn;e:switch(ke){case 1:ke=0,Zn=null,jr(t,n,f,1);break;case 2:if(Eh(f)){ke=0,Zn=null,pm(n);break}n=function(){ke===2&&Ve===t&&(ke=7),Ci(t)},f.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Eh(f)?(ke=0,Zn=null,pm(n)):(ke=0,Zn=null,jr(t,n,f,7));break;case 5:var y=null;switch(Ae.tag){case 26:y=Ae.memoizedState;case 5:case 27:var w=Ae;if(!y||km(y)){ke=0,Zn=null;var z=w.sibling;if(z!==null)Ae=z;else{var Q=w.return;Q!==null?(Ae=Q,Tl(Q)):Ae=null}break e}}ke=0,Zn=null,jr(t,n,f,5);break;case 6:ke=0,Zn=null,jr(t,n,f,6);break;case 8:nf(),tn=6;break t;default:throw Error(r(462))}}Iv();break}catch(vt){um(t,vt)}while(!0);return Vi=nr=null,H.H=s,H.A=c,Je=a,Ae!==null?0:(Ve=null,Ce=0,jo(),tn)}function Iv(){for(;Ae!==null&&!Nt();)hm(Ae)}function hm(t){var n=Pp(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Tl(t):Ae=n}function pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cp(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Cp(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:lu(n);default:sm(a,n),n=Ae=im(n,Zi),n=Pp(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Tl(t):Ae=n}function jr(t,n,a,s){Vi=nr=null,lu(n),Pr=null,Ks=0;var c=n.return;try{if(wv(t,c,n,a,Ce)){tn=1,pl(t,ni(a,t.current)),Ae=null;return}}catch(f){if(c!==null)throw Ae=c,f;tn=1,pl(t,ni(a,t.current)),Ae=null;return}n.flags&32768?(Ue||s===1?t=!0:Xr||Ce&536870912?t=!1:(ji=t=!0,(s===2||s===3||s===6)&&(s=ri.current,s!==null&&s.tag===13&&(s.flags|=16384))),mm(n,t)):Tl(n)}function Tl(t){var n=t;do{if(n.flags&32768){mm(n,ji);return}t=n.return;var a=Uv(n.alternate,n,Zi);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=t}while(n!==null);tn===0&&(tn=5)}function mm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,Ae=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=a}while(t!==null);tn=6,Ae=null}function gm(t,n,a,s,c,f,y,w,z,Q){var vt=H.T,Ct=X.p;try{X.p=2,H.T=null,Hv(t,n,a,s,Ct,c,f,y,w,z,Q)}finally{H.T=vt,X.p=Ct}}function Hv(t,n,a,s,c,f,y,w){do Zr();while(or!==null);if(Je&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var Q=z.lanes|z.childLanes;if(Q|=Yc,We(t,s,Q,f,y,w),t===Ve&&(Ae=Ve=null,Ce=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||El||(El=!0,Ju=Q,$u=a,Wv(zt,function(){return Zr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=H.T,H.T=null,f=X.p,X.p=2,y=Je,Je|=4,Cv(t,z),Kp(z,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=z,qp(t,z.alternate,z),tt(),Je=y,X.p=f,H.T=a):t.current=z,El?(El=!1,or=t,mo=s):_m(t,Q),Q=t.pendingLanes,Q===0&&(ba=null),yt(z.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)Q=n[z],c(Q.value,{componentStack:Q.stack});return mo&3&&Zr(),Q=t.pendingLanes,s&4194218&&Q&42?t===tf?go++:(go=0,tf=t):go=0,_o(0),null}function _m(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Zr(){if(or!==null){var t=or,n=Ju;Ju=0;var a=ka(mo),s=H.T,c=X.p;try{if(X.p=32>a?32:a,H.T=null,or===null)var f=!1;else{a=$u,$u=null;var y=or,w=mo;if(or=null,mo=0,Je&6)throw Error(r(331));var z=Je;if(Je|=4,em(y.current),Jp(y,y.current,w,a),Je=z,_o(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Vt,y)}catch{}f=!0}return f}finally{X.p=c,H.T=s,_m(t,n)}}return!1}function vm(t,n,a){n=ni(a,n),n=Mu(t.stateNode,n,2),t=va(t,n,2),t!==null&&(he(t,2),Ci(t))}function Ge(t,n,a){if(t.tag===3)vm(t,t,a);else for(;n!==null;){if(n.tag===3){vm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){t=ni(a,t),a=Sp(2),s=va(n,a,2),s!==null&&(Mp(a,s,n,t),he(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(Ce&a)===a&&(tn===4||tn===3&&(Ce&62914560)===Ce&&300>J()-Qu?!(Je&2)&&Yr(t,0):Zu|=a,qr===Ce&&(qr=0)),Ci(t)}function xm(t,n){n===0&&(n=ye()),t=ua(t,n),t!==null&&(he(t,n),Ci(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),xm(t,a)}function Wv(t,n){return T(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,lr=0;function Ci(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Xv))}function _o(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-L(42|t)+1)-1,f&=c&~(y&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Mm(s,f))}else f=Ce,f=Zt(s,s===Ve?f:0),!(f&3)||qt(s,f)||(a=!0,Mm(s,f));s=s.next}while(a);lf=!1}}function Xv(){wl=of=!1;var t=0;lr!==0&&(tx()&&(t=lr),lr=0);for(var n=J(),a=null,s=Al;s!==null;){var c=s.next,f=ym(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}_o(t)}function ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-L(f),w=1<<y,z=c[y];z===-1?(!(w&a)||w&s)&&(c[y]=_e(w,n)):z<=n&&(t.expiredLanes|=w),f&=~w}if(n=Ve,a=Ce,a=Zt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&ke===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&st(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||qt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&st(s),ka(a)){case 2:case 8:a=ft;break;case 32:a=zt;break;case 268435456:a=xt;break;default:a=zt}return s=Sm.bind(null,t),a=T(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&st(s),t.callbackPriority=2,t.callbackNode=null,2}function Sm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Ce;return s=Zt(t,t===Ve?s:0),s===0?null:(lm(t,s,n),ym(t,J()),t.callbackNode!=null&&t.callbackNode===a?Sm.bind(null,t):null)}function Mm(t,n){if(Zr())return null;lm(t,n,!0)}function qv(t){nx(function(){Je&6?T(it,t):t()})}function cf(){return lr===0&&(lr=ce()),lr}function Em(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function bm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Em((c[nn]||null).action),y=s.submitter;y&&(n=(n=y[nn]||null)?Em(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var w=new Xo("action","action",null,s,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var z=y?bm(c,y):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(w.preventDefault(),z=y?bm(c,y):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<gh.length;uf++){var ff=gh[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);mi(jv,"on"+Zv)}mi(fh,"onAnimationEnd"),mi(dh,"onAnimationIteration"),mi(hh,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(dv,"onTransitionRun"),mi(hv,"onTransitionStart"),mi(pv,"onTransitionCancel"),mi(ph,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Tm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var w=s[y],z=w.instance,Q=w.currentTarget;if(w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=Q;try{f(c)}catch(vt){hl(vt)}c.currentTarget=null,f=z}else for(y=0;y<s.length;y++){if(w=s[y],z=w.instance,Q=w.currentTarget,w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=Q;try{f(c)}catch(vt){hl(vt)}c.currentTarget=null,f=z}}}}function we(t,n){var a=n[kt];a===void 0&&(a=n[kt]=new Set);var s=t+"__bubble";a.has(s)||(Am(n,t,2,!1),a.add(s))}function df(t,n,a){var s=0;n&&(s|=4),Am(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Rl]){t[Rl]=!0,ae.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,df("selectionchange",!1,n))}}function Am(t,n,a,s){switch(Zm(n)){case 2:var c=Mx;break;case 8:c=Ex;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(y===4)for(y=s.return;y!==null;){var z=y.tag;if((z===3||z===4)&&(z=y.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;y=y.return}for(;w!==null;){if(y=q(w),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){s=f=y;continue t}w=w.parentNode}}s=s.return}Gd(function(){var Q=f,vt=Uc(a),Ct=[];t:{var ct=mh.get(t);if(ct!==void 0){var gt=Xo,se=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":gt=k0;break;case"focusin":se="focus",gt=Fc;break;case"focusout":se="blur",gt=Fc;break;case"beforeblur":case"afterblur":gt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=q0;break;case fh:case dh:case hh:gt=O0;break;case ph:gt=j0;break;case"scroll":case"scrollend":gt=C0;break;case"wheel":gt=K0;break;case"copy":case"cut":case"paste":gt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=qd;break;case"toggle":case"beforetoggle":gt=J0}var me=(n&4)!==0,en=!me&&(t==="scroll"||t==="scrollend"),et=me?ct!==null?ct+"Capture":null:ct;me=[];for(var Y=Q,rt;Y!==null;){var Mt=Y;if(rt=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||rt===null||et===null||(Mt=zs(Y,et),Mt!=null&&me.push(xo(Y,Mt,rt))),en)break;Y=Y.return}0<me.length&&(ct=new gt(ct,se,null,a,vt),Ct.push({event:ct,listeners:me}))}}if(!(n&7)){t:{if(ct=t==="mouseover"||t==="pointerover",gt=t==="mouseout"||t==="pointerout",ct&&a!==Lc&&(se=a.relatedTarget||a.fromElement)&&(q(se)||se[Ot]))break t;if((gt||ct)&&(ct=vt.window===vt?vt:(ct=vt.ownerDocument)?ct.defaultView||ct.parentWindow:window,gt?(se=a.relatedTarget||a.toElement,gt=Q,se=se?q(se):null,se!==null&&(en=at(se),me=se.tag,se!==en||me!==5&&me!==27&&me!==6)&&(se=null)):(gt=null,se=Q),gt!==se)){if(me=Wd,Mt="onMouseLeave",et="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(me=qd,Mt="onPointerLeave",et="onPointerEnter",Y="pointer"),en=gt==null?ct:Ut(gt),rt=se==null?ct:Ut(se),ct=new me(Mt,Y+"leave",gt,a,vt),ct.target=en,ct.relatedTarget=rt,Mt=null,q(vt)===Q&&(me=new me(et,Y+"enter",se,a,vt),me.target=rt,me.relatedTarget=en,Mt=me),en=Mt,gt&&se)e:{for(me=gt,et=se,Y=0,rt=me;rt;rt=Qr(rt))Y++;for(rt=0,Mt=et;Mt;Mt=Qr(Mt))rt++;for(;0<Y-rt;)me=Qr(me),Y--;for(;0<rt-Y;)et=Qr(et),rt--;for(;Y--;){if(me===et||et!==null&&me===et.alternate)break e;me=Qr(me),et=Qr(et)}me=null}else me=null;gt!==null&&wm(Ct,ct,gt,me,!1),se!==null&&en!==null&&wm(Ct,en,se,me,!0)}}t:{if(ct=Q?Ut(Q):window,gt=ct.nodeName&&ct.nodeName.toLowerCase(),gt==="select"||gt==="input"&&ct.type==="file")var Jt=th;else if(Jd(ct))if(eh)Jt=lv;else{Jt=sv;var be=rv}else gt=ct.nodeName,!gt||gt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?Q&&Dc(Q.elementType)&&(Jt=th):Jt=ov;if(Jt&&(Jt=Jt(t,Q))){$d(Ct,Jt,a,vt);break t}be&&be(t,ct,Q),t==="focusout"&&Q&&ct.type==="number"&&Q.memoizedProps.value!=null&&Cc(ct,"number",ct.value)}switch(be=Q?Ut(Q):window,t){case"focusin":(Jd(be)||be.contentEditable==="true")&&(Cr=be,Wc=Q,Ws=null);break;case"focusout":Ws=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,ch(Ct,a,vt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":ch(Ct,a,vt)}var le;if(Hc)t:{switch(t){case"compositionstart":var de="onCompositionStart";break t;case"compositionend":de="onCompositionEnd";break t;case"compositionupdate":de="onCompositionUpdate";break t}de=void 0}else Rr?Kd(t,a)&&(de="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Yd&&a.locale!=="ko"&&(Rr||de!=="onCompositionStart"?de==="onCompositionEnd"&&Rr&&(le=Vd()):(ca=vt,Pc="value"in ca?ca.value:ca.textContent,Rr=!0)),be=Cl(Q,de),0<be.length&&(de=new Xd(de,t,null,a,vt),Ct.push({event:de,listeners:be}),le?de.data=le:(le=Qd(a),le!==null&&(de.data=le)))),(le=tv?ev(t,a):nv(t,a))&&(de=Cl(Q,"onBeforeInput"),0<de.length&&(be=new Xd("onBeforeInput","beforeinput",null,a,vt),Ct.push({event:be,listeners:de}),be.data=le)),Yv(Ct,t,Q,a,vt)}Tm(Ct,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(xo(t,c,f)),c=zs(t,n),c!=null&&s.push(xo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wm(t,n,a,s,c){for(var f=n._reactName,y=[];a!==null&&a!==s;){var w=a,z=w.alternate,Q=w.stateNode;if(w=w.tag,z!==null&&z===s)break;w!==5&&w!==26&&w!==27||Q===null||(z=Q,c?(Q=zs(a,f),Q!=null&&y.unshift(xo(a,Q,z))):c||(Q=zs(a,f),Q!=null&&y.push(xo(a,Q,z)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Cm(t,n){return n=Rm(n),Rm(t)===n}function Dl(){}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":Be(t,"class",s);break;case"tabIndex":Be(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(t,a,s);break;case"style":Id(t,s,f);break;case"data":if(n!=="object"){Be(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&we("scroll",t);break;case"onScrollEnd":s!=null&&we("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":we("beforetoggle",t),we("toggle",t),pi(t,"popover",s);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":pi(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,pi(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Id(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&we("scroll",t);break;case"onScrollEnd":s!=null&&we("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!re.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):pi(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",t),we("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,y,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":we("invalid",t);var w=f=y=c=null,z=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var vt=a[s];if(vt!=null)switch(s){case"name":c=vt;break;case"type":y=vt;break;case"checked":z=vt;break;case"defaultChecked":Q=vt;break;case"value":f=vt;break;case"defaultValue":w=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:Ie(t,n,s,vt,a,null)}}Ps(t,f,w,z,Q,y,c,!1),rn(t);return;case"select":we("invalid",t),s=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":y=w;break;case"multiple":s=w;default:Ie(t,n,c,w,a,null)}n=f,a=y,t.multiple=!!s,n!=null?br(t,!!s,n,!1):a!=null&&br(t,!!s,a,!0);return;case"textarea":we("invalid",t),f=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(w=a[y],w!=null))switch(y){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ie(t,n,y,w,a,null)}Bd(t,s,c,f),rn(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(t,n,z,s,a,null)}return;case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":we("load",t);break;case"video":case"audio":for(s=0;s<vo.length;s++)we(vo[s],t);break;case"image":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"embed":case"source":case"link":we("error",t),we("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,Q,s,a,null)}return;default:if(Dc(n)){for(vt in a)a.hasOwnProperty(vt)&&(s=a[vt],s!==void 0&&mf(t,n,vt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Ie(t,n,w,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,w=null,z=null,Q=null,vt=null;for(gt in a){var Ct=a[gt];if(a.hasOwnProperty(gt)&&Ct!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":z=Ct;default:s.hasOwnProperty(gt)||Ie(t,n,gt,null,s,Ct)}}for(var ct in s){var gt=s[ct];if(Ct=a[ct],s.hasOwnProperty(ct)&&(gt!=null||Ct!=null))switch(ct){case"type":f=gt;break;case"name":c=gt;break;case"checked":Q=gt;break;case"defaultChecked":vt=gt;break;case"value":y=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:gt!==Ct&&Ie(t,n,ct,gt,s,Ct)}}Os(t,y,w,z,Q,vt,f,c);return;case"select":gt=y=w=ct=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":gt=z;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":ct=f;break;case"defaultValue":w=f;break;case"multiple":y=f;default:f!==z&&Ie(t,n,c,f,s,z)}n=w,a=y,s=gt,ct!=null?br(t,!!a,ct,!1):!!s!=!!a&&(n!=null?br(t,!!a,n,!0):br(t,!!a,a?[]:"",!1));return;case"textarea":gt=ct=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ie(t,n,w,null,s,c)}for(y in s)if(c=s[y],f=a[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":ct=c;break;case"defaultValue":gt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,y,c,s,f)}zd(t,ct,gt);return;case"option":for(var se in a)if(ct=a[se],a.hasOwnProperty(se)&&ct!=null&&!s.hasOwnProperty(se))switch(se){case"selected":t.selected=!1;break;default:Ie(t,n,se,null,s,ct)}for(z in s)if(ct=s[z],gt=a[z],s.hasOwnProperty(z)&&ct!==gt&&(ct!=null||gt!=null))switch(z){case"selected":t.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:Ie(t,n,z,ct,s,gt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)ct=a[me],a.hasOwnProperty(me)&&ct!=null&&!s.hasOwnProperty(me)&&Ie(t,n,me,null,s,ct);for(Q in s)if(ct=s[Q],gt=a[Q],s.hasOwnProperty(Q)&&ct!==gt&&(ct!=null||gt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ie(t,n,Q,ct,s,gt)}return;default:if(Dc(n)){for(var en in a)ct=a[en],a.hasOwnProperty(en)&&ct!==void 0&&!s.hasOwnProperty(en)&&mf(t,n,en,void 0,s,ct);for(vt in s)ct=s[vt],gt=a[vt],!s.hasOwnProperty(vt)||ct===gt||ct===void 0&&gt===void 0||mf(t,n,vt,ct,s,gt);return}}for(var et in a)ct=a[et],a.hasOwnProperty(et)&&ct!=null&&!s.hasOwnProperty(et)&&Ie(t,n,et,null,s,ct);for(Ct in s)ct=s[Ct],gt=a[Ct],!s.hasOwnProperty(Ct)||ct===gt||ct==null&&gt==null||Ie(t,n,Ct,ct,s,gt)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function tx(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(ix)}:Um;function ix(t){setTimeout(function(){throw t})}function yf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),wo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);wo(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),$(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ax(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[V])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function rx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Pm(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ui=new Map,zm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Qi=X.d;X.d={f:sx,r:ox,D:lx,C:cx,L:ux,m:fx,X:hx,S:dx,M:px};function sx(){var t=Qi.f(),n=bl();return t||n}function ox(t){var n=wt(t);n!==null&&n.tag===5&&n.type==="form"?cp(n):Qi.r(t)}var Jr=typeof document>"u"?null:document;function Bm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zm.has(c)||(zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),Ht(n),s.head.appendChild(n)))}}function lx(t){Qi.D(t),Bm("dns-prefetch",t,null)}function cx(t,n){Qi.C(t,n),Bm("preconnect",t,n)}function ux(t,n,a){Qi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ui.has(f)||(t=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),Tn(n,"link",t),Ht(n),s.head.appendChild(n)))}}function fx(t,n){Qi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ui.has(f)&&(t=E({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),Tn(s,"link",t),Ht(s),a.head.appendChild(s)}}}function dx(t,n,a){Qi.S(t,n,a);var s=Jr;if(s&&t){var c=Xt(s).hoistableStyles,f=$r(t);n=n||"default";var y=c.get(f);if(!y){var w={loading:0,preload:null};if(y=s.querySelector(yo(f)))w.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Mf(t,a);var z=y=s.createElement("link");Ht(z),Tn(z,"link",t),z._p=new Promise(function(Q,vt){z.onload=Q,z.onerror=vt}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:w},c.set(f,y)}}}function hx(t,n){Qi.X(t,n);var a=Jr;if(a&&t){var s=Xt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=E({src:t,async:!0},n),(n=ui.get(c))&&Ef(t,n),f=a.createElement("script"),Ht(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function px(t,n){Qi.M(t,n);var a=Jr;if(a&&t){var s=Xt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=E({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Ef(t,n),f=a.createElement("script"),Ht(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Fm(t,n,a,s){var c=(c=Pe.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=Xt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=Xt(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(yo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||mx(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=Xt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Im(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function mx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Ht(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function So(t){return"script[async]"+t}function Hm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Ht(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ht(s),Tn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,Ht(f),f;s=Im(a),(c=ui.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),Ht(f);var y=f;return y._p=new Promise(function(w,z){y.onload=w,y.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(So(f)))?(n.instance=c,Ht(c),c):(s=a,(c=ui.get(f))&&(s=E({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ht(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var w=s[y];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Gm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[V]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var w=s.get(y);w?w.push(f):s.set(y,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Mo=null;function _x(){}function vx(t,n,a){if(Mo===null)throw Error(r(475));var s=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(yo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Ht(f);return}f=t.ownerDocument||t,a=Im(a),(c=ui.get(c))&&Mf(a,c),f=f.createElement("link"),Ht(f);var y=f;y._p=new Promise(function(w,z){y.onload=w,y.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function xx(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(yx,t),zl=null,Pl.call(t))}function yx(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,c),a.set(y,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function Sx(t,n,a,s,c,f,y,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Wm(t,n,a,s,c,f,y,w,z,Q,vt,Ct){return t=new Sx(t,n,a,y,w,z,Q,Ct),n=1,f===!0&&(n|=24),f=li(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Xm(t){return t?(t=Ur,t):Ur}function qm(t,n,a,s,c,f){c=Xm(c),s.context===null?s.context=c:s.pendingContext=c,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(t,s,n),a!==null&&(Pn(a,t,n),ro(a,t,n))}function Ym(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Tf(t,n){Ym(t,n),(t=t.alternate)&&Ym(t,n)}function jm(t){if(t.tag===13){var n=ua(t,67108864);n!==null&&Pn(n,t,67108864),Tf(t,67108864)}}var Bl=!0;function Mx(t,n,a,s){var c=H.T;H.T=null;var f=X.p;try{X.p=2,Af(t,n,a,s)}finally{X.p=f,H.T=c}}function Ex(t,n,a,s){var c=H.T;H.T=null;var f=X.p;try{X.p=8,Af(t,n,a,s)}finally{X.p=f,H.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Km(t,s);else if(Tx(c,t,n,a,s))s.stopPropagation();else if(Km(t,s),n&4&&-1<bx.indexOf(t)){for(;c!==null;){var f=wt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Et(f.pendingLanes);if(y!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var z=1<<31-L(y);w.entanglements[1]|=z,y&=~z}Ci(f),!(Je&6)&&(Sl=J()+500,_o(0))}}break;case 13:w=ua(f,2),w!==null&&Pn(w,f,2),bl(),Tf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=q(t),t!==null){var n=at(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=dt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Zm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ut()){case it:return 2;case ft:return 8;case zt:case Lt:return 32;case xt:return 268435456;default:return 32}default:return 32}}var Cf=!1,Ta=null,Aa=null,wa=null,bo=new Map,To=new Map,Ra=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=wt(n),n!==null&&jm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Tx(t,n,a,s,c){switch(n){case"focusin":return Ta=Ao(Ta,t,n,a,s,c),!0;case"dragenter":return Aa=Ao(Aa,t,n,a,s,c),!0;case"mouseover":return wa=Ao(wa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0}return!1}function Qm(t){var n=q(t.target);if(n!==null){var a=at(n);if(a!==null){if(n=a.tag,n===13){if(n=dt(a),n!==null){t.blockedOn=n,zi(t.priority,function(){if(a.tag===13){var s=Kn(),c=ua(a,s);c!==null&&Pn(c,a,s),Tf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=wt(a),n!==null&&jm(n),t.blockedOn=a,!1;n.shift()}return!0}function Jm(t,n,a){Il(t)&&a.delete(n)}function Ax(){Cf=!1,Ta!==null&&Il(Ta)&&(Ta=null),Aa!==null&&Il(Aa)&&(Aa=null),wa!==null&&Il(wa)&&(wa=null),bo.forEach(Jm),To.forEach(Jm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ax)))}var Gl=null;function $m(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=wt(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(t){function n(z){return Hl(z,t)}Ta!==null&&Hl(Ta,t),Aa!==null&&Hl(Aa,t),wa!==null&&Hl(wa,t),bo.forEach(n),To.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],y=c[nn]||null;if(typeof f=="function")y||$m(a);else if(y){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[nn]||null)w=y.formAction;else if(Rf(c)!==null)continue}else w=y.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),$m(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();qm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),qm(t.current,2,null,t,null,null),bl(),n[Ot]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&Qm(t)}};var tg=e.version;if(tg!=="19.0.0")throw Error(r(527,tg,"19.0.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Z(n),t=t!==null?pt(t):null,t=t===null?null:t.stateNode,t};var wx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:H,findFiberByHostInstance:q,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Vt=kl.inject(wx),Bt=kl}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=_p,f=vp,y=xp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=Wm(t,1,!1,null,null,a,s,c,f,y,w,null),t[Ot]=n.current,hf(t.nodeType===8?t.parentNode:t),new Df(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=_p,y=vp,w=xp,z=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Wm(t,1,!0,n,a??null,s,c,f,y,w,z,Q),n.context=Xm(null),a=n.current,s=Kn(),c=_a(s),c.callback=null,va(a,c,s),n.current.lanes=s,he(n,s),Ci(n),t[Ot]=n.current,hf(t),new Vl(n)},Co.version="19.0.0",Co}var ug;function Bx(){if(ug)return Nf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zx(),Nf.exports}var Fx=Bx();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ix=0,fg=1,Hx=2,W_=1,X_=2,ia=3,Va=0,Wn=1,Li=2,Fa=0,Es=1,md=2,dg=3,hg=4,Gx=5,mr=100,Vx=101,kx=102,pg=103,mg=104,Wx=200,Xx=201,qx=202,Yx=203,gd=204,_d=205,jx=206,Zx=207,Kx=208,Qx=209,Jx=210,$x=211,ty=212,ey=213,ny=214,iy=0,ay=1,ry=2,mc=3,sy=4,oy=5,ly=6,cy=7,Rd=0,uy=1,fy=2,Ia=0,dy=1,hy=2,py=3,my=4,gy=5,_y=6,q_=300,As=301,ws=302,vd=303,xd=304,Ec=306,yd=1e3,Mi=1001,Sd=1002,Fn=1003,gg=1004,Do=1005,kn=1006,Bf=1007,_r=1008,Ha=1009,vy=1010,xy=1011,Cd=1012,Y_=1013,Ba=1014,aa=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,yy=1021,Ei=1023,Sy=1024,My=1025,xr=1026,Rs=1027,Ey=1028,K_=1029,by=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,_g=35840,vg=35841,xg=35842,yg=35843,$_=36196,Sg=37492,Mg=37496,Eg=37808,bg=37809,Tg=37810,Ag=37811,wg=37812,Rg=37813,Cg=37814,Dg=37815,Lg=37816,Ug=37817,Ng=37818,Og=37819,Pg=37820,zg=37821,Vf=36492,Bg=36494,Fg=36495,Ty=36283,Ig=36284,Hg=36285,Gg=36286,t0=3e3,yr=3001,Ay=3200,wy=3201,e0=0,Ry=1,di="",An="srgb",sa="srgb-linear",Dd="display-p3",bc="display-p3-linear",gc="linear",qe="srgb",_c="rec709",vc="p3",is=7680,Vg=519,Cy=512,Dy=513,Ly=514,n0=515,Uy=516,Ny=517,Oy=518,Py=519,kg=35044,Wg="300 es",Md=1035,ra=2e3,xc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function Ld(o,e){return(o%e+e)%e}function zy(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function By(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function Fy(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function Iy(o,e=1){return e-Math.abs(Ld(o,e*2)-e)}function Hy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Gy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Vy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ky(o,e){return o+Math.random()*(e-o)}function Wy(o){return o*(.5-Math.random())}function Xy(o){o!==void 0&&(Xg=o);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qy(o){return o*zo}function Yy(o){return o*Io}function Ed(o){return(o&o-1)===0&&o!==0}function jy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zy(o,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((e+r)/2),g=h((e+r)/2),x=u((e-r)/2),S=h((e-r)/2),M=u((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":o.set(d*g,p*x,p*S,d*m);break;case"YZY":o.set(p*S,d*g,p*x,d*m);break;case"ZXZ":o.set(p*x,p*S,d*g,d*m);break;case"XZX":o.set(d*g,p*A,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*A,d*m);break;case"ZYZ":o.set(p*A,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function xs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const hr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Nn,euclideanModulo:Ld,mapLinear:zy,inverseLerp:By,lerp:Bo,damp:Fy,pingpong:Iy,smoothstep:Hy,smootherstep:Gy,randInt:Vy,randFloat:ky,randFloatSpread:Wy,seededRandom:Xy,degToRad:qy,radToDeg:Yy,isPowerOfTwo:Ed,ceilPowerOfTwo:jy,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Zy,normalize:zn,denormalize:xs};class pe{constructor(e=0,i=0){pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Te{constructor(e,i,r,l,u,h,d,p,m){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],x=r[7],S=r[2],M=r[5],A=r[8],R=l[0],v=l[3],_=l[6],P=l[1],D=l[4],B=l[7],W=l[2],k=l[5],I=l[8];return u[0]=h*R+d*P+p*W,u[3]=h*v+d*D+p*k,u[6]=h*_+d*B+p*I,u[1]=m*R+g*P+x*W,u[4]=m*v+g*D+x*k,u[7]=m*_+g*B+x*I,u[2]=S*R+M*P+A*W,u[5]=S*v+M*D+A*k,u[8]=S*_+M*B+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=g*h-d*m,S=d*p-g*u,M=m*u-h*p,A=i*x+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(l*m-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Te;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ky(){const o=Sc("canvas");return o.style.display="block",o}const qg={};function bs(o){o in qg||(qg[o]=!0,console.warn(o))}const Yg=new Te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jg=new Te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[sa]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[An]:{transfer:qe,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[bc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg)},[Dd]:{transfer:qe,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg).convertLinearToSRGB()}},Qy=new Set([sa,bc]),He={enabled:!0,_workingColorSpace:sa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===di?gc:Wl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Sc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Sc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ts(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $y=0;class Xn extends Er{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Mi,l=Mi,u=kn,h=_r,d=Ei,p=Ha,m=Xn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===yr?An:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?yr:t0}set encoding(e){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?An:di}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=q_;Xn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],x=p[8],S=p[1],M=p[5],A=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(x-R)<.01&&Math.abs(A-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+R)<.1&&Math.abs(A+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,B=(M+1)/2,W=(_+1)/2,k=(g+S)/4,I=(x+R)/4,_t=(A+v)/4;return D>B&&D>W?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=k/r,u=I/r):B>W?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=k/l,u=_t/l):W<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(W),r=I/u,l=_t/u),this.set(r,l,u,i),this}let P=Math.sqrt((v-A)*(v-A)+(x-R)*(x-R)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(v-A)/P,this.y=(x-R)/P,this.z=(S-g)/P,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tS extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===yr?An:di),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends tS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eS extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(x!==R||p!==S||m!==M||g!==A){let v=1-d;const _=p*S+m*M+g*A+x*R,P=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const W=Math.sqrt(D),k=Math.atan2(W,_*P);v=Math.sin(v*k)/W,d=Math.sin(d*k)/W}const B=d*P;if(p=p*v+S*B,m=m*v+M*B,g=g*v+A*B,x=x*v+R*B,v===1-d){const W=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=W,m*=W,g*=W,x*=W}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*x+p*M-m*S,e[i+1]=p*A+g*S+m*x-d*M,e[i+2]=m*A+g*M+d*S-p*x,e[i+3]=g*A-d*x-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),x=d(u/2),S=p(r/2),M=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=S*g*x+m*M*A,this._y=m*M*x-S*g*A,this._z=m*g*A+S*M*x,this._w=m*g*x-S*M*A;break;case"YXZ":this._x=S*g*x+m*M*A,this._y=m*M*x-S*g*A,this._z=m*g*A-S*M*x,this._w=m*g*x+S*M*A;break;case"ZXY":this._x=S*g*x-m*M*A,this._y=m*M*x+S*g*A,this._z=m*g*A+S*M*x,this._w=m*g*x-S*M*A;break;case"ZYX":this._x=S*g*x-m*M*A,this._y=m*M*x+S*g*A,this._z=m*g*A-S*M*x,this._w=m*g*x+S*M*A;break;case"YZX":this._x=S*g*x+m*M*A,this._y=m*M*x+S*g*A,this._z=m*g*A-S*M*x,this._w=m*g*x-S*M*A;break;case"XZY":this._x=S*g*x-m*M*A,this._y=m*M*x-S*g*A,this._z=m*g*A+S*M*x,this._w=m*g*x+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],x=i[10],S=r+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+p*m+h*x-d*g,this.y=r+p*g+d*m-u*x,this.z=l+p*x+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new j,Zg=new Mr;class Ho{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ql.subVectors(this.max,Lo),rs.subVectors(e.a,Lo),ss.subVectors(e.b,Lo),os.subVectors(e.c,Lo),Da.subVectors(ss,rs),La.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-Da.z,Da.y,0,-La.z,La.y,0,-cr.z,cr.y,Da.z,0,-Da.x,La.z,0,-La.x,cr.z,0,-cr.x,-Da.y,Da.x,0,-La.y,La.x,0,-cr.y,cr.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(Da,La),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new j,new j,new j,new j,new j,new j,new j,new j],xi=new j,Xl=new Ho,rs=new j,ss=new j,os=new j,Da=new j,La=new j,cr=new j,Lo=new j,ql=new j,Yl=new j,ur=new j;function Yf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ur.fromArray(o,u);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const nS=new Ho,Uo=new j,jf=new j;class Tc{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(jf)),this.expandByPoint(Uo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new j,Zf=new j,jl=new j,Ua=new j,Kf=new j,Zl=new j,Qf=new j;class Ud{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Ua.dot(this.direction),p=-Ua.dot(jl),m=Ua.lengthSq(),g=Math.abs(1-h*h);let x,S,M,A;if(g>0)if(x=h*p-d,S=h*d-p,A=u*g,x>=0)if(S>=-A)if(S<=A){const R=1/g;x*=R,S*=R,M=x*(x+h*S+2*d)+S*(h*x+S+2*p)+m}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;else S<=-A?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m):S<=A?(x=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Zf).addScaledVector(jl,S),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,p=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,p=(e.min.z-S.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,e);const p=d*this.direction.dot(Zl.crossVectors(Ua,Zl));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Ua));if(m<0||p+m>h)return null;const g=-d*Ua.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,r,l,u,h,d,p,m,g,x,S,M,A,R,v){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,x,S,M,A,R,v)}set(e,i,r,l,u,h,d,p,m,g,x,S,M,A,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=S,_[3]=M,_[7]=A,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*x,A=d*g,R=d*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+A*m,i[5]=S-R*m,i[9]=-d*p,i[2]=R-S*m,i[6]=A+M*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,M=p*x,A=m*g,R=m*x;i[0]=S+R*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=R+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,M=p*x,A=m*g,R=m*x;i[0]=S-R*d,i[4]=-h*x,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,M=h*x,A=d*g,R=d*x;i[0]=p*g,i[4]=A*m-M,i[8]=S*m+R,i[1]=p*x,i[5]=R*m+S,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,M=h*m,A=d*p,R=d*m;i[0]=p*g,i[4]=R-S*x,i[8]=A*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*x+A,i[10]=S-R*x}else if(e.order==="XZY"){const S=h*p,M=h*m,A=d*p,R=d*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=S*x+R,i[5]=h*g,i[9]=M*x-A,i[2]=A*x-M,i[6]=d*g,i[10]=R*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iS,e,aS)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Na.crossVectors(r,Qn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Na.crossVectors(r,Qn)),Na.normalize(),Kl.crossVectors(Qn,Na),l[0]=Na.x,l[4]=Kl.x,l[8]=Qn.x,l[1]=Na.y,l[5]=Kl.y,l[9]=Qn.y,l[2]=Na.z,l[6]=Kl.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],x=r[5],S=r[9],M=r[13],A=r[2],R=r[6],v=r[10],_=r[14],P=r[3],D=r[7],B=r[11],W=r[15],k=l[0],I=l[4],_t=l[8],H=l[12],E=l[1],O=l[5],mt=l[9],Rt=l[13],K=l[2],ot=l[6],G=l[10],lt=l[14],at=l[3],dt=l[7],C=l[11],Z=l[15];return u[0]=h*k+d*E+p*K+m*at,u[4]=h*I+d*O+p*ot+m*dt,u[8]=h*_t+d*mt+p*G+m*C,u[12]=h*H+d*Rt+p*lt+m*Z,u[1]=g*k+x*E+S*K+M*at,u[5]=g*I+x*O+S*ot+M*dt,u[9]=g*_t+x*mt+S*G+M*C,u[13]=g*H+x*Rt+S*lt+M*Z,u[2]=A*k+R*E+v*K+_*at,u[6]=A*I+R*O+v*ot+_*dt,u[10]=A*_t+R*mt+v*G+_*C,u[14]=A*H+R*Rt+v*lt+_*Z,u[3]=P*k+D*E+B*K+W*at,u[7]=P*I+D*O+B*ot+W*dt,u[11]=P*_t+D*mt+B*G+W*C,u[15]=P*H+D*Rt+B*lt+W*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],x=e[6],S=e[10],M=e[14],A=e[3],R=e[7],v=e[11],_=e[15];return A*(+u*p*x-l*m*x-u*d*S+r*m*S+l*d*M-r*p*M)+R*(+i*p*M-i*m*S+u*h*S-l*h*M+l*m*g-u*p*g)+v*(+i*m*x-i*d*M-u*h*x+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*x+i*d*S+l*h*x-r*h*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=e[9],S=e[10],M=e[11],A=e[12],R=e[13],v=e[14],_=e[15],P=x*v*m-R*S*m+R*p*M-d*v*M-x*p*_+d*S*_,D=A*S*m-g*v*m-A*p*M+h*v*M+g*p*_-h*S*_,B=g*R*m-A*x*m+A*d*M-h*R*M-g*d*_+h*x*_,W=A*x*p-g*R*p-A*d*S+h*R*S+g*d*v-h*x*v,k=i*P+r*D+l*B+u*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=P*I,e[1]=(R*S*u-x*v*u-R*l*M+r*v*M+x*l*_-r*S*_)*I,e[2]=(d*v*u-R*p*u+R*l*m-r*v*m-d*l*_+r*p*_)*I,e[3]=(x*p*u-d*S*u-x*l*m+r*S*m+d*l*M-r*p*M)*I,e[4]=D*I,e[5]=(g*v*u-A*S*u+A*l*M-i*v*M-g*l*_+i*S*_)*I,e[6]=(A*p*u-h*v*u-A*l*m+i*v*m+h*l*_-i*p*_)*I,e[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*M+i*p*M)*I,e[8]=B*I,e[9]=(A*x*u-g*R*u-A*r*M+i*R*M+g*r*_-i*x*_)*I,e[10]=(h*R*u-A*d*u+A*r*m-i*R*m-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*x*u-g*r*m+i*x*m+h*r*M-i*d*M)*I,e[12]=W*I,e[13]=(g*R*l-A*x*l+A*r*S-i*R*S-g*r*v+i*x*v)*I,e[14]=(A*d*l-h*R*l-A*r*p+i*R*p+h*r*v-i*d*v)*I,e[15]=(h*x*l-g*d*l+g*r*p-i*x*p-h*r*S+i*d*S)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,x=d+d,S=u*m,M=u*g,A=u*x,R=h*g,v=h*x,_=d*x,P=p*m,D=p*g,B=p*x,W=r.x,k=r.y,I=r.z;return l[0]=(1-(R+_))*W,l[1]=(M+B)*W,l[2]=(A-D)*W,l[3]=0,l[4]=(M-B)*k,l[5]=(1-(S+_))*k,l[6]=(v+P)*k,l[7]=0,l[8]=(A+D)*I,l[9]=(v-P)*I,l[10]=(1-(S+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const m=1/u,g=1/h,x=1/d;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ra){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),S=(r+l)/(r-l);let M,A;if(d===ra)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===xc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ra){const p=this.elements,m=1/(i-e),g=1/(r-l),x=1/(h-u),S=(i+e)*m,M=(r+l)*g;let A,R;if(d===ra)A=(h+u)*x,R=-2*x;else if(d===xc)A=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new j,yi=new on,iS=new j(0,0,0),aS=new j(1,1,1),Na=new j,Kl=new j,Qn=new j,Kg=new on,Qg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const Jg=new j,cs=new Mr,ta=new on,Ql=new j,No=new j,sS=new j,oS=new Mr,$g=new j(1,0,0),t_=new j(0,1,0),e_=new j(0,0,1),lS={type:"added"},cS={type:"removed"};class wn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new j,i=new Ac,r=new Mr,l=new j(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new Te}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(No,Ql,this.up):ta.lookAt(Ql,No,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(ta),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new j(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new j,ea=new j,Jf=new j,na=new j,us=new j,fs=new j,n_=new j,$f=new j,td=new j,ed=new j;class Ui{constructor(e=new j,i=new j,r=new j){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Si.subVectors(l,i),ea.subVectors(r,i),Jf.subVectors(e,i);const h=Si.dot(Si),d=Si.dot(ea),p=Si.dot(Jf),m=ea.dot(ea),g=ea.dot(Jf),x=h*m-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(m*p-d*g)*S,A=(h*g-d*p)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,na.x),p.addScaledVector(h,na.y),p.addScaledVector(d,na.z),p)}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),ea.subVectors(e,i),Si.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Si.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);td.subVectors(e,l);const g=us.dot(td),x=fs.dot(td);if(g>=0&&x<=g)return i.copy(l);const S=p*x-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(us,h);ed.subVectors(e,u);const M=us.dot(ed),A=fs.dot(ed);if(A>=0&&M<=A)return i.copy(u);const R=M*m-p*A;if(R<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(fs,d);const v=g*A-M*x;if(v<=0&&x-g>=0&&M-A>=0)return n_.subVectors(u,l),d=(x-g)/(x-g+(M-A)),i.copy(l).addScaledVector(n_,d);const _=1/(v+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=He.workingColorSpace){return this.r=e,this.g=i,this.b=r,He.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=He.workingColorSpace){if(e=Ld(e,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nd(h,u,e+1/3),this.g=nd(h,u,e),this.b=nd(h,u,e-1/3)}return He.toWorkingColorSpace(this,l),this}setStyle(e,i=An){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=An){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return He.fromWorkingColorSpace(Un.copy(this),e),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=He.workingColorSpace){He.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=He.workingColorSpace){return He.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=An){He.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==An?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(Jl);const r=Bo(Oa.h,Jl.h,i),l=Bo(Oa.s,Jl.s,i),u=Bo(Oa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Re;Re.NAMES=l0;let uS=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new j,$l=new pe;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xs(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xs(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xs(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class u0 extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fS=0;const fi=new on,id=new wn,ds=new j,Jn=new Ho,Oo=new Ho,Sn=new j;class Oi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Te().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new hi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(Jn.min,Oo.min),Jn.expandByPoint(Sn),Sn.addVectors(Jn.max,Oo.max),Jn.expandByPoint(Sn)):(Jn.expandByPoint(Oo.min),Jn.expandByPoint(Oo.max))}Jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(ds.fromBufferAttribute(e,m),Sn.add(ds)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let E=0;E<d;E++)m[E]=new j,g[E]=new j;const x=new j,S=new j,M=new j,A=new pe,R=new pe,v=new pe,_=new j,P=new j;function D(E,O,mt){x.fromArray(l,E*3),S.fromArray(l,O*3),M.fromArray(l,mt*3),A.fromArray(h,E*2),R.fromArray(h,O*2),v.fromArray(h,mt*2),S.sub(x),M.sub(x),R.sub(A),v.sub(A);const Rt=1/(R.x*v.y-v.x*R.y);isFinite(Rt)&&(_.copy(S).multiplyScalar(v.y).addScaledVector(M,-R.y).multiplyScalar(Rt),P.copy(M).multiplyScalar(R.x).addScaledVector(S,-v.x).multiplyScalar(Rt),m[E].add(_),m[O].add(_),m[mt].add(_),g[E].add(P),g[O].add(P),g[mt].add(P))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let E=0,O=B.length;E<O;++E){const mt=B[E],Rt=mt.start,K=mt.count;for(let ot=Rt,G=Rt+K;ot<G;ot+=3)D(r[ot+0],r[ot+1],r[ot+2])}const W=new j,k=new j,I=new j,_t=new j;function H(E){I.fromArray(u,E*3),_t.copy(I);const O=m[E];W.copy(O),W.sub(I.multiplyScalar(I.dot(O))).normalize(),k.crossVectors(_t,O);const Rt=k.dot(g[E])<0?-1:1;p[E*4]=W.x,p[E*4+1]=W.y,p[E*4+2]=W.z,p[E*4+3]=Rt}for(let E=0,O=B.length;E<O;++E){const mt=B[E],Rt=mt.start,K=mt.count;for(let ot=Rt,G=Rt+K;ot<G;ot+=3)H(r[ot+0]),H(r[ot+1]),H(r[ot+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new j,u=new j,h=new j,d=new j,p=new j,m=new j,g=new j,x=new j;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),R=e.getX(S+1),v=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,x=d.normalized,S=new m.constructor(p.length*g);let M=0,A=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?M=p[R]*d.data.stride+d.offset:M=p[R]*g;for(let _=0;_<g;_++)S[A++]=m[M++]}return new Ni(S,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,x=m.length;g<x;g++){const S=m[g],M=e(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,S=m.length;x<S;x++){const M=m[x];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],x=u[m];for(let S=0,M=x.length;S<M;S++)g.push(x[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new on,fr=new Ud,tc=new Tc,a_=new j,hs=new j,ps=new j,ms=new j,ad=new j,ec=new j,nc=new pe,ic=new pe,ac=new pe,r_=new j,s_=new j,o_=new j,rc=new j,sc=new j;class ti extends wn{constructor(e=new Oi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],x=u[p];g!==0&&(ad.fromBufferAttribute(x,e),h?ec.addScaledVector(ad,g):ec.addScaledVector(ad.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(tc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(tc,a_)===null||fr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const v=S[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),D=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,W=D;B<W;B+=3){const k=d.getX(B),I=d.getX(B+1),_t=d.getX(B+2);l=oc(this,_,e,r,m,g,x,k,I,_t),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=A,_=R;v<_;v+=3){const P=d.getX(v),D=d.getX(v+1),B=d.getX(v+2);l=oc(this,h,e,r,m,g,x,P,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const v=S[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,W=D;B<W;B+=3){const k=B,I=B+1,_t=B+2;l=oc(this,_,e,r,m,g,x,k,I,_t),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=A,_=R;v<_;v+=3){const P=v,D=v+1,B=v+2;l=oc(this,h,e,r,m,g,x,P,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function dS(o,e,i,r,l,u,h,d){let p;if(e.side===Wn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Va,d),p===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,hs),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=dS(o,e,i,r,hs,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,d),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Ui.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new pe)),u&&(nc.fromBufferAttribute(u,d),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Ui.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new pe),g.uv2=g.uv1),h&&(r_.fromBufferAttribute(h,d),s_.fromBufferAttribute(h,p),o_.fromBufferAttribute(h,m),g.normal=Ui.getInterpolation(rc,hs,ps,ms,r_,s_,o_,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new j,materialIndex:0};Ui.getNormal(hs,ps,ms,x.normal),g.face=x}return g}class Ga extends Oi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],x=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new hi(m,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(x,2));function A(R,v,_,P,D,B,W,k,I,_t,H){const E=B/I,O=W/_t,mt=B/2,Rt=W/2,K=k/2,ot=I+1,G=_t+1;let lt=0,at=0;const dt=new j;for(let C=0;C<G;C++){const Z=C*O-Rt;for(let pt=0;pt<ot;pt++){const Dt=pt*E-mt;dt[R]=Dt*P,dt[v]=Z*D,dt[_]=K,m.push(dt.x,dt.y,dt.z),dt[R]=0,dt[v]=0,dt[_]=k>0?1:-1,g.push(dt.x,dt.y,dt.z),x.push(pt/I),x.push(1-C/_t),lt+=1}}for(let C=0;C<_t;C++)for(let Z=0;Z<I;Z++){const pt=S+Z+ot*C,Dt=S+Z+ot*(C+1),X=S+(Z+1)+ot*(C+1),ht=S+(Z+1)+ot*C;p.push(pt,Dt,ht),p.push(Dt,X,ht),at+=6}d.addGroup(M,at,H),M+=at,S+=lt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function hS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function d0(o){return o.getRenderTarget()===null?o.outputColorSpace:He.workingColorSpace}const pS={clone:Cs,merge:Bn};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oa extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=hS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new j,l_=new pe,c_=new pe;class $n extends h0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _S extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new $n(gs,_s,e,i);u.layers=this.layers,this.add(u);const h=new $n(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new $n(gs,_s,e,i);d.layers=this.layers,this.add(d);const p=new $n(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new $n(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class p0 extends Xn{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vS extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?An:di),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ga(5,5,5),u=new oa({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new ti(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=kn),new _S(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const rd=new j,xS=new j,yS=new Te;class za{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rd.subVectors(r,i).cross(xS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yS.getNormalMatrix(e),l=this.coplanarPoint(rd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Tc,lc=new j;class Nd{constructor(e=new za,i=new za,r=new za,l=new za,u=new za,h=new za){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ra){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],x=l[6],S=l[7],M=l[8],A=l[9],R=l[10],v=l[11],_=l[12],P=l[13],D=l[14],B=l[15];if(r[0].setComponents(p-u,S-m,v-M,B-_).normalize(),r[1].setComponents(p+u,S+m,v+M,B+_).normalize(),r[2].setComponents(p+h,S+g,v+A,B+P).normalize(),r[3].setComponents(p-h,S-g,v-A,B-P).normalize(),r[4].setComponents(p-d,S-x,v-R,B-D).normalize(),i===ra)r[5].setComponents(p+d,S+x,v+R,B+D).normalize();else if(i===xc)r[5].setComponents(d,x,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SS(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const x=m.array,S=m.usage,M=x.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,x,S),m.onUploadCallback();let R;if(x instanceof Float32Array)R=o.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)R=o.SHORT;else if(x instanceof Uint32Array)R=o.UNSIGNED_INT;else if(x instanceof Int32Array)R=o.INT;else if(x instanceof Int8Array)R=o.BYTE;else if(x instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:A,type:R,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,x){const S=g.array,M=g._updateRange,A=g.updateRanges;if(o.bindBuffer(x,m),M.count===-1&&A.length===0&&o.bufferSubData(x,0,S),A.length!==0){for(let R=0,v=A.length;R<v;R++){const _=A[R];i?o.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):o.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):o.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=r.get(m);(!S||S.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);if(x===void 0)r.set(m,l(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,m,g),x.version=m.version}}return{get:h,remove:d,update:p}}class wc extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,x=e/d,S=i/p,M=[],A=[],R=[],v=[];for(let _=0;_<g;_++){const P=_*S-h;for(let D=0;D<m;D++){const B=D*x-u;A.push(B,-P,0),R.push(0,0,1),v.push(D/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const D=P+m*_,B=P+m*(_+1),W=P+1+m*(_+1),k=P+1+m*_;M.push(D,B,k),M.push(B,W,k)}this.setIndex(M),this.setAttribute("position",new hi(A,3)),this.setAttribute("normal",new hi(R,3)),this.setAttribute("uv",new hi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var MS=`#ifdef USE_ALPHAHASH
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
}`,Se={alphahash_fragment:MS,alphahash_pars_fragment:ES,alphamap_fragment:bS,alphamap_pars_fragment:TS,alphatest_fragment:AS,alphatest_pars_fragment:wS,aomap_fragment:RS,aomap_pars_fragment:CS,batching_pars_vertex:DS,batching_vertex:LS,begin_vertex:US,beginnormal_vertex:NS,bsdfs:OS,iridescence_fragment:PS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:HS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:kS,color_vertex:WS,common:XS,cube_uv_reflection_fragment:qS,defaultnormal_vertex:YS,displacementmap_pars_vertex:jS,displacementmap_vertex:ZS,emissivemap_fragment:KS,emissivemap_pars_fragment:QS,colorspace_fragment:JS,colorspace_pars_fragment:$S,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:xM,lights_physical_fragment:yM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:bM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:yE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:bE,cube_vert:TE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tb},Gt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Di={basic:{uniforms:Bn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Bn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Bn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Bn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Bn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Bn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Bn([Gt.points,Gt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Bn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Bn([Gt.common,Gt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Bn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Bn([Gt.sprite,Gt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Bn([Gt.common,Gt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Bn([Gt.lights,Gt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Di.physical={uniforms:Bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const cc={r:0,b:0,g:0};function eb(o,e,i,r,l,u,h){const d=new Re(0);let p=u===!0?0:1,m,g,x=null,S=0,M=null;function A(v,_){let P=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:e).get(D)),D===null?R(d,p):D&&D.isColor&&(R(D,1),P=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Ec)?(g===void 0&&(g=new ti(new Ga(1,1,1),new oa({name:"BackgroundCubeMaterial",uniforms:Cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=He.getTransfer(D.colorSpace)!==qe,(x!==D||S!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=D,S=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ti(new wc(2,2),new oa({name:"BackgroundMaterial",uniforms:Cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=He.getTransfer(D.colorSpace)!==qe,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=D,S=D.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(cc,d0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,R(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(d,p)},render:A}}function nb(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function x(K,ot,G,lt,at){let dt=!1;if(h){const C=R(lt,G,ot);m!==C&&(m=C,M(m.object)),dt=_(K,lt,G,at),dt&&P(K,lt,G,at)}else{const C=ot.wireframe===!0;(m.geometry!==lt.id||m.program!==G.id||m.wireframe!==C)&&(m.geometry=lt.id,m.program=G.id,m.wireframe=C,dt=!0)}at!==null&&i.update(at,o.ELEMENT_ARRAY_BUFFER),(dt||g)&&(g=!1,_t(K,ot,G,lt),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(at).buffer))}function S(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(K){return r.isWebGL2?o.bindVertexArray(K):u.bindVertexArrayOES(K)}function A(K){return r.isWebGL2?o.deleteVertexArray(K):u.deleteVertexArrayOES(K)}function R(K,ot,G){const lt=G.wireframe===!0;let at=d[K.id];at===void 0&&(at={},d[K.id]=at);let dt=at[ot.id];dt===void 0&&(dt={},at[ot.id]=dt);let C=dt[lt];return C===void 0&&(C=v(S()),dt[lt]=C),C}function v(K){const ot=[],G=[],lt=[];for(let at=0;at<l;at++)ot[at]=0,G[at]=0,lt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:G,attributeDivisors:lt,object:K,attributes:{},index:null}}function _(K,ot,G,lt){const at=m.attributes,dt=ot.attributes;let C=0;const Z=G.getAttributes();for(const pt in Z)if(Z[pt].location>=0){const X=at[pt];let ht=dt[pt];if(ht===void 0&&(pt==="instanceMatrix"&&K.instanceMatrix&&(ht=K.instanceMatrix),pt==="instanceColor"&&K.instanceColor&&(ht=K.instanceColor)),X===void 0||X.attribute!==ht||ht&&X.data!==ht.data)return!0;C++}return m.attributesNum!==C||m.index!==lt}function P(K,ot,G,lt){const at={},dt=ot.attributes;let C=0;const Z=G.getAttributes();for(const pt in Z)if(Z[pt].location>=0){let X=dt[pt];X===void 0&&(pt==="instanceMatrix"&&K.instanceMatrix&&(X=K.instanceMatrix),pt==="instanceColor"&&K.instanceColor&&(X=K.instanceColor));const ht={};ht.attribute=X,X&&X.data&&(ht.data=X.data),at[pt]=ht,C++}m.attributes=at,m.attributesNum=C,m.index=lt}function D(){const K=m.newAttributes;for(let ot=0,G=K.length;ot<G;ot++)K[ot]=0}function B(K){W(K,0)}function W(K,ot){const G=m.newAttributes,lt=m.enabledAttributes,at=m.attributeDivisors;G[K]=1,lt[K]===0&&(o.enableVertexAttribArray(K),lt[K]=1),at[K]!==ot&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](K,ot),at[K]=ot)}function k(){const K=m.newAttributes,ot=m.enabledAttributes;for(let G=0,lt=ot.length;G<lt;G++)ot[G]!==K[G]&&(o.disableVertexAttribArray(G),ot[G]=0)}function I(K,ot,G,lt,at,dt,C){C===!0?o.vertexAttribIPointer(K,ot,G,at,dt):o.vertexAttribPointer(K,ot,G,lt,at,dt)}function _t(K,ot,G,lt){if(r.isWebGL2===!1&&(K.isInstancedMesh||lt.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const at=lt.attributes,dt=G.getAttributes(),C=ot.defaultAttributeValues;for(const Z in dt){const pt=dt[Z];if(pt.location>=0){let Dt=at[Z];if(Dt===void 0&&(Z==="instanceMatrix"&&K.instanceMatrix&&(Dt=K.instanceMatrix),Z==="instanceColor"&&K.instanceColor&&(Dt=K.instanceColor)),Dt!==void 0){const X=Dt.normalized,ht=Dt.itemSize,Tt=i.get(Dt);if(Tt===void 0)continue;const Yt=Tt.buffer,Ft=Tt.type,It=Tt.bytesPerElement,$t=r.isWebGL2===!0&&(Ft===o.INT||Ft===o.UNSIGNED_INT||Dt.gpuType===Y_);if(Dt.isInterleavedBufferAttribute){const ee=Dt.data,nt=ee.stride,Pe=Dt.offset;if(ee.isInstancedInterleavedBuffer){for(let ne=0;ne<pt.locationSize;ne++)W(pt.location+ne,ee.meshPerAttribute);K.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<pt.locationSize;ne++)B(pt.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ne=0;ne<pt.locationSize;ne++)I(pt.location+ne,ht/pt.locationSize,Ft,X,nt*It,(Pe+ht/pt.locationSize*ne)*It,$t)}else{if(Dt.isInstancedBufferAttribute){for(let ee=0;ee<pt.locationSize;ee++)W(pt.location+ee,Dt.meshPerAttribute);K.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let ee=0;ee<pt.locationSize;ee++)B(pt.location+ee);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ee=0;ee<pt.locationSize;ee++)I(pt.location+ee,ht/pt.locationSize,Ft,X,ht*It,ht/pt.locationSize*ee*It,$t)}}else if(C!==void 0){const X=C[Z];if(X!==void 0)switch(X.length){case 2:o.vertexAttrib2fv(pt.location,X);break;case 3:o.vertexAttrib3fv(pt.location,X);break;case 4:o.vertexAttrib4fv(pt.location,X);break;default:o.vertexAttrib1fv(pt.location,X)}}}}k()}function H(){mt();for(const K in d){const ot=d[K];for(const G in ot){const lt=ot[G];for(const at in lt)A(lt[at].object),delete lt[at];delete ot[G]}delete d[K]}}function E(K){if(d[K.id]===void 0)return;const ot=d[K.id];for(const G in ot){const lt=ot[G];for(const at in lt)A(lt[at].object),delete lt[at];delete ot[G]}delete d[K.id]}function O(K){for(const ot in d){const G=d[ot];if(G[K.id]===void 0)continue;const lt=G[K.id];for(const at in lt)A(lt[at].object),delete lt[at];delete G[K.id]}}function mt(){Rt(),g=!0,m!==p&&(m=p,M(m.object))}function Rt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:mt,resetDefaultState:Rt,dispose:H,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:B,disableUnusedAttributes:k}}function ib(o,e,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function p(g,x,S){if(S===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,g,x,S),i.update(x,u,S)}function m(g,x,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<S;A++)this.render(g[A],x[A]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,S);let A=0;for(let R=0;R<S;R++)A+=x[R];i.update(A,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function ab(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,B=h||e.has("OES_texture_float"),W=D&&B,k=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:A,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:D,floatFragmentTextures:B,floatVertexTextures:W,maxSamples:k}}function rb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new za,d=new Te,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||l;return l=S,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,M){const A=x.clippingPlanes,R=x.clipIntersection,v=x.clipShadows,_=o.get(x);if(!l||A===null||A.length===0||u&&!v)u?g(null):m();else{const P=u?0:r,D=P*4;let B=_.clippingState||null;p.value=B,B=g(A,S,D,M);for(let W=0;W!==D;++W)B[W]=i[W];_.clippingState=B,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,S,M,A){const R=x!==null?x.length:0;let v=null;if(R!==0){if(v=p.value,A!==!0||v===null){const _=M+R*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,B=M;D!==R;++D,B+=4)h.copy(x[D]).applyMatrix4(P,d),h.normal.toArray(v,B),v[B+3]=h.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function sb(o){let e=new WeakMap;function i(h,d){return d===vd?h.mapping=As:d===xd&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===xd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new vS(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends h0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ys=4,u_=[.125,.215,.35,.446,.526,.582],gr=20,sd=new g0,f_=new Re;let od=null,ld=0,cd=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,d_=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,pr,vs),new j(0,pr,-vs),new j(vs,0,pr),new j(-vs,0,pr),new j(pr,vs,0),new j(-pr,vs,0)];class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:sa,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(u)),this._blurMaterial=lb(u,e,i)}return l}_compileMaterial(e){const i=new ti(this._lodPlanes[0],e);this._renderer.compile(i,sd)}_sceneToCubeUV(e,i,r,l){const d=new $n(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(f_),g.toneMapping=Ia,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),A=new ti(new Ga,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(f_),R=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):P===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;uc(l,P*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ti(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=d_[(l-1)%d_.length];this._blur(e,l-1,l,u,h)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ti(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),R=u/A,v=isFinite(u)?1+Math.floor(g*R):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let P=0;for(let I=0;I<gr;++I){const _t=I/R,H=Math.exp(-_t*_t/2);_.push(H),I===0?P+=H:I<v&&(P+=2*H)}for(let I=0;I<_.length;I++)_[I]=_[I]/P;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=A,S.mipInt.value=D-r;const B=this._sizeLods[l],W=3*B*(l>D-ys?l-D+ys:0),k=4*(this._cubeSize-B);uc(i,W,k,3*B,2*B),p.setRenderTarget(i),p.render(x,sd)}}function ob(o){const e=[],i=[],r=[];let l=o;const u=o-ys+1+u_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-ys?p=u_[h-o+ys-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,x=1+m,S=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,A=6,R=3,v=2,_=1,P=new Float32Array(R*A*M),D=new Float32Array(v*A*M),B=new Float32Array(_*A*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,_t=k>2?0:-1,H=[I,_t,0,I+2/3,_t,0,I+2/3,_t+1,0,I,_t,0,I+2/3,_t+1,0,I,_t+1,0];P.set(H,R*A*k),D.set(S,v*A*k);const E=[k,k,k,k,k,k];B.set(E,_*A*k)}const W=new Oi;W.setAttribute("position",new Ni(P,R)),W.setAttribute("uv",new Ni(D,v)),W.setAttribute("faceIndex",new Ni(B,_)),e.push(W),l>ys&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function p_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lb(o,e,i){const r=new Float32Array(gr),l=new j(0,1,0);return new oa({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function m_(){return new oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function g_(){return new oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Od(){return`

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
	`}function cb(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vd||p===xd,g=p===As||p===ws;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=e.get(d);return i===null&&(i=new h_(o)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),e.set(d,x),x.texture}else{if(e.has(d))return e.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new h_(o));const S=m?i.fromEquirectangular(d):i.fromCubemap(d);return e.set(d,S),d.addEventListener("dispose",u),S.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ub(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fb(o,e,i,r){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);for(const A in S.morphAttributes){const R=S.morphAttributes[A];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(x){const S=x.attributes;for(const A in S)e.update(S[A],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const A in M){const R=M[A];for(let v=0,_=R.length;v<_;v++)e.update(R[v],o.ARRAY_BUFFER)}}function m(x){const S=[],M=x.index,A=x.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let D=0,B=P.length;D<B;D+=3){const W=P[D+0],k=P[D+1],I=P[D+2];S.push(W,k,k,I,I,W)}}else if(A!==void 0){const P=A.array;R=A.version;for(let D=0,B=P.length/3-1;D<B;D+=3){const W=D+0,k=D+1,I=D+2;S.push(W,k,k,I,I,W)}}else return;const v=new(i0(S)?f0:u0)(S,1);v.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,v)}function g(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function db(o,e,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,A){o.drawElements(u,A,d,M*p),i.update(A,u,1)}function x(M,A,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,A,d,M*p,R),i.update(A,u,R)}function S(M,A,R){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,A[_]);else{v.multiDrawElementsWEBGL(u,A,0,d,M,0,R);let _=0;for(let P=0;P<R;P++)_+=A[P];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=S}function hb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pb(o,e){return o[0]-e[0]}function mb(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gb(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new Ke,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,x){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=A!==void 0?A.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let ot=function(){Rt.dispose(),u.delete(g),g.removeEventListener("dispose",ot)};var M=ot;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,W=g.morphAttributes.color!==void 0,k=g.morphAttributes.position||[],I=g.morphAttributes.normal||[],_t=g.morphAttributes.color||[];let H=0;D===!0&&(H=1),B===!0&&(H=2),W===!0&&(H=3);let E=g.attributes.position.count*H,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const mt=new Float32Array(E*O*4*R),Rt=new s0(mt,E,O,R);Rt.type=aa,Rt.needsUpdate=!0;const K=H*4;for(let G=0;G<R;G++){const lt=k[G],at=I[G],dt=_t[G],C=E*O*4*G;for(let Z=0;Z<lt.count;Z++){const pt=Z*K;D===!0&&(h.fromBufferAttribute(lt,Z),mt[C+pt+0]=h.x,mt[C+pt+1]=h.y,mt[C+pt+2]=h.z,mt[C+pt+3]=0),B===!0&&(h.fromBufferAttribute(at,Z),mt[C+pt+4]=h.x,mt[C+pt+5]=h.y,mt[C+pt+6]=h.z,mt[C+pt+7]=0),W===!0&&(h.fromBufferAttribute(dt,Z),mt[C+pt+8]=h.x,mt[C+pt+9]=h.y,mt[C+pt+10]=h.z,mt[C+pt+11]=dt.itemSize===4?h.w:1)}}v={count:R,texture:Rt,size:new pe(E,O)},u.set(g,v),g.addEventListener("dispose",ot)}let _=0;for(let D=0;D<S.length;D++)_+=S[D];const P=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(o,"morphTargetBaseInfluence",P),x.getUniforms().setValue(o,"morphTargetInfluences",S),x.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const A=S===void 0?0:S.length;let R=r[g.id];if(R===void 0||R.length!==A){R=[];for(let B=0;B<A;B++)R[B]=[B,0];r[g.id]=R}for(let B=0;B<A;B++){const W=R[B];W[0]=B,W[1]=S[B]}R.sort(mb);for(let B=0;B<8;B++)B<A&&R[B][1]?(d[B][0]=R[B][0],d[B][1]=R[B][1]):(d[B][0]=Number.MAX_SAFE_INTEGER,d[B][1]=0);d.sort(pb);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let P=0;for(let B=0;B<8;B++){const W=d[B],k=W[0],I=W[1];k!==Number.MAX_SAFE_INTEGER&&I?(v&&g.getAttribute("morphTarget"+B)!==v[k]&&g.setAttribute("morphTarget"+B,v[k]),_&&g.getAttribute("morphNormal"+B)!==_[k]&&g.setAttribute("morphNormal"+B,_[k]),l[B]=I,P+=I):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const D=g.morphTargetsRelative?1:1-P;x.getUniforms().setValue(o,"morphTargetBaseInfluence",D),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _b(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,x=e.get(p,g);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class _0 extends Xn{constructor(e,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:xr,g!==xr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===xr&&(r=Ba),r===void 0&&g===Rs&&(r=vr),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Fn,this.minFilter=p!==void 0?p:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new Xn,x0=new _0(1,1);x0.compareFunction=n0;const y0=new s0,S0=new eS,M0=new p0,__=[],v_=[],x_=new Float32Array(16),y_=new Float32Array(9),S_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function Mb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;S_.set(r),o.uniformMatrix2fv(this.addr,!1,S_),gn(i,r)}}function Eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),gn(i,r)}}function bb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;x_.set(r),o.uniformMatrix4fv(this.addr,!1,x_),gn(i,r)}}function Tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function Cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function Lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function Nb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?x0:v0;i.setTexture2D(e||u,l)}function Ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||S0,l)}function Pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||y0,l)}function Bb(o){switch(o){case 5126:return vb;case 35664:return xb;case 35665:return yb;case 35666:return Sb;case 35674:return Mb;case 35675:return Eb;case 35676:return bb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return wb;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return Db;case 36295:return Lb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return zb}}function Fb(o,e){o.uniform1fv(this.addr,e)}function Ib(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function Hb(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function Gb(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function Vb(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kb(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Wb(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Xb(o,e){o.uniform1iv(this.addr,e)}function qb(o,e){o.uniform2iv(this.addr,e)}function Yb(o,e){o.uniform3iv(this.addr,e)}function jb(o,e){o.uniform4iv(this.addr,e)}function Zb(o,e){o.uniform1uiv(this.addr,e)}function Kb(o,e){o.uniform2uiv(this.addr,e)}function Qb(o,e){o.uniform3uiv(this.addr,e)}function Jb(o,e){o.uniform4uiv(this.addr,e)}function $b(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||v0,u[h])}function tT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||S0,u[h])}function eT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||M0,u[h])}function nT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||y0,u[h])}function iT(o){switch(o){case 5126:return Fb;case 35664:return Ib;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return kb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return Zb;case 36294:return Kb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}class aT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Bb(i.type)}}class rT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iT(i.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function oT(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),h=ud.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){M_(i,m===void 0?new aT(d,o,e):new rT(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new sT(d),M_(i,x)),i=x}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);oT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lT=37297;let cT=0;function uT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function fT(o){const e=He.getPrimaries(He.workingColorSpace),i=He.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case sa:case bc:return[r,"LinearTransferOETF"];case An:case Dd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function b_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+uT(o.getShaderSource(e),h)}else return l}function dT(o,e){const i=fT(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function hT(o,e){let i;switch(e){case dy:i="Linear";break;case hy:i="Reinhard";break;case py:i="OptimizedCineon";break;case my:i="ACESFilmic";break;case _y:i="AgX";break;case gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function mT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function gT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _T(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ss(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(o){return o.replace(vT,yT)}const xT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yT(o,e){let i=Se[e];if(i===void 0){const r=xT.get(e);if(r!==void 0)i=Se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bd(i)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(o){return o.replace(ST,MT)}function MT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function R_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function ET(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case uy:e="ENVMAP_BLENDING_MIX";break;case fy:e="ENVMAP_BLENDING_ADD";break}return e}function wT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function RT(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ET(i),m=bT(i),g=TT(i),x=AT(i),S=wT(i),M=i.isWebGL2?"":pT(i),A=mT(i),R=gT(u),v=l.createProgram();let _,P,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ss).join(`
`),_.length>0&&(_+=`
`),P=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ss).join(`
`),P.length>0&&(P+=`
`)):(_=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),P=[M,R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?Se.tonemapping_pars_fragment:"",i.toneMapping!==Ia?hT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,dT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ss).join(`
`)),h=bd(h),h=T_(h,i),h=A_(h,i),d=bd(d),d=T_(d,i),d=A_(d,i),h=w_(h),d=w_(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const B=D+_+h,W=D+P+d,k=E_(l,l.VERTEX_SHADER,B),I=E_(l,l.FRAGMENT_SHADER,W);l.attachShader(v,k),l.attachShader(v,I),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function _t(mt){if(o.debug.checkShaderErrors){const Rt=l.getProgramInfoLog(v).trim(),K=l.getShaderInfoLog(k).trim(),ot=l.getShaderInfoLog(I).trim();let G=!0,lt=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,k,I);else{const at=b_(l,k,"vertex"),dt=b_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+mt.name+`
Material Type: `+mt.type+`

Program Info Log: `+Rt+`
`+at+`
`+dt)}else Rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Rt):(K===""||ot==="")&&(lt=!1);lt&&(mt.diagnostics={runnable:G,programLog:Rt,vertexShader:{log:K,prefix:_},fragmentShader:{log:ot,prefix:P}})}l.deleteShader(k),l.deleteShader(I),H=new pc(l,v),E=_T(l,v)}let H;this.getUniforms=function(){return H===void 0&&_t(this),H};let E;this.getAttributes=function(){return E===void 0&&_t(this),E};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(v,lT)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=I,this}let CT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new LT(e),i.set(e,r)),r}}class LT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function UT(o,e,i,r,l,u,h){const d=new o0,p=new DT,m=new Set,g=[],x=l.isWebGL2,S=l.logarithmicDepthBuffer,M=l.vertexTextures;let A=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,O,mt,Rt,K){const ot=Rt.fog,G=K.geometry,lt=E.isMeshStandardMaterial?Rt.environment:null,at=(E.isMeshStandardMaterial?i:e).get(E.envMap||lt),dt=at&&at.mapping===Ec?at.image.height:null,C=R[E.type];E.precision!==null&&(A=l.getMaxPrecision(E.precision),A!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",A,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=Z!==void 0?Z.length:0;let Dt=0;G.morphAttributes.position!==void 0&&(Dt=1),G.morphAttributes.normal!==void 0&&(Dt=2),G.morphAttributes.color!==void 0&&(Dt=3);let X,ht,Tt,Yt;if(C){const ce=Di[C];X=ce.vertexShader,ht=ce.fragmentShader}else X=E.vertexShader,ht=E.fragmentShader,p.update(E),Tt=p.getVertexShaderID(E),Yt=p.getFragmentShaderID(E);const Ft=o.getRenderTarget(),It=K.isInstancedMesh===!0,$t=K.isBatchedMesh===!0,ee=!!E.map,nt=!!E.matcap,Pe=!!at,ne=!!E.aoMap,ue=!!E.lightMap,Qt=!!E.bumpMap,Oe=!!E.normalMap,fe=!!E.displacementMap,U=!!E.emissiveMap,T=!!E.metalnessMap,st=!!E.roughnessMap,Nt=E.anisotropy>0,tt=E.clearcoat>0,J=E.iridescence>0,ut=E.sheen>0,it=E.transmission>0,ft=Nt&&!!E.anisotropyMap,zt=tt&&!!E.clearcoatMap,Lt=tt&&!!E.clearcoatNormalMap,xt=tt&&!!E.clearcoatRoughnessMap,ie=J&&!!E.iridescenceMap,Pt=J&&!!E.iridescenceThicknessMap,Vt=ut&&!!E.sheenColorMap,Bt=ut&&!!E.sheenRoughnessMap,yt=!!E.specularMap,te=!!E.specularColorMap,L=!!E.specularIntensityMap,St=it&&!!E.transmissionMap,At=it&&!!E.thicknessMap,jt=!!E.gradientMap,N=!!E.alphaMap,bt=E.alphaTest>0,Et=!!E.alphaHash,Zt=!!E.extensions;let qt=Ia;E.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(qt=o.toneMapping);const _e={isWebGL2:x,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:X,fragmentShader:ht,defines:E.defines,customVertexShaderID:Tt,customFragmentShaderID:Yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:A,batching:$t,instancing:It,instancingColor:It&&K.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Ft===null?o.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:sa,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:nt,envMap:Pe,envMapMode:Pe&&at.mapping,envMapCubeUVHeight:dt,aoMap:ne,lightMap:ue,bumpMap:Qt,normalMap:Oe,displacementMap:M&&fe,emissiveMap:U,normalMapObjectSpace:Oe&&E.normalMapType===Ry,normalMapTangentSpace:Oe&&E.normalMapType===e0,metalnessMap:T,roughnessMap:st,anisotropy:Nt,anisotropyMap:ft,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:xt,iridescence:J,iridescenceMap:ie,iridescenceThicknessMap:Pt,sheen:ut,sheenColorMap:Vt,sheenRoughnessMap:Bt,specularMap:yt,specularColorMap:te,specularIntensityMap:L,transmission:it,transmissionMap:St,thicknessMap:At,gradientMap:jt,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:N,alphaTest:bt,alphaHash:Et,combine:E.combine,mapUv:ee&&v(E.map.channel),aoMapUv:ne&&v(E.aoMap.channel),lightMapUv:ue&&v(E.lightMap.channel),bumpMapUv:Qt&&v(E.bumpMap.channel),normalMapUv:Oe&&v(E.normalMap.channel),displacementMapUv:fe&&v(E.displacementMap.channel),emissiveMapUv:U&&v(E.emissiveMap.channel),metalnessMapUv:T&&v(E.metalnessMap.channel),roughnessMapUv:st&&v(E.roughnessMap.channel),anisotropyMapUv:ft&&v(E.anisotropyMap.channel),clearcoatMapUv:zt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(E.sheenRoughnessMap.channel),specularMapUv:yt&&v(E.specularMap.channel),specularColorMapUv:te&&v(E.specularColorMap.channel),specularIntensityMapUv:L&&v(E.specularIntensityMap.channel),transmissionMapUv:St&&v(E.transmissionMap.channel),thicknessMapUv:At&&v(E.thicknessMap.channel),alphaMapUv:N&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||Nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!G.attributes.uv&&(ee||N),fog:!!ot,useFog:E.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:K.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Dt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&mt.length>0,shadowMapType:o.shadowMap.type,toneMapping:qt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&He.getTransfer(E.map.colorSpace)===qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===Wn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Zt&&E.extensions.derivatives===!0,extensionFragDepth:Zt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Zt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Zt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Zt&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _e.vertexUv1s=m.has(1),_e.vertexUv2s=m.has(2),_e.vertexUv3s=m.has(3),m.clear(),_e}function P(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const mt in E.defines)O.push(mt),O.push(E.defines[mt]);return E.isRawShaderMaterial===!1&&(D(O,E),B(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function D(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function B(E,O){d.disableAll(),O.isWebGL2&&d.enable(0),O.supportsVertexTextures&&d.enable(1),O.instancing&&d.enable(2),O.instancingColor&&d.enable(3),O.matcap&&d.enable(4),O.envMap&&d.enable(5),O.normalMapObjectSpace&&d.enable(6),O.normalMapTangentSpace&&d.enable(7),O.clearcoat&&d.enable(8),O.iridescence&&d.enable(9),O.alphaTest&&d.enable(10),O.vertexColors&&d.enable(11),O.vertexAlphas&&d.enable(12),O.vertexUv1s&&d.enable(13),O.vertexUv2s&&d.enable(14),O.vertexUv3s&&d.enable(15),O.vertexTangents&&d.enable(16),O.anisotropy&&d.enable(17),O.alphaHash&&d.enable(18),O.batching&&d.enable(19),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.skinning&&d.enable(4),O.morphTargets&&d.enable(5),O.morphNormals&&d.enable(6),O.morphColors&&d.enable(7),O.premultipliedAlpha&&d.enable(8),O.shadowMapEnabled&&d.enable(9),O.useLegacyLights&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.alphaToCoverage&&d.enable(20),E.push(d.mask)}function W(E){const O=R[E.type];let mt;if(O){const Rt=Di[O];mt=pS.clone(Rt.uniforms)}else mt=E.uniforms;return mt}function k(E,O){let mt;for(let Rt=0,K=g.length;Rt<K;Rt++){const ot=g[Rt];if(ot.cacheKey===O){mt=ot,++mt.usedTimes;break}}return mt===void 0&&(mt=new RT(o,O,E,u),g.push(mt)),mt}function I(E){if(--E.usedTimes===0){const O=g.indexOf(E);g[O]=g[g.length-1],g.pop(),E.destroy()}}function _t(E){p.remove(E)}function H(){p.dispose()}return{getParameters:_,getProgramCacheKey:P,getUniforms:W,acquireProgram:k,releaseProgram:I,releaseShaderCache:_t,programs:g,dispose:H}}function NT(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function OT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,S,M,A,R,v){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:A,renderOrder:x.renderOrder,z:R,group:v},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=R,_.group=v),e++,_}function d(x,S,M,A,R,v){const _=h(x,S,M,A,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(x,S,M,A,R,v){const _=h(x,S,M,A,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,S){i.length>1&&i.sort(x||OT),r.length>1&&r.sort(S||C_),l.length>1&&l.sort(S||C_)}function g(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function PT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new D_,o.set(r,[h])):l>=u.length?(h=new D_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function zT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new Re};break;case"SpotLight":i={position:new j,direction:new j,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function BT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let FT=0;function IT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HT(o,e){const i=new zT,r=BT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new j);const u=new j,h=new on,d=new on;function p(g,x){let S=0,M=0,A=0;for(let mt=0;mt<9;mt++)l.probe[mt].set(0,0,0);let R=0,v=0,_=0,P=0,D=0,B=0,W=0,k=0,I=0,_t=0,H=0;g.sort(IT);const E=x===!0?Math.PI:1;for(let mt=0,Rt=g.length;mt<Rt;mt++){const K=g[mt],ot=K.color,G=K.intensity,lt=K.distance,at=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)S+=ot.r*G*E,M+=ot.g*G*E,A+=ot.b*G*E;else if(K.isLightProbe){for(let dt=0;dt<9;dt++)l.probe[dt].addScaledVector(K.sh.coefficients[dt],G);H++}else if(K.isDirectionalLight){const dt=i.get(K);if(dt.color.copy(K.color).multiplyScalar(K.intensity*E),K.castShadow){const C=K.shadow,Z=r.get(K);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,l.directionalShadow[R]=Z,l.directionalShadowMap[R]=at,l.directionalShadowMatrix[R]=K.shadow.matrix,B++}l.directional[R]=dt,R++}else if(K.isSpotLight){const dt=i.get(K);dt.position.setFromMatrixPosition(K.matrixWorld),dt.color.copy(ot).multiplyScalar(G*E),dt.distance=lt,dt.coneCos=Math.cos(K.angle),dt.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),dt.decay=K.decay,l.spot[_]=dt;const C=K.shadow;if(K.map&&(l.spotLightMap[I]=K.map,I++,C.updateMatrices(K),K.castShadow&&_t++),l.spotLightMatrix[_]=C.matrix,K.castShadow){const Z=r.get(K);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,l.spotShadow[_]=Z,l.spotShadowMap[_]=at,k++}_++}else if(K.isRectAreaLight){const dt=i.get(K);dt.color.copy(ot).multiplyScalar(G),dt.halfWidth.set(K.width*.5,0,0),dt.halfHeight.set(0,K.height*.5,0),l.rectArea[P]=dt,P++}else if(K.isPointLight){const dt=i.get(K);if(dt.color.copy(K.color).multiplyScalar(K.intensity*E),dt.distance=K.distance,dt.decay=K.decay,K.castShadow){const C=K.shadow,Z=r.get(K);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,l.pointShadow[v]=Z,l.pointShadowMap[v]=at,l.pointShadowMatrix[v]=K.shadow.matrix,W++}l.point[v]=dt,v++}else if(K.isHemisphereLight){const dt=i.get(K);dt.skyColor.copy(K.color).multiplyScalar(G*E),dt.groundColor.copy(K.groundColor).multiplyScalar(G*E),l.hemi[D]=dt,D++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Gt.LTC_FLOAT_1,l.rectAreaLTC2=Gt.LTC_FLOAT_2):(l.rectAreaLTC1=Gt.LTC_HALF_1,l.rectAreaLTC2=Gt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Gt.LTC_FLOAT_1,l.rectAreaLTC2=Gt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Gt.LTC_HALF_1,l.rectAreaLTC2=Gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=M,l.ambient[2]=A;const O=l.hash;(O.directionalLength!==R||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==P||O.hemiLength!==D||O.numDirectionalShadows!==B||O.numPointShadows!==W||O.numSpotShadows!==k||O.numSpotMaps!==I||O.numLightProbes!==H)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=P,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=W,l.pointShadowMap.length=W,l.spotShadow.length=k,l.spotShadowMap.length=k,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=W,l.spotLightMatrix.length=k+I-_t,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=_t,l.numLightProbes=H,O.directionalLength=R,O.pointLength=v,O.spotLength=_,O.rectAreaLength=P,O.hemiLength=D,O.numDirectionalShadows=B,O.numPointShadows=W,O.numSpotShadows=k,O.numSpotMaps=I,O.numLightProbes=H,l.version=FT++)}function m(g,x){let S=0,M=0,A=0,R=0,v=0;const _=x.matrixWorldInverse;for(let P=0,D=g.length;P<D;P++){const B=g[P];if(B.isDirectionalLight){const W=l.directional[S];W.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(_),S++}else if(B.isSpotLight){const W=l.spot[A];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(_),W.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(_),A++}else if(B.isRectAreaLight){const W=l.rectArea[R];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(_),d.identity(),h.copy(B.matrixWorld),h.premultiply(_),d.extractRotation(h),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),W.halfWidth.applyMatrix4(d),W.halfHeight.applyMatrix4(d),R++}else if(B.isPointLight){const W=l.point[M];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(_),M++}else if(B.isHemisphereLight){const W=l.hemi[v];W.direction.setFromMatrixPosition(B.matrixWorld),W.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function L_(o,e){const i=new HT(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function h(x){r.push(x)}function d(x){l.push(x)}function p(x){i.setup(r,x)}function m(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function GT(o,e){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new L_(o,e),i.set(u,[p])):h>=d.length?(p=new L_(o,e),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class VT extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WT=`void main() {
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
}`;function qT(o,e,i){let r=new Nd;const l=new pe,u=new pe,h=new Ke,d=new VT({depthPacking:wy}),p=new kT,m={},g=i.maxTextureSize,x={[Va]:Wn,[Wn]:Va,[Li]:Li},S=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:WT,fragmentShader:XT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Oi;A.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ti(A,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let _=this.type;this.render=function(k,I,_t){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const H=o.getRenderTarget(),E=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),mt=o.state;mt.setBlending(Fa),mt.buffers.color.setClear(1,1,1,1),mt.buffers.depth.setTest(!0),mt.setScissorTest(!1);const Rt=_!==ia&&this.type===ia,K=_===ia&&this.type!==ia;for(let ot=0,G=k.length;ot<G;ot++){const lt=k[ot],at=lt.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;l.copy(at.mapSize);const dt=at.getFrameExtents();if(l.multiply(dt),u.copy(at.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/dt.x),l.x=u.x*dt.x,at.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/dt.y),l.y=u.y*dt.y,at.mapSize.y=u.y)),at.map===null||Rt===!0||K===!0){const Z=this.type!==ia?{minFilter:Fn,magFilter:Fn}:{};at.map!==null&&at.map.dispose(),at.map=new Sr(l.x,l.y,Z),at.map.texture.name=lt.name+".shadowMap",at.camera.updateProjectionMatrix()}o.setRenderTarget(at.map),o.clear();const C=at.getViewportCount();for(let Z=0;Z<C;Z++){const pt=at.getViewport(Z);h.set(u.x*pt.x,u.y*pt.y,u.x*pt.z,u.y*pt.w),mt.viewport(h),at.updateMatrices(lt,Z),r=at.getFrustum(),B(I,_t,at.camera,lt,this.type)}at.isPointLightShadow!==!0&&this.type===ia&&P(at,_t),at.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(H,E,O)};function P(k,I){const _t=e.update(R);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,_t,S,R,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,_t,M,R,null)}function D(k,I,_t,H){let E=null;const O=_t.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(O!==void 0)E=O;else if(E=_t.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const mt=E.uuid,Rt=I.uuid;let K=m[mt];K===void 0&&(K={},m[mt]=K);let ot=K[Rt];ot===void 0&&(ot=E.clone(),K[Rt]=ot,I.addEventListener("dispose",W)),E=ot}if(E.visible=I.visible,E.wireframe=I.wireframe,H===ia?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:x[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,_t.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const mt=o.properties.get(E);mt.light=_t}return E}function B(k,I,_t,H,E){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&E===ia)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,k.matrixWorld);const Rt=e.update(k),K=k.material;if(Array.isArray(K)){const ot=Rt.groups;for(let G=0,lt=ot.length;G<lt;G++){const at=ot[G],dt=K[at.materialIndex];if(dt&&dt.visible){const C=D(k,dt,H,E);k.onBeforeShadow(o,k,I,_t,Rt,C,at),o.renderBufferDirect(_t,null,Rt,C,k,at),k.onAfterShadow(o,k,I,_t,Rt,C,at)}}}else if(K.visible){const ot=D(k,K,H,E);k.onBeforeShadow(o,k,I,_t,Rt,ot,null),o.renderBufferDirect(_t,null,Rt,ot,k,null),k.onAfterShadow(o,k,I,_t,Rt,ot,null)}}const mt=k.children;for(let Rt=0,K=mt.length;Rt<K;Rt++)B(mt[Rt],I,_t,H,E)}function W(k){k.target.removeEventListener("dispose",W);for(const _t in m){const H=m[_t],E=k.target.uuid;E in H&&(H[E].dispose(),delete H[E])}}}function YT(o,e,i){const r=i.isWebGL2;function l(){let N=!1;const bt=new Ke;let Et=null;const Zt=new Ke(0,0,0,0);return{setMask:function(qt){Et!==qt&&!N&&(o.colorMask(qt,qt,qt,qt),Et=qt)},setLocked:function(qt){N=qt},setClear:function(qt,_e,ce,ye,Ee){Ee===!0&&(qt*=ye,_e*=ye,ce*=ye),bt.set(qt,_e,ce,ye),Zt.equals(bt)===!1&&(o.clearColor(qt,_e,ce,ye),Zt.copy(bt))},reset:function(){N=!1,Et=null,Zt.set(-1,0,0,0)}}}function u(){let N=!1,bt=null,Et=null,Zt=null;return{setTest:function(qt){qt?It(o.DEPTH_TEST):$t(o.DEPTH_TEST)},setMask:function(qt){bt!==qt&&!N&&(o.depthMask(qt),bt=qt)},setFunc:function(qt){if(Et!==qt){switch(qt){case iy:o.depthFunc(o.NEVER);break;case ay:o.depthFunc(o.ALWAYS);break;case ry:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sy:o.depthFunc(o.EQUAL);break;case oy:o.depthFunc(o.GEQUAL);break;case ly:o.depthFunc(o.GREATER);break;case cy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Et=qt}},setLocked:function(qt){N=qt},setClear:function(qt){Zt!==qt&&(o.clearDepth(qt),Zt=qt)},reset:function(){N=!1,bt=null,Et=null,Zt=null}}}function h(){let N=!1,bt=null,Et=null,Zt=null,qt=null,_e=null,ce=null,ye=null,Ee=null;return{setTest:function(he){N||(he?It(o.STENCIL_TEST):$t(o.STENCIL_TEST))},setMask:function(he){bt!==he&&!N&&(o.stencilMask(he),bt=he)},setFunc:function(he,We,ln){(Et!==he||Zt!==We||qt!==ln)&&(o.stencilFunc(he,We,ln),Et=he,Zt=We,qt=ln)},setOp:function(he,We,ln){(_e!==he||ce!==We||ye!==ln)&&(o.stencilOp(he,We,ln),_e=he,ce=We,ye=ln)},setLocked:function(he){N=he},setClear:function(he){Ee!==he&&(o.clearStencil(he),Ee=he)},reset:function(){N=!1,bt=null,Et=null,Zt=null,qt=null,_e=null,ce=null,ye=null,Ee=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,x=new WeakMap;let S={},M={},A=new WeakMap,R=[],v=null,_=!1,P=null,D=null,B=null,W=null,k=null,I=null,_t=null,H=new Re(0,0,0),E=0,O=!1,mt=null,Rt=null,K=null,ot=null,G=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,dt=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(C)[1]),at=dt>=1):C.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),at=dt>=2);let Z=null,pt={};const Dt=o.getParameter(o.SCISSOR_BOX),X=o.getParameter(o.VIEWPORT),ht=new Ke().fromArray(Dt),Tt=new Ke().fromArray(X);function Yt(N,bt,Et,Zt){const qt=new Uint8Array(4),_e=o.createTexture();o.bindTexture(N,_e),o.texParameteri(N,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(N,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ce=0;ce<Et;ce++)r&&(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)?o.texImage3D(bt,0,o.RGBA,1,1,Zt,0,o.RGBA,o.UNSIGNED_BYTE,qt):o.texImage2D(bt+ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,qt);return _e}const Ft={};Ft[o.TEXTURE_2D]=Yt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ft[o.TEXTURE_CUBE_MAP]=Yt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ft[o.TEXTURE_2D_ARRAY]=Yt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ft[o.TEXTURE_3D]=Yt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),It(o.DEPTH_TEST),p.setFunc(mc),fe(!1),U(fg),It(o.CULL_FACE),Qt(Fa);function It(N){S[N]!==!0&&(o.enable(N),S[N]=!0)}function $t(N){S[N]!==!1&&(o.disable(N),S[N]=!1)}function ee(N,bt){return M[N]!==bt?(o.bindFramebuffer(N,bt),M[N]=bt,r&&(N===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=bt),N===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=bt)),!0):!1}function nt(N,bt){let Et=R,Zt=!1;if(N)if(Et=A.get(bt),Et===void 0&&(Et=[],A.set(bt,Et)),N.isWebGLMultipleRenderTargets){const qt=N.texture;if(Et.length!==qt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,ce=qt.length;_e<ce;_e++)Et[_e]=o.COLOR_ATTACHMENT0+_e;Et.length=qt.length,Zt=!0}}else Et[0]!==o.COLOR_ATTACHMENT0&&(Et[0]=o.COLOR_ATTACHMENT0,Zt=!0);else Et[0]!==o.BACK&&(Et[0]=o.BACK,Zt=!0);Zt&&(i.isWebGL2?o.drawBuffers(Et):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Et))}function Pe(N){return v!==N?(o.useProgram(N),v=N,!0):!1}const ne={[mr]:o.FUNC_ADD,[Vx]:o.FUNC_SUBTRACT,[kx]:o.FUNC_REVERSE_SUBTRACT};if(r)ne[pg]=o.MIN,ne[mg]=o.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ne[pg]=N.MIN_EXT,ne[mg]=N.MAX_EXT)}const ue={[Wx]:o.ZERO,[Xx]:o.ONE,[qx]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[Jx]:o.SRC_ALPHA_SATURATE,[Kx]:o.DST_COLOR,[jx]:o.DST_ALPHA,[Yx]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[Qx]:o.ONE_MINUS_DST_COLOR,[Zx]:o.ONE_MINUS_DST_ALPHA,[$x]:o.CONSTANT_COLOR,[ty]:o.ONE_MINUS_CONSTANT_COLOR,[ey]:o.CONSTANT_ALPHA,[ny]:o.ONE_MINUS_CONSTANT_ALPHA};function Qt(N,bt,Et,Zt,qt,_e,ce,ye,Ee,he){if(N===Fa){_===!0&&($t(o.BLEND),_=!1);return}if(_===!1&&(It(o.BLEND),_=!0),N!==Gx){if(N!==P||he!==O){if((D!==mr||k!==mr)&&(o.blendEquation(o.FUNC_ADD),D=mr,k=mr),he)switch(N){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}B=null,W=null,I=null,_t=null,H.set(0,0,0),E=0,P=N,O=he}return}qt=qt||bt,_e=_e||Et,ce=ce||Zt,(bt!==D||qt!==k)&&(o.blendEquationSeparate(ne[bt],ne[qt]),D=bt,k=qt),(Et!==B||Zt!==W||_e!==I||ce!==_t)&&(o.blendFuncSeparate(ue[Et],ue[Zt],ue[_e],ue[ce]),B=Et,W=Zt,I=_e,_t=ce),(ye.equals(H)===!1||Ee!==E)&&(o.blendColor(ye.r,ye.g,ye.b,Ee),H.copy(ye),E=Ee),P=N,O=!1}function Oe(N,bt){N.side===Li?$t(o.CULL_FACE):It(o.CULL_FACE);let Et=N.side===Wn;bt&&(Et=!Et),fe(Et),N.blending===Es&&N.transparent===!1?Qt(Fa):Qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),p.setFunc(N.depthFunc),p.setTest(N.depthTest),p.setMask(N.depthWrite),d.setMask(N.colorWrite);const Zt=N.stencilWrite;m.setTest(Zt),Zt&&(m.setMask(N.stencilWriteMask),m.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),m.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?It(o.SAMPLE_ALPHA_TO_COVERAGE):$t(o.SAMPLE_ALPHA_TO_COVERAGE)}function fe(N){mt!==N&&(N?o.frontFace(o.CW):o.frontFace(o.CCW),mt=N)}function U(N){N!==Ix?(It(o.CULL_FACE),N!==Rt&&(N===fg?o.cullFace(o.BACK):N===Hx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):$t(o.CULL_FACE),Rt=N}function T(N){N!==K&&(at&&o.lineWidth(N),K=N)}function st(N,bt,Et){N?(It(o.POLYGON_OFFSET_FILL),(ot!==bt||G!==Et)&&(o.polygonOffset(bt,Et),ot=bt,G=Et)):$t(o.POLYGON_OFFSET_FILL)}function Nt(N){N?It(o.SCISSOR_TEST):$t(o.SCISSOR_TEST)}function tt(N){N===void 0&&(N=o.TEXTURE0+lt-1),Z!==N&&(o.activeTexture(N),Z=N)}function J(N,bt,Et){Et===void 0&&(Z===null?Et=o.TEXTURE0+lt-1:Et=Z);let Zt=pt[Et];Zt===void 0&&(Zt={type:void 0,texture:void 0},pt[Et]=Zt),(Zt.type!==N||Zt.texture!==bt)&&(Z!==Et&&(o.activeTexture(Et),Z=Et),o.bindTexture(N,bt||Ft[N]),Zt.type=N,Zt.texture=bt)}function ut(){const N=pt[Z];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function it(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{o.compressedTexImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{o.texSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{o.texSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{o.texStorage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{o.texStorage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(N){ht.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),ht.copy(N))}function L(N){Tt.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),Tt.copy(N))}function St(N,bt){let Et=x.get(bt);Et===void 0&&(Et=new WeakMap,x.set(bt,Et));let Zt=Et.get(N);Zt===void 0&&(Zt=o.getUniformBlockIndex(bt,N.name),Et.set(N,Zt))}function At(N,bt){const Zt=x.get(bt).get(N);g.get(bt)!==Zt&&(o.uniformBlockBinding(bt,Zt,N.__bindingPointIndex),g.set(bt,Zt))}function jt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},Z=null,pt={},M={},A=new WeakMap,R=[],v=null,_=!1,P=null,D=null,B=null,W=null,k=null,I=null,_t=null,H=new Re(0,0,0),E=0,O=!1,mt=null,Rt=null,K=null,ot=null,G=null,ht.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:It,disable:$t,bindFramebuffer:ee,drawBuffers:nt,useProgram:Pe,setBlending:Qt,setMaterial:Oe,setFlipSided:fe,setCullFace:U,setLineWidth:T,setPolygonOffset:st,setScissorTest:Nt,activeTexture:tt,bindTexture:J,unbindTexture:ut,compressedTexImage2D:it,compressedTexImage3D:ft,texImage2D:Bt,texImage3D:yt,updateUBOMapping:St,uniformBlockBinding:At,texStorage2D:Pt,texStorage3D:Vt,texSubImage2D:zt,texSubImage3D:Lt,compressedTexSubImage2D:xt,compressedTexSubImage3D:ie,scissor:te,viewport:L,reset:jt}}function jT(o,e,i,r,l,u,h){const d=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return M?new OffscreenCanvas(U,T):Sc("canvas")}function R(U,T,st,Nt){let tt=1;if((U.width>Nt||U.height>Nt)&&(tt=Nt/Math.max(U.width,U.height)),tt<1||T===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const J=T?yc:Math.floor,ut=J(tt*U.width),it=J(tt*U.height);x===void 0&&(x=A(ut,it));const ft=st?A(ut,it):x;return ft.width=ut,ft.height=it,ft.getContext("2d").drawImage(U,0,0,ut,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+ut+"x"+it+")."),ft}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return Ed(U.width)&&Ed(U.height)}function _(U){return d?!1:U.wrapS!==Mi||U.wrapT!==Mi||U.minFilter!==Fn&&U.minFilter!==kn}function P(U,T){return U.generateMipmaps&&T&&U.minFilter!==Fn&&U.minFilter!==kn}function D(U){o.generateMipmap(U)}function B(U,T,st,Nt,tt=!1){if(d===!1)return T;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let J=T;if(T===o.RED&&(st===o.FLOAT&&(J=o.R32F),st===o.HALF_FLOAT&&(J=o.R16F),st===o.UNSIGNED_BYTE&&(J=o.R8)),T===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(J=o.R8UI),st===o.UNSIGNED_SHORT&&(J=o.R16UI),st===o.UNSIGNED_INT&&(J=o.R32UI),st===o.BYTE&&(J=o.R8I),st===o.SHORT&&(J=o.R16I),st===o.INT&&(J=o.R32I)),T===o.RG&&(st===o.FLOAT&&(J=o.RG32F),st===o.HALF_FLOAT&&(J=o.RG16F),st===o.UNSIGNED_BYTE&&(J=o.RG8)),T===o.RGBA){const ut=tt?gc:He.getTransfer(Nt);st===o.FLOAT&&(J=o.RGBA32F),st===o.HALF_FLOAT&&(J=o.RGBA16F),st===o.UNSIGNED_BYTE&&(J=ut===qe?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(J=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(J=o.RGB5_A1)}return(J===o.R16F||J===o.R32F||J===o.RG16F||J===o.RG32F||J===o.RGBA16F||J===o.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function W(U,T,st){return P(U,st)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==kn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function k(U){return U===Fn||U===gg||U===Do?o.NEAREST:o.LINEAR}function I(U){const T=U.target;T.removeEventListener("dispose",I),H(T),T.isVideoTexture&&g.delete(T)}function _t(U){const T=U.target;T.removeEventListener("dispose",_t),O(T)}function H(U){const T=r.get(U);if(T.__webglInit===void 0)return;const st=U.source,Nt=S.get(st);if(Nt){const tt=Nt[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(U),Object.keys(Nt).length===0&&S.delete(st)}r.remove(U)}function E(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const st=U.source,Nt=S.get(st);delete Nt[T.__cacheKey],h.memory.textures--}function O(U){const T=U.texture,st=r.get(U),Nt=r.get(T);if(Nt.__webglTexture!==void 0&&(o.deleteTexture(Nt.__webglTexture),h.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(st.__webglFramebuffer[tt]))for(let J=0;J<st.__webglFramebuffer[tt].length;J++)o.deleteFramebuffer(st.__webglFramebuffer[tt][J]);else o.deleteFramebuffer(st.__webglFramebuffer[tt]);st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer[tt])}else{if(Array.isArray(st.__webglFramebuffer))for(let tt=0;tt<st.__webglFramebuffer.length;tt++)o.deleteFramebuffer(st.__webglFramebuffer[tt]);else o.deleteFramebuffer(st.__webglFramebuffer);if(st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&o.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let tt=0;tt<st.__webglColorRenderbuffer.length;tt++)st.__webglColorRenderbuffer[tt]&&o.deleteRenderbuffer(st.__webglColorRenderbuffer[tt]);st.__webglDepthRenderbuffer&&o.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let tt=0,J=T.length;tt<J;tt++){const ut=r.get(T[tt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(T[tt])}r.remove(T),r.remove(U)}let mt=0;function Rt(){mt=0}function K(){const U=mt;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),mt+=1,U}function ot(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function G(U,T){const st=r.get(U);if(U.isVideoTexture&&Oe(U),U.isRenderTargetTexture===!1&&U.version>0&&st.__version!==U.version){const Nt=U.image;if(Nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(st,U,T);return}}i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+T)}function lt(U,T){const st=r.get(U);if(U.version>0&&st.__version!==U.version){ht(st,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+T)}function at(U,T){const st=r.get(U);if(U.version>0&&st.__version!==U.version){ht(st,U,T);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+T)}function dt(U,T){const st=r.get(U);if(U.version>0&&st.__version!==U.version){Tt(st,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+T)}const C={[yd]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[Sd]:o.MIRRORED_REPEAT},Z={[Fn]:o.NEAREST,[gg]:o.NEAREST_MIPMAP_NEAREST,[Do]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},pt={[Cy]:o.NEVER,[Py]:o.ALWAYS,[Dy]:o.LESS,[n0]:o.LEQUAL,[Ly]:o.EQUAL,[Oy]:o.GEQUAL,[Uy]:o.GREATER,[Ny]:o.NOTEQUAL};function Dt(U,T,st){if(T.type===aa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kn||T.magFilter===Bf||T.magFilter===Do||T.magFilter===_r||T.minFilter===kn||T.minFilter===Bf||T.minFilter===Do||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),st?(o.texParameteri(U,o.TEXTURE_WRAP_S,C[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,C[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,C[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Z[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Z[T.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==Mi||T.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,k(T.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,k(T.minFilter)),T.minFilter!==Fn&&T.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Nt=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Fn||T.minFilter!==Do&&T.minFilter!==_r||T.type===aa&&e.has("OES_texture_float_linear")===!1||d===!1&&T.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(o.texParameterf(U,Nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function X(U,T){let st=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",I));const Nt=T.source;let tt=S.get(Nt);tt===void 0&&(tt={},S.set(Nt,tt));const J=ot(T);if(J!==U.__cacheKey){tt[J]===void 0&&(tt[J]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),tt[J].usedTimes++;const ut=tt[U.__cacheKey];ut!==void 0&&(tt[U.__cacheKey].usedTimes--,ut.usedTimes===0&&E(T)),U.__cacheKey=J,U.__webglTexture=tt[J].texture}return st}function ht(U,T,st){let Nt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Nt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Nt=o.TEXTURE_3D);const tt=X(U,T),J=T.source;i.bindTexture(Nt,U.__webglTexture,o.TEXTURE0+st);const ut=r.get(J);if(J.version!==ut.__version||tt===!0){i.activeTexture(o.TEXTURE0+st);const it=He.getPrimaries(He.workingColorSpace),ft=T.colorSpace===di?null:He.getPrimaries(T.colorSpace),zt=T.colorSpace===di||it===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const Lt=_(T)&&v(T.image)===!1;let xt=R(T.image,Lt,!1,l.maxTextureSize);xt=fe(T,xt);const ie=v(xt)||d,Pt=u.convert(T.format,T.colorSpace);let Vt=u.convert(T.type),Bt=B(T.internalFormat,Pt,Vt,T.colorSpace,T.isVideoTexture);Dt(Nt,T,ie);let yt;const te=T.mipmaps,L=d&&T.isVideoTexture!==!0&&Bt!==$_,St=ut.__version===void 0||tt===!0,At=J.dataReady,jt=W(T,xt,ie);if(T.isDepthTexture)Bt=o.DEPTH_COMPONENT,d?T.type===aa?Bt=o.DEPTH_COMPONENT32F:T.type===Ba?Bt=o.DEPTH_COMPONENT24:T.type===vr?Bt=o.DEPTH24_STENCIL8:Bt=o.DEPTH_COMPONENT16:T.type===aa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===xr&&Bt===o.DEPTH_COMPONENT&&T.type!==Cd&&T.type!==Ba&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ba,Vt=u.convert(T.type)),T.format===Rs&&Bt===o.DEPTH_COMPONENT&&(Bt=o.DEPTH_STENCIL,T.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=vr,Vt=u.convert(T.type))),St&&(L?i.texStorage2D(o.TEXTURE_2D,1,Bt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Pt,Vt,null));else if(T.isDataTexture)if(te.length>0&&ie){L&&St&&i.texStorage2D(o.TEXTURE_2D,jt,Bt,te[0].width,te[0].height);for(let N=0,bt=te.length;N<bt;N++)yt=te[N],L?At&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,yt.width,yt.height,Pt,Vt,yt.data):i.texImage2D(o.TEXTURE_2D,N,Bt,yt.width,yt.height,0,Pt,Vt,yt.data);T.generateMipmaps=!1}else L?(St&&i.texStorage2D(o.TEXTURE_2D,jt,Bt,xt.width,xt.height),At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,xt.width,xt.height,Pt,Vt,xt.data)):i.texImage2D(o.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Pt,Vt,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){L&&St&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,Bt,te[0].width,te[0].height,xt.depth);for(let N=0,bt=te.length;N<bt;N++)yt=te[N],T.format!==Ei?Pt!==null?L?At&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,N,0,0,0,yt.width,yt.height,xt.depth,Pt,yt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,N,Bt,yt.width,yt.height,xt.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,N,0,0,0,yt.width,yt.height,xt.depth,Pt,Vt,yt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,N,Bt,yt.width,yt.height,xt.depth,0,Pt,Vt,yt.data)}else{L&&St&&i.texStorage2D(o.TEXTURE_2D,jt,Bt,te[0].width,te[0].height);for(let N=0,bt=te.length;N<bt;N++)yt=te[N],T.format!==Ei?Pt!==null?L?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,N,0,0,yt.width,yt.height,Pt,yt.data):i.compressedTexImage2D(o.TEXTURE_2D,N,Bt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?At&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,yt.width,yt.height,Pt,Vt,yt.data):i.texImage2D(o.TEXTURE_2D,N,Bt,yt.width,yt.height,0,Pt,Vt,yt.data)}else if(T.isDataArrayTexture)L?(St&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,Bt,xt.width,xt.height,xt.depth),At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(T.isData3DTexture)L?(St&&i.texStorage3D(o.TEXTURE_3D,jt,Bt,xt.width,xt.height,xt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(T.isFramebufferTexture){if(St)if(L)i.texStorage2D(o.TEXTURE_2D,jt,Bt,xt.width,xt.height);else{let N=xt.width,bt=xt.height;for(let Et=0;Et<jt;Et++)i.texImage2D(o.TEXTURE_2D,Et,Bt,N,bt,0,Pt,Vt,null),N>>=1,bt>>=1}}else if(te.length>0&&ie){L&&St&&i.texStorage2D(o.TEXTURE_2D,jt,Bt,te[0].width,te[0].height);for(let N=0,bt=te.length;N<bt;N++)yt=te[N],L?At&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,Pt,Vt,yt):i.texImage2D(o.TEXTURE_2D,N,Bt,Pt,Vt,yt);T.generateMipmaps=!1}else L?(St&&i.texStorage2D(o.TEXTURE_2D,jt,Bt,xt.width,xt.height),At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Vt,xt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Pt,Vt,xt);P(T,ie)&&D(Nt),ut.__version=J.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Tt(U,T,st){if(T.image.length!==6)return;const Nt=X(U,T),tt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+st);const J=r.get(tt);if(tt.version!==J.__version||Nt===!0){i.activeTexture(o.TEXTURE0+st);const ut=He.getPrimaries(He.workingColorSpace),it=T.colorSpace===di?null:He.getPrimaries(T.colorSpace),ft=T.colorSpace===di||ut===it?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Lt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let N=0;N<6;N++)!zt&&!Lt?xt[N]=R(T.image[N],!1,!0,l.maxCubemapSize):xt[N]=Lt?T.image[N].image:T.image[N],xt[N]=fe(T,xt[N]);const ie=xt[0],Pt=v(ie)||d,Vt=u.convert(T.format,T.colorSpace),Bt=u.convert(T.type),yt=B(T.internalFormat,Vt,Bt,T.colorSpace),te=d&&T.isVideoTexture!==!0,L=J.__version===void 0||Nt===!0,St=tt.dataReady;let At=W(T,ie,Pt);Dt(o.TEXTURE_CUBE_MAP,T,Pt);let jt;if(zt){te&&L&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,yt,ie.width,ie.height);for(let N=0;N<6;N++){jt=xt[N].mipmaps;for(let bt=0;bt<jt.length;bt++){const Et=jt[bt];T.format!==Ei?Vt!==null?te?St&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt,0,0,Et.width,Et.height,Vt,Et.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt,yt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt,0,0,Et.width,Et.height,Vt,Bt,Et.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt,yt,Et.width,Et.height,0,Vt,Bt,Et.data)}}}else{jt=T.mipmaps,te&&L&&(jt.length>0&&At++,i.texStorage2D(o.TEXTURE_CUBE_MAP,At,yt,xt[0].width,xt[0].height));for(let N=0;N<6;N++)if(Lt){te?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,xt[N].width,xt[N].height,Vt,Bt,xt[N].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,yt,xt[N].width,xt[N].height,0,Vt,Bt,xt[N].data);for(let bt=0;bt<jt.length;bt++){const Zt=jt[bt].image[N].image;te?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt+1,0,0,Zt.width,Zt.height,Vt,Bt,Zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt+1,yt,Zt.width,Zt.height,0,Vt,Bt,Zt.data)}}else{te?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Vt,Bt,xt[N]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,yt,Vt,Bt,xt[N]);for(let bt=0;bt<jt.length;bt++){const Et=jt[bt];te?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt+1,0,0,Vt,Bt,Et.image[N]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt+1,yt,Vt,Bt,Et.image[N])}}}P(T,Pt)&&D(o.TEXTURE_CUBE_MAP),J.__version=tt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Yt(U,T,st,Nt,tt,J){const ut=u.convert(st.format,st.colorSpace),it=u.convert(st.type),ft=B(st.internalFormat,ut,it,st.colorSpace);if(!r.get(T).__hasExternalTextures){const Lt=Math.max(1,T.width>>J),xt=Math.max(1,T.height>>J);tt===o.TEXTURE_3D||tt===o.TEXTURE_2D_ARRAY?i.texImage3D(tt,J,ft,Lt,xt,T.depth,0,ut,it,null):i.texImage2D(tt,J,ft,Lt,xt,0,ut,it,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Qt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Nt,tt,r.get(st).__webglTexture,0,ue(T)):(tt===o.TEXTURE_2D||tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Nt,tt,r.get(st).__webglTexture,J),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(U,T,st){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer&&!T.stencilBuffer){let Nt=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(st||Qt(T)){const tt=T.depthTexture;tt&&tt.isDepthTexture&&(tt.type===aa?Nt=o.DEPTH_COMPONENT32F:tt.type===Ba&&(Nt=o.DEPTH_COMPONENT24));const J=ue(T);Qt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,J,Nt,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,J,Nt,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,Nt,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(T.depthBuffer&&T.stencilBuffer){const Nt=ue(T);st&&Qt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,o.DEPTH24_STENCIL8,T.width,T.height):Qt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const Nt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let tt=0;tt<Nt.length;tt++){const J=Nt[tt],ut=u.convert(J.format,J.colorSpace),it=u.convert(J.type),ft=B(J.internalFormat,ut,it,J.colorSpace),zt=ue(T);st&&Qt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,ft,T.width,T.height):Qt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt,ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ft,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const Nt=r.get(T.depthTexture).__webglTexture,tt=ue(T);if(T.depthTexture.format===xr)Qt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Nt,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Nt,0);else if(T.depthTexture.format===Rs)Qt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Nt,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Nt,0);else throw new Error("Unknown depthTexture format")}function $t(U){const T=r.get(U),st=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");It(T.__webglFramebuffer,U)}else if(st){T.__webglDepthbuffer=[];for(let Nt=0;Nt<6;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Nt]),T.__webglDepthbuffer[Nt]=o.createRenderbuffer(),Ft(T.__webglDepthbuffer[Nt],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Ft(T.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(U,T,st){const Nt=r.get(U);T!==void 0&&Yt(Nt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&$t(U)}function nt(U){const T=U.texture,st=r.get(U),Nt=r.get(T);U.addEventListener("dispose",_t),U.isWebGLMultipleRenderTargets!==!0&&(Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture()),Nt.__version=T.version,h.memory.textures++);const tt=U.isWebGLCubeRenderTarget===!0,J=U.isWebGLMultipleRenderTargets===!0,ut=v(U)||d;if(tt){st.__webglFramebuffer=[];for(let it=0;it<6;it++)if(d&&T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[it]=[];for(let ft=0;ft<T.mipmaps.length;ft++)st.__webglFramebuffer[it][ft]=o.createFramebuffer()}else st.__webglFramebuffer[it]=o.createFramebuffer()}else{if(d&&T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let it=0;it<T.mipmaps.length;it++)st.__webglFramebuffer[it]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(J)if(l.drawBuffers){const it=U.texture;for(let ft=0,zt=it.length;ft<zt;ft++){const Lt=r.get(it[ft]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&U.samples>0&&Qt(U)===!1){const it=J?T:[T];st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){const zt=it[ft];st.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[ft]);const Lt=u.convert(zt.format,zt.colorSpace),xt=u.convert(zt.type),ie=B(zt.internalFormat,Lt,xt,zt.colorSpace,U.isXRRenderTarget===!0),Pt=ue(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,ie,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,st.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(st.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(tt){i.bindTexture(o.TEXTURE_CUBE_MAP,Nt.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,T,ut);for(let it=0;it<6;it++)if(d&&T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Yt(st.__webglFramebuffer[it][ft],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+it,ft);else Yt(st.__webglFramebuffer[it],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);P(T,ut)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(J){const it=U.texture;for(let ft=0,zt=it.length;ft<zt;ft++){const Lt=it[ft],xt=r.get(Lt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),Dt(o.TEXTURE_2D,Lt,ut),Yt(st.__webglFramebuffer,U,Lt,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,0),P(Lt,ut)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let it=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(d?it=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(it,Nt.__webglTexture),Dt(it,T,ut),d&&T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Yt(st.__webglFramebuffer[ft],U,T,o.COLOR_ATTACHMENT0,it,ft);else Yt(st.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,it,0);P(T,ut)&&D(it),i.unbindTexture()}U.depthBuffer&&$t(U)}function Pe(U){const T=v(U)||d,st=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let Nt=0,tt=st.length;Nt<tt;Nt++){const J=st[Nt];if(P(J,T)){const ut=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,it=r.get(J).__webglTexture;i.bindTexture(ut,it),D(ut),i.unbindTexture()}}}function ne(U){if(d&&U.samples>0&&Qt(U)===!1){const T=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],st=U.width,Nt=U.height;let tt=o.COLOR_BUFFER_BIT;const J=[],ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=r.get(U),ft=U.isWebGLMultipleRenderTargets===!0;if(ft)for(let zt=0;zt<T.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,it.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){J.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&J.push(ut);const Lt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(Lt===!1&&(U.depthBuffer&&(tt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(tt|=o.STENCIL_BUFFER_BIT)),ft&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,it.__webglColorRenderbuffer[zt]),Lt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ut]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ut])),ft){const xt=r.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,st,Nt,0,0,st,Nt,tt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,J)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let zt=0;zt<T.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,it.__webglColorRenderbuffer[zt]);const Lt=r.get(T[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,it.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,Lt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function ue(U){return Math.min(l.maxSamples,U.samples)}function Qt(U){const T=r.get(U);return d&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Oe(U){const T=h.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function fe(U,T){const st=U.colorSpace,Nt=U.format,tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Md||st!==sa&&st!==di&&(He.getTransfer(st)===qe?d===!1?e.has("EXT_sRGB")===!0&&Nt===Ei?(U.format=Md,U.minFilter=kn,U.generateMipmaps=!1):T=a0.sRGBToLinear(T):(Nt!==Ei||tt!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),T}this.allocateTextureUnit=K,this.resetTextureUnits=Rt,this.setTexture2D=G,this.setTexture2DArray=lt,this.setTexture3D=at,this.setTextureCube=dt,this.rebindTextures=ee,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Qt}function ZT(o,e,i){const r=i.isWebGL2;function l(u,h=di){let d;const p=He.getTransfer(h);if(u===Ha)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vy)return o.BYTE;if(u===xy)return o.SHORT;if(u===Cd)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Ba)return o.UNSIGNED_INT;if(u===aa)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===yy)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===Sy)return o.LUMINANCE;if(u===My)return o.LUMINANCE_ALPHA;if(u===xr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Md)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===Ey)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===by)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===qe)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Ff)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Ff)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===_g||u===vg||u===xg||u===yg)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===_g)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===vg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===xg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Sg||u===Mg)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Sg)return p===qe?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Mg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Eg||u===bg||u===Tg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Eg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===bg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Tg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Ag)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===wg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Rg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Cg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Dg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Lg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ug)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ng)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Og)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Pg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===zg)return p===qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Bg||u===Fg)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(u===Vf)return p===qe?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Bg)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Fg)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Ty||u===Ig||u===Hg||u===Gg)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(u===Vf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Ig)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Hg)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Gg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class KT extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=g.position.distanceTo(x.position),M=.02,A=.005;m.inputState.pinching&&S>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ms;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const JT=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Xn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new oa({extensions:{fragDepth:!0},vertexShader:JT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new ti(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class e1 extends Er{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,S=null,M=null,A=null;const R=new t1,v=i.getContextAttributes();let _=null,P=null;const D=[],B=[],W=new pe;let k=null;const I=new $n;I.layers.enable(1),I.viewport=new Ke;const _t=new $n;_t.layers.enable(2),_t.viewport=new Ke;const H=[I,_t],E=new KT;E.layers.enable(1),E.layers.enable(2);let O=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ht=D[X];return ht===void 0&&(ht=new fd,D[X]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(X){let ht=D[X];return ht===void 0&&(ht=new fd,D[X]=ht),ht.getGripSpace()},this.getHand=function(X){let ht=D[X];return ht===void 0&&(ht=new fd,D[X]=ht),ht.getHandSpace()};function Rt(X){const ht=B.indexOf(X.inputSource);if(ht===-1)return;const Tt=D[ht];Tt!==void 0&&(Tt.update(X.inputSource,X.frame,m||h),Tt.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){l.removeEventListener("select",Rt),l.removeEventListener("selectstart",Rt),l.removeEventListener("selectend",Rt),l.removeEventListener("squeeze",Rt),l.removeEventListener("squeezestart",Rt),l.removeEventListener("squeezeend",Rt),l.removeEventListener("end",K),l.removeEventListener("inputsourceschange",ot);for(let X=0;X<D.length;X++){const ht=B[X];ht!==null&&(B[X]=null,D[X].disconnect(ht))}O=null,mt=null,R.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,P=null,Dt.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){u=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",Rt),l.addEventListener("selectstart",Rt),l.addEventListener("selectend",Rt),l.addEventListener("squeeze",Rt),l.addEventListener("squeezestart",Rt),l.addEventListener("squeezeend",Rt),l.addEventListener("end",K),l.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ht={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ht),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Sr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Ha,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ht=null,Tt=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ht=v.stencil?Rs:xr,Tt=v.stencil?vr:Ba);const Ft={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Ft),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Sr(S.textureWidth,S.textureHeight,{format:Ei,type:Ha,depthTexture:new _0(S.textureWidth,S.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const It=e.properties.get(P);It.__ignoreDepthValues=S.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ot(X){for(let ht=0;ht<X.removed.length;ht++){const Tt=X.removed[ht],Yt=B.indexOf(Tt);Yt>=0&&(B[Yt]=null,D[Yt].disconnect(Tt))}for(let ht=0;ht<X.added.length;ht++){const Tt=X.added[ht];let Yt=B.indexOf(Tt);if(Yt===-1){for(let It=0;It<D.length;It++)if(It>=B.length){B.push(Tt),Yt=It;break}else if(B[It]===null){B[It]=Tt,Yt=It;break}if(Yt===-1)break}const Ft=D[Yt];Ft&&Ft.connect(Tt)}}const G=new j,lt=new j;function at(X,ht,Tt){G.setFromMatrixPosition(ht.matrixWorld),lt.setFromMatrixPosition(Tt.matrixWorld);const Yt=G.distanceTo(lt),Ft=ht.projectionMatrix.elements,It=Tt.projectionMatrix.elements,$t=Ft[14]/(Ft[10]-1),ee=Ft[14]/(Ft[10]+1),nt=(Ft[9]+1)/Ft[5],Pe=(Ft[9]-1)/Ft[5],ne=(Ft[8]-1)/Ft[0],ue=(It[8]+1)/It[0],Qt=$t*ne,Oe=$t*ue,fe=Yt/(-ne+ue),U=fe*-ne;ht.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(U),X.translateZ(fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=$t+fe,st=ee+fe,Nt=Qt-U,tt=Oe+(Yt-U),J=nt*ee/st*T,ut=Pe*ee/st*T;X.projectionMatrix.makePerspective(Nt,tt,J,ut,T,st),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function dt(X,ht){ht===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ht.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;R.texture!==null&&(X.near=R.depthNear,X.far=R.depthFar),E.near=_t.near=I.near=X.near,E.far=_t.far=I.far=X.far,(O!==E.near||mt!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,mt=E.far,I.near=O,I.far=mt,_t.near=O,_t.far=mt,I.updateProjectionMatrix(),_t.updateProjectionMatrix(),X.updateProjectionMatrix());const ht=X.parent,Tt=E.cameras;dt(E,ht);for(let Yt=0;Yt<Tt.length;Yt++)dt(Tt[Yt],ht);Tt.length===2?at(E,I,_t):E.projectionMatrix.copy(I.projectionMatrix),C(X,E,ht)};function C(X,ht,Tt){Tt===null?X.matrix.copy(ht.matrixWorld):(X.matrix.copy(Tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ht.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ht.projectionMatrix),X.projectionMatrixInverse.copy(ht.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(X){p=X,S!==null&&(S.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return R.texture!==null};let Z=null;function pt(X,ht){if(g=ht.getViewerPose(m||h),A=ht,g!==null){const Tt=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Yt=!1;Tt.length!==E.cameras.length&&(E.cameras.length=0,Yt=!0);for(let It=0;It<Tt.length;It++){const $t=Tt[It];let ee=null;if(M!==null)ee=M.getViewport($t);else{const Pe=x.getViewSubImage(S,$t);ee=Pe.viewport,It===0&&(e.setRenderTargetTextures(P,Pe.colorTexture,S.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(P))}let nt=H[It];nt===void 0&&(nt=new $n,nt.layers.enable(It),nt.viewport=new Ke,H[It]=nt),nt.matrix.fromArray($t.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray($t.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ee.x,ee.y,ee.width,ee.height),It===0&&(E.matrix.copy(nt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Yt===!0&&E.cameras.push(nt)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const It=x.getDepthInformation(Tt[0]);It&&It.isValid&&It.texture&&R.init(e,It,l.renderState)}}for(let Tt=0;Tt<D.length;Tt++){const Yt=B[Tt],Ft=D[Tt];Yt!==null&&Ft!==void 0&&Ft.update(Yt,ht,m||h)}R.render(e,E),Z&&Z(X,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),A=null}const Dt=new m0;Dt.setAnimationLoop(pt),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}function n1(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,d0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,P,D,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),x(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),S(v,_),_.isMeshPhysicalMaterial&&M(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),A(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,P,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Wn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Wn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(v.envMap.value=P,v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,P,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function S(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,P){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const P=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function i1(o,e,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(P,D){const B=D.program;r.uniformBlockBinding(P,B)}function m(P,D){let B=l[P.id];B===void 0&&(A(P),B=g(P),l[P.id]=B,P.addEventListener("dispose",v));const W=D.program;r.updateUBOMapping(P,W);const k=e.render.frame;u[P.id]!==k&&(S(P),u[P.id]=k)}function g(P){const D=x();P.__bindingPointIndex=D;const B=o.createBuffer(),W=P.__size,k=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,W,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,B),B}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const D=l[P.id],B=P.uniforms,W=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let k=0,I=B.length;k<I;k++){const _t=Array.isArray(B[k])?B[k]:[B[k]];for(let H=0,E=_t.length;H<E;H++){const O=_t[H];if(M(O,k,H,W)===!0){const mt=O.__offset,Rt=Array.isArray(O.value)?O.value:[O.value];let K=0;for(let ot=0;ot<Rt.length;ot++){const G=Rt[ot],lt=R(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,mt+K,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,K),K+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,mt,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,D,B,W){const k=P.value,I=D+"_"+B;if(W[I]===void 0)return typeof k=="number"||typeof k=="boolean"?W[I]=k:W[I]=k.clone(),!0;{const _t=W[I];if(typeof k=="number"||typeof k=="boolean"){if(_t!==k)return W[I]=k,!0}else if(_t.equals(k)===!1)return _t.copy(k),!0}return!1}function A(P){const D=P.uniforms;let B=0;const W=16;for(let I=0,_t=D.length;I<_t;I++){const H=Array.isArray(D[I])?D[I]:[D[I]];for(let E=0,O=H.length;E<O;E++){const mt=H[E],Rt=Array.isArray(mt.value)?mt.value:[mt.value];for(let K=0,ot=Rt.length;K<ot;K++){const G=Rt[K],lt=R(G),at=B%W;at!==0&&W-at<lt.boundary&&(B+=W-at),mt.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),mt.__offset=B,B+=lt.storage}}}const k=B%W;return k>0&&(B+=W-k),P.__size=B,P.__cache={},this}function R(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function v(P){const D=P.target;D.removeEventListener("dispose",v);const B=h.indexOf(D.__bindingPointIndex);h.splice(B,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=Ky(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=h;const M=new Uint32Array(4),A=new Int32Array(4);let R=null,v=null;const _=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Ia,this.toneMappingExposure=1;const D=this;let B=!1,W=0,k=0,I=null,_t=-1,H=null;const E=new Ke,O=new Ke;let mt=null;const Rt=new Re(0);let K=0,ot=i.width,G=i.height,lt=1,at=null,dt=null;const C=new Ke(0,0,ot,G),Z=new Ke(0,0,ot,G);let pt=!1;const Dt=new Nd;let X=!1,ht=!1,Tt=null;const Yt=new on,Ft=new pe,It=new j,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return I===null?lt:1}let nt=r;function Pe(b,F){for(let V=0;V<b.length;V++){const $=b[V],q=i.getContext($,F);if(q!==null)return q}return null}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",jt,!1),i.addEventListener("webglcontextrestored",N,!1),i.addEventListener("webglcontextcreationerror",bt,!1),nt===null){const F=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&F.shift(),nt=Pe(F,b),nt===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),nt.getShaderPrecisionFormat===void 0&&(nt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ne,ue,Qt,Oe,fe,U,T,st,Nt,tt,J,ut,it,ft,zt,Lt,xt,ie,Pt,Vt,Bt,yt,te,L;function St(){ne=new ub(nt),ue=new ab(nt,ne,e),ne.init(ue),yt=new ZT(nt,ne,ue),Qt=new YT(nt,ne,ue),Oe=new hb(nt),fe=new NT,U=new jT(nt,ne,Qt,fe,ue,yt,Oe),T=new sb(D),st=new cb(D),Nt=new SS(nt,ue),te=new nb(nt,ne,Nt,ue),tt=new fb(nt,Nt,Oe,te),J=new _b(nt,tt,Nt,Oe),Pt=new gb(nt,ue,U),Lt=new rb(fe),ut=new UT(D,T,st,ne,ue,te,Lt),it=new n1(D,fe),ft=new PT,zt=new GT(ne,ue),ie=new eb(D,T,st,Qt,J,S,p),xt=new qT(D,J,ue),L=new i1(nt,Oe,ue,Qt),Vt=new ib(nt,ne,Oe,ue),Bt=new db(nt,ne,Oe,ue),Oe.programs=ut.programs,D.capabilities=ue,D.extensions=ne,D.properties=fe,D.renderLists=ft,D.shadowMap=xt,D.state=Qt,D.info=Oe}St();const At=new e1(D,nt);this.xr=At,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(b){b!==void 0&&(lt=b,this.setSize(ot,G,!1))},this.getSize=function(b){return b.set(ot,G)},this.setSize=function(b,F,V=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=b,G=F,i.width=Math.floor(b*lt),i.height=Math.floor(F*lt),V===!0&&(i.style.width=b+"px",i.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(ot*lt,G*lt).floor()},this.setDrawingBufferSize=function(b,F,V){ot=b,G=F,lt=V,i.width=Math.floor(b*V),i.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,F,V,$){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,F,V,$),Qt.viewport(E.copy(C).multiplyScalar(lt).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,F,V,$){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,F,V,$),Qt.scissor(O.copy(Z).multiplyScalar(lt).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){Qt.setScissorTest(pt=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(b=!0,F=!0,V=!0){let $=0;if(b){let q=!1;if(I!==null){const wt=I.texture.format;q=wt===J_||wt===Q_||wt===K_}if(q){const wt=I.texture.type,Ut=wt===Ha||wt===Ba||wt===Cd||wt===vr||wt===j_||wt===Z_,Xt=ie.getClearColor(),Ht=ie.getClearAlpha(),ae=Xt.r,re=Xt.g,oe=Xt.b;Ut?(M[0]=ae,M[1]=re,M[2]=oe,M[3]=Ht,nt.clearBufferuiv(nt.COLOR,0,M)):(A[0]=ae,A[1]=re,A[2]=oe,A[3]=Ht,nt.clearBufferiv(nt.COLOR,0,A))}else $|=nt.COLOR_BUFFER_BIT}F&&($|=nt.DEPTH_BUFFER_BIT),V&&($|=nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",jt,!1),i.removeEventListener("webglcontextrestored",N,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),ft.dispose(),zt.dispose(),fe.dispose(),T.dispose(),st.dispose(),J.dispose(),te.dispose(),L.dispose(),ut.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ee),At.removeEventListener("sessionend",he),Tt&&(Tt.dispose(),Tt=null),We.stop()};function jt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const b=Oe.autoReset,F=xt.enabled,V=xt.autoUpdate,$=xt.needsUpdate,q=xt.type;St(),Oe.autoReset=b,xt.enabled=F,xt.autoUpdate=V,xt.needsUpdate=$,xt.type=q}function bt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){const F=b.target;F.removeEventListener("dispose",Et),Zt(F)}function Zt(b){qt(b),fe.remove(b)}function qt(b){const F=fe.get(b).programs;F!==void 0&&(F.forEach(function(V){ut.releaseProgram(V)}),b.isShaderMaterial&&ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,$,q,wt){F===null&&(F=$t);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Xt=Ot(b,F,V,$,q);Qt.setMaterial($,Ut);let Ht=V.index,ae=1;if($.wireframe===!0){if(Ht=tt.getWireframeAttribute(V),Ht===void 0)return;ae=2}const re=V.drawRange,oe=V.attributes.position;let De=re.start*ae,ze=(re.start+re.count)*ae;wt!==null&&(De=Math.max(De,wt.start*ae),ze=Math.min(ze,(wt.start+wt.count)*ae)),Ht!==null?(De=Math.max(De,0),ze=Math.min(ze,Ht.count)):oe!=null&&(De=Math.max(De,0),ze=Math.min(ze,oe.count));const Ze=ze-De;if(Ze<0||Ze===1/0)return;te.setup(q,$,Xt,V,Ht);let In,Le=Vt;if(Ht!==null&&(In=Nt.get(Ht),Le=Bt,Le.setIndex(In)),q.isMesh)$.wireframe===!0?(Qt.setLineWidth($.wireframeLinewidth*ee()),Le.setMode(nt.LINES)):Le.setMode(nt.TRIANGLES);else if(q.isLine){let ve=$.linewidth;ve===void 0&&(ve=1),Qt.setLineWidth(ve*ee()),q.isLineSegments?Le.setMode(nt.LINES):q.isLineLoop?Le.setMode(nt.LINE_LOOP):Le.setMode(nt.LINE_STRIP)}else q.isPoints?Le.setMode(nt.POINTS):q.isSprite&&Le.setMode(nt.TRIANGLES);if(q.isBatchedMesh)Le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Le.renderInstances(De,Ze,q.count);else if(V.isInstancedBufferGeometry){const ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pi=Math.min(V.instanceCount,ve);Le.renderInstances(De,Ze,pi)}else Le.render(De,Ze)};function _e(b,F,V){b.transparent===!0&&b.side===Li&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,Mn(b,F,V),b.side=Va,b.needsUpdate=!0,Mn(b,F,V),b.side=Li):Mn(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),v=zt.get(V),v.init(),P.push(v),V.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),b!==V&&b.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(D._useLegacyLights);const $=new Set;return b.traverse(function(q){const wt=q.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){const Xt=wt[Ut];_e(Xt,V,q),$.add(Xt)}else _e(wt,V,q),$.add(wt)}),P.pop(),v=null,$},this.compileAsync=function(b,F,V=null){const $=this.compile(b,F,V);return new Promise(q=>{function wt(){if($.forEach(function(Ut){fe.get(Ut).currentProgram.isReady()&&$.delete(Ut)}),$.size===0){q(b);return}setTimeout(wt,10)}ne.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ce=null;function ye(b){ce&&ce(b)}function Ee(){We.stop()}function he(){We.start()}const We=new m0;We.setAnimationLoop(ye),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(b){ce=b,At.setAnimationLoop(b),b===null?We.stop():We.start()},At.addEventListener("sessionstart",Ee),At.addEventListener("sessionend",he),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(F),F=At.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,F,I),v=zt.get(b,P.length),v.init(),P.push(v),Yt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Dt.setFromProjectionMatrix(Yt),ht=this.localClippingEnabled,X=Lt.init(this.clippingPlanes,ht),R=ft.get(b,_.length),R.init(),_.push(R),ln(b,F,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(at,dt),this.info.render.frame++,X===!0&&Lt.beginShadows();const V=v.state.shadowsArray;if(xt.render(V,b,F),X===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1)&&ie.render(R,b),v.setupLights(D._useLegacyLights),F.isArrayCamera){const $=F.cameras;for(let q=0,wt=$.length;q<wt;q++){const Ut=$[q];Pi(R,b,Ut,Ut.viewport)}}else Pi(R,b,F);I!==null&&(U.updateMultisampleRenderTarget(I),U.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(D,b,F),te.resetDefaultState(),_t=-1,H=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function ln(b,F,V,$){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Dt.intersectsSprite(b)){$&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Yt);const Ut=J.update(b),Xt=b.material;Xt.visible&&R.push(b,Ut,Xt,V,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Dt.intersectsObject(b))){const Ut=J.update(b),Xt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),It.copy(Ut.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Yt)),Array.isArray(Xt)){const Ht=Ut.groups;for(let ae=0,re=Ht.length;ae<re;ae++){const oe=Ht[ae],De=Xt[oe.materialIndex];De&&De.visible&&R.push(b,Ut,De,V,It.z,oe)}}else Xt.visible&&R.push(b,Ut,Xt,V,It.z,null)}}const wt=b.children;for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++)ln(wt[Ut],F,V,$)}function Pi(b,F,V,$){const q=b.opaque,wt=b.transmissive,Ut=b.transparent;v.setupLightsView(V),X===!0&&Lt.setGlobalState(D.clippingPlanes,V),wt.length>0&&ka(q,wt,F,V),$&&Qt.viewport(E.copy($)),q.length>0&&Ye(q,F,V),wt.length>0&&Ye(wt,F,V),Ut.length>0&&Ye(Ut,F,V),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function ka(b,F,V,$){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const wt=ue.isWebGL2;Tt===null&&(Tt=new Sr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Fo:Ha,minFilter:_r,samples:wt?4:0})),D.getDrawingBufferSize(Ft),wt?Tt.setSize(Ft.x,Ft.y):Tt.setSize(yc(Ft.x),yc(Ft.y));const Ut=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(Rt),K=D.getClearAlpha(),K<1&&D.setClearColor(16777215,.5),D.clear();const Xt=D.toneMapping;D.toneMapping=Ia,Ye(b,V,$),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt);let Ht=!1;for(let ae=0,re=F.length;ae<re;ae++){const oe=F[ae],De=oe.object,ze=oe.geometry,Ze=oe.material,In=oe.group;if(Ze.side===Li&&De.layers.test($.layers)){const Le=Ze.side;Ze.side=Wn,Ze.needsUpdate=!0,zi(De,V,$,ze,Ze,In),Ze.side=Le,Ze.needsUpdate=!0,Ht=!0}}Ht===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt)),D.setRenderTarget(Ut),D.setClearColor(Rt,K),D.toneMapping=Xt}function Ye(b,F,V){const $=F.isScene===!0?F.overrideMaterial:null;for(let q=0,wt=b.length;q<wt;q++){const Ut=b[q],Xt=Ut.object,Ht=Ut.geometry,ae=$===null?Ut.material:$,re=Ut.group;Xt.layers.test(V.layers)&&zi(Xt,F,V,Ht,ae,re)}}function zi(b,F,V,$,q,wt){b.onBeforeRender(D,F,V,$,q,wt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(D,F,V,$,b,wt),q.transparent===!0&&q.side===Li&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,D.renderBufferDirect(V,F,$,q,b,wt),q.side=Va,q.needsUpdate=!0,D.renderBufferDirect(V,F,$,q,b,wt),q.side=Li):D.renderBufferDirect(V,F,$,q,b,wt),b.onAfterRender(D,F,V,$,q,wt)}function Mn(b,F,V){F.isScene!==!0&&(F=$t);const $=fe.get(b),q=v.state.lights,wt=v.state.shadowsArray,Ut=q.state.version,Xt=ut.getParameters(b,q.state,wt,F,V),Ht=ut.getProgramCacheKey(Xt);let ae=$.programs;$.environment=b.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(b.isMeshStandardMaterial?st:T).get(b.envMap||$.environment),ae===void 0&&(b.addEventListener("dispose",Et),ae=new Map,$.programs=ae);let re=ae.get(Ht);if(re!==void 0){if($.currentProgram===re&&$.lightsStateVersion===Ut)return nn(b,Xt),re}else Xt.uniforms=ut.getUniforms(b),b.onBuild(V,Xt,D),b.onBeforeCompile(Xt,D),re=ut.acquireProgram(Xt,Ht),ae.set(Ht,re),$.uniforms=Xt.uniforms;const oe=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(oe.clippingPlanes=Lt.uniform),nn(b,Xt),$.needsLights=Wt(b),$.lightsStateVersion=Ut,$.needsLights&&(oe.ambientLightColor.value=q.state.ambient,oe.lightProbe.value=q.state.probe,oe.directionalLights.value=q.state.directional,oe.directionalLightShadows.value=q.state.directionalShadow,oe.spotLights.value=q.state.spot,oe.spotLightShadows.value=q.state.spotShadow,oe.rectAreaLights.value=q.state.rectArea,oe.ltc_1.value=q.state.rectAreaLTC1,oe.ltc_2.value=q.state.rectAreaLTC2,oe.pointLights.value=q.state.point,oe.pointLightShadows.value=q.state.pointShadow,oe.hemisphereLights.value=q.state.hemi,oe.directionalShadowMap.value=q.state.directionalShadowMap,oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,oe.spotShadowMap.value=q.state.spotShadowMap,oe.spotLightMatrix.value=q.state.spotLightMatrix,oe.spotLightMap.value=q.state.spotLightMap,oe.pointShadowMap.value=q.state.pointShadowMap,oe.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=re,$.uniformsList=null,re}function je(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=pc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function nn(b,F){const V=fe.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Ot(b,F,V,$,q){F.isScene!==!0&&(F=$t),U.resetTextureUnits();const wt=F.fog,Ut=$.isMeshStandardMaterial?F.environment:null,Xt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sa,Ht=($.isMeshStandardMaterial?st:T).get($.envMap||Ut),ae=$.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,re=!!V.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),oe=!!V.morphAttributes.position,De=!!V.morphAttributes.normal,ze=!!V.morphAttributes.color;let Ze=Ia;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ze=D.toneMapping);const In=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=In!==void 0?In.length:0,ve=fe.get($),pi=v.state.lights;if(X===!0&&(ht===!0||b!==H)){const Hn=b===H&&$.id===_t;Lt.setState($,b,Hn)}let Be=!1;$.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==pi.state.version||ve.outputColorSpace!==Xt||q.isBatchedMesh&&ve.batching===!1||!q.isBatchedMesh&&ve.batching===!0||q.isInstancedMesh&&ve.instancing===!1||!q.isInstancedMesh&&ve.instancing===!0||q.isSkinnedMesh&&ve.skinning===!1||!q.isSkinnedMesh&&ve.skinning===!0||q.isInstancedMesh&&ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ve.instancingColor===!1&&q.instanceColor!==null||ve.envMap!==Ht||$.fog===!0&&ve.fog!==wt||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Lt.numPlanes||ve.numIntersection!==Lt.numIntersection)||ve.vertexAlphas!==ae||ve.vertexTangents!==re||ve.morphTargets!==oe||ve.morphNormals!==De||ve.morphColors!==ze||ve.toneMapping!==Ze||ue.isWebGL2===!0&&ve.morphTargetsCount!==Le)&&(Be=!0):(Be=!0,ve.__version=$.version);let Xe=ve.currentProgram;Be===!0&&(Xe=Mn($,F,q));let _n=!1,an=!1,Ns=!1;const rn=Xe.getUniforms(),bi=ve.uniforms;if(Qt.useProgram(Xe.program)&&(_n=!0,an=!0,Ns=!0),$.id!==_t&&(_t=$.id,an=!0),_n||H!==b){rn.setValue(nt,"projectionMatrix",b.projectionMatrix),rn.setValue(nt,"viewMatrix",b.matrixWorldInverse);const Hn=rn.map.cameraPosition;Hn!==void 0&&Hn.setValue(nt,It.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&rn.setValue(nt,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&rn.setValue(nt,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,an=!0,Ns=!0)}if(q.isSkinnedMesh){rn.setOptional(nt,q,"bindMatrix"),rn.setOptional(nt,q,"bindMatrixInverse");const Hn=q.skeleton;Hn&&(ue.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),rn.setValue(nt,"boneTexture",Hn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(rn.setOptional(nt,q,"batchingTexture"),rn.setValue(nt,"batchingTexture",q._matricesTexture,U));const la=V.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&ue.isWebGL2===!0)&&Pt.update(q,V,Xe),(an||ve.receiveShadow!==q.receiveShadow)&&(ve.receiveShadow=q.receiveShadow,rn.setValue(nt,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bi.envMap.value=Ht,bi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),an&&(rn.setValue(nt,"toneMappingExposure",D.toneMappingExposure),ve.needsLights&&kt(bi,Ns),wt&&$.fog===!0&&it.refreshFogUniforms(bi,wt),it.refreshMaterialUniforms(bi,$,lt,G,Tt),pc.upload(nt,je(ve),bi,U)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pc.upload(nt,je(ve),bi,U),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&rn.setValue(nt,"center",q.center),rn.setValue(nt,"modelViewMatrix",q.modelViewMatrix),rn.setValue(nt,"normalMatrix",q.normalMatrix),rn.setValue(nt,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Hn=$.uniformsGroups;for(let Rn=0,Os=Hn.length;Rn<Os;Rn++)if(ue.isWebGL2){const Ps=Hn[Rn];L.update(Ps,Xe),L.bind(Ps,Xe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xe}function kt(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Wt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,F,V){fe.get(b.texture).__webglTexture=F,fe.get(b.depthTexture).__webglTexture=V;const $=fe.get(b);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=V===void 0,$.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const V=fe.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){I=b,W=F,k=V;let $=!0,q=null,wt=!1,Ut=!1;if(b){const Ht=fe.get(b);Ht.__useDefaultFramebuffer!==void 0?(Qt.bindFramebuffer(nt.FRAMEBUFFER,null),$=!1):Ht.__webglFramebuffer===void 0?U.setupRenderTarget(b):Ht.__hasExternalTextures&&U.rebindTextures(b,fe.get(b.texture).__webglTexture,fe.get(b.depthTexture).__webglTexture);const ae=b.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Ut=!0);const re=fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(re[F])?q=re[F][V]:q=re[F],wt=!0):ue.isWebGL2&&b.samples>0&&U.useMultisampledRTT(b)===!1?q=fe.get(b).__webglMultisampledFramebuffer:Array.isArray(re)?q=re[V]:q=re,E.copy(b.viewport),O.copy(b.scissor),mt=b.scissorTest}else E.copy(C).multiplyScalar(lt).floor(),O.copy(Z).multiplyScalar(lt).floor(),mt=pt;if(Qt.bindFramebuffer(nt.FRAMEBUFFER,q)&&ue.drawBuffers&&$&&Qt.drawBuffers(b,q),Qt.viewport(E),Qt.scissor(O),Qt.setScissorTest(mt),wt){const Ht=fe.get(b.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ht.__webglTexture,V)}else if(Ut){const Ht=fe.get(b.texture),ae=F||0;nt.framebufferTextureLayer(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,Ht.__webglTexture,V||0,ae)}_t=-1},this.readRenderTargetPixels=function(b,F,V,$,q,wt,Ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Xt=Xt[Ut]),Xt){Qt.bindFramebuffer(nt.FRAMEBUFFER,Xt);try{const Ht=b.texture,ae=Ht.format,re=Ht.type;if(ae!==Ei&&yt.convert(ae)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const oe=re===Fo&&(ne.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ne.has("EXT_color_buffer_float"));if(re!==Ha&&yt.convert(re)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(re===aa&&(ue.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-$&&V>=0&&V<=b.height-q&&nt.readPixels(F,V,$,q,yt.convert(ae),yt.convert(re),wt)}finally{const Ht=I!==null?fe.get(I).__webglFramebuffer:null;Qt.bindFramebuffer(nt.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(b,F,V=0){const $=Math.pow(2,-V),q=Math.floor(F.image.width*$),wt=Math.floor(F.image.height*$);U.setTexture2D(F,0),nt.copyTexSubImage2D(nt.TEXTURE_2D,V,0,0,b.x,b.y,q,wt),Qt.unbindTexture()},this.copyTextureToTexture=function(b,F,V,$=0){const q=F.image.width,wt=F.image.height,Ut=yt.convert(V.format),Xt=yt.convert(V.type);U.setTexture2D(V,0),nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,V.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,$,b.x,b.y,q,wt,Ut,Xt,F.image.data):F.isCompressedTexture?nt.compressedTexSubImage2D(nt.TEXTURE_2D,$,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Ut,F.mipmaps[0].data):nt.texSubImage2D(nt.TEXTURE_2D,$,b.x,b.y,Ut,Xt,F.image),$===0&&V.generateMipmaps&&nt.generateMipmap(nt.TEXTURE_2D),Qt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V,$,q=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=b.max.x-b.min.x+1,Ut=b.max.y-b.min.y+1,Xt=b.max.z-b.min.z+1,Ht=yt.convert($.format),ae=yt.convert($.type);let re;if($.isData3DTexture)U.setTexture3D($,0),re=nt.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)U.setTexture2DArray($,0),re=nt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,$.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,$.unpackAlignment);const oe=nt.getParameter(nt.UNPACK_ROW_LENGTH),De=nt.getParameter(nt.UNPACK_IMAGE_HEIGHT),ze=nt.getParameter(nt.UNPACK_SKIP_PIXELS),Ze=nt.getParameter(nt.UNPACK_SKIP_ROWS),In=nt.getParameter(nt.UNPACK_SKIP_IMAGES),Le=V.isCompressedTexture?V.mipmaps[q]:V.image;nt.pixelStorei(nt.UNPACK_ROW_LENGTH,Le.width),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Le.height),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,b.min.x),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,b.min.y),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?nt.texSubImage3D(re,q,F.x,F.y,F.z,wt,Ut,Xt,Ht,ae,Le.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),nt.compressedTexSubImage3D(re,q,F.x,F.y,F.z,wt,Ut,Xt,Ht,Le.data)):nt.texSubImage3D(re,q,F.x,F.y,F.z,wt,Ut,Xt,Ht,ae,Le),nt.pixelStorei(nt.UNPACK_ROW_LENGTH,oe),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,De),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,ze),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,Ze),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,In),q===0&&$.generateMipmaps&&nt.generateMipmap(re),Qt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Qt.unbindTexture()},this.resetState=function(){W=0,k=0,I=null,Qt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dd?"display-p3":"srgb",i.unpackColorSpace=He.workingColorSpace===bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?yr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?An:sa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class a1 extends E0{}a1.prototype.isWebGL1Renderer=!0;class r1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class b0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U_=new on,Td=new Ud,fc=new Tc,dc=new j;class s1 extends wn{constructor(e=new Oi,i=new b0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;U_.copy(l).invert(),Td.copy(e.ray).applyMatrix4(U_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const S=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let A=S,R=M;A<R;A++){const v=m.getX(A);dc.fromBufferAttribute(x,v),N_(dc,v,p,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let A=S,R=M;A<R;A++)dc.fromBufferAttribute(x,A),N_(dc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function N_(o,e,i,r,l,u,h){const d=Td.distanceSqToPoint(o);if(d<i){const p=new j;Td.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class Mc extends Oi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],x=new j,S=new j,M=[],A=[],R=[],v=[];for(let _=0;_<=r;_++){const P=[],D=_/r;let B=0;_===0&&h===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let W=0;W<=i;W++){const k=W/i;x.x=-e*Math.cos(l+k*u)*Math.sin(h+D*d),x.y=e*Math.cos(h+D*d),x.z=e*Math.sin(l+k*u)*Math.sin(h+D*d),A.push(x.x,x.y,x.z),S.copy(x).normalize(),R.push(S.x,S.y,S.z),v.push(k+B,1-D),P.push(m++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const D=g[_][P+1],B=g[_][P],W=g[_+1][P],k=g[_+1][P+1];(_!==0||h>0)&&M.push(D,B,k),(_!==r-1||p<Math.PI)&&M.push(B,W,k)}this.setIndex(M),this.setAttribute("position",new hi(A,3)),this.setAttribute("normal",new hi(R,3)),this.setAttribute("uv",new hi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class o1 extends Ls{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const dd=new on,O_=new j,P_=new j;class T0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;O_.setFromMatrixPosition(e.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const z_=new on,Po=new j,hd=new j;class l1 extends T0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),r.position.copy(Po),hd.copy(r.position),hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(hd),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),z_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z_)}}class B_ extends Pd{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new l1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class c1 extends T0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends Pd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new c1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends Pd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class H_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const G_={type:"change"},pd={type:"start"},V_={type:"end"},hc=new Ud,k_=new za,u1=Math.cos(70*hr.DEG2RAD);class f1 extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",zt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",zt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(G_),r.update(),u=l.NONE},this.update=function(){const L=new j,St=new Mr().setFromUnitVectors(e.up,new j(0,1,0)),At=St.clone().invert(),jt=new j,N=new Mr,bt=new j,Et=2*Math.PI;return function(qt=null){const _e=r.object.position;L.copy(_e).sub(r.target),L.applyQuaternion(St),d.setFromVector3(L),r.autoRotate&&u===l.NONE&&mt(E(qt)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let ce=r.minAzimuthAngle,ye=r.maxAzimuthAngle;isFinite(ce)&&isFinite(ye)&&(ce<-Math.PI?ce+=Et:ce>Math.PI&&(ce-=Et),ye<-Math.PI?ye+=Et:ye>Math.PI&&(ye-=Et),ce<=ye?d.theta=Math.max(ce,Math.min(ye,d.theta)):d.theta=d.theta>(ce+ye)/2?Math.max(ce,d.theta):Math.min(ye,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&k||r.object.isOrthographicCamera?d.radius=C(d.radius):d.radius=C(d.radius*m),L.setFromSpherical(d),L.applyQuaternion(At),_e.copy(r.target).add(L),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Ee=!1;if(r.zoomToCursor&&k){let he=null;if(r.object.isPerspectiveCamera){const We=L.length();he=C(We*m);const ln=We-he;r.object.position.addScaledVector(B,ln),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const We=new j(W.x,W.y,0);We.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Ee=!0;const ln=new j(W.x,W.y,0);ln.unproject(r.object),r.object.position.sub(ln).add(We),r.object.updateMatrixWorld(),he=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(he).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<u1?e.lookAt(r.target):(k_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(k_,r.target))))}else r.object.isOrthographicCamera&&(Ee=m!==1,Ee&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,k=!1,Ee||jt.distanceToSquared(r.object.position)>h||8*(1-N.dot(r.object.quaternion))>h||bt.distanceToSquared(r.target)>0?(r.dispatchEvent(G_),jt.copy(r.object.position),N.copy(r.object.quaternion),bt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ie),r.domElement.removeEventListener("pointerdown",U),r.domElement.removeEventListener("pointercancel",st),r.domElement.removeEventListener("wheel",J),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",st),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",zt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new H_,p=new H_;let m=1;const g=new j,x=new pe,S=new pe,M=new pe,A=new pe,R=new pe,v=new pe,_=new pe,P=new pe,D=new pe,B=new j,W=new pe;let k=!1;const I=[],_t={};let H=!1;function E(L){return L!==null?2*Math.PI/60*r.autoRotateSpeed*L:2*Math.PI/60/60*r.autoRotateSpeed}function O(L){const St=Math.abs(L*.01);return Math.pow(.95,r.zoomSpeed*St)}function mt(L){p.theta-=L}function Rt(L){p.phi-=L}const K=function(){const L=new j;return function(At,jt){L.setFromMatrixColumn(jt,0),L.multiplyScalar(-At),g.add(L)}}(),ot=function(){const L=new j;return function(At,jt){r.screenSpacePanning===!0?L.setFromMatrixColumn(jt,1):(L.setFromMatrixColumn(jt,0),L.crossVectors(r.object.up,L)),L.multiplyScalar(At),g.add(L)}}(),G=function(){const L=new j;return function(At,jt){const N=r.domElement;if(r.object.isPerspectiveCamera){const bt=r.object.position;L.copy(bt).sub(r.target);let Et=L.length();Et*=Math.tan(r.object.fov/2*Math.PI/180),K(2*At*Et/N.clientHeight,r.object.matrix),ot(2*jt*Et/N.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(K(At*(r.object.right-r.object.left)/r.object.zoom/N.clientWidth,r.object.matrix),ot(jt*(r.object.top-r.object.bottom)/r.object.zoom/N.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function lt(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function at(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function dt(L,St){if(!r.zoomToCursor)return;k=!0;const At=r.domElement.getBoundingClientRect(),jt=L-At.left,N=St-At.top,bt=At.width,Et=At.height;W.x=jt/bt*2-1,W.y=-(N/Et)*2+1,B.set(W.x,W.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(L){return Math.max(r.minDistance,Math.min(r.maxDistance,L))}function Z(L){x.set(L.clientX,L.clientY)}function pt(L){dt(L.clientX,L.clientX),_.set(L.clientX,L.clientY)}function Dt(L){A.set(L.clientX,L.clientY)}function X(L){S.set(L.clientX,L.clientY),M.subVectors(S,x).multiplyScalar(r.rotateSpeed);const St=r.domElement;mt(2*Math.PI*M.x/St.clientHeight),Rt(2*Math.PI*M.y/St.clientHeight),x.copy(S),r.update()}function ht(L){P.set(L.clientX,L.clientY),D.subVectors(P,_),D.y>0?lt(O(D.y)):D.y<0&&at(O(D.y)),_.copy(P),r.update()}function Tt(L){R.set(L.clientX,L.clientY),v.subVectors(R,A).multiplyScalar(r.panSpeed),G(v.x,v.y),A.copy(R),r.update()}function Yt(L){dt(L.clientX,L.clientY),L.deltaY<0?at(O(L.deltaY)):L.deltaY>0&&lt(O(L.deltaY)),r.update()}function Ft(L){let St=!1;switch(L.code){case r.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Rt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,r.keyPanSpeed),St=!0;break;case r.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Rt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,-r.keyPanSpeed),St=!0;break;case r.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?mt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(r.keyPanSpeed,0),St=!0;break;case r.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?mt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(-r.keyPanSpeed,0),St=!0;break}St&&(L.preventDefault(),r.update())}function It(L){if(I.length===1)x.set(L.pageX,L.pageY);else{const St=yt(L),At=.5*(L.pageX+St.x),jt=.5*(L.pageY+St.y);x.set(At,jt)}}function $t(L){if(I.length===1)A.set(L.pageX,L.pageY);else{const St=yt(L),At=.5*(L.pageX+St.x),jt=.5*(L.pageY+St.y);A.set(At,jt)}}function ee(L){const St=yt(L),At=L.pageX-St.x,jt=L.pageY-St.y,N=Math.sqrt(At*At+jt*jt);_.set(0,N)}function nt(L){r.enableZoom&&ee(L),r.enablePan&&$t(L)}function Pe(L){r.enableZoom&&ee(L),r.enableRotate&&It(L)}function ne(L){if(I.length==1)S.set(L.pageX,L.pageY);else{const At=yt(L),jt=.5*(L.pageX+At.x),N=.5*(L.pageY+At.y);S.set(jt,N)}M.subVectors(S,x).multiplyScalar(r.rotateSpeed);const St=r.domElement;mt(2*Math.PI*M.x/St.clientHeight),Rt(2*Math.PI*M.y/St.clientHeight),x.copy(S)}function ue(L){if(I.length===1)R.set(L.pageX,L.pageY);else{const St=yt(L),At=.5*(L.pageX+St.x),jt=.5*(L.pageY+St.y);R.set(At,jt)}v.subVectors(R,A).multiplyScalar(r.panSpeed),G(v.x,v.y),A.copy(R)}function Qt(L){const St=yt(L),At=L.pageX-St.x,jt=L.pageY-St.y,N=Math.sqrt(At*At+jt*jt);P.set(0,N),D.set(0,Math.pow(P.y/_.y,r.zoomSpeed)),lt(D.y),_.copy(P);const bt=(L.pageX+St.x)*.5,Et=(L.pageY+St.y)*.5;dt(bt,Et)}function Oe(L){r.enableZoom&&Qt(L),r.enablePan&&ue(L)}function fe(L){r.enableZoom&&Qt(L),r.enableRotate&&ne(L)}function U(L){r.enabled!==!1&&(I.length===0&&(r.domElement.setPointerCapture(L.pointerId),r.domElement.addEventListener("pointermove",T),r.domElement.addEventListener("pointerup",st)),Pt(L),L.pointerType==="touch"?Lt(L):Nt(L))}function T(L){r.enabled!==!1&&(L.pointerType==="touch"?xt(L):tt(L))}function st(L){switch(Vt(L),I.length){case 0:r.domElement.releasePointerCapture(L.pointerId),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",st),r.dispatchEvent(V_),u=l.NONE;break;case 1:const St=I[0],At=_t[St];Lt({pointerId:St,pageX:At.x,pageY:At.y});break}}function Nt(L){let St;switch(L.button){case 0:St=r.mouseButtons.LEFT;break;case 1:St=r.mouseButtons.MIDDLE;break;case 2:St=r.mouseButtons.RIGHT;break;default:St=-1}switch(St){case es.DOLLY:if(r.enableZoom===!1)return;pt(L),u=l.DOLLY;break;case es.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enablePan===!1)return;Dt(L),u=l.PAN}else{if(r.enableRotate===!1)return;Z(L),u=l.ROTATE}break;case es.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enableRotate===!1)return;Z(L),u=l.ROTATE}else{if(r.enablePan===!1)return;Dt(L),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function tt(L){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;X(L);break;case l.DOLLY:if(r.enableZoom===!1)return;ht(L);break;case l.PAN:if(r.enablePan===!1)return;Tt(L);break}}function J(L){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(L.preventDefault(),r.dispatchEvent(pd),Yt(ut(L)),r.dispatchEvent(V_))}function ut(L){const St=L.deltaMode,At={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(St){case 1:At.deltaY*=16;break;case 2:At.deltaY*=100;break}return L.ctrlKey&&!H&&(At.deltaY*=10),At}function it(L){L.key==="Control"&&(H=!0,r.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(L){L.key==="Control"&&(H=!1,r.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function zt(L){r.enabled===!1||r.enablePan===!1||Ft(L)}function Lt(L){switch(Bt(L),I.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;It(L),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;$t(L),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;nt(L),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Pe(L),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function xt(L){switch(Bt(L),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ne(L),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;ue(L),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Oe(L),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;fe(L),r.update();break;default:u=l.NONE}}function ie(L){r.enabled!==!1&&L.preventDefault()}function Pt(L){I.push(L.pointerId)}function Vt(L){delete _t[L.pointerId];for(let St=0;St<I.length;St++)if(I[St]==L.pointerId){I.splice(St,1);return}}function Bt(L){let St=_t[L.pointerId];St===void 0&&(St=new pe,_t[L.pointerId]=St),St.set(L.pageX,L.pageY)}function yt(L){const St=L.pointerId===I[0]?I[1]:I[0];return _t[St]}r.domElement.addEventListener("contextmenu",ie),r.domElement.addEventListener("pointerdown",U),r.domElement.addEventListener("pointercancel",st),r.domElement.addEventListener("wheel",J,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",it,{passive:!0,capture:!0}),this.update()}}function d1(){const o=ge.useRef(null),[e,i]=ge.useState(!1),[r,l]=ge.useState(!1),[u,h]=ge.useState(!1),[d,p]=ge.useState(!1),[m,g]=ge.useState(!1),[x,S]=ge.useState(!1),[M,A]=ge.useState(!1),[R,v]=ge.useState(!1),[_,P]=ge.useState(!1),[D,B]=ge.useState(!1),W=ge.useRef({beta:0,gamma:0}),k=ge.useRef(0),I=ge.useRef(!1),_t=ge.useRef(!1),H=ge.useRef({position:{x:1,z:1},direction:new j(0,0,1),worldPosition:new j(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),E=ge.useRef({}),O=ge.useRef(null),mt=ge.useRef(!1);ge.useEffect(()=>{_t.current=u},[u]),ge.useEffect(()=>{mt.current=e},[e]);const[Rt,K]=ge.useState(null),ot=ge.useRef(null);ge.useRef(!1);const G=ge.useRef(null),lt=ge.useRef(!1),[at,dt]=ge.useState({beta:0,gamma:0,velocity:{x:0,z:0},gravity:{x:0,z:0},position:{x:0,z:0},collision:!1,collisionEdge:"",eventCount:0,lastUpdate:Date.now(),eventType:"none",showDebug:!0}),C=()=>{if(console.log("Restarting game..."),!E.current.generateMaze||!E.current.createWalls){console.error("Game functions not initialized");return}if(O.current&&O.current.parent&&(console.log("Cleaning up celebration particles"),O.current.parent.remove(O.current),O.current.geometry&&O.current.geometry.dispose(),O.current.material&&O.current.material.dispose(),O.current=null,K(null)),console.log("Resetting game state"),i(!1),l(!1),h(!1),lt.current=!1,console.log("Resetting player position and direction"),H.current.position={x:1,z:1},H.current.direction.set(0,0,1),console.log("Resetting maze reference"),G.current=null,console.log("Generating new maze"),E.current.generateMaze(),console.log("Creating new walls"),E.current.createWalls(),console.log("Updating player world position"),H.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),E.current.createPlayer&&E.current.mazeGroup){console.log("Creating new player mesh"),H.current.mesh&&H.current.mesh.parent&&(console.log("Removing old player mesh"),H.current.mesh.parent.remove(H.current.mesh),H.current.mesh.children.forEach(J=>{J.geometry&&J.geometry.dispose(),J.material&&J.material.dispose()})),console.log("Creating new player mesh");const tt=E.current.createPlayer();console.log("Positioning new player at entrance"),tt.position.copy(H.current.worldPosition),console.log("Adding new player to maze group"),E.current.mazeGroup.add(tt),console.log("Added new player to maze group"),console.log("Updating player ref"),H.current.mesh=tt}if(E.current.setInitialPlayerDirection?E.current.setInitialPlayerDirection(H.current.mesh):H.current.direction.set(0,0,1),H.current.mesh){H.current.mesh.position.copy(H.current.worldPosition);const tt=Math.atan2(H.current.direction.x,H.current.direction.z);H.current.mesh.rotation.y=tt,H.current.mesh.visible=!0,H.current.mesh.children.forEach(J=>{J.material&&(J.material.opacity=1,J.material.transparent=!0)})}},Z=()=>{const tt=navigator.userAgent||navigator.vendor||window.opera,J=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(tt.toLowerCase());return console.log("Device detection:",J?"Mobile":"Desktop"),I.current=J,J},pt=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",Dt=()=>window.DeviceOrientationEvent!==void 0,X=async()=>{if(!pt())return console.log("No iOS permission needed, enabling gyroscope directly"),ue(),!0;console.log("Requesting iOS device orientation permission");try{const tt=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",tt),tt==="granted"?(console.log("✅ iOS permission granted!"),ue(),P(!1),B(!1),window.physics||ee(),!0):(console.log("❌ iOS permission denied:",tt),P(!1),B(!0),!1)}catch(tt){return console.error("❌ Error requesting iOS permission:",tt),P(!1),B(!0),!1}},ht=tt=>{const J=performance.now(),ut=J<3e3;ut&&console.log("Orientation event received:",{beta:tt.beta,gamma:tt.gamma,time:J}),W.current={beta:tt.beta,gamma:tt.gamma},!ut&&J%3e3<20&&console.log("Orientation data:",W.current)};ge.useEffect(()=>{const tt=Z();return console.log("Is mobile:",tt),tt&&(pt()?(console.log("iOS device detected - showing permission button"),P(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):Dt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",ht),A(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",ht)}},[]),ge.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let tt=function(Ot){if(nn=requestAnimationFrame(tt),I.current&&M&&!mt.current&&!d){const Wt=performance.now(),{beta:b,gamma:F}=W.current;if(Wt<5e3&&Wt%500<20&&console.log("Animation loop - orientation:",{beta:b,gamma:F}),b!==null&&F!==null){const V=Math.abs(b),$=Math.abs(F);let q="";const wt=5;V>$&&V>wt?q=b>0?"ArrowDown":"ArrowUp":$>wt&&(q=F>0?"ArrowRight":"ArrowLeft");const Ut=Math.max(V,$),Xt=Math.max(100,500-Ut*5);q&&Wt-k.current>Xt&&(console.log(`Gyroscope movement: ${q} (tilt: ${Ut.toFixed(1)}°)`),je({key:q,preventDefault:()=>{},stopPropagation:()=>{}}),k.current=Wt)}}if(!he&&!e){const Wt=Ot-We,b=Math.min(Wt/ln,1);if(b===1)he=!0,At.rotation.x=0,At.rotation.y=0;else{const F=hr.lerp(0,0,b);At.rotation.x=F,At.rotation.y=0}}else!he&&e&&(he=!0),_t.current||(At.rotation.x=0,At.rotation.y=0,At.rotation.z=0);const kt=Ot*.001;At.children.forEach(Wt=>{Wt.material&&Wt.material.uniforms&&(Wt.material.uniforms.time.value=kt)}),ot.current?(console.log("Calling updateParticles from animation loop"),ot.current()||(console.log("updateParticles returned false, setting to null"),ot.current=null)):mt.current&&!ot.current&&console.log("Game won but updateParticles is null"),_t.current?I.current||(L.enabled=!1,L.enableRotate=!1,L.enableZoom=!1,L.enablePan=!1):((Math.abs(yt.position.x)>.1||Math.abs(yt.position.z)>.1||Math.abs(yt.position.y-Vt())>.1||Math.abs(L.target.x)>.1||Math.abs(L.target.y)>.1||Math.abs(L.target.z)>.1)&&(yt.position.set(0,Vt(),0),L.target.set(0,0,0)),!I.current&&L.update&&L.update()),$t(),zt.render(ut,yt)},J=function(){const Ot=window.innerWidth,kt=window.innerHeight;zt.setSize(Ot,kt),yt.aspect=Ot/kt;const Wt=Ot<768,b=Ot>kt;Wt?yt.fov=b?75:80:yt.fov=60,_t.current||(yt.position.y=Vt(),yt.lookAt(0,0,0)),yt.updateProjectionMatrix()};console.log("Initializing 3D scene"),I.current=Z(),console.log("Is mobile device:",I.current),I.current&&v(!0);const ut=new r1;ut.background=new Re(0);const it=new I_(4210752,1.5);ut.add(it);const ft=new F_(16777215,1);if(ft.position.set(1,1,1),ut.add(ft),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const zt=new E0({antialias:!0,canvas:o.current});if(zt.setSize(window.innerWidth,window.innerHeight),zt.setPixelRatio(Math.min(window.devicePixelRatio,2)),zt.shadowMap.enabled=!0,zt.shadowMap.type=X_,console.log("Renderer set up"),I.current){console.log("Setting up orientation handling for mobile");const Ot=kt=>{var Wt;if(!(e||d)&&(!M&&(kt.beta!==null||kt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),A(!0)),!!M&&kt.beta!==null&&kt.gamma!==null)){let b=kt.beta,F=kt.gamma;if(window.orientation!==void 0){const V=window.orientation;if(performance.now()%5e3<20&&((Wt=window.physics)!=null&&Wt.debug)&&console.log(`Device orientation: ${V}°, beta: ${b.toFixed(2)}°, gamma: ${F.toFixed(2)}°`),V===90){const q=b;b=F,F=-q}else if(V===-90){const q=b;b=-F,F=q}else V===180&&(b=-b,F=-F)}if(window.physics){let q=0,wt=0;Math.abs(F)>5&&(q=Math.min(Math.abs(F)-5,25)/25*Math.sign(F)),Math.abs(b)>5&&(wt=Math.min(Math.abs(b)-5,25)/25*Math.sign(b)),window.physics.gravityX=q,window.physics.gravityZ=wt,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${q.toFixed(3)}, Z=${wt.toFixed(3)}`)}W.current={beta:b,gamma:F}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const kt=async()=>{console.log("Requesting iOS device orientation permission");try{const Wt=await window.DeviceOrientationEvent.requestPermission();Wt==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",Ot),A(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),ee(),setTimeout(()=>{H.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),H.current.velocity.x=.05,H.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",Wt)}catch(Wt){console.error("❌ Error requesting permission:",Wt)}};document.addEventListener("touchstart",()=>{kt(),document.removeEventListener("touchstart",kt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",Ot),A(!0)}const Lt=21,xt=2,ie=3,Pt=2,Vt=(Ot=!1)=>{const kt=window.innerWidth<768,Wt=window.innerWidth>window.innerHeight,b=Lt*Pt;let F=b*1.5;return kt&&(Ot||D)&&(Wt?F=b*1.6:F=b*1.8),kt?Wt?F*.8:F*1.2:F};window.calculateOptimalCameraHeight=Vt;const Bt=Vt(),yt=new $n(60,window.innerWidth/window.innerHeight,.1,1e3);yt.position.set(0,Bt,0),yt.lookAt(0,0,0),console.log("Camera set up");const te=Z();let L;te?(L={target:new j(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(L=new f1(yt,zt.domElement),L.enableDamping=!0,L.dampingFactor=.1,L.target.set(0,0,0),L.update(),console.log("Desktop controls set up"));const St=e&&G.current?G.current:Array(Lt).fill().map(()=>Array(Lt).fill(1));G.current=St,window.MAZE_SIZE=Lt,window.WALL_THICKNESS=Pt,window.playerRef=H,window.mazeRef=G,window.isThirdPersonRef=_t,window.gameCamera=yt,window.maze=St,window.celebrateWin=()=>{lt.current=!0,i(!0),l(!0),Pi()};const At=new Ms;ut.add(At),console.log("Maze group created"),E.current.mazeGroup=At;const jt=new oa({uniforms:{time:{value:0},baseColor:{value:new Re(4482815)}},vertexShader:`
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
        `,side:Li});console.log("Wall material created");const N=(Ot,kt)=>Ot>=0&&Ot<Lt&&kt>=0&&kt<Lt,bt=(Ot,kt)=>{const Wt=[],b=[[0,2],[2,0],[0,-2],[-2,0]];for(let F=b.length-1;F>0;F--){const V=Math.floor(Math.random()*(F+1));[b[F],b[V]]=[b[V],b[F]]}for(const[F,V]of b){const $=Ot+F,q=kt+V;N($,q)&&St[$][q]===1&&Wt.push([$,q,F/2,V/2])}return Wt},Et=()=>{if(e&&G.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let V=0;V<Lt;V++)for(let $=0;$<Lt;$++)St[V][$]=1;const Ot=[],kt=1,Wt=1;for(St[kt][Wt]=0,Ot.push([kt,Wt]);Ot.length>0;){const[V,$]=Ot[Ot.length-1],q=bt(V,$);if(q.length===0){Ot.pop();continue}const[wt,Ut,Xt,Ht]=q[Math.floor(Math.random()*q.length)];St[wt][Ut]=0,St[V+Xt][$+Ht]=0,Ot.push([wt,Ut])}St[0][1]=0,St[Lt-1][Lt-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(Lt-1)+","+(Lt-2)+")");const b=new Set,F=V=>{const[$,q]=V;if($===Lt-2&&q===Lt-2)return!0;b.add(`${$},${q}`);const wt=[[0,1],[1,0],[0,-1],[-1,0]];for(const[Ut,Xt]of wt){const Ht=$+Ut,ae=q+Xt;if(N(Ht,ae)&&St[Ht][ae]===0&&!b.has(`${Ht},${ae}`)&&F([Ht,ae]))return!0}return!1};F([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),Et()),G.current=St,window.maze=St,window.MAZE_SIZE=Lt,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Zt=()=>{if(!e||!G.current){for(console.log("Creating new walls for the maze");At.children.length>0;){const Ot=At.children[0];Ot.isGroup?Ot.children.forEach(kt=>{kt.geometry&&kt.geometry.dispose(),kt.material&&kt.material.dispose()}):(Ot.geometry&&Ot.geometry.dispose(),Ot.material&&Ot.material.dispose()),At.remove(Ot)}for(let Ot=0;Ot<Lt;Ot++)for(let kt=0;kt<Lt;kt++)if(St[Ot][kt]===1){const Wt=new Ga(Pt,ie,Pt),b=new ti(Wt,jt);if(b.position.set((Ot-Lt/2)*Pt,ie/2,(kt-Lt/2)*Pt),At.add(b),Ot===0||Ot===Lt-1||kt===0||kt===Lt-1){if(Ot<Lt-1&&St[Ot+1][kt]===1){const F=new ti(new Ga(Pt,ie,Pt),jt);F.position.set((Ot-Lt/2+.5)*Pt,ie/2,(kt-Lt/2)*Pt),At.add(F)}if(kt<Lt-1&&St[Ot][kt+1]===1){const F=new ti(new Ga(Pt,ie,Pt),jt);F.position.set((Ot-Lt/2)*Pt,ie/2,(kt-Lt/2+.5)*Pt),At.add(F)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),E.current.generateMaze=Et,E.current.createWalls=Zt;const qt=Ot=>{if(console.log("Setting initial player direction"),!Ot){console.error("Player mesh not provided to setInitialPlayerDirection");return}const kt=1,Wt=1,b=[{dx:0,dz:1,name:"down",vector:new j(0,0,1)},{dx:1,dz:0,name:"right",vector:new j(1,0,0)},{dx:0,dz:-1,name:"up",vector:new j(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new j(-1,0,0)}];console.log("Checking available directions from starting position:",kt,Wt);const F=b.filter(V=>{const $=kt+V.dx,q=Wt+V.dz;if($===0&&q===1)return console.log(`Direction ${V.name} leads to entrance, skipping`),!1;const wt=N($,q)&&St[$][q]===0;return console.log(`Direction ${V.name} leads to (${$}, ${q}): ${wt?"valid":"invalid"}`),wt});if(console.log("Valid directions:",F.map(V=>V.name)),F.length>0){const V=F[0];console.log("Chosen direction:",V.name),H.current.direction.copy(V.vector);const $=Math.atan2(V.vector.x,V.vector.z);Ot.rotation.y=$,console.log("Set player rotation to:",$)}else console.log("No valid directions found, defaulting to down"),H.current.direction.set(0,0,1),Ot.rotation.y=0};E.current.setInitialPlayerDirection=qt,e?console.log("Game has been won, preserving maze and player position"):(Et(),Zt(),console.log("Initial maze created"));const _e=new I_(16777215,.6);ut.add(_e);const ce=new F_(16777215,1);ce.position.set(50,100,50),ut.add(ce);const ye=new B_(4474111,2,150);ye.position.set(50,50,50),ut.add(ye);const Ee=new B_(4474111,2,150);Ee.position.set(-50,50,-50),ut.add(Ee),console.log("Lights added");let he=!1;const We=performance.now(),ln=1e3,Pi=()=>{console.log("Celebration function called - START");const Ot=2e3,kt=new Oi,Wt=new Float32Array(Ot*3),b=new Float32Array(Ot*3);for(let Ut=0;Ut<Ot;Ut++)Wt[Ut*3]=H.current.worldPosition.x,Wt[Ut*3+1]=H.current.worldPosition.y,Wt[Ut*3+2]=H.current.worldPosition.z,b[Ut*3]=Math.random(),b[Ut*3+1]=Math.random(),b[Ut*3+2]=Math.random();kt.setAttribute("position",new hi(Wt,3)),kt.setAttribute("color",new hi(b,3));const F=new b0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:md}),V=new s1(kt,F);ut.add(V),console.log("Particle system added to scene");const $=[];for(let Ut=0;Ut<Ot;Ut++){const Xt=Math.random()*Math.PI*2,Ht=Math.acos(Math.random()*2-1),ae=.05+Math.random()*.1;$.push(Math.sin(Ht)*Math.cos(Xt)*ae,Math.sin(Ht)*Math.sin(Xt)*ae,Math.cos(Ht)*ae)}O.current=V;const q=()=>{if(console.log("Update particles function called - frame"),!mt.current)return console.log("Game no longer in won state, cleaning up particles"),V.parent&&(ut.remove(V),V.geometry.dispose(),F.dispose()),O.current=null,ot.current=null,!1;const Ut=V.geometry.attributes.position.array;let Xt=!1;for(let ae=0;ae<Ot;ae++){const re=ae*3;Ut[re]+=$[re],Ut[re+1]+=$[re+1],Ut[re+2]+=$[re+2],$[re+1]-=.001;const oe=Ut[re]-H.current.worldPosition.x,De=Ut[re+1]-H.current.worldPosition.y,ze=Ut[re+2]-H.current.worldPosition.z;Math.sqrt(oe*oe+De*De+ze*ze)<20&&(Xt=!0)}V.geometry.attributes.position.needsUpdate=!0;const Ht=performance.now()-wt;return Ht>1e3&&(F.opacity=Math.max(0,1-(Ht-1e3)/1e3)),!Xt||Ht>2e3?(console.log("Animation complete, cleaning up particles"),ut.remove(V),V.geometry.dispose(),F.dispose(),O.current=null,ot.current=null,!1):!0},wt=performance.now();return console.log("Setting updateParticles function"),ot.current=q,()=>{console.log("Cleanup function called"),V.parent&&(ut.remove(V),V.geometry.dispose(),F.dispose()),O.current=null,ot.current=null}},ka=()=>{const Ot=new Ms,kt=new Mc(Pt/2,16,16),Wt=new o1({color:16776960}),b=new ti(kt,Wt);return Ot.add(b),Ot},Ye=ka();E.current.createPlayer=ka;let zi=null;if(e){for(let Ot=0;Ot<At.children.length;Ot++){const kt=At.children[Ot];if(kt.isGroup&&kt.children.length>0&&kt.children[0].geometry instanceof Mc){zi=kt;break}}zi&&(zi.children.forEach(Ot=>{Ot.geometry&&Ot.geometry.dispose(),Ot.material&&Ot.material.dispose()}),At.remove(zi),console.log("Removed existing player from maze group"))}if(!e)Ye.position.set((1-Lt/2)*Pt,Pt/2,(1-Lt/2)*Pt),H.current.mesh=Ye,H.current.worldPosition.copy(Ye.position),qt(Ye);else{if(lt.current){const kt=Lt-1,Wt=Lt-2,b=new j((kt-Lt/2)*Pt,Pt/2,(Wt-Lt/2)*Pt);console.log("Positioning player at exit:",b),Ye.position.copy(b),H.current.worldPosition.copy(b),H.current.position={x:kt,z:Wt}}else console.log("Using existing player position:",H.current.worldPosition),Ye.position.copy(H.current.worldPosition);H.current.mesh=Ye;const Ot=Math.atan2(H.current.direction.x,H.current.direction.z);Ye.rotation.y=Ot}At.add(Ye),H.current.mesh=Ye,console.log("Player created and added to maze group");const Mn=Ot=>{if(Ot.key.toLowerCase()==="v")return console.log("View toggle key pressed"),Ot.preventDefault(),Ot.stopPropagation(),Ot.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(kt=>{const Wt=!kt;console.log("Switching to:",Wt?"POV mode":"Top-down mode"),_t.current=Wt;const b=yt.position.clone(),F=new j().copy(L.target),V=yt.fov,$={x:At.rotation.x,y:At.rotation.y,z:At.rotation.z},q=Wt?new j(H.current.worldPosition.x,H.current.worldPosition.y+1.5,H.current.worldPosition.z):new j(0,Vt(),0),wt=Wt?new j(H.current.worldPosition.x+H.current.direction.x*Pt,H.current.worldPosition.y+1.5,H.current.worldPosition.z+H.current.direction.z*Pt):new j(0,0,0),Ut=window.innerWidth<768,Xt=window.innerWidth>window.innerHeight;let Ht=Wt?75:60;Ut&&(Ht=Wt||Xt?75:80);const ae={x:0,y:0,z:0},re=Ye.visible?1:0,oe=Wt?0:1;Ye.visible=!0,Ye.children.forEach(Le=>{Le.material&&(Le.material.transparent||(Le.material.transparent=!0),Le.material.opacity=re)}),I.current||(L.enabled=!1);const De=1200;let ze=null;const Ze=Le=>{const ve=Le-In,pi=Math.min(ve/De,1),Xe=(an=>an<.5?4*an*an*an:1-Math.pow(-2*an+2,3)/2)(pi);yt.position.lerpVectors(b,q,Xe);const _n=new j().lerpVectors(F,wt,Xe);if(I.current||L.target.copy(_n),yt.lookAt(_n),yt.fov=hr.lerp(V,Ht,Xe),yt.updateProjectionMatrix(),At.rotation.x=hr.lerp($.x,ae.x,Xe),At.rotation.y=hr.lerp($.y,ae.y,Xe),At.rotation.z=hr.lerp($.z,ae.z,Xe),Ye.children.forEach(an=>{an.material&&(an.material.opacity=hr.lerp(re,oe,Xe))}),pi===1){cancelAnimationFrame(ze),Ye.visible=!Wt,Ye.children.forEach(an=>{an.material&&(an.material.opacity=oe,oe===1&&(an.material.transparent=!1))}),!I.current&&!Wt?(L.enabled=!0,L.enableRotate=!0,L.enableZoom=!0,L.enablePan=!0):(yt.position.copy(q),yt.lookAt(wt)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}ze=requestAnimationFrame(Ze)},In=performance.now();return ze=requestAnimationFrame(Ze),Wt}),!1)},je=Ot=>{if(mt.current||!he||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const kt=Ot.key.toLowerCase();if(console.log("Key pressed:",kt,"Current mode:",_t.current?"POV":"Top-down"),kt==="v")return;Ot.preventDefault();const Wt=H.current.position.x,b=H.current.position.z;let F=Wt,V=b,$=!1;const q=H.current.mesh;if(!q){console.error("Player mesh not found");return}if(_t.current){switch(console.log("Handling POV mode controls"),kt){case"arrowup":case"w":console.log("Moving forward - Current position:",Wt,b),console.log("Current direction:",H.current.direction),F=Wt+Math.round(H.current.direction.x),V=b+Math.round(H.current.direction.z),console.log("New position will be:",F,V),$="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",Wt,b),console.log("Current direction:",H.current.direction),F=Wt-Math.round(H.current.direction.x),V=b-Math.round(H.current.direction.z),console.log("New position will be:",F,V),$="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",H.current.direction),H.current.direction.applyAxisAngle(new j(0,1,0),Math.PI/2),console.log("New direction:",H.current.direction),$="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",H.current.direction),H.current.direction.applyAxisAngle(new j(0,1,0),-Math.PI/2),console.log("New direction:",H.current.direction),$="rotate";break}if($==="move")if(N(F,V)&&St[F][V]===0){console.log("Movement is valid, updating positions"),H.current.position.x=F,H.current.position.z=V;const wt=new j((F-Lt/2)*Pt,Pt/2,(V-Lt/2)*Pt);console.log("New world position:",wt),H.current.worldPosition.copy(wt),q.position.copy(wt),console.log("Updated player mesh position to:",q.position),yt.position.set(wt.x,wt.y+1.5,wt.z),console.log("New camera position:",yt.position);const Ut=yt.position.clone();if(Ut.add(H.current.direction.clone().multiplyScalar(Pt)),yt.lookAt(Ut),console.log("Camera looking at:",Ut),yt.updateProjectionMatrix(),yt.updateMatrixWorld(),F===Lt-1&&V===Lt-2){lt.current=!0,i(!0),l(!0);const Xt=Pi();return()=>{Xt&&Xt()}}}else console.log("Movement blocked - Out of bounds or wall:",F,V);else if($==="rotate"){console.log("Handling rotation");const wt=Math.atan2(H.current.direction.x,H.current.direction.z);q.rotation.y=wt,console.log("Updated player mesh rotation to:",wt);const Ut=yt.position.clone();Ut.add(H.current.direction.clone().multiplyScalar(Pt)),yt.lookAt(Ut),console.log("Camera looking at new direction:",Ut),yt.updateProjectionMatrix(),yt.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),kt){case"arrowup":case"w":console.log("Moving up - Current position:",Wt,b),V=b-1,H.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",Wt,b),V=b+1,H.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",Wt,b),F=Wt-1,H.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",Wt,b),F=Wt+1,H.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",F,V),console.log("Maze value at target position:",St[F][V]),console.log("Is in bounds:",N(F,V)),N(F,V)&&St[F][V]===0){console.log("Movement is valid, updating positions"),H.current.position.x=F,H.current.position.z=V;const wt=new j((F-Lt/2)*Pt,Pt/2,(V-Lt/2)*Pt);H.current.worldPosition.copy(wt),q.position.copy(wt);const Ut=Math.atan2(H.current.direction.x,H.current.direction.z);if(q.rotation.y=Ut,F===Lt-1&&V===Lt-2){lt.current=!0,i(!0),l(!0);const Xt=Pi();return()=>{Xt&&Xt()}}}}};window.removeEventListener("keydown",Mn,!0),window.removeEventListener("keydown",je),console.log("Attaching event listeners"),window.addEventListener("keydown",Mn,!0),window.addEventListener("keydown",je),console.log("Event listeners attached");let nn;return console.log("Starting animation"),tt(),window.addEventListener("resize",J),()=>{console.log("Cleanup running"),window.removeEventListener("resize",J),window.removeEventListener("keydown",Mn,!0),window.removeEventListener("keydown",je),nn&&cancelAnimationFrame(nn),ut.traverse(Ot=>{Ot.geometry&&Ot.geometry.dispose(),Ot.material&&(Array.isArray(Ot.material)?Ot.material.forEach(kt=>kt.dispose()):Ot.material.dispose())}),zt.dispose(),L&&typeof L.dispose=="function"&&L.dispose()}}catch(tt){console.error("Error in setup:",tt)}},[]),ge.useEffect(()=>{const tt=()=>{const ut=Z();return ut&&(!Dt()||pt()&&!M)&&(console.log("Setting up touch controls for mobile"),B(!0)),J(),ut},J=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const ut=it=>{console.log("Device orientation event received:",it),window.removeEventListener("deviceorientation",ut)};window.addEventListener("deviceorientation",ut,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};tt()},[M]);const Tt=ge.useRef(null),Yt=ge.useRef(null),Ft=ge.useRef(null),It=ge.useRef(null);ge.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const tt=xt=>{if(e||d)return;const ie=.1;switch(xt){case"up":H.current.velocity.z-=ie,H.current.direction.set(0,0,-1);break;case"down":H.current.velocity.z+=ie,H.current.direction.set(0,0,1);break;case"left":H.current.velocity.x-=ie,H.current.direction.set(-1,0,0);break;case"right":H.current.velocity.x+=ie,H.current.direction.set(1,0,0);break}const Pt=.2,Vt=H.current.velocity,Bt=Math.sqrt(Vt.x*Vt.x+Vt.z*Vt.z);Bt>Pt&&(Vt.x=Vt.x/Bt*Pt,Vt.z=Vt.z/Bt*Pt)},J=(xt,ie)=>(xt.preventDefault(),xt.stopPropagation(),tt(ie),!1),ut=(xt,ie)=>{if(!xt.current)return;const Pt=xt.current,Vt=L=>J(L,ie),Bt=L=>L.preventDefault(),yt=L=>J(L,ie),te=L=>J(L,ie);return Pt.addEventListener("touchstart",Vt,{passive:!1}),Pt.addEventListener("touchend",Bt,{passive:!1}),Pt.addEventListener("mousedown",yt),Pt.addEventListener("click",te),()=>{Pt.removeEventListener("touchstart",Vt),Pt.removeEventListener("touchend",Bt),Pt.removeEventListener("mousedown",yt),Pt.removeEventListener("click",te)}},it=ut(Tt,"up"),ft=ut(Yt,"down"),zt=ut(Ft,"left"),Lt=ut(It,"right");return()=>{it&&it(),ft&&ft(),zt&&zt(),Lt&&Lt()}},[D]),ge.useEffect(()=>{const tt=()=>{let it=document.querySelector('meta[name="viewport"]');it||(it=document.createElement("meta"),it.name="viewport",document.head.appendChild(it)),it.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},J=it=>{it.touches&&it.touches.length>1&&it.preventDefault()},ut=it=>{it.preventDefault()};return tt(),document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchstart",ut,{passive:!1}),()=>{document.removeEventListener("touchmove",J),document.removeEventListener("touchstart",ut)}},[]),ge.useEffect(()=>{if(!window.gameCamera||_t.current)return;const J=setTimeout(()=>{const ut=window.gameCamera;if(ut&&!_t.current)if(typeof window.calculateOptimalCameraHeight=="function"){const it=window.calculateOptimalCameraHeight(D);ut.position.y=it,ut.updateProjectionMatrix(),console.log(`Adjusted camera height to ${it} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(J)},[D]);const $t=()=>{if(!M||e||d)return;const tt=window.maze||G.current;if(!tt){console.warn("No maze available for physics update");return}const J=window.MAZE_SIZE||21,ut=H.current,it=ut.velocity,ft=ut.position,zt=ut.mesh;if(!zt){console.warn("No player mesh available for physics update");return}const Lt=window.physics||{},xt=Lt.gravityX||0,ie=Lt.gravityZ||0,Pt=.01,Vt=.97,Bt=.5,yt=.45;if(it.x+=xt*Pt,it.z+=ie*Pt,it.x*=Vt,it.z*=Vt,Math.abs(it.x)<2e-4&&Math.abs(it.z)<2e-4)return;const te=ft.x,L=ft.z;let St=ft.x+it.x,At=ft.z+it.z;const jt=(Ee,he)=>Ee<0||Ee>=J||he<0||he>=J?!0:tt[Ee][he]===1;let N=!1,bt="";const Et=Math.floor(ft.x),Zt=Math.floor(ft.z);ft.x-Et,ft.z-Zt,ft.x=St;const qt=Math.floor(ft.x);ft.x-qt;let _e=!1;it.x>0&&qt+1<J&&jt(qt+1,Math.floor(ft.z))?qt+1-ft.x<yt&&(_e=!0,N=!0,bt+="R",ft.x=qt+1-yt-.01,it.x=-it.x*Bt):it.x<0&&qt>=0&&jt(qt,Math.floor(ft.z))&&ft.x-qt<yt&&(_e=!0,N=!0,bt+="L",ft.x=qt+yt+.01,it.x=-it.x*Bt),ft.z=At;const ce=Math.floor(ft.z);ft.z-ce;let ye=!1;if(it.z>0&&ce+1<J&&jt(Math.floor(ft.x),ce+1)?ce+1-ft.z<yt&&(ye=!0,N=!0,bt+="B",ft.z=ce+1-yt-.01,it.z=-it.z*Bt):it.z<0&&ce>=0&&jt(Math.floor(ft.x),ce)&&ft.z-ce<yt&&(ye=!0,N=!0,bt+="T",ft.z=ce+yt+.01,it.z=-it.z*Bt),jt(qt,ce)&&!_e&&!ye&&(N=!0,bt+="Diag",it.x=-it.x*Bt,it.z=-it.z*Bt,ft.x=te,ft.z=L),jt(Math.floor(ft.x),Math.floor(ft.z))&&(ft.x=te,ft.z=L,it.x=0,it.z=0,N=!0,bt+="Reset"),zt.position.x=ft.x*2,zt.position.z=ft.z*2,Math.abs(it.x)>.01||Math.abs(it.z)>.01){const Ee=Math.atan2(it.x,it.z);zt.rotation.y=Ee,ut.direction.set(it.x,0,it.z).normalize()}Math.floor(ft.x)===J-1&&Math.floor(ft.z)===J-2&&(console.log("Victory reached!"),i(!0),celebrate()),dt(Ee=>({...Ee,velocity:{x:it.x,z:it.z},position:{x:ft.x,z:ft.z},collision:N,collisionEdge:bt}))},ee=()=>{console.log("⚡ Initializing physics system"),H.current&&(H.current.position={x:1,z:1},H.current.velocity={x:0,z:0},H.current.mesh&&(H.current.mesh.position.x=1*2,H.current.mesh.position.z=1*2)),window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:0},console.log("Physics initialized - player at entrance position with gravity-based movement")},nt=()=>{H.current&&(H.current.position={x:1,z:1},H.current.velocity={x:0,z:0},H.current.mesh&&(H.current.mesh.position.x=1*2,H.current.mesh.position.z=1*2),console.log("Player position reset to entrance"))},Pe=()=>{var te,L,St,At,jt,N;const{beta:tt,gamma:J,velocity:ut,gravity:it,position:ft,eventCount:zt,lastUpdate:Lt,eventType:xt,collision:ie,collisionEdge:Pt}=at,Vt=Math.sqrt(ut.x*ut.x+ut.z*ut.z),Bt=Vt>.01?`rgb(${Math.min(255,Math.floor(Vt*2e3))}, ${Math.min(255,Math.floor(255-Vt*500))}, 0)`:"#4CAF50",yt=()=>{const _e=40+it.x*24*1.8,ce=40+it.z*24*1.8,ye=Math.sqrt(it.x*it.x+it.z*it.z)*24*1.5,Ee=Math.atan2(it.z,it.x);return Kt.jsxs("div",{style:{position:"relative",width:80,height:80,backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"50%",margin:"5px auto",border:"1px solid rgba(255,255,255,0.2)"},children:[Kt.jsx("div",{style:{position:"absolute",left:40-.5,top:0,width:1,height:80,backgroundColor:"rgba(255,255,255,0.2)"}}),Kt.jsx("div",{style:{position:"absolute",left:0,top:40-.5,width:80,height:1,backgroundColor:"rgba(255,255,255,0.2)"}}),ye>5&&Kt.jsx("div",{style:{position:"absolute",width:ye,height:2,backgroundColor:"rgba(255,100,100,0.8)",transformOrigin:"left center",transform:`translate(40px, 40px) rotate(${Ee}rad)`,borderRadius:"1px"},children:Kt.jsx("div",{style:{position:"absolute",right:-2,top:-3,width:0,height:0,borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"6px solid rgba(255,100,100,0.8)"}})}),Kt.jsx("div",{style:{position:"absolute",width:16,height:16,borderRadius:"50%",backgroundColor:Bt,transform:`translate(${_e-8}px, ${ce-8}px)`,transition:"transform 0.05s ease-out, background-color 0.1s",boxShadow:"0 0 5px rgba(0,0,0,0.5)"}}),Kt.jsx("div",{style:{position:"absolute",left:0,top:28,textAlign:"center",width:12,fontSize:10},children:"L"}),Kt.jsx("div",{style:{position:"absolute",right:0,top:28,textAlign:"center",width:12,fontSize:10},children:"R"}),Kt.jsx("div",{style:{position:"absolute",top:0,left:34,textAlign:"center",width:12,fontSize:10},children:"U"}),Kt.jsx("div",{style:{position:"absolute",bottom:0,left:34,textAlign:"center",width:12,fontSize:10},children:"D"})]})};return Kt.jsxs("div",{style:{position:"fixed",top:10,left:10,backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"10px",borderRadius:"5px",fontSize:"14px",zIndex:1e4,maxWidth:"300px",fontFamily:"monospace"},children:[Kt.jsx("h3",{style:{margin:"0 0 8px 0",borderBottom:"1px solid #666"},children:"📱 Device Debug"}),Kt.jsx(yt,{}),Kt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Tilt: "}),Kt.jsxs("span",{style:{fontWeight:"bold"},children:["β:",tt,"° γ:",J,"°"]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Gravity: "}),Kt.jsxs("span",{style:{color:Math.abs(it.x)+Math.abs(it.z)>.1?"#f88":"#8f8"},children:["X:",((te=it.x)==null?void 0:te.toFixed(2))||0,", Z:",((L=it.z)==null?void 0:L.toFixed(2))||0]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Velocity: "}),Kt.jsxs("span",{style:{color:Bt,fontWeight:Vt>.01?"bold":"normal"},children:[((St=ut.x)==null?void 0:St.toFixed(3))||0,", ",((At=ut.z)==null?void 0:At.toFixed(3))||0]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Position: "}),Kt.jsxs("span",{children:["(",((jt=ft==null?void 0:ft.x)==null?void 0:jt.toFixed(1))||"?",", ",((N=ft==null?void 0:ft.z)==null?void 0:N.toFixed(1))||"?",")"]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Collision: "}),Kt.jsx("span",{style:{color:ie?"#f88":"#8f8"},children:ie?`Yes (${Pt})`:"No"})]}),Kt.jsxs("div",{style:{display:"flex",gap:"5px",marginTop:"5px"},children:[Kt.jsx("button",{onClick:()=>{H.current&&(H.current.velocity={x:.1,z:.1},console.log("Manual impulse applied"))},style:{flex:1,background:"#4CAF50",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Impulse"}),Kt.jsx("button",{onClick:nt,style:{flex:1,background:"#2196F3",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Reset"})]})]})]})},ne=()=>{dt(tt=>({...tt,showDebug:!tt.showDebug}))};ge.useEffect(()=>{let tt,J=0;const ut=1e3/60;let it=0;function ft(zt){if(tt=requestAnimationFrame(ft),J===0){J=zt;return}const Lt=zt-J;for(J=zt,it+=Lt;it>=ut;)I.current&&M&&!e&&!d&&$t(),it-=ut}return tt=requestAnimationFrame(ft),()=>{tt&&cancelAnimationFrame(tt)}},[M,e,d]);const ue=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Oe,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",Qt,{passive:!0}),console.log("✓ Added devicemotion listener")),A(!0),v(!0),window.physics||ee()},Qt=tt=>{if(dt(ut=>({...ut,eventCount:ut.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const J=tt.accelerationIncludingGravity;if(J&&J.x!==null&&J.y!==null&&J.z!==null){let it=Math.min(Math.max(J.x/5,-1),1),ft=Math.min(Math.max(J.y/5,-1),1);const zt=.05;Math.abs(it)<zt&&(it=0),Math.abs(ft)<zt&&(ft=0),window.physics.gravityX=-it,window.physics.gravityZ=ft}},Oe=tt=>{if(!(tt.beta===null&&tt.gamma===null)&&(!M&&(tt.beta!==null||tt.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),A(!0),v(!0)),tt.beta!==null&&tt.gamma!==null)){let J=tt.beta,ut=tt.gamma;if(performance.now()%5e3<20&&console.log(`Raw orientation: beta=${J.toFixed(2)}°, gamma=${ut.toFixed(2)}°`),window.orientation!==void 0){const xt=window.orientation;if(xt===90){const ie=J;J=ut,ut=-ie}else if(xt===-90){const ie=J;J=-ut,ut=ie}else xt===180&&(J=-J,ut=-ut)}window.physics||ee();const it=30,ft=1;let zt=0,Lt=0;Math.abs(ut)>ft&&(zt=Math.sign(ut)*Math.min(1,(Math.abs(ut)-ft)/(it-ft))),Math.abs(J)>ft&&(Lt=Math.sign(J)*Math.min(1,(Math.abs(J)-ft)/(it-ft))),window.physics&&(window.physics.gravityX=zt,window.physics.gravityZ=Lt,console.log(`Gravity vector: X=${zt.toFixed(2)}, Z=${Lt.toFixed(2)}`),dt(xt=>({...xt,beta:parseFloat(J.toFixed(2)),gamma:parseFloat(ut.toFixed(2)),gravity:{x:zt,z:Lt},eventCount:xt.eventCount+1,lastUpdate:Date.now(),eventType:"orientation"}))),W.current={beta:J,gamma:ut}}};ge.useEffect(()=>{if(!at.showDebug)return;const tt=()=>{if(document.getElementById("collision-visualizer"))return;const it=document.createElement("div");it.id="collision-visualizer",it.style.cssText=`
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px dashed rgba(255, 100, 100, 0.7);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: border-color 0.3s;
        z-index: 1000;
      `,document.body.appendChild(it),window.collisionVisualizer=it},J=()=>{var xt;if(!window.collisionVisualizer||!((xt=H.current)!=null&&xt.mesh))return;const it=H.current.mesh,ft=new j;ft.set(it.position.x,it.position.y,it.position.z),ft.project(camera);const zt=(ft.x*.5+.5)*window.innerWidth,Lt=(-(ft.y*.5)+.5)*window.innerHeight;window.collisionVisualizer.style.left=`${zt}px`,window.collisionVisualizer.style.top=`${Lt}px`,window.collisionVisualizer.style.borderColor=at.collision?"rgba(255, 0, 0, 0.9)":"rgba(100, 255, 100, 0.6)",requestAnimationFrame(J)};tt();const ut=requestAnimationFrame(J);return()=>{cancelAnimationFrame(ut),window.collisionVisualizer&&(window.collisionVisualizer.remove(),window.collisionVisualizer=null)}},[at.showDebug]),ge.useEffect(()=>{const tt=()=>{try{window.screen&&window.screen.orientation?window.screen.orientation.lock("portrait").then(()=>console.log("✓ Orientation locked to portrait")).catch(J=>console.warn("Cannot lock orientation:",J)):window.orientation!==void 0&&(console.log("Using orientation event fallback for iOS"),window.addEventListener("orientationchange",function(){window.orientation===90||window.orientation===-90?U("Please rotate your device to portrait mode"):U("")}))}catch(J){console.warn("Orientation locking not supported:",J)}};return Z()&&(tt(),T("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait")),()=>{window.removeEventListener("orientationchange",()=>{})}},[]);const[fe,U]=ge.useState(""),T=tt=>{let J=document.querySelector('meta[name="viewport"]');J||(J=document.createElement("meta"),J.name="viewport",document.head.appendChild(J)),J.setAttribute("content",tt),console.log("✓ Viewport meta set:",tt);let ut=document.querySelector('meta[name="screen-orientation"]');ut||(ut=document.createElement("meta"),ut.name="screen-orientation",document.head.appendChild(ut)),ut.setAttribute("content","portrait")},st={position:"fixed",top:0,left:0,width:"100%",height:"100%",display:fe?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.85)",color:"white",fontSize:"1.5rem",textAlign:"center",padding:"2rem",zIndex:9999,fontFamily:"Arial, sans-serif"},Nt=()=>{const tt=window.matchMedia("(orientation: landscape)").matches;return Z()&&tt?(U("Please rotate your device to portrait mode"),window.physics&&(window.physics.active=!1)):(U(""),window.physics&&(window.physics.active=!0)),!tt};return ge.useEffect(()=>{Nt();const tt=()=>{Nt(),cameraRef.current&&!u&&setTimeout(()=>{const ut=calculateOptimalCameraHeight(D);cameraRef.current.position.y=ut},300)};window.addEventListener("orientationchange",tt),window.addEventListener("resize",tt);const J=window.matchMedia("(orientation: portrait)");return J.addEventListener("change",tt),()=>{window.removeEventListener("orientationchange",tt),window.removeEventListener("resize",tt),J.removeEventListener("change",tt)}},[u,D]),Kt.jsxs(Kt.Fragment,{children:[fe&&Kt.jsxs("div",{style:st,children:[Kt.jsx("div",{style:{marginBottom:"1rem"},children:Kt.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",children:Kt.jsx("path",{fill:"white",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M7,13H17V11H7"})})}),Kt.jsx("div",{children:fe}),Kt.jsx("div",{style:{marginTop:"2rem",fontSize:"1rem",opacity:.8},children:"The maze game works best in portrait orientation"})]}),Kt.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),at.showDebug&&Kt.jsx(Pe,{}),Kt.jsx("button",{onClick:ne,style:{position:"fixed",top:10,right:10,zIndex:1e4,background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px"},children:at.showDebug?"Hide Debug":"Show Debug"}),_&&Kt.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[Kt.jsx("button",{className:"permission-button",onClick:tt=>{tt.preventDefault(),tt.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{X()},10)},onTouchStart:tt=>{console.log("Button touch started"),tt.stopPropagation()},onTouchEnd:tt=>{console.log("Button touch ended"),tt.preventDefault(),tt.stopPropagation(),setTimeout(()=>{X()},10)},children:"Enable Tilt Controls"}),Kt.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),D&&Kt.jsxs("div",{className:"touch-controls",children:[Kt.jsx("div",{className:"touch-controls-row",children:Kt.jsx("button",{ref:Tt,className:"touch-button up-button","data-direction":"up",children:"▲"})}),Kt.jsxs("div",{className:"touch-controls-row",children:[Kt.jsx("button",{ref:Ft,className:"touch-button left-button","data-direction":"left",children:"◀"}),Kt.jsx("div",{className:"touch-button-spacer"}),Kt.jsx("button",{ref:It,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),Kt.jsx("div",{className:"touch-controls-row",children:Kt.jsx("button",{ref:Yt,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),e&&Kt.jsxs("div",{className:"victory-message",children:[Kt.jsx("h1",{children:"You Won!"}),r&&Kt.jsx("button",{onClick:C,children:"Play Again"})]}),m&&Kt.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),R&&M&&Kt.jsxs("div",{className:"gyroscope-indicator",children:[Kt.jsx("div",{className:"gyroscope-icon",children:Kt.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:Kt.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),Kt.jsx("span",{children:"Tilt to Move"})]})]})}Fx.createRoot(document.getElementById("root")).render(Kt.jsx(ge.StrictMode,{children:Kt.jsx(d1,{})}));
