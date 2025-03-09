(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Cy(){if(eg)return Ro;eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var ng;function Dy(){return ng||(ng=1,Lf.exports=Cy()),Lf.exports}var je=Dy(),Uf={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Ly(){if(ig)return Se;ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function v(C,Z,ft){this.props=C,this.context=Z,this.refs=R,this.updater=ft||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function P(C,Z,ft){this.props=C,this.context=Z,this.refs=R,this.updater=ft||M}var L=P.prototype=new _;L.constructor=P,b(L,v.prototype),L.isPureReactComponent=!0;var B=Array.isArray,k={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function F(C,Z,ft,Tt,W,ct){return ft=ct.ref,{$$typeof:o,type:C,key:Z,ref:ft!==void 0?ft:null,props:ct}}function pt(C,Z){return F(C.type,Z,void 0,void 0,void 0,C.props)}function I(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function E(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ft){return Z[ft]})}var N=/\/+/g;function ht(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?E(""+C.key):Z.toString(36)}function Et(){}function Y(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(Et,Et):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function nt(C,Z,ft,Tt,W){var ct=typeof C;(ct==="undefined"||ct==="boolean")&&(C=null);var Mt=!1;if(C===null)Mt=!0;else switch(ct){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(C.$$typeof){case o:case e:Mt=!0;break;case g:return Mt=C._init,nt(Mt(C._payload),Z,ft,Tt,W)}}if(Mt)return W=W(C),Mt=Tt===""?"."+ht(C,0):Tt,B(W)?(ft="",Mt!=null&&(ft=Mt.replace(N,"$&/")+"/"),nt(W,Z,ft,"",function(zt){return zt})):W!=null&&(I(W)&&(W=pt(W,ft+(W.key==null||C&&C.key===W.key?"":(""+W.key).replace(N,"$&/")+"/")+Mt)),Z.push(W)),1;Mt=0;var Xt=Tt===""?".":Tt+":";if(B(C))for(var Bt=0;Bt<C.length;Bt++)Tt=C[Bt],ct=Xt+ht(Tt,Bt),Mt+=nt(Tt,Z,ft,ct,W);else if(Bt=x(C),typeof Bt=="function")for(C=Bt.call(C),Bt=0;!(Tt=C.next()).done;)Tt=Tt.value,ct=Xt+ht(Tt,Bt++),Mt+=nt(Tt,Z,ft,ct,W);else if(ct==="object"){if(typeof C.then=="function")return nt(Y(C),Z,ft,Tt,W);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(C,Z,ft){if(C==null)return C;var Tt=[],W=0;return nt(C,Tt,"","",function(ct){return Z.call(ft,ct,W++)}),Tt}function it(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(ft){(C._status===0||C._status===-1)&&(C._status=1,C._result=ft)},function(ft){(C._status===0||C._status===-1)&&(C._status=2,C._result=ft)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var $=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function lt(){}return Se.Children={map:H,forEach:function(C,Z,ft){H(C,function(){Z.apply(this,arguments)},ft)},count:function(C){var Z=0;return H(C,function(){Z++}),Z},toArray:function(C){return H(C,function(Z){return Z})||[]},only:function(C){if(!I(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Se.Component=v,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=P,Se.StrictMode=r,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,Se.act=function(){throw Error("act(...) is not supported in production builds of React.")},Se.cache=function(C){return function(){return C.apply(null,arguments)}},Se.cloneElement=function(C,Z,ft){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Tt=b({},C.props),W=C.key,ct=void 0;if(Z!=null)for(Mt in Z.ref!==void 0&&(ct=void 0),Z.key!==void 0&&(W=""+Z.key),Z)!V.call(Z,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&Z.ref===void 0||(Tt[Mt]=Z[Mt]);var Mt=arguments.length-2;if(Mt===1)Tt.children=ft;else if(1<Mt){for(var Xt=Array(Mt),Bt=0;Bt<Mt;Bt++)Xt[Bt]=arguments[Bt+2];Tt.children=Xt}return F(C.type,W,void 0,void 0,ct,Tt)},Se.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},Se.createElement=function(C,Z,ft){var Tt,W={},ct=null;if(Z!=null)for(Tt in Z.key!==void 0&&(ct=""+Z.key),Z)V.call(Z,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(W[Tt]=Z[Tt]);var Mt=arguments.length-2;if(Mt===1)W.children=ft;else if(1<Mt){for(var Xt=Array(Mt),Bt=0;Bt<Mt;Bt++)Xt[Bt]=arguments[Bt+2];W.children=Xt}if(C&&C.defaultProps)for(Tt in Mt=C.defaultProps,Mt)W[Tt]===void 0&&(W[Tt]=Mt[Tt]);return F(C,ct,void 0,void 0,null,W)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(C){return{$$typeof:h,render:C}},Se.isValidElement=I,Se.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:it}},Se.memo=function(C,Z){return{$$typeof:m,type:C,compare:Z===void 0?null:Z}},Se.startTransition=function(C){var Z=k.T,ft={};k.T=ft;try{var Tt=C(),W=k.S;W!==null&&W(ft,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(lt,$)}catch(ct){$(ct)}finally{k.T=Z}},Se.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},Se.use=function(C){return k.H.use(C)},Se.useActionState=function(C,Z,ft){return k.H.useActionState(C,Z,ft)},Se.useCallback=function(C,Z){return k.H.useCallback(C,Z)},Se.useContext=function(C){return k.H.useContext(C)},Se.useDebugValue=function(){},Se.useDeferredValue=function(C,Z){return k.H.useDeferredValue(C,Z)},Se.useEffect=function(C,Z){return k.H.useEffect(C,Z)},Se.useId=function(){return k.H.useId()},Se.useImperativeHandle=function(C,Z,ft){return k.H.useImperativeHandle(C,Z,ft)},Se.useInsertionEffect=function(C,Z){return k.H.useInsertionEffect(C,Z)},Se.useLayoutEffect=function(C,Z){return k.H.useLayoutEffect(C,Z)},Se.useMemo=function(C,Z){return k.H.useMemo(C,Z)},Se.useOptimistic=function(C,Z){return k.H.useOptimistic(C,Z)},Se.useReducer=function(C,Z,ft){return k.H.useReducer(C,Z,ft)},Se.useRef=function(C){return k.H.useRef(C)},Se.useState=function(C){return k.H.useState(C)},Se.useSyncExternalStore=function(C,Z,ft){return k.H.useSyncExternalStore(C,Z,ft)},Se.useTransition=function(){return k.H.useTransition()},Se.version="19.0.0",Se}var ag;function Ah(){return ag||(ag=1,Uf.exports=Ly()),Uf.exports}var Re=Ah(),Nf={exports:{}},Co={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Uy(){return rg||(rg=1,function(o){function e(H,it){var $=H.length;H.push(it);t:for(;0<$;){var lt=$-1>>>1,C=H[lt];if(0<l(C,it))H[lt]=it,H[$]=C,$=lt;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var it=H[0],$=H.pop();if($!==it){H[0]=$;t:for(var lt=0,C=H.length,Z=C>>>1;lt<Z;){var ft=2*(lt+1)-1,Tt=H[ft],W=ft+1,ct=H[W];if(0>l(Tt,$))W<C&&0>l(ct,Tt)?(H[lt]=ct,H[W]=$,lt=W):(H[lt]=Tt,H[ft]=$,lt=ft);else if(W<C&&0>l(ct,$))H[lt]=ct,H[W]=$,lt=W;else break t}}return it}function l(H,it){var $=H.sortIndex-it.sortIndex;return $!==0?$:H.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,y=null,x=3,M=!1,b=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(H){for(var it=i(m);it!==null;){if(it.callback===null)r(m);else if(it.startTime<=H)r(m),it.sortIndex=it.expirationTime,e(p,it);else break;it=i(m)}}function B(H){if(R=!1,L(H),!b)if(i(p)!==null)b=!0,Y();else{var it=i(m);it!==null&&nt(B,it.startTime-H)}}var k=!1,V=-1,F=5,pt=-1;function I(){return!(o.unstable_now()-pt<F)}function E(){if(k){var H=o.unstable_now();pt=H;var it=!0;try{t:{b=!1,R&&(R=!1,_(V),V=-1),M=!0;var $=x;try{e:{for(L(H),y=i(p);y!==null&&!(y.expirationTime>H&&I());){var lt=y.callback;if(typeof lt=="function"){y.callback=null,x=y.priorityLevel;var C=lt(y.expirationTime<=H);if(H=o.unstable_now(),typeof C=="function"){y.callback=C,L(H),it=!0;break e}y===i(p)&&r(p),L(H)}else r(p);y=i(p)}if(y!==null)it=!0;else{var Z=i(m);Z!==null&&nt(B,Z.startTime-H),it=!1}}break t}finally{y=null,x=$,M=!1}it=void 0}}finally{it?N():k=!1}}}var N;if(typeof P=="function")N=function(){P(E)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Et=ht.port2;ht.port1.onmessage=E,N=function(){Et.postMessage(null)}}else N=function(){v(E,0)};function Y(){k||(k=!0,N())}function nt(H,it){V=v(function(){H(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){b||M||(b=!0,Y())},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(H){switch(x){case 1:case 2:case 3:var it=3;break;default:it=x}var $=x;x=it;try{return H()}finally{x=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,it){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=x;x=H;try{return it()}finally{x=$}},o.unstable_scheduleCallback=function(H,it,$){var lt=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?lt+$:lt):$=lt,H){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=$+C,H={id:g++,callback:it,priorityLevel:H,startTime:$,expirationTime:C,sortIndex:-1},$>lt?(H.sortIndex=$,e(m,H),i(p)===null&&H===i(m)&&(R?(_(V),V=-1):R=!0,nt(B,$-lt))):(H.sortIndex=C,e(p,H),b||M||(b=!0,Y())),H},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(H){var it=x;return function(){var $=x;x=it;try{return H.apply(this,arguments)}finally{x=$}}}}(Pf)),Pf}var sg;function Ny(){return sg||(sg=1,Of.exports=Uy()),Of.exports}var zf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Oy(){if(og)return Cn;og=1;var o=Ah();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Cn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Cn.requestFormReset=function(p){r.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.0.0",Cn}var lg;function Py(){if(lg)return zf.exports;lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Oy(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function zy(){if(cg)return Co;cg=1;var o=Ny(),e=Ah(),i=Py();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case h:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case b:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,N,ht;function Et(t){if(N===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+t+ht}var Y=!1;function nt(t,n){if(!t||Y)return"";Y=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(dt){var at=dt}Reflect.construct(t,[],Ct)}else{try{Ct.call()}catch(dt){at=dt}t.call(Ct.prototype)}}else{try{throw Error()}catch(dt){at=dt}(Ct=t())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(dt){if(dt&&at&&typeof dt.stack=="string")return[dt.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var z=S.split(`
`),j=A.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===j.length)for(s=z.length-1,c=j.length-1;1<=s&&0<=c&&z[s]!==j[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==j[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==j[c]){var gt=`
`+z[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{Y=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Et(a):""}function H(t){switch(t.tag){case 26:case 27:case 5:return Et(t.type);case 16:return Et("Lazy");case 13:return Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return t=nt(t.type,!1),t;case 11:return t=nt(t.type.render,!1),t;case 1:return t=nt(t.type,!0),t;default:return""}}function it(t){try{var n="";do n+=H(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function lt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if($(t)!==t)throw Error(r(188))}function Z(t){var n=t.alternate;if(!n){if(n=$(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),t;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,s=f;break}if(A===s){S=!0,s=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=c;break}if(A===s){S=!0,s=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function ft(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=ft(t),n!==null)return n;t=t.sibling}return null}var Tt=Array.isArray,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},Mt=[],Xt=-1;function Bt(t){return{current:t}}function zt(t){0>Xt||(t.current=Mt[Xt],Mt[Xt]=null,Xt--)}function _t(t,n){Xt++,Mt[Xt]=t.current,t.current=n}var Ut=Bt(null),G=Bt(null),Jt=Bt(null),jt=Bt(null);function Zt(t,n){switch(_t(Jt,n),_t(G,t),_t(Ut,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Dm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Dm(t),n=Lm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}zt(Ut),_t(Ut,n)}function yt(){zt(Ut),zt(G),zt(Jt)}function ye(t){t.memoizedState!==null&&_t(jt,t);var n=Ut.current,a=Lm(n,t.type);n!==a&&(_t(G,t),_t(Ut,a))}function qt(t){G.current===t&&(zt(Ut),zt(G)),jt.current===t&&(zt(jt),Eo._currentValue=ct)}var w=Object.prototype.hasOwnProperty,T=o.unstable_scheduleCallback,J=o.unstable_cancelCallback,ut=o.unstable_shouldYield,bt=o.unstable_requestPaint,ot=o.unstable_now,Ft=o.unstable_getCurrentPriorityLevel,At=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,$t=o.unstable_NormalPriority,de=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Le=o.log,_e=o.unstable_setDisableYieldValue,oe=null,Wt=null;function Vt(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(oe,t,void 0,(t.current.flags&128)===128)}catch{}}function le(t){if(typeof Le=="function"&&_e(t),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(oe,t)}catch{}}var O=Math.clz32?Math.clz32:ie,Nt=Math.log,Ht=Math.LN2;function ie(t){return t>>>=0,t===0?32:31-(Nt(t)/Ht|0)|0}var U=128,vt=4194304;function xt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,S=t.warmLanes;t=t.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?s=xt(a):(f&=A,f!==0?s=xt(f):t||(S=A&~S,S!==0&&(s=xt(S))))):(A=a&~c,A!==0?s=xt(A):f!==0?s=xt(f):t||(S=a&~S,S!==0&&(s=xt(S)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function be(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function Dt(){var t=vt;return vt<<=1,!(vt&62914560)&&(vt=4194304),t}function Ot(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,j=t.hiddenUpdates;for(a=S&~a;0<a;){var gt=31-O(a),Ct=1<<gt;A[gt]=0,z[gt]=-1;var at=j[gt];if(at!==null)for(j[gt]=null,gt=0;gt<at.length;gt++){var dt=at[gt];dt!==null&&(dt.lane&=-536870913)}a&=~Ct}s!==0&&Pt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Pt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-O(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function ce(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-O(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function he(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function xe(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Zm(t.type))}function pe(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var ze=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ze,Oe="__reactProps$"+ze,tn="__reactContainer$"+ze,ti="__reactEvents$"+ze,sa="__reactListeners$"+ze,D="__reactHandles$"+ze,Q="__reactResources$"+ze,rt="__reactMarker$"+ze;function st(t){delete t[Ae],delete t[Oe],delete t[ti],delete t[sa],delete t[D]}function et(t){var n=t[Ae];if(n)return n;for(var a=t.parentNode;a;){if(n=a[tn]||a[Ae]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Om(t);t!==null;){if(a=t[Ae])return a;t=Om(t)}return n}t=a,a=t.parentNode}return null}function Gt(t){if(t=t[Ae]||t[tn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ne(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ee(t){var n=t[Q];return n||(n=t[Q]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Kt(t){t[rt]=!0}var se=new Set,me={};function fe(t,n){Ie(t,n),Ie(t+"Capture",n)}function Ie(t,n){for(me[t]=n,t=0;t<n.length;t++)se.add(n[t])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ln=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ei={},Xe={};function Me(t){return w.call(Xe,t)?!0:w.call(ei,t)?!1:ln.test(t)?Xe[t]=!0:(ei[t]=!0,!1)}function oa(t,n,a){if(Me(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function xn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Nn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function la(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(t){var n=la(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rn(t){t._valueTracker||(t._valueTracker=Ns(t))}function Ti(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=la(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function wn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Os(t,n,a,s,c,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Nn(n)):t.value!==""+Nn(n)&&(t.value=""+Nn(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,S,Nn(n)):a!=null?Cc(t,S,Nn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Nn(A):t.removeAttribute("name")}function Ps(t,n,a,s,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Nn(a):"",n=n!=null?""+Nn(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Cc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Nn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function zh(t,n,a){if(n!=null&&(n=""+Nn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Nn(a):""}function Bh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Tt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Nn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ih(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Fh(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Hh(t){var n=Gt(t);if(n&&(t=n.stateNode)){var a=t[Oe]||null;t:switch(t=n.stateNode,n.type){case"input":if(Os(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Oe]||null;if(!c)throw Error(r(90));Os(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ti(s)}break t;case"textarea":zh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var Nc=!1;function Gh(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(Tl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Hh(n),t)))for(n=0;n<t.length;n++)Hh(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Oe]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Qe)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oc=!1}var ua=null,Pc=null,Vo=null;function Vh(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function kh(){return!1}function Hn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:kh,this.isPropagationStopped=kh,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Hn(Wa),Fs=E({},Wa,{view:0,detail:0}),C0=Hn(Fs),zc,Bc,Is,qo=E({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(zc=t.screenX-Is.screenX,Bc=t.screenY-Is.screenY):Bc=zc=0,Is=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Wh=Hn(qo),D0=E({},qo,{dataTransfer:0}),L0=Hn(D0),U0=E({},Fs,{relatedTarget:0}),Fc=Hn(U0),N0=E({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Hn(N0),P0=E({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Hn(P0),B0=E({},Wa,{data:0}),Xh=Hn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=E({},Fs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Hn(V0),W0=E({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Hn(W0),X0=E({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Hn(X0),Y0=E({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Hn(Y0),Z0=E({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Hn(Z0),Q0=E({},Wa,{newState:0,oldState:0}),J0=Hn(Q0),$0=[9,13,27,32],Hc=Qe&&"CompositionEvent"in window,Hs=null;Qe&&"documentMode"in document&&(Hs=document.documentMode);var tv=Qe&&"TextEvent"in window&&!Hs,Yh=Qe&&(!Hc||Hs&&8<Hs&&11>=Hs),jh=" ",Zh=!1;function Kh(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,jh);case"textInput":return t=n.data,t===jh&&Zh?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Kh(t,n)?(t=Vh(),Vo=Pc=ua=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yh&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function $h(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function av(t){bm(t,0)}function Yo(t){var n=ne(t);if(Ti(n))return t}function td(t,n){if(t==="change")return n}var ed=!1;if(Qe){var Gc;if(Qe){var Vc="oninput"in document;if(!Vc){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),Vc=typeof nd.oninput=="function"}Gc=Vc}else Gc=!1;ed=Gc&&(!document.documentMode||9<document.documentMode)}function id(){Gs&&(Gs.detachEvent("onpropertychange",ad),Vs=Gs=null)}function ad(t){if(t.propertyName==="value"&&Yo(Vs)){var n=[];$h(n,Vs,t,Uc(t)),Gh(av,n)}}function rv(t,n,a){t==="focusin"?(id(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",ad)):t==="focusout"&&id()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Vs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:cv;function ks(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!w.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sd(t,n){var a=rd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rd(a)}}function od(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?od(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ld(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=ld(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&od(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=sd(n,f);var S=sd(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(S.node,S.offset)):(t.setEnd(S.node,S.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=Qe&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,Ws=null,Xc=!1;function cd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==ca(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&ks(Ws,s)||(Ws=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},qc={},ud={};Qe&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ud)return qc[t]=n[a];return t}var fd=qa("animationend"),hd=qa("animationiteration"),dd=qa("animationstart"),hv=qa("transitionrun"),dv=qa("transitionstart"),pv=qa("transitioncancel"),pd=qa("transitionend"),md=new Map,gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(t,n){md.set(t,n),fe(n,[t])}var ni=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&_d(a,c,f)}}function Zo(t,n,a,s){ni[Lr++]=t,ni[Lr++]=n,ni[Lr++]=a,ni[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function fa(t,n){return Zo(t,null,null,n),Ko(t)}function _d(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-O(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<go)throw go=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},vd=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=vd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:it(n)},vd.set(t,n),n)}return{value:t,source:n,stack:it(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ai=[],ri=0,Ya=null,Pi=1,zi="";function ja(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function yd(t,n,a){ai[ri++]=Pi,ai[ri++]=zi,ai[ri++]=Ya,Ya=t;var s=Pi;t=zi;var c=32-O(s)-1;s&=~(1<<c),a+=1;var f=32-O(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Pi=1<<32-O(n)+c|a<<c|s,zi=f+t}else Pi=1<<f|a<<c|s,zi=t}function Zc(t){t.return!==null&&(ja(t,1),yd(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===Ya;)Ya=ai[--ri],ai[ri]=null,zi=ai[--ri],ai[ri]=null,Pi=ai[--ri],ai[ri]=null}var On=null,Mn=null,Be=!1,gi=null,bi=!1,Qc=Error(r(519));function Za(t){var n=Error(r(418,""));throw Ys(ii(n,t)),Qc}function Sd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ae]=t,n[Oe]=s,a){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)Ue(vo[a],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":Ue("invalid",n),Ps(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),rn(n);break;case"select":Ue("invalid",n);break;case"textarea":Ue("invalid",n),Bh(n,s.value,s.defaultValue,s.children),rn(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cm(n.textContent,a)?(s.popover!=null&&(Ue("beforetoggle",n),Ue("toggle",n)),s.onScroll!=null&&Ue("scroll",n),s.onScrollEnd!=null&&Ue("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Za(t)}function xd(t){for(On=t.return;On;)switch(On.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:On=On.return}}function Xs(t){if(t!==On)return!1;if(!Be)return xd(t),Be=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Mn&&Za(t),xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Mn=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Mn=null}}else Mn=On?vi(t.stateNode.nextSibling):null;return!0}function qs(){Mn=On=null,Be=!1}function Ys(t){gi===null?gi=[t]:gi.push(t)}var js=Error(r(460)),Md=Error(r(474)),Jc={then:function(){}};function Ed(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function Td(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t}throw Zs=n,js}}var Zs=null;function bd(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}var Pr=null,Ks=0;function tl(t){var n=Ks;return Ks+=1,Pr===null&&(Pr=[]),Td(Pr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ad(t){var n=t._init;return n(t._payload)}function wd(t){function n(K,X){if(t){var tt=K.deletions;tt===null?(K.deletions=[X],K.flags|=16):tt.push(X)}}function a(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function s(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function c(K,X){return K=Ea(K,X),K.index=0,K.sibling=null,K}function f(K,X,tt){return K.index=tt,t?(tt=K.alternate,tt!==null?(tt=tt.index,tt<X?(K.flags|=33554434,X):tt):(K.flags|=33554434,X)):(K.flags|=1048576,X)}function S(K){return t&&K.alternate===null&&(K.flags|=33554434),K}function A(K,X,tt,St){return X===null||X.tag!==6?(X=qu(tt,K.mode,St),X.return=K,X):(X=c(X,tt),X.return=K,X)}function z(K,X,tt,St){var Qt=tt.type;return Qt===p?gt(K,X,tt.props.children,St,tt.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===P&&Ad(Qt)===X.type)?(X=c(X,tt.props),Qs(X,tt),X.return=K,X):(X=yl(tt.type,tt.key,tt.props,null,K.mode,St),Qs(X,tt),X.return=K,X)}function j(K,X,tt,St){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=Yu(tt,K.mode,St),X.return=K,X):(X=c(X,tt.children||[]),X.return=K,X)}function gt(K,X,tt,St,Qt){return X===null||X.tag!==7?(X=rr(tt,K.mode,St,Qt),X.return=K,X):(X=c(X,tt),X.return=K,X)}function Ct(K,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=qu(""+X,K.mode,tt),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case d:return tt=yl(X.type,X.key,X.props,null,K.mode,tt),Qs(tt,X),tt.return=K,tt;case h:return X=Yu(X,K.mode,tt),X.return=K,X;case P:var St=X._init;return X=St(X._payload),Ct(K,X,tt)}if(Tt(X)||V(X))return X=rr(X,K.mode,tt,null),X.return=K,X;if(typeof X.then=="function")return Ct(K,tl(X),tt);if(X.$$typeof===M)return Ct(K,gl(K,X),tt);el(K,X)}return null}function at(K,X,tt,St){var Qt=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:A(K,X,""+tt,St);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case d:return tt.key===Qt?z(K,X,tt,St):null;case h:return tt.key===Qt?j(K,X,tt,St):null;case P:return Qt=tt._init,tt=Qt(tt._payload),at(K,X,tt,St)}if(Tt(tt)||V(tt))return Qt!==null?null:gt(K,X,tt,St,null);if(typeof tt.then=="function")return at(K,X,tl(tt),St);if(tt.$$typeof===M)return at(K,X,gl(K,tt),St);el(K,tt)}return null}function dt(K,X,tt,St,Qt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return K=K.get(tt)||null,A(X,K,""+St,Qt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case d:return K=K.get(St.key===null?tt:St.key)||null,z(X,K,St,Qt);case h:return K=K.get(St.key===null?tt:St.key)||null,j(X,K,St,Qt);case P:var we=St._init;return St=we(St._payload),dt(K,X,tt,St,Qt)}if(Tt(St)||V(St))return K=K.get(tt)||null,gt(X,K,St,Qt,null);if(typeof St.then=="function")return dt(K,X,tt,tl(St),Qt);if(St.$$typeof===M)return dt(K,X,tt,gl(X,St),Qt);el(X,St)}return null}function ae(K,X,tt,St){for(var Qt=null,we=null,re=X,ue=X=0,yn=null;re!==null&&ue<tt.length;ue++){re.index>ue?(yn=re,re=null):yn=re.sibling;var Fe=at(K,re,tt[ue],St);if(Fe===null){re===null&&(re=yn);break}t&&re&&Fe.alternate===null&&n(K,re),X=f(Fe,X,ue),we===null?Qt=Fe:we.sibling=Fe,we=Fe,re=yn}if(ue===tt.length)return a(K,re),Be&&ja(K,ue),Qt;if(re===null){for(;ue<tt.length;ue++)re=Ct(K,tt[ue],St),re!==null&&(X=f(re,X,ue),we===null?Qt=re:we.sibling=re,we=re);return Be&&ja(K,ue),Qt}for(re=s(re);ue<tt.length;ue++)yn=dt(re,K,ue,tt[ue],St),yn!==null&&(t&&yn.alternate!==null&&re.delete(yn.key===null?ue:yn.key),X=f(yn,X,ue),we===null?Qt=yn:we.sibling=yn,we=yn);return t&&re.forEach(function(Da){return n(K,Da)}),Be&&ja(K,ue),Qt}function ve(K,X,tt,St){if(tt==null)throw Error(r(151));for(var Qt=null,we=null,re=X,ue=X=0,yn=null,Fe=tt.next();re!==null&&!Fe.done;ue++,Fe=tt.next()){re.index>ue?(yn=re,re=null):yn=re.sibling;var Da=at(K,re,Fe.value,St);if(Da===null){re===null&&(re=yn);break}t&&re&&Da.alternate===null&&n(K,re),X=f(Da,X,ue),we===null?Qt=Da:we.sibling=Da,we=Da,re=yn}if(Fe.done)return a(K,re),Be&&ja(K,ue),Qt;if(re===null){for(;!Fe.done;ue++,Fe=tt.next())Fe=Ct(K,Fe.value,St),Fe!==null&&(X=f(Fe,X,ue),we===null?Qt=Fe:we.sibling=Fe,we=Fe);return Be&&ja(K,ue),Qt}for(re=s(re);!Fe.done;ue++,Fe=tt.next())Fe=dt(re,K,ue,Fe.value,St),Fe!==null&&(t&&Fe.alternate!==null&&re.delete(Fe.key===null?ue:Fe.key),X=f(Fe,X,ue),we===null?Qt=Fe:we.sibling=Fe,we=Fe);return t&&re.forEach(function(Ry){return n(K,Ry)}),Be&&ja(K,ue),Qt}function an(K,X,tt,St){if(typeof tt=="object"&&tt!==null&&tt.type===p&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case d:t:{for(var Qt=tt.key;X!==null;){if(X.key===Qt){if(Qt=tt.type,Qt===p){if(X.tag===7){a(K,X.sibling),St=c(X,tt.props.children),St.return=K,K=St;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===P&&Ad(Qt)===X.type){a(K,X.sibling),St=c(X,tt.props),Qs(St,tt),St.return=K,K=St;break t}a(K,X);break}else n(K,X);X=X.sibling}tt.type===p?(St=rr(tt.props.children,K.mode,St,tt.key),St.return=K,K=St):(St=yl(tt.type,tt.key,tt.props,null,K.mode,St),Qs(St,tt),St.return=K,K=St)}return S(K);case h:t:{for(Qt=tt.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){a(K,X.sibling),St=c(X,tt.children||[]),St.return=K,K=St;break t}else{a(K,X);break}else n(K,X);X=X.sibling}St=Yu(tt,K.mode,St),St.return=K,K=St}return S(K);case P:return Qt=tt._init,tt=Qt(tt._payload),an(K,X,tt,St)}if(Tt(tt))return ae(K,X,tt,St);if(V(tt)){if(Qt=V(tt),typeof Qt!="function")throw Error(r(150));return tt=Qt.call(tt),ve(K,X,tt,St)}if(typeof tt.then=="function")return an(K,X,tl(tt),St);if(tt.$$typeof===M)return an(K,X,gl(K,tt),St);el(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(a(K,X.sibling),St=c(X,tt),St.return=K,K=St):(a(K,X),St=qu(tt,K.mode,St),St.return=K,K=St),S(K)):a(K,X)}return function(K,X,tt,St){try{Ks=0;var Qt=an(K,X,tt,St);return Pr=null,Qt}catch(re){if(re===js)throw re;var we=ci(29,re,null,K.mode);return we.lanes=St,we.return=K,we}finally{}}}var Ka=wd(!0),Rd=wd(!1),zr=Bt(null),nl=Bt(0);function Cd(t,n){t=Yi,_t(nl,t),_t(zr,n),Yi=t|n.baseLanes}function $c(){_t(nl,Yi),_t(zr,zr.current)}function tu(){Yi=nl.current,zt(zr),zt(nl)}var si=Bt(null),Ai=null;function ha(t){var n=t.alternate;_t(dn,dn.current&1),_t(si,t),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Dd(t){if(t.tag===22){if(_t(dn,dn.current),_t(si,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else da()}function da(){_t(dn,dn.current),_t(si,si.current)}function Bi(t){zt(si),Ai===t&&(Ai=null),zt(dn)}var dn=Bt(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,pn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var $s=null,nu=0,Br=0,Fr=null;function vv(t,n){if($s===null){var a=$s=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Ld,Ld),n}function Ld(){if(--nu===0&&$s!==null){Fr!==null&&(Fr.status="fulfilled");var t=$s;$s=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ud=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Ud!==null&&Ud(t,n)};var Qa=Bt(null);function iu(){var t=Qa.current;return t!==null?t:qe.pooledCache}function al(t,n){n===null?_t(Qa,Qa.current):_t(Qa,n.pool)}function Nd(){var t=iu();return t===null?null:{parent:pn._currentValue,pool:t}}var pa=0,Te=null,He=null,cn=null,rl=!1,Ir=!1,Ja=!1,sl=0,to=0,Hr=null,Sv=0;function sn(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return pa=f,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?$a:ma,Ja=!1,f=a(s,c),Ja=!1,Ir&&(f=Pd(n,a,s,c)),Od(t),f}function Od(t){I.H=wi;var n=He!==null&&He.next!==null;if(pa=0,cn=He=Te=null,rl=!1,to=0,Hr=null,n)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&ml(t)&&(_n=!0))}function Pd(t,n,a,s){Te=t;var c=0;do{if(Ir&&(Hr=null),to=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,cn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=tr,f=n(a,s)}while(Ir);return f}function xv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(Te.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}pa=0,cn=He=Te=null,Ir=!1,to=sl=0,Hr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Te.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(He===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=cn===null?Te.memoizedState:cn.next;if(n!==null)cn=n,He=t;else{if(t===null)throw Te.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?Te.memoizedState=cn=t:cn=cn.next=t}return cn}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function eo(t){var n=to;return to+=1,Hr===null&&(Hr=[]),t=Td(Hr,t,n),n=Te,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?$a:ma),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===M)return Rn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=Te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Te.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),Te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=un();return uu(n,He,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=S=null,z=null,j=n,gt=!1;do{var Ct=j.lane&-536870913;if(Ct!==j.lane?(Pe&Ct)===Ct:(pa&Ct)===Ct){var at=j.revertLane;if(at===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Ct===Br&&(gt=!0);else if((pa&at)===at){j=j.next,at===Br&&(gt=!0);continue}else Ct={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},z===null?(A=z=Ct,S=f):z=z.next=Ct,Te.lanes|=at,Ta|=at;Ct=j.action,Ja&&a(f,Ct),f=j.hasEagerState?j.eagerState:a(f,Ct)}else at={lane:Ct,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},z===null?(A=z=at,S=f):z=z.next=at,Te.lanes|=Ct,Ta|=Ct;j=j.next}while(j!==null&&j!==n);if(z===null?S=f:z.next=A,!Xn(f,t.memoizedState)&&(_n=!0,gt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zd(t,n,a){var s=Te,c=un(),f=Be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((He||c).memoizedState,a);if(S&&(c.memoizedState=a,_n=!0),c=c.queue,pu(Id.bind(null,s,c,t),[t]),c.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Fd.bind(null,s,c,a,n),{destroy:void 0},null),qe===null)throw Error(r(349));f||pa&60||Bd(s,n,a)}return a}function Bd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Te.updateQueue,n===null?(n=ol(),Te.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fd(t,n,a,s){n.value=a,n.getSnapshot=s,Hd(n)&&Gd(t)}function Id(t,n,a){return a(function(){Hd(n)&&Gd(t)})}function Hd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Gd(t){var n=fa(t,2);n!==null&&Pn(n,t,2)}function hu(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Ja){le(!0);try{a()}finally{le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Vd(t,n,a,s){return t.baseState=a,uu(t,He,typeof s=="function"?s:Fi)}function Mv(t,n,a,s,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=I.T,S={};I.T=S;try{var A=a(c,s),z=I.S;z!==null&&z(S,A),Wd(t,n,A)}catch(j){du(t,n,j)}finally{I.T=f}}else try{f=a(c,s),Wd(t,n,f)}catch(j){du(t,n,j)}}function Wd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xd(t,n,s)},function(s){return du(t,n,s)}):Xd(t,n,a)}function Xd(t,n,a){n.status="fulfilled",n.value=a,qd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kd(t,a)))}function du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qd(n),n=n.next;while(n!==s)}t.action=null}function qd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yd(t,n){return n}function jd(t,n){if(Be){var a=qe.formState;if(a!==null){t:{var s=Te;if(Be){if(Mn){e:{for(var c=Mn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Mn=vi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:n},a.queue=s,a=hp.bind(null,Te,s),s.dispatch=a,s=hu(!1),f=yu.bind(null,Te,!1,s.queue),s=Gn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,Te,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zd(t){var n=un();return Kd(n,He,t)}function Kd(t,n,a){n=uu(t,n,Yd)[0],t=cl(Fi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?eo(n):n;var s=un(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(Te.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Qd(t){var n=un(),a=He;if(a!==null)return Kd(n,a,t);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=Te.updateQueue,n===null&&(n=ol(),Te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jd(){return un().memoizedState}function ul(t,n,a,s){var c=Gn();Te.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=un();s=s===void 0?null:s;var f=c.memoizedState.inst;He!==null&&s!==null&&au(s,He.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(Te.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function $d(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function tp(t,n){return fl(4,2,t,n)}function ep(t,n){return fl(4,4,t,n)}function np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ip(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,np.bind(null,n,t),a)}function mu(){}function ap(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function rp(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Ja){le(!0);try{t()}finally{le(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||pa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=om(),Te.lanes|=t,Ta|=t,a)}function sp(t,n,a,s){return Xn(a,n)?a:zr.current!==null?(t=gu(t,a,s),Xn(t,n)||(_n=!0),t):pa&42?(t=om(),Te.lanes|=t,Ta|=t,n):(_n=!0,t.memoizedState=a)}function op(t,n,a,s,c){var f=W.p;W.p=f!==0&&8>f?f:8;var S=I.T,A={};I.T=A,yu(t,!1,n,a);try{var z=c(),j=I.S;if(j!==null&&j(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var gt=yv(z,s);no(t,n,gt,Zn(t))}else no(t,n,s,Zn(t))}catch(Ct){no(t,n,{then:function(){},status:"rejected",reason:Ct},Zn())}finally{W.p=f,I.T=S}}function Tv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=lp(t).queue;op(t,c,n,ct,a===null?Tv:function(){return cp(t),a(s)})}function lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cp(t){var n=lp(t).next.queue;no(t,n,{},Zn())}function vu(){return Rn(Eo)}function up(){return un().memoizedState}function fp(){return un().memoizedState}function bv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=va(a);var s=ya(n,t,a);s!==null&&(Pn(s,n,a),ro(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?dp(n,a):(a=jc(t,n,a,s),a!==null&&(Pn(a,t,s),pp(a,n,s)))}function hp(t,n,a){var s=Zn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))dp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Xn(A,S))return Zo(t,n,c,0),qe===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return Pn(a,t,s),pp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&Pn(n,t,2)}function hl(t){var n=t.alternate;return t===Te||n!==null&&n===Te}function dp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ce(t,a)}}var wi={readContext:Rn,use:ll,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn};wi.useCacheRefresh=sn,wi.useMemoCache=sn,wi.useHostTransitionStatus=sn,wi.useFormState=sn,wi.useActionState=sn,wi.useOptimistic=sn;var $a={readContext:Rn,use:ll,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:$d,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var s=t();if(Ja){le(!0);try{t()}finally{le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Gn();if(a!==void 0){var c=a(n);if(Ja){le(!0);try{a(n)}finally{le(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,Te,t),[s.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,a=hp.bind(null,Te,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Gn();return gu(a,t,n)},useTransition:function(){var t=hu(!1);return t=op.bind(null,Te,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Te,c=Gn();if(Be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));Pe&60||Bd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$d(Id.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Fd.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Gn(),n=qe.identifierPrefix;if(Be){var a=zi,s=Pi;a=(s&~(1<<32-O(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Sv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Gn().memoizedState=bv.bind(null,Te)}};$a.useMemoCache=cu,$a.useHostTransitionStatus=vu,$a.useFormState=jd,$a.useActionState=jd,$a.useOptimistic=function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,Te,!0,a),a.dispatch=n,[t,n]};var ma={readContext:Rn,use:ll,useCallback:ap,useContext:Rn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:cl,useRef:Jd,useState:function(){return cl(Fi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=un();return sp(a,He.memoizedState,t,n)},useTransition:function(){var t=cl(Fi)[0],n=un().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zd,useId:up};ma.useCacheRefresh=fp,ma.useMemoCache=cu,ma.useHostTransitionStatus=vu,ma.useFormState=Zd,ma.useActionState=Zd,ma.useOptimistic=function(t,n){var a=un();return Vd(a,He,t,n)};var tr={readContext:Rn,use:ll,useCallback:ap,useContext:Rn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:fu,useRef:Jd,useState:function(){return fu(Fi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=un();return He===null?gu(a,t,n):sp(a,He.memoizedState,t,n)},useTransition:function(){var t=fu(Fi)[0],n=un().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zd,useId:up};tr.useCacheRefresh=fp,tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Qd,tr.useActionState=Qd,tr.useOptimistic=function(t,n){var a=un();return He!==null?Vd(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])};function Su(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xu={isMounted:function(t){return(t=t._reactInternals)?$(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Pn(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Pn(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(Pn(n,t,a),ro(n,t,a))}};function mp(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function gp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&xu.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=E({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _p(t){dl(t)}function vp(t){console.error(t)}function yp(t){dl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Sp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function xp(t){return t=va(t),t.tag=3,t}function Mp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Sp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Sp(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ai===null?af():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Be)return n=si.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Ys(ii(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Ys(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),po===null?po=[f]:po.push(f),nn!==4&&(nn=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xp(c),Mp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Ep=Error(r(461)),_n=!1;function En(t,n,a,s){n.child=t===null?Rd(n,null,a,s):Ka(n,t.child,a,s)}function Tp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return ir(n),s=ru(t,n,a,S,f,c),A=su(),t!==null&&!_n?(ou(t,n,c),Ii(t,n,c)):(Be&&A&&Zc(n),n.flags|=1,En(t,n,s,c),n.child)}function bp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ap(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(S,s)&&t.ref===n.ref)return Ii(t,n,c)}return n.flags|=1,t=Ea(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ap(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ks(f,s)&&t.ref===n.ref)if(_n=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(_n=!0);else return n.lanes=t.lanes,Ii(t,n,c)}return Eu(t,n,a,s,c)}function wp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=t!==null?t.memoizedState:null;if(io(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=S!==null?S.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Rp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,S!==null?S.cachePool:null),S!==null?Cd(n,S):$c(),Dd(n);else return n.lanes=n.childLanes=536870912,Rp(t,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(al(n,S.cachePool),Cd(n,S),da(),n.memoizedState=null):(t!==null&&al(n,null),$c(),da());return En(t,n,c,a),n.child}function Rp(t,n,a,s){var c=iu();return c=c===null?null:{parent:pn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Dd(n),t!==null&&ao(t,n,s,!0),null}function io(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ir(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!_n?(ou(t,n,c),Ii(t,n,c)):(Be&&s&&Zc(n),n.flags|=1,En(t,n,a,c),n.child)}function Cp(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Pd(n,s,a,c),Od(t),s=su(),t!==null&&!_n?(ou(t,n,f),Ii(t,n,f)):(Be&&s&&Zc(n),n.flags|=1,En(t,n,a,f),n.child)}function Dp(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Ur,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Ur,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Su(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&xu.enqueueReplaceState(f,f.state,null),oo(n,s,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=er(a,A);f.props=z;var j=f.context,gt=a.contextType;S=Ur,typeof gt=="object"&&gt!==null&&(S=Rn(gt));var Ct=a.getDerivedStateFromProps;gt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||j!==S)&&gp(n,f,s,S),_a=!1;var at=n.memoizedState;f.state=at,oo(n,s,f,c),so(),j=n.memoizedState,A||at!==j||_a?(typeof Ct=="function"&&(Su(n,a,Ct,s),j=n.memoizedState),(z=_a||mp(n,a,z,s,at,j,S))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=j),f.props=s,f.state=j,f.context=S,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),S=n.memoizedProps,gt=er(a,S),f.props=gt,Ct=n.pendingProps,at=f.context,j=a.contextType,z=Ur,typeof j=="object"&&j!==null&&(z=Rn(j)),A=a.getDerivedStateFromProps,(j=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Ct||at!==z)&&gp(n,f,s,z),_a=!1,at=n.memoizedState,f.state=at,oo(n,s,f,c),so();var dt=n.memoizedState;S!==Ct||at!==dt||_a||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof A=="function"&&(Su(n,a,A,s),dt=n.memoizedState),(gt=_a||mp(n,a,gt,s,at,dt,z)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,dt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,dt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),f.props=s,f.state=dt,f.context=z,s=gt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,io(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ka(n,t.child,null,c),n.child=Ka(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ii(t,n,c),t}function Lp(t,n,a,s){return qs(),n.flags|=256,En(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:Nd()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Up(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Be){if(c?ha(n):da(),Be){var A=Mn,z;if(z=A){t:{for(z=A,A=bi;z.nodeType!==8;){if(!A){A=null;break t}if(z=vi(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ya!==null?{id:Pi,overflow:zi}:null,retryLane:536870912},z=ci(18,null,null,0),z.stateNode=A,z.return=n,n.child=z,On=n,Mn=null,z=!0):z=!1}z||Za(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Bi(n)}return A=s.children,s=s.fallback,c?(da(),c=n.mode,A=Ru({mode:"hidden",children:A},c),s=rr(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,S,a),n.memoizedState=Tu,s):(ha(n),wu(n,A))}if(z=t.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),c=s.fallback,A=n.mode,s=Ru({mode:"visible",children:s.children},A),c=rr(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ka(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,S,a),n.memoizedState=Tu,n=c);else if(ha(n),A.data==="$!"){if(S=A.nextSibling&&A.nextSibling.dataset,S)var j=S.dgst;S=j,s=Error(r(419)),s.stack="",s.digest=S,Ys({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(_n||ao(t,n,a,!1),S=(a&t.childLanes)!==0,_n||S){if(S=qe,S!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(S.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,fa(t,s),Pn(S,t,s),Ep}A.data==="$?"||af(),n=Cu(t,n,a)}else A.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),A._reactRetry=n,n=null):(t=z.treeContext,Mn=vi(A.nextSibling),On=n,Be=!0,gi=null,bi=!1,t!==null&&(ai[ri++]=Pi,ai[ri++]=zi,ai[ri++]=Ya,Pi=t.id,zi=t.overflow,Ya=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(da(),c=s.fallback,A=n.mode,z=t.child,j=z.sibling,s=Ea(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,j!==null?c=Ea(j,c):(c=rr(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=t.child.memoizedState,A===null?A=bu(a):(z=A.cachePool,z!==null?(j=pn._currentValue,z=z.parent!==j?{parent:j,pool:j}:z):z=Nd(),A={baseLanes:A.baseLanes|a,cachePool:z}),c.memoizedState=A,c.childLanes=Au(t,S,a),n.memoizedState=Tu,s):(ha(n),a=t.child,t=a.sibling,a=Ea(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return am(t,n,0,null)}function Cu(t,n,a){return Ka(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Np(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Op(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(t,n,s.children,a),s=dn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,a,n);else if(t.tag===19)Np(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(_t(dn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ii(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,!(a&n.childLanes))if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:Zt(n,n.stateNode.containerInfo),ga(n,pn,t.memoizedState.cache),qs();break;case 27:case 5:ye(n);break;case 4:Zt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):a&n.child.childLanes?Up(t,n,a):(ha(n),t=Ii(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ao(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Op(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(dn,dn.current),s)break;return null;case 22:case 23:return n.lanes=0,wp(t,n,a);case 24:ga(n,pn,t.memoizedState.cache)}return Ii(t,n,a)}function Pp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!Lu(t,a)&&!(n.flags&128))return _n=!1,Rv(t,n,a);_n=!!(t.flags&131072)}else _n=!1,Be&&n.flags&1048576&&yd(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=er(s,t),n.tag=1,n=Dp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===b){n.tag=11,n=Tp(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=bp(null,n,s,t,a);break t}}throw n=pt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Dp(t,n,s,c,a);case 3:t:{if(Zt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),oo(n,f,null,a);var S=n.memoizedState;if(f=S.cache,ga(n,pn,f),f!==c.cache&&Ou(n,[pn],a,!0),so(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Lp(t,n,f,a);break t}else if(f!==s){s=ii(Error(r(424)),n),Ys(s),n=Lp(t,n,f,a);break t}else for(Mn=vi(n.stateNode.containerInfo.firstChild),On=n,Be=!0,gi=null,bi=!0,a=Rd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),f===s){n=Ii(t,n,a);break t}En(t,n,f,a)}n=n.child}return n;case 26:return io(t,n),t===null?(a=Fm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,t=n.pendingProps,s=Ll(Jt.current).createElement(a),s[Ae]=n,s[Oe]=t,Tn(s,a,t),Kt(s),n.stateNode=s):n.memoizedState=Fm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ye(n),t===null&&Be&&(s=n.stateNode=Pm(n.type,n.pendingProps,Jt.current),On=n,bi=!0,Mn=vi(s.firstChild)),s=n.pendingProps.children,t!==null||Be?En(t,n,s,a):n.child=Ka(n,null,s,a),io(t,n),n.child;case 5:return t===null&&Be&&((c=s=Mn)&&(s=ay(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,On=n,Mn=vi(s.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),ye(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,xv,null,null,a),Eo._currentValue=c),io(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Be&&((t=a=Mn)&&(a=ry(a,n.pendingProps,bi),a!==null?(n.stateNode=a,On=n,Mn=null,t=!0):t=!1),t||Za(n)),null;case 13:return Up(t,n,a);case 4:return Zt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ka(n,null,s,a):En(t,n,s,a),n.child;case 11:return Tp(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Rn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return bp(t,n,n.type,n.pendingProps,a);case 15:return Ap(t,n,n.type,n.pendingProps,a);case 19:return Op(t,n,a);case 22:return wp(t,n,a);case 24:return ir(n),s=Rn(pn),t===null?(c=iu(),c===null&&(c=qe,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ga(n,pn,c)):(t.lanes&a&&(zu(t,n),oo(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,pn,s)):(s=f.cache,ga(n,pn,s),s!==c.cache&&Ou(n,[pn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=Bt(null),nr=null,Hi=null;function ga(t,n,a){_t(Uu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=Uu.current,zt(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Nu(f.return,a,t),s||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function ao(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Xn(c.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(c===jt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return zp(nr,t)}function gl(t,n){return nr===null&&ir(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var _a=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,$e&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),_d(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ce(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function so(){if(Fu){var t=Fr;if(t!==null)throw t}}function oo(t,n,a,s){Fu=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,j=z.next;z.next=null,S===null?f=j:S.next=j,S=z;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==S&&(A===null?gt.firstBaseUpdate=j:A.next=j,gt.lastBaseUpdate=z))}if(f!==null){var Ct=c.baseState;S=0,gt=j=z=null,A=f;do{var at=A.lane&-536870913,dt=at!==A.lane;if(dt?(Pe&at)===at:(s&at)===at){at!==0&&at===Br&&(Fu=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ae=t,ve=A;at=n;var an=a;switch(ve.tag){case 1:if(ae=ve.payload,typeof ae=="function"){Ct=ae.call(an,Ct,at);break t}Ct=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ve.payload,at=typeof ae=="function"?ae.call(an,Ct,at):ae,at==null)break t;Ct=E({},Ct,at);break t;case 2:_a=!0}}at=A.callback,at!==null&&(t.flags|=64,dt&&(t.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[at]:dt.push(at))}else dt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(j=gt=dt,z=Ct):gt=gt.next=dt,S|=at;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);gt===null&&(z=Ct),c.baseState=z,c.firstBaseUpdate=j,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),Ta|=S,t.lanes=S,t.memoizedState=Ct}}function Bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(A){We(n,n.return,A)}}function Sa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var z=a;try{A()}catch(j){We(c,z,j)}}}s=s.next}while(s!==f)}}catch(j){We(n,n.return,j)}}function Ip(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fp(n,a)}catch(s){We(t,t.return,s)}}}function Hp(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){We(t,n,s)}}function ar(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){We(t,n,f)}}function qn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function Gp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function Vp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[Oe]=n}catch(c){We(t,t.return,c)}}function kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var Vi=!1,en=!1,Gu=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,vn=null,Xp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=ld(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,z=-1,j=0,gt=0,Ct=t,at=null;e:for(;;){for(var dt;Ct!==a||c!==0&&Ct.nodeType!==3||(A=S+c),Ct!==f||s!==0&&Ct.nodeType!==3||(z=S+s),Ct.nodeType===3&&(S+=Ct.nodeValue.length),(dt=Ct.firstChild)!==null;)at=Ct,Ct=dt;for(;;){if(Ct===t)break e;if(at===a&&++j===c&&(A=S),at===f&&++gt===s&&(z=S),(dt=Ct.nextSibling)!==null)break;Ct=at,at=Ct.parentNode}Ct=dt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ae=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ae,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ve){We(a,a.return,ve)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}return ae=Xp,Xp=!1,ae}function qp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),s&4&&lo(5,a);break;case 1:if(Wi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(A){We(a,a.return,A)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(A){We(a,a.return,A)}}s&64&&Ip(a),s&512&&ar(a,a.return);break;case 3:if(Wi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fp(s,t)}catch(A){We(a,a.return,A)}}break;case 26:Wi(t,a),s&512&&ar(a,a.return);break;case 27:case 5:Wi(t,a),n===null&&s&4&&Gp(a),s&512&&ar(a,a.return);break;case 12:Wi(t,a);break;case 13:Wi(t,a),s&4&&Zp(t,a);break;case 22:if(c=a.memoizedState!==null||Vi,!c){n=n!==null&&n.memoizedState!==null||en;var f=Vi,S=en;Vi=c,(en=n)&&!S?xa(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Vi=f,en=S}s&512&&(a.memoizedProps.mode==="manual"?ar(a,a.return):qn(a,a.return));break;default:Wi(t,a)}}function Yp(t){var n=t.alternate;n!==null&&(t.alternate=null,Yp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&st(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fn=null,Yn=!1;function ki(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:en||qn(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||qn(a,n);var s=fn,c=Yn;for(fn=a.stateNode,ki(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);st(a),fn=s,Yn=c;break;case 5:en||qn(a,n);case 6:c=fn;var f=Yn;if(fn=null,ki(t,n,a),fn=c,Yn=f,fn!==null)if(Yn)try{t=fn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(S){We(a,n,S)}else try{fn.removeChild(a.stateNode)}catch(S){We(a,n,S)}break;case 18:fn!==null&&(Yn?(n=fn,a=a.stateNode,n.nodeType===8?Sf(n.parentNode,a):n.nodeType===1&&Sf(n,a),wo(n)):Sf(fn,a.stateNode));break;case 4:s=fn,c=Yn,fn=a.stateNode.containerInfo,Yn=!0,ki(t,n,a),fn=s,Yn=c;break;case 0:case 11:case 14:case 15:en||Sa(2,a,n),en||Sa(4,a,n),ki(t,n,a);break;case 1:en||(qn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hp(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:en||qn(a,n),en=(s=en)||a.memoizedState!==null,ki(t,n,a),en=s;break;default:ki(t,n,a)}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){We(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function oi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:case 5:fn=A.stateNode,Yn=!1;break t;case 3:fn=A.stateNode.containerInfo,Yn=!0;break t;case 4:fn=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(fn===null)throw Error(r(160));jp(f,S,c),fn=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Kp(n,t),n=n.sibling}var _i=null;function Kp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(n,t),li(t),s&4&&(Sa(3,t,t.return),lo(3,t),Sa(5,t,t.return));break;case 1:oi(n,t),li(t),s&512&&(en||a===null||qn(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(oi(n,t),li(t),s&512&&(en||a===null||qn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[rt]||f[Ae]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[Ae]=t,Kt(f),s=f;break t;case"link":var S=Gm("link","href",c).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Gm("meta","content",c).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ae]=t,Kt(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Hm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Hm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var j=z.nextSibling,gt=z.nodeName;z[rt]||gt==="HEAD"||gt==="BODY"||gt==="SCRIPT"||gt==="STYLE"||gt==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=j}for(var Ct=t.type,at=c.attributes;at.length;)c.removeAttributeNode(at[0]);Tn(c,Ct,f),c[Ae]=t,c[Oe]=f}catch(ae){We(t,t.return,ae)}}case 5:if(oi(n,t),li(t),s&512&&(en||a===null||qn(a,a.return)),t.flags&32){c=t.stateNode;try{br(c,"")}catch(ae){We(t,t.return,ae)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(oi(n,t),li(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ae){We(t,t.return,ae)}}break;case 3:if(Ol=null,c=_i,_i=Ul(n.containerInfo),oi(n,t),_i=c,li(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ae){We(t,t.return,ae)}Gu&&(Gu=!1,Qp(t));break;case 4:s=_i,_i=Ul(t.stateNode.containerInfo),oi(n,t),li(t),_i=s;break;case 12:oi(n,t),li(t);break;case 13:oi(n,t),li(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ot()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(en||a===null||qn(a,a.return)),z=t.memoizedState!==null,j=a!==null&&a.memoizedState!==null,gt=Vi,Ct=en,Vi=gt||z,en=Ct||j,oi(n,t),en=Ct,Vi=gt,li(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=Vi||en,a===null||j||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){j=a=n;try{if(c=j.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=j.stateNode,A=j.memoizedProps.style;var dt=A!=null&&A.hasOwnProperty("display")?A.display:null;S.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(ae){We(j,j.return,ae)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=z?"":j.memoizedProps}catch(ae){We(j,j.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:oi(n,t),li(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:oi(n,t),li(t)}}function li(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(kp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(br(S,""),s.flags&=-33);var A=Iu(t);_l(t,A,S);break;case 3:case 4:var z=s.stateNode.containerInfo,j=Iu(t);Hu(t,j,z);break;default:throw Error(r(161))}}}catch(gt){We(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Vr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hp(n,n.return,a),Vr(n);break;case 26:case 27:case 5:qn(n,n.return),Vr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),lo(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){We(s,s.return,j)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],A)}catch(j){We(s,s.return,j)}}a&&S&64&&Ip(f),ar(f,f.return);break;case 26:case 27:case 5:xa(c,f,a),a&&s===null&&S&4&&Gp(f),ar(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Zp(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),ar(f,f.return);break;default:xa(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(t,n,a,s),n=n.sibling}function Jp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(t,n,a,s),c&2048&&lo(9,n);break;case 3:Ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){Ma(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){We(n,n.return,z)}}else Ma(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(t,n,a,s):co(t,n):f._visibility&4?Ma(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ma(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ma(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,A=a,z=s,j=S.flags;switch(S.tag){case 0:case 11:case 15:kr(f,S,A,z,c),lo(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&4?kr(f,S,A,z,c):co(f,S):(gt._visibility|=4,kr(f,S,A,z,c)),c&&j&2048&&ku(S.alternate,S);break;case 24:kr(f,S,A,z,c),c&&j&2048&&Wu(S.alternate,S);break;default:kr(f,S,A,z,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&ku(s.alternate,s);break;case 24:co(a,s),c&2048&&Wu(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Wr(t){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)$p(t),t=t.sibling}function $p(t){switch(t.tag){case 26:Wr(t),t.flags&uo&&t.memoizedState!==null&&vy(_i,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=_i;_i=Ul(t.stateNode.containerInfo),Wr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Wr(t),uo=n):Wr(t));break;default:Wr(t)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,nm(s,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):fo(t);break;default:fo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,nm(s,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function nm(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else t:for(a=t;vn!==null;){s=vn;var c=s.sibling,f=s.return;if(Yp(s),s===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,s){return new Lv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Xu(t)&&(S=1);else if(typeof t=="string")S=gy(t,a,Ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return rr(a.children,c,f,n);case m:S=8,c|=24;break;case g:return t=ci(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case R:return t=ci(13,a,n,c),t.elementType=R,t.lanes=f,t;case v:return t=ci(19,a,n,c),t.elementType=v,t.lanes=f,t;case L:return am(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case M:S=10;break t;case x:S=9;break t;case b:S=11;break t;case _:S=14;break t;case P:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ci(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=ci(7,t,s,n),t.lanes=a,t}function am(t,n,a,s){t=ci(22,t,s,n),t.elementType=L,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=fa(f,2);S!==null&&(c._pendingVisibility|=2,Pn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=fa(f,2);S!==null&&(c._pendingVisibility&=-3,Pn(S,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Xi(t){t.flags|=4}function rm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!km(n)){if(n=si.current,n!==null&&((Pe&4194176)===Pe?Ai!==null:(Pe&62914560)!==Pe&&!(Pe&536870912)||n!==Ai))throw Zs=Jc,Md;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Dt():536870912,t.lanes|=n,qr|=n)}function ho(t,n){if(!Be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(pn),yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gi!==null&&(ef(gi),gi=null))),Je(n),null;case 26:return a=n.memoizedState,t===null?(Xi(n),a!==null?(Je(n),rm(n,a)):(Je(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Xi(n),Je(n),rm(n,a)):(Je(n),n.flags&=-16777217):(t.memoizedProps!==s&&Xi(n),Je(n),n.flags&=-16777217),null;case 27:qt(n),a=Jt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}t=Ut.current,Xs(n)?Sd(n):(t=Pm(c,s,a),n.stateNode=t,Xi(n))}return Je(n),null;case 5:if(qt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(t=Ut.current,Xs(n))Sd(n);else{switch(c=Ll(Jt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[Ae]=n,t[Oe]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Xi(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Jt.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=On,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ae]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cm(t.nodeValue,a)),t||Za(n)}else t=Ll(t).createTextNode(s),t[Ae]=n,n.stateNode=t}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ae]=n}else qs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else gi!==null&&(ef(gi),gi=null),c=!0;if(!c)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Je(n),null;case 4:return yt(),t===null&&df(n.stateNode.containerInfo),Je(n),null;case 10:return Gi(n.type),Je(n),null;case 19:if(zt(dn),c=n.memoizedState,c===null)return Je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ho(c,!1);else{if(nn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,ho(c,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return _t(dn,dn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ot()>xl&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Be)return Je(n),null}else 2*ot()-c.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ot(),n.sibling=null,t=dn.current,_t(dn,s?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return Bi(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&zt(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(pn),Je(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(pn),yt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qt(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return zt(dn),null;case 4:return yt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Bi(n),tu(),t!==null&&zt(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(pn),null;case 25:return null;default:return null}}function sm(t,n){switch(Kc(n),n.tag){case 3:Gi(pn),yt();break;case 26:case 27:case 5:qt(n);break;case 4:yt();break;case 13:Bi(n);break;case 19:zt(dn);break;case 10:Gi(n.type);break;case 22:case 23:Bi(n),tu(),t!==null&&zt(Qa);break;case 24:Gi(pn)}}var Ov={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,$e=0,qe=null,De=null,Pe=0,Ye=0,jn=null,qi=!1,Xr=!1,ju=!1,Yi=0,nn=0,Ta=0,sr=0,Zu=0,ui=0,qr=0,po=null,Ri=null,Ku=!1,Qu=0,xl=1/0,Ml=null,ba=null,El=!1,or=null,mo=0,Ju=0,$u=null,go=0,tf=null;function Zn(){if($e&2&&Pe!==0)return Pe&-Pe;if(I.T!==null){var t=Br;return t!==0?t:cf()}return xe()}function om(){ui===0&&(ui=!(Pe&536870912)||Be?mt():536870912);var t=si.current;return t!==null&&(t.flags|=32),ui}function Pn(t,n,a){(t===qe&&Ye===2||t.cancelPendingCommit!==null)&&(Yr(t,0),ji(t,Pe,ui,!1)),wt(t,a),(!($e&2)||t!==qe)&&(t===qe&&(!($e&2)&&(sr|=a),nn===4&&ji(t,Pe,ui,!1)),Ci(t))}function lm(t,n,a){if($e&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||te(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&ji(t,n,0,!1);break}else if(c===6)ji(t,n,0,!qi);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=t;c=po;var z=A.current.memoizedState.isDehydrated;if(z&&(Yr(A,S).flags|=256),S=rf(A,S,!1),S!==2){if(ju&&!z){A.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Ri,Ri=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),ji(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){ji(s,n,ui,!qi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-ot(),10<f)){if(ji(s,n,ui,!qi),Yt(s,0)!==0)break t;s.timeoutHandle=Um(cm.bind(null,s,a,Ri,Ml,Ku,n,ui,sr,qr,qi,2,-0,0),f);break t}cm(s,a,Ri,Ml,Ku,n,ui,sr,qr,qi,0,-0,0)}}break}while(!0);Ci(t)}function ef(t){Ri===null?Ri=t:Ri.push.apply(Ri,t)}function cm(t,n,a,s,c,f,S,A,z,j,gt,Ct,at){var dt=n.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:_y},$p(n),n=yy(),n!==null)){t.cancelPendingCommit=n(gm.bind(null,t,a,s,c,S,A,z,1,Ct,at)),ji(t,f,S,!j);return}gm(t,a,s,c,S,A,z,gt,Ct,at)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ji(t,n,a,s){n&=~Zu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-O(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Pt(t,a,n)}function Tl(){return $e&6?!0:(_o(0),!1)}function nf(){if(De!==null){if(Ye===0)var t=De.return;else t=De,Hi=nr=null,lu(t),Pr=null,Ks=0,t=De;for(;t!==null;)sm(t.alternate,t),t=t.return;De=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),qe=t,De=a=Ea(t.current,null),Pe=n,Ye=0,jn=null,qi=!1,Xr=te(t,n),ju=!1,qr=ui=Zu=sr=Ta=nn=0,Ri=po=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-O(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,jo(),a}function um(t,n){Te=null,I.H=wi,n===js?(n=bd(),Ye=3):n===Md?(n=bd(),Ye=4):Ye=n===Ep?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,De===null&&(nn=1,pl(t,ii(n,t.current)))}function fm(){var t=I.H;return I.H=wi,t===null?wi:t}function hm(){var t=I.A;return I.A=Ov,t}function af(){nn=4,qi||(Pe&4194176)!==Pe&&si.current!==null||(Xr=!0),!(Ta&134217727)&&!(sr&134217727)||qe===null||ji(qe,Pe,ui,!1)}function rf(t,n,a){var s=$e;$e|=2;var c=fm(),f=hm();(qe!==t||Pe!==n)&&(Ml=null,Yr(t,n)),n=!1;var S=nn;t:do try{if(Ye!==0&&De!==null){var A=De,z=jn;switch(Ye){case 8:nf(),S=6;break t;case 3:case 2:case 6:si.current===null&&(n=!0);var j=Ye;if(Ye=0,jn=null,jr(t,A,z,j),a&&Xr){S=0;break t}break;default:j=Ye,Ye=0,jn=null,jr(t,A,z,j)}}Bv(),S=nn;break}catch(gt){um(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Hi=nr=null,$e=s,I.H=c,I.A=f,De===null&&(qe=null,Pe=0,jo()),S}function Bv(){for(;De!==null;)dm(De)}function Fv(t,n){var a=$e;$e|=2;var s=fm(),c=hm();qe!==t||Pe!==n?(Ml=null,xl=ot()+500,Yr(t,n)):Xr=te(t,n);t:do try{if(Ye!==0&&De!==null){n=De;var f=jn;e:switch(Ye){case 1:Ye=0,jn=null,jr(t,n,f,1);break;case 2:if(Ed(f)){Ye=0,jn=null,pm(n);break}n=function(){Ye===2&&qe===t&&(Ye=7),Ci(t)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:Ed(f)?(Ye=0,jn=null,pm(n)):(Ye=0,jn=null,jr(t,n,f,7));break;case 5:var S=null;switch(De.tag){case 26:S=De.memoizedState;case 5:case 27:var A=De;if(!S||km(S)){Ye=0,jn=null;var z=A.sibling;if(z!==null)De=z;else{var j=A.return;j!==null?(De=j,bl(j)):De=null}break e}}Ye=0,jn=null,jr(t,n,f,5);break;case 6:Ye=0,jn=null,jr(t,n,f,6);break;case 8:nf(),nn=6;break t;default:throw Error(r(462))}}Iv();break}catch(gt){um(t,gt)}while(!0);return Hi=nr=null,I.H=s,I.A=c,$e=a,De!==null?0:(qe=null,Pe=0,jo(),nn)}function Iv(){for(;De!==null&&!ut();)dm(De)}function dm(t){var n=Pp(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?bl(t):De=n}function pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cp(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=Cp(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:lu(n);default:sm(a,n),n=De=im(n,Yi),n=Pp(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?bl(t):De=n}function jr(t,n,a,s){Hi=nr=null,lu(n),Pr=null,Ks=0;var c=n.return;try{if(wv(t,c,n,a,Pe)){nn=1,pl(t,ii(a,t.current)),De=null;return}}catch(f){if(c!==null)throw De=c,f;nn=1,pl(t,ii(a,t.current)),De=null;return}n.flags&32768?(Be||s===1?t=!0:Xr||Pe&536870912?t=!1:(qi=t=!0,(s===2||s===3||s===6)&&(s=si.current,s!==null&&s.tag===13&&(s.flags|=16384))),mm(n,t)):bl(n)}function bl(t){var n=t;do{if(n.flags&32768){mm(n,qi);return}t=n.return;var a=Uv(n.alternate,n,Yi);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);nn===0&&(nn=5)}function mm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);nn=6,De=null}function gm(t,n,a,s,c,f,S,A,z,j){var gt=I.T,Ct=W.p;try{W.p=2,I.T=null,Hv(t,n,a,s,Ct,c,f,S,A,z,j)}finally{I.T=gt,W.p=Ct}}function Hv(t,n,a,s,c,f,S,A){do Zr();while(or!==null);if($e&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var j=z.lanes|z.childLanes;if(j|=Yc,Lt(t,s,j,f,S,A),t===qe&&(De=qe=null,Pe=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||El||(El=!0,Ju=j,$u=a,Wv($t,function(){return Zr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=I.T,I.T=null,f=W.p,W.p=2,S=$e,$e|=4,Cv(t,z),Kp(z,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=z,qp(t,z.alternate,z),bt(),$e=S,W.p=f,I.T=a):t.current=z,El?(El=!1,or=t,mo=s):_m(t,j),j=t.pendingLanes,j===0&&(ba=null),Vt(z.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)j=n[z],c(j.value,{componentStack:j.stack});return mo&3&&Zr(),j=t.pendingLanes,s&4194218&&j&42?t===tf?go++:(go=0,tf=t):go=0,_o(0),null}function _m(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Zr(){if(or!==null){var t=or,n=Ju;Ju=0;var a=he(mo),s=I.T,c=W.p;try{if(W.p=32>a?32:a,I.T=null,or===null)var f=!1;else{a=$u,$u=null;var S=or,A=mo;if(or=null,mo=0,$e&6)throw Error(r(331));var z=$e;if($e|=4,em(S.current),Jp(S,S.current,A,a),$e=z,_o(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(oe,S)}catch{}f=!0}return f}finally{W.p=c,I.T=s,_m(t,n)}}return!1}function vm(t,n,a){n=ii(a,n),n=Mu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(wt(t,2),Ci(t))}function We(t,n,a){if(t.tag===3)vm(t,t,a);else for(;n!==null;){if(n.tag===3){vm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){t=ii(a,t),a=xp(2),s=ya(n,a,2),s!==null&&(Mp(a,s,n,t),wt(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Pe&a)===a&&(nn===4||nn===3&&(Pe&62914560)===Pe&&300>ot()-Qu?!($e&2)&&Yr(t,0):Zu|=a,qr===Pe&&(qr=0)),Ci(t)}function ym(t,n){n===0&&(n=Dt()),t=fa(t,n),t!==null&&(wt(t,n),Ci(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ym(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ym(t,a)}function Wv(t,n){return T(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,lr=0;function Ci(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Xv))}function _o(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-O(42|t)+1)-1,f&=c&~(S&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Mm(s,f))}else f=Pe,f=Yt(s,s===qe?f:0),!(f&3)||te(s,f)||(a=!0,Mm(s,f));s=s.next}while(a);lf=!1}}function Xv(){wl=of=!1;var t=0;lr!==0&&(ty()&&(t=lr),lr=0);for(var n=ot(),a=null,s=Al;s!==null;){var c=s.next,f=Sm(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}_o(t)}function Sm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-O(f),A=1<<S,z=c[S];z===-1?(!(A&a)||A&s)&&(c[S]=be(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=qe,a=Pe,a=Yt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Ye===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&J(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&J(s),he(a)){case 2:case 8:a=kt;break;case 32:a=$t;break;case 268435456:a=Rt;break;default:a=$t}return s=xm.bind(null,t),a=T(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&J(s),t.callbackPriority=2,t.callbackNode=null,2}function xm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Pe;return s=Yt(t,t===qe?s:0),s===0?null:(lm(t,s,n),Sm(t,ot()),t.callbackNode!=null&&t.callbackNode===a?xm.bind(null,t):null)}function Mm(t,n){if(Zr())return null;lm(t,n,!0)}function qv(t){ny(function(){$e&6?T(At,t):t()})}function cf(){return lr===0&&(lr=mt()),lr}function Em(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Tm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Em((c[Oe]||null).action),S=s.submitter;S&&(n=(n=S[Oe]||null)?Em(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Xo("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var z=S?Tm(c,S):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=S?Tm(c,S):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<gd.length;uf++){var ff=gd[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);mi(jv,"on"+Zv)}mi(fd,"onAnimationEnd"),mi(hd,"onAnimationIteration"),mi(dd,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(hv,"onTransitionRun"),mi(dv,"onTransitionStart"),mi(pv,"onTransitionCancel"),mi(pd,"onTransitionEnd"),Ie("onMouseEnter",["mouseout","mouseover"]),Ie("onMouseLeave",["mouseout","mouseover"]),Ie("onPointerEnter",["pointerout","pointerover"]),Ie("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function bm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],z=A.instance,j=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=j;try{f(c)}catch(gt){dl(gt)}c.currentTarget=null,f=z}else for(S=0;S<s.length;S++){if(A=s[S],z=A.instance,j=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=j;try{f(c)}catch(gt){dl(gt)}c.currentTarget=null,f=z}}}}function Ue(t,n){var a=n[ti];a===void 0&&(a=n[ti]=new Set);var s=t+"__bubble";a.has(s)||(Am(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),Am(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Rl]){t[Rl]=!0,se.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,hf("selectionchange",!1,n))}}function Am(t,n,a,s){switch(Zm(n)){case 2:var c=My;break;case 8:c=Ey;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var z=S.tag;if((z===3||z===4)&&(z=S.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;S=S.return}for(;A!==null;){if(S=et(A),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){s=f=S;continue t}A=A.parentNode}}s=s.return}Gh(function(){var j=f,gt=Uc(a),Ct=[];t:{var at=md.get(t);if(at!==void 0){var dt=Xo,ae=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":dt=k0;break;case"focusin":ae="focus",dt=Fc;break;case"focusout":ae="blur",dt=Fc;break;case"beforeblur":case"afterblur":dt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=q0;break;case fd:case hd:case dd:dt=O0;break;case pd:dt=j0;break;case"scroll":case"scrollend":dt=C0;break;case"wheel":dt=K0;break;case"copy":case"cut":case"paste":dt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=qh;break;case"toggle":case"beforetoggle":dt=J0}var ve=(n&4)!==0,an=!ve&&(t==="scroll"||t==="scrollend"),K=ve?at!==null?at+"Capture":null:at;ve=[];for(var X=j,tt;X!==null;){var St=X;if(tt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||tt===null||K===null||(St=zs(X,K),St!=null&&ve.push(yo(X,St,tt))),an)break;X=X.return}0<ve.length&&(at=new dt(at,ae,null,a,gt),Ct.push({event:at,listeners:ve}))}}if(!(n&7)){t:{if(at=t==="mouseover"||t==="pointerover",dt=t==="mouseout"||t==="pointerout",at&&a!==Lc&&(ae=a.relatedTarget||a.fromElement)&&(et(ae)||ae[tn]))break t;if((dt||at)&&(at=gt.window===gt?gt:(at=gt.ownerDocument)?at.defaultView||at.parentWindow:window,dt?(ae=a.relatedTarget||a.toElement,dt=j,ae=ae?et(ae):null,ae!==null&&(an=$(ae),ve=ae.tag,ae!==an||ve!==5&&ve!==27&&ve!==6)&&(ae=null)):(dt=null,ae=j),dt!==ae)){if(ve=Wh,St="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ve=qh,St="onPointerLeave",K="onPointerEnter",X="pointer"),an=dt==null?at:ne(dt),tt=ae==null?at:ne(ae),at=new ve(St,X+"leave",dt,a,gt),at.target=an,at.relatedTarget=tt,St=null,et(gt)===j&&(ve=new ve(K,X+"enter",ae,a,gt),ve.target=tt,ve.relatedTarget=an,St=ve),an=St,dt&&ae)e:{for(ve=dt,K=ae,X=0,tt=ve;tt;tt=Qr(tt))X++;for(tt=0,St=K;St;St=Qr(St))tt++;for(;0<X-tt;)ve=Qr(ve),X--;for(;0<tt-X;)K=Qr(K),tt--;for(;X--;){if(ve===K||K!==null&&ve===K.alternate)break e;ve=Qr(ve),K=Qr(K)}ve=null}else ve=null;dt!==null&&wm(Ct,at,dt,ve,!1),ae!==null&&an!==null&&wm(Ct,an,ae,ve,!0)}}t:{if(at=j?ne(j):window,dt=at.nodeName&&at.nodeName.toLowerCase(),dt==="select"||dt==="input"&&at.type==="file")var Qt=td;else if(Jh(at))if(ed)Qt=lv;else{Qt=sv;var we=rv}else dt=at.nodeName,!dt||dt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?j&&Dc(j.elementType)&&(Qt=td):Qt=ov;if(Qt&&(Qt=Qt(t,j))){$h(Ct,Qt,a,gt);break t}we&&we(t,at,j),t==="focusout"&&j&&at.type==="number"&&j.memoizedProps.value!=null&&Cc(at,"number",at.value)}switch(we=j?ne(j):window,t){case"focusin":(Jh(we)||we.contentEditable==="true")&&(Cr=we,Wc=j,Ws=null);break;case"focusout":Ws=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,cd(Ct,a,gt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":cd(Ct,a,gt)}var re;if(Hc)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Rr?Kh(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Yh&&a.locale!=="ko"&&(Rr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Rr&&(re=Vh()):(ua=gt,Pc="value"in ua?ua.value:ua.textContent,Rr=!0)),we=Cl(j,ue),0<we.length&&(ue=new Xh(ue,t,null,a,gt),Ct.push({event:ue,listeners:we}),re?ue.data=re:(re=Qh(a),re!==null&&(ue.data=re)))),(re=tv?ev(t,a):nv(t,a))&&(ue=Cl(j,"onBeforeInput"),0<ue.length&&(we=new Xh("onBeforeInput","beforeinput",null,a,gt),Ct.push({event:we,listeners:ue}),we.data=re)),Yv(Ct,t,j,a,gt)}bm(Ct,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(yo(t,c,f)),c=zs(t,n),c!=null&&s.push(yo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wm(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,z=A.alternate,j=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||j===null||(z=j,c?(j=zs(a,f),j!=null&&S.unshift(yo(a,j,z))):c||(j=zs(a,f),j!=null&&S.push(yo(a,j,z)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Cm(t,n){return n=Rm(n),Rm(t)===n}function Dl(){}function Ge(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(t,""+s);break;case"className":ke(t,"class",s);break;case"tabIndex":ke(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,a,s);break;case"style":Ih(t,s,f);break;case"data":if(n!=="object"){ke(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&Ue("scroll",t);break;case"onScrollEnd":s!=null&&Ue("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ue("beforetoggle",t),Ue("toggle",t),oa(t,"popover",s);break;case"xlinkActuate":xn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":xn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":xn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":xn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":xn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":xn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":xn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":xn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":xn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oa(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,oa(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Ih(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?br(t,s):(typeof s=="number"||typeof s=="bigint")&&br(t,""+s);break;case"onScroll":s!=null&&Ue("scroll",t);break;case"onScrollEnd":s!=null&&Ue("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Oe]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):oa(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",t),Ue("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,S,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":Ue("invalid",t);var A=f=S=c=null,z=null,j=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":S=gt;break;case"checked":z=gt;break;case"defaultChecked":j=gt;break;case"value":f=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Ge(t,n,s,gt,a,null)}}Ps(t,f,A,z,j,S,c,!1),rn(t);return;case"select":Ue("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:Ge(t,n,c,A,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Tr(t,!!s,n,!1):a!=null&&Tr(t,!!s,a,!0);return;case"textarea":Ue("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ge(t,n,S,A,a,null)}Bh(t,s,c,f),rn(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ge(t,n,z,s,a,null)}return;case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":Ue("load",t);break;case"video":case"audio":for(s=0;s<vo.length;s++)Ue(vo[s],t);break;case"image":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"embed":case"source":case"link":Ue("error",t),Ue("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(s=a[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,j,s,a,null)}return;default:if(Dc(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&mf(t,n,gt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ge(t,n,A,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,z=null,j=null,gt=null;for(dt in a){var Ct=a[dt];if(a.hasOwnProperty(dt)&&Ct!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":z=Ct;default:s.hasOwnProperty(dt)||Ge(t,n,dt,null,s,Ct)}}for(var at in s){var dt=s[at];if(Ct=a[at],s.hasOwnProperty(at)&&(dt!=null||Ct!=null))switch(at){case"type":f=dt;break;case"name":c=dt;break;case"checked":j=dt;break;case"defaultChecked":gt=dt;break;case"value":S=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==Ct&&Ge(t,n,at,dt,s,Ct)}}Os(t,S,A,z,j,gt,f,c);return;case"select":dt=S=A=at=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":dt=z;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":at=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==z&&Ge(t,n,c,f,s,z)}n=A,a=S,s=dt,at!=null?Tr(t,!!a,at,!1):!!s!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":dt=at=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(t,n,A,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":at=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(t,n,S,c,s,f)}zh(t,at,dt);return;case"option":for(var ae in a)if(at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!s.hasOwnProperty(ae))switch(ae){case"selected":t.selected=!1;break;default:Ge(t,n,ae,null,s,at)}for(z in s)if(at=s[z],dt=a[z],s.hasOwnProperty(z)&&at!==dt&&(at!=null||dt!=null))switch(z){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ge(t,n,z,at,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)at=a[ve],a.hasOwnProperty(ve)&&at!=null&&!s.hasOwnProperty(ve)&&Ge(t,n,ve,null,s,at);for(j in s)if(at=s[j],dt=a[j],s.hasOwnProperty(j)&&at!==dt&&(at!=null||dt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ge(t,n,j,at,s,dt)}return;default:if(Dc(n)){for(var an in a)at=a[an],a.hasOwnProperty(an)&&at!==void 0&&!s.hasOwnProperty(an)&&mf(t,n,an,void 0,s,at);for(gt in s)at=s[gt],dt=a[gt],!s.hasOwnProperty(gt)||at===dt||at===void 0&&dt===void 0||mf(t,n,gt,at,s,dt);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!s.hasOwnProperty(K)&&Ge(t,n,K,null,s,at);for(Ct in s)at=s[Ct],dt=a[Ct],!s.hasOwnProperty(Ct)||at===dt||at==null&&dt==null||Ge(t,n,Ct,at,s,dt)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function ty(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(iy)}:Um;function iy(t){setTimeout(function(){throw t})}function Sf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),wo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);wo(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),st(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Pm(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var fi=new Map,zm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Zi=W.d;W.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:dy,S:hy,M:py};function sy(){var t=Zi.f(),n=Tl();return t||n}function oy(t){var n=Gt(t);n!==null&&n.tag===5&&n.type==="form"?cp(n):Zi.r(t)}var Jr=typeof document>"u"?null:document;function Bm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=wn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zm.has(c)||(zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),Kt(n),s.head.appendChild(n)))}}function ly(t){Zi.D(t),Bm("dns-prefetch",t,null)}function cy(t,n){Zi.C(t,n),Bm("preconnect",t,n)}function uy(t,n,a){Zi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+wn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+wn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+wn(a.imageSizes)+'"]')):c+='[href="'+wn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}fi.has(f)||(t=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(So(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),Tn(n,"link",t),Kt(n),s.head.appendChild(n)))}}function fy(t,n){Zi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+wn(s)+'"][href="'+wn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!fi.has(f)&&(t=E({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),Tn(s,"link",t),Kt(s),a.head.appendChild(s)}}}function hy(t,n,a){Zi.S(t,n,a);var s=Jr;if(s&&t){var c=ee(s).hoistableStyles,f=$r(t);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(So(f)))A.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Mf(t,a);var z=S=s.createElement("link");Kt(z),Tn(z,"link",t),z._p=new Promise(function(j,gt){z.onload=j,z.onerror=gt}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function dy(t,n){Zi.X(t,n);var a=Jr;if(a&&t){var s=ee(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=E({src:t,async:!0},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Kt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function py(t,n){Zi.M(t,n);var a=Jr;if(a&&t){var s=ee(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=E({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Kt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Fm(t,n,a,s){var c=(c=Jt.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=ee(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=ee(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(So(t)))&&!f._p&&(S.instance=f,S.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||my(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=ee(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+wn(t)+'"'}function So(t){return'link[rel="stylesheet"]['+t+"]"}function Im(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Kt(n),t.head.appendChild(n))}function ts(t){return'[src="'+wn(t)+'"]'}function xo(t){return"script[async]"+t}function Hm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+wn(a.href)+'"]');if(s)return n.instance=s,Kt(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Kt(s),Tn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,Kt(f),f;s=Im(a),(c=fi.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),Kt(f);var S=f;return S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,Kt(c),c):(s=a,(c=fi.get(f))&&(s=E({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Kt(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Gm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[rt]||f[Ae]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Mo=null;function _y(){}function vy(t,n,a){if(Mo===null)throw Error(r(475));var s=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(So(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Kt(f);return}f=t.ownerDocument||t,a=Im(a),(c=fi.get(c))&&Mf(a,c),f=f.createElement("link"),Kt(f);var S=f;S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yy(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(Sy,t),zl=null,Pl.call(t))}function Sy(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function xy(t,n,a,s,c,f,S,A){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Wm(t,n,a,s,c,f,S,A,z,j,gt,Ct){return t=new xy(t,n,a,S,A,z,j,Ct),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Xm(t){return t?(t=Ur,t):Ur}function qm(t,n,a,s,c,f){c=Xm(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(Pn(a,t,n),ro(a,t,n))}function Ym(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){Ym(t,n),(t=t.alternate)&&Ym(t,n)}function jm(t){if(t.tag===13){var n=fa(t,67108864);n!==null&&Pn(n,t,67108864),bf(t,67108864)}}var Bl=!0;function My(t,n,a,s){var c=I.T;I.T=null;var f=W.p;try{W.p=2,Af(t,n,a,s)}finally{W.p=f,I.T=c}}function Ey(t,n,a,s){var c=I.T;I.T=null;var f=W.p;try{W.p=8,Af(t,n,a,s)}finally{W.p=f,I.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Km(t,s);else if(by(c,t,n,a,s))s.stopPropagation();else if(Km(t,s),n&4&&-1<Ty.indexOf(t)){for(;c!==null;){var f=Gt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=xt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var z=1<<31-O(S);A.entanglements[1]|=z,S&=~z}Ci(f),!($e&6)&&(xl=ot()+500,_o(0))}}break;case 13:A=fa(f,2),A!==null&&Pn(A,f,2),Tl(),bf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=et(t),t!==null){var n=$(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=lt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Zm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case At:return 2;case kt:return 8;case $t:case de:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Cf=!1,Aa=null,wa=null,Ra=null,To=new Map,bo=new Map,Ca=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Gt(n),n!==null&&jm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function by(t,n,a,s,c){switch(n){case"focusin":return Aa=Ao(Aa,t,n,a,s,c),!0;case"dragenter":return wa=Ao(wa,t,n,a,s,c),!0;case"mouseover":return Ra=Ao(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0}return!1}function Qm(t){var n=et(t.target);if(n!==null){var a=$(n);if(a!==null){if(n=a.tag,n===13){if(n=lt(a),n!==null){t.blockedOn=n,pe(t.priority,function(){if(a.tag===13){var s=Zn(),c=fa(a,s);c!==null&&Pn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=Gt(a),n!==null&&jm(n),t.blockedOn=a,!1;n.shift()}return!0}function Jm(t,n,a){Il(t)&&a.delete(n)}function Ay(){Cf=!1,Aa!==null&&Il(Aa)&&(Aa=null),wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),To.forEach(Jm),bo.forEach(Jm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ay)))}var Gl=null;function $m(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=Gt(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(t){function n(z){return Hl(z,t)}Aa!==null&&Hl(Aa,t),wa!==null&&Hl(wa,t),Ra!==null&&Hl(Ra,t),To.forEach(n),bo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Oe]||null;if(typeof f=="function")S||$m(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Oe]||null)A=S.formAction;else if(Rf(c)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),$m(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();qm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),qm(t.current,2,null,t,null,null),Tl(),n[tn]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Qm(t)}};var tg=e.version;if(tg!=="19.0.0")throw Error(r(527,tg,"19.0.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Z(n),t=t!==null?ft(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:I,findFiberByHostInstance:et,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{oe=kl.inject(wy),Wt=kl}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=_p,f=vp,S=yp,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Wm(t,1,!1,null,null,a,s,c,f,S,A,null),t[tn]=n.current,df(t.nodeType===8?t.parentNode:t),new Df(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=_p,S=vp,A=yp,z=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),n=Wm(t,1,!0,n,a??null,s,c,f,S,A,z,j),n.context=Xm(null),a=n.current,s=Zn(),c=va(s),c.callback=null,ya(a,c,s),n.current.lanes=s,wt(n,s),Ci(n),t[tn]=n.current,df(t),new Vl(n)},Co.version="19.0.0",Co}var ug;function By(){if(ug)return Nf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zy(),Nf.exports}var Fy=By();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,fg=1,Hy=2,W_=1,X_=2,ea=3,ka=0,kn=1,Li=2,Ia=0,Es=1,mh=2,hg=3,dg=4,Gy=5,mr=100,Vy=101,ky=102,pg=103,mg=104,Wy=200,Xy=201,qy=202,Yy=203,gh=204,_h=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tS=212,eS=213,nS=214,iS=0,aS=1,rS=2,mc=3,sS=4,oS=5,lS=6,cS=7,Rh=0,uS=1,fS=2,Ha=0,hS=1,dS=2,pS=3,mS=4,gS=5,_S=6,q_=300,As=301,ws=302,vh=303,yh=304,Ec=306,Sh=1e3,Mi=1001,xh=1002,Fn=1003,gg=1004,Do=1005,Vn=1006,Bf=1007,_r=1008,Ga=1009,vS=1010,yS=1011,Ch=1012,Y_=1013,Fa=1014,na=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,SS=1021,Ei=1023,xS=1024,MS=1025,yr=1026,Rs=1027,ES=1028,K_=1029,TS=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,_g=35840,vg=35841,yg=35842,Sg=35843,$_=36196,xg=37492,Mg=37496,Eg=37808,Tg=37809,bg=37810,Ag=37811,wg=37812,Rg=37813,Cg=37814,Dg=37815,Lg=37816,Ug=37817,Ng=37818,Og=37819,Pg=37820,zg=37821,Vf=36492,Bg=36494,Fg=36495,bS=36283,Ig=36284,Hg=36285,Gg=36286,t0=3e3,Sr=3001,AS=3200,wS=3201,e0=0,RS=1,di="",bn="srgb",aa="srgb-linear",Dh="display-p3",Tc="display-p3-linear",gc="linear",Ze="srgb",_c="rec709",vc="p3",is=7680,Vg=519,CS=512,DS=513,LS=514,n0=515,US=516,NS=517,OS=518,PS=519,kg=35044,Wg="300 es",Mh=1035,ia=2e3,yc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Un(o,e,i){return Math.max(e,Math.min(i,o))}function Lh(o,e){return(o%e+e)%e}function zS(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function BS(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function FS(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function IS(o,e=1){return e-Math.abs(Lh(o,e*2)-e)}function HS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function GS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function VS(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kS(o,e){return o+Math.random()*(e-o)}function WS(o){return o*(.5-Math.random())}function XS(o){o!==void 0&&(Xg=o);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qS(o){return o*zo}function YS(o){return o*Io}function Eh(o){return(o&o-1)===0&&o!==0}function jS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Sc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ZS(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),p=d(i/2),m=u((e+r)/2),g=d((e+r)/2),y=u((e-r)/2),x=d((e-r)/2),M=u((r-e)/2),b=d((r-e)/2);switch(l){case"XYX":o.set(h*g,p*y,p*x,h*m);break;case"YZY":o.set(p*x,h*g,p*y,h*m);break;case"ZXZ":o.set(p*y,p*x,h*g,h*m);break;case"XZX":o.set(h*g,p*b,p*M,h*m);break;case"YXY":o.set(p*M,h*g,p*b,h*m);break;case"ZYZ":o.set(p*b,p*M,h*g,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Un,euclideanModulo:Lh,mapLinear:zS,inverseLerp:BS,lerp:Bo,damp:FS,pingpong:IS,smoothstep:HS,smootherstep:GS,randInt:VS,randFloat:kS,randFloatSpread:WS,seededRandom:XS,degToRad:qS,radToDeg:YS,isPowerOfTwo:Eh,ceilPowerOfTwo:jS,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:ZS,normalize:zn,denormalize:ys};class ge{constructor(e=0,i=0){ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Un(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,i,r,l,u,d,h,p,m){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],y=r[7],x=r[2],M=r[5],b=r[8],R=l[0],v=l[3],_=l[6],P=l[1],L=l[4],B=l[7],k=l[2],V=l[5],F=l[8];return u[0]=d*R+h*P+p*k,u[3]=d*v+h*L+p*V,u[6]=d*_+h*B+p*F,u[1]=m*R+g*P+y*k,u[4]=m*v+g*L+y*V,u[7]=m*_+g*B+y*F,u[2]=x*R+M*P+b*k,u[5]=x*v+M*L+b*V,u[8]=x*_+M*B+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],y=g*d-h*m,x=h*p-g*u,M=m*u-d*p,b=i*y+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=y*R,e[1]=(l*m-g*r)*R,e[2]=(h*r-l*d)*R,e[3]=x*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-h*i)*R,e[6]=M*R,e[7]=(r*p-m*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Ce;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=xc("canvas");return o.style.display="block",o}const qg={};function Ts(o){o in qg||(qg[o]=!0,console.warn(o))}const Yg=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jg=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[aa]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[bn]:{transfer:Ze,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Tc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg)},[Dh]:{transfer:Ze,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg).convertLinearToSRGB()}},QS=new Set([aa,Tc]),Ve={enabled:!0,_workingColorSpace:aa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!QS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===di?gc:Wl[o].transfer}};function bs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=xc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=bs(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(bs(i[r]/255)*255):i[r]=bs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Xf(l[d].image)):u.push(Xf(l[d]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class Wn extends Er{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,r=Mi,l=Mi,u=Vn,d=_r,h=Ei,p=Ga,m=Wn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Sr?bn:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?Sr:t0}set encoding(e){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?bn:di}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=q_;Wn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],y=p[8],x=p[1],M=p[5],b=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(y-R)<.01&&Math.abs(b-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+R)<.1&&Math.abs(b+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,B=(M+1)/2,k=(_+1)/2,V=(g+x)/4,F=(y+R)/4,pt=(b+v)/4;return L>B&&L>k?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=V/r,u=F/r):B>k?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=V/l,u=pt/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=pt/u),this.set(r,l,u,i),this}let P=Math.sqrt((v-b)*(v-b)+(y-R)*(y-R)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(v-b)/P,this.y=(y-R)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tx extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Sr?bn:di),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends tx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ex extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const x=u[d+0],M=u[d+1],b=u[d+2],R=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(y!==R||p!==x||m!==M||g!==b){let v=1-h;const _=p*x+m*M+g*b+y*R,P=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const k=Math.sqrt(L),V=Math.atan2(k,_*P);v=Math.sin(v*V)/k,h=Math.sin(h*V)/k}const B=h*P;if(p=p*v+x*B,m=m*v+M*B,g=g*v+b*B,y=y*v+R*B,v===1-h){const k=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=k,m*=k,g*=k,y*=k}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=u[d],x=u[d+1],M=u[d+2],b=u[d+3];return e[i]=h*b+g*y+p*M-m*x,e[i+1]=p*b+g*x+m*y-h*M,e[i+2]=m*b+g*M+h*x-p*y,e[i+3]=g*b-h*y-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),y=h(u/2),x=p(r/2),M=p(l/2),b=p(u/2);switch(d){case"XYZ":this._x=x*g*y+m*M*b,this._y=m*M*y-x*g*b,this._z=m*g*b+x*M*y,this._w=m*g*y-x*M*b;break;case"YXZ":this._x=x*g*y+m*M*b,this._y=m*M*y-x*g*b,this._z=m*g*b-x*M*y,this._w=m*g*y+x*M*b;break;case"ZXY":this._x=x*g*y-m*M*b,this._y=m*M*y+x*g*b,this._z=m*g*b+x*M*y,this._w=m*g*y-x*M*b;break;case"ZYX":this._x=x*g*y-m*M*b,this._y=m*M*y+x*g*b,this._z=m*g*b-x*M*y,this._w=m*g*y+x*M*b;break;case"YZX":this._x=x*g*y+m*M*b,this._y=m*M*y+x*g*b,this._z=m*g*b-x*M*y,this._w=m*g*y-x*M*b;break;case"XZY":this._x=x*g*y-m*M*b,this._y=m*M*y-x*g*b,this._z=m*g*b+x*M*y,this._w=m*g*y+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],y=i[10],x=r+h+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),y=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,i=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-u*l),y=2*(u*r-d*i);return this.x=i+p*m+d*y-h*g,this.y=r+p*g+h*m-u*y,this.z=l+p*y+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Un(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new q,Zg=new Mr;class Ho{constructor(e=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ql.subVectors(this.max,Lo),rs.subVectors(e.a,Lo),ss.subVectors(e.b,Lo),os.subVectors(e.c,Lo),La.subVectors(ss,rs),Ua.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-cr.z,cr.y,La.z,0,-La.x,Ua.z,0,-Ua.x,cr.z,0,-cr.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-cr.y,cr.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(La,Ua),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new q,new q,new q,new q,new q,new q,new q,new q],yi=new q,Xl=new Ho,rs=new q,ss=new q,os=new q,La=new q,Ua=new q,cr=new q,Lo=new q,ql=new q,Yl=new q,ur=new q;function Yf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const nx=new Ho,Uo=new q,jf=new q;class bc{constructor(e=new q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nx.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(jf)),this.expandByPoint(Uo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new q,Zf=new q,jl=new q,Na=new q,Kf=new q,Zl=new q,Qf=new q;class Uh{constructor(e=new q,i=new q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(jl),h=Na.dot(this.direction),p=-Na.dot(jl),m=Na.lengthSq(),g=Math.abs(1-d*d);let y,x,M,b;if(g>0)if(y=d*p-h,x=d*h-p,b=u*g,y>=0)if(x>=-b)if(x<=b){const R=1/g;y*=R,x*=R,M=y*(y+d*x+2*h)+x*(d*y+x+2*p)+m}else x=u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*p)+m;else x<=-b?(y=Math.max(0,-(-d*u+h)),x=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+x*(x+2*p)+m):x<=b?(y=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(y=Math.max(0,-(d*u+h)),x=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+x*(x+2*p)+m);else x=d>0?-u:u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(jl,x),M}intersectSphere(e,i){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let d=this.direction.dot(Qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Na.subVectors(this.origin,e);const p=h*this.direction.dot(Zl.crossVectors(Na,Zl));if(p<0)return null;const m=h*this.direction.dot(Kf.cross(Na));if(m<0||p+m>d)return null;const g=-h*Na.dot(Qf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,r,l,u,d,h,p,m,g,y,x,M,b,R,v){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,g,y,x,M,b,R,v)}set(e,i,r,l,u,d,h,p,m,g,y,x,M,b,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=M,_[7]=b,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),d=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*g,M=d*y,b=h*g,R=h*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=M+b*m,i[5]=x-R*m,i[9]=-h*p,i[2]=R-x*m,i[6]=b+M*m,i[10]=d*p}else if(e.order==="YXZ"){const x=p*g,M=p*y,b=m*g,R=m*y;i[0]=x+R*h,i[4]=b*h-M,i[8]=d*m,i[1]=d*y,i[5]=d*g,i[9]=-h,i[2]=M*h-b,i[6]=R+x*h,i[10]=d*p}else if(e.order==="ZXY"){const x=p*g,M=p*y,b=m*g,R=m*y;i[0]=x-R*h,i[4]=-d*y,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*g,i[9]=R-x*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const x=d*g,M=d*y,b=h*g,R=h*y;i[0]=p*g,i[4]=b*m-M,i[8]=x*m+R,i[1]=p*y,i[5]=R*m+x,i[9]=M*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*m,b=h*p,R=h*m;i[0]=p*g,i[4]=R-x*y,i[8]=b*y+M,i[1]=y,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*y+b,i[10]=x-R*y}else if(e.order==="XZY"){const x=d*p,M=d*m,b=h*p,R=h*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=x*y+R,i[5]=d*g,i[9]=M*y-b,i[2]=b*y-M,i[6]=h*g,i[10]=R*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,ax)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Oa.crossVectors(r,Kn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Oa.crossVectors(r,Kn)),Oa.normalize(),Kl.crossVectors(Kn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Kn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Kn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],y=r[5],x=r[9],M=r[13],b=r[2],R=r[6],v=r[10],_=r[14],P=r[3],L=r[7],B=r[11],k=r[15],V=l[0],F=l[4],pt=l[8],I=l[12],E=l[1],N=l[5],ht=l[9],Et=l[13],Y=l[2],nt=l[6],H=l[10],it=l[14],$=l[3],lt=l[7],C=l[11],Z=l[15];return u[0]=d*V+h*E+p*Y+m*$,u[4]=d*F+h*N+p*nt+m*lt,u[8]=d*pt+h*ht+p*H+m*C,u[12]=d*I+h*Et+p*it+m*Z,u[1]=g*V+y*E+x*Y+M*$,u[5]=g*F+y*N+x*nt+M*lt,u[9]=g*pt+y*ht+x*H+M*C,u[13]=g*I+y*Et+x*it+M*Z,u[2]=b*V+R*E+v*Y+_*$,u[6]=b*F+R*N+v*nt+_*lt,u[10]=b*pt+R*ht+v*H+_*C,u[14]=b*I+R*Et+v*it+_*Z,u[3]=P*V+L*E+B*Y+k*$,u[7]=P*F+L*N+B*nt+k*lt,u[11]=P*pt+L*ht+B*H+k*C,u[15]=P*I+L*Et+B*it+k*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],y=e[6],x=e[10],M=e[14],b=e[3],R=e[7],v=e[11],_=e[15];return b*(+u*p*y-l*m*y-u*h*x+r*m*x+l*h*M-r*p*M)+R*(+i*p*M-i*m*x+u*d*x-l*d*M+l*m*g-u*p*g)+v*(+i*m*y-i*h*M-u*d*y+r*d*M+u*h*g-r*m*g)+_*(-l*h*g-i*p*y+i*h*x+l*d*y-r*d*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],y=e[9],x=e[10],M=e[11],b=e[12],R=e[13],v=e[14],_=e[15],P=y*v*m-R*x*m+R*p*M-h*v*M-y*p*_+h*x*_,L=b*x*m-g*v*m-b*p*M+d*v*M+g*p*_-d*x*_,B=g*R*m-b*y*m+b*h*M-d*R*M-g*h*_+d*y*_,k=b*y*p-g*R*p-b*h*x+d*R*x+g*h*v-d*y*v,V=i*P+r*L+l*B+u*k;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return e[0]=P*F,e[1]=(R*x*u-y*v*u-R*l*M+r*v*M+y*l*_-r*x*_)*F,e[2]=(h*v*u-R*p*u+R*l*m-r*v*m-h*l*_+r*p*_)*F,e[3]=(y*p*u-h*x*u-y*l*m+r*x*m+h*l*M-r*p*M)*F,e[4]=L*F,e[5]=(g*v*u-b*x*u+b*l*M-i*v*M-g*l*_+i*x*_)*F,e[6]=(b*p*u-d*v*u-b*l*m+i*v*m+d*l*_-i*p*_)*F,e[7]=(d*x*u-g*p*u+g*l*m-i*x*m-d*l*M+i*p*M)*F,e[8]=B*F,e[9]=(b*y*u-g*R*u-b*r*M+i*R*M+g*r*_-i*y*_)*F,e[10]=(d*R*u-b*h*u+b*r*m-i*R*m-d*r*_+i*h*_)*F,e[11]=(g*h*u-d*y*u-g*r*m+i*y*m+d*r*M-i*h*M)*F,e[12]=k*F,e[13]=(g*R*l-b*y*l+b*r*x-i*R*x-g*r*v+i*y*v)*F,e[14]=(b*h*l-d*R*l-b*r*p+i*R*p+d*r*v-i*h*v)*F,e[15]=(d*y*l-g*h*l+g*r*p-i*y*p-d*r*x+i*h*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,y=h+h,x=u*m,M=u*g,b=u*y,R=d*g,v=d*y,_=h*y,P=p*m,L=p*g,B=p*y,k=r.x,V=r.y,F=r.z;return l[0]=(1-(R+_))*k,l[1]=(M+B)*k,l[2]=(b-L)*k,l[3]=0,l[4]=(M-B)*V,l[5]=(1-(x+_))*V,l[6]=(v+P)*V,l[7]=0,l[8]=(b+L)*F,l[9]=(v-P)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const d=ls.set(l[4],l[5],l[6]).length(),h=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const m=1/u,g=1/d,y=1/h;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=y,Si.elements[9]*=y,Si.elements[10]*=y,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ia){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),x=(r+l)/(r-l);let M,b;if(h===ia)M=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===yc)M=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ia){const p=this.elements,m=1/(i-e),g=1/(r-l),y=1/(d-u),x=(i+e)*m,M=(r+l)*g;let b,R;if(h===ia)b=(d+u)*y,R=-2*y;else if(h===yc)b=u*y,R=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new q,Si=new on,ix=new q(0,0,0),ax=new q(1,1,1),Oa=new q,Kl=new q,Kn=new q,Kg=new on,Qg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Un(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Un(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Un(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rx=0;const Jg=new q,cs=new Mr,Ji=new on,Ql=new q,No=new q,sx=new q,ox=new Mr,$g=new q(1,0,0),t_=new q(0,1,0),e_=new q(0,0,1),lx={type:"added"},cx={type:"removed"};class An extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new q,i=new Ac,r=new Mr,l=new q(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new Ce}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(No,Ql,this.up):Ji.lookAt(Ql,No,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(Ji),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new q,$i=new q,Jf=new q,ta=new q,us=new q,fs=new q,n_=new q,$f=new q,th=new q,eh=new q;class Ui{constructor(e=new q,i=new q,r=new q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){xi.subVectors(l,i),$i.subVectors(r,i),Jf.subVectors(e,i);const d=xi.dot(xi),h=xi.dot($i),p=xi.dot(Jf),m=$i.dot($i),g=$i.dot(Jf),y=d*m-h*h;if(y===0)return u.set(0,0,0),null;const x=1/y,M=(m*p-h*g)*x,b=(d*g-h*p)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ta.x),p.addScaledVector(d,ta.y),p.addScaledVector(h,ta.z),p)}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),$i.subVectors(e,i),xi.cross($i).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);th.subVectors(e,l);const g=us.dot(th),y=fs.dot(th);if(g>=0&&y<=g)return i.copy(l);const x=p*y-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(us,d);eh.subVectors(e,u);const M=us.dot(eh),b=fs.dot(eh);if(b>=0&&M<=b)return i.copy(u);const R=M*m-p*b;if(R<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector(fs,h);const v=g*b-M*y;if(v<=0&&y-g>=0&&M-b>=0)return n_.subVectors(u,l),h=(y-g)/(y-g+(M-b)),i.copy(l).addScaledVector(n_,h);const _=1/(v+R+x);return d=R*_,h=x*_,i.copy(r).addScaledVector(us,d).addScaledVector(fs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ne{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ve.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ve.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ve.workingColorSpace){if(e=Lh(e,1),i=Un(i,0,1),r=Un(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=nh(d,u,e+1/3),this.g=nh(d,u,e),this.b=nh(d,u,e-1/3)}return Ve.toWorkingColorSpace(this,l),this}setStyle(e,i=bn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bn){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ve.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Un(Ln.r*255,0,255))*65536+Math.round(Un(Ln.g*255,0,255))*256+Math.round(Un(Ln.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const y=d-h;switch(m=g<=.5?y/(d+h):y/(2-d-h),d){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=bn){Ve.fromWorkingColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==bn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Bo(Pa.h,Jl.h,i),l=Bo(Pa.s,Jl.s,i),u=Bo(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ne;Ne.NAMES=l0;let ux=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new q,$l=new ge;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ts("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class u0 extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fx=0;const hi=new on,ih=new An,hs=new q,Qn=new Ho,Oo=new Ho,Sn=new q;class Oi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new pi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(Sn),Sn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(Sn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Sn.fromBufferAttribute(h,m),p&&(hs.fromBufferAttribute(e,m),Sn.add(hs)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let E=0;E<h;E++)m[E]=new q,g[E]=new q;const y=new q,x=new q,M=new q,b=new ge,R=new ge,v=new ge,_=new q,P=new q;function L(E,N,ht){y.fromArray(l,E*3),x.fromArray(l,N*3),M.fromArray(l,ht*3),b.fromArray(d,E*2),R.fromArray(d,N*2),v.fromArray(d,ht*2),x.sub(y),M.sub(y),R.sub(b),v.sub(b);const Et=1/(R.x*v.y-v.x*R.y);isFinite(Et)&&(_.copy(x).multiplyScalar(v.y).addScaledVector(M,-R.y).multiplyScalar(Et),P.copy(M).multiplyScalar(R.x).addScaledVector(x,-v.x).multiplyScalar(Et),m[E].add(_),m[N].add(_),m[ht].add(_),g[E].add(P),g[N].add(P),g[ht].add(P))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let E=0,N=B.length;E<N;++E){const ht=B[E],Et=ht.start,Y=ht.count;for(let nt=Et,H=Et+Y;nt<H;nt+=3)L(r[nt+0],r[nt+1],r[nt+2])}const k=new q,V=new q,F=new q,pt=new q;function I(E){F.fromArray(u,E*3),pt.copy(F);const N=m[E];k.copy(N),k.sub(F.multiplyScalar(F.dot(N))).normalize(),V.crossVectors(pt,N);const Et=V.dot(g[E])<0?-1:1;p[E*4]=k.x,p[E*4+1]=k.y,p[E*4+2]=k.z,p[E*4+3]=Et}for(let E=0,N=B.length;E<N;++E){const ht=B[E],Et=ht.start,Y=ht.count;for(let nt=Et,H=Et+Y;nt<H;nt+=3)I(r[nt+0]),I(r[nt+1]),I(r[nt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new q,u=new q,d=new q,h=new q,p=new q,m=new q,g=new q,y=new q;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),R=e.getX(x+1),v=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),g.subVectors(d,u),y.subVectors(l,u),g.cross(y),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),h.add(g),p.add(g),m.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),y.subVectors(l,u),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,y=h.normalized,x=new m.constructor(p.length*g);let M=0,b=0;for(let R=0,v=p.length;R<v;R++){h.isInterleavedBufferAttribute?M=p[R]*h.data.stride+h.offset:M=p[R]*g;for(let _=0;_<g;_++)x[b++]=m[M++]}return new Ni(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,y=m.length;g<y;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let x=0,M=y.length;x<M;x++)g.push(y[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new on,fr=new Uh,tc=new bc,a_=new q,ds=new q,ps=new q,ms=new q,ah=new q,ec=new q,nc=new ge,ic=new ge,ac=new ge,r_=new q,s_=new q,o_=new q,rc=new q,sc=new q;class $n extends An{constructor(e=new Oi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],y=u[p];g!==0&&(ah.fromBufferAttribute(y,e),d?ec.addScaledVector(ah,g):ec.addScaledVector(ah.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(tc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(tc,a_)===null||fr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,R=x.length;b<R;b++){const v=x[b],_=d[v.materialIndex],P=Math.max(v.start,M.start),L=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,k=L;B<k;B+=3){const V=h.getX(B),F=h.getX(B+1),pt=h.getX(B+2);l=oc(this,_,e,r,m,g,y,V,F,pt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let v=b,_=R;v<_;v+=3){const P=h.getX(v),L=h.getX(v+1),B=h.getX(v+2);l=oc(this,d,e,r,m,g,y,P,L,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,R=x.length;b<R;b++){const v=x[b],_=d[v.materialIndex],P=Math.max(v.start,M.start),L=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let B=P,k=L;B<k;B+=3){const V=B,F=B+1,pt=B+2;l=oc(this,_,e,r,m,g,y,V,F,pt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=b,_=R;v<_;v+=3){const P=v,L=v+1,B=v+2;l=oc(this,d,e,r,m,g,y,P,L,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function hx(o,e,i,r,l,u,d,h){let p;if(e.side===kn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===ka,h),p===null)return null;sc.copy(h),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,ds),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=hx(o,e,i,r,ds,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,h),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Ui.getInterpolation(rc,ds,ps,ms,nc,ic,ac,new ge)),u&&(nc.fromBufferAttribute(u,h),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Ui.getInterpolation(rc,ds,ps,ms,nc,ic,ac,new ge),g.uv2=g.uv1),d&&(r_.fromBufferAttribute(d,h),s_.fromBufferAttribute(d,p),o_.fromBufferAttribute(d,m),g.normal=Ui.getInterpolation(rc,ds,ps,ms,r_,s_,o_,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new q,materialIndex:0};Ui.getNormal(ds,ps,ms,y.normal),g.face=y}return g}class Va extends Oi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],y=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pi(m,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(y,2));function b(R,v,_,P,L,B,k,V,F,pt,I){const E=B/F,N=k/pt,ht=B/2,Et=k/2,Y=V/2,nt=F+1,H=pt+1;let it=0,$=0;const lt=new q;for(let C=0;C<H;C++){const Z=C*N-Et;for(let ft=0;ft<nt;ft++){const Tt=ft*E-ht;lt[R]=Tt*P,lt[v]=Z*L,lt[_]=Y,m.push(lt.x,lt.y,lt.z),lt[R]=0,lt[v]=0,lt[_]=V>0?1:-1,g.push(lt.x,lt.y,lt.z),y.push(ft/F),y.push(1-C/pt),it+=1}}for(let C=0;C<pt;C++)for(let Z=0;Z<F;Z++){const ft=x+Z+nt*C,Tt=x+Z+nt*(C+1),W=x+(Z+1)+nt*(C+1),ct=x+(Z+1)+nt*C;p.push(ft,Tt,ct),p.push(Tt,W,ct),$+=6}h.addGroup(M,$,I),M+=$,x+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function dx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function h0(o){return o.getRenderTarget()===null?o.outputColorSpace:Ve.workingColorSpace}const px={clone:Cs,merge:Bn};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class d0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new q,l_=new ge,c_=new ge;class Jn extends d0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _x extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new Jn(gs,_s,e,i);u.layers=this.layers,this.add(u);const d=new Jn(gs,_s,e,i);d.layers=this.layers,this.add(d);const h=new Jn(gs,_s,e,i);h.layers=this.layers,this.add(h);const p=new Jn(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new Jn(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class p0 extends Wn{constructor(e,i,r,l,u,d,h,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vx extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?bn:di),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Va(5,5,5),u=new ra({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ia});u.uniforms.tEquirect.value=i;const d=new $n(l,u),h=i.minFilter;return i.minFilter===_r&&(i.minFilter=Vn),new _x(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const rh=new q,yx=new q,Sx=new Ce;class Ba{constructor(e=new q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rh.subVectors(r,i).cross(yx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Sx.getNormalMatrix(e),l=this.coplanarPoint(rh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bc,lc=new q;class Nh{constructor(e=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,d=new Ba){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],y=l[6],x=l[7],M=l[8],b=l[9],R=l[10],v=l[11],_=l[12],P=l[13],L=l[14],B=l[15];if(r[0].setComponents(p-u,x-m,v-M,B-_).normalize(),r[1].setComponents(p+u,x+m,v+M,B+_).normalize(),r[2].setComponents(p+d,x+g,v+b,B+P).normalize(),r[3].setComponents(p-d,x-g,v-b,B-P).normalize(),r[4].setComponents(p-h,x-y,v-R,B-L).normalize(),i===ia)r[5].setComponents(p+h,x+y,v+R,B+L).normalize();else if(i===yc)r[5].setComponents(h,y,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function xx(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const y=m.array,x=m.usage,M=y.byteLength,b=o.createBuffer();o.bindBuffer(g,b),o.bufferData(g,y,x),m.onUploadCallback();let R;if(y instanceof Float32Array)R=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)R=o.SHORT;else if(y instanceof Uint32Array)R=o.UNSIGNED_INT;else if(y instanceof Int32Array)R=o.INT;else if(y instanceof Int8Array)R=o.BYTE;else if(y instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:b,type:R,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,y){const x=g.array,M=g._updateRange,b=g.updateRanges;if(o.bindBuffer(y,m),M.count===-1&&b.length===0&&o.bufferSubData(y,0,x),b.length!==0){for(let R=0,v=b.length;R<v;R++){const _=b[R];i?o.bufferSubData(y,_.start*x.BYTES_PER_ELEMENT,x,_.start,_.count):o.bufferSubData(y,_.start*x.BYTES_PER_ELEMENT,x.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x,M.offset,M.count):o.bufferSubData(y,M.offset*x.BYTES_PER_ELEMENT,x.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const x=r.get(m);(!x||x.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,l(m,g));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,g),y.version=m.version}}return{get:d,remove:h,update:p}}class wc extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,y=e/h,x=i/p,M=[],b=[],R=[],v=[];for(let _=0;_<g;_++){const P=_*x-d;for(let L=0;L<m;L++){const B=L*y-u;b.push(B,-P,0),R.push(0,0,1),v.push(L/h),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<h;P++){const L=P+m*_,B=P+m*(_+1),k=P+1+m*(_+1),V=P+1+m*_;M.push(L,B,V),M.push(B,k,V)}this.setIndex(M),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mx=`#ifdef USE_ALPHAHASH
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
}`,Ee={alphahash_fragment:Mx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:bx,alphatest_fragment:Ax,alphatest_pars_fragment:wx,aomap_fragment:Rx,aomap_pars_fragment:Cx,batching_pars_vertex:Dx,batching_vertex:Lx,begin_vertex:Ux,beginnormal_vertex:Nx,bsdfs:Ox,iridescence_fragment:Px,bumpmap_pars_fragment:zx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:kx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:jx,displacementmap_vertex:Zx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Qx,colorspace_fragment:Jx,colorspace_pars_fragment:$x,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:dM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:xM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:yE,worldpos_vertex:SE,background_vert:xE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},It={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Di={basic:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Bn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Bn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Bn([It.points,It.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Bn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Bn([It.common,It.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Bn([It.sprite,It.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Bn([It.common,It.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Bn([It.lights,It.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Di.physical={uniforms:Bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const cc={r:0,b:0,g:0};function eT(o,e,i,r,l,u,d){const h=new Ne(0);let p=u===!0?0:1,m,g,y=null,x=0,M=null;function b(v,_){let P=!1,L=_.isScene===!0?_.background:null;L&&L.isTexture&&(L=(_.backgroundBlurriness>0?i:e).get(L)),L===null?R(h,p):L&&L.isColor&&(R(L,1),P=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===Ec)?(g===void 0&&(g=new $n(new Va(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:Cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,V,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ve.getTransfer(L.colorSpace)!==Ze,(y!==L||x!==L.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=L,x=L.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new $n(new wc(2,2),new ra({name:"BackgroundMaterial",uniforms:Cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(L.colorSpace)!==Ze,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=L,x=L.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(cc,h0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,d)}return{getClearColor:function(){return h},setClearColor:function(v,_=1){h.set(v),p=_,R(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(h,p)},render:b}}function nT(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},p=v(null);let m=p,g=!1;function y(Y,nt,H,it,$){let lt=!1;if(d){const C=R(it,H,nt);m!==C&&(m=C,M(m.object)),lt=_(Y,it,H,$),lt&&P(Y,it,H,$)}else{const C=nt.wireframe===!0;(m.geometry!==it.id||m.program!==H.id||m.wireframe!==C)&&(m.geometry=it.id,m.program=H.id,m.wireframe=C,lt=!0)}$!==null&&i.update($,o.ELEMENT_ARRAY_BUFFER),(lt||g)&&(g=!1,pt(Y,nt,H,it),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get($).buffer))}function x(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(Y){return r.isWebGL2?o.bindVertexArray(Y):u.bindVertexArrayOES(Y)}function b(Y){return r.isWebGL2?o.deleteVertexArray(Y):u.deleteVertexArrayOES(Y)}function R(Y,nt,H){const it=H.wireframe===!0;let $=h[Y.id];$===void 0&&($={},h[Y.id]=$);let lt=$[nt.id];lt===void 0&&(lt={},$[nt.id]=lt);let C=lt[it];return C===void 0&&(C=v(x()),lt[it]=C),C}function v(Y){const nt=[],H=[],it=[];for(let $=0;$<l;$++)nt[$]=0,H[$]=0,it[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:H,attributeDivisors:it,object:Y,attributes:{},index:null}}function _(Y,nt,H,it){const $=m.attributes,lt=nt.attributes;let C=0;const Z=H.getAttributes();for(const ft in Z)if(Z[ft].location>=0){const W=$[ft];let ct=lt[ft];if(ct===void 0&&(ft==="instanceMatrix"&&Y.instanceMatrix&&(ct=Y.instanceMatrix),ft==="instanceColor"&&Y.instanceColor&&(ct=Y.instanceColor)),W===void 0||W.attribute!==ct||ct&&W.data!==ct.data)return!0;C++}return m.attributesNum!==C||m.index!==it}function P(Y,nt,H,it){const $={},lt=nt.attributes;let C=0;const Z=H.getAttributes();for(const ft in Z)if(Z[ft].location>=0){let W=lt[ft];W===void 0&&(ft==="instanceMatrix"&&Y.instanceMatrix&&(W=Y.instanceMatrix),ft==="instanceColor"&&Y.instanceColor&&(W=Y.instanceColor));const ct={};ct.attribute=W,W&&W.data&&(ct.data=W.data),$[ft]=ct,C++}m.attributes=$,m.attributesNum=C,m.index=it}function L(){const Y=m.newAttributes;for(let nt=0,H=Y.length;nt<H;nt++)Y[nt]=0}function B(Y){k(Y,0)}function k(Y,nt){const H=m.newAttributes,it=m.enabledAttributes,$=m.attributeDivisors;H[Y]=1,it[Y]===0&&(o.enableVertexAttribArray(Y),it[Y]=1),$[Y]!==nt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,nt),$[Y]=nt)}function V(){const Y=m.newAttributes,nt=m.enabledAttributes;for(let H=0,it=nt.length;H<it;H++)nt[H]!==Y[H]&&(o.disableVertexAttribArray(H),nt[H]=0)}function F(Y,nt,H,it,$,lt,C){C===!0?o.vertexAttribIPointer(Y,nt,H,$,lt):o.vertexAttribPointer(Y,nt,H,it,$,lt)}function pt(Y,nt,H,it){if(r.isWebGL2===!1&&(Y.isInstancedMesh||it.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const $=it.attributes,lt=H.getAttributes(),C=nt.defaultAttributeValues;for(const Z in lt){const ft=lt[Z];if(ft.location>=0){let Tt=$[Z];if(Tt===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(Tt=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(Tt=Y.instanceColor)),Tt!==void 0){const W=Tt.normalized,ct=Tt.itemSize,Mt=i.get(Tt);if(Mt===void 0)continue;const Xt=Mt.buffer,Bt=Mt.type,zt=Mt.bytesPerElement,_t=r.isWebGL2===!0&&(Bt===o.INT||Bt===o.UNSIGNED_INT||Tt.gpuType===Y_);if(Tt.isInterleavedBufferAttribute){const Ut=Tt.data,G=Ut.stride,Jt=Tt.offset;if(Ut.isInstancedInterleavedBuffer){for(let jt=0;jt<ft.locationSize;jt++)k(ft.location+jt,Ut.meshPerAttribute);Y.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let jt=0;jt<ft.locationSize;jt++)B(ft.location+jt);o.bindBuffer(o.ARRAY_BUFFER,Xt);for(let jt=0;jt<ft.locationSize;jt++)F(ft.location+jt,ct/ft.locationSize,Bt,W,G*zt,(Jt+ct/ft.locationSize*jt)*zt,_t)}else{if(Tt.isInstancedBufferAttribute){for(let Ut=0;Ut<ft.locationSize;Ut++)k(ft.location+Ut,Tt.meshPerAttribute);Y.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Ut=0;Ut<ft.locationSize;Ut++)B(ft.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,Xt);for(let Ut=0;Ut<ft.locationSize;Ut++)F(ft.location+Ut,ct/ft.locationSize,Bt,W,ct*zt,ct/ft.locationSize*Ut*zt,_t)}}else if(C!==void 0){const W=C[Z];if(W!==void 0)switch(W.length){case 2:o.vertexAttrib2fv(ft.location,W);break;case 3:o.vertexAttrib3fv(ft.location,W);break;case 4:o.vertexAttrib4fv(ft.location,W);break;default:o.vertexAttrib1fv(ft.location,W)}}}}V()}function I(){ht();for(const Y in h){const nt=h[Y];for(const H in nt){const it=nt[H];for(const $ in it)b(it[$].object),delete it[$];delete nt[H]}delete h[Y]}}function E(Y){if(h[Y.id]===void 0)return;const nt=h[Y.id];for(const H in nt){const it=nt[H];for(const $ in it)b(it[$].object),delete it[$];delete nt[H]}delete h[Y.id]}function N(Y){for(const nt in h){const H=h[nt];if(H[Y.id]===void 0)continue;const it=H[Y.id];for(const $ in it)b(it[$].object),delete it[$];delete H[Y.id]}}function ht(){Et(),g=!0,m!==p&&(m=p,M(m.object))}function Et(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:ht,resetDefaultState:Et,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:L,enableAttribute:B,disableUnusedAttributes:V}}function iT(o,e,i,r){const l=r.isWebGL2;let u;function d(g){u=g}function h(g,y){o.drawArrays(u,g,y),i.update(y,u,1)}function p(g,y,x){if(x===0)return;let M,b;if(l)M=o,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](u,g,y,x),i.update(y,u,x)}function m(g,y,x){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<x;b++)this.render(g[b],y[b]);else{M.multiDrawArraysWEBGL(u,g,0,y,0,x);let b=0;for(let R=0;R<x;R++)b+=y[R];i.update(b,u,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function aT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,B=d||e.has("OES_texture_float"),k=L&&B,V=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:b,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:L,floatFragmentTextures:B,floatVertexTextures:k,maxSamples:V}}function rT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ba,h=new Ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=g(y,x,0)},this.setState=function(y,x,M){const b=y.clippingPlanes,R=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||u&&!v)u?g(null):m();else{const P=u?0:r,L=P*4;let B=_.clippingState||null;p.value=B,B=g(b,x,L,M);for(let k=0;k!==L;++k)B[k]=i[k];_.clippingState=B,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,M,b){const R=y!==null?y.length:0;let v=null;if(R!==0){if(v=p.value,b!==!0||v===null){const _=M+R*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let L=0,B=M;L!==R;++L,B+=4)d.copy(y[L]).applyMatrix4(P,h),d.normal.toArray(v,B),v[B+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function sT(o){let e=new WeakMap;function i(d,h){return h===vh?d.mapping=As:h===yh&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===vh||h===yh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new vx(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends d0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,u_=[.125,.215,.35,.446,.526,.582],gr=20,sh=new g0,f_=new Ne;let oh=null,lh=0,ch=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,h_=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,pr,vs),new q(0,pr,-vs),new q(vs,0,pr),new q(-vs,0,pr),new q(pr,vs,0),new q(-pr,vs,0)];class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,lh,ch),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:aa,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(u)),this._blurMaterial=lT(u,e,i)}return l}_compileMaterial(e){const i=new $n(this._lodPlanes[0],e);this._renderer.compile(i,sh)}_sceneToCubeUV(e,i,r,l){const h=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(f_),g.toneMapping=Ha,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new $n(new Va,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(f_),R=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(h.up.set(0,p[_],0),h.lookAt(m[_],0,0)):P===1?(h.up.set(0,0,p[_]),h.lookAt(0,m[_],0)):(h.up.set(0,p[_],0),h.lookAt(0,0,m[_]));const L=this._cubeSize;uc(l,P*L,_>2?L:0,L,L),g.setRenderTarget(l),R&&g.render(b,h),g.render(e,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new $n(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,sh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=h_[(l-1)%h_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new $n(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),R=u/b,v=isFinite(u)?1+Math.floor(g*R):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let P=0;for(let F=0;F<gr;++F){const pt=F/R,I=Math.exp(-pt*pt/2);_.push(I),F===0?P+=I:F<v&&(P+=2*I)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-r;const B=this._sizeLods[l],k=3*B*(l>L-Ss?l-L+Ss:0),V=4*(this._cubeSize-B);uc(i,k,V,3*B,2*B),p.setRenderTarget(i),p.render(y,sh)}}function oT(o){const e=[],i=[],r=[];let l=o;const u=o-Ss+1+u_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-Ss?p=u_[d-o+Ss-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,b=6,R=3,v=2,_=1,P=new Float32Array(R*b*M),L=new Float32Array(v*b*M),B=new Float32Array(_*b*M);for(let V=0;V<M;V++){const F=V%3*2/3-1,pt=V>2?0:-1,I=[F,pt,0,F+2/3,pt,0,F+2/3,pt+1,0,F,pt,0,F+2/3,pt+1,0,F,pt+1,0];P.set(I,R*b*V),L.set(x,v*b*V);const E=[V,V,V,V,V,V];B.set(E,_*b*V)}const k=new Oi;k.setAttribute("position",new Ni(P,R)),k.setAttribute("uv",new Ni(L,v)),k.setAttribute("faceIndex",new Ni(B,_)),e.push(k),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function p_(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lT(o,e,i){const r=new Float32Array(gr),l=new q(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function m_(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function g_(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function cT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===vh||p===yh,g=p===As||p===ws;if(m||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let y=e.get(h);return i===null&&(i=new d_(o)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),e.set(h,y),y.texture}else{if(e.has(h))return e.get(h).texture;{const y=h.image;if(m&&y&&y.height>0||g&&y&&l(y)){i===null&&(i=new d_(o));const x=m?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,x),h.addEventListener("dispose",u),x.texture}else return null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function uT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fT(o,e,i,r){const l={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);for(const b in x.morphAttributes){const R=x.morphAttributes[b];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(y,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(y){const x=y.attributes;for(const b in x)e.update(x[b],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const R=M[b];for(let v=0,_=R.length;v<_;v++)e.update(R[v],o.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,b=y.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let L=0,B=P.length;L<B;L+=3){const k=P[L+0],V=P[L+1],F=P[L+2];x.push(k,V,V,F,F,k)}}else if(b!==void 0){const P=b.array;R=b.version;for(let L=0,B=P.length/3-1;L<B;L+=3){const k=L+0,V=L+1,F=L+2;x.push(k,V,V,F,F,k)}}else return;const v=new(i0(x)?f0:u0)(x,1);v.version=R;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const x=u.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:h,update:p,getWireframeAttribute:g}}function hT(o,e,i,r){const l=r.isWebGL2;let u;function d(M){u=M}let h,p;function m(M){h=M.type,p=M.bytesPerElement}function g(M,b){o.drawElements(u,b,h,M*p),i.update(b,u,1)}function y(M,b,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,b,h,M*p,R),i.update(b,u,R)}function x(M,b,R){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(M[_]/p,b[_]);else{v.multiDrawElementsWEBGL(u,b,0,h,M,0,R);let _=0;for(let P=0;P<R;P++)_+=b[P];i.update(_,u,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=y,this.renderMultiDraw=x}function dT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pT(o,e){return o[0]-e[0]}function mT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new Ke,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,g,y){const x=m.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=b!==void 0?b.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let nt=function(){Et.dispose(),u.delete(g),g.removeEventListener("dispose",nt)};var M=nt;v!==void 0&&v.texture.dispose();const L=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,k=g.morphAttributes.color!==void 0,V=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],pt=g.morphAttributes.color||[];let I=0;L===!0&&(I=1),B===!0&&(I=2),k===!0&&(I=3);let E=g.attributes.position.count*I,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const ht=new Float32Array(E*N*4*R),Et=new s0(ht,E,N,R);Et.type=na,Et.needsUpdate=!0;const Y=I*4;for(let H=0;H<R;H++){const it=V[H],$=F[H],lt=pt[H],C=E*N*4*H;for(let Z=0;Z<it.count;Z++){const ft=Z*Y;L===!0&&(d.fromBufferAttribute(it,Z),ht[C+ft+0]=d.x,ht[C+ft+1]=d.y,ht[C+ft+2]=d.z,ht[C+ft+3]=0),B===!0&&(d.fromBufferAttribute($,Z),ht[C+ft+4]=d.x,ht[C+ft+5]=d.y,ht[C+ft+6]=d.z,ht[C+ft+7]=0),k===!0&&(d.fromBufferAttribute(lt,Z),ht[C+ft+8]=d.x,ht[C+ft+9]=d.y,ht[C+ft+10]=d.z,ht[C+ft+11]=lt.itemSize===4?d.w:1)}}v={count:R,texture:Et,size:new ge(E,N)},u.set(g,v),g.addEventListener("dispose",nt)}let _=0;for(let L=0;L<x.length;L++)_+=x[L];const P=g.morphTargetsRelative?1:1-_;y.getUniforms().setValue(o,"morphTargetBaseInfluence",P),y.getUniforms().setValue(o,"morphTargetInfluences",x),y.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const b=x===void 0?0:x.length;let R=r[g.id];if(R===void 0||R.length!==b){R=[];for(let B=0;B<b;B++)R[B]=[B,0];r[g.id]=R}for(let B=0;B<b;B++){const k=R[B];k[0]=B,k[1]=x[B]}R.sort(mT);for(let B=0;B<8;B++)B<b&&R[B][1]?(h[B][0]=R[B][0],h[B][1]=R[B][1]):(h[B][0]=Number.MAX_SAFE_INTEGER,h[B][1]=0);h.sort(pT);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let P=0;for(let B=0;B<8;B++){const k=h[B],V=k[0],F=k[1];V!==Number.MAX_SAFE_INTEGER&&F?(v&&g.getAttribute("morphTarget"+B)!==v[V]&&g.setAttribute("morphTarget"+B,v[V]),_&&g.getAttribute("morphNormal"+B)!==_[V]&&g.setAttribute("morphNormal"+B,_[V]),l[B]=F,P+=F):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const L=g.morphTargetsRelative?1:1-P;y.getUniforms().setValue(o,"morphTargetBaseInfluence",L),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _T(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return y}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class _0 extends Wn{constructor(e,i,r,l,u,d,h,p,m,g){if(g=g!==void 0?g:yr,g!==yr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===yr&&(r=Fa),r===void 0&&g===Rs&&(r=vr),super(null,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Fn,this.minFilter=p!==void 0?p:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new Wn,y0=new _0(1,1);y0.compareFunction=n0;const S0=new s0,x0=new ex,M0=new p0,__=[],v_=[],y_=new Float32Array(16),S_=new Float32Array(9),x_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function MT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;x_.set(r),o.uniformMatrix2fv(this.addr,!1,x_),gn(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;S_.set(r),o.uniformMatrix3fv(this.addr,!1,S_),gn(i,r)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;y_.set(r),o.uniformMatrix4fv(this.addr,!1,y_),gn(i,r)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?y0:v0;i.setTexture2D(e||u,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||x0,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||S0,l)}function BT(o){switch(o){case 5126:return vT;case 35664:return yT;case 35665:return ST;case 35666:return xT;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return DT;case 36295:return LT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}function FT(o,e){o.uniform1fv(this.addr,e)}function IT(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kT(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WT(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XT(o,e){o.uniform1iv(this.addr,e)}function qT(o,e){o.uniform2iv(this.addr,e)}function YT(o,e){o.uniform3iv(this.addr,e)}function jT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function QT(o,e){o.uniform3uiv(this.addr,e)}function JT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||v0,u[d])}function tb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||x0,u[d])}function eb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||M0,u[d])}function nb(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||S0,u[d])}function ib(o){switch(o){case 5126:return FT;case 35664:return IT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function ob(o,e,i){const r=o.name,l=r.length;for(uh.lastIndex=0;;){const u=uh.exec(r),d=uh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){M_(i,m===void 0?new ab(h,o,e):new rb(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new sb(h),M_(i,y)),i=y}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);ob(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let cb=0;function ub(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function fb(o){const e=Ve.getPrimaries(Ve.workingColorSpace),i=Ve.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case aa:case Tc:return[r,"LinearTransferOETF"];case bn:case Dh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function T_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ub(o.getShaderSource(e),d)}else return l}function hb(o,e){const i=fb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function db(o,e){let i;switch(e){case hS:i="Linear";break;case dS:i="Reinhard";break;case pS:i="OptimizedCineon";break;case mS:i="ACESFilmic";break;case _S:i="AgX";break;case gS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function gb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function xs(o){return o!==""}function b_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(o){return o.replace(vb,Sb)}const yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sb(o,e){let i=Ee[e];if(i===void 0){const r=yb.get(e);if(r!==void 0)i=Ee[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Th(i)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(o){return o.replace(xb,Mb)}function Mb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function R_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Eb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function wb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Rb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=Eb(i),m=Tb(i),g=bb(i),y=Ab(i),x=wb(i),M=i.isWebGL2?"":pb(i),b=mb(i),R=gb(u),v=l.createProgram();let _,P,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(xs).join(`
`),_.length>0&&(_+=`
`),P=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(xs).join(`
`),P.length>0&&(P+=`
`)):(_=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),P=[M,R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?Ee.tonemapping_pars_fragment:"",i.toneMapping!==Ha?db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,hb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xs).join(`
`)),d=Th(d),d=b_(d,i),d=A_(d,i),h=Th(h),h=b_(h,i),h=A_(h,i),d=w_(d),h=w_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const B=L+_+d,k=L+P+h,V=E_(l,l.VERTEX_SHADER,B),F=E_(l,l.FRAGMENT_SHADER,k);l.attachShader(v,V),l.attachShader(v,F),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function pt(ht){if(o.debug.checkShaderErrors){const Et=l.getProgramInfoLog(v).trim(),Y=l.getShaderInfoLog(V).trim(),nt=l.getShaderInfoLog(F).trim();let H=!0,it=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,V,F);else{const $=T_(l,V,"vertex"),lt=T_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+ht.name+`
Material Type: `+ht.type+`

Program Info Log: `+Et+`
`+$+`
`+lt)}else Et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Et):(Y===""||nt==="")&&(it=!1);it&&(ht.diagnostics={runnable:H,programLog:Et,vertexShader:{log:Y,prefix:_},fragmentShader:{log:nt,prefix:P}})}l.deleteShader(V),l.deleteShader(F),I=new pc(l,v),E=_b(l,v)}let I;this.getUniforms=function(){return I===void 0&&pt(this),I};let E;this.getAttributes=function(){return E===void 0&&pt(this),E};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(v,lb)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=V,this.fragmentShader=F,this}let Cb=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Lb(e),i.set(e,r)),r}}class Lb{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Ub(o,e,i,r,l,u,d){const h=new o0,p=new Db,m=new Set,g=[],y=l.isWebGL2,x=l.logarithmicDepthBuffer,M=l.vertexTextures;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,N,ht,Et,Y){const nt=Et.fog,H=Y.geometry,it=E.isMeshStandardMaterial?Et.environment:null,$=(E.isMeshStandardMaterial?i:e).get(E.envMap||it),lt=$&&$.mapping===Ec?$.image.height:null,C=R[E.type];E.precision!==null&&(b=l.getMaxPrecision(E.precision),b!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",b,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=Z!==void 0?Z.length:0;let Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let W,ct,Mt,Xt;if(C){const mt=Di[C];W=mt.vertexShader,ct=mt.fragmentShader}else W=E.vertexShader,ct=E.fragmentShader,p.update(E),Mt=p.getVertexShaderID(E),Xt=p.getFragmentShaderID(E);const Bt=o.getRenderTarget(),zt=Y.isInstancedMesh===!0,_t=Y.isBatchedMesh===!0,Ut=!!E.map,G=!!E.matcap,Jt=!!$,jt=!!E.aoMap,Zt=!!E.lightMap,yt=!!E.bumpMap,ye=!!E.normalMap,qt=!!E.displacementMap,w=!!E.emissiveMap,T=!!E.metalnessMap,J=!!E.roughnessMap,ut=E.anisotropy>0,bt=E.clearcoat>0,ot=E.iridescence>0,Ft=E.sheen>0,At=E.transmission>0,kt=ut&&!!E.anisotropyMap,$t=bt&&!!E.clearcoatMap,de=bt&&!!E.clearcoatNormalMap,Rt=bt&&!!E.clearcoatRoughnessMap,Le=ot&&!!E.iridescenceMap,_e=ot&&!!E.iridescenceThicknessMap,oe=Ft&&!!E.sheenColorMap,Wt=Ft&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,le=!!E.specularColorMap,O=!!E.specularIntensityMap,Nt=At&&!!E.transmissionMap,Ht=At&&!!E.thicknessMap,ie=!!E.gradientMap,U=!!E.alphaMap,vt=E.alphaTest>0,xt=!!E.alphaHash,Yt=!!E.extensions;let te=Ha;E.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(te=o.toneMapping);const be={isWebGL2:y,shaderID:C,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:ct,defines:E.defines,customVertexShaderID:Mt,customFragmentShaderID:Xt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:b,batching:_t,instancing:zt,instancingColor:zt&&Y.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Bt===null?o.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:aa,alphaToCoverage:!!E.alphaToCoverage,map:Ut,matcap:G,envMap:Jt,envMapMode:Jt&&$.mapping,envMapCubeUVHeight:lt,aoMap:jt,lightMap:Zt,bumpMap:yt,normalMap:ye,displacementMap:M&&qt,emissiveMap:w,normalMapObjectSpace:ye&&E.normalMapType===RS,normalMapTangentSpace:ye&&E.normalMapType===e0,metalnessMap:T,roughnessMap:J,anisotropy:ut,anisotropyMap:kt,clearcoat:bt,clearcoatMap:$t,clearcoatNormalMap:de,clearcoatRoughnessMap:Rt,iridescence:ot,iridescenceMap:Le,iridescenceThicknessMap:_e,sheen:Ft,sheenColorMap:oe,sheenRoughnessMap:Wt,specularMap:Vt,specularColorMap:le,specularIntensityMap:O,transmission:At,transmissionMap:Nt,thicknessMap:Ht,gradientMap:ie,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:U,alphaTest:vt,alphaHash:xt,combine:E.combine,mapUv:Ut&&v(E.map.channel),aoMapUv:jt&&v(E.aoMap.channel),lightMapUv:Zt&&v(E.lightMap.channel),bumpMapUv:yt&&v(E.bumpMap.channel),normalMapUv:ye&&v(E.normalMap.channel),displacementMapUv:qt&&v(E.displacementMap.channel),emissiveMapUv:w&&v(E.emissiveMap.channel),metalnessMapUv:T&&v(E.metalnessMap.channel),roughnessMapUv:J&&v(E.roughnessMap.channel),anisotropyMapUv:kt&&v(E.anisotropyMap.channel),clearcoatMapUv:$t&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&v(E.sheenRoughnessMap.channel),specularMapUv:Vt&&v(E.specularMap.channel),specularColorMapUv:le&&v(E.specularColorMap.channel),specularIntensityMapUv:O&&v(E.specularIntensityMap.channel),transmissionMapUv:Nt&&v(E.transmissionMap.channel),thicknessMapUv:Ht&&v(E.thicknessMap.channel),alphaMapUv:U&&v(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ye||ut),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(Ut||U),fog:!!nt,useFog:E.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Tt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:te,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ut&&E.map.isVideoTexture===!0&&Ve.getTransfer(E.map.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Yt&&E.extensions.derivatives===!0,extensionFragDepth:Yt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Yt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Yt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Yt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Yt&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return be.vertexUv1s=m.has(1),be.vertexUv2s=m.has(2),be.vertexUv3s=m.has(3),m.clear(),be}function P(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ht in E.defines)N.push(ht),N.push(E.defines[ht]);return E.isRawShaderMaterial===!1&&(L(N,E),B(N,E),N.push(o.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function L(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function B(E,N){h.disableAll(),N.isWebGL2&&h.enable(0),N.supportsVertexTextures&&h.enable(1),N.instancing&&h.enable(2),N.instancingColor&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),E.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.skinning&&h.enable(4),N.morphTargets&&h.enable(5),N.morphNormals&&h.enable(6),N.morphColors&&h.enable(7),N.premultipliedAlpha&&h.enable(8),N.shadowMapEnabled&&h.enable(9),N.useLegacyLights&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.alphaToCoverage&&h.enable(20),E.push(h.mask)}function k(E){const N=R[E.type];let ht;if(N){const Et=Di[N];ht=px.clone(Et.uniforms)}else ht=E.uniforms;return ht}function V(E,N){let ht;for(let Et=0,Y=g.length;Et<Y;Et++){const nt=g[Et];if(nt.cacheKey===N){ht=nt,++ht.usedTimes;break}}return ht===void 0&&(ht=new Rb(o,N,E,u),g.push(ht)),ht}function F(E){if(--E.usedTimes===0){const N=g.indexOf(E);g[N]=g[g.length-1],g.pop(),E.destroy()}}function pt(E){p.remove(E)}function I(){p.dispose()}return{getParameters:_,getProgramCacheKey:P,getUniforms:k,acquireProgram:V,releaseProgram:F,releaseShaderCache:pt,programs:g,dispose:I}}function Nb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(y,x,M,b,R,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:b,renderOrder:y.renderOrder,z:R,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=y.renderOrder,_.z=R,_.group=v),e++,_}function h(y,x,M,b,R,v){const _=d(y,x,M,b,R,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(y,x,M,b,R,v){const _=d(y,x,M,b,R,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,x){i.length>1&&i.sort(y||Ob),r.length>1&&r.sort(x||C_),l.length>1&&l.sort(x||C_)}function g(){for(let y=e,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function Pb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new D_,o.set(r,[d])):l>=u.length?(d=new D_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new q,color:new Ne};break;case"SpotLight":i={position:new q,direction:new q,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new q,halfWidth:new q,halfHeight:new q};break}return o[e.id]=i,i}}}function Bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Fb=0;function Ib(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hb(o,e){const i=new zb,r=Bb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new q);const u=new q,d=new on,h=new on;function p(g,y){let x=0,M=0,b=0;for(let ht=0;ht<9;ht++)l.probe[ht].set(0,0,0);let R=0,v=0,_=0,P=0,L=0,B=0,k=0,V=0,F=0,pt=0,I=0;g.sort(Ib);const E=y===!0?Math.PI:1;for(let ht=0,Et=g.length;ht<Et;ht++){const Y=g[ht],nt=Y.color,H=Y.intensity,it=Y.distance,$=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)x+=nt.r*H*E,M+=nt.g*H*E,b+=nt.b*H*E;else if(Y.isLightProbe){for(let lt=0;lt<9;lt++)l.probe[lt].addScaledVector(Y.sh.coefficients[lt],H);I++}else if(Y.isDirectionalLight){const lt=i.get(Y);if(lt.color.copy(Y.color).multiplyScalar(Y.intensity*E),Y.castShadow){const C=Y.shadow,Z=r.get(Y);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,l.directionalShadow[R]=Z,l.directionalShadowMap[R]=$,l.directionalShadowMatrix[R]=Y.shadow.matrix,B++}l.directional[R]=lt,R++}else if(Y.isSpotLight){const lt=i.get(Y);lt.position.setFromMatrixPosition(Y.matrixWorld),lt.color.copy(nt).multiplyScalar(H*E),lt.distance=it,lt.coneCos=Math.cos(Y.angle),lt.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),lt.decay=Y.decay,l.spot[_]=lt;const C=Y.shadow;if(Y.map&&(l.spotLightMap[F]=Y.map,F++,C.updateMatrices(Y),Y.castShadow&&pt++),l.spotLightMatrix[_]=C.matrix,Y.castShadow){const Z=r.get(Y);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,l.spotShadow[_]=Z,l.spotShadowMap[_]=$,V++}_++}else if(Y.isRectAreaLight){const lt=i.get(Y);lt.color.copy(nt).multiplyScalar(H),lt.halfWidth.set(Y.width*.5,0,0),lt.halfHeight.set(0,Y.height*.5,0),l.rectArea[P]=lt,P++}else if(Y.isPointLight){const lt=i.get(Y);if(lt.color.copy(Y.color).multiplyScalar(Y.intensity*E),lt.distance=Y.distance,lt.decay=Y.decay,Y.castShadow){const C=Y.shadow,Z=r.get(Y);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,l.pointShadow[v]=Z,l.pointShadowMap[v]=$,l.pointShadowMatrix[v]=Y.shadow.matrix,k++}l.point[v]=lt,v++}else if(Y.isHemisphereLight){const lt=i.get(Y);lt.skyColor.copy(Y.color).multiplyScalar(H*E),lt.groundColor.copy(Y.groundColor).multiplyScalar(H*E),l.hemi[L]=lt,L++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=It.LTC_FLOAT_1,l.rectAreaLTC2=It.LTC_FLOAT_2):(l.rectAreaLTC1=It.LTC_HALF_1,l.rectAreaLTC2=It.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=It.LTC_FLOAT_1,l.rectAreaLTC2=It.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=It.LTC_HALF_1,l.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=M,l.ambient[2]=b;const N=l.hash;(N.directionalLength!==R||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==P||N.hemiLength!==L||N.numDirectionalShadows!==B||N.numPointShadows!==k||N.numSpotShadows!==V||N.numSpotMaps!==F||N.numLightProbes!==I)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=P,l.point.length=v,l.hemi.length=L,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=k,l.pointShadowMap.length=k,l.spotShadow.length=V,l.spotShadowMap.length=V,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=k,l.spotLightMatrix.length=V+F-pt,l.spotLightMap.length=F,l.numSpotLightShadowsWithMaps=pt,l.numLightProbes=I,N.directionalLength=R,N.pointLength=v,N.spotLength=_,N.rectAreaLength=P,N.hemiLength=L,N.numDirectionalShadows=B,N.numPointShadows=k,N.numSpotShadows=V,N.numSpotMaps=F,N.numLightProbes=I,l.version=Fb++)}function m(g,y){let x=0,M=0,b=0,R=0,v=0;const _=y.matrixWorldInverse;for(let P=0,L=g.length;P<L;P++){const B=g[P];if(B.isDirectionalLight){const k=l.directional[x];k.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(_),x++}else if(B.isSpotLight){const k=l.spot[b];k.position.setFromMatrixPosition(B.matrixWorld),k.position.applyMatrix4(_),k.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),k.direction.sub(u),k.direction.transformDirection(_),b++}else if(B.isRectAreaLight){const k=l.rectArea[R];k.position.setFromMatrixPosition(B.matrixWorld),k.position.applyMatrix4(_),h.identity(),d.copy(B.matrixWorld),d.premultiply(_),h.extractRotation(d),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),k.halfWidth.applyMatrix4(h),k.halfHeight.applyMatrix4(h),R++}else if(B.isPointLight){const k=l.point[M];k.position.setFromMatrixPosition(B.matrixWorld),k.position.applyMatrix4(_),M++}else if(B.isHemisphereLight){const k=l.hemi[v];k.direction.setFromMatrixPosition(B.matrixWorld),k.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function L_(o,e){const i=new Hb(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(y){r.push(y)}function h(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function Gb(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let p;return h===void 0?(p=new L_(o,e),i.set(u,[p])):d>=h.length?(p=new L_(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class Vb extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wb=`void main() {
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
}`;function qb(o,e,i){let r=new Nh;const l=new ge,u=new ge,d=new Ke,h=new Vb({depthPacking:wS}),p=new kb,m={},g=i.maxTextureSize,y={[ka]:kn,[kn]:ka,[Li]:Li},x=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Oi;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $n(b,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let _=this.type;this.render=function(V,F,pt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||V.length===0)return;const I=o.getRenderTarget(),E=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),ht=o.state;ht.setBlending(Ia),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const Et=_!==ea&&this.type===ea,Y=_===ea&&this.type!==ea;for(let nt=0,H=V.length;nt<H;nt++){const it=V[nt],$=it.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const lt=$.getFrameExtents();if(l.multiply(lt),u.copy($.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/lt.x),l.x=u.x*lt.x,$.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/lt.y),l.y=u.y*lt.y,$.mapSize.y=u.y)),$.map===null||Et===!0||Y===!0){const Z=this.type!==ea?{minFilter:Fn,magFilter:Fn}:{};$.map!==null&&$.map.dispose(),$.map=new xr(l.x,l.y,Z),$.map.texture.name=it.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const C=$.getViewportCount();for(let Z=0;Z<C;Z++){const ft=$.getViewport(Z);d.set(u.x*ft.x,u.y*ft.y,u.x*ft.z,u.y*ft.w),ht.viewport(d),$.updateMatrices(it,Z),r=$.getFrustum(),B(F,pt,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===ea&&P($,pt),$.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(I,E,N)};function P(V,F){const pt=e.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new xr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(F,null,pt,x,R,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(F,null,pt,M,R,null)}function L(V,F,pt,I){let E=null;const N=pt.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(N!==void 0)E=N;else if(E=pt.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ht=E.uuid,Et=F.uuid;let Y=m[ht];Y===void 0&&(Y={},m[ht]=Y);let nt=Y[Et];nt===void 0&&(nt=E.clone(),Y[Et]=nt,F.addEventListener("dispose",k)),E=nt}if(E.visible=F.visible,E.wireframe=F.wireframe,I===ea?E.side=F.shadowSide!==null?F.shadowSide:F.side:E.side=F.shadowSide!==null?F.shadowSide:y[F.side],E.alphaMap=F.alphaMap,E.alphaTest=F.alphaTest,E.map=F.map,E.clipShadows=F.clipShadows,E.clippingPlanes=F.clippingPlanes,E.clipIntersection=F.clipIntersection,E.displacementMap=F.displacementMap,E.displacementScale=F.displacementScale,E.displacementBias=F.displacementBias,E.wireframeLinewidth=F.wireframeLinewidth,E.linewidth=F.linewidth,pt.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ht=o.properties.get(E);ht.light=pt}return E}function B(V,F,pt,I,E){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&E===ea)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,V.matrixWorld);const Et=e.update(V),Y=V.material;if(Array.isArray(Y)){const nt=Et.groups;for(let H=0,it=nt.length;H<it;H++){const $=nt[H],lt=Y[$.materialIndex];if(lt&&lt.visible){const C=L(V,lt,I,E);V.onBeforeShadow(o,V,F,pt,Et,C,$),o.renderBufferDirect(pt,null,Et,C,V,$),V.onAfterShadow(o,V,F,pt,Et,C,$)}}}else if(Y.visible){const nt=L(V,Y,I,E);V.onBeforeShadow(o,V,F,pt,Et,nt,null),o.renderBufferDirect(pt,null,Et,nt,V,null),V.onAfterShadow(o,V,F,pt,Et,nt,null)}}const ht=V.children;for(let Et=0,Y=ht.length;Et<Y;Et++)B(ht[Et],F,pt,I,E)}function k(V){V.target.removeEventListener("dispose",k);for(const pt in m){const I=m[pt],E=V.target.uuid;E in I&&(I[E].dispose(),delete I[E])}}}function Yb(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const vt=new Ke;let xt=null;const Yt=new Ke(0,0,0,0);return{setMask:function(te){xt!==te&&!U&&(o.colorMask(te,te,te,te),xt=te)},setLocked:function(te){U=te},setClear:function(te,be,mt,Dt,Ot){Ot===!0&&(te*=Dt,be*=Dt,mt*=Dt),vt.set(te,be,mt,Dt),Yt.equals(vt)===!1&&(o.clearColor(te,be,mt,Dt),Yt.copy(vt))},reset:function(){U=!1,xt=null,Yt.set(-1,0,0,0)}}}function u(){let U=!1,vt=null,xt=null,Yt=null;return{setTest:function(te){te?zt(o.DEPTH_TEST):_t(o.DEPTH_TEST)},setMask:function(te){vt!==te&&!U&&(o.depthMask(te),vt=te)},setFunc:function(te){if(xt!==te){switch(te){case iS:o.depthFunc(o.NEVER);break;case aS:o.depthFunc(o.ALWAYS);break;case rS:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sS:o.depthFunc(o.EQUAL);break;case oS:o.depthFunc(o.GEQUAL);break;case lS:o.depthFunc(o.GREATER);break;case cS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=te}},setLocked:function(te){U=te},setClear:function(te){Yt!==te&&(o.clearDepth(te),Yt=te)},reset:function(){U=!1,vt=null,xt=null,Yt=null}}}function d(){let U=!1,vt=null,xt=null,Yt=null,te=null,be=null,mt=null,Dt=null,Ot=null;return{setTest:function(wt){U||(wt?zt(o.STENCIL_TEST):_t(o.STENCIL_TEST))},setMask:function(wt){vt!==wt&&!U&&(o.stencilMask(wt),vt=wt)},setFunc:function(wt,Lt,Pt){(xt!==wt||Yt!==Lt||te!==Pt)&&(o.stencilFunc(wt,Lt,Pt),xt=wt,Yt=Lt,te=Pt)},setOp:function(wt,Lt,Pt){(be!==wt||mt!==Lt||Dt!==Pt)&&(o.stencilOp(wt,Lt,Pt),be=wt,mt=Lt,Dt=Pt)},setLocked:function(wt){U=wt},setClear:function(wt){Ot!==wt&&(o.clearStencil(wt),Ot=wt)},reset:function(){U=!1,vt=null,xt=null,Yt=null,te=null,be=null,mt=null,Dt=null,Ot=null}}}const h=new l,p=new u,m=new d,g=new WeakMap,y=new WeakMap;let x={},M={},b=new WeakMap,R=[],v=null,_=!1,P=null,L=null,B=null,k=null,V=null,F=null,pt=null,I=new Ne(0,0,0),E=0,N=!1,ht=null,Et=null,Y=null,nt=null,H=null;const it=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,lt=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(C)[1]),$=lt>=1):C.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),$=lt>=2);let Z=null,ft={};const Tt=o.getParameter(o.SCISSOR_BOX),W=o.getParameter(o.VIEWPORT),ct=new Ke().fromArray(Tt),Mt=new Ke().fromArray(W);function Xt(U,vt,xt,Yt){const te=new Uint8Array(4),be=o.createTexture();o.bindTexture(U,be),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let mt=0;mt<xt;mt++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(vt,0,o.RGBA,1,1,Yt,0,o.RGBA,o.UNSIGNED_BYTE,te):o.texImage2D(vt+mt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,te);return be}const Bt={};Bt[o.TEXTURE_2D]=Xt(o.TEXTURE_2D,o.TEXTURE_2D,1),Bt[o.TEXTURE_CUBE_MAP]=Xt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Bt[o.TEXTURE_2D_ARRAY]=Xt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Bt[o.TEXTURE_3D]=Xt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),zt(o.DEPTH_TEST),p.setFunc(mc),qt(!1),w(fg),zt(o.CULL_FACE),yt(Ia);function zt(U){x[U]!==!0&&(o.enable(U),x[U]=!0)}function _t(U){x[U]!==!1&&(o.disable(U),x[U]=!1)}function Ut(U,vt){return M[U]!==vt?(o.bindFramebuffer(U,vt),M[U]=vt,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=vt),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=vt)),!0):!1}function G(U,vt){let xt=R,Yt=!1;if(U)if(xt=b.get(vt),xt===void 0&&(xt=[],b.set(vt,xt)),U.isWebGLMultipleRenderTargets){const te=U.texture;if(xt.length!==te.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let be=0,mt=te.length;be<mt;be++)xt[be]=o.COLOR_ATTACHMENT0+be;xt.length=te.length,Yt=!0}}else xt[0]!==o.COLOR_ATTACHMENT0&&(xt[0]=o.COLOR_ATTACHMENT0,Yt=!0);else xt[0]!==o.BACK&&(xt[0]=o.BACK,Yt=!0);Yt&&(i.isWebGL2?o.drawBuffers(xt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Jt(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const jt={[mr]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};if(r)jt[pg]=o.MIN,jt[mg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(jt[pg]=U.MIN_EXT,jt[mg]=U.MAX_EXT)}const Zt={[Wy]:o.ZERO,[Xy]:o.ONE,[qy]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[Jy]:o.SRC_ALPHA_SATURATE,[Ky]:o.DST_COLOR,[jy]:o.DST_ALPHA,[Yy]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[Qy]:o.ONE_MINUS_DST_COLOR,[Zy]:o.ONE_MINUS_DST_ALPHA,[$y]:o.CONSTANT_COLOR,[tS]:o.ONE_MINUS_CONSTANT_COLOR,[eS]:o.CONSTANT_ALPHA,[nS]:o.ONE_MINUS_CONSTANT_ALPHA};function yt(U,vt,xt,Yt,te,be,mt,Dt,Ot,wt){if(U===Ia){_===!0&&(_t(o.BLEND),_=!1);return}if(_===!1&&(zt(o.BLEND),_=!0),U!==Gy){if(U!==P||wt!==N){if((L!==mr||V!==mr)&&(o.blendEquation(o.FUNC_ADD),L=mr,V=mr),wt)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.ONE,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}B=null,k=null,F=null,pt=null,I.set(0,0,0),E=0,P=U,N=wt}return}te=te||vt,be=be||xt,mt=mt||Yt,(vt!==L||te!==V)&&(o.blendEquationSeparate(jt[vt],jt[te]),L=vt,V=te),(xt!==B||Yt!==k||be!==F||mt!==pt)&&(o.blendFuncSeparate(Zt[xt],Zt[Yt],Zt[be],Zt[mt]),B=xt,k=Yt,F=be,pt=mt),(Dt.equals(I)===!1||Ot!==E)&&(o.blendColor(Dt.r,Dt.g,Dt.b,Ot),I.copy(Dt),E=Ot),P=U,N=!1}function ye(U,vt){U.side===Li?_t(o.CULL_FACE):zt(o.CULL_FACE);let xt=U.side===kn;vt&&(xt=!xt),qt(xt),U.blending===Es&&U.transparent===!1?yt(Ia):yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),h.setMask(U.colorWrite);const Yt=U.stencilWrite;m.setTest(Yt),Yt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),J(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?zt(o.SAMPLE_ALPHA_TO_COVERAGE):_t(o.SAMPLE_ALPHA_TO_COVERAGE)}function qt(U){ht!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),ht=U)}function w(U){U!==Iy?(zt(o.CULL_FACE),U!==Et&&(U===fg?o.cullFace(o.BACK):U===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_t(o.CULL_FACE),Et=U}function T(U){U!==Y&&($&&o.lineWidth(U),Y=U)}function J(U,vt,xt){U?(zt(o.POLYGON_OFFSET_FILL),(nt!==vt||H!==xt)&&(o.polygonOffset(vt,xt),nt=vt,H=xt)):_t(o.POLYGON_OFFSET_FILL)}function ut(U){U?zt(o.SCISSOR_TEST):_t(o.SCISSOR_TEST)}function bt(U){U===void 0&&(U=o.TEXTURE0+it-1),Z!==U&&(o.activeTexture(U),Z=U)}function ot(U,vt,xt){xt===void 0&&(Z===null?xt=o.TEXTURE0+it-1:xt=Z);let Yt=ft[xt];Yt===void 0&&(Yt={type:void 0,texture:void 0},ft[xt]=Yt),(Yt.type!==U||Yt.texture!==vt)&&(Z!==xt&&(o.activeTexture(xt),Z=xt),o.bindTexture(U,vt||Bt[U]),Yt.type=U,Yt.texture=vt)}function Ft(){const U=ft[Z];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function At(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $t(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(U){ct.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function O(U){Mt.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function Nt(U,vt){let xt=y.get(vt);xt===void 0&&(xt=new WeakMap,y.set(vt,xt));let Yt=xt.get(U);Yt===void 0&&(Yt=o.getUniformBlockIndex(vt,U.name),xt.set(U,Yt))}function Ht(U,vt){const Yt=y.get(vt).get(U);g.get(vt)!==Yt&&(o.uniformBlockBinding(vt,Yt,U.__bindingPointIndex),g.set(vt,Yt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Z=null,ft={},M={},b=new WeakMap,R=[],v=null,_=!1,P=null,L=null,B=null,k=null,V=null,F=null,pt=null,I=new Ne(0,0,0),E=0,N=!1,ht=null,Et=null,Y=null,nt=null,H=null,ct.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:zt,disable:_t,bindFramebuffer:Ut,drawBuffers:G,useProgram:Jt,setBlending:yt,setMaterial:ye,setFlipSided:qt,setCullFace:w,setLineWidth:T,setPolygonOffset:J,setScissorTest:ut,activeTexture:bt,bindTexture:ot,unbindTexture:Ft,compressedTexImage2D:At,compressedTexImage3D:kt,texImage2D:Wt,texImage3D:Vt,updateUBOMapping:Nt,uniformBlockBinding:Ht,texStorage2D:_e,texStorage3D:oe,texSubImage2D:$t,texSubImage3D:de,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Le,scissor:le,viewport:O,reset:ie}}function jb(o,e,i,r,l,u,d){const h=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,T){return M?new OffscreenCanvas(w,T):xc("canvas")}function R(w,T,J,ut){let bt=1;if((w.width>ut||w.height>ut)&&(bt=ut/Math.max(w.width,w.height)),bt<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ot=T?Sc:Math.floor,Ft=ot(bt*w.width),At=ot(bt*w.height);y===void 0&&(y=b(Ft,At));const kt=J?b(Ft,At):y;return kt.width=Ft,kt.height=At,kt.getContext("2d").drawImage(w,0,0,Ft,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ft+"x"+At+")."),kt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return Eh(w.width)&&Eh(w.height)}function _(w){return h?!1:w.wrapS!==Mi||w.wrapT!==Mi||w.minFilter!==Fn&&w.minFilter!==Vn}function P(w,T){return w.generateMipmaps&&T&&w.minFilter!==Fn&&w.minFilter!==Vn}function L(w){o.generateMipmap(w)}function B(w,T,J,ut,bt=!1){if(h===!1)return T;if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot=T;if(T===o.RED&&(J===o.FLOAT&&(ot=o.R32F),J===o.HALF_FLOAT&&(ot=o.R16F),J===o.UNSIGNED_BYTE&&(ot=o.R8)),T===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ot=o.R8UI),J===o.UNSIGNED_SHORT&&(ot=o.R16UI),J===o.UNSIGNED_INT&&(ot=o.R32UI),J===o.BYTE&&(ot=o.R8I),J===o.SHORT&&(ot=o.R16I),J===o.INT&&(ot=o.R32I)),T===o.RG&&(J===o.FLOAT&&(ot=o.RG32F),J===o.HALF_FLOAT&&(ot=o.RG16F),J===o.UNSIGNED_BYTE&&(ot=o.RG8)),T===o.RGBA){const Ft=bt?gc:Ve.getTransfer(ut);J===o.FLOAT&&(ot=o.RGBA32F),J===o.HALF_FLOAT&&(ot=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ot=Ft===Ze?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function k(w,T,J){return P(w,J)===!0||w.isFramebufferTexture&&w.minFilter!==Fn&&w.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function V(w){return w===Fn||w===gg||w===Do?o.NEAREST:o.LINEAR}function F(w){const T=w.target;T.removeEventListener("dispose",F),I(T),T.isVideoTexture&&g.delete(T)}function pt(w){const T=w.target;T.removeEventListener("dispose",pt),N(T)}function I(w){const T=r.get(w);if(T.__webglInit===void 0)return;const J=w.source,ut=x.get(J);if(ut){const bt=ut[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&E(w),Object.keys(ut).length===0&&x.delete(J)}r.remove(w)}function E(w){const T=r.get(w);o.deleteTexture(T.__webglTexture);const J=w.source,ut=x.get(J);delete ut[T.__cacheKey],d.memory.textures--}function N(w){const T=w.texture,J=r.get(w),ut=r.get(T);if(ut.__webglTexture!==void 0&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(J.__webglFramebuffer[bt]))for(let ot=0;ot<J.__webglFramebuffer[bt].length;ot++)o.deleteFramebuffer(J.__webglFramebuffer[bt][ot]);else o.deleteFramebuffer(J.__webglFramebuffer[bt]);J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer[bt])}else{if(Array.isArray(J.__webglFramebuffer))for(let bt=0;bt<J.__webglFramebuffer.length;bt++)o.deleteFramebuffer(J.__webglFramebuffer[bt]);else o.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&o.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let bt=0;bt<J.__webglColorRenderbuffer.length;bt++)J.__webglColorRenderbuffer[bt]&&o.deleteRenderbuffer(J.__webglColorRenderbuffer[bt]);J.__webglDepthRenderbuffer&&o.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let bt=0,ot=T.length;bt<ot;bt++){const Ft=r.get(T[bt]);Ft.__webglTexture&&(o.deleteTexture(Ft.__webglTexture),d.memory.textures--),r.remove(T[bt])}r.remove(T),r.remove(w)}let ht=0;function Et(){ht=0}function Y(){const w=ht;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),ht+=1,w}function nt(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function H(w,T){const J=r.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){const ut=w.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(J,w,T);return}}i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+T)}function it(w,T){const J=r.get(w);if(w.version>0&&J.__version!==w.version){ct(J,w,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+T)}function $(w,T){const J=r.get(w);if(w.version>0&&J.__version!==w.version){ct(J,w,T);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+T)}function lt(w,T){const J=r.get(w);if(w.version>0&&J.__version!==w.version){Mt(J,w,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+T)}const C={[Sh]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[xh]:o.MIRRORED_REPEAT},Z={[Fn]:o.NEAREST,[gg]:o.NEAREST_MIPMAP_NEAREST,[Do]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},ft={[CS]:o.NEVER,[PS]:o.ALWAYS,[DS]:o.LESS,[n0]:o.LEQUAL,[LS]:o.EQUAL,[OS]:o.GEQUAL,[US]:o.GREATER,[NS]:o.NOTEQUAL};function Tt(w,T,J){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===Bf||T.magFilter===Do||T.magFilter===_r||T.minFilter===Vn||T.minFilter===Bf||T.minFilter===Do||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),J?(o.texParameteri(w,o.TEXTURE_WRAP_S,C[T.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,C[T.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,C[T.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,Z[T.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,Z[T.minFilter])):(o.texParameteri(w,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(w,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==Mi||T.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(w,o.TEXTURE_MAG_FILTER,V(T.magFilter)),o.texParameteri(w,o.TEXTURE_MIN_FILTER,V(T.minFilter)),T.minFilter!==Fn&&T.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,ft[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ut=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Fn||T.minFilter!==Do&&T.minFilter!==_r||T.type===na&&e.has("OES_texture_float_linear")===!1||h===!1&&T.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(o.texParameterf(w,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function W(w,T){let J=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",F));const ut=T.source;let bt=x.get(ut);bt===void 0&&(bt={},x.set(ut,bt));const ot=nt(T);if(ot!==w.__cacheKey){bt[ot]===void 0&&(bt[ot]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),bt[ot].usedTimes++;const Ft=bt[w.__cacheKey];Ft!==void 0&&(bt[w.__cacheKey].usedTimes--,Ft.usedTimes===0&&E(T)),w.__cacheKey=ot,w.__webglTexture=bt[ot].texture}return J}function ct(w,T,J){let ut=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=o.TEXTURE_3D);const bt=W(w,T),ot=T.source;i.bindTexture(ut,w.__webglTexture,o.TEXTURE0+J);const Ft=r.get(ot);if(ot.version!==Ft.__version||bt===!0){i.activeTexture(o.TEXTURE0+J);const At=Ve.getPrimaries(Ve.workingColorSpace),kt=T.colorSpace===di?null:Ve.getPrimaries(T.colorSpace),$t=T.colorSpace===di||At===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const de=_(T)&&v(T.image)===!1;let Rt=R(T.image,de,!1,l.maxTextureSize);Rt=qt(T,Rt);const Le=v(Rt)||h,_e=u.convert(T.format,T.colorSpace);let oe=u.convert(T.type),Wt=B(T.internalFormat,_e,oe,T.colorSpace,T.isVideoTexture);Tt(ut,T,Le);let Vt;const le=T.mipmaps,O=h&&T.isVideoTexture!==!0&&Wt!==$_,Nt=Ft.__version===void 0||bt===!0,Ht=ot.dataReady,ie=k(T,Rt,Le);if(T.isDepthTexture)Wt=o.DEPTH_COMPONENT,h?T.type===na?Wt=o.DEPTH_COMPONENT32F:T.type===Fa?Wt=o.DEPTH_COMPONENT24:T.type===vr?Wt=o.DEPTH24_STENCIL8:Wt=o.DEPTH_COMPONENT16:T.type===na&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===yr&&Wt===o.DEPTH_COMPONENT&&T.type!==Ch&&T.type!==Fa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Fa,oe=u.convert(T.type)),T.format===Rs&&Wt===o.DEPTH_COMPONENT&&(Wt=o.DEPTH_STENCIL,T.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=vr,oe=u.convert(T.type))),Nt&&(O?i.texStorage2D(o.TEXTURE_2D,1,Wt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,Rt.width,Rt.height,0,_e,oe,null));else if(T.isDataTexture)if(le.length>0&&Le){O&&Nt&&i.texStorage2D(o.TEXTURE_2D,ie,Wt,le[0].width,le[0].height);for(let U=0,vt=le.length;U<vt;U++)Vt=le[U],O?Ht&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Vt.width,Vt.height,_e,oe,Vt.data):i.texImage2D(o.TEXTURE_2D,U,Wt,Vt.width,Vt.height,0,_e,oe,Vt.data);T.generateMipmaps=!1}else O?(Nt&&i.texStorage2D(o.TEXTURE_2D,ie,Wt,Rt.width,Rt.height),Ht&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt.width,Rt.height,_e,oe,Rt.data)):i.texImage2D(o.TEXTURE_2D,0,Wt,Rt.width,Rt.height,0,_e,oe,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ie,Wt,le[0].width,le[0].height,Rt.depth);for(let U=0,vt=le.length;U<vt;U++)Vt=le[U],T.format!==Ei?_e!==null?O?Ht&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Vt.width,Vt.height,Rt.depth,_e,Vt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,Wt,Vt.width,Vt.height,Rt.depth,0,Vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ht&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Vt.width,Vt.height,Rt.depth,_e,oe,Vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,Wt,Vt.width,Vt.height,Rt.depth,0,_e,oe,Vt.data)}else{O&&Nt&&i.texStorage2D(o.TEXTURE_2D,ie,Wt,le[0].width,le[0].height);for(let U=0,vt=le.length;U<vt;U++)Vt=le[U],T.format!==Ei?_e!==null?O?Ht&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,Vt.width,Vt.height,_e,Vt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,Wt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ht&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Vt.width,Vt.height,_e,oe,Vt.data):i.texImage2D(o.TEXTURE_2D,U,Wt,Vt.width,Vt.height,0,_e,oe,Vt.data)}else if(T.isDataArrayTexture)O?(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ie,Wt,Rt.width,Rt.height,Rt.depth),Ht&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,_e,oe,Rt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,Rt.width,Rt.height,Rt.depth,0,_e,oe,Rt.data);else if(T.isData3DTexture)O?(Nt&&i.texStorage3D(o.TEXTURE_3D,ie,Wt,Rt.width,Rt.height,Rt.depth),Ht&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,_e,oe,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,Rt.width,Rt.height,Rt.depth,0,_e,oe,Rt.data);else if(T.isFramebufferTexture){if(Nt)if(O)i.texStorage2D(o.TEXTURE_2D,ie,Wt,Rt.width,Rt.height);else{let U=Rt.width,vt=Rt.height;for(let xt=0;xt<ie;xt++)i.texImage2D(o.TEXTURE_2D,xt,Wt,U,vt,0,_e,oe,null),U>>=1,vt>>=1}}else if(le.length>0&&Le){O&&Nt&&i.texStorage2D(o.TEXTURE_2D,ie,Wt,le[0].width,le[0].height);for(let U=0,vt=le.length;U<vt;U++)Vt=le[U],O?Ht&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,_e,oe,Vt):i.texImage2D(o.TEXTURE_2D,U,Wt,_e,oe,Vt);T.generateMipmaps=!1}else O?(Nt&&i.texStorage2D(o.TEXTURE_2D,ie,Wt,Rt.width,Rt.height),Ht&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,_e,oe,Rt)):i.texImage2D(o.TEXTURE_2D,0,Wt,_e,oe,Rt);P(T,Le)&&L(ut),Ft.__version=ot.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Mt(w,T,J){if(T.image.length!==6)return;const ut=W(w,T),bt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+J);const ot=r.get(bt);if(bt.version!==ot.__version||ut===!0){i.activeTexture(o.TEXTURE0+J);const Ft=Ve.getPrimaries(Ve.workingColorSpace),At=T.colorSpace===di?null:Ve.getPrimaries(T.colorSpace),kt=T.colorSpace===di||Ft===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const $t=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let U=0;U<6;U++)!$t&&!de?Rt[U]=R(T.image[U],!1,!0,l.maxCubemapSize):Rt[U]=de?T.image[U].image:T.image[U],Rt[U]=qt(T,Rt[U]);const Le=Rt[0],_e=v(Le)||h,oe=u.convert(T.format,T.colorSpace),Wt=u.convert(T.type),Vt=B(T.internalFormat,oe,Wt,T.colorSpace),le=h&&T.isVideoTexture!==!0,O=ot.__version===void 0||ut===!0,Nt=bt.dataReady;let Ht=k(T,Le,_e);Tt(o.TEXTURE_CUBE_MAP,T,_e);let ie;if($t){le&&O&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,Vt,Le.width,Le.height);for(let U=0;U<6;U++){ie=Rt[U].mipmaps;for(let vt=0;vt<ie.length;vt++){const xt=ie[vt];T.format!==Ei?oe!==null?le?Nt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt,0,0,xt.width,xt.height,oe,xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt,Vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt,0,0,xt.width,xt.height,oe,Wt,xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt,Vt,xt.width,xt.height,0,oe,Wt,xt.data)}}}else{ie=T.mipmaps,le&&O&&(ie.length>0&&Ht++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,Vt,Rt[0].width,Rt[0].height));for(let U=0;U<6;U++)if(de){le?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Rt[U].width,Rt[U].height,oe,Wt,Rt[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Vt,Rt[U].width,Rt[U].height,0,oe,Wt,Rt[U].data);for(let vt=0;vt<ie.length;vt++){const Yt=ie[vt].image[U].image;le?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt+1,0,0,Yt.width,Yt.height,oe,Wt,Yt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt+1,Vt,Yt.width,Yt.height,0,oe,Wt,Yt.data)}}else{le?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,oe,Wt,Rt[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Vt,oe,Wt,Rt[U]);for(let vt=0;vt<ie.length;vt++){const xt=ie[vt];le?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt+1,0,0,oe,Wt,xt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt+1,Vt,oe,Wt,xt.image[U])}}}P(T,_e)&&L(o.TEXTURE_CUBE_MAP),ot.__version=bt.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Xt(w,T,J,ut,bt,ot){const Ft=u.convert(J.format,J.colorSpace),At=u.convert(J.type),kt=B(J.internalFormat,Ft,At,J.colorSpace);if(!r.get(T).__hasExternalTextures){const de=Math.max(1,T.width>>ot),Rt=Math.max(1,T.height>>ot);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,ot,kt,de,Rt,T.depth,0,Ft,At,null):i.texImage2D(bt,ot,kt,de,Rt,0,Ft,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),yt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,bt,r.get(J).__webglTexture,0,Zt(T)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,bt,r.get(J).__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(w,T,J){if(o.bindRenderbuffer(o.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let ut=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(J||yt(T)){const bt=T.depthTexture;bt&&bt.isDepthTexture&&(bt.type===na?ut=o.DEPTH_COMPONENT32F:bt.type===Fa&&(ut=o.DEPTH_COMPONENT24));const ot=Zt(T);yt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ot,ut,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,ut,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,ut,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const ut=Zt(T);J&&yt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,o.DEPTH24_STENCIL8,T.width,T.height):yt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,w)}else{const ut=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let bt=0;bt<ut.length;bt++){const ot=ut[bt],Ft=u.convert(ot.format,ot.colorSpace),At=u.convert(ot.type),kt=B(ot.internalFormat,Ft,At,ot.colorSpace),$t=Zt(T);J&&yt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,kt,T.width,T.height):yt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$t,kt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,kt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ut=r.get(T.depthTexture).__webglTexture,bt=Zt(T);if(T.depthTexture.format===yr)yt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ut,0,bt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ut,0);else if(T.depthTexture.format===Rs)yt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ut,0,bt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function _t(w){const T=r.get(w),J=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,w)}else if(J){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]=o.createRenderbuffer(),Bt(T.__webglDepthbuffer[ut],w,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Bt(T.__webglDepthbuffer,w,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(w,T,J){const ut=r.get(w);T!==void 0&&Xt(ut.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&_t(w)}function G(w){const T=w.texture,J=r.get(w),ut=r.get(T);w.addEventListener("dispose",pt),w.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=T.version,d.memory.textures++);const bt=w.isWebGLCubeRenderTarget===!0,ot=w.isWebGLMultipleRenderTargets===!0,Ft=v(w)||h;if(bt){J.__webglFramebuffer=[];for(let At=0;At<6;At++)if(h&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[At]=[];for(let kt=0;kt<T.mipmaps.length;kt++)J.__webglFramebuffer[At][kt]=o.createFramebuffer()}else J.__webglFramebuffer[At]=o.createFramebuffer()}else{if(h&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)J.__webglFramebuffer[At]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(ot)if(l.drawBuffers){const At=w.texture;for(let kt=0,$t=At.length;kt<$t;kt++){const de=r.get(At[kt]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&w.samples>0&&yt(w)===!1){const At=ot?T:[T];J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let kt=0;kt<At.length;kt++){const $t=At[kt];J.__webglColorRenderbuffer[kt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[kt]);const de=u.convert($t.format,$t.colorSpace),Rt=u.convert($t.type),Le=B($t.internalFormat,de,Rt,$t.colorSpace,w.isXRRenderTarget===!0),_e=Zt(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Le,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,J.__webglColorRenderbuffer[kt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(J.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(bt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),Tt(o.TEXTURE_CUBE_MAP,T,Ft);for(let At=0;At<6;At++)if(h&&T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Xt(J.__webglFramebuffer[At][kt],w,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else Xt(J.__webglFramebuffer[At],w,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);P(T,Ft)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ot){const At=w.texture;for(let kt=0,$t=At.length;kt<$t;kt++){const de=At[kt],Rt=r.get(de);i.bindTexture(o.TEXTURE_2D,Rt.__webglTexture),Tt(o.TEXTURE_2D,de,Ft),Xt(J.__webglFramebuffer,w,de,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,0),P(de,Ft)&&L(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(h?At=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(At,ut.__webglTexture),Tt(At,T,Ft),h&&T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Xt(J.__webglFramebuffer[kt],w,T,o.COLOR_ATTACHMENT0,At,kt);else Xt(J.__webglFramebuffer,w,T,o.COLOR_ATTACHMENT0,At,0);P(T,Ft)&&L(At),i.unbindTexture()}w.depthBuffer&&_t(w)}function Jt(w){const T=v(w)||h,J=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ut=0,bt=J.length;ut<bt;ut++){const ot=J[ut];if(P(ot,T)){const Ft=w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,At=r.get(ot).__webglTexture;i.bindTexture(Ft,At),L(Ft),i.unbindTexture()}}}function jt(w){if(h&&w.samples>0&&yt(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],J=w.width,ut=w.height;let bt=o.COLOR_BUFFER_BIT;const ot=[],Ft=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=r.get(w),kt=w.isWebGLMultipleRenderTargets===!0;if(kt)for(let $t=0;$t<T.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let $t=0;$t<T.length;$t++){ot.push(o.COLOR_ATTACHMENT0+$t),w.depthBuffer&&ot.push(Ft);const de=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(de===!1&&(w.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),kt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[$t]),de===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ft]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ft])),kt){const Rt=r.get(T[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,J,ut,0,0,J,ut,bt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ot)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),kt)for(let $t=0;$t<T.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,At.__webglColorRenderbuffer[$t]);const de=r.get(T[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,de,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function Zt(w){return Math.min(l.maxSamples,w.samples)}function yt(w){const T=r.get(w);return h&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ye(w){const T=d.render.frame;g.get(w)!==T&&(g.set(w,T),w.update())}function qt(w,T){const J=w.colorSpace,ut=w.format,bt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Mh||J!==aa&&J!==di&&(Ve.getTransfer(J)===Ze?h===!1?e.has("EXT_sRGB")===!0&&ut===Ei?(w.format=Mh,w.minFilter=Vn,w.generateMipmaps=!1):T=a0.sRGBToLinear(T):(ut!==Ei||bt!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}this.allocateTextureUnit=Y,this.resetTextureUnits=Et,this.setTexture2D=H,this.setTexture2DArray=it,this.setTexture3D=$,this.setTextureCube=lt,this.rebindTextures=Ut,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=yt}function Zb(o,e,i){const r=i.isWebGL2;function l(u,d=di){let h;const p=Ve.getTransfer(d);if(u===Ga)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vS)return o.BYTE;if(u===yS)return o.SHORT;if(u===Ch)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Fa)return o.UNSIGNED_INT;if(u===na)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===SS)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===xS)return o.LUMINANCE;if(u===MS)return o.LUMINANCE_ALPHA;if(u===yr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Mh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===ES)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===TS)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Ze)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Ff)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Ff)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===_g||u===vg||u===yg||u===Sg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===_g)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===vg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===yg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Sg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===xg||u===Mg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===xg)return p===Ze?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Mg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Eg||u===Tg||u===bg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Eg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Tg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===bg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Ag)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===wg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Rg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Cg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Dg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Lg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ug)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ng)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Og)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Pg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===zg)return p===Ze?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Bg||u===Fg)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Vf)return p===Ze?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Bg)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Fg)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===bS||u===Ig||u===Hg||u===Gg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Vf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===Ig)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Hg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Gg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Kb extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),M=.02,b=.005;m.inputState.pinching&&x>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ms;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Jb=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Wn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new ra({extensions:{fragDepth:!0},vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new $n(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,y=null,x=null,M=null,b=null;const R=new tA,v=i.getContextAttributes();let _=null,P=null;const L=[],B=[],k=new ge;let V=null;const F=new Jn;F.layers.enable(1),F.viewport=new Ke;const pt=new Jn;pt.layers.enable(2),pt.viewport=new Ke;const I=[F,pt],E=new Kb;E.layers.enable(1),E.layers.enable(2);let N=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ct=L[W];return ct===void 0&&(ct=new fh,L[W]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(W){let ct=L[W];return ct===void 0&&(ct=new fh,L[W]=ct),ct.getGripSpace()},this.getHand=function(W){let ct=L[W];return ct===void 0&&(ct=new fh,L[W]=ct),ct.getHandSpace()};function Et(W){const ct=B.indexOf(W.inputSource);if(ct===-1)return;const Mt=L[ct];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,m||d),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){l.removeEventListener("select",Et),l.removeEventListener("selectstart",Et),l.removeEventListener("selectend",Et),l.removeEventListener("squeeze",Et),l.removeEventListener("squeezestart",Et),l.removeEventListener("squeezeend",Et),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",nt);for(let W=0;W<L.length;W++){const ct=B[W];ct!==null&&(B[W]=null,L[W].disconnect(ct))}N=null,ht=null,R.reset(),e.setRenderTarget(_),M=null,x=null,y=null,l=null,P=null,Tt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",Et),l.addEventListener("selectstart",Et),l.addEventListener("selectend",Et),l.addEventListener("squeeze",Et),l.addEventListener("squeezestart",Et),l.addEventListener("squeezeend",Et),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(k),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ct={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new xr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Ga,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ct=null,Mt=null,Xt=null;v.depth&&(Xt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=v.stencil?Rs:yr,Mt=v.stencil?vr:Fa);const Bt={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(Bt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new xr(x.textureWidth,x.textureHeight,{format:Ei,type:Ga,depthTexture:new _0(x.textureWidth,x.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const zt=e.properties.get(P);zt.__ignoreDepthValues=x.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Tt.setContext(l),Tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function nt(W){for(let ct=0;ct<W.removed.length;ct++){const Mt=W.removed[ct],Xt=B.indexOf(Mt);Xt>=0&&(B[Xt]=null,L[Xt].disconnect(Mt))}for(let ct=0;ct<W.added.length;ct++){const Mt=W.added[ct];let Xt=B.indexOf(Mt);if(Xt===-1){for(let zt=0;zt<L.length;zt++)if(zt>=B.length){B.push(Mt),Xt=zt;break}else if(B[zt]===null){B[zt]=Mt,Xt=zt;break}if(Xt===-1)break}const Bt=L[Xt];Bt&&Bt.connect(Mt)}}const H=new q,it=new q;function $(W,ct,Mt){H.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);const Xt=H.distanceTo(it),Bt=ct.projectionMatrix.elements,zt=Mt.projectionMatrix.elements,_t=Bt[14]/(Bt[10]-1),Ut=Bt[14]/(Bt[10]+1),G=(Bt[9]+1)/Bt[5],Jt=(Bt[9]-1)/Bt[5],jt=(Bt[8]-1)/Bt[0],Zt=(zt[8]+1)/zt[0],yt=_t*jt,ye=_t*Zt,qt=Xt/(-jt+Zt),w=qt*-jt;ct.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(w),W.translateZ(qt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=_t+qt,J=Ut+qt,ut=yt-w,bt=ye+(Xt-w),ot=G*Ut/J*T,Ft=Jt*Ut/J*T;W.projectionMatrix.makePerspective(ut,bt,ot,Ft,T,J),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function lt(W,ct){ct===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ct.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;R.texture!==null&&(W.near=R.depthNear,W.far=R.depthFar),E.near=pt.near=F.near=W.near,E.far=pt.far=F.far=W.far,(N!==E.near||ht!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,ht=E.far,F.near=N,F.far=ht,pt.near=N,pt.far=ht,F.updateProjectionMatrix(),pt.updateProjectionMatrix(),W.updateProjectionMatrix());const ct=W.parent,Mt=E.cameras;lt(E,ct);for(let Xt=0;Xt<Mt.length;Xt++)lt(Mt[Xt],ct);Mt.length===2?$(E,F,pt):E.projectionMatrix.copy(F.projectionMatrix),C(W,E,ct)};function C(W,ct,Mt){Mt===null?W.matrix.copy(ct.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ct.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ct.projectionMatrix),W.projectionMatrixInverse.copy(ct.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Io*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(W){p=W,x!==null&&(x.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return R.texture!==null};let Z=null;function ft(W,ct){if(g=ct.getViewerPose(m||d),b=ct,g!==null){const Mt=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Xt=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,Xt=!0);for(let zt=0;zt<Mt.length;zt++){const _t=Mt[zt];let Ut=null;if(M!==null)Ut=M.getViewport(_t);else{const Jt=y.getViewSubImage(x,_t);Ut=Jt.viewport,zt===0&&(e.setRenderTargetTextures(P,Jt.colorTexture,x.ignoreDepthValues?void 0:Jt.depthStencilTexture),e.setRenderTarget(P))}let G=I[zt];G===void 0&&(G=new Jn,G.layers.enable(zt),G.viewport=new Ke,I[zt]=G),G.matrix.fromArray(_t.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(_t.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),zt===0&&(E.matrix.copy(G.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Xt===!0&&E.cameras.push(G)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const zt=y.getDepthInformation(Mt[0]);zt&&zt.isValid&&zt.texture&&R.init(e,zt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const Xt=B[Mt],Bt=L[Mt];Xt!==null&&Bt!==void 0&&Bt.update(Xt,ct,m||d)}R.render(e,E),Z&&Z(W,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),b=null}const Tt=new m0;Tt.setAnimationLoop(ft),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,h0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,P,L,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),x(v,_),_.isMeshPhysicalMaterial&&M(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),b(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&h(v,_)):_.isPointsMaterial?p(v,_,P,L):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===kn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===kn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(v.envMap.value=P,v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const L=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*L,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function h(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,P,L){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=L*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,P){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const P=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(P,L){const B=L.program;r.uniformBlockBinding(P,B)}function m(P,L){let B=l[P.id];B===void 0&&(b(P),B=g(P),l[P.id]=B,P.addEventListener("dispose",v));const k=L.program;r.updateUBOMapping(P,k);const V=e.render.frame;u[P.id]!==V&&(x(P),u[P.id]=V)}function g(P){const L=y();P.__bindingPointIndex=L;const B=o.createBuffer(),k=P.__size,V=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,k,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,B),B}function y(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const L=l[P.id],B=P.uniforms,k=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let V=0,F=B.length;V<F;V++){const pt=Array.isArray(B[V])?B[V]:[B[V]];for(let I=0,E=pt.length;I<E;I++){const N=pt[I];if(M(N,V,I,k)===!0){const ht=N.__offset,Et=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let nt=0;nt<Et.length;nt++){const H=Et[nt],it=R(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,ht+Y,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,Y),Y+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ht,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,L,B,k){const V=P.value,F=L+"_"+B;if(k[F]===void 0)return typeof V=="number"||typeof V=="boolean"?k[F]=V:k[F]=V.clone(),!0;{const pt=k[F];if(typeof V=="number"||typeof V=="boolean"){if(pt!==V)return k[F]=V,!0}else if(pt.equals(V)===!1)return pt.copy(V),!0}return!1}function b(P){const L=P.uniforms;let B=0;const k=16;for(let F=0,pt=L.length;F<pt;F++){const I=Array.isArray(L[F])?L[F]:[L[F]];for(let E=0,N=I.length;E<N;E++){const ht=I[E],Et=Array.isArray(ht.value)?ht.value:[ht.value];for(let Y=0,nt=Et.length;Y<nt;Y++){const H=Et[Y],it=R(H),$=B%k;$!==0&&k-$<it.boundary&&(B+=k-$),ht.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=B,B+=it.storage}}}const V=B%k;return V>0&&(B+=k-V),P.__size=B,P.__cache={},this}function R(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function v(P){const L=P.target;L.removeEventListener("dispose",v);const B=d.indexOf(L.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=d;const M=new Uint32Array(4),b=new Int32Array(4);let R=null,v=null;const _=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const L=this;let B=!1,k=0,V=0,F=null,pt=-1,I=null;const E=new Ke,N=new Ke;let ht=null;const Et=new Ne(0);let Y=0,nt=i.width,H=i.height,it=1,$=null,lt=null;const C=new Ke(0,0,nt,H),Z=new Ke(0,0,nt,H);let ft=!1;const Tt=new Nh;let W=!1,ct=!1,Mt=null;const Xt=new on,Bt=new ge,zt=new q,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return F===null?it:1}let G=r;function Jt(D,Q){for(let rt=0;rt<D.length;rt++){const st=D[rt],et=i.getContext(st,Q);if(et!==null)return et}return null}try{const D={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",ie,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",vt,!1),G===null){const Q=["webgl2","webgl","experimental-webgl"];if(L.isWebGL1Renderer===!0&&Q.shift(),G=Jt(Q,D),G===null)throw Jt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let jt,Zt,yt,ye,qt,w,T,J,ut,bt,ot,Ft,At,kt,$t,de,Rt,Le,_e,oe,Wt,Vt,le,O;function Nt(){jt=new uT(G),Zt=new aT(G,jt,e),jt.init(Zt),Vt=new Zb(G,jt,Zt),yt=new Yb(G,jt,Zt),ye=new dT(G),qt=new Nb,w=new jb(G,jt,yt,qt,Zt,Vt,ye),T=new sT(L),J=new cT(L),ut=new xx(G,Zt),le=new nT(G,jt,ut,Zt),bt=new fT(G,ut,ye,le),ot=new _T(G,bt,ut,ye),_e=new gT(G,Zt,w),de=new rT(qt),Ft=new Ub(L,T,J,jt,Zt,le,de),At=new nA(L,qt),kt=new Pb,$t=new Gb(jt,Zt),Le=new eT(L,T,J,yt,ot,x,p),Rt=new qb(L,ot,Zt),O=new iA(G,ye,Zt,yt),oe=new iT(G,jt,ye,Zt),Wt=new hT(G,jt,ye,Zt),ye.programs=Ft.programs,L.capabilities=Zt,L.extensions=jt,L.properties=qt,L.renderLists=kt,L.shadowMap=Rt,L.state=yt,L.info=ye}Nt();const Ht=new eA(L,G);this.xr=Ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=jt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=jt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(D){D!==void 0&&(it=D,this.setSize(nt,H,!1))},this.getSize=function(D){return D.set(nt,H)},this.setSize=function(D,Q,rt=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=D,H=Q,i.width=Math.floor(D*it),i.height=Math.floor(Q*it),rt===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(nt*it,H*it).floor()},this.setDrawingBufferSize=function(D,Q,rt){nt=D,H=Q,it=rt,i.width=Math.floor(D*rt),i.height=Math.floor(Q*rt),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(C)},this.setViewport=function(D,Q,rt,st){D.isVector4?C.set(D.x,D.y,D.z,D.w):C.set(D,Q,rt,st),yt.viewport(E.copy(C).multiplyScalar(it).floor())},this.getScissor=function(D){return D.copy(Z)},this.setScissor=function(D,Q,rt,st){D.isVector4?Z.set(D.x,D.y,D.z,D.w):Z.set(D,Q,rt,st),yt.scissor(N.copy(Z).multiplyScalar(it).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(D){yt.setScissorTest(ft=D)},this.setOpaqueSort=function(D){$=D},this.setTransparentSort=function(D){lt=D},this.getClearColor=function(D){return D.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(D=!0,Q=!0,rt=!0){let st=0;if(D){let et=!1;if(F!==null){const Gt=F.texture.format;et=Gt===J_||Gt===Q_||Gt===K_}if(et){const Gt=F.texture.type,ne=Gt===Ga||Gt===Fa||Gt===Ch||Gt===vr||Gt===j_||Gt===Z_,ee=Le.getClearColor(),Kt=Le.getClearAlpha(),se=ee.r,me=ee.g,fe=ee.b;ne?(M[0]=se,M[1]=me,M[2]=fe,M[3]=Kt,G.clearBufferuiv(G.COLOR,0,M)):(b[0]=se,b[1]=me,b[2]=fe,b[3]=Kt,G.clearBufferiv(G.COLOR,0,b))}else st|=G.COLOR_BUFFER_BIT}Q&&(st|=G.DEPTH_BUFFER_BIT),rt&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ie,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),kt.dispose(),$t.dispose(),qt.dispose(),T.dispose(),J.dispose(),ot.dispose(),le.dispose(),O.dispose(),Ft.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ot),Ht.removeEventListener("sessionend",wt),Mt&&(Mt.dispose(),Mt=null),Lt.stop()};function ie(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const D=ye.autoReset,Q=Rt.enabled,rt=Rt.autoUpdate,st=Rt.needsUpdate,et=Rt.type;Nt(),ye.autoReset=D,Rt.enabled=Q,Rt.autoUpdate=rt,Rt.needsUpdate=st,Rt.type=et}function vt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function xt(D){const Q=D.target;Q.removeEventListener("dispose",xt),Yt(Q)}function Yt(D){te(D),qt.remove(D)}function te(D){const Q=qt.get(D).programs;Q!==void 0&&(Q.forEach(function(rt){Ft.releaseProgram(rt)}),D.isShaderMaterial&&Ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,rt,st,et,Gt){Q===null&&(Q=_t);const ne=et.isMesh&&et.matrixWorld.determinant()<0,ee=tn(D,Q,rt,st,et);yt.setMaterial(st,ne);let Kt=rt.index,se=1;if(st.wireframe===!0){if(Kt=bt.getWireframeAttribute(rt),Kt===void 0)return;se=2}const me=rt.drawRange,fe=rt.attributes.position;let Ie=me.start*se,Qe=(me.start+me.count)*se;Gt!==null&&(Ie=Math.max(Ie,Gt.start*se),Qe=Math.min(Qe,(Gt.start+Gt.count)*se)),Kt!==null?(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Kt.count)):fe!=null&&(Ie=Math.max(Ie,0),Qe=Math.min(Qe,fe.count));const ln=Qe-Ie;if(ln<0||ln===1/0)return;le.setup(et,st,ee,rt,Kt);let ei,Xe=oe;if(Kt!==null&&(ei=ut.get(Kt),Xe=Wt,Xe.setIndex(ei)),et.isMesh)st.wireframe===!0?(yt.setLineWidth(st.wireframeLinewidth*Ut()),Xe.setMode(G.LINES)):Xe.setMode(G.TRIANGLES);else if(et.isLine){let Me=st.linewidth;Me===void 0&&(Me=1),yt.setLineWidth(Me*Ut()),et.isLineSegments?Xe.setMode(G.LINES):et.isLineLoop?Xe.setMode(G.LINE_LOOP):Xe.setMode(G.LINE_STRIP)}else et.isPoints?Xe.setMode(G.POINTS):et.isSprite&&Xe.setMode(G.TRIANGLES);if(et.isBatchedMesh)Xe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)Xe.renderInstances(Ie,ln,et.count);else if(rt.isInstancedBufferGeometry){const Me=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,oa=Math.min(rt.instanceCount,Me);Xe.renderInstances(Ie,ln,oa)}else Xe.render(Ie,ln)};function be(D,Q,rt){D.transparent===!0&&D.side===Li&&D.forceSinglePass===!1?(D.side=kn,D.needsUpdate=!0,ze(D,Q,rt),D.side=ka,D.needsUpdate=!0,ze(D,Q,rt),D.side=Li):ze(D,Q,rt)}this.compile=function(D,Q,rt=null){rt===null&&(rt=D),v=$t.get(rt),v.init(),P.push(v),rt.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),D!==rt&&D.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),v.setupLights(L._useLegacyLights);const st=new Set;return D.traverse(function(et){const Gt=et.material;if(Gt)if(Array.isArray(Gt))for(let ne=0;ne<Gt.length;ne++){const ee=Gt[ne];be(ee,rt,et),st.add(ee)}else be(Gt,rt,et),st.add(Gt)}),P.pop(),v=null,st},this.compileAsync=function(D,Q,rt=null){const st=this.compile(D,Q,rt);return new Promise(et=>{function Gt(){if(st.forEach(function(ne){qt.get(ne).currentProgram.isReady()&&st.delete(ne)}),st.size===0){et(D);return}setTimeout(Gt,10)}jt.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let mt=null;function Dt(D){mt&&mt(D)}function Ot(){Lt.stop()}function wt(){Lt.start()}const Lt=new m0;Lt.setAnimationLoop(Dt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(D){mt=D,Ht.setAnimationLoop(D),D===null?Lt.stop():Lt.start()},Ht.addEventListener("sessionstart",Ot),Ht.addEventListener("sessionend",wt),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(Q),Q=Ht.getCamera()),D.isScene===!0&&D.onBeforeRender(L,D,Q,F),v=$t.get(D,P.length),v.init(),P.push(v),Xt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Tt.setFromProjectionMatrix(Xt),ct=this.localClippingEnabled,W=de.init(this.clippingPlanes,ct),R=kt.get(D,_.length),R.init(),_.push(R),Pt(D,Q,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort($,lt),this.info.render.frame++,W===!0&&de.beginShadows();const rt=v.state.shadowsArray;if(Rt.render(rt,D,Q),W===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1)&&Le.render(R,D),v.setupLights(L._useLegacyLights),Q.isArrayCamera){const st=Q.cameras;for(let et=0,Gt=st.length;et<Gt;et++){const ne=st[et];ce(R,D,ne,ne.viewport)}}else ce(R,D,Q);F!==null&&(w.updateMultisampleRenderTarget(F),w.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(L,D,Q),le.resetDefaultState(),pt=-1,I=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Pt(D,Q,rt,st){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)rt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Tt.intersectsSprite(D)){st&&zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Xt);const ne=ot.update(D),ee=D.material;ee.visible&&R.push(D,ne,ee,rt,zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Tt.intersectsObject(D))){const ne=ot.update(D),ee=D.material;if(st&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),zt.copy(D.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),zt.copy(ne.boundingSphere.center)),zt.applyMatrix4(D.matrixWorld).applyMatrix4(Xt)),Array.isArray(ee)){const Kt=ne.groups;for(let se=0,me=Kt.length;se<me;se++){const fe=Kt[se],Ie=ee[fe.materialIndex];Ie&&Ie.visible&&R.push(D,ne,Ie,rt,zt.z,fe)}}else ee.visible&&R.push(D,ne,ee,rt,zt.z,null)}}const Gt=D.children;for(let ne=0,ee=Gt.length;ne<ee;ne++)Pt(Gt[ne],Q,rt,st)}function ce(D,Q,rt,st){const et=D.opaque,Gt=D.transmissive,ne=D.transparent;v.setupLightsView(rt),W===!0&&de.setGlobalState(L.clippingPlanes,rt),Gt.length>0&&he(et,Gt,Q,rt),st&&yt.viewport(E.copy(st)),et.length>0&&xe(et,Q,rt),Gt.length>0&&xe(Gt,Q,rt),ne.length>0&&xe(ne,Q,rt),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function he(D,Q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const Gt=Zt.isWebGL2;Mt===null&&(Mt=new xr(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")?Fo:Ga,minFilter:_r,samples:Gt?4:0})),L.getDrawingBufferSize(Bt),Gt?Mt.setSize(Bt.x,Bt.y):Mt.setSize(Sc(Bt.x),Sc(Bt.y));const ne=L.getRenderTarget();L.setRenderTarget(Mt),L.getClearColor(Et),Y=L.getClearAlpha(),Y<1&&L.setClearColor(16777215,.5),L.clear();const ee=L.toneMapping;L.toneMapping=Ha,xe(D,rt,st),w.updateMultisampleRenderTarget(Mt),w.updateRenderTargetMipmap(Mt);let Kt=!1;for(let se=0,me=Q.length;se<me;se++){const fe=Q[se],Ie=fe.object,Qe=fe.geometry,ln=fe.material,ei=fe.group;if(ln.side===Li&&Ie.layers.test(st.layers)){const Xe=ln.side;ln.side=kn,ln.needsUpdate=!0,pe(Ie,rt,st,Qe,ln,ei),ln.side=Xe,ln.needsUpdate=!0,Kt=!0}}Kt===!0&&(w.updateMultisampleRenderTarget(Mt),w.updateRenderTargetMipmap(Mt)),L.setRenderTarget(ne),L.setClearColor(Et,Y),L.toneMapping=ee}function xe(D,Q,rt){const st=Q.isScene===!0?Q.overrideMaterial:null;for(let et=0,Gt=D.length;et<Gt;et++){const ne=D[et],ee=ne.object,Kt=ne.geometry,se=st===null?ne.material:st,me=ne.group;ee.layers.test(rt.layers)&&pe(ee,Q,rt,Kt,se,me)}}function pe(D,Q,rt,st,et,Gt){D.onBeforeRender(L,Q,rt,st,et,Gt),D.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),et.onBeforeRender(L,Q,rt,st,D,Gt),et.transparent===!0&&et.side===Li&&et.forceSinglePass===!1?(et.side=kn,et.needsUpdate=!0,L.renderBufferDirect(rt,Q,st,et,D,Gt),et.side=ka,et.needsUpdate=!0,L.renderBufferDirect(rt,Q,st,et,D,Gt),et.side=Li):L.renderBufferDirect(rt,Q,st,et,D,Gt),D.onAfterRender(L,Q,rt,st,et,Gt)}function ze(D,Q,rt){Q.isScene!==!0&&(Q=_t);const st=qt.get(D),et=v.state.lights,Gt=v.state.shadowsArray,ne=et.state.version,ee=Ft.getParameters(D,et.state,Gt,Q,rt),Kt=Ft.getProgramCacheKey(ee);let se=st.programs;st.environment=D.isMeshStandardMaterial?Q.environment:null,st.fog=Q.fog,st.envMap=(D.isMeshStandardMaterial?J:T).get(D.envMap||st.environment),se===void 0&&(D.addEventListener("dispose",xt),se=new Map,st.programs=se);let me=se.get(Kt);if(me!==void 0){if(st.currentProgram===me&&st.lightsStateVersion===ne)return Oe(D,ee),me}else ee.uniforms=Ft.getUniforms(D),D.onBuild(rt,ee,L),D.onBeforeCompile(ee,L),me=Ft.acquireProgram(ee,Kt),se.set(Kt,me),st.uniforms=ee.uniforms;const fe=st.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(fe.clippingPlanes=de.uniform),Oe(D,ee),st.needsLights=sa(D),st.lightsStateVersion=ne,st.needsLights&&(fe.ambientLightColor.value=et.state.ambient,fe.lightProbe.value=et.state.probe,fe.directionalLights.value=et.state.directional,fe.directionalLightShadows.value=et.state.directionalShadow,fe.spotLights.value=et.state.spot,fe.spotLightShadows.value=et.state.spotShadow,fe.rectAreaLights.value=et.state.rectArea,fe.ltc_1.value=et.state.rectAreaLTC1,fe.ltc_2.value=et.state.rectAreaLTC2,fe.pointLights.value=et.state.point,fe.pointLightShadows.value=et.state.pointShadow,fe.hemisphereLights.value=et.state.hemi,fe.directionalShadowMap.value=et.state.directionalShadowMap,fe.directionalShadowMatrix.value=et.state.directionalShadowMatrix,fe.spotShadowMap.value=et.state.spotShadowMap,fe.spotLightMatrix.value=et.state.spotLightMatrix,fe.spotLightMap.value=et.state.spotLightMap,fe.pointShadowMap.value=et.state.pointShadowMap,fe.pointShadowMatrix.value=et.state.pointShadowMatrix),st.currentProgram=me,st.uniformsList=null,me}function Ae(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=pc.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Oe(D,Q){const rt=qt.get(D);rt.outputColorSpace=Q.outputColorSpace,rt.batching=Q.batching,rt.instancing=Q.instancing,rt.instancingColor=Q.instancingColor,rt.skinning=Q.skinning,rt.morphTargets=Q.morphTargets,rt.morphNormals=Q.morphNormals,rt.morphColors=Q.morphColors,rt.morphTargetsCount=Q.morphTargetsCount,rt.numClippingPlanes=Q.numClippingPlanes,rt.numIntersection=Q.numClipIntersection,rt.vertexAlphas=Q.vertexAlphas,rt.vertexTangents=Q.vertexTangents,rt.toneMapping=Q.toneMapping}function tn(D,Q,rt,st,et){Q.isScene!==!0&&(Q=_t),w.resetTextureUnits();const Gt=Q.fog,ne=st.isMeshStandardMaterial?Q.environment:null,ee=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:aa,Kt=(st.isMeshStandardMaterial?J:T).get(st.envMap||ne),se=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,me=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),fe=!!rt.morphAttributes.position,Ie=!!rt.morphAttributes.normal,Qe=!!rt.morphAttributes.color;let ln=Ha;st.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ln=L.toneMapping);const ei=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Xe=ei!==void 0?ei.length:0,Me=qt.get(st),oa=v.state.lights;if(W===!0&&(ct===!0||D!==I)){const In=D===I&&st.id===pt;de.setState(st,D,In)}let ke=!1;st.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==oa.state.version||Me.outputColorSpace!==ee||et.isBatchedMesh&&Me.batching===!1||!et.isBatchedMesh&&Me.batching===!0||et.isInstancedMesh&&Me.instancing===!1||!et.isInstancedMesh&&Me.instancing===!0||et.isSkinnedMesh&&Me.skinning===!1||!et.isSkinnedMesh&&Me.skinning===!0||et.isInstancedMesh&&Me.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Me.instancingColor===!1&&et.instanceColor!==null||Me.envMap!==Kt||st.fog===!0&&Me.fog!==Gt||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==de.numPlanes||Me.numIntersection!==de.numIntersection)||Me.vertexAlphas!==se||Me.vertexTangents!==me||Me.morphTargets!==fe||Me.morphNormals!==Ie||Me.morphColors!==Qe||Me.toneMapping!==ln||Zt.isWebGL2===!0&&Me.morphTargetsCount!==Xe)&&(ke=!0):(ke=!0,Me.__version=st.version);let xn=Me.currentProgram;ke===!0&&(xn=ze(st,Q,et));let Nn=!1,la=!1,Ns=!1;const rn=xn.getUniforms(),Ti=Me.uniforms;if(yt.useProgram(xn.program)&&(Nn=!0,la=!0,Ns=!0),st.id!==pt&&(pt=st.id,la=!0),Nn||I!==D){rn.setValue(G,"projectionMatrix",D.projectionMatrix),rn.setValue(G,"viewMatrix",D.matrixWorldInverse);const In=rn.map.cameraPosition;In!==void 0&&In.setValue(G,zt.setFromMatrixPosition(D.matrixWorld)),Zt.logarithmicDepthBuffer&&rn.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&rn.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),I!==D&&(I=D,la=!0,Ns=!0)}if(et.isSkinnedMesh){rn.setOptional(G,et,"bindMatrix"),rn.setOptional(G,et,"bindMatrixInverse");const In=et.skeleton;In&&(Zt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),rn.setValue(G,"boneTexture",In.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(rn.setOptional(G,et,"batchingTexture"),rn.setValue(G,"batchingTexture",et._matricesTexture,w));const ca=rt.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Zt.isWebGL2===!0)&&_e.update(et,rt,xn),(la||Me.receiveShadow!==et.receiveShadow)&&(Me.receiveShadow=et.receiveShadow,rn.setValue(G,"receiveShadow",et.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ti.envMap.value=Kt,Ti.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),la&&(rn.setValue(G,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&ti(Ti,Ns),Gt&&st.fog===!0&&At.refreshFogUniforms(Ti,Gt),At.refreshMaterialUniforms(Ti,st,it,H,Mt),pc.upload(G,Ae(Me),Ti,w)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(pc.upload(G,Ae(Me),Ti,w),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&rn.setValue(G,"center",et.center),rn.setValue(G,"modelViewMatrix",et.modelViewMatrix),rn.setValue(G,"normalMatrix",et.normalMatrix),rn.setValue(G,"modelMatrix",et.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const In=st.uniformsGroups;for(let wn=0,Os=In.length;wn<Os;wn++)if(Zt.isWebGL2){const Ps=In[wn];O.update(Ps,xn),O.bind(Ps,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function ti(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function sa(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,Q,rt){qt.get(D.texture).__webglTexture=Q,qt.get(D.depthTexture).__webglTexture=rt;const st=qt.get(D);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Q){const rt=qt.get(D);rt.__webglFramebuffer=Q,rt.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(D,Q=0,rt=0){F=D,k=Q,V=rt;let st=!0,et=null,Gt=!1,ne=!1;if(D){const Kt=qt.get(D);Kt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1):Kt.__webglFramebuffer===void 0?w.setupRenderTarget(D):Kt.__hasExternalTextures&&w.rebindTextures(D,qt.get(D.texture).__webglTexture,qt.get(D.depthTexture).__webglTexture);const se=D.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(ne=!0);const me=qt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(me[Q])?et=me[Q][rt]:et=me[Q],Gt=!0):Zt.isWebGL2&&D.samples>0&&w.useMultisampledRTT(D)===!1?et=qt.get(D).__webglMultisampledFramebuffer:Array.isArray(me)?et=me[rt]:et=me,E.copy(D.viewport),N.copy(D.scissor),ht=D.scissorTest}else E.copy(C).multiplyScalar(it).floor(),N.copy(Z).multiplyScalar(it).floor(),ht=ft;if(yt.bindFramebuffer(G.FRAMEBUFFER,et)&&Zt.drawBuffers&&st&&yt.drawBuffers(D,et),yt.viewport(E),yt.scissor(N),yt.setScissorTest(ht),Gt){const Kt=qt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Kt.__webglTexture,rt)}else if(ne){const Kt=qt.get(D.texture),se=Q||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Kt.__webglTexture,rt||0,se)}pt=-1},this.readRenderTargetPixels=function(D,Q,rt,st,et,Gt,ne){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ne!==void 0&&(ee=ee[ne]),ee){yt.bindFramebuffer(G.FRAMEBUFFER,ee);try{const Kt=D.texture,se=Kt.format,me=Kt.type;if(se!==Ei&&Vt.convert(se)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const fe=me===Fo&&(jt.has("EXT_color_buffer_half_float")||Zt.isWebGL2&&jt.has("EXT_color_buffer_float"));if(me!==Ga&&Vt.convert(me)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(me===na&&(Zt.isWebGL2||jt.has("OES_texture_float")||jt.has("WEBGL_color_buffer_float")))&&!fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-st&&rt>=0&&rt<=D.height-et&&G.readPixels(Q,rt,st,et,Vt.convert(se),Vt.convert(me),Gt)}finally{const Kt=F!==null?qt.get(F).__webglFramebuffer:null;yt.bindFramebuffer(G.FRAMEBUFFER,Kt)}}},this.copyFramebufferToTexture=function(D,Q,rt=0){const st=Math.pow(2,-rt),et=Math.floor(Q.image.width*st),Gt=Math.floor(Q.image.height*st);w.setTexture2D(Q,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,D.x,D.y,et,Gt),yt.unbindTexture()},this.copyTextureToTexture=function(D,Q,rt,st=0){const et=Q.image.width,Gt=Q.image.height,ne=Vt.convert(rt.format),ee=Vt.convert(rt.type);w.setTexture2D(rt,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,rt.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,rt.unpackAlignment),Q.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,st,D.x,D.y,et,Gt,ne,ee,Q.image.data):Q.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,st,D.x,D.y,Q.mipmaps[0].width,Q.mipmaps[0].height,ne,Q.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,st,D.x,D.y,ne,ee,Q.image),st===0&&rt.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,rt,st,et=0){if(L.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Gt=D.max.x-D.min.x+1,ne=D.max.y-D.min.y+1,ee=D.max.z-D.min.z+1,Kt=Vt.convert(st.format),se=Vt.convert(st.type);let me;if(st.isData3DTexture)w.setTexture3D(st,0),me=G.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)w.setTexture2DArray(st,0),me=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,st.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,st.unpackAlignment);const fe=G.getParameter(G.UNPACK_ROW_LENGTH),Ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qe=G.getParameter(G.UNPACK_SKIP_PIXELS),ln=G.getParameter(G.UNPACK_SKIP_ROWS),ei=G.getParameter(G.UNPACK_SKIP_IMAGES),Xe=rt.isCompressedTexture?rt.mipmaps[et]:rt.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,D.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,D.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,D.min.z),rt.isDataTexture||rt.isData3DTexture?G.texSubImage3D(me,et,Q.x,Q.y,Q.z,Gt,ne,ee,Kt,se,Xe.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(me,et,Q.x,Q.y,Q.z,Gt,ne,ee,Kt,Xe.data)):G.texSubImage3D(me,et,Q.x,Q.y,Q.z,Gt,ne,ee,Kt,se,Xe),G.pixelStorei(G.UNPACK_ROW_LENGTH,fe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,ln),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ei),et===0&&st.generateMipmaps&&G.generateMipmap(me),yt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?w.setTextureCube(D,0):D.isData3DTexture?w.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?w.setTexture2DArray(D,0):w.setTexture2D(D,0),yt.unbindTexture()},this.resetState=function(){k=0,V=0,F=null,yt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dh?"display-p3":"srgb",i.unpackColorSpace=Ve.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?Sr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?bn:aa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class T0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U_=new on,bh=new Uh,fc=new bc,hc=new q;class sA extends An{constructor(e=new Oi,i=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;U_.copy(l).invert(),bh.copy(e.ray).applyMatrix4(U_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let b=x,R=M;b<R;b++){const v=m.getX(b);hc.fromBufferAttribute(y,v),N_(hc,v,p,l,e,i,this)}}else{const x=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let b=x,R=M;b<R;b++)hc.fromBufferAttribute(y,b),N_(hc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function N_(o,e,i,r,l,u,d){const h=bh.distanceSqToPoint(o);if(h<i){const p=new q;bh.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class Mc extends Oi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const g=[],y=new q,x=new q,M=[],b=[],R=[],v=[];for(let _=0;_<=r;_++){const P=[],L=_/r;let B=0;_===0&&d===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let k=0;k<=i;k++){const V=k/i;y.x=-e*Math.cos(l+V*u)*Math.sin(d+L*h),y.y=e*Math.cos(d+L*h),y.z=e*Math.sin(l+V*u)*Math.sin(d+L*h),b.push(y.x,y.y,y.z),x.copy(y).normalize(),R.push(x.x,x.y,x.z),v.push(V+B,1-L),P.push(m++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const L=g[_][P+1],B=g[_][P],k=g[_+1][P],V=g[_+1][P+1];(_!==0||d>0)&&M.push(L,B,V),(_!==r-1||p<Math.PI)&&M.push(B,k,V)}this.setIndex(M),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ph extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const hh=new on,O_=new q,P_=new q;class b0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;O_.setFromMatrixPosition(e.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const z_=new on,Po=new q,dh=new q;class lA extends b0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),r.position.copy(Po),dh.copy(r.position),dh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(dh),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),z_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z_)}}class B_ extends Ph{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends b0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends Ph{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends Ph{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class H_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Un(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);const G_={type:"change"},ph={type:"start"},V_={type:"end"},dc=new Uh,k_=new Ba,uA=Math.cos(70*dr.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",$t),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$t),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(G_),r.update(),u=l.NONE},this.update=function(){const O=new q,Nt=new Mr().setFromUnitVectors(e.up,new q(0,1,0)),Ht=Nt.clone().invert(),ie=new q,U=new Mr,vt=new q,xt=2*Math.PI;return function(te=null){const be=r.object.position;O.copy(be).sub(r.target),O.applyQuaternion(Nt),h.setFromVector3(O),r.autoRotate&&u===l.NONE&&ht(E(te)),r.enableDamping?(h.theta+=p.theta*r.dampingFactor,h.phi+=p.phi*r.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let mt=r.minAzimuthAngle,Dt=r.maxAzimuthAngle;isFinite(mt)&&isFinite(Dt)&&(mt<-Math.PI?mt+=xt:mt>Math.PI&&(mt-=xt),Dt<-Math.PI?Dt+=xt:Dt>Math.PI&&(Dt-=xt),mt<=Dt?h.theta=Math.max(mt,Math.min(Dt,h.theta)):h.theta=h.theta>(mt+Dt)/2?Math.max(mt,h.theta):Math.min(Dt,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&V||r.object.isOrthographicCamera?h.radius=C(h.radius):h.radius=C(h.radius*m),O.setFromSpherical(h),O.applyQuaternion(Ht),be.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Ot=!1;if(r.zoomToCursor&&V){let wt=null;if(r.object.isPerspectiveCamera){const Lt=O.length();wt=C(Lt*m);const Pt=Lt-wt;r.object.position.addScaledVector(B,Pt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Lt=new q(k.x,k.y,0);Lt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Ot=!0;const Pt=new q(k.x,k.y,0);Pt.unproject(r.object),r.object.position.sub(Pt).add(Lt),r.object.updateMatrixWorld(),wt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(wt).add(r.object.position):(dc.origin.copy(r.object.position),dc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(dc.direction))<uA?e.lookAt(r.target):(k_.setFromNormalAndCoplanarPoint(r.object.up,r.target),dc.intersectPlane(k_,r.target))))}else r.object.isOrthographicCamera&&(Ot=m!==1,Ot&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,V=!1,Ot||ie.distanceToSquared(r.object.position)>d||8*(1-U.dot(r.object.quaternion))>d||vt.distanceToSquared(r.target)>0?(r.dispatchEvent(G_),ie.copy(r.object.position),U.copy(r.object.quaternion),vt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Le),r.domElement.removeEventListener("pointerdown",w),r.domElement.removeEventListener("pointercancel",J),r.domElement.removeEventListener("wheel",ot),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",J),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",$t),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new H_,p=new H_;let m=1;const g=new q,y=new ge,x=new ge,M=new ge,b=new ge,R=new ge,v=new ge,_=new ge,P=new ge,L=new ge,B=new q,k=new ge;let V=!1;const F=[],pt={};let I=!1;function E(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function N(O){const Nt=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*Nt)}function ht(O){p.theta-=O}function Et(O){p.phi-=O}const Y=function(){const O=new q;return function(Ht,ie){O.setFromMatrixColumn(ie,0),O.multiplyScalar(-Ht),g.add(O)}}(),nt=function(){const O=new q;return function(Ht,ie){r.screenSpacePanning===!0?O.setFromMatrixColumn(ie,1):(O.setFromMatrixColumn(ie,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Ht),g.add(O)}}(),H=function(){const O=new q;return function(Ht,ie){const U=r.domElement;if(r.object.isPerspectiveCamera){const vt=r.object.position;O.copy(vt).sub(r.target);let xt=O.length();xt*=Math.tan(r.object.fov/2*Math.PI/180),Y(2*Ht*xt/U.clientHeight,r.object.matrix),nt(2*ie*xt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(Y(Ht*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),nt(ie*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function it(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function $(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function lt(O,Nt){if(!r.zoomToCursor)return;V=!0;const Ht=r.domElement.getBoundingClientRect(),ie=O-Ht.left,U=Nt-Ht.top,vt=Ht.width,xt=Ht.height;k.x=ie/vt*2-1,k.y=-(U/xt)*2+1,B.set(k.x,k.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function Z(O){y.set(O.clientX,O.clientY)}function ft(O){lt(O.clientX,O.clientX),_.set(O.clientX,O.clientY)}function Tt(O){b.set(O.clientX,O.clientY)}function W(O){x.set(O.clientX,O.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const Nt=r.domElement;ht(2*Math.PI*M.x/Nt.clientHeight),Et(2*Math.PI*M.y/Nt.clientHeight),y.copy(x),r.update()}function ct(O){P.set(O.clientX,O.clientY),L.subVectors(P,_),L.y>0?it(N(L.y)):L.y<0&&$(N(L.y)),_.copy(P),r.update()}function Mt(O){R.set(O.clientX,O.clientY),v.subVectors(R,b).multiplyScalar(r.panSpeed),H(v.x,v.y),b.copy(R),r.update()}function Xt(O){lt(O.clientX,O.clientY),O.deltaY<0?$(N(O.deltaY)):O.deltaY>0&&it(N(O.deltaY)),r.update()}function Bt(O){let Nt=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?Et(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(0,r.keyPanSpeed),Nt=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?Et(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(0,-r.keyPanSpeed),Nt=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?ht(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(r.keyPanSpeed,0),Nt=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?ht(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):H(-r.keyPanSpeed,0),Nt=!0;break}Nt&&(O.preventDefault(),r.update())}function zt(O){if(F.length===1)y.set(O.pageX,O.pageY);else{const Nt=Vt(O),Ht=.5*(O.pageX+Nt.x),ie=.5*(O.pageY+Nt.y);y.set(Ht,ie)}}function _t(O){if(F.length===1)b.set(O.pageX,O.pageY);else{const Nt=Vt(O),Ht=.5*(O.pageX+Nt.x),ie=.5*(O.pageY+Nt.y);b.set(Ht,ie)}}function Ut(O){const Nt=Vt(O),Ht=O.pageX-Nt.x,ie=O.pageY-Nt.y,U=Math.sqrt(Ht*Ht+ie*ie);_.set(0,U)}function G(O){r.enableZoom&&Ut(O),r.enablePan&&_t(O)}function Jt(O){r.enableZoom&&Ut(O),r.enableRotate&&zt(O)}function jt(O){if(F.length==1)x.set(O.pageX,O.pageY);else{const Ht=Vt(O),ie=.5*(O.pageX+Ht.x),U=.5*(O.pageY+Ht.y);x.set(ie,U)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const Nt=r.domElement;ht(2*Math.PI*M.x/Nt.clientHeight),Et(2*Math.PI*M.y/Nt.clientHeight),y.copy(x)}function Zt(O){if(F.length===1)R.set(O.pageX,O.pageY);else{const Nt=Vt(O),Ht=.5*(O.pageX+Nt.x),ie=.5*(O.pageY+Nt.y);R.set(Ht,ie)}v.subVectors(R,b).multiplyScalar(r.panSpeed),H(v.x,v.y),b.copy(R)}function yt(O){const Nt=Vt(O),Ht=O.pageX-Nt.x,ie=O.pageY-Nt.y,U=Math.sqrt(Ht*Ht+ie*ie);P.set(0,U),L.set(0,Math.pow(P.y/_.y,r.zoomSpeed)),it(L.y),_.copy(P);const vt=(O.pageX+Nt.x)*.5,xt=(O.pageY+Nt.y)*.5;lt(vt,xt)}function ye(O){r.enableZoom&&yt(O),r.enablePan&&Zt(O)}function qt(O){r.enableZoom&&yt(O),r.enableRotate&&jt(O)}function w(O){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",T),r.domElement.addEventListener("pointerup",J)),_e(O),O.pointerType==="touch"?de(O):ut(O))}function T(O){r.enabled!==!1&&(O.pointerType==="touch"?Rt(O):bt(O))}function J(O){switch(oe(O),F.length){case 0:r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",J),r.dispatchEvent(V_),u=l.NONE;break;case 1:const Nt=F[0],Ht=pt[Nt];de({pointerId:Nt,pageX:Ht.x,pageY:Ht.y});break}}function ut(O){let Nt;switch(O.button){case 0:Nt=r.mouseButtons.LEFT;break;case 1:Nt=r.mouseButtons.MIDDLE;break;case 2:Nt=r.mouseButtons.RIGHT;break;default:Nt=-1}switch(Nt){case es.DOLLY:if(r.enableZoom===!1)return;ft(O),u=l.DOLLY;break;case es.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;Tt(O),u=l.PAN}else{if(r.enableRotate===!1)return;Z(O),u=l.ROTATE}break;case es.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;Z(O),u=l.ROTATE}else{if(r.enablePan===!1)return;Tt(O),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function bt(O){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;W(O);break;case l.DOLLY:if(r.enableZoom===!1)return;ct(O);break;case l.PAN:if(r.enablePan===!1)return;Mt(O);break}}function ot(O){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(O.preventDefault(),r.dispatchEvent(ph),Xt(Ft(O)),r.dispatchEvent(V_))}function Ft(O){const Nt=O.deltaMode,Ht={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(Nt){case 1:Ht.deltaY*=16;break;case 2:Ht.deltaY*=100;break}return O.ctrlKey&&!I&&(Ht.deltaY*=10),Ht}function At(O){O.key==="Control"&&(I=!0,r.domElement.getRootNode().addEventListener("keyup",kt,{passive:!0,capture:!0}))}function kt(O){O.key==="Control"&&(I=!1,r.domElement.getRootNode().removeEventListener("keyup",kt,{passive:!0,capture:!0}))}function $t(O){r.enabled===!1||r.enablePan===!1||Bt(O)}function de(O){switch(Wt(O),F.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;zt(O),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;_t(O),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;G(O),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Jt(O),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function Rt(O){switch(Wt(O),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;jt(O),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;Zt(O),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ye(O),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;qt(O),r.update();break;default:u=l.NONE}}function Le(O){r.enabled!==!1&&O.preventDefault()}function _e(O){F.push(O.pointerId)}function oe(O){delete pt[O.pointerId];for(let Nt=0;Nt<F.length;Nt++)if(F[Nt]==O.pointerId){F.splice(Nt,1);return}}function Wt(O){let Nt=pt[O.pointerId];Nt===void 0&&(Nt=new ge,pt[O.pointerId]=Nt),Nt.set(O.pageX,O.pageY)}function Vt(O){const Nt=O.pointerId===F[0]?F[1]:F[0];return pt[Nt]}r.domElement.addEventListener("contextmenu",Le),r.domElement.addEventListener("pointerdown",w),r.domElement.addEventListener("pointercancel",J),r.domElement.addEventListener("wheel",ot,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}function hA(){const o=Re.useRef(null),[e,i]=Re.useState(!1),[r,l]=Re.useState(!1),[u,d]=Re.useState(!1),[h,p]=Re.useState(!1),[m,g]=Re.useState(!1),[y,x]=Re.useState(!1),[M,b]=Re.useState(!1),[R,v]=Re.useState(!1),[_,P]=Re.useState(!1),[L,B]=Re.useState(!1),k=Re.useRef({beta:0,gamma:0}),V=Re.useRef(0),F=Re.useRef(!1),pt=Re.useRef(!1),I=Re.useRef({position:{x:1,z:1},direction:new q(0,0,1),worldPosition:new q(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),E=Re.useRef({}),N=Re.useRef(null),ht=Re.useRef(!1);Re.useEffect(()=>{pt.current=u},[u]),Re.useEffect(()=>{ht.current=e},[e]);const[Et,Y]=Re.useState(null),nt=Re.useRef(null);Re.useRef(!1);const H=Re.useRef(null),it=Re.useRef(!1),$=()=>{if(console.log("Restarting game..."),!E.current.generateMaze||!E.current.createWalls){console.error("Game functions not initialized");return}if(N.current&&N.current.parent&&(console.log("Cleaning up celebration particles"),N.current.parent.remove(N.current),N.current.geometry&&N.current.geometry.dispose(),N.current.material&&N.current.material.dispose(),N.current=null,Y(null)),console.log("Resetting game state"),i(!1),l(!1),d(!1),it.current=!1,console.log("Resetting player position and direction"),I.current.position={x:1,z:1},I.current.direction.set(0,0,1),console.log("Resetting maze reference"),H.current=null,console.log("Generating new maze"),E.current.generateMaze(),console.log("Creating new walls"),E.current.createWalls(),console.log("Updating player world position"),I.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),E.current.createPlayer&&E.current.mazeGroup){console.log("Creating new player mesh"),I.current.mesh&&I.current.mesh.parent&&(console.log("Removing old player mesh"),I.current.mesh.parent.remove(I.current.mesh),I.current.mesh.children.forEach(Ut=>{Ut.geometry&&Ut.geometry.dispose(),Ut.material&&Ut.material.dispose()})),console.log("Creating new player mesh");const _t=E.current.createPlayer();console.log("Positioning new player at entrance"),_t.position.copy(I.current.worldPosition),console.log("Adding new player to maze group"),E.current.mazeGroup.add(_t),console.log("Added new player to maze group"),console.log("Updating player ref"),I.current.mesh=_t}if(E.current.setInitialPlayerDirection?E.current.setInitialPlayerDirection(I.current.mesh):I.current.direction.set(0,0,1),I.current.mesh){I.current.mesh.position.copy(I.current.worldPosition);const _t=Math.atan2(I.current.direction.x,I.current.direction.z);I.current.mesh.rotation.y=_t,I.current.mesh.visible=!0,I.current.mesh.children.forEach(Ut=>{Ut.material&&(Ut.material.opacity=1,Ut.material.transparent=!0)})}},lt=()=>{const _t=navigator.userAgent||navigator.vendor||window.opera,Ut=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(_t.toLowerCase());return console.log("Device detection:",Ut?"Mobile":"Desktop"),F.current=Ut,Ut},C=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",Z=()=>window.DeviceOrientationEvent!==void 0,ft=async()=>{if(!C())return console.log("No iOS permission needed, enabling gyroscope directly"),window.addEventListener("deviceorientation",Tt),b(!0),v(!0),(!window.physics||!window.physics.initialized)&&(console.log("📱 Non-iOS device, initializing physics system"),zt()),!0;console.log("Requesting iOS device orientation permission");try{const _t=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",_t),_t==="granted"?(console.log("✅ iOS permission granted!"),window.addEventListener("deviceorientation",Tt),b(!0),v(!0),P(!1),B(!1),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),zt(),setTimeout(()=>{I.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),I.current.velocity.x=.05,I.current.velocity.z=.05)},2e3)),!0):(console.log("❌ iOS permission denied:",_t),P(!1),B(!0),!1)}catch(_t){return console.error("❌ Error requesting iOS permission:",_t),P(!1),B(!0),!1}},Tt=_t=>{const Ut=performance.now(),G=Ut<3e3;G&&console.log("Orientation event received:",{beta:_t.beta,gamma:_t.gamma,time:Ut}),k.current={beta:_t.beta,gamma:_t.gamma},!G&&Ut%3e3<20&&console.log("Orientation data:",k.current)};Re.useEffect(()=>{const _t=lt();return console.log("Is mobile:",_t),_t&&(C()?(console.log("iOS device detected - showing permission button"),P(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):Z()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",Tt),b(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",Tt)}},[]),Re.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let _t=function(mt){if(be=requestAnimationFrame(_t),F.current&&M&&!ht.current&&!h){const Ot=performance.now(),{beta:wt,gamma:Lt}=k.current;if(Ot<5e3&&Ot%500<20&&console.log("Animation loop - orientation:",{beta:wt,gamma:Lt}),wt!==null&&Lt!==null){const Pt=Math.abs(wt),ce=Math.abs(Lt);let he="";const xe=5;Pt>ce&&Pt>xe?he=wt>0?"ArrowDown":"ArrowUp":ce>xe&&(he=Lt>0?"ArrowRight":"ArrowLeft");const pe=Math.max(Pt,ce),ze=Math.max(100,500-pe*5);he&&Ot-V.current>ze&&(console.log(`Gyroscope movement: ${he} (tilt: ${pe.toFixed(1)}°)`),te({key:he,preventDefault:()=>{},stopPropagation:()=>{}}),V.current=Ot)}}if(!O&&!e){const Ot=mt-Nt,wt=Math.min(Ot/Ht,1);if(wt===1)O=!0,At.rotation.x=0,At.rotation.y=0;else{const Lt=dr.lerp(0,0,wt);At.rotation.x=Lt,At.rotation.y=0}}else!O&&e&&(O=!0),pt.current||(At.rotation.x=0,At.rotation.y=0,At.rotation.z=0);const Dt=mt*.001;At.children.forEach(Ot=>{Ot.material&&Ot.material.uniforms&&(Ot.material.uniforms.time.value=Dt)}),nt.current?(console.log("Calling updateParticles from animation loop"),nt.current()||(console.log("updateParticles returned false, setting to null"),nt.current=null)):ht.current&&!nt.current&&console.log("Game won but updateParticles is null"),pt.current?F.current||(ot.enabled=!1,ot.enableRotate=!1,ot.enableZoom=!1,ot.enablePan=!1):((Math.abs(ut.position.x)>.1||Math.abs(ut.position.z)>.1||Math.abs(ut.position.y-T())>.1||Math.abs(ot.target.x)>.1||Math.abs(ot.target.y)>.1||Math.abs(ot.target.z)>.1)&&(ut.position.set(0,T(),0),ot.target.set(0,0,0)),!F.current&&ot.update&&ot.update()),Bt(),Zt.render(G,ut)},Ut=function(){const mt=window.innerWidth,Dt=window.innerHeight;Zt.setSize(mt,Dt),ut.aspect=mt/Dt;const Ot=mt<768,wt=mt>Dt;Ot?ut.fov=wt?75:80:ut.fov=60,pt.current||(ut.position.y=T(),ut.lookAt(0,0,0)),ut.updateProjectionMatrix()};console.log("Initializing 3D scene"),F.current=lt(),console.log("Is mobile device:",F.current),F.current&&v(!0);const G=new rA;G.background=new Ne(0);const Jt=new I_(4210752,1.5);G.add(Jt);const jt=new F_(16777215,1);if(jt.position.set(1,1,1),G.add(jt),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const Zt=new E0({antialias:!0,canvas:o.current});if(Zt.setSize(window.innerWidth,window.innerHeight),Zt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Zt.shadowMap.enabled=!0,Zt.shadowMap.type=X_,console.log("Renderer set up"),F.current){console.log("Setting up orientation handling for mobile");const mt=Dt=>{var Ot;if(!(e||h)&&(!M&&(Dt.beta!==null||Dt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),b(!0)),!!M&&Dt.beta!==null&&Dt.gamma!==null)){let wt=Dt.beta,Lt=Dt.gamma;if(window.orientation!==void 0){const Pt=window.orientation;if(performance.now()%5e3<20&&((Ot=window.physics)!=null&&Ot.debug)&&console.log(`Device orientation: ${Pt}°, beta: ${wt.toFixed(2)}°, gamma: ${Lt.toFixed(2)}°`),Pt===90){const he=wt;wt=Lt,Lt=-he}else if(Pt===-90){const he=wt;wt=-Lt,Lt=he}else Pt===180&&(wt=-wt,Lt=-Lt)}if(window.physics){let he=0,xe=0;Math.abs(Lt)>5&&(he=Math.min(Math.abs(Lt)-5,25)/25*Math.sign(Lt)),Math.abs(wt)>5&&(xe=Math.min(Math.abs(wt)-5,25)/25*Math.sign(wt)),window.physics.gravityX=he,window.physics.gravityZ=xe,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${he.toFixed(3)}, Z=${xe.toFixed(3)}`)}k.current={beta:wt,gamma:Lt}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Dt=async()=>{console.log("Requesting iOS device orientation permission");try{const Ot=await window.DeviceOrientationEvent.requestPermission();Ot==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",mt),b(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),zt(),setTimeout(()=>{I.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),I.current.velocity.x=.05,I.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",Ot)}catch(Ot){console.error("❌ Error requesting permission:",Ot)}};document.addEventListener("touchstart",()=>{Dt(),document.removeEventListener("touchstart",Dt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",mt),b(!0)}const yt=21,ye=2,qt=3,w=2,T=(mt=!1)=>{const Dt=window.innerWidth<768,Ot=window.innerWidth>window.innerHeight,wt=yt*w;let Lt=wt*1.5;return Dt&&(mt||L)&&(Ot?Lt=wt*1.6:Lt=wt*1.8),Dt?Ot?Lt*.8:Lt*1.2:Lt};window.calculateOptimalCameraHeight=T;const J=T(),ut=new Jn(60,window.innerWidth/window.innerHeight,.1,1e3);ut.position.set(0,J,0),ut.lookAt(0,0,0),console.log("Camera set up");const bt=lt();let ot;bt?(ot={target:new q(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(ot=new fA(ut,Zt.domElement),ot.enableDamping=!0,ot.dampingFactor=.1,ot.target.set(0,0,0),ot.update(),console.log("Desktop controls set up"));const Ft=e&&H.current?H.current:Array(yt).fill().map(()=>Array(yt).fill(1));H.current=Ft,window.MAZE_SIZE=yt,window.WALL_THICKNESS=w,window.playerRef=I,window.mazeRef=H,window.isThirdPersonRef=pt,window.gameCamera=ut,window.maze=Ft,window.celebrateWin=()=>{it.current=!0,i(!0),l(!0),ie()};const At=new Ms;G.add(At),console.log("Maze group created"),E.current.mazeGroup=At;const kt=new ra({uniforms:{time:{value:0},baseColor:{value:new Ne(4482815)}},vertexShader:`
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
        `,side:Li});console.log("Wall material created");const $t=(mt,Dt)=>mt>=0&&mt<yt&&Dt>=0&&Dt<yt,de=(mt,Dt)=>{const Ot=[],wt=[[0,2],[2,0],[0,-2],[-2,0]];for(let Lt=wt.length-1;Lt>0;Lt--){const Pt=Math.floor(Math.random()*(Lt+1));[wt[Lt],wt[Pt]]=[wt[Pt],wt[Lt]]}for(const[Lt,Pt]of wt){const ce=mt+Lt,he=Dt+Pt;$t(ce,he)&&Ft[ce][he]===1&&Ot.push([ce,he,Lt/2,Pt/2])}return Ot},Rt=()=>{if(e&&H.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let Pt=0;Pt<yt;Pt++)for(let ce=0;ce<yt;ce++)Ft[Pt][ce]=1;const mt=[],Dt=1,Ot=1;for(Ft[Dt][Ot]=0,mt.push([Dt,Ot]);mt.length>0;){const[Pt,ce]=mt[mt.length-1],he=de(Pt,ce);if(he.length===0){mt.pop();continue}const[xe,pe,ze,Ae]=he[Math.floor(Math.random()*he.length)];Ft[xe][pe]=0,Ft[Pt+ze][ce+Ae]=0,mt.push([xe,pe])}Ft[0][1]=0,Ft[yt-1][yt-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(yt-1)+","+(yt-2)+")");const wt=new Set,Lt=Pt=>{const[ce,he]=Pt;if(ce===yt-2&&he===yt-2)return!0;wt.add(`${ce},${he}`);const xe=[[0,1],[1,0],[0,-1],[-1,0]];for(const[pe,ze]of xe){const Ae=ce+pe,Oe=he+ze;if($t(Ae,Oe)&&Ft[Ae][Oe]===0&&!wt.has(`${Ae},${Oe}`)&&Lt([Ae,Oe]))return!0}return!1};Lt([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),Rt()),H.current=Ft,window.maze=Ft,window.MAZE_SIZE=yt,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Le=()=>{if(!e||!H.current){for(console.log("Creating new walls for the maze");At.children.length>0;){const mt=At.children[0];mt.isGroup?mt.children.forEach(Dt=>{Dt.geometry&&Dt.geometry.dispose(),Dt.material&&Dt.material.dispose()}):(mt.geometry&&mt.geometry.dispose(),mt.material&&mt.material.dispose()),At.remove(mt)}for(let mt=0;mt<yt;mt++)for(let Dt=0;Dt<yt;Dt++)if(Ft[mt][Dt]===1){const Ot=new Va(w,qt,w),wt=new $n(Ot,kt);if(wt.position.set((mt-yt/2)*w,qt/2,(Dt-yt/2)*w),At.add(wt),mt===0||mt===yt-1||Dt===0||Dt===yt-1){if(mt<yt-1&&Ft[mt+1][Dt]===1){const Lt=new $n(new Va(w,qt,w),kt);Lt.position.set((mt-yt/2+.5)*w,qt/2,(Dt-yt/2)*w),At.add(Lt)}if(Dt<yt-1&&Ft[mt][Dt+1]===1){const Lt=new $n(new Va(w,qt,w),kt);Lt.position.set((mt-yt/2)*w,qt/2,(Dt-yt/2+.5)*w),At.add(Lt)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),E.current.generateMaze=Rt,E.current.createWalls=Le;const _e=mt=>{if(console.log("Setting initial player direction"),!mt){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Dt=1,Ot=1,wt=[{dx:0,dz:1,name:"down",vector:new q(0,0,1)},{dx:1,dz:0,name:"right",vector:new q(1,0,0)},{dx:0,dz:-1,name:"up",vector:new q(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new q(-1,0,0)}];console.log("Checking available directions from starting position:",Dt,Ot);const Lt=wt.filter(Pt=>{const ce=Dt+Pt.dx,he=Ot+Pt.dz;if(ce===0&&he===1)return console.log(`Direction ${Pt.name} leads to entrance, skipping`),!1;const xe=$t(ce,he)&&Ft[ce][he]===0;return console.log(`Direction ${Pt.name} leads to (${ce}, ${he}): ${xe?"valid":"invalid"}`),xe});if(console.log("Valid directions:",Lt.map(Pt=>Pt.name)),Lt.length>0){const Pt=Lt[0];console.log("Chosen direction:",Pt.name),I.current.direction.copy(Pt.vector);const ce=Math.atan2(Pt.vector.x,Pt.vector.z);mt.rotation.y=ce,console.log("Set player rotation to:",ce)}else console.log("No valid directions found, defaulting to down"),I.current.direction.set(0,0,1),mt.rotation.y=0};E.current.setInitialPlayerDirection=_e,e?console.log("Game has been won, preserving maze and player position"):(Rt(),Le(),console.log("Initial maze created"));const oe=new I_(16777215,.6);G.add(oe);const Wt=new F_(16777215,1);Wt.position.set(50,100,50),G.add(Wt);const Vt=new B_(4474111,2,150);Vt.position.set(50,50,50),G.add(Vt);const le=new B_(4474111,2,150);le.position.set(-50,50,-50),G.add(le),console.log("Lights added");let O=!1;const Nt=performance.now(),Ht=1e3,ie=()=>{console.log("Celebration function called - START");const mt=2e3,Dt=new Oi,Ot=new Float32Array(mt*3),wt=new Float32Array(mt*3);for(let pe=0;pe<mt;pe++)Ot[pe*3]=I.current.worldPosition.x,Ot[pe*3+1]=I.current.worldPosition.y,Ot[pe*3+2]=I.current.worldPosition.z,wt[pe*3]=Math.random(),wt[pe*3+1]=Math.random(),wt[pe*3+2]=Math.random();Dt.setAttribute("position",new pi(Ot,3)),Dt.setAttribute("color",new pi(wt,3));const Lt=new T0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:mh}),Pt=new sA(Dt,Lt);G.add(Pt),console.log("Particle system added to scene");const ce=[];for(let pe=0;pe<mt;pe++){const ze=Math.random()*Math.PI*2,Ae=Math.acos(Math.random()*2-1),Oe=.05+Math.random()*.1;ce.push(Math.sin(Ae)*Math.cos(ze)*Oe,Math.sin(Ae)*Math.sin(ze)*Oe,Math.cos(Ae)*Oe)}N.current=Pt;const he=()=>{if(console.log("Update particles function called - frame"),!ht.current)return console.log("Game no longer in won state, cleaning up particles"),Pt.parent&&(G.remove(Pt),Pt.geometry.dispose(),Lt.dispose()),N.current=null,nt.current=null,!1;const pe=Pt.geometry.attributes.position.array;let ze=!1;for(let Oe=0;Oe<mt;Oe++){const tn=Oe*3;pe[tn]+=ce[tn],pe[tn+1]+=ce[tn+1],pe[tn+2]+=ce[tn+2],ce[tn+1]-=.001;const ti=pe[tn]-I.current.worldPosition.x,sa=pe[tn+1]-I.current.worldPosition.y,D=pe[tn+2]-I.current.worldPosition.z;Math.sqrt(ti*ti+sa*sa+D*D)<20&&(ze=!0)}Pt.geometry.attributes.position.needsUpdate=!0;const Ae=performance.now()-xe;return Ae>1e3&&(Lt.opacity=Math.max(0,1-(Ae-1e3)/1e3)),!ze||Ae>2e3?(console.log("Animation complete, cleaning up particles"),G.remove(Pt),Pt.geometry.dispose(),Lt.dispose(),N.current=null,nt.current=null,!1):!0},xe=performance.now();return console.log("Setting updateParticles function"),nt.current=he,()=>{console.log("Cleanup function called"),Pt.parent&&(G.remove(Pt),Pt.geometry.dispose(),Lt.dispose()),N.current=null,nt.current=null}},U=()=>{const mt=new Ms,Dt=new Mc(w/2,16,16),Ot=new oA({color:16776960}),wt=new $n(Dt,Ot);return mt.add(wt),mt},vt=U();E.current.createPlayer=U;let xt=null;if(e){for(let mt=0;mt<At.children.length;mt++){const Dt=At.children[mt];if(Dt.isGroup&&Dt.children.length>0&&Dt.children[0].geometry instanceof Mc){xt=Dt;break}}xt&&(xt.children.forEach(mt=>{mt.geometry&&mt.geometry.dispose(),mt.material&&mt.material.dispose()}),At.remove(xt),console.log("Removed existing player from maze group"))}if(!e)vt.position.set((1-yt/2)*w,w/2,(1-yt/2)*w),I.current.mesh=vt,I.current.worldPosition.copy(vt.position),_e(vt);else{if(it.current){const Dt=yt-1,Ot=yt-2,wt=new q((Dt-yt/2)*w,w/2,(Ot-yt/2)*w);console.log("Positioning player at exit:",wt),vt.position.copy(wt),I.current.worldPosition.copy(wt),I.current.position={x:Dt,z:Ot}}else console.log("Using existing player position:",I.current.worldPosition),vt.position.copy(I.current.worldPosition);I.current.mesh=vt;const mt=Math.atan2(I.current.direction.x,I.current.direction.z);vt.rotation.y=mt}At.add(vt),I.current.mesh=vt,console.log("Player created and added to maze group");const Yt=mt=>{if(mt.key.toLowerCase()==="v")return console.log("View toggle key pressed"),mt.preventDefault(),mt.stopPropagation(),mt.stopImmediatePropagation(),h?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),d(Dt=>{const Ot=!Dt;console.log("Switching to:",Ot?"POV mode":"Top-down mode"),pt.current=Ot;const wt=ut.position.clone(),Lt=new q().copy(ot.target),Pt=ut.fov,ce={x:At.rotation.x,y:At.rotation.y,z:At.rotation.z},he=Ot?new q(I.current.worldPosition.x,I.current.worldPosition.y+1.5,I.current.worldPosition.z):new q(0,T(),0),xe=Ot?new q(I.current.worldPosition.x+I.current.direction.x*w,I.current.worldPosition.y+1.5,I.current.worldPosition.z+I.current.direction.z*w):new q(0,0,0),pe=window.innerWidth<768,ze=window.innerWidth>window.innerHeight;let Ae=Ot?75:60;pe&&(Ae=Ot||ze?75:80);const Oe={x:0,y:0,z:0},tn=vt.visible?1:0,ti=Ot?0:1;vt.visible=!0,vt.children.forEach(st=>{st.material&&(st.material.transparent||(st.material.transparent=!0),st.material.opacity=tn)}),F.current||(ot.enabled=!1);const sa=1200;let D=null;const Q=st=>{const et=st-rt,Gt=Math.min(et/sa,1),ee=(se=>se<.5?4*se*se*se:1-Math.pow(-2*se+2,3)/2)(Gt);ut.position.lerpVectors(wt,he,ee);const Kt=new q().lerpVectors(Lt,xe,ee);if(F.current||ot.target.copy(Kt),ut.lookAt(Kt),ut.fov=dr.lerp(Pt,Ae,ee),ut.updateProjectionMatrix(),At.rotation.x=dr.lerp(ce.x,Oe.x,ee),At.rotation.y=dr.lerp(ce.y,Oe.y,ee),At.rotation.z=dr.lerp(ce.z,Oe.z,ee),vt.children.forEach(se=>{se.material&&(se.material.opacity=dr.lerp(tn,ti,ee))}),Gt===1){cancelAnimationFrame(D),vt.visible=!Ot,vt.children.forEach(se=>{se.material&&(se.material.opacity=ti,ti===1&&(se.material.transparent=!1))}),!F.current&&!Ot?(ot.enabled=!0,ot.enableRotate=!0,ot.enableZoom=!0,ot.enablePan=!0):(ut.position.copy(he),ut.lookAt(xe)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}D=requestAnimationFrame(Q)},rt=performance.now();return D=requestAnimationFrame(Q),Ot}),!1)},te=mt=>{if(ht.current||!O||h){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Dt=mt.key.toLowerCase();if(console.log("Key pressed:",Dt,"Current mode:",pt.current?"POV":"Top-down"),Dt==="v")return;mt.preventDefault();const Ot=I.current.position.x,wt=I.current.position.z;let Lt=Ot,Pt=wt,ce=!1;const he=I.current.mesh;if(!he){console.error("Player mesh not found");return}if(pt.current){switch(console.log("Handling POV mode controls"),Dt){case"arrowup":case"w":console.log("Moving forward - Current position:",Ot,wt),console.log("Current direction:",I.current.direction),Lt=Ot+Math.round(I.current.direction.x),Pt=wt+Math.round(I.current.direction.z),console.log("New position will be:",Lt,Pt),ce="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",Ot,wt),console.log("Current direction:",I.current.direction),Lt=Ot-Math.round(I.current.direction.x),Pt=wt-Math.round(I.current.direction.z),console.log("New position will be:",Lt,Pt),ce="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",I.current.direction),I.current.direction.applyAxisAngle(new q(0,1,0),Math.PI/2),console.log("New direction:",I.current.direction),ce="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",I.current.direction),I.current.direction.applyAxisAngle(new q(0,1,0),-Math.PI/2),console.log("New direction:",I.current.direction),ce="rotate";break}if(ce==="move")if($t(Lt,Pt)&&Ft[Lt][Pt]===0){console.log("Movement is valid, updating positions"),I.current.position.x=Lt,I.current.position.z=Pt;const xe=new q((Lt-yt/2)*w,w/2,(Pt-yt/2)*w);console.log("New world position:",xe),I.current.worldPosition.copy(xe),he.position.copy(xe),console.log("Updated player mesh position to:",he.position),ut.position.set(xe.x,xe.y+1.5,xe.z),console.log("New camera position:",ut.position);const pe=ut.position.clone();if(pe.add(I.current.direction.clone().multiplyScalar(w)),ut.lookAt(pe),console.log("Camera looking at:",pe),ut.updateProjectionMatrix(),ut.updateMatrixWorld(),Lt===yt-1&&Pt===yt-2){it.current=!0,i(!0),l(!0);const ze=ie();return()=>{ze&&ze()}}}else console.log("Movement blocked - Out of bounds or wall:",Lt,Pt);else if(ce==="rotate"){console.log("Handling rotation");const xe=Math.atan2(I.current.direction.x,I.current.direction.z);he.rotation.y=xe,console.log("Updated player mesh rotation to:",xe);const pe=ut.position.clone();pe.add(I.current.direction.clone().multiplyScalar(w)),ut.lookAt(pe),console.log("Camera looking at new direction:",pe),ut.updateProjectionMatrix(),ut.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Dt){case"arrowup":case"w":console.log("Moving up - Current position:",Ot,wt),Pt=wt-1,I.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",Ot,wt),Pt=wt+1,I.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",Ot,wt),Lt=Ot-1,I.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",Ot,wt),Lt=Ot+1,I.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",Lt,Pt),console.log("Maze value at target position:",Ft[Lt][Pt]),console.log("Is in bounds:",$t(Lt,Pt)),$t(Lt,Pt)&&Ft[Lt][Pt]===0){console.log("Movement is valid, updating positions"),I.current.position.x=Lt,I.current.position.z=Pt;const xe=new q((Lt-yt/2)*w,w/2,(Pt-yt/2)*w);I.current.worldPosition.copy(xe),he.position.copy(xe);const pe=Math.atan2(I.current.direction.x,I.current.direction.z);if(he.rotation.y=pe,Lt===yt-1&&Pt===yt-2){it.current=!0,i(!0),l(!0);const ze=ie();return()=>{ze&&ze()}}}}};window.removeEventListener("keydown",Yt,!0),window.removeEventListener("keydown",te),console.log("Attaching event listeners"),window.addEventListener("keydown",Yt,!0),window.addEventListener("keydown",te),console.log("Event listeners attached");let be;return console.log("Starting animation"),_t(),window.addEventListener("resize",Ut),()=>{console.log("Cleanup running"),window.removeEventListener("resize",Ut),window.removeEventListener("keydown",Yt,!0),window.removeEventListener("keydown",te),be&&cancelAnimationFrame(be),G.traverse(mt=>{mt.geometry&&mt.geometry.dispose(),mt.material&&(Array.isArray(mt.material)?mt.material.forEach(Dt=>Dt.dispose()):mt.material.dispose())}),Zt.dispose(),ot&&typeof ot.dispose=="function"&&ot.dispose()}}catch(_t){console.error("Error in setup:",_t)}},[]),Re.useEffect(()=>{const _t=()=>{const G=lt();return G&&(!Z()||C()&&!M)&&(console.log("Setting up touch controls for mobile"),B(!0)),Ut(),G},Ut=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const G=Jt=>{console.log("Device orientation event received:",Jt),window.removeEventListener("deviceorientation",G)};window.addEventListener("deviceorientation",G,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};_t()},[M]);const W=Re.useRef(null),ct=Re.useRef(null),Mt=Re.useRef(null),Xt=Re.useRef(null);Re.useEffect(()=>{if(!L)return;console.log("Setting up touch control listeners");const _t=ye=>{if(e||h)return;const qt=.1;switch(ye){case"up":I.current.velocity.z-=qt,I.current.direction.set(0,0,-1);break;case"down":I.current.velocity.z+=qt,I.current.direction.set(0,0,1);break;case"left":I.current.velocity.x-=qt,I.current.direction.set(-1,0,0);break;case"right":I.current.velocity.x+=qt,I.current.direction.set(1,0,0);break}const w=.2,T=I.current.velocity,J=Math.sqrt(T.x*T.x+T.z*T.z);J>w&&(T.x=T.x/J*w,T.z=T.z/J*w)},Ut=(ye,qt)=>(ye.preventDefault(),ye.stopPropagation(),_t(qt),!1),G=(ye,qt)=>{if(!ye.current)return;const w=ye.current,T=ot=>Ut(ot,qt),J=ot=>ot.preventDefault(),ut=ot=>Ut(ot,qt),bt=ot=>Ut(ot,qt);return w.addEventListener("touchstart",T,{passive:!1}),w.addEventListener("touchend",J,{passive:!1}),w.addEventListener("mousedown",ut),w.addEventListener("click",bt),()=>{w.removeEventListener("touchstart",T),w.removeEventListener("touchend",J),w.removeEventListener("mousedown",ut),w.removeEventListener("click",bt)}},Jt=G(W,"up"),jt=G(ct,"down"),Zt=G(Mt,"left"),yt=G(Xt,"right");return()=>{Jt&&Jt(),jt&&jt(),Zt&&Zt(),yt&&yt()}},[L]),Re.useEffect(()=>{const _t=()=>{let Jt=document.querySelector('meta[name="viewport"]');Jt||(Jt=document.createElement("meta"),Jt.name="viewport",document.head.appendChild(Jt)),Jt.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},Ut=Jt=>{Jt.touches&&Jt.touches.length>1&&Jt.preventDefault()},G=Jt=>{Jt.preventDefault()};return _t(),document.addEventListener("touchmove",Ut,{passive:!1}),document.addEventListener("touchstart",G,{passive:!1}),()=>{document.removeEventListener("touchmove",Ut),document.removeEventListener("touchstart",G)}},[]),Re.useEffect(()=>{if(!window.gameCamera||pt.current)return;const Ut=setTimeout(()=>{const G=window.gameCamera;if(G&&!pt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const Jt=window.calculateOptimalCameraHeight(L);G.position.y=Jt,G.updateProjectionMatrix(),console.log(`Adjusted camera height to ${Jt} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(Ut)},[L]);const Bt=()=>{if(!M||e||h)return;const _t=I.current,Ut=_t.acceleration,G=_t.velocity,Jt=_t.position,jt=.95;if(G.x+=Ut.x,G.z+=Ut.z,G.x*=jt,G.z*=jt,Math.abs(G.x)<.001&&Math.abs(G.z)<.001)return;let Zt=Jt.x+G.x,yt=Jt.z+G.z;const ye=(qt,w)=>{const T=Math.floor(qt),J=Math.floor(w);return T>=0&&T<MAZE_SIZE&&J>=0&&J<MAZE_SIZE&&maze[T][J]===0};if(ye(Zt,Jt.z)?(Jt.x=Zt,_t.mesh.position.x=Zt*2):G.x=0,ye(Jt.x,yt)?(Jt.z=yt,_t.mesh.position.z=yt*2):G.z=0,Math.floor(Jt.x)===MAZE_SIZE-1&&Math.floor(Jt.z)===MAZE_SIZE-2&&E.current.celebrate(),pt.current){const qt=new q(0,3,-3).applyQuaternion(_t.mesh.quaternion);camera.position.copy(_t.mesh.position).add(qt),camera.lookAt(_t.mesh.position)}},zt=()=>{console.log("⚡ Initializing physics system"),window.physics={gravity:.008,maxSpeed:.25,friction:.98,restitution:.5,active:!0,debug:!0,lastTime:0,orientation:{beta:0,gamma:0},gravityX:0,gravityZ:0,initialized:!0},I.current&&(I.current.velocity={x:0,z:0},I.current.acceleration={x:0,z:0},I.current.mass=1,I.current.lastUpdateTime=performance.now());const _t=()=>{if(document.getElementById("physics-debug-indicator"))return;const Ut=document.createElement("div");Ut.id="physics-debug-indicator",Ut.style.cssText=`
        position: fixed;
        top: 10px;
        right: 10px;
        width: 100px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      `;const G=document.createElement("div");G.style.cssText=`
        width: 20px;
        height: 20px;
        background-color: #4CAF50;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        transition: all 0.1s ease;
      `;const Jt=document.createElement("div");Jt.style.cssText=`
        position: absolute;
        bottom: -25px;
        left: 0;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 12px;
      `,Jt.innerText="Tilt Debug",Ut.appendChild(G),Ut.appendChild(Jt),document.body.appendChild(Ut),window.physics.debugDot=G};window.physics.debug&&lt()&&setTimeout(_t,500),console.log("⚡ Physics system initialized with gravity:",window.physics.gravity)};return Re.useEffect(()=>{if(F.current){console.log("📱 Mobile device detected, initializing physics system");const _t=21;window.MAZE_SIZE=_t,H.current&&(window.maze=H.current),zt(),setTimeout(()=>{I.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),I.current.velocity.x=.05,I.current.velocity.z=.05)},3e3)}return()=>{window.physics&&(window.physics.active=!1,console.log("📱 Cleaning up physics system"))}},[]),je.jsxs(je.Fragment,{children:[je.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),_&&je.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[je.jsx("button",{className:"permission-button",onClick:_t=>{_t.preventDefault(),_t.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{ft()},10)},onTouchStart:_t=>{console.log("Button touch started"),_t.stopPropagation()},onTouchEnd:_t=>{console.log("Button touch ended"),_t.preventDefault(),_t.stopPropagation(),setTimeout(()=>{ft()},10)},children:"Enable Tilt Controls"}),je.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),L&&je.jsxs("div",{className:"touch-controls",children:[je.jsx("div",{className:"touch-controls-row",children:je.jsx("button",{ref:W,className:"touch-button up-button","data-direction":"up",children:"▲"})}),je.jsxs("div",{className:"touch-controls-row",children:[je.jsx("button",{ref:Mt,className:"touch-button left-button","data-direction":"left",children:"◀"}),je.jsx("div",{className:"touch-button-spacer"}),je.jsx("button",{ref:Xt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),je.jsx("div",{className:"touch-controls-row",children:je.jsx("button",{ref:ct,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),e&&je.jsxs("div",{className:"victory-message",children:[je.jsx("h1",{children:"You Won!"}),r&&je.jsx("button",{onClick:$,children:"Play Again"})]}),m&&je.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),R&&M&&je.jsxs("div",{className:"gyroscope-indicator",children:[je.jsx("div",{className:"gyroscope-icon",children:je.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:je.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),je.jsx("span",{children:"Tilt to Move"})]})]})}Fy.createRoot(document.getElementById("root")).render(je.jsx(Re.StrictMode,{children:je.jsx(hA,{})}));
