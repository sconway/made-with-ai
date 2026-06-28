var wf=t=>{throw TypeError(t)};var $c=(t,e,n)=>e.has(t)||wf("Cannot "+n);var $=(t,e,n)=>($c(t,e,"read from private field"),n?n.call(t):e.get(t)),Ke=(t,e,n)=>e.has(t)?wf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Nt=(t,e,n,i)=>($c(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Jt=(t,e,n)=>($c(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Os=typeof self<"u"?self:{};function $p(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=Os,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function Cr(){throw Error("Invalid UTF8")}function Rf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let fo,Zc;const l_=typeof TextDecoder<"u";let u_;const h_=typeof TextEncoder<"u";function Zp(t){if(h_)t=(u_||(u_=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function Jp(t){Os.setTimeout((()=>{throw t}),0)}var zl,f_=$p(610401301,!1),Cf=$p(748402147,!0);function Pf(){var t=Os.navigator;return t&&(t=t.userAgent)?t:""}const Lf=Os.navigator;function Sc(t){return Sc[" "](t),t}zl=Lf&&Lf.userAgentData||null,Sc[" "]=function(){};const Qp={};let ba=null;function d_(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const u=s.charAt(c++),f=ba[u];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}em();let c=0;for(;;){const l=o(-1),u=o(0),f=o(64),h=o(64);if(h===64&&l===-1)break;a(l<<2|u>>4),f!=64&&(a(u<<4&240|f>>2),h!=64&&a(f<<6&192|h))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function em(){if(!ba){ba={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));Qp[n]=i;for(let r=0;r<i.length;r++){const s=i[r];ba[s]===void 0&&(ba[s]=r)}}}}var p_=typeof Uint8Array<"u",tm=!(!(f_&&zl&&zl.brands.length>0)&&(Pf().indexOf("Trident")!=-1||Pf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Df=/[-_.]/g,m_={"-":"+",_:"/",".":"="};function g_(t){return m_[t]||""}function nm(t){if(!tm)return d_(t);t=Df.test(t)?t.replace(Df,g_):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function th(t){return p_&&t!=null&&t instanceof Uint8Array}var Bs={};function $r(){return __||(__=new Si(null,Bs))}function nh(t){im(Bs);var e=t.g;return(e=e==null||th(e)?e:typeof e=="string"?nm(e):null)==null?e:t.g=e}var Si=class{h(){return new Uint8Array(nh(this)||0)}constructor(t,e){if(im(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let __,v_;function im(t){if(t!==Bs)throw Error("illegal external caller")}function rm(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Hl(t){return rm(t=Error(t),"warning"),t}function ks(t,e){if(t!=null){var n=v_??(v_={}),i=n[t]||0;i>=e||(n[t]=i+1,rm(t=Error(),"incident"),Jp(t))}}function Qs(){return typeof BigInt=="function"}var ea=typeof Symbol=="function"&&typeof Symbol()=="symbol";function wi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var x_=wi("jas",void 0,!0),If=wi(void 0,"0di"),pa=wi(void 0,"1oa"),Ln=wi(void 0,Symbol()),S_=wi(void 0,"0ub"),M_=wi(void 0,"0ubs"),Wl=wi(void 0,"0ubsb"),E_=wi(void 0,"0actk"),Gs=wi("m_m","Pa",!0),Uf=wi();const sm={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},am=Object.defineProperties,ye=ea?x_:"Ga";var ns;const Nf=[];function eo(t,e){ea||ye in t||am(t,sm),t[ye]|=e}function qt(t,e){ea||ye in t||am(t,sm),t[ye]=e}function to(t){return eo(t,34),t}function Ia(t){return eo(t,8192),t}qt(Nf,7),ns=Object.freeze(Nf);var Vs={};function In(t,e){return e===void 0?t.h!==Zr&&!!(2&(0|t.v[ye])):!!(2&e)&&t.h!==Zr}const Zr={};function ih(t,e){if(t!=null){if(typeof t=="string")t=t?new Si(t,Bs):$r();else if(t.constructor!==Si)if(th(t))t=t.length?new Si(new Uint8Array(t),Bs):$r();else{if(!e)throw Error();t=void 0}}return t}class Ff{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var y_=Object.freeze({});function om(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var cm={};function ta(t){return 128&t?cm:void 0}function Mc(t){return t.Na=!0,t}var b_=Mc((t=>typeof t=="number")),Of=Mc((t=>typeof t=="string")),T_=Mc((t=>typeof t=="boolean")),Ec=typeof Os.BigInt=="function"&&typeof Os.BigInt(0)=="bigint";function Dn(t){var e=t;if(Of(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(b_(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Ec?BigInt(t):t=T_(t)?t?"1":"0":Of(t)?t.trim()||"0":String(t)}var Xl=Mc((t=>Ec?t>=w_&&t<=C_:t[0]==="-"?Bf(t,A_):Bf(t,R_)));const A_=Number.MIN_SAFE_INTEGER.toString(),w_=Ec?BigInt(Number.MIN_SAFE_INTEGER):void 0,R_=Number.MAX_SAFE_INTEGER.toString(),C_=Ec?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Bf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const P_=typeof Uint8Array.prototype.slice=="function";let L_,Et=0,Bt=0;function kf(t){const e=t>>>0;Et=e,Bt=(t-e)/4294967296>>>0}function zs(t){if(t<0){kf(-t);const[e,n]=ah(Et,Bt);Et=e>>>0,Bt=n>>>0}else kf(t)}function rh(t){const e=L_||(L_=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Bt=0,Et=e.getUint32(0,!0)}function lm(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Ua(t,e)}function D_(t,e){return Dn(Qs()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Ua(t,e))}function um(t,e){return Qs()?Dn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Dn(sh(t,e))}function Ua(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Qs()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Gf(n)+Gf(t));return n}function Gf(t){return t=String(t),"0000000".slice(t.length)+t}function sh(t,e){if(2147483648&e)if(Qs())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=ah(t,e);t="-"+Ua(n,i)}else t=Ua(t,e);return t}function yc(t){if(t.length<16)zs(Number(t));else if(Qs())t=BigInt(t),Et=Number(t&BigInt(4294967295))>>>0,Bt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Bt=Et=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Bt*=1e6,Et=1e6*Et+s,Et>=4294967296&&(Bt+=Math.trunc(Et/4294967296),Bt>>>=0,Et>>>=0)}if(e){const[i,r]=ah(Et,Bt);Et=i,Bt=r}}}function ah(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function ii(t){return Array.prototype.slice.call(t)}const no=typeof BigInt=="function"?BigInt.asIntN:void 0,I_=typeof BigInt=="function"?BigInt.asUintN:void 0,Jr=Number.isSafeInteger,bc=Number.isFinite,Hs=Math.trunc,U_=Dn(0);function Ta(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function _i(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Na(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function hm(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const N_=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function io(t){switch(typeof t){case"bigint":return!0;case"number":return bc(t);case"string":return N_.test(t);default:return!1}}function na(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return bc(t)?0|t:void 0}function fm(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return bc(t)?t>>>0:void 0}function dm(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(yc(t),sh(Et,Bt))}function oh(t){if(t=Hs(t),!Jr(t)){zs(t);var e=Et,n=Bt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=lm(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function pm(t){var e=Hs(Number(t));return Jr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),dm(t))}function mm(t){var e=Hs(Number(t));return Jr(e)?Dn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Qs()?Dn(no(64,BigInt(t))):Dn(dm(t)))}function gm(t){return Jr(t)?t=Dn(oh(t)):(t=Hs(t),Jr(t)?t=String(t):(zs(t),t=sh(Et,Bt)),t=Dn(t)),t}function nc(t){const e=typeof t;return t==null?t:e==="bigint"?Dn(no(64,t)):io(t)?e==="string"?mm(t):gm(t):void 0}function _m(t){if(typeof t!="string")throw Error();return t}function ro(t){if(t!=null&&typeof t!="string")throw Error();return t}function en(t){return t==null||typeof t=="string"?t:void 0}function ch(t,e,n,i){return t!=null&&t[Gs]===Vs?t:Array.isArray(t)?((i=(n=0|t[ye])|32&i|2&i)!==n&&qt(t,i),new e(t)):(n?2&i?((t=e[If])||(to((t=new e).v),t=e[If]=t),e=t):e=new e:e=void 0,e)}function F_(t,e,n){if(e)e:{if(!io(e=t))throw Hl("int64");switch(typeof e){case"string":e=mm(e);break e;case"bigint":e=Dn(no(64,e));break e;default:e=gm(e)}}else e=nc(t);return(t=e)==null?n?U_:void 0:t}const O_={};let B_=(function(){try{return Sc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Jc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const k_=B_?(Object.setPrototypeOf(Jc.prototype,Map.prototype),Object.defineProperties(Jc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Jc):class extends Map{constructor(){super()}};function Vf(t){return t}function Qc(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var ji=class extends k_{constructor(t,e,n=Vf,i=Vf){super(),this.J=0|t[ye],this.K=e,this.S=n,this.fa=this.K?G_:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return Ia(Array.from(super.entries(),t))}clear(){Qc(this),super.clear()}delete(t){return Qc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new Ff(t,V_,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new Ff(t,ji.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Qc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function G_(t,e,n,i,r,s){return t=ch(t,i,n,s),r&&(t=uh(t)),t}function V_(t){return[t,this.get(t)]}let z_;function zf(){return z_||(z_=new ji(to([]),void 0,void 0,void 0,O_))}function Tc(t){return Ln?t[Ln]:void 0}function ic(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}ji.prototype.toJSON=void 0;var ql=class{};const H_={Ka:!0};function W_(t,e){e<100||ks(M_,1)}function Ac(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Ln;!r&&ea&&a&&(s=t[a])&&ic(s,W_),a=[];var o=t.length;let c;s=4294967295;let l=!1;const u=!!(64&e),f=u?128&e?0:-1:void 0;1&e||(c=o&&t[o-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--o:c=void 0,!u||128&e||r||(l=!0,s=s-f+f)),e=void 0;for(var h=0;h<o;h++){let d=t[h];if(d!=null&&(d=n(d,i))!=null)if(u&&h>=s){const _=h-f;(e??(e={}))[_]=d}else a[h]=d}if(c)for(let d in c){if((o=c[d])==null||(o=n(o,i))==null)continue;let _;h=+d,u&&!Number.isNaN(h)&&(_=h+f)<s?a[_]=o:(e??(e={}))[d]=o}return e&&(l?a.push(e):a[s]=e),r&&Ln&&(t=Tc(t))&&t instanceof ql&&(a[Ln]=(function(d){const _=new ql;return ic(d,((E,p,m)=>{_[p]=ii(m)})),_.da=d.da,_})(t)),a}function X_(t){return t[0]=Fa(t[0]),t[1]=Fa(t[1]),t}function Fa(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Xl(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[ye];return t.length===0&&1&e?void 0:Ac(t,e,Fa)}if(t!=null&&t[Gs]===Vs)return vm(t);if(t instanceof Si){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(tm){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),em(),n=Qp[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let l=0,u=0;for(;l<e.length-2;l+=3){var s=e[l],a=e[l+1],o=e[l+2],c=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=c+s+a+o}switch(c=0,o=r,e.length-l){case 2:o=n[(15&(c=e[l+1]))<<2]||r;case 1:e=e[l],i[u]=n[e>>2]+n[(3&e)<<4|c>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof ji?t=t.size!==0?t.V(X_):void 0:void 0}return t}let q_,Y_;function vm(t){return Ac(t=t.v,0|t[ye],Fa)}function Xr(t,e){return xm(t,e[0],e[1])}function xm(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[ye],Cf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Cf)throw Error("carr");ks(E_,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&qt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(s=+o)<a&&(n[s+e]=c[o],delete c[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return qt(t,64|r|i),t}function K_(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[ye];return t.length===0&&1&n?void 0:Hf(t,n,e)}if(t!=null&&t[Gs]===Vs)return Wf(t);if(t instanceof ji){if(2&(e=t.J))return t;if(!t.size)return;if(n=to(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Gs]===Vs?Wf(r):Array.isArray(r)?Hf(r,0|r[ye],!!(32&e)):void 0,i[1]=r}return n}return t instanceof Si?t:void 0}function Hf(t,e,n){return 2&e||(!n||4096&e||16&e?t=ia(t,e,!1,n&&!(16&e)):(eo(t,34),4&e&&Object.freeze(t))),t}function lh(t,e,n){return t=new t.constructor(e),n&&(t.h=Zr),t.m=Zr,t}function Wf(t){const e=t.v,n=0|e[ye];return In(t,n)?t:hh(t,e,n)?lh(t,e):ia(e,n)}function ia(t,e,n,i){return i??(i=!!(34&e)),t=Ac(t,e,K_,i),i=32,n&&(i|=2),qt(t,e=16769217&e|i),t}function uh(t){const e=t.v,n=0|e[ye];return In(t,n)?hh(t,e,n)?lh(t,e,!0):new t.constructor(ia(e,n,!1)):t}function ra(t){if(t.h!==Zr)return!1;var e=t.v;return eo(e=ia(e,0|e[ye]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function sa(t){if(!ra(t)&&In(t,0|t.v[ye]))throw Error()}function is(t,e){e===void 0&&(e=0|t[ye]),32&e&&!(4096&e)&&qt(t,4096|e)}function hh(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(qt(e,2|n),t.h=Zr,!0)}const Sm=Dn(0),sr={};function yt(t,e,n,i,r){if((e=$i(t.v,e,n,r))!==null||i&&t.m!==Zr)return e}function $i(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function ut(t,e,n,i){sa(t),Wt(t=t.v,0|t[ye],e,n,i)}function Wt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??(e=0|t[ye]))>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Or(){return y_===void 0?2:4}function Br(t,e,n,i,r){let s=t.v,a=0|s[ye];i=In(t,a)?1:i,r=!!r||i===3,i===2&&ra(t)&&(s=t.v,a=0|s[ye]);let o=(t=fh(s,e))===ns?7:0|t[ye],c=dh(o,a);var l=!(4&c);if(l){4&c&&(t=ii(t),o=0,c=Yr(c,a),a=Wt(s,a,e,t));let u=0,f=0;for(;u<t.length;u++){const h=n(t[u]);h!=null&&(t[f++]=h)}f<u&&(t.length=f),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==o&&(qt(t,c),2&c&&Object.freeze(t)),Mm(t,c,s,a,e,i,l,r)}function Mm(t,e,n,i,r,s,a,o){let c=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?qr(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&qt(t,e),Object.freeze(t)):(s===2&&qr(e)&&(t=ii(t),c=0,e=Yr(e,i),i=Wt(n,i,r,t)),qr(e)||(o||(e|=16),e!==c&&qt(t,e))),2&e||!(4096&e||16&e)||is(n,i),t}function fh(t,e,n){return t=$i(t,e,n),Array.isArray(t)?t:ns}function dh(t,e){return 2&e&&(t|=2),1|t}function qr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Em(t){return ih(t,!0)}function ym(t){t=ii(t);for(let e=0;e<t.length;e++){const n=t[e]=ii(t[e]);Array.isArray(n[1])&&(n[1]=to(n[1]))}return Ia(t)}function dr(t,e,n,i){sa(t),Wt(t=t.v,0|t[ye],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function aa(t,e,n){if(2&e)throw Error();const i=ta(e);let r=fh(t,n,i),s=r===ns?7:0|r[ye],a=dh(s,e);return(2&a||qr(a)||16&a)&&(a===s||qr(a)||qt(r,a),r=ii(r),s=0,a=Yr(a,e),Wt(t,e,n,r,i)),a&=-13,a!==s&&qt(r,a),r}function el(t,e){var n=p0;return mh(ph(t=t.v),t,void 0,n)===e?e:-1}function ph(t){if(ea)return t[pa]??(t[pa]=new Map);if(pa in t)return t[pa];const e=new Map;return Object.defineProperty(t,pa,{value:e}),e}function bm(t,e,n,i,r){const s=ph(t),a=mh(s,t,e,n,r);return a!==i&&(a&&(e=Wt(t,e,a,void 0,r)),s.set(n,i)),e}function mh(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];$i(e,o,r)!=null&&(s!==0&&(n=Wt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function gh(t,e,n){let i=0|t[ye];const r=ta(i),s=$i(t,n,r);let a;if(s!=null&&s[Gs]===Vs){if(!In(s))return ra(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[ye];2&o&&(a=ia(a,o))}return a=Xr(a,e),a!==s&&Wt(t,i,n,a,r),a}function Tm(t,e,n,i,r){let s=!1;if((i=$i(t,i,r,(a=>{const o=ch(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!In(i)&&is(t,e),i}function nt(t,e,n,i){let r=t.v,s=0|r[ye];if((e=Tm(r,s,e,n,i))==null)return e;if(s=0|r[ye],!In(t,s)){const a=uh(e);a!==e&&(ra(t)&&(r=t.v,s=0|r[ye]),s=Wt(r,s,n,e=a,i),is(r,s))}return e}function Am(t,e,n,i,r,s,a,o){var c=In(t,n);s=c?1:s,a=!!a||s===3,c=o&&!c,(s===2||c)&&ra(t)&&(n=0|(e=t.v)[ye]);var l=(t=fh(e,r))===ns?7:0|t[ye],u=dh(l,n);if(o=!(4&u)){var f=t,h=n;const d=!!(2&u);d&&(h|=2);let _=!d,E=!0,p=0,m=0;for(;p<f.length;p++){const M=ch(f[p],i,!1,h);if(M instanceof i){if(!d){const b=In(M);_&&(_=!b),E&&(E=b)}f[m++]=M}}m<p&&(f.length=m),u|=4,u=E?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==l&&(qt(t,u),2&u&&Object.freeze(t)),c&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(qr(u)&&(t=ii(t),u=Yr(u,n),n=Wt(e,n,r,t)),i=t,c=u,l=0;l<i.length;l++)(f=i[l])!==(u=uh(f))&&(i[l]=u);c|=8,qt(t,u=c=i.length?4096|c:-4097&c)}return Mm(t,u,e,n,r,s,o,a)}function Zi(t,e,n){const i=t.v;return Am(t,i,0|i[ye],e,n,Or(),!1,!0)}function wm(t){return t==null&&(t=void 0),t}function Pe(t,e,n,i,r){return ut(t,n,i=wm(i),r),i&&!In(i)&&is(t.v),t}function Ra(t,e,n,i){e:{var r=i=wm(i);sa(t);const s=t.v;let a=0|s[ye];if(r==null){const o=ph(s);if(mh(o,s,a,n)!==e)break e;o.set(n,0)}else a=bm(s,a,n,e);Wt(s,a,e,r)}i&&!In(i)&&is(t.v)}function Yr(t,e){return-273&(2&e?2|t:-3&t)}function _h(t,e,n,i){var r=i;sa(t),t=Am(t,i=t.v,0|i[ye],n,e,2,!0),r=r??new n,t.push(r),e=n=t===ns?7:0|t[ye],(r=In(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&qt(t,n),r||is(i)}function qn(t,e,n){return na(yt(t,e,void 0,n))}function Ft(t,e){return yt(t,e,void 0,void 0,_i)??0}function Ji(t,e,n){if(n!=null){if(typeof n!="number"||!bc(n))throw Hl("int32");n|=0}ut(t,e,n)}function Ce(t,e,n){ut(t,e,Ta(n))}function Un(t,e,n){dr(t,e,ro(n),"")}function rc(t,e,n){{sa(t);const a=t.v;let o=0|a[ye];if(n==null)Wt(a,o,e);else{var i=t=n===ns?7:0|n[ye],r=qr(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=ii(n),i=0,t=Yr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const c=n[r],l=_m(c);Object.is(c,l)||(s&&(n=ii(n),i=0,t=Yr(t,o),s=!1),n[r]=l)}t!==i&&(s&&(n=ii(n),t=Yr(t,o)),qt(n,t)),Wt(a,o,e,n)}}}function wc(t,e,n){sa(t),Br(t,e,en,2,!0).push(_m(n))}var cs=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function vh(t,e){if(typeof t=="string")return new cs(nm(t),e);if(Array.isArray(t))return new cs(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new cs(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new cs(t,!1);if(t.constructor===Si)return e=nh(t)||new Uint8Array(0),new cs(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new cs(t,!1);throw Error()}function xh(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Kr(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Sh(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Kr(t,n),!!(127&e)}throw Error()}function yr(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Kr(t,n),r}function bi(t){return yr(t)>>>0}function sc(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Kr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function j_(t){return yr(t)}function Kr(t,e){if(t.g=e,e>t.l)throw Error()}function Rm(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Cm(t,e){if(e==0)return $r();var n=Rm(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):P_?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?$r():new Si(n,Bs)}var Xf=[];function Pm(t,e,n,i){if(ac.length){const r=ac.pop();return r.o(i),r.g.init(t,e,n,i),r}return new $_(t,e,n,i)}function Lm(t){t.g.clear(),t.l=-1,t.h=-1,ac.length<100&&ac.push(t)}function Dm(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=bi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Xo(t){switch(t.h){case 0:t.h!=0?Xo(t):Sh(t.g);break;case 1:Kr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Xo(t);else{var e=bi(t.g);Kr(t=t.g,t.g+e)}break;case 5:Kr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Dm(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Xo(t)}break;default:throw Error()}}function so(t,e,n){const i=t.g.l;var r=bi(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function Mh(t){var e=bi(t.g),n=Rm(t=t.g,e);if(t=t.h,l_){var i,r=t;(i=Zc)||(i=Zc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(fo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),fo=!0}catch{fo=!1}}throw!fo&&(Zc=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?Cr():(o=t[s++],a<194||(192&o)!=128?(s--,Cr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?Cr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,Cr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?Cr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Cr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Cr(),n.length>=8192&&(c=Rf(c,n),n.length=0)}s=Rf(c,n)}return s}function Im(t){const e=bi(t.g);return Cm(t.g,e)}function Rc(t,e,n){var i=bi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var $_=class{constructor(t,e,n,i){if(Xf.length){const r=Xf.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:c=!1}={}){this.Y=o,this.ea=c,r&&(r=vh(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},ac=[];function qf(t){return t?/^\d+$/.test(t)?(yc(t),new Yl(Et,Bt)):null:Z_||(Z_=new Yl(0,0))}var Yl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Z_;function Yf(t){return t?/^-?\d+$/.test(t)?(yc(t),new Kl(Et,Bt)):null:J_||(J_=new Kl(0,0))}var Kl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let J_;function Cs(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function oa(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Cc(t,e){if(e>=0)oa(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Eh(t){var e=Et;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Ws(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Yn(t,e,n){oa(t.g,8*e+n)}function yh(t,e){return Yn(t,e,2),e=t.g.end(),Ws(t,e),e.push(t.h),e}function bh(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Pc(t,e,n){Yn(t,e,2),oa(t.g,n.length),Ws(t,t.g.end()),Ws(t,n)}function oc(t,e,n,i){n!=null&&(e=yh(t,e),i(n,t),bh(t,e))}function Ri(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Th=Ri(),Um=Ri(),Ah=Ri(),wh=Ri(),Rh=Ri(),Nm=Ri(),Q_=Ri(),Lc=Ri(),Fm=Ri(),Om=Ri();function Ci(t,e,n){var i=t.v;Ln&&Ln in i&&(i=i[Ln])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var be=class{constructor(t,e){this.v=xm(t,e,void 0,2048)}toJSON(){return vm(this)}j(){var r;var t=U1,e=this.v,n=t.g,i=Ln;if(ea&&i&&((r=e[i])==null?void 0:r[n])!=null&&ks(S_,3),e=t.g,Uf&&Ln&&Uf===void 0&&(i=(n=this.v)[Ln])&&(i=i.da))try{i(n,e,H_)}catch(s){Jp(s)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[ye];return hh(this,t,e)?lh(this,t,!0):new this.constructor(ia(t,e,!1))}};be.prototype[Gs]=Vs,be.prototype.toString=function(){return this.v.toString()};var ca=class{constructor(t,e,n){this.g=t,this.h=e,t=Th,this.l=!!t&&n===t||!1}};function Dc(t,e){return new ca(t,e,Th)}function Bm(t,e,n,i,r){oc(t,n,zm(e,i),r)}const e1=Dc((function(t,e,n,i,r){return t.h===2&&(so(t,gh(e,i,n),r),!0)}),Bm),t1=Dc((function(t,e,n,i,r){return t.h===2&&(so(t,gh(e,i,n),r),!0)}),Bm);var Ic=Symbol(),Uc=Symbol(),jl=Symbol(),Kf=Symbol(),jf=Symbol();let km,Gm;function rs(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(f){switch(typeof f){case"boolean":return q_||(q_=[0,void 0,!0]);case"number":return f>0?void 0:f===0?Y_||(Y_=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,km??(km=s),Gm??(Gm=i[a+1]),s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let f;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof ca?f=s:(f=e1,a--),f==null?void 0:f.l){s=i[++a],l=i;var u=a;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);c<u;c++){const h=o[c];l?n(r,c,f,l,h):e(r,c,f,h)}}return i[t]=r}function Vm(t){return Array.isArray(t)?t[0]instanceof ca?t:[t1,t]:[t,void 0]}function zm(t,e){return t instanceof be?t.v:Array.isArray(t)?Xr(t,e):void 0}function Ch(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Ph(t,e,n,i,r){const s=n.g;let a,o;t[e]=(c,l,u)=>s(c,l,u,o||(o=rs(Uc,Ch,Ph,i).T),a||(a=Lh(i)),r)}function Lh(t){let e=t[jl];if(e!=null)return e;const n=rs(Uc,Ch,Ph,t);return e=n.ma?(i,r)=>km(i,r,n):(i,r)=>{for(;Dm(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=i1(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,Xo(o),o.ha)var c=void 0;else c=o.g.g-a,o.g.g=a,c=Cm(o.g,c);a=void 0,o=i,c&&((a=o[Ln]??(o[Ln]=new ql))[s]??(a[s]=[])).push(c)}}return(i=Tc(i))&&(i.da=n.qa[jf]),!0},t[jl]=e,t[jf]=n1.bind(t),e}function n1(t,e,n,i){var r=this[Uc];const s=this[jl],a=Xr(void 0,r.T),o=Tc(t);if(o){var c=!1,l=r.ba;if(l){if(r=(u,f,h)=>{if(h.length!==0)if(l[f])for(const d of h){u=Pm(d);try{c=!0,s(a,u)}finally{Lm(u)}}else i==null||i(t,f,h)},e==null)ic(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(c){let u=0|t[ye];if(2&u&&2048&u&&!(n!=null&&n.Ka))throw Error();const f=ta(u),h=(d,_)=>{if($i(t,d,f)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}_!=null&&(u=Wt(t,u,d,_,f)),delete o[d]};e==null?om(a,0|a[ye],((d,_)=>{h(d,_)})):h(e,$i(a,e,f))}}}}function i1(t){const e=(t=Vm(t))[0].g;if(t=t[1]){const n=Lh(t),i=rs(Uc,Ch,Ph,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function Nc(t,e,n){t[e]=n.h}function Fc(t,e,n,i){let r,s;const a=n.h;t[e]=(o,c,l)=>a(o,c,l,s||(s=rs(Ic,Nc,Fc,i).T),r||(r=Hm(i)))}function Hm(t){let e=t[Kf];if(!e){const n=rs(Ic,Nc,Fc,t);e=(i,r)=>Wm(i,r,n),t[Kf]=e}return e}function Wm(t,e,n){om(t,0|t[ye],((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ba)&&(c=c[o])){var l=(c=Vm(c))[0].h;if(c=c[1]){const u=Hm(c),f=rs(Ic,Nc,Fc,c).T;c=a.ma?Gm(f,u):(h,d,_)=>l(h,d,_,f,u)}else c=l;return a[o]=c}})(n,i);s?s(e,r,i):i<500||ks(Wl,3)}})),(t=Tc(t))&&ic(t,((i,r,s)=>{for(Ws(e,e.g.end()),i=0;i<s.length;i++)Ws(e,nh(s[i])||new Uint8Array(0))}))}const r1=Dn(0);function la(t,e){if(Array.isArray(e)){var n=0|e[ye];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&qt(e,t),2&t&&Object.freeze(e),e}}function hn(t,e,n){return new ca(t,e,n)}function ua(t,e,n){return new ca(t,e,n)}function fn(t,e,n){Wt(t,0|t[ye],e,n,ta(0|t[ye]))}var s1=Dc((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=ii(t=so(t,Xr([void 0,void 0],i),r)),r=ta(i=0|e[ye]),2&i)throw Error();let s=$i(e,n,r);if(s instanceof ji)(2&s.J)!=0?(s=s.V(),s.push(t),Wt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[ye];8192&a||qt(s,a|=8192),2&a&&(s=ym(s),Wt(e,i,n,s,r)),s.push(t)}else Wt(e,i,n,Ia([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof ji)e.forEach(((s,a)=>{oc(t,n,Xr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&oc(t,n,Xr(a,i),r)}Ia(e)}}));function Xm(t,e,n){(e=_i(e))!=null&&(Yn(t,n,5),t=t.g,rh(e),Eh(t))}function qm(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(no(64,i));if(io(i)){if(r==="string")return pm(i);if(r==="number")return oh(i)}})(e),e!=null&&(typeof e=="string"&&Yf(e),e!=null))switch(Yn(t,n,0),typeof e){case"number":t=t.g,zs(e),Cs(t,Et,Bt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Kl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Cs(t.g,n.h,n.g);break;default:n=Yf(e),Cs(t.g,n.h,n.g)}}function Ym(t,e,n){(e=na(e))!=null&&e!=null&&(Yn(t,n,0),Cc(t.g,e))}function Km(t,e,n){(e=hm(e))!=null&&(Yn(t,n,0),t.g.g.push(e?1:0))}function jm(t,e,n){(e=en(e))!=null&&Pc(t,n,Zp(e))}function $m(t,e,n,i,r){oc(t,n,zm(e,i),r)}function Zm(t,e,n){(e=e==null||typeof e=="string"||e instanceof Si?e:void 0)!=null&&Pc(t,n,vh(e,!0).buffer)}function Jm(t,e,n){(e=fm(e))!=null&&e!=null&&(Yn(t,n,0),oa(t.g,e))}function Qm(t,e,n){return(t.h===5||t.h===2)&&(e=aa(e,0|e[ye],n),t.h==2?Rc(t,sc,e):e.push(sc(t.g)),!0)}var kt=hn((function(t,e,n){return t.h===5&&(fn(e,n,sc(t.g)),!0)}),Xm,Lc),a1=ua(Qm,(function(t,e,n){if((e=la(_i,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Yn(i,r,5),i=i.g,rh(s),Eh(i))}}),Lc),Dh=ua(Qm,(function(t,e,n){if((e=la(_i,e))!=null&&e.length){Yn(t,n,2),oa(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,rh(e[i]),Eh(n)}}),Lc),o1=hn((function(t,e,n){return t.h===5&&(fn(e,n,(t=sc(t.g))===0?void 0:t),!0)}),Xm,Lc),br=hn((function(t,e,n){return t.h!==0?t=!1:(fn(e,n,xh(t.g,um)),t=!0),t}),qm,Nm),tl=hn((function(t,e,n){return t.h!==0?e=!1:(fn(e,n,(t=xh(t.g,um))===r1?void 0:t),e=!0),e}),qm,Nm),c1=hn((function(t,e,n){return t.h!==0?t=!1:(fn(e,n,xh(t.g,D_)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(I_(64,i));if(io(i)){if(r==="string")return r=Hs(Number(i)),Jr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(yc(i),i=Ua(Et,Bt))),i;if(r==="number")return(i=Hs(i))>=0&&Jr(i)||(zs(i),i=lm(Et,Bt)),i}})(e),e!=null&&(typeof e=="string"&&qf(e),e!=null))switch(Yn(t,n,0),typeof e){case"number":t=t.g,zs(e),Cs(t,Et,Bt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Yl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Cs(t.g,n.h,n.g);break;default:n=qf(e),Cs(t.g,n.h,n.g)}}),Q_),Ht=hn((function(t,e,n){return t.h===0&&(fn(e,n,yr(t.g)),!0)}),Ym,wh),ao=ua((function(t,e,n){return(t.h===0||t.h===2)&&(e=aa(e,0|e[ye],n),t.h==2?Rc(t,yr,e):e.push(yr(t.g)),!0)}),(function(t,e,n){if((e=la(na,e))!=null&&e.length){n=yh(t,n);for(let i=0;i<e.length;i++)Cc(t.g,e[i]);bh(t,n)}}),wh),As=hn((function(t,e,n){return t.h===0&&(fn(e,n,(t=yr(t.g))===0?void 0:t),!0)}),Ym,wh),bt=hn((function(t,e,n){return t.h===0&&(fn(e,n,Sh(t.g)),!0)}),Km,Um),jr=hn((function(t,e,n){return t.h===0&&(fn(e,n,(t=Sh(t.g))===!1?void 0:t),!0)}),Km,Um),on=ua((function(t,e,n){return t.h===2&&(t=Mh(t),aa(e,0|e[ye],n).push(t),!0)}),(function(t,e,n){if((e=la(en,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&Pc(i,r,Zp(s))}}),Ah),pr=hn((function(t,e,n){return t.h===2&&(fn(e,n,(t=Mh(t))===""?void 0:t),!0)}),jm,Ah),dt=hn((function(t,e,n){return t.h===2&&(fn(e,n,Mh(t)),!0)}),jm,Ah),Zt=(function(t,e,n=Th){return new ca(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Xr(void 0,i),aa(e,0|e[ye],n).push(i),so(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)$m(t,e[s],n,i,r);1&(t=0|e[ye])||qt(e,1|t)}})),vt=Dc((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[ye];return bm(e,a,s,n,ta(a)),so(t,e=gh(e,i,n),r),!0}),$m),e0=hn((function(t,e,n){return t.h===2&&(fn(e,n,Im(t)),!0)}),Zm,Fm),l1=ua((function(t,e,n){return(t.h===0||t.h===2)&&(e=aa(e,0|e[ye],n),t.h==2?Rc(t,bi,e):e.push(bi(t.g)),!0)}),(function(t,e,n){if((e=la(fm,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Yn(i,r,0),oa(i.g,s))}}),Rh),u1=hn((function(t,e,n){return t.h===0&&(fn(e,n,(t=bi(t.g))===0?void 0:t),!0)}),Jm,Rh),ln=hn((function(t,e,n){return t.h===0&&(fn(e,n,yr(t.g)),!0)}),(function(t,e,n){(e=na(e))!=null&&(e=parseInt(e,10),Yn(t,n,0),Cc(t.g,e))}),Om);class h1{constructor(e,n){var i=On;this.g=e,this.h=n,this.m=nt,this.j=Pe,this.defaultValue=void 0,this.l=i.Oa!=null?cm:void 0}register(){Sc(this)}}function Pi(t,e){return new h1(t,e)}function wr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Pm(n,void 0,void 0,s);try{const a=new t,o=a.v;Lh(e)(o,n);var r=a}finally{Lm(n)}}return r}}function Oc(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Wm(this.v,e,rs(Ic,Nc,Fc,t)),Ws(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var $f=class extends be{constructor(t){super(t)}},Zf=[0,pr,hn((function(t,e,n){return t.h===2&&(fn(e,n,(t=Im(t))===$r()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof be){const i=e.Ra;return void(i?(e=i(e),e!=null&&Pc(t,n,vh(e,!0).buffer)):ks(Wl,3))}if(Array.isArray(e))return void ks(Wl,3)}Zm(t,e,n)}),Fm)];let nl,Jf=globalThis.trustedTypes;function Qf(t){var e;return nl===void 0&&(nl=(function(){let n=null;if(!Jf)return n;try{const i=r=>r;n=Jf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=nl)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function po(t,...e){if(e.length===0)return Qf(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Qf(n)}var t0=[0,Ht,ln,bt,-1,ao,ln,-1,bt],f1=class extends be{constructor(t){super(t)}},n0=[0,bt,dt,bt,ln,-1,ua((function(t,e,n){return(t.h===0||t.h===2)&&(e=aa(e,0|e[ye],n),t.h==2?Rc(t,j_,e):e.push(yr(t.g)),!0)}),(function(t,e,n){if((e=la(na,e))!=null&&e.length){n=yh(t,n);for(let i=0;i<e.length;i++)Cc(t.g,e[i]);bh(t,n)}}),Om),dt,-1,[0,bt,-1],ln,bt,-1],i0=[0,3,bt,-1,2,[0,[2],Ht,vt,[0,hn((function(t,e,n){return t.h===0&&(fn(e,n,bi(t.g)),!0)}),Jm,Rh)]],[0,ln,bt,ln,bt,ln,bt,dt,-1],[0,[3,4],dt,-1,vt,[0,Ht],vt,[0,ln]],[0]],r0=[0,dt,-2],ed=class extends be{constructor(t){super(t)}},s0=[0],a0=[0,Ht,bt,1,bt,-4],On=class extends be{constructor(t){super(t,2)}},Xt={};Xt[336783863]=[0,dt,bt,-1,Ht,[0,[1,2,3,4,5,6,7,8,9],vt,s0,vt,n0,vt,r0,vt,a0,vt,t0,vt,[0,dt,-2],vt,[0,dt,ln],vt,i0,vt,[0,ln,-1,bt]],[0,dt],bt,[0,[1,3],[2,4],vt,[0,ao],-1,vt,[0,on],-1,Zt,[0,dt,-1]],dt];var td=[0,tl,-1,jr,-3,tl,ao,pr,As,tl,-1,jr,As,jr,-2,pr];function xt(t,e){wc(t,3,e)}function Ze(t,e){wc(t,4,e)}var Sn=class extends be{constructor(t){super(t,500)}o(t){return Pe(this,0,7,t)}},Ca=[-1,{}],nd=[0,dt,1,Ca],id=[0,dt,on,Ca];function Kn(t,e){_h(t,1,Sn,e)}function Tt(t,e){wc(t,10,e)}function rt(t,e){wc(t,15,e)}var Bn=class extends be{constructor(t){super(t,500)}o(t){return Pe(this,0,1001,t)}},o0=[-500,Zt,[-500,pr,-1,on,-3,[-2,Xt,bt],Zt,Zf,As,-1,nd,id,Zt,[0,pr,jr],pr,td,As,on,987,on],4,Zt,[-500,dt,-1,[-1,{}],998,dt],Zt,[-500,dt,on,-1,[-2,{},bt],997,on,-1],As,Zt,[-500,dt,on,Ca,998,on],on,As,nd,id,Zt,[0,pr,-1,Ca],on,-2,td,pr,-1,jr,[0,jr,u1],978,Ca,Zt,Zf];Bn.prototype.g=Oc(o0);var d1=wr(Bn,o0),p1=class extends be{constructor(t){super(t)}},c0=class extends be{constructor(t){super(t)}g(){return Zi(this,p1,1)}},l0=[0,Zt,[0,Ht,kt,dt,-1]],Bc=wr(c0,l0),m1=class extends be{constructor(t){super(t)}},g1=class extends be{constructor(t){super(t)}},il=class extends be{constructor(t){super(t)}l(){return nt(this,m1,2)}g(){return Zi(this,g1,5)}},u0=wr(class extends be{constructor(t){super(t)}},[0,on,ao,Dh,[0,ln,[0,Ht,-3],[0,kt,-3],[0,Ht,-1,[0,Zt,[0,Ht,-2]]],Zt,[0,kt,-1,dt,kt]],dt,-1,br,Zt,[0,Ht,kt],on,br]),h0=class extends be{constructor(t){super(t)}},Ps=wr(class extends be{constructor(t){super(t)}},[0,Zt,[0,kt,-4]]),f0=class extends be{constructor(t){super(t)}},oo=wr(class extends be{constructor(t){super(t)}},[0,Zt,[0,kt,-4]]),_1=class extends be{constructor(t){super(t)}},v1=[0,Ht,-1,Dh,ln],d0=class extends be{constructor(t){super(t)}};d0.prototype.g=Oc([0,kt,-4,br]);var x1=class extends be{constructor(t){super(t)}},S1=wr(class extends be{constructor(t){super(t)}},[0,Zt,[0,1,Ht,dt,l0],br]),rd=class extends be{constructor(t){super(t)}},M1=class extends be{constructor(t){super(t)}na(){const t=yt(this,1,void 0,void 0,Em);return t??$r()}},E1=class extends be{constructor(t){super(t)}},p0=[1,2],y1=wr(class extends be{constructor(t){super(t)}},[0,Zt,[0,p0,vt,[0,Dh],vt,[0,e0],Ht,dt],br]),Ih=class extends be{constructor(t){super(t)}},m0=[0,dt,Ht,kt,on,-1],sd=class extends be{constructor(t){super(t)}},b1=[0,bt,-1],ad=class extends be{constructor(t){super(t)}},qo=[1,2,3,4,5,6],cc=class extends be{constructor(t){super(t)}g(){return yt(this,1,void 0,void 0,Em)!=null}l(){return en(yt(this,2))!=null}},Lt=class extends be{constructor(t){super(t)}g(){return hm(yt(this,2))??!1}},g0=[0,e0,dt,[0,Ht,br,-1],[0,c1,br]],Gt=[0,g0,bt,[0,qo,vt,a0,vt,n0,vt,t0,vt,s0,vt,r0,vt,i0],ln],kc=class extends be{constructor(t){super(t)}},Uh=[0,Gt,kt,-1,Ht],T1=Pi(502141897,kc);Xt[502141897]=Uh;var A1=wr(class extends be{constructor(t){super(t)}},[0,[0,ln,-1,a1,l1],v1]),_0=class extends be{constructor(t){super(t)}},v0=class extends be{constructor(t){super(t)}},$l=[0,Gt,kt,[0,Gt],bt],w1=Pi(508968150,v0);Xt[508968150]=[0,Gt,Uh,$l,kt,[0,[0,g0]]],Xt[508968149]=$l;var ls=class extends be{constructor(t){super(t)}l(){return nt(this,Ih,2)}g(){ut(this,2)}},x0=[0,Gt,m0];Xt[478825465]=x0;var R1=class extends be{constructor(t){super(t)}},S0=class extends be{constructor(t){super(t)}},Nh=class extends be{constructor(t){super(t)}},Fh=class extends be{constructor(t){super(t)}},M0=class extends be{constructor(t){super(t)}},od=[0,Gt,[0,Gt],x0,-1],E0=[0,Gt,kt,Ht],Oh=[0,Gt,kt],y0=[0,Gt,E0,Oh,kt],C1=Pi(479097054,M0);Xt[479097054]=[0,Gt,y0,od],Xt[463370452]=od,Xt[464864288]=E0;var P1=Pi(462713202,Fh);Xt[462713202]=y0,Xt[474472470]=Oh;var L1=class extends be{constructor(t){super(t)}},b0=class extends be{constructor(t){super(t)}},T0=class extends be{constructor(t){super(t)}},A0=class extends be{constructor(t){super(t)}},Bh=[0,Gt,kt,-1,Ht],Zl=[0,Gt,kt,bt];A0.prototype.g=Oc([0,Gt,Oh,[0,Gt],Uh,$l,Bh,Zl]);var w0=class extends be{constructor(t){super(t)}},D1=Pi(456383383,w0);Xt[456383383]=[0,Gt,m0];var R0=class extends be{constructor(t){super(t)}},I1=Pi(476348187,R0);Xt[476348187]=[0,Gt,b1];var C0=class extends be{constructor(t){super(t)}},cd=class extends be{constructor(t){super(t)}},P0=[0,ln,-1],U1=Pi(458105876,class extends be{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[ye];return t=In(this,n),e=(function(i,r,s,a){var o=cd;!a&&ra(i)&&(s=0|(r=i.v)[ye]);var c=$i(r,2);if(i=!1,c==null){if(a)return zf();c=[]}else if(c.constructor===ji){if(!(2&c.J)||a)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[ye])):c=[];if(a){if(!c.length)return zf();i||(i=!0,to(c))}else i&&(i=!1,Ia(c),c=ym(c));return!i&&32&s&&eo(c,32),s=Wt(r,s,2,a=new ji(c,o,F_,void 0)),i||is(r,s),a})(this,e,n,t),!t&&cd&&(e.ra=!0),e}});Xt[458105876]=[0,P0,s1,[!0,br,[0,dt,-1,on]],[0,ao,bt,ln]];var kh=class extends be{constructor(t){super(t)}},L0=Pi(458105758,kh);Xt[458105758]=[0,Gt,dt,P0];var rl=class extends be{constructor(t){super(t)}},ld=[0,o1,-1,jr],N1=class extends be{constructor(t){super(t)}},D0=class extends be{constructor(t){super(t)}},Jl=[1,2];D0.prototype.g=Oc([0,Jl,vt,ld,vt,[0,Zt,ld]]);var I0=class extends be{constructor(t){super(t)}},F1=Pi(443442058,I0);Xt[443442058]=[0,Gt,dt,Ht,kt,on,-1,bt,kt],Xt[514774813]=Bh;var U0=class extends be{constructor(t){super(t)}},O1=Pi(516587230,U0);function Ql(t,e){return e=e?e.clone():new Ih,t.displayNamesLocale!==void 0?ut(e,1,ro(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ut(e,1),t.maxResults!==void 0?Ji(e,2,t.maxResults):"maxResults"in t&&ut(e,2),t.scoreThreshold!==void 0?Ce(e,3,t.scoreThreshold):"scoreThreshold"in t&&ut(e,3),t.categoryAllowlist!==void 0?rc(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ut(e,4),t.categoryDenylist!==void 0?rc(e,5,t.categoryDenylist):"categoryDenylist"in t&&ut(e,5),e}function N0(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Gh(t,e=-1,n=""){return{categories:t.map((i=>({index:qn(i,1)??0??-1,score:Ft(i,2)??0,categoryName:en(yt(i,3))??""??"",displayName:en(yt(i,4))??""??""}))),headIndex:e,headName:n}}function B1(t){const e={classifications:Zi(t,x1,1).map((n=>{var i;return Gh(((i=nt(n,c0,4))==null?void 0:i.g())??[],qn(n,2)??0,en(yt(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(Xl(n)?n=Number(n):(n=no(64,n),n=Xl(n)?Number(n):String(n)),n):io(n)?typeof n=="number"?oh(n):pm(n):void 0})(yt(t,2,void 0,void 0,nc))!=null&&(e.timestampMs=N0(yt(t,2,void 0,void 0,nc)??Sm)),e}function F0(t){var a,o;var e=Br(t,3,_i,Or()),n=Br(t,2,na,Or()),i=Br(t,1,en,Or()),r=Br(t,9,en,Or());const s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(a=nt(t,il,4))==null?void 0:a.l())&&(s.boundingBox={originX:qn(e,1,sr)??0,originY:qn(e,2,sr)??0,width:qn(e,3,sr)??0,height:qn(e,4,sr)??0,angle:0}),(o=nt(t,il,4))==null?void 0:o.g().length)for(const c of nt(t,il,4).g())s.keypoints.push({x:yt(c,1,void 0,sr,_i)??0,y:yt(c,2,void 0,sr,_i)??0,score:yt(c,4,void 0,sr,_i)??0,label:en(yt(c,3,void 0,sr))??""});return s}function Gc(t){const e=[];for(const n of Zi(t,f0,1))e.push({x:Ft(n,1)??0,y:Ft(n,2)??0,z:Ft(n,3)??0,visibility:Ft(n,4)??0});return e}function Pa(t){const e=[];for(const n of Zi(t,h0,1))e.push({x:Ft(n,1)??0,y:Ft(n,2)??0,z:Ft(n,3)??0,visibility:Ft(n,4)??0});return e}function ud(t){return Array.from(t,(e=>e>127?e-256:e))}function hd(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let mo;Xt[516587230]=[0,Gt,Bh,Zl,kt],Xt[518928384]=Zl;const k1=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function O0(t){if(t)return!0;if(mo===void 0)try{await WebAssembly.instantiate(k1),mo=!0}catch{mo=!1}return mo}async function go(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await O0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var bs=class{};function B0(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function fd(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function k0(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ae(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function dd(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=k0(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function pd(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function ui(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ar(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}bs.forVisionTasks=function(t,e=!1){return go("vision",t??po``,e)},bs.forTextTasks=function(t,e=!1){return go("text",t??po``,e)},bs.forGenAiTasks=function(t,e=!1){return go("genai",t??po``,e)},bs.forAudioTasks=function(t,e=!1){return go("audio",t??po``,e)},bs.isSimdSupported=function(t=!1){return O0(t)};async function G1(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await fd(s),!self.ModuleFactory||a&&(await fd(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function sl(t,e){const n=nt(t.baseOptions,cc,1)||new cc;typeof e=="string"?(ut(n,2,ro(e)),ut(n,1)):e instanceof Uint8Array&&(ut(n,1,ih(e,!1)),ut(n,2)),Pe(t.baseOptions,0,1,n)}function md(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function xe(t,e){t.C=Math.max(t.C,e)}function Vc(t,e){t.B=new Sn,Un(t.B,2,"PassThroughCalculator"),xt(t.B,"free_memory"),Ze(t.B,"free_memory_unused_out"),Tt(e,"free_memory"),Kn(e,t.B)}function Xs(t,e){xt(t.B,e),Ze(t.B,e+"_unused_out")}function zc(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var eu=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,a,o;if(e){const c=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=nt(this.baseOptions,cc,1))!=null&&r.g()||(s=nt(this.baseOptions,cc,1))!=null&&s.l()||(a=t.baseOptions)!=null&&a.modelAssetBuffer||(o=t.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,u){let f=nt(l.baseOptions,ad,3);if(!f){var h=f=new ad,d=new ed;Ra(h,4,qo,d)}"delegate"in u&&(u.delegate==="GPU"?(u=f,h=new f1,Ra(u,2,qo,h)):(u=f,h=new ed,Ra(u,4,qo,h))),Pe(l.baseOptions,0,3,f)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then((l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)})).then((l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),sl(this,"/model.dat"),this.m(),this.L()}));if(c.modelAssetBuffer instanceof Uint8Array)sl(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){const u=[];for(var f=0;;){const{done:h,value:d}=await l.read();if(h)break;u.push(d),f+=d.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];l=new Uint8Array(f),f=0;for(const h of u)l.set(h,f),f+=h.length;return l})(c.modelAssetBuffer).then((l=>{sl(this,l),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=d1(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,md(this)}finishProcessing(){this.g.finishProcessing(),md(this)}close(){this.B=void 0,this.g.closeGraph()}};function Mr(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}eu.prototype.close=eu.prototype.close;class V1{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function gd(t,e,n){const i=t.g;if(n=Mr(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function _d(t,e){const n=t.g,i=Mr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Mr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Mr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new V1(n,i,r,s)}function Vh(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function z1(t,e,n,i){return Vh(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=_d(t,!0)),n=t.u):(t.A||(t.A=_d(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function G0(t,e,n){return Vh(t,e),t=Mr(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function V0(t,e,n){Vh(t,e),t.B||(t.B=Mr(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function H1(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var z0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Mr(t.createProgram(),"Failed to create WebGL program"),this.X=gd(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=gd(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function zi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function tu(t){var e=zi(t,1);if(!e){if(e=zi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=qs(t);var n=zh(t);if(V0(n,i,H0(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function H0(t){let e=zi(t,2);if(!e){const n=qs(t);e=X0(t);const i=tu(t),r=W0(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),nu(t)}return e}function qs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Mr(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function W0(t){if(t=qs(t),!_o)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))_o=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");_o=t.R16F}return _o}function zh(t){return t.l||(t.l=new z0),t.l}function X0(t){const e=qs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=zi(t,2);return n||(n=G0(zh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function nu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var _o,$t=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--vd===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!zi(this,0)}ka(){return!!zi(this,1)}R(){return!!zi(this,2)}ja(){return(e=zi(t=this,0))||(e=tu(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return tu(this)}N(){return H0(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=qs(this),r=zh(this);i.activeTexture(i.TEXTURE1),n=G0(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=W0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),V0(r,i,n),z1(r,i,!1,(()=>{X0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),nu(this)})),H1(r),nu(this)}}t.push(n)}return new $t(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&qs(this).deleteTexture(zi(this,2)),vd=-1}};$t.prototype.close=$t.prototype.close,$t.prototype.clone=$t.prototype.clone,$t.prototype.getAsWebGLTexture=$t.prototype.N,$t.prototype.getAsFloat32Array=$t.prototype.ia,$t.prototype.getAsUint8Array=$t.prototype.ja,$t.prototype.hasWebGLTexture=$t.prototype.R,$t.prototype.hasFloat32Array=$t.prototype.ka,$t.prototype.hasUint8Array=$t.prototype.Fa;var vd=250;function si(...t){return t.map((([e,n])=>({start:e,end:n})))}const W1=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((xd=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:B0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ae(this,i||"input_audio",(s=>{Ae(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){ui(this,"__graph_config__",(e=>{t(e)})),Ae(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Ae(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Ae(this,e,(i=>{const[r,s]=dd(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Ae(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Ae(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Ae(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Ae(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Ae(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Ae(this,e,(i=>{Ae(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Ae(this,e,(i=>{pd(this,Object.keys(t),(r=>{pd(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Ae(this,n,(r=>{Ae(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Ae(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ae(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Ae(this,e,(n=>{Ae(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Ae(this,n,(i=>{Ae(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ae(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){ui(this,t,e),Ae(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){ar(this,t,e),Ae(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){ui(this,t,e),Ae(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){ar(this,t,e),Ae(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){ui(this,t,e),Ae(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){ar(this,t,e),Ae(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){ui(this,t,e),Ae(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){ar(this,t,e),Ae(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){ui(this,t,e),Ae(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){ar(this,t,e),Ae(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){ui(this,t,e),Ae(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){ar(this,t,e),Ae(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){ui(this,t,e),Ae(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){ar(this,t,e),Ae(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ui(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Ae(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends xd{get ga(){return this.i}pa(t,e,n){Ae(this,e,(i=>{const[r,s]=dd(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){ui(this,t,e),Ae(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){ar(this,t,e),Ae(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var xd,ai=class extends W1{};async function et(t,e,n){return(async function(i,r,s,a){return G1(i,r,s,a)})(t,n.canvas??(B0()?void 0:document.createElement("canvas")),e,n)}function q0(t,e,n,i){if(t.U){const s=new d0;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ce(s,1,(r.left+r.right)/2),Ce(s,2,(r.top+r.bottom)/2),Ce(s,4,r.right-r.left),Ce(s,3,r.bottom-r.top)}else Ce(s,1,.5),Ce(s,2,.5),Ce(s,4,1),Ce(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ce(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=k0(e);n=Ft(s,3)*o/a,r=Ft(s,4)*a/o,Ce(s,4,n),Ce(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function oi(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");q0(t,e,n,t.C+1)}function Li(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");q0(t,e,n,i)}function Ys(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new $t([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Nn=class extends eu{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new z0}l(t,e=!0){if("runningMode"in t&&ut(this.baseOptions,2,Na(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Nn.prototype.close=Nn.prototype.close;var Gn=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Pe(t=this.h=new kc,0,1,e=new Lt),Ce(this.h,2,.5),Ce(this.h,3,.3)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Ce(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ce(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},oi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Li(this,t,n,e),this.j}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect_in"),rt(t,"detections");const e=new On;Ci(e,T1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect_in"),Ze(n,"DETECTIONS:detections"),n.o(e),Kn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=u0(s),this.j.detections.push(F0(i));xe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Gn.prototype.detectForVideo=Gn.prototype.G,Gn.prototype.detect=Gn.prototype.F,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=async function(t,e){return et(Gn,t,{baseOptions:{modelAssetPath:e}})},Gn.createFromModelBuffer=function(t,e){return et(Gn,t,{baseOptions:{modelAssetBuffer:e}})},Gn.createFromOptions=function(t,e){return et(Gn,t,e)};var Hh=si([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Wh=si([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Xh=si([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Y0=si([474,475],[475,476],[476,477],[477,474]),qh=si([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Yh=si([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),K0=si([469,470],[470,471],[471,472],[472,469]),Kh=si([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),j0=[...Hh,...Wh,...Xh,...qh,...Yh,...Kh],$0=si([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Sd(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Rt=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Pe(t=this.h=new v0,0,1,e=new Lt),this.A=new _0,Pe(this.h,0,3,this.A),this.u=new kc,Pe(this.h,0,2,this.u),Ji(this.u,4,1),Ce(this.u,2,.5),Ce(this.A,2,.5),Ce(this.h,4,.5)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return"numFaces"in t&&Ji(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ce(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ce(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Sd(this),oi(this,t,e),this.j}G(t,e,n){return Sd(this),Li(this,t,n,e),this.j}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect"),rt(t,"face_landmarks");const e=new On;Ci(e,w1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Kn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=oo(s),this.j.faceLandmarks.push(Gc(i));xe(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{xe(this,i)})),this.outputFaceBlendshapes&&(rt(t,"blendshapes"),Ze(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Bc(s),this.j.faceBlendshapes.push(Gh(i.g()??[]));xe(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{xe(this,i)}))),this.outputFacialTransformationMatrixes&&(rt(t,"face_geometry"),Ze(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=nt(i=A1(s),_1,2))&&this.j.facialTransformationMatrixes.push({rows:qn(i,1)??0??0,columns:qn(i,2)??0??0,data:Br(i,3,_i,Or()).slice()??[]});xe(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{xe(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rt.prototype.detectForVideo=Rt.prototype.G,Rt.prototype.detect=Rt.prototype.F,Rt.prototype.setOptions=Rt.prototype.o,Rt.createFromModelPath=function(t,e){return et(Rt,t,{baseOptions:{modelAssetPath:e}})},Rt.createFromModelBuffer=function(t,e){return et(Rt,t,{baseOptions:{modelAssetBuffer:e}})},Rt.createFromOptions=function(t,e){return et(Rt,t,e)},Rt.FACE_LANDMARKS_LIPS=Hh,Rt.FACE_LANDMARKS_LEFT_EYE=Wh,Rt.FACE_LANDMARKS_LEFT_EYEBROW=Xh,Rt.FACE_LANDMARKS_LEFT_IRIS=Y0,Rt.FACE_LANDMARKS_RIGHT_EYE=qh,Rt.FACE_LANDMARKS_RIGHT_EYEBROW=Yh,Rt.FACE_LANDMARKS_RIGHT_IRIS=K0,Rt.FACE_LANDMARKS_FACE_OVAL=Kh,Rt.FACE_LANDMARKS_CONTOURS=j0,Rt.FACE_LANDMARKS_TESSELATION=$0;var jh=si([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Md(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Ed(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function yd(t,e=!0){const n=[];for(const r of t){var i=Bc(r);t=[];for(const s of i.g())i=e&&qn(s,1)!=null?qn(s,1)??0:-1,t.push({score:Ft(s,2)??0,index:i,categoryName:en(yt(s,3))??""??"",displayName:en(yt(s,4))??""??""});n.push(t)}return n}var yn=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pe(t=this.j=new M0,0,1,e=new Lt),this.u=new Fh,Pe(this.j,0,2,this.u),this.D=new Nh,Pe(this.u,0,3,this.D),this.A=new S0,Pe(this.u,0,2,this.A),this.h=new R1,Pe(this.j,0,3,this.h),Ce(this.A,2,.5),Ce(this.u,4,.5),Ce(this.D,2,.5)}get baseOptions(){return nt(this.j,Lt,1)}set baseOptions(t){Pe(this.j,0,1,t)}o(t){var r,s,a,o;if(Ji(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ce(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ce(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new ls,n=e,i=Ql(t.cannedGesturesClassifierOptions,(r=nt(this.h,ls,3))==null?void 0:r.l());Pe(n,0,2,i),Pe(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=nt(this.h,ls,3))==null||s.g());return t.customGesturesClassifierOptions?(Pe(n=e=new ls,0,2,i=Ql(t.customGesturesClassifierOptions,(a=nt(this.h,ls,4))==null?void 0:a.l())),Pe(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((o=nt(this.h,ls,4))==null||o.g()),this.l(t)}Ha(t,e){return Md(this),oi(this,t,e),Ed(this)}Ia(t,e,n){return Md(this),Li(this,t,n,e),Ed(this)}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect"),rt(t,"hand_gestures"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new On;Ci(e,C1,this.j);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"HAND_GESTURES:hand_gestures"),Ze(n,"LANDMARKS:hand_landmarks"),Ze(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(n,"HANDEDNESS:handedness"),n.o(e),Kn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=oo(s);const a=[];for(const o of Zi(i,f0,1))a.push({x:Ft(o,1)??0,y:Ft(o,2)??0,z:Ft(o,3)??0,visibility:Ft(o,4)??0});this.landmarks.push(a)}xe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Ps(s);const a=[];for(const o of Zi(i,h0,1))a.push({x:Ft(o,1)??0,y:Ft(o,2)??0,z:Ft(o,3)??0,visibility:Ft(o,4)??0});this.worldLandmarks.push(a)}xe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...yd(i,!1)),xe(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...yd(i)),xe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function bd(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}yn.prototype.recognizeForVideo=yn.prototype.Ia,yn.prototype.recognize=yn.prototype.Ha,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(t,e){return et(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return et(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return et(yn,t,e)},yn.HAND_CONNECTIONS=jh;var _n=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pe(t=this.h=new Fh,0,1,e=new Lt),this.u=new Nh,Pe(this.h,0,3,this.u),this.j=new S0,Pe(this.h,0,2,this.j),Ji(this.j,3,1),Ce(this.j,2,.5),Ce(this.u,2,.5),Ce(this.h,4,.5)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return"numHands"in t&&Ji(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ce(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ce(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oi(this,t,e),bd(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Li(this,t,n,e),bd(this)}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new On;Ci(e,P1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"LANDMARKS:hand_landmarks"),Ze(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(n,"HANDEDNESS:handedness"),n.o(e),Kn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=oo(s),this.landmarks.push(Gc(i));xe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Ps(s),this.worldLandmarks.push(Pa(i));xe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Bc(c);const l=[];for(const u of i.g())l.push({score:Ft(u,2)??0,index:qn(u,1)??0??-1,categoryName:en(yt(u,3))??""??"",displayName:en(yt(u,4))??""??""});o.push(l)}a.call(s,...o),xe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.detectForVideo=_n.prototype.G,_n.prototype.detect=_n.prototype.F,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return et(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return et(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return et(_n,t,e)},_n.HAND_CONNECTIONS=jh;var Z0=si([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Td(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ad(t){try{if(!t.D)return t.h;t.D(t.h)}finally{zc(t)}}function vo(t,e){t=oo(t),e.push(Gc(t))}var _t=class extends Nn{constructor(t,e){super(new ai(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Pe(t=this.j=new A0,0,1,e=new Lt),this.I=new Nh,Pe(this.j,0,2,this.I),this.W=new L1,Pe(this.j,0,3,this.W),this.u=new kc,Pe(this.j,0,4,this.u),this.O=new _0,Pe(this.j,0,5,this.O),this.A=new b0,Pe(this.j,0,6,this.A),this.M=new T0,Pe(this.j,0,7,this.M),Ce(this.u,2,.5),Ce(this.u,3,.3),Ce(this.O,2,.5),Ce(this.A,2,.5),Ce(this.A,3,.3),Ce(this.M,2,.5),Ce(this.I,2,.5)}get baseOptions(){return nt(this.j,Lt,1)}set baseOptions(t){Pe(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Ce(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ce(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ce(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ce(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ce(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ce(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ce(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Td(this),oi(this,t,i),Ad(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Td(this),Li(this,t,r,e),Ad(this)}m(){var t=new Bn;Tt(t,"input_frames_image"),rt(t,"pose_landmarks"),rt(t,"pose_world_landmarks"),rt(t,"face_landmarks"),rt(t,"left_hand_landmarks"),rt(t,"left_hand_world_landmarks"),rt(t,"right_hand_landmarks"),rt(t,"right_hand_world_landmarks");const e=new On,n=new $f;Un(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))ut(r,2,Ac(s,0,Fa));else{if(!(typeof s=="string"||s instanceof Si||th(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");dr(r,2,ih(s,!1),$r())}})(n,this.j.g());const i=new Sn;Un(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),_h(i,8,$f,n),xt(i,"IMAGE:input_frames_image"),Ze(i,"POSE_LANDMARKS:pose_landmarks"),Ze(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Ze(i,"FACE_LANDMARKS:face_landmarks"),Ze(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Ze(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Ze(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Ze(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Kn(t,i),Vc(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{vo(r,this.h.poseLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Ps(r),a.push(Pa(r)),xe(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{xe(this,r)})),this.outputPoseSegmentationMasks&&(Ze(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Xs(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Ys(this,r,!0,!this.D)],xe(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],xe(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{vo(r,this.h.faceLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{xe(this,r)})),this.outputFaceBlendshapes&&(rt(t,"extra_blendshapes"),Ze(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Bc(r),a.push(Gh(r.g()??[]))),xe(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{xe(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{vo(r,this.h.leftHandLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Ps(r),a.push(Pa(r)),xe(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{vo(r,this.h.rightHandLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Ps(r),a.push(Pa(r)),xe(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{xe(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_t.prototype.detectForVideo=_t.prototype.G,_t.prototype.detect=_t.prototype.F,_t.prototype.setOptions=_t.prototype.o,_t.createFromModelPath=function(t,e){return et(_t,t,{baseOptions:{modelAssetPath:e}})},_t.createFromModelBuffer=function(t,e){return et(_t,t,{baseOptions:{modelAssetBuffer:e}})},_t.createFromOptions=function(t,e){return et(_t,t,e)},_t.HAND_CONNECTIONS=jh,_t.POSE_CONNECTIONS=Z0,_t.FACE_LANDMARKS_LIPS=Hh,_t.FACE_LANDMARKS_LEFT_EYE=Wh,_t.FACE_LANDMARKS_LEFT_EYEBROW=Xh,_t.FACE_LANDMARKS_LEFT_IRIS=Y0,_t.FACE_LANDMARKS_RIGHT_EYE=qh,_t.FACE_LANDMARKS_RIGHT_EYEBROW=Yh,_t.FACE_LANDMARKS_RIGHT_IRIS=K0,_t.FACE_LANDMARKS_FACE_OVAL=Kh,_t.FACE_LANDMARKS_CONTOURS=j0,_t.FACE_LANDMARKS_TESSELATION=$0;var Vn=class extends Nn{constructor(t,e){super(new ai(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Pe(t=this.h=new w0,0,1,e=new Lt)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return Pe(this.h,0,2,Ql(t,nt(this.h,Ih,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},oi(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Li(this,t,n,e),this.j}m(){var t=new Bn;Tt(t,"input_image"),Tt(t,"norm_rect"),rt(t,"classifications");const e=new On;Ci(e,D1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),xt(n,"IMAGE:input_image"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"CLASSIFICATIONS:classifications"),n.o(e),Kn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=B1(S1(i)),xe(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Vn.prototype.classifyForVideo=Vn.prototype.ta,Vn.prototype.classify=Vn.prototype.sa,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=function(t,e){return et(Vn,t,{baseOptions:{modelAssetPath:e}})},Vn.createFromModelBuffer=function(t,e){return et(Vn,t,{baseOptions:{modelAssetBuffer:e}})},Vn.createFromOptions=function(t,e){return et(Vn,t,e)};var bn=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!0),this.h=new R0,this.embeddings={embeddings:[]},Pe(t=this.h,0,1,e=new Lt)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){var e=this.h,n=nt(this.h,sd,2);return n=n?n.clone():new sd,t.l2Normalize!==void 0?ut(n,1,Na(t.l2Normalize)):"l2Normalize"in t&&ut(n,1),t.quantize!==void 0?ut(n,2,Na(t.quantize)):"quantize"in t&&ut(n,2),Pe(e,0,2,n),this.l(t)}za(t,e){return oi(this,t,e),this.embeddings}Aa(t,e,n){return Li(this,t,n,e),this.embeddings}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect"),rt(t,"embeddings_out");const e=new On;Ci(e,I1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"EMBEDDINGS:embeddings_out"),n.o(e),Kn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=y1(i),this.embeddings=(function(s){return{embeddings:Zi(s,E1,1).map((a=>{var l,u;const o={headIndex:qn(a,3)??0??-1,headName:en(yt(a,4))??""??""};var c=a.v;return Tm(c,0|c[ye],rd,el(a,1))!==void 0?(a=Br(a=nt(a,rd,el(a,1),void 0),1,_i,Or()),o.floatEmbedding=a.slice()):(c=new Uint8Array(0),o.quantizedEmbedding=((u=(l=nt(a,M1,el(a,2),void 0))==null?void 0:l.na())==null?void 0:u.h())??c),o})),timestampMs:N0(yt(s,2,void 0,void 0,nc)??Sm)}})(i),xe(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};bn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=hd(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=hd(ud(t.quantizedEmbedding),ud(e.quantizedEmbedding))}return t},bn.prototype.embedForVideo=bn.prototype.Aa,bn.prototype.embed=bn.prototype.za,bn.prototype.setOptions=bn.prototype.o,bn.createFromModelPath=function(t,e){return et(bn,t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return et(bn,t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){return et(bn,t,e)};var iu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function X1(t){var n,i;const e=(function(r){return Zi(r,Sn,1)})(t.ca()).filter((r=>(en(yt(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=nt(e[0],On,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach(((r,s)=>{t.u[Number(s)]=en(yt(r,1))??""}))}function wd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Rd(t){try{const e=new iu(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{zc(t)}}iu.prototype.close=iu.prototype.close;var gn=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new kh,this.A=new C0,Pe(this.h,0,3,this.A),Pe(t=this.h,0,1,e=new Lt)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ut(this.h,2,ro(t.displayNamesLocale)):"displayNamesLocale"in t&&ut(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){X1(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,wd(this),oi(this,t,i),Rd(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,wd(this),Li(this,t,r,e),Rd(this)}Da(){return this.u}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect");const e=new On;Ci(e,L0,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),n.o(e),Kn(t,n),Vc(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Ze(n,"CONFIDENCE_MASKS:confidence_masks"),Xs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ys(this,s,!0,!this.j))),xe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],xe(this,i)}))),this.outputCategoryMask&&(rt(t,"category_mask"),Ze(n,"CATEGORY_MASK:category_mask"),Xs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ys(this,i,!1,!this.j),xe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,xe(this,i)}))),rt(t,"quality_scores"),Ze(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,xe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gn.prototype.getLabels=gn.prototype.Da,gn.prototype.segmentForVideo=gn.prototype.La,gn.prototype.segment=gn.prototype.segment,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(t,e){return et(gn,t,{baseOptions:{modelAssetPath:e}})},gn.createFromModelBuffer=function(t,e){return et(gn,t,{baseOptions:{modelAssetBuffer:e}})},gn.createFromOptions=function(t,e){return et(gn,t,e)};var ru=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};ru.prototype.close=ru.prototype.close;var hi=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new kh,this.u=new C0,Pe(this.h,0,3,this.u),Pe(t=this.h,0,1,e=new Lt)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new D0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new rl;dr(s,3,Na(!0),!1),dr(s,1,Ta(e.keypoint.x),0),dr(s,2,Ta(e.keypoint.y),0),Ra(i,1,Jl,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new N1;for(s of e.scribble)dr(e=new rl,3,Na(!0),!1),dr(e,1,Ta(s.x),0),dr(e,2,Ta(s.y),0),_h(o,1,rl,e);Ra(i,2,Jl,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),oi(this,t,r);e:{try{const o=new ru(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{zc(this)}a=void 0}return a}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"roi_in"),Tt(t,"norm_rect_in");const e=new On;Ci(e,L0,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),xt(n,"IMAGE:image_in"),xt(n,"ROI:roi_in"),xt(n,"NORM_RECT:norm_rect_in"),n.o(e),Kn(t,n),Vc(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Ze(n,"CONFIDENCE_MASKS:confidence_masks"),Xs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ys(this,s,!0,!this.j))),xe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],xe(this,i)}))),this.outputCategoryMask&&(rt(t,"category_mask"),Ze(n,"CATEGORY_MASK:category_mask"),Xs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ys(this,i,!1,!this.j),xe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,xe(this,i)}))),rt(t,"quality_scores"),Ze(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,xe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hi.prototype.segment=hi.prototype.segment,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=function(t,e){return et(hi,t,{baseOptions:{modelAssetPath:e}})},hi.createFromModelBuffer=function(t,e){return et(hi,t,{baseOptions:{modelAssetBuffer:e}})},hi.createFromOptions=function(t,e){return et(hi,t,e)};var zn=class extends Nn{constructor(t,e){super(new ai(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Pe(t=this.h=new I0,0,1,e=new Lt)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ut(this.h,2,ro(t.displayNamesLocale)):"displayNamesLocale"in t&&ut(this.h,2),t.maxResults!==void 0?Ji(this.h,3,t.maxResults):"maxResults"in t&&ut(this.h,3),t.scoreThreshold!==void 0?Ce(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ut(this.h,4),t.categoryAllowlist!==void 0?rc(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ut(this.h,5),t.categoryDenylist!==void 0?rc(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ut(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},oi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Li(this,t,n,e),this.j}m(){var t=new Bn;Tt(t,"input_frame_gpu"),Tt(t,"norm_rect"),rt(t,"detections");const e=new On;Ci(e,F1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),xt(n,"IMAGE:input_frame_gpu"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"DETECTIONS:detections"),n.o(e),Kn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=u0(s),this.j.detections.push(F0(i));xe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zn.prototype.detectForVideo=zn.prototype.G,zn.prototype.detect=zn.prototype.F,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=async function(t,e){return et(zn,t,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(t,e){return et(zn,t,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(t,e){return et(zn,t,e)};var su=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function Cd(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Pd(t){try{const e=new su(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{zc(t)}}su.prototype.close=su.prototype.close;var Tn=class extends Nn{constructor(t,e){super(new ai(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Pe(t=this.h=new U0,0,1,e=new Lt),this.A=new T0,Pe(this.h,0,3,this.A),this.j=new b0,Pe(this.h,0,2,this.j),Ji(this.j,4,1),Ce(this.j,2,.5),Ce(this.A,2,.5),Ce(this.h,4,.5)}get baseOptions(){return nt(this.h,Lt,1)}set baseOptions(t){Pe(this.h,0,1,t)}o(t){return"numPoses"in t&&Ji(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ce(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ce(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Cd(this),oi(this,t,i),Pd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Cd(this),Li(this,t,r,e),Pd(this)}m(){var t=new Bn;Tt(t,"image_in"),Tt(t,"norm_rect"),rt(t,"normalized_landmarks"),rt(t,"world_landmarks"),rt(t,"segmentation_masks");const e=new On;Ci(e,O1,this.h);const n=new Sn;Un(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"NORM_LANDMARKS:normalized_landmarks"),Ze(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Kn(t,n),Vc(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=oo(s),this.landmarks.push(Gc(i));xe(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],xe(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Ps(s),this.worldLandmarks.push(Pa(i));xe(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],xe(this,i)})),this.outputSegmentationMasks&&(Ze(n,"SEGMENTATION_MASK:segmentation_masks"),Xs(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Ys(this,s,!0,!this.u))),xe(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],xe(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tn.prototype.detectForVideo=Tn.prototype.G,Tn.prototype.detect=Tn.prototype.F,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return et(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return et(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return et(Tn,t,e)},Tn.POSE_CONNECTIONS=Z0;const q1=440,Y1=69;function K1(t){return q1*2**((t-Y1)/12)}const j1=[1,.62,.45,.3,.22,.16,.12,.09,.07,.05,.04,.03].map((t,e)=>({ratio:e+1,gain:t})),Yo={grand:{id:"grand",label:"Grand Piano",oscType:"sine",partials:j1,inharmonic:!0,sustain:!1,peak:.15,attack:.004,baseDecay:9.5,release:.22,detune:4,hammer:1,vibrato:null,filter:{start:2200,vel:4200,ringHz:t=>Math.max(t*4,800),ring:1,q:.4}},electric:{id:"electric",label:"Electric Piano",oscType:"sine",partials:[{ratio:1,gain:1},{ratio:3,gain:.5},{ratio:5,gain:.18},{ratio:7,gain:.08},{ratio:14,gain:.05}],inharmonic:!0,sustain:!1,peak:.17,attack:.003,baseDecay:5.5,release:.3,detune:2,hammer:.4,vibrato:{rate:5.2,depth:5},filter:{start:3200,vel:2600,ringHz:t=>Math.max(t*3,700),ring:.8,q:1}},organ:{id:"organ",label:"Organ",oscType:"sine",partials:[{ratio:1,gain:1},{ratio:2,gain:.7},{ratio:3,gain:.5},{ratio:4,gain:.35},{ratio:8,gain:.2}],inharmonic:!1,sustain:!0,peak:.1,attack:.02,release:.12,detune:1,hammer:0,vibrato:{rate:6.2,depth:3},filter:{start:9e3,vel:0,ringHz:()=>9e3,ring:.05,q:.3}},synth:{id:"synth",label:"Synth Lead",oscType:"sawtooth",partials:[{ratio:1,gain:1}],inharmonic:!1,sustain:!0,peak:.11,attack:.012,release:.18,detune:10,unison:3,hammer:0,vibrato:{rate:5.5,depth:6},filter:{start:900,vel:4500,ringHz:t=>Math.max(t*3,1200),ring:.5,q:7}}},J0=["grand","electric","organ","synth"].map(t=>({id:t,label:Yo[t].label}));var vn,Vr,_r,Ha,gc,Q0;class $1{constructor(){Ke(this,gc);Ke(this,vn);Ke(this,Vr);Ke(this,_r,new Map);Ke(this,Ha,Yo.grand)}async init(){Nt(this,vn,new AudioContext),$(this,vn).state==="suspended"&&await $(this,vn).resume(),Nt(this,Vr,$(this,vn).createGain()),$(this,Vr).gain.value=.85;const e=$(this,vn).createDynamicsCompressor();e.threshold.value=-12,e.knee.value=18,e.ratio.value=3,e.attack.value=.003,e.release.value=.25,$(this,Vr).connect(e),e.connect($(this,vn).destination)}setInstrument(e){Yo[e]&&Nt(this,Ha,Yo[e])}noteOn(e,n=.85){if(!$(this,vn)||$(this,_r).has(e))return;const i=$(this,vn),r=$(this,Ha),s=i.currentTime,a=K1(e),o=i.createGain();o.gain.value=1;const c=i.createBiquadFilter();c.type="lowpass";const l=r.filter.start+n*r.filter.vel;c.frequency.setValueAtTime(l,s),r.filter.ring>.06&&c.frequency.exponentialRampToValueAtTime(r.filter.ringHz(a),s+r.filter.ring),c.Q.value=r.filter.q,o.connect(c),c.connect($(this,Vr));const u=r.inharmonic?4e-4+Math.max(0,e-21)*6e-6:0,f=r.baseDecay*2**(-(e-60)/26),h=r.peak*(.4+.6*n),d=[];let _=null;if(r.vibrato){_=i.createOscillator(),_.frequency.value=r.vibrato.rate;const p=i.createGain();p.gain.value=r.vibrato.depth,_.connect(p),_.start(s),d.push(_),_.__depthGain=p}const E=r.unison??1;for(const p of r.partials){const m=p.ratio,M=a*m*Math.sqrt(1+u*m*m);if(M>16e3||M>i.sampleRate/2)continue;const b=i.createGain(),T=p.gain*h;if(r.sustain)b.gain.setValueAtTime(1e-4,s),b.gain.exponentialRampToValueAtTime(T,s+r.attack+.01);else{const L=r.partials.indexOf(p),y=f/(1+.55*L);b.gain.setValueAtTime(1e-4,s),b.gain.exponentialRampToValueAtTime(T,s+r.attack),b.gain.exponentialRampToValueAtTime(T*8e-4,s+.02+y)}b.connect(o);for(let L=0;L<E;L+=1){const y=i.createOscillator();y.type=r.oscType,y.frequency.value=M;const C=E>1?(L/(E-1)-.5)*2*r.detune:(Math.random()-.5)*r.detune;y.detune.value=C,_&&_.__depthGain.connect(y.detune),y.connect(b),y.start(s),r.sustain||y.stop(s+.05+f),d.push(y)}}r.hammer>0&&Jt(this,gc,Q0).call(this,s,a,n*r.hammer,o),$(this,_r).set(e,{voiceGain:o,nodes:d,release:r.release})}noteOff(e){const n=$(this,_r).get(e);if(!n||!$(this,vn))return;const i=$(this,vn).currentTime,r=n.release??.22;n.voiceGain.gain.cancelScheduledValues(i),n.voiceGain.gain.setValueAtTime(Math.max(n.voiceGain.gain.value,1e-4),i),n.voiceGain.gain.exponentialRampToValueAtTime(1e-4,i+r);const s=i+r+.02;for(const a of n.nodes)try{a.stop(s)}catch{}$(this,_r).delete(e)}releaseAll(){for(const e of[...$(this,_r).keys()])this.noteOff(e)}}vn=new WeakMap,Vr=new WeakMap,_r=new WeakMap,Ha=new WeakMap,gc=new WeakSet,Q0=function(e,n,i,r){const s=$(this,vn),a=.05,o=Math.ceil(s.sampleRate*a),c=s.createBuffer(1,o,s.sampleRate),l=c.getChannelData(0);for(let _=0;_<o;_+=1)l[_]=Math.random()*2-1;const u=s.createBufferSource();u.buffer=c;const f=s.createBiquadFilter();f.type="bandpass",f.frequency.value=Math.min(n*3,6e3),f.Q.value=.7;const h=s.createGain(),d=.05*i;h.gain.setValueAtTime(d,e),h.gain.exponentialRampToValueAtTime(1e-4,e+a),u.connect(f),f.connect(h),h.connect(r),u.start(e),u.stop(e+a)};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="184",Z1=0,Ld=1,J1=2,Ko=1,Q1=2,Aa=3,Tr=0,xn=1,Hi=2,Xi=0,Ls=1,Dd=2,Id=3,Ud=4,ev=5,Nr=100,tv=101,nv=102,iv=103,rv=104,sv=200,av=201,ov=202,cv=203,au=204,ou=205,lv=206,uv=207,hv=208,fv=209,dv=210,pv=211,mv=212,gv=213,_v=214,cu=0,lu=1,uu=2,Ks=3,hu=4,fu=5,du=6,pu=7,eg=0,vv=1,xv=2,Mi=0,tg=1,ng=2,ig=3,rg=4,sg=5,ag=6,og=7,cg=300,Qr=301,js=302,al=303,ol=304,Hc=306,mu=1e3,Wi=1001,gu=1002,Qt=1003,Sv=1004,xo=1005,un=1006,cl=1007,kr=1008,Pn=1009,lg=1010,ug=1011,Oa=1012,Zh=1013,Ti=1014,vi=1015,Qi=1016,Jh=1017,Qh=1018,Ba=1020,hg=35902,fg=35899,dg=1021,pg=1022,ei=1023,er=1026,Gr=1027,mg=1028,ef=1029,es=1030,tf=1031,nf=1033,jo=33776,$o=33777,Zo=33778,Jo=33779,_u=35840,vu=35841,xu=35842,Su=35843,Mu=36196,Eu=37492,yu=37496,bu=37488,Tu=37489,lc=37490,Au=37491,wu=37808,Ru=37809,Cu=37810,Pu=37811,Lu=37812,Du=37813,Iu=37814,Uu=37815,Nu=37816,Fu=37817,Ou=37818,Bu=37819,ku=37820,Gu=37821,Vu=36492,zu=36494,Hu=36495,Wu=36283,Xu=36284,uc=36285,qu=36286,Mv=3200,Yu=0,Ev=1,mr="",Wn="srgb",hc="srgb-linear",fc="linear",st="srgb",us=7680,Nd=519,yv=512,bv=513,Tv=514,rf=515,Av=516,wv=517,sf=518,Rv=519,Fd=35044,Od="300 es",xi=2e3,ka=2001;function Cv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Pv(){const t=dc("canvas");return t.style.display="block",t}const Bd={};function kd(...t){const e="THREE."+t.shift();console.log(e,...t)}function gg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=gg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=gg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ku(...t){const e=t.join(" ");e in Bd||(Bd[e]=!0,Ie(...t))}function Lv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Dv={[cu]:lu,[uu]:du,[hu]:pu,[Ks]:fu,[lu]:cu,[du]:uu,[pu]:hu,[fu]:Ks};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const La=Math.PI/180,Ga=180/Math.PI;function ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function af(t,e){return(t%e+e)%e}function Iv(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Uv(t,e,n){return t!==e?(n-t)/(e-t):0}function Da(t,e,n){return(1-n)*t+n*e}function Nv(t,e,n,i){return Da(t,e,1-Math.exp(-n*i))}function Fv(t,e=1){return e-Math.abs(af(t,e*2)-e)}function Ov(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Bv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function kv(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Gv(t,e){return t+Math.random()*(e-t)}function Vv(t){return t*(.5-Math.random())}function zv(t){t!==void 0&&(Gd=t);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hv(t){return t*La}function Wv(t){return t*Ga}function Xv(t){return(t&t-1)===0&&t!==0}function qv(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Yv(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Kv(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*f,c*h,o*l);break;case"YZY":t.set(c*h,o*u,c*f,o*l);break;case"ZXZ":t.set(c*f,c*h,o*u,o*l);break;case"XZX":t.set(o*u,c*_,c*d,o*l);break;case"YXY":t.set(c*d,o*u,c*_,o*l);break;case"ZYZ":t.set(c*_,c*d,o*u,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ts(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Vd={DEG2RAD:La,RAD2DEG:Ga,generateUUID:ha,clamp:qe,euclideanModulo:af,mapLinear:Iv,inverseLerp:Uv,lerp:Da,damp:Nv,pingpong:Fv,smoothstep:Ov,smootherstep:Bv,randInt:kv,randFloat:Gv,randFloatSpread:Vv,seededRandom:zv,degToRad:Hv,radToDeg:Wv,isPowerOfTwo:Xv,ceilPowerOfTwo:qv,floorPowerOfTwo:Yv,setQuaternionFromProperEuler:Kv,normalize:dn,denormalize:Ts},pf=class pf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pf.prototype.isVector2=!0;let it=pf;class fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],E=s[a+3];if(f!==E||c!==h||l!==d||u!==_){let p=c*h+l*d+u*_+f*E;p<0&&(h=-h,d=-d,_=-_,E=-E,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,c=c*m+h*o,l=l*m+d*o,u=u*m+_*o,f=f*m+E*o}else{c=c*m+h*o,l=l*m+d*o,u=u*m+_*o,f=f*m+E*o;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[n]=o*_+u*f+c*d-l*h,e[n+1]=c*_+u*h+l*f-o*d,e[n+2]=l*_+u*d+o*h-c*f,e[n+3]=u*_-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),d=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mf=class mf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mf.prototype.isVector3=!0;let k=mf;const ll=new k,zd=new fa,gf=class gf{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],E=r[0],p=r[3],m=r[6],M=r[1],b=r[4],T=r[7],L=r[2],y=r[5],C=r[8];return s[0]=a*E+o*M+c*L,s[3]=a*p+o*b+c*y,s[6]=a*m+o*T+c*C,s[1]=l*E+u*M+f*L,s[4]=l*p+u*b+f*y,s[7]=l*m+u*T+f*C,s[2]=h*E+d*M+_*L,s[5]=h*p+d*b+_*y,s[8]=h*m+d*T+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,_=n*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=f*E,e[1]=(r*l-u*i)*E,e[2]=(o*i-r*a)*E,e[3]=h*E,e[4]=(u*n-r*c)*E,e[5]=(r*s-o*n)*E,e[6]=d*E,e[7]=(i*c-l*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ul.makeScale(e,n)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,n){return this.premultiply(ul.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gf.prototype.isMatrix3=!0;let Fe=gf;const ul=new Fe,Hd=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jv(){const t={enabled:!0,workingColorSpace:hc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?fc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ku("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ku("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hc]:{primaries:e,whitePoint:i,transfer:fc,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const je=jv();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ds(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class $v{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=dc("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zv=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hl(r[a].image)):s.push(hl(r[a]))}else s=hl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$v.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Jv=0;const fl=new k;class mn extends ss{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Wi,r=Wi,s=un,a=kr,o=ei,c=Pn,l=mn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ha(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mu:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mu:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=cg;mn.DEFAULT_ANISOTROPY=1;const _f=class _f{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],E=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(_+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(l+1)/2,T=(d+1)/2,L=(m+1)/2,y=(u+h)/4,C=(f+E)/4,x=(_+p)/4;return b>T&&b>L?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=y/i,s=C/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=y/r,s=x/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=x/s),this.set(i,r,s,n),this}let M=Math.sqrt((p-_)*(p-_)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(f-E)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_f.prototype.isVector4=!0;let Ct=_f;class Qv extends ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new mn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new of(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Qv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _g extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e2 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=class _c{constructor(e,n,i,r,s,a,o,c,l,u,f,h,d,_,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,f,h,d,_,E,p)}set(e,n,i,r,s,a,o,c,l,u,f,h,d,_,E,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=E,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,E=o*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=d+_*l,n[5]=h-E*l,n[9]=-o*c,n[2]=E-h*l,n[6]=_+d*l,n[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,E=l*f;n[0]=h+E*o,n[4]=_*o-d,n[8]=a*l,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=d*o-_,n[6]=E+h*o,n[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,E=l*f;n[0]=h-E*o,n[4]=-a*f,n[8]=_+d*o,n[1]=d+_*o,n[5]=a*u,n[9]=E-h*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,E=o*f;n[0]=c*u,n[4]=_*l-d,n[8]=h*l+E,n[1]=c*f,n[5]=E*l+h,n[9]=d*l-_,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,_=o*c,E=o*l;n[0]=c*u,n[4]=E-h*f,n[8]=_*f+d,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=d*f+_,n[10]=h-E*f}else if(e.order==="XZY"){const h=a*c,d=a*l,_=o*c,E=o*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+E,n[5]=a*u,n[9]=d*f-_,n[2]=_*f-d,n[6]=o*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t2,e,n2)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),or.crossVectors(i,An),or.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),or.crossVectors(i,An)),or.normalize(),So.crossVectors(An,or),r[0]=or.x,r[4]=So.x,r[8]=An.x,r[1]=or.y,r[5]=So.y,r[9]=An.y,r[2]=or.z,r[6]=So.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],E=i[6],p=i[10],m=i[14],M=i[3],b=i[7],T=i[11],L=i[15],y=r[0],C=r[4],x=r[8],A=r[12],N=r[1],w=r[5],G=r[9],X=r[13],j=r[2],I=r[6],z=r[10],B=r[14],Q=r[3],ee=r[7],ue=r[11],Se=r[15];return s[0]=a*y+o*N+c*j+l*Q,s[4]=a*C+o*w+c*I+l*ee,s[8]=a*x+o*G+c*z+l*ue,s[12]=a*A+o*X+c*B+l*Se,s[1]=u*y+f*N+h*j+d*Q,s[5]=u*C+f*w+h*I+d*ee,s[9]=u*x+f*G+h*z+d*ue,s[13]=u*A+f*X+h*B+d*Se,s[2]=_*y+E*N+p*j+m*Q,s[6]=_*C+E*w+p*I+m*ee,s[10]=_*x+E*G+p*z+m*ue,s[14]=_*A+E*X+p*B+m*Se,s[3]=M*y+b*N+T*j+L*Q,s[7]=M*C+b*w+T*I+L*ee,s[11]=M*x+b*G+T*z+L*ue,s[15]=M*A+b*X+T*B+L*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],E=e[7],p=e[11],m=e[15],M=c*d-l*h,b=o*d-l*f,T=o*h-c*f,L=a*d-l*u,y=a*h-c*u,C=a*f-o*u;return n*(E*M-p*b+m*T)-i*(_*M-p*L+m*y)+r*(_*b-E*L+m*C)-s*(_*T-E*y+p*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],E=e[13],p=e[14],m=e[15],M=n*o-i*a,b=n*c-r*a,T=n*l-s*a,L=i*c-r*o,y=i*l-s*o,C=r*l-s*c,x=u*E-f*_,A=u*p-h*_,N=u*m-d*_,w=f*p-h*E,G=f*m-d*E,X=h*m-d*p,j=M*X-b*G+T*w+L*N-y*A+C*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/j;return e[0]=(o*X-c*G+l*w)*I,e[1]=(r*G-i*X-s*w)*I,e[2]=(E*C-p*y+m*L)*I,e[3]=(h*y-f*C-d*L)*I,e[4]=(c*N-a*X-l*A)*I,e[5]=(n*X-r*N+s*A)*I,e[6]=(p*T-_*C-m*b)*I,e[7]=(u*C-h*T+d*b)*I,e[8]=(a*G-o*N+l*x)*I,e[9]=(i*N-n*G-s*x)*I,e[10]=(_*y-E*T+m*M)*I,e[11]=(f*T-u*y-d*M)*I,e[12]=(o*A-a*w-c*x)*I,e[13]=(n*w-i*A+r*x)*I,e[14]=(E*b-_*L-p*M)*I,e[15]=(u*L-f*b+h*M)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,_=s*f,E=a*u,p=a*f,m=o*f,M=c*l,b=c*u,T=c*f,L=i.x,y=i.y,C=i.z;return r[0]=(1-(E+m))*L,r[1]=(d+T)*L,r[2]=(_-b)*L,r[3]=0,r[4]=(d-T)*y,r[5]=(1-(h+m))*y,r[6]=(p+M)*y,r[7]=0,r[8]=(_+b)*C,r[9]=(p-M)*C,r[10]=(1-(h+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),c=fs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);const l=1/a,u=1/o,f=1/c;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,n.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=xi,c=!1){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let _,E;if(c)_=s/(a-s),E=a*s/(a-s);else if(o===xi)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===ka)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi,c=!1){const l=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),d=-(i+r)/(i-r);let _,E;if(c)_=1/(a-s),E=a/(a-s);else if(o===xi)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===ka)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};_c.prototype.isMatrix4=!0;let Pt=_c;const fs=new k,jn=new Pt,t2=new k(0,0,0),n2=new k(1,1,1),or=new k,So=new k,An=new k,Xd=new Pt,qd=new fa;class Ar{constructor(e=0,n=0,i=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i2=0;const Yd=new k,ds=new fa,Ii=new Pt,Mo=new k,ma=new k,r2=new k,s2=new fa,Kd=new k(1,0,0),jd=new k(0,1,0),$d=new k(0,0,1),Zd={type:"added"},a2={type:"removed"},ps={type:"childadded",child:null},dl={type:"childremoved",child:null};class tn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new k,n=new Ar,i=new fa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Fe}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,n){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Mo.copy(e):Mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ma,Mo,this.up):Ii.lookAt(Mo,ma,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ii),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),ps.child=e,this.dispatchEvent(ps),ps.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a2),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,r2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,s2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new k(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o2={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const p=n.getJointPose(E,i),m=this._getHandJoint(l,E);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o2)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function ml(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=af(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ml(a,s,e+1/3),this.g=ml(a,s,e),this.b=ml(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=vg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return je.workingToColorSpace(an.copy(this),e),Math.round(qe(an.r*255,0,255))*65536+Math.round(qe(an.g*255,0,255))*256+Math.round(qe(an.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Wn){je.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(Eo);const i=Da(cr.h,Eo.h,n),r=Da(cr.s,Eo.s,n),s=Da(cr.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Ye;Ye.NAMES=vg;class c2 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new k,Ui=new k,gl=new k,Ni=new k,ms=new k,gs=new k,Jd=new k,_l=new k,vl=new k,xl=new k,Sl=new Ct,Ml=new Ct,El=new Ct;class Qn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ui.subVectors(i,n),gl.subVectors(e,n);const a=$n.dot($n),o=$n.dot(Ui),c=$n.dot(gl),l=Ui.dot(Ui),u=Ui.dot(gl),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,_=(a*u-o*c)*h;return s.set(1-d-_,_,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Sl.setScalar(0),Ml.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,i),El.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sl,s.x),a.addScaledVector(Ml,s.y),a.addScaledVector(El,s.z),a}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ui.subVectors(e,n),$n.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),$n.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),_l.subVectors(e,i);const c=ms.dot(_l),l=gs.dot(_l);if(c<=0&&l<=0)return n.copy(i);vl.subVectors(e,r);const u=ms.dot(vl),f=gs.dot(vl);if(u>=0&&f<=u)return n.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(ms,a);xl.subVectors(e,s);const d=ms.dot(xl),_=gs.dot(xl);if(_>=0&&d<=_)return n.copy(s);const E=d*l-c*_;if(E<=0&&l>=0&&_<=0)return o=l/(l-_),n.copy(i).addScaledVector(gs,o);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Jd.subVectors(s,r),o=(f-u)/(f-u+(d-_)),n.copy(r).addScaledVector(Jd,o);const m=1/(p+E+h);return a=E*m,o=h*m,n.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),bo.subVectors(this.max,ga),_s.subVectors(e.a,ga),vs.subVectors(e.b,ga),xs.subVectors(e.c,ga),lr.subVectors(vs,_s),ur.subVectors(xs,vs),Pr.subVectors(_s,xs);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Pr.z,Pr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Pr.z,0,-Pr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Pr.y,Pr.x,0];return!yl(n,_s,vs,xs,bo)||(n=[1,0,0,0,1,0,0,0,1],!yl(n,_s,vs,xs,bo))?!1:(To.crossVectors(lr,ur),n=[To.x,To.y,To.z],yl(n,_s,vs,xs,bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new k,new k,new k,new k,new k,new k,new k,new k],Zn=new k,yo=new co,_s=new k,vs=new k,xs=new k,lr=new k,ur=new k,Pr=new k,ga=new k,bo=new k,To=new k,Lr=new k;function yl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Lr.fromArray(t,s);const o=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=e.dot(Lr),l=n.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ot=new k,Ao=new it;let l2=0;class yi extends ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fd,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ts(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ts(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ts(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ts(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class xg extends yi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sg extends yi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yi extends yi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const u2=new co,_a=new k,bl=new k;class lf{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):u2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const n=_a.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(bl)),this.expandByPoint(_a.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let h2=0;const Hn=new Pt,Tl=new tn,Ss=new k,wn=new co,va=new co,jt=new k;class tr extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cv(e)?Sg:xg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];va.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(wn.min,va.min),wn.expandByPoint(jt),jt.addVectors(wn.max,va.max),wn.expandByPoint(jt)):(wn.expandByPoint(va.min),wn.expandByPoint(va.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)jt.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(e,l),jt.add(Ss)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new k,c[x]=new k;const l=new k,u=new k,f=new k,h=new it,d=new it,_=new it,E=new k,p=new k;function m(x,A,N){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,N),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,A),_.fromBufferAttribute(s,N),u.sub(l),f.sub(l),d.sub(h),_.sub(h);const w=1/(d.x*_.y-_.x*d.y);isFinite(w)&&(E.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(w),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(w),o[x].add(E),o[A].add(E),o[N].add(E),c[x].add(p),c[A].add(p),c[N].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,A=M.length;x<A;++x){const N=M[x],w=N.start,G=N.count;for(let X=w,j=w+G;X<j;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new k,T=new k,L=new k,y=new k;function C(x){L.fromBufferAttribute(r,x),y.copy(L);const A=o[x];b.copy(A),b.sub(L.multiplyScalar(L.dot(A))).normalize(),T.crossVectors(y,A);const w=T.dot(c[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,w)}for(let x=0,A=M.length;x<A;++x){const N=M[x],w=N.start,G=N.count;for(let X=w,j=w+G;X<j;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let E=0,p=c.length;E<p;E++){o.isInterleavedBufferAttribute?d=c[E]*o.data.stride+o.offset:d=c[E]*u;for(let m=0;m<u;m++)h[_++]=l[d++]}return new yi(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,i);c.push(d)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let f2=0;class lo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Ls,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=ou,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==au&&(i.blendSrc=this.blendSrc),this.blendDst!==ou&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new k,Al=new k,wo=new k,hr=new k,wl=new k,Ro=new k,Rl=new k;class Mg{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Al.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Al);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=hr.dot(this.direction),c=-hr.dot(wo),l=hr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*c-o,h=a*o-c,_=s*u,f>=0)if(h>=-_)if(h<=_){const E=1/u;f*=E,h*=E,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Al).addScaledVector(wo,h),d}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){wl.subVectors(n,e),Ro.subVectors(i,e),Rl.crossVectors(wl,Ro);let a=this.direction.dot(Rl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hr.subVectors(this.origin,e);const c=o*this.direction.dot(Ro.crossVectors(hr,Ro));if(c<0)return null;const l=o*this.direction.dot(wl.cross(hr));if(l<0||c+l>a)return null;const u=-o*hr.dot(Rl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eg extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qd=new Pt,Dr=new Mg,Co=new lf,ep=new k,Po=new k,Lo=new k,Do=new k,Cl=new k,Io=new k,tp=new k,Uo=new k;class ri extends tn{constructor(e=new tr,n=new Eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Cl.fromBufferAttribute(f,e),a?Io.addScaledVector(Cl,u):Io.addScaledVector(Cl.sub(n),u))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Co.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Co,ep)===null||Dr.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Qd.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Qd),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=h.length;_<E;_++){const p=h[_],m=a[p.materialIndex],M=Math.max(p.start,d.start),b=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=M,L=b;T<L;T+=3){const y=o.getX(T),C=o.getX(T+1),x=o.getX(T+2);r=No(this,m,e,i,l,u,f,y,C,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let p=_,m=E;p<m;p+=3){const M=o.getX(p),b=o.getX(p+1),T=o.getX(p+2);r=No(this,a,e,i,l,u,f,M,b,T),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,E=h.length;_<E;_++){const p=h[_],m=a[p.materialIndex],M=Math.max(p.start,d.start),b=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let T=M,L=b;T<L;T+=3){const y=T,C=T+1,x=T+2;r=No(this,m,e,i,l,u,f,y,C,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,d.start),E=Math.min(c.count,d.start+d.count);for(let p=_,m=E;p<m;p+=3){const M=p,b=p+1,T=p+2;r=No(this,a,e,i,l,u,f,M,b,T),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function d2(t,e,n,i,r,s,a,o){let c;if(e.side===xn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Tr,o),c===null)return null;Uo.copy(o),Uo.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Uo);return l<n.near||l>n.far?null:{distance:l,point:Uo.clone(),object:t}}function No(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Po),t.getVertexPosition(c,Lo),t.getVertexPosition(l,Do);const u=d2(t,e,n,i,Po,Lo,Do,tp);if(u){const f=new k;Qn.getBarycoord(tp,Po,Lo,Do,f),r&&(u.uv=Qn.getInterpolatedAttribute(r,o,c,l,f,new it)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,o,c,l,f,new it)),a&&(u.normal=Qn.getInterpolatedAttribute(a,o,c,l,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new k,materialIndex:0};Qn.getNormal(Po,Lo,Do,h.normal),u.face=h,u.barycoord=f}return u}class p2 extends mn{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Qt,u=Qt,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pl=new k,m2=new k,g2=new Fe;class Ur{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pl.subVectors(i,n).cross(m2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Pl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||g2.getNormalMatrix(e),r=this.coplanarPoint(Pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new lf,_2=new it(.5,.5),Fo=new k;class uf{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,a=new Ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],E=s[9],p=s[10],m=s[11],M=s[12],b=s[13],T=s[14],L=s[15];if(r[0].setComponents(l-a,d-u,m-_,L-M).normalize(),r[1].setComponents(l+a,d+u,m+_,L+M).normalize(),r[2].setComponents(l+o,d+f,m+E,L+b).normalize(),r[3].setComponents(l-o,d-f,m-E,L-b).normalize(),i)r[4].setComponents(c,h,p,T).normalize(),r[5].setComponents(l-c,d-h,m-p,L-T).normalize();else if(r[4].setComponents(l-c,d-h,m-p,L-T).normalize(),n===xi)r[5].setComponents(l+c,d+h,m+p,L+T).normalize();else if(n===ka)r[5].setComponents(c,h,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=_2.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yg extends mn{constructor(e=[],n=Qr,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends mn{constructor(e,n,i=Ti,r,s,a,o=Qt,c=Qt,l,u=er,f=1){if(u!==er&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new of(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class v2 extends $s{constructor(e,n=Ti,i=Qr,r,s,a=Qt,o=Qt,c,l=er){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ts extends tr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yi(l,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(f,2));function _(E,p,m,M,b,T,L,y,C,x,A){const N=T/C,w=L/x,G=T/2,X=L/2,j=y/2,I=C+1,z=x+1;let B=0,Q=0;const ee=new k;for(let ue=0;ue<z;ue++){const Se=ue*w-X;for(let we=0;we<I;we++){const Je=we*N-G;ee[E]=Je*M,ee[p]=Se*b,ee[m]=j,l.push(ee.x,ee.y,ee.z),ee[E]=0,ee[p]=0,ee[m]=y>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(we/C),f.push(1-ue/x),B+=1}}for(let ue=0;ue<x;ue++)for(let Se=0;Se<C;Se++){const we=h+Se+I*ue,Je=h+Se+I*(ue+1),at=h+(Se+1)+I*(ue+1),ke=h+(Se+1)+I*ue;c.push(we,Je,ke),c.push(Je,at,ke),Q+=6}o.addGroup(d,Q,A),d+=Q,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wc extends tr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=n/c,d=[],_=[],E=[],p=[];for(let m=0;m<u;m++){const M=m*h-a;for(let b=0;b<l;b++){const T=b*f-s;_.push(T,-M,0),E.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){const b=M+l*m,T=M+l*(m+1),L=M+1+l*(m+1),y=M+1+l*m;d.push(b,T,y),d.push(T,L,y)}this.setIndex(d),this.setAttribute("position",new Yi(_,3)),this.setAttribute("normal",new Yi(E,3)),this.setAttribute("uv",new Yi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(np(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(np(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function np(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function x2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const S2={clone:Zs,merge:pn};var M2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M2,this.fragmentShader=E2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=x2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class y2 extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ip extends lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b2 extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T2 extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hf extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class A2 extends hf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Ll=new Pt,rp=new k,sp=new k;class w2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),n.position.copy(rp),sp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sp),n.updateMatrixWorld(),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ka||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oo=new k,Bo=new fa,fi=new k;class Ag extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,Bo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,fi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Oo,Bo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Bo,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new k,ap=new it,op=new it;class Xn extends Ag{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,ap,op),n.subVectors(op,ap)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ff extends Ag{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class R2 extends w2{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cp extends hf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new R2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class C2 extends hf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ms=-90,Es=1;class P2 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Ms,Es,e,n);r.layers=this.layers,this.add(r);const s=new Xn(Ms,Es,e,n);s.layers=this.layers,this.add(s);const a=new Xn(Ms,Es,e,n);a.layers=this.layers,this.add(a);const o=new Xn(Ms,Es,e,n);o.layers=this.layers,this.add(o);const c=new Xn(Ms,Es,e,n);c.layers=this.layers,this.add(c);const l=new Xn(Ms,Es,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class L2 extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lp=new Pt;class D2{constructor(e,n,i=0,r=1/0){this.ray=new Mg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):$e("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lp),this}intersectObject(e,n=!0,i=[]){return ju(e,this,i,n),i.sort(up),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ju(e[r],this,i,n);return i.sort(up),i}}function up(t,e){return t.distance-e.distance}function ju(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)ju(s[a],e,n,!0)}}const vf=class vf{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};vf.prototype.isMatrix2=!0;let hp=vf;function fp(t,e,n,i){const r=I2(i);switch(n){case dg:return t*e;case mg:return t*e/r.components*r.byteLength;case ef:return t*e/r.components*r.byteLength;case es:return t*e*2/r.components*r.byteLength;case tf:return t*e*2/r.components*r.byteLength;case pg:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case nf:return t*e*4/r.components*r.byteLength;case jo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vu:case Su:return Math.max(t,16)*Math.max(e,8)/4;case _u:case xu:return Math.max(t,8)*Math.max(e,8)/2;case Mu:case Eu:case bu:case Tu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yu:case lc:case Au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ku:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vu:case zu:case Hu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wu:case Xu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case uc:case qu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I2(t){switch(t){case Pn:case lg:return{byteLength:1,components:1};case Oa:case ug:case Qi:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case Ti:case Zh:case vi:return{byteLength:4,components:1};case hg:case fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function U2(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=t.SHORT;else if(l instanceof Uint32Array)d=t.UNSIGNED_INT;else if(l instanceof Int32Array)d=t.INT;else if(l instanceof Int8Array)d=t.BYTE;else if(l instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(t.bindBuffer(l,o),f.length===0)t.bufferSubData(l,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],E=f[d];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++h,f[h]=E)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const E=f[d];t.bufferSubData(l,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var N2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F2=`#ifdef USE_ALPHAHASH
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
#endif`,O2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V2=`#ifdef USE_AOMAP
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
#endif`,z2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H2=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,W2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K2=`#ifdef USE_IRIDESCENCE
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
#endif`,j2=`#ifdef USE_BUMPMAP
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
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,wx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ix=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ux=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xx=`#if defined( USE_POINTS_UV )
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
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r3=`#ifdef USE_NORMALMAP
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
#endif`,s3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,v3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,S3=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,M3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E3=`#ifdef USE_SKINNING
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
#endif`,y3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b3=`#ifdef USE_SKINNING
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
#endif`,T3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C3=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P3=`#ifdef USE_TRANSMISSION
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
#endif`,L3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F3=`uniform sampler2D t2D;
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
}`,O3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V3=`#include <common>
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
}`,z3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H3=`#define DISTANCE
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
}`,W3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,X3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y3=`uniform float scale;
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
}`,K3=`uniform vec3 diffuse;
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
}`,j3=`#include <common>
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
}`,$3=`uniform vec3 diffuse;
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
}`,Z3=`#define LAMBERT
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
}`,J3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Q3=`#define MATCAP
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
}`,eS=`#define MATCAP
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
}`,tS=`#define NORMAL
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
}`,nS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iS=`#define PHONG
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
}`,rS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,sS=`#define STANDARD
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
}`,aS=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,oS=`#define TOON
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
}`,cS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,lS=`uniform float size;
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
}`,uS=`uniform vec3 diffuse;
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
}`,hS=`#include <common>
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
}`,fS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,dS=`uniform float rotation;
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
}`,pS=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:N2,alphahash_pars_fragment:F2,alphamap_fragment:O2,alphamap_pars_fragment:B2,alphatest_fragment:k2,alphatest_pars_fragment:G2,aomap_fragment:V2,aomap_pars_fragment:z2,batching_pars_vertex:H2,batching_vertex:W2,begin_vertex:X2,beginnormal_vertex:q2,bsdfs:Y2,iridescence_fragment:K2,bumpmap_pars_fragment:j2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:Z2,clipping_planes_pars_vertex:J2,clipping_planes_vertex:Q2,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ax,displacementmap_pars_vertex:ox,displacementmap_vertex:cx,emissivemap_fragment:lx,emissivemap_pars_fragment:ux,colorspace_fragment:hx,colorspace_pars_fragment:fx,envmap_fragment:dx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:wx,envmap_vertex:_x,fog_vertex:vx,fog_pars_vertex:xx,fog_fragment:Sx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:yx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ax,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Px,lights_phong_pars_fragment:Lx,lights_physical_fragment:Dx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Ux,lights_fragment_maps:Nx,lights_fragment_end:Fx,lightprobes_pars_fragment:Ox,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Vx,map_fragment:zx,map_pars_fragment:Hx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:Kx,morphcolor_vertex:jx,morphnormal_vertex:$x,morphtarget_pars_vertex:Zx,morphtarget_vertex:Jx,normal_fragment_begin:Qx,normal_fragment_maps:e3,normal_pars_fragment:t3,normal_pars_vertex:n3,normal_vertex:i3,normalmap_pars_fragment:r3,clearcoat_normal_fragment_begin:s3,clearcoat_normal_fragment_maps:a3,clearcoat_pars_fragment:o3,iridescence_pars_fragment:c3,opaque_fragment:l3,packing:u3,premultiplied_alpha_fragment:h3,project_vertex:f3,dithering_fragment:d3,dithering_pars_fragment:p3,roughnessmap_fragment:m3,roughnessmap_pars_fragment:g3,shadowmap_pars_fragment:_3,shadowmap_pars_vertex:v3,shadowmap_vertex:x3,shadowmask_pars_fragment:S3,skinbase_vertex:M3,skinning_pars_vertex:E3,skinning_vertex:y3,skinnormal_vertex:b3,specularmap_fragment:T3,specularmap_pars_fragment:A3,tonemapping_fragment:w3,tonemapping_pars_fragment:R3,transmission_fragment:C3,transmission_pars_fragment:P3,uv_pars_fragment:L3,uv_pars_vertex:D3,uv_vertex:I3,worldpos_vertex:U3,background_vert:N3,background_frag:F3,backgroundCube_vert:O3,backgroundCube_frag:B3,cube_vert:k3,cube_frag:G3,depth_vert:V3,depth_frag:z3,distance_vert:H3,distance_frag:W3,equirect_vert:X3,equirect_frag:q3,linedashed_vert:Y3,linedashed_frag:K3,meshbasic_vert:j3,meshbasic_frag:$3,meshlambert_vert:Z3,meshlambert_frag:J3,meshmatcap_vert:Q3,meshmatcap_frag:eS,meshnormal_vert:tS,meshnormal_frag:nS,meshphong_vert:iS,meshphong_frag:rS,meshphysical_vert:sS,meshphysical_frag:aS,meshtoon_vert:oS,meshtoon_frag:cS,points_vert:lS,points_frag:uS,shadow_vert:hS,shadow_frag:fS,sprite_vert:dS,sprite_frag:pS},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},mi={basic:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:pn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:pn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:pn([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:pn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:pn([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:pn([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:pn([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:pn([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mi.physical={uniforms:pn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ko={r:0,b:0,g:0},mS=new Pt,Rg=new Fe;Rg.set(-1,0,0,0,1,0,0,0,1);function gS(t,e,n,i,r,s){const a=new Ye(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function d(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const T=M.backgroundBlurriness>0;b=e.get(b,T)}return b}function _(M){let b=!1;const T=d(M);T===null?p(a,o):T&&T.isColor&&(p(T,1),b=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(M,b){const T=d(b);T&&(T.isCubeTexture||T.mapping===Hc)?(l===void 0&&(l=new ri(new ts(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Zs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mS.makeRotationFromEuler(b.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rg),l.material.toneMapped=je.getTransfer(T.colorSpace)!==st,(u!==T||f!==T.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,h=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ri(new Wc(2,2),new Ai({name:"BackgroundMaterial",uniforms:Zs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,b){M.getRGB(ko,Tg(t)),n.buffers.color.setClear(ko.r,ko.g,ko.b,b,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:E,dispose:m}}function _S(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,G,X,j,I){let z=!1;const B=f(w,j,X,G);s!==B&&(s=B,l(s.object)),z=d(w,j,X,I),z&&_(w,j,X,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,T(w,G,X,j),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return t.createVertexArray()}function l(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function f(w,G,X,j){const I=j.wireframe===!0;let z=i[G.id];z===void 0&&(z={},i[G.id]=z);const B=w.isInstancedMesh===!0?w.id:0;let Q=z[B];Q===void 0&&(Q={},z[B]=Q);let ee=Q[X.id];ee===void 0&&(ee={},Q[X.id]=ee);let ue=ee[I];return ue===void 0&&(ue=h(c()),ee[I]=ue),ue}function h(w){const G=[],X=[],j=[];for(let I=0;I<n;I++)G[I]=0,X[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:j,object:w,attributes:{},index:null}}function d(w,G,X,j){const I=s.attributes,z=G.attributes;let B=0;const Q=X.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const Se=I[ee];let we=z[ee];if(we===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(we=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(we=w.instanceColor)),Se===void 0||Se.attribute!==we||we&&Se.data!==we.data)return!0;B++}return s.attributesNum!==B||s.index!==j}function _(w,G,X,j){const I={},z=G.attributes;let B=0;const Q=X.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let Se=z[ee];Se===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const we={};we.attribute=Se,Se&&Se.data&&(we.data=Se.data),I[ee]=we,B++}s.attributes=I,s.attributesNum=B,s.index=j}function E(){const w=s.newAttributes;for(let G=0,X=w.length;G<X;G++)w[G]=0}function p(w){m(w,0)}function m(w,G){const X=s.newAttributes,j=s.enabledAttributes,I=s.attributeDivisors;X[w]=1,j[w]===0&&(t.enableVertexAttribArray(w),j[w]=1),I[w]!==G&&(t.vertexAttribDivisor(w,G),I[w]=G)}function M(){const w=s.newAttributes,G=s.enabledAttributes;for(let X=0,j=G.length;X<j;X++)G[X]!==w[X]&&(t.disableVertexAttribArray(X),G[X]=0)}function b(w,G,X,j,I,z,B){B===!0?t.vertexAttribIPointer(w,G,X,I,z):t.vertexAttribPointer(w,G,X,j,I,z)}function T(w,G,X,j){E();const I=j.attributes,z=X.getAttributes(),B=G.defaultAttributeValues;for(const Q in z){const ee=z[Q];if(ee.location>=0){let ue=I[Q];if(ue===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const Se=ue.normalized,we=ue.itemSize,Je=e.get(ue);if(Je===void 0)continue;const at=Je.buffer,ke=Je.type,K=Je.bytesPerElement,de=ke===t.INT||ke===t.UNSIGNED_INT||ue.gpuType===Zh;if(ue.isInterleavedBufferAttribute){const re=ue.data,Le=re.stride,Ne=ue.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)m(ee.location+De,re.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<ee.locationSize;De++)p(ee.location+De);t.bindBuffer(t.ARRAY_BUFFER,at);for(let De=0;De<ee.locationSize;De++)b(ee.location+De,we/ee.locationSize,ke,Se,Le*K,(Ne+we/ee.locationSize*De)*K,de)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)m(ee.location+re,ue.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<ee.locationSize;re++)p(ee.location+re);t.bindBuffer(t.ARRAY_BUFFER,at);for(let re=0;re<ee.locationSize;re++)b(ee.location+re,we/ee.locationSize,ke,Se,we*K,we/ee.locationSize*re*K,de)}}else if(B!==void 0){const Se=B[Q];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(ee.location,Se);break;case 3:t.vertexAttrib3fv(ee.location,Se);break;case 4:t.vertexAttrib4fv(ee.location,Se);break;default:t.vertexAttrib1fv(ee.location,Se)}}}}M()}function L(){A();for(const w in i){const G=i[w];for(const X in G){const j=G[X];for(const I in j){const z=j[I];for(const B in z)u(z[B].object),delete z[B];delete j[I]}}delete i[w]}}function y(w){if(i[w.id]===void 0)return;const G=i[w.id];for(const X in G){const j=G[X];for(const I in j){const z=j[I];for(const B in z)u(z[B].object),delete z[B];delete j[I]}}delete i[w.id]}function C(w){for(const G in i){const X=i[G];for(const j in X){const I=X[j];if(I[w.id]===void 0)continue;const z=I[w.id];for(const B in z)u(z[B].object),delete z[B];delete I[w.id]}}}function x(w){for(const G in i){const X=i[G],j=w.isInstancedMesh===!0?w.id:0,I=X[j];if(I!==void 0){for(const z in I){const B=I[z];for(const Q in B)u(B[Q].object),delete B[Q];delete I[z]}delete X[j],Object.keys(X).length===0&&delete i[G]}}}function A(){N(),a=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:L,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:p,disableUnusedAttributes:M}}function vS(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ei&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!x)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=t.getParameter(t.MAX_SAMPLES),y=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:T,maxSamples:L,samples:y}}function SS(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ur,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,m=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const M=s?0:i,b=M*4;let T=m.clippingState||null;c.value=T,T=u(_,h,b,d);for(let L=0;L!==b;++L)T[L]=n[L];m.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=c.value,_!==!0||p===null){const m=d+E*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,T=d;b!==E;++b,T+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const Sr=4,dp=[.125,.215,.35,.446,.526,.582],Fr=20,MS=256,xa=new ff,pp=new Ye;let Dl=null,Il=0,Ul=0,Nl=!1;const ES=new k;class mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=ES}=s;Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Il,Ul),this._renderer.xr.enabled=Nl,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Qi,format:ei,colorSpace:hc,depthBuffer:!1},r=gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yS(s)),this._blurMaterial=TS(s,e,n),this._ggxMaterial=bS(s,e,n)}return r}_compileMaterial(e){const n=new ri(new tr,e);this._renderer.compile(n,xa)}_sceneToCubeUV(e,n,i,r,s){const c=new Xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(pp),f.toneMapping=Mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new ts,new Eg({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let m=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(pp),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):T===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const L=this._cubeSize;ys(r,T*L,b>2?L:0,L,L),f.setRenderTarget(r),m&&f.render(E,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ys(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,xa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:_}=this,E=this._sizeLods[i],p=3*E*(i>_-Sr?i-_+Sr:0),m=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-n,ys(s,p,m,3*E,2*E),r.setRenderTarget(s),r.render(o,xa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,ys(e,p,m,3*E,2*E),r.setRenderTarget(e),r.render(o,xa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const h=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fr-1),E=s/_,p=isFinite(s)?1+Math.floor(u*E):Fr;p>Fr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const m=[];let M=0;for(let C=0;C<Fr;++C){const x=C/E,A=Math.exp(-x*x/2);m.push(A),C===0?M+=A:C<p&&(M+=2*A)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const T=this._sizeLods[r],L=3*T*(r>b-Sr?r-b+Sr:0),y=4*(this._cubeSize-T);ys(n,L,y,3*T,2*T),c.setRenderTarget(n),c.render(f,xa)}}function yS(t){const e=[],n=[],i=[];let r=t;const s=t-Sr+1+dp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-Sr?c=dp[a-t+Sr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,E=3,p=2,m=1,M=new Float32Array(E*_*d),b=new Float32Array(p*_*d),T=new Float32Array(m*_*d);for(let y=0;y<d;y++){const C=y%3*2/3-1,x=y>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(A,E*_*y),b.set(h,p*_*y);const N=[y,y,y,y,y,y];T.set(N,m*_*y)}const L=new tr;L.setAttribute("position",new yi(M,E)),L.setAttribute("uv",new yi(b,p)),L.setAttribute("faceIndex",new yi(T,m)),i.push(new ri(L,null)),r>Sr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function gp(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bS(t,e,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function TS(t,e,n){const i=new Float32Array(Fr),r=new k(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function _p(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function vp(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}class Cg extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ts(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Xi});s.uniforms.tEquirect.value=n;const a=new ri(r,s),o=n.minFilter;return n.minFilter===kr&&(n.minFilter=un),new P2(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function AS(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===al||d===ol)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const E=new Cg(_.height);return E.fromEquirectangularTexture(t,h),e.set(h,E),h.addEventListener("dispose",l),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===al||d===ol,E=d===Qr||d===js;if(_||E){let p=n.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new mp(t)),p=_?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return _&&M&&M.height>0||E&&M&&c(M)?(i===null&&(i=new mp(t)),p=_?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===al?h.mapping=Qr:d===ol&&(h.mapping=js),h}function c(h){let d=0;const _=6;for(let E=0;E<_;E++)h[E]!==void 0&&d++;return d===_}function l(h){const d=h.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function wS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ku("WebGLRenderer: "+i+" extension not supported."),r}}}function RS(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,_=f.attributes.position;let E=0;if(_===void 0)return;if(d!==null){const M=d.array;E=d.version;for(let b=0,T=M.length;b<T;b+=3){const L=M[b+0],y=M[b+1],C=M[b+2];h.push(L,y,y,C,C,L)}}else{const M=_.array;E=_.version;for(let b=0,T=M.length/3-1;b<T;b+=3){const L=b+0,y=b+1,C=b+2;h.push(L,y,y,C,C,L)}}const p=new(_.count>=65535?Sg:xg)(h,1);p.version=E;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function CS(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){t.drawElements(i,h,s,f*a),n.update(h,i,1)}function l(f,h,d){d!==0&&(t.drawElementsInstanced(i,h,s,f*a,d),n.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let E=0;for(let p=0;p<d;p++)E+=h[p];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function PS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LS(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var d=N;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),E===!0&&(T=2),p===!0&&(T=3);let L=o.attributes.position.count*T,y=1;L>e.maxTextureSize&&(y=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*y*4*f),x=new _g(C,L,y,f);x.type=vi,x.needsUpdate=!0;const A=T*4;for(let w=0;w<f;w++){const G=m[w],X=M[w],j=b[w],I=L*y*4*w;for(let z=0;z<G.count;z++){const B=z*A;_===!0&&(r.fromBufferAttribute(G,z),C[I+B+0]=r.x,C[I+B+1]=r.y,C[I+B+2]=r.z,C[I+B+3]=0),E===!0&&(r.fromBufferAttribute(X,z),C[I+B+4]=r.x,C[I+B+5]=r.y,C[I+B+6]=r.z,C[I+B+7]=0),p===!0&&(r.fromBufferAttribute(j,z),C[I+B+8]=r.x,C[I+B+9]=r.y,C[I+B+10]=r.z,C[I+B+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:x,size:new it(L,y)},i.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const E=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",E),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function DS(t,e,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const IS={[tg]:"LINEAR_TONE_MAPPING",[ng]:"REINHARD_TONE_MAPPING",[ig]:"CINEON_TONE_MAPPING",[rg]:"ACES_FILMIC_TONE_MAPPING",[ag]:"AGX_TONE_MAPPING",[og]:"NEUTRAL_TONE_MAPPING",[sg]:"CUSTOM_TONE_MAPPING"};function US(t,e,n,i,r){const s=new Ei(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new $s(e,n):void 0}),a=new Ei(e,n,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),o=new tr;o.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Yi([0,2,0,0,2,0],2));const c=new y2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ri(o,c),u=new ff(-1,1,1,-1,0,1);let f=null,h=null,d=!1,_,E=null,p=[],m=!1;this.setSize=function(M,b){s.setSize(M,b),a.setSize(M,b);for(let T=0;T<p.length;T++){const L=p[T];L.setSize&&L.setSize(M,b)}},this.setEffects=function(M){p=M,m=p.length>0&&p[0].isRenderPass===!0;const b=s.width,T=s.height;for(let L=0;L<p.length;L++){const y=p[L];y.setSize&&y.setSize(b,T)}},this.begin=function(M,b){if(d||M.toneMapping===Mi&&p.length===0)return!1;if(E=b,b!==null){const T=b.width,L=b.height;(s.width!==T||s.height!==L)&&this.setSize(T,L)}return m===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=Mi,!0},this.hasRenderPass=function(){return m},this.end=function(M,b){M.toneMapping=_,d=!0;let T=s,L=a;for(let y=0;y<p.length;y++){const C=p[y];if(C.enabled!==!1&&(C.render(M,L,T,b),C.needsSwap!==!1)){const x=T;T=L,L=x}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,c.defines={},je.getTransfer(f)===st&&(c.defines.SRGB_TRANSFER="");const y=IS[h];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(E),M.render(l,u),E=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Pg=new mn,$u=new $s(1,1),Lg=new _g,Dg=new e2,Ig=new yg,xp=[],Sp=[],Mp=new Float32Array(16),Ep=new Float32Array(9),yp=new Float32Array(4);function da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xp[r];if(s===void 0&&(s=new Float32Array(r),xp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qc(t,e){let n=Sp[e];n===void 0&&(n=new Int32Array(e),Sp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function OS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function BS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function kS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;yp.set(i),t.uniformMatrix2fv(this.addr,!1,yp),Kt(n,i)}}function GS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;Ep.set(i),t.uniformMatrix3fv(this.addr,!1,Ep),Kt(n,i)}}function VS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;Mp.set(i),t.uniformMatrix4fv(this.addr,!1,Mp),Kt(n,i)}}function zS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function WS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function XS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function qS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function KS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function jS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function $S(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($u.compareFunction=n.isReversedDepthBuffer()?sf:rf,s=$u):s=Pg,n.setTexture2D(e||s,r)}function ZS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dg,r)}function JS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ig,r)}function QS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lg,r)}function eM(t){switch(t){case 5126:return NS;case 35664:return FS;case 35665:return OS;case 35666:return BS;case 35674:return kS;case 35675:return GS;case 35676:return VS;case 5124:case 35670:return zS;case 35667:case 35671:return HS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return qS;case 36294:return YS;case 36295:return KS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return QS}}function tM(t,e){t.uniform1fv(this.addr,e)}function nM(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function iM(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function rM(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function sM(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aM(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oM(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cM(t,e){t.uniform1iv(this.addr,e)}function lM(t,e){t.uniform2iv(this.addr,e)}function uM(t,e){t.uniform3iv(this.addr,e)}function hM(t,e){t.uniform4iv(this.addr,e)}function fM(t,e){t.uniform1uiv(this.addr,e)}function dM(t,e){t.uniform2uiv(this.addr,e)}function pM(t,e){t.uniform3uiv(this.addr,e)}function mM(t,e){t.uniform4uiv(this.addr,e)}function gM(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=$u:a=Pg;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function _M(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Dg,s[a])}function vM(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ig,s[a])}function xM(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lg,s[a])}function SM(t){switch(t){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return cM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}class MM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eM(n.type)}}class EM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SM(n.type)}}class yM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function bp(t,e){t.seq.push(e),t.map[e.id]=e}function bM(t,e,n){const i=t.name,r=i.length;for(Fl.lastIndex=0;;){const s=Fl.exec(i),a=Fl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){bp(n,l===void 0?new MM(o,t,e):new EM(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new yM(o),bp(n,f)),n=f}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);bM(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const TM=37297;let AM=0;function wM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ap=new Fe;function RM(t){je._getMatrix(Ap,je.workingColorSpace,t);const e=`mat3( ${Ap.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case fc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+wM(t.getShaderSource(e),o)}else return s}function CM(t,e){const n=RM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PM={[tg]:"Linear",[ng]:"Reinhard",[ig]:"Cineon",[rg]:"ACESFilmic",[ag]:"AgX",[og]:"Neutral",[sg]:"Custom"};function LM(t,e){const n=PM[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new k;function DM(){je.getLuminanceCoefficients(Go);const t=Go.x.toFixed(4),e=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function UM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function wa(t){return t!==""}function Rp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(t){return t.replace(FM,BM)}const OM=new Map;function BM(t,e){let n=Ve[e];if(n===void 0){const i=OM.get(e);if(i!==void 0)n=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zu(n)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(t){return t.replace(kM,GM)}function GM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const VM={[Ko]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function zM(t){return VM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HM={[Qr]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function WM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":HM[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const XM={[js]:"ENVMAP_MODE_REFRACTION"};function qM(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":XM[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YM={[eg]:"ENVMAP_BLENDING_MULTIPLY",[vv]:"ENVMAP_BLENDING_MIX",[xv]:"ENVMAP_BLENDING_ADD"};function KM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":YM[t.combine]||"ENVMAP_BLENDING_NONE"}function jM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function $M(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=zM(n),l=WM(n),u=qM(n),f=KM(n),h=jM(n),d=IM(n),_=UM(s),E=r.createProgram();let p,m,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wa).join(`
`),m.length>0&&(m+=`
`)):(p=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),m=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Mi?LM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,CM("linearToOutputTexel",n.outputColorSpace),DM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wa).join(`
`)),a=Zu(a),a=Rp(a,n),a=Cp(a,n),o=Zu(o),o=Rp(o,n),o=Cp(o,n),a=Pp(a),o=Pp(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=M+p+a,T=M+m+o,L=Tp(r,r.VERTEX_SHADER,b),y=Tp(r,r.FRAGMENT_SHADER,T);r.attachShader(E,L),r.attachShader(E,y),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(w){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(L)||"",j=r.getShaderInfoLog(y)||"",I=G.trim(),z=X.trim(),B=j.trim();let Q=!0,ee=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,L,y);else{const ue=wp(r,L,"vertex"),Se=wp(r,y,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+ue+`
`+Se)}else I!==""?Ie("WebGLProgram: Program Info Log:",I):(z===""||B==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Q,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:m}})}r.deleteShader(L),r.deleteShader(y),x=new Qo(r,E),A=NM(r,E)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,TM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=y,this}let ZM=0;class JM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new QM(e),n.set(e,i)),i}}class QM{constructor(e){this.id=ZM++,this.code=e,this.usedTimes=0}}function eE(t){return t===es||t===lc||t===uc}function tE(t,e,n,i,r,s){const a=new cf,o=new JM,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,A,N,w,G,X){const j=w.fog,I=G.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||z,B),ee=Q&&Q.mapping===Hc?Q.image.height:null,ue=d[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,we=Se!==void 0?Se.length:0;let Je=0;I.morphAttributes.position!==void 0&&(Je=1),I.morphAttributes.normal!==void 0&&(Je=2),I.morphAttributes.color!==void 0&&(Je=3);let at,ke,K,de;if(ue){const Oe=mi[ue];at=Oe.vertexShader,ke=Oe.fragmentShader}else at=x.vertexShader,ke=x.fragmentShader,o.update(x),K=o.getVertexShaderID(x),de=o.getFragmentShaderID(x);const re=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Ne=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,St=!!x.map,We=!!x.matcap,ot=!!Q,gt=!!x.aoMap,He=!!x.lightMap,Vt=!!x.bumpMap,Mt=!!x.normalMap,Mn=!!x.displacementMap,P=!!x.emissiveMap,zt=!!x.metalnessMap,Xe=!!x.roughnessMap,pt=x.anisotropy>0,ce=x.clearcoat>0,At=x.dispersion>0,S=x.iridescence>0,g=x.sheen>0,U=x.transmission>0,q=pt&&!!x.anisotropyMap,J=ce&&!!x.clearcoatMap,te=ce&&!!x.clearcoatNormalMap,oe=ce&&!!x.clearcoatRoughnessMap,H=S&&!!x.iridescenceMap,Y=S&&!!x.iridescenceThicknessMap,pe=g&&!!x.sheenColorMap,_e=g&&!!x.sheenRoughnessMap,se=!!x.specularMap,ne=!!x.specularColorMap,Ue=!!x.specularIntensityMap,Ge=U&&!!x.transmissionMap,tt=U&&!!x.thicknessMap,R=!!x.gradientMap,ie=!!x.alphaMap,W=x.alphaTest>0,me=!!x.alphaHash,ae=!!x.extensions;let Z=Mi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Z=t.toneMapping);const Ee={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:ke,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:St,matcap:We,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:ee,aoMap:gt,lightMap:He,bumpMap:Vt,normalMap:Mt,displacementMap:Mn,emissiveMap:P,normalMapObjectSpace:Mt&&x.normalMapType===Ev,normalMapTangentSpace:Mt&&x.normalMapType===Yu,packedNormalMap:Mt&&x.normalMapType===Yu&&eE(x.normalMap.format),metalnessMap:zt,roughnessMap:Xe,anisotropy:pt,anisotropyMap:q,clearcoat:ce,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:At,iridescence:S,iridescenceMap:H,iridescenceThicknessMap:Y,sheen:g,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:se,specularColorMap:ne,specularIntensityMap:Ue,transmission:U,transmissionMap:Ge,thicknessMap:tt,gradientMap:R,opaque:x.transparent===!1&&x.blending===Ls&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:W,alphaHash:me,combine:x.combine,mapUv:St&&_(x.map.channel),aoMapUv:gt&&_(x.aoMap.channel),lightMapUv:He&&_(x.lightMap.channel),bumpMapUv:Vt&&_(x.bumpMap.channel),normalMapUv:Mt&&_(x.normalMap.channel),displacementMapUv:Mn&&_(x.displacementMap.channel),emissiveMapUv:P&&_(x.emissiveMap.channel),metalnessMapUv:zt&&_(x.metalnessMap.channel),roughnessMapUv:Xe&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:J&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:se&&_(x.specularMap.channel),specularColorMapUv:ne&&_(x.specularColorMap.channel),specularIntensityMapUv:Ue&&_(x.specularIntensityMap.channel),transmissionMapUv:Ge&&_(x.transmissionMap.channel),thicknessMapUv:tt&&_(x.thicknessMap.channel),alphaMapUv:ie&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Mt||pt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(St||ie),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Le,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Je,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Z,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:P&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(A,x),M(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function b(x){const A=d[x.type];let N;if(A){const w=mi[A];N=S2.clone(w.uniforms)}else N=x.uniforms;return N}function T(x,A){let N=u.get(A);return N!==void 0?++N.usedTimes:(N=new $M(t,A,x,r),l.push(N),u.set(A,N)),N}function L(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:L,releaseShaderCache:y,programs:l,dispose:C}}function nE(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Dp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,E,p,m){let M=t[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:p,group:m},t[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=_,M.materialVariant=a(h),M.groupOrder=E,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function c(h,d,_,E,p,m){const M=o(h,d,_,E,p,m);_.transmission>0?i.push(M):_.transparent===!0?r.push(M):n.push(M)}function l(h,d,_,E,p,m){const M=o(h,d,_,E,p,m);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):n.unshift(M)}function u(h,d){n.length>1&&n.sort(h||iE),i.length>1&&i.sort(d||Dp),r.length>1&&r.sort(d||Dp)}function f(){for(let h=e,d=t.length;h<d;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function rE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ip,t.set(i,[a])):r>=s.length?(a=new Ip,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ye};break;case"SpotLight":n={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function aE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oE=0;function cE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lE(t){const e=new sE,n=aE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new Pt,a=new Pt;function o(l){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,_=0,E=0,p=0,m=0,M=0,b=0,T=0,L=0,y=0,C=0;l.sort(cE);for(let A=0,N=l.length;A<N;A++){const w=l[A],G=w.color,X=w.intensity,j=w.distance;let I=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===es?I=w.shadow.map.texture:I=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=G.r*X,f+=G.g*X,h+=G.b*X;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],X);C++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const B=w.shadow,Q=n.get(w);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=w.shadow.matrix,M++}i.directional[d]=z,d++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(G).multiplyScalar(X),z.distance=j,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[E]=z;const B=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,B.updateMatrices(w),w.castShadow&&y++),i.spotLightMatrix[E]=B.matrix,w.castShadow){const Q=n.get(w);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,i.spotShadow[E]=Q,i.spotShadowMap[E]=I,T++}E++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(G).multiplyScalar(X),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=z,p++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const B=w.shadow,Q=n.get(w);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=w.shadow.matrix,b++}i.point[_]=z,_++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(X),z.groundColor.copy(w.groundColor).multiplyScalar(X),i.hemi[m]=z,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==d||x.pointLength!==_||x.spotLength!==E||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==M||x.numPointShadows!==b||x.numSpotShadows!==T||x.numSpotMaps!==L||x.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=E,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+L-y,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=C,x.directionalLength=d,x.pointLength=_,x.spotLength=E,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=M,x.numPointShadows=b,x.numSpotShadows=T,x.numSpotMaps=L,x.numLightProbes=C,i.version=oE++)}function c(l,u){let f=0,h=0,d=0,_=0,E=0;const p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const b=l[m];if(b.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(b.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(b.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const T=i.hemi[E];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),E++}}}return{setup:o,setupView:c,state:i}}function Up(t){const e=new lE(t),n=[],i=[],r=[];function s(h){f.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){r.push(h)}function l(){e.setup(n)}function u(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function uE(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Up(t),e.set(r,[o])):s>=a.length?(o=new Up(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dE=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],pE=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Np=new Pt,Sa=new k,Ol=new k;function mE(t,e,n){let i=new uf;const r=new it,s=new it,a=new Ct,o=new b2,c=new T2,l={},u=n.maxTextureSize,f={[Tr]:xn,[xn]:Tr,[Hi]:Hi},h=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:hE,fragmentShader:fE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new tr;_.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ri(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let m=this.type;this.render=function(y,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===Q1&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Xi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=m!==this.type;X&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(I=>I.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,I=y.length;j<I;j++){const z=y[j],B=z.shadow;if(B===void 0){Ie("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Q=B.getFrameExtents();r.multiply(Q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,B.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ee,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Aa){if(z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ei(r.x,r.y,{format:es,type:Qi,minFilter:un,magFilter:un,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new $s(r.x,r.y,vi),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=er,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt}else z.isPointLight?(B.map=new Cg(r.x),B.map.depthTexture=new v2(r.x,Ti)):(B.map=new Ei(r.x,r.y),B.map.depthTexture=new $s(r.x,r.y,Ti)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=er,this.type===Ko?(B.map.depthTexture.compareFunction=ee?sf:rf,B.map.depthTexture.minFilter=un,B.map.depthTexture.magFilter=un):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt);B.camera.updateProjectionMatrix()}const ue=B.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ue;Se++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,Se),t.clear();else{Se===0&&(t.setRenderTarget(B.map),t.clear());const we=B.getViewport(Se);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),G.viewport(a)}if(z.isPointLight){const we=B.camera,Je=B.matrix,at=z.distance||we.far;at!==we.far&&(we.far=at,we.updateProjectionMatrix()),Sa.setFromMatrixPosition(z.matrixWorld),we.position.copy(Sa),Ol.copy(we.position),Ol.add(dE[Se]),we.up.copy(pE[Se]),we.lookAt(Ol),we.updateMatrixWorld(),Je.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Np.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Np,we.coordinateSystem,we.reversedDepth)}else B.updateMatrices(z);i=B.getFrustum(),T(C,x,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Aa&&M(B,x),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(A,N,w)};function M(y,C){const x=e.update(E);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ei(r.x,r.y,{format:es,type:Qi})),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(C,null,x,h,E,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(C,null,x,d,E,null)}function b(y,C,x,A){let N=null;const w=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)N=w;else if(N=x.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=N.uuid,X=C.uuid;let j=l[G];j===void 0&&(j={},l[G]=j);let I=j[X];I===void 0&&(I=N.clone(),j[X]=I,C.addEventListener("dispose",L)),N=I}if(N.visible=C.visible,N.wireframe=C.wireframe,A===Aa?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const G=t.properties.get(N);G.light=x}return N}function T(y,C,x,A,N){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&N===Aa)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const X=e.update(y),j=y.material;if(Array.isArray(j)){const I=X.groups;for(let z=0,B=I.length;z<B;z++){const Q=I[z],ee=j[Q.materialIndex];if(ee&&ee.visible){const ue=b(y,ee,A,N);y.onBeforeShadow(t,y,C,x,X,ue,Q),t.renderBufferDirect(x,null,X,ue,y,Q),y.onAfterShadow(t,y,C,x,X,ue,Q)}}}else if(j.visible){const I=b(y,j,A,N);y.onBeforeShadow(t,y,C,x,X,I,null),t.renderBufferDirect(x,null,X,I,y,null),y.onAfterShadow(t,y,C,x,X,I,null)}}const G=y.children;for(let X=0,j=G.length;X<j;X++)T(G[X],C,x,A,N)}function L(y){y.target.removeEventListener("dispose",L);for(const x in l){const A=l[x],N=y.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function gE(t,e){function n(){let R=!1;const ie=new Ct;let W=null;const me=new Ct(0,0,0,0);return{setMask:function(ae){W!==ae&&!R&&(t.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){R=ae},setClear:function(ae,Z,Ee,Oe,Dt){Dt===!0&&(ae*=Oe,Z*=Oe,Ee*=Oe),ie.set(ae,Z,Ee,Oe),me.equals(ie)===!1&&(t.clearColor(ae,Z,Ee,Oe),me.copy(ie))},reset:function(){R=!1,W=null,me.set(-1,0,0,0)}}}function i(){let R=!1,ie=!1,W=null,me=null,ae=null;return{setReversed:function(Z){if(ie!==Z){const Ee=e.get("EXT_clip_control");Z?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Oe=ae;ae=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(Z){Z?re(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(Z){W!==Z&&!R&&(t.depthMask(Z),W=Z)},setFunc:function(Z){if(ie&&(Z=Dv[Z]),me!==Z){switch(Z){case cu:t.depthFunc(t.NEVER);break;case lu:t.depthFunc(t.ALWAYS);break;case uu:t.depthFunc(t.LESS);break;case Ks:t.depthFunc(t.LEQUAL);break;case hu:t.depthFunc(t.EQUAL);break;case fu:t.depthFunc(t.GEQUAL);break;case du:t.depthFunc(t.GREATER);break;case pu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Z}},setLocked:function(Z){R=Z},setClear:function(Z){ae!==Z&&(ae=Z,ie&&(Z=1-Z),t.clearDepth(Z))},reset:function(){R=!1,W=null,me=null,ae=null,ie=!1}}}function r(){let R=!1,ie=null,W=null,me=null,ae=null,Z=null,Ee=null,Oe=null,Dt=null;return{setTest:function(ct){R||(ct?re(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ct){ie!==ct&&!R&&(t.stencilMask(ct),ie=ct)},setFunc:function(ct,Di,ci){(W!==ct||me!==Di||ae!==ci)&&(t.stencilFunc(ct,Di,ci),W=ct,me=Di,ae=ci)},setOp:function(ct,Di,ci){(Z!==ct||Ee!==Di||Oe!==ci)&&(t.stencilOp(ct,Di,ci),Z=ct,Ee=Di,Oe=ci)},setLocked:function(ct){R=ct},setClear:function(ct){Dt!==ct&&(t.clearStencil(ct),Dt=ct)},reset:function(){R=!1,ie=null,W=null,me=null,ae=null,Z=null,Ee=null,Oe=null,Dt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],E=null,p=!1,m=null,M=null,b=null,T=null,L=null,y=null,C=null,x=new Ye(0,0,0),A=0,N=!1,w=null,G=null,X=null,j=null,I=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=Q>=2);let ue=null,Se={};const we=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),at=new Ct().fromArray(we),ke=new Ct().fromArray(Je);function K(R,ie,W,me){const ae=new Uint8Array(4),Z=t.createTexture();t.bindTexture(R,Z),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<W;Ee++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ie+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Z}const de={};de[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Ks),Vt(!1),Mt(Ld),re(t.CULL_FACE),gt(Xi);function re(R){u[R]!==!0&&(t.enable(R),u[R]=!0)}function Le(R){u[R]!==!1&&(t.disable(R),u[R]=!1)}function Ne(R,ie){return h[R]!==ie?(t.bindFramebuffer(R,ie),h[R]=ie,R===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ie),R===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(R,ie){let W=_,me=!1;if(R){W=d.get(ie),W===void 0&&(W=[],d.set(ie,W));const ae=R.textures;if(W.length!==ae.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,Ee=ae.length;Z<Ee;Z++)W[Z]=t.COLOR_ATTACHMENT0+Z;W.length=ae.length,me=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,me=!0);me&&t.drawBuffers(W)}function St(R){return E!==R?(t.useProgram(R),E=R,!0):!1}const We={[Nr]:t.FUNC_ADD,[tv]:t.FUNC_SUBTRACT,[nv]:t.FUNC_REVERSE_SUBTRACT};We[iv]=t.MIN,We[rv]=t.MAX;const ot={[sv]:t.ZERO,[av]:t.ONE,[ov]:t.SRC_COLOR,[au]:t.SRC_ALPHA,[dv]:t.SRC_ALPHA_SATURATE,[hv]:t.DST_COLOR,[lv]:t.DST_ALPHA,[cv]:t.ONE_MINUS_SRC_COLOR,[ou]:t.ONE_MINUS_SRC_ALPHA,[fv]:t.ONE_MINUS_DST_COLOR,[uv]:t.ONE_MINUS_DST_ALPHA,[pv]:t.CONSTANT_COLOR,[mv]:t.ONE_MINUS_CONSTANT_COLOR,[gv]:t.CONSTANT_ALPHA,[_v]:t.ONE_MINUS_CONSTANT_ALPHA};function gt(R,ie,W,me,ae,Z,Ee,Oe,Dt,ct){if(R===Xi){p===!0&&(Le(t.BLEND),p=!1);return}if(p===!1&&(re(t.BLEND),p=!0),R!==ev){if(R!==m||ct!==N){if((M!==Nr||L!==Nr)&&(t.blendEquation(t.FUNC_ADD),M=Nr,L=Nr),ct)switch(R){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dd:t.blendFunc(t.ONE,t.ONE);break;case Id:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ud:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",R);break}else switch(R){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Id:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",R);break}b=null,T=null,y=null,C=null,x.set(0,0,0),A=0,m=R,N=ct}return}ae=ae||ie,Z=Z||W,Ee=Ee||me,(ie!==M||ae!==L)&&(t.blendEquationSeparate(We[ie],We[ae]),M=ie,L=ae),(W!==b||me!==T||Z!==y||Ee!==C)&&(t.blendFuncSeparate(ot[W],ot[me],ot[Z],ot[Ee]),b=W,T=me,y=Z,C=Ee),(Oe.equals(x)===!1||Dt!==A)&&(t.blendColor(Oe.r,Oe.g,Oe.b,Dt),x.copy(Oe),A=Dt),m=R,N=!1}function He(R,ie){R.side===Hi?Le(t.CULL_FACE):re(t.CULL_FACE);let W=R.side===xn;ie&&(W=!W),Vt(W),R.blending===Ls&&R.transparent===!1?gt(Xi):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const me=R.stencilWrite;o.setTest(me),me&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),P(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(R){w!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),w=R)}function Mt(R){R!==Z1?(re(t.CULL_FACE),R!==G&&(R===Ld?t.cullFace(t.BACK):R===J1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),G=R}function Mn(R){R!==X&&(B&&t.lineWidth(R),X=R)}function P(R,ie,W){R?(re(t.POLYGON_OFFSET_FILL),(j!==ie||I!==W)&&(j=ie,I=W,a.getReversed()&&(ie=-ie),t.polygonOffset(ie,W))):Le(t.POLYGON_OFFSET_FILL)}function zt(R){R?re(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function Xe(R){R===void 0&&(R=t.TEXTURE0+z-1),ue!==R&&(t.activeTexture(R),ue=R)}function pt(R,ie,W){W===void 0&&(ue===null?W=t.TEXTURE0+z-1:W=ue);let me=Se[W];me===void 0&&(me={type:void 0,texture:void 0},Se[W]=me),(me.type!==R||me.texture!==ie)&&(ue!==W&&(t.activeTexture(W),ue=W),t.bindTexture(R,ie||de[R]),me.type=R,me.texture=ie)}function ce(){const R=Se[ue];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function At(){try{t.compressedTexImage2D(...arguments)}catch(R){$e("WebGLState:",R)}}function S(){try{t.compressedTexImage3D(...arguments)}catch(R){$e("WebGLState:",R)}}function g(){try{t.texSubImage2D(...arguments)}catch(R){$e("WebGLState:",R)}}function U(){try{t.texSubImage3D(...arguments)}catch(R){$e("WebGLState:",R)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(R){$e("WebGLState:",R)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(R){$e("WebGLState:",R)}}function te(){try{t.texStorage2D(...arguments)}catch(R){$e("WebGLState:",R)}}function oe(){try{t.texStorage3D(...arguments)}catch(R){$e("WebGLState:",R)}}function H(){try{t.texImage2D(...arguments)}catch(R){$e("WebGLState:",R)}}function Y(){try{t.texImage3D(...arguments)}catch(R){$e("WebGLState:",R)}}function pe(R){return f[R]!==void 0?f[R]:t.getParameter(R)}function _e(R,ie){f[R]!==ie&&(t.pixelStorei(R,ie),f[R]=ie)}function se(R){at.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),at.copy(R))}function ne(R){ke.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ke.copy(R))}function Ue(R,ie){let W=l.get(ie);W===void 0&&(W=new WeakMap,l.set(ie,W));let me=W.get(R);me===void 0&&(me=t.getUniformBlockIndex(ie,R.name),W.set(R,me))}function Ge(R,ie){const me=l.get(ie).get(R);c.get(ie)!==me&&(t.uniformBlockBinding(ie,me,R.__bindingPointIndex),c.set(ie,me))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},ue=null,Se={},h={},d=new WeakMap,_=[],E=null,p=!1,m=null,M=null,b=null,T=null,L=null,y=null,C=null,x=new Ye(0,0,0),A=0,N=!1,w=null,G=null,X=null,j=null,I=null,at.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Le,bindFramebuffer:Ne,drawBuffers:De,useProgram:St,setBlending:gt,setMaterial:He,setFlipSided:Vt,setCullFace:Mt,setLineWidth:Mn,setPolygonOffset:P,setScissorTest:zt,activeTexture:Xe,bindTexture:pt,unbindTexture:ce,compressedTexImage2D:At,compressedTexImage3D:S,texImage2D:H,texImage3D:Y,pixelStorei:_e,getParameter:pe,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:te,texStorage3D:oe,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:se,viewport:ne,reset:tt}}function _E(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,g){return _?new OffscreenCanvas(S,g):dc("canvas")}function p(S,g,U){let q=1;const J=At(S);if((J.width>U||J.height>U)&&(q=U/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const te=Math.floor(q*J.width),oe=Math.floor(q*J.height);h===void 0&&(h=E(te,oe));const H=g?E(te,oe):h;return H.width=te,H.height=oe,H.getContext("2d").drawImage(S,0,0,te,oe),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+oe+")."),H}else return"data"in S&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function m(S){return S.generateMipmaps}function M(S){t.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(S,g,U,q,J,te=!1){if(S!==null){if(t[S]!==void 0)return t[S];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=g;if(g===t.RED&&(U===t.FLOAT&&(H=t.R32F),U===t.HALF_FLOAT&&(H=t.R16F),U===t.UNSIGNED_BYTE&&(H=t.R8),U===t.UNSIGNED_SHORT&&oe&&(H=oe.R16_EXT),U===t.SHORT&&oe&&(H=oe.R16_SNORM_EXT)),g===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.R8UI),U===t.UNSIGNED_SHORT&&(H=t.R16UI),U===t.UNSIGNED_INT&&(H=t.R32UI),U===t.BYTE&&(H=t.R8I),U===t.SHORT&&(H=t.R16I),U===t.INT&&(H=t.R32I)),g===t.RG&&(U===t.FLOAT&&(H=t.RG32F),U===t.HALF_FLOAT&&(H=t.RG16F),U===t.UNSIGNED_BYTE&&(H=t.RG8),U===t.UNSIGNED_SHORT&&oe&&(H=oe.RG16_EXT),U===t.SHORT&&oe&&(H=oe.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.RG8UI),U===t.UNSIGNED_SHORT&&(H=t.RG16UI),U===t.UNSIGNED_INT&&(H=t.RG32UI),U===t.BYTE&&(H=t.RG8I),U===t.SHORT&&(H=t.RG16I),U===t.INT&&(H=t.RG32I)),g===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.RGB8UI),U===t.UNSIGNED_SHORT&&(H=t.RGB16UI),U===t.UNSIGNED_INT&&(H=t.RGB32UI),U===t.BYTE&&(H=t.RGB8I),U===t.SHORT&&(H=t.RGB16I),U===t.INT&&(H=t.RGB32I)),g===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),U===t.UNSIGNED_INT&&(H=t.RGBA32UI),U===t.BYTE&&(H=t.RGBA8I),U===t.SHORT&&(H=t.RGBA16I),U===t.INT&&(H=t.RGBA32I)),g===t.RGB&&(U===t.UNSIGNED_SHORT&&oe&&(H=oe.RGB16_EXT),U===t.SHORT&&oe&&(H=oe.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),g===t.RGBA){const Y=te?fc:je.getTransfer(J);U===t.FLOAT&&(H=t.RGBA32F),U===t.HALF_FLOAT&&(H=t.RGBA16F),U===t.UNSIGNED_BYTE&&(H=Y===st?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&oe&&(H=oe.RGBA16_EXT),U===t.SHORT&&oe&&(H=oe.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function L(S,g){let U;return S?g===null||g===Ti||g===Ba?U=t.DEPTH24_STENCIL8:g===vi?U=t.DEPTH32F_STENCIL8:g===Oa&&(U=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===Ba?U=t.DEPTH_COMPONENT24:g===vi?U=t.DEPTH_COMPONENT32F:g===Oa&&(U=t.DEPTH_COMPONENT16),U}function y(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Qt&&S.minFilter!==un?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){const g=S.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(S){const g=S.target;g.removeEventListener("dispose",x),w(g)}function A(S){const g=i.get(S);if(g.__webglInit===void 0)return;const U=S.source,q=d.get(U);if(q){const J=q[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(S),Object.keys(q).length===0&&d.delete(U)}i.remove(S)}function N(S){const g=i.get(S);t.deleteTexture(g.__webglTexture);const U=S.source,q=d.get(U);delete q[g.__cacheKey],a.memory.textures--}function w(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let J=0;J<g.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(g.__webglFramebuffer[q][J]);else t.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)t.deleteFramebuffer(g.__webglFramebuffer[q]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=S.textures;for(let q=0,J=U.length;q<J;q++){const te=i.get(U[q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(U[q])}i.remove(S)}let G=0;function X(){G=0}function j(){return G}function I(S){G=S}function z(){const S=G;return S>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),G+=1,S}function B(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function Q(S,g){const U=i.get(S);if(S.isVideoTexture&&pt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){const q=S.image;if(q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(U,S,g);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+g)}function ee(S,g){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Le(U,S,g);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+g)}function ue(S,g){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Le(U,S,g);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+g)}function Se(S,g){const U=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&U.__version!==S.version){Ne(U,S,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+g)}const we={[mu]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[gu]:t.MIRRORED_REPEAT},Je={[Qt]:t.NEAREST,[Sv]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[un]:t.LINEAR,[cl]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},at={[yv]:t.NEVER,[Rv]:t.ALWAYS,[bv]:t.LESS,[rf]:t.LEQUAL,[Tv]:t.EQUAL,[sf]:t.GEQUAL,[Av]:t.GREATER,[wv]:t.NOTEQUAL};function ke(S,g){if(g.type===vi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===un||g.magFilter===cl||g.magFilter===xo||g.magFilter===kr||g.minFilter===un||g.minFilter===cl||g.minFilter===xo||g.minFilter===kr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,we[g.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,we[g.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,we[g.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Je[g.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Je[g.minFilter]),g.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,at[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==xo&&g.minFilter!==kr||g.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function K(S,g){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",C));const q=g.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const te=B(g);if(te!==S.__cacheKey){J[te]===void 0&&(J[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[te].usedTimes++;const oe=J[S.__cacheKey];oe!==void 0&&(J[S.__cacheKey].usedTimes--,oe.usedTimes===0&&N(g)),S.__cacheKey=te,S.__webglTexture=J[te].texture}return U}function de(S,g,U){return Math.floor(Math.floor(S/U)/g)}function re(S,g,U,q){const te=S.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,U,q,g.data);else{te.sort((_e,se)=>_e.start-se.start);let oe=0;for(let _e=1;_e<te.length;_e++){const se=te[oe],ne=te[_e],Ue=se.start+se.count,Ge=de(ne.start,g.width,4),tt=de(se.start,g.width,4);ne.start<=Ue+1&&Ge===tt&&de(ne.start+ne.count-1,g.width,4)===Ge?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++oe,te[oe]=ne)}te.length=oe+1;const H=n.getParameter(t.UNPACK_ROW_LENGTH),Y=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let _e=0,se=te.length;_e<se;_e++){const ne=te[_e],Ue=Math.floor(ne.start/4),Ge=Math.ceil(ne.count/4),tt=Ue%g.width,R=Math.floor(Ue/g.width),ie=Ge,W=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(t.UNPACK_SKIP_ROWS,R),n.texSubImage2D(t.TEXTURE_2D,0,tt,R,ie,W,U,q,g.data)}S.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,H),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function Le(S,g,U){let q=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=t.TEXTURE_3D);const J=K(S,g),te=g.source;n.bindTexture(q,S.__webglTexture,t.TEXTURE0+U);const oe=i.get(te);if(te.version!==oe.__version||J===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const W=je.getPrimaries(je.workingColorSpace),me=g.colorSpace===mr?null:je.getPrimaries(g.colorSpace),ae=g.colorSpace===mr||W===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let Y=p(g.image,!1,r.maxTextureSize);Y=ce(g,Y);const pe=s.convert(g.format,g.colorSpace),_e=s.convert(g.type);let se=T(g.internalFormat,pe,_e,g.normalized,g.colorSpace,g.isVideoTexture);ke(q,g);let ne;const Ue=g.mipmaps,Ge=g.isVideoTexture!==!0,tt=oe.__version===void 0||J===!0,R=te.dataReady,ie=y(g,Y);if(g.isDepthTexture)se=L(g.format===Gr,g.type),tt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,se,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,se,Y.width,Y.height,0,pe,_e,null));else if(g.isDataTexture)if(Ue.length>0){Ge&&tt&&n.texStorage2D(t.TEXTURE_2D,ie,se,Ue[0].width,Ue[0].height);for(let W=0,me=Ue.length;W<me;W++)ne=Ue[W],Ge?R&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ne.width,ne.height,pe,_e,ne.data):n.texImage2D(t.TEXTURE_2D,W,se,ne.width,ne.height,0,pe,_e,ne.data);g.generateMipmaps=!1}else Ge?(tt&&n.texStorage2D(t.TEXTURE_2D,ie,se,Y.width,Y.height),R&&re(g,Y,pe,_e)):n.texImage2D(t.TEXTURE_2D,0,se,Y.width,Y.height,0,pe,_e,Y.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ge&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,se,Ue[0].width,Ue[0].height,Y.depth);for(let W=0,me=Ue.length;W<me;W++)if(ne=Ue[W],g.format!==ei)if(pe!==null)if(Ge){if(R)if(g.layerUpdates.size>0){const ae=fp(ne.width,ne.height,g.format,g.type);for(const Z of g.layerUpdates){const Ee=ne.data.subarray(Z*ae/ne.data.BYTES_PER_ELEMENT,(Z+1)*ae/ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,Z,ne.width,ne.height,1,pe,Ee)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ne.width,ne.height,Y.depth,pe,ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,se,ne.width,ne.height,Y.depth,0,ne.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ne.width,ne.height,Y.depth,pe,_e,ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,se,ne.width,ne.height,Y.depth,0,pe,_e,ne.data)}else{Ge&&tt&&n.texStorage2D(t.TEXTURE_2D,ie,se,Ue[0].width,Ue[0].height);for(let W=0,me=Ue.length;W<me;W++)ne=Ue[W],g.format!==ei?pe!==null?Ge?R&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ne.width,ne.height,pe,ne.data):n.compressedTexImage2D(t.TEXTURE_2D,W,se,ne.width,ne.height,0,ne.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?R&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ne.width,ne.height,pe,_e,ne.data):n.texImage2D(t.TEXTURE_2D,W,se,ne.width,ne.height,0,pe,_e,ne.data)}else if(g.isDataArrayTexture)if(Ge){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,se,Y.width,Y.height,Y.depth),R)if(g.layerUpdates.size>0){const W=fp(Y.width,Y.height,g.format,g.type);for(const me of g.layerUpdates){const ae=Y.data.subarray(me*W/Y.data.BYTES_PER_ELEMENT,(me+1)*W/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,Y.width,Y.height,1,pe,_e,ae)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,pe,_e,Y.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,se,Y.width,Y.height,Y.depth,0,pe,_e,Y.data);else if(g.isData3DTexture)Ge?(tt&&n.texStorage3D(t.TEXTURE_3D,ie,se,Y.width,Y.height,Y.depth),R&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,pe,_e,Y.data)):n.texImage3D(t.TEXTURE_3D,0,se,Y.width,Y.height,Y.depth,0,pe,_e,Y.data);else if(g.isFramebufferTexture){if(tt)if(Ge)n.texStorage2D(t.TEXTURE_2D,ie,se,Y.width,Y.height);else{let W=Y.width,me=Y.height;for(let ae=0;ae<ie;ae++)n.texImage2D(t.TEXTURE_2D,ae,se,W,me,0,pe,_e,null),W>>=1,me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const W=t.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),Y.parentNode!==W){W.appendChild(Y),f.add(g),W.onpaint=Oe=>{const Dt=Oe.changedElements;for(const ct of f)Dt.includes(ct.image)&&(ct.needsUpdate=!0)},W.requestPaint();return}const me=0,ae=t.RGBA,Z=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,me,ae,Z,Ee,Y),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ge&&tt){const W=At(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ie,se,W.width,W.height)}for(let W=0,me=Ue.length;W<me;W++)ne=Ue[W],Ge?R&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,pe,_e,ne):n.texImage2D(t.TEXTURE_2D,W,se,pe,_e,ne);g.generateMipmaps=!1}else if(Ge){if(tt){const W=At(Y);n.texStorage2D(t.TEXTURE_2D,ie,se,W.width,W.height)}R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,_e,Y)}else n.texImage2D(t.TEXTURE_2D,0,se,pe,_e,Y);m(g)&&M(q),oe.__version=te.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ne(S,g,U){if(g.image.length!==6)return;const q=K(S,g),J=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+U);const te=i.get(J);if(J.version!==te.__version||q===!0){n.activeTexture(t.TEXTURE0+U);const oe=je.getPrimaries(je.workingColorSpace),H=g.colorSpace===mr?null:je.getPrimaries(g.colorSpace),Y=g.colorSpace===mr||oe===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,_e=g.image[0]&&g.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!pe&&!_e?se[Z]=p(g.image[Z],!0,r.maxCubemapSize):se[Z]=_e?g.image[Z].image:g.image[Z],se[Z]=ce(g,se[Z]);const ne=se[0],Ue=s.convert(g.format,g.colorSpace),Ge=s.convert(g.type),tt=T(g.internalFormat,Ue,Ge,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,ie=te.__version===void 0||q===!0,W=J.dataReady;let me=y(g,ne);ke(t.TEXTURE_CUBE_MAP,g);let ae;if(pe){R&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,tt,ne.width,ne.height);for(let Z=0;Z<6;Z++){ae=se[Z].mipmaps;for(let Ee=0;Ee<ae.length;Ee++){const Oe=ae[Ee];g.format!==ei?Ue!==null?R?W&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Oe.width,Oe.height,Ue,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,tt,Oe.width,Oe.height,0,Oe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Oe.width,Oe.height,Ue,Ge,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,tt,Oe.width,Oe.height,0,Ue,Ge,Oe.data)}}}else{if(ae=g.mipmaps,R&&ie){ae.length>0&&me++;const Z=At(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,tt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(_e){R?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,Ue,Ge,se[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,tt,se[Z].width,se[Z].height,0,Ue,Ge,se[Z].data);for(let Ee=0;Ee<ae.length;Ee++){const Dt=ae[Ee].image[Z].image;R?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,Dt.width,Dt.height,Ue,Ge,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,tt,Dt.width,Dt.height,0,Ue,Ge,Dt.data)}}else{R?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ue,Ge,se[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,tt,Ue,Ge,se[Z]);for(let Ee=0;Ee<ae.length;Ee++){const Oe=ae[Ee];R?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,Ue,Ge,Oe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,tt,Ue,Ge,Oe.image[Z])}}}m(g)&&M(t.TEXTURE_CUBE_MAP),te.__version=J.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function De(S,g,U,q,J,te){const oe=s.convert(U.format,U.colorSpace),H=s.convert(U.type),Y=T(U.internalFormat,oe,H,U.normalized,U.colorSpace),pe=i.get(g),_e=i.get(U);if(_e.__renderTarget=g,!pe.__hasExternalTextures){const se=Math.max(1,g.width>>te),ne=Math.max(1,g.height>>te);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,te,Y,se,ne,g.depth,0,oe,H,null):n.texImage2D(J,te,Y,se,ne,0,oe,H,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),Xe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,_e.__webglTexture,0,zt(g)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,_e.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function St(S,g,U){if(t.bindRenderbuffer(t.RENDERBUFFER,S),g.depthBuffer){const q=g.depthTexture,J=q&&q.isDepthTexture?q.type:null,te=L(g.stencilBuffer,J),oe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Xe(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,zt(g),te,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,zt(g),te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,te,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,S)}else{const q=g.textures;for(let J=0;J<q.length;J++){const te=q[J],oe=s.convert(te.format,te.colorSpace),H=s.convert(te.type),Y=T(te.internalFormat,oe,H,te.normalized,te.colorSpace);Xe(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,zt(g),Y,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,zt(g),Y,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Y,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(S,g,U){const q=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ke(t.TEXTURE_CUBE_MAP,g.depthTexture);const pe=s.convert(g.depthTexture.format),_e=s.convert(g.depthTexture.type);let se;g.depthTexture.format===er?se=t.DEPTH_COMPONENT24:g.depthTexture.format===Gr&&(se=t.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,g.width,g.height,0,pe,_e,null)}}else Q(g.depthTexture,0);const te=J.__webglTexture,oe=zt(g),H=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Y=g.depthTexture.format===Gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===er)Xe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,H,te,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Y,H,te,0);else if(g.depthTexture.format===Gr)Xe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,H,te,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Y,H,te,0);else throw new Error("Unknown depthTexture format")}function ot(S){const g=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const q=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=q}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)We(g.__webglFramebuffer[q],S,q);else{const q=S.texture.mipmaps;q&&q.length>0?We(g.__webglFramebuffer[0],S,0):We(g.__webglFramebuffer,S,0)}else if(U){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=t.createRenderbuffer(),St(g.__webglDepthbuffer[q],S,!1);else{const J=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,te)}}else{const q=S.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),St(g.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,te)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(S,g,U){const q=i.get(S);g!==void 0&&De(q.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&ot(S)}function He(S){const g=S.texture,U=i.get(S),q=i.get(g);S.addEventListener("dispose",x);const J=S.textures,te=S.isWebGLCubeRenderTarget===!0,oe=J.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=g.version,a.memory.textures++),te){U.__webglFramebuffer=[];for(let H=0;H<6;H++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[H]=[];for(let Y=0;Y<g.mipmaps.length;Y++)U.__webglFramebuffer[H][Y]=t.createFramebuffer()}else U.__webglFramebuffer[H]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let H=0;H<g.mipmaps.length;H++)U.__webglFramebuffer[H]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(oe)for(let H=0,Y=J.length;H<Y;H++){const pe=i.get(J[H]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(S.samples>0&&Xe(S)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let H=0;H<J.length;H++){const Y=J[H];U.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[H]);const pe=s.convert(Y.format,Y.colorSpace),_e=s.convert(Y.type),se=T(Y.internalFormat,pe,_e,Y.normalized,Y.colorSpace,S.isXRRenderTarget===!0),ne=zt(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,se,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,U.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),St(U.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ke(t.TEXTURE_CUBE_MAP,g);for(let H=0;H<6;H++)if(g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)De(U.__webglFramebuffer[H][Y],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,Y);else De(U.__webglFramebuffer[H],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);m(g)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let H=0,Y=J.length;H<Y;H++){const pe=J[H],_e=i.get(pe);let se=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,_e.__webglTexture),ke(se,pe),De(U.__webglFramebuffer,S,pe,t.COLOR_ATTACHMENT0+H,se,0),m(pe)&&M(se)}n.unbindTexture()}else{let H=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(H=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(H,q.__webglTexture),ke(H,g),g.mipmaps&&g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)De(U.__webglFramebuffer[Y],S,g,t.COLOR_ATTACHMENT0,H,Y);else De(U.__webglFramebuffer,S,g,t.COLOR_ATTACHMENT0,H,0);m(g)&&M(H),n.unbindTexture()}S.depthBuffer&&ot(S)}function Vt(S){const g=S.textures;for(let U=0,q=g.length;U<q;U++){const J=g[U];if(m(J)){const te=b(S),oe=i.get(J).__webglTexture;n.bindTexture(te,oe),M(te),n.unbindTexture()}}}const Mt=[],Mn=[];function P(S){if(S.samples>0){if(Xe(S)===!1){const g=S.textures,U=S.width,q=S.height;let J=t.COLOR_BUFFER_BIT;const te=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(S),H=g.length>1;if(H)for(let pe=0;pe<g.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Y=S.texture.mipmaps;Y&&Y.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const _e=i.get(g[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,U,q,0,0,U,q,J,t.NEAREST),c===!0&&(Mt.length=0,Mn.length=0,Mt.push(t.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Mt.push(te),Mn.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Mn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let pe=0;pe<g.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const _e=i.get(g[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function zt(S){return Math.min(r.maxSamples,S.samples)}function Xe(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function pt(S){const g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function ce(S,g){const U=S.colorSpace,q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==hc&&U!==mr&&(je.getTransfer(U)===st?(q!==ei||J!==Pn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",U)),g}function At(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.getTextureUnits=j,this.setTextureUnits=I,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=Se,this.rebindTextures=gt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vE(t,e){function n(i,r=mr){let s;const a=je.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Jh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===lg)return t.BYTE;if(i===ug)return t.SHORT;if(i===Oa)return t.UNSIGNED_SHORT;if(i===Zh)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===Qi)return t.HALF_FLOAT;if(i===dg)return t.ALPHA;if(i===pg)return t.RGB;if(i===ei)return t.RGBA;if(i===er)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===mg)return t.RED;if(i===ef)return t.RED_INTEGER;if(i===es)return t.RG;if(i===tf)return t.RG_INTEGER;if(i===nf)return t.RGBA_INTEGER;if(i===jo||i===$o||i===Zo||i===Jo)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_u||i===vu||i===xu||i===Su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mu||i===Eu||i===yu||i===bu||i===Tu||i===lc||i===Au)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mu||i===Eu)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bu)return s.COMPRESSED_R11_EAC;if(i===Tu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===lc)return s.COMPRESSED_RG11_EAC;if(i===Au)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wu||i===Ru||i===Cu||i===Pu||i===Lu||i===Du||i===Iu||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu||i===ku||i===Gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ru)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Du)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Iu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ou)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ku)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gu)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vu||i===zu||i===Hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vu)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wu||i===Xu||i===uc||i===qu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
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

}`;class ME{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:xE,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Wc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends ss{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const E=typeof XRWebGLBinding<"u",p=new ME,m={},M=n.getContextAttributes();let b=null,T=null;const L=[],y=[],C=new it;let x=null;const A=new Xn;A.viewport=new Ct;const N=new Xn;N.viewport=new Ct;const w=[A,N],G=new L2;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=L[K];return de===void 0&&(de=new pl,L[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=L[K];return de===void 0&&(de=new pl,L[K]=de),de.getGripSpace()},this.getHand=function(K){let de=L[K];return de===void 0&&(de=new pl,L[K]=de),de.getHandSpace()};function I(K){const de=y.indexOf(K.inputSource);if(de===-1)return;const re=L[de];re!==void 0&&(re.update(K.inputSource,K.frame,l||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let K=0;K<L.length;K++){const de=y[K];de!==null&&(y[K]=null,L[K].disconnect(de))}X=null,j=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(b),d=null,h=null,f=null,r=null,T=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ne=null;M.depth&&(Ne=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=M.stencil?Gr:er,Le=M.stencil?Ba:Ti);const De={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Ei(h.textureWidth,h.textureHeight,{format:ei,type:Pn,depthTexture:new $s(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ei(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(K){for(let de=0;de<K.removed.length;de++){const re=K.removed[de],Le=y.indexOf(re);Le>=0&&(y[Le]=null,L[Le].disconnect(re))}for(let de=0;de<K.added.length;de++){const re=K.added[de];let Le=y.indexOf(re);if(Le===-1){for(let De=0;De<L.length;De++)if(De>=y.length){y.push(re),Le=De;break}else if(y[De]===null){y[De]=re,Le=De;break}if(Le===-1)break}const Ne=L[Le];Ne&&Ne.connect(re)}}const Q=new k,ee=new k;function ue(K,de,re){Q.setFromMatrixPosition(de.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Le=Q.distanceTo(ee),Ne=de.projectionMatrix.elements,De=re.projectionMatrix.elements,St=Ne[14]/(Ne[10]-1),We=Ne[14]/(Ne[10]+1),ot=(Ne[9]+1)/Ne[5],gt=(Ne[9]-1)/Ne[5],He=(Ne[8]-1)/Ne[0],Vt=(De[8]+1)/De[0],Mt=St*He,Mn=St*Vt,P=Le/(-He+Vt),zt=P*-He;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(zt),K.translateZ(P),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Xe=St+P,pt=We+P,ce=Mt-zt,At=Mn+(Le-zt),S=ot*We/pt*Xe,g=gt*We/pt*Xe;K.projectionMatrix.makePerspective(ce,At,S,g,Xe,pt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Se(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let de=K.near,re=K.far;p.texture!==null&&(p.depthNear>0&&(de=p.depthNear),p.depthFar>0&&(re=p.depthFar)),G.near=N.near=A.near=de,G.far=N.far=A.far=re,(X!==G.near||j!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),X=G.near,j=G.far),G.layers.mask=K.layers.mask|6,A.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Le=K.parent,Ne=G.cameras;Se(G,Le);for(let De=0;De<Ne.length;De++)Se(Ne[De],Le);Ne.length===2?ue(G,A,N):G.projectionMatrix.copy(A.projectionMatrix),we(K,G,Le)};function we(K,de,re){re===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ga*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(K){return m[K]};let Je=null;function at(K,de){if(u=de.getViewerPose(l||a),_=de,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let Le=!1;re.length!==G.cameras.length&&(G.cameras.length=0,Le=!0);for(let We=0;We<re.length;We++){const ot=re[We];let gt=null;if(d!==null)gt=d.getViewport(ot);else{const Vt=f.getViewSubImage(h,ot);gt=Vt.viewport,We===0&&(e.setRenderTargetTextures(T,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(T))}let He=w[We];He===void 0&&(He=new Xn,He.layers.enable(We),He.viewport=new Ct,w[We]=He),He.matrix.fromArray(ot.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ot.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(gt.x,gt.y,gt.width,gt.height),We===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Le===!0&&G.cameras.push(He)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const We=f.getDepthInformation(re[0]);We&&We.isValid&&We.texture&&p.init(We,r.renderState)}if(Ne&&Ne.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<re.length;We++){const ot=re[We].camera;if(ot){let gt=m[ot];gt||(gt=new bg,m[ot]=gt);const He=f.getCameraImage(ot);gt.sourceTexture=He}}}}for(let re=0;re<L.length;re++){const Le=y[re],Ne=L[re];Le!==null&&Ne!==void 0&&Ne.update(Le,de,l||a)}Je&&Je(K,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const ke=new wg;ke.setAnimationLoop(at),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}}const yE=new Pt,Ug=new Fe;Ug.set(-1,0,0,0,1,0,0,0,1);function bE(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Tg(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,M,b,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),E(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),b=M.envMap,T=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(yE.makeRotationFromEuler(T)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ug),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=b*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function E(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TE(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const T=b.program;i.uniformBlockBinding(M,T)}function l(M,b){let T=r[M.id];T===void 0&&(_(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",p));const L=b.program;i.updateUBOMapping(M,L);const y=e.render.frame;s[M.id]!==y&&(h(M),s[M.id]=y)}function u(M){const b=f();M.__bindingPointIndex=b;const T=t.createBuffer(),L=M.__size,y=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,L,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=r[M.id],T=M.uniforms,L=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,C=T.length;y<C;y++){const x=Array.isArray(T[y])?T[y]:[T[y]];for(let A=0,N=x.length;A<N;A++){const w=x[A];if(d(w,y,A,L)===!0){const G=w.__offset,X=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let I=0;I<X.length;I++){const z=X[I],B=E(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,G+j,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):ArrayBuffer.isView(z)?w.__data.set(new z.constructor(z.buffer,z.byteOffset,w.__data.length)):(z.toArray(w.__data,j),j+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(M,b,T,L){const y=M.value,C=b+"_"+T;if(L[C]===void 0)return typeof y=="number"||typeof y=="boolean"?L[C]=y:ArrayBuffer.isView(y)?L[C]=y.slice():L[C]=y.clone(),!0;{const x=L[C];if(typeof y=="number"||typeof y=="boolean"){if(x!==y)return L[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(x.equals(y)===!1)return x.copy(y),!0}}return!1}function _(M){const b=M.uniforms;let T=0;const L=16;for(let C=0,x=b.length;C<x;C++){const A=Array.isArray(b[C])?b[C]:[b[C]];for(let N=0,w=A.length;N<w;N++){const G=A[N],X=Array.isArray(G.value)?G.value:[G.value];for(let j=0,I=X.length;j<I;j++){const z=X[j],B=E(z),Q=T%L,ee=Q%B.boundary,ue=Q+ee;T+=ee,ue!==0&&L-ue<B.storage&&(T+=L-ue),G.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=B.storage}}}const y=T%L;return y>0&&(T+=L-y),M.__size=T,M.__cache={},this}function E(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){const b=M.target;b.removeEventListener("dispose",p);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}const AE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function wE(){return di===null&&(di=new p2(AE,16,16,es,Qi),di.name="DFG_LUT",di.minFilter=un,di.magFilter=un,di.wrapS=Wi,di.wrapT=Wi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class RE{constructor(e={}){const{canvas:n=Pv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Pn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=d,p=new Set([nf,tf,ef]),m=new Set([Pn,Ti,Oa,Ba,Jh,Qh]),M=new Uint32Array(4),b=new Int32Array(4),T=new k;let L=null,y=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let w=!1,G=null;this._outputColorSpace=Wn;let X=0,j=0,I=null,z=-1,B=null;const Q=new Ct,ee=new Ct;let ue=null;const Se=new Ye(0);let we=0,Je=n.width,at=n.height,ke=1,K=null,de=null;const re=new Ct(0,0,Je,at),Le=new Ct(0,0,Je,at);let Ne=!1;const De=new uf;let St=!1,We=!1;const ot=new Pt,gt=new k,He=new Ct,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Mn(){return I===null?ke:1}let P=i;function zt(v,D){return n.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$h}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),P===null){const D="webgl2";if(P=zt(D,v),P===null)throw zt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw $e("WebGLRenderer: "+v.message),v}let Xe,pt,ce,At,S,g,U,q,J,te,oe,H,Y,pe,_e,se,ne,Ue,Ge,tt,R,ie,W;function me(){Xe=new wS(P),Xe.init(),R=new vE(P,Xe),pt=new xS(P,Xe,e,R),ce=new gE(P,Xe),pt.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),At=new PS(P),S=new nE,g=new _E(P,Xe,ce,S,pt,R,At),U=new AS(N),q=new U2(P),ie=new _S(P,q),J=new RS(P,q,At,ie),te=new DS(P,J,q,ie,At),Ue=new LS(P,pt,g),_e=new SS(S),oe=new tE(N,U,Xe,pt,ie,_e),H=new bE(N,S),Y=new rE,pe=new uE(Xe),ne=new gS(N,U,ce,te,_,c),se=new mE(N,te,pt),W=new TE(P,At,pt,ce),Ge=new vS(P,Xe,At),tt=new CS(P,Xe,At),At.programs=oe.programs,N.capabilities=pt,N.extensions=Xe,N.properties=S,N.renderLists=Y,N.shadowMap=se,N.state=ce,N.info=At}me(),E!==Pn&&(A=new US(E,n.width,n.height,r,s));const ae=new EE(N,P);this.xr=ae,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=Xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(v){v!==void 0&&(ke=v,this.setSize(Je,at,!1))},this.getSize=function(v){return v.set(Je,at)},this.setSize=function(v,D,V=!0){if(ae.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=v,at=D,n.width=Math.floor(v*ke),n.height=Math.floor(D*ke),V===!0&&(n.style.width=v+"px",n.style.height=D+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Je*ke,at*ke).floor()},this.setDrawingBufferSize=function(v,D,V){Je=v,at=D,ke=V,n.width=Math.floor(v*V),n.height=Math.floor(D*V),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(E===Pn){$e("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ie("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(re)},this.setViewport=function(v,D,V,F){v.isVector4?re.set(v.x,v.y,v.z,v.w):re.set(v,D,V,F),ce.viewport(Q.copy(re).multiplyScalar(ke).round())},this.getScissor=function(v){return v.copy(Le)},this.setScissor=function(v,D,V,F){v.isVector4?Le.set(v.x,v.y,v.z,v.w):Le.set(v,D,V,F),ce.scissor(ee.copy(Le).multiplyScalar(ke).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(v){ce.setScissorTest(Ne=v)},this.setOpaqueSort=function(v){K=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,V=!0){let F=0;if(v){let O=!1;if(I!==null){const fe=I.texture.format;O=p.has(fe)}if(O){const fe=I.texture.type,ve=m.has(fe),he=ne.getClearColor(),Me=ne.getClearAlpha(),Te=he.r,Be=he.g,ze=he.b;ve?(M[0]=Te,M[1]=Be,M[2]=ze,M[3]=Me,P.clearBufferuiv(P.COLOR,0,M)):(b[0]=Te,b[1]=Be,b[2]=ze,b[3]=Me,P.clearBufferiv(P.COLOR,0,b))}else F|=P.COLOR_BUFFER_BIT}D&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),ne.dispose(),Y.dispose(),pe.dispose(),S.dispose(),U.dispose(),te.dispose(),ie.dispose(),W.dispose(),oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",xf),ae.removeEventListener("sessionend",Sf),Rr.stop()};function Z(v){v.preventDefault(),kd("WebGLRenderer: Context Lost."),w=!0}function Ee(){kd("WebGLRenderer: Context Restored."),w=!1;const v=At.autoReset,D=se.enabled,V=se.autoUpdate,F=se.needsUpdate,O=se.type;me(),At.autoReset=v,se.enabled=D,se.autoUpdate=V,se.needsUpdate=F,se.type=O}function Oe(v){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Dt(v){const D=v.target;D.removeEventListener("dispose",Dt),ct(D)}function ct(v){Di(v),S.remove(v)}function Di(v){const D=S.get(v).programs;D!==void 0&&(D.forEach(function(V){oe.releaseProgram(V)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,V,F,O,fe){D===null&&(D=Vt);const ve=O.isMesh&&O.matrixWorld.determinant()<0,he=i_(v,D,V,F,O);ce.setMaterial(F,ve);let Me=V.index,Te=1;if(F.wireframe===!0){if(Me=J.getWireframeAttribute(V),Me===void 0)return;Te=2}const Be=V.drawRange,ze=V.attributes.position;let Re=Be.start*Te,lt=(Be.start+Be.count)*Te;fe!==null&&(Re=Math.max(Re,fe.start*Te),lt=Math.min(lt,(fe.start+fe.count)*Te)),Me!==null?(Re=Math.max(Re,0),lt=Math.min(lt,Me.count)):ze!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,ze.count));const It=lt-Re;if(It<0||It===1/0)return;ie.setup(O,F,he,V,Me);let wt,ht=Ge;if(Me!==null&&(wt=q.get(Me),ht=tt,ht.setIndex(wt)),O.isMesh)F.wireframe===!0?(ce.setLineWidth(F.wireframeLinewidth*Mn()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(O.isLine){let rn=F.linewidth;rn===void 0&&(rn=1),ce.setLineWidth(rn*Mn()),O.isLineSegments?ht.setMode(P.LINES):O.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else O.isPoints?ht.setMode(P.POINTS):O.isSprite&&ht.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const rn=O._multiDrawStarts,ge=O._multiDrawCounts,En=O._multiDrawCount,Qe=Me?q.get(Me).bytesPerElement:1,kn=S.get(F).currentProgram.getUniforms();for(let li=0;li<En;li++)kn.setValue(P,"_gl_DrawID",li),ht.render(rn[li]/Qe,ge[li])}else if(O.isInstancedMesh)ht.renderInstances(Re,It,O.count);else if(V.isInstancedBufferGeometry){const rn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,rn);ht.renderInstances(Re,It,ge)}else ht.render(Re,It)};function ci(v,D,V){v.transparent===!0&&v.side===Hi&&v.forceSinglePass===!1?(v.side=xn,v.needsUpdate=!0,ho(v,D,V),v.side=Tr,v.needsUpdate=!0,ho(v,D,V),v.side=Hi):ho(v,D,V)}this.compile=function(v,D,V=null){V===null&&(V=v),y=pe.get(V),y.init(D),x.push(y),V.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),v!==V&&v.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights();const F=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const fe=O.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const he=fe[ve];ci(he,V,O),F.add(he)}else ci(fe,V,O),F.add(fe)}),y=x.pop(),F},this.compileAsync=function(v,D,V=null){const F=this.compile(v,D,V);return new Promise(O=>{function fe(){if(F.forEach(function(ve){S.get(ve).currentProgram.isReady()&&F.delete(ve)}),F.size===0){O(v);return}setTimeout(fe,10)}Xe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Kc=null;function t_(v){Kc&&Kc(v)}function xf(){Rr.stop()}function Sf(){Rr.start()}const Rr=new wg;Rr.setAnimationLoop(t_),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(v){Kc=v,ae.setAnimationLoop(v),v===null?Rr.stop():Rr.start()},ae.addEventListener("sessionstart",xf),ae.addEventListener("sessionend",Sf),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;G!==null&&G.renderStart(v,D);const V=ae.enabled===!0&&ae.isPresenting===!0,F=A!==null&&(I===null||V)&&A.begin(N,I);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(N,v,D,I),y=pe.get(v,x.length),y.init(D),y.state.textureUnits=g.getTextureUnits(),x.push(y),ot.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),De.setFromProjectionMatrix(ot,xi,D.reversedDepth),We=this.localClippingEnabled,St=_e.init(this.clippingPlanes,We),L=Y.get(v,C.length),L.init(),C.push(L),ae.enabled===!0&&ae.isPresenting===!0){const ve=N.xr.getDepthSensingMesh();ve!==null&&jc(ve,D,-1/0,N.sortObjects)}jc(v,D,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(K,de),Mt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Mt&&ne.addToRenderList(L,v),this.info.render.frame++,St===!0&&_e.beginShadows();const O=y.state.shadowsArray;if(se.render(O,v,D),St===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&A.hasRenderPass())===!1){const ve=L.opaque,he=L.transmissive;if(y.setupLights(),D.isArrayCamera){const Me=D.cameras;if(he.length>0)for(let Te=0,Be=Me.length;Te<Be;Te++){const ze=Me[Te];Ef(ve,he,v,ze)}Mt&&ne.render(v);for(let Te=0,Be=Me.length;Te<Be;Te++){const ze=Me[Te];Mf(L,v,ze,ze.viewport)}}else he.length>0&&Ef(ve,he,v,D),Mt&&ne.render(v),Mf(L,v,D)}I!==null&&j===0&&(g.updateMultisampleRenderTarget(I),g.updateRenderTargetMipmap(I)),F&&A.end(N),v.isScene===!0&&v.onAfterRender(N,v,D),ie.resetDefaultState(),z=-1,B=null,x.pop(),x.length>0?(y=x[x.length-1],g.setTextureUnits(y.state.textureUnits),St===!0&&_e.setGlobalState(N.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?L=C[C.length-1]:L=null,G!==null&&G.renderEnd()};function jc(v,D,V,F){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)y.pushLightProbeGrid(v);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||De.intersectsSprite(v)){F&&He.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);const ve=te.update(v),he=v.material;he.visible&&L.push(v,ve,he,V,He.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||De.intersectsObject(v))){const ve=te.update(v),he=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),He.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),He.copy(ve.boundingSphere.center)),He.applyMatrix4(v.matrixWorld).applyMatrix4(ot)),Array.isArray(he)){const Me=ve.groups;for(let Te=0,Be=Me.length;Te<Be;Te++){const ze=Me[Te],Re=he[ze.materialIndex];Re&&Re.visible&&L.push(v,ve,Re,V,He.z,ze)}}else he.visible&&L.push(v,ve,he,V,He.z,null)}}const fe=v.children;for(let ve=0,he=fe.length;ve<he;ve++)jc(fe[ve],D,V,F)}function Mf(v,D,V,F){const{opaque:O,transmissive:fe,transparent:ve}=v;y.setupLightsView(V),St===!0&&_e.setGlobalState(N.clippingPlanes,V),F&&ce.viewport(Q.copy(F)),O.length>0&&uo(O,D,V),fe.length>0&&uo(fe,D,V),ve.length>0&&uo(ve,D,V),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ef(v,D,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[F.id]===void 0){const Re=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[F.id]=new Ei(1,1,{generateMipmaps:!0,type:Re?Qi:Pn,minFilter:kr,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const fe=y.state.transmissionRenderTarget[F.id],ve=F.viewport||Q;fe.setSize(ve.z*N.transmissionResolutionScale,ve.w*N.transmissionResolutionScale);const he=N.getRenderTarget(),Me=N.getActiveCubeFace(),Te=N.getActiveMipmapLevel();N.setRenderTarget(fe),N.getClearColor(Se),we=N.getClearAlpha(),we<1&&N.setClearColor(16777215,.5),N.clear(),Mt&&ne.render(V);const Be=N.toneMapping;N.toneMapping=Mi;const ze=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),y.setupLightsView(F),St===!0&&_e.setGlobalState(N.clippingPlanes,F),uo(v,V,F),g.updateMultisampleRenderTarget(fe),g.updateRenderTargetMipmap(fe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let lt=0,It=D.length;lt<It;lt++){const wt=D[lt],{object:ht,geometry:rn,material:ge,group:En}=wt;if(ge.side===Hi&&ht.layers.test(F.layers)){const Qe=ge.side;ge.side=xn,ge.needsUpdate=!0,yf(ht,V,F,rn,ge,En),ge.side=Qe,ge.needsUpdate=!0,Re=!0}}Re===!0&&(g.updateMultisampleRenderTarget(fe),g.updateRenderTargetMipmap(fe))}N.setRenderTarget(he,Me,Te),N.setClearColor(Se,we),ze!==void 0&&(F.viewport=ze),N.toneMapping=Be}function uo(v,D,V){const F=D.isScene===!0?D.overrideMaterial:null;for(let O=0,fe=v.length;O<fe;O++){const ve=v[O],{object:he,geometry:Me,group:Te}=ve;let Be=ve.material;Be.allowOverride===!0&&F!==null&&(Be=F),he.layers.test(V.layers)&&yf(he,D,V,Me,Be,Te)}}function yf(v,D,V,F,O,fe){v.onBeforeRender(N,D,V,F,O,fe),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(N,D,V,F,v,fe),O.transparent===!0&&O.side===Hi&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,N.renderBufferDirect(V,D,F,O,v,fe),O.side=Tr,O.needsUpdate=!0,N.renderBufferDirect(V,D,F,O,v,fe),O.side=Hi):N.renderBufferDirect(V,D,F,O,v,fe),v.onAfterRender(N,D,V,F,O,fe)}function ho(v,D,V){D.isScene!==!0&&(D=Vt);const F=S.get(v),O=y.state.lights,fe=y.state.shadowsArray,ve=O.state.version,he=oe.getParameters(v,O.state,fe,D,V,y.state.lightProbeGridArray),Me=oe.getProgramCacheKey(he);let Te=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,F.fog=D.fog;const Be=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=U.get(v.envMap||F.environment,Be),F.envMapRotation=F.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Te===void 0&&(v.addEventListener("dispose",Dt),Te=new Map,F.programs=Te);let ze=Te.get(Me);if(ze!==void 0){if(F.currentProgram===ze&&F.lightsStateVersion===ve)return Tf(v,he),ze}else he.uniforms=oe.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,V,he),v.onBeforeCompile(he,N),ze=oe.acquireProgram(he,Me),Te.set(Me,ze),F.uniforms=he.uniforms;const Re=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=_e.uniform),Tf(v,he),F.needsLights=s_(v),F.lightsStateVersion=ve,F.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=y.state.lightProbeGridArray.length>0,F.currentProgram=ze,F.uniformsList=null,ze}function bf(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Qo.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Tf(v,D){const V=S.get(v);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function n_(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;T.setFromMatrixPosition(D.matrixWorld);for(let V=0,F=v.length;V<F;V++){const O=v[V];if(O.texture!==null&&O.boundingBox.containsPoint(T))return O}return null}function i_(v,D,V,F,O){D.isScene!==!0&&(D=Vt),g.resetTextureUnits();const fe=D.fog,ve=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?D.environment:null,he=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:je.workingColorSpace,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Te=U.get(F.envMap||ve,Me),Be=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Re=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,It=!!V.morphAttributes.color;let wt=Mi;F.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=N.toneMapping);const ht=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rn=ht!==void 0?ht.length:0,ge=S.get(F),En=y.state.lights;if(St===!0&&(We===!0||v!==B)){const mt=v===B&&F.id===z;_e.setState(F,v,mt)}let Qe=!1;F.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==En.state.version||ge.outputColorSpace!==he||O.isBatchedMesh&&ge.batching===!1||!O.isBatchedMesh&&ge.batching===!0||O.isBatchedMesh&&ge.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ge.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ge.instancing===!1||!O.isInstancedMesh&&ge.instancing===!0||O.isSkinnedMesh&&ge.skinning===!1||!O.isSkinnedMesh&&ge.skinning===!0||O.isInstancedMesh&&ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ge.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ge.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ge.instancingMorph===!1&&O.morphTexture!==null||ge.envMap!==Te||F.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==Be||ge.vertexTangents!==ze||ge.morphTargets!==Re||ge.morphNormals!==lt||ge.morphColors!==It||ge.toneMapping!==wt||ge.morphTargetsCount!==rn||!!ge.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ge.__version=F.version);let kn=ge.currentProgram;Qe===!0&&(kn=ho(F,D,O),G&&F.isNodeMaterial&&G.onUpdateProgram(F,kn,ge));let li=!1,nr=!1,as=!1;const ft=kn.getUniforms(),Ut=ge.uniforms;if(ce.useProgram(kn.program)&&(li=!0,nr=!0,as=!0),F.id!==z&&(z=F.id,nr=!0),ge.needsLights){const mt=n_(y.state.lightProbeGridArray,O);ge.lightProbeGrid!==mt&&(ge.lightProbeGrid=mt,nr=!0)}if(li||B!==v){ce.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",v.projectionMatrix),ft.setValue(P,"viewMatrix",v.matrixWorldInverse);const rr=ft.map.cameraPosition;rr!==void 0&&rr.setValue(P,gt.setFromMatrixPosition(v.matrixWorld)),pt.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ft.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,nr=!0,as=!0)}if(ge.needsLights&&(En.state.directionalShadowMap.length>0&&ft.setValue(P,"directionalShadowMap",En.state.directionalShadowMap,g),En.state.spotShadowMap.length>0&&ft.setValue(P,"spotShadowMap",En.state.spotShadowMap,g),En.state.pointShadowMap.length>0&&ft.setValue(P,"pointShadowMap",En.state.pointShadowMap,g)),O.isSkinnedMesh){ft.setOptional(P,O,"bindMatrix"),ft.setOptional(P,O,"bindMatrixInverse");const mt=O.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ft.setValue(P,"boneTexture",mt.boneTexture,g))}O.isBatchedMesh&&(ft.setOptional(P,O,"batchingTexture"),ft.setValue(P,"batchingTexture",O._matricesTexture,g),ft.setOptional(P,O,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",O._indirectTexture,g),ft.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",O._colorsTexture,g));const ir=V.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&Ue.update(O,V,kn),(nr||ge.receiveShadow!==O.receiveShadow)&&(ge.receiveShadow=O.receiveShadow,ft.setValue(P,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&D.environment!==null&&(Ut.envMapIntensity.value=D.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=wE()),nr){if(ft.setValue(P,"toneMappingExposure",N.toneMappingExposure),ge.needsLights&&r_(Ut,as),fe&&F.fog===!0&&H.refreshFogUniforms(Ut,fe),H.refreshMaterialUniforms(Ut,F,ke,at,y.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){const mt=ge.lightProbeGrid;Ut.probesSH.value=mt.texture,Ut.probesMin.value.copy(mt.boundingBox.min),Ut.probesMax.value.copy(mt.boundingBox.max),Ut.probesResolution.value.copy(mt.resolution)}Qo.upload(P,bf(ge),Ut,g)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qo.upload(P,bf(ge),Ut,g),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ft.setValue(P,"center",O.center),ft.setValue(P,"modelViewMatrix",O.modelViewMatrix),ft.setValue(P,"normalMatrix",O.normalMatrix),ft.setValue(P,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){const mt=F.uniformsGroups;for(let rr=0,os=mt.length;rr<os;rr++){const Af=mt[rr];W.update(Af,kn),W.bind(Af,kn)}}return kn}function r_(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function s_(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,V){const F=S.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),S.get(v.texture).__webglTexture=D,S.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const V=S.get(v);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0};const a_=P.createFramebuffer();this.setRenderTarget=function(v,D=0,V=0){I=v,X=D,j=V;let F=null,O=!1,fe=!1;if(v){const he=S.get(v);if(he.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(P.FRAMEBUFFER,he.__webglFramebuffer),Q.copy(v.viewport),ee.copy(v.scissor),ue=v.scissorTest,ce.viewport(Q),ce.scissor(ee),ce.setScissorTest(ue),z=-1;return}else if(he.__webglFramebuffer===void 0)g.setupRenderTarget(v);else if(he.__hasExternalTextures)g.rebindTextures(v,S.get(v.texture).__webglTexture,S.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Be=v.depthTexture;if(he.__boundDepthTexture!==Be){if(Be!==null&&S.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Te=S.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?F=Te[D][V]:F=Te[D],O=!0):v.samples>0&&g.useMultisampledRTT(v)===!1?F=S.get(v).__webglMultisampledFramebuffer:Array.isArray(Te)?F=Te[V]:F=Te,Q.copy(v.viewport),ee.copy(v.scissor),ue=v.scissorTest}else Q.copy(re).multiplyScalar(ke).floor(),ee.copy(Le).multiplyScalar(ke).floor(),ue=Ne;if(V!==0&&(F=a_),ce.bindFramebuffer(P.FRAMEBUFFER,F)&&ce.drawBuffers(v,F),ce.viewport(Q),ce.scissor(ee),ce.setScissorTest(ue),O){const he=S.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,he.__webglTexture,V)}else if(fe){const he=D;for(let Me=0;Me<v.textures.length;Me++){const Te=S.get(v.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Te.__webglTexture,V,he)}}else if(v!==null&&V!==0){const he=S.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,V)}z=-1},this.readRenderTargetPixels=function(v,D,V,F,O,fe,ve,he=0){if(!(v&&v.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){ce.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Te=v.textures[he],Be=Te.format,ze=Te.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),!pt.textureFormatReadable(Be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ze)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-F&&V>=0&&V<=v.height-O&&P.readPixels(D,V,F,O,R.convert(Be),R.convert(ze),fe)}finally{const Te=I!==null?S.get(I).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,D,V,F,O,fe,ve,he=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(D>=0&&D<=v.width-F&&V>=0&&V<=v.height-O){ce.bindFramebuffer(P.FRAMEBUFFER,Me);const Te=v.textures[he],Be=Te.format,ze=Te.type;if(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),!pt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(D,V,F,O,R.convert(Be),R.convert(ze),0);const lt=I!==null?S.get(I).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,lt);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Lv(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Re),P.deleteSync(It),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,V=0){const F=Math.pow(2,-V),O=Math.floor(v.image.width*F),fe=Math.floor(v.image.height*F),ve=D!==null?D.x:0,he=D!==null?D.y:0;g.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ve,he,O,fe),ce.unbindTexture()};const o_=P.createFramebuffer(),c_=P.createFramebuffer();this.copyTextureToTexture=function(v,D,V=null,F=null,O=0,fe=0){let ve,he,Me,Te,Be,ze,Re,lt,It;const wt=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(V!==null)ve=V.max.x-V.min.x,he=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Be=V.min.y,ze=V.isBox3?V.min.z:0;else{const Ut=Math.pow(2,-O);ve=Math.floor(wt.width*Ut),he=Math.floor(wt.height*Ut),v.isDataArrayTexture?Me=wt.depth:v.isData3DTexture?Me=Math.floor(wt.depth*Ut):Me=1,Te=0,Be=0,ze=0}F!==null?(Re=F.x,lt=F.y,It=F.z):(Re=0,lt=0,It=0);const ht=R.convert(D.format),rn=R.convert(D.type);let ge;D.isData3DTexture?(g.setTexture3D(D,0),ge=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(g.setTexture2DArray(D,0),ge=P.TEXTURE_2D_ARRAY):(g.setTexture2D(D,0),ge=P.TEXTURE_2D),ce.activeTexture(P.TEXTURE0),ce.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),ce.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ce.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const En=ce.getParameter(P.UNPACK_ROW_LENGTH),Qe=ce.getParameter(P.UNPACK_IMAGE_HEIGHT),kn=ce.getParameter(P.UNPACK_SKIP_PIXELS),li=ce.getParameter(P.UNPACK_SKIP_ROWS),nr=ce.getParameter(P.UNPACK_SKIP_IMAGES);ce.pixelStorei(P.UNPACK_ROW_LENGTH,wt.width),ce.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt.height),ce.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),ce.pixelStorei(P.UNPACK_SKIP_ROWS,Be),ce.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const as=v.isDataArrayTexture||v.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Ut=S.get(v),ir=S.get(D),mt=S.get(Ut.__renderTarget),rr=S.get(ir.__renderTarget);ce.bindFramebuffer(P.READ_FRAMEBUFFER,mt.__webglFramebuffer),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let os=0;os<Me;os++)as&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(v).__webglTexture,O,ze+os),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(D).__webglTexture,fe,It+os)),P.blitFramebuffer(Te,Be,ve,he,Re,lt,ve,he,P.DEPTH_BUFFER_BIT,P.NEAREST);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||S.has(v)){const Ut=S.get(v),ir=S.get(D);ce.bindFramebuffer(P.READ_FRAMEBUFFER,o_),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,c_);for(let mt=0;mt<Me;mt++)as?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,O,ze+mt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,O),ft?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ir.__webglTexture,fe,It+mt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ir.__webglTexture,fe),O!==0?P.blitFramebuffer(Te,Be,ve,he,Re,lt,ve,he,P.COLOR_BUFFER_BIT,P.NEAREST):ft?P.copyTexSubImage3D(ge,fe,Re,lt,It+mt,Te,Be,ve,he):P.copyTexSubImage2D(ge,fe,Re,lt,Te,Be,ve,he);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ft?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(ge,fe,Re,lt,It,ve,he,Me,ht,rn,wt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(ge,fe,Re,lt,It,ve,he,Me,ht,wt.data):P.texSubImage3D(ge,fe,Re,lt,It,ve,he,Me,ht,rn,wt):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Re,lt,ve,he,ht,rn,wt.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Re,lt,wt.width,wt.height,ht,wt.data):P.texSubImage2D(P.TEXTURE_2D,fe,Re,lt,ve,he,ht,rn,wt);ce.pixelStorei(P.UNPACK_ROW_LENGTH,En),ce.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe),ce.pixelStorei(P.UNPACK_SKIP_PIXELS,kn),ce.pixelStorei(P.UNPACK_SKIP_ROWS,li),ce.pixelStorei(P.UNPACK_SKIP_IMAGES,nr),fe===0&&D.generateMipmaps&&P.generateMipmap(ge),ce.unbindTexture()},this.initRenderTarget=function(v){S.get(v).__webglFramebuffer===void 0&&g.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?g.setTextureCube(v,0):v.isData3DTexture?g.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?g.setTexture2DArray(v,0):g.setTexture2D(v,0),ce.unbindTexture()},this.resetState=function(){X=0,j=0,I=null,ce.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}const CE=["C","D","E","F","G","A","B"],Bl={C:"C#",D:"D#",F:"F#",G:"G#",A:"A#"},PE=60,LE=4;function DE(){const t=[];let e=PE;for(let n=0;n<LE;n+=1)for(const i of CE)t.push({midi:e,name:i,type:"white",blackName:Bl[i]??null}),e+=1,Bl[i]&&(t.push({midi:e,name:Bl[i],type:"black",parentWhite:t.at(-1).midi-1}),e+=1);return t.push({midi:e,name:"C",type:"white",blackName:null,octaveEnd:!0}),t}const Ng=DE(),Ju=Ng.filter(t=>t.type==="white"),IE=Ng.filter(t=>t.type==="black");function UE(t){return Ju.findIndex(e=>e.midi===t.parentWhite)}const Ma=1,NE=.08,Ea=6.4,Fp=.7,FE=.58,OE=3.95,BE=.95,kE=.5,GE=.075,VE=.4,Op=.35,zE=15527669,HE=723986,WE=.74,XE=new Ye(16761405),Bp=new Ye(0),kp=42,qE=23,Gp=5.5,YE=.16;var Bi,pi,Jn,ki,zr,Wa,Xa,qa,Hr,vr,xr,Fn,Fg,Og,Qu,Bg,Ya,kg;class KE{constructor(e){Ke(this,Fn);Ke(this,Bi);Ke(this,pi);Ke(this,Jn);Ke(this,ki);Ke(this,zr,[]);Ke(this,Wa,[]);Ke(this,Xa,new D2);Ke(this,qa,new it);Ke(this,Hr);Ke(this,vr,1);Ke(this,xr,1);Ke(this,Ya,new Map);Nt(this,Bi,new RE({canvas:e,alpha:!0,antialias:!0})),$(this,Bi).setClearColor(0,0),$(this,Bi).setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Nt(this,pi,new c2),Nt(this,Jn,new Xn(kp,1,.1,200)),Nt(this,Hr,Ju.length*Ma),Jt(this,Fn,Fg).call(this),Jt(this,Fn,Og).call(this)}resize(e,n){Nt(this,vr,Math.max(1,e)),Nt(this,xr,Math.max(1,n)),$(this,Bi).setSize($(this,vr),$(this,xr),!1),$(this,Jn).aspect=$(this,vr)/$(this,xr),Jt(this,Fn,Bg).call(this),$(this,Jn).updateProjectionMatrix()}hitTest(e,n){$(this,qa).set(e,n),$(this,Xa).setFromCamera($(this,qa),$(this,Jn));const i=$(this,Xa).intersectObjects($(this,Wa),!1);if(!i.length)return null;const r=i[0].object;return{midi:r.userData.midi,note:r.userData.note}}render({activeMidis:e=new Set,hoverMidis:n=new Map}={}){for(const i of $(this,zr)){const r=e.has(i.midi),s=n.get(i.midi),a=r?GE:0;i.pivot.rotation.x+=(a-i.pivot.rotation.x)*VE;let o,c;r?(o=XE,c=.95):s?(o=Jt(this,Fn,kg).call(this,s),c=.5):(o=Bp,c=0),i.material.emissive.lerp(o,Op),i.material.emissiveIntensity+=(c-i.material.emissiveIntensity)*Op}$(this,Bi).render($(this,pi),$(this,Jn))}getLabelAnchors(){const e=[],n=new k;for(const i of $(this,zr))i.note.type==="white"&&(n.copy(i.labelLocal),i.labelPivot.localToWorld(n),n.project($(this,Jn)),!(n.z>1)&&e.push({midi:i.midi,name:i.note.name,x:(n.x*.5+.5)*$(this,vr),y:(1-(n.y*.5+.5))*$(this,xr)}));return e}dispose(){for(const e of $(this,zr))e.mesh.geometry.dispose(),e.material.dispose();$(this,Bi).dispose()}}Bi=new WeakMap,pi=new WeakMap,Jn=new WeakMap,ki=new WeakMap,zr=new WeakMap,Wa=new WeakMap,Xa=new WeakMap,qa=new WeakMap,Hr=new WeakMap,vr=new WeakMap,xr=new WeakMap,Fn=new WeakSet,Fg=function(){$(this,pi).add(new A2(13623551,1316124,.85));const e=new cp(16777215,1.25);e.position.set(-6,12,14),$(this,pi).add(e);const n=new cp(10466559,.45);n.position.set(8,6,4),$(this,pi).add(n),$(this,pi).add(new C2(16777215,.25))},Og=function(){Nt(this,ki,new ws),$(this,ki).position.z=-Ea/2,$(this,ki).rotation.x=YE,$(this,pi).add($(this,ki));const e=$(this,Hr)/2,n=s=>s*Ma+Ma/2-e,i=Ea+.9,r=new ri(new ts($(this,Hr)+.5,.6,i),new ip({color:1645348,roughness:.85,metalness:.1}));r.position.set(0,-Fp-.32,Ea/2-.15),$(this,ki).add(r),Ju.forEach((s,a)=>{Jt(this,Fn,Qu).call(this,{note:s,x:n(a),width:Ma-NE,depth:Ea,thickness:Fp,topY:0,color:zE,roughness:.55})});for(const s of IE){const a=UE(s);if(a===-1)continue;const o=(a+1)*Ma-e;Jt(this,Fn,Qu).call(this,{note:s,x:o,width:FE,depth:OE,thickness:BE,topY:kE,color:HE,roughness:.35})}},Qu=function({note:e,x:n,width:i,depth:r,thickness:s,topY:a,color:o,roughness:c}){const l=new ws;l.position.set(n,a,0),$(this,ki).add(l);const u=new ip({color:o,roughness:c,metalness:.08,emissive:Bp.clone(),emissiveIntensity:0,transparent:!0,opacity:WE}),f=new ts(i,s,r),h=new ri(f,u);h.position.set(0,-s/2,r/2),h.userData.midi=e.midi,h.userData.note=e,l.add(h);const d={midi:e.midi,note:e,mesh:h,pivot:l,material:u,baseColor:new Ye(o),labelLocal:new k(0,a+.02,r*.74),labelPivot:l};$(this,zr).push(d),$(this,Wa).push(h)},Bg=function(){const e=$(this,vr)/$(this,xr),n=Vd.degToRad(kp),i=Math.tan(n/2)*e,s=($(this,Hr)/2-.1)/i,o=(Ea/2+.6)/Math.tan(n/2),c=Math.max(s,o)*1,l=Vd.degToRad(qE);$(this,Jn).position.set(0,Gp+c*Math.sin(l),c*Math.cos(l)),$(this,Jn).lookAt(0,Gp,0)},Ya=new WeakMap,kg=function(e){let n=$(this,Ya).get(e);return n||(n=new Ye(e),$(this,Ya).set(e,n)),n};const jE=10,Vo=3,kl=12,$E=.5,ZE=3,Vp=8/12,zp=6/12;var Rn,Gi,Ka,ja,$a,nn,ec,Gg,eh,Vg,zg,Hg;class JE{constructor(){Ke(this,nn);Ke(this,Rn,new Map);Ke(this,Gi,new Map);Ke(this,Ka,kl);Ke(this,ja,kl*Vp);Ke(this,$a,kl*zp)}reset(){$(this,Rn).clear(),$(this,Gi).clear()}setPressThreshold(e){const n=Math.max(4,Math.min(40,e));Nt(this,Ka,n),Nt(this,ja,n*Vp),Nt(this,$a,n*zp)}setKeyMetrics(){}update({handIndex:e,fingerName:n,tipX:i,tipY:r,mcpY:s,wristY:a,midi:o}){var f;const c=Jt(this,nn,ec).call(this,e,n);Jt(this,nn,Gg).call(this,c,{tipX:i,tipY:r,mcpY:s,wristY:a,midi:o,t:performance.now()});const l=(f=$(this,Rn).get(c))==null?void 0:f.at(-1);if(!l)return{pressed:!1,activeMidi:null};let u=$(this,Gi).get(c);return u||(u={armed:!0,activeMidi:null},$(this,Gi).set(c,u)),u.armed?l.midi!=null&&Jt(this,nn,zg).call(this,c)&&(u.armed=!1,u.activeMidi=l.midi):Jt(this,nn,Hg).call(this,c)&&(u.armed=!0,u.activeMidi=null),{pressed:!u.armed,activeMidi:u.activeMidi}}isPressed(e,n){const i=$(this,Gi).get(Jt(this,nn,ec).call(this,e,n));return!!(i&&!i.armed)}getHoverMidi(e,n){var r;const i=$(this,Rn).get(Jt(this,nn,ec).call(this,e,n));return((r=i==null?void 0:i.at(-1))==null?void 0:r.midi)??null}getActiveMidis(){const e=new Set;for(const n of $(this,Gi).values())n.activeMidi!=null&&e.add(n.activeMidi);return e}pruneMissing(e){for(const n of $(this,Rn).keys())e.has(n)||($(this,Rn).delete(n),$(this,Gi).delete(n))}}Rn=new WeakMap,Gi=new WeakMap,Ka=new WeakMap,ja=new WeakMap,$a=new WeakMap,nn=new WeakSet,ec=function(e,n){return`${e}-${n}`},Gg=function(e,n){let i=$(this,Rn).get(e);i||(i=[],$(this,Rn).set(e,i)),i.push(n),i.length>jE&&i.shift()},eh=function(e,n){return(e.mcpY-n.mcpY+e.wristY-n.wristY)/2},Vg=function(e){const n=$(this,Rn).get(e);if(!n)return 0;let i=0;for(let r=n.length-1;r>=0&&n[r].midi!=null;r-=1)i+=1;return i},zg=function(e){const n=$(this,Rn).get(e);if(!n||n.length<=Vo)return!1;const i=n.at(-1),r=n.at(-1-Vo);if(i.midi==null||Jt(this,nn,Vg).call(this,e)<ZE)return!1;const s=i.tipY-r.tipY,a=Jt(this,nn,eh).call(this,i,r),o=s-a;return(r.midi==null||r.midi===i.midi)&&o>=$(this,Ka)&&s>=$(this,ja)&&o>=Math.abs(s)*$E},Hg=function(e){const n=$(this,Rn).get(e);if(!n||n.length<=Vo)return!1;const i=n.at(-1),r=n.at(-1-Vo);return i.tipY-r.tipY-Jt(this,nn,eh).call(this,i,r)<=-$(this,$a)||i.midi==null};const Wg={thumb:{tip:4,pip:3,mcp:2},index:{tip:8,pip:6,mcp:5},middle:{tip:12,pip:10,mcp:9},ring:{tip:16,pip:14,mcp:13},pinky:{tip:20,pip:18,mcp:17}},QE={digitStraight:.8,digitExtended:1.05,digitNotTucked:.9,thumbStraight:.9,thumbAbduct:.75},ey={digitStraight:.52,digitExtended:.94,digitNotTucked:.72,thumbStraight:.72,thumbAbduct:.48},Hp={digitStraight:.38,digitExtended:.86,digitNotTucked:.62,thumbStraight:.62,thumbAbduct:.38};function Cn(t,e){const n=t.x-e.x,i=t.y-e.y,r=(t.z??0)-(e.z??0);return Math.hypot(n,i,r)}function ty(t){const e=[0,5,9,13,17],n={x:0,y:0,z:0};for(const i of e)n.x+=t[i].x,n.y+=t[i].y,n.z+=t[i].z??0;return n.x/=e.length,n.y/=e.length,n.z/=e.length,n}function Xg(t,e,n){const i=t[e.tip],r=t[e.pip],s=t[e.mcp],a=t[1],o=t[5],c=t[17],l=Cn(a,i),u=Cn(a,s)+Cn(s,r)+Cn(r,i),f=l/(u||1)>n.thumbStraight,h=Cn(o,c)||1,d=Cn(i,o)>h*n.thumbAbduct;return f&&d}function qg(t,e,n){const i=t[0],r=t[e.tip],s=t[e.pip],a=t[e.mcp],o=ty(t),c=Cn(r,i),l=Cn(s,i),u=Cn(r,o),f=Cn(s,o),h=Cn(r,s),d=Cn(s,a),E=Cn(r,a)/(h+d||1),p=c>l*n.digitExtended,m=u>f*n.digitNotTucked,M=E>n.digitStraight;return p&&m&&M}function ny(t,e,{lenient:n=!1}={}){const i=Wg[e];if(!i)return!1;const r=n?ey:QE;return e==="thumb"?Xg(t,i,r):qg(t,i,r)}function iy(t,e){const n=Wg[e];return n?e==="thumb"?!Xg(t,n,Hp):!qg(t,n,Hp):!0}const ry=2.4,sy=.08,ay=80,oy=1,zo=.5,cy=1/60,ly=1/240;function Wp(t,e){return 1/(1+1/(2*Math.PI*t)/e)}var Wr;class Xp{constructor(){Ke(this,Wr,null)}filter(e,n){return Nt(this,Wr,$(this,Wr)==null?e:n*e+(1-n)*$(this,Wr)),$(this,Wr)}}Wr=new WeakMap;var Za,Ja,Qa,vc,xc,Us;class qp{constructor({minCutoff:e=ry,beta:n=sy,dCutoff:i=oy}={}){Ke(this,Za);Ke(this,Ja);Ke(this,Qa);Ke(this,vc,new Xp);Ke(this,xc,new Xp);Ke(this,Us,null);Nt(this,Za,e),Nt(this,Ja,n),Nt(this,Qa,i)}filter(e,n){const i=$(this,Us)==null?0:(e-$(this,Us))/n;Nt(this,Us,e);const r=$(this,xc).filter(i,Wp($(this,Qa),n)),s=$(this,Za)+$(this,Ja)*Math.abs(r);return $(this,vc).filter(e,Wp(s,n))}}Za=new WeakMap,Ja=new WeakMap,Qa=new WeakMap,vc=new WeakMap,xc=new WeakMap,Us=new WeakMap;var Vi,Ns;class uy{constructor(e){Ke(this,Vi,new Map);Ke(this,Ns);Nt(this,Ns,e)}smooth(e,n,i,r){let s=$(this,Vi).get(e);s||(s={x:new qp($(this,Ns)),y:new qp($(this,Ns)),t:r,vx:0,vy:0,sx:n,sy:i},$(this,Vi).set(e,s));let a=(r-s.t)/1e3;a>ly||(a=cy);const o=s.x.filter(n,a),c=s.y.filter(i,a),l=(o-s.sx)/a,u=(c-s.sy)/a;return s.vx=zo*l+(1-zo)*s.vx,s.vy=zo*u+(1-zo)*s.vy,s.sx=o,s.sy=c,s.t=r,{x:s.sx,y:s.sy}}predict(e,n){const i=$(this,Vi).get(e);if(!i)return null;const r=n-i.t;if(r<=0)return{x:i.sx,y:i.sy};const s=Math.min(r,ay)/1e3;return{x:i.sx+i.vx*s,y:i.sy+i.vy*s}}prune(e){for(const n of $(this,Vi).keys())e.has(n)||$(this,Vi).delete(n)}reset(){$(this,Vi).clear()}}Vi=new WeakMap,Ns=new WeakMap;const hy=.25;var Fs;class fy{constructor(){Ke(this,Fs,new Map)}assign(e){const n=e.map(c=>c[0]),i=new Array(e.length).fill(-1),r=[];n.forEach((c,l)=>{for(const[u,f]of $(this,Fs)){const h=Math.hypot(c.x-f.x,c.y-f.y);h<=hy&&r.push({d:h,handIndex:l,slot:u})}}),r.sort((c,l)=>c.d-l.d);const s=new Set,a=new Set;for(const{handIndex:c,slot:l}of r)s.has(c)||a.has(l)||(i[c]=l,s.add(c),a.add(l));const o=new Map;return n.forEach((c,l)=>{if(i[l]===-1){let u=0;for(;a.has(u);)u+=1;i[l]=u,a.add(u)}o.set(i[l],c)}),Nt(this,Fs,o),i}reset(){$(this,Fs).clear()}}Fs=new WeakMap;const Yg=[{name:"thumb",label:"Thumb"},{name:"index",label:"Index"},{name:"middle",label:"Middle"},{name:"ring",label:"Ring"},{name:"pinky",label:"Pinky"}],Kg="hand-piano-settings",ya={fingers:Object.fromEntries(Yg.map(t=>[t.name,!0])),pressThreshold:12,instrument:"grand"};function dy(){try{const t=localStorage.getItem(Kg);if(!t)return structuredClone(ya);const e=JSON.parse(t);return{fingers:{...ya.fingers,...e.fingers??{}},pressThreshold:Number(e.pressThreshold)||ya.pressThreshold,instrument:J0.some(n=>n.id===e.instrument)?e.instrument:ya.instrument}}catch{return structuredClone(ya)}}function Gl(t){try{localStorage.setItem(Kg,JSON.stringify(t))}catch{}}function py({onFingersChange:t,onThresholdChange:e,onInstrumentChange:n}){const i=dy(),r=document.getElementById("settings-toggle"),s=document.getElementById("settings-panel"),a=document.getElementById("finger-options"),o=document.getElementById("press-threshold"),c=document.getElementById("press-threshold-value"),l=document.getElementById("instrument-select");for(const f of Yg){const h=`finger-${f.name}`,d=document.createElement("label");d.className="finger-row",d.htmlFor=h;const _=document.createElement("input");_.type="checkbox",_.id=h,_.checked=i.fingers[f.name];const E=document.createElement("span");E.className="finger-swatch",E.style.background=`var(--${f.name})`;const p=document.createElement("span");p.textContent=f.label,_.addEventListener("change",()=>{i.fingers[f.name]=_.checked,Gl(i),t==null||t(i.fingers)}),d.append(_,E,p),a.append(d)}o.value=String(i.pressThreshold),c.textContent=`${i.pressThreshold} px`,o.addEventListener("input",()=>{const f=Number(o.value);i.pressThreshold=f,c.textContent=`${f} px`,Gl(i),e==null||e(f)});for(const f of J0){const h=document.createElement("option");h.value=f.id,h.textContent=f.label,l.append(h)}l.value=i.instrument,l.addEventListener("change",()=>{i.instrument=l.value,Gl(i),n==null||n(i.instrument)});function u(f){s.classList.toggle("open",f),r.setAttribute("aria-expanded",String(f))}return r.addEventListener("click",f=>{f.stopPropagation(),u(!s.classList.contains("open"))}),s.addEventListener("click",f=>f.stopPropagation()),document.addEventListener("click",()=>u(!1)),document.addEventListener("keydown",f=>{f.key==="Escape"&&u(!1)}),t==null||t(i.fingers),e==null||e(i.pressThreshold),n==null||n(i.instrument),{isFingerEnabled:f=>i.fingers[f]!==!1}}const Yc=[{name:"thumb",tip:4,pip:3,mcp:2,color:"#ff6b6b"},{name:"index",tip:8,pip:6,mcp:5,color:"#ffd93d"},{name:"middle",tip:12,pip:10,mcp:9,color:"#6bcb77"},{name:"ring",tip:16,pip:14,mcp:13,color:"#4d96ff"},{name:"pinky",tip:20,pip:18,mcp:17,color:"#c77dff"}],Yp=9,my=45e3,gy="/made-with-ai/hand-tracking-piano/wasm",_y="/made-with-ai/hand-tracking-piano/models/hand_landmarker.task",ti=document.getElementById("webcam"),vy=document.getElementById("scene"),ni=document.getElementById("overlay"),Vl=document.getElementById("status"),cn=ni.getContext("2d"),Va=new $1,Er=new JE,Js=new KE(vy),pc=new uy,jg=new fy;let gi,$g,Kp=-1;const Ho=new Set,Is=new Set(Yc.map(t=>t.name));let gr=null,za=null,mc=new Set,df=new Map;function Wo(t,{hidden:e=!1,error:n=!1}={}){Vl.textContent=t,Vl.classList.toggle("hidden",e),Vl.classList.toggle("error",n)}function jp(){const t=ni.clientWidth,e=ni.clientHeight;ni.width=t,ni.height=e,Js.resize(t,e),Js.render(),Jg()}function xy(){const t=ni.clientWidth,e=ni.clientHeight,n=ti.videoWidth||t,i=ti.videoHeight||e,r=n/i,s=t/e;let a,o,c,l;return r>s?(o=e,a=o*r,c=(t-a)/2,l=0):(a=t,o=a/r,c=0,l=(e-o)/2),{drawWidth:a,drawHeight:o,offsetX:c,offsetY:l}}function tc(t){const{drawWidth:e,drawHeight:n,offsetX:i,offsetY:r}=xy();return{x:(1-t.x)*e+i,y:t.y*n+r}}function Zg(t,e){return{x:t/ni.clientWidth*2-1,y:-(e/ni.clientHeight)*2+1}}const Ki=new Set,Rs=new Map,Sy=4;function My(t,e,n,i){const r=Er.isPressed(e,n.name),s=ny(t,n.name,{lenient:!0}),a=iy(t,n.name);if(r||s)return Ki.add(i),Rs.set(i,0),!0;if(Ki.has(i)){const o=a?(Rs.get(i)??0)+1:0;if(Rs.set(i,o),o<Sy)return!0}return Ki.delete(i),Rs.delete(i),!1}function Ey(t,e,n){const i=new Set,r=new Map,s=new Map;return t.forEach((a,o)=>{const c=e[o],l=tc(a[0]);for(const u of Yc){if(!Is.has(u.name))continue;const f=`${c}-${u.name}`;if(!My(a,c,u,f))continue;const h=tc(a[u.tip]),d=pc.smooth(f,h.x,h.y,n),_=tc(a[u.mcp]),E=Zg(d.x,d.y),p=Js.hitTest(E.x,E.y);i.add(f),s.set(f,d),Er.update({handIndex:c,fingerName:u.name,tipX:d.x,tipY:d.y,mcpY:_.y,wristY:l.y,midi:(p==null?void 0:p.midi)??null}),p&&r.set(p.midi,u.color)}}),Er.pruneMissing(i),pc.prune(i),{pressedMidis:Er.getActiveMidis(),hoverMidis:r,tipPositions:s}}function yy(t,e,n){const i=new Map;return t.forEach((r,s)=>{const a=e[s];for(const o of Yc){if(!Is.has(o.name))continue;const c=`${a}-${o.name}`;if(!Ki.has(c))continue;const l=n.get(c);if(!l)continue;const u=Zg(l.x,l.y),f=Js.hitTest(u.x,u.y);f&&i.set(f.midi,o.color)}}),i}function by(t){const e=new Map;for(const n of Ki){const i=pc.predict(n,t),r=df.get(n);i?e.set(n,i):r&&e.set(n,r)}return e}function Ty(t){Is.clear();for(const[e,n]of Object.entries(t))n&&Is.add(e);for(const e of[...Ki]){const n=e.slice(e.indexOf("-")+1);Is.has(n)||(Ki.delete(e),Rs.delete(e))}}function Jg(){Er.reset(),pc.reset(),jg.reset(),Ki.clear(),Rs.clear(),gr=null,za=null,mc=new Set,df=new Map,Qg(new Set)}function Qg(t){for(const e of t)Ho.has(e)||Va.noteOn(e);for(const e of Ho)t.has(e)||Va.noteOff(e);Ho.clear();for(const e of t)Ho.add(e)}function Ay(t,e){const n=Js.getLabelAnchors();cn.textAlign="center",cn.textBaseline="middle";for(const i of n){const r=t.has(i.midi),s=e.has(i.midi),a=r||s;cn.font=`600 ${a?12:10}px Inter, system-ui, sans-serif`,cn.fillStyle=a?"rgba(255, 255, 255, 0.95)":"rgba(255, 255, 255, 0.45)",cn.shadowColor="rgba(0, 0, 0, 0.8)",cn.shadowBlur=3,cn.fillText(i.name,i.x,i.y)}cn.shadowBlur=0}function wy(t,e,n){t.forEach((i,r)=>{const s=e[r];for(const a of Yc){if(!Is.has(a.name))continue;const o=i[a.tip];if(!o)continue;const c=`${s}-${a.name}`;if(!Ki.has(c))continue;const{x:l,y:u}=n.get(c)??tc(o),f=Er.isPressed(s,a.name),h=Er.getHoverMidi(s,a.name)!=null;cn.beginPath(),cn.arc(l,u,f||h?Yp+2:Yp,0,Math.PI*2),cn.fillStyle=a.color,cn.fill(),cn.lineWidth=f?4:h?3.5:3,cn.strokeStyle=f||h?"#ffffff":"rgba(255, 255, 255, 0.85)",cn.stroke()}})}function Ry(t){var n;if(ti.currentTime===Kp)return;Kp=ti.currentTime;const e=gi.detectForVideo(ti,t);if((n=e.landmarks)!=null&&n.length){gr=e.landmarks,za=jg.assign(e.landmarks);const{pressedMidis:i,tipPositions:r}=Ey(gr,za,t);mc=i,df=r,Qg(i);return}Jg()}function Cy(t){const e=gr?by(t):new Map,n=gr?yy(gr,za,e):new Map;Js.render({activeMidis:mc,hoverMidis:n}),cn.clearRect(0,0,ni.width,ni.height),Ay(mc,n),gr&&wy(gr,za,e)}function e_(){if($g=requestAnimationFrame(e_),!gi||ti.readyState<HTMLMediaElement.HAVE_CURRENT_DATA)return;const t=performance.now();Ry(t),Cy(t)}function Py(t,e,n){return Promise.race([t,new Promise((i,r)=>{window.setTimeout(()=>r(new Error(n)),e)})])}async function Ly(){var e;if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))throw new Error("Camera API is not available in this browser.");const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});ti.srcObject=t,await new Promise((n,i)=>{ti.onloadedmetadata=async()=>{try{await ti.play(),n()}catch(r){i(r)}},ti.onerror=()=>i(new Error("Could not start the webcam video stream."))})}async function Dy(t,e){return _n.createFromOptions(t,{baseOptions:{modelAssetPath:_y,delegate:e},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.35,minHandPresenceConfidence:.35,minTrackingConfidence:.35})}async function Iy(){const t=await bs.forVisionTasks(gy);let e;for(const n of["GPU","CPU"])try{gi=await Py(Dy(t,n),my,`Timed out loading the hand tracking model (${n}). Run "npm run setup" and reload.`);return}catch(i){e=i,console.warn(`Hand landmarker failed with ${n} delegate:`,i),gi==null||gi.close(),gi=void 0}throw e??new Error("Could not initialize hand tracking.")}async function Uy(){var t;try{jp(),window.addEventListener("resize",jp),py({onFingersChange:Ty,onThresholdChange:e=>Er.setPressThreshold(e),onInstrumentChange:e=>Va.setInstrument(e)}),Wo("Requesting camera access…"),await Ly(),Wo("Loading hand tracking model…"),await Iy(),await Va.init(),Wo("Ready — hover a fingertip over a key, then press downward to play",{hidden:!0}),e_()}catch(e){console.error(e);let n="Could not start hand tracking. Reload the page and try again.";(e==null?void 0:e.name)==="NotAllowedError"?n="Camera access was denied. Allow webcam access and reload.":(e==null?void 0:e.name)==="NotFoundError"?n="No camera was found. Connect a webcam and reload.":(t=e==null?void 0:e.message)!=null&&t.includes("Timed out")?n=`${e.message} If this keeps happening, run "npm run setup" in the project folder.`:e!=null&&e.message&&(n=e.message),Wo(n,{error:!0})}}window.addEventListener("beforeunload",()=>{var t;cancelAnimationFrame($g),Va.releaseAll(),(t=ti.srcObject)==null||t.getTracks().forEach(e=>e.stop()),gi==null||gi.close()});Uy();
