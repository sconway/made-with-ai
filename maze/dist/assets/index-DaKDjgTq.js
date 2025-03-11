(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Ux(){if(ng)return wo;ng=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var ig;function Nx(){return ig||(ig=1,Lf.exports=Ux()),Lf.exports}var Kt=Nx(),Uf={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Ox(){if(ag)return _e;ag=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=x&&C[x]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function v(C,J,_t){this.props=C,this.context=J,this.refs=R,this.updater=_t||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,J){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,J,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function B(C,J,_t){this.props=C,this.context=J,this.refs=R,this.updater=_t||M}var D=B.prototype=new _;D.constructor=B,T(D,v.prototype),D.isPureReactComponent=!0;var z=Array.isArray,X={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function I(C,J,_t,Dt,Z,mt){return _t=mt.ref,{$$typeof:o,type:C,key:J,ref:_t!==void 0?_t:null,props:mt}}function dt(C,J){return I(C.type,J,void 0,void 0,void 0,C.props)}function P(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function E(C){var J={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(_t){return J[_t]})}var N=/\/+/g;function ft(C,J){return typeof C=="object"&&C!==null&&C.key!=null?E(""+C.key):J.toString(36)}function Et(){}function j(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(Et,Et):(C.status="pending",C.then(function(J){C.status==="pending"&&(C.status="fulfilled",C.value=J)},function(J){C.status==="pending"&&(C.status="rejected",C.reason=J)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ot(C,J,_t,Dt,Z){var mt=typeof C;(mt==="undefined"||mt==="boolean")&&(C=null);var wt=!1;if(C===null)wt=!0;else switch(mt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(C.$$typeof){case o:case t:wt=!0;break;case g:return wt=C._init,ot(wt(C._payload),J,_t,Dt,Z)}}if(wt)return Z=Z(C),wt=Dt===""?"."+ft(C,0):Dt,z(Z)?(_t="",wt!=null&&(_t=wt.replace(N,"$&/")+"/"),ot(Z,J,_t,"",function(kt){return kt})):Z!=null&&(P(Z)&&(Z=dt(Z,_t+(Z.key==null||C&&C.key===Z.key?"":(""+Z.key).replace(N,"$&/")+"/")+wt)),J.push(Z)),1;wt=0;var Yt=Dt===""?".":Dt+":";if(z(C))for(var Vt=0;Vt<C.length;Vt++)Dt=C[Vt],mt=Yt+ft(Dt,Vt),wt+=ot(Dt,J,_t,mt,Z);else if(Vt=y(C),typeof Vt=="function")for(C=Vt.call(C),Vt=0;!(Dt=C.next()).done;)Dt=Dt.value,mt=Yt+ft(Dt,Vt++),wt+=ot(Dt,J,_t,mt,Z);else if(mt==="object"){if(typeof C.then=="function")return ot(j(C),J,_t,Dt,Z);throw J=String(C),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return wt}function V(C,J,_t){if(C==null)return C;var Dt=[],Z=0;return ot(C,Dt,"","",function(mt){return J.call(_t,mt,Z++)}),Dt}function ct(C){if(C._status===-1){var J=C._result;J=J(),J.then(function(_t){(C._status===0||C._status===-1)&&(C._status=1,C._result=_t)},function(_t){(C._status===0||C._status===-1)&&(C._status=2,C._result=_t)}),C._status===-1&&(C._status=0,C._result=J)}if(C._status===1)return C._result.default;throw C._result}var nt=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function pt(){}return _e.Children={map:V,forEach:function(C,J,_t){V(C,function(){J.apply(this,arguments)},_t)},count:function(C){var J=0;return V(C,function(){J++}),J},toArray:function(C){return V(C,function(J){return J})||[]},only:function(C){if(!P(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},_e.Component=v,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=B,_e.StrictMode=r,_e.Suspense=p,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,_e.act=function(){throw Error("act(...) is not supported in production builds of React.")},_e.cache=function(C){return function(){return C.apply(null,arguments)}},_e.cloneElement=function(C,J,_t){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Dt=T({},C.props),Z=C.key,mt=void 0;if(J!=null)for(wt in J.ref!==void 0&&(mt=void 0),J.key!==void 0&&(Z=""+J.key),J)!k.call(J,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&J.ref===void 0||(Dt[wt]=J[wt]);var wt=arguments.length-2;if(wt===1)Dt.children=_t;else if(1<wt){for(var Yt=Array(wt),Vt=0;Vt<wt;Vt++)Yt[Vt]=arguments[Vt+2];Dt.children=Yt}return I(C.type,Z,void 0,void 0,mt,Dt)},_e.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},_e.createElement=function(C,J,_t){var Dt,Z={},mt=null;if(J!=null)for(Dt in J.key!==void 0&&(mt=""+J.key),J)k.call(J,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(Z[Dt]=J[Dt]);var wt=arguments.length-2;if(wt===1)Z.children=_t;else if(1<wt){for(var Yt=Array(wt),Vt=0;Vt<wt;Vt++)Yt[Vt]=arguments[Vt+2];Z.children=Yt}if(C&&C.defaultProps)for(Dt in wt=C.defaultProps,wt)Z[Dt]===void 0&&(Z[Dt]=wt[Dt]);return I(C,mt,void 0,void 0,null,Z)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(C){return{$$typeof:d,render:C}},_e.isValidElement=P,_e.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:ct}},_e.memo=function(C,J){return{$$typeof:m,type:C,compare:J===void 0?null:J}},_e.startTransition=function(C){var J=X.T,_t={};X.T=_t;try{var Dt=C(),Z=X.S;Z!==null&&Z(_t,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(pt,nt)}catch(mt){nt(mt)}finally{X.T=J}},_e.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},_e.use=function(C){return X.H.use(C)},_e.useActionState=function(C,J,_t){return X.H.useActionState(C,J,_t)},_e.useCallback=function(C,J){return X.H.useCallback(C,J)},_e.useContext=function(C){return X.H.useContext(C)},_e.useDebugValue=function(){},_e.useDeferredValue=function(C,J){return X.H.useDeferredValue(C,J)},_e.useEffect=function(C,J){return X.H.useEffect(C,J)},_e.useId=function(){return X.H.useId()},_e.useImperativeHandle=function(C,J,_t){return X.H.useImperativeHandle(C,J,_t)},_e.useInsertionEffect=function(C,J){return X.H.useInsertionEffect(C,J)},_e.useLayoutEffect=function(C,J){return X.H.useLayoutEffect(C,J)},_e.useMemo=function(C,J){return X.H.useMemo(C,J)},_e.useOptimistic=function(C,J){return X.H.useOptimistic(C,J)},_e.useReducer=function(C,J,_t){return X.H.useReducer(C,J,_t)},_e.useRef=function(C){return X.H.useRef(C)},_e.useState=function(C){return X.H.useState(C)},_e.useSyncExternalStore=function(C,J,_t){return X.H.useSyncExternalStore(C,J,_t)},_e.useTransition=function(){return X.H.useTransition()},_e.version="19.0.0",_e}var rg;function Ad(){return rg||(rg=1,Uf.exports=Ox()),Uf.exports}var de=Ad(),Nf={exports:{}},Ro={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Px(){return sg||(sg=1,function(o){function t(V,ct){var nt=V.length;V.push(ct);t:for(;0<nt;){var pt=nt-1>>>1,C=V[pt];if(0<l(C,ct))V[pt]=ct,V[nt]=C,nt=pt;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ct=V[0],nt=V.pop();if(nt!==ct){V[0]=nt;t:for(var pt=0,C=V.length,J=C>>>1;pt<J;){var _t=2*(pt+1)-1,Dt=V[_t],Z=_t+1,mt=V[Z];if(0>l(Dt,nt))Z<C&&0>l(mt,Dt)?(V[pt]=mt,V[Z]=nt,pt=Z):(V[pt]=Dt,V[_t]=nt,pt=_t);else if(Z<C&&0>l(mt,nt))V[pt]=mt,V[Z]=nt,pt=Z;else break t}}return ct}function l(V,ct){var nt=V.sortIndex-ct.sortIndex;return nt!==0?nt:V.id-ct.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,y=3,M=!1,T=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function D(V){for(var ct=i(m);ct!==null;){if(ct.callback===null)r(m);else if(ct.startTime<=V)r(m),ct.sortIndex=ct.expirationTime,t(p,ct);else break;ct=i(m)}}function z(V){if(R=!1,D(V),!T)if(i(p)!==null)T=!0,j();else{var ct=i(m);ct!==null&&ot(z,ct.startTime-V)}}var X=!1,k=-1,I=5,dt=-1;function P(){return!(o.unstable_now()-dt<I)}function E(){if(X){var V=o.unstable_now();dt=V;var ct=!0;try{t:{T=!1,R&&(R=!1,_(k),k=-1),M=!0;var nt=y;try{e:{for(D(V),x=i(p);x!==null&&!(x.expirationTime>V&&P());){var pt=x.callback;if(typeof pt=="function"){x.callback=null,y=x.priorityLevel;var C=pt(x.expirationTime<=V);if(V=o.unstable_now(),typeof C=="function"){x.callback=C,D(V),ct=!0;break e}x===i(p)&&r(p),D(V)}else r(p);x=i(p)}if(x!==null)ct=!0;else{var J=i(m);J!==null&&ot(z,J.startTime-V),ct=!1}}break t}finally{x=null,y=nt,M=!1}ct=void 0}}finally{ct?N():X=!1}}}var N;if(typeof B=="function")N=function(){B(E)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Et=ft.port2;ft.port1.onmessage=E,N=function(){Et.postMessage(null)}}else N=function(){v(E,0)};function j(){X||(X=!0,N())}function ot(V,ct){k=v(function(){V(o.unstable_now())},ct)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){T||M||(T=!0,j())},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ct=3;break;default:ct=y}var nt=y;y=ct;try{return V()}finally{y=nt}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,ct){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var nt=y;y=V;try{return ct()}finally{y=nt}},o.unstable_scheduleCallback=function(V,ct,nt){var pt=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?pt+nt:pt):nt=pt,V){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=nt+C,V={id:g++,callback:ct,priorityLevel:V,startTime:nt,expirationTime:C,sortIndex:-1},nt>pt?(V.sortIndex=nt,t(m,V),i(p)===null&&V===i(m)&&(R?(_(k),k=-1):R=!0,ot(z,nt-pt))):(V.sortIndex=C,t(p,V),T||M||(T=!0,j())),V},o.unstable_shouldYield=P,o.unstable_wrapCallback=function(V){var ct=y;return function(){var nt=y;y=ct;try{return V.apply(this,arguments)}finally{y=nt}}}}(Pf)),Pf}var og;function zx(){return og||(og=1,Of.exports=Px()),Of.exports}var zf={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Bx(){if(lg)return Ln;lg=1;var o=Ad();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},Ln.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Ln.requestFormReset=function(p){r.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.0.0",Ln}var cg;function Fx(){if(cg)return zf.exports;cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zf.exports=Bx(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Ix(){if(ug)return Ro;ug=1;var o=zx(),t=Ad(),i=Fx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),M=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),z=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case T:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case B:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,N,ft;function Et(e){if(N===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+e+ft}var j=!1;function ot(e,n){if(!e||j)return"";j=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(vt){var ut=vt}Reflect.construct(e,[],Ct)}else{try{Ct.call()}catch(vt){ut=vt}e.call(Ct.prototype)}}else{try{throw Error()}catch(vt){ut=vt}(Ct=e())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(vt){if(vt&&ut&&typeof vt.stack=="string")return[vt.stack,ut.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],w=f[1];if(S&&w){var F=S.split(`
`),$=w.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===$.length)for(s=F.length-1,c=$.length-1;1<=s&&0<=c&&F[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==$[c]){var yt=`
`+F[s].replace(" at new "," at ");return e.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",e.displayName)),yt}while(1<=s&&0<=c);break}}}finally{j=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Et(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return e=ot(e.type,!1),e;case 11:return e=ot(e.type.render,!1),e;case 1:return e=ot(e.type,!0),e;default:return""}}function ct(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nt(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function pt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C(e){if(nt(e)!==e)throw Error(r(188))}function J(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),e;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,w=c.child;w;){if(w===a){S=!0,a=c,s=f;break}if(w===s){S=!0,s=c,a=f;break}w=w.sibling}if(!S){for(w=f.child;w;){if(w===a){S=!0,a=f,s=c;break}if(w===s){S=!0,s=f,a=c;break}w=w.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _t(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_t(e),n!==null)return n;e=e.sibling}return null}var Dt=Array.isArray,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt={pending:!1,data:null,method:null,action:null},wt=[],Yt=-1;function Vt(e){return{current:e}}function kt(e){0>Yt||(e.current=wt[Yt],wt[Yt]=null,Yt--)}function ee(e,n){Yt++,wt[Yt]=e.current,e.current=n}var ie=Vt(null),et=Vt(null),Oe=Vt(null),ae=Vt(null);function le(e,n){switch(ee(Oe,n),ee(et,e),ee(ie,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Lm(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Lm(e),n=Um(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}kt(ie),ee(ie,n)}function Qt(){kt(ie),kt(et),kt(Oe)}function Ne(e){e.memoizedState!==null&&ee(ae,e);var n=ie.current,a=Um(n,e.type);n!==a&&(ee(et,e),ee(ie,a))}function ue(e){et.current===e&&(kt(ie),kt(et)),ae.current===e&&(kt(ae),Mo._currentValue=mt)}var L=Object.prototype.hasOwnProperty,A=o.unstable_scheduleCallback,lt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,Rt=o.unstable_requestPaint,K=o.unstable_now,st=o.unstable_getCurrentPriorityLevel,it=o.unstable_ImmediatePriority,ht=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,At=o.unstable_LowPriority,rt=o.unstable_IdlePriority,se=o.log,jt=o.unstable_setDisableYieldValue,Ut=null,Bt=null;function Gt(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ut,e,void 0,(e.current.flags&128)===128)}catch{}}function Nt(e){if(typeof se=="function"&&jt(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Ut,e)}catch{}}var O=Math.clz32?Math.clz32:It,gt=Math.log,Lt=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(gt(e)/Lt|0)|0}var U=128,bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=Mt(a):(f&=w,f!==0?s=Mt(f):e||(S=w&~S,S!==0&&(s=Mt(S))))):(w=a&~c,w!==0?s=Mt(w):f!==0?s=Mt(f):e||(S=a&~S,S!==0&&(s=Mt(S)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ve(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ce(){var e=U;return U<<=1,!(U&4194176)&&(U=128),e}function ye(){var e=bt;return bt<<=1,!(bt&62914560)&&(bt=4194304),e}function Me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function he(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function De(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var yt=31-O(a),Ct=1<<yt;w[yt]=0,F[yt]=-1;var ut=$[yt];if(ut!==null)for($[yt]=null,yt=0;yt<ut.length;yt++){var vt=ut[yt];vt!==null&&(vt.lane&=-536870913)}a&=~Ct}s!==0&&Ye(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Ye(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-O(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function fn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-O(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ni(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function wi(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Km(e.type))}function nn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var gn=Math.random().toString(36).slice(2),je="__reactFiber$"+gn,Je="__reactProps$"+gn,ii="__reactContainer$"+gn,Ft="__reactEvents$"+gn,qt="__reactListeners$"+gn,b="__reactHandles$"+gn,H="__reactResources$"+gn,G="__reactMarker$"+gn;function W(e){delete e[je],delete e[Je],delete e[Ft],delete e[qt],delete e[b]}function q(e){var n=e[je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ii]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Pm(e);e!==null;){if(a=e[je])return a;e=Pm(e)}return n}e=a,a=e.parentNode}return null}function St(e){if(e=e[je]||e[ii]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ot(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Pt(e){var n=e[H];return n||(n=e[H]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ht(e){e[G]=!0}var Zt=new Set,ne={};function te(e,n){Ae(e,n),Ae(e+"Capture",n)}function Ae(e,n){for(ne[e]=n,e=0;e<n.length;e++)Zt.add(n[e])}var ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rn={},Be={};function pe(e){return L.call(Be,e)?!0:L.call(Rn,e)?!1:Ge.test(e)?Be[e]=!0:(Rn[e]=!0,!1)}function Ri(e,n,a){if(pe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function _n(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gi(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vn(e){var n=gi(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function an(e){e._valueTracker||(e._valueTracker=vn(e))}function Ci(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=gi(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function Cn(e){return e.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(e,n,a,s,c,f,S,w){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ze(n)):e.value!==""+Ze(n)&&(e.value=""+Ze(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Cc(e,S,Ze(n)):a!=null?Cc(e,S,Ze(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Ze(w):e.removeAttribute("name")}function Os(e,n,a,s,c,f,S,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=w?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Cc(e,n,a){n==="number"&&ua(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Tr(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Bd(e,n,a){if(n!=null&&(n=""+Ze(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ze(a):""}function Fd(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ze(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Ar(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var C0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Id(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||C0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Id(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Id(e,f,n[f])}function Dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return L0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Lc=null;function Uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Rr=null;function Gd(e){var n=St(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ns(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Je]||null;if(!c)throw Error(r(90));Ns(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ci(s)}break t;case"textarea":Bd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(e,!!a.multiple,n,!1)}}}var Nc=!1;function Vd(e,n,a){if(Nc)return e(n,a);Nc=!0;try{var s=e(n);return s}finally{if(Nc=!1,(wr!==null||Rr!==null)&&(bl(),wr&&(n=wr,e=Rr,Rr=wr=null,Gd(n),e)))for(n=0;n<e.length;n++)Gd(e[n])}}function Ps(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(ze)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Oc=!1}var fa=null,Pc=null,Vo=null;function kd(){if(Vo)return Vo;var e,n=Pc,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Vo=c.slice(e,1<s?1-s:void 0)}function ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Wd(){return!1}function Vn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Wd,this.isPropagationStopped=Wd,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Vn(Xa),Bs=E({},Xa,{view:0,detail:0}),U0=Vn(Bs),zc,Bc,Fs,qo=E({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(zc=e.screenX-Fs.screenX,Bc=e.screenY-Fs.screenY):Bc=zc=0,Fs=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),Xd=Vn(qo),N0=E({},qo,{dataTransfer:0}),O0=Vn(N0),P0=E({},Bs,{relatedTarget:0}),Fc=Vn(P0),z0=E({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Vn(z0),F0=E({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=Vn(F0),H0=E({},Xa,{data:0}),qd=Vn(H0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=k0[e])?!!n[e]:!1}function Ic(){return W0}var X0=E({},Bs,{key:function(e){if(e.key){var n=G0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q0=Vn(X0),Y0=E({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=Vn(Y0),j0=E({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Z0=Vn(j0),K0=E({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=Vn(K0),J0=E({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=Vn(J0),tv=E({},Xa,{newState:0,oldState:0}),ev=Vn(tv),nv=[9,13,27,32],Hc=ze&&"CompositionEvent"in window,Is=null;ze&&"documentMode"in document&&(Is=document.documentMode);var iv=ze&&"TextEvent"in window&&!Is,jd=ze&&(!Hc||Is&&8<Is&&11>=Is),Zd=" ",Kd=!1;function Qd(e,n){switch(e){case"keyup":return nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function av(e,n){switch(e){case"compositionend":return Jd(n);case"keypress":return n.which!==32?null:(Kd=!0,Zd);case"textInput":return e=n.data,e===Zd&&Kd?null:e;default:return null}}function rv(e,n){if(Cr)return e==="compositionend"||!Hc&&Qd(e,n)?(e=kd(),Vo=Pc=fa=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jd&&n.locale!=="ko"?null:n.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sv[e.type]:n==="textarea"}function th(e,n,a,s){wr?Rr?Rr.push(s):Rr=[s]:wr=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function ov(e){Am(e,0)}function Yo(e){var n=Ot(e);if(Ci(n))return e}function eh(e,n){if(e==="change")return n}var nh=!1;if(ze){var Gc;if(ze){var Vc="oninput"in document;if(!Vc){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Vc=typeof ih.oninput=="function"}Gc=Vc}else Gc=!1;nh=Gc&&(!document.documentMode||9<document.documentMode)}function ah(){Hs&&(Hs.detachEvent("onpropertychange",rh),Gs=Hs=null)}function rh(e){if(e.propertyName==="value"&&Yo(Gs)){var n=[];th(n,Gs,e,Uc(e)),Vd(ov,n)}}function lv(e,n,a){e==="focusin"?(ah(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",rh)):e==="focusout"&&ah()}function cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Gs)}function uv(e,n){if(e==="click")return Yo(n)}function fv(e,n){if(e==="input"||e==="change")return Yo(n)}function dv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:dv;function Vs(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!L.call(n,c)||!jn(e[c],n[c]))return!1}return!0}function sh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oh(e,n){var a=sh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=sh(a)}}function lh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ch(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ua(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ua(e.document)}return n}function kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hv(e,n){var a=ch(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&lh(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=oh(n,f);var S=oh(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var pv=ze&&"documentMode"in document&&11>=document.documentMode,Dr=null,Wc=null,ks=null,Xc=!1;function uh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Dr==null||Dr!==ua(s)||(s=Dr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Dr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},qc={},fh={};ze&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ya(e){if(qc[e])return qc[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fh)return qc[e]=n[a];return e}var dh=Ya("animationend"),hh=Ya("animationiteration"),ph=Ya("animationstart"),mv=Ya("transitionrun"),gv=Ya("transitionstart"),_v=Ya("transitioncancel"),mh=Ya("transitionend"),gh=new Map,_h="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _i(e,n){gh.set(e,n),te(n,[e])}var ai=[],Ur=0,Yc=0;function jo(){for(var e=Ur,n=Yc=Ur=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&vh(a,c,f)}}function Zo(e,n,a,s){ai[Ur++]=e,ai[Ur++]=n,ai[Ur++]=a,ai[Ur++]=s,Yc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function jc(e,n,a,s){return Zo(e,n,a,s),Ko(e)}function da(e,n){return Zo(e,null,null,n),Ko(e)}function vh(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-O(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Ko(e){if(50<mo)throw mo=0,tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Nr={},xh=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=xh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ct(n)},xh.set(e,n),n)}return{value:e,source:n,stack:ct(n)}}var Or=[],Pr=0,Qo=null,Jo=0,si=[],oi=0,ja=null,Ii=1,Hi="";function Za(e,n){Or[Pr++]=Jo,Or[Pr++]=Qo,Qo=e,Jo=n}function yh(e,n,a){si[oi++]=Ii,si[oi++]=Hi,si[oi++]=ja,ja=e;var s=Ii;e=Hi;var c=32-O(s)-1;s&=~(1<<c),a+=1;var f=32-O(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Ii=1<<32-O(n)+c|a<<c|s,Hi=f+e}else Ii=1<<f|a<<c|s,Hi=e}function Zc(e){e.return!==null&&(Za(e,1),yh(e,1,0))}function Kc(e){for(;e===Qo;)Qo=Or[--Pr],Or[Pr]=null,Jo=Or[--Pr],Or[Pr]=null;for(;e===ja;)ja=si[--oi],si[oi]=null,Hi=si[--oi],si[oi]=null,Ii=si[--oi],si[oi]=null}var Pn=null,En=null,Le=!1,vi=null,Di=!1,Qc=Error(r(519));function Ka(e){var n=Error(r(418,""));throw qs(ri(n,e)),Qc}function Sh(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[je]=e,n[Je]=s,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)we(_o[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),an(n);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Fd(n,s.value,s.defaultValue,s.children),an(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Dm(n.textContent,a)?(s.popover!=null&&(we("beforetoggle",n),we("toggle",n)),s.onScroll!=null&&we("scroll",n),s.onScrollEnd!=null&&we("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Ka(e)}function Mh(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 3:case 27:Di=!0;return;case 5:case 13:Di=!1;return;default:Pn=Pn.return}}function Ws(e){if(e!==Pn)return!1;if(!Le)return Mh(e),Le=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&En&&Ka(e),Mh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){En=yi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}En=null}}else En=Pn?yi(e.stateNode.nextSibling):null;return!0}function Xs(){En=Pn=null,Le=!1}function qs(e){vi===null?vi=[e]:vi.push(e)}var Ys=Error(r(460)),Eh=Error(r(474)),Jc={then:function(){}};function bh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $o(){}function Th(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Ys?Error(r(483)):e;default:if(typeof n.status=="string")n.then($o,$o);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Ys?Error(r(483)):e}throw js=n,Ys}}var js=null;function Ah(){if(js===null)throw Error(r(459));var e=js;return js=null,e}var zr=null,Zs=0;function tl(e){var n=Zs;return Zs+=1,zr===null&&(zr=[]),Th(zr,e,n)}function Ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function el(e,n){throw n.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wh(e){var n=e._init;return n(e._payload)}function Rh(e){function n(tt,Q){if(e){var at=tt.deletions;at===null?(tt.deletions=[Q],tt.flags|=16):at.push(Q)}}function a(tt,Q){if(!e)return null;for(;Q!==null;)n(tt,Q),Q=Q.sibling;return null}function s(tt){for(var Q=new Map;tt!==null;)tt.key!==null?Q.set(tt.key,tt):Q.set(tt.index,tt),tt=tt.sibling;return Q}function c(tt,Q){return tt=ba(tt,Q),tt.index=0,tt.sibling=null,tt}function f(tt,Q,at){return tt.index=at,e?(at=tt.alternate,at!==null?(at=at.index,at<Q?(tt.flags|=33554434,Q):at):(tt.flags|=33554434,Q)):(tt.flags|=1048576,Q)}function S(tt){return e&&tt.alternate===null&&(tt.flags|=33554434),tt}function w(tt,Q,at,Tt){return Q===null||Q.tag!==6?(Q=qu(at,tt.mode,Tt),Q.return=tt,Q):(Q=c(Q,at),Q.return=tt,Q)}function F(tt,Q,at,Tt){var $t=at.type;return $t===p?yt(tt,Q,at.props.children,Tt,at.key):Q!==null&&(Q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===B&&wh($t)===Q.type)?(Q=c(Q,at.props),Ks(Q,at),Q.return=tt,Q):(Q=xl(at.type,at.key,at.props,null,tt.mode,Tt),Ks(Q,at),Q.return=tt,Q)}function $(tt,Q,at,Tt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==at.containerInfo||Q.stateNode.implementation!==at.implementation?(Q=Yu(at,tt.mode,Tt),Q.return=tt,Q):(Q=c(Q,at.children||[]),Q.return=tt,Q)}function yt(tt,Q,at,Tt,$t){return Q===null||Q.tag!==7?(Q=sr(at,tt.mode,Tt,$t),Q.return=tt,Q):(Q=c(Q,at),Q.return=tt,Q)}function Ct(tt,Q,at){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=qu(""+Q,tt.mode,at),Q.return=tt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case h:return at=xl(Q.type,Q.key,Q.props,null,tt.mode,at),Ks(at,Q),at.return=tt,at;case d:return Q=Yu(Q,tt.mode,at),Q.return=tt,Q;case B:var Tt=Q._init;return Q=Tt(Q._payload),Ct(tt,Q,at)}if(Dt(Q)||k(Q))return Q=sr(Q,tt.mode,at,null),Q.return=tt,Q;if(typeof Q.then=="function")return Ct(tt,tl(Q),at);if(Q.$$typeof===M)return Ct(tt,gl(tt,Q),at);el(tt,Q)}return null}function ut(tt,Q,at,Tt){var $t=Q!==null?Q.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return $t!==null?null:w(tt,Q,""+at,Tt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case h:return at.key===$t?F(tt,Q,at,Tt):null;case d:return at.key===$t?$(tt,Q,at,Tt):null;case B:return $t=at._init,at=$t(at._payload),ut(tt,Q,at,Tt)}if(Dt(at)||k(at))return $t!==null?null:yt(tt,Q,at,Tt,null);if(typeof at.then=="function")return ut(tt,Q,tl(at),Tt);if(at.$$typeof===M)return ut(tt,Q,gl(tt,at),Tt);el(tt,at)}return null}function vt(tt,Q,at,Tt,$t){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return tt=tt.get(at)||null,w(Q,tt,""+Tt,$t);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case h:return tt=tt.get(Tt.key===null?at:Tt.key)||null,F(Q,tt,Tt,$t);case d:return tt=tt.get(Tt.key===null?at:Tt.key)||null,$(Q,tt,Tt,$t);case B:var Ee=Tt._init;return Tt=Ee(Tt._payload),vt(tt,Q,at,Tt,$t)}if(Dt(Tt)||k(Tt))return tt=tt.get(at)||null,yt(Q,tt,Tt,$t,null);if(typeof Tt.then=="function")return vt(tt,Q,at,tl(Tt),$t);if(Tt.$$typeof===M)return vt(tt,Q,at,gl(Q,Tt),$t);el(Q,Tt)}return null}function re(tt,Q,at,Tt){for(var $t=null,Ee=null,oe=Q,fe=Q=0,Sn=null;oe!==null&&fe<at.length;fe++){oe.index>fe?(Sn=oe,oe=null):Sn=oe.sibling;var Ue=ut(tt,oe,at[fe],Tt);if(Ue===null){oe===null&&(oe=Sn);break}e&&oe&&Ue.alternate===null&&n(tt,oe),Q=f(Ue,Q,fe),Ee===null?$t=Ue:Ee.sibling=Ue,Ee=Ue,oe=Sn}if(fe===at.length)return a(tt,oe),Le&&Za(tt,fe),$t;if(oe===null){for(;fe<at.length;fe++)oe=Ct(tt,at[fe],Tt),oe!==null&&(Q=f(oe,Q,fe),Ee===null?$t=oe:Ee.sibling=oe,Ee=oe);return Le&&Za(tt,fe),$t}for(oe=s(oe);fe<at.length;fe++)Sn=vt(oe,tt,fe,at[fe],Tt),Sn!==null&&(e&&Sn.alternate!==null&&oe.delete(Sn.key===null?fe:Sn.key),Q=f(Sn,Q,fe),Ee===null?$t=Sn:Ee.sibling=Sn,Ee=Sn);return e&&oe.forEach(function(La){return n(tt,La)}),Le&&Za(tt,fe),$t}function ge(tt,Q,at,Tt){if(at==null)throw Error(r(151));for(var $t=null,Ee=null,oe=Q,fe=Q=0,Sn=null,Ue=at.next();oe!==null&&!Ue.done;fe++,Ue=at.next()){oe.index>fe?(Sn=oe,oe=null):Sn=oe.sibling;var La=ut(tt,oe,Ue.value,Tt);if(La===null){oe===null&&(oe=Sn);break}e&&oe&&La.alternate===null&&n(tt,oe),Q=f(La,Q,fe),Ee===null?$t=La:Ee.sibling=La,Ee=La,oe=Sn}if(Ue.done)return a(tt,oe),Le&&Za(tt,fe),$t;if(oe===null){for(;!Ue.done;fe++,Ue=at.next())Ue=Ct(tt,Ue.value,Tt),Ue!==null&&(Q=f(Ue,Q,fe),Ee===null?$t=Ue:Ee.sibling=Ue,Ee=Ue);return Le&&Za(tt,fe),$t}for(oe=s(oe);!Ue.done;fe++,Ue=at.next())Ue=vt(oe,tt,fe,Ue.value,Tt),Ue!==null&&(e&&Ue.alternate!==null&&oe.delete(Ue.key===null?fe:Ue.key),Q=f(Ue,Q,fe),Ee===null?$t=Ue:Ee.sibling=Ue,Ee=Ue);return e&&oe.forEach(function(Lx){return n(tt,Lx)}),Le&&Za(tt,fe),$t}function en(tt,Q,at,Tt){if(typeof at=="object"&&at!==null&&at.type===p&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case h:t:{for(var $t=at.key;Q!==null;){if(Q.key===$t){if($t=at.type,$t===p){if(Q.tag===7){a(tt,Q.sibling),Tt=c(Q,at.props.children),Tt.return=tt,tt=Tt;break t}}else if(Q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===B&&wh($t)===Q.type){a(tt,Q.sibling),Tt=c(Q,at.props),Ks(Tt,at),Tt.return=tt,tt=Tt;break t}a(tt,Q);break}else n(tt,Q);Q=Q.sibling}at.type===p?(Tt=sr(at.props.children,tt.mode,Tt,at.key),Tt.return=tt,tt=Tt):(Tt=xl(at.type,at.key,at.props,null,tt.mode,Tt),Ks(Tt,at),Tt.return=tt,tt=Tt)}return S(tt);case d:t:{for($t=at.key;Q!==null;){if(Q.key===$t)if(Q.tag===4&&Q.stateNode.containerInfo===at.containerInfo&&Q.stateNode.implementation===at.implementation){a(tt,Q.sibling),Tt=c(Q,at.children||[]),Tt.return=tt,tt=Tt;break t}else{a(tt,Q);break}else n(tt,Q);Q=Q.sibling}Tt=Yu(at,tt.mode,Tt),Tt.return=tt,tt=Tt}return S(tt);case B:return $t=at._init,at=$t(at._payload),en(tt,Q,at,Tt)}if(Dt(at))return re(tt,Q,at,Tt);if(k(at)){if($t=k(at),typeof $t!="function")throw Error(r(150));return at=$t.call(at),ge(tt,Q,at,Tt)}if(typeof at.then=="function")return en(tt,Q,tl(at),Tt);if(at.$$typeof===M)return en(tt,Q,gl(tt,at),Tt);el(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Q!==null&&Q.tag===6?(a(tt,Q.sibling),Tt=c(Q,at),Tt.return=tt,tt=Tt):(a(tt,Q),Tt=qu(at,tt.mode,Tt),Tt.return=tt,tt=Tt),S(tt)):a(tt,Q)}return function(tt,Q,at,Tt){try{Zs=0;var $t=en(tt,Q,at,Tt);return zr=null,$t}catch(oe){if(oe===Ys)throw oe;var Ee=fi(29,oe,null,tt.mode);return Ee.lanes=Tt,Ee.return=tt,Ee}finally{}}}var Qa=Rh(!0),Ch=Rh(!1),Br=Vt(null),nl=Vt(0);function Dh(e,n){e=Qi,ee(nl,e),ee(Br,n),Qi=e|n.baseLanes}function $c(){ee(nl,Qi),ee(Br,Br.current)}function tu(){Qi=nl.current,kt(Br),kt(nl)}var li=Vt(null),Li=null;function ha(e){var n=e.alternate;ee(dn,dn.current&1),ee(li,e),Li===null&&(n===null||Br.current!==null||n.memoizedState!==null)&&(Li=e)}function Lh(e){if(e.tag===22){if(ee(dn,dn.current),ee(li,e),Li===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Li=e)}}else pa()}function pa(){ee(dn,dn.current),ee(li,li.current)}function Gi(e){kt(li),Li===e&&(Li=null),kt(dn)}var dn=Vt(0);function il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},xv=o.unstable_scheduleCallback,yv=o.unstable_NormalPriority,hn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new vv,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&xv(yv,function(){e.controller.abort()})}var Js=null,nu=0,Fr=0,Ir=null;function Sv(e,n){if(Js===null){var a=Js=[];nu=0,Fr=cf(),Ir={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Uh,Uh),n}function Uh(){if(--nu===0&&Js!==null){Ir!==null&&(Ir.status="fulfilled");var e=Js;Js=null,Fr=0,Ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Nh=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sv(e,n),Nh!==null&&Nh(e,n)};var Ja=Vt(null);function iu(){var e=Ja.current;return e!==null?e:ke.pooledCache}function al(e,n){n===null?ee(Ja,Ja.current):ee(Ja,n.pool)}function Oh(){var e=iu();return e===null?null:{parent:hn._currentValue,pool:e}}var ma=0,Se=null,Fe=null,on=null,rl=!1,Hr=!1,$a=!1,sl=0,$s=0,Gr=null,Ev=0;function rn(){throw Error(r(321))}function au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function ru(e,n,a,s,c,f){return ma=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?tr:ga,$a=!1,f=a(s,c),$a=!1,Hr&&(f=zh(n,a,s,c)),Ph(e),f}function Ph(e){P.H=Ui;var n=Fe!==null&&Fe.next!==null;if(ma=0,on=Fe=Se=null,rl=!1,$s=0,Gr=null,n)throw Error(r(300));e===null||xn||(e=e.dependencies,e!==null&&ml(e)&&(xn=!0))}function zh(e,n,a,s){Se=e;var c=0;do{if(Hr&&(Gr=null),$s=0,Hr=!1,25<=c)throw Error(r(301));if(c+=1,on=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=er,f=n(a,s)}while(Hr);return f}function bv(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(Se.flags|=1024),n}function su(){var e=sl!==0;return sl=0,e}function ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function lu(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}ma=0,on=Fe=Se=null,Hr=!1,$s=sl=0,Gr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Se.memoizedState=on=e:on=on.next=e,on}function ln(){if(Fe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=on===null?Se.memoizedState:on.next;if(n!==null)on=n,Fe=e;else{if(e===null)throw Se.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?Se.memoizedState=on=e:on=on.next=e}return on}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(e){var n=$s;return $s+=1,Gr===null&&(Gr=[]),e=Th(Gr,e,n),n=Se,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?tr:ga),e}function ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===M)return Dn(e)}throw Error(r(438,String(e)))}function cu(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=z;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function cl(e){var n=ln();return uu(n,Fe,e)}function uu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var w=S=null,F=null,$=n,yt=!1;do{var Ct=$.lane&-536870913;if(Ct!==$.lane?(Re&Ct)===Ct:(ma&Ct)===Ct){var ut=$.revertLane;if(ut===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Ct===Fr&&(yt=!0);else if((ma&ut)===ut){$=$.next,ut===Fr&&(yt=!0);continue}else Ct={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(w=F=Ct,S=f):F=F.next=Ct,Se.lanes|=ut,Ta|=ut;Ct=$.action,$a&&a(f,Ct),f=$.hasEagerState?$.eagerState:a(f,Ct)}else ut={lane:Ct,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(w=F=ut,S=f):F=F.next=ut,Se.lanes|=Ct,Ta|=Ct;$=$.next}while($!==null&&$!==n);if(F===null?S=f:F.next=w,!jn(f,e.memoizedState)&&(xn=!0,yt&&(a=Ir,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function fu(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);jn(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Bh(e,n,a){var s=Se,c=ln(),f=Le;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!jn((Fe||c).memoizedState,a);if(S&&(c.memoizedState=a,xn=!0),c=c.queue,pu(Hh.bind(null,s,c,e),[e]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Vr(9,Ih.bind(null,s,c,a,n),{destroy:void 0},null),ke===null)throw Error(r(349));f||ma&60||Fh(s,n,a)}return a}function Fh(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=ol(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ih(e,n,a,s){n.value=a,n.getSnapshot=s,Gh(n)&&Vh(e)}function Hh(e,n,a){return a(function(){Gh(n)&&Vh(e)})}function Gh(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function Vh(e){var n=da(e,2);n!==null&&zn(n,e,2)}function du(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),$a){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function kh(e,n,a,s){return e.baseState=a,uu(e,Fe,typeof s=="function"?s:Vi)}function Tv(e,n,a,s,c){if(dl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wh(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var w=a(c,s),F=P.S;F!==null&&F(S,w),Xh(e,n,w)}catch($){hu(e,n,$)}finally{P.T=f}}else try{f=a(c,s),Xh(e,n,f)}catch($){hu(e,n,$)}}function Xh(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qh(e,n,s)},function(s){return hu(e,n,s)}):qh(e,n,a)}function qh(e,n,a){n.status="fulfilled",n.value=a,Yh(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wh(e,a)))}function hu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yh(n),n=n.next;while(n!==s)}e.action=null}function Yh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jh(e,n){return n}function Zh(e,n){if(Le){var a=ke.formState;if(a!==null){t:{var s=Se;if(Le){if(En){e:{for(var c=En,f=Di;c.nodeType!==8;){if(!f){c=null;break e}if(c=yi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){En=yi(c.nextSibling),s=c.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jh,lastRenderedState:n},a.queue=s,a=hp.bind(null,Se,s),s.dispatch=a,s=du(!1),f=xu.bind(null,Se,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Tv.bind(null,Se,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Kh(e){var n=ln();return Qh(n,Fe,e)}function Qh(e,n,a){n=uu(e,n,jh)[0],e=cl(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var s=ln(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(Se.flags|=2048,Vr(9,Av.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function Av(e,n){e.action=n}function Jh(e){var n=ln(),a=Fe;if(a!==null)return Qh(n,a,e);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Vr(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=Se.updateQueue,n===null&&(n=ol(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function $h(){return ln().memoizedState}function ul(e,n,a,s){var c=kn();Se.flags|=e,c.memoizedState=Vr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(e,n,a,s){var c=ln();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&au(s,Fe.memoizedState.deps)?c.memoizedState=Vr(n,a,f,s):(Se.flags|=e,c.memoizedState=Vr(1|n,a,f,s))}function tp(e,n){ul(8390656,8,e,n)}function pu(e,n){fl(2048,8,e,n)}function ep(e,n){return fl(4,2,e,n)}function np(e,n){return fl(4,4,e,n)}function ip(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ap(e,n,a){a=a!=null?a.concat([e]):null,fl(4,4,ip.bind(null,n,e),a)}function mu(){}function rp(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function sp(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=e(),$a){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function gu(e,n,a){return a===void 0||ma&1073741824?e.memoizedState=n:(e.memoizedState=a,e=lm(),Se.lanes|=e,Ta|=e,a)}function op(e,n,a,s){return jn(a,n)?a:Br.current!==null?(e=gu(e,a,s),jn(e,n)||(xn=!0),e):ma&42?(e=lm(),Se.lanes|=e,Ta|=e,n):(xn=!0,e.memoizedState=a)}function lp(e,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=P.T,w={};P.T=w,xu(e,!1,n,a);try{var F=c(),$=P.S;if($!==null&&$(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var yt=Mv(F,s);eo(e,n,yt,Jn(e))}else eo(e,n,s,Jn(e))}catch(Ct){eo(e,n,{then:function(){},status:"rejected",reason:Ct},Jn())}finally{Z.p=f,P.T=S}}function wv(){}function _u(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=cp(e).queue;lp(e,c,n,mt,a===null?wv:function(){return up(e),a(s)})}function cp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:mt,baseState:mt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:mt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function up(e){var n=cp(e).next.queue;eo(e,n,{},Jn())}function vu(){return Dn(Mo)}function fp(){return ln().memoizedState}function dp(){return ln().memoizedState}function Rv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=xa(a);var s=ya(n,e,a);s!==null&&(zn(s,n,a),ao(s,n,a)),n={cache:eu()},e.payload=n;return}n=n.return}}function Cv(e,n,a){var s=Jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)?pp(n,a):(a=jc(e,n,a,s),a!==null&&(zn(a,e,s),mp(a,n,s)))}function hp(e,n,a){var s=Jn();eo(e,n,a,s)}function eo(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(e))pp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,w=f(S,a);if(c.hasEagerState=!0,c.eagerState=w,jn(w,S))return Zo(e,n,c,0),ke===null&&jo(),!1}catch{}finally{}if(a=jc(e,n,c,s),a!==null)return zn(a,e,s),mp(a,n,s),!0}return!1}function xu(e,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(r(479))}else n=jc(e,a,s,2),n!==null&&zn(n,e,2)}function dl(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function pp(e,n){Hr=rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function mp(e,n,a){if(a&4194176){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,fn(e,a)}}var Ui={readContext:Dn,use:ll,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn};Ui.useCacheRefresh=rn,Ui.useMemoCache=rn,Ui.useHostTransitionStatus=rn,Ui.useFormState=rn,Ui.useActionState=rn,Ui.useOptimistic=rn;var tr={readContext:Dn,use:ll,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:tp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ul(4194308,4,ip.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ul(4194308,4,e,n)},useInsertionEffect:function(e,n){ul(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if($a){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var c=a(n);if($a){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Cv.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=du(e);var n=e.queue,a=hp.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(e,n){var a=kn();return gu(a,e,n)},useTransition:function(){var e=du(!1);return e=lp.bind(null,Se,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=Se,c=kn();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));Re&60||Fh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tp(Hh.bind(null,s,f,e),[e]),s.flags|=2048,Vr(9,Ih.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var e=kn(),n=ke.identifierPrefix;if(Le){var a=Hi,s=Ii;a=(s&~(1<<32-O(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Ev++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return kn().memoizedState=Rv.bind(null,Se)}};tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Zh,tr.useActionState=Zh,tr.useOptimistic=function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xu.bind(null,Se,!0,a),a.dispatch=n,[e,n]};var ga={readContext:Dn,use:ll,useCallback:rp,useContext:Dn,useEffect:pu,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:sp,useReducer:cl,useRef:$h,useState:function(){return cl(Vi)},useDebugValue:mu,useDeferredValue:function(e,n){var a=ln();return op(a,Fe.memoizedState,e,n)},useTransition:function(){var e=cl(Vi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Bh,useId:fp};ga.useCacheRefresh=dp,ga.useMemoCache=cu,ga.useHostTransitionStatus=vu,ga.useFormState=Kh,ga.useActionState=Kh,ga.useOptimistic=function(e,n){var a=ln();return kh(a,Fe,e,n)};var er={readContext:Dn,use:ll,useCallback:rp,useContext:Dn,useEffect:pu,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:sp,useReducer:fu,useRef:$h,useState:function(){return fu(Vi)},useDebugValue:mu,useDeferredValue:function(e,n){var a=ln();return Fe===null?gu(a,e,n):op(a,Fe.memoizedState,e,n)},useTransition:function(){var e=fu(Vi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Bh,useId:fp};er.useCacheRefresh=dp,er.useMemoCache=cu,er.useHostTransitionStatus=vu,er.useFormState=Jh,er.useActionState=Jh,er.useOptimistic=function(e,n){var a=ln();return Fe!==null?kh(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])};function yu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Su={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=xa(s);c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,s),n!==null&&(zn(n,e,s),ao(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=xa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,s),n!==null&&(zn(n,e,s),ao(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=xa(a);s.tag=2,n!=null&&(s.callback=n),n=ya(e,s,a),n!==null&&(zn(n,e,a),ao(n,e,a))}};function gp(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function _p(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Su.enqueueReplaceState(n,n.state,null)}function nr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=E({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function vp(e){hl(e)}function xp(e){console.error(e)}function yp(e){hl(e)}function pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Sp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(e,n)},a}function Mp(e){return e=xa(e),e.tag=3,e}function Ep(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Sp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Sp(n,a,s),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function Dv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=li.current,a!==null){switch(a.tag){case 13:return Li===null?af():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(e,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(e,s,c)),!1}throw Error(r(435,a.tag))}return sf(e,s,c),af(),!1}if(Le)return n=li.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(e=Error(r(422),{cause:s}),qs(ri(e,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),qs(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=Mu(e.stateNode,s,c),Bu(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),ho===null?ho=[f]:ho.push(f),tn!==4&&(tn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Mu(a.stateNode,s,e),Bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Mp(c),Ep(c,e,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var bp=Error(r(461)),xn=!1;function bn(e,n,a,s){n.child=e===null?Ch(n,null,a,s):Qa(n,e.child,a,s)}function Tp(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var w in s)w!=="ref"&&(S[w]=s[w])}else S=s;return ar(n),s=ru(e,n,a,S,f,c),w=su(),e!==null&&!xn?(ou(e,n,c),ki(e,n,c)):(Le&&w&&Zc(n),n.flags|=1,bn(e,n,s,c),n.child)}function Ap(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wp(e,n,f,s,c)):(e=xl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Lu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(S,s)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=ba(f,s),e.ref=n.ref,e.return=n,n.child=e}function wp(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(xn=!1,n.pendingProps=s=f,Lu(e,c))e.flags&131072&&(xn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Eu(e,n,a,s,c)}function Rp(e,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(no(e,n),s.mode==="hidden"||f){if(n.flags&128){if(s=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Cp(e,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,S!==null?S.cachePool:null),S!==null?Dh(n,S):$c(),Lh(n);else return n.lanes=n.childLanes=536870912,Cp(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(al(n,S.cachePool),Dh(n,S),pa(),n.memoizedState=null):(e!==null&&al(n,null),$c(),pa());return bn(e,n,c,a),n.child}function Cp(e,n,a,s){var c=iu();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&al(n,null),$c(),Lh(n),e!==null&&io(e,n,s,!0),null}function no(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Eu(e,n,a,s,c){return ar(n),a=ru(e,n,a,s,void 0,c),s=su(),e!==null&&!xn?(ou(e,n,c),ki(e,n,c)):(Le&&s&&Zc(n),n.flags|=1,bn(e,n,a,c),n.child)}function Dp(e,n,a,s,c,f){return ar(n),n.updateQueue=null,a=zh(n,s,a,c),Ph(e),s=su(),e!==null&&!xn?(ou(e,n,f),ki(e,n,f)):(Le&&s&&Zc(n),n.flags|=1,bn(e,n,a,f),n.child)}function Lp(e,n,a,s,c){if(ar(n),n.stateNode===null){var f=Nr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Dn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Su,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Dn(S):Nr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Su.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,F=nr(a,w);f.props=F;var $=f.context,yt=a.contextType;S=Nr,typeof yt=="object"&&yt!==null&&(S=Dn(yt));var Ct=a.getDerivedStateFromProps;yt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,yt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||$!==S)&&_p(n,f,s,S),va=!1;var ut=n.memoizedState;f.state=ut,so(n,s,f,c),ro(),$=n.memoizedState,w||ut!==$||va?(typeof Ct=="function"&&(yu(n,a,Ct,s),$=n.memoizedState),(F=va||gp(n,a,F,s,ut,$,S))?(yt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(e,n),S=n.memoizedProps,yt=nr(a,S),f.props=yt,Ct=n.pendingProps,ut=f.context,$=a.contextType,F=Nr,typeof $=="object"&&$!==null&&(F=Dn($)),w=a.getDerivedStateFromProps,($=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Ct||ut!==F)&&_p(n,f,s,F),va=!1,ut=n.memoizedState,f.state=ut,so(n,s,f,c),ro();var vt=n.memoizedState;S!==Ct||ut!==vt||va||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof w=="function"&&(yu(n,a,w,s),vt=n.memoizedState),(yt=va||gp(n,a,yt,s,ut,vt,F)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,vt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,vt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=vt),f.props=s,f.state=vt,f.context=F,s=yt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,no(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Qa(n,e.child,null,c),n.child=Qa(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Up(e,n,a,s){return Xs(),n.flags|=256,bn(e,n,a,s),n.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:Oh()}}function Au(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function Np(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(c?ha(n):pa(),Le){var w=En,F;if(F=w){t:{for(F=w,w=Di;F.nodeType!==8;){if(!w){w=null;break t}if(F=yi(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(n.memoizedState={dehydrated:w,treeContext:ja!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912},F=fi(18,null,null,0),F.stateNode=w,F.return=n,n.child=F,Pn=n,En=null,F=!0):F=!1}F||Ka(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Gi(n)}return w=s.children,s=s.fallback,c?(pa(),c=n.mode,w=Ru({mode:"hidden",children:w},c),s=sr(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=Tu(a),c.childLanes=Au(e,S,a),n.memoizedState=bu,s):(ha(n),wu(n,w))}if(F=e.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Cu(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),c=s.fallback,w=n.mode,s=Ru({mode:"visible",children:s.children},w),c=sr(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Qa(n,e.child,null,a),s=n.child,s.memoizedState=Tu(a),s.childLanes=Au(e,S,a),n.memoizedState=bu,n=c);else if(ha(n),w.data==="$!"){if(S=w.nextSibling&&w.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,qs({value:s,source:null,stack:null}),n=Cu(e,n,a)}else if(xn||io(e,n,a,!1),S=(a&e.childLanes)!==0,xn||S){if(S=ke,S!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(S.suspendedLanes|a)?0:s,s!==0&&s!==F.retryLane)throw F.retryLane=s,da(e,s),zn(S,e,s),bp}w.data==="$?"||af(),n=Cu(e,n,a)}else w.data==="$?"?(n.flags|=128,n.child=e.child,n=Xv.bind(null,e),w._reactRetry=n,n=null):(e=F.treeContext,En=yi(w.nextSibling),Pn=n,Le=!0,vi=null,Di=!1,e!==null&&(si[oi++]=Ii,si[oi++]=Hi,si[oi++]=ja,Ii=e.id,Hi=e.overflow,ja=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(pa(),c=s.fallback,w=n.mode,F=e.child,$=F.sibling,s=ba(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&31457280,$!==null?c=ba($,c):(c=sr(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=e.child.memoizedState,w===null?w=Tu(a):(F=w.cachePool,F!==null?($=hn._currentValue,F=F.parent!==$?{parent:$,pool:$}:F):F=Oh(),w={baseLanes:w.baseLanes|a,cachePool:F}),c.memoizedState=w,c.childLanes=Au(e,S,a),n.memoizedState=bu,s):(ha(n),a=e.child,e=a.sibling,a=ba(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function wu(e,n){return n=Ru({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ru(e,n){return rm(e,n,0,null)}function Cu(e,n,a){return Qa(n,e.child,null,a),e=wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Op(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Nu(e.return,n,a)}function Du(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Pp(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(e,n,s.children,a),s=dn.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Op(e,a,n);else if(e.tag===19)Op(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(ee(dn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&il(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&il(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,!(a&n.childLanes))if(e!==null){if(io(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ba(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Lv(e,n,a){switch(n.tag){case 3:le(n,n.stateNode.containerInfo),_a(n,hn,e.memoizedState.cache),Xs();break;case 27:case 5:Ne(n);break;case 4:le(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):a&n.child.childLanes?Np(e,n,a):(ha(n),e=ki(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(io(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Pp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ee(dn,dn.current),s)break;return null;case 22:case 23:return n.lanes=0,Rp(e,n,a);case 24:_a(n,hn,e.memoizedState.cache)}return ki(e,n,a)}function zp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!Lu(e,a)&&!(n.flags&128))return xn=!1,Lv(e,n,a);xn=!!(e.flags&131072)}else xn=!1,Le&&n.flags&1048576&&yh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(e=nr(s,e),n.tag=1,n=Lp(null,n,s,e,a)):(n.tag=0,n=Eu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===T){n.tag=11,n=Tp(null,n,s,e,a);break t}else if(c===_){n.tag=14,n=Ap(null,n,s,e,a);break t}}throw n=dt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=nr(s,n.pendingProps),Lp(e,n,s,c,a);case 3:t:{if(le(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(e,n),so(n,f,null,a);var S=n.memoizedState;if(f=S.cache,_a(n,hn,f),f!==c.cache&&Ou(n,[hn],a,!0),ro(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Up(e,n,f,a);break t}else if(f!==s){s=ri(Error(r(424)),n),qs(s),n=Up(e,n,f,a);break t}else for(En=yi(n.stateNode.containerInfo.firstChild),Pn=n,Le=!0,vi=null,Di=!0,a=Ch(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),f===s){n=ki(e,n,a);break t}bn(e,n,f,a)}n=n.child}return n;case 26:return no(e,n),e===null?(a=Im(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,s=Ll(Oe.current).createElement(a),s[je]=n,s[Je]=e,Tn(s,a,e),Ht(s),n.stateNode=s):n.memoizedState=Im(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ne(n),e===null&&Le&&(s=n.stateNode=zm(n.type,n.pendingProps,Oe.current),Pn=n,Di=!0,En=yi(s.firstChild)),s=n.pendingProps.children,e!==null||Le?bn(e,n,s,a):n.child=Qa(n,null,s,a),no(e,n),n.child;case 5:return e===null&&Le&&((c=s=En)&&(s=ox(s,n.type,n.pendingProps,Di),s!==null?(n.stateNode=s,Pn=n,En=yi(s.firstChild),Di=!1,c=!0):c=!1),c||Ka(n)),Ne(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(e,n,bv,null,null,a),Mo._currentValue=c),no(e,n),bn(e,n,s,a),n.child;case 6:return e===null&&Le&&((e=a=En)&&(a=lx(a,n.pendingProps,Di),a!==null?(n.stateNode=a,Pn=n,En=null,e=!0):e=!1),e||Ka(n)),null;case 13:return Np(e,n,a);case 4:return le(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Qa(n,null,s,a):bn(e,n,s,a),n.child;case 11:return Tp(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,_a(n,n.type,s.value),bn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=Dn(c),s=s(c),n.flags|=1,bn(e,n,s,a),n.child;case 14:return Ap(e,n,n.type,n.pendingProps,a);case 15:return wp(e,n,n.type,n.pendingProps,a);case 19:return Pp(e,n,a);case 22:return Rp(e,n,a);case 24:return ar(n),s=Dn(hn),e===null?(c=iu(),c===null&&(c=ke,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),_a(n,hn,c)):(e.lanes&a&&(zu(e,n),so(n,null,null,a),ro()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,hn,s)):(s=f.cache,_a(n,hn,s),s!==c.cache&&Ou(n,[hn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Vt(null),ir=null,Wi=null;function _a(e,n,a){ee(Uu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Uu.current,kt(Uu)}function Nu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Ou(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var F=0;F<n.length;F++)if(w.context===n[F]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Nu(f.return,a,e),s||(S=null);break t}f=w.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=c.type;jn(c.pendingProps.value,S.value)||(e!==null?e.push(w):e=[w])}}else if(c===ae.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}c=c.return}e!==null&&Ou(n,e,a,s),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Bp(ir,e)}function gl(e,n){return ir===null&&ar(e),Bp(e,n)}function Bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var va=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Qe&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(e),vh(e,null,a),n}return Zo(e,s,n,a),Ko(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,fn(e,a)}}function Bu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function ro(){if(Fu){var e=Ir;if(e!==null)throw e}}function so(e,n,a,s){Fu=!1;var c=e.updateQueue;va=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var F=w,$=F.next;F.next=null,S===null?f=$:S.next=$,S=F;var yt=e.alternate;yt!==null&&(yt=yt.updateQueue,w=yt.lastBaseUpdate,w!==S&&(w===null?yt.firstBaseUpdate=$:w.next=$,yt.lastBaseUpdate=F))}if(f!==null){var Ct=c.baseState;S=0,yt=$=F=null,w=f;do{var ut=w.lane&-536870913,vt=ut!==w.lane;if(vt?(Re&ut)===ut:(s&ut)===ut){ut!==0&&ut===Fr&&(Fu=!0),yt!==null&&(yt=yt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var re=e,ge=w;ut=n;var en=a;switch(ge.tag){case 1:if(re=ge.payload,typeof re=="function"){Ct=re.call(en,Ct,ut);break t}Ct=re;break t;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ge.payload,ut=typeof re=="function"?re.call(en,Ct,ut):re,ut==null)break t;Ct=E({},Ct,ut);break t;case 2:va=!0}}ut=w.callback,ut!==null&&(e.flags|=64,vt&&(e.flags|=8192),vt=c.callbacks,vt===null?c.callbacks=[ut]:vt.push(ut))}else vt={lane:ut,tag:w.tag,payload:w.payload,callback:w.callback,next:null},yt===null?($=yt=vt,F=Ct):yt=yt.next=vt,S|=ut;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;vt=w,w=vt.next,vt.next=null,c.lastBaseUpdate=vt,c.shared.pending=null}}while(!0);yt===null&&(F=Ct),c.baseState=F,c.firstBaseUpdate=$,c.lastBaseUpdate=yt,f===null&&(c.shared.lanes=0),Ta|=S,e.lanes=S,e.memoizedState=Ct}}function Fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fp(a[e],n)}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(w){Ve(n,n.return,w)}}function Sa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,c=n;var F=a;try{w()}catch($){Ve(c,F,$)}}}s=s.next}while(s!==f)}}catch($){Ve(n,n.return,$)}}function Hp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(s){Ve(e,e.return,s)}}}function Gp(e,n,a){a.props=nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(e,n,s)}}function rr(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Ve(e,n,f)}}function Zn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(e,n,c)}else a.current=null}function Vp(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(e,e.return,c)}}function kp(e,n,a){try{var s=e.stateNode;nx(s,e.type,a,n),s[Je]=n}catch(c){Ve(e,e.return,c)}}function Wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Iu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Hu(e,n,a),e=e.sibling;e!==null;)Hu(e,n,a),e=e.sibling}function _l(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(_l(e,n,a),e=e.sibling;e!==null;)_l(e,n,a),e=e.sibling}var qi=!1,$e=!1,Gu=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,yn=null,qp=!1;function Uv(e,n){if(e=e.containerInfo,gf=Bl,e=ch(e),kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,w=-1,F=-1,$=0,yt=0,Ct=e,ut=null;e:for(;;){for(var vt;Ct!==a||c!==0&&Ct.nodeType!==3||(w=S+c),Ct!==f||s!==0&&Ct.nodeType!==3||(F=S+s),Ct.nodeType===3&&(S+=Ct.nodeValue.length),(vt=Ct.firstChild)!==null;)ut=Ct,Ct=vt;for(;;){if(Ct===e)break e;if(ut===a&&++$===c&&(w=S),ut===f&&++yt===s&&(F=S),(vt=Ct.nextSibling)!==null)break;Ct=ut,ut=Ct.parentNode}Ct=vt}a=w===-1||F===-1?null:{start:w,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:e,selectionRange:a},Bl=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var re=nr(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(re,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Ve(a,a.return,ge)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}return re=qp,qp=!1,re}function Yp(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&oo(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(w){Ve(a,a.return,w)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Ve(a,a.return,w)}}s&64&&Hp(a),s&512&&rr(a,a.return);break;case 3:if(ji(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ip(s,e)}catch(w){Ve(a,a.return,w)}}break;case 26:ji(e,a),s&512&&rr(a,a.return);break;case 27:case 5:ji(e,a),n===null&&s&4&&Vp(a),s&512&&rr(a,a.return);break;case 12:ji(e,a);break;case 13:ji(e,a),s&4&&Kp(e,a);break;case 22:if(c=a.memoizedState!==null||qi,!c){n=n!==null&&n.memoizedState!==null||$e;var f=qi,S=$e;qi=c,($e=n)&&!S?Ma(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=f,$e=S}s&512&&(a.memoizedProps.mode==="manual"?rr(a,a.return):Zn(a,a.return));break;default:ji(e,a)}}function jp(e){var n=e.alternate;n!==null&&(e.alternate=null,jp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&W(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cn=null,Kn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Zp(e,n,a),a=a.sibling}function Zp(e,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ut,a)}catch{}switch(a.tag){case 26:$e||Zn(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Zn(a,n);var s=cn,c=Kn;for(cn=a.stateNode,Yi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);W(a),cn=s,Kn=c;break;case 5:$e||Zn(a,n);case 6:c=cn;var f=Kn;if(cn=null,Yi(e,n,a),cn=c,Kn=f,cn!==null)if(Kn)try{e=cn,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(S){Ve(a,n,S)}else try{cn.removeChild(a.stateNode)}catch(S){Ve(a,n,S)}break;case 18:cn!==null&&(Kn?(n=cn,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),Ao(n)):yf(cn,a.stateNode));break;case 4:s=cn,c=Kn,cn=a.stateNode.containerInfo,Kn=!0,Yi(e,n,a),cn=s,Kn=c;break;case 0:case 11:case 14:case 15:$e||Sa(2,a,n),$e||Sa(4,a,n),Yi(e,n,a);break;case 1:$e||(Zn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Gp(a,n,s)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:$e||Zn(a,n),$e=(s=$e)||a.memoizedState!==null,Yi(e,n,a),$e=s;break;default:Yi(e,n,a)}}function Kp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Ve(n,n.return,a)}}function Nv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Xp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Xp),n;default:throw Error(r(435,e.tag))}}function Vu(e,n){var a=Nv(e);n.forEach(function(s){var c=qv.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function ci(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,w=S;t:for(;w!==null;){switch(w.tag){case 27:case 5:cn=w.stateNode,Kn=!1;break t;case 3:cn=w.stateNode.containerInfo,Kn=!0;break t;case 4:cn=w.stateNode.containerInfo,Kn=!0;break t}w=w.return}if(cn===null)throw Error(r(160));Zp(f,S,c),cn=null,Kn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Qp(n,e),n=n.sibling}var xi=null;function Qp(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ci(n,e),ui(e),s&4&&(Sa(3,e,e.return),oo(3,e),Sa(5,e,e.return));break;case 1:ci(n,e),ui(e),s&512&&($e||a===null||Zn(a,a.return)),s&64&&qi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=xi;if(ci(n,e),ui(e),s&512&&($e||a===null||Zn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[G]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[je]=e,Ht(f),s=f;break t;case"link":var S=Vm("link","href",c).get(s+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(f=S[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Vm("meta","content",c).get(s+(a.content||""))){for(w=0;w<S.length;w++)if(f=S[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[je]=e,Ht(f),s=f}e.stateNode=s}else km(c,e.type,e.stateNode);else e.stateNode=Gm(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?km(c,e.type,e.stateNode):Gm(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&kp(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var F=c.firstChild;F;){var $=F.nextSibling,yt=F.nodeName;F[G]||yt==="HEAD"||yt==="BODY"||yt==="SCRIPT"||yt==="STYLE"||yt==="LINK"&&F.rel.toLowerCase()==="stylesheet"||c.removeChild(F),F=$}for(var Ct=e.type,ut=c.attributes;ut.length;)c.removeAttributeNode(ut[0]);Tn(c,Ct,f),c[je]=e,c[Je]=f}catch(re){Ve(e,e.return,re)}}case 5:if(ci(n,e),ui(e),s&512&&($e||a===null||Zn(a,a.return)),e.flags&32){c=e.stateNode;try{Ar(c,"")}catch(re){Ve(e,e.return,re)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,kp(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(ci(n,e),ui(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(re){Ve(e,e.return,re)}}break;case 3:if(Ol=null,c=xi,xi=Ul(n.containerInfo),ci(n,e),xi=c,ui(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(re){Ve(e,e.return,re)}Gu&&(Gu=!1,Jp(e));break;case 4:s=xi,xi=Ul(e.stateNode.containerInfo),ci(n,e),ui(e),xi=s;break;case 12:ci(n,e),ui(e);break;case 13:ci(n,e),ui(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=K()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vu(e,s)));break;case 22:if(s&512&&($e||a===null||Zn(a,a.return)),F=e.memoizedState!==null,$=a!==null&&a.memoizedState!==null,yt=qi,Ct=$e,qi=yt||F,$e=Ct||$,ci(n,e),$e=Ct,qi=yt,ui(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=F?n._visibility&-2:n._visibility|1,F&&(n=qi||$e,a===null||$||n||kr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){$=a=n;try{if(c=$.stateNode,F)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=$.stateNode,w=$.memoizedProps.style;var vt=w!=null&&w.hasOwnProperty("display")?w.display:null;S.style.display=vt==null||typeof vt=="boolean"?"":(""+vt).trim()}}catch(re){Ve($,$.return,re)}}}else if(n.tag===6){if(a===null){$=n;try{$.stateNode.nodeValue=F?"":$.memoizedProps}catch(re){Ve($,$.return,re)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(e,a))));break;case 19:ci(n,e),ui(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vu(e,s)));break;case 21:break;default:ci(n,e),ui(e)}}function ui(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Wp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(e);_l(e,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(Ar(S,""),s.flags&=-33);var w=Iu(e);_l(e,w,S);break;case 3:case 4:var F=s.stateNode.containerInfo,$=Iu(e);Hu(e,$,F);break;default:throw Error(r(161))}}}catch(yt){Ve(e,e.return,yt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Jp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yp(e,n.alternate,n),n=n.sibling}function kr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),kr(n);break;case 1:Zn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gp(n,n.return,a),kr(n);break;case 26:case 27:case 5:Zn(n,n.return),kr(n);break;case 22:Zn(n,n.return),n.memoizedState===null&&kr(n);break;default:kr(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(c,f,a),oo(4,f);break;case 1:if(Ma(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ve(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Fp(F[c],w)}catch($){Ve(s,s.return,$)}}a&&S&64&&Hp(f),rr(f,f.return);break;case 26:case 27:case 5:Ma(c,f,a),a&&s===null&&S&4&&Vp(f),rr(f,f.return);break;case 12:Ma(c,f,a);break;case 13:Ma(c,f,a),a&&S&4&&Kp(c,f);break;case 22:f.memoizedState===null&&Ma(c,f,a),rr(f,f.return);break;default:Ma(c,f,a)}n=n.sibling}}function ku(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qs(a))}function Wu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e))}function Ea(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$p(e,n,a,s),n=n.sibling}function $p(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ea(e,n,a,s),c&2048&&oo(9,n);break;case 3:Ea(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e)));break;case 12:if(c&2048){Ea(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,w=f.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ve(n,n.return,F)}}else Ea(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ea(e,n,a,s):lo(e,n):f._visibility&4?Ea(e,n,a,s):(f._visibility|=4,Wr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ea(e,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ea(e,n,a,s)}}function Wr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,w=a,F=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:Wr(f,S,w,F,c),oo(8,S);break;case 23:break;case 22:var yt=S.stateNode;S.memoizedState!==null?yt._visibility&4?Wr(f,S,w,F,c):lo(f,S):(yt._visibility|=4,Wr(f,S,w,F,c)),c&&$&2048&&ku(S.alternate,S);break;case 24:Wr(f,S,w,F,c),c&&$&2048&&Wu(S.alternate,S);break;default:Wr(f,S,w,F,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&ku(s.alternate,s);break;case 24:lo(a,s),c&2048&&Wu(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Xr(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)tm(e),e=e.sibling}function tm(e){switch(e.tag){case 26:Xr(e),e.flags&co&&e.memoizedState!==null&&Sx(xi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e);break;case 3:case 4:var n=xi;xi=Ul(e.stateNode.containerInfo),Xr(e),xi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Xr(e),co=n):Xr(e));break;default:Xr(e)}}function em(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,im(s,e)}em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(e),e=e.sibling}function nm(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,vl(e)):uo(e);break;default:uo(e)}}function vl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,im(s,e)}em(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}e=e.sibling}}function im(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=e;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(jp(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}function Ov(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,n,a,s){return new Ov(e,n,a,s)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,n){var a=e.alternate;return a===null?(a=fi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")Xu(e)&&(S=1);else if(typeof e=="string")S=xx(e,a,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return sr(a.children,c,f,n);case m:S=8,c|=24;break;case g:return e=fi(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case R:return e=fi(13,a,n,c),e.elementType=R,e.lanes=f,e;case v:return e=fi(19,a,n,c),e.elementType=v,e.lanes=f,e;case D:return rm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case M:S=10;break t;case y:S=9;break t;case T:S=11;break t;case _:S=14;break t;case B:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=fi(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function sr(e,n,a,s){return e=fi(7,e,s,n),e.lanes=a,e}function rm(e,n,a,s){e=fi(22,e,s,n),e.elementType=D,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=da(f,2);S!==null&&(c._pendingVisibility|=2,zn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=da(f,2);S!==null&&(c._pendingVisibility&=-3,zn(S,f,2))}}};return e.stateNode=c,e}function qu(e,n,a){return e=fi(6,e,null,n),e.lanes=a,e}function Yu(e,n,a){return n=fi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zi(e){e.flags|=4}function sm(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wm(n)){if(n=li.current,n!==null&&((Re&4194176)===Re?Li!==null:(Re&62914560)!==Re&&!(Re&536870912)||n!==Li))throw js=Jc,Eh;e.flags|=8192}}function yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ye():536870912,e.lanes|=n,Yr|=n)}function fo(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Pv(e,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(hn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ws(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vi!==null&&(ef(vi),vi=null))),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Ke(n),sm(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Ke(n),sm(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==s&&Zi(n),Ke(n),n.flags&=-16777217),null;case 27:ue(n),a=Oe.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=ie.current,Ws(n)?Sh(n):(e=zm(c,s,a),n.stateNode=e,Zi(n))}return Ke(n),null;case 5:if(ue(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(e=ie.current,Ws(n))Sh(n);else{switch(c=Ll(Oe.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[je]=n,e[Je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Oe.current,Ws(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[je]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Dm(e.nodeValue,a)),e||Ka(n)}else e=Ll(e).createTextNode(s),e[je]=n,n.stateNode=e}return Ke(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ws(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[je]=n}else Xs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else vi!==null&&(ef(vi),vi=null),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Ke(n),null;case 4:return Qt(),e===null&&hf(n.stateNode.containerInfo),Ke(n),null;case 10:return Xi(n.type),Ke(n),null;case 19:if(kt(dn),c=n.memoizedState,c===null)return Ke(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)fo(c,!1);else{if(tn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=il(e),f!==null){for(n.flags|=128,fo(c,!1),e=f.updateQueue,n.updateQueue=e,yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return ee(dn,dn.current&1|2),n.child}e=e.sibling}c.tail!==null&&K()>Sl&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304)}else{if(!s)if(e=il(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,yl(n,e),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Le)return Ke(n),null}else 2*K()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=K(),n.sibling=null,e=dn.current,ee(dn,s?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Gi(n),tu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&kt(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(hn),Ke(n),null;case 25:return null}throw Error(r(156,n.tag))}function zv(e,n){switch(Kc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(hn),Qt(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return kt(dn),null;case 4:return Qt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Gi(n),tu(),e!==null&&kt(Ja),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(hn),null;case 25:return null;default:return null}}function om(e,n){switch(Kc(n),n.tag){case 3:Xi(hn),Qt();break;case 26:case 27:case 5:ue(n);break;case 4:Qt();break;case 13:Gi(n);break;case 19:kt(dn);break;case 10:Xi(n.type);break;case 22:case 23:Gi(n),tu(),e!==null&&kt(Ja);break;case 24:Xi(hn)}}var Bv={getCacheForType:function(e){var n=Dn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Fv=typeof WeakMap=="function"?WeakMap:Map,Qe=0,ke=null,Te=null,Re=0,We=0,Qn=null,Ki=!1,qr=!1,ju=!1,Qi=0,tn=0,Ta=0,or=0,Zu=0,di=0,Yr=0,ho=null,Ni=null,Ku=!1,Qu=0,Sl=1/0,Ml=null,Aa=null,El=!1,lr=null,po=0,Ju=0,$u=null,mo=0,tf=null;function Jn(){if(Qe&2&&Re!==0)return Re&-Re;if(P.T!==null){var e=Fr;return e!==0?e:cf()}return wi()}function lm(){di===0&&(di=!(Re&536870912)||Le?ce():536870912);var e=li.current;return e!==null&&(e.flags|=32),di}function zn(e,n,a){(e===ke&&We===2||e.cancelPendingCommit!==null)&&(jr(e,0),Ji(e,Re,di,!1)),he(e,a),(!(Qe&2)||e!==ke)&&(e===ke&&(!(Qe&2)&&(or|=a),tn===4&&Ji(e,Re,di,!1)),Oi(e))}function cm(e,n,a){if(Qe&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||Jt(e,n),c=s?Gv(e,n):rf(e,n,!0),f=s;do{if(c===0){qr&&!s&&Ji(e,n,0,!1);break}else if(c===6)Ji(e,n,0,!Ki);else{if(a=e.current.alternate,f&&!Iv(a)){c=rf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var w=e;c=ho;var F=w.current.memoizedState.isDehydrated;if(F&&(jr(w,S).flags|=256),S=rf(w,S,!1),S!==2){if(ju&&!F){w.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=Ni,Ni=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){jr(e,0),Ji(e,n,0,!0);break}t:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ji(s,n,di,!Ki);break t}break;case 2:Ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-K(),10<f)){if(Ji(s,n,di,!Ki),Xt(s,0)!==0)break t;s.timeoutHandle=Nm(um.bind(null,s,a,Ni,Ml,Ku,n,di,or,Yr,Ki,2,-0,0),f);break t}um(s,a,Ni,Ml,Ku,n,di,or,Yr,Ki,0,-0,0)}}break}while(!0);Oi(e)}function ef(e){Ni===null?Ni=e:Ni.push.apply(Ni,e)}function um(e,n,a,s,c,f,S,w,F,$,yt,Ct,ut){var vt=n.subtreeFlags;if((vt&8192||(vt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:yx},tm(n),n=Mx(),n!==null)){e.cancelPendingCommit=n(_m.bind(null,e,a,s,c,S,w,F,1,Ct,ut)),Ji(e,f,S,!$);return}_m(e,a,s,c,S,w,F,yt,Ct,ut)}function Iv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ji(e,n,a,s){n&=~Zu,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-O(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Ye(e,a,n)}function bl(){return Qe&6?!0:(go(0),!1)}function nf(){if(Te!==null){if(We===0)var e=Te.return;else e=Te,Wi=ir=null,lu(e),zr=null,Zs=0,e=Te;for(;e!==null;)om(e.alternate,e),e=e.return;Te=null}}function jr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nf(),ke=e,Te=a=ba(e.current,null),Re=n,We=0,Qn=null,Ki=!1,qr=Jt(e,n),ju=!1,Yr=di=Zu=or=Ta=tn=0,Ni=ho=null,Ku=!1,n&8&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-O(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,jo(),a}function fm(e,n){Se=null,P.H=Ui,n===Ys?(n=Ah(),We=3):n===Eh?(n=Ah(),We=4):We=n===bp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Te===null&&(tn=1,pl(e,ri(n,e.current)))}function dm(){var e=P.H;return P.H=Ui,e===null?Ui:e}function hm(){var e=P.A;return P.A=Bv,e}function af(){tn=4,Ki||(Re&4194176)!==Re&&li.current!==null||(qr=!0),!(Ta&134217727)&&!(or&134217727)||ke===null||Ji(ke,Re,di,!1)}function rf(e,n,a){var s=Qe;Qe|=2;var c=dm(),f=hm();(ke!==e||Re!==n)&&(Ml=null,jr(e,n)),n=!1;var S=tn;t:do try{if(We!==0&&Te!==null){var w=Te,F=Qn;switch(We){case 8:nf(),S=6;break t;case 3:case 2:case 6:li.current===null&&(n=!0);var $=We;if(We=0,Qn=null,Zr(e,w,F,$),a&&qr){S=0;break t}break;default:$=We,We=0,Qn=null,Zr(e,w,F,$)}}Hv(),S=tn;break}catch(yt){fm(e,yt)}while(!0);return n&&e.shellSuspendCounter++,Wi=ir=null,Qe=s,P.H=c,P.A=f,Te===null&&(ke=null,Re=0,jo()),S}function Hv(){for(;Te!==null;)pm(Te)}function Gv(e,n){var a=Qe;Qe|=2;var s=dm(),c=hm();ke!==e||Re!==n?(Ml=null,Sl=K()+500,jr(e,n)):qr=Jt(e,n);t:do try{if(We!==0&&Te!==null){n=Te;var f=Qn;e:switch(We){case 1:We=0,Qn=null,Zr(e,n,f,1);break;case 2:if(bh(f)){We=0,Qn=null,mm(n);break}n=function(){We===2&&ke===e&&(We=7),Oi(e)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:bh(f)?(We=0,Qn=null,mm(n)):(We=0,Qn=null,Zr(e,n,f,7));break;case 5:var S=null;switch(Te.tag){case 26:S=Te.memoizedState;case 5:case 27:var w=Te;if(!S||Wm(S)){We=0,Qn=null;var F=w.sibling;if(F!==null)Te=F;else{var $=w.return;$!==null?(Te=$,Tl($)):Te=null}break e}}We=0,Qn=null,Zr(e,n,f,5);break;case 6:We=0,Qn=null,Zr(e,n,f,6);break;case 8:nf(),tn=6;break t;default:throw Error(r(462))}}Vv();break}catch(yt){fm(e,yt)}while(!0);return Wi=ir=null,P.H=s,P.A=c,Qe=a,Te!==null?0:(ke=null,Re=0,jo(),tn)}function Vv(){for(;Te!==null&&!zt();)pm(Te)}function pm(e){var n=zp(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Tl(e):Te=n}function mm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Dp(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Dp(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:lu(n);default:om(a,n),n=Te=am(n,Qi),n=zp(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Tl(e):Te=n}function Zr(e,n,a,s){Wi=ir=null,lu(n),zr=null,Zs=0;var c=n.return;try{if(Dv(e,c,n,a,Re)){tn=1,pl(e,ri(a,e.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;tn=1,pl(e,ri(a,e.current)),Te=null;return}n.flags&32768?(Le||s===1?e=!0:qr||Re&536870912?e=!1:(Ki=e=!0,(s===2||s===3||s===6)&&(s=li.current,s!==null&&s.tag===13&&(s.flags|=16384))),gm(n,e)):Tl(n)}function Tl(e){var n=e;do{if(n.flags&32768){gm(n,Ki);return}e=n.return;var a=Pv(n.alternate,n,Qi);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);tn===0&&(tn=5)}function gm(e,n){do{var a=zv(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);tn=6,Te=null}function _m(e,n,a,s,c,f,S,w,F,$){var yt=P.T,Ct=Z.p;try{Z.p=2,P.T=null,kv(e,n,a,s,Ct,c,f,S,w,F,$)}finally{P.T=yt,Z.p=Ct}}function kv(e,n,a,s,c,f,S,w){do Kr();while(lr!==null);if(Qe&6)throw Error(r(327));var F=e.finishedWork;if(s=e.finishedLanes,F===null)return null;if(e.finishedWork=null,e.finishedLanes=0,F===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var $=F.lanes|F.childLanes;if($|=Yc,De(e,s,$,f,S,w),e===ke&&(Te=ke=null,Re=0),!(F.subtreeFlags&10256)&&!(F.flags&10256)||El||(El=!0,Ju=$,$u=a,Yv(xt,function(){return Kr(),null})),a=(F.flags&15990)!==0,F.subtreeFlags&15990||a?(a=P.T,P.T=null,f=Z.p,Z.p=2,S=Qe,Qe|=4,Uv(e,F),Qp(F,e),hv(_f,e.containerInfo),Bl=!!gf,_f=gf=null,e.current=F,Yp(e,F.alternate,F),Rt(),Qe=S,Z.p=f,P.T=a):e.current=F,El?(El=!1,lr=e,po=s):vm(e,$),$=e.pendingLanes,$===0&&(Aa=null),Gt(F.stateNode),Oi(e),n!==null)for(c=e.onRecoverableError,F=0;F<n.length;F++)$=n[F],c($.value,{componentStack:$.stack});return po&3&&Kr(),$=e.pendingLanes,s&4194218&&$&42?e===tf?mo++:(mo=0,tf=e):mo=0,go(0),null}function vm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qs(n)))}function Kr(){if(lr!==null){var e=lr,n=Ju;Ju=0;var a=ni(po),s=P.T,c=Z.p;try{if(Z.p=32>a?32:a,P.T=null,lr===null)var f=!1;else{a=$u,$u=null;var S=lr,w=po;if(lr=null,po=0,Qe&6)throw Error(r(331));var F=Qe;if(Qe|=4,nm(S.current),$p(S,S.current,w,a),Qe=F,go(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ut,S)}catch{}f=!0}return f}finally{Z.p=c,P.T=s,vm(e,n)}}return!1}function xm(e,n,a){n=ri(a,n),n=Mu(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(he(e,2),Oi(e))}function Ve(e,n,a){if(e.tag===3)xm(e,e,a);else for(;n!==null;){if(n.tag===3){xm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))){e=ri(a,e),a=Mp(2),s=ya(n,a,2),s!==null&&(Ep(a,s,n,e),he(s,2),Oi(s));break}}n=n.return}}function sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Fv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),e=Wv.bind(null,e,n,a),n.then(e,e))}function Wv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Re&a)===a&&(tn===4||tn===3&&(Re&62914560)===Re&&300>K()-Qu?!(Qe&2)&&jr(e,0):Zu|=a,Yr===Re&&(Yr=0)),Oi(e)}function ym(e,n){n===0&&(n=ye()),e=da(e,n),e!==null&&(he(e,n),Oi(e))}function Xv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ym(e,a)}function qv(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ym(e,a)}function Yv(e,n){return A(e,n)}var Al=null,Qr=null,of=!1,wl=!1,lf=!1,cr=0;function Oi(e){e!==Qr&&e.next===null&&(Qr===null?Al=Qr=e:Qr=Qr.next=e),wl=!0,of||(of=!0,Zv(jv))}function go(e,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-O(42|e)+1)-1,f&=c&~(S&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Em(s,f))}else f=Re,f=Xt(s,s===ke?f:0),!(f&3)||Jt(s,f)||(a=!0,Em(s,f));s=s.next}while(a);lf=!1}}function jv(){wl=of=!1;var e=0;cr!==0&&(ix()&&(e=cr),cr=0);for(var n=K(),a=null,s=Al;s!==null;){var c=s.next,f=Sm(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Qr=a)):(a=s,(e!==0||f&3)&&(wl=!0)),s=c}go(e)}function Sm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-O(f),w=1<<S,F=c[S];F===-1?(!(w&a)||w&s)&&(c[S]=ve(w,n)):F<=n&&(e.expiredLanes|=w),f&=~w}if(n=ke,a=Re,a=Xt(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&We===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&lt(s),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&lt(s),ni(a)){case 2:case 8:a=ht;break;case 32:a=xt;break;case 268435456:a=rt;break;default:a=xt}return s=Mm.bind(null,e),a=A(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&lt(s),e.callbackPriority=2,e.callbackNode=null,2}function Mm(e,n){var a=e.callbackNode;if(Kr()&&e.callbackNode!==a)return null;var s=Re;return s=Xt(e,e===ke?s:0),s===0?null:(cm(e,s,n),Sm(e,K()),e.callbackNode!=null&&e.callbackNode===a?Mm.bind(null,e):null)}function Em(e,n){if(Kr())return null;cm(e,n,!0)}function Zv(e){rx(function(){Qe&6?A(it,e):e()})}function cf(){return cr===0&&(cr=ce()),cr}function bm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function Tm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Kv(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=bm((c[Je]||null).action),S=s.submitter;S&&(n=(n=S[Je]||null)?bm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var w=new Xo("action","action",null,s,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var F=S?Tm(c,S):new FormData(c);_u(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(w.preventDefault(),F=S?Tm(c,S):new FormData(c),_u(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var uf=0;uf<_h.length;uf++){var ff=_h[uf],Qv=ff.toLowerCase(),Jv=ff[0].toUpperCase()+ff.slice(1);_i(Qv,"on"+Jv)}_i(dh,"onAnimationEnd"),_i(hh,"onAnimationIteration"),_i(ph,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(mv,"onTransitionRun"),_i(gv,"onTransitionStart"),_i(_v,"onTransitionCancel"),_i(mh,"onTransitionEnd"),Ae("onMouseEnter",["mouseout","mouseover"]),Ae("onMouseLeave",["mouseout","mouseover"]),Ae("onPointerEnter",["pointerout","pointerover"]),Ae("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Am(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var w=s[S],F=w.instance,$=w.currentTarget;if(w=w.listener,F!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(yt){hl(yt)}c.currentTarget=null,f=F}else for(S=0;S<s.length;S++){if(w=s[S],F=w.instance,$=w.currentTarget,w=w.listener,F!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(yt){hl(yt)}c.currentTarget=null,f=F}}}}function we(e,n){var a=n[Ft];a===void 0&&(a=n[Ft]=new Set);var s=e+"__bubble";a.has(s)||(wm(n,e,2,!1),a.add(s))}function df(e,n,a){var s=0;n&&(s|=4),wm(a,e,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function hf(e){if(!e[Rl]){e[Rl]=!0,Zt.forEach(function(a){a!=="selectionchange"&&($v.has(a)||df(a,!1,e),df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,df("selectionchange",!1,n))}}function wm(e,n,a,s){switch(Km(n)){case 2:var c=Tx;break;case 8:c=Ax;break;default:c=Af}a=c.bind(null,n,a,e),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function pf(e,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var F=S.tag;if((F===3||F===4)&&(F=S.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;S=S.return}for(;w!==null;){if(S=q(w),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){s=f=S;continue t}w=w.parentNode}}s=s.return}Vd(function(){var $=f,yt=Uc(a),Ct=[];t:{var ut=gh.get(e);if(ut!==void 0){var vt=Xo,re=e;switch(e){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":vt=q0;break;case"focusin":re="focus",vt=Fc;break;case"focusout":re="blur",vt=Fc;break;case"beforeblur":case"afterblur":vt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":vt=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":vt=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":vt=Z0;break;case dh:case hh:case ph:vt=B0;break;case mh:vt=Q0;break;case"scroll":case"scrollend":vt=U0;break;case"wheel":vt=$0;break;case"copy":case"cut":case"paste":vt=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":vt=Yd;break;case"toggle":case"beforetoggle":vt=ev}var ge=(n&4)!==0,en=!ge&&(e==="scroll"||e==="scrollend"),tt=ge?ut!==null?ut+"Capture":null:ut;ge=[];for(var Q=$,at;Q!==null;){var Tt=Q;if(at=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||at===null||tt===null||(Tt=Ps(Q,tt),Tt!=null&&ge.push(vo(Q,Tt,at))),en)break;Q=Q.return}0<ge.length&&(ut=new vt(ut,re,null,a,yt),Ct.push({event:ut,listeners:ge}))}}if(!(n&7)){t:{if(ut=e==="mouseover"||e==="pointerover",vt=e==="mouseout"||e==="pointerout",ut&&a!==Lc&&(re=a.relatedTarget||a.fromElement)&&(q(re)||re[ii]))break t;if((vt||ut)&&(ut=yt.window===yt?yt:(ut=yt.ownerDocument)?ut.defaultView||ut.parentWindow:window,vt?(re=a.relatedTarget||a.toElement,vt=$,re=re?q(re):null,re!==null&&(en=nt(re),ge=re.tag,re!==en||ge!==5&&ge!==27&&ge!==6)&&(re=null)):(vt=null,re=$),vt!==re)){if(ge=Xd,Tt="onMouseLeave",tt="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Yd,Tt="onPointerLeave",tt="onPointerEnter",Q="pointer"),en=vt==null?ut:Ot(vt),at=re==null?ut:Ot(re),ut=new ge(Tt,Q+"leave",vt,a,yt),ut.target=en,ut.relatedTarget=at,Tt=null,q(yt)===$&&(ge=new ge(tt,Q+"enter",re,a,yt),ge.target=at,ge.relatedTarget=en,Tt=ge),en=Tt,vt&&re)e:{for(ge=vt,tt=re,Q=0,at=ge;at;at=Jr(at))Q++;for(at=0,Tt=tt;Tt;Tt=Jr(Tt))at++;for(;0<Q-at;)ge=Jr(ge),Q--;for(;0<at-Q;)tt=Jr(tt),at--;for(;Q--;){if(ge===tt||tt!==null&&ge===tt.alternate)break e;ge=Jr(ge),tt=Jr(tt)}ge=null}else ge=null;vt!==null&&Rm(Ct,ut,vt,ge,!1),re!==null&&en!==null&&Rm(Ct,en,re,ge,!0)}}t:{if(ut=$?Ot($):window,vt=ut.nodeName&&ut.nodeName.toLowerCase(),vt==="select"||vt==="input"&&ut.type==="file")var $t=eh;else if($d(ut))if(nh)$t=fv;else{$t=cv;var Ee=lv}else vt=ut.nodeName,!vt||vt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?$&&Dc($.elementType)&&($t=eh):$t=uv;if($t&&($t=$t(e,$))){th(Ct,$t,a,yt);break t}Ee&&Ee(e,ut,$),e==="focusout"&&$&&ut.type==="number"&&$.memoizedProps.value!=null&&Cc(ut,"number",ut.value)}switch(Ee=$?Ot($):window,e){case"focusin":($d(Ee)||Ee.contentEditable==="true")&&(Dr=Ee,Wc=$,ks=null);break;case"focusout":ks=Wc=Dr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,uh(Ct,a,yt);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":uh(Ct,a,yt)}var oe;if(Hc)t:{switch(e){case"compositionstart":var fe="onCompositionStart";break t;case"compositionend":fe="onCompositionEnd";break t;case"compositionupdate":fe="onCompositionUpdate";break t}fe=void 0}else Cr?Qd(e,a)&&(fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(jd&&a.locale!=="ko"&&(Cr||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Cr&&(oe=kd()):(fa=yt,Pc="value"in fa?fa.value:fa.textContent,Cr=!0)),Ee=Cl($,fe),0<Ee.length&&(fe=new qd(fe,e,null,a,yt),Ct.push({event:fe,listeners:Ee}),oe?fe.data=oe:(oe=Jd(a),oe!==null&&(fe.data=oe)))),(oe=iv?av(e,a):rv(e,a))&&(fe=Cl($,"onBeforeInput"),0<fe.length&&(Ee=new qd("onBeforeInput","beforeinput",null,a,yt),Ct.push({event:Ee,listeners:fe}),Ee.data=oe)),Kv(Ct,e,$,a,yt)}Am(Ct,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Cl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(e,a),c!=null&&s.unshift(vo(e,c,f)),c=Ps(e,n),c!=null&&s.push(vo(e,c,f))),e=e.return}return s}function Jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rm(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var w=a,F=w.alternate,$=w.stateNode;if(w=w.tag,F!==null&&F===s)break;w!==5&&w!==26&&w!==27||$===null||(F=$,c?($=Ps(a,f),$!=null&&S.unshift(vo(a,$,F))):c||($=Ps(a,f),$!=null&&S.push(vo(a,$,F)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var tx=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Cm(e){return(typeof e=="string"?e:""+e).replace(tx,`
`).replace(ex,"")}function Dm(e,n){return n=Cm(n),Cm(e)===n}function Dl(){}function Ie(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ar(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ar(e,""+s);break;case"className":Pe(e,"class",s);break;case"tabIndex":Pe(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,a,s);break;case"style":Hd(e,s,f);break;case"data":if(n!=="object"){Pe(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Go(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Go(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Dl);break;case"onScroll":s!=null&&we("scroll",e);break;case"onScrollEnd":s!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Go(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":we("beforetoggle",e),we("toggle",e),Ri(e,"popover",s);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ri(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=D0.get(a)||a,Ri(e,a,s))}}function mf(e,n,a,s,c,f){switch(a){case"style":Hd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ar(e,s):(typeof s=="number"||typeof s=="bigint")&&Ar(e,""+s);break;case"onScroll":s!=null&&we("scroll",e);break;case"onScrollEnd":s!=null&&we("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ri(e,a,s)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,f,S,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),s&&Ie(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var w=f=S=c=null,F=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var yt=a[s];if(yt!=null)switch(s){case"name":c=yt;break;case"type":S=yt;break;case"checked":F=yt;break;case"defaultChecked":$=yt;break;case"value":f=yt;break;case"defaultValue":w=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(r(137,n));break;default:Ie(e,n,s,yt,a,null)}}Os(e,f,w,F,$,S,c,!1),an(e);return;case"select":we("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":S=w;break;case"multiple":s=w;default:Ie(e,n,c,w,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Tr(e,!!s,n,!1):a!=null&&Tr(e,!!s,a,!0);return;case"textarea":we("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ie(e,n,S,w,a,null)}Fd(e,s,c,f),an(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(e,n,F,s,a,null)}return;case"dialog":we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(s=0;s<_o.length;s++)we(_o[s],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,$,s,a,null)}return;default:if(Dc(n)){for(yt in a)a.hasOwnProperty(yt)&&(s=a[yt],s!==void 0&&mf(e,n,yt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Ie(e,n,w,s,a,null))}function nx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,w=null,F=null,$=null,yt=null;for(vt in a){var Ct=a[vt];if(a.hasOwnProperty(vt)&&Ct!=null)switch(vt){case"checked":break;case"value":break;case"defaultValue":F=Ct;default:s.hasOwnProperty(vt)||Ie(e,n,vt,null,s,Ct)}}for(var ut in s){var vt=s[ut];if(Ct=a[ut],s.hasOwnProperty(ut)&&(vt!=null||Ct!=null))switch(ut){case"type":f=vt;break;case"name":c=vt;break;case"checked":$=vt;break;case"defaultChecked":yt=vt;break;case"value":S=vt;break;case"defaultValue":w=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:vt!==Ct&&Ie(e,n,ut,vt,s,Ct)}}Ns(e,S,w,F,$,yt,f,c);return;case"select":vt=S=w=ut=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":vt=F;default:s.hasOwnProperty(f)||Ie(e,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ut=f;break;case"defaultValue":w=f;break;case"multiple":S=f;default:f!==F&&Ie(e,n,c,f,s,F)}n=w,a=S,s=vt,ut!=null?Tr(e,!!a,ut,!1):!!s!=!!a&&(n!=null?Tr(e,!!a,n,!0):Tr(e,!!a,a?[]:"",!1));return;case"textarea":vt=ut=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ie(e,n,w,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ut=c;break;case"defaultValue":vt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(e,n,S,c,s,f)}Bd(e,ut,vt);return;case"option":for(var re in a)if(ut=a[re],a.hasOwnProperty(re)&&ut!=null&&!s.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Ie(e,n,re,null,s,ut)}for(F in s)if(ut=s[F],vt=a[F],s.hasOwnProperty(F)&&ut!==vt&&(ut!=null||vt!=null))switch(F){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Ie(e,n,F,ut,s,vt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)ut=a[ge],a.hasOwnProperty(ge)&&ut!=null&&!s.hasOwnProperty(ge)&&Ie(e,n,ge,null,s,ut);for($ in s)if(ut=s[$],vt=a[$],s.hasOwnProperty($)&&ut!==vt&&(ut!=null||vt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ie(e,n,$,ut,s,vt)}return;default:if(Dc(n)){for(var en in a)ut=a[en],a.hasOwnProperty(en)&&ut!==void 0&&!s.hasOwnProperty(en)&&mf(e,n,en,void 0,s,ut);for(yt in s)ut=s[yt],vt=a[yt],!s.hasOwnProperty(yt)||ut===vt||ut===void 0&&vt===void 0||mf(e,n,yt,ut,s,vt);return}}for(var tt in a)ut=a[tt],a.hasOwnProperty(tt)&&ut!=null&&!s.hasOwnProperty(tt)&&Ie(e,n,tt,null,s,ut);for(Ct in s)ut=s[Ct],vt=a[Ct],!s.hasOwnProperty(Ct)||ut===vt||ut==null&&vt==null||Ie(e,n,Ct,ut,s,vt)}var gf=null,_f=null;function Ll(e){return e.nodeType===9?e:e.ownerDocument}function Lm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Um(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function ix(){var e=window.event;return e&&e.type==="popstate"?e===xf?!1:(xf=e,!0):(xf=null,!1)}var Nm=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(e){return Om.resolve(null).then(e).catch(sx)}:Nm;function sx(e){setTimeout(function(){throw e})}function yf(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){e.removeChild(c),Ao(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);Ao(n)}function Sf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),W(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ox(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[G])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function lx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Pm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function zm(e,n,a){switch(n=Ll(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var hi=new Map,Bm=new Set;function Ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var $i=Z.d;Z.d={f:cx,r:ux,D:fx,C:dx,L:hx,m:px,X:gx,S:mx,M:_x};function cx(){var e=$i.f(),n=bl();return e||n}function ux(e){var n=St(e);n!==null&&n.tag===5&&n.type==="form"?up(n):$i.r(e)}var $r=typeof document>"u"?null:document;function Fm(e,n,a){var s=$r;if(s&&typeof n=="string"&&n){var c=Cn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Bm.has(c)||(Bm.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",e),Ht(n),s.head.appendChild(n)))}}function fx(e){$i.D(e),Fm("dns-prefetch",e,null)}function dx(e,n){$i.C(e,n),Fm("preconnect",e,n)}function hx(e,n,a){$i.L(e,n,a);var s=$r;if(s&&e&&n){var c='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Cn(a.imageSizes)+'"]')):c+='[href="'+Cn(e)+'"]';var f=c;switch(n){case"style":f=ts(e);break;case"script":f=es(e)}hi.has(f)||(e=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(yo(f))||(n=s.createElement("link"),Tn(n,"link",e),Ht(n),s.head.appendChild(n)))}}function px(e,n){$i.m(e,n);var a=$r;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Cn(s)+'"][href="'+Cn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=es(e)}if(!hi.has(f)&&(e=E({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}s=a.createElement("link"),Tn(s,"link",e),Ht(s),a.head.appendChild(s)}}}function mx(e,n,a){$i.S(e,n,a);var s=$r;if(s&&e){var c=Pt(s).hoistableStyles,f=ts(e);n=n||"default";var S=c.get(f);if(!S){var w={loading:0,preload:null};if(S=s.querySelector(xo(f)))w.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&Mf(e,a);var F=S=s.createElement("link");Ht(F),Tn(F,"link",e),F._p=new Promise(function($,yt){F.onload=$,F.onerror=yt}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:w},c.set(f,S)}}}function gx(e,n){$i.X(e,n);var a=$r;if(a&&e){var s=Pt(a).hoistableScripts,c=es(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=E({src:e,async:!0},n),(n=hi.get(c))&&Ef(e,n),f=a.createElement("script"),Ht(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function _x(e,n){$i.M(e,n);var a=$r;if(a&&e){var s=Pt(a).hoistableScripts,c=es(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=E({src:e,async:!0,type:"module"},n),(n=hi.get(c))&&Ef(e,n),f=a.createElement("script"),Ht(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Im(e,n,a,s){var c=(c=Oe.current)?Ul(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=Pt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ts(a.href);var f=Pt(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(xo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||vx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=es(a),a=Pt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ts(e){return'href="'+Cn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function Hm(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function vx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Ht(n),e.head.appendChild(n))}function es(e){return'[src="'+Cn(e)+'"]'}function yo(e){return"script[async]"+e}function Gm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Cn(a.href)+'"]');if(s)return n.instance=s,Ht(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ht(s),Tn(s,"style",c),Nl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ts(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,Ht(f),f;s=Hm(a),(c=hi.get(c))&&Mf(s,c),f=(e.ownerDocument||e).createElement("link"),Ht(f);var S=f;return S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,e),n.instance=f;case"script":return f=es(a.src),(c=e.querySelector(yo(f)))?(n.instance=c,Ht(c),c):(s=a,(c=hi.get(f))&&(s=E({},a),Ef(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ht(c),Tn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,e));return n.instance}function Nl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var w=s[S];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ol=null;function Vm(e,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[G]||f[je]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var w=s.get(S);w?w.push(f):s.set(S,[f])}}return s}function km(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var So=null;function yx(){}function Sx(e,n,a){if(So===null)throw Error(r(475));var s=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=ts(a.href),f=e.querySelector(xo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Pl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,Ht(f);return}f=e.ownerDocument||e,a=Hm(a),(c=hi.get(c))&&Mf(a,c),f=f.createElement("link"),Ht(f);var S=f;S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Mx(){if(So===null)throw Error(r(475));var e=So;return e.stylesheets&&e.count===0&&bf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&bf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zl=null;function bf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zl=new Map,n.forEach(Ex,e),zl=null,Pl.call(e))}function Ex(e,n){if(!(n.state.loading&4)){var a=zl.get(e);if(a)var s=a.get(null);else{a=new Map,zl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:mt,_currentValue2:mt,_threadCount:0};function bx(e,n,a,s,c,f,S,w){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Xm(e,n,a,s,c,f,S,w,F,$,yt,Ct){return e=new bx(e,n,a,S,w,F,$,Ct),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),e.current=f,f.stateNode=e,n=eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),e}function qm(e){return e?(e=Nr,e):Nr}function Ym(e,n,a,s,c,f){c=qm(c),s.context===null?s.context=c:s.pendingContext=c,s=xa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(e,s,n),a!==null&&(zn(a,e,n),ao(a,e,n))}function jm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Tf(e,n){jm(e,n),(e=e.alternate)&&jm(e,n)}function Zm(e){if(e.tag===13){var n=da(e,67108864);n!==null&&zn(n,e,67108864),Tf(e,67108864)}}var Bl=!0;function Tx(e,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Af(e,n,a,s)}finally{Z.p=f,P.T=c}}function Ax(e,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Af(e,n,a,s)}finally{Z.p=f,P.T=c}}function Af(e,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(e,n,s,Fl,a),Qm(e,s);else if(Rx(c,e,n,a,s))s.stopPropagation();else if(Qm(e,s),n&4&&-1<wx.indexOf(e)){for(;c!==null;){var f=St(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Mt(f.pendingLanes);if(S!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var F=1<<31-O(S);w.entanglements[1]|=F,S&=~F}Oi(f),!(Qe&6)&&(Sl=K()+500,go(0))}}break;case 13:w=da(f,2),w!==null&&zn(w,f,2),bl(),Tf(f,2)}if(f=wf(s),f===null&&pf(e,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(e,n,s,null,a)}}function wf(e){return e=Uc(e),Rf(e)}var Fl=null;function Rf(e){if(Fl=null,e=q(e),e!==null){var n=nt(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=pt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fl=e,null}function Km(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case it:return 2;case ht:return 8;case xt:case At:return 32;case rt:return 268435456;default:return 32}default:return 32}}var Cf=!1,wa=null,Ra=null,Ca=null,Eo=new Map,bo=new Map,Da=[],wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function To(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=St(n),n!==null&&Zm(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Rx(e,n,a,s,c){switch(n){case"focusin":return wa=To(wa,e,n,a,s,c),!0;case"dragenter":return Ra=To(Ra,e,n,a,s,c),!0;case"mouseover":return Ca=To(Ca,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,To(Eo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,To(bo.get(f)||null,e,n,a,s,c)),!0}return!1}function Jm(e){var n=q(e.target);if(n!==null){var a=nt(n);if(a!==null){if(n=a.tag,n===13){if(n=pt(a),n!==null){e.blockedOn=n,nn(e.priority,function(){if(a.tag===13){var s=Jn(),c=da(a,s);c!==null&&zn(c,a,s),Tf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=St(a),n!==null&&Zm(n),e.blockedOn=a,!1;n.shift()}return!0}function $m(e,n,a){Il(e)&&a.delete(n)}function Cx(){Cf=!1,wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),Ca!==null&&Il(Ca)&&(Ca=null),Eo.forEach($m),bo.forEach($m)}function Hl(e,n){e.blockedOn===n&&(e.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cx)))}var Gl=null;function tg(e){Gl!==e&&(Gl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===e&&(Gl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=St(a);f!==null&&(e.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(e){function n(F){return Hl(F,e)}wa!==null&&Hl(wa,e),Ra!==null&&Hl(Ra,e),Ca!==null&&Hl(Ca,e),Eo.forEach(n),bo.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Jm(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Je]||null;if(typeof f=="function")S||tg(a);else if(S){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Je]||null)w=S.formAction;else if(Rf(c)!==null)continue}else w=S.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),tg(a)}}}function Df(e){this._internalRoot=e}Vl.prototype.render=Df.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();Ym(a,s,e,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Kr(),Ym(e.current,2,null,e,null,null),bl(),n[ii]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var n=wi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&Jm(e)}};var eg=t.version;if(eg!=="19.0.0")throw Error(r(527,eg,"19.0.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=J(n),e=e!==null?_t(e):null,e=e===null?null:e.stateNode,e};var Dx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:P,findFiberByHostInstance:q,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ut=kl.inject(Dx),Bt=kl}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=vp,f=xp,S=yp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=Xm(e,1,!1,null,null,a,s,c,f,S,w,null),e[ii]=n.current,hf(e.nodeType===8?e.parentNode:e),new Df(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=vp,S=xp,w=yp,F=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Xm(e,1,!0,n,a??null,s,c,f,S,w,F,$),n.context=qm(null),a=n.current,s=Jn(),c=xa(s),c.callback=null,ya(a,c,s),n.current.lanes=s,he(n,s),Oi(n),e[ii]=n.current,hf(e),new Vl(n)},Ro.version="19.0.0",Ro}var fg;function Hx(){if(fg)return Nf.exports;fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nf.exports=Ix(),Nf.exports}var Gx=Hx();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",ns={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,dg=1,kx=2,q_=1,Y_=2,ra=3,Wa=0,qn=1,zi=2,Ha=0,Es=1,md=2,hg=3,pg=4,Wx=5,gr=100,Xx=101,qx=102,mg=103,gg=104,Yx=200,jx=201,Zx=202,Kx=203,gd=204,_d=205,Qx=206,Jx=207,$x=208,ty=209,ey=210,ny=211,iy=212,ay=213,ry=214,sy=0,oy=1,ly=2,mc=3,cy=4,uy=5,fy=6,dy=7,j_=0,hy=1,py=2,Ga=0,my=1,gy=2,_y=3,vy=4,xy=5,yy=6,Z_=300,As=301,ws=302,vd=303,xd=304,Ec=306,yd=1e3,bi=1001,Sd=1002,In=1003,_g=1004,Co=1005,Wn=1006,Bf=1007,vr=1008,Va=1009,Sy=1010,My=1011,Rd=1012,K_=1013,Ia=1014,sa=1015,Fo=1016,Q_=1017,J_=1018,xr=1020,Ey=1021,Ti=1023,by=1024,Ty=1025,yr=1026,Rs=1027,Ay=1028,$_=1029,wy=1030,t0=1031,e0=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,vg=35840,xg=35841,yg=35842,Sg=35843,n0=36196,Mg=37492,Eg=37496,bg=37808,Tg=37809,Ag=37810,wg=37811,Rg=37812,Cg=37813,Dg=37814,Lg=37815,Ug=37816,Ng=37817,Og=37818,Pg=37819,zg=37820,Bg=37821,Vf=36492,Fg=36494,Ig=36495,Ry=36283,Hg=36284,Gg=36285,Vg=36286,i0=3e3,Sr=3001,Cy=3200,Dy=3201,a0=0,Ly=1,mi="",An="srgb",la="srgb-linear",Cd="display-p3",bc="display-p3-linear",gc="linear",Xe="srgb",_c="rec709",vc="p3",as=7680,kg=519,Uy=512,Ny=513,Oy=514,r0=515,Py=516,zy=517,By=518,Fy=519,Wg=35044,Xg="300 es",Md=1035,oa=2e3,xc=2001;class br{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function On(o,t,i){return Math.max(t,Math.min(i,o))}function Dd(o,t){return(o%t+t)%t}function Iy(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function Hy(o,t,i){return o!==t?(i-o)/(t-o):0}function Bo(o,t,i){return(1-i)*o+i*t}function Gy(o,t,i,r){return Bo(o,t,1-Math.exp(-i*r))}function Vy(o,t=1){return t-Math.abs(Dd(o,t*2)-t)}function ky(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Wy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Xy(o,t){return o+Math.floor(Math.random()*(t-o+1))}function qy(o,t){return o+Math.random()*(t-o)}function Yy(o){return o*(.5-Math.random())}function jy(o){o!==void 0&&(qg=o);let t=qg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zy(o){return o*zo}function Ky(o){return o*Io}function Ed(o){return(o&o-1)===0&&o!==0}function Qy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Jy(o,t,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((t+r)/2),g=h((t+r)/2),x=u((t-r)/2),y=h((t-r)/2),M=u((r-t)/2),T=h((r-t)/2);switch(l){case"XYX":o.set(d*g,p*x,p*y,d*m);break;case"YZY":o.set(p*y,d*g,p*x,d*m);break;case"ZXZ":o.set(p*x,p*y,d*g,d*m);break;case"XZX":o.set(d*g,p*T,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*T,d*m);break;case"ZYZ":o.set(p*T,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const pr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:On,euclideanModulo:Dd,mapLinear:Iy,inverseLerp:Hy,lerp:Bo,damp:Gy,pingpong:Vy,smoothstep:ky,smootherstep:Wy,randInt:Xy,randFloat:qy,randFloatSpread:Yy,seededRandom:jy,degToRad:Zy,radToDeg:Ky,isPowerOfTwo:Ed,ceilPowerOfTwo:Qy,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Jy,normalize:Bn,denormalize:ys};class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(On(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(t,i,r,l,u,h,d,p,m){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],x=r[7],y=r[2],M=r[5],T=r[8],R=l[0],v=l[3],_=l[6],B=l[1],D=l[4],z=l[7],X=l[2],k=l[5],I=l[8];return u[0]=h*R+d*B+p*X,u[3]=h*v+d*D+p*k,u[6]=h*_+d*z+p*I,u[1]=m*R+g*B+x*X,u[4]=m*v+g*D+x*k,u[7]=m*_+g*z+x*I,u[2]=y*R+M*B+T*X,u[5]=y*v+M*D+T*k,u[8]=y*_+M*z+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],x=g*h-d*m,y=d*p-g*u,M=m*u-h*p,T=i*x+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(l*m-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=y*R,t[4]=(g*i-l*p)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(r*p-m*i)*R,t[8]=(h*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(kf.makeScale(t,i)),this}rotate(t){return this.premultiply(kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new be;function s0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $y(){const o=Sc("canvas");return o.style.display="block",o}const Yg={};function bs(o){o in Yg||(Yg[o]=!0,console.warn(o))}const jg=new be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zg=new be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[la]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[An]:{transfer:Xe,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[bc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(Zg),fromReference:o=>o.applyMatrix3(jg)},[Cd]:{transfer:Xe,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Zg),fromReference:o=>o.applyMatrix3(jg).convertLinearToSRGB()}},tS=new Set([la,bc]),He={enabled:!0,_workingColorSpace:la,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!tS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const r=Wl[t].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===mi?gc:Wl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class o0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rs===void 0&&(rs=Sc("canvas")),rs.width=t.width,rs.height=t.height;const r=rs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=rs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Sc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ts(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eS=0;class l0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?o0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;class Yn extends br{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,r=bi,l=bi,u=Wn,h=vr,d=Ti,p=Va,m=Yn.DEFAULT_ANISOTROPY,g=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Ds(),this.name="",this.source=new l0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Sr?An:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Z_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?Sr:i0}set encoding(t){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Sr?An:mi}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Z_;Yn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],g=p[4],x=p[8],y=p[1],M=p[5],T=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(x-R)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+R)<.1&&Math.abs(T+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,z=(M+1)/2,X=(_+1)/2,k=(g+y)/4,I=(x+R)/4,dt=(T+v)/4;return D>z&&D>X?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=k/r,u=I/r):z>X?z<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),r=k/l,u=dt/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=I/u,l=dt/u),this.set(r,l,u,i),this}let B=Math.sqrt((v-T)*(v-T)+(x-R)*(x-R)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(v-T)/B,this.y=(x-R)/B,this.z=(y-g)/B,this.w=Math.acos((m+M+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends br{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:1};r.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Sr?An:mi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Yn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(t,i,r=1){(this.width!==t||this.height!==i||this.depth!==r)&&(this.width=t,this.height=i,this.depth=r,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new l0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends iS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class c0 extends Yn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aS extends Yn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3];const y=u[h+0],M=u[h+1],T=u[h+2],R=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=R;return}if(x!==R||p!==y||m!==M||g!==T){let v=1-d;const _=p*y+m*M+g*T+x*R,B=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const X=Math.sqrt(D),k=Math.atan2(X,_*B);v=Math.sin(v*k)/X,d=Math.sin(d*k)/X}const z=d*B;if(p=p*v+y*z,m=m*v+M*z,g=g*v+T*z,x=x*v+R*z,v===1-d){const X=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=X,m*=X,g*=X,x*=X}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=u[h],y=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+g*x+p*M-m*y,t[i+1]=p*T+g*y+m*x-d*M,t[i+2]=m*T+g*M+d*y-p*x,t[i+3]=g*T-d*x-p*y-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),x=d(u/2),y=p(r/2),M=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=y*g*x+m*M*T,this._y=m*M*x-y*g*T,this._z=m*g*T+y*M*x,this._w=m*g*x-y*M*T;break;case"YXZ":this._x=y*g*x+m*M*T,this._y=m*M*x-y*g*T,this._z=m*g*T-y*M*x,this._w=m*g*x+y*M*T;break;case"ZXY":this._x=y*g*x-m*M*T,this._y=m*M*x+y*g*T,this._z=m*g*T+y*M*x,this._w=m*g*x-y*M*T;break;case"ZYX":this._x=y*g*x-m*M*T,this._y=m*M*x+y*g*T,this._z=m*g*T-y*M*x,this._w=m*g*x+y*M*T;break;case"YZX":this._x=y*g*x+m*M*T,this._y=m*M*x+y*g*T,this._z=m*g*T-y*M*x,this._w=m*g*x-y*M*T;break;case"XZY":this._x=y*g*x-m*M*T,this._y=m*M*x-y*g*T,this._z=m*g*T+y*M*x,this._w=m*g*x+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],x=i[10],y=r+d+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(On(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=h*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+p*m+h*x-d*g,this.y=r+p*g+d*m-u*x,this.z=l+p*x+u*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return qf.copy(this).projectOnVector(t),this.sub(qf)}reflect(t){return this.sub(qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(On(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new Y,Kg=new Er;class Ho{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Si):Si.fromBufferAttribute(u,h),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(t.matrixWorld),this.union(Xl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),ql.subVectors(this.max,Do),ss.subVectors(t.a,Do),os.subVectors(t.b,Do),ls.subVectors(t.c,Do),Ua.subVectors(os,ss),Na.subVectors(ls,os),ur.subVectors(ss,ls);let i=[0,-Ua.z,Ua.y,0,-Na.z,Na.y,0,-ur.z,ur.y,Ua.z,0,-Ua.x,Na.z,0,-Na.x,ur.z,0,-ur.x,-Ua.y,Ua.x,0,-Na.y,Na.x,0,-ur.y,ur.x,0];return!Yf(i,ss,os,ls,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,ss,os,ls,ql))?!1:(Yl.crossVectors(Ua,Na),i=[Yl.x,Yl.y,Yl.z],Yf(i,ss,os,ls,ql))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Si=new Y,Xl=new Ho,ss=new Y,os=new Y,ls=new Y,Ua=new Y,Na=new Y,ur=new Y,Do=new Y,ql=new Y,Yl=new Y,fr=new Y;function Yf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){fr.fromArray(o,u);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),p=t.dot(fr),m=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const rS=new Ho,Lo=new Y,jf=new Y;class Tc{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):rS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(jf)),this.expandByPoint(Lo.copy(t.center).sub(jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Y,Zf=new Y,jl=new Y,Oa=new Y,Kf=new Y,Zl=new Y,Qf=new Y;class Ld{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Zf.copy(t).add(i).multiplyScalar(.5),jl.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(Zf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Oa.dot(this.direction),p=-Oa.dot(jl),m=Oa.lengthSq(),g=Math.abs(1-h*h);let x,y,M,T;if(g>0)if(x=h*p-d,y=h*d-p,T=u*g,x>=0)if(y>=-T)if(y<=T){const R=1/g;x*=R,y*=R,M=x*(x+h*y+2*d)+y*(h*x+y+2*p)+m}else y=u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*p)+m;else y<=-T?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+y*(y+2*p)+m):y<=T?(x=0,y=Math.min(Math.max(-u,-p),u),M=y*(y+2*p)+m):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+y*(y+2*p)+m);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Zf).addScaledVector(jl,y),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,p=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,p=(t.min.z-y.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,u){Kf.subVectors(i,t),Zl.subVectors(r,t),Qf.crossVectors(Kf,Zl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,t);const p=d*this.direction.dot(Zl.crossVectors(Oa,Zl));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Oa));if(m<0||p+m>h)return null;const g=-d*Oa.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,r,l,u,h,d,p,m,g,x,y,M,T,R,v){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,g,x,y,M,T,R,v)}set(t,i,r,l,u,h,d,p,m,g,x,y,M,T,R,v){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=y,_[3]=M,_[7]=T,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/cs.setFromMatrixColumn(t,0).length(),u=1/cs.setFromMatrixColumn(t,1).length(),h=1/cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=h*g,M=h*x,T=d*g,R=d*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+T*m,i[5]=y-R*m,i[9]=-d*p,i[2]=R-y*m,i[6]=T+M*m,i[10]=h*p}else if(t.order==="YXZ"){const y=p*g,M=p*x,T=m*g,R=m*x;i[0]=y+R*d,i[4]=T*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-T,i[6]=R+y*d,i[10]=h*p}else if(t.order==="ZXY"){const y=p*g,M=p*x,T=m*g,R=m*x;i[0]=y-R*d,i[4]=-h*x,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*g,i[9]=R-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const y=h*g,M=h*x,T=d*g,R=d*x;i[0]=p*g,i[4]=T*m-M,i[8]=y*m+R,i[1]=p*x,i[5]=R*m+y,i[9]=M*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const y=h*p,M=h*m,T=d*p,R=d*m;i[0]=p*g,i[4]=R-y*x,i[8]=T*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*x+T,i[10]=y-R*x}else if(t.order==="XZY"){const y=h*p,M=h*m,T=d*p,R=d*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=y*x+R,i[5]=h*g,i[9]=M*x-T,i[2]=T*x-M,i[6]=d*g,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sS,t,oS)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Pa.crossVectors(r,$n),Pa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Pa.crossVectors(r,$n)),Pa.normalize(),Kl.crossVectors($n,Pa),l[0]=Pa.x,l[4]=Kl.x,l[8]=$n.x,l[1]=Pa.y,l[5]=Kl.y,l[9]=$n.y,l[2]=Pa.z,l[6]=Kl.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],x=r[5],y=r[9],M=r[13],T=r[2],R=r[6],v=r[10],_=r[14],B=r[3],D=r[7],z=r[11],X=r[15],k=l[0],I=l[4],dt=l[8],P=l[12],E=l[1],N=l[5],ft=l[9],Et=l[13],j=l[2],ot=l[6],V=l[10],ct=l[14],nt=l[3],pt=l[7],C=l[11],J=l[15];return u[0]=h*k+d*E+p*j+m*nt,u[4]=h*I+d*N+p*ot+m*pt,u[8]=h*dt+d*ft+p*V+m*C,u[12]=h*P+d*Et+p*ct+m*J,u[1]=g*k+x*E+y*j+M*nt,u[5]=g*I+x*N+y*ot+M*pt,u[9]=g*dt+x*ft+y*V+M*C,u[13]=g*P+x*Et+y*ct+M*J,u[2]=T*k+R*E+v*j+_*nt,u[6]=T*I+R*N+v*ot+_*pt,u[10]=T*dt+R*ft+v*V+_*C,u[14]=T*P+R*Et+v*ct+_*J,u[3]=B*k+D*E+z*j+X*nt,u[7]=B*I+D*N+z*ot+X*pt,u[11]=B*dt+D*ft+z*V+X*C,u[15]=B*P+D*Et+z*ct+X*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],x=t[6],y=t[10],M=t[14],T=t[3],R=t[7],v=t[11],_=t[15];return T*(+u*p*x-l*m*x-u*d*y+r*m*y+l*d*M-r*p*M)+R*(+i*p*M-i*m*y+u*h*y-l*h*M+l*m*g-u*p*g)+v*(+i*m*x-i*d*M-u*h*x+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*x+i*d*y+l*h*x-r*h*y+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],x=t[9],y=t[10],M=t[11],T=t[12],R=t[13],v=t[14],_=t[15],B=x*v*m-R*y*m+R*p*M-d*v*M-x*p*_+d*y*_,D=T*y*m-g*v*m-T*p*M+h*v*M+g*p*_-h*y*_,z=g*R*m-T*x*m+T*d*M-h*R*M-g*d*_+h*x*_,X=T*x*p-g*R*p-T*d*y+h*R*y+g*d*v-h*x*v,k=i*B+r*D+l*z+u*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=B*I,t[1]=(R*y*u-x*v*u-R*l*M+r*v*M+x*l*_-r*y*_)*I,t[2]=(d*v*u-R*p*u+R*l*m-r*v*m-d*l*_+r*p*_)*I,t[3]=(x*p*u-d*y*u-x*l*m+r*y*m+d*l*M-r*p*M)*I,t[4]=D*I,t[5]=(g*v*u-T*y*u+T*l*M-i*v*M-g*l*_+i*y*_)*I,t[6]=(T*p*u-h*v*u-T*l*m+i*v*m+h*l*_-i*p*_)*I,t[7]=(h*y*u-g*p*u+g*l*m-i*y*m-h*l*M+i*p*M)*I,t[8]=z*I,t[9]=(T*x*u-g*R*u-T*r*M+i*R*M+g*r*_-i*x*_)*I,t[10]=(h*R*u-T*d*u+T*r*m-i*R*m-h*r*_+i*d*_)*I,t[11]=(g*d*u-h*x*u-g*r*m+i*x*m+h*r*M-i*d*M)*I,t[12]=X*I,t[13]=(g*R*l-T*x*l+T*r*y-i*R*y-g*r*v+i*x*v)*I,t[14]=(T*d*l-h*R*l-T*r*p+i*R*p+h*r*v-i*d*v)*I,t[15]=(h*x*l-g*d*l+g*r*p-i*x*p-h*r*y+i*d*y)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,x=d+d,y=u*m,M=u*g,T=u*x,R=h*g,v=h*x,_=d*x,B=p*m,D=p*g,z=p*x,X=r.x,k=r.y,I=r.z;return l[0]=(1-(R+_))*X,l[1]=(M+z)*X,l[2]=(T-D)*X,l[3]=0,l[4]=(M-z)*k,l[5]=(1-(y+_))*k,l[6]=(v+B)*k,l[7]=0,l[8]=(T+D)*I,l[9]=(v-B)*I,l[10]=(1-(y+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const h=cs.set(l[4],l[5],l[6]).length(),d=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const m=1/u,g=1/h,x=1/d;return Mi.elements[0]*=m,Mi.elements[1]*=m,Mi.elements[2]*=m,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=x,Mi.elements[9]*=x,Mi.elements[10]*=x,i.setFromRotationMatrix(Mi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=oa){const p=this.elements,m=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let M,T;if(d===oa)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===xc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),x=1/(h-u),y=(i+t)*m,M=(r+l)*g;let T,R;if(d===oa)T=(h+u)*x,R=-2*x;else if(d===xc)T=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const cs=new Y,Mi=new sn,sS=new Y(0,0,0),oS=new Y(1,1,1),Pa=new Y,Kl=new Y,$n=new Y,Qg=new sn,Jg=new Er;class Ac{constructor(t=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(On(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-On(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(On(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class u0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lS=0;const $g=new Y,us=new Er,na=new sn,Ql=new Y,Uo=new Y,cS=new Y,uS=new Er,t_=new Y(1,0,0),e_=new Y(0,1,0),n_=new Y(0,0,1),fS={type:"added"},dS={type:"removed"};class wn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Y,i=new Ac,r=new Er,l=new Y(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new be}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(t_,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(n_,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t_,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(n_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ql.copy(t):Ql.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Uo,Ql,this.up):na.lookAt(Ql,Uo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),us.setFromRotationMatrix(na),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(fS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dS)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,cS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,uS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),x=h(t.shapes),y=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Y(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Y,ia=new Y,Jf=new Y,aa=new Y,fs=new Y,ds=new Y,i_=new Y,$f=new Y,td=new Y,ed=new Y;class Bi{constructor(t=new Y,i=new Y,r=new Y){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),ia.subVectors(r,i),Jf.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(ia),p=Ei.dot(Jf),m=ia.dot(ia),g=ia.dot(Jf),x=h*m-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(m*p-d*g)*y,T=(h*g-d*p)*y;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,aa.x),p.addScaledVector(h,aa.y),p.addScaledVector(d,aa.z),p)}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),ia.subVectors(t,i),Ei.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ei.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;fs.subVectors(l,r),ds.subVectors(u,r),$f.subVectors(t,r);const p=fs.dot($f),m=ds.dot($f);if(p<=0&&m<=0)return i.copy(r);td.subVectors(t,l);const g=fs.dot(td),x=ds.dot(td);if(g>=0&&x<=g)return i.copy(l);const y=p*x-g*m;if(y<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(fs,h);ed.subVectors(t,u);const M=fs.dot(ed),T=ds.dot(ed);if(T>=0&&M<=T)return i.copy(u);const R=M*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(r).addScaledVector(ds,d);const v=g*T-M*x;if(v<=0&&x-g>=0&&M-T>=0)return i_.subVectors(u,l),d=(x-g)/(x-g+(M-T)),i.copy(l).addScaledVector(i_,d);const _=1/(v+R+y);return h=R*_,d=y*_,i.copy(r).addScaledVector(fs,h).addScaledVector(ds,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ce{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=He.workingColorSpace){return this.r=t,this.g=i,this.b=r,He.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=He.workingColorSpace){if(t=Dd(t,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nd(h,u,t+1/3),this.g=nd(h,u,t),this.b=nd(h,u,t-1/3)}return He.toWorkingColorSpace(this,l),this}setStyle(t,i=An){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=An){const r=f0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=Wf(t.r),this.g=Wf(t.g),this.b=Wf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return He.fromWorkingColorSpace(Nn.copy(this),t),Math.round(On(Nn.r*255,0,255))*65536+Math.round(On(Nn.g*255,0,255))*256+Math.round(On(Nn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=He.workingColorSpace){He.fromWorkingColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=He.workingColorSpace){return He.fromWorkingColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=An){He.fromWorkingColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==An?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(Jl);const r=Bo(za.h,Jl.h,i),l=Bo(za.s,Jl.s,i),u=Bo(za.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ce;Ce.NAMES=f0;let hS=0;class Ls extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class d0 extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new Y,$l=new me;class Fi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Wg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(t),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wg&&(t.usage=this.usage),t}}class h0 extends Fi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class p0 extends Fi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Hn extends Fi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let pS=0;const pi=new sn,id=new wn,hs=new Y,ti=new Ho,No=new Ho,Mn=new Y;class Ai extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s0(t)?p0:h0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new be().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,r){return pi.makeTranslation(t,i,r),this.applyMatrix4(pi),this}scale(t,i,r){return pi.makeScale(t,i,r),this.applyMatrix4(pi),this}lookAt(t){return id.lookAt(t),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Hn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ti.min,No.min),ti.expandByPoint(Mn),Mn.addVectors(ti.max,No.max),ti.expandByPoint(Mn)):(ti.expandByPoint(No.min),ti.expandByPoint(No.max))}ti.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Mn.fromBufferAttribute(d,m),p&&(hs.fromBufferAttribute(t,m),Mn.add(hs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let E=0;E<d;E++)m[E]=new Y,g[E]=new Y;const x=new Y,y=new Y,M=new Y,T=new me,R=new me,v=new me,_=new Y,B=new Y;function D(E,N,ft){x.fromArray(l,E*3),y.fromArray(l,N*3),M.fromArray(l,ft*3),T.fromArray(h,E*2),R.fromArray(h,N*2),v.fromArray(h,ft*2),y.sub(x),M.sub(x),R.sub(T),v.sub(T);const Et=1/(R.x*v.y-v.x*R.y);isFinite(Et)&&(_.copy(y).multiplyScalar(v.y).addScaledVector(M,-R.y).multiplyScalar(Et),B.copy(M).multiplyScalar(R.x).addScaledVector(y,-v.x).multiplyScalar(Et),m[E].add(_),m[N].add(_),m[ft].add(_),g[E].add(B),g[N].add(B),g[ft].add(B))}let z=this.groups;z.length===0&&(z=[{start:0,count:r.length}]);for(let E=0,N=z.length;E<N;++E){const ft=z[E],Et=ft.start,j=ft.count;for(let ot=Et,V=Et+j;ot<V;ot+=3)D(r[ot+0],r[ot+1],r[ot+2])}const X=new Y,k=new Y,I=new Y,dt=new Y;function P(E){I.fromArray(u,E*3),dt.copy(I);const N=m[E];X.copy(N),X.sub(I.multiplyScalar(I.dot(N))).normalize(),k.crossVectors(dt,N);const Et=k.dot(g[E])<0?-1:1;p[E*4]=X.x,p[E*4+1]=X.y,p[E*4+2]=X.z,p[E*4+3]=Et}for(let E=0,N=z.length;E<N;++E){const ft=z[E],Et=ft.start,j=ft.count;for(let ot=Et,V=Et+j;ot<V;ot+=3)P(r[ot+0]),P(r[ot+1]),P(r[ot+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new Y,u=new Y,h=new Y,d=new Y,p=new Y,m=new Y,g=new Y,x=new Y;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),R=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,x=d.normalized,y=new m.constructor(p.length*g);let M=0,T=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?M=p[R]*d.data.stride+d.offset:M=p[R]*g;for(let _=0;_<g;_++)y[T++]=m[M++]}return new Fi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ai,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,x=m.length;g<x;g++){const y=m[g],M=t(y,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,y=m.length;x<y;x++){const M=m[x];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],x=u[m];for(let y=0,M=x.length;y<M;y++)g.push(x[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a_=new sn,dr=new Ld,tc=new Tc,r_=new Y,ps=new Y,ms=new Y,gs=new Y,ad=new Y,ec=new Y,nc=new me,ic=new me,ac=new me,s_=new Y,o_=new Y,l_=new Y,rc=new Y,sc=new Y;class Xn extends wn{constructor(t=new Ai,i=new d0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],x=u[p];g!==0&&(ad.fromBufferAttribute(x,t),h?ec.addScaledVector(ad,g):ec.addScaledVector(ad.sub(i),g))}i.add(ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),dr.copy(t.ray).recast(t.near),!(tc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(tc,r_)===null||dr.origin.distanceToSquared(r_)>(t.far-t.near)**2))&&(a_.copy(u).invert(),dr.copy(t.ray).applyMatrix4(a_),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=y.length;T<R;T++){const v=y[T],_=h[v.materialIndex],B=Math.max(v.start,M.start),D=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let z=B,X=D;z<X;z+=3){const k=d.getX(z),I=d.getX(z+1),dt=d.getX(z+2);l=oc(this,_,t,r,m,g,x,k,I,dt),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=T,_=R;v<_;v+=3){const B=d.getX(v),D=d.getX(v+1),z=d.getX(v+2);l=oc(this,h,t,r,m,g,x,B,D,z),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,R=y.length;T<R;T++){const v=y[T],_=h[v.materialIndex],B=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let z=B,X=D;z<X;z+=3){const k=z,I=z+1,dt=z+2;l=oc(this,_,t,r,m,g,x,k,I,dt),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=T,_=R;v<_;v+=3){const B=v,D=v+1,z=v+2;l=oc(this,h,t,r,m,g,x,B,D,z),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function mS(o,t,i,r,l,u,h,d){let p;if(t.side===qn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===Wa,d),p===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,ps),o.getVertexPosition(p,ms),o.getVertexPosition(m,gs);const g=mS(o,t,i,r,ps,ms,gs,rc);if(g){l&&(nc.fromBufferAttribute(l,d),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Bi.getInterpolation(rc,ps,ms,gs,nc,ic,ac,new me)),u&&(nc.fromBufferAttribute(u,d),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Bi.getInterpolation(rc,ps,ms,gs,nc,ic,ac,new me),g.uv2=g.uv1),h&&(s_.fromBufferAttribute(h,d),o_.fromBufferAttribute(h,p),l_.fromBufferAttribute(h,m),g.normal=Bi.getInterpolation(rc,ps,ms,gs,s_,o_,l_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Y,materialIndex:0};Bi.getNormal(ps,ms,gs,x.normal),g.face=x}return g}class ka extends Ai{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],x=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(x,2));function T(R,v,_,B,D,z,X,k,I,dt,P){const E=z/I,N=X/dt,ft=z/2,Et=X/2,j=k/2,ot=I+1,V=dt+1;let ct=0,nt=0;const pt=new Y;for(let C=0;C<V;C++){const J=C*N-Et;for(let _t=0;_t<ot;_t++){const Dt=_t*E-ft;pt[R]=Dt*B,pt[v]=J*D,pt[_]=j,m.push(pt.x,pt.y,pt.z),pt[R]=0,pt[v]=0,pt[_]=k>0?1:-1,g.push(pt.x,pt.y,pt.z),x.push(_t/I),x.push(1-C/dt),ct+=1}}for(let C=0;C<dt;C++)for(let J=0;J<I;J++){const _t=y+J+ot*C,Dt=y+J+ot*(C+1),Z=y+(J+1)+ot*(C+1),mt=y+(J+1)+ot*C;p.push(_t,Dt,mt),p.push(Dt,Z,mt),nt+=6}d.addGroup(M,nt,P),M+=nt,y+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)t[l]=r[l]}return t}function gS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function m0(o){return o.getRenderTarget()===null?o.outputColorSpace:He.workingColorSpace}const _S={clone:Cs,merge:Fn};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=gS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class g0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new Y,c_=new me,u_=new me;class ei extends g0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,c_,u_),i.subVectors(u_,c_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class yS extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new ei(_s,vs,t,i);u.layers=this.layers,this.add(u);const h=new ei(_s,vs,t,i);h.layers=this.layers,this.add(h);const d=new ei(_s,vs,t,i);d.layers=this.layers,this.add(d);const p=new ei(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new ei(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class _0 extends Yn{constructor(t,i,r,l,u,h,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:As,super(t,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class SS extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?An:mi),this.texture=new _0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wn}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ka(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new Xn(l,u),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=Wn),new yS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}const rd=new Y,MS=new Y,ES=new be;class Fa{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=rd.subVectors(r,i).cross(MS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||ES.getNormalMatrix(t),l=this.coplanarPoint(rd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Tc,lc=new Y;class Ud{constructor(t=new Fa,i=new Fa,r=new Fa,l=new Fa,u=new Fa,h=new Fa){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],x=l[6],y=l[7],M=l[8],T=l[9],R=l[10],v=l[11],_=l[12],B=l[13],D=l[14],z=l[15];if(r[0].setComponents(p-u,y-m,v-M,z-_).normalize(),r[1].setComponents(p+u,y+m,v+M,z+_).normalize(),r[2].setComponents(p+h,y+g,v+T,z+B).normalize(),r[3].setComponents(p-h,y-g,v-T,z-B).normalize(),r[4].setComponents(p-d,y-x,v-R,z-D).normalize(),i===oa)r[5].setComponents(p+d,y+x,v+R,z+D).normalize();else if(i===xc)r[5].setComponents(d,x,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?t.max.x:t.min.x,lc.y=l.normal.y>0?t.max.y:t.min.y,lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v0(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function bS(o,t){const i=t.isWebGL2,r=new WeakMap;function l(m,g){const x=m.array,y=m.usage,M=x.byteLength,T=o.createBuffer();o.bindBuffer(g,T),o.bufferData(g,x,y),m.onUploadCallback();let R;if(x instanceof Float32Array)R=o.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)R=o.SHORT;else if(x instanceof Uint32Array)R=o.UNSIGNED_INT;else if(x instanceof Int32Array)R=o.INT;else if(x instanceof Int8Array)R=o.BYTE;else if(x instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:T,type:R,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,x){const y=g.array,M=g._updateRange,T=g.updateRanges;if(o.bindBuffer(x,m),M.count===-1&&T.length===0&&o.bufferSubData(x,0,y),T.length!==0){for(let R=0,v=T.length;R<v;R++){const _=T[R];i?o.bufferSubData(x,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):o.bufferSubData(x,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const y=r.get(m);(!y||y.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);if(x===void 0)r.set(m,l(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,m,g),x.version=m.version}}return{get:h,remove:d,update:p}}class wc extends Ai{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,x=t/d,y=i/p,M=[],T=[],R=[],v=[];for(let _=0;_<g;_++){const B=_*y-h;for(let D=0;D<m;D++){const z=D*x-u;T.push(z,-B,0),R.push(0,0,1),v.push(D/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let B=0;B<d;B++){const D=B+m*_,z=B+m*(_+1),X=B+1+m*(_+1),k=B+1+m*_;M.push(D,z,k),M.push(z,X,k)}this.setIndex(M),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(R,3)),this.setAttribute("uv",new Hn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.width,t.height,t.widthSegments,t.heightSegments)}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
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
#endif`,wS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
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
#endif`,US=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
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
#endif`,OS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FS=`#ifdef USE_IRIDESCENCE
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
#endif`,IS=`#ifdef USE_BUMPMAP
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
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
} // validated`,ZS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KS=`vec3 transformedNormal = objectNormal;
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
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`
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
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,TM=`
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PM=`#if defined( USE_POINTS_UV )
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
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
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
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cE=`float getShadowMask() {
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
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
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
}`,LE=`#if DEPTH_PACKING == 3200
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
}`,UE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
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
}`,BE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,GE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,WE=`#define NORMAL
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
}`,XE=`#define NORMAL
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
}`,qE=`#define PHONG
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
}`,YE=`#define PHONG
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
}`,jE=`#define STANDARD
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
}`,ZE=`#define STANDARD
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
}`,KE=`#define TOON
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
}`,QE=`#define TOON
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
}`,JE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,eb=`uniform vec3 color;
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
}`,nb=`uniform float rotation;
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
}`,ib=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:wS,alphamap_pars_fragment:RS,alphatest_fragment:CS,alphatest_pars_fragment:DS,aomap_fragment:LS,aomap_pars_fragment:US,batching_pars_vertex:NS,batching_vertex:OS,begin_vertex:PS,beginnormal_vertex:zS,bsdfs:BS,iridescence_fragment:FS,bumpmap_pars_fragment:IS,clipping_planes_fragment:HS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:kS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:qS,color_vertex:YS,common:jS,cube_uv_reflection_fragment:ZS,defaultnormal_vertex:KS,displacementmap_pars_vertex:QS,displacementmap_vertex:JS,emissivemap_fragment:$S,emissivemap_pars_fragment:tM,colorspace_fragment:eM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:aM,envmap_pars_fragment:rM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_fragment:hM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:_M,lights_toon_fragment:xM,lights_toon_pars_fragment:yM,lights_phong_fragment:SM,lights_phong_pars_fragment:MM,lights_physical_fragment:EM,lights_physical_pars_fragment:bM,lights_fragment_begin:TM,lights_fragment_maps:AM,lights_fragment_end:wM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:LM,map_fragment:UM,map_pars_fragment:NM,map_particle_fragment:OM,map_particle_pars_fragment:PM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:BM,morphcolor_vertex:FM,morphnormal_vertex:IM,morphtarget_pars_vertex:HM,morphtarget_vertex:GM,normal_fragment_begin:VM,normal_fragment_maps:kM,normal_pars_fragment:WM,normal_pars_vertex:XM,normal_vertex:qM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:QM,opaque_fragment:JM,packing:$M,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:dE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:_E,transmission_fragment:vE,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:EE,background_vert:bE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:wE,cube_vert:RE,cube_frag:CE,depth_vert:DE,depth_frag:LE,distanceRGBA_vert:UE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:WE,meshnormal_frag:XE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:jE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tb,shadow_frag:eb,sprite_vert:nb,sprite_frag:ib},Wt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Fn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Fn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Fn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Fn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Fn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Fn([Wt.points,Wt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Fn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Fn([Wt.common,Wt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Fn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Fn([Wt.sprite,Wt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Fn([Wt.common,Wt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Fn([Wt.lights,Wt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const cc={r:0,b:0,g:0};function ab(o,t,i,r,l,u,h){const d=new Ce(0);let p=u===!0?0:1,m,g,x=null,y=0,M=null;function T(v,_){let B=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:t).get(D)),D===null?R(d,p):D&&D.isColor&&(R(D,1),B=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||B)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Ec)?(g===void 0&&(g=new Xn(new ka(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:Cs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=He.getTransfer(D.colorSpace)!==Xe,(x!==D||y!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=D,y=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Xn(new wc(2,2),new ca({name:"BackgroundMaterial",uniforms:Cs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=He.getTransfer(D.colorSpace)!==Xe,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||y!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=D,y=D.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(cc,m0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,R(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(d,p)},render:T}}function rb(o,t,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:t.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function x(j,ot,V,ct,nt){let pt=!1;if(h){const C=R(ct,V,ot);m!==C&&(m=C,M(m.object)),pt=_(j,ct,V,nt),pt&&B(j,ct,V,nt)}else{const C=ot.wireframe===!0;(m.geometry!==ct.id||m.program!==V.id||m.wireframe!==C)&&(m.geometry=ct.id,m.program=V.id,m.wireframe=C,pt=!0)}nt!==null&&i.update(nt,o.ELEMENT_ARRAY_BUFFER),(pt||g)&&(g=!1,dt(j,ot,V,ct),nt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(nt).buffer))}function y(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(j){return r.isWebGL2?o.bindVertexArray(j):u.bindVertexArrayOES(j)}function T(j){return r.isWebGL2?o.deleteVertexArray(j):u.deleteVertexArrayOES(j)}function R(j,ot,V){const ct=V.wireframe===!0;let nt=d[j.id];nt===void 0&&(nt={},d[j.id]=nt);let pt=nt[ot.id];pt===void 0&&(pt={},nt[ot.id]=pt);let C=pt[ct];return C===void 0&&(C=v(y()),pt[ct]=C),C}function v(j){const ot=[],V=[],ct=[];for(let nt=0;nt<l;nt++)ot[nt]=0,V[nt]=0,ct[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:V,attributeDivisors:ct,object:j,attributes:{},index:null}}function _(j,ot,V,ct){const nt=m.attributes,pt=ot.attributes;let C=0;const J=V.getAttributes();for(const _t in J)if(J[_t].location>=0){const Z=nt[_t];let mt=pt[_t];if(mt===void 0&&(_t==="instanceMatrix"&&j.instanceMatrix&&(mt=j.instanceMatrix),_t==="instanceColor"&&j.instanceColor&&(mt=j.instanceColor)),Z===void 0||Z.attribute!==mt||mt&&Z.data!==mt.data)return!0;C++}return m.attributesNum!==C||m.index!==ct}function B(j,ot,V,ct){const nt={},pt=ot.attributes;let C=0;const J=V.getAttributes();for(const _t in J)if(J[_t].location>=0){let Z=pt[_t];Z===void 0&&(_t==="instanceMatrix"&&j.instanceMatrix&&(Z=j.instanceMatrix),_t==="instanceColor"&&j.instanceColor&&(Z=j.instanceColor));const mt={};mt.attribute=Z,Z&&Z.data&&(mt.data=Z.data),nt[_t]=mt,C++}m.attributes=nt,m.attributesNum=C,m.index=ct}function D(){const j=m.newAttributes;for(let ot=0,V=j.length;ot<V;ot++)j[ot]=0}function z(j){X(j,0)}function X(j,ot){const V=m.newAttributes,ct=m.enabledAttributes,nt=m.attributeDivisors;V[j]=1,ct[j]===0&&(o.enableVertexAttribArray(j),ct[j]=1),nt[j]!==ot&&((r.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ot),nt[j]=ot)}function k(){const j=m.newAttributes,ot=m.enabledAttributes;for(let V=0,ct=ot.length;V<ct;V++)ot[V]!==j[V]&&(o.disableVertexAttribArray(V),ot[V]=0)}function I(j,ot,V,ct,nt,pt,C){C===!0?o.vertexAttribIPointer(j,ot,V,nt,pt):o.vertexAttribPointer(j,ot,V,ct,nt,pt)}function dt(j,ot,V,ct){if(r.isWebGL2===!1&&(j.isInstancedMesh||ct.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;D();const nt=ct.attributes,pt=V.getAttributes(),C=ot.defaultAttributeValues;for(const J in pt){const _t=pt[J];if(_t.location>=0){let Dt=nt[J];if(Dt===void 0&&(J==="instanceMatrix"&&j.instanceMatrix&&(Dt=j.instanceMatrix),J==="instanceColor"&&j.instanceColor&&(Dt=j.instanceColor)),Dt!==void 0){const Z=Dt.normalized,mt=Dt.itemSize,wt=i.get(Dt);if(wt===void 0)continue;const Yt=wt.buffer,Vt=wt.type,kt=wt.bytesPerElement,ee=r.isWebGL2===!0&&(Vt===o.INT||Vt===o.UNSIGNED_INT||Dt.gpuType===K_);if(Dt.isInterleavedBufferAttribute){const ie=Dt.data,et=ie.stride,Oe=Dt.offset;if(ie.isInstancedInterleavedBuffer){for(let ae=0;ae<_t.locationSize;ae++)X(_t.location+ae,ie.meshPerAttribute);j.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<_t.locationSize;ae++)z(_t.location+ae);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ae=0;ae<_t.locationSize;ae++)I(_t.location+ae,mt/_t.locationSize,Vt,Z,et*kt,(Oe+mt/_t.locationSize*ae)*kt,ee)}else{if(Dt.isInstancedBufferAttribute){for(let ie=0;ie<_t.locationSize;ie++)X(_t.location+ie,Dt.meshPerAttribute);j.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let ie=0;ie<_t.locationSize;ie++)z(_t.location+ie);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ie=0;ie<_t.locationSize;ie++)I(_t.location+ie,mt/_t.locationSize,Vt,Z,mt*kt,mt/_t.locationSize*ie*kt,ee)}}else if(C!==void 0){const Z=C[J];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(_t.location,Z);break;case 3:o.vertexAttrib3fv(_t.location,Z);break;case 4:o.vertexAttrib4fv(_t.location,Z);break;default:o.vertexAttrib1fv(_t.location,Z)}}}}k()}function P(){ft();for(const j in d){const ot=d[j];for(const V in ot){const ct=ot[V];for(const nt in ct)T(ct[nt].object),delete ct[nt];delete ot[V]}delete d[j]}}function E(j){if(d[j.id]===void 0)return;const ot=d[j.id];for(const V in ot){const ct=ot[V];for(const nt in ct)T(ct[nt].object),delete ct[nt];delete ot[V]}delete d[j.id]}function N(j){for(const ot in d){const V=d[ot];if(V[j.id]===void 0)continue;const ct=V[j.id];for(const nt in ct)T(ct[nt].object),delete ct[nt];delete V[j.id]}}function ft(){Et(),g=!0,m!==p&&(m=p,M(m.object))}function Et(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ft,resetDefaultState:Et,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:D,enableAttribute:z,disableUnusedAttributes:k}}function sb(o,t,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function p(g,x,y){if(y===0)return;let M,T;if(l)M=o,T="drawArraysInstanced";else if(M=t.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[T](u,g,x,y),i.update(x,u,y)}function m(g,x,y){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<y;T++)this.render(g[T],x[T]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,y);let T=0;for(let R=0;R<y;R++)T+=x[R];i.update(T,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function ob(o,t,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,z=h||t.has("OES_texture_float"),X=D&&z,k=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:T,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:B,vertexTextures:D,floatFragmentTextures:z,floatVertexTextures:X,maxSamples:k}}function lb(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Fa,d=new be,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||r!==0||l;return l=y,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,M){const T=x.clippingPlanes,R=x.clipIntersection,v=x.clipShadows,_=o.get(x);if(!l||T===null||T.length===0||u&&!v)u?g(null):m();else{const B=u?0:r,D=B*4;let z=_.clippingState||null;p.value=z,z=g(T,y,D,M);for(let X=0;X!==D;++X)z[X]=i[X];_.clippingState=z,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,M,T){const R=x!==null?x.length:0;let v=null;if(R!==0){if(v=p.value,T!==!0||v===null){const _=M+R*4,B=y.matrixWorldInverse;d.getNormalMatrix(B),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,z=M;D!==R;++D,z+=4)h.copy(x[D]).applyMatrix4(B,d),h.normal.toArray(v,z),v[z+3]=h.constant}p.value=v,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,v}}function cb(o){let t=new WeakMap;function i(h,d){return d===vd?h.mapping=As:d===xd&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===xd)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new SS(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class x0 extends g0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,f_=[.125,.215,.35,.446,.526,.582],_r=20,sd=new x0,d_=new Ce;let od=null,ld=0,cd=0;const mr=(1+Math.sqrt(5))/2,xs=1/mr,h_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,mr,xs),new Y(0,mr,-xs),new Y(xs,0,mr),new Y(-xs,0,mr),new Y(mr,xs,0),new Y(-mr,xs,0)];class p_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(od,ld,cd),t.scissorTest=!1,uc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===As||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Fo,format:Ti,colorSpace:la,depthBuffer:!1},l=m_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ub(u)),this._blurMaterial=fb(u,t,i)}return l}_compileMaterial(t){const i=new Xn(this._lodPlanes[0],t);this._renderer.compile(i,sd)}_sceneToCubeUV(t,i,r,l){const d=new ei(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(d_),g.toneMapping=Ga,g.autoClear=!1;const M=new d0({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new Xn(new ka,M);let R=!1;const v=t.background;v?v.isColor&&(M.color.copy(v),t.background=null,R=!0):(M.color.copy(d_),R=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):B===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;uc(l,B*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(T,d),g.render(t,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===As||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Xn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=h_[(l-1)%h_.length];this._blur(t,l-1,l,u,h)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Xn(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),R=u/T,v=isFinite(u)?1+Math.floor(g*R):_r;v>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${_r}`);const _=[];let B=0;for(let I=0;I<_r;++I){const dt=I/R,P=Math.exp(-dt*dt/2);_.push(P),I===0?B+=P:I<v&&(B+=2*P)}for(let I=0;I<_.length;I++)_[I]=_[I]/B;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-r;const z=this._sizeLods[l],X=3*z*(l>D-Ss?l-D+Ss:0),k=4*(this._cubeSize-z);uc(i,X,k,3*z,2*z),p.setRenderTarget(i),p.render(x,sd)}}function ub(o){const t=[],i=[],r=[];let l=o;const u=o-Ss+1+f_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-Ss?p=f_[h-o+Ss-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,x=1+m,y=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,T=6,R=3,v=2,_=1,B=new Float32Array(R*T*M),D=new Float32Array(v*T*M),z=new Float32Array(_*T*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,dt=k>2?0:-1,P=[I,dt,0,I+2/3,dt,0,I+2/3,dt+1,0,I,dt,0,I+2/3,dt+1,0,I,dt+1,0];B.set(P,R*T*k),D.set(y,v*T*k);const E=[k,k,k,k,k,k];z.set(E,_*T*k)}const X=new Ai;X.setAttribute("position",new Fi(B,R)),X.setAttribute("uv",new Fi(D,v)),X.setAttribute("faceIndex",new Fi(z,_)),t.push(X),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function m_(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function fb(o,t,i){const r=new Float32Array(_r),l=new Y(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function g_(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function __(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

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
	`}function db(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vd||p===xd,g=p===As||p===ws;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=t.get(d);return i===null&&(i=new p_(o)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),t.set(d,x),x.texture}else{if(t.has(d))return t.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new p_(o));const y=m?i.fromEquirectangular(d):i.fromCubemap(d);return t.set(d,y),d.addEventListener("dispose",u),y.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function pb(o,t,i,r){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);for(const T in y.morphAttributes){const R=y.morphAttributes[T];for(let v=0,_=R.length;v<_;v++)t.remove(R[v])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(x){const y=x.attributes;for(const T in y)t.update(y[T],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const T in M){const R=M[T];for(let v=0,_=R.length;v<_;v++)t.update(R[v],o.ARRAY_BUFFER)}}function m(x){const y=[],M=x.index,T=x.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let D=0,z=B.length;D<z;D+=3){const X=B[D+0],k=B[D+1],I=B[D+2];y.push(X,k,k,I,I,X)}}else if(T!==void 0){const B=T.array;R=T.version;for(let D=0,z=B.length/3-1;D<z;D+=3){const X=D+0,k=D+1,I=D+2;y.push(X,k,k,I,I,X)}}else return;const v=new(s0(y)?p0:h0)(y,1);v.version=R;const _=u.get(x);_&&t.remove(_),u.set(x,v)}function g(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function mb(o,t,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,T){o.drawElements(u,T,d,M*p),i.update(T,u,1)}function x(M,T,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,T,d,M*p,R),i.update(T,u,R)}function y(M,T,R){if(R===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,T[_]);else{v.multiDrawElementsWEBGL(u,T,0,d,M,0,R);let _=0;for(let B=0;B<R;B++)_+=T[B];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=y}function gb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _b(o,t){return o[0]-t[0]}function vb(o,t){return Math.abs(t[1])-Math.abs(o[1])}function xb(o,t,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new qe,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,x){const y=m.morphTargetInfluences;if(t.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=T!==void 0?T.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let ot=function(){Et.dispose(),u.delete(g),g.removeEventListener("dispose",ot)};var M=ot;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,z=g.morphAttributes.normal!==void 0,X=g.morphAttributes.color!==void 0,k=g.morphAttributes.position||[],I=g.morphAttributes.normal||[],dt=g.morphAttributes.color||[];let P=0;D===!0&&(P=1),z===!0&&(P=2),X===!0&&(P=3);let E=g.attributes.position.count*P,N=1;E>t.maxTextureSize&&(N=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const ft=new Float32Array(E*N*4*R),Et=new c0(ft,E,N,R);Et.type=sa,Et.needsUpdate=!0;const j=P*4;for(let V=0;V<R;V++){const ct=k[V],nt=I[V],pt=dt[V],C=E*N*4*V;for(let J=0;J<ct.count;J++){const _t=J*j;D===!0&&(h.fromBufferAttribute(ct,J),ft[C+_t+0]=h.x,ft[C+_t+1]=h.y,ft[C+_t+2]=h.z,ft[C+_t+3]=0),z===!0&&(h.fromBufferAttribute(nt,J),ft[C+_t+4]=h.x,ft[C+_t+5]=h.y,ft[C+_t+6]=h.z,ft[C+_t+7]=0),X===!0&&(h.fromBufferAttribute(pt,J),ft[C+_t+8]=h.x,ft[C+_t+9]=h.y,ft[C+_t+10]=h.z,ft[C+_t+11]=pt.itemSize===4?h.w:1)}}v={count:R,texture:Et,size:new me(E,N)},u.set(g,v),g.addEventListener("dispose",ot)}let _=0;for(let D=0;D<y.length;D++)_+=y[D];const B=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(o,"morphTargetBaseInfluence",B),x.getUniforms().setValue(o,"morphTargetInfluences",y),x.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const T=y===void 0?0:y.length;let R=r[g.id];if(R===void 0||R.length!==T){R=[];for(let z=0;z<T;z++)R[z]=[z,0];r[g.id]=R}for(let z=0;z<T;z++){const X=R[z];X[0]=z,X[1]=y[z]}R.sort(vb);for(let z=0;z<8;z++)z<T&&R[z][1]?(d[z][0]=R[z][0],d[z][1]=R[z][1]):(d[z][0]=Number.MAX_SAFE_INTEGER,d[z][1]=0);d.sort(_b);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let B=0;for(let z=0;z<8;z++){const X=d[z],k=X[0],I=X[1];k!==Number.MAX_SAFE_INTEGER&&I?(v&&g.getAttribute("morphTarget"+z)!==v[k]&&g.setAttribute("morphTarget"+z,v[k]),_&&g.getAttribute("morphNormal"+z)!==_[k]&&g.setAttribute("morphNormal"+z,_[k]),l[z]=I,B+=I):(v&&g.hasAttribute("morphTarget"+z)===!0&&g.deleteAttribute("morphTarget"+z),_&&g.hasAttribute("morphNormal"+z)===!0&&g.deleteAttribute("morphNormal"+z),l[z]=0)}const D=g.morphTargetsRelative?1:1-B;x.getUniforms().setValue(o,"morphTargetBaseInfluence",D),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function yb(o,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,x=t.get(p,g);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class y0 extends Yn{constructor(t,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:yr,g!==yr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===yr&&(r=Ia),r===void 0&&g===Rs&&(r=xr),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:In,this.minFilter=p!==void 0?p:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const S0=new Yn,M0=new y0(1,1);M0.compareFunction=r0;const E0=new c0,b0=new aS,T0=new _0,v_=[],x_=[],y_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function Us(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=v_[l];if(u===void 0&&(u=new Float32Array(l),v_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Rc(o,t){let i=x_[t];i===void 0&&(i=new Int32Array(t),x_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function Tb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;M_.set(r),o.uniformMatrix2fv(this.addr,!1,M_),mn(i,r)}}function Ab(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;S_.set(r),o.uniformMatrix3fv(this.addr,!1,S_),mn(i,r)}}function wb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;y_.set(r),o.uniformMatrix4fv(this.addr,!1,y_),mn(i,r)}}function Rb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function Db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function Ub(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function Ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function Pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function zb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?M0:S0;i.setTexture2D(t||u,l)}function Bb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||b0,l)}function Fb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||T0,l)}function Ib(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||E0,l)}function Hb(o){switch(o){case 5126:return Sb;case 35664:return Mb;case 35665:return Eb;case 35666:return bb;case 35674:return Tb;case 35675:return Ab;case 35676:return wb;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return Db;case 35669:case 35673:return Lb;case 5125:return Ub;case 36294:return Nb;case 36295:return Ob;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Gb(o,t){o.uniform1fv(this.addr,t)}function Vb(o,t){const i=Us(t,this.size,2);o.uniform2fv(this.addr,i)}function kb(o,t){const i=Us(t,this.size,3);o.uniform3fv(this.addr,i)}function Wb(o,t){const i=Us(t,this.size,4);o.uniform4fv(this.addr,i)}function Xb(o,t){const i=Us(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qb(o,t){const i=Us(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Yb(o,t){const i=Us(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function jb(o,t){o.uniform1iv(this.addr,t)}function Zb(o,t){o.uniform2iv(this.addr,t)}function Kb(o,t){o.uniform3iv(this.addr,t)}function Qb(o,t){o.uniform4iv(this.addr,t)}function Jb(o,t){o.uniform1uiv(this.addr,t)}function $b(o,t){o.uniform2uiv(this.addr,t)}function tT(o,t){o.uniform3uiv(this.addr,t)}function eT(o,t){o.uniform4uiv(this.addr,t)}function nT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||S0,u[h])}function iT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||b0,u[h])}function aT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||T0,u[h])}function rT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||E0,u[h])}function sT(o){switch(o){case 5126:return Gb;case 35664:return Vb;case 35665:return kb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return jb;case 35667:case 35671:return Zb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return $b;case 36295:return tT;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return rT}}class oT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Hb(i.type)}}class lT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sT(i.type)}}class cT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function E_(o,t){o.seq.push(t),o.map[t.id]=t}function uT(o,t,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),h=ud.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){E_(i,m===void 0?new oT(d,o,t):new lT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new cT(d),E_(i,x)),i=x}}}class pc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);uT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function b_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const fT=37297;let dT=0;function hT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function pT(o){const t=He.getPrimaries(He.workingColorSpace),i=He.getPrimaries(o);let r;switch(t===i?r="":t===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":t===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case la:case bc:return[r,"LinearTransferOETF"];case An:case Cd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function T_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+hT(o.getShaderSource(t),h)}else return l}function mT(o,t){const i=pT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function gT(o,t){let i;switch(t){case my:i="Linear";break;case gy:i="Reinhard";break;case _y:i="OptimizedCineon";break;case vy:i="ACESFilmic";break;case yy:i="AgX";break;case xy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function _T(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function vT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function xT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function yT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ms(o){return o!==""}function A_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function w_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(o){return o.replace(ST,ET)}const MT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ET(o,t){let i=xe[t];if(i===void 0){const r=MT.get(t);if(r!==void 0)i=xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bd(i)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(bT,TT)}function TT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	`;return o.isWebGL2&&(t+=`precision ${o.precision} sampler3D;
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
		`),o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===q_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Y_?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function wT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:t="ENVMAP_TYPE_CUBE";break;case Ec:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function CT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case j_:t="ENVMAP_BLENDING_MULTIPLY";break;case hy:t="ENVMAP_BLENDING_MIX";break;case py:t="ENVMAP_BLENDING_ADD";break}return t}function DT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function LT(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=AT(i),m=wT(i),g=RT(i),x=CT(i),y=DT(i),M=i.isWebGL2?"":_T(i),T=vT(i),R=xT(u),v=l.createProgram();let _,B,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),_.length>0&&(_+=`
`),B=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),B.length>0&&(B+=`
`)):(_=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),B=[M,C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?xe.tonemapping_pars_fragment:"",i.toneMapping!==Ga?gT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,mT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ms).join(`
`)),h=bd(h),h=A_(h,i),h=w_(h,i),d=bd(d),d=A_(d,i),d=w_(d,i),h=R_(h),d=R_(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,B=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+B);const z=D+_+h,X=D+B+d,k=b_(l,l.VERTEX_SHADER,z),I=b_(l,l.FRAGMENT_SHADER,X);l.attachShader(v,k),l.attachShader(v,I),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function dt(ft){if(o.debug.checkShaderErrors){const Et=l.getProgramInfoLog(v).trim(),j=l.getShaderInfoLog(k).trim(),ot=l.getShaderInfoLog(I).trim();let V=!0,ct=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,k,I);else{const nt=T_(l,k,"vertex"),pt=T_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+ft.name+`
Material Type: `+ft.type+`

Program Info Log: `+Et+`
`+nt+`
`+pt)}else Et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Et):(j===""||ot==="")&&(ct=!1);ct&&(ft.diagnostics={runnable:V,programLog:Et,vertexShader:{log:j,prefix:_},fragmentShader:{log:ot,prefix:B}})}l.deleteShader(k),l.deleteShader(I),P=new pc(l,v),E=yT(l,v)}let P;this.getUniforms=function(){return P===void 0&&dt(this),P};let E;this.getAttributes=function(){return E===void 0&&dt(this),E};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(v,fT)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dT++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=I,this}let UT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new OT(t),i.set(t,r)),r}}class OT{constructor(t){this.id=UT++,this.code=t,this.usedTimes=0}}function PT(o,t,i,r,l,u,h){const d=new u0,p=new NT,m=new Set,g=[],x=l.isWebGL2,y=l.logarithmicDepthBuffer,M=l.vertexTextures;let T=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,N,ft,Et,j){const ot=Et.fog,V=j.geometry,ct=E.isMeshStandardMaterial?Et.environment:null,nt=(E.isMeshStandardMaterial?i:t).get(E.envMap||ct),pt=nt&&nt.mapping===Ec?nt.image.height:null,C=R[E.type];E.precision!==null&&(T=l.getMaxPrecision(E.precision),T!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",T,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=J!==void 0?J.length:0;let Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let Z,mt,wt,Yt;if(C){const ce=Pi[C];Z=ce.vertexShader,mt=ce.fragmentShader}else Z=E.vertexShader,mt=E.fragmentShader,p.update(E),wt=p.getVertexShaderID(E),Yt=p.getFragmentShaderID(E);const Vt=o.getRenderTarget(),kt=j.isInstancedMesh===!0,ee=j.isBatchedMesh===!0,ie=!!E.map,et=!!E.matcap,Oe=!!nt,ae=!!E.aoMap,le=!!E.lightMap,Qt=!!E.bumpMap,Ne=!!E.normalMap,ue=!!E.displacementMap,L=!!E.emissiveMap,A=!!E.metalnessMap,lt=!!E.roughnessMap,zt=E.anisotropy>0,Rt=E.clearcoat>0,K=E.iridescence>0,st=E.sheen>0,it=E.transmission>0,ht=zt&&!!E.anisotropyMap,xt=Rt&&!!E.clearcoatMap,At=Rt&&!!E.clearcoatNormalMap,rt=Rt&&!!E.clearcoatRoughnessMap,se=K&&!!E.iridescenceMap,jt=K&&!!E.iridescenceThicknessMap,Ut=st&&!!E.sheenColorMap,Bt=st&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,Nt=!!E.specularColorMap,O=!!E.specularIntensityMap,gt=it&&!!E.transmissionMap,Lt=it&&!!E.thicknessMap,It=!!E.gradientMap,U=!!E.alphaMap,bt=E.alphaTest>0,Mt=!!E.alphaHash,Xt=!!E.extensions;let Jt=Ga;E.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const ve={isWebGL2:x,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:Z,fragmentShader:mt,defines:E.defines,customVertexShaderID:wt,customFragmentShaderID:Yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:T,batching:ee,instancing:kt,instancingColor:kt&&j.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Vt===null?o.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:la,alphaToCoverage:!!E.alphaToCoverage,map:ie,matcap:et,envMap:Oe,envMapMode:Oe&&nt.mapping,envMapCubeUVHeight:pt,aoMap:ae,lightMap:le,bumpMap:Qt,normalMap:Ne,displacementMap:M&&ue,emissiveMap:L,normalMapObjectSpace:Ne&&E.normalMapType===Ly,normalMapTangentSpace:Ne&&E.normalMapType===a0,metalnessMap:A,roughnessMap:lt,anisotropy:zt,anisotropyMap:ht,clearcoat:Rt,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:rt,iridescence:K,iridescenceMap:se,iridescenceThicknessMap:jt,sheen:st,sheenColorMap:Ut,sheenRoughnessMap:Bt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:O,transmission:it,transmissionMap:gt,thicknessMap:Lt,gradientMap:It,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:U,alphaTest:bt,alphaHash:Mt,combine:E.combine,mapUv:ie&&v(E.map.channel),aoMapUv:ae&&v(E.aoMap.channel),lightMapUv:le&&v(E.lightMap.channel),bumpMapUv:Qt&&v(E.bumpMap.channel),normalMapUv:Ne&&v(E.normalMap.channel),displacementMapUv:ue&&v(E.displacementMap.channel),emissiveMapUv:L&&v(E.emissiveMap.channel),metalnessMapUv:A&&v(E.metalnessMap.channel),roughnessMapUv:lt&&v(E.roughnessMap.channel),anisotropyMapUv:ht&&v(E.anisotropyMap.channel),clearcoatMapUv:xt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(E.sheenRoughnessMap.channel),specularMapUv:Gt&&v(E.specularMap.channel),specularColorMapUv:Nt&&v(E.specularColorMap.channel),specularIntensityMapUv:O&&v(E.specularIntensityMap.channel),transmissionMapUv:gt&&v(E.transmissionMap.channel),thicknessMapUv:Lt&&v(E.thicknessMap.channel),alphaMapUv:U&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ne||zt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(ie||U),fog:!!ot,useFog:E.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Dt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&ft.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ie&&E.map.isVideoTexture===!0&&He.getTransfer(E.map.colorSpace)===Xe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zi,flipSided:E.side===qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Xt&&E.extensions.derivatives===!0,extensionFragDepth:Xt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Xt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Xt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Xt&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=m.has(1),ve.vertexUv2s=m.has(2),ve.vertexUv3s=m.has(3),m.clear(),ve}function B(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ft in E.defines)N.push(ft),N.push(E.defines[ft]);return E.isRawShaderMaterial===!1&&(D(N,E),z(N,E),N.push(o.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function D(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function z(E,N){d.disableAll(),N.isWebGL2&&d.enable(0),N.supportsVertexTextures&&d.enable(1),N.instancing&&d.enable(2),N.instancingColor&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),E.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.skinning&&d.enable(4),N.morphTargets&&d.enable(5),N.morphNormals&&d.enable(6),N.morphColors&&d.enable(7),N.premultipliedAlpha&&d.enable(8),N.shadowMapEnabled&&d.enable(9),N.useLegacyLights&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.alphaToCoverage&&d.enable(20),E.push(d.mask)}function X(E){const N=R[E.type];let ft;if(N){const Et=Pi[N];ft=_S.clone(Et.uniforms)}else ft=E.uniforms;return ft}function k(E,N){let ft;for(let Et=0,j=g.length;Et<j;Et++){const ot=g[Et];if(ot.cacheKey===N){ft=ot,++ft.usedTimes;break}}return ft===void 0&&(ft=new LT(o,N,E,u),g.push(ft)),ft}function I(E){if(--E.usedTimes===0){const N=g.indexOf(E);g[N]=g[g.length-1],g.pop(),E.destroy()}}function dt(E){p.remove(E)}function P(){p.dispose()}return{getParameters:_,getProgramCacheKey:B,getUniforms:X,acquireProgram:k,releaseProgram:I,releaseShaderCache:dt,programs:g,dispose:P}}function zT(){let o=new WeakMap;function t(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:t,remove:i,update:r,dispose:l}}function BT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function D_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function L_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,y,M,T,R,v){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:T,renderOrder:x.renderOrder,z:R,group:v},o[t]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=T,_.renderOrder=x.renderOrder,_.z=R,_.group=v),t++,_}function d(x,y,M,T,R,v){const _=h(x,y,M,T,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(x,y,M,T,R,v){const _=h(x,y,M,T,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,y){i.length>1&&i.sort(x||BT),r.length>1&&r.sort(y||D_),l.length>1&&l.sort(y||D_)}function g(){for(let x=t,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function FT(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new L_,o.set(r,[h])):l>=u.length?(h=new L_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function IT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new Ce};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=i,i}}}function HT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let GT=0;function VT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kT(o,t){const i=new IT,r=HT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new Y);const u=new Y,h=new sn,d=new sn;function p(g,x){let y=0,M=0,T=0;for(let ft=0;ft<9;ft++)l.probe[ft].set(0,0,0);let R=0,v=0,_=0,B=0,D=0,z=0,X=0,k=0,I=0,dt=0,P=0;g.sort(VT);const E=x===!0?Math.PI:1;for(let ft=0,Et=g.length;ft<Et;ft++){const j=g[ft],ot=j.color,V=j.intensity,ct=j.distance,nt=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)y+=ot.r*V*E,M+=ot.g*V*E,T+=ot.b*V*E;else if(j.isLightProbe){for(let pt=0;pt<9;pt++)l.probe[pt].addScaledVector(j.sh.coefficients[pt],V);P++}else if(j.isDirectionalLight){const pt=i.get(j);if(pt.color.copy(j.color).multiplyScalar(j.intensity*E),j.castShadow){const C=j.shadow,J=r.get(j);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,l.directionalShadow[R]=J,l.directionalShadowMap[R]=nt,l.directionalShadowMatrix[R]=j.shadow.matrix,z++}l.directional[R]=pt,R++}else if(j.isSpotLight){const pt=i.get(j);pt.position.setFromMatrixPosition(j.matrixWorld),pt.color.copy(ot).multiplyScalar(V*E),pt.distance=ct,pt.coneCos=Math.cos(j.angle),pt.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),pt.decay=j.decay,l.spot[_]=pt;const C=j.shadow;if(j.map&&(l.spotLightMap[I]=j.map,I++,C.updateMatrices(j),j.castShadow&&dt++),l.spotLightMatrix[_]=C.matrix,j.castShadow){const J=r.get(j);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,l.spotShadow[_]=J,l.spotShadowMap[_]=nt,k++}_++}else if(j.isRectAreaLight){const pt=i.get(j);pt.color.copy(ot).multiplyScalar(V),pt.halfWidth.set(j.width*.5,0,0),pt.halfHeight.set(0,j.height*.5,0),l.rectArea[B]=pt,B++}else if(j.isPointLight){const pt=i.get(j);if(pt.color.copy(j.color).multiplyScalar(j.intensity*E),pt.distance=j.distance,pt.decay=j.decay,j.castShadow){const C=j.shadow,J=r.get(j);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,J.shadowCameraNear=C.camera.near,J.shadowCameraFar=C.camera.far,l.pointShadow[v]=J,l.pointShadowMap[v]=nt,l.pointShadowMatrix[v]=j.shadow.matrix,X++}l.point[v]=pt,v++}else if(j.isHemisphereLight){const pt=i.get(j);pt.skyColor.copy(j.color).multiplyScalar(V*E),pt.groundColor.copy(j.groundColor).multiplyScalar(V*E),l.hemi[D]=pt,D++}}B>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_FLOAT_1,l.rectAreaLTC2=Wt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Wt.LTC_HALF_1,l.rectAreaLTC2=Wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=T;const N=l.hash;(N.directionalLength!==R||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==B||N.hemiLength!==D||N.numDirectionalShadows!==z||N.numPointShadows!==X||N.numSpotShadows!==k||N.numSpotMaps!==I||N.numLightProbes!==P)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=B,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=z,l.directionalShadowMap.length=z,l.pointShadow.length=X,l.pointShadowMap.length=X,l.spotShadow.length=k,l.spotShadowMap.length=k,l.directionalShadowMatrix.length=z,l.pointShadowMatrix.length=X,l.spotLightMatrix.length=k+I-dt,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=dt,l.numLightProbes=P,N.directionalLength=R,N.pointLength=v,N.spotLength=_,N.rectAreaLength=B,N.hemiLength=D,N.numDirectionalShadows=z,N.numPointShadows=X,N.numSpotShadows=k,N.numSpotMaps=I,N.numLightProbes=P,l.version=GT++)}function m(g,x){let y=0,M=0,T=0,R=0,v=0;const _=x.matrixWorldInverse;for(let B=0,D=g.length;B<D;B++){const z=g[B];if(z.isDirectionalLight){const X=l.directional[y];X.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),X.direction.sub(u),X.direction.transformDirection(_),y++}else if(z.isSpotLight){const X=l.spot[T];X.position.setFromMatrixPosition(z.matrixWorld),X.position.applyMatrix4(_),X.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),X.direction.sub(u),X.direction.transformDirection(_),T++}else if(z.isRectAreaLight){const X=l.rectArea[R];X.position.setFromMatrixPosition(z.matrixWorld),X.position.applyMatrix4(_),d.identity(),h.copy(z.matrixWorld),h.premultiply(_),d.extractRotation(h),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),X.halfWidth.applyMatrix4(d),X.halfHeight.applyMatrix4(d),R++}else if(z.isPointLight){const X=l.point[M];X.position.setFromMatrixPosition(z.matrixWorld),X.position.applyMatrix4(_),M++}else if(z.isHemisphereLight){const X=l.hemi[v];X.direction.setFromMatrixPosition(z.matrixWorld),X.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function U_(o,t){const i=new kT(o,t),r=[],l=[];function u(){r.length=0,l.length=0}function h(x){r.push(x)}function d(x){l.push(x)}function p(x){i.setup(r,x)}function m(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function WT(o,t){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new U_(o,t),i.set(u,[p])):h>=d.length?(p=new U_(o,t),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class XT extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qT extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
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
}`;function ZT(o,t,i){let r=new Ud;const l=new me,u=new me,h=new qe,d=new XT({depthPacking:Dy}),p=new qT,m={},g=i.maxTextureSize,x={[Wa]:qn,[qn]:Wa,[zi]:zi},y=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:YT,fragmentShader:jT}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ai;T.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Xn(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q_;let _=this.type;this.render=function(k,I,dt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const P=o.getRenderTarget(),E=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),ft=o.state;ft.setBlending(Ha),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const Et=_!==ra&&this.type===ra,j=_===ra&&this.type!==ra;for(let ot=0,V=k.length;ot<V;ot++){const ct=k[ot],nt=ct.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;l.copy(nt.mapSize);const pt=nt.getFrameExtents();if(l.multiply(pt),u.copy(nt.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/pt.x),l.x=u.x*pt.x,nt.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/pt.y),l.y=u.y*pt.y,nt.mapSize.y=u.y)),nt.map===null||Et===!0||j===!0){const J=this.type!==ra?{minFilter:In,magFilter:In}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Mr(l.x,l.y,J),nt.map.texture.name=ct.name+".shadowMap",nt.camera.updateProjectionMatrix()}o.setRenderTarget(nt.map),o.clear();const C=nt.getViewportCount();for(let J=0;J<C;J++){const _t=nt.getViewport(J);h.set(u.x*_t.x,u.y*_t.y,u.x*_t.z,u.y*_t.w),ft.viewport(h),nt.updateMatrices(ct,J),r=nt.getFrustum(),z(I,dt,nt.camera,ct,this.type)}nt.isPointLightShadow!==!0&&this.type===ra&&B(nt,dt),nt.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(P,E,N)};function B(k,I){const dt=t.update(R);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Mr(l.x,l.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,dt,y,R,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,dt,M,R,null)}function D(k,I,dt,P){let E=null;const N=dt.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(N!==void 0)E=N;else if(E=dt.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ft=E.uuid,Et=I.uuid;let j=m[ft];j===void 0&&(j={},m[ft]=j);let ot=j[Et];ot===void 0&&(ot=E.clone(),j[Et]=ot,I.addEventListener("dispose",X)),E=ot}if(E.visible=I.visible,E.wireframe=I.wireframe,P===ra?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:x[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,dt.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ft=o.properties.get(E);ft.light=dt}return E}function z(k,I,dt,P,E){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&E===ra)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,k.matrixWorld);const Et=t.update(k),j=k.material;if(Array.isArray(j)){const ot=Et.groups;for(let V=0,ct=ot.length;V<ct;V++){const nt=ot[V],pt=j[nt.materialIndex];if(pt&&pt.visible){const C=D(k,pt,P,E);k.onBeforeShadow(o,k,I,dt,Et,C,nt),o.renderBufferDirect(dt,null,Et,C,k,nt),k.onAfterShadow(o,k,I,dt,Et,C,nt)}}}else if(j.visible){const ot=D(k,j,P,E);k.onBeforeShadow(o,k,I,dt,Et,ot,null),o.renderBufferDirect(dt,null,Et,ot,k,null),k.onAfterShadow(o,k,I,dt,Et,ot,null)}}const ft=k.children;for(let Et=0,j=ft.length;Et<j;Et++)z(ft[Et],I,dt,P,E)}function X(k){k.target.removeEventListener("dispose",X);for(const dt in m){const P=m[dt],E=k.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function KT(o,t,i){const r=i.isWebGL2;function l(){let U=!1;const bt=new qe;let Mt=null;const Xt=new qe(0,0,0,0);return{setMask:function(Jt){Mt!==Jt&&!U&&(o.colorMask(Jt,Jt,Jt,Jt),Mt=Jt)},setLocked:function(Jt){U=Jt},setClear:function(Jt,ve,ce,ye,Me){Me===!0&&(Jt*=ye,ve*=ye,ce*=ye),bt.set(Jt,ve,ce,ye),Xt.equals(bt)===!1&&(o.clearColor(Jt,ve,ce,ye),Xt.copy(bt))},reset:function(){U=!1,Mt=null,Xt.set(-1,0,0,0)}}}function u(){let U=!1,bt=null,Mt=null,Xt=null;return{setTest:function(Jt){Jt?kt(o.DEPTH_TEST):ee(o.DEPTH_TEST)},setMask:function(Jt){bt!==Jt&&!U&&(o.depthMask(Jt),bt=Jt)},setFunc:function(Jt){if(Mt!==Jt){switch(Jt){case sy:o.depthFunc(o.NEVER);break;case oy:o.depthFunc(o.ALWAYS);break;case ly:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case cy:o.depthFunc(o.EQUAL);break;case uy:o.depthFunc(o.GEQUAL);break;case fy:o.depthFunc(o.GREATER);break;case dy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Mt=Jt}},setLocked:function(Jt){U=Jt},setClear:function(Jt){Xt!==Jt&&(o.clearDepth(Jt),Xt=Jt)},reset:function(){U=!1,bt=null,Mt=null,Xt=null}}}function h(){let U=!1,bt=null,Mt=null,Xt=null,Jt=null,ve=null,ce=null,ye=null,Me=null;return{setTest:function(he){U||(he?kt(o.STENCIL_TEST):ee(o.STENCIL_TEST))},setMask:function(he){bt!==he&&!U&&(o.stencilMask(he),bt=he)},setFunc:function(he,De,Ye){(Mt!==he||Xt!==De||Jt!==Ye)&&(o.stencilFunc(he,De,Ye),Mt=he,Xt=De,Jt=Ye)},setOp:function(he,De,Ye){(ve!==he||ce!==De||ye!==Ye)&&(o.stencilOp(he,De,Ye),ve=he,ce=De,ye=Ye)},setLocked:function(he){U=he},setClear:function(he){Me!==he&&(o.clearStencil(he),Me=he)},reset:function(){U=!1,bt=null,Mt=null,Xt=null,Jt=null,ve=null,ce=null,ye=null,Me=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,x=new WeakMap;let y={},M={},T=new WeakMap,R=[],v=null,_=!1,B=null,D=null,z=null,X=null,k=null,I=null,dt=null,P=new Ce(0,0,0),E=0,N=!1,ft=null,Et=null,j=null,ot=null,V=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,pt=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(C)[1]),nt=pt>=1):C.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),nt=pt>=2);let J=null,_t={};const Dt=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),mt=new qe().fromArray(Dt),wt=new qe().fromArray(Z);function Yt(U,bt,Mt,Xt){const Jt=new Uint8Array(4),ve=o.createTexture();o.bindTexture(U,ve),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ce=0;ce<Mt;ce++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(bt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Jt):o.texImage2D(bt+ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Jt);return ve}const Vt={};Vt[o.TEXTURE_2D]=Yt(o.TEXTURE_2D,o.TEXTURE_2D,1),Vt[o.TEXTURE_CUBE_MAP]=Yt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Vt[o.TEXTURE_2D_ARRAY]=Yt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Vt[o.TEXTURE_3D]=Yt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),kt(o.DEPTH_TEST),p.setFunc(mc),ue(!1),L(dg),kt(o.CULL_FACE),Qt(Ha);function kt(U){y[U]!==!0&&(o.enable(U),y[U]=!0)}function ee(U){y[U]!==!1&&(o.disable(U),y[U]=!1)}function ie(U,bt){return M[U]!==bt?(o.bindFramebuffer(U,bt),M[U]=bt,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=bt),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=bt)),!0):!1}function et(U,bt){let Mt=R,Xt=!1;if(U)if(Mt=T.get(bt),Mt===void 0&&(Mt=[],T.set(bt,Mt)),U.isWebGLMultipleRenderTargets){const Jt=U.texture;if(Mt.length!==Jt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,ce=Jt.length;ve<ce;ve++)Mt[ve]=o.COLOR_ATTACHMENT0+ve;Mt.length=Jt.length,Xt=!0}}else Mt[0]!==o.COLOR_ATTACHMENT0&&(Mt[0]=o.COLOR_ATTACHMENT0,Xt=!0);else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Xt=!0);Xt&&(i.isWebGL2?o.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function Oe(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const ae={[gr]:o.FUNC_ADD,[Xx]:o.FUNC_SUBTRACT,[qx]:o.FUNC_REVERSE_SUBTRACT};if(r)ae[mg]=o.MIN,ae[gg]=o.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(ae[mg]=U.MIN_EXT,ae[gg]=U.MAX_EXT)}const le={[Yx]:o.ZERO,[jx]:o.ONE,[Zx]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[ey]:o.SRC_ALPHA_SATURATE,[$x]:o.DST_COLOR,[Qx]:o.DST_ALPHA,[Kx]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[ty]:o.ONE_MINUS_DST_COLOR,[Jx]:o.ONE_MINUS_DST_ALPHA,[ny]:o.CONSTANT_COLOR,[iy]:o.ONE_MINUS_CONSTANT_COLOR,[ay]:o.CONSTANT_ALPHA,[ry]:o.ONE_MINUS_CONSTANT_ALPHA};function Qt(U,bt,Mt,Xt,Jt,ve,ce,ye,Me,he){if(U===Ha){_===!0&&(ee(o.BLEND),_=!1);return}if(_===!1&&(kt(o.BLEND),_=!0),U!==Wx){if(U!==B||he!==N){if((D!==gr||k!==gr)&&(o.blendEquation(o.FUNC_ADD),D=gr,k=gr),he)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}z=null,X=null,I=null,dt=null,P.set(0,0,0),E=0,B=U,N=he}return}Jt=Jt||bt,ve=ve||Mt,ce=ce||Xt,(bt!==D||Jt!==k)&&(o.blendEquationSeparate(ae[bt],ae[Jt]),D=bt,k=Jt),(Mt!==z||Xt!==X||ve!==I||ce!==dt)&&(o.blendFuncSeparate(le[Mt],le[Xt],le[ve],le[ce]),z=Mt,X=Xt,I=ve,dt=ce),(ye.equals(P)===!1||Me!==E)&&(o.blendColor(ye.r,ye.g,ye.b,Me),P.copy(ye),E=Me),B=U,N=!1}function Ne(U,bt){U.side===zi?ee(o.CULL_FACE):kt(o.CULL_FACE);let Mt=U.side===qn;bt&&(Mt=!Mt),ue(Mt),U.blending===Es&&U.transparent===!1?Qt(Ha):Qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const Xt=U.stencilWrite;m.setTest(Xt),Xt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?kt(o.SAMPLE_ALPHA_TO_COVERAGE):ee(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(U){ft!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),ft=U)}function L(U){U!==Vx?(kt(o.CULL_FACE),U!==Et&&(U===dg?o.cullFace(o.BACK):U===kx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ee(o.CULL_FACE),Et=U}function A(U){U!==j&&(nt&&o.lineWidth(U),j=U)}function lt(U,bt,Mt){U?(kt(o.POLYGON_OFFSET_FILL),(ot!==bt||V!==Mt)&&(o.polygonOffset(bt,Mt),ot=bt,V=Mt)):ee(o.POLYGON_OFFSET_FILL)}function zt(U){U?kt(o.SCISSOR_TEST):ee(o.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=o.TEXTURE0+ct-1),J!==U&&(o.activeTexture(U),J=U)}function K(U,bt,Mt){Mt===void 0&&(J===null?Mt=o.TEXTURE0+ct-1:Mt=J);let Xt=_t[Mt];Xt===void 0&&(Xt={type:void 0,texture:void 0},_t[Mt]=Xt),(Xt.type!==U||Xt.texture!==bt)&&(J!==Mt&&(o.activeTexture(Mt),J=Mt),o.bindTexture(U,bt||Vt[U]),Xt.type=U,Xt.texture=bt)}function st(){const U=_t[J];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){mt.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),mt.copy(U))}function O(U){wt.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),wt.copy(U))}function gt(U,bt){let Mt=x.get(bt);Mt===void 0&&(Mt=new WeakMap,x.set(bt,Mt));let Xt=Mt.get(U);Xt===void 0&&(Xt=o.getUniformBlockIndex(bt,U.name),Mt.set(U,Xt))}function Lt(U,bt){const Xt=x.get(bt).get(U);g.get(bt)!==Xt&&(o.uniformBlockBinding(bt,Xt,U.__bindingPointIndex),g.set(bt,Xt))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},J=null,_t={},M={},T=new WeakMap,R=[],v=null,_=!1,B=null,D=null,z=null,X=null,k=null,I=null,dt=null,P=new Ce(0,0,0),E=0,N=!1,ft=null,Et=null,j=null,ot=null,V=null,mt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:kt,disable:ee,bindFramebuffer:ie,drawBuffers:et,useProgram:Oe,setBlending:Qt,setMaterial:Ne,setFlipSided:ue,setCullFace:L,setLineWidth:A,setPolygonOffset:lt,setScissorTest:zt,activeTexture:Rt,bindTexture:K,unbindTexture:st,compressedTexImage2D:it,compressedTexImage3D:ht,texImage2D:Bt,texImage3D:Gt,updateUBOMapping:gt,uniformBlockBinding:Lt,texStorage2D:jt,texStorage3D:Ut,texSubImage2D:xt,texSubImage3D:At,compressedTexSubImage2D:rt,compressedTexSubImage3D:se,scissor:Nt,viewport:O,reset:It}}function QT(o,t,i,r,l,u,h){const d=l.isWebGL2,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return M?new OffscreenCanvas(L,A):Sc("canvas")}function R(L,A,lt,zt){let Rt=1;if((L.width>zt||L.height>zt)&&(Rt=zt/Math.max(L.width,L.height)),Rt<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const K=A?yc:Math.floor,st=K(Rt*L.width),it=K(Rt*L.height);x===void 0&&(x=T(st,it));const ht=lt?T(st,it):x;return ht.width=st,ht.height=it,ht.getContext("2d").drawImage(L,0,0,st,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+st+"x"+it+")."),ht}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Ed(L.width)&&Ed(L.height)}function _(L){return d?!1:L.wrapS!==bi||L.wrapT!==bi||L.minFilter!==In&&L.minFilter!==Wn}function B(L,A){return L.generateMipmaps&&A&&L.minFilter!==In&&L.minFilter!==Wn}function D(L){o.generateMipmap(L)}function z(L,A,lt,zt,Rt=!1){if(d===!1)return A;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=A;if(A===o.RED&&(lt===o.FLOAT&&(K=o.R32F),lt===o.HALF_FLOAT&&(K=o.R16F),lt===o.UNSIGNED_BYTE&&(K=o.R8)),A===o.RED_INTEGER&&(lt===o.UNSIGNED_BYTE&&(K=o.R8UI),lt===o.UNSIGNED_SHORT&&(K=o.R16UI),lt===o.UNSIGNED_INT&&(K=o.R32UI),lt===o.BYTE&&(K=o.R8I),lt===o.SHORT&&(K=o.R16I),lt===o.INT&&(K=o.R32I)),A===o.RG&&(lt===o.FLOAT&&(K=o.RG32F),lt===o.HALF_FLOAT&&(K=o.RG16F),lt===o.UNSIGNED_BYTE&&(K=o.RG8)),A===o.RGBA){const st=Rt?gc:He.getTransfer(zt);lt===o.FLOAT&&(K=o.RGBA32F),lt===o.HALF_FLOAT&&(K=o.RGBA16F),lt===o.UNSIGNED_BYTE&&(K=st===Xe?o.SRGB8_ALPHA8:o.RGBA8),lt===o.UNSIGNED_SHORT_4_4_4_4&&(K=o.RGBA4),lt===o.UNSIGNED_SHORT_5_5_5_1&&(K=o.RGB5_A1)}return(K===o.R16F||K===o.R32F||K===o.RG16F||K===o.RG32F||K===o.RGBA16F||K===o.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function X(L,A,lt){return B(L,lt)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==Wn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function k(L){return L===In||L===_g||L===Co?o.NEAREST:o.LINEAR}function I(L){const A=L.target;A.removeEventListener("dispose",I),P(A),A.isVideoTexture&&g.delete(A)}function dt(L){const A=L.target;A.removeEventListener("dispose",dt),N(A)}function P(L){const A=r.get(L);if(A.__webglInit===void 0)return;const lt=L.source,zt=y.get(lt);if(zt){const Rt=zt[A.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&E(L),Object.keys(zt).length===0&&y.delete(lt)}r.remove(L)}function E(L){const A=r.get(L);o.deleteTexture(A.__webglTexture);const lt=L.source,zt=y.get(lt);delete zt[A.__cacheKey],h.memory.textures--}function N(L){const A=L.texture,lt=r.get(L),zt=r.get(A);if(zt.__webglTexture!==void 0&&(o.deleteTexture(zt.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(lt.__webglFramebuffer[Rt]))for(let K=0;K<lt.__webglFramebuffer[Rt].length;K++)o.deleteFramebuffer(lt.__webglFramebuffer[Rt][K]);else o.deleteFramebuffer(lt.__webglFramebuffer[Rt]);lt.__webglDepthbuffer&&o.deleteRenderbuffer(lt.__webglDepthbuffer[Rt])}else{if(Array.isArray(lt.__webglFramebuffer))for(let Rt=0;Rt<lt.__webglFramebuffer.length;Rt++)o.deleteFramebuffer(lt.__webglFramebuffer[Rt]);else o.deleteFramebuffer(lt.__webglFramebuffer);if(lt.__webglDepthbuffer&&o.deleteRenderbuffer(lt.__webglDepthbuffer),lt.__webglMultisampledFramebuffer&&o.deleteFramebuffer(lt.__webglMultisampledFramebuffer),lt.__webglColorRenderbuffer)for(let Rt=0;Rt<lt.__webglColorRenderbuffer.length;Rt++)lt.__webglColorRenderbuffer[Rt]&&o.deleteRenderbuffer(lt.__webglColorRenderbuffer[Rt]);lt.__webglDepthRenderbuffer&&o.deleteRenderbuffer(lt.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Rt=0,K=A.length;Rt<K;Rt++){const st=r.get(A[Rt]);st.__webglTexture&&(o.deleteTexture(st.__webglTexture),h.memory.textures--),r.remove(A[Rt])}r.remove(A),r.remove(L)}let ft=0;function Et(){ft=0}function j(){const L=ft;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),ft+=1,L}function ot(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function V(L,A){const lt=r.get(L);if(L.isVideoTexture&&Ne(L),L.isRenderTargetTexture===!1&&L.version>0&&lt.__version!==L.version){const zt=L.image;if(zt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(zt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(lt,L,A);return}}i.bindTexture(o.TEXTURE_2D,lt.__webglTexture,o.TEXTURE0+A)}function ct(L,A){const lt=r.get(L);if(L.version>0&&lt.__version!==L.version){mt(lt,L,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,lt.__webglTexture,o.TEXTURE0+A)}function nt(L,A){const lt=r.get(L);if(L.version>0&&lt.__version!==L.version){mt(lt,L,A);return}i.bindTexture(o.TEXTURE_3D,lt.__webglTexture,o.TEXTURE0+A)}function pt(L,A){const lt=r.get(L);if(L.version>0&&lt.__version!==L.version){wt(lt,L,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture,o.TEXTURE0+A)}const C={[yd]:o.REPEAT,[bi]:o.CLAMP_TO_EDGE,[Sd]:o.MIRRORED_REPEAT},J={[In]:o.NEAREST,[_g]:o.NEAREST_MIPMAP_NEAREST,[Co]:o.NEAREST_MIPMAP_LINEAR,[Wn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},_t={[Uy]:o.NEVER,[Fy]:o.ALWAYS,[Ny]:o.LESS,[r0]:o.LEQUAL,[Oy]:o.EQUAL,[By]:o.GEQUAL,[Py]:o.GREATER,[zy]:o.NOTEQUAL};function Dt(L,A,lt){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Wn||A.magFilter===Bf||A.magFilter===Co||A.magFilter===vr||A.minFilter===Wn||A.minFilter===Bf||A.minFilter===Co||A.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),lt?(o.texParameteri(L,o.TEXTURE_WRAP_S,C[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,C[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,C[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,J[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,J[A.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==bi||A.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,k(A.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,k(A.minFilter)),A.minFilter!==In&&A.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,_t[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const zt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===In||A.minFilter!==Co&&A.minFilter!==vr||A.type===sa&&t.has("OES_texture_float_linear")===!1||d===!1&&A.type===Fo&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(L,zt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function Z(L,A){let lt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",I));const zt=A.source;let Rt=y.get(zt);Rt===void 0&&(Rt={},y.set(zt,Rt));const K=ot(A);if(K!==L.__cacheKey){Rt[K]===void 0&&(Rt[K]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,lt=!0),Rt[K].usedTimes++;const st=Rt[L.__cacheKey];st!==void 0&&(Rt[L.__cacheKey].usedTimes--,st.usedTimes===0&&E(A)),L.__cacheKey=K,L.__webglTexture=Rt[K].texture}return lt}function mt(L,A,lt){let zt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(zt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(zt=o.TEXTURE_3D);const Rt=Z(L,A),K=A.source;i.bindTexture(zt,L.__webglTexture,o.TEXTURE0+lt);const st=r.get(K);if(K.version!==st.__version||Rt===!0){i.activeTexture(o.TEXTURE0+lt);const it=He.getPrimaries(He.workingColorSpace),ht=A.colorSpace===mi?null:He.getPrimaries(A.colorSpace),xt=A.colorSpace===mi||it===ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=_(A)&&v(A.image)===!1;let rt=R(A.image,At,!1,l.maxTextureSize);rt=ue(A,rt);const se=v(rt)||d,jt=u.convert(A.format,A.colorSpace);let Ut=u.convert(A.type),Bt=z(A.internalFormat,jt,Ut,A.colorSpace,A.isVideoTexture);Dt(zt,A,se);let Gt;const Nt=A.mipmaps,O=d&&A.isVideoTexture!==!0&&Bt!==n0,gt=st.__version===void 0||Rt===!0,Lt=K.dataReady,It=X(A,rt,se);if(A.isDepthTexture)Bt=o.DEPTH_COMPONENT,d?A.type===sa?Bt=o.DEPTH_COMPONENT32F:A.type===Ia?Bt=o.DEPTH_COMPONENT24:A.type===xr?Bt=o.DEPTH24_STENCIL8:Bt=o.DEPTH_COMPONENT16:A.type===sa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===yr&&Bt===o.DEPTH_COMPONENT&&A.type!==Rd&&A.type!==Ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ia,Ut=u.convert(A.type)),A.format===Rs&&Bt===o.DEPTH_COMPONENT&&(Bt=o.DEPTH_STENCIL,A.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=xr,Ut=u.convert(A.type))),gt&&(O?i.texStorage2D(o.TEXTURE_2D,1,Bt,rt.width,rt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,rt.width,rt.height,0,jt,Ut,null));else if(A.isDataTexture)if(Nt.length>0&&se){O&&gt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,Nt[0].width,Nt[0].height);for(let U=0,bt=Nt.length;U<bt;U++)Gt=Nt[U],O?Lt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Gt.width,Gt.height,jt,Ut,Gt.data):i.texImage2D(o.TEXTURE_2D,U,Bt,Gt.width,Gt.height,0,jt,Ut,Gt.data);A.generateMipmaps=!1}else O?(gt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,rt.width,rt.height),Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,rt.width,rt.height,jt,Ut,rt.data)):i.texImage2D(o.TEXTURE_2D,0,Bt,rt.width,rt.height,0,jt,Ut,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){O&&gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Bt,Nt[0].width,Nt[0].height,rt.depth);for(let U=0,bt=Nt.length;U<bt;U++)Gt=Nt[U],A.format!==Ti?jt!==null?O?Lt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Gt.width,Gt.height,rt.depth,jt,Gt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,Bt,Gt.width,Gt.height,rt.depth,0,Gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Gt.width,Gt.height,rt.depth,jt,Ut,Gt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,Bt,Gt.width,Gt.height,rt.depth,0,jt,Ut,Gt.data)}else{O&&gt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,Nt[0].width,Nt[0].height);for(let U=0,bt=Nt.length;U<bt;U++)Gt=Nt[U],A.format!==Ti?jt!==null?O?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,Gt.width,Gt.height,jt,Gt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,Bt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Lt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Gt.width,Gt.height,jt,Ut,Gt.data):i.texImage2D(o.TEXTURE_2D,U,Bt,Gt.width,Gt.height,0,jt,Ut,Gt.data)}else if(A.isDataArrayTexture)O?(gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Bt,rt.width,rt.height,rt.depth),Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,jt,Ut,rt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,jt,Ut,rt.data);else if(A.isData3DTexture)O?(gt&&i.texStorage3D(o.TEXTURE_3D,It,Bt,rt.width,rt.height,rt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,jt,Ut,rt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,jt,Ut,rt.data);else if(A.isFramebufferTexture){if(gt)if(O)i.texStorage2D(o.TEXTURE_2D,It,Bt,rt.width,rt.height);else{let U=rt.width,bt=rt.height;for(let Mt=0;Mt<It;Mt++)i.texImage2D(o.TEXTURE_2D,Mt,Bt,U,bt,0,jt,Ut,null),U>>=1,bt>>=1}}else if(Nt.length>0&&se){O&&gt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,Nt[0].width,Nt[0].height);for(let U=0,bt=Nt.length;U<bt;U++)Gt=Nt[U],O?Lt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,jt,Ut,Gt):i.texImage2D(o.TEXTURE_2D,U,Bt,jt,Ut,Gt);A.generateMipmaps=!1}else O?(gt&&i.texStorage2D(o.TEXTURE_2D,It,Bt,rt.width,rt.height),Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,jt,Ut,rt)):i.texImage2D(o.TEXTURE_2D,0,Bt,jt,Ut,rt);B(A,se)&&D(zt),st.__version=K.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function wt(L,A,lt){if(A.image.length!==6)return;const zt=Z(L,A),Rt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+lt);const K=r.get(Rt);if(Rt.version!==K.__version||zt===!0){i.activeTexture(o.TEXTURE0+lt);const st=He.getPrimaries(He.workingColorSpace),it=A.colorSpace===mi?null:He.getPrimaries(A.colorSpace),ht=A.colorSpace===mi||st===it?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const xt=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,rt=[];for(let U=0;U<6;U++)!xt&&!At?rt[U]=R(A.image[U],!1,!0,l.maxCubemapSize):rt[U]=At?A.image[U].image:A.image[U],rt[U]=ue(A,rt[U]);const se=rt[0],jt=v(se)||d,Ut=u.convert(A.format,A.colorSpace),Bt=u.convert(A.type),Gt=z(A.internalFormat,Ut,Bt,A.colorSpace),Nt=d&&A.isVideoTexture!==!0,O=K.__version===void 0||zt===!0,gt=Rt.dataReady;let Lt=X(A,se,jt);Dt(o.TEXTURE_CUBE_MAP,A,jt);let It;if(xt){Nt&&O&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,Gt,se.width,se.height);for(let U=0;U<6;U++){It=rt[U].mipmaps;for(let bt=0;bt<It.length;bt++){const Mt=It[bt];A.format!==Ti?Ut!==null?Nt?gt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt,0,0,Mt.width,Mt.height,Ut,Mt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt,Gt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt,0,0,Mt.width,Mt.height,Ut,Bt,Mt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt,Gt,Mt.width,Mt.height,0,Ut,Bt,Mt.data)}}}else{It=A.mipmaps,Nt&&O&&(It.length>0&&Lt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,Gt,rt[0].width,rt[0].height));for(let U=0;U<6;U++)if(At){Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,rt[U].width,rt[U].height,Ut,Bt,rt[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Gt,rt[U].width,rt[U].height,0,Ut,Bt,rt[U].data);for(let bt=0;bt<It.length;bt++){const Xt=It[bt].image[U].image;Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt+1,0,0,Xt.width,Xt.height,Ut,Bt,Xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt+1,Gt,Xt.width,Xt.height,0,Ut,Bt,Xt.data)}}else{Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ut,Bt,rt[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Gt,Ut,Bt,rt[U]);for(let bt=0;bt<It.length;bt++){const Mt=It[bt];Nt?gt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt+1,0,0,Ut,Bt,Mt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt+1,Gt,Ut,Bt,Mt.image[U])}}}B(A,jt)&&D(o.TEXTURE_CUBE_MAP),K.__version=Rt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Yt(L,A,lt,zt,Rt,K){const st=u.convert(lt.format,lt.colorSpace),it=u.convert(lt.type),ht=z(lt.internalFormat,st,it,lt.colorSpace);if(!r.get(A).__hasExternalTextures){const At=Math.max(1,A.width>>K),rt=Math.max(1,A.height>>K);Rt===o.TEXTURE_3D||Rt===o.TEXTURE_2D_ARRAY?i.texImage3D(Rt,K,ht,At,rt,A.depth,0,st,it,null):i.texImage2D(Rt,K,ht,At,rt,0,st,it,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Qt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,zt,Rt,r.get(lt).__webglTexture,0,le(A)):(Rt===o.TEXTURE_2D||Rt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,zt,Rt,r.get(lt).__webglTexture,K),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(L,A,lt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let zt=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(lt||Qt(A)){const Rt=A.depthTexture;Rt&&Rt.isDepthTexture&&(Rt.type===sa?zt=o.DEPTH_COMPONENT32F:Rt.type===Ia&&(zt=o.DEPTH_COMPONENT24));const K=le(A);Qt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,K,zt,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,K,zt,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,zt,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const zt=le(A);lt&&Qt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,o.DEPTH24_STENCIL8,A.width,A.height):Qt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const zt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Rt=0;Rt<zt.length;Rt++){const K=zt[Rt],st=u.convert(K.format,K.colorSpace),it=u.convert(K.type),ht=z(K.internalFormat,st,it,K.colorSpace),xt=le(A);lt&&Qt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,ht,A.width,A.height):Qt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,ht,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ht,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);const zt=r.get(A.depthTexture).__webglTexture,Rt=le(A);if(A.depthTexture.format===yr)Qt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,zt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,zt,0);else if(A.depthTexture.format===Rs)Qt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,zt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,zt,0);else throw new Error("Unknown depthTexture format")}function ee(L){const A=r.get(L),lt=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");kt(A.__webglFramebuffer,L)}else if(lt){A.__webglDepthbuffer=[];for(let zt=0;zt<6;zt++)i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[zt]),A.__webglDepthbuffer[zt]=o.createRenderbuffer(),Vt(A.__webglDepthbuffer[zt],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Vt(A.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(L,A,lt){const zt=r.get(L);A!==void 0&&Yt(zt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),lt!==void 0&&ee(L)}function et(L){const A=L.texture,lt=r.get(L),zt=r.get(A);L.addEventListener("dispose",dt),L.isWebGLMultipleRenderTargets!==!0&&(zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture()),zt.__version=A.version,h.memory.textures++);const Rt=L.isWebGLCubeRenderTarget===!0,K=L.isWebGLMultipleRenderTargets===!0,st=v(L)||d;if(Rt){lt.__webglFramebuffer=[];for(let it=0;it<6;it++)if(d&&A.mipmaps&&A.mipmaps.length>0){lt.__webglFramebuffer[it]=[];for(let ht=0;ht<A.mipmaps.length;ht++)lt.__webglFramebuffer[it][ht]=o.createFramebuffer()}else lt.__webglFramebuffer[it]=o.createFramebuffer()}else{if(d&&A.mipmaps&&A.mipmaps.length>0){lt.__webglFramebuffer=[];for(let it=0;it<A.mipmaps.length;it++)lt.__webglFramebuffer[it]=o.createFramebuffer()}else lt.__webglFramebuffer=o.createFramebuffer();if(K)if(l.drawBuffers){const it=L.texture;for(let ht=0,xt=it.length;ht<xt;ht++){const At=r.get(it[ht]);At.__webglTexture===void 0&&(At.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&L.samples>0&&Qt(L)===!1){const it=K?A:[A];lt.__webglMultisampledFramebuffer=o.createFramebuffer(),lt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const xt=it[ht];lt.__webglColorRenderbuffer[ht]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);const At=u.convert(xt.format,xt.colorSpace),rt=u.convert(xt.type),se=z(xt.internalFormat,At,rt,xt.colorSpace,L.isXRRenderTarget===!0),jt=le(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,se,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ht,o.RENDERBUFFER,lt.__webglColorRenderbuffer[ht])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(lt.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(lt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,zt.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,A,st);for(let it=0;it<6;it++)if(d&&A.mipmaps&&A.mipmaps.length>0)for(let ht=0;ht<A.mipmaps.length;ht++)Yt(lt.__webglFramebuffer[it][ht],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+it,ht);else Yt(lt.__webglFramebuffer[it],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);B(A,st)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(K){const it=L.texture;for(let ht=0,xt=it.length;ht<xt;ht++){const At=it[ht],rt=r.get(At);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture),Dt(o.TEXTURE_2D,At,st),Yt(lt.__webglFramebuffer,L,At,o.COLOR_ATTACHMENT0+ht,o.TEXTURE_2D,0),B(At,st)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let it=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(d?it=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(it,zt.__webglTexture),Dt(it,A,st),d&&A.mipmaps&&A.mipmaps.length>0)for(let ht=0;ht<A.mipmaps.length;ht++)Yt(lt.__webglFramebuffer[ht],L,A,o.COLOR_ATTACHMENT0,it,ht);else Yt(lt.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,it,0);B(A,st)&&D(it),i.unbindTexture()}L.depthBuffer&&ee(L)}function Oe(L){const A=v(L)||d,lt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let zt=0,Rt=lt.length;zt<Rt;zt++){const K=lt[zt];if(B(K,A)){const st=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,it=r.get(K).__webglTexture;i.bindTexture(st,it),D(st),i.unbindTexture()}}}function ae(L){if(d&&L.samples>0&&Qt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],lt=L.width,zt=L.height;let Rt=o.COLOR_BUFFER_BIT;const K=[],st=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=r.get(L),ht=L.isWebGLMultipleRenderTargets===!0;if(ht)for(let xt=0;xt<A.length;xt++)i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,it.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){K.push(o.COLOR_ATTACHMENT0+xt),L.depthBuffer&&K.push(st);const At=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(At===!1&&(L.depthBuffer&&(Rt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Rt|=o.STENCIL_BUFFER_BIT)),ht&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,it.__webglColorRenderbuffer[xt]),At===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[st]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[st])),ht){const rt=r.get(A[xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,rt,0)}o.blitFramebuffer(0,0,lt,zt,0,0,lt,zt,Rt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,K)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<A.length;xt++){i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,it.__webglColorRenderbuffer[xt]);const At=r.get(A[xt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,it.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function le(L){return Math.min(l.maxSamples,L.samples)}function Qt(L){const A=r.get(L);return d&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(L){const A=h.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function ue(L,A){const lt=L.colorSpace,zt=L.format,Rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Md||lt!==la&&lt!==mi&&(He.getTransfer(lt)===Xe?d===!1?t.has("EXT_sRGB")===!0&&zt===Ti?(L.format=Md,L.minFilter=Wn,L.generateMipmaps=!1):A=o0.sRGBToLinear(A):(zt!==Ti||Rt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),A}this.allocateTextureUnit=j,this.resetTextureUnits=Et,this.setTexture2D=V,this.setTexture2DArray=ct,this.setTexture3D=nt,this.setTextureCube=pt,this.rebindTextures=ie,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Qt}function JT(o,t,i){const r=i.isWebGL2;function l(u,h=mi){let d;const p=He.getTransfer(h);if(u===Va)return o.UNSIGNED_BYTE;if(u===Q_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===J_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===Sy)return o.BYTE;if(u===My)return o.SHORT;if(u===Rd)return o.UNSIGNED_SHORT;if(u===K_)return o.INT;if(u===Ia)return o.UNSIGNED_INT;if(u===sa)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===Ey)return o.ALPHA;if(u===Ti)return o.RGBA;if(u===by)return o.LUMINANCE;if(u===Ty)return o.LUMINANCE_ALPHA;if(u===yr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Md)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===Ay)return o.RED;if(u===$_)return o.RED_INTEGER;if(u===wy)return o.RG;if(u===t0)return o.RG_INTEGER;if(u===e0)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Xe)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Ff)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Ff)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===vg||u===xg||u===yg||u===Sg)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===vg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===xg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Sg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===n0)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Mg||u===Eg)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Mg)return p===Xe?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Eg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===bg||u===Tg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg||u===Bg)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(u===bg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Tg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Ag)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===wg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Rg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Cg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Dg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Lg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Ug)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ng)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Og)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Pg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===zg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Bg)return p===Xe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Fg||u===Ig)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(u===Vf)return p===Xe?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Fg)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Ig)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Ry||u===Hg||u===Gg||u===Vg)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(u===Vf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Hg)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Gg)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Vg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===xr?r?o.UNSIGNED_INT_24_8:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class $T extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Po extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const R of t.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=g.position.distanceTo(x.position),M=.02,T=.005;m.inputState.pinching&&y>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Yn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(t,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new ca({extensions:{fragDepth:!0},vertexShader:e1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Xn(new wc(20,20),l)}t.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class a1 extends br{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,y=null,M=null,T=null;const R=new i1,v=i.getContextAttributes();let _=null,B=null;const D=[],z=[],X=new me;let k=null;const I=new ei;I.layers.enable(1),I.viewport=new qe;const dt=new ei;dt.layers.enable(2),dt.viewport=new qe;const P=[I,dt],E=new $T;E.layers.enable(1),E.layers.enable(2);let N=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=D[Z];return mt===void 0&&(mt=new fd,D[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=D[Z];return mt===void 0&&(mt=new fd,D[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=D[Z];return mt===void 0&&(mt=new fd,D[Z]=mt),mt.getHandSpace()};function Et(Z){const mt=z.indexOf(Z.inputSource);if(mt===-1)return;const wt=D[mt];wt!==void 0&&(wt.update(Z.inputSource,Z.frame,m||h),wt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){l.removeEventListener("select",Et),l.removeEventListener("selectstart",Et),l.removeEventListener("selectend",Et),l.removeEventListener("squeeze",Et),l.removeEventListener("squeezestart",Et),l.removeEventListener("squeezeend",Et),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",ot);for(let Z=0;Z<D.length;Z++){const mt=z[Z];mt!==null&&(z[Z]=null,D[Z].disconnect(mt))}N=null,ft=null,R.reset(),t.setRenderTarget(_),M=null,y=null,x=null,l=null,B=null,Dt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",Et),l.addEventListener("selectstart",Et),l.addEventListener("selectend",Et),l.addEventListener("squeeze",Et),l.addEventListener("squeezestart",Et),l.addEventListener("squeezeend",Et),l.addEventListener("end",j),l.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(X),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const mt={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Mr(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Va,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let mt=null,wt=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=v.stencil?Rs:yr,wt=v.stencil?xr:Ia);const Vt={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Vt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),B=new Mr(y.textureWidth,y.textureHeight,{format:Ti,type:Va,depthTexture:new y0(y.textureWidth,y.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const kt=t.properties.get(B);kt.__ignoreDepthValues=y.ignoreDepthValues}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ot(Z){for(let mt=0;mt<Z.removed.length;mt++){const wt=Z.removed[mt],Yt=z.indexOf(wt);Yt>=0&&(z[Yt]=null,D[Yt].disconnect(wt))}for(let mt=0;mt<Z.added.length;mt++){const wt=Z.added[mt];let Yt=z.indexOf(wt);if(Yt===-1){for(let kt=0;kt<D.length;kt++)if(kt>=z.length){z.push(wt),Yt=kt;break}else if(z[kt]===null){z[kt]=wt,Yt=kt;break}if(Yt===-1)break}const Vt=D[Yt];Vt&&Vt.connect(wt)}}const V=new Y,ct=new Y;function nt(Z,mt,wt){V.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(wt.matrixWorld);const Yt=V.distanceTo(ct),Vt=mt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,ee=Vt[14]/(Vt[10]-1),ie=Vt[14]/(Vt[10]+1),et=(Vt[9]+1)/Vt[5],Oe=(Vt[9]-1)/Vt[5],ae=(Vt[8]-1)/Vt[0],le=(kt[8]+1)/kt[0],Qt=ee*ae,Ne=ee*le,ue=Yt/(-ae+le),L=ue*-ae;mt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(L),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const A=ee+ue,lt=ie+ue,zt=Qt-L,Rt=Ne+(Yt-L),K=et*ie/lt*A,st=Oe*ie/lt*A;Z.projectionMatrix.makePerspective(zt,Rt,K,st,A,lt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function pt(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;R.texture!==null&&(Z.near=R.depthNear,Z.far=R.depthFar),E.near=dt.near=I.near=Z.near,E.far=dt.far=I.far=Z.far,(N!==E.near||ft!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,ft=E.far,I.near=N,I.far=ft,dt.near=N,dt.far=ft,I.updateProjectionMatrix(),dt.updateProjectionMatrix(),Z.updateProjectionMatrix());const mt=Z.parent,wt=E.cameras;pt(E,mt);for(let Yt=0;Yt<wt.length;Yt++)pt(wt[Yt],mt);wt.length===2?nt(E,I,dt):E.projectionMatrix.copy(I.projectionMatrix),C(Z,E,mt)};function C(Z,mt,wt){wt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(wt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Io*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(Z){p=Z,y!==null&&(y.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null};let J=null;function _t(Z,mt){if(g=mt.getViewerPose(m||h),T=mt,g!==null){const wt=g.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let Yt=!1;wt.length!==E.cameras.length&&(E.cameras.length=0,Yt=!0);for(let kt=0;kt<wt.length;kt++){const ee=wt[kt];let ie=null;if(M!==null)ie=M.getViewport(ee);else{const Oe=x.getViewSubImage(y,ee);ie=Oe.viewport,kt===0&&(t.setRenderTargetTextures(B,Oe.colorTexture,y.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(B))}let et=P[kt];et===void 0&&(et=new ei,et.layers.enable(kt),et.viewport=new qe,P[kt]=et),et.matrix.fromArray(ee.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ee.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ie.x,ie.y,ie.width,ie.height),kt===0&&(E.matrix.copy(et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Yt===!0&&E.cameras.push(et)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const kt=x.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&R.init(t,kt,l.renderState)}}for(let wt=0;wt<D.length;wt++){const Yt=z[wt],Vt=D[wt];Yt!==null&&Vt!==void 0&&Vt.update(Yt,mt,m||h)}R.render(t,E),J&&J(Z,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),T=null}const Dt=new v0;Dt.setAnimationLoop(_t),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}}function r1(o,t){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,m0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,B,D,z){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),x(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),y(v,_),_.isMeshPhysicalMaterial&&M(v,_,z)):_.isMeshMatcapMaterial?(u(v,_),T(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,B,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===qn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===qn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const B=t.get(_).envMap;if(B&&(v.envMap.value=B,v.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,B,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*B,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),t.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,B){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=B.texture,v.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const B=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(B.matrixWorld),v.nearDistance.value=B.shadow.camera.near,v.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function s1(o,t,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(B,D){const z=D.program;r.uniformBlockBinding(B,z)}function m(B,D){let z=l[B.id];z===void 0&&(T(B),z=g(B),l[B.id]=z,B.addEventListener("dispose",v));const X=D.program;r.updateUBOMapping(B,X);const k=t.render.frame;u[B.id]!==k&&(y(B),u[B.id]=k)}function g(B){const D=x();B.__bindingPointIndex=D;const z=o.createBuffer(),X=B.__size,k=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,X,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,z),z}function x(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const D=l[B.id],z=B.uniforms,X=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let k=0,I=z.length;k<I;k++){const dt=Array.isArray(z[k])?z[k]:[z[k]];for(let P=0,E=dt.length;P<E;P++){const N=dt[P];if(M(N,k,P,X)===!0){const ft=N.__offset,Et=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let ot=0;ot<Et.length;ot++){const V=Et[ot],ct=R(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,ft+j,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,j),j+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ft,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,D,z,X){const k=B.value,I=D+"_"+z;if(X[I]===void 0)return typeof k=="number"||typeof k=="boolean"?X[I]=k:X[I]=k.clone(),!0;{const dt=X[I];if(typeof k=="number"||typeof k=="boolean"){if(dt!==k)return X[I]=k,!0}else if(dt.equals(k)===!1)return dt.copy(k),!0}return!1}function T(B){const D=B.uniforms;let z=0;const X=16;for(let I=0,dt=D.length;I<dt;I++){const P=Array.isArray(D[I])?D[I]:[D[I]];for(let E=0,N=P.length;E<N;E++){const ft=P[E],Et=Array.isArray(ft.value)?ft.value:[ft.value];for(let j=0,ot=Et.length;j<ot;j++){const V=Et[j],ct=R(V),nt=z%X;nt!==0&&X-nt<ct.boundary&&(z+=X-nt),ft.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=z,z+=ct.storage}}}const k=z%X;return k>0&&(z+=X-k),B.__size=z,B.__cache={},this}function R(B){const D={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(D.boundary=4,D.storage=4):B.isVector2?(D.boundary=8,D.storage=8):B.isVector3||B.isColor?(D.boundary=16,D.storage=12):B.isVector4?(D.boundary=16,D.storage=16):B.isMatrix3?(D.boundary=48,D.storage=48):B.isMatrix4?(D.boundary=64,D.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),D}function v(B){const D=B.target;D.removeEventListener("dispose",v);const z=h.indexOf(D.__bindingPointIndex);h.splice(z,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class A0{constructor(t={}){const{canvas:i=$y(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=t;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=h;const M=new Uint32Array(4),T=new Int32Array(4);let R=null,v=null;const _=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Ga,this.toneMappingExposure=1;const D=this;let z=!1,X=0,k=0,I=null,dt=-1,P=null;const E=new qe,N=new qe;let ft=null;const Et=new Ce(0);let j=0,ot=i.width,V=i.height,ct=1,nt=null,pt=null;const C=new qe(0,0,ot,V),J=new qe(0,0,ot,V);let _t=!1;const Dt=new Ud;let Z=!1,mt=!1,wt=null;const Yt=new sn,Vt=new me,kt=new Y,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return I===null?ct:1}let et=r;function Oe(b,H){for(let G=0;G<b.length;G++){const W=b[G],q=i.getContext(W,H);if(q!==null)return q}return null}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",bt,!1),et===null){const H=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&H.shift(),et=Oe(H,b),et===null)throw Oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&et instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),et.getShaderPrecisionFormat===void 0&&(et.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,le,Qt,Ne,ue,L,A,lt,zt,Rt,K,st,it,ht,xt,At,rt,se,jt,Ut,Bt,Gt,Nt,O;function gt(){ae=new hb(et),le=new ob(et,ae,t),ae.init(le),Gt=new JT(et,ae,le),Qt=new KT(et,ae,le),Ne=new gb(et),ue=new zT,L=new QT(et,ae,Qt,ue,le,Gt,Ne),A=new cb(D),lt=new db(D),zt=new bS(et,le),Nt=new rb(et,ae,zt,le),Rt=new pb(et,zt,Ne,Nt),K=new yb(et,Rt,zt,Ne),jt=new xb(et,le,L),At=new lb(ue),st=new PT(D,A,lt,ae,le,Nt,At),it=new r1(D,ue),ht=new FT,xt=new WT(ae,le),se=new ab(D,A,lt,Qt,K,y,p),rt=new ZT(D,K,le),O=new s1(et,Ne,le,Qt),Ut=new sb(et,ae,Ne,le),Bt=new mb(et,ae,Ne,le),Ne.programs=st.programs,D.capabilities=le,D.extensions=ae,D.properties=ue,D.renderLists=ht,D.shadowMap=rt,D.state=Qt,D.info=Ne}gt();const Lt=new a1(D,et);this.xr=Lt,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(ot,V,!1))},this.getSize=function(b){return b.set(ot,V)},this.setSize=function(b,H,G=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=b,V=H,i.width=Math.floor(b*ct),i.height=Math.floor(H*ct),G===!0&&(i.style.width=b+"px",i.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ot*ct,V*ct).floor()},this.setDrawingBufferSize=function(b,H,G){ot=b,V=H,ct=G,i.width=Math.floor(b*G),i.height=Math.floor(H*G),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,H,G,W){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,H,G,W),Qt.viewport(E.copy(C).multiplyScalar(ct).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,H,G,W){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,H,G,W),Qt.scissor(N.copy(J).multiplyScalar(ct).floor())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){Qt.setScissorTest(_t=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(b=!0,H=!0,G=!0){let W=0;if(b){let q=!1;if(I!==null){const St=I.texture.format;q=St===e0||St===t0||St===$_}if(q){const St=I.texture.type,Ot=St===Va||St===Ia||St===Rd||St===xr||St===Q_||St===J_,Pt=se.getClearColor(),Ht=se.getClearAlpha(),Zt=Pt.r,ne=Pt.g,te=Pt.b;Ot?(M[0]=Zt,M[1]=ne,M[2]=te,M[3]=Ht,et.clearBufferuiv(et.COLOR,0,M)):(T[0]=Zt,T[1]=ne,T[2]=te,T[3]=Ht,et.clearBufferiv(et.COLOR,0,T))}else W|=et.COLOR_BUFFER_BIT}H&&(W|=et.DEPTH_BUFFER_BIT),G&&(W|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),ht.dispose(),xt.dispose(),ue.dispose(),A.dispose(),lt.dispose(),K.dispose(),Nt.dispose(),O.dispose(),st.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Me),Lt.removeEventListener("sessionend",he),wt&&(wt.dispose(),wt=null),De.stop()};function It(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const b=Ne.autoReset,H=rt.enabled,G=rt.autoUpdate,W=rt.needsUpdate,q=rt.type;gt(),Ne.autoReset=b,rt.enabled=H,rt.autoUpdate=G,rt.needsUpdate=W,rt.type=q}function bt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Mt(b){const H=b.target;H.removeEventListener("dispose",Mt),Xt(H)}function Xt(b){Jt(b),ue.remove(b)}function Jt(b){const H=ue.get(b).programs;H!==void 0&&(H.forEach(function(G){st.releaseProgram(G)}),b.isShaderMaterial&&st.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,G,W,q,St){H===null&&(H=ee);const Ot=q.isMesh&&q.matrixWorld.determinant()<0,Pt=ii(b,H,G,W,q);Qt.setMaterial(W,Ot);let Ht=G.index,Zt=1;if(W.wireframe===!0){if(Ht=Rt.getWireframeAttribute(G),Ht===void 0)return;Zt=2}const ne=G.drawRange,te=G.attributes.position;let Ae=ne.start*Zt,ze=(ne.start+ne.count)*Zt;St!==null&&(Ae=Math.max(Ae,St.start*Zt),ze=Math.min(ze,(St.start+St.count)*Zt)),Ht!==null?(Ae=Math.max(Ae,0),ze=Math.min(ze,Ht.count)):te!=null&&(Ae=Math.max(Ae,0),ze=Math.min(ze,te.count));const Ge=ze-Ae;if(Ge<0||Ge===1/0)return;Nt.setup(q,W,Pt,G,Ht);let Rn,Be=Ut;if(Ht!==null&&(Rn=zt.get(Ht),Be=Bt,Be.setIndex(Rn)),q.isMesh)W.wireframe===!0?(Qt.setLineWidth(W.wireframeLinewidth*ie()),Be.setMode(et.LINES)):Be.setMode(et.TRIANGLES);else if(q.isLine){let pe=W.linewidth;pe===void 0&&(pe=1),Qt.setLineWidth(pe*ie()),q.isLineSegments?Be.setMode(et.LINES):q.isLineLoop?Be.setMode(et.LINE_LOOP):Be.setMode(et.LINE_STRIP)}else q.isPoints?Be.setMode(et.POINTS):q.isSprite&&Be.setMode(et.TRIANGLES);if(q.isBatchedMesh)Be.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Be.renderInstances(Ae,Ge,q.count);else if(G.isInstancedBufferGeometry){const pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ri=Math.min(G.instanceCount,pe);Be.renderInstances(Ae,Ge,Ri)}else Be.render(Ae,Ge)};function ve(b,H,G){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=qn,b.needsUpdate=!0,gn(b,H,G),b.side=Wa,b.needsUpdate=!0,gn(b,H,G),b.side=zi):gn(b,H,G)}this.compile=function(b,H,G=null){G===null&&(G=b),v=xt.get(G),v.init(),B.push(v),G.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),b!==G&&b.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(D._useLegacyLights);const W=new Set;return b.traverse(function(q){const St=q.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Pt=St[Ot];ve(Pt,G,q),W.add(Pt)}else ve(St,G,q),W.add(St)}),B.pop(),v=null,W},this.compileAsync=function(b,H,G=null){const W=this.compile(b,H,G);return new Promise(q=>{function St(){if(W.forEach(function(Ot){ue.get(Ot).currentProgram.isReady()&&W.delete(Ot)}),W.size===0){q(b);return}setTimeout(St,10)}ae.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ce=null;function ye(b){ce&&ce(b)}function Me(){De.stop()}function he(){De.start()}const De=new v0;De.setAnimationLoop(ye),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(b){ce=b,Lt.setAnimationLoop(b),b===null?De.stop():De.start()},Lt.addEventListener("sessionstart",Me),Lt.addEventListener("sessionend",he),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,H,I),v=xt.get(b,B.length),v.init(),B.push(v),Yt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Dt.setFromProjectionMatrix(Yt),mt=this.localClippingEnabled,Z=At.init(this.clippingPlanes,mt),R=ht.get(b,_.length),R.init(),_.push(R),Ye(b,H,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(nt,pt),this.info.render.frame++,Z===!0&&At.beginShadows();const G=v.state.shadowsArray;if(rt.render(G,b,H),Z===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1)&&se.render(R,b),v.setupLights(D._useLegacyLights),H.isArrayCamera){const W=H.cameras;for(let q=0,St=W.length;q<St;q++){const Ot=W[q];fn(R,b,Ot,Ot.viewport)}}else fn(R,b,H);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(D,b,H),Nt.resetDefaultState(),dt=-1,P=null,B.pop(),B.length>0?v=B[B.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Ye(b,H,G,W){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Dt.intersectsSprite(b)){W&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Yt);const Ot=K.update(b),Pt=b.material;Pt.visible&&R.push(b,Ot,Pt,G,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Dt.intersectsObject(b))){const Ot=K.update(b),Pt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),kt.copy(Ot.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Yt)),Array.isArray(Pt)){const Ht=Ot.groups;for(let Zt=0,ne=Ht.length;Zt<ne;Zt++){const te=Ht[Zt],Ae=Pt[te.materialIndex];Ae&&Ae.visible&&R.push(b,Ot,Ae,G,kt.z,te)}}else Pt.visible&&R.push(b,Ot,Pt,G,kt.z,null)}}const St=b.children;for(let Ot=0,Pt=St.length;Ot<Pt;Ot++)Ye(St[Ot],H,G,W)}function fn(b,H,G,W){const q=b.opaque,St=b.transmissive,Ot=b.transparent;v.setupLightsView(G),Z===!0&&At.setGlobalState(D.clippingPlanes,G),St.length>0&&ni(q,St,H,G),W&&Qt.viewport(E.copy(W)),q.length>0&&wi(q,H,G),St.length>0&&wi(St,H,G),Ot.length>0&&wi(Ot,H,G),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function ni(b,H,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const St=le.isWebGL2;wt===null&&(wt=new Mr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Fo:Va,minFilter:vr,samples:St?4:0})),D.getDrawingBufferSize(Vt),St?wt.setSize(Vt.x,Vt.y):wt.setSize(yc(Vt.x),yc(Vt.y));const Ot=D.getRenderTarget();D.setRenderTarget(wt),D.getClearColor(Et),j=D.getClearAlpha(),j<1&&D.setClearColor(16777215,.5),D.clear();const Pt=D.toneMapping;D.toneMapping=Ga,wi(b,G,W),L.updateMultisampleRenderTarget(wt),L.updateRenderTargetMipmap(wt);let Ht=!1;for(let Zt=0,ne=H.length;Zt<ne;Zt++){const te=H[Zt],Ae=te.object,ze=te.geometry,Ge=te.material,Rn=te.group;if(Ge.side===zi&&Ae.layers.test(W.layers)){const Be=Ge.side;Ge.side=qn,Ge.needsUpdate=!0,nn(Ae,G,W,ze,Ge,Rn),Ge.side=Be,Ge.needsUpdate=!0,Ht=!0}}Ht===!0&&(L.updateMultisampleRenderTarget(wt),L.updateRenderTargetMipmap(wt)),D.setRenderTarget(Ot),D.setClearColor(Et,j),D.toneMapping=Pt}function wi(b,H,G){const W=H.isScene===!0?H.overrideMaterial:null;for(let q=0,St=b.length;q<St;q++){const Ot=b[q],Pt=Ot.object,Ht=Ot.geometry,Zt=W===null?Ot.material:W,ne=Ot.group;Pt.layers.test(G.layers)&&nn(Pt,H,G,Ht,Zt,ne)}}function nn(b,H,G,W,q,St){b.onBeforeRender(D,H,G,W,q,St),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(D,H,G,W,b,St),q.transparent===!0&&q.side===zi&&q.forceSinglePass===!1?(q.side=qn,q.needsUpdate=!0,D.renderBufferDirect(G,H,W,q,b,St),q.side=Wa,q.needsUpdate=!0,D.renderBufferDirect(G,H,W,q,b,St),q.side=zi):D.renderBufferDirect(G,H,W,q,b,St),b.onAfterRender(D,H,G,W,q,St)}function gn(b,H,G){H.isScene!==!0&&(H=ee);const W=ue.get(b),q=v.state.lights,St=v.state.shadowsArray,Ot=q.state.version,Pt=st.getParameters(b,q.state,St,H,G),Ht=st.getProgramCacheKey(Pt);let Zt=W.programs;W.environment=b.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(b.isMeshStandardMaterial?lt:A).get(b.envMap||W.environment),Zt===void 0&&(b.addEventListener("dispose",Mt),Zt=new Map,W.programs=Zt);let ne=Zt.get(Ht);if(ne!==void 0){if(W.currentProgram===ne&&W.lightsStateVersion===Ot)return Je(b,Pt),ne}else Pt.uniforms=st.getUniforms(b),b.onBuild(G,Pt,D),b.onBeforeCompile(Pt,D),ne=st.acquireProgram(Pt,Ht),Zt.set(Ht,ne),W.uniforms=Pt.uniforms;const te=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(te.clippingPlanes=At.uniform),Je(b,Pt),W.needsLights=qt(b),W.lightsStateVersion=Ot,W.needsLights&&(te.ambientLightColor.value=q.state.ambient,te.lightProbe.value=q.state.probe,te.directionalLights.value=q.state.directional,te.directionalLightShadows.value=q.state.directionalShadow,te.spotLights.value=q.state.spot,te.spotLightShadows.value=q.state.spotShadow,te.rectAreaLights.value=q.state.rectArea,te.ltc_1.value=q.state.rectAreaLTC1,te.ltc_2.value=q.state.rectAreaLTC2,te.pointLights.value=q.state.point,te.pointLightShadows.value=q.state.pointShadow,te.hemisphereLights.value=q.state.hemi,te.directionalShadowMap.value=q.state.directionalShadowMap,te.directionalShadowMatrix.value=q.state.directionalShadowMatrix,te.spotShadowMap.value=q.state.spotShadowMap,te.spotLightMatrix.value=q.state.spotLightMatrix,te.spotLightMap.value=q.state.spotLightMap,te.pointShadowMap.value=q.state.pointShadowMap,te.pointShadowMatrix.value=q.state.pointShadowMatrix),W.currentProgram=ne,W.uniformsList=null,ne}function je(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=pc.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Je(b,H){const G=ue.get(b);G.outputColorSpace=H.outputColorSpace,G.batching=H.batching,G.instancing=H.instancing,G.instancingColor=H.instancingColor,G.skinning=H.skinning,G.morphTargets=H.morphTargets,G.morphNormals=H.morphNormals,G.morphColors=H.morphColors,G.morphTargetsCount=H.morphTargetsCount,G.numClippingPlanes=H.numClippingPlanes,G.numIntersection=H.numClipIntersection,G.vertexAlphas=H.vertexAlphas,G.vertexTangents=H.vertexTangents,G.toneMapping=H.toneMapping}function ii(b,H,G,W,q){H.isScene!==!0&&(H=ee),L.resetTextureUnits();const St=H.fog,Ot=W.isMeshStandardMaterial?H.environment:null,Pt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:la,Ht=(W.isMeshStandardMaterial?lt:A).get(W.envMap||Ot),Zt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ne=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),te=!!G.morphAttributes.position,Ae=!!G.morphAttributes.normal,ze=!!G.morphAttributes.color;let Ge=Ga;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Rn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Be=Rn!==void 0?Rn.length:0,pe=ue.get(W),Ri=v.state.lights;if(Z===!0&&(mt===!0||b!==P)){const Gn=b===P&&W.id===dt;At.setState(W,b,Gn)}let Pe=!1;W.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Ri.state.version||pe.outputColorSpace!==Pt||q.isBatchedMesh&&pe.batching===!1||!q.isBatchedMesh&&pe.batching===!0||q.isInstancedMesh&&pe.instancing===!1||!q.isInstancedMesh&&pe.instancing===!0||q.isSkinnedMesh&&pe.skinning===!1||!q.isSkinnedMesh&&pe.skinning===!0||q.isInstancedMesh&&pe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&pe.instancingColor===!1&&q.instanceColor!==null||pe.envMap!==Ht||W.fog===!0&&pe.fog!==St||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==At.numPlanes||pe.numIntersection!==At.numIntersection)||pe.vertexAlphas!==Zt||pe.vertexTangents!==ne||pe.morphTargets!==te||pe.morphNormals!==Ae||pe.morphColors!==ze||pe.toneMapping!==Ge||le.isWebGL2===!0&&pe.morphTargetsCount!==Be)&&(Pe=!0):(Pe=!0,pe.__version=W.version);let _n=pe.currentProgram;Pe===!0&&(_n=gn(W,H,q));let Ze=!1,gi=!1,vn=!1;const an=_n.getUniforms(),Ci=pe.uniforms;if(Qt.useProgram(_n.program)&&(Ze=!0,gi=!0,vn=!0),W.id!==dt&&(dt=W.id,gi=!0),Ze||P!==b){an.setValue(et,"projectionMatrix",b.projectionMatrix),an.setValue(et,"viewMatrix",b.matrixWorldInverse);const Gn=an.map.cameraPosition;Gn!==void 0&&Gn.setValue(et,kt.setFromMatrixPosition(b.matrixWorld)),le.logarithmicDepthBuffer&&an.setValue(et,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&an.setValue(et,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,gi=!0,vn=!0)}if(q.isSkinnedMesh){an.setOptional(et,q,"bindMatrix"),an.setOptional(et,q,"bindMatrixInverse");const Gn=q.skeleton;Gn&&(le.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),an.setValue(et,"boneTexture",Gn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(an.setOptional(et,q,"batchingTexture"),an.setValue(et,"batchingTexture",q._matricesTexture,L));const ua=G.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&le.isWebGL2===!0)&&jt.update(q,G,_n),(gi||pe.receiveShadow!==q.receiveShadow)&&(pe.receiveShadow=q.receiveShadow,an.setValue(et,"receiveShadow",q.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ci.envMap.value=Ht,Ci.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),gi&&(an.setValue(et,"toneMappingExposure",D.toneMappingExposure),pe.needsLights&&Ft(Ci,vn),St&&W.fog===!0&&it.refreshFogUniforms(Ci,St),it.refreshMaterialUniforms(Ci,W,ct,V,wt),pc.upload(et,je(pe),Ci,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pc.upload(et,je(pe),Ci,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&an.setValue(et,"center",q.center),an.setValue(et,"modelViewMatrix",q.modelViewMatrix),an.setValue(et,"normalMatrix",q.normalMatrix),an.setValue(et,"modelMatrix",q.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Gn=W.uniformsGroups;for(let Cn=0,Ns=Gn.length;Cn<Ns;Cn++)if(le.isWebGL2){const Os=Gn[Cn];O.update(Os,_n),O.bind(Os,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function Ft(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function qt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,H,G){ue.get(b.texture).__webglTexture=H,ue.get(b.depthTexture).__webglTexture=G;const W=ue.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const G=ue.get(b);G.__webglFramebuffer=H,G.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,G=0){I=b,X=H,k=G;let W=!0,q=null,St=!1,Ot=!1;if(b){const Ht=ue.get(b);Ht.__useDefaultFramebuffer!==void 0?(Qt.bindFramebuffer(et.FRAMEBUFFER,null),W=!1):Ht.__webglFramebuffer===void 0?L.setupRenderTarget(b):Ht.__hasExternalTextures&&L.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture);const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ot=!0);const ne=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ne[H])?q=ne[H][G]:q=ne[H],St=!0):le.isWebGL2&&b.samples>0&&L.useMultisampledRTT(b)===!1?q=ue.get(b).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[G]:q=ne,E.copy(b.viewport),N.copy(b.scissor),ft=b.scissorTest}else E.copy(C).multiplyScalar(ct).floor(),N.copy(J).multiplyScalar(ct).floor(),ft=_t;if(Qt.bindFramebuffer(et.FRAMEBUFFER,q)&&le.drawBuffers&&W&&Qt.drawBuffers(b,q),Qt.viewport(E),Qt.scissor(N),Qt.setScissorTest(ft),St){const Ht=ue.get(b.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ht.__webglTexture,G)}else if(Ot){const Ht=ue.get(b.texture),Zt=H||0;et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,Ht.__webglTexture,G||0,Zt)}dt=-1},this.readRenderTargetPixels=function(b,H,G,W,q,St,Ot){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ot!==void 0&&(Pt=Pt[Ot]),Pt){Qt.bindFramebuffer(et.FRAMEBUFFER,Pt);try{const Ht=b.texture,Zt=Ht.format,ne=Ht.type;if(Zt!==Ti&&Gt.convert(Zt)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=ne===Fo&&(ae.has("EXT_color_buffer_half_float")||le.isWebGL2&&ae.has("EXT_color_buffer_float"));if(ne!==Va&&Gt.convert(ne)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ne===sa&&(le.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-W&&G>=0&&G<=b.height-q&&et.readPixels(H,G,W,q,Gt.convert(Zt),Gt.convert(ne),St)}finally{const Ht=I!==null?ue.get(I).__webglFramebuffer:null;Qt.bindFramebuffer(et.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(b,H,G=0){const W=Math.pow(2,-G),q=Math.floor(H.image.width*W),St=Math.floor(H.image.height*W);L.setTexture2D(H,0),et.copyTexSubImage2D(et.TEXTURE_2D,G,0,0,b.x,b.y,q,St),Qt.unbindTexture()},this.copyTextureToTexture=function(b,H,G,W=0){const q=H.image.width,St=H.image.height,Ot=Gt.convert(G.format),Pt=Gt.convert(G.type);L.setTexture2D(G,0),et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,G.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,G.unpackAlignment),H.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,W,b.x,b.y,q,St,Ot,Pt,H.image.data):H.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,W,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,Ot,H.mipmaps[0].data):et.texSubImage2D(et.TEXTURE_2D,W,b.x,b.y,Ot,Pt,H.image),W===0&&G.generateMipmaps&&et.generateMipmap(et.TEXTURE_2D),Qt.unbindTexture()},this.copyTextureToTexture3D=function(b,H,G,W,q=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=b.max.x-b.min.x+1,Ot=b.max.y-b.min.y+1,Pt=b.max.z-b.min.z+1,Ht=Gt.convert(W.format),Zt=Gt.convert(W.type);let ne;if(W.isData3DTexture)L.setTexture3D(W,0),ne=et.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)L.setTexture2DArray(W,0),ne=et.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,W.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,W.unpackAlignment);const te=et.getParameter(et.UNPACK_ROW_LENGTH),Ae=et.getParameter(et.UNPACK_IMAGE_HEIGHT),ze=et.getParameter(et.UNPACK_SKIP_PIXELS),Ge=et.getParameter(et.UNPACK_SKIP_ROWS),Rn=et.getParameter(et.UNPACK_SKIP_IMAGES),Be=G.isCompressedTexture?G.mipmaps[q]:G.image;et.pixelStorei(et.UNPACK_ROW_LENGTH,Be.width),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Be.height),et.pixelStorei(et.UNPACK_SKIP_PIXELS,b.min.x),et.pixelStorei(et.UNPACK_SKIP_ROWS,b.min.y),et.pixelStorei(et.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?et.texSubImage3D(ne,q,H.x,H.y,H.z,St,Ot,Pt,Ht,Zt,Be.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),et.compressedTexSubImage3D(ne,q,H.x,H.y,H.z,St,Ot,Pt,Ht,Be.data)):et.texSubImage3D(ne,q,H.x,H.y,H.z,St,Ot,Pt,Ht,Zt,Be),et.pixelStorei(et.UNPACK_ROW_LENGTH,te),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Ae),et.pixelStorei(et.UNPACK_SKIP_PIXELS,ze),et.pixelStorei(et.UNPACK_SKIP_ROWS,Ge),et.pixelStorei(et.UNPACK_SKIP_IMAGES,Rn),q===0&&W.generateMipmaps&&et.generateMipmap(ne),Qt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Qt.unbindTexture()},this.resetState=function(){X=0,k=0,I=null,Qt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Cd?"display-p3":"srgb",i.unpackColorSpace=He.workingColorSpace===bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?Sr:i0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Sr?An:la}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class o1 extends A0{}o1.prototype.isWebGL1Renderer=!0;class l1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class w0 extends Ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const N_=new sn,Td=new Ld,fc=new Tc,dc=new Y;class c1 extends wn{constructor(t=new Ai,i=new w0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,t.ray.intersectsSphere(fc)===!1)return;N_.copy(l).invert(),Td.copy(t.ray).applyMatrix4(N_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let T=y,R=M;T<R;T++){const v=m.getX(T);dc.fromBufferAttribute(x,v),O_(dc,v,p,l,t,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let T=y,R=M;T<R;T++)dc.fromBufferAttribute(x,T),O_(dc,T,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function O_(o,t,i,r,l,u,h){const d=Td.distanceSqToPoint(o);if(d<i){const p=new Y;Td.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,object:h})}}class Od extends Ai{constructor(t=1,i=1,r=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const g=[],x=[],y=[],M=[];let T=0;const R=[],v=r/2;let _=0;B(),h===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new Hn(x,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(M,2));function B(){const z=new Y,X=new Y;let k=0;const I=(i-t)/r;for(let dt=0;dt<=u;dt++){const P=[],E=dt/u,N=E*(i-t)+t;for(let ft=0;ft<=l;ft++){const Et=ft/l,j=Et*p+d,ot=Math.sin(j),V=Math.cos(j);X.x=N*ot,X.y=-E*r+v,X.z=N*V,x.push(X.x,X.y,X.z),z.set(ot,I,V).normalize(),y.push(z.x,z.y,z.z),M.push(Et,1-E),P.push(T++)}R.push(P)}for(let dt=0;dt<l;dt++)for(let P=0;P<u;P++){const E=R[P][dt],N=R[P+1][dt],ft=R[P+1][dt+1],Et=R[P][dt+1];g.push(E,N,Et),g.push(N,ft,Et),k+=6}m.addGroup(_,k,0),_+=k}function D(z){const X=T,k=new me,I=new Y;let dt=0;const P=z===!0?t:i,E=z===!0?1:-1;for(let ft=1;ft<=l;ft++)x.push(0,v*E,0),y.push(0,E,0),M.push(.5,.5),T++;const N=T;for(let ft=0;ft<=l;ft++){const j=ft/l*p+d,ot=Math.cos(j),V=Math.sin(j);I.x=P*V,I.y=v*E,I.z=P*ot,x.push(I.x,I.y,I.z),y.push(0,E,0),k.x=ot*.5+.5,k.y=V*.5*E+.5,M.push(k.x,k.y),T++}for(let ft=0;ft<l;ft++){const Et=X+ft,j=N+ft;z===!0?g.push(j,j+1,Et):g.push(j+1,j,Et),dt+=3}m.addGroup(_,dt,z===!0?1:2),_+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Od(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pd extends Od{constructor(t=1,i=1,r=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,t,i,r,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Pd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mc extends Ai{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],x=new Y,y=new Y,M=[],T=[],R=[],v=[];for(let _=0;_<=r;_++){const B=[],D=_/r;let z=0;_===0&&h===0?z=.5/i:_===r&&p===Math.PI&&(z=-.5/i);for(let X=0;X<=i;X++){const k=X/i;x.x=-t*Math.cos(l+k*u)*Math.sin(h+D*d),x.y=t*Math.cos(h+D*d),x.z=t*Math.sin(l+k*u)*Math.sin(h+D*d),T.push(x.x,x.y,x.z),y.copy(x).normalize(),R.push(y.x,y.y,y.z),v.push(k+z,1-D),B.push(m++)}g.push(B)}for(let _=0;_<r;_++)for(let B=0;B<i;B++){const D=g[_][B+1],z=g[_][B],X=g[_+1][B],k=g[_+1][B+1];(_!==0||h>0)&&M.push(D,z,k),(_!==r-1||p<Math.PI)&&M.push(z,X,k)}this.setIndex(M),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(R,3)),this.setAttribute("uv",new Hn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class P_ extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zd extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const dd=new sn,z_=new Y,B_=new Y;class R0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;z_.setFromMatrixPosition(t.matrixWorld),i.position.copy(z_),B_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(B_),i.updateMatrixWorld(),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const F_=new sn,Oo=new Y,hd=new Y;class u1 extends R0{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Oo),hd.copy(r.position),hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(hd),r.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),F_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(F_)}}class I_ extends zd{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new u1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class f1 extends R0{constructor(){super(new x0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends zd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new f1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class G_ extends zd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class V_{constructor(t=1,i=0,r=0){return this.radius=t,this.phi=i,this.theta=r,this}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(On(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const k_={type:"change"},pd={type:"start"},W_={type:"end"},hc=new Ld,X_=new Fa,d1=Math.cos(70*pr.DEG2RAD);class h1 extends br{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",xt),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(k_),r.update(),u=l.NONE},this.update=function(){const O=new Y,gt=new Er().setFromUnitVectors(t.up,new Y(0,1,0)),Lt=gt.clone().invert(),It=new Y,U=new Er,bt=new Y,Mt=2*Math.PI;return function(Jt=null){const ve=r.object.position;O.copy(ve).sub(r.target),O.applyQuaternion(gt),d.setFromVector3(O),r.autoRotate&&u===l.NONE&&ft(E(Jt)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let ce=r.minAzimuthAngle,ye=r.maxAzimuthAngle;isFinite(ce)&&isFinite(ye)&&(ce<-Math.PI?ce+=Mt:ce>Math.PI&&(ce-=Mt),ye<-Math.PI?ye+=Mt:ye>Math.PI&&(ye-=Mt),ce<=ye?d.theta=Math.max(ce,Math.min(ye,d.theta)):d.theta=d.theta>(ce+ye)/2?Math.max(ce,d.theta):Math.min(ye,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&k||r.object.isOrthographicCamera?d.radius=C(d.radius):d.radius=C(d.radius*m),O.setFromSpherical(d),O.applyQuaternion(Lt),ve.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Me=!1;if(r.zoomToCursor&&k){let he=null;if(r.object.isPerspectiveCamera){const De=O.length();he=C(De*m);const Ye=De-he;r.object.position.addScaledVector(z,Ye),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const De=new Y(X.x,X.y,0);De.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Me=!0;const Ye=new Y(X.x,X.y,0);Ye.unproject(r.object),r.object.position.sub(Ye).add(De),r.object.updateMatrixWorld(),he=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(he).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<d1?t.lookAt(r.target):(X_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(X_,r.target))))}else r.object.isOrthographicCamera&&(Me=m!==1,Me&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,k=!1,Me||It.distanceToSquared(r.object.position)>h||8*(1-U.dot(r.object.quaternion))>h||bt.distanceToSquared(r.target)>0?(r.dispatchEvent(k_),It.copy(r.object.position),U.copy(r.object.quaternion),bt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",se),r.domElement.removeEventListener("pointerdown",L),r.domElement.removeEventListener("pointercancel",lt),r.domElement.removeEventListener("wheel",K),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",lt),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",xt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new V_,p=new V_;let m=1;const g=new Y,x=new me,y=new me,M=new me,T=new me,R=new me,v=new me,_=new me,B=new me,D=new me,z=new Y,X=new me;let k=!1;const I=[],dt={};let P=!1;function E(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function N(O){const gt=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*gt)}function ft(O){p.theta-=O}function Et(O){p.phi-=O}const j=function(){const O=new Y;return function(Lt,It){O.setFromMatrixColumn(It,0),O.multiplyScalar(-Lt),g.add(O)}}(),ot=function(){const O=new Y;return function(Lt,It){r.screenSpacePanning===!0?O.setFromMatrixColumn(It,1):(O.setFromMatrixColumn(It,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Lt),g.add(O)}}(),V=function(){const O=new Y;return function(Lt,It){const U=r.domElement;if(r.object.isPerspectiveCamera){const bt=r.object.position;O.copy(bt).sub(r.target);let Mt=O.length();Mt*=Math.tan(r.object.fov/2*Math.PI/180),j(2*Lt*Mt/U.clientHeight,r.object.matrix),ot(2*It*Mt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(j(Lt*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),ot(It*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function ct(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function nt(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function pt(O,gt){if(!r.zoomToCursor)return;k=!0;const Lt=r.domElement.getBoundingClientRect(),It=O-Lt.left,U=gt-Lt.top,bt=Lt.width,Mt=Lt.height;X.x=It/bt*2-1,X.y=-(U/Mt)*2+1,z.set(X.x,X.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function J(O){x.set(O.clientX,O.clientY)}function _t(O){pt(O.clientX,O.clientX),_.set(O.clientX,O.clientY)}function Dt(O){T.set(O.clientX,O.clientY)}function Z(O){y.set(O.clientX,O.clientY),M.subVectors(y,x).multiplyScalar(r.rotateSpeed);const gt=r.domElement;ft(2*Math.PI*M.x/gt.clientHeight),Et(2*Math.PI*M.y/gt.clientHeight),x.copy(y),r.update()}function mt(O){B.set(O.clientX,O.clientY),D.subVectors(B,_),D.y>0?ct(N(D.y)):D.y<0&&nt(N(D.y)),_.copy(B),r.update()}function wt(O){R.set(O.clientX,O.clientY),v.subVectors(R,T).multiplyScalar(r.panSpeed),V(v.x,v.y),T.copy(R),r.update()}function Yt(O){pt(O.clientX,O.clientY),O.deltaY<0?nt(N(O.deltaY)):O.deltaY>0&&ct(N(O.deltaY)),r.update()}function Vt(O){let gt=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?Et(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,r.keyPanSpeed),gt=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?Et(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,-r.keyPanSpeed),gt=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?ft(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(r.keyPanSpeed,0),gt=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?ft(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(-r.keyPanSpeed,0),gt=!0;break}gt&&(O.preventDefault(),r.update())}function kt(O){if(I.length===1)x.set(O.pageX,O.pageY);else{const gt=Gt(O),Lt=.5*(O.pageX+gt.x),It=.5*(O.pageY+gt.y);x.set(Lt,It)}}function ee(O){if(I.length===1)T.set(O.pageX,O.pageY);else{const gt=Gt(O),Lt=.5*(O.pageX+gt.x),It=.5*(O.pageY+gt.y);T.set(Lt,It)}}function ie(O){const gt=Gt(O),Lt=O.pageX-gt.x,It=O.pageY-gt.y,U=Math.sqrt(Lt*Lt+It*It);_.set(0,U)}function et(O){r.enableZoom&&ie(O),r.enablePan&&ee(O)}function Oe(O){r.enableZoom&&ie(O),r.enableRotate&&kt(O)}function ae(O){if(I.length==1)y.set(O.pageX,O.pageY);else{const Lt=Gt(O),It=.5*(O.pageX+Lt.x),U=.5*(O.pageY+Lt.y);y.set(It,U)}M.subVectors(y,x).multiplyScalar(r.rotateSpeed);const gt=r.domElement;ft(2*Math.PI*M.x/gt.clientHeight),Et(2*Math.PI*M.y/gt.clientHeight),x.copy(y)}function le(O){if(I.length===1)R.set(O.pageX,O.pageY);else{const gt=Gt(O),Lt=.5*(O.pageX+gt.x),It=.5*(O.pageY+gt.y);R.set(Lt,It)}v.subVectors(R,T).multiplyScalar(r.panSpeed),V(v.x,v.y),T.copy(R)}function Qt(O){const gt=Gt(O),Lt=O.pageX-gt.x,It=O.pageY-gt.y,U=Math.sqrt(Lt*Lt+It*It);B.set(0,U),D.set(0,Math.pow(B.y/_.y,r.zoomSpeed)),ct(D.y),_.copy(B);const bt=(O.pageX+gt.x)*.5,Mt=(O.pageY+gt.y)*.5;pt(bt,Mt)}function Ne(O){r.enableZoom&&Qt(O),r.enablePan&&le(O)}function ue(O){r.enableZoom&&Qt(O),r.enableRotate&&ae(O)}function L(O){r.enabled!==!1&&(I.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",A),r.domElement.addEventListener("pointerup",lt)),jt(O),O.pointerType==="touch"?At(O):zt(O))}function A(O){r.enabled!==!1&&(O.pointerType==="touch"?rt(O):Rt(O))}function lt(O){switch(Ut(O),I.length){case 0:r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",lt),r.dispatchEvent(W_),u=l.NONE;break;case 1:const gt=I[0],Lt=dt[gt];At({pointerId:gt,pageX:Lt.x,pageY:Lt.y});break}}function zt(O){let gt;switch(O.button){case 0:gt=r.mouseButtons.LEFT;break;case 1:gt=r.mouseButtons.MIDDLE;break;case 2:gt=r.mouseButtons.RIGHT;break;default:gt=-1}switch(gt){case ns.DOLLY:if(r.enableZoom===!1)return;_t(O),u=l.DOLLY;break;case ns.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;Dt(O),u=l.PAN}else{if(r.enableRotate===!1)return;J(O),u=l.ROTATE}break;case ns.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;J(O),u=l.ROTATE}else{if(r.enablePan===!1)return;Dt(O),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function Rt(O){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;Z(O);break;case l.DOLLY:if(r.enableZoom===!1)return;mt(O);break;case l.PAN:if(r.enablePan===!1)return;wt(O);break}}function K(O){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(O.preventDefault(),r.dispatchEvent(pd),Yt(st(O)),r.dispatchEvent(W_))}function st(O){const gt=O.deltaMode,Lt={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(gt){case 1:Lt.deltaY*=16;break;case 2:Lt.deltaY*=100;break}return O.ctrlKey&&!P&&(Lt.deltaY*=10),Lt}function it(O){O.key==="Control"&&(P=!0,r.domElement.getRootNode().addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(O){O.key==="Control"&&(P=!1,r.domElement.getRootNode().removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function xt(O){r.enabled===!1||r.enablePan===!1||Vt(O)}function At(O){switch(Bt(O),I.length){case 1:switch(r.touches.ONE){case is.ROTATE:if(r.enableRotate===!1)return;kt(O),u=l.TOUCH_ROTATE;break;case is.PAN:if(r.enablePan===!1)return;ee(O),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case is.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;et(O),u=l.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Oe(O),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function rt(O){switch(Bt(O),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ae(O),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;le(O),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ne(O),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ue(O),r.update();break;default:u=l.NONE}}function se(O){r.enabled!==!1&&O.preventDefault()}function jt(O){I.push(O.pointerId)}function Ut(O){delete dt[O.pointerId];for(let gt=0;gt<I.length;gt++)if(I[gt]==O.pointerId){I.splice(gt,1);return}}function Bt(O){let gt=dt[O.pointerId];gt===void 0&&(gt=new me,dt[O.pointerId]=gt),gt.set(O.pageX,O.pageY)}function Gt(O){const gt=O.pointerId===I[0]?I[1]:I[0];return dt[gt]}r.domElement.addEventListener("contextmenu",se),r.domElement.addEventListener("pointerdown",L),r.domElement.addEventListener("pointercancel",lt),r.domElement.addEventListener("wheel",K,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",it,{passive:!0,capture:!0}),this.update()}}function p1(){const o=de.useRef(null),[t,i]=de.useState(!1),[r,l]=de.useState(!1),[u,h]=de.useState(!1),[d,p]=de.useState(!1),[m,g]=de.useState(!1),[x,y]=de.useState(!1),[M,T]=de.useState(!1),[R,v]=de.useState(!1),[_,B]=de.useState(!1),[D,z]=de.useState(!1),X=de.useRef({beta:0,gamma:0}),k=de.useRef(0),I=de.useRef(!1),dt=de.useRef(!1),P=de.useRef({position:{x:1,z:1},direction:new Y(0,0,1),worldPosition:new Y(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),E=de.useRef({}),N=de.useRef(null),ft=de.useRef(!1);de.useEffect(()=>{dt.current=u},[u]),de.useEffect(()=>{ft.current=t},[t]);const[Et,j]=de.useState(null),ot=de.useRef(null);de.useRef(!1);const V=de.useRef(null),ct=de.useRef(!1),[nt,pt]=de.useState({beta:0,gamma:0,velocity:{x:0,z:0},gravity:{x:0,z:0},position:{x:0,z:0},collision:!1,collisionEdge:"",eventCount:0,lastUpdate:Date.now(),eventType:"none",showDebug:!0}),C=()=>{if(console.log("Restarting game..."),!E.current.generateMaze||!E.current.createWalls){console.error("Game functions not initialized");return}if(N.current&&N.current.parent&&(console.log("Cleaning up celebration particles"),N.current.parent.remove(N.current),N.current.geometry&&N.current.geometry.dispose(),N.current.material&&N.current.material.dispose(),N.current=null,j(null)),console.log("Resetting game state"),i(!1),l(!1),h(!1),ct.current=!1,console.log("Resetting player position and direction"),P.current.position={x:1,z:1},P.current.direction.set(0,0,1),console.log("Resetting maze reference"),V.current=null,console.log("Generating new maze"),E.current.generateMaze(),console.log("Creating new walls"),E.current.createWalls(),console.log("Updating player world position"),P.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),E.current.createPlayer&&E.current.mazeGroup){console.log("Creating new player mesh"),P.current.mesh&&P.current.mesh.parent&&(console.log("Removing old player mesh"),P.current.mesh.parent.remove(P.current.mesh),P.current.mesh.children.forEach(st=>{st.geometry&&st.geometry.dispose(),st.material&&st.material.dispose()})),console.log("Creating new player mesh");const K=E.current.createPlayer();console.log("Positioning new player at entrance"),K.position.copy(P.current.worldPosition),console.log("Adding new player to maze group"),E.current.mazeGroup.add(K),console.log("Added new player to maze group"),console.log("Updating player ref"),P.current.mesh=K}if(E.current.setInitialPlayerDirection?E.current.setInitialPlayerDirection(P.current.mesh):P.current.direction.set(0,0,1),P.current.mesh){P.current.mesh.position.copy(P.current.worldPosition);const K=Math.atan2(P.current.direction.x,P.current.direction.z);P.current.mesh.rotation.y=K,P.current.mesh.visible=!0,P.current.mesh.children.forEach(st=>{st.material&&(st.material.opacity=1,st.material.transparent=!0)})}},J=()=>{const K=navigator.userAgent||navigator.vendor||window.opera,st=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(K.toLowerCase());return console.log("Device detection:",st?"Mobile":"Desktop"),I.current=st,st},_t=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",Dt=()=>window.DeviceOrientationEvent!==void 0,Z=async()=>{if(!_t())return console.log("No iOS permission needed, enabling gyroscope directly"),le(),!0;console.log("Requesting iOS device orientation permission");try{const K=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",K),K==="granted"?(console.log("✅ iOS permission granted!"),le(),B(!1),z(!1),window.physics||ie(),!0):(console.log("❌ iOS permission denied:",K),B(!1),z(!0),!1)}catch(K){return console.error("❌ Error requesting iOS permission:",K),B(!1),z(!0),!1}},mt=K=>{const st=performance.now(),it=st<3e3;it&&console.log("Orientation event received:",{beta:K.beta,gamma:K.gamma,time:st}),X.current={beta:K.beta,gamma:K.gamma},!it&&st%3e3<20&&console.log("Orientation data:",X.current)};de.useEffect(()=>{const K=J();return console.log("Is mobile:",K),K&&(_t()?(console.log("iOS device detected - showing permission button"),B(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):Dt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",mt),T(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),z(!0))),()=>{window.removeEventListener("deviceorientation",mt)}},[]),de.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let K=function(Ft){if(ii=requestAnimationFrame(K),I.current&&M&&!ft.current&&!d){const b=performance.now(),{beta:H,gamma:G}=X.current;if(b<5e3&&b%500<20&&console.log("Animation loop - orientation:",{beta:H,gamma:G}),H!==null&&G!==null){const W=Math.abs(H),q=Math.abs(G);let St="";const Ot=5;W>q&&W>Ot?St=H>0?"ArrowDown":"ArrowUp":q>Ot&&(St=G>0?"ArrowRight":"ArrowLeft");const Pt=Math.max(W,q),Ht=Math.max(100,500-Pt*5);St&&b-k.current>Ht&&(console.log(`Gyroscope movement: ${St} (tilt: ${Pt.toFixed(1)}°)`),Je({key:St,preventDefault:()=>{},stopPropagation:()=>{}}),k.current=b)}}if(!De&&!t){const b=Ft-Ye,H=Math.min(b/fn,1);if(H===1)De=!0,It.rotation.x=0,It.rotation.y=0;else{const G=pr.lerp(0,0,H);It.rotation.x=G,It.rotation.y=0}}else!De&&t&&(De=!0),dt.current||(It.rotation.x=0,It.rotation.y=0,It.rotation.z=0);const qt=Ft*.001;It.children.forEach(b=>{b.material&&b.material.uniforms&&(b.material.uniforms.time.value=qt)}),ot.current?(console.log("Calling updateParticles from animation loop"),ot.current()||(console.log("updateParticles returned false, setting to null"),ot.current=null)):ft.current&&!ot.current&&console.log("Game won but updateParticles is null"),dt.current?I.current||(gt.enabled=!1,gt.enableRotate=!1,gt.enableZoom=!1,gt.enablePan=!1):((Math.abs(Nt.position.x)>.1||Math.abs(Nt.position.z)>.1||Math.abs(Nt.position.y-Bt())>.1||Math.abs(gt.target.x)>.1||Math.abs(gt.target.y)>.1||Math.abs(gt.target.z)>.1)&&(Nt.position.set(0,Bt(),0),gt.target.set(0,0,0)),!I.current&&gt.update&&gt.update()),ee(),At.render(it,Nt)},st=function(){const Ft=window.innerWidth,qt=window.innerHeight;At.setSize(Ft,qt),Nt.aspect=Ft/qt;const b=Ft<768,H=Ft>qt;b?Nt.fov=H?75:80:Nt.fov=60,dt.current||(Nt.position.y=Bt(),Nt.lookAt(0,0,0)),Nt.updateProjectionMatrix()};console.log("Initializing 3D scene"),I.current=J(),console.log("Is mobile device:",I.current),I.current&&v(!0);const it=new l1;it.background=new Ce(0);const ht=new G_(4210752,1.5);it.add(ht);const xt=new H_(16777215,1);if(xt.position.set(1,1,1),it.add(xt),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const At=new A0({antialias:!0,canvas:o.current});if(At.setSize(window.innerWidth,window.innerHeight),At.setPixelRatio(Math.min(window.devicePixelRatio,2)),At.shadowMap.enabled=!0,At.shadowMap.type=Y_,console.log("Renderer set up"),I.current){console.log("Setting up orientation handling for mobile");const Ft=qt=>{var b;if(!(t||d)&&(!M&&(qt.beta!==null||qt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),T(!0)),!!M&&qt.beta!==null&&qt.gamma!==null)){let H=qt.beta,G=qt.gamma;if(window.orientation!==void 0){const W=window.orientation;if(performance.now()%5e3<20&&((b=window.physics)!=null&&b.debug)&&console.log(`Device orientation: ${W}°, beta: ${H.toFixed(2)}°, gamma: ${G.toFixed(2)}°`),W===90){const St=H;H=G,G=-St}else if(W===-90){const St=H;H=-G,G=St}else W===180&&(H=-H,G=-G)}if(window.physics){let St=0,Ot=0;Math.abs(G)>5&&(St=Math.min(Math.abs(G)-5,25)/25*Math.sign(G)),Math.abs(H)>5&&(Ot=Math.min(Math.abs(H)-5,25)/25*Math.sign(H)),window.physics.gravityX=St,window.physics.gravityZ=Ot,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${St.toFixed(3)}, Z=${Ot.toFixed(3)}`)}X.current={beta:H,gamma:G}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const qt=async()=>{console.log("Requesting iOS device orientation permission");try{const b=await window.DeviceOrientationEvent.requestPermission();b==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",Ft),T(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),ie(),setTimeout(()=>{P.current&&!t&&(console.log("🧪 Adding test impulse to verify physics system"),P.current.velocity.x=.05,P.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",b)}catch(b){console.error("❌ Error requesting permission:",b)}};document.addEventListener("touchstart",()=>{qt(),document.removeEventListener("touchstart",qt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",Ft),T(!0)}const rt=21,se=2,jt=3,Ut=2,Bt=(Ft=!1)=>{const qt=window.innerWidth<768,b=window.innerWidth>window.innerHeight,H=rt*Ut;let G=H*1.5;return qt&&(Ft||D)&&(b?G=H*1.6:G=H*1.8),qt?b?G*.8:G*1.2:G};window.calculateOptimalCameraHeight=Bt;const Gt=Bt(),Nt=new ei(60,window.innerWidth/window.innerHeight,.1,1e3);Nt.position.set(0,Gt,0),Nt.lookAt(0,0,0),Rt.current=Nt,window.gameCamera=Nt,console.log("Camera set up and assigned to cameraRef");const O=J();let gt;O?(gt={target:new Y(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(gt=new h1(Nt,At.domElement),gt.enableDamping=!0,gt.dampingFactor=.1,gt.target.set(0,0,0),gt.update(),console.log("Desktop controls set up"));const Lt=t&&V.current?V.current:Array(rt).fill().map(()=>Array(rt).fill(1));V.current=Lt,window.MAZE_SIZE=rt,window.WALL_THICKNESS=Ut,window.playerRef=P,window.mazeRef=V,window.isThirdPersonRef=dt,window.gameCamera=Nt,window.maze=Lt,window.celebrateWin=()=>{ct.current=!0,i(!0),l(!0),ni()};const It=new Po;it.add(It),console.log("Maze group created"),E.current.mazeGroup=It;const U=new ca({uniforms:{time:{value:0},baseColor:{value:new Ce(4482815)}},vertexShader:`
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
        `,side:zi});console.log("Wall material created");const bt=(Ft,qt)=>Ft>=0&&Ft<rt&&qt>=0&&qt<rt,Mt=(Ft,qt)=>{const b=[],H=[[0,2],[2,0],[0,-2],[-2,0]];for(let G=H.length-1;G>0;G--){const W=Math.floor(Math.random()*(G+1));[H[G],H[W]]=[H[W],H[G]]}for(const[G,W]of H){const q=Ft+G,St=qt+W;bt(q,St)&&Lt[q][St]===1&&b.push([q,St,G/2,W/2])}return b},Xt=()=>{if(t&&V.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let W=0;W<rt;W++)for(let q=0;q<rt;q++)Lt[W][q]=1;const Ft=[],qt=1,b=1;for(Lt[qt][b]=0,Ft.push([qt,b]);Ft.length>0;){const[W,q]=Ft[Ft.length-1],St=Mt(W,q);if(St.length===0){Ft.pop();continue}const[Ot,Pt,Ht,Zt]=St[Math.floor(Math.random()*St.length)];Lt[Ot][Pt]=0,Lt[W+Ht][q+Zt]=0,Ft.push([Ot,Pt])}Lt[0][1]=0,Lt[rt-1][rt-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(rt-1)+","+(rt-2)+")");const H=new Set,G=W=>{const[q,St]=W;if(q===rt-2&&St===rt-2)return!0;H.add(`${q},${St}`);const Ot=[[0,1],[1,0],[0,-1],[-1,0]];for(const[Pt,Ht]of Ot){const Zt=q+Pt,ne=St+Ht;if(bt(Zt,ne)&&Lt[Zt][ne]===0&&!H.has(`${Zt},${ne}`)&&G([Zt,ne]))return!0}return!1};G([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),Xt()),V.current=Lt,window.maze=Lt,window.MAZE_SIZE=rt,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Jt=()=>{if(!t||!V.current){for(console.log("Creating new walls for the maze");It.children.length>0;){const Ft=It.children[0];Ft.isGroup?Ft.children.forEach(qt=>{qt.geometry&&qt.geometry.dispose(),qt.material&&qt.material.dispose()}):(Ft.geometry&&Ft.geometry.dispose(),Ft.material&&Ft.material.dispose()),It.remove(Ft)}for(let Ft=0;Ft<rt;Ft++)for(let qt=0;qt<rt;qt++)if(Lt[Ft][qt]===1){const b=new ka(Ut,jt,Ut),H=new Xn(b,U);if(H.position.set((Ft-rt/2)*Ut,jt/2,(qt-rt/2)*Ut),It.add(H),Ft===0||Ft===rt-1||qt===0||qt===rt-1){if(Ft<rt-1&&Lt[Ft+1][qt]===1){const G=new Xn(new ka(Ut,jt,Ut),U);G.position.set((Ft-rt/2+.5)*Ut,jt/2,(qt-rt/2)*Ut),It.add(G)}if(qt<rt-1&&Lt[Ft][qt+1]===1){const G=new Xn(new ka(Ut,jt,Ut),U);G.position.set((Ft-rt/2)*Ut,jt/2,(qt-rt/2+.5)*Ut),It.add(G)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),E.current.generateMaze=Xt,E.current.createWalls=Jt;const ve=Ft=>{if(console.log("Setting initial player direction"),!Ft){console.error("Player mesh not provided to setInitialPlayerDirection");return}const qt=1,b=1,H=[{dx:0,dz:1,name:"down",vector:new Y(0,0,1)},{dx:1,dz:0,name:"right",vector:new Y(1,0,0)},{dx:0,dz:-1,name:"up",vector:new Y(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new Y(-1,0,0)}];console.log("Checking available directions from starting position:",qt,b);const G=H.filter(W=>{const q=qt+W.dx,St=b+W.dz;if(q===0&&St===1)return console.log(`Direction ${W.name} leads to entrance, skipping`),!1;const Ot=bt(q,St)&&Lt[q][St]===0;return console.log(`Direction ${W.name} leads to (${q}, ${St}): ${Ot?"valid":"invalid"}`),Ot});if(console.log("Valid directions:",G.map(W=>W.name)),G.length>0){const W=G[0];console.log("Chosen direction:",W.name),P.current.direction.copy(W.vector);const q=Math.atan2(W.vector.x,W.vector.z);Ft.rotation.y=q,console.log("Set player rotation to:",q)}else console.log("No valid directions found, defaulting to down"),P.current.direction.set(0,0,1),Ft.rotation.y=0};E.current.setInitialPlayerDirection=ve,t?console.log("Game has been won, preserving maze and player position"):(Xt(),Jt(),console.log("Initial maze created"));const ce=new G_(16777215,.6);it.add(ce);const ye=new H_(16777215,1);ye.position.set(50,100,50),it.add(ye);const Me=new I_(4474111,2,150);Me.position.set(50,50,50),it.add(Me);const he=new I_(4474111,2,150);he.position.set(-50,50,-50),it.add(he),console.log("Lights added");let De=!1;const Ye=performance.now(),fn=1e3,ni=()=>{console.log("Celebration function called - START");const Ft=2e3,qt=new Ai,b=new Float32Array(Ft*3),H=new Float32Array(Ft*3);for(let Pt=0;Pt<Ft;Pt++)b[Pt*3]=P.current.worldPosition.x,b[Pt*3+1]=P.current.worldPosition.y,b[Pt*3+2]=P.current.worldPosition.z,H[Pt*3]=Math.random(),H[Pt*3+1]=Math.random(),H[Pt*3+2]=Math.random();qt.setAttribute("position",new Hn(b,3)),qt.setAttribute("color",new Hn(H,3));const G=new w0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:md}),W=new c1(qt,G);it.add(W),console.log("Particle system added to scene");const q=[];for(let Pt=0;Pt<Ft;Pt++){const Ht=Math.random()*Math.PI*2,Zt=Math.acos(Math.random()*2-1),ne=.05+Math.random()*.1;q.push(Math.sin(Zt)*Math.cos(Ht)*ne,Math.sin(Zt)*Math.sin(Ht)*ne,Math.cos(Zt)*ne)}N.current=W;const St=()=>{if(console.log("Update particles function called - frame"),!ft.current)return console.log("Game no longer in won state, cleaning up particles"),W.parent&&(it.remove(W),W.geometry.dispose(),G.dispose()),N.current=null,ot.current=null,!1;const Pt=W.geometry.attributes.position.array;let Ht=!1;for(let ne=0;ne<Ft;ne++){const te=ne*3;Pt[te]+=q[te],Pt[te+1]+=q[te+1],Pt[te+2]+=q[te+2],q[te+1]-=.001;const Ae=Pt[te]-P.current.worldPosition.x,ze=Pt[te+1]-P.current.worldPosition.y,Ge=Pt[te+2]-P.current.worldPosition.z;Math.sqrt(Ae*Ae+ze*ze+Ge*Ge)<20&&(Ht=!0)}W.geometry.attributes.position.needsUpdate=!0;const Zt=performance.now()-Ot;return Zt>1e3&&(G.opacity=Math.max(0,1-(Zt-1e3)/1e3)),!Ht||Zt>2e3?(console.log("Animation complete, cleaning up particles"),it.remove(W),W.geometry.dispose(),G.dispose(),N.current=null,ot.current=null,!1):!0},Ot=performance.now();return console.log("Setting updateParticles function"),ot.current=St,()=>{console.log("Cleanup function called"),W.parent&&(it.remove(W),W.geometry.dispose(),G.dispose()),N.current=null,ot.current=null}},wi=()=>{if(!it)return;console.log("Creating player...");const Ft=window.MAZE_SIZE||21,qt=window.WALL_THICKNESS||2,b=new Mc(.4,32,32),H=new P_({color:16733491,roughness:.4,metalness:.6,envMapIntensity:.8}),G=new Xn(b,H);G.castShadow=!0,G.receiveShadow=!0;const W=1,q=1,St=(W-Ft/2)*qt,Ot=(q-Ft/2)*qt;G.position.set(St,qt/2,Ot),it.add(G);const Pt=new Pd(.2,.5,8),Ht=new P_({color:16755251}),Zt=new Xn(Pt,Ht);return Zt.position.y=.1,Zt.rotation.x=Math.PI/2,Zt.castShadow=!0,G.add(Zt),P.current={position:{x:W,z:q},velocity:{x:0,z:0},direction:new Y(0,0,1),worldPosition:new Y(St,qt/2,Ot),mesh:G},console.log(`Player created at entrance - Maze coords: (${W},${q}), World coords: (${St},${Ot})`),G},nn=wi();E.current.createPlayer=wi;let gn=null;if(t){for(let Ft=0;Ft<It.children.length;Ft++){const qt=It.children[Ft];if(qt.isGroup&&qt.children.length>0&&qt.children[0].geometry instanceof Mc){gn=qt;break}}gn&&(gn.children.forEach(Ft=>{Ft.geometry&&Ft.geometry.dispose(),Ft.material&&Ft.material.dispose()}),It.remove(gn),console.log("Removed existing player from maze group"))}if(!t)nn.position.set((1-rt/2)*Ut,Ut/2,(1-rt/2)*Ut),P.current.mesh=nn,P.current.worldPosition.copy(nn.position),ve(nn);else{if(ct.current){const qt=rt-1,b=rt-2,H=new Y((qt-rt/2)*Ut,Ut/2,(b-rt/2)*Ut);console.log("Positioning player at exit:",H),nn.position.copy(H),P.current.worldPosition.copy(H),P.current.position={x:qt,z:b}}else console.log("Using existing player position:",P.current.worldPosition),nn.position.copy(P.current.worldPosition);P.current.mesh=nn;const Ft=Math.atan2(P.current.direction.x,P.current.direction.z);nn.rotation.y=Ft}It.add(nn),P.current.mesh=nn,console.log("Player created and added to maze group");const je=Ft=>{if(Ft.key.toLowerCase()==="v")return console.log("View toggle key pressed"),Ft.preventDefault(),Ft.stopPropagation(),Ft.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(qt=>{const b=!qt;console.log("Switching to:",b?"POV mode":"Top-down mode"),dt.current=b;const H=Nt.position.clone(),G=new Y().copy(gt.target),W=Nt.fov,q={x:It.rotation.x,y:It.rotation.y,z:It.rotation.z},St=b?new Y(P.current.worldPosition.x,P.current.worldPosition.y+1.5,P.current.worldPosition.z):new Y(0,Bt(),0),Ot=b?new Y(P.current.worldPosition.x+P.current.direction.x*Ut,P.current.worldPosition.y+1.5,P.current.worldPosition.z+P.current.direction.z*Ut):new Y(0,0,0),Pt=window.innerWidth<768,Ht=window.innerWidth>window.innerHeight;let Zt=b?75:60;Pt&&(Zt=b||Ht?75:80);const ne={x:0,y:0,z:0},te=nn.visible?1:0,Ae=b?0:1;nn.visible=!0,nn.children.forEach(pe=>{pe.material&&(pe.material.transparent||(pe.material.transparent=!0),pe.material.opacity=te)}),I.current||(gt.enabled=!1);const ze=1200;let Ge=null;const Rn=pe=>{const Ri=pe-Be,Pe=Math.min(Ri/ze,1),Ze=(vn=>vn<.5?4*vn*vn*vn:1-Math.pow(-2*vn+2,3)/2)(Pe);Nt.position.lerpVectors(H,St,Ze);const gi=new Y().lerpVectors(G,Ot,Ze);if(I.current||gt.target.copy(gi),Nt.lookAt(gi),Nt.fov=pr.lerp(W,Zt,Ze),Nt.updateProjectionMatrix(),It.rotation.x=pr.lerp(q.x,ne.x,Ze),It.rotation.y=pr.lerp(q.y,ne.y,Ze),It.rotation.z=pr.lerp(q.z,ne.z,Ze),nn.children.forEach(vn=>{vn.material&&(vn.material.opacity=pr.lerp(te,Ae,Ze))}),Pe===1){cancelAnimationFrame(Ge),nn.visible=!b,nn.children.forEach(vn=>{vn.material&&(vn.material.opacity=Ae,Ae===1&&(vn.material.transparent=!1))}),!I.current&&!b?(gt.enabled=!0,gt.enableRotate=!0,gt.enableZoom=!0,gt.enablePan=!0):(Nt.position.copy(St),Nt.lookAt(Ot)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}Ge=requestAnimationFrame(Rn)},Be=performance.now();return Ge=requestAnimationFrame(Rn),b}),!1)},Je=Ft=>{if(ft.current||!De||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const qt=Ft.key.toLowerCase();if(console.log("Key pressed:",qt,"Current mode:",dt.current?"POV":"Top-down"),qt==="v")return;Ft.preventDefault();const b=P.current.position.x,H=P.current.position.z;let G=b,W=H,q=!1;const St=P.current.mesh;if(!St){console.error("Player mesh not found");return}if(dt.current){switch(console.log("Handling POV mode controls"),qt){case"arrowup":case"w":console.log("Moving forward - Current position:",b,H),console.log("Current direction:",P.current.direction),G=b+Math.round(P.current.direction.x),W=H+Math.round(P.current.direction.z),console.log("New position will be:",G,W),q="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",b,H),console.log("Current direction:",P.current.direction),G=b-Math.round(P.current.direction.x),W=H-Math.round(P.current.direction.z),console.log("New position will be:",G,W),q="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",P.current.direction),P.current.direction.applyAxisAngle(new Y(0,1,0),Math.PI/2),console.log("New direction:",P.current.direction),q="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",P.current.direction),P.current.direction.applyAxisAngle(new Y(0,1,0),-Math.PI/2),console.log("New direction:",P.current.direction),q="rotate";break}if(q==="move")if(bt(G,W)&&Lt[G][W]===0){console.log("Movement is valid, updating positions"),P.current.position.x=G,P.current.position.z=W;const Ot=new Y((G-rt/2)*Ut,Ut/2,(W-rt/2)*Ut);console.log("New world position:",Ot),P.current.worldPosition.copy(Ot),St.position.copy(Ot),console.log("Updated player mesh position to:",St.position),Nt.position.set(Ot.x,Ot.y+1.5,Ot.z),console.log("New camera position:",Nt.position);const Pt=Nt.position.clone();if(Pt.add(P.current.direction.clone().multiplyScalar(Ut)),Nt.lookAt(Pt),console.log("Camera looking at:",Pt),Nt.updateProjectionMatrix(),Nt.updateMatrixWorld(),G===rt-1&&W===rt-2){ct.current=!0,i(!0),l(!0);const Ht=ni();return()=>{Ht&&Ht()}}}else console.log("Movement blocked - Out of bounds or wall:",G,W);else if(q==="rotate"){console.log("Handling rotation");const Ot=Math.atan2(P.current.direction.x,P.current.direction.z);St.rotation.y=Ot,console.log("Updated player mesh rotation to:",Ot);const Pt=Nt.position.clone();Pt.add(P.current.direction.clone().multiplyScalar(Ut)),Nt.lookAt(Pt),console.log("Camera looking at new direction:",Pt),Nt.updateProjectionMatrix(),Nt.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),qt){case"arrowup":case"w":console.log("Moving up - Current position:",b,H),W=H-1,P.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",b,H),W=H+1,P.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",b,H),G=b-1,P.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",b,H),G=b+1,P.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",G,W),console.log("Maze value at target position:",Lt[G][W]),console.log("Is in bounds:",bt(G,W)),bt(G,W)&&Lt[G][W]===0){console.log("Movement is valid, updating positions"),P.current.position.x=G,P.current.position.z=W;const Ot=new Y((G-rt/2)*Ut,Ut/2,(W-rt/2)*Ut);P.current.worldPosition.copy(Ot),St.position.copy(Ot);const Pt=Math.atan2(P.current.direction.x,P.current.direction.z);if(St.rotation.y=Pt,G===rt-1&&W===rt-2){ct.current=!0,i(!0),l(!0);const Ht=ni();return()=>{Ht&&Ht()}}}}};window.removeEventListener("keydown",je,!0),window.removeEventListener("keydown",Je),console.log("Attaching event listeners"),window.addEventListener("keydown",je,!0),window.addEventListener("keydown",Je),console.log("Event listeners attached");let ii;return console.log("Starting animation"),K(),window.addEventListener("resize",st),()=>{console.log("Cleanup running"),window.removeEventListener("resize",st),window.removeEventListener("keydown",je,!0),window.removeEventListener("keydown",Je),ii&&cancelAnimationFrame(ii),it.traverse(Ft=>{Ft.geometry&&Ft.geometry.dispose(),Ft.material&&(Array.isArray(Ft.material)?Ft.material.forEach(qt=>qt.dispose()):Ft.material.dispose())}),At.dispose(),gt&&typeof gt.dispose=="function"&&gt.dispose()}}catch(K){console.error("Error in setup:",K)}},[]),de.useEffect(()=>{const K=()=>{const it=J();return it&&(!Dt()||_t()&&!M)&&(console.log("Setting up touch controls for mobile"),z(!0)),st(),it},st=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const it=ht=>{console.log("Device orientation event received:",ht),window.removeEventListener("deviceorientation",it)};window.addEventListener("deviceorientation",it,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};K()},[M]);const wt=de.useRef(null),Yt=de.useRef(null),Vt=de.useRef(null),kt=de.useRef(null);de.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const K=se=>{if(t||d)return;const jt=.1;switch(se){case"up":P.current.velocity.z-=jt,P.current.direction.set(0,0,-1);break;case"down":P.current.velocity.z+=jt,P.current.direction.set(0,0,1);break;case"left":P.current.velocity.x-=jt,P.current.direction.set(-1,0,0);break;case"right":P.current.velocity.x+=jt,P.current.direction.set(1,0,0);break}const Ut=.2,Bt=P.current.velocity,Gt=Math.sqrt(Bt.x*Bt.x+Bt.z*Bt.z);Gt>Ut&&(Bt.x=Bt.x/Gt*Ut,Bt.z=Bt.z/Gt*Ut)},st=(se,jt)=>(se.preventDefault(),se.stopPropagation(),K(jt),!1),it=(se,jt)=>{if(!se.current)return;const Ut=se.current,Bt=gt=>st(gt,jt),Gt=gt=>gt.preventDefault(),Nt=gt=>st(gt,jt),O=gt=>st(gt,jt);return Ut.addEventListener("touchstart",Bt,{passive:!1}),Ut.addEventListener("touchend",Gt,{passive:!1}),Ut.addEventListener("mousedown",Nt),Ut.addEventListener("click",O),()=>{Ut.removeEventListener("touchstart",Bt),Ut.removeEventListener("touchend",Gt),Ut.removeEventListener("mousedown",Nt),Ut.removeEventListener("click",O)}},ht=it(wt,"up"),xt=it(Yt,"down"),At=it(Vt,"left"),rt=it(kt,"right");return()=>{ht&&ht(),xt&&xt(),At&&At(),rt&&rt()}},[D]),de.useEffect(()=>{const K=()=>{let ht=document.querySelector('meta[name="viewport"]');ht||(ht=document.createElement("meta"),ht.name="viewport",document.head.appendChild(ht)),ht.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},st=ht=>{ht.touches&&ht.touches.length>1&&ht.preventDefault()},it=ht=>{ht.preventDefault()};return K(),document.addEventListener("touchmove",st,{passive:!1}),document.addEventListener("touchstart",it,{passive:!1}),()=>{document.removeEventListener("touchmove",st),document.removeEventListener("touchstart",it)}},[]),de.useEffect(()=>{if(!window.gameCamera||dt.current)return;const st=setTimeout(()=>{const it=window.gameCamera;if(it&&!dt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const ht=window.calculateOptimalCameraHeight(D);it.position.y=ht,it.updateProjectionMatrix(),console.log(`Adjusted camera height to ${ht} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(st)},[D]);const ee=()=>{if(!M||t||d)return;const K=window.maze||V.current;if(!K){console.warn("No maze available for physics update");return}const st=window.MAZE_SIZE||21,it=window.WALL_THICKNESS||2,ht=P.current,xt=ht.velocity,At=ht.position,rt=ht.mesh;if(!rt){console.warn("No player mesh available for physics update");return}const se=window.physics||{},jt=se.gravityX||0,Ut=se.gravityZ||0,Bt=.01,Gt=.97,Nt=.5,O=.45;if(xt.x+=jt*Bt,xt.z+=Ut*Bt,xt.x*=Gt,xt.z*=Gt,Math.abs(xt.x)<2e-4&&Math.abs(xt.z)<2e-4)return;const gt=At.x,Lt=At.z;let It=At.x+xt.x,U=At.z+xt.z;const bt=(fn,ni)=>fn<0||fn>=st||ni<0||ni>=st?!0:K[fn][ni]===1;let Mt=!1,Xt="";const Jt=Math.floor(At.x),ve=Math.floor(At.z);At.x-Jt,At.z-ve,At.x=It;const ce=Math.floor(At.x);At.x-ce;let ye=!1;xt.x>0&&ce+1<st&&bt(ce+1,Math.floor(At.z))?ce+1-At.x<O&&(ye=!0,Mt=!0,Xt+="R",At.x=ce+1-O-.01,xt.x=-xt.x*Nt):xt.x<0&&ce>=0&&bt(ce,Math.floor(At.z))&&At.x-ce<O&&(ye=!0,Mt=!0,Xt+="L",At.x=ce+O+.01,xt.x=-xt.x*Nt),At.z=U;const Me=Math.floor(At.z);At.z-Me;let he=!1;xt.z>0&&Me+1<st&&bt(Math.floor(At.x),Me+1)?Me+1-At.z<O&&(he=!0,Mt=!0,Xt+="B",At.z=Me+1-O-.01,xt.z=-xt.z*Nt):xt.z<0&&Me>=0&&bt(Math.floor(At.x),Me)&&At.z-Me<O&&(he=!0,Mt=!0,Xt+="T",At.z=Me+O+.01,xt.z=-xt.z*Nt),bt(ce,Me)&&!ye&&!he&&(Mt=!0,Xt+="Diag",xt.x=-xt.x*Nt,xt.z=-xt.z*Nt,At.x=gt,At.z=Lt),bt(Math.floor(At.x),Math.floor(At.z))&&(At.x=gt,At.z=Lt,xt.x=0,xt.z=0,Mt=!0,Xt+="Reset");const De=(At.x-st/2)*it,Ye=(At.z-st/2)*it;if(ht.worldPosition&&ht.worldPosition.set(De,it/2,Ye),rt.position.copy(ht.worldPosition),Math.abs(xt.x)>.01||Math.abs(xt.z)>.01){const fn=Math.atan2(xt.x,xt.z);rt.rotation.y=fn,ht.direction.set(xt.x,0,xt.z).normalize()}Math.floor(At.x)===st-2&&Math.floor(At.z)===st-2&&(console.log("Victory reached!"),i(!0),celebrate()),pt(fn=>({...fn,velocity:{x:xt.x,z:xt.z},position:{x:At.x,z:At.z},worldPosition:{x:De,z:Ye},collision:Mt,collisionEdge:Xt}))},ie=()=>{console.log("⚡ Initializing physics system");const K=window.MAZE_SIZE||21,st=window.WALL_THICKNESS||2;if(P.current){P.current.position={x:1,z:1},P.current.velocity={x:0,z:0};const it=(1-K/2)*st,ht=(1-K/2)*st;console.log(`Converting maze coords (1,1) to world coords (${it}, ${ht})`),P.current.worldPosition?P.current.worldPosition.set(it,st/2,ht):P.current.worldPosition=new Y(it,st/2,ht),P.current.mesh&&(P.current.mesh.position.copy(P.current.worldPosition),console.log(`Set player mesh position to world coords: (${P.current.worldPosition.x}, ${P.current.worldPosition.y}, ${P.current.worldPosition.z})`))}window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:0,mazeSize:K,wallThickness:st},console.log("Physics initialized - player at entrance position with gravity-based movement")},et=()=>{const K=window.MAZE_SIZE||21,st=window.WALL_THICKNESS||2;if(P.current){P.current.position={x:1,z:1},P.current.velocity={x:0,z:0};const it=(1-K/2)*st,ht=(1-K/2)*st;P.current.worldPosition&&P.current.worldPosition.set(it,st/2,ht),P.current.mesh&&P.current.mesh.position.copy(P.current.worldPosition),console.log(`Player position reset to entrance. Physics (1,1), World (${it}, ${ht})`)}},Oe=()=>{var O,gt,Lt,It,U,bt;const{beta:K,gamma:st,velocity:it,gravity:ht,position:xt,eventCount:At,lastUpdate:rt,eventType:se,collision:jt,collisionEdge:Ut}=nt,Bt=Math.sqrt(it.x*it.x+it.z*it.z),Gt=Bt>.01?`rgb(${Math.min(255,Math.floor(Bt*2e3))}, ${Math.min(255,Math.floor(255-Bt*500))}, 0)`:"#4CAF50",Nt=()=>{const ce=40+ht.x*24*1.8,ye=40+ht.z*24*1.8,Me=Math.sqrt(ht.x*ht.x+ht.z*ht.z)*24*1.5,he=Math.atan2(ht.z,ht.x);return Kt.jsxs("div",{style:{position:"relative",width:80,height:80,backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"50%",margin:"5px auto",border:"1px solid rgba(255,255,255,0.2)"},children:[Kt.jsx("div",{style:{position:"absolute",left:40-.5,top:0,width:1,height:80,backgroundColor:"rgba(255,255,255,0.2)"}}),Kt.jsx("div",{style:{position:"absolute",left:0,top:40-.5,width:80,height:1,backgroundColor:"rgba(255,255,255,0.2)"}}),Me>5&&Kt.jsx("div",{style:{position:"absolute",width:Me,height:2,backgroundColor:"rgba(255,100,100,0.8)",transformOrigin:"left center",transform:`translate(40px, 40px) rotate(${he}rad)`,borderRadius:"1px"},children:Kt.jsx("div",{style:{position:"absolute",right:-2,top:-3,width:0,height:0,borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"6px solid rgba(255,100,100,0.8)"}})}),Kt.jsx("div",{style:{position:"absolute",width:16,height:16,borderRadius:"50%",backgroundColor:Gt,transform:`translate(${ce-8}px, ${ye-8}px)`,transition:"transform 0.05s ease-out, background-color 0.1s",boxShadow:"0 0 5px rgba(0,0,0,0.5)"}}),Kt.jsx("div",{style:{position:"absolute",left:0,top:28,textAlign:"center",width:12,fontSize:10},children:"L"}),Kt.jsx("div",{style:{position:"absolute",right:0,top:28,textAlign:"center",width:12,fontSize:10},children:"R"}),Kt.jsx("div",{style:{position:"absolute",top:0,left:34,textAlign:"center",width:12,fontSize:10},children:"U"}),Kt.jsx("div",{style:{position:"absolute",bottom:0,left:34,textAlign:"center",width:12,fontSize:10},children:"D"})]})};return Kt.jsxs("div",{style:{position:"fixed",top:10,left:10,backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"10px",borderRadius:"5px",fontSize:"14px",zIndex:1e4,maxWidth:"300px",fontFamily:"monospace"},children:[Kt.jsx("h3",{style:{margin:"0 0 8px 0",borderBottom:"1px solid #666"},children:"📱 Device Debug"}),Kt.jsx(Nt,{}),Kt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Tilt: "}),Kt.jsxs("span",{style:{fontWeight:"bold"},children:["β:",K,"° γ:",st,"°"]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Gravity: "}),Kt.jsxs("span",{style:{color:Math.abs(ht.x)+Math.abs(ht.z)>.1?"#f88":"#8f8"},children:["X:",((O=ht.x)==null?void 0:O.toFixed(2))||0,", Z:",((gt=ht.z)==null?void 0:gt.toFixed(2))||0]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Velocity: "}),Kt.jsxs("span",{style:{color:Gt,fontWeight:Bt>.01?"bold":"normal"},children:[((Lt=it.x)==null?void 0:Lt.toFixed(3))||0,", ",((It=it.z)==null?void 0:It.toFixed(3))||0]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Position: "}),Kt.jsxs("span",{children:["(",((U=xt==null?void 0:xt.x)==null?void 0:U.toFixed(1))||"?",", ",((bt=xt==null?void 0:xt.z)==null?void 0:bt.toFixed(1))||"?",")"]})]}),Kt.jsxs("div",{children:[Kt.jsx("span",{style:{color:"#8cf"},children:"Collision: "}),Kt.jsx("span",{style:{color:jt?"#f88":"#8f8"},children:jt?`Yes (${Ut})`:"No"})]}),Kt.jsxs("div",{style:{display:"flex",gap:"5px",marginTop:"5px"},children:[Kt.jsx("button",{onClick:()=>{P.current&&(P.current.velocity={x:.1,z:.1},console.log("Manual impulse applied"))},style:{flex:1,background:"#4CAF50",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Impulse"}),Kt.jsx("button",{onClick:et,style:{flex:1,background:"#2196F3",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Reset"})]})]})]})},ae=()=>{pt(K=>({...K,showDebug:!K.showDebug}))};de.useEffect(()=>{let K,st=0;const it=1e3/60;let ht=0;function xt(At){if(K=requestAnimationFrame(xt),st===0){st=At;return}const rt=At-st;for(st=At,ht+=rt;ht>=it;)I.current&&M&&!t&&!d&&ee(),ht-=it}return K=requestAnimationFrame(xt),()=>{K&&cancelAnimationFrame(K)}},[M,t,d]);const le=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Ne,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",Qt,{passive:!0}),console.log("✓ Added devicemotion listener")),T(!0),v(!0),window.physics||ie()},Qt=K=>{if(pt(it=>({...it,eventCount:it.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const st=K.accelerationIncludingGravity;if(st&&st.x!==null&&st.y!==null&&st.z!==null){let ht=Math.min(Math.max(st.x/5,-1),1),xt=Math.min(Math.max(st.y/5,-1),1);const At=.05;Math.abs(ht)<At&&(ht=0),Math.abs(xt)<At&&(xt=0),window.physics.gravityX=-ht,window.physics.gravityZ=xt}},Ne=K=>{if(!(K.beta===null&&K.gamma===null)&&(!M&&(K.beta!==null||K.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),T(!0),v(!0)),K.beta!==null&&K.gamma!==null)){let st=K.beta,it=K.gamma;if(performance.now()%5e3<20&&console.log(`Raw orientation: beta=${st.toFixed(2)}°, gamma=${it.toFixed(2)}°`),window.orientation!==void 0){const se=window.orientation;if(se===90){const jt=st;st=it,it=-jt}else if(se===-90){const jt=st;st=-it,it=jt}else se===180&&(st=-st,it=-it)}window.physics||ie();const ht=30,xt=1;let At=0,rt=0;Math.abs(it)>xt&&(At=Math.sign(it)*Math.min(1,(Math.abs(it)-xt)/(ht-xt))),Math.abs(st)>xt&&(rt=Math.sign(st)*Math.min(1,(Math.abs(st)-xt)/(ht-xt))),window.physics&&(window.physics.gravityX=At,window.physics.gravityZ=rt,console.log(`Gravity vector: X=${At.toFixed(2)}, Z=${rt.toFixed(2)}`),pt(se=>({...se,beta:parseFloat(st.toFixed(2)),gamma:parseFloat(it.toFixed(2)),gravity:{x:At,z:rt},eventCount:se.eventCount+1,lastUpdate:Date.now(),eventType:"orientation"}))),X.current={beta:st,gamma:it}}};de.useEffect(()=>{if(!nt.showDebug)return;const K=()=>{if(document.getElementById("collision-visualizer"))return;const ht=document.createElement("div");ht.id="collision-visualizer",ht.style.cssText=`
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px dashed rgba(255, 100, 100, 0.7);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: border-color 0.3s;
        z-index: 1000;
      `,document.body.appendChild(ht),window.collisionVisualizer=ht},st=()=>{var se;if(!window.collisionVisualizer||!((se=P.current)!=null&&se.mesh))return;if(!Rt.current){console.warn("Camera reference not available for visualizer update");return}const ht=P.current.mesh,xt=new Y;xt.set(ht.position.x,ht.position.y,ht.position.z),xt.project(Rt.current);const At=(xt.x*.5+.5)*window.innerWidth,rt=(-(xt.y*.5)+.5)*window.innerHeight;window.collisionVisualizer.style.left=`${At}px`,window.collisionVisualizer.style.top=`${rt}px`,window.collisionVisualizer.style.borderColor=nt.collision?"rgba(255, 0, 0, 0.9)":"rgba(100, 255, 100, 0.6)",requestAnimationFrame(st)};K();const it=requestAnimationFrame(st);return()=>{cancelAnimationFrame(it),window.collisionVisualizer&&(window.collisionVisualizer.remove(),window.collisionVisualizer=null)}},[nt.showDebug]),de.useEffect(()=>{P.current?P.current.worldPosition||(P.current.worldPosition=new Y(2,0,2),console.log("Added missing worldPosition to existing playerRef")):(P.current={position:{x:1,z:1},velocity:{x:0,z:0},direction:new Y(0,0,1),worldPosition:new Y(2,0,2),mesh:null},console.log("Initialized playerRef with default values including worldPosition"))},[]),de.useEffect(()=>{const K=()=>{if(!J()){console.log("Not a mobile device, skipping orientation lock");return}try{window.screen&&window.screen.orientation?window.screen.orientation.lock("portrait").then(()=>console.log("✓ Orientation locked to portrait")).catch(st=>console.warn("Cannot lock orientation:",st)):window.orientation!==void 0&&(console.log("Using orientation event fallback for iOS"),window.addEventListener("orientationchange",function(){window.orientation===90||window.orientation===-90?L("Please rotate your device to portrait mode"):L("")}))}catch(st){console.warn("Orientation locking not supported:",st)}};return J()?(console.log("Mobile device detected, locking to portrait orientation"),K(),A("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait")):(console.log("Desktop device detected, allowing any orientation"),A("width=device-width, initial-scale=1.0")),()=>{window.removeEventListener("orientationchange",()=>{})}},[]);const[ue,L]=de.useState(""),A=K=>{let st=document.querySelector('meta[name="viewport"]');if(st||(st=document.createElement("meta"),st.name="viewport",document.head.appendChild(st)),st.setAttribute("content",K),console.log("✓ Viewport meta set:",K),J()){let it=document.querySelector('meta[name="screen-orientation"]');it||(it=document.createElement("meta"),it.name="screen-orientation",document.head.appendChild(it)),it.setAttribute("content","portrait")}},lt=()=>{if(!J())return L(""),window.physics&&(window.physics.active=!0),!0;const K=window.matchMedia("(orientation: landscape)").matches;return K?(L("Please rotate your device to portrait mode"),window.physics&&(window.physics.active=!1)):(L(""),window.physics&&(window.physics.active=!0)),!K};de.useEffect(()=>{lt();const K=()=>{lt(),Rt.current&&!u&&setTimeout(()=>{const st=calculateOptimalCameraHeight(D);Rt.current.position.y=st},300)};if(J()){window.addEventListener("orientationchange",K),window.addEventListener("resize",K);const st=window.matchMedia("(orientation: portrait)");return st.addEventListener("change",K),()=>{window.removeEventListener("orientationchange",K),window.removeEventListener("resize",K),st.removeEventListener("change",K)}}},[u,D]);const zt={position:"fixed",top:0,left:0,width:"100%",height:"100%",display:ue?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.85)",color:"white",fontSize:"1.5rem",textAlign:"center",padding:"2rem",zIndex:9999,fontFamily:"Arial, sans-serif"},Rt=de.useRef(null);return de.useRef(null),de.useRef(null),de.useRef(null),Kt.jsxs(Kt.Fragment,{children:[Kt.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),nt.showDebug&&Kt.jsx(Oe,{}),Kt.jsx("button",{onClick:ae,style:{position:"fixed",top:10,right:10,zIndex:1e4,background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px"},children:nt.showDebug?"Hide Debug":"Show Debug"}),_&&Kt.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[Kt.jsx("button",{className:"permission-button",onClick:K=>{K.preventDefault(),K.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{Z()},10)},onTouchStart:K=>{console.log("Button touch started"),K.stopPropagation()},onTouchEnd:K=>{console.log("Button touch ended"),K.preventDefault(),K.stopPropagation(),setTimeout(()=>{Z()},10)},children:"Enable Tilt Controls"}),Kt.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),D&&Kt.jsxs("div",{className:"touch-controls",children:[Kt.jsx("div",{className:"touch-controls-row",children:Kt.jsx("button",{ref:wt,className:"touch-button up-button","data-direction":"up",children:"▲"})}),Kt.jsxs("div",{className:"touch-controls-row",children:[Kt.jsx("button",{ref:Vt,className:"touch-button left-button","data-direction":"left",children:"◀"}),Kt.jsx("div",{className:"touch-button-spacer"}),Kt.jsx("button",{ref:kt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),Kt.jsx("div",{className:"touch-controls-row",children:Kt.jsx("button",{ref:Yt,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),t&&Kt.jsxs("div",{className:"victory-message",children:[Kt.jsx("h1",{children:"You Won!"}),r&&Kt.jsx("button",{onClick:C,children:"Play Again"})]}),m&&Kt.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),R&&M&&Kt.jsxs("div",{className:"gyroscope-indicator",children:[Kt.jsx("div",{className:"gyroscope-icon",children:Kt.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:Kt.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),Kt.jsx("span",{children:"Tilt to Move"})]}),Kt.jsxs("div",{style:zt,children:[Kt.jsx("div",{style:{marginBottom:"1rem"},children:Kt.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",children:Kt.jsx("path",{fill:"white",d:"M7.5,21.5C4.25,21.5 1.5,18.75 1.5,15.5V8.5C1.5,5.5 4,3 7,3H17C20,3 22.5,5.5 22.5,8.5V15.5C22.5,18.75 19.75,21.5 16.5,21.5H7.5M7,5C5.17,5 3.5,6.67 3.5,8.5V15.5C3.5,17.7 5.3,19.5 7.5,19.5H16.5C18.7,19.5 20.5,17.7 20.5,15.5V8.5C20.5,6.67 18.83,5 17,5H7M7,8H17V16H7V8M12,17H7V19H12V17Z"})})}),Kt.jsx("p",{style:{margin:"0 0 1rem 0"},children:ue}),Kt.jsx("div",{style:{marginTop:"1rem",fontSize:"1rem",opacity:.8},children:"The maze game works best in portrait orientation on mobile devices"})]})]})}Gx.createRoot(document.getElementById("root")).render(Kt.jsx(de.StrictMode,{children:Kt.jsx(p1,{})}));
