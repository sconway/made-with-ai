(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function CS(){if(eg)return wo;eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var ng;function DS(){return ng||(ng=1,Lf.exports=CS()),Lf.exports}var qe=DS(),Uf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function LS(){if(ig)return ve;ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function M(w){return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function v(w,j,ht){this.props=w,this.context=j,this.refs=R,this.updater=ht||x}v.prototype.isReactComponent={},v.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},v.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=v.prototype;function O(w,j,ht){this.props=w,this.context=j,this.refs=R,this.updater=ht||x}var D=O.prototype=new _;D.constructor=O,b(D,v.prototype),D.isPureReactComponent=!0;var B=Array.isArray,V={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function F(w,j,ht,Rt,k,ft){return ht=ft.ref,{$$typeof:o,type:w,key:j,ref:ht!==void 0?ht:null,props:ft}}function mt(w,j){return F(w.type,j,void 0,void 0,void 0,w.props)}function G(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function T(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ht){return j[ht]})}var N=/\/+/g;function dt(w,j){return typeof w=="object"&&w!==null&&w.key!=null?T(""+w.key):j.toString(36)}function At(){}function q(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(At,At):(w.status="pending",w.then(function(j){w.status==="pending"&&(w.status="fulfilled",w.value=j)},function(j){w.status==="pending"&&(w.status="rejected",w.reason=j)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function nt(w,j,ht,Rt,k){var ft=typeof w;(ft==="undefined"||ft==="boolean")&&(w=null);var Tt=!1;if(w===null)Tt=!0;else switch(ft){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(w.$$typeof){case o:case e:Tt=!0;break;case g:return Tt=w._init,nt(Tt(w._payload),j,ht,Rt,k)}}if(Tt)return k=k(w),Tt=Rt===""?"."+dt(w,0):Rt,B(k)?(ht="",Tt!=null&&(ht=Tt.replace(N,"$&/")+"/"),nt(k,j,ht,"",function(yt){return yt})):k!=null&&(G(k)&&(k=mt(k,ht+(k.key==null||w&&w.key===k.key?"":(""+k.key).replace(N,"$&/")+"/")+Tt)),j.push(k)),1;Tt=0;var Zt=Rt===""?".":Rt+":";if(B(w))for(var gt=0;gt<w.length;gt++)Rt=w[gt],ft=Zt+dt(Rt,gt),Tt+=nt(Rt,j,ht,ft,k);else if(gt=M(w),typeof gt=="function")for(w=gt.call(w),gt=0;!(Rt=w.next()).done;)Rt=Rt.value,ft=Zt+dt(Rt,gt++),Tt+=nt(Rt,j,ht,ft,k);else if(ft==="object"){if(typeof w.then=="function")return nt(q(w),j,ht,Rt,k);throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function I(w,j,ht){if(w==null)return w;var Rt=[],k=0;return nt(w,Rt,"","",function(ft){return j.call(ht,ft,k++)}),Rt}function it(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(ht){(w._status===0||w._status===-1)&&(w._status=1,w._result=ht)},function(ht){(w._status===0||w._status===-1)&&(w._status=2,w._result=ht)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var $=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function lt(){}return ve.Children={map:I,forEach:function(w,j,ht){I(w,function(){j.apply(this,arguments)},ht)},count:function(w){var j=0;return I(w,function(){j++}),j},toArray:function(w){return I(w,function(j){return j})||[]},only:function(w){if(!G(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ve.Component=v,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=O,ve.StrictMode=r,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ve.act=function(){throw Error("act(...) is not supported in production builds of React.")},ve.cache=function(w){return function(){return w.apply(null,arguments)}},ve.cloneElement=function(w,j,ht){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Rt=b({},w.props),k=w.key,ft=void 0;if(j!=null)for(Tt in j.ref!==void 0&&(ft=void 0),j.key!==void 0&&(k=""+j.key),j)!H.call(j,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&j.ref===void 0||(Rt[Tt]=j[Tt]);var Tt=arguments.length-2;if(Tt===1)Rt.children=ht;else if(1<Tt){for(var Zt=Array(Tt),gt=0;gt<Tt;gt++)Zt[gt]=arguments[gt+2];Rt.children=Zt}return F(w.type,k,void 0,void 0,ft,Rt)},ve.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},ve.createElement=function(w,j,ht){var Rt,k={},ft=null;if(j!=null)for(Rt in j.key!==void 0&&(ft=""+j.key),j)H.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(k[Rt]=j[Rt]);var Tt=arguments.length-2;if(Tt===1)k.children=ht;else if(1<Tt){for(var Zt=Array(Tt),gt=0;gt<Tt;gt++)Zt[gt]=arguments[gt+2];k.children=Zt}if(w&&w.defaultProps)for(Rt in Tt=w.defaultProps,Tt)k[Rt]===void 0&&(k[Rt]=Tt[Rt]);return F(w,ft,void 0,void 0,null,k)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(w){return{$$typeof:h,render:w}},ve.isValidElement=G,ve.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:it}},ve.memo=function(w,j){return{$$typeof:m,type:w,compare:j===void 0?null:j}},ve.startTransition=function(w){var j=V.T,ht={};V.T=ht;try{var Rt=w(),k=V.S;k!==null&&k(ht,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(lt,$)}catch(ft){$(ft)}finally{V.T=j}},ve.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ve.use=function(w){return V.H.use(w)},ve.useActionState=function(w,j,ht){return V.H.useActionState(w,j,ht)},ve.useCallback=function(w,j){return V.H.useCallback(w,j)},ve.useContext=function(w){return V.H.useContext(w)},ve.useDebugValue=function(){},ve.useDeferredValue=function(w,j){return V.H.useDeferredValue(w,j)},ve.useEffect=function(w,j){return V.H.useEffect(w,j)},ve.useId=function(){return V.H.useId()},ve.useImperativeHandle=function(w,j,ht){return V.H.useImperativeHandle(w,j,ht)},ve.useInsertionEffect=function(w,j){return V.H.useInsertionEffect(w,j)},ve.useLayoutEffect=function(w,j){return V.H.useLayoutEffect(w,j)},ve.useMemo=function(w,j){return V.H.useMemo(w,j)},ve.useOptimistic=function(w,j){return V.H.useOptimistic(w,j)},ve.useReducer=function(w,j,ht){return V.H.useReducer(w,j,ht)},ve.useRef=function(w){return V.H.useRef(w)},ve.useState=function(w){return V.H.useState(w)},ve.useSyncExternalStore=function(w,j,ht){return V.H.useSyncExternalStore(w,j,ht)},ve.useTransition=function(){return V.H.useTransition()},ve.version="19.0.0",ve}var ag;function Ah(){return ag||(ag=1,Uf.exports=LS()),Uf.exports}var Ae=Ah(),Nf={exports:{}},Co={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function US(){return rg||(rg=1,function(o){function e(I,it){var $=I.length;I.push(it);t:for(;0<$;){var lt=$-1>>>1,w=I[lt];if(0<l(w,it))I[lt]=it,I[$]=w,$=lt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var it=I[0],$=I.pop();if($!==it){I[0]=$;t:for(var lt=0,w=I.length,j=w>>>1;lt<j;){var ht=2*(lt+1)-1,Rt=I[ht],k=ht+1,ft=I[k];if(0>l(Rt,$))k<w&&0>l(ft,Rt)?(I[lt]=ft,I[k]=$,lt=k):(I[lt]=Rt,I[ht]=$,lt=ht);else if(k<w&&0>l(ft,$))I[lt]=ft,I[k]=$,lt=k;else break t}}return it}function l(I,it){var $=I.sortIndex-it.sortIndex;return $!==0?$:I.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,S=null,M=3,x=!1,b=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var it=i(m);it!==null;){if(it.callback===null)r(m);else if(it.startTime<=I)r(m),it.sortIndex=it.expirationTime,e(p,it);else break;it=i(m)}}function B(I){if(R=!1,D(I),!b)if(i(p)!==null)b=!0,q();else{var it=i(m);it!==null&&nt(B,it.startTime-I)}}var V=!1,H=-1,F=5,mt=-1;function G(){return!(o.unstable_now()-mt<F)}function T(){if(V){var I=o.unstable_now();mt=I;var it=!0;try{t:{b=!1,R&&(R=!1,_(H),H=-1),x=!0;var $=M;try{e:{for(D(I),S=i(p);S!==null&&!(S.expirationTime>I&&G());){var lt=S.callback;if(typeof lt=="function"){S.callback=null,M=S.priorityLevel;var w=lt(S.expirationTime<=I);if(I=o.unstable_now(),typeof w=="function"){S.callback=w,D(I),it=!0;break e}S===i(p)&&r(p),D(I)}else r(p);S=i(p)}if(S!==null)it=!0;else{var j=i(m);j!==null&&nt(B,j.startTime-I),it=!1}}break t}finally{S=null,M=$,x=!1}it=void 0}}finally{it?N():V=!1}}}var N;if(typeof O=="function")N=function(){O(T)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,At=dt.port2;dt.port1.onmessage=T,N=function(){At.postMessage(null)}}else N=function(){v(T,0)};function q(){V||(V=!0,N())}function nt(I,it){H=v(function(){I(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_continueExecution=function(){b||x||(b=!0,q())},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(I){switch(M){case 1:case 2:case 3:var it=3;break;default:it=M}var $=M;M=it;try{return I()}finally{M=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(I,it){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=M;M=I;try{return it()}finally{M=$}},o.unstable_scheduleCallback=function(I,it,$){var lt=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?lt+$:lt):$=lt,I){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=$+w,I={id:g++,callback:it,priorityLevel:I,startTime:$,expirationTime:w,sortIndex:-1},$>lt?(I.sortIndex=$,e(m,I),i(p)===null&&I===i(m)&&(R?(_(H),H=-1):R=!0,nt(B,$-lt))):(I.sortIndex=w,e(p,I),b||x||(b=!0,q())),I},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(I){var it=M;return function(){var $=M;M=it;try{return I.apply(this,arguments)}finally{M=$}}}}(Pf)),Pf}var sg;function NS(){return sg||(sg=1,Of.exports=US()),Of.exports}var zf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function OS(){if(og)return wn;og=1;var o=Ah();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:p,containerInfo:m,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},wn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,S=h(g,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:x}):g==="script"&&r.d.X(p,{crossOrigin:S,integrity:M,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,S=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var lg;function PS(){if(lg)return zf.exports;lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=OS(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function zS(){if(cg)return Co;cg=1;var o=NS(),e=Ah(),i=PS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case h:return"Portal";case g:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case v:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case b:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case O:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,N,dt;function At(t){if(N===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+t+dt}var q=!1;function nt(t,n){if(!t||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(pt){var at=pt}Reflect.construct(t,[],wt)}else{try{wt.call()}catch(pt){at=pt}t.call(wt.prototype)}}else{try{throw Error()}catch(pt){at=pt}(wt=t())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(pt){if(pt&&at&&typeof pt.stack=="string")return[pt.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var z=y.split(`
`),Y=A.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Y.length)for(s=z.length-1,c=Y.length-1;1<=s&&0<=c&&z[s]!==Y[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Y[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Y[c]){var _t=`
`+z[s].replace(" at new "," at ");return t.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",t.displayName)),_t}while(1<=s&&0<=c);break}}}finally{q=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?At(a):""}function I(t){switch(t.tag){case 26:case 27:case 5:return At(t.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return t=nt(t.type,!1),t;case 11:return t=nt(t.type.render,!1),t;case 1:return t=nt(t.type,!0),t;default:return""}}function it(t){try{var n="";do n+=I(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function lt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function w(t){if($(t)!==t)throw Error(r(188))}function j(t){var n=t.alternate;if(!n){if(n=$(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return w(c),t;if(f===s)return w(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var y=!1,A=c.child;A;){if(A===a){y=!0,a=c,s=f;break}if(A===s){y=!0,s=c,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,s=c;break}if(A===s){y=!0,s=f,a=c;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function ht(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=ht(t),n!==null)return n;t=t.sibling}return null}var Rt=Array.isArray,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},Tt=[],Zt=-1;function gt(t){return{current:t}}function yt(t){0>Zt||(t.current=Tt[Zt],Tt[Zt]=null,Zt--)}function Ot(t,n){Zt++,Tt[Zt]=t.current,t.current=n}var Wt=gt(null),K=gt(null),Se=gt(null),Ct=gt(null);function ne(t,n){switch(Ot(Se,n),Ot(K,t),Ot(Wt,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Dm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Dm(t),n=Lm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}yt(Wt),Ot(Wt,n)}function Bt(){yt(Wt),yt(K),yt(Se)}function Xt(t){t.memoizedState!==null&&Ot(Ct,t);var n=Wt.current,a=Lm(n,t.type);n!==a&&(Ot(K,t),Ot(Wt,a))}function Ft(t){K.current===t&&(yt(Wt),yt(K)),Ct.current===t&&(yt(Ct),Eo._currentValue=ft)}var L=Object.prototype.hasOwnProperty,E=o.unstable_scheduleCallback,J=o.unstable_cancelCallback,ct=o.unstable_shouldYield,vt=o.unstable_requestPaint,ut=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,se=o.unstable_LowPriority,Mt=o.unstable_IdlePriority,Re=o.log,pe=o.unstable_setDisableYieldValue,oe=null,jt=null;function kt(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(oe,t,void 0,(t.current.flags&128)===128)}catch{}}function ce(t){if(typeof Re=="function"&&pe(t),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(oe,t)}catch{}}var P=Math.clz32?Math.clz32:qt,Nt=Math.log,Gt=Math.LN2;function qt(t){return t>>>=0,t===0?32:31-(Nt(t)/Gt|0)|0}var U=128,Lt=4194304;function xt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Kt(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,y=t.warmLanes;t=t.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?s=xt(a):(f&=A,f!==0?s=xt(f):t||(y=A&~y,y!==0&&(s=xt(y))))):(A=a&~c,A!==0?s=xt(A):f!==0?s=xt(f):t||(y=a&~y,y!==0&&(s=xt(y)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,y=n&-n,c>=y||c===32&&(y&4194176)!==0)?n:s}function st(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Dt(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var t=U;return U<<=1,!(U&4194176)&&(U=128),t}function zt(){var t=Lt;return Lt<<=1,!(Lt&62914560)&&(Lt=4194304),t}function Pt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jt(t,n,a,s,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,Y=t.hiddenUpdates;for(a=y&~a;0<a;){var _t=31-P(a),wt=1<<_t;A[_t]=0,z[_t]=-1;var at=Y[_t];if(at!==null)for(Y[_t]=null,_t=0;_t<at.length;_t++){var pt=at[_t];pt!==null&&(pt.lane&=-536870913)}a&=~wt}s!==0&&le(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function le(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-P(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function De(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-P(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ge(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function He(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Zm(t.type))}function Ke(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var Pe=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Pe,je="__reactProps$"+Pe,Wn="__reactContainer$"+Pe,ti="__reactEvents$"+Pe,ka="__reactListeners$"+Pe,C="__reactHandles$"+Pe,Q="__reactResources$"+Pe,rt="__reactMarker$"+Pe;function ot(t){delete t[Ue],delete t[je],delete t[ti],delete t[ka],delete t[C]}function et(t){var n=t[Ue];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wn]||a[Ue]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Om(t);t!==null;){if(a=t[Ue])return a;t=Om(t)}return n}t=a,a=t.parentNode}return null}function It(t){if(t=t[Ue]||t[Wn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function $t(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Qt(t){var n=t[Q];return n||(n=t[Q]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function te(t){t[rt]=!0}var _e=new Set,he={};function fe(t,n){ze(t,n),ze(t+"Capture",n)}function ze(t,n){for(he[t]=n,t=0;t<n.length;t++)_e.add(n[t])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),on=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ei={},ke={};function ye(t){return L.call(ke,t)?!0:L.call(ei,t)?!1:on.test(t)?ke[t]=!0:(ei[t]=!0,!1)}function sa(t,n,a){if(ye(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ge(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function yn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(t){var n=oa(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function an(t){t._valueTracker||(t._valueTracker=Ns(t))}function Ti(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=oa(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function la(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fn=/[\n"\\]/g;function An(t){return t.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Os(t,n,a,s,c,f,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Un(n)):t.value!==""+Un(n)&&(t.value=""+Un(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,y,Un(n)):a!=null?Cc(t,y,Un(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Un(A):t.removeAttribute("name")}function Ps(t,n,a,s,c,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Un(a):"",n=n!=null?""+Un(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Cc(t,n,a){n==="number"&&la(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Un(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function zh(t,n,a){if(n!=null&&(n=""+Un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Un(a):""}function Bh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Un(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var A0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||A0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ih(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Fh(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return w0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,Rr=null;function Hh(t){var n=It(t);if(n&&(t=n.stateNode)){var a=t[je]||null;t:switch(t=n.stateNode,n.type){case"input":if(Os(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+An(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[je]||null;if(!c)throw Error(r(90));Os(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ti(s)}break t;case"textarea":zh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var Nc=!1;function Gh(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var s=t(n);return s}finally{if(Nc=!1,(Ar!==null||Rr!==null)&&(Tl(),Ar&&(n=Ar,t=Rr,Rr=Ar=null,Hh(n),t)))for(n=0;n<t.length;n++)Hh(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Qe)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oc=!1}var ca=null,Pc=null,Vo=null;function Vh(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function kh(){return!1}function In(t){function n(a,s,c,f,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:kh,this.isPropagationStopped=kh,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=In(Wa),Fs=T({},Wa,{view:0,detail:0}),C0=In(Fs),zc,Bc,Is,qo=T({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(zc=t.screenX-Is.screenX,Bc=t.screenY-Is.screenY):Bc=zc=0,Is=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Wh=In(qo),D0=T({},qo,{dataTransfer:0}),L0=In(D0),U0=T({},Fs,{relatedTarget:0}),Fc=In(U0),N0=T({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=In(N0),P0=T({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=In(P0),B0=T({},Wa,{data:0}),Xh=In(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=H0[t])?!!n[t]:!1}function Ic(){return G0}var V0=T({},Fs,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=In(V0),W0=T({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=In(W0),X0=T({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),q0=In(X0),Y0=T({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=In(Y0),Z0=T({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=In(Z0),Q0=T({},Wa,{newState:0,oldState:0}),J0=In(Q0),$0=[9,13,27,32],Hc=Qe&&"CompositionEvent"in window,Hs=null;Qe&&"documentMode"in document&&(Hs=document.documentMode);var tv=Qe&&"TextEvent"in window&&!Hs,Yh=Qe&&(!Hc||Hs&&8<Hs&&11>=Hs),jh=" ",Zh=!1;function Kh(t,n){switch(t){case"keyup":return $0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function ev(t,n){switch(t){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,jh);case"textInput":return t=n.data,t===jh&&Zh?null:t;default:return null}}function nv(t,n){if(wr)return t==="compositionend"||!Hc&&Kh(t,n)?(t=Vh(),Vo=Pc=ca=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yh&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iv[t.type]:n==="textarea"}function $h(t,n,a,s){Ar?Rr?Rr.push(s):Rr=[s]:Ar=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function av(t){bm(t,0)}function Yo(t){var n=$t(t);if(Ti(n))return t}function td(t,n){if(t==="change")return n}var ed=!1;if(Qe){var Gc;if(Qe){var Vc="oninput"in document;if(!Vc){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),Vc=typeof nd.oninput=="function"}Gc=Vc}else Gc=!1;ed=Gc&&(!document.documentMode||9<document.documentMode)}function id(){Gs&&(Gs.detachEvent("onpropertychange",ad),Vs=Gs=null)}function ad(t){if(t.propertyName==="value"&&Yo(Vs)){var n=[];$h(n,Vs,t,Uc(t)),Gh(av,n)}}function rv(t,n,a){t==="focusin"?(id(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",ad)):t==="focusout"&&id()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Vs)}function ov(t,n){if(t==="click")return Yo(n)}function lv(t,n){if(t==="input"||t==="change")return Yo(n)}function cv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:cv;function ks(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!L.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sd(t,n){var a=rd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rd(a)}}function od(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?od(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ld(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=la(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=la(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function uv(t,n){var a=ld(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&od(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=sd(n,f);var y=sd(n,s);c&&y&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==y.node||a.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var fv=Qe&&"documentMode"in document&&11>=document.documentMode,Cr=null,Wc=null,Ws=null,Xc=!1;function cd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Cr==null||Cr!==la(s)||(s=Cr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&ks(Ws,s)||(Ws=s,s=Cl(Wc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},qc={},ud={};Qe&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function qa(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ud)return qc[t]=n[a];return t}var fd=qa("animationend"),hd=qa("animationiteration"),dd=qa("animationstart"),hv=qa("transitionrun"),dv=qa("transitionstart"),pv=qa("transitioncancel"),pd=qa("transitionend"),md=new Map,gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(t,n){md.set(t,n),fe(n,[t])}var ni=[],Lr=0,Yc=0;function jo(){for(var t=Lr,n=Yc=Lr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&_d(a,c,f)}}function Zo(t,n,a,s){ni[Lr++]=t,ni[Lr++]=n,ni[Lr++]=a,ni[Lr++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function ua(t,n){return Zo(t,null,null,n),Ko(t)}function _d(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-P(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<go)throw go=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={},vd=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=vd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:it(n)},vd.set(t,n),n)}return{value:t,source:n,stack:it(n)}}var Nr=[],Or=0,Qo=null,Jo=0,ai=[],ri=0,Ya=null,Pi=1,zi="";function ja(t,n){Nr[Or++]=Jo,Nr[Or++]=Qo,Qo=t,Jo=n}function Sd(t,n,a){ai[ri++]=Pi,ai[ri++]=zi,ai[ri++]=Ya,Ya=t;var s=Pi;t=zi;var c=32-P(s)-1;s&=~(1<<c),a+=1;var f=32-P(n)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Pi=1<<32-P(n)+c|a<<c|s,zi=f+t}else Pi=1<<f|a<<c|s,zi=t}function Zc(t){t.return!==null&&(ja(t,1),Sd(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Jo=Nr[--Or],Nr[Or]=null;for(;t===Ya;)Ya=ai[--ri],ai[ri]=null,zi=ai[--ri],ai[ri]=null,Pi=ai[--ri],ai[ri]=null}var Nn=null,Mn=null,Ne=!1,gi=null,bi=!1,Qc=Error(r(519));function Za(t){var n=Error(r(418,""));throw Ys(ii(n,t)),Qc}function yd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ue]=t,n[je]=s,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)we(vo[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Ps(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),an(n);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Bh(n,s.value,s.defaultValue,s.children),an(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cm(n.textContent,a)?(s.popover!=null&&(we("beforetoggle",n),we("toggle",n)),s.onScroll!=null&&we("scroll",n),s.onScrollEnd!=null&&we("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Za(t)}function Md(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:Nn=Nn.return}}function Xs(t){if(t!==Nn)return!1;if(!Ne)return Md(t),Ne=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Mn&&Za(t),Md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Mn=vi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Mn=null}}else Mn=Nn?vi(t.stateNode.nextSibling):null;return!0}function qs(){Mn=Nn=null,Ne=!1}function Ys(t){gi===null?gi=[t]:gi.push(t)}var js=Error(r(460)),xd=Error(r(474)),Jc={then:function(){}};function Ed(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function Td(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===js?Error(r(483)):t}throw Zs=n,js}}var Zs=null;function bd(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}var Pr=null,Ks=0;function tl(t){var n=Ks;return Ks+=1,Pr===null&&(Pr=[]),Td(Pr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ad(t){var n=t._init;return n(t._payload)}function Rd(t){function n(Z,W){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[W],Z.flags|=16):tt.push(W)}}function a(Z,W){if(!t)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function s(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function c(Z,W){return Z=xa(Z,W),Z.index=0,Z.sibling=null,Z}function f(Z,W,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<W?(Z.flags|=33554434,W):tt):(Z.flags|=33554434,W)):(Z.flags|=1048576,W)}function y(Z){return t&&Z.alternate===null&&(Z.flags|=33554434),Z}function A(Z,W,tt,St){return W===null||W.tag!==6?(W=qu(tt,Z.mode,St),W.return=Z,W):(W=c(W,tt),W.return=Z,W)}function z(Z,W,tt,St){var ee=tt.type;return ee===p?_t(Z,W,tt.props.children,St,tt.key):W!==null&&(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===O&&Ad(ee)===W.type)?(W=c(W,tt.props),Qs(W,tt),W.return=Z,W):(W=Sl(tt.type,tt.key,tt.props,null,Z.mode,St),Qs(W,tt),W.return=Z,W)}function Y(Z,W,tt,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=Yu(tt,Z.mode,St),W.return=Z,W):(W=c(W,tt.children||[]),W.return=Z,W)}function _t(Z,W,tt,St,ee){return W===null||W.tag!==7?(W=rr(tt,Z.mode,St,ee),W.return=Z,W):(W=c(W,tt),W.return=Z,W)}function wt(Z,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=qu(""+W,Z.mode,tt),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case d:return tt=Sl(W.type,W.key,W.props,null,Z.mode,tt),Qs(tt,W),tt.return=Z,tt;case h:return W=Yu(W,Z.mode,tt),W.return=Z,W;case O:var St=W._init;return W=St(W._payload),wt(Z,W,tt)}if(Rt(W)||H(W))return W=rr(W,Z.mode,tt,null),W.return=Z,W;if(typeof W.then=="function")return wt(Z,tl(W),tt);if(W.$$typeof===x)return wt(Z,gl(Z,W),tt);el(Z,W)}return null}function at(Z,W,tt,St){var ee=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ee!==null?null:A(Z,W,""+tt,St);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case d:return tt.key===ee?z(Z,W,tt,St):null;case h:return tt.key===ee?Y(Z,W,tt,St):null;case O:return ee=tt._init,tt=ee(tt._payload),at(Z,W,tt,St)}if(Rt(tt)||H(tt))return ee!==null?null:_t(Z,W,tt,St,null);if(typeof tt.then=="function")return at(Z,W,tl(tt),St);if(tt.$$typeof===x)return at(Z,W,gl(Z,tt),St);el(Z,tt)}return null}function pt(Z,W,tt,St,ee){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Z=Z.get(tt)||null,A(W,Z,""+St,ee);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case d:return Z=Z.get(St.key===null?tt:St.key)||null,z(W,Z,St,ee);case h:return Z=Z.get(St.key===null?tt:St.key)||null,Y(W,Z,St,ee);case O:var Ee=St._init;return St=Ee(St._payload),pt(Z,W,tt,St,ee)}if(Rt(St)||H(St))return Z=Z.get(tt)||null,_t(W,Z,St,ee,null);if(typeof St.then=="function")return pt(Z,W,tt,tl(St),ee);if(St.$$typeof===x)return pt(Z,W,tt,gl(W,St),ee);el(W,St)}return null}function ae(Z,W,tt,St){for(var ee=null,Ee=null,re=W,ue=W=0,vn=null;re!==null&&ue<tt.length;ue++){re.index>ue?(vn=re,re=null):vn=re.sibling;var Oe=at(Z,re,tt[ue],St);if(Oe===null){re===null&&(re=vn);break}t&&re&&Oe.alternate===null&&n(Z,re),W=f(Oe,W,ue),Ee===null?ee=Oe:Ee.sibling=Oe,Ee=Oe,re=vn}if(ue===tt.length)return a(Z,re),Ne&&ja(Z,ue),ee;if(re===null){for(;ue<tt.length;ue++)re=wt(Z,tt[ue],St),re!==null&&(W=f(re,W,ue),Ee===null?ee=re:Ee.sibling=re,Ee=re);return Ne&&ja(Z,ue),ee}for(re=s(re);ue<tt.length;ue++)vn=pt(re,Z,ue,tt[ue],St),vn!==null&&(t&&vn.alternate!==null&&re.delete(vn.key===null?ue:vn.key),W=f(vn,W,ue),Ee===null?ee=vn:Ee.sibling=vn,Ee=vn);return t&&re.forEach(function(Ca){return n(Z,Ca)}),Ne&&ja(Z,ue),ee}function me(Z,W,tt,St){if(tt==null)throw Error(r(151));for(var ee=null,Ee=null,re=W,ue=W=0,vn=null,Oe=tt.next();re!==null&&!Oe.done;ue++,Oe=tt.next()){re.index>ue?(vn=re,re=null):vn=re.sibling;var Ca=at(Z,re,Oe.value,St);if(Ca===null){re===null&&(re=vn);break}t&&re&&Ca.alternate===null&&n(Z,re),W=f(Ca,W,ue),Ee===null?ee=Ca:Ee.sibling=Ca,Ee=Ca,re=vn}if(Oe.done)return a(Z,re),Ne&&ja(Z,ue),ee;if(re===null){for(;!Oe.done;ue++,Oe=tt.next())Oe=wt(Z,Oe.value,St),Oe!==null&&(W=f(Oe,W,ue),Ee===null?ee=Oe:Ee.sibling=Oe,Ee=Oe);return Ne&&ja(Z,ue),ee}for(re=s(re);!Oe.done;ue++,Oe=tt.next())Oe=pt(re,Z,ue,Oe.value,St),Oe!==null&&(t&&Oe.alternate!==null&&re.delete(Oe.key===null?ue:Oe.key),W=f(Oe,W,ue),Ee===null?ee=Oe:Ee.sibling=Oe,Ee=Oe);return t&&re.forEach(function(wS){return n(Z,wS)}),Ne&&ja(Z,ue),ee}function nn(Z,W,tt,St){if(typeof tt=="object"&&tt!==null&&tt.type===p&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case d:t:{for(var ee=tt.key;W!==null;){if(W.key===ee){if(ee=tt.type,ee===p){if(W.tag===7){a(Z,W.sibling),St=c(W,tt.props.children),St.return=Z,Z=St;break t}}else if(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===O&&Ad(ee)===W.type){a(Z,W.sibling),St=c(W,tt.props),Qs(St,tt),St.return=Z,Z=St;break t}a(Z,W);break}else n(Z,W);W=W.sibling}tt.type===p?(St=rr(tt.props.children,Z.mode,St,tt.key),St.return=Z,Z=St):(St=Sl(tt.type,tt.key,tt.props,null,Z.mode,St),Qs(St,tt),St.return=Z,Z=St)}return y(Z);case h:t:{for(ee=tt.key;W!==null;){if(W.key===ee)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){a(Z,W.sibling),St=c(W,tt.children||[]),St.return=Z,Z=St;break t}else{a(Z,W);break}else n(Z,W);W=W.sibling}St=Yu(tt,Z.mode,St),St.return=Z,Z=St}return y(Z);case O:return ee=tt._init,tt=ee(tt._payload),nn(Z,W,tt,St)}if(Rt(tt))return ae(Z,W,tt,St);if(H(tt)){if(ee=H(tt),typeof ee!="function")throw Error(r(150));return tt=ee.call(tt),me(Z,W,tt,St)}if(typeof tt.then=="function")return nn(Z,W,tl(tt),St);if(tt.$$typeof===x)return nn(Z,W,gl(Z,tt),St);el(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(a(Z,W.sibling),St=c(W,tt),St.return=Z,Z=St):(a(Z,W),St=qu(tt,Z.mode,St),St.return=Z,Z=St),y(Z)):a(Z,W)}return function(Z,W,tt,St){try{Ks=0;var ee=nn(Z,W,tt,St);return Pr=null,ee}catch(re){if(re===js)throw re;var Ee=ci(29,re,null,Z.mode);return Ee.lanes=St,Ee.return=Z,Ee}finally{}}}var Ka=Rd(!0),wd=Rd(!1),zr=gt(null),nl=gt(0);function Cd(t,n){t=Yi,Ot(nl,t),Ot(zr,n),Yi=t|n.baseLanes}function $c(){Ot(nl,Yi),Ot(zr,zr.current)}function tu(){Yi=nl.current,yt(zr),yt(nl)}var si=gt(null),Ai=null;function fa(t){var n=t.alternate;Ot(hn,hn.current&1),Ot(si,t),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Dd(t){if(t.tag===22){if(Ot(hn,hn.current),Ot(si,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else ha()}function ha(){Ot(hn,hn.current),Ot(si,si.current)}function Bi(t){yt(si),Ai===t&&(Ai=null),yt(hn)}var hn=gt(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gv=o.unstable_scheduleCallback,_v=o.unstable_NormalPriority,dn={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&gv(_v,function(){t.controller.abort()})}var $s=null,nu=0,Br=0,Fr=null;function vv(t,n){if($s===null){var a=$s=[];nu=0,Br=cf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(Ld,Ld),n}function Ld(){if(--nu===0&&$s!==null){Fr!==null&&(Fr.status="fulfilled");var t=$s;$s=null,Br=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Sv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ud=G.S;G.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vv(t,n),Ud!==null&&Ud(t,n)};var Qa=gt(null);function iu(){var t=Qa.current;return t!==null?t:We.pooledCache}function al(t,n){n===null?Ot(Qa,Qa.current):Ot(Qa,n.pool)}function Nd(){var t=iu();return t===null?null:{parent:dn._currentValue,pool:t}}var da=0,xe=null,Be=null,ln=null,rl=!1,Ir=!1,Ja=!1,sl=0,to=0,Hr=null,yv=0;function rn(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function ru(t,n,a,s,c,f){return da=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=t===null||t.memoizedState===null?$a:pa,Ja=!1,f=a(s,c),Ja=!1,Ir&&(f=Pd(n,a,s,c)),Od(t),f}function Od(t){G.H=Ri;var n=Be!==null&&Be.next!==null;if(da=0,ln=Be=xe=null,rl=!1,to=0,Hr=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&ml(t)&&(gn=!0))}function Pd(t,n,a,s){xe=t;var c=0;do{if(Ir&&(Hr=null),to=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,ln=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=tr,f=n(a,s)}while(Ir);return f}function Mv(){var t=G.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(xe.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}da=0,ln=Be=xe=null,Ir=!1,to=sl=0,Hr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?xe.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(Be===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=ln===null?xe.memoizedState:ln.next;if(n!==null)ln=n,Be=t;else{if(t===null)throw xe.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ln===null?xe.memoizedState=ln=t:ln=ln.next=t}return ln}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function eo(t){var n=to;return to+=1,Hr===null&&(Hr=[]),t=Td(Hr,t,n),n=xe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?$a:pa),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===x)return Rn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=cn();return uu(n,Be,t)}function uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=y=null,z=null,Y=n,_t=!1;do{var wt=Y.lane&-536870913;if(wt!==Y.lane?(Le&wt)===wt:(da&wt)===wt){var at=Y.revertLane;if(at===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),wt===Br&&(_t=!0);else if((da&at)===at){Y=Y.next,at===Br&&(_t=!0);continue}else wt={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(A=z=wt,y=f):z=z.next=wt,xe.lanes|=at,Ea|=at;wt=Y.action,Ja&&a(f,wt),f=Y.hasEagerState?Y.eagerState:a(f,wt)}else at={lane:wt,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(A=z=at,y=f):z=z.next=at,xe.lanes|=wt,Ea|=wt;Y=Y.next}while(Y!==null&&Y!==n);if(z===null?y=f:z.next=A,!Xn(f,t.memoizedState)&&(gn=!0,_t&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fu(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);Xn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zd(t,n,a){var s=xe,c=cn(),f=Ne;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Xn((Be||c).memoizedState,a);if(y&&(c.memoizedState=a,gn=!0),c=c.queue,pu(Id.bind(null,s,c,t),[t]),c.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,Gr(9,Fd.bind(null,s,c,a,n),{destroy:void 0},null),We===null)throw Error(r(349));f||da&60||Bd(s,n,a)}return a}function Bd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=ol(),xe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fd(t,n,a,s){n.value=a,n.getSnapshot=s,Hd(n)&&Gd(t)}function Id(t,n,a){return a(function(){Hd(n)&&Gd(t)})}function Hd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Gd(t){var n=ua(t,2);n!==null&&On(n,t,2)}function hu(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Ja){ce(!0);try{a()}finally{ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Vd(t,n,a,s){return t.baseState=a,uu(t,Be,typeof s=="function"?s:Fi)}function xv(t,n,a,s,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};G.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=G.T,y={};G.T=y;try{var A=a(c,s),z=G.S;z!==null&&z(y,A),Wd(t,n,A)}catch(Y){du(t,n,Y)}finally{G.T=f}}else try{f=a(c,s),Wd(t,n,f)}catch(Y){du(t,n,Y)}}function Wd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xd(t,n,s)},function(s){return du(t,n,s)}):Xd(t,n,a)}function Xd(t,n,a){n.status="fulfilled",n.value=a,qd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kd(t,a)))}function du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qd(n),n=n.next;while(n!==s)}t.action=null}function qd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yd(t,n){return n}function jd(t,n){if(Ne){var a=We.formState;if(a!==null){t:{var s=xe;if(Ne){if(Mn){e:{for(var c=Mn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Mn=vi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:n},a.queue=s,a=hp.bind(null,xe,s),s.dispatch=a,s=hu(!1),f=Su.bind(null,xe,!1,s.queue),s=Hn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=xv.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zd(t){var n=cn();return Kd(n,Be,t)}function Kd(t,n,a){n=uu(t,n,Yd)[0],t=cl(Fi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?eo(n):n;var s=cn(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(xe.flags|=2048,Gr(9,Ev.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function Ev(t,n){t.action=n}function Qd(t){var n=cn(),a=Be;if(a!==null)return Kd(n,a,t);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=xe.updateQueue,n===null&&(n=ol(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jd(){return cn().memoizedState}function ul(t,n,a,s){var c=Hn();xe.flags|=t,c.memoizedState=Gr(1|n,a,{destroy:void 0},s===void 0?null:s)}function fl(t,n,a,s){var c=cn();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&au(s,Be.memoizedState.deps)?c.memoizedState=Gr(n,a,f,s):(xe.flags|=t,c.memoizedState=Gr(1|n,a,f,s))}function $d(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function tp(t,n){return fl(4,2,t,n)}function ep(t,n){return fl(4,4,t,n)}function np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ip(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,np.bind(null,n,t),a)}function mu(){}function ap(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function rp(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=t(),Ja){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[s,n],s}function gu(t,n,a){return a===void 0||da&1073741824?t.memoizedState=n:(t.memoizedState=a,t=om(),xe.lanes|=t,Ea|=t,a)}function sp(t,n,a,s){return Xn(a,n)?a:zr.current!==null?(t=gu(t,a,s),Xn(t,n)||(gn=!0),t):da&42?(t=om(),xe.lanes|=t,Ea|=t,n):(gn=!0,t.memoizedState=a)}function op(t,n,a,s,c){var f=k.p;k.p=f!==0&&8>f?f:8;var y=G.T,A={};G.T=A,Su(t,!1,n,a);try{var z=c(),Y=G.S;if(Y!==null&&Y(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var _t=Sv(z,s);no(t,n,_t,Zn(t))}else no(t,n,s,Zn(t))}catch(wt){no(t,n,{then:function(){},status:"rejected",reason:wt},Zn())}finally{k.p=f,G.T=y}}function Tv(){}function _u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=lp(t).queue;op(t,c,n,ft,a===null?Tv:function(){return cp(t),a(s)})}function lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:ft},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cp(t){var n=lp(t).next.queue;no(t,n,{},Zn())}function vu(){return Rn(Eo)}function up(){return cn().memoizedState}function fp(){return cn().memoizedState}function bv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=_a(a);var s=va(n,t,a);s!==null&&(On(s,n,a),ro(s,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function Av(t,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?dp(n,a):(a=jc(t,n,a,s),a!==null&&(On(a,t,s),pp(a,n,s)))}function hp(t,n,a){var s=Zn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))dp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(c.hasEagerState=!0,c.eagerState=A,Xn(A,y))return Zo(t,n,c,0),We===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return On(a,t,s),pp(a,n,s),!0}return!1}function Su(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&On(n,t,2)}function hl(t){var n=t.alternate;return t===xe||n!==null&&n===xe}function dp(t,n){Ir=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pp(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,De(t,a)}}var Ri={readContext:Rn,use:ll,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn};Ri.useCacheRefresh=rn,Ri.useMemoCache=rn,Ri.useHostTransitionStatus=rn,Ri.useFormState=rn,Ri.useActionState=rn,Ri.useOptimistic=rn;var $a={readContext:Rn,use:ll,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:$d,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var s=t();if(Ja){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Hn();if(a!==void 0){var c=a(n);if(Ja){ce(!0);try{a(n)}finally{ce(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Av.bind(null,xe,t),[s.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,a=hp.bind(null,xe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Hn();return gu(a,t,n)},useTransition:function(){var t=hu(!1);return t=op.bind(null,xe,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=xe,c=Hn();if(Ne){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));Le&60||Bd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$d(Id.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,Fd.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Hn(),n=We.identifierPrefix;if(Ne){var a=zi,s=Pi;a=(s&~(1<<32-P(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=yv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Hn().memoizedState=bv.bind(null,xe)}};$a.useMemoCache=cu,$a.useHostTransitionStatus=vu,$a.useFormState=jd,$a.useActionState=jd,$a.useOptimistic=function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Su.bind(null,xe,!0,a),a.dispatch=n,[t,n]};var pa={readContext:Rn,use:ll,useCallback:ap,useContext:Rn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:cl,useRef:Jd,useState:function(){return cl(Fi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=cn();return sp(a,Be.memoizedState,t,n)},useTransition:function(){var t=cl(Fi)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zd,useId:up};pa.useCacheRefresh=fp,pa.useMemoCache=cu,pa.useHostTransitionStatus=vu,pa.useFormState=Zd,pa.useActionState=Zd,pa.useOptimistic=function(t,n){var a=cn();return Vd(a,Be,t,n)};var tr={readContext:Rn,use:ll,useCallback:ap,useContext:Rn,useEffect:pu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:ep,useMemo:rp,useReducer:fu,useRef:Jd,useState:function(){return fu(Fi)},useDebugValue:mu,useDeferredValue:function(t,n){var a=cn();return Be===null?gu(a,t,n):sp(a,Be.memoizedState,t,n)},useTransition:function(){var t=fu(Fi)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zd,useId:up};tr.useCacheRefresh=fp,tr.useMemoCache=cu,tr.useHostTransitionStatus=vu,tr.useFormState=Qd,tr.useActionState=Qd,tr.useOptimistic=function(t,n){var a=cn();return Be!==null?Vd(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])};function yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:T({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mu={isMounted:function(t){return(t=t._reactInternals)?$(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=_a(s);c.payload=n,a!=null&&(c.callback=a),n=va(t,c,s),n!==null&&(On(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=_a(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(t,c,s),n!==null&&(On(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(t,s,a),n!==null&&(On(n,t,a),ro(n,t,a))}};function mp(t,n,a,s,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function gp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Mu.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=T({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _p(t){dl(t)}function vp(t){console.error(t)}function Sp(t){dl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Mp(t){return t=_a(t),t.tag=3,t}function xp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){yp(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){yp(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Rv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ai===null?af():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Ne)return n=si.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Ys(ii(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Ys(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=xu(t.stateNode,s,c),Bu(t,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),po===null?po=[f]:po.push(f),en!==4&&(en=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=xu(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Mp(c),xp(c,t,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Ep=Error(r(461)),gn=!1;function xn(t,n,a,s){n.child=t===null?wd(n,null,a,s):Ka(n,t.child,a,s)}function Tp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var A in s)A!=="ref"&&(y[A]=s[A])}else y=s;return ir(n),s=ru(t,n,a,y,f,c),A=su(),t!==null&&!gn?(ou(t,n,c),Ii(t,n,c)):(Ne&&A&&Zc(n),n.flags|=1,xn(t,n,s,c),n.child)}function bp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ap(t,n,f,s,c)):(t=Sl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(y,s)&&t.ref===n.ref)return Ii(t,n,c)}return n.flags|=1,t=xa(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ap(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ks(f,s)&&t.ref===n.ref)if(gn=!1,n.pendingProps=s=f,Lu(t,c))t.flags&131072&&(gn=!0);else return n.lanes=t.lanes,Ii(t,n,c)}return Eu(t,n,a,s,c)}function Rp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,y=t!==null?t.memoizedState:null;if(io(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=y!==null?y.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return wp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,y!==null?y.cachePool:null),y!==null?Cd(n,y):$c(),Dd(n);else return n.lanes=n.childLanes=536870912,wp(t,n,y!==null?y.baseLanes|a:a,a)}else y!==null?(al(n,y.cachePool),Cd(n,y),ha(),n.memoizedState=null):(t!==null&&al(n,null),$c(),ha());return xn(t,n,c,a),n.child}function wp(t,n,a,s){var c=iu();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),Dd(n),t!==null&&ao(t,n,s,!0),null}function io(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,s,c){return ir(n),a=ru(t,n,a,s,void 0,c),s=su(),t!==null&&!gn?(ou(t,n,c),Ii(t,n,c)):(Ne&&s&&Zc(n),n.flags|=1,xn(t,n,a,c),n.child)}function Cp(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Pd(n,s,a,c),Od(t),s=su(),t!==null&&!gn?(ou(t,n,f),Ii(t,n,f)):(Ne&&s&&Zc(n),n.flags|=1,xn(t,n,a,f),n.child)}function Dp(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Ur,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Ur,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(yu(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Mu.enqueueReplaceState(f,f.state,null),oo(n,s,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=er(a,A);f.props=z;var Y=f.context,_t=a.contextType;y=Ur,typeof _t=="object"&&_t!==null&&(y=Rn(_t));var wt=a.getDerivedStateFromProps;_t=typeof wt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Y!==y)&&gp(n,f,s,y),ga=!1;var at=n.memoizedState;f.state=at,oo(n,s,f,c),so(),Y=n.memoizedState,A||at!==Y||ga?(typeof wt=="function"&&(yu(n,a,wt,s),Y=n.memoizedState),(z=ga||mp(n,a,z,s,at,Y,y))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Y),f.props=s,f.state=Y,f.context=y,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(t,n),y=n.memoizedProps,_t=er(a,y),f.props=_t,wt=n.pendingProps,at=f.context,Y=a.contextType,z=Ur,typeof Y=="object"&&Y!==null&&(z=Rn(Y)),A=a.getDerivedStateFromProps,(Y=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==wt||at!==z)&&gp(n,f,s,z),ga=!1,at=n.memoizedState,f.state=at,oo(n,s,f,c),so();var pt=n.memoizedState;y!==wt||at!==pt||ga||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof A=="function"&&(yu(n,a,A,s),pt=n.memoizedState),(_t=ga||mp(n,a,_t,s,at,pt,z)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,pt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,pt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=pt),f.props=s,f.state=pt,f.context=z,s=_t):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,io(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ka(n,t.child,null,c),n.child=Ka(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ii(t,n,c),t}function Lp(t,n,a,s){return qs(),n.flags|=256,xn(t,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:Nd()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Up(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ne){if(c?fa(n):ha(),Ne){var A=Mn,z;if(z=A){t:{for(z=A,A=bi;z.nodeType!==8;){if(!A){A=null;break t}if(z=vi(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ya!==null?{id:Pi,overflow:zi}:null,retryLane:536870912},z=ci(18,null,null,0),z.stateNode=A,z.return=n,n.child=z,Nn=n,Mn=null,z=!0):z=!1}z||Za(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Bi(n)}return A=s.children,s=s.fallback,c?(ha(),c=n.mode,A=wu({mode:"hidden",children:A},c),s=rr(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,y,a),n.memoizedState=Tu,s):(fa(n),Ru(n,A))}if(z=t.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=Cu(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),c=s.fallback,A=n.mode,s=wu({mode:"visible",children:s.children},A),c=rr(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ka(n,t.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(t,y,a),n.memoizedState=Tu,n=c);else if(fa(n),A.data==="$!"){if(y=A.nextSibling&&A.nextSibling.dataset,y)var Y=y.dgst;y=Y,s=Error(r(419)),s.stack="",s.digest=y,Ys({value:s,source:null,stack:null}),n=Cu(t,n,a)}else if(gn||ao(t,n,a,!1),y=(a&t.childLanes)!==0,gn||y){if(y=We,y!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(y.suspendedLanes|a)?0:s,s!==0&&s!==z.retryLane)throw z.retryLane=s,ua(t,s),On(y,t,s),Ep}A.data==="$?"||af(),n=Cu(t,n,a)}else A.data==="$?"?(n.flags|=128,n.child=t.child,n=Vv.bind(null,t),A._reactRetry=n,n=null):(t=z.treeContext,Mn=vi(A.nextSibling),Nn=n,Ne=!0,gi=null,bi=!1,t!==null&&(ai[ri++]=Pi,ai[ri++]=zi,ai[ri++]=Ya,Pi=t.id,zi=t.overflow,Ya=n),n=Ru(n,s.children),n.flags|=4096);return n}return c?(ha(),c=s.fallback,A=n.mode,z=t.child,Y=z.sibling,s=xa(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&31457280,Y!==null?c=xa(Y,c):(c=rr(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=t.child.memoizedState,A===null?A=bu(a):(z=A.cachePool,z!==null?(Y=dn._currentValue,z=z.parent!==Y?{parent:Y,pool:Y}:z):z=Nd(),A={baseLanes:A.baseLanes|a,cachePool:z}),c.memoizedState=A,c.childLanes=Au(t,y,a),n.memoizedState=Tu,s):(fa(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Ru(t,n){return n=wu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wu(t,n){return am(t,n,0,null)}function Cu(t,n,a){return Ka(n,t.child,null,a),t=Ru(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Np(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Op(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=hn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,a,n);else if(t.tag===19)Np(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Ot(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ii(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,!(a&n.childLanes))if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function wv(t,n,a){switch(n.tag){case 3:ne(n,n.stateNode.containerInfo),ma(n,dn,t.memoizedState.cache),qs();break;case 27:case 5:Xt(n);break;case 4:ne(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(fa(n),n.flags|=128,null):a&n.child.childLanes?Up(t,n,a):(fa(n),t=Ii(t,n,a),t!==null?t.sibling:null);fa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ao(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Op(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ot(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,Rp(t,n,a);case 24:ma(n,dn,t.memoizedState.cache)}return Ii(t,n,a)}function Pp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!Lu(t,a)&&!(n.flags&128))return gn=!1,wv(t,n,a);gn=!!(t.flags&131072)}else gn=!1,Ne&&n.flags&1048576&&Sd(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=er(s,t),n.tag=1,n=Dp(null,n,s,t,a)):(n.tag=0,n=Eu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===b){n.tag=11,n=Tp(null,n,s,t,a);break t}else if(c===_){n.tag=14,n=bp(null,n,s,t,a);break t}}throw n=mt(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Dp(t,n,s,c,a);case 3:t:{if(ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(t,n),oo(n,f,null,a);var y=n.memoizedState;if(f=y.cache,ma(n,dn,f),f!==c.cache&&Ou(n,[dn],a,!0),so(),f=y.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Lp(t,n,f,a);break t}else if(f!==s){s=ii(Error(r(424)),n),Ys(s),n=Lp(t,n,f,a);break t}else for(Mn=vi(n.stateNode.containerInfo.firstChild),Nn=n,Ne=!0,gi=null,bi=!0,a=wd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),f===s){n=Ii(t,n,a);break t}xn(t,n,f,a)}n=n.child}return n;case 26:return io(t,n),t===null?(a=Fm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ne||(a=n.type,t=n.pendingProps,s=Ll(Se.current).createElement(a),s[Ue]=n,s[je]=t,En(s,a,t),te(s),n.stateNode=s):n.memoizedState=Fm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Ne&&(s=n.stateNode=Pm(n.type,n.pendingProps,Se.current),Nn=n,bi=!0,Mn=vi(s.firstChild)),s=n.pendingProps.children,t!==null||Ne?xn(t,n,s,a):n.child=Ka(n,null,s,a),io(t,n),n.child;case 5:return t===null&&Ne&&((c=s=Mn)&&(s=aS(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,Nn=n,Mn=vi(s.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),Xt(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:y!==null&&vf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,Mv,null,null,a),Eo._currentValue=c),io(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Ne&&((t=a=Mn)&&(a=rS(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Nn=n,Mn=null,t=!0):t=!1),t||Za(n)),null;case 13:return Up(t,n,a);case 4:return ne(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ka(n,null,s,a):xn(t,n,s,a),n.child;case 11:return Tp(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Rn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return bp(t,n,n.type,n.pendingProps,a);case 15:return Ap(t,n,n.type,n.pendingProps,a);case 19:return Op(t,n,a);case 22:return Rp(t,n,a);case 24:return ir(n),s=Rn(dn),t===null?(c=iu(),c===null&&(c=We,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),ma(n,dn,c)):(t.lanes&a&&(zu(t,n),oo(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,dn,s)):(s=f.cache,ma(n,dn,s),s!==c.cache&&Ou(n,[dn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Uu=gt(null),nr=null,Hi=null;function ma(t,n,a){Ot(Uu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=Uu.current,yt(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Nu(f.return,a,t),s||(y=null);break t}f=A.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Nu(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ao(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=c.type;Xn(c.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(c===Ct.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&Ou(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return zp(nr,t)}function gl(t,n){return nr===null&&ir(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var ga=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,$e&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),_d(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,De(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function so(){if(Fu){var t=Fr;if(t!==null)throw t}}function oo(t,n,a,s){Fu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,Y=z.next;z.next=null,y===null?f=Y:y.next=Y,y=z;var _t=t.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==y&&(A===null?_t.firstBaseUpdate=Y:A.next=Y,_t.lastBaseUpdate=z))}if(f!==null){var wt=c.baseState;y=0,_t=Y=z=null,A=f;do{var at=A.lane&-536870913,pt=at!==A.lane;if(pt?(Le&at)===at:(s&at)===at){at!==0&&at===Br&&(Fu=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ae=t,me=A;at=n;var nn=a;switch(me.tag){case 1:if(ae=me.payload,typeof ae=="function"){wt=ae.call(nn,wt,at);break t}wt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=me.payload,at=typeof ae=="function"?ae.call(nn,wt,at):ae,at==null)break t;wt=T({},wt,at);break t;case 2:ga=!0}}at=A.callback,at!==null&&(t.flags|=64,pt&&(t.flags|=8192),pt=c.callbacks,pt===null?c.callbacks=[at]:pt.push(at))}else pt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(Y=_t=pt,z=wt):_t=_t.next=pt,y|=at;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;pt=A,A=pt.next,pt.next=null,c.lastBaseUpdate=pt,c.shared.pending=null}}while(!0);_t===null&&(z=wt),c.baseState=z,c.firstBaseUpdate=Y,c.lastBaseUpdate=_t,f===null&&(c.shared.lanes=0),Ea|=y,t.lanes=y,t.memoizedState=wt}}function Bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==c)}}catch(A){Ve(n,n.return,A)}}function Sa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var y=s.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,c=n;var z=a;try{A()}catch(Y){Ve(c,z,Y)}}}s=s.next}while(s!==f)}}catch(Y){Ve(n,n.return,Y)}}function Ip(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fp(n,a)}catch(s){Ve(t,t.return,s)}}}function Hp(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(t,n,s)}}function ar(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Ve(t,n,f)}}function qn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(t,n,c)}else a.current=null}function Gp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(t,t.return,c)}}function Vp(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[je]=n}catch(c){Ve(t,t.return,c)}}function kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var Vi=!1,tn=!1,Gu=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,_n=null,Xp=!1;function Cv(t,n){if(t=t.containerInfo,gf=Bl,t=ld(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,z=-1,Y=0,_t=0,wt=t,at=null;e:for(;;){for(var pt;wt!==a||c!==0&&wt.nodeType!==3||(A=y+c),wt!==f||s!==0&&wt.nodeType!==3||(z=y+s),wt.nodeType===3&&(y+=wt.nodeValue.length),(pt=wt.firstChild)!==null;)at=wt,wt=pt;for(;;){if(wt===t)break e;if(at===a&&++Y===c&&(A=y),at===f&&++_t===s&&(z=y),(pt=wt.nextSibling)!==null)break;wt=at,at=wt.parentNode}wt=pt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ae=er(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ae,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(me){Ve(a,a.return,me)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}return ae=Xp,Xp=!1,ae}function qp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),s&4&&lo(5,a);break;case 1:if(Wi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(A){Ve(a,a.return,A)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(A){Ve(a,a.return,A)}}s&64&&Ip(a),s&512&&ar(a,a.return);break;case 3:if(Wi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fp(s,t)}catch(A){Ve(a,a.return,A)}}break;case 26:Wi(t,a),s&512&&ar(a,a.return);break;case 27:case 5:Wi(t,a),n===null&&s&4&&Gp(a),s&512&&ar(a,a.return);break;case 12:Wi(t,a);break;case 13:Wi(t,a),s&4&&Zp(t,a);break;case 22:if(c=a.memoizedState!==null||Vi,!c){n=n!==null&&n.memoizedState!==null||tn;var f=Vi,y=tn;Vi=c,(tn=n)&&!y?ya(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Vi=f,tn=y}s&512&&(a.memoizedProps.mode==="manual"?ar(a,a.return):qn(a,a.return));break;default:Wi(t,a)}}function Yp(t){var n=t.alternate;n!==null&&(t.alternate=null,Yp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ot(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,Yn=!1;function ki(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:tn||qn(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||qn(a,n);var s=un,c=Yn;for(un=a.stateNode,ki(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ot(a),un=s,Yn=c;break;case 5:tn||qn(a,n);case 6:c=un;var f=Yn;if(un=null,ki(t,n,a),un=c,Yn=f,un!==null)if(Yn)try{t=un,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(y){Ve(a,n,y)}else try{un.removeChild(a.stateNode)}catch(y){Ve(a,n,y)}break;case 18:un!==null&&(Yn?(n=un,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),Ro(n)):yf(un,a.stateNode));break;case 4:s=un,c=Yn,un=a.stateNode.containerInfo,Yn=!0,ki(t,n,a),un=s,Yn=c;break;case 0:case 11:case 14:case 15:tn||Sa(2,a,n),tn||Sa(4,a,n),ki(t,n,a);break;case 1:tn||(qn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hp(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:tn||qn(a,n),tn=(s=tn)||a.memoizedState!==null,ki(t,n,a),tn=s;break;default:ki(t,n,a)}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ro(t)}catch(a){Ve(n,n.return,a)}}function Dv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wp),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=Dv(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function oi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:case 5:un=A.stateNode,Yn=!1;break t;case 3:un=A.stateNode.containerInfo,Yn=!0;break t;case 4:un=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(un===null)throw Error(r(160));jp(f,y,c),un=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Kp(n,t),n=n.sibling}var _i=null;function Kp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(n,t),li(t),s&4&&(Sa(3,t,t.return),lo(3,t),Sa(5,t,t.return));break;case 1:oi(n,t),li(t),s&512&&(tn||a===null||qn(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(oi(n,t),li(t),s&512&&(tn||a===null||qn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[rt]||f[Ue]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,s,a),f[Ue]=t,te(f),s=f;break t;case"link":var y=Gm("link","href",c).get(s+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;case"meta":if(y=Gm("meta","content",c).get(s+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ue]=t,te(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Hm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Hm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var z=c.firstChild;z;){var Y=z.nextSibling,_t=z.nodeName;z[rt]||_t==="HEAD"||_t==="BODY"||_t==="SCRIPT"||_t==="STYLE"||_t==="LINK"&&z.rel.toLowerCase()==="stylesheet"||c.removeChild(z),z=Y}for(var wt=t.type,at=c.attributes;at.length;)c.removeAttributeNode(at[0]);En(c,wt,f),c[Ue]=t,c[je]=f}catch(ae){Ve(t,t.return,ae)}}case 5:if(oi(n,t),li(t),s&512&&(tn||a===null||qn(a,a.return)),t.flags&32){c=t.stateNode;try{br(c,"")}catch(ae){Ve(t,t.return,ae)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vp(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(oi(n,t),li(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ae){Ve(t,t.return,ae)}}break;case 3:if(Ol=null,c=_i,_i=Ul(n.containerInfo),oi(n,t),_i=c,li(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(ae){Ve(t,t.return,ae)}Gu&&(Gu=!1,Qp(t));break;case 4:s=_i,_i=Ul(t.stateNode.containerInfo),oi(n,t),li(t),_i=s;break;case 12:oi(n,t),li(t);break;case 13:oi(n,t),li(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ut()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 22:if(s&512&&(tn||a===null||qn(a,a.return)),z=t.memoizedState!==null,Y=a!==null&&a.memoizedState!==null,_t=Vi,wt=tn,Vi=_t||z,tn=wt||Y,oi(n,t),tn=wt,Vi=_t,li(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=z?n._visibility&-2:n._visibility|1,z&&(n=Vi||tn,a===null||Y||n||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){Y=a=n;try{if(c=Y.stateNode,z)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{y=Y.stateNode,A=Y.memoizedProps.style;var pt=A!=null&&A.hasOwnProperty("display")?A.display:null;y.style.display=pt==null||typeof pt=="boolean"?"":(""+pt).trim()}}catch(ae){Ve(Y,Y.return,ae)}}}else if(n.tag===6){if(a===null){Y=n;try{Y.stateNode.nodeValue=z?"":Y.memoizedProps}catch(ae){Ve(Y,Y.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(t,a))));break;case 19:oi(n,t),li(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vu(t,s)));break;case 21:break;default:oi(n,t),li(t)}}function li(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(kp(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var y=s.stateNode;s.flags&32&&(br(y,""),s.flags&=-33);var A=Iu(t);_l(t,A,y);break;case 3:case 4:var z=s.stateNode.containerInfo,Y=Iu(t);Hu(t,Y,z);break;default:throw Error(r(161))}}}catch(_t){Ve(t,t.return,_t)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qp(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Vr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hp(n,n.return,a),Vr(n);break;case 26:case 27:case 5:qn(n,n.return),Vr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Vr(n);break;default:Vr(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),lo(4,f);break;case 1:if(ya(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Y){Ve(s,s.return,Y)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],A)}catch(Y){Ve(s,s.return,Y)}}a&&y&64&&Ip(f),ar(f,f.return);break;case 26:case 27:case 5:ya(c,f,a),a&&s===null&&y&4&&Gp(f),ar(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&y&4&&Zp(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),ar(f,f.return);break;default:ya(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jp(t,n,a,s),n=n.sibling}function Jp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(t,n,a,s),c&2048&&lo(9,n);break;case 3:Ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){Ma(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ve(n,n.return,z)}}else Ma(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(t,n,a,s):co(t,n):f._visibility&4?Ma(t,n,a,s):(f._visibility|=4,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:Ma(t,n,a,s),c&2048&&Wu(n.alternate,n);break;default:Ma(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,A=a,z=s,Y=y.flags;switch(y.tag){case 0:case 11:case 15:kr(f,y,A,z,c),lo(8,y);break;case 23:break;case 22:var _t=y.stateNode;y.memoizedState!==null?_t._visibility&4?kr(f,y,A,z,c):co(f,y):(_t._visibility|=4,kr(f,y,A,z,c)),c&&Y&2048&&ku(y.alternate,y);break;case 24:kr(f,y,A,z,c),c&&Y&2048&&Wu(y.alternate,y);break;default:kr(f,y,A,z,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&ku(s.alternate,s);break;case 24:co(a,s),c&2048&&Wu(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Wr(t){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)$p(t),t=t.sibling}function $p(t){switch(t.tag){case 26:Wr(t),t.flags&uo&&t.memoizedState!==null&&vS(_i,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=_i;_i=Ul(t.stateNode.containerInfo),Wr(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Wr(t),uo=n):Wr(t));break;default:Wr(t)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,nm(s,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):fo(t);break;default:fo(t)}}function vl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,nm(s,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function nm(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(Yp(s),s===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}function Lv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,s){return new Lv(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,s,c,f){var y=0;if(s=t,typeof t=="function")Xu(t)&&(y=1);else if(typeof t=="string")y=gS(t,a,Wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return rr(a.children,c,f,n);case m:y=8,c|=24;break;case g:return t=ci(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case R:return t=ci(13,a,n,c),t.elementType=R,t.lanes=f,t;case v:return t=ci(19,a,n,c),t.elementType=v,t.lanes=f,t;case D:return am(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S:case x:y=10;break t;case M:y=9;break t;case b:y=11;break t;case _:y=14;break t;case O:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ci(y,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=ci(7,t,s,n),t.lanes=a,t}function am(t,n,a,s){t=ci(22,t,s,n),t.elementType=D,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var y=ua(f,2);y!==null&&(c._pendingVisibility|=2,On(y,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var y=ua(f,2);y!==null&&(c._pendingVisibility&=-3,On(y,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Xi(t){t.flags|=4}function rm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!km(n)){if(n=si.current,n!==null&&((Le&4194176)===Le?Ai!==null:(Le&62914560)!==Le&&!(Le&536870912)||n!==Ai))throw Zs=Jc,xd;t.flags|=8192}}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,qr|=n)}function ho(t,n){if(!Ne)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(dn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gi!==null&&(ef(gi),gi=null))),Je(n),null;case 26:return a=n.memoizedState,t===null?(Xi(n),a!==null?(Je(n),rm(n,a)):(Je(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Xi(n),Je(n),rm(n,a)):(Je(n),n.flags&=-16777217):(t.memoizedProps!==s&&Xi(n),Je(n),n.flags&=-16777217),null;case 27:Ft(n),a=Se.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}t=Wt.current,Xs(n)?yd(n):(t=Pm(c,s,a),n.stateNode=t,Xi(n))}return Je(n),null;case 5:if(Ft(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(t=Wt.current,Xs(n))yd(n);else{switch(c=Ll(Se.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[Ue]=n,t[je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(En(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Xi(n)}}return Je(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Se.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ue]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cm(t.nodeValue,a)),t||Za(n)}else t=Ll(t).createTextNode(s),t[Ue]=n,n.stateNode=t}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ue]=n}else qs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else gi!==null&&(ef(gi),gi=null),c=!0;if(!c)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Je(n),null;case 4:return Bt(),t===null&&df(n.stateNode.containerInfo),Je(n),null;case 10:return Gi(n.type),Je(n),null;case 19:if(yt(hn),c=n.memoizedState,c===null)return Je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ho(c,!1);else{if(en!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,ho(c,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return Ot(hn,hn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ut()>Ml&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304)}else{if(!s)if(t=il(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ne)return Je(n),null}else 2*ut()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,s=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ut(),n.sibling=null,t=hn.current,Ot(hn,s?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return Bi(n),tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&yt(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(dn),Je(n),null;case 25:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(dn),Bt(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ft(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return yt(hn),null;case 4:return Bt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Bi(n),tu(),t!==null&&yt(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(dn),null;case 25:return null;default:return null}}function sm(t,n){switch(Kc(n),n.tag){case 3:Gi(dn),Bt();break;case 26:case 27:case 5:Ft(n);break;case 4:Bt();break;case 13:Bi(n);break;case 19:yt(hn);break;case 10:Gi(n.type);break;case 22:case 23:Bi(n),tu(),t!==null&&yt(Qa);break;case 24:Gi(dn)}}var Ov={getCacheForType:function(t){var n=Rn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Pv=typeof WeakMap=="function"?WeakMap:Map,$e=0,We=null,be=null,Le=0,Xe=0,jn=null,qi=!1,Xr=!1,ju=!1,Yi=0,en=0,Ea=0,sr=0,Zu=0,ui=0,qr=0,po=null,wi=null,Ku=!1,Qu=0,Ml=1/0,xl=null,Ta=null,El=!1,or=null,mo=0,Ju=0,$u=null,go=0,tf=null;function Zn(){if($e&2&&Le!==0)return Le&-Le;if(G.T!==null){var t=Br;return t!==0?t:cf()}return He()}function om(){ui===0&&(ui=!(Le&536870912)||Ne?Et():536870912);var t=si.current;return t!==null&&(t.flags|=32),ui}function On(t,n,a){(t===We&&Xe===2||t.cancelPendingCommit!==null)&&(Yr(t,0),ji(t,Le,ui,!1)),bt(t,a),(!($e&2)||t!==We)&&(t===We&&(!($e&2)&&(sr|=a),en===4&&ji(t,Le,ui,!1)),Ci(t))}function lm(t,n,a){if($e&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||st(t,n),c=s?Fv(t,n):rf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&ji(t,n,0,!1);break}else if(c===6)ji(t,n,0,!qi);else{if(a=t.current.alternate,f&&!zv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=t;c=po;var z=A.current.memoizedState.isDehydrated;if(z&&(Yr(A,y).flags|=256),y=rf(A,y,!1),y!==2){if(ju&&!z){A.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=wi,wi=c,f!==null&&ef(f)}c=y}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),ji(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){ji(s,n,ui,!qi);break t}break;case 2:wi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-ut(),10<f)){if(ji(s,n,ui,!qi),Kt(s,0)!==0)break t;s.timeoutHandle=Um(cm.bind(null,s,a,wi,xl,Ku,n,ui,sr,qr,qi,2,-0,0),f);break t}cm(s,a,wi,xl,Ku,n,ui,sr,qr,qi,0,-0,0)}}break}while(!0);Ci(t)}function ef(t){wi===null?wi=t:wi.push.apply(wi,t)}function cm(t,n,a,s,c,f,y,A,z,Y,_t,wt,at){var pt=n.subtreeFlags;if((pt&8192||(pt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:_S},$p(n),n=SS(),n!==null)){t.cancelPendingCommit=n(gm.bind(null,t,a,s,c,y,A,z,1,wt,at)),ji(t,f,y,!Y);return}gm(t,a,s,c,y,A,z,_t,wt,at)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ji(t,n,a,s){n&=~Zu,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-P(c),y=1<<f;s[f]=-1,c&=~y}a!==0&&le(t,a,n)}function Tl(){return $e&6?!0:(_o(0),!1)}function nf(){if(be!==null){if(Xe===0)var t=be.return;else t=be,Hi=nr=null,lu(t),Pr=null,Ks=0,t=be;for(;t!==null;)sm(t.alternate,t),t=t.return;be=null}}function Yr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,eS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),We=t,be=a=xa(t.current,null),Le=n,Xe=0,jn=null,qi=!1,Xr=st(t,n),ju=!1,qr=ui=Zu=sr=Ea=en=0,wi=po=null,Ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-P(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,jo(),a}function um(t,n){xe=null,G.H=Ri,n===js?(n=bd(),Xe=3):n===xd?(n=bd(),Xe=4):Xe=n===Ep?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,be===null&&(en=1,pl(t,ii(n,t.current)))}function fm(){var t=G.H;return G.H=Ri,t===null?Ri:t}function hm(){var t=G.A;return G.A=Ov,t}function af(){en=4,qi||(Le&4194176)!==Le&&si.current!==null||(Xr=!0),!(Ea&134217727)&&!(sr&134217727)||We===null||ji(We,Le,ui,!1)}function rf(t,n,a){var s=$e;$e|=2;var c=fm(),f=hm();(We!==t||Le!==n)&&(xl=null,Yr(t,n)),n=!1;var y=en;t:do try{if(Xe!==0&&be!==null){var A=be,z=jn;switch(Xe){case 8:nf(),y=6;break t;case 3:case 2:case 6:si.current===null&&(n=!0);var Y=Xe;if(Xe=0,jn=null,jr(t,A,z,Y),a&&Xr){y=0;break t}break;default:Y=Xe,Xe=0,jn=null,jr(t,A,z,Y)}}Bv(),y=en;break}catch(_t){um(t,_t)}while(!0);return n&&t.shellSuspendCounter++,Hi=nr=null,$e=s,G.H=c,G.A=f,be===null&&(We=null,Le=0,jo()),y}function Bv(){for(;be!==null;)dm(be)}function Fv(t,n){var a=$e;$e|=2;var s=fm(),c=hm();We!==t||Le!==n?(xl=null,Ml=ut()+500,Yr(t,n)):Xr=st(t,n);t:do try{if(Xe!==0&&be!==null){n=be;var f=jn;e:switch(Xe){case 1:Xe=0,jn=null,jr(t,n,f,1);break;case 2:if(Ed(f)){Xe=0,jn=null,pm(n);break}n=function(){Xe===2&&We===t&&(Xe=7),Ci(t)},f.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Ed(f)?(Xe=0,jn=null,pm(n)):(Xe=0,jn=null,jr(t,n,f,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var A=be;if(!y||km(y)){Xe=0,jn=null;var z=A.sibling;if(z!==null)be=z;else{var Y=A.return;Y!==null?(be=Y,bl(Y)):be=null}break e}}Xe=0,jn=null,jr(t,n,f,5);break;case 6:Xe=0,jn=null,jr(t,n,f,6);break;case 8:nf(),en=6;break t;default:throw Error(r(462))}}Iv();break}catch(_t){um(t,_t)}while(!0);return Hi=nr=null,G.H=s,G.A=c,$e=a,be!==null?0:(We=null,Le=0,jo(),en)}function Iv(){for(;be!==null&&!ct();)dm(be)}function dm(t){var n=Pp(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?bl(t):be=n}function pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cp(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=Cp(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:lu(n);default:sm(a,n),n=be=im(n,Yi),n=Pp(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?bl(t):be=n}function jr(t,n,a,s){Hi=nr=null,lu(n),Pr=null,Ks=0;var c=n.return;try{if(Rv(t,c,n,a,Le)){en=1,pl(t,ii(a,t.current)),be=null;return}}catch(f){if(c!==null)throw be=c,f;en=1,pl(t,ii(a,t.current)),be=null;return}n.flags&32768?(Ne||s===1?t=!0:Xr||Le&536870912?t=!1:(qi=t=!0,(s===2||s===3||s===6)&&(s=si.current,s!==null&&s.tag===13&&(s.flags|=16384))),mm(n,t)):bl(n)}function bl(t){var n=t;do{if(n.flags&32768){mm(n,qi);return}t=n.return;var a=Uv(n.alternate,n,Yi);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);en===0&&(en=5)}function mm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);en=6,be=null}function gm(t,n,a,s,c,f,y,A,z,Y){var _t=G.T,wt=k.p;try{k.p=2,G.T=null,Hv(t,n,a,s,wt,c,f,y,A,z,Y)}finally{G.T=_t,k.p=wt}}function Hv(t,n,a,s,c,f,y,A){do Zr();while(or!==null);if($e&6)throw Error(r(327));var z=t.finishedWork;if(s=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var Y=z.lanes|z.childLanes;if(Y|=Yc,Jt(t,s,Y,f,y,A),t===We&&(be=We=null,Le=0),!(z.subtreeFlags&10256)&&!(z.flags&10256)||El||(El=!0,Ju=Y,$u=a,Wv(ie,function(){return Zr(),null})),a=(z.flags&15990)!==0,z.subtreeFlags&15990||a?(a=G.T,G.T=null,f=k.p,k.p=2,y=$e,$e|=4,Cv(t,z),Kp(z,t),uv(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=z,qp(t,z.alternate,z),vt(),$e=y,k.p=f,G.T=a):t.current=z,El?(El=!1,or=t,mo=s):_m(t,Y),Y=t.pendingLanes,Y===0&&(Ta=null),kt(z.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,z=0;z<n.length;z++)Y=n[z],c(Y.value,{componentStack:Y.stack});return mo&3&&Zr(),Y=t.pendingLanes,s&4194218&&Y&42?t===tf?go++:(go=0,tf=t):go=0,_o(0),null}function _m(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Zr(){if(or!==null){var t=or,n=Ju;Ju=0;var a=ge(mo),s=G.T,c=k.p;try{if(k.p=32>a?32:a,G.T=null,or===null)var f=!1;else{a=$u,$u=null;var y=or,A=mo;if(or=null,mo=0,$e&6)throw Error(r(331));var z=$e;if($e|=4,em(y.current),Jp(y,y.current,A,a),$e=z,_o(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(oe,y)}catch{}f=!0}return f}finally{k.p=c,G.T=s,_m(t,n)}}return!1}function vm(t,n,a){n=ii(a,n),n=xu(t.stateNode,n,2),t=va(t,n,2),t!==null&&(bt(t,2),Ci(t))}function Ve(t,n,a){if(t.tag===3)vm(t,t,a);else for(;n!==null;){if(n.tag===3){vm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){t=ii(a,t),a=Mp(2),s=va(n,a,2),s!==null&&(xp(a,s,n,t),bt(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Pv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Le&a)===a&&(en===4||en===3&&(Le&62914560)===Le&&300>ut()-Qu?!($e&2)&&Yr(t,0):Zu|=a,qr===Le&&(qr=0)),Ci(t)}function Sm(t,n){n===0&&(n=zt()),t=ua(t,n),t!==null&&(bt(t,n),Ci(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Sm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Sm(t,a)}function Wv(t,n){return E(t,n)}var Al=null,Kr=null,of=!1,Rl=!1,lf=!1,lr=0;function Ci(t){t!==Kr&&t.next===null&&(Kr===null?Al=Kr=t:Kr=Kr.next=t),Rl=!0,of||(of=!0,qv(Xv))}function _o(t,n){if(!lf&&Rl){lf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-P(42|t)+1)-1,f&=c&~(y&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,xm(s,f))}else f=Le,f=Kt(s,s===We?f:0),!(f&3)||st(s,f)||(a=!0,xm(s,f));s=s.next}while(a);lf=!1}}function Xv(){Rl=of=!1;var t=0;lr!==0&&(tS()&&(t=lr),lr=0);for(var n=ut(),a=null,s=Al;s!==null;){var c=s.next,f=ym(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||f&3)&&(Rl=!0)),s=c}_o(t)}function ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-P(f),A=1<<y,z=c[y];z===-1?(!(A&a)||A&s)&&(c[y]=Dt(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=We,a=Le,a=Kt(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Xe===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&J(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||st(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&J(s),ge(a)){case 2:case 8:a=Yt;break;case 32:a=ie;break;case 268435456:a=Mt;break;default:a=ie}return s=Mm.bind(null,t),a=E(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&J(s),t.callbackPriority=2,t.callbackNode=null,2}function Mm(t,n){var a=t.callbackNode;if(Zr()&&t.callbackNode!==a)return null;var s=Le;return s=Kt(t,t===We?s:0),s===0?null:(lm(t,s,n),ym(t,ut()),t.callbackNode!=null&&t.callbackNode===a?Mm.bind(null,t):null)}function xm(t,n){if(Zr())return null;lm(t,n,!0)}function qv(t){nS(function(){$e&6?E(Ut,t):t()})}function cf(){return lr===0&&(lr=Et()),lr}function Em(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Tm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Em((c[je]||null).action),y=s.submitter;y&&(n=(n=y[je]||null)?Em(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new Xo("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var z=y?Tm(c,y):new FormData(c);_u(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=y?Tm(c,y):new FormData(c),_u(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var uf=0;uf<gd.length;uf++){var ff=gd[uf],jv=ff.toLowerCase(),Zv=ff[0].toUpperCase()+ff.slice(1);mi(jv,"on"+Zv)}mi(fd,"onAnimationEnd"),mi(hd,"onAnimationIteration"),mi(dd,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(hv,"onTransitionRun"),mi(dv,"onTransitionStart"),mi(pv,"onTransitionCancel"),mi(pd,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function bm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var A=s[y],z=A.instance,Y=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Y;try{f(c)}catch(_t){dl(_t)}c.currentTarget=null,f=z}else for(y=0;y<s.length;y++){if(A=s[y],z=A.instance,Y=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Y;try{f(c)}catch(_t){dl(_t)}c.currentTarget=null,f=z}}}}function we(t,n){var a=n[ti];a===void 0&&(a=n[ti]=new Set);var s=t+"__bubble";a.has(s)||(Am(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),Am(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[wl]){t[wl]=!0,_e.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,hf("selectionchange",!1,n))}}function Am(t,n,a,s){switch(Zm(n)){case 2:var c=xS;break;case 8:c=ES;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var A=s.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(y===4)for(y=s.return;y!==null;){var z=y.tag;if((z===3||z===4)&&(z=y.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;y=y.return}for(;A!==null;){if(y=et(A),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){s=f=y;continue t}A=A.parentNode}}s=s.return}Gh(function(){var Y=f,_t=Uc(a),wt=[];t:{var at=md.get(t);if(at!==void 0){var pt=Xo,ae=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":pt=k0;break;case"focusin":ae="focus",pt=Fc;break;case"focusout":ae="blur",pt=Fc;break;case"beforeblur":case"afterblur":pt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=q0;break;case fd:case hd:case dd:pt=O0;break;case pd:pt=j0;break;case"scroll":case"scrollend":pt=C0;break;case"wheel":pt=K0;break;case"copy":case"cut":case"paste":pt=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=qh;break;case"toggle":case"beforetoggle":pt=J0}var me=(n&4)!==0,nn=!me&&(t==="scroll"||t==="scrollend"),Z=me?at!==null?at+"Capture":null:at;me=[];for(var W=Y,tt;W!==null;){var St=W;if(tt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||tt===null||Z===null||(St=zs(W,Z),St!=null&&me.push(So(W,St,tt))),nn)break;W=W.return}0<me.length&&(at=new pt(at,ae,null,a,_t),wt.push({event:at,listeners:me}))}}if(!(n&7)){t:{if(at=t==="mouseover"||t==="pointerover",pt=t==="mouseout"||t==="pointerout",at&&a!==Lc&&(ae=a.relatedTarget||a.fromElement)&&(et(ae)||ae[Wn]))break t;if((pt||at)&&(at=_t.window===_t?_t:(at=_t.ownerDocument)?at.defaultView||at.parentWindow:window,pt?(ae=a.relatedTarget||a.toElement,pt=Y,ae=ae?et(ae):null,ae!==null&&(nn=$(ae),me=ae.tag,ae!==nn||me!==5&&me!==27&&me!==6)&&(ae=null)):(pt=null,ae=Y),pt!==ae)){if(me=Wh,St="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(me=qh,St="onPointerLeave",Z="onPointerEnter",W="pointer"),nn=pt==null?at:$t(pt),tt=ae==null?at:$t(ae),at=new me(St,W+"leave",pt,a,_t),at.target=nn,at.relatedTarget=tt,St=null,et(_t)===Y&&(me=new me(Z,W+"enter",ae,a,_t),me.target=tt,me.relatedTarget=nn,St=me),nn=St,pt&&ae)e:{for(me=pt,Z=ae,W=0,tt=me;tt;tt=Qr(tt))W++;for(tt=0,St=Z;St;St=Qr(St))tt++;for(;0<W-tt;)me=Qr(me),W--;for(;0<tt-W;)Z=Qr(Z),tt--;for(;W--;){if(me===Z||Z!==null&&me===Z.alternate)break e;me=Qr(me),Z=Qr(Z)}me=null}else me=null;pt!==null&&Rm(wt,at,pt,me,!1),ae!==null&&nn!==null&&Rm(wt,nn,ae,me,!0)}}t:{if(at=Y?$t(Y):window,pt=at.nodeName&&at.nodeName.toLowerCase(),pt==="select"||pt==="input"&&at.type==="file")var ee=td;else if(Jh(at))if(ed)ee=lv;else{ee=sv;var Ee=rv}else pt=at.nodeName,!pt||pt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?Y&&Dc(Y.elementType)&&(ee=td):ee=ov;if(ee&&(ee=ee(t,Y))){$h(wt,ee,a,_t);break t}Ee&&Ee(t,at,Y),t==="focusout"&&Y&&at.type==="number"&&Y.memoizedProps.value!=null&&Cc(at,"number",at.value)}switch(Ee=Y?$t(Y):window,t){case"focusin":(Jh(Ee)||Ee.contentEditable==="true")&&(Cr=Ee,Wc=Y,Ws=null);break;case"focusout":Ws=Wc=Cr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,cd(wt,a,_t);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":cd(wt,a,_t)}var re;if(Hc)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else wr?Kh(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Yh&&a.locale!=="ko"&&(wr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&wr&&(re=Vh()):(ca=_t,Pc="value"in ca?ca.value:ca.textContent,wr=!0)),Ee=Cl(Y,ue),0<Ee.length&&(ue=new Xh(ue,t,null,a,_t),wt.push({event:ue,listeners:Ee}),re?ue.data=re:(re=Qh(a),re!==null&&(ue.data=re)))),(re=tv?ev(t,a):nv(t,a))&&(ue=Cl(Y,"onBeforeInput"),0<ue.length&&(Ee=new Xh("onBeforeInput","beforeinput",null,a,_t),wt.push({event:Ee,listeners:ue}),Ee.data=re)),Yv(wt,t,Y,a,_t)}bm(wt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(So(t,c,f)),c=zs(t,n),c!=null&&s.push(So(t,c,f))),t=t.return}return s}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Rm(t,n,a,s,c){for(var f=n._reactName,y=[];a!==null&&a!==s;){var A=a,z=A.alternate,Y=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||Y===null||(z=Y,c?(Y=zs(a,f),Y!=null&&y.unshift(So(a,Y,z))):c||(Y=zs(a,f),Y!=null&&y.push(So(a,Y,z)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function Cm(t,n){return n=wm(n),wm(t)===n}function Dl(){}function Fe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(t,""+s);break;case"className":Ge(t,"class",s);break;case"tabIndex":Ge(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(t,a,s);break;case"style":Ih(t,s,f);break;case"data":if(n!=="object"){Ge(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",c.name,c,null),Fe(t,n,"formEncType",c.formEncType,c,null),Fe(t,n,"formMethod",c.formMethod,c,null),Fe(t,n,"formTarget",c.formTarget,c,null)):(Fe(t,n,"encType",c.encType,c,null),Fe(t,n,"method",c.method,c,null),Fe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&we("scroll",t);break;case"onScrollEnd":s!=null&&we("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":we("beforetoggle",t),we("toggle",t),sa(t,"popover",s);break;case"xlinkActuate":yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":yn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":yn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":yn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":yn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":sa(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=R0.get(a)||a,sa(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":Ih(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?br(t,s):(typeof s=="number"||typeof s=="bigint")&&br(t,""+s);break;case"onScroll":s!=null&&we("scroll",t);break;case"onScrollEnd":s!=null&&we("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!he.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[je]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):sa(t,a,s)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",t),we("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,f,y,a,null)}}c&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":we("invalid",t);var A=f=y=c=null,z=null,Y=null;for(s in a)if(a.hasOwnProperty(s)){var _t=a[s];if(_t!=null)switch(s){case"name":c=_t;break;case"type":y=_t;break;case"checked":z=_t;break;case"defaultChecked":Y=_t;break;case"value":f=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:Fe(t,n,s,_t,a,null)}}Ps(t,f,A,z,Y,y,c,!1),an(t);return;case"select":we("invalid",t),s=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":s=A;default:Fe(t,n,c,A,a,null)}n=f,a=y,t.multiple=!!s,n!=null?Tr(t,!!s,n,!1):a!=null&&Tr(t,!!s,a,!0);return;case"textarea":we("invalid",t),f=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(t,n,y,A,a,null)}Bh(t,s,c,f),an(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,z,s,a,null)}return;case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":we("load",t);break;case"video":case"audio":for(s=0;s<vo.length;s++)we(vo[s],t);break;case"image":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"embed":case"source":case"link":we("error",t),we("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in a)if(a.hasOwnProperty(Y)&&(s=a[Y],s!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,Y,s,a,null)}return;default:if(Dc(n)){for(_t in a)a.hasOwnProperty(_t)&&(s=a[_t],s!==void 0&&mf(t,n,_t,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Fe(t,n,A,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,A=null,z=null,Y=null,_t=null;for(pt in a){var wt=a[pt];if(a.hasOwnProperty(pt)&&wt!=null)switch(pt){case"checked":break;case"value":break;case"defaultValue":z=wt;default:s.hasOwnProperty(pt)||Fe(t,n,pt,null,s,wt)}}for(var at in s){var pt=s[at];if(wt=a[at],s.hasOwnProperty(at)&&(pt!=null||wt!=null))switch(at){case"type":f=pt;break;case"name":c=pt;break;case"checked":Y=pt;break;case"defaultChecked":_t=pt;break;case"value":y=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:pt!==wt&&Fe(t,n,at,pt,s,wt)}}Os(t,y,A,z,Y,_t,f,c);return;case"select":pt=y=A=at=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":pt=z;default:s.hasOwnProperty(f)||Fe(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":at=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==z&&Fe(t,n,c,f,s,z)}n=A,a=y,s=pt,at!=null?Tr(t,!!a,at,!1):!!s!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":pt=at=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(t,n,A,null,s,c)}for(y in s)if(c=s[y],f=a[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":at=c;break;case"defaultValue":pt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(t,n,y,c,s,f)}zh(t,at,pt);return;case"option":for(var ae in a)if(at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!s.hasOwnProperty(ae))switch(ae){case"selected":t.selected=!1;break;default:Fe(t,n,ae,null,s,at)}for(z in s)if(at=s[z],pt=a[z],s.hasOwnProperty(z)&&at!==pt&&(at!=null||pt!=null))switch(z){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(t,n,z,at,s,pt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)at=a[me],a.hasOwnProperty(me)&&at!=null&&!s.hasOwnProperty(me)&&Fe(t,n,me,null,s,at);for(Y in s)if(at=s[Y],pt=a[Y],s.hasOwnProperty(Y)&&at!==pt&&(at!=null||pt!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Fe(t,n,Y,at,s,pt)}return;default:if(Dc(n)){for(var nn in a)at=a[nn],a.hasOwnProperty(nn)&&at!==void 0&&!s.hasOwnProperty(nn)&&mf(t,n,nn,void 0,s,at);for(_t in s)at=s[_t],pt=a[_t],!s.hasOwnProperty(_t)||at===pt||at===void 0&&pt===void 0||mf(t,n,_t,at,s,pt);return}}for(var Z in a)at=a[Z],a.hasOwnProperty(Z)&&at!=null&&!s.hasOwnProperty(Z)&&Fe(t,n,Z,null,s,at);for(wt in s)at=s[wt],pt=a[wt],!s.hasOwnProperty(wt)||at===pt||at==null&&pt==null||Fe(t,n,wt,at,s,pt)}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function tS(){var t=window.event;return t&&t.type==="popstate"?t===Sf?!1:(Sf=t,!0):(Sf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(iS)}:Um;function iS(t){setTimeout(function(){throw t})}function yf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),Ro(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);Ro(n)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),ot(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function aS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function rS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Pm(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var fi=new Map,zm=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Zi=k.d;k.d={f:sS,r:oS,D:lS,C:cS,L:uS,m:fS,X:dS,S:hS,M:pS};function sS(){var t=Zi.f(),n=Tl();return t||n}function oS(t){var n=It(t);n!==null&&n.tag===5&&n.type==="form"?cp(n):Zi.r(t)}var Jr=typeof document>"u"?null:document;function Bm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=An(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zm.has(c)||(zm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),En(n,"link",t),te(n),s.head.appendChild(n)))}}function lS(t){Zi.D(t),Bm("dns-prefetch",t,null)}function cS(t,n){Zi.C(t,n),Bm("preconnect",t,n)}function uS(t,n,a){Zi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+An(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+An(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+An(a.imageSizes)+'"]')):c+='[href="'+An(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}fi.has(f)||(t=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Mo(f))||(n=s.createElement("link"),En(n,"link",t),te(n),s.head.appendChild(n)))}}function fS(t,n){Zi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+An(s)+'"][href="'+An(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!fi.has(f)&&(t=T({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mo(f)))return}s=a.createElement("link"),En(s,"link",t),te(s),a.head.appendChild(s)}}}function hS(t,n,a){Zi.S(t,n,a);var s=Jr;if(s&&t){var c=Qt(s).hoistableStyles,f=$r(t);n=n||"default";var y=c.get(f);if(!y){var A={loading:0,preload:null};if(y=s.querySelector(yo(f)))A.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&xf(t,a);var z=y=s.createElement("link");te(z),En(z,"link",t),z._p=new Promise(function(Y,_t){z.onload=Y,z.onerror=_t}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:A},c.set(f,y)}}}function dS(t,n){Zi.X(t,n);var a=Jr;if(a&&t){var s=Qt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(Mo(c)),f||(t=T({src:t,async:!0},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),te(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function pS(t,n){Zi.M(t,n);var a=Jr;if(a&&t){var s=Qt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(Mo(c)),f||(t=T({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Ef(t,n),f=a.createElement("script"),te(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Fm(t,n,a,s){var c=(c=Se.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=Qt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=Qt(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(yo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||mS(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=Qt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+An(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Im(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function mS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),te(n),t.head.appendChild(n))}function ts(t){return'[src="'+An(t)+'"]'}function Mo(t){return"script[async]"+t}function Hm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+An(a.href)+'"]');if(s)return n.instance=s,te(s),s;var c=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),te(s),En(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,te(f),f;s=Im(a),(c=fi.get(c))&&xf(s,c),f=(t.ownerDocument||t).createElement("link"),te(f);var y=f;return y._p=new Promise(function(A,z){y.onload=A,y.onerror=z}),En(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(Mo(f)))?(n.instance=c,te(c),c):(s=a,(c=fi.get(f))&&(s=T({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),te(c),En(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var A=s[y];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function Gm(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[rt]||f[Ue]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var A=s.get(y);A?A.push(f):s.set(y,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var xo=null;function _S(){}function vS(t,n,a){if(xo===null)throw Error(r(475));var s=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=$r(a.href),f=t.querySelector(yo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,te(f);return}f=t.ownerDocument||t,a=Im(a),(c=fi.get(c))&&xf(a,c),f=f.createElement("link"),te(f);var y=f;y._p=new Promise(function(A,z){y.onload=A,y.onerror=z}),En(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function SS(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(yS,t),zl=null,Pl.call(t))}function yS(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,c),a.set(y,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:x,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function MS(t,n,a,s,c,f,y,A){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.hiddenUpdates=Pt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Wm(t,n,a,s,c,f,y,A,z,Y,_t,wt){return t=new MS(t,n,a,y,A,z,Y,wt),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function Xm(t){return t?(t=Ur,t):Ur}function qm(t,n,a,s,c,f){c=Xm(c),s.context===null?s.context=c:s.pendingContext=c,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(t,s,n),a!==null&&(On(a,t,n),ro(a,t,n))}function Ym(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){Ym(t,n),(t=t.alternate)&&Ym(t,n)}function jm(t){if(t.tag===13){var n=ua(t,67108864);n!==null&&On(n,t,67108864),bf(t,67108864)}}var Bl=!0;function xS(t,n,a,s){var c=G.T;G.T=null;var f=k.p;try{k.p=2,Af(t,n,a,s)}finally{k.p=f,G.T=c}}function ES(t,n,a,s){var c=G.T;G.T=null;var f=k.p;try{k.p=8,Af(t,n,a,s)}finally{k.p=f,G.T=c}}function Af(t,n,a,s){if(Bl){var c=Rf(s);if(c===null)pf(t,n,s,Fl,a),Km(t,s);else if(bS(c,t,n,a,s))s.stopPropagation();else if(Km(t,s),n&4&&-1<TS.indexOf(t)){for(;c!==null;){var f=It(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=xt(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var z=1<<31-P(y);A.entanglements[1]|=z,y&=~z}Ci(f),!($e&6)&&(Ml=ut()+500,_o(0))}}break;case 13:A=ua(f,2),A!==null&&On(A,f,2),Tl(),bf(f,2)}if(f=Rf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Rf(t){return t=Uc(t),wf(t)}var Fl=null;function wf(t){if(Fl=null,t=et(t),t!==null){var n=$(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=lt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Zm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case Ut:return 2;case Yt:return 8;case ie:case se:return 32;case Mt:return 268435456;default:return 32}default:return 32}}var Cf=!1,ba=null,Aa=null,Ra=null,To=new Map,bo=new Map,wa=[],TS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=It(n),n!==null&&jm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function bS(t,n,a,s,c){switch(n){case"focusin":return ba=Ao(ba,t,n,a,s,c),!0;case"dragenter":return Aa=Ao(Aa,t,n,a,s,c),!0;case"mouseover":return Ra=Ao(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0}return!1}function Qm(t){var n=et(t.target);if(n!==null){var a=$(n);if(a!==null){if(n=a.tag,n===13){if(n=lt(a),n!==null){t.blockedOn=n,Ke(t.priority,function(){if(a.tag===13){var s=Zn(),c=ua(a,s);c!==null&&On(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=It(a),n!==null&&jm(n),t.blockedOn=a,!1;n.shift()}return!0}function Jm(t,n,a){Il(t)&&a.delete(n)}function AS(){Cf=!1,ba!==null&&Il(ba)&&(ba=null),Aa!==null&&Il(Aa)&&(Aa=null),Ra!==null&&Il(Ra)&&(Ra=null),To.forEach(Jm),bo.forEach(Jm)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AS)))}var Gl=null;function $m(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var f=It(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ro(t){function n(z){return Hl(z,t)}ba!==null&&Hl(ba,t),Aa!==null&&Hl(Aa,t),Ra!==null&&Hl(Ra,t),To.forEach(n),bo.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Qm(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],y=c[je]||null;if(typeof f=="function")y||$m(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[je]||null)A=y.formAction;else if(wf(c)!==null)continue}else A=y.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),$m(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();qm(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Zr(),qm(t.current,2,null,t,null,null),Tl(),n[Wn]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=He();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Qm(t)}};var tg=e.version;if(tg!=="19.0.0")throw Error(r(527,tg,"19.0.0"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=j(n),t=t!==null?ht(t):null,t=t===null?null:t.stateNode,t};var RS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:G,findFiberByHostInstance:et,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{oe=kl.inject(RS),jt=kl}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=_p,f=vp,y=Sp,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Wm(t,1,!1,null,null,a,s,c,f,y,A,null),t[Wn]=n.current,df(t.nodeType===8?t.parentNode:t),new Df(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=_p,y=vp,A=Sp,z=null,Y=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(Y=a.formState)),n=Wm(t,1,!0,n,a??null,s,c,f,y,A,z,Y),n.context=Xm(null),a=n.current,s=Zn(),c=_a(s),c.callback=null,va(a,c,s),n.current.lanes=s,bt(n,s),Ci(n),t[Wn]=n.current,df(t),new Vl(n)},Co.version="19.0.0",Co}var ug;function BS(){if(ug)return Nf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zS(),Nf.exports}var FS=BS();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="161",es={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IS=0,fg=1,HS=2,W_=1,X_=2,ea=3,Va=0,Vn=1,Li=2,Fa=0,Es=1,mh=2,hg=3,dg=4,GS=5,mr=100,VS=101,kS=102,pg=103,mg=104,WS=200,XS=201,qS=202,YS=203,gh=204,_h=205,jS=206,ZS=207,KS=208,QS=209,JS=210,$S=211,ty=212,ey=213,ny=214,iy=0,ay=1,ry=2,mc=3,sy=4,oy=5,ly=6,cy=7,wh=0,uy=1,fy=2,Ia=0,hy=1,dy=2,py=3,my=4,gy=5,_y=6,q_=300,As=301,Rs=302,vh=303,Sh=304,Ec=306,yh=1e3,xi=1001,Mh=1002,Bn=1003,gg=1004,Do=1005,Gn=1006,Bf=1007,_r=1008,Ha=1009,vy=1010,Sy=1011,Ch=1012,Y_=1013,Ba=1014,na=1015,Fo=1016,j_=1017,Z_=1018,vr=1020,yy=1021,Ei=1023,My=1024,xy=1025,Sr=1026,ws=1027,Ey=1028,K_=1029,Ty=1030,Q_=1031,J_=1033,Ff=33776,If=33777,Hf=33778,Gf=33779,_g=35840,vg=35841,Sg=35842,yg=35843,$_=36196,Mg=37492,xg=37496,Eg=37808,Tg=37809,bg=37810,Ag=37811,Rg=37812,wg=37813,Cg=37814,Dg=37815,Lg=37816,Ug=37817,Ng=37818,Og=37819,Pg=37820,zg=37821,Vf=36492,Bg=36494,Fg=36495,by=36283,Ig=36284,Hg=36285,Gg=36286,t0=3e3,yr=3001,Ay=3200,Ry=3201,e0=0,wy=1,di="",Tn="srgb",aa="srgb-linear",Dh="display-p3",Tc="display-p3-linear",gc="linear",Ye="srgb",_c="rec709",vc="p3",is=7680,Vg=519,Cy=512,Dy=513,Ly=514,n0=515,Uy=516,Ny=517,Oy=518,Py=519,kg=35044,Wg="300 es",xh=1035,ia=2e3,Sc=2001;class Er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const zo=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Ln(o,e,i){return Math.max(e,Math.min(i,o))}function Lh(o,e){return(o%e+e)%e}function zy(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function By(o,e,i){return o!==e?(i-o)/(e-o):0}function Bo(o,e,i){return(1-i)*o+i*e}function Fy(o,e,i,r){return Bo(o,e,1-Math.exp(-i*r))}function Iy(o,e=1){return e-Math.abs(Lh(o,e*2)-e)}function Hy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Gy(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function Vy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ky(o,e){return o+Math.random()*(e-o)}function Wy(o){return o*(.5-Math.random())}function Xy(o){o!==void 0&&(Xg=o);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qy(o){return o*zo}function Yy(o){return o*Io}function Eh(o){return(o&o-1)===0&&o!==0}function jy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zy(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),p=d(i/2),m=u((e+r)/2),g=d((e+r)/2),S=u((e-r)/2),M=d((e-r)/2),x=u((r-e)/2),b=d((r-e)/2);switch(l){case"XYX":o.set(h*g,p*S,p*M,h*m);break;case"YZY":o.set(p*M,h*g,p*S,h*m);break;case"ZXZ":o.set(p*S,p*M,h*g,h*m);break;case"XZX":o.set(h*g,p*b,p*x,h*m);break;case"YXY":o.set(p*x,h*g,p*b,h*m);break;case"ZYZ":o.set(p*b,p*x,h*g,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ss(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:zo,RAD2DEG:Io,generateUUID:Ds,clamp:Ln,euclideanModulo:Lh,mapLinear:zy,inverseLerp:By,lerp:Bo,damp:Fy,pingpong:Iy,smoothstep:Hy,smootherstep:Gy,randInt:Vy,randFloat:ky,randFloatSpread:Wy,seededRandom:Xy,degToRad:qy,radToDeg:Yy,isPowerOfTwo:Eh,ceilPowerOfTwo:jy,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Zy,normalize:Pn,denormalize:Ss};class de{constructor(e=0,i=0){de.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Te{constructor(e,i,r,l,u,d,h,p,m){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],S=r[7],M=r[2],x=r[5],b=r[8],R=l[0],v=l[3],_=l[6],O=l[1],D=l[4],B=l[7],V=l[2],H=l[5],F=l[8];return u[0]=d*R+h*O+p*V,u[3]=d*v+h*D+p*H,u[6]=d*_+h*B+p*F,u[1]=m*R+g*O+S*V,u[4]=m*v+g*D+S*H,u[7]=m*_+g*B+S*F,u[2]=M*R+x*O+b*V,u[5]=M*v+x*D+b*H,u[8]=M*_+x*B+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],S=g*d-h*m,M=h*p-g*u,x=m*u-d*p,b=i*S+r*M+l*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=S*R,e[1]=(l*m-g*r)*R,e[2]=(h*r-l*d)*R,e[3]=M*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-h*i)*R,e[6]=x*R,e[7]=(r*p-m*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Te;function i0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ky(){const o=Mc("canvas");return o.style.display="block",o}const qg={};function Ts(o){o in qg||(qg[o]=!0,console.warn(o))}const Yg=new Te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jg=new Te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[aa]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[Tn]:{transfer:Ye,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Tc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg)},[Dh]:{transfer:Ye,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(jg),fromReference:o=>o.applyMatrix3(Yg).convertLinearToSRGB()}},Qy=new Set([aa,Tc]),Ie={enabled:!0,_workingColorSpace:aa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===di?gc:Wl[o].transfer}};function bs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Mc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=bs(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(bs(i[r]/255)*255):i[r]=bs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Xf(l[d].image)):u.push(Xf(l[d]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?a0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $y=0;class kn extends Er{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=xi,l=xi,u=Gn,d=_r,h=Ei,p=Ha,m=kn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ds(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===yr?Tn:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tn?yr:t0}set encoding(e){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?Tn:di}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=q_;kn.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],S=p[8],M=p[1],x=p[5],b=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(g-M)<.01&&Math.abs(S-R)<.01&&Math.abs(b-v)<.01){if(Math.abs(g+M)<.1&&Math.abs(S+R)<.1&&Math.abs(b+v)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,B=(x+1)/2,V=(_+1)/2,H=(g+M)/4,F=(S+R)/4,mt=(b+v)/4;return D>B&&D>V?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=H/r,u=F/r):B>V?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=H/l,u=mt/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=F/u,l=mt/u),this.set(r,l,u,i),this}let O=Math.sqrt((v-b)*(v-b)+(S-R)*(S-R)+(M-g)*(M-g));return Math.abs(O)<.001&&(O=1),this.x=(v-b)/O,this.y=(S-R)/O,this.z=(M-g)/O,this.w=Math.acos((m+x+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends Er{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ze(0,0,e,i),this.scissorTest=!1,this.viewport=new Ze(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===yr?Tn:di),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new kn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new r0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends tM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class s0 extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eM extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],S=r[l+3];const M=u[d+0],x=u[d+1],b=u[d+2],R=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=S;return}if(h===1){e[i+0]=M,e[i+1]=x,e[i+2]=b,e[i+3]=R;return}if(S!==R||p!==M||m!==x||g!==b){let v=1-h;const _=p*M+m*x+g*b+S*R,O=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const V=Math.sqrt(D),H=Math.atan2(V,_*O);v=Math.sin(v*H)/V,h=Math.sin(h*H)/V}const B=h*O;if(p=p*v+M*B,m=m*v+x*B,g=g*v+b*B,S=S*v+R*B,v===1-h){const V=1/Math.sqrt(p*p+m*m+g*g+S*S);p*=V,m*=V,g*=V,S*=V}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],S=u[d],M=u[d+1],x=u[d+2],b=u[d+3];return e[i]=h*b+g*S+p*x-m*M,e[i+1]=p*b+g*M+m*S-h*x,e[i+2]=m*b+g*x+h*M-p*S,e[i+3]=g*b-h*S-p*M-m*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),S=h(u/2),M=p(r/2),x=p(l/2),b=p(u/2);switch(d){case"XYZ":this._x=M*g*S+m*x*b,this._y=m*x*S-M*g*b,this._z=m*g*b+M*x*S,this._w=m*g*S-M*x*b;break;case"YXZ":this._x=M*g*S+m*x*b,this._y=m*x*S-M*g*b,this._z=m*g*b-M*x*S,this._w=m*g*S+M*x*b;break;case"ZXY":this._x=M*g*S-m*x*b,this._y=m*x*S+M*g*b,this._z=m*g*b+M*x*S,this._w=m*g*S-M*x*b;break;case"ZYX":this._x=M*g*S-m*x*b,this._y=m*x*S+M*g*b,this._z=m*g*b-M*x*S,this._w=m*g*S+M*x*b;break;case"YZX":this._x=M*g*S+m*x*b,this._y=m*x*S+M*g*b,this._z=m*g*b-M*x*S,this._w=m*g*S-M*x*b;break;case"XZY":this._x=M*g*S-m*x*b,this._y=m*x*S-M*g*b,this._z=m*g*b+M*x*S,this._w=m*g*S+M*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],S=i[10],M=r+h+S;if(M>0){const x=.5/Math.sqrt(M+1);this._w=.25/x,this._x=(g-p)*x,this._y=(u-m)*x,this._z=(d-l)*x}else if(r>h&&r>S){const x=2*Math.sqrt(1+r-h-S);this._w=(g-p)/x,this._x=.25*x,this._y=(l+d)/x,this._z=(u+m)/x}else if(h>S){const x=2*Math.sqrt(1+h-r-S);this._w=(u-m)/x,this._x=(l+d)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+S-r-h);this._w=(d-l)/x,this._x=(u+m)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-i;return this._w=x*d+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),S=Math.sin((1-i)*g)/m,M=Math.sin(i*g)/m;return this._w=d*S+this._w*M,this._x=r*S+this._x*M,this._y=l*S+this._y*M,this._z=u*S+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,i=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-u*l),S=2*(u*r-d*i);return this.x=i+p*m+d*S-h*g,this.y=r+p*g+h*m-u*S,this.z=l+p*S+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qf.copy(this).projectOnVector(e),this.sub(qf)}reflect(e){return this.sub(qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new X,Zg=new xr;class Ho{constructor(e=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Si):Si.fromBufferAttribute(u,d),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ql.subVectors(this.max,Lo),rs.subVectors(e.a,Lo),ss.subVectors(e.b,Lo),os.subVectors(e.c,Lo),Da.subVectors(ss,rs),La.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-Da.z,Da.y,0,-La.z,La.y,0,-cr.z,cr.y,Da.z,0,-Da.x,La.z,0,-La.x,cr.z,0,-cr.x,-Da.y,Da.x,0,-La.y,La.x,0,-cr.y,cr.x,0];return!Yf(i,rs,ss,os,ql)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,rs,ss,os,ql))?!1:(Yl.crossVectors(Da,La),i=[Yl.x,Yl.y,Yl.z],Yf(i,rs,ss,os,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new X,new X,new X,new X,new X,new X,new X,new X],Si=new X,Xl=new Ho,rs=new X,ss=new X,os=new X,Da=new X,La=new X,cr=new X,Lo=new X,ql=new X,Yl=new X,ur=new X;function Yf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const nM=new Ho,Uo=new X,jf=new X;class bc{constructor(e=new X,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):nM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(jf)),this.expandByPoint(Uo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new X,Zf=new X,jl=new X,Ua=new X,Kf=new X,Zl=new X,Qf=new X;class Uh{constructor(e=new X,i=new X(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(jl),h=Ua.dot(this.direction),p=-Ua.dot(jl),m=Ua.lengthSq(),g=Math.abs(1-d*d);let S,M,x,b;if(g>0)if(S=d*p-h,M=d*h-p,b=u*g,S>=0)if(M>=-b)if(M<=b){const R=1/g;S*=R,M*=R,x=S*(S+d*M+2*h)+M*(d*S+M+2*p)+m}else M=u,S=Math.max(0,-(d*M+h)),x=-S*S+M*(M+2*p)+m;else M=-u,S=Math.max(0,-(d*M+h)),x=-S*S+M*(M+2*p)+m;else M<=-b?(S=Math.max(0,-(-d*u+h)),M=S>0?-u:Math.min(Math.max(-u,-p),u),x=-S*S+M*(M+2*p)+m):M<=b?(S=0,M=Math.min(Math.max(-u,-p),u),x=M*(M+2*p)+m):(S=Math.max(0,-(d*u+h)),M=S>0?u:Math.min(Math.max(-u,-p),u),x=-S*S+M*(M+2*p)+m);else M=d>0?-u:u,S=Math.max(0,-(d*M+h)),x=-S*S+M*(M+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Zf).addScaledVector(jl,M),x}intersectSphere(e,i){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,M=this.origin;return m>=0?(r=(e.min.x-M.x)*m,l=(e.max.x-M.x)*m):(r=(e.max.x-M.x)*m,l=(e.min.x-M.x)*m),g>=0?(u=(e.min.y-M.y)*g,d=(e.max.y-M.y)*g):(u=(e.max.y-M.y)*g,d=(e.min.y-M.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-M.z)*S,p=(e.max.z-M.z)*S):(h=(e.max.z-M.z)*S,p=(e.min.z-M.z)*S),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Zl.subVectors(r,e),Qf.crossVectors(Kf,Zl);let d=this.direction.dot(Qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ua.subVectors(this.origin,e);const p=h*this.direction.dot(Zl.crossVectors(Ua,Zl));if(p<0)return null;const m=h*this.direction.dot(Kf.cross(Ua));if(m<0||p+m>d)return null;const g=-h*Ua.dot(Qf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,d,h,p,m,g,S,M,x,b,R,v){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,g,S,M,x,b,R,v)}set(e,i,r,l,u,d,h,p,m,g,S,M,x,b,R,v){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=S,_[14]=M,_[3]=x,_[7]=b,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),d=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const M=d*g,x=d*S,b=h*g,R=h*S;i[0]=p*g,i[4]=-p*S,i[8]=m,i[1]=x+b*m,i[5]=M-R*m,i[9]=-h*p,i[2]=R-M*m,i[6]=b+x*m,i[10]=d*p}else if(e.order==="YXZ"){const M=p*g,x=p*S,b=m*g,R=m*S;i[0]=M+R*h,i[4]=b*h-x,i[8]=d*m,i[1]=d*S,i[5]=d*g,i[9]=-h,i[2]=x*h-b,i[6]=R+M*h,i[10]=d*p}else if(e.order==="ZXY"){const M=p*g,x=p*S,b=m*g,R=m*S;i[0]=M-R*h,i[4]=-d*S,i[8]=b+x*h,i[1]=x+b*h,i[5]=d*g,i[9]=R-M*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const M=d*g,x=d*S,b=h*g,R=h*S;i[0]=p*g,i[4]=b*m-x,i[8]=M*m+R,i[1]=p*S,i[5]=R*m+M,i[9]=x*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const M=d*p,x=d*m,b=h*p,R=h*m;i[0]=p*g,i[4]=R-M*S,i[8]=b*S+x,i[1]=S,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=x*S+b,i[10]=M-R*S}else if(e.order==="XZY"){const M=d*p,x=d*m,b=h*p,R=h*m;i[0]=p*g,i[4]=-S,i[8]=m*g,i[1]=M*S+R,i[5]=d*g,i[9]=x*S-b,i[2]=b*S-x,i[6]=h*g,i[10]=R*S+M}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iM,e,aM)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Na.crossVectors(r,Kn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Na.crossVectors(r,Kn)),Na.normalize(),Kl.crossVectors(Kn,Na),l[0]=Na.x,l[4]=Kl.x,l[8]=Kn.x,l[1]=Na.y,l[5]=Kl.y,l[9]=Kn.y,l[2]=Na.z,l[6]=Kl.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],S=r[5],M=r[9],x=r[13],b=r[2],R=r[6],v=r[10],_=r[14],O=r[3],D=r[7],B=r[11],V=r[15],H=l[0],F=l[4],mt=l[8],G=l[12],T=l[1],N=l[5],dt=l[9],At=l[13],q=l[2],nt=l[6],I=l[10],it=l[14],$=l[3],lt=l[7],w=l[11],j=l[15];return u[0]=d*H+h*T+p*q+m*$,u[4]=d*F+h*N+p*nt+m*lt,u[8]=d*mt+h*dt+p*I+m*w,u[12]=d*G+h*At+p*it+m*j,u[1]=g*H+S*T+M*q+x*$,u[5]=g*F+S*N+M*nt+x*lt,u[9]=g*mt+S*dt+M*I+x*w,u[13]=g*G+S*At+M*it+x*j,u[2]=b*H+R*T+v*q+_*$,u[6]=b*F+R*N+v*nt+_*lt,u[10]=b*mt+R*dt+v*I+_*w,u[14]=b*G+R*At+v*it+_*j,u[3]=O*H+D*T+B*q+V*$,u[7]=O*F+D*N+B*nt+V*lt,u[11]=O*mt+D*dt+B*I+V*w,u[15]=O*G+D*At+B*it+V*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],S=e[6],M=e[10],x=e[14],b=e[3],R=e[7],v=e[11],_=e[15];return b*(+u*p*S-l*m*S-u*h*M+r*m*M+l*h*x-r*p*x)+R*(+i*p*x-i*m*M+u*d*M-l*d*x+l*m*g-u*p*g)+v*(+i*m*S-i*h*x-u*d*S+r*d*x+u*h*g-r*m*g)+_*(-l*h*g-i*p*S+i*h*M+l*d*S-r*d*M+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],S=e[9],M=e[10],x=e[11],b=e[12],R=e[13],v=e[14],_=e[15],O=S*v*m-R*M*m+R*p*x-h*v*x-S*p*_+h*M*_,D=b*M*m-g*v*m-b*p*x+d*v*x+g*p*_-d*M*_,B=g*R*m-b*S*m+b*h*x-d*R*x-g*h*_+d*S*_,V=b*S*p-g*R*p-b*h*M+d*R*M+g*h*v-d*S*v,H=i*O+r*D+l*B+u*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return e[0]=O*F,e[1]=(R*M*u-S*v*u-R*l*x+r*v*x+S*l*_-r*M*_)*F,e[2]=(h*v*u-R*p*u+R*l*m-r*v*m-h*l*_+r*p*_)*F,e[3]=(S*p*u-h*M*u-S*l*m+r*M*m+h*l*x-r*p*x)*F,e[4]=D*F,e[5]=(g*v*u-b*M*u+b*l*x-i*v*x-g*l*_+i*M*_)*F,e[6]=(b*p*u-d*v*u-b*l*m+i*v*m+d*l*_-i*p*_)*F,e[7]=(d*M*u-g*p*u+g*l*m-i*M*m-d*l*x+i*p*x)*F,e[8]=B*F,e[9]=(b*S*u-g*R*u-b*r*x+i*R*x+g*r*_-i*S*_)*F,e[10]=(d*R*u-b*h*u+b*r*m-i*R*m-d*r*_+i*h*_)*F,e[11]=(g*h*u-d*S*u-g*r*m+i*S*m+d*r*x-i*h*x)*F,e[12]=V*F,e[13]=(g*R*l-b*S*l+b*r*M-i*R*M-g*r*v+i*S*v)*F,e[14]=(b*h*l-d*R*l-b*r*p+i*R*p+d*r*v-i*h*v)*F,e[15]=(d*S*l-g*h*l+g*r*p-i*S*p-d*r*M+i*h*M)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,S=h+h,M=u*m,x=u*g,b=u*S,R=d*g,v=d*S,_=h*S,O=p*m,D=p*g,B=p*S,V=r.x,H=r.y,F=r.z;return l[0]=(1-(R+_))*V,l[1]=(x+B)*V,l[2]=(b-D)*V,l[3]=0,l[4]=(x-B)*H,l[5]=(1-(M+_))*H,l[6]=(v+O)*H,l[7]=0,l[8]=(b+D)*F,l[9]=(v-O)*F,l[10]=(1-(M+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const d=ls.set(l[4],l[5],l[6]).length(),h=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const m=1/u,g=1/d,S=1/h;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,i.setFromRotationMatrix(yi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ia){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let x,b;if(h===ia)x=-(d+u)/(d-u),b=-2*d*u/(d-u);else if(h===Sc)x=-d/(d-u),b=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ia){const p=this.elements,m=1/(i-e),g=1/(r-l),S=1/(d-u),M=(i+e)*m,x=(r+l)*g;let b,R;if(h===ia)b=(d+u)*S,R=-2*S;else if(h===Sc)b=u*S,R=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-M,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=R,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new X,yi=new sn,iM=new X(0,0,0),aM=new X(1,1,1),Na=new X,Kl=new X,Kn=new X,Kg=new sn,Qg=new xr;class Ac{constructor(e=0,i=0,r=0,l=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],S=l[2],M=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(M,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-S,x),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ln(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(M,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(M,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const Jg=new X,cs=new xr,Ji=new sn,Ql=new X,No=new X,sM=new X,oM=new xr,$g=new X(1,0,0),t_=new X(0,1,0),e_=new X(0,0,1),lM={type:"added"},cM={type:"removed"};class bn extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new X,i=new Ac,r=new xr,l=new X(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new Te}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(No,Ql,this.up):Ji.lookAt(Ql,No,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(Ji),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),S=d(e.shapes),M=d(e.skeletons),x=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),M.length>0&&(r.skeletons=M),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}bn.DEFAULT_UP=new X(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new X,$i=new X,Jf=new X,ta=new X,us=new X,fs=new X,n_=new X,$f=new X,th=new X,eh=new X;class Ui{constructor(e=new X,i=new X,r=new X){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Mi.subVectors(l,i),$i.subVectors(r,i),Jf.subVectors(e,i);const d=Mi.dot(Mi),h=Mi.dot($i),p=Mi.dot(Jf),m=$i.dot($i),g=$i.dot(Jf),S=d*m-h*h;if(S===0)return u.set(0,0,0),null;const M=1/S,x=(m*p-h*g)*M,b=(d*g-h*p)*M;return u.set(1-x-b,b,x)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ta.x),p.addScaledVector(d,ta.y),p.addScaledVector(h,ta.z),p)}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),$i.subVectors(e,i),Mi.cross($i).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Mi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;us.subVectors(l,r),fs.subVectors(u,r),$f.subVectors(e,r);const p=us.dot($f),m=fs.dot($f);if(p<=0&&m<=0)return i.copy(r);th.subVectors(e,l);const g=us.dot(th),S=fs.dot(th);if(g>=0&&S<=g)return i.copy(l);const M=p*S-g*m;if(M<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(us,d);eh.subVectors(e,u);const x=us.dot(eh),b=fs.dot(eh);if(b>=0&&x<=b)return i.copy(u);const R=x*m-p*b;if(R<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector(fs,h);const v=g*b-x*S;if(v<=0&&S-g>=0&&x-b>=0)return n_.subVectors(u,l),h=(S-g)/(S-g+(x-b)),i.copy(l).addScaledVector(n_,h);const _=1/(v+R+M);return d=R*_,h=M*_,i.copy(r).addScaledVector(us,d).addScaledVector(fs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ie.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ie.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ie.workingColorSpace){if(e=Lh(e,1),i=Ln(i,0,1),r=Ln(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=nh(d,u,e+1/3),this.g=nh(d,u,e),this.b=nh(d,u,e-1/3)}return Ie.toWorkingColorSpace(this,l),this}setStyle(e,i=Tn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Tn){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ie.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Ln(Dn.r*255,0,255))*65536+Math.round(Ln(Dn.g*255,0,255))*256+Math.round(Ln(Dn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const S=d-h;switch(m=g<=.5?S/(d+h):S/(2-d-h),d){case r:p=(l-u)/S+(l<u?6:0);break;case l:p=(u-r)/S+2;break;case u:p=(r-l)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Tn){Ie.fromWorkingColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==Tn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(Jl);const r=Bo(Oa.h,Jl.h,i),l=Bo(Oa.s,Jl.s,i),u=Bo(Oa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ce;Ce.NAMES=l0;let uM=0;class Ls extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Es,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new X,$l=new de;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ts("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ss(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ss(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ss(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ss(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ss(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),u=Pn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class u0 extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class f0 extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fM=0;const hi=new sn,ih=new bn,hs=new X,Qn=new Ho,Oo=new Ho,Sn=new X;class Oi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Te().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new pi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(Sn),Sn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(Sn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Sn.fromBufferAttribute(h,m),p&&(hs.fromBufferAttribute(e,m),Sn.add(hs)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let T=0;T<h;T++)m[T]=new X,g[T]=new X;const S=new X,M=new X,x=new X,b=new de,R=new de,v=new de,_=new X,O=new X;function D(T,N,dt){S.fromArray(l,T*3),M.fromArray(l,N*3),x.fromArray(l,dt*3),b.fromArray(d,T*2),R.fromArray(d,N*2),v.fromArray(d,dt*2),M.sub(S),x.sub(S),R.sub(b),v.sub(b);const At=1/(R.x*v.y-v.x*R.y);isFinite(At)&&(_.copy(M).multiplyScalar(v.y).addScaledVector(x,-R.y).multiplyScalar(At),O.copy(x).multiplyScalar(R.x).addScaledVector(M,-v.x).multiplyScalar(At),m[T].add(_),m[N].add(_),m[dt].add(_),g[T].add(O),g[N].add(O),g[dt].add(O))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let T=0,N=B.length;T<N;++T){const dt=B[T],At=dt.start,q=dt.count;for(let nt=At,I=At+q;nt<I;nt+=3)D(r[nt+0],r[nt+1],r[nt+2])}const V=new X,H=new X,F=new X,mt=new X;function G(T){F.fromArray(u,T*3),mt.copy(F);const N=m[T];V.copy(N),V.sub(F.multiplyScalar(F.dot(N))).normalize(),H.crossVectors(mt,N);const At=H.dot(g[T])<0?-1:1;p[T*4]=V.x,p[T*4+1]=V.y,p[T*4+2]=V.z,p[T*4+3]=At}for(let T=0,N=B.length;T<N;++T){const dt=B[T],At=dt.start,q=dt.count;for(let nt=At,I=At+q;nt<I;nt+=3)G(r[nt+0]),G(r[nt+1]),G(r[nt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let M=0,x=r.count;M<x;M++)r.setXYZ(M,0,0,0);const l=new X,u=new X,d=new X,h=new X,p=new X,m=new X,g=new X,S=new X;if(e)for(let M=0,x=e.count;M<x;M+=3){const b=e.getX(M+0),R=e.getX(M+1),v=e.getX(M+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),g.subVectors(d,u),S.subVectors(l,u),g.cross(S),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),h.add(g),p.add(g),m.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let M=0,x=i.count;M<x;M+=3)l.fromBufferAttribute(i,M+0),u.fromBufferAttribute(i,M+1),d.fromBufferAttribute(i,M+2),g.subVectors(d,u),S.subVectors(l,u),g.cross(S),r.setXYZ(M+0,g.x,g.y,g.z),r.setXYZ(M+1,g.x,g.y,g.z),r.setXYZ(M+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,S=h.normalized,M=new m.constructor(p.length*g);let x=0,b=0;for(let R=0,v=p.length;R<v;R++){h.isInterleavedBufferAttribute?x=p[R]*h.data.stride+h.offset:x=p[R]*g;for(let _=0;_<g;_++)M[b++]=m[x++]}return new Ni(M,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,S=m.length;g<S;g++){const M=m[g],x=e(M,r);p.push(x)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let S=0,M=m.length;S<M;S++){const x=m[S];g.push(x.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],S=u[m];for(let M=0,x=S.length;M<x;M++)g.push(S[M].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const S=d[m];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new sn,fr=new Uh,tc=new bc,a_=new X,ds=new X,ps=new X,ms=new X,ah=new X,ec=new X,nc=new de,ic=new de,ac=new de,r_=new X,s_=new X,o_=new X,rc=new X,sc=new X;class $n extends bn{constructor(e=new Oi,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],S=u[p];g!==0&&(ah.fromBufferAttribute(S,e),d?ec.addScaledVector(ah,g):ec.addScaledVector(ah.sub(i),g))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(tc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(tc,a_)===null||fr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,M=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,R=M.length;b<R;b++){const v=M[b],_=d[v.materialIndex],O=Math.max(v.start,x.start),D=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let B=O,V=D;B<V;B+=3){const H=h.getX(B),F=h.getX(B+1),mt=h.getX(B+2);l=oc(this,_,e,r,m,g,S,H,F,mt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let v=b,_=R;v<_;v+=3){const O=h.getX(v),D=h.getX(v+1),B=h.getX(v+2);l=oc(this,d,e,r,m,g,S,O,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,R=M.length;b<R;b++){const v=M[b],_=d[v.materialIndex],O=Math.max(v.start,x.start),D=Math.min(p.count,Math.min(v.start+v.count,x.start+x.count));for(let B=O,V=D;B<V;B+=3){const H=B,F=B+1,mt=B+2;l=oc(this,_,e,r,m,g,S,H,F,mt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),R=Math.min(p.count,x.start+x.count);for(let v=b,_=R;v<_;v+=3){const O=v,D=v+1,B=v+2;l=oc(this,d,e,r,m,g,S,O,D,B),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function hM(o,e,i,r,l,u,d,h){let p;if(e.side===Vn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Va,h),p===null)return null;sc.copy(h),sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(sc);return m<i.near||m>i.far?null:{distance:m,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,ds),o.getVertexPosition(p,ps),o.getVertexPosition(m,ms);const g=hM(o,e,i,r,ds,ps,ms,rc);if(g){l&&(nc.fromBufferAttribute(l,h),ic.fromBufferAttribute(l,p),ac.fromBufferAttribute(l,m),g.uv=Ui.getInterpolation(rc,ds,ps,ms,nc,ic,ac,new de)),u&&(nc.fromBufferAttribute(u,h),ic.fromBufferAttribute(u,p),ac.fromBufferAttribute(u,m),g.uv1=Ui.getInterpolation(rc,ds,ps,ms,nc,ic,ac,new de),g.uv2=g.uv1),d&&(r_.fromBufferAttribute(d,h),s_.fromBufferAttribute(d,p),o_.fromBufferAttribute(d,m),g.normal=Ui.getInterpolation(rc,ds,ps,ms,r_,s_,o_,new X),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:p,c:m,normal:new X,materialIndex:0};Ui.getNormal(ds,ps,ms,S.normal),g.face=S}return g}class Ga extends Oi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],S=[];let M=0,x=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pi(m,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(S,2));function b(R,v,_,O,D,B,V,H,F,mt,G){const T=B/F,N=V/mt,dt=B/2,At=V/2,q=H/2,nt=F+1,I=mt+1;let it=0,$=0;const lt=new X;for(let w=0;w<I;w++){const j=w*N-At;for(let ht=0;ht<nt;ht++){const Rt=ht*T-dt;lt[R]=Rt*O,lt[v]=j*D,lt[_]=q,m.push(lt.x,lt.y,lt.z),lt[R]=0,lt[v]=0,lt[_]=H>0?1:-1,g.push(lt.x,lt.y,lt.z),S.push(ht/F),S.push(1-w/mt),it+=1}}for(let w=0;w<mt;w++)for(let j=0;j<F;j++){const ht=M+j+nt*w,Rt=M+j+nt*(w+1),k=M+(j+1)+nt*(w+1),ft=M+(j+1)+nt*w;p.push(ht,Rt,ft),p.push(Rt,k,ft),$+=6}h.addGroup(x,$,G),x+=$,M+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function dM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function h0(o){return o.getRenderTarget()===null?o.outputColorSpace:Ie.workingColorSpace}const pM={clone:Cs,merge:zn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class d0 extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new X,l_=new de,c_=new de;class Jn extends d0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class _M extends bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new Jn(gs,_s,e,i);u.layers=this.layers,this.add(u);const d=new Jn(gs,_s,e,i);d.layers=this.layers,this.add(d);const h=new Jn(gs,_s,e,i);h.layers=this.layers,this.add(h);const p=new Jn(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new Jn(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,S=e.getRenderTarget(),M=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(S,M,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class p0 extends kn{constructor(e,i,r,l,u,d,h,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?Tn:di),this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ga(5,5,5),u=new ra({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Fa});u.uniforms.tEquirect.value=i;const d=new $n(l,u),h=i.minFilter;return i.minFilter===_r&&(i.minFilter=Gn),new _M(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const rh=new X,SM=new X,yM=new Te;class za{constructor(e=new X(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=rh.subVectors(r,i).cross(SM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yM.getNormalMatrix(e),l=this.coplanarPoint(rh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bc,lc=new X;class Nh{constructor(e=new za,i=new za,r=new za,l=new za,u=new za,d=new za){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],S=l[6],M=l[7],x=l[8],b=l[9],R=l[10],v=l[11],_=l[12],O=l[13],D=l[14],B=l[15];if(r[0].setComponents(p-u,M-m,v-x,B-_).normalize(),r[1].setComponents(p+u,M+m,v+x,B+_).normalize(),r[2].setComponents(p+d,M+g,v+b,B+O).normalize(),r[3].setComponents(p-d,M-g,v-b,B-O).normalize(),r[4].setComponents(p-h,M-S,v-R,B-D).normalize(),i===ia)r[5].setComponents(p+h,M+S,v+R,B+D).normalize();else if(i===Sc)r[5].setComponents(h,S,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function MM(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const S=m.array,M=m.usage,x=S.byteLength,b=o.createBuffer();o.bindBuffer(g,b),o.bufferData(g,S,M),m.onUploadCallback();let R;if(S instanceof Float32Array)R=o.FLOAT;else if(S instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(S instanceof Int16Array)R=o.SHORT;else if(S instanceof Uint32Array)R=o.UNSIGNED_INT;else if(S instanceof Int32Array)R=o.INT;else if(S instanceof Int8Array)R=o.BYTE;else if(S instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:b,type:R,bytesPerElement:S.BYTES_PER_ELEMENT,version:m.version,size:x}}function u(m,g,S){const M=g.array,x=g._updateRange,b=g.updateRanges;if(o.bindBuffer(S,m),x.count===-1&&b.length===0&&o.bufferSubData(S,0,M),b.length!==0){for(let R=0,v=b.length;R<v;R++){const _=b[R];i?o.bufferSubData(S,_.start*M.BYTES_PER_ELEMENT,M,_.start,_.count):o.bufferSubData(S,_.start*M.BYTES_PER_ELEMENT,M.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}x.count!==-1&&(i?o.bufferSubData(S,x.offset*M.BYTES_PER_ELEMENT,M,x.offset,x.count):o.bufferSubData(S,x.offset*M.BYTES_PER_ELEMENT,M.subarray(x.offset,x.offset+x.count)),x.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const M=r.get(m);(!M||M.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const S=r.get(m);if(S===void 0)r.set(m,l(m,g));else if(S.version<m.version){if(S.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(S.buffer,m,g),S.version=m.version}}return{get:d,remove:h,update:p}}class Rc extends Oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,S=e/h,M=i/p,x=[],b=[],R=[],v=[];for(let _=0;_<g;_++){const O=_*M-d;for(let D=0;D<m;D++){const B=D*S-u;b.push(B,-O,0),R.push(0,0,1),v.push(D/h),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const D=O+m*_,B=O+m*(_+1),V=O+1+m*(_+1),H=O+1+m*_;x.push(D,B,H),x.push(B,V,H)}this.setIndex(x),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
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
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
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
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,zM=`#ifdef USE_BUMPMAP
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XM=`#define PI 3.141592653589793
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
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`
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
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Mx=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ux=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
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
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const ME=`varying vec2 vUv;
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
}`,RE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,Me={alphahash_fragment:xM,alphahash_pars_fragment:EM,alphamap_fragment:TM,alphamap_pars_fragment:bM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:wM,aomap_pars_fragment:CM,batching_pars_vertex:DM,batching_vertex:LM,begin_vertex:UM,beginnormal_vertex:NM,bsdfs:OM,iridescence_fragment:PM,bumpmap_pars_fragment:zM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:kM,color_vertex:WM,common:XM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:YM,displacementmap_pars_vertex:jM,displacementmap_vertex:ZM,emissivemap_fragment:KM,emissivemap_pars_fragment:QM,colorspace_fragment:JM,colorspace_pars_fragment:$M,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:mx,envmap_vertex:ax,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ox,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:Sx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:xx,lights_fragment_maps:Ex,lights_fragment_end:Tx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:wx,map_fragment:Cx,map_pars_fragment:Dx,map_particle_fragment:Lx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ox,morphcolor_vertex:Px,morphnormal_vertex:zx,morphtarget_pars_vertex:Bx,morphtarget_vertex:Fx,normal_fragment_begin:Ix,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:Vx,normal_vertex:kx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:jx,opaque_fragment:Zx,packing:Kx,premultiplied_alpha_fragment:Qx,project_vertex:Jx,dithering_fragment:$x,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:SE,worldpos_vertex:yE,background_vert:ME,background_frag:xE,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:RE,depth_frag:wE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:LE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:IE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},Ht={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Di={basic:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:zn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:zn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:zn([Ht.points,Ht.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:zn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:zn([Ht.common,Ht.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:zn([Ht.sprite,Ht.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:zn([Ht.common,Ht.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:zn([Ht.lights,Ht.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Di.physical={uniforms:zn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const cc={r:0,b:0,g:0};function eT(o,e,i,r,l,u,d){const h=new Ce(0);let p=u===!0?0:1,m,g,S=null,M=0,x=null;function b(v,_){let O=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?i:e).get(D)),D===null?R(h,p):D&&D.isColor&&(R(D,1),O=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),D&&(D.isCubeTexture||D.mapping===Ec)?(g===void 0&&(g=new $n(new Ga(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:Cs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,H,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ie.getTransfer(D.colorSpace)!==Ye,(S!==D||M!==D.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,S=D,M=D.version,x=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new $n(new Rc(2,2),new ra({name:"BackgroundMaterial",uniforms:Cs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ie.getTransfer(D.colorSpace)!==Ye,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||M!==D.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,M=D.version,x=o.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function R(v,_){v.getRGB(cc,h0(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,_,d)}return{getClearColor:function(){return h},setClearColor:function(v,_=1){h.set(v),p=_,R(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,R(h,p)},render:b}}function nT(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},p=v(null);let m=p,g=!1;function S(q,nt,I,it,$){let lt=!1;if(d){const w=R(it,I,nt);m!==w&&(m=w,x(m.object)),lt=_(q,it,I,$),lt&&O(q,it,I,$)}else{const w=nt.wireframe===!0;(m.geometry!==it.id||m.program!==I.id||m.wireframe!==w)&&(m.geometry=it.id,m.program=I.id,m.wireframe=w,lt=!0)}$!==null&&i.update($,o.ELEMENT_ARRAY_BUFFER),(lt||g)&&(g=!1,mt(q,nt,I,it),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get($).buffer))}function M(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function x(q){return r.isWebGL2?o.bindVertexArray(q):u.bindVertexArrayOES(q)}function b(q){return r.isWebGL2?o.deleteVertexArray(q):u.deleteVertexArrayOES(q)}function R(q,nt,I){const it=I.wireframe===!0;let $=h[q.id];$===void 0&&($={},h[q.id]=$);let lt=$[nt.id];lt===void 0&&(lt={},$[nt.id]=lt);let w=lt[it];return w===void 0&&(w=v(M()),lt[it]=w),w}function v(q){const nt=[],I=[],it=[];for(let $=0;$<l;$++)nt[$]=0,I[$]=0,it[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:I,attributeDivisors:it,object:q,attributes:{},index:null}}function _(q,nt,I,it){const $=m.attributes,lt=nt.attributes;let w=0;const j=I.getAttributes();for(const ht in j)if(j[ht].location>=0){const k=$[ht];let ft=lt[ht];if(ft===void 0&&(ht==="instanceMatrix"&&q.instanceMatrix&&(ft=q.instanceMatrix),ht==="instanceColor"&&q.instanceColor&&(ft=q.instanceColor)),k===void 0||k.attribute!==ft||ft&&k.data!==ft.data)return!0;w++}return m.attributesNum!==w||m.index!==it}function O(q,nt,I,it){const $={},lt=nt.attributes;let w=0;const j=I.getAttributes();for(const ht in j)if(j[ht].location>=0){let k=lt[ht];k===void 0&&(ht==="instanceMatrix"&&q.instanceMatrix&&(k=q.instanceMatrix),ht==="instanceColor"&&q.instanceColor&&(k=q.instanceColor));const ft={};ft.attribute=k,k&&k.data&&(ft.data=k.data),$[ht]=ft,w++}m.attributes=$,m.attributesNum=w,m.index=it}function D(){const q=m.newAttributes;for(let nt=0,I=q.length;nt<I;nt++)q[nt]=0}function B(q){V(q,0)}function V(q,nt){const I=m.newAttributes,it=m.enabledAttributes,$=m.attributeDivisors;I[q]=1,it[q]===0&&(o.enableVertexAttribArray(q),it[q]=1),$[q]!==nt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,nt),$[q]=nt)}function H(){const q=m.newAttributes,nt=m.enabledAttributes;for(let I=0,it=nt.length;I<it;I++)nt[I]!==q[I]&&(o.disableVertexAttribArray(I),nt[I]=0)}function F(q,nt,I,it,$,lt,w){w===!0?o.vertexAttribIPointer(q,nt,I,$,lt):o.vertexAttribPointer(q,nt,I,it,$,lt)}function mt(q,nt,I,it){if(r.isWebGL2===!1&&(q.isInstancedMesh||it.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const $=it.attributes,lt=I.getAttributes(),w=nt.defaultAttributeValues;for(const j in lt){const ht=lt[j];if(ht.location>=0){let Rt=$[j];if(Rt===void 0&&(j==="instanceMatrix"&&q.instanceMatrix&&(Rt=q.instanceMatrix),j==="instanceColor"&&q.instanceColor&&(Rt=q.instanceColor)),Rt!==void 0){const k=Rt.normalized,ft=Rt.itemSize,Tt=i.get(Rt);if(Tt===void 0)continue;const Zt=Tt.buffer,gt=Tt.type,yt=Tt.bytesPerElement,Ot=r.isWebGL2===!0&&(gt===o.INT||gt===o.UNSIGNED_INT||Rt.gpuType===Y_);if(Rt.isInterleavedBufferAttribute){const Wt=Rt.data,K=Wt.stride,Se=Rt.offset;if(Wt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<ht.locationSize;Ct++)V(ht.location+Ct,Wt.meshPerAttribute);q.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let Ct=0;Ct<ht.locationSize;Ct++)B(ht.location+Ct);o.bindBuffer(o.ARRAY_BUFFER,Zt);for(let Ct=0;Ct<ht.locationSize;Ct++)F(ht.location+Ct,ft/ht.locationSize,gt,k,K*yt,(Se+ft/ht.locationSize*Ct)*yt,Ot)}else{if(Rt.isInstancedBufferAttribute){for(let Wt=0;Wt<ht.locationSize;Wt++)V(ht.location+Wt,Rt.meshPerAttribute);q.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Wt=0;Wt<ht.locationSize;Wt++)B(ht.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,Zt);for(let Wt=0;Wt<ht.locationSize;Wt++)F(ht.location+Wt,ft/ht.locationSize,gt,k,ft*yt,ft/ht.locationSize*Wt*yt,Ot)}}else if(w!==void 0){const k=w[j];if(k!==void 0)switch(k.length){case 2:o.vertexAttrib2fv(ht.location,k);break;case 3:o.vertexAttrib3fv(ht.location,k);break;case 4:o.vertexAttrib4fv(ht.location,k);break;default:o.vertexAttrib1fv(ht.location,k)}}}}H()}function G(){dt();for(const q in h){const nt=h[q];for(const I in nt){const it=nt[I];for(const $ in it)b(it[$].object),delete it[$];delete nt[I]}delete h[q]}}function T(q){if(h[q.id]===void 0)return;const nt=h[q.id];for(const I in nt){const it=nt[I];for(const $ in it)b(it[$].object),delete it[$];delete nt[I]}delete h[q.id]}function N(q){for(const nt in h){const I=h[nt];if(I[q.id]===void 0)continue;const it=I[q.id];for(const $ in it)b(it[$].object),delete it[$];delete I[q.id]}}function dt(){At(),g=!0,m!==p&&(m=p,x(m.object))}function At(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:S,reset:dt,resetDefaultState:At,dispose:G,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:D,enableAttribute:B,disableUnusedAttributes:H}}function iT(o,e,i,r){const l=r.isWebGL2;let u;function d(g){u=g}function h(g,S){o.drawArrays(u,g,S),i.update(S,u,1)}function p(g,S,M){if(M===0)return;let x,b;if(l)x=o,b="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](u,g,S,M),i.update(S,u,M)}function m(g,S,M){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<M;b++)this.render(g[b],S[b]);else{x.multiDrawArraysWEBGL(u,g,0,S,0,M);let b=0;for(let R=0;R<M;R++)b+=S[R];i.update(b,u,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function aT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=M>0,B=d||e.has("OES_texture_float"),V=D&&B,H=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:x,maxCubemapSize:b,maxAttributes:R,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:O,vertexTextures:D,floatFragmentTextures:B,floatVertexTextures:V,maxSamples:H}}function rT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new za,h=new Te,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,M){const x=S.length!==0||M||r!==0||l;return l=M,r=S.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,M){i=g(S,M,0)},this.setState=function(S,M,x){const b=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,_=o.get(S);if(!l||b===null||b.length===0||u&&!v)u?g(null):m();else{const O=u?0:r,D=O*4;let B=_.clippingState||null;p.value=B,B=g(b,M,D,x);for(let V=0;V!==D;++V)B[V]=i[V];_.clippingState=B,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,M,x,b){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=p.value,b!==!0||v===null){const _=x+R*4,O=M.matrixWorldInverse;h.getNormalMatrix(O),(v===null||v.length<_)&&(v=new Float32Array(_));for(let D=0,B=x;D!==R;++D,B+=4)d.copy(S[D]).applyMatrix4(O,h),d.normal.toArray(v,B),v[B+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function sT(o){let e=new WeakMap;function i(d,h){return h===vh?d.mapping=As:h===Sh&&(d.mapping=Rs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===vh||h===Sh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new vM(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class g0 extends d0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ys=4,u_=[.125,.215,.35,.446,.526,.582],gr=20,sh=new g0,f_=new Ce;let oh=null,lh=0,ch=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,h_=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,pr,vs),new X(0,pr,-vs),new X(vs,0,pr),new X(-vs,0,pr),new X(pr,vs,0),new X(-pr,vs,0)];class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,lh,ch),e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:aa,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(u)),this._blurMaterial=lT(u,e,i)}return l}_compileMaterial(e){const i=new $n(this._lodPlanes[0],e);this._renderer.compile(i,sh)}_sceneToCubeUV(e,i,r,l){const h=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(f_),g.toneMapping=Ia,g.autoClear=!1;const x=new c0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),b=new $n(new Ga,x);let R=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,R=!0):(x.color.copy(f_),R=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(h.up.set(0,p[_],0),h.lookAt(m[_],0,0)):O===1?(h.up.set(0,0,p[_]),h.lookAt(0,m[_],0)):(h.up.set(0,p[_],0),h.lookAt(0,0,m[_]));const D=this._cubeSize;uc(l,O*D,_>2?D:0,D,D),g.setRenderTarget(l),R&&g.render(b,h),g.render(e,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=M,g.autoClear=S,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===Rs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new $n(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;uc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,sh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=h_[(l-1)%h_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new $n(this._lodPlanes[l],m),M=m.uniforms,x=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*gr-1),R=u/b,v=isFinite(u)?1+Math.floor(g*R):gr;v>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const _=[];let O=0;for(let F=0;F<gr;++F){const mt=F/R,G=Math.exp(-mt*mt/2);_.push(G),F===0?O+=G:F<v&&(O+=2*G)}for(let F=0;F<_.length;F++)_[F]=_[F]/O;M.envMap.value=e.texture,M.samples.value=v,M.weights.value=_,M.latitudinal.value=d==="latitudinal",h&&(M.poleAxis.value=h);const{_lodMax:D}=this;M.dTheta.value=b,M.mipInt.value=D-r;const B=this._sizeLods[l],V=3*B*(l>D-ys?l-D+ys:0),H=4*(this._cubeSize-B);uc(i,V,H,3*B,2*B),p.setRenderTarget(i),p.render(S,sh)}}function oT(o){const e=[],i=[],r=[];let l=o;const u=o-ys+1+u_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-ys?p=u_[d-o+ys-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,S=1+m,M=[g,g,S,g,S,S,g,g,S,S,g,S],x=6,b=6,R=3,v=2,_=1,O=new Float32Array(R*b*x),D=new Float32Array(v*b*x),B=new Float32Array(_*b*x);for(let H=0;H<x;H++){const F=H%3*2/3-1,mt=H>2?0:-1,G=[F,mt,0,F+2/3,mt,0,F+2/3,mt+1,0,F,mt,0,F+2/3,mt+1,0,F,mt+1,0];O.set(G,R*b*H),D.set(M,v*b*H);const T=[H,H,H,H,H,H];B.set(T,_*b*H)}const V=new Oi;V.setAttribute("position",new Ni(O,R)),V.setAttribute("uv",new Ni(D,v)),V.setAttribute("faceIndex",new Ni(B,_)),e.push(V),l>ys&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function p_(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function lT(o,e,i){const r=new Float32Array(gr),l=new X(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function m_(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function g_(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function cT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===vh||p===Sh,g=p===As||p===Rs;if(m||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let S=e.get(h);return i===null&&(i=new d_(o)),S=m?i.fromEquirectangular(h,S):i.fromCubemap(h,S),e.set(h,S),S.texture}else{if(e.has(h))return e.get(h).texture;{const S=h.image;if(m&&S&&S.height>0||g&&S&&l(S)){i===null&&(i=new d_(o));const M=m?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,M),h.addEventListener("dispose",u),M.texture}else return null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function uT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fT(o,e,i,r){const l={},u=new WeakMap;function d(S){const M=S.target;M.index!==null&&e.remove(M.index);for(const b in M.attributes)e.remove(M.attributes[b]);for(const b in M.morphAttributes){const R=M.morphAttributes[b];for(let v=0,_=R.length;v<_;v++)e.remove(R[v])}M.removeEventListener("dispose",d),delete l[M.id];const x=u.get(M);x&&(e.remove(x),u.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function h(S,M){return l[M.id]===!0||(M.addEventListener("dispose",d),l[M.id]=!0,i.memory.geometries++),M}function p(S){const M=S.attributes;for(const b in M)e.update(M[b],o.ARRAY_BUFFER);const x=S.morphAttributes;for(const b in x){const R=x[b];for(let v=0,_=R.length;v<_;v++)e.update(R[v],o.ARRAY_BUFFER)}}function m(S){const M=[],x=S.index,b=S.attributes.position;let R=0;if(x!==null){const O=x.array;R=x.version;for(let D=0,B=O.length;D<B;D+=3){const V=O[D+0],H=O[D+1],F=O[D+2];M.push(V,H,H,F,F,V)}}else if(b!==void 0){const O=b.array;R=b.version;for(let D=0,B=O.length/3-1;D<B;D+=3){const V=D+0,H=D+1,F=D+2;M.push(V,H,H,F,F,V)}}else return;const v=new(i0(M)?f0:u0)(M,1);v.version=R;const _=u.get(S);_&&e.remove(_),u.set(S,v)}function g(S){const M=u.get(S);if(M){const x=S.index;x!==null&&M.version<x.version&&m(S)}else m(S);return u.get(S)}return{get:h,update:p,getWireframeAttribute:g}}function hT(o,e,i,r){const l=r.isWebGL2;let u;function d(x){u=x}let h,p;function m(x){h=x.type,p=x.bytesPerElement}function g(x,b){o.drawElements(u,b,h,x*p),i.update(b,u,1)}function S(x,b,R){if(R===0)return;let v,_;if(l)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](u,b,h,x*p,R),i.update(b,u,R)}function M(x,b,R){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<R;_++)this.render(x[_]/p,b[_]);else{v.multiDrawElementsWEBGL(u,b,0,h,x,0,R);let _=0;for(let O=0;O<R;O++)_+=b[O];i.update(_,u,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=S,this.renderMultiDraw=M}function dT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pT(o,e){return o[0]-e[0]}function mT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function gT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new Ze,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,g,S){const M=m.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,R=b!==void 0?b.length:0;let v=u.get(g);if(v===void 0||v.count!==R){let nt=function(){At.dispose(),u.delete(g),g.removeEventListener("dispose",nt)};var x=nt;v!==void 0&&v.texture.dispose();const D=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,V=g.morphAttributes.color!==void 0,H=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],mt=g.morphAttributes.color||[];let G=0;D===!0&&(G=1),B===!0&&(G=2),V===!0&&(G=3);let T=g.attributes.position.count*G,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const dt=new Float32Array(T*N*4*R),At=new s0(dt,T,N,R);At.type=na,At.needsUpdate=!0;const q=G*4;for(let I=0;I<R;I++){const it=H[I],$=F[I],lt=mt[I],w=T*N*4*I;for(let j=0;j<it.count;j++){const ht=j*q;D===!0&&(d.fromBufferAttribute(it,j),dt[w+ht+0]=d.x,dt[w+ht+1]=d.y,dt[w+ht+2]=d.z,dt[w+ht+3]=0),B===!0&&(d.fromBufferAttribute($,j),dt[w+ht+4]=d.x,dt[w+ht+5]=d.y,dt[w+ht+6]=d.z,dt[w+ht+7]=0),V===!0&&(d.fromBufferAttribute(lt,j),dt[w+ht+8]=d.x,dt[w+ht+9]=d.y,dt[w+ht+10]=d.z,dt[w+ht+11]=lt.itemSize===4?d.w:1)}}v={count:R,texture:At,size:new de(T,N)},u.set(g,v),g.addEventListener("dispose",nt)}let _=0;for(let D=0;D<M.length;D++)_+=M[D];const O=g.morphTargetsRelative?1:1-_;S.getUniforms().setValue(o,"morphTargetBaseInfluence",O),S.getUniforms().setValue(o,"morphTargetInfluences",M),S.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),S.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const b=M===void 0?0:M.length;let R=r[g.id];if(R===void 0||R.length!==b){R=[];for(let B=0;B<b;B++)R[B]=[B,0];r[g.id]=R}for(let B=0;B<b;B++){const V=R[B];V[0]=B,V[1]=M[B]}R.sort(mT);for(let B=0;B<8;B++)B<b&&R[B][1]?(h[B][0]=R[B][0],h[B][1]=R[B][1]):(h[B][0]=Number.MAX_SAFE_INTEGER,h[B][1]=0);h.sort(pT);const v=g.morphAttributes.position,_=g.morphAttributes.normal;let O=0;for(let B=0;B<8;B++){const V=h[B],H=V[0],F=V[1];H!==Number.MAX_SAFE_INTEGER&&F?(v&&g.getAttribute("morphTarget"+B)!==v[H]&&g.setAttribute("morphTarget"+B,v[H]),_&&g.getAttribute("morphNormal"+B)!==_[H]&&g.setAttribute("morphNormal"+B,_[H]),l[B]=F,O+=F):(v&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),_&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),l[B]=0)}const D=g.morphTargetsRelative?1:1-O;S.getUniforms().setValue(o,"morphTargetBaseInfluence",D),S.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function _T(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,S=e.get(p,g);if(l.get(S)!==m&&(e.update(S),l.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==m&&(M.update(),l.set(M,m))}return S}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class _0 extends kn{constructor(e,i,r,l,u,d,h,p,m,g){if(g=g!==void 0?g:Sr,g!==Sr&&g!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Sr&&(r=Ba),r===void 0&&g===ws&&(r=vr),super(null,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const v0=new kn,S0=new _0(1,1);S0.compareFunction=n0;const y0=new s0,M0=new eM,x0=new p0,__=[],v_=[],S_=new Float32Array(16),y_=new Float32Array(9),M_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function wc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;M_.set(r),o.uniformMatrix2fv(this.addr,!1,M_),mn(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),mn(i,r)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;S_.set(r),o.uniformMatrix4fv(this.addr,!1,S_),mn(i,r)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?S0:v0;i.setTexture2D(e||u,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||M0,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||x0,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||y0,l)}function BT(o){switch(o){case 5126:return vT;case 35664:return ST;case 35665:return yT;case 35666:return MT;case 35674:return xT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return wT;case 5125:return CT;case 36294:return DT;case 36295:return LT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}function FT(o,e){o.uniform1fv(this.addr,e)}function IT(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kT(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WT(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XT(o,e){o.uniform1iv(this.addr,e)}function qT(o,e){o.uniform2iv(this.addr,e)}function YT(o,e){o.uniform3iv(this.addr,e)}function jT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function KT(o,e){o.uniform2uiv(this.addr,e)}function QT(o,e){o.uniform3uiv(this.addr,e)}function JT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||v0,u[d])}function tb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||M0,u[d])}function eb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||x0,u[d])}function nb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||y0,u[d])}function ib(o){switch(o){case 5126:return FT;case 35664:return IT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class rb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function x_(o,e){o.seq.push(e),o.map[e.id]=e}function ob(o,e,i){const r=o.name,l=r.length;for(uh.lastIndex=0;;){const u=uh.exec(r),d=uh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){x_(i,m===void 0?new ab(h,o,e):new rb(h,o,e));break}else{let S=i.map[h];S===void 0&&(S=new sb(h),x_(i,S)),i=S}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);ob(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let cb=0;function ub(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function fb(o){const e=Ie.getPrimaries(Ie.workingColorSpace),i=Ie.getPrimaries(o);let r;switch(e===i?r="":e===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":e===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case aa:case Tc:return[r,"LinearTransferOETF"];case Tn:case Dh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function T_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ub(o.getShaderSource(e),d)}else return l}function hb(o,e){const i=fb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function db(o,e){let i;switch(e){case hy:i="Linear";break;case dy:i="Reinhard";break;case py:i="OptimizedCineon";break;case my:i="ACESFilmic";break;case _y:i="AgX";break;case gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.alphaToCoverage||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function gb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _b(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ms(o){return o!==""}function b_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(o){return o.replace(vb,yb)}const Sb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yb(o,e){let i=Me[e];if(i===void 0){const r=Sb.get(e);if(r!==void 0)i=Me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Th(i)}const Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(Mb,xb)}function xb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Eb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case uy:e="ENVMAP_BLENDING_MIX";break;case fy:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function wb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=Eb(i),m=Tb(i),g=bb(i),S=Ab(i),M=Rb(i),x=i.isWebGL2?"":pb(i),b=mb(i),R=gb(u),v=l.createProgram();let _,O,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),_.length>0&&(_+=`
`),O=[x,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ms).join(`
`),O.length>0&&(O+=`
`)):(_=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),O=[x,w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?Me.tonemapping_pars_fragment:"",i.toneMapping!==Ia?db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,hb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ms).join(`
`)),d=Th(d),d=b_(d,i),d=A_(d,i),h=Th(h),h=b_(h,i),h=A_(h,i),d=R_(d),h=R_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,O=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const B=D+_+d,V=D+O+h,H=E_(l,l.VERTEX_SHADER,B),F=E_(l,l.FRAGMENT_SHADER,V);l.attachShader(v,H),l.attachShader(v,F),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function mt(dt){if(o.debug.checkShaderErrors){const At=l.getProgramInfoLog(v).trim(),q=l.getShaderInfoLog(H).trim(),nt=l.getShaderInfoLog(F).trim();let I=!0,it=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(I=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,v,H,F);else{const $=T_(l,H,"vertex"),lt=T_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Material Name: `+dt.name+`
Material Type: `+dt.type+`

Program Info Log: `+At+`
`+$+`
`+lt)}else At!==""?console.warn("THREE.WebGLProgram: Program Info Log:",At):(q===""||nt==="")&&(it=!1);it&&(dt.diagnostics={runnable:I,programLog:At,vertexShader:{log:q,prefix:_},fragmentShader:{log:nt,prefix:O}})}l.deleteShader(H),l.deleteShader(F),G=new pc(l,v),T=_b(l,v)}let G;this.getUniforms=function(){return G===void 0&&mt(this),G};let T;this.getAttributes=function(){return T===void 0&&mt(this),T};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(v,lb)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=F,this}let Cb=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Lb(e),i.set(e,r)),r}}class Lb{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Ub(o,e,i,r,l,u,d){const h=new o0,p=new Db,m=new Set,g=[],S=l.isWebGL2,M=l.logarithmicDepthBuffer,x=l.vertexTextures;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return m.add(T),T===0?"uv":`uv${T}`}function _(T,N,dt,At,q){const nt=At.fog,I=q.geometry,it=T.isMeshStandardMaterial?At.environment:null,$=(T.isMeshStandardMaterial?i:e).get(T.envMap||it),lt=$&&$.mapping===Ec?$.image.height:null,w=R[T.type];T.precision!==null&&(b=l.getMaxPrecision(T.precision),b!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",b,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ht=j!==void 0?j.length:0;let Rt=0;I.morphAttributes.position!==void 0&&(Rt=1),I.morphAttributes.normal!==void 0&&(Rt=2),I.morphAttributes.color!==void 0&&(Rt=3);let k,ft,Tt,Zt;if(w){const Et=Di[w];k=Et.vertexShader,ft=Et.fragmentShader}else k=T.vertexShader,ft=T.fragmentShader,p.update(T),Tt=p.getVertexShaderID(T),Zt=p.getFragmentShaderID(T);const gt=o.getRenderTarget(),yt=q.isInstancedMesh===!0,Ot=q.isBatchedMesh===!0,Wt=!!T.map,K=!!T.matcap,Se=!!$,Ct=!!T.aoMap,ne=!!T.lightMap,Bt=!!T.bumpMap,Xt=!!T.normalMap,Ft=!!T.displacementMap,L=!!T.emissiveMap,E=!!T.metalnessMap,J=!!T.roughnessMap,ct=T.anisotropy>0,vt=T.clearcoat>0,ut=T.iridescence>0,Vt=T.sheen>0,Ut=T.transmission>0,Yt=ct&&!!T.anisotropyMap,ie=vt&&!!T.clearcoatMap,se=vt&&!!T.clearcoatNormalMap,Mt=vt&&!!T.clearcoatRoughnessMap,Re=ut&&!!T.iridescenceMap,pe=ut&&!!T.iridescenceThicknessMap,oe=Vt&&!!T.sheenColorMap,jt=Vt&&!!T.sheenRoughnessMap,kt=!!T.specularMap,ce=!!T.specularColorMap,P=!!T.specularIntensityMap,Nt=Ut&&!!T.transmissionMap,Gt=Ut&&!!T.thicknessMap,qt=!!T.gradientMap,U=!!T.alphaMap,Lt=T.alphaTest>0,xt=!!T.alphaHash,Kt=!!T.extensions;let st=Ia;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(st=o.toneMapping);const Dt={isWebGL2:S,shaderID:w,shaderType:T.type,shaderName:T.name,vertexShader:k,fragmentShader:ft,defines:T.defines,customVertexShaderID:Tt,customFragmentShaderID:Zt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:b,batching:Ot,instancing:yt,instancingColor:yt&&q.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:aa,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:K,envMap:Se,envMapMode:Se&&$.mapping,envMapCubeUVHeight:lt,aoMap:Ct,lightMap:ne,bumpMap:Bt,normalMap:Xt,displacementMap:x&&Ft,emissiveMap:L,normalMapObjectSpace:Xt&&T.normalMapType===wy,normalMapTangentSpace:Xt&&T.normalMapType===e0,metalnessMap:E,roughnessMap:J,anisotropy:ct,anisotropyMap:Yt,clearcoat:vt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:Mt,iridescence:ut,iridescenceMap:Re,iridescenceThicknessMap:pe,sheen:Vt,sheenColorMap:oe,sheenRoughnessMap:jt,specularMap:kt,specularColorMap:ce,specularIntensityMap:P,transmission:Ut,transmissionMap:Nt,thicknessMap:Gt,gradientMap:qt,opaque:T.transparent===!1&&T.blending===Es&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:Lt,alphaHash:xt,combine:T.combine,mapUv:Wt&&v(T.map.channel),aoMapUv:Ct&&v(T.aoMap.channel),lightMapUv:ne&&v(T.lightMap.channel),bumpMapUv:Bt&&v(T.bumpMap.channel),normalMapUv:Xt&&v(T.normalMap.channel),displacementMapUv:Ft&&v(T.displacementMap.channel),emissiveMapUv:L&&v(T.emissiveMap.channel),metalnessMapUv:E&&v(T.metalnessMap.channel),roughnessMapUv:J&&v(T.roughnessMap.channel),anisotropyMapUv:Yt&&v(T.anisotropyMap.channel),clearcoatMapUv:ie&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:jt&&v(T.sheenRoughnessMap.channel),specularMapUv:kt&&v(T.specularMap.channel),specularColorMapUv:ce&&v(T.specularColorMap.channel),specularIntensityMapUv:P&&v(T.specularIntensityMap.channel),transmissionMapUv:Nt&&v(T.transmissionMap.channel),thicknessMapUv:Gt&&v(T.thicknessMap.channel),alphaMapUv:U&&v(T.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Xt||ct),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(Wt||U),fog:!!nt,useFog:T.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Rt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&dt.length>0,shadowMapType:o.shadowMap.type,toneMapping:st,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&Ie.getTransfer(T.map.colorSpace)===Ye,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Li,flipSided:T.side===Vn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Kt&&T.extensions.derivatives===!0,extensionFragDepth:Kt&&T.extensions.fragDepth===!0,extensionDrawBuffers:Kt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Kt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Kt&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Kt&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:S||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:S||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:S||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function O(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const dt in T.defines)N.push(dt),N.push(T.defines[dt]);return T.isRawShaderMaterial===!1&&(D(N,T),B(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function D(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function B(T,N){h.disableAll(),N.isWebGL2&&h.enable(0),N.supportsVertexTextures&&h.enable(1),N.instancing&&h.enable(2),N.instancingColor&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),T.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.skinning&&h.enable(4),N.morphTargets&&h.enable(5),N.morphNormals&&h.enable(6),N.morphColors&&h.enable(7),N.premultipliedAlpha&&h.enable(8),N.shadowMapEnabled&&h.enable(9),N.useLegacyLights&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.alphaToCoverage&&h.enable(20),T.push(h.mask)}function V(T){const N=R[T.type];let dt;if(N){const At=Di[N];dt=pM.clone(At.uniforms)}else dt=T.uniforms;return dt}function H(T,N){let dt;for(let At=0,q=g.length;At<q;At++){const nt=g[At];if(nt.cacheKey===N){dt=nt,++dt.usedTimes;break}}return dt===void 0&&(dt=new wb(o,N,T,u),g.push(dt)),dt}function F(T){if(--T.usedTimes===0){const N=g.indexOf(T);g[N]=g[g.length-1],g.pop(),T.destroy()}}function mt(T){p.remove(T)}function G(){p.dispose()}return{getParameters:_,getProgramCacheKey:O,getUniforms:V,acquireProgram:H,releaseProgram:F,releaseShaderCache:mt,programs:g,dispose:G}}function Nb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(S,M,x,b,R,v){let _=o[e];return _===void 0?(_={id:S.id,object:S,geometry:M,material:x,groupOrder:b,renderOrder:S.renderOrder,z:R,group:v},o[e]=_):(_.id=S.id,_.object=S,_.geometry=M,_.material=x,_.groupOrder=b,_.renderOrder=S.renderOrder,_.z=R,_.group=v),e++,_}function h(S,M,x,b,R,v){const _=d(S,M,x,b,R,v);x.transmission>0?r.push(_):x.transparent===!0?l.push(_):i.push(_)}function p(S,M,x,b,R,v){const _=d(S,M,x,b,R,v);x.transmission>0?r.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function m(S,M){i.length>1&&i.sort(S||Ob),r.length>1&&r.sort(M||C_),l.length>1&&l.sort(M||C_)}function g(){for(let S=e,M=o.length;S<M;S++){const x=o[S];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function Pb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new D_,o.set(r,[d])):l>=u.length?(d=new D_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new X,color:new Ce};break;case"SpotLight":i={position:new X,direction:new X,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=i,i}}}function Bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Fb=0;function Ib(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Hb(o,e){const i=new zb,r=Bb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new X);const u=new X,d=new sn,h=new sn;function p(g,S){let M=0,x=0,b=0;for(let dt=0;dt<9;dt++)l.probe[dt].set(0,0,0);let R=0,v=0,_=0,O=0,D=0,B=0,V=0,H=0,F=0,mt=0,G=0;g.sort(Ib);const T=S===!0?Math.PI:1;for(let dt=0,At=g.length;dt<At;dt++){const q=g[dt],nt=q.color,I=q.intensity,it=q.distance,$=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)M+=nt.r*I*T,x+=nt.g*I*T,b+=nt.b*I*T;else if(q.isLightProbe){for(let lt=0;lt<9;lt++)l.probe[lt].addScaledVector(q.sh.coefficients[lt],I);G++}else if(q.isDirectionalLight){const lt=i.get(q);if(lt.color.copy(q.color).multiplyScalar(q.intensity*T),q.castShadow){const w=q.shadow,j=r.get(q);j.shadowBias=w.bias,j.shadowNormalBias=w.normalBias,j.shadowRadius=w.radius,j.shadowMapSize=w.mapSize,l.directionalShadow[R]=j,l.directionalShadowMap[R]=$,l.directionalShadowMatrix[R]=q.shadow.matrix,B++}l.directional[R]=lt,R++}else if(q.isSpotLight){const lt=i.get(q);lt.position.setFromMatrixPosition(q.matrixWorld),lt.color.copy(nt).multiplyScalar(I*T),lt.distance=it,lt.coneCos=Math.cos(q.angle),lt.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),lt.decay=q.decay,l.spot[_]=lt;const w=q.shadow;if(q.map&&(l.spotLightMap[F]=q.map,F++,w.updateMatrices(q),q.castShadow&&mt++),l.spotLightMatrix[_]=w.matrix,q.castShadow){const j=r.get(q);j.shadowBias=w.bias,j.shadowNormalBias=w.normalBias,j.shadowRadius=w.radius,j.shadowMapSize=w.mapSize,l.spotShadow[_]=j,l.spotShadowMap[_]=$,H++}_++}else if(q.isRectAreaLight){const lt=i.get(q);lt.color.copy(nt).multiplyScalar(I),lt.halfWidth.set(q.width*.5,0,0),lt.halfHeight.set(0,q.height*.5,0),l.rectArea[O]=lt,O++}else if(q.isPointLight){const lt=i.get(q);if(lt.color.copy(q.color).multiplyScalar(q.intensity*T),lt.distance=q.distance,lt.decay=q.decay,q.castShadow){const w=q.shadow,j=r.get(q);j.shadowBias=w.bias,j.shadowNormalBias=w.normalBias,j.shadowRadius=w.radius,j.shadowMapSize=w.mapSize,j.shadowCameraNear=w.camera.near,j.shadowCameraFar=w.camera.far,l.pointShadow[v]=j,l.pointShadowMap[v]=$,l.pointShadowMatrix[v]=q.shadow.matrix,V++}l.point[v]=lt,v++}else if(q.isHemisphereLight){const lt=i.get(q);lt.skyColor.copy(q.color).multiplyScalar(I*T),lt.groundColor.copy(q.groundColor).multiplyScalar(I*T),l.hemi[D]=lt,D++}}O>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ht.LTC_FLOAT_1,l.rectAreaLTC2=Ht.LTC_FLOAT_2):(l.rectAreaLTC1=Ht.LTC_HALF_1,l.rectAreaLTC2=Ht.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ht.LTC_FLOAT_1,l.rectAreaLTC2=Ht.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ht.LTC_HALF_1,l.rectAreaLTC2=Ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=M,l.ambient[1]=x,l.ambient[2]=b;const N=l.hash;(N.directionalLength!==R||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==O||N.hemiLength!==D||N.numDirectionalShadows!==B||N.numPointShadows!==V||N.numSpotShadows!==H||N.numSpotMaps!==F||N.numLightProbes!==G)&&(l.directional.length=R,l.spot.length=_,l.rectArea.length=O,l.point.length=v,l.hemi.length=D,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=V,l.pointShadowMap.length=V,l.spotShadow.length=H,l.spotShadowMap.length=H,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=V,l.spotLightMatrix.length=H+F-mt,l.spotLightMap.length=F,l.numSpotLightShadowsWithMaps=mt,l.numLightProbes=G,N.directionalLength=R,N.pointLength=v,N.spotLength=_,N.rectAreaLength=O,N.hemiLength=D,N.numDirectionalShadows=B,N.numPointShadows=V,N.numSpotShadows=H,N.numSpotMaps=F,N.numLightProbes=G,l.version=Fb++)}function m(g,S){let M=0,x=0,b=0,R=0,v=0;const _=S.matrixWorldInverse;for(let O=0,D=g.length;O<D;O++){const B=g[O];if(B.isDirectionalLight){const V=l.directional[M];V.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),V.direction.sub(u),V.direction.transformDirection(_),M++}else if(B.isSpotLight){const V=l.spot[b];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),V.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),V.direction.sub(u),V.direction.transformDirection(_),b++}else if(B.isRectAreaLight){const V=l.rectArea[R];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),h.identity(),d.copy(B.matrixWorld),d.premultiply(_),h.extractRotation(d),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),V.halfWidth.applyMatrix4(h),V.halfHeight.applyMatrix4(h),R++}else if(B.isPointLight){const V=l.point[x];V.position.setFromMatrixPosition(B.matrixWorld),V.position.applyMatrix4(_),x++}else if(B.isHemisphereLight){const V=l.hemi[v];V.direction.setFromMatrixPosition(B.matrixWorld),V.direction.transformDirection(_),v++}}}return{setup:p,setupView:m,state:l}}function L_(o,e){const i=new Hb(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(S){r.push(S)}function h(S){l.push(S)}function p(S){i.setup(r,S)}function m(S){i.setupView(r,S)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function Gb(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let p;return h===void 0?(p=new L_(o,e),i.set(u,[p])):d>=h.length?(p=new L_(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class Vb extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wb=`void main() {
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
}`;function qb(o,e,i){let r=new Nh;const l=new de,u=new de,d=new Ze,h=new Vb({depthPacking:Ry}),p=new kb,m={},g=i.maxTextureSize,S={[Va]:Vn,[Vn]:Va,[Li]:Li},M=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),x=M.clone();x.defines.HORIZONTAL_PASS=1;const b=new Oi;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $n(b,M),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let _=this.type;this.render=function(H,F,mt){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||H.length===0)return;const G=o.getRenderTarget(),T=o.getActiveCubeFace(),N=o.getActiveMipmapLevel(),dt=o.state;dt.setBlending(Fa),dt.buffers.color.setClear(1,1,1,1),dt.buffers.depth.setTest(!0),dt.setScissorTest(!1);const At=_!==ea&&this.type===ea,q=_===ea&&this.type!==ea;for(let nt=0,I=H.length;nt<I;nt++){const it=H[nt],$=it.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const lt=$.getFrameExtents();if(l.multiply(lt),u.copy($.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/lt.x),l.x=u.x*lt.x,$.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/lt.y),l.y=u.y*lt.y,$.mapSize.y=u.y)),$.map===null||At===!0||q===!0){const j=this.type!==ea?{minFilter:Bn,magFilter:Bn}:{};$.map!==null&&$.map.dispose(),$.map=new Mr(l.x,l.y,j),$.map.texture.name=it.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const w=$.getViewportCount();for(let j=0;j<w;j++){const ht=$.getViewport(j);d.set(u.x*ht.x,u.y*ht.y,u.x*ht.z,u.y*ht.w),dt.viewport(d),$.updateMatrices(it,j),r=$.getFrustum(),B(F,mt,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===ea&&O($,mt),$.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(G,T,N)};function O(H,F){const mt=e.update(R);M.defines.VSM_SAMPLES!==H.blurSamples&&(M.defines.VSM_SAMPLES=H.blurSamples,x.defines.VSM_SAMPLES=H.blurSamples,M.needsUpdate=!0,x.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Mr(l.x,l.y)),M.uniforms.shadow_pass.value=H.map.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(F,null,mt,M,R,null),x.uniforms.shadow_pass.value=H.mapPass.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(F,null,mt,x,R,null)}function D(H,F,mt,G){let T=null;const N=mt.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(N!==void 0)T=N;else if(T=mt.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const dt=T.uuid,At=F.uuid;let q=m[dt];q===void 0&&(q={},m[dt]=q);let nt=q[At];nt===void 0&&(nt=T.clone(),q[At]=nt,F.addEventListener("dispose",V)),T=nt}if(T.visible=F.visible,T.wireframe=F.wireframe,G===ea?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:S[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,mt.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const dt=o.properties.get(T);dt.light=mt}return T}function B(H,F,mt,G,T){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&T===ea)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,H.matrixWorld);const At=e.update(H),q=H.material;if(Array.isArray(q)){const nt=At.groups;for(let I=0,it=nt.length;I<it;I++){const $=nt[I],lt=q[$.materialIndex];if(lt&&lt.visible){const w=D(H,lt,G,T);H.onBeforeShadow(o,H,F,mt,At,w,$),o.renderBufferDirect(mt,null,At,w,H,$),H.onAfterShadow(o,H,F,mt,At,w,$)}}}else if(q.visible){const nt=D(H,q,G,T);H.onBeforeShadow(o,H,F,mt,At,nt,null),o.renderBufferDirect(mt,null,At,nt,H,null),H.onAfterShadow(o,H,F,mt,At,nt,null)}}const dt=H.children;for(let At=0,q=dt.length;At<q;At++)B(dt[At],F,mt,G,T)}function V(H){H.target.removeEventListener("dispose",V);for(const mt in m){const G=m[mt],T=H.target.uuid;T in G&&(G[T].dispose(),delete G[T])}}}function Yb(o,e,i){const r=i.isWebGL2;function l(){let U=!1;const Lt=new Ze;let xt=null;const Kt=new Ze(0,0,0,0);return{setMask:function(st){xt!==st&&!U&&(o.colorMask(st,st,st,st),xt=st)},setLocked:function(st){U=st},setClear:function(st,Dt,Et,zt,Pt){Pt===!0&&(st*=zt,Dt*=zt,Et*=zt),Lt.set(st,Dt,Et,zt),Kt.equals(Lt)===!1&&(o.clearColor(st,Dt,Et,zt),Kt.copy(Lt))},reset:function(){U=!1,xt=null,Kt.set(-1,0,0,0)}}}function u(){let U=!1,Lt=null,xt=null,Kt=null;return{setTest:function(st){st?yt(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(st){Lt!==st&&!U&&(o.depthMask(st),Lt=st)},setFunc:function(st){if(xt!==st){switch(st){case iy:o.depthFunc(o.NEVER);break;case ay:o.depthFunc(o.ALWAYS);break;case ry:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case sy:o.depthFunc(o.EQUAL);break;case oy:o.depthFunc(o.GEQUAL);break;case ly:o.depthFunc(o.GREATER);break;case cy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=st}},setLocked:function(st){U=st},setClear:function(st){Kt!==st&&(o.clearDepth(st),Kt=st)},reset:function(){U=!1,Lt=null,xt=null,Kt=null}}}function d(){let U=!1,Lt=null,xt=null,Kt=null,st=null,Dt=null,Et=null,zt=null,Pt=null;return{setTest:function(bt){U||(bt?yt(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(bt){Lt!==bt&&!U&&(o.stencilMask(bt),Lt=bt)},setFunc:function(bt,Jt,le){(xt!==bt||Kt!==Jt||st!==le)&&(o.stencilFunc(bt,Jt,le),xt=bt,Kt=Jt,st=le)},setOp:function(bt,Jt,le){(Dt!==bt||Et!==Jt||zt!==le)&&(o.stencilOp(bt,Jt,le),Dt=bt,Et=Jt,zt=le)},setLocked:function(bt){U=bt},setClear:function(bt){Pt!==bt&&(o.clearStencil(bt),Pt=bt)},reset:function(){U=!1,Lt=null,xt=null,Kt=null,st=null,Dt=null,Et=null,zt=null,Pt=null}}}const h=new l,p=new u,m=new d,g=new WeakMap,S=new WeakMap;let M={},x={},b=new WeakMap,R=[],v=null,_=!1,O=null,D=null,B=null,V=null,H=null,F=null,mt=null,G=new Ce(0,0,0),T=0,N=!1,dt=null,At=null,q=null,nt=null,I=null;const it=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,lt=0;const w=o.getParameter(o.VERSION);w.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(w)[1]),$=lt>=1):w.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),$=lt>=2);let j=null,ht={};const Rt=o.getParameter(o.SCISSOR_BOX),k=o.getParameter(o.VIEWPORT),ft=new Ze().fromArray(Rt),Tt=new Ze().fromArray(k);function Zt(U,Lt,xt,Kt){const st=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(U,Dt),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Et=0;Et<xt;Et++)r&&(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)?o.texImage3D(Lt,0,o.RGBA,1,1,Kt,0,o.RGBA,o.UNSIGNED_BYTE,st):o.texImage2D(Lt+Et,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,st);return Dt}const gt={};gt[o.TEXTURE_2D]=Zt(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=Zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(gt[o.TEXTURE_2D_ARRAY]=Zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=Zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),yt(o.DEPTH_TEST),p.setFunc(mc),Ft(!1),L(fg),yt(o.CULL_FACE),Bt(Fa);function yt(U){M[U]!==!0&&(o.enable(U),M[U]=!0)}function Ot(U){M[U]!==!1&&(o.disable(U),M[U]=!1)}function Wt(U,Lt){return x[U]!==Lt?(o.bindFramebuffer(U,Lt),x[U]=Lt,r&&(U===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Lt),U===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Lt)),!0):!1}function K(U,Lt){let xt=R,Kt=!1;if(U)if(xt=b.get(Lt),xt===void 0&&(xt=[],b.set(Lt,xt)),U.isWebGLMultipleRenderTargets){const st=U.texture;if(xt.length!==st.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Et=st.length;Dt<Et;Dt++)xt[Dt]=o.COLOR_ATTACHMENT0+Dt;xt.length=st.length,Kt=!0}}else xt[0]!==o.COLOR_ATTACHMENT0&&(xt[0]=o.COLOR_ATTACHMENT0,Kt=!0);else xt[0]!==o.BACK&&(xt[0]=o.BACK,Kt=!0);Kt&&(i.isWebGL2?o.drawBuffers(xt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Se(U){return v!==U?(o.useProgram(U),v=U,!0):!1}const Ct={[mr]:o.FUNC_ADD,[VS]:o.FUNC_SUBTRACT,[kS]:o.FUNC_REVERSE_SUBTRACT};if(r)Ct[pg]=o.MIN,Ct[mg]=o.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ct[pg]=U.MIN_EXT,Ct[mg]=U.MAX_EXT)}const ne={[WS]:o.ZERO,[XS]:o.ONE,[qS]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[JS]:o.SRC_ALPHA_SATURATE,[KS]:o.DST_COLOR,[jS]:o.DST_ALPHA,[YS]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[QS]:o.ONE_MINUS_DST_COLOR,[ZS]:o.ONE_MINUS_DST_ALPHA,[$S]:o.CONSTANT_COLOR,[ty]:o.ONE_MINUS_CONSTANT_COLOR,[ey]:o.CONSTANT_ALPHA,[ny]:o.ONE_MINUS_CONSTANT_ALPHA};function Bt(U,Lt,xt,Kt,st,Dt,Et,zt,Pt,bt){if(U===Fa){_===!0&&(Ot(o.BLEND),_=!1);return}if(_===!1&&(yt(o.BLEND),_=!0),U!==GS){if(U!==O||bt!==N){if((D!==mr||H!==mr)&&(o.blendEquation(o.FUNC_ADD),D=mr,H=mr),bt)switch(U){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.ONE,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}B=null,V=null,F=null,mt=null,G.set(0,0,0),T=0,O=U,N=bt}return}st=st||Lt,Dt=Dt||xt,Et=Et||Kt,(Lt!==D||st!==H)&&(o.blendEquationSeparate(Ct[Lt],Ct[st]),D=Lt,H=st),(xt!==B||Kt!==V||Dt!==F||Et!==mt)&&(o.blendFuncSeparate(ne[xt],ne[Kt],ne[Dt],ne[Et]),B=xt,V=Kt,F=Dt,mt=Et),(zt.equals(G)===!1||Pt!==T)&&(o.blendColor(zt.r,zt.g,zt.b,Pt),G.copy(zt),T=Pt),O=U,N=!1}function Xt(U,Lt){U.side===Li?Ot(o.CULL_FACE):yt(o.CULL_FACE);let xt=U.side===Vn;Lt&&(xt=!xt),Ft(xt),U.blending===Es&&U.transparent===!1?Bt(Fa):Bt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),h.setMask(U.colorWrite);const Kt=U.stencilWrite;m.setTest(Kt),Kt&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),J(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(U){dt!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),dt=U)}function L(U){U!==IS?(yt(o.CULL_FACE),U!==At&&(U===fg?o.cullFace(o.BACK):U===HS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),At=U}function E(U){U!==q&&($&&o.lineWidth(U),q=U)}function J(U,Lt,xt){U?(yt(o.POLYGON_OFFSET_FILL),(nt!==Lt||I!==xt)&&(o.polygonOffset(Lt,xt),nt=Lt,I=xt)):Ot(o.POLYGON_OFFSET_FILL)}function ct(U){U?yt(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function vt(U){U===void 0&&(U=o.TEXTURE0+it-1),j!==U&&(o.activeTexture(U),j=U)}function ut(U,Lt,xt){xt===void 0&&(j===null?xt=o.TEXTURE0+it-1:xt=j);let Kt=ht[xt];Kt===void 0&&(Kt={type:void 0,texture:void 0},ht[xt]=Kt),(Kt.type!==U||Kt.texture!==Lt)&&(j!==xt&&(o.activeTexture(xt),j=xt),o.bindTexture(U,Lt||gt[U]),Kt.type=U,Kt.texture=Lt)}function Vt(){const U=ht[j];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ut(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(U){ft.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),ft.copy(U))}function P(U){Tt.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),Tt.copy(U))}function Nt(U,Lt){let xt=S.get(Lt);xt===void 0&&(xt=new WeakMap,S.set(Lt,xt));let Kt=xt.get(U);Kt===void 0&&(Kt=o.getUniformBlockIndex(Lt,U.name),xt.set(U,Kt))}function Gt(U,Lt){const Kt=S.get(Lt).get(U);g.get(Lt)!==Kt&&(o.uniformBlockBinding(Lt,Kt,U.__bindingPointIndex),g.set(Lt,Kt))}function qt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),M={},j=null,ht={},x={},b=new WeakMap,R=[],v=null,_=!1,O=null,D=null,B=null,V=null,H=null,F=null,mt=null,G=new Ce(0,0,0),T=0,N=!1,dt=null,At=null,q=null,nt=null,I=null,ft.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:yt,disable:Ot,bindFramebuffer:Wt,drawBuffers:K,useProgram:Se,setBlending:Bt,setMaterial:Xt,setFlipSided:Ft,setCullFace:L,setLineWidth:E,setPolygonOffset:J,setScissorTest:ct,activeTexture:vt,bindTexture:ut,unbindTexture:Vt,compressedTexImage2D:Ut,compressedTexImage3D:Yt,texImage2D:jt,texImage3D:kt,updateUBOMapping:Nt,uniformBlockBinding:Gt,texStorage2D:pe,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Re,scissor:ce,viewport:P,reset:qt}}function jb(o,e,i,r,l,u,d){const h=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let S;const M=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return x?new OffscreenCanvas(L,E):Mc("canvas")}function R(L,E,J,ct){let vt=1;if((L.width>ct||L.height>ct)&&(vt=ct/Math.max(L.width,L.height)),vt<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ut=E?yc:Math.floor,Vt=ut(vt*L.width),Ut=ut(vt*L.height);S===void 0&&(S=b(Vt,Ut));const Yt=J?b(Vt,Ut):S;return Yt.width=Vt,Yt.height=Ut,Yt.getContext("2d").drawImage(L,0,0,Vt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Vt+"x"+Ut+")."),Yt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Eh(L.width)&&Eh(L.height)}function _(L){return h?!1:L.wrapS!==xi||L.wrapT!==xi||L.minFilter!==Bn&&L.minFilter!==Gn}function O(L,E){return L.generateMipmaps&&E&&L.minFilter!==Bn&&L.minFilter!==Gn}function D(L){o.generateMipmap(L)}function B(L,E,J,ct,vt=!1){if(h===!1)return E;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===o.RED&&(J===o.FLOAT&&(ut=o.R32F),J===o.HALF_FLOAT&&(ut=o.R16F),J===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.R8UI),J===o.UNSIGNED_SHORT&&(ut=o.R16UI),J===o.UNSIGNED_INT&&(ut=o.R32UI),J===o.BYTE&&(ut=o.R8I),J===o.SHORT&&(ut=o.R16I),J===o.INT&&(ut=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ut=o.RG32F),J===o.HALF_FLOAT&&(ut=o.RG16F),J===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RGBA){const Vt=vt?gc:Ie.getTransfer(ct);J===o.FLOAT&&(ut=o.RGBA32F),J===o.HALF_FLOAT&&(ut=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ut=Vt===Ye?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function V(L,E,J){return O(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){return L===Bn||L===gg||L===Do?o.NEAREST:o.LINEAR}function F(L){const E=L.target;E.removeEventListener("dispose",F),G(E),E.isVideoTexture&&g.delete(E)}function mt(L){const E=L.target;E.removeEventListener("dispose",mt),N(E)}function G(L){const E=r.get(L);if(E.__webglInit===void 0)return;const J=L.source,ct=M.get(J);if(ct){const vt=ct[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(L),Object.keys(ct).length===0&&M.delete(J)}r.remove(L)}function T(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const J=L.source,ct=M.get(J);delete ct[E.__cacheKey],d.memory.textures--}function N(L){const E=L.texture,J=r.get(L),ct=r.get(E);if(ct.__webglTexture!==void 0&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(J.__webglFramebuffer[vt]))for(let ut=0;ut<J.__webglFramebuffer[vt].length;ut++)o.deleteFramebuffer(J.__webglFramebuffer[vt][ut]);else o.deleteFramebuffer(J.__webglFramebuffer[vt]);J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer[vt])}else{if(Array.isArray(J.__webglFramebuffer))for(let vt=0;vt<J.__webglFramebuffer.length;vt++)o.deleteFramebuffer(J.__webglFramebuffer[vt]);else o.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&o.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let vt=0;vt<J.__webglColorRenderbuffer.length;vt++)J.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(J.__webglColorRenderbuffer[vt]);J.__webglDepthRenderbuffer&&o.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let vt=0,ut=E.length;vt<ut;vt++){const Vt=r.get(E[vt]);Vt.__webglTexture&&(o.deleteTexture(Vt.__webglTexture),d.memory.textures--),r.remove(E[vt])}r.remove(E),r.remove(L)}let dt=0;function At(){dt=0}function q(){const L=dt;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),dt+=1,L}function nt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function I(L,E){const J=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(J,L,E);return}}i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function it(L,E){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ft(J,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function $(L,E){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ft(J,L,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function lt(L,E){const J=r.get(L);if(L.version>0&&J.__version!==L.version){Tt(J,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const w={[yh]:o.REPEAT,[xi]:o.CLAMP_TO_EDGE,[Mh]:o.MIRRORED_REPEAT},j={[Bn]:o.NEAREST,[gg]:o.NEAREST_MIPMAP_NEAREST,[Do]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},ht={[Cy]:o.NEVER,[Py]:o.ALWAYS,[Dy]:o.LESS,[n0]:o.LEQUAL,[Ly]:o.EQUAL,[Oy]:o.GEQUAL,[Uy]:o.GREATER,[Ny]:o.NOTEQUAL};function Rt(L,E,J){if(E.type===na&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===Bf||E.magFilter===Do||E.magFilter===_r||E.minFilter===Gn||E.minFilter===Bf||E.minFilter===Do||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),J?(o.texParameteri(L,o.TEXTURE_WRAP_S,w[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,w[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,w[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,j[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,j[E.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==xi||E.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,H(E.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,H(E.minFilter)),E.minFilter!==Bn&&E.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,ht[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ct=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Bn||E.minFilter!==Do&&E.minFilter!==_r||E.type===na&&e.has("OES_texture_float_linear")===!1||h===!1&&E.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(o.texParameterf(L,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function k(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const ct=E.source;let vt=M.get(ct);vt===void 0&&(vt={},M.set(ct,vt));const ut=nt(E);if(ut!==L.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),vt[ut].usedTimes++;const Vt=vt[L.__cacheKey];Vt!==void 0&&(vt[L.__cacheKey].usedTimes--,Vt.usedTimes===0&&T(E)),L.__cacheKey=ut,L.__webglTexture=vt[ut].texture}return J}function ft(L,E,J){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const vt=k(L,E),ut=E.source;i.bindTexture(ct,L.__webglTexture,o.TEXTURE0+J);const Vt=r.get(ut);if(ut.version!==Vt.__version||vt===!0){i.activeTexture(o.TEXTURE0+J);const Ut=Ie.getPrimaries(Ie.workingColorSpace),Yt=E.colorSpace===di?null:Ie.getPrimaries(E.colorSpace),ie=E.colorSpace===di||Ut===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const se=_(E)&&v(E.image)===!1;let Mt=R(E.image,se,!1,l.maxTextureSize);Mt=Ft(E,Mt);const Re=v(Mt)||h,pe=u.convert(E.format,E.colorSpace);let oe=u.convert(E.type),jt=B(E.internalFormat,pe,oe,E.colorSpace,E.isVideoTexture);Rt(ct,E,Re);let kt;const ce=E.mipmaps,P=h&&E.isVideoTexture!==!0&&jt!==$_,Nt=Vt.__version===void 0||vt===!0,Gt=ut.dataReady,qt=V(E,Mt,Re);if(E.isDepthTexture)jt=o.DEPTH_COMPONENT,h?E.type===na?jt=o.DEPTH_COMPONENT32F:E.type===Ba?jt=o.DEPTH_COMPONENT24:E.type===vr?jt=o.DEPTH24_STENCIL8:jt=o.DEPTH_COMPONENT16:E.type===na&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Sr&&jt===o.DEPTH_COMPONENT&&E.type!==Ch&&E.type!==Ba&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ba,oe=u.convert(E.type)),E.format===ws&&jt===o.DEPTH_COMPONENT&&(jt=o.DEPTH_STENCIL,E.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vr,oe=u.convert(E.type))),Nt&&(P?i.texStorage2D(o.TEXTURE_2D,1,jt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Mt.width,Mt.height,0,pe,oe,null));else if(E.isDataTexture)if(ce.length>0&&Re){P&&Nt&&i.texStorage2D(o.TEXTURE_2D,qt,jt,ce[0].width,ce[0].height);for(let U=0,Lt=ce.length;U<Lt;U++)kt=ce[U],P?Gt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,pe,oe,kt.data):i.texImage2D(o.TEXTURE_2D,U,jt,kt.width,kt.height,0,pe,oe,kt.data);E.generateMipmaps=!1}else P?(Nt&&i.texStorage2D(o.TEXTURE_2D,qt,jt,Mt.width,Mt.height),Gt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,pe,oe,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,Mt.width,Mt.height,0,pe,oe,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){P&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,jt,ce[0].width,ce[0].height,Mt.depth);for(let U=0,Lt=ce.length;U<Lt;U++)kt=ce[U],E.format!==Ei?pe!==null?P?Gt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,kt.width,kt.height,Mt.depth,pe,kt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,U,jt,kt.width,kt.height,Mt.depth,0,kt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Gt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,U,0,0,0,kt.width,kt.height,Mt.depth,pe,oe,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,U,jt,kt.width,kt.height,Mt.depth,0,pe,oe,kt.data)}else{P&&Nt&&i.texStorage2D(o.TEXTURE_2D,qt,jt,ce[0].width,ce[0].height);for(let U=0,Lt=ce.length;U<Lt;U++)kt=ce[U],E.format!==Ei?pe!==null?P?Gt&&i.compressedTexSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,pe,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,U,jt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Gt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,kt.width,kt.height,pe,oe,kt.data):i.texImage2D(o.TEXTURE_2D,U,jt,kt.width,kt.height,0,pe,oe,kt.data)}else if(E.isDataArrayTexture)P?(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,jt,Mt.width,Mt.height,Mt.depth),Gt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,pe,oe,Mt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Mt.width,Mt.height,Mt.depth,0,pe,oe,Mt.data);else if(E.isData3DTexture)P?(Nt&&i.texStorage3D(o.TEXTURE_3D,qt,jt,Mt.width,Mt.height,Mt.depth),Gt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,pe,oe,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Mt.width,Mt.height,Mt.depth,0,pe,oe,Mt.data);else if(E.isFramebufferTexture){if(Nt)if(P)i.texStorage2D(o.TEXTURE_2D,qt,jt,Mt.width,Mt.height);else{let U=Mt.width,Lt=Mt.height;for(let xt=0;xt<qt;xt++)i.texImage2D(o.TEXTURE_2D,xt,jt,U,Lt,0,pe,oe,null),U>>=1,Lt>>=1}}else if(ce.length>0&&Re){P&&Nt&&i.texStorage2D(o.TEXTURE_2D,qt,jt,ce[0].width,ce[0].height);for(let U=0,Lt=ce.length;U<Lt;U++)kt=ce[U],P?Gt&&i.texSubImage2D(o.TEXTURE_2D,U,0,0,pe,oe,kt):i.texImage2D(o.TEXTURE_2D,U,jt,pe,oe,kt);E.generateMipmaps=!1}else P?(Nt&&i.texStorage2D(o.TEXTURE_2D,qt,jt,Mt.width,Mt.height),Gt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,pe,oe,Mt)):i.texImage2D(o.TEXTURE_2D,0,jt,pe,oe,Mt);O(E,Re)&&D(ct),Vt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Tt(L,E,J){if(E.image.length!==6)return;const ct=k(L,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+J);const ut=r.get(vt);if(vt.version!==ut.__version||ct===!0){i.activeTexture(o.TEXTURE0+J);const Vt=Ie.getPrimaries(Ie.workingColorSpace),Ut=E.colorSpace===di?null:Ie.getPrimaries(E.colorSpace),Yt=E.colorSpace===di||Vt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const ie=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let U=0;U<6;U++)!ie&&!se?Mt[U]=R(E.image[U],!1,!0,l.maxCubemapSize):Mt[U]=se?E.image[U].image:E.image[U],Mt[U]=Ft(E,Mt[U]);const Re=Mt[0],pe=v(Re)||h,oe=u.convert(E.format,E.colorSpace),jt=u.convert(E.type),kt=B(E.internalFormat,oe,jt,E.colorSpace),ce=h&&E.isVideoTexture!==!0,P=ut.__version===void 0||ct===!0,Nt=vt.dataReady;let Gt=V(E,Re,pe);Rt(o.TEXTURE_CUBE_MAP,E,pe);let qt;if(ie){ce&&P&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,kt,Re.width,Re.height);for(let U=0;U<6;U++){qt=Mt[U].mipmaps;for(let Lt=0;Lt<qt.length;Lt++){const xt=qt[Lt];E.format!==Ei?oe!==null?ce?Nt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt,0,0,xt.width,xt.height,oe,xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt,kt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt,0,0,xt.width,xt.height,oe,jt,xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt,kt,xt.width,xt.height,0,oe,jt,xt.data)}}}else{qt=E.mipmaps,ce&&P&&(qt.length>0&&Gt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,kt,Mt[0].width,Mt[0].height));for(let U=0;U<6;U++)if(se){ce?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Mt[U].width,Mt[U].height,oe,jt,Mt[U].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,kt,Mt[U].width,Mt[U].height,0,oe,jt,Mt[U].data);for(let Lt=0;Lt<qt.length;Lt++){const Kt=qt[Lt].image[U].image;ce?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt+1,0,0,Kt.width,Kt.height,oe,jt,Kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt+1,kt,Kt.width,Kt.height,0,oe,jt,Kt.data)}}else{ce?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,oe,jt,Mt[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,kt,oe,jt,Mt[U]);for(let Lt=0;Lt<qt.length;Lt++){const xt=qt[Lt];ce?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt+1,0,0,oe,jt,xt.image[U]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt+1,kt,oe,jt,xt.image[U])}}}O(E,pe)&&D(o.TEXTURE_CUBE_MAP),ut.__version=vt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Zt(L,E,J,ct,vt,ut){const Vt=u.convert(J.format,J.colorSpace),Ut=u.convert(J.type),Yt=B(J.internalFormat,Vt,Ut,J.colorSpace);if(!r.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>ut),Mt=Math.max(1,E.height>>ut);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ut,Yt,se,Mt,E.depth,0,Vt,Ut,null):i.texImage2D(vt,ut,Yt,se,Mt,0,Vt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Bt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,vt,r.get(J).__webglTexture,0,ne(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,vt,r.get(J).__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function gt(L,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let ct=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(J||Bt(E)){const vt=E.depthTexture;vt&&vt.isDepthTexture&&(vt.type===na?ct=o.DEPTH_COMPONENT32F:vt.type===Ba&&(ct=o.DEPTH_COMPONENT24));const ut=ne(E);Bt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,ct,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,ct,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){const ct=ne(E);J&&Bt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ct,o.DEPTH24_STENCIL8,E.width,E.height):Bt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ct,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const ct=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let vt=0;vt<ct.length;vt++){const ut=ct[vt],Vt=u.convert(ut.format,ut.colorSpace),Ut=u.convert(ut.type),Yt=B(ut.internalFormat,Vt,Ut,ut.colorSpace),ie=ne(E);J&&Bt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Yt,E.width,E.height):Bt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ie,Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function yt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const ct=r.get(E.depthTexture).__webglTexture,vt=ne(E);if(E.depthTexture.format===Sr)Bt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ct,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ct,0);else if(E.depthTexture.format===ws)Bt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ct,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Ot(L){const E=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");yt(E.__webglFramebuffer,L)}else if(J){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]=o.createRenderbuffer(),gt(E.__webglDepthbuffer[ct],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),gt(E.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(L,E,J){const ct=r.get(L);E!==void 0&&Zt(ct.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Ot(L)}function K(L){const E=L.texture,J=r.get(L),ct=r.get(E);L.addEventListener("dispose",mt),L.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,d.memory.textures++);const vt=L.isWebGLCubeRenderTarget===!0,ut=L.isWebGLMultipleRenderTargets===!0,Vt=v(L)||h;if(vt){J.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(h&&E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Ut]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)J.__webglFramebuffer[Ut][Yt]=o.createFramebuffer()}else J.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(h&&E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)J.__webglFramebuffer[Ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(ut)if(l.drawBuffers){const Ut=L.texture;for(let Yt=0,ie=Ut.length;Yt<ie;Yt++){const se=r.get(Ut[Yt]);se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&L.samples>0&&Bt(L)===!1){const Ut=ut?E:[E];J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Yt=0;Yt<Ut.length;Yt++){const ie=Ut[Yt];J.__webglColorRenderbuffer[Yt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Yt]);const se=u.convert(ie.format,ie.colorSpace),Mt=u.convert(ie.type),Re=B(ie.internalFormat,se,Mt,ie.colorSpace,L.isXRRenderTarget===!0),pe=ne(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Re,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,J.__webglColorRenderbuffer[Yt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),gt(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),Rt(o.TEXTURE_CUBE_MAP,E,Vt);for(let Ut=0;Ut<6;Ut++)if(h&&E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Zt(J.__webglFramebuffer[Ut][Yt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Yt);else Zt(J.__webglFramebuffer[Ut],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);O(E,Vt)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ut){const Ut=L.texture;for(let Yt=0,ie=Ut.length;Yt<ie;Yt++){const se=Ut[Yt],Mt=r.get(se);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),Rt(o.TEXTURE_2D,se,Vt),Zt(J.__webglFramebuffer,L,se,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,0),O(se,Vt)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(h?Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Ut,ct.__webglTexture),Rt(Ut,E,Vt),h&&E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Zt(J.__webglFramebuffer[Yt],L,E,o.COLOR_ATTACHMENT0,Ut,Yt);else Zt(J.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ut,0);O(E,Vt)&&D(Ut),i.unbindTexture()}L.depthBuffer&&Ot(L)}function Se(L){const E=v(L)||h,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ct=0,vt=J.length;ct<vt;ct++){const ut=J[ct];if(O(ut,E)){const Vt=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ut=r.get(ut).__webglTexture;i.bindTexture(Vt,Ut),D(Vt),i.unbindTexture()}}}function Ct(L){if(h&&L.samples>0&&Bt(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,ct=L.height;let vt=o.COLOR_BUFFER_BIT;const ut=[],Vt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=r.get(L),Yt=L.isWebGLMultipleRenderTargets===!0;if(Yt)for(let ie=0;ie<E.length;ie++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){ut.push(o.COLOR_ATTACHMENT0+ie),L.depthBuffer&&ut.push(Vt);const se=Ut.__ignoreDepthValues!==void 0?Ut.__ignoreDepthValues:!1;if(se===!1&&(L.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Yt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[ie]),se===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Vt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Vt])),Yt){const Mt=r.get(E[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,J,ct,0,0,J,ct,vt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Yt)for(let ie=0;ie<E.length;ie++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[ie]);const se=r.get(E[ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}}function ne(L){return Math.min(l.maxSamples,L.samples)}function Bt(L){const E=r.get(L);return h&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xt(L){const E=d.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Ft(L,E){const J=L.colorSpace,ct=L.format,vt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===xh||J!==aa&&J!==di&&(Ie.getTransfer(J)===Ye?h===!1?e.has("EXT_sRGB")===!0&&ct===Ei?(L.format=xh,L.minFilter=Gn,L.generateMipmaps=!1):E=a0.sRGBToLinear(E):(ct!==Ei||vt!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}this.allocateTextureUnit=q,this.resetTextureUnits=At,this.setTexture2D=I,this.setTexture2DArray=it,this.setTexture3D=$,this.setTextureCube=lt,this.rebindTextures=Wt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=Bt}function Zb(o,e,i){const r=i.isWebGL2;function l(u,d=di){let h;const p=Ie.getTransfer(d);if(u===Ha)return o.UNSIGNED_BYTE;if(u===j_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Z_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===vy)return o.BYTE;if(u===Sy)return o.SHORT;if(u===Ch)return o.UNSIGNED_SHORT;if(u===Y_)return o.INT;if(u===Ba)return o.UNSIGNED_INT;if(u===na)return o.FLOAT;if(u===Fo)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===yy)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===My)return o.LUMINANCE;if(u===xy)return o.LUMINANCE_ALPHA;if(u===Sr)return o.DEPTH_COMPONENT;if(u===ws)return o.DEPTH_STENCIL;if(u===xh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===Ey)return o.RED;if(u===K_)return o.RED_INTEGER;if(u===Ty)return o.RG;if(u===Q_)return o.RG_INTEGER;if(u===J_)return o.RGBA_INTEGER;if(u===Ff||u===If||u===Hf||u===Gf)if(p===Ye)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Ff)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Ff)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===If)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Hf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Gf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===_g||u===vg||u===Sg||u===yg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===_g)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===vg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Sg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===yg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===$_)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Mg||u===xg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Mg)return p===Ye?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===xg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Eg||u===Tg||u===bg||u===Ag||u===Rg||u===wg||u===Cg||u===Dg||u===Lg||u===Ug||u===Ng||u===Og||u===Pg||u===zg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Eg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Tg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===bg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Ag)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Rg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===wg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Cg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Dg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Lg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ug)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Ng)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Og)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Pg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===zg)return p===Ye?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Vf||u===Bg||u===Fg)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Vf)return p===Ye?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Bg)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===Fg)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===by||u===Ig||u===Hg||u===Gg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Vf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===Ig)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Hg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Gg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===vr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Kb extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const v=i.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],M=g.position.distanceTo(S.position),x=.02,b=.005;m.inputState.pinching&&M>x+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&M<=x-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new xs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Jb=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new kn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new ra({extensions:{fragDepth:!0},vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new $n(new Rc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class eA extends Er{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,S=null,M=null,x=null,b=null;const R=new tA,v=i.getContextAttributes();let _=null,O=null;const D=[],B=[],V=new de;let H=null;const F=new Jn;F.layers.enable(1),F.viewport=new Ze;const mt=new Jn;mt.layers.enable(2),mt.viewport=new Ze;const G=[F,mt],T=new Kb;T.layers.enable(1),T.layers.enable(2);let N=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ft=D[k];return ft===void 0&&(ft=new fh,D[k]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(k){let ft=D[k];return ft===void 0&&(ft=new fh,D[k]=ft),ft.getGripSpace()},this.getHand=function(k){let ft=D[k];return ft===void 0&&(ft=new fh,D[k]=ft),ft.getHandSpace()};function At(k){const ft=B.indexOf(k.inputSource);if(ft===-1)return;const Tt=D[ft];Tt!==void 0&&(Tt.update(k.inputSource,k.frame,m||d),Tt.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){l.removeEventListener("select",At),l.removeEventListener("selectstart",At),l.removeEventListener("selectend",At),l.removeEventListener("squeeze",At),l.removeEventListener("squeezestart",At),l.removeEventListener("squeezeend",At),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",nt);for(let k=0;k<D.length;k++){const ft=B[k];ft!==null&&(B[k]=null,D[k].disconnect(ft))}N=null,dt=null,R.reset(),e.setRenderTarget(_),x=null,M=null,S=null,l=null,O=null,Rt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return M!==null?M:x},this.getBinding=function(){return S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",At),l.addEventListener("selectstart",At),l.addEventListener("selectend",At),l.addEventListener("squeeze",At),l.addEventListener("squeezestart",At),l.addEventListener("squeezeend",At),l.addEventListener("end",q),l.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(V),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ft={antialias:l.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Mr(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:Ha,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ft=null,Tt=null,Zt=null;v.depth&&(Zt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=v.stencil?ws:Sr,Tt=v.stencil?vr:Ba);const gt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:u};S=new XRWebGLBinding(l,i),M=S.createProjectionLayer(gt),l.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),O=new Mr(M.textureWidth,M.textureHeight,{format:Ei,type:Ha,depthTexture:new _0(M.textureWidth,M.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const yt=e.properties.get(O);yt.__ignoreDepthValues=M.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Rt.setContext(l),Rt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function nt(k){for(let ft=0;ft<k.removed.length;ft++){const Tt=k.removed[ft],Zt=B.indexOf(Tt);Zt>=0&&(B[Zt]=null,D[Zt].disconnect(Tt))}for(let ft=0;ft<k.added.length;ft++){const Tt=k.added[ft];let Zt=B.indexOf(Tt);if(Zt===-1){for(let yt=0;yt<D.length;yt++)if(yt>=B.length){B.push(Tt),Zt=yt;break}else if(B[yt]===null){B[yt]=Tt,Zt=yt;break}if(Zt===-1)break}const gt=D[Zt];gt&&gt.connect(Tt)}}const I=new X,it=new X;function $(k,ft,Tt){I.setFromMatrixPosition(ft.matrixWorld),it.setFromMatrixPosition(Tt.matrixWorld);const Zt=I.distanceTo(it),gt=ft.projectionMatrix.elements,yt=Tt.projectionMatrix.elements,Ot=gt[14]/(gt[10]-1),Wt=gt[14]/(gt[10]+1),K=(gt[9]+1)/gt[5],Se=(gt[9]-1)/gt[5],Ct=(gt[8]-1)/gt[0],ne=(yt[8]+1)/yt[0],Bt=Ot*Ct,Xt=Ot*ne,Ft=Zt/(-Ct+ne),L=Ft*-Ct;ft.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(L),k.translateZ(Ft),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const E=Ot+Ft,J=Wt+Ft,ct=Bt-L,vt=Xt+(Zt-L),ut=K*Wt/J*E,Vt=Se*Wt/J*E;k.projectionMatrix.makePerspective(ct,vt,ut,Vt,E,J),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function lt(k,ft){ft===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ft.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;R.texture!==null&&(k.near=R.depthNear,k.far=R.depthFar),T.near=mt.near=F.near=k.near,T.far=mt.far=F.far=k.far,(N!==T.near||dt!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,dt=T.far,F.near=N,F.far=dt,mt.near=N,mt.far=dt,F.updateProjectionMatrix(),mt.updateProjectionMatrix(),k.updateProjectionMatrix());const ft=k.parent,Tt=T.cameras;lt(T,ft);for(let Zt=0;Zt<Tt.length;Zt++)lt(Tt[Zt],ft);Tt.length===2?$(T,F,mt):T.projectionMatrix.copy(F.projectionMatrix),w(k,T,ft)};function w(k,ft,Tt){Tt===null?k.matrix.copy(ft.matrixWorld):(k.matrix.copy(Tt.matrixWorld),k.matrix.invert(),k.matrix.multiply(ft.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ft.projectionMatrix),k.projectionMatrixInverse.copy(ft.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Io*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(M===null&&x===null))return p},this.setFoveation=function(k){p=k,M!==null&&(M.fixedFoveation=k),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=k)},this.hasDepthSensing=function(){return R.texture!==null};let j=null;function ht(k,ft){if(g=ft.getViewerPose(m||d),b=ft,g!==null){const Tt=g.views;x!==null&&(e.setRenderTargetFramebuffer(O,x.framebuffer),e.setRenderTarget(O));let Zt=!1;Tt.length!==T.cameras.length&&(T.cameras.length=0,Zt=!0);for(let yt=0;yt<Tt.length;yt++){const Ot=Tt[yt];let Wt=null;if(x!==null)Wt=x.getViewport(Ot);else{const Se=S.getViewSubImage(M,Ot);Wt=Se.viewport,yt===0&&(e.setRenderTargetTextures(O,Se.colorTexture,M.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(O))}let K=G[yt];K===void 0&&(K=new Jn,K.layers.enable(yt),K.viewport=new Ze,G[yt]=K),K.matrix.fromArray(Ot.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ot.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),yt===0&&(T.matrix.copy(K.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Zt===!0&&T.cameras.push(K)}const gt=l.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const yt=S.getDepthInformation(Tt[0]);yt&&yt.isValid&&yt.texture&&R.init(e,yt,l.renderState)}}for(let Tt=0;Tt<D.length;Tt++){const Zt=B[Tt],gt=D[Tt];Zt!==null&&gt!==void 0&&gt.update(Zt,ft,m||d)}R.render(e,T),j&&j(k,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),b=null}const Rt=new m0;Rt.setAnimationLoop(ht),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function nA(o,e){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,h0(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,O,D,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),S(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),M(v,_),_.isMeshPhysicalMaterial&&x(v,_,B)):_.isMeshMatcapMaterial?(u(v,_),b(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),R(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&h(v,_)):_.isPointsMaterial?p(v,_,O,D):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Vn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Vn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const O=e.get(_).envMap;if(O&&(v.envMap.value=O,v.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const D=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*D,i(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function h(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,O,D){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*O,v.scale.value=D*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function M(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function x(v,_,O){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=O.texture,v.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const O=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(O.matrixWorld),v.nearDistance.value=O.shadow.camera.near,v.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(O,D){const B=D.program;r.uniformBlockBinding(O,B)}function m(O,D){let B=l[O.id];B===void 0&&(b(O),B=g(O),l[O.id]=B,O.addEventListener("dispose",v));const V=D.program;r.updateUBOMapping(O,V);const H=e.render.frame;u[O.id]!==H&&(M(O),u[O.id]=H)}function g(O){const D=S();O.__bindingPointIndex=D;const B=o.createBuffer(),V=O.__size,H=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,V,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,B),B}function S(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(O){const D=l[O.id],B=O.uniforms,V=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let H=0,F=B.length;H<F;H++){const mt=Array.isArray(B[H])?B[H]:[B[H]];for(let G=0,T=mt.length;G<T;G++){const N=mt[G];if(x(N,H,G,V)===!0){const dt=N.__offset,At=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let nt=0;nt<At.length;nt++){const I=At[nt],it=R(I);typeof I=="number"||typeof I=="boolean"?(N.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,dt+q,N.__data)):I.isMatrix3?(N.__data[0]=I.elements[0],N.__data[1]=I.elements[1],N.__data[2]=I.elements[2],N.__data[3]=0,N.__data[4]=I.elements[3],N.__data[5]=I.elements[4],N.__data[6]=I.elements[5],N.__data[7]=0,N.__data[8]=I.elements[6],N.__data[9]=I.elements[7],N.__data[10]=I.elements[8],N.__data[11]=0):(I.toArray(N.__data,q),q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,dt,N.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(O,D,B,V){const H=O.value,F=D+"_"+B;if(V[F]===void 0)return typeof H=="number"||typeof H=="boolean"?V[F]=H:V[F]=H.clone(),!0;{const mt=V[F];if(typeof H=="number"||typeof H=="boolean"){if(mt!==H)return V[F]=H,!0}else if(mt.equals(H)===!1)return mt.copy(H),!0}return!1}function b(O){const D=O.uniforms;let B=0;const V=16;for(let F=0,mt=D.length;F<mt;F++){const G=Array.isArray(D[F])?D[F]:[D[F]];for(let T=0,N=G.length;T<N;T++){const dt=G[T],At=Array.isArray(dt.value)?dt.value:[dt.value];for(let q=0,nt=At.length;q<nt;q++){const I=At[q],it=R(I),$=B%V;$!==0&&V-$<it.boundary&&(B+=V-$),dt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),dt.__offset=B,B+=it.storage}}}const H=B%V;return H>0&&(B+=V-H),O.__size=B,O.__cache={},this}function R(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function v(O){const D=O.target;D.removeEventListener("dispose",v);const B=d.indexOf(D.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:p,update:m,dispose:_}}class E0{constructor(e={}){const{canvas:i=Ky(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let M;r!==null?M=r.getContextAttributes().alpha:M=d;const x=new Uint32Array(4),b=new Int32Array(4);let R=null,v=null;const _=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this._useLegacyLights=!1,this.toneMapping=Ia,this.toneMappingExposure=1;const D=this;let B=!1,V=0,H=0,F=null,mt=-1,G=null;const T=new Ze,N=new Ze;let dt=null;const At=new Ce(0);let q=0,nt=i.width,I=i.height,it=1,$=null,lt=null;const w=new Ze(0,0,nt,I),j=new Ze(0,0,nt,I);let ht=!1;const Rt=new Nh;let k=!1,ft=!1,Tt=null;const Zt=new sn,gt=new de,yt=new X,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return F===null?it:1}let K=r;function Se(C,Q){for(let rt=0;rt<C.length;rt++){const ot=C[rt],et=i.getContext(ot,Q);if(et!==null)return et}return null}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rh}`),i.addEventListener("webglcontextlost",qt,!1),i.addEventListener("webglcontextrestored",U,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),K===null){const Q=["webgl2","webgl","experimental-webgl"];if(D.isWebGL1Renderer===!0&&Q.shift(),K=Se(Q,C),K===null)throw Se(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ct,ne,Bt,Xt,Ft,L,E,J,ct,vt,ut,Vt,Ut,Yt,ie,se,Mt,Re,pe,oe,jt,kt,ce,P;function Nt(){Ct=new uT(K),ne=new aT(K,Ct,e),Ct.init(ne),kt=new Zb(K,Ct,ne),Bt=new Yb(K,Ct,ne),Xt=new dT(K),Ft=new Nb,L=new jb(K,Ct,Bt,Ft,ne,kt,Xt),E=new sT(D),J=new cT(D),ct=new MM(K,ne),ce=new nT(K,Ct,ct,ne),vt=new fT(K,ct,Xt,ce),ut=new _T(K,vt,ct,Xt),pe=new gT(K,ne,L),se=new rT(Ft),Vt=new Ub(D,E,J,Ct,ne,ce,se),Ut=new nA(D,Ft),Yt=new Pb,ie=new Gb(Ct,ne),Re=new eT(D,E,J,Bt,ut,M,p),Mt=new qb(D,ut,ne),P=new iA(K,Xt,ne,Bt),oe=new iT(K,Ct,Xt,ne),jt=new hT(K,Ct,Xt,ne),Xt.programs=Vt.programs,D.capabilities=ne,D.extensions=Ct,D.properties=Ft,D.renderLists=Yt,D.shadowMap=Mt,D.state=Bt,D.info=Xt}Nt();const Gt=new eA(D,K);this.xr=Gt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(C){C!==void 0&&(it=C,this.setSize(nt,I,!1))},this.getSize=function(C){return C.set(nt,I)},this.setSize=function(C,Q,rt=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=C,I=Q,i.width=Math.floor(C*it),i.height=Math.floor(Q*it),rt===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(nt*it,I*it).floor()},this.setDrawingBufferSize=function(C,Q,rt){nt=C,I=Q,it=rt,i.width=Math.floor(C*rt),i.height=Math.floor(Q*rt),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(w)},this.setViewport=function(C,Q,rt,ot){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,Q,rt,ot),Bt.viewport(T.copy(w).multiplyScalar(it).floor())},this.getScissor=function(C){return C.copy(j)},this.setScissor=function(C,Q,rt,ot){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,Q,rt,ot),Bt.scissor(N.copy(j).multiplyScalar(it).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){Bt.setScissorTest(ht=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){lt=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(C=!0,Q=!0,rt=!0){let ot=0;if(C){let et=!1;if(F!==null){const It=F.texture.format;et=It===J_||It===Q_||It===K_}if(et){const It=F.texture.type,$t=It===Ha||It===Ba||It===Ch||It===vr||It===j_||It===Z_,Qt=Re.getClearColor(),te=Re.getClearAlpha(),_e=Qt.r,he=Qt.g,fe=Qt.b;$t?(x[0]=_e,x[1]=he,x[2]=fe,x[3]=te,K.clearBufferuiv(K.COLOR,0,x)):(b[0]=_e,b[1]=he,b[2]=fe,b[3]=te,K.clearBufferiv(K.COLOR,0,b))}else ot|=K.COLOR_BUFFER_BIT}Q&&(ot|=K.DEPTH_BUFFER_BIT),rt&&(ot|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",qt,!1),i.removeEventListener("webglcontextrestored",U,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Yt.dispose(),ie.dispose(),Ft.dispose(),E.dispose(),J.dispose(),ut.dispose(),ce.dispose(),P.dispose(),Vt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Pt),Gt.removeEventListener("sessionend",bt),Tt&&(Tt.dispose(),Tt=null),Jt.stop()};function qt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Xt.autoReset,Q=Mt.enabled,rt=Mt.autoUpdate,ot=Mt.needsUpdate,et=Mt.type;Nt(),Xt.autoReset=C,Mt.enabled=Q,Mt.autoUpdate=rt,Mt.needsUpdate=ot,Mt.type=et}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const Q=C.target;Q.removeEventListener("dispose",xt),Kt(Q)}function Kt(C){st(C),Ft.remove(C)}function st(C){const Q=Ft.get(C).programs;Q!==void 0&&(Q.forEach(function(rt){Vt.releaseProgram(rt)}),C.isShaderMaterial&&Vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,rt,ot,et,It){Q===null&&(Q=Ot);const $t=et.isMesh&&et.matrixWorld.determinant()<0,Qt=Wn(C,Q,rt,ot,et);Bt.setMaterial(ot,$t);let te=rt.index,_e=1;if(ot.wireframe===!0){if(te=vt.getWireframeAttribute(rt),te===void 0)return;_e=2}const he=rt.drawRange,fe=rt.attributes.position;let ze=he.start*_e,Qe=(he.start+he.count)*_e;It!==null&&(ze=Math.max(ze,It.start*_e),Qe=Math.min(Qe,(It.start+It.count)*_e)),te!==null?(ze=Math.max(ze,0),Qe=Math.min(Qe,te.count)):fe!=null&&(ze=Math.max(ze,0),Qe=Math.min(Qe,fe.count));const on=Qe-ze;if(on<0||on===1/0)return;ce.setup(et,ot,Qt,rt,te);let ei,ke=oe;if(te!==null&&(ei=ct.get(te),ke=jt,ke.setIndex(ei)),et.isMesh)ot.wireframe===!0?(Bt.setLineWidth(ot.wireframeLinewidth*Wt()),ke.setMode(K.LINES)):ke.setMode(K.TRIANGLES);else if(et.isLine){let ye=ot.linewidth;ye===void 0&&(ye=1),Bt.setLineWidth(ye*Wt()),et.isLineSegments?ke.setMode(K.LINES):et.isLineLoop?ke.setMode(K.LINE_LOOP):ke.setMode(K.LINE_STRIP)}else et.isPoints?ke.setMode(K.POINTS):et.isSprite&&ke.setMode(K.TRIANGLES);if(et.isBatchedMesh)ke.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)ke.renderInstances(ze,on,et.count);else if(rt.isInstancedBufferGeometry){const ye=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,sa=Math.min(rt.instanceCount,ye);ke.renderInstances(ze,on,sa)}else ke.render(ze,on)};function Dt(C,Q,rt){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Vn,C.needsUpdate=!0,Pe(C,Q,rt),C.side=Va,C.needsUpdate=!0,Pe(C,Q,rt),C.side=Li):Pe(C,Q,rt)}this.compile=function(C,Q,rt=null){rt===null&&(rt=C),v=ie.get(rt),v.init(),O.push(v),rt.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),C!==rt&&C.traverseVisible(function(et){et.isLight&&et.layers.test(Q.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),v.setupLights(D._useLegacyLights);const ot=new Set;return C.traverse(function(et){const It=et.material;if(It)if(Array.isArray(It))for(let $t=0;$t<It.length;$t++){const Qt=It[$t];Dt(Qt,rt,et),ot.add(Qt)}else Dt(It,rt,et),ot.add(It)}),O.pop(),v=null,ot},this.compileAsync=function(C,Q,rt=null){const ot=this.compile(C,Q,rt);return new Promise(et=>{function It(){if(ot.forEach(function($t){Ft.get($t).currentProgram.isReady()&&ot.delete($t)}),ot.size===0){et(C);return}setTimeout(It,10)}Ct.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Et=null;function zt(C){Et&&Et(C)}function Pt(){Jt.stop()}function bt(){Jt.start()}const Jt=new m0;Jt.setAnimationLoop(zt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(C){Et=C,Gt.setAnimationLoop(C),C===null?Jt.stop():Jt.start()},Gt.addEventListener("sessionstart",Pt),Gt.addEventListener("sessionend",bt),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(Q),Q=Gt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Q,F),v=ie.get(C,O.length),v.init(),O.push(v),Zt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Rt.setFromProjectionMatrix(Zt),ft=this.localClippingEnabled,k=se.init(this.clippingPlanes,ft),R=Yt.get(C,_.length),R.init(),_.push(R),le(C,Q,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort($,lt),this.info.render.frame++,k===!0&&se.beginShadows();const rt=v.state.shadowsArray;if(Mt.render(rt,C,Q),k===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1)&&Re.render(R,C),v.setupLights(D._useLegacyLights),Q.isArrayCamera){const ot=Q.cameras;for(let et=0,It=ot.length;et<It;et++){const $t=ot[et];De(R,C,$t,$t.viewport)}}else De(R,C,Q);F!==null&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(D,C,Q),ce.resetDefaultState(),mt=-1,G=null,O.pop(),O.length>0?v=O[O.length-1]:v=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function le(C,Q,rt,ot){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Rt.intersectsSprite(C)){ot&&yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Zt);const $t=ut.update(C),Qt=C.material;Qt.visible&&R.push(C,$t,Qt,rt,yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Rt.intersectsObject(C))){const $t=ut.update(C),Qt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),yt.copy(C.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),yt.copy($t.boundingSphere.center)),yt.applyMatrix4(C.matrixWorld).applyMatrix4(Zt)),Array.isArray(Qt)){const te=$t.groups;for(let _e=0,he=te.length;_e<he;_e++){const fe=te[_e],ze=Qt[fe.materialIndex];ze&&ze.visible&&R.push(C,$t,ze,rt,yt.z,fe)}}else Qt.visible&&R.push(C,$t,Qt,rt,yt.z,null)}}const It=C.children;for(let $t=0,Qt=It.length;$t<Qt;$t++)le(It[$t],Q,rt,ot)}function De(C,Q,rt,ot){const et=C.opaque,It=C.transmissive,$t=C.transparent;v.setupLightsView(rt),k===!0&&se.setGlobalState(D.clippingPlanes,rt),It.length>0&&ge(et,It,Q,rt),ot&&Bt.viewport(T.copy(ot)),et.length>0&&He(et,Q,rt),It.length>0&&He(It,Q,rt),$t.length>0&&He($t,Q,rt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function ge(C,Q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const It=ne.isWebGL2;Tt===null&&(Tt=new Mr(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")?Fo:Ha,minFilter:_r,samples:It?4:0})),D.getDrawingBufferSize(gt),It?Tt.setSize(gt.x,gt.y):Tt.setSize(yc(gt.x),yc(gt.y));const $t=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(At),q=D.getClearAlpha(),q<1&&D.setClearColor(16777215,.5),D.clear();const Qt=D.toneMapping;D.toneMapping=Ia,He(C,rt,ot),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt);let te=!1;for(let _e=0,he=Q.length;_e<he;_e++){const fe=Q[_e],ze=fe.object,Qe=fe.geometry,on=fe.material,ei=fe.group;if(on.side===Li&&ze.layers.test(ot.layers)){const ke=on.side;on.side=Vn,on.needsUpdate=!0,Ke(ze,rt,ot,Qe,on,ei),on.side=ke,on.needsUpdate=!0,te=!0}}te===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt)),D.setRenderTarget($t),D.setClearColor(At,q),D.toneMapping=Qt}function He(C,Q,rt){const ot=Q.isScene===!0?Q.overrideMaterial:null;for(let et=0,It=C.length;et<It;et++){const $t=C[et],Qt=$t.object,te=$t.geometry,_e=ot===null?$t.material:ot,he=$t.group;Qt.layers.test(rt.layers)&&Ke(Qt,Q,rt,te,_e,he)}}function Ke(C,Q,rt,ot,et,It){C.onBeforeRender(D,Q,rt,ot,et,It),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),et.onBeforeRender(D,Q,rt,ot,C,It),et.transparent===!0&&et.side===Li&&et.forceSinglePass===!1?(et.side=Vn,et.needsUpdate=!0,D.renderBufferDirect(rt,Q,ot,et,C,It),et.side=Va,et.needsUpdate=!0,D.renderBufferDirect(rt,Q,ot,et,C,It),et.side=Li):D.renderBufferDirect(rt,Q,ot,et,C,It),C.onAfterRender(D,Q,rt,ot,et,It)}function Pe(C,Q,rt){Q.isScene!==!0&&(Q=Ot);const ot=Ft.get(C),et=v.state.lights,It=v.state.shadowsArray,$t=et.state.version,Qt=Vt.getParameters(C,et.state,It,Q,rt),te=Vt.getProgramCacheKey(Qt);let _e=ot.programs;ot.environment=C.isMeshStandardMaterial?Q.environment:null,ot.fog=Q.fog,ot.envMap=(C.isMeshStandardMaterial?J:E).get(C.envMap||ot.environment),_e===void 0&&(C.addEventListener("dispose",xt),_e=new Map,ot.programs=_e);let he=_e.get(te);if(he!==void 0){if(ot.currentProgram===he&&ot.lightsStateVersion===$t)return je(C,Qt),he}else Qt.uniforms=Vt.getUniforms(C),C.onBuild(rt,Qt,D),C.onBeforeCompile(Qt,D),he=Vt.acquireProgram(Qt,te),_e.set(te,he),ot.uniforms=Qt.uniforms;const fe=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(fe.clippingPlanes=se.uniform),je(C,Qt),ot.needsLights=ka(C),ot.lightsStateVersion=$t,ot.needsLights&&(fe.ambientLightColor.value=et.state.ambient,fe.lightProbe.value=et.state.probe,fe.directionalLights.value=et.state.directional,fe.directionalLightShadows.value=et.state.directionalShadow,fe.spotLights.value=et.state.spot,fe.spotLightShadows.value=et.state.spotShadow,fe.rectAreaLights.value=et.state.rectArea,fe.ltc_1.value=et.state.rectAreaLTC1,fe.ltc_2.value=et.state.rectAreaLTC2,fe.pointLights.value=et.state.point,fe.pointLightShadows.value=et.state.pointShadow,fe.hemisphereLights.value=et.state.hemi,fe.directionalShadowMap.value=et.state.directionalShadowMap,fe.directionalShadowMatrix.value=et.state.directionalShadowMatrix,fe.spotShadowMap.value=et.state.spotShadowMap,fe.spotLightMatrix.value=et.state.spotLightMatrix,fe.spotLightMap.value=et.state.spotLightMap,fe.pointShadowMap.value=et.state.pointShadowMap,fe.pointShadowMatrix.value=et.state.pointShadowMatrix),ot.currentProgram=he,ot.uniformsList=null,he}function Ue(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=pc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function je(C,Q){const rt=Ft.get(C);rt.outputColorSpace=Q.outputColorSpace,rt.batching=Q.batching,rt.instancing=Q.instancing,rt.instancingColor=Q.instancingColor,rt.skinning=Q.skinning,rt.morphTargets=Q.morphTargets,rt.morphNormals=Q.morphNormals,rt.morphColors=Q.morphColors,rt.morphTargetsCount=Q.morphTargetsCount,rt.numClippingPlanes=Q.numClippingPlanes,rt.numIntersection=Q.numClipIntersection,rt.vertexAlphas=Q.vertexAlphas,rt.vertexTangents=Q.vertexTangents,rt.toneMapping=Q.toneMapping}function Wn(C,Q,rt,ot,et){Q.isScene!==!0&&(Q=Ot),L.resetTextureUnits();const It=Q.fog,$t=ot.isMeshStandardMaterial?Q.environment:null,Qt=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:aa,te=(ot.isMeshStandardMaterial?J:E).get(ot.envMap||$t),_e=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,he=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),fe=!!rt.morphAttributes.position,ze=!!rt.morphAttributes.normal,Qe=!!rt.morphAttributes.color;let on=Ia;ot.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(on=D.toneMapping);const ei=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ke=ei!==void 0?ei.length:0,ye=Ft.get(ot),sa=v.state.lights;if(k===!0&&(ft===!0||C!==G)){const Fn=C===G&&ot.id===mt;se.setState(ot,C,Fn)}let Ge=!1;ot.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==sa.state.version||ye.outputColorSpace!==Qt||et.isBatchedMesh&&ye.batching===!1||!et.isBatchedMesh&&ye.batching===!0||et.isInstancedMesh&&ye.instancing===!1||!et.isInstancedMesh&&ye.instancing===!0||et.isSkinnedMesh&&ye.skinning===!1||!et.isSkinnedMesh&&ye.skinning===!0||et.isInstancedMesh&&ye.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&ye.instancingColor===!1&&et.instanceColor!==null||ye.envMap!==te||ot.fog===!0&&ye.fog!==It||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==se.numPlanes||ye.numIntersection!==se.numIntersection)||ye.vertexAlphas!==_e||ye.vertexTangents!==he||ye.morphTargets!==fe||ye.morphNormals!==ze||ye.morphColors!==Qe||ye.toneMapping!==on||ne.isWebGL2===!0&&ye.morphTargetsCount!==ke)&&(Ge=!0):(Ge=!0,ye.__version=ot.version);let yn=ye.currentProgram;Ge===!0&&(yn=Pe(ot,Q,et));let Un=!1,oa=!1,Ns=!1;const an=yn.getUniforms(),Ti=ye.uniforms;if(Bt.useProgram(yn.program)&&(Un=!0,oa=!0,Ns=!0),ot.id!==mt&&(mt=ot.id,oa=!0),Un||G!==C){an.setValue(K,"projectionMatrix",C.projectionMatrix),an.setValue(K,"viewMatrix",C.matrixWorldInverse);const Fn=an.map.cameraPosition;Fn!==void 0&&Fn.setValue(K,yt.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&an.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&an.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,oa=!0,Ns=!0)}if(et.isSkinnedMesh){an.setOptional(K,et,"bindMatrix"),an.setOptional(K,et,"bindMatrixInverse");const Fn=et.skeleton;Fn&&(ne.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),an.setValue(K,"boneTexture",Fn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(an.setOptional(K,et,"batchingTexture"),an.setValue(K,"batchingTexture",et._matricesTexture,L));const la=rt.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&ne.isWebGL2===!0)&&pe.update(et,rt,yn),(oa||ye.receiveShadow!==et.receiveShadow)&&(ye.receiveShadow=et.receiveShadow,an.setValue(K,"receiveShadow",et.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Ti.envMap.value=te,Ti.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),oa&&(an.setValue(K,"toneMappingExposure",D.toneMappingExposure),ye.needsLights&&ti(Ti,Ns),It&&ot.fog===!0&&Ut.refreshFogUniforms(Ti,It),Ut.refreshMaterialUniforms(Ti,ot,it,I,Tt),pc.upload(K,Ue(ye),Ti,L)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(pc.upload(K,Ue(ye),Ti,L),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&an.setValue(K,"center",et.center),an.setValue(K,"modelViewMatrix",et.modelViewMatrix),an.setValue(K,"normalMatrix",et.normalMatrix),an.setValue(K,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Fn=ot.uniformsGroups;for(let An=0,Os=Fn.length;An<Os;An++)if(ne.isWebGL2){const Ps=Fn[An];P.update(Ps,yn),P.bind(Ps,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function ti(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function ka(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,Q,rt){Ft.get(C.texture).__webglTexture=Q,Ft.get(C.depthTexture).__webglTexture=rt;const ot=Ft.get(C);ot.__hasExternalTextures=!0,ot.__hasExternalTextures&&(ot.__autoAllocateDepthBuffer=rt===void 0,ot.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Q){const rt=Ft.get(C);rt.__webglFramebuffer=Q,rt.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,rt=0){F=C,V=Q,H=rt;let ot=!0,et=null,It=!1,$t=!1;if(C){const te=Ft.get(C);te.__useDefaultFramebuffer!==void 0?(Bt.bindFramebuffer(K.FRAMEBUFFER,null),ot=!1):te.__webglFramebuffer===void 0?L.setupRenderTarget(C):te.__hasExternalTextures&&L.rebindTextures(C,Ft.get(C.texture).__webglTexture,Ft.get(C.depthTexture).__webglTexture);const _e=C.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&($t=!0);const he=Ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(he[Q])?et=he[Q][rt]:et=he[Q],It=!0):ne.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?et=Ft.get(C).__webglMultisampledFramebuffer:Array.isArray(he)?et=he[rt]:et=he,T.copy(C.viewport),N.copy(C.scissor),dt=C.scissorTest}else T.copy(w).multiplyScalar(it).floor(),N.copy(j).multiplyScalar(it).floor(),dt=ht;if(Bt.bindFramebuffer(K.FRAMEBUFFER,et)&&ne.drawBuffers&&ot&&Bt.drawBuffers(C,et),Bt.viewport(T),Bt.scissor(N),Bt.setScissorTest(dt),It){const te=Ft.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te.__webglTexture,rt)}else if($t){const te=Ft.get(C.texture),_e=Q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,te.__webglTexture,rt||0,_e)}mt=-1},this.readRenderTargetPixels=function(C,Q,rt,ot,et,It,$t){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$t!==void 0&&(Qt=Qt[$t]),Qt){Bt.bindFramebuffer(K.FRAMEBUFFER,Qt);try{const te=C.texture,_e=te.format,he=te.type;if(_e!==Ei&&kt.convert(_e)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const fe=he===Fo&&(Ct.has("EXT_color_buffer_half_float")||ne.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(he!==Ha&&kt.convert(he)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(he===na&&(ne.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ot&&rt>=0&&rt<=C.height-et&&K.readPixels(Q,rt,ot,et,kt.convert(_e),kt.convert(he),It)}finally{const te=F!==null?Ft.get(F).__webglFramebuffer:null;Bt.bindFramebuffer(K.FRAMEBUFFER,te)}}},this.copyFramebufferToTexture=function(C,Q,rt=0){const ot=Math.pow(2,-rt),et=Math.floor(Q.image.width*ot),It=Math.floor(Q.image.height*ot);L.setTexture2D(Q,0),K.copyTexSubImage2D(K.TEXTURE_2D,rt,0,0,C.x,C.y,et,It),Bt.unbindTexture()},this.copyTextureToTexture=function(C,Q,rt,ot=0){const et=Q.image.width,It=Q.image.height,$t=kt.convert(rt.format),Qt=kt.convert(rt.type);L.setTexture2D(rt,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,rt.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,rt.unpackAlignment),Q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ot,C.x,C.y,et,It,$t,Qt,Q.image.data):Q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ot,C.x,C.y,Q.mipmaps[0].width,Q.mipmaps[0].height,$t,Q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,ot,C.x,C.y,$t,Qt,Q.image),ot===0&&rt.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Bt.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,rt,ot,et=0){if(D.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const It=C.max.x-C.min.x+1,$t=C.max.y-C.min.y+1,Qt=C.max.z-C.min.z+1,te=kt.convert(ot.format),_e=kt.convert(ot.type);let he;if(ot.isData3DTexture)L.setTexture3D(ot,0),he=K.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)L.setTexture2DArray(ot,0),he=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ot.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ot.unpackAlignment);const fe=K.getParameter(K.UNPACK_ROW_LENGTH),ze=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Qe=K.getParameter(K.UNPACK_SKIP_PIXELS),on=K.getParameter(K.UNPACK_SKIP_ROWS),ei=K.getParameter(K.UNPACK_SKIP_IMAGES),ke=rt.isCompressedTexture?rt.mipmaps[et]:rt.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,ke.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ke.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,C.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,C.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,C.min.z),rt.isDataTexture||rt.isData3DTexture?K.texSubImage3D(he,et,Q.x,Q.y,Q.z,It,$t,Qt,te,_e,ke.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(he,et,Q.x,Q.y,Q.z,It,$t,Qt,te,ke.data)):K.texSubImage3D(he,et,Q.x,Q.y,Q.z,It,$t,Qt,te,_e,ke),K.pixelStorei(K.UNPACK_ROW_LENGTH,fe),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ze),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Qe),K.pixelStorei(K.UNPACK_SKIP_ROWS,on),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ei),et===0&&ot.generateMipmaps&&K.generateMipmap(he),Bt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Bt.unbindTexture()},this.resetState=function(){V=0,H=0,F=null,Bt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dh?"display-p3":"srgb",i.unpackColorSpace=Ie.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tn?yr:t0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?Tn:aa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aA extends E0{}aA.prototype.isWebGL1Renderer=!0;class rA extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class T0 extends Ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U_=new sn,bh=new Uh,fc=new bc,hc=new X;class sA extends bn{constructor(e=new Oi,i=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;U_.copy(l).invert(),bh.copy(e.ray).applyMatrix4(U_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,S=r.attributes.position;if(m!==null){const M=Math.max(0,d.start),x=Math.min(m.count,d.start+d.count);for(let b=M,R=x;b<R;b++){const v=m.getX(b);hc.fromBufferAttribute(S,v),N_(hc,v,p,l,e,i,this)}}else{const M=Math.max(0,d.start),x=Math.min(S.count,d.start+d.count);for(let b=M,R=x;b<R;b++)hc.fromBufferAttribute(S,b),N_(hc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function N_(o,e,i,r,l,u,d){const h=bh.distanceSqToPoint(o);if(h<i){const p=new X;bh.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class xc extends Oi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const g=[],S=new X,M=new X,x=[],b=[],R=[],v=[];for(let _=0;_<=r;_++){const O=[],D=_/r;let B=0;_===0&&d===0?B=.5/i:_===r&&p===Math.PI&&(B=-.5/i);for(let V=0;V<=i;V++){const H=V/i;S.x=-e*Math.cos(l+H*u)*Math.sin(d+D*h),S.y=e*Math.cos(d+D*h),S.z=e*Math.sin(l+H*u)*Math.sin(d+D*h),b.push(S.x,S.y,S.z),M.copy(S).normalize(),R.push(M.x,M.y,M.z),v.push(H+B,1-D),O.push(m++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const D=g[_][O+1],B=g[_][O],V=g[_+1][O],H=g[_+1][O+1];(_!==0||d>0)&&x.push(D,B,H),(_!==r-1||p<Math.PI)&&x.push(B,V,H)}this.setIndex(x),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends Ls{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ph extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const hh=new sn,O_=new X,P_=new X;class b0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;O_.setFromMatrixPosition(e.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const z_=new sn,Po=new X,dh=new X;class lA extends b0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),r.position.copy(Po),dh.copy(r.position),dh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(dh),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),z_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z_)}}class B_ extends Ph{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cA extends b0{constructor(){super(new g0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends Ph{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new cA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends Ph{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class H_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ln(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);const G_={type:"change"},ph={type:"start"},V_={type:"end"},dc=new Uh,k_=new za,uA=Math.cos(70*dr.DEG2RAD);class fA extends Er{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",ie),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(G_),r.update(),u=l.NONE},this.update=function(){const P=new X,Nt=new xr().setFromUnitVectors(e.up,new X(0,1,0)),Gt=Nt.clone().invert(),qt=new X,U=new xr,Lt=new X,xt=2*Math.PI;return function(st=null){const Dt=r.object.position;P.copy(Dt).sub(r.target),P.applyQuaternion(Nt),h.setFromVector3(P),r.autoRotate&&u===l.NONE&&dt(T(st)),r.enableDamping?(h.theta+=p.theta*r.dampingFactor,h.phi+=p.phi*r.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let Et=r.minAzimuthAngle,zt=r.maxAzimuthAngle;isFinite(Et)&&isFinite(zt)&&(Et<-Math.PI?Et+=xt:Et>Math.PI&&(Et-=xt),zt<-Math.PI?zt+=xt:zt>Math.PI&&(zt-=xt),Et<=zt?h.theta=Math.max(Et,Math.min(zt,h.theta)):h.theta=h.theta>(Et+zt)/2?Math.max(Et,h.theta):Math.min(zt,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&H||r.object.isOrthographicCamera?h.radius=w(h.radius):h.radius=w(h.radius*m),P.setFromSpherical(h),P.applyQuaternion(Gt),Dt.copy(r.target).add(P),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Pt=!1;if(r.zoomToCursor&&H){let bt=null;if(r.object.isPerspectiveCamera){const Jt=P.length();bt=w(Jt*m);const le=Jt-bt;r.object.position.addScaledVector(B,le),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Jt=new X(V.x,V.y,0);Jt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Pt=!0;const le=new X(V.x,V.y,0);le.unproject(r.object),r.object.position.sub(le).add(Jt),r.object.updateMatrixWorld(),bt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(bt).add(r.object.position):(dc.origin.copy(r.object.position),dc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(dc.direction))<uA?e.lookAt(r.target):(k_.setFromNormalAndCoplanarPoint(r.object.up,r.target),dc.intersectPlane(k_,r.target))))}else r.object.isOrthographicCamera&&(Pt=m!==1,Pt&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix()));return m=1,H=!1,Pt||qt.distanceToSquared(r.object.position)>d||8*(1-U.dot(r.object.quaternion))>d||Lt.distanceToSquared(r.target)>0?(r.dispatchEvent(G_),qt.copy(r.object.position),U.copy(r.object.quaternion),Lt.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Re),r.domElement.removeEventListener("pointerdown",L),r.domElement.removeEventListener("pointercancel",J),r.domElement.removeEventListener("wheel",ut),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",J),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",ie),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new H_,p=new H_;let m=1;const g=new X,S=new de,M=new de,x=new de,b=new de,R=new de,v=new de,_=new de,O=new de,D=new de,B=new X,V=new de;let H=!1;const F=[],mt={};let G=!1;function T(P){return P!==null?2*Math.PI/60*r.autoRotateSpeed*P:2*Math.PI/60/60*r.autoRotateSpeed}function N(P){const Nt=Math.abs(P*.01);return Math.pow(.95,r.zoomSpeed*Nt)}function dt(P){p.theta-=P}function At(P){p.phi-=P}const q=function(){const P=new X;return function(Gt,qt){P.setFromMatrixColumn(qt,0),P.multiplyScalar(-Gt),g.add(P)}}(),nt=function(){const P=new X;return function(Gt,qt){r.screenSpacePanning===!0?P.setFromMatrixColumn(qt,1):(P.setFromMatrixColumn(qt,0),P.crossVectors(r.object.up,P)),P.multiplyScalar(Gt),g.add(P)}}(),I=function(){const P=new X;return function(Gt,qt){const U=r.domElement;if(r.object.isPerspectiveCamera){const Lt=r.object.position;P.copy(Lt).sub(r.target);let xt=P.length();xt*=Math.tan(r.object.fov/2*Math.PI/180),q(2*Gt*xt/U.clientHeight,r.object.matrix),nt(2*qt*xt/U.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(q(Gt*(r.object.right-r.object.left)/r.object.zoom/U.clientWidth,r.object.matrix),nt(qt*(r.object.top-r.object.bottom)/r.object.zoom/U.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function it(P){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function $(P){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function lt(P,Nt){if(!r.zoomToCursor)return;H=!0;const Gt=r.domElement.getBoundingClientRect(),qt=P-Gt.left,U=Nt-Gt.top,Lt=Gt.width,xt=Gt.height;V.x=qt/Lt*2-1,V.y=-(U/xt)*2+1,B.set(V.x,V.y,1).unproject(r.object).sub(r.object.position).normalize()}function w(P){return Math.max(r.minDistance,Math.min(r.maxDistance,P))}function j(P){S.set(P.clientX,P.clientY)}function ht(P){lt(P.clientX,P.clientX),_.set(P.clientX,P.clientY)}function Rt(P){b.set(P.clientX,P.clientY)}function k(P){M.set(P.clientX,P.clientY),x.subVectors(M,S).multiplyScalar(r.rotateSpeed);const Nt=r.domElement;dt(2*Math.PI*x.x/Nt.clientHeight),At(2*Math.PI*x.y/Nt.clientHeight),S.copy(M),r.update()}function ft(P){O.set(P.clientX,P.clientY),D.subVectors(O,_),D.y>0?it(N(D.y)):D.y<0&&$(N(D.y)),_.copy(O),r.update()}function Tt(P){R.set(P.clientX,P.clientY),v.subVectors(R,b).multiplyScalar(r.panSpeed),I(v.x,v.y),b.copy(R),r.update()}function Zt(P){lt(P.clientX,P.clientY),P.deltaY<0?$(N(P.deltaY)):P.deltaY>0&&it(N(P.deltaY)),r.update()}function gt(P){let Nt=!1;switch(P.code){case r.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?At(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,r.keyPanSpeed),Nt=!0;break;case r.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?At(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,-r.keyPanSpeed),Nt=!0;break;case r.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?dt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(r.keyPanSpeed,0),Nt=!0;break;case r.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?dt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(-r.keyPanSpeed,0),Nt=!0;break}Nt&&(P.preventDefault(),r.update())}function yt(P){if(F.length===1)S.set(P.pageX,P.pageY);else{const Nt=kt(P),Gt=.5*(P.pageX+Nt.x),qt=.5*(P.pageY+Nt.y);S.set(Gt,qt)}}function Ot(P){if(F.length===1)b.set(P.pageX,P.pageY);else{const Nt=kt(P),Gt=.5*(P.pageX+Nt.x),qt=.5*(P.pageY+Nt.y);b.set(Gt,qt)}}function Wt(P){const Nt=kt(P),Gt=P.pageX-Nt.x,qt=P.pageY-Nt.y,U=Math.sqrt(Gt*Gt+qt*qt);_.set(0,U)}function K(P){r.enableZoom&&Wt(P),r.enablePan&&Ot(P)}function Se(P){r.enableZoom&&Wt(P),r.enableRotate&&yt(P)}function Ct(P){if(F.length==1)M.set(P.pageX,P.pageY);else{const Gt=kt(P),qt=.5*(P.pageX+Gt.x),U=.5*(P.pageY+Gt.y);M.set(qt,U)}x.subVectors(M,S).multiplyScalar(r.rotateSpeed);const Nt=r.domElement;dt(2*Math.PI*x.x/Nt.clientHeight),At(2*Math.PI*x.y/Nt.clientHeight),S.copy(M)}function ne(P){if(F.length===1)R.set(P.pageX,P.pageY);else{const Nt=kt(P),Gt=.5*(P.pageX+Nt.x),qt=.5*(P.pageY+Nt.y);R.set(Gt,qt)}v.subVectors(R,b).multiplyScalar(r.panSpeed),I(v.x,v.y),b.copy(R)}function Bt(P){const Nt=kt(P),Gt=P.pageX-Nt.x,qt=P.pageY-Nt.y,U=Math.sqrt(Gt*Gt+qt*qt);O.set(0,U),D.set(0,Math.pow(O.y/_.y,r.zoomSpeed)),it(D.y),_.copy(O);const Lt=(P.pageX+Nt.x)*.5,xt=(P.pageY+Nt.y)*.5;lt(Lt,xt)}function Xt(P){r.enableZoom&&Bt(P),r.enablePan&&ne(P)}function Ft(P){r.enableZoom&&Bt(P),r.enableRotate&&Ct(P)}function L(P){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(P.pointerId),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",J)),pe(P),P.pointerType==="touch"?se(P):ct(P))}function E(P){r.enabled!==!1&&(P.pointerType==="touch"?Mt(P):vt(P))}function J(P){switch(oe(P),F.length){case 0:r.domElement.releasePointerCapture(P.pointerId),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",J),r.dispatchEvent(V_),u=l.NONE;break;case 1:const Nt=F[0],Gt=mt[Nt];se({pointerId:Nt,pageX:Gt.x,pageY:Gt.y});break}}function ct(P){let Nt;switch(P.button){case 0:Nt=r.mouseButtons.LEFT;break;case 1:Nt=r.mouseButtons.MIDDLE;break;case 2:Nt=r.mouseButtons.RIGHT;break;default:Nt=-1}switch(Nt){case es.DOLLY:if(r.enableZoom===!1)return;ht(P),u=l.DOLLY;break;case es.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(r.enablePan===!1)return;Rt(P),u=l.PAN}else{if(r.enableRotate===!1)return;j(P),u=l.ROTATE}break;case es.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(r.enableRotate===!1)return;j(P),u=l.ROTATE}else{if(r.enablePan===!1)return;Rt(P),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function vt(P){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;k(P);break;case l.DOLLY:if(r.enableZoom===!1)return;ft(P);break;case l.PAN:if(r.enablePan===!1)return;Tt(P);break}}function ut(P){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(P.preventDefault(),r.dispatchEvent(ph),Zt(Vt(P)),r.dispatchEvent(V_))}function Vt(P){const Nt=P.deltaMode,Gt={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(Nt){case 1:Gt.deltaY*=16;break;case 2:Gt.deltaY*=100;break}return P.ctrlKey&&!G&&(Gt.deltaY*=10),Gt}function Ut(P){P.key==="Control"&&(G=!0,r.domElement.getRootNode().addEventListener("keyup",Yt,{passive:!0,capture:!0}))}function Yt(P){P.key==="Control"&&(G=!1,r.domElement.getRootNode().removeEventListener("keyup",Yt,{passive:!0,capture:!0}))}function ie(P){r.enabled===!1||r.enablePan===!1||gt(P)}function se(P){switch(jt(P),F.length){case 1:switch(r.touches.ONE){case ns.ROTATE:if(r.enableRotate===!1)return;yt(P),u=l.TOUCH_ROTATE;break;case ns.PAN:if(r.enablePan===!1)return;Ot(P),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case ns.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;K(P),u=l.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Se(P),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(ph)}function Mt(P){switch(jt(P),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;Ct(P),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;ne(P),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Xt(P),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ft(P),r.update();break;default:u=l.NONE}}function Re(P){r.enabled!==!1&&P.preventDefault()}function pe(P){F.push(P.pointerId)}function oe(P){delete mt[P.pointerId];for(let Nt=0;Nt<F.length;Nt++)if(F[Nt]==P.pointerId){F.splice(Nt,1);return}}function jt(P){let Nt=mt[P.pointerId];Nt===void 0&&(Nt=new de,mt[P.pointerId]=Nt),Nt.set(P.pageX,P.pageY)}function kt(P){const Nt=P.pointerId===F[0]?F[1]:F[0];return mt[Nt]}r.domElement.addEventListener("contextmenu",Re),r.domElement.addEventListener("pointerdown",L),r.domElement.addEventListener("pointercancel",J),r.domElement.addEventListener("wheel",ut,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Ut,{passive:!0,capture:!0}),this.update()}}function hA(){const o=Ae.useRef(null),[e,i]=Ae.useState(!1),[r,l]=Ae.useState(!1),[u,d]=Ae.useState(!1),[h,p]=Ae.useState(!1),[m,g]=Ae.useState(!1),[S,M]=Ae.useState(!1),[x,b]=Ae.useState(!1),[R,v]=Ae.useState(!1),[_,O]=Ae.useState(!1),[D,B]=Ae.useState(!1),V=Ae.useRef({beta:0,gamma:0}),H=Ae.useRef(0),F=Ae.useRef(!1),mt=Ae.useRef(!1),G=Ae.useRef({position:{x:1,z:1},direction:new X(0,0,1),worldPosition:new X(0,0,0),mesh:null}),T=Ae.useRef({}),N=Ae.useRef(null),dt=Ae.useRef(!1);Ae.useEffect(()=>{mt.current=u},[u]),Ae.useEffect(()=>{dt.current=e},[e]);const[At,q]=Ae.useState(null),nt=Ae.useRef(null);Ae.useRef(!1);const I=Ae.useRef(null),it=Ae.useRef(!1),$=()=>{if(console.log("Restarting game..."),!T.current.generateMaze||!T.current.createWalls){console.error("Game functions not initialized");return}if(N.current&&N.current.parent&&(console.log("Cleaning up celebration particles"),N.current.parent.remove(N.current),N.current.geometry&&N.current.geometry.dispose(),N.current.material&&N.current.material.dispose(),N.current=null,q(null)),console.log("Resetting game state"),i(!1),l(!1),d(!1),it.current=!1,console.log("Resetting player position and direction"),G.current.position={x:1,z:1},G.current.direction.set(0,0,1),console.log("Resetting maze reference"),I.current=null,console.log("Generating new maze"),T.current.generateMaze(),console.log("Creating new walls"),T.current.createWalls(),console.log("Updating player world position"),G.current.worldPosition.set((1-21/2)*2,1.5,(1-21/2)*2),T.current.createPlayer&&T.current.mazeGroup){console.log("Creating new player mesh"),G.current.mesh&&G.current.mesh.parent&&(console.log("Removing old player mesh"),G.current.mesh.parent.remove(G.current.mesh),G.current.mesh.children.forEach(yt=>{yt.geometry&&yt.geometry.dispose(),yt.material&&yt.material.dispose()})),console.log("Creating new player mesh");const gt=T.current.createPlayer();console.log("Positioning new player at entrance"),gt.position.copy(G.current.worldPosition),console.log("Adding new player to maze group"),T.current.mazeGroup.add(gt),console.log("Added new player to maze group"),console.log("Updating player ref"),G.current.mesh=gt}if(T.current.setInitialPlayerDirection?T.current.setInitialPlayerDirection(G.current.mesh):G.current.direction.set(0,0,1),G.current.mesh){G.current.mesh.position.copy(G.current.worldPosition);const gt=Math.atan2(G.current.direction.x,G.current.direction.z);G.current.mesh.rotation.y=gt,G.current.mesh.visible=!0,G.current.mesh.children.forEach(yt=>{yt.material&&(yt.material.opacity=1,yt.material.transparent=!0)})}},lt=()=>{const gt=navigator.userAgent||navigator.vendor||window.opera,yt=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(gt.toLowerCase());return console.log("Device detection:",yt?"Mobile":"Desktop"),F.current=yt,yt},w=()=>window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function",j=()=>window.DeviceOrientationEvent!==void 0,ht=async()=>{if(!w())return console.log("No iOS permission needed, enabling gyroscope directly"),window.addEventListener("deviceorientation",Rt),b(!0),v(!0),!0;console.log("Requesting iOS device orientation permission");try{const gt=await window.DeviceOrientationEvent.requestPermission();return console.log("Permission response:",gt),gt==="granted"?(console.log("iOS permission granted!"),window.addEventListener("deviceorientation",Rt),b(!0),v(!0),O(!1),B(!1),console.log("Device orientation listener added"),!0):(console.log("iOS permission denied:",gt),O(!1),B(!0),alert("Motion access was denied. Touch controls have been enabled instead."),!1)}catch(gt){return console.error("Error requesting iOS permission:",gt),O(!1),B(!0),alert("Error accessing motion sensors. Touch controls have been enabled instead."),!1}},Rt=gt=>{const yt=performance.now(),Ot=yt<3e3;Ot&&console.log("Orientation event received:",{beta:gt.beta,gamma:gt.gamma,time:yt}),V.current={beta:gt.beta,gamma:gt.gamma},!Ot&&yt%3e3<20&&console.log("Orientation data:",V.current)};Ae.useEffect(()=>{const gt=lt();return console.log("Is mobile:",gt),gt&&(w()?(console.log("iOS device detected - showing permission button"),O(!0),window.DeviceOrientationEvent?(console.log("DeviceOrientationEvent is available"),console.log("requestPermission function:",typeof window.DeviceOrientationEvent.requestPermission)):console.log("DeviceOrientationEvent is NOT available")):j()?(console.log("Android or other mobile device with gyroscope - setting up tilt controls"),window.addEventListener("deviceorientation",Rt),b(!0),v(!0)):(console.log("Mobile device without gyroscope - showing touch controls"),B(!0))),()=>{window.removeEventListener("deviceorientation",Rt)}},[]),Ae.useEffect(()=>{if(console.log("Effect running"),!o.current){console.error("No mount ref");return}try{let gt=function(st){if(Kt=requestAnimationFrame(gt),F.current&&x&&!dt.current&&!h){const Et=performance.now(),{beta:zt,gamma:Pt}=V.current;if(Et<5e3&&Et%500<20&&console.log("Animation loop - orientation:",{beta:zt,gamma:Pt}),zt!==null&&Pt!==null){const bt=Math.abs(zt),Jt=Math.abs(Pt);let le="";const De=5;bt>Jt&&bt>De?le=zt>0?"ArrowDown":"ArrowUp":Jt>De&&(le=Pt>0?"ArrowRight":"ArrowLeft");const ge=Math.max(bt,Jt),He=Math.max(100,500-ge*5);le&&Et-H.current>He&&(console.log(`Gyroscope movement: ${le} (tilt: ${ge.toFixed(1)}°)`),xt({key:le,preventDefault:()=>{},stopPropagation:()=>{}}),H.current=Et)}}if(!kt&&!e){const Et=st-ce,zt=Math.min(Et/P,1);if(zt===1)kt=!0,ut.rotation.x=0,ut.rotation.y=0;else{const Pt=dr.lerp(0,0,zt);ut.rotation.x=Pt,ut.rotation.y=0}}else!kt&&e&&(kt=!0),mt.current||(ut.rotation.x=0,ut.rotation.y=0,ut.rotation.z=0);const Dt=st*.001;ut.children.forEach(Et=>{Et.material&&Et.material.uniforms&&(Et.material.uniforms.time.value=Dt)}),nt.current?(console.log("Calling updateParticles from animation loop"),nt.current()||(console.log("updateParticles returned false, setting to null"),nt.current=null)):dt.current&&!nt.current&&console.log("Game won but updateParticles is null"),mt.current?F.current||(ct.enabled=!1,ct.enableRotate=!1,ct.enableZoom=!1,ct.enablePan=!1):((Math.abs(E.position.x)>.1||Math.abs(E.position.z)>.1||Math.abs(E.position.y-Ft())>.1||Math.abs(ct.target.x)>.1||Math.abs(ct.target.y)>.1||Math.abs(ct.target.z)>.1)&&(E.position.set(0,Ft(),0),ct.target.set(0,0,0)),!F.current&&ct.update&&ct.update()),Se.render(Ot,E)},yt=function(){const st=window.innerWidth,Dt=window.innerHeight;Se.setSize(st,Dt),E.aspect=st/Dt;const Et=st<768,zt=st>Dt;Et?E.fov=zt?75:80:E.fov=60,mt.current||(E.position.y=Ft(),E.lookAt(0,0,0)),E.updateProjectionMatrix()};console.log("Initializing 3D scene"),F.current=lt(),console.log("Is mobile device:",F.current),F.current&&v(!0);const Ot=new rA;Ot.background=new Ce(0);const Wt=new I_(4210752,1.5);Ot.add(Wt);const K=new F_(16777215,1);if(K.position.set(1,1,1),Ot.add(K),console.log("Lighting set up"),!o.current){console.error("Mount ref is not available");return}const Se=new E0({antialias:!0,canvas:o.current});if(Se.setSize(window.innerWidth,window.innerHeight),Se.setPixelRatio(Math.min(window.devicePixelRatio,2)),Se.shadowMap.enabled=!0,Se.shadowMap.type=X_,console.log("Renderer set up"),F.current){console.log("Setting up orientation handling for mobile");const st=Dt=>{V.current={beta:Dt.beta,gamma:Dt.gamma},performance.now()%2e3<20&&console.log("Device orientation:",V.current),!x&&(Dt.beta!==null||Dt.gamma!==null)&&(console.log("Automatically activating gyroscope - received real data"),b(!0))};if(window.DeviceOrientationEvent)if(typeof window.DeviceOrientationEvent.requestPermission=="function"){console.log("iOS detected - will request permission on first interaction");const Dt=async()=>{console.log("Requesting iOS device orientation permission");try{const Et=await window.DeviceOrientationEvent.requestPermission();Et==="granted"?(console.log("Permission granted, adding orientation listener"),window.addEventListener("deviceorientation",st),b(!0)):console.log("Permission denied:",Et)}catch(Et){console.error("Error requesting permission:",Et)}};document.addEventListener("touchstart",()=>{Dt(),document.removeEventListener("touchstart",Dt)},{once:!0})}else console.log("Adding device orientation listener directly"),window.addEventListener("deviceorientation",st),b(!0)}const Ct=21,ne=2,Bt=3,Xt=2,Ft=(st=!1)=>{const Dt=window.innerWidth<768,Et=window.innerWidth>window.innerHeight,zt=Ct*Xt;let Pt=zt*1.5;return Dt&&(st||D)&&(Et?Pt=zt*1.6:Pt=zt*1.8),Dt?Et?Pt*.8:Pt*1.2:Pt};window.calculateOptimalCameraHeight=Ft;const L=Ft(),E=new Jn(60,window.innerWidth/window.innerHeight,.1,1e3);E.position.set(0,L,0),E.lookAt(0,0,0),console.log("Camera set up");const J=lt();let ct;J?(ct={target:new X(0,0,0),update:()=>{},enabled:!1,enableRotate:!1,enableZoom:!1,enablePan:!1,dispose:()=>{}},console.log("Mobile simplified controls set up")):(ct=new fA(E,Se.domElement),ct.enableDamping=!0,ct.dampingFactor=.1,ct.target.set(0,0,0),ct.update(),console.log("Desktop controls set up"));const vt=e&&I.current?I.current:Array(Ct).fill().map(()=>Array(Ct).fill(1));I.current=vt,window.MAZE_SIZE=Ct,window.WALL_THICKNESS=Xt,window.playerRef=G,window.mazeRef=I,window.isThirdPersonRef=mt,window.gameCamera=E,window.maze=vt,window.celebrateWin=()=>{it.current=!0,i(!0),l(!0),Nt()};const ut=new xs;Ot.add(ut),console.log("Maze group created"),T.current.mazeGroup=ut;const Vt=new ra({uniforms:{time:{value:0},baseColor:{value:new Ce(4482815)}},vertexShader:`
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
        `,side:Li});console.log("Wall material created");const Ut=(st,Dt)=>st>=0&&st<Ct&&Dt>=0&&Dt<Ct,Yt=(st,Dt)=>{const Et=[],zt=[[0,2],[2,0],[0,-2],[-2,0]];for(let Pt=zt.length-1;Pt>0;Pt--){const bt=Math.floor(Math.random()*(Pt+1));[zt[Pt],zt[bt]]=[zt[bt],zt[Pt]]}for(const[Pt,bt]of zt){const Jt=st+Pt,le=Dt+bt;Ut(Jt,le)&&vt[Jt][le]===1&&Et.push([Jt,le,Pt/2,bt/2])}return Et},ie=()=>{if(e&&I.current){console.log("Game has been won, preserving existing maze");return}console.log("Generating new maze");for(let bt=0;bt<Ct;bt++)for(let Jt=0;Jt<Ct;Jt++)vt[bt][Jt]=1;const st=[],Dt=1,Et=1;for(vt[Dt][Et]=0,st.push([Dt,Et]);st.length>0;){const[bt,Jt]=st[st.length-1],le=Yt(bt,Jt);if(le.length===0){st.pop();continue}const[De,ge,He,Ke]=le[Math.floor(Math.random()*le.length)];vt[De][ge]=0,vt[bt+He][Jt+Ke]=0,st.push([De,ge])}vt[0][1]=0,vt[Ct-1][Ct-2]=0,console.log("Maze generated with entrance at (0,1) and exit at ("+(Ct-1)+","+(Ct-2)+")");const zt=new Set,Pt=bt=>{const[Jt,le]=bt;if(Jt===Ct-2&&le===Ct-2)return!0;zt.add(`${Jt},${le}`);const De=[[0,1],[1,0],[0,-1],[-1,0]];for(const[ge,He]of De){const Ke=Jt+ge,Pe=le+He;if(Ut(Ke,Pe)&&vt[Ke][Pe]===0&&!zt.has(`${Ke},${Pe}`)&&Pt([Ke,Pe]))return!0}return!1};Pt([1,1])?console.log("Valid path found from start to exit"):(console.log("No path found from start to exit, regenerating maze"),ie()),I.current=vt};console.log("Maze generation function created");const se=()=>{if(!e||!I.current){for(console.log("Creating new walls for the maze");ut.children.length>0;){const st=ut.children[0];st.isGroup?st.children.forEach(Dt=>{Dt.geometry&&Dt.geometry.dispose(),Dt.material&&Dt.material.dispose()}):(st.geometry&&st.geometry.dispose(),st.material&&st.material.dispose()),ut.remove(st)}for(let st=0;st<Ct;st++)for(let Dt=0;Dt<Ct;Dt++)if(vt[st][Dt]===1){const Et=new Ga(Xt,Bt,Xt),zt=new $n(Et,Vt);if(zt.position.set((st-Ct/2)*Xt,Bt/2,(Dt-Ct/2)*Xt),ut.add(zt),st===0||st===Ct-1||Dt===0||Dt===Ct-1){if(st<Ct-1&&vt[st+1][Dt]===1){const Pt=new $n(new Ga(Xt,Bt,Xt),Vt);Pt.position.set((st-Ct/2+.5)*Xt,Bt/2,(Dt-Ct/2)*Xt),ut.add(Pt)}if(Dt<Ct-1&&vt[st][Dt+1]===1){const Pt=new $n(new Ga(Xt,Bt,Xt),Vt);Pt.position.set((st-Ct/2)*Xt,Bt/2,(Dt-Ct/2+.5)*Xt),ut.add(Pt)}}}}else console.log("Game has been won, preserving existing maze walls")};console.log("Wall creation function created"),T.current.generateMaze=ie,T.current.createWalls=se;const Mt=st=>{if(console.log("Setting initial player direction"),!st){console.error("Player mesh not provided to setInitialPlayerDirection");return}const Dt=1,Et=1,zt=[{dx:0,dz:1,name:"down",vector:new X(0,0,1)},{dx:1,dz:0,name:"right",vector:new X(1,0,0)},{dx:0,dz:-1,name:"up",vector:new X(0,0,-1)},{dx:-1,dz:0,name:"left",vector:new X(-1,0,0)}];console.log("Checking available directions from starting position:",Dt,Et);const Pt=zt.filter(bt=>{const Jt=Dt+bt.dx,le=Et+bt.dz;if(Jt===0&&le===1)return console.log(`Direction ${bt.name} leads to entrance, skipping`),!1;const De=Ut(Jt,le)&&vt[Jt][le]===0;return console.log(`Direction ${bt.name} leads to (${Jt}, ${le}): ${De?"valid":"invalid"}`),De});if(console.log("Valid directions:",Pt.map(bt=>bt.name)),Pt.length>0){const bt=Pt[0];console.log("Chosen direction:",bt.name),G.current.direction.copy(bt.vector);const Jt=Math.atan2(bt.vector.x,bt.vector.z);st.rotation.y=Jt,console.log("Set player rotation to:",Jt)}else console.log("No valid directions found, defaulting to down"),G.current.direction.set(0,0,1),st.rotation.y=0};T.current.setInitialPlayerDirection=Mt,e?console.log("Game has been won, preserving maze and player position"):(ie(),se(),console.log("Initial maze created"));const Re=new I_(16777215,.6);Ot.add(Re);const pe=new F_(16777215,1);pe.position.set(50,100,50),Ot.add(pe);const oe=new B_(4474111,2,150);oe.position.set(50,50,50),Ot.add(oe);const jt=new B_(4474111,2,150);jt.position.set(-50,50,-50),Ot.add(jt),console.log("Lights added");let kt=!1;const ce=performance.now(),P=1e3,Nt=()=>{console.log("Celebration function called - START");const st=2e3,Dt=new Oi,Et=new Float32Array(st*3),zt=new Float32Array(st*3);for(let ge=0;ge<st;ge++)Et[ge*3]=G.current.worldPosition.x,Et[ge*3+1]=G.current.worldPosition.y,Et[ge*3+2]=G.current.worldPosition.z,zt[ge*3]=Math.random(),zt[ge*3+1]=Math.random(),zt[ge*3+2]=Math.random();Dt.setAttribute("position",new pi(Et,3)),Dt.setAttribute("color",new pi(zt,3));const Pt=new T0({size:.5,vertexColors:!0,transparent:!0,opacity:1,blending:mh}),bt=new sA(Dt,Pt);Ot.add(bt),console.log("Particle system added to scene");const Jt=[];for(let ge=0;ge<st;ge++){const He=Math.random()*Math.PI*2,Ke=Math.acos(Math.random()*2-1),Pe=.05+Math.random()*.1;Jt.push(Math.sin(Ke)*Math.cos(He)*Pe,Math.sin(Ke)*Math.sin(He)*Pe,Math.cos(Ke)*Pe)}N.current=bt;const le=()=>{if(console.log("Update particles function called - frame"),!dt.current)return console.log("Game no longer in won state, cleaning up particles"),bt.parent&&(Ot.remove(bt),bt.geometry.dispose(),Pt.dispose()),N.current=null,nt.current=null,!1;const ge=bt.geometry.attributes.position.array;let He=!1;for(let Pe=0;Pe<st;Pe++){const Ue=Pe*3;ge[Ue]+=Jt[Ue],ge[Ue+1]+=Jt[Ue+1],ge[Ue+2]+=Jt[Ue+2],Jt[Ue+1]-=.001;const je=ge[Ue]-G.current.worldPosition.x,Wn=ge[Ue+1]-G.current.worldPosition.y,ti=ge[Ue+2]-G.current.worldPosition.z;Math.sqrt(je*je+Wn*Wn+ti*ti)<20&&(He=!0)}bt.geometry.attributes.position.needsUpdate=!0;const Ke=performance.now()-De;return Ke>1e3&&(Pt.opacity=Math.max(0,1-(Ke-1e3)/1e3)),!He||Ke>2e3?(console.log("Animation complete, cleaning up particles"),Ot.remove(bt),bt.geometry.dispose(),Pt.dispose(),N.current=null,nt.current=null,!1):!0},De=performance.now();return console.log("Setting updateParticles function"),nt.current=le,()=>{console.log("Cleanup function called"),bt.parent&&(Ot.remove(bt),bt.geometry.dispose(),Pt.dispose()),N.current=null,nt.current=null}},Gt=()=>{const st=new xs,Dt=new xc(Xt/2,16,16),Et=new oA({color:16776960}),zt=new $n(Dt,Et);return st.add(zt),st},qt=Gt();T.current.createPlayer=Gt;let U=null;if(e){for(let st=0;st<ut.children.length;st++){const Dt=ut.children[st];if(Dt.isGroup&&Dt.children.length>0&&Dt.children[0].geometry instanceof xc){U=Dt;break}}U&&(U.children.forEach(st=>{st.geometry&&st.geometry.dispose(),st.material&&st.material.dispose()}),ut.remove(U),console.log("Removed existing player from maze group"))}if(!e)qt.position.set((1-Ct/2)*Xt,Xt/2,(1-Ct/2)*Xt),G.current.mesh=qt,G.current.worldPosition.copy(qt.position),Mt(qt);else{if(it.current){const Dt=Ct-1,Et=Ct-2,zt=new X((Dt-Ct/2)*Xt,Xt/2,(Et-Ct/2)*Xt);console.log("Positioning player at exit:",zt),qt.position.copy(zt),G.current.worldPosition.copy(zt),G.current.position={x:Dt,z:Et}}else console.log("Using existing player position:",G.current.worldPosition),qt.position.copy(G.current.worldPosition);G.current.mesh=qt;const st=Math.atan2(G.current.direction.x,G.current.direction.z);qt.rotation.y=st}ut.add(qt),G.current.mesh=qt,console.log("Player created and added to maze group");const Lt=st=>{if(st.key.toLowerCase()==="v")return console.log("View toggle key pressed"),st.preventDefault(),st.stopPropagation(),st.stopImmediatePropagation(),h?(console.log("Transition already in progress, ignoring key press"),!1):(p(!0),d(Dt=>{const Et=!Dt;console.log("Switching to:",Et?"POV mode":"Top-down mode"),mt.current=Et;const zt=E.position.clone(),Pt=new X().copy(ct.target),bt=E.fov,Jt={x:ut.rotation.x,y:ut.rotation.y,z:ut.rotation.z},le=Et?new X(G.current.worldPosition.x,G.current.worldPosition.y+1.5,G.current.worldPosition.z):new X(0,Ft(),0),De=Et?new X(G.current.worldPosition.x+G.current.direction.x*Xt,G.current.worldPosition.y+1.5,G.current.worldPosition.z+G.current.direction.z*Xt):new X(0,0,0),ge=window.innerWidth<768,He=window.innerWidth>window.innerHeight;let Ke=Et?75:60;ge&&(Ke=Et||He?75:80);const Pe={x:0,y:0,z:0},Ue=qt.visible?1:0,je=Et?0:1;qt.visible=!0,qt.children.forEach(Q=>{Q.material&&(Q.material.transparent||(Q.material.transparent=!0),Q.material.opacity=Ue)}),F.current||(ct.enabled=!1);const Wn=1200;let ti=null;const ka=Q=>{const rt=Q-C,ot=Math.min(rt/Wn,1),It=(Qt=>Qt<.5?4*Qt*Qt*Qt:1-Math.pow(-2*Qt+2,3)/2)(ot);E.position.lerpVectors(zt,le,It);const $t=new X().lerpVectors(Pt,De,It);if(F.current||ct.target.copy($t),E.lookAt($t),E.fov=dr.lerp(bt,Ke,It),E.updateProjectionMatrix(),ut.rotation.x=dr.lerp(Jt.x,Pe.x,It),ut.rotation.y=dr.lerp(Jt.y,Pe.y,It),ut.rotation.z=dr.lerp(Jt.z,Pe.z,It),qt.children.forEach(Qt=>{Qt.material&&(Qt.material.opacity=dr.lerp(Ue,je,It))}),ot===1){cancelAnimationFrame(ti),qt.visible=!Et,qt.children.forEach(Qt=>{Qt.material&&(Qt.material.opacity=je,je===1&&(Qt.material.transparent=!1))}),!F.current&&!Et?(ct.enabled=!0,ct.enableRotate=!0,ct.enableZoom=!0,ct.enablePan=!0):(E.position.copy(le),E.lookAt(De)),p(!1),g(!0),setTimeout(()=>g(!1),1500);return}ti=requestAnimationFrame(ka)},C=performance.now();return ti=requestAnimationFrame(ka),Et}),!1)},xt=st=>{if(dt.current||!kt||h){console.log("Key ignored - Game won, initial rotation not done, or transition in progress");return}const Dt=st.key.toLowerCase();if(console.log("Key pressed:",Dt,"Current mode:",mt.current?"POV":"Top-down"),Dt==="v")return;st.preventDefault();const Et=G.current.position.x,zt=G.current.position.z;let Pt=Et,bt=zt,Jt=!1;const le=G.current.mesh;if(!le){console.error("Player mesh not found");return}if(mt.current){switch(console.log("Handling POV mode controls"),Dt){case"arrowup":case"w":console.log("Moving forward - Current position:",Et,zt),console.log("Current direction:",G.current.direction),Pt=Et+Math.round(G.current.direction.x),bt=zt+Math.round(G.current.direction.z),console.log("New position will be:",Pt,bt),Jt="move";break;case"arrowdown":case"s":console.log("Moving backward - Current position:",Et,zt),console.log("Current direction:",G.current.direction),Pt=Et-Math.round(G.current.direction.x),bt=zt-Math.round(G.current.direction.z),console.log("New position will be:",Pt,bt),Jt="move";break;case"arrowleft":case"a":console.log("Rotating left - Current direction:",G.current.direction),G.current.direction.applyAxisAngle(new X(0,1,0),Math.PI/2),console.log("New direction:",G.current.direction),Jt="rotate";break;case"arrowright":case"d":console.log("Rotating right - Current direction:",G.current.direction),G.current.direction.applyAxisAngle(new X(0,1,0),-Math.PI/2),console.log("New direction:",G.current.direction),Jt="rotate";break}if(Jt==="move")if(Ut(Pt,bt)&&vt[Pt][bt]===0){console.log("Movement is valid, updating positions"),G.current.position.x=Pt,G.current.position.z=bt;const De=new X((Pt-Ct/2)*Xt,Xt/2,(bt-Ct/2)*Xt);console.log("New world position:",De),G.current.worldPosition.copy(De),le.position.copy(De),console.log("Updated player mesh position to:",le.position),E.position.set(De.x,De.y+1.5,De.z),console.log("New camera position:",E.position);const ge=E.position.clone();if(ge.add(G.current.direction.clone().multiplyScalar(Xt)),E.lookAt(ge),console.log("Camera looking at:",ge),E.updateProjectionMatrix(),E.updateMatrixWorld(),Pt===Ct-1&&bt===Ct-2){it.current=!0,i(!0),l(!0);const He=Nt();return()=>{He&&He()}}}else console.log("Movement blocked - Out of bounds or wall:",Pt,bt);else if(Jt==="rotate"){console.log("Handling rotation");const De=Math.atan2(G.current.direction.x,G.current.direction.z);le.rotation.y=De,console.log("Updated player mesh rotation to:",De);const ge=E.position.clone();ge.add(G.current.direction.clone().multiplyScalar(Xt)),E.lookAt(ge),console.log("Camera looking at new direction:",ge),E.updateProjectionMatrix(),E.updateMatrixWorld()}}else{switch(console.log("Handling top-down mode controls"),Dt){case"arrowup":case"w":console.log("Moving up - Current position:",Et,zt),bt=zt-1,G.current.direction.set(0,0,-1);break;case"arrowdown":case"s":console.log("Moving down - Current position:",Et,zt),bt=zt+1,G.current.direction.set(0,0,1);break;case"arrowleft":case"a":console.log("Moving left - Current position:",Et,zt),Pt=Et-1,G.current.direction.set(-1,0,0);break;case"arrowright":case"d":console.log("Moving right - Current position:",Et,zt),Pt=Et+1,G.current.direction.set(1,0,0);break;default:return}if(console.log("Attempting to move to:",Pt,bt),console.log("Maze value at target position:",vt[Pt][bt]),console.log("Is in bounds:",Ut(Pt,bt)),Ut(Pt,bt)&&vt[Pt][bt]===0){console.log("Movement is valid, updating positions"),G.current.position.x=Pt,G.current.position.z=bt;const De=new X((Pt-Ct/2)*Xt,Xt/2,(bt-Ct/2)*Xt);G.current.worldPosition.copy(De),le.position.copy(De);const ge=Math.atan2(G.current.direction.x,G.current.direction.z);if(le.rotation.y=ge,Pt===Ct-1&&bt===Ct-2){it.current=!0,i(!0),l(!0);const He=Nt();return()=>{He&&He()}}}}};window.removeEventListener("keydown",Lt,!0),window.removeEventListener("keydown",xt),console.log("Attaching event listeners"),window.addEventListener("keydown",Lt,!0),window.addEventListener("keydown",xt),console.log("Event listeners attached");let Kt;return console.log("Starting animation"),gt(),window.addEventListener("resize",yt),()=>{console.log("Cleanup running"),window.removeEventListener("resize",yt),window.removeEventListener("keydown",Lt,!0),window.removeEventListener("keydown",xt),Kt&&cancelAnimationFrame(Kt),Ot.traverse(st=>{st.geometry&&st.geometry.dispose(),st.material&&(Array.isArray(st.material)?st.material.forEach(Dt=>Dt.dispose()):st.material.dispose())}),Se.dispose(),ct&&typeof ct.dispose=="function"&&ct.dispose()}}catch(gt){console.error("Error in setup:",gt)}},[]),Ae.useEffect(()=>{(()=>{lt()&&(!j()||w()&&!x)&&(console.log("Setting up touch controls for mobile"),B(!0))})()},[x]);const k=Ae.useRef(null),ft=Ae.useRef(null),Tt=Ae.useRef(null),Zt=Ae.useRef(null);return Ae.useEffect(()=>{if(!D)return;console.log("Setting up touch control listeners");const gt=ne=>{var Yt,ie;console.log(`Button pressed: ${ne}`);const Bt=window.MAZE_SIZE||21,Xt=window.WALL_THICKNESS||2,Ft=window.playerRef,L=(Yt=window.isThirdPersonRef)==null?void 0:Yt.current;if(!Ft||!Ft.current||!Ft.current.position){console.error("Player reference not available");return}const E=Ft.current.position.x,J=Ft.current.position.z,ct=Ft.current.mesh;console.log(`Attempting to move from (${E}, ${J}) in direction ${ne}`);const vt=(ie=window.mazeRef)==null?void 0:ie.current;if(!vt){console.error("Maze not accessible");return}const ut=(se,Mt)=>se>=0&&se<Bt&&Mt>=0&&Mt<Bt;let Vt=E,Ut=J;if(L)switch(ne){case"up":Vt=E+Math.round(Ft.current.direction.x),Ut=J+Math.round(Ft.current.direction.z);break;case"down":Vt=E-Math.round(Ft.current.direction.x),Ut=J-Math.round(Ft.current.direction.z);break;case"left":Ft.current.direction.applyAxisAngle(new X(0,1,0),Math.PI/2);const se=Math.atan2(Ft.current.direction.x,Ft.current.direction.z);ct.rotation.y=se;return;case"right":Ft.current.direction.applyAxisAngle(new X(0,1,0),-Math.PI/2);const Mt=Math.atan2(Ft.current.direction.x,Ft.current.direction.z);ct.rotation.y=Mt;return}else switch(ne){case"up":Ut=J-1,Ft.current.direction.set(0,0,-1);break;case"down":Ut=J+1,Ft.current.direction.set(0,0,1);break;case"left":Vt=E-1,Ft.current.direction.set(-1,0,0);break;case"right":Vt=E+1,Ft.current.direction.set(1,0,0);break}if(console.log(`Checking movement to (${Vt}, ${Ut})`),ut(Vt,Ut)&&vt[Vt][Ut]===0){console.log("Movement valid, updating position"),Ft.current.position.x=Vt,Ft.current.position.z=Ut;const se=new X((Vt-Bt/2)*Xt,Xt/2,(Ut-Bt/2)*Xt);Ft.current.worldPosition.copy(se),ct.position.copy(se);const Mt=Math.atan2(Ft.current.direction.x,Ft.current.direction.z);ct.rotation.y=Mt,Vt===Bt-1&&Ut===Bt-2&&(console.log("Victory triggered from touch control!"),window.celebrateWin())}else console.log("Movement invalid - wall or out of bounds")},yt=(ne,Bt)=>(ne.preventDefault(),ne.stopPropagation(),gt(Bt),!1),Ot=(ne,Bt)=>{if(!ne.current)return;const Xt=ne.current,Ft=ct=>yt(ct,Bt),L=ct=>ct.preventDefault(),E=ct=>yt(ct,Bt),J=ct=>yt(ct,Bt);return Xt.addEventListener("touchstart",Ft,{passive:!1}),Xt.addEventListener("touchend",L,{passive:!1}),Xt.addEventListener("mousedown",E),Xt.addEventListener("click",J),()=>{Xt.removeEventListener("touchstart",Ft),Xt.removeEventListener("touchend",L),Xt.removeEventListener("mousedown",E),Xt.removeEventListener("click",J)}},Wt=Ot(k,"up"),K=Ot(ft,"down"),Se=Ot(Tt,"left"),Ct=Ot(Zt,"right");return()=>{Wt&&Wt(),K&&K(),Se&&Se(),Ct&&Ct()}},[D]),Ae.useEffect(()=>{const gt=()=>{let Wt=document.querySelector('meta[name="viewport"]');Wt||(Wt=document.createElement("meta"),Wt.name="viewport",document.head.appendChild(Wt)),Wt.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"},yt=Wt=>{Wt.touches&&Wt.touches.length>1&&Wt.preventDefault()},Ot=Wt=>{Wt.preventDefault()};return gt(),document.addEventListener("touchmove",yt,{passive:!1}),document.addEventListener("touchstart",Ot,{passive:!1}),()=>{document.removeEventListener("touchmove",yt),document.removeEventListener("touchstart",Ot)}},[]),Ae.useEffect(()=>{if(!window.gameCamera||mt.current)return;const yt=setTimeout(()=>{const Ot=window.gameCamera;if(Ot&&!mt.current)if(typeof window.calculateOptimalCameraHeight=="function"){const Wt=window.calculateOptimalCameraHeight(D);Ot.position.y=Wt,Ot.updateProjectionMatrix(),console.log(`Adjusted camera height to ${Wt} for touch controls`)}else console.warn("calculateOptimalCameraHeight function not available globally")},100);return()=>clearTimeout(yt)},[D]),qe.jsxs(qe.Fragment,{children:[qe.jsx("canvas",{ref:o,style:{display:"block",width:"100vw",height:"100vh"}}),_&&qe.jsxs("div",{className:"permission-button-container",onClick:()=>console.log("Container clicked"),onTouchStart:()=>console.log("Container touch started"),children:[qe.jsx("button",{className:"permission-button",onClick:gt=>{gt.preventDefault(),gt.stopPropagation(),console.log("Permission button clicked"),setTimeout(()=>{ht()},10)},onTouchStart:gt=>{console.log("Button touch started"),gt.stopPropagation()},onTouchEnd:gt=>{console.log("Button touch ended"),gt.preventDefault(),gt.stopPropagation(),setTimeout(()=>{ht()},10)},children:"Enable Tilt Controls"}),qe.jsx("p",{className:"permission-text",children:"Tap to allow motion controls for moving the ball with your device"})]}),D&&qe.jsxs("div",{className:"touch-controls",children:[qe.jsx("div",{className:"touch-controls-row",children:qe.jsx("button",{ref:k,className:"touch-button up-button","data-direction":"up",children:"▲"})}),qe.jsxs("div",{className:"touch-controls-row",children:[qe.jsx("button",{ref:Tt,className:"touch-button left-button","data-direction":"left",children:"◀"}),qe.jsx("div",{className:"touch-button-spacer"}),qe.jsx("button",{ref:Zt,className:"touch-button right-button","data-direction":"right",children:"▶"})]}),qe.jsx("div",{className:"touch-controls-row",children:qe.jsx("button",{ref:ft,className:"touch-button down-button","data-direction":"down",children:"▼"})})]}),e&&qe.jsxs("div",{className:"victory-message",children:[qe.jsx("h1",{children:"You Won!"}),r&&qe.jsx("button",{onClick:$,children:"Play Again"})]}),m&&qe.jsx("div",{className:"view-mode-indicator",children:u?"First-Person View":"Top-Down View"}),R&&x&&qe.jsxs("div",{className:"gyroscope-indicator",children:[qe.jsx("div",{className:"gyroscope-icon",children:qe.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:qe.jsx("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"})})}),qe.jsx("span",{children:"Tilt to Move"})]})]})}FS.createRoot(document.getElementById("root")).render(qe.jsx(Ae.StrictMode,{children:qe.jsx(hA,{})}));
