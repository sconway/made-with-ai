(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Uf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Ux(){if(ig)return wo;ig=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var ag;function Nx(){return ag||(ag=1,Uf.exports=Ux()),Uf.exports}var Zt=Nx(),Nf={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Ox(){if(rg)return Se;rg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=x&&C[x]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function v(C,J,mt){this.props=C,this.context=J,this.refs=R,this.updater=mt||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,J){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,J,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function z(C,J,mt){this.props=C,this.context=J,this.refs=R,this.updater=mt||M}var D=z.prototype=new _;D.constructor=z,T(D,v.prototype),D.isPureReactComponent=!0;var P=Array.isArray,W={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function I(C,J,mt,Lt,Y,pt){return mt=pt.ref,{$$typeof:o,type:C,key:J,ref:mt!==void 0?mt:null,props:pt}}function ft(C,J){return I(C.type,J,void 0,void 0,void 0,C.props)}function B(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function E(C){var J={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(mt){return J[mt]})}var O=/\/+/g;function ct(C,J){return typeof C=="object"&&C!==null&&C.key!=null?E(""+C.key):J.toString(36)}function St(){}function q(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(St,St):(C.status="pending",C.then(function(J){C.status==="pending"&&(C.status="fulfilled",C.value=J)},function(J){C.status==="pending"&&(C.status="rejected",C.reason=J)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function rt(C,J,mt,Lt,Y){var pt=typeof C;(pt==="undefined"||pt==="boolean")&&(C=null);var Rt=!1;if(C===null)Rt=!0;else switch(pt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(C.$$typeof){case o:case t:Rt=!0;break;case g:return Rt=C._init,rt(Rt(C._payload),J,mt,Lt,Y)}}if(Rt)return Y=Y(C),Rt=Lt===""?"."+ct(C,0):Lt,P(Y)?(mt="",Rt!=null&&(mt=Rt.replace(O,"$&/")+"/"),rt(Y,J,mt,"",function(zt){return zt})):Y!=null&&(B(Y)&&(Y=ft(Y,mt+(Y.key==null||C&&C.key===Y.key?"":(""+Y.key).replace(O,"$&/")+"/")+Rt)),J.push(Y)),1;Rt=0;var Yt=Lt===""?".":Lt+":";if(P(C))for(var Pt=0;Pt<C.length;Pt++)Lt=C[Pt],pt=Yt+ct(Lt,Pt),Rt+=rt(Lt,J,mt,pt,Y);else if(Pt=y(C),typeof Pt=="function")for(C=Pt.call(C),Pt=0;!(Lt=C.next()).done;)Lt=Lt.value,pt=Yt+ct(Lt,Pt++),Rt+=rt(Lt,J,mt,pt,Y);else if(pt==="object"){if(typeof C.then=="function")return rt(q(C),J,mt,Lt,Y);throw J=String(C),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function G(C,J,mt){if(C==null)return C;var Lt=[],Y=0;return rt(C,Lt,"","",function(pt){return J.call(mt,pt,Y++)}),Lt}function ot(C){if(C._status===-1){var J=C._result;J=J(),J.then(function(mt){(C._status===0||C._status===-1)&&(C._status=1,C._result=mt)},function(mt){(C._status===0||C._status===-1)&&(C._status=2,C._result=mt)}),C._status===-1&&(C._status=0,C._result=J)}if(C._status===1)return C._result.default;throw C._result}var it=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ht(){}return Se.Children={map:G,forEach:function(C,J,mt){G(C,function(){J.apply(this,arguments)},mt)},count:function(C){var J=0;return G(C,function(){J++}),J},toArray:function(C){return G(C,function(J){return J})||[]},only:function(C){if(!B(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Se.Component=v,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=z,Se.StrictMode=r,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Se.act=function(){throw Error("act(...) is not supported in production builds of React.")},Se.cache=function(C){return function(){return C.apply(null,arguments)}},Se.cloneElement=function(C,J,mt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Lt=T({},C.props),Y=C.key,pt=void 0;if(J!=null)for(Rt in J.ref!==void 0&&(pt=void 0),J.key!==void 0&&(Y=""+J.key),J)!k.call(J,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&J.ref===void 0||(Lt[Rt]=J[Rt]);var Rt=arguments.length-2;if(Rt===1)Lt.children=mt;else if(1<Rt){for(var Yt=Array(Rt),Pt=0;Pt<Rt;Pt++)Yt[Pt]=arguments[Pt+2];Lt.children=Yt}return I(C.type,Y,void 0,void 0,pt,Lt)},Se.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},Se.createElement=function(C,J,mt){var Lt,Y={},pt=null;if(J!=null)for(Lt in J.key!==void 0&&(pt=""+J.key),J)k.call(J,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(Y[Lt]=J[Lt]);var Rt=arguments.length-2;if(Rt===1)Y.children=mt;else if(1<Rt){for(var Yt=Array(Rt),Pt=0;Pt<Rt;Pt++)Yt[Pt]=arguments[Pt+2];Y.children=Yt}if(C&&C.defaultProps)for(Lt in Rt=C.defaultProps,Rt)Y[Lt]===void 0&&(Y[Lt]=Rt[Lt]);return I(C,pt,void 0,void 0,null,Y)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(C){return{$$typeof:d,render:C}},Se.isValidElement=B,Se.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:ot}},Se.memo=function(C,J){return{$$typeof:m,type:C,compare:J===void 0?null:J}},Se.startTransition=function(C){var J=W.T,mt={};W.T=mt;try{var Lt=C(),Y=W.S;Y!==null&&Y(mt,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(ht,it)}catch(pt){it(pt)}finally{W.T=J}},Se.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Se.use=function(C){return W.H.use(C)},Se.useActionState=function(C,J,mt){return W.H.useActionState(C,J,mt)},Se.useCallback=function(C,J){return W.H.useCallback(C,J)},Se.useContext=function(C){return W.H.useContext(C)},Se.useDebugValue=function(){},Se.useDeferredValue=function(C,J){return W.H.useDeferredValue(C,J)},Se.useEffect=function(C,J){return W.H.useEffect(C,J)},Se.useId=function(){return W.H.useId()},Se.useImperativeHandle=function(C,J,mt){return W.H.useImperativeHandle(C,J,mt)},Se.useInsertionEffect=function(C,J){return W.H.useInsertionEffect(C,J)},Se.useLayoutEffect=function(C,J){return W.H.useLayoutEffect(C,J)},Se.useMemo=function(C,J){return W.H.useMemo(C,J)},Se.useOptimistic=function(C,J){return W.H.useOptimistic(C,J)},Se.useReducer=function(C,J,mt){return W.H.useReducer(C,J,mt)},Se.useRef=function(C){return W.H.useRef(C)},Se.useState=function(C){return W.H.useState(C)},Se.useSyncExternalStore=function(C,J,mt){return W.H.useSyncExternalStore(C,J,mt)},Se.useTransition=function(){return W.H.useTransition()},Se.version="19.0.0",Se}var sg;function wd(){return sg||(sg=1,Nf.exports=Ox()),Nf.exports}var ve=wd(),Of={exports:{}},Ro={},Pf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Px(){return og||(og=1,function(o){function t(G,ot){var it=G.length;G.push(ot);t:for(;0<it;){var ht=it-1>>>1,C=G[ht];if(0<l(C,ot))G[ht]=ot,G[it]=C,it=ht;else break t}}function i(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ot=G[0],it=G.pop();if(it!==ot){G[0]=it;t:for(var ht=0,C=G.length,J=C>>>1;ht<J;){var mt=2*(ht+1)-1,Lt=G[mt],Y=mt+1,pt=G[Y];if(0>l(Lt,it))Y<C&&0>l(pt,Lt)?(G[ht]=pt,G[Y]=it,ht=Y):(G[ht]=Lt,G[mt]=it,ht=mt);else if(Y<C&&0>l(pt,it))G[ht]=pt,G[Y]=it,ht=Y;else break t}}return ot}function l(G,ot){var it=G.sortIndex-ot.sortIndex;return it!==0?it:G.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,y=3,M=!1,T=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(G){for(var ot=i(m);ot!==null;){if(ot.callback===null)r(m);else if(ot.startTime<=G)r(m),ot.sortIndex=ot.expirationTime,t(p,ot);else break;ot=i(m)}}function P(G){if(R=!1,D(G),!T)if(i(p)!==null)T=!0,q();else{var ot=i(m);ot!==null&&rt(P,ot.startTime-G)}}var W=!1,k=-1,I=5,ft=-1;function B(){return!(o.unstable_now()-ft<I)}function E(){if(W){var G=o.unstable_now();ft=G;var ot=!0;try{t:{T=!1,R&&(R=!1,_(k),k=-1),M=!0;var it=y;try{e:{for(D(G),x=i(p);x!==null&&!(x.expirationTime>G&&B());){var ht=x.callback;if(typeof ht=="function"){x.callback=null,y=x.priorityLevel;var C=ht(x.expirationTime<=G);if(G=o.unstable_now(),typeof C=="function"){x.callback=C,D(G),ot=!0;break e}x===i(p)&&r(p),D(G)}else r(p);x=i(p)}if(x!==null)ot=!0;else{var J=i(m);J!==null&&rt(P,J.startTime-G),ot=!1}}break t}finally{x=null,y=it,M=!1}ot=void 0}}finally{ot?O():W=!1}}}var O;if(typeof z=="function")O=function(){z(E)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,St=ct.port2;ct.port1.onmessage=E,O=function(){St.postMessage(null)}}else O=function(){v(E,0)};function q(){W||(W=!0,O())}function rt(G,ot){k=v(function(){G(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){T||M||(T=!0,q())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(G){switch(y){case 1:case 2:case 3:var ot=3;break;default:ot=y}var it=y;y=ot;try{return G()}finally{y=it}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,ot){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var it=y;y=G;try{return ot()}finally{y=it}},o.unstable_scheduleCallback=function(G,ot,it){var ht=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ht+it:ht):it=ht,G){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=it+C,G={id:g++,callback:ot,priorityLevel:G,startTime:it,expirationTime:C,sortIndex:-1},it>ht?(G.sortIndex=it,t(m,G),i(p)===null&&G===i(m)&&(R?(_(k),k=-1):R=!0,rt(P,it-ht))):(G.sortIndex=C,t(p,G),T||M||(T=!0,q())),G},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(G){var ot=y;return function(){var it=y;y=ot;try{return G.apply(this,arguments)}finally{y=it}}}}(zf)),zf}var lg;function zx(){return lg||(lg=1,Pf.exports=Px()),Pf.exports}var Bf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Bx(){if(cg)return Dn;cg=1;var o=wd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},Dn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Dn.requestFormReset=function(p){r.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.0.0",Dn}var ug;function Fx(){if(ug)return Bf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bf.exports=Bx(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Ix(){if(fg)return Ro;fg=1;var o=zx(),t=wd(),i=Fx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),M=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),P=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case T:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,O,ct;function St(e){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+O+e+ct}var q=!1;function rt(e,n){if(!e||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(gt){var lt=gt}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(gt){lt=gt}e.call(Dt.prototype)}}else{try{throw Error()}catch(gt){lt=gt}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(gt){if(gt&&lt&&typeof gt.stack=="string")return[gt.stack,lt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],w=f[1];if(S&&w){var F=S.split(`
`),$=w.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===$.length)for(s=F.length-1,c=$.length-1;1<=s&&0<=c&&F[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==$[c]){var xt=`
`+F[s].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=s&&0<=c);break}}}finally{q=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?St(a):""}function G(e){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return e=rt(e.type,!1),e;case 11:return e=rt(e.type.render,!1),e;case 1:return e=rt(e.type,!0),e;default:return""}}function ot(e){try{var n="";do n+=G(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function it(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function ht(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C(e){if(it(e)!==e)throw Error(r(188))}function J(e){var n=e.alternate;if(!n){if(n=it(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),e;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,w=c.child;w;){if(w===a){S=!0,a=c,s=f;break}if(w===s){S=!0,s=c,a=f;break}w=w.sibling}if(!S){for(w=f.child;w;){if(w===a){S=!0,a=f,s=c;break}if(w===s){S=!0,s=f,a=c;break}w=w.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function mt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=mt(e),n!==null)return n;e=e.sibling}return null}var Lt=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},Rt=[],Yt=-1;function Pt(e){return{current:e}}function zt(e){0>Yt||(e.current=Rt[Yt],Rt[Yt]=null,Yt--)}function $t(e,n){Yt++,Rt[Yt]=e.current,e.current=n}var ie=Pt(null),nt=Pt(null),ze=Pt(null),ae=Pt(null);function ue(e,n){switch($t(ze,n),$t(nt,e),$t(ie,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Um(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Um(e),n=Nm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}zt(ie),$t(ie,n)}function Kt(){zt(ie),zt(nt),zt(ze)}function Pe(e){e.memoizedState!==null&&$t(ae,e);var n=ie.current,a=Nm(n,e.type);n!==a&&($t(nt,e),$t(ie,a))}function he(e){nt.current===e&&(zt(ie),zt(nt)),ae.current===e&&(zt(ae),Mo._currentValue=pt)}var U=Object.prototype.hasOwnProperty,A=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,Ot=o.unstable_shouldYield,j=o.unstable_requestPaint,tt=o.unstable_now,ut=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,At=o.unstable_NormalPriority,Ut=o.unstable_LowPriority,vt=o.unstable_IdlePriority,fe=o.log,Gt=o.unstable_setDisableYieldValue,Ht=null,Bt=null;function bt(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ht,e,void 0,(e.current.flags&128)===128)}catch{}}function te(e){if(typeof fe=="function"&&Gt(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Ht,e)}catch{}}var L=Math.clz32?Math.clz32:ee,Et=Math.log,Nt=Math.LN2;function ee(e){return e>>>=0,e===0?32:31-(Et(e)/Nt|0)|0}var N=128,Ct=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=Mt(a):(f&=w,f!==0?s=Mt(f):e||(S=w&~S,S!==0&&(s=Mt(S))))):(w=a&~c,w!==0?s=Mt(w):f!==0?s=Mt(f):e||(S=a&~S,S!==0&&(s=Mt(S)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function Qt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Me(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jt(){var e=N;return N<<=1,!(N&4194176)&&(N=128),e}function de(){var e=Ct;return Ct<<=1,!(Ct&62914560)&&(Ct=4194304),e}function pe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ne(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xe(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var xt=31-L(a),Dt=1<<xt;w[xt]=0,F[xt]=-1;var lt=$[xt];if(lt!==null)for($[xt]=null,xt=0;xt<lt.length;xt++){var gt=lt[xt];gt!==null&&(gt.lane&=-536870913)}a&=~Dt}s!==0&&Xe(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Xe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-L(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function Hn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-L(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function mi(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function je(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Qm(e.type))}function Bi(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Mn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Mn,an="__reactProps$"+Mn,Xt="__reactContainer$"+Mn,Vt="__reactEvents$"+Mn,kt="__reactListeners$"+Mn,b="__reactHandles$"+Mn,H="__reactResources$"+Mn,V="__reactMarker$"+Mn;function K(e){delete e[Ze],delete e[an],delete e[Vt],delete e[kt],delete e[b]}function X(e){var n=e[Ze];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xt]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zm(e);e!==null;){if(a=e[Ze])return a;e=zm(e)}return n}e=a,a=e.parentNode}return null}function yt(e){if(e=e[Ze]||e[Xt]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function wt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Wt(e){var n=e[H];return n||(n=e[H]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ft(e){e[V]=!0}var re=new Set,se={};function le(e,n){Le(e,n),Le(e+"Capture",n)}function Le(e,n){for(se[e]=n,e=0;e<n.length;e++)re.add(n[e])}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},Ue={};function ye(e){return U.call(Ue,e)?!0:U.call(Gn,e)?!1:Ke.test(e)?Ue[e]=!0:(Gn[e]=!0,!1)}function gi(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function _n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Us(e){var n=rn(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){e._valueTracker||(e._valueTracker=Us(e))}function wi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=rn(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vn=/[\n"\\]/g;function Rn(e){return e.replace(Vn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ns(e,n,a,s,c,f,S,w){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_n(n)):e.value!==""+_n(n)&&(e.value=""+_n(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Dc(e,S,_n(n)):a!=null?Dc(e,S,_n(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+_n(w):e.removeAttribute("name")}function Os(e,n,a,s,c,f,S,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_n(a):"",n=n!=null?""+_n(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=w?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Dc(e,n,a){n==="number"&&ca(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Er(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_n(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Fd(e,n,a){if(n!=null&&(n=""+_n(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_n(a):""}function Id(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_n(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function br(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var C_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||C_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Hd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function Lc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return L_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uc=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tr=null,Ar=null;function Vd(e){var n=yt(e);if(n&&(e=n.stateNode)){var a=e[an]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ns(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[an]||null;if(!c)throw Error(r(90));Ns(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&wi(s)}break t;case"textarea":Fd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Er(e,!!a.multiple,n,!1)}}}var Oc=!1;function kd(e,n,a){if(Oc)return e(n,a);Oc=!0;try{var s=e(n);return s}finally{if(Oc=!1,(Tr!==null||Ar!==null)&&(Tl(),Tr&&(n=Tr,e=Ar,Ar=Tr=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Ps(e,n){var a=e.stateNode;if(a===null)return null;var s=a[an]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pc=!1;if(Be)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Pc=!1}var ua=null,zc=null,ko=null;function Wd(){if(ko)return ko;var e,n=zc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return ko=c.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Xd(){return!1}function kn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Xd,this.isPropagationStopped=Xd,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=kn(ka),Bs=E({},ka,{view:0,detail:0}),U_=kn(Bs),Bc,Fc,Fs,Yo=E({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(Bc=e.screenX-Fs.screenX,Fc=e.screenY-Fs.screenY):Fc=Bc=0,Fs=e),Bc)},movementY:function(e){return"movementY"in e?e.movementY:Fc}}),qd=kn(Yo),N_=E({},Yo,{dataTransfer:0}),O_=kn(N_),P_=E({},Bs,{relatedTarget:0}),Ic=kn(P_),z_=E({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),B_=kn(z_),F_=E({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I_=kn(F_),H_=E({},ka,{data:0}),Yd=kn(H_),G_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=k_[e])?!!n[e]:!1}function Hc(){return W_}var X_=E({},Bs,{key:function(e){if(e.key){var n=G_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q_=kn(X_),Y_=E({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=kn(Y_),j_=E({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),Z_=kn(j_),K_=E({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=kn(K_),J_=E({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=kn(J_),tv=E({},ka,{newState:0,oldState:0}),ev=kn(tv),nv=[9,13,27,32],Gc=Be&&"CompositionEvent"in window,Is=null;Be&&"documentMode"in document&&(Is=document.documentMode);var iv=Be&&"TextEvent"in window&&!Is,Zd=Be&&(!Gc||Is&&8<Is&&11>=Is),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function av(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function rv(e,n){if(wr)return e==="compositionend"||!Gc&&Jd(e,n)?(e=Wd(),ko=zc=ua=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sv[e.type]:n==="textarea"}function eh(e,n,a,s){Tr?Ar?Ar.push(s):Ar=[s]:Tr=s,n=Dl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function ov(e){wm(e,0)}function jo(e){var n=wt(e);if(wi(n))return e}function nh(e,n){if(e==="change")return n}var ih=!1;if(Be){var Vc;if(Be){var kc="oninput"in document;if(!kc){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),kc=typeof ah.oninput=="function"}Vc=kc}else Vc=!1;ih=Vc&&(!document.documentMode||9<document.documentMode)}function rh(){Hs&&(Hs.detachEvent("onpropertychange",sh),Gs=Hs=null)}function sh(e){if(e.propertyName==="value"&&jo(Gs)){var n=[];eh(n,Gs,e,Nc(e)),kd(ov,n)}}function lv(e,n,a){e==="focusin"?(rh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",sh)):e==="focusout"&&rh()}function cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Gs)}function uv(e,n){if(e==="click")return jo(n)}function fv(e,n){if(e==="input"||e==="change")return jo(n)}function dv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:dv;function Vs(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!U.call(n,c)||!jn(e[c],n[c]))return!1}return!0}function oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lh(e,n){var a=oh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=oh(a)}}function ch(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ch(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function uh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ca(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ca(e.document)}return n}function Wc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hv(e,n){var a=uh(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&ch(n.ownerDocument.documentElement,n)){if(s!==null&&Wc(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=lh(n,f);var S=lh(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var pv=Be&&"documentMode"in document&&11>=document.documentMode,Rr=null,Xc=null,ks=null,qc=!1;function fh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||Rr==null||Rr!==ca(s)||(s=Rr,"selectionStart"in s&&Wc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Dl(Xc,"onSelect"),0<s.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Rr)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Cr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Yc={},dh={};Be&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Xa(e){if(Yc[e])return Yc[e];if(!Cr[e])return e;var n=Cr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in dh)return Yc[e]=n[a];return e}var hh=Xa("animationend"),ph=Xa("animationiteration"),mh=Xa("animationstart"),mv=Xa("transitionrun"),gv=Xa("transitionstart"),_v=Xa("transitioncancel"),gh=Xa("transitionend"),_h=new Map,vh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _i(e,n){_h.set(e,n),le(n,[e])}var ii=[],Dr=0,jc=0;function Zo(){for(var e=Dr,n=jc=Dr=0;n<e;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&xh(a,c,f)}}function Ko(e,n,a,s){ii[Dr++]=e,ii[Dr++]=n,ii[Dr++]=a,ii[Dr++]=s,jc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Zc(e,n,a,s){return Ko(e,n,a,s),Qo(e)}function fa(e,n){return Ko(e,null,null,n),Qo(e)}function xh(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-L(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Qo(e){if(50<mo)throw mo=0,ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Lr={},yh=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=yh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ot(n)},yh.set(e,n),n)}return{value:e,source:n,stack:ot(n)}}var Ur=[],Nr=0,Jo=null,$o=0,ri=[],si=0,qa=null,Fi=1,Ii="";function Ya(e,n){Ur[Nr++]=$o,Ur[Nr++]=Jo,Jo=e,$o=n}function Sh(e,n,a){ri[si++]=Fi,ri[si++]=Ii,ri[si++]=qa,qa=e;var s=Fi;e=Ii;var c=32-L(s)-1;s&=~(1<<c),a+=1;var f=32-L(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Fi=1<<32-L(n)+c|a<<c|s,Ii=f+e}else Fi=1<<f|a<<c|s,Ii=e}function Kc(e){e.return!==null&&(Ya(e,1),Sh(e,1,0))}function Qc(e){for(;e===Jo;)Jo=Ur[--Nr],Ur[Nr]=null,$o=Ur[--Nr],Ur[Nr]=null;for(;e===qa;)qa=ri[--si],ri[si]=null,Ii=ri[--si],ri[si]=null,Fi=ri[--si],ri[si]=null}var On=null,En=null,Ne=!1,vi=null,Ri=!1,Jc=Error(r(519));function ja(e){var n=Error(r(418,""));throw qs(ai(n,e)),Jc}function Mh(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Ze]=e,n[an]=s,a){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)Re(_o[a],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),sn(n);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),Id(n,s.value,s.defaultValue,s.children),sn(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Lm(n.textContent,a)?(s.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),s.onScroll!=null&&Re("scroll",n),s.onScrollEnd!=null&&Re("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||ja(e)}function Eh(e){for(On=e.return;On;)switch(On.tag){case 3:case 27:Ri=!0;return;case 5:case 13:Ri=!1;return;default:On=On.return}}function Ws(e){if(e!==On)return!1;if(!Ne)return Eh(e),Ne=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&En&&ja(e),Eh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){En=yi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}En=null}}else En=On?yi(e.stateNode.nextSibling):null;return!0}function Xs(){En=On=null,Ne=!1}function qs(e){vi===null?vi=[e]:vi.push(e)}var Ys=Error(r(460)),bh=Error(r(474)),$c={then:function(){}};function Th(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tl(){}function Ah(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(tl,tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Ys?Error(r(483)):e;default:if(typeof n.status=="string")n.then(tl,tl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Ys?Error(r(483)):e}throw js=n,Ys}}var js=null;function wh(){if(js===null)throw Error(r(459));var e=js;return js=null,e}var Or=null,Zs=0;function el(e){var n=Zs;return Zs+=1,Or===null&&(Or=[]),Ah(Or,e,n)}function Ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nl(e,n){throw n.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rh(e){var n=e._init;return n(e._payload)}function Ch(e){function n(et,Q){if(e){var at=et.deletions;at===null?(et.deletions=[Q],et.flags|=16):at.push(Q)}}function a(et,Q){if(!e)return null;for(;Q!==null;)n(et,Q),Q=Q.sibling;return null}function s(et){for(var Q=new Map;et!==null;)et.key!==null?Q.set(et.key,et):Q.set(et.index,et),et=et.sibling;return Q}function c(et,Q){return et=Ea(et,Q),et.index=0,et.sibling=null,et}function f(et,Q,at){return et.index=at,e?(at=et.alternate,at!==null?(at=at.index,at<Q?(et.flags|=33554434,Q):at):(et.flags|=33554434,Q)):(et.flags|=1048576,Q)}function S(et){return e&&et.alternate===null&&(et.flags|=33554434),et}function w(et,Q,at,Tt){return Q===null||Q.tag!==6?(Q=Yu(at,et.mode,Tt),Q.return=et,Q):(Q=c(Q,at),Q.return=et,Q)}function F(et,Q,at,Tt){var Jt=at.type;return Jt===p?xt(et,Q,at.props.children,Tt,at.key):Q!==null&&(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===z&&Rh(Jt)===Q.type)?(Q=c(Q,at.props),Ks(Q,at),Q.return=et,Q):(Q=yl(at.type,at.key,at.props,null,et.mode,Tt),Ks(Q,at),Q.return=et,Q)}function $(et,Q,at,Tt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==at.containerInfo||Q.stateNode.implementation!==at.implementation?(Q=ju(at,et.mode,Tt),Q.return=et,Q):(Q=c(Q,at.children||[]),Q.return=et,Q)}function xt(et,Q,at,Tt,Jt){return Q===null||Q.tag!==7?(Q=ar(at,et.mode,Tt,Jt),Q.return=et,Q):(Q=c(Q,at),Q.return=et,Q)}function Dt(et,Q,at){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Yu(""+Q,et.mode,at),Q.return=et,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case h:return at=yl(Q.type,Q.key,Q.props,null,et.mode,at),Ks(at,Q),at.return=et,at;case d:return Q=ju(Q,et.mode,at),Q.return=et,Q;case z:var Tt=Q._init;return Q=Tt(Q._payload),Dt(et,Q,at)}if(Lt(Q)||k(Q))return Q=ar(Q,et.mode,at,null),Q.return=et,Q;if(typeof Q.then=="function")return Dt(et,el(Q),at);if(Q.$$typeof===M)return Dt(et,_l(et,Q),at);nl(et,Q)}return null}function lt(et,Q,at,Tt){var Jt=Q!==null?Q.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Jt!==null?null:w(et,Q,""+at,Tt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case h:return at.key===Jt?F(et,Q,at,Tt):null;case d:return at.key===Jt?$(et,Q,at,Tt):null;case z:return Jt=at._init,at=Jt(at._payload),lt(et,Q,at,Tt)}if(Lt(at)||k(at))return Jt!==null?null:xt(et,Q,at,Tt,null);if(typeof at.then=="function")return lt(et,Q,el(at),Tt);if(at.$$typeof===M)return lt(et,Q,_l(et,at),Tt);nl(et,at)}return null}function gt(et,Q,at,Tt,Jt){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return et=et.get(at)||null,w(Q,et,""+Tt,Jt);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case h:return et=et.get(Tt.key===null?at:Tt.key)||null,F(Q,et,Tt,Jt);case d:return et=et.get(Tt.key===null?at:Tt.key)||null,$(Q,et,Tt,Jt);case z:var Te=Tt._init;return Tt=Te(Tt._payload),gt(et,Q,at,Tt,Jt)}if(Lt(Tt)||k(Tt))return et=et.get(at)||null,xt(Q,et,Tt,Jt,null);if(typeof Tt.then=="function")return gt(et,Q,at,el(Tt),Jt);if(Tt.$$typeof===M)return gt(et,Q,at,_l(Q,Tt),Jt);nl(Q,Tt)}return null}function oe(et,Q,at,Tt){for(var Jt=null,Te=null,ce=Q,me=Q=0,yn=null;ce!==null&&me<at.length;me++){ce.index>me?(yn=ce,ce=null):yn=ce.sibling;var Oe=lt(et,ce,at[me],Tt);if(Oe===null){ce===null&&(ce=yn);break}e&&ce&&Oe.alternate===null&&n(et,ce),Q=f(Oe,Q,me),Te===null?Jt=Oe:Te.sibling=Oe,Te=Oe,ce=yn}if(me===at.length)return a(et,ce),Ne&&Ya(et,me),Jt;if(ce===null){for(;me<at.length;me++)ce=Dt(et,at[me],Tt),ce!==null&&(Q=f(ce,Q,me),Te===null?Jt=ce:Te.sibling=ce,Te=ce);return Ne&&Ya(et,me),Jt}for(ce=s(ce);me<at.length;me++)yn=gt(ce,et,me,at[me],Tt),yn!==null&&(e&&yn.alternate!==null&&ce.delete(yn.key===null?me:yn.key),Q=f(yn,Q,me),Te===null?Jt=yn:Te.sibling=yn,Te=yn);return e&&ce.forEach(function(Da){return n(et,Da)}),Ne&&Ya(et,me),Jt}function _e(et,Q,at,Tt){if(at==null)throw Error(r(151));for(var Jt=null,Te=null,ce=Q,me=Q=0,yn=null,Oe=at.next();ce!==null&&!Oe.done;me++,Oe=at.next()){ce.index>me?(yn=ce,ce=null):yn=ce.sibling;var Da=lt(et,ce,Oe.value,Tt);if(Da===null){ce===null&&(ce=yn);break}e&&ce&&Da.alternate===null&&n(et,ce),Q=f(Da,Q,me),Te===null?Jt=Da:Te.sibling=Da,Te=Da,ce=yn}if(Oe.done)return a(et,ce),Ne&&Ya(et,me),Jt;if(ce===null){for(;!Oe.done;me++,Oe=at.next())Oe=Dt(et,Oe.value,Tt),Oe!==null&&(Q=f(Oe,Q,me),Te===null?Jt=Oe:Te.sibling=Oe,Te=Oe);return Ne&&Ya(et,me),Jt}for(ce=s(ce);!Oe.done;me++,Oe=at.next())Oe=gt(ce,et,me,Oe.value,Tt),Oe!==null&&(e&&Oe.alternate!==null&&ce.delete(Oe.key===null?me:Oe.key),Q=f(Oe,Q,me),Te===null?Jt=Oe:Te.sibling=Oe,Te=Oe);return e&&ce.forEach(function(Lx){return n(et,Lx)}),Ne&&Ya(et,me),Jt}function nn(et,Q,at,Tt){if(typeof at=="object"&&at!==null&&at.type===p&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case h:t:{for(var Jt=at.key;Q!==null;){if(Q.key===Jt){if(Jt=at.type,Jt===p){if(Q.tag===7){a(et,Q.sibling),Tt=c(Q,at.props.children),Tt.return=et,et=Tt;break t}}else if(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===z&&Rh(Jt)===Q.type){a(et,Q.sibling),Tt=c(Q,at.props),Ks(Tt,at),Tt.return=et,et=Tt;break t}a(et,Q);break}else n(et,Q);Q=Q.sibling}at.type===p?(Tt=ar(at.props.children,et.mode,Tt,at.key),Tt.return=et,et=Tt):(Tt=yl(at.type,at.key,at.props,null,et.mode,Tt),Ks(Tt,at),Tt.return=et,et=Tt)}return S(et);case d:t:{for(Jt=at.key;Q!==null;){if(Q.key===Jt)if(Q.tag===4&&Q.stateNode.containerInfo===at.containerInfo&&Q.stateNode.implementation===at.implementation){a(et,Q.sibling),Tt=c(Q,at.children||[]),Tt.return=et,et=Tt;break t}else{a(et,Q);break}else n(et,Q);Q=Q.sibling}Tt=ju(at,et.mode,Tt),Tt.return=et,et=Tt}return S(et);case z:return Jt=at._init,at=Jt(at._payload),nn(et,Q,at,Tt)}if(Lt(at))return oe(et,Q,at,Tt);if(k(at)){if(Jt=k(at),typeof Jt!="function")throw Error(r(150));return at=Jt.call(at),_e(et,Q,at,Tt)}if(typeof at.then=="function")return nn(et,Q,el(at),Tt);if(at.$$typeof===M)return nn(et,Q,_l(et,at),Tt);nl(et,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Q!==null&&Q.tag===6?(a(et,Q.sibling),Tt=c(Q,at),Tt.return=et,et=Tt):(a(et,Q),Tt=Yu(at,et.mode,Tt),Tt.return=et,et=Tt),S(et)):a(et,Q)}return function(et,Q,at,Tt){try{Zs=0;var Jt=nn(et,Q,at,Tt);return Or=null,Jt}catch(ce){if(ce===Ys)throw ce;var Te=ui(29,ce,null,et.mode);return Te.lanes=Tt,Te.return=et,Te}finally{}}}var Za=Ch(!0),Dh=Ch(!1),Pr=Pt(null),il=Pt(0);function Lh(e,n){e=Ki,$t(il,e),$t(Pr,n),Ki=e|n.baseLanes}function tu(){$t(il,Ki),$t(Pr,Pr.current)}function eu(){Ki=il.current,zt(Pr),zt(il)}var oi=Pt(null),Ci=null;function da(e){var n=e.alternate;$t(hn,hn.current&1),$t(oi,e),Ci===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(Ci=e)}function Uh(e){if(e.tag===22){if($t(hn,hn.current),$t(oi,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else ha()}function ha(){$t(hn,hn.current),$t(oi,oi.current)}function Hi(e){zt(oi),Ci===e&&(Ci=null),zt(hn)}var hn=Pt(0);function al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},xv=o.unstable_scheduleCallback,yv=o.unstable_NormalPriority,pn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nu(){return{controller:new vv,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&xv(yv,function(){e.controller.abort()})}var Js=null,iu=0,zr=0,Br=null;function Sv(e,n){if(Js===null){var a=Js=[];iu=0,zr=uf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return iu++,n.then(Nh,Nh),n}function Nh(){if(--iu===0&&Js!==null){Br!==null&&(Br.status="fulfilled");var e=Js;Js=null,zr=0,Br=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Oh=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sv(e,n),Oh!==null&&Oh(e,n)};var Ka=Pt(null);function au(){var e=Ka.current;return e!==null?e:ke.pooledCache}function rl(e,n){n===null?$t(Ka,Ka.current):$t(Ka,n.pool)}function Ph(){var e=au();return e===null?null:{parent:pn._currentValue,pool:e}}var pa=0,be=null,Ie=null,cn=null,sl=!1,Fr=!1,Qa=!1,ol=0,$s=0,Ir=null,Ev=0;function on(){throw Error(r(321))}function ru(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function su(e,n,a,s,c,f){return pa=f,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Ja:ma,Qa=!1,f=a(s,c),Qa=!1,Fr&&(f=Bh(n,a,s,c)),zh(e),f}function zh(e){B.H=Di;var n=Ie!==null&&Ie.next!==null;if(pa=0,cn=Ie=be=null,sl=!1,$s=0,Ir=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&gl(e)&&(vn=!0))}function Bh(e,n,a,s){be=e;var c=0;do{if(Fr&&(Ir=null),$s=0,Fr=!1,25<=c)throw Error(r(301));if(c+=1,cn=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=$a,f=n(a,s)}while(Fr);return f}function bv(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(be.flags|=1024),n}function ou(){var e=ol!==0;return ol=0,e}function lu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cu(e){if(sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}sl=!1}pa=0,cn=Ie=be=null,Fr=!1,$s=ol=0,Ir=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?be.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Ie===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=cn===null?be.memoizedState:cn.next;if(n!==null)cn=n,Ie=e;else{if(e===null)throw be.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?be.memoizedState=cn=e:cn=cn.next=e}return cn}var ll;ll=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(e){var n=$s;return $s+=1,Ir===null&&(Ir=[]),e=Ah(Ir,e,n),n=be,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Ja:ma),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===M)return Cn(e)}throw Error(r(438,String(e)))}function uu(e){var n=null,a=be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=be.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=P;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=un();return fu(n,Ie,e)}function fu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var w=S=null,F=null,$=n,xt=!1;do{var Dt=$.lane&-536870913;if(Dt!==$.lane?(Ce&Dt)===Dt:(pa&Dt)===Dt){var lt=$.revertLane;if(lt===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),Dt===zr&&(xt=!0);else if((pa&lt)===lt){$=$.next,lt===zr&&(xt=!0);continue}else Dt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(w=F=Dt,S=f):F=F.next=Dt,be.lanes|=lt,ba|=lt;Dt=$.action,Qa&&a(f,Dt),f=$.hasEagerState?$.eagerState:a(f,Dt)}else lt={lane:Dt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(w=F=lt,S=f):F=F.next=lt,be.lanes|=Dt,ba|=Dt;$=$.next}while($!==null&&$!==n);if(F===null?S=f:F.next=w,!jn(f,e.memoizedState)&&(vn=!0,xt&&(a=Br,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function du(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);jn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Fh(e,n,a){var s=be,c=un(),f=Ne;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!jn((Ie||c).memoizedState,a);if(S&&(c.memoizedState=a,vn=!0),c=c.queue,mu(Gh.bind(null,s,c,e),[e]),c.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,Hr(9,Hh.bind(null,s,c,a,n),{destroy:void 0},null),ke===null)throw Error(r(349));f||pa&60||Ih(s,n,a)}return a}function Ih(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=be.updateQueue,n===null?(n=ll(),be.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Hh(e,n,a,s){n.value=a,n.getSnapshot=s,Vh(n)&&kh(e)}function Gh(e,n,a){return a(function(){Vh(n)&&kh(e)})}function Vh(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function kh(e){var n=fa(e,2);n!==null&&Pn(n,e,2)}function hu(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Qa){te(!0);try{a()}finally{te(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function Wh(e,n,a,s){return e.baseState=a,fu(e,Ie,typeof s=="function"?s:Gi)}function Tv(e,n,a,s,c){if(hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Xh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xh(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var w=a(c,s),F=B.S;F!==null&&F(S,w),qh(e,n,w)}catch($){pu(e,n,$)}finally{B.T=f}}else try{f=a(c,s),qh(e,n,f)}catch($){pu(e,n,$)}}function qh(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Yh(e,n,s)},function(s){return pu(e,n,s)}):Yh(e,n,a)}function Yh(e,n,a){n.status="fulfilled",n.value=a,jh(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xh(e,a)))}function pu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jh(n),n=n.next;while(n!==s)}e.action=null}function jh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zh(e,n){return n}function Kh(e,n){if(Ne){var a=ke.formState;if(a!==null){t:{var s=be;if(Ne){if(En){e:{for(var c=En,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=yi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){En=yi(c.nextSibling),s=c.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zh,lastRenderedState:n},a.queue=s,a=pp.bind(null,be,s),s.dispatch=a,s=hu(!1),f=yu.bind(null,be,!1,s.queue),s=Wn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Tv.bind(null,be,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Qh(e){var n=un();return Jh(n,Ie,e)}function Jh(e,n,a){n=fu(e,n,Zh)[0],e=ul(Gi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var s=un(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(be.flags|=2048,Hr(9,Av.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function Av(e,n){e.action=n}function $h(e){var n=un(),a=Ie;if(a!==null)return Jh(n,a,e);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Hr(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=be.updateQueue,n===null&&(n=ll(),be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function tp(){return un().memoizedState}function fl(e,n,a,s){var c=Wn();be.flags|=e,c.memoizedState=Hr(1|n,a,{destroy:void 0},s===void 0?null:s)}function dl(e,n,a,s){var c=un();s=s===void 0?null:s;var f=c.memoizedState.inst;Ie!==null&&s!==null&&ru(s,Ie.memoizedState.deps)?c.memoizedState=Hr(n,a,f,s):(be.flags|=e,c.memoizedState=Hr(1|n,a,f,s))}function ep(e,n){fl(8390656,8,e,n)}function mu(e,n){dl(2048,8,e,n)}function np(e,n){return dl(4,2,e,n)}function ip(e,n){return dl(4,4,e,n)}function ap(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rp(e,n,a){a=a!=null?a.concat([e]):null,dl(4,4,ap.bind(null,n,e),a)}function gu(){}function sp(e,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ru(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function op(e,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ru(n,s[1]))return s[0];if(s=e(),Qa){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[s,n],s}function _u(e,n,a){return a===void 0||pa&1073741824?e.memoizedState=n:(e.memoizedState=a,e=cm(),be.lanes|=e,ba|=e,a)}function lp(e,n,a,s){return jn(a,n)?a:Pr.current!==null?(e=_u(e,a,s),jn(e,n)||(vn=!0),e):pa&42?(e=cm(),be.lanes|=e,ba|=e,n):(vn=!0,e.memoizedState=a)}function cp(e,n,a,s,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=B.T,w={};B.T=w,yu(e,!1,n,a);try{var F=c(),$=B.S;if($!==null&&$(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var xt=Mv(F,s);eo(e,n,xt,Jn(e))}else eo(e,n,s,Jn(e))}catch(Dt){eo(e,n,{then:function(){},status:"rejected",reason:Dt},Jn())}finally{Y.p=f,B.T=S}}function wv(){}function vu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=up(e).queue;cp(e,c,n,pt,a===null?wv:function(){return fp(e),a(s)})}function up(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fp(e){var n=up(e).next.queue;eo(e,n,{},Jn())}function xu(){return Cn(Mo)}function dp(){return un().memoizedState}function hp(){return un().memoizedState}function Rv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=va(a);var s=xa(n,e,a);s!==null&&(Pn(s,n,a),ao(s,n,a)),n={cache:nu()},e.payload=n;return}n=n.return}}function Cv(e,n,a){var s=Jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?mp(n,a):(a=Zc(e,n,a,s),a!==null&&(Pn(a,e,s),gp(a,n,s)))}function pp(e,n,a){var s=Jn();eo(e,n,a,s)}function eo(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))mp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,w=f(S,a);if(c.hasEagerState=!0,c.eagerState=w,jn(w,S))return Ko(e,n,c,0),ke===null&&Zo(),!1}catch{}finally{}if(a=Zc(e,n,c,s),a!==null)return Pn(a,e,s),gp(a,n,s),!0}return!1}function yu(e,n,a,s){if(s={lane:2,revertLane:uf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(n)throw Error(r(479))}else n=Zc(e,a,s,2),n!==null&&Pn(n,e,2)}function hl(e){var n=e.alternate;return e===be||n!==null&&n===be}function mp(e,n){Fr=sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function gp(e,n,a){if(a&4194176){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Hn(e,a)}}var Di={readContext:Cn,use:cl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on};Di.useCacheRefresh=on,Di.useMemoCache=on,Di.useHostTransitionStatus=on,Di.useFormState=on,Di.useActionState=on,Di.useOptimistic=on;var Ja={readContext:Cn,use:cl,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:ep,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,ap.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var s=e();if(Qa){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Wn();if(a!==void 0){var c=a(n);if(Qa){te(!0);try{a(n)}finally{te(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Cv.bind(null,be,e),[s.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=hu(e);var n=e.queue,a=pp.bind(null,be,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gu,useDeferredValue:function(e,n){var a=Wn();return _u(a,e,n)},useTransition:function(){var e=hu(!1);return e=cp.bind(null,be,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=be,c=Wn();if(Ne){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));Ce&60||Ih(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ep(Gh.bind(null,s,f,e),[e]),s.flags|=2048,Hr(9,Hh.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Wn(),n=ke.identifierPrefix;if(Ne){var a=Ii,s=Fi;a=(s&~(1<<32-L(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Ev++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Wn().memoizedState=Rv.bind(null,be)}};Ja.useMemoCache=uu,Ja.useHostTransitionStatus=xu,Ja.useFormState=Kh,Ja.useActionState=Kh,Ja.useOptimistic=function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,be,!0,a),a.dispatch=n,[e,n]};var ma={readContext:Cn,use:cl,useCallback:sp,useContext:Cn,useEffect:mu,useImperativeHandle:rp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:op,useReducer:ul,useRef:tp,useState:function(){return ul(Gi)},useDebugValue:gu,useDeferredValue:function(e,n){var a=un();return lp(a,Ie.memoizedState,e,n)},useTransition:function(){var e=ul(Gi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Fh,useId:dp};ma.useCacheRefresh=hp,ma.useMemoCache=uu,ma.useHostTransitionStatus=xu,ma.useFormState=Qh,ma.useActionState=Qh,ma.useOptimistic=function(e,n){var a=un();return Wh(a,Ie,e,n)};var $a={readContext:Cn,use:cl,useCallback:sp,useContext:Cn,useEffect:mu,useImperativeHandle:rp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:op,useReducer:du,useRef:tp,useState:function(){return du(Gi)},useDebugValue:gu,useDeferredValue:function(e,n){var a=un();return Ie===null?_u(a,e,n):lp(a,Ie.memoizedState,e,n)},useTransition:function(){var e=du(Gi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Fh,useId:dp};$a.useCacheRefresh=hp,$a.useMemoCache=uu,$a.useHostTransitionStatus=xu,$a.useFormState=$h,$a.useActionState=$h,$a.useOptimistic=function(e,n){var a=un();return Ie!==null?Wh(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Su(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mu={isMounted:function(e){return(e=e._reactInternals)?it(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,s),n!==null&&(Pn(n,e,s),ao(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,s),n!==null&&(Pn(n,e,s),ao(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=xa(e,s,a),n!==null&&(Pn(n,e,a),ao(n,e,a))}};function _p(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function vp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Mu.enqueueReplaceState(n,n.state,null)}function tr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=E({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xp(e){pl(e)}function yp(e){console.error(e)}function Sp(e){pl(e)}function ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Mp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Eu(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,n)},a}function Ep(e){return e=va(e),e.tag=3,e}function bp(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Mp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Mp(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function Dv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=oi.current,a!==null){switch(a.tag){case 13:return Ci===null?rf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===$c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),of(e,s,c)),!1;case 22:return a.flags|=65536,s===$c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),of(e,s,c)),!1}throw Error(r(435,a.tag))}return of(e,s,c),rf(),!1}if(Ne)return n=oi.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Jc&&(e=Error(r(422),{cause:s}),qs(ai(e,a)))):(s!==Jc&&(n=Error(r(423),{cause:s}),qs(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ai(s,a),c=Eu(e.stateNode,s,c),Fu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),ho===null?ho=[f]:ho.push(f),en!==4&&(en=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Eu(a.stateNode,s,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ep(c),bp(c,e,a,s),Fu(a,c),!1}a=a.return}while(a!==null);return!1}var Tp=Error(r(461)),vn=!1;function bn(e,n,a,s){n.child=e===null?Dh(n,null,a,s):Za(n,e.child,a,s)}function Ap(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var w in s)w!=="ref"&&(S[w]=s[w])}else S=s;return nr(n),s=su(e,n,a,S,f,c),w=ou(),e!==null&&!vn?(lu(e,n,c),Vi(e,n,c)):(Ne&&w&&Kc(n),n.flags|=1,bn(e,n,s,c),n.child)}function wp(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!qu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rp(e,n,f,s,c)):(e=yl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(S,s)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Ea(f,s),e.ref=n.ref,e.return=n,n.child=e}function Rp(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Uu(e,c))e.flags&131072&&(vn=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return bu(e,n,a,s,c)}function Cp(e,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(no(e,n),s.mode==="hidden"||f){if(n.flags&128){if(s=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Dp(e,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,S!==null?S.cachePool:null),S!==null?Lh(n,S):tu(),Uh(n);else return n.lanes=n.childLanes=536870912,Dp(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(rl(n,S.cachePool),Lh(n,S),ha(),n.memoizedState=null):(e!==null&&rl(n,null),tu(),ha());return bn(e,n,c,a),n.child}function Dp(e,n,a,s){var c=au();return c=c===null?null:{parent:pn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&rl(n,null),tu(),Uh(n),e!==null&&io(e,n,s,!0),null}function no(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function bu(e,n,a,s,c){return nr(n),a=su(e,n,a,s,void 0,c),s=ou(),e!==null&&!vn?(lu(e,n,c),Vi(e,n,c)):(Ne&&s&&Kc(n),n.flags|=1,bn(e,n,a,c),n.child)}function Lp(e,n,a,s,c,f){return nr(n),n.updateQueue=null,a=Bh(n,s,a,c),zh(e),s=ou(),e!==null&&!vn?(lu(e,n,f),Vi(e,n,f)):(Ne&&s&&Kc(n),n.flags|=1,bn(e,n,a,f),n.child)}function Up(e,n,a,s,c){if(nr(n),n.stateNode===null){var f=Lr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},zu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Lr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Su(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Mu.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,F=tr(a,w);f.props=F;var $=f.context,xt=a.contextType;S=Lr,typeof xt=="object"&&xt!==null&&(S=Cn(xt));var Dt=a.getDerivedStateFromProps;xt=typeof Dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||$!==S)&&vp(n,f,s,S),_a=!1;var lt=n.memoizedState;f.state=lt,so(n,s,f,c),ro(),$=n.memoizedState,w||lt!==$||_a?(typeof Dt=="function"&&(Su(n,a,Dt,s),$=n.memoizedState),(F=_a||_p(n,a,F,s,lt,$,S))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Bu(e,n),S=n.memoizedProps,xt=tr(a,S),f.props=xt,Dt=n.pendingProps,lt=f.context,$=a.contextType,F=Lr,typeof $=="object"&&$!==null&&(F=Cn($)),w=a.getDerivedStateFromProps,($=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Dt||lt!==F)&&vp(n,f,s,F),_a=!1,lt=n.memoizedState,f.state=lt,so(n,s,f,c),ro();var gt=n.memoizedState;S!==Dt||lt!==gt||_a||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof w=="function"&&(Su(n,a,w,s),gt=n.memoizedState),(xt=_a||_p(n,a,xt,s,lt,gt,F)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,gt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,gt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=gt),f.props=s,f.state=gt,f.context=F,s=xt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,no(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Za(n,e.child,null,c),n.child=Za(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Vi(e,n,c),e}function Np(e,n,a,s){return Xs(),n.flags|=256,bn(e,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:Ph()}}function wu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function Op(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ne){if(c?da(n):ha(),Ne){var w=En,F;if(F=w){t:{for(F=w,w=Ri;F.nodeType!==8;){if(!w){w=null;break t}if(F=yi(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(n.memoizedState={dehydrated:w,treeContext:qa!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912},F=ui(18,null,null,0),F.stateNode=w,F.return=n,n.child=F,On=n,En=null,F=!0):F=!1}F||ja(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Hi(n)}return w=s.children,s=s.fallback,c?(ha(),c=n.mode,w=Cu({mode:"hidden",children:w},c),s=ar(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=Au(a),c.childLanes=wu(e,S,a),n.memoizedState=Tu,s):(da(n),Ru(n,w))}if(F=e.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Du(e,n,a)):n.memoizedState!==null?(ha(),n.child=e.child,n.flags|=128,n=null):(ha(),c=s.fallback,w=n.mode,s=Cu({mode:"visible",children:s.children},w),c=ar(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Za(n,e.child,null,a),s=n.child,s.memoizedState=Au(a),s.childLanes=wu(e,S,a),n.memoizedState=Tu,n=c);else if(da(n),w.data==="$!"){if(S=w.nextSibling&&w.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,qs({value:s,source:null,stack:null}),n=Du(e,n,a)}else if(vn||io(e,n,a,!1),S=(a&e.childLanes)!==0,vn||S){if(S=ke,S!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(S.suspendedLanes|a)?0:s,s!==0&&s!==F.retryLane)throw F.retryLane=s,fa(e,s),Pn(S,e,s),Tp}w.data==="$?"||rf(),n=Du(e,n,a)}else w.data==="$?"?(n.flags|=128,n.child=e.child,n=Xv.bind(null,e),w._reactRetry=n,n=null):(e=F.treeContext,En=yi(w.nextSibling),On=n,Ne=!0,vi=null,Ri=!1,e!==null&&(ri[si++]=Fi,ri[si++]=Ii,ri[si++]=qa,Fi=e.id,Ii=e.overflow,qa=n),n=Ru(n,s.children),n.flags|=4096);return n}return c?(ha(),c=s.fallback,w=n.mode,F=e.child,$=F.sibling,s=Ea(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&31457280,$!==null?c=Ea($,c):(c=ar(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=e.child.memoizedState,w===null?w=Au(a):(F=w.cachePool,F!==null?($=pn._currentValue,F=F.parent!==$?{parent:$,pool:$}:F):F=Ph(),w={baseLanes:w.baseLanes|a,cachePool:F}),c.memoizedState=w,c.childLanes=wu(e,S,a),n.memoizedState=Tu,s):(da(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ru(e,n){return n=Cu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cu(e,n){return sm(e,n,0,null)}function Du(e,n,a){return Za(n,e.child,null,a),e=Ru(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pp(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ou(e.return,n,a)}function Lu(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function zp(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(e,n,s.children,a),s=hn.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pp(e,a,n);else if(e.tag===19)Pp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch($t(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&al(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Lu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&al(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Lu(n,!0,a,null,f);break;case"together":Lu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,!(a&n.childLanes))if(e!==null){if(io(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uu(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Lv(e,n,a){switch(n.tag){case 3:ue(n,n.stateNode.containerInfo),ga(n,pn,e.memoizedState.cache),Xs();break;case 27:case 5:Pe(n);break;case 4:ue(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):a&n.child.childLanes?Op(e,n,a):(da(n),e=Vi(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(io(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return zp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$t(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,Cp(e,n,a);case 24:ga(n,pn,e.memoizedState.cache)}return Vi(e,n,a)}function Bp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Uu(e,a)&&!(n.flags&128))return vn=!1,Lv(e,n,a);vn=!!(e.flags&131072)}else vn=!1,Ne&&n.flags&1048576&&Sh(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")qu(s)?(e=tr(s,e),n.tag=1,n=Up(null,n,s,e,a)):(n.tag=0,n=bu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===T){n.tag=11,n=Ap(null,n,s,e,a);break t}else if(c===_){n.tag=14,n=wp(null,n,s,e,a);break t}}throw n=ft(s)||s,Error(r(306,n,""))}}return n;case 0:return bu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=tr(s,n.pendingProps),Up(e,n,s,c,a);case 3:t:{if(ue(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,Bu(e,n),so(n,f,null,a);var S=n.memoizedState;if(f=S.cache,ga(n,pn,f),f!==c.cache&&Pu(n,[pn],a,!0),ro(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Np(e,n,f,a);break t}else if(f!==s){s=ai(Error(r(424)),n),qs(s),n=Np(e,n,f,a);break t}else for(En=yi(n.stateNode.containerInfo.firstChild),On=n,Ne=!0,vi=null,Ri=!0,a=Dh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),f===s){n=Vi(e,n,a);break t}bn(e,n,f,a)}n=n.child}return n;case 26:return no(e,n),e===null?(a=Hm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ne||(a=n.type,e=n.pendingProps,s=Ul(ze.current).createElement(a),s[Ze]=n,s[an]=e,Tn(s,a,e),Ft(s),n.stateNode=s):n.memoizedState=Hm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pe(n),e===null&&Ne&&(s=n.stateNode=Bm(n.type,n.pendingProps,ze.current),On=n,Ri=!0,En=yi(s.firstChild)),s=n.pendingProps.children,e!==null||Ne?bn(e,n,s,a):n.child=Za(n,null,s,a),no(e,n),n.child;case 5:return e===null&&Ne&&((c=s=En)&&(s=ox(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,On=n,En=yi(s.firstChild),Ri=!1,c=!0):c=!1),c||ja(n)),Pe(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,xf(c,f)?s=null:S!==null&&xf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=su(e,n,bv,null,null,a),Mo._currentValue=c),no(e,n),bn(e,n,s,a),n.child;case 6:return e===null&&Ne&&((e=a=En)&&(a=lx(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,On=n,En=null,e=!0):e=!1),e||ja(n)),null;case 13:return Op(e,n,a);case 4:return ue(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Za(n,null,s,a):bn(e,n,s,a),n.child;case 11:return Ap(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),bn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=Cn(c),s=s(c),n.flags|=1,bn(e,n,s,a),n.child;case 14:return wp(e,n,n.type,n.pendingProps,a);case 15:return Rp(e,n,n.type,n.pendingProps,a);case 19:return zp(e,n,a);case 22:return Cp(e,n,a);case 24:return nr(n),s=Cn(pn),e===null?(c=au(),c===null&&(c=ke,f=nu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},zu(n),ga(n,pn,c)):(e.lanes&a&&(Bu(e,n),so(n,null,null,a),ro()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,pn,s)):(s=f.cache,ga(n,pn,s),s!==c.cache&&Pu(n,[pn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Nu=Pt(null),er=null,ki=null;function ga(e,n,a){$t(Nu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Nu.current,zt(Nu)}function Ou(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var F=0;F<n.length;F++)if(w.context===n[F]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Ou(f.return,a,e),s||(S=null);break t}f=w.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ou(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=c.type;jn(c.pendingProps.value,S.value)||(e!==null?e.push(w):e=[w])}}else if(c===ae.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}c=c.return}e!==null&&Pu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Fp(er,e)}function _l(e,n){return er===null&&nr(e),Fp(e,n)}function Fp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var _a=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,$e&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(e),xh(e,null,a),n}return Ko(e,s,n,a),Qo(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Hn(e,a)}}function Fu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Iu=!1;function ro(){if(Iu){var e=Br;if(e!==null)throw e}}function so(e,n,a,s){Iu=!1;var c=e.updateQueue;_a=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var F=w,$=F.next;F.next=null,S===null?f=$:S.next=$,S=F;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,w=xt.lastBaseUpdate,w!==S&&(w===null?xt.firstBaseUpdate=$:w.next=$,xt.lastBaseUpdate=F))}if(f!==null){var Dt=c.baseState;S=0,xt=$=F=null,w=f;do{var lt=w.lane&-536870913,gt=lt!==w.lane;if(gt?(Ce&lt)===lt:(s&lt)===lt){lt!==0&&lt===zr&&(Iu=!0),xt!==null&&(xt=xt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var oe=e,_e=w;lt=n;var nn=a;switch(_e.tag){case 1:if(oe=_e.payload,typeof oe=="function"){Dt=oe.call(nn,Dt,lt);break t}Dt=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=_e.payload,lt=typeof oe=="function"?oe.call(nn,Dt,lt):oe,lt==null)break t;Dt=E({},Dt,lt);break t;case 2:_a=!0}}lt=w.callback,lt!==null&&(e.flags|=64,gt&&(e.flags|=8192),gt=c.callbacks,gt===null?c.callbacks=[lt]:gt.push(lt))}else gt={lane:lt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xt===null?($=xt=gt,F=Dt):xt=xt.next=gt,S|=lt;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;gt=w,w=gt.next,gt.next=null,c.lastBaseUpdate=gt,c.shared.pending=null}}while(!0);xt===null&&(F=Dt),c.baseState=F,c.firstBaseUpdate=$,c.lastBaseUpdate=xt,f===null&&(c.shared.lanes=0),ba|=S,e.lanes=S,e.memoizedState=Dt}}function Ip(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ip(a[e],n)}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(w){Ve(n,n.return,w)}}function ya(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,c=n;var F=a;try{w()}catch($){Ve(c,F,$)}}}s=s.next}while(s!==f)}}catch($){Ve(n,n.return,$)}}function Gp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hp(n,a)}catch(s){Ve(e,e.return,s)}}}function Vp(e,n,a){a.props=tr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(e,n,s)}}function ir(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Ve(e,n,f)}}function Zn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(e,n,c)}else a.current=null}function kp(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(e,e.return,c)}}function Wp(e,n,a){try{var s=e.stateNode;nx(s,e.type,a,n),s[an]=n}catch(c){Ve(e,e.return,c)}}function Xp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Hu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Gu(e,n,a),e=e.sibling;e!==null;)Gu(e,n,a),e=e.sibling}function vl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(vl(e,n,a),e=e.sibling;e!==null;)vl(e,n,a),e=e.sibling}var Xi=!1,tn=!1,Vu=!1,qp=typeof WeakSet=="function"?WeakSet:Set,xn=null,Yp=!1;function Uv(e,n){if(e=e.containerInfo,_f=Fl,e=uh(e),Wc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,w=-1,F=-1,$=0,xt=0,Dt=e,lt=null;e:for(;;){for(var gt;Dt!==a||c!==0&&Dt.nodeType!==3||(w=S+c),Dt!==f||s!==0&&Dt.nodeType!==3||(F=S+s),Dt.nodeType===3&&(S+=Dt.nodeValue.length),(gt=Dt.firstChild)!==null;)lt=Dt,Dt=gt;for(;;){if(Dt===e)break e;if(lt===a&&++$===c&&(w=S),lt===f&&++xt===s&&(F=S),(gt=Dt.nextSibling)!==null)break;Dt=lt,lt=Dt.parentNode}Dt=gt}a=w===-1||F===-1?null:{start:w,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:e,selectionRange:a},Fl=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var oe=tr(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(oe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(_e){Ve(a,a.return,_e)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Mf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}return oe=Yp,Yp=!1,oe}function jp(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(e,a),s&4&&oo(5,a);break;case 1:if(Yi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(w){Ve(a,a.return,w)}else{var c=tr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Ve(a,a.return,w)}}s&64&&Gp(a),s&512&&ir(a,a.return);break;case 3:if(Yi(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Hp(s,e)}catch(w){Ve(a,a.return,w)}}break;case 26:Yi(e,a),s&512&&ir(a,a.return);break;case 27:case 5:Yi(e,a),n===null&&s&4&&kp(a),s&512&&ir(a,a.return);break;case 12:Yi(e,a);break;case 13:Yi(e,a),s&4&&Qp(e,a);break;case 22:if(c=a.memoizedState!==null||Xi,!c){n=n!==null&&n.memoizedState!==null||tn;var f=Xi,S=tn;Xi=c,(tn=n)&&!S?Sa(e,a,(a.subtreeFlags&8772)!==0):Yi(e,a),Xi=f,tn=S}s&512&&(a.memoizedProps.mode==="manual"?ir(a,a.return):Zn(a,a.return));break;default:Yi(e,a)}}function Zp(e){var n=e.alternate;n!==null&&(e.alternate=null,Zp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&K(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,Kn=!1;function qi(e,n,a){for(a=a.child;a!==null;)Kp(e,n,a),a=a.sibling}function Kp(e,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ht,a)}catch{}switch(a.tag){case 26:tn||Zn(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Zn(a,n);var s=fn,c=Kn;for(fn=a.stateNode,qi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);K(a),fn=s,Kn=c;break;case 5:tn||Zn(a,n);case 6:c=fn;var f=Kn;if(fn=null,qi(e,n,a),fn=c,Kn=f,fn!==null)if(Kn)try{e=fn,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(S){Ve(a,n,S)}else try{fn.removeChild(a.stateNode)}catch(S){Ve(a,n,S)}break;case 18:fn!==null&&(Kn?(n=fn,a=a.stateNode,n.nodeType===8?Sf(n.parentNode,a):n.nodeType===1&&Sf(n,a),Ao(n)):Sf(fn,a.stateNode));break;case 4:s=fn,c=Kn,fn=a.stateNode.containerInfo,Kn=!0,qi(e,n,a),fn=s,Kn=c;break;case 0:case 11:case 14:case 15:tn||ya(2,a,n),tn||ya(4,a,n),qi(e,n,a);break;case 1:tn||(Zn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Vp(a,n,s)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:tn||Zn(a,n),tn=(s=tn)||a.memoizedState!==null,qi(e,n,a),tn=s;break;default:qi(e,n,a)}}function Qp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Ve(n,n.return,a)}}function Nv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new qp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new qp),n;default:throw Error(r(435,e.tag))}}function ku(e,n){var a=Nv(e);n.forEach(function(s){var c=qv.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function li(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,w=S;t:for(;w!==null;){switch(w.tag){case 27:case 5:fn=w.stateNode,Kn=!1;break t;case 3:fn=w.stateNode.containerInfo,Kn=!0;break t;case 4:fn=w.stateNode.containerInfo,Kn=!0;break t}w=w.return}if(fn===null)throw Error(r(160));Kp(f,S,c),fn=null,Kn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Jp(n,e),n=n.sibling}var xi=null;function Jp(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:li(n,e),ci(e),s&4&&(ya(3,e,e.return),oo(3,e),ya(5,e,e.return));break;case 1:li(n,e),ci(e),s&512&&(tn||a===null||Zn(a,a.return)),s&64&&Xi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=xi;if(li(n,e),ci(e),s&512&&(tn||a===null||Zn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[V]||f[Ze]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[Ze]=e,Ft(f),s=f;break t;case"link":var S=km("link","href",c).get(s+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(f=S[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=km("meta","content",c).get(s+(a.content||""))){for(w=0;w<S.length;w++)if(f=S[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ze]=e,Ft(f),s=f}e.stateNode=s}else Wm(c,e.type,e.stateNode);else e.stateNode=Vm(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Wm(c,e.type,e.stateNode):Vm(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Wp(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var F=c.firstChild;F;){var $=F.nextSibling,xt=F.nodeName;F[V]||xt==="HEAD"||xt==="BODY"||xt==="SCRIPT"||xt==="STYLE"||xt==="LINK"&&F.rel.toLowerCase()==="stylesheet"||c.removeChild(F),F=$}for(var Dt=e.type,lt=c.attributes;lt.length;)c.removeAttributeNode(lt[0]);Tn(c,Dt,f),c[Ze]=e,c[an]=f}catch(oe){Ve(e,e.return,oe)}}case 5:if(li(n,e),ci(e),s&512&&(tn||a===null||Zn(a,a.return)),e.flags&32){c=e.stateNode;try{br(c,"")}catch(oe){Ve(e,e.return,oe)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Wp(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Vu=!0);break;case 6:if(li(n,e),ci(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(oe){Ve(e,e.return,oe)}}break;case 3:if(Pl=null,c=xi,xi=Nl(n.containerInfo),li(n,e),xi=c,ci(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(oe){Ve(e,e.return,oe)}Vu&&(Vu=!1,$p(e));break;case 4:s=xi,xi=Nl(e.stateNode.containerInfo),li(n,e),ci(e),xi=s;break;case 12:li(n,e),ci(e);break;case 13:li(n,e),ci(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=tt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ku(e,s)));break;case 22:if(s&512&&(tn||a===null||Zn(a,a.return)),F=e.memoizedState!==null,$=a!==null&&a.memoizedState!==null,xt=Xi,Dt=tn,Xi=xt||F,tn=Dt||$,li(n,e),tn=Dt,Xi=xt,ci(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=F?n._visibility&-2:n._visibility|1,F&&(n=Xi||tn,a===null||$||n||Gr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){$=a=n;try{if(c=$.stateNode,F)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=$.stateNode,w=$.memoizedProps.style;var gt=w!=null&&w.hasOwnProperty("display")?w.display:null;S.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(oe){Ve($,$.return,oe)}}}else if(n.tag===6){if(a===null){$=n;try{$.stateNode.nodeValue=F?"":$.memoizedProps}catch(oe){Ve($,$.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ku(e,a))));break;case 19:li(n,e),ci(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ku(e,s)));break;case 21:break;default:li(n,e),ci(e)}}function ci(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Xp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Hu(e);vl(e,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(br(S,""),s.flags&=-33);var w=Hu(e);vl(e,w,S);break;case 3:case 4:var F=s.stateNode.containerInfo,$=Hu(e);Gu(e,$,F);break;default:throw Error(r(161))}}}catch(xt){Ve(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $p(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;$p(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jp(e,n.alternate,n),n=n.sibling}function Gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),Gr(n);break;case 1:Zn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vp(n,n.return,a),Gr(n);break;case 26:case 27:case 5:Zn(n,n.return),Gr(n);break;case 22:Zn(n,n.return),n.memoizedState===null&&Gr(n);break;default:Gr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),oo(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ve(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Ip(F[c],w)}catch($){Ve(s,s.return,$)}}a&&S&64&&Gp(f),ir(f,f.return);break;case 26:case 27:case 5:Sa(c,f,a),a&&s===null&&S&4&&kp(f),ir(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&Qp(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),ir(f,f.return);break;default:Sa(c,f,a)}n=n.sibling}}function Wu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qs(a))}function Xu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e))}function Ma(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tm(e,n,a,s),n=n.sibling}function tm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(e,n,a,s),c&2048&&oo(9,n);break;case 3:Ma(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e)));break;case 12:if(c&2048){Ma(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,w=f.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ve(n,n.return,F)}}else Ma(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(e,n,a,s):lo(e,n):f._visibility&4?Ma(e,n,a,s):(f._visibility|=4,Vr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Wu(n.alternate,n);break;case 24:Ma(e,n,a,s),c&2048&&Xu(n.alternate,n);break;default:Ma(e,n,a,s)}}function Vr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,w=a,F=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:Vr(f,S,w,F,c),oo(8,S);break;case 23:break;case 22:var xt=S.stateNode;S.memoizedState!==null?xt._visibility&4?Vr(f,S,w,F,c):lo(f,S):(xt._visibility|=4,Vr(f,S,w,F,c)),c&&$&2048&&Wu(S.alternate,S);break;case 24:Vr(f,S,w,F,c),c&&$&2048&&Xu(S.alternate,S);break;default:Vr(f,S,w,F,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&Wu(s.alternate,s);break;case 24:lo(a,s),c&2048&&Xu(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function kr(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)em(e),e=e.sibling}function em(e){switch(e.tag){case 26:kr(e),e.flags&co&&e.memoizedState!==null&&Sx(xi,e.memoizedState,e.memoizedProps);break;case 5:kr(e);break;case 3:case 4:var n=xi;xi=Nl(e.stateNode.containerInfo),kr(e),xi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,kr(e),co=n):kr(e));break;default:kr(e)}}function nm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,am(s,e)}nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)im(e),e=e.sibling}function im(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,xl(e)):uo(e);break;default:uo(e)}}function xl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,am(s,e)}nm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,xl(n));break;default:xl(n)}e=e.sibling}}function am(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=e;xn!==null;){s=xn;var c=s.sibling,f=s.return;if(Zp(s),s===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}function Ov(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,n,a,s){return new Ov(e,n,a,s)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=ui(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")qu(e)&&(S=1);else if(typeof e=="string")S=xx(e,a,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return ar(a.children,c,f,n);case m:S=8,c|=24;break;case g:return e=ui(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case R:return e=ui(13,a,n,c),e.elementType=R,e.lanes=f,e;case v:return e=ui(19,a,n,c),e.elementType=v,e.lanes=f,e;case D:return sm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case M:S=10;break t;case y:S=9;break t;case T:S=11;break t;case _:S=14;break t;case z:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ui(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ar(e,n,a,s){return e=ui(7,e,s,n),e.lanes=a,e}function sm(e,n,a,s){e=ui(22,e,s,n),e.elementType=D,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=fa(f,2);S!==null&&(c._pendingVisibility|=2,Pn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=fa(f,2);S!==null&&(c._pendingVisibility&=-3,Pn(S,f,2))}}};return e.stateNode=c,e}function Yu(e,n,a){return e=ui(6,e,null,n),e.lanes=a,e}function ju(e,n,a){return n=ui(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ji(e){e.flags|=4}function om(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Xm(n)){if(n=oi.current,n!==null&&((Ce&4194176)===Ce?Ci!==null:(Ce&62914560)!==Ce&&!(Ce&536870912)||n!==Ci))throw js=$c,bh;e.flags|=8192}}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?de():536870912,e.lanes|=n,Xr|=n)}function fo(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Pv(e,n,a){var s=n.pendingProps;switch(Qc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Wi(pn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ws(n)?ji(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vi!==null&&(nf(vi),vi=null))),Je(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(Je(n),om(n,a)):(Je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),Je(n),om(n,a)):(Je(n),n.flags&=-16777217):(e.memoizedProps!==s&&ji(n),Je(n),n.flags&=-16777217),null;case 27:he(n),a=ze.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=ie.current,Ws(n)?Mh(n):(e=Bm(c,s,a),n.stateNode=e,ji(n))}return Je(n),null;case 5:if(he(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(e=ie.current,Ws(n))Mh(n);else{switch(c=Ul(ze.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[Ze]=n,e[an]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ze.current,Ws(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=On,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Ze]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Lm(e.nodeValue,a)),e||ja(n)}else e=Ul(e).createTextNode(s),e[Ze]=n,n.stateNode=e}return Je(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ws(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ze]=n}else Xs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else vi!==null&&(nf(vi),vi=null),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Je(n),null;case 4:return Kt(),e===null&&pf(n.stateNode.containerInfo),Je(n),null;case 10:return Wi(n.type),Je(n),null;case 19:if(zt(hn),c=n.memoizedState,c===null)return Je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)fo(c,!1);else{if(en!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=al(e),f!==null){for(n.flags|=128,fo(c,!1),e=f.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rm(a,e),a=a.sibling;return $t(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&tt()>Ml&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304)}else{if(!s)if(e=al(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ne)return Je(n),null}else 2*tt()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,s=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=tt(),n.sibling=null,e=hn.current,$t(hn,s?e&1|2:e&1),n):(Je(n),null);case 22:case 23:return Hi(n),eu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&zt(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(pn),Je(n),null;case 25:return null}throw Error(r(156,n.tag))}function zv(e,n){switch(Qc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(pn),Kt(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return zt(hn),null;case 4:return Kt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Hi(n),eu(),e!==null&&zt(Ka),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(pn),null;case 25:return null;default:return null}}function lm(e,n){switch(Qc(n),n.tag){case 3:Wi(pn),Kt();break;case 26:case 27:case 5:he(n);break;case 4:Kt();break;case 13:Hi(n);break;case 19:zt(hn);break;case 10:Wi(n.type);break;case 22:case 23:Hi(n),eu(),e!==null&&zt(Ka);break;case 24:Wi(pn)}}var Bv={getCacheForType:function(e){var n=Cn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Fv=typeof WeakMap=="function"?WeakMap:Map,$e=0,ke=null,we=null,Ce=0,We=0,Qn=null,Zi=!1,Wr=!1,Zu=!1,Ki=0,en=0,ba=0,rr=0,Ku=0,fi=0,Xr=0,ho=null,Li=null,Qu=!1,Ju=0,Ml=1/0,El=null,Ta=null,bl=!1,sr=null,po=0,$u=0,tf=null,mo=0,ef=null;function Jn(){if($e&2&&Ce!==0)return Ce&-Ce;if(B.T!==null){var e=zr;return e!==0?e:uf()}return je()}function cm(){fi===0&&(fi=!(Ce&536870912)||Ne?jt():536870912);var e=oi.current;return e!==null&&(e.flags|=32),fi}function Pn(e,n,a){(e===ke&&We===2||e.cancelPendingCommit!==null)&&(qr(e,0),Qi(e,Ce,fi,!1)),ne(e,a),(!($e&2)||e!==ke)&&(e===ke&&(!($e&2)&&(rr|=a),en===4&&Qi(e,Ce,fi,!1)),Ui(e))}function um(e,n,a){if($e&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||Qt(e,n),c=s?Gv(e,n):sf(e,n,!0),f=s;do{if(c===0){Wr&&!s&&Qi(e,n,0,!1);break}else if(c===6)Qi(e,n,0,!Zi);else{if(a=e.current.alternate,f&&!Iv(a)){c=sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var w=e;c=ho;var F=w.current.memoizedState.isDehydrated;if(F&&(qr(w,S).flags|=256),S=sf(w,S,!1),S!==2){if(Zu&&!F){w.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=Li,Li=c,f!==null&&nf(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){qr(e,0),Qi(e,n,0,!0);break}t:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Qi(s,n,fi,!Zi);break t}break;case 2:Li=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Ju+300-tt(),10<f)){if(Qi(s,n,fi,!Zi),qt(s,0)!==0)break t;s.timeoutHandle=Om(fm.bind(null,s,a,Li,El,Qu,n,fi,rr,Xr,Zi,2,-0,0),f);break t}fm(s,a,Li,El,Qu,n,fi,rr,Xr,Zi,0,-0,0)}}break}while(!0);Ui(e)}function nf(e){Li===null?Li=e:Li.push.apply(Li,e)}function fm(e,n,a,s,c,f,S,w,F,$,xt,Dt,lt){var gt=n.subtreeFlags;if((gt&8192||(gt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:yx},em(n),n=Mx(),n!==null)){e.cancelPendingCommit=n(vm.bind(null,e,a,s,c,S,w,F,1,Dt,lt)),Qi(e,f,S,!$);return}vm(e,a,s,c,S,w,F,xt,Dt,lt)}function Iv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qi(e,n,a,s){n&=~Ku,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-L(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Xe(e,a,n)}function Tl(){return $e&6?!0:(go(0),!1)}function af(){if(we!==null){if(We===0)var e=we.return;else e=we,ki=er=null,cu(e),Or=null,Zs=0,e=we;for(;e!==null;)lm(e.alternate,e),e=e.return;we=null}}function qr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),af(),ke=e,we=a=Ea(e.current,null),Ce=n,We=0,Qn=null,Zi=!1,Wr=Qt(e,n),Zu=!1,Xr=fi=Ku=rr=ba=en=0,Li=ho=null,Qu=!1,n&8&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-L(s),f=1<<c;n|=e[c],s&=~f}return Ki=n,Zo(),a}function dm(e,n){be=null,B.H=Di,n===Ys?(n=wh(),We=3):n===bh?(n=wh(),We=4):We=n===Tp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,we===null&&(en=1,ml(e,ai(n,e.current)))}function hm(){var e=B.H;return B.H=Di,e===null?Di:e}function pm(){var e=B.A;return B.A=Bv,e}function rf(){en=4,Zi||(Ce&4194176)!==Ce&&oi.current!==null||(Wr=!0),!(ba&134217727)&&!(rr&134217727)||ke===null||Qi(ke,Ce,fi,!1)}function sf(e,n,a){var s=$e;$e|=2;var c=hm(),f=pm();(ke!==e||Ce!==n)&&(El=null,qr(e,n)),n=!1;var S=en;t:do try{if(We!==0&&we!==null){var w=we,F=Qn;switch(We){case 8:af(),S=6;break t;case 3:case 2:case 6:oi.current===null&&(n=!0);var $=We;if(We=0,Qn=null,Yr(e,w,F,$),a&&Wr){S=0;break t}break;default:$=We,We=0,Qn=null,Yr(e,w,F,$)}}Hv(),S=en;break}catch(xt){dm(e,xt)}while(!0);return n&&e.shellSuspendCounter++,ki=er=null,$e=s,B.H=c,B.A=f,we===null&&(ke=null,Ce=0,Zo()),S}function Hv(){for(;we!==null;)mm(we)}function Gv(e,n){var a=$e;$e|=2;var s=hm(),c=pm();ke!==e||Ce!==n?(El=null,Ml=tt()+500,qr(e,n)):Wr=Qt(e,n);t:do try{if(We!==0&&we!==null){n=we;var f=Qn;e:switch(We){case 1:We=0,Qn=null,Yr(e,n,f,1);break;case 2:if(Th(f)){We=0,Qn=null,gm(n);break}n=function(){We===2&&ke===e&&(We=7),Ui(e)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:Th(f)?(We=0,Qn=null,gm(n)):(We=0,Qn=null,Yr(e,n,f,7));break;case 5:var S=null;switch(we.tag){case 26:S=we.memoizedState;case 5:case 27:var w=we;if(!S||Xm(S)){We=0,Qn=null;var F=w.sibling;if(F!==null)we=F;else{var $=w.return;$!==null?(we=$,Al($)):we=null}break e}}We=0,Qn=null,Yr(e,n,f,5);break;case 6:We=0,Qn=null,Yr(e,n,f,6);break;case 8:af(),en=6;break t;default:throw Error(r(462))}}Vv();break}catch(xt){dm(e,xt)}while(!0);return ki=er=null,B.H=s,B.A=c,$e=a,we!==null?0:(ke=null,Ce=0,Zo(),en)}function Vv(){for(;we!==null&&!Ot();)mm(we)}function mm(e){var n=Bp(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Al(e):we=n}function gm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Lp(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Lp(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:cu(n);default:lm(a,n),n=we=rm(n,Ki),n=Bp(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Al(e):we=n}function Yr(e,n,a,s){ki=er=null,cu(n),Or=null,Zs=0;var c=n.return;try{if(Dv(e,c,n,a,Ce)){en=1,ml(e,ai(a,e.current)),we=null;return}}catch(f){if(c!==null)throw we=c,f;en=1,ml(e,ai(a,e.current)),we=null;return}n.flags&32768?(Ne||s===1?e=!0:Wr||Ce&536870912?e=!1:(Zi=e=!0,(s===2||s===3||s===6)&&(s=oi.current,s!==null&&s.tag===13&&(s.flags|=16384))),_m(n,e)):Al(n)}function Al(e){var n=e;do{if(n.flags&32768){_m(n,Zi);return}e=n.return;var a=Pv(n.alternate,n,Ki);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);en===0&&(en=5)}function _m(e,n){do{var a=zv(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);en=6,we=null}function vm(e,n,a,s,c,f,S,w,F,$){var xt=B.T,Dt=Y.p;try{Y.p=2,B.T=null,kv(e,n,a,s,Dt,c,f,S,w,F,$)}finally{B.T=xt,Y.p=Dt}}function kv(e,n,a,s,c,f,S,w){do jr();while(sr!==null);if($e&6)throw Error(r(327));var F=e.finishedWork;if(s=e.finishedLanes,F===null)return null;if(e.finishedWork=null,e.finishedLanes=0,F===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var $=F.lanes|F.childLanes;if($|=jc,xe(e,s,$,f,S,w),e===ke&&(we=ke=null,Ce=0),!(F.subtreeFlags&10256)&&!(F.flags&10256)||bl||(bl=!0,$u=$,tf=a,Yv(At,function(){return jr(),null})),a=(F.flags&15990)!==0,F.subtreeFlags&15990||a?(a=B.T,B.T=null,f=Y.p,Y.p=2,S=$e,$e|=4,Uv(e,F),Jp(F,e),hv(vf,e.containerInfo),Fl=!!_f,vf=_f=null,e.current=F,jp(e,F.alternate,F),j(),$e=S,Y.p=f,B.T=a):e.current=F,bl?(bl=!1,sr=e,po=s):xm(e,$),$=e.pendingLanes,$===0&&(Ta=null),bt(F.stateNode),Ui(e),n!==null)for(c=e.onRecoverableError,F=0;F<n.length;F++)$=n[F],c($.value,{componentStack:$.stack});return po&3&&jr(),$=e.pendingLanes,s&4194218&&$&42?e===ef?mo++:(mo=0,ef=e):mo=0,go(0),null}function xm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qs(n)))}function jr(){if(sr!==null){var e=sr,n=$u;$u=0;var a=mi(po),s=B.T,c=Y.p;try{if(Y.p=32>a?32:a,B.T=null,sr===null)var f=!1;else{a=tf,tf=null;var S=sr,w=po;if(sr=null,po=0,$e&6)throw Error(r(331));var F=$e;if($e|=4,im(S.current),tm(S,S.current,w,a),$e=F,go(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ht,S)}catch{}f=!0}return f}finally{Y.p=c,B.T=s,xm(e,n)}}return!1}function ym(e,n,a){n=ai(a,n),n=Eu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(ne(e,2),Ui(e))}function Ve(e,n,a){if(e.tag===3)ym(e,e,a);else for(;n!==null;){if(n.tag===3){ym(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){e=ai(a,e),a=Ep(2),s=xa(n,a,2),s!==null&&(bp(a,s,n,e),ne(s,2),Ui(s));break}}n=n.return}}function of(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Fv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Zu=!0,c.add(a),e=Wv.bind(null,e,n,a),n.then(e,e))}function Wv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Ce&a)===a&&(en===4||en===3&&(Ce&62914560)===Ce&&300>tt()-Ju?!($e&2)&&qr(e,0):Ku|=a,Xr===Ce&&(Xr=0)),Ui(e)}function Sm(e,n){n===0&&(n=de()),e=fa(e,n),e!==null&&(ne(e,n),Ui(e))}function Xv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Sm(e,a)}function qv(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Sm(e,a)}function Yv(e,n){return A(e,n)}var wl=null,Zr=null,lf=!1,Rl=!1,cf=!1,or=0;function Ui(e){e!==Zr&&e.next===null&&(Zr===null?wl=Zr=e:Zr=Zr.next=e),Rl=!0,lf||(lf=!0,Zv(jv))}function go(e,n){if(!cf&&Rl){cf=!0;do for(var a=!1,s=wl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-L(42|e)+1)-1,f&=c&~(S&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,bm(s,f))}else f=Ce,f=qt(s,s===ke?f:0),!(f&3)||Qt(s,f)||(a=!0,bm(s,f));s=s.next}while(a);cf=!1}}function jv(){Rl=lf=!1;var e=0;or!==0&&(ix()&&(e=or),or=0);for(var n=tt(),a=null,s=wl;s!==null;){var c=s.next,f=Mm(s,n);f===0?(s.next=null,a===null?wl=c:a.next=c,c===null&&(Zr=a)):(a=s,(e!==0||f&3)&&(Rl=!0)),s=c}go(e)}function Mm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-L(f),w=1<<S,F=c[S];F===-1?(!(w&a)||w&s)&&(c[S]=Me(w,n)):F<=n&&(e.expiredLanes|=w),f&=~w}if(n=ke,a=Ce,a=qt(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&We===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&st(s),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||Qt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&st(s),mi(a)){case 2:case 8:a=_t;break;case 32:a=At;break;case 268435456:a=vt;break;default:a=At}return s=Em.bind(null,e),a=A(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&st(s),e.callbackPriority=2,e.callbackNode=null,2}function Em(e,n){var a=e.callbackNode;if(jr()&&e.callbackNode!==a)return null;var s=Ce;return s=qt(e,e===ke?s:0),s===0?null:(um(e,s,n),Mm(e,tt()),e.callbackNode!=null&&e.callbackNode===a?Em.bind(null,e):null)}function bm(e,n){if(jr())return null;um(e,n,!0)}function Zv(e){rx(function(){$e&6?A(dt,e):e()})}function uf(){return or===0&&(or=jt()),or}function Tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function Am(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Kv(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Tm((c[an]||null).action),S=s.submitter;S&&(n=(n=S[an]||null)?Tm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var w=new qo("action","action",null,s,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var F=S?Am(c,S):new FormData(c);vu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(w.preventDefault(),F=S?Am(c,S):new FormData(c),vu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var ff=0;ff<vh.length;ff++){var df=vh[ff],Qv=df.toLowerCase(),Jv=df[0].toUpperCase()+df.slice(1);_i(Qv,"on"+Jv)}_i(hh,"onAnimationEnd"),_i(ph,"onAnimationIteration"),_i(mh,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(mv,"onTransitionRun"),_i(gv,"onTransitionStart"),_i(_v,"onTransitionCancel"),_i(gh,"onTransitionEnd"),Le("onMouseEnter",["mouseout","mouseover"]),Le("onMouseLeave",["mouseout","mouseover"]),Le("onPointerEnter",["pointerout","pointerover"]),Le("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function wm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var w=s[S],F=w.instance,$=w.currentTarget;if(w=w.listener,F!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(xt){pl(xt)}c.currentTarget=null,f=F}else for(S=0;S<s.length;S++){if(w=s[S],F=w.instance,$=w.currentTarget,w=w.listener,F!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=$;try{f(c)}catch(xt){pl(xt)}c.currentTarget=null,f=F}}}}function Re(e,n){var a=n[Vt];a===void 0&&(a=n[Vt]=new Set);var s=e+"__bubble";a.has(s)||(Rm(n,e,2,!1),a.add(s))}function hf(e,n,a){var s=0;n&&(s|=4),Rm(a,e,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function pf(e){if(!e[Cl]){e[Cl]=!0,re.forEach(function(a){a!=="selectionchange"&&($v.has(a)||hf(a,!1,e),hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,hf("selectionchange",!1,n))}}function Rm(e,n,a,s){switch(Qm(n)){case 2:var c=Tx;break;case 8:c=Ax;break;default:c=wf}a=c.bind(null,n,a,e),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function mf(e,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var F=S.tag;if((F===3||F===4)&&(F=S.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;S=S.return}for(;w!==null;){if(S=X(w),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){s=f=S;continue t}w=w.parentNode}}s=s.return}kd(function(){var $=f,xt=Nc(a),Dt=[];t:{var lt=_h.get(e);if(lt!==void 0){var gt=qo,oe=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":gt=q_;break;case"focusin":oe="focus",gt=Ic;break;case"focusout":oe="blur",gt=Ic;break;case"beforeblur":case"afterblur":gt=Ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=Z_;break;case hh:case ph:case mh:gt=B_;break;case gh:gt=Q_;break;case"scroll":case"scrollend":gt=U_;break;case"wheel":gt=$_;break;case"copy":case"cut":case"paste":gt=I_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=jd;break;case"toggle":case"beforetoggle":gt=ev}var _e=(n&4)!==0,nn=!_e&&(e==="scroll"||e==="scrollend"),et=_e?lt!==null?lt+"Capture":null:lt;_e=[];for(var Q=$,at;Q!==null;){var Tt=Q;if(at=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||at===null||et===null||(Tt=Ps(Q,et),Tt!=null&&_e.push(vo(Q,Tt,at))),nn)break;Q=Q.return}0<_e.length&&(lt=new gt(lt,oe,null,a,xt),Dt.push({event:lt,listeners:_e}))}}if(!(n&7)){t:{if(lt=e==="mouseover"||e==="pointerover",gt=e==="mouseout"||e==="pointerout",lt&&a!==Uc&&(oe=a.relatedTarget||a.fromElement)&&(X(oe)||oe[Xt]))break t;if((gt||lt)&&(lt=xt.window===xt?xt:(lt=xt.ownerDocument)?lt.defaultView||lt.parentWindow:window,gt?(oe=a.relatedTarget||a.toElement,gt=$,oe=oe?X(oe):null,oe!==null&&(nn=it(oe),_e=oe.tag,oe!==nn||_e!==5&&_e!==27&&_e!==6)&&(oe=null)):(gt=null,oe=$),gt!==oe)){if(_e=qd,Tt="onMouseLeave",et="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(_e=jd,Tt="onPointerLeave",et="onPointerEnter",Q="pointer"),nn=gt==null?lt:wt(gt),at=oe==null?lt:wt(oe),lt=new _e(Tt,Q+"leave",gt,a,xt),lt.target=nn,lt.relatedTarget=at,Tt=null,X(xt)===$&&(_e=new _e(et,Q+"enter",oe,a,xt),_e.target=at,_e.relatedTarget=nn,Tt=_e),nn=Tt,gt&&oe)e:{for(_e=gt,et=oe,Q=0,at=_e;at;at=Kr(at))Q++;for(at=0,Tt=et;Tt;Tt=Kr(Tt))at++;for(;0<Q-at;)_e=Kr(_e),Q--;for(;0<at-Q;)et=Kr(et),at--;for(;Q--;){if(_e===et||et!==null&&_e===et.alternate)break e;_e=Kr(_e),et=Kr(et)}_e=null}else _e=null;gt!==null&&Cm(Dt,lt,gt,_e,!1),oe!==null&&nn!==null&&Cm(Dt,nn,oe,_e,!0)}}t:{if(lt=$?wt($):window,gt=lt.nodeName&&lt.nodeName.toLowerCase(),gt==="select"||gt==="input"&&lt.type==="file")var Jt=nh;else if(th(lt))if(ih)Jt=fv;else{Jt=cv;var Te=lv}else gt=lt.nodeName,!gt||gt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?$&&Lc($.elementType)&&(Jt=nh):Jt=uv;if(Jt&&(Jt=Jt(e,$))){eh(Dt,Jt,a,xt);break t}Te&&Te(e,lt,$),e==="focusout"&&$&&lt.type==="number"&&$.memoizedProps.value!=null&&Dc(lt,"number",lt.value)}switch(Te=$?wt($):window,e){case"focusin":(th(Te)||Te.contentEditable==="true")&&(Rr=Te,Xc=$,ks=null);break;case"focusout":ks=Xc=Rr=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,fh(Dt,a,xt);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":fh(Dt,a,xt)}var ce;if(Gc)t:{switch(e){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else wr?Jd(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Zd&&a.locale!=="ko"&&(wr||me!=="onCompositionStart"?me==="onCompositionEnd"&&wr&&(ce=Wd()):(ua=xt,zc="value"in ua?ua.value:ua.textContent,wr=!0)),Te=Dl($,me),0<Te.length&&(me=new Yd(me,e,null,a,xt),Dt.push({event:me,listeners:Te}),ce?me.data=ce:(ce=$d(a),ce!==null&&(me.data=ce)))),(ce=iv?av(e,a):rv(e,a))&&(me=Dl($,"onBeforeInput"),0<me.length&&(Te=new Yd("onBeforeInput","beforeinput",null,a,xt),Dt.push({event:Te,listeners:me}),Te.data=ce)),Kv(Dt,e,$,a,xt)}wm(Dt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Dl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(e,a),c!=null&&s.unshift(vo(e,c,f)),c=Ps(e,n),c!=null&&s.push(vo(e,c,f))),e=e.return}return s}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cm(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var w=a,F=w.alternate,$=w.stateNode;if(w=w.tag,F!==null&&F===s)break;w!==5&&w!==26&&w!==27||$===null||(F=$,c?($=Ps(a,f),$!=null&&S.unshift(vo(a,$,F))):c||($=Ps(a,f),$!=null&&S.push(vo(a,$,F)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var tx=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Dm(e){return(typeof e=="string"?e:""+e).replace(tx,`
`).replace(ex,"")}function Lm(e,n){return n=Dm(n),Dm(e)===n}function Ll(){}function He(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(e,""+s);break;case"className":Fe(e,"class",s);break;case"tabIndex":Fe(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(e,a,s);break;case"style":Gd(e,s,f);break;case"data":if(n!=="object"){Fe(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Vo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",c.name,c,null),He(e,n,"formEncType",c.formEncType,c,null),He(e,n,"formMethod",c.formMethod,c,null),He(e,n,"formTarget",c.formTarget,c,null)):(He(e,n,"encType",c.encType,c,null),He(e,n,"method",c.method,c,null),He(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Vo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"onScroll":s!=null&&Re("scroll",e);break;case"onScrollEnd":s!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Re("beforetoggle",e),Re("toggle",e),gi(e,"popover",s);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":gi(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=D_.get(a)||a,gi(e,a,s))}}function gf(e,n,a,s,c,f){switch(a){case"style":Gd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?br(e,s):(typeof s=="number"||typeof s=="bigint")&&br(e,""+s);break;case"onScroll":s!=null&&Re("scroll",e);break;case"onScrollEnd":s!=null&&Re("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[an]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):gi(e,a,s)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(e,n,f,S,a,null)}}c&&He(e,n,"srcSet",a.srcSet,a,null),s&&He(e,n,"src",a.src,a,null);return;case"input":Re("invalid",e);var w=f=S=c=null,F=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var xt=a[s];if(xt!=null)switch(s){case"name":c=xt;break;case"type":S=xt;break;case"checked":F=xt;break;case"defaultChecked":$=xt;break;case"value":f=xt;break;case"defaultValue":w=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:He(e,n,s,xt,a,null)}}Os(e,f,w,F,$,S,c,!1),sn(e);return;case"select":Re("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":S=w;break;case"multiple":s=w;default:He(e,n,c,w,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Er(e,!!s,n,!1):a!=null&&Er(e,!!s,a,!0);return;case"textarea":Re("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:He(e,n,S,w,a,null)}Id(e,s,c,f),sn(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:He(e,n,F,s,a,null)}return;case"dialog":Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(s=0;s<_o.length;s++)Re(_o[s],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(e,n,$,s,a,null)}return;default:if(Lc(n)){for(xt in a)a.hasOwnProperty(xt)&&(s=a[xt],s!==void 0&&gf(e,n,xt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&He(e,n,w,s,a,null))}function nx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,w=null,F=null,$=null,xt=null;for(gt in a){var Dt=a[gt];if(a.hasOwnProperty(gt)&&Dt!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":F=Dt;default:s.hasOwnProperty(gt)||He(e,n,gt,null,s,Dt)}}for(var lt in s){var gt=s[lt];if(Dt=a[lt],s.hasOwnProperty(lt)&&(gt!=null||Dt!=null))switch(lt){case"type":f=gt;break;case"name":c=gt;break;case"checked":$=gt;break;case"defaultChecked":xt=gt;break;case"value":S=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:gt!==Dt&&He(e,n,lt,gt,s,Dt)}}Ns(e,S,w,F,$,xt,f,c);return;case"select":gt=S=w=lt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":gt=F;default:s.hasOwnProperty(f)||He(e,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":lt=f;break;case"defaultValue":w=f;break;case"multiple":S=f;default:f!==F&&He(e,n,c,f,s,F)}n=w,a=S,s=gt,lt!=null?Er(e,!!a,lt,!1):!!s!=!!a&&(n!=null?Er(e,!!a,n,!0):Er(e,!!a,a?[]:"",!1));return;case"textarea":gt=lt=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:He(e,n,w,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":lt=c;break;case"defaultValue":gt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&He(e,n,S,c,s,f)}Fd(e,lt,gt);return;case"option":for(var oe in a)if(lt=a[oe],a.hasOwnProperty(oe)&&lt!=null&&!s.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:He(e,n,oe,null,s,lt)}for(F in s)if(lt=s[F],gt=a[F],s.hasOwnProperty(F)&&lt!==gt&&(lt!=null||gt!=null))switch(F){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:He(e,n,F,lt,s,gt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)lt=a[_e],a.hasOwnProperty(_e)&&lt!=null&&!s.hasOwnProperty(_e)&&He(e,n,_e,null,s,lt);for($ in s)if(lt=s[$],gt=a[$],s.hasOwnProperty($)&&lt!==gt&&(lt!=null||gt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:He(e,n,$,lt,s,gt)}return;default:if(Lc(n)){for(var nn in a)lt=a[nn],a.hasOwnProperty(nn)&&lt!==void 0&&!s.hasOwnProperty(nn)&&gf(e,n,nn,void 0,s,lt);for(xt in s)lt=s[xt],gt=a[xt],!s.hasOwnProperty(xt)||lt===gt||lt===void 0&&gt===void 0||gf(e,n,xt,lt,s,gt);return}}for(var et in a)lt=a[et],a.hasOwnProperty(et)&&lt!=null&&!s.hasOwnProperty(et)&&He(e,n,et,null,s,lt);for(Dt in s)lt=s[Dt],gt=a[Dt],!s.hasOwnProperty(Dt)||lt===gt||lt==null&&gt==null||He(e,n,Dt,lt,s,gt)}var _f=null,vf=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function Um(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function ix(){var e=window.event;return e&&e.type==="popstate"?e===yf?!1:(yf=e,!0):(yf=null,!1)}var Om=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(e){return Pm.resolve(null).then(e).catch(sx)}:Om;function sx(e){setTimeout(function(){throw e})}function Sf(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){e.removeChild(c),Ao(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);Ao(n)}function Mf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),K(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ox(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[V])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function lx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function zm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Bm(e,n,a){switch(n=Ul(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var di=new Map,Fm=new Set;function Nl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ji=Y.d;Y.d={f:cx,r:ux,D:fx,C:dx,L:hx,m:px,X:gx,S:mx,M:_x};function cx(){var e=Ji.f(),n=Tl();return e||n}function ux(e){var n=yt(e);n!==null&&n.tag===5&&n.type==="form"?fp(n):Ji.r(e)}var Qr=typeof document>"u"?null:document;function Im(e,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fm.has(c)||(Fm.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",e),Ft(n),s.head.appendChild(n)))}}function fx(e){Ji.D(e),Im("dns-prefetch",e,null)}function dx(e,n){Ji.C(e,n),Im("preconnect",e,n)}function hx(e,n,a){Ji.L(e,n,a);var s=Qr;if(s&&e&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(e)+'"]';var f=c;switch(n){case"style":f=Jr(e);break;case"script":f=$r(e)}di.has(f)||(e=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(yo(f))||(n=s.createElement("link"),Tn(n,"link",e),Ft(n),s.head.appendChild(n)))}}function px(e,n){Ji.m(e,n);var a=Qr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(e)}if(!di.has(f)&&(e=E({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}s=a.createElement("link"),Tn(s,"link",e),Ft(s),a.head.appendChild(s)}}}function mx(e,n,a){Ji.S(e,n,a);var s=Qr;if(s&&e){var c=Wt(s).hoistableStyles,f=Jr(e);n=n||"default";var S=c.get(f);if(!S){var w={loading:0,preload:null};if(S=s.querySelector(xo(f)))w.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Ef(e,a);var F=S=s.createElement("link");Ft(F),Tn(F,"link",e),F._p=new Promise(function($,xt){F.onload=$,F.onerror=xt}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Ol(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:w},c.set(f,S)}}}function gx(e,n){Ji.X(e,n);var a=Qr;if(a&&e){var s=Wt(a).hoistableScripts,c=$r(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=E({src:e,async:!0},n),(n=di.get(c))&&bf(e,n),f=a.createElement("script"),Ft(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function _x(e,n){Ji.M(e,n);var a=Qr;if(a&&e){var s=Wt(a).hoistableScripts,c=$r(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=E({src:e,async:!0,type:"module"},n),(n=di.get(c))&&bf(e,n),f=a.createElement("script"),Ft(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Hm(e,n,a,s){var c=(c=ze.current)?Nl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=Wt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var f=Wt(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(xo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||vx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=Wt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+Rn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function Gm(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function vx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Ft(n),e.head.appendChild(n))}function $r(e){return'[src="'+Rn(e)+'"]'}function yo(e){return"script[async]"+e}function Vm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Ft(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ft(s),Tn(s,"style",c),Ol(s,a.precedence,e),n.instance=s;case"stylesheet":c=Jr(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,Ft(f),f;s=Gm(a),(c=di.get(c))&&Ef(s,c),f=(e.ownerDocument||e).createElement("link"),Ft(f);var S=f;return S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Tn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,e),n.instance=f;case"script":return f=$r(a.src),(c=e.querySelector(yo(f)))?(n.instance=c,Ft(c),c):(s=a,(c=di.get(f))&&(s=E({},a),bf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ft(c),Tn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,e));return n.instance}function Ol(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var w=s[S];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pl=null;function km(e,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[V]||f[Ze]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var w=s.get(S);w?w.push(f):s.set(S,[f])}}return s}function Wm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var So=null;function yx(){}function Sx(e,n,a){if(So===null)throw Error(r(475));var s=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=Jr(a.href),f=e.querySelector(xo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=zl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,Ft(f);return}f=e.ownerDocument||e,a=Gm(a),(c=di.get(c))&&Ef(a,c),f=f.createElement("link"),Ft(f);var S=f;S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=zl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Mx(){if(So===null)throw Error(r(475));var e=So;return e.stylesheets&&e.count===0&&Tf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Tf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function Tf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,n.forEach(Ex,e),Bl=null,zl.call(e))}function Ex(e,n){if(!(n.state.loading&4)){var a=Bl.get(e);if(a)var s=a.get(null);else{a=new Map,Bl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function bx(e,n,a,s,c,f,S,w){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pe(0),this.hiddenUpdates=pe(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function qm(e,n,a,s,c,f,S,w,F,$,xt,Dt){return e=new bx(e,n,a,S,w,F,$,Dt),n=1,f===!0&&(n|=24),f=ui(3,null,null,n),e.current=f,f.stateNode=e,n=nu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},zu(f),e}function Ym(e){return e?(e=Lr,e):Lr}function jm(e,n,a,s,c,f){c=Ym(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(e,s,n),a!==null&&(Pn(a,e,n),ao(a,e,n))}function Zm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Af(e,n){Zm(e,n),(e=e.alternate)&&Zm(e,n)}function Km(e){if(e.tag===13){var n=fa(e,67108864);n!==null&&Pn(n,e,67108864),Af(e,67108864)}}var Fl=!0;function Tx(e,n,a,s){var c=B.T;B.T=null;var f=Y.p;try{Y.p=2,wf(e,n,a,s)}finally{Y.p=f,B.T=c}}function Ax(e,n,a,s){var c=B.T;B.T=null;var f=Y.p;try{Y.p=8,wf(e,n,a,s)}finally{Y.p=f,B.T=c}}function wf(e,n,a,s){if(Fl){var c=Rf(s);if(c===null)mf(e,n,s,Il,a),Jm(e,s);else if(Rx(c,e,n,a,s))s.stopPropagation();else if(Jm(e,s),n&4&&-1<wx.indexOf(e)){for(;c!==null;){var f=yt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Mt(f.pendingLanes);if(S!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var F=1<<31-L(S);w.entanglements[1]|=F,S&=~F}Ui(f),!($e&6)&&(Ml=tt()+500,go(0))}}break;case 13:w=fa(f,2),w!==null&&Pn(w,f,2),Tl(),Af(f,2)}if(f=Rf(s),f===null&&mf(e,n,s,Il,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else mf(e,n,s,null,a)}}function Rf(e){return e=Nc(e),Cf(e)}var Il=null;function Cf(e){if(Il=null,e=X(e),e!==null){var n=it(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=ht(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Il=e,null}function Qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ut()){case dt:return 2;case _t:return 8;case At:case Ut:return 32;case vt:return 268435456;default:return 32}default:return 32}}var Df=!1,Aa=null,wa=null,Ra=null,Eo=new Map,bo=new Map,Ca=[],wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jm(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function To(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=yt(n),n!==null&&Km(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Rx(e,n,a,s,c){switch(n){case"focusin":return Aa=To(Aa,e,n,a,s,c),!0;case"dragenter":return wa=To(wa,e,n,a,s,c),!0;case"mouseover":return Ra=To(Ra,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,To(Eo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,To(bo.get(f)||null,e,n,a,s,c)),!0}return!1}function $m(e){var n=X(e.target);if(n!==null){var a=it(n);if(a!==null){if(n=a.tag,n===13){if(n=ht(a),n!==null){e.blockedOn=n,Bi(e.priority,function(){if(a.tag===13){var s=Jn(),c=fa(a,s);c!==null&&Pn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Rf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=yt(a),n!==null&&Km(n),e.blockedOn=a,!1;n.shift()}return!0}function tg(e,n,a){Hl(e)&&a.delete(n)}function Cx(){Df=!1,Aa!==null&&Hl(Aa)&&(Aa=null),wa!==null&&Hl(wa)&&(wa=null),Ra!==null&&Hl(Ra)&&(Ra=null),Eo.forEach(tg),bo.forEach(tg)}function Gl(e,n){e.blockedOn===n&&(e.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cx)))}var Vl=null;function eg(e){Vl!==e&&(Vl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var f=yt(a);f!==null&&(e.splice(n,3),n-=3,vu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(e){function n(F){return Gl(F,e)}Aa!==null&&Gl(Aa,e),wa!==null&&Gl(wa,e),Ra!==null&&Gl(Ra,e),Eo.forEach(n),bo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[an]||null;if(typeof f=="function")S||eg(a);else if(S){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[an]||null)w=S.formAction;else if(Cf(c)!==null)continue}else w=S.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),eg(a)}}}function Lf(e){this._internalRoot=e}kl.prototype.render=Lf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();jm(a,s,e,n,null,null)},kl.prototype.unmount=Lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&jr(),jm(e.current,2,null,e,null,null),Tl(),n[Xt]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=je();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&$m(e)}};var ng=t.version;if(ng!=="19.0.0")throw Error(r(527,ng,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=J(n),e=e!==null?mt(e):null,e=e===null?null:e.stateNode,e};var Dx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:B,findFiberByHostInstance:X,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Ht=Wl.inject(Dx),Bt=Wl}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=xp,f=yp,S=Sp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=qm(e,1,!1,null,null,a,s,c,f,S,w,null),e[Xt]=n.current,pf(e.nodeType===8?e.parentNode:e),new Lf(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=xp,S=yp,w=Sp,F=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=qm(e,1,!0,n,a??null,s,c,f,S,w,F,$),n.context=Ym(null),a=n.current,s=Jn(),c=va(s),c.callback=null,xa(a,c,s),n.current.lanes=s,ne(n,s),Ui(n),e[Xt]=n.current,pf(e),new kl(n)},Ro.version="19.0.0",Ro}var dg;function Hx(){if(dg)return Of.exports;dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Of.exports=Ix(),Of.exports}var Gx=Hx();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="161",ts={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,hg=1,kx=2,q0=1,Y0=2,aa=3,Va=0,qn=1,Oi=2,Ia=0,Ss=1,gd=2,pg=3,mg=4,Wx=5,pr=100,Xx=101,qx=102,gg=103,_g=104,Yx=200,jx=201,Zx=202,Kx=203,_d=204,vd=205,Qx=206,Jx=207,$x=208,ty=209,ey=210,ny=211,iy=212,ay=213,ry=214,sy=0,oy=1,ly=2,_c=3,cy=4,uy=5,fy=6,dy=7,j0=0,hy=1,py=2,Ha=0,my=1,gy=2,_y=3,vy=4,xy=5,yy=6,Z0=300,bs=301,Ts=302,xd=303,yd=304,Tc=306,Sd=1e3,bi=1001,Md=1002,Fn=1003,vg=1004,Co=1005,Xn=1006,Ff=1007,gr=1008,Ga=1009,Sy=1010,My=1011,Cd=1012,K0=1013,Fa=1014,ra=1015,Fo=1016,Q0=1017,J0=1018,_r=1020,Ey=1021,Ti=1023,by=1024,Ty=1025,vr=1026,As=1027,Ay=1028,$0=1029,wy=1030,t_=1031,e_=1033,If=33776,Hf=33777,Gf=33778,Vf=33779,xg=35840,yg=35841,Sg=35842,Mg=35843,n_=36196,Eg=37492,bg=37496,Tg=37808,Ag=37809,wg=37810,Rg=37811,Cg=37812,Dg=37813,Lg=37814,Ug=37815,Ng=37816,Og=37817,Pg=37818,zg=37819,Bg=37820,Fg=37821,kf=36492,Ig=36494,Hg=36495,Ry=36283,Gg=36284,Vg=36285,kg=36286,i_=3e3,xr=3001,Cy=3200,Dy=3201,a_=0,Ly=1,pi="",An="srgb",oa="srgb-linear",Dd="display-p3",Ac="display-p3-linear",vc="linear",Ye="srgb",xc="rec709",yc="p3",ns=7680,Wg=519,Uy=512,Ny=513,Oy=514,r_=515,Py=516,zy=517,By=518,Fy=519,Xg=35044,qg="300 es",Ed=1035,sa=2e3,Sc=2001;class Mr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Rs(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nn(o,t,i){return Math.max(t,Math.min(i,o))}function Ld(o,t){return(o%t+t)%t}function Iy(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function Hy(o,t,i){return o!==t?(i-o)/(t-o):0}function Bo(o,t,i){return(1-i)*o+i*t}function Gy(o,t,i,r){return Bo(o,t,1-Math.exp(-i*r))}function Vy(o,t=1){return t-Math.abs(Ld(o,t*2)-t)}function ky(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Wy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Xy(o,t){return o+Math.floor(Math.random()*(t-o+1))}function qy(o,t){return o+Math.random()*(t-o)}function Yy(o){return o*(.5-Math.random())}function jy(o){o!==void 0&&(Yg=o);let t=Yg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zy(o){return o*zo}function Ky(o){return o*Io}function bd(o){return(o&o-1)===0&&o!==0}function Qy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Mc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Jy(o,t,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((t+r)/2),g=h((t+r)/2),x=u((t-r)/2),y=h((t-r)/2),M=u((r-t)/2),T=h((r-t)/2);switch(l){case"XYX":o.set(d*g,p*x,p*y,d*m);break;case"YZY":o.set(p*y,d*g,p*x,d*m);break;case"ZXZ":o.set(p*x,p*y,d*g,d*m);break;case"XZX":o.set(d*g,p*T,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*T,d*m);break;case"ZYZ":o.set(p*T,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function vs(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Rs,clamp:Nn,euclideanModulo:Ld,mapLinear:Iy,inverseLerp:Hy,lerp:Bo,damp:Gy,pingpong:Vy,smoothstep:ky,smootherstep:Wy,randInt:Xy,randFloat:qy,randFloatSpread:Yy,seededRandom:jy,degToRad:Zy,radToDeg:Ky,isPowerOfTwo:bd,ceilPowerOfTwo:Qy,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:Jy,normalize:zn,denormalize:vs};class ge{constructor(t=0,i=0){ge.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Nn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(t,i,r,l,u,h,d,p,m){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],x=r[7],y=r[2],M=r[5],T=r[8],R=l[0],v=l[3],_=l[6],z=l[1],D=l[4],P=l[7],W=l[2],k=l[5],I=l[8];return u[0]=h*R+d*z+p*W,u[3]=h*v+d*D+p*k,u[6]=h*_+d*P+p*I,u[1]=m*R+g*z+x*W,u[4]=m*v+g*D+x*k,u[7]=m*_+g*P+x*I,u[2]=y*R+M*z+T*W,u[5]=y*v+M*D+T*k,u[8]=y*_+M*P+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],x=g*h-d*m,y=d*p-g*u,M=m*u-h*p,T=i*x+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(l*m-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=y*R,t[4]=(g*i-l*p)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(r*p-m*i)*R,t[8]=(h*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Wf.makeScale(t,i)),this}rotate(t){return this.premultiply(Wf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Wf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new Ae;function s_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $y(){const o=Ec("canvas");return o.style.display="block",o}const jg={};function Ms(o){o in jg||(jg[o]=!0,console.warn(o))}const Zg=new Ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kg=new Ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[oa]:{transfer:vc,primaries:xc,toReference:o=>o,fromReference:o=>o},[An]:{transfer:Ye,primaries:xc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ac]:{transfer:vc,primaries:yc,toReference:o=>o.applyMatrix3(Kg),fromReference:o=>o.applyMatrix3(Zg)},[Dd]:{transfer:Ye,primaries:yc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Kg),fromReference:o=>o.applyMatrix3(Zg).convertLinearToSRGB()}},tS=new Set([oa,Ac]),Ge={enabled:!0,_workingColorSpace:oa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!tS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const r=Xl[t].toReference,l=Xl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Xl[o].primaries},getTransfer:function(o){return o===pi?vc:Xl[o].transfer}};function Es(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Xf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class o_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=Ec("canvas")),is.width=t.width,is.height=t.height;const r=is.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=is}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ec("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Es(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Es(i[r]/255)*255):i[r]=Es(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eS=0;class l_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(qf(l[h].image)):u.push(qf(l[h]))}else u=qf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?o_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;class Yn extends Mr{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,r=bi,l=bi,u=Xn,h=gr,d=Ti,p=Ga,m=Yn.DEFAULT_ANISOTROPY,g=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Rs(),this.name="",this.source=new l_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===xr?An:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Z0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sd:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sd:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?xr:i_}set encoding(t){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xr?An:pi}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Z0;Yn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],g=p[4],x=p[8],y=p[1],M=p[5],T=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(x-R)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+R)<.1&&Math.abs(T+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,P=(M+1)/2,W=(_+1)/2,k=(g+y)/4,I=(x+R)/4,ft=(T+v)/4;return D>P&&D>W?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=k/r,u=I/r):P>W?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=k/l,u=ft/l):W<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(W),r=I/u,l=ft/u),this.set(r,l,u,i),this}let z=Math.sqrt((v-T)*(v-T)+(x-R)*(x-R)+(y-g)*(y-g));return Math.abs(z)<.001&&(z=1),this.x=(v-T)/z,this.y=(x-R)/z,this.z=(y-g)/z,this.w=Math.acos((m+M+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends Mr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:1};r.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===xr?An:pi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Yn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(t,i,r=1){(this.width!==t||this.height!==i||this.depth!==r)&&(this.width=t,this.height=i,this.depth=r,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new l_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends iS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class c_ extends Yn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aS extends Yn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3];const y=u[h+0],M=u[h+1],T=u[h+2],R=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=R;return}if(x!==R||p!==y||m!==M||g!==T){let v=1-d;const _=p*y+m*M+g*T+x*R,z=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const W=Math.sqrt(D),k=Math.atan2(W,_*z);v=Math.sin(v*k)/W,d=Math.sin(d*k)/W}const P=d*z;if(p=p*v+y*P,m=m*v+M*P,g=g*v+T*P,x=x*v+R*P,v===1-d){const W=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=W,m*=W,g*=W,x*=W}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=u[h],y=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+g*x+p*M-m*y,t[i+1]=p*T+g*y+m*x-d*M,t[i+2]=m*T+g*M+d*y-p*x,t[i+3]=g*T-d*x-p*y-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),x=d(u/2),y=p(r/2),M=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=y*g*x+m*M*T,this._y=m*M*x-y*g*T,this._z=m*g*T+y*M*x,this._w=m*g*x-y*M*T;break;case"YXZ":this._x=y*g*x+m*M*T,this._y=m*M*x-y*g*T,this._z=m*g*T-y*M*x,this._w=m*g*x+y*M*T;break;case"ZXY":this._x=y*g*x-m*M*T,this._y=m*M*x+y*g*T,this._z=m*g*T+y*M*x,this._w=m*g*x-y*M*T;break;case"ZYX":this._x=y*g*x-m*M*T,this._y=m*M*x+y*g*T,this._z=m*g*T-y*M*x,this._w=m*g*x+y*M*T;break;case"YZX":this._x=y*g*x+m*M*T,this._y=m*M*x+y*g*T,this._z=m*g*T-y*M*x,this._w=m*g*x-y*M*T;break;case"XZY":this._x=y*g*x-m*M*T,this._y=m*M*x-y*g*T,this._z=m*g*T+y*M*x,this._w=m*g*x+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],x=i[10],y=r+d+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=h*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Qg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Qg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+p*m+h*x-d*g,this.y=r+p*g+d*m-u*x,this.z=l+p*x+u*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Yf.copy(this).projectOnVector(t),this.sub(Yf)}reflect(t){return this.sub(Yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Nn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new Z,Qg=new Sr;class Ho{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Si):Si.fromBufferAttribute(u,h),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),Yl.subVectors(this.max,Do),as.subVectors(t.a,Do),rs.subVectors(t.b,Do),ss.subVectors(t.c,Do),La.subVectors(rs,as),Ua.subVectors(ss,rs),lr.subVectors(as,ss);let i=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-lr.z,lr.y,La.z,0,-La.x,Ua.z,0,-Ua.x,lr.z,0,-lr.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-lr.y,lr.x,0];return!jf(i,as,rs,ss,Yl)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,as,rs,ss,Yl))?!1:(jl.crossVectors(La,Ua),i=[jl.x,jl.y,jl.z],jf(i,as,rs,ss,Yl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Si=new Z,ql=new Ho,as=new Z,rs=new Z,ss=new Z,La=new Z,Ua=new Z,lr=new Z,Do=new Z,Yl=new Z,jl=new Z,cr=new Z;function jf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),p=t.dot(cr),m=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const rS=new Ho,Lo=new Z,Zf=new Z;class wc{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):rS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(Zf)),this.expandByPoint(Lo.copy(t.center).sub(Zf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new Z,Kf=new Z,Zl=new Z,Na=new Z,Qf=new Z,Kl=new Z,Jf=new Z;class Ud{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Kf.copy(t).add(i).multiplyScalar(.5),Zl.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(Kf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Zl),d=Na.dot(this.direction),p=-Na.dot(Zl),m=Na.lengthSq(),g=Math.abs(1-h*h);let x,y,M,T;if(g>0)if(x=h*p-d,y=h*d-p,T=u*g,x>=0)if(y>=-T)if(y<=T){const R=1/g;x*=R,y*=R,M=x*(x+h*y+2*d)+y*(h*x+y+2*p)+m}else y=u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*p)+m;else y<=-T?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+y*(y+2*p)+m):y<=T?(x=0,y=Math.min(Math.max(-u,-p),u),M=y*(y+2*p)+m):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+y*(y+2*p)+m);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Kf).addScaledVector(Zl,y),M}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,p=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,p=(t.min.z-y.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){Qf.subVectors(i,t),Kl.subVectors(r,t),Jf.crossVectors(Qf,Kl);let h=this.direction.dot(Jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const p=d*this.direction.dot(Kl.crossVectors(Na,Kl));if(p<0)return null;const m=d*this.direction.dot(Qf.cross(Na));if(m<0||p+m>h)return null;const g=-d*Na.dot(Jf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,r,l,u,h,d,p,m,g,x,y,M,T,R,v){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,g,x,y,M,T,R,v)}set(t,i,r,l,u,h,d,p,m,g,x,y,M,T,R,v){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=y,_[3]=M,_[7]=T,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/os.setFromMatrixColumn(t,0).length(),u=1/os.setFromMatrixColumn(t,1).length(),h=1/os.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=h*g,M=h*x,T=d*g,R=d*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=M+T*m,i[5]=y-R*m,i[9]=-d*p,i[2]=R-y*m,i[6]=T+M*m,i[10]=h*p}else if(t.order==="YXZ"){const y=p*g,M=p*x,T=m*g,R=m*x;i[0]=y+R*d,i[4]=T*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-T,i[6]=R+y*d,i[10]=h*p}else if(t.order==="ZXY"){const y=p*g,M=p*x,T=m*g,R=m*x;i[0]=y-R*d,i[4]=-h*x,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*g,i[9]=R-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const y=h*g,M=h*x,T=d*g,R=d*x;i[0]=p*g,i[4]=T*m-M,i[8]=y*m+R,i[1]=p*x,i[5]=R*m+y,i[9]=M*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const y=h*p,M=h*m,T=d*p,R=d*m;i[0]=p*g,i[4]=R-y*x,i[8]=T*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*x+T,i[10]=y-R*x}else if(t.order==="XZY"){const y=h*p,M=h*m,T=d*p,R=d*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=y*x+R,i[5]=h*g,i[9]=M*x-T,i[2]=T*x-M,i[6]=d*g,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sS,t,oS)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Oa.crossVectors(r,$n),Oa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Oa.crossVectors(r,$n)),Oa.normalize(),Ql.crossVectors($n,Oa),l[0]=Oa.x,l[4]=Ql.x,l[8]=$n.x,l[1]=Oa.y,l[5]=Ql.y,l[9]=$n.y,l[2]=Oa.z,l[6]=Ql.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],x=r[5],y=r[9],M=r[13],T=r[2],R=r[6],v=r[10],_=r[14],z=r[3],D=r[7],P=r[11],W=r[15],k=l[0],I=l[4],ft=l[8],B=l[12],E=l[1],O=l[5],ct=l[9],St=l[13],q=l[2],rt=l[6],G=l[10],ot=l[14],it=l[3],ht=l[7],C=l[11],J=l[15];return u[0]=h*k+d*E+p*q+m*it,u[4]=h*I+d*O+p*rt+m*ht,u[8]=h*ft+d*ct+p*G+m*C,u[12]=h*B+d*St+p*ot+m*J,u[1]=g*k+x*E+y*q+M*it,u[5]=g*I+x*O+y*rt+M*ht,u[9]=g*ft+x*ct+y*G+M*C,u[13]=g*B+x*St+y*ot+M*J,u[2]=T*k+R*E+v*q+_*it,u[6]=T*I+R*O+v*rt+_*ht,u[10]=T*ft+R*ct+v*G+_*C,u[14]=T*B+R*St+v*ot+_*J,u[3]=z*k+D*E+P*q+W*it,u[7]=z*I+D*O+P*rt+W*ht,u[11]=z*ft+D*ct+P*G+W*C,u[15]=z*B+D*St+P*ot+W*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],x=t[6],y=t[10],M=t[14],T=t[3],R=t[7],v=t[11],_=t[15];return T*(+u*p*x-l*m*x-u*d*y+r*m*y+l*d*M-r*p*M)+R*(+i*p*M-i*m*y+u*h*y-l*h*M+l*m*g-u*p*g)+v*(+i*m*x-i*d*M-u*h*x+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*x+i*d*y+l*h*x-r*h*y+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],x=t[9],y=t[10],M=t[11],T=t[12],R=t[13],v=t[14],_=t[15],z=x*v*m-R*y*m+R*p*M-d*v*M-x*p*_+d*y*_,D=T*y*m-g*v*m-T*p*M+h*v*M+g*p*_-h*y*_,P=g*R*m-T*x*m+T*d*M-h*R*M-g*d*_+h*x*_,W=T*x*p-g*R*p-T*d*y+h*R*y+g*d*v-h*x*v,k=i*z+r*D+l*P+u*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=z*I,t[1]=(R*y*u-x*v*u-R*l*M+r*v*M+x*l*_-r*y*_)*I,t[2]=(d*v*u-R*p*u+R*l*m-r*v*m-d*l*_+r*p*_)*I,t[3]=(x*p*u-d*y*u-x*l*m+r*y*m+d*l*M-r*p*M)*I,t[4]=D*I,t[5]=(g*v*u-T*y*u+T*l*M-i*v*M-g*l*_+i*y*_)*I,t[6]=(T*p*u-h*v*u-T*l*m+i*v*m+h*l*_-i*p*_)*I,t[7]=(h*y*u-g*p*u+g*l*m-i*y*m-h*l*M+i*p*M)*I,t[8]=P*I,t[9]=(T*x*u-g*R*u-T*r*M+i*R*M+g*r*_-i*x*_)*I,t[10]=(h*R*u-T*d*u+T*r*m-i*R*m-h*r*_+i*d*_)*I,t[11]=(g*d*u-h*x*u-g*r*m+i*x*m+h*r*M-i*d*M)*I,t[12]=W*I,t[13]=(g*R*l-T*x*l+T*r*y-i*R*y-g*r*v+i*x*v)*I,t[14]=(T*d*l-h*R*l-T*r*p+i*R*p+h*r*v-i*d*v)*I,t[15]=(h*x*l-g*d*l+g*r*p-i*x*p-h*r*y+i*d*y)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,x=d+d,y=u*m,M=u*g,T=u*x,R=h*g,v=h*x,_=d*x,z=p*m,D=p*g,P=p*x,W=r.x,k=r.y,I=r.z;return l[0]=(1-(R+_))*W,l[1]=(M+P)*W,l[2]=(T-D)*W,l[3]=0,l[4]=(M-P)*k,l[5]=(1-(y+_))*k,l[6]=(v+z)*k,l[7]=0,l[8]=(T+D)*I,l[9]=(v-z)*I,l[10]=(1-(y+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const m=1/u,g=1/h,x=1/d;return Mi.elements[0]*=m,Mi.elements[1]*=m,Mi.elements[2]*=m,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=x,Mi.elements[9]*=x,Mi.elements[10]*=x,i.setFromRotationMatrix(Mi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=sa){const p=this.elements,m=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let M,T;if(d===sa)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Sc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=sa){const p=this.elements,m=1/(i-t),g=1/(r-l),x=1/(h-u),y=(i+t)*m,M=(r+l)*g;let T,R;if(d===sa)T=(h+u)*x,R=-2*x;else if(d===Sc)T=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const os=new Z,Mi=new ln,sS=new Z(0,0,0),oS=new Z(1,1,1),Oa=new Z,Ql=new Z,$n=new Z,Jg=new ln,$g=new Sr;class Rc{constructor(t=0,i=0,r=0,l=Rc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $g.setFromEuler(this),this.setFromQuaternion($g,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rc.DEFAULT_ORDER="XYZ";class u_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lS=0;const t0=new Z,ls=new Sr,ea=new ln,Jl=new Z,Uo=new Z,cS=new Z,uS=new Sr,e0=new Z(1,0,0),n0=new Z(0,1,0),i0=new Z(0,0,1),fS={type:"added"},dS={type:"removed"};class wn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Z,i=new Rc,r=new Sr,l=new Z(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new Ae}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(e0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(i0,t)}translateOnAxis(t,i){return t0.copy(t).applyQuaternion(this.quaternion),this.position.add(t0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(e0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(i0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jl.copy(t):Jl.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Uo,Jl,this.up):ea.lookAt(Jl,Uo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(ea),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(fS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dS)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,cS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,uS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),x=h(t.shapes),y=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Z(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Z,na=new Z,$f=new Z,ia=new Z,cs=new Z,us=new Z,a0=new Z,td=new Z,ed=new Z,nd=new Z;class Pi{constructor(t=new Z,i=new Z,r=new Z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),na.subVectors(r,i),$f.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(na),p=Ei.dot($f),m=na.dot(na),g=na.dot($f),x=h*m-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(m*p-d*g)*y,T=(h*g-d*p)*y;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(h,ia.y),p.addScaledVector(d,ia.z),p)}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),na.subVectors(t,i),Ei.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Ei.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;cs.subVectors(l,r),us.subVectors(u,r),td.subVectors(t,r);const p=cs.dot(td),m=us.dot(td);if(p<=0&&m<=0)return i.copy(r);ed.subVectors(t,l);const g=cs.dot(ed),x=us.dot(ed);if(g>=0&&x<=g)return i.copy(l);const y=p*x-g*m;if(y<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(cs,h);nd.subVectors(t,u);const M=cs.dot(nd),T=us.dot(nd);if(T>=0&&M<=T)return i.copy(u);const R=M*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(r).addScaledVector(us,d);const v=g*T-M*x;if(v<=0&&x-g>=0&&M-T>=0)return a0.subVectors(u,l),d=(x-g)/(x-g+(M-T)),i.copy(l).addScaledVector(a0,d);const _=1/(v+R+y);return h=R*_,d=y*_,i.copy(r).addScaledVector(cs,h).addScaledVector(us,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const f_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},$l={h:0,s:0,l:0};function id(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ge.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ge.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ge.workingColorSpace){if(t=Ld(t,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=id(h,u,t+1/3),this.g=id(h,u,t),this.b=id(h,u,t-1/3)}return Ge.toWorkingColorSpace(this,l),this}setStyle(t,i=An){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=An){const r=f_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=Xf(t.r),this.g=Xf(t.g),this.b=Xf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Ge.fromWorkingColorSpace(Un.copy(this),t),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=An){Ge.fromWorkingColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==An?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL($l);const r=Bo(Pa.h,$l.h,i),l=Bo(Pa.s,$l.s,i),u=Bo(Pa.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new De;De.NAMES=f_;let hS=0;class Cs extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Ss,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_d&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_c&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class d_ extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Z,tc=new ge;class zi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Xg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ms("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(t),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=vs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=vs(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=vs(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=vs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=vs(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xg&&(t.usage=this.usage),t}}class h_ extends zi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class p_ extends zi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class In extends zi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let pS=0;const hi=new ln,ad=new wn,fs=new Z,ti=new Ho,No=new Ho,Sn=new Z;class Ai extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s_(t)?p_:h_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Ae().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return ad.lookAt(t),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new In(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ti.min,No.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,No.max),ti.expandByPoint(Sn)):(ti.expandByPoint(No.min),ti.expandByPoint(No.max))}ti.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(fs.fromBufferAttribute(t,m),Sn.add(fs)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let E=0;E<d;E++)m[E]=new Z,g[E]=new Z;const x=new Z,y=new Z,M=new Z,T=new ge,R=new ge,v=new ge,_=new Z,z=new Z;function D(E,O,ct){x.fromArray(l,E*3),y.fromArray(l,O*3),M.fromArray(l,ct*3),T.fromArray(h,E*2),R.fromArray(h,O*2),v.fromArray(h,ct*2),y.sub(x),M.sub(x),R.sub(T),v.sub(T);const St=1/(R.x*v.y-v.x*R.y);isFinite(St)&&(_.copy(y).multiplyScalar(v.y).addScaledVector(M,-R.y).multiplyScalar(St),z.copy(M).multiplyScalar(R.x).addScaledVector(y,-v.x).multiplyScalar(St),m[E].add(_),m[O].add(_),m[ct].add(_),g[E].add(z),g[O].add(z),g[ct].add(z))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let E=0,O=P.length;E<O;++E){const ct=P[E],St=ct.start,q=ct.count;for(let rt=St,G=St+q;rt<G;rt+=3)D(r[rt+0],r[rt+1],r[rt+2])}const W=new Z,k=new Z,I=new Z,ft=new Z;function B(E){I.fromArray(u,E*3),ft.copy(I);const O=m[E];W.copy(O),W.sub(I.multiplyScalar(I.dot(O))).normalize(),k.crossVectors(ft,O);const St=k.dot(g[E])<0?-1:1;p[E*4]=W.x,p[E*4+1]=W.y,p[E*4+2]=W.z,p[E*4+3]=St}for(let E=0,O=P.length;E<O;++E){const ct=P[E],St=ct.start,q=ct.count;for(let rt=St,G=St+q;rt<G;rt+=3)B(r[rt+0]),B(r[rt+1]),B(r[rt+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new Z,u=new Z,h=new Z,d=new Z,p=new Z,m=new Z,g=new Z,x=new Z;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),R=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,x=d.normalized,y=new m.constructor(p.length*g);let M=0,T=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?M=p[R]*d.data.stride+d.offset:M=p[R]*g;for(let _=0;_<g;_++)y[T++]=m[M++]}return new zi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ai,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,x=m.length;g<x;g++){const y=m[g],M=t(y,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,y=m.length;x<y;x++){const M=m[x];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],x=u[m];for(let y=0,M=x.length;y<M;y++)g.push(x[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new ln,ur=new Ud,ec=new wc,s0=new Z,ds=new Z,hs=new Z,ps=new Z,rd=new Z,nc=new Z,ic=new ge,ac=new ge,rc=new ge,o0=new Z,l0=new Z,c0=new Z,sc=new Z,oc=new Z;class ni extends wn{constructor(t=new Ai,i=new d_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){nc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],x=u[p];g!==0&&(rd.fromBufferAttribute(x,t),h?nc.addScaledVector(rd,g):nc.addScaledVector(rd.sub(i),g))}i.add(nc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(ec.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ec,s0)===null||ur.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(r0.copy(u).invert(),ur.copy(t.ray).applyMatrix4(r0),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=y.length;T<R;T++){const v=y[T],_=h[v.materialIndex],z=Math.max(v.start,M.start),D=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let P=z,W=D;P<W;P+=3){const k=d.getX(P),I=d.getX(P+1),ft=d.getX(P+2);l=lc(this,_,t,r,m,g,x,k,I,ft),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=T,_=R;v<_;v+=3){const z=d.getX(v),D=d.getX(v+1),P=d.getX(v+2);l=lc(this,h,t,r,m,g,x,z,D,P),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,R=y.length;T<R;T++){const v=y[T],_=h[v.materialIndex],z=Math.max(v.start,M.start),D=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let P=z,W=D;P<W;P+=3){const k=P,I=P+1,ft=P+2;l=lc(this,_,t,r,m,g,x,k,I,ft),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=T,_=R;v<_;v+=3){const z=v,D=v+1,P=v+2;l=lc(this,h,t,r,m,g,x,z,D,P),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function mS(o,t,i,r,l,u,h,d){let p;if(t.side===qn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===Va,d),p===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(oc);return m<i.near||m>i.far?null:{distance:m,point:oc.clone(),object:o}}function lc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,ds),o.getVertexPosition(p,hs),o.getVertexPosition(m,ps);const g=mS(o,t,i,r,ds,hs,ps,sc);if(g){l&&(ic.fromBufferAttribute(l,d),ac.fromBufferAttribute(l,p),rc.fromBufferAttribute(l,m),g.uv=Pi.getInterpolation(sc,ds,hs,ps,ic,ac,rc,new ge)),u&&(ic.fromBufferAttribute(u,d),ac.fromBufferAttribute(u,p),rc.fromBufferAttribute(u,m),g.uv1=Pi.getInterpolation(sc,ds,hs,ps,ic,ac,rc,new ge),g.uv2=g.uv1),h&&(o0.fromBufferAttribute(h,d),l0.fromBufferAttribute(h,p),c0.fromBufferAttribute(h,m),g.normal=Pi.getInterpolation(sc,ds,hs,ps,o0,l0,c0,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Z,materialIndex:0};Pi.getNormal(ds,hs,ps,x.normal),g.face=x}return g}class Ds extends Ai{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],x=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new In(m,3)),this.setAttribute("normal",new In(g,3)),this.setAttribute("uv",new In(x,2));function T(R,v,_,z,D,P,W,k,I,ft,B){const E=P/I,O=W/ft,ct=P/2,St=W/2,q=k/2,rt=I+1,G=ft+1;let ot=0,it=0;const ht=new Z;for(let C=0;C<G;C++){const J=C*O-St;for(let mt=0;mt<rt;mt++){const Lt=mt*E-ct;ht[R]=Lt*z,ht[v]=J*D,ht[_]=q,m.push(ht.x,ht.y,ht.z),ht[R]=0,ht[v]=0,ht[_]=k>0?1:-1,g.push(ht.x,ht.y,ht.z),x.push(mt/I),x.push(1-C/ft),ot+=1}}for(let C=0;C<ft;C++)for(let J=0;J<I;J++){const mt=y+J+rt*C,Lt=y+J+rt*(C+1),Y=y+(J+1)+rt*(C+1),pt=y+(J+1)+rt*C;p.push(mt,Lt,pt),p.push(Lt,Y,pt),it+=6}d.addGroup(M,it,B),M+=it,y+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Bn(o){const t={};for(let i=0;i<o.length;i++){const r=ws(o[i]);for(const l in r)t[l]=r[l]}return t}function gS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function m_(o){return o.getRenderTarget()===null?o.outputColorSpace:Ge.workingColorSpace}const _S={clone:ws,merge:Bn};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=gS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class g_ extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new Z,u0=new ge,f0=new ge;class ei extends g_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,u0,f0),i.subVectors(f0,u0)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class yS extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(ms,gs,t,i);l.layers=this.layers,this.add(l);const u=new ei(ms,gs,t,i);u.layers=this.layers,this.add(u);const h=new ei(ms,gs,t,i);h.layers=this.layers,this.add(h);const d=new ei(ms,gs,t,i);d.layers=this.layers,this.add(d);const p=new ei(ms,gs,t,i);p.layers=this.layers,this.add(p);const m=new ei(ms,gs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class __ extends Yn{constructor(t,i,r,l,u,h,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:bs,super(t,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class SS extends yr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?An:pi),this.texture=new __(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Xn}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ds(5,5,5),u=new la({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new ni(l,u),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=Xn),new yS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}const sd=new Z,MS=new Z,ES=new Ae;class Ba{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=sd.subVectors(r,i).cross(MS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||ES.getNormalMatrix(t),l=this.coplanarPoint(sd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new wc,cc=new Z;class Nd{constructor(t=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],x=l[6],y=l[7],M=l[8],T=l[9],R=l[10],v=l[11],_=l[12],z=l[13],D=l[14],P=l[15];if(r[0].setComponents(p-u,y-m,v-M,P-_).normalize(),r[1].setComponents(p+u,y+m,v+M,P+_).normalize(),r[2].setComponents(p+h,y+g,v+T,P+z).normalize(),r[3].setComponents(p-h,y-g,v-T,P-z).normalize(),r[4].setComponents(p-d,y-x,v-R,P-D).normalize(),i===sa)r[5].setComponents(p+d,y+x,v+R,P+D).normalize();else if(i===Sc)r[5].setComponents(d,x,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?t.max.x:t.min.x,cc.y=l.normal.y>0?t.max.y:t.min.y,cc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v_(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function bS(o,t){const i=t.isWebGL2,r=new WeakMap;function l(m,g){const x=m.array,y=m.usage,M=x.byteLength,T=o.createBuffer();o.bindBuffer(g,T),o.bufferData(g,x,y),m.onUploadCallback();let R;if(x instanceof Float32Array)R=o.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)R=o.SHORT;else if(x instanceof Uint32Array)R=o.UNSIGNED_INT;else if(x instanceof Int32Array)R=o.INT;else if(x instanceof Int8Array)R=o.BYTE;else if(x instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:T,type:R,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,x){const y=g.array,M=g._updateRange,T=g.updateRanges;if(o.bindBuffer(x,m),M.count===-1&&T.length===0&&o.bufferSubData(x,0,y),T.length!==0){for(let R=0,v=T.length;R<v;R++){const _=T[R];i?o.bufferSubData(x,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):o.bufferSubData(x,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const y=r.get(m);(!y||y.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);if(x===void 0)r.set(m,l(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,m,g),x.version=m.version}}return{get:h,remove:d,update:p}}class Go extends Ai{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,x=t/d,y=i/p,M=[],T=[],R=[],v=[];for(let _=0;_<g;_++){const z=_*y-h;for(let D=0;D<m;D++){const P=D*x-u;T.push(P,-z,0),R.push(0,0,1),v.push(D/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let z=0;z<d;z++){const D=z+m*_,P=z+m*(_+1),W=z+1+m*(_+1),k=z+1+m*_;M.push(D,P,k),M.push(P,W,k)}this.setIndex(M),this.setAttribute("position",new In(T,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.widthSegments,t.heightSegments)}}var TS=`#ifdef USE_ALPHAHASH
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
}`,Ee={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:wS,alphamap_pars_fragment:RS,alphatest_fragment:CS,alphatest_pars_fragment:DS,aomap_fragment:LS,aomap_pars_fragment:US,batching_pars_vertex:NS,batching_vertex:OS,begin_vertex:PS,beginnormal_vertex:zS,bsdfs:BS,iridescence_fragment:FS,bumpmap_pars_fragment:IS,clipping_planes_fragment:HS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:kS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:qS,color_vertex:YS,common:jS,cube_uv_reflection_fragment:ZS,defaultnormal_vertex:KS,displacementmap_pars_vertex:QS,displacementmap_vertex:JS,emissivemap_fragment:$S,emissivemap_pars_fragment:tM,colorspace_fragment:eM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:aM,envmap_pars_fragment:rM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_fragment:hM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:_M,lights_toon_fragment:xM,lights_toon_pars_fragment:yM,lights_phong_fragment:SM,lights_phong_pars_fragment:MM,lights_physical_fragment:EM,lights_physical_pars_fragment:bM,lights_fragment_begin:TM,lights_fragment_maps:AM,lights_fragment_end:wM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:LM,map_fragment:UM,map_pars_fragment:NM,map_particle_fragment:OM,map_particle_pars_fragment:PM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:BM,morphcolor_vertex:FM,morphnormal_vertex:IM,morphtarget_pars_vertex:HM,morphtarget_vertex:GM,normal_fragment_begin:VM,normal_fragment_maps:kM,normal_pars_fragment:WM,normal_pars_vertex:XM,normal_vertex:qM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:QM,opaque_fragment:JM,packing:$M,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:dE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:_E,transmission_fragment:vE,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:EE,background_vert:bE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:wE,cube_vert:RE,cube_frag:CE,depth_vert:DE,depth_frag:LE,distanceRGBA_vert:UE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:WE,meshnormal_frag:XE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:jE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tb,shadow_frag:eb,sprite_vert:nb,sprite_frag:ib},It={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},Ni={basic:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new De(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Bn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Bn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new De(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Bn([It.points,It.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Bn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Bn([It.common,It.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Bn([It.sprite,It.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Bn([It.common,It.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Bn([It.lights,It.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ni.physical={uniforms:Bn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const uc={r:0,b:0,g:0};function ab(o,t,i,r,l,u,h){const d=new De(0);let p=u===!0?0:1,m,g,x=null,y=0,M=null;function T(v,_){let z=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:t).get(D)),D===null?R(d,p):D&&D.isColor&&(R(D,1),z=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||z)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Tc)?(g===void 0&&(g=new ni(new Ds(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:ws(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ge.getTransfer(D.colorSpace)!==Ye,(x!==D||y!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=D,y=D.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ni(new Go(2,2),new la({name:"BackgroundMaterial",uniforms:ws(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ge.getTransfer(D.colorSpace)!==Ye,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||y!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=D,y=D.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(uc,m_(o)),r.buffers.color.setClear(uc.r,uc.g,uc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,R(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(d,p)},render:T}}function rb(o,t,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:t.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function x(q,rt,G,ot,it){let ht=!1;if(h){const C=R(ot,G,rt);m!==C&&(m=C,M(m.object)),ht=_(q,ot,G,it),ht&&z(q,ot,G,it)}else{const C=rt.wireframe===!0;(m.geometry!==ot.id||m.program!==G.id||m.wireframe!==C)&&(m.geometry=ot.id,m.program=G.id,m.wireframe=C,ht=!0)}it!==null&&i.update(it,o.ELEMENT_ARRAY_BUFFER),(ht||g)&&(g=!1,ft(q,rt,G,ot),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(it).buffer))}function y(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(q){return r.isWebGL2?o.bindVertexArray(q):u.bindVertexArrayOES(q)}function T(q){return r.isWebGL2?o.deleteVertexArray(q):u.deleteVertexArrayOES(q)}function R(q,rt,G){const ot=G.wireframe===!0;let it=d[q.id];it===void 0&&(it={},d[q.id]=it);let ht=it[rt.id];ht===void 0&&(ht={},it[rt.id]=ht);let C=ht[ot];return C===void 0&&(C=v(y()),ht[ot]=C),C}function v(q){const rt=[],G=[],ot=[];for(let it=0;it<l;it++)rt[it]=0,G[it]=0,ot[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:G,attributeDivisors:ot,object:q,attributes:{},index:null}}function _(q,rt,G,ot){const it=m.attributes,ht=rt.attributes;let C=0;const J=G.getAttributes();for(const mt in J)if(J[mt].location>=0){const Y=it[mt];let pt=ht[mt];if(pt===void 0&&(mt==="instanceMatrix"&&q.instanceMatrix&&(pt=q.instanceMatrix),mt==="instanceColor"&&q.instanceColor&&(pt=q.instanceColor)),Y===void 0||Y.attribute!==pt||pt&&Y.data!==pt.data)return!0;C++}return m.attributesNum!==C||m.index!==ot}function z(q,rt,G,ot){const it={},ht=rt.attributes;let C=0;const J=G.getAttributes();for(const mt in J)if(J[mt].location>=0){let Y=ht[mt];Y===void 0&&(mt==="instanceMatrix"&&q.instanceMatrix&&(Y=q.instanceMatrix),mt==="instanceColor"&&q.instanceColor&&(Y=q.instanceColor));const pt={};pt.attribute=Y,Y&&Y.data&&(pt.data=Y.data),it[mt]=pt,C++}m.attributes=it,m.attributesNum=C,m.index=ot}function D(){const q=m.newAttributes;for(let rt=0,G=q.length;rt<G;rt++)q[rt]=0}function P(q){W(q,0)}function W(q,rt){const G=m.newAttributes,ot=m.enabledAttributes,it=m.attributeDivisors;G[q]=1,ot[q]===0&&(o.enableVertexAttribArray(q),ot[q]=1),it[q]!==rt&&((r.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,rt),it[q]=rt)}function k(){const q=m.newAttributes,rt=m.enabledAttributes;for(let G=0,ot=rt.length;G<ot;G++)rt[G]!==q[G]&&(o.disableVertexAttribArray(G),rt[G]=0)}function I(q,rt,G,ot,it,ht,C){C===!0?o.vertexAttribIPointer(q,rt,G,it,ht):o.vertexAttribPointer(q,rt,G,ot,it,ht)}function ft(q,rt,G,ot){if(r.isWebGL2===!1&&(q.isInstancedMesh||ot.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;D();const it=ot.attributes,ht=G.getAttributes(),C=rt.defaultAttributeValues;for(const J in ht){const mt=ht[J];if(mt.location>=0){let Lt=it[J];if(Lt===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(Lt=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(Lt=q.instanceColor)),Lt!==void 0){const Y=Lt.normalized,pt=Lt.itemSize,Rt=i.get(Lt);if(Rt===void 0)continue;const Yt=Rt.buffer,Pt=Rt.type,zt=Rt.bytesPerElement,$t=r.isWebGL2===!0&&(Pt===o.INT||Pt===o.UNSIGNED_INT||Lt.gpuType===K0);if(Lt.isInterleavedBufferAttribute){const ie=Lt.data,nt=ie.stride,ze=Lt.offset;if(ie.isInstancedInterleavedBuffer){for(let ae=0;ae<mt.locationSize;ae++)W(mt.location+ae,ie.meshPerAttribute);q.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<mt.locationSize;ae++)P(mt.location+ae);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ae=0;ae<mt.locationSize;ae++)I(mt.location+ae,pt/mt.locationSize,Pt,Y,nt*zt,(ze+pt/mt.locationSize*ae)*zt,$t)}else{if(Lt.isInstancedBufferAttribute){for(let ie=0;ie<mt.locationSize;ie++)W(mt.location+ie,Lt.meshPerAttribute);q.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let ie=0;ie<mt.locationSize;ie++)P(mt.location+ie);o.bindBuffer(o.ARRAY_BUFFER,Yt);for(let ie=0;ie<mt.locationSize;ie++)I(mt.location+ie,pt/mt.locationSize,Pt,Y,pt*zt,pt/mt.locationSize*ie*zt,$t)}}else if(C!==void 0){const Y=C[J];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(mt.location,Y);break;case 3:o.vertexAttrib3fv(mt.location,Y);break;case 4:o.vertexAttrib4fv(mt.location,Y);break;default:o.vertexAttrib1fv(mt.location,Y)}}}}k()}function B(){ct();for(const q in d){const rt=d[q];for(const G in rt){const ot=rt[G];for(const it in ot)T(ot[it].object),delete ot[it];delete rt[G]}delete d[q]}}function E(q){if(d[q.id]===void 0)return;const rt=d[q.id];for(const G in rt){const ot=rt[G];for(const it in ot)T(ot[it].object),delete ot[it];delete rt[G]}delete d[q.id]}function O(q){for(const rt in d){const G=d[rt];if(G[q.id]===void 0)continue;const ot=G[q.id];for(const it in ot)T(ot[it].object),delete ot[it];delete G[q.id]}}function ct(){St(),g=!0,m!==p&&(m=p,M(m.object))}function St(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ct,resetDefaultState:St,dispose:B,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:P,disableUnusedAttributes:k}}function sb(o,t,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function p(g,x,y){if(y===0)return;let M,T;if(l)M=o,T="drawArraysInstanced";else if(M=t.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[T](u,g,x,y),i.update(x,u,y)}function m(g,x,y){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<y;T++)this.render(g[T],x[T]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,y);let T=0;for(let R=0;R<y;R++)T+=x[R];i.update(T,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function ob(o,t,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,P=h||t.has("OES_texture_float"),W=D&&P,k=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:T,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:z,vertexTextures:D,floatFragmentTextures:P,floatVertexTextures:W,maxSamples:k}}function lb(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Ba,d=new Ae,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||r!==0||l;return l=y,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,M){const T=x.clippingPlanes,R=x.clipIntersection,v=x.clipShadows,_=o.get(x);if(!l||T===null||T.length===0||u&&!v)u?g(null):m();else{const z=u?0:r,D=z*4;let P=_.clippingState||null;p.value=P,P=g(T,y,D,M);for(let W=0;W!==D;++W)P[W]=i[W];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,M,T){const R=x!==null?x.length:0;let v=null;if(R!==0){if(v=p.value,T!==!0||v===null){const _=M+R*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,P=M;D!==R;++D,P+=4)h.copy(x[D]).applyMatrix4(z,d),h.normal.toArray(v,P),v[P+3]=h.constant}p.value=v,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,v}}function cb(o){let t=new WeakMap;function i(h,d){return d===xd?h.mapping=bs:d===yd&&(h.mapping=Ts),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===xd||d===yd)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new SS(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class x_ extends g_{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xs=4,d0=[.125,.215,.35,.446,.526,.582],mr=20,od=new x_,h0=new De;let ld=null,cd=0,ud=0;const hr=(1+Math.sqrt(5))/2,_s=1/hr,p0=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,hr,_s),new Z(0,hr,-_s),new Z(_s,0,hr),new Z(-_s,0,hr),new Z(hr,_s,0),new Z(-hr,_s,0)];class m0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ld,cd,ud),t.scissorTest=!1,fc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Fo,format:Ti,colorSpace:oa,depthBuffer:!1},l=g0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ub(u)),this._blurMaterial=fb(u,t,i)}return l}_compileMaterial(t){const i=new ni(this._lodPlanes[0],t);this._renderer.compile(i,od)}_sceneToCubeUV(t,i,r,l){const d=new ei(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(h0),g.toneMapping=Ha,g.autoClear=!1;const M=new d_({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new ni(new Ds,M);let R=!1;const v=t.background;v?v.isColor&&(M.color.copy(v),t.background=null,R=!0):(M.color.copy(h0),R=!0);for(let _=0;_<6;_++){const z=_%3;z===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):z===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;fc(l,z*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(T,d),g.render(t,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===bs||t.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;fc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,od)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=p0[(l-1)%p0.length];this._blur(t,l-1,l,u,h)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ni(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),R=u/T,v=isFinite(u)?1+Math.floor(g*R):mr;v>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${mr}`);const _=[];let z=0;for(let I=0;I<mr;++I){const ft=I/R,B=Math.exp(-ft*ft/2);_.push(B),I===0?z+=B:I<v&&(z+=2*B)}for(let I=0;I<_.length;I++)_[I]=_[I]/z;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-r;const P=this._sizeLods[l],W=3*P*(l>D-xs?l-D+xs:0),k=4*(this._cubeSize-P);fc(i,W,k,3*P,2*P),p.setRenderTarget(i),p.render(x,od)}}function ub(o){const t=[],i=[],r=[];let l=o;const u=o-xs+1+d0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-xs?p=d0[h-o+xs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,x=1+m,y=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,T=6,R=3,v=2,_=1,z=new Float32Array(R*T*M),D=new Float32Array(v*T*M),P=new Float32Array(_*T*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,ft=k>2?0:-1,B=[I,ft,0,I+2/3,ft,0,I+2/3,ft+1,0,I,ft,0,I+2/3,ft+1,0,I,ft+1,0];z.set(B,R*T*k),D.set(y,v*T*k);const E=[k,k,k,k,k,k];P.set(E,_*T*k)}const W=new Ai;W.setAttribute("position",new zi(z,R)),W.setAttribute("uv",new zi(D,v)),W.setAttribute("faceIndex",new zi(P,_)),t.push(W),l>xs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function g0(o,t,i){const r=new yr(o,t,i);return r.texture.mapping=Tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function fb(o,t,i){const r=new Float32Array(mr),l=new Z(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function _0(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function v0(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

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
	`}function db(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===xd||p===yd,g=p===bs||p===Ts;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=t.get(d);return i===null&&(i=new m0(o)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),t.set(d,x),x.texture}else{if(t.has(d))return t.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new m0(o));const y=m?i.fromEquirectangular(d):i.fromCubemap(d);return t.set(d,y),d.addEventListener("dispose",u),y.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function pb(o,t,i,r){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);for(const T in y.morphAttributes){const R=y.morphAttributes[T];for(let v=0,_=R.length;v<_;v++)t.remove(R[v])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(x){const y=x.attributes;for(const T in y)t.update(y[T],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const T in M){const R=M[T];for(let v=0,_=R.length;v<_;v++)t.update(R[v],o.ARRAY_BUFFER)}}function m(x){const y=[],M=x.index,T=x.attributes.position;let R=0;if(M!==null){const z=M.array;R=M.version;for(let D=0,P=z.length;D<P;D+=3){const W=z[D+0],k=z[D+1],I=z[D+2];y.push(W,k,k,I,I,W)}}else if(T!==void 0){const z=T.array;R=T.version;for(let D=0,P=z.length/3-1;D<P;D+=3){const W=D+0,k=D+1,I=D+2;y.push(W,k,k,I,I,W)}}else return;const v=new(s_(y)?p_:h_)(y,1);v.version=R;const _=u.get(x);_&&t.remove(_),u.set(x,v)}function g(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function mb(o,t,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,T){o.drawElements(u,T,d,M*p),i.update(T,u,1)}function x(M,T,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,T,d,M*p,R),i.update(T,u,R)}function y(M,T,R){if(R===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,T[_]);else{v.multiDrawElementsWEBGL(u,T,0,d,M,0,R);let _=0;for(let z=0;z<R;z++)_+=T[z];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=y}function gb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _b(o,t){return o[0]-t[0]}function vb(o,t){return Math.abs(t[1])-Math.abs(o[1])}function xb(o,t,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new Qe,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,x){const y=m.morphTargetInfluences;if(t.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=T!==void 0?T.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let rt=function(){St.dispose(),u.delete(g),g.removeEventListener("dispose",rt)};var M=rt;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,W=g.morphAttributes.color!==void 0,k=g.morphAttributes.position||[],I=g.morphAttributes.normal||[],ft=g.morphAttributes.color||[];let B=0;D===!0&&(B=1),P===!0&&(B=2),W===!0&&(B=3);let E=g.attributes.position.count*B,O=1;E>t.maxTextureSize&&(O=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const ct=new Float32Array(E*O*4*R),St=new c_(ct,E,O,R);St.type=ra,St.needsUpdate=!0;const q=B*4;for(let G=0;G<R;G++){const ot=k[G],it=I[G],ht=ft[G],C=E*O*4*G;for(let J=0;J<ot.count;J++){const mt=J*q;D===!0&&(h.fromBufferAttribute(ot,J),ct[C+mt+0]=h.x,ct[C+mt+1]=h.y,ct[C+mt+2]=h.z,ct[C+mt+3]=0),P===!0&&(h.fromBufferAttribute(it,J),ct[C+mt+4]=h.x,ct[C+mt+5]=h.y,ct[C+mt+6]=h.z,ct[C+mt+7]=0),W===!0&&(h.fromBufferAttribute(ht,J),ct[C+mt+8]=h.x,ct[C+mt+9]=h.y,ct[C+mt+10]=h.z,ct[C+mt+11]=ht.itemSize===4?h.w:1)}}v={count:R,texture:St,size:new ge(E,O)},u.set(g,v),g.addEventListener("dispose",rt)}let _=0;for(let D=0;D<y.length;D++)_+=y[D];const z=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(o,"morphTargetBaseInfluence",z),x.getUniforms().setValue(o,"morphTargetInfluences",y),x.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const T=y===void 0?0:y.length;let R=r[g.id];if(R===void 0||R.length!==T){R=[];for(let P=0;P<T;P++)R[P]=[P,0];r[g.id]=R}for(let P=0;P<T;P++){const W=R[P];W[0]=P,W[1]=y[P]}R.sort(vb);for(let P=0;P<8;P++)P<T&&R[P][1]?(d[P][0]=R[P][0],d[P][1]=R[P][1]):(d[P][0]=Number.MAX_SAFE_INTEGER,d[P][1]=0);d.sort(_b);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let z=0;for(let P=0;P<8;P++){const W=d[P],k=W[0],I=W[1];k!==Number.MAX_SAFE_INTEGER&&I?(v&&g.getAttribute("morphTarget"+P)!==v[k]&&g.setAttribute("morphTarget"+P,v[k]),_&&g.getAttribute("morphNormal"+P)!==_[k]&&g.setAttribute("morphNormal"+P,_[k]),l[P]=I,z+=I):(v&&g.hasAttribute("morphTarget"+P)===!0&&g.deleteAttribute("morphTarget"+P),_&&g.hasAttribute("morphNormal"+P)===!0&&g.deleteAttribute("morphNormal"+P),l[P]=0)}const D=g.morphTargetsRelative?1:1-z;x.getUniforms().setValue(o,"morphTargetBaseInfluence",D),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function yb(o,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,x=t.get(p,g);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class y_ extends Yn{constructor(t,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:vr,g!==vr&&g!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===vr&&(r=Fa),r===void 0&&g===As&&(r=_r),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Fn,this.minFilter=p!==void 0?p:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const S_=new Yn,M_=new y_(1,1);M_.compareFunction=r_;const E_=new c_,b_=new aS,T_=new __,x0=[],y0=[],S0=new Float32Array(16),M0=new Float32Array(9),E0=new Float32Array(4);function Ls(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=x0[l];if(u===void 0&&(u=new Float32Array(l),x0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Cc(o,t){let i=y0[t];i===void 0&&(i=new Int32Array(t),y0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function Tb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;E0.set(r),o.uniformMatrix2fv(this.addr,!1,E0),gn(i,r)}}function Ab(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;M0.set(r),o.uniformMatrix3fv(this.addr,!1,M0),gn(i,r)}}function wb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;S0.set(r),o.uniformMatrix4fv(this.addr,!1,S0),gn(i,r)}}function Rb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function Db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function Ub(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function Ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function Pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function zb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?M_:S_;i.setTexture2D(t||u,l)}function Bb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||b_,l)}function Fb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||T_,l)}function Ib(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||E_,l)}function Hb(o){switch(o){case 5126:return Sb;case 35664:return Mb;case 35665:return Eb;case 35666:return bb;case 35674:return Tb;case 35675:return Ab;case 35676:return wb;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return Db;case 35669:case 35673:return Lb;case 5125:return Ub;case 36294:return Nb;case 36295:return Ob;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Gb(o,t){o.uniform1fv(this.addr,t)}function Vb(o,t){const i=Ls(t,this.size,2);o.uniform2fv(this.addr,i)}function kb(o,t){const i=Ls(t,this.size,3);o.uniform3fv(this.addr,i)}function Wb(o,t){const i=Ls(t,this.size,4);o.uniform4fv(this.addr,i)}function Xb(o,t){const i=Ls(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qb(o,t){const i=Ls(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Yb(o,t){const i=Ls(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function jb(o,t){o.uniform1iv(this.addr,t)}function Zb(o,t){o.uniform2iv(this.addr,t)}function Kb(o,t){o.uniform3iv(this.addr,t)}function Qb(o,t){o.uniform4iv(this.addr,t)}function Jb(o,t){o.uniform1uiv(this.addr,t)}function $b(o,t){o.uniform2uiv(this.addr,t)}function tT(o,t){o.uniform3uiv(this.addr,t)}function eT(o,t){o.uniform4uiv(this.addr,t)}function nT(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||S_,u[h])}function iT(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||b_,u[h])}function aT(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||T_,u[h])}function rT(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||E_,u[h])}function sT(o){switch(o){case 5126:return Gb;case 35664:return Vb;case 35665:return kb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return jb;case 35667:case 35671:return Zb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return $b;case 36295:return tT;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return rT}}class oT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Hb(i.type)}}class lT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sT(i.type)}}class cT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function b0(o,t){o.seq.push(t),o.map[t.id]=t}function uT(o,t,i){const r=o.name,l=r.length;for(fd.lastIndex=0;;){const u=fd.exec(r),h=fd.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){b0(i,m===void 0?new oT(d,o,t):new lT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new cT(d),b0(i,x)),i=x}}}class gc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);uT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function T0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const fT=37297;let dT=0;function hT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function pT(o){const t=Ge.getPrimaries(Ge.workingColorSpace),i=Ge.getPrimaries(o);let r;switch(t===i?r="":t===yc&&i===xc?r="LinearDisplayP3ToLinearSRGB":t===xc&&i===yc&&(r="LinearSRGBToLinearDisplayP3"),o){case oa:case Ac:return[r,"LinearTransferOETF"];case An:case Dd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function A0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+hT(o.getShaderSource(t),h)}else return l}function mT(o,t){const i=pT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function gT(o,t){let i;switch(t){case my:i="Linear";break;case gy:i="Reinhard";break;case _y:i="OptimizedCineon";break;case vy:i="ACESFilmic";break;case yy:i="AgX";break;case xy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function _T(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function vT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function xT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function yT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function ys(o){return o!==""}function w0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function R0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(ST,ET)}const MT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ET(o,t){let i=Ee[t];if(i===void 0){const r=MT.get(t);if(r!==void 0)i=Ee[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Td(i)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(o){return o.replace(bT,TT)}function TT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function D0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function AT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===q0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Y0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function wT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bs:case Ts:t="ENVMAP_TYPE_CUBE";break;case Tc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function CT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case j0:t="ENVMAP_BLENDING_MULTIPLY";break;case hy:t="ENVMAP_BLENDING_MIX";break;case py:t="ENVMAP_BLENDING_ADD";break}return t}function DT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function LT(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=AT(i),m=wT(i),g=RT(i),x=CT(i),y=DT(i),M=i.isWebGL2?"":_T(i),T=vT(i),R=xT(u),v=l.createProgram();let _,z,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(ys).join(`
`),_.length>0&&(_+=`
`),z=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(ys).join(`
`),z.length>0&&(z+=`
`)):(_=[D0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),z=[M,D0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?Ee.tonemapping_pars_fragment:"",i.toneMapping!==Ha?gT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,mT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ys).join(`
`)),h=Td(h),h=w0(h,i),h=R0(h,i),d=Td(d),d=w0(d,i),d=R0(d,i),h=C0(h),d=C0(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,z=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+z);const P=D+_+h,W=D+z+d,k=T0(l,l.VERTEX_SHADER,P),I=T0(l,l.FRAGMENT_SHADER,W);l.attachShader(v,k),l.attachShader(v,I),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function ft(ct){if(o.debug.checkShaderErrors){const St=l.getProgramInfoLog(v).trim(),q=l.getShaderInfoLog(k).trim(),rt=l.getShaderInfoLog(I).trim();let G=!0,ot=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,k,I);else{const it=A0(l,k,"vertex"),ht=A0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+ct.name+`
Material Type: `+ct.type+`

Program Info Log: `+St+`
`+it+`
`+ht)}else St!==""?console.warn("THREE.WebGLProgram: Program Info Log:",St):(q===""||rt==="")&&(ot=!1);ot&&(ct.diagnostics={runnable:G,programLog:St,vertexShader:{log:q,prefix:_},fragmentShader:{log:rt,prefix:z}})}l.deleteShader(k),l.deleteShader(I),B=new gc(l,v),E=yT(l,v)}let B;this.getUniforms=function(){return B===void 0&&ft(this),B};let E;this.getAttributes=function(){return E===void 0&&ft(this),E};let O=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(v,fT)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dT++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=I,this}let UT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new OT(t),i.set(t,r)),r}}class OT{constructor(t){this.id=UT++,this.code=t,this.usedTimes=0}}function PT(o,t,i,r,l,u,h){const d=new u_,p=new NT,m=new Set,g=[],x=l.isWebGL2,y=l.logarithmicDepthBuffer,M=l.vertexTextures;let T=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,O,ct,St,q){const rt=St.fog,G=q.geometry,ot=E.isMeshStandardMaterial?St.environment:null,it=(E.isMeshStandardMaterial?i:t).get(E.envMap||ot),ht=it&&it.mapping===Tc?it.image.height:null,C=R[E.type];E.precision!==null&&(T=l.getMaxPrecision(E.precision),T!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",T,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=J!==void 0?J.length:0;let Lt=0;G.morphAttributes.position!==void 0&&(Lt=1),G.morphAttributes.normal!==void 0&&(Lt=2),G.morphAttributes.color!==void 0&&(Lt=3);let Y,pt,Rt,Yt;if(C){const jt=Ni[C];Y=jt.vertexShader,pt=jt.fragmentShader}else Y=E.vertexShader,pt=E.fragmentShader,p.update(E),Rt=p.getVertexShaderID(E),Yt=p.getFragmentShaderID(E);const Pt=o.getRenderTarget(),zt=q.isInstancedMesh===!0,$t=q.isBatchedMesh===!0,ie=!!E.map,nt=!!E.matcap,ze=!!it,ae=!!E.aoMap,ue=!!E.lightMap,Kt=!!E.bumpMap,Pe=!!E.normalMap,he=!!E.displacementMap,U=!!E.emissiveMap,A=!!E.metalnessMap,st=!!E.roughnessMap,Ot=E.anisotropy>0,j=E.clearcoat>0,tt=E.iridescence>0,ut=E.sheen>0,dt=E.transmission>0,_t=Ot&&!!E.anisotropyMap,At=j&&!!E.clearcoatMap,Ut=j&&!!E.clearcoatNormalMap,vt=j&&!!E.clearcoatRoughnessMap,fe=tt&&!!E.iridescenceMap,Gt=tt&&!!E.iridescenceThicknessMap,Ht=ut&&!!E.sheenColorMap,Bt=ut&&!!E.sheenRoughnessMap,bt=!!E.specularMap,te=!!E.specularColorMap,L=!!E.specularIntensityMap,Et=dt&&!!E.transmissionMap,Nt=dt&&!!E.thicknessMap,ee=!!E.gradientMap,N=!!E.alphaMap,Ct=E.alphaTest>0,Mt=!!E.alphaHash,qt=!!E.extensions;let Qt=Ha;E.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Qt=o.toneMapping);const Me={isWebGL2:x,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:pt,defines:E.defines,customVertexShaderID:Rt,customFragmentShaderID:Yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:T,batching:$t,instancing:zt,instancingColor:zt&&q.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Pt===null?o.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:oa,alphaToCoverage:!!E.alphaToCoverage,map:ie,matcap:nt,envMap:ze,envMapMode:ze&&it.mapping,envMapCubeUVHeight:ht,aoMap:ae,lightMap:ue,bumpMap:Kt,normalMap:Pe,displacementMap:M&&he,emissiveMap:U,normalMapObjectSpace:Pe&&E.normalMapType===Ly,normalMapTangentSpace:Pe&&E.normalMapType===a_,metalnessMap:A,roughnessMap:st,anisotropy:Ot,anisotropyMap:_t,clearcoat:j,clearcoatMap:At,clearcoatNormalMap:Ut,clearcoatRoughnessMap:vt,iridescence:tt,iridescenceMap:fe,iridescenceThicknessMap:Gt,sheen:ut,sheenColorMap:Ht,sheenRoughnessMap:Bt,specularMap:bt,specularColorMap:te,specularIntensityMap:L,transmission:dt,transmissionMap:Et,thicknessMap:Nt,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Ss&&E.alphaToCoverage===!1,alphaMap:N,alphaTest:Ct,alphaHash:Mt,combine:E.combine,mapUv:ie&&v(E.map.channel),aoMapUv:ae&&v(E.aoMap.channel),lightMapUv:ue&&v(E.lightMap.channel),bumpMapUv:Kt&&v(E.bumpMap.channel),normalMapUv:Pe&&v(E.normalMap.channel),displacementMapUv:he&&v(E.displacementMap.channel),emissiveMapUv:U&&v(E.emissiveMap.channel),metalnessMapUv:A&&v(E.metalnessMap.channel),roughnessMapUv:st&&v(E.roughnessMap.channel),anisotropyMapUv:_t&&v(E.anisotropyMap.channel),clearcoatMapUv:At&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(E.sheenRoughnessMap.channel),specularMapUv:bt&&v(E.specularMap.channel),specularColorMapUv:te&&v(E.specularColorMap.channel),specularIntensityMapUv:L&&v(E.specularIntensityMap.channel),transmissionMapUv:Et&&v(E.transmissionMap.channel),thicknessMapUv:Nt&&v(E.thicknessMap.channel),alphaMapUv:N&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||Ot),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(ie||N),fog:!!rt,useFog:E.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Lt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&ct.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ie&&E.map.isVideoTexture===!0&&Ge.getTransfer(E.map.colorSpace)===Ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Oi,flipSided:E.side===qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:qt&&E.extensions.derivatives===!0,extensionFragDepth:qt&&E.extensions.fragDepth===!0,extensionDrawBuffers:qt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:qt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:qt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qt&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=m.has(1),Me.vertexUv2s=m.has(2),Me.vertexUv3s=m.has(3),m.clear(),Me}function z(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ct in E.defines)O.push(ct),O.push(E.defines[ct]);return E.isRawShaderMaterial===!1&&(D(O,E),P(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function D(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function P(E,O){d.disableAll(),O.isWebGL2&&d.enable(0),O.supportsVertexTextures&&d.enable(1),O.instancing&&d.enable(2),O.instancingColor&&d.enable(3),O.matcap&&d.enable(4),O.envMap&&d.enable(5),O.normalMapObjectSpace&&d.enable(6),O.normalMapTangentSpace&&d.enable(7),O.clearcoat&&d.enable(8),O.iridescence&&d.enable(9),O.alphaTest&&d.enable(10),O.vertexColors&&d.enable(11),O.vertexAlphas&&d.enable(12),O.vertexUv1s&&d.enable(13),O.vertexUv2s&&d.enable(14),O.vertexUv3s&&d.enable(15),O.vertexTangents&&d.enable(16),O.anisotropy&&d.enable(17),O.alphaHash&&d.enable(18),O.batching&&d.enable(19),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.skinning&&d.enable(4),O.morphTargets&&d.enable(5),O.morphNormals&&d.enable(6),O.morphColors&&d.enable(7),O.premultipliedAlpha&&d.enable(8),O.shadowMapEnabled&&d.enable(9),O.useLegacyLights&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.alphaToCoverage&&d.enable(20),E.push(d.mask)}function W(E){const O=R[E.type];let ct;if(O){const St=Ni[O];ct=_S.clone(St.uniforms)}else ct=E.uniforms;return ct}function k(E,O){let ct;for(let St=0,q=g.length;St<q;St++){const rt=g[St];if(rt.cacheKey===O){ct=rt,++ct.usedTimes;break}}return ct===void 0&&(ct=new LT(o,O,E,u),g.push(ct)),ct}function I(E){if(--E.usedTimes===0){const O=g.indexOf(E);g[O]=g[g.length-1],g.pop(),E.destroy()}}function ft(E){p.remove(E)}function B(){p.dispose()}return{getParameters:_,getProgramCacheKey:z,getUniforms:W,acquireProgram:k,releaseProgram:I,releaseShaderCache:ft,programs:g,dispose:B}}function zT(){let o=new WeakMap;function t(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:t,remove:i,update:r,dispose:l}}function BT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function L0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function U0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,y,M,T,R,v){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:T,renderOrder:x.renderOrder,z:R,group:v},o[t]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=T,_.renderOrder=x.renderOrder,_.z=R,_.group=v),t++,_}function d(x,y,M,T,R,v){const _=h(x,y,M,T,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(x,y,M,T,R,v){const _=h(x,y,M,T,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,y){i.length>1&&i.sort(x||BT),r.length>1&&r.sort(y||L0),l.length>1&&l.sort(y||L0)}function g(){for(let x=t,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function FT(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new U0,o.set(r,[h])):l>=u.length?(h=new U0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function IT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new De};break;case"SpotLight":i={position:new Z,direction:new Z,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=i,i}}}function HT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let GT=0;function VT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kT(o,t){const i=new IT,r=HT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new Z);const u=new Z,h=new ln,d=new ln;function p(g,x){let y=0,M=0,T=0;for(let ct=0;ct<9;ct++)l.probe[ct].set(0,0,0);let R=0,v=0,_=0,z=0,D=0,P=0,W=0,k=0,I=0,ft=0,B=0;g.sort(VT);const E=x===!0?Math.PI:1;for(let ct=0,St=g.length;ct<St;ct++){const q=g[ct],rt=q.color,G=q.intensity,ot=q.distance,it=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)y+=rt.r*G*E,M+=rt.g*G*E,T+=rt.b*G*E;else if(q.isLightProbe){for(let ht=0;ht<9;ht++)l.probe[ht].addScaledVector(q.sh.coefficients[ht],G);B++}else if(q.isDirectionalLight){const ht=i.get(q);if(ht.color.copy(q.color).multiplyScalar(q.intensity*E),q.castShadow){const C=q.shadow,J=r.get(q);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,l.directionalShadow[R]=J,l.directionalShadowMap[R]=it,l.directionalShadowMatrix[R]=q.shadow.matrix,P++}l.directional[R]=ht,R++}else if(q.isSpotLight){const ht=i.get(q);ht.position.setFromMatrixPosition(q.matrixWorld),ht.color.copy(rt).multiplyScalar(G*E),ht.distance=ot,ht.coneCos=Math.cos(q.angle),ht.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),ht.decay=q.decay,l.spot[_]=ht;const C=q.shadow;if(q.map&&(l.spotLightMap[I]=q.map,I++,C.updateMatrices(q),q.castShadow&&ft++),l.spotLightMatrix[_]=C.matrix,q.castShadow){const J=r.get(q);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,l.spotShadow[_]=J,l.spotShadowMap[_]=it,k++}_++}else if(q.isRectAreaLight){const ht=i.get(q);ht.color.copy(rt).multiplyScalar(G),ht.halfWidth.set(q.width*.5,0,0),ht.halfHeight.set(0,q.height*.5,0),l.rectArea[z]=ht,z++}else if(q.isPointLight){const ht=i.get(q);if(ht.color.copy(q.color).multiplyScalar(q.intensity*E),ht.distance=q.distance,ht.decay=q.decay,q.castShadow){const C=q.shadow,J=r.get(q);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,J.shadowCameraNear=C.camera.near,J.shadowCameraFar=C.camera.far,l.pointShadow[v]=J,l.pointShadowMap[v]=it,l.pointShadowMatrix[v]=q.shadow.matrix,W++}l.point[v]=ht,v++}else if(q.isHemisphereLight){const ht=i.get(q);ht.skyColor.copy(q.color).multiplyScalar(G*E),ht.groundColor.copy(q.groundColor).multiplyScalar(G*E),l.hemi[D]=ht,D++}}z>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=It.LTC_FLOAT_1,l.rectAreaLTC2=It.LTC_FLOAT_2):(l.rectAreaLTC1=It.LTC_HALF_1,l.rectAreaLTC2=It.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=It.LTC_FLOAT_1,l.rectAreaLTC2=It.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=It.LTC_HALF_1,l.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=T;const O=l.hash;(O.directionalLength!==R||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==z||O.hemiLength!==D||O.numDirectionalShadows!==P||O.numPointShadows!==W||O.numSpotShadows!==k||O.numSpotMaps!==I||O.numLightProbes!==B)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=z,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=P,l.directionalShadowMap.length=P,l.pointShadow.length=W,l.pointShadowMap.length=W,l.spotShadow.length=k,l.spotShadowMap.length=k,l.directionalShadowMatrix.length=P,l.pointShadowMatrix.length=W,l.spotLightMatrix.length=k+I-ft,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=ft,l.numLightProbes=B,O.directionalLength=R,O.pointLength=v,O.spotLength=_,O.rectAreaLength=z,O.hemiLength=D,O.numDirectionalShadows=P,O.numPointShadows=W,O.numSpotShadows=k,O.numSpotMaps=I,O.numLightProbes=B,l.version=GT++)}function m(g,x){let y=0,M=0,T=0,R=0,v=0;const _=x.matrixWorldInverse;for(let z=0,D=g.length;z<D;z++){const P=g[z];if(P.isDirectionalLight){const W=l.directional[y];W.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(_),y++}else if(P.isSpotLight){const W=l.spot[T];W.position.setFromMatrixPosition(P.matrixWorld),W.position.applyMatrix4(_),W.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),W.direction.sub(u),W.direction.transformDirection(_),T++}else if(P.isRectAreaLight){const W=l.rectArea[R];W.position.setFromMatrixPosition(P.matrixWorld),W.position.applyMatrix4(_),d.identity(),h.copy(P.matrixWorld),h.premultiply(_),d.extractRotation(h),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),W.halfWidth.applyMatrix4(d),W.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const W=l.point[M];W.position.setFromMatrixPosition(P.matrixWorld),W.position.applyMatrix4(_),M++}else if(P.isHemisphereLight){const W=l.hemi[v];W.direction.setFromMatrixPosition(P.matrixWorld),W.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function N0(o,t){const i=new kT(o,t),r=[],l=[];function u(){r.length=0,l.length=0}function h(x){r.push(x)}function d(x){l.push(x)}function p(x){i.setup(r,x)}function m(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function WT(o,t){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new N0(o,t),i.set(u,[p])):h>=d.length?(p=new N0(o,t),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class XT extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qT extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const YT=`void main() {
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
}`;function ZT(o,t,i){let r=new Nd;const l=new ge,u=new ge,h=new Qe,d=new XT({depthPacking:Dy}),p=new qT,m={},g=i.maxTextureSize,x={[Va]:qn,[qn]:Va,[Oi]:Oi},y=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:YT,fragmentShader:jT}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ai;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ni(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q0;let _=this.type;this.render=function(k,I,ft){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const B=o.getRenderTarget(),E=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Ia),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const St=_!==aa&&this.type===aa,q=_===aa&&this.type!==aa;for(let rt=0,G=k.length;rt<G;rt++){const ot=k[rt],it=ot.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;l.copy(it.mapSize);const ht=it.getFrameExtents();if(l.multiply(ht),u.copy(it.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ht.x),l.x=u.x*ht.x,it.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ht.y),l.y=u.y*ht.y,it.mapSize.y=u.y)),it.map===null||St===!0||q===!0){const J=this.type!==aa?{minFilter:Fn,magFilter:Fn}:{};it.map!==null&&it.map.dispose(),it.map=new yr(l.x,l.y,J),it.map.texture.name=ot.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const C=it.getViewportCount();for(let J=0;J<C;J++){const mt=it.getViewport(J);h.set(u.x*mt.x,u.y*mt.y,u.x*mt.z,u.y*mt.w),ct.viewport(h),it.updateMatrices(ot,J),r=it.getFrustum(),P(I,ft,it.camera,ot,this.type)}it.isPointLightShadow!==!0&&this.type===aa&&z(it,ft),it.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(B,E,O)};function z(k,I){const ft=t.update(R);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new yr(l.x,l.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,ft,y,R,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,ft,M,R,null)}function D(k,I,ft,B){let E=null;const O=ft.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(O!==void 0)E=O;else if(E=ft.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ct=E.uuid,St=I.uuid;let q=m[ct];q===void 0&&(q={},m[ct]=q);let rt=q[St];rt===void 0&&(rt=E.clone(),q[St]=rt,I.addEventListener("dispose",W)),E=rt}if(E.visible=I.visible,E.wireframe=I.wireframe,B===aa?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:x[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,ft.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ct=o.properties.get(E);ct.light=ft}return E}function P(k,I,ft,B,E){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&E===aa)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,k.matrixWorld);const St=t.update(k),q=k.material;if(Array.isArray(q)){const rt=St.groups;for(let G=0,ot=rt.length;G<ot;G++){const it=rt[G],ht=q[it.materialIndex];if(ht&&ht.visible){const C=D(k,ht,B,E);k.onBeforeShadow(o,k,I,ft,St,C,it),o.renderBufferDirect(ft,null,St,C,k,it),k.onAfterShadow(o,k,I,ft,St,C,it)}}}else if(q.visible){const rt=D(k,q,B,E);k.onBeforeShadow(o,k,I,ft,St,rt,null),o.renderBufferDirect(ft,null,St,rt,k,null),k.onAfterShadow(o,k,I,ft,St,rt,null)}}const ct=k.children;for(let St=0,q=ct.length;St<q;St++)P(ct[St],I,ft,B,E)}function W(k){k.target.removeEventListener("dispose",W);for(const ft in m){const B=m[ft],E=k.target.uuid;E in B&&(B[E].dispose(),delete B[E])}}}function KT(o,t,i){const r=i.isWebGL2;function l(){let N=!1;const Ct=new Qe;let Mt=null;const qt=new Qe(0,0,0,0);return{setMask:function(Qt){Mt!==Qt&&!N&&(o.colorMask(Qt,Qt,Qt,Qt),Mt=Qt)},setLocked:function(Qt){N=Qt},setClear:function(Qt,Me,jt,de,pe){pe===!0&&(Qt*=de,Me*=de,jt*=de),Ct.set(Qt,Me,jt,de),qt.equals(Ct)===!1&&(o.clearColor(Qt,Me,jt,de),qt.copy(Ct))},reset:function(){N=!1,Mt=null,qt.set(-1,0,0,0)}}}function u(){let N=!1,Ct=null,Mt=null,qt=null;return{setTest:function(Qt){Qt?zt(o.DEPTH_TEST):$t(o.DEPTH_TEST)},setMask:function(Qt){Ct!==Qt&&!N&&(o.depthMask(Qt),Ct=Qt)},setFunc:function(Qt){if(Mt!==Qt){switch(Qt){case sy:o.depthFunc(o.NEVER);break;case oy:o.depthFunc(o.ALWAYS);break;case ly:o.depthFunc(o.LESS);break;case _c:o.depthFunc(o.LEQUAL);break;case cy:o.depthFunc(o.EQUAL);break;case uy:o.depthFunc(o.GEQUAL);break;case fy:o.depthFunc(o.GREATER);break;case dy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Mt=Qt}},setLocked:function(Qt){N=Qt},setClear:function(Qt){qt!==Qt&&(o.clearDepth(Qt),qt=Qt)},reset:function(){N=!1,Ct=null,Mt=null,qt=null}}}function h(){let N=!1,Ct=null,Mt=null,qt=null,Qt=null,Me=null,jt=null,de=null,pe=null;return{setTest:function(ne){N||(ne?zt(o.STENCIL_TEST):$t(o.STENCIL_TEST))},setMask:function(ne){Ct!==ne&&!N&&(o.stencilMask(ne),Ct=ne)},setFunc:function(ne,xe,Xe){(Mt!==ne||qt!==xe||Qt!==Xe)&&(o.stencilFunc(ne,xe,Xe),Mt=ne,qt=xe,Qt=Xe)},setOp:function(ne,xe,Xe){(Me!==ne||jt!==xe||de!==Xe)&&(o.stencilOp(ne,xe,Xe),Me=ne,jt=xe,de=Xe)},setLocked:function(ne){N=ne},setClear:function(ne){pe!==ne&&(o.clearStencil(ne),pe=ne)},reset:function(){N=!1,Ct=null,Mt=null,qt=null,Qt=null,Me=null,jt=null,de=null,pe=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,x=new WeakMap;let y={},M={},T=new WeakMap,R=[],v=null,_=!1,z=null,D=null,P=null,W=null,k=null,I=null,ft=null,B=new De(0,0,0),E=0,O=!1,ct=null,St=null,q=null,rt=null,G=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,ht=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(C)[1]),it=ht>=1):C.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),it=ht>=2);let J=null,mt={};const Lt=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),pt=new Qe().fromArray(Lt),Rt=new Qe().fromArray(Y);function Yt(N,Ct,Mt,qt){const Qt=new Uint8Array(4),Me=o.createTexture();o.bindTexture(N,Me),o.texParameteri(N,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(N,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Mt;jt++)r&&(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ct,0,o.RGBA,1,1,qt,0,o.RGBA,o.UNSIGNED_BYTE,Qt):o.texImage2D(Ct+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Qt);return Me}const Pt={};Pt[o.TEXTURE_2D]=Yt(o.TEXTURE_2D,o.TEXTURE_2D,1),Pt[o.TEXTURE_CUBE_MAP]=Yt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Pt[o.TEXTURE_2D_ARRAY]=Yt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Pt[o.TEXTURE_3D]=Yt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),zt(o.DEPTH_TEST),p.setFunc(_c),he(!1),U(hg),zt(o.CULL_FACE),Kt(Ia);function zt(N){y[N]!==!0&&(o.enable(N),y[N]=!0)}function $t(N){y[N]!==!1&&(o.disable(N),y[N]=!1)}function ie(N,Ct){return M[N]!==Ct?(o.bindFramebuffer(N,Ct),M[N]=Ct,r&&(N===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Ct),N===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Ct)),!0):!1}function nt(N,Ct){let Mt=R,qt=!1;if(N)if(Mt=T.get(Ct),Mt===void 0&&(Mt=[],T.set(Ct,Mt)),N.isWebGLMultipleRenderTargets){const Qt=N.texture;if(Mt.length!==Qt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,jt=Qt.length;Me<jt;Me++)Mt[Me]=o.COLOR_ATTACHMENT0+Me;Mt.length=Qt.length,qt=!0}}else Mt[0]!==o.COLOR_ATTACHMENT0&&(Mt[0]=o.COLOR_ATTACHMENT0,qt=!0);else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,qt=!0);qt&&(i.isWebGL2?o.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function ze(N){return v!==N?(o.useProgram(N),v=N,!0):!1}const ae={[pr]:o.FUNC_ADD,[Xx]:o.FUNC_SUBTRACT,[qx]:o.FUNC_REVERSE_SUBTRACT};if(r)ae[gg]=o.MIN,ae[_g]=o.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(ae[gg]=N.MIN_EXT,ae[_g]=N.MAX_EXT)}const ue={[Yx]:o.ZERO,[jx]:o.ONE,[Zx]:o.SRC_COLOR,[_d]:o.SRC_ALPHA,[ey]:o.SRC_ALPHA_SATURATE,[$x]:o.DST_COLOR,[Qx]:o.DST_ALPHA,[Kx]:o.ONE_MINUS_SRC_COLOR,[vd]:o.ONE_MINUS_SRC_ALPHA,[ty]:o.ONE_MINUS_DST_COLOR,[Jx]:o.ONE_MINUS_DST_ALPHA,[ny]:o.CONSTANT_COLOR,[iy]:o.ONE_MINUS_CONSTANT_COLOR,[ay]:o.CONSTANT_ALPHA,[ry]:o.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,Ct,Mt,qt,Qt,Me,jt,de,pe,ne){if(N===Ia){_===!0&&($t(o.BLEND),_=!1);return}if(_===!1&&(zt(o.BLEND),_=!0),N!==Wx){if(N!==z||ne!==O){if((D!==pr||k!==pr)&&(o.blendEquation(o.FUNC_ADD),D=pr,k=pr),ne)switch(N){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gd:o.blendFunc(o.ONE,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gd:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}P=null,W=null,I=null,ft=null,B.set(0,0,0),E=0,z=N,O=ne}return}Qt=Qt||Ct,Me=Me||Mt,jt=jt||qt,(Ct!==D||Qt!==k)&&(o.blendEquationSeparate(ae[Ct],ae[Qt]),D=Ct,k=Qt),(Mt!==P||qt!==W||Me!==I||jt!==ft)&&(o.blendFuncSeparate(ue[Mt],ue[qt],ue[Me],ue[jt]),P=Mt,W=qt,I=Me,ft=jt),(de.equals(B)===!1||pe!==E)&&(o.blendColor(de.r,de.g,de.b,pe),B.copy(de),E=pe),z=N,O=!1}function Pe(N,Ct){N.side===Oi?$t(o.CULL_FACE):zt(o.CULL_FACE);let Mt=N.side===qn;Ct&&(Mt=!Mt),he(Mt),N.blending===Ss&&N.transparent===!1?Kt(Ia):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),p.setFunc(N.depthFunc),p.setTest(N.depthTest),p.setMask(N.depthWrite),d.setMask(N.colorWrite);const qt=N.stencilWrite;m.setTest(qt),qt&&(m.setMask(N.stencilWriteMask),m.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),m.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?zt(o.SAMPLE_ALPHA_TO_COVERAGE):$t(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(N){ct!==N&&(N?o.frontFace(o.CW):o.frontFace(o.CCW),ct=N)}function U(N){N!==Vx?(zt(o.CULL_FACE),N!==St&&(N===hg?o.cullFace(o.BACK):N===kx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):$t(o.CULL_FACE),St=N}function A(N){N!==q&&(it&&o.lineWidth(N),q=N)}function st(N,Ct,Mt){N?(zt(o.POLYGON_OFFSET_FILL),(rt!==Ct||G!==Mt)&&(o.polygonOffset(Ct,Mt),rt=Ct,G=Mt)):$t(o.POLYGON_OFFSET_FILL)}function Ot(N){N?zt(o.SCISSOR_TEST):$t(o.SCISSOR_TEST)}function j(N){N===void 0&&(N=o.TEXTURE0+ot-1),J!==N&&(o.activeTexture(N),J=N)}function tt(N,Ct,Mt){Mt===void 0&&(J===null?Mt=o.TEXTURE0+ot-1:Mt=J);let qt=mt[Mt];qt===void 0&&(qt={type:void 0,texture:void 0},mt[Mt]=qt),(qt.type!==N||qt.texture!==Ct)&&(J!==Mt&&(o.activeTexture(Mt),J=Mt),o.bindTexture(N,Ct||Pt[N]),qt.type=N,qt.texture=Ct)}function ut(){const N=mt[J];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{o.compressedTexImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{o.texSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{o.texSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{o.texStorage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{o.texStorage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(N){pt.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),pt.copy(N))}function L(N){Rt.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),Rt.copy(N))}function Et(N,Ct){let Mt=x.get(Ct);Mt===void 0&&(Mt=new WeakMap,x.set(Ct,Mt));let qt=Mt.get(N);qt===void 0&&(qt=o.getUniformBlockIndex(Ct,N.name),Mt.set(N,qt))}function Nt(N,Ct){const qt=x.get(Ct).get(N);g.get(Ct)!==qt&&(o.uniformBlockBinding(Ct,qt,N.__bindingPointIndex),g.set(Ct,qt))}function ee(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},J=null,mt={},M={},T=new WeakMap,R=[],v=null,_=!1,z=null,D=null,P=null,W=null,k=null,I=null,ft=null,B=new De(0,0,0),E=0,O=!1,ct=null,St=null,q=null,rt=null,G=null,pt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:zt,disable:$t,bindFramebuffer:ie,drawBuffers:nt,useProgram:ze,setBlending:Kt,setMaterial:Pe,setFlipSided:he,setCullFace:U,setLineWidth:A,setPolygonOffset:st,setScissorTest:Ot,activeTexture:j,bindTexture:tt,unbindTexture:ut,compressedTexImage2D:dt,compressedTexImage3D:_t,texImage2D:Bt,texImage3D:bt,updateUBOMapping:Et,uniformBlockBinding:Nt,texStorage2D:Gt,texStorage3D:Ht,texSubImage2D:At,texSubImage3D:Ut,compressedTexSubImage2D:vt,compressedTexSubImage3D:fe,scissor:te,viewport:L,reset:ee}}function QT(o,t,i,r,l,u,h){const d=l.isWebGL2,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,A){return M?new OffscreenCanvas(U,A):Ec("canvas")}function R(U,A,st,Ot){let j=1;if((U.width>Ot||U.height>Ot)&&(j=Ot/Math.max(U.width,U.height)),j<1||A===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const tt=A?Mc:Math.floor,ut=tt(j*U.width),dt=tt(j*U.height);x===void 0&&(x=T(ut,dt));const _t=st?T(ut,dt):x;return _t.width=ut,_t.height=dt,_t.getContext("2d").drawImage(U,0,0,ut,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+ut+"x"+dt+")."),_t}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function v(U){return bd(U.width)&&bd(U.height)}function _(U){return d?!1:U.wrapS!==bi||U.wrapT!==bi||U.minFilter!==Fn&&U.minFilter!==Xn}function z(U,A){return U.generateMipmaps&&A&&U.minFilter!==Fn&&U.minFilter!==Xn}function D(U){o.generateMipmap(U)}function P(U,A,st,Ot,j=!1){if(d===!1)return A;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let tt=A;if(A===o.RED&&(st===o.FLOAT&&(tt=o.R32F),st===o.HALF_FLOAT&&(tt=o.R16F),st===o.UNSIGNED_BYTE&&(tt=o.R8)),A===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(tt=o.R8UI),st===o.UNSIGNED_SHORT&&(tt=o.R16UI),st===o.UNSIGNED_INT&&(tt=o.R32UI),st===o.BYTE&&(tt=o.R8I),st===o.SHORT&&(tt=o.R16I),st===o.INT&&(tt=o.R32I)),A===o.RG&&(st===o.FLOAT&&(tt=o.RG32F),st===o.HALF_FLOAT&&(tt=o.RG16F),st===o.UNSIGNED_BYTE&&(tt=o.RG8)),A===o.RGBA){const ut=j?vc:Ge.getTransfer(Ot);st===o.FLOAT&&(tt=o.RGBA32F),st===o.HALF_FLOAT&&(tt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(tt=ut===Ye?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(tt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(tt=o.RGB5_A1)}return(tt===o.R16F||tt===o.R32F||tt===o.RG16F||tt===o.RG32F||tt===o.RGBA16F||tt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function W(U,A,st){return z(U,st)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Xn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function k(U){return U===Fn||U===vg||U===Co?o.NEAREST:o.LINEAR}function I(U){const A=U.target;A.removeEventListener("dispose",I),B(A),A.isVideoTexture&&g.delete(A)}function ft(U){const A=U.target;A.removeEventListener("dispose",ft),O(A)}function B(U){const A=r.get(U);if(A.__webglInit===void 0)return;const st=U.source,Ot=y.get(st);if(Ot){const j=Ot[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(U),Object.keys(Ot).length===0&&y.delete(st)}r.remove(U)}function E(U){const A=r.get(U);o.deleteTexture(A.__webglTexture);const st=U.source,Ot=y.get(st);delete Ot[A.__cacheKey],h.memory.textures--}function O(U){const A=U.texture,st=r.get(U),Ot=r.get(A);if(Ot.__webglTexture!==void 0&&(o.deleteTexture(Ot.__webglTexture),h.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(st.__webglFramebuffer[j]))for(let tt=0;tt<st.__webglFramebuffer[j].length;tt++)o.deleteFramebuffer(st.__webglFramebuffer[j][tt]);else o.deleteFramebuffer(st.__webglFramebuffer[j]);st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer[j])}else{if(Array.isArray(st.__webglFramebuffer))for(let j=0;j<st.__webglFramebuffer.length;j++)o.deleteFramebuffer(st.__webglFramebuffer[j]);else o.deleteFramebuffer(st.__webglFramebuffer);if(st.__webglDepthbuffer&&o.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&o.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let j=0;j<st.__webglColorRenderbuffer.length;j++)st.__webglColorRenderbuffer[j]&&o.deleteRenderbuffer(st.__webglColorRenderbuffer[j]);st.__webglDepthRenderbuffer&&o.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let j=0,tt=A.length;j<tt;j++){const ut=r.get(A[j]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(A[j])}r.remove(A),r.remove(U)}let ct=0;function St(){ct=0}function q(){const U=ct;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),ct+=1,U}function rt(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function G(U,A){const st=r.get(U);if(U.isVideoTexture&&Pe(U),U.isRenderTargetTexture===!1&&U.version>0&&st.__version!==U.version){const Ot=U.image;if(Ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(st,U,A);return}}i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+A)}function ot(U,A){const st=r.get(U);if(U.version>0&&st.__version!==U.version){pt(st,U,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+A)}function it(U,A){const st=r.get(U);if(U.version>0&&st.__version!==U.version){pt(st,U,A);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+A)}function ht(U,A){const st=r.get(U);if(U.version>0&&st.__version!==U.version){Rt(st,U,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+A)}const C={[Sd]:o.REPEAT,[bi]:o.CLAMP_TO_EDGE,[Md]:o.MIRRORED_REPEAT},J={[Fn]:o.NEAREST,[vg]:o.NEAREST_MIPMAP_NEAREST,[Co]:o.NEAREST_MIPMAP_LINEAR,[Xn]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},mt={[Uy]:o.NEVER,[Fy]:o.ALWAYS,[Ny]:o.LESS,[r_]:o.LEQUAL,[Oy]:o.EQUAL,[By]:o.GEQUAL,[Py]:o.GREATER,[zy]:o.NOTEQUAL};function Lt(U,A,st){if(A.type===ra&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Xn||A.magFilter===Ff||A.magFilter===Co||A.magFilter===gr||A.minFilter===Xn||A.minFilter===Ff||A.minFilter===Co||A.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),st?(o.texParameteri(U,o.TEXTURE_WRAP_S,C[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,C[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,C[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,J[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,J[A.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==bi||A.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,k(A.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,k(A.minFilter)),A.minFilter!==Fn&&A.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Ot=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Fn||A.minFilter!==Co&&A.minFilter!==gr||A.type===ra&&t.has("OES_texture_float_linear")===!1||d===!1&&A.type===Fo&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(U,Ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function Y(U,A){let st=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",I));const Ot=A.source;let j=y.get(Ot);j===void 0&&(j={},y.set(Ot,j));const tt=rt(A);if(tt!==U.__cacheKey){j[tt]===void 0&&(j[tt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),j[tt].usedTimes++;const ut=j[U.__cacheKey];ut!==void 0&&(j[U.__cacheKey].usedTimes--,ut.usedTimes===0&&E(A)),U.__cacheKey=tt,U.__webglTexture=j[tt].texture}return st}function pt(U,A,st){let Ot=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ot=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ot=o.TEXTURE_3D);const j=Y(U,A),tt=A.source;i.bindTexture(Ot,U.__webglTexture,o.TEXTURE0+st);const ut=r.get(tt);if(tt.version!==ut.__version||j===!0){i.activeTexture(o.TEXTURE0+st);const dt=Ge.getPrimaries(Ge.workingColorSpace),_t=A.colorSpace===pi?null:Ge.getPrimaries(A.colorSpace),At=A.colorSpace===pi||dt===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ut=_(A)&&v(A.image)===!1;let vt=R(A.image,Ut,!1,l.maxTextureSize);vt=he(A,vt);const fe=v(vt)||d,Gt=u.convert(A.format,A.colorSpace);let Ht=u.convert(A.type),Bt=P(A.internalFormat,Gt,Ht,A.colorSpace,A.isVideoTexture);Lt(Ot,A,fe);let bt;const te=A.mipmaps,L=d&&A.isVideoTexture!==!0&&Bt!==n_,Et=ut.__version===void 0||j===!0,Nt=tt.dataReady,ee=W(A,vt,fe);if(A.isDepthTexture)Bt=o.DEPTH_COMPONENT,d?A.type===ra?Bt=o.DEPTH_COMPONENT32F:A.type===Fa?Bt=o.DEPTH_COMPONENT24:A.type===_r?Bt=o.DEPTH24_STENCIL8:Bt=o.DEPTH_COMPONENT16:A.type===ra&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===vr&&Bt===o.DEPTH_COMPONENT&&A.type!==Cd&&A.type!==Fa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Fa,Ht=u.convert(A.type)),A.format===As&&Bt===o.DEPTH_COMPONENT&&(Bt=o.DEPTH_STENCIL,A.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=_r,Ht=u.convert(A.type))),Et&&(L?i.texStorage2D(o.TEXTURE_2D,1,Bt,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,vt.width,vt.height,0,Gt,Ht,null));else if(A.isDataTexture)if(te.length>0&&fe){L&&Et&&i.texStorage2D(o.TEXTURE_2D,ee,Bt,te[0].width,te[0].height);for(let N=0,Ct=te.length;N<Ct;N++)bt=te[N],L?Nt&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,bt.width,bt.height,Gt,Ht,bt.data):i.texImage2D(o.TEXTURE_2D,N,Bt,bt.width,bt.height,0,Gt,Ht,bt.data);A.generateMipmaps=!1}else L?(Et&&i.texStorage2D(o.TEXTURE_2D,ee,Bt,vt.width,vt.height),Nt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,Gt,Ht,vt.data)):i.texImage2D(o.TEXTURE_2D,0,Bt,vt.width,vt.height,0,Gt,Ht,vt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){L&&Et&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ee,Bt,te[0].width,te[0].height,vt.depth);for(let N=0,Ct=te.length;N<Ct;N++)bt=te[N],A.format!==Ti?Gt!==null?L?Nt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,N,0,0,0,bt.width,bt.height,vt.depth,Gt,bt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,N,Bt,bt.width,bt.height,vt.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?Nt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,N,0,0,0,bt.width,bt.height,vt.depth,Gt,Ht,bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,N,Bt,bt.width,bt.height,vt.depth,0,Gt,Ht,bt.data)}else{L&&Et&&i.texStorage2D(o.TEXTURE_2D,ee,Bt,te[0].width,te[0].height);for(let N=0,Ct=te.length;N<Ct;N++)bt=te[N],A.format!==Ti?Gt!==null?L?Nt&&i.compressedTexSubImage2D(o.TEXTURE_2D,N,0,0,bt.width,bt.height,Gt,bt.data):i.compressedTexImage2D(o.TEXTURE_2D,N,Bt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?Nt&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,bt.width,bt.height,Gt,Ht,bt.data):i.texImage2D(o.TEXTURE_2D,N,Bt,bt.width,bt.height,0,Gt,Ht,bt.data)}else if(A.isDataArrayTexture)L?(Et&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ee,Bt,vt.width,vt.height,vt.depth),Nt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Gt,Ht,vt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,vt.width,vt.height,vt.depth,0,Gt,Ht,vt.data);else if(A.isData3DTexture)L?(Et&&i.texStorage3D(o.TEXTURE_3D,ee,Bt,vt.width,vt.height,vt.depth),Nt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Gt,Ht,vt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,vt.width,vt.height,vt.depth,0,Gt,Ht,vt.data);else if(A.isFramebufferTexture){if(Et)if(L)i.texStorage2D(o.TEXTURE_2D,ee,Bt,vt.width,vt.height);else{let N=vt.width,Ct=vt.height;for(let Mt=0;Mt<ee;Mt++)i.texImage2D(o.TEXTURE_2D,Mt,Bt,N,Ct,0,Gt,Ht,null),N>>=1,Ct>>=1}}else if(te.length>0&&fe){L&&Et&&i.texStorage2D(o.TEXTURE_2D,ee,Bt,te[0].width,te[0].height);for(let N=0,Ct=te.length;N<Ct;N++)bt=te[N],L?Nt&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,Gt,Ht,bt):i.texImage2D(o.TEXTURE_2D,N,Bt,Gt,Ht,bt);A.generateMipmaps=!1}else L?(Et&&i.texStorage2D(o.TEXTURE_2D,ee,Bt,vt.width,vt.height),Nt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Ht,vt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Gt,Ht,vt);z(A,fe)&&D(Ot),ut.__version=tt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Rt(U,A,st){if(A.image.length!==6)return;const Ot=Y(U,A),j=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+st);const tt=r.get(j);if(j.version!==tt.__version||Ot===!0){i.activeTexture(o.TEXTURE0+st);const ut=Ge.getPrimaries(Ge.workingColorSpace),dt=A.colorSpace===pi?null:Ge.getPrimaries(A.colorSpace),_t=A.colorSpace===pi||ut===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const At=A.isCompressedTexture||A.image[0].isCompressedTexture,Ut=A.image[0]&&A.image[0].isDataTexture,vt=[];for(let N=0;N<6;N++)!At&&!Ut?vt[N]=R(A.image[N],!1,!0,l.maxCubemapSize):vt[N]=Ut?A.image[N].image:A.image[N],vt[N]=he(A,vt[N]);const fe=vt[0],Gt=v(fe)||d,Ht=u.convert(A.format,A.colorSpace),Bt=u.convert(A.type),bt=P(A.internalFormat,Ht,Bt,A.colorSpace),te=d&&A.isVideoTexture!==!0,L=tt.__version===void 0||Ot===!0,Et=j.dataReady;let Nt=W(A,fe,Gt);Lt(o.TEXTURE_CUBE_MAP,A,Gt);let ee;if(At){te&&L&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,bt,fe.width,fe.height);for(let N=0;N<6;N++){ee=vt[N].mipmaps;for(let Ct=0;Ct<ee.length;Ct++){const Mt=ee[Ct];A.format!==Ti?Ht!==null?te?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct,0,0,Mt.width,Mt.height,Ht,Mt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct,bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct,0,0,Mt.width,Mt.height,Ht,Bt,Mt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct,bt,Mt.width,Mt.height,0,Ht,Bt,Mt.data)}}}else{ee=A.mipmaps,te&&L&&(ee.length>0&&Nt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,bt,vt[0].width,vt[0].height));for(let N=0;N<6;N++)if(Ut){te?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,vt[N].width,vt[N].height,Ht,Bt,vt[N].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,bt,vt[N].width,vt[N].height,0,Ht,Bt,vt[N].data);for(let Ct=0;Ct<ee.length;Ct++){const qt=ee[Ct].image[N].image;te?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct+1,0,0,qt.width,qt.height,Ht,Bt,qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct+1,bt,qt.width,qt.height,0,Ht,Bt,qt.data)}}else{te?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ht,Bt,vt[N]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,bt,Ht,Bt,vt[N]);for(let Ct=0;Ct<ee.length;Ct++){const Mt=ee[Ct];te?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct+1,0,0,Ht,Bt,Mt.image[N]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct+1,bt,Ht,Bt,Mt.image[N])}}}z(A,Gt)&&D(o.TEXTURE_CUBE_MAP),tt.__version=j.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Yt(U,A,st,Ot,j,tt){const ut=u.convert(st.format,st.colorSpace),dt=u.convert(st.type),_t=P(st.internalFormat,ut,dt,st.colorSpace);if(!r.get(A).__hasExternalTextures){const Ut=Math.max(1,A.width>>tt),vt=Math.max(1,A.height>>tt);j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?i.texImage3D(j,tt,_t,Ut,vt,A.depth,0,ut,dt,null):i.texImage2D(j,tt,_t,Ut,vt,0,ut,dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Kt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ot,j,r.get(st).__webglTexture,0,ue(A)):(j===o.TEXTURE_2D||j>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ot,j,r.get(st).__webglTexture,tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,A,st){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let Ot=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(st||Kt(A)){const j=A.depthTexture;j&&j.isDepthTexture&&(j.type===ra?Ot=o.DEPTH_COMPONENT32F:j.type===Fa&&(Ot=o.DEPTH_COMPONENT24));const tt=ue(A);Kt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tt,Ot,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,Ot,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,Ot,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const Ot=ue(A);st&&Kt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,o.DEPTH24_STENCIL8,A.width,A.height):Kt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const Ot=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let j=0;j<Ot.length;j++){const tt=Ot[j],ut=u.convert(tt.format,tt.colorSpace),dt=u.convert(tt.type),_t=P(tt.internalFormat,ut,dt,tt.colorSpace),At=ue(A);st&&Kt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,_t,A.width,A.height):Kt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,_t,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,_t,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const Ot=r.get(A.depthTexture).__webglTexture,j=ue(A);if(A.depthTexture.format===vr)Kt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ot,0,j):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ot,0);else if(A.depthTexture.format===As)Kt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ot,0,j):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ot,0);else throw new Error("Unknown depthTexture format")}function $t(U){const A=r.get(U),st=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");zt(A.__webglFramebuffer,U)}else if(st){A.__webglDepthbuffer=[];for(let Ot=0;Ot<6;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[Ot]),A.__webglDepthbuffer[Ot]=o.createRenderbuffer(),Pt(A.__webglDepthbuffer[Ot],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Pt(A.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(U,A,st){const Ot=r.get(U);A!==void 0&&Yt(Ot.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&$t(U)}function nt(U){const A=U.texture,st=r.get(U),Ot=r.get(A);U.addEventListener("dispose",ft),U.isWebGLMultipleRenderTargets!==!0&&(Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture()),Ot.__version=A.version,h.memory.textures++);const j=U.isWebGLCubeRenderTarget===!0,tt=U.isWebGLMultipleRenderTargets===!0,ut=v(U)||d;if(j){st.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(d&&A.mipmaps&&A.mipmaps.length>0){st.__webglFramebuffer[dt]=[];for(let _t=0;_t<A.mipmaps.length;_t++)st.__webglFramebuffer[dt][_t]=o.createFramebuffer()}else st.__webglFramebuffer[dt]=o.createFramebuffer()}else{if(d&&A.mipmaps&&A.mipmaps.length>0){st.__webglFramebuffer=[];for(let dt=0;dt<A.mipmaps.length;dt++)st.__webglFramebuffer[dt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(tt)if(l.drawBuffers){const dt=U.texture;for(let _t=0,At=dt.length;_t<At;_t++){const Ut=r.get(dt[_t]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&U.samples>0&&Kt(U)===!1){const dt=tt?A:[A];st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let _t=0;_t<dt.length;_t++){const At=dt[_t];st.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[_t]);const Ut=u.convert(At.format,At.colorSpace),vt=u.convert(At.type),fe=P(At.internalFormat,Ut,vt,At.colorSpace,U.isXRRenderTarget===!0),Gt=ue(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,fe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,st.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(st.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(j){i.bindTexture(o.TEXTURE_CUBE_MAP,Ot.__webglTexture),Lt(o.TEXTURE_CUBE_MAP,A,ut);for(let dt=0;dt<6;dt++)if(d&&A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)Yt(st.__webglFramebuffer[dt][_t],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else Yt(st.__webglFramebuffer[dt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);z(A,ut)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(tt){const dt=U.texture;for(let _t=0,At=dt.length;_t<At;_t++){const Ut=dt[_t],vt=r.get(Ut);i.bindTexture(o.TEXTURE_2D,vt.__webglTexture),Lt(o.TEXTURE_2D,Ut,ut),Yt(st.__webglFramebuffer,U,Ut,o.COLOR_ATTACHMENT0+_t,o.TEXTURE_2D,0),z(Ut,ut)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(d?dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(dt,Ot.__webglTexture),Lt(dt,A,ut),d&&A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)Yt(st.__webglFramebuffer[_t],U,A,o.COLOR_ATTACHMENT0,dt,_t);else Yt(st.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,dt,0);z(A,ut)&&D(dt),i.unbindTexture()}U.depthBuffer&&$t(U)}function ze(U){const A=v(U)||d,st=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let Ot=0,j=st.length;Ot<j;Ot++){const tt=st[Ot];if(z(tt,A)){const ut=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,dt=r.get(tt).__webglTexture;i.bindTexture(ut,dt),D(ut),i.unbindTexture()}}}function ae(U){if(d&&U.samples>0&&Kt(U)===!1){const A=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],st=U.width,Ot=U.height;let j=o.COLOR_BUFFER_BIT;const tt=[],ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=r.get(U),_t=U.isWebGLMultipleRenderTargets===!0;if(_t)for(let At=0;At<A.length;At++)i.bindFramebuffer(o.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let At=0;At<A.length;At++){tt.push(o.COLOR_ATTACHMENT0+At),U.depthBuffer&&tt.push(ut);const Ut=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ut===!1&&(U.depthBuffer&&(j|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(j|=o.STENCIL_BUFFER_BIT)),_t&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,dt.__webglColorRenderbuffer[At]),Ut===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ut]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ut])),_t){const vt=r.get(A[At]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,st,Ot,0,0,st,Ot,j,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<A.length;At++){i.bindFramebuffer(o.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,dt.__webglColorRenderbuffer[At]);const Ut=r.get(A[At]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,Ut,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function ue(U){return Math.min(l.maxSamples,U.samples)}function Kt(U){const A=r.get(U);return d&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(U){const A=h.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function he(U,A){const st=U.colorSpace,Ot=U.format,j=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Ed||st!==oa&&st!==pi&&(Ge.getTransfer(st)===Ye?d===!1?t.has("EXT_sRGB")===!0&&Ot===Ti?(U.format=Ed,U.minFilter=Xn,U.generateMipmaps=!1):A=o_.sRGBToLinear(A):(Ot!==Ti||j!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),A}this.allocateTextureUnit=q,this.resetTextureUnits=St,this.setTexture2D=G,this.setTexture2DArray=ot,this.setTexture3D=it,this.setTextureCube=ht,this.rebindTextures=ie,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Kt}function JT(o,t,i){const r=i.isWebGL2;function l(u,h=pi){let d;const p=Ge.getTransfer(h);if(u===Ga)return o.UNSIGNED_BYTE;if(u===Q0)return o.UNSIGNED_SHORT_4_4_4_4;if(u===J0)return o.UNSIGNED_SHORT_5_5_5_1;if(u===Sy)return o.BYTE;if(u===My)return o.SHORT;if(u===Cd)return o.UNSIGNED_SHORT;if(u===K0)return o.INT;if(u===Fa)return o.UNSIGNED_INT;if(u===ra)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===Ey)return o.ALPHA;if(u===Ti)return o.RGBA;if(u===by)return o.LUMINANCE;if(u===Ty)return o.LUMINANCE_ALPHA;if(u===vr)return o.DEPTH_COMPONENT;if(u===As)return o.DEPTH_STENCIL;if(u===Ed)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===Ay)return o.RED;if(u===$0)return o.RED_INTEGER;if(u===wy)return o.RG;if(u===t_)return o.RG_INTEGER;if(u===e_)return o.RGBA_INTEGER;if(u===If||u===Hf||u===Gf||u===Vf)if(p===Ye)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===If)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Vf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===If)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Vf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===xg||u===yg||u===Sg||u===Mg)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===xg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Sg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Mg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===n_)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Eg||u===bg)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Eg)return p===Ye?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===bg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Tg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg||u===Bg||u===Fg)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Tg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Ag)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===wg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Rg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Cg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Dg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Lg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Ug)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Ng)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Og)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Pg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===zg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Bg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Fg)return p===Ye?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===kf||u===Ig||u===Hg)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(u===kf)return p===Ye?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Ig)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Hg)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Ry||u===Gg||u===Vg||u===kg)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(u===kf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Gg)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Vg)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===kg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===_r?r?o.UNSIGNED_INT_24_8:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class $T extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Po extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const R of t.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=g.position.distanceTo(x.position),M=.02,T=.005;m.inputState.pinching&&y>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const e1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Yn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(t,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new la({extensions:{fragDepth:!0},vertexShader:e1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new ni(new Go(20,20),l)}t.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class a1 extends Mr{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,y=null,M=null,T=null;const R=new i1,v=i.getContextAttributes();let _=null,z=null;const D=[],P=[],W=new ge;let k=null;const I=new ei;I.layers.enable(1),I.viewport=new Qe;const ft=new ei;ft.layers.enable(2),ft.viewport=new Qe;const B=[I,ft],E=new $T;E.layers.enable(1),E.layers.enable(2);let O=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=D[Y];return pt===void 0&&(pt=new dd,D[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=D[Y];return pt===void 0&&(pt=new dd,D[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=D[Y];return pt===void 0&&(pt=new dd,D[Y]=pt),pt.getHandSpace()};function St(Y){const pt=P.indexOf(Y.inputSource);if(pt===-1)return;const Rt=D[pt];Rt!==void 0&&(Rt.update(Y.inputSource,Y.frame,m||h),Rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){l.removeEventListener("select",St),l.removeEventListener("selectstart",St),l.removeEventListener("selectend",St),l.removeEventListener("squeeze",St),l.removeEventListener("squeezestart",St),l.removeEventListener("squeezeend",St),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",rt);for(let Y=0;Y<D.length;Y++){const pt=P[Y];pt!==null&&(P[Y]=null,D[Y].disconnect(pt))}O=null,ct=null,R.reset(),t.setRenderTarget(_),M=null,y=null,x=null,l=null,z=null,Lt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",St),l.addEventListener("selectstart",St),l.addEventListener("selectend",St),l.addEventListener("squeeze",St),l.addEventListener("squeezestart",St),l.addEventListener("squeezeend",St),l.addEventListener("end",q),l.addEventListener("inputsourceschange",rt),v.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(W),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const pt={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new yr(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Ga,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let pt=null,Rt=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=v.stencil?As:vr,Rt=v.stencil?_r:Fa);const Pt={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Pt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),z=new yr(y.textureWidth,y.textureHeight,{format:Ti,type:Ga,depthTexture:new y_(y.textureWidth,y.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const zt=t.properties.get(z);zt.__ignoreDepthValues=y.ignoreDepthValues}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Lt.setContext(l),Lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function rt(Y){for(let pt=0;pt<Y.removed.length;pt++){const Rt=Y.removed[pt],Yt=P.indexOf(Rt);Yt>=0&&(P[Yt]=null,D[Yt].disconnect(Rt))}for(let pt=0;pt<Y.added.length;pt++){const Rt=Y.added[pt];let Yt=P.indexOf(Rt);if(Yt===-1){for(let zt=0;zt<D.length;zt++)if(zt>=P.length){P.push(Rt),Yt=zt;break}else if(P[zt]===null){P[zt]=Rt,Yt=zt;break}if(Yt===-1)break}const Pt=D[Yt];Pt&&Pt.connect(Rt)}}const G=new Z,ot=new Z;function it(Y,pt,Rt){G.setFromMatrixPosition(pt.matrixWorld),ot.setFromMatrixPosition(Rt.matrixWorld);const Yt=G.distanceTo(ot),Pt=pt.projectionMatrix.elements,zt=Rt.projectionMatrix.elements,$t=Pt[14]/(Pt[10]-1),ie=Pt[14]/(Pt[10]+1),nt=(Pt[9]+1)/Pt[5],ze=(Pt[9]-1)/Pt[5],ae=(Pt[8]-1)/Pt[0],ue=(zt[8]+1)/zt[0],Kt=$t*ae,Pe=$t*ue,he=Yt/(-ae+ue),U=he*-ae;pt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(U),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const A=$t+he,st=ie+he,Ot=Kt-U,j=Pe+(Yt-U),tt=nt*ie/st*A,ut=ze*ie/st*A;Y.projectionMatrix.makePerspective(Ot,j,tt,ut,A,st),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ht(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;R.texture!==null&&(Y.near=R.depthNear,Y.far=R.depthFar),E.near=ft.near=I.near=Y.near,E.far=ft.far=I.far=Y.far,(O!==E.near||ct!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,ct=E.far,I.near=O,I.far=ct,ft.near=O,ft.far=ct,I.updateProjectionMatrix(),ft.updateProjectionMatrix(),Y.updateProjectionMatrix());const pt=Y.parent,Rt=E.cameras;ht(E,pt);for(let Yt=0;Yt<Rt.length;Yt++)ht(Rt[Yt],pt);Rt.length===2?it(E,I,ft):E.projectionMatrix.copy(I.projectionMatrix),C(Y,E,pt)};function C(Y,pt,Rt){Rt===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(Rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null};let J=null;function mt(Y,pt){if(g=pt.getViewerPose(m||h),T=pt,g!==null){const Rt=g.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let Yt=!1;Rt.length!==E.cameras.length&&(E.cameras.length=0,Yt=!0);for(let zt=0;zt<Rt.length;zt++){const $t=Rt[zt];let ie=null;if(M!==null)ie=M.getViewport($t);else{const ze=x.getViewSubImage(y,$t);ie=ze.viewport,zt===0&&(t.setRenderTargetTextures(z,ze.colorTexture,y.ignoreDepthValues?void 0:ze.depthStencilTexture),t.setRenderTarget(z))}let nt=B[zt];nt===void 0&&(nt=new ei,nt.layers.enable(zt),nt.viewport=new Qe,B[zt]=nt),nt.matrix.fromArray($t.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray($t.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ie.x,ie.y,ie.width,ie.height),zt===0&&(E.matrix.copy(nt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Yt===!0&&E.cameras.push(nt)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const zt=x.getDepthInformation(Rt[0]);zt&&zt.isValid&&zt.texture&&R.init(t,zt,l.renderState)}}for(let Rt=0;Rt<D.length;Rt++){const Yt=P[Rt],Pt=D[Rt];Yt!==null&&Pt!==void 0&&Pt.update(Yt,pt,m||h)}R.render(t,E),J&&J(Y,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),T=null}const Lt=new v_;Lt.setAnimationLoop(mt),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}}function r1(o,t){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,m_(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,z,D,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),x(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),y(v,_),_.isMeshPhysicalMaterial&&M(v,_,P)):_.isMeshMatcapMaterial?(u(v,_),T(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,z,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===qn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===qn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const z=t.get(_).envMap;if(z&&(v.envMap.value=z,v.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,z,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*z,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),t.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,z){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=z.texture,v.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const z=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(z.matrixWorld),v.nearDistance.value=z.shadow.camera.near,v.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function s1(o,t,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(z,D){const P=D.program;r.uniformBlockBinding(z,P)}function m(z,D){let P=l[z.id];P===void 0&&(T(z),P=g(z),l[z.id]=P,z.addEventListener("dispose",v));const W=D.program;r.updateUBOMapping(z,W);const k=t.render.frame;u[z.id]!==k&&(y(z),u[z.id]=k)}function g(z){const D=x();z.__bindingPointIndex=D;const P=o.createBuffer(),W=z.__size,k=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,W,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function x(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const D=l[z.id],P=z.uniforms,W=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let k=0,I=P.length;k<I;k++){const ft=Array.isArray(P[k])?P[k]:[P[k]];for(let B=0,E=ft.length;B<E;B++){const O=ft[B];if(M(O,k,B,W)===!0){const ct=O.__offset,St=Array.isArray(O.value)?O.value:[O.value];let q=0;for(let rt=0;rt<St.length;rt++){const G=St[rt],ot=R(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,ct+q,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,q),q+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,D,P,W){const k=z.value,I=D+"_"+P;if(W[I]===void 0)return typeof k=="number"||typeof k=="boolean"?W[I]=k:W[I]=k.clone(),!0;{const ft=W[I];if(typeof k=="number"||typeof k=="boolean"){if(ft!==k)return W[I]=k,!0}else if(ft.equals(k)===!1)return ft.copy(k),!0}return!1}function T(z){const D=z.uniforms;let P=0;const W=16;for(let I=0,ft=D.length;I<ft;I++){const B=Array.isArray(D[I])?D[I]:[D[I]];for(let E=0,O=B.length;E<O;E++){const ct=B[E],St=Array.isArray(ct.value)?ct.value:[ct.value];for(let q=0,rt=St.length;q<rt;q++){const G=St[q],ot=R(G),it=P%W;it!==0&&W-it<ot.boundary&&(P+=W-it),ct.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=P,P+=ot.storage}}}const k=P%W;return k>0&&(P+=W-k),z.__size=P,z.__cache={},this}function R(z){const D={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(D.boundary=4,D.storage=4):z.isVector2?(D.boundary=8,D.storage=8):z.isVector3||z.isColor?(D.boundary=16,D.storage=12):z.isVector4?(D.boundary=16,D.storage=16):z.isMatrix3?(D.boundary=48,D.storage=48):z.isMatrix4?(D.boundary=64,D.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),D}function v(z){const D=z.target;D.removeEventListener("dispose",v);const P=h.indexOf(D.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class A_{constructor(t={}){const{canvas:i=$y(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=t;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=h;const M=new Uint32Array(4),T=new Int32Array(4);let R=null,v=null;const _=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let P=!1,W=0,k=0,I=null,ft=-1,B=null;const E=new Qe,O=new Qe;let ct=null;const St=new De(0);let q=0,rt=i.width,G=i.height,ot=1,it=null,ht=null;const C=new Qe(0,0,rt,G),J=new Qe(0,0,rt,G);let mt=!1;const Lt=new Nd;let Y=!1,pt=!1,Rt=null;const Yt=new ln,Pt=new ge,zt=new Z,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return I===null?ot:1}let nt=r;function ze(b,H){for(let V=0;V<b.length;V++){const K=b[V],X=i.getContext(K,H);if(X!==null)return X}return null}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rd}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",N,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),nt===null){const H=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&H.shift(),nt=ze(H,b),nt===null)throw ze(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),nt.getShaderPrecisionFormat===void 0&&(nt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,ue,Kt,Pe,he,U,A,st,Ot,j,tt,ut,dt,_t,At,Ut,vt,fe,Gt,Ht,Bt,bt,te,L;function Et(){ae=new hb(nt),ue=new ob(nt,ae,t),ae.init(ue),bt=new JT(nt,ae,ue),Kt=new KT(nt,ae,ue),Pe=new gb(nt),he=new zT,U=new QT(nt,ae,Kt,he,ue,bt,Pe),A=new cb(D),st=new db(D),Ot=new bS(nt,ue),te=new rb(nt,ae,Ot,ue),j=new pb(nt,Ot,Pe,te),tt=new yb(nt,j,Ot,Pe),Gt=new xb(nt,ue,U),Ut=new lb(he),ut=new PT(D,A,st,ae,ue,te,Ut),dt=new r1(D,he),_t=new FT,At=new WT(ae,ue),fe=new ab(D,A,st,Kt,tt,y,p),vt=new ZT(D,tt,ue),L=new s1(nt,Pe,ue,Kt),Ht=new sb(nt,ae,Pe,ue),Bt=new mb(nt,ae,Pe,ue),Pe.programs=ut.programs,D.capabilities=ue,D.extensions=ae,D.properties=he,D.renderLists=_t,D.shadowMap=vt,D.state=Kt,D.info=Pe}Et();const Nt=new a1(D,nt);this.xr=Nt,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(b){b!==void 0&&(ot=b,this.setSize(rt,G,!1))},this.getSize=function(b){return b.set(rt,G)},this.setSize=function(b,H,V=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=b,G=H,i.width=Math.floor(b*ot),i.height=Math.floor(H*ot),V===!0&&(i.style.width=b+"px",i.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(rt*ot,G*ot).floor()},this.setDrawingBufferSize=function(b,H,V){rt=b,G=H,ot=V,i.width=Math.floor(b*V),i.height=Math.floor(H*V),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,H,V,K){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,H,V,K),Kt.viewport(E.copy(C).multiplyScalar(ot).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,H,V,K){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,H,V,K),Kt.scissor(O.copy(J).multiplyScalar(ot).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){Kt.setScissorTest(mt=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(b=!0,H=!0,V=!0){let K=0;if(b){let X=!1;if(I!==null){const yt=I.texture.format;X=yt===e_||yt===t_||yt===$0}if(X){const yt=I.texture.type,wt=yt===Ga||yt===Fa||yt===Cd||yt===_r||yt===Q0||yt===J0,Wt=fe.getClearColor(),Ft=fe.getClearAlpha(),re=Wt.r,se=Wt.g,le=Wt.b;wt?(M[0]=re,M[1]=se,M[2]=le,M[3]=Ft,nt.clearBufferuiv(nt.COLOR,0,M)):(T[0]=re,T[1]=se,T[2]=le,T[3]=Ft,nt.clearBufferiv(nt.COLOR,0,T))}else K|=nt.COLOR_BUFFER_BIT}H&&(K|=nt.DEPTH_BUFFER_BIT),V&&(K|=nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",N,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),_t.dispose(),At.dispose(),he.dispose(),A.dispose(),st.dispose(),tt.dispose(),te.dispose(),L.dispose(),ut.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",pe),Nt.removeEventListener("sessionend",ne),Rt&&(Rt.dispose(),Rt=null),xe.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Pe.autoReset,H=vt.enabled,V=vt.autoUpdate,K=vt.needsUpdate,X=vt.type;Et(),Pe.autoReset=b,vt.enabled=H,vt.autoUpdate=V,vt.needsUpdate=K,vt.type=X}function Ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Mt(b){const H=b.target;H.removeEventListener("dispose",Mt),qt(H)}function qt(b){Qt(b),he.remove(b)}function Qt(b){const H=he.get(b).programs;H!==void 0&&(H.forEach(function(V){ut.releaseProgram(V)}),b.isShaderMaterial&&ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,V,K,X,yt){H===null&&(H=$t);const wt=X.isMesh&&X.matrixWorld.determinant()<0,Wt=Xt(b,H,V,K,X);Kt.setMaterial(K,wt);let Ft=V.index,re=1;if(K.wireframe===!0){if(Ft=j.getWireframeAttribute(V),Ft===void 0)return;re=2}const se=V.drawRange,le=V.attributes.position;let Le=se.start*re,Be=(se.start+se.count)*re;yt!==null&&(Le=Math.max(Le,yt.start*re),Be=Math.min(Be,(yt.start+yt.count)*re)),Ft!==null?(Le=Math.max(Le,0),Be=Math.min(Be,Ft.count)):le!=null&&(Le=Math.max(Le,0),Be=Math.min(Be,le.count));const Ke=Be-Le;if(Ke<0||Ke===1/0)return;te.setup(X,K,Wt,V,Ft);let Gn,Ue=Ht;if(Ft!==null&&(Gn=Ot.get(Ft),Ue=Bt,Ue.setIndex(Gn)),X.isMesh)K.wireframe===!0?(Kt.setLineWidth(K.wireframeLinewidth*ie()),Ue.setMode(nt.LINES)):Ue.setMode(nt.TRIANGLES);else if(X.isLine){let ye=K.linewidth;ye===void 0&&(ye=1),Kt.setLineWidth(ye*ie()),X.isLineSegments?Ue.setMode(nt.LINES):X.isLineLoop?Ue.setMode(nt.LINE_LOOP):Ue.setMode(nt.LINE_STRIP)}else X.isPoints?Ue.setMode(nt.POINTS):X.isSprite&&Ue.setMode(nt.TRIANGLES);if(X.isBatchedMesh)Ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Ue.renderInstances(Le,Ke,X.count);else if(V.isInstancedBufferGeometry){const ye=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gi=Math.min(V.instanceCount,ye);Ue.renderInstances(Le,Ke,gi)}else Ue.render(Le,Ke)};function Me(b,H,V){b.transparent===!0&&b.side===Oi&&b.forceSinglePass===!1?(b.side=qn,b.needsUpdate=!0,Mn(b,H,V),b.side=Va,b.needsUpdate=!0,Mn(b,H,V),b.side=Oi):Mn(b,H,V)}this.compile=function(b,H,V=null){V===null&&(V=b),v=At.get(V),v.init(),z.push(v),V.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),b!==V&&b.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights(D._useLegacyLights);const K=new Set;return b.traverse(function(X){const yt=X.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){const Wt=yt[wt];Me(Wt,V,X),K.add(Wt)}else Me(yt,V,X),K.add(yt)}),z.pop(),v=null,K},this.compileAsync=function(b,H,V=null){const K=this.compile(b,H,V);return new Promise(X=>{function yt(){if(K.forEach(function(wt){he.get(wt).currentProgram.isReady()&&K.delete(wt)}),K.size===0){X(b);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let jt=null;function de(b){jt&&jt(b)}function pe(){xe.stop()}function ne(){xe.start()}const xe=new v_;xe.setAnimationLoop(de),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(b){jt=b,Nt.setAnimationLoop(b),b===null?xe.stop():xe.start()},Nt.addEventListener("sessionstart",pe),Nt.addEventListener("sessionend",ne),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(H),H=Nt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,H,I),v=At.get(b,z.length),v.init(),z.push(v),Yt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Lt.setFromProjectionMatrix(Yt),pt=this.localClippingEnabled,Y=Ut.init(this.clippingPlanes,pt),R=_t.get(b,_.length),R.init(),_.push(R),Xe(b,H,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(it,ht),this.info.render.frame++,Y===!0&&Ut.beginShadows();const V=v.state.shadowsArray;if(vt.render(V,b,H),Y===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1)&&fe.render(R,b),v.setupLights(D._useLegacyLights),H.isArrayCamera){const K=H.cameras;for(let X=0,yt=K.length;X<yt;X++){const wt=K[X];Hn(R,b,wt,wt.viewport)}}else Hn(R,b,H);I!==null&&(U.updateMultisampleRenderTarget(I),U.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(D,b,H),te.resetDefaultState(),ft=-1,B=null,z.pop(),z.length>0?v=z[z.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Xe(b,H,V,K){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Lt.intersectsSprite(b)){K&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Yt);const wt=tt.update(b),Wt=b.material;Wt.visible&&R.push(b,wt,Wt,V,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Lt.intersectsObject(b))){const wt=tt.update(b),Wt=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),zt.copy(wt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(Yt)),Array.isArray(Wt)){const Ft=wt.groups;for(let re=0,se=Ft.length;re<se;re++){const le=Ft[re],Le=Wt[le.materialIndex];Le&&Le.visible&&R.push(b,wt,Le,V,zt.z,le)}}else Wt.visible&&R.push(b,wt,Wt,V,zt.z,null)}}const yt=b.children;for(let wt=0,Wt=yt.length;wt<Wt;wt++)Xe(yt[wt],H,V,K)}function Hn(b,H,V,K){const X=b.opaque,yt=b.transmissive,wt=b.transparent;v.setupLightsView(V),Y===!0&&Ut.setGlobalState(D.clippingPlanes,V),yt.length>0&&mi(X,yt,H,V),K&&Kt.viewport(E.copy(K)),X.length>0&&je(X,H,V),yt.length>0&&je(yt,H,V),wt.length>0&&je(wt,H,V),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function mi(b,H,V,K){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const yt=ue.isWebGL2;Rt===null&&(Rt=new yr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Fo:Ga,minFilter:gr,samples:yt?4:0})),D.getDrawingBufferSize(Pt),yt?Rt.setSize(Pt.x,Pt.y):Rt.setSize(Mc(Pt.x),Mc(Pt.y));const wt=D.getRenderTarget();D.setRenderTarget(Rt),D.getClearColor(St),q=D.getClearAlpha(),q<1&&D.setClearColor(16777215,.5),D.clear();const Wt=D.toneMapping;D.toneMapping=Ha,je(b,V,K),U.updateMultisampleRenderTarget(Rt),U.updateRenderTargetMipmap(Rt);let Ft=!1;for(let re=0,se=H.length;re<se;re++){const le=H[re],Le=le.object,Be=le.geometry,Ke=le.material,Gn=le.group;if(Ke.side===Oi&&Le.layers.test(K.layers)){const Ue=Ke.side;Ke.side=qn,Ke.needsUpdate=!0,Bi(Le,V,K,Be,Ke,Gn),Ke.side=Ue,Ke.needsUpdate=!0,Ft=!0}}Ft===!0&&(U.updateMultisampleRenderTarget(Rt),U.updateRenderTargetMipmap(Rt)),D.setRenderTarget(wt),D.setClearColor(St,q),D.toneMapping=Wt}function je(b,H,V){const K=H.isScene===!0?H.overrideMaterial:null;for(let X=0,yt=b.length;X<yt;X++){const wt=b[X],Wt=wt.object,Ft=wt.geometry,re=K===null?wt.material:K,se=wt.group;Wt.layers.test(V.layers)&&Bi(Wt,H,V,Ft,re,se)}}function Bi(b,H,V,K,X,yt){b.onBeforeRender(D,H,V,K,X,yt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(D,H,V,K,b,yt),X.transparent===!0&&X.side===Oi&&X.forceSinglePass===!1?(X.side=qn,X.needsUpdate=!0,D.renderBufferDirect(V,H,K,X,b,yt),X.side=Va,X.needsUpdate=!0,D.renderBufferDirect(V,H,K,X,b,yt),X.side=Oi):D.renderBufferDirect(V,H,K,X,b,yt),b.onAfterRender(D,H,V,K,X,yt)}function Mn(b,H,V){H.isScene!==!0&&(H=$t);const K=he.get(b),X=v.state.lights,yt=v.state.shadowsArray,wt=X.state.version,Wt=ut.getParameters(b,X.state,yt,H,V),Ft=ut.getProgramCacheKey(Wt);let re=K.programs;K.environment=b.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(b.isMeshStandardMaterial?st:A).get(b.envMap||K.environment),re===void 0&&(b.addEventListener("dispose",Mt),re=new Map,K.programs=re);let se=re.get(Ft);if(se!==void 0){if(K.currentProgram===se&&K.lightsStateVersion===wt)return an(b,Wt),se}else Wt.uniforms=ut.getUniforms(b),b.onBuild(V,Wt,D),b.onBeforeCompile(Wt,D),se=ut.acquireProgram(Wt,Ft),re.set(Ft,se),K.uniforms=Wt.uniforms;const le=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(le.clippingPlanes=Ut.uniform),an(b,Wt),K.needsLights=kt(b),K.lightsStateVersion=wt,K.needsLights&&(le.ambientLightColor.value=X.state.ambient,le.lightProbe.value=X.state.probe,le.directionalLights.value=X.state.directional,le.directionalLightShadows.value=X.state.directionalShadow,le.spotLights.value=X.state.spot,le.spotLightShadows.value=X.state.spotShadow,le.rectAreaLights.value=X.state.rectArea,le.ltc_1.value=X.state.rectAreaLTC1,le.ltc_2.value=X.state.rectAreaLTC2,le.pointLights.value=X.state.point,le.pointLightShadows.value=X.state.pointShadow,le.hemisphereLights.value=X.state.hemi,le.directionalShadowMap.value=X.state.directionalShadowMap,le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,le.spotShadowMap.value=X.state.spotShadowMap,le.spotLightMatrix.value=X.state.spotLightMatrix,le.spotLightMap.value=X.state.spotLightMap,le.pointShadowMap.value=X.state.pointShadowMap,le.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=se,K.uniformsList=null,se}function Ze(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=gc.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function an(b,H){const V=he.get(b);V.outputColorSpace=H.outputColorSpace,V.batching=H.batching,V.instancing=H.instancing,V.instancingColor=H.instancingColor,V.skinning=H.skinning,V.morphTargets=H.morphTargets,V.morphNormals=H.morphNormals,V.morphColors=H.morphColors,V.morphTargetsCount=H.morphTargetsCount,V.numClippingPlanes=H.numClippingPlanes,V.numIntersection=H.numClipIntersection,V.vertexAlphas=H.vertexAlphas,V.vertexTangents=H.vertexTangents,V.toneMapping=H.toneMapping}function Xt(b,H,V,K,X){H.isScene!==!0&&(H=$t),U.resetTextureUnits();const yt=H.fog,wt=K.isMeshStandardMaterial?H.environment:null,Wt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oa,Ft=(K.isMeshStandardMaterial?st:A).get(K.envMap||wt),re=K.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,se=!!V.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),le=!!V.morphAttributes.position,Le=!!V.morphAttributes.normal,Be=!!V.morphAttributes.color;let Ke=Ha;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ke=D.toneMapping);const Gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ue=Gn!==void 0?Gn.length:0,ye=he.get(K),gi=v.state.lights;if(Y===!0&&(pt===!0||b!==B)){const Vn=b===B&&K.id===ft;Ut.setState(K,b,Vn)}let Fe=!1;K.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==gi.state.version||ye.outputColorSpace!==Wt||X.isBatchedMesh&&ye.batching===!1||!X.isBatchedMesh&&ye.batching===!0||X.isInstancedMesh&&ye.instancing===!1||!X.isInstancedMesh&&ye.instancing===!0||X.isSkinnedMesh&&ye.skinning===!1||!X.isSkinnedMesh&&ye.skinning===!0||X.isInstancedMesh&&ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ye.instancingColor===!1&&X.instanceColor!==null||ye.envMap!==Ft||K.fog===!0&&ye.fog!==yt||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ut.numPlanes||ye.numIntersection!==Ut.numIntersection)||ye.vertexAlphas!==re||ye.vertexTangents!==se||ye.morphTargets!==le||ye.morphNormals!==Le||ye.morphColors!==Be||ye.toneMapping!==Ke||ue.isWebGL2===!0&&ye.morphTargetsCount!==Ue)&&(Fe=!0):(Fe=!0,ye.__version=K.version);let qe=ye.currentProgram;Fe===!0&&(qe=Mn(K,H,X));let _n=!1,rn=!1,Us=!1;const sn=qe.getUniforms(),wi=ye.uniforms;if(Kt.useProgram(qe.program)&&(_n=!0,rn=!0,Us=!0),K.id!==ft&&(ft=K.id,rn=!0),_n||B!==b){sn.setValue(nt,"projectionMatrix",b.projectionMatrix),sn.setValue(nt,"viewMatrix",b.matrixWorldInverse);const Vn=sn.map.cameraPosition;Vn!==void 0&&Vn.setValue(nt,zt.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&sn.setValue(nt,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&sn.setValue(nt,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,rn=!0,Us=!0)}if(X.isSkinnedMesh){sn.setOptional(nt,X,"bindMatrix"),sn.setOptional(nt,X,"bindMatrixInverse");const Vn=X.skeleton;Vn&&(ue.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),sn.setValue(nt,"boneTexture",Vn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(sn.setOptional(nt,X,"batchingTexture"),sn.setValue(nt,"batchingTexture",X._matricesTexture,U));const ca=V.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&ue.isWebGL2===!0)&&Gt.update(X,V,qe),(rn||ye.receiveShadow!==X.receiveShadow)&&(ye.receiveShadow=X.receiveShadow,sn.setValue(nt,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(wi.envMap.value=Ft,wi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),rn&&(sn.setValue(nt,"toneMappingExposure",D.toneMappingExposure),ye.needsLights&&Vt(wi,Us),yt&&K.fog===!0&&dt.refreshFogUniforms(wi,yt),dt.refreshMaterialUniforms(wi,K,ot,G,Rt),gc.upload(nt,Ze(ye),wi,U)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gc.upload(nt,Ze(ye),wi,U),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&sn.setValue(nt,"center",X.center),sn.setValue(nt,"modelViewMatrix",X.modelViewMatrix),sn.setValue(nt,"normalMatrix",X.normalMatrix),sn.setValue(nt,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Vn=K.uniformsGroups;for(let Rn=0,Ns=Vn.length;Rn<Ns;Rn++)if(ue.isWebGL2){const Os=Vn[Rn];L.update(Os,qe),L.bind(Os,qe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qe}function Vt(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function kt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,H,V){he.get(b.texture).__webglTexture=H,he.get(b.depthTexture).__webglTexture=V;const K=he.get(b);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=V===void 0,K.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const V=he.get(b);V.__webglFramebuffer=H,V.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,V=0){I=b,W=H,k=V;let K=!0,X=null,yt=!1,wt=!1;if(b){const Ft=he.get(b);Ft.__useDefaultFramebuffer!==void 0?(Kt.bindFramebuffer(nt.FRAMEBUFFER,null),K=!1):Ft.__webglFramebuffer===void 0?U.setupRenderTarget(b):Ft.__hasExternalTextures&&U.rebindTextures(b,he.get(b.texture).__webglTexture,he.get(b.depthTexture).__webglTexture);const re=b.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(wt=!0);const se=he.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(se[H])?X=se[H][V]:X=se[H],yt=!0):ue.isWebGL2&&b.samples>0&&U.useMultisampledRTT(b)===!1?X=he.get(b).__webglMultisampledFramebuffer:Array.isArray(se)?X=se[V]:X=se,E.copy(b.viewport),O.copy(b.scissor),ct=b.scissorTest}else E.copy(C).multiplyScalar(ot).floor(),O.copy(J).multiplyScalar(ot).floor(),ct=mt;if(Kt.bindFramebuffer(nt.FRAMEBUFFER,X)&&ue.drawBuffers&&K&&Kt.drawBuffers(b,X),Kt.viewport(E),Kt.scissor(O),Kt.setScissorTest(ct),yt){const Ft=he.get(b.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ft.__webglTexture,V)}else if(wt){const Ft=he.get(b.texture),re=H||0;nt.framebufferTextureLayer(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,Ft.__webglTexture,V||0,re)}ft=-1},this.readRenderTargetPixels=function(b,H,V,K,X,yt,wt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=he.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Wt=Wt[wt]),Wt){Kt.bindFramebuffer(nt.FRAMEBUFFER,Wt);try{const Ft=b.texture,re=Ft.format,se=Ft.type;if(re!==Ti&&bt.convert(re)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const le=se===Fo&&(ae.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ae.has("EXT_color_buffer_float"));if(se!==Ga&&bt.convert(se)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(se===ra&&(ue.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-K&&V>=0&&V<=b.height-X&&nt.readPixels(H,V,K,X,bt.convert(re),bt.convert(se),yt)}finally{const Ft=I!==null?he.get(I).__webglFramebuffer:null;Kt.bindFramebuffer(nt.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(b,H,V=0){const K=Math.pow(2,-V),X=Math.floor(H.image.width*K),yt=Math.floor(H.image.height*K);U.setTexture2D(H,0),nt.copyTexSubImage2D(nt.TEXTURE_2D,V,0,0,b.x,b.y,X,yt),Kt.unbindTexture()},this.copyTextureToTexture=function(b,H,V,K=0){const X=H.image.width,yt=H.image.height,wt=bt.convert(V.format),Wt=bt.convert(V.type);U.setTexture2D(V,0),nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,V.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,V.unpackAlignment),H.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,K,b.x,b.y,X,yt,wt,Wt,H.image.data):H.isCompressedTexture?nt.compressedTexSubImage2D(nt.TEXTURE_2D,K,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,wt,H.mipmaps[0].data):nt.texSubImage2D(nt.TEXTURE_2D,K,b.x,b.y,wt,Wt,H.image),K===0&&V.generateMipmaps&&nt.generateMipmap(nt.TEXTURE_2D),Kt.unbindTexture()},this.copyTextureToTexture3D=function(b,H,V,K,X=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=b.max.x-b.min.x+1,wt=b.max.y-b.min.y+1,Wt=b.max.z-b.min.z+1,Ft=bt.convert(K.format),re=bt.convert(K.type);let se;if(K.isData3DTexture)U.setTexture3D(K,0),se=nt.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)U.setTexture2DArray(K,0),se=nt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,K.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,K.unpackAlignment);const le=nt.getParameter(nt.UNPACK_ROW_LENGTH),Le=nt.getParameter(nt.UNPACK_IMAGE_HEIGHT),Be=nt.getParameter(nt.UNPACK_SKIP_PIXELS),Ke=nt.getParameter(nt.UNPACK_SKIP_ROWS),Gn=nt.getParameter(nt.UNPACK_SKIP_IMAGES),Ue=V.isCompressedTexture?V.mipmaps[X]:V.image;nt.pixelStorei(nt.UNPACK_ROW_LENGTH,Ue.width),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Ue.height),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,b.min.x),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,b.min.y),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?nt.texSubImage3D(se,X,H.x,H.y,H.z,yt,wt,Wt,Ft,re,Ue.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),nt.compressedTexSubImage3D(se,X,H.x,H.y,H.z,yt,wt,Wt,Ft,Ue.data)):nt.texSubImage3D(se,X,H.x,H.y,H.z,yt,wt,Wt,Ft,re,Ue),nt.pixelStorei(nt.UNPACK_ROW_LENGTH,le),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Le),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,Be),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,Ke),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,Gn),X===0&&K.generateMipmaps&&nt.generateMipmap(se),Kt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Kt.unbindTexture()},this.resetState=function(){W=0,k=0,I=null,Kt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Dd?"display-p3":"srgb",i.unpackColorSpace=Ge.workingColorSpace===Ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?xr:i_}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xr?An:oa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class o1 extends A_{}o1.prototype.isWebGL1Renderer=!0;class l1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class w_ extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const O0=new ln,Ad=new Ud,dc=new wc,hc=new Z;class c1 extends wn{constructor(t=new Ai,i=new w_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(l),dc.radius+=u,t.ray.intersectsSphere(dc)===!1)return;O0.copy(l).invert(),Ad.copy(t.ray).applyMatrix4(O0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let T=y,R=M;T<R;T++){const v=m.getX(T);hc.fromBufferAttribute(x,v),P0(hc,v,p,l,t,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let T=y,R=M;T<R;T++)hc.fromBufferAttribute(x,T),P0(hc,T,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function P0(o,t,i,r,l,u,h){const d=Ad.distanceSqToPoint(o);if(d<i){const p=new Z;Ad.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,object:h})}}class Pd extends Ai{constructor(t=1,i=1,r=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const g=[],x=[],y=[],M=[];let T=0;const R=[],v=r/2;let _=0;z(),h===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new In(x,3)),this.setAttribute("normal",new In(y,3)),this.setAttribute("uv",new In(M,2));function z(){const P=new Z,W=new Z;let k=0;const I=(i-t)/r;for(let ft=0;ft<=u;ft++){const B=[],E=ft/u,O=E*(i-t)+t;for(let ct=0;ct<=l;ct++){const St=ct/l,q=St*p+d,rt=Math.sin(q),G=Math.cos(q);W.x=O*rt,W.y=-E*r+v,W.z=O*G,x.push(W.x,W.y,W.z),P.set(rt,I,G).normalize(),y.push(P.x,P.y,P.z),M.push(St,1-E),B.push(T++)}R.push(B)}for(let ft=0;ft<l;ft++)for(let B=0;B<u;B++){const E=R[B][ft],O=R[B+1][ft],ct=R[B+1][ft+1],St=R[B][ft+1];g.push(E,O,St),g.push(O,ct,St),k+=6}m.addGroup(_,k,0),_+=k}function D(P){const W=T,k=new ge,I=new Z;let ft=0;const B=P===!0?t:i,E=P===!0?1:-1;for(let ct=1;ct<=l;ct++)x.push(0,v*E,0),y.push(0,E,0),M.push(.5,.5),T++;const O=T;for(let ct=0;ct<=l;ct++){const q=ct/l*p+d,rt=Math.cos(q),G=Math.sin(q);I.x=B*G,I.y=v*E,I.z=B*rt,x.push(I.x,I.y,I.z),y.push(0,E,0),k.x=rt*.5+.5,k.y=G*.5*E+.5,M.push(k.x,k.y),T++}for(let ct=0;ct<l;ct++){const St=W+ct,q=O+ct;P===!0?g.push(q,q+1,St):g.push(q+1,q,St),ft+=3}m.addGroup(_,ft,P===!0?1:2),_+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zd extends Pd{constructor(t=1,i=1,r=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,t,i,r,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(t){return new zd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bc extends Ai{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],x=new Z,y=new Z,M=[],T=[],R=[],v=[];for(let _=0;_<=r;_++){const z=[],D=_/r;let P=0;_===0&&h===0?P=.5/i:_===r&&p===Math.PI&&(P=-.5/i);for(let W=0;W<=i;W++){const k=W/i;x.x=-t*Math.cos(l+k*u)*Math.sin(h+D*d),x.y=t*Math.cos(h+D*d),x.z=t*Math.sin(l+k*u)*Math.sin(h+D*d),T.push(x.x,x.y,x.z),y.copy(x).normalize(),R.push(y.x,y.y,y.z),v.push(k+P,1-D),z.push(m++)}g.push(z)}for(let _=0;_<r;_++)for(let z=0;z<i;z++){const D=g[_][z+1],P=g[_][z],W=g[_+1][z],k=g[_+1][z+1];(_!==0||h>0)&&M.push(D,P,k),(_!==r-1||p<Math.PI)&&M.push(P,W,k)}this.setIndex(M),this.setAttribute("position",new In(T,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pc extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a_,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bd extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const hd=new ln,z0=new Z,B0=new Z;class R_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;z0.setFromMatrixPosition(t.matrixWorld),i.position.copy(z0),B0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(B0),i.updateMatrixWorld(),hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const F0=new ln,Oo=new Z,pd=new Z;class u1 extends R_{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Oo),pd.copy(r.position),pd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(pd),r.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),F0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(F0)}}class I0 extends Bd{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new u1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class f1 extends R_{constructor(){super(new x_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H0 extends Bd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new f1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class G0 extends Bd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class V0{constructor(t=1,i=0,r=0){return this.radius=t,this.phi=i,this.theta=r,this}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);const k0={type:"change"},md={type:"start"},W0={type:"end"},mc=new Ud,X0=new Ba,d1=Math.cos(70*dr.DEG2RAD);class h1 extends Mr{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",At),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",At),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(k0),r.update(),u=l.NONE},this.update=function(){const L=new Z,Et=new Sr().setFromUnitVectors(t.up,new Z(0,1,0)),Nt=Et.clone().invert(),ee=new Z,N=new Sr,Ct=new Z,Mt=2*Math.PI;return function(Qt=null){const Me=r.object.position;L.copy(Me).sub(r.target),L.applyQuaternion(Et),d.setFromVector3(L),r.autoRotate&&u===l.NONE&&ct(E(Qt)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let jt=r.minAzimuthAngle,de=r.maxAzimuthAngle;isFinite(jt)&&isFinite(de)&&(jt<-Math.PI?jt+=Mt:jt>Math.PI&&(jt-=Mt),de<-Math.PI?de+=Mt:de>Math.PI&&(de-=Mt),jt<=de?d.theta=Math.max(jt,Math.min(de,d.theta)):d.theta=d.theta>(jt+de)/2?Math.max(jt,d.theta):Math.min(de,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&k||r.object.isOrthographicCamera?d.radius=C(d.radius):d.radius=C(d.radius*m),L.setFromSpherical(d),L.applyQuaternion(Nt),Me.copy(r.target).add(L),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let pe=!1;if(r.zoomToCursor&&k){let ne=null;if(r.object.isPerspectiveCamera){const xe=L.length();ne=C(xe*m);const Xe=xe-ne;r.object.position.addScaledVector(P,Xe),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const xe=new Z(W.x,W.y,0);xe.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),pe=!0;const Xe=new Z(W.x,W.y,0);Xe.unproject(r.object),r.object.position.sub(Xe).add(xe),r.object.updateMatrixWorld(),ne=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(ne).add(r.object.position):(mc.origin.copy(r.object.position),mc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(mc.direction))<d1?t.lookAt(r.target):(X0.setFromNormalAndCoplanarPoint(r.object.up,r.target),mc.intersectPlane(X0,r.target))))}else r.object.isOrthographicCamera&&(pe=m!==1,pe&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,k=!1,pe||ee.distanceToSquared(r.object.position)>h||8*(1-N.dot(r.object.quaternion))>h||Ct.distanceToSquared(r.target)>0?(r.dispatchEvent(k0),ee.copy(r.object.position),N.copy(r.object.quaternion),Ct.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",fe),r.domElement.removeEventListener("pointerdown",U),r.domElement.removeEventListener("pointercancel",st),r.domElement.removeEventListener("wheel",tt),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",st),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",At),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new V0,p=new V0;let m=1;const g=new Z,x=new ge,y=new ge,M=new ge,T=new ge,R=new ge,v=new ge,_=new ge,z=new ge,D=new ge,P=new Z,W=new ge;let k=!1;const I=[],ft={};let B=!1;function E(L){return L!==null?2*Math.PI/60*r.autoRotateSpeed*L:2*Math.PI/60/60*r.autoRotateSpeed}function O(L){const Et=Math.abs(L*.01);return Math.pow(.95,r.zoomSpeed*Et)}function ct(L){p.theta-=L}function St(L){p.phi-=L}const q=function(){const L=new Z;return function(Nt,ee){L.setFromMatrixColumn(ee,0),L.multiplyScalar(-Nt),g.add(L)}}(),rt=function(){const L=new Z;return function(Nt,ee){r.screenSpacePanning===!0?L.setFromMatrixColumn(ee,1):(L.setFromMatrixColumn(ee,0),L.crossVectors(r.object.up,L)),L.multiplyScalar(Nt),g.add(L)}}(),G=function(){const L=new Z;return function(Nt,ee){const N=r.domElement;if(r.object.isPerspectiveCamera){const Ct=r.object.position;L.copy(Ct).sub(r.target);let Mt=L.length();Mt*=Math.tan(r.object.fov/2*Math.PI/180),q(2*Nt*Mt/N.clientHeight,r.object.matrix),rt(2*ee*Mt/N.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(q(Nt*(r.object.right-r.object.left)/r.object.zoom/N.clientWidth,r.object.matrix),rt(ee*(r.object.top-r.object.bottom)/r.object.zoom/N.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function ot(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function it(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ht(L,Et){if(!r.zoomToCursor)return;k=!0;const Nt=r.domElement.getBoundingClientRect(),ee=L-Nt.left,N=Et-Nt.top,Ct=Nt.width,Mt=Nt.height;W.x=ee/Ct*2-1,W.y=-(N/Mt)*2+1,P.set(W.x,W.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(L){return Math.max(r.minDistance,Math.min(r.maxDistance,L))}function J(L){x.set(L.clientX,L.clientY)}function mt(L){ht(L.clientX,L.clientX),_.set(L.clientX,L.clientY)}function Lt(L){T.set(L.clientX,L.clientY)}function Y(L){y.set(L.clientX,L.clientY),M.subVectors(y,x).multiplyScalar(r.rotateSpeed);const Et=r.domElement;ct(2*Math.PI*M.x/Et.clientHeight),St(2*Math.PI*M.y/Et.clientHeight),x.copy(y),r.update()}function pt(L){z.set(L.clientX,L.clientY),D.subVectors(z,_),D.y>0?ot(O(D.y)):D.y<0&&it(O(D.y)),_.copy(z),r.update()}function Rt(L){R.set(L.clientX,L.clientY),v.subVectors(R,T).multiplyScalar(r.panSpeed),G(v.x,v.y),T.copy(R),r.update()}function Yt(L){ht(L.clientX,L.clientY),L.deltaY<0?it(O(L.deltaY)):L.deltaY>0&&ot(O(L.deltaY)),r.update()}function Pt(L){let Et=!1;switch(L.code){case r.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?St(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,r.keyPanSpeed),Et=!0;break;case r.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?St(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,-r.keyPanSpeed),Et=!0;break;case r.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ct(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(r.keyPanSpeed,0),Et=!0;break;case r.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ct(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(-r.keyPanSpeed,0),Et=!0;break}Et&&(L.preventDefault(),r.update())}function zt(L){if(I.length===1)x.set(L.pageX,L.pageY);else{const Et=bt(L),Nt=.5*(L.pageX+Et.x),ee=.5*(L.pageY+Et.y);x.set(Nt,ee)}}function $t(L){if(I.length===1)T.set(L.pageX,L.pageY);else{const Et=bt(L),Nt=.5*(L.pageX+Et.x),ee=.5*(L.pageY+Et.y);T.set(Nt,ee)}}function ie(L){const Et=bt(L),Nt=L.pageX-Et.x,ee=L.pageY-Et.y,N=Math.sqrt(Nt*Nt+ee*ee);_.set(0,N)}function nt(L){r.enableZoom&&ie(L),r.enablePan&&$t(L)}function ze(L){r.enableZoom&&ie(L),r.enableRotate&&zt(L)}function ae(L){if(I.length==1)y.set(L.pageX,L.pageY);else{const Nt=bt(L),ee=.5*(L.pageX+Nt.x),N=.5*(L.pageY+Nt.y);y.set(ee,N)}M.subVectors(y,x).multiplyScalar(r.rotateSpeed);const Et=r.domElement;ct(2*Math.PI*M.x/Et.clientHeight),St(2*Math.PI*M.y/Et.clientHeight),x.copy(y)}function ue(L){if(I.length===1)R.set(L.pageX,L.pageY);else{const Et=bt(L),Nt=.5*(L.pageX+Et.x),ee=.5*(L.pageY+Et.y);R.set(Nt,ee)}v.subVectors(R,T).multiplyScalar(r.panSpeed),G(v.x,v.y),T.copy(R)}function Kt(L){const Et=bt(L),Nt=L.pageX-Et.x,ee=L.pageY-Et.y,N=Math.sqrt(Nt*Nt+ee*ee);z.set(0,N),D.set(0,Math.pow(z.y/_.y,r.zoomSpeed)),ot(D.y),_.copy(z);const Ct=(L.pageX+Et.x)*.5,Mt=(L.pageY+Et.y)*.5;ht(Ct,Mt)}function Pe(L){r.enableZoom&&Kt(L),r.enablePan&&ue(L)}function he(L){r.enableZoom&&Kt(L),r.enableRotate&&ae(L)}function U(L){r.enabled!==!1&&(I.length===0&&(r.domElement.setPointerCapture(L.pointerId),r.domElement.addEventListener("pointermove",A),r.domElement.addEventListener("pointerup",st)),Gt(L),L.pointerType==="touch"?Ut(L):Ot(L))}function A(L){r.enabled!==!1&&(L.pointerType==="touch"?vt(L):j(L))}function st(L){switch(Ht(L),I.length){case 0:r.domElement.releasePointerCapture(L.pointerId),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",st),r.dispatchEvent(W0),u=l.NONE;break;case 1:const Et=I[0],Nt=ft[Et];Ut({pointerId:Et,pageX:Nt.x,pageY:Nt.y});break}}function Ot(L){let Et;switch(L.button){case 0:Et=r.mouseButtons.LEFT;break;case 1:Et=r.mouseButtons.MIDDLE;break;case 2:Et=r.mouseButtons.RIGHT;break;default:Et=-1}switch(Et){case ts.DOLLY:if(r.enableZoom===!1)return;mt(L),u=l.DOLLY;break;case ts.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enablePan===!1)return;Lt(L),u=l.PAN}else{if(r.enableRotate===!1)return;J(L),u=l.ROTATE}break;case ts.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enableRotate===!1)return;J(L),u=l.ROTATE}else{if(r.enablePan===!1)return;Lt(L),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(md)}function j(L){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;Y(L);break;case l.DOLLY:if(r.enableZoom===!1)return;pt(L);break;case l.PAN:if(r.enablePan===!1)return;Rt(L);break}}function tt(L){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(L.preventDefault(),r.dispatchEvent(md),Yt(ut(L)),r.dispatchEvent(W0))}function ut(L){const Et=L.deltaMode,Nt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(Et){case 1:Nt.deltaY*=16;break;case 2:Nt.deltaY*=100;break}return L.ctrlKey&&!B&&(Nt.deltaY*=10),Nt}function dt(L){L.key==="Control"&&(B=!0,r.domElement.getRootNode().addEventListener("keyup",_t,{passive:!0,capture:!0}))}function _t(L){L.key==="Control"&&(B=!1,r.domElement.getRootNode().removeEventListener("keyup",_t,{passive:!0,capture:!0}))}function At(L){r.enabled===!1||r.enablePan===!1||Pt(L)}function Ut(L){switch(Bt(L),I.length){case 1:switch(r.touches.ONE){case es.ROTATE:if(r.enableRotate===!1)return;zt(L),u=l.TOUCH_ROTATE;break;case es.PAN:if(r.enablePan===!1)return;$t(L),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case es.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;nt(L),u=l.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ze(L),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(md)}function vt(L){switch(Bt(L),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ae(L),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;ue(L),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Pe(L),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;he(L),r.update();break;default:u=l.NONE}}function fe(L){r.enabled!==!1&&L.preventDefault()}function Gt(L){I.push(L.pointerId)}function Ht(L){delete ft[L.pointerId];for(let Et=0;Et<I.length;Et++)if(I[Et]==L.pointerId){I.splice(Et,1);return}}function Bt(L){let Et=ft[L.pointerId];Et===void 0&&(Et=new ge,ft[L.pointerId]=Et),Et.set(L.pageX,L.pageY)}function bt(L){const Et=L.pointerId===I[0]?I[1]:I[0];return ft[Et]}r.domElement.addEventListener("contextmenu",fe),r.domElement.addEventListener("pointerdown",U),r.domElement.addEventListener("pointercancel",st),r.domElement.addEventListener("wheel",tt,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}function p1(){const o=ve.useRef(null),[t,i]=ve.useState(!1),[r,l]=ve.useState(!1),[u,h]=ve.useState(!1),[d,p]=ve.useState(!1),[m,g]=ve.useState(!1),[x,y]=ve.useState(!1),[M,T]=ve.useState(!1),[R,v]=ve.useState(!1),[_,z]=ve.useState(!1),[D,P]=ve.useState(!1),W=ve.useRef({beta:0,gamma:0}),k=ve.useRef(0),I=ve.useRef(!1),ft=ve.useRef(!1),B=ve.useRef({position:{x:1,z:1},direction:new Z(0,0,1),worldPosition:new Z(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),E=ve.useRef({}),O=ve.useRef(null),ct=ve.useRef(!1);ve.useEffect(()=>{ft.current=u},[u]),ve.useEffect(()=>{ct.current=t},[t]);const[St,q]=ve.useState(null),rt=ve.useRef(null);ve.useRef(!1);const G=ve.useRef(null),ot=ve.useRef(!1),[it,ht]=ve.useState({beta:0,gamma:0,velocity:{x:0,z:0},gravity:{x:0,z:0},position:{x:0,z:0},collision:!1,collisionEdge:"",eventCount:0,lastUpdate:Date.now(),eventType:"none",showDebug:!0}),C=()=>{if(console.log("Restarting game..."),!E.current.generateMaze||!E.current.createWalls){console.error("Game functions not initialized");return}if(O.current&&O.current.parent&&(console.log("Cleaning up celebration particles"),O.current.parent.remove(O.current),O.current.geometry&&O.current.geometry.dispose(),O.current.material&&O.current.material.dispose(),O.current=null,q(null)),console.log("Resetting game state"),i(!1),l(!1),h(!1),ot.current=!1,console.log("Resetting player position and direction"),B.current.position={x:1,z:1},B.current.direction.set(0,0,1),console.log("Resetting maze reference"),G.current=null,console.log("Generating new maze"),E.current.generateMaze(),console.log("Creating new walls"),E.current.createWalls(),console.log("Updating player world position"),B.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),E.current.createPlayer&&E.current.mazeGroup){console.log("Creating new player mesh"),B.current.mesh&&B.current.mesh.parent&&(console.log("Removing old player mesh"),B.current.mesh.parent.remove(B.current.mesh),B.current.mesh.children.forEach(tt=>{tt.geometry&&tt.geometry.dispose(),tt.material&&tt.material.dispose()})),console.log("Creating new player mesh");const j=E.current.createPlayer();console.log("Positioning new player at entrance"),j.position.copy(B.current.worldPosition),console.log("Adding new player to maze group"),E.current.mazeGroup.add(j),console.log("Added new player to maze group"),console.log("Updating player ref"),B.current.mesh=j}if(E.current.setInitialPlayerDirection?E.current.setInitialPlayerDirection(B.current.mesh):B.current.direction.set(0,0,1),B.current.mesh){B.current.mesh.position.copy(B.current.worldPosition);const j=Math.atan2(B.current.direction.x,B.current.direction.z);B.current.mesh.rotation.y=j,B.current.mesh.visible=!0,B.current.mesh.children.forEach(tt=>{tt.material&&(tt.material.opacity=1,tt.material.transparent=!0)})}},J=()=>{const j=navigator.userAgent||navigator.vendor||window.opera,tt=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(j.toLowerCase());return console.log("Device detection:",tt?"Mobile":"Desktop"),I.current=tt,tt},mt=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",Lt=()=>window.DeviceOrientationEvent!==void 0,Y=async()=>{if(!mt())return console.log("No iOS permission needed, enabling gyroscope directly"),ue(),!0;console.log("Requesting iOS device orientation permission");try{const j=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",j),j==="granted"?(console.log("✅ iOS permission granted!"),ue(),z(!1),P(!1),window.physics||ie(),!0):(console.log("❌ iOS permission denied:",j),z(!1),P(!0),!1)}catch(j){return console.error("❌ Error requesting iOS permission:",j),z(!1),P(!0),!1}},pt=j=>{const tt=performance.now(),ut=tt<3e3;ut&&console.log("Orientation event received:",{beta:j.beta,gamma:j.gamma,time:tt}),W.current={beta:j.beta,gamma:j.gamma},!ut&&tt%3e3<20&&console.log("Orientation data:",W.current)};ve.useEffect(()=>{const j=J();return console.log("Is mobile:",j),j&&(mt()?(console.log("iOS device detected - showing permission button"),z(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):Lt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",pt),T(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),P(!0))),()=>{window.removeEventListener("deviceorientation",pt)}},[]),ve.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let j=function(Xt){if(an=requestAnimationFrame(j),I.current&&M&&!ct.current&&!d){const kt=performance.now(),{beta:b,gamma:H}=W.current;if(kt<5e3&&kt%500<20&&console.log("Animation loop - orientation:",{beta:b,gamma:H}),b!==null&&H!==null){const V=Math.abs(b),K=Math.abs(H);let X="";const yt=5;V>K&&V>yt?X=b>0?"ArrowDown":"ArrowUp":K>yt&&(X=H>0?"ArrowRight":"ArrowLeft");const wt=Math.max(V,K),Wt=Math.max(100,500-wt*5);X&&kt-k.current>Wt&&(console.log(`Gyroscope movement: ${X} (tilt: ${wt.toFixed(1)}°)`),Ze({key:X,preventDefault:()=>{},stopPropagation:()=>{}}),k.current=kt)}}if(!ne&&!t){const kt=Xt-xe,b=Math.min(kt/Xe,1);if(b===1)ne=!0,Nt.rotation.x=0,Nt.rotation.y=0;else{const H=dr.lerp(0,0,b);Nt.rotation.x=H,Nt.rotation.y=0}}else!ne&&t&&(ne=!0),ft.current||(Nt.rotation.x=0,Nt.rotation.y=0,Nt.rotation.z=0);const Vt=Xt*.001;Nt.children.forEach(kt=>{kt.material&&kt.material.uniforms&&(kt.material.uniforms.time.value=Vt)}),rt.current?(console.log("Calling updateParticles from animation loop"),rt.current()||(console.log("updateParticles returned false, setting to null"),rt.current=null)):ct.current&&!rt.current&&console.log("Game won but updateParticles is null"),ft.current?I.current||(L.enabled=!1,L.enableRotate=!1,L.enableZoom=!1,L.enablePan=!1):((Math.abs(bt.position.x)>.1||Math.abs(bt.position.z)>.1||Math.abs(bt.position.y-Ht())>.1||Math.abs(L.target.x)>.1||Math.abs(L.target.y)>.1||Math.abs(L.target.z)>.1)&&(bt.position.set(0,Ht(),0),L.target.set(0,0,0)),!I.current&&L.update&&L.update()),$t(),At.render(ut,bt)},tt=function(){const Xt=window.innerWidth,Vt=window.innerHeight;At.setSize(Xt,Vt),bt.aspect=Xt/Vt;const kt=Xt<768,b=Xt>Vt;kt?bt.fov=b?75:80:bt.fov=60,ft.current||(bt.position.y=Ht(),bt.lookAt(0,0,0)),bt.updateProjectionMatrix()};console.log("Initializing 3D scene"),I.current=J(),console.log("Is mobile device:",I.current),I.current&&v(!0);const ut=new l1;ut.background=new De(0);const dt=new G0(4210752,1.5);ut.add(dt);const _t=new H0(16777215,1);if(_t.position.set(1,1,1),ut.add(_t),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const At=new A_({antialias:!0,canvas:o.current});if(At.setSize(window.innerWidth,window.innerHeight),At.setPixelRatio(Math.min(window.devicePixelRatio,2)),At.shadowMap.enabled=!0,At.shadowMap.type=Y0,console.log("Renderer set up"),I.current){console.log("Setting up orientation handling for mobile");const Xt=Vt=>{var kt;if(!(t||d)&&(!M&&(Vt.beta!==null||Vt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),T(!0)),!!M&&Vt.beta!==null&&Vt.gamma!==null)){let b=Vt.beta,H=Vt.gamma;if(window.orientation!==void 0){const V=window.orientation;if(performance.now()%5e3<20&&((kt=window.physics)!=null&&kt.debug)&&console.log(`Device orientation: ${V}°, beta: ${b.toFixed(2)}°, gamma: ${H.toFixed(2)}°`),V===90){const X=b;b=H,H=-X}else if(V===-90){const X=b;b=-H,H=X}else V===180&&(b=-b,H=-H)}if(window.physics){let X=0,yt=0;Math.abs(H)>5&&(X=Math.min(Math.abs(H)-5,25)/25*Math.sign(H)),Math.abs(b)>5&&(yt=Math.min(Math.abs(b)-5,25)/25*Math.sign(b)),window.physics.gravityX=X,window.physics.gravityZ=yt,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${X.toFixed(3)}, Z=${yt.toFixed(3)}`)}W.current={beta:b,gamma:H}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Vt=async()=>{console.log("Requesting iOS device orientation permission");try{const kt=await window.DeviceOrientationEvent.requestPermission();kt==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",Xt),T(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),ie(),setTimeout(()=>{B.current&&!t&&(console.log("🧪 Adding test impulse to verify physics system"),B.current.velocity.x=.05,B.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",kt)}catch(kt){console.error("❌ Error requesting permission:",kt)}};document.addEventListener("touchstart",()=>{Vt(),document.removeEventListener("touchstart",Vt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",Xt),T(!0)}const Ut=21,vt=2,fe=3,Gt=2,Ht=(Xt=!1)=>{const Vt=window.innerWidth<768,kt=window.innerWidth>window.innerHeight,b=Ut*Gt;let H=b*1.5;return Vt&&(Xt||D)&&(kt?H=b*1.6:H=b*1.8),Vt?kt?H*.8:H*1.2:H};window.calculateOptimalCameraHeight=Ht;const Bt=Ht(),bt=new ei(60,window.innerWidth/window.innerHeight,.1,1e3);bt.position.set(0,Bt,0),bt.lookAt(0,0,0),console.log("Camera set up");const te=J();let L;te?(L={target:new Z(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(L=new h1(bt,At.domElement),L.enableDamping=!0,L.dampingFactor=.1,L.target.set(0,0,0),L.update(),console.log("Desktop controls set up"));const Et=t&&G.current?G.current:Array(Ut).fill().map(()=>Array(Ut).fill(1));G.current=Et,window.MAZE_SIZE=Ut,window.WALL_THICKNESS=Gt,window.playerRef=B,window.mazeRef=G,window.isThirdPersonRef=ft,window.gameCamera=bt,window.maze=Et,window.celebrateWin=()=>{ot.current=!0,i(!0),l(!0),Hn()};const Nt=new Po;ut.add(Nt),console.log("Maze group created"),E.current.mazeGroup=Nt;const ee=new la({uniforms:{time:{value:0},baseColor:{value:new De(4482815)}},vertexShader:`
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
        `,side:Oi});console.log("Wall material created");const N=(Xt,Vt)=>Xt>=0&&Xt<Ut&&Vt>=0&&Vt<Ut,Ct=(Xt,Vt)=>{const kt=[],b=[[0,2],[2,0],[0,-2],[-2,0]];for(let H=b.length-1;H>0;H--){const V=Math.floor(Math.random()*(H+1));[b[H],b[V]]=[b[V],b[H]]}for(const[H,V]of b){const K=Xt+H,X=Vt+V;N(K,X)&&Et[K][X]===1&&kt.push([K,X,H/2,V/2])}return kt},Mt=()=>{if(t&&G.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let V=0;V<Ut;V++)for(let K=0;K<Ut;K++)Et[V][K]=1;const Xt=[],Vt=1,kt=1;for(Et[Vt][kt]=0,Xt.push([Vt,kt]);Xt.length>0;){const[V,K]=Xt[Xt.length-1],X=Ct(V,K);if(X.length===0){Xt.pop();continue}const[yt,wt,Wt,Ft]=X[Math.floor(Math.random()*X.length)];Et[yt][wt]=0,Et[V+Wt][K+Ft]=0,Xt.push([yt,wt])}Et[0][1]=0,Et[Ut-1][Ut-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(Ut-1)+","+(Ut-2)+")");const b=new Set,H=V=>{const[K,X]=V;if(K===Ut-2&&X===Ut-2)return!0;b.add(`${K},${X}`);const yt=[[0,1],[1,0],[0,-1],[-1,0]];for(const[wt,Wt]of yt){const Ft=K+wt,re=X+Wt;if(N(Ft,re)&&Et[Ft][re]===0&&!b.has(`${Ft},${re}`)&&H([Ft,re]))return!0}return!1};H([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),Mt()),G.current=Et,window.maze=Et,window.MAZE_SIZE=Ut,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const qt=()=>{if(!ut)return;ut.children.filter(X=>X.name==="wall").forEach(X=>ut.remove(X));const Vt=2;window.CELL_SIZE=Vt;const kt=new pc({color:8930474,roughness:.7,metalness:.2}),b=new Ds(Vt,Vt,Vt);console.log("Creating walls with maze data:",G.current);for(let X=0;X<Ut;X++)for(let yt=0;yt<Ut;yt++)if(G.current[X][yt]===1){const wt=new ni(b,kt);wt.position.set(X*Vt,0,yt*Vt),wt.castShadow=!0,wt.receiveShadow=!0,wt.name="wall",ut.add(wt)}const H=new Go(Ut*Vt+Vt,Ut*Vt+Vt),V=new pc({color:3355443,roughness:.9,metalness:.1}),K=new ni(H,V);K.rotation.x=-Math.PI/2,K.position.set(Ut*Vt/2-Vt/2,-Vt/2,Ut*Vt/2-Vt/2),K.receiveShadow=!0,K.name="floor",ut.add(K),console.log(`✓ Maze walls created with CELL_SIZE=${Vt}`)};console.log("Wall creation function created"),E.current.generateMaze=Mt,E.current.createWalls=qt;const Qt=Xt=>{if(console.log("Setting initial player direction"),!Xt){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Vt=1,kt=1,b=[{dx:0,dz:1,name:"down",vector:new Z(0,0,1)},{dx:1,dz:0,name:"right",vector:new Z(1,0,0)},{dx:0,dz:-1,name:"up",vector:new Z(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new Z(-1,0,0)}];console.log("Checking available directions from starting position:",Vt,kt);const H=b.filter(V=>{const K=Vt+V.dx,X=kt+V.dz;if(K===0&&X===1)return console.log(`Direction ${V.name} leads to entrance, skipping`),!1;const yt=N(K,X)&&Et[K][X]===0;return console.log(`Direction ${V.name} leads to (${K}, ${X}): ${yt?"valid":"invalid"}`),yt});if(console.log("Valid directions:",H.map(V=>V.name)),H.length>0){const V=H[0];console.log("Chosen direction:",V.name),B.current.direction.copy(V.vector);const K=Math.atan2(V.vector.x,V.vector.z);Xt.rotation.y=K,console.log("Set player rotation to:",K)}else console.log("No valid directions found, defaulting to down"),B.current.direction.set(0,0,1),Xt.rotation.y=0};E.current.setInitialPlayerDirection=Qt,t?console.log("Game has been won, preserving maze and player position"):(Mt(),qt(),console.log("Initial maze created"));const Me=new G0(16777215,.6);ut.add(Me);const jt=new H0(16777215,1);jt.position.set(50,100,50),ut.add(jt);const de=new I0(4474111,2,150);de.position.set(50,50,50),ut.add(de);const pe=new I0(4474111,2,150);pe.position.set(-50,50,-50),ut.add(pe),console.log("Lights added");let ne=!1;const xe=performance.now(),Xe=1e3,Hn=()=>{console.log("Celebration function called - START");const Xt=2e3,Vt=new Ai,kt=new Float32Array(Xt*3),b=new Float32Array(Xt*3);for(let wt=0;wt<Xt;wt++)kt[wt*3]=B.current.worldPosition.x,kt[wt*3+1]=B.current.worldPosition.y,kt[wt*3+2]=B.current.worldPosition.z,b[wt*3]=Math.random(),b[wt*3+1]=Math.random(),b[wt*3+2]=Math.random();Vt.setAttribute("position",new In(kt,3)),Vt.setAttribute("color",new In(b,3));const H=new w_({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:gd}),V=new c1(Vt,H);ut.add(V),console.log("Particle system added to scene");const K=[];for(let wt=0;wt<Xt;wt++){const Wt=Math.random()*Math.PI*2,Ft=Math.acos(Math.random()*2-1),re=.05+Math.random()*.1;K.push(Math.sin(Ft)*Math.cos(Wt)*re,Math.sin(Ft)*Math.sin(Wt)*re,Math.cos(Ft)*re)}O.current=V;const X=()=>{if(console.log("Update particles function called - frame"),!ct.current)return console.log("Game no longer in won state, cleaning up particles"),V.parent&&(ut.remove(V),V.geometry.dispose(),H.dispose()),O.current=null,rt.current=null,!1;const wt=V.geometry.attributes.position.array;let Wt=!1;for(let re=0;re<Xt;re++){const se=re*3;wt[se]+=K[se],wt[se+1]+=K[se+1],wt[se+2]+=K[se+2],K[se+1]-=.001;const le=wt[se]-B.current.worldPosition.x,Le=wt[se+1]-B.current.worldPosition.y,Be=wt[se+2]-B.current.worldPosition.z;Math.sqrt(le*le+Le*Le+Be*Be)<20&&(Wt=!0)}V.geometry.attributes.position.needsUpdate=!0;const Ft=performance.now()-yt;return Ft>1e3&&(H.opacity=Math.max(0,1-(Ft-1e3)/1e3)),!Wt||Ft>2e3?(console.log("Animation complete, cleaning up particles"),ut.remove(V),V.geometry.dispose(),H.dispose(),O.current=null,rt.current=null,!1):!0},yt=performance.now();return console.log("Setting updateParticles function"),rt.current=X,()=>{console.log("Cleanup function called"),V.parent&&(ut.remove(V),V.geometry.dispose(),H.dispose()),O.current=null,rt.current=null}},mi=()=>{if(!ut)return;console.log("Creating player...");const Xt=window.CELL_SIZE||2,Vt=new bc(.4,32,32),kt=new pc({color:16733491,roughness:.4,metalness:.6,envMapIntensity:.8}),b=new ni(Vt,kt);b.castShadow=!0,b.receiveShadow=!0;const H=0,V=1;b.position.set(H*Xt,0,V*Xt),ut.add(b);const K=new zd(.2,.5,8),X=new pc({color:16755251}),yt=new ni(K,X);return yt.position.y=.1,yt.rotation.x=Math.PI/2,yt.castShadow=!0,b.add(yt),B.current={position:{x:H,z:V},velocity:{x:0,z:0},direction:new Z(0,0,1),mesh:b},console.log(`✓ Player created at entrance (${H},${V}) with physics coords. Mesh at (${b.position.x}, ${b.position.z})`),b},je=mi();E.current.createPlayer=mi;let Bi=null;if(t){for(let Xt=0;Xt<Nt.children.length;Xt++){const Vt=Nt.children[Xt];if(Vt.isGroup&&Vt.children.length>0&&Vt.children[0].geometry instanceof bc){Bi=Vt;break}}Bi&&(Bi.children.forEach(Xt=>{Xt.geometry&&Xt.geometry.dispose(),Xt.material&&Xt.material.dispose()}),Nt.remove(Bi),console.log("Removed existing player from maze group"))}if(!t)je.position.set((1-Ut/2)*Gt,Gt/2,(1-Ut/2)*Gt),B.current.mesh=je,B.current.worldPosition.copy(je.position),Qt(je);else{if(ot.current){const Vt=Ut-1,kt=Ut-2,b=new Z((Vt-Ut/2)*Gt,Gt/2,(kt-Ut/2)*Gt);console.log("Positioning player at exit:",b),je.position.copy(b),B.current.worldPosition.copy(b),B.current.position={x:Vt,z:kt}}else console.log("Using existing player position:",B.current.worldPosition),je.position.copy(B.current.worldPosition);B.current.mesh=je;const Xt=Math.atan2(B.current.direction.x,B.current.direction.z);je.rotation.y=Xt}Nt.add(je),B.current.mesh=je,console.log("Player created and added to maze group");const Mn=Xt=>{if(Xt.key.toLowerCase()==="v")return console.log("View toggle key pressed"),Xt.preventDefault(),Xt.stopPropagation(),Xt.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(Vt=>{const kt=!Vt;console.log("Switching to:",kt?"POV mode":"Top-down mode"),ft.current=kt;const b=bt.position.clone(),H=new Z().copy(L.target),V=bt.fov,K={x:Nt.rotation.x,y:Nt.rotation.y,z:Nt.rotation.z},X=kt?new Z(B.current.worldPosition.x,B.current.worldPosition.y+1.5,B.current.worldPosition.z):new Z(0,Ht(),0),yt=kt?new Z(B.current.worldPosition.x+B.current.direction.x*Gt,B.current.worldPosition.y+1.5,B.current.worldPosition.z+B.current.direction.z*Gt):new Z(0,0,0),wt=window.innerWidth<768,Wt=window.innerWidth>window.innerHeight;let Ft=kt?75:60;wt&&(Ft=kt||Wt?75:80);const re={x:0,y:0,z:0},se=je.visible?1:0,le=kt?0:1;je.visible=!0,je.children.forEach(Ue=>{Ue.material&&(Ue.material.transparent||(Ue.material.transparent=!0),Ue.material.opacity=se)}),I.current||(L.enabled=!1);const Le=1200;let Be=null;const Ke=Ue=>{const ye=Ue-Gn,gi=Math.min(ye/Le,1),qe=(rn=>rn<.5?4*rn*rn*rn:1-Math.pow(-2*rn+2,3)/2)(gi);bt.position.lerpVectors(b,X,qe);const _n=new Z().lerpVectors(H,yt,qe);if(I.current||L.target.copy(_n),bt.lookAt(_n),bt.fov=dr.lerp(V,Ft,qe),bt.updateProjectionMatrix(),Nt.rotation.x=dr.lerp(K.x,re.x,qe),Nt.rotation.y=dr.lerp(K.y,re.y,qe),Nt.rotation.z=dr.lerp(K.z,re.z,qe),je.children.forEach(rn=>{rn.material&&(rn.material.opacity=dr.lerp(se,le,qe))}),gi===1){cancelAnimationFrame(Be),je.visible=!kt,je.children.forEach(rn=>{rn.material&&(rn.material.opacity=le,le===1&&(rn.material.transparent=!1))}),!I.current&&!kt?(L.enabled=!0,L.enableRotate=!0,L.enableZoom=!0,L.enablePan=!0):(bt.position.copy(X),bt.lookAt(yt)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}Be=requestAnimationFrame(Ke)},Gn=performance.now();return Be=requestAnimationFrame(Ke),kt}),!1)},Ze=Xt=>{if(ct.current||!ne||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Vt=Xt.key.toLowerCase();if(console.log("Key pressed:",Vt,"Current mode:",ft.current?"POV":"Top-down"),Vt==="v")return;Xt.preventDefault();const kt=B.current.position.x,b=B.current.position.z;let H=kt,V=b,K=!1;const X=B.current.mesh;if(!X){console.error("Player mesh not found");return}if(ft.current){switch(console.log("Handling POV mode controls"),Vt){case"arrowup":case"w":console.log("Moving forward - Current position:",kt,b),console.log("Current direction:",B.current.direction),H=kt+Math.round(B.current.direction.x),V=b+Math.round(B.current.direction.z),console.log("New position will be:",H,V),K="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",kt,b),console.log("Current direction:",B.current.direction),H=kt-Math.round(B.current.direction.x),V=b-Math.round(B.current.direction.z),console.log("New position will be:",H,V),K="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",B.current.direction),B.current.direction.applyAxisAngle(new Z(0,1,0),Math.PI/2),console.log("New direction:",B.current.direction),K="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",B.current.direction),B.current.direction.applyAxisAngle(new Z(0,1,0),-Math.PI/2),console.log("New direction:",B.current.direction),K="rotate";break}if(K==="move")if(N(H,V)&&Et[H][V]===0){console.log("Movement is valid, updating positions"),B.current.position.x=H,B.current.position.z=V;const yt=new Z((H-Ut/2)*Gt,Gt/2,(V-Ut/2)*Gt);console.log("New world position:",yt),B.current.worldPosition.copy(yt),X.position.copy(yt),console.log("Updated player mesh position to:",X.position),bt.position.set(yt.x,yt.y+1.5,yt.z),console.log("New camera position:",bt.position);const wt=bt.position.clone();if(wt.add(B.current.direction.clone().multiplyScalar(Gt)),bt.lookAt(wt),console.log("Camera looking at:",wt),bt.updateProjectionMatrix(),bt.updateMatrixWorld(),H===Ut-1&&V===Ut-2){ot.current=!0,i(!0),l(!0);const Wt=Hn();return()=>{Wt&&Wt()}}}else console.log("Movement blocked - Out of bounds or wall:",H,V);else if(K==="rotate"){console.log("Handling rotation");const yt=Math.atan2(B.current.direction.x,B.current.direction.z);X.rotation.y=yt,console.log("Updated player mesh rotation to:",yt);const wt=bt.position.clone();wt.add(B.current.direction.clone().multiplyScalar(Gt)),bt.lookAt(wt),console.log("Camera looking at new direction:",wt),bt.updateProjectionMatrix(),bt.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Vt){case"arrowup":case"w":console.log("Moving up - Current position:",kt,b),V=b-1,B.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",kt,b),V=b+1,B.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",kt,b),H=kt-1,B.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",kt,b),H=kt+1,B.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",H,V),console.log("Maze value at target position:",Et[H][V]),console.log("Is in bounds:",N(H,V)),N(H,V)&&Et[H][V]===0){console.log("Movement is valid, updating positions"),B.current.position.x=H,B.current.position.z=V;const yt=new Z((H-Ut/2)*Gt,Gt/2,(V-Ut/2)*Gt);B.current.worldPosition.copy(yt),X.position.copy(yt);const wt=Math.atan2(B.current.direction.x,B.current.direction.z);if(X.rotation.y=wt,H===Ut-1&&V===Ut-2){ot.current=!0,i(!0),l(!0);const Wt=Hn();return()=>{Wt&&Wt()}}}}};window.removeEventListener("keydown",Mn,!0),window.removeEventListener("keydown",Ze),console.log("Attaching event listeners"),window.addEventListener("keydown",Mn,!0),window.addEventListener("keydown",Ze),console.log("Event listeners attached");let an;return console.log("Starting animation"),j(),window.addEventListener("resize",tt),()=>{console.log("Cleanup running"),window.removeEventListener("resize",tt),window.removeEventListener("keydown",Mn,!0),window.removeEventListener("keydown",Ze),an&&cancelAnimationFrame(an),ut.traverse(Xt=>{Xt.geometry&&Xt.geometry.dispose(),Xt.material&&(Array.isArray(Xt.material)?Xt.material.forEach(Vt=>Vt.dispose()):Xt.material.dispose())}),At.dispose(),L&&typeof L.dispose=="function"&&L.dispose()}}catch(j){console.error("Error in setup:",j)}},[]),ve.useEffect(()=>{const j=()=>{const ut=J();return ut&&(!Lt()||mt()&&!M)&&(console.log("Setting up touch controls for mobile"),P(!0)),tt(),ut},tt=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const ut=dt=>{console.log("Device orientation event received:",dt),window.removeEventListener("deviceorientation",ut)};window.addEventListener("deviceorientation",ut,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};j()},[M]);const Rt=ve.useRef(null),Yt=ve.useRef(null),Pt=ve.useRef(null),zt=ve.useRef(null);ve.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const j=vt=>{if(t||d)return;const fe=.1;switch(vt){case"up":B.current.velocity.z-=fe,B.current.direction.set(0,0,-1);break;case"down":B.current.velocity.z+=fe,B.current.direction.set(0,0,1);break;case"left":B.current.velocity.x-=fe,B.current.direction.set(-1,0,0);break;case"right":B.current.velocity.x+=fe,B.current.direction.set(1,0,0);break}const Gt=.2,Ht=B.current.velocity,Bt=Math.sqrt(Ht.x*Ht.x+Ht.z*Ht.z);Bt>Gt&&(Ht.x=Ht.x/Bt*Gt,Ht.z=Ht.z/Bt*Gt)},tt=(vt,fe)=>(vt.preventDefault(),vt.stopPropagation(),j(fe),!1),ut=(vt,fe)=>{if(!vt.current)return;const Gt=vt.current,Ht=L=>tt(L,fe),Bt=L=>L.preventDefault(),bt=L=>tt(L,fe),te=L=>tt(L,fe);return Gt.addEventListener("touchstart",Ht,{passive:!1}),Gt.addEventListener("touchend",Bt,{passive:!1}),Gt.addEventListener("mousedown",bt),Gt.addEventListener("click",te),()=>{Gt.removeEventListener("touchstart",Ht),Gt.removeEventListener("touchend",Bt),Gt.removeEventListener("mousedown",bt),Gt.removeEventListener("click",te)}},dt=ut(Rt,"up"),_t=ut(Yt,"down"),At=ut(Pt,"left"),Ut=ut(zt,"right");return()=>{dt&&dt(),_t&&_t(),At&&At(),Ut&&Ut()}},[D]),ve.useEffect(()=>{const j=()=>{let dt=document.querySelector('meta[name="viewport"]');dt||(dt=document.createElement("meta"),dt.name="viewport",document.head.appendChild(dt)),dt.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},tt=dt=>{dt.touches&&dt.touches.length>1&&dt.preventDefault()},ut=dt=>{dt.preventDefault()};return j(),document.addEventListener("touchmove",tt,{passive:!1}),document.addEventListener("touchstart",ut,{passive:!1}),()=>{document.removeEventListener("touchmove",tt),document.removeEventListener("touchstart",ut)}},[]),ve.useEffect(()=>{if(!window.gameCamera||ft.current)return;const tt=setTimeout(()=>{const ut=window.gameCamera;if(ut&&!ft.current)if(typeof window.calculateOptimalCameraHeight=="function"){const dt=window.calculateOptimalCameraHeight(D);ut.position.y=dt,ut.updateProjectionMatrix(),console.log(`Adjusted camera height to ${dt} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(tt)},[D]);const $t=()=>{if(!M||t||d)return;const j=window.maze||G.current;if(!j){console.warn("⚠️ Maze not accessible for physics update");return}const tt=window.MAZE_SIZE||21,ut=window.CELL_SIZE||2,dt=B.current,_t=dt.velocity,At=dt.position,Ut=dt.mesh;if(!Ut){console.warn("No player mesh available for physics update");return}const vt=window.physics||{},fe=vt.gravityX||0,Gt=vt.gravityZ||0,Ht=.01,Bt=.97,bt=.5,te=.45;if(_t.x+=fe*Ht,_t.z+=Gt*Ht,_t.x*=Bt,_t.z*=Bt,Math.abs(_t.x)<2e-4&&Math.abs(_t.z)<2e-4)return;const L=At.x,Et=At.z;let Nt=At.x+_t.x,ee=At.z+_t.z;window.collisionDebug=window.collisionDebug||{lastLog:0,walls:[]};const N=(jt,de)=>{if(jt<0||jt>=tt||de<0||de>=tt)return!0;if(!j[jt])return console.error(`Maze data error: Row ${jt} is undefined`),!0;if(j[jt][de]===void 0)return console.error(`Maze data error: Cell [${jt}][${de}] is undefined`),!0;const pe=j[jt][de]===1;return pe&&performance.now()-window.collisionDebug.lastLog<100&&window.collisionDebug.walls.push([jt,de]),pe};let Ct=!1,Mt="";performance.now()-window.collisionDebug.lastLog>5e3&&(window.collisionDebug.lastLog=performance.now(),window.collisionDebug.walls=[],console.log(`🧩 Player position: (${At.x.toFixed(2)},${At.z.toFixed(2)}), mesh: (${Ut.position.x.toFixed(2)},${Ut.position.z.toFixed(2)})`));const qt=(jt,de,pe)=>{const ne=Math.floor(jt),xe=Math.floor(de);if(N(ne,xe)||jt+pe>ne+1&&N(ne+1,xe)||jt-pe<ne&&N(ne-1,xe)||de+pe>xe+1&&N(ne,xe+1)||de-pe<xe&&N(ne,xe-1))return!0;const Xe=jt-ne,Hn=de-xe;return!!(Xe-pe<0&&Hn-pe<0&&Math.pow(jt-ne,2)+Math.pow(de-xe,2)<pe*pe&&N(ne-1,xe-1)||Xe+pe>1&&Hn-pe<0&&Math.pow(jt-(ne+1),2)+Math.pow(de-xe,2)<pe*pe&&N(ne+1,xe-1)||Xe-pe<0&&Hn+pe>1&&Math.pow(jt-ne,2)+Math.pow(de-(xe+1),2)<pe*pe&&N(ne-1,xe+1)||Xe+pe>1&&Hn+pe>1&&Math.pow(jt-(ne+1),2)+Math.pow(de-(xe+1),2)<pe*pe&&N(ne+1,xe+1))};let Qt=At.x;At.x=Nt,qt(At.x,At.z,te)&&(Ct=!0,Mt+=_t.x>0?"R":"L",At.x=Qt,_t.x=-_t.x*bt);let Me=At.z;if(At.z=ee,qt(At.x,At.z,te)&&(Ct=!0,Mt+=_t.z>0?"B":"T",At.z=Me,_t.z=-_t.z*bt),qt(At.x,At.z,te)&&(console.warn("Player stuck in wall, reverting to original position"),At.x=L,At.z=Et,_t.x=0,_t.z=0,Ct=!0,Mt+="STUCK"),Ut.position.x=At.x*ut,Ut.position.z=At.z*ut,Math.abs(_t.x)>.01||Math.abs(_t.z)>.01){const jt=Math.atan2(_t.x,_t.z);Ut.rotation.y=jt,dt.direction.set(_t.x,0,_t.z).normalize()}Math.floor(At.x)===tt-2&&Math.floor(At.z)===tt-2&&(console.log("Victory reached!"),i(!0),celebrate()),ht(jt=>({...jt,velocity:{x:_t.x,z:_t.z},position:{x:At.x,z:At.z},meshPosition:{x:Ut.position.x,z:Ut.position.z},collision:Ct,collisionEdge:Mt}))},ie=()=>{console.log("⚡ Initializing physics system");const j=window.CELL_SIZE||2;B.current&&(B.current.position={x:0,z:1},B.current.velocity={x:0,z:0},B.current.mesh&&(B.current.mesh.position.x=0*j,B.current.mesh.position.z=1*j,console.log(`✓ Player mesh position set to entrance (0,${j}) in world coords`))),window.physics={gravity:.01,maxSpeed:.3,friction:.97,restitution:.5,active:!0,debug:!0,lastTime:0,initialized:!0,gravityX:0,gravityZ:0,cellSize:j},console.log(`✓ Physics initialized - player at entrance (0,1) - CELL_SIZE=${j}`)},nt=()=>{const j=window.CELL_SIZE||2;B.current&&(B.current.position={x:0,z:1},B.current.velocity={x:0,z:0},B.current.mesh&&(B.current.mesh.position.x=0*j,B.current.mesh.position.z=1*j),console.log(`✓ Player position reset to entrance. Physics (0,1), Mesh (0,${j})`))},ze=()=>{var te,L,Et,Nt,ee,N;const{beta:j,gamma:tt,velocity:ut,gravity:dt,position:_t,eventCount:At,lastUpdate:Ut,eventType:vt,collision:fe,collisionEdge:Gt}=it,Ht=Math.sqrt(ut.x*ut.x+ut.z*ut.z),Bt=Ht>.01?`rgb(${Math.min(255,Math.floor(Ht*2e3))}, ${Math.min(255,Math.floor(255-Ht*500))}, 0)`:"#4CAF50",bt=()=>{const Me=40+dt.x*24*1.8,jt=40+dt.z*24*1.8,de=Math.sqrt(dt.x*dt.x+dt.z*dt.z)*24*1.5,pe=Math.atan2(dt.z,dt.x);return Zt.jsxs("div",{style:{position:"relative",width:80,height:80,backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"50%",margin:"5px auto",border:"1px solid rgba(255,255,255,0.2)"},children:[Zt.jsx("div",{style:{position:"absolute",left:40-.5,top:0,width:1,height:80,backgroundColor:"rgba(255,255,255,0.2)"}}),Zt.jsx("div",{style:{position:"absolute",left:0,top:40-.5,width:80,height:1,backgroundColor:"rgba(255,255,255,0.2)"}}),de>5&&Zt.jsx("div",{style:{position:"absolute",width:de,height:2,backgroundColor:"rgba(255,100,100,0.8)",transformOrigin:"left center",transform:`translate(40px, 40px) rotate(${pe}rad)`,borderRadius:"1px"},children:Zt.jsx("div",{style:{position:"absolute",right:-2,top:-3,width:0,height:0,borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"6px solid rgba(255,100,100,0.8)"}})}),Zt.jsx("div",{style:{position:"absolute",width:16,height:16,borderRadius:"50%",backgroundColor:Bt,transform:`translate(${Me-8}px, ${jt-8}px)`,transition:"transform 0.05s ease-out, background-color 0.1s",boxShadow:"0 0 5px rgba(0,0,0,0.5)"}}),Zt.jsx("div",{style:{position:"absolute",left:0,top:28,textAlign:"center",width:12,fontSize:10},children:"L"}),Zt.jsx("div",{style:{position:"absolute",right:0,top:28,textAlign:"center",width:12,fontSize:10},children:"R"}),Zt.jsx("div",{style:{position:"absolute",top:0,left:34,textAlign:"center",width:12,fontSize:10},children:"U"}),Zt.jsx("div",{style:{position:"absolute",bottom:0,left:34,textAlign:"center",width:12,fontSize:10},children:"D"})]})};return Zt.jsxs("div",{style:{position:"fixed",top:10,left:10,backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"10px",borderRadius:"5px",fontSize:"14px",zIndex:1e4,maxWidth:"300px",fontFamily:"monospace"},children:[Zt.jsx("h3",{style:{margin:"0 0 8px 0",borderBottom:"1px solid #666"},children:"📱 Device Debug"}),Zt.jsx(bt,{}),Zt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[Zt.jsxs("div",{children:[Zt.jsx("span",{style:{color:"#8cf"},children:"Tilt: "}),Zt.jsxs("span",{style:{fontWeight:"bold"},children:["β:",j,"° γ:",tt,"°"]})]}),Zt.jsxs("div",{children:[Zt.jsx("span",{style:{color:"#8cf"},children:"Gravity: "}),Zt.jsxs("span",{style:{color:Math.abs(dt.x)+Math.abs(dt.z)>.1?"#f88":"#8f8"},children:["X:",((te=dt.x)==null?void 0:te.toFixed(2))||0,", Z:",((L=dt.z)==null?void 0:L.toFixed(2))||0]})]}),Zt.jsxs("div",{children:[Zt.jsx("span",{style:{color:"#8cf"},children:"Velocity: "}),Zt.jsxs("span",{style:{color:Bt,fontWeight:Ht>.01?"bold":"normal"},children:[((Et=ut.x)==null?void 0:Et.toFixed(3))||0,", ",((Nt=ut.z)==null?void 0:Nt.toFixed(3))||0]})]}),Zt.jsxs("div",{children:[Zt.jsx("span",{style:{color:"#8cf"},children:"Position: "}),Zt.jsxs("span",{children:["(",((ee=_t==null?void 0:_t.x)==null?void 0:ee.toFixed(1))||"?",", ",((N=_t==null?void 0:_t.z)==null?void 0:N.toFixed(1))||"?",")"]})]}),Zt.jsxs("div",{children:[Zt.jsx("span",{style:{color:"#8cf"},children:"Collision: "}),Zt.jsx("span",{style:{color:fe?"#f88":"#8f8"},children:fe?`Yes (${Gt})`:"No"})]}),Zt.jsxs("div",{style:{display:"flex",gap:"5px",marginTop:"5px"},children:[Zt.jsx("button",{onClick:()=>{B.current&&(B.current.velocity={x:.1,z:.1},console.log("Manual impulse applied"))},style:{flex:1,background:"#4CAF50",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Impulse"}),Zt.jsx("button",{onClick:nt,style:{flex:1,background:"#2196F3",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Reset"})]})]})]})},ae=()=>{ht(j=>({...j,showDebug:!j.showDebug}))};ve.useEffect(()=>{let j,tt=0;const ut=1e3/60;let dt=0;function _t(At){if(j=requestAnimationFrame(_t),tt===0){tt=At;return}const Ut=At-tt;for(tt=At,dt+=Ut;dt>=ut;)I.current&&M&&!t&&!d&&$t(),dt-=ut}return j=requestAnimationFrame(_t),()=>{j&&cancelAnimationFrame(j)}},[M,t,d]);const ue=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Pe,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",Kt,{passive:!0}),console.log("✓ Added devicemotion listener")),T(!0),v(!0),window.physics||ie()},Kt=j=>{if(ht(ut=>({...ut,eventCount:ut.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const tt=j.accelerationIncludingGravity;if(tt&&tt.x!==null&&tt.y!==null&&tt.z!==null){let dt=Math.min(Math.max(tt.x/5,-1),1),_t=Math.min(Math.max(tt.y/5,-1),1);const At=.05;Math.abs(dt)<At&&(dt=0),Math.abs(_t)<At&&(_t=0),window.physics.gravityX=-dt,window.physics.gravityZ=_t}},Pe=j=>{if(!(j.beta===null&&j.gamma===null)&&(!M&&(j.beta!==null||j.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),T(!0),v(!0)),j.beta!==null&&j.gamma!==null)){let tt=j.beta,ut=j.gamma;if(performance.now()%5e3<20&&console.log(`Raw orientation: beta=${tt.toFixed(2)}°, gamma=${ut.toFixed(2)}°`),window.orientation!==void 0){const vt=window.orientation;if(vt===90){const fe=tt;tt=ut,ut=-fe}else if(vt===-90){const fe=tt;tt=-ut,ut=fe}else vt===180&&(tt=-tt,ut=-ut)}window.physics||ie();const dt=30,_t=1;let At=0,Ut=0;Math.abs(ut)>_t&&(At=Math.sign(ut)*Math.min(1,(Math.abs(ut)-_t)/(dt-_t))),Math.abs(tt)>_t&&(Ut=Math.sign(tt)*Math.min(1,(Math.abs(tt)-_t)/(dt-_t))),window.physics&&(window.physics.gravityX=At,window.physics.gravityZ=Ut,console.log(`Gravity vector: X=${At.toFixed(2)}, Z=${Ut.toFixed(2)}`),ht(vt=>({...vt,beta:parseFloat(tt.toFixed(2)),gamma:parseFloat(ut.toFixed(2)),gravity:{x:At,z:Ut},eventCount:vt.eventCount+1,lastUpdate:Date.now(),eventType:"orientation"}))),W.current={beta:tt,gamma:ut}}};ve.useEffect(()=>{if(!it.showDebug)return;const j=()=>{if(document.getElementById("collision-visualizer"))return;const dt=document.createElement("div");dt.id="collision-visualizer",dt.style.cssText=`
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px dashed rgba(255, 100, 100, 0.7);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: border-color 0.3s;
        z-index: 1000;
      `,document.body.appendChild(dt),window.collisionVisualizer=dt},tt=()=>{var vt;if(!window.collisionVisualizer||!((vt=B.current)!=null&&vt.mesh))return;const dt=B.current.mesh,_t=new Z;_t.set(dt.position.x,dt.position.y,dt.position.z),_t.project(camera);const At=(_t.x*.5+.5)*window.innerWidth,Ut=(-(_t.y*.5)+.5)*window.innerHeight;window.collisionVisualizer.style.left=`${At}px`,window.collisionVisualizer.style.top=`${Ut}px`,window.collisionVisualizer.style.borderColor=it.collision?"rgba(255, 0, 0, 0.9)":"rgba(100, 255, 100, 0.6)",requestAnimationFrame(tt)};j();const ut=requestAnimationFrame(tt);return()=>{cancelAnimationFrame(ut),window.collisionVisualizer&&(window.collisionVisualizer.remove(),window.collisionVisualizer=null)}},[it.showDebug]),ve.useEffect(()=>{const j=()=>{try{window.screen&&window.screen.orientation?window.screen.orientation.lock("portrait").then(()=>console.log("✓ Orientation locked to portrait")).catch(tt=>console.warn("Cannot lock orientation:",tt)):window.orientation!==void 0&&(console.log("Using orientation event fallback for iOS"),window.addEventListener("orientationchange",function(){window.orientation===90||window.orientation===-90?U("Please rotate your device to portrait mode"):U("")}))}catch(tt){console.warn("Orientation locking not supported:",tt)}};return J()&&(j(),A("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait")),()=>{window.removeEventListener("orientationchange",()=>{})}},[]);const[he,U]=ve.useState(""),A=j=>{let tt=document.querySelector('meta[name="viewport"]');tt||(tt=document.createElement("meta"),tt.name="viewport",document.head.appendChild(tt)),tt.setAttribute("content",j),console.log("✓ Viewport meta set:",j);let ut=document.querySelector('meta[name="screen-orientation"]');ut||(ut=document.createElement("meta"),ut.name="screen-orientation",document.head.appendChild(ut)),ut.setAttribute("content","portrait")},st={position:"fixed",top:0,left:0,width:"100%",height:"100%",display:he?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.85)",color:"white",fontSize:"1.5rem",textAlign:"center",padding:"2rem",zIndex:9999,fontFamily:"Arial, sans-serif"},Ot=()=>{const j=window.matchMedia("(orientation: landscape)").matches;return J()&&j?(U("Please rotate your device to portrait mode"),window.physics&&(window.physics.active=!1)):(U(""),window.physics&&(window.physics.active=!0)),!j};return ve.useEffect(()=>{Ot();const j=()=>{Ot(),cameraRef.current&&!u&&setTimeout(()=>{const ut=calculateOptimalCameraHeight(D);cameraRef.current.position.y=ut},300)};window.addEventListener("orientationchange",j),window.addEventListener("resize",j);const tt=window.matchMedia("(orientation: portrait)");return tt.addEventListener("change",j),()=>{window.removeEventListener("orientationchange",j),window.removeEventListener("resize",j),tt.removeEventListener("change",j)}},[u,D]),Zt.jsxs(Zt.Fragment,{children:[he&&Zt.jsxs("div",{style:st,children:[Zt.jsx("div",{style:{marginBottom:"1rem"},children:Zt.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",children:Zt.jsx("path",{fill:"white",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M7,13H17V11H7"})})}),Zt.jsx("div",{children:he}),Zt.jsx("div",{style:{marginTop:"2rem",fontSize:"1rem",opacity:.8},children:"The maze game works best in portrait orientation"})]}),Zt.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),it.showDebug&&Zt.jsx(ze,{}),Zt.jsx("button",{onClick:ae,style:{position:"fixed",top:10,right:10,zIndex:1e4,background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px"},children:it.showDebug?"Hide Debug":"Show Debug"}),_&&Zt.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[Zt.jsx("button",{className:"permission-button",onClick:j=>{j.preventDefault(),j.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{Y()},10)},onTouchStart:j=>{console.log("Button touch started"),j.stopPropagation()},onTouchEnd:j=>{console.log("Button touch ended"),j.preventDefault(),j.stopPropagation(),setTimeout(()=>{Y()},10)},children:"Enable Tilt Controls"}),Zt.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),D&&Zt.jsxs("div",{className:"touch-controls",children:[Zt.jsx("div",{className:"touch-controls-row",children:Zt.jsx("button",{ref:Rt,className:"touch-button up-button","data-direction":"up",children:"▲"})}),Zt.jsxs("div",{className:"touch-controls-row",children:[Zt.jsx("button",{ref:Pt,className:"touch-button left-button","data-direction":"left",children:"◀"}),Zt.jsx("div",{className:"touch-button-spacer"}),Zt.jsx("button",{ref:zt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),Zt.jsx("div",{className:"touch-controls-row",children:Zt.jsx("button",{ref:Yt,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),t&&Zt.jsxs("div",{className:"victory-message",children:[Zt.jsx("h1",{children:"You Won!"}),r&&Zt.jsx("button",{onClick:C,children:"Play Again"})]}),m&&Zt.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),R&&M&&Zt.jsxs("div",{className:"gyroscope-indicator",children:[Zt.jsx("div",{className:"gyroscope-icon",children:Zt.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:Zt.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),Zt.jsx("span",{children:"Tilt to Move"})]})]})}Gx.createRoot(document.getElementById("root")).render(Zt.jsx(ve.StrictMode,{children:Zt.jsx(p1,{})}));
