(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Cy(){if(tg)return wo;tg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var eg;function Dy(){return eg||(eg=1,Lf.exports=Cy()),Lf.exports}var be=Dy(),Uf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Ly(){if(ng)return ve;ng=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function v(C,Q,ht){this.props=C,this.context=Q,this.refs=R,this.updater=ht||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,Q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Q,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function P(C,Q,ht){this.props=C,this.context=Q,this.refs=R,this.updater=ht||M}var D=P.prototype=new _;D.constructor=P,A(D,v.prototype),D.isPureReactComponent=!0;var B=Array.isArray,X={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function I(C,Q,ht,Dt,Y,dt){return ht=dt.ref,{$$typeof:o,type:C,key:Q,ref:ht!==void 0?ht:null,props:dt}}function vt(C,Q){return I(C.type,Q,void 0,void 0,void 0,C.props)}function F(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function E(C){var Q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ht){return Q[ht]})}var O=/\/+/g;function gt(C,Q){return typeof C=="object"&&C!==null&&C.key!=null?E(""+C.key):Q.toString(36)}function wt(){}function J(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(wt,wt):(C.status="pending",C.then(function(Q){C.status==="pending"&&(C.status="fulfilled",C.value=Q)},function(Q){C.status==="pending"&&(C.status="rejected",C.reason=Q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function lt(C,Q,ht,Dt,Y){var dt=typeof C;(dt==="undefined"||dt==="boolean")&&(C=null);var bt=!1;if(C===null)bt=!0;else switch(dt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(C.$$typeof){case o:case e:bt=!0;break;case g:return bt=C._init,lt(bt(C._payload),Q,ht,Dt,Y)}}if(bt)return Y=Y(C),bt=Dt===""?"."+gt(C,0):Dt,B(Y)?(ht="",bt!=null&&(ht=bt.replace(O,"$&/")+"/"),lt(Y,Q,ht,"",function(Gt){return Gt})):Y!=null&&(F(Y)&&(Y=vt(Y,ht+(Y.key==null||C&&C.key===Y.key?"":(""+Y.key).replace(O,"$&/")+"/")+bt)),Q.push(Y)),1;bt=0;var Yt=Dt===""?".":Dt+":";if(B(C))for(var Ht=0;Ht<C.length;Ht++)Dt=C[Ht],dt=Yt+gt(Dt,Ht),bt+=lt(Dt,Q,ht,dt,Y);else if(Ht=x(C),typeof Ht=="function")for(C=Ht.call(C),Ht=0;!(Dt=C.next()).done;)Dt=Dt.value,dt=Yt+gt(Dt,Ht++),bt+=lt(Dt,Q,ht,dt,Y);else if(dt==="object"){if(typeof C.then=="function")return lt(J(C),Q,ht,Dt,Y);throw Q=String(C),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return bt}function V(C,Q,ht){if(C==null)return C;var Dt=[],Y=0;return lt(C,Dt,"","",function(dt){return Q.call(ht,dt,Y++)}),Dt}function ct(C){if(C._status===-1){var Q=C._result;Q=Q(),Q.then(function(ht){(C._status===0||C._status===-1)&&(C._status=1,C._result=ht)},function(ht){(C._status===0||C._status===-1)&&(C._status=2,C._result=ht)}),C._status===-1&&(C._status=0,C._result=Q)}if(C._status===1)return C._result.default;throw C._result}var nt=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ft(){}return ve.Children={map:V,forEach:function(C,Q,ht){V(C,function(){Q.apply(this,arguments)},ht)},count:function(C){var Q=0;return V(C,function(){Q++}),Q},toArray:function(C){return V(C,function(Q){return Q})||[]},only:function(C){if(!F(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ve.Component=v,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=P,ve.StrictMode=r,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ve.act=function(){throw Error("act(...) is not supported in production builds of React.")},ve.cache=function(C){return function(){return C.apply(null,arguments)}},ve.cloneElement=function(C,Q,ht){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Dt=A({},C.props),Y=C.key,dt=void 0;if(Q!=null)for(bt in Q.ref!==void 0&&(dt=void 0),Q.key!==void 0&&(Y=""+Q.key),Q)!W.call(Q,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&Q.ref===void 0||(Dt[bt]=Q[bt]);var bt=arguments.length-2;if(bt===1)Dt.children=ht;else if(1<bt){for(var Yt=Array(bt),Ht=0;Ht<bt;Ht++)Yt[Ht]=arguments[Ht+2];Dt.children=Yt}return I(C.type,Y,void 0,void 0,dt,Dt)},ve.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},ve.createElement=function(C,Q,ht){var Dt,Y={},dt=null;if(Q!=null)for(Dt in Q.key!==void 0&&(dt=""+Q.key),Q)W.call(Q,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(Y[Dt]=Q[Dt]);var bt=arguments.length-2;if(bt===1)Y.children=ht;else if(1<bt){for(var Yt=Array(bt),Ht=0;Ht<bt;Ht++)Yt[Ht]=arguments[Ht+2];Y.children=Yt}if(C&&C.defaultProps)for(Dt in bt=C.defaultProps,bt)Y[Dt]===void 0&&(Y[Dt]=bt[Dt]);return I(C,dt,void 0,void 0,null,Y)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(C){return{$$typeof:d,render:C}},ve.isValidElement=F,ve.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:ct}},ve.memo=function(C,Q){return{$$typeof:m,type:C,compare:Q===void 0?null:Q}},ve.startTransition=function(C){var Q=X.T,ht={};X.T=ht;try{var Dt=C(),Y=X.S;Y!==null&&Y(ht,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(ft,nt)}catch(dt){nt(dt)}finally{X.T=Q}},ve.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ve.use=function(C){return X.H.use(C)},ve.useActionState=function(C,Q,ht){return X.H.useActionState(C,Q,ht)},ve.useCallback=function(C,Q){return X.H.useCallback(C,Q)},ve.useContext=function(C){return X.H.useContext(C)},ve.useDebugValue=function(){},ve.useDeferredValue=function(C,Q){return X.H.useDeferredValue(C,Q)},ve.useEffect=function(C,Q){return X.H.useEffect(C,Q)},ve.useId=function(){return X.H.useId()},ve.useImperativeHandle=function(C,Q,ht){return X.H.useImperativeHandle(C,Q,ht)},ve.useInsertionEffect=function(C,Q){return X.H.useInsertionEffect(C,Q)},ve.useLayoutEffect=function(C,Q){return X.H.useLayoutEffect(C,Q)},ve.useMemo=function(C,Q){return X.H.useMemo(C,Q)},ve.useOptimistic=function(C,Q){return X.H.useOptimistic(C,Q)},ve.useReducer=function(C,Q,ht){return X.H.useReducer(C,Q,ht)},ve.useRef=function(C){return X.H.useRef(C)},ve.useState=function(C){return X.H.useState(C)},ve.useSyncExternalStore=function(C,Q,ht){return X.H.useSyncExternalStore(C,Q,ht)},ve.useTransition=function(){return X.H.useTransition()},ve.version="19.0.0",ve}var ig;function Ad(){return ig||(ig=1,Uf.exports=Ly()),Uf.exports}var fe=Ad(),Nf={exports:{}},Ro={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Uy(){return ag||(ag=1,function(o){function e(V,ct){var nt=V.length;V.push(ct);t:for(;0<nt;){var ft=nt-1>>>1,C=V[ft];if(0<l(C,ct))V[ft]=ct,V[nt]=C,nt=ft;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ct=V[0],nt=V.pop();if(nt!==ct){V[0]=nt;t:for(var ft=0,C=V.length,Q=C>>>1;ft<Q;){var ht=2*(ft+1)-1,Dt=V[ht],Y=ht+1,dt=V[Y];if(0>l(Dt,nt))Y<C&&0>l(dt,Dt)?(V[ft]=dt,V[Y]=nt,ft=Y):(V[ft]=Dt,V[ht]=nt,ft=ht);else if(Y<C&&0>l(dt,nt))V[ft]=dt,V[Y]=nt,ft=Y;else break t}}return ct}function l(V,ct){var nt=V.sortIndex-ct.sortIndex;return nt!==0?nt:V.id-ct.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,y=null,x=3,M=!1,A=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(V){for(var ct=i(m);ct!==null;){if(ct.callback===null)r(m);else if(ct.startTime<=V)r(m),ct.sortIndex=ct.expirationTime,e(p,ct);else break;ct=i(m)}}function B(V){if(R=!1,D(V),!A)if(i(p)!==null)A=!0,J();else{var ct=i(m);ct!==null&&lt(B,ct.startTime-V)}}var X=!1,W=-1,I=5,vt=-1;function F(){return!(o.unstable_now()-vt<I)}function E(){if(X){var V=o.unstable_now();vt=V;var ct=!0;try{t:{A=!1,R&&(R=!1,_(W),W=-1),M=!0;var nt=x;try{e:{for(D(V),y=i(p);y!==null&&!(y.expirationTime>V&&F());){var ft=y.callback;if(typeof ft=="function"){y.callback=null,x=y.priorityLevel;var C=ft(y.expirationTime<=V);if(V=o.unstable_now(),typeof C=="function"){y.callback=C,D(V),ct=!0;break e}y===i(p)&&r(p),D(V)}else r(p);y=i(p)}if(y!==null)ct=!0;else{var Q=i(m);Q!==null&&lt(B,Q.startTime-V),ct=!1}}break t}finally{y=null,x=nt,M=!1}ct=void 0}}finally{ct?O():X=!1}}}var O;if(typeof P=="function")O=function(){P(E)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,wt=gt.port2;gt.port1.onmessage=E,O=function(){wt.postMessage(null)}}else O=function(){v(E,0)};function J(){X||(X=!0,O())}function lt(V,ct){W=v(function(){V(o.unstable_now())},ct)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,J())},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(V){switch(x){case 1:case 2:case 3:var ct=3;break;default:ct=x}var nt=x;x=ct;try{return V()}finally{x=nt}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,ct){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var nt=x;x=V;try{return ct()}finally{x=nt}},o.unstable_scheduleCallback=function(V,ct,nt){var ft=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?ft+nt:ft):nt=ft,V){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=nt+C,V={id:g++,callback:ct,priorityLevel:V,startTime:nt,expirationTime:C,sortIndex:-1},nt>ft?(V.sortIndex=nt,e(m,V),i(p)===null&&V===i(m)&&(R?(_(W),W=-1):R=!0,lt(B,nt-ft))):(V.sortIndex=C,e(p,V),A||M||(A=!0,J())),V},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(V){var ct=x;return function(){var nt=x;x=ct;try{return V.apply(this,arguments)}finally{x=nt}}}}(Pf)),Pf}var rg;function Ny(){return rg||(rg=1,Of.exports=Uy()),Of.exports}var zf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Oy(){if(sg)return Dn;sg=1;var o=Ad();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Dn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Dn.requestFormReset=function(p){r.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.0.0",Dn}var og;function Py(){if(og)return zf.exports;og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Oy(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function zy(){if(lg)return Ro;lg=1;var o=Ny(),e=Ad(),i=Py();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,O,gt;function wt(t){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+O+t+gt}var J=!1;function lt(t,n){if(!t||J)return"";J=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(_t){var ut=_t}Reflect.construct(t,[],Ct)}else{try{Ct.call()}catch(_t){ut=_t}t.call(Ct.prototype)}}else{try{throw Error()}catch(_t){ut=_t}(Ct=t())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(_t){if(_t&&ut&&typeof _t.stack=="string")return[_t.stack,ut.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],w=f[1];if(S&&w){var z=S.split(`
`),$=w.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===$.length)for(s=z.length-1,c=$.length-1;1<=s&&0<=c&&z[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==$[c]){var yt=`
`+z[s].replace(" at new "," at ");return t.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",t.displayName)),yt}while(1<=s&&0<=c);break}}}finally{J=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?wt(a):""}function V(t){switch(t.tag){case 26:case 27:case 5:return wt(t.type);case 16:return wt("Lazy");case 13:return wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return t=lt(t.type,!1),t;case 11:return t=lt(t.type.render,!1),t;case 1:return t=lt(t.type,!0),t;default:return""}}function ct(t){try{var n="";do n+=V(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nt(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ft(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if(nt(t)!==t)throw Error(r(188))}function Q(t){var n=t.alternate;if(!n){if(n=nt(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),t;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,w=c.child;w;){if(w===a){S=!0,a=c,s=f;break}if(w===s){S=!0,s=c,a=f;break}w=w.sibling}if(!S){for(w=f.child;w;){if(w===a){S=!0,a=f,s=c;break}if(w===s){S=!0,s=f,a=c;break}w=w.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function ht(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=ht(t),n!==null)return n;t=t.sibling}return null}var Dt=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},bt=[],Yt=-1;function Ht(t){return{current:t}}function Gt(t){0>Yt||(t.current=bt[Yt],bt[Yt]=null,Yt--)}function Qt(t,n){Yt++,bt[Yt]=t.current,t.current=n}var ae=Ht(null),et=Ht(null),Ne=Ht(null),ne=Ht(null);function oe(t,n){switch(Qt(Ne,n),Qt(et,t),Qt(ae,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Cm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Cm(t),n=Dm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Gt(ae),Qt(ae,n)}function Kt(){Gt(ae),Gt(et),Gt(Ne)}function Ae(t){t.memoizedState!==null&&Qt(ne,t);var n=ae.current,a=Dm(n,t.type);n!==a&&(Qt(et,t),Qt(ae,a))}function ce(t){et.current===t&&(Gt(ae),Gt(et)),ne.current===t&&(Gt(ne),Mo._currentValue=dt)}var L=Object.prototype.hasOwnProperty,b=o.unstable_scheduleCallback,ot=o.unstable_cancelCallback,Nt=o.unstable_shouldYield,Rt=o.unstable_requestPaint,Z=o.unstable_now,it=o.unstable_getCurrentPriorityLevel,rt=o.unstable_ImmediatePriority,mt=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,At=o.unstable_LowPriority,st=o.unstable_IdlePriority,se=o.log,qt=o.unstable_setDisableYieldValue,Ot=null,Bt=null;function kt(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ot,t,void 0,(t.current.flags&128)===128)}catch{}}function Pt(t){if(typeof se=="function"&&qt(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Ot,t)}catch{}}var N=Math.clz32?Math.clz32:Ft,pt=Math.log,Lt=Math.LN2;function Ft(t){return t>>>=0,t===0?32:31-(pt(t)/Lt|0)|0}var U=128,Et=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,S=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=Tt(a):(f&=w,f!==0?s=Tt(f):t||(S=w&~S,S!==0&&(s=Tt(S))))):(w=a&~c,w!==0?s=Tt(w):f!==0?s=Tt(f):t||(S=a&~S,S!==0&&(s=Tt(S)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ge(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function le(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function Ee(){var t=Et;return Et<<=1,!(Et&62914560)&&(Et=4194304),t}function Ve(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function me(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _e(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=S&~a;0<a;){var yt=31-N(a),Ct=1<<yt;w[yt]=0,z[yt]=-1;var ut=$[yt];if(ut!==null)for($[yt]=null,yt=0;yt<ut.length;yt++){var _t=ut[yt];_t!==null&&(_t.lane&=-536870913)}a&=~Ct}s!==0&&qe(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function qe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-N(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function Wa(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-N(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function la(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ti(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:jm(t.type))}function nn(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var mn=Math.random().toString(36).slice(2),je="__reactFiber$"+mn,Je="__reactProps$"+mn,ti="__reactContainer$"+mn,It="__reactEvents$"+mn,Xt="__reactListeners$"+mn,T="__reactHandles$"+mn,H="__reactResources$"+mn,G="__reactMarker$"+mn;function k(t){delete t[je],delete t[Je],delete t[It],delete t[Xt],delete t[T]}function q(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ti]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Nm(t);t!==null;){if(a=t[je])return a;t=Nm(t)}return n}t=a,a=t.parentNode}return null}function St(t){if(t=t[je]||t[ti]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ut(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function zt(t){var n=t[H];return n||(n=t[H]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Vt(t){t[G]=!0}var ee=new Set,te={};function $t(t,n){we(t,n),we(t+"Capture",n)}function we(t,n){for(te[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var Pe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wn={},ze={};function de(t){return L.call(ze,t)?!0:L.call(wn,t)?!1:He.test(t)?ze[t]=!0:(wn[t]=!0,!1)}function bi(t,n,a){if(de(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function gn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pi(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _n(t){var n=pi(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function an(t){t._valueTracker||(t._valueTracker=_n(t))}function Ai(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=pi(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function Rn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(t,n,a,s,c,f,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,S,Ze(n)):a!=null?Cc(t,S,Ze(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Ze(w):t.removeAttribute("name")}function Os(t,n,a,s,c,f,S,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=w?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Cc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Pd(t,n,a){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ze(a):""}function zd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ze(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Bd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Bd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Id(t){var n=St(t);if(n&&(t=n.stateNode)){var a=t[Je]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Je]||null;if(!c)throw Error(r(90));Ns(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ai(s)}break t;case"textarea":Pd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var Nc=!1;function Hd(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(Tl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Id(n),t)))for(n=0;n<t.length;n++)Id(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Pe)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Oc=!1}var ua=null,Pc=null,Vo=null;function Gd(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Vd(){return!1}function Hn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Vd,this.isPropagationStopped=Vd,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Hn(Xa),Bs=E({},Xa,{view:0,detail:0}),C0=Hn(Bs),zc,Bc,Fs,qo=E({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(zc=t.screenX-Fs.screenX,Bc=t.screenY-Fs.screenY):Bc=zc=0,Fs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),kd=Hn(qo),D0=E({},qo,{dataTransfer:0}),L0=Hn(D0),U0=E({},Bs,{relatedTarget:0}),Fc=Hn(U0),N0=E({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Hn(N0),P0=E({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Hn(P0),B0=E({},Xa,{data:0}),Wd=Hn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=E({},Bs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Hn(V0),W0=E({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Hn(W0),X0=E({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Hn(X0),Y0=E({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Hn(Y0),Z0=E({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Hn(Z0),Q0=E({},Xa,{newState:0,oldState:0}),J0=Hn(Q0),$0=[9,13,27,32],Hc=Pe&&"CompositionEvent"in window,Is=null;Pe&&"documentMode"in document&&(Is=document.documentMode);var tv=Pe&&"TextEvent"in window&&!Is,qd=Pe&&(!Hc||Is&&8<Is&&11>=Is),Yd=" ",jd=!1;function Zd(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Kd(n);case"keypress":return n.which!==32?null:(jd=!0,Yd);case"textInput":return t=n.data,t===Yd&&jd?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Zd(t,n)?(t=Gd(),Vo=Pc=ua=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qd&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function Jd(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function av(t){Tm(t,0)}function Yo(t){var n=Ut(t);if(Ai(n))return t}function $d(t,n){if(t==="change")return n}var th=!1;if(Pe){var Gc;if(Pe){var Vc="oninput"in document;if(!Vc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Vc=typeof eh.oninput=="function"}Gc=Vc}else Gc=!1;th=Gc&&(!document.documentMode||9<document.documentMode)}function nh(){Hs&&(Hs.detachEvent("onpropertychange",ih),Gs=Hs=null)}function ih(t){if(t.propertyName==="value"&&Yo(Gs)){var n=[];Jd(n,Gs,t,Uc(t)),Hd(av,n)}}function rv(t,n,a){t==="focusin"?(nh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",ih)):t==="focusout"&&nh()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Gs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:cv;function Vs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!L.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rh(t,n){var a=ah(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ah(a)}}function sh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function oh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=oh(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&sh(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=rh(n,f);var S=rh(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(S.node,S.offset)):(t.setEnd(S.node,S.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=Pe&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,ks=null,Xc=!1;function lh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==ca(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},qc={},ch={};Pe&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Ya(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ch)return qc[t]=n[a];return t}var uh=Ya("animationend"),fh=Ya("animationiteration"),dh=Ya("animationstart"),dv=Ya("transitionrun"),hv=Ya("transitionstart"),pv=Ya("transitioncancel"),hh=Ya("transitionend"),ph=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(t,n){ph.set(t,n),$t(n,[t])}var ei=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&gh(a,c,f)}}function Zo(t,n,a,s){ei[Lr++]=t,ei[Lr++]=n,ei[Lr++]=a,ei[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function fa(t,n){return Zo(t,null,null,n),Ko(t)}function gh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-N(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<mo)throw mo=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},_h=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=_h.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ct(n)},_h.set(t,n),n)}return{value:t,source:n,stack:ct(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ii=[],ai=0,ja=null,Bi=1,Fi="";function Za(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function vh(t,n,a){ii[ai++]=Bi,ii[ai++]=Fi,ii[ai++]=ja,ja=t;var s=Bi;t=Fi;var c=32-N(s)-1;s&=~(1<<c),a+=1;var f=32-N(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Bi=1<<32-N(n)+c|a<<c|s,Fi=f+t}else Bi=1<<f|a<<c|s,Fi=t}function Zc(t){t.return!==null&&(Za(t,1),vh(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===ja;)ja=ii[--ai],ii[ai]=null,Fi=ii[--ai],ii[ai]=null,Bi=ii[--ai],ii[ai]=null}var On=null,Mn=null,Le=!1,gi=null,wi=!1,Qc=Error(r(519));function Ka(t){var n=Error(r(418,""));throw qs(ni(n,t)),Qc}function yh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[je]=t,n[Je]=s,a){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)Re(_o[a],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),an(n);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),zd(n,s.value,s.defaultValue,s.children),an(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rm(n.textContent,a)?(s.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),s.onScroll!=null&&Re("scroll",n),s.onScrollEnd!=null&&Re("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Ka(t)}function Sh(t){for(On=t.return;On;)switch(On.tag){case 3:case 27:wi=!0;return;case 5:case 13:wi=!1;return;default:On=On.return}}function Ws(t){if(t!==On)return!1;if(!Le)return Sh(t),Le=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Mn&&Ka(t),Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Mn=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Mn=null}}else Mn=On?vi(t.stateNode.nextSibling):null;return!0}function Xs(){Mn=On=null,Le=!1}function qs(t){gi===null?gi=[t]:gi.push(t)}var Ys=Error(r(460)),xh=Error(r(474)),Jc={then:function(){}};function Mh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function Eh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ys?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Ys?Error(r(483)):t}throw js=n,Ys}}var js=null;function Th(){if(js===null)throw Error(r(459));var t=js;return js=null,t}var Pr=null,Zs=0;function tl(t){var n=Zs;return Zs+=1,Pr===null&&(Pr=[]),Eh(Pr,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bh(t){var n=t._init;return n(t._payload)}function Ah(t){function n(tt,K){if(t){var at=tt.deletions;at===null?(tt.deletions=[K],tt.flags|=16):at.push(K)}}function a(tt,K){if(!t)return null;for(;K!==null;)n(tt,K),K=K.sibling;return null}function s(tt){for(var K=new Map;tt!==null;)tt.key!==null?K.set(tt.key,tt):K.set(tt.index,tt),tt=tt.sibling;return K}function c(tt,K){return tt=Ea(tt,K),tt.index=0,tt.sibling=null,tt}function f(tt,K,at){return tt.index=at,t?(at=tt.alternate,at!==null?(at=at.index,at<K?(tt.flags|=33554434,K):at):(tt.flags|=33554434,K)):(tt.flags|=1048576,K)}function S(tt){return t&&tt.alternate===null&&(tt.flags|=33554434),tt}function w(tt,K,at,Mt){return K===null||K.tag!==6?(K=qu(at,tt.mode,Mt),K.return=tt,K):(K=c(K,at),K.return=tt,K)}function z(tt,K,at,Mt){var Jt=at.type;return Jt===p?yt(tt,K,at.props.children,Mt,at.key):K!==null&&(K.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===P&&bh(Jt)===K.type)?(K=c(K,at.props),Ks(K,at),K.return=tt,K):(K=yl(at.type,at.key,at.props,null,tt.mode,Mt),Ks(K,at),K.return=tt,K)}function $(tt,K,at,Mt){return K===null||K.tag!==4||K.stateNode.containerInfo!==at.containerInfo||K.stateNode.implementation!==at.implementation?(K=Yu(at,tt.mode,Mt),K.return=tt,K):(K=c(K,at.children||[]),K.return=tt,K)}function yt(tt,K,at,Mt,Jt){return K===null||K.tag!==7?(K=sr(at,tt.mode,Mt,Jt),K.return=tt,K):(K=c(K,at),K.return=tt,K)}function Ct(tt,K,at){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=qu(""+K,tt.mode,at),K.return=tt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case h:return at=yl(K.type,K.key,K.props,null,tt.mode,at),Ks(at,K),at.return=tt,at;case d:return K=Yu(K,tt.mode,at),K.return=tt,K;case P:var Mt=K._init;return K=Mt(K._payload),Ct(tt,K,at)}if(Dt(K)||W(K))return K=sr(K,tt.mode,at,null),K.return=tt,K;if(typeof K.then=="function")return Ct(tt,tl(K),at);if(K.$$typeof===M)return Ct(tt,gl(tt,K),at);el(tt,K)}return null}function ut(tt,K,at,Mt){var Jt=K!==null?K.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Jt!==null?null:w(tt,K,""+at,Mt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case h:return at.key===Jt?z(tt,K,at,Mt):null;case d:return at.key===Jt?$(tt,K,at,Mt):null;case P:return Jt=at._init,at=Jt(at._payload),ut(tt,K,at,Mt)}if(Dt(at)||W(at))return Jt!==null?null:yt(tt,K,at,Mt,null);if(typeof at.then=="function")return ut(tt,K,tl(at),Mt);if(at.$$typeof===M)return ut(tt,K,gl(tt,at),Mt);el(tt,at)}return null}function _t(tt,K,at,Mt,Jt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return tt=tt.get(at)||null,w(K,tt,""+Mt,Jt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case h:return tt=tt.get(Mt.key===null?at:Mt.key)||null,z(K,tt,Mt,Jt);case d:return tt=tt.get(Mt.key===null?at:Mt.key)||null,$(K,tt,Mt,Jt);case P:var xe=Mt._init;return Mt=xe(Mt._payload),_t(tt,K,at,Mt,Jt)}if(Dt(Mt)||W(Mt))return tt=tt.get(at)||null,yt(K,tt,Mt,Jt,null);if(typeof Mt.then=="function")return _t(tt,K,at,tl(Mt),Jt);if(Mt.$$typeof===M)return _t(tt,K,at,gl(K,Mt),Jt);el(K,Mt)}return null}function ie(tt,K,at,Mt){for(var Jt=null,xe=null,re=K,ue=K=0,Sn=null;re!==null&&ue<at.length;ue++){re.index>ue?(Sn=re,re=null):Sn=re.sibling;var Ue=ut(tt,re,at[ue],Mt);if(Ue===null){re===null&&(re=Sn);break}t&&re&&Ue.alternate===null&&n(tt,re),K=f(Ue,K,ue),xe===null?Jt=Ue:xe.sibling=Ue,xe=Ue,re=Sn}if(ue===at.length)return a(tt,re),Le&&Za(tt,ue),Jt;if(re===null){for(;ue<at.length;ue++)re=Ct(tt,at[ue],Mt),re!==null&&(K=f(re,K,ue),xe===null?Jt=re:xe.sibling=re,xe=re);return Le&&Za(tt,ue),Jt}for(re=s(re);ue<at.length;ue++)Sn=_t(re,tt,ue,at[ue],Mt),Sn!==null&&(t&&Sn.alternate!==null&&re.delete(Sn.key===null?ue:Sn.key),K=f(Sn,K,ue),xe===null?Jt=Sn:xe.sibling=Sn,xe=Sn);return t&&re.forEach(function(Da){return n(tt,Da)}),Le&&Za(tt,ue),Jt}function pe(tt,K,at,Mt){if(at==null)throw Error(r(151));for(var Jt=null,xe=null,re=K,ue=K=0,Sn=null,Ue=at.next();re!==null&&!Ue.done;ue++,Ue=at.next()){re.index>ue?(Sn=re,re=null):Sn=re.sibling;var Da=ut(tt,re,Ue.value,Mt);if(Da===null){re===null&&(re=Sn);break}t&&re&&Da.alternate===null&&n(tt,re),K=f(Da,K,ue),xe===null?Jt=Da:xe.sibling=Da,xe=Da,re=Sn}if(Ue.done)return a(tt,re),Le&&Za(tt,ue),Jt;if(re===null){for(;!Ue.done;ue++,Ue=at.next())Ue=Ct(tt,Ue.value,Mt),Ue!==null&&(K=f(Ue,K,ue),xe===null?Jt=Ue:xe.sibling=Ue,xe=Ue);return Le&&Za(tt,ue),Jt}for(re=s(re);!Ue.done;ue++,Ue=at.next())Ue=_t(re,tt,ue,Ue.value,Mt),Ue!==null&&(t&&Ue.alternate!==null&&re.delete(Ue.key===null?ue:Ue.key),K=f(Ue,K,ue),xe===null?Jt=Ue:xe.sibling=Ue,xe=Ue);return t&&re.forEach(function(Ry){return n(tt,Ry)}),Le&&Za(tt,ue),Jt}function en(tt,K,at,Mt){if(typeof at=="object"&&at!==null&&at.type===p&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case h:t:{for(var Jt=at.key;K!==null;){if(K.key===Jt){if(Jt=at.type,Jt===p){if(K.tag===7){a(tt,K.sibling),Mt=c(K,at.props.children),Mt.return=tt,tt=Mt;break t}}else if(K.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===P&&bh(Jt)===K.type){a(tt,K.sibling),Mt=c(K,at.props),Ks(Mt,at),Mt.return=tt,tt=Mt;break t}a(tt,K);break}else n(tt,K);K=K.sibling}at.type===p?(Mt=sr(at.props.children,tt.mode,Mt,at.key),Mt.return=tt,tt=Mt):(Mt=yl(at.type,at.key,at.props,null,tt.mode,Mt),Ks(Mt,at),Mt.return=tt,tt=Mt)}return S(tt);case d:t:{for(Jt=at.key;K!==null;){if(K.key===Jt)if(K.tag===4&&K.stateNode.containerInfo===at.containerInfo&&K.stateNode.implementation===at.implementation){a(tt,K.sibling),Mt=c(K,at.children||[]),Mt.return=tt,tt=Mt;break t}else{a(tt,K);break}else n(tt,K);K=K.sibling}Mt=Yu(at,tt.mode,Mt),Mt.return=tt,tt=Mt}return S(tt);case P:return Jt=at._init,at=Jt(at._payload),en(tt,K,at,Mt)}if(Dt(at))return ie(tt,K,at,Mt);if(W(at)){if(Jt=W(at),typeof Jt!="function")throw Error(r(150));return at=Jt.call(at),pe(tt,K,at,Mt)}if(typeof at.then=="function")return en(tt,K,tl(at),Mt);if(at.$$typeof===M)return en(tt,K,gl(tt,at),Mt);el(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,K!==null&&K.tag===6?(a(tt,K.sibling),Mt=c(K,at),Mt.return=tt,tt=Mt):(a(tt,K),Mt=qu(at,tt.mode,Mt),Mt.return=tt,tt=Mt),S(tt)):a(tt,K)}return function(tt,K,at,Mt){try{Zs=0;var Jt=en(tt,K,at,Mt);return Pr=null,Jt}catch(re){if(re===Ys)throw re;var xe=li(29,re,null,tt.mode);return xe.lanes=Mt,xe.return=tt,xe}finally{}}}var Qa=Ah(!0),wh=Ah(!1),zr=Ht(null),nl=Ht(0);function Rh(t,n){t=Zi,Qt(nl,t),Qt(zr,n),Zi=t|n.baseLanes}function $c(){Qt(nl,Zi),Qt(zr,zr.current)}function tu(){Zi=nl.current,Gt(zr),Gt(nl)}var ri=Ht(null),Ri=null;function da(t){var n=t.alternate;Qt(fn,fn.current&1),Qt(ri,t),Ri===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ri=t)}function Ch(t){if(t.tag===22){if(Qt(fn,fn.current),Qt(ri,t),Ri===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ri=t)}}else ha()}function ha(){Qt(fn,fn.current),Qt(ri,ri.current)}function Ii(t){Gt(ri),Ri===t&&(Ri=null),Gt(fn)}var fn=Ht(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,dn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var Js=null,nu=0,Br=0,Fr=null;function vv(t,n){if(Js===null){var a=Js=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Dh,Dh),n}function Dh(){if(--nu===0&&Js!==null){Fr!==null&&(Fr.status="fulfilled");var t=Js;Js=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Lh=F.S;F.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Lh!==null&&Lh(t,n)};var Ja=Ht(null);function iu(){var t=Ja.current;return t!==null?t:ke.pooledCache}function al(t,n){n===null?Qt(Ja,Ja.current):Qt(Ja,n.pool)}function Uh(){var t=iu();return t===null?null:{parent:dn._currentValue,pool:t}}var pa=0,Se=null,Be=null,on=null,rl=!1,Ir=!1,$a=!1,sl=0,$s=0,Hr=null,Sv=0;function rn(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return pa=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?tr:ma,$a=!1,f=a(s,c),$a=!1,Ir&&(f=Oh(n,a,s,c)),Nh(t),f}function Nh(t){F.H=Ci;var n=Be!==null&&Be.next!==null;if(pa=0,on=Be=Se=null,rl=!1,$s=0,Hr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Oh(t,n,a,s){Se=t;var c=0;do{if(Ir&&(Hr=null),$s=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,on=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=er,f=n(a,s)}while(Ir);return f}function xv(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(Se.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}pa=0,on=Be=Se=null,Ir=!1,$s=sl=0,Hr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Se.memoizedState=on=t:on=on.next=t,on}function ln(){if(Be===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=on===null?Se.memoizedState:on.next;if(n!==null)on=n,Be=t;else{if(t===null)throw Se.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},on===null?Se.memoizedState=on=t:on=on.next=t}return on}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(t){var n=$s;return $s+=1,Hr===null&&(Hr=[]),t=Eh(Hr,t,n),n=Se,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?tr:ma),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===M)return Cn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=ln();return uu(n,Be,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var w=S=null,z=null,$=n,yt=!1;do{var Ct=$.lane&-536870913;if(Ct!==$.lane?(Ce&Ct)===Ct:(pa&Ct)===Ct){var ut=$.revertLane;if(ut===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Ct===Br&&(yt=!0);else if((pa&ut)===ut){$=$.next,ut===Br&&(yt=!0);continue}else Ct={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(w=z=Ct,S=f):z=z.next=Ct,Se.lanes|=ut,Ta|=ut;Ct=$.action,$a&&a(f,Ct),f=$.hasEagerState?$.eagerState:a(f,Ct)}else ut={lane:Ct,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(w=z=ut,S=f):z=z.next=ut,Se.lanes|=Ct,Ta|=Ct;$=$.next}while($!==null&&$!==n);if(z===null?S=f:z.next=w,!Xn(f,t.memoizedState)&&(vn=!0,yt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ph(t,n,a){var s=Se,c=ln(),f=Le;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((Be||c).memoizedState,a);if(S&&(c.memoizedState=a,vn=!0),c=c.queue,pu(Fh.bind(null,s,c,t),[t]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Bh.bind(null,s,c,a,n),{destroy:void 0},null),ke===null)throw Error(r(349));f||pa&60||zh(s,n,a)}return a}function zh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=ol(),Se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Bh(t,n,a,s){n.value=a,n.getSnapshot=s,Ih(n)&&Hh(t)}function Fh(t,n,a){return a(function(){Ih(n)&&Hh(t)})}function Ih(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Hh(t){var n=fa(t,2);n!==null&&Pn(n,t,2)}function du(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),$a){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function Gh(t,n,a,s){return t.baseState=a,uu(t,Be,typeof s=="function"?s:Hi)}function Mv(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Vh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var w=a(c,s),z=F.S;z!==null&&z(S,w),kh(t,n,w)}catch($){hu(t,n,$)}finally{F.T=f}}else try{f=a(c,s),kh(t,n,f)}catch($){hu(t,n,$)}}function kh(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wh(t,n,s)},function(s){return hu(t,n,s)}):Wh(t,n,a)}function Wh(t,n,a){n.status="fulfilled",n.value=a,Xh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vh(t,a)))}function hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xh(n),n=n.next;while(n!==s)}t.action=null}function Xh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qh(t,n){return n}function Yh(t,n){if(Le){var a=ke.formState;if(a!==null){t:{var s=Se;if(Le){if(Mn){e:{for(var c=Mn,f=wi;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Mn=vi(c.nextSibling),s=c.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qh,lastRenderedState:n},a.queue=s,a=fp.bind(null,Se,s),s.dispatch=a,s=du(!1),f=yu.bind(null,Se,!1,s.queue),s=Gn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,Se,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function jh(t){var n=ln();return Zh(n,Be,t)}function Zh(t,n,a){n=uu(t,n,qh)[0],t=cl(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var s=ln(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(Se.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Kh(t){var n=ln(),a=Be;if(a!==null)return Zh(n,a,t);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=Se.updateQueue,n===null&&(n=ol(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Qh(){return ln().memoizedState}function ul(t,n,a,s){var c=Gn();Se.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=ln();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&au(s,Be.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(Se.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function Jh(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function $h(t,n){return fl(4,2,t,n)}function tp(t,n){return fl(4,4,t,n)}function ep(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function np(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,ep.bind(null,n,t),a)}function mu(){}function ip(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ap(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),$a){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||pa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=sm(),Se.lanes|=t,Ta|=t,a)}function rp(t,n,a,s){return Xn(a,n)?a:zr.current!==null?(t=gu(t,a,s),Xn(t,n)||(vn=!0),t):pa&42?(t=sm(),Se.lanes|=t,Ta|=t,n):(vn=!0,t.memoizedState=a)}function sp(t,n,a,s,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=F.T,w={};F.T=w,yu(t,!1,n,a);try{var z=c(),$=F.S;if($!==null&&$(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var yt=yv(z,s);eo(t,n,yt,Zn(t))}else eo(t,n,s,Zn(t))}catch(Ct){eo(t,n,{then:function(){},status:"rejected",reason:Ct},Zn())}finally{Y.p=f,F.T=S}}function Tv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=op(t).queue;sp(t,c,n,dt,a===null?Tv:function(){return lp(t),a(s)})}function op(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lp(t){var n=op(t).next.queue;eo(t,n,{},Zn())}function vu(){return Cn(Mo)}function cp(){return ln().memoizedState}function up(){return ln().memoizedState}function bv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=va(a);var s=ya(n,t,a);s!==null&&(Pn(s,n,a),ao(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?dp(n,a):(a=jc(t,n,a,s),a!==null&&(Pn(a,t,s),hp(a,n,s)))}function fp(t,n,a){var s=Zn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))dp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,w=f(S,a);if(c.hasEagerState=!0,c.eagerState=w,Xn(w,S))return Zo(t,n,c,0),ke===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return Pn(a,t,s),hp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&Pn(n,t,2)}function dl(t){var n=t.alternate;return t===Se||n!==null&&n===Se}function dp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Wa(t,a)}}var Ci={readContext:Cn,use:ll,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn};Ci.useCacheRefresh=rn,Ci.useMemoCache=rn,Ci.useHostTransitionStatus=rn,Ci.useFormState=rn,Ci.useActionState=rn,Ci.useOptimistic=rn;var tr={readContext:Cn,use:ll,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Jh,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,ep.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var s=t();if($a){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Gn();if(a!==void 0){var c=a(n);if($a){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,Se,t),[s.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=fp.bind(null,Se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Gn();return gu(a,t,n)},useTransition:function(){var t=du(!1);return t=sp.bind(null,Se,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Se,c=Gn();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));Ce&60||zh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jh(Fh.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Bh.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Gn(),n=ke.identifierPrefix;if(Le){var a=Fi,s=Bi;a=(s&~(1<<32-N(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Sv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Gn().memoizedState=bv.bind(null,Se)}};tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Yh,tr.useActionState=Yh,tr.useOptimistic=function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,Se,!0,a),a.dispatch=n,[t,n]};var ma={readContext:Cn,use:ll,useCallback:ip,useContext:Cn,useEffect:pu,useImperativeHandle:np,useInsertionEffect:$h,useLayoutEffect:tp,useMemo:ap,useReducer:cl,useRef:Qh,useState:function(){return cl(Hi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=ln();return rp(a,Be.memoizedState,t,n)},useTransition:function(){var t=cl(Hi)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Ph,useId:cp};ma.useCacheRefresh=up,ma.useMemoCache=cu,ma.useHostTransitionStatus=vu,ma.useFormState=jh,ma.useActionState=jh,ma.useOptimistic=function(t,n){var a=ln();return Gh(a,Be,t,n)};var er={readContext:Cn,use:ll,useCallback:ip,useContext:Cn,useEffect:pu,useImperativeHandle:np,useInsertionEffect:$h,useLayoutEffect:tp,useMemo:ap,useReducer:fu,useRef:Qh,useState:function(){return fu(Hi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=ln();return Be===null?gu(a,t,n):rp(a,Be.memoizedState,t,n)},useTransition:function(){var t=fu(Hi)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Ph,useId:cp};er.useCacheRefresh=up,er.useMemoCache=cu,er.useHostTransitionStatus=vu,er.useFormState=Kh,er.useActionState=Kh,er.useOptimistic=function(t,n){var a=ln();return Be!==null?Gh(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])};function Su(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xu={isMounted:function(t){return(t=t._reactInternals)?nt(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Pn(n,t,s),ao(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Pn(n,t,s),ao(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(Pn(n,t,a),ao(n,t,a))}};function pp(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function mp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&xu.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=E({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gp(t){hl(t)}function _p(t){console.error(t)}function vp(t){hl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Sp(t){return t=va(t),t.tag=3,t}function xp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){yp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){yp(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ri===null?af():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Le)return n=ri.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),qs(ni(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),qs(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),ho===null?ho=[f]:ho.push(f),tn!==4&&(tn=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sp(c),xp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Mp=Error(r(461)),vn=!1;function En(t,n,a,s){n.child=t===null?wh(n,null,a,s):Qa(n,t.child,a,s)}function Ep(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var w in s)w!=="ref"&&(S[w]=s[w])}else S=s;return ar(n),s=ru(t,n,a,S,f,c),w=su(),t!==null&&!vn?(ou(t,n,c),Gi(t,n,c)):(Le&&w&&Zc(n),n.flags|=1,En(t,n,s,c),n.child)}function Tp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bp(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(S,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Ea(f,s),t.ref=n.ref,t.return=n,n.child=t}function bp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(vn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return Eu(t,n,a,s,c)}function Ap(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=t!==null?t.memoizedState:null;if(no(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=S!==null?S.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return wp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,S!==null?S.cachePool:null),S!==null?Rh(n,S):$c(),Ch(n);else return n.lanes=n.childLanes=536870912,wp(t,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(al(n,S.cachePool),Rh(n,S),ha(),n.memoizedState=null):(t!==null&&al(n,null),$c(),ha());return En(t,n,c,a),n.child}function wp(t,n,a,s){var c=iu();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Ch(n),t!==null&&io(t,n,s,!0),null}function no(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ar(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!vn?(ou(t,n,c),Gi(t,n,c)):(Le&&s&&Zc(n),n.flags|=1,En(t,n,a,c),n.child)}function Rp(t,n,a,s,c,f){return ar(n),n.updateQueue=null,a=Oh(n,s,a,c),Nh(t),s=su(),t!==null&&!vn?(ou(t,n,f),Gi(t,n,f)):(Le&&s&&Zc(n),n.flags|=1,En(t,n,a,f),n.child)}function Cp(t,n,a,s,c){if(ar(n),n.stateNode===null){var f=Ur,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Ur,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Su(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&xu.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,z=nr(a,w);f.props=z;var $=f.context,yt=a.contextType;S=Ur,typeof yt=="object"&&yt!==null&&(S=Cn(yt));var Ct=a.getDerivedStateFromProps;yt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,yt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||$!==S)&&mp(n,f,s,S),_a=!1;var ut=n.memoizedState;f.state=ut,so(n,s,f,c),ro(),$=n.memoizedState,w||ut!==$||_a?(typeof Ct=="function"&&(Su(n,a,Ct,s),$=n.memoizedState),(z=_a||pp(n,a,z,s,ut,$,S))?(yt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),S=n.memoizedProps,yt=nr(a,S),f.props=yt,Ct=n.pendingProps,ut=f.context,$=a.contextType,z=Ur,typeof $=="object"&&$!==null&&(z=Cn($)),w=a.getDerivedStateFromProps,($=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Ct||ut!==z)&&mp(n,f,s,z),_a=!1,ut=n.memoizedState,f.state=ut,so(n,s,f,c),ro();var _t=n.memoizedState;S!==Ct||ut!==_t||_a||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof w=="function"&&(Su(n,a,w,s),_t=n.memoizedState),(yt=_a||pp(n,a,yt,s,ut,_t,z)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,_t,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,_t,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ut===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ut===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_t),f.props=s,f.state=_t,f.context=z,s=yt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ut===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ut===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,no(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Qa(n,t.child,null,c),n.child=Qa(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function Dp(t,n,a,s){return Xs(),n.flags|=256,En(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:Uh()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Lp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Le){if(c?da(n):ha(),Le){var w=Mn,z;if(z=w){t:{for(z=w,w=wi;z.nodeType!==8;){if(!w){w=null;break t}if(z=vi(z.nextSibling),z===null){w=null;break t}}w=z}w!==null?(n.memoizedState={dehydrated:w,treeContext:ja!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912},z=li(18,null,null,0),z.stateNode=w,z.return=n,n.child=z,On=n,Mn=null,z=!0):z=!1}z||Ka(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ii(n)}return w=s.children,s=s.fallback,c?(ha(),c=n.mode,w=Ru({mode:"hidden",children:w},c),s=sr(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,S,a),n.memoizedState=Tu,s):(da(n),wu(n,w))}if(z=t.memoizedState,z!==null&&(w=z.dehydrated,w!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),c=s.fallback,w=n.mode,s=Ru({mode:"visible",children:s.children},w),c=sr(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Qa(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,S,a),n.memoizedState=Tu,n=c);else if(da(n),w.data==="$!"){if(S=w.nextSibling&&w.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,qs({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(vn||io(t,n,a,!1),S=(a&t.childLanes)!==0,vn||S){if(S=ke,S!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(S.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,fa(t,s),Pn(S,t,s),Mp}w.data==="$?"||af(),n=Cu(t,n,a)}else w.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),w._reactRetry=n,n=null):(t=z.treeContext,Mn=vi(w.nextSibling),On=n,Le=!0,gi=null,wi=!1,t!==null&&(ii[ai++]=Bi,ii[ai++]=Fi,ii[ai++]=ja,Bi=t.id,Fi=t.overflow,ja=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(ha(),c=s.fallback,w=n.mode,z=t.child,$=z.sibling,s=Ea(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,$!==null?c=Ea($,c):(c=sr(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=t.child.memoizedState,w===null?w=bu(a):(z=w.cachePool,z!==null?($=dn._currentValue,z=z.parent!==$?{parent:$,pool:$}:z):z=Uh(),w={baseLanes:w.baseLanes|a,cachePool:z}),c.memoizedState=w,c.childLanes=Au(t,S,a),n.memoizedState=Tu,s):(da(n),a=t.child,t=a.sibling,a=Ea(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return im(t,n,0,null)}function Cu(t,n,a){return Qa(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Up(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Np(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(t,n,s.children,a),s=fn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,a,n);else if(t.tag===19)Up(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Qt(fn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,!(a&n.childLanes))if(t!==null){if(io(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:oe(n,n.stateNode.containerInfo),ga(n,dn,t.memoizedState.cache),Xs();break;case 27:case 5:Ae(n);break;case 4:oe(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):a&n.child.childLanes?Lp(t,n,a):(da(n),t=Gi(t,n,a),t!==null?t.sibling:null);da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(io(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Np(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Qt(fn,fn.current),s)break;return null;case 22:case 23:return n.lanes=0,Ap(t,n,a);case 24:ga(n,dn,t.memoizedState.cache)}return Gi(t,n,a)}function Op(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return vn=!1,Rv(t,n,a);vn=!!(t.flags&131072)}else vn=!1,Le&&n.flags&1048576&&vh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=nr(s,t),n.tag=1,n=Cp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===A){n.tag=11,n=Ep(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=Tp(null,n,s,t,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=nr(s,n.pendingProps),Cp(t,n,s,c,a);case 3:t:{if(oe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),so(n,f,null,a);var S=n.memoizedState;if(f=S.cache,ga(n,dn,f),f!==c.cache&&Ou(n,[dn],a,!0),ro(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Dp(t,n,f,a);break t}else if(f!==s){s=ni(Error(r(424)),n),qs(s),n=Dp(t,n,f,a);break t}else for(Mn=vi(n.stateNode.containerInfo.firstChild),On=n,Le=!0,gi=null,wi=!0,a=wh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),f===s){n=Gi(t,n,a);break t}En(t,n,f,a)}n=n.child}return n;case 26:return no(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,t=n.pendingProps,s=Ll(Ne.current).createElement(a),s[je]=n,s[Je]=t,Tn(s,a,t),Vt(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ae(n),t===null&&Le&&(s=n.stateNode=Om(n.type,n.pendingProps,Ne.current),On=n,wi=!0,Mn=vi(s.firstChild)),s=n.pendingProps.children,t!==null||Le?En(t,n,s,a):n.child=Qa(n,null,s,a),no(t,n),n.child;case 5:return t===null&&Le&&((c=s=Mn)&&(s=ay(s,n.type,n.pendingProps,wi),s!==null?(n.stateNode=s,On=n,Mn=vi(s.firstChild),wi=!1,c=!0):c=!1),c||Ka(n)),Ae(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,xv,null,null,a),Mo._currentValue=c),no(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Le&&((t=a=Mn)&&(a=ry(a,n.pendingProps,wi),a!==null?(n.stateNode=a,On=n,Mn=null,t=!0):t=!1),t||Ka(n)),null;case 13:return Lp(t,n,a);case 4:return oe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Qa(n,null,s,a):En(t,n,s,a),n.child;case 11:return Ep(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=Cn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return bp(t,n,n.type,n.pendingProps,a);case 19:return Np(t,n,a);case 22:return Ap(t,n,a);case 24:return ar(n),s=Cn(dn),t===null?(c=iu(),c===null&&(c=ke,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ga(n,dn,c)):(t.lanes&a&&(zu(t,n),so(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,dn,s)):(s=f.cache,ga(n,dn,s),s!==c.cache&&Ou(n,[dn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Ht(null),ir=null,Vi=null;function ga(t,n,a){Qt(Uu,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=Uu.current,Gt(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var z=0;z<n.length;z++)if(w.context===n[z]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Nu(f.return,a,t),s||(S=null);break t}f=w.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=c.type;Xn(c.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(c===ne.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Pp(ir,t)}function gl(t,n){return ir===null&&ar(t),Pp(t,n)}function Pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(r(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var _a=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,Qe&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),gh(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Wa(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function ro(){if(Fu){var t=Fr;if(t!==null)throw t}}function so(t,n,a,s){Fu=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var z=w,$=z.next;z.next=null,S===null?f=$:S.next=$,S=z;var yt=t.alternate;yt!==null&&(yt=yt.updateQueue,w=yt.lastBaseUpdate,w!==S&&(w===null?yt.firstBaseUpdate=$:w.next=$,yt.lastBaseUpdate=z))}if(f!==null){var Ct=c.baseState;S=0,yt=$=z=null,w=f;do{var ut=w.lane&-536870913,_t=ut!==w.lane;if(_t?(Ce&ut)===ut:(s&ut)===ut){ut!==0&&ut===Br&&(Fu=!0),yt!==null&&(yt=yt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ie=t,pe=w;ut=n;var en=a;switch(pe.tag){case 1:if(ie=pe.payload,typeof ie=="function"){Ct=ie.call(en,Ct,ut);break t}Ct=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=pe.payload,ut=typeof ie=="function"?ie.call(en,Ct,ut):ie,ut==null)break t;Ct=E({},Ct,ut);break t;case 2:_a=!0}}ut=w.callback,ut!==null&&(t.flags|=64,_t&&(t.flags|=8192),_t=c.callbacks,_t===null?c.callbacks=[ut]:_t.push(ut))}else _t={lane:ut,tag:w.tag,payload:w.payload,callback:w.callback,next:null},yt===null?($=yt=_t,z=Ct):yt=yt.next=_t,S|=ut;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;_t=w,w=_t.next,_t.next=null,c.lastBaseUpdate=_t,c.shared.pending=null}}while(!0);yt===null&&(z=Ct),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=yt,f===null&&(c.shared.lanes=0),Ta|=S,t.lanes=S,t.memoizedState=Ct}}function zp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}function oo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(w){Ge(n,n.return,w)}}function Sa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,c=n;var z=a;try{w()}catch($){Ge(c,z,$)}}}s=s.next}while(s!==f)}}catch($){Ge(n,n.return,$)}}function Fp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bp(n,a)}catch(s){Ge(t,t.return,s)}}}function Ip(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function rr(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Ge(t,n,f)}}function qn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Hp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function Gp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[Je]=n}catch(c){Ge(t,t.return,c)}}function Vp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var Wi=!1,$e=!1,Gu=!1,kp=typeof WeakSet=="function"?WeakSet:Set,yn=null,Wp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=oh(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,w=-1,z=-1,$=0,yt=0,Ct=t,ut=null;e:for(;;){for(var _t;Ct!==a||c!==0&&Ct.nodeType!==3||(w=S+c),Ct!==f||s!==0&&Ct.nodeType!==3||(z=S+s),Ct.nodeType===3&&(S+=Ct.nodeValue.length),(_t=Ct.firstChild)!==null;)ut=Ct,Ct=_t;for(;;){if(Ct===t)break e;if(ut===a&&++$===c&&(w=S),ut===f&&++yt===s&&(z=S),(_t=Ct.nextSibling)!==null)break;Ct=ut,ut=Ct.parentNode}Ct=_t}a=w===-1||z===-1?null:{start:w,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ie=nr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ie,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(pe){Ge(a,a.return,pe)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}return ie=Wp,Wp=!1,ie}function Xp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&oo(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(w){Ge(a,a.return,w)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ge(a,a.return,w)}}s&64&&Fp(a),s&512&&rr(a,a.return);break;case 3:if(qi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bp(s,t)}catch(w){Ge(a,a.return,w)}}break;case 26:qi(t,a),s&512&&rr(a,a.return);break;case 27:case 5:qi(t,a),n===null&&s&4&&Hp(a),s&512&&rr(a,a.return);break;case 12:qi(t,a);break;case 13:qi(t,a),s&4&&jp(t,a);break;case 22:if(c=a.memoizedState!==null||Wi,!c){n=n!==null&&n.memoizedState!==null||$e;var f=Wi,S=$e;Wi=c,($e=n)&&!S?xa(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),Wi=f,$e=S}s&512&&(a.memoizedProps.mode==="manual"?rr(a,a.return):qn(a,a.return));break;default:qi(t,a)}}function qp(t){var n=t.alternate;n!==null&&(t.alternate=null,qp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&k(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,Yn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Yp(t,n,a),a=a.sibling}function Yp(t,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ot,a)}catch{}switch(a.tag){case 26:$e||qn(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||qn(a,n);var s=cn,c=Yn;for(cn=a.stateNode,Xi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);k(a),cn=s,Yn=c;break;case 5:$e||qn(a,n);case 6:c=cn;var f=Yn;if(cn=null,Xi(t,n,a),cn=c,Yn=f,cn!==null)if(Yn)try{t=cn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(S){Ge(a,n,S)}else try{cn.removeChild(a.stateNode)}catch(S){Ge(a,n,S)}break;case 18:cn!==null&&(Yn?(n=cn,a=a.stateNode,n.nodeType===8?Sf(n.parentNode,a):n.nodeType===1&&Sf(n,a),Ao(n)):Sf(cn,a.stateNode));break;case 4:s=cn,c=Yn,cn=a.stateNode.containerInfo,Yn=!0,Xi(t,n,a),cn=s,Yn=c;break;case 0:case 11:case 14:case 15:$e||Sa(2,a,n),$e||Sa(4,a,n),Xi(t,n,a);break;case 1:$e||(qn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Ip(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:$e||qn(a,n),$e=(s=$e)||a.memoizedState!==null,Xi(t,n,a),$e=s;break;default:Xi(t,n,a)}}function jp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ao(t)}catch(a){Ge(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new kp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new kp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function si(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,w=S;t:for(;w!==null;){switch(w.tag){case 27:case 5:cn=w.stateNode,Yn=!1;break t;case 3:cn=w.stateNode.containerInfo,Yn=!0;break t;case 4:cn=w.stateNode.containerInfo,Yn=!0;break t}w=w.return}if(cn===null)throw Error(r(160));Yp(f,S,c),cn=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Zp(n,t),n=n.sibling}var _i=null;function Zp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),oi(t),s&4&&(Sa(3,t,t.return),oo(3,t),Sa(5,t,t.return));break;case 1:si(n,t),oi(t),s&512&&($e||a===null||qn(a,a.return)),s&64&&Wi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(si(n,t),oi(t),s&512&&($e||a===null||qn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[G]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[je]=t,Vt(f),s=f;break t;case"link":var S=Hm("link","href",c).get(s+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(f=S[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Hm("meta","content",c).get(s+(a.content||""))){for(w=0;w<S.length;w++)if(f=S[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[je]=t,Vt(f),s=f}t.stateNode=s}else Gm(c,t.type,t.stateNode);else t.stateNode=Im(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gm(c,t.type,t.stateNode):Im(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var $=z.nextSibling,yt=z.nodeName;z[G]||yt==="HEAD"||yt==="BODY"||yt==="SCRIPT"||yt==="STYLE"||yt==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=$}for(var Ct=t.type,ut=c.attributes;ut.length;)c.removeAttributeNode(ut[0]);Tn(c,Ct,f),c[je]=t,c[Je]=f}catch(ie){Ge(t,t.return,ie)}}case 5:if(si(n,t),oi(t),s&512&&($e||a===null||qn(a,a.return)),t.flags&32){c=t.stateNode;try{br(c,"")}catch(ie){Ge(t,t.return,ie)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Gp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(si(n,t),oi(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ie){Ge(t,t.return,ie)}}break;case 3:if(Ol=null,c=_i,_i=Ul(n.containerInfo),si(n,t),_i=c,oi(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(ie){Ge(t,t.return,ie)}Gu&&(Gu=!1,Kp(t));break;case 4:s=_i,_i=Ul(t.stateNode.containerInfo),si(n,t),oi(t),_i=s;break;case 12:si(n,t),oi(t);break;case 13:si(n,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=Z()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&($e||a===null||qn(a,a.return)),z=t.memoizedState!==null,$=a!==null&&a.memoizedState!==null,yt=Wi,Ct=$e,Wi=yt||z,$e=Ct||$,si(n,t),$e=Ct,Wi=yt,oi(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=Wi||$e,a===null||$||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){$=a=n;try{if(c=$.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=$.stateNode,w=$.memoizedProps.style;var _t=w!=null&&w.hasOwnProperty("display")?w.display:null;S.style.display=_t==null||typeof _t=="boolean"?"":(""+_t).trim()}}catch(ie){Ge($,$.return,ie)}}}else if(n.tag===6){if(a===null){$=n;try{$.stateNode.nodeValue=z?"":$.memoizedProps}catch(ie){Ge($,$.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:si(n,t),oi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:si(n,t),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(Vp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(br(S,""),s.flags&=-33);var w=Iu(t);_l(t,w,S);break;case 3:case 4:var z=s.stateNode.containerInfo,$=Iu(t);Hu(t,$,z);break;default:throw Error(r(161))}}}catch(yt){Ge(t,t.return,yt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Kp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Kp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Vr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ip(n,n.return,a),Vr(n);break;case 26:case 27:case 5:qn(n,n.return),Vr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),oo(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ge(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)zp(z[c],w)}catch($){Ge(s,s.return,$)}}a&&S&64&&Fp(f),rr(f,f.return);break;case 26:case 27:case 5:xa(c,f,a),a&&s===null&&S&4&&Hp(f),rr(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&jp(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),rr(f,f.return);break;default:xa(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function Ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qp(t,n,a,s),n=n.sibling}function Qp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(t,n,a,s),c&2048&&oo(9,n);break;case 3:Ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){Ma(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,w=f.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ge(n,n.return,z)}}else Ma(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(t,n,a,s):lo(t,n):f._visibility&4?Ma(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ma(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ma(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,w=a,z=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:kr(f,S,w,z,c),oo(8,S);break;case 23:break;case 22:var yt=S.stateNode;S.memoizedState!==null?yt._visibility&4?kr(f,S,w,z,c):lo(f,S):(yt._visibility|=4,kr(f,S,w,z,c)),c&&$&2048&&ku(S.alternate,S);break;case 24:kr(f,S,w,z,c),c&&$&2048&&Wu(S.alternate,S);break;default:kr(f,S,w,z,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&ku(s.alternate,s);break;case 24:lo(a,s),c&2048&&Wu(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Wr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)Jp(t),t=t.sibling}function Jp(t){switch(t.tag){case 26:Wr(t),t.flags&co&&t.memoizedState!==null&&vy(_i,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=_i;_i=Ul(t.stateNode.containerInfo),Wr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Wr(t),co=n):Wr(t));break;default:Wr(t)}}function $p(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,em(s,t)}$p(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tm(t),t=t.sibling}function tm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):uo(t);break;default:uo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,em(s,t)}$p(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function em(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(qp(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,a,s){return new Lv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,n){var a=t.alternate;return a===null?(a=li(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Xu(t)&&(S=1);else if(typeof t=="string")S=gy(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return sr(a.children,c,f,n);case m:S=8,c|=24;break;case g:return t=li(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case R:return t=li(13,a,n,c),t.elementType=R,t.lanes=f,t;case v:return t=li(19,a,n,c),t.elementType=v,t.lanes=f,t;case D:return im(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case M:S=10;break t;case x:S=9;break t;case A:S=11;break t;case _:S=14;break t;case P:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=li(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=li(7,t,s,n),t.lanes=a,t}function im(t,n,a,s){t=li(22,t,s,n),t.elementType=D,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=fa(f,2);S!==null&&(c._pendingVisibility|=2,Pn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=fa(f,2);S!==null&&(c._pendingVisibility&=-3,Pn(S,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=li(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Yi(t){t.flags|=4}function am(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Vm(n)){if(n=ri.current,n!==null&&((Ce&4194176)===Ce?Ri!==null:(Ce&62914560)!==Ce&&!(Ce&536870912)||n!==Ri))throw js=Jc,xh;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,qr|=n)}function fo(t,n){if(!Le)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ki(dn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gi!==null&&(ef(gi),gi=null))),Ke(n),null;case 26:return a=n.memoizedState,t===null?(Yi(n),a!==null?(Ke(n),am(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Yi(n),Ke(n),am(n,a)):(Ke(n),n.flags&=-16777217):(t.memoizedProps!==s&&Yi(n),Ke(n),n.flags&=-16777217),null;case 27:ce(n),a=Ne.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=ae.current,Ws(n)?yh(n):(t=Om(c,s,a),n.stateNode=t,Yi(n))}return Ke(n),null;case 5:if(ce(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(t=ae.current,Ws(n))yh(n);else{switch(c=Ll(Ne.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[je]=n,t[Je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Yi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ne.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=On,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rm(t.nodeValue,a)),t||Ka(n)}else t=Ll(t).createTextNode(s),t[je]=n,n.stateNode=t}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[je]=n}else Xs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else gi!==null&&(ef(gi),gi=null),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Ke(n),null;case 4:return Kt(),t===null&&hf(n.stateNode.containerInfo),Ke(n),null;case 10:return ki(n.type),Ke(n),null;case 19:if(Gt(fn),c=n.memoizedState,c===null)return Ke(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)fo(c,!1);else{if(tn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,fo(c,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return Qt(fn,fn.current&1|2),n.child}t=t.sibling}c.tail!==null&&Z()>xl&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Le)return Ke(n),null}else 2*Z()-c.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Z(),n.sibling=null,t=fn.current,Qt(fn,s?t&1|2:t&1),n):(Ke(n),null);case 22:case 23:return Ii(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Gt(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(dn),Ke(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(dn),Kt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Gt(fn),null;case 4:return Kt(),null;case 10:return ki(n.type),null;case 22:case 23:return Ii(n),tu(),t!==null&&Gt(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(dn),null;case 25:return null;default:return null}}function rm(t,n){switch(Kc(n),n.tag){case 3:ki(dn),Kt();break;case 26:case 27:case 5:ce(n);break;case 4:Kt();break;case 13:Ii(n);break;case 19:Gt(fn);break;case 10:ki(n.type);break;case 22:case 23:Ii(n),tu(),t!==null&&Gt(Ja);break;case 24:ki(dn)}}var Ov={getCacheForType:function(t){var n=Cn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,Qe=0,ke=null,Te=null,Ce=0,We=0,jn=null,ji=!1,Xr=!1,ju=!1,Zi=0,tn=0,Ta=0,or=0,Zu=0,ci=0,qr=0,ho=null,Di=null,Ku=!1,Qu=0,xl=1/0,Ml=null,ba=null,El=!1,lr=null,po=0,Ju=0,$u=null,mo=0,tf=null;function Zn(){if(Qe&2&&Ce!==0)return Ce&-Ce;if(F.T!==null){var t=Br;return t!==0?t:cf()}return Ti()}function sm(){ci===0&&(ci=!(Ce&536870912)||Le?le():536870912);var t=ri.current;return t!==null&&(t.flags|=32),ci}function Pn(t,n,a){(t===ke&&We===2||t.cancelPendingCommit!==null)&&(Yr(t,0),Ki(t,Ce,ci,!1)),me(t,a),(!(Qe&2)||t!==ke)&&(t===ke&&(!(Qe&2)&&(or|=a),tn===4&&Ki(t,Ce,ci,!1)),Li(t))}function om(t,n,a){if(Qe&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||jt(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&Ki(t,n,0,!1);break}else if(c===6)Ki(t,n,0,!ji);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var w=t;c=ho;var z=w.current.memoizedState.isDehydrated;if(z&&(Yr(w,S).flags|=256),S=rf(w,S,!1),S!==2){if(ju&&!z){w.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=Di,Di=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Ki(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ki(s,n,ci,!ji);break t}break;case 2:Di=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-Z(),10<f)){if(Ki(s,n,ci,!ji),Zt(s,0)!==0)break t;s.timeoutHandle=Lm(lm.bind(null,s,a,Di,Ml,Ku,n,ci,or,qr,ji,2,-0,0),f);break t}lm(s,a,Di,Ml,Ku,n,ci,or,qr,ji,0,-0,0)}}break}while(!0);Li(t)}function ef(t){Di===null?Di=t:Di.push.apply(Di,t)}function lm(t,n,a,s,c,f,S,w,z,$,yt,Ct,ut){var _t=n.subtreeFlags;if((_t&8192||(_t&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:_y},Jp(n),n=yy(),n!==null)){t.cancelPendingCommit=n(mm.bind(null,t,a,s,c,S,w,z,1,Ct,ut)),Ki(t,f,S,!$);return}mm(t,a,s,c,S,w,z,yt,Ct,ut)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ki(t,n,a,s){n&=~Zu,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-N(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&qe(t,a,n)}function Tl(){return Qe&6?!0:(go(0),!1)}function nf(){if(Te!==null){if(We===0)var t=Te.return;else t=Te,Vi=ir=null,lu(t),Pr=null,Zs=0,t=Te;for(;t!==null;)rm(t.alternate,t),t=t.return;Te=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),ke=t,Te=a=Ea(t.current,null),Ce=n,We=0,jn=null,ji=!1,Xr=jt(t,n),ju=!1,qr=ci=Zu=or=Ta=tn=0,Di=ho=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-N(s),f=1<<c;n|=t[c],s&=~f}return Zi=n,jo(),a}function cm(t,n){Se=null,F.H=Ci,n===Ys?(n=Th(),We=3):n===xh?(n=Th(),We=4):We=n===Mp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,Te===null&&(tn=1,pl(t,ni(n,t.current)))}function um(){var t=F.H;return F.H=Ci,t===null?Ci:t}function fm(){var t=F.A;return F.A=Ov,t}function af(){tn=4,ji||(Ce&4194176)!==Ce&&ri.current!==null||(Xr=!0),!(Ta&134217727)&&!(or&134217727)||ke===null||Ki(ke,Ce,ci,!1)}function rf(t,n,a){var s=Qe;Qe|=2;var c=um(),f=fm();(ke!==t||Ce!==n)&&(Ml=null,Yr(t,n)),n=!1;var S=tn;t:do try{if(We!==0&&Te!==null){var w=Te,z=jn;switch(We){case 8:nf(),S=6;break t;case 3:case 2:case 6:ri.current===null&&(n=!0);var $=We;if(We=0,jn=null,jr(t,w,z,$),a&&Xr){S=0;break t}break;default:$=We,We=0,jn=null,jr(t,w,z,$)}}Bv(),S=tn;break}catch(yt){cm(t,yt)}while(!0);return n&&t.shellSuspendCounter++,Vi=ir=null,Qe=s,F.H=c,F.A=f,Te===null&&(ke=null,Ce=0,jo()),S}function Bv(){for(;Te!==null;)dm(Te)}function Fv(t,n){var a=Qe;Qe|=2;var s=um(),c=fm();ke!==t||Ce!==n?(Ml=null,xl=Z()+500,Yr(t,n)):Xr=jt(t,n);t:do try{if(We!==0&&Te!==null){n=Te;var f=jn;e:switch(We){case 1:We=0,jn=null,jr(t,n,f,1);break;case 2:if(Mh(f)){We=0,jn=null,hm(n);break}n=function(){We===2&&ke===t&&(We=7),Li(t)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:Mh(f)?(We=0,jn=null,hm(n)):(We=0,jn=null,jr(t,n,f,7));break;case 5:var S=null;switch(Te.tag){case 26:S=Te.memoizedState;case 5:case 27:var w=Te;if(!S||Vm(S)){We=0,jn=null;var z=w.sibling;if(z!==null)Te=z;else{var $=w.return;$!==null?(Te=$,bl($)):Te=null}break e}}We=0,jn=null,jr(t,n,f,5);break;case 6:We=0,jn=null,jr(t,n,f,6);break;case 8:nf(),tn=6;break t;default:throw Error(r(462))}}Iv();break}catch(yt){cm(t,yt)}while(!0);return Vi=ir=null,F.H=s,F.A=c,Qe=a,Te!==null?0:(ke=null,Ce=0,jo(),tn)}function Iv(){for(;Te!==null&&!Nt();)dm(Te)}function dm(t){var n=Op(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?bl(t):Te=n}function hm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rp(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Rp(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:lu(n);default:rm(a,n),n=Te=nm(n,Zi),n=Op(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?bl(t):Te=n}function jr(t,n,a,s){Vi=ir=null,lu(n),Pr=null,Zs=0;var c=n.return;try{if(wv(t,c,n,a,Ce)){tn=1,pl(t,ni(a,t.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;tn=1,pl(t,ni(a,t.current)),Te=null;return}n.flags&32768?(Le||s===1?t=!0:Xr||Ce&536870912?t=!1:(ji=t=!0,(s===2||s===3||s===6)&&(s=ri.current,s!==null&&s.tag===13&&(s.flags|=16384))),pm(n,t)):bl(n)}function bl(t){var n=t;do{if(n.flags&32768){pm(n,ji);return}t=n.return;var a=Uv(n.alternate,n,Zi);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);tn===0&&(tn=5)}function pm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);tn=6,Te=null}function mm(t,n,a,s,c,f,S,w,z,$){var yt=F.T,Ct=Y.p;try{Y.p=2,F.T=null,Hv(t,n,a,s,Ct,c,f,S,w,z,$)}finally{F.T=yt,Y.p=Ct}}function Hv(t,n,a,s,c,f,S,w){do Zr();while(lr!==null);if(Qe&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var $=z.lanes|z.childLanes;if($|=Yc,_e(t,s,$,f,S,w),t===ke&&(Te=ke=null,Ce=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||El||(El=!0,Ju=$,$u=a,Wv(xt,function(){return Zr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=F.T,F.T=null,f=Y.p,Y.p=2,S=Qe,Qe|=4,Cv(t,z),Zp(z,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=z,Xp(t,z.alternate,z),Rt(),Qe=S,Y.p=f,F.T=a):t.current=z,El?(El=!1,lr=t,po=s):gm(t,$),$=t.pendingLanes,$===0&&(ba=null),kt(z.stateNode),Li(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)$=n[z],c($.value,{componentStack:$.stack});return po&3&&Zr(),$=t.pendingLanes,s&4194218&&$&42?t===tf?mo++:(mo=0,tf=t):mo=0,go(0),null}function gm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Zr(){if(lr!==null){var t=lr,n=Ju;Ju=0;var a=la(po),s=F.T,c=Y.p;try{if(Y.p=32>a?32:a,F.T=null,lr===null)var f=!1;else{a=$u,$u=null;var S=lr,w=po;if(lr=null,po=0,Qe&6)throw Error(r(331));var z=Qe;if(Qe|=4,tm(S.current),Qp(S,S.current,w,a),Qe=z,go(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ot,S)}catch{}f=!0}return f}finally{Y.p=c,F.T=s,gm(t,n)}}return!1}function _m(t,n,a){n=ni(a,n),n=Mu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(me(t,2),Li(t))}function Ge(t,n,a){if(t.tag===3)_m(t,t,a);else for(;n!==null;){if(n.tag===3){_m(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){t=ni(a,t),a=Sp(2),s=ya(n,a,2),s!==null&&(xp(a,s,n,t),me(s,2),Li(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Ce&a)===a&&(tn===4||tn===3&&(Ce&62914560)===Ce&&300>Z()-Qu?!(Qe&2)&&Yr(t,0):Zu|=a,qr===Ce&&(qr=0)),Li(t)}function vm(t,n){n===0&&(n=Ee()),t=fa(t,n),t!==null&&(me(t,n),Li(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vm(t,a)}function Wv(t,n){return b(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,cr=0;function Li(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Xv))}function go(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-N(42|t)+1)-1,f&=c&~(S&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,xm(s,f))}else f=Ce,f=Zt(s,s===ke?f:0),!(f&3)||jt(s,f)||(a=!0,xm(s,f));s=s.next}while(a);lf=!1}}function Xv(){wl=of=!1;var t=0;cr!==0&&(ty()&&(t=cr),cr=0);for(var n=Z(),a=null,s=Al;s!==null;){var c=s.next,f=ym(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}go(t)}function ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-N(f),w=1<<S,z=c[S];z===-1?(!(w&a)||w&s)&&(c[S]=ge(w,n)):z<=n&&(t.expiredLanes|=w),f&=~w}if(n=ke,a=Ce,a=Zt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&We===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ot(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ot(s),la(a)){case 2:case 8:a=mt;break;case 32:a=xt;break;case 268435456:a=st;break;default:a=xt}return s=Sm.bind(null,t),a=b(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ot(s),t.callbackPriority=2,t.callbackNode=null,2}function Sm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Ce;return s=Zt(t,t===ke?s:0),s===0?null:(om(t,s,n),ym(t,Z()),t.callbackNode!=null&&t.callbackNode===a?Sm.bind(null,t):null)}function xm(t,n){if(Zr())return null;om(t,n,!0)}function qv(t){ny(function(){Qe&6?b(rt,t):t()})}function cf(){return cr===0&&(cr=le()),cr}function Mm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Em(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Mm((c[Je]||null).action),S=s.submitter;S&&(n=(n=S[Je]||null)?Mm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var w=new Xo("action","action",null,s,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var z=S?Em(c,S):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(w.preventDefault(),z=S?Em(c,S):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<mh.length;uf++){var ff=mh[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);mi(jv,"on"+Zv)}mi(uh,"onAnimationEnd"),mi(fh,"onAnimationIteration"),mi(dh,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(dv,"onTransitionRun"),mi(hv,"onTransitionStart"),mi(pv,"onTransitionCancel"),mi(hh,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Tm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var w=s[S],z=w.instance,$=w.currentTarget;if(w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(yt){hl(yt)}c.currentTarget=null,f=z}else for(S=0;S<s.length;S++){if(w=s[S],z=w.instance,$=w.currentTarget,w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(yt){hl(yt)}c.currentTarget=null,f=z}}}}function Re(t,n){var a=n[It];a===void 0&&(a=n[It]=new Set);var s=t+"__bubble";a.has(s)||(bm(n,t,2,!1),a.add(s))}function df(t,n,a){var s=0;n&&(s|=4),bm(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Rl]){t[Rl]=!0,ee.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,df("selectionchange",!1,n))}}function bm(t,n,a,s){switch(jm(n)){case 2:var c=My;break;case 8:c=Ey;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var z=S.tag;if((z===3||z===4)&&(z=S.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;S=S.return}for(;w!==null;){if(S=q(w),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){s=f=S;continue t}w=w.parentNode}}s=s.return}Hd(function(){var $=f,yt=Uc(a),Ct=[];t:{var ut=ph.get(t);if(ut!==void 0){var _t=Xo,ie=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":_t=k0;break;case"focusin":ie="focus",_t=Fc;break;case"focusout":ie="blur",_t=Fc;break;case"beforeblur":case"afterblur":_t=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=q0;break;case uh:case fh:case dh:_t=O0;break;case hh:_t=j0;break;case"scroll":case"scrollend":_t=C0;break;case"wheel":_t=K0;break;case"copy":case"cut":case"paste":_t=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=Xd;break;case"toggle":case"beforetoggle":_t=J0}var pe=(n&4)!==0,en=!pe&&(t==="scroll"||t==="scrollend"),tt=pe?ut!==null?ut+"Capture":null:ut;pe=[];for(var K=$,at;K!==null;){var Mt=K;if(at=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||at===null||tt===null||(Mt=Ps(K,tt),Mt!=null&&pe.push(vo(K,Mt,at))),en)break;K=K.return}0<pe.length&&(ut=new _t(ut,ie,null,a,yt),Ct.push({event:ut,listeners:pe}))}}if(!(n&7)){t:{if(ut=t==="mouseover"||t==="pointerover",_t=t==="mouseout"||t==="pointerout",ut&&a!==Lc&&(ie=a.relatedTarget||a.fromElement)&&(q(ie)||ie[ti]))break t;if((_t||ut)&&(ut=yt.window===yt?yt:(ut=yt.ownerDocument)?ut.defaultView||ut.parentWindow:window,_t?(ie=a.relatedTarget||a.toElement,_t=$,ie=ie?q(ie):null,ie!==null&&(en=nt(ie),pe=ie.tag,ie!==en||pe!==5&&pe!==27&&pe!==6)&&(ie=null)):(_t=null,ie=$),_t!==ie)){if(pe=kd,Mt="onMouseLeave",tt="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(pe=Xd,Mt="onPointerLeave",tt="onPointerEnter",K="pointer"),en=_t==null?ut:Ut(_t),at=ie==null?ut:Ut(ie),ut=new pe(Mt,K+"leave",_t,a,yt),ut.target=en,ut.relatedTarget=at,Mt=null,q(yt)===$&&(pe=new pe(tt,K+"enter",ie,a,yt),pe.target=at,pe.relatedTarget=en,Mt=pe),en=Mt,_t&&ie)e:{for(pe=_t,tt=ie,K=0,at=pe;at;at=Qr(at))K++;for(at=0,Mt=tt;Mt;Mt=Qr(Mt))at++;for(;0<K-at;)pe=Qr(pe),K--;for(;0<at-K;)tt=Qr(tt),at--;for(;K--;){if(pe===tt||tt!==null&&pe===tt.alternate)break e;pe=Qr(pe),tt=Qr(tt)}pe=null}else pe=null;_t!==null&&Am(Ct,ut,_t,pe,!1),ie!==null&&en!==null&&Am(Ct,en,ie,pe,!0)}}t:{if(ut=$?Ut($):window,_t=ut.nodeName&&ut.nodeName.toLowerCase(),_t==="select"||_t==="input"&&ut.type==="file")var Jt=$d;else if(Qd(ut))if(th)Jt=lv;else{Jt=sv;var xe=rv}else _t=ut.nodeName,!_t||_t.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?$&&Dc($.elementType)&&(Jt=$d):Jt=ov;if(Jt&&(Jt=Jt(t,$))){Jd(Ct,Jt,a,yt);break t}xe&&xe(t,ut,$),t==="focusout"&&$&&ut.type==="number"&&$.memoizedProps.value!=null&&Cc(ut,"number",ut.value)}switch(xe=$?Ut($):window,t){case"focusin":(Qd(xe)||xe.contentEditable==="true")&&(Cr=xe,Wc=$,ks=null);break;case"focusout":ks=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,lh(Ct,a,yt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":lh(Ct,a,yt)}var re;if(Hc)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Rr?Zd(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(qd&&a.locale!=="ko"&&(Rr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Rr&&(re=Gd()):(ua=yt,Pc="value"in ua?ua.value:ua.textContent,Rr=!0)),xe=Cl($,ue),0<xe.length&&(ue=new Wd(ue,t,null,a,yt),Ct.push({event:ue,listeners:xe}),re?ue.data=re:(re=Kd(a),re!==null&&(ue.data=re)))),(re=tv?ev(t,a):nv(t,a))&&(ue=Cl($,"onBeforeInput"),0<ue.length&&(xe=new Wd("onBeforeInput","beforeinput",null,a,yt),Ct.push({event:xe,listeners:ue}),xe.data=re)),Yv(Ct,t,$,a,yt)}Tm(Ct,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&s.unshift(vo(t,c,f)),c=Ps(t,n),c!=null&&s.push(vo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Am(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var w=a,z=w.alternate,$=w.stateNode;if(w=w.tag,z!==null&&z===s)break;w!==5&&w!==26&&w!==27||$===null||(z=$,c?($=Ps(a,f),$!=null&&S.unshift(vo(a,$,z))):c||($=Ps(a,f),$!=null&&S.push(vo(a,$,z)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Rm(t,n){return n=wm(n),wm(t)===n}function Dl(){}function Fe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(t,""+s);break;case"className":Oe(t,"class",s);break;case"tabIndex":Oe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,a,s);break;case"style":Fd(t,s,f);break;case"data":if(n!=="object"){Oe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",c.name,c,null),Fe(t,n,"formEncType",c.formEncType,c,null),Fe(t,n,"formMethod",c.formMethod,c,null),Fe(t,n,"formTarget",c.formTarget,c,null)):(Fe(t,n,"encType",c.encType,c,null),Fe(t,n,"method",c.method,c,null),Fe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&Re("scroll",t);break;case"onScrollEnd":s!=null&&Re("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Re("beforetoggle",t),Re("toggle",t),bi(t,"popover",s);break;case"xlinkActuate":gn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":bi(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,bi(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Fd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?br(t,s):(typeof s=="number"||typeof s=="bigint")&&br(t,""+s);break;case"onScroll":s!=null&&Re("scroll",t);break;case"onScrollEnd":s!=null&&Re("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):bi(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",t),Re("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,f,S,a,null)}}c&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":Re("invalid",t);var w=f=S=c=null,z=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var yt=a[s];if(yt!=null)switch(s){case"name":c=yt;break;case"type":S=yt;break;case"checked":z=yt;break;case"defaultChecked":$=yt;break;case"value":f=yt;break;case"defaultValue":w=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(r(137,n));break;default:Fe(t,n,s,yt,a,null)}}Os(t,f,w,z,$,S,c,!1),an(t);return;case"select":Re("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":S=w;break;case"multiple":s=w;default:Fe(t,n,c,w,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Tr(t,!!s,n,!1):a!=null&&Tr(t,!!s,a,!0);return;case"textarea":Re("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Fe(t,n,S,w,a,null)}zd(t,s,c,f),an(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,z,s,a,null)}return;case"dialog":Re("cancel",t),Re("close",t);break;case"iframe":case"object":Re("load",t);break;case"video":case"audio":for(s=0;s<_o.length;s++)Re(_o[s],t);break;case"image":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"embed":case"source":case"link":Re("error",t),Re("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,$,s,a,null)}return;default:if(Dc(n)){for(yt in a)a.hasOwnProperty(yt)&&(s=a[yt],s!==void 0&&mf(t,n,yt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Fe(t,n,w,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,w=null,z=null,$=null,yt=null;for(_t in a){var Ct=a[_t];if(a.hasOwnProperty(_t)&&Ct!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":z=Ct;default:s.hasOwnProperty(_t)||Fe(t,n,_t,null,s,Ct)}}for(var ut in s){var _t=s[ut];if(Ct=a[ut],s.hasOwnProperty(ut)&&(_t!=null||Ct!=null))switch(ut){case"type":f=_t;break;case"name":c=_t;break;case"checked":$=_t;break;case"defaultChecked":yt=_t;break;case"value":S=_t;break;case"defaultValue":w=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:_t!==Ct&&Fe(t,n,ut,_t,s,Ct)}}Ns(t,S,w,z,$,yt,f,c);return;case"select":_t=S=w=ut=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":_t=z;default:s.hasOwnProperty(f)||Fe(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":ut=f;break;case"defaultValue":w=f;break;case"multiple":S=f;default:f!==z&&Fe(t,n,c,f,s,z)}n=w,a=S,s=_t,ut!=null?Tr(t,!!a,ut,!1):!!s!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":_t=ut=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Fe(t,n,w,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ut=c;break;case"defaultValue":_t=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(t,n,S,c,s,f)}Pd(t,ut,_t);return;case"option":for(var ie in a)if(ut=a[ie],a.hasOwnProperty(ie)&&ut!=null&&!s.hasOwnProperty(ie))switch(ie){case"selected":t.selected=!1;break;default:Fe(t,n,ie,null,s,ut)}for(z in s)if(ut=s[z],_t=a[z],s.hasOwnProperty(z)&&ut!==_t&&(ut!=null||_t!=null))switch(z){case"selected":t.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Fe(t,n,z,ut,s,_t)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)ut=a[pe],a.hasOwnProperty(pe)&&ut!=null&&!s.hasOwnProperty(pe)&&Fe(t,n,pe,null,s,ut);for($ in s)if(ut=s[$],_t=a[$],s.hasOwnProperty($)&&ut!==_t&&(ut!=null||_t!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Fe(t,n,$,ut,s,_t)}return;default:if(Dc(n)){for(var en in a)ut=a[en],a.hasOwnProperty(en)&&ut!==void 0&&!s.hasOwnProperty(en)&&mf(t,n,en,void 0,s,ut);for(yt in s)ut=s[yt],_t=a[yt],!s.hasOwnProperty(yt)||ut===_t||ut===void 0&&_t===void 0||mf(t,n,yt,ut,s,_t);return}}for(var tt in a)ut=a[tt],a.hasOwnProperty(tt)&&ut!=null&&!s.hasOwnProperty(tt)&&Fe(t,n,tt,null,s,ut);for(Ct in s)ut=s[Ct],_t=a[Ct],!s.hasOwnProperty(Ct)||ut===_t||ut==null&&_t==null||Fe(t,n,Ct,ut,s,_t)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Cm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function ty(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Lm=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(iy)}:Lm;function iy(t){setTimeout(function(){throw t})}function Sf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),Ao(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);Ao(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),k(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[G])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Nm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Om(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ui=new Map,Pm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Qi=Y.d;Y.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:hy,S:dy,M:py};function sy(){var t=Qi.f(),n=Tl();return t||n}function oy(t){var n=St(t);n!==null&&n.tag===5&&n.type==="form"?lp(n):Qi.r(t)}var Jr=typeof document>"u"?null:document;function zm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pm.has(c)||(Pm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),Vt(n),s.head.appendChild(n)))}}function ly(t){Qi.D(t),zm("dns-prefetch",t,null)}function cy(t,n){Qi.C(t,n),zm("preconnect",t,n)}function uy(t,n,a){Qi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ui.has(f)||(t=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),Tn(n,"link",t),Vt(n),s.head.appendChild(n)))}}function fy(t,n){Qi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ui.has(f)&&(t=E({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),Tn(s,"link",t),Vt(s),a.head.appendChild(s)}}}function dy(t,n,a){Qi.S(t,n,a);var s=Jr;if(s&&t){var c=zt(s).hoistableStyles,f=$r(t);n=n||"default";var S=c.get(f);if(!S){var w={loading:0,preload:null};if(S=s.querySelector(yo(f)))w.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Mf(t,a);var z=S=s.createElement("link");Vt(z),Tn(z,"link",t),z._p=new Promise(function($,yt){z.onload=$,z.onerror=yt}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:w},c.set(f,S)}}}function hy(t,n){Qi.X(t,n);var a=Jr;if(a&&t){var s=zt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=E({src:t,async:!0},n),(n=ui.get(c))&&Ef(t,n),f=a.createElement("script"),Vt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function py(t,n){Qi.M(t,n);var a=Jr;if(a&&t){var s=zt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=E({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Ef(t,n),f=a.createElement("script"),Vt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=Ne.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=zt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=zt(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(yo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||my(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=zt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Fm(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Vt(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function So(t){return"script[async]"+t}function Im(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Vt(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Vt(s),Tn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,Vt(f),f;s=Fm(a),(c=ui.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),Vt(f);var S=f;return S._p=new Promise(function(w,z){S.onload=w,S.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(So(f)))?(n.instance=c,Vt(c),c):(s=a,(c=ui.get(f))&&(s=E({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Vt(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var w=s[S];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Hm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[G]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var w=s.get(S);w?w.push(f):s.set(S,[f])}}return s}function Gm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vm(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var xo=null;function _y(){}function vy(t,n,a){if(xo===null)throw Error(r(475));var s=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(yo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Vt(f);return}f=t.ownerDocument||t,a=Fm(a),(c=ui.get(c))&&Mf(a,c),f=f.createElement("link"),Vt(f);var S=f;S._p=new Promise(function(w,z){S.onload=w,S.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yy(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(Sy,t),zl=null,Pl.call(t))}function Sy(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function xy(t,n,a,s,c,f,S,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function km(t,n,a,s,c,f,S,w,z,$,yt,Ct){return t=new xy(t,n,a,S,w,z,$,Ct),n=1,f===!0&&(n|=24),f=li(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Wm(t){return t?(t=Ur,t):Ur}function Xm(t,n,a,s,c,f){c=Wm(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(Pn(a,t,n),ao(a,t,n))}function qm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){qm(t,n),(t=t.alternate)&&qm(t,n)}function Ym(t){if(t.tag===13){var n=fa(t,67108864);n!==null&&Pn(n,t,67108864),bf(t,67108864)}}var Bl=!0;function My(t,n,a,s){var c=F.T;F.T=null;var f=Y.p;try{Y.p=2,Af(t,n,a,s)}finally{Y.p=f,F.T=c}}function Ey(t,n,a,s){var c=F.T;F.T=null;var f=Y.p;try{Y.p=8,Af(t,n,a,s)}finally{Y.p=f,F.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Zm(t,s);else if(by(c,t,n,a,s))s.stopPropagation();else if(Zm(t,s),n&4&&-1<Ty.indexOf(t)){for(;c!==null;){var f=St(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Tt(f.pendingLanes);if(S!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var z=1<<31-N(S);w.entanglements[1]|=z,S&=~z}Li(f),!(Qe&6)&&(xl=Z()+500,go(0))}}break;case 13:w=fa(f,2),w!==null&&Pn(w,f,2),Tl(),bf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=q(t),t!==null){var n=nt(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ft(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function jm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case rt:return 2;case mt:return 8;case xt:case At:return 32;case st:return 268435456;default:return 32}default:return 32}}var Cf=!1,Aa=null,wa=null,Ra=null,Eo=new Map,To=new Map,Ca=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=St(n),n!==null&&Ym(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function by(t,n,a,s,c){switch(n){case"focusin":return Aa=bo(Aa,t,n,a,s,c),!0;case"dragenter":return wa=bo(wa,t,n,a,s,c),!0;case"mouseover":return Ra=bo(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,t,n,a,s,c)),!0}return!1}function Km(t){var n=q(t.target);if(n!==null){var a=nt(n);if(a!==null){if(n=a.tag,n===13){if(n=ft(a),n!==null){t.blockedOn=n,nn(t.priority,function(){if(a.tag===13){var s=Zn(),c=fa(a,s);c!==null&&Pn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=St(a),n!==null&&Ym(n),t.blockedOn=a,!1;n.shift()}return!0}function Qm(t,n,a){Il(t)&&a.delete(n)}function Ay(){Cf=!1,Aa!==null&&Il(Aa)&&(Aa=null),wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),Eo.forEach(Qm),To.forEach(Qm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ay)))}var Gl=null;function Jm(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=St(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(t){function n(z){return Hl(z,t)}Aa!==null&&Hl(Aa,t),wa!==null&&Hl(wa,t),Ra!==null&&Hl(Ra,t),Eo.forEach(n),To.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Km(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Je]||null;if(typeof f=="function")S||Jm(a);else if(S){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Je]||null)w=S.formAction;else if(Rf(c)!==null)continue}else w=S.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),Jm(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Xm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),Xm(t.current,2,null,t,null,null),Tl(),n[ti]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ti();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Km(t)}};var $m=e.version;if($m!=="19.0.0")throw Error(r(527,$m,"19.0.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Q(n),t=t!==null?ht(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:F,findFiberByHostInstance:q,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ot=kl.inject(wy),Bt=kl}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gp,f=_p,S=vp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=km(t,1,!1,null,null,a,s,c,f,S,w,null),t[ti]=n.current,hf(t.nodeType===8?t.parentNode:t),new Df(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=gp,S=_p,w=vp,z=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=km(t,1,!0,n,a??null,s,c,f,S,w,z,$),n.context=Wm(null),a=n.current,s=Zn(),c=va(s),c.callback=null,ya(a,c,s),n.current.lanes=s,me(n,s),Li(n),t[ti]=n.current,hf(t),new Vl(n)},Ro.version="19.0.0",Ro}var cg;function By(){if(cg)return Nf.exports;cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zy(),Nf.exports}var Fy=By();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,ug=1,Hy=2,k_=1,W_=2,ia=3,ka=0,kn=1,Ni=2,Ia=0,Es=1,md=2,fg=3,dg=4,Gy=5,mr=100,Vy=101,ky=102,hg=103,pg=104,Wy=200,Xy=201,qy=202,Yy=203,gd=204,_d=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tS=212,eS=213,nS=214,iS=0,aS=1,rS=2,mc=3,sS=4,oS=5,lS=6,cS=7,X_=0,uS=1,fS=2,Ha=0,dS=1,hS=2,pS=3,mS=4,gS=5,_S=6,q_=300,As=301,ws=302,vd=303,yd=304,Ec=306,Sd=1e3,Mi=1001,xd=1002,Fn=1003,mg=1004,Co=1005,Vn=1006,Bf=1007,_r=1008,Ga=1009,vS=1010,yS=1011,Rd=1012,Y_=1013,Fa=1014,aa=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,SS=1021,Ei=1023,xS=1024,MS=1025,yr=1026,Rs=1027,ES=1028,K_=1029,TS=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,gg=35840,_g=35841,vg=35842,yg=35843,$_=36196,Sg=37492,xg=37496,Mg=37808,Eg=37809,Tg=37810,bg=37811,Ag=37812,wg=37813,Rg=37814,Cg=37815,Dg=37816,Lg=37817,Ug=37818,Ng=37819,Og=37820,Pg=37821,Vf=36492,zg=36494,Bg=36495,bS=36283,Fg=36284,Ig=36285,Hg=36286,t0=3e3,Sr=3001,AS=3200,wS=3201,e0=0,RS=1,di="",bn="srgb",sa="srgb-linear",Cd="display-p3",Tc="display-p3-linear",gc="linear",Xe="srgb",_c="rec709",vc="p3",is=7680,Gg=519,CS=512,DS=513,LS=514,n0=515,US=516,NS=517,OS=518,PS=519,Vg=35044,kg="300 es",Md=1035,ra=2e3,yc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function Dd(o,e){return(o%e+e)%e}function zS(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function BS(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function FS(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function IS(o,e=1){return e-Math.abs(Dd(o,e*2)-e)}function HS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function GS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function VS(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kS(o,e){return o+Math.random()*(e-o)}function WS(o){return o*(.5-Math.random())}function XS(o){o!==void 0&&(Wg=o);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qS(o){return o*zo}function YS(o){return o*Io}function Ed(o){return(o&o-1)===0&&o!==0}function jS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Sc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ZS(o,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((e+r)/2),g=h((e+r)/2),y=u((e-r)/2),x=h((e-r)/2),M=u((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":o.set(d*g,p*y,p*x,d*m);break;case"YZY":o.set(p*x,d*g,p*y,d*m);break;case"ZXZ":o.set(p*y,p*x,d*g,d*m);break;case"XZX":o.set(d*g,p*A,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*A,d*m);break;case"ZYZ":o.set(p*A,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ss={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Nn,euclideanModulo:Dd,mapLinear:zS,inverseLerp:BS,lerp:Bo,damp:FS,pingpong:IS,smoothstep:HS,smootherstep:GS,randInt:VS,randFloat:kS,randFloatSpread:WS,seededRandom:XS,degToRad:qS,radToDeg:YS,isPowerOfTwo:Ed,ceilPowerOfTwo:jS,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:ZS,normalize:zn,denormalize:ys};class he{constructor(e=0,i=0){he.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(e,i,r,l,u,h,d,p,m){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],y=r[7],x=r[2],M=r[5],A=r[8],R=l[0],v=l[3],_=l[6],P=l[1],D=l[4],B=l[7],X=l[2],W=l[5],I=l[8];return u[0]=h*R+d*P+p*X,u[3]=h*v+d*D+p*W,u[6]=h*_+d*B+p*I,u[1]=m*R+g*P+y*X,u[4]=m*v+g*D+y*W,u[7]=m*_+g*B+y*I,u[2]=x*R+M*P+A*X,u[5]=x*v+M*D+A*W,u[8]=x*_+M*B+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=g*h-d*m,x=d*p-g*u,M=m*u-h*p,A=i*y+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(l*m-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=x*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Me;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=xc("canvas");return o.style.display="block",o}const Xg={};function Ts(o){o in Xg||(Xg[o]=!0,console.warn(o))}const qg=new Me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yg=new Me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[sa]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[bn]:{transfer:Xe,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Tc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(Yg),fromReference:o=>o.applyMatrix3(qg)},[Cd]:{transfer:Xe,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Yg),fromReference:o=>o.applyMatrix3(qg).convertLinearToSRGB()}},QS=new Set([sa,Tc]),Ie={enabled:!0,_workingColorSpace:sa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!QS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===di?gc:Wl[o].transfer}};function bs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=xc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=bs(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(bs(i[r]/255)*255):i[r]=bs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class Wn extends Er{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,r=Mi,l=Mi,u=Vn,h=_r,d=Ei,p=Ga,m=Wn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Sr?bn:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?Sr:t0}set encoding(e){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?bn:di}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=q_;Wn.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,i=0,r=0,l=1){Ye.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],y=p[8],x=p[1],M=p[5],A=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(y-R)<.01&&Math.abs(A-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+R)<.1&&Math.abs(A+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,B=(M+1)/2,X=(_+1)/2,W=(g+x)/4,I=(y+R)/4,vt=(A+v)/4;return D>B&&D>X?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=W/r,u=I/r):B>X?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=W/l,u=vt/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=I/u,l=vt/u),this.set(r,l,u,i),this}let P=Math.sqrt((v-A)*(v-A)+(y-R)*(y-R)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(v-A)/P,this.y=(y-R)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tx extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ye(0,0,e,i),this.scissorTest=!1,this.viewport=new Ye(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Sr?bn:di),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends tx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ex extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const x=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(y!==R||p!==x||m!==M||g!==A){let v=1-d;const _=p*x+m*M+g*A+y*R,P=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const X=Math.sqrt(D),W=Math.atan2(X,_*P);v=Math.sin(v*W)/X,d=Math.sin(d*W)/X}const B=d*P;if(p=p*v+x*B,m=m*v+M*B,g=g*v+A*B,y=y*v+R*B,v===1-d){const X=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=X,m*=X,g*=X,y*=X}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=u[h],x=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*y+p*M-m*x,e[i+1]=p*A+g*x+m*y-d*M,e[i+2]=m*A+g*M+d*x-p*y,e[i+3]=g*A-d*y-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),y=d(u/2),x=p(r/2),M=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=x*g*y+m*M*A,this._y=m*M*y-x*g*A,this._z=m*g*A+x*M*y,this._w=m*g*y-x*M*A;break;case"YXZ":this._x=x*g*y+m*M*A,this._y=m*M*y-x*g*A,this._z=m*g*A-x*M*y,this._w=m*g*y+x*M*A;break;case"ZXY":this._x=x*g*y-m*M*A,this._y=m*M*y+x*g*A,this._z=m*g*A+x*M*y,this._w=m*g*y-x*M*A;break;case"ZYX":this._x=x*g*y-m*M*A,this._y=m*M*y+x*g*A,this._z=m*g*A-x*M*y,this._w=m*g*y+x*M*A;break;case"YZX":this._x=x*g*y+m*M*A,this._y=m*M*y+x*g*A,this._z=m*g*A-x*M*y,this._w=m*g*y-x*M*A;break;case"XZY":this._x=x*g*y-m*M*A,this._y=m*M*y-x*g*A,this._z=m*g*A+x*M*y,this._w=m*g*y+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],y=i[10],x=r+d+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),y=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=h*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(jg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(jg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),y=2*(u*r-h*i);return this.x=i+p*m+h*y-d*g,this.y=r+p*g+d*m-u*y,this.z=l+p*y+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new j,jg=new Mr;class Ho{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ql.subVectors(this.max,Do),rs.subVectors(e.a,Do),ss.subVectors(e.b,Do),os.subVectors(e.c,Do),La.subVectors(ss,rs),Ua.subVectors(os,ss),ur.subVectors(rs,os);let i=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-ur.z,ur.y,La.z,0,-La.x,Ua.z,0,-Ua.x,ur.z,0,-ur.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-ur.y,ur.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(La,Ua),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new j,new j,new j,new j,new j,new j,new j,new j],yi=new j,Xl=new Ho,rs=new j,ss=new j,os=new j,La=new j,Ua=new j,ur=new j,Do=new j,ql=new j,Yl=new j,fr=new j;function Yf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){fr.fromArray(o,u);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),p=e.dot(fr),m=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const nx=new Ho,Lo=new j,jf=new j;class bc{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nx.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(jf)),this.expandByPoint(Lo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new j,Zf=new j,jl=new j,Na=new j,Kf=new j,Zl=new j,Qf=new j;class Ld{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Na.dot(this.direction),p=-Na.dot(jl),m=Na.lengthSq(),g=Math.abs(1-h*h);let y,x,M,A;if(g>0)if(y=h*p-d,x=h*d-p,A=u*g,y>=0)if(x>=-A)if(x<=A){const R=1/g;y*=R,x*=R,M=y*(y+h*x+2*d)+x*(h*y+x+2*p)+m}else x=u,y=Math.max(0,-(h*x+d)),M=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(h*x+d)),M=-y*y+x*(x+2*p)+m;else x<=-A?(y=Math.max(0,-(-h*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+x*(x+2*p)+m):x<=A?(y=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(y=Math.max(0,-(h*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+x*(x+2*p)+m);else x=h>0?-u:u,y=Math.max(0,-(h*x+d)),M=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(jl,x),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const p=d*this.direction.dot(Zl.crossVectors(Na,Zl));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Na));if(m<0||p+m>h)return null;const g=-d*Na.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,h,d,p,m,g,y,x,M,A,R,v){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,y,x,M,A,R,v)}set(e,i,r,l,u,h,d,p,m,g,y,x,M,A,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=M,_[7]=A,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=h*g,M=h*y,A=d*g,R=d*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=M+A*m,i[5]=x-R*m,i[9]=-d*p,i[2]=R-x*m,i[6]=A+M*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*g,M=p*y,A=m*g,R=m*y;i[0]=x+R*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*y,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=R+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*g,M=p*y,A=m*g,R=m*y;i[0]=x-R*d,i[4]=-h*y,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*g,M=h*y,A=d*g,R=d*y;i[0]=p*g,i[4]=A*m-M,i[8]=x*m+R,i[1]=p*y,i[5]=R*m+x,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,M=h*m,A=d*p,R=d*m;i[0]=p*g,i[4]=R-x*y,i[8]=A*y+M,i[1]=y,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*y+A,i[10]=x-R*y}else if(e.order==="XZY"){const x=h*p,M=h*m,A=d*p,R=d*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=x*y+R,i[5]=h*g,i[9]=M*y-A,i[2]=A*y-M,i[6]=d*g,i[10]=R*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,ax)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Oa.crossVectors(r,Kn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Oa.crossVectors(r,Kn)),Oa.normalize(),Kl.crossVectors(Kn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Kn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Kn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],y=r[5],x=r[9],M=r[13],A=r[2],R=r[6],v=r[10],_=r[14],P=r[3],D=r[7],B=r[11],X=r[15],W=l[0],I=l[4],vt=l[8],F=l[12],E=l[1],O=l[5],gt=l[9],wt=l[13],J=l[2],lt=l[6],V=l[10],ct=l[14],nt=l[3],ft=l[7],C=l[11],Q=l[15];return u[0]=h*W+d*E+p*J+m*nt,u[4]=h*I+d*O+p*lt+m*ft,u[8]=h*vt+d*gt+p*V+m*C,u[12]=h*F+d*wt+p*ct+m*Q,u[1]=g*W+y*E+x*J+M*nt,u[5]=g*I+y*O+x*lt+M*ft,u[9]=g*vt+y*gt+x*V+M*C,u[13]=g*F+y*wt+x*ct+M*Q,u[2]=A*W+R*E+v*J+_*nt,u[6]=A*I+R*O+v*lt+_*ft,u[10]=A*vt+R*gt+v*V+_*C,u[14]=A*F+R*wt+v*ct+_*Q,u[3]=P*W+D*E+B*J+X*nt,u[7]=P*I+D*O+B*lt+X*ft,u[11]=P*vt+D*gt+B*V+X*C,u[15]=P*F+D*wt+B*ct+X*Q,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],y=e[6],x=e[10],M=e[14],A=e[3],R=e[7],v=e[11],_=e[15];return A*(+u*p*y-l*m*y-u*d*x+r*m*x+l*d*M-r*p*M)+R*(+i*p*M-i*m*x+u*h*x-l*h*M+l*m*g-u*p*g)+v*(+i*m*y-i*d*M-u*h*y+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*y+i*d*x+l*h*y-r*h*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=e[9],x=e[10],M=e[11],A=e[12],R=e[13],v=e[14],_=e[15],P=y*v*m-R*x*m+R*p*M-d*v*M-y*p*_+d*x*_,D=A*x*m-g*v*m-A*p*M+h*v*M+g*p*_-h*x*_,B=g*R*m-A*y*m+A*d*M-h*R*M-g*d*_+h*y*_,X=A*y*p-g*R*p-A*d*x+h*R*x+g*d*v-h*y*v,W=i*P+r*D+l*B+u*X;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/W;return e[0]=P*I,e[1]=(R*x*u-y*v*u-R*l*M+r*v*M+y*l*_-r*x*_)*I,e[2]=(d*v*u-R*p*u+R*l*m-r*v*m-d*l*_+r*p*_)*I,e[3]=(y*p*u-d*x*u-y*l*m+r*x*m+d*l*M-r*p*M)*I,e[4]=D*I,e[5]=(g*v*u-A*x*u+A*l*M-i*v*M-g*l*_+i*x*_)*I,e[6]=(A*p*u-h*v*u-A*l*m+i*v*m+h*l*_-i*p*_)*I,e[7]=(h*x*u-g*p*u+g*l*m-i*x*m-h*l*M+i*p*M)*I,e[8]=B*I,e[9]=(A*y*u-g*R*u-A*r*M+i*R*M+g*r*_-i*y*_)*I,e[10]=(h*R*u-A*d*u+A*r*m-i*R*m-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*y*u-g*r*m+i*y*m+h*r*M-i*d*M)*I,e[12]=X*I,e[13]=(g*R*l-A*y*l+A*r*x-i*R*x-g*r*v+i*y*v)*I,e[14]=(A*d*l-h*R*l-A*r*p+i*R*p+h*r*v-i*d*v)*I,e[15]=(h*y*l-g*d*l+g*r*p-i*y*p-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,y=d+d,x=u*m,M=u*g,A=u*y,R=h*g,v=h*y,_=d*y,P=p*m,D=p*g,B=p*y,X=r.x,W=r.y,I=r.z;return l[0]=(1-(R+_))*X,l[1]=(M+B)*X,l[2]=(A-D)*X,l[3]=0,l[4]=(M-B)*W,l[5]=(1-(x+_))*W,l[6]=(v+P)*W,l[7]=0,l[8]=(A+D)*I,l[9]=(v-P)*I,l[10]=(1-(x+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const m=1/u,g=1/h,y=1/d;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=y,Si.elements[9]*=y,Si.elements[10]*=y,i.setFromRotationMatrix(Si),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ra){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(d===ra)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===yc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ra){const p=this.elements,m=1/(i-e),g=1/(r-l),y=1/(h-u),x=(i+e)*m,M=(r+l)*g;let A,R;if(d===ra)A=(h+u)*y,R=-2*y;else if(d===yc)A=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new j,Si=new sn,ix=new j(0,0,0),ax=new j(1,1,1),Oa=new j,Kl=new j,Kn=new j,Zg=new sn,Kg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rx=0;const Qg=new j,cs=new Mr,ta=new sn,Ql=new j,Uo=new j,sx=new j,ox=new Mr,Jg=new j(1,0,0),$g=new j(0,1,0),t_=new j(0,0,1),lx={type:"added"},cx={type:"removed"};class An extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new j,i=new Ac,r=new Mr,l=new j(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new Me}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Qg.copy(e).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Uo,Ql,this.up):ta.lookAt(Ql,Uo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(ta),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),y=h(e.shapes),x=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new j(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new j,ea=new j,Jf=new j,na=new j,us=new j,fs=new j,e_=new j,$f=new j,td=new j,ed=new j;class Oi{constructor(e=new j,i=new j,r=new j){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){xi.subVectors(l,i),ea.subVectors(r,i),Jf.subVectors(e,i);const h=xi.dot(xi),d=xi.dot(ea),p=xi.dot(Jf),m=ea.dot(ea),g=ea.dot(Jf),y=h*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,M=(m*p-d*g)*x,A=(h*g-d*p)*x;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,na.x),p.addScaledVector(h,na.y),p.addScaledVector(d,na.z),p)}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),ea.subVectors(e,i),xi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),xi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);td.subVectors(e,l);const g=us.dot(td),y=fs.dot(td);if(g>=0&&y<=g)return i.copy(l);const x=p*y-g*m;if(x<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(us,h);ed.subVectors(e,u);const M=us.dot(ed),A=fs.dot(ed);if(A>=0&&M<=A)return i.copy(u);const R=M*m-p*A;if(R<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(fs,d);const v=g*A-M*y;if(v<=0&&y-g>=0&&M-A>=0)return e_.subVectors(u,l),d=(y-g)/(y-g+(M-A)),i.copy(l).addScaledVector(e_,d);const _=1/(v+R+x);return h=R*_,d=x*_,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class De{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ie.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ie.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ie.workingColorSpace){if(e=Dd(e,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nd(h,u,e+1/3),this.g=nd(h,u,e),this.b=nd(h,u,e-1/3)}return Ie.toWorkingColorSpace(this,l),this}setStyle(e,i=bn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bn){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ie.fromWorkingColorSpace(Un.copy(this),e),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const y=h-d;switch(m=g<=.5?y/(h+d):y/(2-h-d),h){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=bn){Ie.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==bn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Bo(Pa.h,Jl.h,i),l=Bo(Pa.s,Jl.s,i),u=Bo(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new De;De.NAMES=l0;let ux=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new j,$l=new he;class Pi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Vg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ts("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}}class u0 extends Pi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Pi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hi extends Pi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fx=0;const fi=new sn,id=new An,ds=new j,Qn=new Ho,No=new Ho,xn=new j;class zi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Me().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new hi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(Qn.min,No.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,No.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(No.min),Qn.expandByPoint(No.max))}Qn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)xn.fromBufferAttribute(d,m),p&&(ds.fromBufferAttribute(e,m),xn.add(ds)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let E=0;E<d;E++)m[E]=new j,g[E]=new j;const y=new j,x=new j,M=new j,A=new he,R=new he,v=new he,_=new j,P=new j;function D(E,O,gt){y.fromArray(l,E*3),x.fromArray(l,O*3),M.fromArray(l,gt*3),A.fromArray(h,E*2),R.fromArray(h,O*2),v.fromArray(h,gt*2),x.sub(y),M.sub(y),R.sub(A),v.sub(A);const wt=1/(R.x*v.y-v.x*R.y);isFinite(wt)&&(_.copy(x).multiplyScalar(v.y).addScaledVector(M,-R.y).multiplyScalar(wt),P.copy(M).multiplyScalar(R.x).addScaledVector(x,-v.x).multiplyScalar(wt),m[E].add(_),m[O].add(_),m[gt].add(_),g[E].add(P),g[O].add(P),g[gt].add(P))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let E=0,O=B.length;E<O;++E){const gt=B[E],wt=gt.start,J=gt.count;for(let lt=wt,V=wt+J;lt<V;lt+=3)D(r[lt+0],r[lt+1],r[lt+2])}const X=new j,W=new j,I=new j,vt=new j;function F(E){I.fromArray(u,E*3),vt.copy(I);const O=m[E];X.copy(O),X.sub(I.multiplyScalar(I.dot(O))).normalize(),W.crossVectors(vt,O);const wt=W.dot(g[E])<0?-1:1;p[E*4]=X.x,p[E*4+1]=X.y,p[E*4+2]=X.z,p[E*4+3]=wt}for(let E=0,O=B.length;E<O;++E){const gt=B[E],wt=gt.start,J=gt.count;for(let lt=wt,V=wt+J;lt<V;lt+=3)F(r[lt+0]),F(r[lt+1]),F(r[lt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new j,u=new j,h=new j,d=new j,p=new j,m=new j,g=new j,y=new j;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),R=e.getX(x+1),v=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,y=d.normalized,x=new m.constructor(p.length*g);let M=0,A=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?M=p[R]*d.data.stride+d.offset:M=p[R]*g;for(let _=0;_<g;_++)x[A++]=m[M++]}return new Pi(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,y=m.length;g<y;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let x=0,M=y.length;x<M;x++)g.push(y[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new sn,dr=new Ld,tc=new bc,i_=new j,hs=new j,ps=new j,ms=new j,ad=new j,ec=new j,nc=new he,ic=new he,ac=new he,a_=new j,r_=new j,s_=new j,rc=new j,sc=new j;class $n extends An{constructor(e=new zi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],y=u[p];g!==0&&(ad.fromBufferAttribute(y,e),h?ec.addScaledVector(ad,g):ec.addScaledVector(ad.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),dr.copy(e.ray).recast(e.near),!(tc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(tc,i_)===null||dr.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(u).invert(),dr.copy(e.ray).applyMatrix4(n_),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,dr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const v=x[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),D=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,X=D;B<X;B+=3){const W=d.getX(B),I=d.getX(B+1),vt=d.getX(B+2);l=oc(this,_,e,r,m,g,y,W,I,vt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=A,_=R;v<_;v+=3){const P=d.getX(v),D=d.getX(v+1),B=d.getX(v+2);l=oc(this,h,e,r,m,g,y,P,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const v=x[A],_=h[v.materialIndex],P=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,X=D;B<X;B+=3){const W=B,I=B+1,vt=B+2;l=oc(this,_,e,r,m,g,y,W,I,vt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=A,_=R;v<_;v+=3){const P=v,D=v+1,B=v+2;l=oc(this,h,e,r,m,g,y,P,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function dx(o,e,i,r,l,u,h,d){let p;if(e.side===kn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===ka,d),p===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,hs),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=dx(o,e,i,r,hs,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,d),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Oi.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new he)),u&&(nc.fromBufferAttribute(u,d),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Oi.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new he),g.uv2=g.uv1),h&&(a_.fromBufferAttribute(h,d),r_.fromBufferAttribute(h,p),s_.fromBufferAttribute(h,m),g.normal=Oi.getInterpolation(rc,hs,ps,ms,a_,r_,s_,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new j,materialIndex:0};Oi.getNormal(hs,ps,ms,y.normal),g.face=y}return g}class Va extends zi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],y=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new hi(m,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(y,2));function A(R,v,_,P,D,B,X,W,I,vt,F){const E=B/I,O=X/vt,gt=B/2,wt=X/2,J=W/2,lt=I+1,V=vt+1;let ct=0,nt=0;const ft=new j;for(let C=0;C<V;C++){const Q=C*O-wt;for(let ht=0;ht<lt;ht++){const Dt=ht*E-gt;ft[R]=Dt*P,ft[v]=Q*D,ft[_]=J,m.push(ft.x,ft.y,ft.z),ft[R]=0,ft[v]=0,ft[_]=W>0?1:-1,g.push(ft.x,ft.y,ft.z),y.push(ht/I),y.push(1-C/vt),ct+=1}}for(let C=0;C<vt;C++)for(let Q=0;Q<I;Q++){const ht=x+Q+lt*C,Dt=x+Q+lt*(C+1),Y=x+(Q+1)+lt*(C+1),dt=x+(Q+1)+lt*C;p.push(ht,Dt,dt),p.push(Dt,Y,dt),nt+=6}d.addGroup(M,nt,F),M+=nt,x+=ct}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function hx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function d0(o){return o.getRenderTarget()===null?o.outputColorSpace:Ie.workingColorSpace}const px={clone:Cs,merge:Bn};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oa extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new j,o_=new he,l_=new he;class Jn extends h0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,o_,l_),i.subVectors(l_,o_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _x extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new Jn(gs,_s,e,i);u.layers=this.layers,this.add(u);const h=new Jn(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new Jn(gs,_s,e,i);d.layers=this.layers,this.add(d);const p=new Jn(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new Jn(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class p0 extends Wn{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vx extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?bn:di),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Va(5,5,5),u=new oa({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new $n(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Vn),new _x(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const rd=new j,yx=new j,Sx=new Me;class Ba{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rd.subVectors(r,i).cross(yx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Sx.getNormalMatrix(e),l=this.coplanarPoint(rd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bc,lc=new j;class Ud{constructor(e=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ra){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],y=l[6],x=l[7],M=l[8],A=l[9],R=l[10],v=l[11],_=l[12],P=l[13],D=l[14],B=l[15];if(r[0].setComponents(p-u,x-m,v-M,B-_).normalize(),r[1].setComponents(p+u,x+m,v+M,B+_).normalize(),r[2].setComponents(p+h,x+g,v+A,B+P).normalize(),r[3].setComponents(p-h,x-g,v-A,B-P).normalize(),r[4].setComponents(p-d,x-y,v-R,B-D).normalize(),i===ra)r[5].setComponents(p+d,x+y,v+R,B+D).normalize();else if(i===yc)r[5].setComponents(d,y,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function xx(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const y=m.array,x=m.usage,M=y.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,y,x),m.onUploadCallback();let R;if(y instanceof Float32Array)R=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)R=o.SHORT;else if(y instanceof Uint32Array)R=o.UNSIGNED_INT;else if(y instanceof Int32Array)R=o.INT;else if(y instanceof Int8Array)R=o.BYTE;else if(y instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:A,type:R,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,y){const x=g.array,M=g._updateRange,A=g.updateRanges;if(o.bindBuffer(y,m),M.count===-1&&A.length===0&&o.bufferSubData(y,0,x),A.length!==0){for(let R=0,v=A.length;R<v;R++){const _=A[R];i?o.bufferSubData(y,_.start*x.BYTES_PER_ELEMENT,x,_.start,_.count):o.bufferSubData(y,_.start*x.BYTES_PER_ELEMENT,x.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x,M.offset,M.count):o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const x=r.get(m);(!x||x.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,l(m,g));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,g),y.version=m.version}}return{get:h,remove:d,update:p}}class wc extends zi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,y=e/d,x=i/p,M=[],A=[],R=[],v=[];for(let _=0;_<g;_++){const P=_*x-h;for(let D=0;D<m;D++){const B=D*y-u;A.push(B,-P,0),R.push(0,0,1),v.push(D/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const D=P+m*_,B=P+m*(_+1),X=P+1+m*(_+1),W=P+1+m*_;M.push(D,B,W),M.push(B,X,W)}this.setIndex(M),this.setAttribute("position",new hi(A,3)),this.setAttribute("normal",new hi(R,3)),this.setAttribute("uv",new hi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mx=`#ifdef USE_ALPHAHASH
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
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
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
}`,ye={alphahash_fragment:Mx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:bx,alphatest_fragment:Ax,alphatest_pars_fragment:wx,aomap_fragment:Rx,aomap_pars_fragment:Cx,batching_pars_vertex:Dx,batching_vertex:Lx,begin_vertex:Ux,beginnormal_vertex:Nx,bsdfs:Ox,iridescence_fragment:Px,bumpmap_pars_fragment:zx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:kx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:jx,displacementmap_vertex:Zx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Qx,colorspace_fragment:Jx,colorspace_pars_fragment:$x,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:xM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:yE,worldpos_vertex:SE,background_vert:xE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},Wt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Ui={basic:{uniforms:Bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new De(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Bn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Bn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new De(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Bn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Bn([Wt.points,Wt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Bn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Bn([Wt.common,Wt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Bn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Bn([Wt.sprite,Wt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Bn([Wt.common,Wt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Bn([Wt.lights,Wt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Ui.physical={uniforms:Bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const cc={r:0,b:0,g:0};function eT(o,e,i,r,l,u,h){const d=new De(0);let p=u===!0?0:1,m,g,y=null,x=0,M=null;function A(v,_){let P=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:e).get(D)),D===null?R(d,p):D&&D.isColor&&(R(D,1),P=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Ec)?(g===void 0&&(g=new $n(new Va(1,1,1),new oa({name:"BackgroundCubeMaterial",uniforms:Cs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,W,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ie.getTransfer(D.colorSpace)!==Xe,(y!==D||x!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=D,x=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new $n(new wc(2,2),new oa({name:"BackgroundMaterial",uniforms:Cs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ie.getTransfer(D.colorSpace)!==Xe,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(cc,d0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,R(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(d,p)},render:A}}function nT(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function y(J,lt,V,ct,nt){let ft=!1;if(h){const C=R(ct,V,lt);m!==C&&(m=C,M(m.object)),ft=_(J,ct,V,nt),ft&&P(J,ct,V,nt)}else{const C=lt.wireframe===!0;(m.geometry!==ct.id||m.program!==V.id||m.wireframe!==C)&&(m.geometry=ct.id,m.program=V.id,m.wireframe=C,ft=!0)}nt!==null&&i.update(nt,o.ELEMENT_ARRAY_BUFFER),(ft||g)&&(g=!1,vt(J,lt,V,ct),nt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(nt).buffer))}function x(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(J){return r.isWebGL2?o.bindVertexArray(J):u.bindVertexArrayOES(J)}function A(J){return r.isWebGL2?o.deleteVertexArray(J):u.deleteVertexArrayOES(J)}function R(J,lt,V){const ct=V.wireframe===!0;let nt=d[J.id];nt===void 0&&(nt={},d[J.id]=nt);let ft=nt[lt.id];ft===void 0&&(ft={},nt[lt.id]=ft);let C=ft[ct];return C===void 0&&(C=v(x()),ft[ct]=C),C}function v(J){const lt=[],V=[],ct=[];for(let nt=0;nt<l;nt++)lt[nt]=0,V[nt]=0,ct[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:lt,enabledAttributes:V,attributeDivisors:ct,object:J,attributes:{},index:null}}function _(J,lt,V,ct){const nt=m.attributes,ft=lt.attributes;let C=0;const Q=V.getAttributes();for(const ht in Q)if(Q[ht].location>=0){const Y=nt[ht];let dt=ft[ht];if(dt===void 0&&(ht==="instanceMatrix"&&J.instanceMatrix&&(dt=J.instanceMatrix),ht==="instanceColor"&&J.instanceColor&&(dt=J.instanceColor)),Y===void 0||Y.attribute!==dt||dt&&Y.data!==dt.data)return!0;C++}return m.attributesNum!==C||m.index!==ct}function P(J,lt,V,ct){const nt={},ft=lt.attributes;let C=0;const Q=V.getAttributes();for(const ht in Q)if(Q[ht].location>=0){let Y=ft[ht];Y===void 0&&(ht==="instanceMatrix"&&J.instanceMatrix&&(Y=J.instanceMatrix),ht==="instanceColor"&&J.instanceColor&&(Y=J.instanceColor));const dt={};dt.attribute=Y,Y&&Y.data&&(dt.data=Y.data),nt[ht]=dt,C++}m.attributes=nt,m.attributesNum=C,m.index=ct}function D(){const J=m.newAttributes;for(let lt=0,V=J.length;lt<V;lt++)J[lt]=0}function B(J){X(J,0)}function X(J,lt){const V=m.newAttributes,ct=m.enabledAttributes,nt=m.attributeDivisors;V[J]=1,ct[J]===0&&(o.enableVertexAttribArray(J),ct[J]=1),nt[J]!==lt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,lt),nt[J]=lt)}function W(){const J=m.newAttributes,lt=m.enabledAttributes;for(let V=0,ct=lt.length;V<ct;V++)lt[V]!==J[V]&&(o.disableVertexAttribArray(V),lt[V]=0)}function I(J,lt,V,ct,nt,ft,C){C===!0?o.vertexAttribIPointer(J,lt,V,nt,ft):o.vertexAttribPointer(J,lt,V,ct,nt,ft)}function vt(J,lt,V,ct){if(r.isWebGL2===!1&&(J.isInstancedMesh||ct.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const nt=ct.attributes,ft=V.getAttributes(),C=lt.defaultAttributeValues;for(const Q in ft){const ht=ft[Q];if(ht.location>=0){let Dt=nt[Q];if(Dt===void 0&&(Q==="instanceMatrix"&&J.instanceMatrix&&(Dt=J.instanceMatrix),Q==="instanceColor"&&J.instanceColor&&(Dt=J.instanceColor)),Dt!==void 0){const Y=Dt.normalized,dt=Dt.itemSize,bt=i.get(Dt);if(bt===void 0)continue;const Yt=bt.buffer,Ht=bt.type,Gt=bt.bytesPerElement,Qt=r.isWebGL2===!0&&(Ht===o.INT||Ht===o.UNSIGNED_INT||Dt.gpuType===Y_);if(Dt.isInterleavedBufferAttribute){const ae=Dt.data,et=ae.stride,Ne=Dt.offset;if(ae.isInstancedInterleavedBuffer){for(let ne=0;ne<ht.locationSize;ne++)X(ht.location+ne,ae.meshPerAttribute);J.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<ht.locationSize;ne++)B(ht.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ne=0;ne<ht.locationSize;ne++)I(ht.location+ne,dt/ht.locationSize,Ht,Y,et*Gt,(Ne+dt/ht.locationSize*ne)*Gt,Qt)}else{if(Dt.isInstancedBufferAttribute){for(let ae=0;ae<ht.locationSize;ae++)X(ht.location+ae,Dt.meshPerAttribute);J.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let ae=0;ae<ht.locationSize;ae++)B(ht.location+ae);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ae=0;ae<ht.locationSize;ae++)I(ht.location+ae,dt/ht.locationSize,Ht,Y,dt*Gt,dt/ht.locationSize*ae*Gt,Qt)}}else if(C!==void 0){const Y=C[Q];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(ht.location,Y);break;case 3:o.vertexAttrib3fv(ht.location,Y);break;case 4:o.vertexAttrib4fv(ht.location,Y);break;default:o.vertexAttrib1fv(ht.location,Y)}}}}W()}function F(){gt();for(const J in d){const lt=d[J];for(const V in lt){const ct=lt[V];for(const nt in ct)A(ct[nt].object),delete ct[nt];delete lt[V]}delete d[J]}}function E(J){if(d[J.id]===void 0)return;const lt=d[J.id];for(const V in lt){const ct=lt[V];for(const nt in ct)A(ct[nt].object),delete ct[nt];delete lt[V]}delete d[J.id]}function O(J){for(const lt in d){const V=d[lt];if(V[J.id]===void 0)continue;const ct=V[J.id];for(const nt in ct)A(ct[nt].object),delete ct[nt];delete V[J.id]}}function gt(){wt(),g=!0,m!==p&&(m=p,M(m.object))}function wt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:gt,resetDefaultState:wt,dispose:F,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:B,disableUnusedAttributes:W}}function iT(o,e,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,y){o.drawArrays(u,g,y),i.update(y,u,1)}function p(g,y,x){if(x===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,g,y,x),i.update(y,u,x)}function m(g,y,x){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<x;A++)this.render(g[A],y[A]);else{M.multiDrawArraysWEBGL(u,g,0,y,0,x);let A=0;for(let R=0;R<x;R++)A+=y[R];i.update(A,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function aT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,B=h||e.has("OES_texture_float"),X=D&&B,W=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:A,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:D,floatFragmentTextures:B,floatVertexTextures:X,maxSamples:W}}function rT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Ba,d=new Me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=g(y,x,0)},this.setState=function(y,x,M){const A=y.clippingPlanes,R=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!l||A===null||A.length===0||u&&!v)u?g(null):m();else{const P=u?0:r,D=P*4;let B=_.clippingState||null;p.value=B,B=g(A,x,D,M);for(let X=0;X!==D;++X)B[X]=i[X];_.clippingState=B,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,M,A){const R=y!==null?y.length:0;let v=null;if(R!==0){if(v=p.value,A!==!0||v===null){const _=M+R*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,B=M;D!==R;++D,B+=4)h.copy(y[D]).applyMatrix4(P,d),h.normal.toArray(v,B),v[B+3]=h.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function sT(o){let e=new WeakMap;function i(h,d){return d===vd?h.mapping=As:d===yd&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===yd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new vx(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends h0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xs=4,c_=[.125,.215,.35,.446,.526,.582],gr=20,sd=new g0,u_=new De;let od=null,ld=0,cd=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,f_=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,pr,vs),new j(0,pr,-vs),new j(vs,0,pr),new j(-vs,0,pr),new j(pr,vs,0),new j(-pr,vs,0)];class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:sa,depthBuffer:!1},l=h_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(u)),this._blurMaterial=lT(u,e,i)}return l}_compileMaterial(e){const i=new $n(this._lodPlanes[0],e);this._renderer.compile(i,sd)}_sceneToCubeUV(e,i,r,l){const d=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(u_),g.toneMapping=Ha,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),A=new $n(new Va,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(u_),R=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):P===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;uc(l,P*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new $n(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=f_[(l-1)%f_.length];this._blur(e,l-1,l,u,h)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new $n(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),R=u/A,v=isFinite(u)?1+Math.floor(g*R):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let P=0;for(let I=0;I<gr;++I){const vt=I/R,F=Math.exp(-vt*vt/2);_.push(F),I===0?P+=F:I<v&&(P+=2*F)}for(let I=0;I<_.length;I++)_[I]=_[I]/P;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=A,x.mipInt.value=D-r;const B=this._sizeLods[l],X=3*B*(l>D-xs?l-D+xs:0),W=4*(this._cubeSize-B);uc(i,X,W,3*B,2*B),p.setRenderTarget(i),p.render(y,sd)}}function oT(o){const e=[],i=[],r=[];let l=o;const u=o-xs+1+c_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-xs?p=c_[h-o+xs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,A=6,R=3,v=2,_=1,P=new Float32Array(R*A*M),D=new Float32Array(v*A*M),B=new Float32Array(_*A*M);for(let W=0;W<M;W++){const I=W%3*2/3-1,vt=W>2?0:-1,F=[I,vt,0,I+2/3,vt,0,I+2/3,vt+1,0,I,vt,0,I+2/3,vt+1,0,I,vt+1,0];P.set(F,R*A*W),D.set(x,v*A*W);const E=[W,W,W,W,W,W];B.set(E,_*A*W)}const X=new zi;X.setAttribute("position",new Pi(P,R)),X.setAttribute("uv",new Pi(D,v)),X.setAttribute("faceIndex",new Pi(B,_)),e.push(X),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function h_(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lT(o,e,i){const r=new Float32Array(gr),l=new j(0,1,0);return new oa({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function p_(){return new oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function m_(){return new oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function cT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vd||p===yd,g=p===As||p===ws;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let y=e.get(d);return i===null&&(i=new d_(o)),y=m?i.fromEquirectangular(d,y):i.fromCubemap(d,y),e.set(d,y),y.texture}else{if(e.has(d))return e.get(d).texture;{const y=d.image;if(m&&y&&y.height>0||g&&y&&l(y)){i===null&&(i=new d_(o));const x=m?i.fromEquirectangular(d):i.fromCubemap(d);return e.set(d,x),d.addEventListener("dispose",u),x.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function uT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fT(o,e,i,r){const l={},u=new WeakMap;function h(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);for(const A in x.morphAttributes){const R=x.morphAttributes[A];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(y,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(y){const x=y.attributes;for(const A in x)e.update(x[A],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const A in M){const R=M[A];for(let v=0,_=R.length;v<_;v++)e.update(R[v],o.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,A=y.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let D=0,B=P.length;D<B;D+=3){const X=P[D+0],W=P[D+1],I=P[D+2];x.push(X,W,W,I,I,X)}}else if(A!==void 0){const P=A.array;R=A.version;for(let D=0,B=P.length/3-1;D<B;D+=3){const X=D+0,W=D+1,I=D+2;x.push(X,W,W,I,I,X)}}else return;const v=new(i0(x)?f0:u0)(x,1);v.version=R;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const x=u.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:g}}function dT(o,e,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,A){o.drawElements(u,A,d,M*p),i.update(A,u,1)}function y(M,A,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,A,d,M*p,R),i.update(A,u,R)}function x(M,A,R){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,A[_]);else{v.multiDrawElementsWEBGL(u,A,0,d,M,0,R);let _=0;for(let P=0;P<R;P++)_+=A[P];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=y,this.renderMultiDraw=x}function hT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pT(o,e){return o[0]-e[0]}function mT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new Ye,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,y){const x=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=A!==void 0?A.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let lt=function(){wt.dispose(),u.delete(g),g.removeEventListener("dispose",lt)};var M=lt;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,X=g.morphAttributes.color!==void 0,W=g.morphAttributes.position||[],I=g.morphAttributes.normal||[],vt=g.morphAttributes.color||[];let F=0;D===!0&&(F=1),B===!0&&(F=2),X===!0&&(F=3);let E=g.attributes.position.count*F,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const gt=new Float32Array(E*O*4*R),wt=new s0(gt,E,O,R);wt.type=aa,wt.needsUpdate=!0;const J=F*4;for(let V=0;V<R;V++){const ct=W[V],nt=I[V],ft=vt[V],C=E*O*4*V;for(let Q=0;Q<ct.count;Q++){const ht=Q*J;D===!0&&(h.fromBufferAttribute(ct,Q),gt[C+ht+0]=h.x,gt[C+ht+1]=h.y,gt[C+ht+2]=h.z,gt[C+ht+3]=0),B===!0&&(h.fromBufferAttribute(nt,Q),gt[C+ht+4]=h.x,gt[C+ht+5]=h.y,gt[C+ht+6]=h.z,gt[C+ht+7]=0),X===!0&&(h.fromBufferAttribute(ft,Q),gt[C+ht+8]=h.x,gt[C+ht+9]=h.y,gt[C+ht+10]=h.z,gt[C+ht+11]=ft.itemSize===4?h.w:1)}}v={count:R,texture:wt,size:new he(E,O)},u.set(g,v),g.addEventListener("dispose",lt)}let _=0;for(let D=0;D<x.length;D++)_+=x[D];const P=g.morphTargetsRelative?1:1-_;y.getUniforms().setValue(o,"morphTargetBaseInfluence",P),y.getUniforms().setValue(o,"morphTargetInfluences",x),y.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const A=x===void 0?0:x.length;let R=r[g.id];if(R===void 0||R.length!==A){R=[];for(let B=0;B<A;B++)R[B]=[B,0];r[g.id]=R}for(let B=0;B<A;B++){const X=R[B];X[0]=B,X[1]=x[B]}R.sort(mT);for(let B=0;B<8;B++)B<A&&R[B][1]?(d[B][0]=R[B][0],d[B][1]=R[B][1]):(d[B][0]=Number.MAX_SAFE_INTEGER,d[B][1]=0);d.sort(pT);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let P=0;for(let B=0;B<8;B++){const X=d[B],W=X[0],I=X[1];W!==Number.MAX_SAFE_INTEGER&&I?(v&&g.getAttribute("morphTarget"+B)!==v[W]&&g.setAttribute("morphTarget"+B,v[W]),_&&g.getAttribute("morphNormal"+B)!==_[W]&&g.setAttribute("morphNormal"+B,_[W]),l[B]=I,P+=I):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const D=g.morphTargetsRelative?1:1-P;y.getUniforms().setValue(o,"morphTargetBaseInfluence",D),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _T(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return y}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class _0 extends Wn{constructor(e,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:yr,g!==yr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===yr&&(r=Fa),r===void 0&&g===Rs&&(r=vr),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Fn,this.minFilter=p!==void 0?p:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new Wn,y0=new _0(1,1);y0.compareFunction=n0;const S0=new s0,x0=new ex,M0=new p0,g_=[],__=[],v_=new Float32Array(16),y_=new Float32Array(9),S_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=__[e];i===void 0&&(i=new Int32Array(e),__[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function MT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;S_.set(r),o.uniformMatrix2fv(this.addr,!1,S_),pn(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),pn(i,r)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;v_.set(r),o.uniformMatrix4fv(this.addr,!1,v_),pn(i,r)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?y0:v0;i.setTexture2D(e||u,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||x0,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||S0,l)}function BT(o){switch(o){case 5126:return vT;case 35664:return yT;case 35665:return ST;case 35666:return xT;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return DT;case 36295:return LT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}function FT(o,e){o.uniform1fv(this.addr,e)}function IT(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kT(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WT(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XT(o,e){o.uniform1iv(this.addr,e)}function qT(o,e){o.uniform2iv(this.addr,e)}function YT(o,e){o.uniform3iv(this.addr,e)}function jT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function QT(o,e){o.uniform3uiv(this.addr,e)}function JT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||v0,u[h])}function tb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||x0,u[h])}function eb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||M0,u[h])}function nb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||S0,u[h])}function ib(o){switch(o){case 5126:return FT;case 35664:return IT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function x_(o,e){o.seq.push(e),o.map[e.id]=e}function ob(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),h=ud.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){x_(i,m===void 0?new ab(d,o,e):new rb(d,o,e));break}else{let y=i.map[d];y===void 0&&(y=new sb(d),x_(i,y)),i=y}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);ob(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function M_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let cb=0;function ub(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function fb(o){const e=Ie.getPrimaries(Ie.workingColorSpace),i=Ie.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case sa:case Tc:return[r,"LinearTransferOETF"];case bn:case Cd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function E_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ub(o.getShaderSource(e),h)}else return l}function db(o,e){const i=fb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function hb(o,e){let i;switch(e){case dS:i="Linear";break;case hS:i="Reinhard";break;case pS:i="OptimizedCineon";break;case mS:i="ACESFilmic";break;case _S:i="AgX";break;case gS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function gb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ms(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(vb,Sb)}const yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sb(o,e){let i=ye[e];if(i===void 0){const r=yb.get(e);if(r!==void 0)i=ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(i)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(o){return o.replace(xb,Mb)}function Mb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Eb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case X_:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function wb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Rb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Eb(i),m=Tb(i),g=bb(i),y=Ab(i),x=wb(i),M=i.isWebGL2?"":pb(i),A=mb(i),R=gb(u),v=l.createProgram();let _,P,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),_.length>0&&(_+=`
`),P=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),P.length>0&&(P+=`
`)):(_=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),P=[M,w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ye.tonemapping_pars_fragment:"",i.toneMapping!==Ha?hb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,db("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ms).join(`
`)),h=Td(h),h=T_(h,i),h=b_(h,i),d=Td(d),d=T_(d,i),d=b_(d,i),h=A_(h),d=A_(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const B=D+_+h,X=D+P+d,W=M_(l,l.VERTEX_SHADER,B),I=M_(l,l.FRAGMENT_SHADER,X);l.attachShader(v,W),l.attachShader(v,I),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function vt(gt){if(o.debug.checkShaderErrors){const wt=l.getProgramInfoLog(v).trim(),J=l.getShaderInfoLog(W).trim(),lt=l.getShaderInfoLog(I).trim();let V=!0,ct=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,W,I);else{const nt=E_(l,W,"vertex"),ft=E_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+gt.name+`
Material Type: `+gt.type+`

Program Info Log: `+wt+`
`+nt+`
`+ft)}else wt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",wt):(J===""||lt==="")&&(ct=!1);ct&&(gt.diagnostics={runnable:V,programLog:wt,vertexShader:{log:J,prefix:_},fragmentShader:{log:lt,prefix:P}})}l.deleteShader(W),l.deleteShader(I),F=new pc(l,v),E=_b(l,v)}let F;this.getUniforms=function(){return F===void 0&&vt(this),F};let E;this.getAttributes=function(){return E===void 0&&vt(this),E};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(v,lb)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=W,this.fragmentShader=I,this}let Cb=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Lb(e),i.set(e,r)),r}}class Lb{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Ub(o,e,i,r,l,u,h){const d=new o0,p=new Db,m=new Set,g=[],y=l.isWebGL2,x=l.logarithmicDepthBuffer,M=l.vertexTextures;let A=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,O,gt,wt,J){const lt=wt.fog,V=J.geometry,ct=E.isMeshStandardMaterial?wt.environment:null,nt=(E.isMeshStandardMaterial?i:e).get(E.envMap||ct),ft=nt&&nt.mapping===Ec?nt.image.height:null,C=R[E.type];E.precision!==null&&(A=l.getMaxPrecision(E.precision),A!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",A,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=Q!==void 0?Q.length:0;let Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let Y,dt,bt,Yt;if(C){const le=Ui[C];Y=le.vertexShader,dt=le.fragmentShader}else Y=E.vertexShader,dt=E.fragmentShader,p.update(E),bt=p.getVertexShaderID(E),Yt=p.getFragmentShaderID(E);const Ht=o.getRenderTarget(),Gt=J.isInstancedMesh===!0,Qt=J.isBatchedMesh===!0,ae=!!E.map,et=!!E.matcap,Ne=!!nt,ne=!!E.aoMap,oe=!!E.lightMap,Kt=!!E.bumpMap,Ae=!!E.normalMap,ce=!!E.displacementMap,L=!!E.emissiveMap,b=!!E.metalnessMap,ot=!!E.roughnessMap,Nt=E.anisotropy>0,Rt=E.clearcoat>0,Z=E.iridescence>0,it=E.sheen>0,rt=E.transmission>0,mt=Nt&&!!E.anisotropyMap,xt=Rt&&!!E.clearcoatMap,At=Rt&&!!E.clearcoatNormalMap,st=Rt&&!!E.clearcoatRoughnessMap,se=Z&&!!E.iridescenceMap,qt=Z&&!!E.iridescenceThicknessMap,Ot=it&&!!E.sheenColorMap,Bt=it&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Pt=!!E.specularColorMap,N=!!E.specularIntensityMap,pt=rt&&!!E.transmissionMap,Lt=rt&&!!E.thicknessMap,Ft=!!E.gradientMap,U=!!E.alphaMap,Et=E.alphaTest>0,Tt=!!E.alphaHash,Zt=!!E.extensions;let jt=Ha;E.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(jt=o.toneMapping);const ge={isWebGL2:y,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:dt,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:Yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:A,batching:Qt,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Ht===null?o.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:sa,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:et,envMap:Ne,envMapMode:Ne&&nt.mapping,envMapCubeUVHeight:ft,aoMap:ne,lightMap:oe,bumpMap:Kt,normalMap:Ae,displacementMap:M&&ce,emissiveMap:L,normalMapObjectSpace:Ae&&E.normalMapType===RS,normalMapTangentSpace:Ae&&E.normalMapType===e0,metalnessMap:b,roughnessMap:ot,anisotropy:Nt,anisotropyMap:mt,clearcoat:Rt,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:st,iridescence:Z,iridescenceMap:se,iridescenceThicknessMap:qt,sheen:it,sheenColorMap:Ot,sheenRoughnessMap:Bt,specularMap:kt,specularColorMap:Pt,specularIntensityMap:N,transmission:rt,transmissionMap:pt,thicknessMap:Lt,gradientMap:Ft,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:U,alphaTest:Et,alphaHash:Tt,combine:E.combine,mapUv:ae&&v(E.map.channel),aoMapUv:ne&&v(E.aoMap.channel),lightMapUv:oe&&v(E.lightMap.channel),bumpMapUv:Kt&&v(E.bumpMap.channel),normalMapUv:Ae&&v(E.normalMap.channel),displacementMapUv:ce&&v(E.displacementMap.channel),emissiveMapUv:L&&v(E.emissiveMap.channel),metalnessMapUv:b&&v(E.metalnessMap.channel),roughnessMapUv:ot&&v(E.roughnessMap.channel),anisotropyMapUv:mt&&v(E.anisotropyMap.channel),clearcoatMapUv:xt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(E.sheenRoughnessMap.channel),specularMapUv:kt&&v(E.specularMap.channel),specularColorMapUv:Pt&&v(E.specularColorMap.channel),specularIntensityMapUv:N&&v(E.specularIntensityMap.channel),transmissionMapUv:pt&&v(E.transmissionMap.channel),thicknessMapUv:Lt&&v(E.thicknessMap.channel),alphaMapUv:U&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||Nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!V.attributes.uv&&(ae||U),fog:!!lt,useFog:E.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:J.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Dt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&gt.length>0,shadowMapType:o.shadowMap.type,toneMapping:jt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&Ie.getTransfer(E.map.colorSpace)===Xe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ni,flipSided:E.side===kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Zt&&E.extensions.derivatives===!0,extensionFragDepth:Zt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Zt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Zt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Zt&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ge.vertexUv1s=m.has(1),ge.vertexUv2s=m.has(2),ge.vertexUv3s=m.has(3),m.clear(),ge}function P(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const gt in E.defines)O.push(gt),O.push(E.defines[gt]);return E.isRawShaderMaterial===!1&&(D(O,E),B(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function D(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function B(E,O){d.disableAll(),O.isWebGL2&&d.enable(0),O.supportsVertexTextures&&d.enable(1),O.instancing&&d.enable(2),O.instancingColor&&d.enable(3),O.matcap&&d.enable(4),O.envMap&&d.enable(5),O.normalMapObjectSpace&&d.enable(6),O.normalMapTangentSpace&&d.enable(7),O.clearcoat&&d.enable(8),O.iridescence&&d.enable(9),O.alphaTest&&d.enable(10),O.vertexColors&&d.enable(11),O.vertexAlphas&&d.enable(12),O.vertexUv1s&&d.enable(13),O.vertexUv2s&&d.enable(14),O.vertexUv3s&&d.enable(15),O.vertexTangents&&d.enable(16),O.anisotropy&&d.enable(17),O.alphaHash&&d.enable(18),O.batching&&d.enable(19),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.skinning&&d.enable(4),O.morphTargets&&d.enable(5),O.morphNormals&&d.enable(6),O.morphColors&&d.enable(7),O.premultipliedAlpha&&d.enable(8),O.shadowMapEnabled&&d.enable(9),O.useLegacyLights&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.alphaToCoverage&&d.enable(20),E.push(d.mask)}function X(E){const O=R[E.type];let gt;if(O){const wt=Ui[O];gt=px.clone(wt.uniforms)}else gt=E.uniforms;return gt}function W(E,O){let gt;for(let wt=0,J=g.length;wt<J;wt++){const lt=g[wt];if(lt.cacheKey===O){gt=lt,++gt.usedTimes;break}}return gt===void 0&&(gt=new Rb(o,O,E,u),g.push(gt)),gt}function I(E){if(--E.usedTimes===0){const O=g.indexOf(E);g[O]=g[g.length-1],g.pop(),E.destroy()}}function vt(E){p.remove(E)}function F(){p.dispose()}return{getParameters:_,getProgramCacheKey:P,getUniforms:X,acquireProgram:W,releaseProgram:I,releaseShaderCache:vt,programs:g,dispose:F}}function Nb(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function R_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function C_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(y,x,M,A,R,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:A,renderOrder:y.renderOrder,z:R,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=A,_.renderOrder=y.renderOrder,_.z=R,_.group=v),e++,_}function d(y,x,M,A,R,v){const _=h(y,x,M,A,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(y,x,M,A,R,v){const _=h(y,x,M,A,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,x){i.length>1&&i.sort(y||Ob),r.length>1&&r.sort(x||R_),l.length>1&&l.sort(x||R_)}function g(){for(let y=e,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function Pb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new C_,o.set(r,[h])):l>=u.length?(h=new C_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new De};break;case"SpotLight":i={position:new j,direction:new j,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function Bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Fb=0;function Ib(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hb(o,e){const i=new zb,r=Bb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new j);const u=new j,h=new sn,d=new sn;function p(g,y){let x=0,M=0,A=0;for(let gt=0;gt<9;gt++)l.probe[gt].set(0,0,0);let R=0,v=0,_=0,P=0,D=0,B=0,X=0,W=0,I=0,vt=0,F=0;g.sort(Ib);const E=y===!0?Math.PI:1;for(let gt=0,wt=g.length;gt<wt;gt++){const J=g[gt],lt=J.color,V=J.intensity,ct=J.distance,nt=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)x+=lt.r*V*E,M+=lt.g*V*E,A+=lt.b*V*E;else if(J.isLightProbe){for(let ft=0;ft<9;ft++)l.probe[ft].addScaledVector(J.sh.coefficients[ft],V);F++}else if(J.isDirectionalLight){const ft=i.get(J);if(ft.color.copy(J.color).multiplyScalar(J.intensity*E),J.castShadow){const C=J.shadow,Q=r.get(J);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,l.directionalShadow[R]=Q,l.directionalShadowMap[R]=nt,l.directionalShadowMatrix[R]=J.shadow.matrix,B++}l.directional[R]=ft,R++}else if(J.isSpotLight){const ft=i.get(J);ft.position.setFromMatrixPosition(J.matrixWorld),ft.color.copy(lt).multiplyScalar(V*E),ft.distance=ct,ft.coneCos=Math.cos(J.angle),ft.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),ft.decay=J.decay,l.spot[_]=ft;const C=J.shadow;if(J.map&&(l.spotLightMap[I]=J.map,I++,C.updateMatrices(J),J.castShadow&&vt++),l.spotLightMatrix[_]=C.matrix,J.castShadow){const Q=r.get(J);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,l.spotShadow[_]=Q,l.spotShadowMap[_]=nt,W++}_++}else if(J.isRectAreaLight){const ft=i.get(J);ft.color.copy(lt).multiplyScalar(V),ft.halfWidth.set(J.width*.5,0,0),ft.halfHeight.set(0,J.height*.5,0),l.rectArea[P]=ft,P++}else if(J.isPointLight){const ft=i.get(J);if(ft.color.copy(J.color).multiplyScalar(J.intensity*E),ft.distance=J.distance,ft.decay=J.decay,J.castShadow){const C=J.shadow,Q=r.get(J);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,l.pointShadow[v]=Q,l.pointShadowMap[v]=nt,l.pointShadowMatrix[v]=J.shadow.matrix,X++}l.point[v]=ft,v++}else if(J.isHemisphereLight){const ft=i.get(J);ft.skyColor.copy(J.color).multiplyScalar(V*E),ft.groundColor.copy(J.groundColor).multiplyScalar(V*E),l.hemi[D]=ft,D++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=M,l.ambient[2]=A;const O=l.hash;(O.directionalLength!==R||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==P||O.hemiLength!==D||O.numDirectionalShadows!==B||O.numPointShadows!==X||O.numSpotShadows!==W||O.numSpotMaps!==I||O.numLightProbes!==F)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=P,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=X,l.pointShadowMap.length=X,l.spotShadow.length=W,l.spotShadowMap.length=W,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=X,l.spotLightMatrix.length=W+I-vt,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=vt,l.numLightProbes=F,O.directionalLength=R,O.pointLength=v,O.spotLength=_,O.rectAreaLength=P,O.hemiLength=D,O.numDirectionalShadows=B,O.numPointShadows=X,O.numSpotShadows=W,O.numSpotMaps=I,O.numLightProbes=F,l.version=Fb++)}function m(g,y){let x=0,M=0,A=0,R=0,v=0;const _=y.matrixWorldInverse;for(let P=0,D=g.length;P<D;P++){const B=g[P];if(B.isDirectionalLight){const X=l.directional[x];X.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),X.direction.sub(u),X.direction.transformDirection(_),x++}else if(B.isSpotLight){const X=l.spot[A];X.position.setFromMatrixPosition(B.matrixWorld),X.position.applyMatrix4(_),X.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),X.direction.sub(u),X.direction.transformDirection(_),A++}else if(B.isRectAreaLight){const X=l.rectArea[R];X.position.setFromMatrixPosition(B.matrixWorld),X.position.applyMatrix4(_),d.identity(),h.copy(B.matrixWorld),h.premultiply(_),d.extractRotation(h),X.halfWidth.set(B.width*.5,0,0),X.halfHeight.set(0,B.height*.5,0),X.halfWidth.applyMatrix4(d),X.halfHeight.applyMatrix4(d),R++}else if(B.isPointLight){const X=l.point[M];X.position.setFromMatrixPosition(B.matrixWorld),X.position.applyMatrix4(_),M++}else if(B.isHemisphereLight){const X=l.hemi[v];X.direction.setFromMatrixPosition(B.matrixWorld),X.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function D_(o,e){const i=new Hb(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function h(y){r.push(y)}function d(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function Gb(o,e){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new D_(o,e),i.set(u,[p])):h>=d.length?(p=new D_(o,e),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class Vb extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wb=`void main() {
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
}`;function qb(o,e,i){let r=new Ud;const l=new he,u=new he,h=new Ye,d=new Vb({depthPacking:wS}),p=new kb,m={},g=i.maxTextureSize,y={[ka]:kn,[kn]:ka,[Ni]:Ni},x=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new zi;A.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $n(A,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let _=this.type;this.render=function(W,I,vt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||W.length===0)return;const F=o.getRenderTarget(),E=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),gt=o.state;gt.setBlending(Ia),gt.buffers.color.setClear(1,1,1,1),gt.buffers.depth.setTest(!0),gt.setScissorTest(!1);const wt=_!==ia&&this.type===ia,J=_===ia&&this.type!==ia;for(let lt=0,V=W.length;lt<V;lt++){const ct=W[lt],nt=ct.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;l.copy(nt.mapSize);const ft=nt.getFrameExtents();if(l.multiply(ft),u.copy(nt.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ft.x),l.x=u.x*ft.x,nt.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ft.y),l.y=u.y*ft.y,nt.mapSize.y=u.y)),nt.map===null||wt===!0||J===!0){const Q=this.type!==ia?{minFilter:Fn,magFilter:Fn}:{};nt.map!==null&&nt.map.dispose(),nt.map=new xr(l.x,l.y,Q),nt.map.texture.name=ct.name+".shadowMap",nt.camera.updateProjectionMatrix()}o.setRenderTarget(nt.map),o.clear();const C=nt.getViewportCount();for(let Q=0;Q<C;Q++){const ht=nt.getViewport(Q);h.set(u.x*ht.x,u.y*ht.y,u.x*ht.z,u.y*ht.w),gt.viewport(h),nt.updateMatrices(ct,Q),r=nt.getFrustum(),B(I,vt,nt.camera,ct,this.type)}nt.isPointLightShadow!==!0&&this.type===ia&&P(nt,vt),nt.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(F,E,O)};function P(W,I){const vt=e.update(R);x.defines.VSM_SAMPLES!==W.blurSamples&&(x.defines.VSM_SAMPLES=W.blurSamples,M.defines.VSM_SAMPLES=W.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),W.mapPass===null&&(W.mapPass=new xr(l.x,l.y)),x.uniforms.shadow_pass.value=W.map.texture,x.uniforms.resolution.value=W.mapSize,x.uniforms.radius.value=W.radius,o.setRenderTarget(W.mapPass),o.clear(),o.renderBufferDirect(I,null,vt,x,R,null),M.uniforms.shadow_pass.value=W.mapPass.texture,M.uniforms.resolution.value=W.mapSize,M.uniforms.radius.value=W.radius,o.setRenderTarget(W.map),o.clear(),o.renderBufferDirect(I,null,vt,M,R,null)}function D(W,I,vt,F){let E=null;const O=vt.isPointLight===!0?W.customDistanceMaterial:W.customDepthMaterial;if(O!==void 0)E=O;else if(E=vt.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const gt=E.uuid,wt=I.uuid;let J=m[gt];J===void 0&&(J={},m[gt]=J);let lt=J[wt];lt===void 0&&(lt=E.clone(),J[wt]=lt,I.addEventListener("dispose",X)),E=lt}if(E.visible=I.visible,E.wireframe=I.wireframe,F===ia?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:y[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,vt.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const gt=o.properties.get(E);gt.light=vt}return E}function B(W,I,vt,F,E){if(W.visible===!1)return;if(W.layers.test(I.layers)&&(W.isMesh||W.isLine||W.isPoints)&&(W.castShadow||W.receiveShadow&&E===ia)&&(!W.frustumCulled||r.intersectsObject(W))){W.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,W.matrixWorld);const wt=e.update(W),J=W.material;if(Array.isArray(J)){const lt=wt.groups;for(let V=0,ct=lt.length;V<ct;V++){const nt=lt[V],ft=J[nt.materialIndex];if(ft&&ft.visible){const C=D(W,ft,F,E);W.onBeforeShadow(o,W,I,vt,wt,C,nt),o.renderBufferDirect(vt,null,wt,C,W,nt),W.onAfterShadow(o,W,I,vt,wt,C,nt)}}}else if(J.visible){const lt=D(W,J,F,E);W.onBeforeShadow(o,W,I,vt,wt,lt,null),o.renderBufferDirect(vt,null,wt,lt,W,null),W.onAfterShadow(o,W,I,vt,wt,lt,null)}}const gt=W.children;for(let wt=0,J=gt.length;wt<J;wt++)B(gt[wt],I,vt,F,E)}function X(W){W.target.removeEventListener("dispose",X);for(const vt in m){const F=m[vt],E=W.target.uuid;E in F&&(F[E].dispose(),delete F[E])}}}function Yb(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const Et=new Ye;let Tt=null;const Zt=new Ye(0,0,0,0);return{setMask:function(jt){Tt!==jt&&!U&&(o.colorMask(jt,jt,jt,jt),Tt=jt)},setLocked:function(jt){U=jt},setClear:function(jt,ge,le,Ee,Ve){Ve===!0&&(jt*=Ee,ge*=Ee,le*=Ee),Et.set(jt,ge,le,Ee),Zt.equals(Et)===!1&&(o.clearColor(jt,ge,le,Ee),Zt.copy(Et))},reset:function(){U=!1,Tt=null,Zt.set(-1,0,0,0)}}}function u(){let U=!1,Et=null,Tt=null,Zt=null;return{setTest:function(jt){jt?Gt(o.DEPTH_TEST):Qt(o.DEPTH_TEST)},setMask:function(jt){Et!==jt&&!U&&(o.depthMask(jt),Et=jt)},setFunc:function(jt){if(Tt!==jt){switch(jt){case iS:o.depthFunc(o.NEVER);break;case aS:o.depthFunc(o.ALWAYS);break;case rS:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sS:o.depthFunc(o.EQUAL);break;case oS:o.depthFunc(o.GEQUAL);break;case lS:o.depthFunc(o.GREATER);break;case cS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Tt=jt}},setLocked:function(jt){U=jt},setClear:function(jt){Zt!==jt&&(o.clearDepth(jt),Zt=jt)},reset:function(){U=!1,Et=null,Tt=null,Zt=null}}}function h(){let U=!1,Et=null,Tt=null,Zt=null,jt=null,ge=null,le=null,Ee=null,Ve=null;return{setTest:function(me){U||(me?Gt(o.STENCIL_TEST):Qt(o.STENCIL_TEST))},setMask:function(me){Et!==me&&!U&&(o.stencilMask(me),Et=me)},setFunc:function(me,_e,qe){(Tt!==me||Zt!==_e||jt!==qe)&&(o.stencilFunc(me,_e,qe),Tt=me,Zt=_e,jt=qe)},setOp:function(me,_e,qe){(ge!==me||le!==_e||Ee!==qe)&&(o.stencilOp(me,_e,qe),ge=me,le=_e,Ee=qe)},setLocked:function(me){U=me},setClear:function(me){Ve!==me&&(o.clearStencil(me),Ve=me)},reset:function(){U=!1,Et=null,Tt=null,Zt=null,jt=null,ge=null,le=null,Ee=null,Ve=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,y=new WeakMap;let x={},M={},A=new WeakMap,R=[],v=null,_=!1,P=null,D=null,B=null,X=null,W=null,I=null,vt=null,F=new De(0,0,0),E=0,O=!1,gt=null,wt=null,J=null,lt=null,V=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,ft=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(C)[1]),nt=ft>=1):C.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),nt=ft>=2);let Q=null,ht={};const Dt=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),dt=new Ye().fromArray(Dt),bt=new Ye().fromArray(Y);function Yt(U,Et,Tt,Zt){const jt=new Uint8Array(4),ge=o.createTexture();o.bindTexture(U,ge),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let le=0;le<Tt;le++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(Et,0,o.RGBA,1,1,Zt,0,o.RGBA,o.UNSIGNED_BYTE,jt):o.texImage2D(Et+le,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,jt);return ge}const Ht={};Ht[o.TEXTURE_2D]=Yt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ht[o.TEXTURE_CUBE_MAP]=Yt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ht[o.TEXTURE_2D_ARRAY]=Yt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ht[o.TEXTURE_3D]=Yt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Gt(o.DEPTH_TEST),p.setFunc(mc),ce(!1),L(ug),Gt(o.CULL_FACE),Kt(Ia);function Gt(U){x[U]!==!0&&(o.enable(U),x[U]=!0)}function Qt(U){x[U]!==!1&&(o.disable(U),x[U]=!1)}function ae(U,Et){return M[U]!==Et?(o.bindFramebuffer(U,Et),M[U]=Et,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Et),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Et)),!0):!1}function et(U,Et){let Tt=R,Zt=!1;if(U)if(Tt=A.get(Et),Tt===void 0&&(Tt=[],A.set(Et,Tt)),U.isWebGLMultipleRenderTargets){const jt=U.texture;if(Tt.length!==jt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,le=jt.length;ge<le;ge++)Tt[ge]=o.COLOR_ATTACHMENT0+ge;Tt.length=jt.length,Zt=!0}}else Tt[0]!==o.COLOR_ATTACHMENT0&&(Tt[0]=o.COLOR_ATTACHMENT0,Zt=!0);else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Zt=!0);Zt&&(i.isWebGL2?o.drawBuffers(Tt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function Ne(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const ne={[mr]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};if(r)ne[hg]=o.MIN,ne[pg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ne[hg]=U.MIN_EXT,ne[pg]=U.MAX_EXT)}const oe={[Wy]:o.ZERO,[Xy]:o.ONE,[qy]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[Jy]:o.SRC_ALPHA_SATURATE,[Ky]:o.DST_COLOR,[jy]:o.DST_ALPHA,[Yy]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[Qy]:o.ONE_MINUS_DST_COLOR,[Zy]:o.ONE_MINUS_DST_ALPHA,[$y]:o.CONSTANT_COLOR,[tS]:o.ONE_MINUS_CONSTANT_COLOR,[eS]:o.CONSTANT_ALPHA,[nS]:o.ONE_MINUS_CONSTANT_ALPHA};function Kt(U,Et,Tt,Zt,jt,ge,le,Ee,Ve,me){if(U===Ia){_===!0&&(Qt(o.BLEND),_=!1);return}if(_===!1&&(Gt(o.BLEND),_=!0),U!==Gy){if(U!==P||me!==O){if((D!==mr||W!==mr)&&(o.blendEquation(o.FUNC_ADD),D=mr,W=mr),me)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}B=null,X=null,I=null,vt=null,F.set(0,0,0),E=0,P=U,O=me}return}jt=jt||Et,ge=ge||Tt,le=le||Zt,(Et!==D||jt!==W)&&(o.blendEquationSeparate(ne[Et],ne[jt]),D=Et,W=jt),(Tt!==B||Zt!==X||ge!==I||le!==vt)&&(o.blendFuncSeparate(oe[Tt],oe[Zt],oe[ge],oe[le]),B=Tt,X=Zt,I=ge,vt=le),(Ee.equals(F)===!1||Ve!==E)&&(o.blendColor(Ee.r,Ee.g,Ee.b,Ve),F.copy(Ee),E=Ve),P=U,O=!1}function Ae(U,Et){U.side===Ni?Qt(o.CULL_FACE):Gt(o.CULL_FACE);let Tt=U.side===kn;Et&&(Tt=!Tt),ce(Tt),U.blending===Es&&U.transparent===!1?Kt(Ia):Kt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const Zt=U.stencilWrite;m.setTest(Zt),Zt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Gt(o.SAMPLE_ALPHA_TO_COVERAGE):Qt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(U){gt!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),gt=U)}function L(U){U!==Iy?(Gt(o.CULL_FACE),U!==wt&&(U===ug?o.cullFace(o.BACK):U===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Qt(o.CULL_FACE),wt=U}function b(U){U!==J&&(nt&&o.lineWidth(U),J=U)}function ot(U,Et,Tt){U?(Gt(o.POLYGON_OFFSET_FILL),(lt!==Et||V!==Tt)&&(o.polygonOffset(Et,Tt),lt=Et,V=Tt)):Qt(o.POLYGON_OFFSET_FILL)}function Nt(U){U?Gt(o.SCISSOR_TEST):Qt(o.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=o.TEXTURE0+ct-1),Q!==U&&(o.activeTexture(U),Q=U)}function Z(U,Et,Tt){Tt===void 0&&(Q===null?Tt=o.TEXTURE0+ct-1:Tt=Q);let Zt=ht[Tt];Zt===void 0&&(Zt={type:void 0,texture:void 0},ht[Tt]=Zt),(Zt.type!==U||Zt.texture!==Et)&&(Q!==Tt&&(o.activeTexture(Tt),Q=Tt),o.bindTexture(U,Et||Ht[U]),Zt.type=U,Zt.texture=Et)}function it(){const U=ht[Q];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function rt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){dt.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function N(U){bt.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),bt.copy(U))}function pt(U,Et){let Tt=y.get(Et);Tt===void 0&&(Tt=new WeakMap,y.set(Et,Tt));let Zt=Tt.get(U);Zt===void 0&&(Zt=o.getUniformBlockIndex(Et,U.name),Tt.set(U,Zt))}function Lt(U,Et){const Zt=y.get(Et).get(U);g.get(Et)!==Zt&&(o.uniformBlockBinding(Et,Zt,U.__bindingPointIndex),g.set(Et,Zt))}function Ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Q=null,ht={},M={},A=new WeakMap,R=[],v=null,_=!1,P=null,D=null,B=null,X=null,W=null,I=null,vt=null,F=new De(0,0,0),E=0,O=!1,gt=null,wt=null,J=null,lt=null,V=null,dt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Gt,disable:Qt,bindFramebuffer:ae,drawBuffers:et,useProgram:Ne,setBlending:Kt,setMaterial:Ae,setFlipSided:ce,setCullFace:L,setLineWidth:b,setPolygonOffset:ot,setScissorTest:Nt,activeTexture:Rt,bindTexture:Z,unbindTexture:it,compressedTexImage2D:rt,compressedTexImage3D:mt,texImage2D:Bt,texImage3D:kt,updateUBOMapping:pt,uniformBlockBinding:Lt,texStorage2D:qt,texStorage3D:Ot,texSubImage2D:xt,texSubImage3D:At,compressedTexSubImage2D:st,compressedTexSubImage3D:se,scissor:Pt,viewport:N,reset:Ft}}function jb(o,e,i,r,l,u,h){const d=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,b){return M?new OffscreenCanvas(L,b):xc("canvas")}function R(L,b,ot,Nt){let Rt=1;if((L.width>Nt||L.height>Nt)&&(Rt=Nt/Math.max(L.width,L.height)),Rt<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Z=b?Sc:Math.floor,it=Z(Rt*L.width),rt=Z(Rt*L.height);y===void 0&&(y=A(it,rt));const mt=ot?A(it,rt):y;return mt.width=it,mt.height=rt,mt.getContext("2d").drawImage(L,0,0,it,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+it+"x"+rt+")."),mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Ed(L.width)&&Ed(L.height)}function _(L){return d?!1:L.wrapS!==Mi||L.wrapT!==Mi||L.minFilter!==Fn&&L.minFilter!==Vn}function P(L,b){return L.generateMipmaps&&b&&L.minFilter!==Fn&&L.minFilter!==Vn}function D(L){o.generateMipmap(L)}function B(L,b,ot,Nt,Rt=!1){if(d===!1)return b;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=b;if(b===o.RED&&(ot===o.FLOAT&&(Z=o.R32F),ot===o.HALF_FLOAT&&(Z=o.R16F),ot===o.UNSIGNED_BYTE&&(Z=o.R8)),b===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Z=o.R8UI),ot===o.UNSIGNED_SHORT&&(Z=o.R16UI),ot===o.UNSIGNED_INT&&(Z=o.R32UI),ot===o.BYTE&&(Z=o.R8I),ot===o.SHORT&&(Z=o.R16I),ot===o.INT&&(Z=o.R32I)),b===o.RG&&(ot===o.FLOAT&&(Z=o.RG32F),ot===o.HALF_FLOAT&&(Z=o.RG16F),ot===o.UNSIGNED_BYTE&&(Z=o.RG8)),b===o.RGBA){const it=Rt?gc:Ie.getTransfer(Nt);ot===o.FLOAT&&(Z=o.RGBA32F),ot===o.HALF_FLOAT&&(Z=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(Z=it===Xe?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(Z=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(Z=o.RGB5_A1)}return(Z===o.R16F||Z===o.R32F||Z===o.RG16F||Z===o.RG32F||Z===o.RGBA16F||Z===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function X(L,b,ot){return P(L,ot)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function W(L){return L===Fn||L===mg||L===Co?o.NEAREST:o.LINEAR}function I(L){const b=L.target;b.removeEventListener("dispose",I),F(b),b.isVideoTexture&&g.delete(b)}function vt(L){const b=L.target;b.removeEventListener("dispose",vt),O(b)}function F(L){const b=r.get(L);if(b.__webglInit===void 0)return;const ot=L.source,Nt=x.get(ot);if(Nt){const Rt=Nt[b.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&E(L),Object.keys(Nt).length===0&&x.delete(ot)}r.remove(L)}function E(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const ot=L.source,Nt=x.get(ot);delete Nt[b.__cacheKey],h.memory.textures--}function O(L){const b=L.texture,ot=r.get(L),Nt=r.get(b);if(Nt.__webglTexture!==void 0&&(o.deleteTexture(Nt.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(ot.__webglFramebuffer[Rt]))for(let Z=0;Z<ot.__webglFramebuffer[Rt].length;Z++)o.deleteFramebuffer(ot.__webglFramebuffer[Rt][Z]);else o.deleteFramebuffer(ot.__webglFramebuffer[Rt]);ot.__webglDepthbuffer&&o.deleteRenderbuffer(ot.__webglDepthbuffer[Rt])}else{if(Array.isArray(ot.__webglFramebuffer))for(let Rt=0;Rt<ot.__webglFramebuffer.length;Rt++)o.deleteFramebuffer(ot.__webglFramebuffer[Rt]);else o.deleteFramebuffer(ot.__webglFramebuffer);if(ot.__webglDepthbuffer&&o.deleteRenderbuffer(ot.__webglDepthbuffer),ot.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ot.__webglMultisampledFramebuffer),ot.__webglColorRenderbuffer)for(let Rt=0;Rt<ot.__webglColorRenderbuffer.length;Rt++)ot.__webglColorRenderbuffer[Rt]&&o.deleteRenderbuffer(ot.__webglColorRenderbuffer[Rt]);ot.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ot.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Rt=0,Z=b.length;Rt<Z;Rt++){const it=r.get(b[Rt]);it.__webglTexture&&(o.deleteTexture(it.__webglTexture),h.memory.textures--),r.remove(b[Rt])}r.remove(b),r.remove(L)}let gt=0;function wt(){gt=0}function J(){const L=gt;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),gt+=1,L}function lt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function V(L,b){const ot=r.get(L);if(L.isVideoTexture&&Ae(L),L.isRenderTargetTexture===!1&&L.version>0&&ot.__version!==L.version){const Nt=L.image;if(Nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(ot,L,b);return}}i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+b)}function ct(L,b){const ot=r.get(L);if(L.version>0&&ot.__version!==L.version){dt(ot,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+b)}function nt(L,b){const ot=r.get(L);if(L.version>0&&ot.__version!==L.version){dt(ot,L,b);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+b)}function ft(L,b){const ot=r.get(L);if(L.version>0&&ot.__version!==L.version){bt(ot,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+b)}const C={[Sd]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[xd]:o.MIRRORED_REPEAT},Q={[Fn]:o.NEAREST,[mg]:o.NEAREST_MIPMAP_NEAREST,[Co]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},ht={[CS]:o.NEVER,[PS]:o.ALWAYS,[DS]:o.LESS,[n0]:o.LEQUAL,[LS]:o.EQUAL,[OS]:o.GEQUAL,[US]:o.GREATER,[NS]:o.NOTEQUAL};function Dt(L,b,ot){if(b.type===aa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===Bf||b.magFilter===Co||b.magFilter===_r||b.minFilter===Vn||b.minFilter===Bf||b.minFilter===Co||b.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ot?(o.texParameteri(L,o.TEXTURE_WRAP_S,C[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,C[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,C[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Q[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Q[b.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(b.wrapS!==Mi||b.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,W(b.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,W(b.minFilter)),b.minFilter!==Fn&&b.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Nt=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Fn||b.minFilter!==Co&&b.minFilter!==_r||b.type===aa&&e.has("OES_texture_float_linear")===!1||d===!1&&b.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||r.get(b).__currentAnisotropy)&&(o.texParameterf(L,Nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy)}}function Y(L,b){let ot=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const Nt=b.source;let Rt=x.get(Nt);Rt===void 0&&(Rt={},x.set(Nt,Rt));const Z=lt(b);if(Z!==L.__cacheKey){Rt[Z]===void 0&&(Rt[Z]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ot=!0),Rt[Z].usedTimes++;const it=Rt[L.__cacheKey];it!==void 0&&(Rt[L.__cacheKey].usedTimes--,it.usedTimes===0&&E(b)),L.__cacheKey=Z,L.__webglTexture=Rt[Z].texture}return ot}function dt(L,b,ot){let Nt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Nt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Nt=o.TEXTURE_3D);const Rt=Y(L,b),Z=b.source;i.bindTexture(Nt,L.__webglTexture,o.TEXTURE0+ot);const it=r.get(Z);if(Z.version!==it.__version||Rt===!0){i.activeTexture(o.TEXTURE0+ot);const rt=Ie.getPrimaries(Ie.workingColorSpace),mt=b.colorSpace===di?null:Ie.getPrimaries(b.colorSpace),xt=b.colorSpace===di||rt===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=_(b)&&v(b.image)===!1;let st=R(b.image,At,!1,l.maxTextureSize);st=ce(b,st);const se=v(st)||d,qt=u.convert(b.format,b.colorSpace);let Ot=u.convert(b.type),Bt=B(b.internalFormat,qt,Ot,b.colorSpace,b.isVideoTexture);Dt(Nt,b,se);let kt;const Pt=b.mipmaps,N=d&&b.isVideoTexture!==!0&&Bt!==$_,pt=it.__version===void 0||Rt===!0,Lt=Z.dataReady,Ft=X(b,st,se);if(b.isDepthTexture)Bt=o.DEPTH_COMPONENT,d?b.type===aa?Bt=o.DEPTH_COMPONENT32F:b.type===Fa?Bt=o.DEPTH_COMPONENT24:b.type===vr?Bt=o.DEPTH24_STENCIL8:Bt=o.DEPTH_COMPONENT16:b.type===aa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===yr&&Bt===o.DEPTH_COMPONENT&&b.type!==Rd&&b.type!==Fa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Fa,Ot=u.convert(b.type)),b.format===Rs&&Bt===o.DEPTH_COMPONENT&&(Bt=o.DEPTH_STENCIL,b.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=vr,Ot=u.convert(b.type))),pt&&(N?i.texStorage2D(o.TEXTURE_2D,1,Bt,st.width,st.height):i.texImage2D(o.TEXTURE_2D,0,Bt,st.width,st.height,0,qt,Ot,null));else if(b.isDataTexture)if(Pt.length>0&&se){N&&pt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Pt[0].width,Pt[0].height);for(let U=0,Et=Pt.length;U<Et;U++)kt=Pt[U],N?Lt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,qt,Ot,kt.data):i.texImage2D(o.TEXTURE_2D,U,Bt,kt.width,kt.height,0,qt,Ot,kt.data);b.generateMipmaps=!1}else N?(pt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,st.width,st.height),Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,st.width,st.height,qt,Ot,st.data)):i.texImage2D(o.TEXTURE_2D,0,Bt,st.width,st.height,0,qt,Ot,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Bt,Pt[0].width,Pt[0].height,st.depth);for(let U=0,Et=Pt.length;U<Et;U++)kt=Pt[U],b.format!==Ei?qt!==null?N?Lt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,kt.width,kt.height,st.depth,qt,kt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,Bt,kt.width,kt.height,st.depth,0,kt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,kt.width,kt.height,st.depth,qt,Ot,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,Bt,kt.width,kt.height,st.depth,0,qt,Ot,kt.data)}else{N&&pt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Pt[0].width,Pt[0].height);for(let U=0,Et=Pt.length;U<Et;U++)kt=Pt[U],b.format!==Ei?qt!==null?N?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,qt,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,Bt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Lt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,qt,Ot,kt.data):i.texImage2D(o.TEXTURE_2D,U,Bt,kt.width,kt.height,0,qt,Ot,kt.data)}else if(b.isDataArrayTexture)N?(pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Bt,st.width,st.height,st.depth),Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,qt,Ot,st.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,st.width,st.height,st.depth,0,qt,Ot,st.data);else if(b.isData3DTexture)N?(pt&&i.texStorage3D(o.TEXTURE_3D,Ft,Bt,st.width,st.height,st.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,qt,Ot,st.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,st.width,st.height,st.depth,0,qt,Ot,st.data);else if(b.isFramebufferTexture){if(pt)if(N)i.texStorage2D(o.TEXTURE_2D,Ft,Bt,st.width,st.height);else{let U=st.width,Et=st.height;for(let Tt=0;Tt<Ft;Tt++)i.texImage2D(o.TEXTURE_2D,Tt,Bt,U,Et,0,qt,Ot,null),U>>=1,Et>>=1}}else if(Pt.length>0&&se){N&&pt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Pt[0].width,Pt[0].height);for(let U=0,Et=Pt.length;U<Et;U++)kt=Pt[U],N?Lt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,qt,Ot,kt):i.texImage2D(o.TEXTURE_2D,U,Bt,qt,Ot,kt);b.generateMipmaps=!1}else N?(pt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,st.width,st.height),Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,qt,Ot,st)):i.texImage2D(o.TEXTURE_2D,0,Bt,qt,Ot,st);P(b,se)&&D(Nt),it.__version=Z.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function bt(L,b,ot){if(b.image.length!==6)return;const Nt=Y(L,b),Rt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ot);const Z=r.get(Rt);if(Rt.version!==Z.__version||Nt===!0){i.activeTexture(o.TEXTURE0+ot);const it=Ie.getPrimaries(Ie.workingColorSpace),rt=b.colorSpace===di?null:Ie.getPrimaries(b.colorSpace),mt=b.colorSpace===di||it===rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const xt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,st=[];for(let U=0;U<6;U++)!xt&&!At?st[U]=R(b.image[U],!1,!0,l.maxCubemapSize):st[U]=At?b.image[U].image:b.image[U],st[U]=ce(b,st[U]);const se=st[0],qt=v(se)||d,Ot=u.convert(b.format,b.colorSpace),Bt=u.convert(b.type),kt=B(b.internalFormat,Ot,Bt,b.colorSpace),Pt=d&&b.isVideoTexture!==!0,N=Z.__version===void 0||Nt===!0,pt=Rt.dataReady;let Lt=X(b,se,qt);Dt(o.TEXTURE_CUBE_MAP,b,qt);let Ft;if(xt){Pt&&N&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,kt,se.width,se.height);for(let U=0;U<6;U++){Ft=st[U].mipmaps;for(let Et=0;Et<Ft.length;Et++){const Tt=Ft[Et];b.format!==Ei?Ot!==null?Pt?pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et,0,0,Tt.width,Tt.height,Ot,Tt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et,0,0,Tt.width,Tt.height,Ot,Bt,Tt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et,kt,Tt.width,Tt.height,0,Ot,Bt,Tt.data)}}}else{Ft=b.mipmaps,Pt&&N&&(Ft.length>0&&Lt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,kt,st[0].width,st[0].height));for(let U=0;U<6;U++)if(At){Pt?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,st[U].width,st[U].height,Ot,Bt,st[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,kt,st[U].width,st[U].height,0,Ot,Bt,st[U].data);for(let Et=0;Et<Ft.length;Et++){const Zt=Ft[Et].image[U].image;Pt?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et+1,0,0,Zt.width,Zt.height,Ot,Bt,Zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et+1,kt,Zt.width,Zt.height,0,Ot,Bt,Zt.data)}}else{Pt?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ot,Bt,st[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,kt,Ot,Bt,st[U]);for(let Et=0;Et<Ft.length;Et++){const Tt=Ft[Et];Pt?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et+1,0,0,Ot,Bt,Tt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et+1,kt,Ot,Bt,Tt.image[U])}}}P(b,qt)&&D(o.TEXTURE_CUBE_MAP),Z.__version=Rt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Yt(L,b,ot,Nt,Rt,Z){const it=u.convert(ot.format,ot.colorSpace),rt=u.convert(ot.type),mt=B(ot.internalFormat,it,rt,ot.colorSpace);if(!r.get(b).__hasExternalTextures){const At=Math.max(1,b.width>>Z),st=Math.max(1,b.height>>Z);Rt===o.TEXTURE_3D||Rt===o.TEXTURE_2D_ARRAY?i.texImage3D(Rt,Z,mt,At,st,b.depth,0,it,rt,null):i.texImage2D(Rt,Z,mt,At,st,0,it,rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Kt(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Nt,Rt,r.get(ot).__webglTexture,0,oe(b)):(Rt===o.TEXTURE_2D||Rt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Nt,Rt,r.get(ot).__webglTexture,Z),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(L,b,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let Nt=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(ot||Kt(b)){const Rt=b.depthTexture;Rt&&Rt.isDepthTexture&&(Rt.type===aa?Nt=o.DEPTH_COMPONENT32F:Rt.type===Fa&&(Nt=o.DEPTH_COMPONENT24));const Z=oe(b);Kt(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Z,Nt,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Z,Nt,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,Nt,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const Nt=oe(b);ot&&Kt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,o.DEPTH24_STENCIL8,b.width,b.height):Kt(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const Nt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Rt=0;Rt<Nt.length;Rt++){const Z=Nt[Rt],it=u.convert(Z.format,Z.colorSpace),rt=u.convert(Z.type),mt=B(Z.internalFormat,it,rt,Z.colorSpace),xt=oe(b);ot&&Kt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,mt,b.width,b.height):Kt(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,mt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,mt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const Nt=r.get(b.depthTexture).__webglTexture,Rt=oe(b);if(b.depthTexture.format===yr)Kt(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Nt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Nt,0);else if(b.depthTexture.format===Rs)Kt(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Nt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Nt,0);else throw new Error("Unknown depthTexture format")}function Qt(L){const b=r.get(L),ot=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");Gt(b.__webglFramebuffer,L)}else if(ot){b.__webglDepthbuffer=[];for(let Nt=0;Nt<6;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[Nt]),b.__webglDepthbuffer[Nt]=o.createRenderbuffer(),Ht(b.__webglDepthbuffer[Nt],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ht(b.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(L,b,ot){const Nt=r.get(L);b!==void 0&&Yt(Nt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&Qt(L)}function et(L){const b=L.texture,ot=r.get(L),Nt=r.get(b);L.addEventListener("dispose",vt),L.isWebGLMultipleRenderTargets!==!0&&(Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture()),Nt.__version=b.version,h.memory.textures++);const Rt=L.isWebGLCubeRenderTarget===!0,Z=L.isWebGLMultipleRenderTargets===!0,it=v(L)||d;if(Rt){ot.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(d&&b.mipmaps&&b.mipmaps.length>0){ot.__webglFramebuffer[rt]=[];for(let mt=0;mt<b.mipmaps.length;mt++)ot.__webglFramebuffer[rt][mt]=o.createFramebuffer()}else ot.__webglFramebuffer[rt]=o.createFramebuffer()}else{if(d&&b.mipmaps&&b.mipmaps.length>0){ot.__webglFramebuffer=[];for(let rt=0;rt<b.mipmaps.length;rt++)ot.__webglFramebuffer[rt]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(Z)if(l.drawBuffers){const rt=L.texture;for(let mt=0,xt=rt.length;mt<xt;mt++){const At=r.get(rt[mt]);At.__webglTexture===void 0&&(At.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&L.samples>0&&Kt(L)===!1){const rt=Z?b:[b];ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){const xt=rt[mt];ot.__webglColorRenderbuffer[mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[mt]);const At=u.convert(xt.format,xt.colorSpace),st=u.convert(xt.type),se=B(xt.internalFormat,At,st,xt.colorSpace,L.isXRRenderTarget===!0),qt=oe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,se,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+mt,o.RENDERBUFFER,ot.__webglColorRenderbuffer[mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(ot.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,Nt.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,b,it);for(let rt=0;rt<6;rt++)if(d&&b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)Yt(ot.__webglFramebuffer[rt][mt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else Yt(ot.__webglFramebuffer[rt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);P(b,it)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Z){const rt=L.texture;for(let mt=0,xt=rt.length;mt<xt;mt++){const At=rt[mt],st=r.get(At);i.bindTexture(o.TEXTURE_2D,st.__webglTexture),Dt(o.TEXTURE_2D,At,it),Yt(ot.__webglFramebuffer,L,At,o.COLOR_ATTACHMENT0+mt,o.TEXTURE_2D,0),P(At,it)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(d?rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(rt,Nt.__webglTexture),Dt(rt,b,it),d&&b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)Yt(ot.__webglFramebuffer[mt],L,b,o.COLOR_ATTACHMENT0,rt,mt);else Yt(ot.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,rt,0);P(b,it)&&D(rt),i.unbindTexture()}L.depthBuffer&&Qt(L)}function Ne(L){const b=v(L)||d,ot=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Nt=0,Rt=ot.length;Nt<Rt;Nt++){const Z=ot[Nt];if(P(Z,b)){const it=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,rt=r.get(Z).__webglTexture;i.bindTexture(it,rt),D(it),i.unbindTexture()}}}function ne(L){if(d&&L.samples>0&&Kt(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ot=L.width,Nt=L.height;let Rt=o.COLOR_BUFFER_BIT;const Z=[],it=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=r.get(L),mt=L.isWebGLMultipleRenderTargets===!0;if(mt)for(let xt=0;xt<b.length;xt++)i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){Z.push(o.COLOR_ATTACHMENT0+xt),L.depthBuffer&&Z.push(it);const At=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(At===!1&&(L.depthBuffer&&(Rt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Rt|=o.STENCIL_BUFFER_BIT)),mt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]),At===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[it]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[it])),mt){const st=r.get(b[xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,st,0)}o.blitFramebuffer(0,0,ot,Nt,0,0,ot,Nt,Rt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Z)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),mt)for(let xt=0;xt<b.length;xt++){i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);const At=r.get(b[xt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function oe(L){return Math.min(l.maxSamples,L.samples)}function Kt(L){const b=r.get(L);return d&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function ce(L,b){const ot=L.colorSpace,Nt=L.format,Rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Md||ot!==sa&&ot!==di&&(Ie.getTransfer(ot)===Xe?d===!1?e.has("EXT_sRGB")===!0&&Nt===Ei?(L.format=Md,L.minFilter=Vn,L.generateMipmaps=!1):b=a0.sRGBToLinear(b):(Nt!==Ei||Rt!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),b}this.allocateTextureUnit=J,this.resetTextureUnits=wt,this.setTexture2D=V,this.setTexture2DArray=ct,this.setTexture3D=nt,this.setTextureCube=ft,this.rebindTextures=ae,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Kt}function Zb(o,e,i){const r=i.isWebGL2;function l(u,h=di){let d;const p=Ie.getTransfer(h);if(u===Ga)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vS)return o.BYTE;if(u===yS)return o.SHORT;if(u===Rd)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Fa)return o.UNSIGNED_INT;if(u===aa)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===SS)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===xS)return o.LUMINANCE;if(u===MS)return o.LUMINANCE_ALPHA;if(u===yr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Md)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===ES)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===TS)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Xe)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Ff)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Ff)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===gg||u===_g||u===vg||u===yg)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===gg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===_g)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===vg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Sg||u===xg)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Sg)return p===Xe?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===xg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Mg||u===Eg||u===Tg||u===bg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Mg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Eg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Tg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===bg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Ag)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===wg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Rg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Cg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Dg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Lg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ug)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Ng)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Og)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Pg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===zg||u===Bg)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(u===Vf)return p===Xe?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===zg)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Bg)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===bS||u===Fg||u===Ig||u===Hg)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(u===Vf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Fg)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Ig)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Hg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Kb extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),M=.02,A=.005;m.inputState.pinching&&x>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Jb=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Wn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new oa({extensions:{fragDepth:!0},vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new $n(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,y=null,x=null,M=null,A=null;const R=new tA,v=i.getContextAttributes();let _=null,P=null;const D=[],B=[],X=new he;let W=null;const I=new Jn;I.layers.enable(1),I.viewport=new Ye;const vt=new Jn;vt.layers.enable(2),vt.viewport=new Ye;const F=[I,vt],E=new Kb;E.layers.enable(1),E.layers.enable(2);let O=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let dt=D[Y];return dt===void 0&&(dt=new fd,D[Y]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Y){let dt=D[Y];return dt===void 0&&(dt=new fd,D[Y]=dt),dt.getGripSpace()},this.getHand=function(Y){let dt=D[Y];return dt===void 0&&(dt=new fd,D[Y]=dt),dt.getHandSpace()};function wt(Y){const dt=B.indexOf(Y.inputSource);if(dt===-1)return;const bt=D[dt];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,m||h),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){l.removeEventListener("select",wt),l.removeEventListener("selectstart",wt),l.removeEventListener("selectend",wt),l.removeEventListener("squeeze",wt),l.removeEventListener("squeezestart",wt),l.removeEventListener("squeezeend",wt),l.removeEventListener("end",J),l.removeEventListener("inputsourceschange",lt);for(let Y=0;Y<D.length;Y++){const dt=B[Y];dt!==null&&(B[Y]=null,D[Y].disconnect(dt))}O=null,gt=null,R.reset(),e.setRenderTarget(_),M=null,x=null,y=null,l=null,P=null,Dt.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",wt),l.addEventListener("selectstart",wt),l.addEventListener("selectend",wt),l.addEventListener("squeeze",wt),l.addEventListener("squeezestart",wt),l.addEventListener("squeezeend",wt),l.addEventListener("end",J),l.addEventListener("inputsourceschange",lt),v.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(X),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const dt={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new xr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Ga,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let dt=null,bt=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=v.stencil?Rs:yr,bt=v.stencil?vr:Fa);const Ht={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(Ht),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new xr(x.textureWidth,x.textureHeight,{format:Ei,type:Ga,depthTexture:new _0(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Gt=e.properties.get(P);Gt.__ignoreDepthValues=x.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function lt(Y){for(let dt=0;dt<Y.removed.length;dt++){const bt=Y.removed[dt],Yt=B.indexOf(bt);Yt>=0&&(B[Yt]=null,D[Yt].disconnect(bt))}for(let dt=0;dt<Y.added.length;dt++){const bt=Y.added[dt];let Yt=B.indexOf(bt);if(Yt===-1){for(let Gt=0;Gt<D.length;Gt++)if(Gt>=B.length){B.push(bt),Yt=Gt;break}else if(B[Gt]===null){B[Gt]=bt,Yt=Gt;break}if(Yt===-1)break}const Ht=D[Yt];Ht&&Ht.connect(bt)}}const V=new j,ct=new j;function nt(Y,dt,bt){V.setFromMatrixPosition(dt.matrixWorld),ct.setFromMatrixPosition(bt.matrixWorld);const Yt=V.distanceTo(ct),Ht=dt.projectionMatrix.elements,Gt=bt.projectionMatrix.elements,Qt=Ht[14]/(Ht[10]-1),ae=Ht[14]/(Ht[10]+1),et=(Ht[9]+1)/Ht[5],Ne=(Ht[9]-1)/Ht[5],ne=(Ht[8]-1)/Ht[0],oe=(Gt[8]+1)/Gt[0],Kt=Qt*ne,Ae=Qt*oe,ce=Yt/(-ne+oe),L=ce*-ne;dt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(L),Y.translateZ(ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Qt+ce,ot=ae+ce,Nt=Kt-L,Rt=Ae+(Yt-L),Z=et*ae/ot*b,it=Ne*ae/ot*b;Y.projectionMatrix.makePerspective(Nt,Rt,Z,it,b,ot),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ft(Y,dt){dt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(dt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;R.texture!==null&&(Y.near=R.depthNear,Y.far=R.depthFar),E.near=vt.near=I.near=Y.near,E.far=vt.far=I.far=Y.far,(O!==E.near||gt!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,gt=E.far,I.near=O,I.far=gt,vt.near=O,vt.far=gt,I.updateProjectionMatrix(),vt.updateProjectionMatrix(),Y.updateProjectionMatrix());const dt=Y.parent,bt=E.cameras;ft(E,dt);for(let Yt=0;Yt<bt.length;Yt++)ft(bt[Yt],dt);bt.length===2?nt(E,I,vt):E.projectionMatrix.copy(I.projectionMatrix),C(Y,E,dt)};function C(Y,dt,bt){bt===null?Y.matrix.copy(dt.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(dt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null};let Q=null;function ht(Y,dt){if(g=dt.getViewerPose(m||h),A=dt,g!==null){const bt=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Yt=!1;bt.length!==E.cameras.length&&(E.cameras.length=0,Yt=!0);for(let Gt=0;Gt<bt.length;Gt++){const Qt=bt[Gt];let ae=null;if(M!==null)ae=M.getViewport(Qt);else{const Ne=y.getViewSubImage(x,Qt);ae=Ne.viewport,Gt===0&&(e.setRenderTargetTextures(P,Ne.colorTexture,x.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(P))}let et=F[Gt];et===void 0&&(et=new Jn,et.layers.enable(Gt),et.viewport=new Ye,F[Gt]=et),et.matrix.fromArray(Qt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Qt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ae.x,ae.y,ae.width,ae.height),Gt===0&&(E.matrix.copy(et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Yt===!0&&E.cameras.push(et)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Gt=y.getDepthInformation(bt[0]);Gt&&Gt.isValid&&Gt.texture&&R.init(e,Gt,l.renderState)}}for(let bt=0;bt<D.length;bt++){const Yt=B[bt],Ht=D[bt];Yt!==null&&Ht!==void 0&&Ht.update(Yt,dt,m||h)}R.render(e,E),Q&&Q(Y,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),A=null}const Dt=new m0;Dt.setAnimationLoop(ht),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,d0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,P,D,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),x(v,_),_.isMeshPhysicalMaterial&&M(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),A(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,P,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===kn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===kn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(v.envMap.value=P,v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,P,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,P){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const P=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(P,D){const B=D.program;r.uniformBlockBinding(P,B)}function m(P,D){let B=l[P.id];B===void 0&&(A(P),B=g(P),l[P.id]=B,P.addEventListener("dispose",v));const X=D.program;r.updateUBOMapping(P,X);const W=e.render.frame;u[P.id]!==W&&(x(P),u[P.id]=W)}function g(P){const D=y();P.__bindingPointIndex=D;const B=o.createBuffer(),X=P.__size,W=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,X,W),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,B),B}function y(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const D=l[P.id],B=P.uniforms,X=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let W=0,I=B.length;W<I;W++){const vt=Array.isArray(B[W])?B[W]:[B[W]];for(let F=0,E=vt.length;F<E;F++){const O=vt[F];if(M(O,W,F,X)===!0){const gt=O.__offset,wt=Array.isArray(O.value)?O.value:[O.value];let J=0;for(let lt=0;lt<wt.length;lt++){const V=wt[lt],ct=R(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,gt+J,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,J),J+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,gt,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,D,B,X){const W=P.value,I=D+"_"+B;if(X[I]===void 0)return typeof W=="number"||typeof W=="boolean"?X[I]=W:X[I]=W.clone(),!0;{const vt=X[I];if(typeof W=="number"||typeof W=="boolean"){if(vt!==W)return X[I]=W,!0}else if(vt.equals(W)===!1)return vt.copy(W),!0}return!1}function A(P){const D=P.uniforms;let B=0;const X=16;for(let I=0,vt=D.length;I<vt;I++){const F=Array.isArray(D[I])?D[I]:[D[I]];for(let E=0,O=F.length;E<O;E++){const gt=F[E],wt=Array.isArray(gt.value)?gt.value:[gt.value];for(let J=0,lt=wt.length;J<lt;J++){const V=wt[J],ct=R(V),nt=B%X;nt!==0&&X-nt<ct.boundary&&(B+=X-nt),gt.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),gt.__offset=B,B+=ct.storage}}}const W=B%X;return W>0&&(B+=X-W),P.__size=B,P.__cache={},this}function R(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function v(P){const D=P.target;D.removeEventListener("dispose",v);const B=h.indexOf(D.__bindingPointIndex);h.splice(B,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=h;const M=new Uint32Array(4),A=new Int32Array(4);let R=null,v=null;const _=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let B=!1,X=0,W=0,I=null,vt=-1,F=null;const E=new Ye,O=new Ye;let gt=null;const wt=new De(0);let J=0,lt=i.width,V=i.height,ct=1,nt=null,ft=null;const C=new Ye(0,0,lt,V),Q=new Ye(0,0,lt,V);let ht=!1;const Dt=new Ud;let Y=!1,dt=!1,bt=null;const Yt=new sn,Ht=new he,Gt=new j,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return I===null?ct:1}let et=r;function Ne(T,H){for(let G=0;G<T.length;G++){const k=T[G],q=i.getContext(k,H);if(q!==null)return q}return null}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",Et,!1),et===null){const H=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&H.shift(),et=Ne(H,T),et===null)throw Ne(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&et instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),et.getShaderPrecisionFormat===void 0&&(et.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,oe,Kt,Ae,ce,L,b,ot,Nt,Rt,Z,it,rt,mt,xt,At,st,se,qt,Ot,Bt,kt,Pt,N;function pt(){ne=new uT(et),oe=new aT(et,ne,e),ne.init(oe),kt=new Zb(et,ne,oe),Kt=new Yb(et,ne,oe),Ae=new hT(et),ce=new Nb,L=new jb(et,ne,Kt,ce,oe,kt,Ae),b=new sT(D),ot=new cT(D),Nt=new xx(et,oe),Pt=new nT(et,ne,Nt,oe),Rt=new fT(et,Nt,Ae,Pt),Z=new _T(et,Rt,Nt,Ae),qt=new gT(et,oe,L),At=new rT(ce),it=new Ub(D,b,ot,ne,oe,Pt,At),rt=new nA(D,ce),mt=new Pb,xt=new Gb(ne,oe),se=new eT(D,b,ot,Kt,Z,x,p),st=new qb(D,Z,oe),N=new iA(et,Ae,oe,Kt),Ot=new iT(et,ne,Ae,oe),Bt=new dT(et,ne,Ae,oe),Ae.programs=it.programs,D.capabilities=oe,D.extensions=ne,D.properties=ce,D.renderLists=mt,D.shadowMap=st,D.state=Kt,D.info=Ae}pt();const Lt=new eA(D,et);this.xr=Lt,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(T){T!==void 0&&(ct=T,this.setSize(lt,V,!1))},this.getSize=function(T){return T.set(lt,V)},this.setSize=function(T,H,G=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=T,V=H,i.width=Math.floor(T*ct),i.height=Math.floor(H*ct),G===!0&&(i.style.width=T+"px",i.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(lt*ct,V*ct).floor()},this.setDrawingBufferSize=function(T,H,G){lt=T,V=H,ct=G,i.width=Math.floor(T*G),i.height=Math.floor(H*G),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,H,G,k){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,H,G,k),Kt.viewport(E.copy(C).multiplyScalar(ct).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,H,G,k){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,H,G,k),Kt.scissor(O.copy(Q).multiplyScalar(ct).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){Kt.setScissorTest(ht=T)},this.setOpaqueSort=function(T){nt=T},this.setTransparentSort=function(T){ft=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(T=!0,H=!0,G=!0){let k=0;if(T){let q=!1;if(I!==null){const St=I.texture.format;q=St===J_||St===Q_||St===K_}if(q){const St=I.texture.type,Ut=St===Ga||St===Fa||St===Rd||St===vr||St===j_||St===Z_,zt=se.getClearColor(),Vt=se.getClearAlpha(),ee=zt.r,te=zt.g,$t=zt.b;Ut?(M[0]=ee,M[1]=te,M[2]=$t,M[3]=Vt,et.clearBufferuiv(et.COLOR,0,M)):(A[0]=ee,A[1]=te,A[2]=$t,A[3]=Vt,et.clearBufferiv(et.COLOR,0,A))}else k|=et.COLOR_BUFFER_BIT}H&&(k|=et.DEPTH_BUFFER_BIT),G&&(k|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),mt.dispose(),xt.dispose(),ce.dispose(),b.dispose(),ot.dispose(),Z.dispose(),Pt.dispose(),N.dispose(),it.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Ve),Lt.removeEventListener("sessionend",me),bt&&(bt.dispose(),bt=null),_e.stop()};function Ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const T=Ae.autoReset,H=st.enabled,G=st.autoUpdate,k=st.needsUpdate,q=st.type;pt(),Ae.autoReset=T,st.enabled=H,st.autoUpdate=G,st.needsUpdate=k,st.type=q}function Et(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const H=T.target;H.removeEventListener("dispose",Tt),Zt(H)}function Zt(T){jt(T),ce.remove(T)}function jt(T){const H=ce.get(T).programs;H!==void 0&&(H.forEach(function(G){it.releaseProgram(G)}),T.isShaderMaterial&&it.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,G,k,q,St){H===null&&(H=Qt);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,zt=ti(T,H,G,k,q);Kt.setMaterial(k,Ut);let Vt=G.index,ee=1;if(k.wireframe===!0){if(Vt=Rt.getWireframeAttribute(G),Vt===void 0)return;ee=2}const te=G.drawRange,$t=G.attributes.position;let we=te.start*ee,Pe=(te.start+te.count)*ee;St!==null&&(we=Math.max(we,St.start*ee),Pe=Math.min(Pe,(St.start+St.count)*ee)),Vt!==null?(we=Math.max(we,0),Pe=Math.min(Pe,Vt.count)):$t!=null&&(we=Math.max(we,0),Pe=Math.min(Pe,$t.count));const He=Pe-we;if(He<0||He===1/0)return;Pt.setup(q,k,zt,G,Vt);let wn,ze=Ot;if(Vt!==null&&(wn=Nt.get(Vt),ze=Bt,ze.setIndex(wn)),q.isMesh)k.wireframe===!0?(Kt.setLineWidth(k.wireframeLinewidth*ae()),ze.setMode(et.LINES)):ze.setMode(et.TRIANGLES);else if(q.isLine){let de=k.linewidth;de===void 0&&(de=1),Kt.setLineWidth(de*ae()),q.isLineSegments?ze.setMode(et.LINES):q.isLineLoop?ze.setMode(et.LINE_LOOP):ze.setMode(et.LINE_STRIP)}else q.isPoints?ze.setMode(et.POINTS):q.isSprite&&ze.setMode(et.TRIANGLES);if(q.isBatchedMesh)ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ze.renderInstances(we,He,q.count);else if(G.isInstancedBufferGeometry){const de=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bi=Math.min(G.instanceCount,de);ze.renderInstances(we,He,bi)}else ze.render(we,He)};function ge(T,H,G){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,mn(T,H,G),T.side=ka,T.needsUpdate=!0,mn(T,H,G),T.side=Ni):mn(T,H,G)}this.compile=function(T,H,G=null){G===null&&(G=T),v=xt.get(G),v.init(),P.push(v),G.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),T!==G&&T.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(D._useLegacyLights);const k=new Set;return T.traverse(function(q){const St=q.material;if(St)if(Array.isArray(St))for(let Ut=0;Ut<St.length;Ut++){const zt=St[Ut];ge(zt,G,q),k.add(zt)}else ge(St,G,q),k.add(St)}),P.pop(),v=null,k},this.compileAsync=function(T,H,G=null){const k=this.compile(T,H,G);return new Promise(q=>{function St(){if(k.forEach(function(Ut){ce.get(Ut).currentProgram.isReady()&&k.delete(Ut)}),k.size===0){q(T);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let le=null;function Ee(T){le&&le(T)}function Ve(){_e.stop()}function me(){_e.start()}const _e=new m0;_e.setAnimationLoop(Ee),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(T){le=T,Lt.setAnimationLoop(T),T===null?_e.stop():_e.start()},Lt.addEventListener("sessionstart",Ve),Lt.addEventListener("sessionend",me),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,H,I),v=xt.get(T,P.length),v.init(),P.push(v),Yt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Dt.setFromProjectionMatrix(Yt),dt=this.localClippingEnabled,Y=At.init(this.clippingPlanes,dt),R=mt.get(T,_.length),R.init(),_.push(R),qe(T,H,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(nt,ft),this.info.render.frame++,Y===!0&&At.beginShadows();const G=v.state.shadowsArray;if(st.render(G,T,H),Y===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1)&&se.render(R,T),v.setupLights(D._useLegacyLights),H.isArrayCamera){const k=H.cameras;for(let q=0,St=k.length;q<St;q++){const Ut=k[q];Wa(R,T,Ut,Ut.viewport)}}else Wa(R,T,H);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(D,T,H),Pt.resetDefaultState(),vt=-1,F=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function qe(T,H,G,k){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Dt.intersectsSprite(T)){k&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Yt);const Ut=Z.update(T),zt=T.material;zt.visible&&R.push(T,Ut,zt,G,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Dt.intersectsObject(T))){const Ut=Z.update(T),zt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Gt.copy(Ut.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(Yt)),Array.isArray(zt)){const Vt=Ut.groups;for(let ee=0,te=Vt.length;ee<te;ee++){const $t=Vt[ee],we=zt[$t.materialIndex];we&&we.visible&&R.push(T,Ut,we,G,Gt.z,$t)}}else zt.visible&&R.push(T,Ut,zt,G,Gt.z,null)}}const St=T.children;for(let Ut=0,zt=St.length;Ut<zt;Ut++)qe(St[Ut],H,G,k)}function Wa(T,H,G,k){const q=T.opaque,St=T.transmissive,Ut=T.transparent;v.setupLightsView(G),Y===!0&&At.setGlobalState(D.clippingPlanes,G),St.length>0&&la(q,St,H,G),k&&Kt.viewport(E.copy(k)),q.length>0&&Ti(q,H,G),St.length>0&&Ti(St,H,G),Ut.length>0&&Ti(Ut,H,G),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function la(T,H,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const St=oe.isWebGL2;bt===null&&(bt=new xr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Fo:Ga,minFilter:_r,samples:St?4:0})),D.getDrawingBufferSize(Ht),St?bt.setSize(Ht.x,Ht.y):bt.setSize(Sc(Ht.x),Sc(Ht.y));const Ut=D.getRenderTarget();D.setRenderTarget(bt),D.getClearColor(wt),J=D.getClearAlpha(),J<1&&D.setClearColor(16777215,.5),D.clear();const zt=D.toneMapping;D.toneMapping=Ha,Ti(T,G,k),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt);let Vt=!1;for(let ee=0,te=H.length;ee<te;ee++){const $t=H[ee],we=$t.object,Pe=$t.geometry,He=$t.material,wn=$t.group;if(He.side===Ni&&we.layers.test(k.layers)){const ze=He.side;He.side=kn,He.needsUpdate=!0,nn(we,G,k,Pe,He,wn),He.side=ze,He.needsUpdate=!0,Vt=!0}}Vt===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt)),D.setRenderTarget(Ut),D.setClearColor(wt,J),D.toneMapping=zt}function Ti(T,H,G){const k=H.isScene===!0?H.overrideMaterial:null;for(let q=0,St=T.length;q<St;q++){const Ut=T[q],zt=Ut.object,Vt=Ut.geometry,ee=k===null?Ut.material:k,te=Ut.group;zt.layers.test(G.layers)&&nn(zt,H,G,Vt,ee,te)}}function nn(T,H,G,k,q,St){T.onBeforeRender(D,H,G,k,q,St),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(D,H,G,k,T,St),q.transparent===!0&&q.side===Ni&&q.forceSinglePass===!1?(q.side=kn,q.needsUpdate=!0,D.renderBufferDirect(G,H,k,q,T,St),q.side=ka,q.needsUpdate=!0,D.renderBufferDirect(G,H,k,q,T,St),q.side=Ni):D.renderBufferDirect(G,H,k,q,T,St),T.onAfterRender(D,H,G,k,q,St)}function mn(T,H,G){H.isScene!==!0&&(H=Qt);const k=ce.get(T),q=v.state.lights,St=v.state.shadowsArray,Ut=q.state.version,zt=it.getParameters(T,q.state,St,H,G),Vt=it.getProgramCacheKey(zt);let ee=k.programs;k.environment=T.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=(T.isMeshStandardMaterial?ot:b).get(T.envMap||k.environment),ee===void 0&&(T.addEventListener("dispose",Tt),ee=new Map,k.programs=ee);let te=ee.get(Vt);if(te!==void 0){if(k.currentProgram===te&&k.lightsStateVersion===Ut)return Je(T,zt),te}else zt.uniforms=it.getUniforms(T),T.onBuild(G,zt,D),T.onBeforeCompile(zt,D),te=it.acquireProgram(zt,Vt),ee.set(Vt,te),k.uniforms=zt.uniforms;const $t=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($t.clippingPlanes=At.uniform),Je(T,zt),k.needsLights=Xt(T),k.lightsStateVersion=Ut,k.needsLights&&($t.ambientLightColor.value=q.state.ambient,$t.lightProbe.value=q.state.probe,$t.directionalLights.value=q.state.directional,$t.directionalLightShadows.value=q.state.directionalShadow,$t.spotLights.value=q.state.spot,$t.spotLightShadows.value=q.state.spotShadow,$t.rectAreaLights.value=q.state.rectArea,$t.ltc_1.value=q.state.rectAreaLTC1,$t.ltc_2.value=q.state.rectAreaLTC2,$t.pointLights.value=q.state.point,$t.pointLightShadows.value=q.state.pointShadow,$t.hemisphereLights.value=q.state.hemi,$t.directionalShadowMap.value=q.state.directionalShadowMap,$t.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$t.spotShadowMap.value=q.state.spotShadowMap,$t.spotLightMatrix.value=q.state.spotLightMatrix,$t.spotLightMap.value=q.state.spotLightMap,$t.pointShadowMap.value=q.state.pointShadowMap,$t.pointShadowMatrix.value=q.state.pointShadowMatrix),k.currentProgram=te,k.uniformsList=null,te}function je(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=pc.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Je(T,H){const G=ce.get(T);G.outputColorSpace=H.outputColorSpace,G.batching=H.batching,G.instancing=H.instancing,G.instancingColor=H.instancingColor,G.skinning=H.skinning,G.morphTargets=H.morphTargets,G.morphNormals=H.morphNormals,G.morphColors=H.morphColors,G.morphTargetsCount=H.morphTargetsCount,G.numClippingPlanes=H.numClippingPlanes,G.numIntersection=H.numClipIntersection,G.vertexAlphas=H.vertexAlphas,G.vertexTangents=H.vertexTangents,G.toneMapping=H.toneMapping}function ti(T,H,G,k,q){H.isScene!==!0&&(H=Qt),L.resetTextureUnits();const St=H.fog,Ut=k.isMeshStandardMaterial?H.environment:null,zt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sa,Vt=(k.isMeshStandardMaterial?ot:b).get(k.envMap||Ut),ee=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,te=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),$t=!!G.morphAttributes.position,we=!!G.morphAttributes.normal,Pe=!!G.morphAttributes.color;let He=Ha;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(He=D.toneMapping);const wn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ze=wn!==void 0?wn.length:0,de=ce.get(k),bi=v.state.lights;if(Y===!0&&(dt===!0||T!==F)){const In=T===F&&k.id===vt;At.setState(k,T,In)}let Oe=!1;k.version===de.__version?(de.needsLights&&de.lightsStateVersion!==bi.state.version||de.outputColorSpace!==zt||q.isBatchedMesh&&de.batching===!1||!q.isBatchedMesh&&de.batching===!0||q.isInstancedMesh&&de.instancing===!1||!q.isInstancedMesh&&de.instancing===!0||q.isSkinnedMesh&&de.skinning===!1||!q.isSkinnedMesh&&de.skinning===!0||q.isInstancedMesh&&de.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&de.instancingColor===!1&&q.instanceColor!==null||de.envMap!==Vt||k.fog===!0&&de.fog!==St||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==At.numPlanes||de.numIntersection!==At.numIntersection)||de.vertexAlphas!==ee||de.vertexTangents!==te||de.morphTargets!==$t||de.morphNormals!==we||de.morphColors!==Pe||de.toneMapping!==He||oe.isWebGL2===!0&&de.morphTargetsCount!==ze)&&(Oe=!0):(Oe=!0,de.__version=k.version);let gn=de.currentProgram;Oe===!0&&(gn=mn(k,H,q));let Ze=!1,pi=!1,_n=!1;const an=gn.getUniforms(),Ai=de.uniforms;if(Kt.useProgram(gn.program)&&(Ze=!0,pi=!0,_n=!0),k.id!==vt&&(vt=k.id,pi=!0),Ze||F!==T){an.setValue(et,"projectionMatrix",T.projectionMatrix),an.setValue(et,"viewMatrix",T.matrixWorldInverse);const In=an.map.cameraPosition;In!==void 0&&In.setValue(et,Gt.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&an.setValue(et,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&an.setValue(et,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,pi=!0,_n=!0)}if(q.isSkinnedMesh){an.setOptional(et,q,"bindMatrix"),an.setOptional(et,q,"bindMatrixInverse");const In=q.skeleton;In&&(oe.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),an.setValue(et,"boneTexture",In.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(an.setOptional(et,q,"batchingTexture"),an.setValue(et,"batchingTexture",q._matricesTexture,L));const ca=G.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&oe.isWebGL2===!0)&&qt.update(q,G,gn),(pi||de.receiveShadow!==q.receiveShadow)&&(de.receiveShadow=q.receiveShadow,an.setValue(et,"receiveShadow",q.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ai.envMap.value=Vt,Ai.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),pi&&(an.setValue(et,"toneMappingExposure",D.toneMappingExposure),de.needsLights&&It(Ai,_n),St&&k.fog===!0&&rt.refreshFogUniforms(Ai,St),rt.refreshMaterialUniforms(Ai,k,ct,V,bt),pc.upload(et,je(de),Ai,L)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pc.upload(et,je(de),Ai,L),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&an.setValue(et,"center",q.center),an.setValue(et,"modelViewMatrix",q.modelViewMatrix),an.setValue(et,"normalMatrix",q.normalMatrix),an.setValue(et,"modelMatrix",q.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const In=k.uniformsGroups;for(let Rn=0,Ns=In.length;Rn<Ns;Rn++)if(oe.isWebGL2){const Os=In[Rn];N.update(Os,gn),N.bind(Os,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function It(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Xt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,H,G){ce.get(T.texture).__webglTexture=H,ce.get(T.depthTexture).__webglTexture=G;const k=ce.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const G=ce.get(T);G.__webglFramebuffer=H,G.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,G=0){I=T,X=H,W=G;let k=!0,q=null,St=!1,Ut=!1;if(T){const Vt=ce.get(T);Vt.__useDefaultFramebuffer!==void 0?(Kt.bindFramebuffer(et.FRAMEBUFFER,null),k=!1):Vt.__webglFramebuffer===void 0?L.setupRenderTarget(T):Vt.__hasExternalTextures&&L.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);const ee=T.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const te=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[H])?q=te[H][G]:q=te[H],St=!0):oe.isWebGL2&&T.samples>0&&L.useMultisampledRTT(T)===!1?q=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[G]:q=te,E.copy(T.viewport),O.copy(T.scissor),gt=T.scissorTest}else E.copy(C).multiplyScalar(ct).floor(),O.copy(Q).multiplyScalar(ct).floor(),gt=ht;if(Kt.bindFramebuffer(et.FRAMEBUFFER,q)&&oe.drawBuffers&&k&&Kt.drawBuffers(T,q),Kt.viewport(E),Kt.scissor(O),Kt.setScissorTest(gt),St){const Vt=ce.get(T.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+H,Vt.__webglTexture,G)}else if(Ut){const Vt=ce.get(T.texture),ee=H||0;et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,Vt.__webglTexture,G||0,ee)}vt=-1},this.readRenderTargetPixels=function(T,H,G,k,q,St,Ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){Kt.bindFramebuffer(et.FRAMEBUFFER,zt);try{const Vt=T.texture,ee=Vt.format,te=Vt.type;if(ee!==Ei&&kt.convert(ee)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=te===Fo&&(ne.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ne.has("EXT_color_buffer_float"));if(te!==Ga&&kt.convert(te)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_TYPE)&&!(te===aa&&(oe.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-k&&G>=0&&G<=T.height-q&&et.readPixels(H,G,k,q,kt.convert(ee),kt.convert(te),St)}finally{const Vt=I!==null?ce.get(I).__webglFramebuffer:null;Kt.bindFramebuffer(et.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(T,H,G=0){const k=Math.pow(2,-G),q=Math.floor(H.image.width*k),St=Math.floor(H.image.height*k);L.setTexture2D(H,0),et.copyTexSubImage2D(et.TEXTURE_2D,G,0,0,T.x,T.y,q,St),Kt.unbindTexture()},this.copyTextureToTexture=function(T,H,G,k=0){const q=H.image.width,St=H.image.height,Ut=kt.convert(G.format),zt=kt.convert(G.type);L.setTexture2D(G,0),et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,G.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,G.unpackAlignment),H.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,k,T.x,T.y,q,St,Ut,zt,H.image.data):H.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,k,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ut,H.mipmaps[0].data):et.texSubImage2D(et.TEXTURE_2D,k,T.x,T.y,Ut,zt,H.image),k===0&&G.generateMipmaps&&et.generateMipmap(et.TEXTURE_2D),Kt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,G,k,q=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=T.max.x-T.min.x+1,Ut=T.max.y-T.min.y+1,zt=T.max.z-T.min.z+1,Vt=kt.convert(k.format),ee=kt.convert(k.type);let te;if(k.isData3DTexture)L.setTexture3D(k,0),te=et.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)L.setTexture2DArray(k,0),te=et.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,k.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,k.unpackAlignment);const $t=et.getParameter(et.UNPACK_ROW_LENGTH),we=et.getParameter(et.UNPACK_IMAGE_HEIGHT),Pe=et.getParameter(et.UNPACK_SKIP_PIXELS),He=et.getParameter(et.UNPACK_SKIP_ROWS),wn=et.getParameter(et.UNPACK_SKIP_IMAGES),ze=G.isCompressedTexture?G.mipmaps[q]:G.image;et.pixelStorei(et.UNPACK_ROW_LENGTH,ze.width),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,ze.height),et.pixelStorei(et.UNPACK_SKIP_PIXELS,T.min.x),et.pixelStorei(et.UNPACK_SKIP_ROWS,T.min.y),et.pixelStorei(et.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?et.texSubImage3D(te,q,H.x,H.y,H.z,St,Ut,zt,Vt,ee,ze.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),et.compressedTexSubImage3D(te,q,H.x,H.y,H.z,St,Ut,zt,Vt,ze.data)):et.texSubImage3D(te,q,H.x,H.y,H.z,St,Ut,zt,Vt,ee,ze),et.pixelStorei(et.UNPACK_ROW_LENGTH,$t),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,we),et.pixelStorei(et.UNPACK_SKIP_PIXELS,Pe),et.pixelStorei(et.UNPACK_SKIP_ROWS,He),et.pixelStorei(et.UNPACK_SKIP_IMAGES,wn),q===0&&k.generateMipmaps&&et.generateMipmap(te),Kt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),Kt.unbindTexture()},this.resetState=function(){X=0,W=0,I=null,Kt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Cd?"display-p3":"srgb",i.unpackColorSpace=Ie.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?Sr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?bn:sa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class T0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L_=new sn,bd=new Ld,fc=new bc,dc=new j;class sA extends An{constructor(e=new zi,i=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;L_.copy(l).invert(),bd.copy(e.ray).applyMatrix4(L_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let A=x,R=M;A<R;A++){const v=m.getX(A);dc.fromBufferAttribute(y,v),U_(dc,v,p,l,e,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(y.count,h.start+h.count);for(let A=x,R=M;A<R;A++)dc.fromBufferAttribute(y,A),U_(dc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function U_(o,e,i,r,l,u,h){const d=bd.distanceSqToPoint(o);if(d<i){const p=new j;bd.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class Mc extends zi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],y=new j,x=new j,M=[],A=[],R=[],v=[];for(let _=0;_<=r;_++){const P=[],D=_/r;let B=0;_===0&&h===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let X=0;X<=i;X++){const W=X/i;y.x=-e*Math.cos(l+W*u)*Math.sin(h+D*d),y.y=e*Math.cos(h+D*d),y.z=e*Math.sin(l+W*u)*Math.sin(h+D*d),A.push(y.x,y.y,y.z),x.copy(y).normalize(),R.push(x.x,x.y,x.z),v.push(W+B,1-D),P.push(m++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const D=g[_][P+1],B=g[_][P],X=g[_+1][P],W=g[_+1][P+1];(_!==0||h>0)&&M.push(D,B,W),(_!==r-1||p<Math.PI)&&M.push(B,X,W)}this.setIndex(M),this.setAttribute("position",new hi(A,3)),this.setAttribute("normal",new hi(R,3)),this.setAttribute("uv",new hi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const dd=new sn,N_=new j,O_=new j;class b0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;N_.setFromMatrixPosition(e.matrixWorld),i.position.copy(N_),O_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(O_),i.updateMatrixWorld(),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const P_=new sn,Oo=new j,hd=new j;class lA extends b0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Oo),hd.copy(r.position),hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(hd),r.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),P_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P_)}}class z_ extends Od{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends b0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B_ extends Od{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F_ extends Od{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class I_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const H_={type:"change"},pd={type:"start"},G_={type:"end"},hc=new Ld,V_=new Ba,uA=Math.cos(70*Ss.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",xt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(H_),r.update(),u=l.NONE},this.update=function(){const N=new j,pt=new Mr().setFromUnitVectors(e.up,new j(0,1,0)),Lt=pt.clone().invert(),Ft=new j,U=new Mr,Et=new j,Tt=2*Math.PI;return function(jt=null){const ge=r.object.position;N.copy(ge).sub(r.target),N.applyQuaternion(pt),d.setFromVector3(N),r.autoRotate&&u===l.NONE&&gt(E(jt)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let le=r.minAzimuthAngle,Ee=r.maxAzimuthAngle;isFinite(le)&&isFinite(Ee)&&(le<-Math.PI?le+=Tt:le>Math.PI&&(le-=Tt),Ee<-Math.PI?Ee+=Tt:Ee>Math.PI&&(Ee-=Tt),le<=Ee?d.theta=Math.max(le,Math.min(Ee,d.theta)):d.theta=d.theta>(le+Ee)/2?Math.max(le,d.theta):Math.min(Ee,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&W||r.object.isOrthographicCamera?d.radius=C(d.radius):d.radius=C(d.radius*m),N.setFromSpherical(d),N.applyQuaternion(Lt),ge.copy(r.target).add(N),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Ve=!1;if(r.zoomToCursor&&W){let me=null;if(r.object.isPerspectiveCamera){const _e=N.length();me=C(_e*m);const qe=_e-me;r.object.position.addScaledVector(B,qe),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const _e=new j(X.x,X.y,0);_e.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Ve=!0;const qe=new j(X.x,X.y,0);qe.unproject(r.object),r.object.position.sub(qe).add(_e),r.object.updateMatrixWorld(),me=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(me).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<uA?e.lookAt(r.target):(V_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(V_,r.target))))}else r.object.isOrthographicCamera&&(Ve=m!==1,Ve&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,W=!1,Ve||Ft.distanceToSquared(r.object.position)>h||8*(1-U.dot(r.object.quaternion))>h||Et.distanceToSquared(r.target)>0?(r.dispatchEvent(H_),Ft.copy(r.object.position),U.copy(r.object.quaternion),Et.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",se),r.domElement.removeEventListener("pointerdown",L),r.domElement.removeEventListener("pointercancel",ot),r.domElement.removeEventListener("wheel",Z),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",ot),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",xt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new I_,p=new I_;let m=1;const g=new j,y=new he,x=new he,M=new he,A=new he,R=new he,v=new he,_=new he,P=new he,D=new he,B=new j,X=new he;let W=!1;const I=[],vt={};let F=!1;function E(N){return N!==null?2*Math.PI/60*r.autoRotateSpeed*N:2*Math.PI/60/60*r.autoRotateSpeed}function O(N){const pt=Math.abs(N*.01);return Math.pow(.95,r.zoomSpeed*pt)}function gt(N){p.theta-=N}function wt(N){p.phi-=N}const J=function(){const N=new j;return function(Lt,Ft){N.setFromMatrixColumn(Ft,0),N.multiplyScalar(-Lt),g.add(N)}}(),lt=function(){const N=new j;return function(Lt,Ft){r.screenSpacePanning===!0?N.setFromMatrixColumn(Ft,1):(N.setFromMatrixColumn(Ft,0),N.crossVectors(r.object.up,N)),N.multiplyScalar(Lt),g.add(N)}}(),V=function(){const N=new j;return function(Lt,Ft){const U=r.domElement;if(r.object.isPerspectiveCamera){const Et=r.object.position;N.copy(Et).sub(r.target);let Tt=N.length();Tt*=Math.tan(r.object.fov/2*Math.PI/180),J(2*Lt*Tt/U.clientHeight,r.object.matrix),lt(2*Ft*Tt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(J(Lt*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),lt(Ft*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function ct(N){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function nt(N){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ft(N,pt){if(!r.zoomToCursor)return;W=!0;const Lt=r.domElement.getBoundingClientRect(),Ft=N-Lt.left,U=pt-Lt.top,Et=Lt.width,Tt=Lt.height;X.x=Ft/Et*2-1,X.y=-(U/Tt)*2+1,B.set(X.x,X.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(N){return Math.max(r.minDistance,Math.min(r.maxDistance,N))}function Q(N){y.set(N.clientX,N.clientY)}function ht(N){ft(N.clientX,N.clientX),_.set(N.clientX,N.clientY)}function Dt(N){A.set(N.clientX,N.clientY)}function Y(N){x.set(N.clientX,N.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const pt=r.domElement;gt(2*Math.PI*M.x/pt.clientHeight),wt(2*Math.PI*M.y/pt.clientHeight),y.copy(x),r.update()}function dt(N){P.set(N.clientX,N.clientY),D.subVectors(P,_),D.y>0?ct(O(D.y)):D.y<0&&nt(O(D.y)),_.copy(P),r.update()}function bt(N){R.set(N.clientX,N.clientY),v.subVectors(R,A).multiplyScalar(r.panSpeed),V(v.x,v.y),A.copy(R),r.update()}function Yt(N){ft(N.clientX,N.clientY),N.deltaY<0?nt(O(N.deltaY)):N.deltaY>0&&ct(O(N.deltaY)),r.update()}function Ht(N){let pt=!1;switch(N.code){case r.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?wt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,r.keyPanSpeed),pt=!0;break;case r.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?wt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,-r.keyPanSpeed),pt=!0;break;case r.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?gt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(r.keyPanSpeed,0),pt=!0;break;case r.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?gt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(-r.keyPanSpeed,0),pt=!0;break}pt&&(N.preventDefault(),r.update())}function Gt(N){if(I.length===1)y.set(N.pageX,N.pageY);else{const pt=kt(N),Lt=.5*(N.pageX+pt.x),Ft=.5*(N.pageY+pt.y);y.set(Lt,Ft)}}function Qt(N){if(I.length===1)A.set(N.pageX,N.pageY);else{const pt=kt(N),Lt=.5*(N.pageX+pt.x),Ft=.5*(N.pageY+pt.y);A.set(Lt,Ft)}}function ae(N){const pt=kt(N),Lt=N.pageX-pt.x,Ft=N.pageY-pt.y,U=Math.sqrt(Lt*Lt+Ft*Ft);_.set(0,U)}function et(N){r.enableZoom&&ae(N),r.enablePan&&Qt(N)}function Ne(N){r.enableZoom&&ae(N),r.enableRotate&&Gt(N)}function ne(N){if(I.length==1)x.set(N.pageX,N.pageY);else{const Lt=kt(N),Ft=.5*(N.pageX+Lt.x),U=.5*(N.pageY+Lt.y);x.set(Ft,U)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const pt=r.domElement;gt(2*Math.PI*M.x/pt.clientHeight),wt(2*Math.PI*M.y/pt.clientHeight),y.copy(x)}function oe(N){if(I.length===1)R.set(N.pageX,N.pageY);else{const pt=kt(N),Lt=.5*(N.pageX+pt.x),Ft=.5*(N.pageY+pt.y);R.set(Lt,Ft)}v.subVectors(R,A).multiplyScalar(r.panSpeed),V(v.x,v.y),A.copy(R)}function Kt(N){const pt=kt(N),Lt=N.pageX-pt.x,Ft=N.pageY-pt.y,U=Math.sqrt(Lt*Lt+Ft*Ft);P.set(0,U),D.set(0,Math.pow(P.y/_.y,r.zoomSpeed)),ct(D.y),_.copy(P);const Et=(N.pageX+pt.x)*.5,Tt=(N.pageY+pt.y)*.5;ft(Et,Tt)}function Ae(N){r.enableZoom&&Kt(N),r.enablePan&&oe(N)}function ce(N){r.enableZoom&&Kt(N),r.enableRotate&&ne(N)}function L(N){r.enabled!==!1&&(I.length===0&&(r.domElement.setPointerCapture(N.pointerId),r.domElement.addEventListener("pointermove",b),r.domElement.addEventListener("pointerup",ot)),qt(N),N.pointerType==="touch"?At(N):Nt(N))}function b(N){r.enabled!==!1&&(N.pointerType==="touch"?st(N):Rt(N))}function ot(N){switch(Ot(N),I.length){case 0:r.domElement.releasePointerCapture(N.pointerId),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",ot),r.dispatchEvent(G_),u=l.NONE;break;case 1:const pt=I[0],Lt=vt[pt];At({pointerId:pt,pageX:Lt.x,pageY:Lt.y});break}}function Nt(N){let pt;switch(N.button){case 0:pt=r.mouseButtons.LEFT;break;case 1:pt=r.mouseButtons.MIDDLE;break;case 2:pt=r.mouseButtons.RIGHT;break;default:pt=-1}switch(pt){case es.DOLLY:if(r.enableZoom===!1)return;ht(N),u=l.DOLLY;break;case es.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(r.enablePan===!1)return;Dt(N),u=l.PAN}else{if(r.enableRotate===!1)return;Q(N),u=l.ROTATE}break;case es.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(r.enableRotate===!1)return;Q(N),u=l.ROTATE}else{if(r.enablePan===!1)return;Dt(N),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function Rt(N){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;Y(N);break;case l.DOLLY:if(r.enableZoom===!1)return;dt(N);break;case l.PAN:if(r.enablePan===!1)return;bt(N);break}}function Z(N){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(N.preventDefault(),r.dispatchEvent(pd),Yt(it(N)),r.dispatchEvent(G_))}function it(N){const pt=N.deltaMode,Lt={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(pt){case 1:Lt.deltaY*=16;break;case 2:Lt.deltaY*=100;break}return N.ctrlKey&&!F&&(Lt.deltaY*=10),Lt}function rt(N){N.key==="Control"&&(F=!0,r.domElement.getRootNode().addEventListener("keyup",mt,{passive:!0,capture:!0}))}function mt(N){N.key==="Control"&&(F=!1,r.domElement.getRootNode().removeEventListener("keyup",mt,{passive:!0,capture:!0}))}function xt(N){r.enabled===!1||r.enablePan===!1||Ht(N)}function At(N){switch(Bt(N),I.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;Gt(N),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;Qt(N),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;et(N),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ne(N),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function st(N){switch(Bt(N),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ne(N),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;oe(N),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ae(N),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ce(N),r.update();break;default:u=l.NONE}}function se(N){r.enabled!==!1&&N.preventDefault()}function qt(N){I.push(N.pointerId)}function Ot(N){delete vt[N.pointerId];for(let pt=0;pt<I.length;pt++)if(I[pt]==N.pointerId){I.splice(pt,1);return}}function Bt(N){let pt=vt[N.pointerId];pt===void 0&&(pt=new he,vt[N.pointerId]=pt),pt.set(N.pageX,N.pageY)}function kt(N){const pt=N.pointerId===I[0]?I[1]:I[0];return vt[pt]}r.domElement.addEventListener("contextmenu",se),r.domElement.addEventListener("pointerdown",L),r.domElement.addEventListener("pointercancel",ot),r.domElement.addEventListener("wheel",Z,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",rt,{passive:!0,capture:!0}),this.update()}}function dA(){const o=fe.useRef(null),[e,i]=fe.useState(!1),[r,l]=fe.useState(!1),[u,h]=fe.useState(!1),[d,p]=fe.useState(!1),[m,g]=fe.useState(!1),[y,x]=fe.useState(!1),[M,A]=fe.useState(!1),[R,v]=fe.useState(!1),[_,P]=fe.useState(!1),[D,B]=fe.useState(!1),X=fe.useRef({beta:0,gamma:0}),W=fe.useRef(0),I=fe.useRef(!1),vt=fe.useRef(!1),F=fe.useRef({position:{x:1,z:1},direction:new j(0,0,1),worldPosition:new j(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),E=fe.useRef({}),O=fe.useRef(null),gt=fe.useRef(!1);fe.useEffect(()=>{vt.current=u},[u]),fe.useEffect(()=>{gt.current=e},[e]);const[wt,J]=fe.useState(null),lt=fe.useRef(null);fe.useRef(!1);const V=fe.useRef(null),ct=fe.useRef(!1),[nt,ft]=fe.useState({showDebug:!1,beta:0,gamma:0,velocity:{x:0,z:0},position:{x:0,z:0},gravity:{x:0,z:0},eventCount:0,lastUpdate:Date.now(),eventType:"",collision:!1,collisionEdge:""}),C=()=>{if(console.log("Restarting game..."),!E.current.generateMaze||!E.current.createWalls){console.error("Game functions not initialized");return}if(O.current&&O.current.parent&&(console.log("Cleaning up celebration particles"),O.current.parent.remove(O.current),O.current.geometry&&O.current.geometry.dispose(),O.current.material&&O.current.material.dispose(),O.current=null,J(null)),console.log("Resetting game state"),i(!1),l(!1),h(!1),ct.current=!1,console.log("Resetting player position and direction"),F.current.position={x:1,z:1},F.current.direction.set(0,0,1),console.log("Resetting maze reference"),V.current=null,console.log("Generating new maze"),E.current.generateMaze(),console.log("Creating new walls"),E.current.createWalls(),console.log("Updating player world position"),F.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),E.current.createPlayer&&E.current.mazeGroup){console.log("Creating new player mesh"),F.current.mesh&&F.current.mesh.parent&&(console.log("Removing old player mesh"),F.current.mesh.parent.remove(F.current.mesh),F.current.mesh.children.forEach(it=>{it.geometry&&it.geometry.dispose(),it.material&&it.material.dispose()})),console.log("Creating new player mesh");const Z=E.current.createPlayer();console.log("Positioning new player at entrance"),Z.position.copy(F.current.worldPosition),console.log("Adding new player to maze group"),E.current.mazeGroup.add(Z),console.log("Added new player to maze group"),console.log("Updating player ref"),F.current.mesh=Z}if(E.current.setInitialPlayerDirection?E.current.setInitialPlayerDirection(F.current.mesh):F.current.direction.set(0,0,1),F.current.mesh){F.current.mesh.position.copy(F.current.worldPosition);const Z=Math.atan2(F.current.direction.x,F.current.direction.z);F.current.mesh.rotation.y=Z,F.current.mesh.visible=!0,F.current.mesh.children.forEach(it=>{it.material&&(it.material.opacity=1,it.material.transparent=!0)})}},Q=()=>{const Z=navigator.userAgent||navigator.vendor||window.opera,it=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(Z.toLowerCase());return console.log("Device detection:",it?"Mobile":"Desktop"),I.current=it,it},ht=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",Dt=()=>window.DeviceOrientationEvent!==void 0,Y=async()=>{if(!ht())return console.log("No iOS permission needed, enabling gyroscope directly"),Ne(),!0;console.log("Requesting iOS device orientation permission");try{const Z=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",Z),Z==="granted"?(console.log("✅ iOS permission granted!"),Ne(),P(!1),B(!1),window.physics||et(),!0):(console.log("❌ iOS permission denied:",Z),P(!1),B(!0),!1)}catch(Z){return console.error("❌ Error requesting iOS permission:",Z),P(!1),B(!0),!1}},dt=Z=>{if(e||d)return;console.log(`Button pressed: ${Z}`);const it=.03;switch(Z){case"up":F.current.velocity.z-=it,F.current.direction.set(0,0,-1);break;case"down":F.current.velocity.z+=it,F.current.direction.set(0,0,1);break;case"left":F.current.velocity.x-=it,F.current.direction.set(-1,0,0);break;case"right":F.current.velocity.x+=it,F.current.direction.set(1,0,0);break}const rt=.2,mt=F.current.velocity,xt=Math.sqrt(mt.x*mt.x+mt.z*mt.z);xt>rt&&(mt.x=mt.x/xt*rt,mt.z=mt.z/xt*rt)},bt=Z=>{const it=performance.now(),rt=it<3e3;rt&&console.log("Orientation event received:",{beta:Z.beta,gamma:Z.gamma,time:it}),X.current={beta:Z.beta,gamma:Z.gamma},!rt&&it%3e3<20&&console.log("Orientation data:",X.current)};fe.useEffect(()=>{const Z=Q();return console.log("Is mobile:",Z),Z&&(ht()?(console.log("iOS device detected - showing permission button"),P(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):Dt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",bt),A(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",bt)}},[]),fe.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let Z=function(It){if(ti=requestAnimationFrame(Z),I.current&&M&&!gt.current&&!d){const T=performance.now(),{beta:H,gamma:G}=X.current;if(T<5e3&&T%500<20&&console.log("Animation loop - orientation:",{beta:H,gamma:G}),H!==null&&G!==null){const k=Math.abs(H),q=Math.abs(G);let St="";const Ut=5;k>q&&k>Ut?St=H>0?"ArrowDown":"ArrowUp":q>Ut&&(St=G>0?"ArrowRight":"ArrowLeft");const zt=Math.max(k,q),Vt=Math.max(100,500-zt*5);St&&T-W.current>Vt&&(console.log(`Gyroscope movement: ${St} (tilt: ${zt.toFixed(1)}°)`),Je({key:St,preventDefault:()=>{},stopPropagation:()=>{}}),W.current=T)}}if(!_e&&!e&&!N)_e=!0,Ft.rotation.x=0,Ft.rotation.y=0,Ft.rotation.z=0;else if(!_e&&!e&&N){const T=It-qe;Math.min(T/Wa,1)===1?(_e=!0,Ft.rotation.x=0,Ft.rotation.y=0,Ft.rotation.z=0):(Ft.rotation.x=0,Ft.rotation.y=0,Ft.rotation.z=0)}else!_e&&e&&(_e=!0),vt.current||(Ft.rotation.x=0,Ft.rotation.y=0,Ft.rotation.z=0);const Xt=It*.001;Ft.children.forEach(T=>{T.material&&T.material.uniforms&&(T.material.uniforms.time.value=Xt)}),lt.current?(console.log("Calling updateParticles from animation loop"),lt.current()||(console.log("updateParticles returned false, setting to null"),lt.current=null)):gt.current&&!lt.current&&console.log("Game won but updateParticles is null"),vt.current?I.current||(pt.enabled=!1,pt.enableRotate=!1,pt.enableZoom=!1,pt.enablePan=!1):((Math.abs(Pt.position.x)>.1||Math.abs(Pt.position.z)>.1||Math.abs(Pt.position.y-Bt())>.1||Math.abs(pt.target.x)>.1||Math.abs(pt.target.y)>.1||Math.abs(pt.target.z)>.1)&&(Pt.position.set(0,Bt(),0),pt.target.set(0,0,0)),!I.current&&pt.update&&pt.update()),ae(),At.render(rt,Pt)},it=function(){const It=window.innerWidth,Xt=window.innerHeight;At.setSize(It,Xt),Pt.aspect=It/Xt;const T=It<768,H=It>Xt;T?Pt.fov=H?75:80:Pt.fov=60,vt.current||(Pt.position.y=Bt(),Pt.lookAt(0,0,0)),Pt.updateProjectionMatrix()};console.log("Initializing 3D scene"),I.current=Q(),console.log("Is mobile device:",I.current),I.current&&v(!0);const rt=new rA;rt.background=new De(0);const mt=new F_(4210752,1.5);rt.add(mt);const xt=new B_(16777215,1);if(xt.position.set(1,1,1),rt.add(xt),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const At=new E0({antialias:!0,canvas:o.current});if(At.setSize(window.innerWidth,window.innerHeight),At.setPixelRatio(Math.min(window.devicePixelRatio,2)),At.shadowMap.enabled=!0,At.shadowMap.type=W_,console.log("Renderer set up"),I.current){console.log("Setting up orientation handling for mobile");const It=Xt=>{var T;if(!(e||d)&&(!M&&(Xt.beta!==null||Xt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),A(!0)),!!M&&Xt.beta!==null&&Xt.gamma!==null)){let H=Xt.beta,G=Xt.gamma;if(window.orientation!==void 0){const k=window.orientation;if(performance.now()%5e3<20&&((T=window.physics)!=null&&T.debug)&&console.log(`Device orientation: ${k}°, beta: ${H.toFixed(2)}°, gamma: ${G.toFixed(2)}°`),k===90){const St=H;H=G,G=-St}else if(k===-90){const St=H;H=-G,G=St}else k===180&&(H=-H,G=-G)}if(window.physics){let St=0,Ut=0;Math.abs(G)>5&&(St=Math.min(Math.abs(G)-5,25)/25*Math.sign(G)),Math.abs(H)>5&&(Ut=Math.min(Math.abs(H)-5,25)/25*Math.sign(H)),window.physics.gravityX=St,window.physics.gravityZ=Ut,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${St.toFixed(3)}, Z=${Ut.toFixed(3)}`)}X.current={beta:H,gamma:G}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Xt=async()=>{console.log("Requesting iOS device orientation permission");try{const T=await window.DeviceOrientationEvent.requestPermission();T==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",It),A(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),et(),setTimeout(()=>{F.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),F.current.velocity.x=.05,F.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",T)}catch(T){console.error("❌ Error requesting permission:",T)}};document.addEventListener("touchstart",()=>{Xt(),document.removeEventListener("touchstart",Xt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",It),A(!0)}const st=21,se=2,qt=3,Ot=2,Bt=(It=!1)=>{const Xt=window.innerWidth<768,T=window.innerWidth>window.innerHeight,H=st*Ot;let G=H*1.5;return Xt&&(It||D)&&(T?G=H*1.6:G=H*1.8),Xt?T?G*.8:G*1.2:G};window.calculateOptimalCameraHeight=Bt;const kt=Bt(),Pt=new Jn(60,window.innerWidth/window.innerHeight,.1,1e3);Pt.position.set(0,kt,0),Pt.up.set(0,0,-1),Pt.lookAt(0,0,0),ot.current=Pt,window.gameCamera=Pt,console.log("Camera set up and assigned to cameraRef");const N=Q();let pt;N?(pt={target:new j(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(pt=new fA(Pt,At.domElement),pt.enableDamping=!0,pt.dampingFactor=.1,pt.target.set(0,0,0),pt.update(),console.log("Desktop controls set up"));const Lt=e&&V.current?V.current:Array(st).fill().map(()=>Array(st).fill(1));V.current=Lt,window.MAZE_SIZE=st,window.WALL_THICKNESS=Ot,window.playerRef=F,window.mazeRef=V,window.isThirdPersonRef=vt,window.gameCamera=Pt,window.maze=Lt,window.celebrateWin=()=>{ct.current=!0,i(!0),l(!0),la()};const Ft=new Po;rt.add(Ft),console.log("Maze group created"),E.current.mazeGroup=Ft;const U=new oa({uniforms:{time:{value:0},baseColor:{value:new De(4482815)}},vertexShader:`
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
        `,side:Ni});console.log("Wall material created");const Et=(It,Xt)=>It>=0&&It<st&&Xt>=0&&Xt<st,Tt=(It,Xt)=>{const T=[],H=[[0,2],[2,0],[0,-2],[-2,0]];for(let G=H.length-1;G>0;G--){const k=Math.floor(Math.random()*(G+1));[H[G],H[k]]=[H[k],H[G]]}for(const[G,k]of H){const q=It+G,St=Xt+k;Et(q,St)&&Lt[q][St]===1&&T.push([q,St,G/2,k/2])}return T},Zt=()=>{if(e&&V.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let k=0;k<st;k++)for(let q=0;q<st;q++)Lt[k][q]=1;const It=[],Xt=1,T=1;for(Lt[Xt][T]=0,It.push([Xt,T]);It.length>0;){const[k,q]=It[It.length-1],St=Tt(k,q);if(St.length===0){It.pop();continue}const[Ut,zt,Vt,ee]=St[Math.floor(Math.random()*St.length)];Lt[Ut][zt]=0,Lt[k+Vt][q+ee]=0,It.push([Ut,zt])}Lt[0][1]=0,Lt[st-1][st-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(st-1)+","+(st-2)+")");const H=new Set,G=k=>{const[q,St]=k;if(q===st-2&&St===st-2)return!0;H.add(`${q},${St}`);const Ut=[[0,1],[1,0],[0,-1],[-1,0]];for(const[zt,Vt]of Ut){const ee=q+zt,te=St+Vt;if(Et(ee,te)&&Lt[ee][te]===0&&!H.has(`${ee},${te}`)&&G([ee,te]))return!0}return!1};G([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),Zt()),V.current=Lt,window.maze=Lt,window.MAZE_SIZE=st,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const jt=()=>{if(!e||!V.current){for(console.log("Creating new walls for the maze");Ft.children.length>0;){const It=Ft.children[0];It.isGroup?It.children.forEach(Xt=>{Xt.geometry&&Xt.geometry.dispose(),Xt.material&&Xt.material.dispose()}):(It.geometry&&It.geometry.dispose(),It.material&&It.material.dispose()),Ft.remove(It)}for(let It=0;It<st;It++)for(let Xt=0;Xt<st;Xt++)if(Lt[It][Xt]===1){const T=new Va(Ot,qt,Ot),H=new $n(T,U);if(H.position.set((It-st/2)*Ot,qt/2,(Xt-st/2)*Ot),Ft.add(H),It===0||It===st-1||Xt===0||Xt===st-1){if(It<st-1&&Lt[It+1][Xt]===1){const G=new $n(new Va(Ot,qt,Ot),U);G.position.set((It-st/2+.5)*Ot,qt/2,(Xt-st/2)*Ot),Ft.add(G)}if(Xt<st-1&&Lt[It][Xt+1]===1){const G=new $n(new Va(Ot,qt,Ot),U);G.position.set((It-st/2)*Ot,qt/2,(Xt-st/2+.5)*Ot),Ft.add(G)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),E.current.generateMaze=Zt,E.current.createWalls=jt;const ge=It=>{if(console.log("Setting initial player direction"),!It){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Xt=1,T=1,H=[{dx:0,dz:1,name:"down",vector:new j(0,0,1)},{dx:1,dz:0,name:"right",vector:new j(1,0,0)},{dx:0,dz:-1,name:"up",vector:new j(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new j(-1,0,0)}];console.log("Checking available directions from starting position:",Xt,T);const G=H.filter(k=>{const q=Xt+k.dx,St=T+k.dz;if(q===0&&St===1)return console.log(`Direction ${k.name} leads to entrance, skipping`),!1;const Ut=Et(q,St)&&Lt[q][St]===0;return console.log(`Direction ${k.name} leads to (${q}, ${St}): ${Ut?"valid":"invalid"}`),Ut});if(console.log("Valid directions:",G.map(k=>k.name)),G.length>0){const k=G[0];console.log("Chosen direction:",k.name),F.current.direction.copy(k.vector);const q=Math.atan2(k.vector.x,k.vector.z);It.rotation.y=q,console.log("Set player rotation to:",q)}else console.log("No valid directions found, defaulting to down"),F.current.direction.set(0,0,1),It.rotation.y=0};E.current.setInitialPlayerDirection=ge,e?console.log("Game has been won, preserving maze and player position"):(Zt(),jt(),console.log("Initial maze created"));const le=new F_(16777215,.6);rt.add(le);const Ee=new B_(16777215,1);Ee.position.set(50,100,50),rt.add(Ee);const Ve=new z_(4474111,2,150);Ve.position.set(50,50,50),rt.add(Ve);const me=new z_(4474111,2,150);me.position.set(-50,50,-50),rt.add(me),console.log("Lights added");let _e=!1;const qe=performance.now(),Wa=1e3,la=()=>{console.log("Celebration function called - START");const It=2e3,Xt=new zi,T=new Float32Array(It*3),H=new Float32Array(It*3);for(let zt=0;zt<It;zt++)T[zt*3]=F.current.worldPosition.x,T[zt*3+1]=F.current.worldPosition.y,T[zt*3+2]=F.current.worldPosition.z,H[zt*3]=Math.random(),H[zt*3+1]=Math.random(),H[zt*3+2]=Math.random();Xt.setAttribute("position",new hi(T,3)),Xt.setAttribute("color",new hi(H,3));const G=new T0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:md}),k=new sA(Xt,G);rt.add(k),console.log("Particle system added to scene");const q=[];for(let zt=0;zt<It;zt++){const Vt=Math.random()*Math.PI*2,ee=Math.acos(Math.random()*2-1),te=.05+Math.random()*.1;q.push(Math.sin(ee)*Math.cos(Vt)*te,Math.sin(ee)*Math.sin(Vt)*te,Math.cos(ee)*te)}O.current=k;const St=()=>{if(console.log("Update particles function called - frame"),!gt.current)return console.log("Game no longer in won state, cleaning up particles"),k.parent&&(rt.remove(k),k.geometry.dispose(),G.dispose()),O.current=null,lt.current=null,!1;const zt=k.geometry.attributes.position.array;let Vt=!1;for(let te=0;te<It;te++){const $t=te*3;zt[$t]+=q[$t],zt[$t+1]+=q[$t+1],zt[$t+2]+=q[$t+2],q[$t+1]-=.001;const we=zt[$t]-F.current.worldPosition.x,Pe=zt[$t+1]-F.current.worldPosition.y,He=zt[$t+2]-F.current.worldPosition.z;Math.sqrt(we*we+Pe*Pe+He*He)<20&&(Vt=!0)}k.geometry.attributes.position.needsUpdate=!0;const ee=performance.now()-Ut;return ee>1e3&&(G.opacity=Math.max(0,1-(ee-1e3)/1e3)),!Vt||ee>2e3?(console.log("Animation complete, cleaning up particles"),rt.remove(k),k.geometry.dispose(),G.dispose(),O.current=null,lt.current=null,!1):!0},Ut=performance.now();return console.log("Setting updateParticles function"),lt.current=St,()=>{console.log("Cleanup function called"),k.parent&&(rt.remove(k),k.geometry.dispose(),G.dispose()),O.current=null,lt.current=null}},Ti=()=>{if(!rt)return;console.log("Creating player...");const It=window.MAZE_SIZE||21,Xt=window.WALL_THICKNESS||2,T=new Mc(.4,32,32),H=new oA({color:16763904,roughness:.3,metalness:.7,envMapIntensity:.9}),G=new $n(T,H);G.castShadow=!0,G.receiveShadow=!0;const k=1,q=1,St=(k-It/2)*Xt,Ut=(q-It/2)*Xt;return G.position.set(St,Xt/2,Ut),rt.add(G),F.current={position:{x:k,z:q},velocity:{x:0,z:0},direction:new j(0,0,1),worldPosition:new j(St,Xt/2,Ut),mesh:G},console.log(`Player created at entrance - Maze coords: (${k},${q}), World coords: (${St},${Ut})`),G},nn=Ti();E.current.createPlayer=Ti;let mn=null;if(e){for(let It=0;It<Ft.children.length;It++){const Xt=Ft.children[It];if(Xt.isGroup&&Xt.children.length>0&&Xt.children[0].geometry instanceof Mc){mn=Xt;break}}mn&&(mn.children.forEach(It=>{It.geometry&&It.geometry.dispose(),It.material&&It.material.dispose()}),Ft.remove(mn),console.log("Removed existing player from maze group"))}if(!e)nn.position.set((1-st/2)*Ot,Ot/2,(1-st/2)*Ot),F.current.mesh=nn,F.current.worldPosition.copy(nn.position),ge(nn);else{if(ct.current){const Xt=st-1,T=st-2,H=new j((Xt-st/2)*Ot,Ot/2,(T-st/2)*Ot);console.log("Positioning player at exit:",H),nn.position.copy(H),F.current.worldPosition.copy(H),F.current.position={x:Xt,z:T}}else console.log("Using existing player position:",F.current.worldPosition),nn.position.copy(F.current.worldPosition);F.current.mesh=nn;const It=Math.atan2(F.current.direction.x,F.current.direction.z);nn.rotation.y=It}Ft.add(nn),F.current.mesh=nn,console.log("Player created and added to maze group");const je=It=>{if(It.key.toLowerCase()==="v")return console.log("View toggle key pressed"),It.preventDefault(),It.stopPropagation(),It.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(Xt=>{const T=!Xt;console.log("Switching to:",T?"POV mode":"Top-down mode"),vt.current=T;const H=Pt.position.clone(),G=new j().copy(pt.target),k=Pt.fov,q={x:Ft.rotation.x,y:Ft.rotation.y,z:Ft.rotation.z},St=T?new j(F.current.worldPosition.x,F.current.worldPosition.y+1.5,F.current.worldPosition.z):new j(0,Bt(),0),Ut=T?new j(F.current.worldPosition.x+F.current.direction.x*Ot,F.current.worldPosition.y+1.5,F.current.worldPosition.z+F.current.direction.z*Ot):new j(0,0,0),zt=window.innerWidth<768,Vt=window.innerWidth>window.innerHeight;let ee=T?75:60;zt&&(ee=T||Vt?75:80);const te={x:0,y:0,z:0},$t=nn.visible?1:0,we=T?0:1;nn.visible=!0,nn.children.forEach(de=>{de.material&&(de.material.transparent||(de.material.transparent=!0),de.material.opacity=$t)}),I.current||(pt.enabled=!1);const Pe=1200;let He=null;const wn=de=>{const bi=de-ze,Oe=Math.min(bi/Pe,1),Ze=(_n=>_n<.5?4*_n*_n*_n:1-Math.pow(-2*_n+2,3)/2)(Oe);Pt.position.lerpVectors(H,St,Ze);const pi=new j().lerpVectors(G,Ut,Ze);if(I.current||pt.target.copy(pi),Pt.lookAt(pi),Pt.fov=Ss.lerp(k,ee,Ze),Pt.updateProjectionMatrix(),Ft.rotation.x=Ss.lerp(q.x,te.x,Ze),Ft.rotation.y=Ss.lerp(q.y,te.y,Ze),Ft.rotation.z=Ss.lerp(q.z,te.z,Ze),nn.children.forEach(_n=>{_n.material&&(_n.material.opacity=Ss.lerp($t,we,Ze))}),Oe===1){cancelAnimationFrame(He),nn.visible=!T,nn.children.forEach(_n=>{_n.material&&(_n.material.opacity=we,we===1&&(_n.material.transparent=!1))}),!I.current&&!T?(pt.enabled=!0,pt.enableRotate=!0,pt.enableZoom=!0,pt.enablePan=!0):(Pt.position.copy(St),Pt.lookAt(Ut)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}He=requestAnimationFrame(wn)},ze=performance.now();return He=requestAnimationFrame(wn),T}),!1)},Je=It=>{if(gt.current||!_e||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Xt=It.key.toLowerCase();if(console.log("Key pressed:",Xt,"Current mode:",vt.current?"POV":"Top-down"),Xt==="v")return;It.preventDefault();const T=F.current.position.x,H=F.current.position.z;let G=T,k=H,q=!1;const St=F.current.mesh;if(!St){console.error("Player mesh not found");return}if(vt.current){switch(console.log("Handling POV mode controls"),Xt){case"arrowup":case"w":console.log("Moving forward - Current position:",T,H),console.log("Current direction:",F.current.direction),G=T+Math.round(F.current.direction.x),k=H+Math.round(F.current.direction.z),console.log("New position will be:",G,k),q="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",T,H),console.log("Current direction:",F.current.direction),G=T-Math.round(F.current.direction.x),k=H-Math.round(F.current.direction.z),console.log("New position will be:",G,k),q="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",F.current.direction),F.current.direction.applyAxisAngle(new j(0,1,0),Math.PI/2),console.log("New direction:",F.current.direction),q="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",F.current.direction),F.current.direction.applyAxisAngle(new j(0,1,0),-Math.PI/2),console.log("New direction:",F.current.direction),q="rotate";break}if(q==="move")if(Et(G,k)&&Lt[G][k]===0){console.log("Movement is valid, updating positions"),F.current.position.x=G,F.current.position.z=k;const Ut=new j((G-st/2)*Ot,Ot/2,(k-st/2)*Ot);console.log("New world position:",Ut),F.current.worldPosition.copy(Ut),St.position.copy(Ut),console.log("Updated player mesh position to:",St.position),Pt.position.set(Ut.x,Ut.y+1.5,Ut.z),console.log("New camera position:",Pt.position);const zt=Pt.position.clone();if(zt.add(F.current.direction.clone().multiplyScalar(Ot)),Pt.lookAt(zt),console.log("Camera looking at:",zt),Pt.updateProjectionMatrix(),Pt.updateMatrixWorld(),G===st-1&&k===st-2){ct.current=!0,i(!0),l(!0);const Vt=la();return()=>{Vt&&Vt()}}}else console.log("Movement blocked - Out of bounds or wall:",G,k);else if(q==="rotate"){console.log("Handling rotation");const Ut=Math.atan2(F.current.direction.x,F.current.direction.z);St.rotation.y=Ut,console.log("Updated player mesh rotation to:",Ut);const zt=Pt.position.clone();zt.add(F.current.direction.clone().multiplyScalar(Ot)),Pt.lookAt(zt),console.log("Camera looking at new direction:",zt),Pt.updateProjectionMatrix(),Pt.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Xt){case"arrowup":case"w":console.log("Moving up - Current position:",T,H),k=H-1,F.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",T,H),k=H+1,F.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",T,H),G=T-1,F.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",T,H),G=T+1,F.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",G,k),console.log("Maze value at target position:",Lt[G][k]),console.log("Is in bounds:",Et(G,k)),Et(G,k)&&Lt[G][k]===0){console.log("Movement is valid, updating positions"),F.current.position.x=G,F.current.position.z=k;const Ut=new j((G-st/2)*Ot,Ot/2,(k-st/2)*Ot);F.current.worldPosition.copy(Ut),St.position.copy(Ut);const zt=Math.atan2(F.current.direction.x,F.current.direction.z);if(St.rotation.y=zt,G===st-1&&k===st-2){ct.current=!0,i(!0),l(!0);const Vt=la();return()=>{Vt&&Vt()}}}}};window.removeEventListener("keydown",je,!0),window.removeEventListener("keydown",Je),console.log("Attaching event listeners"),window.addEventListener("keydown",je,!0),window.addEventListener("keydown",Je),console.log("Event listeners attached");let ti;return console.log("Starting animation"),Z(),window.addEventListener("resize",it),()=>{console.log("Cleanup running"),window.removeEventListener("resize",it),window.removeEventListener("keydown",je,!0),window.removeEventListener("keydown",Je),ti&&cancelAnimationFrame(ti),rt.traverse(It=>{It.geometry&&It.geometry.dispose(),It.material&&(Array.isArray(It.material)?It.material.forEach(Xt=>Xt.dispose()):It.material.dispose())}),At.dispose(),pt&&typeof pt.dispose=="function"&&pt.dispose()}}catch(Z){console.error("Error in setup:",Z)}},[]),fe.useEffect(()=>{const Z=()=>{const rt=Q();return rt&&(!Dt()||ht()&&!M)&&(console.log("Setting up touch controls for mobile"),B(!0)),it(),rt},it=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const rt=mt=>{console.log("Device orientation event received:",mt),window.removeEventListener("deviceorientation",rt)};window.addEventListener("deviceorientation",rt,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};Z()},[M]);const Yt=fe.useRef(null),Ht=fe.useRef(null),Gt=fe.useRef(null),Qt=fe.useRef(null);fe.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const Z=se=>{if(e||d)return;const qt=.1;switch(se){case"up":F.current.velocity.z-=qt,F.current.direction.set(0,0,-1);break;case"down":F.current.velocity.z+=qt,F.current.direction.set(0,0,1);break;case"left":F.current.velocity.x-=qt,F.current.direction.set(-1,0,0);break;case"right":F.current.velocity.x+=qt,F.current.direction.set(1,0,0);break}const Ot=.2,Bt=F.current.velocity,kt=Math.sqrt(Bt.x*Bt.x+Bt.z*Bt.z);kt>Ot&&(Bt.x=Bt.x/kt*Ot,Bt.z=Bt.z/kt*Ot)},it=(se,qt)=>(se.preventDefault(),se.stopPropagation(),Z(qt),!1),rt=(se,qt)=>{if(!se.current)return;const Ot=se.current,Bt=pt=>it(pt,qt),kt=pt=>pt.preventDefault(),Pt=pt=>it(pt,qt),N=pt=>it(pt,qt);return Ot.addEventListener("touchstart",Bt,{passive:!1}),Ot.addEventListener("touchend",kt,{passive:!1}),Ot.addEventListener("mousedown",Pt),Ot.addEventListener("click",N),()=>{Ot.removeEventListener("touchstart",Bt),Ot.removeEventListener("touchend",kt),Ot.removeEventListener("mousedown",Pt),Ot.removeEventListener("click",N)}},mt=rt(Yt,"up"),xt=rt(Ht,"down"),At=rt(Gt,"left"),st=rt(Qt,"right");return()=>{mt&&mt(),xt&&xt(),At&&At(),st&&st()}},[D]),fe.useEffect(()=>{const Z=()=>{let mt=document.querySelector('meta[name="viewport"]');mt||(mt=document.createElement("meta"),mt.name="viewport",document.head.appendChild(mt)),mt.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},it=mt=>{mt.touches&&mt.touches.length>1&&mt.preventDefault()},rt=mt=>{mt.preventDefault()};return Z(),document.addEventListener("touchmove",it,{passive:!1}),document.addEventListener("touchstart",rt,{passive:!1}),()=>{document.removeEventListener("touchmove",it),document.removeEventListener("touchstart",rt)}},[]),fe.useEffect(()=>{if(!window.gameCamera||vt.current)return;const it=setTimeout(()=>{const rt=window.gameCamera;if(rt&&!vt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const mt=window.calculateOptimalCameraHeight(D);rt.position.y=mt,rt.updateProjectionMatrix(),console.log(`Adjusted camera height to ${mt} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(it)},[D]);const ae=()=>{if(!M||e||d)return;const Z=window.maze||V.current;if(!Z){console.warn("No maze available for physics update");return}const it=window.MAZE_SIZE||21,rt=window.WALL_THICKNESS||2,mt=F.current,xt=mt.velocity,At=mt.position,st=mt.mesh;if(!st){console.warn("No player mesh available for physics update");return}const se=window.physics||{},qt=se.gravityX||0,Ot=se.gravityZ||0,Bt=.01,kt=.97,Pt=.5,N=.45;if(xt.x+=qt*Bt,xt.z+=Ot*Bt,xt.x*=kt,xt.z*=kt,Math.abs(xt.x)<2e-4&&Math.abs(xt.z)<2e-4)return;const pt=At.x,Lt=At.z;let Ft=At.x+xt.x,U=At.z+xt.z;const Et=(_e,qe)=>_e<0||_e>=it||qe<0||qe>=it?!0:Z[_e][qe]===1,Tt=Math.floor(At.x),Zt=Math.floor(At.z);At.x-Tt,At.z-Zt,At.x=Ft;const jt=Math.floor(At.x);At.x-jt;let ge=!1;xt.x>0&&jt+1<it&&Et(jt+1,Math.floor(At.z))?jt+1-At.x<N&&(ge=!0,At.x=jt+1-N-.01,xt.x=-xt.x*Pt):xt.x<0&&jt>=0&&Et(jt,Math.floor(At.z))&&At.x-jt<N&&(ge=!0,At.x=jt+N+.01,xt.x=-xt.x*Pt),At.z=U;const le=Math.floor(At.z);At.z-le;let Ee=!1;xt.z>0&&le+1<it&&Et(Math.floor(At.x),le+1)?le+1-At.z<N&&(Ee=!0,At.z=le+1-N-.01,xt.z=-xt.z*Pt):xt.z<0&&le>=0&&Et(Math.floor(At.x),le)&&At.z-le<N&&(Ee=!0,At.z=le+N+.01,xt.z=-xt.z*Pt),Et(jt,le)&&!ge&&!Ee&&(xt.x=-xt.x*Pt,xt.z=-xt.z*Pt,At.x=pt,At.z=Lt),Et(Math.floor(At.x),Math.floor(At.z))&&(At.x=pt,At.z=Lt,xt.x=0,xt.z=0);const Ve=(At.x-it/2)*rt,me=(At.z-it/2)*rt;if(mt.worldPosition&&mt.worldPosition.set(Ve,rt/2,me),st.position.copy(mt.worldPosition),Math.abs(xt.x)>.01||Math.abs(xt.z)>.01){const _e=Math.atan2(xt.x,xt.z);st.rotation.y=_e,mt.direction.set(xt.x,0,xt.z).normalize()}Math.floor(At.x)===it-2&&Math.floor(At.z)===it-2&&(console.log("Victory reached!"),i(!0),celebrate())},et=()=>{console.log("⚡ Initializing physics system");const Z=window.MAZE_SIZE||21,it=window.WALL_THICKNESS||2;if(F.current){F.current.position={x:1,z:1},F.current.velocity={x:0,z:0};const rt=(1-Z/2)*it,mt=(1-Z/2)*it;console.log(`Converting maze coords (1,1) to world coords (${rt}, ${mt})`),F.current.worldPosition?F.current.worldPosition.set(rt,it/2,mt):F.current.worldPosition=new j(rt,it/2,mt),F.current.mesh&&(F.current.mesh.position.copy(F.current.worldPosition),console.log(`Set player mesh position to world coords: (${F.current.worldPosition.x}, ${F.current.worldPosition.y}, ${F.current.worldPosition.z})`))}window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:0,mazeSize:Z,wallThickness:it},console.log("Physics initialized - player at entrance position with gravity-based movement")};fe.useEffect(()=>{let Z,it=0;const rt=1e3/60;let mt=0;function xt(At){if(Z=requestAnimationFrame(xt),it===0){it=At;return}const st=At-it;for(it=At,mt+=st;mt>=rt;)I.current&&M&&!e&&!d&&ae(),mt-=rt}return Z=requestAnimationFrame(xt),()=>{Z&&cancelAnimationFrame(Z)}},[M,e,d]);const Ne=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",oe,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",ne,{passive:!0}),console.log("✓ Added devicemotion listener")),A(!0),v(!0),window.physics||et()},ne=Z=>{if(ft(rt=>({...rt,eventCount:rt.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const it=Z.accelerationIncludingGravity;if(it&&it.x!==null&&it.y!==null&&it.z!==null){let mt=Math.min(Math.max(it.x/5,-1),1),xt=Math.min(Math.max(it.y/5,-1),1);const At=.05;Math.abs(mt)<At&&(mt=0),Math.abs(xt)<At&&(xt=0),window.physics.gravityX=-mt,window.physics.gravityZ=xt}},oe=Z=>{if(!(Z.beta===null&&Z.gamma===null)&&(!M&&(Z.beta!==null||Z.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),A(!0),v(!0)),Z.beta!==null&&Z.gamma!==null)){let it=Z.beta,rt=Z.gamma;if(performance.now()%5e3<20&&console.log(`Raw orientation: beta=${it.toFixed(2)}°, gamma=${rt.toFixed(2)}°`),window.orientation!==void 0){const se=window.orientation;if(se===90){const qt=it;it=rt,rt=-qt}else if(se===-90){const qt=it;it=-rt,rt=qt}else se===180&&(it=-it,rt=-rt)}window.physics||et();const mt=30,xt=1;let At=0,st=0;Math.abs(rt)>xt&&(At=Math.sign(rt)*Math.min(1,(Math.abs(rt)-xt)/(mt-xt))),Math.abs(it)>xt&&(st=Math.sign(it)*Math.min(1,(Math.abs(it)-xt)/(mt-xt))),window.physics&&(window.physics.gravityX=At,window.physics.gravityZ=st,console.log(`Gravity vector: X=${At.toFixed(2)}, Z=${st.toFixed(2)}`),ft(se=>({...se,beta:parseFloat(it.toFixed(2)),gamma:parseFloat(rt.toFixed(2)),gravity:{x:At,z:st},eventCount:se.eventCount+1,lastUpdate:Date.now(),eventType:"orientation"}))),X.current={beta:it,gamma:rt}}};fe.useEffect(()=>{F.current?F.current.worldPosition||(F.current.worldPosition=new j(2,0,2),console.log("Added missing worldPosition to existing playerRef")):(F.current={position:{x:1,z:1},velocity:{x:0,z:0},direction:new j(0,0,1),worldPosition:new j(2,0,2),mesh:null},console.log("Initialized playerRef with default values including worldPosition"))},[]),fe.useEffect(()=>{const Z=()=>{if(!Q()){console.log("Not a mobile device, skipping orientation lock");return}try{window.screen&&window.screen.orientation?window.screen.orientation.lock("portrait").then(()=>console.log("✓ Orientation locked to portrait")).catch(it=>console.warn("Cannot lock orientation:",it)):window.orientation!==void 0&&(console.log("Using orientation event fallback for iOS"),window.addEventListener("orientationchange",function(){window.orientation===90||window.orientation===-90?Ae("Please rotate your device to portrait mode"):Ae("")}))}catch(it){console.warn("Orientation locking not supported:",it)}};return Q()?(console.log("Mobile device detected, locking to portrait orientation"),Z(),ce("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait")):(console.log("Desktop device detected, allowing any orientation"),ce("width=device-width, initial-scale=1.0")),()=>{window.removeEventListener("orientationchange",()=>{})}},[]);const[Kt,Ae]=fe.useState(""),ce=Z=>{let it=document.querySelector('meta[name="viewport"]');if(it||(it=document.createElement("meta"),it.name="viewport",document.head.appendChild(it)),it.setAttribute("content",Z),console.log("✓ Viewport meta set:",Z),Q()){let rt=document.querySelector('meta[name="screen-orientation"]');rt||(rt=document.createElement("meta"),rt.name="screen-orientation",document.head.appendChild(rt)),rt.setAttribute("content","portrait")}},L=()=>{if(!Q())return Ae(""),window.physics&&(window.physics.active=!0),!0;const Z=window.matchMedia("(orientation: landscape)").matches;return Z?(Ae("Please rotate your device to portrait mode"),window.physics&&(window.physics.active=!1)):(Ae(""),window.physics&&(window.physics.active=!0)),!Z};fe.useEffect(()=>{L();const Z=()=>{L(),ot.current&&!u&&setTimeout(()=>{const it=calculateOptimalCameraHeight(D);ot.current.position.y=it},300)};if(Q()){window.addEventListener("orientationchange",Z),window.addEventListener("resize",Z);const it=window.matchMedia("(orientation: portrait)");return it.addEventListener("change",Z),()=>{window.removeEventListener("orientationchange",Z),window.removeEventListener("resize",Z),it.removeEventListener("change",Z)}}},[u,D]);const b={position:"fixed",top:0,left:0,width:"100%",height:"100%",display:Kt?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.85)",color:"white",fontSize:"1.5rem",textAlign:"center",padding:"2rem",zIndex:9999,fontFamily:"Arial, sans-serif"},ot=fe.useRef(null);fe.useRef(null),fe.useRef(null),fe.useRef(null),fe.useEffect(()=>{D&&(console.log("Setting up touch control buttons"),Yt.current&&Rt(Yt,"up"),Ht.current&&Rt(Ht,"down"),Gt.current&&Rt(Gt,"left"),Qt.current&&Rt(Qt,"right"))},[D]);const Nt=(Z,it)=>{Z.preventDefault(),Z.stopPropagation(),dt(it)},Rt=(Z,it)=>{if(!Z.current)return;console.log(`Setting up ${it} button`);const rt=Z.current,mt=rt.cloneNode(!0);rt.parentNode.replaceChild(mt,rt),Z.current=mt;const xt=qt=>Nt(qt,it),At=qt=>qt.preventDefault(),st=qt=>Nt(qt,it),se=qt=>Nt(qt,it);mt.addEventListener("touchstart",xt,{passive:!1}),mt.addEventListener("touchend",At,{passive:!1}),mt.addEventListener("mousedown",st),mt.addEventListener("click",se),console.log(`Event listeners added to ${it} button`)};return be.jsxs(be.Fragment,{children:[be.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),_&&be.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[be.jsx("button",{className:"permission-button",onClick:Z=>{Z.preventDefault(),Z.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{Y()},10)},onTouchStart:Z=>{console.log("Button touch started"),Z.stopPropagation()},onTouchEnd:Z=>{console.log("Button touch ended"),Z.preventDefault(),Z.stopPropagation(),setTimeout(()=>{Y()},10)},children:"Enable Tilt Controls"}),be.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),R&&M&&be.jsxs("div",{className:"gyroscope-indicator",children:[be.jsx("div",{className:"gyroscope-icon",children:be.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:be.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),be.jsx("span",{children:"Tilt to Move"})]}),r&&be.jsxs("div",{className:"victory-message",children:[be.jsx("h1",{children:"You Win!"}),be.jsx("button",{onClick:C,children:"Play Again"})]}),D&&be.jsxs("div",{className:"touch-controls",children:[be.jsxs("div",{className:"touch-controls-row",children:[be.jsx("div",{className:"touch-button-spacer"}),be.jsx("button",{ref:Yt,className:"touch-button up-button","data-direction":"up",children:"▲"}),be.jsx("div",{className:"touch-button-spacer"})]}),be.jsxs("div",{className:"touch-controls-row",children:[be.jsx("button",{ref:Gt,className:"touch-button left-button","data-direction":"left",children:"◀"}),be.jsx("div",{className:"touch-button-spacer"}),be.jsx("button",{ref:Qt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),be.jsxs("div",{className:"touch-controls-row",children:[be.jsx("div",{className:"touch-button-spacer"}),be.jsx("button",{ref:Ht,className:"touch-button down-button","data-direction":"down",children:"▼"}),be.jsx("div",{className:"touch-button-spacer"})]})]}),m&&be.jsx("div",{className:"view-mode-indicator",children:u?"First Person View":"Top-Down View"}),be.jsxs("div",{style:b,children:[be.jsx("div",{style:{marginBottom:"1rem"},children:be.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",children:be.jsx("path",{fill:"white",d:"M7.5,21.5C4.25,21.5 1.5,18.75 1.5,15.5V8.5C1.5,5.5 4,3 7,3H17C20,3 22.5,5.5 22.5,8.5V15.5C22.5,18.75 19.75,21.5 16.5,21.5H7.5M7,5C5.17,5 3.5,6.67 3.5,8.5V15.5C3.5,17.7 5.3,19.5 7.5,19.5H16.5C18.7,19.5 20.5,17.7 20.5,15.5V8.5C20.5,6.67 18.83,5 17,5H7M7,8H17V16H7V8M12,17H7V19H12V17Z"})})}),be.jsx("p",{style:{margin:"0 0 1rem 0"},children:Kt}),be.jsx("div",{style:{marginTop:"1rem",fontSize:"1rem",opacity:.8},children:"The maze game works best in portrait orientation on mobile devices"})]})]})}Fy.createRoot(document.getElementById("root")).render(be.jsx(fe.StrictMode,{children:be.jsx(dA,{})}));
