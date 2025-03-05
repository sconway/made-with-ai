(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function wS(){if(ng)return bo;ng=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var ig;function CS(){return ig||(ig=1,Lf.exports=wS()),Lf.exports}var Yn=CS(),Uf={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function DS(){if(ag)return fe;ag=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function g(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function S(C,j,pt){this.props=C,this.context=j,this.refs=w,this.updater=pt||M}S.prototype.isReactComponent={},S.prototype.setState=function(C,j){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,j,"setState")},S.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function v(){}v.prototype=S.prototype;function B(C,j,pt){this.props=C,this.context=j,this.refs=w,this.updater=pt||M}var L=B.prototype=new v;L.constructor=B,b(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,k={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function F(C,j,pt,bt,W,dt){return pt=dt.ref,{$$typeof:o,type:C,key:j,ref:pt!==void 0?pt:null,props:dt}}function ut(C,j){return F(C.type,j,void 0,void 0,void 0,C.props)}function K(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function T(C){var j={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(pt){return j[pt]})}var U=/\/+/g;function Q(C,j){return typeof C=="object"&&C!==null&&C.key!=null?T(""+C.key):j.toString(36)}function vt(){}function G(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(vt,vt):(C.status="pending",C.then(function(j){C.status==="pending"&&(C.status="fulfilled",C.value=j)},function(j){C.status==="pending"&&(C.status="rejected",C.reason=j)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function Z(C,j,pt,bt,W){var dt=typeof C;(dt==="undefined"||dt==="boolean")&&(C=null);var xt=!1;if(C===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(C.$$typeof){case o:case e:xt=!0;break;case _:return xt=C._init,Z(xt(C._payload),j,pt,bt,W)}}if(xt)return W=W(C),xt=bt===""?"."+Q(C,0):bt,P(W)?(pt="",xt!=null&&(pt=xt.replace(U,"$&/")+"/"),Z(W,j,pt,"",function(Lt){return Lt})):W!=null&&(K(W)&&(W=ut(W,pt+(W.key==null||C&&C.key===W.key?"":(""+W.key).replace(U,"$&/")+"/")+xt)),j.push(W)),1;xt=0;var It=bt===""?".":bt+":";if(P(C))for(var Dt=0;Dt<C.length;Dt++)bt=C[Dt],dt=It+Q(bt,Dt),xt+=Z(bt,j,pt,dt,W);else if(Dt=g(C),typeof Dt=="function")for(C=Dt.call(C),Dt=0;!(bt=C.next()).done;)bt=bt.value,dt=It+Q(bt,Dt++),xt+=Z(bt,j,pt,dt,W);else if(dt==="object"){if(typeof C.then=="function")return Z(G(C),j,pt,bt,W);throw j=String(C),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return xt}function I(C,j,pt){if(C==null)return C;var bt=[],W=0;return Z(C,bt,"","",function(dt){return j.call(pt,dt,W++)}),bt}function J(C){if(C._status===-1){var j=C._result;j=j(),j.then(function(pt){(C._status===0||C._status===-1)&&(C._status=1,C._result=pt)},function(pt){(C._status===0||C._status===-1)&&(C._status=2,C._result=pt)}),C._status===-1&&(C._status=0,C._result=j)}if(C._status===1)return C._result.default;throw C._result}var it=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ht(){}return fe.Children={map:I,forEach:function(C,j,pt){I(C,function(){j.apply(this,arguments)},pt)},count:function(C){var j=0;return I(C,function(){j++}),j},toArray:function(C){return I(C,function(j){return j})||[]},only:function(C){if(!K(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},fe.Component=S,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=B,fe.StrictMode=r,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(C){return function(){return C.apply(null,arguments)}},fe.cloneElement=function(C,j,pt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var bt=b({},C.props),W=C.key,dt=void 0;if(j!=null)for(xt in j.ref!==void 0&&(dt=void 0),j.key!==void 0&&(W=""+j.key),j)!H.call(j,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&j.ref===void 0||(bt[xt]=j[xt]);var xt=arguments.length-2;if(xt===1)bt.children=pt;else if(1<xt){for(var It=Array(xt),Dt=0;Dt<xt;Dt++)It[Dt]=arguments[Dt+2];bt.children=It}return F(C.type,W,void 0,void 0,dt,bt)},fe.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},fe.createElement=function(C,j,pt){var bt,W={},dt=null;if(j!=null)for(bt in j.key!==void 0&&(dt=""+j.key),j)H.call(j,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(W[bt]=j[bt]);var xt=arguments.length-2;if(xt===1)W.children=pt;else if(1<xt){for(var It=Array(xt),Dt=0;Dt<xt;Dt++)It[Dt]=arguments[Dt+2];W.children=It}if(C&&C.defaultProps)for(bt in xt=C.defaultProps,xt)W[bt]===void 0&&(W[bt]=xt[bt]);return F(C,dt,void 0,void 0,null,W)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(C){return{$$typeof:h,render:C}},fe.isValidElement=K,fe.lazy=function(C){return{$$typeof:_,_payload:{_status:-1,_result:C},_init:J}},fe.memo=function(C,j){return{$$typeof:m,type:C,compare:j===void 0?null:j}},fe.startTransition=function(C){var j=k.T,pt={};k.T=pt;try{var bt=C(),W=k.S;W!==null&&W(pt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(ht,it)}catch(dt){it(dt)}finally{k.T=j}},fe.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},fe.use=function(C){return k.H.use(C)},fe.useActionState=function(C,j,pt){return k.H.useActionState(C,j,pt)},fe.useCallback=function(C,j){return k.H.useCallback(C,j)},fe.useContext=function(C){return k.H.useContext(C)},fe.useDebugValue=function(){},fe.useDeferredValue=function(C,j){return k.H.useDeferredValue(C,j)},fe.useEffect=function(C,j){return k.H.useEffect(C,j)},fe.useId=function(){return k.H.useId()},fe.useImperativeHandle=function(C,j,pt){return k.H.useImperativeHandle(C,j,pt)},fe.useInsertionEffect=function(C,j){return k.H.useInsertionEffect(C,j)},fe.useLayoutEffect=function(C,j){return k.H.useLayoutEffect(C,j)},fe.useMemo=function(C,j){return k.H.useMemo(C,j)},fe.useOptimistic=function(C,j){return k.H.useOptimistic(C,j)},fe.useReducer=function(C,j,pt){return k.H.useReducer(C,j,pt)},fe.useRef=function(C){return k.H.useRef(C)},fe.useState=function(C){return k.H.useState(C)},fe.useSyncExternalStore=function(C,j,pt){return k.H.useSyncExternalStore(C,j,pt)},fe.useTransition=function(){return k.H.useTransition()},fe.version="19.0.0",fe}var rg;function Ah(){return rg||(rg=1,Uf.exports=DS()),Uf.exports}var en=Ah(),Nf={exports:{}},Ao={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function LS(){return sg||(sg=1,function(o){function e(I,J){var it=I.length;I.push(J);t:for(;0<it;){var ht=it-1>>>1,C=I[ht];if(0<l(C,J))I[ht]=J,I[it]=C,it=ht;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var J=I[0],it=I.pop();if(it!==J){I[0]=it;t:for(var ht=0,C=I.length,j=C>>>1;ht<j;){var pt=2*(ht+1)-1,bt=I[pt],W=pt+1,dt=I[W];if(0>l(bt,it))W<C&&0>l(dt,bt)?(I[ht]=dt,I[W]=it,ht=W):(I[ht]=bt,I[pt]=it,ht=pt);else if(W<C&&0>l(dt,it))I[ht]=dt,I[W]=it,ht=W;else break t}}return J}function l(I,J){var it=I.sortIndex-J.sortIndex;return it!==0?it:I.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,y=null,g=3,M=!1,b=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var J=i(m);J!==null;){if(J.callback===null)r(m);else if(J.startTime<=I)r(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=i(m)}}function P(I){if(w=!1,L(I),!b)if(i(p)!==null)b=!0,G();else{var J=i(m);J!==null&&Z(P,J.startTime-I)}}var k=!1,H=-1,F=5,ut=-1;function K(){return!(o.unstable_now()-ut<F)}function T(){if(k){var I=o.unstable_now();ut=I;var J=!0;try{t:{b=!1,w&&(w=!1,v(H),H=-1),M=!0;var it=g;try{e:{for(L(I),y=i(p);y!==null&&!(y.expirationTime>I&&K());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,g=y.priorityLevel;var C=ht(y.expirationTime<=I);if(I=o.unstable_now(),typeof C=="function"){y.callback=C,L(I),J=!0;break e}y===i(p)&&r(p),L(I)}else r(p);y=i(p)}if(y!==null)J=!0;else{var j=i(m);j!==null&&Z(P,j.startTime-I),J=!1}}break t}finally{y=null,g=it,M=!1}J=void 0}}finally{J?U():k=!1}}}var U;if(typeof B=="function")U=function(){B(T)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,vt=Q.port2;Q.port1.onmessage=T,U=function(){vt.postMessage(null)}}else U=function(){S(T,0)};function G(){k||(k=!0,U())}function Z(I,J){H=S(function(){I(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_continueExecution=function(){b||M||(b=!0,G())},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(I){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var it=g;g=J;try{return I()}finally{g=it}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var it=g;g=I;try{return J()}finally{g=it}},o.unstable_scheduleCallback=function(I,J,it){var ht=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ht+it:ht):it=ht,I){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=it+C,I={id:_++,callback:J,priorityLevel:I,startTime:it,expirationTime:C,sortIndex:-1},it>ht?(I.sortIndex=it,e(m,I),i(p)===null&&I===i(m)&&(w?(v(H),H=-1):w=!0,Z(P,it-ht))):(I.sortIndex=C,e(p,I),b||M||(b=!0,G())),I},o.unstable_shouldYield=K,o.unstable_wrapCallback=function(I){var J=g;return function(){var it=g;g=J;try{return I.apply(this,arguments)}finally{g=it}}}}(Pf)),Pf}var og;function US(){return og||(og=1,Of.exports=LS()),Of.exports}var zf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function NS(){if(lg)return Mn;lg=1;var o=Ah();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,_)},Mn.flushSync=function(p){var m=d.T,_=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=_,r.d.f()}},Mn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Mn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Mn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,y=h(_,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:M}):_==="script"&&r.d.X(p,{crossOrigin:y,integrity:g,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Mn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,y=h(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Mn.requestFormReset=function(p){r.d.r(p)},Mn.unstable_batchedUpdates=function(p,m){return p(m)},Mn.useFormState=function(p,m,_){return d.H.useFormState(p,m,_)},Mn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var cg;function OS(){if(cg)return zf.exports;cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=NS(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function PS(){if(ug)return Ao;ug=1;var o=US(),e=Ah(),i=OS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),g=Symbol.for("react.consumer"),M=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),P=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case h:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case S:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case g:return(t._context.displayName||"Context")+".Consumer";case b:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case v:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case B:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,U,Q;function vt(t){if(U===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);U=n&&n[1]||"",Q=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+U+t+Q}var G=!1;function Z(t,n){if(!t||G)return"";G=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(mt){var st=mt}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(mt){st=mt}t.call(Tt.prototype)}}else{try{throw Error()}catch(mt){st=mt}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(mt){if(mt&&st&&typeof mt.stack=="string")return[mt.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var z=x.split(`
`),q=A.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<q.length&&!q[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===q.length)for(s=z.length-1,c=q.length-1;1<=s&&0<=c&&z[s]!==q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==q[c]){var _t=`
`+z[s].replace(" at new "," at ");return t.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",t.displayName)),_t}while(1<=s&&0<=c);break}}}finally{G=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function I(t){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function J(t){try{var n="";do n+=I(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function it(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ht(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if(it(t)!==t)throw Error(r(188))}function j(t){var n=t.alternate;if(!n){if(n=it(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),t;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,A=c.child;A;){if(A===a){x=!0,a=c,s=f;break}if(A===s){x=!0,s=c,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,s=c;break}if(A===s){x=!0,s=f,a=c;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function pt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=pt(t),n!==null)return n;t=t.sibling}return null}var bt=Array.isArray,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},xt=[],It=-1;function Dt(t){return{current:t}}function Lt(t){0>It||(t.current=xt[It],xt[It]=null,It--)}function Yt(t,n){It++,xt[It]=t.current,t.current=n}var Kt=Dt(null),tt=Dt(null),ie=Dt(null),Xt=Dt(null);function te(t,n){switch(Yt(ie,n),Yt(tt,t),Yt(Kt,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Lm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Lm(t),n=Um(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Lt(Kt),Yt(Kt,n)}function Gt(){Lt(Kt),Lt(tt),Lt(ie)}function Te(t){t.memoizedState!==null&&Yt(Xt,t);var n=Kt.current,a=Um(n,t.type);n!==a&&(Yt(tt,t),Yt(Kt,a))}function gt(t){tt.current===t&&(Lt(Kt),Lt(tt)),Xt.current===t&&(Lt(Xt),yo._currentValue=dt)}var R=Object.prototype.hasOwnProperty,E=o.unstable_scheduleCallback,V=o.unstable_cancelCallback,ot=o.unstable_shouldYield,et=o.unstable_requestPaint,ct=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,At=o.unstable_ImmediatePriority,Et=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,qt=o.unstable_LowPriority,St=o.unstable_IdlePriority,se=o.log,re=o.unstable_setDisableYieldValue,Jt=null,Nt=null;function Ft(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}}function Ht(t){if(typeof se=="function"&&re(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Jt,t)}catch{}}var O=Math.clz32?Math.clz32:Qt,wt=Math.log,Ot=Math.LN2;function Qt(t){return t>>>=0,t===0?32:31-(wt(t)/Ot|0)|0}var N=128,Rt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function zt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,x=t.warmLanes;t=t.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?s=Mt(a):(f&=A,f!==0?s=Mt(f):t||(x=A&~x,x!==0&&(s=Mt(x))))):(A=a&~c,A!==0?s=Mt(A):f!==0?s=Mt(f):t||(x=a&~x,x!==0&&(s=Mt(x)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,x=n&-n,c>=x||c===32&&(x&4194176)!==0)?n:s}function Vt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Me(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pe(){var t=N;return N<<=1,!(N&4194176)&&(N=128),t}function Re(){var t=Rt;return Rt<<=1,!(Rt&62914560)&&(Rt=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ge(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ie(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,q=t.hiddenUpdates;for(a=x&~a;0<a;){var _t=31-O(a),Tt=1<<_t;A[_t]=0,z[_t]=-1;var st=q[_t];if(st!==null)for(q[_t]=null,_t=0;_t<st.length;_t++){var mt=st[_t];mt!==null&&(mt.lane&=-536870913)}a&=~Tt}s!==0&&ln(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function ln(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-O(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-O(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Fo(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ia(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Km(t.type))}function Io(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var In=Math.random().toString(36).slice(2),nn="__reactFiber$"+In,dn="__reactProps$"+In,ea="__reactContainer$"+In,Cs="__reactEvents$"+In,wc="__reactListeners$"+In,D="__reactHandles$"+In,nt="__reactResources$"+In,lt="__reactMarker$"+In;function ft(t){delete t[nn],delete t[dn],delete t[Cs],delete t[wc],delete t[D]}function rt(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ea]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pm(t);t!==null;){if(a=t[nn])return a;t=Pm(t)}return n}t=a,a=t.parentNode}return null}function Bt(t){if(t=t[nn]||t[ea]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function jt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ee(t){var n=t[nt];return n||(n=t[nt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function kt(t){t[lt]=!0}var ue=new Set,le={};function ae(t,n){we(t,n),we(t+"Capture",n)}function we(t,n){for(le[t]=n,t=0;t<n.length;t++)ue.add(n[t])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zn={},Oe={};function he(t){return R.call(Oe,t)?!0:R.call(Zn,t)?!1:Ke.test(t)?Oe[t]=!0:(Zn[t]=!0,!1)}function na(t,n,a){if(he(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ue(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function An(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ia(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ds(t){var n=ia(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=Ds(t))}function Si(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ia(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function aa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function yn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ls(t,n,a,s,c,f,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+An(n)):t.value!==""+An(n)&&(t.value=""+An(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,x,An(n)):a!=null?Cc(t,x,An(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+An(A):t.removeAttribute("name")}function Us(t,n,a,s,c,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+An(a):"",n=n!=null?""+An(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Cc(t,n,a){n==="number"&&aa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+An(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Bh(t,n,a){if(n!=null&&(n=""+An(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+An(a):""}function Fh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(bt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=An(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function yr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var b0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ih(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||b0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Hh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Ih(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ih(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Mr=null;function Gh(t){var n=Bt(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ls(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[dn]||null;if(!c)throw Error(r(90));Ls(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Si(s)}break t;case"textarea":Bh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sr(t,!!a.multiple,n,!1)}}}var Nc=!1;function Vh(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(xr!==null||Mr!==null)&&(El(),xr&&(n=xr,t=Mr,Mr=xr=null,Gh(n),t)))for(n=0;n<t.length;n++)Gh(t[n])}}function Ns(t,n){var a=t.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(He)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Oc=!1}var ra=null,Pc=null,Go=null;function kh(){if(Go)return Go;var t,n=Pc,a=n.length,s,c="value"in ra?ra.value:ra.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Go=c.slice(t,1<s?1-s:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Wh(){return!1}function Nn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Wh,this.isPropagationStopped=Wh,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Nn(Ha),Ps=T({},Ha,{view:0,detail:0}),w0=Nn(Ps),zc,Bc,zs,Xo=T({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(zc=t.screenX-zs.screenX,Bc=t.screenY-zs.screenY):Bc=zc=0,zs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Xh=Nn(Xo),C0=T({},Xo,{dataTransfer:0}),D0=Nn(C0),L0=T({},Ps,{relatedTarget:0}),Fc=Nn(L0),U0=T({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Nn(U0),O0=T({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P0=Nn(O0),z0=T({},Ha,{data:0}),qh=Nn(z0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=I0[t])?!!n[t]:!1}function Ic(){return H0}var G0=T({},Ps,{key:function(t){if(t.key){var n=B0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V0=Nn(G0),k0=T({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=Nn(k0),W0=T({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),X0=Nn(W0),q0=T({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Nn(q0),j0=T({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=Nn(j0),K0=T({},Ha,{newState:0,oldState:0}),Q0=Nn(K0),J0=[9,13,27,32],Hc=He&&"CompositionEvent"in window,Bs=null;He&&"documentMode"in document&&(Bs=document.documentMode);var $0=He&&"TextEvent"in window&&!Bs,jh=He&&(!Hc||Bs&&8<Bs&&11>=Bs),Zh=" ",Kh=!1;function Qh(t,n){switch(t){case"keyup":return J0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function tv(t,n){switch(t){case"compositionend":return Jh(n);case"keypress":return n.which!==32?null:(Kh=!0,Zh);case"textInput":return t=n.data,t===Zh&&Kh?null:t;default:return null}}function ev(t,n){if(Er)return t==="compositionend"||!Hc&&Qh(t,n)?(t=kh(),Go=Pc=ra=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jh&&n.locale!=="ko"?null:n.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nv[t.type]:n==="textarea"}function td(t,n,a,s){xr?Mr?Mr.push(s):Mr=[s]:xr=s,n=wl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Fs=null,Is=null;function iv(t){Am(t,0)}function qo(t){var n=jt(t);if(Si(n))return t}function ed(t,n){if(t==="change")return n}var nd=!1;if(He){var Gc;if(He){var Vc="oninput"in document;if(!Vc){var id=document.createElement("div");id.setAttribute("oninput","return;"),Vc=typeof id.oninput=="function"}Gc=Vc}else Gc=!1;nd=Gc&&(!document.documentMode||9<document.documentMode)}function ad(){Fs&&(Fs.detachEvent("onpropertychange",rd),Is=Fs=null)}function rd(t){if(t.propertyName==="value"&&qo(Is)){var n=[];td(n,Is,t,Uc(t)),Vh(iv,n)}}function av(t,n,a){t==="focusin"?(ad(),Fs=n,Is=a,Fs.attachEvent("onpropertychange",rd)):t==="focusout"&&ad()}function rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(Is)}function sv(t,n){if(t==="click")return qo(n)}function ov(t,n){if(t==="input"||t==="change")return qo(n)}function lv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:lv;function Hs(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!R.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function od(t,n){var a=sd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=sd(a)}}function ld(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ld(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=aa(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=aa(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function cv(t,n){var a=cd(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&ld(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=od(n,f);var x=od(n,s);c&&x&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var uv=He&&"documentMode"in document&&11>=document.documentMode,Tr=null,Wc=null,Gs=null,Xc=!1;function ud(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Tr==null||Tr!==aa(s)||(s=Tr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gs&&Hs(Gs,s)||(Gs=s,s=wl(Wc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function Ga(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var br={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},qc={},fd={};He&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Va(t){if(qc[t])return qc[t];if(!br[t])return t;var n=br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in fd)return qc[t]=n[a];return t}var hd=Va("animationend"),dd=Va("animationiteration"),pd=Va("animationstart"),fv=Va("transitionrun"),hv=Va("transitionstart"),dv=Va("transitioncancel"),md=Va("transitionend"),gd=new Map,_d="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(t,n){gd.set(t,n),ae(n,[t])}var Kn=[],Ar=0,Yc=0;function Yo(){for(var t=Ar,n=Yc=Ar=0;n<t;){var a=Kn[n];Kn[n++]=null;var s=Kn[n];Kn[n++]=null;var c=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&vd(a,c,f)}}function jo(t,n,a,s){Kn[Ar++]=t,Kn[Ar++]=n,Kn[Ar++]=a,Kn[Ar++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return jo(t,n,a,s),Zo(t)}function sa(t,n){return jo(t,null,null,n),Zo(t)}function vd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-O(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Zo(t){if(50<ho)throw ho=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={},Sd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=Sd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:J(n)},Sd.set(t,n),n)}return{value:t,source:n,stack:J(n)}}var wr=[],Cr=0,Ko=null,Qo=0,Jn=[],$n=0,ka=null,Di=1,Li="";function Wa(t,n){wr[Cr++]=Qo,wr[Cr++]=Ko,Ko=t,Qo=n}function yd(t,n,a){Jn[$n++]=Di,Jn[$n++]=Li,Jn[$n++]=ka,ka=t;var s=Di;t=Li;var c=32-O(s)-1;s&=~(1<<c),a+=1;var f=32-O(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Di=1<<32-O(n)+c|a<<c|s,Li=f+t}else Di=1<<f|a<<c|s,Li=t}function Zc(t){t.return!==null&&(Wa(t,1),yd(t,1,0))}function Kc(t){for(;t===Ko;)Ko=wr[--Cr],wr[Cr]=null,Qo=wr[--Cr],wr[Cr]=null;for(;t===ka;)ka=Jn[--$n],Jn[$n]=null,Li=Jn[--$n],Jn[$n]=null,Di=Jn[--$n],Jn[$n]=null}var Rn=null,mn=null,be=!1,ui=null,yi=!1,Qc=Error(r(519));function Xa(t){var n=Error(r(418,""));throw Ws(Qn(n,t)),Qc}function xd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nn]=t,n[dn]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)ye(mo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Us(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ye(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Fh(n,s.value,s.defaultValue,s.children),Ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Dm(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Cl),n=!0):n=!1,n||Xa(t)}function Md(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 3:case 27:yi=!0;return;case 5:case 13:yi=!1;return;default:Rn=Rn.return}}function Vs(t){if(t!==Rn)return!1;if(!be)return Md(t),be=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&mn&&Xa(t),Md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){mn=hi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}mn=null}}else mn=Rn?hi(t.stateNode.nextSibling):null;return!0}function ks(){mn=Rn=null,be=!1}function Ws(t){ui===null?ui=[t]:ui.push(t)}var Xs=Error(r(460)),Ed=Error(r(474)),Jc={then:function(){}};function Td(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jo(){}function bd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Xs?Error(r(483)):t;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(t=Pe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Xs?Error(r(483)):t}throw qs=n,Xs}}var qs=null;function Ad(){if(qs===null)throw Error(r(459));var t=qs;return qs=null,t}var Dr=null,Ys=0;function $o(t){var n=Ys;return Ys+=1,Dr===null&&(Dr=[]),bd(Dr,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tl(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rd(t){var n=t._init;return n(t._payload)}function wd(t){function n($,X){if(t){var at=$.deletions;at===null?($.deletions=[X],$.flags|=16):at.push(X)}}function a($,X){if(!t)return null;for(;X!==null;)n($,X),X=X.sibling;return null}function s($){for(var X=new Map;$!==null;)$.key!==null?X.set($.key,$):X.set($.index,$),$=$.sibling;return X}function c($,X){return $=va($,X),$.index=0,$.sibling=null,$}function f($,X,at){return $.index=at,t?(at=$.alternate,at!==null?(at=at.index,at<X?($.flags|=33554434,X):at):($.flags|=33554434,X)):($.flags|=1048576,X)}function x($){return t&&$.alternate===null&&($.flags|=33554434),$}function A($,X,at,yt){return X===null||X.tag!==6?(X=qu(at,$.mode,yt),X.return=$,X):(X=c(X,at),X.return=$,X)}function z($,X,at,yt){var Wt=at.type;return Wt===p?_t($,X,at.props.children,yt,at.key):X!==null&&(X.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===B&&Rd(Wt)===X.type)?(X=c(X,at.props),js(X,at),X.return=$,X):(X=vl(at.type,at.key,at.props,null,$.mode,yt),js(X,at),X.return=$,X)}function q($,X,at,yt){return X===null||X.tag!==4||X.stateNode.containerInfo!==at.containerInfo||X.stateNode.implementation!==at.implementation?(X=Yu(at,$.mode,yt),X.return=$,X):(X=c(X,at.children||[]),X.return=$,X)}function _t($,X,at,yt,Wt){return X===null||X.tag!==7?(X=er(at,$.mode,yt,Wt),X.return=$,X):(X=c(X,at),X.return=$,X)}function Tt($,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=qu(""+X,$.mode,at),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case d:return at=vl(X.type,X.key,X.props,null,$.mode,at),js(at,X),at.return=$,at;case h:return X=Yu(X,$.mode,at),X.return=$,X;case B:var yt=X._init;return X=yt(X._payload),Tt($,X,at)}if(bt(X)||H(X))return X=er(X,$.mode,at,null),X.return=$,X;if(typeof X.then=="function")return Tt($,$o(X),at);if(X.$$typeof===M)return Tt($,ml($,X),at);tl($,X)}return null}function st($,X,at,yt){var Wt=X!==null?X.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Wt!==null?null:A($,X,""+at,yt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case d:return at.key===Wt?z($,X,at,yt):null;case h:return at.key===Wt?q($,X,at,yt):null;case B:return Wt=at._init,at=Wt(at._payload),st($,X,at,yt)}if(bt(at)||H(at))return Wt!==null?null:_t($,X,at,yt,null);if(typeof at.then=="function")return st($,X,$o(at),yt);if(at.$$typeof===M)return st($,X,ml($,at),yt);tl($,at)}return null}function mt($,X,at,yt,Wt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return $=$.get(at)||null,A(X,$,""+yt,Wt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case d:return $=$.get(yt.key===null?at:yt.key)||null,z(X,$,yt,Wt);case h:return $=$.get(yt.key===null?at:yt.key)||null,q(X,$,yt,Wt);case B:var _e=yt._init;return yt=_e(yt._payload),mt($,X,at,yt,Wt)}if(bt(yt)||H(yt))return $=$.get(at)||null,_t(X,$,yt,Wt,null);if(typeof yt.then=="function")return mt($,X,at,$o(yt),Wt);if(yt.$$typeof===M)return mt($,X,at,ml(X,yt),Wt);tl(X,yt)}return null}function Zt($,X,at,yt){for(var Wt=null,_e=null,$t=X,ne=X=0,fn=null;$t!==null&&ne<at.length;ne++){$t.index>ne?(fn=$t,$t=null):fn=$t.sibling;var Ae=st($,$t,at[ne],yt);if(Ae===null){$t===null&&($t=fn);break}t&&$t&&Ae.alternate===null&&n($,$t),X=f(Ae,X,ne),_e===null?Wt=Ae:_e.sibling=Ae,_e=Ae,$t=fn}if(ne===at.length)return a($,$t),be&&Wa($,ne),Wt;if($t===null){for(;ne<at.length;ne++)$t=Tt($,at[ne],yt),$t!==null&&(X=f($t,X,ne),_e===null?Wt=$t:_e.sibling=$t,_e=$t);return be&&Wa($,ne),Wt}for($t=s($t);ne<at.length;ne++)fn=mt($t,$,ne,at[ne],yt),fn!==null&&(t&&fn.alternate!==null&&$t.delete(fn.key===null?ne:fn.key),X=f(fn,X,ne),_e===null?Wt=fn:_e.sibling=fn,_e=fn);return t&&$t.forEach(function(ba){return n($,ba)}),be&&Wa($,ne),Wt}function ce($,X,at,yt){if(at==null)throw Error(r(151));for(var Wt=null,_e=null,$t=X,ne=X=0,fn=null,Ae=at.next();$t!==null&&!Ae.done;ne++,Ae=at.next()){$t.index>ne?(fn=$t,$t=null):fn=$t.sibling;var ba=st($,$t,Ae.value,yt);if(ba===null){$t===null&&($t=fn);break}t&&$t&&ba.alternate===null&&n($,$t),X=f(ba,X,ne),_e===null?Wt=ba:_e.sibling=ba,_e=ba,$t=fn}if(Ae.done)return a($,$t),be&&Wa($,ne),Wt;if($t===null){for(;!Ae.done;ne++,Ae=at.next())Ae=Tt($,Ae.value,yt),Ae!==null&&(X=f(Ae,X,ne),_e===null?Wt=Ae:_e.sibling=Ae,_e=Ae);return be&&Wa($,ne),Wt}for($t=s($t);!Ae.done;ne++,Ae=at.next())Ae=mt($t,$,ne,Ae.value,yt),Ae!==null&&(t&&Ae.alternate!==null&&$t.delete(Ae.key===null?ne:Ae.key),X=f(Ae,X,ne),_e===null?Wt=Ae:_e.sibling=Ae,_e=Ae);return t&&$t.forEach(function(RS){return n($,RS)}),be&&Wa($,ne),Wt}function Xe($,X,at,yt){if(typeof at=="object"&&at!==null&&at.type===p&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case d:t:{for(var Wt=at.key;X!==null;){if(X.key===Wt){if(Wt=at.type,Wt===p){if(X.tag===7){a($,X.sibling),yt=c(X,at.props.children),yt.return=$,$=yt;break t}}else if(X.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===B&&Rd(Wt)===X.type){a($,X.sibling),yt=c(X,at.props),js(yt,at),yt.return=$,$=yt;break t}a($,X);break}else n($,X);X=X.sibling}at.type===p?(yt=er(at.props.children,$.mode,yt,at.key),yt.return=$,$=yt):(yt=vl(at.type,at.key,at.props,null,$.mode,yt),js(yt,at),yt.return=$,$=yt)}return x($);case h:t:{for(Wt=at.key;X!==null;){if(X.key===Wt)if(X.tag===4&&X.stateNode.containerInfo===at.containerInfo&&X.stateNode.implementation===at.implementation){a($,X.sibling),yt=c(X,at.children||[]),yt.return=$,$=yt;break t}else{a($,X);break}else n($,X);X=X.sibling}yt=Yu(at,$.mode,yt),yt.return=$,$=yt}return x($);case B:return Wt=at._init,at=Wt(at._payload),Xe($,X,at,yt)}if(bt(at))return Zt($,X,at,yt);if(H(at)){if(Wt=H(at),typeof Wt!="function")throw Error(r(150));return at=Wt.call(at),ce($,X,at,yt)}if(typeof at.then=="function")return Xe($,X,$o(at),yt);if(at.$$typeof===M)return Xe($,X,ml($,at),yt);tl($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,X!==null&&X.tag===6?(a($,X.sibling),yt=c(X,at),yt.return=$,$=yt):(a($,X),yt=qu(at,$.mode,yt),yt.return=$,$=yt),x($)):a($,X)}return function($,X,at,yt){try{Ys=0;var Wt=Xe($,X,at,yt);return Dr=null,Wt}catch($t){if($t===Xs)throw $t;var _e=ii(29,$t,null,$.mode);return _e.lanes=yt,_e.return=$,_e}finally{}}}var qa=wd(!0),Cd=wd(!1),Lr=Dt(null),el=Dt(0);function Dd(t,n){t=Vi,Yt(el,t),Yt(Lr,n),Vi=t|n.baseLanes}function $c(){Yt(el,Vi),Yt(Lr,Lr.current)}function tu(){Vi=el.current,Lt(Lr),Lt(el)}var ti=Dt(null),xi=null;function oa(t){var n=t.alternate;Yt(an,an.current&1),Yt(ti,t),xi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(xi=t)}function Ld(t){if(t.tag===22){if(Yt(an,an.current),Yt(ti,t),xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(xi=t)}}else la()}function la(){Yt(an,an.current),Yt(ti,ti.current)}function Ui(t){Lt(ti),xi===t&&(xi=null),Lt(an)}var an=Dt(0);function nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mv=o.unstable_scheduleCallback,gv=o.unstable_NormalPriority,rn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new pv,data:new Map,refCount:0}}function Zs(t){t.refCount--,t.refCount===0&&mv(gv,function(){t.controller.abort()})}var Ks=null,nu=0,Ur=0,Nr=null;function _v(t,n){if(Ks===null){var a=Ks=[];nu=0,Ur=cf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Ud,Ud),n}function Ud(){if(--nu===0&&Ks!==null){Nr!==null&&(Nr.status="fulfilled");var t=Ks;Ks=null,Ur=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Nd=K.S;K.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&_v(t,n),Nd!==null&&Nd(t,n)};var Ya=Dt(null);function iu(){var t=Ya.current;return t!==null?t:Pe.pooledCache}function il(t,n){n===null?Yt(Ya,Ya.current):Yt(Ya,n.pool)}function Od(){var t=iu();return t===null?null:{parent:rn._currentValue,pool:t}}var ca=0,me=null,Ce=null,Qe=null,al=!1,Or=!1,ja=!1,rl=0,Qs=0,Pr=null,Sv=0;function je(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return ca=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,K.H=t===null||t.memoizedState===null?Za:ua,ja=!1,f=a(s,c),ja=!1,Or&&(f=zd(n,a,s,c)),Pd(t),f}function Pd(t){K.H=Mi;var n=Ce!==null&&Ce.next!==null;if(ca=0,Qe=Ce=me=null,al=!1,Qs=0,Pr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&pl(t)&&(cn=!0))}function zd(t,n,a,s){me=t;var c=0;do{if(Or&&(Pr=null),Qs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,Qe=Ce=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}K.H=Ka,f=n(a,s)}while(Or);return f}function yv(){var t=K.H,n=t.useState()[0];return n=typeof n.then=="function"?Js(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(me.flags|=1024),n}function su(){var t=rl!==0;return rl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}ca=0,Qe=Ce=me=null,Or=!1,Qs=rl=0,Pr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?me.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Je(){if(Ce===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=Qe===null?me.memoizedState:Qe.next;if(n!==null)Qe=n,Ce=t;else{if(t===null)throw me.alternate===null?Error(r(467)):Error(r(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Qe===null?me.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}var sl;sl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Js(t){var n=Qs;return Qs+=1,Pr===null&&(Pr=[]),t=bd(Pr,t,n),n=me,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,K.H=n===null||n.memoizedState===null?Za:ua),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Js(t);if(t.$$typeof===M)return xn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=P;return n.index++,a}function Ni(t,n){return typeof n=="function"?n(t):n}function ll(t){var n=Je();return uu(n,Ce,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=x=null,z=null,q=n,_t=!1;do{var Tt=q.lane&-536870913;if(Tt!==q.lane?(Ee&Tt)===Tt:(ca&Tt)===Tt){var st=q.revertLane;if(st===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Tt===Ur&&(_t=!0);else if((ca&st)===st){q=q.next,st===Ur&&(_t=!0);continue}else Tt={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},z===null?(A=z=Tt,x=f):z=z.next=Tt,me.lanes|=st,Sa|=st;Tt=q.action,ja&&a(f,Tt),f=q.hasEagerState?q.eagerState:a(f,Tt)}else st={lane:Tt,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},z===null?(A=z=st,x=f):z=z.next=st,me.lanes|=Tt,Sa|=Tt;q=q.next}while(q!==null&&q!==n);if(z===null?x=f:z.next=A,!Hn(f,t.memoizedState)&&(cn=!0,_t&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=Je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Hn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Bd(t,n,a){var s=me,c=Je(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Hn((Ce||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,pu(Hd.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||Qe!==null&&Qe.memoizedState.tag&1){if(s.flags|=2048,zr(9,Id.bind(null,s,c,a,n),{destroy:void 0},null),Pe===null)throw Error(r(349));f||ca&60||Fd(s,n,a)}return a}function Fd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=sl(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Id(t,n,a,s){n.value=a,n.getSnapshot=s,Gd(n)&&Vd(t)}function Hd(t,n,a){return a(function(){Gd(n)&&Vd(t)})}function Gd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function Vd(t){var n=sa(t,2);n!==null&&wn(n,t,2)}function hu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),ja){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},n}function kd(t,n,a,s){return t.baseState=a,uu(t,Ce,typeof s=="function"?s:Ni)}function xv(t,n,a,s,c){if(fl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};K.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=K.T,x={};K.T=x;try{var A=a(c,s),z=K.S;z!==null&&z(x,A),Xd(t,n,A)}catch(q){du(t,n,q)}finally{K.T=f}}else try{f=a(c,s),Xd(t,n,f)}catch(q){du(t,n,q)}}function Xd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qd(t,n,s)},function(s){return du(t,n,s)}):qd(t,n,a)}function qd(t,n,a){n.status="fulfilled",n.value=a,Yd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wd(t,a)))}function du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yd(n),n=n.next;while(n!==s)}t.action=null}function Yd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jd(t,n){return n}function Zd(t,n){if(be){var a=Pe.formState;if(a!==null){t:{var s=me;if(be){if(mn){e:{for(var c=mn,f=yi;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){mn=hi(c.nextSibling),s=c.data==="F!";break t}}Xa(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jd,lastRenderedState:n},a.queue=s,a=dp.bind(null,me,s),s.dispatch=a,s=hu(!1),f=Su.bind(null,me,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=xv.bind(null,me,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Kd(t){var n=Je();return Qd(n,Ce,t)}function Qd(t,n,a){n=uu(t,n,jd)[0],t=ll(Ni)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Js(n):n;var s=Je(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(me.flags|=2048,zr(9,Mv.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Mv(t,n){t.action=n}function Jd(t){var n=Je(),a=Ce;if(a!==null)return Qd(n,a,t);Je(),n=n.memoizedState,a=Je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function zr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=me.updateQueue,n===null&&(n=sl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function $d(){return Je().memoizedState}function cl(t,n,a,s){var c=On();me.flags|=t,c.memoizedState=zr(1|n,a,{destroy:void 0},s===void 0?null:s)}function ul(t,n,a,s){var c=Je();s=s===void 0?null:s;var f=c.memoizedState.inst;Ce!==null&&s!==null&&au(s,Ce.memoizedState.deps)?c.memoizedState=zr(n,a,f,s):(me.flags|=t,c.memoizedState=zr(1|n,a,f,s))}function tp(t,n){cl(8390656,8,t,n)}function pu(t,n){ul(2048,8,t,n)}function ep(t,n){return ul(4,2,t,n)}function np(t,n){return ul(4,4,t,n)}function ip(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ap(t,n,a){a=a!=null?a.concat([t]):null,ul(4,4,ip.bind(null,n,t),a)}function mu(){}function rp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function sp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),ja){Ht(!0);try{t()}finally{Ht(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||ca&1073741824?t.memoizedState=n:(t.memoizedState=a,t=lm(),me.lanes|=t,Sa|=t,a)}function op(t,n,a,s){return Hn(a,n)?a:Lr.current!==null?(t=gu(t,a,s),Hn(t,n)||(cn=!0),t):ca&42?(t=lm(),me.lanes|=t,Sa|=t,n):(cn=!0,t.memoizedState=a)}function lp(t,n,a,s,c){var f=W.p;W.p=f!==0&&8>f?f:8;var x=K.T,A={};K.T=A,Su(t,!1,n,a);try{var z=c(),q=K.S;if(q!==null&&q(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var _t=vv(z,s);$s(t,n,_t,Wn(t))}else $s(t,n,s,Wn(t))}catch(Tt){$s(t,n,{then:function(){},status:"rejected",reason:Tt},Wn())}finally{W.p=f,K.T=x}}function Ev(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=cp(t).queue;lp(t,c,n,dt,a===null?Ev:function(){return up(t),a(s)})}function cp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function up(t){var n=cp(t).next.queue;$s(t,n,{},Wn())}function vu(){return xn(yo)}function fp(){return Je().memoizedState}function hp(){return Je().memoizedState}function Tv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=da(a);var s=pa(n,t,a);s!==null&&(wn(s,n,a),no(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function bv(t,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)?pp(n,a):(a=jc(t,n,a,s),a!==null&&(wn(a,t,s),mp(a,n,s)))}function dp(t,n,a){var s=Wn();$s(t,n,a,s)}function $s(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(t))pp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(c.hasEagerState=!0,c.eagerState=A,Hn(A,x))return jo(t,n,c,0),Pe===null&&Yo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return wn(a,t,s),mp(a,n,s),!0}return!1}function Su(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&wn(n,t,2)}function fl(t){var n=t.alternate;return t===me||n!==null&&n===me}function pp(t,n){Or=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}var Mi={readContext:xn,use:ol,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je};Mi.useCacheRefresh=je,Mi.useMemoCache=je,Mi.useHostTransitionStatus=je,Mi.useFormState=je,Mi.useActionState=je,Mi.useOptimistic=je;var Za={readContext:xn,use:ol,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:tp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,ip.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(ja){Ht(!0);try{t()}finally{Ht(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(ja){Ht(!0);try{a(n)}finally{Ht(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=bv.bind(null,me,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,a=dp.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=On();return gu(a,t,n)},useTransition:function(){var t=hu(!1);return t=lp.bind(null,me,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=me,c=On();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Pe===null)throw Error(r(349));Ee&60||Fd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tp(Hd.bind(null,s,f,t),[t]),s.flags|=2048,zr(9,Id.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=On(),n=Pe.identifierPrefix;if(be){var a=Li,s=Di;a=(s&~(1<<32-O(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Sv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return On().memoizedState=Tv.bind(null,me)}};Za.useMemoCache=cu,Za.useHostTransitionStatus=vu,Za.useFormState=Zd,Za.useActionState=Zd,Za.useOptimistic=function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Su.bind(null,me,!0,a),a.dispatch=n,[t,n]};var ua={readContext:xn,use:ol,useCallback:rp,useContext:xn,useEffect:pu,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:sp,useReducer:ll,useRef:$d,useState:function(){return ll(Ni)},useDebugValue:mu,useDeferredValue:function(t,n){var a=Je();return op(a,Ce.memoizedState,t,n)},useTransition:function(){var t=ll(Ni)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:Js(t),n]},useSyncExternalStore:Bd,useId:fp};ua.useCacheRefresh=hp,ua.useMemoCache=cu,ua.useHostTransitionStatus=vu,ua.useFormState=Kd,ua.useActionState=Kd,ua.useOptimistic=function(t,n){var a=Je();return kd(a,Ce,t,n)};var Ka={readContext:xn,use:ol,useCallback:rp,useContext:xn,useEffect:pu,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:sp,useReducer:fu,useRef:$d,useState:function(){return fu(Ni)},useDebugValue:mu,useDeferredValue:function(t,n){var a=Je();return Ce===null?gu(a,t,n):op(a,Ce.memoizedState,t,n)},useTransition:function(){var t=fu(Ni)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:Js(t),n]},useSyncExternalStore:Bd,useId:fp};Ka.useCacheRefresh=hp,Ka.useMemoCache=cu,Ka.useHostTransitionStatus=vu,Ka.useFormState=Jd,Ka.useActionState=Jd,Ka.useOptimistic=function(t,n){var a=Je();return Ce!==null?kd(a,Ce,t,n):(a.baseState=t,[t,a.queue.dispatch])};function yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:T({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xu={isMounted:function(t){return(t=t._reactInternals)?it(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(wn(n,t,s),no(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(wn(n,t,s),no(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(wn(n,t,a),no(n,t,a))}};function gp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,s)||!Hs(c,f):!0}function _p(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&xu.enqueueReplaceState(n,n.state,null)}function Qa(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=T({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function vp(t){hl(t)}function Sp(t){console.error(t)}function yp(t){hl(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function Mp(t){return t=da(t),t.tag=3,t}function Ep(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){xp(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){xp(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Av(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return xi===null?af():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(be)return n=ti.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Ws(Qn(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Ws(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),uo===null?uo=[f]:uo.push(f),We!==4&&(We=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Mp(c),Ep(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Tp=Error(r(461)),cn=!1;function gn(t,n,a,s){n.child=t===null?Cd(n,null,a,s):qa(n,t.child,a,s)}function bp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var A in s)A!=="ref"&&(x[A]=s[A])}else x=s;return $a(n),s=ru(t,n,a,x,f,c),A=su(),t!==null&&!cn?(ou(t,n,c),Oi(t,n,c)):(be&&A&&Zc(n),n.flags|=1,gn(t,n,s,c),n.child)}function Ap(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rp(t,n,f,s,c)):(t=vl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(x,s)&&t.ref===n.ref)return Oi(t,n,c)}return n.flags|=1,t=va(f,s),t.ref=n.ref,t.return=n,n.child=t}function Rp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Hs(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(cn=!0);else return n.lanes=t.lanes,Oi(t,n,c)}return Eu(t,n,a,s,c)}function wp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,x=t!==null?t.memoizedState:null;if(to(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=x!==null?x.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Cp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,x!==null?x.cachePool:null),x!==null?Dd(n,x):$c(),Ld(n);else return n.lanes=n.childLanes=536870912,Cp(t,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(il(n,x.cachePool),Dd(n,x),la(),n.memoizedState=null):(t!==null&&il(n,null),$c(),la());return gn(t,n,c,a),n.child}function Cp(t,n,a,s){var c=iu();return c=c===null?null:{parent:rn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&il(n,null),$c(),Ld(n),t!==null&&eo(t,n,s,!0),null}function to(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return $a(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!cn?(ou(t,n,c),Oi(t,n,c)):(be&&s&&Zc(n),n.flags|=1,gn(t,n,a,c),n.child)}function Dp(t,n,a,s,c,f){return $a(n),n.updateQueue=null,a=zd(n,s,a,c),Pd(t),s=su(),t!==null&&!cn?(ou(t,n,f),Oi(t,n,f)):(be&&s&&Zc(n),n.flags|=1,gn(t,n,a,f),n.child)}function Lp(t,n,a,s,c){if($a(n),n.stateNode===null){var f=Rr,x=a.contextType;typeof x=="object"&&x!==null&&(f=xn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?xn(x):Rr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(yu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&xu.enqueueReplaceState(f,f.state,null),ao(n,s,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=Qa(a,A);f.props=z;var q=f.context,_t=a.contextType;x=Rr,typeof _t=="object"&&_t!==null&&(x=xn(_t));var Tt=a.getDerivedStateFromProps;_t=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||q!==x)&&_p(n,f,s,x),ha=!1;var st=n.memoizedState;f.state=st,ao(n,s,f,c),io(),q=n.memoizedState,A||st!==q||ha?(typeof Tt=="function"&&(yu(n,a,Tt,s),q=n.memoizedState),(z=ha||gp(n,a,z,s,st,q,x))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=q),f.props=s,f.state=q,f.context=x,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),x=n.memoizedProps,_t=Qa(a,x),f.props=_t,Tt=n.pendingProps,st=f.context,q=a.contextType,z=Rr,typeof q=="object"&&q!==null&&(z=xn(q)),A=a.getDerivedStateFromProps,(q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Tt||st!==z)&&_p(n,f,s,z),ha=!1,st=n.memoizedState,f.state=st,ao(n,s,f,c),io();var mt=n.memoizedState;x!==Tt||st!==mt||ha||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof A=="function"&&(yu(n,a,A,s),mt=n.memoizedState),(_t=ha||gp(n,a,_t,s,st,mt,z)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,mt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,mt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=mt),f.props=s,f.state=mt,f.context=z,s=_t):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,to(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=qa(n,t.child,null,c),n.child=qa(n,null,a,c)):gn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Oi(t,n,c),t}function Up(t,n,a,s){return ks(),n.flags|=256,gn(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:Od()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Np(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?oa(n):la(),be){var A=mn,z;if(z=A){t:{for(z=A,A=yi;z.nodeType!==8;){if(!A){A=null;break t}if(z=hi(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(n.memoizedState={dehydrated:A,treeContext:ka!==null?{id:Di,overflow:Li}:null,retryLane:536870912},z=ii(18,null,null,0),z.stateNode=A,z.return=n,n.child=z,Rn=n,mn=null,z=!0):z=!1}z||Xa(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ui(n)}return A=s.children,s=s.fallback,c?(la(),c=n.mode,A=wu({mode:"hidden",children:A},c),s=er(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,x,a),n.memoizedState=Tu,s):(oa(n),Ru(n,A))}if(z=t.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(oa(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(la(),n.child=t.child,n.flags|=128,n=null):(la(),c=s.fallback,A=n.mode,s=wu({mode:"visible",children:s.children},A),c=er(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,qa(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,x,a),n.memoizedState=Tu,n=c);else if(oa(n),A.data==="$!"){if(x=A.nextSibling&&A.nextSibling.dataset,x)var q=x.dgst;x=q,s=Error(r(419)),s.stack="",s.digest=x,Ws({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(cn||eo(t,n,a,!1),x=(a&t.childLanes)!==0,cn||x){if(x=Pe,x!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(x.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,sa(t,s),wn(x,t,s),Tp}A.data==="$?"||af(),n=Cu(t,n,a)}else A.data==="$?"?(n.flags|=128,n.child=t.child,n=Gv.bind(null,t),A._reactRetry=n,n=null):(t=z.treeContext,mn=hi(A.nextSibling),Rn=n,be=!0,ui=null,yi=!1,t!==null&&(Jn[$n++]=Di,Jn[$n++]=Li,Jn[$n++]=ka,Di=t.id,Li=t.overflow,ka=n),n=Ru(n,s.children),n.flags|=4096);return n}return c?(la(),c=s.fallback,A=n.mode,z=t.child,q=z.sibling,s=va(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,q!==null?c=va(q,c):(c=er(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=t.child.memoizedState,A===null?A=bu(a):(z=A.cachePool,z!==null?(q=rn._currentValue,z=z.parent!==q?{parent:q,pool:q}:z):z=Od(),A={baseLanes:A.baseLanes|a,cachePool:z}),c.memoizedState=A,c.childLanes=Au(t,x,a),n.memoizedState=Tu,s):(oa(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Ru(t,n){return n=wu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wu(t,n){return rm(t,n,0,null)}function Cu(t,n,a){return qa(n,t.child,null,a),t=Ru(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Op(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Pp(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(gn(t,n,s.children,a),s=an.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,a,n);else if(t.tag===19)Op(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Yt(an,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,!(a&n.childLanes))if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Rv(t,n,a){switch(n.tag){case 3:te(n,n.stateNode.containerInfo),fa(n,rn,t.memoizedState.cache),ks();break;case 27:case 5:Te(n);break;case 4:te(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(oa(n),n.flags|=128,null):a&n.child.childLanes?Np(t,n,a):(oa(n),t=Oi(t,n,a),t!==null?t.sibling:null);oa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(eo(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Pp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Yt(an,an.current),s)break;return null;case 22:case 23:return n.lanes=0,wp(t,n,a);case 24:fa(n,rn,t.memoizedState.cache)}return Oi(t,n,a)}function zp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return cn=!1,Rv(t,n,a);cn=!!(t.flags&131072)}else cn=!1,be&&n.flags&1048576&&yd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=Qa(s,t),n.tag=1,n=Lp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===b){n.tag=11,n=bp(null,n,s,t,a);break t}else if(c===v){n.tag=14,n=Ap(null,n,s,t,a);break t}}throw n=ut(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Qa(s,n.pendingProps),Lp(t,n,s,c,a);case 3:t:{if(te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),ao(n,f,null,a);var x=n.memoizedState;if(f=x.cache,fa(n,rn,f),f!==c.cache&&Ou(n,[rn],a,!0),io(),f=x.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Up(t,n,f,a);break t}else if(f!==s){s=Qn(Error(r(424)),n),Ws(s),n=Up(t,n,f,a);break t}else for(mn=hi(n.stateNode.containerInfo.firstChild),Rn=n,be=!0,ui=null,yi=!0,a=Cd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ks(),f===s){n=Oi(t,n,a);break t}gn(t,n,f,a)}n=n.child}return n;case 26:return to(t,n),t===null?(a=Im(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Dl(ie.current).createElement(a),s[nn]=n,s[dn]=t,_n(s,a,t),kt(s),n.stateNode=s):n.memoizedState=Im(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Te(n),t===null&&be&&(s=n.stateNode=zm(n.type,n.pendingProps,ie.current),Rn=n,yi=!0,mn=hi(s.firstChild)),s=n.pendingProps.children,t!==null||be?gn(t,n,s,a):n.child=qa(n,null,s,a),to(t,n),n.child;case 5:return t===null&&be&&((c=s=mn)&&(s=iS(s,n.type,n.pendingProps,yi),s!==null?(n.stateNode=s,Rn=n,mn=hi(s.firstChild),yi=!1,c=!0):c=!1),c||Xa(n)),Te(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:x!==null&&vf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,yv,null,null,a),yo._currentValue=c),to(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=mn)&&(a=aS(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Rn=n,mn=null,t=!0):t=!1),t||Xa(n)),null;case 13:return Np(t,n,a);case 4:return te(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=qa(n,null,s,a):gn(t,n,s,a),n.child;case 11:return bp(t,n,n.type,n.pendingProps,a);case 7:return gn(t,n,n.pendingProps,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),gn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=xn(c),s=s(c),n.flags|=1,gn(t,n,s,a),n.child;case 14:return Ap(t,n,n.type,n.pendingProps,a);case 15:return Rp(t,n,n.type,n.pendingProps,a);case 19:return Pp(t,n,a);case 22:return wp(t,n,a);case 24:return $a(n),s=xn(rn),t===null?(c=iu(),c===null&&(c=Pe,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),fa(n,rn,c)):(t.lanes&a&&(zu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,rn,s)):(s=f.cache,fa(n,rn,s),s!==c.cache&&Ou(n,[rn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Dt(null),Ja=null,Pi=null;function fa(t,n,a){Yt(Uu,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=Uu.current,Lt(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Nu(f.return,a,t),s||(x=null);break t}f=A.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Nu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function eo(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=c.type;Hn(c.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(c===Xt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xn(t){return Bp(Ja,t)}function ml(t,n){return Ja===null&&$a(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var ha=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,Ve&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Zo(t),vd(t,null,a),n}return jo(t,s,n,a),Zo(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function io(){if(Fu){var t=Nr;if(t!==null)throw t}}function ao(t,n,a,s){Fu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,q=z.next;z.next=null,x===null?f=q:x.next=q,x=z;var _t=t.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==x&&(A===null?_t.firstBaseUpdate=q:A.next=q,_t.lastBaseUpdate=z))}if(f!==null){var Tt=c.baseState;x=0,_t=q=z=null,A=f;do{var st=A.lane&-536870913,mt=st!==A.lane;if(mt?(Ee&st)===st:(s&st)===st){st!==0&&st===Ur&&(Fu=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Zt=t,ce=A;st=n;var Xe=a;switch(ce.tag){case 1:if(Zt=ce.payload,typeof Zt=="function"){Tt=Zt.call(Xe,Tt,st);break t}Tt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=ce.payload,st=typeof Zt=="function"?Zt.call(Xe,Tt,st):Zt,st==null)break t;Tt=T({},Tt,st);break t;case 2:ha=!0}}st=A.callback,st!==null&&(t.flags|=64,mt&&(t.flags|=8192),mt=c.callbacks,mt===null?c.callbacks=[st]:mt.push(st))}else mt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(q=_t=mt,z=Tt):_t=_t.next=mt,x|=st;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;mt=A,A=mt.next,mt.next=null,c.lastBaseUpdate=mt,c.shared.pending=null}}while(!0);_t===null&&(z=Tt),c.baseState=z,c.firstBaseUpdate=q,c.lastBaseUpdate=_t,f===null&&(c.shared.lanes=0),Sa|=x,t.lanes=x,t.memoizedState=Tt}}function Fp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Ip(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fp(a[t],n)}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(A){Ne(n,n.return,A)}}function ma(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,c=n;var z=a;try{A()}catch(q){Ne(c,z,q)}}}s=s.next}while(s!==f)}}catch(q){Ne(n,n.return,q)}}function Hp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ip(n,a)}catch(s){Ne(t,t.return,s)}}}function Gp(t,n,a){a.props=Qa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ne(t,n,s)}}function tr(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Ne(t,n,f)}}function Gn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(t,n,c)}else a.current=null}function Vp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ne(t,t.return,c)}}function kp(t,n,a){try{var s=t.stateNode;Jv(s,t.type,a,n),s[dn]=n}catch(c){Ne(t,t.return,c)}}function Wp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Cl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}var Bi=!1,ke=!1,Gu=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,un=null,qp=!1;function wv(t,n){if(t=t.containerInfo,gf=zl,t=cd(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,z=-1,q=0,_t=0,Tt=t,st=null;e:for(;;){for(var mt;Tt!==a||c!==0&&Tt.nodeType!==3||(A=x+c),Tt!==f||s!==0&&Tt.nodeType!==3||(z=x+s),Tt.nodeType===3&&(x+=Tt.nodeValue.length),(mt=Tt.firstChild)!==null;)st=Tt,Tt=mt;for(;;){if(Tt===t)break e;if(st===a&&++q===c&&(A=x),st===f&&++_t===s&&(z=x),(mt=Tt.nextSibling)!==null)break;Tt=st,st=Tt.parentNode}Tt=mt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},zl=!1,un=n;un!==null;)if(n=un,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,un=t;else for(;un!==null;){switch(n=un,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Zt=Qa(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Zt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ce){Ne(a,a.return,ce)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,un=t;break}un=n.return}return Zt=qp,qp=!1,Zt}function Yp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ii(t,a),s&4&&ro(5,a);break;case 1:if(Ii(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(A){Ne(a,a.return,A)}else{var c=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(A){Ne(a,a.return,A)}}s&64&&Hp(a),s&512&&tr(a,a.return);break;case 3:if(Ii(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ip(s,t)}catch(A){Ne(a,a.return,A)}}break;case 26:Ii(t,a),s&512&&tr(a,a.return);break;case 27:case 5:Ii(t,a),n===null&&s&4&&Vp(a),s&512&&tr(a,a.return);break;case 12:Ii(t,a);break;case 13:Ii(t,a),s&4&&Kp(t,a);break;case 22:if(c=a.memoizedState!==null||Bi,!c){n=n!==null&&n.memoizedState!==null||ke;var f=Bi,x=ke;Bi=c,(ke=n)&&!x?ga(t,a,(a.subtreeFlags&8772)!==0):Ii(t,a),Bi=f,ke=x}s&512&&(a.memoizedProps.mode==="manual"?tr(a,a.return):Gn(a,a.return));break;default:Ii(t,a)}}function jp(t){var n=t.alternate;n!==null&&(t.alternate=null,jp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ft(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Vn=!1;function Fi(t,n,a){for(a=a.child;a!==null;)Zp(t,n,a),a=a.sibling}function Zp(t,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:ke||Gn(a,n),Fi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Gn(a,n);var s=$e,c=Vn;for($e=a.stateNode,Fi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ft(a),$e=s,Vn=c;break;case 5:ke||Gn(a,n);case 6:c=$e;var f=Vn;if($e=null,Fi(t,n,a),$e=c,Vn=f,$e!==null)if(Vn)try{t=$e,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(x){Ne(a,n,x)}else try{$e.removeChild(a.stateNode)}catch(x){Ne(a,n,x)}break;case 18:$e!==null&&(Vn?(n=$e,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),To(n)):yf($e,a.stateNode));break;case 4:s=$e,c=Vn,$e=a.stateNode.containerInfo,Vn=!0,Fi(t,n,a),$e=s,Vn=c;break;case 0:case 11:case 14:case 15:ke||ma(2,a,n),ke||ma(4,a,n),Fi(t,n,a);break;case 1:ke||(Gn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Gp(a,n,s)),Fi(t,n,a);break;case 21:Fi(t,n,a);break;case 22:ke||Gn(a,n),ke=(s=ke)||a.memoizedState!==null,Fi(t,n,a),ke=s;break;default:Fi(t,n,a)}}function Kp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(a){Ne(n,n.return,a)}}function Cv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Cv(t);n.forEach(function(s){var c=Vv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function ei(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:case 5:$e=A.stateNode,Vn=!1;break t;case 3:$e=A.stateNode.containerInfo,Vn=!0;break t;case 4:$e=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if($e===null)throw Error(r(160));Zp(f,x,c),$e=null,Vn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Qp(n,t),n=n.sibling}var fi=null;function Qp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(n,t),ni(t),s&4&&(ma(3,t,t.return),ro(3,t),ma(5,t,t.return));break;case 1:ei(n,t),ni(t),s&512&&(ke||a===null||Gn(a,a.return)),s&64&&Bi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(ei(n,t),ni(t),s&512&&(ke||a===null||Gn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[lt]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),_n(f,s,a),f[nn]=t,kt(f),s=f;break t;case"link":var x=Vm("link","href",c).get(s+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Vm("meta","content",c).get(s+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[nn]=t,kt(f),s=f}t.stateNode=s}else km(c,t.type,t.stateNode);else t.stateNode=Gm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?km(c,t.type,t.stateNode):Gm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&kp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var q=z.nextSibling,_t=z.nodeName;z[lt]||_t==="HEAD"||_t==="BODY"||_t==="SCRIPT"||_t==="STYLE"||_t==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=q}for(var Tt=t.type,st=c.attributes;st.length;)c.removeAttributeNode(st[0]);_n(c,Tt,f),c[nn]=t,c[dn]=f}catch(Zt){Ne(t,t.return,Zt)}}case 5:if(ei(n,t),ni(t),s&512&&(ke||a===null||Gn(a,a.return)),t.flags&32){c=t.stateNode;try{yr(c,"")}catch(Zt){Ne(t,t.return,Zt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,kp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(ei(n,t),ni(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Zt){Ne(t,t.return,Zt)}}break;case 3:if(Nl=null,c=fi,fi=Ll(n.containerInfo),ei(n,t),fi=c,ni(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(Zt){Ne(t,t.return,Zt)}Gu&&(Gu=!1,Jp(t));break;case 4:s=fi,fi=Ll(t.stateNode.containerInfo),ei(n,t),ni(t),fi=s;break;case 12:ei(n,t),ni(t);break;case 13:ei(n,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ct()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(ke||a===null||Gn(a,a.return)),z=t.memoizedState!==null,q=a!==null&&a.memoizedState!==null,_t=Bi,Tt=ke,Bi=_t||z,ke=Tt||q,ei(n,t),ke=Tt,Bi=_t,ni(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=Bi||ke,a===null||q||n||Br(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){q=a=n;try{if(c=q.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=q.stateNode,A=q.memoizedProps.style;var mt=A!=null&&A.hasOwnProperty("display")?A.display:null;x.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(Zt){Ne(q,q.return,Zt)}}}else if(n.tag===6){if(a===null){q=n;try{q.stateNode.nodeValue=z?"":q.memoizedProps}catch(Zt){Ne(q,q.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:ei(n,t),ni(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:ei(n,t),ni(t)}}function ni(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(Wp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);gl(t,f,c);break;case 5:var x=s.stateNode;s.flags&32&&(yr(x,""),s.flags&=-33);var A=Iu(t);gl(t,A,x);break;case 3:case 4:var z=s.stateNode.containerInfo,q=Iu(t);Hu(t,q,z);break;default:throw Error(r(161))}}}catch(_t){Ne(t,t.return,_t)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Jp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ii(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yp(t,n.alternate,n),n=n.sibling}function Br(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),Br(n);break;case 1:Gn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gp(n,n.return,a),Br(n);break;case 26:case 27:case 5:Gn(n,n.return),Br(n);break;case 22:Gn(n,n.return),n.memoizedState===null&&Br(n);break;default:Br(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),ro(4,f);break;case 1:if(ga(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(q){Ne(s,s.return,q)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Fp(z[c],A)}catch(q){Ne(s,s.return,q)}}a&&x&64&&Hp(f),tr(f,f.return);break;case 26:case 27:case 5:ga(c,f,a),a&&s===null&&x&4&&Vp(f),tr(f,f.return);break;case 12:ga(c,f,a);break;case 13:ga(c,f,a),a&&x&4&&Kp(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),tr(f,f.return);break;default:ga(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zs(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t))}function _a(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$p(t,n,a,s),n=n.sibling}function $p(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_a(t,n,a,s),c&2048&&ro(9,n);break;case 3:_a(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t)));break;case 12:if(c&2048){_a(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ne(n,n.return,z)}}else _a(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?_a(t,n,a,s):so(t,n):f._visibility&4?_a(t,n,a,s):(f._visibility|=4,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:_a(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:_a(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,A=a,z=s,q=x.flags;switch(x.tag){case 0:case 11:case 15:Fr(f,x,A,z,c),ro(8,x);break;case 23:break;case 22:var _t=x.stateNode;x.memoizedState!==null?_t._visibility&4?Fr(f,x,A,z,c):so(f,x):(_t._visibility|=4,Fr(f,x,A,z,c)),c&&q&2048&&ku(x.alternate,x);break;case 24:Fr(f,x,A,z,c),c&&q&2048&&Wu(x.alternate,x);break;default:Fr(f,x,A,z,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:so(a,s),c&2048&&ku(s.alternate,s);break;case 24:so(a,s),c&2048&&Wu(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function Ir(t){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)tm(t),t=t.sibling}function tm(t){switch(t.tag){case 26:Ir(t),t.flags&oo&&t.memoizedState!==null&&_S(fi,t.memoizedState,t.memoizedProps);break;case 5:Ir(t);break;case 3:case 4:var n=fi;fi=Ll(t.stateNode.containerInfo),Ir(t),fi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,Ir(t),oo=n):Ir(t));break;default:Ir(t)}}function em(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function lo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,im(s,t)}em(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nm(t),t=t.sibling}function nm(t){switch(t.tag){case 0:case 11:case 15:lo(t),t.flags&2048&&ma(9,t,t.return);break;case 3:lo(t);break;case 12:lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,_l(t)):lo(t);break;default:lo(t)}}function _l(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,im(s,t)}em(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ma(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,_l(n));break;default:_l(n)}t=t.sibling}}function im(t,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,un=s;else t:for(a=t;un!==null;){s=un;var c=s.sibling,f=s.return;if(jp(s),s===a){un=null;break t}if(c!==null){c.return=f,un=c;break t}un=f}}}function Dv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,s){return new Dv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function am(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Xu(t)&&(x=1);else if(typeof t=="string")x=mS(t,a,Kt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return er(a.children,c,f,n);case m:x=8,c|=24;break;case _:return t=ii(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case w:return t=ii(13,a,n,c),t.elementType=w,t.lanes=f,t;case S:return t=ii(19,a,n,c),t.elementType=S,t.lanes=f,t;case L:return rm(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case M:x=10;break t;case g:x=9;break t;case b:x=11;break t;case v:x=14;break t;case B:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ii(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function er(t,n,a,s){return t=ii(7,t,s,n),t.lanes=a,t}function rm(t,n,a,s){t=ii(22,t,s,n),t.elementType=L,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var x=sa(f,2);x!==null&&(c._pendingVisibility|=2,wn(x,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var x=sa(f,2);x!==null&&(c._pendingVisibility&=-3,wn(x,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Hi(t){t.flags|=4}function sm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Wm(n)){if(n=ti.current,n!==null&&((Ee&4194176)===Ee?xi!==null:(Ee&62914560)!==Ee&&!(Ee&536870912)||n!==xi))throw qs=Jc,Ed;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,Gr|=n)}function co(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Lv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(rn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vs(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ui!==null&&(ef(ui),ui=null))),Ge(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(Ge(n),sm(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),Ge(n),sm(n,a)):(Ge(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),Ge(n),n.flags&=-16777217),null;case 27:gt(n),a=ie.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=Kt.current,Vs(n)?xd(n):(t=zm(c,s,a),n.stateNode=t,Hi(n))}return Ge(n),null;case 5:if(gt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(t=Kt.current,Vs(n))xd(n);else{switch(c=Dl(ie.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[nn]=n,t[dn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(_n(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Vs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Dm(t.nodeValue,a)),t||Xa(n)}else t=Dl(t).createTextNode(s),t[nn]=n,n.stateNode=t}return Ge(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Vs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nn]=n}else ks(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else ui!==null&&(ef(ui),ui=null),c=!0;if(!c)return n.flags&256?(Ui(n),n):(Ui(n),null)}if(Ui(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Ge(n),null;case 4:return Gt(),t===null&&df(n.stateNode.containerInfo),Ge(n),null;case 10:return zi(n.type),Ge(n),null;case 19:if(Lt(an),c=n.memoizedState,c===null)return Ge(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)co(c,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=nl(t),f!==null){for(n.flags|=128,co(c,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)am(a,t),a=a.sibling;return Yt(an,an.current&1|2),n.child}t=t.sibling}c.tail!==null&&ct()>yl&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304)}else{if(!s)if(t=nl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Ge(n),null}else 2*ct()-c.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,s=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ct(),n.sibling=null,t=an.current,Yt(an,s?t&1|2:t&1),n):(Ge(n),null);case 22:case 23:return Ui(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Lt(Ya),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(rn),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function Uv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(rn),Gt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 13:if(Ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Lt(an),null;case 4:return Gt(),null;case 10:return zi(n.type),null;case 22:case 23:return Ui(n),tu(),t!==null&&Lt(Ya),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(rn),null;case 25:return null;default:return null}}function om(t,n){switch(Kc(n),n.tag){case 3:zi(rn),Gt();break;case 26:case 27:case 5:gt(n);break;case 4:Gt();break;case 13:Ui(n);break;case 19:Lt(an);break;case 10:zi(n.type);break;case 22:case 23:Ui(n),tu(),t!==null&&Lt(Ya);break;case 24:zi(rn)}}var Nv={getCacheForType:function(t){var n=xn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Ov=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Pe=null,Se=null,Ee=0,ze=0,kn=null,Gi=!1,Hr=!1,ju=!1,Vi=0,We=0,Sa=0,nr=0,Zu=0,ai=0,Gr=0,uo=null,Ei=null,Ku=!1,Qu=0,yl=1/0,xl=null,ya=null,Ml=!1,ir=null,fo=0,Ju=0,$u=null,ho=0,tf=null;function Wn(){if(Ve&2&&Ee!==0)return Ee&-Ee;if(K.T!==null){var t=Ur;return t!==0?t:cf()}return Ia()}function lm(){ai===0&&(ai=!(Ee&536870912)||be?pe():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ai}function wn(t,n,a){(t===Pe&&ze===2||t.cancelPendingCommit!==null)&&(Vr(t,0),ki(t,Ee,ai,!1)),ge(t,a),(!(Ve&2)||t!==Pe)&&(t===Pe&&(!(Ve&2)&&(nr|=a),We===4&&ki(t,Ee,ai,!1)),Ti(t))}function cm(t,n,a){if(Ve&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||Vt(t,n),c=s?Bv(t,n):rf(t,n,!0),f=s;do{if(c===0){Hr&&!s&&ki(t,n,0,!1);break}else if(c===6)ki(t,n,0,!Gi);else{if(a=t.current.alternate,f&&!Pv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=t;c=uo;var z=A.current.memoizedState.isDehydrated;if(z&&(Vr(A,x).flags|=256),x=rf(A,x,!1),x!==2){if(ju&&!z){A.errorRecoveryDisabledLanes|=f,nr|=f,c=4;break t}f=Ei,Ei=c,f!==null&&ef(f)}c=x}if(f=!1,c!==2)continue}}if(c===1){Vr(t,0),ki(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){ki(s,n,ai,!Gi);break t}break;case 2:Ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-ct(),10<f)){if(ki(s,n,ai,!Gi),zt(s,0)!==0)break t;s.timeoutHandle=Nm(um.bind(null,s,a,Ei,xl,Ku,n,ai,nr,Gr,Gi,2,-0,0),f);break t}um(s,a,Ei,xl,Ku,n,ai,nr,Gr,Gi,0,-0,0)}}break}while(!0);Ti(t)}function ef(t){Ei===null?Ei=t:Ei.push.apply(Ei,t)}function um(t,n,a,s,c,f,x,A,z,q,_t,Tt,st){var mt=n.subtreeFlags;if((mt&8192||(mt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:gS},tm(n),n=vS(),n!==null)){t.cancelPendingCommit=n(_m.bind(null,t,a,s,c,x,A,z,1,Tt,st)),ki(t,f,x,!q);return}_m(t,a,s,c,x,A,z,_t,Tt,st)}function Pv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ki(t,n,a,s){n&=~Zu,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-O(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&ln(t,a,n)}function El(){return Ve&6?!0:(po(0),!1)}function nf(){if(Se!==null){if(ze===0)var t=Se.return;else t=Se,Pi=Ja=null,lu(t),Dr=null,Ys=0,t=Se;for(;t!==null;)om(t.alternate,t),t=t.return;Se=null}}function Vr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Pe=t,Se=a=va(t.current,null),Ee=n,ze=0,kn=null,Gi=!1,Hr=Vt(t,n),ju=!1,Gr=ai=Zu=nr=Sa=We=0,Ei=uo=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-O(s),f=1<<c;n|=t[c],s&=~f}return Vi=n,Yo(),a}function fm(t,n){me=null,K.H=Mi,n===Xs?(n=Ad(),ze=3):n===Ed?(n=Ad(),ze=4):ze=n===Tp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,Se===null&&(We=1,dl(t,Qn(n,t.current)))}function hm(){var t=K.H;return K.H=Mi,t===null?Mi:t}function dm(){var t=K.A;return K.A=Nv,t}function af(){We=4,Gi||(Ee&4194176)!==Ee&&ti.current!==null||(Hr=!0),!(Sa&134217727)&&!(nr&134217727)||Pe===null||ki(Pe,Ee,ai,!1)}function rf(t,n,a){var s=Ve;Ve|=2;var c=hm(),f=dm();(Pe!==t||Ee!==n)&&(xl=null,Vr(t,n)),n=!1;var x=We;t:do try{if(ze!==0&&Se!==null){var A=Se,z=kn;switch(ze){case 8:nf(),x=6;break t;case 3:case 2:case 6:ti.current===null&&(n=!0);var q=ze;if(ze=0,kn=null,kr(t,A,z,q),a&&Hr){x=0;break t}break;default:q=ze,ze=0,kn=null,kr(t,A,z,q)}}zv(),x=We;break}catch(_t){fm(t,_t)}while(!0);return n&&t.shellSuspendCounter++,Pi=Ja=null,Ve=s,K.H=c,K.A=f,Se===null&&(Pe=null,Ee=0,Yo()),x}function zv(){for(;Se!==null;)pm(Se)}function Bv(t,n){var a=Ve;Ve|=2;var s=hm(),c=dm();Pe!==t||Ee!==n?(xl=null,yl=ct()+500,Vr(t,n)):Hr=Vt(t,n);t:do try{if(ze!==0&&Se!==null){n=Se;var f=kn;e:switch(ze){case 1:ze=0,kn=null,kr(t,n,f,1);break;case 2:if(Td(f)){ze=0,kn=null,mm(n);break}n=function(){ze===2&&Pe===t&&(ze=7),Ti(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Td(f)?(ze=0,kn=null,mm(n)):(ze=0,kn=null,kr(t,n,f,7));break;case 5:var x=null;switch(Se.tag){case 26:x=Se.memoizedState;case 5:case 27:var A=Se;if(!x||Wm(x)){ze=0,kn=null;var z=A.sibling;if(z!==null)Se=z;else{var q=A.return;q!==null?(Se=q,Tl(q)):Se=null}break e}}ze=0,kn=null,kr(t,n,f,5);break;case 6:ze=0,kn=null,kr(t,n,f,6);break;case 8:nf(),We=6;break t;default:throw Error(r(462))}}Fv();break}catch(_t){fm(t,_t)}while(!0);return Pi=Ja=null,K.H=s,K.A=c,Ve=a,Se!==null?0:(Pe=null,Ee=0,Yo(),We)}function Fv(){for(;Se!==null&&!ot();)pm(Se)}function pm(t){var n=zp(t.alternate,t,Vi);t.memoizedProps=t.pendingProps,n===null?Tl(t):Se=n}function mm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dp(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Dp(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:lu(n);default:om(a,n),n=Se=am(n,Vi),n=zp(a,n,Vi)}t.memoizedProps=t.pendingProps,n===null?Tl(t):Se=n}function kr(t,n,a,s){Pi=Ja=null,lu(n),Dr=null,Ys=0;var c=n.return;try{if(Av(t,c,n,a,Ee)){We=1,dl(t,Qn(a,t.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;We=1,dl(t,Qn(a,t.current)),Se=null;return}n.flags&32768?(be||s===1?t=!0:Hr||Ee&536870912?t=!1:(Gi=t=!0,(s===2||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),gm(n,t)):Tl(n)}function Tl(t){var n=t;do{if(n.flags&32768){gm(n,Gi);return}t=n.return;var a=Lv(n.alternate,n,Vi);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);We===0&&(We=5)}function gm(t,n){do{var a=Uv(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);We=6,Se=null}function _m(t,n,a,s,c,f,x,A,z,q){var _t=K.T,Tt=W.p;try{W.p=2,K.T=null,Iv(t,n,a,s,Tt,c,f,x,A,z,q)}finally{K.T=_t,W.p=Tt}}function Iv(t,n,a,s,c,f,x,A){do Wr();while(ir!==null);if(Ve&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var q=z.lanes|z.childLanes;if(q|=Yc,Ie(t,s,q,f,x,A),t===Pe&&(Se=Pe=null,Ee=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||Ml||(Ml=!0,Ju=q,$u=a,kv(Pt,function(){return Wr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=K.T,K.T=null,f=W.p,W.p=2,x=Ve,Ve|=4,wv(t,z),Qp(z,t),cv(_f,t.containerInfo),zl=!!gf,_f=gf=null,t.current=z,Yp(t,z.alternate,z),et(),Ve=x,W.p=f,K.T=a):t.current=z,Ml?(Ml=!1,ir=t,fo=s):vm(t,q),q=t.pendingLanes,q===0&&(ya=null),Ft(z.stateNode),Ti(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)q=n[z],c(q.value,{componentStack:q.stack});return fo&3&&Wr(),q=t.pendingLanes,s&4194218&&q&42?t===tf?ho++:(ho=0,tf=t):ho=0,po(0),null}function vm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zs(n)))}function Wr(){if(ir!==null){var t=ir,n=Ju;Ju=0;var a=Fo(fo),s=K.T,c=W.p;try{if(W.p=32>a?32:a,K.T=null,ir===null)var f=!1;else{a=$u,$u=null;var x=ir,A=fo;if(ir=null,fo=0,Ve&6)throw Error(r(331));var z=Ve;if(Ve|=4,nm(x.current),$p(x,x.current,A,a),Ve=z,po(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Jt,x)}catch{}f=!0}return f}finally{W.p=c,K.T=s,vm(t,n)}}return!1}function Sm(t,n,a){n=Qn(a,n),n=Mu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(ge(t,2),Ti(t))}function Ne(t,n,a){if(t.tag===3)Sm(t,t,a);else for(;n!==null;){if(n.tag===3){Sm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=Qn(a,t),a=Mp(2),s=pa(n,a,2),s!==null&&(Ep(a,s,n,t),ge(s,2),Ti(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ov;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Hv.bind(null,t,n,a),n.then(t,t))}function Hv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Pe===t&&(Ee&a)===a&&(We===4||We===3&&(Ee&62914560)===Ee&&300>ct()-Qu?!(Ve&2)&&Vr(t,0):Zu|=a,Gr===Ee&&(Gr=0)),Ti(t)}function ym(t,n){n===0&&(n=Re()),t=sa(t,n),t!==null&&(ge(t,n),Ti(t))}function Gv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ym(t,a)}function Vv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ym(t,a)}function kv(t,n){return E(t,n)}var bl=null,Xr=null,of=!1,Al=!1,lf=!1,ar=0;function Ti(t){t!==Xr&&t.next===null&&(Xr===null?bl=Xr=t:Xr=Xr.next=t),Al=!0,of||(of=!0,Xv(Wv))}function po(t,n){if(!lf&&Al){lf=!0;do for(var a=!1,s=bl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-O(42|t)+1)-1,f&=c&~(x&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Em(s,f))}else f=Ee,f=zt(s,s===Pe?f:0),!(f&3)||Vt(s,f)||(a=!0,Em(s,f));s=s.next}while(a);lf=!1}}function Wv(){Al=of=!1;var t=0;ar!==0&&($v()&&(t=ar),ar=0);for(var n=ct(),a=null,s=bl;s!==null;){var c=s.next,f=xm(s,n);f===0?(s.next=null,a===null?bl=c:a.next=c,c===null&&(Xr=a)):(a=s,(t!==0||f&3)&&(Al=!0)),s=c}po(t)}function xm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-O(f),A=1<<x,z=c[x];z===-1?(!(A&a)||A&s)&&(c[x]=Me(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=Pe,a=Ee,a=zt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&ze===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&V(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Vt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&V(s),Fo(a)){case 2:case 8:a=Et;break;case 32:a=Pt;break;case 268435456:a=St;break;default:a=Pt}return s=Mm.bind(null,t),a=E(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&V(s),t.callbackPriority=2,t.callbackNode=null,2}function Mm(t,n){var a=t.callbackNode;if(Wr()&&t.callbackNode!==a)return null;var s=Ee;return s=zt(t,t===Pe?s:0),s===0?null:(cm(t,s,n),xm(t,ct()),t.callbackNode!=null&&t.callbackNode===a?Mm.bind(null,t):null)}function Em(t,n){if(Wr())return null;cm(t,n,!0)}function Xv(t){eS(function(){Ve&6?E(At,t):t()})}function cf(){return ar===0&&(ar=pe()),ar}function Tm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function bm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Tm((c[dn]||null).action),x=s.submitter;x&&(n=(n=x[dn]||null)?Tm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new Wo("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ar!==0){var z=x?bm(c,x):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=x?bm(c,x):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<_d.length;uf++){var ff=_d[uf],Yv=ff.toLowerCase(),jv=ff[0].toUpperCase()+ff.slice(1);ci(Yv,"on"+jv)}ci(hd,"onAnimationEnd"),ci(dd,"onAnimationIteration"),ci(pd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(fv,"onTransitionRun"),ci(hv,"onTransitionStart"),ci(dv,"onTransitionCancel"),ci(md,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Am(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var A=s[x],z=A.instance,q=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=q;try{f(c)}catch(_t){hl(_t)}c.currentTarget=null,f=z}else for(x=0;x<s.length;x++){if(A=s[x],z=A.instance,q=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=q;try{f(c)}catch(_t){hl(_t)}c.currentTarget=null,f=z}}}}function ye(t,n){var a=n[Cs];a===void 0&&(a=n[Cs]=new Set);var s=t+"__bubble";a.has(s)||(Rm(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),Rm(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Rl]){t[Rl]=!0,ue.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,hf("selectionchange",!1,n))}}function Rm(t,n,a,s){switch(Km(n)){case 2:var c=xS;break;case 8:c=MS;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var A=s.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&(z=x.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;x=x.return}for(;A!==null;){if(x=rt(A),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=f=x;continue t}A=A.parentNode}}s=s.return}Vh(function(){var q=f,_t=Uc(a),Tt=[];t:{var st=gd.get(t);if(st!==void 0){var mt=Wo,Zt=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":mt=V0;break;case"focusin":Zt="focus",mt=Fc;break;case"focusout":Zt="blur",mt=Fc;break;case"beforeblur":case"afterblur":mt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=X0;break;case hd:case dd:case pd:mt=N0;break;case md:mt=Y0;break;case"scroll":case"scrollend":mt=w0;break;case"wheel":mt=Z0;break;case"copy":case"cut":case"paste":mt=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=Yh;break;case"toggle":case"beforetoggle":mt=Q0}var ce=(n&4)!==0,Xe=!ce&&(t==="scroll"||t==="scrollend"),$=ce?st!==null?st+"Capture":null:st;ce=[];for(var X=q,at;X!==null;){var yt=X;if(at=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||at===null||$===null||(yt=Ns(X,$),yt!=null&&ce.push(go(X,yt,at))),Xe)break;X=X.return}0<ce.length&&(st=new mt(st,Zt,null,a,_t),Tt.push({event:st,listeners:ce}))}}if(!(n&7)){t:{if(st=t==="mouseover"||t==="pointerover",mt=t==="mouseout"||t==="pointerout",st&&a!==Lc&&(Zt=a.relatedTarget||a.fromElement)&&(rt(Zt)||Zt[ea]))break t;if((mt||st)&&(st=_t.window===_t?_t:(st=_t.ownerDocument)?st.defaultView||st.parentWindow:window,mt?(Zt=a.relatedTarget||a.toElement,mt=q,Zt=Zt?rt(Zt):null,Zt!==null&&(Xe=it(Zt),ce=Zt.tag,Zt!==Xe||ce!==5&&ce!==27&&ce!==6)&&(Zt=null)):(mt=null,Zt=q),mt!==Zt)){if(ce=Xh,yt="onMouseLeave",$="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ce=Yh,yt="onPointerLeave",$="onPointerEnter",X="pointer"),Xe=mt==null?st:jt(mt),at=Zt==null?st:jt(Zt),st=new ce(yt,X+"leave",mt,a,_t),st.target=Xe,st.relatedTarget=at,yt=null,rt(_t)===q&&(ce=new ce($,X+"enter",Zt,a,_t),ce.target=at,ce.relatedTarget=Xe,yt=ce),Xe=yt,mt&&Zt)e:{for(ce=mt,$=Zt,X=0,at=ce;at;at=qr(at))X++;for(at=0,yt=$;yt;yt=qr(yt))at++;for(;0<X-at;)ce=qr(ce),X--;for(;0<at-X;)$=qr($),at--;for(;X--;){if(ce===$||$!==null&&ce===$.alternate)break e;ce=qr(ce),$=qr($)}ce=null}else ce=null;mt!==null&&wm(Tt,st,mt,ce,!1),Zt!==null&&Xe!==null&&wm(Tt,Xe,Zt,ce,!0)}}t:{if(st=q?jt(q):window,mt=st.nodeName&&st.nodeName.toLowerCase(),mt==="select"||mt==="input"&&st.type==="file")var Wt=ed;else if($h(st))if(nd)Wt=ov;else{Wt=rv;var _e=av}else mt=st.nodeName,!mt||mt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?q&&Dc(q.elementType)&&(Wt=ed):Wt=sv;if(Wt&&(Wt=Wt(t,q))){td(Tt,Wt,a,_t);break t}_e&&_e(t,st,q),t==="focusout"&&q&&st.type==="number"&&q.memoizedProps.value!=null&&Cc(st,"number",st.value)}switch(_e=q?jt(q):window,t){case"focusin":($h(_e)||_e.contentEditable==="true")&&(Tr=_e,Wc=q,Gs=null);break;case"focusout":Gs=Wc=Tr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,ud(Tt,a,_t);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":ud(Tt,a,_t)}var $t;if(Hc)t:{switch(t){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Er?Qh(t,a)&&(ne="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(jh&&a.locale!=="ko"&&(Er||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Er&&($t=kh()):(ra=_t,Pc="value"in ra?ra.value:ra.textContent,Er=!0)),_e=wl(q,ne),0<_e.length&&(ne=new qh(ne,t,null,a,_t),Tt.push({event:ne,listeners:_e}),$t?ne.data=$t:($t=Jh(a),$t!==null&&(ne.data=$t)))),($t=$0?tv(t,a):ev(t,a))&&(ne=wl(q,"onBeforeInput"),0<ne.length&&(_e=new qh("onBeforeInput","beforeinput",null,a,_t),Tt.push({event:_e,listeners:ne}),_e.data=$t)),qv(Tt,t,q,a,_t)}Am(Tt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(t,a),c!=null&&s.unshift(go(t,c,f)),c=Ns(t,n),c!=null&&s.push(go(t,c,f))),t=t.return}return s}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var A=a,z=A.alternate,q=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||q===null||(z=q,c?(q=Ns(a,f),q!=null&&x.unshift(go(a,q,z))):c||(q=Ns(a,f),q!=null&&x.push(go(a,q,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Kv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(Kv,`
`).replace(Qv,"")}function Dm(t,n){return n=Cm(n),Cm(t)===n}function Cl(){}function De(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||yr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&yr(t,""+s);break;case"className":Ue(t,"class",s);break;case"tabIndex":Ue(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ue(t,a,s);break;case"style":Hh(t,s,f);break;case"data":if(n!=="object"){Ue(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",c.name,c,null),De(t,n,"formEncType",c.formEncType,c,null),De(t,n,"formMethod",c.formMethod,c,null),De(t,n,"formTarget",c.formTarget,c,null)):(De(t,n,"encType",c.encType,c,null),De(t,n,"method",c.method,c,null),De(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Cl);break;case"onScroll":s!=null&&ye("scroll",t);break;case"onScrollEnd":s!=null&&ye("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ye("beforetoggle",t),ye("toggle",t),na(t,"popover",s);break;case"xlinkActuate":pn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":pn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":pn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":pn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":pn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":pn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":pn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":pn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":pn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":na(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A0.get(a)||a,na(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Hh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?yr(t,s):(typeof s=="number"||typeof s=="bigint")&&yr(t,""+s);break;case"onScroll":s!=null&&ye("scroll",t);break;case"onScrollEnd":s!=null&&ye("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):na(t,a,s)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,f,x,a,null)}}c&&De(t,n,"srcSet",a.srcSet,a,null),s&&De(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var A=f=x=c=null,z=null,q=null;for(s in a)if(a.hasOwnProperty(s)){var _t=a[s];if(_t!=null)switch(s){case"name":c=_t;break;case"type":x=_t;break;case"checked":z=_t;break;case"defaultChecked":q=_t;break;case"value":f=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:De(t,n,s,_t,a,null)}}Us(t,f,A,z,q,x,c,!1),Ye(t);return;case"select":ye("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":s=A;default:De(t,n,c,A,a,null)}n=f,a=x,t.multiple=!!s,n!=null?Sr(t,!!s,n,!1):a!=null&&Sr(t,!!s,a,!0);return;case"textarea":ye("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:De(t,n,x,A,a,null)}Fh(t,s,c,f),Ye(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:De(t,n,z,s,a,null)}return;case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(s=0;s<mo.length;s++)ye(mo[s],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(s=a[q],s!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,q,s,a,null)}return;default:if(Dc(n)){for(_t in a)a.hasOwnProperty(_t)&&(s=a[_t],s!==void 0&&mf(t,n,_t,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&De(t,n,A,s,a,null))}function Jv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,A=null,z=null,q=null,_t=null;for(mt in a){var Tt=a[mt];if(a.hasOwnProperty(mt)&&Tt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":z=Tt;default:s.hasOwnProperty(mt)||De(t,n,mt,null,s,Tt)}}for(var st in s){var mt=s[st];if(Tt=a[st],s.hasOwnProperty(st)&&(mt!=null||Tt!=null))switch(st){case"type":f=mt;break;case"name":c=mt;break;case"checked":q=mt;break;case"defaultChecked":_t=mt;break;case"value":x=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:mt!==Tt&&De(t,n,st,mt,s,Tt)}}Ls(t,x,A,z,q,_t,f,c);return;case"select":mt=x=A=st=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":mt=z;default:s.hasOwnProperty(f)||De(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==z&&De(t,n,c,f,s,z)}n=A,a=x,s=mt,st!=null?Sr(t,!!a,st,!1):!!s!=!!a&&(n!=null?Sr(t,!!a,n,!0):Sr(t,!!a,a?[]:"",!1));return;case"textarea":mt=st=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:De(t,n,A,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":st=c;break;case"defaultValue":mt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&De(t,n,x,c,s,f)}Bh(t,st,mt);return;case"option":for(var Zt in a)if(st=a[Zt],a.hasOwnProperty(Zt)&&st!=null&&!s.hasOwnProperty(Zt))switch(Zt){case"selected":t.selected=!1;break;default:De(t,n,Zt,null,s,st)}for(z in s)if(st=s[z],mt=a[z],s.hasOwnProperty(z)&&st!==mt&&(st!=null||mt!=null))switch(z){case"selected":t.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:De(t,n,z,st,s,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!s.hasOwnProperty(ce)&&De(t,n,ce,null,s,st);for(q in s)if(st=s[q],mt=a[q],s.hasOwnProperty(q)&&st!==mt&&(st!=null||mt!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:De(t,n,q,st,s,mt)}return;default:if(Dc(n)){for(var Xe in a)st=a[Xe],a.hasOwnProperty(Xe)&&st!==void 0&&!s.hasOwnProperty(Xe)&&mf(t,n,Xe,void 0,s,st);for(_t in s)st=s[_t],mt=a[_t],!s.hasOwnProperty(_t)||st===mt||st===void 0&&mt===void 0||mf(t,n,_t,st,s,mt);return}}for(var $ in a)st=a[$],a.hasOwnProperty($)&&st!=null&&!s.hasOwnProperty($)&&De(t,n,$,null,s,st);for(Tt in s)st=s[Tt],mt=a[Tt],!s.hasOwnProperty(Tt)||st===mt||st==null&&mt==null||De(t,n,Tt,st,s,mt)}var gf=null,_f=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function Lm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Um(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function $v(){var t=window.event;return t&&t.type==="popstate"?t===Sf?!1:(Sf=t,!0):(Sf=null,!1)}var Nm=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(t){return Om.resolve(null).then(t).catch(nS)}:Nm;function nS(t){setTimeout(function(){throw t})}function yf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),To(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);To(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),ft(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function iS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function aS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Pm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function zm(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ri=new Map,Bm=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Wi=W.d;W.d={f:rS,r:sS,D:oS,C:lS,L:cS,m:uS,X:hS,S:fS,M:dS};function rS(){var t=Wi.f(),n=El();return t||n}function sS(t){var n=Bt(t);n!==null&&n.tag===5&&n.type==="form"?up(n):Wi.r(t)}var Yr=typeof document>"u"?null:document;function Fm(t,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var c=yn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Bm.has(c)||(Bm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),_n(n,"link",t),kt(n),s.head.appendChild(n)))}}function oS(t){Wi.D(t),Fm("dns-prefetch",t,null)}function lS(t,n){Wi.C(t,n),Fm("preconnect",t,n)}function cS(t,n,a){Wi.L(t,n,a);var s=Yr;if(s&&t&&n){var c='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yn(a.imageSizes)+'"]')):c+='[href="'+yn(t)+'"]';var f=c;switch(n){case"style":f=jr(t);break;case"script":f=Zr(t)}ri.has(f)||(t=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),_n(n,"link",t),kt(n),s.head.appendChild(n)))}}function uS(t,n){Wi.m(t,n);var a=Yr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yn(s)+'"][href="'+yn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ri.has(f)&&(t=T({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),_n(s,"link",t),kt(s),a.head.appendChild(s)}}}function fS(t,n,a){Wi.S(t,n,a);var s=Yr;if(s&&t){var c=ee(s).hoistableStyles,f=jr(t);n=n||"default";var x=c.get(f);if(!x){var A={loading:0,preload:null};if(x=s.querySelector(_o(f)))A.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Mf(t,a);var z=x=s.createElement("link");kt(z),_n(z,"link",t),z._p=new Promise(function(q,_t){z.onload=q,z.onerror=_t}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ul(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:A},c.set(f,x)}}}function hS(t,n){Wi.X(t,n);var a=Yr;if(a&&t){var s=ee(a).hoistableScripts,c=Zr(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=T({src:t,async:!0},n),(n=ri.get(c))&&Ef(t,n),f=a.createElement("script"),kt(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function dS(t,n){Wi.M(t,n);var a=Yr;if(a&&t){var s=ee(a).hoistableScripts,c=Zr(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=T({src:t,async:!0,type:"module"},n),(n=ri.get(c))&&Ef(t,n),f=a.createElement("script"),kt(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Im(t,n,a,s){var c=(c=ie.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=ee(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=ee(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(_o(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||pS(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=ee(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+yn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Hm(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function pS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),kt(n),t.head.appendChild(n))}function Zr(t){return'[src="'+yn(t)+'"]'}function vo(t){return"script[async]"+t}function Gm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+yn(a.href)+'"]');if(s)return n.instance=s,kt(s),s;var c=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),kt(s),_n(s,"style",c),Ul(s,a.precedence,t),n.instance=s;case"stylesheet":c=jr(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,kt(f),f;s=Hm(a),(c=ri.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),kt(f);var x=f;return x._p=new Promise(function(A,z){x.onload=A,x.onerror=z}),_n(f,"link",s),n.state.loading|=4,Ul(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,kt(c),c):(s=a,(c=ri.get(f))&&(s=T({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),kt(c),_n(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Ul(s,a.precedence,t));return n.instance}function Ul(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var A=s[x];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function Vm(t,n,a){if(Nl===null){var s=new Map,c=Nl=new Map;c.set(a,s)}else c=Nl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[lt]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var A=s.get(x);A?A.push(f):s.set(x,[f])}}return s}function km(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wm(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var So=null;function gS(){}function _S(t,n,a){if(So===null)throw Error(r(475));var s=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=jr(a.href),f=t.querySelector(_o(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ol.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,kt(f);return}f=t.ownerDocument||t,a=Hm(a),(c=ri.get(c))&&Mf(a,c),f=f.createElement("link"),kt(f);var x=f;x._p=new Promise(function(A,z){x.onload=A,x.onerror=z}),_n(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Ol.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function vS(){if(So===null)throw Error(r(475));var t=So;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(SS,t),Pl=null,Ol.call(t))}function SS(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var s=a.get(null);else{a=new Map,Pl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Ol.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:M,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function yS(t,n,a,s,c,f,x,A){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Xm(t,n,a,s,c,f,x,A,z,q,_t,Tt){return t=new yS(t,n,a,x,A,z,q,Tt),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function qm(t){return t?(t=Rr,t):Rr}function Ym(t,n,a,s,c,f){c=qm(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(wn(a,t,n),no(a,t,n))}function jm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){jm(t,n),(t=t.alternate)&&jm(t,n)}function Zm(t){if(t.tag===13){var n=sa(t,67108864);n!==null&&wn(n,t,67108864),bf(t,67108864)}}var zl=!0;function xS(t,n,a,s){var c=K.T;K.T=null;var f=W.p;try{W.p=2,Af(t,n,a,s)}finally{W.p=f,K.T=c}}function MS(t,n,a,s){var c=K.T;K.T=null;var f=W.p;try{W.p=8,Af(t,n,a,s)}finally{W.p=f,K.T=c}}function Af(t,n,a,s){if(zl){var c=Rf(s);if(c===null)pf(t,n,s,Bl,a),Qm(t,s);else if(TS(c,t,n,a,s))s.stopPropagation();else if(Qm(t,s),n&4&&-1<ES.indexOf(t)){for(;c!==null;){var f=Bt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var z=1<<31-O(x);A.entanglements[1]|=z,x&=~z}Ti(f),!(Ve&6)&&(yl=ct()+500,po(0))}}break;case 13:A=sa(f,2),A!==null&&wn(A,f,2),El(),bf(f,2)}if(f=Rf(s),f===null&&pf(t,n,s,Bl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Rf(t){return t=Uc(t),wf(t)}var Bl=null;function wf(t){if(Bl=null,t=rt(t),t!==null){var n=it(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ht(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bl=t,null}function Km(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case At:return 2;case Et:return 8;case Pt:case qt:return 32;case St:return 268435456;default:return 32}default:return 32}}var Cf=!1,xa=null,Ma=null,Ea=null,xo=new Map,Mo=new Map,Ta=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(t,n){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Bt(n),n!==null&&Zm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function TS(t,n,a,s,c){switch(n){case"focusin":return xa=Eo(xa,t,n,a,s,c),!0;case"dragenter":return Ma=Eo(Ma,t,n,a,s,c),!0;case"mouseover":return Ea=Eo(Ea,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return xo.set(f,Eo(xo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,s,c)),!0}return!1}function Jm(t){var n=rt(t.target);if(n!==null){var a=it(n);if(a!==null){if(n=a.tag,n===13){if(n=ht(a),n!==null){t.blockedOn=n,Io(t.priority,function(){if(a.tag===13){var s=Wn(),c=sa(a,s);c!==null&&wn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=Bt(a),n!==null&&Zm(n),t.blockedOn=a,!1;n.shift()}return!0}function $m(t,n,a){Fl(t)&&a.delete(n)}function bS(){Cf=!1,xa!==null&&Fl(xa)&&(xa=null),Ma!==null&&Fl(Ma)&&(Ma=null),Ea!==null&&Fl(Ea)&&(Ea=null),xo.forEach($m),Mo.forEach($m)}function Il(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bS)))}var Hl=null;function tg(t){Hl!==t&&(Hl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hl===t&&(Hl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var f=Bt(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function To(t){function n(z){return Il(z,t)}xa!==null&&Il(xa,t),Ma!==null&&Il(Ma,t),Ea!==null&&Il(Ea,t),xo.forEach(n),Mo.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Jm(a),a.blockedOn===null&&Ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[dn]||null;if(typeof f=="function")x||tg(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[dn]||null)A=x.formAction;else if(wf(c)!==null)continue}else A=x.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),tg(a)}}}function Df(t){this._internalRoot=t}Gl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();Ym(a,s,t,n,null,null)},Gl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Wr(),Ym(t.current,2,null,t,null,null),El(),n[ea]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ia();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,t),a===0&&Jm(t)}};var eg=e.version;if(eg!=="19.0.0")throw Error(r(527,eg,"19.0.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=j(n),t=t!==null?pt(t):null,t=t===null?null:t.stateNode,t};var AS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:K,findFiberByHostInstance:rt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Jt=Vl.inject(AS),Nt=Vl}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=vp,f=Sp,x=yp,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Xm(t,1,!1,null,null,a,s,c,f,x,A,null),t[ea]=n.current,df(t.nodeType===8?t.parentNode:t),new Df(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=vp,x=Sp,A=yp,z=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),n=Xm(t,1,!0,n,a??null,s,c,f,x,A,z,q),n.context=qm(null),a=n.current,s=Wn(),c=da(s),c.callback=null,pa(a,c,s),n.current.lanes=s,ge(n,s),Ti(n),t[ea]=n.current,df(t),new Gl(n)},Ao.version="19.0.0",Ao}var fg;function zS(){if(fg)return Nf.exports;fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=PS(),Nf.exports}var BS=zS();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="161",Kr={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FS=0,hg=1,IS=2,k_=1,W_=2,Ki=3,Fa=0,Bn=1,Ai=2,Oa=0,vs=1,mh=2,dg=3,pg=4,HS=5,ur=100,GS=101,VS=102,mg=103,gg=104,kS=200,WS=201,XS=202,qS=203,gh=204,_h=205,YS=206,jS=207,ZS=208,KS=209,QS=210,JS=211,$S=212,ty=213,ey=214,ny=0,iy=1,ay=2,pc=3,ry=4,sy=5,oy=6,ly=7,wh=0,cy=1,uy=2,Pa=0,fy=1,hy=2,dy=3,py=4,my=5,gy=6,X_=300,xs=301,Ms=302,vh=303,Sh=304,xc=306,yh=1e3,_i=1001,xh=1002,Ln=1003,_g=1004,Ro=1005,Pn=1006,Bf=1007,hr=1008,za=1009,_y=1010,vy=1011,Ch=1012,q_=1013,Na=1014,Qi=1015,Po=1016,Y_=1017,j_=1018,dr=1020,Sy=1021,vi=1023,yy=1024,xy=1025,pr=1026,Es=1027,My=1028,Z_=1029,Ey=1030,K_=1031,Q_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,vg=35840,Sg=35841,yg=35842,xg=35843,J_=36196,Mg=37492,Eg=37496,Tg=37808,bg=37809,Ag=37810,Rg=37811,wg=37812,Cg=37813,Dg=37814,Lg=37815,Ug=37816,Ng=37817,Og=37818,Pg=37819,zg=37820,Bg=37821,Vf=36492,Fg=36494,Ig=36495,Ty=36283,Hg=36284,Gg=36285,Vg=36286,$_=3e3,mr=3001,by=3200,Ay=3201,t0=0,Ry=1,oi="",vn="srgb",$i="srgb-linear",Dh="display-p3",Mc="display-p3-linear",mc="linear",Be="srgb",gc="rec709",_c="p3",Jr=7680,kg=519,wy=512,Cy=513,Dy=514,e0=515,Ly=516,Uy=517,Ny=518,Oy=519,Wg=35044,Xg="300 es",Mh=1035,Ji=2e3,vc=2001;class vr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qg=1234567;const No=Math.PI/180,zo=180/Math.PI;function bs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function bn(o,e,i){return Math.max(e,Math.min(i,o))}function Lh(o,e){return(o%e+e)%e}function Py(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function zy(o,e,i){return o!==e?(i-o)/(e-o):0}function Oo(o,e,i){return(1-i)*o+i*e}function By(o,e,i,r){return Oo(o,e,1-Math.exp(-i*r))}function Fy(o,e=1){return e-Math.abs(Lh(o,e*2)-e)}function Iy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Hy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Gy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Vy(o,e){return o+Math.random()*(e-o)}function ky(o){return o*(.5-Math.random())}function Wy(o){o!==void 0&&(qg=o);let e=qg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xy(o){return o*No}function qy(o){return o*zo}function Eh(o){return(o&o-1)===0&&o!==0}function Yy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Sc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function jy(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),p=d(i/2),m=u((e+r)/2),_=d((e+r)/2),y=u((e-r)/2),g=d((e-r)/2),M=u((r-e)/2),b=d((r-e)/2);switch(l){case"XYX":o.set(h*_,p*y,p*g,h*m);break;case"YZY":o.set(p*g,h*_,p*y,h*m);break;case"ZXZ":o.set(p*y,p*g,h*_,h*m);break;case"XZX":o.set(h*_,p*b,p*M,h*m);break;case"YXY":o.set(p*M,h*_,p*b,h*m);break;case"ZYZ":o.set(p*b,p*M,h*_,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ps(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Cn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:No,RAD2DEG:zo,generateUUID:bs,clamp:bn,euclideanModulo:Lh,mapLinear:Py,inverseLerp:zy,lerp:Oo,damp:By,pingpong:Fy,smoothstep:Iy,smootherstep:Hy,randInt:Gy,randFloat:Vy,randFloatSpread:ky,seededRandom:Wy,degToRad:Xy,radToDeg:qy,isPowerOfTwo:Eh,ceilPowerOfTwo:Yy,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:jy,normalize:Cn,denormalize:ps};class oe{constructor(e=0,i=0){oe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(e,i,r,l,u,d,h,p,m){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],_=r[4],y=r[7],g=r[2],M=r[5],b=r[8],w=l[0],S=l[3],v=l[6],B=l[1],L=l[4],P=l[7],k=l[2],H=l[5],F=l[8];return u[0]=d*w+h*B+p*k,u[3]=d*S+h*L+p*H,u[6]=d*v+h*P+p*F,u[1]=m*w+_*B+y*k,u[4]=m*S+_*L+y*H,u[7]=m*v+_*P+y*F,u[2]=g*w+M*B+b*k,u[5]=g*S+M*L+b*H,u[8]=g*v+M*P+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*d*_-i*h*m-r*u*_+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],y=_*d-h*m,g=h*p-_*u,M=m*u-d*p,b=i*y+r*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=y*w,e[1]=(l*m-_*r)*w,e[2]=(h*r-l*d)*w,e[3]=g*w,e[4]=(_*i-l*p)*w,e[5]=(l*u-h*i)*w,e[6]=M*w,e[7]=(r*p-m*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new ve;function n0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zy(){const o=yc("canvas");return o.style.display="block",o}const Yg={};function Ss(o){o in Yg||(Yg[o]=!0,console.warn(o))}const jg=new ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zg=new ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kl={[$i]:{transfer:mc,primaries:gc,toReference:o=>o,fromReference:o=>o},[vn]:{transfer:Be,primaries:gc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Mc]:{transfer:mc,primaries:_c,toReference:o=>o.applyMatrix3(Zg),fromReference:o=>o.applyMatrix3(jg)},[Dh]:{transfer:Be,primaries:_c,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Zg),fromReference:o=>o.applyMatrix3(jg).convertLinearToSRGB()}},Ky=new Set([$i,Mc]),Le={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Ky.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=kl[e].toReference,l=kl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return kl[o].primaries},getTransfer:function(o){return o===oi?mc:kl[o].transfer}};function ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class i0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=yc("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ys(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ys(i[r]/255)*255):i[r]=ys(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qy=0;class a0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Xf(l[d].image)):u.push(Xf(l[d]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?i0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jy=0;class Fn extends vr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=_i,l=_i,u=Pn,d=hr,h=vi,p=za,m=Fn.DEFAULT_ANISOTROPY,_=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=bs(),this.name="",this.source=new a0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===mr?vn:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vn?mr:$_}set encoding(e){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?vn:oi}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=X_;Fn.DEFAULT_ANISOTROPY=1;class Fe{constructor(e=0,i=0,r=0,l=1){Fe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],_=p[4],y=p[8],g=p[1],M=p[5],b=p[9],w=p[2],S=p[6],v=p[10];if(Math.abs(_-g)<.01&&Math.abs(y-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+w)<.1&&Math.abs(b+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,P=(M+1)/2,k=(v+1)/2,H=(_+g)/4,F=(y+w)/4,ut=(b+S)/4;return L>P&&L>k?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=H/r,u=F/r):P>k?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=H/l,u=ut/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=ut/u),this.set(r,l,u,i),this}let B=Math.sqrt((S-b)*(S-b)+(y-w)*(y-w)+(g-_)*(g-_));return Math.abs(B)<.001&&(B=1),this.x=(S-b)/B,this.y=(y-w)/B,this.z=(g-_)/B,this.w=Math.acos((m+M+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends vr{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Fe(0,0,e,i),this.scissorTest=!1,this.viewport=new Fe(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===mr?vn:oi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new a0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends $y{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class r0 extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tx extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],_=r[l+2],y=r[l+3];const g=u[d+0],M=u[d+1],b=u[d+2],w=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=y;return}if(h===1){e[i+0]=g,e[i+1]=M,e[i+2]=b,e[i+3]=w;return}if(y!==w||p!==g||m!==M||_!==b){let S=1-h;const v=p*g+m*M+_*b+y*w,B=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const k=Math.sqrt(L),H=Math.atan2(k,v*B);S=Math.sin(S*H)/k,h=Math.sin(h*H)/k}const P=h*B;if(p=p*S+g*P,m=m*S+M*P,_=_*S+b*P,y=y*S+w*P,S===1-h){const k=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=k,m*=k,_*=k,y*=k}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],y=u[d],g=u[d+1],M=u[d+2],b=u[d+3];return e[i]=h*b+_*y+p*M-m*g,e[i+1]=p*b+_*g+m*y-h*M,e[i+2]=m*b+_*M+h*g-p*y,e[i+3]=_*b-h*y-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),y=h(u/2),g=p(r/2),M=p(l/2),b=p(u/2);switch(d){case"XYZ":this._x=g*_*y+m*M*b,this._y=m*M*y-g*_*b,this._z=m*_*b+g*M*y,this._w=m*_*y-g*M*b;break;case"YXZ":this._x=g*_*y+m*M*b,this._y=m*M*y-g*_*b,this._z=m*_*b-g*M*y,this._w=m*_*y+g*M*b;break;case"ZXY":this._x=g*_*y-m*M*b,this._y=m*M*y+g*_*b,this._z=m*_*b+g*M*y,this._w=m*_*y-g*M*b;break;case"ZYX":this._x=g*_*y-m*M*b,this._y=m*M*y+g*_*b,this._z=m*_*b-g*M*y,this._w=m*_*y+g*M*b;break;case"YZX":this._x=g*_*y+m*M*b,this._y=m*M*y+g*_*b,this._z=m*_*b-g*M*y,this._w=m*_*y-g*M*b;break;case"XZY":this._x=g*_*y-m*M*b,this._y=m*M*y-g*_*b,this._z=m*_*b+g*M*y,this._w=m*_*y+g*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],y=i[10],g=r+h+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(_-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+d*h+l*m-u*p,this._y=l*_+d*p+u*h-r*m,this._z=u*_+d*m+r*p-l*h,this._w=d*_-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),y=Math.sin((1-i)*_)/m,g=Math.sin(i*_)/m;return this._w=d*y+this._w*g,this._x=r*y+this._x*g,this._y=l*y+this._y*g,this._z=u*y+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Kg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Kg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),_=2*(h*i-u*l),y=2*(u*r-d*i);return this.x=i+p*m+d*y-h*_,this.y=r+p*_+h*m-u*y,this.z=l+p*y+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new Y,Kg=new _r;class Bo{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,di):di.fromBufferAttribute(u,d),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Wl.copy(r.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Xl.subVectors(this.max,wo),ts.subVectors(e.a,wo),es.subVectors(e.b,wo),ns.subVectors(e.c,wo),Aa.subVectors(es,ts),Ra.subVectors(ns,es),rr.subVectors(ts,ns);let i=[0,-Aa.z,Aa.y,0,-Ra.z,Ra.y,0,-rr.z,rr.y,Aa.z,0,-Aa.x,Ra.z,0,-Ra.x,rr.z,0,-rr.x,-Aa.y,Aa.x,0,-Ra.y,Ra.x,0,-rr.y,rr.x,0];return!Yf(i,ts,es,ns,Xl)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,ts,es,ns,Xl))?!1:(ql.crossVectors(Aa,Ra),i=[ql.x,ql.y,ql.z],Yf(i,ts,es,ns,Xl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],di=new Y,Wl=new Bo,ts=new Y,es=new Y,ns=new Y,Aa=new Y,Ra=new Y,rr=new Y,wo=new Y,Xl=new Y,ql=new Y,sr=new Y;function Yf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){sr.fromArray(o,u);const h=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),p=e.dot(sr),m=i.dot(sr),_=r.dot(sr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const ex=new Bo,Co=new Y,jf=new Y;class Ec{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ex.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(jf)),this.expandByPoint(Co.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new Y,Zf=new Y,Yl=new Y,wa=new Y,Kf=new Y,jl=new Y,Qf=new Y;class Uh{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),Yl.copy(i).sub(e).normalize(),wa.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Yl),h=wa.dot(this.direction),p=-wa.dot(Yl),m=wa.lengthSq(),_=Math.abs(1-d*d);let y,g,M,b;if(_>0)if(y=d*p-h,g=d*h-p,b=u*_,y>=0)if(g>=-b)if(g<=b){const w=1/_;y*=w,g*=w,M=y*(y+d*g+2*h)+g*(d*y+g+2*p)+m}else g=u,y=Math.max(0,-(d*g+h)),M=-y*y+g*(g+2*p)+m;else g=-u,y=Math.max(0,-(d*g+h)),M=-y*y+g*(g+2*p)+m;else g<=-b?(y=Math.max(0,-(-d*u+h)),g=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+g*(g+2*p)+m):g<=b?(y=0,g=Math.min(Math.max(-u,-p),u),M=g*(g+2*p)+m):(y=Math.max(0,-(d*u+h)),g=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+g*(g+2*p)+m);else g=d>0?-u:u,y=Math.max(0,-(d*g+h)),M=-y*y+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(Yl,g),M}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,l=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,l=(e.min.x-g.x)*m),_>=0?(u=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(u=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(h=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),jl.subVectors(r,e),Qf.crossVectors(Kf,jl);let d=this.direction.dot(Qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;wa.subVectors(this.origin,e);const p=h*this.direction.dot(jl.crossVectors(wa,jl));if(p<0)return null;const m=h*this.direction.dot(Kf.cross(wa));if(m<0||p+m>d)return null;const _=-h*wa.dot(Qf);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,r,l,u,d,h,p,m,_,y,g,M,b,w,S){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,_,y,g,M,b,w,S)}set(e,i,r,l,u,d,h,p,m,_,y,g,M,b,w,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=_,v[10]=y,v[14]=g,v[3]=M,v[7]=b,v[11]=w,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),d=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const g=d*_,M=d*y,b=h*_,w=h*y;i[0]=p*_,i[4]=-p*y,i[8]=m,i[1]=M+b*m,i[5]=g-w*m,i[9]=-h*p,i[2]=w-g*m,i[6]=b+M*m,i[10]=d*p}else if(e.order==="YXZ"){const g=p*_,M=p*y,b=m*_,w=m*y;i[0]=g+w*h,i[4]=b*h-M,i[8]=d*m,i[1]=d*y,i[5]=d*_,i[9]=-h,i[2]=M*h-b,i[6]=w+g*h,i[10]=d*p}else if(e.order==="ZXY"){const g=p*_,M=p*y,b=m*_,w=m*y;i[0]=g-w*h,i[4]=-d*y,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*_,i[9]=w-g*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const g=d*_,M=d*y,b=h*_,w=h*y;i[0]=p*_,i[4]=b*m-M,i[8]=g*m+w,i[1]=p*y,i[5]=w*m+g,i[9]=M*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const g=d*p,M=d*m,b=h*p,w=h*m;i[0]=p*_,i[4]=w-g*y,i[8]=b*y+M,i[1]=y,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=M*y+b,i[10]=g-w*y}else if(e.order==="XZY"){const g=d*p,M=d*m,b=h*p,w=h*m;i[0]=p*_,i[4]=-y,i[8]=m*_,i[1]=g*y+w,i[5]=d*_,i[9]=M*y-b,i[2]=b*y-M,i[6]=h*_,i[10]=w*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,i,r){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ca.crossVectors(r,Xn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ca.crossVectors(r,Xn)),Ca.normalize(),Zl.crossVectors(Xn,Ca),l[0]=Ca.x,l[4]=Zl.x,l[8]=Xn.x,l[1]=Ca.y,l[5]=Zl.y,l[9]=Xn.y,l[2]=Ca.z,l[6]=Zl.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],_=r[1],y=r[5],g=r[9],M=r[13],b=r[2],w=r[6],S=r[10],v=r[14],B=r[3],L=r[7],P=r[11],k=r[15],H=l[0],F=l[4],ut=l[8],K=l[12],T=l[1],U=l[5],Q=l[9],vt=l[13],G=l[2],Z=l[6],I=l[10],J=l[14],it=l[3],ht=l[7],C=l[11],j=l[15];return u[0]=d*H+h*T+p*G+m*it,u[4]=d*F+h*U+p*Z+m*ht,u[8]=d*ut+h*Q+p*I+m*C,u[12]=d*K+h*vt+p*J+m*j,u[1]=_*H+y*T+g*G+M*it,u[5]=_*F+y*U+g*Z+M*ht,u[9]=_*ut+y*Q+g*I+M*C,u[13]=_*K+y*vt+g*J+M*j,u[2]=b*H+w*T+S*G+v*it,u[6]=b*F+w*U+S*Z+v*ht,u[10]=b*ut+w*Q+S*I+v*C,u[14]=b*K+w*vt+S*J+v*j,u[3]=B*H+L*T+P*G+k*it,u[7]=B*F+L*U+P*Z+k*ht,u[11]=B*ut+L*Q+P*I+k*C,u[15]=B*K+L*vt+P*J+k*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],_=e[2],y=e[6],g=e[10],M=e[14],b=e[3],w=e[7],S=e[11],v=e[15];return b*(+u*p*y-l*m*y-u*h*g+r*m*g+l*h*M-r*p*M)+w*(+i*p*M-i*m*g+u*d*g-l*d*M+l*m*_-u*p*_)+S*(+i*m*y-i*h*M-u*d*y+r*d*M+u*h*_-r*m*_)+v*(-l*h*_-i*p*y+i*h*g+l*d*y-r*d*g+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],y=e[9],g=e[10],M=e[11],b=e[12],w=e[13],S=e[14],v=e[15],B=y*S*m-w*g*m+w*p*M-h*S*M-y*p*v+h*g*v,L=b*g*m-_*S*m-b*p*M+d*S*M+_*p*v-d*g*v,P=_*w*m-b*y*m+b*h*M-d*w*M-_*h*v+d*y*v,k=b*y*p-_*w*p-b*h*g+d*w*g+_*h*S-d*y*S,H=i*B+r*L+l*P+u*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return e[0]=B*F,e[1]=(w*g*u-y*S*u-w*l*M+r*S*M+y*l*v-r*g*v)*F,e[2]=(h*S*u-w*p*u+w*l*m-r*S*m-h*l*v+r*p*v)*F,e[3]=(y*p*u-h*g*u-y*l*m+r*g*m+h*l*M-r*p*M)*F,e[4]=L*F,e[5]=(_*S*u-b*g*u+b*l*M-i*S*M-_*l*v+i*g*v)*F,e[6]=(b*p*u-d*S*u-b*l*m+i*S*m+d*l*v-i*p*v)*F,e[7]=(d*g*u-_*p*u+_*l*m-i*g*m-d*l*M+i*p*M)*F,e[8]=P*F,e[9]=(b*y*u-_*w*u-b*r*M+i*w*M+_*r*v-i*y*v)*F,e[10]=(d*w*u-b*h*u+b*r*m-i*w*m-d*r*v+i*h*v)*F,e[11]=(_*h*u-d*y*u-_*r*m+i*y*m+d*r*M-i*h*M)*F,e[12]=k*F,e[13]=(_*w*l-b*y*l+b*r*g-i*w*g-_*r*S+i*y*S)*F,e[14]=(b*h*l-d*w*l-b*r*p+i*w*p+d*r*S-i*h*S)*F,e[15]=(d*y*l-_*h*l+_*r*p-i*y*p-d*r*g+i*h*g)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,_=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*d,0,m*p-l*h,_*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,_=d+d,y=h+h,g=u*m,M=u*_,b=u*y,w=d*_,S=d*y,v=h*y,B=p*m,L=p*_,P=p*y,k=r.x,H=r.y,F=r.z;return l[0]=(1-(w+v))*k,l[1]=(M+P)*k,l[2]=(b-L)*k,l[3]=0,l[4]=(M-P)*H,l[5]=(1-(g+v))*H,l[6]=(S+B)*H,l[7]=0,l[8]=(b+L)*F,l[9]=(S-B)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const d=is.set(l[4],l[5],l[6]).length(),h=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const m=1/u,_=1/d,y=1/h;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=y,pi.elements[9]*=y,pi.elements[10]*=y,i.setFromRotationMatrix(pi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ji){const p=this.elements,m=2*u/(i-e),_=2*u/(r-l),y=(i+e)/(i-e),g=(r+l)/(r-l);let M,b;if(h===Ji)M=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===vc)M=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=g,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ji){const p=this.elements,m=1/(i-e),_=1/(r-l),y=1/(d-u),g=(i+e)*m,M=(r+l)*_;let b,w;if(h===Ji)b=(d+u)*y,w=-2*y;else if(h===vc)b=u*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-g,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new Y,pi=new Ze,nx=new Y(0,0,0),ix=new Y(1,1,1),Ca=new Y,Zl=new Y,Xn=new Y,Qg=new Ze,Jg=new _r;class Tc{constructor(e=0,i=0,r=0,l=Tc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],y=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(bn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-bn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tc.DEFAULT_ORDER="XYZ";class s0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ax=0;const $g=new Y,as=new _r,Yi=new Ze,Kl=new Y,Do=new Y,rx=new Y,sx=new _r,t_=new Y(1,0,0),e_=new Y(0,1,0),n_=new Y(0,0,1),ox={type:"added"},lx={type:"removed"};class Sn extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new Y,i=new Tc,r=new _r,l=new Y(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ve}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Kl.copy(e):Kl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Do,Kl,this.up):Yi.lookAt(Kl,Do,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Yi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ox)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(lx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),y=d(e.shapes),g=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new Y(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new Y,ji=new Y,Jf=new Y,Zi=new Y,rs=new Y,ss=new Y,i_=new Y,$f=new Y,th=new Y,eh=new Y;class Ri{constructor(e=new Y,i=new Y,r=new Y){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){mi.subVectors(l,i),ji.subVectors(r,i),Jf.subVectors(e,i);const d=mi.dot(mi),h=mi.dot(ji),p=mi.dot(Jf),m=ji.dot(ji),_=ji.dot(Jf),y=d*m-h*h;if(y===0)return u.set(0,0,0),null;const g=1/y,M=(m*p-h*_)*g,b=(d*_-h*p)*g;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,Zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Zi.x),p.addScaledVector(d,Zi.y),p.addScaledVector(h,Zi.z),p)}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),ji.subVectors(e,i),mi.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),mi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ri.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;rs.subVectors(l,r),ss.subVectors(u,r),$f.subVectors(e,r);const p=rs.dot($f),m=ss.dot($f);if(p<=0&&m<=0)return i.copy(r);th.subVectors(e,l);const _=rs.dot(th),y=ss.dot(th);if(_>=0&&y<=_)return i.copy(l);const g=p*y-_*m;if(g<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(r).addScaledVector(rs,d);eh.subVectors(e,u);const M=rs.dot(eh),b=ss.dot(eh);if(b>=0&&M<=b)return i.copy(u);const w=M*m-p*b;if(w<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector(ss,h);const S=_*b-M*y;if(S<=0&&y-_>=0&&M-b>=0)return i_.subVectors(u,l),h=(y-_)/(y-_+(M-b)),i.copy(l).addScaledVector(i_,h);const v=1/(S+w+g);return d=w*v,h=g*v,i.copy(r).addScaledVector(rs,d).addScaledVector(ss,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class xe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=Lh(e,1),i=bn(i,0,1),r=bn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=nh(d,u,e+1/3),this.g=nh(d,u,e),this.b=nh(d,u,e-1/3)}return Le.toWorkingColorSpace(this,l),this}setStyle(e,i=vn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=vn){const r=o0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Le.fromWorkingColorSpace(Tn.copy(this),e),Math.round(bn(Tn.r*255,0,255))*65536+Math.round(bn(Tn.g*255,0,255))*256+Math.round(bn(Tn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.fromWorkingColorSpace(Tn.copy(this),i);const r=Tn.r,l=Tn.g,u=Tn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const y=d-h;switch(m=_<=.5?y/(d+h):y/(2-d-h),d){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Le.workingColorSpace){return Le.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=vn){Le.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,r=Tn.g,l=Tn.b;return e!==vn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+i,Da.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Da),e.getHSL(Ql);const r=Oo(Da.h,Ql.h,i),l=Oo(Da.s,Ql.s,i),u=Oo(Da.l,Ql.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new xe;xe.NAMES=o0;let cx=0;class As extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=vs,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==pc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class l0 extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new Y,Jl=new oe;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Wg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ss("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Jl.fromBufferAttribute(this,i),Jl.applyMatrix3(e),this.setXY(i,Jl.x,Jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ps(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ps(i,this.array)),i}setX(e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ps(i,this.array)),i}setY(e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ps(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ps(i,this.array)),i}setW(e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Cn(i,this.array),r=Cn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Cn(i,this.array),r=Cn(r,this.array),l=Cn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Cn(i,this.array),r=Cn(r,this.array),l=Cn(l,this.array),u=Cn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wg&&(e.usage=this.usage),e}}class c0 extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class u0 extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class li extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ux=0;const si=new Ze,ih=new Sn,os=new Y,qn=new Bo,Lo=new Bo,hn=new Y;class Ci extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?u0:c0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ve().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new li(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(hn.addVectors(qn.min,Lo.min),qn.expandByPoint(hn),hn.addVectors(qn.max,Lo.max),qn.expandByPoint(hn)):(qn.expandByPoint(Lo.min),qn.expandByPoint(Lo.max))}qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)hn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)hn.fromBufferAttribute(h,m),p&&(os.fromBufferAttribute(e,m),hn.add(os)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],_=[];for(let T=0;T<h;T++)m[T]=new Y,_[T]=new Y;const y=new Y,g=new Y,M=new Y,b=new oe,w=new oe,S=new oe,v=new Y,B=new Y;function L(T,U,Q){y.fromArray(l,T*3),g.fromArray(l,U*3),M.fromArray(l,Q*3),b.fromArray(d,T*2),w.fromArray(d,U*2),S.fromArray(d,Q*2),g.sub(y),M.sub(y),w.sub(b),S.sub(b);const vt=1/(w.x*S.y-S.x*w.y);isFinite(vt)&&(v.copy(g).multiplyScalar(S.y).addScaledVector(M,-w.y).multiplyScalar(vt),B.copy(M).multiplyScalar(w.x).addScaledVector(g,-S.x).multiplyScalar(vt),m[T].add(v),m[U].add(v),m[Q].add(v),_[T].add(B),_[U].add(B),_[Q].add(B))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let T=0,U=P.length;T<U;++T){const Q=P[T],vt=Q.start,G=Q.count;for(let Z=vt,I=vt+G;Z<I;Z+=3)L(r[Z+0],r[Z+1],r[Z+2])}const k=new Y,H=new Y,F=new Y,ut=new Y;function K(T){F.fromArray(u,T*3),ut.copy(F);const U=m[T];k.copy(U),k.sub(F.multiplyScalar(F.dot(U))).normalize(),H.crossVectors(ut,U);const vt=H.dot(_[T])<0?-1:1;p[T*4]=k.x,p[T*4+1]=k.y,p[T*4+2]=k.z,p[T*4+3]=vt}for(let T=0,U=P.length;T<U;++T){const Q=P[T],vt=Q.start,G=Q.count;for(let Z=vt,I=vt+G;Z<I;Z+=3)K(r[Z+0]),K(r[Z+1]),K(r[Z+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new Y,u=new Y,d=new Y,h=new Y,p=new Y,m=new Y,_=new Y,y=new Y;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),w=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),_.subVectors(d,u),y.subVectors(l,u),_.cross(y),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.add(_),p.add(_),m.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,u),y.subVectors(l,u),_.cross(y),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,y=h.normalized,g=new m.constructor(p.length*_);let M=0,b=0;for(let w=0,S=p.length;w<S;w++){h.isInterleavedBufferAttribute?M=p[w]*h.data.stride+h.offset:M=p[w]*_;for(let v=0;v<_;v++)g[b++]=m[M++]}return new wi(g,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,y=m.length;_<y;_++){const g=m[_],M=e(g,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,g=m.length;y<g;y++){const M=m[y];_.push(M.toJSON(e.data))}_.length>0&&(l[p]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let g=0,M=y.length;g<M;g++)_.push(y[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a_=new Ze,or=new Uh,$l=new Ec,r_=new Y,ls=new Y,cs=new Y,us=new Y,ah=new Y,tc=new Y,ec=new oe,nc=new oe,ic=new oe,s_=new Y,o_=new Y,l_=new Y,ac=new Y,rc=new Y;class zn extends Sn{constructor(e=new Ci,i=new l0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){tc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],y=u[p];_!==0&&(ah.fromBufferAttribute(y,e),d?tc.addScaledVector(ah,_):tc.addScaledVector(ah.sub(i),_))}i.add(tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(u),or.copy(e.ray).recast(e.near),!($l.containsPoint(or.origin)===!1&&(or.intersectSphere($l,r_)===null||or.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(a_.copy(u).invert(),or.copy(e.ray).applyMatrix4(a_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,or)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,g=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const S=g[b],v=d[S.materialIndex],B=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=B,k=L;P<k;P+=3){const H=h.getX(P),F=h.getX(P+1),ut=h.getX(P+2);l=sc(this,v,e,r,m,_,y,H,F,ut),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let S=b,v=w;S<v;S+=3){const B=h.getX(S),L=h.getX(S+1),P=h.getX(S+2);l=sc(this,d,e,r,m,_,y,B,L,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const S=g[b],v=d[S.materialIndex],B=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let P=B,k=L;P<k;P+=3){const H=P,F=P+1,ut=P+2;l=sc(this,v,e,r,m,_,y,H,F,ut),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=b,v=w;S<v;S+=3){const B=S,L=S+1,P=S+2;l=sc(this,d,e,r,m,_,y,B,L,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function fx(o,e,i,r,l,u,d,h){let p;if(e.side===Bn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Fa,h),p===null)return null;rc.copy(h),rc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(rc);return m<i.near||m>i.far?null:{distance:m,point:rc.clone(),object:o}}function sc(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,ls),o.getVertexPosition(p,cs),o.getVertexPosition(m,us);const _=fx(o,e,i,r,ls,cs,us,ac);if(_){l&&(ec.fromBufferAttribute(l,h),nc.fromBufferAttribute(l,p),ic.fromBufferAttribute(l,m),_.uv=Ri.getInterpolation(ac,ls,cs,us,ec,nc,ic,new oe)),u&&(ec.fromBufferAttribute(u,h),nc.fromBufferAttribute(u,p),ic.fromBufferAttribute(u,m),_.uv1=Ri.getInterpolation(ac,ls,cs,us,ec,nc,ic,new oe),_.uv2=_.uv1),d&&(s_.fromBufferAttribute(d,h),o_.fromBufferAttribute(d,p),l_.fromBufferAttribute(d,m),_.normal=Ri.getInterpolation(ac,ls,cs,us,s_,o_,l_,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new Y,materialIndex:0};Ri.getNormal(ls,cs,us,y.normal),_.face=y}return _}class Ba extends Ci{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],y=[];let g=0,M=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new li(m,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(y,2));function b(w,S,v,B,L,P,k,H,F,ut,K){const T=P/F,U=k/ut,Q=P/2,vt=k/2,G=H/2,Z=F+1,I=ut+1;let J=0,it=0;const ht=new Y;for(let C=0;C<I;C++){const j=C*U-vt;for(let pt=0;pt<Z;pt++){const bt=pt*T-Q;ht[w]=bt*B,ht[S]=j*L,ht[v]=G,m.push(ht.x,ht.y,ht.z),ht[w]=0,ht[S]=0,ht[v]=H>0?1:-1,_.push(ht.x,ht.y,ht.z),y.push(pt/F),y.push(1-C/ut),J+=1}}for(let C=0;C<ut;C++)for(let j=0;j<F;j++){const pt=g+j+Z*C,bt=g+j+Z*(C+1),W=g+(j+1)+Z*(C+1),dt=g+(j+1)+Z*C;p.push(pt,bt,dt),p.push(bt,W,dt),it+=6}h.addGroup(M,it,K),M+=it,g+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function hx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function f0(o){return o.getRenderTarget()===null?o.outputColorSpace:Le.workingColorSpace}const dx={clone:Ts,merge:Dn};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new Y,c_=new oe,u_=new oe;class jn extends h0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,i){return this.getViewBounds(e,c_,u_),i.subVectors(u_,c_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(No*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class gx extends Sn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new jn(fs,hs,e,i);l.layers=this.layers,this.add(l);const u=new jn(fs,hs,e,i);u.layers=this.layers,this.add(u);const d=new jn(fs,hs,e,i);d.layers=this.layers,this.add(d);const h=new jn(fs,hs,e,i);h.layers=this.layers,this.add(h);const p=new jn(fs,hs,e,i);p.layers=this.layers,this.add(p);const m=new jn(fs,hs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(y,g,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class d0 extends Fn{constructor(e,i,r,l,u,d,h,p,m,_){e=e!==void 0?e:[],i=i!==void 0?i:xs,super(e,i,r,l,u,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _x extends gr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?vn:oi),this.texture=new d0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ba(5,5,5),u=new ta({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Oa});u.uniforms.tEquirect.value=i;const d=new zn(l,u),h=i.minFilter;return i.minFilter===hr&&(i.minFilter=Pn),new gx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const rh=new Y,vx=new Y,Sx=new ve;class Ua{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rh.subVectors(r,i).cross(vx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Sx.getNormalMatrix(e),l=this.coplanarPoint(rh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Ec,oc=new Y;class Nh{constructor(e=new Ua,i=new Ua,r=new Ua,l=new Ua,u=new Ua,d=new Ua){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],_=l[5],y=l[6],g=l[7],M=l[8],b=l[9],w=l[10],S=l[11],v=l[12],B=l[13],L=l[14],P=l[15];if(r[0].setComponents(p-u,g-m,S-M,P-v).normalize(),r[1].setComponents(p+u,g+m,S+M,P+v).normalize(),r[2].setComponents(p+d,g+_,S+b,P+B).normalize(),r[3].setComponents(p-d,g-_,S-b,P-B).normalize(),r[4].setComponents(p-h,g-y,S-w,P-L).normalize(),i===Ji)r[5].setComponents(p+h,g+y,S+w,P+L).normalize();else if(i===vc)r[5].setComponents(h,y,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(oc.x=l.normal.x>0?e.max.x:e.min.x,oc.y=l.normal.y>0?e.max.y:e.min.y,oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function yx(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,_){const y=m.array,g=m.usage,M=y.byteLength,b=o.createBuffer();o.bindBuffer(_,b),o.bufferData(_,y,g),m.onUploadCallback();let w;if(y instanceof Float32Array)w=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)w=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)w=o.SHORT;else if(y instanceof Uint32Array)w=o.UNSIGNED_INT;else if(y instanceof Int32Array)w=o.INT;else if(y instanceof Int8Array)w=o.BYTE;else if(y instanceof Uint8Array)w=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)w=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:b,type:w,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,_,y){const g=_.array,M=_._updateRange,b=_.updateRanges;if(o.bindBuffer(y,m),M.count===-1&&b.length===0&&o.bufferSubData(y,0,g),b.length!==0){for(let w=0,S=b.length;w<S;w++){const v=b[w];i?o.bufferSubData(y,v.start*g.BYTES_PER_ELEMENT,g,v.start,v.count):o.bufferSubData(y,v.start*g.BYTES_PER_ELEMENT,g.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(y,M.offset*g.BYTES_PER_ELEMENT,g,M.offset,M.count):o.bufferSubData(y,M.offset*g.BYTES_PER_ELEMENT,g.subarray(M.offset,M.offset+M.count)),M.count=-1),_.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=r.get(m);_&&(o.deleteBuffer(_.buffer),r.delete(m))}function p(m,_){if(m.isGLBufferAttribute){const g=r.get(m);(!g||g.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,l(m,_));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,_),y.version=m.version}}return{get:d,remove:h,update:p}}class bc extends Ci{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,y=e/h,g=i/p,M=[],b=[],w=[],S=[];for(let v=0;v<_;v++){const B=v*g-d;for(let L=0;L<m;L++){const P=L*y-u;b.push(P,-B,0),w.push(0,0,1),S.push(L/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let B=0;B<h;B++){const L=B+m*v,P=B+m*(v+1),k=B+1+m*(v+1),H=B+1+m*v;M.push(L,P,H),M.push(P,k,H)}this.setIndex(M),this.setAttribute("position",new li(b,3)),this.setAttribute("normal",new li(w,3)),this.setAttribute("uv",new li(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ax=`#ifdef USE_ALPHATEST
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
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
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
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qx=`vec3 transformedNormal = objectNormal;
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
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`
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
}`,$x=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,cM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,xM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
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
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PM=`#ifdef USE_MORPHNORMALS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
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
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,wE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,PE=`uniform vec3 diffuse;
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
}`,zE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,IE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,kE=`#define PHONG
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
}`,WE=`#define STANDARD
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
}`,XE=`#define STANDARD
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
}`,qE=`#define TOON
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
}`,YE=`#define TOON
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
}`,jE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:xx,alphahash_pars_fragment:Mx,alphamap_fragment:Ex,alphamap_pars_fragment:Tx,alphatest_fragment:bx,alphatest_pars_fragment:Ax,aomap_fragment:Rx,aomap_pars_fragment:wx,batching_pars_vertex:Cx,batching_vertex:Dx,begin_vertex:Lx,beginnormal_vertex:Ux,bsdfs:Nx,iridescence_fragment:Ox,bumpmap_pars_fragment:Px,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ix,color_fragment:Hx,color_pars_fragment:Gx,color_pars_vertex:Vx,color_vertex:kx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Yx,displacementmap_vertex:jx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Kx,colorspace_fragment:Qx,colorspace_pars_fragment:Jx,envmap_fragment:$x,envmap_common_pars_fragment:tM,envmap_pars_fragment:eM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:pM,envmap_vertex:iM,fog_vertex:aM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:lM,lightmap_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:hM,lights_pars_begin:dM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:SM,lights_physical_pars_fragment:yM,lights_fragment_begin:xM,lights_fragment_maps:MM,lights_fragment_end:EM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:RM,map_fragment:wM,map_pars_fragment:CM,map_particle_fragment:DM,map_particle_pars_fragment:LM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:NM,morphcolor_vertex:OM,morphnormal_vertex:PM,morphtarget_pars_vertex:zM,morphtarget_vertex:BM,normal_fragment_begin:FM,normal_fragment_maps:IM,normal_pars_fragment:HM,normal_pars_vertex:GM,normal_vertex:VM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:YM,opaque_fragment:jM,packing:ZM,premultiplied_alpha_fragment:KM,project_vertex:QM,dithering_fragment:JM,dithering_pars_fragment:$M,roughnessmap_fragment:tE,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:aE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:_E,uv_vertex:vE,worldpos_vertex:SE,background_vert:yE,background_frag:xE,backgroundCube_vert:ME,backgroundCube_frag:EE,cube_vert:TE,cube_frag:bE,depth_vert:AE,depth_frag:RE,distanceRGBA_vert:wE,distanceRGBA_frag:CE,equirect_vert:DE,equirect_frag:LE,linedashed_vert:UE,linedashed_frag:NE,meshbasic_vert:OE,meshbasic_frag:PE,meshlambert_vert:zE,meshlambert_frag:BE,meshmatcap_vert:FE,meshmatcap_frag:IE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:VE,meshphong_frag:kE,meshphysical_vert:WE,meshphysical_frag:XE,meshtoon_vert:qE,meshtoon_frag:YE,points_vert:jE,points_frag:ZE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:$E},Ut={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Dn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Dn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Dn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Dn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Dn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Dn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Dn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Dn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Dn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Dn([Ut.lights,Ut.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const lc={r:0,b:0,g:0};function tT(o,e,i,r,l,u,d){const h=new xe(0);let p=u===!0?0:1,m,_,y=null,g=0,M=null;function b(S,v){let B=!1,L=v.isScene===!0?v.background:null;L&&L.isTexture&&(L=(v.backgroundBlurriness>0?i:e).get(L)),L===null?w(h,p):L&&L.isColor&&(w(L,1),B=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||B)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===xc)?(_===void 0&&(_=new zn(new Ba(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:Ts(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,H,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.toneMapped=Le.getTransfer(L.colorSpace)!==Be,(y!==L||g!==L.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,y=L,g=L.version,M=o.toneMapping),_.layers.enableAll(),S.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new zn(new bc(2,2),new ta({name:"BackgroundMaterial",uniforms:Ts(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=Le.getTransfer(L.colorSpace)!==Be,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||g!==L.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=L,g=L.version,M=o.toneMapping),m.layers.enableAll(),S.unshift(m,m.geometry,m.material,0,0,null))}function w(S,v){S.getRGB(lc,f0(o)),r.buffers.color.setClear(lc.r,lc.g,lc.b,v,d)}return{getClearColor:function(){return h},setClearColor:function(S,v=1){h.set(S),p=v,w(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(S){p=S,w(h,p)},render:b}}function eT(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},p=S(null);let m=p,_=!1;function y(G,Z,I,J,it){let ht=!1;if(d){const C=w(J,I,Z);m!==C&&(m=C,M(m.object)),ht=v(G,J,I,it),ht&&B(G,J,I,it)}else{const C=Z.wireframe===!0;(m.geometry!==J.id||m.program!==I.id||m.wireframe!==C)&&(m.geometry=J.id,m.program=I.id,m.wireframe=C,ht=!0)}it!==null&&i.update(it,o.ELEMENT_ARRAY_BUFFER),(ht||_)&&(_=!1,ut(G,Z,I,J),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(it).buffer))}function g(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(G){return r.isWebGL2?o.bindVertexArray(G):u.bindVertexArrayOES(G)}function b(G){return r.isWebGL2?o.deleteVertexArray(G):u.deleteVertexArrayOES(G)}function w(G,Z,I){const J=I.wireframe===!0;let it=h[G.id];it===void 0&&(it={},h[G.id]=it);let ht=it[Z.id];ht===void 0&&(ht={},it[Z.id]=ht);let C=ht[J];return C===void 0&&(C=S(g()),ht[J]=C),C}function S(G){const Z=[],I=[],J=[];for(let it=0;it<l;it++)Z[it]=0,I[it]=0,J[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:I,attributeDivisors:J,object:G,attributes:{},index:null}}function v(G,Z,I,J){const it=m.attributes,ht=Z.attributes;let C=0;const j=I.getAttributes();for(const pt in j)if(j[pt].location>=0){const W=it[pt];let dt=ht[pt];if(dt===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(dt=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(dt=G.instanceColor)),W===void 0||W.attribute!==dt||dt&&W.data!==dt.data)return!0;C++}return m.attributesNum!==C||m.index!==J}function B(G,Z,I,J){const it={},ht=Z.attributes;let C=0;const j=I.getAttributes();for(const pt in j)if(j[pt].location>=0){let W=ht[pt];W===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(W=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(W=G.instanceColor));const dt={};dt.attribute=W,W&&W.data&&(dt.data=W.data),it[pt]=dt,C++}m.attributes=it,m.attributesNum=C,m.index=J}function L(){const G=m.newAttributes;for(let Z=0,I=G.length;Z<I;Z++)G[Z]=0}function P(G){k(G,0)}function k(G,Z){const I=m.newAttributes,J=m.enabledAttributes,it=m.attributeDivisors;I[G]=1,J[G]===0&&(o.enableVertexAttribArray(G),J[G]=1),it[G]!==Z&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Z),it[G]=Z)}function H(){const G=m.newAttributes,Z=m.enabledAttributes;for(let I=0,J=Z.length;I<J;I++)Z[I]!==G[I]&&(o.disableVertexAttribArray(I),Z[I]=0)}function F(G,Z,I,J,it,ht,C){C===!0?o.vertexAttribIPointer(G,Z,I,it,ht):o.vertexAttribPointer(G,Z,I,J,it,ht)}function ut(G,Z,I,J){if(r.isWebGL2===!1&&(G.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const it=J.attributes,ht=I.getAttributes(),C=Z.defaultAttributeValues;for(const j in ht){const pt=ht[j];if(pt.location>=0){let bt=it[j];if(bt===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor)),bt!==void 0){const W=bt.normalized,dt=bt.itemSize,xt=i.get(bt);if(xt===void 0)continue;const It=xt.buffer,Dt=xt.type,Lt=xt.bytesPerElement,Yt=r.isWebGL2===!0&&(Dt===o.INT||Dt===o.UNSIGNED_INT||bt.gpuType===q_);if(bt.isInterleavedBufferAttribute){const Kt=bt.data,tt=Kt.stride,ie=bt.offset;if(Kt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<pt.locationSize;Xt++)k(pt.location+Xt,Kt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let Xt=0;Xt<pt.locationSize;Xt++)P(pt.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,It);for(let Xt=0;Xt<pt.locationSize;Xt++)F(pt.location+Xt,dt/pt.locationSize,Dt,W,tt*Lt,(ie+dt/pt.locationSize*Xt)*Lt,Yt)}else{if(bt.isInstancedBufferAttribute){for(let Kt=0;Kt<pt.locationSize;Kt++)k(pt.location+Kt,bt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Kt=0;Kt<pt.locationSize;Kt++)P(pt.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,It);for(let Kt=0;Kt<pt.locationSize;Kt++)F(pt.location+Kt,dt/pt.locationSize,Dt,W,dt*Lt,dt/pt.locationSize*Kt*Lt,Yt)}}else if(C!==void 0){const W=C[j];if(W!==void 0)switch(W.length){case 2:o.vertexAttrib2fv(pt.location,W);break;case 3:o.vertexAttrib3fv(pt.location,W);break;case 4:o.vertexAttrib4fv(pt.location,W);break;default:o.vertexAttrib1fv(pt.location,W)}}}}H()}function K(){Q();for(const G in h){const Z=h[G];for(const I in Z){const J=Z[I];for(const it in J)b(J[it].object),delete J[it];delete Z[I]}delete h[G]}}function T(G){if(h[G.id]===void 0)return;const Z=h[G.id];for(const I in Z){const J=Z[I];for(const it in J)b(J[it].object),delete J[it];delete Z[I]}delete h[G.id]}function U(G){for(const Z in h){const I=h[Z];if(I[G.id]===void 0)continue;const J=I[G.id];for(const it in J)b(J[it].object),delete J[it];delete I[G.id]}}function Q(){vt(),_=!0,m!==p&&(m=p,M(m.object))}function vt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:Q,resetDefaultState:vt,dispose:K,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:L,enableAttribute:P,disableUnusedAttributes:H}}function nT(o,e,i,r){const l=r.isWebGL2;let u;function d(_){u=_}function h(_,y){o.drawArrays(u,_,y),i.update(y,u,1)}function p(_,y,g){if(g===0)return;let M,b;if(l)M=o,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](u,_,y,g),i.update(y,u,g)}function m(_,y,g){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g;b++)this.render(_[b],y[b]);else{M.multiDrawArraysWEBGL(u,_,0,y,0,g);let b=0;for(let w=0;w<g;w++)b+=y[w];i.update(b,u,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function iT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||e.has("WEBGL_draw_buffers"),_=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),w=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=d||e.has("OES_texture_float"),k=L&&P,H=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:_,maxTextures:y,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:B,vertexTextures:L,floatFragmentTextures:P,floatVertexTextures:k,maxSamples:H}}function aT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ua,h=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||l;return l=g,r=y.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,g){i=_(y,g,0)},this.setState=function(y,g,M){const b=y.clippingPlanes,w=y.clipIntersection,S=y.clipShadows,v=o.get(y);if(!l||b===null||b.length===0||u&&!S)u?_(null):m();else{const B=u?0:r,L=B*4;let P=v.clippingState||null;p.value=P,P=_(b,g,L,M);for(let k=0;k!==L;++k)P[k]=i[k];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,g,M,b){const w=y!==null?y.length:0;let S=null;if(w!==0){if(S=p.value,b!==!0||S===null){const v=M+w*4,B=g.matrixWorldInverse;h.getNormalMatrix(B),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,P=M;L!==w;++L,P+=4)d.copy(y[L]).applyMatrix4(B,h),d.normal.toArray(S,P),S[P+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function rT(o){let e=new WeakMap;function i(d,h){return h===vh?d.mapping=xs:h===Sh&&(d.mapping=Ms),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===vh||h===Sh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new _x(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class m0 extends h0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ms=4,f_=[.125,.215,.35,.446,.526,.582],fr=20,sh=new m0,h_=new xe;let oh=null,lh=0,ch=0;const cr=(1+Math.sqrt(5))/2,ds=1/cr,d_=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,cr,ds),new Y(0,cr,-ds),new Y(ds,0,cr),new Y(-ds,0,cr),new Y(cr,ds,0),new Y(-cr,ds,0)];class p_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,lh,ch),e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Po,format:vi,colorSpace:$i,depthBuffer:!1},l=m_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(u)),this._blurMaterial=oT(u,e,i)}return l}_compileMaterial(e){const i=new zn(this._lodPlanes[0],e);this._renderer.compile(i,sh)}_sceneToCubeUV(e,i,r,l){const h=new jn(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,g=_.toneMapping;_.getClearColor(h_),_.toneMapping=Pa,_.autoClear=!1;const M=new l0({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),b=new zn(new Ba,M);let w=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,w=!0):(M.color.copy(h_),w=!0);for(let v=0;v<6;v++){const B=v%3;B===0?(h.up.set(0,p[v],0),h.lookAt(m[v],0,0)):B===1?(h.up.set(0,0,p[v]),h.lookAt(0,m[v],0)):(h.up.set(0,p[v],0),h.lookAt(0,0,m[v]));const L=this._cubeSize;cc(l,B*L,v>2?L:0,L,L),_.setRenderTarget(l),w&&_.render(b,h),_.render(e,h)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=g,_.autoClear=y,e.background=S}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new zn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;cc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,sh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=d_[(l-1)%d_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new zn(this._lodPlanes[l],m),g=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*fr-1),w=u/b,S=isFinite(u)?1+Math.floor(_*w):fr;S>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fr}`);const v=[];let B=0;for(let F=0;F<fr;++F){const ut=F/w,K=Math.exp(-ut*ut/2);v.push(K),F===0?B+=K:F<S&&(B+=2*K)}for(let F=0;F<v.length;F++)v[F]=v[F]/B;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=b,g.mipInt.value=L-r;const P=this._sizeLods[l],k=3*P*(l>L-ms?l-L+ms:0),H=4*(this._cubeSize-P);cc(i,k,H,3*P,2*P),p.setRenderTarget(i),p.render(y,sh)}}function sT(o){const e=[],i=[],r=[];let l=o;const u=o-ms+1+f_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-ms?p=f_[d-o+ms-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),_=-m,y=1+m,g=[_,_,y,_,y,y,_,_,y,y,_,y],M=6,b=6,w=3,S=2,v=1,B=new Float32Array(w*b*M),L=new Float32Array(S*b*M),P=new Float32Array(v*b*M);for(let H=0;H<M;H++){const F=H%3*2/3-1,ut=H>2?0:-1,K=[F,ut,0,F+2/3,ut,0,F+2/3,ut+1,0,F,ut,0,F+2/3,ut+1,0,F,ut+1,0];B.set(K,w*b*H),L.set(g,S*b*H);const T=[H,H,H,H,H,H];P.set(T,v*b*H)}const k=new Ci;k.setAttribute("position",new wi(B,w)),k.setAttribute("uv",new wi(L,S)),k.setAttribute("faceIndex",new wi(P,v)),e.push(k),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function m_(o,e,i){const r=new gr(o,e,i);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function oT(o,e,i){const r=new Float32Array(fr),l=new Y(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function g_(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function __(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function lT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===vh||p===Sh,_=p===xs||p===Ms;if(m||_)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let y=e.get(h);return i===null&&(i=new p_(o)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),e.set(h,y),y.texture}else{if(e.has(h))return e.get(h).texture;{const y=h.image;if(m&&y&&y.height>0||_&&y&&l(y)){i===null&&(i=new p_(o));const g=m?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,g),h.addEventListener("dispose",u),g.texture}else return null}}}return h}function l(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function cT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function uT(o,e,i,r){const l={},u=new WeakMap;function d(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);for(const b in g.morphAttributes){const w=g.morphAttributes[b];for(let S=0,v=w.length;S<v;S++)e.remove(w[S])}g.removeEventListener("dispose",d),delete l[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function p(y){const g=y.attributes;for(const b in g)e.update(g[b],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const w=M[b];for(let S=0,v=w.length;S<v;S++)e.update(w[S],o.ARRAY_BUFFER)}}function m(y){const g=[],M=y.index,b=y.attributes.position;let w=0;if(M!==null){const B=M.array;w=M.version;for(let L=0,P=B.length;L<P;L+=3){const k=B[L+0],H=B[L+1],F=B[L+2];g.push(k,H,H,F,F,k)}}else if(b!==void 0){const B=b.array;w=b.version;for(let L=0,P=B.length/3-1;L<P;L+=3){const k=L+0,H=L+1,F=L+2;g.push(k,H,H,F,F,k)}}else return;const S=new(n0(g)?u0:c0)(g,1);S.version=w;const v=u.get(y);v&&e.remove(v),u.set(y,S)}function _(y){const g=u.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:h,update:p,getWireframeAttribute:_}}function fT(o,e,i,r){const l=r.isWebGL2;let u;function d(M){u=M}let h,p;function m(M){h=M.type,p=M.bytesPerElement}function _(M,b){o.drawElements(u,b,h,M*p),i.update(b,u,1)}function y(M,b,w){if(w===0)return;let S,v;if(l)S=o,v="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[v](u,b,h,M*p,w),i.update(b,u,w)}function g(M,b,w){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<w;v++)this.render(M[v]/p,b[v]);else{S.multiDrawElementsWEBGL(u,b,0,h,M,0,w);let v=0;for(let B=0;B<w;B++)v+=b[B];i.update(v,u,1)}}this.setMode=d,this.setIndex=m,this.render=_,this.renderInstances=y,this.renderMultiDraw=g}function hT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function dT(o,e){return o[0]-e[0]}function pT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function mT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new Fe,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,_,y){const g=m.morphTargetInfluences;if(e.isWebGL2===!0){const b=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=b!==void 0?b.length:0;let S=u.get(_);if(S===void 0||S.count!==w){let Z=function(){vt.dispose(),u.delete(_),_.removeEventListener("dispose",Z)};var M=Z;S!==void 0&&S.texture.dispose();const L=_.morphAttributes.position!==void 0,P=_.morphAttributes.normal!==void 0,k=_.morphAttributes.color!==void 0,H=_.morphAttributes.position||[],F=_.morphAttributes.normal||[],ut=_.morphAttributes.color||[];let K=0;L===!0&&(K=1),P===!0&&(K=2),k===!0&&(K=3);let T=_.attributes.position.count*K,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Q=new Float32Array(T*U*4*w),vt=new r0(Q,T,U,w);vt.type=Qi,vt.needsUpdate=!0;const G=K*4;for(let I=0;I<w;I++){const J=H[I],it=F[I],ht=ut[I],C=T*U*4*I;for(let j=0;j<J.count;j++){const pt=j*G;L===!0&&(d.fromBufferAttribute(J,j),Q[C+pt+0]=d.x,Q[C+pt+1]=d.y,Q[C+pt+2]=d.z,Q[C+pt+3]=0),P===!0&&(d.fromBufferAttribute(it,j),Q[C+pt+4]=d.x,Q[C+pt+5]=d.y,Q[C+pt+6]=d.z,Q[C+pt+7]=0),k===!0&&(d.fromBufferAttribute(ht,j),Q[C+pt+8]=d.x,Q[C+pt+9]=d.y,Q[C+pt+10]=d.z,Q[C+pt+11]=ht.itemSize===4?d.w:1)}}S={count:w,texture:vt,size:new oe(T,U)},u.set(_,S),_.addEventListener("dispose",Z)}let v=0;for(let L=0;L<g.length;L++)v+=g[L];const B=_.morphTargetsRelative?1:1-v;y.getUniforms().setValue(o,"morphTargetBaseInfluence",B),y.getUniforms().setValue(o,"morphTargetInfluences",g),y.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const b=g===void 0?0:g.length;let w=r[_.id];if(w===void 0||w.length!==b){w=[];for(let P=0;P<b;P++)w[P]=[P,0];r[_.id]=w}for(let P=0;P<b;P++){const k=w[P];k[0]=P,k[1]=g[P]}w.sort(pT);for(let P=0;P<8;P++)P<b&&w[P][1]?(h[P][0]=w[P][0],h[P][1]=w[P][1]):(h[P][0]=Number.MAX_SAFE_INTEGER,h[P][1]=0);h.sort(dT);const S=_.morphAttributes.position,v=_.morphAttributes.normal;let B=0;for(let P=0;P<8;P++){const k=h[P],H=k[0],F=k[1];H!==Number.MAX_SAFE_INTEGER&&F?(S&&_.getAttribute("morphTarget"+P)!==S[H]&&_.setAttribute("morphTarget"+P,S[H]),v&&_.getAttribute("morphNormal"+P)!==v[H]&&_.setAttribute("morphNormal"+P,v[H]),l[P]=F,B+=F):(S&&_.hasAttribute("morphTarget"+P)===!0&&_.deleteAttribute("morphTarget"+P),v&&_.hasAttribute("morphNormal"+P)===!0&&_.deleteAttribute("morphNormal"+P),l[P]=0)}const L=_.morphTargetsRelative?1:1-B;y.getUniforms().setValue(o,"morphTargetBaseInfluence",L),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function gT(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const g=p.skeleton;l.get(g)!==m&&(g.update(),l.set(g,m))}return y}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class g0 extends Fn{constructor(e,i,r,l,u,d,h,p,m,_){if(_=_!==void 0?_:pr,_!==pr&&_!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===pr&&(r=Na),r===void 0&&_===Es&&(r=dr),super(null,l,u,d,h,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Ln,this.minFilter=p!==void 0?p:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const _0=new Fn,v0=new g0(1,1);v0.compareFunction=e0;const S0=new r0,y0=new tx,x0=new d0,v_=[],S_=[],y_=new Float32Array(16),x_=new Float32Array(9),M_=new Float32Array(4);function Rs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=v_[l];if(u===void 0&&(u=new Float32Array(l),v_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function on(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ac(o,e){let i=S_[e];i===void 0&&(i=new Int32Array(e),S_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function _T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2fv(this.addr,e),on(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(sn(i,e))return;o.uniform3fv(this.addr,e),on(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4fv(this.addr,e),on(i,e)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;M_.set(r),o.uniformMatrix2fv(this.addr,!1,M_),on(i,r)}}function MT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;x_.set(r),o.uniformMatrix3fv(this.addr,!1,x_),on(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;y_.set(r),o.uniformMatrix4fv(this.addr,!1,y_),on(i,r)}}function TT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2iv(this.addr,e),on(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3iv(this.addr,e),on(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4iv(this.addr,e),on(i,e)}}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2uiv(this.addr,e),on(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3uiv(this.addr,e),on(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4uiv(this.addr,e),on(i,e)}}function UT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?v0:_0;i.setTexture2D(e||u,l)}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||y0,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||x0,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||S0,l)}function zT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return ST;case 35666:return yT;case 35674:return xT;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return bT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return wT;case 36294:return CT;case 36295:return DT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function BT(o,e){o.uniform1fv(this.addr,e)}function FT(o,e){const i=Rs(e,this.size,2);o.uniform2fv(this.addr,i)}function IT(o,e){const i=Rs(e,this.size,3);o.uniform3fv(this.addr,i)}function HT(o,e){const i=Rs(e,this.size,4);o.uniform4fv(this.addr,i)}function GT(o,e){const i=Rs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function VT(o,e){const i=Rs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kT(o,e){const i=Rs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function WT(o,e){o.uniform1iv(this.addr,e)}function XT(o,e){o.uniform2iv(this.addr,e)}function qT(o,e){o.uniform3iv(this.addr,e)}function YT(o,e){o.uniform4iv(this.addr,e)}function jT(o,e){o.uniform1uiv(this.addr,e)}function ZT(o,e){o.uniform2uiv(this.addr,e)}function KT(o,e){o.uniform3uiv(this.addr,e)}function QT(o,e){o.uniform4uiv(this.addr,e)}function JT(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),on(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||_0,u[d])}function $T(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),on(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||y0,u[d])}function tb(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),on(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||x0,u[d])}function eb(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);sn(r,u)||(o.uniform1iv(this.addr,u),on(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||S0,u[d])}function nb(o){switch(o){case 5126:return BT;case 35664:return FT;case 35665:return IT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}class ib{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=zT(i.type)}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nb(i.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function E_(o,e){o.seq.push(e),o.map[e.id]=e}function sb(o,e,i){const r=o.name,l=r.length;for(uh.lastIndex=0;;){const u=uh.exec(r),d=uh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){E_(i,m===void 0?new ib(h,o,e):new ab(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new rb(h),E_(i,y)),i=y}}}class dc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);sb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function T_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const ob=37297;let lb=0;function cb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function ub(o){const e=Le.getPrimaries(Le.workingColorSpace),i=Le.getPrimaries(o);let r;switch(e===i?r="":e===_c&&i===gc?r="LinearDisplayP3ToLinearSRGB":e===gc&&i===_c&&(r="LinearSRGBToLinearDisplayP3"),o){case $i:case Mc:return[r,"LinearTransferOETF"];case vn:case Dh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function b_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+cb(o.getShaderSource(e),d)}else return l}function fb(o,e){const i=ub(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function hb(o,e){let i;switch(e){case fy:i="Linear";break;case hy:i="Reinhard";break;case dy:i="OptimizedCineon";break;case py:i="ACESFilmic";break;case gy:i="AgX";break;case my:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function db(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function pb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function mb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function gb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function gs(o){return o!==""}function A_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(o){return o.replace(_b,Sb)}const vb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sb(o,e){let i=de[e];if(i===void 0){const r=vb.get(e);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Th(i)}const yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(o){return o.replace(yb,xb)}function xb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Mb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Eb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xs:case Ms:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function bb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function Ab(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Rb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=Mb(i),m=Eb(i),_=Tb(i),y=bb(i),g=Ab(i),M=i.isWebGL2?"":db(i),b=pb(i),w=mb(u),S=l.createProgram();let v,B,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(gs).join(`
`),v.length>0&&(v+=`
`),B=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(gs).join(`
`),B.length>0&&(B+=`
`)):(v=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),B=[M,C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?de.tonemapping_pars_fragment:"",i.toneMapping!==Pa?hb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,fb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gs).join(`
`)),d=Th(d),d=A_(d,i),d=R_(d,i),h=Th(h),h=A_(h,i),h=R_(h,i),d=w_(d),h=w_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,B=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+B);const P=L+v+d,k=L+B+h,H=T_(l,l.VERTEX_SHADER,P),F=T_(l,l.FRAGMENT_SHADER,k);l.attachShader(S,H),l.attachShader(S,F),i.index0AttributeName!==void 0?l.bindAttribLocation(S,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(S,0,"position"),l.linkProgram(S);function ut(Q){if(o.debug.checkShaderErrors){const vt=l.getProgramInfoLog(S).trim(),G=l.getShaderInfoLog(H).trim(),Z=l.getShaderInfoLog(F).trim();let I=!0,J=!0;if(l.getProgramParameter(S,l.LINK_STATUS)===!1)if(I=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,S,H,F);else{const it=b_(l,H,"vertex"),ht=b_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(S,l.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+vt+`
`+it+`
`+ht)}else vt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",vt):(G===""||Z==="")&&(J=!1);J&&(Q.diagnostics={runnable:I,programLog:vt,vertexShader:{log:G,prefix:v},fragmentShader:{log:Z,prefix:B}})}l.deleteShader(H),l.deleteShader(F),K=new dc(l,S),T=gb(l,S)}let K;this.getUniforms=function(){return K===void 0&&ut(this),K};let T;this.getAttributes=function(){return T===void 0&&ut(this),T};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(S,ob)),U},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=H,this.fragmentShader=F,this}let wb=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Db(e),i.set(e,r)),r}}class Db{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Lb(o,e,i,r,l,u,d){const h=new s0,p=new Cb,m=new Set,_=[],y=l.isWebGL2,g=l.logarithmicDepthBuffer,M=l.vertexTextures;let b=l.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return m.add(T),T===0?"uv":`uv${T}`}function v(T,U,Q,vt,G){const Z=vt.fog,I=G.geometry,J=T.isMeshStandardMaterial?vt.environment:null,it=(T.isMeshStandardMaterial?i:e).get(T.envMap||J),ht=it&&it.mapping===xc?it.image.height:null,C=w[T.type];T.precision!==null&&(b=l.getMaxPrecision(T.precision),b!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",b,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,pt=j!==void 0?j.length:0;let bt=0;I.morphAttributes.position!==void 0&&(bt=1),I.morphAttributes.normal!==void 0&&(bt=2),I.morphAttributes.color!==void 0&&(bt=3);let W,dt,xt,It;if(C){const pe=bi[C];W=pe.vertexShader,dt=pe.fragmentShader}else W=T.vertexShader,dt=T.fragmentShader,p.update(T),xt=p.getVertexShaderID(T),It=p.getFragmentShaderID(T);const Dt=o.getRenderTarget(),Lt=G.isInstancedMesh===!0,Yt=G.isBatchedMesh===!0,Kt=!!T.map,tt=!!T.matcap,ie=!!it,Xt=!!T.aoMap,te=!!T.lightMap,Gt=!!T.bumpMap,Te=!!T.normalMap,gt=!!T.displacementMap,R=!!T.emissiveMap,E=!!T.metalnessMap,V=!!T.roughnessMap,ot=T.anisotropy>0,et=T.clearcoat>0,ct=T.iridescence>0,Ct=T.sheen>0,At=T.transmission>0,Et=ot&&!!T.anisotropyMap,Pt=et&&!!T.clearcoatMap,qt=et&&!!T.clearcoatNormalMap,St=et&&!!T.clearcoatRoughnessMap,se=ct&&!!T.iridescenceMap,re=ct&&!!T.iridescenceThicknessMap,Jt=Ct&&!!T.sheenColorMap,Nt=Ct&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,Ht=!!T.specularColorMap,O=!!T.specularIntensityMap,wt=At&&!!T.transmissionMap,Ot=At&&!!T.thicknessMap,Qt=!!T.gradientMap,N=!!T.alphaMap,Rt=T.alphaTest>0,Mt=!!T.alphaHash,zt=!!T.extensions;let Vt=Pa;T.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Vt=o.toneMapping);const Me={isWebGL2:y,shaderID:C,shaderType:T.type,shaderName:T.name,vertexShader:W,fragmentShader:dt,defines:T.defines,customVertexShaderID:xt,customFragmentShaderID:It,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:b,batching:Yt,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Dt===null?o.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:$i,alphaToCoverage:!!T.alphaToCoverage,map:Kt,matcap:tt,envMap:ie,envMapMode:ie&&it.mapping,envMapCubeUVHeight:ht,aoMap:Xt,lightMap:te,bumpMap:Gt,normalMap:Te,displacementMap:M&&gt,emissiveMap:R,normalMapObjectSpace:Te&&T.normalMapType===Ry,normalMapTangentSpace:Te&&T.normalMapType===t0,metalnessMap:E,roughnessMap:V,anisotropy:ot,anisotropyMap:Et,clearcoat:et,clearcoatMap:Pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:St,iridescence:ct,iridescenceMap:se,iridescenceThicknessMap:re,sheen:Ct,sheenColorMap:Jt,sheenRoughnessMap:Nt,specularMap:Ft,specularColorMap:Ht,specularIntensityMap:O,transmission:At,transmissionMap:wt,thicknessMap:Ot,gradientMap:Qt,opaque:T.transparent===!1&&T.blending===vs&&T.alphaToCoverage===!1,alphaMap:N,alphaTest:Rt,alphaHash:Mt,combine:T.combine,mapUv:Kt&&S(T.map.channel),aoMapUv:Xt&&S(T.aoMap.channel),lightMapUv:te&&S(T.lightMap.channel),bumpMapUv:Gt&&S(T.bumpMap.channel),normalMapUv:Te&&S(T.normalMap.channel),displacementMapUv:gt&&S(T.displacementMap.channel),emissiveMapUv:R&&S(T.emissiveMap.channel),metalnessMapUv:E&&S(T.metalnessMap.channel),roughnessMapUv:V&&S(T.roughnessMap.channel),anisotropyMapUv:Et&&S(T.anisotropyMap.channel),clearcoatMapUv:Pt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:qt&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:re&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&S(T.sheenRoughnessMap.channel),specularMapUv:Ft&&S(T.specularMap.channel),specularColorMapUv:Ht&&S(T.specularColorMap.channel),specularIntensityMapUv:O&&S(T.specularIntensityMap.channel),transmissionMapUv:wt&&S(T.transmissionMap.channel),thicknessMapUv:Ot&&S(T.thicknessMap.channel),alphaMapUv:N&&S(T.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||ot),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(Kt||N),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:bt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&Q.length>0,shadowMapType:o.shadowMap.type,toneMapping:Vt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Kt&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ai,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:zt&&T.extensions.derivatives===!0,extensionFragDepth:zt&&T.extensions.fragDepth===!0,extensionDrawBuffers:zt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:zt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:zt&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=m.has(1),Me.vertexUv2s=m.has(2),Me.vertexUv3s=m.has(3),m.clear(),Me}function B(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)U.push(Q),U.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(L(U,T),P(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function L(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function P(T,U){h.disableAll(),U.isWebGL2&&h.enable(0),U.supportsVertexTextures&&h.enable(1),U.instancing&&h.enable(2),U.instancingColor&&h.enable(3),U.matcap&&h.enable(4),U.envMap&&h.enable(5),U.normalMapObjectSpace&&h.enable(6),U.normalMapTangentSpace&&h.enable(7),U.clearcoat&&h.enable(8),U.iridescence&&h.enable(9),U.alphaTest&&h.enable(10),U.vertexColors&&h.enable(11),U.vertexAlphas&&h.enable(12),U.vertexUv1s&&h.enable(13),U.vertexUv2s&&h.enable(14),U.vertexUv3s&&h.enable(15),U.vertexTangents&&h.enable(16),U.anisotropy&&h.enable(17),U.alphaHash&&h.enable(18),U.batching&&h.enable(19),T.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.skinning&&h.enable(4),U.morphTargets&&h.enable(5),U.morphNormals&&h.enable(6),U.morphColors&&h.enable(7),U.premultipliedAlpha&&h.enable(8),U.shadowMapEnabled&&h.enable(9),U.useLegacyLights&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.alphaToCoverage&&h.enable(20),T.push(h.mask)}function k(T){const U=w[T.type];let Q;if(U){const vt=bi[U];Q=dx.clone(vt.uniforms)}else Q=T.uniforms;return Q}function H(T,U){let Q;for(let vt=0,G=_.length;vt<G;vt++){const Z=_[vt];if(Z.cacheKey===U){Q=Z,++Q.usedTimes;break}}return Q===void 0&&(Q=new Rb(o,U,T,u),_.push(Q)),Q}function F(T){if(--T.usedTimes===0){const U=_.indexOf(T);_[U]=_[_.length-1],_.pop(),T.destroy()}}function ut(T){p.remove(T)}function K(){p.dispose()}return{getParameters:v,getProgramCacheKey:B,getUniforms:k,acquireProgram:H,releaseProgram:F,releaseShaderCache:ut,programs:_,dispose:K}}function Ub(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Nb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function D_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function L_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(y,g,M,b,w,S){let v=o[e];return v===void 0?(v={id:y.id,object:y,geometry:g,material:M,groupOrder:b,renderOrder:y.renderOrder,z:w,group:S},o[e]=v):(v.id=y.id,v.object=y,v.geometry=g,v.material=M,v.groupOrder=b,v.renderOrder=y.renderOrder,v.z=w,v.group=S),e++,v}function h(y,g,M,b,w,S){const v=d(y,g,M,b,w,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(y,g,M,b,w,S){const v=d(y,g,M,b,w,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(y,g){i.length>1&&i.sort(y||Nb),r.length>1&&r.sort(g||D_),l.length>1&&l.sort(g||D_)}function _(){for(let y=e,g=o.length;y<g;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:_,sort:m}}function Ob(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new L_,o.set(r,[d])):l>=u.length?(d=new L_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Pb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Y,color:new xe};break;case"SpotLight":i={position:new Y,direction:new Y,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=i,i}}}function zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Bb=0;function Fb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ib(o,e){const i=new Pb,r=zb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)l.probe.push(new Y);const u=new Y,d=new Ze,h=new Ze;function p(_,y){let g=0,M=0,b=0;for(let Q=0;Q<9;Q++)l.probe[Q].set(0,0,0);let w=0,S=0,v=0,B=0,L=0,P=0,k=0,H=0,F=0,ut=0,K=0;_.sort(Fb);const T=y===!0?Math.PI:1;for(let Q=0,vt=_.length;Q<vt;Q++){const G=_[Q],Z=G.color,I=G.intensity,J=G.distance,it=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Z.r*I*T,M+=Z.g*I*T,b+=Z.b*I*T;else if(G.isLightProbe){for(let ht=0;ht<9;ht++)l.probe[ht].addScaledVector(G.sh.coefficients[ht],I);K++}else if(G.isDirectionalLight){const ht=i.get(G);if(ht.color.copy(G.color).multiplyScalar(G.intensity*T),G.castShadow){const C=G.shadow,j=r.get(G);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,l.directionalShadow[w]=j,l.directionalShadowMap[w]=it,l.directionalShadowMatrix[w]=G.shadow.matrix,P++}l.directional[w]=ht,w++}else if(G.isSpotLight){const ht=i.get(G);ht.position.setFromMatrixPosition(G.matrixWorld),ht.color.copy(Z).multiplyScalar(I*T),ht.distance=J,ht.coneCos=Math.cos(G.angle),ht.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ht.decay=G.decay,l.spot[v]=ht;const C=G.shadow;if(G.map&&(l.spotLightMap[F]=G.map,F++,C.updateMatrices(G),G.castShadow&&ut++),l.spotLightMatrix[v]=C.matrix,G.castShadow){const j=r.get(G);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,l.spotShadow[v]=j,l.spotShadowMap[v]=it,H++}v++}else if(G.isRectAreaLight){const ht=i.get(G);ht.color.copy(Z).multiplyScalar(I),ht.halfWidth.set(G.width*.5,0,0),ht.halfHeight.set(0,G.height*.5,0),l.rectArea[B]=ht,B++}else if(G.isPointLight){const ht=i.get(G);if(ht.color.copy(G.color).multiplyScalar(G.intensity*T),ht.distance=G.distance,ht.decay=G.decay,G.castShadow){const C=G.shadow,j=r.get(G);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,l.pointShadow[S]=j,l.pointShadowMap[S]=it,l.pointShadowMatrix[S]=G.shadow.matrix,k++}l.point[S]=ht,S++}else if(G.isHemisphereLight){const ht=i.get(G);ht.skyColor.copy(G.color).multiplyScalar(I*T),ht.groundColor.copy(G.groundColor).multiplyScalar(I*T),l.hemi[L]=ht,L++}}B>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ut.LTC_FLOAT_1,l.rectAreaLTC2=Ut.LTC_FLOAT_2):(l.rectAreaLTC1=Ut.LTC_HALF_1,l.rectAreaLTC2=Ut.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ut.LTC_FLOAT_1,l.rectAreaLTC2=Ut.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ut.LTC_HALF_1,l.rectAreaLTC2=Ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=g,l.ambient[1]=M,l.ambient[2]=b;const U=l.hash;(U.directionalLength!==w||U.pointLength!==S||U.spotLength!==v||U.rectAreaLength!==B||U.hemiLength!==L||U.numDirectionalShadows!==P||U.numPointShadows!==k||U.numSpotShadows!==H||U.numSpotMaps!==F||U.numLightProbes!==K)&&(l.directional.length=w,l.spot.length=v,l.rectArea.length=B,l.point.length=S,l.hemi.length=L,l.directionalShadow.length=P,l.directionalShadowMap.length=P,l.pointShadow.length=k,l.pointShadowMap.length=k,l.spotShadow.length=H,l.spotShadowMap.length=H,l.directionalShadowMatrix.length=P,l.pointShadowMatrix.length=k,l.spotLightMatrix.length=H+F-ut,l.spotLightMap.length=F,l.numSpotLightShadowsWithMaps=ut,l.numLightProbes=K,U.directionalLength=w,U.pointLength=S,U.spotLength=v,U.rectAreaLength=B,U.hemiLength=L,U.numDirectionalShadows=P,U.numPointShadows=k,U.numSpotShadows=H,U.numSpotMaps=F,U.numLightProbes=K,l.version=Bb++)}function m(_,y){let g=0,M=0,b=0,w=0,S=0;const v=y.matrixWorldInverse;for(let B=0,L=_.length;B<L;B++){const P=_[B];if(P.isDirectionalLight){const k=l.directional[g];k.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(v),g++}else if(P.isSpotLight){const k=l.spot[b];k.position.setFromMatrixPosition(P.matrixWorld),k.position.applyMatrix4(v),k.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(v),b++}else if(P.isRectAreaLight){const k=l.rectArea[w];k.position.setFromMatrixPosition(P.matrixWorld),k.position.applyMatrix4(v),h.identity(),d.copy(P.matrixWorld),d.premultiply(v),h.extractRotation(d),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),k.halfWidth.applyMatrix4(h),k.halfHeight.applyMatrix4(h),w++}else if(P.isPointLight){const k=l.point[M];k.position.setFromMatrixPosition(P.matrixWorld),k.position.applyMatrix4(v),M++}else if(P.isHemisphereLight){const k=l.hemi[S];k.direction.setFromMatrixPosition(P.matrixWorld),k.direction.transformDirection(v),S++}}}return{setup:p,setupView:m,state:l}}function U_(o,e){const i=new Ib(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(y){r.push(y)}function h(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function Hb(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let p;return h===void 0?(p=new U_(o,e),i.set(u,[p])):d>=h.length?(p=new U_(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class Gb extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vb extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
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
}`;function Xb(o,e,i){let r=new Nh;const l=new oe,u=new oe,d=new Fe,h=new Gb({depthPacking:Ay}),p=new Vb,m={},_=i.maxTextureSize,y={[Fa]:Bn,[Bn]:Fa,[Ai]:Ai},g=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:kb,fragmentShader:Wb}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ci;b.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new zn(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let v=this.type;this.render=function(H,F,ut){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const K=o.getRenderTarget(),T=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Oa),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const vt=v!==Ki&&this.type===Ki,G=v===Ki&&this.type!==Ki;for(let Z=0,I=H.length;Z<I;Z++){const J=H[Z],it=J.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;l.copy(it.mapSize);const ht=it.getFrameExtents();if(l.multiply(ht),u.copy(it.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ht.x),l.x=u.x*ht.x,it.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ht.y),l.y=u.y*ht.y,it.mapSize.y=u.y)),it.map===null||vt===!0||G===!0){const j=this.type!==Ki?{minFilter:Ln,magFilter:Ln}:{};it.map!==null&&it.map.dispose(),it.map=new gr(l.x,l.y,j),it.map.texture.name=J.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const C=it.getViewportCount();for(let j=0;j<C;j++){const pt=it.getViewport(j);d.set(u.x*pt.x,u.y*pt.y,u.x*pt.z,u.y*pt.w),Q.viewport(d),it.updateMatrices(J,j),r=it.getFrustum(),P(F,ut,it.camera,J,this.type)}it.isPointLightShadow!==!0&&this.type===Ki&&B(it,ut),it.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(K,T,U)};function B(H,F){const ut=e.update(w);g.defines.VSM_SAMPLES!==H.blurSamples&&(g.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new gr(l.x,l.y)),g.uniforms.shadow_pass.value=H.map.texture,g.uniforms.resolution.value=H.mapSize,g.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(F,null,ut,g,w,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(F,null,ut,M,w,null)}function L(H,F,ut,K){let T=null;const U=ut.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(U!==void 0)T=U;else if(T=ut.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Q=T.uuid,vt=F.uuid;let G=m[Q];G===void 0&&(G={},m[Q]=G);let Z=G[vt];Z===void 0&&(Z=T.clone(),G[vt]=Z,F.addEventListener("dispose",k)),T=Z}if(T.visible=F.visible,T.wireframe=F.wireframe,K===Ki?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:y[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,ut.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=o.properties.get(T);Q.light=ut}return T}function P(H,F,ut,K,T){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&T===Ki)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,H.matrixWorld);const vt=e.update(H),G=H.material;if(Array.isArray(G)){const Z=vt.groups;for(let I=0,J=Z.length;I<J;I++){const it=Z[I],ht=G[it.materialIndex];if(ht&&ht.visible){const C=L(H,ht,K,T);H.onBeforeShadow(o,H,F,ut,vt,C,it),o.renderBufferDirect(ut,null,vt,C,H,it),H.onAfterShadow(o,H,F,ut,vt,C,it)}}}else if(G.visible){const Z=L(H,G,K,T);H.onBeforeShadow(o,H,F,ut,vt,Z,null),o.renderBufferDirect(ut,null,vt,Z,H,null),H.onAfterShadow(o,H,F,ut,vt,Z,null)}}const Q=H.children;for(let vt=0,G=Q.length;vt<G;vt++)P(Q[vt],F,ut,K,T)}function k(H){H.target.removeEventListener("dispose",k);for(const ut in m){const K=m[ut],T=H.target.uuid;T in K&&(K[T].dispose(),delete K[T])}}}function qb(o,e,i){const r=i.isWebGL2;function l(){let N=!1;const Rt=new Fe;let Mt=null;const zt=new Fe(0,0,0,0);return{setMask:function(Vt){Mt!==Vt&&!N&&(o.colorMask(Vt,Vt,Vt,Vt),Mt=Vt)},setLocked:function(Vt){N=Vt},setClear:function(Vt,Me,pe,Re,qe){qe===!0&&(Vt*=Re,Me*=Re,pe*=Re),Rt.set(Vt,Me,pe,Re),zt.equals(Rt)===!1&&(o.clearColor(Vt,Me,pe,Re),zt.copy(Rt))},reset:function(){N=!1,Mt=null,zt.set(-1,0,0,0)}}}function u(){let N=!1,Rt=null,Mt=null,zt=null;return{setTest:function(Vt){Vt?Lt(o.DEPTH_TEST):Yt(o.DEPTH_TEST)},setMask:function(Vt){Rt!==Vt&&!N&&(o.depthMask(Vt),Rt=Vt)},setFunc:function(Vt){if(Mt!==Vt){switch(Vt){case ny:o.depthFunc(o.NEVER);break;case iy:o.depthFunc(o.ALWAYS);break;case ay:o.depthFunc(o.LESS);break;case pc:o.depthFunc(o.LEQUAL);break;case ry:o.depthFunc(o.EQUAL);break;case sy:o.depthFunc(o.GEQUAL);break;case oy:o.depthFunc(o.GREATER);break;case ly:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Mt=Vt}},setLocked:function(Vt){N=Vt},setClear:function(Vt){zt!==Vt&&(o.clearDepth(Vt),zt=Vt)},reset:function(){N=!1,Rt=null,Mt=null,zt=null}}}function d(){let N=!1,Rt=null,Mt=null,zt=null,Vt=null,Me=null,pe=null,Re=null,qe=null;return{setTest:function(ge){N||(ge?Lt(o.STENCIL_TEST):Yt(o.STENCIL_TEST))},setMask:function(ge){Rt!==ge&&!N&&(o.stencilMask(ge),Rt=ge)},setFunc:function(ge,Ie,ln){(Mt!==ge||zt!==Ie||Vt!==ln)&&(o.stencilFunc(ge,Ie,ln),Mt=ge,zt=Ie,Vt=ln)},setOp:function(ge,Ie,ln){(Me!==ge||pe!==Ie||Re!==ln)&&(o.stencilOp(ge,Ie,ln),Me=ge,pe=Ie,Re=ln)},setLocked:function(ge){N=ge},setClear:function(ge){qe!==ge&&(o.clearStencil(ge),qe=ge)},reset:function(){N=!1,Rt=null,Mt=null,zt=null,Vt=null,Me=null,pe=null,Re=null,qe=null}}}const h=new l,p=new u,m=new d,_=new WeakMap,y=new WeakMap;let g={},M={},b=new WeakMap,w=[],S=null,v=!1,B=null,L=null,P=null,k=null,H=null,F=null,ut=null,K=new xe(0,0,0),T=0,U=!1,Q=null,vt=null,G=null,Z=null,I=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,ht=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(C)[1]),it=ht>=1):C.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),it=ht>=2);let j=null,pt={};const bt=o.getParameter(o.SCISSOR_BOX),W=o.getParameter(o.VIEWPORT),dt=new Fe().fromArray(bt),xt=new Fe().fromArray(W);function It(N,Rt,Mt,zt){const Vt=new Uint8Array(4),Me=o.createTexture();o.bindTexture(N,Me),o.texParameteri(N,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(N,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let pe=0;pe<Mt;pe++)r&&(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)?o.texImage3D(Rt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(Rt+pe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Me}const Dt={};Dt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),Dt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Dt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Dt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Lt(o.DEPTH_TEST),p.setFunc(pc),gt(!1),R(hg),Lt(o.CULL_FACE),Gt(Oa);function Lt(N){g[N]!==!0&&(o.enable(N),g[N]=!0)}function Yt(N){g[N]!==!1&&(o.disable(N),g[N]=!1)}function Kt(N,Rt){return M[N]!==Rt?(o.bindFramebuffer(N,Rt),M[N]=Rt,r&&(N===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Rt),N===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function tt(N,Rt){let Mt=w,zt=!1;if(N)if(Mt=b.get(Rt),Mt===void 0&&(Mt=[],b.set(Rt,Mt)),N.isWebGLMultipleRenderTargets){const Vt=N.texture;if(Mt.length!==Vt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,pe=Vt.length;Me<pe;Me++)Mt[Me]=o.COLOR_ATTACHMENT0+Me;Mt.length=Vt.length,zt=!0}}else Mt[0]!==o.COLOR_ATTACHMENT0&&(Mt[0]=o.COLOR_ATTACHMENT0,zt=!0);else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,zt=!0);zt&&(i.isWebGL2?o.drawBuffers(Mt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function ie(N){return S!==N?(o.useProgram(N),S=N,!0):!1}const Xt={[ur]:o.FUNC_ADD,[GS]:o.FUNC_SUBTRACT,[VS]:o.FUNC_REVERSE_SUBTRACT};if(r)Xt[mg]=o.MIN,Xt[gg]=o.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Xt[mg]=N.MIN_EXT,Xt[gg]=N.MAX_EXT)}const te={[kS]:o.ZERO,[WS]:o.ONE,[XS]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[QS]:o.SRC_ALPHA_SATURATE,[ZS]:o.DST_COLOR,[YS]:o.DST_ALPHA,[qS]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[KS]:o.ONE_MINUS_DST_COLOR,[jS]:o.ONE_MINUS_DST_ALPHA,[JS]:o.CONSTANT_COLOR,[$S]:o.ONE_MINUS_CONSTANT_COLOR,[ty]:o.CONSTANT_ALPHA,[ey]:o.ONE_MINUS_CONSTANT_ALPHA};function Gt(N,Rt,Mt,zt,Vt,Me,pe,Re,qe,ge){if(N===Oa){v===!0&&(Yt(o.BLEND),v=!1);return}if(v===!1&&(Lt(o.BLEND),v=!0),N!==HS){if(N!==B||ge!==U){if((L!==ur||H!==ur)&&(o.blendEquation(o.FUNC_ADD),L=ur,H=ur),ge)switch(N){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}P=null,k=null,F=null,ut=null,K.set(0,0,0),T=0,B=N,U=ge}return}Vt=Vt||Rt,Me=Me||Mt,pe=pe||zt,(Rt!==L||Vt!==H)&&(o.blendEquationSeparate(Xt[Rt],Xt[Vt]),L=Rt,H=Vt),(Mt!==P||zt!==k||Me!==F||pe!==ut)&&(o.blendFuncSeparate(te[Mt],te[zt],te[Me],te[pe]),P=Mt,k=zt,F=Me,ut=pe),(Re.equals(K)===!1||qe!==T)&&(o.blendColor(Re.r,Re.g,Re.b,qe),K.copy(Re),T=qe),B=N,U=!1}function Te(N,Rt){N.side===Ai?Yt(o.CULL_FACE):Lt(o.CULL_FACE);let Mt=N.side===Bn;Rt&&(Mt=!Mt),gt(Mt),N.blending===vs&&N.transparent===!1?Gt(Oa):Gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),p.setFunc(N.depthFunc),p.setTest(N.depthTest),p.setMask(N.depthWrite),h.setMask(N.colorWrite);const zt=N.stencilWrite;m.setTest(zt),zt&&(m.setMask(N.stencilWriteMask),m.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),m.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Lt(o.SAMPLE_ALPHA_TO_COVERAGE):Yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function gt(N){Q!==N&&(N?o.frontFace(o.CW):o.frontFace(o.CCW),Q=N)}function R(N){N!==FS?(Lt(o.CULL_FACE),N!==vt&&(N===hg?o.cullFace(o.BACK):N===IS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Yt(o.CULL_FACE),vt=N}function E(N){N!==G&&(it&&o.lineWidth(N),G=N)}function V(N,Rt,Mt){N?(Lt(o.POLYGON_OFFSET_FILL),(Z!==Rt||I!==Mt)&&(o.polygonOffset(Rt,Mt),Z=Rt,I=Mt)):Yt(o.POLYGON_OFFSET_FILL)}function ot(N){N?Lt(o.SCISSOR_TEST):Yt(o.SCISSOR_TEST)}function et(N){N===void 0&&(N=o.TEXTURE0+J-1),j!==N&&(o.activeTexture(N),j=N)}function ct(N,Rt,Mt){Mt===void 0&&(j===null?Mt=o.TEXTURE0+J-1:Mt=j);let zt=pt[Mt];zt===void 0&&(zt={type:void 0,texture:void 0},pt[Mt]=zt),(zt.type!==N||zt.texture!==Rt)&&(j!==Mt&&(o.activeTexture(Mt),j=Mt),o.bindTexture(N,Rt||Dt[N]),zt.type=N,zt.texture=Rt)}function Ct(){const N=pt[j];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function At(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{o.texSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{o.texSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{o.texStorage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{o.texStorage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(N){dt.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function O(N){xt.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function wt(N,Rt){let Mt=y.get(Rt);Mt===void 0&&(Mt=new WeakMap,y.set(Rt,Mt));let zt=Mt.get(N);zt===void 0&&(zt=o.getUniformBlockIndex(Rt,N.name),Mt.set(N,zt))}function Ot(N,Rt){const zt=y.get(Rt).get(N);_.get(Rt)!==zt&&(o.uniformBlockBinding(Rt,zt,N.__bindingPointIndex),_.set(Rt,zt))}function Qt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},j=null,pt={},M={},b=new WeakMap,w=[],S=null,v=!1,B=null,L=null,P=null,k=null,H=null,F=null,ut=null,K=new xe(0,0,0),T=0,U=!1,Q=null,vt=null,G=null,Z=null,I=null,dt.set(0,0,o.canvas.width,o.canvas.height),xt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:Lt,disable:Yt,bindFramebuffer:Kt,drawBuffers:tt,useProgram:ie,setBlending:Gt,setMaterial:Te,setFlipSided:gt,setCullFace:R,setLineWidth:E,setPolygonOffset:V,setScissorTest:ot,activeTexture:et,bindTexture:ct,unbindTexture:Ct,compressedTexImage2D:At,compressedTexImage3D:Et,texImage2D:Nt,texImage3D:Ft,updateUBOMapping:wt,uniformBlockBinding:Ot,texStorage2D:re,texStorage3D:Jt,texSubImage2D:Pt,texSubImage3D:qt,compressedTexSubImage2D:St,compressedTexSubImage3D:se,scissor:Ht,viewport:O,reset:Qt}}function Yb(o,e,i,r,l,u,d){const h=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,E){return M?new OffscreenCanvas(R,E):yc("canvas")}function w(R,E,V,ot){let et=1;if((R.width>ot||R.height>ot)&&(et=ot/Math.max(R.width,R.height)),et<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ct=E?Sc:Math.floor,Ct=ct(et*R.width),At=ct(et*R.height);y===void 0&&(y=b(Ct,At));const Et=V?b(Ct,At):y;return Et.width=Ct,Et.height=At,Et.getContext("2d").drawImage(R,0,0,Ct,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ct+"x"+At+")."),Et}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Eh(R.width)&&Eh(R.height)}function v(R){return h?!1:R.wrapS!==_i||R.wrapT!==_i||R.minFilter!==Ln&&R.minFilter!==Pn}function B(R,E){return R.generateMipmaps&&E&&R.minFilter!==Ln&&R.minFilter!==Pn}function L(R){o.generateMipmap(R)}function P(R,E,V,ot,et=!1){if(h===!1)return E;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct=E;if(E===o.RED&&(V===o.FLOAT&&(ct=o.R32F),V===o.HALF_FLOAT&&(ct=o.R16F),V===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(ct=o.R8UI),V===o.UNSIGNED_SHORT&&(ct=o.R16UI),V===o.UNSIGNED_INT&&(ct=o.R32UI),V===o.BYTE&&(ct=o.R8I),V===o.SHORT&&(ct=o.R16I),V===o.INT&&(ct=o.R32I)),E===o.RG&&(V===o.FLOAT&&(ct=o.RG32F),V===o.HALF_FLOAT&&(ct=o.RG16F),V===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RGBA){const Ct=et?mc:Le.getTransfer(ot);V===o.FLOAT&&(ct=o.RGBA32F),V===o.HALF_FLOAT&&(ct=o.RGBA16F),V===o.UNSIGNED_BYTE&&(ct=Ct===Be?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function k(R,E,V){return B(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Ln&&R.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function H(R){return R===Ln||R===_g||R===Ro?o.NEAREST:o.LINEAR}function F(R){const E=R.target;E.removeEventListener("dispose",F),K(E),E.isVideoTexture&&_.delete(E)}function ut(R){const E=R.target;E.removeEventListener("dispose",ut),U(E)}function K(R){const E=r.get(R);if(E.__webglInit===void 0)return;const V=R.source,ot=g.get(V);if(ot){const et=ot[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(R),Object.keys(ot).length===0&&g.delete(V)}r.remove(R)}function T(R){const E=r.get(R);o.deleteTexture(E.__webglTexture);const V=R.source,ot=g.get(V);delete ot[E.__cacheKey],d.memory.textures--}function U(R){const E=R.texture,V=r.get(R),ot=r.get(E);if(ot.__webglTexture!==void 0&&(o.deleteTexture(ot.__webglTexture),d.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(V.__webglFramebuffer[et]))for(let ct=0;ct<V.__webglFramebuffer[et].length;ct++)o.deleteFramebuffer(V.__webglFramebuffer[et][ct]);else o.deleteFramebuffer(V.__webglFramebuffer[et]);V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[et])}else{if(Array.isArray(V.__webglFramebuffer))for(let et=0;et<V.__webglFramebuffer.length;et++)o.deleteFramebuffer(V.__webglFramebuffer[et]);else o.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let et=0,ct=E.length;et<ct;et++){const Ct=r.get(E[et]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),d.memory.textures--),r.remove(E[et])}r.remove(E),r.remove(R)}let Q=0;function vt(){Q=0}function G(){const R=Q;return R>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),Q+=1,R}function Z(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function I(R,E){const V=r.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(V,R,E);return}}i.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+E)}function J(R,E){const V=r.get(R);if(R.version>0&&V.__version!==R.version){dt(V,R,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+E)}function it(R,E){const V=r.get(R);if(R.version>0&&V.__version!==R.version){dt(V,R,E);return}i.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+E)}function ht(R,E){const V=r.get(R);if(R.version>0&&V.__version!==R.version){xt(V,R,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+E)}const C={[yh]:o.REPEAT,[_i]:o.CLAMP_TO_EDGE,[xh]:o.MIRRORED_REPEAT},j={[Ln]:o.NEAREST,[_g]:o.NEAREST_MIPMAP_NEAREST,[Ro]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},pt={[wy]:o.NEVER,[Oy]:o.ALWAYS,[Cy]:o.LESS,[e0]:o.LEQUAL,[Dy]:o.EQUAL,[Ny]:o.GEQUAL,[Ly]:o.GREATER,[Uy]:o.NOTEQUAL};function bt(R,E,V){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Bf||E.magFilter===Ro||E.magFilter===hr||E.minFilter===Pn||E.minFilter===Bf||E.minFilter===Ro||E.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(o.texParameteri(R,o.TEXTURE_WRAP_S,C[E.wrapS]),o.texParameteri(R,o.TEXTURE_WRAP_T,C[E.wrapT]),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,C[E.wrapR]),o.texParameteri(R,o.TEXTURE_MAG_FILTER,j[E.magFilter]),o.texParameteri(R,o.TEXTURE_MIN_FILTER,j[E.minFilter])):(o.texParameteri(R,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(R,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==_i||E.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,o.TEXTURE_MAG_FILTER,H(E.magFilter)),o.texParameteri(R,o.TEXTURE_MIN_FILTER,H(E.minFilter)),E.minFilter!==Ln&&E.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(R,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(R,o.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ot=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ln||E.minFilter!==Ro&&E.minFilter!==hr||E.type===Qi&&e.has("OES_texture_float_linear")===!1||h===!1&&E.type===Po&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(o.texParameterf(R,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function W(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",F));const ot=E.source;let et=g.get(ot);et===void 0&&(et={},g.set(ot,et));const ct=Z(E);if(ct!==R.__cacheKey){et[ct]===void 0&&(et[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,V=!0),et[ct].usedTimes++;const Ct=et[R.__cacheKey];Ct!==void 0&&(et[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&T(E)),R.__cacheKey=ct,R.__webglTexture=et[ct].texture}return V}function dt(R,E,V){let ot=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=o.TEXTURE_3D);const et=W(R,E),ct=E.source;i.bindTexture(ot,R.__webglTexture,o.TEXTURE0+V);const Ct=r.get(ct);if(ct.version!==Ct.__version||et===!0){i.activeTexture(o.TEXTURE0+V);const At=Le.getPrimaries(Le.workingColorSpace),Et=E.colorSpace===oi?null:Le.getPrimaries(E.colorSpace),Pt=E.colorSpace===oi||At===Et?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const qt=v(E)&&S(E.image)===!1;let St=w(E.image,qt,!1,l.maxTextureSize);St=gt(E,St);const se=S(St)||h,re=u.convert(E.format,E.colorSpace);let Jt=u.convert(E.type),Nt=P(E.internalFormat,re,Jt,E.colorSpace,E.isVideoTexture);bt(ot,E,se);let Ft;const Ht=E.mipmaps,O=h&&E.isVideoTexture!==!0&&Nt!==J_,wt=Ct.__version===void 0||et===!0,Ot=ct.dataReady,Qt=k(E,St,se);if(E.isDepthTexture)Nt=o.DEPTH_COMPONENT,h?E.type===Qi?Nt=o.DEPTH_COMPONENT32F:E.type===Na?Nt=o.DEPTH_COMPONENT24:E.type===dr?Nt=o.DEPTH24_STENCIL8:Nt=o.DEPTH_COMPONENT16:E.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===pr&&Nt===o.DEPTH_COMPONENT&&E.type!==Ch&&E.type!==Na&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Na,Jt=u.convert(E.type)),E.format===Es&&Nt===o.DEPTH_COMPONENT&&(Nt=o.DEPTH_STENCIL,E.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=dr,Jt=u.convert(E.type))),wt&&(O?i.texStorage2D(o.TEXTURE_2D,1,Nt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Nt,St.width,St.height,0,re,Jt,null));else if(E.isDataTexture)if(Ht.length>0&&se){O&&wt&&i.texStorage2D(o.TEXTURE_2D,Qt,Nt,Ht[0].width,Ht[0].height);for(let N=0,Rt=Ht.length;N<Rt;N++)Ft=Ht[N],O?Ot&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,Ft.width,Ft.height,re,Jt,Ft.data):i.texImage2D(o.TEXTURE_2D,N,Nt,Ft.width,Ft.height,0,re,Jt,Ft.data);E.generateMipmaps=!1}else O?(wt&&i.texStorage2D(o.TEXTURE_2D,Qt,Nt,St.width,St.height),Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St.width,St.height,re,Jt,St.data)):i.texImage2D(o.TEXTURE_2D,0,Nt,St.width,St.height,0,re,Jt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,Nt,Ht[0].width,Ht[0].height,St.depth);for(let N=0,Rt=Ht.length;N<Rt;N++)Ft=Ht[N],E.format!==vi?re!==null?O?Ot&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,N,0,0,0,Ft.width,Ft.height,St.depth,re,Ft.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,N,Nt,Ft.width,Ft.height,St.depth,0,Ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,N,0,0,0,Ft.width,Ft.height,St.depth,re,Jt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,N,Nt,Ft.width,Ft.height,St.depth,0,re,Jt,Ft.data)}else{O&&wt&&i.texStorage2D(o.TEXTURE_2D,Qt,Nt,Ht[0].width,Ht[0].height);for(let N=0,Rt=Ht.length;N<Rt;N++)Ft=Ht[N],E.format!==vi?re!==null?O?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,N,0,0,Ft.width,Ft.height,re,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,N,Nt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ot&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,Ft.width,Ft.height,re,Jt,Ft.data):i.texImage2D(o.TEXTURE_2D,N,Nt,Ft.width,Ft.height,0,re,Jt,Ft.data)}else if(E.isDataArrayTexture)O?(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,Nt,St.width,St.height,St.depth),Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,re,Jt,St.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,St.width,St.height,St.depth,0,re,Jt,St.data);else if(E.isData3DTexture)O?(wt&&i.texStorage3D(o.TEXTURE_3D,Qt,Nt,St.width,St.height,St.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,re,Jt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,St.width,St.height,St.depth,0,re,Jt,St.data);else if(E.isFramebufferTexture){if(wt)if(O)i.texStorage2D(o.TEXTURE_2D,Qt,Nt,St.width,St.height);else{let N=St.width,Rt=St.height;for(let Mt=0;Mt<Qt;Mt++)i.texImage2D(o.TEXTURE_2D,Mt,Nt,N,Rt,0,re,Jt,null),N>>=1,Rt>>=1}}else if(Ht.length>0&&se){O&&wt&&i.texStorage2D(o.TEXTURE_2D,Qt,Nt,Ht[0].width,Ht[0].height);for(let N=0,Rt=Ht.length;N<Rt;N++)Ft=Ht[N],O?Ot&&i.texSubImage2D(o.TEXTURE_2D,N,0,0,re,Jt,Ft):i.texImage2D(o.TEXTURE_2D,N,Nt,re,Jt,Ft);E.generateMipmaps=!1}else O?(wt&&i.texStorage2D(o.TEXTURE_2D,Qt,Nt,St.width,St.height),Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,re,Jt,St)):i.texImage2D(o.TEXTURE_2D,0,Nt,re,Jt,St);B(E,se)&&L(ot),Ct.__version=ct.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function xt(R,E,V){if(E.image.length!==6)return;const ot=W(R,E),et=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+V);const ct=r.get(et);if(et.version!==ct.__version||ot===!0){i.activeTexture(o.TEXTURE0+V);const Ct=Le.getPrimaries(Le.workingColorSpace),At=E.colorSpace===oi?null:Le.getPrimaries(E.colorSpace),Et=E.colorSpace===oi||Ct===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let N=0;N<6;N++)!Pt&&!qt?St[N]=w(E.image[N],!1,!0,l.maxCubemapSize):St[N]=qt?E.image[N].image:E.image[N],St[N]=gt(E,St[N]);const se=St[0],re=S(se)||h,Jt=u.convert(E.format,E.colorSpace),Nt=u.convert(E.type),Ft=P(E.internalFormat,Jt,Nt,E.colorSpace),Ht=h&&E.isVideoTexture!==!0,O=ct.__version===void 0||ot===!0,wt=et.dataReady;let Ot=k(E,se,re);bt(o.TEXTURE_CUBE_MAP,E,re);let Qt;if(Pt){Ht&&O&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,Ft,se.width,se.height);for(let N=0;N<6;N++){Qt=St[N].mipmaps;for(let Rt=0;Rt<Qt.length;Rt++){const Mt=Qt[Rt];E.format!==vi?Jt!==null?Ht?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt,0,0,Mt.width,Mt.height,Jt,Mt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt,0,0,Mt.width,Mt.height,Jt,Nt,Mt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt,Ft,Mt.width,Mt.height,0,Jt,Nt,Mt.data)}}}else{Qt=E.mipmaps,Ht&&O&&(Qt.length>0&&Ot++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,Ft,St[0].width,St[0].height));for(let N=0;N<6;N++)if(qt){Ht?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,St[N].width,St[N].height,Jt,Nt,St[N].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ft,St[N].width,St[N].height,0,Jt,Nt,St[N].data);for(let Rt=0;Rt<Qt.length;Rt++){const zt=Qt[Rt].image[N].image;Ht?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt+1,0,0,zt.width,zt.height,Jt,Nt,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt+1,Ft,zt.width,zt.height,0,Jt,Nt,zt.data)}}else{Ht?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Jt,Nt,St[N]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ft,Jt,Nt,St[N]);for(let Rt=0;Rt<Qt.length;Rt++){const Mt=Qt[Rt];Ht?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt+1,0,0,Jt,Nt,Mt.image[N]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt+1,Ft,Jt,Nt,Mt.image[N])}}}B(E,re)&&L(o.TEXTURE_CUBE_MAP),ct.__version=et.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function It(R,E,V,ot,et,ct){const Ct=u.convert(V.format,V.colorSpace),At=u.convert(V.type),Et=P(V.internalFormat,Ct,At,V.colorSpace);if(!r.get(E).__hasExternalTextures){const qt=Math.max(1,E.width>>ct),St=Math.max(1,E.height>>ct);et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?i.texImage3D(et,ct,Et,qt,St,E.depth,0,Ct,At,null):i.texImage2D(et,ct,Et,qt,St,0,Ct,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,R),Gt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ot,et,r.get(V).__webglTexture,0,te(E)):(et===o.TEXTURE_2D||et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ot,et,r.get(V).__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(R,E,V){if(o.bindRenderbuffer(o.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ot=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(V||Gt(E)){const et=E.depthTexture;et&&et.isDepthTexture&&(et.type===Qi?ot=o.DEPTH_COMPONENT32F:et.type===Na&&(ot=o.DEPTH_COMPONENT24));const ct=te(E);Gt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ct,ot,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ct,ot,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ot=te(E);V&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,o.DEPTH24_STENCIL8,E.width,E.height):Gt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ot,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,R)}else{const ot=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0;et<ot.length;et++){const ct=ot[et],Ct=u.convert(ct.format,ct.colorSpace),At=u.convert(ct.type),Et=P(ct.internalFormat,Ct,At,ct.colorSpace),Pt=te(E);V&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Et,E.width,E.height):Gt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt,Et,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Et,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const ot=r.get(E.depthTexture).__webglTexture,et=te(E);if(E.depthTexture.format===pr)Gt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0);else if(E.depthTexture.format===Es)Gt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Yt(R){const E=r.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Lt(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]=o.createRenderbuffer(),Dt(E.__webglDepthbuffer[ot],R,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Dt(E.__webglDepthbuffer,R,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(R,E,V){const ot=r.get(R);E!==void 0&&It(ot.__webglFramebuffer,R,R.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&Yt(R)}function tt(R){const E=R.texture,V=r.get(R),ot=r.get(E);R.addEventListener("dispose",ut),R.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=o.createTexture()),ot.__version=E.version,d.memory.textures++);const et=R.isWebGLCubeRenderTarget===!0,ct=R.isWebGLMultipleRenderTargets===!0,Ct=S(R)||h;if(et){V.__webglFramebuffer=[];for(let At=0;At<6;At++)if(h&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[At]=[];for(let Et=0;Et<E.mipmaps.length;Et++)V.__webglFramebuffer[At][Et]=o.createFramebuffer()}else V.__webglFramebuffer[At]=o.createFramebuffer()}else{if(h&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)V.__webglFramebuffer[At]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(ct)if(l.drawBuffers){const At=R.texture;for(let Et=0,Pt=At.length;Et<Pt;Et++){const qt=r.get(At[Et]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&R.samples>0&&Gt(R)===!1){const At=ct?E:[E];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Et=0;Et<At.length;Et++){const Pt=At[Et];V.__webglColorRenderbuffer[Et]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[Et]);const qt=u.convert(Pt.format,Pt.colorSpace),St=u.convert(Pt.type),se=P(Pt.internalFormat,qt,St,Pt.colorSpace,R.isXRRenderTarget===!0),re=te(R);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,se,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Et,o.RENDERBUFFER,V.__webglColorRenderbuffer[Et])}o.bindRenderbuffer(o.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(V.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture),bt(o.TEXTURE_CUBE_MAP,E,Ct);for(let At=0;At<6;At++)if(h&&E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)It(V.__webglFramebuffer[At][Et],R,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Et);else It(V.__webglFramebuffer[At],R,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);B(E,Ct)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ct){const At=R.texture;for(let Et=0,Pt=At.length;Et<Pt;Et++){const qt=At[Et],St=r.get(qt);i.bindTexture(o.TEXTURE_2D,St.__webglTexture),bt(o.TEXTURE_2D,qt,Ct),It(V.__webglFramebuffer,R,qt,o.COLOR_ATTACHMENT0+Et,o.TEXTURE_2D,0),B(qt,Ct)&&L(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(h?At=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(At,ot.__webglTexture),bt(At,E,Ct),h&&E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)It(V.__webglFramebuffer[Et],R,E,o.COLOR_ATTACHMENT0,At,Et);else It(V.__webglFramebuffer,R,E,o.COLOR_ATTACHMENT0,At,0);B(E,Ct)&&L(At),i.unbindTexture()}R.depthBuffer&&Yt(R)}function ie(R){const E=S(R)||h,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ot=0,et=V.length;ot<et;ot++){const ct=V[ot];if(B(ct,E)){const Ct=R.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,At=r.get(ct).__webglTexture;i.bindTexture(Ct,At),L(Ct),i.unbindTexture()}}}function Xt(R){if(h&&R.samples>0&&Gt(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ot=R.height;let et=o.COLOR_BUFFER_BIT;const ct=[],Ct=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=r.get(R),Et=R.isWebGLMultipleRenderTargets===!0;if(Et)for(let Pt=0;Pt<E.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){ct.push(o.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&ct.push(Ct);const qt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(qt===!1&&(R.depthBuffer&&(et|=o.DEPTH_BUFFER_BIT),R.stencilBuffer&&(et|=o.STENCIL_BUFFER_BIT)),Et&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Pt]),qt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ct]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ct])),Et){const St=r.get(E[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,V,ot,0,0,V,ot,et,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ct)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Et)for(let Pt=0;Pt<E.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,At.__webglColorRenderbuffer[Pt]);const qt=r.get(E[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,qt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function te(R){return Math.min(l.maxSamples,R.samples)}function Gt(R){const E=r.get(R);return h&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(R){const E=d.render.frame;_.get(R)!==E&&(_.set(R,E),R.update())}function gt(R,E){const V=R.colorSpace,ot=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Mh||V!==$i&&V!==oi&&(Le.getTransfer(V)===Be?h===!1?e.has("EXT_sRGB")===!0&&ot===vi?(R.format=Mh,R.minFilter=Pn,R.generateMipmaps=!1):E=i0.sRGBToLinear(E):(ot!==vi||et!==za)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=G,this.resetTextureUnits=vt,this.setTexture2D=I,this.setTexture2DArray=J,this.setTexture3D=it,this.setTextureCube=ht,this.rebindTextures=Kt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Gt}function jb(o,e,i){const r=i.isWebGL2;function l(u,d=oi){let h;const p=Le.getTransfer(d);if(u===za)return o.UNSIGNED_BYTE;if(u===Y_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===j_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===_y)return o.BYTE;if(u===vy)return o.SHORT;if(u===Ch)return o.UNSIGNED_SHORT;if(u===q_)return o.INT;if(u===Na)return o.UNSIGNED_INT;if(u===Qi)return o.FLOAT;if(u===Po)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===Sy)return o.ALPHA;if(u===vi)return o.RGBA;if(u===yy)return o.LUMINANCE;if(u===xy)return o.LUMINANCE_ALPHA;if(u===pr)return o.DEPTH_COMPONENT;if(u===Es)return o.DEPTH_STENCIL;if(u===Mh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===My)return o.RED;if(u===Z_)return o.RED_INTEGER;if(u===Ey)return o.RG;if(u===K_)return o.RG_INTEGER;if(u===Q_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Be)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Ff)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Ff)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===vg||u===Sg||u===yg||u===xg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===vg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Sg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===yg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===xg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===J_)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Mg||u===Eg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Mg)return p===Be?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Eg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Tg||u===bg||u===Ag||u===Rg||u===wg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg||u===Bg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Tg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===bg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Ag)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Rg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===wg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Cg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Dg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Lg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Ug)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ng)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Og)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Pg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===zg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Bg)return p===Be?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Fg||u===Ig)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Vf)return p===Be?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Fg)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Ig)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Ty||u===Hg||u===Gg||u===Vg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Vf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===Hg)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Gg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Vg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===dr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Zb extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kb={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const S=i.getJointPose(w,r),v=this._getHandJoint(m,w);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=_.position.distanceTo(y.position),M=.02,b=.005;m.inputState.pinching&&g>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Kb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new _s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jb=`
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

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new ta({extensions:{fragDepth:!0},vertexShader:Qb,fragmentShader:Jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new zn(new bc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class tA extends vr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,_=null,y=null,g=null,M=null,b=null;const w=new $b,S=i.getContextAttributes();let v=null,B=null;const L=[],P=[],k=new oe;let H=null;const F=new jn;F.layers.enable(1),F.viewport=new Fe;const ut=new jn;ut.layers.enable(2),ut.viewport=new Fe;const K=[F,ut],T=new Zb;T.layers.enable(1),T.layers.enable(2);let U=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let dt=L[W];return dt===void 0&&(dt=new fh,L[W]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(W){let dt=L[W];return dt===void 0&&(dt=new fh,L[W]=dt),dt.getGripSpace()},this.getHand=function(W){let dt=L[W];return dt===void 0&&(dt=new fh,L[W]=dt),dt.getHandSpace()};function vt(W){const dt=P.indexOf(W.inputSource);if(dt===-1)return;const xt=L[dt];xt!==void 0&&(xt.update(W.inputSource,W.frame,m||d),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){l.removeEventListener("select",vt),l.removeEventListener("selectstart",vt),l.removeEventListener("selectend",vt),l.removeEventListener("squeeze",vt),l.removeEventListener("squeezestart",vt),l.removeEventListener("squeezeend",vt),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",Z);for(let W=0;W<L.length;W++){const dt=P[W];dt!==null&&(P[W]=null,L[W].disconnect(dt))}U=null,Q=null,w.reset(),e.setRenderTarget(v),M=null,g=null,y=null,l=null,B=null,bt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",vt),l.addEventListener("selectstart",vt),l.addEventListener("selectend",vt),l.addEventListener("squeeze",vt),l.addEventListener("squeezestart",vt),l.addEventListener("squeezeend",vt),l.addEventListener("end",G),l.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const dt={antialias:l.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new gr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:za,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let dt=null,xt=null,It=null;S.depth&&(It=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=S.stencil?Es:pr,xt=S.stencil?dr:Na);const Dt={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:u};y=new XRWebGLBinding(l,i),g=y.createProjectionLayer(Dt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),B=new gr(g.textureWidth,g.textureHeight,{format:vi,type:za,depthTexture:new g0(g.textureWidth,g.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Lt=e.properties.get(B);Lt.__ignoreDepthValues=g.ignoreDepthValues}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),bt.setContext(l),bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function Z(W){for(let dt=0;dt<W.removed.length;dt++){const xt=W.removed[dt],It=P.indexOf(xt);It>=0&&(P[It]=null,L[It].disconnect(xt))}for(let dt=0;dt<W.added.length;dt++){const xt=W.added[dt];let It=P.indexOf(xt);if(It===-1){for(let Lt=0;Lt<L.length;Lt++)if(Lt>=P.length){P.push(xt),It=Lt;break}else if(P[Lt]===null){P[Lt]=xt,It=Lt;break}if(It===-1)break}const Dt=L[It];Dt&&Dt.connect(xt)}}const I=new Y,J=new Y;function it(W,dt,xt){I.setFromMatrixPosition(dt.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const It=I.distanceTo(J),Dt=dt.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,Yt=Dt[14]/(Dt[10]-1),Kt=Dt[14]/(Dt[10]+1),tt=(Dt[9]+1)/Dt[5],ie=(Dt[9]-1)/Dt[5],Xt=(Dt[8]-1)/Dt[0],te=(Lt[8]+1)/Lt[0],Gt=Yt*Xt,Te=Yt*te,gt=It/(-Xt+te),R=gt*-Xt;dt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(R),W.translateZ(gt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const E=Yt+gt,V=Kt+gt,ot=Gt-R,et=Te+(It-R),ct=tt*Kt/V*E,Ct=ie*Kt/V*E;W.projectionMatrix.makePerspective(ot,et,ct,Ct,E,V),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ht(W,dt){dt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(dt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;w.texture!==null&&(W.near=w.depthNear,W.far=w.depthFar),T.near=ut.near=F.near=W.near,T.far=ut.far=F.far=W.far,(U!==T.near||Q!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,Q=T.far,F.near=U,F.far=Q,ut.near=U,ut.far=Q,F.updateProjectionMatrix(),ut.updateProjectionMatrix(),W.updateProjectionMatrix());const dt=W.parent,xt=T.cameras;ht(T,dt);for(let It=0;It<xt.length;It++)ht(xt[It],dt);xt.length===2?it(T,F,ut):T.projectionMatrix.copy(F.projectionMatrix),C(W,T,dt)};function C(W,dt,xt){xt===null?W.matrix.copy(dt.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(dt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(dt.projectionMatrix),W.projectionMatrixInverse.copy(dt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(W){p=W,g!==null&&(g.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null};let j=null;function pt(W,dt){if(_=dt.getViewerPose(m||d),b=dt,_!==null){const xt=_.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let It=!1;xt.length!==T.cameras.length&&(T.cameras.length=0,It=!0);for(let Lt=0;Lt<xt.length;Lt++){const Yt=xt[Lt];let Kt=null;if(M!==null)Kt=M.getViewport(Yt);else{const ie=y.getViewSubImage(g,Yt);Kt=ie.viewport,Lt===0&&(e.setRenderTargetTextures(B,ie.colorTexture,g.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(B))}let tt=K[Lt];tt===void 0&&(tt=new jn,tt.layers.enable(Lt),tt.viewport=new Fe,K[Lt]=tt),tt.matrix.fromArray(Yt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Yt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Lt===0&&(T.matrix.copy(tt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),It===!0&&T.cameras.push(tt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Lt=y.getDepthInformation(xt[0]);Lt&&Lt.isValid&&Lt.texture&&w.init(e,Lt,l.renderState)}}for(let xt=0;xt<L.length;xt++){const It=P[xt],Dt=L[xt];It!==null&&Dt!==void 0&&Dt.update(It,dt,m||d)}w.render(e,T),j&&j(W,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const bt=new p0;bt.setAnimationLoop(pt),this.setAnimationLoop=function(W){j=W},this.dispose=function(){}}}function eA(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,f0(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,B,L,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),y(S,v)):v.isMeshPhongMaterial?(u(S,v),_(S,v)):v.isMeshStandardMaterial?(u(S,v),g(S,v),v.isMeshPhysicalMaterial&&M(S,v,P)):v.isMeshMatcapMaterial?(u(S,v),b(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),w(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,B,L):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Bn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Bn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const B=e.get(v).envMap;if(B&&(S.envMap.value=B,S.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap){S.lightMap.value=v.lightMap;const L=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=v.lightMapIntensity*L,i(v.lightMap,S.lightMapTransform)}v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,B,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*B,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function y(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),e.get(v).envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,B){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Bn&&S.clearcoatNormalScale.value.negate())),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=B.texture,S.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function w(S,v){const B=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(B.matrixWorld),S.nearDistance.value=B.shadow.camera.near,S.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function nA(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(B,L){const P=L.program;r.uniformBlockBinding(B,P)}function m(B,L){let P=l[B.id];P===void 0&&(b(B),P=_(B),l[B.id]=P,B.addEventListener("dispose",S));const k=L.program;r.updateUBOMapping(B,k);const H=e.render.frame;u[B.id]!==H&&(g(B),u[B.id]=H)}function _(B){const L=y();B.__bindingPointIndex=L;const P=o.createBuffer(),k=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,k,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,P),P}function y(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(B){const L=l[B.id],P=B.uniforms,k=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,F=P.length;H<F;H++){const ut=Array.isArray(P[H])?P[H]:[P[H]];for(let K=0,T=ut.length;K<T;K++){const U=ut[K];if(M(U,H,K,k)===!0){const Q=U.__offset,vt=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let Z=0;Z<vt.length;Z++){const I=vt[Z],J=w(I);typeof I=="number"||typeof I=="boolean"?(U.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,Q+G,U.__data)):I.isMatrix3?(U.__data[0]=I.elements[0],U.__data[1]=I.elements[1],U.__data[2]=I.elements[2],U.__data[3]=0,U.__data[4]=I.elements[3],U.__data[5]=I.elements[4],U.__data[6]=I.elements[5],U.__data[7]=0,U.__data[8]=I.elements[6],U.__data[9]=I.elements[7],U.__data[10]=I.elements[8],U.__data[11]=0):(I.toArray(U.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,L,P,k){const H=B.value,F=L+"_"+P;if(k[F]===void 0)return typeof H=="number"||typeof H=="boolean"?k[F]=H:k[F]=H.clone(),!0;{const ut=k[F];if(typeof H=="number"||typeof H=="boolean"){if(ut!==H)return k[F]=H,!0}else if(ut.equals(H)===!1)return ut.copy(H),!0}return!1}function b(B){const L=B.uniforms;let P=0;const k=16;for(let F=0,ut=L.length;F<ut;F++){const K=Array.isArray(L[F])?L[F]:[L[F]];for(let T=0,U=K.length;T<U;T++){const Q=K[T],vt=Array.isArray(Q.value)?Q.value:[Q.value];for(let G=0,Z=vt.length;G<Z;G++){const I=vt[G],J=w(I),it=P%k;it!==0&&k-it<J.boundary&&(P+=k-it),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=J.storage}}}const H=P%k;return H>0&&(P+=k-H),B.__size=P,B.__cache={},this}function w(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function S(B){const L=B.target;L.removeEventListener("dispose",S);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:p,update:m,dispose:v}}class M0{constructor(e={}){const{canvas:i=Zy(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let g;r!==null?g=r.getContextAttributes().alpha:g=d;const M=new Uint32Array(4),b=new Int32Array(4);let w=null,S=null;const v=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=Pa,this.toneMappingExposure=1;const L=this;let P=!1,k=0,H=0,F=null,ut=-1,K=null;const T=new Fe,U=new Fe;let Q=null;const vt=new xe(0);let G=0,Z=i.width,I=i.height,J=1,it=null,ht=null;const C=new Fe(0,0,Z,I),j=new Fe(0,0,Z,I);let pt=!1;const bt=new Nh;let W=!1,dt=!1,xt=null;const It=new Ze,Dt=new oe,Lt=new Y,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Kt(){return F===null?J:1}let tt=r;function ie(D,nt){for(let lt=0;lt<D.length;lt++){const ft=D[lt],rt=i.getContext(ft,nt);if(rt!==null)return rt}return null}try{const D={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rh}`),i.addEventListener("webglcontextlost",Qt,!1),i.addEventListener("webglcontextrestored",N,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),tt===null){const nt=["webgl2","webgl","experimental-webgl"];if(L.isWebGL1Renderer===!0&&nt.shift(),tt=ie(nt,D),tt===null)throw ie(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&tt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),tt.getShaderPrecisionFormat===void 0&&(tt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Xt,te,Gt,Te,gt,R,E,V,ot,et,ct,Ct,At,Et,Pt,qt,St,se,re,Jt,Nt,Ft,Ht,O;function wt(){Xt=new cT(tt),te=new iT(tt,Xt,e),Xt.init(te),Ft=new jb(tt,Xt,te),Gt=new qb(tt,Xt,te),Te=new hT(tt),gt=new Ub,R=new Yb(tt,Xt,Gt,gt,te,Ft,Te),E=new rT(L),V=new lT(L),ot=new yx(tt,te),Ht=new eT(tt,Xt,ot,te),et=new uT(tt,ot,Te,Ht),ct=new gT(tt,et,ot,Te),re=new mT(tt,te,R),qt=new aT(gt),Ct=new Lb(L,E,V,Xt,te,Ht,qt),At=new eA(L,gt),Et=new Ob,Pt=new Hb(Xt,te),se=new tT(L,E,V,Gt,ct,g,p),St=new Xb(L,ct,te),O=new nA(tt,Te,te,Gt),Jt=new nT(tt,Xt,Te,te),Nt=new fT(tt,Xt,Te,te),Te.programs=Ct.programs,L.capabilities=te,L.extensions=Xt,L.properties=gt,L.renderLists=Et,L.shadowMap=St,L.state=Gt,L.info=Te}wt();const Ot=new tA(L,tt);this.xr=Ot,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){const D=Xt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Xt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(Z,I,!1))},this.getSize=function(D){return D.set(Z,I)},this.setSize=function(D,nt,lt=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,I=nt,i.width=Math.floor(D*J),i.height=Math.floor(nt*J),lt===!0&&(i.style.width=D+"px",i.style.height=nt+"px"),this.setViewport(0,0,D,nt)},this.getDrawingBufferSize=function(D){return D.set(Z*J,I*J).floor()},this.setDrawingBufferSize=function(D,nt,lt){Z=D,I=nt,J=lt,i.width=Math.floor(D*lt),i.height=Math.floor(nt*lt),this.setViewport(0,0,D,nt)},this.getCurrentViewport=function(D){return D.copy(T)},this.getViewport=function(D){return D.copy(C)},this.setViewport=function(D,nt,lt,ft){D.isVector4?C.set(D.x,D.y,D.z,D.w):C.set(D,nt,lt,ft),Gt.viewport(T.copy(C).multiplyScalar(J).floor())},this.getScissor=function(D){return D.copy(j)},this.setScissor=function(D,nt,lt,ft){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,nt,lt,ft),Gt.scissor(U.copy(j).multiplyScalar(J).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(D){Gt.setScissorTest(pt=D)},this.setOpaqueSort=function(D){it=D},this.setTransparentSort=function(D){ht=D},this.getClearColor=function(D){return D.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(D=!0,nt=!0,lt=!0){let ft=0;if(D){let rt=!1;if(F!==null){const Bt=F.texture.format;rt=Bt===Q_||Bt===K_||Bt===Z_}if(rt){const Bt=F.texture.type,jt=Bt===za||Bt===Na||Bt===Ch||Bt===dr||Bt===Y_||Bt===j_,ee=se.getClearColor(),kt=se.getClearAlpha(),ue=ee.r,le=ee.g,ae=ee.b;jt?(M[0]=ue,M[1]=le,M[2]=ae,M[3]=kt,tt.clearBufferuiv(tt.COLOR,0,M)):(b[0]=ue,b[1]=le,b[2]=ae,b[3]=kt,tt.clearBufferiv(tt.COLOR,0,b))}else ft|=tt.COLOR_BUFFER_BIT}nt&&(ft|=tt.DEPTH_BUFFER_BIT),lt&&(ft|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Qt,!1),i.removeEventListener("webglcontextrestored",N,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Et.dispose(),Pt.dispose(),gt.dispose(),E.dispose(),V.dispose(),ct.dispose(),Ht.dispose(),O.dispose(),Ct.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",qe),Ot.removeEventListener("sessionend",ge),xt&&(xt.dispose(),xt=null),Ie.stop()};function Qt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const D=Te.autoReset,nt=St.enabled,lt=St.autoUpdate,ft=St.needsUpdate,rt=St.type;wt(),Te.autoReset=D,St.enabled=nt,St.autoUpdate=lt,St.needsUpdate=ft,St.type=rt}function Rt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Mt(D){const nt=D.target;nt.removeEventListener("dispose",Mt),zt(nt)}function zt(D){Vt(D),gt.remove(D)}function Vt(D){const nt=gt.get(D).programs;nt!==void 0&&(nt.forEach(function(lt){Ct.releaseProgram(lt)}),D.isShaderMaterial&&Ct.releaseShaderCache(D))}this.renderBufferDirect=function(D,nt,lt,ft,rt,Bt){nt===null&&(nt=Yt);const jt=rt.isMesh&&rt.matrixWorld.determinant()<0,ee=ea(D,nt,lt,ft,rt);Gt.setMaterial(ft,jt);let kt=lt.index,ue=1;if(ft.wireframe===!0){if(kt=et.getWireframeAttribute(lt),kt===void 0)return;ue=2}const le=lt.drawRange,ae=lt.attributes.position;let we=le.start*ue,He=(le.start+le.count)*ue;Bt!==null&&(we=Math.max(we,Bt.start*ue),He=Math.min(He,(Bt.start+Bt.count)*ue)),kt!==null?(we=Math.max(we,0),He=Math.min(He,kt.count)):ae!=null&&(we=Math.max(we,0),He=Math.min(He,ae.count));const Ke=He-we;if(Ke<0||Ke===1/0)return;Ht.setup(rt,ft,ee,lt,kt);let Zn,Oe=Jt;if(kt!==null&&(Zn=ot.get(kt),Oe=Nt,Oe.setIndex(Zn)),rt.isMesh)ft.wireframe===!0?(Gt.setLineWidth(ft.wireframeLinewidth*Kt()),Oe.setMode(tt.LINES)):Oe.setMode(tt.TRIANGLES);else if(rt.isLine){let he=ft.linewidth;he===void 0&&(he=1),Gt.setLineWidth(he*Kt()),rt.isLineSegments?Oe.setMode(tt.LINES):rt.isLineLoop?Oe.setMode(tt.LINE_LOOP):Oe.setMode(tt.LINE_STRIP)}else rt.isPoints?Oe.setMode(tt.POINTS):rt.isSprite&&Oe.setMode(tt.TRIANGLES);if(rt.isBatchedMesh)Oe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else if(rt.isInstancedMesh)Oe.renderInstances(we,Ke,rt.count);else if(lt.isInstancedBufferGeometry){const he=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,na=Math.min(lt.instanceCount,he);Oe.renderInstances(we,Ke,na)}else Oe.render(we,Ke)};function Me(D,nt,lt){D.transparent===!0&&D.side===Ai&&D.forceSinglePass===!1?(D.side=Bn,D.needsUpdate=!0,In(D,nt,lt),D.side=Fa,D.needsUpdate=!0,In(D,nt,lt),D.side=Ai):In(D,nt,lt)}this.compile=function(D,nt,lt=null){lt===null&&(lt=D),S=Pt.get(lt),S.init(),B.push(S),lt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(nt.layers)&&(S.pushLight(rt),rt.castShadow&&S.pushShadow(rt))}),D!==lt&&D.traverseVisible(function(rt){rt.isLight&&rt.layers.test(nt.layers)&&(S.pushLight(rt),rt.castShadow&&S.pushShadow(rt))}),S.setupLights(L._useLegacyLights);const ft=new Set;return D.traverse(function(rt){const Bt=rt.material;if(Bt)if(Array.isArray(Bt))for(let jt=0;jt<Bt.length;jt++){const ee=Bt[jt];Me(ee,lt,rt),ft.add(ee)}else Me(Bt,lt,rt),ft.add(Bt)}),B.pop(),S=null,ft},this.compileAsync=function(D,nt,lt=null){const ft=this.compile(D,nt,lt);return new Promise(rt=>{function Bt(){if(ft.forEach(function(jt){gt.get(jt).currentProgram.isReady()&&ft.delete(jt)}),ft.size===0){rt(D);return}setTimeout(Bt,10)}Xt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let pe=null;function Re(D){pe&&pe(D)}function qe(){Ie.stop()}function ge(){Ie.start()}const Ie=new p0;Ie.setAnimationLoop(Re),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(D){pe=D,Ot.setAnimationLoop(D),D===null?Ie.stop():Ie.start()},Ot.addEventListener("sessionstart",qe),Ot.addEventListener("sessionend",ge),this.render=function(D,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(nt),nt=Ot.getCamera()),D.isScene===!0&&D.onBeforeRender(L,D,nt,F),S=Pt.get(D,B.length),S.init(),B.push(S),It.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),bt.setFromProjectionMatrix(It),dt=this.localClippingEnabled,W=qt.init(this.clippingPlanes,dt),w=Et.get(D,v.length),w.init(),v.push(w),ln(D,nt,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(it,ht),this.info.render.frame++,W===!0&&qt.beginShadows();const lt=S.state.shadowsArray;if(St.render(lt,D,nt),W===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1)&&se.render(w,D),S.setupLights(L._useLegacyLights),nt.isArrayCamera){const ft=nt.cameras;for(let rt=0,Bt=ft.length;rt<Bt;rt++){const jt=ft[rt];ws(w,D,jt,jt.viewport)}}else ws(w,D,nt);F!==null&&(R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(L,D,nt),Ht.resetDefaultState(),ut=-1,K=null,B.pop(),B.length>0?S=B[B.length-1]:S=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function ln(D,nt,lt,ft){if(D.visible===!1)return;if(D.layers.test(nt.layers)){if(D.isGroup)lt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(nt);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||bt.intersectsSprite(D)){ft&&Lt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(It);const jt=ct.update(D),ee=D.material;ee.visible&&w.push(D,jt,ee,lt,Lt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||bt.intersectsObject(D))){const jt=ct.update(D),ee=D.material;if(ft&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Lt.copy(D.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Lt.copy(jt.boundingSphere.center)),Lt.applyMatrix4(D.matrixWorld).applyMatrix4(It)),Array.isArray(ee)){const kt=jt.groups;for(let ue=0,le=kt.length;ue<le;ue++){const ae=kt[ue],we=ee[ae.materialIndex];we&&we.visible&&w.push(D,jt,we,lt,Lt.z,ae)}}else ee.visible&&w.push(D,jt,ee,lt,Lt.z,null)}}const Bt=D.children;for(let jt=0,ee=Bt.length;jt<ee;jt++)ln(Bt[jt],nt,lt,ft)}function ws(D,nt,lt,ft){const rt=D.opaque,Bt=D.transmissive,jt=D.transparent;S.setupLightsView(lt),W===!0&&qt.setGlobalState(L.clippingPlanes,lt),Bt.length>0&&Fo(rt,Bt,nt,lt),ft&&Gt.viewport(T.copy(ft)),rt.length>0&&Ia(rt,nt,lt),Bt.length>0&&Ia(Bt,nt,lt),jt.length>0&&Ia(jt,nt,lt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Fo(D,nt,lt,ft){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;const Bt=te.isWebGL2;xt===null&&(xt=new gr(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")?Po:za,minFilter:hr,samples:Bt?4:0})),L.getDrawingBufferSize(Dt),Bt?xt.setSize(Dt.x,Dt.y):xt.setSize(Sc(Dt.x),Sc(Dt.y));const jt=L.getRenderTarget();L.setRenderTarget(xt),L.getClearColor(vt),G=L.getClearAlpha(),G<1&&L.setClearColor(16777215,.5),L.clear();const ee=L.toneMapping;L.toneMapping=Pa,Ia(D,lt,ft),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt);let kt=!1;for(let ue=0,le=nt.length;ue<le;ue++){const ae=nt[ue],we=ae.object,He=ae.geometry,Ke=ae.material,Zn=ae.group;if(Ke.side===Ai&&we.layers.test(ft.layers)){const Oe=Ke.side;Ke.side=Bn,Ke.needsUpdate=!0,Io(we,lt,ft,He,Ke,Zn),Ke.side=Oe,Ke.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt)),L.setRenderTarget(jt),L.setClearColor(vt,G),L.toneMapping=ee}function Ia(D,nt,lt){const ft=nt.isScene===!0?nt.overrideMaterial:null;for(let rt=0,Bt=D.length;rt<Bt;rt++){const jt=D[rt],ee=jt.object,kt=jt.geometry,ue=ft===null?jt.material:ft,le=jt.group;ee.layers.test(lt.layers)&&Io(ee,nt,lt,kt,ue,le)}}function Io(D,nt,lt,ft,rt,Bt){D.onBeforeRender(L,nt,lt,ft,rt,Bt),D.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),rt.onBeforeRender(L,nt,lt,ft,D,Bt),rt.transparent===!0&&rt.side===Ai&&rt.forceSinglePass===!1?(rt.side=Bn,rt.needsUpdate=!0,L.renderBufferDirect(lt,nt,ft,rt,D,Bt),rt.side=Fa,rt.needsUpdate=!0,L.renderBufferDirect(lt,nt,ft,rt,D,Bt),rt.side=Ai):L.renderBufferDirect(lt,nt,ft,rt,D,Bt),D.onAfterRender(L,nt,lt,ft,rt,Bt)}function In(D,nt,lt){nt.isScene!==!0&&(nt=Yt);const ft=gt.get(D),rt=S.state.lights,Bt=S.state.shadowsArray,jt=rt.state.version,ee=Ct.getParameters(D,rt.state,Bt,nt,lt),kt=Ct.getProgramCacheKey(ee);let ue=ft.programs;ft.environment=D.isMeshStandardMaterial?nt.environment:null,ft.fog=nt.fog,ft.envMap=(D.isMeshStandardMaterial?V:E).get(D.envMap||ft.environment),ue===void 0&&(D.addEventListener("dispose",Mt),ue=new Map,ft.programs=ue);let le=ue.get(kt);if(le!==void 0){if(ft.currentProgram===le&&ft.lightsStateVersion===jt)return dn(D,ee),le}else ee.uniforms=Ct.getUniforms(D),D.onBuild(lt,ee,L),D.onBeforeCompile(ee,L),le=Ct.acquireProgram(ee,kt),ue.set(kt,le),ft.uniforms=ee.uniforms;const ae=ft.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ae.clippingPlanes=qt.uniform),dn(D,ee),ft.needsLights=wc(D),ft.lightsStateVersion=jt,ft.needsLights&&(ae.ambientLightColor.value=rt.state.ambient,ae.lightProbe.value=rt.state.probe,ae.directionalLights.value=rt.state.directional,ae.directionalLightShadows.value=rt.state.directionalShadow,ae.spotLights.value=rt.state.spot,ae.spotLightShadows.value=rt.state.spotShadow,ae.rectAreaLights.value=rt.state.rectArea,ae.ltc_1.value=rt.state.rectAreaLTC1,ae.ltc_2.value=rt.state.rectAreaLTC2,ae.pointLights.value=rt.state.point,ae.pointLightShadows.value=rt.state.pointShadow,ae.hemisphereLights.value=rt.state.hemi,ae.directionalShadowMap.value=rt.state.directionalShadowMap,ae.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,ae.spotShadowMap.value=rt.state.spotShadowMap,ae.spotLightMatrix.value=rt.state.spotLightMatrix,ae.spotLightMap.value=rt.state.spotLightMap,ae.pointShadowMap.value=rt.state.pointShadowMap,ae.pointShadowMatrix.value=rt.state.pointShadowMatrix),ft.currentProgram=le,ft.uniformsList=null,le}function nn(D){if(D.uniformsList===null){const nt=D.currentProgram.getUniforms();D.uniformsList=dc.seqWithValue(nt.seq,D.uniforms)}return D.uniformsList}function dn(D,nt){const lt=gt.get(D);lt.outputColorSpace=nt.outputColorSpace,lt.batching=nt.batching,lt.instancing=nt.instancing,lt.instancingColor=nt.instancingColor,lt.skinning=nt.skinning,lt.morphTargets=nt.morphTargets,lt.morphNormals=nt.morphNormals,lt.morphColors=nt.morphColors,lt.morphTargetsCount=nt.morphTargetsCount,lt.numClippingPlanes=nt.numClippingPlanes,lt.numIntersection=nt.numClipIntersection,lt.vertexAlphas=nt.vertexAlphas,lt.vertexTangents=nt.vertexTangents,lt.toneMapping=nt.toneMapping}function ea(D,nt,lt,ft,rt){nt.isScene!==!0&&(nt=Yt),R.resetTextureUnits();const Bt=nt.fog,jt=ft.isMeshStandardMaterial?nt.environment:null,ee=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:$i,kt=(ft.isMeshStandardMaterial?V:E).get(ft.envMap||jt),ue=ft.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,le=!!lt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ae=!!lt.morphAttributes.position,we=!!lt.morphAttributes.normal,He=!!lt.morphAttributes.color;let Ke=Pa;ft.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ke=L.toneMapping);const Zn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=Zn!==void 0?Zn.length:0,he=gt.get(ft),na=S.state.lights;if(W===!0&&(dt===!0||D!==K)){const Un=D===K&&ft.id===ut;qt.setState(ft,D,Un)}let Ue=!1;ft.version===he.__version?(he.needsLights&&he.lightsStateVersion!==na.state.version||he.outputColorSpace!==ee||rt.isBatchedMesh&&he.batching===!1||!rt.isBatchedMesh&&he.batching===!0||rt.isInstancedMesh&&he.instancing===!1||!rt.isInstancedMesh&&he.instancing===!0||rt.isSkinnedMesh&&he.skinning===!1||!rt.isSkinnedMesh&&he.skinning===!0||rt.isInstancedMesh&&he.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&he.instancingColor===!1&&rt.instanceColor!==null||he.envMap!==kt||ft.fog===!0&&he.fog!==Bt||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==qt.numPlanes||he.numIntersection!==qt.numIntersection)||he.vertexAlphas!==ue||he.vertexTangents!==le||he.morphTargets!==ae||he.morphNormals!==we||he.morphColors!==He||he.toneMapping!==Ke||te.isWebGL2===!0&&he.morphTargetsCount!==Oe)&&(Ue=!0):(Ue=!0,he.__version=ft.version);let pn=he.currentProgram;Ue===!0&&(pn=In(ft,nt,rt));let An=!1,ia=!1,Ds=!1;const Ye=pn.getUniforms(),Si=he.uniforms;if(Gt.useProgram(pn.program)&&(An=!0,ia=!0,Ds=!0),ft.id!==ut&&(ut=ft.id,ia=!0),An||K!==D){Ye.setValue(tt,"projectionMatrix",D.projectionMatrix),Ye.setValue(tt,"viewMatrix",D.matrixWorldInverse);const Un=Ye.map.cameraPosition;Un!==void 0&&Un.setValue(tt,Lt.setFromMatrixPosition(D.matrixWorld)),te.logarithmicDepthBuffer&&Ye.setValue(tt,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ye.setValue(tt,"isOrthographic",D.isOrthographicCamera===!0),K!==D&&(K=D,ia=!0,Ds=!0)}if(rt.isSkinnedMesh){Ye.setOptional(tt,rt,"bindMatrix"),Ye.setOptional(tt,rt,"bindMatrixInverse");const Un=rt.skeleton;Un&&(te.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),Ye.setValue(tt,"boneTexture",Un.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}rt.isBatchedMesh&&(Ye.setOptional(tt,rt,"batchingTexture"),Ye.setValue(tt,"batchingTexture",rt._matricesTexture,R));const aa=lt.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&te.isWebGL2===!0)&&re.update(rt,lt,pn),(ia||he.receiveShadow!==rt.receiveShadow)&&(he.receiveShadow=rt.receiveShadow,Ye.setValue(tt,"receiveShadow",rt.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Si.envMap.value=kt,Si.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ia&&(Ye.setValue(tt,"toneMappingExposure",L.toneMappingExposure),he.needsLights&&Cs(Si,Ds),Bt&&ft.fog===!0&&At.refreshFogUniforms(Si,Bt),At.refreshMaterialUniforms(Si,ft,J,I,xt),dc.upload(tt,nn(he),Si,R)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(dc.upload(tt,nn(he),Si,R),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ye.setValue(tt,"center",rt.center),Ye.setValue(tt,"modelViewMatrix",rt.modelViewMatrix),Ye.setValue(tt,"normalMatrix",rt.normalMatrix),Ye.setValue(tt,"modelMatrix",rt.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const Un=ft.uniformsGroups;for(let yn=0,Ls=Un.length;yn<Ls;yn++)if(te.isWebGL2){const Us=Un[yn];O.update(Us,pn),O.bind(Us,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function Cs(D,nt){D.ambientLightColor.needsUpdate=nt,D.lightProbe.needsUpdate=nt,D.directionalLights.needsUpdate=nt,D.directionalLightShadows.needsUpdate=nt,D.pointLights.needsUpdate=nt,D.pointLightShadows.needsUpdate=nt,D.spotLights.needsUpdate=nt,D.spotLightShadows.needsUpdate=nt,D.rectAreaLights.needsUpdate=nt,D.hemisphereLights.needsUpdate=nt}function wc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,nt,lt){gt.get(D.texture).__webglTexture=nt,gt.get(D.depthTexture).__webglTexture=lt;const ft=gt.get(D);ft.__hasExternalTextures=!0,ft.__hasExternalTextures&&(ft.__autoAllocateDepthBuffer=lt===void 0,ft.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ft.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,nt){const lt=gt.get(D);lt.__webglFramebuffer=nt,lt.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(D,nt=0,lt=0){F=D,k=nt,H=lt;let ft=!0,rt=null,Bt=!1,jt=!1;if(D){const kt=gt.get(D);kt.__useDefaultFramebuffer!==void 0?(Gt.bindFramebuffer(tt.FRAMEBUFFER,null),ft=!1):kt.__webglFramebuffer===void 0?R.setupRenderTarget(D):kt.__hasExternalTextures&&R.rebindTextures(D,gt.get(D.texture).__webglTexture,gt.get(D.depthTexture).__webglTexture);const ue=D.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(jt=!0);const le=gt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(le[nt])?rt=le[nt][lt]:rt=le[nt],Bt=!0):te.isWebGL2&&D.samples>0&&R.useMultisampledRTT(D)===!1?rt=gt.get(D).__webglMultisampledFramebuffer:Array.isArray(le)?rt=le[lt]:rt=le,T.copy(D.viewport),U.copy(D.scissor),Q=D.scissorTest}else T.copy(C).multiplyScalar(J).floor(),U.copy(j).multiplyScalar(J).floor(),Q=pt;if(Gt.bindFramebuffer(tt.FRAMEBUFFER,rt)&&te.drawBuffers&&ft&&Gt.drawBuffers(D,rt),Gt.viewport(T),Gt.scissor(U),Gt.setScissorTest(Q),Bt){const kt=gt.get(D.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+nt,kt.__webglTexture,lt)}else if(jt){const kt=gt.get(D.texture),ue=nt||0;tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,kt.__webglTexture,lt||0,ue)}ut=-1},this.readRenderTargetPixels=function(D,nt,lt,ft,rt,Bt,jt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=gt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(ee=ee[jt]),ee){Gt.bindFramebuffer(tt.FRAMEBUFFER,ee);try{const kt=D.texture,ue=kt.format,le=kt.type;if(ue!==vi&&Ft.convert(ue)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ae=le===Po&&(Xt.has("EXT_color_buffer_half_float")||te.isWebGL2&&Xt.has("EXT_color_buffer_float"));if(le!==za&&Ft.convert(le)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(le===Qi&&(te.isWebGL2||Xt.has("OES_texture_float")||Xt.has("WEBGL_color_buffer_float")))&&!ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=D.width-ft&&lt>=0&&lt<=D.height-rt&&tt.readPixels(nt,lt,ft,rt,Ft.convert(ue),Ft.convert(le),Bt)}finally{const kt=F!==null?gt.get(F).__webglFramebuffer:null;Gt.bindFramebuffer(tt.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(D,nt,lt=0){const ft=Math.pow(2,-lt),rt=Math.floor(nt.image.width*ft),Bt=Math.floor(nt.image.height*ft);R.setTexture2D(nt,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,lt,0,0,D.x,D.y,rt,Bt),Gt.unbindTexture()},this.copyTextureToTexture=function(D,nt,lt,ft=0){const rt=nt.image.width,Bt=nt.image.height,jt=Ft.convert(lt.format),ee=Ft.convert(lt.type);R.setTexture2D(lt,0),tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,lt.flipY),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),tt.pixelStorei(tt.UNPACK_ALIGNMENT,lt.unpackAlignment),nt.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,ft,D.x,D.y,rt,Bt,jt,ee,nt.image.data):nt.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,ft,D.x,D.y,nt.mipmaps[0].width,nt.mipmaps[0].height,jt,nt.mipmaps[0].data):tt.texSubImage2D(tt.TEXTURE_2D,ft,D.x,D.y,jt,ee,nt.image),ft===0&&lt.generateMipmaps&&tt.generateMipmap(tt.TEXTURE_2D),Gt.unbindTexture()},this.copyTextureToTexture3D=function(D,nt,lt,ft,rt=0){if(L.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Bt=D.max.x-D.min.x+1,jt=D.max.y-D.min.y+1,ee=D.max.z-D.min.z+1,kt=Ft.convert(ft.format),ue=Ft.convert(ft.type);let le;if(ft.isData3DTexture)R.setTexture3D(ft,0),le=tt.TEXTURE_3D;else if(ft.isDataArrayTexture||ft.isCompressedArrayTexture)R.setTexture2DArray(ft,0),le=tt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,ft.flipY),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),tt.pixelStorei(tt.UNPACK_ALIGNMENT,ft.unpackAlignment);const ae=tt.getParameter(tt.UNPACK_ROW_LENGTH),we=tt.getParameter(tt.UNPACK_IMAGE_HEIGHT),He=tt.getParameter(tt.UNPACK_SKIP_PIXELS),Ke=tt.getParameter(tt.UNPACK_SKIP_ROWS),Zn=tt.getParameter(tt.UNPACK_SKIP_IMAGES),Oe=lt.isCompressedTexture?lt.mipmaps[rt]:lt.image;tt.pixelStorei(tt.UNPACK_ROW_LENGTH,Oe.width),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,Oe.height),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,D.min.x),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,D.min.y),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,D.min.z),lt.isDataTexture||lt.isData3DTexture?tt.texSubImage3D(le,rt,nt.x,nt.y,nt.z,Bt,jt,ee,kt,ue,Oe.data):lt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),tt.compressedTexSubImage3D(le,rt,nt.x,nt.y,nt.z,Bt,jt,ee,kt,Oe.data)):tt.texSubImage3D(le,rt,nt.x,nt.y,nt.z,Bt,jt,ee,kt,ue,Oe),tt.pixelStorei(tt.UNPACK_ROW_LENGTH,ae),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,we),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,He),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,Ke),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,Zn),rt===0&&ft.generateMipmaps&&tt.generateMipmap(le),Gt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?R.setTextureCube(D,0):D.isData3DTexture?R.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?R.setTexture2DArray(D,0):R.setTexture2D(D,0),Gt.unbindTexture()},this.resetState=function(){k=0,H=0,F=null,Gt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dh?"display-p3":"srgb",i.unpackColorSpace=Le.workingColorSpace===Mc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vn?mr:$_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?vn:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iA extends M0{}iA.prototype.isWebGL1Renderer=!0;class aA extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class E0 extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const N_=new Ze,bh=new Uh,uc=new Ec,fc=new Y;class rA extends Sn{constructor(e=new Ci,i=new E0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(l),uc.radius+=u,e.ray.intersectsSphere(uc)===!1)return;N_.copy(l).invert(),bh.copy(e.ray).applyMatrix4(N_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,y=r.attributes.position;if(m!==null){const g=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let b=g,w=M;b<w;b++){const S=m.getX(b);fc.fromBufferAttribute(y,S),O_(fc,S,p,l,e,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let b=g,w=M;b<w;b++)fc.fromBufferAttribute(y,b),O_(fc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function O_(o,e,i,r,l,u,d){const h=bh.distanceSqToPoint(o);if(h<i){const p=new Y;bh.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class Rc extends Ci{constructor(e=1,i=1,r=1,l=32,u=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const _=[],y=[],g=[],M=[];let b=0;const w=[],S=r/2;let v=0;B(),d===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new li(y,3)),this.setAttribute("normal",new li(g,3)),this.setAttribute("uv",new li(M,2));function B(){const P=new Y,k=new Y;let H=0;const F=(i-e)/r;for(let ut=0;ut<=u;ut++){const K=[],T=ut/u,U=T*(i-e)+e;for(let Q=0;Q<=l;Q++){const vt=Q/l,G=vt*p+h,Z=Math.sin(G),I=Math.cos(G);k.x=U*Z,k.y=-T*r+S,k.z=U*I,y.push(k.x,k.y,k.z),P.set(Z,F,I).normalize(),g.push(P.x,P.y,P.z),M.push(vt,1-T),K.push(b++)}w.push(K)}for(let ut=0;ut<l;ut++)for(let K=0;K<u;K++){const T=w[K][ut],U=w[K+1][ut],Q=w[K+1][ut+1],vt=w[K][ut+1];_.push(T,U,vt),_.push(U,Q,vt),H+=6}m.addGroup(v,H,0),v+=H}function L(P){const k=b,H=new oe,F=new Y;let ut=0;const K=P===!0?e:i,T=P===!0?1:-1;for(let Q=1;Q<=l;Q++)y.push(0,S*T,0),g.push(0,T,0),M.push(.5,.5),b++;const U=b;for(let Q=0;Q<=l;Q++){const G=Q/l*p+h,Z=Math.cos(G),I=Math.sin(G);F.x=K*I,F.y=S*T,F.z=K*Z,y.push(F.x,F.y,F.z),g.push(0,T,0),H.x=Z*.5+.5,H.y=I*.5*T+.5,M.push(H.x,H.y),b++}for(let Q=0;Q<l;Q++){const vt=k+Q,G=U+Q;P===!0?_.push(G,G+1,vt):_.push(G+1,G,vt),ut+=3}m.addGroup(v,ut,P===!0?1:2),v+=ut}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ph extends Rc{constructor(e=1,i=1,r=32,l=1,u=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,u,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Ph(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sA extends As{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zh extends Sn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const hh=new Ze,P_=new Y,z_=new Y;class T0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;P_.setFromMatrixPosition(e.matrixWorld),i.position.copy(P_),z_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(z_),i.updateMatrixWorld(),hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const B_=new Ze,Uo=new Y,dh=new Y;class oA extends T0{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Uo),dh.copy(r.position),dh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(dh),r.updateMatrixWorld(),l.makeTranslation(-Uo.x,-Uo.y,-Uo.z),B_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(B_)}}class F_ extends zh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new oA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lA extends T0{constructor(){super(new m0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cA extends zh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new lA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uA extends zh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class I_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(bn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);const H_={type:"change"},ph={type:"start"},G_={type:"end"},hc=new Uh,V_=new Ua,fA=Math.cos(70*gi.DEG2RAD);class hA extends vr{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Pt),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(H_),r.update(),u=l.NONE},this.update=function(){const O=new Y,wt=new _r().setFromUnitVectors(e.up,new Y(0,1,0)),Ot=wt.clone().invert(),Qt=new Y,N=new _r,Rt=new Y,Mt=2*Math.PI;return function(Vt=null){const Me=r.object.position;O.copy(Me).sub(r.target),O.applyQuaternion(wt),h.setFromVector3(O),r.autoRotate&&u===l.NONE&&Q(T(Vt)),r.enableDamping?(h.theta+=p.theta*r.dampingFactor,h.phi+=p.phi*r.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let pe=r.minAzimuthAngle,Re=r.maxAzimuthAngle;isFinite(pe)&&isFinite(Re)&&(pe<-Math.PI?pe+=Mt:pe>Math.PI&&(pe-=Mt),Re<-Math.PI?Re+=Mt:Re>Math.PI&&(Re-=Mt),pe<=Re?h.theta=Math.max(pe,Math.min(Re,h.theta)):h.theta=h.theta>(pe+Re)/2?Math.max(pe,h.theta):Math.min(Re,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(_,r.dampingFactor):r.target.add(_),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&H||r.object.isOrthographicCamera?h.radius=C(h.radius):h.radius=C(h.radius*m),O.setFromSpherical(h),O.applyQuaternion(Ot),Me.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,_.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),_.set(0,0,0));let qe=!1;if(r.zoomToCursor&&H){let ge=null;if(r.object.isPerspectiveCamera){const Ie=O.length();ge=C(Ie*m);const ln=Ie-ge;r.object.position.addScaledVector(P,ln),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Ie=new Y(k.x,k.y,0);Ie.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),qe=!0;const ln=new Y(k.x,k.y,0);ln.unproject(r.object),r.object.position.sub(ln).add(Ie),r.object.updateMatrixWorld(),ge=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;ge!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(ge).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<fA?e.lookAt(r.target):(V_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(V_,r.target))))}else r.object.isOrthographicCamera&&(qe=m!==1,qe&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,H=!1,qe||Qt.distanceToSquared(r.object.position)>d||8*(1-N.dot(r.object.quaternion))>d||Rt.distanceToSquared(r.target)>0?(r.dispatchEvent(H_),Qt.copy(r.object.position),N.copy(r.object.quaternion),Rt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",se),r.domElement.removeEventListener("pointerdown",R),r.domElement.removeEventListener("pointercancel",V),r.domElement.removeEventListener("wheel",ct),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",V),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Pt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new I_,p=new I_;let m=1;const _=new Y,y=new oe,g=new oe,M=new oe,b=new oe,w=new oe,S=new oe,v=new oe,B=new oe,L=new oe,P=new Y,k=new oe;let H=!1;const F=[],ut={};let K=!1;function T(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function U(O){const wt=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*wt)}function Q(O){p.theta-=O}function vt(O){p.phi-=O}const G=function(){const O=new Y;return function(Ot,Qt){O.setFromMatrixColumn(Qt,0),O.multiplyScalar(-Ot),_.add(O)}}(),Z=function(){const O=new Y;return function(Ot,Qt){r.screenSpacePanning===!0?O.setFromMatrixColumn(Qt,1):(O.setFromMatrixColumn(Qt,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Ot),_.add(O)}}(),I=function(){const O=new Y;return function(Ot,Qt){const N=r.domElement;if(r.object.isPerspectiveCamera){const Rt=r.object.position;O.copy(Rt).sub(r.target);let Mt=O.length();Mt*=Math.tan(r.object.fov/2*Math.PI/180),G(2*Ot*Mt/N.clientHeight,r.object.matrix),Z(2*Qt*Mt/N.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(G(Ot*(r.object.right-r.object.left)/r.object.zoom/N.clientWidth,r.object.matrix),Z(Qt*(r.object.top-r.object.bottom)/r.object.zoom/N.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function J(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function it(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ht(O,wt){if(!r.zoomToCursor)return;H=!0;const Ot=r.domElement.getBoundingClientRect(),Qt=O-Ot.left,N=wt-Ot.top,Rt=Ot.width,Mt=Ot.height;k.x=Qt/Rt*2-1,k.y=-(N/Mt)*2+1,P.set(k.x,k.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function j(O){y.set(O.clientX,O.clientY)}function pt(O){ht(O.clientX,O.clientX),v.set(O.clientX,O.clientY)}function bt(O){b.set(O.clientX,O.clientY)}function W(O){g.set(O.clientX,O.clientY),M.subVectors(g,y).multiplyScalar(r.rotateSpeed);const wt=r.domElement;Q(2*Math.PI*M.x/wt.clientHeight),vt(2*Math.PI*M.y/wt.clientHeight),y.copy(g),r.update()}function dt(O){B.set(O.clientX,O.clientY),L.subVectors(B,v),L.y>0?J(U(L.y)):L.y<0&&it(U(L.y)),v.copy(B),r.update()}function xt(O){w.set(O.clientX,O.clientY),S.subVectors(w,b).multiplyScalar(r.panSpeed),I(S.x,S.y),b.copy(w),r.update()}function It(O){ht(O.clientX,O.clientY),O.deltaY<0?it(U(O.deltaY)):O.deltaY>0&&J(U(O.deltaY)),r.update()}function Dt(O){let wt=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?vt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,r.keyPanSpeed),wt=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?vt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,-r.keyPanSpeed),wt=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?Q(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(r.keyPanSpeed,0),wt=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?Q(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(-r.keyPanSpeed,0),wt=!0;break}wt&&(O.preventDefault(),r.update())}function Lt(O){if(F.length===1)y.set(O.pageX,O.pageY);else{const wt=Ft(O),Ot=.5*(O.pageX+wt.x),Qt=.5*(O.pageY+wt.y);y.set(Ot,Qt)}}function Yt(O){if(F.length===1)b.set(O.pageX,O.pageY);else{const wt=Ft(O),Ot=.5*(O.pageX+wt.x),Qt=.5*(O.pageY+wt.y);b.set(Ot,Qt)}}function Kt(O){const wt=Ft(O),Ot=O.pageX-wt.x,Qt=O.pageY-wt.y,N=Math.sqrt(Ot*Ot+Qt*Qt);v.set(0,N)}function tt(O){r.enableZoom&&Kt(O),r.enablePan&&Yt(O)}function ie(O){r.enableZoom&&Kt(O),r.enableRotate&&Lt(O)}function Xt(O){if(F.length==1)g.set(O.pageX,O.pageY);else{const Ot=Ft(O),Qt=.5*(O.pageX+Ot.x),N=.5*(O.pageY+Ot.y);g.set(Qt,N)}M.subVectors(g,y).multiplyScalar(r.rotateSpeed);const wt=r.domElement;Q(2*Math.PI*M.x/wt.clientHeight),vt(2*Math.PI*M.y/wt.clientHeight),y.copy(g)}function te(O){if(F.length===1)w.set(O.pageX,O.pageY);else{const wt=Ft(O),Ot=.5*(O.pageX+wt.x),Qt=.5*(O.pageY+wt.y);w.set(Ot,Qt)}S.subVectors(w,b).multiplyScalar(r.panSpeed),I(S.x,S.y),b.copy(w)}function Gt(O){const wt=Ft(O),Ot=O.pageX-wt.x,Qt=O.pageY-wt.y,N=Math.sqrt(Ot*Ot+Qt*Qt);B.set(0,N),L.set(0,Math.pow(B.y/v.y,r.zoomSpeed)),J(L.y),v.copy(B);const Rt=(O.pageX+wt.x)*.5,Mt=(O.pageY+wt.y)*.5;ht(Rt,Mt)}function Te(O){r.enableZoom&&Gt(O),r.enablePan&&te(O)}function gt(O){r.enableZoom&&Gt(O),r.enableRotate&&Xt(O)}function R(O){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",V)),re(O),O.pointerType==="touch"?qt(O):ot(O))}function E(O){r.enabled!==!1&&(O.pointerType==="touch"?St(O):et(O))}function V(O){switch(Jt(O),F.length){case 0:r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",V),r.dispatchEvent(G_),u=l.NONE;break;case 1:const wt=F[0],Ot=ut[wt];qt({pointerId:wt,pageX:Ot.x,pageY:Ot.y});break}}function ot(O){let wt;switch(O.button){case 0:wt=r.mouseButtons.LEFT;break;case 1:wt=r.mouseButtons.MIDDLE;break;case 2:wt=r.mouseButtons.RIGHT;break;default:wt=-1}switch(wt){case Kr.DOLLY:if(r.enableZoom===!1)return;pt(O),u=l.DOLLY;break;case Kr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;bt(O),u=l.PAN}else{if(r.enableRotate===!1)return;j(O),u=l.ROTATE}break;case Kr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;j(O),u=l.ROTATE}else{if(r.enablePan===!1)return;bt(O),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function et(O){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;W(O);break;case l.DOLLY:if(r.enableZoom===!1)return;dt(O);break;case l.PAN:if(r.enablePan===!1)return;xt(O);break}}function ct(O){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(O.preventDefault(),r.dispatchEvent(ph),It(Ct(O)),r.dispatchEvent(G_))}function Ct(O){const wt=O.deltaMode,Ot={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(wt){case 1:Ot.deltaY*=16;break;case 2:Ot.deltaY*=100;break}return O.ctrlKey&&!K&&(Ot.deltaY*=10),Ot}function At(O){O.key==="Control"&&(K=!0,r.domElement.getRootNode().addEventListener("keyup",Et,{passive:!0,capture:!0}))}function Et(O){O.key==="Control"&&(K=!1,r.domElement.getRootNode().removeEventListener("keyup",Et,{passive:!0,capture:!0}))}function Pt(O){r.enabled===!1||r.enablePan===!1||Dt(O)}function qt(O){switch(Nt(O),F.length){case 1:switch(r.touches.ONE){case Qr.ROTATE:if(r.enableRotate===!1)return;Lt(O),u=l.TOUCH_ROTATE;break;case Qr.PAN:if(r.enablePan===!1)return;Yt(O),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case Qr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;tt(O),u=l.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ie(O),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function St(O){switch(Nt(O),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;Xt(O),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;te(O),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Te(O),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;gt(O),r.update();break;default:u=l.NONE}}function se(O){r.enabled!==!1&&O.preventDefault()}function re(O){F.push(O.pointerId)}function Jt(O){delete ut[O.pointerId];for(let wt=0;wt<F.length;wt++)if(F[wt]==O.pointerId){F.splice(wt,1);return}}function Nt(O){let wt=ut[O.pointerId];wt===void 0&&(wt=new oe,ut[O.pointerId]=wt),wt.set(O.pageX,O.pageY)}function Ft(O){const wt=O.pointerId===F[0]?F[1]:F[0];return ut[wt]}r.domElement.addEventListener("contextmenu",se),r.domElement.addEventListener("pointerdown",R),r.domElement.addEventListener("pointercancel",V),r.domElement.addEventListener("wheel",ct,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}function dA(){const o=en.useRef(null),[e,i]=en.useState(!1),[r,l]=en.useState(!1),[u,d]=en.useState(!1),[h,p]=en.useState(!1),[m,_]=en.useState(!1),y=en.useRef(!1),g=en.useRef({position:{x:1,z:1},direction:new Y(0,0,1),worldPosition:new Y(0,0,0),mesh:null}),M=en.useRef({}),b=en.useRef(null),w=en.useRef(!1);en.useEffect(()=>{y.current=u},[u]),en.useEffect(()=>{w.current=e},[e]);const[S,v]=en.useState(null),B=en.useRef(null);en.useRef(!1);const L=en.useRef(null),P=en.useRef(!1),k=()=>{if(console.log("Restarting game..."),!M.current.generateMaze||!M.current.createWalls){console.error("Game functions not initialized");return}if(b.current&&b.current.parent&&(console.log("Cleaning up celebration particles"),b.current.parent.remove(b.current),b.current.geometry&&b.current.geometry.dispose(),b.current.material&&b.current.material.dispose(),b.current=null,v(null)),console.log("Resetting game state"),i(!1),l(!1),d(!1),P.current=!1,console.log("Resetting player position and direction"),g.current.position={x:1,z:1},g.current.direction.set(0,0,1),console.log("Resetting maze reference"),L.current=null,console.log("Generating new maze"),M.current.generateMaze(),console.log("Creating new walls"),M.current.createWalls(),console.log("Updating player world position"),g.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),M.current.createPlayer&&M.current.mazeGroup){console.log("Creating new player mesh"),g.current.mesh&&g.current.mesh.parent&&(console.log("Removing old player mesh"),g.current.mesh.parent.remove(g.current.mesh),g.current.mesh.children.forEach(F=>{F.geometry&&F.geometry.dispose(),F.material&&F.material.dispose()})),console.log("Creating new player mesh");const H=M.current.createPlayer();console.log("Positioning new player at entrance"),H.position.copy(g.current.worldPosition),console.log("Adding new player to maze group"),M.current.mazeGroup.add(H),console.log("Added new player to maze group"),console.log("Updating player ref"),g.current.mesh=H}if(M.current.setInitialPlayerDirection?M.current.setInitialPlayerDirection(g.current.mesh):g.current.direction.set(0,0,1),g.current.mesh){g.current.mesh.position.copy(g.current.worldPosition);const H=Math.atan2(g.current.direction.x,g.current.direction.z);g.current.mesh.rotation.y=H,g.current.mesh.visible=!0,g.current.mesh.children.forEach(F=>{F.material&&(F.material.opacity=1,F.material.transparent=!0)})}};return en.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let H=function(gt){if(Te=requestAnimationFrame(H),!Dt&&!e){const E=gt-Lt,V=Math.min(E/Yt,1);if(V===1)Dt=!0,J.rotation.x=0,J.rotation.y=0;else{const ot=gi.lerp(0,0,V);J.rotation.x=ot,J.rotation.y=0}}else!Dt&&e&&(Dt=!0),y.current||(J.rotation.x=0,J.rotation.y=0,J.rotation.z=0);const R=gt*.001;if(J.children.forEach(E=>{E.material&&E.material.uniforms&&(E.material.uniforms.time.value=R)}),B.current?(console.log("Calling updateParticles from animation loop"),B.current()||(console.log("updateParticles returned false, setting to null"),B.current=null)):w.current&&!B.current&&console.log("Game won but updateParticles is null"),!y.current)(Math.abs(K.position.x)>.1||Math.abs(K.position.z)>.1||Math.abs(K.position.y-45)>.1||Math.abs(U.target.x)>.1||Math.abs(U.target.y)>.1||Math.abs(U.target.z)>.1)&&(K.position.set(0,45,0),U.target.set(0,0,0)),U.update();else{U.enabled=!1,U.enableRotate=!1,U.enableZoom=!1,U.enablePan=!1;const E=g.current.worldPosition;K.position.set(E.x,E.y+1.5,E.z);const V=K.position.clone();V.add(g.current.direction.clone().multiplyScalar(Z)),K.lookAt(V),gt%60===0&&console.log("Animation loop - Camera state:",{position:K.position.clone(),direction:g.current.direction.clone(),lookTarget:V}),K.updateProjectionMatrix(),K.updateMatrixWorld()}T.render(ut,K)},F=function(){K.aspect=window.innerWidth/window.innerHeight,K.updateProjectionMatrix(),T.setSize(window.innerWidth,window.innerHeight)};const ut=new aA;ut.background=new xe(0),console.log("Scene created");const K=new jn(75,window.innerWidth/window.innerHeight,.1,1e3);K.position.set(0,45,0),K.lookAt(0,0,0),console.log("Camera set up");const T=new M0({antialias:!0,canvas:o.current});T.setSize(window.innerWidth,window.innerHeight),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=W_,console.log("Renderer set up");const U=new hA(K,T.domElement);U.enableDamping=!0,U.dampingFactor=.05,U.enableRotate=!0,U.enableZoom=!0,U.minDistance=20,U.maxDistance=100,U.enablePan=!0,U.target.set(0,0,0),U.update(),console.log("Controls set up");const Q=21,vt=2,G=3,Z=2,I=e&&L.current?L.current:Array(Q).fill().map(()=>Array(Q).fill(1));L.current=I;const J=new _s;ut.add(J),console.log("Maze group created"),M.current.mazeGroup=J;const it=new ta({uniforms:{time:{value:0},baseColor:{value:new xe(4482815)}},vertexShader:`
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
        `,side:Ai});console.log("Wall material created");const ht=(gt,R)=>gt>=0&&gt<Q&&R>=0&&R<Q,C=(gt,R)=>{const E=[],V=[[0,2],[2,0],[0,-2],[-2,0]];for(let ot=V.length-1;ot>0;ot--){const et=Math.floor(Math.random()*(ot+1));[V[ot],V[et]]=[V[et],V[ot]]}for(const[ot,et]of V){const ct=gt+ot,Ct=R+et;ht(ct,Ct)&&I[ct][Ct]===1&&E.push([ct,Ct,ot/2,et/2])}return E},j=()=>{if(e&&L.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let et=0;et<Q;et++)for(let ct=0;ct<Q;ct++)I[et][ct]=1;const gt=[],R=1,E=1;for(I[R][E]=0,gt.push([R,E]);gt.length>0;){const[et,ct]=gt[gt.length-1],Ct=C(et,ct);if(Ct.length===0){gt.pop();continue}const[At,Et,Pt,qt]=Ct[Math.floor(Math.random()*Ct.length)];I[At][Et]=0,I[et+Pt][ct+qt]=0,gt.push([At,Et])}I[0][1]=0,I[Q-1][Q-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(Q-1)+","+(Q-2)+")");const V=new Set,ot=et=>{const[ct,Ct]=et;if(ct===Q-2&&Ct===Q-2)return!0;V.add(`${ct},${Ct}`);const At=[[0,1],[1,0],[0,-1],[-1,0]];for(const[Et,Pt]of At){const qt=ct+Et,St=Ct+Pt;if(ht(qt,St)&&I[qt][St]===0&&!V.has(`${qt},${St}`)&&ot([qt,St]))return!0}return!1};ot([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),j()),L.current=I};console.log("Maze generation function created");const pt=()=>{if(!e||!L.current){for(console.log("Creating new walls for the maze");J.children.length>0;){const gt=J.children[0];gt.isGroup?gt.children.forEach(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}):(gt.geometry&&gt.geometry.dispose(),gt.material&&gt.material.dispose()),J.remove(gt)}for(let gt=0;gt<Q;gt++)for(let R=0;R<Q;R++)if(I[gt][R]===1){const E=new Ba(Z,G,Z),V=new zn(E,it);if(V.position.set((gt-Q/2)*Z,G/2,(R-Q/2)*Z),J.add(V),gt===0||gt===Q-1||R===0||R===Q-1){if(gt<Q-1&&I[gt+1][R]===1){const ot=new zn(new Ba(Z,G,Z),it);ot.position.set((gt-Q/2+.5)*Z,G/2,(R-Q/2)*Z),J.add(ot)}if(R<Q-1&&I[gt][R+1]===1){const ot=new zn(new Ba(Z,G,Z),it);ot.position.set((gt-Q/2)*Z,G/2,(R-Q/2+.5)*Z),J.add(ot)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),M.current.generateMaze=j,M.current.createWalls=pt;const bt=gt=>{if(console.log("Setting initial player direction"),!gt){console.error("Player mesh not provided to setInitialPlayerDirection");return}const R=1,E=1,V=[{dx:0,dz:1,name:"down",vector:new Y(0,0,1)},{dx:1,dz:0,name:"right",vector:new Y(1,0,0)},{dx:0,dz:-1,name:"up",vector:new Y(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new Y(-1,0,0)}];console.log("Checking available directions from starting position:",R,E);const ot=V.filter(et=>{const ct=R+et.dx,Ct=E+et.dz;if(ct===0&&Ct===1)return console.log(`Direction ${et.name} leads to entrance, skipping`),!1;const At=ht(ct,Ct)&&I[ct][Ct]===0;return console.log(`Direction ${et.name} leads to (${ct}, ${Ct}): ${At?"valid":"invalid"}`),At});if(console.log("Valid directions:",ot.map(et=>et.name)),ot.length>0){const et=ot[0];console.log("Chosen direction:",et.name),g.current.direction.copy(et.vector);const ct=Math.atan2(et.vector.x,et.vector.z);gt.rotation.y=ct,console.log("Set player rotation to:",ct)}else console.log("No valid directions found, defaulting to down"),g.current.direction.set(0,0,1),gt.rotation.y=0};M.current.setInitialPlayerDirection=bt,e?console.log("Game has been won, preserving maze and player position"):(j(),pt(),console.log("Initial maze created"));const W=new uA(16777215,.6);ut.add(W);const dt=new cA(16777215,1);dt.position.set(50,100,50),dt.castShadow=!0,ut.add(dt);const xt=new F_(4474111,2,150);xt.position.set(50,50,50),ut.add(xt);const It=new F_(4474111,2,150);It.position.set(-50,50,-50),ut.add(It),console.log("Lights added");let Dt=!1;const Lt=performance.now(),Yt=1e3,Kt=()=>{console.log("Celebration function called - START");const gt=2e3,R=new Ci,E=new Float32Array(gt*3),V=new Float32Array(gt*3);for(let Et=0;Et<gt;Et++)E[Et*3]=g.current.worldPosition.x,E[Et*3+1]=g.current.worldPosition.y,E[Et*3+2]=g.current.worldPosition.z,V[Et*3]=Math.random(),V[Et*3+1]=Math.random(),V[Et*3+2]=Math.random();R.setAttribute("position",new li(E,3)),R.setAttribute("color",new li(V,3));const ot=new E0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:mh}),et=new rA(R,ot);ut.add(et),console.log("Particle system added to scene");const ct=[];for(let Et=0;Et<gt;Et++){const Pt=Math.random()*Math.PI*2,qt=Math.acos(Math.random()*2-1),St=.05+Math.random()*.1;ct.push(Math.sin(qt)*Math.cos(Pt)*St,Math.sin(qt)*Math.sin(Pt)*St,Math.cos(qt)*St)}b.current=et;const Ct=()=>{if(console.log("Update particles function called - frame"),!w.current)return console.log("Game no longer in won state, cleaning up particles"),et.parent&&(ut.remove(et),et.geometry.dispose(),ot.dispose()),b.current=null,B.current=null,!1;const Et=et.geometry.attributes.position.array;let Pt=!1;for(let St=0;St<gt;St++){const se=St*3;Et[se]+=ct[se],Et[se+1]+=ct[se+1],Et[se+2]+=ct[se+2],ct[se+1]-=.001;const re=Et[se]-g.current.worldPosition.x,Jt=Et[se+1]-g.current.worldPosition.y,Nt=Et[se+2]-g.current.worldPosition.z;Math.sqrt(re*re+Jt*Jt+Nt*Nt)<20&&(Pt=!0)}et.geometry.attributes.position.needsUpdate=!0;const qt=performance.now()-At;return qt>1e3&&(ot.opacity=Math.max(0,1-(qt-1e3)/1e3)),!Pt||qt>2e3?(console.log("Animation complete, cleaning up particles"),ut.remove(et),et.geometry.dispose(),ot.dispose(),b.current=null,B.current=null,!1):!0},At=performance.now();return console.log("Setting updateParticles function"),B.current=Ct,()=>{console.log("Cleanup function called"),et.parent&&(ut.remove(et),et.geometry.dispose(),ot.dispose()),b.current=null,B.current=null}},tt=()=>{const gt=new _s,R=new Ph(Z/2,Z,8),E=new sA({color:16776960}),V=new zn(R,E);V.rotation.x=-Math.PI/2,V.position.z=Z/4;const ot=new Rc(Z/4,Z/4,Z/2,8),et=new zn(ot,E);return et.rotation.x=-Math.PI/2,et.position.z=-Z/4,gt.add(V),gt.add(et),gt},ie=tt();M.current.createPlayer=tt;let Xt=null;if(e){for(let gt=0;gt<J.children.length;gt++){const R=J.children[gt];if(R.isGroup&&R.children.length===2){Xt=R;break}}Xt&&(Xt.children.forEach(gt=>{gt.geometry&&gt.geometry.dispose(),gt.material&&gt.material.dispose()}),J.remove(Xt),console.log("Removed existing player from maze group"))}if(!e)ie.position.set((1-Q/2)*Z,Z/2,(1-Q/2)*Z),g.current.mesh=ie,g.current.worldPosition.copy(ie.position),bt(ie);else{if(P.current){const R=Q-1,E=Q-2,V=new Y((R-Q/2)*Z,Z/2,(E-Q/2)*Z);console.log("Positioning player at exit:",V),ie.position.copy(V),g.current.worldPosition.copy(V),g.current.position={x:R,z:E}}else console.log("Using existing player position:",g.current.worldPosition),ie.position.copy(g.current.worldPosition);g.current.mesh=ie;const gt=Math.atan2(g.current.direction.x,g.current.direction.z);ie.rotation.y=gt}J.add(ie),g.current.mesh=ie,console.log("Player created and added to maze group");const te=gt=>{if(gt.key.toLowerCase()==="v")return console.log("View toggle key pressed"),gt.preventDefault(),gt.stopPropagation(),gt.stopImmediatePropagation(),h?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),d(R=>{const E=!R;console.log("Switching to:",E?"POV mode":"Top-down mode"),y.current=E;const V=K.position.clone(),ot=U.target.clone(),et=K.fov,ct={x:J.rotation.x,y:J.rotation.y,z:J.rotation.z},Ct=E?new Y(g.current.worldPosition.x,g.current.worldPosition.y+1.5,g.current.worldPosition.z):new Y(0,45,0),At=E?new Y(g.current.worldPosition.x+g.current.direction.x*Z,g.current.worldPosition.y+1.5,g.current.worldPosition.z+g.current.direction.z*Z):new Y(0,0,0),Et=E?75:60,Pt={x:0,y:0,z:0},qt=ie.visible?1:0,St=E?0:1;ie.visible=!0,ie.children.forEach(Nt=>{Nt.material&&(Nt.material.transparent||(Nt.material.transparent=!0),Nt.material.opacity=qt)}),U.enabled=!1;const se=1200;let re=null;const Jt=Nt=>{const Ft=Nt-Lt,Ht=Math.min(Ft/se,1),O=Ht<.5?4*Ht*Ht*Ht:1-Math.pow(-2*Ht+2,3)/2,wt=E?Ht<.9?1-Math.pow(1-Ht/.9,2):1+Math.sin((Ht-.9)*Math.PI*5)*.05:Math.pow(Ht,1.8),Ot=E?gi.lerp(V.y,Ct.y,wt):gi.lerp(V.y,Ct.y+25*Math.sin(Ht*Math.PI),wt);K.position.x=gi.lerp(V.x,Ct.x,O),K.position.y=Ot,K.position.z=gi.lerp(V.z,Ct.z,O);const Qt=Math.min(1,O*1.2);U.target.lerpVectors(ot,At,Qt);const N=E?Ht<.9?Math.pow(Ht/.9,1.5):1+Math.sin((Ht-.9)*Math.PI*5)*.03:1-Math.pow(1-Ht,1.7);K.fov=gi.lerp(et,Et,N);const Rt=O,Mt=Math.sin(Ht*Math.PI*3)*.03*(1-Ht);if(E?(J.rotation.x=gi.lerp(ct.x,Pt.x,Rt)+Mt,J.rotation.y=gi.lerp(ct.y,Pt.y,Rt)+Mt,J.rotation.z=gi.lerp(ct.z,Pt.z,Rt)):J.rotation.set(0,0,0),ie.children.forEach(zt=>{zt.material&&(zt.material.opacity=gi.lerp(qt,St,O))}),K.updateProjectionMatrix(),K.lookAt(U.target),U.update(),Ht<1)re=requestAnimationFrame(Jt);else{if(E){U.enabled=!1,U.enableRotate=!1,U.enableZoom=!1,U.enablePan=!1;const zt=g.current.worldPosition.clone();console.log("Switching to POV mode - Player position:",zt),K.position.set(zt.x,zt.y+1.5,zt.z);const Vt=K.position.clone();Vt.add(g.current.direction.clone().multiplyScalar(Z)),K.lookAt(Vt),U.target.copy(Vt),ie.visible=!1}else{K.position.set(0,45,0),U.target.set(0,0,0),U.enabled=!0,U.enableRotate=!0,U.enableZoom=!0,U.enablePan=!0,console.log("Switching to top-down mode - Player world position:",g.current.worldPosition),console.log("Switching to top-down mode - Player grid position:",g.current.position),ie.position.copy(g.current.worldPosition);const zt=Math.atan2(g.current.direction.x,g.current.direction.z);ie.rotation.y=zt,console.log("Updated player mesh position to:",ie.position),ie.children.forEach(Vt=>{Vt.material&&(Vt.material.opacity=1)}),ie.visible=!0,J.rotation.set(0,0,0)}J.rotation.set(0,0,0),window.isTransitioning=!1,p(!1)}};return re=requestAnimationFrame(Jt),E}),!1)},Gt=gt=>{if(w.current||!Dt||h){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const R=gt.key.toLowerCase();if(console.log("Key pressed:",R,"Current mode:",y.current?"POV":"Top-down"),R==="v")return;gt.preventDefault();const E=g.current.position.x,V=g.current.position.z;let ot=E,et=V,ct=!1;const Ct=g.current.mesh;if(!Ct){console.error("Player mesh not found");return}if(y.current){switch(console.log("Handling POV mode controls"),R){case"arrowup":case"w":console.log("Moving forward - Current position:",E,V),console.log("Current direction:",g.current.direction),ot=E+Math.round(g.current.direction.x),et=V+Math.round(g.current.direction.z),console.log("New position will be:",ot,et),ct="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",E,V),console.log("Current direction:",g.current.direction),ot=E-Math.round(g.current.direction.x),et=V-Math.round(g.current.direction.z),console.log("New position will be:",ot,et),ct="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",g.current.direction),g.current.direction.applyAxisAngle(new Y(0,1,0),Math.PI/2),console.log("New direction:",g.current.direction),ct="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",g.current.direction),g.current.direction.applyAxisAngle(new Y(0,1,0),-Math.PI/2),console.log("New direction:",g.current.direction),ct="rotate";break}if(ct==="move")if(ht(ot,et)&&I[ot][et]===0){console.log("Movement is valid, updating positions"),g.current.position.x=ot,g.current.position.z=et;const At=new Y((ot-Q/2)*Z,Z/2,(et-Q/2)*Z);console.log("New world position:",At),g.current.worldPosition.copy(At),Ct.position.copy(At),console.log("Updated player mesh position to:",Ct.position),K.position.set(At.x,At.y+1.5,At.z),console.log("New camera position:",K.position);const Et=K.position.clone();if(Et.add(g.current.direction.clone().multiplyScalar(Z)),K.lookAt(Et),console.log("Camera looking at:",Et),K.updateProjectionMatrix(),K.updateMatrixWorld(),ot===Q-1&&et===Q-2){P.current=!0,i(!0),l(!0);const Pt=Kt();return()=>{Pt&&Pt()}}}else console.log("Movement blocked - Out of bounds or wall:",ot,et);else if(ct==="rotate"){console.log("Handling rotation");const At=Math.atan2(g.current.direction.x,g.current.direction.z);Ct.rotation.y=At,console.log("Updated player mesh rotation to:",At);const Et=K.position.clone();Et.add(g.current.direction.clone().multiplyScalar(Z)),K.lookAt(Et),console.log("Camera looking at new direction:",Et),K.updateProjectionMatrix(),K.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),R){case"arrowup":case"w":console.log("Moving up - Current position:",E,V),et=V-1,g.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",E,V),et=V+1,g.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",E,V),ot=E-1,g.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",E,V),ot=E+1,g.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",ot,et),console.log("Maze value at target position:",I[ot][et]),console.log("Is in bounds:",ht(ot,et)),ht(ot,et)&&I[ot][et]===0){console.log("Movement is valid, updating positions"),g.current.position.x=ot,g.current.position.z=et;const At=new Y((ot-Q/2)*Z,Z/2,(et-Q/2)*Z);g.current.worldPosition.copy(At),Ct.position.copy(At);const Et=Math.atan2(g.current.direction.x,g.current.direction.z);if(Ct.rotation.y=Et,ot===Q-1&&et===Q-2){P.current=!0,i(!0),l(!0);const Pt=Kt();return()=>{Pt&&Pt()}}}}};window.removeEventListener("keydown",te,!0),window.removeEventListener("keydown",Gt),console.log("Attaching event listeners"),window.addEventListener("keydown",te,!0),window.addEventListener("keydown",Gt),console.log("Event listeners attached");let Te;return console.log("Starting animation"),H(),window.addEventListener("resize",F),()=>{console.log("Cleanup running"),window.removeEventListener("resize",F),window.removeEventListener("keydown",te,!0),window.removeEventListener("keydown",Gt),Te&&cancelAnimationFrame(Te),ut.traverse(gt=>{gt.geometry&&gt.geometry.dispose(),gt.material&&(Array.isArray(gt.material)?gt.material.forEach(R=>R.dispose()):gt.material.dispose())}),T.dispose(),U.dispose()}}catch(H){console.error("Error in setup:",H)}},[]),Yn.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000"},children:[Yn.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",display:"block"}}),Yn.jsxs("div",{style:{position:"absolute",bottom:20,left:20,color:"white",fontSize:"16px",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"10px",borderRadius:"5px"},children:["Controls:",Yn.jsx("br",{}),"Arrow Keys or WASD: Move",Yn.jsx("br",{}),"V: Toggle View",Yn.jsx("br",{}),!u&&"Mouse: Rotate/Zoom Camera"]}),r&&Yn.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"48px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"20px",borderRadius:"10px"},children:[Yn.jsx("div",{children:"Victory!"}),Yn.jsx("button",{onClick:k,style:{fontSize:"24px",padding:"10px 20px",marginTop:"20px",cursor:"pointer",backgroundColor:"#4CAF50",border:"none",color:"white",borderRadius:"5px"},children:"Play Again"})]}),h&&Yn.jsx("div",{style:{position:"absolute",bottom:70,left:20,color:"#ffcc00",fontSize:"16px",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"10px",borderRadius:"5px",animation:"pulse 1s infinite"},children:"Changing view..."}),Yn.jsx("style",{jsx:"true",children:`
        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `})]})}BS.createRoot(document.getElementById("root")).render(Yn.jsx(en.StrictMode,{children:Yn.jsx(dA,{})}));
