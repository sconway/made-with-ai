(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Cy(){if(tg)return wo;tg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var eg;function Dy(){return eg||(eg=1,Lf.exports=Cy()),Lf.exports}var Te=Dy(),Uf={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Ly(){if(ng)return _e;ng=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function v(C,Q,mt){this.props=C,this.context=Q,this.refs=R,this.updater=mt||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,Q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Q,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function P(C,Q,mt){this.props=C,this.context=Q,this.refs=R,this.updater=mt||M}var D=P.prototype=new _;D.constructor=P,A(D,v.prototype),D.isPureReactComponent=!0;var F=Array.isArray,q={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function I(C,Q,mt,Dt,j,pt){return mt=pt.ref,{$$typeof:o,type:C,key:Q,ref:mt!==void 0?mt:null,props:pt}}function vt(C,Q){return I(C.type,Q,void 0,void 0,void 0,C.props)}function z(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function E(C){var Q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(mt){return Q[mt]})}var N=/\/+/g;function _t(C,Q){return typeof C=="object"&&C!==null&&C.key!=null?E(""+C.key):Q.toString(36)}function wt(){}function J(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(wt,wt):(C.status="pending",C.then(function(Q){C.status==="pending"&&(C.status="fulfilled",C.value=Q)},function(Q){C.status==="pending"&&(C.status="rejected",C.reason=Q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ct(C,Q,mt,Dt,j){var pt=typeof C;(pt==="undefined"||pt==="boolean")&&(C=null);var bt=!1;if(C===null)bt=!0;else switch(pt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(C.$$typeof){case o:case e:bt=!0;break;case g:return bt=C._init,ct(bt(C._payload),Q,mt,Dt,j)}}if(bt)return j=j(C),bt=Dt===""?"."+_t(C,0):Dt,F(j)?(mt="",bt!=null&&(mt=bt.replace(N,"$&/")+"/"),ct(j,Q,mt,"",function(Gt){return Gt})):j!=null&&(z(j)&&(j=vt(j,mt+(j.key==null||C&&C.key===j.key?"":(""+j.key).replace(N,"$&/")+"/")+bt)),Q.push(j)),1;bt=0;var Yt=Dt===""?".":Dt+":";if(F(C))for(var Ht=0;Ht<C.length;Ht++)Dt=C[Ht],pt=Yt+_t(Dt,Ht),bt+=ct(Dt,Q,mt,pt,j);else if(Ht=S(C),typeof Ht=="function")for(C=Ht.call(C),Ht=0;!(Dt=C.next()).done;)Dt=Dt.value,pt=Yt+_t(Dt,Ht++),bt+=ct(Dt,Q,mt,pt,j);else if(pt==="object"){if(typeof C.then=="function")return ct(J(C),Q,mt,Dt,j);throw Q=String(C),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return bt}function V(C,Q,mt){if(C==null)return C;var Dt=[],j=0;return ct(C,Dt,"","",function(pt){return Q.call(mt,pt,j++)}),Dt}function lt(C){if(C._status===-1){var Q=C._result;Q=Q(),Q.then(function(mt){(C._status===0||C._status===-1)&&(C._status=1,C._result=mt)},function(mt){(C._status===0||C._status===-1)&&(C._status=2,C._result=mt)}),C._status===-1&&(C._status=0,C._result=Q)}if(C._status===1)return C._result.default;throw C._result}var at=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ht(){}return _e.Children={map:V,forEach:function(C,Q,mt){V(C,function(){Q.apply(this,arguments)},mt)},count:function(C){var Q=0;return V(C,function(){Q++}),Q},toArray:function(C){return V(C,function(Q){return Q})||[]},only:function(C){if(!z(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},_e.Component=v,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=P,_e.StrictMode=r,_e.Suspense=p,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,_e.act=function(){throw Error("act(...) is not supported in production builds of React.")},_e.cache=function(C){return function(){return C.apply(null,arguments)}},_e.cloneElement=function(C,Q,mt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Dt=A({},C.props),j=C.key,pt=void 0;if(Q!=null)for(bt in Q.ref!==void 0&&(pt=void 0),Q.key!==void 0&&(j=""+Q.key),Q)!W.call(Q,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&Q.ref===void 0||(Dt[bt]=Q[bt]);var bt=arguments.length-2;if(bt===1)Dt.children=mt;else if(1<bt){for(var Yt=Array(bt),Ht=0;Ht<bt;Ht++)Yt[Ht]=arguments[Ht+2];Dt.children=Yt}return I(C.type,j,void 0,void 0,pt,Dt)},_e.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},_e.createElement=function(C,Q,mt){var Dt,j={},pt=null;if(Q!=null)for(Dt in Q.key!==void 0&&(pt=""+Q.key),Q)W.call(Q,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(j[Dt]=Q[Dt]);var bt=arguments.length-2;if(bt===1)j.children=mt;else if(1<bt){for(var Yt=Array(bt),Ht=0;Ht<bt;Ht++)Yt[Ht]=arguments[Ht+2];j.children=Yt}if(C&&C.defaultProps)for(Dt in bt=C.defaultProps,bt)j[Dt]===void 0&&(j[Dt]=bt[Dt]);return I(C,pt,void 0,void 0,null,j)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(C){return{$$typeof:d,render:C}},_e.isValidElement=z,_e.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:lt}},_e.memo=function(C,Q){return{$$typeof:m,type:C,compare:Q===void 0?null:Q}},_e.startTransition=function(C){var Q=q.T,mt={};q.T=mt;try{var Dt=C(),j=q.S;j!==null&&j(mt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(ht,at)}catch(pt){at(pt)}finally{q.T=Q}},_e.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},_e.use=function(C){return q.H.use(C)},_e.useActionState=function(C,Q,mt){return q.H.useActionState(C,Q,mt)},_e.useCallback=function(C,Q){return q.H.useCallback(C,Q)},_e.useContext=function(C){return q.H.useContext(C)},_e.useDebugValue=function(){},_e.useDeferredValue=function(C,Q){return q.H.useDeferredValue(C,Q)},_e.useEffect=function(C,Q){return q.H.useEffect(C,Q)},_e.useId=function(){return q.H.useId()},_e.useImperativeHandle=function(C,Q,mt){return q.H.useImperativeHandle(C,Q,mt)},_e.useInsertionEffect=function(C,Q){return q.H.useInsertionEffect(C,Q)},_e.useLayoutEffect=function(C,Q){return q.H.useLayoutEffect(C,Q)},_e.useMemo=function(C,Q){return q.H.useMemo(C,Q)},_e.useOptimistic=function(C,Q){return q.H.useOptimistic(C,Q)},_e.useReducer=function(C,Q,mt){return q.H.useReducer(C,Q,mt)},_e.useRef=function(C){return q.H.useRef(C)},_e.useState=function(C){return q.H.useState(C)},_e.useSyncExternalStore=function(C,Q,mt){return q.H.useSyncExternalStore(C,Q,mt)},_e.useTransition=function(){return q.H.useTransition()},_e.version="19.0.0",_e}var ig;function Ad(){return ig||(ig=1,Uf.exports=Ly()),Uf.exports}var de=Ad(),Nf={exports:{}},Ro={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Uy(){return ag||(ag=1,function(o){function e(V,lt){var at=V.length;V.push(lt);t:for(;0<at;){var ht=at-1>>>1,C=V[ht];if(0<l(C,lt))V[ht]=lt,V[at]=C,at=ht;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var lt=V[0],at=V.pop();if(at!==lt){V[0]=at;t:for(var ht=0,C=V.length,Q=C>>>1;ht<Q;){var mt=2*(ht+1)-1,Dt=V[mt],j=mt+1,pt=V[j];if(0>l(Dt,at))j<C&&0>l(pt,Dt)?(V[ht]=pt,V[j]=at,ht=j):(V[ht]=Dt,V[mt]=at,ht=mt);else if(j<C&&0>l(pt,at))V[ht]=pt,V[j]=at,ht=j;else break t}}return lt}function l(V,lt){var at=V.sortIndex-lt.sortIndex;return at!==0?at:V.id-lt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,y=null,S=3,M=!1,A=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(V){for(var lt=i(m);lt!==null;){if(lt.callback===null)r(m);else if(lt.startTime<=V)r(m),lt.sortIndex=lt.expirationTime,e(p,lt);else break;lt=i(m)}}function F(V){if(R=!1,D(V),!A)if(i(p)!==null)A=!0,J();else{var lt=i(m);lt!==null&&ct(F,lt.startTime-V)}}var q=!1,W=-1,I=5,vt=-1;function z(){return!(o.unstable_now()-vt<I)}function E(){if(q){var V=o.unstable_now();vt=V;var lt=!0;try{t:{A=!1,R&&(R=!1,_(W),W=-1),M=!0;var at=S;try{e:{for(D(V),y=i(p);y!==null&&!(y.expirationTime>V&&z());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,S=y.priorityLevel;var C=ht(y.expirationTime<=V);if(V=o.unstable_now(),typeof C=="function"){y.callback=C,D(V),lt=!0;break e}y===i(p)&&r(p),D(V)}else r(p);y=i(p)}if(y!==null)lt=!0;else{var Q=i(m);Q!==null&&ct(F,Q.startTime-V),lt=!1}}break t}finally{y=null,S=at,M=!1}lt=void 0}}finally{lt?N():q=!1}}}var N;if(typeof P=="function")N=function(){P(E)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,wt=_t.port2;_t.port1.onmessage=E,N=function(){wt.postMessage(null)}}else N=function(){v(E,0)};function J(){q||(q=!0,N())}function ct(V,lt){W=v(function(){V(o.unstable_now())},lt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,J())},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(V){switch(S){case 1:case 2:case 3:var lt=3;break;default:lt=S}var at=S;S=lt;try{return V()}finally{S=at}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,lt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var at=S;S=V;try{return lt()}finally{S=at}},o.unstable_scheduleCallback=function(V,lt,at){var ht=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?ht+at:ht):at=ht,V){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=at+C,V={id:g++,callback:lt,priorityLevel:V,startTime:at,expirationTime:C,sortIndex:-1},at>ht?(V.sortIndex=at,e(m,V),i(p)===null&&V===i(m)&&(R?(_(W),W=-1):R=!0,ct(F,at-ht))):(V.sortIndex=C,e(p,V),A||M||(A=!0,J())),V},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(V){var lt=S;return function(){var at=S;S=lt;try{return V.apply(this,arguments)}finally{S=at}}}}(Pf)),Pf}var rg;function Ny(){return rg||(rg=1,Of.exports=Uy()),Of.exports}var zf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Oy(){if(sg)return Dn;sg=1;var o=Ad();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Dn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Dn.requestFormReset=function(p){r.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.0.0",Dn}var og;function Py(){if(og)return zf.exports;og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Oy(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function zy(){if(lg)return Ro;lg=1;var o=Ny(),e=Ad(),i=Py();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),F=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,N,_t;function wt(t){if(N===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+t+_t}var J=!1;function ct(t,n){if(!t||J)return"";J=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(yt){var ut=yt}Reflect.construct(t,[],Ct)}else{try{Ct.call()}catch(yt){ut=yt}t.call(Ct.prototype)}}else{try{throw Error()}catch(yt){ut=yt}(Ct=t())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(yt){if(yt&&ut&&typeof yt.stack=="string")return[yt.stack,ut.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var B=x.split(`
`),$=w.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===$.length)for(s=B.length-1,c=$.length-1;1<=s&&0<=c&&B[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==$[c]){var xt=`
`+B[s].replace(" at new "," at ");return t.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",t.displayName)),xt}while(1<=s&&0<=c);break}}}finally{J=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?wt(a):""}function V(t){switch(t.tag){case 26:case 27:case 5:return wt(t.type);case 16:return wt("Lazy");case 13:return wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return t=ct(t.type,!1),t;case 11:return t=ct(t.type.render,!1),t;case 1:return t=ct(t.type,!0),t;default:return""}}function lt(t){try{var n="";do n+=V(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function at(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ht(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if(at(t)!==t)throw Error(r(188))}function Q(t){var n=t.alternate;if(!n){if(n=at(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),t;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,w=c.child;w;){if(w===a){x=!0,a=c,s=f;break}if(w===s){x=!0,s=c,a=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===a){x=!0,a=f,s=c;break}if(w===s){x=!0,s=f,a=c;break}w=w.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function mt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=mt(t),n!==null)return n;t=t.sibling}return null}var Dt=Array.isArray,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},bt=[],Yt=-1;function Ht(t){return{current:t}}function Gt(t){0>Yt||(t.current=bt[Yt],bt[Yt]=null,Yt--)}function Kt(t,n){Yt++,bt[Yt]=t.current,t.current=n}var ae=Ht(null),et=Ht(null),Oe=Ht(null),ne=Ht(null);function se(t,n){switch(Kt(Oe,n),Kt(et,t),Kt(ae,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Cm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Cm(t),n=Dm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Gt(ae),Kt(ae,n)}function Zt(){Gt(ae),Gt(et),Gt(Oe)}function be(t){t.memoizedState!==null&&Kt(ne,t);var n=ae.current,a=Dm(n,t.type);n!==a&&(Kt(et,t),Kt(ae,a))}function ce(t){et.current===t&&(Gt(ae),Gt(et)),ne.current===t&&(Gt(ne),Mo._currentValue=pt)}var L=Object.prototype.hasOwnProperty,b=o.unstable_scheduleCallback,it=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,Rt=o.unstable_requestPaint,X=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,ot=o.unstable_ImmediatePriority,dt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,le=o.log,Xt=o.unstable_setDisableYieldValue,Lt=null,Ft=null;function kt(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Lt,t,void 0,(t.current.flags&128)===128)}catch{}}function Nt(t){if(typeof le=="function"&&Xt(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Lt,t)}catch{}}var O=Math.clz32?Math.clz32:zt,gt=Math.log,Ut=Math.LN2;function zt(t){return t>>>=0,t===0?32:31-(gt(t)/Ut|0)|0}var U=128,At=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function jt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,x=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=Tt(a):(f&=w,f!==0?s=Tt(f):t||(x=w&~x,x!==0&&(s=Tt(x))))):(w=a&~c,w!==0?s=Tt(w):f!==0?s=Tt(f):t||(x=a&~x,x!==0&&(s=Tt(x)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,x=n&-n,c>=x||c===32&&(x&4194176)!==0)?n:s}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ye(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fe(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function Ae(){var t=At;return At<<=1,!(At&62914560)&&(At=4194304),t}function Xe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function oe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var xt=31-O(a),Ct=1<<xt;w[xt]=0,B[xt]=-1;var ut=$[xt];if(ut!==null)for($[xt]=null,xt=0;xt<ut.length;xt++){var yt=ut[xt];yt!==null&&(yt.lane&=-536870913)}a&=~Ct}s!==0&&Pe(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-O(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-O(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ai(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function ti(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:jm(t.type))}function ge(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var ze=Math.random().toString(36).slice(2),qe="__reactFiber$"+ze,tn="__reactProps$"+ze,ei="__reactContainer$"+ze,It="__reactEvents$"+ze,qt="__reactListeners$"+ze,T="__reactHandles$"+ze,H="__reactResources$"+ze,G="__reactMarker$"+ze;function k(t){delete t[qe],delete t[tn],delete t[It],delete t[qt],delete t[T]}function Y(t){var n=t[qe];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ei]||a[qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Nm(t);t!==null;){if(a=t[qe])return a;t=Nm(t)}return n}t=a,a=t.parentNode}return null}function St(t){if(t=t[qe]||t[ei]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Bt(t){var n=t[H];return n||(n=t[H]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Vt(t){t[G]=!0}var ee=new Set,te={};function $t(t,n){Re(t,n),Re(t+"Capture",n)}function Re(t,n){for(te[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var Fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wn={},Ie={};function he(t){return L.call(Ie,t)?!0:L.call(wn,t)?!1:ke.test(t)?Ie[t]=!0:(wn[t]=!0,!1)}function wi(t,n,a){if(he(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Be(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function gn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gi(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _n(t){var n=gi(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rn(t){t._valueTracker||(t._valueTracker=_n(t))}function Ri(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=gi(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function Rn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(t,n,a,s,c,f,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qe(n)):t.value!==""+Qe(n)&&(t.value=""+Qe(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,x,Qe(n)):a!=null?Cc(t,x,Qe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Qe(w):t.removeAttribute("name")}function Os(t,n,a,s,c,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Qe(a):"",n=n!=null?""+Qe(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=w?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Cc(t,n,a){n==="number"&&ua(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Qe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Pd(t,n,a){if(n!=null&&(n=""+Qe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Qe(a):""}function zd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Qe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Bd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Bd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Id(t){var n=St(t);if(n&&(t=n.stateNode)){var a=t[tn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[tn]||null;if(!c)throw Error(r(90));Ns(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ri(s)}break t;case"textarea":Pd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var Nc=!1;function Hd(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(Tl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Id(n),t)))for(n=0;n<t.length;n++)Id(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[tn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Fe)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Oc=!1}var fa=null,Pc=null,Vo=null;function Gd(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Vd(){return!1}function Hn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Vd,this.isPropagationStopped=Vd,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Hn(Xa),Bs=E({},Xa,{view:0,detail:0}),C0=Hn(Bs),zc,Bc,Fs,qo=E({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(zc=t.screenX-Fs.screenX,Bc=t.screenY-Fs.screenY):Bc=zc=0,Fs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),kd=Hn(qo),D0=E({},qo,{dataTransfer:0}),L0=Hn(D0),U0=E({},Bs,{relatedTarget:0}),Fc=Hn(U0),N0=E({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Hn(N0),P0=E({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Hn(P0),B0=E({},Xa,{data:0}),Wd=Hn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=E({},Bs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Hn(V0),W0=E({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Hn(W0),X0=E({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Hn(X0),Y0=E({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Hn(Y0),Z0=E({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Hn(Z0),Q0=E({},Xa,{newState:0,oldState:0}),J0=Hn(Q0),$0=[9,13,27,32],Hc=Fe&&"CompositionEvent"in window,Is=null;Fe&&"documentMode"in document&&(Is=document.documentMode);var tv=Fe&&"TextEvent"in window&&!Is,qd=Fe&&(!Hc||Is&&8<Is&&11>=Is),Yd=" ",jd=!1;function Zd(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Kd(n);case"keypress":return n.which!==32?null:(jd=!0,Yd);case"textInput":return t=n.data,t===Yd&&jd?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Zd(t,n)?(t=Gd(),Vo=Pc=fa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qd&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function Jd(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function av(t){Tm(t,0)}function Yo(t){var n=Ot(t);if(Ri(n))return t}function $d(t,n){if(t==="change")return n}var th=!1;if(Fe){var Gc;if(Fe){var Vc="oninput"in document;if(!Vc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Vc=typeof eh.oninput=="function"}Gc=Vc}else Gc=!1;th=Gc&&(!document.documentMode||9<document.documentMode)}function nh(){Hs&&(Hs.detachEvent("onpropertychange",ih),Gs=Hs=null)}function ih(t){if(t.propertyName==="value"&&Yo(Gs)){var n=[];Jd(n,Gs,t,Uc(t)),Hd(av,n)}}function rv(t,n,a){t==="focusin"?(nh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",ih)):t==="focusout"&&nh()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Gs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:cv;function Vs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!L.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rh(t,n){var a=ah(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ah(a)}}function sh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function oh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ua(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ua(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=oh(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&sh(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=rh(n,f);var x=rh(n,s);c&&x&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=Fe&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,ks=null,Xc=!1;function lh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==ua(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},qc={},ch={};Fe&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Ya(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ch)return qc[t]=n[a];return t}var uh=Ya("animationend"),fh=Ya("animationiteration"),dh=Ya("animationstart"),dv=Ya("transitionrun"),hv=Ya("transitionstart"),pv=Ya("transitioncancel"),hh=Ya("transitionend"),ph=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _i(t,n){ph.set(t,n),$t(n,[t])}var ni=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&gh(a,c,f)}}function Zo(t,n,a,s){ni[Lr++]=t,ni[Lr++]=n,ni[Lr++]=a,ni[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function da(t,n){return Zo(t,null,null,n),Ko(t)}function gh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-O(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<mo)throw mo=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},_h=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=_h.get(t);return a!==void 0?a:(n={value:t,source:n,stack:lt(n)},_h.set(t,n),n)}return{value:t,source:n,stack:lt(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ai=[],ri=0,ja=null,Ii=1,Hi="";function Za(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function vh(t,n,a){ai[ri++]=Ii,ai[ri++]=Hi,ai[ri++]=ja,ja=t;var s=Ii;t=Hi;var c=32-O(s)-1;s&=~(1<<c),a+=1;var f=32-O(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ii=1<<32-O(n)+c|a<<c|s,Hi=f+t}else Ii=1<<f|a<<c|s,Hi=t}function Zc(t){t.return!==null&&(Za(t,1),vh(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===ja;)ja=ai[--ri],ai[ri]=null,Hi=ai[--ri],ai[ri]=null,Ii=ai[--ri],ai[ri]=null}var On=null,Mn=null,Ue=!1,vi=null,Ci=!1,Qc=Error(r(519));function Ka(t){var n=Error(r(418,""));throw qs(ii(n,t)),Qc}function yh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[qe]=t,n[tn]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)Ce(_o[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),rn(n);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),zd(n,s.value,s.defaultValue,s.children),rn(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rm(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Ka(t)}function xh(t){for(On=t.return;On;)switch(On.tag){case 3:case 27:Ci=!0;return;case 5:case 13:Ci=!1;return;default:On=On.return}}function Ws(t){if(t!==On)return!1;if(!Ue)return xh(t),Ue=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Mn&&Ka(t),xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Mn=xi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Mn=null}}else Mn=On?xi(t.stateNode.nextSibling):null;return!0}function Xs(){Mn=On=null,Ue=!1}function qs(t){vi===null?vi=[t]:vi.push(t)}var Ys=Error(r(460)),Sh=Error(r(474)),Jc={then:function(){}};function Mh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function Eh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ys?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ys?Error(r(483)):t}throw js=n,Ys}}var js=null;function Th(){if(js===null)throw Error(r(459));var t=js;return js=null,t}var Pr=null,Zs=0;function tl(t){var n=Zs;return Zs+=1,Pr===null&&(Pr=[]),Eh(Pr,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bh(t){var n=t._init;return n(t._payload)}function Ah(t){function n(tt,K){if(t){var st=tt.deletions;st===null?(tt.deletions=[K],tt.flags|=16):st.push(K)}}function a(tt,K){if(!t)return null;for(;K!==null;)n(tt,K),K=K.sibling;return null}function s(tt){for(var K=new Map;tt!==null;)tt.key!==null?K.set(tt.key,tt):K.set(tt.index,tt),tt=tt.sibling;return K}function c(tt,K){return tt=Ta(tt,K),tt.index=0,tt.sibling=null,tt}function f(tt,K,st){return tt.index=st,t?(st=tt.alternate,st!==null?(st=st.index,st<K?(tt.flags|=33554434,K):st):(tt.flags|=33554434,K)):(tt.flags|=1048576,K)}function x(tt){return t&&tt.alternate===null&&(tt.flags|=33554434),tt}function w(tt,K,st,Et){return K===null||K.tag!==6?(K=qu(st,tt.mode,Et),K.return=tt,K):(K=c(K,st),K.return=tt,K)}function B(tt,K,st,Et){var Qt=st.type;return Qt===p?xt(tt,K,st.props.children,Et,st.key):K!==null&&(K.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===P&&bh(Qt)===K.type)?(K=c(K,st.props),Ks(K,st),K.return=tt,K):(K=yl(st.type,st.key,st.props,null,tt.mode,Et),Ks(K,st),K.return=tt,K)}function $(tt,K,st,Et){return K===null||K.tag!==4||K.stateNode.containerInfo!==st.containerInfo||K.stateNode.implementation!==st.implementation?(K=Yu(st,tt.mode,Et),K.return=tt,K):(K=c(K,st.children||[]),K.return=tt,K)}function xt(tt,K,st,Et,Qt){return K===null||K.tag!==7?(K=sr(st,tt.mode,Et,Qt),K.return=tt,K):(K=c(K,st),K.return=tt,K)}function Ct(tt,K,st){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=qu(""+K,tt.mode,st),K.return=tt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case h:return st=yl(K.type,K.key,K.props,null,tt.mode,st),Ks(st,K),st.return=tt,st;case d:return K=Yu(K,tt.mode,st),K.return=tt,K;case P:var Et=K._init;return K=Et(K._payload),Ct(tt,K,st)}if(Dt(K)||W(K))return K=sr(K,tt.mode,st,null),K.return=tt,K;if(typeof K.then=="function")return Ct(tt,tl(K),st);if(K.$$typeof===M)return Ct(tt,gl(tt,K),st);el(tt,K)}return null}function ut(tt,K,st,Et){var Qt=K!==null?K.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Qt!==null?null:w(tt,K,""+st,Et);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case h:return st.key===Qt?B(tt,K,st,Et):null;case d:return st.key===Qt?$(tt,K,st,Et):null;case P:return Qt=st._init,st=Qt(st._payload),ut(tt,K,st,Et)}if(Dt(st)||W(st))return Qt!==null?null:xt(tt,K,st,Et,null);if(typeof st.then=="function")return ut(tt,K,tl(st),Et);if(st.$$typeof===M)return ut(tt,K,gl(tt,st),Et);el(tt,st)}return null}function yt(tt,K,st,Et,Qt){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return tt=tt.get(st)||null,w(K,tt,""+Et,Qt);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case h:return tt=tt.get(Et.key===null?st:Et.key)||null,B(K,tt,Et,Qt);case d:return tt=tt.get(Et.key===null?st:Et.key)||null,$(K,tt,Et,Qt);case P:var Se=Et._init;return Et=Se(Et._payload),yt(tt,K,st,Et,Qt)}if(Dt(Et)||W(Et))return tt=tt.get(st)||null,xt(K,tt,Et,Qt,null);if(typeof Et.then=="function")return yt(tt,K,st,tl(Et),Qt);if(Et.$$typeof===M)return yt(tt,K,st,gl(K,Et),Qt);el(K,Et)}return null}function ie(tt,K,st,Et){for(var Qt=null,Se=null,re=K,ue=K=0,xn=null;re!==null&&ue<st.length;ue++){re.index>ue?(xn=re,re=null):xn=re.sibling;var Ne=ut(tt,re,st[ue],Et);if(Ne===null){re===null&&(re=xn);break}t&&re&&Ne.alternate===null&&n(tt,re),K=f(Ne,K,ue),Se===null?Qt=Ne:Se.sibling=Ne,Se=Ne,re=xn}if(ue===st.length)return a(tt,re),Ue&&Za(tt,ue),Qt;if(re===null){for(;ue<st.length;ue++)re=Ct(tt,st[ue],Et),re!==null&&(K=f(re,K,ue),Se===null?Qt=re:Se.sibling=re,Se=re);return Ue&&Za(tt,ue),Qt}for(re=s(re);ue<st.length;ue++)xn=yt(re,tt,ue,st[ue],Et),xn!==null&&(t&&xn.alternate!==null&&re.delete(xn.key===null?ue:xn.key),K=f(xn,K,ue),Se===null?Qt=xn:Se.sibling=xn,Se=xn);return t&&re.forEach(function(La){return n(tt,La)}),Ue&&Za(tt,ue),Qt}function me(tt,K,st,Et){if(st==null)throw Error(r(151));for(var Qt=null,Se=null,re=K,ue=K=0,xn=null,Ne=st.next();re!==null&&!Ne.done;ue++,Ne=st.next()){re.index>ue?(xn=re,re=null):xn=re.sibling;var La=ut(tt,re,Ne.value,Et);if(La===null){re===null&&(re=xn);break}t&&re&&La.alternate===null&&n(tt,re),K=f(La,K,ue),Se===null?Qt=La:Se.sibling=La,Se=La,re=xn}if(Ne.done)return a(tt,re),Ue&&Za(tt,ue),Qt;if(re===null){for(;!Ne.done;ue++,Ne=st.next())Ne=Ct(tt,Ne.value,Et),Ne!==null&&(K=f(Ne,K,ue),Se===null?Qt=Ne:Se.sibling=Ne,Se=Ne);return Ue&&Za(tt,ue),Qt}for(re=s(re);!Ne.done;ue++,Ne=st.next())Ne=yt(re,tt,ue,Ne.value,Et),Ne!==null&&(t&&Ne.alternate!==null&&re.delete(Ne.key===null?ue:Ne.key),K=f(Ne,K,ue),Se===null?Qt=Ne:Se.sibling=Ne,Se=Ne);return t&&re.forEach(function(Ry){return n(tt,Ry)}),Ue&&Za(tt,ue),Qt}function an(tt,K,st,Et){if(typeof st=="object"&&st!==null&&st.type===p&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case h:t:{for(var Qt=st.key;K!==null;){if(K.key===Qt){if(Qt=st.type,Qt===p){if(K.tag===7){a(tt,K.sibling),Et=c(K,st.props.children),Et.return=tt,tt=Et;break t}}else if(K.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===P&&bh(Qt)===K.type){a(tt,K.sibling),Et=c(K,st.props),Ks(Et,st),Et.return=tt,tt=Et;break t}a(tt,K);break}else n(tt,K);K=K.sibling}st.type===p?(Et=sr(st.props.children,tt.mode,Et,st.key),Et.return=tt,tt=Et):(Et=yl(st.type,st.key,st.props,null,tt.mode,Et),Ks(Et,st),Et.return=tt,tt=Et)}return x(tt);case d:t:{for(Qt=st.key;K!==null;){if(K.key===Qt)if(K.tag===4&&K.stateNode.containerInfo===st.containerInfo&&K.stateNode.implementation===st.implementation){a(tt,K.sibling),Et=c(K,st.children||[]),Et.return=tt,tt=Et;break t}else{a(tt,K);break}else n(tt,K);K=K.sibling}Et=Yu(st,tt.mode,Et),Et.return=tt,tt=Et}return x(tt);case P:return Qt=st._init,st=Qt(st._payload),an(tt,K,st,Et)}if(Dt(st))return ie(tt,K,st,Et);if(W(st)){if(Qt=W(st),typeof Qt!="function")throw Error(r(150));return st=Qt.call(st),me(tt,K,st,Et)}if(typeof st.then=="function")return an(tt,K,tl(st),Et);if(st.$$typeof===M)return an(tt,K,gl(tt,st),Et);el(tt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,K!==null&&K.tag===6?(a(tt,K.sibling),Et=c(K,st),Et.return=tt,tt=Et):(a(tt,K),Et=qu(st,tt.mode,Et),Et.return=tt,tt=Et),x(tt)):a(tt,K)}return function(tt,K,st,Et){try{Zs=0;var Qt=an(tt,K,st,Et);return Pr=null,Qt}catch(re){if(re===Ys)throw re;var Se=ci(29,re,null,tt.mode);return Se.lanes=Et,Se.return=tt,Se}finally{}}}var Qa=Ah(!0),wh=Ah(!1),zr=Ht(null),nl=Ht(0);function Rh(t,n){t=Qi,Kt(nl,t),Kt(zr,n),Qi=t|n.baseLanes}function $c(){Kt(nl,Qi),Kt(zr,zr.current)}function tu(){Qi=nl.current,Gt(zr),Gt(nl)}var si=Ht(null),Di=null;function ha(t){var n=t.alternate;Kt(dn,dn.current&1),Kt(si,t),Di===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Di=t)}function Ch(t){if(t.tag===22){if(Kt(dn,dn.current),Kt(si,t),Di===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Di=t)}}else pa()}function pa(){Kt(dn,dn.current),Kt(si,si.current)}function Gi(t){Gt(si),Di===t&&(Di=null),Gt(dn)}var dn=Ht(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,hn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var Js=null,nu=0,Br=0,Fr=null;function vv(t,n){if(Js===null){var a=Js=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Dh,Dh),n}function Dh(){if(--nu===0&&Js!==null){Fr!==null&&(Fr.status="fulfilled");var t=Js;Js=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Lh=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Lh!==null&&Lh(t,n)};var Ja=Ht(null);function iu(){var t=Ja.current;return t!==null?t:Ye.pooledCache}function al(t,n){n===null?Kt(Ja,Ja.current):Kt(Ja,n.pool)}function Uh(){var t=iu();return t===null?null:{parent:hn._currentValue,pool:t}}var ma=0,xe=null,He=null,ln=null,rl=!1,Ir=!1,$a=!1,sl=0,$s=0,Hr=null,xv=0;function sn(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return ma=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?tr:ga,$a=!1,f=a(s,c),$a=!1,Ir&&(f=Oh(n,a,s,c)),Nh(t),f}function Nh(t){z.H=Li;var n=He!==null&&He.next!==null;if(ma=0,ln=He=xe=null,rl=!1,$s=0,Hr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Oh(t,n,a,s){xe=t;var c=0;do{if(Ir&&(Hr=null),$s=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,ln=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=er,f=n(a,s)}while(Ir);return f}function Sv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(xe.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}ma=0,ln=He=xe=null,Ir=!1,$s=sl=0,Hr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?xe.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(He===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=ln===null?xe.memoizedState:ln.next;if(n!==null)ln=n,He=t;else{if(t===null)throw xe.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?xe.memoizedState=ln=t:ln=ln.next=t}return ln}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(t){var n=$s;return $s+=1,Hr===null&&(Hr=[]),t=Eh(Hr,t,n),n=xe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?tr:ga),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===M)return Cn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=F;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=cn();return uu(n,He,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var w=x=null,B=null,$=n,xt=!1;do{var Ct=$.lane&-536870913;if(Ct!==$.lane?(De&Ct)===Ct:(ma&Ct)===Ct){var ut=$.revertLane;if(ut===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Ct===Br&&(xt=!0);else if((ma&ut)===ut){$=$.next,ut===Br&&(xt=!0);continue}else Ct={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(w=B=Ct,x=f):B=B.next=Ct,xe.lanes|=ut,ba|=ut;Ct=$.action,$a&&a(f,Ct),f=$.hasEagerState?$.eagerState:a(f,Ct)}else ut={lane:Ct,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(w=B=ut,x=f):B=B.next=ut,xe.lanes|=Ct,ba|=Ct;$=$.next}while($!==null&&$!==n);if(B===null?x=f:B.next=w,!Xn(f,t.memoizedState)&&(vn=!0,xt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Xn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ph(t,n,a){var s=xe,c=cn(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Xn((He||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,pu(Fh.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Bh.bind(null,s,c,a,n),{destroy:void 0},null),Ye===null)throw Error(r(349));f||ma&60||zh(s,n,a)}return a}function zh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=ol(),xe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Bh(t,n,a,s){n.value=a,n.getSnapshot=s,Ih(n)&&Hh(t)}function Fh(t,n,a){return a(function(){Ih(n)&&Hh(t)})}function Ih(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Hh(t){var n=da(t,2);n!==null&&Pn(n,t,2)}function du(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),$a){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Gh(t,n,a,s){return t.baseState=a,uu(t,He,typeof s=="function"?s:Vi)}function Mv(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Vh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var w=a(c,s),B=z.S;B!==null&&B(x,w),kh(t,n,w)}catch($){hu(t,n,$)}finally{z.T=f}}else try{f=a(c,s),kh(t,n,f)}catch($){hu(t,n,$)}}function kh(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wh(t,n,s)},function(s){return hu(t,n,s)}):Wh(t,n,a)}function Wh(t,n,a){n.status="fulfilled",n.value=a,Xh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vh(t,a)))}function hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xh(n),n=n.next;while(n!==s)}t.action=null}function Xh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qh(t,n){return n}function Yh(t,n){if(Ue){var a=Ye.formState;if(a!==null){t:{var s=xe;if(Ue){if(Mn){e:{for(var c=Mn,f=Ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Mn=xi(c.nextSibling),s=c.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qh,lastRenderedState:n},a.queue=s,a=fp.bind(null,xe,s),s.dispatch=a,s=du(!1),f=yu.bind(null,xe,!1,s.queue),s=Gn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function jh(t){var n=cn();return Zh(n,He,t)}function Zh(t,n,a){n=uu(t,n,qh)[0],t=cl(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var s=cn(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(xe.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Kh(t){var n=cn(),a=He;if(a!==null)return Zh(n,a,t);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=xe.updateQueue,n===null&&(n=ol(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Qh(){return cn().memoizedState}function ul(t,n,a,s){var c=Gn();xe.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=cn();s=s===void 0?null:s;var f=c.memoizedState.inst;He!==null&&s!==null&&au(s,He.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(xe.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function Jh(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function $h(t,n){return fl(4,2,t,n)}function tp(t,n){return fl(4,4,t,n)}function ep(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function np(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,ep.bind(null,n,t),a)}function mu(){}function ip(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ap(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),$a){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||ma&1073741824?t.memoizedState=n:(t.memoizedState=a,t=sm(),xe.lanes|=t,ba|=t,a)}function rp(t,n,a,s){return Xn(a,n)?a:zr.current!==null?(t=gu(t,a,s),Xn(t,n)||(vn=!0),t):ma&42?(t=sm(),xe.lanes|=t,ba|=t,n):(vn=!0,t.memoizedState=a)}function sp(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var x=z.T,w={};z.T=w,yu(t,!1,n,a);try{var B=c(),$=z.S;if($!==null&&$(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var xt=yv(B,s);eo(t,n,xt,Zn(t))}else eo(t,n,s,Zn(t))}catch(Ct){eo(t,n,{then:function(){},status:"rejected",reason:Ct},Zn())}finally{j.p=f,z.T=x}}function Tv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=op(t).queue;sp(t,c,n,pt,a===null?Tv:function(){return lp(t),a(s)})}function op(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lp(t){var n=op(t).next.queue;eo(t,n,{},Zn())}function vu(){return Cn(Mo)}function cp(){return cn().memoizedState}function up(){return cn().memoizedState}function bv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=ya(a);var s=xa(n,t,a);s!==null&&(Pn(s,n,a),ao(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?dp(n,a):(a=jc(t,n,a,s),a!==null&&(Pn(a,t,s),hp(a,n,s)))}function fp(t,n,a){var s=Zn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))dp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,w=f(x,a);if(c.hasEagerState=!0,c.eagerState=w,Xn(w,x))return Zo(t,n,c,0),Ye===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return Pn(a,t,s),hp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&Pn(n,t,2)}function dl(t){var n=t.alternate;return t===xe||n!==null&&n===xe}function dp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,mi(t,a)}}var Li={readContext:Cn,use:ll,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn};Li.useCacheRefresh=sn,Li.useMemoCache=sn,Li.useHostTransitionStatus=sn,Li.useFormState=sn,Li.useActionState=sn,Li.useOptimistic=sn;var tr={readContext:Cn,use:ll,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Jh,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,ep.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var s=t();if($a){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Gn();if(a!==void 0){var c=a(n);if($a){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,xe,t),[s.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=fp.bind(null,xe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Gn();return gu(a,t,n)},useTransition:function(){var t=du(!1);return t=sp.bind(null,xe,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=xe,c=Gn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));De&60||zh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jh(Fh.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Bh.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Gn(),n=Ye.identifierPrefix;if(Ue){var a=Hi,s=Ii;a=(s&~(1<<32-O(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=xv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Gn().memoizedState=bv.bind(null,xe)}};tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Yh,tr.useActionState=Yh,tr.useOptimistic=function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,xe,!0,a),a.dispatch=n,[t,n]};var ga={readContext:Cn,use:ll,useCallback:ip,useContext:Cn,useEffect:pu,useImperativeHandle:np,useInsertionEffect:$h,useLayoutEffect:tp,useMemo:ap,useReducer:cl,useRef:Qh,useState:function(){return cl(Vi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=cn();return rp(a,He.memoizedState,t,n)},useTransition:function(){var t=cl(Vi)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Ph,useId:cp};ga.useCacheRefresh=up,ga.useMemoCache=cu,ga.useHostTransitionStatus=vu,ga.useFormState=jh,ga.useActionState=jh,ga.useOptimistic=function(t,n){var a=cn();return Gh(a,He,t,n)};var er={readContext:Cn,use:ll,useCallback:ip,useContext:Cn,useEffect:pu,useImperativeHandle:np,useInsertionEffect:$h,useLayoutEffect:tp,useMemo:ap,useReducer:fu,useRef:Qh,useState:function(){return fu(Vi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=cn();return He===null?gu(a,t,n):rp(a,He.memoizedState,t,n)},useTransition:function(){var t=fu(Vi)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Ph,useId:cp};er.useCacheRefresh=up,er.useMemoCache=cu,er.useHostTransitionStatus=vu,er.useFormState=Kh,er.useActionState=Kh,er.useOptimistic=function(t,n){var a=cn();return He!==null?Gh(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])};function xu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Su={isMounted:function(t){return(t=t._reactInternals)?at(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(Pn(n,t,s),ao(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(Pn(n,t,s),ao(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=xa(t,s,a),n!==null&&(Pn(n,t,a),ao(n,t,a))}};function pp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function mp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Su.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=E({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gp(t){hl(t)}function _p(t){console.error(t)}function vp(t){hl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function xp(t){return t=ya(t),t.tag=3,t}function Sp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){yp(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){yp(n,a,s),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Di===null?af():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Ue)return n=si.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),qs(ii(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),qs(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),nn!==4&&(nn=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xp(c),Sp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Mp=Error(r(461)),vn=!1;function En(t,n,a,s){n.child=t===null?wh(n,null,a,s):Qa(n,t.child,a,s)}function Ep(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var w in s)w!=="ref"&&(x[w]=s[w])}else x=s;return ar(n),s=ru(t,n,a,x,f,c),w=su(),t!==null&&!vn?(ou(t,n,c),ki(t,n,c)):(Ue&&w&&Zc(n),n.flags|=1,En(t,n,s,c),n.child)}function Tp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bp(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(x,s)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Ta(f,s),t.ref=n.ref,t.return=n,n.child=t}function bp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(vn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Eu(t,n,a,s,c)}function Ap(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,x=t!==null?t.memoizedState:null;if(no(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=x!==null?x.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return wp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,x!==null?x.cachePool:null),x!==null?Rh(n,x):$c(),Ch(n);else return n.lanes=n.childLanes=536870912,wp(t,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(al(n,x.cachePool),Rh(n,x),pa(),n.memoizedState=null):(t!==null&&al(n,null),$c(),pa());return En(t,n,c,a),n.child}function wp(t,n,a,s){var c=iu();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Ch(n),t!==null&&io(t,n,s,!0),null}function no(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ar(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!vn?(ou(t,n,c),ki(t,n,c)):(Ue&&s&&Zc(n),n.flags|=1,En(t,n,a,c),n.child)}function Rp(t,n,a,s,c,f){return ar(n),n.updateQueue=null,a=Oh(n,s,a,c),Nh(t),s=su(),t!==null&&!vn?(ou(t,n,f),ki(t,n,f)):(Ue&&s&&Zc(n),n.flags|=1,En(t,n,a,f),n.child)}function Cp(t,n,a,s,c){if(ar(n),n.stateNode===null){var f=Ur,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Su,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):Ur,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(xu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Su.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,B=nr(a,w);f.props=B;var $=f.context,xt=a.contextType;x=Ur,typeof xt=="object"&&xt!==null&&(x=Cn(xt));var Ct=a.getDerivedStateFromProps;xt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||$!==x)&&mp(n,f,s,x),va=!1;var ut=n.memoizedState;f.state=ut,so(n,s,f,c),ro(),$=n.memoizedState,w||ut!==$||va?(typeof Ct=="function"&&(xu(n,a,Ct,s),$=n.memoizedState),(B=va||pp(n,a,B,s,ut,$,x))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),x=n.memoizedProps,xt=nr(a,x),f.props=xt,Ct=n.pendingProps,ut=f.context,$=a.contextType,B=Ur,typeof $=="object"&&$!==null&&(B=Cn($)),w=a.getDerivedStateFromProps,($=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Ct||ut!==B)&&mp(n,f,s,B),va=!1,ut=n.memoizedState,f.state=ut,so(n,s,f,c),ro();var yt=n.memoizedState;x!==Ct||ut!==yt||va||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof w=="function"&&(xu(n,a,w,s),yt=n.memoizedState),(xt=va||pp(n,a,xt,s,ut,yt,B)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,yt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,yt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ut===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ut===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=yt),f.props=s,f.state=yt,f.context=B,s=xt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ut===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ut===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,no(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Qa(n,t.child,null,c),n.child=Qa(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function Dp(t,n,a,s){return Xs(),n.flags|=256,En(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:Uh()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Lp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(c?ha(n):pa(),Ue){var w=Mn,B;if(B=w){t:{for(B=w,w=Ci;B.nodeType!==8;){if(!w){w=null;break t}if(B=xi(B.nextSibling),B===null){w=null;break t}}w=B}w!==null?(n.memoizedState={dehydrated:w,treeContext:ja!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912},B=ci(18,null,null,0),B.stateNode=w,B.return=n,n.child=B,On=n,Mn=null,B=!0):B=!1}B||Ka(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Gi(n)}return w=s.children,s=s.fallback,c?(pa(),c=n.mode,w=Ru({mode:"hidden",children:w},c),s=sr(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,x,a),n.memoizedState=Tu,s):(ha(n),wu(n,w))}if(B=t.memoizedState,B!==null&&(w=B.dehydrated,w!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(pa(),n.child=t.child,n.flags|=128,n=null):(pa(),c=s.fallback,w=n.mode,s=Ru({mode:"visible",children:s.children},w),c=sr(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Qa(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,x,a),n.memoizedState=Tu,n=c);else if(ha(n),w.data==="$!"){if(x=w.nextSibling&&w.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,qs({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(vn||io(t,n,a,!1),x=(a&t.childLanes)!==0,vn||x){if(x=Ye,x!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(x.suspendedLanes|a)?0:s,s!==0&&s!==B.retryLane)throw B.retryLane=s,da(t,s),Pn(x,t,s),Mp}w.data==="$?"||af(),n=Cu(t,n,a)}else w.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),w._reactRetry=n,n=null):(t=B.treeContext,Mn=xi(w.nextSibling),On=n,Ue=!0,vi=null,Ci=!1,t!==null&&(ai[ri++]=Ii,ai[ri++]=Hi,ai[ri++]=ja,Ii=t.id,Hi=t.overflow,ja=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(pa(),c=s.fallback,w=n.mode,B=t.child,$=B.sibling,s=Ta(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&31457280,$!==null?c=Ta($,c):(c=sr(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=t.child.memoizedState,w===null?w=bu(a):(B=w.cachePool,B!==null?($=hn._currentValue,B=B.parent!==$?{parent:$,pool:$}:B):B=Uh(),w={baseLanes:w.baseLanes|a,cachePool:B}),c.memoizedState=w,c.childLanes=Au(t,x,a),n.memoizedState=Tu,s):(ha(n),a=t.child,t=a.sibling,a=Ta(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return im(t,n,0,null)}function Cu(t,n,a){return Qa(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Up(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Np(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(t,n,s.children,a),s=dn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,a,n);else if(t.tag===19)Up(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Kt(dn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,!(a&n.childLanes))if(t!==null){if(io(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:se(n,n.stateNode.containerInfo),_a(n,hn,t.memoizedState.cache),Xs();break;case 27:case 5:be(n);break;case 4:se(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):a&n.child.childLanes?Lp(t,n,a):(ha(n),t=ki(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(io(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Np(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Kt(dn,dn.current),s)break;return null;case 22:case 23:return n.lanes=0,Ap(t,n,a);case 24:_a(n,hn,t.memoizedState.cache)}return ki(t,n,a)}function Op(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return vn=!1,Rv(t,n,a);vn=!!(t.flags&131072)}else vn=!1,Ue&&n.flags&1048576&&vh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=nr(s,t),n.tag=1,n=Cp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===A){n.tag=11,n=Ep(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=Tp(null,n,s,t,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=nr(s,n.pendingProps),Cp(t,n,s,c,a);case 3:t:{if(se(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),so(n,f,null,a);var x=n.memoizedState;if(f=x.cache,_a(n,hn,f),f!==c.cache&&Ou(n,[hn],a,!0),ro(),f=x.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Dp(t,n,f,a);break t}else if(f!==s){s=ii(Error(r(424)),n),qs(s),n=Dp(t,n,f,a);break t}else for(Mn=xi(n.stateNode.containerInfo.firstChild),On=n,Ue=!0,vi=null,Ci=!0,a=wh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),f===s){n=ki(t,n,a);break t}En(t,n,f,a)}n=n.child}return n;case 26:return no(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,t=n.pendingProps,s=Ll(Oe.current).createElement(a),s[qe]=n,s[tn]=t,Tn(s,a,t),Vt(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return be(n),t===null&&Ue&&(s=n.stateNode=Om(n.type,n.pendingProps,Oe.current),On=n,Ci=!0,Mn=xi(s.firstChild)),s=n.pendingProps.children,t!==null||Ue?En(t,n,s,a):n.child=Qa(n,null,s,a),no(t,n),n.child;case 5:return t===null&&Ue&&((c=s=Mn)&&(s=ay(s,n.type,n.pendingProps,Ci),s!==null?(n.stateNode=s,On=n,Mn=xi(s.firstChild),Ci=!1,c=!0):c=!1),c||Ka(n)),be(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:x!==null&&vf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,Sv,null,null,a),Mo._currentValue=c),no(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Ue&&((t=a=Mn)&&(a=ry(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,On=n,Mn=null,t=!0):t=!1),t||Ka(n)),null;case 13:return Lp(t,n,a);case 4:return se(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Qa(n,null,s,a):En(t,n,s,a),n.child;case 11:return Ep(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,_a(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=Cn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return bp(t,n,n.type,n.pendingProps,a);case 19:return Np(t,n,a);case 22:return Ap(t,n,a);case 24:return ar(n),s=Cn(hn),t===null?(c=iu(),c===null&&(c=Ye,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),_a(n,hn,c)):(t.lanes&a&&(zu(t,n),so(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,hn,s)):(s=f.cache,_a(n,hn,s),s!==c.cache&&Ou(n,[hn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Ht(null),ir=null,Wi=null;function _a(t,n,a){Kt(Uu,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Uu.current,Gt(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var B=0;B<n.length;B++)if(w.context===n[B]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Nu(f.return,a,t),s||(x=null);break t}f=w.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Nu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function io(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var w=c.type;Xn(c.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(c===ne.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Pp(ir,t)}function gl(t,n){return ir===null&&ar(t),Pp(t,n)}function Pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(t===null)throw Error(r(308));Wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Wi=Wi.next=n;return a}var va=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,$e&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),gh(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,mi(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function ro(){if(Fu){var t=Fr;if(t!==null)throw t}}function so(t,n,a,s){Fu=!1;var c=t.updateQueue;va=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var B=w,$=B.next;B.next=null,x===null?f=$:x.next=$,x=B;var xt=t.alternate;xt!==null&&(xt=xt.updateQueue,w=xt.lastBaseUpdate,w!==x&&(w===null?xt.firstBaseUpdate=$:w.next=$,xt.lastBaseUpdate=B))}if(f!==null){var Ct=c.baseState;x=0,xt=$=B=null,w=f;do{var ut=w.lane&-536870913,yt=ut!==w.lane;if(yt?(De&ut)===ut:(s&ut)===ut){ut!==0&&ut===Br&&(Fu=!0),xt!==null&&(xt=xt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ie=t,me=w;ut=n;var an=a;switch(me.tag){case 1:if(ie=me.payload,typeof ie=="function"){Ct=ie.call(an,Ct,ut);break t}Ct=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=me.payload,ut=typeof ie=="function"?ie.call(an,Ct,ut):ie,ut==null)break t;Ct=E({},Ct,ut);break t;case 2:va=!0}}ut=w.callback,ut!==null&&(t.flags|=64,yt&&(t.flags|=8192),yt=c.callbacks,yt===null?c.callbacks=[ut]:yt.push(ut))}else yt={lane:ut,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xt===null?($=xt=yt,B=Ct):xt=xt.next=yt,x|=ut;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;yt=w,w=yt.next,yt.next=null,c.lastBaseUpdate=yt,c.shared.pending=null}}while(!0);xt===null&&(B=Ct),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=xt,f===null&&(c.shared.lanes=0),ba|=x,t.lanes=x,t.memoizedState=Ct}}function zp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}function oo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(w){We(n,n.return,w)}}function Sa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,c=n;var B=a;try{w()}catch($){We(c,B,$)}}}s=s.next}while(s!==f)}}catch($){We(n,n.return,$)}}function Fp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bp(n,a)}catch(s){We(t,t.return,s)}}}function Ip(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){We(t,n,s)}}function rr(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){We(t,n,f)}}function qn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function Hp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function Gp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[tn]=n}catch(c){We(t,t.return,c)}}function Vp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var qi=!1,en=!1,Gu=!1,kp=typeof WeakSet=="function"?WeakSet:Set,yn=null,Wp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=oh(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,w=-1,B=-1,$=0,xt=0,Ct=t,ut=null;e:for(;;){for(var yt;Ct!==a||c!==0&&Ct.nodeType!==3||(w=x+c),Ct!==f||s!==0&&Ct.nodeType!==3||(B=x+s),Ct.nodeType===3&&(x+=Ct.nodeValue.length),(yt=Ct.firstChild)!==null;)ut=Ct,Ct=yt;for(;;){if(Ct===t)break e;if(ut===a&&++$===c&&(w=x),ut===f&&++xt===s&&(B=x),(yt=Ct.nextSibling)!==null)break;Ct=ut,ut=Ct.parentNode}Ct=yt}a=w===-1||B===-1?null:{start:w,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ie=nr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ie,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(me){We(a,a.return,me)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}return ie=Wp,Wp=!1,ie}function Xp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&oo(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(w){We(a,a.return,w)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){We(a,a.return,w)}}s&64&&Fp(a),s&512&&rr(a,a.return);break;case 3:if(ji(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bp(s,t)}catch(w){We(a,a.return,w)}}break;case 26:ji(t,a),s&512&&rr(a,a.return);break;case 27:case 5:ji(t,a),n===null&&s&4&&Hp(a),s&512&&rr(a,a.return);break;case 12:ji(t,a);break;case 13:ji(t,a),s&4&&jp(t,a);break;case 22:if(c=a.memoizedState!==null||qi,!c){n=n!==null&&n.memoizedState!==null||en;var f=qi,x=en;qi=c,(en=n)&&!x?Ma(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=f,en=x}s&512&&(a.memoizedProps.mode==="manual"?rr(a,a.return):qn(a,a.return));break;default:ji(t,a)}}function qp(t){var n=t.alternate;n!==null&&(t.alternate=null,qp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&k(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,Yn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)Yp(t,n,a),a=a.sibling}function Yp(t,n,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Lt,a)}catch{}switch(a.tag){case 26:en||qn(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||qn(a,n);var s=un,c=Yn;for(un=a.stateNode,Yi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);k(a),un=s,Yn=c;break;case 5:en||qn(a,n);case 6:c=un;var f=Yn;if(un=null,Yi(t,n,a),un=c,Yn=f,un!==null)if(Yn)try{t=un,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(x){We(a,n,x)}else try{un.removeChild(a.stateNode)}catch(x){We(a,n,x)}break;case 18:un!==null&&(Yn?(n=un,a=a.stateNode,n.nodeType===8?xf(n.parentNode,a):n.nodeType===1&&xf(n,a),Ao(n)):xf(un,a.stateNode));break;case 4:s=un,c=Yn,un=a.stateNode.containerInfo,Yn=!0,Yi(t,n,a),un=s,Yn=c;break;case 0:case 11:case 14:case 15:en||Sa(2,a,n),en||Sa(4,a,n),Yi(t,n,a);break;case 1:en||(qn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Ip(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:en||qn(a,n),en=(s=en)||a.memoizedState!==null,Yi(t,n,a),en=s;break;default:Yi(t,n,a)}}function jp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ao(t)}catch(a){We(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new kp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new kp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function oi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,w=x;t:for(;w!==null;){switch(w.tag){case 27:case 5:un=w.stateNode,Yn=!1;break t;case 3:un=w.stateNode.containerInfo,Yn=!0;break t;case 4:un=w.stateNode.containerInfo,Yn=!0;break t}w=w.return}if(un===null)throw Error(r(160));Yp(f,x,c),un=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Zp(n,t),n=n.sibling}var yi=null;function Zp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(n,t),li(t),s&4&&(Sa(3,t,t.return),oo(3,t),Sa(5,t,t.return));break;case 1:oi(n,t),li(t),s&512&&(en||a===null||qn(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=yi;if(oi(n,t),li(t),s&512&&(en||a===null||qn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[G]||f[qe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[qe]=t,Vt(f),s=f;break t;case"link":var x=Hm("link","href",c).get(s+(a.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Hm("meta","content",c).get(s+(a.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[qe]=t,Vt(f),s=f}t.stateNode=s}else Gm(c,t.type,t.stateNode);else t.stateNode=Im(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gm(c,t.type,t.stateNode):Im(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var B=c.firstChild;B;){var $=B.nextSibling,xt=B.nodeName;B[G]||xt==="HEAD"||xt==="BODY"||xt==="SCRIPT"||xt==="STYLE"||xt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||c.removeChild(B),B=$}for(var Ct=t.type,ut=c.attributes;ut.length;)c.removeAttributeNode(ut[0]);Tn(c,Ct,f),c[qe]=t,c[tn]=f}catch(ie){We(t,t.return,ie)}}case 5:if(oi(n,t),li(t),s&512&&(en||a===null||qn(a,a.return)),t.flags&32){c=t.stateNode;try{br(c,"")}catch(ie){We(t,t.return,ie)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Gp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(oi(n,t),li(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ie){We(t,t.return,ie)}}break;case 3:if(Ol=null,c=yi,yi=Ul(n.containerInfo),oi(n,t),yi=c,li(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(ie){We(t,t.return,ie)}Gu&&(Gu=!1,Kp(t));break;case 4:s=yi,yi=Ul(t.stateNode.containerInfo),oi(n,t),li(t),yi=s;break;case 12:oi(n,t),li(t);break;case 13:oi(n,t),li(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=X()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(en||a===null||qn(a,a.return)),B=t.memoizedState!==null,$=a!==null&&a.memoizedState!==null,xt=qi,Ct=en,qi=xt||B,en=Ct||$,oi(n,t),en=Ct,qi=xt,li(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=B?n._visibility&-2:n._visibility|1,B&&(n=qi||en,a===null||$||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){$=a=n;try{if(c=$.stateNode,B)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=$.stateNode,w=$.memoizedProps.style;var yt=w!=null&&w.hasOwnProperty("display")?w.display:null;x.style.display=yt==null||typeof yt=="boolean"?"":(""+yt).trim()}}catch(ie){We($,$.return,ie)}}}else if(n.tag===6){if(a===null){$=n;try{$.stateNode.nodeValue=B?"":$.memoizedProps}catch(ie){We($,$.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:oi(n,t),li(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:oi(n,t),li(t)}}function li(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(Vp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var x=s.stateNode;s.flags&32&&(br(x,""),s.flags&=-33);var w=Iu(t);_l(t,w,x);break;case 3:case 4:var B=s.stateNode.containerInfo,$=Iu(t);Hu(t,$,B);break;default:throw Error(r(161))}}}catch(xt){We(t,t.return,xt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Kp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Kp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Vr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ip(n,n.return,a),Vr(n);break;case 26:case 27:case 5:qn(n,n.return),Vr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function Ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(c,f,a),oo(4,f);break;case 1:if(Ma(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){We(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)zp(B[c],w)}catch($){We(s,s.return,$)}}a&&x&64&&Fp(f),rr(f,f.return);break;case 26:case 27:case 5:Ma(c,f,a),a&&s===null&&x&4&&Hp(f),rr(f,f.return);break;case 12:Ma(c,f,a);break;case 13:Ma(c,f,a),a&&x&4&&jp(c,f);break;case 22:f.memoizedState===null&&Ma(c,f,a),rr(f,f.return);break;default:Ma(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function Ea(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qp(t,n,a,s),n=n.sibling}function Qp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ea(t,n,a,s),c&2048&&oo(9,n);break;case 3:Ea(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){Ea(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){We(n,n.return,B)}}else Ea(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ea(t,n,a,s):lo(t,n):f._visibility&4?Ea(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ea(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ea(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,w=a,B=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:kr(f,x,w,B,c),oo(8,x);break;case 23:break;case 22:var xt=x.stateNode;x.memoizedState!==null?xt._visibility&4?kr(f,x,w,B,c):lo(f,x):(xt._visibility|=4,kr(f,x,w,B,c)),c&&$&2048&&ku(x.alternate,x);break;case 24:kr(f,x,w,B,c),c&&$&2048&&Wu(x.alternate,x);break;default:kr(f,x,w,B,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&ku(s.alternate,s);break;case 24:lo(a,s),c&2048&&Wu(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Wr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)Jp(t),t=t.sibling}function Jp(t){switch(t.tag){case 26:Wr(t),t.flags&co&&t.memoizedState!==null&&vy(yi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=yi;yi=Ul(t.stateNode.containerInfo),Wr(t),yi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Wr(t),co=n):Wr(t));break;default:Wr(t)}}function $p(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,em(s,t)}$p(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tm(t),t=t.sibling}function tm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):uo(t);break;default:uo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,em(s,t)}$p(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function em(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(qp(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,s){return new Lv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ta(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Xu(t)&&(x=1);else if(typeof t=="string")x=gy(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return sr(a.children,c,f,n);case m:x=8,c|=24;break;case g:return t=ci(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case R:return t=ci(13,a,n,c),t.elementType=R,t.lanes=f,t;case v:return t=ci(19,a,n,c),t.elementType=v,t.lanes=f,t;case D:return im(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case M:x=10;break t;case S:x=9;break t;case A:x=11;break t;case _:x=14;break t;case P:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ci(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=ci(7,t,s,n),t.lanes=a,t}function im(t,n,a,s){t=ci(22,t,s,n),t.elementType=D,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var x=da(f,2);x!==null&&(c._pendingVisibility|=2,Pn(x,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var x=da(f,2);x!==null&&(c._pendingVisibility&=-3,Pn(x,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Zi(t){t.flags|=4}function am(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Vm(n)){if(n=si.current,n!==null&&((De&4194176)===De?Di!==null:(De&62914560)!==De&&!(De&536870912)||n!==Di))throw js=Jc,Sh;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,qr|=n)}function fo(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(hn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vi!==null&&(ef(vi),vi=null))),Je(n),null;case 26:return a=n.memoizedState,t===null?(Zi(n),a!==null?(Je(n),am(n,a)):(Je(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Zi(n),Je(n),am(n,a)):(Je(n),n.flags&=-16777217):(t.memoizedProps!==s&&Zi(n),Je(n),n.flags&=-16777217),null;case 27:ce(n),a=Oe.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}t=ae.current,Ws(n)?yh(n):(t=Om(c,s,a),n.stateNode=t,Zi(n))}return Je(n),null;case 5:if(ce(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(t=ae.current,Ws(n))yh(n);else{switch(c=Ll(Oe.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[qe]=n,t[tn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Zi(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Oe.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=On,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[qe]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rm(t.nodeValue,a)),t||Ka(n)}else t=Ll(t).createTextNode(s),t[qe]=n,n.stateNode=t}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[qe]=n}else Xs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else vi!==null&&(ef(vi),vi=null),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Je(n),null;case 4:return Zt(),t===null&&hf(n.stateNode.containerInfo),Je(n),null;case 10:return Xi(n.type),Je(n),null;case 19:if(Gt(dn),c=n.memoizedState,c===null)return Je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)fo(c,!1);else{if(nn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,fo(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return Kt(dn,dn.current&1|2),n.child}t=t.sibling}c.tail!==null&&X()>Sl&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return Je(n),null}else 2*X()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=X(),n.sibling=null,t=dn.current,Kt(dn,s?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return Gi(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Gt(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(hn),Je(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(hn),Zt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 13:if(Gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Gt(dn),null;case 4:return Zt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Gi(n),tu(),t!==null&&Gt(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(hn),null;case 25:return null;default:return null}}function rm(t,n){switch(Kc(n),n.tag){case 3:Xi(hn),Zt();break;case 26:case 27:case 5:ce(n);break;case 4:Zt();break;case 13:Gi(n);break;case 19:Gt(dn);break;case 10:Xi(n.type);break;case 22:case 23:Gi(n),tu(),t!==null&&Gt(Ja);break;case 24:Xi(hn)}}var Ov={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,$e=0,Ye=null,Ee=null,De=0,je=0,jn=null,Ki=!1,Xr=!1,ju=!1,Qi=0,nn=0,ba=0,or=0,Zu=0,ui=0,qr=0,ho=null,Ui=null,Ku=!1,Qu=0,Sl=1/0,Ml=null,Aa=null,El=!1,lr=null,po=0,Ju=0,$u=null,mo=0,tf=null;function Zn(){if($e&2&&De!==0)return De&-De;if(z.T!==null){var t=Br;return t!==0?t:cf()}return ti()}function sm(){ui===0&&(ui=!(De&536870912)||Ue?fe():536870912);var t=si.current;return t!==null&&(t.flags|=32),ui}function Pn(t,n,a){(t===Ye&&je===2||t.cancelPendingCommit!==null)&&(Yr(t,0),Ji(t,De,ui,!1)),oe(t,a),(!($e&2)||t!==Ye)&&(t===Ye&&(!($e&2)&&(or|=a),nn===4&&Ji(t,De,ui,!1)),Ni(t))}function om(t,n,a){if($e&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||Jt(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&Ji(t,n,0,!1);break}else if(c===6)Ji(t,n,0,!Ki);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var w=t;c=ho;var B=w.current.memoizedState.isDehydrated;if(B&&(Yr(w,x).flags|=256),x=rf(w,x,!1),x!==2){if(ju&&!B){w.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=Ui,Ui=c,f!==null&&ef(f)}c=x}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Ji(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ji(s,n,ui,!Ki);break t}break;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-X(),10<f)){if(Ji(s,n,ui,!Ki),jt(s,0)!==0)break t;s.timeoutHandle=Lm(lm.bind(null,s,a,Ui,Ml,Ku,n,ui,or,qr,Ki,2,-0,0),f);break t}lm(s,a,Ui,Ml,Ku,n,ui,or,qr,Ki,0,-0,0)}}break}while(!0);Ni(t)}function ef(t){Ui===null?Ui=t:Ui.push.apply(Ui,t)}function lm(t,n,a,s,c,f,x,w,B,$,xt,Ct,ut){var yt=n.subtreeFlags;if((yt&8192||(yt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:_y},Jp(n),n=yy(),n!==null)){t.cancelPendingCommit=n(mm.bind(null,t,a,s,c,x,w,B,1,Ct,ut)),Ji(t,f,x,!$);return}mm(t,a,s,c,x,w,B,xt,Ct,ut)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ji(t,n,a,s){n&=~Zu,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-O(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Pe(t,a,n)}function Tl(){return $e&6?!0:(go(0),!1)}function nf(){if(Ee!==null){if(je===0)var t=Ee.return;else t=Ee,Wi=ir=null,lu(t),Pr=null,Zs=0,t=Ee;for(;t!==null;)rm(t.alternate,t),t=t.return;Ee=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ye=t,Ee=a=Ta(t.current,null),De=n,je=0,jn=null,Ki=!1,Xr=Jt(t,n),ju=!1,qr=ui=Zu=or=ba=nn=0,Ui=ho=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-O(s),f=1<<c;n|=t[c],s&=~f}return Qi=n,jo(),a}function cm(t,n){xe=null,z.H=Li,n===Ys?(n=Th(),je=3):n===Sh?(n=Th(),je=4):je=n===Mp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,Ee===null&&(nn=1,pl(t,ii(n,t.current)))}function um(){var t=z.H;return z.H=Li,t===null?Li:t}function fm(){var t=z.A;return z.A=Ov,t}function af(){nn=4,Ki||(De&4194176)!==De&&si.current!==null||(Xr=!0),!(ba&134217727)&&!(or&134217727)||Ye===null||Ji(Ye,De,ui,!1)}function rf(t,n,a){var s=$e;$e|=2;var c=um(),f=fm();(Ye!==t||De!==n)&&(Ml=null,Yr(t,n)),n=!1;var x=nn;t:do try{if(je!==0&&Ee!==null){var w=Ee,B=jn;switch(je){case 8:nf(),x=6;break t;case 3:case 2:case 6:si.current===null&&(n=!0);var $=je;if(je=0,jn=null,jr(t,w,B,$),a&&Xr){x=0;break t}break;default:$=je,je=0,jn=null,jr(t,w,B,$)}}Bv(),x=nn;break}catch(xt){cm(t,xt)}while(!0);return n&&t.shellSuspendCounter++,Wi=ir=null,$e=s,z.H=c,z.A=f,Ee===null&&(Ye=null,De=0,jo()),x}function Bv(){for(;Ee!==null;)dm(Ee)}function Fv(t,n){var a=$e;$e|=2;var s=um(),c=fm();Ye!==t||De!==n?(Ml=null,Sl=X()+500,Yr(t,n)):Xr=Jt(t,n);t:do try{if(je!==0&&Ee!==null){n=Ee;var f=jn;e:switch(je){case 1:je=0,jn=null,jr(t,n,f,1);break;case 2:if(Mh(f)){je=0,jn=null,hm(n);break}n=function(){je===2&&Ye===t&&(je=7),Ni(t)},f.then(n,n);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:Mh(f)?(je=0,jn=null,hm(n)):(je=0,jn=null,jr(t,n,f,7));break;case 5:var x=null;switch(Ee.tag){case 26:x=Ee.memoizedState;case 5:case 27:var w=Ee;if(!x||Vm(x)){je=0,jn=null;var B=w.sibling;if(B!==null)Ee=B;else{var $=w.return;$!==null?(Ee=$,bl($)):Ee=null}break e}}je=0,jn=null,jr(t,n,f,5);break;case 6:je=0,jn=null,jr(t,n,f,6);break;case 8:nf(),nn=6;break t;default:throw Error(r(462))}}Iv();break}catch(xt){cm(t,xt)}while(!0);return Wi=ir=null,z.H=s,z.A=c,$e=a,Ee!==null?0:(Ye=null,De=0,jo(),nn)}function Iv(){for(;Ee!==null&&!Pt();)dm(Ee)}function dm(t){var n=Op(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?bl(t):Ee=n}function hm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rp(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=Rp(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:lu(n);default:rm(a,n),n=Ee=nm(n,Qi),n=Op(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?bl(t):Ee=n}function jr(t,n,a,s){Wi=ir=null,lu(n),Pr=null,Zs=0;var c=n.return;try{if(wv(t,c,n,a,De)){nn=1,pl(t,ii(a,t.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;nn=1,pl(t,ii(a,t.current)),Ee=null;return}n.flags&32768?(Ue||s===1?t=!0:Xr||De&536870912?t=!1:(Ki=t=!0,(s===2||s===3||s===6)&&(s=si.current,s!==null&&s.tag===13&&(s.flags|=16384))),pm(n,t)):bl(n)}function bl(t){var n=t;do{if(n.flags&32768){pm(n,Ki);return}t=n.return;var a=Uv(n.alternate,n,Qi);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);nn===0&&(nn=5)}function pm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);nn=6,Ee=null}function mm(t,n,a,s,c,f,x,w,B,$){var xt=z.T,Ct=j.p;try{j.p=2,z.T=null,Hv(t,n,a,s,Ct,c,f,x,w,B,$)}finally{z.T=xt,j.p=Ct}}function Hv(t,n,a,s,c,f,x,w){do Zr();while(lr!==null);if($e&6)throw Error(r(327));var B=t.finishedWork;if(s=t.finishedLanes,B===null)return null;if(t.finishedWork=null,t.finishedLanes=0,B===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var $=B.lanes|B.childLanes;if($|=Yc,we(t,s,$,f,x,w),t===Ye&&(Ee=Ye=null,De=0),!(B.subtreeFlags&10256)&&!(B.flags&10256)||El||(El=!0,Ju=$,$u=a,Wv(ft,function(){return Zr(),null})),a=(B.flags&15990)!==0,B.subtreeFlags&15990||a?(a=z.T,z.T=null,f=j.p,j.p=2,x=$e,$e|=4,Cv(t,B),Zp(B,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=B,Xp(t,B.alternate,B),Rt(),$e=x,j.p=f,z.T=a):t.current=B,El?(El=!1,lr=t,po=s):gm(t,$),$=t.pendingLanes,$===0&&(Aa=null),kt(B.stateNode),Ni(t),n!==null)for(c=t.onRecoverableError,B=0;B<n.length;B++)$=n[B],c($.value,{componentStack:$.stack});return po&3&&Zr(),$=t.pendingLanes,s&4194218&&$&42?t===tf?mo++:(mo=0,tf=t):mo=0,go(0),null}function gm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Zr(){if(lr!==null){var t=lr,n=Ju;Ju=0;var a=Ai(po),s=z.T,c=j.p;try{if(j.p=32>a?32:a,z.T=null,lr===null)var f=!1;else{a=$u,$u=null;var x=lr,w=po;if(lr=null,po=0,$e&6)throw Error(r(331));var B=$e;if($e|=4,tm(x.current),Qp(x,x.current,w,a),$e=B,go(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Lt,x)}catch{}f=!0}return f}finally{j.p=c,z.T=s,gm(t,n)}}return!1}function _m(t,n,a){n=ii(a,n),n=Mu(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(oe(t,2),Ni(t))}function We(t,n,a){if(t.tag===3)_m(t,t,a);else for(;n!==null;){if(n.tag===3){_m(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))){t=ii(a,t),a=xp(2),s=xa(n,a,2),s!==null&&(Sp(a,s,n,t),oe(s,2),Ni(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(De&a)===a&&(nn===4||nn===3&&(De&62914560)===De&&300>X()-Qu?!($e&2)&&Yr(t,0):Zu|=a,qr===De&&(qr=0)),Ni(t)}function vm(t,n){n===0&&(n=Ae()),t=da(t,n),t!==null&&(oe(t,n),Ni(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vm(t,a)}function Wv(t,n){return b(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,cr=0;function Ni(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Xv))}function go(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-O(42|t)+1)-1,f&=c&~(x&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Sm(s,f))}else f=De,f=jt(s,s===Ye?f:0),!(f&3)||Jt(s,f)||(a=!0,Sm(s,f));s=s.next}while(a);lf=!1}}function Xv(){wl=of=!1;var t=0;cr!==0&&(ty()&&(t=cr),cr=0);for(var n=X(),a=null,s=Al;s!==null;){var c=s.next,f=ym(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}go(t)}function ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-O(f),w=1<<x,B=c[x];B===-1?(!(w&a)||w&s)&&(c[x]=ye(w,n)):B<=n&&(t.expiredLanes|=w),f&=~w}if(n=Ye,a=De,a=jt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&je===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&it(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&it(s),Ai(a)){case 2:case 8:a=dt;break;case 32:a=ft;break;case 268435456:a=rt;break;default:a=ft}return s=xm.bind(null,t),a=b(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&it(s),t.callbackPriority=2,t.callbackNode=null,2}function xm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=De;return s=jt(t,t===Ye?s:0),s===0?null:(om(t,s,n),ym(t,X()),t.callbackNode!=null&&t.callbackNode===a?xm.bind(null,t):null)}function Sm(t,n){if(Zr())return null;om(t,n,!0)}function qv(t){ny(function(){$e&6?b(ot,t):t()})}function cf(){return cr===0&&(cr=fe()),cr}function Mm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Em(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Mm((c[tn]||null).action),x=s.submitter;x&&(n=(n=x[tn]||null)?Mm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var w=new Xo("action","action",null,s,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var B=x?Em(c,x):new FormData(c);_u(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(w.preventDefault(),B=x?Em(c,x):new FormData(c),_u(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var uf=0;uf<mh.length;uf++){var ff=mh[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);_i(jv,"on"+Zv)}_i(uh,"onAnimationEnd"),_i(fh,"onAnimationIteration"),_i(dh,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(dv,"onTransitionRun"),_i(hv,"onTransitionStart"),_i(pv,"onTransitionCancel"),_i(hh,"onTransitionEnd"),Re("onMouseEnter",["mouseout","mouseover"]),Re("onMouseLeave",["mouseout","mouseover"]),Re("onPointerEnter",["pointerout","pointerover"]),Re("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Tm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var w=s[x],B=w.instance,$=w.currentTarget;if(w=w.listener,B!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(xt){hl(xt)}c.currentTarget=null,f=B}else for(x=0;x<s.length;x++){if(w=s[x],B=w.instance,$=w.currentTarget,w=w.listener,B!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(xt){hl(xt)}c.currentTarget=null,f=B}}}}function Ce(t,n){var a=n[It];a===void 0&&(a=n[It]=new Set);var s=t+"__bubble";a.has(s)||(bm(n,t,2,!1),a.add(s))}function df(t,n,a){var s=0;n&&(s|=4),bm(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Rl]){t[Rl]=!0,ee.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,df("selectionchange",!1,n))}}function bm(t,n,a,s){switch(jm(n)){case 2:var c=My;break;case 8:c=Ey;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(x===4)for(x=s.return;x!==null;){var B=x.tag;if((B===3||B===4)&&(B=x.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;x=x.return}for(;w!==null;){if(x=Y(w),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){s=f=x;continue t}w=w.parentNode}}s=s.return}Hd(function(){var $=f,xt=Uc(a),Ct=[];t:{var ut=ph.get(t);if(ut!==void 0){var yt=Xo,ie=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":yt=k0;break;case"focusin":ie="focus",yt=Fc;break;case"focusout":ie="blur",yt=Fc;break;case"beforeblur":case"afterblur":yt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":yt=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":yt=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":yt=q0;break;case uh:case fh:case dh:yt=O0;break;case hh:yt=j0;break;case"scroll":case"scrollend":yt=C0;break;case"wheel":yt=K0;break;case"copy":case"cut":case"paste":yt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":yt=Xd;break;case"toggle":case"beforetoggle":yt=J0}var me=(n&4)!==0,an=!me&&(t==="scroll"||t==="scrollend"),tt=me?ut!==null?ut+"Capture":null:ut;me=[];for(var K=$,st;K!==null;){var Et=K;if(st=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||st===null||tt===null||(Et=Ps(K,tt),Et!=null&&me.push(vo(K,Et,st))),an)break;K=K.return}0<me.length&&(ut=new yt(ut,ie,null,a,xt),Ct.push({event:ut,listeners:me}))}}if(!(n&7)){t:{if(ut=t==="mouseover"||t==="pointerover",yt=t==="mouseout"||t==="pointerout",ut&&a!==Lc&&(ie=a.relatedTarget||a.fromElement)&&(Y(ie)||ie[ei]))break t;if((yt||ut)&&(ut=xt.window===xt?xt:(ut=xt.ownerDocument)?ut.defaultView||ut.parentWindow:window,yt?(ie=a.relatedTarget||a.toElement,yt=$,ie=ie?Y(ie):null,ie!==null&&(an=at(ie),me=ie.tag,ie!==an||me!==5&&me!==27&&me!==6)&&(ie=null)):(yt=null,ie=$),yt!==ie)){if(me=kd,Et="onMouseLeave",tt="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(me=Xd,Et="onPointerLeave",tt="onPointerEnter",K="pointer"),an=yt==null?ut:Ot(yt),st=ie==null?ut:Ot(ie),ut=new me(Et,K+"leave",yt,a,xt),ut.target=an,ut.relatedTarget=st,Et=null,Y(xt)===$&&(me=new me(tt,K+"enter",ie,a,xt),me.target=st,me.relatedTarget=an,Et=me),an=Et,yt&&ie)e:{for(me=yt,tt=ie,K=0,st=me;st;st=Qr(st))K++;for(st=0,Et=tt;Et;Et=Qr(Et))st++;for(;0<K-st;)me=Qr(me),K--;for(;0<st-K;)tt=Qr(tt),st--;for(;K--;){if(me===tt||tt!==null&&me===tt.alternate)break e;me=Qr(me),tt=Qr(tt)}me=null}else me=null;yt!==null&&Am(Ct,ut,yt,me,!1),ie!==null&&an!==null&&Am(Ct,an,ie,me,!0)}}t:{if(ut=$?Ot($):window,yt=ut.nodeName&&ut.nodeName.toLowerCase(),yt==="select"||yt==="input"&&ut.type==="file")var Qt=$d;else if(Qd(ut))if(th)Qt=lv;else{Qt=sv;var Se=rv}else yt=ut.nodeName,!yt||yt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?$&&Dc($.elementType)&&(Qt=$d):Qt=ov;if(Qt&&(Qt=Qt(t,$))){Jd(Ct,Qt,a,xt);break t}Se&&Se(t,ut,$),t==="focusout"&&$&&ut.type==="number"&&$.memoizedProps.value!=null&&Cc(ut,"number",ut.value)}switch(Se=$?Ot($):window,t){case"focusin":(Qd(Se)||Se.contentEditable==="true")&&(Cr=Se,Wc=$,ks=null);break;case"focusout":ks=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,lh(Ct,a,xt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":lh(Ct,a,xt)}var re;if(Hc)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Rr?Zd(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(qd&&a.locale!=="ko"&&(Rr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Rr&&(re=Gd()):(fa=xt,Pc="value"in fa?fa.value:fa.textContent,Rr=!0)),Se=Cl($,ue),0<Se.length&&(ue=new Wd(ue,t,null,a,xt),Ct.push({event:ue,listeners:Se}),re?ue.data=re:(re=Kd(a),re!==null&&(ue.data=re)))),(re=tv?ev(t,a):nv(t,a))&&(ue=Cl($,"onBeforeInput"),0<ue.length&&(Se=new Wd("onBeforeInput","beforeinput",null,a,xt),Ct.push({event:Se,listeners:ue}),Se.data=re)),Yv(Ct,t,$,a,xt)}Tm(Ct,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&s.unshift(vo(t,c,f)),c=Ps(t,n),c!=null&&s.push(vo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Am(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var w=a,B=w.alternate,$=w.stateNode;if(w=w.tag,B!==null&&B===s)break;w!==5&&w!==26&&w!==27||$===null||(B=$,c?($=Ps(a,f),$!=null&&x.unshift(vo(a,$,B))):c||($=Ps(a,f),$!=null&&x.push(vo(a,$,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Rm(t,n){return n=wm(n),wm(t)===n}function Dl(){}function Ge(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(t,""+s);break;case"className":Be(t,"class",s);break;case"tabIndex":Be(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(t,a,s);break;case"style":Fd(t,s,f);break;case"data":if(n!=="object"){Be(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&Ce("scroll",t);break;case"onScrollEnd":s!=null&&Ce("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),wi(t,"popover",s);break;case"xlinkActuate":gn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wi(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,wi(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Fd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?br(t,s):(typeof s=="number"||typeof s=="bigint")&&br(t,""+s);break;case"onScroll":s!=null&&Ce("scroll",t);break;case"onScrollEnd":s!=null&&Ce("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):wi(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,x,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var w=f=x=c=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var xt=a[s];if(xt!=null)switch(s){case"name":c=xt;break;case"type":x=xt;break;case"checked":B=xt;break;case"defaultChecked":$=xt;break;case"value":f=xt;break;case"defaultValue":w=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:Ge(t,n,s,xt,a,null)}}Os(t,f,w,B,$,x,c,!1),rn(t);return;case"select":Ce("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":s=w;default:Ge(t,n,c,w,a,null)}n=f,a=x,t.multiple=!!s,n!=null?Tr(t,!!s,n,!1):a!=null&&Tr(t,!!s,a,!0);return;case"textarea":Ce("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ge(t,n,x,w,a,null)}zd(t,s,c,f),rn(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ge(t,n,B,s,a,null)}return;case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(s=0;s<_o.length;s++)Ce(_o[s],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,$,s,a,null)}return;default:if(Dc(n)){for(xt in a)a.hasOwnProperty(xt)&&(s=a[xt],s!==void 0&&mf(t,n,xt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Ge(t,n,w,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,w=null,B=null,$=null,xt=null;for(yt in a){var Ct=a[yt];if(a.hasOwnProperty(yt)&&Ct!=null)switch(yt){case"checked":break;case"value":break;case"defaultValue":B=Ct;default:s.hasOwnProperty(yt)||Ge(t,n,yt,null,s,Ct)}}for(var ut in s){var yt=s[ut];if(Ct=a[ut],s.hasOwnProperty(ut)&&(yt!=null||Ct!=null))switch(ut){case"type":f=yt;break;case"name":c=yt;break;case"checked":$=yt;break;case"defaultChecked":xt=yt;break;case"value":x=yt;break;case"defaultValue":w=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(r(137,n));break;default:yt!==Ct&&Ge(t,n,ut,yt,s,Ct)}}Ns(t,x,w,B,$,xt,f,c);return;case"select":yt=x=w=ut=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":yt=B;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ut=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==B&&Ge(t,n,c,f,s,B)}n=w,a=x,s=yt,ut!=null?Tr(t,!!a,ut,!1):!!s!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":yt=ut=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ge(t,n,w,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":ut=c;break;case"defaultValue":yt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(t,n,x,c,s,f)}Pd(t,ut,yt);return;case"option":for(var ie in a)if(ut=a[ie],a.hasOwnProperty(ie)&&ut!=null&&!s.hasOwnProperty(ie))switch(ie){case"selected":t.selected=!1;break;default:Ge(t,n,ie,null,s,ut)}for(B in s)if(ut=s[B],yt=a[B],s.hasOwnProperty(B)&&ut!==yt&&(ut!=null||yt!=null))switch(B){case"selected":t.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Ge(t,n,B,ut,s,yt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)ut=a[me],a.hasOwnProperty(me)&&ut!=null&&!s.hasOwnProperty(me)&&Ge(t,n,me,null,s,ut);for($ in s)if(ut=s[$],yt=a[$],s.hasOwnProperty($)&&ut!==yt&&(ut!=null||yt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ge(t,n,$,ut,s,yt)}return;default:if(Dc(n)){for(var an in a)ut=a[an],a.hasOwnProperty(an)&&ut!==void 0&&!s.hasOwnProperty(an)&&mf(t,n,an,void 0,s,ut);for(xt in s)ut=s[xt],yt=a[xt],!s.hasOwnProperty(xt)||ut===yt||ut===void 0&&yt===void 0||mf(t,n,xt,ut,s,yt);return}}for(var tt in a)ut=a[tt],a.hasOwnProperty(tt)&&ut!=null&&!s.hasOwnProperty(tt)&&Ge(t,n,tt,null,s,ut);for(Ct in s)ut=s[Ct],yt=a[Ct],!s.hasOwnProperty(Ct)||ut===yt||ut==null&&yt==null||Ge(t,n,Ct,ut,s,yt)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Cm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function ty(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Lm=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(iy)}:Lm;function iy(t){setTimeout(function(){throw t})}function xf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),Ao(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);Ao(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),k(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[G])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Nm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Om(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var fi=new Map,Pm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var $i=j.d;j.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:hy,S:dy,M:py};function sy(){var t=$i.f(),n=Tl();return t||n}function oy(t){var n=St(t);n!==null&&n.tag===5&&n.type==="form"?lp(n):$i.r(t)}var Jr=typeof document>"u"?null:document;function zm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pm.has(c)||(Pm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),Vt(n),s.head.appendChild(n)))}}function ly(t){$i.D(t),zm("dns-prefetch",t,null)}function cy(t,n){$i.C(t,n),zm("preconnect",t,n)}function uy(t,n,a){$i.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}fi.has(f)||(t=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),Tn(n,"link",t),Vt(n),s.head.appendChild(n)))}}function fy(t,n){$i.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!fi.has(f)&&(t=E({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),Tn(s,"link",t),Vt(s),a.head.appendChild(s)}}}function dy(t,n,a){$i.S(t,n,a);var s=Jr;if(s&&t){var c=Bt(s).hoistableStyles,f=$r(t);n=n||"default";var x=c.get(f);if(!x){var w={loading:0,preload:null};if(x=s.querySelector(yo(f)))w.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Mf(t,a);var B=x=s.createElement("link");Vt(B),Tn(B,"link",t),B._p=new Promise(function($,xt){B.onload=$,B.onerror=xt}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:w},c.set(f,x)}}}function hy(t,n){$i.X(t,n);var a=Jr;if(a&&t){var s=Bt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=E({src:t,async:!0},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Vt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function py(t,n){$i.M(t,n);var a=Jr;if(a&&t){var s=Bt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=E({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Vt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=Oe.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=Bt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=Bt(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(yo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||my(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=Bt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Fm(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Vt(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function xo(t){return"script[async]"+t}function Im(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Vt(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Vt(s),Tn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,Vt(f),f;s=Fm(a),(c=fi.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),Vt(f);var x=f;return x._p=new Promise(function(w,B){x.onload=w,x.onerror=B}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,Vt(c),c):(s=a,(c=fi.get(f))&&(s=E({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Vt(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var w=s[x];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Hm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[G]||f[qe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var w=s.get(x);w?w.push(f):s.set(x,[f])}}return s}function Gm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vm(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var So=null;function _y(){}function vy(t,n,a){if(So===null)throw Error(r(475));var s=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(yo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Vt(f);return}f=t.ownerDocument||t,a=Fm(a),(c=fi.get(c))&&Mf(a,c),f=f.createElement("link"),Vt(f);var x=f;x._p=new Promise(function(w,B){x.onload=w,x.onerror=B}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yy(){if(So===null)throw Error(r(475));var t=So;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(xy,t),zl=null,Pl.call(t))}function xy(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function Sy(t,n,a,s,c,f,x,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function km(t,n,a,s,c,f,x,w,B,$,xt,Ct){return t=new Sy(t,n,a,x,w,B,$,Ct),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Wm(t){return t?(t=Ur,t):Ur}function Xm(t,n,a,s,c,f){c=Wm(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(t,s,n),a!==null&&(Pn(a,t,n),ao(a,t,n))}function qm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){qm(t,n),(t=t.alternate)&&qm(t,n)}function Ym(t){if(t.tag===13){var n=da(t,67108864);n!==null&&Pn(n,t,67108864),bf(t,67108864)}}var Bl=!0;function My(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=2,Af(t,n,a,s)}finally{j.p=f,z.T=c}}function Ey(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=8,Af(t,n,a,s)}finally{j.p=f,z.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Zm(t,s);else if(by(c,t,n,a,s))s.stopPropagation();else if(Zm(t,s),n&4&&-1<Ty.indexOf(t)){for(;c!==null;){var f=St(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Tt(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var B=1<<31-O(x);w.entanglements[1]|=B,x&=~B}Ni(f),!($e&6)&&(Sl=X()+500,go(0))}}break;case 13:w=da(f,2),w!==null&&Pn(w,f,2),Tl(),bf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=Y(t),t!==null){var n=at(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ht(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function jm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case ot:return 2;case dt:return 8;case ft:case Mt:return 32;case rt:return 268435456;default:return 32}default:return 32}}var Cf=!1,wa=null,Ra=null,Ca=null,Eo=new Map,To=new Map,Da=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=St(n),n!==null&&Ym(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function by(t,n,a,s,c){switch(n){case"focusin":return wa=bo(wa,t,n,a,s,c),!0;case"dragenter":return Ra=bo(Ra,t,n,a,s,c),!0;case"mouseover":return Ca=bo(Ca,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,t,n,a,s,c)),!0}return!1}function Km(t){var n=Y(t.target);if(n!==null){var a=at(n);if(a!==null){if(n=a.tag,n===13){if(n=ht(a),n!==null){t.blockedOn=n,ge(t.priority,function(){if(a.tag===13){var s=Zn(),c=da(a,s);c!==null&&Pn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=St(a),n!==null&&Ym(n),t.blockedOn=a,!1;n.shift()}return!0}function Qm(t,n,a){Il(t)&&a.delete(n)}function Ay(){Cf=!1,wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),Ca!==null&&Il(Ca)&&(Ca=null),Eo.forEach(Qm),To.forEach(Qm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ay)))}var Gl=null;function Jm(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=St(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(t){function n(B){return Hl(B,t)}wa!==null&&Hl(wa,t),Ra!==null&&Hl(Ra,t),Ca!==null&&Hl(Ca,t),Eo.forEach(n),To.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Km(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[tn]||null;if(typeof f=="function")x||Jm(a);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[tn]||null)w=x.formAction;else if(Rf(c)!==null)continue}else w=x.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),Jm(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Xm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),Xm(t.current,2,null,t,null,null),Tl(),n[ei]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ti();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&Km(t)}};var $m=e.version;if($m!=="19.0.0")throw Error(r(527,$m,"19.0.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Q(n),t=t!==null?mt(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:z,findFiberByHostInstance:Y,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Lt=kl.inject(wy),Ft=kl}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gp,f=_p,x=vp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=km(t,1,!1,null,null,a,s,c,f,x,w,null),t[ei]=n.current,hf(t.nodeType===8?t.parentNode:t),new Df(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=gp,x=_p,w=vp,B=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=km(t,1,!0,n,a??null,s,c,f,x,w,B,$),n.context=Wm(null),a=n.current,s=Zn(),c=ya(s),c.callback=null,xa(a,c,s),n.current.lanes=s,oe(n,s),Ni(n),t[ei]=n.current,hf(t),new Vl(n)},Ro.version="19.0.0",Ro}var cg;function By(){if(cg)return Nf.exports;cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zy(),Nf.exports}var Fy=By();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,ug=1,Hy=2,k_=1,W_=2,ra=3,Wa=0,kn=1,Pi=2,Ha=0,Es=1,md=2,fg=3,dg=4,Gy=5,mr=100,Vy=101,ky=102,hg=103,pg=104,Wy=200,Xy=201,qy=202,Yy=203,gd=204,_d=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tx=212,ex=213,nx=214,ix=0,ax=1,rx=2,mc=3,sx=4,ox=5,lx=6,cx=7,X_=0,ux=1,fx=2,Ga=0,dx=1,hx=2,px=3,mx=4,gx=5,_x=6,q_=300,As=301,ws=302,vd=303,yd=304,Ec=306,xd=1e3,Ti=1001,Sd=1002,Fn=1003,mg=1004,Co=1005,Vn=1006,Bf=1007,_r=1008,Va=1009,vx=1010,yx=1011,Rd=1012,Y_=1013,Ia=1014,sa=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,xx=1021,bi=1023,Sx=1024,Mx=1025,yr=1026,Rs=1027,Ex=1028,K_=1029,Tx=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,gg=35840,_g=35841,vg=35842,yg=35843,$_=36196,xg=37492,Sg=37496,Mg=37808,Eg=37809,Tg=37810,bg=37811,Ag=37812,wg=37813,Rg=37814,Cg=37815,Dg=37816,Lg=37817,Ug=37818,Ng=37819,Og=37820,Pg=37821,Vf=36492,zg=36494,Bg=36495,bx=36283,Fg=36284,Ig=36285,Hg=36286,t0=3e3,xr=3001,Ax=3200,wx=3201,e0=0,Rx=1,hi="",bn="srgb",la="srgb-linear",Cd="display-p3",Tc="display-p3-linear",gc="linear",Ze="srgb",_c="rec709",vc="p3",is=7680,Gg=519,Cx=512,Dx=513,Lx=514,n0=515,Ux=516,Nx=517,Ox=518,Px=519,Vg=35044,kg="300 es",Md=1035,oa=2e3,yc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function Dd(o,e){return(o%e+e)%e}function zx(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function Bx(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function Fx(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function Ix(o,e=1){return e-Math.abs(Dd(o,e*2)-e)}function Hx(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Gx(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Vx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kx(o,e){return o+Math.random()*(e-o)}function Wx(o){return o*(.5-Math.random())}function Xx(o){o!==void 0&&(Wg=o);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qx(o){return o*zo}function Yx(o){return o*Io}function Ed(o){return(o&o-1)===0&&o!==0}function jx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function xc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zx(o,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((e+r)/2),g=h((e+r)/2),y=u((e-r)/2),S=h((e-r)/2),M=u((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":o.set(d*g,p*y,p*S,d*m);break;case"YZY":o.set(p*S,d*g,p*y,d*m);break;case"ZXZ":o.set(p*y,p*S,d*g,d*m);break;case"XZX":o.set(d*g,p*A,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*A,d*m);break;case"ZYZ":o.set(p*A,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const xs={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Nn,euclideanModulo:Dd,mapLinear:zx,inverseLerp:Bx,lerp:Bo,damp:Fx,pingpong:Ix,smoothstep:Hx,smootherstep:Gx,randInt:Vx,randFloat:kx,randFloatSpread:Wx,seededRandom:Xx,degToRad:qx,radToDeg:Yx,isPowerOfTwo:Ed,ceilPowerOfTwo:jx,floorPowerOfTwo:xc,setQuaternionFromProperEuler:Zx,normalize:zn,denormalize:ys};class pe{constructor(e=0,i=0){pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(e,i,r,l,u,h,d,p,m){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],y=r[7],S=r[2],M=r[5],A=r[8],R=l[0],v=l[3],_=l[6],P=l[1],D=l[4],F=l[7],q=l[2],W=l[5],I=l[8];return u[0]=h*R+d*P+p*q,u[3]=h*v+d*D+p*W,u[6]=h*_+d*F+p*I,u[1]=m*R+g*P+y*q,u[4]=m*v+g*D+y*W,u[7]=m*_+g*F+y*I,u[2]=S*R+M*P+A*q,u[5]=S*v+M*D+A*W,u[8]=S*_+M*F+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=g*h-d*m,S=d*p-g*u,M=m*u-h*p,A=i*y+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(l*m-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Me;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Kx(){const o=Sc("canvas");return o.style.display="block",o}const Xg={};function Ts(o){o in Xg||(Xg[o]=!0,console.warn(o))}const qg=new Me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yg=new Me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[la]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[bn]:{transfer:Ze,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Tc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(Yg),fromReference:o=>o.applyMatrix3(qg)},[Cd]:{transfer:Ze,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Yg),fromReference:o=>o.applyMatrix3(qg).convertLinearToSRGB()}},Qx=new Set([la,Tc]),Ve={enabled:!0,_workingColorSpace:la,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qx.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===hi?gc:Wl[o].transfer}};function bs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Sc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Sc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=bs(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(bs(i[r]/255)*255):i[r]=bs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jx=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $x=0;class Wn extends Er{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,r=Ti,l=Ti,u=Vn,h=_r,d=bi,p=Va,m=Wn.DEFAULT_ANISOTROPY,g=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===xr?bn:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?xr:t0}set encoding(e){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?bn:hi}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=q_;Wn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],y=p[8],S=p[1],M=p[5],A=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(y-R)<.01&&Math.abs(A-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+R)<.1&&Math.abs(A+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,F=(M+1)/2,q=(_+1)/2,W=(g+S)/4,I=(y+R)/4,vt=(A+v)/4;return D>F&&D>q?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=W/r,u=I/r):F>q?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=W/l,u=vt/l):q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),r=I/u,l=vt/u),this.set(r,l,u,i),this}let P=Math.sqrt((v-A)*(v-A)+(y-R)*(y-R)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(v-A)/P,this.y=(y-R)/P,this.z=(S-g)/P,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tS extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===xr?bn:hi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends tS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eS extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(y!==R||p!==S||m!==M||g!==A){let v=1-d;const _=p*S+m*M+g*A+y*R,P=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const q=Math.sqrt(D),W=Math.atan2(q,_*P);v=Math.sin(v*W)/q,d=Math.sin(d*W)/q}const F=d*P;if(p=p*v+S*F,m=m*v+M*F,g=g*v+A*F,y=y*v+R*F,v===1-d){const q=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=q,m*=q,g*=q,y*=q}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*y+p*M-m*S,e[i+1]=p*A+g*S+m*y-d*M,e[i+2]=m*A+g*M+d*S-p*y,e[i+3]=g*A-d*y-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),y=d(u/2),S=p(r/2),M=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=S*g*y+m*M*A,this._y=m*M*y-S*g*A,this._z=m*g*A+S*M*y,this._w=m*g*y-S*M*A;break;case"YXZ":this._x=S*g*y+m*M*A,this._y=m*M*y-S*g*A,this._z=m*g*A-S*M*y,this._w=m*g*y+S*M*A;break;case"ZXY":this._x=S*g*y-m*M*A,this._y=m*M*y+S*g*A,this._z=m*g*A+S*M*y,this._w=m*g*y-S*M*A;break;case"ZYX":this._x=S*g*y-m*M*A,this._y=m*M*y+S*g*A,this._z=m*g*A-S*M*y,this._w=m*g*y+S*M*A;break;case"YZX":this._x=S*g*y+m*M*A,this._y=m*M*y+S*g*A,this._z=m*g*A-S*M*y,this._w=m*g*y-S*M*A;break;case"XZY":this._x=S*g*y-m*M*A,this._y=m*M*y-S*g*A,this._z=m*g*A+S*M*y,this._w=m*g*y+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],y=i[10],S=r+d+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),y=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*y+this._w*S,this._x=r*y+this._x*S,this._y=l*y+this._y*S,this._z=u*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(jg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(jg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),y=2*(u*r-h*i);return this.x=i+p*m+h*y-d*g,this.y=r+p*g+d*m-u*y,this.z=l+p*y+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new Z,jg=new Mr;class Ho{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Si):Si.fromBufferAttribute(u,h),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ql.subVectors(this.max,Do),rs.subVectors(e.a,Do),ss.subVectors(e.b,Do),os.subVectors(e.c,Do),Ua.subVectors(ss,rs),Na.subVectors(os,ss),ur.subVectors(rs,os);let i=[0,-Ua.z,Ua.y,0,-Na.z,Na.y,0,-ur.z,ur.y,Ua.z,0,-Ua.x,Na.z,0,-Na.x,ur.z,0,-ur.x,-Ua.y,Ua.x,0,-Na.y,Na.x,0,-ur.y,ur.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(Ua,Na),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ta=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Si=new Z,Xl=new Ho,rs=new Z,ss=new Z,os=new Z,Ua=new Z,Na=new Z,ur=new Z,Do=new Z,ql=new Z,Yl=new Z,fr=new Z;function Yf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){fr.fromArray(o,u);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),p=e.dot(fr),m=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const nS=new Ho,Lo=new Z,jf=new Z;class bc{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(jf)),this.expandByPoint(Lo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Z,Zf=new Z,jl=new Z,Oa=new Z,Kf=new Z,Zl=new Z,Qf=new Z;class Ld{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Oa.dot(this.direction),p=-Oa.dot(jl),m=Oa.lengthSq(),g=Math.abs(1-h*h);let y,S,M,A;if(g>0)if(y=h*p-d,S=h*d-p,A=u*g,y>=0)if(S>=-A)if(S<=A){const R=1/g;y*=R,S*=R,M=y*(y+h*S+2*d)+S*(h*y+S+2*p)+m}else S=u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*p)+m;else S=-u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*p)+m;else S<=-A?(y=Math.max(0,-(-h*u+d)),S=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+S*(S+2*p)+m):S<=A?(y=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(y=Math.max(0,-(h*u+d)),S=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+S*(S+2*p)+m);else S=h>0?-u:u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(jl,S),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),y>=0?(d=(e.min.z-S.z)*y,p=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,p=(e.min.z-S.z)*y),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const p=d*this.direction.dot(Zl.crossVectors(Oa,Zl));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Oa));if(m<0||p+m>h)return null;const g=-d*Oa.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,r,l,u,h,d,p,m,g,y,S,M,A,R,v){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,y,S,M,A,R,v)}set(e,i,r,l,u,h,d,p,m,g,y,S,M,A,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=S,_[3]=M,_[7]=A,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*y,A=d*g,R=d*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=M+A*m,i[5]=S-R*m,i[9]=-d*p,i[2]=R-S*m,i[6]=A+M*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,M=p*y,A=m*g,R=m*y;i[0]=S+R*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*y,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=R+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,M=p*y,A=m*g,R=m*y;i[0]=S-R*d,i[4]=-h*y,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,M=h*y,A=d*g,R=d*y;i[0]=p*g,i[4]=A*m-M,i[8]=S*m+R,i[1]=p*y,i[5]=R*m+S,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,M=h*m,A=d*p,R=d*m;i[0]=p*g,i[4]=R-S*y,i[8]=A*y+M,i[1]=y,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*y+A,i[10]=S-R*y}else if(e.order==="XZY"){const S=h*p,M=h*m,A=d*p,R=d*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=S*y+R,i[5]=h*g,i[9]=M*y-A,i[2]=A*y-M,i[6]=d*g,i[10]=R*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iS,e,aS)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pa.crossVectors(r,Kn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pa.crossVectors(r,Kn)),Pa.normalize(),Kl.crossVectors(Kn,Pa),l[0]=Pa.x,l[4]=Kl.x,l[8]=Kn.x,l[1]=Pa.y,l[5]=Kl.y,l[9]=Kn.y,l[2]=Pa.z,l[6]=Kl.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],y=r[5],S=r[9],M=r[13],A=r[2],R=r[6],v=r[10],_=r[14],P=r[3],D=r[7],F=r[11],q=r[15],W=l[0],I=l[4],vt=l[8],z=l[12],E=l[1],N=l[5],_t=l[9],wt=l[13],J=l[2],ct=l[6],V=l[10],lt=l[14],at=l[3],ht=l[7],C=l[11],Q=l[15];return u[0]=h*W+d*E+p*J+m*at,u[4]=h*I+d*N+p*ct+m*ht,u[8]=h*vt+d*_t+p*V+m*C,u[12]=h*z+d*wt+p*lt+m*Q,u[1]=g*W+y*E+S*J+M*at,u[5]=g*I+y*N+S*ct+M*ht,u[9]=g*vt+y*_t+S*V+M*C,u[13]=g*z+y*wt+S*lt+M*Q,u[2]=A*W+R*E+v*J+_*at,u[6]=A*I+R*N+v*ct+_*ht,u[10]=A*vt+R*_t+v*V+_*C,u[14]=A*z+R*wt+v*lt+_*Q,u[3]=P*W+D*E+F*J+q*at,u[7]=P*I+D*N+F*ct+q*ht,u[11]=P*vt+D*_t+F*V+q*C,u[15]=P*z+D*wt+F*lt+q*Q,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],y=e[6],S=e[10],M=e[14],A=e[3],R=e[7],v=e[11],_=e[15];return A*(+u*p*y-l*m*y-u*d*S+r*m*S+l*d*M-r*p*M)+R*(+i*p*M-i*m*S+u*h*S-l*h*M+l*m*g-u*p*g)+v*(+i*m*y-i*d*M-u*h*y+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*y+i*d*S+l*h*y-r*h*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=e[9],S=e[10],M=e[11],A=e[12],R=e[13],v=e[14],_=e[15],P=y*v*m-R*S*m+R*p*M-d*v*M-y*p*_+d*S*_,D=A*S*m-g*v*m-A*p*M+h*v*M+g*p*_-h*S*_,F=g*R*m-A*y*m+A*d*M-h*R*M-g*d*_+h*y*_,q=A*y*p-g*R*p-A*d*S+h*R*S+g*d*v-h*y*v,W=i*P+r*D+l*F+u*q;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/W;return e[0]=P*I,e[1]=(R*S*u-y*v*u-R*l*M+r*v*M+y*l*_-r*S*_)*I,e[2]=(d*v*u-R*p*u+R*l*m-r*v*m-d*l*_+r*p*_)*I,e[3]=(y*p*u-d*S*u-y*l*m+r*S*m+d*l*M-r*p*M)*I,e[4]=D*I,e[5]=(g*v*u-A*S*u+A*l*M-i*v*M-g*l*_+i*S*_)*I,e[6]=(A*p*u-h*v*u-A*l*m+i*v*m+h*l*_-i*p*_)*I,e[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*M+i*p*M)*I,e[8]=F*I,e[9]=(A*y*u-g*R*u-A*r*M+i*R*M+g*r*_-i*y*_)*I,e[10]=(h*R*u-A*d*u+A*r*m-i*R*m-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*y*u-g*r*m+i*y*m+h*r*M-i*d*M)*I,e[12]=q*I,e[13]=(g*R*l-A*y*l+A*r*S-i*R*S-g*r*v+i*y*v)*I,e[14]=(A*d*l-h*R*l-A*r*p+i*R*p+h*r*v-i*d*v)*I,e[15]=(h*y*l-g*d*l+g*r*p-i*y*p-h*r*S+i*d*S)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,y=d+d,S=u*m,M=u*g,A=u*y,R=h*g,v=h*y,_=d*y,P=p*m,D=p*g,F=p*y,q=r.x,W=r.y,I=r.z;return l[0]=(1-(R+_))*q,l[1]=(M+F)*q,l[2]=(A-D)*q,l[3]=0,l[4]=(M-F)*W,l[5]=(1-(S+_))*W,l[6]=(v+P)*W,l[7]=0,l[8]=(A+D)*I,l[9]=(v-P)*I,l[10]=(1-(S+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Mi.copy(this);const m=1/u,g=1/h,y=1/d;return Mi.elements[0]*=m,Mi.elements[1]*=m,Mi.elements[2]*=m,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=y,Mi.elements[9]*=y,Mi.elements[10]*=y,i.setFromRotationMatrix(Mi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=oa){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let M,A;if(d===oa)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===yc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=oa){const p=this.elements,m=1/(i-e),g=1/(r-l),y=1/(h-u),S=(i+e)*m,M=(r+l)*g;let A,R;if(d===oa)A=(h+u)*y,R=-2*y;else if(d===yc)A=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new Z,Mi=new on,iS=new Z(0,0,0),aS=new Z(1,1,1),Pa=new Z,Kl=new Z,Kn=new Z,Zg=new on,Kg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],y=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const Qg=new Z,cs=new Mr,na=new on,Ql=new Z,Uo=new Z,sS=new Z,oS=new Mr,Jg=new Z(1,0,0),$g=new Z(0,1,0),t_=new Z(0,0,1),lS={type:"added"},cS={type:"removed"};class An extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Z,i=new Ac,r=new Mr,l=new Z(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new Me}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Qg.copy(e).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Uo,Ql,this.up):na.lookAt(Ql,Uo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(na),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),y=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new Z(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Z,ia=new Z,Jf=new Z,aa=new Z,us=new Z,fs=new Z,e_=new Z,$f=new Z,td=new Z,ed=new Z;class zi{constructor(e=new Z,i=new Z,r=new Z){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ei.subVectors(e,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ei.subVectors(l,i),ia.subVectors(r,i),Jf.subVectors(e,i);const h=Ei.dot(Ei),d=Ei.dot(ia),p=Ei.dot(Jf),m=ia.dot(ia),g=ia.dot(Jf),y=h*m-d*d;if(y===0)return u.set(0,0,0),null;const S=1/y,M=(m*p-d*g)*S,A=(h*g-d*p)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,aa.x),p.addScaledVector(h,aa.y),p.addScaledVector(d,aa.z),p)}static isFrontFacing(e,i,r,l){return Ei.subVectors(r,i),ia.subVectors(e,i),Ei.cross(ia).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ei.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return zi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);td.subVectors(e,l);const g=us.dot(td),y=fs.dot(td);if(g>=0&&y<=g)return i.copy(l);const S=p*y-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(us,h);ed.subVectors(e,u);const M=us.dot(ed),A=fs.dot(ed);if(A>=0&&M<=A)return i.copy(u);const R=M*m-p*A;if(R<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(fs,d);const v=g*A-M*y;if(v<=0&&y-g>=0&&M-A>=0)return e_.subVectors(u,l),d=(y-g)/(y-g+(M-A)),i.copy(l).addScaledVector(e_,d);const _=1/(v+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ve.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ve.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ve.workingColorSpace){if(e=Dd(e,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nd(h,u,e+1/3),this.g=nd(h,u,e),this.b=nd(h,u,e-1/3)}return Ve.toWorkingColorSpace(this,l),this}setStyle(e,i=bn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bn){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ve.fromWorkingColorSpace(Un.copy(this),e),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const y=h-d;switch(m=g<=.5?y/(h+d):y/(2-h-d),h){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=bn){Ve.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==bn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(Jl);const r=Bo(za.h,Jl.h,i),l=Bo(za.s,Jl.s,i),u=Bo(za.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Le;Le.NAMES=l0;let uS=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new Z,$l=new pe;class Bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Vg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ts("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}}class u0 extends Bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pi extends Bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fS=0;const di=new on,id=new An,ds=new Z,Qn=new Ho,No=new Ho,Sn=new Z;class Fi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Me().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new pi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(Qn.min,No.min),Qn.expandByPoint(Sn),Sn.addVectors(Qn.max,No.max),Qn.expandByPoint(Sn)):(Qn.expandByPoint(No.min),Qn.expandByPoint(No.max))}Qn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(ds.fromBufferAttribute(e,m),Sn.add(ds)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let E=0;E<d;E++)m[E]=new Z,g[E]=new Z;const y=new Z,S=new Z,M=new Z,A=new pe,R=new pe,v=new pe,_=new Z,P=new Z;function D(E,N,_t){y.fromArray(l,E*3),S.fromArray(l,N*3),M.fromArray(l,_t*3),A.fromArray(h,E*2),R.fromArray(h,N*2),v.fromArray(h,_t*2),S.sub(y),M.sub(y),R.sub(A),v.sub(A);const wt=1/(R.x*v.y-v.x*R.y);isFinite(wt)&&(_.copy(S).multiplyScalar(v.y).addScaledVector(M,-R.y).multiplyScalar(wt),P.copy(M).multiplyScalar(R.x).addScaledVector(S,-v.x).multiplyScalar(wt),m[E].add(_),m[N].add(_),m[_t].add(_),g[E].add(P),g[N].add(P),g[_t].add(P))}let F=this.groups;F.length===0&&(F=[{start:0,count:r.length}]);for(let E=0,N=F.length;E<N;++E){const _t=F[E],wt=_t.start,J=_t.count;for(let ct=wt,V=wt+J;ct<V;ct+=3)D(r[ct+0],r[ct+1],r[ct+2])}const q=new Z,W=new Z,I=new Z,vt=new Z;function z(E){I.fromArray(u,E*3),vt.copy(I);const N=m[E];q.copy(N),q.sub(I.multiplyScalar(I.dot(N))).normalize(),W.crossVectors(vt,N);const wt=W.dot(g[E])<0?-1:1;p[E*4]=q.x,p[E*4+1]=q.y,p[E*4+2]=q.z,p[E*4+3]=wt}for(let E=0,N=F.length;E<N;++E){const _t=F[E],wt=_t.start,J=_t.count;for(let ct=wt,V=wt+J;ct<V;ct+=3)z(r[ct+0]),z(r[ct+1]),z(r[ct+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new Z,u=new Z,h=new Z,d=new Z,p=new Z,m=new Z,g=new Z,y=new Z;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),R=e.getX(S+1),v=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,y=d.normalized,S=new m.constructor(p.length*g);let M=0,A=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?M=p[R]*d.data.stride+d.offset:M=p[R]*g;for(let _=0;_<g;_++)S[A++]=m[M++]}return new Bi(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,y=m.length;g<y;g++){const S=m[g],M=e(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,S=m.length;y<S;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let S=0,M=y.length;S<M;S++)g.push(y[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new on,dr=new Ld,tc=new bc,i_=new Z,hs=new Z,ps=new Z,ms=new Z,ad=new Z,ec=new Z,nc=new pe,ic=new pe,ac=new pe,a_=new Z,r_=new Z,s_=new Z,rc=new Z,sc=new Z;class $n extends An{constructor(e=new Fi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],y=u[p];g!==0&&(ad.fromBufferAttribute(y,e),h?ec.addScaledVector(ad,g):ec.addScaledVector(ad.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),dr.copy(e.ray).recast(e.near),!(tc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(tc,i_)===null||dr.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(u).invert(),dr.copy(e.ray).applyMatrix4(n_),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,dr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const v=S[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),D=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let F=P,q=D;F<q;F+=3){const W=d.getX(F),I=d.getX(F+1),vt=d.getX(F+2);l=oc(this,_,e,r,m,g,y,W,I,vt),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=A,_=R;v<_;v+=3){const P=d.getX(v),D=d.getX(v+1),F=d.getX(v+2);l=oc(this,h,e,r,m,g,y,P,D,F),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const v=S[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let F=P,q=D;F<q;F+=3){const W=F,I=F+1,vt=F+2;l=oc(this,_,e,r,m,g,y,W,I,vt),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=A,_=R;v<_;v+=3){const P=v,D=v+1,F=v+2;l=oc(this,h,e,r,m,g,y,P,D,F),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function dS(o,e,i,r,l,u,h,d){let p;if(e.side===kn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Wa,d),p===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,hs),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=dS(o,e,i,r,hs,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,d),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=zi.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new pe)),u&&(nc.fromBufferAttribute(u,d),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=zi.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new pe),g.uv2=g.uv1),h&&(a_.fromBufferAttribute(h,d),r_.fromBufferAttribute(h,p),s_.fromBufferAttribute(h,m),g.normal=zi.getInterpolation(rc,hs,ps,ms,a_,r_,s_,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Z,materialIndex:0};zi.getNormal(hs,ps,ms,y.normal),g.face=y}return g}class ka extends Fi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],y=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pi(m,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(y,2));function A(R,v,_,P,D,F,q,W,I,vt,z){const E=F/I,N=q/vt,_t=F/2,wt=q/2,J=W/2,ct=I+1,V=vt+1;let lt=0,at=0;const ht=new Z;for(let C=0;C<V;C++){const Q=C*N-wt;for(let mt=0;mt<ct;mt++){const Dt=mt*E-_t;ht[R]=Dt*P,ht[v]=Q*D,ht[_]=J,m.push(ht.x,ht.y,ht.z),ht[R]=0,ht[v]=0,ht[_]=W>0?1:-1,g.push(ht.x,ht.y,ht.z),y.push(mt/I),y.push(1-C/vt),lt+=1}}for(let C=0;C<vt;C++)for(let Q=0;Q<I;Q++){const mt=S+Q+ct*C,Dt=S+Q+ct*(C+1),j=S+(Q+1)+ct*(C+1),pt=S+(Q+1)+ct*C;p.push(mt,Dt,pt),p.push(Dt,j,pt),at+=6}d.addGroup(M,at,z),M+=at,S+=lt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function hS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function d0(o){return o.getRenderTarget()===null?o.outputColorSpace:Ve.workingColorSpace}const pS={clone:Cs,merge:Bn};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=hS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new Z,o_=new pe,l_=new pe;class Jn extends h0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,o_,l_),i.subVectors(l_,o_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _S extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new Jn(gs,_s,e,i);u.layers=this.layers,this.add(u);const h=new Jn(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new Jn(gs,_s,e,i);d.layers=this.layers,this.add(d);const p=new Jn(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new Jn(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class p0 extends Wn{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vS extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?bn:hi),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ka(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new $n(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Vn),new _S(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const rd=new Z,yS=new Z,xS=new Me;class Fa{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rd.subVectors(r,i).cross(yS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xS.getNormalMatrix(e),l=this.coplanarPoint(rd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bc,lc=new Z;class Ud{constructor(e=new Fa,i=new Fa,r=new Fa,l=new Fa,u=new Fa,h=new Fa){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],y=l[6],S=l[7],M=l[8],A=l[9],R=l[10],v=l[11],_=l[12],P=l[13],D=l[14],F=l[15];if(r[0].setComponents(p-u,S-m,v-M,F-_).normalize(),r[1].setComponents(p+u,S+m,v+M,F+_).normalize(),r[2].setComponents(p+h,S+g,v+A,F+P).normalize(),r[3].setComponents(p-h,S-g,v-A,F-P).normalize(),r[4].setComponents(p-d,S-y,v-R,F-D).normalize(),i===oa)r[5].setComponents(p+d,S+y,v+R,F+D).normalize();else if(i===yc)r[5].setComponents(d,y,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SS(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const y=m.array,S=m.usage,M=y.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,y,S),m.onUploadCallback();let R;if(y instanceof Float32Array)R=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)R=o.SHORT;else if(y instanceof Uint32Array)R=o.UNSIGNED_INT;else if(y instanceof Int32Array)R=o.INT;else if(y instanceof Int8Array)R=o.BYTE;else if(y instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:A,type:R,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,y){const S=g.array,M=g._updateRange,A=g.updateRanges;if(o.bindBuffer(y,m),M.count===-1&&A.length===0&&o.bufferSubData(y,0,S),A.length!==0){for(let R=0,v=A.length;R<v;R++){const _=A[R];i?o.bufferSubData(y,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):o.bufferSubData(y,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):o.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=r.get(m);(!S||S.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,l(m,g));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,g),y.version=m.version}}return{get:h,remove:d,update:p}}class wc extends Fi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,y=e/d,S=i/p,M=[],A=[],R=[],v=[];for(let _=0;_<g;_++){const P=_*S-h;for(let D=0;D<m;D++){const F=D*y-u;A.push(F,-P,0),R.push(0,0,1),v.push(D/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const D=P+m*_,F=P+m*(_+1),q=P+1+m*(_+1),W=P+1+m*_;M.push(D,F,W),M.push(F,q,W)}this.setIndex(M),this.setAttribute("position",new pi(A,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var MS=`#ifdef USE_ALPHAHASH
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
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,ve={alphahash_fragment:MS,alphahash_pars_fragment:ES,alphamap_fragment:TS,alphamap_pars_fragment:bS,alphatest_fragment:AS,alphatest_pars_fragment:wS,aomap_fragment:RS,aomap_pars_fragment:CS,batching_pars_vertex:DS,batching_vertex:LS,begin_vertex:US,beginnormal_vertex:NS,bsdfs:OS,iridescence_fragment:PS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:HS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:kS,color_vertex:WS,common:XS,cube_uv_reflection_fragment:qS,defaultnormal_vertex:YS,displacementmap_pars_vertex:jS,displacementmap_vertex:ZS,emissivemap_fragment:KS,emissivemap_pars_fragment:QS,colorspace_fragment:JS,colorspace_pars_fragment:$S,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:xM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:yE,worldpos_vertex:xE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},Wt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Oi={basic:{uniforms:Bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Bn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Bn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Bn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Bn([Wt.points,Wt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Bn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Bn([Wt.common,Wt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Bn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Bn([Wt.sprite,Wt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Bn([Wt.common,Wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Bn([Wt.lights,Wt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Oi.physical={uniforms:Bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const cc={r:0,b:0,g:0};function eT(o,e,i,r,l,u,h){const d=new Le(0);let p=u===!0?0:1,m,g,y=null,S=0,M=null;function A(v,_){let P=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:e).get(D)),D===null?R(d,p):D&&D.isColor&&(R(D,1),P=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Ec)?(g===void 0&&(g=new $n(new ka(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:Cs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,W,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ve.getTransfer(D.colorSpace)!==Ze,(y!==D||S!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=D,S=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new $n(new wc(2,2),new ca({name:"BackgroundMaterial",uniforms:Cs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(D.colorSpace)!==Ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||S!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=D,S=D.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(cc,d0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,R(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(d,p)},render:A}}function nT(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function y(J,ct,V,lt,at){let ht=!1;if(h){const C=R(lt,V,ct);m!==C&&(m=C,M(m.object)),ht=_(J,lt,V,at),ht&&P(J,lt,V,at)}else{const C=ct.wireframe===!0;(m.geometry!==lt.id||m.program!==V.id||m.wireframe!==C)&&(m.geometry=lt.id,m.program=V.id,m.wireframe=C,ht=!0)}at!==null&&i.update(at,o.ELEMENT_ARRAY_BUFFER),(ht||g)&&(g=!1,vt(J,ct,V,lt),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(at).buffer))}function S(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(J){return r.isWebGL2?o.bindVertexArray(J):u.bindVertexArrayOES(J)}function A(J){return r.isWebGL2?o.deleteVertexArray(J):u.deleteVertexArrayOES(J)}function R(J,ct,V){const lt=V.wireframe===!0;let at=d[J.id];at===void 0&&(at={},d[J.id]=at);let ht=at[ct.id];ht===void 0&&(ht={},at[ct.id]=ht);let C=ht[lt];return C===void 0&&(C=v(S()),ht[lt]=C),C}function v(J){const ct=[],V=[],lt=[];for(let at=0;at<l;at++)ct[at]=0,V[at]=0,lt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ct,enabledAttributes:V,attributeDivisors:lt,object:J,attributes:{},index:null}}function _(J,ct,V,lt){const at=m.attributes,ht=ct.attributes;let C=0;const Q=V.getAttributes();for(const mt in Q)if(Q[mt].location>=0){const j=at[mt];let pt=ht[mt];if(pt===void 0&&(mt==="instanceMatrix"&&J.instanceMatrix&&(pt=J.instanceMatrix),mt==="instanceColor"&&J.instanceColor&&(pt=J.instanceColor)),j===void 0||j.attribute!==pt||pt&&j.data!==pt.data)return!0;C++}return m.attributesNum!==C||m.index!==lt}function P(J,ct,V,lt){const at={},ht=ct.attributes;let C=0;const Q=V.getAttributes();for(const mt in Q)if(Q[mt].location>=0){let j=ht[mt];j===void 0&&(mt==="instanceMatrix"&&J.instanceMatrix&&(j=J.instanceMatrix),mt==="instanceColor"&&J.instanceColor&&(j=J.instanceColor));const pt={};pt.attribute=j,j&&j.data&&(pt.data=j.data),at[mt]=pt,C++}m.attributes=at,m.attributesNum=C,m.index=lt}function D(){const J=m.newAttributes;for(let ct=0,V=J.length;ct<V;ct++)J[ct]=0}function F(J){q(J,0)}function q(J,ct){const V=m.newAttributes,lt=m.enabledAttributes,at=m.attributeDivisors;V[J]=1,lt[J]===0&&(o.enableVertexAttribArray(J),lt[J]=1),at[J]!==ct&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,ct),at[J]=ct)}function W(){const J=m.newAttributes,ct=m.enabledAttributes;for(let V=0,lt=ct.length;V<lt;V++)ct[V]!==J[V]&&(o.disableVertexAttribArray(V),ct[V]=0)}function I(J,ct,V,lt,at,ht,C){C===!0?o.vertexAttribIPointer(J,ct,V,at,ht):o.vertexAttribPointer(J,ct,V,lt,at,ht)}function vt(J,ct,V,lt){if(r.isWebGL2===!1&&(J.isInstancedMesh||lt.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const at=lt.attributes,ht=V.getAttributes(),C=ct.defaultAttributeValues;for(const Q in ht){const mt=ht[Q];if(mt.location>=0){let Dt=at[Q];if(Dt===void 0&&(Q==="instanceMatrix"&&J.instanceMatrix&&(Dt=J.instanceMatrix),Q==="instanceColor"&&J.instanceColor&&(Dt=J.instanceColor)),Dt!==void 0){const j=Dt.normalized,pt=Dt.itemSize,bt=i.get(Dt);if(bt===void 0)continue;const Yt=bt.buffer,Ht=bt.type,Gt=bt.bytesPerElement,Kt=r.isWebGL2===!0&&(Ht===o.INT||Ht===o.UNSIGNED_INT||Dt.gpuType===Y_);if(Dt.isInterleavedBufferAttribute){const ae=Dt.data,et=ae.stride,Oe=Dt.offset;if(ae.isInstancedInterleavedBuffer){for(let ne=0;ne<mt.locationSize;ne++)q(mt.location+ne,ae.meshPerAttribute);J.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<mt.locationSize;ne++)F(mt.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ne=0;ne<mt.locationSize;ne++)I(mt.location+ne,pt/mt.locationSize,Ht,j,et*Gt,(Oe+pt/mt.locationSize*ne)*Gt,Kt)}else{if(Dt.isInstancedBufferAttribute){for(let ae=0;ae<mt.locationSize;ae++)q(mt.location+ae,Dt.meshPerAttribute);J.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let ae=0;ae<mt.locationSize;ae++)F(mt.location+ae);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ae=0;ae<mt.locationSize;ae++)I(mt.location+ae,pt/mt.locationSize,Ht,j,pt*Gt,pt/mt.locationSize*ae*Gt,Kt)}}else if(C!==void 0){const j=C[Q];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(mt.location,j);break;case 3:o.vertexAttrib3fv(mt.location,j);break;case 4:o.vertexAttrib4fv(mt.location,j);break;default:o.vertexAttrib1fv(mt.location,j)}}}}W()}function z(){_t();for(const J in d){const ct=d[J];for(const V in ct){const lt=ct[V];for(const at in lt)A(lt[at].object),delete lt[at];delete ct[V]}delete d[J]}}function E(J){if(d[J.id]===void 0)return;const ct=d[J.id];for(const V in ct){const lt=ct[V];for(const at in lt)A(lt[at].object),delete lt[at];delete ct[V]}delete d[J.id]}function N(J){for(const ct in d){const V=d[ct];if(V[J.id]===void 0)continue;const lt=V[J.id];for(const at in lt)A(lt[at].object),delete lt[at];delete V[J.id]}}function _t(){wt(),g=!0,m!==p&&(m=p,M(m.object))}function wt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:_t,resetDefaultState:wt,dispose:z,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:D,enableAttribute:F,disableUnusedAttributes:W}}function iT(o,e,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,y){o.drawArrays(u,g,y),i.update(y,u,1)}function p(g,y,S){if(S===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,g,y,S),i.update(y,u,S)}function m(g,y,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<S;A++)this.render(g[A],y[A]);else{M.multiDrawArraysWEBGL(u,g,0,y,0,S);let A=0;for(let R=0;R<S;R++)A+=y[R];i.update(A,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function aT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,F=h||e.has("OES_texture_float"),q=D&&F,W=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:A,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:D,floatFragmentTextures:F,floatVertexTextures:q,maxSamples:W}}function rT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Fa,d=new Me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||l;return l=S,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,S){i=g(y,S,0)},this.setState=function(y,S,M){const A=y.clippingPlanes,R=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!l||A===null||A.length===0||u&&!v)u?g(null):m();else{const P=u?0:r,D=P*4;let F=_.clippingState||null;p.value=F,F=g(A,S,D,M);for(let q=0;q!==D;++q)F[q]=i[q];_.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,S,M,A){const R=y!==null?y.length:0;let v=null;if(R!==0){if(v=p.value,A!==!0||v===null){const _=M+R*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,F=M;D!==R;++D,F+=4)h.copy(y[D]).applyMatrix4(P,d),h.normal.toArray(v,F),v[F+3]=h.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function sT(o){let e=new WeakMap;function i(h,d){return d===vd?h.mapping=As:d===yd&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===yd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new vS(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends h0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,c_=[.125,.215,.35,.446,.526,.582],gr=20,sd=new g0,u_=new Le;let od=null,ld=0,cd=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,f_=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,pr,vs),new Z(0,pr,-vs),new Z(vs,0,pr),new Z(-vs,0,pr),new Z(pr,vs,0),new Z(-pr,vs,0)];class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Fo,format:bi,colorSpace:la,depthBuffer:!1},l=h_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(u)),this._blurMaterial=lT(u,e,i)}return l}_compileMaterial(e){const i=new $n(this._lodPlanes[0],e);this._renderer.compile(i,sd)}_sceneToCubeUV(e,i,r,l){const d=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(u_),g.toneMapping=Ga,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),A=new $n(new ka,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(u_),R=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):P===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;uc(l,P*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new $n(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=f_[(l-1)%f_.length];this._blur(e,l-1,l,u,h)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new $n(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),R=u/A,v=isFinite(u)?1+Math.floor(g*R):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let P=0;for(let I=0;I<gr;++I){const vt=I/R,z=Math.exp(-vt*vt/2);_.push(z),I===0?P+=z:I<v&&(P+=2*z)}for(let I=0;I<_.length;I++)_[I]=_[I]/P;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=A,S.mipInt.value=D-r;const F=this._sizeLods[l],q=3*F*(l>D-Ss?l-D+Ss:0),W=4*(this._cubeSize-F);uc(i,q,W,3*F,2*F),p.setRenderTarget(i),p.render(y,sd)}}function oT(o){const e=[],i=[],r=[];let l=o;const u=o-Ss+1+c_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-Ss?p=c_[h-o+Ss-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,y=1+m,S=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,A=6,R=3,v=2,_=1,P=new Float32Array(R*A*M),D=new Float32Array(v*A*M),F=new Float32Array(_*A*M);for(let W=0;W<M;W++){const I=W%3*2/3-1,vt=W>2?0:-1,z=[I,vt,0,I+2/3,vt,0,I+2/3,vt+1,0,I,vt,0,I+2/3,vt+1,0,I,vt+1,0];P.set(z,R*A*W),D.set(S,v*A*W);const E=[W,W,W,W,W,W];F.set(E,_*A*W)}const q=new Fi;q.setAttribute("position",new Bi(P,R)),q.setAttribute("uv",new Bi(D,v)),q.setAttribute("faceIndex",new Bi(F,_)),e.push(q),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function h_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lT(o,e,i){const r=new Float32Array(gr),l=new Z(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function p_(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function m_(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function cT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vd||p===yd,g=p===As||p===ws;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let y=e.get(d);return i===null&&(i=new d_(o)),y=m?i.fromEquirectangular(d,y):i.fromCubemap(d,y),e.set(d,y),y.texture}else{if(e.has(d))return e.get(d).texture;{const y=d.image;if(m&&y&&y.height>0||g&&y&&l(y)){i===null&&(i=new d_(o));const S=m?i.fromEquirectangular(d):i.fromCubemap(d);return e.set(d,S),d.addEventListener("dispose",u),S.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function uT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fT(o,e,i,r){const l={},u=new WeakMap;function h(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);for(const A in S.morphAttributes){const R=S.morphAttributes[A];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(y){const S=y.attributes;for(const A in S)e.update(S[A],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const A in M){const R=M[A];for(let v=0,_=R.length;v<_;v++)e.update(R[v],o.ARRAY_BUFFER)}}function m(y){const S=[],M=y.index,A=y.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let D=0,F=P.length;D<F;D+=3){const q=P[D+0],W=P[D+1],I=P[D+2];S.push(q,W,W,I,I,q)}}else if(A!==void 0){const P=A.array;R=A.version;for(let D=0,F=P.length/3-1;D<F;D+=3){const q=D+0,W=D+1,I=D+2;S.push(q,W,W,I,I,q)}}else return;const v=new(i0(S)?f0:u0)(S,1);v.version=R;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const S=u.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:g}}function dT(o,e,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,A){o.drawElements(u,A,d,M*p),i.update(A,u,1)}function y(M,A,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,A,d,M*p,R),i.update(A,u,R)}function S(M,A,R){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,A[_]);else{v.multiDrawElementsWEBGL(u,A,0,d,M,0,R);let _=0;for(let P=0;P<R;P++)_+=A[P];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=y,this.renderMultiDraw=S}function hT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pT(o,e){return o[0]-e[0]}function mT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new Ke,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,y){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=A!==void 0?A.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let ct=function(){wt.dispose(),u.delete(g),g.removeEventListener("dispose",ct)};var M=ct;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,F=g.morphAttributes.normal!==void 0,q=g.morphAttributes.color!==void 0,W=g.morphAttributes.position||[],I=g.morphAttributes.normal||[],vt=g.morphAttributes.color||[];let z=0;D===!0&&(z=1),F===!0&&(z=2),q===!0&&(z=3);let E=g.attributes.position.count*z,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const _t=new Float32Array(E*N*4*R),wt=new s0(_t,E,N,R);wt.type=sa,wt.needsUpdate=!0;const J=z*4;for(let V=0;V<R;V++){const lt=W[V],at=I[V],ht=vt[V],C=E*N*4*V;for(let Q=0;Q<lt.count;Q++){const mt=Q*J;D===!0&&(h.fromBufferAttribute(lt,Q),_t[C+mt+0]=h.x,_t[C+mt+1]=h.y,_t[C+mt+2]=h.z,_t[C+mt+3]=0),F===!0&&(h.fromBufferAttribute(at,Q),_t[C+mt+4]=h.x,_t[C+mt+5]=h.y,_t[C+mt+6]=h.z,_t[C+mt+7]=0),q===!0&&(h.fromBufferAttribute(ht,Q),_t[C+mt+8]=h.x,_t[C+mt+9]=h.y,_t[C+mt+10]=h.z,_t[C+mt+11]=ht.itemSize===4?h.w:1)}}v={count:R,texture:wt,size:new pe(E,N)},u.set(g,v),g.addEventListener("dispose",ct)}let _=0;for(let D=0;D<S.length;D++)_+=S[D];const P=g.morphTargetsRelative?1:1-_;y.getUniforms().setValue(o,"morphTargetBaseInfluence",P),y.getUniforms().setValue(o,"morphTargetInfluences",S),y.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const A=S===void 0?0:S.length;let R=r[g.id];if(R===void 0||R.length!==A){R=[];for(let F=0;F<A;F++)R[F]=[F,0];r[g.id]=R}for(let F=0;F<A;F++){const q=R[F];q[0]=F,q[1]=S[F]}R.sort(mT);for(let F=0;F<8;F++)F<A&&R[F][1]?(d[F][0]=R[F][0],d[F][1]=R[F][1]):(d[F][0]=Number.MAX_SAFE_INTEGER,d[F][1]=0);d.sort(pT);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let P=0;for(let F=0;F<8;F++){const q=d[F],W=q[0],I=q[1];W!==Number.MAX_SAFE_INTEGER&&I?(v&&g.getAttribute("morphTarget"+F)!==v[W]&&g.setAttribute("morphTarget"+F,v[W]),_&&g.getAttribute("morphNormal"+F)!==_[W]&&g.setAttribute("morphNormal"+F,_[W]),l[F]=I,P+=I):(v&&g.hasAttribute("morphTarget"+F)===!0&&g.deleteAttribute("morphTarget"+F),_&&g.hasAttribute("morphNormal"+F)===!0&&g.deleteAttribute("morphNormal"+F),l[F]=0)}const D=g.morphTargetsRelative?1:1-P;y.getUniforms().setValue(o,"morphTargetBaseInfluence",D),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _T(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return y}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class _0 extends Wn{constructor(e,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:yr,g!==yr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===yr&&(r=Ia),r===void 0&&g===Rs&&(r=vr),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Fn,this.minFilter=p!==void 0?p:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new Wn,y0=new _0(1,1);y0.compareFunction=n0;const x0=new s0,S0=new eS,M0=new p0,g_=[],__=[],v_=new Float32Array(16),y_=new Float32Array(9),x_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=__[e];i===void 0&&(i=new Int32Array(e),__[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function MT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;x_.set(r),o.uniformMatrix2fv(this.addr,!1,x_),mn(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),mn(i,r)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;v_.set(r),o.uniformMatrix4fv(this.addr,!1,v_),mn(i,r)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?y0:v0;i.setTexture2D(e||u,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||S0,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||x0,l)}function BT(o){switch(o){case 5126:return vT;case 35664:return yT;case 35665:return xT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return DT;case 36295:return LT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}function FT(o,e){o.uniform1fv(this.addr,e)}function IT(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kT(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WT(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XT(o,e){o.uniform1iv(this.addr,e)}function qT(o,e){o.uniform2iv(this.addr,e)}function YT(o,e){o.uniform3iv(this.addr,e)}function jT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function QT(o,e){o.uniform3uiv(this.addr,e)}function JT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||v0,u[h])}function tb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||S0,u[h])}function eb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||M0,u[h])}function nb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||x0,u[h])}function ib(o){switch(o){case 5126:return FT;case 35664:return IT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function S_(o,e){o.seq.push(e),o.map[e.id]=e}function ob(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),h=ud.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){S_(i,m===void 0?new ab(d,o,e):new rb(d,o,e));break}else{let y=i.map[d];y===void 0&&(y=new sb(d),S_(i,y)),i=y}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);ob(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function M_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let cb=0;function ub(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function fb(o){const e=Ve.getPrimaries(Ve.workingColorSpace),i=Ve.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case la:case Tc:return[r,"LinearTransferOETF"];case bn:case Cd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function E_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ub(o.getShaderSource(e),h)}else return l}function db(o,e){const i=fb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function hb(o,e){let i;switch(e){case dx:i="Linear";break;case hx:i="Reinhard";break;case px:i="OptimizedCineon";break;case mx:i="ACESFilmic";break;case _x:i="AgX";break;case gx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function gb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ms(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(vb,xb)}const yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xb(o,e){let i=ve[e];if(i===void 0){const r=yb.get(e);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(i)}const Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(o){return o.replace(Sb,Mb)}function Mb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Eb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case X_:e="ENVMAP_BLENDING_MULTIPLY";break;case ux:e="ENVMAP_BLENDING_MIX";break;case fx:e="ENVMAP_BLENDING_ADD";break}return e}function wb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Rb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Eb(i),m=Tb(i),g=bb(i),y=Ab(i),S=wb(i),M=i.isWebGL2?"":pb(i),A=mb(i),R=gb(u),v=l.createProgram();let _,P,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),_.length>0&&(_+=`
`),P=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),P.length>0&&(P+=`
`)):(_=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),P=[M,w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ga?hb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,db("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ms).join(`
`)),h=Td(h),h=T_(h,i),h=b_(h,i),d=Td(d),d=T_(d,i),d=b_(d,i),h=A_(h),d=A_(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const F=D+_+h,q=D+P+d,W=M_(l,l.VERTEX_SHADER,F),I=M_(l,l.FRAGMENT_SHADER,q);l.attachShader(v,W),l.attachShader(v,I),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function vt(_t){if(o.debug.checkShaderErrors){const wt=l.getProgramInfoLog(v).trim(),J=l.getShaderInfoLog(W).trim(),ct=l.getShaderInfoLog(I).trim();let V=!0,lt=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,W,I);else{const at=E_(l,W,"vertex"),ht=E_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+_t.name+`
Material Type: `+_t.type+`

Program Info Log: `+wt+`
`+at+`
`+ht)}else wt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",wt):(J===""||ct==="")&&(lt=!1);lt&&(_t.diagnostics={runnable:V,programLog:wt,vertexShader:{log:J,prefix:_},fragmentShader:{log:ct,prefix:P}})}l.deleteShader(W),l.deleteShader(I),z=new pc(l,v),E=_b(l,v)}let z;this.getUniforms=function(){return z===void 0&&vt(this),z};let E;this.getAttributes=function(){return E===void 0&&vt(this),E};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(v,lb)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=W,this.fragmentShader=I,this}let Cb=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Lb(e),i.set(e,r)),r}}class Lb{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Ub(o,e,i,r,l,u,h){const d=new o0,p=new Db,m=new Set,g=[],y=l.isWebGL2,S=l.logarithmicDepthBuffer,M=l.vertexTextures;let A=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,N,_t,wt,J){const ct=wt.fog,V=J.geometry,lt=E.isMeshStandardMaterial?wt.environment:null,at=(E.isMeshStandardMaterial?i:e).get(E.envMap||lt),ht=at&&at.mapping===Ec?at.image.height:null,C=R[E.type];E.precision!==null&&(A=l.getMaxPrecision(E.precision),A!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",A,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=Q!==void 0?Q.length:0;let Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let j,pt,bt,Yt;if(C){const fe=Oi[C];j=fe.vertexShader,pt=fe.fragmentShader}else j=E.vertexShader,pt=E.fragmentShader,p.update(E),bt=p.getVertexShaderID(E),Yt=p.getFragmentShaderID(E);const Ht=o.getRenderTarget(),Gt=J.isInstancedMesh===!0,Kt=J.isBatchedMesh===!0,ae=!!E.map,et=!!E.matcap,Oe=!!at,ne=!!E.aoMap,se=!!E.lightMap,Zt=!!E.bumpMap,be=!!E.normalMap,ce=!!E.displacementMap,L=!!E.emissiveMap,b=!!E.metalnessMap,it=!!E.roughnessMap,Pt=E.anisotropy>0,Rt=E.clearcoat>0,X=E.iridescence>0,nt=E.sheen>0,ot=E.transmission>0,dt=Pt&&!!E.anisotropyMap,ft=Rt&&!!E.clearcoatMap,Mt=Rt&&!!E.clearcoatNormalMap,rt=Rt&&!!E.clearcoatRoughnessMap,le=X&&!!E.iridescenceMap,Xt=X&&!!E.iridescenceThicknessMap,Lt=nt&&!!E.sheenColorMap,Ft=nt&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Nt=!!E.specularColorMap,O=!!E.specularIntensityMap,gt=ot&&!!E.transmissionMap,Ut=ot&&!!E.thicknessMap,zt=!!E.gradientMap,U=!!E.alphaMap,At=E.alphaTest>0,Tt=!!E.alphaHash,jt=!!E.extensions;let Jt=Ga;E.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const ye={isWebGL2:y,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:j,fragmentShader:pt,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:Yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:A,batching:Kt,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Ht===null?o.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:la,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:et,envMap:Oe,envMapMode:Oe&&at.mapping,envMapCubeUVHeight:ht,aoMap:ne,lightMap:se,bumpMap:Zt,normalMap:be,displacementMap:M&&ce,emissiveMap:L,normalMapObjectSpace:be&&E.normalMapType===Rx,normalMapTangentSpace:be&&E.normalMapType===e0,metalnessMap:b,roughnessMap:it,anisotropy:Pt,anisotropyMap:dt,clearcoat:Rt,clearcoatMap:ft,clearcoatNormalMap:Mt,clearcoatRoughnessMap:rt,iridescence:X,iridescenceMap:le,iridescenceThicknessMap:Xt,sheen:nt,sheenColorMap:Lt,sheenRoughnessMap:Ft,specularMap:kt,specularColorMap:Nt,specularIntensityMap:O,transmission:ot,transmissionMap:gt,thicknessMap:Ut,gradientMap:zt,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:U,alphaTest:At,alphaHash:Tt,combine:E.combine,mapUv:ae&&v(E.map.channel),aoMapUv:ne&&v(E.aoMap.channel),lightMapUv:se&&v(E.lightMap.channel),bumpMapUv:Zt&&v(E.bumpMap.channel),normalMapUv:be&&v(E.normalMap.channel),displacementMapUv:ce&&v(E.displacementMap.channel),emissiveMapUv:L&&v(E.emissiveMap.channel),metalnessMapUv:b&&v(E.metalnessMap.channel),roughnessMapUv:it&&v(E.roughnessMap.channel),anisotropyMapUv:dt&&v(E.anisotropyMap.channel),clearcoatMapUv:ft&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(E.sheenRoughnessMap.channel),specularMapUv:kt&&v(E.specularMap.channel),specularColorMapUv:Nt&&v(E.specularColorMap.channel),specularIntensityMapUv:O&&v(E.specularIntensityMap.channel),transmissionMapUv:gt&&v(E.transmissionMap.channel),thicknessMapUv:Ut&&v(E.thicknessMap.channel),alphaMapUv:U&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(be||Pt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!V.attributes.uv&&(ae||U),fog:!!ct,useFog:E.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:J.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Dt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&_t.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&Ve.getTransfer(E.map.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pi,flipSided:E.side===kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:jt&&E.extensions.derivatives===!0,extensionFragDepth:jt&&E.extensions.fragDepth===!0,extensionDrawBuffers:jt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:jt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:jt&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=m.has(1),ye.vertexUv2s=m.has(2),ye.vertexUv3s=m.has(3),m.clear(),ye}function P(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const _t in E.defines)N.push(_t),N.push(E.defines[_t]);return E.isRawShaderMaterial===!1&&(D(N,E),F(N,E),N.push(o.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function D(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function F(E,N){d.disableAll(),N.isWebGL2&&d.enable(0),N.supportsVertexTextures&&d.enable(1),N.instancing&&d.enable(2),N.instancingColor&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),E.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.skinning&&d.enable(4),N.morphTargets&&d.enable(5),N.morphNormals&&d.enable(6),N.morphColors&&d.enable(7),N.premultipliedAlpha&&d.enable(8),N.shadowMapEnabled&&d.enable(9),N.useLegacyLights&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.alphaToCoverage&&d.enable(20),E.push(d.mask)}function q(E){const N=R[E.type];let _t;if(N){const wt=Oi[N];_t=pS.clone(wt.uniforms)}else _t=E.uniforms;return _t}function W(E,N){let _t;for(let wt=0,J=g.length;wt<J;wt++){const ct=g[wt];if(ct.cacheKey===N){_t=ct,++_t.usedTimes;break}}return _t===void 0&&(_t=new Rb(o,N,E,u),g.push(_t)),_t}function I(E){if(--E.usedTimes===0){const N=g.indexOf(E);g[N]=g[g.length-1],g.pop(),E.destroy()}}function vt(E){p.remove(E)}function z(){p.dispose()}return{getParameters:_,getProgramCacheKey:P,getUniforms:q,acquireProgram:W,releaseProgram:I,releaseShaderCache:vt,programs:g,dispose:z}}function Nb(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function R_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function C_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(y,S,M,A,R,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:S,material:M,groupOrder:A,renderOrder:y.renderOrder,z:R,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=y.renderOrder,_.z=R,_.group=v),e++,_}function d(y,S,M,A,R,v){const _=h(y,S,M,A,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(y,S,M,A,R,v){const _=h(y,S,M,A,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,S){i.length>1&&i.sort(y||Ob),r.length>1&&r.sort(S||R_),l.length>1&&l.sort(S||R_)}function g(){for(let y=e,S=o.length;y<S;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function Pb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new C_,o.set(r,[h])):l>=u.length?(h=new C_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new Le};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function Bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Fb=0;function Ib(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hb(o,e){const i=new zb,r=Bb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new Z);const u=new Z,h=new on,d=new on;function p(g,y){let S=0,M=0,A=0;for(let _t=0;_t<9;_t++)l.probe[_t].set(0,0,0);let R=0,v=0,_=0,P=0,D=0,F=0,q=0,W=0,I=0,vt=0,z=0;g.sort(Ib);const E=y===!0?Math.PI:1;for(let _t=0,wt=g.length;_t<wt;_t++){const J=g[_t],ct=J.color,V=J.intensity,lt=J.distance,at=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)S+=ct.r*V*E,M+=ct.g*V*E,A+=ct.b*V*E;else if(J.isLightProbe){for(let ht=0;ht<9;ht++)l.probe[ht].addScaledVector(J.sh.coefficients[ht],V);z++}else if(J.isDirectionalLight){const ht=i.get(J);if(ht.color.copy(J.color).multiplyScalar(J.intensity*E),J.castShadow){const C=J.shadow,Q=r.get(J);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,l.directionalShadow[R]=Q,l.directionalShadowMap[R]=at,l.directionalShadowMatrix[R]=J.shadow.matrix,F++}l.directional[R]=ht,R++}else if(J.isSpotLight){const ht=i.get(J);ht.position.setFromMatrixPosition(J.matrixWorld),ht.color.copy(ct).multiplyScalar(V*E),ht.distance=lt,ht.coneCos=Math.cos(J.angle),ht.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),ht.decay=J.decay,l.spot[_]=ht;const C=J.shadow;if(J.map&&(l.spotLightMap[I]=J.map,I++,C.updateMatrices(J),J.castShadow&&vt++),l.spotLightMatrix[_]=C.matrix,J.castShadow){const Q=r.get(J);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,l.spotShadow[_]=Q,l.spotShadowMap[_]=at,W++}_++}else if(J.isRectAreaLight){const ht=i.get(J);ht.color.copy(ct).multiplyScalar(V),ht.halfWidth.set(J.width*.5,0,0),ht.halfHeight.set(0,J.height*.5,0),l.rectArea[P]=ht,P++}else if(J.isPointLight){const ht=i.get(J);if(ht.color.copy(J.color).multiplyScalar(J.intensity*E),ht.distance=J.distance,ht.decay=J.decay,J.castShadow){const C=J.shadow,Q=r.get(J);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,l.pointShadow[v]=Q,l.pointShadowMap[v]=at,l.pointShadowMatrix[v]=J.shadow.matrix,q++}l.point[v]=ht,v++}else if(J.isHemisphereLight){const ht=i.get(J);ht.skyColor.copy(J.color).multiplyScalar(V*E),ht.groundColor.copy(J.groundColor).multiplyScalar(V*E),l.hemi[D]=ht,D++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=M,l.ambient[2]=A;const N=l.hash;(N.directionalLength!==R||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==P||N.hemiLength!==D||N.numDirectionalShadows!==F||N.numPointShadows!==q||N.numSpotShadows!==W||N.numSpotMaps!==I||N.numLightProbes!==z)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=P,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=F,l.directionalShadowMap.length=F,l.pointShadow.length=q,l.pointShadowMap.length=q,l.spotShadow.length=W,l.spotShadowMap.length=W,l.directionalShadowMatrix.length=F,l.pointShadowMatrix.length=q,l.spotLightMatrix.length=W+I-vt,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=vt,l.numLightProbes=z,N.directionalLength=R,N.pointLength=v,N.spotLength=_,N.rectAreaLength=P,N.hemiLength=D,N.numDirectionalShadows=F,N.numPointShadows=q,N.numSpotShadows=W,N.numSpotMaps=I,N.numLightProbes=z,l.version=Fb++)}function m(g,y){let S=0,M=0,A=0,R=0,v=0;const _=y.matrixWorldInverse;for(let P=0,D=g.length;P<D;P++){const F=g[P];if(F.isDirectionalLight){const q=l.directional[S];q.direction.setFromMatrixPosition(F.matrixWorld),u.setFromMatrixPosition(F.target.matrixWorld),q.direction.sub(u),q.direction.transformDirection(_),S++}else if(F.isSpotLight){const q=l.spot[A];q.position.setFromMatrixPosition(F.matrixWorld),q.position.applyMatrix4(_),q.direction.setFromMatrixPosition(F.matrixWorld),u.setFromMatrixPosition(F.target.matrixWorld),q.direction.sub(u),q.direction.transformDirection(_),A++}else if(F.isRectAreaLight){const q=l.rectArea[R];q.position.setFromMatrixPosition(F.matrixWorld),q.position.applyMatrix4(_),d.identity(),h.copy(F.matrixWorld),h.premultiply(_),d.extractRotation(h),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),q.halfWidth.applyMatrix4(d),q.halfHeight.applyMatrix4(d),R++}else if(F.isPointLight){const q=l.point[M];q.position.setFromMatrixPosition(F.matrixWorld),q.position.applyMatrix4(_),M++}else if(F.isHemisphereLight){const q=l.hemi[v];q.direction.setFromMatrixPosition(F.matrixWorld),q.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function D_(o,e){const i=new Hb(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function h(y){r.push(y)}function d(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function Gb(o,e){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new D_(o,e),i.set(u,[p])):h>=d.length?(p=new D_(o,e),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class Vb extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wb=`void main() {
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
}`;function qb(o,e,i){let r=new Ud;const l=new pe,u=new pe,h=new Ke,d=new Vb({depthPacking:wx}),p=new kb,m={},g=i.maxTextureSize,y={[Wa]:kn,[kn]:Wa,[Pi]:Pi},S=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Fi;A.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $n(A,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let _=this.type;this.render=function(W,I,vt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||W.length===0)return;const z=o.getRenderTarget(),E=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),_t=o.state;_t.setBlending(Ha),_t.buffers.color.setClear(1,1,1,1),_t.buffers.depth.setTest(!0),_t.setScissorTest(!1);const wt=_!==ra&&this.type===ra,J=_===ra&&this.type!==ra;for(let ct=0,V=W.length;ct<V;ct++){const lt=W[ct],at=lt.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;l.copy(at.mapSize);const ht=at.getFrameExtents();if(l.multiply(ht),u.copy(at.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ht.x),l.x=u.x*ht.x,at.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ht.y),l.y=u.y*ht.y,at.mapSize.y=u.y)),at.map===null||wt===!0||J===!0){const Q=this.type!==ra?{minFilter:Fn,magFilter:Fn}:{};at.map!==null&&at.map.dispose(),at.map=new Sr(l.x,l.y,Q),at.map.texture.name=lt.name+".shadowMap",at.camera.updateProjectionMatrix()}o.setRenderTarget(at.map),o.clear();const C=at.getViewportCount();for(let Q=0;Q<C;Q++){const mt=at.getViewport(Q);h.set(u.x*mt.x,u.y*mt.y,u.x*mt.z,u.y*mt.w),_t.viewport(h),at.updateMatrices(lt,Q),r=at.getFrustum(),F(I,vt,at.camera,lt,this.type)}at.isPointLightShadow!==!0&&this.type===ra&&P(at,vt),at.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(z,E,N)};function P(W,I){const vt=e.update(R);S.defines.VSM_SAMPLES!==W.blurSamples&&(S.defines.VSM_SAMPLES=W.blurSamples,M.defines.VSM_SAMPLES=W.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),W.mapPass===null&&(W.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=W.map.texture,S.uniforms.resolution.value=W.mapSize,S.uniforms.radius.value=W.radius,o.setRenderTarget(W.mapPass),o.clear(),o.renderBufferDirect(I,null,vt,S,R,null),M.uniforms.shadow_pass.value=W.mapPass.texture,M.uniforms.resolution.value=W.mapSize,M.uniforms.radius.value=W.radius,o.setRenderTarget(W.map),o.clear(),o.renderBufferDirect(I,null,vt,M,R,null)}function D(W,I,vt,z){let E=null;const N=vt.isPointLight===!0?W.customDistanceMaterial:W.customDepthMaterial;if(N!==void 0)E=N;else if(E=vt.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const _t=E.uuid,wt=I.uuid;let J=m[_t];J===void 0&&(J={},m[_t]=J);let ct=J[wt];ct===void 0&&(ct=E.clone(),J[wt]=ct,I.addEventListener("dispose",q)),E=ct}if(E.visible=I.visible,E.wireframe=I.wireframe,z===ra?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:y[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,vt.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const _t=o.properties.get(E);_t.light=vt}return E}function F(W,I,vt,z,E){if(W.visible===!1)return;if(W.layers.test(I.layers)&&(W.isMesh||W.isLine||W.isPoints)&&(W.castShadow||W.receiveShadow&&E===ra)&&(!W.frustumCulled||r.intersectsObject(W))){W.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,W.matrixWorld);const wt=e.update(W),J=W.material;if(Array.isArray(J)){const ct=wt.groups;for(let V=0,lt=ct.length;V<lt;V++){const at=ct[V],ht=J[at.materialIndex];if(ht&&ht.visible){const C=D(W,ht,z,E);W.onBeforeShadow(o,W,I,vt,wt,C,at),o.renderBufferDirect(vt,null,wt,C,W,at),W.onAfterShadow(o,W,I,vt,wt,C,at)}}}else if(J.visible){const ct=D(W,J,z,E);W.onBeforeShadow(o,W,I,vt,wt,ct,null),o.renderBufferDirect(vt,null,wt,ct,W,null),W.onAfterShadow(o,W,I,vt,wt,ct,null)}}const _t=W.children;for(let wt=0,J=_t.length;wt<J;wt++)F(_t[wt],I,vt,z,E)}function q(W){W.target.removeEventListener("dispose",q);for(const vt in m){const z=m[vt],E=W.target.uuid;E in z&&(z[E].dispose(),delete z[E])}}}function Yb(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const At=new Ke;let Tt=null;const jt=new Ke(0,0,0,0);return{setMask:function(Jt){Tt!==Jt&&!U&&(o.colorMask(Jt,Jt,Jt,Jt),Tt=Jt)},setLocked:function(Jt){U=Jt},setClear:function(Jt,ye,fe,Ae,Xe){Xe===!0&&(Jt*=Ae,ye*=Ae,fe*=Ae),At.set(Jt,ye,fe,Ae),jt.equals(At)===!1&&(o.clearColor(Jt,ye,fe,Ae),jt.copy(At))},reset:function(){U=!1,Tt=null,jt.set(-1,0,0,0)}}}function u(){let U=!1,At=null,Tt=null,jt=null;return{setTest:function(Jt){Jt?Gt(o.DEPTH_TEST):Kt(o.DEPTH_TEST)},setMask:function(Jt){At!==Jt&&!U&&(o.depthMask(Jt),At=Jt)},setFunc:function(Jt){if(Tt!==Jt){switch(Jt){case ix:o.depthFunc(o.NEVER);break;case ax:o.depthFunc(o.ALWAYS);break;case rx:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sx:o.depthFunc(o.EQUAL);break;case ox:o.depthFunc(o.GEQUAL);break;case lx:o.depthFunc(o.GREATER);break;case cx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Tt=Jt}},setLocked:function(Jt){U=Jt},setClear:function(Jt){jt!==Jt&&(o.clearDepth(Jt),jt=Jt)},reset:function(){U=!1,At=null,Tt=null,jt=null}}}function h(){let U=!1,At=null,Tt=null,jt=null,Jt=null,ye=null,fe=null,Ae=null,Xe=null;return{setTest:function(oe){U||(oe?Gt(o.STENCIL_TEST):Kt(o.STENCIL_TEST))},setMask:function(oe){At!==oe&&!U&&(o.stencilMask(oe),At=oe)},setFunc:function(oe,we,Pe){(Tt!==oe||jt!==we||Jt!==Pe)&&(o.stencilFunc(oe,we,Pe),Tt=oe,jt=we,Jt=Pe)},setOp:function(oe,we,Pe){(ye!==oe||fe!==we||Ae!==Pe)&&(o.stencilOp(oe,we,Pe),ye=oe,fe=we,Ae=Pe)},setLocked:function(oe){U=oe},setClear:function(oe){Xe!==oe&&(o.clearStencil(oe),Xe=oe)},reset:function(){U=!1,At=null,Tt=null,jt=null,Jt=null,ye=null,fe=null,Ae=null,Xe=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,y=new WeakMap;let S={},M={},A=new WeakMap,R=[],v=null,_=!1,P=null,D=null,F=null,q=null,W=null,I=null,vt=null,z=new Le(0,0,0),E=0,N=!1,_t=null,wt=null,J=null,ct=null,V=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,ht=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(C)[1]),at=ht>=1):C.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),at=ht>=2);let Q=null,mt={};const Dt=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),pt=new Ke().fromArray(Dt),bt=new Ke().fromArray(j);function Yt(U,At,Tt,jt){const Jt=new Uint8Array(4),ye=o.createTexture();o.bindTexture(U,ye),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let fe=0;fe<Tt;fe++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(At,0,o.RGBA,1,1,jt,0,o.RGBA,o.UNSIGNED_BYTE,Jt):o.texImage2D(At+fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Jt);return ye}const Ht={};Ht[o.TEXTURE_2D]=Yt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ht[o.TEXTURE_CUBE_MAP]=Yt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ht[o.TEXTURE_2D_ARRAY]=Yt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ht[o.TEXTURE_3D]=Yt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Gt(o.DEPTH_TEST),p.setFunc(mc),ce(!1),L(ug),Gt(o.CULL_FACE),Zt(Ha);function Gt(U){S[U]!==!0&&(o.enable(U),S[U]=!0)}function Kt(U){S[U]!==!1&&(o.disable(U),S[U]=!1)}function ae(U,At){return M[U]!==At?(o.bindFramebuffer(U,At),M[U]=At,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=At),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=At)),!0):!1}function et(U,At){let Tt=R,jt=!1;if(U)if(Tt=A.get(At),Tt===void 0&&(Tt=[],A.set(At,Tt)),U.isWebGLMultipleRenderTargets){const Jt=U.texture;if(Tt.length!==Jt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,fe=Jt.length;ye<fe;ye++)Tt[ye]=o.COLOR_ATTACHMENT0+ye;Tt.length=Jt.length,jt=!0}}else Tt[0]!==o.COLOR_ATTACHMENT0&&(Tt[0]=o.COLOR_ATTACHMENT0,jt=!0);else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,jt=!0);jt&&(i.isWebGL2?o.drawBuffers(Tt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function Oe(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const ne={[mr]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};if(r)ne[hg]=o.MIN,ne[pg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ne[hg]=U.MIN_EXT,ne[pg]=U.MAX_EXT)}const se={[Wy]:o.ZERO,[Xy]:o.ONE,[qy]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[Jy]:o.SRC_ALPHA_SATURATE,[Ky]:o.DST_COLOR,[jy]:o.DST_ALPHA,[Yy]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[Qy]:o.ONE_MINUS_DST_COLOR,[Zy]:o.ONE_MINUS_DST_ALPHA,[$y]:o.CONSTANT_COLOR,[tx]:o.ONE_MINUS_CONSTANT_COLOR,[ex]:o.CONSTANT_ALPHA,[nx]:o.ONE_MINUS_CONSTANT_ALPHA};function Zt(U,At,Tt,jt,Jt,ye,fe,Ae,Xe,oe){if(U===Ha){_===!0&&(Kt(o.BLEND),_=!1);return}if(_===!1&&(Gt(o.BLEND),_=!0),U!==Gy){if(U!==P||oe!==N){if((D!==mr||W!==mr)&&(o.blendEquation(o.FUNC_ADD),D=mr,W=mr),oe)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}F=null,q=null,I=null,vt=null,z.set(0,0,0),E=0,P=U,N=oe}return}Jt=Jt||At,ye=ye||Tt,fe=fe||jt,(At!==D||Jt!==W)&&(o.blendEquationSeparate(ne[At],ne[Jt]),D=At,W=Jt),(Tt!==F||jt!==q||ye!==I||fe!==vt)&&(o.blendFuncSeparate(se[Tt],se[jt],se[ye],se[fe]),F=Tt,q=jt,I=ye,vt=fe),(Ae.equals(z)===!1||Xe!==E)&&(o.blendColor(Ae.r,Ae.g,Ae.b,Xe),z.copy(Ae),E=Xe),P=U,N=!1}function be(U,At){U.side===Pi?Kt(o.CULL_FACE):Gt(o.CULL_FACE);let Tt=U.side===kn;At&&(Tt=!Tt),ce(Tt),U.blending===Es&&U.transparent===!1?Zt(Ha):Zt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const jt=U.stencilWrite;m.setTest(jt),jt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Gt(o.SAMPLE_ALPHA_TO_COVERAGE):Kt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(U){_t!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),_t=U)}function L(U){U!==Iy?(Gt(o.CULL_FACE),U!==wt&&(U===ug?o.cullFace(o.BACK):U===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Kt(o.CULL_FACE),wt=U}function b(U){U!==J&&(at&&o.lineWidth(U),J=U)}function it(U,At,Tt){U?(Gt(o.POLYGON_OFFSET_FILL),(ct!==At||V!==Tt)&&(o.polygonOffset(At,Tt),ct=At,V=Tt)):Kt(o.POLYGON_OFFSET_FILL)}function Pt(U){U?Gt(o.SCISSOR_TEST):Kt(o.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=o.TEXTURE0+lt-1),Q!==U&&(o.activeTexture(U),Q=U)}function X(U,At,Tt){Tt===void 0&&(Q===null?Tt=o.TEXTURE0+lt-1:Tt=Q);let jt=mt[Tt];jt===void 0&&(jt={type:void 0,texture:void 0},mt[Tt]=jt),(jt.type!==U||jt.texture!==At)&&(Q!==Tt&&(o.activeTexture(Tt),Q=Tt),o.bindTexture(U,At||Ht[U]),jt.type=U,jt.texture=At)}function nt(){const U=mt[Q];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ot(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){pt.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function O(U){bt.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),bt.copy(U))}function gt(U,At){let Tt=y.get(At);Tt===void 0&&(Tt=new WeakMap,y.set(At,Tt));let jt=Tt.get(U);jt===void 0&&(jt=o.getUniformBlockIndex(At,U.name),Tt.set(U,jt))}function Ut(U,At){const jt=y.get(At).get(U);g.get(At)!==jt&&(o.uniformBlockBinding(At,jt,U.__bindingPointIndex),g.set(At,jt))}function zt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},Q=null,mt={},M={},A=new WeakMap,R=[],v=null,_=!1,P=null,D=null,F=null,q=null,W=null,I=null,vt=null,z=new Le(0,0,0),E=0,N=!1,_t=null,wt=null,J=null,ct=null,V=null,pt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Gt,disable:Kt,bindFramebuffer:ae,drawBuffers:et,useProgram:Oe,setBlending:Zt,setMaterial:be,setFlipSided:ce,setCullFace:L,setLineWidth:b,setPolygonOffset:it,setScissorTest:Pt,activeTexture:Rt,bindTexture:X,unbindTexture:nt,compressedTexImage2D:ot,compressedTexImage3D:dt,texImage2D:Ft,texImage3D:kt,updateUBOMapping:gt,uniformBlockBinding:Ut,texStorage2D:Xt,texStorage3D:Lt,texSubImage2D:ft,texSubImage3D:Mt,compressedTexSubImage2D:rt,compressedTexSubImage3D:le,scissor:Nt,viewport:O,reset:zt}}function jb(o,e,i,r,l,u,h){const d=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,b){return M?new OffscreenCanvas(L,b):Sc("canvas")}function R(L,b,it,Pt){let Rt=1;if((L.width>Pt||L.height>Pt)&&(Rt=Pt/Math.max(L.width,L.height)),Rt<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const X=b?xc:Math.floor,nt=X(Rt*L.width),ot=X(Rt*L.height);y===void 0&&(y=A(nt,ot));const dt=it?A(nt,ot):y;return dt.width=nt,dt.height=ot,dt.getContext("2d").drawImage(L,0,0,nt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+nt+"x"+ot+")."),dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Ed(L.width)&&Ed(L.height)}function _(L){return d?!1:L.wrapS!==Ti||L.wrapT!==Ti||L.minFilter!==Fn&&L.minFilter!==Vn}function P(L,b){return L.generateMipmaps&&b&&L.minFilter!==Fn&&L.minFilter!==Vn}function D(L){o.generateMipmap(L)}function F(L,b,it,Pt,Rt=!1){if(d===!1)return b;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=b;if(b===o.RED&&(it===o.FLOAT&&(X=o.R32F),it===o.HALF_FLOAT&&(X=o.R16F),it===o.UNSIGNED_BYTE&&(X=o.R8)),b===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(X=o.R8UI),it===o.UNSIGNED_SHORT&&(X=o.R16UI),it===o.UNSIGNED_INT&&(X=o.R32UI),it===o.BYTE&&(X=o.R8I),it===o.SHORT&&(X=o.R16I),it===o.INT&&(X=o.R32I)),b===o.RG&&(it===o.FLOAT&&(X=o.RG32F),it===o.HALF_FLOAT&&(X=o.RG16F),it===o.UNSIGNED_BYTE&&(X=o.RG8)),b===o.RGBA){const nt=Rt?gc:Ve.getTransfer(Pt);it===o.FLOAT&&(X=o.RGBA32F),it===o.HALF_FLOAT&&(X=o.RGBA16F),it===o.UNSIGNED_BYTE&&(X=nt===Ze?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(X=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(X=o.RGB5_A1)}return(X===o.R16F||X===o.R32F||X===o.RG16F||X===o.RG32F||X===o.RGBA16F||X===o.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function q(L,b,it){return P(L,it)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function W(L){return L===Fn||L===mg||L===Co?o.NEAREST:o.LINEAR}function I(L){const b=L.target;b.removeEventListener("dispose",I),z(b),b.isVideoTexture&&g.delete(b)}function vt(L){const b=L.target;b.removeEventListener("dispose",vt),N(b)}function z(L){const b=r.get(L);if(b.__webglInit===void 0)return;const it=L.source,Pt=S.get(it);if(Pt){const Rt=Pt[b.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&E(L),Object.keys(Pt).length===0&&S.delete(it)}r.remove(L)}function E(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const it=L.source,Pt=S.get(it);delete Pt[b.__cacheKey],h.memory.textures--}function N(L){const b=L.texture,it=r.get(L),Pt=r.get(b);if(Pt.__webglTexture!==void 0&&(o.deleteTexture(Pt.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(it.__webglFramebuffer[Rt]))for(let X=0;X<it.__webglFramebuffer[Rt].length;X++)o.deleteFramebuffer(it.__webglFramebuffer[Rt][X]);else o.deleteFramebuffer(it.__webglFramebuffer[Rt]);it.__webglDepthbuffer&&o.deleteRenderbuffer(it.__webglDepthbuffer[Rt])}else{if(Array.isArray(it.__webglFramebuffer))for(let Rt=0;Rt<it.__webglFramebuffer.length;Rt++)o.deleteFramebuffer(it.__webglFramebuffer[Rt]);else o.deleteFramebuffer(it.__webglFramebuffer);if(it.__webglDepthbuffer&&o.deleteRenderbuffer(it.__webglDepthbuffer),it.__webglMultisampledFramebuffer&&o.deleteFramebuffer(it.__webglMultisampledFramebuffer),it.__webglColorRenderbuffer)for(let Rt=0;Rt<it.__webglColorRenderbuffer.length;Rt++)it.__webglColorRenderbuffer[Rt]&&o.deleteRenderbuffer(it.__webglColorRenderbuffer[Rt]);it.__webglDepthRenderbuffer&&o.deleteRenderbuffer(it.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Rt=0,X=b.length;Rt<X;Rt++){const nt=r.get(b[Rt]);nt.__webglTexture&&(o.deleteTexture(nt.__webglTexture),h.memory.textures--),r.remove(b[Rt])}r.remove(b),r.remove(L)}let _t=0;function wt(){_t=0}function J(){const L=_t;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),_t+=1,L}function ct(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function V(L,b){const it=r.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&it.__version!==L.version){const Pt=L.image;if(Pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(it,L,b);return}}i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+b)}function lt(L,b){const it=r.get(L);if(L.version>0&&it.__version!==L.version){pt(it,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+b)}function at(L,b){const it=r.get(L);if(L.version>0&&it.__version!==L.version){pt(it,L,b);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+b)}function ht(L,b){const it=r.get(L);if(L.version>0&&it.__version!==L.version){bt(it,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+b)}const C={[xd]:o.REPEAT,[Ti]:o.CLAMP_TO_EDGE,[Sd]:o.MIRRORED_REPEAT},Q={[Fn]:o.NEAREST,[mg]:o.NEAREST_MIPMAP_NEAREST,[Co]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},mt={[Cx]:o.NEVER,[Px]:o.ALWAYS,[Dx]:o.LESS,[n0]:o.LEQUAL,[Lx]:o.EQUAL,[Ox]:o.GEQUAL,[Ux]:o.GREATER,[Nx]:o.NOTEQUAL};function Dt(L,b,it){if(b.type===sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===Bf||b.magFilter===Co||b.magFilter===_r||b.minFilter===Vn||b.minFilter===Bf||b.minFilter===Co||b.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),it?(o.texParameteri(L,o.TEXTURE_WRAP_S,C[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,C[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,C[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Q[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Q[b.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(b.wrapS!==Ti||b.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,W(b.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,W(b.minFilter)),b.minFilter!==Fn&&b.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,mt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Pt=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Fn||b.minFilter!==Co&&b.minFilter!==_r||b.type===sa&&e.has("OES_texture_float_linear")===!1||d===!1&&b.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||r.get(b).__currentAnisotropy)&&(o.texParameterf(L,Pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy)}}function j(L,b){let it=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const Pt=b.source;let Rt=S.get(Pt);Rt===void 0&&(Rt={},S.set(Pt,Rt));const X=ct(b);if(X!==L.__cacheKey){Rt[X]===void 0&&(Rt[X]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),Rt[X].usedTimes++;const nt=Rt[L.__cacheKey];nt!==void 0&&(Rt[L.__cacheKey].usedTimes--,nt.usedTimes===0&&E(b)),L.__cacheKey=X,L.__webglTexture=Rt[X].texture}return it}function pt(L,b,it){let Pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Pt=o.TEXTURE_3D);const Rt=j(L,b),X=b.source;i.bindTexture(Pt,L.__webglTexture,o.TEXTURE0+it);const nt=r.get(X);if(X.version!==nt.__version||Rt===!0){i.activeTexture(o.TEXTURE0+it);const ot=Ve.getPrimaries(Ve.workingColorSpace),dt=b.colorSpace===hi?null:Ve.getPrimaries(b.colorSpace),ft=b.colorSpace===hi||ot===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Mt=_(b)&&v(b.image)===!1;let rt=R(b.image,Mt,!1,l.maxTextureSize);rt=ce(b,rt);const le=v(rt)||d,Xt=u.convert(b.format,b.colorSpace);let Lt=u.convert(b.type),Ft=F(b.internalFormat,Xt,Lt,b.colorSpace,b.isVideoTexture);Dt(Pt,b,le);let kt;const Nt=b.mipmaps,O=d&&b.isVideoTexture!==!0&&Ft!==$_,gt=nt.__version===void 0||Rt===!0,Ut=X.dataReady,zt=q(b,rt,le);if(b.isDepthTexture)Ft=o.DEPTH_COMPONENT,d?b.type===sa?Ft=o.DEPTH_COMPONENT32F:b.type===Ia?Ft=o.DEPTH_COMPONENT24:b.type===vr?Ft=o.DEPTH24_STENCIL8:Ft=o.DEPTH_COMPONENT16:b.type===sa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===yr&&Ft===o.DEPTH_COMPONENT&&b.type!==Rd&&b.type!==Ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ia,Lt=u.convert(b.type)),b.format===Rs&&Ft===o.DEPTH_COMPONENT&&(Ft=o.DEPTH_STENCIL,b.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=vr,Lt=u.convert(b.type))),gt&&(O?i.texStorage2D(o.TEXTURE_2D,1,Ft,rt.width,rt.height):i.texImage2D(o.TEXTURE_2D,0,Ft,rt.width,rt.height,0,Xt,Lt,null));else if(b.isDataTexture)if(Nt.length>0&&le){O&&gt&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,Nt[0].width,Nt[0].height);for(let U=0,At=Nt.length;U<At;U++)kt=Nt[U],O?Ut&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,Xt,Lt,kt.data):i.texImage2D(o.TEXTURE_2D,U,Ft,kt.width,kt.height,0,Xt,Lt,kt.data);b.generateMipmaps=!1}else O?(gt&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,rt.width,rt.height),Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,rt.width,rt.height,Xt,Lt,rt.data)):i.texImage2D(o.TEXTURE_2D,0,Ft,rt.width,rt.height,0,Xt,Lt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ft,Nt[0].width,Nt[0].height,rt.depth);for(let U=0,At=Nt.length;U<At;U++)kt=Nt[U],b.format!==bi?Xt!==null?O?Ut&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,kt.width,kt.height,rt.depth,Xt,kt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,Ft,kt.width,kt.height,rt.depth,0,kt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,kt.width,kt.height,rt.depth,Xt,Lt,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,Ft,kt.width,kt.height,rt.depth,0,Xt,Lt,kt.data)}else{O&&gt&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,Nt[0].width,Nt[0].height);for(let U=0,At=Nt.length;U<At;U++)kt=Nt[U],b.format!==bi?Xt!==null?O?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,Xt,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,Ft,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ut&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,Xt,Lt,kt.data):i.texImage2D(o.TEXTURE_2D,U,Ft,kt.width,kt.height,0,Xt,Lt,kt.data)}else if(b.isDataArrayTexture)O?(gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ft,rt.width,rt.height,rt.depth),Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Xt,Lt,rt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,Xt,Lt,rt.data);else if(b.isData3DTexture)O?(gt&&i.texStorage3D(o.TEXTURE_3D,zt,Ft,rt.width,rt.height,rt.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Xt,Lt,rt.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,Xt,Lt,rt.data);else if(b.isFramebufferTexture){if(gt)if(O)i.texStorage2D(o.TEXTURE_2D,zt,Ft,rt.width,rt.height);else{let U=rt.width,At=rt.height;for(let Tt=0;Tt<zt;Tt++)i.texImage2D(o.TEXTURE_2D,Tt,Ft,U,At,0,Xt,Lt,null),U>>=1,At>>=1}}else if(Nt.length>0&&le){O&&gt&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,Nt[0].width,Nt[0].height);for(let U=0,At=Nt.length;U<At;U++)kt=Nt[U],O?Ut&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Xt,Lt,kt):i.texImage2D(o.TEXTURE_2D,U,Ft,Xt,Lt,kt);b.generateMipmaps=!1}else O?(gt&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,rt.width,rt.height),Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Xt,Lt,rt)):i.texImage2D(o.TEXTURE_2D,0,Ft,Xt,Lt,rt);P(b,le)&&D(Pt),nt.__version=X.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function bt(L,b,it){if(b.image.length!==6)return;const Pt=j(L,b),Rt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+it);const X=r.get(Rt);if(Rt.version!==X.__version||Pt===!0){i.activeTexture(o.TEXTURE0+it);const nt=Ve.getPrimaries(Ve.workingColorSpace),ot=b.colorSpace===hi?null:Ve.getPrimaries(b.colorSpace),dt=b.colorSpace===hi||nt===ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const ft=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,rt=[];for(let U=0;U<6;U++)!ft&&!Mt?rt[U]=R(b.image[U],!1,!0,l.maxCubemapSize):rt[U]=Mt?b.image[U].image:b.image[U],rt[U]=ce(b,rt[U]);const le=rt[0],Xt=v(le)||d,Lt=u.convert(b.format,b.colorSpace),Ft=u.convert(b.type),kt=F(b.internalFormat,Lt,Ft,b.colorSpace),Nt=d&&b.isVideoTexture!==!0,O=X.__version===void 0||Pt===!0,gt=Rt.dataReady;let Ut=q(b,le,Xt);Dt(o.TEXTURE_CUBE_MAP,b,Xt);let zt;if(ft){Nt&&O&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,kt,le.width,le.height);for(let U=0;U<6;U++){zt=rt[U].mipmaps;for(let At=0;At<zt.length;At++){const Tt=zt[At];b.format!==bi?Lt!==null?Nt?gt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At,0,0,Tt.width,Tt.height,Lt,Tt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At,0,0,Tt.width,Tt.height,Lt,Ft,Tt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At,kt,Tt.width,Tt.height,0,Lt,Ft,Tt.data)}}}else{zt=b.mipmaps,Nt&&O&&(zt.length>0&&Ut++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,kt,rt[0].width,rt[0].height));for(let U=0;U<6;U++)if(Mt){Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,rt[U].width,rt[U].height,Lt,Ft,rt[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,kt,rt[U].width,rt[U].height,0,Lt,Ft,rt[U].data);for(let At=0;At<zt.length;At++){const jt=zt[At].image[U].image;Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At+1,0,0,jt.width,jt.height,Lt,Ft,jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At+1,kt,jt.width,jt.height,0,Lt,Ft,jt.data)}}else{Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Lt,Ft,rt[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,kt,Lt,Ft,rt[U]);for(let At=0;At<zt.length;At++){const Tt=zt[At];Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At+1,0,0,Lt,Ft,Tt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,At+1,kt,Lt,Ft,Tt.image[U])}}}P(b,Xt)&&D(o.TEXTURE_CUBE_MAP),X.__version=Rt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Yt(L,b,it,Pt,Rt,X){const nt=u.convert(it.format,it.colorSpace),ot=u.convert(it.type),dt=F(it.internalFormat,nt,ot,it.colorSpace);if(!r.get(b).__hasExternalTextures){const Mt=Math.max(1,b.width>>X),rt=Math.max(1,b.height>>X);Rt===o.TEXTURE_3D||Rt===o.TEXTURE_2D_ARRAY?i.texImage3D(Rt,X,dt,Mt,rt,b.depth,0,nt,ot,null):i.texImage2D(Rt,X,dt,Mt,rt,0,nt,ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Zt(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Pt,Rt,r.get(it).__webglTexture,0,se(b)):(Rt===o.TEXTURE_2D||Rt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Pt,Rt,r.get(it).__webglTexture,X),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(L,b,it){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let Pt=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(it||Zt(b)){const Rt=b.depthTexture;Rt&&Rt.isDepthTexture&&(Rt.type===sa?Pt=o.DEPTH_COMPONENT32F:Rt.type===Ia&&(Pt=o.DEPTH_COMPONENT24));const X=se(b);Zt(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X,Pt,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,X,Pt,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,Pt,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const Pt=se(b);it&&Zt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,o.DEPTH24_STENCIL8,b.width,b.height):Zt(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const Pt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Rt=0;Rt<Pt.length;Rt++){const X=Pt[Rt],nt=u.convert(X.format,X.colorSpace),ot=u.convert(X.type),dt=F(X.internalFormat,nt,ot,X.colorSpace),ft=se(b);it&&Zt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,dt,b.width,b.height):Zt(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft,dt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,dt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const Pt=r.get(b.depthTexture).__webglTexture,Rt=se(b);if(b.depthTexture.format===yr)Zt(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Pt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Pt,0);else if(b.depthTexture.format===Rs)Zt(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Pt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Pt,0);else throw new Error("Unknown depthTexture format")}function Kt(L){const b=r.get(L),it=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Gt(b.__webglFramebuffer,L)}else if(it){b.__webglDepthbuffer=[];for(let Pt=0;Pt<6;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[Pt]),b.__webglDepthbuffer[Pt]=o.createRenderbuffer(),Ht(b.__webglDepthbuffer[Pt],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ht(b.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(L,b,it){const Pt=r.get(L);b!==void 0&&Yt(Pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Kt(L)}function et(L){const b=L.texture,it=r.get(L),Pt=r.get(b);L.addEventListener("dispose",vt),L.isWebGLMultipleRenderTargets!==!0&&(Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture()),Pt.__version=b.version,h.memory.textures++);const Rt=L.isWebGLCubeRenderTarget===!0,X=L.isWebGLMultipleRenderTargets===!0,nt=v(L)||d;if(Rt){it.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(d&&b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[ot]=[];for(let dt=0;dt<b.mipmaps.length;dt++)it.__webglFramebuffer[ot][dt]=o.createFramebuffer()}else it.__webglFramebuffer[ot]=o.createFramebuffer()}else{if(d&&b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)it.__webglFramebuffer[ot]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(X)if(l.drawBuffers){const ot=L.texture;for(let dt=0,ft=ot.length;dt<ft;dt++){const Mt=r.get(ot[dt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&L.samples>0&&Zt(L)===!1){const ot=X?b:[b];it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let dt=0;dt<ot.length;dt++){const ft=ot[dt];it.__webglColorRenderbuffer[dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[dt]);const Mt=u.convert(ft.format,ft.colorSpace),rt=u.convert(ft.type),le=F(ft.internalFormat,Mt,rt,ft.colorSpace,L.isXRRenderTarget===!0),Xt=se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,le,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+dt,o.RENDERBUFFER,it.__webglColorRenderbuffer[dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(it.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,Pt.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,b,nt);for(let ot=0;ot<6;ot++)if(d&&b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)Yt(it.__webglFramebuffer[ot][dt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else Yt(it.__webglFramebuffer[ot],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);P(b,nt)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(X){const ot=L.texture;for(let dt=0,ft=ot.length;dt<ft;dt++){const Mt=ot[dt],rt=r.get(Mt);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture),Dt(o.TEXTURE_2D,Mt,nt),Yt(it.__webglFramebuffer,L,Mt,o.COLOR_ATTACHMENT0+dt,o.TEXTURE_2D,0),P(Mt,nt)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let ot=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(d?ot=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(ot,Pt.__webglTexture),Dt(ot,b,nt),d&&b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)Yt(it.__webglFramebuffer[dt],L,b,o.COLOR_ATTACHMENT0,ot,dt);else Yt(it.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,ot,0);P(b,nt)&&D(ot),i.unbindTexture()}L.depthBuffer&&Kt(L)}function Oe(L){const b=v(L)||d,it=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Pt=0,Rt=it.length;Pt<Rt;Pt++){const X=it[Pt];if(P(X,b)){const nt=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ot=r.get(X).__webglTexture;i.bindTexture(nt,ot),D(nt),i.unbindTexture()}}}function ne(L){if(d&&L.samples>0&&Zt(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],it=L.width,Pt=L.height;let Rt=o.COLOR_BUFFER_BIT;const X=[],nt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=r.get(L),dt=L.isWebGLMultipleRenderTargets===!0;if(dt)for(let ft=0;ft<b.length;ft++)i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){X.push(o.COLOR_ATTACHMENT0+ft),L.depthBuffer&&X.push(nt);const Mt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Mt===!1&&(L.depthBuffer&&(Rt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Rt|=o.STENCIL_BUFFER_BIT)),dt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ot.__webglColorRenderbuffer[ft]),Mt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[nt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[nt])),dt){const rt=r.get(b[ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,rt,0)}o.blitFramebuffer(0,0,it,Pt,0,0,it,Pt,Rt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,X)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),dt)for(let ft=0;ft<b.length;ft++){i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,ot.__webglColorRenderbuffer[ft]);const Mt=r.get(b[ft]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function se(L){return Math.min(l.maxSamples,L.samples)}function Zt(L){const b=r.get(L);return d&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function ce(L,b){const it=L.colorSpace,Pt=L.format,Rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Md||it!==la&&it!==hi&&(Ve.getTransfer(it)===Ze?d===!1?e.has("EXT_sRGB")===!0&&Pt===bi?(L.format=Md,L.minFilter=Vn,L.generateMipmaps=!1):b=a0.sRGBToLinear(b):(Pt!==bi||Rt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}this.allocateTextureUnit=J,this.resetTextureUnits=wt,this.setTexture2D=V,this.setTexture2DArray=lt,this.setTexture3D=at,this.setTextureCube=ht,this.rebindTextures=ae,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Zt}function Zb(o,e,i){const r=i.isWebGL2;function l(u,h=hi){let d;const p=Ve.getTransfer(h);if(u===Va)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vx)return o.BYTE;if(u===yx)return o.SHORT;if(u===Rd)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Ia)return o.UNSIGNED_INT;if(u===sa)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===xx)return o.ALPHA;if(u===bi)return o.RGBA;if(u===Sx)return o.LUMINANCE;if(u===Mx)return o.LUMINANCE_ALPHA;if(u===yr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Md)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===Ex)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===Tx)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Ze)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Ff)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Ff)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===gg||u===_g||u===vg||u===yg)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===gg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===_g)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===vg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===xg||u===Sg)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(u===xg)return p===Ze?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Sg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Mg||u===Eg||u===Tg||u===bg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Mg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Eg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Tg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===bg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Ag)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===wg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Rg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Cg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Dg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Lg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ug)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Ng)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Og)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Pg)return p===Ze?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===zg||u===Bg)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(u===Vf)return p===Ze?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===zg)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Bg)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===bx||u===Fg||u===Ig||u===Hg)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(u===Vf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Fg)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Ig)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Hg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Kb extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=g.position.distanceTo(y.position),M=.02,A=.005;m.inputState.pinching&&S>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Jb=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Wn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new ca({extensions:{fragDepth:!0},vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new $n(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,y=null,S=null,M=null,A=null;const R=new tA,v=i.getContextAttributes();let _=null,P=null;const D=[],F=[],q=new pe;let W=null;const I=new Jn;I.layers.enable(1),I.viewport=new Ke;const vt=new Jn;vt.layers.enable(2),vt.viewport=new Ke;const z=[I,vt],E=new Kb;E.layers.enable(1),E.layers.enable(2);let N=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pt=D[j];return pt===void 0&&(pt=new fd,D[j]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(j){let pt=D[j];return pt===void 0&&(pt=new fd,D[j]=pt),pt.getGripSpace()},this.getHand=function(j){let pt=D[j];return pt===void 0&&(pt=new fd,D[j]=pt),pt.getHandSpace()};function wt(j){const pt=F.indexOf(j.inputSource);if(pt===-1)return;const bt=D[pt];bt!==void 0&&(bt.update(j.inputSource,j.frame,m||h),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){l.removeEventListener("select",wt),l.removeEventListener("selectstart",wt),l.removeEventListener("selectend",wt),l.removeEventListener("squeeze",wt),l.removeEventListener("squeezestart",wt),l.removeEventListener("squeezeend",wt),l.removeEventListener("end",J),l.removeEventListener("inputsourceschange",ct);for(let j=0;j<D.length;j++){const pt=F[j];pt!==null&&(F[j]=null,D[j].disconnect(pt))}N=null,_t=null,R.reset(),e.setRenderTarget(_),M=null,S=null,y=null,l=null,P=null,Dt.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",wt),l.addEventListener("selectstart",wt),l.addEventListener("selectend",wt),l.addEventListener("squeeze",wt),l.addEventListener("squeezestart",wt),l.addEventListener("squeezeend",wt),l.addEventListener("end",J),l.addEventListener("inputsourceschange",ct),v.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(q),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pt={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Sr(M.framebufferWidth,M.framebufferHeight,{format:bi,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let pt=null,bt=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=v.stencil?Rs:yr,bt=v.stencil?vr:Ia);const Ht={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(Ht),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Sr(S.textureWidth,S.textureHeight,{format:bi,type:Va,depthTexture:new _0(S.textureWidth,S.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Gt=e.properties.get(P);Gt.__ignoreDepthValues=S.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ct(j){for(let pt=0;pt<j.removed.length;pt++){const bt=j.removed[pt],Yt=F.indexOf(bt);Yt>=0&&(F[Yt]=null,D[Yt].disconnect(bt))}for(let pt=0;pt<j.added.length;pt++){const bt=j.added[pt];let Yt=F.indexOf(bt);if(Yt===-1){for(let Gt=0;Gt<D.length;Gt++)if(Gt>=F.length){F.push(bt),Yt=Gt;break}else if(F[Gt]===null){F[Gt]=bt,Yt=Gt;break}if(Yt===-1)break}const Ht=D[Yt];Ht&&Ht.connect(bt)}}const V=new Z,lt=new Z;function at(j,pt,bt){V.setFromMatrixPosition(pt.matrixWorld),lt.setFromMatrixPosition(bt.matrixWorld);const Yt=V.distanceTo(lt),Ht=pt.projectionMatrix.elements,Gt=bt.projectionMatrix.elements,Kt=Ht[14]/(Ht[10]-1),ae=Ht[14]/(Ht[10]+1),et=(Ht[9]+1)/Ht[5],Oe=(Ht[9]-1)/Ht[5],ne=(Ht[8]-1)/Ht[0],se=(Gt[8]+1)/Gt[0],Zt=Kt*ne,be=Kt*se,ce=Yt/(-ne+se),L=ce*-ne;pt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(L),j.translateZ(ce),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=Kt+ce,it=ae+ce,Pt=Zt-L,Rt=be+(Yt-L),X=et*ae/it*b,nt=Oe*ae/it*b;j.projectionMatrix.makePerspective(Pt,Rt,X,nt,b,it),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ht(j,pt){pt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;R.texture!==null&&(j.near=R.depthNear,j.far=R.depthFar),E.near=vt.near=I.near=j.near,E.far=vt.far=I.far=j.far,(N!==E.near||_t!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,_t=E.far,I.near=N,I.far=_t,vt.near=N,vt.far=_t,I.updateProjectionMatrix(),vt.updateProjectionMatrix(),j.updateProjectionMatrix());const pt=j.parent,bt=E.cameras;ht(E,pt);for(let Yt=0;Yt<bt.length;Yt++)ht(bt[Yt],pt);bt.length===2?at(E,I,vt):E.projectionMatrix.copy(I.projectionMatrix),C(j,E,pt)};function C(j,pt,bt){bt===null?j.matrix.copy(pt.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(pt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Io*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(j){p=j,S!==null&&(S.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return R.texture!==null};let Q=null;function mt(j,pt){if(g=pt.getViewerPose(m||h),A=pt,g!==null){const bt=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Yt=!1;bt.length!==E.cameras.length&&(E.cameras.length=0,Yt=!0);for(let Gt=0;Gt<bt.length;Gt++){const Kt=bt[Gt];let ae=null;if(M!==null)ae=M.getViewport(Kt);else{const Oe=y.getViewSubImage(S,Kt);ae=Oe.viewport,Gt===0&&(e.setRenderTargetTextures(P,Oe.colorTexture,S.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(P))}let et=z[Gt];et===void 0&&(et=new Jn,et.layers.enable(Gt),et.viewport=new Ke,z[Gt]=et),et.matrix.fromArray(Kt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Kt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ae.x,ae.y,ae.width,ae.height),Gt===0&&(E.matrix.copy(et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Yt===!0&&E.cameras.push(et)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Gt=y.getDepthInformation(bt[0]);Gt&&Gt.isValid&&Gt.texture&&R.init(e,Gt,l.renderState)}}for(let bt=0;bt<D.length;bt++){const Yt=F[bt],Ht=D[bt];Yt!==null&&Ht!==void 0&&Ht.update(Yt,pt,m||h)}R.render(e,E),Q&&Q(j,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),A=null}const Dt=new m0;Dt.setAnimationLoop(mt),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,d0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,P,D,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),S(v,_),_.isMeshPhysicalMaterial&&M(v,_,F)):_.isMeshMatcapMaterial?(u(v,_),A(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,P,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===kn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===kn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(v.envMap.value=P,v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,P,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function S(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,P){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const P=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(P,D){const F=D.program;r.uniformBlockBinding(P,F)}function m(P,D){let F=l[P.id];F===void 0&&(A(P),F=g(P),l[P.id]=F,P.addEventListener("dispose",v));const q=D.program;r.updateUBOMapping(P,q);const W=e.render.frame;u[P.id]!==W&&(S(P),u[P.id]=W)}function g(P){const D=y();P.__bindingPointIndex=D;const F=o.createBuffer(),q=P.__size,W=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,q,W),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,F),F}function y(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const D=l[P.id],F=P.uniforms,q=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let W=0,I=F.length;W<I;W++){const vt=Array.isArray(F[W])?F[W]:[F[W]];for(let z=0,E=vt.length;z<E;z++){const N=vt[z];if(M(N,W,z,q)===!0){const _t=N.__offset,wt=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let ct=0;ct<wt.length;ct++){const V=wt[ct],lt=R(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,_t+J,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,J),J+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,_t,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,D,F,q){const W=P.value,I=D+"_"+F;if(q[I]===void 0)return typeof W=="number"||typeof W=="boolean"?q[I]=W:q[I]=W.clone(),!0;{const vt=q[I];if(typeof W=="number"||typeof W=="boolean"){if(vt!==W)return q[I]=W,!0}else if(vt.equals(W)===!1)return vt.copy(W),!0}return!1}function A(P){const D=P.uniforms;let F=0;const q=16;for(let I=0,vt=D.length;I<vt;I++){const z=Array.isArray(D[I])?D[I]:[D[I]];for(let E=0,N=z.length;E<N;E++){const _t=z[E],wt=Array.isArray(_t.value)?_t.value:[_t.value];for(let J=0,ct=wt.length;J<ct;J++){const V=wt[J],lt=R(V),at=F%q;at!==0&&q-at<lt.boundary&&(F+=q-at),_t.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),_t.__offset=F,F+=lt.storage}}}const W=F%q;return W>0&&(F+=q-W),P.__size=F,P.__cache={},this}function R(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function v(P){const D=P.target;D.removeEventListener("dispose",v);const F=h.indexOf(D.__bindingPointIndex);h.splice(F,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=Kx(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=h;const M=new Uint32Array(4),A=new Int32Array(4);let R=null,v=null;const _=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Ga,this.toneMappingExposure=1;const D=this;let F=!1,q=0,W=0,I=null,vt=-1,z=null;const E=new Ke,N=new Ke;let _t=null;const wt=new Le(0);let J=0,ct=i.width,V=i.height,lt=1,at=null,ht=null;const C=new Ke(0,0,ct,V),Q=new Ke(0,0,ct,V);let mt=!1;const Dt=new Ud;let j=!1,pt=!1,bt=null;const Yt=new on,Ht=new pe,Gt=new Z,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return I===null?lt:1}let et=r;function Oe(T,H){for(let G=0;G<T.length;G++){const k=T[G],Y=i.getContext(k,H);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",At,!1),et===null){const H=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&H.shift(),et=Oe(H,T),et===null)throw Oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&et instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),et.getShaderPrecisionFormat===void 0&&(et.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,se,Zt,be,ce,L,b,it,Pt,Rt,X,nt,ot,dt,ft,Mt,rt,le,Xt,Lt,Ft,kt,Nt,O;function gt(){ne=new uT(et),se=new aT(et,ne,e),ne.init(se),kt=new Zb(et,ne,se),Zt=new Yb(et,ne,se),be=new hT(et),ce=new Nb,L=new jb(et,ne,Zt,ce,se,kt,be),b=new sT(D),it=new cT(D),Pt=new SS(et,se),Nt=new nT(et,ne,Pt,se),Rt=new fT(et,Pt,be,Nt),X=new _T(et,Rt,Pt,be),Xt=new gT(et,se,L),Mt=new rT(ce),nt=new Ub(D,b,it,ne,se,Nt,Mt),ot=new nA(D,ce),dt=new Pb,ft=new Gb(ne,se),le=new eT(D,b,it,Zt,X,S,p),rt=new qb(D,X,se),O=new iA(et,be,se,Zt),Lt=new iT(et,ne,be,se),Ft=new dT(et,ne,be,se),be.programs=nt.programs,D.capabilities=se,D.extensions=ne,D.properties=ce,D.renderLists=dt,D.shadowMap=rt,D.state=Zt,D.info=be}gt();const Ut=new eA(D,et);this.xr=Ut,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(T){T!==void 0&&(lt=T,this.setSize(ct,V,!1))},this.getSize=function(T){return T.set(ct,V)},this.setSize=function(T,H,G=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=T,V=H,i.width=Math.floor(T*lt),i.height=Math.floor(H*lt),G===!0&&(i.style.width=T+"px",i.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(ct*lt,V*lt).floor()},this.setDrawingBufferSize=function(T,H,G){ct=T,V=H,lt=G,i.width=Math.floor(T*G),i.height=Math.floor(H*G),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,H,G,k){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,H,G,k),Zt.viewport(E.copy(C).multiplyScalar(lt).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,H,G,k){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,H,G,k),Zt.scissor(N.copy(Q).multiplyScalar(lt).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(T){Zt.setScissorTest(mt=T)},this.setOpaqueSort=function(T){at=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(T=!0,H=!0,G=!0){let k=0;if(T){let Y=!1;if(I!==null){const St=I.texture.format;Y=St===J_||St===Q_||St===K_}if(Y){const St=I.texture.type,Ot=St===Va||St===Ia||St===Rd||St===vr||St===j_||St===Z_,Bt=le.getClearColor(),Vt=le.getClearAlpha(),ee=Bt.r,te=Bt.g,$t=Bt.b;Ot?(M[0]=ee,M[1]=te,M[2]=$t,M[3]=Vt,et.clearBufferuiv(et.COLOR,0,M)):(A[0]=ee,A[1]=te,A[2]=$t,A[3]=Vt,et.clearBufferiv(et.COLOR,0,A))}else k|=et.COLOR_BUFFER_BIT}H&&(k|=et.DEPTH_BUFFER_BIT),G&&(k|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",At,!1),dt.dispose(),ft.dispose(),ce.dispose(),b.dispose(),it.dispose(),X.dispose(),Nt.dispose(),O.dispose(),nt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Xe),Ut.removeEventListener("sessionend",oe),bt&&(bt.dispose(),bt=null),we.stop()};function zt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const T=be.autoReset,H=rt.enabled,G=rt.autoUpdate,k=rt.needsUpdate,Y=rt.type;gt(),be.autoReset=T,rt.enabled=H,rt.autoUpdate=G,rt.needsUpdate=k,rt.type=Y}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const H=T.target;H.removeEventListener("dispose",Tt),jt(H)}function jt(T){Jt(T),ce.remove(T)}function Jt(T){const H=ce.get(T).programs;H!==void 0&&(H.forEach(function(G){nt.releaseProgram(G)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,G,k,Y,St){H===null&&(H=Kt);const Ot=Y.isMesh&&Y.matrixWorld.determinant()<0,Bt=ei(T,H,G,k,Y);Zt.setMaterial(k,Ot);let Vt=G.index,ee=1;if(k.wireframe===!0){if(Vt=Rt.getWireframeAttribute(G),Vt===void 0)return;ee=2}const te=G.drawRange,$t=G.attributes.position;let Re=te.start*ee,Fe=(te.start+te.count)*ee;St!==null&&(Re=Math.max(Re,St.start*ee),Fe=Math.min(Fe,(St.start+St.count)*ee)),Vt!==null?(Re=Math.max(Re,0),Fe=Math.min(Fe,Vt.count)):$t!=null&&(Re=Math.max(Re,0),Fe=Math.min(Fe,$t.count));const ke=Fe-Re;if(ke<0||ke===1/0)return;Nt.setup(Y,k,Bt,G,Vt);let wn,Ie=Lt;if(Vt!==null&&(wn=Pt.get(Vt),Ie=Ft,Ie.setIndex(wn)),Y.isMesh)k.wireframe===!0?(Zt.setLineWidth(k.wireframeLinewidth*ae()),Ie.setMode(et.LINES)):Ie.setMode(et.TRIANGLES);else if(Y.isLine){let he=k.linewidth;he===void 0&&(he=1),Zt.setLineWidth(he*ae()),Y.isLineSegments?Ie.setMode(et.LINES):Y.isLineLoop?Ie.setMode(et.LINE_LOOP):Ie.setMode(et.LINE_STRIP)}else Y.isPoints?Ie.setMode(et.POINTS):Y.isSprite&&Ie.setMode(et.TRIANGLES);if(Y.isBatchedMesh)Ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ie.renderInstances(Re,ke,Y.count);else if(G.isInstancedBufferGeometry){const he=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,wi=Math.min(G.instanceCount,he);Ie.renderInstances(Re,ke,wi)}else Ie.render(Re,ke)};function ye(T,H,G){T.transparent===!0&&T.side===Pi&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,ze(T,H,G),T.side=Wa,T.needsUpdate=!0,ze(T,H,G),T.side=Pi):ze(T,H,G)}this.compile=function(T,H,G=null){G===null&&(G=T),v=ft.get(G),v.init(),P.push(v),G.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),T!==G&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(D._useLegacyLights);const k=new Set;return T.traverse(function(Y){const St=Y.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Bt=St[Ot];ye(Bt,G,Y),k.add(Bt)}else ye(St,G,Y),k.add(St)}),P.pop(),v=null,k},this.compileAsync=function(T,H,G=null){const k=this.compile(T,H,G);return new Promise(Y=>{function St(){if(k.forEach(function(Ot){ce.get(Ot).currentProgram.isReady()&&k.delete(Ot)}),k.size===0){Y(T);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let fe=null;function Ae(T){fe&&fe(T)}function Xe(){we.stop()}function oe(){we.start()}const we=new m0;we.setAnimationLoop(Ae),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(T){fe=T,Ut.setAnimationLoop(T),T===null?we.stop():we.start()},Ut.addEventListener("sessionstart",Xe),Ut.addEventListener("sessionend",oe),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(H),H=Ut.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,H,I),v=ft.get(T,P.length),v.init(),P.push(v),Yt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Dt.setFromProjectionMatrix(Yt),pt=this.localClippingEnabled,j=Mt.init(this.clippingPlanes,pt),R=dt.get(T,_.length),R.init(),_.push(R),Pe(T,H,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(at,ht),this.info.render.frame++,j===!0&&Mt.beginShadows();const G=v.state.shadowsArray;if(rt.render(G,T,H),j===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1)&&le.render(R,T),v.setupLights(D._useLegacyLights),H.isArrayCamera){const k=H.cameras;for(let Y=0,St=k.length;Y<St;Y++){const Ot=k[Y];mi(R,T,Ot,Ot.viewport)}}else mi(R,T,H);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(D,T,H),Nt.resetDefaultState(),vt=-1,z=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Pe(T,H,G,k){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Dt.intersectsSprite(T)){k&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Yt);const Ot=X.update(T),Bt=T.material;Bt.visible&&R.push(T,Ot,Bt,G,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Dt.intersectsObject(T))){const Ot=X.update(T),Bt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Gt.copy(Ot.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(Yt)),Array.isArray(Bt)){const Vt=Ot.groups;for(let ee=0,te=Vt.length;ee<te;ee++){const $t=Vt[ee],Re=Bt[$t.materialIndex];Re&&Re.visible&&R.push(T,Ot,Re,G,Gt.z,$t)}}else Bt.visible&&R.push(T,Ot,Bt,G,Gt.z,null)}}const St=T.children;for(let Ot=0,Bt=St.length;Ot<Bt;Ot++)Pe(St[Ot],H,G,k)}function mi(T,H,G,k){const Y=T.opaque,St=T.transmissive,Ot=T.transparent;v.setupLightsView(G),j===!0&&Mt.setGlobalState(D.clippingPlanes,G),St.length>0&&Ai(Y,St,H,G),k&&Zt.viewport(E.copy(k)),Y.length>0&&ti(Y,H,G),St.length>0&&ti(St,H,G),Ot.length>0&&ti(Ot,H,G),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Ai(T,H,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const St=se.isWebGL2;bt===null&&(bt=new Sr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Fo:Va,minFilter:_r,samples:St?4:0})),D.getDrawingBufferSize(Ht),St?bt.setSize(Ht.x,Ht.y):bt.setSize(xc(Ht.x),xc(Ht.y));const Ot=D.getRenderTarget();D.setRenderTarget(bt),D.getClearColor(wt),J=D.getClearAlpha(),J<1&&D.setClearColor(16777215,.5),D.clear();const Bt=D.toneMapping;D.toneMapping=Ga,ti(T,G,k),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt);let Vt=!1;for(let ee=0,te=H.length;ee<te;ee++){const $t=H[ee],Re=$t.object,Fe=$t.geometry,ke=$t.material,wn=$t.group;if(ke.side===Pi&&Re.layers.test(k.layers)){const Ie=ke.side;ke.side=kn,ke.needsUpdate=!0,ge(Re,G,k,Fe,ke,wn),ke.side=Ie,ke.needsUpdate=!0,Vt=!0}}Vt===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt)),D.setRenderTarget(Ot),D.setClearColor(wt,J),D.toneMapping=Bt}function ti(T,H,G){const k=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,St=T.length;Y<St;Y++){const Ot=T[Y],Bt=Ot.object,Vt=Ot.geometry,ee=k===null?Ot.material:k,te=Ot.group;Bt.layers.test(G.layers)&&ge(Bt,H,G,Vt,ee,te)}}function ge(T,H,G,k,Y,St){T.onBeforeRender(D,H,G,k,Y,St),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(D,H,G,k,T,St),Y.transparent===!0&&Y.side===Pi&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,D.renderBufferDirect(G,H,k,Y,T,St),Y.side=Wa,Y.needsUpdate=!0,D.renderBufferDirect(G,H,k,Y,T,St),Y.side=Pi):D.renderBufferDirect(G,H,k,Y,T,St),T.onAfterRender(D,H,G,k,Y,St)}function ze(T,H,G){H.isScene!==!0&&(H=Kt);const k=ce.get(T),Y=v.state.lights,St=v.state.shadowsArray,Ot=Y.state.version,Bt=nt.getParameters(T,Y.state,St,H,G),Vt=nt.getProgramCacheKey(Bt);let ee=k.programs;k.environment=T.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=(T.isMeshStandardMaterial?it:b).get(T.envMap||k.environment),ee===void 0&&(T.addEventListener("dispose",Tt),ee=new Map,k.programs=ee);let te=ee.get(Vt);if(te!==void 0){if(k.currentProgram===te&&k.lightsStateVersion===Ot)return tn(T,Bt),te}else Bt.uniforms=nt.getUniforms(T),T.onBuild(G,Bt,D),T.onBeforeCompile(Bt,D),te=nt.acquireProgram(Bt,Vt),ee.set(Vt,te),k.uniforms=Bt.uniforms;const $t=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($t.clippingPlanes=Mt.uniform),tn(T,Bt),k.needsLights=qt(T),k.lightsStateVersion=Ot,k.needsLights&&($t.ambientLightColor.value=Y.state.ambient,$t.lightProbe.value=Y.state.probe,$t.directionalLights.value=Y.state.directional,$t.directionalLightShadows.value=Y.state.directionalShadow,$t.spotLights.value=Y.state.spot,$t.spotLightShadows.value=Y.state.spotShadow,$t.rectAreaLights.value=Y.state.rectArea,$t.ltc_1.value=Y.state.rectAreaLTC1,$t.ltc_2.value=Y.state.rectAreaLTC2,$t.pointLights.value=Y.state.point,$t.pointLightShadows.value=Y.state.pointShadow,$t.hemisphereLights.value=Y.state.hemi,$t.directionalShadowMap.value=Y.state.directionalShadowMap,$t.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$t.spotShadowMap.value=Y.state.spotShadowMap,$t.spotLightMatrix.value=Y.state.spotLightMatrix,$t.spotLightMap.value=Y.state.spotLightMap,$t.pointShadowMap.value=Y.state.pointShadowMap,$t.pointShadowMatrix.value=Y.state.pointShadowMatrix),k.currentProgram=te,k.uniformsList=null,te}function qe(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=pc.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function tn(T,H){const G=ce.get(T);G.outputColorSpace=H.outputColorSpace,G.batching=H.batching,G.instancing=H.instancing,G.instancingColor=H.instancingColor,G.skinning=H.skinning,G.morphTargets=H.morphTargets,G.morphNormals=H.morphNormals,G.morphColors=H.morphColors,G.morphTargetsCount=H.morphTargetsCount,G.numClippingPlanes=H.numClippingPlanes,G.numIntersection=H.numClipIntersection,G.vertexAlphas=H.vertexAlphas,G.vertexTangents=H.vertexTangents,G.toneMapping=H.toneMapping}function ei(T,H,G,k,Y){H.isScene!==!0&&(H=Kt),L.resetTextureUnits();const St=H.fog,Ot=k.isMeshStandardMaterial?H.environment:null,Bt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:la,Vt=(k.isMeshStandardMaterial?it:b).get(k.envMap||Ot),ee=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,te=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),$t=!!G.morphAttributes.position,Re=!!G.morphAttributes.normal,Fe=!!G.morphAttributes.color;let ke=Ga;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ke=D.toneMapping);const wn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ie=wn!==void 0?wn.length:0,he=ce.get(k),wi=v.state.lights;if(j===!0&&(pt===!0||T!==z)){const In=T===z&&k.id===vt;Mt.setState(k,T,In)}let Be=!1;k.version===he.__version?(he.needsLights&&he.lightsStateVersion!==wi.state.version||he.outputColorSpace!==Bt||Y.isBatchedMesh&&he.batching===!1||!Y.isBatchedMesh&&he.batching===!0||Y.isInstancedMesh&&he.instancing===!1||!Y.isInstancedMesh&&he.instancing===!0||Y.isSkinnedMesh&&he.skinning===!1||!Y.isSkinnedMesh&&he.skinning===!0||Y.isInstancedMesh&&he.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&he.instancingColor===!1&&Y.instanceColor!==null||he.envMap!==Vt||k.fog===!0&&he.fog!==St||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==Mt.numPlanes||he.numIntersection!==Mt.numIntersection)||he.vertexAlphas!==ee||he.vertexTangents!==te||he.morphTargets!==$t||he.morphNormals!==Re||he.morphColors!==Fe||he.toneMapping!==ke||se.isWebGL2===!0&&he.morphTargetsCount!==Ie)&&(Be=!0):(Be=!0,he.__version=k.version);let gn=he.currentProgram;Be===!0&&(gn=ze(k,H,Y));let Qe=!1,gi=!1,_n=!1;const rn=gn.getUniforms(),Ri=he.uniforms;if(Zt.useProgram(gn.program)&&(Qe=!0,gi=!0,_n=!0),k.id!==vt&&(vt=k.id,gi=!0),Qe||z!==T){rn.setValue(et,"projectionMatrix",T.projectionMatrix),rn.setValue(et,"viewMatrix",T.matrixWorldInverse);const In=rn.map.cameraPosition;In!==void 0&&In.setValue(et,Gt.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&rn.setValue(et,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rn.setValue(et,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,gi=!0,_n=!0)}if(Y.isSkinnedMesh){rn.setOptional(et,Y,"bindMatrix"),rn.setOptional(et,Y,"bindMatrixInverse");const In=Y.skeleton;In&&(se.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),rn.setValue(et,"boneTexture",In.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(rn.setOptional(et,Y,"batchingTexture"),rn.setValue(et,"batchingTexture",Y._matricesTexture,L));const ua=G.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&se.isWebGL2===!0)&&Xt.update(Y,G,gn),(gi||he.receiveShadow!==Y.receiveShadow)&&(he.receiveShadow=Y.receiveShadow,rn.setValue(et,"receiveShadow",Y.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ri.envMap.value=Vt,Ri.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),gi&&(rn.setValue(et,"toneMappingExposure",D.toneMappingExposure),he.needsLights&&It(Ri,_n),St&&k.fog===!0&&ot.refreshFogUniforms(Ri,St),ot.refreshMaterialUniforms(Ri,k,lt,V,bt),pc.upload(et,qe(he),Ri,L)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pc.upload(et,qe(he),Ri,L),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rn.setValue(et,"center",Y.center),rn.setValue(et,"modelViewMatrix",Y.modelViewMatrix),rn.setValue(et,"normalMatrix",Y.normalMatrix),rn.setValue(et,"modelMatrix",Y.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const In=k.uniformsGroups;for(let Rn=0,Ns=In.length;Rn<Ns;Rn++)if(se.isWebGL2){const Os=In[Rn];O.update(Os,gn),O.bind(Os,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function It(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function qt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,H,G){ce.get(T.texture).__webglTexture=H,ce.get(T.depthTexture).__webglTexture=G;const k=ce.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const G=ce.get(T);G.__webglFramebuffer=H,G.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,G=0){I=T,q=H,W=G;let k=!0,Y=null,St=!1,Ot=!1;if(T){const Vt=ce.get(T);Vt.__useDefaultFramebuffer!==void 0?(Zt.bindFramebuffer(et.FRAMEBUFFER,null),k=!1):Vt.__webglFramebuffer===void 0?L.setupRenderTarget(T):Vt.__hasExternalTextures&&L.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);const ee=T.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ot=!0);const te=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[H])?Y=te[H][G]:Y=te[H],St=!0):se.isWebGL2&&T.samples>0&&L.useMultisampledRTT(T)===!1?Y=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[G]:Y=te,E.copy(T.viewport),N.copy(T.scissor),_t=T.scissorTest}else E.copy(C).multiplyScalar(lt).floor(),N.copy(Q).multiplyScalar(lt).floor(),_t=mt;if(Zt.bindFramebuffer(et.FRAMEBUFFER,Y)&&se.drawBuffers&&k&&Zt.drawBuffers(T,Y),Zt.viewport(E),Zt.scissor(N),Zt.setScissorTest(_t),St){const Vt=ce.get(T.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+H,Vt.__webglTexture,G)}else if(Ot){const Vt=ce.get(T.texture),ee=H||0;et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,Vt.__webglTexture,G||0,ee)}vt=-1},this.readRenderTargetPixels=function(T,H,G,k,Y,St,Ot){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){Zt.bindFramebuffer(et.FRAMEBUFFER,Bt);try{const Vt=T.texture,ee=Vt.format,te=Vt.type;if(ee!==bi&&kt.convert(ee)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=te===Fo&&(ne.has("EXT_color_buffer_half_float")||se.isWebGL2&&ne.has("EXT_color_buffer_float"));if(te!==Va&&kt.convert(te)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_TYPE)&&!(te===sa&&(se.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-k&&G>=0&&G<=T.height-Y&&et.readPixels(H,G,k,Y,kt.convert(ee),kt.convert(te),St)}finally{const Vt=I!==null?ce.get(I).__webglFramebuffer:null;Zt.bindFramebuffer(et.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(T,H,G=0){const k=Math.pow(2,-G),Y=Math.floor(H.image.width*k),St=Math.floor(H.image.height*k);L.setTexture2D(H,0),et.copyTexSubImage2D(et.TEXTURE_2D,G,0,0,T.x,T.y,Y,St),Zt.unbindTexture()},this.copyTextureToTexture=function(T,H,G,k=0){const Y=H.image.width,St=H.image.height,Ot=kt.convert(G.format),Bt=kt.convert(G.type);L.setTexture2D(G,0),et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,G.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,G.unpackAlignment),H.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,k,T.x,T.y,Y,St,Ot,Bt,H.image.data):H.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,k,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ot,H.mipmaps[0].data):et.texSubImage2D(et.TEXTURE_2D,k,T.x,T.y,Ot,Bt,H.image),k===0&&G.generateMipmaps&&et.generateMipmap(et.TEXTURE_2D),Zt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,G,k,Y=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=T.max.x-T.min.x+1,Ot=T.max.y-T.min.y+1,Bt=T.max.z-T.min.z+1,Vt=kt.convert(k.format),ee=kt.convert(k.type);let te;if(k.isData3DTexture)L.setTexture3D(k,0),te=et.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)L.setTexture2DArray(k,0),te=et.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,k.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,k.unpackAlignment);const $t=et.getParameter(et.UNPACK_ROW_LENGTH),Re=et.getParameter(et.UNPACK_IMAGE_HEIGHT),Fe=et.getParameter(et.UNPACK_SKIP_PIXELS),ke=et.getParameter(et.UNPACK_SKIP_ROWS),wn=et.getParameter(et.UNPACK_SKIP_IMAGES),Ie=G.isCompressedTexture?G.mipmaps[Y]:G.image;et.pixelStorei(et.UNPACK_ROW_LENGTH,Ie.width),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Ie.height),et.pixelStorei(et.UNPACK_SKIP_PIXELS,T.min.x),et.pixelStorei(et.UNPACK_SKIP_ROWS,T.min.y),et.pixelStorei(et.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?et.texSubImage3D(te,Y,H.x,H.y,H.z,St,Ot,Bt,Vt,ee,Ie.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),et.compressedTexSubImage3D(te,Y,H.x,H.y,H.z,St,Ot,Bt,Vt,Ie.data)):et.texSubImage3D(te,Y,H.x,H.y,H.z,St,Ot,Bt,Vt,ee,Ie),et.pixelStorei(et.UNPACK_ROW_LENGTH,$t),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Re),et.pixelStorei(et.UNPACK_SKIP_PIXELS,Fe),et.pixelStorei(et.UNPACK_SKIP_ROWS,ke),et.pixelStorei(et.UNPACK_SKIP_IMAGES,wn),Y===0&&k.generateMipmaps&&et.generateMipmap(te),Zt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),Zt.unbindTexture()},this.resetState=function(){q=0,W=0,I=null,Zt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Cd?"display-p3":"srgb",i.unpackColorSpace=Ve.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?xr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?bn:la}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class T0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L_=new on,bd=new Ld,fc=new bc,dc=new Z;class sA extends An{constructor(e=new Fi,i=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;L_.copy(l).invert(),bd.copy(e.ray).applyMatrix4(L_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const S=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let A=S,R=M;A<R;A++){const v=m.getX(A);dc.fromBufferAttribute(y,v),U_(dc,v,p,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(y.count,h.start+h.count);for(let A=S,R=M;A<R;A++)dc.fromBufferAttribute(y,A),U_(dc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function U_(o,e,i,r,l,u,h){const d=bd.distanceSqToPoint(o);if(d<i){const p=new Z;bd.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class Mc extends Fi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],y=new Z,S=new Z,M=[],A=[],R=[],v=[];for(let _=0;_<=r;_++){const P=[],D=_/r;let F=0;_===0&&h===0?F=.5/i:_===r&&p===Math.PI&&(F=-.5/i);for(let q=0;q<=i;q++){const W=q/i;y.x=-e*Math.cos(l+W*u)*Math.sin(h+D*d),y.y=e*Math.cos(h+D*d),y.z=e*Math.sin(l+W*u)*Math.sin(h+D*d),A.push(y.x,y.y,y.z),S.copy(y).normalize(),R.push(S.x,S.y,S.z),v.push(W+F,1-D),P.push(m++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const D=g[_][P+1],F=g[_][P],q=g[_+1][P],W=g[_+1][P+1];(_!==0||h>0)&&M.push(D,F,W),(_!==r-1||p<Math.PI)&&M.push(F,q,W)}this.setIndex(M),this.setAttribute("position",new pi(A,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const dd=new on,N_=new Z,O_=new Z;class b0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;N_.setFromMatrixPosition(e.matrixWorld),i.position.copy(N_),O_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(O_),i.updateMatrixWorld(),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const P_=new on,Oo=new Z,hd=new Z;class lA extends b0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Oo),hd.copy(r.position),hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(hd),r.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),P_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P_)}}class z_ extends Od{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends b0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B_ extends Od{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F_ extends Od{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class I_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const H_={type:"change"},pd={type:"start"},G_={type:"end"},hc=new Ld,V_=new Fa,uA=Math.cos(70*xs.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",ft),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(H_),r.update(),u=l.NONE},this.update=function(){const O=new Z,gt=new Mr().setFromUnitVectors(e.up,new Z(0,1,0)),Ut=gt.clone().invert(),zt=new Z,U=new Mr,At=new Z,Tt=2*Math.PI;return function(Jt=null){const ye=r.object.position;O.copy(ye).sub(r.target),O.applyQuaternion(gt),d.setFromVector3(O),r.autoRotate&&u===l.NONE&&_t(E(Jt)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let fe=r.minAzimuthAngle,Ae=r.maxAzimuthAngle;isFinite(fe)&&isFinite(Ae)&&(fe<-Math.PI?fe+=Tt:fe>Math.PI&&(fe-=Tt),Ae<-Math.PI?Ae+=Tt:Ae>Math.PI&&(Ae-=Tt),fe<=Ae?d.theta=Math.max(fe,Math.min(Ae,d.theta)):d.theta=d.theta>(fe+Ae)/2?Math.max(fe,d.theta):Math.min(Ae,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&W||r.object.isOrthographicCamera?d.radius=C(d.radius):d.radius=C(d.radius*m),O.setFromSpherical(d),O.applyQuaternion(Ut),ye.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Xe=!1;if(r.zoomToCursor&&W){let oe=null;if(r.object.isPerspectiveCamera){const we=O.length();oe=C(we*m);const Pe=we-oe;r.object.position.addScaledVector(F,Pe),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const we=new Z(q.x,q.y,0);we.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Xe=!0;const Pe=new Z(q.x,q.y,0);Pe.unproject(r.object),r.object.position.sub(Pe).add(we),r.object.updateMatrixWorld(),oe=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;oe!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(oe).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<uA?e.lookAt(r.target):(V_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(V_,r.target))))}else r.object.isOrthographicCamera&&(Xe=m!==1,Xe&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,W=!1,Xe||zt.distanceToSquared(r.object.position)>h||8*(1-U.dot(r.object.quaternion))>h||At.distanceToSquared(r.target)>0?(r.dispatchEvent(H_),zt.copy(r.object.position),U.copy(r.object.quaternion),At.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",le),r.domElement.removeEventListener("pointerdown",L),r.domElement.removeEventListener("pointercancel",it),r.domElement.removeEventListener("wheel",X),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",it),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",ft),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new I_,p=new I_;let m=1;const g=new Z,y=new pe,S=new pe,M=new pe,A=new pe,R=new pe,v=new pe,_=new pe,P=new pe,D=new pe,F=new Z,q=new pe;let W=!1;const I=[],vt={};let z=!1;function E(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function N(O){const gt=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*gt)}function _t(O){p.theta-=O}function wt(O){p.phi-=O}const J=function(){const O=new Z;return function(Ut,zt){O.setFromMatrixColumn(zt,0),O.multiplyScalar(-Ut),g.add(O)}}(),ct=function(){const O=new Z;return function(Ut,zt){r.screenSpacePanning===!0?O.setFromMatrixColumn(zt,1):(O.setFromMatrixColumn(zt,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Ut),g.add(O)}}(),V=function(){const O=new Z;return function(Ut,zt){const U=r.domElement;if(r.object.isPerspectiveCamera){const At=r.object.position;O.copy(At).sub(r.target);let Tt=O.length();Tt*=Math.tan(r.object.fov/2*Math.PI/180),J(2*Ut*Tt/U.clientHeight,r.object.matrix),ct(2*zt*Tt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(J(Ut*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),ct(zt*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function lt(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function at(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ht(O,gt){if(!r.zoomToCursor)return;W=!0;const Ut=r.domElement.getBoundingClientRect(),zt=O-Ut.left,U=gt-Ut.top,At=Ut.width,Tt=Ut.height;q.x=zt/At*2-1,q.y=-(U/Tt)*2+1,F.set(q.x,q.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function Q(O){y.set(O.clientX,O.clientY)}function mt(O){ht(O.clientX,O.clientX),_.set(O.clientX,O.clientY)}function Dt(O){A.set(O.clientX,O.clientY)}function j(O){S.set(O.clientX,O.clientY),M.subVectors(S,y).multiplyScalar(r.rotateSpeed);const gt=r.domElement;_t(2*Math.PI*M.x/gt.clientHeight),wt(2*Math.PI*M.y/gt.clientHeight),y.copy(S),r.update()}function pt(O){P.set(O.clientX,O.clientY),D.subVectors(P,_),D.y>0?lt(N(D.y)):D.y<0&&at(N(D.y)),_.copy(P),r.update()}function bt(O){R.set(O.clientX,O.clientY),v.subVectors(R,A).multiplyScalar(r.panSpeed),V(v.x,v.y),A.copy(R),r.update()}function Yt(O){ht(O.clientX,O.clientY),O.deltaY<0?at(N(O.deltaY)):O.deltaY>0&&lt(N(O.deltaY)),r.update()}function Ht(O){let gt=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?wt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,r.keyPanSpeed),gt=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?wt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,-r.keyPanSpeed),gt=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?_t(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(r.keyPanSpeed,0),gt=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?_t(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(-r.keyPanSpeed,0),gt=!0;break}gt&&(O.preventDefault(),r.update())}function Gt(O){if(I.length===1)y.set(O.pageX,O.pageY);else{const gt=kt(O),Ut=.5*(O.pageX+gt.x),zt=.5*(O.pageY+gt.y);y.set(Ut,zt)}}function Kt(O){if(I.length===1)A.set(O.pageX,O.pageY);else{const gt=kt(O),Ut=.5*(O.pageX+gt.x),zt=.5*(O.pageY+gt.y);A.set(Ut,zt)}}function ae(O){const gt=kt(O),Ut=O.pageX-gt.x,zt=O.pageY-gt.y,U=Math.sqrt(Ut*Ut+zt*zt);_.set(0,U)}function et(O){r.enableZoom&&ae(O),r.enablePan&&Kt(O)}function Oe(O){r.enableZoom&&ae(O),r.enableRotate&&Gt(O)}function ne(O){if(I.length==1)S.set(O.pageX,O.pageY);else{const Ut=kt(O),zt=.5*(O.pageX+Ut.x),U=.5*(O.pageY+Ut.y);S.set(zt,U)}M.subVectors(S,y).multiplyScalar(r.rotateSpeed);const gt=r.domElement;_t(2*Math.PI*M.x/gt.clientHeight),wt(2*Math.PI*M.y/gt.clientHeight),y.copy(S)}function se(O){if(I.length===1)R.set(O.pageX,O.pageY);else{const gt=kt(O),Ut=.5*(O.pageX+gt.x),zt=.5*(O.pageY+gt.y);R.set(Ut,zt)}v.subVectors(R,A).multiplyScalar(r.panSpeed),V(v.x,v.y),A.copy(R)}function Zt(O){const gt=kt(O),Ut=O.pageX-gt.x,zt=O.pageY-gt.y,U=Math.sqrt(Ut*Ut+zt*zt);P.set(0,U),D.set(0,Math.pow(P.y/_.y,r.zoomSpeed)),lt(D.y),_.copy(P);const At=(O.pageX+gt.x)*.5,Tt=(O.pageY+gt.y)*.5;ht(At,Tt)}function be(O){r.enableZoom&&Zt(O),r.enablePan&&se(O)}function ce(O){r.enableZoom&&Zt(O),r.enableRotate&&ne(O)}function L(O){r.enabled!==!1&&(I.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",b),r.domElement.addEventListener("pointerup",it)),Xt(O),O.pointerType==="touch"?Mt(O):Pt(O))}function b(O){r.enabled!==!1&&(O.pointerType==="touch"?rt(O):Rt(O))}function it(O){switch(Lt(O),I.length){case 0:r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",it),r.dispatchEvent(G_),u=l.NONE;break;case 1:const gt=I[0],Ut=vt[gt];Mt({pointerId:gt,pageX:Ut.x,pageY:Ut.y});break}}function Pt(O){let gt;switch(O.button){case 0:gt=r.mouseButtons.LEFT;break;case 1:gt=r.mouseButtons.MIDDLE;break;case 2:gt=r.mouseButtons.RIGHT;break;default:gt=-1}switch(gt){case es.DOLLY:if(r.enableZoom===!1)return;mt(O),u=l.DOLLY;break;case es.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;Dt(O),u=l.PAN}else{if(r.enableRotate===!1)return;Q(O),u=l.ROTATE}break;case es.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;Q(O),u=l.ROTATE}else{if(r.enablePan===!1)return;Dt(O),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function Rt(O){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;j(O);break;case l.DOLLY:if(r.enableZoom===!1)return;pt(O);break;case l.PAN:if(r.enablePan===!1)return;bt(O);break}}function X(O){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(O.preventDefault(),r.dispatchEvent(pd),Yt(nt(O)),r.dispatchEvent(G_))}function nt(O){const gt=O.deltaMode,Ut={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(gt){case 1:Ut.deltaY*=16;break;case 2:Ut.deltaY*=100;break}return O.ctrlKey&&!z&&(Ut.deltaY*=10),Ut}function ot(O){O.key==="Control"&&(z=!0,r.domElement.getRootNode().addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(O){O.key==="Control"&&(z=!1,r.domElement.getRootNode().removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function ft(O){r.enabled===!1||r.enablePan===!1||Ht(O)}function Mt(O){switch(Ft(O),I.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;Gt(O),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;Kt(O),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;et(O),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Oe(O),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function rt(O){switch(Ft(O),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ne(O),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;se(O),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;be(O),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ce(O),r.update();break;default:u=l.NONE}}function le(O){r.enabled!==!1&&O.preventDefault()}function Xt(O){I.push(O.pointerId)}function Lt(O){delete vt[O.pointerId];for(let gt=0;gt<I.length;gt++)if(I[gt]==O.pointerId){I.splice(gt,1);return}}function Ft(O){let gt=vt[O.pointerId];gt===void 0&&(gt=new pe,vt[O.pointerId]=gt),gt.set(O.pageX,O.pageY)}function kt(O){const gt=O.pointerId===I[0]?I[1]:I[0];return vt[gt]}r.domElement.addEventListener("contextmenu",le),r.domElement.addEventListener("pointerdown",L),r.domElement.addEventListener("pointercancel",it),r.domElement.addEventListener("wheel",X,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",ot,{passive:!0,capture:!0}),this.update()}}function dA(){const o=de.useRef(null),[e,i]=de.useState(!1),[r,l]=de.useState(!1),[u,h]=de.useState(!1),[d,p]=de.useState(!1),[m,g]=de.useState(!1),[y,S]=de.useState(!1),[M,A]=de.useState(!1),[R,v]=de.useState(!1),[_,P]=de.useState(!1),[D,F]=de.useState(!1),q=de.useRef({beta:0,gamma:0}),W=de.useRef(0),I=de.useRef(!1),vt=de.useRef(!1),z=de.useRef({position:{x:1,z:1},direction:new Z(0,0,1),worldPosition:new Z(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0,lastMoveTime:0,lastPosition:{x:1,z:1},stuckTime:0}),E=de.useRef({}),N=de.useRef(null),_t=de.useRef(!1);de.useEffect(()=>{vt.current=u},[u]),de.useEffect(()=>{_t.current=e},[e]);const[wt,J]=de.useState(null),ct=de.useRef(null);de.useRef(!1);const V=de.useRef(null),lt=de.useRef(!1),[at,ht]=de.useState({showDebug:!1,beta:0,gamma:0,velocity:{x:0,z:0},position:{x:0,z:0},gravity:{x:0,z:0},eventCount:0,lastUpdate:Date.now(),eventType:"",collision:!1,collisionEdge:""}),C=()=>{if(console.log("Restarting game..."),!E.current.generateMaze||!E.current.createWalls){console.error("Game functions not initialized");return}if(N.current&&N.current.parent&&(console.log("Cleaning up celebration particles"),N.current.parent.remove(N.current),N.current.geometry&&N.current.geometry.dispose(),N.current.material&&N.current.material.dispose(),N.current=null,J(null)),console.log("Resetting game state"),i(!1),_t.current=!1,l(!1),h(!1),vt.current=!1,lt.current=!1,console.log("Resetting player position and direction"),z.current.position={x:1,z:1},z.current.velocity={x:0,z:0},z.current.direction.set(0,0,1),console.log("Resetting maze reference"),V.current=null,it.current){console.log("Resetting camera orientation");const X=it.current,nt=typeof calculateOptimalCameraHeight=="function"?calculateOptimalCameraHeight():30;X.position.set(0,nt,0),X.up.set(0,0,-1),X.lookAt(0,0,0),X.updateProjectionMatrix(),X.updateMatrixWorld()}if(E.current.mazeGroup&&(console.log("Resetting maze group rotation"),E.current.mazeGroup.rotation.set(0,0,0)),console.log("Generating new maze"),E.current.generateMaze(),console.log("Creating new walls"),E.current.createWalls(),console.log("Updating player world position"),z.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),E.current.createPlayer&&E.current.mazeGroup){console.log("Creating new player mesh"),z.current.mesh&&z.current.mesh.parent&&(console.log("Removing old player mesh"),z.current.mesh.parent.remove(z.current.mesh),z.current.mesh.children.forEach(nt=>{nt.geometry&&nt.geometry.dispose(),nt.material&&nt.material.dispose()})),console.log("Creating new player mesh");const X=E.current.createPlayer();console.log("Positioning new player at entrance"),X.position.copy(z.current.worldPosition),console.log("Adding new player to maze group"),E.current.mazeGroup.add(X),console.log("Added new player to maze group"),console.log("Updating player ref"),z.current.mesh=X}if(E.current.setInitialPlayerDirection?E.current.setInitialPlayerDirection(z.current.mesh):z.current.direction.set(0,0,1),z.current.mesh){z.current.mesh.position.copy(z.current.worldPosition);const X=Math.atan2(z.current.direction.x,z.current.direction.z);z.current.mesh.rotation.y=X,z.current.mesh.visible=!0,z.current.mesh.children.forEach(nt=>{nt.material&&(nt.material.opacity=1,nt.material.transparent=!0)})}},Q=()=>{const X=navigator.userAgent||navigator.vendor||window.opera,nt=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(X.toLowerCase());return console.log("Device detection:",nt?"Mobile":"Desktop"),I.current=nt,nt},mt=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",Dt=()=>window.DeviceOrientationEvent!==void 0,j=async()=>{if(!mt())return console.log("No iOS permission needed, enabling gyroscope directly"),Oe(),!0;console.log("Requesting iOS device orientation permission");try{const X=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",X),X==="granted"?(console.log("✅ iOS permission granted!"),Oe(),P(!1),F(!1),window.physics||et(),!0):(console.log("❌ iOS permission denied:",X),P(!1),F(!0),!1)}catch(X){return console.error("❌ Error requesting iOS permission:",X),P(!1),F(!0),!1}},pt=X=>{if(e||d)return;console.log(`Button pressed: ${X}`);const nt=.03;switch(X){case"up":z.current.velocity.z-=nt,z.current.direction.set(0,0,-1);break;case"down":z.current.velocity.z+=nt,z.current.direction.set(0,0,1);break;case"left":z.current.velocity.x-=nt,z.current.direction.set(-1,0,0);break;case"right":z.current.velocity.x+=nt,z.current.direction.set(1,0,0);break}const ot=.2,dt=z.current.velocity,ft=Math.sqrt(dt.x*dt.x+dt.z*dt.z);ft>ot&&(dt.x=dt.x/ft*ot,dt.z=dt.z/ft*ot)},bt=X=>{const nt=performance.now(),ot=nt<3e3;ot&&console.log("Orientation event received:",{beta:X.beta,gamma:X.gamma,time:nt}),q.current={beta:X.beta,gamma:X.gamma},!ot&&nt%3e3<20&&console.log("Orientation data:",q.current)};de.useEffect(()=>{const X=Q();return console.log("Is mobile:",X),X&&(mt()?(console.log("iOS device detected - showing permission button"),P(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):Dt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",bt),A(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),F(!0))),()=>{window.removeEventListener("deviceorientation",bt)}},[]),de.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let X=function(It){if(ei=requestAnimationFrame(X),I.current&&M&&!_t.current&&!d){const T=performance.now(),{beta:H,gamma:G}=q.current;if(T<5e3&&T%500<20&&console.log("Animation loop - orientation:",{beta:H,gamma:G}),H!==null&&G!==null){const k=Math.abs(H),Y=Math.abs(G);let St="";const Ot=5;k>Y&&k>Ot?St=H>0?"ArrowDown":"ArrowUp":Y>Ot&&(St=G>0?"ArrowRight":"ArrowLeft");const Bt=Math.max(k,Y),Vt=Math.max(100,500-Bt*5);St&&T-W.current>Vt&&(console.log(`Gyroscope movement: ${St} (tilt: ${Bt.toFixed(1)}°)`),tn({key:St,preventDefault:()=>{},stopPropagation:()=>{}}),W.current=T)}}if(!we&&!e&&!O)we=!0,zt.rotation.x=0,zt.rotation.y=0,zt.rotation.z=0;else if(!we&&!e&&O){const T=It-Pe;Math.min(T/mi,1)===1?(we=!0,zt.rotation.x=0,zt.rotation.y=0,zt.rotation.z=0):(zt.rotation.x=0,zt.rotation.y=0,zt.rotation.z=0)}else!we&&e&&(we=!0),vt.current||(zt.rotation.x=0,zt.rotation.y=0,zt.rotation.z=0,Nt&&(Nt.up.set(0,0,-1),Nt.lookAt(0,0,0)));const qt=It*.001;zt.children.forEach(T=>{T.material&&T.material.uniforms&&(T.material.uniforms.time.value=qt)}),ct.current?(console.log("Calling updateParticles from animation loop"),ct.current()||(console.log("updateParticles returned false, setting to null"),ct.current=null)):_t.current&&!ct.current&&console.log("Game won but updateParticles is null"),vt.current?I.current||(gt.enabled=!1,gt.enableRotate=!1,gt.enableZoom=!1,gt.enablePan=!1):((Math.abs(Nt.position.x)>.1||Math.abs(Nt.position.z)>.1||Math.abs(Nt.position.y-Ft())>.1||Math.abs(gt.target.x)>.1||Math.abs(gt.target.y)>.1||Math.abs(gt.target.z)>.1)&&(Nt.position.set(0,Ft(),0),gt.target.set(0,0,0)),!I.current&&gt.update&&gt.update()),ae(),Mt.render(ot,Nt)},nt=function(){const It=window.innerWidth,qt=window.innerHeight;Mt.setSize(It,qt),Nt.aspect=It/qt;const T=It<768,H=It>qt;T?Nt.fov=H?75:80:Nt.fov=60,vt.current||(Nt.position.y=Ft(),Nt.up.set(0,0,-1),Nt.lookAt(0,0,0),E.current.mazeGroup&&E.current.mazeGroup.rotation.set(0,0,0)),Nt.updateProjectionMatrix()};console.log("Initializing 3D scene"),I.current=Q(),console.log("Is mobile device:",I.current),I.current&&v(!0);const ot=new rA;ot.background=new Le(0);const dt=new F_(4210752,1.5);ot.add(dt);const ft=new B_(16777215,1);if(ft.position.set(1,1,1),ot.add(ft),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const Mt=new E0({antialias:!0,canvas:o.current});if(Mt.setSize(window.innerWidth,window.innerHeight),Mt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Mt.shadowMap.enabled=!0,Mt.shadowMap.type=W_,console.log("Renderer set up"),I.current){console.log("Setting up orientation handling for mobile");const It=qt=>{var T;if(!(e||d)&&(!M&&(qt.beta!==null||qt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),A(!0)),!!M&&qt.beta!==null&&qt.gamma!==null)){let H=qt.beta,G=qt.gamma;if(window.orientation!==void 0){const k=window.orientation;if(performance.now()%5e3<20&&((T=window.physics)!=null&&T.debug)&&console.log(`Device orientation: ${k}°, beta: ${H.toFixed(2)}°, gamma: ${G.toFixed(2)}°`),k===90){const St=H;H=G,G=-St}else if(k===-90){const St=H;H=-G,G=St}else k===180&&(H=-H,G=-G)}if(window.physics){let St=0,Ot=0;Math.abs(G)>5&&(St=Math.min(Math.abs(G)-5,25)/25*Math.sign(G)),Math.abs(H)>5&&(Ot=Math.min(Math.abs(H)-5,25)/25*Math.sign(H)),window.physics.gravityX=St,window.physics.gravityZ=Ot,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${St.toFixed(3)}, Z=${Ot.toFixed(3)}`)}q.current={beta:H,gamma:G}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const qt=async()=>{console.log("Requesting iOS device orientation permission");try{const T=await window.DeviceOrientationEvent.requestPermission();T==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",It),A(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),et(),setTimeout(()=>{z.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),z.current.velocity.x=.05,z.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",T)}catch(T){console.error("❌ Error requesting permission:",T)}};document.addEventListener("touchstart",()=>{qt(),document.removeEventListener("touchstart",qt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",It),A(!0)}const rt=21,le=2,Xt=3,Lt=2,Ft=(It=!1)=>{const qt=window.innerWidth<768,T=window.innerWidth>window.innerHeight,H=rt*Lt;let G=H*1.5;return qt&&(It||D)&&(T?G=H*1.6:G=H*1.8),qt?T?G*.8:G*1.2:G};window.calculateOptimalCameraHeight=Ft;const kt=Ft(),Nt=new Jn(60,window.innerWidth/window.innerHeight,.1,1e3);Nt.position.set(0,kt,0),Nt.up.set(0,0,-1),Nt.lookAt(0,0,0),it.current=Nt,window.gameCamera=Nt,console.log("Camera set up and assigned to cameraRef");const O=Q();let gt;O?(gt={target:new Z(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(gt=new fA(Nt,Mt.domElement),gt.enableDamping=!0,gt.dampingFactor=.1,gt.target.set(0,0,0),gt.update(),console.log("Desktop controls set up"));const Ut=e&&V.current?V.current:Array(rt).fill().map(()=>Array(rt).fill(1));V.current=Ut,window.MAZE_SIZE=rt,window.WALL_THICKNESS=Lt,window.playerRef=z,window.mazeRef=V,window.isThirdPersonRef=vt,window.gameCamera=Nt,window.maze=Ut,window.celebrateWin=()=>{lt.current=!0,i(!0),l(!0),Ai()};const zt=new Po;ot.add(zt),console.log("Maze group created"),E.current.mazeGroup=zt;const U=new ca({uniforms:{time:{value:0},baseColor:{value:new Le(4482815)}},vertexShader:`
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
        `,side:Pi});console.log("Wall material created");const At=(It,qt)=>It>=0&&It<rt&&qt>=0&&qt<rt,Tt=(It,qt)=>{const T=[],H=[[0,2],[2,0],[0,-2],[-2,0]];for(let G=H.length-1;G>0;G--){const k=Math.floor(Math.random()*(G+1));[H[G],H[k]]=[H[k],H[G]]}for(const[G,k]of H){const Y=It+G,St=qt+k;At(Y,St)&&Ut[Y][St]===1&&T.push([Y,St,G/2,k/2])}return T},jt=()=>{if(e&&V.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let k=0;k<rt;k++)for(let Y=0;Y<rt;Y++)Ut[k][Y]=1;const It=[],qt=1,T=1;for(Ut[qt][T]=0,It.push([qt,T]);It.length>0;){const[k,Y]=It[It.length-1],St=Tt(k,Y);if(St.length===0){It.pop();continue}const[Ot,Bt,Vt,ee]=St[Math.floor(Math.random()*St.length)];Ut[Ot][Bt]=0,Ut[k+Vt][Y+ee]=0,It.push([Ot,Bt])}Ut[0][1]=0,Ut[rt-1][rt-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(rt-1)+","+(rt-2)+")");const H=new Set,G=k=>{const[Y,St]=k;if(Y===rt-2&&St===rt-2)return!0;H.add(`${Y},${St}`);const Ot=[[0,1],[1,0],[0,-1],[-1,0]];for(const[Bt,Vt]of Ot){const ee=Y+Bt,te=St+Vt;if(At(ee,te)&&Ut[ee][te]===0&&!H.has(`${ee},${te}`)&&G([ee,te]))return!0}return!1};G([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),jt()),V.current=Ut,window.maze=Ut,window.MAZE_SIZE=rt,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Jt=()=>{if(!e||!V.current){for(console.log("Creating new walls for the maze");zt.children.length>0;){const It=zt.children[0];It.isGroup?It.children.forEach(qt=>{qt.geometry&&qt.geometry.dispose(),qt.material&&qt.material.dispose()}):(It.geometry&&It.geometry.dispose(),It.material&&It.material.dispose()),zt.remove(It)}for(let It=0;It<rt;It++)for(let qt=0;qt<rt;qt++)if(Ut[It][qt]===1){const T=new ka(Lt,Xt,Lt),H=new $n(T,U);if(H.position.set((It-rt/2)*Lt,Xt/2,(qt-rt/2)*Lt),zt.add(H),It===0||It===rt-1||qt===0||qt===rt-1){if(It<rt-1&&Ut[It+1][qt]===1){const G=new $n(new ka(Lt,Xt,Lt),U);G.position.set((It-rt/2+.5)*Lt,Xt/2,(qt-rt/2)*Lt),zt.add(G)}if(qt<rt-1&&Ut[It][qt+1]===1){const G=new $n(new ka(Lt,Xt,Lt),U);G.position.set((It-rt/2)*Lt,Xt/2,(qt-rt/2+.5)*Lt),zt.add(G)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),E.current.generateMaze=jt,E.current.createWalls=Jt;const ye=It=>{if(console.log("Setting initial player direction"),!It){console.error("Player mesh not provided to setInitialPlayerDirection");return}const qt=1,T=1,H=[{dx:0,dz:1,name:"down",vector:new Z(0,0,1)},{dx:1,dz:0,name:"right",vector:new Z(1,0,0)},{dx:0,dz:-1,name:"up",vector:new Z(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new Z(-1,0,0)}];console.log("Checking available directions from starting position:",qt,T);const G=H.filter(k=>{const Y=qt+k.dx,St=T+k.dz;if(Y===0&&St===1)return console.log(`Direction ${k.name} leads to entrance, skipping`),!1;const Ot=At(Y,St)&&Ut[Y][St]===0;return console.log(`Direction ${k.name} leads to (${Y}, ${St}): ${Ot?"valid":"invalid"}`),Ot});if(console.log("Valid directions:",G.map(k=>k.name)),G.length>0){const k=G[0];console.log("Chosen direction:",k.name),z.current.direction.copy(k.vector);const Y=Math.atan2(k.vector.x,k.vector.z);It.rotation.y=Y,console.log("Set player rotation to:",Y)}else console.log("No valid directions found, defaulting to down"),z.current.direction.set(0,0,1),It.rotation.y=0};E.current.setInitialPlayerDirection=ye,e?console.log("Game has been won, preserving maze and player position"):(jt(),Jt(),console.log("Initial maze created"));const fe=new F_(16777215,.6);ot.add(fe);const Ae=new B_(16777215,1);Ae.position.set(50,100,50),ot.add(Ae);const Xe=new z_(4474111,2,150);Xe.position.set(50,50,50),ot.add(Xe);const oe=new z_(4474111,2,150);oe.position.set(-50,50,-50),ot.add(oe),console.log("Lights added");let we=!1;const Pe=performance.now(),mi=1e3,Ai=()=>{console.log("Celebration function called - START"),z.current.mesh&&(z.current.mesh.visible=!0);const It=2e3,qt=new Fi,T=new Float32Array(It*3),H=new Float32Array(It*3);for(let Bt=0;Bt<It;Bt++)T[Bt*3]=z.current.worldPosition.x,T[Bt*3+1]=z.current.worldPosition.y+1,T[Bt*3+2]=z.current.worldPosition.z,H[Bt*3]=Math.random(),H[Bt*3+1]=Math.random(),H[Bt*3+2]=Math.random();qt.setAttribute("position",new pi(T,3)),qt.setAttribute("color",new pi(H,3));const G=new T0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:md}),k=new sA(qt,G);ot.add(k),console.log("Particle system added to scene");const Y=[];for(let Bt=0;Bt<It;Bt++){const Vt=Math.random()*Math.PI*2,ee=Math.acos(Math.random()*2-1),te=.05+Math.random()*.1;Y.push(Math.sin(ee)*Math.cos(Vt)*te,Math.sin(ee)*Math.sin(Vt)*te,Math.cos(ee)*te)}N.current=k;const St=()=>{if(console.log("Update particles function called - frame"),!_t.current)return console.log("Game no longer in won state, cleaning up particles"),k.parent&&(ot.remove(k),k.geometry.dispose(),G.dispose()),N.current=null,ct.current=null,!1;const Bt=k.geometry.attributes.position.array;let Vt=!1;for(let te=0;te<It;te++){const $t=te*3;Bt[$t]+=Y[$t],Bt[$t+1]+=Y[$t+1],Bt[$t+2]+=Y[$t+2],Y[$t+1]-=.001;const Re=Bt[$t]-z.current.worldPosition.x,Fe=Bt[$t+1]-z.current.worldPosition.y,ke=Bt[$t+2]-z.current.worldPosition.z;Math.sqrt(Re*Re+Fe*Fe+ke*ke)<20&&(Vt=!0)}k.geometry.attributes.position.needsUpdate=!0;const ee=performance.now()-Ot;return ee>1e3&&(G.opacity=Math.max(0,1-(ee-1e3)/1e3)),!Vt||ee>2e3?(console.log("Animation complete, cleaning up particles"),ot.remove(k),k.geometry.dispose(),G.dispose(),N.current=null,ct.current=null,!1):!0},Ot=performance.now();return console.log("Setting updateParticles function"),ct.current=St,()=>{console.log("Cleanup function called"),k.parent&&(ot.remove(k),k.geometry.dispose(),G.dispose()),N.current=null,ct.current=null}},ti=()=>{if(!ot)return;console.log("Creating player...");const It=window.MAZE_SIZE||21,qt=window.WALL_THICKNESS||2,T=new Mc(.9,32,32),H=new oA({color:16763904,roughness:.3,metalness:.7,envMapIntensity:.9}),G=new $n(T,H);G.castShadow=!0,G.receiveShadow=!0;const k=1,Y=1,St=(k-It/2)*qt,Ot=(Y-It/2)*qt;return G.position.set(St,qt/2,Ot),ot.add(G),z.current={position:{x:k,z:Y},velocity:{x:0,z:0},direction:new Z(0,0,1),worldPosition:new Z(St,qt/2,Ot),mesh:G},console.log(`Player created at entrance - Maze coords: (${k},${Y}), World coords: (${St},${Ot})`),G},ge=ti();E.current.createPlayer=ti;let ze=null;if(e){for(let It=0;It<zt.children.length;It++){const qt=zt.children[It];if(qt.isGroup&&qt.children.length>0&&qt.children[0].geometry instanceof Mc){ze=qt;break}}ze&&(ze.children.forEach(It=>{It.geometry&&It.geometry.dispose(),It.material&&It.material.dispose()}),zt.remove(ze),console.log("Removed existing player from maze group"))}if(!e)ge.position.set((1-rt/2)*Lt,Lt/2,(1-rt/2)*Lt),z.current.mesh=ge,z.current.worldPosition.copy(ge.position),ye(ge);else{if(lt.current){const qt=rt-1,T=rt-2,H=new Z((qt-rt/2)*Lt,Lt/2,(T-rt/2)*Lt);console.log("Positioning player at exit:",H),ge.position.copy(H),z.current.worldPosition.copy(H),z.current.position={x:qt,z:T}}else console.log("Using existing player position:",z.current.worldPosition),ge.position.copy(z.current.worldPosition);z.current.mesh=ge;const It=Math.atan2(z.current.direction.x,z.current.direction.z);ge.rotation.y=It}zt.add(ge),z.current.mesh=ge,console.log("Player created and added to maze group");const qe=It=>{if(It.key.toLowerCase()==="v")return console.log("View toggle key pressed"),It.preventDefault(),It.stopPropagation(),It.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(qt=>{const T=!qt;console.log("Switching to:",T?"POV mode":"Top-down mode"),vt.current=T;const H=Nt.position.clone(),G=new Z().copy(gt.target),k=Nt.fov,Y={x:zt.rotation.x,y:zt.rotation.y,z:zt.rotation.z},St=T?new Z(z.current.worldPosition.x,z.current.worldPosition.y+1.5,z.current.worldPosition.z):new Z(0,Ft(),0);T?Nt.up.set(0,1,0):Nt.up.set(0,0,-1);const Ot=T?new Z(z.current.worldPosition.x+z.current.direction.x*Lt,z.current.worldPosition.y+1.5,z.current.worldPosition.z+z.current.direction.z*Lt):new Z(0,0,0),Bt=window.innerWidth<768,Vt=window.innerWidth>window.innerHeight;let ee=T?75:60;Bt&&(ee=T||Vt?75:80);const te={x:0,y:0,z:0},$t=ge.visible?1:0,Re=T?0:1;ge.visible=!0,ge.children.forEach(he=>{he.material&&(he.material.transparent||(he.material.transparent=!0),he.material.opacity=$t)}),I.current||(gt.enabled=!1);const Fe=1200;let ke=null;const wn=he=>{const wi=he-Ie,Be=Math.min(wi/Fe,1),Qe=(_n=>_n<.5?4*_n*_n*_n:1-Math.pow(-2*_n+2,3)/2)(Be);Nt.position.lerpVectors(H,St,Qe);const gi=new Z().lerpVectors(G,Ot,Qe);if(I.current||gt.target.copy(gi),Nt.lookAt(gi),Nt.fov=xs.lerp(k,ee,Qe),Nt.updateProjectionMatrix(),zt.rotation.x=xs.lerp(Y.x,te.x,Qe),zt.rotation.y=xs.lerp(Y.y,te.y,Qe),zt.rotation.z=xs.lerp(Y.z,te.z,Qe),ge.children.forEach(_n=>{_n.material&&(_n.material.opacity=xs.lerp($t,Re,Qe))}),Be===1){cancelAnimationFrame(ke),ge.visible=!T,ge.children.forEach(_n=>{_n.material&&(_n.material.opacity=Re,Re===1&&(_n.material.transparent=!1))}),!I.current&&!T?(gt.enabled=!0,gt.enableRotate=!0,gt.enableZoom=!0,gt.enablePan=!0):(Nt.position.copy(St),Nt.lookAt(Ot)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}ke=requestAnimationFrame(wn)},Ie=performance.now();return ke=requestAnimationFrame(wn),T}),!1)},tn=It=>{if(_t.current||!we||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const qt=It.key.toLowerCase();if(console.log("Key pressed:",qt,"Current mode:",vt.current?"POV":"Top-down"),qt==="v")return;It.preventDefault();const T=z.current.position.x,H=z.current.position.z;let G=T,k=H,Y=!1;const St=z.current.mesh;if(!St){console.error("Player mesh not found");return}if(vt.current){switch(console.log("Handling POV mode controls"),qt){case"arrowup":case"w":console.log("Moving forward - Current position:",T,H),console.log("Current direction:",z.current.direction),G=T+Math.round(z.current.direction.x),k=H+Math.round(z.current.direction.z),console.log("New position will be:",G,k),Y="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",T,H),console.log("Current direction:",z.current.direction),G=T-Math.round(z.current.direction.x),k=H-Math.round(z.current.direction.z),console.log("New position will be:",G,k),Y="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",z.current.direction),z.current.direction.applyAxisAngle(new Z(0,1,0),Math.PI/2),console.log("New direction:",z.current.direction),Y="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",z.current.direction),z.current.direction.applyAxisAngle(new Z(0,1,0),-Math.PI/2),console.log("New direction:",z.current.direction),Y="rotate";break}if(Y==="move")if(At(G,k)&&Ut[G][k]===0){console.log("Movement is valid, updating positions"),z.current.position.x=G,z.current.position.z=k;const Ot=new Z((G-rt/2)*Lt,Lt/2,(k-rt/2)*Lt);console.log("New world position:",Ot),z.current.worldPosition.copy(Ot),St.position.copy(Ot),console.log("Updated player mesh position to:",St.position),Nt.position.set(Ot.x,Ot.y+1.5,Ot.z),console.log("New camera position:",Nt.position),Nt.up.set(0,1,0);const Bt=Nt.position.clone();if(Bt.add(z.current.direction.clone().multiplyScalar(Lt)),Nt.lookAt(Bt),console.log("Camera looking at:",Bt),Nt.updateProjectionMatrix(),Nt.updateMatrixWorld(),G===rt-1&&k===rt-2){lt.current=!0,i(!0),l(!0);const Vt=Ai();return()=>{Vt&&Vt()}}}else console.log("Movement blocked - Out of bounds or wall:",G,k);else if(Y==="rotate"){console.log("Handling rotation");const Ot=Math.atan2(z.current.direction.x,z.current.direction.z);St.rotation.y=Ot,console.log("Updated player mesh rotation to:",Ot);const Bt=Nt.position.clone();Bt.add(z.current.direction.clone().multiplyScalar(Lt)),Nt.lookAt(Bt),console.log("Camera looking at new direction:",Bt),Nt.updateProjectionMatrix(),Nt.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),qt){case"arrowup":case"w":console.log("Moving up - Current position:",T,H),k=H-1,z.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",T,H),k=H+1,z.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",T,H),G=T-1,z.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",T,H),G=T+1,z.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",G,k),console.log("Maze value at target position:",Ut[G][k]),console.log("Is in bounds:",At(G,k)),At(G,k)&&Ut[G][k]===0){console.log("Movement is valid, updating positions"),z.current.position.x=G,z.current.position.z=k;const Ot=new Z((G-rt/2)*Lt,Lt/2,(k-rt/2)*Lt);z.current.worldPosition.copy(Ot),St.position.copy(Ot);const Bt=Math.atan2(z.current.direction.x,z.current.direction.z);if(St.rotation.y=Bt,G===rt-1&&k===rt-2){lt.current=!0,i(!0),l(!0);const Vt=Ai();return()=>{Vt&&Vt()}}}}};window.removeEventListener("keydown",qe,!0),window.removeEventListener("keydown",tn),console.log("Attaching event listeners"),window.addEventListener("keydown",qe,!0),window.addEventListener("keydown",tn),console.log("Event listeners attached");let ei;return console.log("Starting animation"),X(),window.addEventListener("resize",nt),()=>{console.log("Cleanup running"),window.removeEventListener("resize",nt),window.removeEventListener("keydown",qe,!0),window.removeEventListener("keydown",tn),ei&&cancelAnimationFrame(ei),ot.traverse(It=>{It.geometry&&It.geometry.dispose(),It.material&&(Array.isArray(It.material)?It.material.forEach(qt=>qt.dispose()):It.material.dispose())}),Mt.dispose(),gt&&typeof gt.dispose=="function"&&gt.dispose()}}catch(X){console.error("Error in setup:",X)}},[]),de.useEffect(()=>{const X=()=>{const ot=Q();return ot&&(!Dt()||mt()&&!M)&&(console.log("Setting up touch controls for mobile"),F(!0)),nt(),ot},nt=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const ot=dt=>{console.log("Device orientation event received:",dt),window.removeEventListener("deviceorientation",ot)};window.addEventListener("deviceorientation",ot,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};X()},[M]);const Yt=de.useRef(null),Ht=de.useRef(null),Gt=de.useRef(null),Kt=de.useRef(null);de.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const X=le=>{if(e||d)return;const Xt=.1;switch(le){case"up":z.current.velocity.z-=Xt,z.current.direction.set(0,0,-1);break;case"down":z.current.velocity.z+=Xt,z.current.direction.set(0,0,1);break;case"left":z.current.velocity.x-=Xt,z.current.direction.set(-1,0,0);break;case"right":z.current.velocity.x+=Xt,z.current.direction.set(1,0,0);break}const Lt=.2,Ft=z.current.velocity,kt=Math.sqrt(Ft.x*Ft.x+Ft.z*Ft.z);kt>Lt&&(Ft.x=Ft.x/kt*Lt,Ft.z=Ft.z/kt*Lt)},nt=(le,Xt)=>(le.preventDefault(),le.stopPropagation(),X(Xt),!1),ot=(le,Xt)=>{if(!le.current)return;const Lt=le.current,Ft=gt=>nt(gt,Xt),kt=gt=>gt.preventDefault(),Nt=gt=>nt(gt,Xt),O=gt=>nt(gt,Xt);return Lt.addEventListener("touchstart",Ft,{passive:!1}),Lt.addEventListener("touchend",kt,{passive:!1}),Lt.addEventListener("mousedown",Nt),Lt.addEventListener("click",O),()=>{Lt.removeEventListener("touchstart",Ft),Lt.removeEventListener("touchend",kt),Lt.removeEventListener("mousedown",Nt),Lt.removeEventListener("click",O)}},dt=ot(Yt,"up"),ft=ot(Ht,"down"),Mt=ot(Gt,"left"),rt=ot(Kt,"right");return()=>{dt&&dt(),ft&&ft(),Mt&&Mt(),rt&&rt()}},[D]),de.useEffect(()=>{const X=()=>{let ft=document.querySelector('meta[name="viewport"]');ft||(ft=document.createElement("meta"),ft.name="viewport",document.head.appendChild(ft)),ft.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},nt=ft=>{ft.touches&&ft.touches.length>1&&ft.target.tagName!=="BUTTON"&&ft.preventDefault()},ot=ft=>{ft.target.tagName!=="BUTTON"&&ft.preventDefault()};X(),document.addEventListener("touchmove",nt,{passive:!1});const dt=o.current;return dt&&dt.addEventListener("touchstart",ot,{passive:!1}),()=>{document.removeEventListener("touchmove",nt),dt&&dt.removeEventListener("touchstart",ot)}},[]),de.useEffect(()=>{if(!window.gameCamera||vt.current)return;const nt=setTimeout(()=>{const ot=window.gameCamera;if(ot&&!vt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const dt=window.calculateOptimalCameraHeight(D);ot.position.y=dt,ot.updateProjectionMatrix(),console.log(`Adjusted camera height to ${dt} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(nt)},[D]);const ae=()=>{if(!M||e||d)return;const X=window.maze||V.current;if(!X){console.warn("No maze available for physics update");return}const nt=window.MAZE_SIZE||21,ot=window.WALL_THICKNESS||2,dt=z.current,ft=dt.velocity,Mt=dt.position,rt=dt.mesh;if(!rt){console.warn("No player mesh available for physics update");return}const le=performance.now();if(dt.lastMoveTime||(dt.lastMoveTime=le,dt.lastPosition={x:Mt.x,z:Mt.z},dt.stuckTime=0),Math.sqrt(Math.pow(Mt.x-dt.lastPosition.x,2)+Math.pow(Mt.z-dt.lastPosition.z,2))<.01){if(dt.stuckTime+=le-dt.lastMoveTime,dt.stuckTime>1e3){console.log("Ball appears stuck, applying small impulse");const ge=window.physics||{},ze=new pe(ge.gravityX||0,(ge.gravityZ||0)+.3).normalize();ft.x+=ze.x*.05+(Math.random()-.5)*.02,ft.z+=ze.y*.05+(Math.random()-.5)*.02,dt.stuckTime=0}}else dt.stuckTime=0;dt.lastPosition={x:Mt.x,z:Mt.z},dt.lastMoveTime=le;const Lt=window.physics||{},Ft=Lt.gravityX||0,Nt=(Lt.gravityZ||0)+.3,O=.01,gt=.97,Ut=.5,zt=.9;ft.x+=Ft*O,ft.z+=Nt*O,ft.x*=gt,ft.z*=gt;const U=.3,At=Math.sqrt(ft.x*ft.x+ft.z*ft.z);if(At>U){const ge=U/At;ft.x*=ge,ft.z*=ge}if(Math.abs(ft.x)<2e-4&&Math.abs(ft.z)<2e-4)return;const Tt=Mt.x,jt=Mt.z;let Jt=Mt.x+ft.x,ye=Mt.z+ft.z;const fe=(ge,ze)=>ge<0||ge>=nt||ze<0||ze>=nt?!0:X[ge][ze]===1,Ae=Math.floor(Mt.x),Xe=Math.floor(Mt.z);Mt.x-Ae,Mt.z-Xe,Mt.x=Jt;const oe=Math.floor(Mt.x);Mt.x-oe;let we=!1;ft.x>0&&oe+1<nt&&fe(oe+1,Math.floor(Mt.z))?oe+1-Mt.x<zt&&(we=!0,Mt.x=oe+1-zt-.01,ft.x=-ft.x*Ut):ft.x<0&&oe>=0&&fe(oe,Math.floor(Mt.z))&&Mt.x-oe<zt&&(we=!0,Mt.x=oe+zt+.01,ft.x=-ft.x*Ut),Mt.z=ye;const Pe=Math.floor(Mt.z);Mt.z-Pe;let mi=!1;ft.z>0&&Pe+1<nt&&fe(Math.floor(Mt.x),Pe+1)?Pe+1-Mt.z<zt&&(mi=!0,Mt.z=Pe+1-zt-.01,ft.z=-ft.z*Ut):ft.z<0&&Pe>=0&&fe(Math.floor(Mt.x),Pe)&&Mt.z-Pe<zt&&(mi=!0,Mt.z=Pe+zt+.01,ft.z=-ft.z*Ut),fe(oe,Pe)&&!we&&!mi&&(ft.x=-ft.x*Ut,ft.z=-ft.z*Ut,Mt.x=Tt,Mt.z=jt),fe(Math.floor(Mt.x),Math.floor(Mt.z))&&(Mt.x=Tt,Mt.z=jt,ft.x=0,ft.z=0);const Ai=(Mt.x-nt/2)*ot,ti=(Mt.z-nt/2)*ot;if(dt.worldPosition&&dt.worldPosition.set(Ai,ot/2,ti),rt.position.copy(dt.worldPosition),Math.abs(ft.x)>.01||Math.abs(ft.z)>.01){const ge=Math.atan2(ft.x,ft.z);if(rt.rotation.y=ge,dt.direction.set(ft.x,0,ft.z).normalize(),vt.current&&it.current){const ze=it.current,qe=ze.position.clone();qe.add(dt.direction.clone().multiplyScalar(ot)),ze.lookAt(qe)}}Math.floor(Mt.x)===nt-2&&Math.floor(Mt.z)===nt-2&&(console.log("Victory reached!"),lt.current=!0,i(!0),l(!0),_t.current=!0,celebrate(),vt.current&&(console.log("Switching to top-down view for celebration"),setTimeout(()=>{if(camera.position.clone(),h(!1),vt.current=!1,it.current){const ge=it.current,ze=typeof calculateOptimalCameraHeight=="function"?calculateOptimalCameraHeight():30;ge.position.set(0,ze,0),ge.up.set(0,0,-1),ge.lookAt(0,0,0),ge.updateProjectionMatrix()}},500)))},et=()=>{console.log("⚡ Initializing physics system");const X=window.MAZE_SIZE||21,nt=window.WALL_THICKNESS||2;if(z.current){z.current.position={x:1,z:1},z.current.velocity={x:0,z:0};const ot=(1-X/2)*nt,dt=(1-X/2)*nt;console.log(`Converting maze coords (1,1) to world coords (${ot}, ${dt})`),z.current.worldPosition?z.current.worldPosition.set(ot,nt/2,dt):z.current.worldPosition=new Z(ot,nt/2,dt),z.current.mesh&&(z.current.mesh.position.copy(z.current.worldPosition),console.log(`Set player mesh position to world coords: (${z.current.worldPosition.x}, ${z.current.worldPosition.y}, ${z.current.worldPosition.z})`))}window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:.3,mazeSize:X,wallThickness:nt},console.log("Physics initialized - player at entrance position with gravity-based movement")};de.useEffect(()=>{let X,nt=0;const ot=1e3/60;let dt=0;function ft(Mt){if(X=requestAnimationFrame(ft),nt===0){nt=Mt;return}const rt=Mt-nt;for(nt=Mt,dt+=rt;dt>=ot;)I.current&&M&&!e&&!d&&ae(),dt-=ot}return X=requestAnimationFrame(ft),()=>{X&&cancelAnimationFrame(X)}},[M,e,d]);const Oe=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",se,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",ne,{passive:!0}),console.log("✓ Added devicemotion listener")),A(!0),v(!0),window.physics||et()},ne=X=>{if(ht(ot=>({...ot,eventCount:ot.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const nt=X.accelerationIncludingGravity;if(nt&&nt.x!==null&&nt.y!==null&&nt.z!==null){let dt=Math.min(Math.max(nt.x/5,-1),1),ft=Math.min(Math.max(nt.y/5,-1),1);const Mt=.05;Math.abs(dt)<Mt&&(dt=0),Math.abs(ft)<Mt&&(ft=0),window.physics.gravityX=-dt,window.physics.gravityZ=ft}},se=X=>{if(!(X.beta===null&&X.gamma===null)&&(!M&&(X.beta!==null||X.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),A(!0),v(!0)),X.beta!==null&&X.gamma!==null)){let nt=X.beta,ot=X.gamma;if(performance.now()%5e3<20&&console.log(`Raw orientation: beta=${nt.toFixed(2)}°, gamma=${ot.toFixed(2)}°`),window.orientation!==void 0){const Xt=window.orientation;if(Xt===90){const Lt=nt;nt=ot,ot=-Lt}else if(Xt===-90){const Lt=nt;nt=-ot,ot=Lt}else Xt===180&&(nt=-nt,ot=-ot)}window.physics||et();const dt=25,ft=1;let Mt=0,rt=0;Math.abs(ot)>ft&&(Mt=Math.sign(ot)*Math.min(1,(Math.abs(ot)-ft)/(dt-ft))),Math.abs(nt)>ft&&(rt=Math.sign(nt)*Math.min(1,(Math.abs(nt)-ft)/(dt-ft)));const le=Xt=>Math.sign(Xt)*Math.pow(Math.abs(Xt),.8);Mt=le(Mt),rt=le(rt),window.physics&&(window.physics.gravityX=Mt,window.physics.gravityZ=rt,performance.now()%2e3<20&&console.log(`Gravity vector: X=${Mt.toFixed(2)}, Z=${rt.toFixed(2)}`),ht(Xt=>({...Xt,beta:parseFloat(nt.toFixed(2)),gamma:parseFloat(ot.toFixed(2)),gravity:{x:Mt,z:rt},eventCount:Xt.eventCount+1,lastUpdate:Date.now(),eventType:"orientation"}))),q.current={beta:nt,gamma:ot}}};de.useEffect(()=>{z.current?z.current.worldPosition||(z.current.worldPosition=new Z(2,0,2),console.log("Added missing worldPosition to existing playerRef")):(z.current={position:{x:1,z:1},velocity:{x:0,z:0},direction:new Z(0,0,1),worldPosition:new Z(2,0,2),mesh:null},console.log("Initialized playerRef with default values including worldPosition"))},[]),de.useEffect(()=>{const X=()=>{if(!Q()){console.log("Not a mobile device, skipping orientation lock");return}try{window.screen&&window.screen.orientation?window.screen.orientation.lock("portrait").then(()=>console.log("✓ Orientation locked to portrait")).catch(nt=>console.warn("Cannot lock orientation:",nt)):window.orientation!==void 0&&(console.log("Using orientation event fallback for iOS"),window.addEventListener("orientationchange",function(){window.orientation===90||window.orientation===-90?be("Please rotate your device to portrait mode"):be("")}))}catch(nt){console.warn("Orientation locking not supported:",nt)}};return Q()?(console.log("Mobile device detected, locking to portrait orientation"),X(),ce("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait")):(console.log("Desktop device detected, allowing any orientation"),ce("width=device-width, initial-scale=1.0")),()=>{window.removeEventListener("orientationchange",()=>{})}},[]);const[Zt,be]=de.useState(""),ce=X=>{let nt=document.querySelector('meta[name="viewport"]');if(nt||(nt=document.createElement("meta"),nt.name="viewport",document.head.appendChild(nt)),nt.setAttribute("content",X),console.log("✓ Viewport meta set:",X),Q()){let ot=document.querySelector('meta[name="screen-orientation"]');ot||(ot=document.createElement("meta"),ot.name="screen-orientation",document.head.appendChild(ot)),ot.setAttribute("content","portrait")}},L=()=>{if(!Q())return be(""),window.physics&&(window.physics.active=!0),!0;const X=window.matchMedia("(orientation: landscape)").matches;return X?(be("Please rotate your device to portrait mode"),window.physics&&(window.physics.active=!1)):(be(""),window.physics&&(window.physics.active=!0)),!X};de.useEffect(()=>{L();const X=()=>{L(),it.current&&!u&&setTimeout(()=>{const nt=calculateOptimalCameraHeight(D);it.current.position.y=nt},300)};if(Q()){window.addEventListener("orientationchange",X),window.addEventListener("resize",X);const nt=window.matchMedia("(orientation: portrait)");return nt.addEventListener("change",X),()=>{window.removeEventListener("orientationchange",X),window.removeEventListener("resize",X),nt.removeEventListener("change",X)}}},[u,D]);const b={position:"fixed",top:0,left:0,width:"100%",height:"100%",display:Zt?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.85)",color:"white",fontSize:"1.5rem",textAlign:"center",padding:"2rem",zIndex:9999,fontFamily:"Arial, sans-serif"},it=de.useRef(null);de.useRef(null),de.useRef(null),de.useRef(null),de.useEffect(()=>{D&&(console.log("Setting up touch control buttons"),Yt.current&&Rt(Yt,"up"),Ht.current&&Rt(Ht,"down"),Gt.current&&Rt(Gt,"left"),Kt.current&&Rt(Kt,"right"))},[D]);const Pt=(X,nt)=>{X.preventDefault(),X.stopPropagation(),pt(nt)},Rt=(X,nt)=>{if(!X.current)return;console.log(`Setting up ${nt} button`);const ot=X.current,dt=ot.cloneNode(!0);ot.parentNode.replaceChild(dt,ot),X.current=dt;const ft=Xt=>Pt(Xt,nt),Mt=Xt=>Xt.preventDefault(),rt=Xt=>Pt(Xt,nt),le=Xt=>Pt(Xt,nt);dt.addEventListener("touchstart",ft,{passive:!1}),dt.addEventListener("touchend",Mt,{passive:!1}),dt.addEventListener("mousedown",rt),dt.addEventListener("click",le),console.log(`Event listeners added to ${nt} button`)};return Te.jsxs(Te.Fragment,{children:[Te.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),_&&Te.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[Te.jsx("button",{className:"permission-button",onClick:X=>{X.preventDefault(),X.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{j()},10)},onTouchStart:X=>{console.log("Button touch started"),X.stopPropagation()},onTouchEnd:X=>{console.log("Button touch ended"),X.preventDefault(),X.stopPropagation(),setTimeout(()=>{j()},10)},children:"Enable Tilt Controls"}),Te.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),R&&M&&Te.jsxs("div",{className:"gyroscope-indicator",children:[Te.jsx("div",{className:"gyroscope-icon",children:Te.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:Te.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),Te.jsx("span",{children:"Tilt to Move"})]}),r&&Te.jsxs("div",{className:"victory-message",style:{zIndex:2e3},children:[Te.jsx("h1",{children:"You Win!"}),Te.jsx("p",{children:"Congratulations on completing the maze!"}),Te.jsx("button",{onClick:X=>{X.preventDefault(),X.stopPropagation(),C()},onTouchStart:X=>{X.preventDefault(),X.stopPropagation(),C()},children:"Play Again"})]}),D&&Te.jsxs("div",{className:"touch-controls",children:[Te.jsxs("div",{className:"touch-controls-row",children:[Te.jsx("div",{className:"touch-button-spacer"}),Te.jsx("button",{ref:Yt,className:"touch-button up-button","data-direction":"up",children:"▲"}),Te.jsx("div",{className:"touch-button-spacer"})]}),Te.jsxs("div",{className:"touch-controls-row",children:[Te.jsx("button",{ref:Gt,className:"touch-button left-button","data-direction":"left",children:"◀"}),Te.jsx("div",{className:"touch-button-spacer"}),Te.jsx("button",{ref:Kt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),Te.jsxs("div",{className:"touch-controls-row",children:[Te.jsx("div",{className:"touch-button-spacer"}),Te.jsx("button",{ref:Ht,className:"touch-button down-button","data-direction":"down",children:"▼"}),Te.jsx("div",{className:"touch-button-spacer"})]})]}),m&&Te.jsx("div",{className:"view-mode-indicator",children:u?"First Person View":"Top-Down View"}),Te.jsxs("div",{style:b,children:[Te.jsx("div",{style:{marginBottom:"1rem"},children:Te.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",children:Te.jsx("path",{fill:"white",d:"M7.5,21.5C4.25,21.5 1.5,18.75 1.5,15.5V8.5C1.5,5.5 4,3 7,3H17C20,3 22.5,5.5 22.5,8.5V15.5C22.5,18.75 19.75,21.5 16.5,21.5H7.5M7,5C5.17,5 3.5,6.67 3.5,8.5V15.5C3.5,17.7 5.3,19.5 7.5,19.5H16.5C18.7,19.5 20.5,17.7 20.5,15.5V8.5C20.5,6.67 18.83,5 17,5H7M7,8H17V16H7V8M12,17H7V19H12V17Z"})})}),Te.jsx("p",{style:{margin:"0 0 1rem 0"},children:Zt}),Te.jsx("div",{style:{marginTop:"1rem",fontSize:"1rem",opacity:.8},children:"The maze game works best in portrait orientation on mobile devices"})]})]})}Fy.createRoot(document.getElementById("root")).render(Te.jsx(de.StrictMode,{children:Te.jsx(dA,{})}));
