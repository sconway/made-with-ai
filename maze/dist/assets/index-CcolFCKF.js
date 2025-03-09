(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Cy(){if(eg)return Ro;eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var ng;function Dy(){return ng||(ng=1,Lf.exports=Cy()),Lf.exports}var he=Dy(),Uf={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Ly(){if(ig)return Me;ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,D={};function v(C,j,pt){this.props=C,this.context=j,this.refs=D,this.updater=pt||M}v.prototype.isReactComponent={},v.prototype.setState=function(C,j){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,j,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function O(C,j,pt){this.props=C,this.context=j,this.refs=D,this.updater=pt||M}var L=O.prototype=new _;L.constructor=O,A(L,v.prototype),L.isPureReactComponent=!0;var B=Array.isArray,V={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function F(C,j,pt,Ct,k,ft){return pt=ft.ref,{$$typeof:o,type:C,key:j,ref:pt!==void 0?pt:null,props:ft}}function H(C,j){return F(C.type,j,void 0,void 0,void 0,C.props)}function lt(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function b(C){var j={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(pt){return j[pt]})}var P=/\/+/g;function _t(C,j){return typeof C=="object"&&C!==null&&C.key!=null?b(""+C.key):j.toString(36)}function At(){}function X(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(At,At):(C.status="pending",C.then(function(j){C.status==="pending"&&(C.status="fulfilled",C.value=j)},function(j){C.status==="pending"&&(C.status="rejected",C.reason=j)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function rt(C,j,pt,Ct,k){var ft=typeof C;(ft==="undefined"||ft==="boolean")&&(C=null);var Et=!1;if(C===null)Et=!0;else switch(ft){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(C.$$typeof){case o:case e:Et=!0;break;case g:return Et=C._init,rt(Et(C._payload),j,pt,Ct,k)}}if(Et)return k=k(C),Et=Ct===""?"."+_t(C,0):Ct,B(k)?(pt="",Et!=null&&(pt=Et.replace(P,"$&/")+"/"),rt(k,j,pt,"",function(Bt){return Bt})):k!=null&&(lt(k)&&(k=H(k,pt+(k.key==null||C&&C.key===k.key?"":(""+k.key).replace(P,"$&/")+"/")+Et)),j.push(k)),1;Et=0;var jt=Ct===""?".":Ct+":";if(B(C))for(var zt=0;zt<C.length;zt++)Ct=C[zt],ft=jt+_t(Ct,zt),Et+=rt(Ct,j,pt,ft,k);else if(zt=S(C),typeof zt=="function")for(C=zt.call(C),zt=0;!(Ct=C.next()).done;)Ct=Ct.value,ft=jt+_t(Ct,zt++),Et+=rt(Ct,j,pt,ft,k);else if(ft==="object"){if(typeof C.then=="function")return rt(X(C),j,pt,Ct,k);throw j=String(C),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Et}function G(C,j,pt){if(C==null)return C;var Ct=[],k=0;return rt(C,Ct,"","",function(ft){return j.call(pt,ft,k++)}),Ct}function ot(C){if(C._status===-1){var j=C._result;j=j(),j.then(function(pt){(C._status===0||C._status===-1)&&(C._status=1,C._result=pt)},function(pt){(C._status===0||C._status===-1)&&(C._status=2,C._result=pt)}),C._status===-1&&(C._status=0,C._result=j)}if(C._status===1)return C._result.default;throw C._result}var $=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ut(){}return Me.Children={map:G,forEach:function(C,j,pt){G(C,function(){j.apply(this,arguments)},pt)},count:function(C){var j=0;return G(C,function(){j++}),j},toArray:function(C){return G(C,function(j){return j})||[]},only:function(C){if(!lt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Me.Component=v,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=O,Me.StrictMode=r,Me.Suspense=p,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Me.act=function(){throw Error("act(...) is not supported in production builds of React.")},Me.cache=function(C){return function(){return C.apply(null,arguments)}},Me.cloneElement=function(C,j,pt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Ct=A({},C.props),k=C.key,ft=void 0;if(j!=null)for(Et in j.ref!==void 0&&(ft=void 0),j.key!==void 0&&(k=""+j.key),j)!I.call(j,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&j.ref===void 0||(Ct[Et]=j[Et]);var Et=arguments.length-2;if(Et===1)Ct.children=pt;else if(1<Et){for(var jt=Array(Et),zt=0;zt<Et;zt++)jt[zt]=arguments[zt+2];Ct.children=jt}return F(C.type,k,void 0,void 0,ft,Ct)},Me.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},Me.createElement=function(C,j,pt){var Ct,k={},ft=null;if(j!=null)for(Ct in j.key!==void 0&&(ft=""+j.key),j)I.call(j,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(k[Ct]=j[Ct]);var Et=arguments.length-2;if(Et===1)k.children=pt;else if(1<Et){for(var jt=Array(Et),zt=0;zt<Et;zt++)jt[zt]=arguments[zt+2];k.children=jt}if(C&&C.defaultProps)for(Ct in Et=C.defaultProps,Et)k[Ct]===void 0&&(k[Ct]=Et[Ct]);return F(C,ft,void 0,void 0,null,k)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(C){return{$$typeof:d,render:C}},Me.isValidElement=lt,Me.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:ot}},Me.memo=function(C,j){return{$$typeof:m,type:C,compare:j===void 0?null:j}},Me.startTransition=function(C){var j=V.T,pt={};V.T=pt;try{var Ct=C(),k=V.S;k!==null&&k(pt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(ut,$)}catch(ft){$(ft)}finally{V.T=j}},Me.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Me.use=function(C){return V.H.use(C)},Me.useActionState=function(C,j,pt){return V.H.useActionState(C,j,pt)},Me.useCallback=function(C,j){return V.H.useCallback(C,j)},Me.useContext=function(C){return V.H.useContext(C)},Me.useDebugValue=function(){},Me.useDeferredValue=function(C,j){return V.H.useDeferredValue(C,j)},Me.useEffect=function(C,j){return V.H.useEffect(C,j)},Me.useId=function(){return V.H.useId()},Me.useImperativeHandle=function(C,j,pt){return V.H.useImperativeHandle(C,j,pt)},Me.useInsertionEffect=function(C,j){return V.H.useInsertionEffect(C,j)},Me.useLayoutEffect=function(C,j){return V.H.useLayoutEffect(C,j)},Me.useMemo=function(C,j){return V.H.useMemo(C,j)},Me.useOptimistic=function(C,j){return V.H.useOptimistic(C,j)},Me.useReducer=function(C,j,pt){return V.H.useReducer(C,j,pt)},Me.useRef=function(C){return V.H.useRef(C)},Me.useState=function(C){return V.H.useState(C)},Me.useSyncExternalStore=function(C,j,pt){return V.H.useSyncExternalStore(C,j,pt)},Me.useTransition=function(){return V.H.useTransition()},Me.version="19.0.0",Me}var ag;function Ad(){return ag||(ag=1,Uf.exports=Ly()),Uf.exports}var Ce=Ad(),Nf={exports:{}},Co={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Uy(){return rg||(rg=1,function(o){function e(G,ot){var $=G.length;G.push(ot);t:for(;0<$;){var ut=$-1>>>1,C=G[ut];if(0<l(C,ot))G[ut]=ot,G[$]=C,$=ut;else break t}}function i(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ot=G[0],$=G.pop();if($!==ot){G[0]=$;t:for(var ut=0,C=G.length,j=C>>>1;ut<j;){var pt=2*(ut+1)-1,Ct=G[pt],k=pt+1,ft=G[k];if(0>l(Ct,$))k<C&&0>l(ft,Ct)?(G[ut]=ft,G[k]=$,ut=k):(G[ut]=Ct,G[pt]=$,ut=pt);else if(k<C&&0>l(ft,$))G[ut]=ft,G[k]=$,ut=k;else break t}}return ot}function l(G,ot){var $=G.sortIndex-ot.sortIndex;return $!==0?$:G.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,y=null,S=3,M=!1,A=!1,D=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(G){for(var ot=i(m);ot!==null;){if(ot.callback===null)r(m);else if(ot.startTime<=G)r(m),ot.sortIndex=ot.expirationTime,e(p,ot);else break;ot=i(m)}}function B(G){if(D=!1,L(G),!A)if(i(p)!==null)A=!0,X();else{var ot=i(m);ot!==null&&rt(B,ot.startTime-G)}}var V=!1,I=-1,F=5,H=-1;function lt(){return!(o.unstable_now()-H<F)}function b(){if(V){var G=o.unstable_now();H=G;var ot=!0;try{t:{A=!1,D&&(D=!1,_(I),I=-1),M=!0;var $=S;try{e:{for(L(G),y=i(p);y!==null&&!(y.expirationTime>G&&lt());){var ut=y.callback;if(typeof ut=="function"){y.callback=null,S=y.priorityLevel;var C=ut(y.expirationTime<=G);if(G=o.unstable_now(),typeof C=="function"){y.callback=C,L(G),ot=!0;break e}y===i(p)&&r(p),L(G)}else r(p);y=i(p)}if(y!==null)ot=!0;else{var j=i(m);j!==null&&rt(B,j.startTime-G),ot=!1}}break t}finally{y=null,S=$,M=!1}ot=void 0}}finally{ot?P():V=!1}}}var P;if(typeof O=="function")P=function(){O(b)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,At=_t.port2;_t.port1.onmessage=b,P=function(){At.postMessage(null)}}else P=function(){v(b,0)};function X(){V||(V=!0,P())}function rt(G,ot){I=v(function(){G(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,X())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(G){switch(S){case 1:case 2:case 3:var ot=3;break;default:ot=S}var $=S;S=ot;try{return G()}finally{S=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,ot){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var $=S;S=G;try{return ot()}finally{S=$}},o.unstable_scheduleCallback=function(G,ot,$){var ut=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ut+$:ut):$=ut,G){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=$+C,G={id:g++,callback:ot,priorityLevel:G,startTime:$,expirationTime:C,sortIndex:-1},$>ut?(G.sortIndex=$,e(m,G),i(p)===null&&G===i(m)&&(D?(_(I),I=-1):D=!0,rt(B,$-ut))):(G.sortIndex=C,e(p,G),A||M||(A=!0,X())),G},o.unstable_shouldYield=lt,o.unstable_wrapCallback=function(G){var ot=S;return function(){var $=S;S=ot;try{return G.apply(this,arguments)}finally{S=$}}}}(Pf)),Pf}var sg;function Ny(){return sg||(sg=1,Of.exports=Uy()),Of.exports}var zf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Oy(){if(og)return Dn;og=1;var o=Ad();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Dn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Dn.requestFormReset=function(p){r.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.0.0",Dn}var lg;function Py(){if(lg)return zf.exports;lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=Oy(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function zy(){if(cg)return Co;cg=1;var o=Ny(),e=Ad(),i=Py();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function H(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case D:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:H(t.type)||"Memo";case O:n=t._payload,t=t._init;try{return H(t(n))}catch{}}return null}var lt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,P,_t;function At(t){if(P===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P+t+_t}var X=!1;function rt(t,n){if(!t||X)return"";X=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(mt){var st=mt}Reflect.construct(t,[],Rt)}else{try{Rt.call()}catch(mt){st=mt}t.call(Rt.prototype)}}else{try{throw Error()}catch(mt){st=mt}(Rt=t())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(mt){if(mt&&st&&typeof mt.stack=="string")return[mt.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var z=x.split(`
`),Y=w.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Y.length)for(s=z.length-1,c=Y.length-1;1<=s&&0<=c&&z[s]!==Y[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Y[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Y[c]){var gt=`
`+z[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{X=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?At(a):""}function G(t){switch(t.tag){case 26:case 27:case 5:return At(t.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return t=rt(t.type,!1),t;case 11:return t=rt(t.type.render,!1),t;case 1:return t=rt(t.type,!0),t;default:return""}}function ot(t){try{var n="";do n+=G(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ut(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if($(t)!==t)throw Error(r(188))}function j(t){var n=t.alternate;if(!n){if(n=$(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return C(c),t;if(f===s)return C(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,w=c.child;w;){if(w===a){x=!0,a=c,s=f;break}if(w===s){x=!0,s=c,a=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===a){x=!0,a=f,s=c;break}if(w===s){x=!0,s=f,a=c;break}w=w.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function pt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=pt(t),n!==null)return n;t=t.sibling}return null}var Ct=Array.isArray,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},Et=[],jt=-1;function zt(t){return{current:t}}function Bt(t){0>jt||(t.current=Et[jt],Et[jt]=null,jt--)}function $t(t,n){jt++,Et[jt]=t.current,t.current=n}var oe=zt(null),J=zt(null),Ge=zt(null),ae=zt(null);function ue(t,n){switch($t(Ge,n),$t(J,t),$t(oe,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Dm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Dm(t),n=Lm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Bt(oe),$t(oe,n)}function Jt(){Bt(oe),Bt(J),Bt(Ge)}function xt(t){t.memoizedState!==null&&$t(ae,t);var n=oe.current,a=Lm(n,t.type);n!==a&&($t(J,t),$t(oe,a))}function Tt(t){J.current===t&&(Bt(oe),Bt(J)),ae.current===t&&(Bt(ae),Eo._currentValue=ft)}var T=Object.prototype.hasOwnProperty,E=o.unstable_scheduleCallback,Z=o.unstable_cancelCallback,ht=o.unstable_shouldYield,it=o.unstable_requestPaint,dt=o.unstable_now,wt=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,St=o.unstable_NormalPriority,Ot=o.unstable_LowPriority,Mt=o.unstable_IdlePriority,kt=o.log,te=o.unstable_setDisableYieldValue,Ht=null,Wt=null;function Ft(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Ht,t,void 0,(t.current.flags&128)===128)}catch{}}function ce(t){if(typeof kt=="function"&&te(t),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Ht,t)}catch{}}var N=Math.clz32?Math.clz32:ne,Lt=Math.log,It=Math.LN2;function ne(t){return t>>>=0,t===0?32:31-(Lt(t)/It|0)|0}var U=128,Dt=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,x=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~c,a!==0?s=bt(a):(f&=w,f!==0?s=bt(f):t||(x=w&~x,x!==0&&(s=bt(x))))):(w=a&~c,w!==0?s=bt(w):f!==0?s=bt(f):t||(x=a&~x,x!==0&&(s=bt(x)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,x=n&-n,c>=x||c===32&&(x&4194176)!==0)?n:s}function re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function ze(){var t=Dt;return Dt<<=1,!(Dt&62914560)&&(Dt=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qe(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,z=t.expirationTimes,Y=t.hiddenUpdates;for(a=x&~a;0<a;){var gt=31-N(a),Rt=1<<gt;w[gt]=0,z[gt]=-1;var st=Y[gt];if(st!==null)for(Y[gt]=null,gt=0;gt<st.length;gt++){var mt=st[gt];mt!==null&&(mt.lane&=-536870913)}a&=~Rt}s!==0&&nn(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function nn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-N(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function Pi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-N(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Nt(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Xt(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Zm(t.type))}function Yt(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var qt=Math.random().toString(36).slice(2),Ut="__reactFiber$"+qt,Pt="__reactProps$"+qt,pe="__reactContainer$"+qt,Se="__reactEvents$"+qt,Be="__reactListeners$"+qt,R="__reactHandles$"+qt,K="__reactResources$"+qt,tt="__reactMarker$"+qt;function at(t){delete t[Ut],delete t[Pt],delete t[Se],delete t[Be],delete t[R]}function et(t){var n=t[Ut];if(n)return n;for(var a=t.parentNode;a;){if(n=a[pe]||a[Ut]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Om(t);t!==null;){if(a=t[Ut])return a;t=Om(t)}return n}t=a,a=t.parentNode}return null}function Gt(t){if(t=t[Ut]||t[pe]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ie(t){var n=t[K];return n||(n=t[K]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Kt(t){t[tt]=!0}var _e=new Set,fe={};function de(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(fe[t]=n,t=0;t<n.length;t++)_e.add(n[t])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ve=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),On={},Te={};function Ee(t){return T.call(Te,t)?!0:T.call(On,t)?!1:Ve.test(t)?Te[t]=!0:(On[t]=!0,!1)}function oa(t,n,a){if(Ee(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Mn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Pn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function la(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(t){var n=la(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function on(t){t._valueTracker||(t._valueTracker=Ns(t))}function bi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=la(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gn=/[\n"\\]/g;function Rn(t){return t.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Os(t,n,a,s,c,f,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Pn(n)):t.value!==""+Pn(n)&&(t.value=""+Pn(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,x,Pn(n)):a!=null?Cc(t,x,Pn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Pn(w):t.removeAttribute("name")}function Ps(t,n,a,s,c,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Pn(a):"",n=n!=null?""+Pn(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=w?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Cc(t,n,a){n==="number"&&ca(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function br(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Pn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function zd(t,n,a){if(n!=null&&(n=""+Pn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Pn(a):""}function Bd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Pn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Id(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Fd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,wr=null;function Hd(t){var n=Gt(t);if(n&&(t=n.stateNode)){var a=t[Pt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Os(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Pt]||null;if(!c)throw Error(r(90));Os(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&bi(s)}break t;case"textarea":zd(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&br(t,!!a.multiple,n,!1)}}}var Nc=!1;function Gd(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||wr!==null)&&(bl(),Ar&&(n=Ar,t=wr,wr=Ar=null,Hd(n),t)))for(n=0;n<t.length;n++)Hd(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Pt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Je)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oc=!1}var ua=null,Pc=null,Vo=null;function Vd(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function kd(){return!1}function Vn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:kd,this.isPropagationStopped=kd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Vn(Xa),Fs=b({},Xa,{view:0,detail:0}),C0=Vn(Fs),zc,Bc,Is,qo=b({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(zc=t.screenX-Is.screenX,Bc=t.screenY-Is.screenY):Bc=zc=0,Is=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Xd=Vn(qo),D0=b({},qo,{dataTransfer:0}),L0=Vn(D0),U0=b({},Fs,{relatedTarget:0}),Fc=Vn(U0),N0=b({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=Vn(N0),P0=b({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=Vn(P0),B0=b({},Xa,{data:0}),Wd=Vn(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=b({},Fs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Vn(V0),X0=b({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Vn(X0),W0=b({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=Vn(W0),Y0=b({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=Vn(Y0),Z0=b({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=Vn(Z0),Q0=b({},Xa,{newState:0,oldState:0}),J0=Vn(Q0),$0=[9,13,27,32],Hc=Je&&"CompositionEvent"in window,Hs=null;Je&&"documentMode"in document&&(Hs=document.documentMode);var tv=Je&&"TextEvent"in window&&!Hs,Yd=Je&&(!Hc||Hs&&8<Hs&&11>=Hs),jd=" ",Zd=!1;function Kd(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function ev(t,n){switch(t){case"compositionend":return Qd(n);case"keypress":return n.which!==32?null:(Zd=!0,jd);case"textInput":return t=n.data,t===jd&&Zd?null:t;default:return null}}function nv(t,n){if(Rr)return t==="compositionend"||!Hc&&Kd(t,n)?(t=Vd(),Vo=Pc=ua=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yd&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function $d(t,n,a,s){Ar?wr?wr.push(s):wr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function av(t){Tm(t,0)}function Yo(t){var n=Qt(t);if(bi(n))return t}function th(t,n){if(t==="change")return n}var eh=!1;if(Je){var Gc;if(Je){var Vc="oninput"in document;if(!Vc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),Vc=typeof nh.oninput=="function"}Gc=Vc}else Gc=!1;eh=Gc&&(!document.documentMode||9<document.documentMode)}function ih(){Gs&&(Gs.detachEvent("onpropertychange",ah),Vs=Gs=null)}function ah(t){if(t.propertyName==="value"&&Yo(Vs)){var n=[];$d(n,Vs,t,Uc(t)),Gd(av,n)}}function rv(t,n,a){t==="focusin"?(ih(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",ah)):t==="focusout"&&ih()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Vs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:cv;function ks(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!T.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,n){var a=rh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rh(a)}}function oh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?oh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ca(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ca(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=lh(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&oh(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=sh(n,f);var x=sh(n,s);c&&x&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=Je&&"documentMode"in document&&11>=document.documentMode,Cr=null,Xc=null,Xs=null,Wc=!1;function ch(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Cr==null||Cr!==ca(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&ks(Xs,s)||(Xs=s,s=Cl(Xc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Wa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},qc={},uh={};Je&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in uh)return qc[t]=n[a];return t}var fh=qa("animationend"),dh=qa("animationiteration"),hh=qa("animationstart"),dv=qa("transitionrun"),hv=qa("transitionstart"),pv=qa("transitioncancel"),ph=qa("transitionend"),mh=new Map,gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(t,n){mh.set(t,n),de(n,[t])}var ni=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&_h(a,c,f)}}function Zo(t,n,a,s){ni[Lr++]=t,ni[Lr++]=n,ni[Lr++]=a,ni[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function fa(t,n){return Zo(t,null,null,n),Ko(t)}function _h(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-N(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<go)throw go=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},vh=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=vh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ot(n)},vh.set(t,n),n)}return{value:t,source:n,stack:ot(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ai=[],ri=0,Ya=null,zi=1,Bi="";function ja(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function yh(t,n,a){ai[ri++]=zi,ai[ri++]=Bi,ai[ri++]=Ya,Ya=t;var s=zi;t=Bi;var c=32-N(s)-1;s&=~(1<<c),a+=1;var f=32-N(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,zi=1<<32-N(n)+c|a<<c|s,Bi=f+t}else zi=1<<f|a<<c|s,Bi=t}function Zc(t){t.return!==null&&(ja(t,1),yh(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===Ya;)Ya=ai[--ri],ai[ri]=null,Bi=ai[--ri],ai[ri]=null,zi=ai[--ri],ai[ri]=null}var zn=null,En=null,Fe=!1,gi=null,Ti=!1,Qc=Error(r(519));function Za(t){var n=Error(r(418,""));throw Ys(ii(n,t)),Qc}function xh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ut]=t,n[Pt]=s,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)Ne(vo[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),Ps(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),on(n);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Bd(n,s.value,s.defaultValue,s.children),on(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cm(n.textContent,a)?(s.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),s.onScroll!=null&&Ne("scroll",n),s.onScrollEnd!=null&&Ne("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Za(t)}function Sh(t){for(zn=t.return;zn;)switch(zn.tag){case 3:case 27:Ti=!0;return;case 5:case 13:Ti=!1;return;default:zn=zn.return}}function Ws(t){if(t!==zn)return!1;if(!Fe)return Sh(t),Fe=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&En&&Za(t),Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){En=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}En=null}}else En=zn?vi(t.stateNode.nextSibling):null;return!0}function qs(){En=zn=null,Fe=!1}function Ys(t){gi===null?gi=[t]:gi.push(t)}var js=Error(r(460)),Mh=Error(r(474)),Jc={then:function(){}};function Eh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function bh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t}throw Zs=n,js}}var Zs=null;function Th(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}var Pr=null,Ks=0;function tl(t){var n=Ks;return Ks+=1,Pr===null&&(Pr=[]),bh(Pr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ah(t){var n=t._init;return n(t._payload)}function wh(t){function n(Q,W){if(t){var nt=Q.deletions;nt===null?(Q.deletions=[W],Q.flags|=16):nt.push(W)}}function a(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function s(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function c(Q,W){return Q=Ea(Q,W),Q.index=0,Q.sibling=null,Q}function f(Q,W,nt){return Q.index=nt,t?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<W?(Q.flags|=33554434,W):nt):(Q.flags|=33554434,W)):(Q.flags|=1048576,W)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=33554434),Q}function w(Q,W,nt,yt){return W===null||W.tag!==6?(W=qu(nt,Q.mode,yt),W.return=Q,W):(W=c(W,nt),W.return=Q,W)}function z(Q,W,nt,yt){var ee=nt.type;return ee===p?gt(Q,W,nt.props.children,yt,nt.key):W!==null&&(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===O&&Ah(ee)===W.type)?(W=c(W,nt.props),Qs(W,nt),W.return=Q,W):(W=yl(nt.type,nt.key,nt.props,null,Q.mode,yt),Qs(W,nt),W.return=Q,W)}function Y(Q,W,nt,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=Yu(nt,Q.mode,yt),W.return=Q,W):(W=c(W,nt.children||[]),W.return=Q,W)}function gt(Q,W,nt,yt,ee){return W===null||W.tag!==7?(W=rr(nt,Q.mode,yt,ee),W.return=Q,W):(W=c(W,nt),W.return=Q,W)}function Rt(Q,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=qu(""+W,Q.mode,nt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case h:return nt=yl(W.type,W.key,W.props,null,Q.mode,nt),Qs(nt,W),nt.return=Q,nt;case d:return W=Yu(W,Q.mode,nt),W.return=Q,W;case O:var yt=W._init;return W=yt(W._payload),Rt(Q,W,nt)}if(Ct(W)||I(W))return W=rr(W,Q.mode,nt,null),W.return=Q,W;if(typeof W.then=="function")return Rt(Q,tl(W),nt);if(W.$$typeof===M)return Rt(Q,gl(Q,W),nt);el(Q,W)}return null}function st(Q,W,nt,yt){var ee=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ee!==null?null:w(Q,W,""+nt,yt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case h:return nt.key===ee?z(Q,W,nt,yt):null;case d:return nt.key===ee?Y(Q,W,nt,yt):null;case O:return ee=nt._init,nt=ee(nt._payload),st(Q,W,nt,yt)}if(Ct(nt)||I(nt))return ee!==null?null:gt(Q,W,nt,yt,null);if(typeof nt.then=="function")return st(Q,W,tl(nt),yt);if(nt.$$typeof===M)return st(Q,W,gl(Q,nt),yt);el(Q,nt)}return null}function mt(Q,W,nt,yt,ee){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return Q=Q.get(nt)||null,w(W,Q,""+yt,ee);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case h:return Q=Q.get(yt.key===null?nt:yt.key)||null,z(W,Q,yt,ee);case d:return Q=Q.get(yt.key===null?nt:yt.key)||null,Y(W,Q,yt,ee);case O:var Re=yt._init;return yt=Re(yt._payload),mt(Q,W,nt,yt,ee)}if(Ct(yt)||I(yt))return Q=Q.get(nt)||null,gt(W,Q,yt,ee,null);if(typeof yt.then=="function")return mt(Q,W,nt,tl(yt),ee);if(yt.$$typeof===M)return mt(Q,W,nt,gl(W,yt),ee);el(W,yt)}return null}function se(Q,W,nt,yt){for(var ee=null,Re=null,le=W,me=W=0,xn=null;le!==null&&me<nt.length;me++){le.index>me?(xn=le,le=null):xn=le.sibling;var Ie=st(Q,le,nt[me],yt);if(Ie===null){le===null&&(le=xn);break}t&&le&&Ie.alternate===null&&n(Q,le),W=f(Ie,W,me),Re===null?ee=Ie:Re.sibling=Ie,Re=Ie,le=xn}if(me===nt.length)return a(Q,le),Fe&&ja(Q,me),ee;if(le===null){for(;me<nt.length;me++)le=Rt(Q,nt[me],yt),le!==null&&(W=f(le,W,me),Re===null?ee=le:Re.sibling=le,Re=le);return Fe&&ja(Q,me),ee}for(le=s(le);me<nt.length;me++)xn=mt(le,Q,me,nt[me],yt),xn!==null&&(t&&xn.alternate!==null&&le.delete(xn.key===null?me:xn.key),W=f(xn,W,me),Re===null?ee=xn:Re.sibling=xn,Re=xn);return t&&le.forEach(function(Da){return n(Q,Da)}),Fe&&ja(Q,me),ee}function ve(Q,W,nt,yt){if(nt==null)throw Error(r(151));for(var ee=null,Re=null,le=W,me=W=0,xn=null,Ie=nt.next();le!==null&&!Ie.done;me++,Ie=nt.next()){le.index>me?(xn=le,le=null):xn=le.sibling;var Da=st(Q,le,Ie.value,yt);if(Da===null){le===null&&(le=xn);break}t&&le&&Da.alternate===null&&n(Q,le),W=f(Da,W,me),Re===null?ee=Da:Re.sibling=Da,Re=Da,le=xn}if(Ie.done)return a(Q,le),Fe&&ja(Q,me),ee;if(le===null){for(;!Ie.done;me++,Ie=nt.next())Ie=Rt(Q,Ie.value,yt),Ie!==null&&(W=f(Ie,W,me),Re===null?ee=Ie:Re.sibling=Ie,Re=Ie);return Fe&&ja(Q,me),ee}for(le=s(le);!Ie.done;me++,Ie=nt.next())Ie=mt(le,Q,me,Ie.value,yt),Ie!==null&&(t&&Ie.alternate!==null&&le.delete(Ie.key===null?me:Ie.key),W=f(Ie,W,me),Re===null?ee=Ie:Re.sibling=Ie,Re=Ie);return t&&le.forEach(function(Ry){return n(Q,Ry)}),Fe&&ja(Q,me),ee}function sn(Q,W,nt,yt){if(typeof nt=="object"&&nt!==null&&nt.type===p&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case h:t:{for(var ee=nt.key;W!==null;){if(W.key===ee){if(ee=nt.type,ee===p){if(W.tag===7){a(Q,W.sibling),yt=c(W,nt.props.children),yt.return=Q,Q=yt;break t}}else if(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===O&&Ah(ee)===W.type){a(Q,W.sibling),yt=c(W,nt.props),Qs(yt,nt),yt.return=Q,Q=yt;break t}a(Q,W);break}else n(Q,W);W=W.sibling}nt.type===p?(yt=rr(nt.props.children,Q.mode,yt,nt.key),yt.return=Q,Q=yt):(yt=yl(nt.type,nt.key,nt.props,null,Q.mode,yt),Qs(yt,nt),yt.return=Q,Q=yt)}return x(Q);case d:t:{for(ee=nt.key;W!==null;){if(W.key===ee)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(Q,W.sibling),yt=c(W,nt.children||[]),yt.return=Q,Q=yt;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}yt=Yu(nt,Q.mode,yt),yt.return=Q,Q=yt}return x(Q);case O:return ee=nt._init,nt=ee(nt._payload),sn(Q,W,nt,yt)}if(Ct(nt))return se(Q,W,nt,yt);if(I(nt)){if(ee=I(nt),typeof ee!="function")throw Error(r(150));return nt=ee.call(nt),ve(Q,W,nt,yt)}if(typeof nt.then=="function")return sn(Q,W,tl(nt),yt);if(nt.$$typeof===M)return sn(Q,W,gl(Q,nt),yt);el(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(Q,W.sibling),yt=c(W,nt),yt.return=Q,Q=yt):(a(Q,W),yt=qu(nt,Q.mode,yt),yt.return=Q,Q=yt),x(Q)):a(Q,W)}return function(Q,W,nt,yt){try{Ks=0;var ee=sn(Q,W,nt,yt);return Pr=null,ee}catch(le){if(le===js)throw le;var Re=ci(29,le,null,Q.mode);return Re.lanes=yt,Re.return=Q,Re}finally{}}}var Ka=wh(!0),Rh=wh(!1),zr=zt(null),nl=zt(0);function Ch(t,n){t=ji,$t(nl,t),$t(zr,n),ji=t|n.baseLanes}function $c(){$t(nl,ji),$t(zr,zr.current)}function tu(){ji=nl.current,Bt(zr),Bt(nl)}var si=zt(null),Ai=null;function da(t){var n=t.alternate;$t(pn,pn.current&1),$t(si,t),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Dh(t){if(t.tag===22){if($t(pn,pn.current),$t(si,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else ha()}function ha(){$t(pn,pn.current),$t(si,si.current)}function Fi(t){Bt(si),Ai===t&&(Ai=null),Bt(pn)}var pn=zt(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,mn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var $s=null,nu=0,Br=0,Fr=null;function vv(t,n){if($s===null){var a=$s=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Lh,Lh),n}function Lh(){if(--nu===0&&$s!==null){Fr!==null&&(Fr.status="fulfilled");var t=$s;$s=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Uh=lt.S;lt.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Uh!==null&&Uh(t,n)};var Qa=zt(null);function iu(){var t=Qa.current;return t!==null?t:Ze.pooledCache}function al(t,n){n===null?$t(Qa,Qa.current):$t(Qa,n.pool)}function Nh(){var t=iu();return t===null?null:{parent:mn._currentValue,pool:t}}var pa=0,Ae=null,ke=null,un=null,rl=!1,Ir=!1,Ja=!1,sl=0,to=0,Hr=null,xv=0;function ln(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return pa=f,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lt.H=t===null||t.memoizedState===null?$a:ma,Ja=!1,f=a(s,c),Ja=!1,Ir&&(f=Ph(n,a,s,c)),Oh(t),f}function Oh(t){lt.H=wi;var n=ke!==null&&ke.next!==null;if(pa=0,un=ke=Ae=null,rl=!1,to=0,Hr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&ml(t)&&(vn=!0))}function Ph(t,n,a,s){Ae=t;var c=0;do{if(Ir&&(Hr=null),to=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,un=ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}lt.H=tr,f=n(a,s)}while(Ir);return f}function Sv(){var t=lt.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(Ae.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}pa=0,un=ke=Ae=null,Ir=!1,to=sl=0,Hr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Ae.memoizedState=un=t:un=un.next=t,un}function fn(){if(ke===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=un===null?Ae.memoizedState:un.next;if(n!==null)un=n,ke=t;else{if(t===null)throw Ae.alternate===null?Error(r(467)):Error(r(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?Ae.memoizedState=un=t:un=un.next=t}return un}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function eo(t){var n=to;return to+=1,Hr===null&&(Hr=[]),t=bh(Hr,t,n),n=Ae,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,lt.H=n===null||n.memoizedState===null?$a:ma),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===M)return Cn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ae.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=fn();return uu(n,ke,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var w=x=null,z=null,Y=n,gt=!1;do{var Rt=Y.lane&-536870913;if(Rt!==Y.lane?(Pe&Rt)===Rt:(pa&Rt)===Rt){var st=Y.revertLane;if(st===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),Rt===Br&&(gt=!0);else if((pa&st)===st){Y=Y.next,st===Br&&(gt=!0);continue}else Rt={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(w=z=Rt,x=f):z=z.next=Rt,Ae.lanes|=st,ba|=st;Rt=Y.action,Ja&&a(f,Rt),f=Y.hasEagerState?Y.eagerState:a(f,Rt)}else st={lane:Rt,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(w=z=st,x=f):z=z.next=st,Ae.lanes|=Rt,ba|=Rt;Y=Y.next}while(Y!==null&&Y!==n);if(z===null?x=f:z.next=w,!Yn(f,t.memoizedState)&&(vn=!0,gt&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Yn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zh(t,n,a){var s=Ae,c=fn(),f=Fe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((ke||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,pu(Ih.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Fh.bind(null,s,c,a,n),{destroy:void 0},null),Ze===null)throw Error(r(349));f||pa&60||Bh(s,n,a)}return a}function Bh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=ol(),Ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fh(t,n,a,s){n.value=a,n.getSnapshot=s,Hh(n)&&Gh(t)}function Ih(t,n,a){return a(function(){Hh(n)&&Gh(t)})}function Hh(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Gh(t){var n=fa(t,2);n!==null&&Bn(n,t,2)}function du(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ja){ce(!0);try{a()}finally{ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function Vh(t,n,a,s){return t.baseState=a,uu(t,ke,typeof s=="function"?s:Ii)}function Mv(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};lt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=lt.T,x={};lt.T=x;try{var w=a(c,s),z=lt.S;z!==null&&z(x,w),Xh(t,n,w)}catch(Y){hu(t,n,Y)}finally{lt.T=f}}else try{f=a(c,s),Xh(t,n,f)}catch(Y){hu(t,n,Y)}}function Xh(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wh(t,n,s)},function(s){return hu(t,n,s)}):Wh(t,n,a)}function Wh(t,n,a){n.status="fulfilled",n.value=a,qh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kh(t,a)))}function hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qh(n),n=n.next;while(n!==s)}t.action=null}function qh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yh(t,n){return n}function jh(t,n){if(Fe){var a=Ze.formState;if(a!==null){t:{var s=Ae;if(Fe){if(En){e:{for(var c=En,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){En=vi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yh,lastRenderedState:n},a.queue=s,a=dp.bind(null,Ae,s),s.dispatch=a,s=du(!1),f=yu.bind(null,Ae,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Mv.bind(null,Ae,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zh(t){var n=fn();return Kh(n,ke,t)}function Kh(t,n,a){n=uu(t,n,Yh)[0],t=cl(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?eo(n):n;var s=fn(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(Ae.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Qh(t){var n=fn(),a=ke;if(a!==null)return Kh(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=Ae.updateQueue,n===null&&(n=ol(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jh(){return fn().memoizedState}function ul(t,n,a,s){var c=kn();Ae.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=fn();s=s===void 0?null:s;var f=c.memoizedState.inst;ke!==null&&s!==null&&au(s,ke.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(Ae.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function $h(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function tp(t,n){return fl(4,2,t,n)}function ep(t,n){return fl(4,4,t,n)}function np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ip(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,np.bind(null,n,t),a)}function mu(){}function ap(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function rp(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Ja){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||pa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=om(),Ae.lanes|=t,ba|=t,a)}function sp(t,n,a,s){return Yn(a,n)?a:zr.current!==null?(t=gu(t,a,s),Yn(t,n)||(vn=!0),t):pa&42?(t=om(),Ae.lanes|=t,ba|=t,n):(vn=!0,t.memoizedState=a)}function op(t,n,a,s,c){var f=k.p;k.p=f!==0&&8>f?f:8;var x=lt.T,w={};lt.T=w,yu(t,!1,n,a);try{var z=c(),Y=lt.S;if(Y!==null&&Y(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var gt=yv(z,s);no(t,n,gt,Qn(t))}else no(t,n,s,Qn(t))}catch(Rt){no(t,n,{then:function(){},status:"rejected",reason:Rt},Qn())}finally{k.p=f,lt.T=x}}function bv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=lp(t).queue;op(t,c,n,ft,a===null?bv:function(){return cp(t),a(s)})}function lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:ft},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cp(t){var n=lp(t).next.queue;no(t,n,{},Qn())}function vu(){return Cn(Eo)}function up(){return fn().memoizedState}function fp(){return fn().memoizedState}function Tv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=va(a);var s=ya(n,t,a);s!==null&&(Bn(s,n,a),ro(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?hp(n,a):(a=jc(t,n,a,s),a!==null&&(Bn(a,t,s),pp(a,n,s)))}function dp(t,n,a){var s=Qn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))hp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,w=f(x,a);if(c.hasEagerState=!0,c.eagerState=w,Yn(w,x))return Zo(t,n,c,0),Ze===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return Bn(a,t,s),pp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&Bn(n,t,2)}function dl(t){var n=t.alternate;return t===Ae||n!==null&&n===Ae}function hp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Pi(t,a)}}var wi={readContext:Cn,use:ll,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln};wi.useCacheRefresh=ln,wi.useMemoCache=ln,wi.useHostTransitionStatus=ln,wi.useFormState=ln,wi.useActionState=ln,wi.useOptimistic=ln;var $a={readContext:Cn,use:ll,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:$h,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Ja){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var c=a(n);if(Ja){ce(!0);try{a(n)}finally{ce(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,Ae,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=du(t);var n=t.queue,a=dp.bind(null,Ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=kn();return gu(a,t,n)},useTransition:function(){var t=du(!1);return t=op.bind(null,Ae,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Ae,c=kn();if(Fe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));Pe&60||Bh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$h(Ih.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Fh.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=kn(),n=Ze.identifierPrefix;if(Fe){var a=Bi,s=zi;a=(s&~(1<<32-N(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=xv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return kn().memoizedState=Tv.bind(null,Ae)}};$a.useMemoCache=cu,$a.useHostTransitionStatus=vu,$a.useFormState=jh,$a.useActionState=jh,$a.useOptimistic=function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,Ae,!0,a),a.dispatch=n,[t,n]};var ma={readContext:Cn,use:ll,useCallback:ap,useContext:Cn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:cl,useRef:Jh,useState:function(){return cl(Ii)},useDebugValue:mu,useDeferredValue:function(t,n){var a=fn();return sp(a,ke.memoizedState,t,n)},useTransition:function(){var t=cl(Ii)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zh,useId:up};ma.useCacheRefresh=fp,ma.useMemoCache=cu,ma.useHostTransitionStatus=vu,ma.useFormState=Zh,ma.useActionState=Zh,ma.useOptimistic=function(t,n){var a=fn();return Vh(a,ke,t,n)};var tr={readContext:Cn,use:ll,useCallback:ap,useContext:Cn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:fu,useRef:Jh,useState:function(){return fu(Ii)},useDebugValue:mu,useDeferredValue:function(t,n){var a=fn();return ke===null?gu(a,t,n):sp(a,ke.memoizedState,t,n)},useTransition:function(){var t=fu(Ii)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zh,useId:up};tr.useCacheRefresh=fp,tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Qh,tr.useActionState=Qh,tr.useOptimistic=function(t,n){var a=fn();return ke!==null?Vh(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])};function xu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Su={isMounted:function(t){return(t=t._reactInternals)?$(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Bn(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Bn(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(Bn(n,t,a),ro(n,t,a))}};function mp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function gp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Su.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _p(t){hl(t)}function vp(t){console.error(t)}function yp(t){hl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Sp(t){return t=va(t),t.tag=3,t}function Mp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){xp(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){xp(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function wv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ai===null?af():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Fe)return n=si.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Ys(ii(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Ys(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Mu(t.stateNode,s,c),Bu(t,c),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),po===null?po=[f]:po.push(f),rn!==4&&(rn=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sp(c),Mp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Ep=Error(r(461)),vn=!1;function bn(t,n,a,s){n.child=t===null?Rh(n,null,a,s):Ka(n,t.child,a,s)}function bp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var w in s)w!=="ref"&&(x[w]=s[w])}else x=s;return ir(n),s=ru(t,n,a,x,f,c),w=su(),t!==null&&!vn?(ou(t,n,c),Hi(t,n,c)):(Fe&&w&&Zc(n),n.flags|=1,bn(t,n,s,c),n.child)}function Tp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ap(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(x,s)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Ea(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ap(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ks(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(vn=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return Eu(t,n,a,s,c)}function wp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,x=t!==null?t.memoizedState:null;if(io(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=x!==null?x.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Rp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,x!==null?x.cachePool:null),x!==null?Ch(n,x):$c(),Dh(n);else return n.lanes=n.childLanes=536870912,Rp(t,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(al(n,x.cachePool),Ch(n,x),ha(),n.memoizedState=null):(t!==null&&al(n,null),$c(),ha());return bn(t,n,c,a),n.child}function Rp(t,n,a,s){var c=iu();return c=c===null?null:{parent:mn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Dh(n),t!==null&&ao(t,n,s,!0),null}function io(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ir(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!vn?(ou(t,n,c),Hi(t,n,c)):(Fe&&s&&Zc(n),n.flags|=1,bn(t,n,a,c),n.child)}function Cp(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Ph(n,s,a,c),Oh(t),s=su(),t!==null&&!vn?(ou(t,n,f),Hi(t,n,f)):(Fe&&s&&Zc(n),n.flags|=1,bn(t,n,a,f),n.child)}function Dp(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Ur,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Su,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):Ur,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(xu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Su.enqueueReplaceState(f,f.state,null),oo(n,s,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,z=er(a,w);f.props=z;var Y=f.context,gt=a.contextType;x=Ur,typeof gt=="object"&&gt!==null&&(x=Cn(gt));var Rt=a.getDerivedStateFromProps;gt=typeof Rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||Y!==x)&&gp(n,f,s,x),_a=!1;var st=n.memoizedState;f.state=st,oo(n,s,f,c),so(),Y=n.memoizedState,w||st!==Y||_a?(typeof Rt=="function"&&(xu(n,a,Rt,s),Y=n.memoizedState),(z=_a||mp(n,a,z,s,st,Y,x))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Y),f.props=s,f.state=Y,f.context=x,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),x=n.memoizedProps,gt=er(a,x),f.props=gt,Rt=n.pendingProps,st=f.context,Y=a.contextType,z=Ur,typeof Y=="object"&&Y!==null&&(z=Cn(Y)),w=a.getDerivedStateFromProps,(Y=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Rt||st!==z)&&gp(n,f,s,z),_a=!1,st=n.memoizedState,f.state=st,oo(n,s,f,c),so();var mt=n.memoizedState;x!==Rt||st!==mt||_a||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof w=="function"&&(xu(n,a,w,s),mt=n.memoizedState),(gt=_a||mp(n,a,gt,s,st,mt,z)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,mt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,mt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=mt),f.props=s,f.state=mt,f.context=z,s=gt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,io(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ka(n,t.child,null,c),n.child=Ka(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function Lp(t,n,a,s){return qs(),n.flags|=256,bn(t,n,a,s),n.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Tu(t){return{baseLanes:t,cachePool:Nh()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Up(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Fe){if(c?da(n):ha(),Fe){var w=En,z;if(z=w){t:{for(z=w,w=Ti;z.nodeType!==8;){if(!w){w=null;break t}if(z=vi(z.nextSibling),z===null){w=null;break t}}w=z}w!==null?(n.memoizedState={dehydrated:w,treeContext:Ya!==null?{id:zi,overflow:Bi}:null,retryLane:536870912},z=ci(18,null,null,0),z.stateNode=w,z.return=n,n.child=z,zn=n,En=null,z=!0):z=!1}z||Za(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return w=s.children,s=s.fallback,c?(ha(),c=n.mode,w=Ru({mode:"hidden",children:w},c),s=rr(s,c,a,null),w.return=n,s.return=n,w.sibling=s,n.child=w,c=n.child,c.memoizedState=Tu(a),c.childLanes=Au(t,x,a),n.memoizedState=bu,s):(da(n),wu(n,w))}if(z=t.memoizedState,z!==null&&(w=z.dehydrated,w!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),c=s.fallback,w=n.mode,s=Ru({mode:"visible",children:s.children},w),c=rr(c,w,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ka(n,t.child,null,a),s=n.child,s.memoizedState=Tu(a),s.childLanes=Au(t,x,a),n.memoizedState=bu,n=c);else if(da(n),w.data==="$!"){if(x=w.nextSibling&&w.nextSibling.dataset,x)var Y=x.dgst;x=Y,s=Error(r(419)),s.stack="",s.digest=x,Ys({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(vn||ao(t,n,a,!1),x=(a&t.childLanes)!==0,vn||x){if(x=Ze,x!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(x.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,fa(t,s),Bn(x,t,s),Ep}w.data==="$?"||af(),n=Cu(t,n,a)}else w.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),w._reactRetry=n,n=null):(t=z.treeContext,En=vi(w.nextSibling),zn=n,Fe=!0,gi=null,Ti=!1,t!==null&&(ai[ri++]=zi,ai[ri++]=Bi,ai[ri++]=Ya,zi=t.id,Bi=t.overflow,Ya=n),n=wu(n,s.children),n.flags|=4096);return n}return c?(ha(),c=s.fallback,w=n.mode,z=t.child,Y=z.sibling,s=Ea(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,Y!==null?c=Ea(Y,c):(c=rr(c,w,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,w=t.child.memoizedState,w===null?w=Tu(a):(z=w.cachePool,z!==null?(Y=mn._currentValue,z=z.parent!==Y?{parent:Y,pool:Y}:z):z=Nh(),w={baseLanes:w.baseLanes|a,cachePool:z}),c.memoizedState=w,c.childLanes=Au(t,x,a),n.memoizedState=bu,s):(da(n),a=t.child,t=a.sibling,a=Ea(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return am(t,n,0,null)}function Cu(t,n,a){return Ka(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Np(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Op(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(t,n,s.children,a),s=pn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,a,n);else if(t.tag===19)Np(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch($t(pn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,!(a&n.childLanes))if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Rv(t,n,a){switch(n.tag){case 3:ue(n,n.stateNode.containerInfo),ga(n,mn,t.memoizedState.cache),qs();break;case 27:case 5:xt(n);break;case 4:ue(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):a&n.child.childLanes?Up(t,n,a):(da(n),t=Hi(t,n,a),t!==null?t.sibling:null);da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ao(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Op(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$t(pn,pn.current),s)break;return null;case 22:case 23:return n.lanes=0,wp(t,n,a);case 24:ga(n,mn,t.memoizedState.cache)}return Hi(t,n,a)}function Pp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return vn=!1,Rv(t,n,a);vn=!!(t.flags&131072)}else vn=!1,Fe&&n.flags&1048576&&yh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Wu(s)?(t=er(s,t),n.tag=1,n=Dp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===A){n.tag=11,n=bp(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=Tp(null,n,s,t,a);break t}}throw n=H(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Dp(t,n,s,c,a);case 3:t:{if(ue(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),oo(n,f,null,a);var x=n.memoizedState;if(f=x.cache,ga(n,mn,f),f!==c.cache&&Ou(n,[mn],a,!0),so(),f=x.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Lp(t,n,f,a);break t}else if(f!==s){s=ii(Error(r(424)),n),Ys(s),n=Lp(t,n,f,a);break t}else for(En=vi(n.stateNode.containerInfo.firstChild),zn=n,Fe=!0,gi=null,Ti=!0,a=Rh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),f===s){n=Hi(t,n,a);break t}bn(t,n,f,a)}n=n.child}return n;case 26:return io(t,n),t===null?(a=Fm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Fe||(a=n.type,t=n.pendingProps,s=Ll(Ge.current).createElement(a),s[Ut]=n,s[Pt]=t,Tn(s,a,t),Kt(s),n.stateNode=s):n.memoizedState=Fm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return xt(n),t===null&&Fe&&(s=n.stateNode=Pm(n.type,n.pendingProps,Ge.current),zn=n,Ti=!0,En=vi(s.firstChild)),s=n.pendingProps.children,t!==null||Fe?bn(t,n,s,a):n.child=Ka(n,null,s,a),io(t,n),n.child;case 5:return t===null&&Fe&&((c=s=En)&&(s=ay(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,zn=n,En=vi(s.firstChild),Ti=!1,c=!0):c=!1),c||Za(n)),xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:x!==null&&vf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,Sv,null,null,a),Eo._currentValue=c),io(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&Fe&&((t=a=En)&&(a=ry(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,zn=n,En=null,t=!0):t=!1),t||Za(n)),null;case 13:return Up(t,n,a);case 4:return ue(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ka(n,null,s,a):bn(t,n,s,a),n.child;case 11:return bp(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Cn(c),s=s(c),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Tp(t,n,n.type,n.pendingProps,a);case 15:return Ap(t,n,n.type,n.pendingProps,a);case 19:return Op(t,n,a);case 22:return wp(t,n,a);case 24:return ir(n),s=Cn(mn),t===null?(c=iu(),c===null&&(c=Ze,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ga(n,mn,c)):(t.lanes&a&&(zu(t,n),oo(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,mn,s)):(s=f.cache,ga(n,mn,s),s!==c.cache&&Ou(n,[mn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=zt(null),nr=null,Gi=null;function ga(t,n,a){$t(Uu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Uu.current,Bt(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var z=0;z<n.length;z++)if(w.context===n[z]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Nu(f.return,a,t),s||(x=null);break t}f=w.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Nu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function ao(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var w=c.type;Yn(c.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(c===ae.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return zp(nr,t)}function gl(t,n){return nr===null&&ir(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var _a=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,en&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),_h(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Pi(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function so(){if(Fu){var t=Fr;if(t!==null)throw t}}function oo(t,n,a,s){Fu=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var z=w,Y=z.next;z.next=null,x===null?f=Y:x.next=Y,x=z;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,w=gt.lastBaseUpdate,w!==x&&(w===null?gt.firstBaseUpdate=Y:w.next=Y,gt.lastBaseUpdate=z))}if(f!==null){var Rt=c.baseState;x=0,gt=Y=z=null,w=f;do{var st=w.lane&-536870913,mt=st!==w.lane;if(mt?(Pe&st)===st:(s&st)===st){st!==0&&st===Br&&(Fu=!0),gt!==null&&(gt=gt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var se=t,ve=w;st=n;var sn=a;switch(ve.tag){case 1:if(se=ve.payload,typeof se=="function"){Rt=se.call(sn,Rt,st);break t}Rt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ve.payload,st=typeof se=="function"?se.call(sn,Rt,st):se,st==null)break t;Rt=b({},Rt,st);break t;case 2:_a=!0}}st=w.callback,st!==null&&(t.flags|=64,mt&&(t.flags|=8192),mt=c.callbacks,mt===null?c.callbacks=[st]:mt.push(st))}else mt={lane:st,tag:w.tag,payload:w.payload,callback:w.callback,next:null},gt===null?(Y=gt=mt,z=Rt):gt=gt.next=mt,x|=st;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;mt=w,w=mt.next,mt.next=null,c.lastBaseUpdate=mt,c.shared.pending=null}}while(!0);gt===null&&(z=Rt),c.baseState=z,c.firstBaseUpdate=Y,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),ba|=x,t.lanes=x,t.memoizedState=Rt}}function Bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(w){je(n,n.return,w)}}function xa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,c=n;var z=a;try{w()}catch(Y){je(c,z,Y)}}}s=s.next}while(s!==f)}}catch(Y){je(n,n.return,Y)}}function Ip(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fp(n,a)}catch(s){je(t,t.return,s)}}}function Hp(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){je(t,n,s)}}function ar(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){je(t,n,f)}}function jn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){je(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){je(t,n,c)}else a.current=null}function Gp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){je(t,t.return,c)}}function Vp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[Pt]=n}catch(c){je(t,t.return,c)}}function kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var ki=!1,an=!1,Gu=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,yn=null,Wp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=lh(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,w=-1,z=-1,Y=0,gt=0,Rt=t,st=null;e:for(;;){for(var mt;Rt!==a||c!==0&&Rt.nodeType!==3||(w=x+c),Rt!==f||s!==0&&Rt.nodeType!==3||(z=x+s),Rt.nodeType===3&&(x+=Rt.nodeValue.length),(mt=Rt.firstChild)!==null;)st=Rt,Rt=mt;for(;;){if(Rt===t)break e;if(st===a&&++Y===c&&(w=x),st===f&&++gt===s&&(z=x),(mt=Rt.nextSibling)!==null)break;Rt=st,st=Rt.parentNode}Rt=mt}a=w===-1||z===-1?null:{start:w,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var se=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(se,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ve){je(a,a.return,ve)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}return se=Wp,Wp=!1,se}function qp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),s&4&&lo(5,a);break;case 1:if(Wi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(w){je(a,a.return,w)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){je(a,a.return,w)}}s&64&&Ip(a),s&512&&ar(a,a.return);break;case 3:if(Wi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fp(s,t)}catch(w){je(a,a.return,w)}}break;case 26:Wi(t,a),s&512&&ar(a,a.return);break;case 27:case 5:Wi(t,a),n===null&&s&4&&Gp(a),s&512&&ar(a,a.return);break;case 12:Wi(t,a);break;case 13:Wi(t,a),s&4&&Zp(t,a);break;case 22:if(c=a.memoizedState!==null||ki,!c){n=n!==null&&n.memoizedState!==null||an;var f=ki,x=an;ki=c,(an=n)&&!x?Sa(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),ki=f,an=x}s&512&&(a.memoizedProps.mode==="manual"?ar(a,a.return):jn(a,a.return));break;default:Wi(t,a)}}function Yp(t){var n=t.alternate;n!==null&&(t.alternate=null,Yp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&at(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dn=null,Zn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Ht,a)}catch{}switch(a.tag){case 26:an||jn(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||jn(a,n);var s=dn,c=Zn;for(dn=a.stateNode,Xi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);at(a),dn=s,Zn=c;break;case 5:an||jn(a,n);case 6:c=dn;var f=Zn;if(dn=null,Xi(t,n,a),dn=c,Zn=f,dn!==null)if(Zn)try{t=dn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(x){je(a,n,x)}else try{dn.removeChild(a.stateNode)}catch(x){je(a,n,x)}break;case 18:dn!==null&&(Zn?(n=dn,a=a.stateNode,n.nodeType===8?xf(n.parentNode,a):n.nodeType===1&&xf(n,a),wo(n)):xf(dn,a.stateNode));break;case 4:s=dn,c=Zn,dn=a.stateNode.containerInfo,Zn=!0,Xi(t,n,a),dn=s,Zn=c;break;case 0:case 11:case 14:case 15:an||xa(2,a,n),an||xa(4,a,n),Xi(t,n,a);break;case 1:an||(jn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hp(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:an||jn(a,n),an=(s=an)||a.memoizedState!==null,Xi(t,n,a),an=s;break;default:Xi(t,n,a)}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){je(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function oi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,w=x;t:for(;w!==null;){switch(w.tag){case 27:case 5:dn=w.stateNode,Zn=!1;break t;case 3:dn=w.stateNode.containerInfo,Zn=!0;break t;case 4:dn=w.stateNode.containerInfo,Zn=!0;break t}w=w.return}if(dn===null)throw Error(r(160));jp(f,x,c),dn=null,Zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Kp(n,t),n=n.sibling}var _i=null;function Kp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(n,t),li(t),s&4&&(xa(3,t,t.return),lo(3,t),xa(5,t,t.return));break;case 1:oi(n,t),li(t),s&512&&(an||a===null||jn(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(oi(n,t),li(t),s&512&&(an||a===null||jn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[tt]||f[Ut]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[Ut]=t,Kt(f),s=f;break t;case"link":var x=Gm("link","href",c).get(s+(a.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Gm("meta","content",c).get(s+(a.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(w,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ut]=t,Kt(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Hm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Hm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var Y=z.nextSibling,gt=z.nodeName;z[tt]||gt==="HEAD"||gt==="BODY"||gt==="SCRIPT"||gt==="STYLE"||gt==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=Y}for(var Rt=t.type,st=c.attributes;st.length;)c.removeAttributeNode(st[0]);Tn(c,Rt,f),c[Ut]=t,c[Pt]=f}catch(se){je(t,t.return,se)}}case 5:if(oi(n,t),li(t),s&512&&(an||a===null||jn(a,a.return)),t.flags&32){c=t.stateNode;try{Tr(c,"")}catch(se){je(t,t.return,se)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(oi(n,t),li(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(se){je(t,t.return,se)}}break;case 3:if(Ol=null,c=_i,_i=Ul(n.containerInfo),oi(n,t),_i=c,li(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(se){je(t,t.return,se)}Gu&&(Gu=!1,Qp(t));break;case 4:s=_i,_i=Ul(t.stateNode.containerInfo),oi(n,t),li(t),_i=s;break;case 12:oi(n,t),li(t);break;case 13:oi(n,t),li(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=dt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(an||a===null||jn(a,a.return)),z=t.memoizedState!==null,Y=a!==null&&a.memoizedState!==null,gt=ki,Rt=an,ki=gt||z,an=Rt||Y,oi(n,t),an=Rt,ki=gt,li(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=ki||an,a===null||Y||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){Y=a=n;try{if(c=Y.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=Y.stateNode,w=Y.memoizedProps.style;var mt=w!=null&&w.hasOwnProperty("display")?w.display:null;x.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(se){je(Y,Y.return,se)}}}else if(n.tag===6){if(a===null){Y=n;try{Y.stateNode.nodeValue=z?"":Y.memoizedProps}catch(se){je(Y,Y.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:oi(n,t),li(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:oi(n,t),li(t)}}function li(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(kp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var x=s.stateNode;s.flags&32&&(Tr(x,""),s.flags&=-33);var w=Iu(t);_l(t,w,x);break;case 3:case 4:var z=s.stateNode.containerInfo,Y=Iu(t);Hu(t,Y,z);break;default:throw Error(r(161))}}}catch(gt){je(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),Vr(n);break;case 1:jn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hp(n,n.return,a),Vr(n);break;case 26:case 27:case 5:jn(n,n.return),Vr(n);break;case 22:jn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),lo(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Y){je(s,s.return,Y)}if(s=f,c=s.updateQueue,c!==null){var w=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],w)}catch(Y){je(s,s.return,Y)}}a&&x&64&&Ip(f),ar(f,f.return);break;case 26:case 27:case 5:Sa(c,f,a),a&&s===null&&x&4&&Gp(f),ar(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&x&4&&Zp(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),ar(f,f.return);break;default:Sa(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function Xu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(t,n,a,s),n=n.sibling}function Jp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(t,n,a,s),c&2048&&lo(9,n);break;case 3:Ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){Ma(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){je(n,n.return,z)}}else Ma(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(t,n,a,s):co(t,n):f._visibility&4?Ma(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ma(t,n,a,s),c&2048&&Xu(n.alternate,n);break;default:Ma(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,w=a,z=s,Y=x.flags;switch(x.tag){case 0:case 11:case 15:kr(f,x,w,z,c),lo(8,x);break;case 23:break;case 22:var gt=x.stateNode;x.memoizedState!==null?gt._visibility&4?kr(f,x,w,z,c):co(f,x):(gt._visibility|=4,kr(f,x,w,z,c)),c&&Y&2048&&ku(x.alternate,x);break;case 24:kr(f,x,w,z,c),c&&Y&2048&&Xu(x.alternate,x);break;default:kr(f,x,w,z,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&ku(s.alternate,s);break;case 24:co(a,s),c&2048&&Xu(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Xr(t){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)$p(t),t=t.sibling}function $p(t){switch(t.tag){case 26:Xr(t),t.flags&uo&&t.memoizedState!==null&&vy(_i,t.memoizedState,t.memoizedProps);break;case 5:Xr(t);break;case 3:case 4:var n=_i;_i=Ul(t.stateNode.containerInfo),Xr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Xr(t),uo=n):Xr(t));break;default:Xr(t)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,nm(s,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&xa(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):fo(t);break;default:fo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,nm(s,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function nm(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(Yp(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,s){return new Lv(t,n,a,s)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Wu(t)&&(x=1);else if(typeof t=="string")x=gy(t,a,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return rr(a.children,c,f,n);case m:x=8,c|=24;break;case g:return t=ci(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case D:return t=ci(13,a,n,c),t.elementType=D,t.lanes=f,t;case v:return t=ci(19,a,n,c),t.elementType=v,t.lanes=f,t;case L:return am(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case M:x=10;break t;case S:x=9;break t;case A:x=11;break t;case _:x=14;break t;case O:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ci(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=ci(7,t,s,n),t.lanes=a,t}function am(t,n,a,s){t=ci(22,t,s,n),t.elementType=L,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var x=fa(f,2);x!==null&&(c._pendingVisibility|=2,Bn(x,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var x=fa(f,2);x!==null&&(c._pendingVisibility&=-3,Bn(x,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function qi(t){t.flags|=4}function rm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!km(n)){if(n=si.current,n!==null&&((Pe&4194176)===Pe?Ai!==null:(Pe&62914560)!==Pe&&!(Pe&536870912)||n!==Ai))throw Zs=Jc,Mh;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,qr|=n)}function ho(t,n){if(!Fe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(mn),Jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?qi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gi!==null&&(ef(gi),gi=null))),tn(n),null;case 26:return a=n.memoizedState,t===null?(qi(n),a!==null?(tn(n),rm(n,a)):(tn(n),n.flags&=-16777217)):a?a!==t.memoizedState?(qi(n),tn(n),rm(n,a)):(tn(n),n.flags&=-16777217):(t.memoizedProps!==s&&qi(n),tn(n),n.flags&=-16777217),null;case 27:Tt(n),a=Ge.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return tn(n),null}t=oe.current,Ws(n)?xh(n):(t=Pm(c,s,a),n.stateNode=t,qi(n))}return tn(n),null;case 5:if(Tt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(t=oe.current,Ws(n))xh(n);else{switch(c=Ll(Ge.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[Ut]=n,t[Pt]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&qi(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ge.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=zn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ut]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cm(t.nodeValue,a)),t||Za(n)}else t=Ll(t).createTextNode(s),t[Ut]=n,n.stateNode=t}return tn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ws(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ut]=n}else qs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;tn(n),c=!1}else gi!==null&&(ef(gi),gi=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),tn(n),null;case 4:return Jt(),t===null&&hf(n.stateNode.containerInfo),tn(n),null;case 10:return Vi(n.type),tn(n),null;case 19:if(Bt(pn),c=n.memoizedState,c===null)return tn(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ho(c,!1);else{if(rn!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,ho(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return $t(pn,pn.current&1|2),n.child}t=t.sibling}c.tail!==null&&dt()>Sl&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Fe)return tn(n),null}else 2*dt()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=dt(),n.sibling=null,t=pn.current,$t(pn,s?t&1|2:t&1),n):(tn(n),null);case 22:case 23:return Fi(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Bt(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(mn),tn(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(mn),Jt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Tt(n),null;case 13:if(Fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bt(pn),null;case 4:return Jt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Fi(n),tu(),t!==null&&Bt(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(mn),null;case 25:return null;default:return null}}function sm(t,n){switch(Kc(n),n.tag){case 3:Vi(mn),Jt();break;case 26:case 27:case 5:Tt(n);break;case 4:Jt();break;case 13:Fi(n);break;case 19:Bt(pn);break;case 10:Vi(n.type);break;case 22:case 23:Fi(n),tu(),t!==null&&Bt(Qa);break;case 24:Vi(mn)}}var Ov={getCacheForType:function(t){var n=Cn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,en=0,Ze=null,Le=null,Pe=0,Ke=0,Kn=null,Yi=!1,Wr=!1,ju=!1,ji=0,rn=0,ba=0,sr=0,Zu=0,ui=0,qr=0,po=null,Ri=null,Ku=!1,Qu=0,Sl=1/0,Ml=null,Ta=null,El=!1,or=null,mo=0,Ju=0,$u=null,go=0,tf=null;function Qn(){if(en&2&&Pe!==0)return Pe&-Pe;if(lt.T!==null){var t=Br;return t!==0?t:cf()}return Xt()}function om(){ui===0&&(ui=!(Pe&536870912)||Fe?ye():536870912);var t=si.current;return t!==null&&(t.flags|=32),ui}function Bn(t,n,a){(t===Ze&&Ke===2||t.cancelPendingCommit!==null)&&(Yr(t,0),Zi(t,Pe,ui,!1)),xe(t,a),(!(en&2)||t!==Ze)&&(t===Ze&&(!(en&2)&&(sr|=a),rn===4&&Zi(t,Pe,ui,!1)),Ci(t))}function lm(t,n,a){if(en&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||re(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Wr&&!s&&Zi(t,n,0,!1);break}else if(c===6)Zi(t,n,0,!Yi);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var w=t;c=po;var z=w.current.memoizedState.isDehydrated;if(z&&(Yr(w,x).flags|=256),x=rf(w,x,!1),x!==2){if(ju&&!z){w.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Ri,Ri=c,f!==null&&ef(f)}c=x}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Zi(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Zi(s,n,ui,!Yi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-dt(),10<f)){if(Zi(s,n,ui,!Yi),Zt(s,0)!==0)break t;s.timeoutHandle=Um(cm.bind(null,s,a,Ri,Ml,Ku,n,ui,sr,qr,Yi,2,-0,0),f);break t}cm(s,a,Ri,Ml,Ku,n,ui,sr,qr,Yi,0,-0,0)}}break}while(!0);Ci(t)}function ef(t){Ri===null?Ri=t:Ri.push.apply(Ri,t)}function cm(t,n,a,s,c,f,x,w,z,Y,gt,Rt,st){var mt=n.subtreeFlags;if((mt&8192||(mt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:_y},$p(n),n=yy(),n!==null)){t.cancelPendingCommit=n(gm.bind(null,t,a,s,c,x,w,z,1,Rt,st)),Zi(t,f,x,!Y);return}gm(t,a,s,c,x,w,z,gt,Rt,st)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zi(t,n,a,s){n&=~Zu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-N(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&nn(t,a,n)}function bl(){return en&6?!0:(_o(0),!1)}function nf(){if(Le!==null){if(Ke===0)var t=Le.return;else t=Le,Gi=nr=null,lu(t),Pr=null,Ks=0,t=Le;for(;t!==null;)sm(t.alternate,t),t=t.return;Le=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ze=t,Le=a=Ea(t.current,null),Pe=n,Ke=0,Kn=null,Yi=!1,Wr=re(t,n),ju=!1,qr=ui=Zu=sr=ba=rn=0,Ri=po=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-N(s),f=1<<c;n|=t[c],s&=~f}return ji=n,jo(),a}function um(t,n){Ae=null,lt.H=wi,n===js?(n=Th(),Ke=3):n===Mh?(n=Th(),Ke=4):Ke=n===Ep?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,Le===null&&(rn=1,pl(t,ii(n,t.current)))}function fm(){var t=lt.H;return lt.H=wi,t===null?wi:t}function dm(){var t=lt.A;return lt.A=Ov,t}function af(){rn=4,Yi||(Pe&4194176)!==Pe&&si.current!==null||(Wr=!0),!(ba&134217727)&&!(sr&134217727)||Ze===null||Zi(Ze,Pe,ui,!1)}function rf(t,n,a){var s=en;en|=2;var c=fm(),f=dm();(Ze!==t||Pe!==n)&&(Ml=null,Yr(t,n)),n=!1;var x=rn;t:do try{if(Ke!==0&&Le!==null){var w=Le,z=Kn;switch(Ke){case 8:nf(),x=6;break t;case 3:case 2:case 6:si.current===null&&(n=!0);var Y=Ke;if(Ke=0,Kn=null,jr(t,w,z,Y),a&&Wr){x=0;break t}break;default:Y=Ke,Ke=0,Kn=null,jr(t,w,z,Y)}}Bv(),x=rn;break}catch(gt){um(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Gi=nr=null,en=s,lt.H=c,lt.A=f,Le===null&&(Ze=null,Pe=0,jo()),x}function Bv(){for(;Le!==null;)hm(Le)}function Fv(t,n){var a=en;en|=2;var s=fm(),c=dm();Ze!==t||Pe!==n?(Ml=null,Sl=dt()+500,Yr(t,n)):Wr=re(t,n);t:do try{if(Ke!==0&&Le!==null){n=Le;var f=Kn;e:switch(Ke){case 1:Ke=0,Kn=null,jr(t,n,f,1);break;case 2:if(Eh(f)){Ke=0,Kn=null,pm(n);break}n=function(){Ke===2&&Ze===t&&(Ke=7),Ci(t)},f.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:Eh(f)?(Ke=0,Kn=null,pm(n)):(Ke=0,Kn=null,jr(t,n,f,7));break;case 5:var x=null;switch(Le.tag){case 26:x=Le.memoizedState;case 5:case 27:var w=Le;if(!x||km(x)){Ke=0,Kn=null;var z=w.sibling;if(z!==null)Le=z;else{var Y=w.return;Y!==null?(Le=Y,Tl(Y)):Le=null}break e}}Ke=0,Kn=null,jr(t,n,f,5);break;case 6:Ke=0,Kn=null,jr(t,n,f,6);break;case 8:nf(),rn=6;break t;default:throw Error(r(462))}}Iv();break}catch(gt){um(t,gt)}while(!0);return Gi=nr=null,lt.H=s,lt.A=c,en=a,Le!==null?0:(Ze=null,Pe=0,jo(),rn)}function Iv(){for(;Le!==null&&!ht();)hm(Le)}function hm(t){var n=Pp(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Tl(t):Le=n}function pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cp(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=Cp(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:lu(n);default:sm(a,n),n=Le=im(n,ji),n=Pp(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Tl(t):Le=n}function jr(t,n,a,s){Gi=nr=null,lu(n),Pr=null,Ks=0;var c=n.return;try{if(wv(t,c,n,a,Pe)){rn=1,pl(t,ii(a,t.current)),Le=null;return}}catch(f){if(c!==null)throw Le=c,f;rn=1,pl(t,ii(a,t.current)),Le=null;return}n.flags&32768?(Fe||s===1?t=!0:Wr||Pe&536870912?t=!1:(Yi=t=!0,(s===2||s===3||s===6)&&(s=si.current,s!==null&&s.tag===13&&(s.flags|=16384))),mm(n,t)):Tl(n)}function Tl(t){var n=t;do{if(n.flags&32768){mm(n,Yi);return}t=n.return;var a=Uv(n.alternate,n,ji);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=t}while(n!==null);rn===0&&(rn=5)}function mm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,Le=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Le=t;return}Le=t=a}while(t!==null);rn=6,Le=null}function gm(t,n,a,s,c,f,x,w,z,Y){var gt=lt.T,Rt=k.p;try{k.p=2,lt.T=null,Hv(t,n,a,s,Rt,c,f,x,w,z,Y)}finally{lt.T=gt,k.p=Rt}}function Hv(t,n,a,s,c,f,x,w){do Zr();while(or!==null);if(en&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var Y=z.lanes|z.childLanes;if(Y|=Yc,qe(t,s,Y,f,x,w),t===Ze&&(Le=Ze=null,Pe=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||El||(El=!0,Ju=Y,$u=a,Xv(St,function(){return Zr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=lt.T,lt.T=null,f=k.p,k.p=2,x=en,en|=4,Cv(t,z),Kp(z,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=z,qp(t,z.alternate,z),it(),en=x,k.p=f,lt.T=a):t.current=z,El?(El=!1,or=t,mo=s):_m(t,Y),Y=t.pendingLanes,Y===0&&(Ta=null),Ft(z.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)Y=n[z],c(Y.value,{componentStack:Y.stack});return mo&3&&Zr(),Y=t.pendingLanes,s&4194218&&Y&42?t===tf?go++:(go=0,tf=t):go=0,_o(0),null}function _m(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Zr(){if(or!==null){var t=or,n=Ju;Ju=0;var a=Nt(mo),s=lt.T,c=k.p;try{if(k.p=32>a?32:a,lt.T=null,or===null)var f=!1;else{a=$u,$u=null;var x=or,w=mo;if(or=null,mo=0,en&6)throw Error(r(331));var z=en;if(en|=4,em(x.current),Jp(x,x.current,w,a),en=z,_o(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Ht,x)}catch{}f=!0}return f}finally{k.p=c,lt.T=s,_m(t,n)}}return!1}function vm(t,n,a){n=ii(a,n),n=Mu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(xe(t,2),Ci(t))}function je(t,n,a){if(t.tag===3)vm(t,t,a);else for(;n!==null;){if(n.tag===3){vm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){t=ii(a,t),a=Sp(2),s=ya(n,a,2),s!==null&&(Mp(a,s,n,t),xe(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Pe&a)===a&&(rn===4||rn===3&&(Pe&62914560)===Pe&&300>dt()-Qu?!(en&2)&&Yr(t,0):Zu|=a,qr===Pe&&(qr=0)),Ci(t)}function ym(t,n){n===0&&(n=ze()),t=fa(t,n),t!==null&&(xe(t,n),Ci(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ym(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ym(t,a)}function Xv(t,n){return E(t,n)}var Al=null,Kr=null,of=!1,wl=!1,lf=!1,lr=0;function Ci(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),wl=!0,of||(of=!0,qv(Wv))}function _o(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-N(42|t)+1)-1,f&=c&~(x&~w),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Mm(s,f))}else f=Pe,f=Zt(s,s===Ze?f:0),!(f&3)||re(s,f)||(a=!0,Mm(s,f));s=s.next}while(a);lf=!1}}function Wv(){wl=of=!1;var t=0;lr!==0&&(ty()&&(t=lr),lr=0);for(var n=dt(),a=null,s=Al;s!==null;){var c=s.next,f=xm(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(wl=!0)),s=c}_o(t)}function xm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-N(f),w=1<<x,z=c[x];z===-1?(!(w&a)||w&s)&&(c[x]=Ue(w,n)):z<=n&&(t.expiredLanes|=w),f&=~w}if(n=Ze,a=Pe,a=Zt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Ke===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Z(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Z(s),Nt(a)){case 2:case 8:a=vt;break;case 32:a=St;break;case 268435456:a=Mt;break;default:a=St}return s=Sm.bind(null,t),a=E(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Z(s),t.callbackPriority=2,t.callbackNode=null,2}function Sm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Pe;return s=Zt(t,t===Ze?s:0),s===0?null:(lm(t,s,n),xm(t,dt()),t.callbackNode!=null&&t.callbackNode===a?Sm.bind(null,t):null)}function Mm(t,n){if(Zr())return null;lm(t,n,!0)}function qv(t){ny(function(){en&6?E(ct,t):t()})}function cf(){return lr===0&&(lr=ye()),lr}function Em(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function bm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Em((c[Pt]||null).action),x=s.submitter;x&&(n=(n=x[Pt]||null)?Em(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var w=new Wo("action","action",null,s,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var z=x?bm(c,x):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(w.preventDefault(),z=x?bm(c,x):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<gh.length;uf++){var ff=gh[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);mi(jv,"on"+Zv)}mi(fh,"onAnimationEnd"),mi(dh,"onAnimationIteration"),mi(hh,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(dv,"onTransitionRun"),mi(hv,"onTransitionStart"),mi(pv,"onTransitionCancel"),mi(ph,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),de("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),de("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),de("onBeforeInput",["compositionend","keypress","textInput","paste"]),de("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Tm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var w=s[x],z=w.instance,Y=w.currentTarget;if(w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=Y;try{f(c)}catch(gt){hl(gt)}c.currentTarget=null,f=z}else for(x=0;x<s.length;x++){if(w=s[x],z=w.instance,Y=w.currentTarget,w=w.listener,z!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=Y;try{f(c)}catch(gt){hl(gt)}c.currentTarget=null,f=z}}}}function Ne(t,n){var a=n[Se];a===void 0&&(a=n[Se]=new Set);var s=t+"__bubble";a.has(s)||(Am(n,t,2,!1),a.add(s))}function df(t,n,a){var s=0;n&&(s|=4),Am(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Rl]){t[Rl]=!0,_e.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,df("selectionchange",!1,n))}}function Am(t,n,a,s){switch(Zm(n)){case 2:var c=My;break;case 8:c=Ey;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var w=s.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&(z=x.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;x=x.return}for(;w!==null;){if(x=et(w),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=f=x;continue t}w=w.parentNode}}s=s.return}Gd(function(){var Y=f,gt=Uc(a),Rt=[];t:{var st=mh.get(t);if(st!==void 0){var mt=Wo,se=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":mt=k0;break;case"focusin":se="focus",mt=Fc;break;case"focusout":se="blur",mt=Fc;break;case"beforeblur":case"afterblur":mt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=q0;break;case fh:case dh:case hh:mt=O0;break;case ph:mt=j0;break;case"scroll":case"scrollend":mt=C0;break;case"wheel":mt=K0;break;case"copy":case"cut":case"paste":mt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=qd;break;case"toggle":case"beforetoggle":mt=J0}var ve=(n&4)!==0,sn=!ve&&(t==="scroll"||t==="scrollend"),Q=ve?st!==null?st+"Capture":null:st;ve=[];for(var W=Y,nt;W!==null;){var yt=W;if(nt=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||nt===null||Q===null||(yt=zs(W,Q),yt!=null&&ve.push(yo(W,yt,nt))),sn)break;W=W.return}0<ve.length&&(st=new mt(st,se,null,a,gt),Rt.push({event:st,listeners:ve}))}}if(!(n&7)){t:{if(st=t==="mouseover"||t==="pointerover",mt=t==="mouseout"||t==="pointerout",st&&a!==Lc&&(se=a.relatedTarget||a.fromElement)&&(et(se)||se[pe]))break t;if((mt||st)&&(st=gt.window===gt?gt:(st=gt.ownerDocument)?st.defaultView||st.parentWindow:window,mt?(se=a.relatedTarget||a.toElement,mt=Y,se=se?et(se):null,se!==null&&(sn=$(se),ve=se.tag,se!==sn||ve!==5&&ve!==27&&ve!==6)&&(se=null)):(mt=null,se=Y),mt!==se)){if(ve=Xd,yt="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ve=qd,yt="onPointerLeave",Q="onPointerEnter",W="pointer"),sn=mt==null?st:Qt(mt),nt=se==null?st:Qt(se),st=new ve(yt,W+"leave",mt,a,gt),st.target=sn,st.relatedTarget=nt,yt=null,et(gt)===Y&&(ve=new ve(Q,W+"enter",se,a,gt),ve.target=nt,ve.relatedTarget=sn,yt=ve),sn=yt,mt&&se)e:{for(ve=mt,Q=se,W=0,nt=ve;nt;nt=Qr(nt))W++;for(nt=0,yt=Q;yt;yt=Qr(yt))nt++;for(;0<W-nt;)ve=Qr(ve),W--;for(;0<nt-W;)Q=Qr(Q),nt--;for(;W--;){if(ve===Q||Q!==null&&ve===Q.alternate)break e;ve=Qr(ve),Q=Qr(Q)}ve=null}else ve=null;mt!==null&&wm(Rt,st,mt,ve,!1),se!==null&&sn!==null&&wm(Rt,sn,se,ve,!0)}}t:{if(st=Y?Qt(Y):window,mt=st.nodeName&&st.nodeName.toLowerCase(),mt==="select"||mt==="input"&&st.type==="file")var ee=th;else if(Jd(st))if(eh)ee=lv;else{ee=sv;var Re=rv}else mt=st.nodeName,!mt||mt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?Y&&Dc(Y.elementType)&&(ee=th):ee=ov;if(ee&&(ee=ee(t,Y))){$d(Rt,ee,a,gt);break t}Re&&Re(t,st,Y),t==="focusout"&&Y&&st.type==="number"&&Y.memoizedProps.value!=null&&Cc(st,"number",st.value)}switch(Re=Y?Qt(Y):window,t){case"focusin":(Jd(Re)||Re.contentEditable==="true")&&(Cr=Re,Xc=Y,Xs=null);break;case"focusout":Xs=Xc=Cr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,ch(Rt,a,gt);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":ch(Rt,a,gt)}var le;if(Hc)t:{switch(t){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Rr?Kd(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Yd&&a.locale!=="ko"&&(Rr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Rr&&(le=Vd()):(ua=gt,Pc="value"in ua?ua.value:ua.textContent,Rr=!0)),Re=Cl(Y,me),0<Re.length&&(me=new Wd(me,t,null,a,gt),Rt.push({event:me,listeners:Re}),le?me.data=le:(le=Qd(a),le!==null&&(me.data=le)))),(le=tv?ev(t,a):nv(t,a))&&(me=Cl(Y,"onBeforeInput"),0<me.length&&(Re=new Wd("onBeforeInput","beforeinput",null,a,gt),Rt.push({event:Re,listeners:me}),Re.data=le)),Yv(Rt,t,Y,a,gt)}Tm(Rt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(yo(t,c,f)),c=zs(t,n),c!=null&&s.push(yo(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var w=a,z=w.alternate,Y=w.stateNode;if(w=w.tag,z!==null&&z===s)break;w!==5&&w!==26&&w!==27||Y===null||(z=Y,c?(Y=zs(a,f),Y!=null&&x.unshift(yo(a,Y,z))):c||(Y=zs(a,f),Y!=null&&x.push(yo(a,Y,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Cm(t,n){return n=Rm(n),Rm(t)===n}function Dl(){}function Xe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":Ye(t,"class",s);break;case"tabIndex":Ye(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,a,s);break;case"style":Id(t,s,f);break;case"data":if(n!=="object"){Ye(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",c.name,c,null),Xe(t,n,"formEncType",c.formEncType,c,null),Xe(t,n,"formMethod",c.formMethod,c,null),Xe(t,n,"formTarget",c.formTarget,c,null)):(Xe(t,n,"encType",c.encType,c,null),Xe(t,n,"method",c.method,c,null),Xe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),oa(t,"popover",s);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oa(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,oa(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Id(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Pt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):oa(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,f,x,a,null)}}c&&Xe(t,n,"srcSet",a.srcSet,a,null),s&&Xe(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var w=f=x=c=null,z=null,Y=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":x=gt;break;case"checked":z=gt;break;case"defaultChecked":Y=gt;break;case"value":f=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Xe(t,n,s,gt,a,null)}}Ps(t,f,w,z,Y,x,c,!1),on(t);return;case"select":Ne("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":s=w;default:Xe(t,n,c,w,a,null)}n=f,a=x,t.multiple=!!s,n!=null?br(t,!!s,n,!1):a!=null&&br(t,!!s,a,!0);return;case"textarea":Ne("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Xe(t,n,x,w,a,null)}Bd(t,s,c,f),on(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Xe(t,n,z,s,a,null)}return;case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(s=0;s<vo.length;s++)Ne(vo[s],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in a)if(a.hasOwnProperty(Y)&&(s=a[Y],s!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,Y,s,a,null)}return;default:if(Dc(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&mf(t,n,gt,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Xe(t,n,w,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,w=null,z=null,Y=null,gt=null;for(mt in a){var Rt=a[mt];if(a.hasOwnProperty(mt)&&Rt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":z=Rt;default:s.hasOwnProperty(mt)||Xe(t,n,mt,null,s,Rt)}}for(var st in s){var mt=s[st];if(Rt=a[st],s.hasOwnProperty(st)&&(mt!=null||Rt!=null))switch(st){case"type":f=mt;break;case"name":c=mt;break;case"checked":Y=mt;break;case"defaultChecked":gt=mt;break;case"value":x=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:mt!==Rt&&Xe(t,n,st,mt,s,Rt)}}Os(t,x,w,z,Y,gt,f,c);return;case"select":mt=x=w=st=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":mt=z;default:s.hasOwnProperty(f)||Xe(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":st=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==z&&Xe(t,n,c,f,s,z)}n=w,a=x,s=mt,st!=null?br(t,!!a,st,!1):!!s!=!!a&&(n!=null?br(t,!!a,n,!0):br(t,!!a,a?[]:"",!1));return;case"textarea":mt=st=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xe(t,n,w,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":st=c;break;case"defaultValue":mt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Xe(t,n,x,c,s,f)}zd(t,st,mt);return;case"option":for(var se in a)if(st=a[se],a.hasOwnProperty(se)&&st!=null&&!s.hasOwnProperty(se))switch(se){case"selected":t.selected=!1;break;default:Xe(t,n,se,null,s,st)}for(z in s)if(st=s[z],mt=a[z],s.hasOwnProperty(z)&&st!==mt&&(st!=null||mt!=null))switch(z){case"selected":t.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Xe(t,n,z,st,s,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)st=a[ve],a.hasOwnProperty(ve)&&st!=null&&!s.hasOwnProperty(ve)&&Xe(t,n,ve,null,s,st);for(Y in s)if(st=s[Y],mt=a[Y],s.hasOwnProperty(Y)&&st!==mt&&(st!=null||mt!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Xe(t,n,Y,st,s,mt)}return;default:if(Dc(n)){for(var sn in a)st=a[sn],a.hasOwnProperty(sn)&&st!==void 0&&!s.hasOwnProperty(sn)&&mf(t,n,sn,void 0,s,st);for(gt in s)st=s[gt],mt=a[gt],!s.hasOwnProperty(gt)||st===mt||st===void 0&&mt===void 0||mf(t,n,gt,st,s,mt);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!s.hasOwnProperty(Q)&&Xe(t,n,Q,null,s,st);for(Rt in s)st=s[Rt],mt=a[Rt],!s.hasOwnProperty(Rt)||st===mt||st==null&&mt==null||Xe(t,n,Rt,st,s,mt)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function ty(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(iy)}:Um;function iy(t){setTimeout(function(){throw t})}function xf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),wo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);wo(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),at(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function ry(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Pm(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var fi=new Map,zm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Ki=k.d;k.d={f:sy,r:oy,D:ly,C:cy,L:uy,m:fy,X:hy,S:dy,M:py};function sy(){var t=Ki.f(),n=bl();return t||n}function oy(t){var n=Gt(t);n!==null&&n.tag===5&&n.type==="form"?cp(n):Ki.r(t)}var Jr=typeof document>"u"?null:document;function Bm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zm.has(c)||(zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),Kt(n),s.head.appendChild(n)))}}function ly(t){Ki.D(t),Bm("dns-prefetch",t,null)}function cy(t,n){Ki.C(t,n),Bm("preconnect",t,n)}function uy(t,n,a){Ki.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}fi.has(f)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),Tn(n,"link",t),Kt(n),s.head.appendChild(n)))}}function fy(t,n){Ki.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!fi.has(f)&&(t=b({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),Tn(s,"link",t),Kt(s),a.head.appendChild(s)}}}function dy(t,n,a){Ki.S(t,n,a);var s=Jr;if(s&&t){var c=ie(s).hoistableStyles,f=$r(t);n=n||"default";var x=c.get(f);if(!x){var w={loading:0,preload:null};if(x=s.querySelector(xo(f)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Mf(t,a);var z=x=s.createElement("link");Kt(z),Tn(z,"link",t),z._p=new Promise(function(Y,gt){z.onload=Y,z.onerror=gt}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:w},c.set(f,x)}}}function hy(t,n){Ki.X(t,n);var a=Jr;if(a&&t){var s=ie(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=b({src:t,async:!0},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Kt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function py(t,n){Ki.M(t,n);var a=Jr;if(a&&t){var s=ie(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=b({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),Kt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Fm(t,n,a,s){var c=(c=Ge.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=ie(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=ie(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(xo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||my(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=ie(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Im(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),Kt(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function So(t){return"script[async]"+t}function Hm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Kt(s),s;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Kt(s),Tn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,Kt(f),f;s=Im(a),(c=fi.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),Kt(f);var x=f;return x._p=new Promise(function(w,z){x.onload=w,x.onerror=z}),Tn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(So(f)))?(n.instance=c,Kt(c),c):(s=a,(c=fi.get(f))&&(s=b({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Kt(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var w=s[x];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Gm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[tt]||f[Ut]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var w=s.get(x);w?w.push(f):s.set(x,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Mo=null;function _y(){}function vy(t,n,a){if(Mo===null)throw Error(r(475));var s=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(xo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Kt(f);return}f=t.ownerDocument||t,a=Im(a),(c=fi.get(c))&&Mf(a,c),f=f.createElement("link"),Kt(f);var x=f;x._p=new Promise(function(w,z){x.onload=w,x.onerror=z}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yy(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(xy,t),zl=null,Pl.call(t))}function xy(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function Sy(t,n,a,s,c,f,x,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Xm(t,n,a,s,c,f,x,w,z,Y,gt,Rt){return t=new Sy(t,n,a,x,w,z,Y,Rt),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Wm(t){return t?(t=Ur,t):Ur}function qm(t,n,a,s,c,f){c=Wm(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(Bn(a,t,n),ro(a,t,n))}function Ym(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Tf(t,n){Ym(t,n),(t=t.alternate)&&Ym(t,n)}function jm(t){if(t.tag===13){var n=fa(t,67108864);n!==null&&Bn(n,t,67108864),Tf(t,67108864)}}var Bl=!0;function My(t,n,a,s){var c=lt.T;lt.T=null;var f=k.p;try{k.p=2,Af(t,n,a,s)}finally{k.p=f,lt.T=c}}function Ey(t,n,a,s){var c=lt.T;lt.T=null;var f=k.p;try{k.p=8,Af(t,n,a,s)}finally{k.p=f,lt.T=c}}function Af(t,n,a,s){if(Bl){var c=wf(s);if(c===null)pf(t,n,s,Fl,a),Km(t,s);else if(Ty(c,t,n,a,s))s.stopPropagation();else if(Km(t,s),n&4&&-1<by.indexOf(t)){for(;c!==null;){var f=Gt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=bt(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var z=1<<31-N(x);w.entanglements[1]|=z,x&=~z}Ci(f),!(en&6)&&(Sl=dt()+500,_o(0))}}break;case 13:w=fa(f,2),w!==null&&Bn(w,f,2),bl(),Tf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Uc(t),Rf(t)}var Fl=null;function Rf(t){if(Fl=null,t=et(t),t!==null){var n=$(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ut(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Zm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case ct:return 2;case vt:return 8;case St:case Ot:return 32;case Mt:return 268435456;default:return 32}default:return 32}}var Cf=!1,Aa=null,wa=null,Ra=null,bo=new Map,To=new Map,Ca=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Gt(n),n!==null&&jm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ty(t,n,a,s,c){switch(n){case"focusin":return Aa=Ao(Aa,t,n,a,s,c),!0;case"dragenter":return wa=Ao(wa,t,n,a,s,c),!0;case"mouseover":return Ra=Ao(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0}return!1}function Qm(t){var n=et(t.target);if(n!==null){var a=$(n);if(a!==null){if(n=a.tag,n===13){if(n=ut(a),n!==null){t.blockedOn=n,Yt(t.priority,function(){if(a.tag===13){var s=Qn(),c=fa(a,s);c!==null&&Bn(c,a,s),Tf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=Gt(a),n!==null&&jm(n),t.blockedOn=a,!1;n.shift()}return!0}function Jm(t,n,a){Il(t)&&a.delete(n)}function Ay(){Cf=!1,Aa!==null&&Il(Aa)&&(Aa=null),wa!==null&&Il(wa)&&(wa=null),Ra!==null&&Il(Ra)&&(Ra=null),bo.forEach(Jm),To.forEach(Jm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ay)))}var Gl=null;function $m(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=Gt(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function wo(t){function n(z){return Hl(z,t)}Aa!==null&&Hl(Aa,t),wa!==null&&Hl(wa,t),Ra!==null&&Hl(Ra,t),bo.forEach(n),To.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[Pt]||null;if(typeof f=="function")x||$m(a);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[Pt]||null)w=x.formAction;else if(Rf(c)!==null)continue}else w=x.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),$m(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();qm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),qm(t.current,2,null,t,null,null),bl(),n[pe]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Qm(t)}};var tg=e.version;if(tg!=="19.0.0")throw Error(r(527,tg,"19.0.0"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=j(n),t=t!==null?pt(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:lt,findFiberByHostInstance:et,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ht=kl.inject(wy),Wt=kl}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=_p,f=vp,x=yp,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=Xm(t,1,!1,null,null,a,s,c,f,x,w,null),t[pe]=n.current,hf(t.nodeType===8?t.parentNode:t),new Df(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=_p,x=vp,w=yp,z=null,Y=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(Y=a.formState)),n=Xm(t,1,!0,n,a??null,s,c,f,x,w,z,Y),n.context=Wm(null),a=n.current,s=Qn(),c=va(s),c.callback=null,ya(a,c,s),n.current.lanes=s,xe(n,s),Ci(n),t[pe]=n.current,hf(t),new Vl(n)},Co.version="19.0.0",Co}var ug;function By(){if(ug)return Nf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zy(),Nf.exports}var Fy=By();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,fg=1,Hy=2,X_=1,W_=2,na=3,ka=0,Wn=1,Li=2,Ia=0,Es=1,md=2,dg=3,hg=4,Gy=5,mr=100,Vy=101,ky=102,pg=103,mg=104,Xy=200,Wy=201,qy=202,Yy=203,gd=204,_d=205,jy=206,Zy=207,Ky=208,Qy=209,Jy=210,$y=211,tx=212,ex=213,nx=214,ix=0,ax=1,rx=2,mc=3,sx=4,ox=5,lx=6,cx=7,Rd=0,ux=1,fx=2,Ha=0,dx=1,hx=2,px=3,mx=4,gx=5,_x=6,q_=300,As=301,ws=302,vd=303,yd=304,Ec=306,xd=1e3,Mi=1001,Sd=1002,Hn=1003,gg=1004,Do=1005,Xn=1006,Bf=1007,_r=1008,Ga=1009,vx=1010,yx=1011,Cd=1012,Y_=1013,Fa=1014,ia=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,xx=1021,Ei=1023,Sx=1024,Mx=1025,yr=1026,Rs=1027,Ex=1028,K_=1029,bx=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,_g=35840,vg=35841,yg=35842,xg=35843,$_=36196,Sg=37492,Mg=37496,Eg=37808,bg=37809,Tg=37810,Ag=37811,wg=37812,Rg=37813,Cg=37814,Dg=37815,Lg=37816,Ug=37817,Ng=37818,Og=37819,Pg=37820,zg=37821,Vf=36492,Bg=36494,Fg=36495,Tx=36283,Ig=36284,Hg=36285,Gg=36286,t0=3e3,xr=3001,Ax=3200,wx=3201,e0=0,Rx=1,hi="",An="srgb",ra="srgb-linear",Dd="display-p3",bc="display-p3-linear",gc="linear",Qe="srgb",_c="rec709",vc="p3",is=7680,Vg=519,Cx=512,Dx=513,Lx=514,n0=515,Ux=516,Nx=517,Ox=518,Px=519,kg=35044,Xg="300 es",Md=1035,aa=2e3,yc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nn(o,e,i){return Math.max(e,Math.min(i,o))}function Ld(o,e){return(o%e+e)%e}function zx(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function Bx(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function Fx(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function Ix(o,e=1){return e-Math.abs(Ld(o,e*2)-e)}function Hx(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Gx(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Vx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kx(o,e){return o+Math.random()*(e-o)}function Xx(o){return o*(.5-Math.random())}function Wx(o){o!==void 0&&(Wg=o);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qx(o){return o*zo}function Yx(o){return o*Io}function Ed(o){return(o&o-1)===0&&o!==0}function jx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function xc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zx(o,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((e+r)/2),g=h((e+r)/2),y=u((e-r)/2),S=h((e-r)/2),M=u((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":o.set(d*g,p*y,p*S,d*m);break;case"YZY":o.set(p*S,d*g,p*y,d*m);break;case"ZXZ":o.set(p*y,p*S,d*g,d*m);break;case"XZX":o.set(d*g,p*A,p*M,d*m);break;case"YXY":o.set(p*M,d*g,p*A,d*m);break;case"ZYZ":o.set(p*A,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const hr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Nn,euclideanModulo:Ld,mapLinear:zx,inverseLerp:Bx,lerp:Bo,damp:Fx,pingpong:Ix,smoothstep:Hx,smootherstep:Gx,randInt:Vx,randFloat:kx,randFloatSpread:Xx,seededRandom:Wx,degToRad:qx,radToDeg:Yx,isPowerOfTwo:Ed,ceilPowerOfTwo:jx,floorPowerOfTwo:xc,setQuaternionFromProperEuler:Zx,normalize:Fn,denormalize:ys};class ge{constructor(e=0,i=0){ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,i,r,l,u,h,d,p,m){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],y=r[7],S=r[2],M=r[5],A=r[8],D=l[0],v=l[3],_=l[6],O=l[1],L=l[4],B=l[7],V=l[2],I=l[5],F=l[8];return u[0]=h*D+d*O+p*V,u[3]=h*v+d*L+p*I,u[6]=h*_+d*B+p*F,u[1]=m*D+g*O+y*V,u[4]=m*v+g*L+y*I,u[7]=m*_+g*B+y*F,u[2]=S*D+M*O+A*V,u[5]=S*v+M*L+A*I,u[8]=S*_+M*B+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=g*h-d*m,S=d*p-g*u,M=m*u-h*p,A=i*y+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=y*D,e[1]=(l*m-g*r)*D,e[2]=(d*r-l*h)*D,e[3]=S*D,e[4]=(g*i-l*p)*D,e[5]=(l*u-d*i)*D,e[6]=M*D,e[7]=(r*p-m*i)*D,e[8]=(h*i-r*u)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new De;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Kx(){const o=Sc("canvas");return o.style.display="block",o}const qg={};function bs(o){o in qg||(qg[o]=!0,console.warn(o))}const Yg=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jg=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[ra]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[An]:{transfer:Qe,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[bc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg)},[Dd]:{transfer:Qe,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg).convertLinearToSRGB()}},Qx=new Set([ra,bc]),We={enabled:!0,_workingColorSpace:ra,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qx.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Xl[e].toReference,l=Xl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Xl[o].primaries},getTransfer:function(o){return o===hi?gc:Xl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Xf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Sc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Sc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ts(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jx=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Wf(l[h].image)):u.push(Wf(l[h]))}else u=Wf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $x=0;class qn extends Er{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Mi,l=Mi,u=Xn,h=_r,d=Ei,p=Ga,m=qn.DEFAULT_ANISOTROPY,g=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===xr?An:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?xr:t0}set encoding(e){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?An:hi}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=q_;qn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],y=p[8],S=p[1],M=p[5],A=p[9],D=p[2],v=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(y-D)<.01&&Math.abs(A-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+D)<.1&&Math.abs(A+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,B=(M+1)/2,V=(_+1)/2,I=(g+S)/4,F=(y+D)/4,H=(A+v)/4;return L>B&&L>V?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=I/r,u=F/r):B>V?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=I/l,u=H/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=F/u,l=H/u),this.set(r,l,u,i),this}let O=Math.sqrt((v-A)*(v-A)+(y-D)*(y-D)+(S-g)*(S-g));return Math.abs(O)<.001&&(O=1),this.x=(v-A)/O,this.y=(y-D)/O,this.z=(S-g)/O,this.w=Math.acos((m+M+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tS extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===xr?An:hi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new qn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends tS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eS extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],D=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=D;return}if(y!==D||p!==S||m!==M||g!==A){let v=1-d;const _=p*S+m*M+g*A+y*D,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const V=Math.sqrt(L),I=Math.atan2(V,_*O);v=Math.sin(v*I)/V,d=Math.sin(d*I)/V}const B=d*O;if(p=p*v+S*B,m=m*v+M*B,g=g*v+A*B,y=y*v+D*B,v===1-d){const V=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=V,m*=V,g*=V,y*=V}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*y+p*M-m*S,e[i+1]=p*A+g*S+m*y-d*M,e[i+2]=m*A+g*M+d*S-p*y,e[i+3]=g*A-d*y-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),y=d(u/2),S=p(r/2),M=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=S*g*y+m*M*A,this._y=m*M*y-S*g*A,this._z=m*g*A+S*M*y,this._w=m*g*y-S*M*A;break;case"YXZ":this._x=S*g*y+m*M*A,this._y=m*M*y-S*g*A,this._z=m*g*A-S*M*y,this._w=m*g*y+S*M*A;break;case"ZXY":this._x=S*g*y-m*M*A,this._y=m*M*y+S*g*A,this._z=m*g*A+S*M*y,this._w=m*g*y-S*M*A;break;case"ZYX":this._x=S*g*y-m*M*A,this._y=m*M*y+S*g*A,this._z=m*g*A-S*M*y,this._w=m*g*y+S*M*A;break;case"YZX":this._x=S*g*y+m*M*A,this._y=m*M*y+S*g*A,this._z=m*g*A-S*M*y,this._w=m*g*y-S*M*A;break;case"XZY":this._x=S*g*y-m*M*A,this._y=m*M*y-S*g*A,this._z=m*g*A+S*M*y,this._w=m*g*y+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],y=i[10],S=r+d+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),y=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*y+this._w*S,this._x=r*y+this._x*S,this._y=l*y+this._y*S,this._z=u*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,i=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),y=2*(u*r-h*i);return this.x=i+p*m+h*y-d*g,this.y=r+p*g+d*m-u*y,this.z=l+p*y+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new q,Zg=new Mr;class Ho{constructor(e=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Wl.copy(r.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ql.subVectors(this.max,Lo),rs.subVectors(e.a,Lo),ss.subVectors(e.b,Lo),os.subVectors(e.c,Lo),La.subVectors(ss,rs),Ua.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-cr.z,cr.y,La.z,0,-La.x,Ua.z,0,-Ua.x,cr.z,0,-cr.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-cr.y,cr.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(La,Ua),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new q,new q,new q,new q,new q,new q,new q,new q],yi=new q,Wl=new Ho,rs=new q,ss=new q,os=new q,La=new q,Ua=new q,cr=new q,Lo=new q,ql=new q,Yl=new q,ur=new q;function Yf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ur.fromArray(o,u);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const nS=new Ho,Uo=new q,jf=new q;class Tc{constructor(e=new q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(jf)),this.expandByPoint(Uo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new q,Zf=new q,jl=new q,Na=new q,Kf=new q,Zl=new q,Qf=new q;class Ud{constructor(e=new q,i=new q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Na.dot(this.direction),p=-Na.dot(jl),m=Na.lengthSq(),g=Math.abs(1-h*h);let y,S,M,A;if(g>0)if(y=h*p-d,S=h*d-p,A=u*g,y>=0)if(S>=-A)if(S<=A){const D=1/g;y*=D,S*=D,M=y*(y+h*S+2*d)+S*(h*y+S+2*p)+m}else S=u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*p)+m;else S=-u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*p)+m;else S<=-A?(y=Math.max(0,-(-h*u+d)),S=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+S*(S+2*p)+m):S<=A?(y=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(y=Math.max(0,-(h*u+d)),S=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+S*(S+2*p)+m);else S=h>0?-u:u,y=Math.max(0,-(h*S+d)),M=-y*y+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector(jl,S),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),y>=0?(d=(e.min.z-S.z)*y,p=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,p=(e.min.z-S.z)*y),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const p=d*this.direction.dot(Zl.crossVectors(Na,Zl));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Na));if(m<0||p+m>h)return null;const g=-d*Na.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,l,u,h,d,p,m,g,y,S,M,A,D,v){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,y,S,M,A,D,v)}set(e,i,r,l,u,h,d,p,m,g,y,S,M,A,D,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=S,_[3]=M,_[7]=A,_[11]=D,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*y,A=d*g,D=d*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=M+A*m,i[5]=S-D*m,i[9]=-d*p,i[2]=D-S*m,i[6]=A+M*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,M=p*y,A=m*g,D=m*y;i[0]=S+D*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*y,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=D+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,M=p*y,A=m*g,D=m*y;i[0]=S-D*d,i[4]=-h*y,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=D-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,M=h*y,A=d*g,D=d*y;i[0]=p*g,i[4]=A*m-M,i[8]=S*m+D,i[1]=p*y,i[5]=D*m+S,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,M=h*m,A=d*p,D=d*m;i[0]=p*g,i[4]=D-S*y,i[8]=A*y+M,i[1]=y,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*y+A,i[10]=S-D*y}else if(e.order==="XZY"){const S=h*p,M=h*m,A=d*p,D=d*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=S*y+D,i[5]=h*g,i[9]=M*y-A,i[2]=A*y-M,i[6]=d*g,i[10]=D*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iS,e,aS)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Oa.crossVectors(r,Jn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Oa.crossVectors(r,Jn)),Oa.normalize(),Kl.crossVectors(Jn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Jn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Jn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],y=r[5],S=r[9],M=r[13],A=r[2],D=r[6],v=r[10],_=r[14],O=r[3],L=r[7],B=r[11],V=r[15],I=l[0],F=l[4],H=l[8],lt=l[12],b=l[1],P=l[5],_t=l[9],At=l[13],X=l[2],rt=l[6],G=l[10],ot=l[14],$=l[3],ut=l[7],C=l[11],j=l[15];return u[0]=h*I+d*b+p*X+m*$,u[4]=h*F+d*P+p*rt+m*ut,u[8]=h*H+d*_t+p*G+m*C,u[12]=h*lt+d*At+p*ot+m*j,u[1]=g*I+y*b+S*X+M*$,u[5]=g*F+y*P+S*rt+M*ut,u[9]=g*H+y*_t+S*G+M*C,u[13]=g*lt+y*At+S*ot+M*j,u[2]=A*I+D*b+v*X+_*$,u[6]=A*F+D*P+v*rt+_*ut,u[10]=A*H+D*_t+v*G+_*C,u[14]=A*lt+D*At+v*ot+_*j,u[3]=O*I+L*b+B*X+V*$,u[7]=O*F+L*P+B*rt+V*ut,u[11]=O*H+L*_t+B*G+V*C,u[15]=O*lt+L*At+B*ot+V*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],y=e[6],S=e[10],M=e[14],A=e[3],D=e[7],v=e[11],_=e[15];return A*(+u*p*y-l*m*y-u*d*S+r*m*S+l*d*M-r*p*M)+D*(+i*p*M-i*m*S+u*h*S-l*h*M+l*m*g-u*p*g)+v*(+i*m*y-i*d*M-u*h*y+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*y+i*d*S+l*h*y-r*h*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=e[9],S=e[10],M=e[11],A=e[12],D=e[13],v=e[14],_=e[15],O=y*v*m-D*S*m+D*p*M-d*v*M-y*p*_+d*S*_,L=A*S*m-g*v*m-A*p*M+h*v*M+g*p*_-h*S*_,B=g*D*m-A*y*m+A*d*M-h*D*M-g*d*_+h*y*_,V=A*y*p-g*D*p-A*d*S+h*D*S+g*d*v-h*y*v,I=i*O+r*L+l*B+u*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=O*F,e[1]=(D*S*u-y*v*u-D*l*M+r*v*M+y*l*_-r*S*_)*F,e[2]=(d*v*u-D*p*u+D*l*m-r*v*m-d*l*_+r*p*_)*F,e[3]=(y*p*u-d*S*u-y*l*m+r*S*m+d*l*M-r*p*M)*F,e[4]=L*F,e[5]=(g*v*u-A*S*u+A*l*M-i*v*M-g*l*_+i*S*_)*F,e[6]=(A*p*u-h*v*u-A*l*m+i*v*m+h*l*_-i*p*_)*F,e[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*M+i*p*M)*F,e[8]=B*F,e[9]=(A*y*u-g*D*u-A*r*M+i*D*M+g*r*_-i*y*_)*F,e[10]=(h*D*u-A*d*u+A*r*m-i*D*m-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*y*u-g*r*m+i*y*m+h*r*M-i*d*M)*F,e[12]=V*F,e[13]=(g*D*l-A*y*l+A*r*S-i*D*S-g*r*v+i*y*v)*F,e[14]=(A*d*l-h*D*l-A*r*p+i*D*p+h*r*v-i*d*v)*F,e[15]=(h*y*l-g*d*l+g*r*p-i*y*p-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,y=d+d,S=u*m,M=u*g,A=u*y,D=h*g,v=h*y,_=d*y,O=p*m,L=p*g,B=p*y,V=r.x,I=r.y,F=r.z;return l[0]=(1-(D+_))*V,l[1]=(M+B)*V,l[2]=(A-L)*V,l[3]=0,l[4]=(M-B)*I,l[5]=(1-(S+_))*I,l[6]=(v+O)*I,l[7]=0,l[8]=(A+L)*F,l[9]=(v-O)*F,l[10]=(1-(S+D))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const m=1/u,g=1/h,y=1/d;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=y,xi.elements[9]*=y,xi.elements[10]*=y,i.setFromRotationMatrix(xi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=aa){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let M,A;if(d===aa)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===yc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=aa){const p=this.elements,m=1/(i-e),g=1/(r-l),y=1/(h-u),S=(i+e)*m,M=(r+l)*g;let A,D;if(d===aa)A=(h+u)*y,D=-2*y;else if(d===yc)A=u*y,D=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=D,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new q,xi=new cn,iS=new q(0,0,0),aS=new q(1,1,1),Oa=new q,Kl=new q,Jn=new q,Kg=new cn,Qg=new Mr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],y=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Nn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const Jg=new q,cs=new Mr,$i=new cn,Ql=new q,No=new q,sS=new q,oS=new Mr,$g=new q(1,0,0),t_=new q(0,1,0),e_=new q(0,0,1),lS={type:"added"},cS={type:"removed"};class wn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new q,i=new Ac,r=new Mr,l=new q(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new De}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(No,Ql,this.up):$i.lookAt(Ql,No,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),cs.setFromRotationMatrix($i),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),y=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new q,ta=new q,Jf=new q,ea=new q,us=new q,fs=new q,n_=new q,$f=new q,td=new q,ed=new q;class Ui{constructor(e=new q,i=new q,r=new q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Si.subVectors(l,i),ta.subVectors(r,i),Jf.subVectors(e,i);const h=Si.dot(Si),d=Si.dot(ta),p=Si.dot(Jf),m=ta.dot(ta),g=ta.dot(Jf),y=h*m-d*d;if(y===0)return u.set(0,0,0),null;const S=1/y,M=(m*p-d*g)*S,A=(h*g-d*p)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ea.x),p.addScaledVector(h,ea.y),p.addScaledVector(d,ea.z),p)}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),ta.subVectors(e,i),Si.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),Si.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);td.subVectors(e,l);const g=us.dot(td),y=fs.dot(td);if(g>=0&&y<=g)return i.copy(l);const S=p*y-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(us,h);ed.subVectors(e,u);const M=us.dot(ed),A=fs.dot(ed);if(A>=0&&M<=A)return i.copy(u);const D=M*m-p*A;if(D<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(fs,d);const v=g*A-M*y;if(v<=0&&y-g>=0&&M-A>=0)return n_.subVectors(u,l),d=(y-g)/(y-g+(M-A)),i.copy(l).addScaledVector(n_,d);const _=1/(v+D+S);return h=D*_,d=S*_,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=We.workingColorSpace){return this.r=e,this.g=i,this.b=r,We.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=We.workingColorSpace){if(e=Ld(e,1),i=Nn(i,0,1),r=Nn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nd(h,u,e+1/3),this.g=nd(h,u,e),this.b=nd(h,u,e-1/3)}return We.toWorkingColorSpace(this,l),this}setStyle(e,i=An){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=An){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Xf(e.r),this.g=Xf(e.g),this.b=Xf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return We.fromWorkingColorSpace(Un.copy(this),e),Math.round(Nn(Un.r*255,0,255))*65536+Math.round(Nn(Un.g*255,0,255))*256+Math.round(Nn(Un.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=We.workingColorSpace){We.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const y=h-d;switch(m=g<=.5?y/(h+d):y/(2-h-d),h){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=We.workingColorSpace){return We.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=An){We.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==An?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Bo(Pa.h,Jl.h,i),l=Bo(Pa.s,Jl.s,i),u=Bo(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Oe;Oe.NAMES=l0;let uS=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new q,$l=new ge;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class u0 extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fS=0;const di=new cn,id=new wn,ds=new q,$n=new Ho,Oo=new Ho,Sn=new q;class Oi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new De().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new pi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors($n.min,Oo.min),$n.expandByPoint(Sn),Sn.addVectors($n.max,Oo.max),$n.expandByPoint(Sn)):($n.expandByPoint(Oo.min),$n.expandByPoint(Oo.max))}$n.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(ds.fromBufferAttribute(e,m),Sn.add(ds)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let b=0;b<d;b++)m[b]=new q,g[b]=new q;const y=new q,S=new q,M=new q,A=new ge,D=new ge,v=new ge,_=new q,O=new q;function L(b,P,_t){y.fromArray(l,b*3),S.fromArray(l,P*3),M.fromArray(l,_t*3),A.fromArray(h,b*2),D.fromArray(h,P*2),v.fromArray(h,_t*2),S.sub(y),M.sub(y),D.sub(A),v.sub(A);const At=1/(D.x*v.y-v.x*D.y);isFinite(At)&&(_.copy(S).multiplyScalar(v.y).addScaledVector(M,-D.y).multiplyScalar(At),O.copy(M).multiplyScalar(D.x).addScaledVector(S,-v.x).multiplyScalar(At),m[b].add(_),m[P].add(_),m[_t].add(_),g[b].add(O),g[P].add(O),g[_t].add(O))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let b=0,P=B.length;b<P;++b){const _t=B[b],At=_t.start,X=_t.count;for(let rt=At,G=At+X;rt<G;rt+=3)L(r[rt+0],r[rt+1],r[rt+2])}const V=new q,I=new q,F=new q,H=new q;function lt(b){F.fromArray(u,b*3),H.copy(F);const P=m[b];V.copy(P),V.sub(F.multiplyScalar(F.dot(P))).normalize(),I.crossVectors(H,P);const At=I.dot(g[b])<0?-1:1;p[b*4]=V.x,p[b*4+1]=V.y,p[b*4+2]=V.z,p[b*4+3]=At}for(let b=0,P=B.length;b<P;++b){const _t=B[b],At=_t.start,X=_t.count;for(let rt=At,G=At+X;rt<G;rt+=3)lt(r[rt+0]),lt(r[rt+1]),lt(r[rt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new q,u=new q,h=new q,d=new q,p=new q,m=new q,g=new q,y=new q;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),D=e.getX(S+1),v=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,v),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,D),m.fromBufferAttribute(r,v),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(D,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),y.subVectors(l,u),g.cross(y),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,y=d.normalized,S=new m.constructor(p.length*g);let M=0,A=0;for(let D=0,v=p.length;D<v;D++){d.isInterleavedBufferAttribute?M=p[D]*d.data.stride+d.offset:M=p[D]*g;for(let _=0;_<g;_++)S[A++]=m[M++]}return new Ni(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,y=m.length;g<y;g++){const S=m[g],M=e(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,S=m.length;y<S;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let S=0,M=y.length;S<M;S++)g.push(y[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new cn,fr=new Ud,tc=new Tc,a_=new q,hs=new q,ps=new q,ms=new q,ad=new q,ec=new q,nc=new ge,ic=new ge,ac=new ge,r_=new q,s_=new q,o_=new q,rc=new q,sc=new q;class ei extends wn{constructor(e=new Oi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],y=u[p];g!==0&&(ad.fromBufferAttribute(y,e),h?ec.addScaledVector(ad,g):ec.addScaledVector(ad.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(tc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(tc,a_)===null||fr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,D=S.length;A<D;A++){const v=S[A],_=h[v.materialIndex],O=Math.max(v.start,M.start),L=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let B=O,V=L;B<V;B+=3){const I=d.getX(B),F=d.getX(B+1),H=d.getX(B+2);l=oc(this,_,e,r,m,g,y,I,F,H),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),D=Math.min(d.count,M.start+M.count);for(let v=A,_=D;v<_;v+=3){const O=d.getX(v),L=d.getX(v+1),B=d.getX(v+2);l=oc(this,h,e,r,m,g,y,O,L,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,D=S.length;A<D;A++){const v=S[A],_=h[v.materialIndex],O=Math.max(v.start,M.start),L=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let B=O,V=L;B<V;B+=3){const I=B,F=B+1,H=B+2;l=oc(this,_,e,r,m,g,y,I,F,H),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),D=Math.min(p.count,M.start+M.count);for(let v=A,_=D;v<_;v+=3){const O=v,L=v+1,B=v+2;l=oc(this,h,e,r,m,g,y,O,L,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function dS(o,e,i,r,l,u,h,d){let p;if(e.side===Wn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===ka,d),p===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,hs),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=dS(o,e,i,r,hs,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,d),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Ui.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new ge)),u&&(nc.fromBufferAttribute(u,d),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Ui.getInterpolation(rc,hs,ps,ms,nc,ic,ac,new ge),g.uv2=g.uv1),h&&(r_.fromBufferAttribute(h,d),s_.fromBufferAttribute(h,p),o_.fromBufferAttribute(h,m),g.normal=Ui.getInterpolation(rc,hs,ps,ms,r_,s_,o_,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new q,materialIndex:0};Ui.getNormal(hs,ps,ms,y.normal),g.face=y}return g}class Va extends Oi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],y=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pi(m,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(y,2));function A(D,v,_,O,L,B,V,I,F,H,lt){const b=B/F,P=V/H,_t=B/2,At=V/2,X=I/2,rt=F+1,G=H+1;let ot=0,$=0;const ut=new q;for(let C=0;C<G;C++){const j=C*P-At;for(let pt=0;pt<rt;pt++){const Ct=pt*b-_t;ut[D]=Ct*O,ut[v]=j*L,ut[_]=X,m.push(ut.x,ut.y,ut.z),ut[D]=0,ut[v]=0,ut[_]=I>0?1:-1,g.push(ut.x,ut.y,ut.z),y.push(pt/F),y.push(1-C/H),ot+=1}}for(let C=0;C<H;C++)for(let j=0;j<F;j++){const pt=S+j+rt*C,Ct=S+j+rt*(C+1),k=S+(j+1)+rt*(C+1),ft=S+(j+1)+rt*C;p.push(pt,Ct,ft),p.push(Ct,k,ft),$+=6}d.addGroup(M,$,lt),M+=$,S+=ot}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function hS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function d0(o){return o.getRenderTarget()===null?o.outputColorSpace:We.workingColorSpace}const pS={clone:Cs,merge:In};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=hS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new q,l_=new ge,c_=new ge;class ti extends h0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _S extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new ti(gs,_s,e,i);u.layers=this.layers,this.add(u);const h=new ti(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new ti(gs,_s,e,i);d.layers=this.layers,this.add(d);const p=new ti(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new ti(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class p0 extends qn{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vS extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?An:hi),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Xn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Va(5,5,5),u=new sa({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new ei(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Xn),new _S(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const rd=new q,yS=new q,xS=new De;class Ba{constructor(e=new q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rd.subVectors(r,i).cross(yS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xS.getNormalMatrix(e),l=this.coplanarPoint(rd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Tc,lc=new q;class Nd{constructor(e=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],y=l[6],S=l[7],M=l[8],A=l[9],D=l[10],v=l[11],_=l[12],O=l[13],L=l[14],B=l[15];if(r[0].setComponents(p-u,S-m,v-M,B-_).normalize(),r[1].setComponents(p+u,S+m,v+M,B+_).normalize(),r[2].setComponents(p+h,S+g,v+A,B+O).normalize(),r[3].setComponents(p-h,S-g,v-A,B-O).normalize(),r[4].setComponents(p-d,S-y,v-D,B-L).normalize(),i===aa)r[5].setComponents(p+d,S+y,v+D,B+L).normalize();else if(i===yc)r[5].setComponents(d,y,D,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SS(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const y=m.array,S=m.usage,M=y.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,y,S),m.onUploadCallback();let D;if(y instanceof Float32Array)D=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)D=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else D=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)D=o.SHORT;else if(y instanceof Uint32Array)D=o.UNSIGNED_INT;else if(y instanceof Int32Array)D=o.INT;else if(y instanceof Int8Array)D=o.BYTE;else if(y instanceof Uint8Array)D=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)D=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:A,type:D,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function u(m,g,y){const S=g.array,M=g._updateRange,A=g.updateRanges;if(o.bindBuffer(y,m),M.count===-1&&A.length===0&&o.bufferSubData(y,0,S),A.length!==0){for(let D=0,v=A.length;D<v;D++){const _=A[D];i?o.bufferSubData(y,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):o.bufferSubData(y,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):o.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=r.get(m);(!S||S.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);if(y===void 0)r.set(m,l(m,g));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(y.buffer,m,g),y.version=m.version}}return{get:h,remove:d,update:p}}class wc extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,y=e/d,S=i/p,M=[],A=[],D=[],v=[];for(let _=0;_<g;_++){const O=_*S-h;for(let L=0;L<m;L++){const B=L*y-u;A.push(B,-O,0),D.push(0,0,1),v.push(L/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<d;O++){const L=O+m*_,B=O+m*(_+1),V=O+1+m*(_+1),I=O+1+m*_;M.push(L,B,I),M.push(B,V,I)}this.setIndex(M),this.setAttribute("position",new pi(A,3)),this.setAttribute("normal",new pi(D,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var MS=`#ifdef USE_ALPHAHASH
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
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,WS=`#define PI 3.141592653589793
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
#endif`,XM=`#ifdef USE_NORMALMAP
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
}`,XE=`#define PHONG
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
}`,be={alphahash_fragment:MS,alphahash_pars_fragment:ES,alphamap_fragment:bS,alphamap_pars_fragment:TS,alphatest_fragment:AS,alphatest_pars_fragment:wS,aomap_fragment:RS,aomap_pars_fragment:CS,batching_pars_vertex:DS,batching_vertex:LS,begin_vertex:US,beginnormal_vertex:NS,bsdfs:OS,iridescence_fragment:PS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:HS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:kS,color_vertex:XS,common:WS,cube_uv_reflection_fragment:qS,defaultnormal_vertex:YS,displacementmap_pars_vertex:jS,displacementmap_vertex:ZS,emissivemap_fragment:KS,emissivemap_pars_fragment:QS,colorspace_fragment:JS,colorspace_pars_fragment:$S,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:mM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:_M,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:xM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:bM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:DM,map_particle_fragment:LM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:yE,worldpos_vertex:xE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:bE,cube_vert:TE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:XE,meshphysical_vert:WE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tb},Vt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Di={basic:{uniforms:In([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:In([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:In([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:In([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:In([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:In([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:In([Vt.points,Vt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:In([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:In([Vt.common,Vt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:In([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:In([Vt.sprite,Vt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:In([Vt.common,Vt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:In([Vt.lights,Vt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Di.physical={uniforms:In([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const cc={r:0,b:0,g:0};function eb(o,e,i,r,l,u,h){const d=new Oe(0);let p=u===!0?0:1,m,g,y=null,S=0,M=null;function A(v,_){let O=!1,L=_.isScene===!0?_.background:null;L&&L.isTexture&&(L=(_.backgroundBlurriness>0?i:e).get(L)),L===null?D(d,p):L&&L.isColor&&(D(L,1),O=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===Ec)?(g===void 0&&(g=new ei(new Va(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,(y!==L||S!==L.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=L,S=L.version,M=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new ei(new wc(2,2),new sa({name:"BackgroundMaterial",uniforms:Cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||S!==L.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=L,S=L.version,M=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function D(v,_){v.getRGB(cc,d0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(v,_=1){d.set(v),p=_,D(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,D(d,p)},render:A}}function nb(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},p=v(null);let m=p,g=!1;function y(X,rt,G,ot,$){let ut=!1;if(h){const C=D(ot,G,rt);m!==C&&(m=C,M(m.object)),ut=_(X,ot,G,$),ut&&O(X,ot,G,$)}else{const C=rt.wireframe===!0;(m.geometry!==ot.id||m.program!==G.id||m.wireframe!==C)&&(m.geometry=ot.id,m.program=G.id,m.wireframe=C,ut=!0)}$!==null&&i.update($,o.ELEMENT_ARRAY_BUFFER),(ut||g)&&(g=!1,H(X,rt,G,ot),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get($).buffer))}function S(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(X){return r.isWebGL2?o.bindVertexArray(X):u.bindVertexArrayOES(X)}function A(X){return r.isWebGL2?o.deleteVertexArray(X):u.deleteVertexArrayOES(X)}function D(X,rt,G){const ot=G.wireframe===!0;let $=d[X.id];$===void 0&&($={},d[X.id]=$);let ut=$[rt.id];ut===void 0&&(ut={},$[rt.id]=ut);let C=ut[ot];return C===void 0&&(C=v(S()),ut[ot]=C),C}function v(X){const rt=[],G=[],ot=[];for(let $=0;$<l;$++)rt[$]=0,G[$]=0,ot[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:G,attributeDivisors:ot,object:X,attributes:{},index:null}}function _(X,rt,G,ot){const $=m.attributes,ut=rt.attributes;let C=0;const j=G.getAttributes();for(const pt in j)if(j[pt].location>=0){const k=$[pt];let ft=ut[pt];if(ft===void 0&&(pt==="instanceMatrix"&&X.instanceMatrix&&(ft=X.instanceMatrix),pt==="instanceColor"&&X.instanceColor&&(ft=X.instanceColor)),k===void 0||k.attribute!==ft||ft&&k.data!==ft.data)return!0;C++}return m.attributesNum!==C||m.index!==ot}function O(X,rt,G,ot){const $={},ut=rt.attributes;let C=0;const j=G.getAttributes();for(const pt in j)if(j[pt].location>=0){let k=ut[pt];k===void 0&&(pt==="instanceMatrix"&&X.instanceMatrix&&(k=X.instanceMatrix),pt==="instanceColor"&&X.instanceColor&&(k=X.instanceColor));const ft={};ft.attribute=k,k&&k.data&&(ft.data=k.data),$[pt]=ft,C++}m.attributes=$,m.attributesNum=C,m.index=ot}function L(){const X=m.newAttributes;for(let rt=0,G=X.length;rt<G;rt++)X[rt]=0}function B(X){V(X,0)}function V(X,rt){const G=m.newAttributes,ot=m.enabledAttributes,$=m.attributeDivisors;G[X]=1,ot[X]===0&&(o.enableVertexAttribArray(X),ot[X]=1),$[X]!==rt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,rt),$[X]=rt)}function I(){const X=m.newAttributes,rt=m.enabledAttributes;for(let G=0,ot=rt.length;G<ot;G++)rt[G]!==X[G]&&(o.disableVertexAttribArray(G),rt[G]=0)}function F(X,rt,G,ot,$,ut,C){C===!0?o.vertexAttribIPointer(X,rt,G,$,ut):o.vertexAttribPointer(X,rt,G,ot,$,ut)}function H(X,rt,G,ot){if(r.isWebGL2===!1&&(X.isInstancedMesh||ot.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const $=ot.attributes,ut=G.getAttributes(),C=rt.defaultAttributeValues;for(const j in ut){const pt=ut[j];if(pt.location>=0){let Ct=$[j];if(Ct===void 0&&(j==="instanceMatrix"&&X.instanceMatrix&&(Ct=X.instanceMatrix),j==="instanceColor"&&X.instanceColor&&(Ct=X.instanceColor)),Ct!==void 0){const k=Ct.normalized,ft=Ct.itemSize,Et=i.get(Ct);if(Et===void 0)continue;const jt=Et.buffer,zt=Et.type,Bt=Et.bytesPerElement,$t=r.isWebGL2===!0&&(zt===o.INT||zt===o.UNSIGNED_INT||Ct.gpuType===Y_);if(Ct.isInterleavedBufferAttribute){const oe=Ct.data,J=oe.stride,Ge=Ct.offset;if(oe.isInstancedInterleavedBuffer){for(let ae=0;ae<pt.locationSize;ae++)V(pt.location+ae,oe.meshPerAttribute);X.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<pt.locationSize;ae++)B(pt.location+ae);o.bindBuffer(o.ARRAY_BUFFER,jt);for(let ae=0;ae<pt.locationSize;ae++)F(pt.location+ae,ft/pt.locationSize,zt,k,J*Bt,(Ge+ft/pt.locationSize*ae)*Bt,$t)}else{if(Ct.isInstancedBufferAttribute){for(let oe=0;oe<pt.locationSize;oe++)V(pt.location+oe,Ct.meshPerAttribute);X.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let oe=0;oe<pt.locationSize;oe++)B(pt.location+oe);o.bindBuffer(o.ARRAY_BUFFER,jt);for(let oe=0;oe<pt.locationSize;oe++)F(pt.location+oe,ft/pt.locationSize,zt,k,ft*Bt,ft/pt.locationSize*oe*Bt,$t)}}else if(C!==void 0){const k=C[j];if(k!==void 0)switch(k.length){case 2:o.vertexAttrib2fv(pt.location,k);break;case 3:o.vertexAttrib3fv(pt.location,k);break;case 4:o.vertexAttrib4fv(pt.location,k);break;default:o.vertexAttrib1fv(pt.location,k)}}}}I()}function lt(){_t();for(const X in d){const rt=d[X];for(const G in rt){const ot=rt[G];for(const $ in ot)A(ot[$].object),delete ot[$];delete rt[G]}delete d[X]}}function b(X){if(d[X.id]===void 0)return;const rt=d[X.id];for(const G in rt){const ot=rt[G];for(const $ in ot)A(ot[$].object),delete ot[$];delete rt[G]}delete d[X.id]}function P(X){for(const rt in d){const G=d[rt];if(G[X.id]===void 0)continue;const ot=G[X.id];for(const $ in ot)A(ot[$].object),delete ot[$];delete G[X.id]}}function _t(){At(),g=!0,m!==p&&(m=p,M(m.object))}function At(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:_t,resetDefaultState:At,dispose:lt,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:L,enableAttribute:B,disableUnusedAttributes:I}}function ib(o,e,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,y){o.drawArrays(u,g,y),i.update(y,u,1)}function p(g,y,S){if(S===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,g,y,S),i.update(y,u,S)}function m(g,y,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<S;A++)this.render(g[A],y[A]);else{M.multiDrawArraysWEBGL(u,g,0,y,0,S);let A=0;for(let D=0;D<S;D++)A+=y[D];i.update(A,u,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function ab(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),D=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,B=h||e.has("OES_texture_float"),V=L&&B,I=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:A,maxAttributes:D,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:O,vertexTextures:L,floatFragmentTextures:B,floatVertexTextures:V,maxSamples:I}}function rb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Ba,d=new De,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||l;return l=S,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,S){i=g(y,S,0)},this.setState=function(y,S,M){const A=y.clippingPlanes,D=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!l||A===null||A.length===0||u&&!v)u?g(null):m();else{const O=u?0:r,L=O*4;let B=_.clippingState||null;p.value=B,B=g(A,S,L,M);for(let V=0;V!==L;++V)B[V]=i[V];_.clippingState=B,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,S,M,A){const D=y!==null?y.length:0;let v=null;if(D!==0){if(v=p.value,A!==!0||v===null){const _=M+D*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(v===null||v.length<_)&&(v=new Float32Array(_));for(let L=0,B=M;L!==D;++L,B+=4)h.copy(y[L]).applyMatrix4(O,d),h.normal.toArray(v,B),v[B+3]=h.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,v}}function sb(o){let e=new WeakMap;function i(h,d){return d===vd?h.mapping=As:d===yd&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vd||d===yd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new vS(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends h0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xs=4,u_=[.125,.215,.35,.446,.526,.582],gr=20,sd=new g0,f_=new Oe;let od=null,ld=0,cd=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,d_=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,pr,vs),new q(0,pr,-vs),new q(vs,0,pr),new q(-vs,0,pr),new q(pr,vs,0),new q(-pr,vs,0)];class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:ra,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(u)),this._blurMaterial=lb(u,e,i)}return l}_compileMaterial(e){const i=new ei(this._lodPlanes[0],e);this._renderer.compile(i,sd)}_sceneToCubeUV(e,i,r,l){const d=new ti(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(f_),g.toneMapping=Ha,g.autoClear=!1;const M=new c0({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),A=new ei(new Va,M);let D=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,D=!0):(M.color.copy(f_),D=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):O===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const L=this._cubeSize;uc(l,O*L,_>2?L:0,L,L),g.setRenderTarget(l),D&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=d_[(l-1)%d_.length];this._blur(e,l-1,l,u,h)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new ei(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),D=u/A,v=isFinite(u)?1+Math.floor(g*D):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let O=0;for(let F=0;F<gr;++F){const H=F/D,lt=Math.exp(-H*H/2);_.push(lt),F===0?O+=lt:F<v&&(O+=2*lt)}for(let F=0;F<_.length;F++)_[F]=_[F]/O;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=A,S.mipInt.value=L-r;const B=this._sizeLods[l],V=3*B*(l>L-xs?l-L+xs:0),I=4*(this._cubeSize-B);uc(i,V,I,3*B,2*B),p.setRenderTarget(i),p.render(y,sd)}}function ob(o){const e=[],i=[],r=[];let l=o;const u=o-xs+1+u_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-xs?p=u_[h-o+xs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,y=1+m,S=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,A=6,D=3,v=2,_=1,O=new Float32Array(D*A*M),L=new Float32Array(v*A*M),B=new Float32Array(_*A*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,H=I>2?0:-1,lt=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];O.set(lt,D*A*I),L.set(S,v*A*I);const b=[I,I,I,I,I,I];B.set(b,_*A*I)}const V=new Oi;V.setAttribute("position",new Ni(O,D)),V.setAttribute("uv",new Ni(L,v)),V.setAttribute("faceIndex",new Ni(B,_)),e.push(V),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function p_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lb(o,e,i){const r=new Float32Array(gr),l=new q(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function m_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function g_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

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
	`}function cb(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===vd||p===yd,g=p===As||p===ws;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let y=e.get(d);return i===null&&(i=new h_(o)),y=m?i.fromEquirectangular(d,y):i.fromCubemap(d,y),e.set(d,y),y.texture}else{if(e.has(d))return e.get(d).texture;{const y=d.image;if(m&&y&&y.height>0||g&&y&&l(y)){i===null&&(i=new h_(o));const S=m?i.fromEquirectangular(d):i.fromCubemap(d);return e.set(d,S),d.addEventListener("dispose",u),S.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ub(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fb(o,e,i,r){const l={},u=new WeakMap;function h(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);for(const A in S.morphAttributes){const D=S.morphAttributes[A];for(let v=0,_=D.length;v<_;v++)e.remove(D[v])}S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(y){const S=y.attributes;for(const A in S)e.update(S[A],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const A in M){const D=M[A];for(let v=0,_=D.length;v<_;v++)e.update(D[v],o.ARRAY_BUFFER)}}function m(y){const S=[],M=y.index,A=y.attributes.position;let D=0;if(M!==null){const O=M.array;D=M.version;for(let L=0,B=O.length;L<B;L+=3){const V=O[L+0],I=O[L+1],F=O[L+2];S.push(V,I,I,F,F,V)}}else if(A!==void 0){const O=A.array;D=A.version;for(let L=0,B=O.length/3-1;L<B;L+=3){const V=L+0,I=L+1,F=L+2;S.push(V,I,I,F,F,V)}}else return;const v=new(i0(S)?f0:u0)(S,1);v.version=D;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const S=u.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:g}}function db(o,e,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function g(M,A){o.drawElements(u,A,d,M*p),i.update(A,u,1)}function y(M,A,D){if(D===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,A,d,M*p,D),i.update(A,u,D)}function S(M,A,D){if(D===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<D;_++)this.render(M[_]/p,A[_]);else{v.multiDrawElementsWEBGL(u,A,0,d,M,0,D);let _=0;for(let O=0;O<D;O++)_+=A[O];i.update(_,u,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=y,this.renderMultiDraw=S}function hb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pb(o,e){return o[0]-e[0]}function mb(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gb(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new $e,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,y){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,D=A!==void 0?A.length:0;let v=u.get(g);if(v===void 0||v.count!==D){let rt=function(){At.dispose(),u.delete(g),g.removeEventListener("dispose",rt)};var M=rt;v!==void 0&&v.texture.dispose();const L=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,V=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],H=g.morphAttributes.color||[];let lt=0;L===!0&&(lt=1),B===!0&&(lt=2),V===!0&&(lt=3);let b=g.attributes.position.count*lt,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const _t=new Float32Array(b*P*4*D),At=new s0(_t,b,P,D);At.type=ia,At.needsUpdate=!0;const X=lt*4;for(let G=0;G<D;G++){const ot=I[G],$=F[G],ut=H[G],C=b*P*4*G;for(let j=0;j<ot.count;j++){const pt=j*X;L===!0&&(h.fromBufferAttribute(ot,j),_t[C+pt+0]=h.x,_t[C+pt+1]=h.y,_t[C+pt+2]=h.z,_t[C+pt+3]=0),B===!0&&(h.fromBufferAttribute($,j),_t[C+pt+4]=h.x,_t[C+pt+5]=h.y,_t[C+pt+6]=h.z,_t[C+pt+7]=0),V===!0&&(h.fromBufferAttribute(ut,j),_t[C+pt+8]=h.x,_t[C+pt+9]=h.y,_t[C+pt+10]=h.z,_t[C+pt+11]=ut.itemSize===4?h.w:1)}}v={count:D,texture:At,size:new ge(b,P)},u.set(g,v),g.addEventListener("dispose",rt)}let _=0;for(let L=0;L<S.length;L++)_+=S[L];const O=g.morphTargetsRelative?1:1-_;y.getUniforms().setValue(o,"morphTargetBaseInfluence",O),y.getUniforms().setValue(o,"morphTargetInfluences",S),y.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const A=S===void 0?0:S.length;let D=r[g.id];if(D===void 0||D.length!==A){D=[];for(let B=0;B<A;B++)D[B]=[B,0];r[g.id]=D}for(let B=0;B<A;B++){const V=D[B];V[0]=B,V[1]=S[B]}D.sort(mb);for(let B=0;B<8;B++)B<A&&D[B][1]?(d[B][0]=D[B][0],d[B][1]=D[B][1]):(d[B][0]=Number.MAX_SAFE_INTEGER,d[B][1]=0);d.sort(pb);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let O=0;for(let B=0;B<8;B++){const V=d[B],I=V[0],F=V[1];I!==Number.MAX_SAFE_INTEGER&&F?(v&&g.getAttribute("morphTarget"+B)!==v[I]&&g.setAttribute("morphTarget"+B,v[I]),_&&g.getAttribute("morphNormal"+B)!==_[I]&&g.setAttribute("morphNormal"+B,_[I]),l[B]=F,O+=F):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const L=g.morphTargetsRelative?1:1-O;y.getUniforms().setValue(o,"morphTargetBaseInfluence",L),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _b(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return y}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class _0 extends qn{constructor(e,i,r,l,u,h,d,p,m,g){if(g=g!==void 0?g:yr,g!==yr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===yr&&(r=Fa),r===void 0&&g===Rs&&(r=vr),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Hn,this.minFilter=p!==void 0?p:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new qn,y0=new _0(1,1);y0.compareFunction=n0;const x0=new s0,S0=new eS,M0=new p0,__=[],v_=[],y_=new Float32Array(16),x_=new Float32Array(9),S_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Rc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function Mb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;S_.set(r),o.uniformMatrix2fv(this.addr,!1,S_),_n(i,r)}}function Eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;x_.set(r),o.uniformMatrix3fv(this.addr,!1,x_),_n(i,r)}}function bb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;y_.set(r),o.uniformMatrix4fv(this.addr,!1,y_),_n(i,r)}}function Tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function Cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function Lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function Nb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?y0:v0;i.setTexture2D(e||u,l)}function Ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||S0,l)}function Pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||M0,l)}function zb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||x0,l)}function Bb(o){switch(o){case 5126:return vb;case 35664:return yb;case 35665:return xb;case 35666:return Sb;case 35674:return Mb;case 35675:return Eb;case 35676:return bb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return wb;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return Db;case 36295:return Lb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return zb}}function Fb(o,e){o.uniform1fv(this.addr,e)}function Ib(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function Hb(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function Gb(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function Vb(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kb(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Xb(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Wb(o,e){o.uniform1iv(this.addr,e)}function qb(o,e){o.uniform2iv(this.addr,e)}function Yb(o,e){o.uniform3iv(this.addr,e)}function jb(o,e){o.uniform4iv(this.addr,e)}function Zb(o,e){o.uniform1uiv(this.addr,e)}function Kb(o,e){o.uniform2uiv(this.addr,e)}function Qb(o,e){o.uniform3uiv(this.addr,e)}function Jb(o,e){o.uniform4uiv(this.addr,e)}function $b(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||v0,u[h])}function tT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||S0,u[h])}function eT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||M0,u[h])}function nT(o,e,i){const r=this.cache,l=e.length,u=Rc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||x0,u[h])}function iT(o){switch(o){case 5126:return Fb;case 35664:return Ib;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return kb;case 35676:return Xb;case 5124:case 35670:return Wb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return Zb;case 36294:return Kb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}class aT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Bb(i.type)}}class rT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iT(i.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function oT(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),h=ud.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){M_(i,m===void 0?new aT(d,o,e):new rT(d,o,e));break}else{let y=i.map[d];y===void 0&&(y=new sT(d),M_(i,y)),i=y}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);oT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lT=37297;let cT=0;function uT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function fT(o){const e=We.getPrimaries(We.workingColorSpace),i=We.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case ra:case bc:return[r,"LinearTransferOETF"];case An:case Dd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function b_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+uT(o.getShaderSource(e),h)}else return l}function dT(o,e){const i=fT(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function hT(o,e){let i;switch(e){case dx:i="Linear";break;case hx:i="Reinhard";break;case px:i="OptimizedCineon";break;case mx:i="ACESFilmic";break;case _x:i="AgX";break;case gx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function mT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function gT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _T(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ss(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(o){return o.replace(vT,xT)}const yT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xT(o,e){let i=be[e];if(i===void 0){const r=yT.get(e);if(r!==void 0)i=be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bd(i)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(o){return o.replace(ST,MT)}function MT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function R_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function ET(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case ux:e="ENVMAP_BLENDING_MIX";break;case fx:e="ENVMAP_BLENDING_ADD";break}return e}function wT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function RT(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ET(i),m=bT(i),g=TT(i),y=AT(i),S=wT(i),M=i.isWebGL2?"":pT(i),A=mT(i),D=gT(u),v=l.createProgram();let _,O,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Ss).join(`
`),_.length>0&&(_+=`
`),O=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Ss).join(`
`),O.length>0&&(O+=`
`)):(_=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),O=[M,R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?be.tonemapping_pars_fragment:"",i.toneMapping!==Ha?hT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,dT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ss).join(`
`)),h=bd(h),h=T_(h,i),h=A_(h,i),d=bd(d),d=T_(d,i),d=A_(d,i),h=w_(h),d=w_(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,O=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const B=L+_+h,V=L+O+d,I=E_(l,l.VERTEX_SHADER,B),F=E_(l,l.FRAGMENT_SHADER,V);l.attachShader(v,I),l.attachShader(v,F),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function H(_t){if(o.debug.checkShaderErrors){const At=l.getProgramInfoLog(v).trim(),X=l.getShaderInfoLog(I).trim(),rt=l.getShaderInfoLog(F).trim();let G=!0,ot=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,I,F);else{const $=b_(l,I,"vertex"),ut=b_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+_t.name+`
Material Type: `+_t.type+`

Program Info Log: `+At+`
`+$+`
`+ut)}else At!==""?console.warn("THREE.WebGLProgram: Program Info Log:",At):(X===""||rt==="")&&(ot=!1);ot&&(_t.diagnostics={runnable:G,programLog:At,vertexShader:{log:X,prefix:_},fragmentShader:{log:rt,prefix:O}})}l.deleteShader(I),l.deleteShader(F),lt=new pc(l,v),b=_T(l,v)}let lt;this.getUniforms=function(){return lt===void 0&&H(this),lt};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=l.getProgramParameter(v,lT)),P},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=F,this}let CT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new LT(e),i.set(e,r)),r}}class LT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function UT(o,e,i,r,l,u,h){const d=new o0,p=new DT,m=new Set,g=[],y=l.isWebGL2,S=l.logarithmicDepthBuffer,M=l.vertexTextures;let A=l.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return m.add(b),b===0?"uv":`uv${b}`}function _(b,P,_t,At,X){const rt=At.fog,G=X.geometry,ot=b.isMeshStandardMaterial?At.environment:null,$=(b.isMeshStandardMaterial?i:e).get(b.envMap||ot),ut=$&&$.mapping===Ec?$.image.height:null,C=D[b.type];b.precision!==null&&(A=l.getMaxPrecision(b.precision),A!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",A,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=j!==void 0?j.length:0;let Ct=0;G.morphAttributes.position!==void 0&&(Ct=1),G.morphAttributes.normal!==void 0&&(Ct=2),G.morphAttributes.color!==void 0&&(Ct=3);let k,ft,Et,jt;if(C){const ye=Di[C];k=ye.vertexShader,ft=ye.fragmentShader}else k=b.vertexShader,ft=b.fragmentShader,p.update(b),Et=p.getVertexShaderID(b),jt=p.getFragmentShaderID(b);const zt=o.getRenderTarget(),Bt=X.isInstancedMesh===!0,$t=X.isBatchedMesh===!0,oe=!!b.map,J=!!b.matcap,Ge=!!$,ae=!!b.aoMap,ue=!!b.lightMap,Jt=!!b.bumpMap,xt=!!b.normalMap,Tt=!!b.displacementMap,T=!!b.emissiveMap,E=!!b.metalnessMap,Z=!!b.roughnessMap,ht=b.anisotropy>0,it=b.clearcoat>0,dt=b.iridescence>0,wt=b.sheen>0,ct=b.transmission>0,vt=ht&&!!b.anisotropyMap,St=it&&!!b.clearcoatMap,Ot=it&&!!b.clearcoatNormalMap,Mt=it&&!!b.clearcoatRoughnessMap,kt=dt&&!!b.iridescenceMap,te=dt&&!!b.iridescenceThicknessMap,Ht=wt&&!!b.sheenColorMap,Wt=wt&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,ce=!!b.specularColorMap,N=!!b.specularIntensityMap,Lt=ct&&!!b.transmissionMap,It=ct&&!!b.thicknessMap,ne=!!b.gradientMap,U=!!b.alphaMap,Dt=b.alphaTest>0,bt=!!b.alphaHash,Zt=!!b.extensions;let re=Ha;b.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(re=o.toneMapping);const Ue={isWebGL2:y,shaderID:C,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:ft,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:jt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:A,batching:$t,instancing:Bt,instancingColor:Bt&&X.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:zt===null?o.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:ra,alphaToCoverage:!!b.alphaToCoverage,map:oe,matcap:J,envMap:Ge,envMapMode:Ge&&$.mapping,envMapCubeUVHeight:ut,aoMap:ae,lightMap:ue,bumpMap:Jt,normalMap:xt,displacementMap:M&&Tt,emissiveMap:T,normalMapObjectSpace:xt&&b.normalMapType===Rx,normalMapTangentSpace:xt&&b.normalMapType===e0,metalnessMap:E,roughnessMap:Z,anisotropy:ht,anisotropyMap:vt,clearcoat:it,clearcoatMap:St,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Mt,iridescence:dt,iridescenceMap:kt,iridescenceThicknessMap:te,sheen:wt,sheenColorMap:Ht,sheenRoughnessMap:Wt,specularMap:Ft,specularColorMap:ce,specularIntensityMap:N,transmission:ct,transmissionMap:Lt,thicknessMap:It,gradientMap:ne,opaque:b.transparent===!1&&b.blending===Es&&b.alphaToCoverage===!1,alphaMap:U,alphaTest:Dt,alphaHash:bt,combine:b.combine,mapUv:oe&&v(b.map.channel),aoMapUv:ae&&v(b.aoMap.channel),lightMapUv:ue&&v(b.lightMap.channel),bumpMapUv:Jt&&v(b.bumpMap.channel),normalMapUv:xt&&v(b.normalMap.channel),displacementMapUv:Tt&&v(b.displacementMap.channel),emissiveMapUv:T&&v(b.emissiveMap.channel),metalnessMapUv:E&&v(b.metalnessMap.channel),roughnessMapUv:Z&&v(b.roughnessMap.channel),anisotropyMapUv:vt&&v(b.anisotropyMap.channel),clearcoatMapUv:St&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ft&&v(b.specularMap.channel),specularColorMapUv:ce&&v(b.specularColorMap.channel),specularIntensityMapUv:N&&v(b.specularIntensityMap.channel),transmissionMapUv:Lt&&v(b.transmissionMap.channel),thicknessMapUv:It&&v(b.thicknessMap.channel),alphaMapUv:U&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(oe||U),fog:!!rt,useFog:b.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ct,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&_t.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,useLegacyLights:o._useLegacyLights,decodeVideoTexture:oe&&b.map.isVideoTexture===!0&&We.getTransfer(b.map.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Zt&&b.extensions.derivatives===!0,extensionFragDepth:Zt&&b.extensions.fragDepth===!0,extensionDrawBuffers:Zt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Zt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Zt&&b.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ue.vertexUv1s=m.has(1),Ue.vertexUv2s=m.has(2),Ue.vertexUv3s=m.has(3),m.clear(),Ue}function O(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const _t in b.defines)P.push(_t),P.push(b.defines[_t]);return b.isRawShaderMaterial===!1&&(L(P,b),B(P,b),P.push(o.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function L(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function B(b,P){d.disableAll(),P.isWebGL2&&d.enable(0),P.supportsVertexTextures&&d.enable(1),P.instancing&&d.enable(2),P.instancingColor&&d.enable(3),P.matcap&&d.enable(4),P.envMap&&d.enable(5),P.normalMapObjectSpace&&d.enable(6),P.normalMapTangentSpace&&d.enable(7),P.clearcoat&&d.enable(8),P.iridescence&&d.enable(9),P.alphaTest&&d.enable(10),P.vertexColors&&d.enable(11),P.vertexAlphas&&d.enable(12),P.vertexUv1s&&d.enable(13),P.vertexUv2s&&d.enable(14),P.vertexUv3s&&d.enable(15),P.vertexTangents&&d.enable(16),P.anisotropy&&d.enable(17),P.alphaHash&&d.enable(18),P.batching&&d.enable(19),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.skinning&&d.enable(4),P.morphTargets&&d.enable(5),P.morphNormals&&d.enable(6),P.morphColors&&d.enable(7),P.premultipliedAlpha&&d.enable(8),P.shadowMapEnabled&&d.enable(9),P.useLegacyLights&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.alphaToCoverage&&d.enable(20),b.push(d.mask)}function V(b){const P=D[b.type];let _t;if(P){const At=Di[P];_t=pS.clone(At.uniforms)}else _t=b.uniforms;return _t}function I(b,P){let _t;for(let At=0,X=g.length;At<X;At++){const rt=g[At];if(rt.cacheKey===P){_t=rt,++_t.usedTimes;break}}return _t===void 0&&(_t=new RT(o,P,b,u),g.push(_t)),_t}function F(b){if(--b.usedTimes===0){const P=g.indexOf(b);g[P]=g[g.length-1],g.pop(),b.destroy()}}function H(b){p.remove(b)}function lt(){p.dispose()}return{getParameters:_,getProgramCacheKey:O,getUniforms:V,acquireProgram:I,releaseProgram:F,releaseShaderCache:H,programs:g,dispose:lt}}function NT(){let o=new WeakMap;function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function OT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(y,S,M,A,D,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:S,material:M,groupOrder:A,renderOrder:y.renderOrder,z:D,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=y.renderOrder,_.z=D,_.group=v),e++,_}function d(y,S,M,A,D,v){const _=h(y,S,M,A,D,v);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(y,S,M,A,D,v){const _=h(y,S,M,A,D,v);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,S){i.length>1&&i.sort(y||OT),r.length>1&&r.sort(S||C_),l.length>1&&l.sort(S||C_)}function g(){for(let y=e,S=o.length;y<S;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function PT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new D_,o.set(r,[h])):l>=u.length?(h=new D_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function zT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new q,color:new Oe};break;case"SpotLight":i={position:new q,direction:new q,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new q,halfWidth:new q,halfHeight:new q};break}return o[e.id]=i,i}}}function BT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let FT=0;function IT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HT(o,e){const i=new zT,r=BT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new q);const u=new q,h=new cn,d=new cn;function p(g,y){let S=0,M=0,A=0;for(let _t=0;_t<9;_t++)l.probe[_t].set(0,0,0);let D=0,v=0,_=0,O=0,L=0,B=0,V=0,I=0,F=0,H=0,lt=0;g.sort(IT);const b=y===!0?Math.PI:1;for(let _t=0,At=g.length;_t<At;_t++){const X=g[_t],rt=X.color,G=X.intensity,ot=X.distance,$=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)S+=rt.r*G*b,M+=rt.g*G*b,A+=rt.b*G*b;else if(X.isLightProbe){for(let ut=0;ut<9;ut++)l.probe[ut].addScaledVector(X.sh.coefficients[ut],G);lt++}else if(X.isDirectionalLight){const ut=i.get(X);if(ut.color.copy(X.color).multiplyScalar(X.intensity*b),X.castShadow){const C=X.shadow,j=r.get(X);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,l.directionalShadow[D]=j,l.directionalShadowMap[D]=$,l.directionalShadowMatrix[D]=X.shadow.matrix,B++}l.directional[D]=ut,D++}else if(X.isSpotLight){const ut=i.get(X);ut.position.setFromMatrixPosition(X.matrixWorld),ut.color.copy(rt).multiplyScalar(G*b),ut.distance=ot,ut.coneCos=Math.cos(X.angle),ut.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ut.decay=X.decay,l.spot[_]=ut;const C=X.shadow;if(X.map&&(l.spotLightMap[F]=X.map,F++,C.updateMatrices(X),X.castShadow&&H++),l.spotLightMatrix[_]=C.matrix,X.castShadow){const j=r.get(X);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,l.spotShadow[_]=j,l.spotShadowMap[_]=$,I++}_++}else if(X.isRectAreaLight){const ut=i.get(X);ut.color.copy(rt).multiplyScalar(G),ut.halfWidth.set(X.width*.5,0,0),ut.halfHeight.set(0,X.height*.5,0),l.rectArea[O]=ut,O++}else if(X.isPointLight){const ut=i.get(X);if(ut.color.copy(X.color).multiplyScalar(X.intensity*b),ut.distance=X.distance,ut.decay=X.decay,X.castShadow){const C=X.shadow,j=r.get(X);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,l.pointShadow[v]=j,l.pointShadowMap[v]=$,l.pointShadowMatrix[v]=X.shadow.matrix,V++}l.point[v]=ut,v++}else if(X.isHemisphereLight){const ut=i.get(X);ut.skyColor.copy(X.color).multiplyScalar(G*b),ut.groundColor.copy(X.groundColor).multiplyScalar(G*b),l.hemi[L]=ut,L++}}O>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Vt.LTC_FLOAT_1,l.rectAreaLTC2=Vt.LTC_FLOAT_2):(l.rectAreaLTC1=Vt.LTC_HALF_1,l.rectAreaLTC2=Vt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Vt.LTC_FLOAT_1,l.rectAreaLTC2=Vt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Vt.LTC_HALF_1,l.rectAreaLTC2=Vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=M,l.ambient[2]=A;const P=l.hash;(P.directionalLength!==D||P.pointLength!==v||P.spotLength!==_||P.rectAreaLength!==O||P.hemiLength!==L||P.numDirectionalShadows!==B||P.numPointShadows!==V||P.numSpotShadows!==I||P.numSpotMaps!==F||P.numLightProbes!==lt)&&(l.directional.length=D,l.spot.length=_,l.rectArea.length=O,l.point.length=v,l.hemi.length=L,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=V,l.pointShadowMap.length=V,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=V,l.spotLightMatrix.length=I+F-H,l.spotLightMap.length=F,l.numSpotLightShadowsWithMaps=H,l.numLightProbes=lt,P.directionalLength=D,P.pointLength=v,P.spotLength=_,P.rectAreaLength=O,P.hemiLength=L,P.numDirectionalShadows=B,P.numPointShadows=V,P.numSpotShadows=I,P.numSpotMaps=F,P.numLightProbes=lt,l.version=FT++)}function m(g,y){let S=0,M=0,A=0,D=0,v=0;const _=y.matrixWorldInverse;for(let O=0,L=g.length;O<L;O++){const B=g[O];if(B.isDirectionalLight){const V=l.directional[S];V.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),V.direction.sub(u),V.direction.transformDirection(_),S++}else if(B.isSpotLight){const V=l.spot[A];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),V.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),V.direction.sub(u),V.direction.transformDirection(_),A++}else if(B.isRectAreaLight){const V=l.rectArea[D];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),d.identity(),h.copy(B.matrixWorld),h.premultiply(_),d.extractRotation(h),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),V.halfWidth.applyMatrix4(d),V.halfHeight.applyMatrix4(d),D++}else if(B.isPointLight){const V=l.point[M];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),M++}else if(B.isHemisphereLight){const V=l.hemi[v];V.direction.setFromMatrixPosition(B.matrixWorld),V.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function L_(o,e){const i=new HT(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function h(y){r.push(y)}function d(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function GT(o,e){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let p;return d===void 0?(p=new L_(o,e),i.set(u,[p])):h>=d.length?(p=new L_(o,e),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class VT extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WT=`uniform sampler2D shadow_pass;
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
}`;function qT(o,e,i){let r=new Nd;const l=new ge,u=new ge,h=new $e,d=new VT({depthPacking:wx}),p=new kT,m={},g=i.maxTextureSize,y={[ka]:Wn,[Wn]:ka,[Li]:Li},S=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:XT,fragmentShader:WT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Oi;A.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ei(A,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X_;let _=this.type;this.render=function(I,F,H){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const lt=o.getRenderTarget(),b=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),_t=o.state;_t.setBlending(Ia),_t.buffers.color.setClear(1,1,1,1),_t.buffers.depth.setTest(!0),_t.setScissorTest(!1);const At=_!==na&&this.type===na,X=_===na&&this.type!==na;for(let rt=0,G=I.length;rt<G;rt++){const ot=I[rt],$=ot.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const ut=$.getFrameExtents();if(l.multiply(ut),u.copy($.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ut.x),l.x=u.x*ut.x,$.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ut.y),l.y=u.y*ut.y,$.mapSize.y=u.y)),$.map===null||At===!0||X===!0){const j=this.type!==na?{minFilter:Hn,magFilter:Hn}:{};$.map!==null&&$.map.dispose(),$.map=new Sr(l.x,l.y,j),$.map.texture.name=ot.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const C=$.getViewportCount();for(let j=0;j<C;j++){const pt=$.getViewport(j);h.set(u.x*pt.x,u.y*pt.y,u.x*pt.z,u.y*pt.w),_t.viewport(h),$.updateMatrices(ot,j),r=$.getFrustum(),B(F,H,$.camera,ot,this.type)}$.isPointLightShadow!==!0&&this.type===na&&O($,H),$.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(lt,b,P)};function O(I,F){const H=e.update(D);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(F,null,H,S,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(F,null,H,M,D,null)}function L(I,F,H,lt){let b=null;const P=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)b=P;else if(b=H.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const _t=b.uuid,At=F.uuid;let X=m[_t];X===void 0&&(X={},m[_t]=X);let rt=X[At];rt===void 0&&(rt=b.clone(),X[At]=rt,F.addEventListener("dispose",V)),b=rt}if(b.visible=F.visible,b.wireframe=F.wireframe,lt===na?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:y[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const _t=o.properties.get(b);_t.light=H}return b}function B(I,F,H,lt,b){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===na)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const At=e.update(I),X=I.material;if(Array.isArray(X)){const rt=At.groups;for(let G=0,ot=rt.length;G<ot;G++){const $=rt[G],ut=X[$.materialIndex];if(ut&&ut.visible){const C=L(I,ut,lt,b);I.onBeforeShadow(o,I,F,H,At,C,$),o.renderBufferDirect(H,null,At,C,I,$),I.onAfterShadow(o,I,F,H,At,C,$)}}}else if(X.visible){const rt=L(I,X,lt,b);I.onBeforeShadow(o,I,F,H,At,rt,null),o.renderBufferDirect(H,null,At,rt,I,null),I.onAfterShadow(o,I,F,H,At,rt,null)}}const _t=I.children;for(let At=0,X=_t.length;At<X;At++)B(_t[At],F,H,lt,b)}function V(I){I.target.removeEventListener("dispose",V);for(const H in m){const lt=m[H],b=I.target.uuid;b in lt&&(lt[b].dispose(),delete lt[b])}}}function YT(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const Dt=new $e;let bt=null;const Zt=new $e(0,0,0,0);return{setMask:function(re){bt!==re&&!U&&(o.colorMask(re,re,re,re),bt=re)},setLocked:function(re){U=re},setClear:function(re,Ue,ye,ze,we){we===!0&&(re*=ze,Ue*=ze,ye*=ze),Dt.set(re,Ue,ye,ze),Zt.equals(Dt)===!1&&(o.clearColor(re,Ue,ye,ze),Zt.copy(Dt))},reset:function(){U=!1,bt=null,Zt.set(-1,0,0,0)}}}function u(){let U=!1,Dt=null,bt=null,Zt=null;return{setTest:function(re){re?Bt(o.DEPTH_TEST):$t(o.DEPTH_TEST)},setMask:function(re){Dt!==re&&!U&&(o.depthMask(re),Dt=re)},setFunc:function(re){if(bt!==re){switch(re){case ix:o.depthFunc(o.NEVER);break;case ax:o.depthFunc(o.ALWAYS);break;case rx:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sx:o.depthFunc(o.EQUAL);break;case ox:o.depthFunc(o.GEQUAL);break;case lx:o.depthFunc(o.GREATER);break;case cx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=re}},setLocked:function(re){U=re},setClear:function(re){Zt!==re&&(o.clearDepth(re),Zt=re)},reset:function(){U=!1,Dt=null,bt=null,Zt=null}}}function h(){let U=!1,Dt=null,bt=null,Zt=null,re=null,Ue=null,ye=null,ze=null,we=null;return{setTest:function(xe){U||(xe?Bt(o.STENCIL_TEST):$t(o.STENCIL_TEST))},setMask:function(xe){Dt!==xe&&!U&&(o.stencilMask(xe),Dt=xe)},setFunc:function(xe,qe,nn){(bt!==xe||Zt!==qe||re!==nn)&&(o.stencilFunc(xe,qe,nn),bt=xe,Zt=qe,re=nn)},setOp:function(xe,qe,nn){(Ue!==xe||ye!==qe||ze!==nn)&&(o.stencilOp(xe,qe,nn),Ue=xe,ye=qe,ze=nn)},setLocked:function(xe){U=xe},setClear:function(xe){we!==xe&&(o.clearStencil(xe),we=xe)},reset:function(){U=!1,Dt=null,bt=null,Zt=null,re=null,Ue=null,ye=null,ze=null,we=null}}}const d=new l,p=new u,m=new h,g=new WeakMap,y=new WeakMap;let S={},M={},A=new WeakMap,D=[],v=null,_=!1,O=null,L=null,B=null,V=null,I=null,F=null,H=null,lt=new Oe(0,0,0),b=0,P=!1,_t=null,At=null,X=null,rt=null,G=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ut=0;const C=o.getParameter(o.VERSION);C.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(C)[1]),$=ut>=1):C.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),$=ut>=2);let j=null,pt={};const Ct=o.getParameter(o.SCISSOR_BOX),k=o.getParameter(o.VIEWPORT),ft=new $e().fromArray(Ct),Et=new $e().fromArray(k);function jt(U,Dt,bt,Zt){const re=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(U,Ue),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ye=0;ye<bt;ye++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(Dt,0,o.RGBA,1,1,Zt,0,o.RGBA,o.UNSIGNED_BYTE,re):o.texImage2D(Dt+ye,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,re);return Ue}const zt={};zt[o.TEXTURE_2D]=jt(o.TEXTURE_2D,o.TEXTURE_2D,1),zt[o.TEXTURE_CUBE_MAP]=jt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(zt[o.TEXTURE_2D_ARRAY]=jt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),zt[o.TEXTURE_3D]=jt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Bt(o.DEPTH_TEST),p.setFunc(mc),Tt(!1),T(fg),Bt(o.CULL_FACE),Jt(Ia);function Bt(U){S[U]!==!0&&(o.enable(U),S[U]=!0)}function $t(U){S[U]!==!1&&(o.disable(U),S[U]=!1)}function oe(U,Dt){return M[U]!==Dt?(o.bindFramebuffer(U,Dt),M[U]=Dt,r&&(U===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Dt),U===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Dt)),!0):!1}function J(U,Dt){let bt=D,Zt=!1;if(U)if(bt=A.get(Dt),bt===void 0&&(bt=[],A.set(Dt,bt)),U.isWebGLMultipleRenderTargets){const re=U.texture;if(bt.length!==re.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,ye=re.length;Ue<ye;Ue++)bt[Ue]=o.COLOR_ATTACHMENT0+Ue;bt.length=re.length,Zt=!0}}else bt[0]!==o.COLOR_ATTACHMENT0&&(bt[0]=o.COLOR_ATTACHMENT0,Zt=!0);else bt[0]!==o.BACK&&(bt[0]=o.BACK,Zt=!0);Zt&&(i.isWebGL2?o.drawBuffers(bt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function Ge(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const ae={[mr]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};if(r)ae[pg]=o.MIN,ae[mg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ae[pg]=U.MIN_EXT,ae[mg]=U.MAX_EXT)}const ue={[Xy]:o.ZERO,[Wy]:o.ONE,[qy]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[Jy]:o.SRC_ALPHA_SATURATE,[Ky]:o.DST_COLOR,[jy]:o.DST_ALPHA,[Yy]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[Qy]:o.ONE_MINUS_DST_COLOR,[Zy]:o.ONE_MINUS_DST_ALPHA,[$y]:o.CONSTANT_COLOR,[tx]:o.ONE_MINUS_CONSTANT_COLOR,[ex]:o.CONSTANT_ALPHA,[nx]:o.ONE_MINUS_CONSTANT_ALPHA};function Jt(U,Dt,bt,Zt,re,Ue,ye,ze,we,xe){if(U===Ia){_===!0&&($t(o.BLEND),_=!1);return}if(_===!1&&(Bt(o.BLEND),_=!0),U!==Gy){if(U!==O||xe!==P){if((L!==mr||I!==mr)&&(o.blendEquation(o.FUNC_ADD),L=mr,I=mr),xe)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}B=null,V=null,F=null,H=null,lt.set(0,0,0),b=0,O=U,P=xe}return}re=re||Dt,Ue=Ue||bt,ye=ye||Zt,(Dt!==L||re!==I)&&(o.blendEquationSeparate(ae[Dt],ae[re]),L=Dt,I=re),(bt!==B||Zt!==V||Ue!==F||ye!==H)&&(o.blendFuncSeparate(ue[bt],ue[Zt],ue[Ue],ue[ye]),B=bt,V=Zt,F=Ue,H=ye),(ze.equals(lt)===!1||we!==b)&&(o.blendColor(ze.r,ze.g,ze.b,we),lt.copy(ze),b=we),O=U,P=!1}function xt(U,Dt){U.side===Li?$t(o.CULL_FACE):Bt(o.CULL_FACE);let bt=U.side===Wn;Dt&&(bt=!bt),Tt(bt),U.blending===Es&&U.transparent===!1?Jt(Ia):Jt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const Zt=U.stencilWrite;m.setTest(Zt),Zt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Bt(o.SAMPLE_ALPHA_TO_COVERAGE):$t(o.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(U){_t!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),_t=U)}function T(U){U!==Iy?(Bt(o.CULL_FACE),U!==At&&(U===fg?o.cullFace(o.BACK):U===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):$t(o.CULL_FACE),At=U}function E(U){U!==X&&($&&o.lineWidth(U),X=U)}function Z(U,Dt,bt){U?(Bt(o.POLYGON_OFFSET_FILL),(rt!==Dt||G!==bt)&&(o.polygonOffset(Dt,bt),rt=Dt,G=bt)):$t(o.POLYGON_OFFSET_FILL)}function ht(U){U?Bt(o.SCISSOR_TEST):$t(o.SCISSOR_TEST)}function it(U){U===void 0&&(U=o.TEXTURE0+ot-1),j!==U&&(o.activeTexture(U),j=U)}function dt(U,Dt,bt){bt===void 0&&(j===null?bt=o.TEXTURE0+ot-1:bt=j);let Zt=pt[bt];Zt===void 0&&(Zt={type:void 0,texture:void 0},pt[bt]=Zt),(Zt.type!==U||Zt.texture!==Dt)&&(j!==bt&&(o.activeTexture(bt),j=bt),o.bindTexture(U,Dt||zt[U]),Zt.type=U,Zt.texture=Dt)}function wt(){const U=pt[j];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(U){ft.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),ft.copy(U))}function N(U){Et.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),Et.copy(U))}function Lt(U,Dt){let bt=y.get(Dt);bt===void 0&&(bt=new WeakMap,y.set(Dt,bt));let Zt=bt.get(U);Zt===void 0&&(Zt=o.getUniformBlockIndex(Dt,U.name),bt.set(U,Zt))}function It(U,Dt){const Zt=y.get(Dt).get(U);g.get(Dt)!==Zt&&(o.uniformBlockBinding(Dt,Zt,U.__bindingPointIndex),g.set(Dt,Zt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},j=null,pt={},M={},A=new WeakMap,D=[],v=null,_=!1,O=null,L=null,B=null,V=null,I=null,F=null,H=null,lt=new Oe(0,0,0),b=0,P=!1,_t=null,At=null,X=null,rt=null,G=null,ft.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Bt,disable:$t,bindFramebuffer:oe,drawBuffers:J,useProgram:Ge,setBlending:Jt,setMaterial:xt,setFlipSided:Tt,setCullFace:T,setLineWidth:E,setPolygonOffset:Z,setScissorTest:ht,activeTexture:it,bindTexture:dt,unbindTexture:wt,compressedTexImage2D:ct,compressedTexImage3D:vt,texImage2D:Wt,texImage3D:Ft,updateUBOMapping:Lt,uniformBlockBinding:It,texStorage2D:te,texStorage3D:Ht,texSubImage2D:St,texSubImage3D:Ot,compressedTexSubImage2D:Mt,compressedTexSubImage3D:kt,scissor:ce,viewport:N,reset:ne}}function jT(o,e,i,r,l,u,h){const d=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,E){return M?new OffscreenCanvas(T,E):Sc("canvas")}function D(T,E,Z,ht){let it=1;if((T.width>ht||T.height>ht)&&(it=ht/Math.max(T.width,T.height)),it<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const dt=E?xc:Math.floor,wt=dt(it*T.width),ct=dt(it*T.height);y===void 0&&(y=A(wt,ct));const vt=Z?A(wt,ct):y;return vt.width=wt,vt.height=ct,vt.getContext("2d").drawImage(T,0,0,wt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+wt+"x"+ct+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Ed(T.width)&&Ed(T.height)}function _(T){return d?!1:T.wrapS!==Mi||T.wrapT!==Mi||T.minFilter!==Hn&&T.minFilter!==Xn}function O(T,E){return T.generateMipmaps&&E&&T.minFilter!==Hn&&T.minFilter!==Xn}function L(T){o.generateMipmap(T)}function B(T,E,Z,ht,it=!1){if(d===!1)return E;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt=E;if(E===o.RED&&(Z===o.FLOAT&&(dt=o.R32F),Z===o.HALF_FLOAT&&(dt=o.R16F),Z===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.R8UI),Z===o.UNSIGNED_SHORT&&(dt=o.R16UI),Z===o.UNSIGNED_INT&&(dt=o.R32UI),Z===o.BYTE&&(dt=o.R8I),Z===o.SHORT&&(dt=o.R16I),Z===o.INT&&(dt=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(dt=o.RG32F),Z===o.HALF_FLOAT&&(dt=o.RG16F),Z===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RGBA){const wt=it?gc:We.getTransfer(ht);Z===o.FLOAT&&(dt=o.RGBA32F),Z===o.HALF_FLOAT&&(dt=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(dt=wt===Qe?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function V(T,E,Z){return O(T,Z)===!0||T.isFramebufferTexture&&T.minFilter!==Hn&&T.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function I(T){return T===Hn||T===gg||T===Do?o.NEAREST:o.LINEAR}function F(T){const E=T.target;E.removeEventListener("dispose",F),lt(E),E.isVideoTexture&&g.delete(E)}function H(T){const E=T.target;E.removeEventListener("dispose",H),P(E)}function lt(T){const E=r.get(T);if(E.__webglInit===void 0)return;const Z=T.source,ht=S.get(Z);if(ht){const it=ht[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(T),Object.keys(ht).length===0&&S.delete(Z)}r.remove(T)}function b(T){const E=r.get(T);o.deleteTexture(E.__webglTexture);const Z=T.source,ht=S.get(Z);delete ht[E.__cacheKey],h.memory.textures--}function P(T){const E=T.texture,Z=r.get(T),ht=r.get(E);if(ht.__webglTexture!==void 0&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(Z.__webglFramebuffer[it]))for(let dt=0;dt<Z.__webglFramebuffer[it].length;dt++)o.deleteFramebuffer(Z.__webglFramebuffer[it][dt]);else o.deleteFramebuffer(Z.__webglFramebuffer[it]);Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[it])}else{if(Array.isArray(Z.__webglFramebuffer))for(let it=0;it<Z.__webglFramebuffer.length;it++)o.deleteFramebuffer(Z.__webglFramebuffer[it]);else o.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let it=0;it<Z.__webglColorRenderbuffer.length;it++)Z.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[it]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let it=0,dt=E.length;it<dt;it++){const wt=r.get(E[it]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),h.memory.textures--),r.remove(E[it])}r.remove(E),r.remove(T)}let _t=0;function At(){_t=0}function X(){const T=_t;return T>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l.maxTextures),_t+=1,T}function rt(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function G(T,E){const Z=r.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.version>0&&Z.__version!==T.version){const ht=T.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(Z,T,E);return}}i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function ot(T,E){const Z=r.get(T);if(T.version>0&&Z.__version!==T.version){ft(Z,T,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function $(T,E){const Z=r.get(T);if(T.version>0&&Z.__version!==T.version){ft(Z,T,E);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function ut(T,E){const Z=r.get(T);if(T.version>0&&Z.__version!==T.version){Et(Z,T,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const C={[xd]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[Sd]:o.MIRRORED_REPEAT},j={[Hn]:o.NEAREST,[gg]:o.NEAREST_MIPMAP_NEAREST,[Do]:o.NEAREST_MIPMAP_LINEAR,[Xn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},pt={[Cx]:o.NEVER,[Px]:o.ALWAYS,[Dx]:o.LESS,[n0]:o.LEQUAL,[Lx]:o.EQUAL,[Ox]:o.GEQUAL,[Ux]:o.GREATER,[Nx]:o.NOTEQUAL};function Ct(T,E,Z){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===Bf||E.magFilter===Do||E.magFilter===_r||E.minFilter===Xn||E.minFilter===Bf||E.minFilter===Do||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(o.texParameteri(T,o.TEXTURE_WRAP_S,C[E.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,C[E.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,C[E.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,j[E.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,j[E.minFilter])):(o.texParameteri(T,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(T,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==Mi||E.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,o.TEXTURE_MAG_FILTER,I(E.magFilter)),o.texParameteri(T,o.TEXTURE_MIN_FILTER,I(E.minFilter)),E.minFilter!==Hn&&E.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ht=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Hn||E.minFilter!==Do&&E.minFilter!==_r||E.type===ia&&e.has("OES_texture_float_linear")===!1||d===!1&&E.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(o.texParameterf(T,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function k(T,E){let Z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",F));const ht=E.source;let it=S.get(ht);it===void 0&&(it={},S.set(ht,it));const dt=rt(E);if(dt!==T.__cacheKey){it[dt]===void 0&&(it[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),it[dt].usedTimes++;const wt=it[T.__cacheKey];wt!==void 0&&(it[T.__cacheKey].usedTimes--,wt.usedTimes===0&&b(E)),T.__cacheKey=dt,T.__webglTexture=it[dt].texture}return Z}function ft(T,E,Z){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const it=k(T,E),dt=E.source;i.bindTexture(ht,T.__webglTexture,o.TEXTURE0+Z);const wt=r.get(dt);if(dt.version!==wt.__version||it===!0){i.activeTexture(o.TEXTURE0+Z);const ct=We.getPrimaries(We.workingColorSpace),vt=E.colorSpace===hi?null:We.getPrimaries(E.colorSpace),St=E.colorSpace===hi||ct===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ot=_(E)&&v(E.image)===!1;let Mt=D(E.image,Ot,!1,l.maxTextureSize);Mt=Tt(E,Mt);const kt=v(Mt)||d,te=u.convert(E.format,E.colorSpace);let Ht=u.convert(E.type),Wt=B(E.internalFormat,te,Ht,E.colorSpace,E.isVideoTexture);Ct(ht,E,kt);let Ft;const ce=E.mipmaps,N=d&&E.isVideoTexture!==!0&&Wt!==$_,Lt=wt.__version===void 0||it===!0,It=dt.dataReady,ne=V(E,Mt,kt);if(E.isDepthTexture)Wt=o.DEPTH_COMPONENT,d?E.type===ia?Wt=o.DEPTH_COMPONENT32F:E.type===Fa?Wt=o.DEPTH_COMPONENT24:E.type===vr?Wt=o.DEPTH24_STENCIL8:Wt=o.DEPTH_COMPONENT16:E.type===ia&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===yr&&Wt===o.DEPTH_COMPONENT&&E.type!==Cd&&E.type!==Fa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fa,Ht=u.convert(E.type)),E.format===Rs&&Wt===o.DEPTH_COMPONENT&&(Wt=o.DEPTH_STENCIL,E.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vr,Ht=u.convert(E.type))),Lt&&(N?i.texStorage2D(o.TEXTURE_2D,1,Wt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,te,Ht,null));else if(E.isDataTexture)if(ce.length>0&&kt){N&&Lt&&i.texStorage2D(o.TEXTURE_2D,ne,Wt,ce[0].width,ce[0].height);for(let U=0,Dt=ce.length;U<Dt;U++)Ft=ce[U],N?It&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Ft.width,Ft.height,te,Ht,Ft.data):i.texImage2D(o.TEXTURE_2D,U,Wt,Ft.width,Ft.height,0,te,Ht,Ft.data);E.generateMipmaps=!1}else N?(Lt&&i.texStorage2D(o.TEXTURE_2D,ne,Wt,Mt.width,Mt.height),It&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,te,Ht,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,te,Ht,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ne,Wt,ce[0].width,ce[0].height,Mt.depth);for(let U=0,Dt=ce.length;U<Dt;U++)Ft=ce[U],E.format!==Ei?te!==null?N?It&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Ft.width,Ft.height,Mt.depth,te,Ft.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,Wt,Ft.width,Ft.height,Mt.depth,0,Ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?It&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,Ft.width,Ft.height,Mt.depth,te,Ht,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,Wt,Ft.width,Ft.height,Mt.depth,0,te,Ht,Ft.data)}else{N&&Lt&&i.texStorage2D(o.TEXTURE_2D,ne,Wt,ce[0].width,ce[0].height);for(let U=0,Dt=ce.length;U<Dt;U++)Ft=ce[U],E.format!==Ei?te!==null?N?It&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,Ft.width,Ft.height,te,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,U,Wt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?It&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,Ft.width,Ft.height,te,Ht,Ft.data):i.texImage2D(o.TEXTURE_2D,U,Wt,Ft.width,Ft.height,0,te,Ht,Ft.data)}else if(E.isDataArrayTexture)N?(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ne,Wt,Mt.width,Mt.height,Mt.depth),It&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,te,Ht,Mt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,Mt.width,Mt.height,Mt.depth,0,te,Ht,Mt.data);else if(E.isData3DTexture)N?(Lt&&i.texStorage3D(o.TEXTURE_3D,ne,Wt,Mt.width,Mt.height,Mt.depth),It&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,te,Ht,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,Mt.width,Mt.height,Mt.depth,0,te,Ht,Mt.data);else if(E.isFramebufferTexture){if(Lt)if(N)i.texStorage2D(o.TEXTURE_2D,ne,Wt,Mt.width,Mt.height);else{let U=Mt.width,Dt=Mt.height;for(let bt=0;bt<ne;bt++)i.texImage2D(o.TEXTURE_2D,bt,Wt,U,Dt,0,te,Ht,null),U>>=1,Dt>>=1}}else if(ce.length>0&&kt){N&&Lt&&i.texStorage2D(o.TEXTURE_2D,ne,Wt,ce[0].width,ce[0].height);for(let U=0,Dt=ce.length;U<Dt;U++)Ft=ce[U],N?It&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,te,Ht,Ft):i.texImage2D(o.TEXTURE_2D,U,Wt,te,Ht,Ft);E.generateMipmaps=!1}else N?(Lt&&i.texStorage2D(o.TEXTURE_2D,ne,Wt,Mt.width,Mt.height),It&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,te,Ht,Mt)):i.texImage2D(o.TEXTURE_2D,0,Wt,te,Ht,Mt);O(E,kt)&&L(ht),wt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Et(T,E,Z){if(E.image.length!==6)return;const ht=k(T,E),it=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+Z);const dt=r.get(it);if(it.version!==dt.__version||ht===!0){i.activeTexture(o.TEXTURE0+Z);const wt=We.getPrimaries(We.workingColorSpace),ct=E.colorSpace===hi?null:We.getPrimaries(E.colorSpace),vt=E.colorSpace===hi||wt===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const St=E.isCompressedTexture||E.image[0].isCompressedTexture,Ot=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let U=0;U<6;U++)!St&&!Ot?Mt[U]=D(E.image[U],!1,!0,l.maxCubemapSize):Mt[U]=Ot?E.image[U].image:E.image[U],Mt[U]=Tt(E,Mt[U]);const kt=Mt[0],te=v(kt)||d,Ht=u.convert(E.format,E.colorSpace),Wt=u.convert(E.type),Ft=B(E.internalFormat,Ht,Wt,E.colorSpace),ce=d&&E.isVideoTexture!==!0,N=dt.__version===void 0||ht===!0,Lt=it.dataReady;let It=V(E,kt,te);Ct(o.TEXTURE_CUBE_MAP,E,te);let ne;if(St){ce&&N&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,Ft,kt.width,kt.height);for(let U=0;U<6;U++){ne=Mt[U].mipmaps;for(let Dt=0;Dt<ne.length;Dt++){const bt=ne[Dt];E.format!==Ei?Ht!==null?ce?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt,0,0,bt.width,bt.height,Ht,bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt,0,0,bt.width,bt.height,Ht,Wt,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt,Ft,bt.width,bt.height,0,Ht,Wt,bt.data)}}}else{ne=E.mipmaps,ce&&N&&(ne.length>0&&It++,i.texStorage2D(o.TEXTURE_CUBE_MAP,It,Ft,Mt[0].width,Mt[0].height));for(let U=0;U<6;U++)if(Ot){ce?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Mt[U].width,Mt[U].height,Ht,Wt,Mt[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Ft,Mt[U].width,Mt[U].height,0,Ht,Wt,Mt[U].data);for(let Dt=0;Dt<ne.length;Dt++){const Zt=ne[Dt].image[U].image;ce?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt+1,0,0,Zt.width,Zt.height,Ht,Wt,Zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt+1,Ft,Zt.width,Zt.height,0,Ht,Wt,Zt.data)}}else{ce?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ht,Wt,Mt[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Ft,Ht,Wt,Mt[U]);for(let Dt=0;Dt<ne.length;Dt++){const bt=ne[Dt];ce?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt+1,0,0,Ht,Wt,bt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt+1,Ft,Ht,Wt,bt.image[U])}}}O(E,te)&&L(o.TEXTURE_CUBE_MAP),dt.__version=it.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function jt(T,E,Z,ht,it,dt){const wt=u.convert(Z.format,Z.colorSpace),ct=u.convert(Z.type),vt=B(Z.internalFormat,wt,ct,Z.colorSpace);if(!r.get(E).__hasExternalTextures){const Ot=Math.max(1,E.width>>dt),Mt=Math.max(1,E.height>>dt);it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?i.texImage3D(it,dt,vt,Ot,Mt,E.depth,0,wt,ct,null):i.texImage2D(it,dt,vt,Ot,Mt,0,wt,ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,T),Jt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,it,r.get(Z).__webglTexture,0,ue(E)):(it===o.TEXTURE_2D||it>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,it,r.get(Z).__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(T,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let ht=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Z||Jt(E)){const it=E.depthTexture;it&&it.isDepthTexture&&(it.type===ia?ht=o.DEPTH_COMPONENT32F:it.type===Fa&&(ht=o.DEPTH_COMPONENT24));const dt=ue(E);Jt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,dt,ht,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,ht,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,ht,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const ht=ue(E);Z&&Jt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,E.width,E.height):Jt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,T)}else{const ht=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let it=0;it<ht.length;it++){const dt=ht[it],wt=u.convert(dt.format,dt.colorSpace),ct=u.convert(dt.type),vt=B(dt.internalFormat,wt,ct,dt.colorSpace),St=ue(E);Z&&Jt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,St,vt,E.width,E.height):Jt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,vt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,vt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const ht=r.get(E.depthTexture).__webglTexture,it=ue(E);if(E.depthTexture.format===yr)Jt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,it):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(E.depthTexture.format===Rs)Jt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,it):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function $t(T){const E=r.get(T),Z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Bt(E.__webglFramebuffer,T)}else if(Z){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]=o.createRenderbuffer(),zt(E.__webglDepthbuffer[ht],T,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),zt(E.__webglDepthbuffer,T,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(T,E,Z){const ht=r.get(T);E!==void 0&&jt(ht.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&$t(T)}function J(T){const E=T.texture,Z=r.get(T),ht=r.get(E);T.addEventListener("dispose",H),T.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++);const it=T.isWebGLCubeRenderTarget===!0,dt=T.isWebGLMultipleRenderTargets===!0,wt=v(T)||d;if(it){Z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(d&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ct]=[];for(let vt=0;vt<E.mipmaps.length;vt++)Z.__webglFramebuffer[ct][vt]=o.createFramebuffer()}else Z.__webglFramebuffer[ct]=o.createFramebuffer()}else{if(d&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)Z.__webglFramebuffer[ct]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(dt)if(l.drawBuffers){const ct=T.texture;for(let vt=0,St=ct.length;vt<St;vt++){const Ot=r.get(ct[vt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&T.samples>0&&Jt(T)===!1){const ct=dt?E:[E];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let vt=0;vt<ct.length;vt++){const St=ct[vt];Z.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[vt]);const Ot=u.convert(St.format,St.colorSpace),Mt=u.convert(St.type),kt=B(St.internalFormat,Ot,Mt,St.colorSpace,T.isXRRenderTarget===!0),te=ue(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,kt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,Z.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(Z.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(it){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Ct(o.TEXTURE_CUBE_MAP,E,wt);for(let ct=0;ct<6;ct++)if(d&&E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)jt(Z.__webglFramebuffer[ct][vt],T,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else jt(Z.__webglFramebuffer[ct],T,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);O(E,wt)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(dt){const ct=T.texture;for(let vt=0,St=ct.length;vt<St;vt++){const Ot=ct[vt],Mt=r.get(Ot);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),Ct(o.TEXTURE_2D,Ot,wt),jt(Z.__webglFramebuffer,T,Ot,o.COLOR_ATTACHMENT0+vt,o.TEXTURE_2D,0),O(Ot,wt)&&L(o.TEXTURE_2D)}i.unbindTexture()}else{let ct=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(d?ct=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(ct,ht.__webglTexture),Ct(ct,E,wt),d&&E.mipmaps&&E.mipmaps.length>0)for(let vt=0;vt<E.mipmaps.length;vt++)jt(Z.__webglFramebuffer[vt],T,E,o.COLOR_ATTACHMENT0,ct,vt);else jt(Z.__webglFramebuffer,T,E,o.COLOR_ATTACHMENT0,ct,0);O(E,wt)&&L(ct),i.unbindTexture()}T.depthBuffer&&$t(T)}function Ge(T){const E=v(T)||d,Z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ht=0,it=Z.length;ht<it;ht++){const dt=Z[ht];if(O(dt,E)){const wt=T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ct=r.get(dt).__webglTexture;i.bindTexture(wt,ct),L(wt),i.unbindTexture()}}}function ae(T){if(d&&T.samples>0&&Jt(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],Z=T.width,ht=T.height;let it=o.COLOR_BUFFER_BIT;const dt=[],wt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=r.get(T),vt=T.isWebGLMultipleRenderTargets===!0;if(vt)for(let St=0;St<E.length;St++)i.bindFramebuffer(o.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<E.length;St++){dt.push(o.COLOR_ATTACHMENT0+St),T.depthBuffer&&dt.push(wt);const Ot=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(it|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&(it|=o.STENCIL_BUFFER_BIT)),vt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ct.__webglColorRenderbuffer[St]),Ot===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[wt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[wt])),vt){const Mt=r.get(E[St]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,Z,ht,0,0,Z,ht,it,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,dt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<E.length;St++){i.bindFramebuffer(o.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);const Ot=r.get(E[St]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.TEXTURE_2D,Ot,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function ue(T){return Math.min(l.maxSamples,T.samples)}function Jt(T){const E=r.get(T);return d&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(T){const E=h.render.frame;g.get(T)!==E&&(g.set(T,E),T.update())}function Tt(T,E){const Z=T.colorSpace,ht=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Md||Z!==ra&&Z!==hi&&(We.getTransfer(Z)===Qe?d===!1?e.has("EXT_sRGB")===!0&&ht===Ei?(T.format=Md,T.minFilter=Xn,T.generateMipmaps=!1):E=a0.sRGBToLinear(E):(ht!==Ei||it!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}this.allocateTextureUnit=X,this.resetTextureUnits=At,this.setTexture2D=G,this.setTexture2DArray=ot,this.setTexture3D=$,this.setTextureCube=ut,this.rebindTextures=oe,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Jt}function ZT(o,e,i){const r=i.isWebGL2;function l(u,h=hi){let d;const p=We.getTransfer(h);if(u===Ga)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vx)return o.BYTE;if(u===yx)return o.SHORT;if(u===Cd)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Fa)return o.UNSIGNED_INT;if(u===ia)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===xx)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===Sx)return o.LUMINANCE;if(u===Mx)return o.LUMINANCE_ALPHA;if(u===yr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Md)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===Ex)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===bx)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Qe)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Ff)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Ff)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===_g||u===vg||u===yg||u===xg)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===_g)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===vg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===yg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===xg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Sg||u===Mg)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Sg)return p===Qe?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Mg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Eg||u===bg||u===Tg||u===Ag||u===wg||u===Rg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Eg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===bg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Tg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Ag)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===wg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Rg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Cg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Dg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Lg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ug)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ng)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Og)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Pg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===zg)return p===Qe?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Bg||u===Fg)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(u===Vf)return p===Qe?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Bg)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Fg)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Tx||u===Ig||u===Hg||u===Gg)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(u===Vf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===Ig)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Hg)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Gg)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class KT extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const D of e.hand.values()){const v=i.getJointPose(D,r),_=this._getHandJoint(m,D);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=g.position.distanceTo(y.position),M=.02,A=.005;m.inputState.pinching&&S>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ms;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const JT=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new qn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new sa({extensions:{fragDepth:!0},vertexShader:JT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new ei(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,y=null,S=null,M=null,A=null;const D=new tA,v=i.getContextAttributes();let _=null,O=null;const L=[],B=[],V=new ge;let I=null;const F=new ti;F.layers.enable(1),F.viewport=new $e;const H=new ti;H.layers.enable(2),H.viewport=new $e;const lt=[F,H],b=new KT;b.layers.enable(1),b.layers.enable(2);let P=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ft=L[k];return ft===void 0&&(ft=new fd,L[k]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(k){let ft=L[k];return ft===void 0&&(ft=new fd,L[k]=ft),ft.getGripSpace()},this.getHand=function(k){let ft=L[k];return ft===void 0&&(ft=new fd,L[k]=ft),ft.getHandSpace()};function At(k){const ft=B.indexOf(k.inputSource);if(ft===-1)return;const Et=L[ft];Et!==void 0&&(Et.update(k.inputSource,k.frame,m||h),Et.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){l.removeEventListener("select",At),l.removeEventListener("selectstart",At),l.removeEventListener("selectend",At),l.removeEventListener("squeeze",At),l.removeEventListener("squeezestart",At),l.removeEventListener("squeezeend",At),l.removeEventListener("end",X),l.removeEventListener("inputsourceschange",rt);for(let k=0;k<L.length;k++){const ft=B[k];ft!==null&&(B[k]=null,L[k].disconnect(ft))}P=null,_t=null,D.reset(),e.setRenderTarget(_),M=null,S=null,y=null,l=null,O=null,Ct.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){d=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",At),l.addEventListener("selectstart",At),l.addEventListener("selectend",At),l.addEventListener("squeeze",At),l.addEventListener("squeezestart",At),l.addEventListener("squeezeend",At),l.addEventListener("end",X),l.addEventListener("inputsourceschange",rt),v.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(V),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ft={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Sr(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Ga,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ft=null,Et=null,jt=null;v.depth&&(jt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=v.stencil?Rs:yr,Et=v.stencil?vr:Fa);const zt={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:u};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(zt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Sr(S.textureWidth,S.textureHeight,{format:Ei,type:Ga,depthTexture:new _0(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Bt=e.properties.get(O);Bt.__ignoreDepthValues=S.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function rt(k){for(let ft=0;ft<k.removed.length;ft++){const Et=k.removed[ft],jt=B.indexOf(Et);jt>=0&&(B[jt]=null,L[jt].disconnect(Et))}for(let ft=0;ft<k.added.length;ft++){const Et=k.added[ft];let jt=B.indexOf(Et);if(jt===-1){for(let Bt=0;Bt<L.length;Bt++)if(Bt>=B.length){B.push(Et),jt=Bt;break}else if(B[Bt]===null){B[Bt]=Et,jt=Bt;break}if(jt===-1)break}const zt=L[jt];zt&&zt.connect(Et)}}const G=new q,ot=new q;function $(k,ft,Et){G.setFromMatrixPosition(ft.matrixWorld),ot.setFromMatrixPosition(Et.matrixWorld);const jt=G.distanceTo(ot),zt=ft.projectionMatrix.elements,Bt=Et.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),oe=zt[14]/(zt[10]+1),J=(zt[9]+1)/zt[5],Ge=(zt[9]-1)/zt[5],ae=(zt[8]-1)/zt[0],ue=(Bt[8]+1)/Bt[0],Jt=$t*ae,xt=$t*ue,Tt=jt/(-ae+ue),T=Tt*-ae;ft.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(T),k.translateZ(Tt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const E=$t+Tt,Z=oe+Tt,ht=Jt-T,it=xt+(jt-T),dt=J*oe/Z*E,wt=Ge*oe/Z*E;k.projectionMatrix.makePerspective(ht,it,dt,wt,E,Z),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function ut(k,ft){ft===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ft.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;D.texture!==null&&(k.near=D.depthNear,k.far=D.depthFar),b.near=H.near=F.near=k.near,b.far=H.far=F.far=k.far,(P!==b.near||_t!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,_t=b.far,F.near=P,F.far=_t,H.near=P,H.far=_t,F.updateProjectionMatrix(),H.updateProjectionMatrix(),k.updateProjectionMatrix());const ft=k.parent,Et=b.cameras;ut(b,ft);for(let jt=0;jt<Et.length;jt++)ut(Et[jt],ft);Et.length===2?$(b,F,H):b.projectionMatrix.copy(F.projectionMatrix),C(k,b,ft)};function C(k,ft,Et){Et===null?k.matrix.copy(ft.matrixWorld):(k.matrix.copy(Et.matrixWorld),k.matrix.invert(),k.matrix.multiply(ft.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ft.projectionMatrix),k.projectionMatrixInverse.copy(ft.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Io*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(k){p=k,S!==null&&(S.fixedFoveation=k),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=k)},this.hasDepthSensing=function(){return D.texture!==null};let j=null;function pt(k,ft){if(g=ft.getViewerPose(m||h),A=ft,g!==null){const Et=g.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let jt=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,jt=!0);for(let Bt=0;Bt<Et.length;Bt++){const $t=Et[Bt];let oe=null;if(M!==null)oe=M.getViewport($t);else{const Ge=y.getViewSubImage(S,$t);oe=Ge.viewport,Bt===0&&(e.setRenderTargetTextures(O,Ge.colorTexture,S.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(O))}let J=lt[Bt];J===void 0&&(J=new ti,J.layers.enable(Bt),J.viewport=new $e,lt[Bt]=J),J.matrix.fromArray($t.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray($t.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(oe.x,oe.y,oe.width,oe.height),Bt===0&&(b.matrix.copy(J.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),jt===!0&&b.cameras.push(J)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Bt=y.getDepthInformation(Et[0]);Bt&&Bt.isValid&&Bt.texture&&D.init(e,Bt,l.renderState)}}for(let Et=0;Et<L.length;Et++){const jt=B[Et],zt=L[Et];jt!==null&&zt!==void 0&&zt.update(jt,ft,m||h)}D.render(e,b),j&&j(k,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),A=null}const Ct=new m0;Ct.setAnimationLoop(pt),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,d0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,O,L,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),S(v,_),_.isMeshPhysicalMaterial&&M(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),A(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),D(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(h(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,O,L):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Wn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Wn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const O=e.get(_).envMap;if(O&&(v.envMap.value=O,v.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const L=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*L,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,O,L){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*O,v.scale.value=L*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function S(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,O){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=O.texture,v.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,_){_.matcap&&(v.matcap.value=_.matcap)}function D(v,_){const O=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(O.matrixWorld),v.nearDistance.value=O.shadow.camera.near,v.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(O,L){const B=L.program;r.uniformBlockBinding(O,B)}function m(O,L){let B=l[O.id];B===void 0&&(A(O),B=g(O),l[O.id]=B,O.addEventListener("dispose",v));const V=L.program;r.updateUBOMapping(O,V);const I=e.render.frame;u[O.id]!==I&&(S(O),u[O.id]=I)}function g(O){const L=y();O.__bindingPointIndex=L;const B=o.createBuffer(),V=O.__size,I=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,B),B}function y(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const L=l[O.id],B=O.uniforms,V=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let I=0,F=B.length;I<F;I++){const H=Array.isArray(B[I])?B[I]:[B[I]];for(let lt=0,b=H.length;lt<b;lt++){const P=H[lt];if(M(P,I,lt,V)===!0){const _t=P.__offset,At=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let rt=0;rt<At.length;rt++){const G=At[rt],ot=D(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,_t+X,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,X),X+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,_t,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,L,B,V){const I=O.value,F=L+"_"+B;if(V[F]===void 0)return typeof I=="number"||typeof I=="boolean"?V[F]=I:V[F]=I.clone(),!0;{const H=V[F];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return V[F]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function A(O){const L=O.uniforms;let B=0;const V=16;for(let F=0,H=L.length;F<H;F++){const lt=Array.isArray(L[F])?L[F]:[L[F]];for(let b=0,P=lt.length;b<P;b++){const _t=lt[b],At=Array.isArray(_t.value)?_t.value:[_t.value];for(let X=0,rt=At.length;X<rt;X++){const G=At[X],ot=D(G),$=B%V;$!==0&&V-$<ot.boundary&&(B+=V-$),_t.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),_t.__offset=B,B+=ot.storage}}}const I=B%V;return I>0&&(B+=V-I),O.__size=B,O.__cache={},this}function D(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function v(O){const L=O.target;L.removeEventListener("dispose",v);const B=h.indexOf(L.__bindingPointIndex);h.splice(B,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=Kx(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=h;const M=new Uint32Array(4),A=new Int32Array(4);let D=null,v=null;const _=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const L=this;let B=!1,V=0,I=0,F=null,H=-1,lt=null;const b=new $e,P=new $e;let _t=null;const At=new Oe(0);let X=0,rt=i.width,G=i.height,ot=1,$=null,ut=null;const C=new $e(0,0,rt,G),j=new $e(0,0,rt,G);let pt=!1;const Ct=new Nd;let k=!1,ft=!1,Et=null;const jt=new cn,zt=new ge,Bt=new q,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return F===null?ot:1}let J=r;function Ge(R,K){for(let tt=0;tt<R.length;tt++){const at=R[tt],et=i.getContext(at,K);if(et!==null)return et}return null}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),J===null){const K=["webgl2","webgl","experimental-webgl"];if(L.isWebGL1Renderer===!0&&K.shift(),J=Ge(K,R),J===null)throw Ge(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,ue,Jt,xt,Tt,T,E,Z,ht,it,dt,wt,ct,vt,St,Ot,Mt,kt,te,Ht,Wt,Ft,ce,N;function Lt(){ae=new ub(J),ue=new ab(J,ae,e),ae.init(ue),Ft=new ZT(J,ae,ue),Jt=new YT(J,ae,ue),xt=new hb(J),Tt=new NT,T=new jT(J,ae,Jt,Tt,ue,Ft,xt),E=new sb(L),Z=new cb(L),ht=new SS(J,ue),ce=new nb(J,ae,ht,ue),it=new fb(J,ht,xt,ce),dt=new _b(J,it,ht,xt),te=new gb(J,ue,T),Ot=new rb(Tt),wt=new UT(L,E,Z,ae,ue,ce,Ot),ct=new nA(L,Tt),vt=new PT,St=new GT(ae,ue),kt=new eb(L,E,Z,Jt,dt,S,p),Mt=new qT(L,dt,ue),N=new iA(J,xt,ue,Jt),Ht=new ib(J,ae,xt,ue),Wt=new db(J,ae,xt,ue),xt.programs=wt.programs,L.capabilities=ue,L.extensions=ae,L.properties=Tt,L.renderLists=vt,L.shadowMap=Mt,L.state=Jt,L.info=xt}Lt();const It=new eA(L,J);this.xr=It,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(R){R!==void 0&&(ot=R,this.setSize(rt,G,!1))},this.getSize=function(R){return R.set(rt,G)},this.setSize=function(R,K,tt=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=R,G=K,i.width=Math.floor(R*ot),i.height=Math.floor(K*ot),tt===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(rt*ot,G*ot).floor()},this.setDrawingBufferSize=function(R,K,tt){rt=R,G=K,ot=tt,i.width=Math.floor(R*tt),i.height=Math.floor(K*tt),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(C)},this.setViewport=function(R,K,tt,at){R.isVector4?C.set(R.x,R.y,R.z,R.w):C.set(R,K,tt,at),Jt.viewport(b.copy(C).multiplyScalar(ot).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,K,tt,at){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,K,tt,at),Jt.scissor(P.copy(j).multiplyScalar(ot).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){Jt.setScissorTest(pt=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(R=!0,K=!0,tt=!0){let at=0;if(R){let et=!1;if(F!==null){const Gt=F.texture.format;et=Gt===J_||Gt===Q_||Gt===K_}if(et){const Gt=F.texture.type,Qt=Gt===Ga||Gt===Fa||Gt===Cd||Gt===vr||Gt===j_||Gt===Z_,ie=kt.getClearColor(),Kt=kt.getClearAlpha(),_e=ie.r,fe=ie.g,de=ie.b;Qt?(M[0]=_e,M[1]=fe,M[2]=de,M[3]=Kt,J.clearBufferuiv(J.COLOR,0,M)):(A[0]=_e,A[1]=fe,A[2]=de,A[3]=Kt,J.clearBufferiv(J.COLOR,0,A))}else at|=J.COLOR_BUFFER_BIT}K&&(at|=J.DEPTH_BUFFER_BIT),tt&&(at|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),vt.dispose(),St.dispose(),Tt.dispose(),E.dispose(),Z.dispose(),dt.dispose(),ce.dispose(),N.dispose(),wt.dispose(),It.dispose(),It.removeEventListener("sessionstart",we),It.removeEventListener("sessionend",xe),Et&&(Et.dispose(),Et=null),qe.stop()};function ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=xt.autoReset,K=Mt.enabled,tt=Mt.autoUpdate,at=Mt.needsUpdate,et=Mt.type;Lt(),xt.autoReset=R,Mt.enabled=K,Mt.autoUpdate=tt,Mt.needsUpdate=at,Mt.type=et}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function bt(R){const K=R.target;K.removeEventListener("dispose",bt),Zt(K)}function Zt(R){re(R),Tt.remove(R)}function re(R){const K=Tt.get(R).programs;K!==void 0&&(K.forEach(function(tt){wt.releaseProgram(tt)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,tt,at,et,Gt){K===null&&(K=$t);const Qt=et.isMesh&&et.matrixWorld.determinant()<0,ie=pe(R,K,tt,at,et);Jt.setMaterial(at,Qt);let Kt=tt.index,_e=1;if(at.wireframe===!0){if(Kt=it.getWireframeAttribute(tt),Kt===void 0)return;_e=2}const fe=tt.drawRange,de=tt.attributes.position;let He=fe.start*_e,Je=(fe.start+fe.count)*_e;Gt!==null&&(He=Math.max(He,Gt.start*_e),Je=Math.min(Je,(Gt.start+Gt.count)*_e)),Kt!==null?(He=Math.max(He,0),Je=Math.min(Je,Kt.count)):de!=null&&(He=Math.max(He,0),Je=Math.min(Je,de.count));const Ve=Je-He;if(Ve<0||Ve===1/0)return;ce.setup(et,at,ie,tt,Kt);let On,Te=Ht;if(Kt!==null&&(On=ht.get(Kt),Te=Wt,Te.setIndex(On)),et.isMesh)at.wireframe===!0?(Jt.setLineWidth(at.wireframeLinewidth*oe()),Te.setMode(J.LINES)):Te.setMode(J.TRIANGLES);else if(et.isLine){let Ee=at.linewidth;Ee===void 0&&(Ee=1),Jt.setLineWidth(Ee*oe()),et.isLineSegments?Te.setMode(J.LINES):et.isLineLoop?Te.setMode(J.LINE_LOOP):Te.setMode(J.LINE_STRIP)}else et.isPoints?Te.setMode(J.POINTS):et.isSprite&&Te.setMode(J.TRIANGLES);if(et.isBatchedMesh)Te.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)Te.renderInstances(He,Ve,et.count);else if(tt.isInstancedBufferGeometry){const Ee=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,oa=Math.min(tt.instanceCount,Ee);Te.renderInstances(He,Ve,oa)}else Te.render(He,Ve)};function Ue(R,K,tt){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,qt(R,K,tt),R.side=ka,R.needsUpdate=!0,qt(R,K,tt),R.side=Li):qt(R,K,tt)}this.compile=function(R,K,tt=null){tt===null&&(tt=R),v=St.get(tt),v.init(),O.push(v),tt.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),R!==tt&&R.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),v.setupLights(L._useLegacyLights);const at=new Set;return R.traverse(function(et){const Gt=et.material;if(Gt)if(Array.isArray(Gt))for(let Qt=0;Qt<Gt.length;Qt++){const ie=Gt[Qt];Ue(ie,tt,et),at.add(ie)}else Ue(Gt,tt,et),at.add(Gt)}),O.pop(),v=null,at},this.compileAsync=function(R,K,tt=null){const at=this.compile(R,K,tt);return new Promise(et=>{function Gt(){if(at.forEach(function(Qt){Tt.get(Qt).currentProgram.isReady()&&at.delete(Qt)}),at.size===0){et(R);return}setTimeout(Gt,10)}ae.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let ye=null;function ze(R){ye&&ye(R)}function we(){qe.stop()}function xe(){qe.start()}const qe=new m0;qe.setAnimationLoop(ze),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(R){ye=R,It.setAnimationLoop(R),R===null?qe.stop():qe.start()},It.addEventListener("sessionstart",we),It.addEventListener("sessionend",xe),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(K),K=It.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,K,F),v=St.get(R,O.length),v.init(),O.push(v),jt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ct.setFromProjectionMatrix(jt),ft=this.localClippingEnabled,k=Ot.init(this.clippingPlanes,ft),D=vt.get(R,_.length),D.init(),_.push(D),nn(R,K,0,L.sortObjects),D.finish(),L.sortObjects===!0&&D.sort($,ut),this.info.render.frame++,k===!0&&Ot.beginShadows();const tt=v.state.shadowsArray;if(Mt.render(tt,R,K),k===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1)&&kt.render(D,R),v.setupLights(L._useLegacyLights),K.isArrayCamera){const at=K.cameras;for(let et=0,Gt=at.length;et<Gt;et++){const Qt=at[et];Pi(D,R,Qt,Qt.viewport)}}else Pi(D,R,K);F!==null&&(T.updateMultisampleRenderTarget(F),T.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(L,R,K),ce.resetDefaultState(),H=-1,lt=null,O.pop(),O.length>0?v=O[O.length-1]:v=null,_.pop(),_.length>0?D=_[_.length-1]:D=null};function nn(R,K,tt,at){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){at&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(jt);const Qt=dt.update(R),ie=R.material;ie.visible&&D.push(R,Qt,ie,tt,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Qt=dt.update(R),ie=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Qt.boundingSphere===null&&Qt.computeBoundingSphere(),Bt.copy(Qt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(jt)),Array.isArray(ie)){const Kt=Qt.groups;for(let _e=0,fe=Kt.length;_e<fe;_e++){const de=Kt[_e],He=ie[de.materialIndex];He&&He.visible&&D.push(R,Qt,He,tt,Bt.z,de)}}else ie.visible&&D.push(R,Qt,ie,tt,Bt.z,null)}}const Gt=R.children;for(let Qt=0,ie=Gt.length;Qt<ie;Qt++)nn(Gt[Qt],K,tt,at)}function Pi(R,K,tt,at){const et=R.opaque,Gt=R.transmissive,Qt=R.transparent;v.setupLightsView(tt),k===!0&&Ot.setGlobalState(L.clippingPlanes,tt),Gt.length>0&&Nt(et,Gt,K,tt),at&&Jt.viewport(b.copy(at)),et.length>0&&Xt(et,K,tt),Gt.length>0&&Xt(Gt,K,tt),Qt.length>0&&Xt(Qt,K,tt),Jt.buffers.depth.setTest(!0),Jt.buffers.depth.setMask(!0),Jt.buffers.color.setMask(!0),Jt.setPolygonOffset(!1)}function Nt(R,K,tt,at){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const Gt=ue.isWebGL2;Et===null&&(Et=new Sr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Fo:Ga,minFilter:_r,samples:Gt?4:0})),L.getDrawingBufferSize(zt),Gt?Et.setSize(zt.x,zt.y):Et.setSize(xc(zt.x),xc(zt.y));const Qt=L.getRenderTarget();L.setRenderTarget(Et),L.getClearColor(At),X=L.getClearAlpha(),X<1&&L.setClearColor(16777215,.5),L.clear();const ie=L.toneMapping;L.toneMapping=Ha,Xt(R,tt,at),T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et);let Kt=!1;for(let _e=0,fe=K.length;_e<fe;_e++){const de=K[_e],He=de.object,Je=de.geometry,Ve=de.material,On=de.group;if(Ve.side===Li&&He.layers.test(at.layers)){const Te=Ve.side;Ve.side=Wn,Ve.needsUpdate=!0,Yt(He,tt,at,Je,Ve,On),Ve.side=Te,Ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et)),L.setRenderTarget(Qt),L.setClearColor(At,X),L.toneMapping=ie}function Xt(R,K,tt){const at=K.isScene===!0?K.overrideMaterial:null;for(let et=0,Gt=R.length;et<Gt;et++){const Qt=R[et],ie=Qt.object,Kt=Qt.geometry,_e=at===null?Qt.material:at,fe=Qt.group;ie.layers.test(tt.layers)&&Yt(ie,K,tt,Kt,_e,fe)}}function Yt(R,K,tt,at,et,Gt){R.onBeforeRender(L,K,tt,at,et,Gt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(L,K,tt,at,R,Gt),et.transparent===!0&&et.side===Li&&et.forceSinglePass===!1?(et.side=Wn,et.needsUpdate=!0,L.renderBufferDirect(tt,K,at,et,R,Gt),et.side=ka,et.needsUpdate=!0,L.renderBufferDirect(tt,K,at,et,R,Gt),et.side=Li):L.renderBufferDirect(tt,K,at,et,R,Gt),R.onAfterRender(L,K,tt,at,et,Gt)}function qt(R,K,tt){K.isScene!==!0&&(K=$t);const at=Tt.get(R),et=v.state.lights,Gt=v.state.shadowsArray,Qt=et.state.version,ie=wt.getParameters(R,et.state,Gt,K,tt),Kt=wt.getProgramCacheKey(ie);let _e=at.programs;at.environment=R.isMeshStandardMaterial?K.environment:null,at.fog=K.fog,at.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||at.environment),_e===void 0&&(R.addEventListener("dispose",bt),_e=new Map,at.programs=_e);let fe=_e.get(Kt);if(fe!==void 0){if(at.currentProgram===fe&&at.lightsStateVersion===Qt)return Pt(R,ie),fe}else ie.uniforms=wt.getUniforms(R),R.onBuild(tt,ie,L),R.onBeforeCompile(ie,L),fe=wt.acquireProgram(ie,Kt),_e.set(Kt,fe),at.uniforms=ie.uniforms;const de=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(de.clippingPlanes=Ot.uniform),Pt(R,ie),at.needsLights=Be(R),at.lightsStateVersion=Qt,at.needsLights&&(de.ambientLightColor.value=et.state.ambient,de.lightProbe.value=et.state.probe,de.directionalLights.value=et.state.directional,de.directionalLightShadows.value=et.state.directionalShadow,de.spotLights.value=et.state.spot,de.spotLightShadows.value=et.state.spotShadow,de.rectAreaLights.value=et.state.rectArea,de.ltc_1.value=et.state.rectAreaLTC1,de.ltc_2.value=et.state.rectAreaLTC2,de.pointLights.value=et.state.point,de.pointLightShadows.value=et.state.pointShadow,de.hemisphereLights.value=et.state.hemi,de.directionalShadowMap.value=et.state.directionalShadowMap,de.directionalShadowMatrix.value=et.state.directionalShadowMatrix,de.spotShadowMap.value=et.state.spotShadowMap,de.spotLightMatrix.value=et.state.spotLightMatrix,de.spotLightMap.value=et.state.spotLightMap,de.pointShadowMap.value=et.state.pointShadowMap,de.pointShadowMatrix.value=et.state.pointShadowMatrix),at.currentProgram=fe,at.uniformsList=null,fe}function Ut(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=pc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Pt(R,K){const tt=Tt.get(R);tt.outputColorSpace=K.outputColorSpace,tt.batching=K.batching,tt.instancing=K.instancing,tt.instancingColor=K.instancingColor,tt.skinning=K.skinning,tt.morphTargets=K.morphTargets,tt.morphNormals=K.morphNormals,tt.morphColors=K.morphColors,tt.morphTargetsCount=K.morphTargetsCount,tt.numClippingPlanes=K.numClippingPlanes,tt.numIntersection=K.numClipIntersection,tt.vertexAlphas=K.vertexAlphas,tt.vertexTangents=K.vertexTangents,tt.toneMapping=K.toneMapping}function pe(R,K,tt,at,et){K.isScene!==!0&&(K=$t),T.resetTextureUnits();const Gt=K.fog,Qt=at.isMeshStandardMaterial?K.environment:null,ie=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ra,Kt=(at.isMeshStandardMaterial?Z:E).get(at.envMap||Qt),_e=at.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,fe=!!tt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),de=!!tt.morphAttributes.position,He=!!tt.morphAttributes.normal,Je=!!tt.morphAttributes.color;let Ve=Ha;at.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ve=L.toneMapping);const On=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Te=On!==void 0?On.length:0,Ee=Tt.get(at),oa=v.state.lights;if(k===!0&&(ft===!0||R!==lt)){const Gn=R===lt&&at.id===H;Ot.setState(at,R,Gn)}let Ye=!1;at.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==oa.state.version||Ee.outputColorSpace!==ie||et.isBatchedMesh&&Ee.batching===!1||!et.isBatchedMesh&&Ee.batching===!0||et.isInstancedMesh&&Ee.instancing===!1||!et.isInstancedMesh&&Ee.instancing===!0||et.isSkinnedMesh&&Ee.skinning===!1||!et.isSkinnedMesh&&Ee.skinning===!0||et.isInstancedMesh&&Ee.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ee.instancingColor===!1&&et.instanceColor!==null||Ee.envMap!==Kt||at.fog===!0&&Ee.fog!==Gt||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ot.numPlanes||Ee.numIntersection!==Ot.numIntersection)||Ee.vertexAlphas!==_e||Ee.vertexTangents!==fe||Ee.morphTargets!==de||Ee.morphNormals!==He||Ee.morphColors!==Je||Ee.toneMapping!==Ve||ue.isWebGL2===!0&&Ee.morphTargetsCount!==Te)&&(Ye=!0):(Ye=!0,Ee.__version=at.version);let Mn=Ee.currentProgram;Ye===!0&&(Mn=qt(at,K,et));let Pn=!1,la=!1,Ns=!1;const on=Mn.getUniforms(),bi=Ee.uniforms;if(Jt.useProgram(Mn.program)&&(Pn=!0,la=!0,Ns=!0),at.id!==H&&(H=at.id,la=!0),Pn||lt!==R){on.setValue(J,"projectionMatrix",R.projectionMatrix),on.setValue(J,"viewMatrix",R.matrixWorldInverse);const Gn=on.map.cameraPosition;Gn!==void 0&&Gn.setValue(J,Bt.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&on.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&on.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),lt!==R&&(lt=R,la=!0,Ns=!0)}if(et.isSkinnedMesh){on.setOptional(J,et,"bindMatrix"),on.setOptional(J,et,"bindMatrixInverse");const Gn=et.skeleton;Gn&&(ue.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),on.setValue(J,"boneTexture",Gn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(on.setOptional(J,et,"batchingTexture"),on.setValue(J,"batchingTexture",et._matricesTexture,T));const ca=tt.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&ue.isWebGL2===!0)&&te.update(et,tt,Mn),(la||Ee.receiveShadow!==et.receiveShadow)&&(Ee.receiveShadow=et.receiveShadow,on.setValue(J,"receiveShadow",et.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bi.envMap.value=Kt,bi.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),la&&(on.setValue(J,"toneMappingExposure",L.toneMappingExposure),Ee.needsLights&&Se(bi,Ns),Gt&&at.fog===!0&&ct.refreshFogUniforms(bi,Gt),ct.refreshMaterialUniforms(bi,at,ot,G,Et),pc.upload(J,Ut(Ee),bi,T)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(pc.upload(J,Ut(Ee),bi,T),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&on.setValue(J,"center",et.center),on.setValue(J,"modelViewMatrix",et.modelViewMatrix),on.setValue(J,"normalMatrix",et.normalMatrix),on.setValue(J,"modelMatrix",et.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Gn=at.uniformsGroups;for(let Rn=0,Os=Gn.length;Rn<Os;Rn++)if(ue.isWebGL2){const Ps=Gn[Rn];N.update(Ps,Mn),N.bind(Ps,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Se(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Be(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,K,tt){Tt.get(R.texture).__webglTexture=K,Tt.get(R.depthTexture).__webglTexture=tt;const at=Tt.get(R);at.__hasExternalTextures=!0,at.__hasExternalTextures&&(at.__autoAllocateDepthBuffer=tt===void 0,at.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,K){const tt=Tt.get(R);tt.__webglFramebuffer=K,tt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,tt=0){F=R,V=K,I=tt;let at=!0,et=null,Gt=!1,Qt=!1;if(R){const Kt=Tt.get(R);Kt.__useDefaultFramebuffer!==void 0?(Jt.bindFramebuffer(J.FRAMEBUFFER,null),at=!1):Kt.__webglFramebuffer===void 0?T.setupRenderTarget(R):Kt.__hasExternalTextures&&T.rebindTextures(R,Tt.get(R.texture).__webglTexture,Tt.get(R.depthTexture).__webglTexture);const _e=R.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(Qt=!0);const fe=Tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(fe[K])?et=fe[K][tt]:et=fe[K],Gt=!0):ue.isWebGL2&&R.samples>0&&T.useMultisampledRTT(R)===!1?et=Tt.get(R).__webglMultisampledFramebuffer:Array.isArray(fe)?et=fe[tt]:et=fe,b.copy(R.viewport),P.copy(R.scissor),_t=R.scissorTest}else b.copy(C).multiplyScalar(ot).floor(),P.copy(j).multiplyScalar(ot).floor(),_t=pt;if(Jt.bindFramebuffer(J.FRAMEBUFFER,et)&&ue.drawBuffers&&at&&Jt.drawBuffers(R,et),Jt.viewport(b),Jt.scissor(P),Jt.setScissorTest(_t),Gt){const Kt=Tt.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K,Kt.__webglTexture,tt)}else if(Qt){const Kt=Tt.get(R.texture),_e=K||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Kt.__webglTexture,tt||0,_e)}H=-1},this.readRenderTargetPixels=function(R,K,tt,at,et,Gt,Qt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qt!==void 0&&(ie=ie[Qt]),ie){Jt.bindFramebuffer(J.FRAMEBUFFER,ie);try{const Kt=R.texture,_e=Kt.format,fe=Kt.type;if(_e!==Ei&&Ft.convert(_e)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const de=fe===Fo&&(ae.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ae.has("EXT_color_buffer_float"));if(fe!==Ga&&Ft.convert(fe)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(fe===ia&&(ue.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!de){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-at&&tt>=0&&tt<=R.height-et&&J.readPixels(K,tt,at,et,Ft.convert(_e),Ft.convert(fe),Gt)}finally{const Kt=F!==null?Tt.get(F).__webglFramebuffer:null;Jt.bindFramebuffer(J.FRAMEBUFFER,Kt)}}},this.copyFramebufferToTexture=function(R,K,tt=0){const at=Math.pow(2,-tt),et=Math.floor(K.image.width*at),Gt=Math.floor(K.image.height*at);T.setTexture2D(K,0),J.copyTexSubImage2D(J.TEXTURE_2D,tt,0,0,R.x,R.y,et,Gt),Jt.unbindTexture()},this.copyTextureToTexture=function(R,K,tt,at=0){const et=K.image.width,Gt=K.image.height,Qt=Ft.convert(tt.format),ie=Ft.convert(tt.type);T.setTexture2D(tt,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,tt.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,tt.unpackAlignment),K.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,at,R.x,R.y,et,Gt,Qt,ie,K.image.data):K.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,at,R.x,R.y,K.mipmaps[0].width,K.mipmaps[0].height,Qt,K.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,at,R.x,R.y,Qt,ie,K.image),at===0&&tt.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Jt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,tt,at,et=0){if(L.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Gt=R.max.x-R.min.x+1,Qt=R.max.y-R.min.y+1,ie=R.max.z-R.min.z+1,Kt=Ft.convert(at.format),_e=Ft.convert(at.type);let fe;if(at.isData3DTexture)T.setTexture3D(at,0),fe=J.TEXTURE_3D;else if(at.isDataArrayTexture||at.isCompressedArrayTexture)T.setTexture2DArray(at,0),fe=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,at.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,at.unpackAlignment);const de=J.getParameter(J.UNPACK_ROW_LENGTH),He=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Je=J.getParameter(J.UNPACK_SKIP_PIXELS),Ve=J.getParameter(J.UNPACK_SKIP_ROWS),On=J.getParameter(J.UNPACK_SKIP_IMAGES),Te=tt.isCompressedTexture?tt.mipmaps[et]:tt.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Te.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Te.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,R.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,R.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,R.min.z),tt.isDataTexture||tt.isData3DTexture?J.texSubImage3D(fe,et,K.x,K.y,K.z,Gt,Qt,ie,Kt,_e,Te.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(fe,et,K.x,K.y,K.z,Gt,Qt,ie,Kt,Te.data)):J.texSubImage3D(fe,et,K.x,K.y,K.z,Gt,Qt,ie,Kt,_e,Te),J.pixelStorei(J.UNPACK_ROW_LENGTH,de),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,He),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Je),J.pixelStorei(J.UNPACK_SKIP_ROWS,Ve),J.pixelStorei(J.UNPACK_SKIP_IMAGES,On),et===0&&at.generateMipmaps&&J.generateMipmap(fe),Jt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),Jt.unbindTexture()},this.resetState=function(){V=0,I=0,F=null,Jt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dd?"display-p3":"srgb",i.unpackColorSpace=We.workingColorSpace===bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?xr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?An:ra}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class b0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U_=new cn,Td=new Ud,fc=new Tc,dc=new q;class sA extends wn{constructor(e=new Oi,i=new b0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;U_.copy(l).invert(),Td.copy(e.ray).applyMatrix4(U_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const S=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let A=S,D=M;A<D;A++){const v=m.getX(A);dc.fromBufferAttribute(y,v),N_(dc,v,p,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(y.count,h.start+h.count);for(let A=S,D=M;A<D;A++)dc.fromBufferAttribute(y,A),N_(dc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function N_(o,e,i,r,l,u,h){const d=Td.distanceSqToPoint(o);if(d<i){const p=new q;Td.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class Mc extends Oi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],y=new q,S=new q,M=[],A=[],D=[],v=[];for(let _=0;_<=r;_++){const O=[],L=_/r;let B=0;_===0&&h===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let V=0;V<=i;V++){const I=V/i;y.x=-e*Math.cos(l+I*u)*Math.sin(h+L*d),y.y=e*Math.cos(h+L*d),y.z=e*Math.sin(l+I*u)*Math.sin(h+L*d),A.push(y.x,y.y,y.z),S.copy(y).normalize(),D.push(S.x,S.y,S.z),v.push(I+B,1-L),O.push(m++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const L=g[_][O+1],B=g[_][O],V=g[_+1][O],I=g[_+1][O+1];(_!==0||h>0)&&M.push(L,B,I),(_!==r-1||p<Math.PI)&&M.push(B,V,I)}this.setIndex(M),this.setAttribute("position",new pi(A,3)),this.setAttribute("normal",new pi(D,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const dd=new cn,O_=new q,P_=new q;class T0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;O_.setFromMatrixPosition(e.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const z_=new cn,Po=new q,hd=new q;class lA extends T0{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),r.position.copy(Po),hd.copy(r.position),hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(hd),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),z_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z_)}}class B_ extends Pd{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends T0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends Pd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends Pd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class H_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const G_={type:"change"},pd={type:"start"},V_={type:"end"},hc=new Ud,k_=new Ba,uA=Math.cos(70*hr.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",St),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",St),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(G_),r.update(),u=l.NONE},this.update=function(){const N=new q,Lt=new Mr().setFromUnitVectors(e.up,new q(0,1,0)),It=Lt.clone().invert(),ne=new q,U=new Mr,Dt=new q,bt=2*Math.PI;return function(re=null){const Ue=r.object.position;N.copy(Ue).sub(r.target),N.applyQuaternion(Lt),d.setFromVector3(N),r.autoRotate&&u===l.NONE&&_t(b(re)),r.enableDamping?(d.theta+=p.theta*r.dampingFactor,d.phi+=p.phi*r.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let ye=r.minAzimuthAngle,ze=r.maxAzimuthAngle;isFinite(ye)&&isFinite(ze)&&(ye<-Math.PI?ye+=bt:ye>Math.PI&&(ye-=bt),ze<-Math.PI?ze+=bt:ze>Math.PI&&(ze-=bt),ye<=ze?d.theta=Math.max(ye,Math.min(ze,d.theta)):d.theta=d.theta>(ye+ze)/2?Math.max(ye,d.theta):Math.min(ze,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&I||r.object.isOrthographicCamera?d.radius=C(d.radius):d.radius=C(d.radius*m),N.setFromSpherical(d),N.applyQuaternion(It),Ue.copy(r.target).add(N),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let we=!1;if(r.zoomToCursor&&I){let xe=null;if(r.object.isPerspectiveCamera){const qe=N.length();xe=C(qe*m);const nn=qe-xe;r.object.position.addScaledVector(B,nn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const qe=new q(V.x,V.y,0);qe.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),we=!0;const nn=new q(V.x,V.y,0);nn.unproject(r.object),r.object.position.sub(nn).add(qe),r.object.updateMatrixWorld(),xe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(xe).add(r.object.position):(hc.origin.copy(r.object.position),hc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(hc.direction))<uA?e.lookAt(r.target):(k_.setFromNormalAndCoplanarPoint(r.object.up,r.target),hc.intersectPlane(k_,r.target))))}else r.object.isOrthographicCamera&&(we=m!==1,we&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,I=!1,we||ne.distanceToSquared(r.object.position)>h||8*(1-U.dot(r.object.quaternion))>h||Dt.distanceToSquared(r.target)>0?(r.dispatchEvent(G_),ne.copy(r.object.position),U.copy(r.object.quaternion),Dt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",kt),r.domElement.removeEventListener("pointerdown",T),r.domElement.removeEventListener("pointercancel",Z),r.domElement.removeEventListener("wheel",dt),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",Z),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",St),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const h=1e-6,d=new H_,p=new H_;let m=1;const g=new q,y=new ge,S=new ge,M=new ge,A=new ge,D=new ge,v=new ge,_=new ge,O=new ge,L=new ge,B=new q,V=new ge;let I=!1;const F=[],H={};let lt=!1;function b(N){return N!==null?2*Math.PI/60*r.autoRotateSpeed*N:2*Math.PI/60/60*r.autoRotateSpeed}function P(N){const Lt=Math.abs(N*.01);return Math.pow(.95,r.zoomSpeed*Lt)}function _t(N){p.theta-=N}function At(N){p.phi-=N}const X=function(){const N=new q;return function(It,ne){N.setFromMatrixColumn(ne,0),N.multiplyScalar(-It),g.add(N)}}(),rt=function(){const N=new q;return function(It,ne){r.screenSpacePanning===!0?N.setFromMatrixColumn(ne,1):(N.setFromMatrixColumn(ne,0),N.crossVectors(r.object.up,N)),N.multiplyScalar(It),g.add(N)}}(),G=function(){const N=new q;return function(It,ne){const U=r.domElement;if(r.object.isPerspectiveCamera){const Dt=r.object.position;N.copy(Dt).sub(r.target);let bt=N.length();bt*=Math.tan(r.object.fov/2*Math.PI/180),X(2*It*bt/U.clientHeight,r.object.matrix),rt(2*ne*bt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(X(It*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),rt(ne*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function ot(N){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function $(N){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ut(N,Lt){if(!r.zoomToCursor)return;I=!0;const It=r.domElement.getBoundingClientRect(),ne=N-It.left,U=Lt-It.top,Dt=It.width,bt=It.height;V.x=ne/Dt*2-1,V.y=-(U/bt)*2+1,B.set(V.x,V.y,1).unproject(r.object).sub(r.object.position).normalize()}function C(N){return Math.max(r.minDistance,Math.min(r.maxDistance,N))}function j(N){y.set(N.clientX,N.clientY)}function pt(N){ut(N.clientX,N.clientX),_.set(N.clientX,N.clientY)}function Ct(N){A.set(N.clientX,N.clientY)}function k(N){S.set(N.clientX,N.clientY),M.subVectors(S,y).multiplyScalar(r.rotateSpeed);const Lt=r.domElement;_t(2*Math.PI*M.x/Lt.clientHeight),At(2*Math.PI*M.y/Lt.clientHeight),y.copy(S),r.update()}function ft(N){O.set(N.clientX,N.clientY),L.subVectors(O,_),L.y>0?ot(P(L.y)):L.y<0&&$(P(L.y)),_.copy(O),r.update()}function Et(N){D.set(N.clientX,N.clientY),v.subVectors(D,A).multiplyScalar(r.panSpeed),G(v.x,v.y),A.copy(D),r.update()}function jt(N){ut(N.clientX,N.clientY),N.deltaY<0?$(P(N.deltaY)):N.deltaY>0&&ot(P(N.deltaY)),r.update()}function zt(N){let Lt=!1;switch(N.code){case r.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?At(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,r.keyPanSpeed),Lt=!0;break;case r.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?At(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(0,-r.keyPanSpeed),Lt=!0;break;case r.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?_t(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(r.keyPanSpeed,0),Lt=!0;break;case r.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?_t(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):G(-r.keyPanSpeed,0),Lt=!0;break}Lt&&(N.preventDefault(),r.update())}function Bt(N){if(F.length===1)y.set(N.pageX,N.pageY);else{const Lt=Ft(N),It=.5*(N.pageX+Lt.x),ne=.5*(N.pageY+Lt.y);y.set(It,ne)}}function $t(N){if(F.length===1)A.set(N.pageX,N.pageY);else{const Lt=Ft(N),It=.5*(N.pageX+Lt.x),ne=.5*(N.pageY+Lt.y);A.set(It,ne)}}function oe(N){const Lt=Ft(N),It=N.pageX-Lt.x,ne=N.pageY-Lt.y,U=Math.sqrt(It*It+ne*ne);_.set(0,U)}function J(N){r.enableZoom&&oe(N),r.enablePan&&$t(N)}function Ge(N){r.enableZoom&&oe(N),r.enableRotate&&Bt(N)}function ae(N){if(F.length==1)S.set(N.pageX,N.pageY);else{const It=Ft(N),ne=.5*(N.pageX+It.x),U=.5*(N.pageY+It.y);S.set(ne,U)}M.subVectors(S,y).multiplyScalar(r.rotateSpeed);const Lt=r.domElement;_t(2*Math.PI*M.x/Lt.clientHeight),At(2*Math.PI*M.y/Lt.clientHeight),y.copy(S)}function ue(N){if(F.length===1)D.set(N.pageX,N.pageY);else{const Lt=Ft(N),It=.5*(N.pageX+Lt.x),ne=.5*(N.pageY+Lt.y);D.set(It,ne)}v.subVectors(D,A).multiplyScalar(r.panSpeed),G(v.x,v.y),A.copy(D)}function Jt(N){const Lt=Ft(N),It=N.pageX-Lt.x,ne=N.pageY-Lt.y,U=Math.sqrt(It*It+ne*ne);O.set(0,U),L.set(0,Math.pow(O.y/_.y,r.zoomSpeed)),ot(L.y),_.copy(O);const Dt=(N.pageX+Lt.x)*.5,bt=(N.pageY+Lt.y)*.5;ut(Dt,bt)}function xt(N){r.enableZoom&&Jt(N),r.enablePan&&ue(N)}function Tt(N){r.enableZoom&&Jt(N),r.enableRotate&&ae(N)}function T(N){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(N.pointerId),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",Z)),te(N),N.pointerType==="touch"?Ot(N):ht(N))}function E(N){r.enabled!==!1&&(N.pointerType==="touch"?Mt(N):it(N))}function Z(N){switch(Ht(N),F.length){case 0:r.domElement.releasePointerCapture(N.pointerId),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",Z),r.dispatchEvent(V_),u=l.NONE;break;case 1:const Lt=F[0],It=H[Lt];Ot({pointerId:Lt,pageX:It.x,pageY:It.y});break}}function ht(N){let Lt;switch(N.button){case 0:Lt=r.mouseButtons.LEFT;break;case 1:Lt=r.mouseButtons.MIDDLE;break;case 2:Lt=r.mouseButtons.RIGHT;break;default:Lt=-1}switch(Lt){case es.DOLLY:if(r.enableZoom===!1)return;pt(N),u=l.DOLLY;break;case es.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(r.enablePan===!1)return;Ct(N),u=l.PAN}else{if(r.enableRotate===!1)return;j(N),u=l.ROTATE}break;case es.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(r.enableRotate===!1)return;j(N),u=l.ROTATE}else{if(r.enablePan===!1)return;Ct(N),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function it(N){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;k(N);break;case l.DOLLY:if(r.enableZoom===!1)return;ft(N);break;case l.PAN:if(r.enablePan===!1)return;Et(N);break}}function dt(N){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(N.preventDefault(),r.dispatchEvent(pd),jt(wt(N)),r.dispatchEvent(V_))}function wt(N){const Lt=N.deltaMode,It={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(Lt){case 1:It.deltaY*=16;break;case 2:It.deltaY*=100;break}return N.ctrlKey&&!lt&&(It.deltaY*=10),It}function ct(N){N.key==="Control"&&(lt=!0,r.domElement.getRootNode().addEventListener("keyup",vt,{passive:!0,capture:!0}))}function vt(N){N.key==="Control"&&(lt=!1,r.domElement.getRootNode().removeEventListener("keyup",vt,{passive:!0,capture:!0}))}function St(N){r.enabled===!1||r.enablePan===!1||zt(N)}function Ot(N){switch(Wt(N),F.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;Bt(N),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;$t(N),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;J(N),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ge(N),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(pd)}function Mt(N){switch(Wt(N),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;ae(N),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;ue(N),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;xt(N),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Tt(N),r.update();break;default:u=l.NONE}}function kt(N){r.enabled!==!1&&N.preventDefault()}function te(N){F.push(N.pointerId)}function Ht(N){delete H[N.pointerId];for(let Lt=0;Lt<F.length;Lt++)if(F[Lt]==N.pointerId){F.splice(Lt,1);return}}function Wt(N){let Lt=H[N.pointerId];Lt===void 0&&(Lt=new ge,H[N.pointerId]=Lt),Lt.set(N.pageX,N.pageY)}function Ft(N){const Lt=N.pointerId===F[0]?F[1]:F[0];return H[Lt]}r.domElement.addEventListener("contextmenu",kt),r.domElement.addEventListener("pointerdown",T),r.domElement.addEventListener("pointercancel",Z),r.domElement.addEventListener("wheel",dt,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}function dA(){const o=Ce.useRef(null),[e,i]=Ce.useState(!1),[r,l]=Ce.useState(!1),[u,h]=Ce.useState(!1),[d,p]=Ce.useState(!1),[m,g]=Ce.useState(!1),[y,S]=Ce.useState(!1),[M,A]=Ce.useState(!1),[D,v]=Ce.useState(!1),[_,O]=Ce.useState(!1),[L,B]=Ce.useState(!1),V=Ce.useRef({beta:0,gamma:0});Ce.useRef(0);const I=Ce.useRef(!1),F=Ce.useRef(!1),H=Ce.useRef({position:{x:1,z:1},direction:new q(0,0,1),worldPosition:new q(0,0,0),mesh:null,velocity:{x:0,z:0},acceleration:{x:0,z:0},mass:1,lastUpdateTime:0}),lt=Ce.useRef({}),b=Ce.useRef(null),P=Ce.useRef(!1);Ce.useEffect(()=>{F.current=u},[u]),Ce.useEffect(()=>{P.current=e},[e]);const[_t,At]=Ce.useState(null),X=Ce.useRef(null);Ce.useRef(!1);const rt=Ce.useRef(null),G=Ce.useRef(!1),[ot,$]=Ce.useState({beta:0,gamma:0,velocity:{x:0,z:0},gravity:{x:0,z:0},position:{x:0,z:0},eventCount:0,lastUpdate:Date.now(),eventType:"none",showDebug:!0}),ut=()=>{if(console.log("Restarting game..."),!lt.current.generateMaze||!lt.current.createWalls){console.error("Game functions not initialized");return}if(b.current&&b.current.parent&&(console.log("Cleaning up celebration particles"),b.current.parent.remove(b.current),b.current.geometry&&b.current.geometry.dispose(),b.current.material&&b.current.material.dispose(),b.current=null,At(null)),console.log("Resetting game state"),i(!1),l(!1),h(!1),G.current=!1,console.log("Resetting player position and direction"),H.current.position={x:1,z:1},H.current.direction.set(0,0,1),console.log("Resetting maze reference"),rt.current=null,console.log("Generating new maze"),lt.current.generateMaze(),console.log("Creating new walls"),lt.current.createWalls(),console.log("Updating player world position"),H.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),lt.current.createPlayer&&lt.current.mazeGroup){console.log("Creating new player mesh"),H.current.mesh&&H.current.mesh.parent&&(console.log("Removing old player mesh"),H.current.mesh.parent.remove(H.current.mesh),H.current.mesh.children.forEach(Tt=>{Tt.geometry&&Tt.geometry.dispose(),Tt.material&&Tt.material.dispose()})),console.log("Creating new player mesh");const xt=lt.current.createPlayer();console.log("Positioning new player at entrance"),xt.position.copy(H.current.worldPosition),console.log("Adding new player to maze group"),lt.current.mazeGroup.add(xt),console.log("Added new player to maze group"),console.log("Updating player ref"),H.current.mesh=xt}if(lt.current.setInitialPlayerDirection?lt.current.setInitialPlayerDirection(H.current.mesh):H.current.direction.set(0,0,1),H.current.mesh){H.current.mesh.position.copy(H.current.worldPosition);const xt=Math.atan2(H.current.direction.x,H.current.direction.z);H.current.mesh.rotation.y=xt,H.current.mesh.visible=!0,H.current.mesh.children.forEach(Tt=>{Tt.material&&(Tt.material.opacity=1,Tt.material.transparent=!0)})}},C=()=>{const xt=navigator.userAgent||navigator.vendor||window.opera,Tt=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(xt.toLowerCase());return console.log("Device detection:",Tt?"Mobile":"Desktop"),I.current=Tt,Tt},j=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",pt=()=>window.DeviceOrientationEvent!==void 0,Ct=async()=>{if(!j())return console.log("No iOS permission needed, enabling gyroscope directly"),oe(),!0;console.log("Requesting iOS device orientation permission");try{const xt=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",xt),xt==="granted"?(console.log("✅ iOS permission granted!"),oe(),O(!1),B(!1),window.physics||$t(),!0):(console.log("❌ iOS permission denied:",xt),O(!1),B(!0),!1)}catch(xt){return console.error("❌ Error requesting iOS permission:",xt),O(!1),B(!0),!1}},k=xt=>{const Tt=performance.now(),T=Tt<3e3;T&&console.log("Orientation event received:",{beta:xt.beta,gamma:xt.gamma,time:Tt}),V.current={beta:xt.beta,gamma:xt.gamma},!T&&Tt%3e3<20&&console.log("Orientation data:",V.current)};Ce.useEffect(()=>{const xt=C();return console.log("Is mobile:",xt),xt&&(j()?(console.log("iOS device detected - showing permission button"),O(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):pt()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",k),A(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",k)}},[]),Ce.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let xt=function(Nt){if(Pi=requestAnimationFrame(xt),I.current&&!P.current&&!d&&(window.physics||(console.log("🔧 Initializing physics in animation loop"),$t()),window.physics&&window.physics.initialized&&Jt(Nt)),!Zt&&!e){const Yt=Nt-re,qt=Math.min(Yt/Ue,1);if(qt===1)Zt=!0,Ht.rotation.x=0,Ht.rotation.y=0;else{const Ut=hr.lerp(0,0,qt);Ht.rotation.x=Ut,Ht.rotation.y=0}}else!Zt&&e&&(Zt=!0),F.current||(Ht.rotation.x=0,Ht.rotation.y=0,Ht.rotation.z=0);const Xt=Nt*.001;Ht.children.forEach(Yt=>{Yt.material&&Yt.material.uniforms&&(Yt.material.uniforms.time.value=Xt)}),X.current?(console.log("Calling updateParticles from animation loop"),X.current()||(console.log("updateParticles returned false, setting to null"),X.current=null)):P.current&&!X.current&&console.log("Game won but updateParticles is null"),F.current?I.current||(kt.enabled=!1,kt.enableRotate=!1,kt.enableZoom=!1,kt.enablePan=!1):((Math.abs(Ot.position.x)>.1||Math.abs(Ot.position.z)>.1||Math.abs(Ot.position.y-vt())>.1||Math.abs(kt.target.x)>.1||Math.abs(kt.target.y)>.1||Math.abs(kt.target.z)>.1)&&(Ot.position.set(0,vt(),0),kt.target.set(0,0,0)),!I.current&&kt.update&&kt.update()),Bt(),ht.render(T,Ot)},Tt=function(){const Nt=window.innerWidth,Xt=window.innerHeight;ht.setSize(Nt,Xt),Ot.aspect=Nt/Xt;const Yt=Nt<768,qt=Nt>Xt;Yt?Ot.fov=qt?75:80:Ot.fov=60,F.current||(Ot.position.y=vt(),Ot.lookAt(0,0,0)),Ot.updateProjectionMatrix()};console.log("Initializing 3D scene"),I.current=C(),console.log("Is mobile device:",I.current),I.current&&v(!0);const T=new rA;T.background=new Oe(0);const E=new I_(4210752,1.5);T.add(E);const Z=new F_(16777215,1);if(Z.position.set(1,1,1),T.add(Z),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const ht=new E0({antialias:!0,canvas:o.current});if(ht.setSize(window.innerWidth,window.innerHeight),ht.setPixelRatio(Math.min(window.devicePixelRatio,2)),ht.shadowMap.enabled=!0,ht.shadowMap.type=W_,console.log("Renderer set up"),I.current){console.log("Setting up orientation handling for mobile");const Nt=Xt=>{var Yt;if(!(e||d)&&(!M&&(Xt.beta!==null||Xt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),A(!0)),!!M&&Xt.beta!==null&&Xt.gamma!==null)){let qt=Xt.beta,Ut=Xt.gamma;if(window.orientation!==void 0){const Pt=window.orientation;if(performance.now()%5e3<20&&((Yt=window.physics)!=null&&Yt.debug)&&console.log(`Device orientation: ${Pt}°, beta: ${qt.toFixed(2)}°, gamma: ${Ut.toFixed(2)}°`),Pt===90){const Se=qt;qt=Ut,Ut=-Se}else if(Pt===-90){const Se=qt;qt=-Ut,Ut=Se}else Pt===180&&(qt=-qt,Ut=-Ut)}if(window.physics){let Se=0,Be=0;Math.abs(Ut)>5&&(Se=Math.min(Math.abs(Ut)-5,25)/25*Math.sign(Ut)),Math.abs(qt)>5&&(Be=Math.min(Math.abs(qt)-5,25)/25*Math.sign(qt)),window.physics.gravityX=Se,window.physics.gravityZ=Be,performance.now()%2e3<20&&window.physics.debug&&console.log(`Physics gravity: X=${Se.toFixed(3)}, Z=${Be.toFixed(3)}`)}V.current={beta:qt,gamma:Ut}}};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Xt=async()=>{console.log("Requesting iOS device orientation permission");try{const Yt=await window.DeviceOrientationEvent.requestPermission();Yt==="granted"?(console.log("✅ Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",Nt),A(!0),(!window.physics||!window.physics.initialized)&&(console.log("🍎 iOS permission granted, initializing physics system"),$t(),setTimeout(()=>{H.current&&!e&&(console.log("🧪 Adding test impulse to verify physics system"),H.current.velocity.x=.05,H.current.velocity.z=.05)},2e3))):console.log("❌ Permission denied:",Yt)}catch(Yt){console.error("❌ Error requesting permission:",Yt)}};document.addEventListener("touchstart",()=>{Xt(),document.removeEventListener("touchstart",Xt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",Nt),A(!0)}const it=21,dt=2,wt=3,ct=2,vt=(Nt=!1)=>{const Xt=window.innerWidth<768,Yt=window.innerWidth>window.innerHeight,qt=it*ct;let Ut=qt*1.5;return Xt&&(Nt||L)&&(Yt?Ut=qt*1.6:Ut=qt*1.8),Xt?Yt?Ut*.8:Ut*1.2:Ut};window.calculateOptimalCameraHeight=vt;const St=vt(),Ot=new ti(60,window.innerWidth/window.innerHeight,.1,1e3);Ot.position.set(0,St,0),Ot.lookAt(0,0,0),console.log("Camera set up");const Mt=C();let kt;Mt?(kt={target:new q(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(kt=new fA(Ot,ht.domElement),kt.enableDamping=!0,kt.dampingFactor=.1,kt.target.set(0,0,0),kt.update(),console.log("Desktop controls set up"));const te=e&&rt.current?rt.current:Array(it).fill().map(()=>Array(it).fill(1));rt.current=te,window.MAZE_SIZE=it,window.WALL_THICKNESS=ct,window.playerRef=H,window.mazeRef=rt,window.isThirdPersonRef=F,window.gameCamera=Ot,window.maze=te,window.celebrateWin=()=>{G.current=!0,i(!0),l(!0),ye()};const Ht=new Ms;T.add(Ht),console.log("Maze group created"),lt.current.mazeGroup=Ht;const Wt=new sa({uniforms:{time:{value:0},baseColor:{value:new Oe(4482815)}},vertexShader:`
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
        `,side:Li});console.log("Wall material created");const Ft=(Nt,Xt)=>Nt>=0&&Nt<it&&Xt>=0&&Xt<it,ce=(Nt,Xt)=>{const Yt=[],qt=[[0,2],[2,0],[0,-2],[-2,0]];for(let Ut=qt.length-1;Ut>0;Ut--){const Pt=Math.floor(Math.random()*(Ut+1));[qt[Ut],qt[Pt]]=[qt[Pt],qt[Ut]]}for(const[Ut,Pt]of qt){const pe=Nt+Ut,Se=Xt+Pt;Ft(pe,Se)&&te[pe][Se]===1&&Yt.push([pe,Se,Ut/2,Pt/2])}return Yt},N=()=>{if(e&&rt.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let Pt=0;Pt<it;Pt++)for(let pe=0;pe<it;pe++)te[Pt][pe]=1;const Nt=[],Xt=1,Yt=1;for(te[Xt][Yt]=0,Nt.push([Xt,Yt]);Nt.length>0;){const[Pt,pe]=Nt[Nt.length-1],Se=ce(Pt,pe);if(Se.length===0){Nt.pop();continue}const[Be,R,K,tt]=Se[Math.floor(Math.random()*Se.length)];te[Be][R]=0,te[Pt+K][pe+tt]=0,Nt.push([Be,R])}te[0][1]=0,te[it-1][it-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(it-1)+","+(it-2)+")");const qt=new Set,Ut=Pt=>{const[pe,Se]=Pt;if(pe===it-2&&Se===it-2)return!0;qt.add(`${pe},${Se}`);const Be=[[0,1],[1,0],[0,-1],[-1,0]];for(const[R,K]of Be){const tt=pe+R,at=Se+K;if(Ft(tt,at)&&te[tt][at]===0&&!qt.has(`${tt},${at}`)&&Ut([tt,at]))return!0}return!1};Ut([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),N()),rt.current=te,window.maze=te,window.MAZE_SIZE=it,console.log("Maze generated and stored globally for physics")};console.log("Maze generation function created");const Lt=()=>{if(!e||!rt.current){for(console.log("Creating new walls for the maze");Ht.children.length>0;){const Nt=Ht.children[0];Nt.isGroup?Nt.children.forEach(Xt=>{Xt.geometry&&Xt.geometry.dispose(),Xt.material&&Xt.material.dispose()}):(Nt.geometry&&Nt.geometry.dispose(),Nt.material&&Nt.material.dispose()),Ht.remove(Nt)}for(let Nt=0;Nt<it;Nt++)for(let Xt=0;Xt<it;Xt++)if(te[Nt][Xt]===1){const Yt=new Va(ct,wt,ct),qt=new ei(Yt,Wt);if(qt.position.set((Nt-it/2)*ct,wt/2,(Xt-it/2)*ct),Ht.add(qt),Nt===0||Nt===it-1||Xt===0||Xt===it-1){if(Nt<it-1&&te[Nt+1][Xt]===1){const Ut=new ei(new Va(ct,wt,ct),Wt);Ut.position.set((Nt-it/2+.5)*ct,wt/2,(Xt-it/2)*ct),Ht.add(Ut)}if(Xt<it-1&&te[Nt][Xt+1]===1){const Ut=new ei(new Va(ct,wt,ct),Wt);Ut.position.set((Nt-it/2)*ct,wt/2,(Xt-it/2+.5)*ct),Ht.add(Ut)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),lt.current.generateMaze=N,lt.current.createWalls=Lt;const It=Nt=>{if(console.log("Setting initial player direction"),!Nt){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Xt=1,Yt=1,qt=[{dx:0,dz:1,name:"down",vector:new q(0,0,1)},{dx:1,dz:0,name:"right",vector:new q(1,0,0)},{dx:0,dz:-1,name:"up",vector:new q(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new q(-1,0,0)}];console.log("Checking available directions from starting position:",Xt,Yt);const Ut=qt.filter(Pt=>{const pe=Xt+Pt.dx,Se=Yt+Pt.dz;if(pe===0&&Se===1)return console.log(`Direction ${Pt.name} leads to entrance, skipping`),!1;const Be=Ft(pe,Se)&&te[pe][Se]===0;return console.log(`Direction ${Pt.name} leads to (${pe}, ${Se}): ${Be?"valid":"invalid"}`),Be});if(console.log("Valid directions:",Ut.map(Pt=>Pt.name)),Ut.length>0){const Pt=Ut[0];console.log("Chosen direction:",Pt.name),H.current.direction.copy(Pt.vector);const pe=Math.atan2(Pt.vector.x,Pt.vector.z);Nt.rotation.y=pe,console.log("Set player rotation to:",pe)}else console.log("No valid directions found, defaulting to down"),H.current.direction.set(0,0,1),Nt.rotation.y=0};lt.current.setInitialPlayerDirection=It,e?console.log("Game has been won, preserving maze and player position"):(N(),Lt(),console.log("Initial maze created"));const ne=new I_(16777215,.6);T.add(ne);const U=new F_(16777215,1);U.position.set(50,100,50),T.add(U);const Dt=new B_(4474111,2,150);Dt.position.set(50,50,50),T.add(Dt);const bt=new B_(4474111,2,150);bt.position.set(-50,50,-50),T.add(bt),console.log("Lights added");let Zt=!1;const re=performance.now(),Ue=1e3,ye=()=>{console.log("Celebration function called - START");const Nt=2e3,Xt=new Oi,Yt=new Float32Array(Nt*3),qt=new Float32Array(Nt*3);for(let R=0;R<Nt;R++)Yt[R*3]=H.current.worldPosition.x,Yt[R*3+1]=H.current.worldPosition.y,Yt[R*3+2]=H.current.worldPosition.z,qt[R*3]=Math.random(),qt[R*3+1]=Math.random(),qt[R*3+2]=Math.random();Xt.setAttribute("position",new pi(Yt,3)),Xt.setAttribute("color",new pi(qt,3));const Ut=new b0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:md}),Pt=new sA(Xt,Ut);T.add(Pt),console.log("Particle system added to scene");const pe=[];for(let R=0;R<Nt;R++){const K=Math.random()*Math.PI*2,tt=Math.acos(Math.random()*2-1),at=.05+Math.random()*.1;pe.push(Math.sin(tt)*Math.cos(K)*at,Math.sin(tt)*Math.sin(K)*at,Math.cos(tt)*at)}b.current=Pt;const Se=()=>{if(console.log("Update particles function called - frame"),!P.current)return console.log("Game no longer in won state, cleaning up particles"),Pt.parent&&(T.remove(Pt),Pt.geometry.dispose(),Ut.dispose()),b.current=null,X.current=null,!1;const R=Pt.geometry.attributes.position.array;let K=!1;for(let at=0;at<Nt;at++){const et=at*3;R[et]+=pe[et],R[et+1]+=pe[et+1],R[et+2]+=pe[et+2],pe[et+1]-=.001;const Gt=R[et]-H.current.worldPosition.x,Qt=R[et+1]-H.current.worldPosition.y,ie=R[et+2]-H.current.worldPosition.z;Math.sqrt(Gt*Gt+Qt*Qt+ie*ie)<20&&(K=!0)}Pt.geometry.attributes.position.needsUpdate=!0;const tt=performance.now()-Be;return tt>1e3&&(Ut.opacity=Math.max(0,1-(tt-1e3)/1e3)),!K||tt>2e3?(console.log("Animation complete, cleaning up particles"),T.remove(Pt),Pt.geometry.dispose(),Ut.dispose(),b.current=null,X.current=null,!1):!0},Be=performance.now();return console.log("Setting updateParticles function"),X.current=Se,()=>{console.log("Cleanup function called"),Pt.parent&&(T.remove(Pt),Pt.geometry.dispose(),Ut.dispose()),b.current=null,X.current=null}},ze=()=>{const Nt=new Ms,Xt=new Mc(ct/2,16,16),Yt=new oA({color:16776960}),qt=new ei(Xt,Yt);return Nt.add(qt),Nt},we=ze();lt.current.createPlayer=ze;let xe=null;if(e){for(let Nt=0;Nt<Ht.children.length;Nt++){const Xt=Ht.children[Nt];if(Xt.isGroup&&Xt.children.length>0&&Xt.children[0].geometry instanceof Mc){xe=Xt;break}}xe&&(xe.children.forEach(Nt=>{Nt.geometry&&Nt.geometry.dispose(),Nt.material&&Nt.material.dispose()}),Ht.remove(xe),console.log("Removed existing player from maze group"))}if(!e)we.position.set((1-it/2)*ct,ct/2,(1-it/2)*ct),H.current.mesh=we,H.current.worldPosition.copy(we.position),It(we);else{if(G.current){const Xt=it-1,Yt=it-2,qt=new q((Xt-it/2)*ct,ct/2,(Yt-it/2)*ct);console.log("Positioning player at exit:",qt),we.position.copy(qt),H.current.worldPosition.copy(qt),H.current.position={x:Xt,z:Yt}}else console.log("Using existing player position:",H.current.worldPosition),we.position.copy(H.current.worldPosition);H.current.mesh=we;const Nt=Math.atan2(H.current.direction.x,H.current.direction.z);we.rotation.y=Nt}Ht.add(we),H.current.mesh=we,console.log("Player created and added to maze group");const qe=Nt=>{if(Nt.key.toLowerCase()==="v")return console.log("View toggle key pressed"),Nt.preventDefault(),Nt.stopPropagation(),Nt.stopImmediatePropagation(),d?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),h(Xt=>{const Yt=!Xt;console.log("Switching to:",Yt?"POV mode":"Top-down mode"),F.current=Yt;const qt=Ot.position.clone(),Ut=new q().copy(kt.target),Pt=Ot.fov,pe={x:Ht.rotation.x,y:Ht.rotation.y,z:Ht.rotation.z},Se=Yt?new q(H.current.worldPosition.x,H.current.worldPosition.y+1.5,H.current.worldPosition.z):new q(0,vt(),0),Be=Yt?new q(H.current.worldPosition.x+H.current.direction.x*ct,H.current.worldPosition.y+1.5,H.current.worldPosition.z+H.current.direction.z*ct):new q(0,0,0),R=window.innerWidth<768,K=window.innerWidth>window.innerHeight;let tt=Yt?75:60;R&&(tt=Yt||K?75:80);const at={x:0,y:0,z:0},et=we.visible?1:0,Gt=Yt?0:1;we.visible=!0,we.children.forEach(fe=>{fe.material&&(fe.material.transparent||(fe.material.transparent=!0),fe.material.opacity=et)}),I.current||(kt.enabled=!1);const Qt=1200;let ie=null;const Kt=fe=>{const de=fe-_e,He=Math.min(de/Qt,1),Ve=(Te=>Te<.5?4*Te*Te*Te:1-Math.pow(-2*Te+2,3)/2)(He);Ot.position.lerpVectors(qt,Se,Ve);const On=new q().lerpVectors(Ut,Be,Ve);if(I.current||kt.target.copy(On),Ot.lookAt(On),Ot.fov=hr.lerp(Pt,tt,Ve),Ot.updateProjectionMatrix(),Ht.rotation.x=hr.lerp(pe.x,at.x,Ve),Ht.rotation.y=hr.lerp(pe.y,at.y,Ve),Ht.rotation.z=hr.lerp(pe.z,at.z,Ve),we.children.forEach(Te=>{Te.material&&(Te.material.opacity=hr.lerp(et,Gt,Ve))}),He===1){cancelAnimationFrame(ie),we.visible=!Yt,we.children.forEach(Te=>{Te.material&&(Te.material.opacity=Gt,Gt===1&&(Te.material.transparent=!1))}),!I.current&&!Yt?(kt.enabled=!0,kt.enableRotate=!0,kt.enableZoom=!0,kt.enablePan=!0):(Ot.position.copy(Se),Ot.lookAt(Be)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}ie=requestAnimationFrame(Kt)},_e=performance.now();return ie=requestAnimationFrame(Kt),Yt}),!1)},nn=Nt=>{if(P.current||!Zt||d){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Xt=Nt.key.toLowerCase();if(console.log("Key pressed:",Xt,"Current mode:",F.current?"POV":"Top-down"),Xt==="v")return;Nt.preventDefault();const Yt=H.current.position.x,qt=H.current.position.z;let Ut=Yt,Pt=qt,pe=!1;const Se=H.current.mesh;if(!Se){console.error("Player mesh not found");return}if(F.current){switch(console.log("Handling POV mode controls"),Xt){case"arrowup":case"w":console.log("Moving forward - Current position:",Yt,qt),console.log("Current direction:",H.current.direction),Ut=Yt+Math.round(H.current.direction.x),Pt=qt+Math.round(H.current.direction.z),console.log("New position will be:",Ut,Pt),pe="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",Yt,qt),console.log("Current direction:",H.current.direction),Ut=Yt-Math.round(H.current.direction.x),Pt=qt-Math.round(H.current.direction.z),console.log("New position will be:",Ut,Pt),pe="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",H.current.direction),H.current.direction.applyAxisAngle(new q(0,1,0),Math.PI/2),console.log("New direction:",H.current.direction),pe="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",H.current.direction),H.current.direction.applyAxisAngle(new q(0,1,0),-Math.PI/2),console.log("New direction:",H.current.direction),pe="rotate";break}if(pe==="move")if(Ft(Ut,Pt)&&te[Ut][Pt]===0){console.log("Movement is valid, updating positions"),H.current.position.x=Ut,H.current.position.z=Pt;const Be=new q((Ut-it/2)*ct,ct/2,(Pt-it/2)*ct);console.log("New world position:",Be),H.current.worldPosition.copy(Be),Se.position.copy(Be),console.log("Updated player mesh position to:",Se.position),Ot.position.set(Be.x,Be.y+1.5,Be.z),console.log("New camera position:",Ot.position);const R=Ot.position.clone();if(R.add(H.current.direction.clone().multiplyScalar(ct)),Ot.lookAt(R),console.log("Camera looking at:",R),Ot.updateProjectionMatrix(),Ot.updateMatrixWorld(),Ut===it-1&&Pt===it-2){G.current=!0,i(!0),l(!0);const K=ye();return()=>{K&&K()}}}else console.log("Movement blocked - Out of bounds or wall:",Ut,Pt);else if(pe==="rotate"){console.log("Handling rotation");const Be=Math.atan2(H.current.direction.x,H.current.direction.z);Se.rotation.y=Be,console.log("Updated player mesh rotation to:",Be);const R=Ot.position.clone();R.add(H.current.direction.clone().multiplyScalar(ct)),Ot.lookAt(R),console.log("Camera looking at new direction:",R),Ot.updateProjectionMatrix(),Ot.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Xt){case"arrowup":case"w":console.log("Moving up - Current position:",Yt,qt),Pt=qt-1,H.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",Yt,qt),Pt=qt+1,H.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",Yt,qt),Ut=Yt-1,H.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",Yt,qt),Ut=Yt+1,H.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",Ut,Pt),console.log("Maze value at target position:",te[Ut][Pt]),console.log("Is in bounds:",Ft(Ut,Pt)),Ft(Ut,Pt)&&te[Ut][Pt]===0){console.log("Movement is valid, updating positions"),H.current.position.x=Ut,H.current.position.z=Pt;const Be=new q((Ut-it/2)*ct,ct/2,(Pt-it/2)*ct);H.current.worldPosition.copy(Be),Se.position.copy(Be);const R=Math.atan2(H.current.direction.x,H.current.direction.z);if(Se.rotation.y=R,Ut===it-1&&Pt===it-2){G.current=!0,i(!0),l(!0);const K=ye();return()=>{K&&K()}}}}};window.removeEventListener("keydown",qe,!0),window.removeEventListener("keydown",nn),console.log("Attaching event listeners"),window.addEventListener("keydown",qe,!0),window.addEventListener("keydown",nn),console.log("Event listeners attached");let Pi;return console.log("Starting animation"),xt(),window.addEventListener("resize",Tt),()=>{console.log("Cleanup running"),window.removeEventListener("resize",Tt),window.removeEventListener("keydown",qe,!0),window.removeEventListener("keydown",nn),Pi&&cancelAnimationFrame(Pi),T.traverse(Nt=>{Nt.geometry&&Nt.geometry.dispose(),Nt.material&&(Array.isArray(Nt.material)?Nt.material.forEach(Xt=>Xt.dispose()):Nt.material.dispose())}),ht.dispose(),kt&&typeof kt.dispose=="function"&&kt.dispose()}}catch(xt){console.error("Error in setup:",xt)}},[]),Ce.useEffect(()=>{const xt=()=>{const T=C();return T&&(!pt()||j()&&!M)&&(console.log("Setting up touch controls for mobile"),B(!0)),Tt(),T},Tt=()=>{if(console.log("Checking DeviceOrientation support:"),console.log("DeviceOrientationEvent exists:",typeof DeviceOrientationEvent<"u"),typeof DeviceOrientationEvent<"u"){console.log("DeviceOrientationEvent.requestPermission exists:",typeof DeviceOrientationEvent.requestPermission=="function"),console.log("Is HTTPS:",window.location.protocol==="https:");const T=E=>{console.log("Device orientation event received:",E),window.removeEventListener("deviceorientation",T)};window.addEventListener("deviceorientation",T,{once:!0}),console.log("Test listener added for deviceorientation event")}else console.warn("DeviceOrientationEvent is not available in this browser/environment"),console.log("Some possible reasons:"),console.log("- Not using HTTPS"),console.log("- Running in a non-supported environment"),console.log("- Missing permissions"),console.log("- Browser doesn't support device orientation")};xt()},[M]);const ft=Ce.useRef(null),Et=Ce.useRef(null),jt=Ce.useRef(null),zt=Ce.useRef(null);Ce.useEffect(()=>{if(!L)return;console.log("Setting up touch control listeners");const xt=dt=>{if(e||d)return;const wt=.1;switch(dt){case"up":H.current.velocity.z-=wt,H.current.direction.set(0,0,-1);break;case"down":H.current.velocity.z+=wt,H.current.direction.set(0,0,1);break;case"left":H.current.velocity.x-=wt,H.current.direction.set(-1,0,0);break;case"right":H.current.velocity.x+=wt,H.current.direction.set(1,0,0);break}const ct=.2,vt=H.current.velocity,St=Math.sqrt(vt.x*vt.x+vt.z*vt.z);St>ct&&(vt.x=vt.x/St*ct,vt.z=vt.z/St*ct)},Tt=(dt,wt)=>(dt.preventDefault(),dt.stopPropagation(),xt(wt),!1),T=(dt,wt)=>{if(!dt.current)return;const ct=dt.current,vt=kt=>Tt(kt,wt),St=kt=>kt.preventDefault(),Ot=kt=>Tt(kt,wt),Mt=kt=>Tt(kt,wt);return ct.addEventListener("touchstart",vt,{passive:!1}),ct.addEventListener("touchend",St,{passive:!1}),ct.addEventListener("mousedown",Ot),ct.addEventListener("click",Mt),()=>{ct.removeEventListener("touchstart",vt),ct.removeEventListener("touchend",St),ct.removeEventListener("mousedown",Ot),ct.removeEventListener("click",Mt)}},E=T(ft,"up"),Z=T(Et,"down"),ht=T(jt,"left"),it=T(zt,"right");return()=>{E&&E(),Z&&Z(),ht&&ht(),it&&it()}},[L]),Ce.useEffect(()=>{const xt=()=>{let E=document.querySelector('meta[name="viewport"]');E||(E=document.createElement("meta"),E.name="viewport",document.head.appendChild(E)),E.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},Tt=E=>{E.touches&&E.touches.length>1&&E.preventDefault()},T=E=>{E.preventDefault()};return xt(),document.addEventListener("touchmove",Tt,{passive:!1}),document.addEventListener("touchstart",T,{passive:!1}),()=>{document.removeEventListener("touchmove",Tt),document.removeEventListener("touchstart",T)}},[]),Ce.useEffect(()=>{if(!window.gameCamera||F.current)return;const Tt=setTimeout(()=>{const T=window.gameCamera;if(T&&!F.current)if(typeof window.calculateOptimalCameraHeight=="function"){const E=window.calculateOptimalCameraHeight(L);T.position.y=E,T.updateProjectionMatrix(),console.log(`Adjusted camera height to ${E} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(Tt)},[L]);const Bt=()=>{if(!M||e||d)return;const xt=H.current,Tt=xt.acceleration,T=xt.velocity,E=xt.position,Z=.95;if(T.x+=Tt.x,T.z+=Tt.z,T.x*=Z,T.z*=Z,Math.abs(T.x)<.001&&Math.abs(T.z)<.001)return;let ht=E.x+T.x,it=E.z+T.z;const dt=(wt,ct)=>{const vt=Math.floor(wt),St=Math.floor(ct);return vt>=0&&vt<MAZE_SIZE&&St>=0&&St<MAZE_SIZE&&maze[vt][St]===0};if(dt(ht,E.z)?(E.x=ht,xt.mesh.position.x=ht*2):T.x=0,dt(E.x,it)?(E.z=it,xt.mesh.position.z=it*2):T.z=0,Math.floor(E.x)===MAZE_SIZE-1&&Math.floor(E.z)===MAZE_SIZE-2&&lt.current.celebrate(),F.current){const wt=new q(0,3,-3).applyQuaternion(xt.mesh.quaternion);camera.position.copy(xt.mesh.position).add(wt),camera.lookAt(xt.mesh.position)}},$t=()=>{console.log("⚡ Initializing physics system"),window.physics={gravity:.008,maxSpeed:.25,friction:.98,restitution:.5,active:!0,debug:!0,lastTime:0,orientation:{beta:0,gamma:0},gravityX:0,gravityZ:0,initialized:!0},H.current&&(H.current.velocity={x:0,z:0},H.current.acceleration={x:0,z:0},H.current.mass=1,H.current.lastUpdateTime=performance.now());const xt=()=>{if(document.getElementById("physics-debug-indicator"))return;const Tt=document.createElement("div");Tt.id="physics-debug-indicator",Tt.style.cssText=`
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
      `;const T=document.createElement("div");T.style.cssText=`
        width: 20px;
        height: 20px;
        background-color: #4CAF50;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        transition: all 0.1s ease;
      `;const E=document.createElement("div");E.style.cssText=`
        position: absolute;
        bottom: -25px;
        left: 0;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 12px;
      `,E.innerText="Tilt Debug",Tt.appendChild(T),Tt.appendChild(E),document.body.appendChild(Tt),window.physics.debugDot=T};window.physics.debug&&C()&&setTimeout(xt,500),console.log("⚡ Physics system initialized with gravity:",window.physics.gravity),H.current&&(console.log("💥 Adding immediate test impulse of 0.05"),H.current.velocity={x:.05,z:.05})},oe=()=>{console.log("🔌 Connecting all orientation event handlers"),window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",Ge,{passive:!0}),console.log("✓ Added deviceorientation listener")),window.DeviceMotionEvent&&(window.addEventListener("devicemotion",J,{passive:!0}),console.log("✓ Added devicemotion listener")),A(!0),v(!0)},J=xt=>{if($(T=>({...T,eventCount:T.eventCount+1,lastUpdate:Date.now(),eventType:"motion"})),!window.physics)return;const Tt=xt.accelerationIncludingGravity;if(Tt&&Tt.x!==null&&Tt.y!==null&&Tt.z!==null){let E=Math.min(Math.max(Tt.x/5,-1),1),Z=Math.min(Math.max(Tt.y/5,-1),1);const ht=.05;Math.abs(E)<ht&&(E=0),Math.abs(Z)<ht&&(Z=0),window.physics.gravityX=-E,window.physics.gravityZ=Z,performance.now()%2e3<20&&(console.log(`📱 Device motion: accel(${Tt.x.toFixed(2)}, ${Tt.y.toFixed(2)}, ${Tt.z.toFixed(2)})`),console.log(`🧲 Converted gravity: X=${E.toFixed(3)}, Z=${Z.toFixed(3)}`))}},Ge=xt=>{var T,E;if($(Z=>({...Z,eventCount:Z.eventCount+1,lastUpdate:Date.now(),eventType:"orientation",beta:xt.beta!==null?parseFloat(xt.beta.toFixed(2)):"null",gamma:xt.gamma!==null?parseFloat(xt.gamma.toFixed(2)):"null"})),xt.beta===null&&xt.gamma===null){performance.now()%3e3<20&&console.warn("⚠️ Received empty orientation event: beta and gamma are null");return}const Tt=performance.now();if(Tt%3e3<20&&console.log(`📱 Raw device orientation: beta=${(T=xt.beta)==null?void 0:T.toFixed(2)}°, gamma=${(E=xt.gamma)==null?void 0:E.toFixed(2)}°`),!(e||d)&&(!M&&(xt.beta!==null||xt.gamma!==null)&&(console.log("✅ Automatically activating gyroscope - received real data"),A(!0),v(!0)),xt.beta!==null&&xt.gamma!==null)){let Z=xt.beta,ht=xt.gamma;if(window.orientation!==void 0){const it=window.orientation;if(it===90){const dt=Z;Z=ht,ht=-dt}else if(it===-90){const dt=Z;Z=-ht,ht=dt}else it===180&&(Z=-Z,ht=-ht)}if((!window.physics||!window.physics.initialized)&&(console.log("🔧 Initializing physics from orientation event"),$t()),window.physics){let wt=0,ct=0;Math.abs(ht)>2&&(wt=Math.min(Math.abs(ht)-2,28)/28*Math.sign(ht)),Math.abs(Z)>2&&(ct=Math.min(Math.abs(Z)-2,28)/28*Math.sign(Z)),window.physics.gravityX=wt,window.physics.gravityZ=ct,$(vt=>({...vt,gravity:{x:wt,z:ct}})),Tt%5e3<20&&H.current&&(console.log("💥 Applying direct impulse from orientation event"),H.current.velocity.x+=.05*Math.sign(wt),H.current.velocity.z+=.05*Math.sign(ct))}V.current={beta:Z,gamma:ht}}},ae=()=>{var ct,vt,St,Ot,Mt,kt;const{beta:xt,gamma:Tt,velocity:T,gravity:E,eventCount:Z,lastUpdate:ht,eventType:it,position:dt}=ot,wt=Date.now()-ht;return he.jsxs("div",{style:{position:"fixed",top:10,left:10,backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"10px",borderRadius:"5px",fontSize:"14px",zIndex:1e4,maxWidth:"300px",fontFamily:"monospace"},children:[he.jsx("h3",{style:{margin:"0 0 8px 0",borderBottom:"1px solid #666"},children:"📱 Device Debug"}),he.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[he.jsxs("div",{children:[he.jsx("span",{style:{color:"#8cf"},children:"Event Type: "}),he.jsxs("span",{style:{color:wt<500?"#8f8":"#f88"},children:[it||"None"," (",Z,")"]}),he.jsx("span",{style:{marginLeft:"5px",color:wt<200?"#8f8":wt<1e3?"#ff8":"#f88"},children:wt<200?"●":wt<1e3?"○":"✕"})]}),he.jsxs("div",{children:[he.jsx("span",{style:{color:"#8cf"},children:"Gyro Beta: "}),he.jsxs("span",{style:{color:Math.abs(xt)>5?"#f88":"#8f8"},children:[xt,"°"]})]}),he.jsxs("div",{children:[he.jsx("span",{style:{color:"#8cf"},children:"Gyro Gamma: "}),he.jsxs("span",{style:{color:Math.abs(Tt)>5?"#f88":"#8f8"},children:[Tt,"°"]})]}),he.jsxs("div",{children:[he.jsx("span",{style:{color:"#8cf"},children:"Gravity: "}),he.jsxs("span",{style:{color:Math.abs(E.x)+Math.abs(E.z)>.05?"#f88":"#8f8"},children:["X: ",((ct=E.x)==null?void 0:ct.toFixed(4))||0,", Z: ",((vt=E.z)==null?void 0:vt.toFixed(4))||0]})]}),he.jsxs("div",{children:[he.jsx("span",{style:{color:"#8cf"},children:"Velocity: "}),he.jsxs("span",{style:{color:Math.abs(T.x)+Math.abs(T.z)>.01?"#f88":"#8f8"},children:["X: ",((St=T.x)==null?void 0:St.toFixed(4))||0,", Z: ",((Ot=T.z)==null?void 0:Ot.toFixed(4))||0]})]}),he.jsxs("div",{children:[he.jsx("span",{style:{color:"#8cf"},children:"Position: "}),he.jsxs("span",{children:["X: ",((Mt=dt==null?void 0:dt.x)==null?void 0:Mt.toFixed(2))||"?",", Z: ",((kt=dt==null?void 0:dt.z)==null?void 0:kt.toFixed(2))||"?"]})]}),he.jsx("button",{onClick:()=>{H.current&&(H.current.velocity={x:.1,z:.1},console.log("Manual impulse applied"))},style:{marginTop:"5px",background:"#4CAF50",border:"none",borderRadius:"3px",padding:"5px",color:"white",cursor:"pointer"},children:"Force Impulse"})]})]})},ue=()=>{$(xt=>({...xt,showDebug:!xt.showDebug}))},Jt=xt=>{if(!window.physics||!window.physics.active){console.warn("⚠️ Physics system inactive or not initialized");return}if(!window.maze&&(console.warn("⚠️ Maze not accessible for physics update"),window.maze=maze,!window.maze))return;if(!window.physics.lastTime){window.physics.lastTime=xt;return}const Tt=xt-window.physics.lastTime;if(window.physics.lastTime=xt,Tt>100)return;const T=Tt/16.67,E=window.physics,Z=E.gravity||.008,ht=E.maxSpeed||.25,it=E.friction||.98,dt=E.restitution||.5,wt=H.current;if(!wt){console.error("❌ Player reference is missing");return}const ct=wt.mesh;if(!ct){console.error("❌ Player mesh is missing");return}const vt=wt.position;wt.velocity||(wt.velocity={x:0,z:0});let St=wt.velocity;const Ot=E.gravityX||0,Mt=E.gravityZ||0;St.x+=Ot*Z*T*2,St.z+=Mt*Z*T*2,xt%5e3<20&&Math.abs(St.x)+Math.abs(St.z)<.01&&(console.log("🔄 Adding test impulse to verify physics"),St.x+=.05,St.z+=.05),St.x*=Math.pow(it,T),St.z*=Math.pow(it,T);const kt=Math.sqrt(St.x*St.x+St.z*St.z);if(kt>ht&&(St.x=St.x/kt*ht,St.z=St.z/kt*ht),Math.abs(St.x)<5e-4&&(St.x=0),Math.abs(St.z)<5e-4&&(St.z=0),St.x===0&&St.z===0)return;let te=vt.x+St.x*T,Ht=vt.z+St.z*T;const Wt=(N,Lt)=>{const It=Math.floor(N),ne=Math.floor(Lt),U=window.MAZE_SIZE||21;return It>=0&&It<U&&ne>=0&&ne<U&&window.maze[It][ne]===0};let Ft=!1;if(Wt(te,vt.z)?vt.x=te:(St.x=-St.x*dt,Ft=!0,St.x>0?vt.x=Math.floor(vt.x)+.95:vt.x=Math.ceil(vt.x)-.05),Wt(vt.x,Ht)?vt.z=Ht:(St.z=-St.z*dt,Ft=!0,St.z>0?vt.z=Math.floor(vt.z)+.95:vt.z=Math.ceil(vt.z)-.05),$(N=>({...N,velocity:{x:St.x,z:St.z},position:{x:vt.x,z:vt.z}})),ct.position.x=vt.x*2,ct.position.z=vt.z*2,kt>.01){const N=Math.atan2(St.x,St.z);wt.mesh.rotation.y=N,wt.direction.set(St.x,0,St.z).normalize()}const ce=window.MAZE_SIZE||21;Math.floor(vt.x)===ce-1&&Math.floor(vt.z)===ce-2&&(console.log("🏆 Victory detected in physics update!"),celebrate()),(E.debug&&xt%2e3<20||Ft)&&console.log(`🔮 Physics: pos(${vt.x.toFixed(2)},${vt.z.toFixed(2)}) vel(${St.x.toFixed(4)},${St.z.toFixed(4)}) grav(${Ot.toFixed(2)},${Mt.toFixed(2)}) speed: ${kt.toFixed(3)}`+(Ft?" 💥 WALL COLLISION":""))};return he.jsxs(he.Fragment,{children:[he.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),ot.showDebug&&he.jsx(ae,{}),he.jsx("button",{onClick:ue,style:{position:"fixed",top:10,right:10,zIndex:1e4,background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px"},children:ot.showDebug?"Hide Debug":"Show Debug"}),_&&he.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[he.jsx("button",{className:"permission-button",onClick:xt=>{xt.preventDefault(),xt.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{Ct()},10)},onTouchStart:xt=>{console.log("Button touch started"),xt.stopPropagation()},onTouchEnd:xt=>{console.log("Button touch ended"),xt.preventDefault(),xt.stopPropagation(),setTimeout(()=>{Ct()},10)},children:"Enable Tilt Controls"}),he.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),L&&he.jsxs("div",{className:"touch-controls",children:[he.jsx("div",{className:"touch-controls-row",children:he.jsx("button",{ref:ft,className:"touch-button up-button","data-direction":"up",children:"▲"})}),he.jsxs("div",{className:"touch-controls-row",children:[he.jsx("button",{ref:jt,className:"touch-button left-button","data-direction":"left",children:"◀"}),he.jsx("div",{className:"touch-button-spacer"}),he.jsx("button",{ref:zt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),he.jsx("div",{className:"touch-controls-row",children:he.jsx("button",{ref:Et,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),e&&he.jsxs("div",{className:"victory-message",children:[he.jsx("h1",{children:"You Won!"}),r&&he.jsx("button",{onClick:ut,children:"Play Again"})]}),m&&he.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),D&&M&&he.jsxs("div",{className:"gyroscope-indicator",children:[he.jsx("div",{className:"gyroscope-icon",children:he.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:he.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),he.jsx("span",{children:"Tilt to Move"})]})]})}Fy.createRoot(document.getElementById("root")).render(he.jsx(Ce.StrictMode,{children:he.jsx(dA,{})}));
