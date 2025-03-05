(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function qg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Df={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function US(){if(N_)return bo;N_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var O_;function LS(){return O_||(O_=1,Df.exports=US()),Df.exports}var Kn=LS(),Uf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function NS(){if(P_)return oe;P_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function y(U,J,yt){this.props=U,this.context=J,this.refs=D,this.updater=yt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(U,J,yt){this.props=U,this.context=J,this.refs=D,this.updater=yt||M}var E=P.prototype=new _;E.constructor=P,C(E,y.prototype),E.isPureReactComponent=!0;var L=Array.isArray,G={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function F(U,J,yt,Tt,H,ot){return yt=ot.ref,{$$typeof:o,type:U,key:J,ref:yt!==void 0?yt:null,props:ot}}function K(U,J){return F(U.type,J,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return J[yt]})}var B=/\/+/g;function ct(U,J){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):J.toString(36)}function at(){}function pt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(at,at):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,J,yt,Tt,H){var ot=typeof U;(ot==="undefined"||ot==="boolean")&&(U=null);var gt=!1;if(U===null)gt=!0;else switch(ot){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(U.$$typeof){case o:case t:gt=!0;break;case g:return gt=U._init,ht(gt(U._payload),J,yt,Tt,H)}}if(gt)return H=H(U),gt=Tt===""?"."+ct(U,0):Tt,L(H)?(yt="",gt!=null&&(yt=gt.replace(B,"$&/")+"/"),ht(H,J,yt,"",function(Kt){return Kt})):H!=null&&(w(H)&&(H=K(H,yt+(H.key==null||U&&U.key===H.key?"":(""+H.key).replace(B,"$&/")+"/")+gt)),J.push(H)),1;gt=0;var bt=Tt===""?".":Tt+":";if(L(U))for(var Rt=0;Rt<U.length;Rt++)Tt=U[Rt],ot=bt+ct(Tt,Rt),gt+=ht(Tt,J,yt,ot,H);else if(Rt=x(U),typeof Rt=="function")for(U=Rt.call(U),Rt=0;!(Tt=U.next()).done;)Tt=Tt.value,ot=bt+ct(Tt,Rt++),gt+=ht(Tt,J,yt,ot,H);else if(ot==="object"){if(typeof U.then=="function")return ht(pt(U),J,yt,Tt,H);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return gt}function X(U,J,yt){if(U==null)return U;var Tt=[],H=0;return ht(U,Tt,"","",function(ot){return J.call(yt,ot,H++)}),Tt}function st(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return oe.Children={map:X,forEach:function(U,J,yt){X(U,function(){J.apply(this,arguments)},yt)},count:function(U){var J=0;return X(U,function(){J++}),J},toArray:function(U){return X(U,function(J){return J})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,J,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Tt=C({},U.props),H=U.key,ot=void 0;if(J!=null)for(gt in J.ref!==void 0&&(ot=void 0),J.key!==void 0&&(H=""+J.key),J)!I.call(J,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&J.ref===void 0||(Tt[gt]=J[gt]);var gt=arguments.length-2;if(gt===1)Tt.children=yt;else if(1<gt){for(var bt=Array(gt),Rt=0;Rt<gt;Rt++)bt[Rt]=arguments[Rt+2];Tt.children=bt}return F(U.type,H,void 0,void 0,ot,Tt)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,J,yt){var Tt,H={},ot=null;if(J!=null)for(Tt in J.key!==void 0&&(ot=""+J.key),J)I.call(J,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(H[Tt]=J[Tt]);var gt=arguments.length-2;if(gt===1)H.children=yt;else if(1<gt){for(var bt=Array(gt),Rt=0;Rt<gt;Rt++)bt[Rt]=arguments[Rt+2];H.children=bt}if(U&&U.defaultProps)for(Tt in gt=U.defaultProps,gt)H[Tt]===void 0&&(H[Tt]=gt[Tt]);return F(U,ot,void 0,void 0,null,H)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=w,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:st}},oe.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},oe.startTransition=function(U){var J=G.T,yt={};G.T=yt;try{var Tt=U(),H=G.S;H!==null&&H(yt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(St,Y)}catch(ot){Y(ot)}finally{G.T=J}},oe.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},oe.use=function(U){return G.H.use(U)},oe.useActionState=function(U,J,yt){return G.H.useActionState(U,J,yt)},oe.useCallback=function(U,J){return G.H.useCallback(U,J)},oe.useContext=function(U){return G.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,J){return G.H.useDeferredValue(U,J)},oe.useEffect=function(U,J){return G.H.useEffect(U,J)},oe.useId=function(){return G.H.useId()},oe.useImperativeHandle=function(U,J,yt){return G.H.useImperativeHandle(U,J,yt)},oe.useInsertionEffect=function(U,J){return G.H.useInsertionEffect(U,J)},oe.useLayoutEffect=function(U,J){return G.H.useLayoutEffect(U,J)},oe.useMemo=function(U,J){return G.H.useMemo(U,J)},oe.useOptimistic=function(U,J){return G.H.useOptimistic(U,J)},oe.useReducer=function(U,J,yt){return G.H.useReducer(U,J,yt)},oe.useRef=function(U){return G.H.useRef(U)},oe.useState=function(U){return G.H.useState(U)},oe.useSyncExternalStore=function(U,J,yt){return G.H.useSyncExternalStore(U,J,yt)},oe.useTransition=function(){return G.H.useTransition()},oe.version="19.0.0",oe}var z_;function ed(){return z_||(z_=1,Uf.exports=NS()),Uf.exports}var No=ed();const OS=qg(No);var Lf={exports:{}},Ao={},Nf={exports:{}},Of={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function PS(){return B_||(B_=1,function(o){function t(X,st){var Y=X.length;X.push(st);t:for(;0<Y;){var St=Y-1>>>1,U=X[St];if(0<l(U,st))X[St]=st,X[Y]=U,Y=St;else break t}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var st=X[0],Y=X.pop();if(Y!==st){X[0]=Y;t:for(var St=0,U=X.length,J=U>>>1;St<J;){var yt=2*(St+1)-1,Tt=X[yt],H=yt+1,ot=X[H];if(0>l(Tt,Y))H<U&&0>l(ot,Tt)?(X[St]=ot,X[H]=Y,St=H):(X[St]=Tt,X[yt]=Y,St=yt);else if(H<U&&0>l(ot,Y))X[St]=ot,X[H]=Y,St=H;else break t}}return st}function l(X,st){var Y=X.sortIndex-st.sortIndex;return Y!==0?Y:X.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,S=null,x=3,M=!1,C=!1,D=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function E(X){for(var st=i(p);st!==null;){if(st.callback===null)s(p);else if(st.startTime<=X)s(p),st.sortIndex=st.expirationTime,t(m,st);else break;st=i(p)}}function L(X){if(D=!1,E(X),!C)if(i(m)!==null)C=!0,pt();else{var st=i(p);st!==null&&ht(L,st.startTime-X)}}var G=!1,I=-1,F=5,K=-1;function w(){return!(o.unstable_now()-K<F)}function R(){if(G){var X=o.unstable_now();K=X;var st=!0;try{t:{C=!1,D&&(D=!1,_(I),I=-1),M=!0;var Y=x;try{e:{for(E(X),S=i(m);S!==null&&!(S.expirationTime>X&&w());){var St=S.callback;if(typeof St=="function"){S.callback=null,x=S.priorityLevel;var U=St(S.expirationTime<=X);if(X=o.unstable_now(),typeof U=="function"){S.callback=U,E(X),st=!0;break e}S===i(m)&&s(m),E(X)}else s(m);S=i(m)}if(S!==null)st=!0;else{var J=i(p);J!==null&&ht(L,J.startTime-X),st=!1}}break t}finally{S=null,x=Y,M=!1}st=void 0}}finally{st?B():G=!1}}}var B;if(typeof P=="function")B=function(){P(R)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=R,B=function(){at.postMessage(null)}}else B=function(){y(R,0)};function pt(){G||(G=!0,B())}function ht(X,st){I=y(function(){X(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){C||M||(C=!0,pt())},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(X){switch(x){case 1:case 2:case 3:var st=3;break;default:st=x}var Y=x;x=st;try{return X()}finally{x=Y}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,st){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Y=x;x=X;try{return st()}finally{x=Y}},o.unstable_scheduleCallback=function(X,st,Y){var St=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,X){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,X={id:g++,callback:st,priorityLevel:X,startTime:Y,expirationTime:U,sortIndex:-1},Y>St?(X.sortIndex=Y,t(p,X),i(m)===null&&X===i(p)&&(D?(_(I),I=-1):D=!0,ht(L,Y-St))):(X.sortIndex=U,t(m,X),C||M||(C=!0,pt())),X},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(X){var st=x;return function(){var Y=x;x=st;try{return X.apply(this,arguments)}finally{x=Y}}}}(Of)),Of}var F_;function zS(){return F_||(F_=1,Nf.exports=PS()),Nf.exports}var Pf={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function BS(){if(I_)return En;I_=1;var o=ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},En.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},En.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},En.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},En.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},En.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},En.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},En.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},En.requestFormReset=function(m){s.d.r(m)},En.unstable_batchedUpdates=function(m,p){return m(p)},En.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},En.useFormStatus=function(){return h.H.useHostTransitionStatus()},En.version="19.0.0",En}var H_;function FS(){if(H_)return Pf.exports;H_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pf.exports=BS(),Pf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function IS(){if(G_)return Ao;G_=1;var o=zS(),t=ed(),i=FS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),E=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case D:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,B,ct;function at(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+ct}var pt=!1;function ht(e,n){if(!e||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var it=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){it=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var O=v.split(`
`),k=b.split(`
`);for(c=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(r===O.length||c===k.length)for(r=O.length-1,c=k.length-1;1<=r&&0<=c&&O[r]!==k[c];)c--;for(;1<=r&&0<=c;r--,c--)if(O[r]!==k[c]){if(r!==1||c!==1)do if(r--,c--,0>c||O[r]!==k[c]){var ut=`
`+O[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=c);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function X(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=ht(e.type,!1),e;case 11:return e=ht(e.type.render,!1),e;case 1:return e=ht(e.type,!0),e;default:return""}}function st(e){try{var n="";do n+=X(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Y(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function St(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(Y(e)!==e)throw Error(s(188))}function J(e){var n=e.alternate;if(!n){if(n=Y(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return U(c),e;if(f===r)return U(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,r=f;break}if(b===r){v=!0,r=c,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,r=c;break}if(b===r){v=!0,r=f,a=c;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function yt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=yt(e),n!==null)return n;e=e.sibling}return null}var Tt=Array.isArray,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},gt=[],bt=-1;function Rt(e){return{current:e}}function Kt(e){0>bt||(e.current=gt[bt],gt[bt]=null,bt--)}function Pt(e,n){bt++,gt[bt]=e.current,e.current=n}var Me=Rt(null),we=Rt(null),ie=Rt(null),z=Rt(null);function _n(e,n){switch(Pt(ie,n),Pt(we,e),Pt(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?l_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=l_(e),n=c_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(Me),Pt(Me,n)}function re(){Kt(Me),Kt(we),Kt(ie)}function fe(e){e.memoizedState!==null&&Pt(z,e);var n=Me.current,a=c_(n,e.type);n!==a&&(Pt(we,e),Pt(Me,a))}function kt(e){we.current===e&&(Kt(Me),Kt(we)),z.current===e&&(Kt(z),xo._currentValue=ot)}var Ce=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,N=o.unstable_cancelCallback,T=o.unstable_shouldYield,nt=o.unstable_requestPaint,ft=o.unstable_now,xt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,zt=o.unstable_LowPriority,me=o.unstable_IdlePriority,Et=o.log,Bt=o.unstable_setDisableYieldValue,qt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(qt,e,void 0,(e.current.flags&128)===128)}catch{}}function ae(e){if(typeof Et=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(qt,e)}catch{}}var jt=Math.clz32?Math.clz32:Lt,De=Math.log,W=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(De(e)/W|0)|0}var rt=128,_t=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,f=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~c,a!==0?r=wt(a):(f&=b,f!==0?r=wt(f):e||(v=b&~v,v!==0&&(r=wt(v))))):(b=a&~c,b!==0?r=wt(b):f!==0?r=wt(f):e||(v=a&~v,v!==0&&(r=wt(v)))),r===0?0:n!==0&&n!==r&&!(n&c)&&(c=r&-r,v=n&-n,c>=v||c===32&&(v&4194176)!==0)?n:r}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ge(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var e=rt;return rt<<=1,!(rt&4194176)&&(rt=128),e}function Ee(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function Rn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ho(e,n,a,r,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,O=e.expirationTimes,k=e.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-jt(a),vt=1<<ut;b[ut]=0,O[ut]=-1;var it=k[ut];if(it!==null)for(k[ut]=null,ut=0;ut<it.length;ut++){var lt=it[ut];lt!==null&&(lt.lane&=-536870913)}a&=~vt}r!==0&&Dr(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Dr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-jt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194218}function yi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-jt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Es(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ur(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:R_(e.type))}function Go(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Vn=Math.random().toString(36).slice(2),en="__reactFiber$"+Vn,nn="__reactProps$"+Vn,Pi="__reactContainer$"+Vn,Ts="__reactEvents$"+Vn,Rc="__reactListeners$"+Vn,wc="__reactHandles$"+Vn,Vo="__reactResources$"+Vn,Ga="__reactMarker$"+Vn;function Lr(e){delete e[en],delete e[nn],delete e[Ts],delete e[Rc],delete e[wc]}function zi(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=h_(e);e!==null;){if(a=e[en])return a;e=h_(e)}return n}e=a,a=e.parentNode}return null}function A(e){if(e=e[en]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function et(e){var n=e[Vo];return n||(n=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(e){e[Ga]=!0}var j=new Set,Mt={};function At(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(Mt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Yt={};function _e(e){return Ce.call(Yt,e)?!0:Ce.call(te,e)?!1:$t.test(e)?Yt[e]=!0:(te[e]=!0,!1)}function ge(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function He(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e){var n=Zt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){r=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=an(e))}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Zt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cn=/[\n"\\]/g;function un(e){return e.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(e,n,a,r,c,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?yn(e,v,ee(n)):a!=null?yn(e,v,ee(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ee(b):e.removeAttribute("name")}function Dn(e,n,a,r,c,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function yn(e,n,a){n==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function We(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function bs(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Tt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var w0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _d(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||w0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&_d(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&_d(e,f,n[f])}function Cc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Dc=null;function Uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function vd(e){var n=A(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ue(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[nn]||null;if(!c)throw Error(s(90));Ue(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&On(r)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&We(e,!!a.multiple,n,!1)}}}var Lc=!1;function Sd(e,n,a){if(Lc)return e(n,a);Lc=!0;try{var r=e(n);return r}finally{if(Lc=!1,(As!==null||Rs!==null)&&(Al(),As&&(n=As,e=Rs,Rs=As=null,vd(n),e)))for(n=0;n<e.length;n++)vd(e[n])}}function Nr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[nn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Nc=!1;if(Nt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Nc=!1}var la=null,Oc=null,Xo=null;function xd(){if(Xo)return Xo;var e,n=Oc,a=n.length,r,c="value"in la?la.value:la.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Xo=c.slice(e,1<r?1-r:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function yd(){return!1}function zn(e){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:yd,this.isPropagationStopped=yd,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=zn(Va),Pr=R({},Va,{view:0,detail:0}),U0=zn(Pr),Pc,zc,zr,jo=R({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Pc=e.screenX-zr.screenX,zc=e.screenY-zr.screenY):zc=Pc=0,zr=e),Pc)},movementY:function(e){return"movementY"in e?e.movementY:zc}}),Md=zn(jo),L0=R({},jo,{dataTransfer:0}),N0=zn(L0),O0=R({},Pr,{relatedTarget:0}),Bc=zn(O0),P0=R({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=zn(P0),B0=R({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=zn(B0),I0=R({},Va,{data:0}),Ed=zn(I0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=V0[e])?!!n[e]:!1}function Fc(){return k0}var X0=R({},Pr,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=zn(X0),q0=R({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=zn(q0),Y0=R({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),j0=zn(Y0),Z0=R({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=zn(Z0),Q0=R({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=zn(Q0),$0=R({},Va,{newState:0,oldState:0}),tv=zn($0),ev=[9,13,27,32],Ic=Nt&&"CompositionEvent"in window,Br=null;Nt&&"documentMode"in document&&(Br=document.documentMode);var nv=Nt&&"TextEvent"in window&&!Br,bd=Nt&&(!Ic||Br&&8<Br&&11>=Br),Ad=" ",Rd=!1;function wd(e,n){switch(e){case"keyup":return ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function iv(e,n){switch(e){case"compositionend":return Cd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return e=n.data,e===Ad&&Rd?null:e;default:return null}}function av(e,n){if(ws)return e==="compositionend"||!Ic&&wd(e,n)?(e=xd(),Xo=Oc=la=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sv[e.type]:n==="textarea"}function Ud(e,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Ul(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Fr=null,Ir=null;function rv(e){i_(e,0)}function Zo(e){var n=q(e);if(On(n))return e}function Ld(e,n){if(e==="change")return n}var Nd=!1;if(Nt){var Hc;if(Nt){var Gc="oninput"in document;if(!Gc){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Gc=typeof Od.oninput=="function"}Hc=Gc}else Hc=!1;Nd=Hc&&(!document.documentMode||9<document.documentMode)}function Pd(){Fr&&(Fr.detachEvent("onpropertychange",zd),Ir=Fr=null)}function zd(e){if(e.propertyName==="value"&&Zo(Ir)){var n=[];Ud(n,Ir,e,Uc(e)),Sd(rv,n)}}function ov(e,n,a){e==="focusin"?(Pd(),Fr=n,Ir=a,Fr.attachEvent("onpropertychange",zd)):e==="focusout"&&Pd()}function lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Ir)}function cv(e,n){if(e==="click")return Zo(n)}function uv(e,n){if(e==="input"||e==="change")return Zo(n)}function fv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:fv;function Hr(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ce.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=Bd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bd(a)}}function Id(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Id(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ui(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ui(e.document)}return n}function Vc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hv(e,n){var a=Hd(n);n=e.focusedElem;var r=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Id(n.ownerDocument.documentElement,n)){if(r!==null&&Vc(n)){if(e=r.start,a=r.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(r.start,c);r=r.end===void 0?f:Math.min(r.end,c),!a.extend&&f>r&&(c=r,r=f,f=c),c=Fd(n,f);var v=Fd(n,r);c&&v&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>r?(a.addRange(e),a.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var dv=Nt&&"documentMode"in document&&11>=document.documentMode,Cs=null,kc=null,Gr=null,Xc=!1;function Gd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cs==null||Cs!==ui(r)||(r=Cs,"selectionStart"in r&&Vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Hr(Gr,r)||(Gr=r,r=Ul(kc,"onSelect"),0<r.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Cs)))}function ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Wc={},Vd={};Nt&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Xa(e){if(Wc[e])return Wc[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return Wc[e]=n[a];return e}var kd=Xa("animationend"),Xd=Xa("animationiteration"),Wd=Xa("animationstart"),pv=Xa("transitionrun"),mv=Xa("transitionstart"),_v=Xa("transitioncancel"),qd=Xa("transitionend"),Yd=new Map,jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function fi(e,n){Yd.set(e,n),At(n,[e])}var Jn=[],Us=0,qc=0;function Ko(){for(var e=Us,n=qc=Us=0;n<e;){var a=Jn[n];Jn[n++]=null;var r=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&Zd(a,c,f)}}function Qo(e,n,a,r){Jn[Us++]=e,Jn[Us++]=n,Jn[Us++]=a,Jn[Us++]=r,qc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Yc(e,n,a,r){return Qo(e,n,a,r),Jo(e)}function ca(e,n){return Qo(e,null,null,n),Jo(e)}function Zd(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-jt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Jo(e){if(50<ho)throw ho=0,$u=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ls={},Kd=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Kd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:st(n)},Kd.set(e,n),n)}return{value:e,source:n,stack:st(n)}}var Ns=[],Os=0,$o=null,tl=0,ti=[],ei=0,Wa=null,Bi=1,Fi="";function qa(e,n){Ns[Os++]=tl,Ns[Os++]=$o,$o=e,tl=n}function Qd(e,n,a){ti[ei++]=Bi,ti[ei++]=Fi,ti[ei++]=Wa,Wa=e;var r=Bi;e=Fi;var c=32-jt(r)-1;r&=~(1<<c),a+=1;var f=32-jt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Bi=1<<32-jt(n)+c|a<<c|r,Fi=f+e}else Bi=1<<f|a<<c|r,Fi=e}function jc(e){e.return!==null&&(qa(e,1),Qd(e,1,0))}function Zc(e){for(;e===$o;)$o=Ns[--Os],Ns[Os]=null,tl=Ns[--Os],Ns[Os]=null;for(;e===Wa;)Wa=ti[--ei],ti[ei]=null,Fi=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null}var Un=null,vn=null,be=!1,hi=null,Mi=!1,Kc=Error(s(519));function Ya(e){var n=Error(s(418,""));throw Xr($n(n,e)),Kc}function Jd(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[en]=e,n[nn]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)Se(mo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ve(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),bs(n,r.value,r.defaultValue,r.children),ve(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||o_(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Ya(e)}function $d(e){for(Un=e.return;Un;)switch(Un.tag){case 3:case 27:Mi=!0;return;case 5:case 13:Mi=!1;return;default:Un=Un.return}}function Vr(e){if(e!==Un)return!1;if(!be)return $d(e),be=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&vn&&Ya(e),$d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){vn=pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}vn=null}}else vn=Un?pi(e.stateNode.nextSibling):null;return!0}function kr(){vn=Un=null,be=!1}function Xr(e){hi===null?hi=[e]:hi.push(e)}var Wr=Error(s(460)),tp=Error(s(474)),Qc={then:function(){}};function ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function el(){}function np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(el,el),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Wr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(el,el);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Wr?Error(s(483)):e}throw qr=n,Wr}}var qr=null;function ip(){if(qr===null)throw Error(s(459));var e=qr;return qr=null,e}var Ps=null,Yr=0;function nl(e){var n=Yr;return Yr+=1,Ps===null&&(Ps=[]),np(Ps,e,n)}function jr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function il(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ap(e){var n=e._init;return n(e._payload)}function sp(e){function n(Z,V){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[V],Z.flags|=16):tt.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function r(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=ya(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<V?(Z.flags|=33554434,V):tt):(Z.flags|=33554434,V)):(Z.flags|=1048576,V)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=33554434),Z}function b(Z,V,tt,mt){return V===null||V.tag!==6?(V=Wu(tt,Z.mode,mt),V.return=Z,V):(V=c(V,tt),V.return=Z,V)}function O(Z,V,tt,mt){var It=tt.type;return It===m?ut(Z,V,tt.props.children,mt,tt.key):V!==null&&(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&ap(It)===V.type)?(V=c(V,tt.props),jr(V,tt),V.return=Z,V):(V=yl(tt.type,tt.key,tt.props,null,Z.mode,mt),jr(V,tt),V.return=Z,V)}function k(Z,V,tt,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=qu(tt,Z.mode,mt),V.return=Z,V):(V=c(V,tt.children||[]),V.return=Z,V)}function ut(Z,V,tt,mt,It){return V===null||V.tag!==7?(V=is(tt,Z.mode,mt,It),V.return=Z,V):(V=c(V,tt),V.return=Z,V)}function vt(Z,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Wu(""+V,Z.mode,tt),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case h:return tt=yl(V.type,V.key,V.props,null,Z.mode,tt),jr(tt,V),tt.return=Z,tt;case d:return V=qu(V,Z.mode,tt),V.return=Z,V;case P:var mt=V._init;return V=mt(V._payload),vt(Z,V,tt)}if(Tt(V)||I(V))return V=is(V,Z.mode,tt,null),V.return=Z,V;if(typeof V.then=="function")return vt(Z,nl(V),tt);if(V.$$typeof===M)return vt(Z,vl(Z,V),tt);il(Z,V)}return null}function it(Z,V,tt,mt){var It=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return It!==null?null:b(Z,V,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case h:return tt.key===It?O(Z,V,tt,mt):null;case d:return tt.key===It?k(Z,V,tt,mt):null;case P:return It=tt._init,tt=It(tt._payload),it(Z,V,tt,mt)}if(Tt(tt)||I(tt))return It!==null?null:ut(Z,V,tt,mt,null);if(typeof tt.then=="function")return it(Z,V,nl(tt),mt);if(tt.$$typeof===M)return it(Z,V,vl(Z,tt),mt);il(Z,tt)}return null}function lt(Z,V,tt,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(tt)||null,b(V,Z,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return Z=Z.get(mt.key===null?tt:mt.key)||null,O(V,Z,mt,It);case d:return Z=Z.get(mt.key===null?tt:mt.key)||null,k(V,Z,mt,It);case P:var he=mt._init;return mt=he(mt._payload),lt(Z,V,tt,mt,It)}if(Tt(mt)||I(mt))return Z=Z.get(tt)||null,ut(V,Z,mt,It,null);if(typeof mt.then=="function")return lt(Z,V,tt,nl(mt),It);if(mt.$$typeof===M)return lt(Z,V,tt,vl(V,mt),It);il(V,mt)}return null}function Vt(Z,V,tt,mt){for(var It=null,he=null,Wt=V,Qt=V=0,dn=null;Wt!==null&&Qt<tt.length;Qt++){Wt.index>Qt?(dn=Wt,Wt=null):dn=Wt.sibling;var Ae=it(Z,Wt,tt[Qt],mt);if(Ae===null){Wt===null&&(Wt=dn);break}e&&Wt&&Ae.alternate===null&&n(Z,Wt),V=f(Ae,V,Qt),he===null?It=Ae:he.sibling=Ae,he=Ae,Wt=dn}if(Qt===tt.length)return a(Z,Wt),be&&qa(Z,Qt),It;if(Wt===null){for(;Qt<tt.length;Qt++)Wt=vt(Z,tt[Qt],mt),Wt!==null&&(V=f(Wt,V,Qt),he===null?It=Wt:he.sibling=Wt,he=Wt);return be&&qa(Z,Qt),It}for(Wt=r(Wt);Qt<tt.length;Qt++)dn=lt(Wt,Z,Qt,tt[Qt],mt),dn!==null&&(e&&dn.alternate!==null&&Wt.delete(dn.key===null?Qt:dn.key),V=f(dn,V,Qt),he===null?It=dn:he.sibling=dn,he=dn);return e&&Wt.forEach(function(wa){return n(Z,wa)}),be&&qa(Z,Qt),It}function ne(Z,V,tt,mt){if(tt==null)throw Error(s(151));for(var It=null,he=null,Wt=V,Qt=V=0,dn=null,Ae=tt.next();Wt!==null&&!Ae.done;Qt++,Ae=tt.next()){Wt.index>Qt?(dn=Wt,Wt=null):dn=Wt.sibling;var wa=it(Z,Wt,Ae.value,mt);if(wa===null){Wt===null&&(Wt=dn);break}e&&Wt&&wa.alternate===null&&n(Z,Wt),V=f(wa,V,Qt),he===null?It=wa:he.sibling=wa,he=wa,Wt=dn}if(Ae.done)return a(Z,Wt),be&&qa(Z,Qt),It;if(Wt===null){for(;!Ae.done;Qt++,Ae=tt.next())Ae=vt(Z,Ae.value,mt),Ae!==null&&(V=f(Ae,V,Qt),he===null?It=Ae:he.sibling=Ae,he=Ae);return be&&qa(Z,Qt),It}for(Wt=r(Wt);!Ae.done;Qt++,Ae=tt.next())Ae=lt(Wt,Z,Qt,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&Wt.delete(Ae.key===null?Qt:Ae.key),V=f(Ae,V,Qt),he===null?It=Ae:he.sibling=Ae,he=Ae);return e&&Wt.forEach(function(DS){return n(Z,DS)}),be&&qa(Z,Qt),It}function je(Z,V,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===m&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case h:t:{for(var It=tt.key;V!==null;){if(V.key===It){if(It=tt.type,It===m){if(V.tag===7){a(Z,V.sibling),mt=c(V,tt.props.children),mt.return=Z,Z=mt;break t}}else if(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&ap(It)===V.type){a(Z,V.sibling),mt=c(V,tt.props),jr(mt,tt),mt.return=Z,Z=mt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}tt.type===m?(mt=is(tt.props.children,Z.mode,mt,tt.key),mt.return=Z,Z=mt):(mt=yl(tt.type,tt.key,tt.props,null,Z.mode,mt),jr(mt,tt),mt.return=Z,Z=mt)}return v(Z);case d:t:{for(It=tt.key;V!==null;){if(V.key===It)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(Z,V.sibling),mt=c(V,tt.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}mt=qu(tt,Z.mode,mt),mt.return=Z,Z=mt}return v(Z);case P:return It=tt._init,tt=It(tt._payload),je(Z,V,tt,mt)}if(Tt(tt))return Vt(Z,V,tt,mt);if(I(tt)){if(It=I(tt),typeof It!="function")throw Error(s(150));return tt=It.call(tt),ne(Z,V,tt,mt)}if(typeof tt.then=="function")return je(Z,V,nl(tt),mt);if(tt.$$typeof===M)return je(Z,V,vl(Z,tt),mt);il(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(Z,V.sibling),mt=c(V,tt),mt.return=Z,Z=mt):(a(Z,V),mt=Wu(tt,Z.mode,mt),mt.return=Z,Z=mt),v(Z)):a(Z,V)}return function(Z,V,tt,mt){try{Yr=0;var It=je(Z,V,tt,mt);return Ps=null,It}catch(Wt){if(Wt===Wr)throw Wt;var he=si(29,Wt,null,Z.mode);return he.lanes=mt,he.return=Z,he}finally{}}}var ja=sp(!0),rp=sp(!1),zs=Rt(null),al=Rt(0);function op(e,n){e=Zi,Pt(al,e),Pt(zs,n),Zi=e|n.baseLanes}function Jc(){Pt(al,Zi),Pt(zs,zs.current)}function $c(){Zi=al.current,Kt(zs),Kt(al)}var ni=Rt(null),Ei=null;function ua(e){var n=e.alternate;Pt(sn,sn.current&1),Pt(ni,e),Ei===null&&(n===null||zs.current!==null||n.memoizedState!==null)&&(Ei=e)}function lp(e){if(e.tag===22){if(Pt(sn,sn.current),Pt(ni,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else fa()}function fa(){Pt(sn,sn.current),Pt(ni,ni.current)}function Ii(e){Kt(ni),Ei===e&&(Ei=null),Kt(sn)}var sn=Rt(0);function sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vv=o.unstable_scheduleCallback,Sv=o.unstable_NormalPriority,rn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new gv,data:new Map,refCount:0}}function Zr(e){e.refCount--,e.refCount===0&&vv(Sv,function(){e.controller.abort()})}var Kr=null,eu=0,Bs=0,Fs=null;function xv(e,n){if(Kr===null){var a=Kr=[];eu=0,Bs=lf(),Fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return eu++,n.then(cp,cp),n}function cp(){if(--eu===0&&Kr!==null){Fs!==null&&(Fs.status="fulfilled");var e=Kr;Kr=null,Bs=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var up=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xv(e,n),up!==null&&up(e,n)};var Za=Rt(null);function nu(){var e=Za.current;return e!==null?e:Fe.pooledCache}function rl(e,n){n===null?Pt(Za,Za.current):Pt(Za,n.pool)}function fp(){var e=nu();return e===null?null:{parent:rn._currentValue,pool:e}}var ha=0,ue=null,Le=null,Ke=null,ol=!1,Is=!1,Ka=!1,ll=0,Qr=0,Hs=null,Mv=0;function Ze(){throw Error(s(321))}function iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function au(e,n,a,r,c,f){return ha=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?Qa:da,Ka=!1,f=a(r,c),Ka=!1,Is&&(f=dp(n,a,r,c)),hp(e),f}function hp(e){w.H=Ti;var n=Le!==null&&Le.next!==null;if(ha=0,Ke=Le=ue=null,ol=!1,Qr=0,Hs=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&gl(e)&&(fn=!0))}function dp(e,n,a,r){ue=e;var c=0;do{if(Is&&(Hs=null),Qr=0,Is=!1,25<=c)throw Error(s(301));if(c+=1,Ke=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=Ja,f=n(a,r)}while(Is);return f}function Ev(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?Jr(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),n}function su(){var e=ll!==0;return ll=0,e}function ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ou(e){if(ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ol=!1}ha=0,Ke=Le=ue=null,Is=!1,Qr=ll=0,Hs=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ue.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Ke===null?ue.memoizedState:Ke.next;if(n!==null)Ke=n,Le=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ke===null?ue.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}var cl;cl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jr(e){var n=Qr;return Qr+=1,Hs===null&&(Hs=[]),e=np(Hs,e,n),n=ue,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Qa:da),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===M)return Mn(e)}throw Error(s(438,String(e)))}function lu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=L;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=Qe();return cu(n,Le,e)}function cu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=v=null,O=null,k=n,ut=!1;do{var vt=k.lane&-536870913;if(vt!==k.lane?(xe&vt)===vt:(ha&vt)===vt){var it=k.revertLane;if(it===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),vt===Bs&&(ut=!0);else if((ha&it)===it){k=k.next,it===Bs&&(ut=!0);continue}else vt={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},O===null?(b=O=vt,v=f):O=O.next=vt,ue.lanes|=it,Ma|=it;vt=k.action,Ka&&a(f,vt),f=k.hasEagerState?k.eagerState:a(f,vt)}else it={lane:vt,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},O===null?(b=O=it,v=f):O=O.next=it,ue.lanes|=vt,Ma|=vt;k=k.next}while(k!==null&&k!==n);if(O===null?v=f:O.next=b,!kn(f,e.memoizedState)&&(fn=!0,ut&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=O,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function uu(e){var n=Qe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function pp(e,n,a){var r=ue,c=Qe(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!kn((Le||c).memoizedState,a);if(v&&(c.memoizedState=a,fn=!0),c=c.queue,du(gp.bind(null,r,c,e),[e]),c.getSnapshot!==n||v||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,Gs(9,_p.bind(null,r,c,a,n),{destroy:void 0},null),Fe===null)throw Error(s(349));f||ha&60||mp(r,n,a)}return a}function mp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=cl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _p(e,n,a,r){n.value=a,n.getSnapshot=r,vp(n)&&Sp(e)}function gp(e,n,a){return a(function(){vp(n)&&Sp(e)})}function vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Sp(e){var n=ca(e,2);n!==null&&Ln(n,e,2)}function fu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Ka){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function xp(e,n,a,r){return e.baseState=a,cu(e,Le,typeof r=="function"?r:Hi)}function Tv(e,n,a,r,c){if(pl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};w.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function yp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=w.T,v={};w.T=v;try{var b=a(c,r),O=w.S;O!==null&&O(v,b),Mp(e,n,b)}catch(k){hu(e,n,k)}finally{w.T=f}}else try{f=a(c,r),Mp(e,n,f)}catch(k){hu(e,n,k)}}function Mp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Ep(e,n,r)},function(r){return hu(e,n,r)}):Ep(e,n,a)}function Ep(e,n,a){n.status="fulfilled",n.value=a,Tp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,yp(e,a)))}function hu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Tp(n),n=n.next;while(n!==r)}e.action=null}function Tp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function bp(e,n){return n}function Ap(e,n){if(be){var a=Fe.formState;if(a!==null){t:{var r=ue;if(be){if(vn){e:{for(var c=vn,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=pi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){vn=pi(c.nextSibling),r=c.data==="F!";break t}}Ya(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bp,lastRenderedState:n},a.queue=r,a=Xp.bind(null,ue,r),r.dispatch=a,r=fu(!1),f=vu.bind(null,ue,!1,r.queue),r=Bn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Tv.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Rp(e){var n=Qe();return wp(n,Le,e)}function wp(e,n,a){n=cu(e,n,bp)[0],e=fl(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Jr(n):n;var r=Qe(),c=r.queue,f=c.dispatch;return a!==r.memoizedState&&(ue.flags|=2048,Gs(9,bv.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function bv(e,n){e.action=n}function Cp(e){var n=Qe(),a=Le;if(a!==null)return wp(n,a,e);Qe(),n=n.memoizedState,a=Qe();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Gs(e,n,a,r){return e={tag:e,create:n,inst:a,deps:r,next:null},n=ue.updateQueue,n===null&&(n=cl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Dp(){return Qe().memoizedState}function hl(e,n,a,r){var c=Bn();ue.flags|=e,c.memoizedState=Gs(1|n,a,{destroy:void 0},r===void 0?null:r)}function dl(e,n,a,r){var c=Qe();r=r===void 0?null:r;var f=c.memoizedState.inst;Le!==null&&r!==null&&iu(r,Le.memoizedState.deps)?c.memoizedState=Gs(n,a,f,r):(ue.flags|=e,c.memoizedState=Gs(1|n,a,f,r))}function Up(e,n){hl(8390656,8,e,n)}function du(e,n){dl(2048,8,e,n)}function Lp(e,n){return dl(4,2,e,n)}function Np(e,n){return dl(4,4,e,n)}function Op(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pp(e,n,a){a=a!=null?a.concat([e]):null,dl(4,4,Op.bind(null,n,e),a)}function pu(){}function zp(e,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&iu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Bp(e,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&iu(n,r[1]))return r[0];if(r=e(),Ka){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[r,n],r}function mu(e,n,a){return a===void 0||ha&1073741824?e.memoizedState=n:(e.memoizedState=a,e=Im(),ue.lanes|=e,Ma|=e,a)}function Fp(e,n,a,r){return kn(a,n)?a:zs.current!==null?(e=mu(e,a,r),kn(e,n)||(fn=!0),e):ha&42?(e=Im(),ue.lanes|=e,Ma|=e,n):(fn=!0,e.memoizedState=a)}function Ip(e,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var v=w.T,b={};w.T=b,vu(e,!1,n,a);try{var O=c(),k=w.S;if(k!==null&&k(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=yv(O,r);$r(e,n,ut,Yn(e))}else $r(e,n,r,Yn(e))}catch(vt){$r(e,n,{then:function(){},status:"rejected",reason:vt},Yn())}finally{H.p=f,w.T=v}}function Av(){}function _u(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Hp(e).queue;Ip(e,c,n,ot,a===null?Av:function(){return Gp(e),a(r)})}function Hp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gp(e){var n=Hp(e).next.queue;$r(e,n,{},Yn())}function gu(){return Mn(xo)}function Vp(){return Qe().memoizedState}function kp(){return Qe().memoizedState}function Rv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();e=_a(a);var r=ga(n,e,a);r!==null&&(Ln(r,n,a),no(r,n,a)),n={cache:tu()},e.payload=n;return}n=n.return}}function wv(e,n,a){var r=Yn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(e)?Wp(n,a):(a=Yc(e,n,a,r),a!==null&&(Ln(a,e,r),qp(a,n,r)))}function Xp(e,n,a){var r=Yn();$r(e,n,a,r)}function $r(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(e))Wp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(c.hasEagerState=!0,c.eagerState=b,kn(b,v))return Qo(e,n,c,0),Fe===null&&Ko(),!1}catch{}finally{}if(a=Yc(e,n,c,r),a!==null)return Ln(a,e,r),qp(a,n,r),!0}return!1}function vu(e,n,a,r){if(r={lane:2,revertLane:lf(),action:r,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(n)throw Error(s(479))}else n=Yc(e,a,r,2),n!==null&&Ln(n,e,2)}function pl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Wp(e,n){Is=ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function qp(e,n,a){if(a&4194176){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,yi(e,a)}}var Ti={readContext:Mn,use:ul,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};Ti.useCacheRefresh=Ze,Ti.useMemoCache=Ze,Ti.useHostTransitionStatus=Ze,Ti.useFormState=Ze,Ti.useActionState=Ze,Ti.useOptimistic=Ze;var Qa={readContext:Mn,use:ul,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Up,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,hl(4194308,4,Op.bind(null,n,e),a)},useLayoutEffect:function(e,n){return hl(4194308,4,e,n)},useInsertionEffect:function(e,n){hl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(Ka){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var c=a(n);if(Ka){ae(!0);try{a(n)}finally{ae(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=wv.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=fu(e);var n=e.queue,a=Xp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pu,useDeferredValue:function(e,n){var a=Bn();return mu(a,e,n)},useTransition:function(){var e=fu(!1);return e=Ip.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ue,c=Bn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Fe===null)throw Error(s(349));xe&60||mp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Up(gp.bind(null,r,f,e),[e]),r.flags|=2048,Gs(9,_p.bind(null,r,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Bn(),n=Fe.identifierPrefix;if(be){var a=Fi,r=Bi;a=(r&~(1<<32-jt(r)-1)).toString(32)+a,n=":"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Mv++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Bn().memoizedState=Rv.bind(null,ue)}};Qa.useMemoCache=lu,Qa.useHostTransitionStatus=gu,Qa.useFormState=Ap,Qa.useActionState=Ap,Qa.useOptimistic=function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vu.bind(null,ue,!0,a),a.dispatch=n,[e,n]};var da={readContext:Mn,use:ul,useCallback:zp,useContext:Mn,useEffect:du,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Bp,useReducer:fl,useRef:Dp,useState:function(){return fl(Hi)},useDebugValue:pu,useDeferredValue:function(e,n){var a=Qe();return Fp(a,Le.memoizedState,e,n)},useTransition:function(){var e=fl(Hi)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:pp,useId:Vp};da.useCacheRefresh=kp,da.useMemoCache=lu,da.useHostTransitionStatus=gu,da.useFormState=Rp,da.useActionState=Rp,da.useOptimistic=function(e,n){var a=Qe();return xp(a,Le,e,n)};var Ja={readContext:Mn,use:ul,useCallback:zp,useContext:Mn,useEffect:du,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Bp,useReducer:uu,useRef:Dp,useState:function(){return uu(Hi)},useDebugValue:pu,useDeferredValue:function(e,n){var a=Qe();return Le===null?mu(a,e,n):Fp(a,Le.memoizedState,e,n)},useTransition:function(){var e=uu(Hi)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:pp,useId:Vp};Ja.useCacheRefresh=kp,Ja.useMemoCache=lu,Ja.useHostTransitionStatus=gu,Ja.useFormState=Cp,Ja.useActionState=Cp,Ja.useOptimistic=function(e,n){var a=Qe();return Le!==null?xp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Su(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:R({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xu={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Yn(),c=_a(r);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,r),n!==null&&(Ln(n,e,r),no(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Yn(),c=_a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,r),n!==null&&(Ln(n,e,r),no(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ga(e,r,a),n!==null&&(Ln(n,e,a),no(n,e,a))}};function Yp(e,n,a,r,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function jp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&xu.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=R({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zp(e){ml(e)}function Kp(e){console.error(e)}function Qp(e){ml(e)}function _l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Jp(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(e,n)},a}function $p(e){return e=_a(e),e.tag=3,e}function tm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Jp(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Jp(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Cv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ei===null?nf():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Qc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),sf(e,r,c)),!1;case 22:return a.flags|=65536,r===Qc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),sf(e,r,c)),!1}throw Error(s(435,a.tag))}return sf(e,r,c),nf(),!1}if(be)return n=ni.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Kc&&(e=Error(s(422),{cause:r}),Xr($n(e,a)))):(r!==Kc&&(n=Error(s(423),{cause:r}),Xr($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=$n(r,a),c=yu(e.stateNode,r,c),zu(e,c),Ye!==4&&(Ye=2)),!1;var f=Error(s(520),{cause:r});if(f=$n(f,a),uo===null?uo=[f]:uo.push(f),Ye!==4&&(Ye=2),n===null)return!0;r=$n(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=yu(a.stateNode,r,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=$p(c),tm(c,e,a,r),zu(a,c),!1}a=a.return}while(a!==null);return!1}var em=Error(s(461)),fn=!1;function Sn(e,n,a,r){n.child=e===null?rp(n,null,a,r):ja(n,e.child,a,r)}function nm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return es(n),r=au(e,n,a,v,f,c),b=su(),e!==null&&!fn?(ru(e,n,c),Gi(e,n,c)):(be&&b&&jc(n),n.flags|=1,Sn(e,n,r,c),n.child)}function im(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,am(e,n,f,r,c)):(e=yl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Du(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(v,r)&&e.ref===n.ref)return Gi(e,n,c)}return n.flags|=1,e=ya(f,r),e.ref=n.ref,e.return=n,n.child=e}function am(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Hr(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Du(e,c))e.flags&131072&&(fn=!0);else return n.lanes=e.lanes,Gi(e,n,c)}return Mu(e,n,a,r,c)}function sm(e,n,a){var r=n.pendingProps,c=r.children,f=(n.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(to(e,n),r.mode==="hidden"||f){if(n.flags&128){if(r=v!==null?v.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return rm(e,n,r,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,v!==null?v.cachePool:null),v!==null?op(n,v):Jc(),lp(n);else return n.lanes=n.childLanes=536870912,rm(e,n,v!==null?v.baseLanes|a:a,a)}else v!==null?(rl(n,v.cachePool),op(n,v),fa(),n.memoizedState=null):(e!==null&&rl(n,null),Jc(),fa());return Sn(e,n,c,a),n.child}function rm(e,n,a,r){var c=nu();return c=c===null?null:{parent:rn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&rl(n,null),Jc(),lp(n),e!==null&&eo(e,n,r,!0),null}function to(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Mu(e,n,a,r,c){return es(n),a=au(e,n,a,r,void 0,c),r=su(),e!==null&&!fn?(ru(e,n,c),Gi(e,n,c)):(be&&r&&jc(n),n.flags|=1,Sn(e,n,a,c),n.child)}function om(e,n,a,r,c,f){return es(n),n.updateQueue=null,a=dp(n,r,a,c),hp(e),r=su(),e!==null&&!fn?(ru(e,n,f),Gi(e,n,f)):(be&&r&&jc(n),n.flags|=1,Sn(e,n,a,f),n.child)}function lm(e,n,a,r,c){if(es(n),n.stateNode===null){var f=Ls,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ou(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):Ls,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Su(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&xu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,O=$a(a,b);f.props=O;var k=f.context,ut=a.contextType;v=Ls,typeof ut=="object"&&ut!==null&&(v=Mn(ut));var vt=a.getDerivedStateFromProps;ut=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||k!==v)&&jp(n,f,r,v),ma=!1;var it=n.memoizedState;f.state=it,ao(n,r,f,c),io(),k=n.memoizedState,b||it!==k||ma?(typeof vt=="function"&&(Su(n,a,vt,r),k=n.memoizedState),(O=ma||Yp(n,a,O,r,it,k,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=k),f.props=r,f.state=k,f.context=v,r=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pu(e,n),v=n.memoizedProps,ut=$a(a,v),f.props=ut,vt=n.pendingProps,it=f.context,k=a.contextType,O=Ls,typeof k=="object"&&k!==null&&(O=Mn(k)),b=a.getDerivedStateFromProps,(k=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||it!==O)&&jp(n,f,r,O),ma=!1,it=n.memoizedState,f.state=it,ao(n,r,f,c),io();var lt=n.memoizedState;v!==vt||it!==lt||ma||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof b=="function"&&(Su(n,a,b,r),lt=n.memoizedState),(ut=ma||Yp(n,a,ut,r,it,lt,O)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=O,r=ut):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,to(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ja(n,e.child,null,c),n.child=ja(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Gi(e,n,c),e}function cm(e,n,a,r){return kr(),n.flags|=256,Sn(e,n,a,r),n.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:fp()}}function bu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function um(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?ua(n):fa(),be){var b=vn,O;if(O=b){t:{for(O=b,b=Mi;O.nodeType!==8;){if(!b){b=null;break t}if(O=pi(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(n.memoizedState={dehydrated:b,treeContext:Wa!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912},O=si(18,null,null,0),O.stateNode=b,O.return=n,n.child=O,Un=n,vn=null,O=!0):O=!1}O||Ya(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ii(n)}return b=r.children,r=r.fallback,c?(fa(),c=n.mode,b=Ru({mode:"hidden",children:b},c),r=is(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Tu(a),c.childLanes=bu(e,v,a),n.memoizedState=Eu,r):(ua(n),Au(n,b))}if(O=e.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=wu(e,n,a)):n.memoizedState!==null?(fa(),n.child=e.child,n.flags|=128,n=null):(fa(),c=r.fallback,b=n.mode,r=Ru({mode:"visible",children:r.children},b),c=is(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,ja(n,e.child,null,a),r=n.child,r.memoizedState=Tu(a),r.childLanes=bu(e,v,a),n.memoizedState=Eu,n=c);else if(ua(n),b.data==="$!"){if(v=b.nextSibling&&b.nextSibling.dataset,v)var k=v.dgst;v=k,r=Error(s(419)),r.stack="",r.digest=v,Xr({value:r,source:null,stack:null}),n=wu(e,n,a)}else if(fn||eo(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=Fe,v!==null){if(r=a&-a,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=r&(v.suspendedLanes|a)?0:r,r!==0&&r!==O.retryLane)throw O.retryLane=r,ca(e,r),Ln(v,e,r),em}b.data==="$?"||nf(),n=wu(e,n,a)}else b.data==="$?"?(n.flags|=128,n.child=e.child,n=Xv.bind(null,e),b._reactRetry=n,n=null):(e=O.treeContext,vn=pi(b.nextSibling),Un=n,be=!0,hi=null,Mi=!1,e!==null&&(ti[ei++]=Bi,ti[ei++]=Fi,ti[ei++]=Wa,Bi=e.id,Fi=e.overflow,Wa=n),n=Au(n,r.children),n.flags|=4096);return n}return c?(fa(),c=r.fallback,b=n.mode,O=e.child,k=O.sibling,r=ya(O,{mode:"hidden",children:r.children}),r.subtreeFlags=O.subtreeFlags&31457280,k!==null?c=ya(k,c):(c=is(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Tu(a):(O=b.cachePool,O!==null?(k=rn._currentValue,O=O.parent!==k?{parent:k,pool:k}:O):O=fp(),b={baseLanes:b.baseLanes|a,cachePool:O}),c.memoizedState=b,c.childLanes=bu(e,v,a),n.memoizedState=Eu,r):(ua(n),a=e.child,e=a.sibling,a=ya(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Au(e,n){return n=Ru({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ru(e,n){return zm(e,n,0,null)}function wu(e,n,a){return ja(n,e.child,null,a),e=Au(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Lu(e.return,n,a)}function Cu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function hm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(Sn(e,n,r.children,a),r=sn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,a,n);else if(e.tag===19)fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Pt(sn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&sl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Cu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&sl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Cu(n,!0,a,null,f);break;case"together":Cu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,!(a&n.childLanes))if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ya(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ya(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Du(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Dv(e,n,a){switch(n.tag){case 3:_n(n,n.stateNode.containerInfo),pa(n,rn,e.memoizedState.cache),kr();break;case 27:case 5:fe(n);break;case 4:_n(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ua(n),n.flags|=128,null):a&n.child.childLanes?um(e,n,a):(ua(n),e=Gi(e,n,a),e!==null?e.sibling:null);ua(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(eo(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return hm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(sn,sn.current),r)break;return null;case 22:case 23:return n.lanes=0,sm(e,n,a);case 24:pa(n,rn,e.memoizedState.cache)}return Gi(e,n,a)}function dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Du(e,a)&&!(n.flags&128))return fn=!1,Dv(e,n,a);fn=!!(e.flags&131072)}else fn=!1,be&&n.flags&1048576&&Qd(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")Xu(r)?(e=$a(r,e),n.tag=1,n=lm(null,n,r,e,a)):(n.tag=0,n=Mu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===C){n.tag=11,n=nm(null,n,r,e,a);break t}else if(c===_){n.tag=14,n=im(null,n,r,e,a);break t}}throw n=K(r)||r,Error(s(306,n,""))}}return n;case 0:return Mu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=$a(r,n.pendingProps),lm(e,n,r,c,a);case 3:t:{if(_n(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,r=c.element,Pu(e,n),ao(n,f,null,a);var v=n.memoizedState;if(f=v.cache,pa(n,rn,f),f!==c.cache&&Nu(n,[rn],a,!0),io(),f=v.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=cm(e,n,f,a);break t}else if(f!==r){r=$n(Error(s(424)),n),Xr(r),n=cm(e,n,f,a);break t}else for(vn=pi(n.stateNode.containerInfo.firstChild),Un=n,be=!0,hi=null,Mi=!0,a=rp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(kr(),f===r){n=Gi(e,n,a);break t}Sn(e,n,f,a)}n=n.child}return n;case 26:return to(e,n),e===null?(a=__(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,r=Nl(ie.current).createElement(a),r[en]=n,r[nn]=e,xn(r,a,e),$(r),n.stateNode=r):n.memoizedState=__(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return fe(n),e===null&&be&&(r=n.stateNode=d_(n.type,n.pendingProps,ie.current),Un=n,Mi=!0,vn=pi(r.firstChild)),r=n.pendingProps.children,e!==null||be?Sn(e,n,r,a):n.child=ja(n,null,r,a),to(e,n),n.child;case 5:return e===null&&be&&((c=r=vn)&&(r=rS(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,Un=n,vn=pi(r.firstChild),Mi=!1,c=!0):c=!1),c||Ya(n)),fe(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,gf(c,f)?r=null:v!==null&&gf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=au(e,n,Ev,null,null,a),xo._currentValue=c),to(e,n),Sn(e,n,r,a),n.child;case 6:return e===null&&be&&((e=a=vn)&&(a=oS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,vn=null,e=!0):e=!1),e||Ya(n)),null;case 13:return um(e,n,a);case 4:return _n(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ja(n,null,r,a):Sn(e,n,r,a),n.child;case 11:return nm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),Sn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,es(n),c=Mn(c),r=r(c),n.flags|=1,Sn(e,n,r,a),n.child;case 14:return im(e,n,n.type,n.pendingProps,a);case 15:return am(e,n,n.type,n.pendingProps,a);case 19:return hm(e,n,a);case 22:return sm(e,n,a);case 24:return es(n),r=Mn(rn),e===null?(c=nu(),c===null&&(c=Fe,f=tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Ou(n),pa(n,rn,c)):(e.lanes&a&&(Pu(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,rn,r)):(r=f.cache,pa(n,rn,r),r!==c.cache&&Nu(n,[rn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Uu=Rt(null),ts=null,Vi=null;function pa(e,n,a){Pt(Uu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Uu.current,Kt(Uu)}function Lu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var O=0;O<n.length;O++)if(b.context===n[O]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Lu(f.return,a,e),r||(v=null);break t}f=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Lu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function eo(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=c.type;kn(c.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(c===z.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&Nu(n,e,a,r),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){ts=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return pm(ts,e)}function vl(e,n){return ts===null&&es(e),pm(e,n)}function pm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var ma=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Jo(e),Zd(e,null,a),n}return Qo(e,r,n,a),Jo(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,yi(e,a)}}function zu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function io(){if(Bu){var e=Fs;if(e!==null)throw e}}function ao(e,n,a,r){Bu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var O=b,k=O.next;O.next=null,v===null?f=k:v.next=k,v=O;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==v&&(b===null?ut.firstBaseUpdate=k:b.next=k,ut.lastBaseUpdate=O))}if(f!==null){var vt=c.baseState;v=0,ut=k=O=null,b=f;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(xe&it)===it:(r&it)===it){it!==0&&it===Bs&&(Bu=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=e,ne=b;it=n;var je=a;switch(ne.tag){case 1:if(Vt=ne.payload,typeof Vt=="function"){vt=Vt.call(je,vt,it);break t}vt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ne.payload,it=typeof Vt=="function"?Vt.call(je,vt,it):Vt,it==null)break t;vt=R({},vt,it);break t;case 2:ma=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?(k=ut=lt,O=vt):ut=ut.next=lt,v|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ut===null&&(O=vt),c.baseState=O,c.firstBaseUpdate=k,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=v,e.lanes=v,e.memoizedState=vt}}function mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}function so(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(b){Be(n,n.return,b)}}function va(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var O=a;try{b()}catch(k){Be(c,O,k)}}}r=r.next}while(r!==f)}}catch(k){Be(n,n.return,k)}}function gm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(r){Be(e,e.return,r)}}}function vm(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Be(e,n,r)}}function ns(e,n){try{var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=r;break;default:c=r}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Be(e,n,f)}}function Xn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function Sm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function xm(e,n,a){try{var r=e.stateNode;eS(r,e.type,a,n),r[nn]=n}catch(c){Be(e,e.return,c)}}function ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Fu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Iu(e,n,a),e=e.sibling;e!==null;)Iu(e,n,a),e=e.sibling}function Sl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Sl(e,n,a),e=e.sibling;e!==null;)Sl(e,n,a),e=e.sibling}var Xi=!1,qe=!1,Hu=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,hn=null,Em=!1;function Uv(e,n){if(e=e.containerInfo,mf=Il,e=Hd(e),Vc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,O=-1,k=0,ut=0,vt=e,it=null;e:for(;;){for(var lt;vt!==a||c!==0&&vt.nodeType!==3||(b=v+c),vt!==f||r!==0&&vt.nodeType!==3||(O=v+r),vt.nodeType===3&&(v+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)it=vt,vt=lt;for(;;){if(vt===e)break e;if(it===a&&++k===c&&(b=v),it===f&&++ut===r&&(O=v),(lt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=lt}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:e,selectionRange:a},Il=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=$a(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(a,a.return,ne)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)xf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}return Vt=Em,Em=!1,Vt}function Tm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(e,a),r&4&&so(5,a);break;case 1:if(qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Be(a,a.return,b)}else{var c=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Be(a,a.return,b)}}r&64&&gm(a),r&512&&ns(a,a.return);break;case 3:if(qi(e,a),r&64&&(r=a.updateQueue,r!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{_m(r,e)}catch(b){Be(a,a.return,b)}}break;case 26:qi(e,a),r&512&&ns(a,a.return);break;case 27:case 5:qi(e,a),n===null&&r&4&&Sm(a),r&512&&ns(a,a.return);break;case 12:qi(e,a);break;case 13:qi(e,a),r&4&&Rm(e,a);break;case 22:if(c=a.memoizedState!==null||Xi,!c){n=n!==null&&n.memoizedState!==null||qe;var f=Xi,v=qe;Xi=c,(qe=n)&&!v?Sa(e,a,(a.subtreeFlags&8772)!==0):qi(e,a),Xi=f,qe=v}r&512&&(a.memoizedProps.mode==="manual"?ns(a,a.return):Xn(a,a.return));break;default:qi(e,a)}}function bm(e){var n=e.alternate;n!==null&&(e.alternate=null,bm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Wn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Am(e,n,a),a=a.sibling}function Am(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:qe||Xn(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Xn(a,n);var r=Je,c=Wn;for(Je=a.stateNode,Wi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Lr(a),Je=r,Wn=c;break;case 5:qe||Xn(a,n);case 6:c=Je;var f=Wn;if(Je=null,Wi(e,n,a),Je=c,Wn=f,Je!==null)if(Wn)try{e=Je,r=a.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(v){Be(a,n,v)}else try{Je.removeChild(a.stateNode)}catch(v){Be(a,n,v)}break;case 18:Je!==null&&(Wn?(n=Je,a=a.stateNode,n.nodeType===8?Sf(n.parentNode,a):n.nodeType===1&&Sf(n,a),To(n)):Sf(Je,a.stateNode));break;case 4:r=Je,c=Wn,Je=a.stateNode.containerInfo,Wn=!0,Wi(e,n,a),Je=r,Wn=c;break;case 0:case 11:case 14:case 15:qe||va(2,a,n),qe||va(4,a,n),Wi(e,n,a);break;case 1:qe||(Xn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&vm(a,n,r)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:qe||Xn(a,n),qe=(r=qe)||a.memoizedState!==null,Wi(e,n,a),qe=r;break;default:Wi(e,n,a)}}function Rm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){Be(n,n.return,a)}}function Lv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mm),n;default:throw Error(s(435,e.tag))}}function Gu(e,n){var a=Lv(e);n.forEach(function(r){var c=Wv.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function ii(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:case 5:Je=b.stateNode,Wn=!1;break t;case 3:Je=b.stateNode.containerInfo,Wn=!0;break t;case 4:Je=b.stateNode.containerInfo,Wn=!0;break t}b=b.return}if(Je===null)throw Error(s(160));Am(f,v,c),Je=null,Wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wm(n,e),n=n.sibling}var di=null;function wm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),r&4&&(va(3,e,e.return),so(3,e),va(5,e,e.return));break;case 1:ii(n,e),ai(e),r&512&&(qe||a===null||Xn(a,a.return)),r&64&&Xi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=di;if(ii(n,e),ai(e),r&512&&(qe||a===null||Xn(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ga]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,r,a),f[en]=e,$(f),r=f;break t;case"link":var v=S_("link","href",c).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=S_("meta","content",c).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[en]=e,$(f),r=f}e.stateNode=r}else x_(c,e.type,e.stateNode);else e.stateNode=v_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?x_(c,e.type,e.stateNode):v_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&xm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var O=c.firstChild;O;){var k=O.nextSibling,ut=O.nodeName;O[Ga]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&O.rel.toLowerCase()==="stylesheet"||c.removeChild(O),O=k}for(var vt=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);xn(c,vt,f),c[en]=e,c[nn]=f}catch(Vt){Be(e,e.return,Vt)}}case 5:if(ii(n,e),ai(e),r&512&&(qe||a===null||Xn(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(Vt){Be(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,xm(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Hu=!0);break;case 6:if(ii(n,e),ai(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){Be(e,e.return,Vt)}}break;case 3:if(zl=null,c=di,di=Ol(n.containerInfo),ii(n,e),di=c,ai(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(Vt){Be(e,e.return,Vt)}Hu&&(Hu=!1,Cm(e));break;case 4:r=di,di=Ol(e.stateNode.containerInfo),ii(n,e),ai(e),di=r;break;case 12:ii(n,e),ai(e);break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ku=ft()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gu(e,r)));break;case 22:if(r&512&&(qe||a===null||Xn(a,a.return)),O=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ut=Xi,vt=qe,Xi=ut||O,qe=vt||k,ii(n,e),qe=vt,Xi=ut,ai(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,r&8192&&(n._visibility=O?n._visibility&-2:n._visibility|1,O&&(n=Xi||qe,a===null||k||n||Vs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,O)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=k.stateNode,b=k.memoizedProps.style;var lt=b!=null&&b.hasOwnProperty("display")?b.display:null;v.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Vt){Be(k,k.return,Vt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=O?"":k.memoizedProps}catch(Vt){Be(k,k.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Gu(e,a))));break;case 19:ii(n,e),ai(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gu(e,r)));break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(ym(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var c=r.stateNode,f=Fu(e);Sl(e,f,c);break;case 5:var v=r.stateNode;r.flags&32&&(Pn(v,""),r.flags&=-33);var b=Fu(e);Sl(e,b,v);break;case 3:case 4:var O=r.stateNode.containerInfo,k=Fu(e);Iu(e,k,O);break;default:throw Error(s(161))}}}catch(ut){Be(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tm(e,n.alternate,n),n=n.sibling}function Vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),Vs(n);break;case 1:Xn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vm(n,n.return,a),Vs(n);break;case 26:case 27:case 5:Xn(n,n.return),Vs(n);break;case 22:Xn(n,n.return),n.memoizedState===null&&Vs(n);break;default:Vs(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),so(4,f);break;case 1:if(Sa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){Be(r,r.return,k)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)mm(O[c],b)}catch(k){Be(r,r.return,k)}}a&&v&64&&gm(f),ns(f,f.return);break;case 26:case 27:case 5:Sa(c,f,a),a&&r===null&&v&4&&Sm(f),ns(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&v&4&&Rm(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),ns(f,f.return);break;default:Sa(c,f,a)}n=n.sibling}}function Vu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zr(a))}function ku(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e))}function xa(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dm(e,n,a,r),n=n.sibling}function Dm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n,a,r),c&2048&&so(9,n);break;case 3:xa(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e)));break;case 12:if(c&2048){xa(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Be(n,n.return,O)}}else xa(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?xa(e,n,a,r):ro(e,n):f._visibility&4?xa(e,n,a,r):(f._visibility|=4,ks(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Vu(n.alternate,n);break;case 24:xa(e,n,a,r),c&2048&&ku(n.alternate,n);break;default:xa(e,n,a,r)}}function ks(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,v=n,b=a,O=r,k=v.flags;switch(v.tag){case 0:case 11:case 15:ks(f,v,b,O,c),so(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&4?ks(f,v,b,O,c):ro(f,v):(ut._visibility|=4,ks(f,v,b,O,c)),c&&k&2048&&Vu(v.alternate,v);break;case 24:ks(f,v,b,O,c),c&&k&2048&&ku(v.alternate,v);break;default:ks(f,v,b,O,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ro(a,r),c&2048&&Vu(r.alternate,r);break;case 24:ro(a,r),c&2048&&ku(r.alternate,r);break;default:ro(a,r)}n=n.sibling}}var oo=8192;function Xs(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 26:Xs(e),e.flags&oo&&e.memoizedState!==null&&xS(di,e.memoizedState,e.memoizedProps);break;case 5:Xs(e);break;case 3:case 4:var n=di;di=Ol(e.stateNode.containerInfo),Xs(e),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,Xs(e),oo=n):Xs(e));break;default:Xs(e)}}function Lm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Om(r,e)}Lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nm(e),e=e.sibling}function Nm(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&va(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,xl(e)):lo(e);break;default:lo(e)}}function xl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Om(r,e)}Lm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,xl(n));break;default:xl(n)}e=e.sibling}}function Om(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,hn=r;else t:for(a=e;hn!==null;){r=hn;var c=r.sibling,f=r.return;if(bm(r),r===a){hn=null;break t}if(c!==null){c.return=f,hn=c;break t}hn=f}}}function Nv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,r){return new Nv(e,n,a,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,r,c,f){var v=0;if(r=e,typeof e=="function")Xu(e)&&(v=1);else if(typeof e=="string")v=vS(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return is(a.children,c,f,n);case p:v=8,c|=24;break;case g:return e=si(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case D:return e=si(13,a,n,c),e.elementType=D,e.lanes=f,e;case y:return e=si(19,a,n,c),e.elementType=y,e.lanes=f,e;case E:return zm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case M:v=10;break t;case x:v=9;break t;case C:v=11;break t;case _:v=14;break t;case P:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=si(v,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function is(e,n,a,r){return e=si(7,e,r,n),e.lanes=a,e}function zm(e,n,a,r){e=si(22,e,r,n),e.elementType=E,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if(!(c._pendingVisibility&2)){var v=ca(f,2);v!==null&&(c._pendingVisibility|=2,Ln(v,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if(c._pendingVisibility&2){var v=ca(f,2);v!==null&&(c._pendingVisibility&=-3,Ln(v,f,2))}}};return e.stateNode=c,e}function Wu(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function qu(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yi(e){e.flags|=4}function Bm(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!y_(n)){if(n=ni.current,n!==null&&((xe&4194176)===xe?Ei!==null:(xe&62914560)!==xe&&!(xe&536870912)||n!==Ei))throw qr=Qc,tp;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ee():536870912,e.lanes|=n,qs|=n)}function co(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&31457280,r|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ov(e,n,a){var r=n.pendingProps;switch(Zc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(rn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,hi!==null&&(tf(hi),hi=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ve(n),Bm(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ve(n),Bm(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==r&&Yi(n),Ve(n),n.flags&=-16777217),null;case 27:kt(n),a=ie.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=Me.current,Vr(n)?Jd(n):(e=d_(c,r,a),n.stateNode=e,Yi(n))}return Ve(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=Me.current,Vr(n))Jd(n);else{switch(c=Nl(ie.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[en]=n,e[nn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(xn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ie.current,Vr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Un,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||o_(e.nodeValue,a)),e||Ya(n)}else e=Nl(e).createTextNode(r),e[en]=n,n.stateNode=e}return Ve(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[en]=n}else kr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else hi!==null&&(tf(hi),hi=null),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),n.flags&128)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ve(n),null;case 4:return re(),e===null&&hf(n.stateNode.containerInfo),Ve(n),null;case 10:return ki(n.type),Ve(n),null;case 19:if(Kt(sn),c=n.memoizedState,c===null)return Ve(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)co(c,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=sl(e),f!==null){for(n.flags|=128,co(c,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pm(a,e),a=a.sibling;return Pt(sn,sn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ft()>El&&(n.flags|=128,r=!0,co(c,!1),n.lanes=4194304)}else{if(!r)if(e=sl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Ve(n),null}else 2*ft()-c.renderingStartTime>El&&a!==536870912&&(n.flags|=128,r=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ft(),n.sibling=null,e=sn.current,Pt(sn,r?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Ii(n),$c(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?a&536870912&&!(n.flags&128)&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Kt(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(rn),Ve(n),null;case 25:return null}throw Error(s(156,n.tag))}function Pv(e,n){switch(Zc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(rn),re(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Kt(sn),null;case 4:return re(),null;case 10:return ki(n.type),null;case 22:case 23:return Ii(n),$c(),e!==null&&Kt(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(rn),null;case 25:return null;default:return null}}function Fm(e,n){switch(Zc(n),n.tag){case 3:ki(rn),re();break;case 26:case 27:case 5:kt(n);break;case 4:re();break;case 13:Ii(n);break;case 19:Kt(sn);break;case 10:ki(n.type);break;case 22:case 23:Ii(n),$c(),e!==null&&Kt(Za);break;case 24:ki(rn)}}var zv={getCacheForType:function(e){var n=Mn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Bv=typeof WeakMap=="function"?WeakMap:Map,ke=0,Fe=null,de=null,xe=0,Ie=0,qn=null,ji=!1,Ws=!1,Yu=!1,Zi=0,Ye=0,Ma=0,as=0,ju=0,ri=0,qs=0,uo=null,bi=null,Zu=!1,Ku=0,El=1/0,Tl=null,Ea=null,bl=!1,ss=null,fo=0,Qu=0,Ju=null,ho=0,$u=null;function Yn(){if(ke&2&&xe!==0)return xe&-xe;if(w.T!==null){var e=Bs;return e!==0?e:lf()}return Ur()}function Im(){ri===0&&(ri=!(xe&536870912)||be?tn():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ri}function Ln(e,n,a){(e===Fe&&Ie===2||e.cancelPendingCommit!==null)&&(Ys(e,0),Ki(e,xe,ri,!1)),wn(e,a),(!(ke&2)||e!==Fe)&&(e===Fe&&(!(ke&2)&&(as|=a),Ye===4&&Ki(e,xe,ri,!1)),Ai(e))}function Hm(e,n,a){if(ke&6)throw Error(s(327));var r=!a&&(n&60)===0&&(n&e.expiredLanes)===0||Jt(e,n),c=r?Hv(e,n):af(e,n,!0),f=r;do{if(c===0){Ws&&!r&&Ki(e,n,0,!1);break}else if(c===6)Ki(e,n,0,!ji);else{if(a=e.current.alternate,f&&!Fv(a)){c=af(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;c=uo;var O=b.current.memoizedState.isDehydrated;if(O&&(Ys(b,v).flags|=256),v=af(b,v,!1),v!==2){if(Yu&&!O){b.errorRecoveryDisabledLanes|=f,as|=f,c=4;break t}f=bi,bi=c,f!==null&&tf(f)}c=v}if(f=!1,c!==2)continue}}if(c===1){Ys(e,0),Ki(e,n,0,!0);break}t:{switch(r=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Ki(r,n,ri,!ji);break t}break;case 2:bi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=n,(n&62914560)===n&&(f=Ku+300-ft(),10<f)){if(Ki(r,n,ri,!ji),Dt(r,0)!==0)break t;r.timeoutHandle=u_(Gm.bind(null,r,a,bi,Tl,Zu,n,ri,as,qs,ji,2,-0,0),f);break t}Gm(r,a,bi,Tl,Zu,n,ri,as,qs,ji,0,-0,0)}}break}while(!0);Ai(e)}function tf(e){bi===null?bi=e:bi.push.apply(bi,e)}function Gm(e,n,a,r,c,f,v,b,O,k,ut,vt,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:SS},Um(n),n=yS(),n!==null)){e.cancelPendingCommit=n(jm.bind(null,e,a,r,c,v,b,O,1,vt,it)),Ki(e,f,v,!k);return}jm(e,a,r,c,v,b,O,ut,vt,it)}function Fv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ki(e,n,a,r){n&=~ju,n&=~as,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-jt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Dr(e,a,n)}function Al(){return ke&6?!0:(po(0),!1)}function ef(){if(de!==null){if(Ie===0)var e=de.return;else e=de,Vi=ts=null,ou(e),Ps=null,Yr=0,e=de;for(;e!==null;)Fm(e.alternate,e),e=e.return;de=null}}function Ys(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ef(),Fe=e,de=a=ya(e.current,null),xe=n,Ie=0,qn=null,ji=!1,Ws=Jt(e,n),Yu=!1,qs=ri=ju=as=Ma=Ye=0,bi=uo=null,Zu=!1,n&8&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-jt(r),f=1<<c;n|=e[c],r&=~f}return Zi=n,Ko(),a}function Vm(e,n){ue=null,w.H=Ti,n===Wr?(n=ip(),Ie=3):n===tp?(n=ip(),Ie=4):Ie=n===em?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,de===null&&(Ye=1,_l(e,$n(n,e.current)))}function km(){var e=w.H;return w.H=Ti,e===null?Ti:e}function Xm(){var e=w.A;return w.A=zv,e}function nf(){Ye=4,ji||(xe&4194176)!==xe&&ni.current!==null||(Ws=!0),!(Ma&134217727)&&!(as&134217727)||Fe===null||Ki(Fe,xe,ri,!1)}function af(e,n,a){var r=ke;ke|=2;var c=km(),f=Xm();(Fe!==e||xe!==n)&&(Tl=null,Ys(e,n)),n=!1;var v=Ye;t:do try{if(Ie!==0&&de!==null){var b=de,O=qn;switch(Ie){case 8:ef(),v=6;break t;case 3:case 2:case 6:ni.current===null&&(n=!0);var k=Ie;if(Ie=0,qn=null,js(e,b,O,k),a&&Ws){v=0;break t}break;default:k=Ie,Ie=0,qn=null,js(e,b,O,k)}}Iv(),v=Ye;break}catch(ut){Vm(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Vi=ts=null,ke=r,w.H=c,w.A=f,de===null&&(Fe=null,xe=0,Ko()),v}function Iv(){for(;de!==null;)Wm(de)}function Hv(e,n){var a=ke;ke|=2;var r=km(),c=Xm();Fe!==e||xe!==n?(Tl=null,El=ft()+500,Ys(e,n)):Ws=Jt(e,n);t:do try{if(Ie!==0&&de!==null){n=de;var f=qn;e:switch(Ie){case 1:Ie=0,qn=null,js(e,n,f,1);break;case 2:if(ep(f)){Ie=0,qn=null,qm(n);break}n=function(){Ie===2&&Fe===e&&(Ie=7),Ai(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:ep(f)?(Ie=0,qn=null,qm(n)):(Ie=0,qn=null,js(e,n,f,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var b=de;if(!v||y_(v)){Ie=0,qn=null;var O=b.sibling;if(O!==null)de=O;else{var k=b.return;k!==null?(de=k,Rl(k)):de=null}break e}}Ie=0,qn=null,js(e,n,f,5);break;case 6:Ie=0,qn=null,js(e,n,f,6);break;case 8:ef(),Ye=6;break t;default:throw Error(s(462))}}Gv();break}catch(ut){Vm(e,ut)}while(!0);return Vi=ts=null,w.H=r,w.A=c,ke=a,de!==null?0:(Fe=null,xe=0,Ko(),Ye)}function Gv(){for(;de!==null&&!T();)Wm(de)}function Wm(e){var n=dm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Rl(e):de=n}function qm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=om(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=om(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:ou(n);default:Fm(a,n),n=de=Pm(n,Zi),n=dm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Rl(e):de=n}function js(e,n,a,r){Vi=ts=null,ou(n),Ps=null,Yr=0;var c=n.return;try{if(Cv(e,c,n,a,xe)){Ye=1,_l(e,$n(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ye=1,_l(e,$n(a,e.current)),de=null;return}n.flags&32768?(be||r===1?e=!0:Ws||xe&536870912?e=!1:(ji=e=!0,(r===2||r===3||r===6)&&(r=ni.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ym(n,e)):Rl(n)}function Rl(e){var n=e;do{if(n.flags&32768){Ym(n,ji);return}e=n.return;var a=Ov(n.alternate,n,Zi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ye===0&&(Ye=5)}function Ym(e,n){do{var a=Pv(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ye=6,de=null}function jm(e,n,a,r,c,f,v,b,O,k){var ut=w.T,vt=H.p;try{H.p=2,w.T=null,Vv(e,n,a,r,vt,c,f,v,b,O,k)}finally{w.T=ut,H.p=vt}}function Vv(e,n,a,r,c,f,v,b){do Zs();while(ss!==null);if(ke&6)throw Error(s(327));var O=e.finishedWork;if(r=e.finishedLanes,O===null)return null;if(e.finishedWork=null,e.finishedLanes=0,O===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=O.lanes|O.childLanes;if(k|=qc,Ho(e,r,k,f,v,b),e===Fe&&(de=Fe=null,xe=0),!(O.subtreeFlags&10256)&&!(O.flags&10256)||bl||(bl=!0,Qu=k,Ju=a,qv(Ct,function(){return Zs(),null})),a=(O.flags&15990)!==0,O.subtreeFlags&15990||a?(a=w.T,w.T=null,f=H.p,H.p=2,v=ke,ke|=4,Uv(e,O),wm(O,e),hv(_f,e.containerInfo),Il=!!mf,_f=mf=null,e.current=O,Tm(e,O.alternate,O),nt(),ke=v,H.p=f,w.T=a):e.current=O,bl?(bl=!1,ss=e,fo=r):Zm(e,k),k=e.pendingLanes,k===0&&(Ea=null),Ft(O.stateNode),Ai(e),n!==null)for(c=e.onRecoverableError,O=0;O<n.length;O++)k=n[O],c(k.value,{componentStack:k.stack});return fo&3&&Zs(),k=e.pendingLanes,r&4194218&&k&42?e===$u?ho++:(ho=0,$u=e):ho=0,po(0),null}function Zm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zr(n)))}function Zs(){if(ss!==null){var e=ss,n=Qu;Qu=0;var a=Es(fo),r=w.T,c=H.p;try{if(H.p=32>a?32:a,w.T=null,ss===null)var f=!1;else{a=Ju,Ju=null;var v=ss,b=fo;if(ss=null,fo=0,ke&6)throw Error(s(331));var O=ke;if(ke|=4,Nm(v.current),Dm(v,v.current,b,a),ke=O,po(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(qt,v)}catch{}f=!0}return f}finally{H.p=c,w.T=r,Zm(e,n)}}return!1}function Km(e,n,a){n=$n(a,n),n=yu(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(wn(e,2),Ai(e))}function Be(e,n,a){if(e.tag===3)Km(e,e,a);else for(;n!==null;){if(n.tag===3){Km(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){e=$n(a,e),a=$p(2),r=ga(n,a,2),r!==null&&(tm(a,r,n,e),wn(r,2),Ai(r));break}}n=n.return}}function sf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Bv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Yu=!0,c.add(a),e=kv.bind(null,e,n,a),n.then(e,e))}function kv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>ft()-Ku?!(ke&2)&&Ys(e,0):ju|=a,qs===xe&&(qs=0)),Ai(e)}function Qm(e,n){n===0&&(n=Ee()),e=ca(e,n),e!==null&&(wn(e,n),Ai(e))}function Xv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qm(e,a)}function Wv(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Qm(e,a)}function qv(e,n){return Xt(e,n)}var wl=null,Ks=null,rf=!1,Cl=!1,of=!1,rs=0;function Ai(e){e!==Ks&&e.next===null&&(Ks===null?wl=Ks=e:Ks=Ks.next=e),Cl=!0,rf||(rf=!0,jv(Yv))}function po(e,n){if(!of&&Cl){of=!0;do for(var a=!1,r=wl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-jt(42|e)+1)-1,f&=c&~(v&~b),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,t_(r,f))}else f=xe,f=Dt(r,r===Fe?f:0),!(f&3)||Jt(r,f)||(a=!0,t_(r,f));r=r.next}while(a);of=!1}}function Yv(){Cl=rf=!1;var e=0;rs!==0&&(nS()&&(e=rs),rs=0);for(var n=ft(),a=null,r=wl;r!==null;){var c=r.next,f=Jm(r,n);f===0?(r.next=null,a===null?wl=c:a.next=c,c===null&&(Ks=a)):(a=r,(e!==0||f&3)&&(Cl=!0)),r=c}po(e)}function Jm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-jt(f),b=1<<v,O=c[v];O===-1?(!(b&a)||b&r)&&(c[v]=Ge(b,n)):O<=n&&(e.expiredLanes|=b),f&=~b}if(n=Fe,a=xe,a=Dt(e,e===n?a:0),r=e.callbackNode,a===0||e===n&&Ie===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&N(r),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&N(r),Es(a)){case 2:case 8:a=Ht;break;case 32:a=Ct;break;case 268435456:a=me;break;default:a=Ct}return r=$m.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&N(r),e.callbackPriority=2,e.callbackNode=null,2}function $m(e,n){var a=e.callbackNode;if(Zs()&&e.callbackNode!==a)return null;var r=xe;return r=Dt(e,e===Fe?r:0),r===0?null:(Hm(e,r,n),Jm(e,ft()),e.callbackNode!=null&&e.callbackNode===a?$m.bind(null,e):null)}function t_(e,n){if(Zs())return null;Hm(e,n,!0)}function jv(e){aS(function(){ke&6?Xt(dt,e):e()})}function lf(){return rs===0&&(rs=tn()),rs}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function n_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Zv(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=e_((c[nn]||null).action),v=r.submitter;v&&(n=(n=v[nn]||null)?e_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new Yo("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rs!==0){var O=v?n_(c,v):new FormData(c);_u(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(b.preventDefault(),O=v?n_(c,v):new FormData(c),_u(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var cf=0;cf<jd.length;cf++){var uf=jd[cf],Kv=uf.toLowerCase(),Qv=uf[0].toUpperCase()+uf.slice(1);fi(Kv,"on"+Qv)}fi(kd,"onAnimationEnd"),fi(Xd,"onAnimationIteration"),fi(Wd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(pv,"onTransitionRun"),fi(mv,"onTransitionStart"),fi(_v,"onTransitionCancel"),fi(qd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function i_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],O=b.instance,k=b.currentTarget;if(b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=k;try{f(c)}catch(ut){ml(ut)}c.currentTarget=null,f=O}else for(v=0;v<r.length;v++){if(b=r[v],O=b.instance,k=b.currentTarget,b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=k;try{f(c)}catch(ut){ml(ut)}c.currentTarget=null,f=O}}}}function Se(e,n){var a=n[Ts];a===void 0&&(a=n[Ts]=new Set);var r=e+"__bubble";a.has(r)||(a_(n,e,2,!1),a.add(r))}function ff(e,n,a){var r=0;n&&(r|=4),a_(a,e,r,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function hf(e){if(!e[Dl]){e[Dl]=!0,j.forEach(function(a){a!=="selectionchange"&&(Jv.has(a)||ff(a,!1,e),ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,ff("selectionchange",!1,n))}}function a_(e,n,a,r){switch(R_(n)){case 2:var c=TS;break;case 8:c=bS;break;default:c=bf}a=c.bind(null,n,a,e),c=void 0,!Nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function df(e,n,a,r,c){var f=r;if(!(n&1)&&!(n&2)&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(v===4)for(v=r.return;v!==null;){var O=v.tag;if((O===3||O===4)&&(O=v.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;v=v.return}for(;b!==null;){if(v=zi(b),v===null)return;if(O=v.tag,O===5||O===6||O===26||O===27){r=f=v;continue t}b=b.parentNode}}r=r.return}Sd(function(){var k=f,ut=Uc(a),vt=[];t:{var it=Yd.get(e);if(it!==void 0){var lt=Yo,Vt=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":lt=W0;break;case"focusin":Vt="focus",lt=Bc;break;case"focusout":Vt="blur",lt=Bc;break;case"beforeblur":case"afterblur":lt=Bc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=j0;break;case kd:case Xd:case Wd:lt=z0;break;case qd:lt=K0;break;case"scroll":case"scrollend":lt=U0;break;case"wheel":lt=J0;break;case"copy":case"cut":case"paste":lt=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Td;break;case"toggle":case"beforetoggle":lt=tv}var ne=(n&4)!==0,je=!ne&&(e==="scroll"||e==="scrollend"),Z=ne?it!==null?it+"Capture":null:it;ne=[];for(var V=k,tt;V!==null;){var mt=V;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||Z===null||(mt=Nr(V,Z),mt!=null&&ne.push(_o(V,mt,tt))),je)break;V=V.return}0<ne.length&&(it=new lt(it,Vt,null,a,ut),vt.push({event:it,listeners:ne}))}}if(!(n&7)){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Dc&&(Vt=a.relatedTarget||a.fromElement)&&(zi(Vt)||Vt[Pi]))break t;if((lt||it)&&(it=ut.window===ut?ut:(it=ut.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=k,Vt=Vt?zi(Vt):null,Vt!==null&&(je=Y(Vt),ne=Vt.tag,Vt!==je||ne!==5&&ne!==27&&ne!==6)&&(Vt=null)):(lt=null,Vt=k),lt!==Vt)){if(ne=Md,mt="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Td,mt="onPointerLeave",Z="onPointerEnter",V="pointer"),je=lt==null?it:q(lt),tt=Vt==null?it:q(Vt),it=new ne(mt,V+"leave",lt,a,ut),it.target=je,it.relatedTarget=tt,mt=null,zi(ut)===k&&(ne=new ne(Z,V+"enter",Vt,a,ut),ne.target=tt,ne.relatedTarget=je,mt=ne),je=mt,lt&&Vt)e:{for(ne=lt,Z=Vt,V=0,tt=ne;tt;tt=Qs(tt))V++;for(tt=0,mt=Z;mt;mt=Qs(mt))tt++;for(;0<V-tt;)ne=Qs(ne),V--;for(;0<tt-V;)Z=Qs(Z),tt--;for(;V--;){if(ne===Z||Z!==null&&ne===Z.alternate)break e;ne=Qs(ne),Z=Qs(Z)}ne=null}else ne=null;lt!==null&&s_(vt,it,lt,ne,!1),Vt!==null&&je!==null&&s_(vt,je,Vt,ne,!0)}}t:{if(it=k?q(k):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var It=Ld;else if(Dd(it))if(Nd)It=uv;else{It=lv;var he=ov}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?k&&Cc(k.elementType)&&(It=Ld):It=cv;if(It&&(It=It(e,k))){Ud(vt,It,a,ut);break t}he&&he(e,it,k),e==="focusout"&&k&&it.type==="number"&&k.memoizedProps.value!=null&&yn(it,"number",it.value)}switch(he=k?q(k):window,e){case"focusin":(Dd(he)||he.contentEditable==="true")&&(Cs=he,kc=k,Gr=null);break;case"focusout":Gr=kc=Cs=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Gd(vt,a,ut);break;case"selectionchange":if(dv)break;case"keydown":case"keyup":Gd(vt,a,ut)}var Wt;if(Ic)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else ws?wd(e,a)&&(Qt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(bd&&a.locale!=="ko"&&(ws||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&ws&&(Wt=xd()):(la=ut,Oc="value"in la?la.value:la.textContent,ws=!0)),he=Ul(k,Qt),0<he.length&&(Qt=new Ed(Qt,e,null,a,ut),vt.push({event:Qt,listeners:he}),Wt?Qt.data=Wt:(Wt=Cd(a),Wt!==null&&(Qt.data=Wt)))),(Wt=nv?iv(e,a):av(e,a))&&(Qt=Ul(k,"onBeforeInput"),0<Qt.length&&(he=new Ed("onBeforeInput","beforeinput",null,a,ut),vt.push({event:he,listeners:Qt}),he.data=Wt)),Zv(vt,e,k,a,ut)}i_(vt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ul(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Nr(e,a),c!=null&&r.unshift(_o(e,c,f)),c=Nr(e,n),c!=null&&r.push(_o(e,c,f))),e=e.return}return r}function Qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var b=a,O=b.alternate,k=b.stateNode;if(b=b.tag,O!==null&&O===r)break;b!==5&&b!==26&&b!==27||k===null||(O=k,c?(k=Nr(a,f),k!=null&&v.unshift(_o(a,k,O))):c||(k=Nr(a,f),k!=null&&v.push(_o(a,k,O)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var $v=/\r\n?/g,tS=/\u0000|\uFFFD/g;function r_(e){return(typeof e=="string"?e:""+e).replace($v,`
`).replace(tS,"")}function o_(e,n){return n=r_(n),r_(e)===n}function Ll(){}function Ne(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Pn(e,""+r);break;case"className":He(e,"class",r);break;case"tabIndex":He(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":He(e,a,r);break;case"style":gd(e,r,f);break;case"data":if(n!=="object"){He(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ko(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",c.name,c,null),Ne(e,n,"formEncType",c.formEncType,c,null),Ne(e,n,"formMethod",c.formMethod,c,null),Ne(e,n,"formTarget",c.formTarget,c,null)):(Ne(e,n,"encType",c.encType,c,null),Ne(e,n,"method",c.method,c,null),Ne(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ko(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ll);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ge(e,"popover",r);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ge(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=C0.get(a)||a,ge(e,a,r))}}function pf(e,n,a,r,c,f){switch(a){case"style":gd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Pn(e,r):(typeof r=="number"||typeof r=="bigint")&&Pn(e,""+r);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ge(e,a,r)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,f,v,a,null)}}c&&Ne(e,n,"srcSet",a.srcSet,a,null),r&&Ne(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var b=f=v=c=null,O=null,k=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":v=ut;break;case"checked":O=ut;break;case"defaultChecked":k=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ne(e,n,r,ut,a,null)}}Dn(e,f,b,O,k,v,c,!1),ve(e);return;case"select":Se("invalid",e),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Ne(e,n,c,b,a,null)}n=f,a=v,e.multiple=!!r,n!=null?We(e,!!r,n,!1):a!=null&&We(e,!!r,a,!0);return;case"textarea":Se("invalid",e),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ne(e,n,v,b,a,null)}bs(e,r,c,f),ve(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(r=a[O],r!=null))switch(O){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ne(e,n,O,r,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(r=0;r<mo.length;r++)Se(mo[r],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,k,r,a,null)}return;default:if(Cc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&pf(e,n,ut,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ne(e,n,b,r,a,null))}function eS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,b=null,O=null,k=null,ut=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":O=vt;default:r.hasOwnProperty(lt)||Ne(e,n,lt,null,r,vt)}}for(var it in r){var lt=r[it];if(vt=a[it],r.hasOwnProperty(it)&&(lt!=null||vt!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":k=lt;break;case"defaultChecked":ut=lt;break;case"value":v=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Ne(e,n,it,lt,r,vt)}}Ue(e,v,b,O,k,ut,f,c);return;case"select":lt=v=b=it=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":lt=O;default:r.hasOwnProperty(f)||Ne(e,n,f,null,r,O)}for(c in r)if(f=r[c],O=a[c],r.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==O&&Ne(e,n,c,f,r,O)}n=b,a=v,r=lt,it!=null?We(e,!!a,it,!1):!!r!=!!a&&(n!=null?We(e,!!a,n,!0):We(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ne(e,n,b,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ne(e,n,v,c,r,f)}gn(e,it,lt);return;case"option":for(var Vt in a)if(it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ne(e,n,Vt,null,r,it)}for(O in r)if(it=r[O],lt=a[O],r.hasOwnProperty(O)&&it!==lt&&(it!=null||lt!=null))switch(O){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ne(e,n,O,it,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!r.hasOwnProperty(ne)&&Ne(e,n,ne,null,r,it);for(k in r)if(it=r[k],lt=a[k],r.hasOwnProperty(k)&&it!==lt&&(it!=null||lt!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ne(e,n,k,it,r,lt)}return;default:if(Cc(n)){for(var je in a)it=a[je],a.hasOwnProperty(je)&&it!==void 0&&!r.hasOwnProperty(je)&&pf(e,n,je,void 0,r,it);for(ut in r)it=r[ut],lt=a[ut],!r.hasOwnProperty(ut)||it===lt||it===void 0&&lt===void 0||pf(e,n,ut,it,r,lt);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!r.hasOwnProperty(Z)&&Ne(e,n,Z,null,r,it);for(vt in r)it=r[vt],lt=a[vt],!r.hasOwnProperty(vt)||it===lt||it==null&&lt==null||Ne(e,n,vt,it,r,lt)}var mf=null,_f=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function l_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function gf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vf=null;function nS(){var e=window.event;return e&&e.type==="popstate"?e===vf?!1:(vf=e,!0):(vf=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(e){return f_.resolve(null).then(e).catch(sS)}:u_;function sS(e){setTimeout(function(){throw e})}function Sf(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(r===0){e.removeChild(c),To(n);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=c}while(a);To(n)}function xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function oS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function h_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function d_(e,n,a){switch(n=Nl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var oi=new Map,p_=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Qi=H.d;H.d={f:lS,r:cS,D:uS,C:fS,L:hS,m:dS,X:mS,S:pS,M:_S};function lS(){var e=Qi.f(),n=Al();return e||n}function cS(e){var n=A(e);n!==null&&n.tag===5&&n.type==="form"?Gp(n):Qi.r(e)}var Js=typeof document>"u"?null:document;function m_(e,n,a){var r=Js;if(r&&typeof n=="string"&&n){var c=un(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),p_.has(c)||(p_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),xn(n,"link",e),$(n),r.head.appendChild(n)))}}function uS(e){Qi.D(e),m_("dns-prefetch",e,null)}function fS(e,n){Qi.C(e,n),m_("preconnect",e,n)}function hS(e,n,a){Qi.L(e,n,a);var r=Js;if(r&&e&&n){var c='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+un(a.imageSizes)+'"]')):c+='[href="'+un(e)+'"]';var f=c;switch(n){case"style":f=$s(e);break;case"script":f=tr(e)}oi.has(f)||(e=R({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(go(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),xn(n,"link",e),$(n),r.head.appendChild(n)))}}function dS(e,n){Qi.m(e,n);var a=Js;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+un(r)+'"][href="'+un(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=tr(e)}if(!oi.has(f)&&(e=R({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),xn(r,"link",e),$(r),a.head.appendChild(r)}}}function pS(e,n,a){Qi.S(e,n,a);var r=Js;if(r&&e){var c=et(r).hoistableStyles,f=$s(e);n=n||"default";var v=c.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(go(f)))b.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&yf(e,a);var O=v=r.createElement("link");$(O),xn(O,"link",e),O._p=new Promise(function(k,ut){O.onload=k,O.onerror=ut}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Pl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(f,v)}}}function mS(e,n){Qi.X(e,n);var a=Js;if(a&&e){var r=et(a).hoistableScripts,c=tr(e),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(e=R({src:e,async:!0},n),(n=oi.get(c))&&Mf(e,n),f=a.createElement("script"),$(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _S(e,n){Qi.M(e,n);var a=Js;if(a&&e){var r=et(a).hoistableScripts,c=tr(e),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(e=R({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Mf(e,n),f=a.createElement("script"),$(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function __(e,n,a,r){var c=(c=ie.current)?Ol(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$s(a.href),a=et(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$s(a.href);var f=et(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(go(e)))&&!f._p&&(v.instance=f,v.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||gS(c,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=et(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $s(e){return'href="'+un(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function g_(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),xn(n,"link",a),$(n),e.head.appendChild(n))}function tr(e){return'[src="'+un(e)+'"]'}function vo(e){return"script[async]"+e}function v_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+un(a.href)+'"]');if(r)return n.instance=r,$(r),r;var c=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),$(r),xn(r,"style",c),Pl(r,a.precedence,e),n.instance=r;case"stylesheet":c=$s(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;r=g_(a),(c=oi.get(c))&&yf(r,c),f=(e.ownerDocument||e).createElement("link"),$(f);var v=f;return v._p=new Promise(function(b,O){v.onload=b,v.onerror=O}),xn(f,"link",r),n.state.loading|=4,Pl(f,a.precedence,e),n.instance=f;case"script":return f=tr(a.src),(c=e.querySelector(vo(f)))?(n.instance=c,$(c),c):(r=a,(c=oi.get(f))&&(r=R({},a),Mf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),$(c),xn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(r=n.instance,n.state.loading|=4,Pl(r,a.precedence,e));return n.instance}function Pl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zl=null;function S_(e,n,a){if(zl===null){var r=new Map,c=zl=new Map;c.set(a,r)}else c=zl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ga]||f[en]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function x_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function y_(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var So=null;function SS(){}function xS(e,n,a){if(So===null)throw Error(s(475));var r=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$s(a.href),f=e.querySelector(go(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Bl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,$(f);return}f=e.ownerDocument||e,a=g_(a),(c=oi.get(c))&&yf(a,c),f=f.createElement("link"),$(f);var v=f;v._p=new Promise(function(b,O){v.onload=b,v.onerror=O}),xn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(r.count++,n=Bl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function yS(){if(So===null)throw Error(s(475));var e=So;return e.stylesheets&&e.count===0&&Ef(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ef(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Bl(){if(this.count--,this.count===0){if(this.stylesheets)Ef(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fl=null;function Ef(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fl=new Map,n.forEach(MS,e),Fl=null,Bl.call(e))}function MS(e,n){if(!(n.state.loading&4)){var a=Fl.get(e);if(a)var r=a.get(null);else{a=new Map,Fl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=Bl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function ES(e,n,a,r,c,f,v,b){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.hiddenUpdates=Rn(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function M_(e,n,a,r,c,f,v,b,O,k,ut,vt){return e=new ES(e,n,a,v,b,O,k,vt),n=1,f===!0&&(n|=24),f=si(3,null,null,n),e.current=f,f.stateNode=e,n=tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ou(f),e}function E_(e){return e?(e=Ls,e):Ls}function T_(e,n,a,r,c,f){c=E_(c),r.context===null?r.context=c:r.pendingContext=c,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(e,r,n),a!==null&&(Ln(a,e,n),no(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Tf(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function A_(e){if(e.tag===13){var n=ca(e,67108864);n!==null&&Ln(n,e,67108864),Tf(e,67108864)}}var Il=!0;function TS(e,n,a,r){var c=w.T;w.T=null;var f=H.p;try{H.p=2,bf(e,n,a,r)}finally{H.p=f,w.T=c}}function bS(e,n,a,r){var c=w.T;w.T=null;var f=H.p;try{H.p=8,bf(e,n,a,r)}finally{H.p=f,w.T=c}}function bf(e,n,a,r){if(Il){var c=Af(r);if(c===null)df(e,n,r,Hl,a),w_(e,r);else if(RS(c,e,n,a,r))r.stopPropagation();else if(w_(e,r),n&4&&-1<AS.indexOf(e)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=wt(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var O=1<<31-jt(v);b.entanglements[1]|=O,v&=~O}Ai(f),!(ke&6)&&(El=ft()+500,po(0))}}break;case 13:b=ca(f,2),b!==null&&Ln(b,f,2),Al(),Tf(f,2)}if(f=Af(r),f===null&&df(e,n,r,Hl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else df(e,n,r,null,a)}}function Af(e){return e=Uc(e),Rf(e)}var Hl=null;function Rf(e){if(Hl=null,e=zi(e),e!==null){var n=Y(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=St(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hl=e,null}function R_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case dt:return 2;case Ht:return 8;case Ct:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var wf=!1,Ta=null,ba=null,Aa=null,yo=new Map,Mo=new Map,Ra=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&A_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function RS(e,n,a,r,c){switch(n){case"focusin":return Ta=Eo(Ta,e,n,a,r,c),!0;case"dragenter":return ba=Eo(ba,e,n,a,r,c),!0;case"mouseover":return Aa=Eo(Aa,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Eo(yo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,r,c)),!0}return!1}function C_(e){var n=zi(e.target);if(n!==null){var a=Y(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){e.blockedOn=n,Go(e.priority,function(){if(a.tag===13){var r=Yn(),c=ca(a,r);c!==null&&Ln(c,a,r),Tf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Af(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Dc=r,a.target.dispatchEvent(r),Dc=null}else return n=A(a),n!==null&&A_(n),e.blockedOn=a,!1;n.shift()}return!0}function D_(e,n,a){Gl(e)&&a.delete(n)}function wS(){wf=!1,Ta!==null&&Gl(Ta)&&(Ta=null),ba!==null&&Gl(ba)&&(ba=null),Aa!==null&&Gl(Aa)&&(Aa=null),yo.forEach(D_),Mo.forEach(D_)}function Vl(e,n){e.blockedOn===n&&(e.blockedOn=null,wf||(wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,wS)))}var kl=null;function U_(e){kl!==e&&(kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Rf(r||a)===null)continue;break}var f=A(a);f!==null&&(e.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function To(e){function n(O){return Vl(O,e)}Ta!==null&&Vl(Ta,e),ba!==null&&Vl(ba,e),Aa!==null&&Vl(Aa,e),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Ra.length;a++){var r=Ra[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[nn]||null;if(typeof f=="function")v||U_(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[nn]||null)b=v.formAction;else if(Rf(c)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),U_(a)}}}function Cf(e){this._internalRoot=e}Xl.prototype.render=Cf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Yn();T_(a,r,e,n,null,null)},Xl.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Zs(),T_(e.current,2,null,e,null,null),Al(),n[Pi]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ur();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&C_(e)}};var L_=t.version;if(L_!=="19.0.0")throw Error(s(527,L_,"19.0.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=J(n),e=e!==null?yt(e):null,e=e===null?null:e.stateNode,e};var CS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:zi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{qt=Wl.inject(CS),Gt=Wl}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Zp,f=Kp,v=Qp,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=M_(e,1,!1,null,null,a,r,c,f,v,b,null),e[Pi]=n.current,hf(e.nodeType===8?e.parentNode:e),new Cf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Zp,v=Kp,b=Qp,O=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=M_(e,1,!0,n,a??null,r,c,f,v,b,O,k),n.context=E_(null),a=n.current,r=Yn(),c=_a(r),c.callback=null,ga(a,c,r),n.current.lanes=r,wn(n,r),Ai(n),e[Pi]=n.current,hf(e),new Xl(n)},Ao.version="19.0.0",Ao}var V_;function HS(){if(V_)return Lf.exports;V_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Lf.exports=IS(),Lf.exports}var GS=HS();const VS=qg(GS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="173",vr={ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kS=0,k_=1,XS=2,Yg=1,WS=2,ia=3,Ia=0,Hn=1,Ci=2,Ba=0,Sr=1,X_=2,W_=3,q_=4,qS=5,ps=100,YS=101,jS=102,ZS=103,KS=104,QS=200,JS=201,$S=202,tx=203,ph=204,mh=205,ex=206,nx=207,ix=208,ax=209,sx=210,rx=211,ox=212,lx=213,cx=214,_h=0,gh=1,vh=2,Mr=3,Sh=4,xh=5,yh=6,Mh=7,id=0,ux=1,fx=2,Fa=0,hx=1,dx=2,px=3,mx=4,_x=5,gx=6,vx=7,jg=300,Er=301,Tr=302,Eh=303,Th=304,bc=306,bh=1e3,_s=1001,Ah=1002,xi=1003,Sx=1004,ql=1005,Di=1006,zf=1007,gs=1008,oa=1009,Zg=1010,Kg=1011,Po=1012,ad=1013,vs=1014,aa=1015,zo=1016,sd=1017,rd=1018,br=1020,Qg=35902,Jg=1021,$g=1022,Si=1023,t0=1024,e0=1025,xr=1026,Ar=1027,n0=1028,od=1029,i0=1030,ld=1031,cd=1033,mc=33776,_c=33777,gc=33778,vc=33779,Rh=35840,wh=35841,Ch=35842,Dh=35843,Uh=36196,Lh=37492,Nh=37496,Oh=37808,Ph=37809,zh=37810,Bh=37811,Fh=37812,Ih=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,Sc=36492,jh=36494,Zh=36495,a0=36283,Kh=36284,Qh=36285,Jh=36286,xx=3200,yx=3201,s0=0,Mx=1,za="",ci="srgb",Rr="srgb-linear",Mc="linear",Oe="srgb",er=7680,Y_=519,Ex=512,Tx=513,bx=514,r0=515,Ax=516,Rx=517,wx=518,Cx=519,j_=35044,Z_="300 es",sa=2e3,Ec=2001;class Ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,$h=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function pe(o,t,i){return Math.max(t,Math.min(i,o))}function Dx(o,t){return(o%t+t)%t}function Bf(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ux={DEG2RAD:xc};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],S=s[7],x=s[2],M=s[5],C=s[8],D=l[0],y=l[3],_=l[6],P=l[1],E=l[4],L=l[7],G=l[2],I=l[5],F=l[8];return u[0]=h*D+d*P+m*G,u[3]=h*y+d*E+m*I,u[6]=h*_+d*L+m*F,u[1]=p*D+g*P+S*G,u[4]=p*y+g*E+S*I,u[7]=p*_+g*L+S*F,u[2]=x*D+M*P+C*G,u[5]=x*y+M*E+C*I,u[8]=x*_+M*L+C*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=g*h-d*p,x=d*m-g*u,M=p*u-h*m,C=i*S+s*x+l*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=S*D,t[1]=(l*p-g*s)*D,t[2]=(d*s-l*h)*D,t[3]=x*D,t[4]=(g*i-l*m)*D,t[5]=(l*u-d*i)*D,t[6]=M*D,t[7]=(s*m-p*i)*D,t[8]=(h*i-s*u)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ff.makeScale(t,i)),this}rotate(t){return this.premultiply(Ff.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ff.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new le;function o0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Tc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Lx(){const o=Tc("canvas");return o.style.display="block",o}const K_={};function mr(o){o in K_||(K_[o]=!0,console.warn(o))}function Nx(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Ox(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Px(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Q_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zx(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:t,whitePoint:s,transfer:Mc,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:Oe,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Re=zx();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let nr;class Bx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{nr===void 0&&(nr=Tc("canvas")),nr.width=t.width,nr.height=t.height;const s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=nr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Tc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ra(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ra(i[s]/255)*255):i[s]=ra(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fx=0;class l0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(If(l[h].image)):u.push(If(l[h]))}else u=If(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function If(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Bx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ix=0;class Gn extends Ms{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=_s,l=_s,u=Di,h=gs,d=Si,m=oa,p=Gn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Bo(),this.name="",this.source=new l0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bh:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case Ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bh:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case Ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=jg;Gn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,i=0,s=0,l=1){ze.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],S=m[8],x=m[1],M=m[5],C=m[9],D=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(S-D)<.01&&Math.abs(C-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(S+D)<.1&&Math.abs(C+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const E=(p+1)/2,L=(M+1)/2,G=(_+1)/2,I=(g+x)/4,F=(S+D)/4,K=(C+y)/4;return E>L&&E>G?E<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(E),l=I/s,u=F/s):L>G?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=I/l,u=K/l):G<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),s=F/u,l=K/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-C)*(y-C)+(S-D)*(S-D)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-C)/P,this.y=(S-D)/P,this.z=(x-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hx extends Ms{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new ze(0,0,t,i),this.scissorTest=!1,this.viewport=new ze(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new l0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends Hx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class c0 extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gx extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],S=s[l+3];const x=u[h+0],M=u[h+1],C=u[h+2],D=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=C,t[i+3]=D;return}if(S!==D||m!==x||p!==M||g!==C){let y=1-d;const _=m*x+p*M+g*C+S*D,P=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const G=Math.sqrt(E),I=Math.atan2(G,_*P);y=Math.sin(y*I)/G,d=Math.sin(d*I)/G}const L=d*P;if(m=m*y+x*L,p=p*y+M*L,g=g*y+C*L,S=S*y+D*L,y===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=G,p*=G,g*=G,S*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],S=u[h],x=u[h+1],M=u[h+2],C=u[h+3];return t[i]=d*C+g*S+m*M-p*x,t[i+1]=m*C+g*x+p*S-d*M,t[i+2]=p*C+g*M+d*x-m*S,t[i+3]=g*C-d*S-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),S=d(u/2),x=m(s/2),M=m(l/2),C=m(u/2);switch(h){case"XYZ":this._x=x*g*S+p*M*C,this._y=p*M*S-x*g*C,this._z=p*g*C+x*M*S,this._w=p*g*S-x*M*C;break;case"YXZ":this._x=x*g*S+p*M*C,this._y=p*M*S-x*g*C,this._z=p*g*C-x*M*S,this._w=p*g*S+x*M*C;break;case"ZXY":this._x=x*g*S-p*M*C,this._y=p*M*S+x*g*C,this._z=p*g*C+x*M*S,this._w=p*g*S-x*M*C;break;case"ZYX":this._x=x*g*S-p*M*C,this._y=p*M*S+x*g*C,this._z=p*g*C-x*M*S,this._w=p*g*S+x*M*C;break;case"YZX":this._x=x*g*S+p*M*C,this._y=p*M*S+x*g*C,this._z=p*g*C-x*M*S,this._w=p*g*S-x*M*C;break;case"XZY":this._x=x*g*S-p*M*C,this._y=p*M*S-x*g*C,this._z=p*g*C+x*M*S,this._w=p*g*S+x*M*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],S=i[10],x=s+d+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>S){const M=2*Math.sqrt(1+s-d-S);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-s-S);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+S-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),S=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*S+this._w*x,this._x=s*S+this._x*x,this._y=l*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),S=2*(u*s-h*i);return this.x=i+m*p+h*S-d*g,this.y=s+m*g+d*p-u*S,this.z=l+m*S+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Hf.copy(this).projectOnVector(t),this.sub(Hf)}reflect(t){return this.sub(Hf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hf=new Q,$_=new xs;class Fo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,mi):mi.fromBufferAttribute(u,h),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Yl.copy(s.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),jl.subVectors(this.max,wo),ir.subVectors(t.a,wo),ar.subVectors(t.b,wo),sr.subVectors(t.c,wo),Ca.subVectors(ar,ir),Da.subVectors(sr,ar),os.subVectors(ir,sr);let i=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-os.z,os.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,os.z,0,-os.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-os.y,os.x,0];return!Gf(i,ir,ar,sr,jl)||(i=[1,0,0,0,1,0,0,0,1],!Gf(i,ir,ar,sr,jl))?!1:(Zl.crossVectors(Ca,Da),i=[Zl.x,Zl.y,Zl.z],Gf(i,ir,ar,sr,jl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],mi=new Q,Yl=new Fo,ir=new Q,ar=new Q,sr=new Q,Ca=new Q,Da=new Q,os=new Q,wo=new Q,jl=new Q,Zl=new Q,ls=new Q;function Gf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ls.fromArray(o,u);const d=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),m=t.dot(ls),p=i.dot(ls),g=s.dot(ls);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Vx=new Fo,Co=new Q,Vf=new Q;class ud{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Vx.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(Vf)),this.expandByPoint(Co.copy(t.center).sub(Vf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new Q,kf=new Q,Kl=new Q,Ua=new Q,Xf=new Q,Ql=new Q,Wf=new Q;class u0{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){kf.copy(t).add(i).multiplyScalar(.5),Kl.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(kf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Ua.dot(this.direction),m=-Ua.dot(Kl),p=Ua.lengthSq(),g=Math.abs(1-h*h);let S,x,M,C;if(g>0)if(S=h*m-d,x=h*d-m,C=u*g,S>=0)if(x>=-C)if(x<=C){const D=1/g;S*=D,x*=D,M=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=u,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x=-u,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x<=-C?(S=Math.max(0,-(-h*u+d)),x=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+x*(x+2*m)+p):x<=C?(S=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(S=Math.max(0,-(h*u+d)),x=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+x*(x+2*m)+p);else x=h>0?-u:u,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(kf).addScaledVector(Kl,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(d=(t.min.z-x.z)*S,m=(t.max.z-x.z)*S):(d=(t.max.z-x.z)*S,m=(t.min.z-x.z)*S),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){Xf.subVectors(i,t),Ql.subVectors(s,t),Wf.crossVectors(Xf,Ql);let h=this.direction.dot(Wf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,t);const m=d*this.direction.dot(Ql.crossVectors(Ua,Ql));if(m<0)return null;const p=d*this.direction.dot(Xf.cross(Ua));if(p<0||m+p>h)return null;const g=-d*Ua.dot(Wf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,i,s,l,u,h,d,m,p,g,S,x,M,C,D,y){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,S,x,M,C,D,y)}set(t,i,s,l,u,h,d,m,p,g,S,x,M,C,D,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=S,_[14]=x,_[3]=M,_[7]=C,_[11]=D,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/rr.setFromMatrixColumn(t,0).length(),u=1/rr.setFromMatrixColumn(t,1).length(),h=1/rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),S=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*S,C=d*g,D=d*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=M+C*p,i[5]=x-D*p,i[9]=-d*m,i[2]=D-x*p,i[6]=C+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*S,C=p*g,D=p*S;i[0]=x+D*d,i[4]=C*d-M,i[8]=h*p,i[1]=h*S,i[5]=h*g,i[9]=-d,i[2]=M*d-C,i[6]=D+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*S,C=p*g,D=p*S;i[0]=x-D*d,i[4]=-h*S,i[8]=C+M*d,i[1]=M+C*d,i[5]=h*g,i[9]=D-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*S,C=d*g,D=d*S;i[0]=m*g,i[4]=C*p-M,i[8]=x*p+D,i[1]=m*S,i[5]=D*p+x,i[9]=M*p-C,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,C=d*m,D=d*p;i[0]=m*g,i[4]=D-x*S,i[8]=C*S+M,i[1]=S,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*S+C,i[10]=x-D*S}else if(t.order==="XZY"){const x=h*m,M=h*p,C=d*m,D=d*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=x*S+D,i[5]=h*g,i[9]=M*S-C,i[2]=C*S-M,i[6]=d*g,i[10]=D*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kx,t,Xx)}lookAt(t,i,s){const l=this.elements;return jn.subVectors(t,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),La.crossVectors(s,jn),La.lengthSq()===0&&(Math.abs(s.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),La.crossVectors(s,jn)),La.normalize(),Jl.crossVectors(jn,La),l[0]=La.x,l[4]=Jl.x,l[8]=jn.x,l[1]=La.y,l[5]=Jl.y,l[9]=jn.y,l[2]=La.z,l[6]=Jl.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],S=s[5],x=s[9],M=s[13],C=s[2],D=s[6],y=s[10],_=s[14],P=s[3],E=s[7],L=s[11],G=s[15],I=l[0],F=l[4],K=l[8],w=l[12],R=l[1],B=l[5],ct=l[9],at=l[13],pt=l[2],ht=l[6],X=l[10],st=l[14],Y=l[3],St=l[7],U=l[11],J=l[15];return u[0]=h*I+d*R+m*pt+p*Y,u[4]=h*F+d*B+m*ht+p*St,u[8]=h*K+d*ct+m*X+p*U,u[12]=h*w+d*at+m*st+p*J,u[1]=g*I+S*R+x*pt+M*Y,u[5]=g*F+S*B+x*ht+M*St,u[9]=g*K+S*ct+x*X+M*U,u[13]=g*w+S*at+x*st+M*J,u[2]=C*I+D*R+y*pt+_*Y,u[6]=C*F+D*B+y*ht+_*St,u[10]=C*K+D*ct+y*X+_*U,u[14]=C*w+D*at+y*st+_*J,u[3]=P*I+E*R+L*pt+G*Y,u[7]=P*F+E*B+L*ht+G*St,u[11]=P*K+E*ct+L*X+G*U,u[15]=P*w+E*at+L*st+G*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],S=t[6],x=t[10],M=t[14],C=t[3],D=t[7],y=t[11],_=t[15];return C*(+u*m*S-l*p*S-u*d*x+s*p*x+l*d*M-s*m*M)+D*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*S-i*d*M-u*h*S+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*S+i*d*x+l*h*S-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=t[9],x=t[10],M=t[11],C=t[12],D=t[13],y=t[14],_=t[15],P=S*y*p-D*x*p+D*m*M-d*y*M-S*m*_+d*x*_,E=C*x*p-g*y*p-C*m*M+h*y*M+g*m*_-h*x*_,L=g*D*p-C*S*p+C*d*M-h*D*M-g*d*_+h*S*_,G=C*S*m-g*D*m-C*d*x+h*D*x+g*d*y-h*S*y,I=i*P+s*E+l*L+u*G;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=P*F,t[1]=(D*x*u-S*y*u-D*l*M+s*y*M+S*l*_-s*x*_)*F,t[2]=(d*y*u-D*m*u+D*l*p-s*y*p-d*l*_+s*m*_)*F,t[3]=(S*m*u-d*x*u-S*l*p+s*x*p+d*l*M-s*m*M)*F,t[4]=E*F,t[5]=(g*y*u-C*x*u+C*l*M-i*y*M-g*l*_+i*x*_)*F,t[6]=(C*m*u-h*y*u-C*l*p+i*y*p+h*l*_-i*m*_)*F,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*F,t[8]=L*F,t[9]=(C*S*u-g*D*u-C*s*M+i*D*M+g*s*_-i*S*_)*F,t[10]=(h*D*u-C*d*u+C*s*p-i*D*p-h*s*_+i*d*_)*F,t[11]=(g*d*u-h*S*u-g*s*p+i*S*p+h*s*M-i*d*M)*F,t[12]=G*F,t[13]=(g*D*l-C*S*l+C*s*x-i*D*x-g*s*y+i*S*y)*F,t[14]=(C*d*l-h*D*l-C*s*m+i*D*m+h*s*y-i*d*y)*F,t[15]=(h*S*l-g*d*l+g*s*m-i*S*m-h*s*x+i*d*x)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,S=d+d,x=u*p,M=u*g,C=u*S,D=h*g,y=h*S,_=d*S,P=m*p,E=m*g,L=m*S,G=s.x,I=s.y,F=s.z;return l[0]=(1-(D+_))*G,l[1]=(M+L)*G,l[2]=(C-E)*G,l[3]=0,l[4]=(M-L)*I,l[5]=(1-(x+_))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(C+E)*F,l[9]=(y-P)*F,l[10]=(1-(x+D))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=rr.set(l[0],l[1],l[2]).length();const h=rr.set(l[4],l[5],l[6]).length(),d=rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,g=1/h,S=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=S,_i.elements[9]*=S,_i.elements[10]*=S,i.setFromRotationMatrix(_i),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=sa){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),x=(s+l)/(s-l);let M,C;if(d===sa)M=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Ec)M=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=sa){const m=this.elements,p=1/(i-t),g=1/(s-l),S=1/(h-u),x=(i+t)*p,M=(s+l)*g;let C,D;if(d===sa)C=(h+u)*S,D=-2*S;else if(d===Ec)C=u*S,D=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=D,m[14]=-C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const rr=new Q,_i=new Xe,kx=new Q(0,0,0),Xx=new Q(1,1,1),La=new Q,Jl=new Q,jn=new Q,tg=new Xe,eg=new xs;class Ni{constructor(t=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],S=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-pe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return tg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return eg.setFromEuler(this),this.setFromQuaternion(eg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wx=0;const ng=new Q,or=new xs,ta=new Xe,$l=new Q,Do=new Q,qx=new Q,Yx=new xs,ig=new Q(1,0,0),ag=new Q(0,1,0),sg=new Q(0,0,1),rg={type:"added"},jx={type:"removed"},lr={type:"childadded",child:null},qf={type:"childremoved",child:null};class An extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new Q,i=new Ni,s=new xs,l=new Q(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new le}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(ig,t)}rotateY(t){return this.rotateOnAxis(ag,t)}rotateZ(t){return this.rotateOnAxis(sg,t)}translateOnAxis(t,i){return ng.copy(t).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ig,t)}translateY(t){return this.translateOnAxis(ag,t)}translateZ(t){return this.translateOnAxis(sg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?$l.copy(t):$l.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Do,$l,this.up):ta.lookAt($l,Do,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),or.setFromRotationMatrix(ta),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rg),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jx),qf.child=t,this.dispatchEvent(qf),qf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rg),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];u(t.shapes,S)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),S=h(t.shapes),x=h(t.skeletons),M=h(t.animations),C=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),C.length>0&&(s.nodes=C)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new Q,ea=new Q,Yf=new Q,na=new Q,cr=new Q,ur=new Q,og=new Q,jf=new Q,Zf=new Q,Kf=new Q,Qf=new ze,Jf=new ze,$f=new ze;class vi{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){gi.subVectors(l,i),ea.subVectors(s,i),Yf.subVectors(t,i);const h=gi.dot(gi),d=gi.dot(ea),m=gi.dot(Yf),p=ea.dot(ea),g=ea.dot(Yf),S=h*p-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,M=(p*m-d*g)*x,C=(h*g-d*m)*x;return u.set(1-M-C,C,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Qf.setScalar(0),Jf.setScalar(0),$f.setScalar(0),Qf.fromBufferAttribute(t,i),Jf.fromBufferAttribute(t,s),$f.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Qf,u.x),h.addScaledVector(Jf,u.y),h.addScaledVector($f,u.z),h}static isFrontFacing(t,i,s,l){return gi.subVectors(s,i),ea.subVectors(t,i),gi.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),gi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;cr.subVectors(l,s),ur.subVectors(u,s),jf.subVectors(t,s);const m=cr.dot(jf),p=ur.dot(jf);if(m<=0&&p<=0)return i.copy(s);Zf.subVectors(t,l);const g=cr.dot(Zf),S=ur.dot(Zf);if(g>=0&&S<=g)return i.copy(l);const x=m*S-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(cr,h);Kf.subVectors(t,u);const M=cr.dot(Kf),C=ur.dot(Kf);if(C>=0&&M<=C)return i.copy(u);const D=M*p-m*C;if(D<=0&&p>=0&&C<=0)return d=p/(p-C),i.copy(s).addScaledVector(ur,d);const y=g*C-M*S;if(y<=0&&S-g>=0&&M-C>=0)return og.subVectors(u,l),d=(S-g)/(S-g+(M-C)),i.copy(l).addScaledVector(og,d);const _=1/(y+D+x);return h=D*_,d=x*_,i.copy(s).addScaledVector(cr,h).addScaledVector(ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},tc={h:0,s:0,l:0};function th(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=Dx(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=th(h,u,t+1/3),this.g=th(h,u,t),this.b=th(h,u,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=h0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Re.fromWorkingColorSpace(bn.copy(this),t),Math.round(pe(bn.r*255,0,255))*65536+Math.round(pe(bn.g*255,0,255))*256+Math.round(pe(bn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,l=bn.g,u=bn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=g<=.5?S/(h+d):S/(2-h-d),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=ci){Re.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,l=bn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL(tc);const s=Bf(Na.h,tc.h,i),l=Bf(Na.s,tc.s,i),u=Bf(Na.l,tc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new ye;ye.NAMES=h0;let Zx=0;class Io extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Sr,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Ia&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ph&&(s.blendSrc=this.blendSrc),this.blendDst!==mh&&(s.blendDst=this.blendDst),this.blendEquation!==ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class d0 extends Io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new Q,ec=new se;let Kx=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=j_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(t),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==j_&&(t.usage=this.usage),t}}class p0 extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class m0 extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Li extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Qx=0;const li=new Xe,eh=new An,fr=new Q,Zn=new Fo,Uo=new Fo,pn=new Q;class Ha extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o0(t)?m0:p0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return eh.lookAt(t),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Li(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ud);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Zn.min,Uo.min),Zn.expandByPoint(pn),pn.addVectors(Zn.max,Uo.max),Zn.expandByPoint(pn)):(Zn.expandByPoint(Uo.min),Zn.expandByPoint(Uo.max))}Zn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)pn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(pn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)pn.fromBufferAttribute(d,p),m&&(fr.fromBufferAttribute(t,p),pn.add(fr)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new Q,m[K]=new Q;const p=new Q,g=new Q,S=new Q,x=new se,M=new se,C=new se,D=new Q,y=new Q;function _(K,w,R){p.fromBufferAttribute(s,K),g.fromBufferAttribute(s,w),S.fromBufferAttribute(s,R),x.fromBufferAttribute(u,K),M.fromBufferAttribute(u,w),C.fromBufferAttribute(u,R),g.sub(p),S.sub(p),M.sub(x),C.sub(x);const B=1/(M.x*C.y-C.x*M.y);isFinite(B)&&(D.copy(g).multiplyScalar(C.y).addScaledVector(S,-M.y).multiplyScalar(B),y.copy(S).multiplyScalar(M.x).addScaledVector(g,-C.x).multiplyScalar(B),d[K].add(D),d[w].add(D),d[R].add(D),m[K].add(y),m[w].add(y),m[R].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,w=P.length;K<w;++K){const R=P[K],B=R.start,ct=R.count;for(let at=B,pt=B+ct;at<pt;at+=3)_(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const E=new Q,L=new Q,G=new Q,I=new Q;function F(K){G.fromBufferAttribute(l,K),I.copy(G);const w=d[K];E.copy(w),E.sub(G.multiplyScalar(G.dot(w))).normalize(),L.crossVectors(I,w);const B=L.dot(m[K])<0?-1:1;h.setXYZW(K,E.x,E.y,E.z,B)}for(let K=0,w=P.length;K<w;++K){const R=P[K],B=R.start,ct=R.count;for(let at=B,pt=B+ct;at<pt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new Q,u=new Q,h=new Q,d=new Q,m=new Q,p=new Q,g=new Q,S=new Q;if(t)for(let x=0,M=t.count;x<M;x+=3){const C=t.getX(x+0),D=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,y),g.subVectors(h,u),S.subVectors(l,u),g.cross(S),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(C,d.x,d.y,d.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),S.subVectors(l,u),g.cross(S),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)pn.fromBufferAttribute(t,i),pn.normalize(),t.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,S=d.normalized,x=new p.constructor(m.length*g);let M=0,C=0;for(let D=0,y=m.length;D<y;D++){d.isInterleavedBufferAttribute?M=m[D]*d.data.stride+d.offset:M=m[D]*g;for(let _=0;_<g;_++)x[C++]=p[M++]}return new Ui(x,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ha,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,S=p.length;g<S;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],S=u[p];for(let x=0,M=S.length;x<M;x++)g.push(S[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new Xe,cs=new u0,nc=new ud,cg=new Q,ic=new Q,ac=new Q,sc=new Q,nh=new Q,rc=new Q,ug=new Q,oc=new Q;class mn extends An{constructor(t=new Ha,i=new d0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],S=u[m];g!==0&&(nh.fromBufferAttribute(S,t),h?rc.addScaledVector(nh,g):rc.addScaledVector(nh.sub(i),g))}i.add(rc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nc.copy(s.boundingSphere),nc.applyMatrix4(u),cs.copy(t.ray).recast(t.near),!(nc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(nc,cg)===null||cs.origin.distanceToSquared(cg)>(t.far-t.near)**2))&&(lg.copy(u).invert(),cs.copy(t.ray).applyMatrix4(lg),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=h[y.materialIndex],P=Math.max(y.start,M.start),E=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let L=P,G=E;L<G;L+=3){const I=d.getX(L),F=d.getX(L+1),K=d.getX(L+2);l=lc(this,_,t,s,p,g,S,I,F,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,M.start),D=Math.min(d.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const P=d.getX(y),E=d.getX(y+1),L=d.getX(y+2);l=lc(this,h,t,s,p,g,S,P,E,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let C=0,D=x.length;C<D;C++){const y=x[C],_=h[y.materialIndex],P=Math.max(y.start,M.start),E=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=P,G=E;L<G;L+=3){const I=L,F=L+1,K=L+2;l=lc(this,_,t,s,p,g,S,I,F,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let y=C,_=D;y<_;y+=3){const P=y,E=y+1,L=y+2;l=lc(this,h,t,s,p,g,S,P,E,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Jx(o,t,i,s,l,u,h,d){let m;if(t.side===Hn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Ia,d),m===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:o}}function lc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,ic),o.getVertexPosition(m,ac),o.getVertexPosition(p,sc);const g=Jx(o,t,i,s,ic,ac,sc,ug);if(g){const S=new Q;vi.getBarycoord(ug,ic,ac,sc,S),l&&(g.uv=vi.getInterpolatedAttribute(l,d,m,p,S,new se)),u&&(g.uv1=vi.getInterpolatedAttribute(u,d,m,p,S,new se)),h&&(g.normal=vi.getInterpolatedAttribute(h,d,m,p,S,new Q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Q,materialIndex:0};vi.getNormal(ic,ac,sc,x.normal),g.face=x,g.barycoord=S}return g}class ys extends Ha{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],S=[];let x=0,M=0;C("z","y","x",-1,-1,s,i,t,h,u,0),C("z","y","x",1,-1,s,i,-t,h,u,1),C("x","z","y",1,1,t,s,i,l,h,2),C("x","z","y",1,-1,t,s,-i,l,h,3),C("x","y","z",1,-1,t,i,s,l,u,4),C("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Li(p,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(S,2));function C(D,y,_,P,E,L,G,I,F,K,w){const R=L/F,B=G/K,ct=L/2,at=G/2,pt=I/2,ht=F+1,X=K+1;let st=0,Y=0;const St=new Q;for(let U=0;U<X;U++){const J=U*B-at;for(let yt=0;yt<ht;yt++){const Tt=yt*R-ct;St[D]=Tt*P,St[y]=J*E,St[_]=pt,p.push(St.x,St.y,St.z),St[D]=0,St[y]=0,St[_]=I>0?1:-1,g.push(St.x,St.y,St.z),S.push(yt/F),S.push(1-U/K),st+=1}}for(let U=0;U<K;U++)for(let J=0;J<F;J++){const yt=x+J+ht*U,Tt=x+J+ht*(U+1),H=x+(J+1)+ht*(U+1),ot=x+(J+1)+ht*U;m.push(yt,Tt,ot),m.push(Tt,H,ot),Y+=6}d.addGroup(M,Y,w),M+=Y,x+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)t[l]=s[l]}return t}function $x(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function _0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const ty={clone:wr,merge:Nn};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=$x(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class g0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new Q,fg=new se,hg=new se;class Qn extends g0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,fg,hg),i.subVectors(hg,fg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(xc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hr=-90,dr=1;class iy extends An{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(hr,dr,t,i);l.layers=this.layers,this.add(l);const u=new Qn(hr,dr,t,i);u.layers=this.layers,this.add(u);const h=new Qn(hr,dr,t,i);h.layers=this.layers,this.add(h);const d=new Qn(hr,dr,t,i);d.layers=this.layers,this.add(d);const m=new Qn(hr,dr,t,i);m.layers=this.layers,this.add(m);const p=new Qn(hr,dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ec)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,S=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(S,x,M),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class v0 extends Gn{constructor(t,i,s,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Er,super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ay extends Ss{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new v0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ys(5,5,5),u=new Oi({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new mn(l,u),d=i.minFilter;return i.minFilter===gs&&(i.minFilter=Di),new iy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class cc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sy={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const D of t.hand.values()){const y=i.getJointPose(D,s),_=this._getHandJoint(p,D);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=g.position.distanceTo(S.position),M=.02,C=.005;p.inputState.pinching&&x>M+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new cc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class ry extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ah=new Q,oy=new Q,ly=new le;class Pa{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ah.subVectors(s,i).cross(oy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ah),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ly.getNormalMatrix(t),l=this.coplanarPoint(ah).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new ud,uc=new Q;class fd{constructor(t=new Pa,i=new Pa,s=new Pa,l=new Pa,u=new Pa,h=new Pa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],S=l[6],x=l[7],M=l[8],C=l[9],D=l[10],y=l[11],_=l[12],P=l[13],E=l[14],L=l[15];if(s[0].setComponents(m-u,x-p,y-M,L-_).normalize(),s[1].setComponents(m+u,x+p,y+M,L+_).normalize(),s[2].setComponents(m+h,x+g,y+C,L+P).normalize(),s[3].setComponents(m-h,x-g,y-C,L-P).normalize(),s[4].setComponents(m-d,x-S,y-D,L-E).normalize(),i===sa)s[5].setComponents(m+d,x+S,y+D,L+E).normalize();else if(i===Ec)s[5].setComponents(d,S,D,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(uc.x=l.normal.x>0?t.max.x:t.min.x,uc.y=l.normal.y>0?t.max.y:t.min.y,uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S0 extends Gn{constructor(t,i,s,l,u,h,d,m,p,g=xr){if(g!==xr&&g!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===xr&&(s=vs),s===void 0&&g===Ar&&(s=br),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:xi,this.minFilter=m!==void 0?m:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ri extends Ha{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,S=t/d,x=i/m,M=[],C=[],D=[],y=[];for(let _=0;_<g;_++){const P=_*x-h;for(let E=0;E<p;E++){const L=E*S-u;C.push(L,-P,0),D.push(0,0,1),y.push(E/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const E=P+p*_,L=P+p*(_+1),G=P+1+p*(_+1),I=P+1+p*_;M.push(E,L,I),M.push(L,G,I)}this.setIndex(M),this.setAttribute("position",new Li(C,3)),this.setAttribute("normal",new Li(D,3)),this.setAttribute("uv",new Li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.widthSegments,t.heightSegments)}}class hd extends Ha{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],S=new Q,x=new Q,M=[],C=[],D=[],y=[];for(let _=0;_<=s;_++){const P=[],E=_/s;let L=0;_===0&&h===0?L=.5/i:_===s&&m===Math.PI&&(L=-.5/i);for(let G=0;G<=i;G++){const I=G/i;S.x=-t*Math.cos(l+I*u)*Math.sin(h+E*d),S.y=t*Math.cos(h+E*d),S.z=t*Math.sin(l+I*u)*Math.sin(h+E*d),C.push(S.x,S.y,S.z),x.copy(S).normalize(),D.push(x.x,x.y,x.z),y.push(I+L,1-E),P.push(p++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const E=g[_][P+1],L=g[_][P],G=g[_+1][P],I=g[_+1][P+1];(_!==0||h>0)&&M.push(E,L,I),(_!==s-1||m<Math.PI)&&M.push(L,G,I)}this.setIndex(M),this.setAttribute("position",new Li(C,3)),this.setAttribute("normal",new Li(D,3)),this.setAttribute("uv",new Li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dg extends Io{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=s0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cy extends Io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uy extends Io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dd extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const sh=new Xe,pg=new Q,mg=new Q;class x0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fd,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;pg.setFromMatrixPosition(t.matrixWorld),i.position.copy(pg),mg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(mg),i.updateMatrixWorld(),sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _g=new Xe,Lo=new Q,rh=new Q;class fy extends x0{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Lo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Lo),rh.copy(s.position),rh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(rh),s.updateMatrixWorld(),l.makeTranslation(-Lo.x,-Lo.y,-Lo.z),_g.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_g)}}class gg extends dd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new fy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class y0 extends g0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hy extends x0{constructor(){super(new y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends dd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class py extends dd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class my extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class vg{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _y extends Ms{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Sg(o,t,i,s){const l=gy(s);switch(i){case Jg:return o*t;case t0:return o*t;case e0:return o*t*2;case n0:return o*t/l.components*l.byteLength;case od:return o*t/l.components*l.byteLength;case i0:return o*t*2/l.components*l.byteLength;case ld:return o*t*2/l.components*l.byteLength;case $g:return o*t*3/l.components*l.byteLength;case Si:return o*t*4/l.components*l.byteLength;case cd:return o*t*4/l.components*l.byteLength;case mc:case _c:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case gc:case vc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wh:case Dh:return Math.max(o,16)*Math.max(t,8)/4;case Rh:case Ch:return Math.max(o,8)*Math.max(t,8)/2;case Uh:case Lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sc:case jh:case Zh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case a0:case Kh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gy(o){switch(o){case oa:case Zg:return{byteLength:1,components:1};case Po:case Kg:case zo:return{byteLength:2,components:1};case sd:case rd:return{byteLength:2,components:4};case vs:case ad:case aa:return{byteLength:4,components:1};case Qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function M0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function vy(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,m,p){const g=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,g);else{S.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<S.length;M++){const C=S[x],D=S[M];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++x,S[x]=D)}S.length=x+1;for(let M=0,C=S.length;M<C;M++){const D=S[M];o.bufferSubData(p,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
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
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,My=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,by=`#ifdef USE_AOMAP
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
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vy=`#define PI 3.141592653589793
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
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xy=`vec3 transformedNormal = objectNormal;
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
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,fM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,vM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
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
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bE=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AE=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,RE=`#define DISTANCE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,NE=`uniform vec3 diffuse;
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
}`,OE=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,PE=`#define LAMBERT
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
}`,zE=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,BE=`#define MATCAP
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
}`,FE=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,IE=`#define NORMAL
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
}`,HE=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,GE=`#define PHONG
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
}`,VE=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,kE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,XE=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,WE=`#define TOON
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
}`,qE=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,YE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ZE=`uniform vec3 color;
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
}`,KE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,QE=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Sy,alphahash_pars_fragment:xy,alphamap_fragment:yy,alphamap_pars_fragment:My,alphatest_fragment:Ey,alphatest_pars_fragment:Ty,aomap_fragment:by,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:wy,begin_vertex:Cy,beginnormal_vertex:Dy,bsdfs:Uy,iridescence_fragment:Ly,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Oy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:zy,clipping_planes_vertex:By,color_fragment:Fy,color_pars_fragment:Iy,color_pars_vertex:Hy,color_vertex:Gy,common:Vy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:Xy,displacementmap_pars_vertex:Wy,displacementmap_vertex:qy,emissivemap_fragment:Yy,emissivemap_pars_fragment:jy,colorspace_fragment:Zy,colorspace_pars_fragment:Ky,envmap_fragment:Qy,envmap_common_pars_fragment:Jy,envmap_pars_fragment:$y,envmap_pars_vertex:tM,envmap_physical_pars_fragment:fM,envmap_vertex:eM,fog_vertex:nM,fog_pars_vertex:iM,fog_fragment:aM,fog_pars_fragment:sM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:oM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:cM,lights_pars_begin:uM,lights_toon_fragment:hM,lights_toon_pars_fragment:dM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:_M,lights_physical_pars_fragment:gM,lights_fragment_begin:vM,lights_fragment_maps:SM,lights_fragment_end:xM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:TM,map_fragment:bM,map_pars_fragment:AM,map_particle_fragment:RM,map_particle_pars_fragment:wM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:DM,morphinstance_vertex:UM,morphcolor_vertex:LM,morphnormal_vertex:NM,morphtarget_pars_vertex:OM,morphtarget_vertex:PM,normal_fragment_begin:zM,normal_fragment_maps:BM,normal_pars_fragment:FM,normal_pars_vertex:IM,normal_vertex:HM,normalmap_pars_fragment:GM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:WM,opaque_fragment:qM,packing:YM,premultiplied_alpha_fragment:jM,project_vertex:ZM,dithering_fragment:KM,dithering_pars_fragment:QM,roughnessmap_fragment:JM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:eE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:aE,skinning_pars_vertex:sE,skinning_vertex:rE,skinnormal_vertex:oE,specularmap_fragment:lE,specularmap_pars_fragment:cE,tonemapping_fragment:uE,tonemapping_pars_fragment:fE,transmission_fragment:hE,transmission_pars_fragment:dE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:_E,worldpos_vertex:gE,background_vert:vE,background_frag:SE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:ME,cube_frag:EE,depth_vert:TE,depth_frag:bE,distanceRGBA_vert:AE,distanceRGBA_frag:RE,equirect_vert:wE,equirect_frag:CE,linedashed_vert:DE,linedashed_frag:UE,meshbasic_vert:LE,meshbasic_frag:NE,meshlambert_vert:OE,meshlambert_frag:PE,meshmatcap_vert:zE,meshmatcap_frag:BE,meshnormal_vert:FE,meshnormal_frag:IE,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:VE,meshphysical_frag:kE,meshtoon_vert:XE,meshtoon_frag:WE,points_vert:qE,points_frag:YE,shadow_vert:jE,shadow_frag:ZE,sprite_vert:KE,sprite_frag:QE},Ut={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const fc={r:0,b:0,g:0},fs=new Ni,JE=new Xe;function $E(o,t,i,s,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,g,S=null,x=0,M=null;function C(E){let L=E.isScene===!0?E.background:null;return L&&L.isTexture&&(L=(E.backgroundBlurriness>0?i:t).get(L)),L}function D(E){let L=!1;const G=C(E);G===null?_(d,m):G&&G.isColor&&(_(G,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(E,L){const G=C(L);G&&(G.isCubeTexture||G.mapping===bc)?(g===void 0&&(g=new mn(new ys(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:wr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fs.copy(L.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(fs)),g.material.toneMapped=Re.getTransfer(G.colorSpace)!==Oe,(S!==G||x!==G.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=G,x=G.version,M=o.toneMapping),g.layers.enableAll(),E.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new mn(new Ri(2,2),new Oi({name:"BackgroundMaterial",uniforms:wr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Re.getTransfer(G.colorSpace)!==Oe,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(S!==G||x!==G.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=G,x=G.version,M=o.toneMapping),p.layers.enableAll(),E.unshift(p,p.geometry,p.material,0,0,null))}function _(E,L){E.getRGB(fc,_0(o)),s.buffers.color.setClear(fc.r,fc.g,fc.b,L,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(E,L=1){d.set(E),m=L,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(E){m=E,_(d,m)},render:D,addToRenderList:y,dispose:P}}function tT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(R,B,ct,at,pt){let ht=!1;const X=S(at,ct,B);u!==X&&(u=X,p(u.object)),ht=M(R,at,ct,pt),ht&&C(R,at,ct,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,L(R,B,ct,at),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function S(R,B,ct){const at=ct.wireframe===!0;let pt=s[R.id];pt===void 0&&(pt={},s[R.id]=pt);let ht=pt[B.id];ht===void 0&&(ht={},pt[B.id]=ht);let X=ht[at];return X===void 0&&(X=x(m()),ht[at]=X),X}function x(R){const B=[],ct=[],at=[];for(let pt=0;pt<i;pt++)B[pt]=0,ct[pt]=0,at[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ct,attributeDivisors:at,object:R,attributes:{},index:null}}function M(R,B,ct,at){const pt=u.attributes,ht=B.attributes;let X=0;const st=ct.getAttributes();for(const Y in st)if(st[Y].location>=0){const U=pt[Y];let J=ht[Y];if(J===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;X++}return u.attributesNum!==X||u.index!==at}function C(R,B,ct,at){const pt={},ht=B.attributes;let X=0;const st=ct.getAttributes();for(const Y in st)if(st[Y].location>=0){let U=ht[Y];U===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),pt[Y]=J,X++}u.attributes=pt,u.attributesNum=X,u.index=at}function D(){const R=u.newAttributes;for(let B=0,ct=R.length;B<ct;B++)R[B]=0}function y(R){_(R,0)}function _(R,B){const ct=u.newAttributes,at=u.enabledAttributes,pt=u.attributeDivisors;ct[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),pt[R]!==B&&(o.vertexAttribDivisor(R,B),pt[R]=B)}function P(){const R=u.newAttributes,B=u.enabledAttributes;for(let ct=0,at=B.length;ct<at;ct++)B[ct]!==R[ct]&&(o.disableVertexAttribArray(ct),B[ct]=0)}function E(R,B,ct,at,pt,ht,X){X===!0?o.vertexAttribIPointer(R,B,ct,pt,ht):o.vertexAttribPointer(R,B,ct,at,pt,ht)}function L(R,B,ct,at){D();const pt=at.attributes,ht=ct.getAttributes(),X=B.defaultAttributeValues;for(const st in ht){const Y=ht[st];if(Y.location>=0){let St=pt[st];if(St===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const U=St.normalized,J=St.itemSize,yt=t.get(St);if(yt===void 0)continue;const Tt=yt.buffer,H=yt.type,ot=yt.bytesPerElement,gt=H===o.INT||H===o.UNSIGNED_INT||St.gpuType===ad;if(St.isInterleavedBufferAttribute){const bt=St.data,Rt=bt.stride,Kt=St.offset;if(bt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Y.locationSize;Pt++)_(Y.location+Pt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Pt=0;Pt<Y.locationSize;Pt++)y(Y.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Pt=0;Pt<Y.locationSize;Pt++)E(Y.location+Pt,J/Y.locationSize,H,U,Rt*ot,(Kt+J/Y.locationSize*Pt)*ot,gt)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<Y.locationSize;bt++)_(Y.location+bt,St.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<Y.locationSize;bt++)y(Y.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let bt=0;bt<Y.locationSize;bt++)E(Y.location+bt,J/Y.locationSize,H,U,J*ot,J/Y.locationSize*bt*ot,gt)}}else if(X!==void 0){const U=X[st];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}P()}function G(){K();for(const R in s){const B=s[R];for(const ct in B){const at=B[ct];for(const pt in at)g(at[pt].object),delete at[pt];delete B[ct]}delete s[R]}}function I(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const ct in B){const at=B[ct];for(const pt in at)g(at[pt].object),delete at[pt];delete B[ct]}delete s[R.id]}function F(R){for(const B in s){const ct=s[B];if(ct[R.id]===void 0)continue;const at=ct[R.id];for(const pt in at)g(at[pt].object),delete at[pt];delete ct[R.id]}}function K(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:D,enableAttribute:y,disableUnusedAttributes:P}}function eT(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,S){S!==0&&(o.drawArraysInstanced(s,p,g,S),i.update(g,s,S))}function d(p,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,S);let M=0;for(let C=0;C<S;C++)M+=g[C];i.update(M,s,1)}function m(p,g,S,x){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let C=0;C<p.length;C++)h(p[C],g[C],x[C]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,S);let C=0;for(let D=0;D<S;D++)C+=g[D]*x[D];i.update(C,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function nT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Si&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==oa&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==aa&&!K)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),E=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=C>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:E,maxFragmentUniforms:L,vertexTextures:G,maxSamples:I}}function iT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Pa,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||s!==0||l;return l=x,s=S.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){i=g(S,x,0)},this.setState=function(S,x,M){const C=S.clippingPlanes,D=S.clipIntersection,y=S.clipShadows,_=o.get(S);if(!l||C===null||C.length===0||u&&!y)u?g(null):p();else{const P=u?0:s,E=P*4;let L=_.clippingState||null;m.value=L,L=g(C,x,E,M);for(let G=0;G!==E;++G)L[G]=i[G];_.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(S,x,M,C){const D=S!==null?S.length:0;let y=null;if(D!==0){if(y=m.value,C!==!0||y===null){const _=M+D*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let E=0,L=M;E!==D;++E,L+=4)h.copy(S[E]).applyMatrix4(P,d),h.normal.toArray(y,L),y[L+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,y}}function aT(o){let t=new WeakMap;function i(h,d){return d===Eh?h.mapping=Er:d===Th&&(h.mapping=Tr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Eh||d===Th)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new ay(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const gr=4,xg=[.125,.215,.35,.446,.526,.582],ms=20,oh=new y0,yg=new ye;let lh=null,ch=0,uh=0,fh=!1;const ds=(1+Math.sqrt(5))/2,pr=1/ds,Mg=[new Q(-ds,pr,0),new Q(ds,pr,0),new Q(-pr,0,ds),new Q(pr,0,ds),new Q(0,ds,-pr),new Q(0,ds,pr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Eg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,t.scissorTest=!1,hc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:zo,format:Si,colorSpace:Rr,depthBuffer:!1},l=Tg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(u)),this._blurMaterial=rT(u,t,i)}return l}_compileMaterial(t){const i=new mn(this._lodPlanes[0],t);this._renderer.compile(i,oh)}_sceneToCubeUV(t,i,s,l){const d=new Qn(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(yg),g.toneMapping=Fa,g.autoClear=!1;const M=new d0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),C=new mn(new ys,M);let D=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,D=!0):(M.color.copy(yg),D=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):P===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const E=this._cubeSize;hc(l,P*E,_>2?E:0,E,E),g.setRenderTarget(l),D&&g.render(C,d),g.render(t,d)}C.geometry.dispose(),C.material.dispose(),g.toneMapping=x,g.autoClear=S,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Er||t.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new mn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;hc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,oh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Mg[(l-u-1)%Mg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new mn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,C=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ms-1),D=u/C,y=isFinite(u)?1+Math.floor(g*D):ms;y>ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ms}`);const _=[];let P=0;for(let F=0;F<ms;++F){const K=F/D,w=Math.exp(-K*K/2);_.push(w),F===0?P+=w:F<y&&(P+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:E}=this;x.dTheta.value=C,x.mipInt.value=E-s;const L=this._sizeLods[l],G=3*L*(l>E-gr?l-E+gr:0),I=4*(this._cubeSize-L);hc(i,G,I,3*L,2*L),m.setRenderTarget(i),m.render(S,oh)}}function sT(o){const t=[],i=[],s=[];let l=o;const u=o-gr+1+xg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-gr?m=xg[h-o+gr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,S=1+p,x=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,C=6,D=3,y=2,_=1,P=new Float32Array(D*C*M),E=new Float32Array(y*C*M),L=new Float32Array(_*C*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,K=I>2?0:-1,w=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];P.set(w,D*C*I),E.set(x,y*C*I);const R=[I,I,I,I,I,I];L.set(R,_*C*I)}const G=new Ha;G.setAttribute("position",new Ui(P,D)),G.setAttribute("uv",new Ui(E,y)),G.setAttribute("faceIndex",new Ui(L,_)),t.push(G),l>gr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Tg(o,t,i){const s=new Ss(o,t,i);return s.texture.mapping=bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function hc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function rT(o,t,i){const s=new Float32Array(ms),l=new Q(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function bg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Ag(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function pd(){return`

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
	`}function oT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Eh||m===Th,g=m===Er||m===Tr;if(p||g){let S=t.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Eg(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,t.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Eg(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,t.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function lT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&mr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function cT(o,t,i,s){const l={},u=new WeakMap;function h(S){const x=S.target;x.index!==null&&t.remove(x.index);for(const C in x.attributes)t.remove(x.attributes[C]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,C=S.attributes.position;let D=0;if(M!==null){const P=M.array;D=M.version;for(let E=0,L=P.length;E<L;E+=3){const G=P[E+0],I=P[E+1],F=P[E+2];x.push(G,I,I,F,F,G)}}else if(C!==void 0){const P=C.array;D=C.version;for(let E=0,L=P.length/3-1;E<L;E+=3){const G=E+0,I=E+1,F=E+2;x.push(G,I,I,F,F,G)}}else return;const y=new(o0(x)?m0:p0)(x,1);y.version=D;const _=u.get(S);_&&t.remove(_),u.set(S,y)}function g(S){const x=u.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:d,update:m,getWireframeAttribute:g}}function uT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,C){C!==0&&(o.drawElementsInstanced(s,M,u,x*h,C),i.update(M,s,C))}function g(x,M,C){if(C===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,C);let y=0;for(let _=0;_<C;_++)y+=M[_];i.update(y,s,1)}function S(x,M,C,D){if(C===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],D[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,D,0,C);let _=0;for(let P=0;P<C;P++)_+=M[P]*D[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function fT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function hT(o,t,i){const s=new WeakMap,l=new ze;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==S){let R=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const C=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],E=d.morphAttributes.color||[];let L=0;C===!0&&(L=1),D===!0&&(L=2),y===!0&&(L=3);let G=d.attributes.position.count*L,I=1;G>t.maxTextureSize&&(I=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*I*4*S),K=new c0(F,G,I,S);K.type=aa,K.needsUpdate=!0;const w=L*4;for(let B=0;B<S;B++){const ct=_[B],at=P[B],pt=E[B],ht=G*I*4*B;for(let X=0;X<ct.count;X++){const st=X*w;C===!0&&(l.fromBufferAttribute(ct,X),F[ht+st+0]=l.x,F[ht+st+1]=l.y,F[ht+st+2]=l.z,F[ht+st+3]=0),D===!0&&(l.fromBufferAttribute(at,X),F[ht+st+4]=l.x,F[ht+st+5]=l.y,F[ht+st+6]=l.z,F[ht+st+7]=0),y===!0&&(l.fromBufferAttribute(pt,X),F[ht+st+8]=l.x,F[ht+st+9]=l.y,F[ht+st+10]=l.z,F[ht+st+11]=pt.itemSize===4?l.w:1)}}x={count:S,texture:K,size:new se(G,I)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let C=0;for(let y=0;y<p.length;y++)C+=p[y];const D=d.morphTargetsRelative?1:1-C;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function dT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,S=t.get(m,g);if(l.get(S)!==p&&(t.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const E0=new Gn,Rg=new S0(1,1),T0=new c0,b0=new Gx,A0=new v0,wg=[],Cg=[],Dg=new Float32Array(16),Ug=new Float32Array(9),Lg=new Float32Array(4);function Cr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=wg[l];if(u===void 0&&(u=new Float32Array(l),wg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function ln(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Ac(o,t){let i=Cg[t];i===void 0&&(i=new Int32Array(t),Cg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function pT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2fv(this.addr,t),cn(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;o.uniform3fv(this.addr,t),cn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4fv(this.addr,t),cn(i,t)}}function vT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Lg.set(s),o.uniformMatrix2fv(this.addr,!1,Lg),cn(i,s)}}function ST(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Ug.set(s),o.uniformMatrix3fv(this.addr,!1,Ug),cn(i,s)}}function xT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Dg.set(s),o.uniformMatrix4fv(this.addr,!1,Dg),cn(i,s)}}function yT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2iv(this.addr,t),cn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3iv(this.addr,t),cn(i,t)}}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4iv(this.addr,t),cn(i,t)}}function bT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2uiv(this.addr,t),cn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3uiv(this.addr,t),cn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4uiv(this.addr,t),cn(i,t)}}function CT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Rg.compareFunction=r0,u=Rg):u=E0,i.setTexture2D(t||u,l)}function DT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||b0,l)}function UT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||A0,l)}function LT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||T0,l)}function NT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return _T;case 35666:return gT;case 35674:return vT;case 35675:return ST;case 35676:return xT;case 5124:case 35670:return yT;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return bT;case 36294:return AT;case 36295:return RT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}function OT(o,t){o.uniform1fv(this.addr,t)}function PT(o,t){const i=Cr(t,this.size,2);o.uniform2fv(this.addr,i)}function zT(o,t){const i=Cr(t,this.size,3);o.uniform3fv(this.addr,i)}function BT(o,t){const i=Cr(t,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,t){const i=Cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function IT(o,t){const i=Cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function HT(o,t){const i=Cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function GT(o,t){o.uniform1iv(this.addr,t)}function VT(o,t){o.uniform2iv(this.addr,t)}function kT(o,t){o.uniform3iv(this.addr,t)}function XT(o,t){o.uniform4iv(this.addr,t)}function WT(o,t){o.uniform1uiv(this.addr,t)}function qT(o,t){o.uniform2uiv(this.addr,t)}function YT(o,t){o.uniform3uiv(this.addr,t)}function jT(o,t){o.uniform4uiv(this.addr,t)}function ZT(o,t,i){const s=this.cache,l=t.length,u=Ac(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||E0,u[h])}function KT(o,t,i){const s=this.cache,l=t.length,u=Ac(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||b0,u[h])}function QT(o,t,i){const s=this.cache,l=t.length,u=Ac(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||A0,u[h])}function JT(o,t,i){const s=this.cache,l=t.length,u=Ac(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||T0,u[h])}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return BT;case 35674:return FT;case 35675:return IT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=NT(i.type)}}class eb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$T(i.type)}}class nb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function Ng(o,t){o.seq.push(t),o.map[t.id]=t}function ib(o,t,i){const s=o.name,l=s.length;for(hh.lastIndex=0;;){const u=hh.exec(s),h=hh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Ng(i,p===void 0?new tb(d,o,t):new eb(d,o,t));break}else{let S=i.map[d];S===void 0&&(S=new nb(d),Ng(i,S)),i=S}}}class yc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);ib(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Og(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const ab=37297;let sb=0;function rb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Pg=new le;function ob(o){Re._getMatrix(Pg,Re.workingColorSpace,o);const t=`mat3( ${Pg.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Mc:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function zg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+rb(o.getShaderSource(t),h)}else return l}function lb(o,t){const i=ob(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cb(o,t){let i;switch(t){case hx:i="Linear";break;case dx:i="Reinhard";break;case px:i="Cineon";break;case mx:i="ACESFilmic";break;case gx:i="AgX";break;case vx:i="Neutral";break;case _x:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new Q;function ub(){Re.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),t=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function hb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function db(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Oo(o){return o!==""}function Bg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(o){return o.replace(pb,_b)}const mb=new Map;function _b(o,t){let i=ce[t];if(i===void 0){const s=mb.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return td(i)}const gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(o){return o.replace(gb,vb)}function vb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Hg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
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
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===WS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function xb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function Mb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case id:t="ENVMAP_BLENDING_MULTIPLY";break;case ux:t="ENVMAP_BLENDING_MIX";break;case fx:t="ENVMAP_BLENDING_ADD";break}return t}function Eb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Tb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Sb(i),p=xb(i),g=yb(i),S=Mb(i),x=Eb(i),M=fb(i),C=hb(u),D=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Oo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(y=[Hg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[Hg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ce.tonemapping_pars_fragment:"",i.toneMapping!==Fa?cb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,lb("linearToOutputTexel",i.outputColorSpace),ub(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=td(h),h=Bg(h,i),h=Fg(h,i),d=td(d),d=Bg(d,i),d=Fg(d,i),h=Ig(h),d=Ig(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=P+y+h,L=P+_+d,G=Og(l,l.VERTEX_SHADER,E),I=Og(l,l.FRAGMENT_SHADER,L);l.attachShader(D,G),l.attachShader(D,I),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function F(B){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(D).trim(),at=l.getShaderInfoLog(G).trim(),pt=l.getShaderInfoLog(I).trim();let ht=!0,X=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,G,I);else{const st=zg(l,G,"vertex"),Y=zg(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ct+`
`+st+`
`+Y)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(at===""||pt==="")&&(X=!1);X&&(B.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:at,prefix:y},fragmentShader:{log:pt,prefix:_}})}l.deleteShader(G),l.deleteShader(I),K=new yc(l,D),w=db(l,D)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(D,ab)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sb++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=G,this.fragmentShader=I,this}let bb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Rb(t),i.set(t,s)),s}}class Rb{constructor(t){this.id=bb++,this.code=t,this.usedTimes=0}}function wb(o,t,i,s,l,u,h){const d=new f0,m=new Ab,p=new Set,g=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,B,ct,at){const pt=ct.fog,ht=at.geometry,X=w.isMeshStandardMaterial?ct.environment:null,st=(w.isMeshStandardMaterial?i:t).get(w.envMap||X),Y=st&&st.mapping===bc?st.image.height:null,St=C[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,J=U!==void 0?U.length:0;let yt=0;ht.morphAttributes.position!==void 0&&(yt=1),ht.morphAttributes.normal!==void 0&&(yt=2),ht.morphAttributes.color!==void 0&&(yt=3);let Tt,H,ot,gt;if(St){const Ee=wi[St];Tt=Ee.vertexShader,H=Ee.fragmentShader}else Tt=w.vertexShader,H=w.fragmentShader,m.update(w),ot=m.getVertexShaderID(w),gt=m.getFragmentShaderID(w);const bt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=at.isInstancedMesh===!0,Pt=at.isBatchedMesh===!0,Me=!!w.map,we=!!w.matcap,ie=!!st,z=!!w.aoMap,_n=!!w.lightMap,re=!!w.bumpMap,fe=!!w.normalMap,kt=!!w.displacementMap,Ce=!!w.emissiveMap,Xt=!!w.metalnessMap,N=!!w.roughnessMap,T=w.anisotropy>0,nt=w.clearcoat>0,ft=w.dispersion>0,xt=w.iridescence>0,dt=w.sheen>0,Ht=w.transmission>0,Ct=T&&!!w.anisotropyMap,zt=nt&&!!w.clearcoatMap,me=nt&&!!w.clearcoatNormalMap,Et=nt&&!!w.clearcoatRoughnessMap,Bt=xt&&!!w.iridescenceMap,qt=xt&&!!w.iridescenceThicknessMap,Gt=dt&&!!w.sheenColorMap,Ft=dt&&!!w.sheenRoughnessMap,ae=!!w.specularMap,jt=!!w.specularColorMap,De=!!w.specularIntensityMap,W=Ht&&!!w.transmissionMap,Lt=Ht&&!!w.thicknessMap,rt=!!w.gradientMap,_t=!!w.alphaMap,wt=w.alphaTest>0,Dt=!!w.alphaHash,Jt=!!w.extensions;let Ge=Fa;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ge=o.toneMapping);const tn={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:Tt,fragmentShader:H,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Pt,batchingColor:Pt&&at._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&at.instanceColor!==null,instancingMorph:Kt&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:Me,matcap:we,envMap:ie,envMapMode:ie&&st.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:_n,bumpMap:re,normalMap:fe,displacementMap:x&&kt,emissiveMap:Ce,normalMapObjectSpace:fe&&w.normalMapType===Mx,normalMapTangentSpace:fe&&w.normalMapType===s0,metalnessMap:Xt,roughnessMap:N,anisotropy:T,anisotropyMap:Ct,clearcoat:nt,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:Et,dispersion:ft,iridescence:xt,iridescenceMap:Bt,iridescenceThicknessMap:qt,sheen:dt,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:jt,specularIntensityMap:De,transmission:Ht,transmissionMap:W,thicknessMap:Lt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===Sr&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Dt,combine:w.combine,mapUv:Me&&D(w.map.channel),aoMapUv:z&&D(w.aoMap.channel),lightMapUv:_n&&D(w.lightMap.channel),bumpMapUv:re&&D(w.bumpMap.channel),normalMapUv:fe&&D(w.normalMap.channel),displacementMapUv:kt&&D(w.displacementMap.channel),emissiveMapUv:Ce&&D(w.emissiveMap.channel),metalnessMapUv:Xt&&D(w.metalnessMap.channel),roughnessMapUv:N&&D(w.roughnessMap.channel),anisotropyMapUv:Ct&&D(w.anisotropyMap.channel),clearcoatMapUv:zt&&D(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&D(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&D(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&D(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&D(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&D(w.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&D(w.sheenRoughnessMap.channel),specularMapUv:ae&&D(w.specularMap.channel),specularColorMapUv:jt&&D(w.specularColorMap.channel),specularIntensityMapUv:De&&D(w.specularIntensityMap.channel),transmissionMapUv:W&&D(w.transmissionMap.channel),thicknessMapUv:Lt&&D(w.thicknessMap.channel),alphaMapUv:_t&&D(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(fe||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(Me||_t),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Rt,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:yt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ci,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||Pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)R.push(B),R.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(P(R,w),E(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function P(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function E(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function L(w){const R=C[w.type];let B;if(R){const ct=wi[R];B=ty.clone(ct.uniforms)}else B=w.uniforms;return B}function G(w,R){let B;for(let ct=0,at=g.length;ct<at;ct++){const pt=g[ct];if(pt.cacheKey===R){B=pt,++B.usedTimes;break}}return B===void 0&&(B=new Tb(o,R,w,u),g.push(B)),B}function I(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:L,acquireProgram:G,releaseProgram:I,releaseShaderCache:F,programs:g,dispose:K}}function Cb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Db(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Vg(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(S,x,M,C,D,y){let _=o[t];return _===void 0?(_={id:S.id,object:S,geometry:x,material:M,groupOrder:C,renderOrder:S.renderOrder,z:D,group:y},o[t]=_):(_.id=S.id,_.object=S,_.geometry=x,_.material=M,_.groupOrder=C,_.renderOrder=S.renderOrder,_.z=D,_.group=y),t++,_}function d(S,x,M,C,D,y){const _=h(S,x,M,C,D,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(S,x,M,C,D,y){const _=h(S,x,M,C,D,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(S,x){i.length>1&&i.sort(S||Db),s.length>1&&s.sort(x||Gg),l.length>1&&l.sort(x||Gg)}function g(){for(let S=t,x=o.length;S<x;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Ub(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Vg,o.set(s,[h])):l>=u.length?(h=new Vg,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Lb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new ye};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[t.id]=i,i}}}function Nb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Ob=0;function Pb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function zb(o){const t=new Lb,i=Nb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,u=new Xe,h=new Xe;function d(p){let g=0,S=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,C=0,D=0,y=0,_=0,P=0,E=0,L=0,G=0,I=0,F=0;p.sort(Pb);for(let w=0,R=p.length;w<R;w++){const B=p[w],ct=B.color,at=B.intensity,pt=B.distance,ht=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ct.r*at,S+=ct.g*at,x+=ct.b*at;else if(B.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(B.sh.coefficients[X],at);F++}else if(B.isDirectionalLight){const X=t.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const st=B.shadow,Y=i.get(B);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=B.shadow.matrix,P++}s.directional[M]=X,M++}else if(B.isSpotLight){const X=t.get(B);X.position.setFromMatrixPosition(B.matrixWorld),X.color.copy(ct).multiplyScalar(at),X.distance=pt,X.coneCos=Math.cos(B.angle),X.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),X.decay=B.decay,s.spot[D]=X;const st=B.shadow;if(B.map&&(s.spotLightMap[G]=B.map,G++,st.updateMatrices(B),B.castShadow&&I++),s.spotLightMatrix[D]=st.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,s.spotShadow[D]=Y,s.spotShadowMap[D]=ht,L++}D++}else if(B.isRectAreaLight){const X=t.get(B);X.color.copy(ct).multiplyScalar(at),X.halfWidth.set(B.width*.5,0,0),X.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=X,y++}else if(B.isPointLight){const X=t.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),X.distance=B.distance,X.decay=B.decay,B.castShadow){const st=B.shadow,Y=i.get(B);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,Y.shadowCameraNear=st.camera.near,Y.shadowCameraFar=st.camera.far,s.pointShadow[C]=Y,s.pointShadowMap[C]=ht,s.pointShadowMatrix[C]=B.shadow.matrix,E++}s.point[C]=X,C++}else if(B.isHemisphereLight){const X=t.get(B);X.skyColor.copy(B.color).multiplyScalar(at),X.groundColor.copy(B.groundColor).multiplyScalar(at),s.hemi[_]=X,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=S,s.ambient[2]=x;const K=s.hash;(K.directionalLength!==M||K.pointLength!==C||K.spotLength!==D||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==P||K.numPointShadows!==E||K.numSpotShadows!==L||K.numSpotMaps!==G||K.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=D,s.rectArea.length=y,s.point.length=C,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=L+G-I,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,K.directionalLength=M,K.pointLength=C,K.spotLength=D,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=P,K.numPointShadows=E,K.numSpotShadows=L,K.numSpotMaps=G,K.numLightProbes=F,s.version=Ob++)}function m(p,g){let S=0,x=0,M=0,C=0,D=0;const y=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const E=p[_];if(E.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(E.matrixWorld),l.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),S++}else if(E.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(E.matrixWorld),l.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(E.isRectAreaLight){const L=s.rectArea[C];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(y),h.identity(),u.copy(E.matrixWorld),u.premultiply(y),h.extractRotation(u),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),C++}else if(E.isPointLight){const L=s.point[x];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(y),x++}else if(E.isHemisphereLight){const L=s.hemi[D];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(y),D++}}}return{setup:d,setupView:m,state:s}}function kg(o){const t=new zb(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Bb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new kg(o),t.set(l,[d])):u>=h.length?(d=new kg(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
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
}`;function Hb(o,t,i){let s=new fd;const l=new se,u=new se,h=new ze,d=new cy({depthPacking:yx}),m=new uy,p={},g=i.maxTextureSize,S={[Ia]:Hn,[Hn]:Ia,[Ci]:Ci},x=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Fb,fragmentShader:Ib}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new Ha;C.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new mn(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let _=this.type;this.render=function(I,F,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Ba),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const at=_!==ia&&this.type===ia,pt=_===ia&&this.type!==ia;for(let ht=0,X=I.length;ht<X;ht++){const st=I[ht],Y=st.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const St=Y.getFrameExtents();if(l.multiply(St),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,Y.mapSize.y=u.y)),Y.map===null||at===!0||pt===!0){const J=this.type!==ia?{minFilter:xi,magFilter:xi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ss(l.x,l.y,J),Y.map.texture.name=st.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let J=0;J<U;J++){const yt=Y.getViewport(J);h.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),ct.viewport(h),Y.updateMatrices(st,J),s=Y.getFrustum(),L(F,K,Y.camera,st,this.type)}Y.isPointLightShadow!==!0&&this.type===ia&&P(Y,K),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,B)};function P(I,F){const K=t.update(D);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ss(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(F,null,K,x,D,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(F,null,K,M,D,null)}function E(I,F,K,w){let R=null;const B=K.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)R=B;else if(R=K.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ct=R.uuid,at=F.uuid;let pt=p[ct];pt===void 0&&(pt={},p[ct]=pt);let ht=pt[at];ht===void 0&&(ht=R.clone(),pt[at]=ht,F.addEventListener("dispose",G)),R=ht}if(R.visible=F.visible,R.wireframe=F.wireframe,w===ia?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:S[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ct=o.properties.get(R);ct.light=K}return R}function L(I,F,K,w,R){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===ia)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld);const at=t.update(I),pt=I.material;if(Array.isArray(pt)){const ht=at.groups;for(let X=0,st=ht.length;X<st;X++){const Y=ht[X],St=pt[Y.materialIndex];if(St&&St.visible){const U=E(I,St,w,R);I.onBeforeShadow(o,I,F,K,at,U,Y),o.renderBufferDirect(K,null,at,U,I,Y),I.onAfterShadow(o,I,F,K,at,U,Y)}}}else if(pt.visible){const ht=E(I,pt,w,R);I.onBeforeShadow(o,I,F,K,at,ht,null),o.renderBufferDirect(K,null,at,ht,I,null),I.onAfterShadow(o,I,F,K,at,ht,null)}}const ct=I.children;for(let at=0,pt=ct.length;at<pt;at++)L(ct[at],F,K,w,R)}function G(I){I.target.removeEventListener("dispose",G);for(const K in p){const w=p[K],R=I.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const Gb={[_h]:gh,[vh]:yh,[Sh]:Mh,[Mr]:xh,[gh]:_h,[yh]:vh,[Mh]:Sh,[xh]:Mr};function Vb(o,t){function i(){let W=!1;const Lt=new ze;let rt=null;const _t=new ze(0,0,0,0);return{setMask:function(wt){rt!==wt&&!W&&(o.colorMask(wt,wt,wt,wt),rt=wt)},setLocked:function(wt){W=wt},setClear:function(wt,Dt,Jt,Ge,tn){tn===!0&&(wt*=Ge,Dt*=Ge,Jt*=Ge),Lt.set(wt,Dt,Jt,Ge),_t.equals(Lt)===!1&&(o.clearColor(wt,Dt,Jt,Ge),_t.copy(Lt))},reset:function(){W=!1,rt=null,_t.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,rt=null,_t=null,wt=null;return{setReversed:function(Dt){if(Lt!==Dt){const Jt=t.get("EXT_clip_control");Lt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ge=wt;wt=null,this.setClear(Ge)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?bt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){rt!==Dt&&!W&&(o.depthMask(Dt),rt=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Gb[Dt]),_t!==Dt){switch(Dt){case _h:o.depthFunc(o.NEVER);break;case gh:o.depthFunc(o.ALWAYS);break;case vh:o.depthFunc(o.LESS);break;case Mr:o.depthFunc(o.LEQUAL);break;case Sh:o.depthFunc(o.EQUAL);break;case xh:o.depthFunc(o.GEQUAL);break;case yh:o.depthFunc(o.GREATER);break;case Mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){W=Dt},setClear:function(Dt){wt!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),wt=Dt)},reset:function(){W=!1,rt=null,_t=null,wt=null,Lt=!1}}}function l(){let W=!1,Lt=null,rt=null,_t=null,wt=null,Dt=null,Jt=null,Ge=null,tn=null;return{setTest:function(Ee){W||(Ee?bt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!W&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,Rn,wn){(rt!==Ee||_t!==Rn||wt!==wn)&&(o.stencilFunc(Ee,Rn,wn),rt=Ee,_t=Rn,wt=wn)},setOp:function(Ee,Rn,wn){(Dt!==Ee||Jt!==Rn||Ge!==wn)&&(o.stencilOp(Ee,Rn,wn),Dt=Ee,Jt=Rn,Ge=wn)},setLocked:function(Ee){W=Ee},setClear:function(Ee){tn!==Ee&&(o.clearStencil(Ee),tn=Ee)},reset:function(){W=!1,Lt=null,rt=null,_t=null,wt=null,Dt=null,Jt=null,Ge=null,tn=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},S={},x=new WeakMap,M=[],C=null,D=!1,y=null,_=null,P=null,E=null,L=null,G=null,I=null,F=new ye(0,0,0),K=0,w=!1,R=null,B=null,ct=null,at=null,pt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,st=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=st>=2);let St=null,U={};const J=o.getParameter(o.SCISSOR_BOX),yt=o.getParameter(o.VIEWPORT),Tt=new ze().fromArray(J),H=new ze().fromArray(yt);function ot(W,Lt,rt,_t){const wt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(W,Dt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<rt;Jt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Dt}const gt={};gt[o.TEXTURE_2D]=ot(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(o.DEPTH_TEST),h.setFunc(Mr),re(!1),fe(k_),bt(o.CULL_FACE),z(Ba);function bt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Rt(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Kt(W,Lt){return S[W]!==Lt?(o.bindFramebuffer(W,Lt),S[W]=Lt,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Lt),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(W,Lt){let rt=M,_t=!1;if(W){rt=x.get(Lt),rt===void 0&&(rt=[],x.set(Lt,rt));const wt=W.textures;if(rt.length!==wt.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=wt.length;Dt<Jt;Dt++)rt[Dt]=o.COLOR_ATTACHMENT0+Dt;rt.length=wt.length,_t=!0}}else rt[0]!==o.BACK&&(rt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(rt)}function Me(W){return C!==W?(o.useProgram(W),C=W,!0):!1}const we={[ps]:o.FUNC_ADD,[YS]:o.FUNC_SUBTRACT,[jS]:o.FUNC_REVERSE_SUBTRACT};we[ZS]=o.MIN,we[KS]=o.MAX;const ie={[QS]:o.ZERO,[JS]:o.ONE,[$S]:o.SRC_COLOR,[ph]:o.SRC_ALPHA,[sx]:o.SRC_ALPHA_SATURATE,[ix]:o.DST_COLOR,[ex]:o.DST_ALPHA,[tx]:o.ONE_MINUS_SRC_COLOR,[mh]:o.ONE_MINUS_SRC_ALPHA,[ax]:o.ONE_MINUS_DST_COLOR,[nx]:o.ONE_MINUS_DST_ALPHA,[rx]:o.CONSTANT_COLOR,[ox]:o.ONE_MINUS_CONSTANT_COLOR,[lx]:o.CONSTANT_ALPHA,[cx]:o.ONE_MINUS_CONSTANT_ALPHA};function z(W,Lt,rt,_t,wt,Dt,Jt,Ge,tn,Ee){if(W===Ba){D===!0&&(Rt(o.BLEND),D=!1);return}if(D===!1&&(bt(o.BLEND),D=!0),W!==qS){if(W!==y||Ee!==w){if((_!==ps||L!==ps)&&(o.blendEquation(o.FUNC_ADD),_=ps,L=ps),Ee)switch(W){case Sr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X_:o.blendFunc(o.ONE,o.ONE);break;case W_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case q_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Sr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case W_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case q_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,E=null,G=null,I=null,F.set(0,0,0),K=0,y=W,w=Ee}return}wt=wt||Lt,Dt=Dt||rt,Jt=Jt||_t,(Lt!==_||wt!==L)&&(o.blendEquationSeparate(we[Lt],we[wt]),_=Lt,L=wt),(rt!==P||_t!==E||Dt!==G||Jt!==I)&&(o.blendFuncSeparate(ie[rt],ie[_t],ie[Dt],ie[Jt]),P=rt,E=_t,G=Dt,I=Jt),(Ge.equals(F)===!1||tn!==K)&&(o.blendColor(Ge.r,Ge.g,Ge.b,tn),F.copy(Ge),K=tn),y=W,w=!1}function _n(W,Lt){W.side===Ci?Rt(o.CULL_FACE):bt(o.CULL_FACE);let rt=W.side===Hn;Lt&&(rt=!rt),re(rt),W.blending===Sr&&W.transparent===!1?z(Ba):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ce(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function fe(W){W!==kS?(bt(o.CULL_FACE),W!==B&&(W===k_?o.cullFace(o.BACK):W===XS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),B=W}function kt(W){W!==ct&&(X&&o.lineWidth(W),ct=W)}function Ce(W,Lt,rt){W?(bt(o.POLYGON_OFFSET_FILL),(at!==Lt||pt!==rt)&&(o.polygonOffset(Lt,rt),at=Lt,pt=rt)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(W){W?bt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function N(W){W===void 0&&(W=o.TEXTURE0+ht-1),St!==W&&(o.activeTexture(W),St=W)}function T(W,Lt,rt){rt===void 0&&(St===null?rt=o.TEXTURE0+ht-1:rt=St);let _t=U[rt];_t===void 0&&(_t={type:void 0,texture:void 0},U[rt]=_t),(_t.type!==W||_t.texture!==Lt)&&(St!==rt&&(o.activeTexture(rt),St=rt),o.bindTexture(W,Lt||gt[W]),_t.type=W,_t.texture=Lt)}function nt(){const W=U[St];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ft(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(W){Tt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Tt.copy(W))}function Ft(W){H.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),H.copy(W))}function ae(W,Lt){let rt=p.get(Lt);rt===void 0&&(rt=new WeakMap,p.set(Lt,rt));let _t=rt.get(W);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,W.name),rt.set(W,_t))}function jt(W,Lt){const _t=p.get(Lt).get(W);m.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,W.__bindingPointIndex),m.set(Lt,_t))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,U={},S={},x=new WeakMap,M=[],C=null,D=!1,y=null,_=null,P=null,E=null,L=null,G=null,I=null,F=new ye(0,0,0),K=0,w=!1,R=null,B=null,ct=null,at=null,pt=null,Tt.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:bt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:Me,setBlending:z,setMaterial:_n,setFlipSided:re,setCullFace:fe,setLineWidth:kt,setPolygonOffset:Ce,setScissorTest:Xt,activeTexture:N,bindTexture:T,unbindTexture:nt,compressedTexImage2D:ft,compressedTexImage3D:xt,texImage2D:Bt,texImage3D:qt,updateUBOMapping:ae,uniformBlockBinding:jt,texStorage2D:me,texStorage3D:Et,texSubImage2D:dt,texSubImage3D:Ht,compressedTexSubImage2D:Ct,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:De}}function kb(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,g=new WeakMap;let S;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(N,T){return M?new OffscreenCanvas(N,T):Tc("canvas")}function D(N,T,nt){let ft=1;const xt=Xt(N);if((xt.width>nt||xt.height>nt)&&(ft=nt/Math.max(xt.width,xt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(ft*xt.width),Ht=Math.floor(ft*xt.height);S===void 0&&(S=C(dt,Ht));const Ct=T?C(dt,Ht):S;return Ct.width=dt,Ct.height=Ht,Ct.getContext("2d").drawImage(N,0,0,dt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+Ht+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function E(N,T,nt,ft,xt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=T;if(T===o.RED&&(nt===o.FLOAT&&(dt=o.R32F),nt===o.HALF_FLOAT&&(dt=o.R16F),nt===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.R8UI),nt===o.UNSIGNED_SHORT&&(dt=o.R16UI),nt===o.UNSIGNED_INT&&(dt=o.R32UI),nt===o.BYTE&&(dt=o.R8I),nt===o.SHORT&&(dt=o.R16I),nt===o.INT&&(dt=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(dt=o.RG32F),nt===o.HALF_FLOAT&&(dt=o.RG16F),nt===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RG16UI),nt===o.UNSIGNED_INT&&(dt=o.RG32UI),nt===o.BYTE&&(dt=o.RG8I),nt===o.SHORT&&(dt=o.RG16I),nt===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),nt===o.UNSIGNED_INT&&(dt=o.RGB32UI),nt===o.BYTE&&(dt=o.RGB8I),nt===o.SHORT&&(dt=o.RGB16I),nt===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(dt=o.RGBA32UI),nt===o.BYTE&&(dt=o.RGBA8I),nt===o.SHORT&&(dt=o.RGBA16I),nt===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),T===o.RGBA){const Ht=xt?Mc:Re.getTransfer(ft);nt===o.FLOAT&&(dt=o.RGBA32F),nt===o.HALF_FLOAT&&(dt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(dt=Ht===Oe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function L(N,T){let nt;return N?T===null||T===vs||T===br?nt=o.DEPTH24_STENCIL8:T===aa?nt=o.DEPTH32F_STENCIL8:T===Po&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vs||T===br?nt=o.DEPTH_COMPONENT24:T===aa?nt=o.DEPTH_COMPONENT32F:T===Po&&(nt=o.DEPTH_COMPONENT16),nt}function G(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==xi&&N.minFilter!==Di?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),K(T),T.isVideoTexture&&g.delete(T)}function F(N){const T=N.target;T.removeEventListener("dispose",F),R(T)}function K(N){const T=s.get(N);if(T.__webglInit===void 0)return;const nt=N.source,ft=x.get(nt);if(ft){const xt=ft[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(N),Object.keys(ft).length===0&&x.delete(nt)}s.remove(N)}function w(N){const T=s.get(N);o.deleteTexture(T.__webglTexture);const nt=N.source,ft=x.get(nt);delete ft[T.__cacheKey],h.memory.textures--}function R(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let xt=0;xt<T.__webglFramebuffer[ft].length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][xt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=N.textures;for(let ft=0,xt=nt.length;ft<xt;ft++){const dt=s.get(nt[ft]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(nt[ft])}s.remove(N)}let B=0;function ct(){B=0}function at(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function pt(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ht(N,T){const nt=s.get(N);if(N.isVideoTexture&&kt(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(nt,N,T);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function X(N,T){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){H(nt,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function st(N,T){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){H(nt,N,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function Y(N,T){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){ot(nt,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const St={[bh]:o.REPEAT,[_s]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},U={[xi]:o.NEAREST,[Sx]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[zf]:o.LINEAR_MIPMAP_NEAREST,[gs]:o.LINEAR_MIPMAP_LINEAR},J={[Ex]:o.NEVER,[Cx]:o.ALWAYS,[Tx]:o.LESS,[r0]:o.LEQUAL,[bx]:o.EQUAL,[wx]:o.GEQUAL,[Ax]:o.GREATER,[Rx]:o.NOTEQUAL};function yt(N,T){if(T.type===aa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Di||T.magFilter===zf||T.magFilter===ql||T.magFilter===gs||T.minFilter===Di||T.minFilter===zf||T.minFilter===ql||T.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,St[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==ql&&T.minFilter!==gs||T.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Tt(N,T){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const ft=T.source;let xt=x.get(ft);xt===void 0&&(xt={},x.set(ft,xt));const dt=pt(T);if(dt!==N.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),xt[dt].usedTimes++;const Ht=xt[N.__cacheKey];Ht!==void 0&&(xt[N.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(T)),N.__cacheKey=dt,N.__webglTexture=xt[dt].texture}return nt}function H(N,T,nt){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const xt=Tt(N,T),dt=T.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+nt);const Ht=s.get(dt);if(dt.version!==Ht.__version||xt===!0){i.activeTexture(o.TEXTURE0+nt);const Ct=Re.getPrimaries(Re.workingColorSpace),zt=T.colorSpace===za?null:Re.getPrimaries(T.colorSpace),me=T.colorSpace===za||Ct===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Et=D(T.image,!1,l.maxTextureSize);Et=Ce(T,Et);const Bt=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let Gt=E(T.internalFormat,Bt,qt,T.colorSpace,T.isVideoTexture);yt(ft,T);let Ft;const ae=T.mipmaps,jt=T.isVideoTexture!==!0,De=Ht.__version===void 0||xt===!0,W=dt.dataReady,Lt=G(T,Et);if(T.isDepthTexture)Gt=L(T.format===Ar,T.type),De&&(jt?i.texStorage2D(o.TEXTURE_2D,1,Gt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Et.width,Et.height,0,Bt,qt,null));else if(T.isDataTexture)if(ae.length>0){jt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],jt?W&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data);T.generateMipmaps=!1}else jt?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Et.width,Et.height),W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Bt,qt,Et.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,Et.width,Et.height,0,Bt,qt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){jt&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,ae[0].width,ae[0].height,Et.depth);for(let rt=0,_t=ae.length;rt<_t;rt++)if(Ft=ae[rt],T.format!==Si)if(Bt!==null)if(jt){if(W)if(T.layerUpdates.size>0){const wt=Sg(Ft.width,Ft.height,T.format,T.type);for(const Dt of T.layerUpdates){const Jt=Ft.data.subarray(Dt*wt/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*wt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,Dt,Ft.width,Ft.height,1,Bt,Jt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Et.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,rt,Gt,Ft.width,Ft.height,Et.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Et.depth,Bt,qt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,rt,Gt,Ft.width,Ft.height,Et.depth,0,Bt,qt,Ft.data)}else{jt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],T.format!==Si?Bt!==null?jt?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?W&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data)}else if(T.isDataArrayTexture)if(jt){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Et.width,Et.height,Et.depth),W)if(T.layerUpdates.size>0){const rt=Sg(Et.width,Et.height,T.format,T.type);for(const _t of T.layerUpdates){const wt=Et.data.subarray(_t*rt/Et.data.BYTES_PER_ELEMENT,(_t+1)*rt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Bt,qt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Bt,qt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Et.width,Et.height,Et.depth,0,Bt,qt,Et.data);else if(T.isData3DTexture)jt?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,Et.width,Et.height,Et.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Bt,qt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Et.width,Et.height,Et.depth,0,Bt,qt,Et.data);else if(T.isFramebufferTexture){if(De)if(jt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Et.width,Et.height);else{let rt=Et.width,_t=Et.height;for(let wt=0;wt<Lt;wt++)i.texImage2D(o.TEXTURE_2D,wt,Gt,rt,_t,0,Bt,qt,null),rt>>=1,_t>>=1}}else if(ae.length>0){if(jt&&De){const rt=Xt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,rt.width,rt.height)}for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],jt?W&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Bt,qt,Ft):i.texImage2D(o.TEXTURE_2D,rt,Gt,Bt,qt,Ft);T.generateMipmaps=!1}else if(jt){if(De){const rt=Xt(Et);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,rt.width,rt.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,qt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,qt,Et);y(T)&&_(ft),Ht.__version=dt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ot(N,T,nt){if(T.image.length!==6)return;const ft=Tt(N,T),xt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+nt);const dt=s.get(xt);if(xt.version!==dt.__version||ft===!0){i.activeTexture(o.TEXTURE0+nt);const Ht=Re.getPrimaries(Re.workingColorSpace),Ct=T.colorSpace===za?null:Re.getPrimaries(T.colorSpace),zt=T.colorSpace===za||Ht===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!me&&!Et?Bt[_t]=D(T.image[_t],!0,l.maxCubemapSize):Bt[_t]=Et?T.image[_t].image:T.image[_t],Bt[_t]=Ce(T,Bt[_t]);const qt=Bt[0],Gt=u.convert(T.format,T.colorSpace),Ft=u.convert(T.type),ae=E(T.internalFormat,Gt,Ft,T.colorSpace),jt=T.isVideoTexture!==!0,De=dt.__version===void 0||ft===!0,W=xt.dataReady;let Lt=G(T,qt);yt(o.TEXTURE_CUBE_MAP,T);let rt;if(me){jt&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,qt.width,qt.height);for(let _t=0;_t<6;_t++){rt=Bt[_t].mipmaps;for(let wt=0;wt<rt.length;wt++){const Dt=rt[wt];T.format!==Si?Gt!==null?jt?W&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,ae,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(rt=T.mipmaps,jt&&De){rt.length>0&&Lt++;const _t=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,Ft,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Bt[_t].width,Bt[_t].height,0,Gt,Ft,Bt[_t].data);for(let wt=0;wt<rt.length;wt++){const Jt=rt[wt].image[_t].image;jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Jt.width,Jt.height,Gt,Ft,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,ae,Jt.width,Jt.height,0,Gt,Ft,Jt.data)}}else{jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Ft,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Gt,Ft,Bt[_t]);for(let wt=0;wt<rt.length;wt++){const Dt=rt[wt];jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Gt,Ft,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,ae,Gt,Ft,Dt.image[_t])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),dt.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function gt(N,T,nt,ft,xt,dt){const Ht=u.convert(nt.format,nt.colorSpace),Ct=u.convert(nt.type),zt=E(nt.internalFormat,Ht,Ct,nt.colorSpace),me=s.get(T),Et=s.get(nt);if(Et.__renderTarget=T,!me.__hasExternalTextures){const Bt=Math.max(1,T.width>>dt),qt=Math.max(1,T.height>>dt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,dt,zt,Bt,qt,T.depth,0,Ht,Ct,null):i.texImage2D(xt,dt,zt,Bt,qt,0,Ht,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,xt,Et.__webglTexture,0,re(T)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,xt,Et.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(N,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const ft=T.depthTexture,xt=ft&&ft.isDepthTexture?ft.type:null,dt=L(T.stencilBuffer,xt),Ht=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=re(T);fe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,dt,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,N)}else{const ft=T.textures;for(let xt=0;xt<ft.length;xt++){const dt=ft[xt],Ht=u.convert(dt.format,dt.colorSpace),Ct=u.convert(dt.type),zt=E(dt.internalFormat,Ht,Ct,dt.colorSpace),me=re(T);nt&&fe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,T.width,T.height):fe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const xt=ft.__webglTexture,dt=re(T);if(T.depthTexture.format===xr)fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(T.depthTexture.format===Ar)fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Kt(N){const T=s.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",xt)};ft.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=ft}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Rt(T.__webglFramebuffer,N)}else if(nt){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),bt(T.__webglDepthbuffer[ft],N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),bt(T.__webglDepthbuffer,N,!1);else{const ft=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,xt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(N,T,nt){const ft=s.get(N);T!==void 0&&gt(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Kt(N)}function Me(N){const T=N.texture,nt=s.get(N),ft=s.get(T);N.addEventListener("dispose",F);const xt=N.textures,dt=N.isWebGLCubeRenderTarget===!0,Ht=xt.length>1;if(Ht||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),dt){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let zt=0;zt<T.mipmaps.length;zt++)nt.__webglFramebuffer[Ct][zt]=o.createFramebuffer()}else nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const me=s.get(xt[Ct]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&fe(N)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const zt=xt[Ct];nt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);const me=u.convert(zt.format,zt.colorSpace),Et=u.convert(zt.type),Bt=E(zt.internalFormat,me,Et,zt.colorSpace,N.isXRRenderTarget===!0),qt=re(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Bt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),yt(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)gt(nt.__webglFramebuffer[Ct][zt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,zt);else gt(nt.__webglFramebuffer[Ct],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const me=xt[Ct],Et=s.get(me);i.bindTexture(o.TEXTURE_2D,Et.__webglTexture),yt(o.TEXTURE_2D,me),gt(nt.__webglFramebuffer,N,me,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),y(me)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ft.__webglTexture),yt(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)gt(nt.__webglFramebuffer[zt],N,T,o.COLOR_ATTACHMENT0,Ct,zt);else gt(nt.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Ct,0);y(T)&&_(Ct),i.unbindTexture()}N.depthBuffer&&Kt(N)}function we(N){const T=N.textures;for(let nt=0,ft=T.length;nt<ft;nt++){const xt=T[nt];if(y(xt)){const dt=P(N),Ht=s.get(xt).__webglTexture;i.bindTexture(dt,Ht),_(dt),i.unbindTexture()}}}const ie=[],z=[];function _n(N){if(N.samples>0){if(fe(N)===!1){const T=N.textures,nt=N.width,ft=N.height;let xt=o.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=s.get(N),Ct=T.length>1;if(Ct)for(let zt=0;zt<T.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=s.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,nt,ft,0,0,nt,ft,xt,o.NEAREST),m===!0&&(ie.length=0,z.length=0,ie.push(o.COLOR_ATTACHMENT0+zt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ie.push(dt),z.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let zt=0;zt<T.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=s.get(T[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function re(N){return Math.min(l.maxSamples,N.samples)}function fe(N){const T=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(N){const T=h.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ce(N,T){const nt=N.colorSpace,ft=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Rr&&nt!==za&&(Re.getTransfer(nt)===Oe?(ft!==Si||xt!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=X,this.setTexture3D=st,this.setTextureCube=Y,this.rebindTextures=Pt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=fe}function Xb(o,t){function i(s,l=za){let u;const h=Re.getTransfer(l);if(s===oa)return o.UNSIGNED_BYTE;if(s===sd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===rd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Qg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Zg)return o.BYTE;if(s===Kg)return o.SHORT;if(s===Po)return o.UNSIGNED_SHORT;if(s===ad)return o.INT;if(s===vs)return o.UNSIGNED_INT;if(s===aa)return o.FLOAT;if(s===zo)return o.HALF_FLOAT;if(s===Jg)return o.ALPHA;if(s===$g)return o.RGB;if(s===Si)return o.RGBA;if(s===t0)return o.LUMINANCE;if(s===e0)return o.LUMINANCE_ALPHA;if(s===xr)return o.DEPTH_COMPONENT;if(s===Ar)return o.DEPTH_STENCIL;if(s===n0)return o.RED;if(s===od)return o.RED_INTEGER;if(s===i0)return o.RG;if(s===ld)return o.RG_INTEGER;if(s===cd)return o.RGBA_INTEGER;if(s===mc||s===_c||s===gc||s===vc)if(h===Oe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_c)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rh||s===wh||s===Ch||s===Dh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Rh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Lh||s===Nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Uh||s===Lh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Nh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oh||s===Ph||s===zh||s===Bh||s===Fh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Oh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ph)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ih)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sc||s===jh||s===Zh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Sc)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===a0||s===Kh||s===Qh||s===Jh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Sc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Gn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Oi({vertexShader:Wb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new Ri(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jb extends Ms{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,S=null,x=null,M=null,C=null;const D=new Yb,y=i.getContextAttributes();let _=null,P=null;const E=[],L=[],G=new se;let I=null;const F=new Qn;F.viewport=new ze;const K=new Qn;K.viewport=new ze;const w=[F,K],R=new my;let B=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ot=E[H];return ot===void 0&&(ot=new ih,E[H]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(H){let ot=E[H];return ot===void 0&&(ot=new ih,E[H]=ot),ot.getGripSpace()},this.getHand=function(H){let ot=E[H];return ot===void 0&&(ot=new ih,E[H]=ot),ot.getHandSpace()};function at(H){const ot=L.indexOf(H.inputSource);if(ot===-1)return;const gt=E[ot];gt!==void 0&&(gt.update(H.inputSource,H.frame,p||h),gt.dispatchEvent({type:H.type,data:H.inputSource}))}function pt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ht);for(let H=0;H<E.length;H++){const ot=L[H];ot!==null&&(L[H]=null,E[H].disconnect(ot))}B=null,ct=null,D.reset(),t.setRenderTarget(_),M=null,x=null,S=null,l=null,P=null,Tt.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){u=H,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){d=H,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(H){p=H},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,bt=null,Rt=null;y.depth&&(Rt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=y.stencil?Ar:xr,bt=y.stencil?br:vs);const Kt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(Kt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new Ss(x.textureWidth,x.textureHeight,{format:Si,type:oa,depthTexture:new S0(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Ss(M.framebufferWidth,M.framebufferHeight,{format:Si,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Tt.setContext(l),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function ht(H){for(let ot=0;ot<H.removed.length;ot++){const gt=H.removed[ot],bt=L.indexOf(gt);bt>=0&&(L[bt]=null,E[bt].disconnect(gt))}for(let ot=0;ot<H.added.length;ot++){const gt=H.added[ot];let bt=L.indexOf(gt);if(bt===-1){for(let Kt=0;Kt<E.length;Kt++)if(Kt>=L.length){L.push(gt),bt=Kt;break}else if(L[Kt]===null){L[Kt]=gt,bt=Kt;break}if(bt===-1)break}const Rt=E[bt];Rt&&Rt.connect(gt)}}const X=new Q,st=new Q;function Y(H,ot,gt){X.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(gt.matrixWorld);const bt=X.distanceTo(st),Rt=ot.projectionMatrix.elements,Kt=gt.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),we=(Rt[9]+1)/Rt[5],ie=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],_n=(Kt[8]+1)/Kt[0],re=Pt*z,fe=Pt*_n,kt=bt/(-z+_n),Ce=kt*-z;if(ot.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ce),H.translateZ(kt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Rt[10]===-1)H.projectionMatrix.copy(ot.projectionMatrix),H.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Xt=Pt+kt,N=Me+kt,T=re-Ce,nt=fe+(bt-Ce),ft=we*Me/N*Xt,xt=ie*Me/N*Xt;H.projectionMatrix.makePerspective(T,nt,ft,xt,Xt,N),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function St(H,ot){ot===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ot.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let ot=H.near,gt=H.far;D.texture!==null&&(D.depthNear>0&&(ot=D.depthNear),D.depthFar>0&&(gt=D.depthFar)),R.near=K.near=F.near=ot,R.far=K.far=F.far=gt,(B!==R.near||ct!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ct=R.far),F.layers.mask=H.layers.mask|2,K.layers.mask=H.layers.mask|4,R.layers.mask=F.layers.mask|K.layers.mask;const bt=H.parent,Rt=R.cameras;St(R,bt);for(let Kt=0;Kt<Rt.length;Kt++)St(Rt[Kt],bt);Rt.length===2?Y(R,F,K):R.projectionMatrix.copy(F.projectionMatrix),U(H,R,bt)};function U(H,ot,gt){gt===null?H.matrix.copy(ot.matrixWorld):(H.matrix.copy(gt.matrixWorld),H.matrix.invert(),H.matrix.multiply(ot.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ot.projectionMatrix),H.projectionMatrixInverse.copy(ot.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=$h*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(H){m=H,x!==null&&(x.fixedFoveation=H),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=H)},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(R)};let J=null;function yt(H,ot){if(g=ot.getViewerPose(p||h),C=ot,g!==null){const gt=g.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let bt=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Pt=0;Pt<gt.length;Pt++){const Me=gt[Pt];let we=null;if(M!==null)we=M.getViewport(Me);else{const z=S.getViewSubImage(x,Me);we=z.viewport,Pt===0&&(t.setRenderTargetTextures(P,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(P))}let ie=w[Pt];ie===void 0&&(ie=new Qn,ie.layers.enable(Pt),ie.viewport=new ze,w[Pt]=ie),ie.matrix.fromArray(Me.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Me.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(we.x,we.y,we.width,we.height),Pt===0&&(R.matrix.copy(ie.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(ie)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&S){const Pt=S.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&D.init(t,Pt,l.renderState)}}for(let gt=0;gt<E.length;gt++){const bt=L[gt],Rt=E[gt];bt!==null&&Rt!==void 0&&Rt.update(bt,ot,p||h)}J&&J(H,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),C=null}const Tt=new M0;Tt.setAnimationLoop(yt),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}const hs=new Ni,Zb=new Xe;function Kb(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,_0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,E,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),S(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,L)):_.isMeshMatcapMaterial?(u(y,_),C(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),D(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,P,E):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Hn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Hn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=t.get(_),E=P.envMap,L=P.envMapRotation;E&&(y.envMap.value=E,hs.copy(L),hs.x*=-1,hs.y*=-1,hs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(hs)),y.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,P,E){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=E*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,_){_.matcap&&(y.matcap.value=_.matcap)}function D(y,_){const P=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Qb(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,E){const L=E.program;s.uniformBlockBinding(P,L)}function p(P,E){let L=l[P.id];L===void 0&&(C(P),L=g(P),l[P.id]=L,P.addEventListener("dispose",y));const G=E.program;s.updateUBOMapping(P,G);const I=t.render.frame;u[P.id]!==I&&(x(P),u[P.id]=I)}function g(P){const E=S();P.__bindingPointIndex=E;const L=o.createBuffer(),G=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,G,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,E,L),L}function S(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const E=l[P.id],L=P.uniforms,G=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,E);for(let I=0,F=L.length;I<F;I++){const K=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,R=K.length;w<R;w++){const B=K[w];if(M(B,I,w,G)===!0){const ct=B.__offset,at=Array.isArray(B.value)?B.value:[B.value];let pt=0;for(let ht=0;ht<at.length;ht++){const X=at[ht],st=D(X);typeof X=="number"||typeof X=="boolean"?(B.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,ct+pt,B.__data)):X.isMatrix3?(B.__data[0]=X.elements[0],B.__data[1]=X.elements[1],B.__data[2]=X.elements[2],B.__data[3]=0,B.__data[4]=X.elements[3],B.__data[5]=X.elements[4],B.__data[6]=X.elements[5],B.__data[7]=0,B.__data[8]=X.elements[6],B.__data[9]=X.elements[7],B.__data[10]=X.elements[8],B.__data[11]=0):(X.toArray(B.__data,pt),pt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,E,L,G){const I=P.value,F=E+"_"+L;if(G[F]===void 0)return typeof I=="number"||typeof I=="boolean"?G[F]=I:G[F]=I.clone(),!0;{const K=G[F];if(typeof I=="number"||typeof I=="boolean"){if(K!==I)return G[F]=I,!0}else if(K.equals(I)===!1)return K.copy(I),!0}return!1}function C(P){const E=P.uniforms;let L=0;const G=16;for(let F=0,K=E.length;F<K;F++){const w=Array.isArray(E[F])?E[F]:[E[F]];for(let R=0,B=w.length;R<B;R++){const ct=w[R],at=Array.isArray(ct.value)?ct.value:[ct.value];for(let pt=0,ht=at.length;pt<ht;pt++){const X=at[pt],st=D(X),Y=L%G,St=Y%st.boundary,U=Y+St;L+=St,U!==0&&G-U<st.storage&&(L+=G-U),ct.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=L,L+=st.storage}}}const I=L%G;return I>0&&(L+=G-I),P.__size=L,P.__cache={},this}function D(P){const E={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(E.boundary=4,E.storage=4):P.isVector2?(E.boundary=8,E.storage=8):P.isVector3||P.isColor?(E.boundary=16,E.storage=12):P.isVector4?(E.boundary=16,E.storage=16):P.isMatrix3?(E.boundary=48,E.storage=48):P.isMatrix4?(E.boundary=64,E.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),E}function y(P){const E=P.target;E.removeEventListener("dispose",y);const L=h.indexOf(E.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[E.id]),delete l[E.id],delete u[E.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Jb{constructor(t={}){const{canvas:i=Lx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const C=new Uint32Array(4),D=new Int32Array(4);let y=null,_=null;const P=[],E=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=Fa,this.toneMappingExposure=1;const L=this;let G=!1,I=0,F=0,K=null,w=-1,R=null;const B=new ze,ct=new ze;let at=null;const pt=new ye(0);let ht=0,X=i.width,st=i.height,Y=1,St=null,U=null;const J=new ze(0,0,X,st),yt=new ze(0,0,X,st);let Tt=!1;const H=new fd;let ot=!1,gt=!1;this.transmissionResolutionScale=1;const bt=new Xe,Rt=new Xe,Kt=new Q,Pt=new ze,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ie(){return K===null?Y:1}let z=s;function _n(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${nd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const q="webgl2";if(z=_n(q,A),z===null)throw _n(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let re,fe,kt,Ce,Xt,N,T,nt,ft,xt,dt,Ht,Ct,zt,me,Et,Bt,qt,Gt,Ft,ae,jt,De,W;function Lt(){re=new lT(z),re.init(),jt=new Xb(z,re),fe=new nT(z,re,t,jt),kt=new Vb(z,re),fe.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Ce=new fT(z),Xt=new Cb,N=new kb(z,re,kt,Xt,fe,jt,Ce),T=new aT(L),nt=new oT(L),ft=new vy(z),De=new tT(z,ft),xt=new cT(z,ft,Ce,De),dt=new dT(z,xt,ft,Ce),Gt=new hT(z,fe,N),Et=new iT(Xt),Ht=new wb(L,T,nt,re,fe,De,Et),Ct=new Kb(L,Xt),zt=new Ub,me=new Bb(re),qt=new $E(L,T,nt,kt,dt,M,m),Bt=new Hb(L,dt,fe),W=new Qb(z,Ce,fe,kt),Ft=new eT(z,re,Ce),ae=new uT(z,re,Ce),Ce.programs=Ht.programs,L.capabilities=fe,L.extensions=re,L.properties=Xt,L.renderLists=zt,L.shadowMap=Bt,L.state=kt,L.info=Ce}Lt();const rt=new jb(L,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(X,st,!1))},this.getSize=function(A){return A.set(X,st)},this.setSize=function(A,q,et=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,st=q,i.width=Math.floor(A*Y),i.height=Math.floor(q*Y),et===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(X*Y,st*Y).floor()},this.setDrawingBufferSize=function(A,q,et){X=A,st=q,Y=et,i.width=Math.floor(A*et),i.height=Math.floor(q*et),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,q,et,$){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,q,et,$),kt.viewport(B.copy(J).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(yt)},this.setScissor=function(A,q,et,$){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,q,et,$),kt.scissor(ct.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){kt.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(A=!0,q=!0,et=!0){let $=0;if(A){let j=!1;if(K!==null){const Mt=K.texture.format;j=Mt===cd||Mt===ld||Mt===od}if(j){const Mt=K.texture.type,At=Mt===oa||Mt===vs||Mt===Po||Mt===br||Mt===sd||Mt===rd,Ot=qt.getClearColor(),Nt=qt.getClearAlpha(),$t=Ot.r,te=Ot.g,Yt=Ot.b;At?(C[0]=$t,C[1]=te,C[2]=Yt,C[3]=Nt,z.clearBufferuiv(z.COLOR,0,C)):(D[0]=$t,D[1]=te,D[2]=Yt,D[3]=Nt,z.clearBufferiv(z.COLOR,0,D))}else $|=z.COLOR_BUFFER_BIT}q&&($|=z.DEPTH_BUFFER_BIT),et&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),zt.dispose(),me.dispose(),Xt.dispose(),T.dispose(),nt.dispose(),dt.dispose(),De.dispose(),W.dispose(),Ht.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ho),rt.removeEventListener("sessionend",Dr),yi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Ce.autoReset,q=Bt.enabled,et=Bt.autoUpdate,$=Bt.needsUpdate,j=Bt.type;Lt(),Ce.autoReset=A,Bt.enabled=q,Bt.autoUpdate=et,Bt.needsUpdate=$,Bt.type=j}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const q=A.target;q.removeEventListener("dispose",Jt),Ge(q)}function Ge(A){tn(A),Xt.remove(A)}function tn(A){const q=Xt.get(A).programs;q!==void 0&&(q.forEach(function(et){Ht.releaseProgram(et)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,et,$,j,Mt){q===null&&(q=Me);const At=j.isMesh&&j.matrixWorld.determinant()<0,Ot=Rc(A,q,et,$,j);kt.setMaterial($,At);let Nt=et.index,$t=1;if($.wireframe===!0){if(Nt=xt.getWireframeAttribute(et),Nt===void 0)return;$t=2}const te=et.drawRange,Yt=et.attributes.position;let _e=te.start*$t,ge=(te.start+te.count)*$t;Mt!==null&&(_e=Math.max(_e,Mt.start*$t),ge=Math.min(ge,(Mt.start+Mt.count)*$t)),Nt!==null?(_e=Math.max(_e,0),ge=Math.min(ge,Nt.count)):Yt!=null&&(_e=Math.max(_e,0),ge=Math.min(ge,Yt.count));const He=ge-_e;if(He<0||He===1/0)return;De.setup(j,$,Ot,et,Nt);let Te,ee=Ft;if(Nt!==null&&(Te=ft.get(Nt),ee=ae,ee.setIndex(Te)),j.isMesh)$.wireframe===!0?(kt.setLineWidth($.wireframeLinewidth*ie()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(j.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*ie()),j.isLineSegments?ee.setMode(z.LINES):j.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else j.isPoints?ee.setMode(z.POINTS):j.isSprite&&ee.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ee.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ee.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,an=j._multiDrawCounts,ve=j._multiDrawCount,On=Nt?ft.get(Nt).bytesPerElement:1,ui=Xt.get($).currentProgram.getUniforms();for(let Cn=0;Cn<ve;Cn++)ui.setValue(z,"_gl_DrawID",Cn),ee.render(Zt[Cn]/On,an[Cn])}else if(j.isInstancedMesh)ee.renderInstances(_e,He,j.count);else if(et.isInstancedBufferGeometry){const Zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,an=Math.min(et.instanceCount,Zt);ee.renderInstances(_e,He,an)}else ee.render(_e,He)};function Ee(A,q,et){A.transparent===!0&&A.side===Ci&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,nn(A,q,et),A.side=Ia,A.needsUpdate=!0,nn(A,q,et),A.side=Ci):nn(A,q,et)}this.compile=function(A,q,et=null){et===null&&(et=A),_=me.get(et),_.init(q),E.push(_),et.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==et&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const $=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Ot=Mt[At];Ee(Ot,et,j),$.add(Ot)}else Ee(Mt,et,j),$.add(Mt)}),E.pop(),_=null,$},this.compileAsync=function(A,q,et=null){const $=this.compile(A,q,et);return new Promise(j=>{function Mt(){if($.forEach(function(At){Xt.get(At).currentProgram.isReady()&&$.delete(At)}),$.size===0){j(A);return}setTimeout(Mt,10)}re.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Rn=null;function wn(A){Rn&&Rn(A)}function Ho(){yi.stop()}function Dr(){yi.start()}const yi=new M0;yi.setAnimationLoop(wn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Rn=A,rt.setAnimationLoop(A),A===null?yi.stop():yi.start()},rt.addEventListener("sessionstart",Ho),rt.addEventListener("sessionend",Dr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,q,K),_=me.get(A,E.length),_.init(q),E.push(_),Rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H.setFromProjectionMatrix(Rt),gt=this.localClippingEnabled,ot=Et.init(this.clippingPlanes,gt),y=zt.get(A,P.length),y.init(),P.push(y),rt.enabled===!0&&rt.isPresenting===!0){const Mt=L.xr.getDepthSensingMesh();Mt!==null&&Es(Mt,q,-1/0,L.sortObjects)}Es(A,q,0,L.sortObjects),y.finish(),L.sortObjects===!0&&y.sort(St,U),we=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,we&&qt.addToRenderList(y,A),this.info.render.frame++,ot===!0&&Et.beginShadows();const et=_.state.shadowsArray;Bt.render(et,A,q),ot===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const Mt=q.cameras;if(j.length>0)for(let At=0,Ot=Mt.length;At<Ot;At++){const Nt=Mt[At];Go($,j,A,Nt)}we&&qt.render(A);for(let At=0,Ot=Mt.length;At<Ot;At++){const Nt=Mt[At];Ur(y,A,Nt,Nt.viewport)}}else j.length>0&&Go($,j,A,q),we&&qt.render(A),Ur(y,A,q);K!==null&&F===0&&(N.updateMultisampleRenderTarget(K),N.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(L,A,q),De.resetDefaultState(),w=-1,R=null,E.pop(),E.length>0?(_=E[E.length-1],ot===!0&&Et.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Es(A,q,et,$){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){$&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const At=dt.update(A),Ot=A.material;Ot.visible&&y.push(A,At,Ot,et,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const At=dt.update(A),Ot=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Pt.copy(At.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=At.groups;for(let $t=0,te=Nt.length;$t<te;$t++){const Yt=Nt[$t],_e=Ot[Yt.materialIndex];_e&&_e.visible&&y.push(A,At,_e,et,Pt.z,Yt)}}else Ot.visible&&y.push(A,At,Ot,et,Pt.z,null)}}const Mt=A.children;for(let At=0,Ot=Mt.length;At<Ot;At++)Es(Mt[At],q,et,$)}function Ur(A,q,et,$){const j=A.opaque,Mt=A.transmissive,At=A.transparent;_.setupLightsView(et),ot===!0&&Et.setGlobalState(L.clippingPlanes,et),$&&kt.viewport(B.copy($)),j.length>0&&Vn(j,q,et),Mt.length>0&&Vn(Mt,q,et),At.length>0&&Vn(At,q,et),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Go(A,q,et,$){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new Ss(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?zo:oa,minFilter:gs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Mt=_.state.transmissionRenderTarget[$.id],At=$.viewport||B;Mt.setSize(At.z*L.transmissionResolutionScale,At.w*L.transmissionResolutionScale);const Ot=L.getRenderTarget();L.setRenderTarget(Mt),L.getClearColor(pt),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),we&&qt.render(et);const Nt=L.toneMapping;L.toneMapping=Fa;const $t=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),ot===!0&&Et.setGlobalState(L.clippingPlanes,$),Vn(A,et,$),N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,_e=q.length;Yt<_e;Yt++){const ge=q[Yt],He=ge.object,Te=ge.geometry,ee=ge.material,Zt=ge.group;if(ee.side===Ci&&He.layers.test($.layers)){const an=ee.side;ee.side=Hn,ee.needsUpdate=!0,en(He,et,$,Te,ee,Zt),ee.side=an,ee.needsUpdate=!0,te=!0}}te===!0&&(N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt))}L.setRenderTarget(Ot),L.setClearColor(pt,ht),$t!==void 0&&($.viewport=$t),L.toneMapping=Nt}function Vn(A,q,et){const $=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Mt=A.length;j<Mt;j++){const At=A[j],Ot=At.object,Nt=At.geometry,$t=$===null?At.material:$,te=At.group;Ot.layers.test(et.layers)&&en(Ot,q,et,Nt,$t,te)}}function en(A,q,et,$,j,Mt){A.onBeforeRender(L,q,et,$,j,Mt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(L,q,et,$,A,Mt),j.transparent===!0&&j.side===Ci&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,L.renderBufferDirect(et,q,$,j,A,Mt),j.side=Ia,j.needsUpdate=!0,L.renderBufferDirect(et,q,$,j,A,Mt),j.side=Ci):L.renderBufferDirect(et,q,$,j,A,Mt),A.onAfterRender(L,q,et,$,j,Mt)}function nn(A,q,et){q.isScene!==!0&&(q=Me);const $=Xt.get(A),j=_.state.lights,Mt=_.state.shadowsArray,At=j.state.version,Ot=Ht.getParameters(A,j.state,Mt,q,et),Nt=Ht.getProgramCacheKey(Ot);let $t=$.programs;$.environment=A.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(A.isMeshStandardMaterial?nt:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,$.programs=$t);let te=$t.get(Nt);if(te!==void 0){if($.currentProgram===te&&$.lightsStateVersion===At)return Ts(A,Ot),te}else Ot.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Ot,L),te=Ht.acquireProgram(Ot,Nt),$t.set(Nt,te),$.uniforms=Ot.uniforms;const Yt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Et.uniform),Ts(A,Ot),$.needsLights=Vo(A),$.lightsStateVersion=At,$.needsLights&&(Yt.ambientLightColor.value=j.state.ambient,Yt.lightProbe.value=j.state.probe,Yt.directionalLights.value=j.state.directional,Yt.directionalLightShadows.value=j.state.directionalShadow,Yt.spotLights.value=j.state.spot,Yt.spotLightShadows.value=j.state.spotShadow,Yt.rectAreaLights.value=j.state.rectArea,Yt.ltc_1.value=j.state.rectAreaLTC1,Yt.ltc_2.value=j.state.rectAreaLTC2,Yt.pointLights.value=j.state.point,Yt.pointLightShadows.value=j.state.pointShadow,Yt.hemisphereLights.value=j.state.hemi,Yt.directionalShadowMap.value=j.state.directionalShadowMap,Yt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Yt.spotShadowMap.value=j.state.spotShadowMap,Yt.spotLightMatrix.value=j.state.spotLightMatrix,Yt.spotLightMap.value=j.state.spotLightMap,Yt.pointShadowMap.value=j.state.pointShadowMap,Yt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=te,$.uniformsList=null,te}function Pi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=yc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ts(A,q){const et=Xt.get(A);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function Rc(A,q,et,$,j){q.isScene!==!0&&(q=Me),N.resetTextureUnits();const Mt=q.fog,At=$.isMeshStandardMaterial?q.environment:null,Ot=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Rr,Nt=($.isMeshStandardMaterial?nt:T).get($.envMap||At),$t=$.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,te=!!et.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!et.morphAttributes.position,_e=!!et.morphAttributes.normal,ge=!!et.morphAttributes.color;let He=Fa;$.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=L.toneMapping);const Te=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ee=Te!==void 0?Te.length:0,Zt=Xt.get($),an=_.state.lights;if(ot===!0&&(gt===!0||A!==R)){const We=A===R&&$.id===w;Et.setState($,A,We)}let ve=!1;$.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==an.state.version||Zt.outputColorSpace!==Ot||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==Nt||$.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Et.numPlanes||Zt.numIntersection!==Et.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==te||Zt.morphTargets!==Yt||Zt.morphNormals!==_e||Zt.morphColors!==ge||Zt.toneMapping!==He||Zt.morphTargetsCount!==ee)&&(ve=!0):(ve=!0,Zt.__version=$.version);let On=Zt.currentProgram;ve===!0&&(On=nn($,q,j));let ui=!1,Cn=!1,un=!1;const Ue=On.getUniforms(),Dn=Zt.uniforms;if(kt.useProgram(On.program)&&(ui=!0,Cn=!0,un=!0),$.id!==w&&(w=$.id,Cn=!0),ui||R!==A){kt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),Ox(bt),Px(bt),Ue.setValue(z,"projectionMatrix",bt)):Ue.setValue(z,"projectionMatrix",A.projectionMatrix),Ue.setValue(z,"viewMatrix",A.matrixWorldInverse);const gn=Ue.map.cameraPosition;gn!==void 0&&gn.setValue(z,Kt.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Cn=!0,un=!0)}if(j.isSkinnedMesh){Ue.setOptional(z,j,"bindMatrix"),Ue.setOptional(z,j,"bindMatrixInverse");const We=j.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ue.setValue(z,"boneTexture",We.boneTexture,N))}j.isBatchedMesh&&(Ue.setOptional(z,j,"batchingTexture"),Ue.setValue(z,"batchingTexture",j._matricesTexture,N),Ue.setOptional(z,j,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",j._indirectTexture,N),Ue.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",j._colorsTexture,N));const yn=et.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Gt.update(j,et,On),(Cn||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Ue.setValue(z,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Dn.envMap.value=Nt,Dn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),Cn&&(Ue.setValue(z,"toneMappingExposure",L.toneMappingExposure),Zt.needsLights&&wc(Dn,un),Mt&&$.fog===!0&&Ct.refreshFogUniforms(Dn,Mt),Ct.refreshMaterialUniforms(Dn,$,Y,st,_.state.transmissionRenderTarget[A.id]),yc.upload(z,Pi(Zt),Dn,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yc.upload(z,Pi(Zt),Dn,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ue.setValue(z,"center",j.center),Ue.setValue(z,"modelViewMatrix",j.modelViewMatrix),Ue.setValue(z,"normalMatrix",j.normalMatrix),Ue.setValue(z,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const We=$.uniformsGroups;for(let gn=0,bs=We.length;gn<bs;gn++){const Pn=We[gn];W.update(Pn,On),W.bind(Pn,On)}}return On}function wc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Vo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,q,et){Xt.get(A.texture).__webglTexture=q,Xt.get(A.depthTexture).__webglTexture=et;const $=Xt.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=et===void 0,$.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const et=Xt.get(A);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0};const Ga=z.createFramebuffer();this.setRenderTarget=function(A,q=0,et=0){K=A,I=q,F=et;let $=!0,j=null,Mt=!1,At=!1;if(A){const Nt=Xt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Nt.__hasExternalTextures)N.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(At=!0);const te=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[q])?j=te[q][et]:j=te[q],Mt=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?j=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[et]:j=te,B.copy(A.viewport),ct.copy(A.scissor),at=A.scissorTest}else B.copy(J).multiplyScalar(Y).floor(),ct.copy(yt).multiplyScalar(Y).floor(),at=Tt;if(et!==0&&(j=Ga),kt.bindFramebuffer(z.FRAMEBUFFER,j)&&$&&kt.drawBuffers(A,j),kt.viewport(B),kt.scissor(ct),kt.setScissorTest(at),Mt){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,et)}else if(At){const Nt=Xt.get(A.texture),$t=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,et,$t)}else if(A!==null&&et!==0){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,et)}w=-1},this.readRenderTargetPixels=function(A,q,et,$,j,Mt,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Ot=Ot[At]),Ot){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Nt=A.texture,$t=Nt.format,te=Nt.type;if(!fe.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-$&&et>=0&&et<=A.height-j&&z.readPixels(q,et,$,j,jt.convert($t),jt.convert(te),Mt)}finally{const Nt=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,q,et,$,j,Mt,At){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Ot=Ot[At]),Ot){const Nt=A.texture,$t=Nt.format,te=Nt.type;if(!fe.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-$&&et>=0&&et<=A.height-j){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(q,et,$,j,jt.convert($t),jt.convert(te),0);const _e=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,_e);const ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Nx(z,ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(Yt),z.deleteSync(ge),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,et=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-et),j=Math.floor(A.image.width*$),Mt=Math.floor(A.image.height*$),At=q!==null?q.x:0,Ot=q!==null?q.y:0;N.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,At,Ot,j,Mt),kt.unbindTexture()};const Lr=z.createFramebuffer(),zi=z.createFramebuffer();this.copyTextureToTexture=function(A,q,et=null,$=null,j=0,Mt=null){A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],q=arguments[2],Mt=arguments[3]||0,et=null),Mt===null&&(j!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=j,j=0):Mt=0);let At,Ot,Nt,$t,te,Yt,_e,ge,He;const Te=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if(et!==null)At=et.max.x-et.min.x,Ot=et.max.y-et.min.y,Nt=et.isBox3?et.max.z-et.min.z:1,$t=et.min.x,te=et.min.y,Yt=et.isBox3?et.min.z:0;else{const yn=Math.pow(2,-j);At=Math.floor(Te.width*yn),Ot=Math.floor(Te.height*yn),A.isDataArrayTexture?Nt=Te.depth:A.isData3DTexture?Nt=Math.floor(Te.depth*yn):Nt=1,$t=0,te=0,Yt=0}$!==null?(_e=$.x,ge=$.y,He=$.z):(_e=0,ge=0,He=0);const ee=jt.convert(q.format),Zt=jt.convert(q.type);let an;q.isData3DTexture?(N.setTexture3D(q,0),an=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(N.setTexture2DArray(q,0),an=z.TEXTURE_2D_ARRAY):(N.setTexture2D(q,0),an=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=z.getParameter(z.UNPACK_ROW_LENGTH),On=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ui=z.getParameter(z.UNPACK_SKIP_PIXELS),Cn=z.getParameter(z.UNPACK_SKIP_ROWS),un=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Te.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const Ue=A.isDataArrayTexture||A.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const yn=Xt.get(A),We=Xt.get(q),gn=Xt.get(yn.__renderTarget),bs=Xt.get(We.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Pn=0;Pn<Nt;Pn++)Ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,j,Yt+Pn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(q).__webglTexture,Mt,He+Pn)),z.blitFramebuffer($t,te,At,Ot,_e,ge,At,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Xt.has(A)){const yn=Xt.get(A),We=Xt.get(q);kt.bindFramebuffer(z.READ_FRAMEBUFFER,Lr),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,zi);for(let gn=0;gn<Nt;gn++)Ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,j,Yt+gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,j),Dn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.__webglTexture,Mt,He+gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,We.__webglTexture,Mt),j!==0?z.blitFramebuffer($t,te,At,Ot,_e,ge,At,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Dn?z.copyTexSubImage3D(an,Mt,_e,ge,He+gn,$t,te,At,Ot):z.copyTexSubImage2D(an,Mt,_e,ge,$t,te,At,Ot);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(an,Mt,_e,ge,He,At,Ot,Nt,ee,Zt,Te.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(an,Mt,_e,ge,He,At,Ot,Nt,ee,Te.data):z.texSubImage3D(an,Mt,_e,ge,He,At,Ot,Nt,ee,Zt,Te):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,_e,ge,At,Ot,ee,Zt,Te.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,_e,ge,Te.width,Te.height,ee,Te.data):z.texSubImage2D(z.TEXTURE_2D,Mt,_e,ge,At,Ot,ee,Zt,Te);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,On),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ui),z.pixelStorei(z.UNPACK_SKIP_ROWS,Cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,un),Mt===0&&q.generateMipmaps&&z.generateMipmap(an),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,et=null,$=null,j=0){return A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,$=arguments[1]||null,A=arguments[2],q=arguments[3],j=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,et,$,j)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){I=0,F=0,K=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Xg={type:"change"},md={type:"start"},R0={type:"end"},pc=new u0,Wg=new Pa,$b=Math.cos(70*Ux.DEG2RAD),on=new Q,In=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6;class tA extends _y{constructor(t,i=null){super(t,i),this.state=Pe.NONE,this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new xs,this._lastTargetPosition=new Q,this._quat=new xs().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vg,this._sphericalDelta=new vg,this._scale=1,this._panOffset=new Q,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new Q,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nA.bind(this),this._onPointerDown=eA.bind(this),this._onPointerUp=iA.bind(this),this._onContextMenu=uA.bind(this),this._onMouseWheel=rA.bind(this),this._onKeyDown=oA.bind(this),this._onTouchStart=lA.bind(this),this._onTouchMove=cA.bind(this),this._onMouseDown=aA.bind(this),this._onMouseMove=sA.bind(this),this._interceptControlDown=fA.bind(this),this._interceptControlUp=hA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xg),this.update(),this.state=Pe.NONE}update(t=null){const i=this.object.position;on.copy(i).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=In:s>Math.PI&&(s-=In),l<-Math.PI?l+=In:l>Math.PI&&(l-=In),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),i.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=on.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(pc.origin.copy(this.object.position),pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pc.direction))<$b?this.object.lookAt(this.target):(Wg.setFromNormalAndCoplanarPoint(this.object.up,this.target),pc.intersectPlane(Wg,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(Xg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){on.setFromMatrixColumn(i,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,i){this.screenSpacePanning===!0?on.setFromMatrixColumn(i,1):(on.setFromMatrixColumn(i,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;on.copy(l).sub(this.target);let u=on.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(In*this._rotateDelta.x/i.clientHeight),this._rotateUp(In*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(In*this._rotateDelta.x/i.clientHeight),this._rotateUp(In*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function eA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function nA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function iA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(R0),this.state=Pe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function aA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Pe.DOLLY;break;case vr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Pe.ROTATE}break;case vr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(md)}function sA(o){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function rA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(o.preventDefault(),this.dispatchEvent(md),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(R0))}function oA(o){this.enabled!==!1&&this._handleKeyDown(o)}function lA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case _r.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Pe.TOUCH_ROTATE;break;case _r.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case _r.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Pe.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(md)}function cA(o){switch(this._trackPointer(o),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Pe.NONE}}function uA(o){this.enabled!==!1&&o.preventDefault()}function fA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dA(){const o=No.useRef(null),[t,i]=No.useState(0),[s,l]=No.useState(!1);No.useEffect(()=>{if(!o.current)return;const h=new ry;h.background=new ye(0);const d=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3);d.position.set(65,65,94),d.lookAt(0,0,0);const m=new Jb({antialias:!0,canvas:o.current});m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new tA(d,m.domElement);p.enableDamping=!0,p.dampingFactor=.05,p.enableZoom=!0,p.enableRotate=!0,p.minDistance=55,p.maxDistance=205,p.target.set(0,0,0),p.update();const g=100,S=new Oi({uniforms:{glowColor:{value:new ye(39423)},proximity:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        uniform float proximity;
        varying vec2 vUv;
        void main() {
          // Create grid pattern
          float gridSize = 0.1;
          float lineWidth = 0.01;
          
          float gridX = step(mod(vUv.x, gridSize), lineWidth);
          float gridY = step(mod(vUv.y, gridSize), lineWidth);
          
          // Calculate glow intensity based on proximity
          float glowIntensity = 1.0 - proximity;
          glowIntensity = pow(glowIntensity, 2.0);
          
          vec3 baseColor = glowColor * (0.3 + glowIntensity * 2.5);
          float grid = max(gridX, gridY);
          
          // Add ambient glow
          float ambientGlow = 0.15 * (1.0 - proximity);
          
          // Combine grid and ambient glow
          gl_FragColor = vec4(baseColor, (grid * 0.9 + ambientGlow));
        }
      `,transparent:!0,side:Ci}),x=[],M=new mn(new Ri(g,g),S.clone());M.position.z=g/2,h.add(M),x.push(M);const C=new mn(new Ri(g,g),S.clone());C.position.z=-100/2,C.rotation.y=Math.PI,h.add(C),x.push(C);const D=new mn(new Ri(g,g),S.clone());D.position.x=g/2,D.rotation.y=-Math.PI/2,h.add(D),x.push(D);const y=new mn(new Ri(g,g),S.clone());y.position.x=-100/2,y.rotation.y=Math.PI/2,h.add(y),x.push(y);const _=new mn(new Ri(g,g),S.clone());_.position.y=g/2,_.rotation.x=Math.PI/2,h.add(_),x.push(_);const P=new mn(new Ri(g,g),S.clone());P.position.y=-100/2,P.rotation.x=-Math.PI/2,h.add(P),x.push(P);const E={snakePosition:{x:0,y:0,z:0},direction:"f",lastDirection:"f",lastUpdateTime:performance.now(),moveInterval:200,segments:[],positions:[],isKeyboardReady:!0},L=new ys(5,5,5),G=new dg({color:16777215,emissive:65280,emissiveIntensity:1}),I=new mn(L,G);h.add(I),E.segments.push(I);const F=new hd(2.5,16,16),K=new Oi({uniforms:{time:{value:0},color:{value:new ye(16711680)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // Create multiple layered pulsing effects
          float fastPulse = (sin(time * 5.0) + 1.0) * 0.5;
          float slowPulse = (sin(time * 2.0) + 1.0) * 0.5;
          float combinedPulse = fastPulse * 0.7 + slowPulse * 0.3;
          
          // Enhanced rim lighting
          vec3 viewDirection = normalize(-vPosition);
          float rimLight = 1.0 - max(dot(viewDirection, vNormal), 0.0);
          rimLight = pow(rimLight, 1.5); // Softer falloff for wider glow
          
          // Radial glow from center
          vec2 centeredUv = vUv * 2.0 - 1.0;
          float distanceFromCenter = 1.0 - length(centeredUv);
          float radialGlow = pow(distanceFromCenter, 2.0);
          
          // Combine all glow effects
          vec3 baseGlow = color * (3.0 + combinedPulse * 4.0);
          vec3 rimGlow = vec3(1.0, 0.3, 0.3) * rimLight * 2.0;
          vec3 centerGlow = color * radialGlow * (2.0 + fastPulse);
          
          // Final color combination
          vec3 finalColor = baseGlow + rimGlow + centerGlow;
          
          // Add sparkle effect
          float sparkle = pow(sin(time * 10.0 + vPosition.x * 10.0) * 0.5 + 0.5, 8.0);
          finalColor += vec3(sparkle);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,transparent:!0}),w=new mn(F,K);w.position.set(20,0,20),h.add(w);const R=new gg(16711680,8,20);R.position.copy(w.position),h.add(R);const B=new gg(16711680,4,40);B.position.copy(w.position),h.add(B);const ct=new py(16777215,.6);h.add(ct);const at=new dy(16777215,.8);at.position.set(50,50,50),h.add(at);const pt=()=>{let J=0,yt=0,Tt=0;switch(E.direction){case"f":Tt=5;break;case"b":Tt=-5;break;case"l":J=-5;break;case"r":J=5;break;case"u":yt=5;break;case"d":yt=-5;break}return{x:E.snakePosition.x+J,y:E.snakePosition.y+yt,z:E.snakePosition.z+Tt}},ht=()=>{const U=new ys(5,5,5),J=new dg({color:16777215,emissive:65280,emissiveIntensity:1}),yt=new mn(U,J),Tt=E.segments[E.segments.length-1],H=E.positions[E.positions.length-1]||Tt.position;yt.position.set(H.x,H.y,H.z),h.add(yt),E.segments.push(yt)};let X=null;function st(U){if(X=requestAnimationFrame(st),p.update(),w.material.uniforms.time.value=U*.001,U-E.lastUpdateTime>E.moveInterval&&!s){E.lastUpdateTime=U,E.isKeyboardReady=!0,E.positions.unshift({...E.snakePosition}),E.positions=E.positions.slice(0,E.segments.length);const yt=pt();E.snakePosition=yt,E.segments.forEach((H,ot)=>{if(ot===0)H.position.set(E.snakePosition.x,E.snakePosition.y,E.snakePosition.z);else{const gt=E.positions[ot-1];H.position.set(gt.x,gt.y,gt.z)}}),Math.abs(E.snakePosition.x-w.position.x)<3&&Math.abs(E.snakePosition.y-w.position.y)<3&&Math.abs(E.snakePosition.z-w.position.z)<3&&(i(H=>H+1),ht(),w.position.set(Math.random()*80-40,Math.random()*80-40,Math.random()*80-40),R.position.copy(w.position),B.position.copy(w.position)),(Math.abs(E.snakePosition.x)>45||Math.abs(E.snakePosition.y)>45||Math.abs(E.snakePosition.z)>45)&&l(!0);for(let H=1;H<E.segments.length;H++){const ot=E.segments[H];if(Math.abs(E.snakePosition.x-ot.position.x)<3&&Math.abs(E.snakePosition.y-ot.position.y)<3&&Math.abs(E.snakePosition.z-ot.position.z)<3){l(!0);break}}const Tt=30;x.forEach(H=>{let ot;H.position.x!==0?ot=Math.abs(E.segments[0].position.x-H.position.x):H.position.y!==0?ot=Math.abs(E.segments[0].position.y-H.position.y):ot=Math.abs(E.segments[0].position.z-H.position.z);const gt=Math.min(Math.max(ot/Tt,0),1);H.material.uniforms.proximity.value=gt})}m.render(h,d)}st(performance.now());const Y=U=>{if(s||!E.isKeyboardReady)return;U.preventDefault();const J=U.key.toLowerCase();J==="arrowleft"||J==="a"?(E.direction==="f"?(E.lastDirection=E.direction,E.direction="r"):E.direction==="l"?(E.lastDirection=E.direction,E.direction="f"):E.direction==="r"?(E.lastDirection=E.direction,E.direction="b"):E.direction==="b"?(E.lastDirection=E.direction,E.direction="l"):(E.direction==="u"||E.direction==="d")&&(E.lastDirection==="l"?E.direction="f":E.lastDirection==="r"?E.direction="b":E.lastDirection==="b"?E.direction="l":E.direction="r",E.lastDirection=E.direction),E.isKeyboardReady=!1):J==="arrowright"||J==="d"?(E.direction==="f"?(E.lastDirection=E.direction,E.direction="l"):E.direction==="l"?(E.lastDirection=E.direction,E.direction="b"):E.direction==="r"?(E.lastDirection=E.direction,E.direction="f"):E.direction==="b"?(E.lastDirection=E.direction,E.direction="r"):(E.direction==="u"||E.direction==="d")&&(E.lastDirection==="b"?E.direction="r":E.lastDirection==="r"?E.direction="f":E.lastDirection==="l"?E.direction="b":E.direction="l",E.lastDirection=E.direction),E.isKeyboardReady=!1):J==="arrowup"||J==="w"?(E.direction==="f"||E.direction==="l"||E.direction==="r"||E.direction==="b"?(E.lastDirection=E.direction,E.direction="u"):(E.direction==="u"||E.direction==="d")&&(E.lastDirection==="l"?E.direction="l":E.lastDirection==="r"?E.direction="r":E.lastDirection==="b"?E.direction="b":E.direction="f",E.lastDirection=E.direction),E.isKeyboardReady=!1):(J==="arrowdown"||J==="s")&&(E.direction==="f"||E.direction==="l"||E.direction==="r"||E.direction==="b"?(E.lastDirection=E.direction,E.direction="d"):(E.direction==="u"||E.direction==="d")&&(E.lastDirection==="l"?E.direction="r":E.lastDirection==="r"?E.direction="l":E.lastDirection==="b"?E.direction="f":E.direction="b",E.lastDirection=E.direction),E.isKeyboardReady=!1)};window.addEventListener("keydown",Y);const St=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",St),()=>{window.removeEventListener("keydown",Y),window.removeEventListener("resize",St),X&&cancelAnimationFrame(X),E.segments.forEach(U=>{h.remove(U),U.geometry.dispose(),U.material.dispose()}),m.dispose(),p.dispose()}},[s]);const u=()=>{i(0),l(!1)};return Kn.jsxs("div",{className:"scene-container",children:[Kn.jsx("canvas",{ref:o}),Kn.jsxs("div",{style:{position:"absolute",top:20,left:20,color:"white",fontSize:"24px"},children:["Score: ",t]}),s&&Kn.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"48px",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"20px",borderRadius:"10px"},children:[Kn.jsx("div",{children:"Game Over!"}),Kn.jsxs("div",{style:{fontSize:"24px"},children:["Final Score: ",t]}),Kn.jsx("button",{onClick:u,style:{fontSize:"24px",padding:"10px 20px",marginTop:"20px",cursor:"pointer",backgroundColor:"#4CAF50",border:"none",color:"white",borderRadius:"5px"},children:"Play Again"})]}),Kn.jsxs("div",{style:{position:"absolute",bottom:20,left:20,color:"white",fontSize:"16px",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"10px",borderRadius:"5px"},children:["Controls:",Kn.jsx("br",{}),"Arrow Keys or WASD: Move in X-Y plane",Kn.jsx("br",{}),"Mouse: Rotate camera",Kn.jsx("br",{}),"Scroll: Zoom camera"]})]})}VS.createRoot(document.getElementById("root")).render(Kn.jsx(OS.StrictMode,{children:Kn.jsx(dA,{})}));
