(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fe(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var je={exports:{}};(function(c,p){(function(i,e){c.exports=e()})(typeof self<"u"?self:De,function(){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=i,e.d=function(n,o,l){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:l})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},e.p="",e(e.s=0)}({"./dist/icons.json":function(t){t.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":function(t,i,e){var n,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var l=function(){function a(){}a.prototype=Object.create(null);function r(m,f){for(var v=f.length,b=0;b<v;++b)y(m,f[b])}var s={}.hasOwnProperty;function d(m,f){m[f]=!0}function u(m,f){for(var v in f)s.call(f,v)&&(m[v]=!!f[v])}var g=/\s+/;function h(m,f){for(var v=f.split(g),b=v.length,M=0;M<b;++M)m[v[M]]=!0}function y(m,f){if(f){var v=typeof f;v==="string"?h(m,f):Array.isArray(f)?r(m,f):v==="object"?u(m,f):v==="number"&&d(m,f)}}function x(){for(var m=arguments.length,f=Array(m),v=0;v<m;v++)f[v]=arguments[v];var b=new a;r(b,f);var M=[];for(var j in b)b[j]&&M.push(j);return M.join(" ")}return x}();typeof t<"u"&&t.exports?t.exports=l:(n=[],o=(function(){return l}).apply(i,n),o!==void 0&&(t.exports=o))})()},"./node_modules/core-js/es/array/from.js":function(t,i,e){e("./node_modules/core-js/modules/es.string.iterator.js"),e("./node_modules/core-js/modules/es.array.from.js");var n=e("./node_modules/core-js/internals/path.js");t.exports=n.Array.from},"./node_modules/core-js/internals/a-function.js":function(t,i){t.exports=function(e){if(typeof e!="function")throw TypeError(String(e)+" is not a function");return e}},"./node_modules/core-js/internals/an-object.js":function(t,i,e){var n=e("./node_modules/core-js/internals/is-object.js");t.exports=function(o){if(!n(o))throw TypeError(String(o)+" is not an object");return o}},"./node_modules/core-js/internals/array-from.js":function(t,i,e){var n=e("./node_modules/core-js/internals/bind-context.js"),o=e("./node_modules/core-js/internals/to-object.js"),l=e("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),a=e("./node_modules/core-js/internals/is-array-iterator-method.js"),r=e("./node_modules/core-js/internals/to-length.js"),s=e("./node_modules/core-js/internals/create-property.js"),d=e("./node_modules/core-js/internals/get-iterator-method.js");t.exports=function(g){var h=o(g),y=typeof this=="function"?this:Array,x=arguments.length,m=x>1?arguments[1]:void 0,f=m!==void 0,v=0,b=d(h),M,j,w,E;if(f&&(m=n(m,x>2?arguments[2]:void 0,2)),b!=null&&!(y==Array&&a(b)))for(E=b.call(h),j=new y;!(w=E.next()).done;v++)s(j,v,f?l(E,m,[w.value,v],!0):w.value);else for(M=r(h.length),j=new y(M);M>v;v++)s(j,v,f?m(h[v],v):h[v]);return j.length=v,j}},"./node_modules/core-js/internals/array-includes.js":function(t,i,e){var n=e("./node_modules/core-js/internals/to-indexed-object.js"),o=e("./node_modules/core-js/internals/to-length.js"),l=e("./node_modules/core-js/internals/to-absolute-index.js");t.exports=function(a){return function(r,s,d){var u=n(r),g=o(u.length),h=l(d,g),y;if(a&&s!=s){for(;g>h;)if(y=u[h++],y!=y)return!0}else for(;g>h;h++)if((a||h in u)&&u[h]===s)return a||h||0;return!a&&-1}}},"./node_modules/core-js/internals/bind-context.js":function(t,i,e){var n=e("./node_modules/core-js/internals/a-function.js");t.exports=function(o,l,a){if(n(o),l===void 0)return o;switch(a){case 0:return function(){return o.call(l)};case 1:return function(r){return o.call(l,r)};case 2:return function(r,s){return o.call(l,r,s)};case 3:return function(r,s,d){return o.call(l,r,s,d)}}return function(){return o.apply(l,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(t,i,e){var n=e("./node_modules/core-js/internals/an-object.js");t.exports=function(o,l,a,r){try{return r?l(n(a)[0],a[1]):l(a)}catch(d){var s=o.return;throw s!==void 0&&n(s.call(o)),d}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":function(t,i,e){var n=e("./node_modules/core-js/internals/well-known-symbol.js"),o=n("iterator"),l=!1;try{var a=0,r={next:function(){return{done:!!a++}},return:function(){l=!0}};r[o]=function(){return this},Array.from(r,function(){throw 2})}catch{}t.exports=function(s,d){if(!d&&!l)return!1;var u=!1;try{var g={};g[o]=function(){return{next:function(){return{done:u=!0}}}},s(g)}catch{}return u}},"./node_modules/core-js/internals/classof-raw.js":function(t,i){var e={}.toString;t.exports=function(n){return e.call(n).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":function(t,i,e){var n=e("./node_modules/core-js/internals/classof-raw.js"),o=e("./node_modules/core-js/internals/well-known-symbol.js"),l=o("toStringTag"),a=n(function(){return arguments}())=="Arguments",r=function(s,d){try{return s[d]}catch{}};t.exports=function(s){var d,u,g;return s===void 0?"Undefined":s===null?"Null":typeof(u=r(d=Object(s),l))=="string"?u:a?n(d):(g=n(d))=="Object"&&typeof d.callee=="function"?"Arguments":g}},"./node_modules/core-js/internals/copy-constructor-properties.js":function(t,i,e){var n=e("./node_modules/core-js/internals/has.js"),o=e("./node_modules/core-js/internals/own-keys.js"),l=e("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),a=e("./node_modules/core-js/internals/object-define-property.js");t.exports=function(r,s){for(var d=o(s),u=a.f,g=l.f,h=0;h<d.length;h++){var y=d[h];n(r,y)||u(r,y,g(s,y))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(t,i,e){var n=e("./node_modules/core-js/internals/fails.js");t.exports=!n(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":function(t,i,e){var n=e("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=e("./node_modules/core-js/internals/object-create.js"),l=e("./node_modules/core-js/internals/create-property-descriptor.js"),a=e("./node_modules/core-js/internals/set-to-string-tag.js"),r=e("./node_modules/core-js/internals/iterators.js"),s=function(){return this};t.exports=function(d,u,g){var h=u+" Iterator";return d.prototype=o(n,{next:l(1,g)}),a(d,h,!1,!0),r[h]=s,d}},"./node_modules/core-js/internals/create-property-descriptor.js":function(t,i){t.exports=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}},"./node_modules/core-js/internals/create-property.js":function(t,i,e){var n=e("./node_modules/core-js/internals/to-primitive.js"),o=e("./node_modules/core-js/internals/object-define-property.js"),l=e("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=function(a,r,s){var d=n(r);d in a?o.f(a,d,l(0,s)):a[d]=s}},"./node_modules/core-js/internals/define-iterator.js":function(t,i,e){var n=e("./node_modules/core-js/internals/export.js"),o=e("./node_modules/core-js/internals/create-iterator-constructor.js"),l=e("./node_modules/core-js/internals/object-get-prototype-of.js"),a=e("./node_modules/core-js/internals/object-set-prototype-of.js"),r=e("./node_modules/core-js/internals/set-to-string-tag.js"),s=e("./node_modules/core-js/internals/hide.js"),d=e("./node_modules/core-js/internals/redefine.js"),u=e("./node_modules/core-js/internals/well-known-symbol.js"),g=e("./node_modules/core-js/internals/is-pure.js"),h=e("./node_modules/core-js/internals/iterators.js"),y=e("./node_modules/core-js/internals/iterators-core.js"),x=y.IteratorPrototype,m=y.BUGGY_SAFARI_ITERATORS,f=u("iterator"),v="keys",b="values",M="entries",j=function(){return this};t.exports=function(w,E,R,Ne,F,Be,se){o(R,E,Ne);var X=function(T){if(T===F&&C)return C;if(!m&&T in I)return I[T];switch(T){case v:return function(){return new R(this,T)};case b:return function(){return new R(this,T)};case M:return function(){return new R(this,T)}}return function(){return new R(this)}},ce=E+" Iterator",_=!1,I=w.prototype,G=I[f]||I["@@iterator"]||F&&I[F],C=!m&&G||X(F),de=E=="Array"&&I.entries||G,H,K,J;if(de&&(H=l(de.call(new w)),x!==Object.prototype&&H.next&&(!g&&l(H)!==x&&(a?a(H,x):typeof H[f]!="function"&&s(H,f,j)),r(H,ce,!0,!0),g&&(h[ce]=j))),F==b&&G&&G.name!==b&&(_=!0,C=function(){return G.call(this)}),(!g||se)&&I[f]!==C&&s(I,f,C),h[E]=C,F)if(K={values:X(b),keys:Be?C:X(v),entries:X(M)},se)for(J in K)(m||_||!(J in I))&&d(I,J,K[J]);else n({target:E,proto:!0,forced:m||_},K);return K}},"./node_modules/core-js/internals/descriptors.js":function(t,i,e){var n=e("./node_modules/core-js/internals/fails.js");t.exports=!n(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/document-create-element.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/is-object.js"),l=n.document,a=o(l)&&o(l.createElement);t.exports=function(r){return a?l.createElement(r):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":function(t,i){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,l=e("./node_modules/core-js/internals/hide.js"),a=e("./node_modules/core-js/internals/redefine.js"),r=e("./node_modules/core-js/internals/set-global.js"),s=e("./node_modules/core-js/internals/copy-constructor-properties.js"),d=e("./node_modules/core-js/internals/is-forced.js");t.exports=function(u,g){var h=u.target,y=u.global,x=u.stat,m,f,v,b,M,j;if(y?f=n:x?f=n[h]||r(h,{}):f=(n[h]||{}).prototype,f)for(v in g){if(M=g[v],u.noTargetGet?(j=o(f,v),b=j&&j.value):b=f[v],m=d(y?v:h+(x?".":"#")+v,u.forced),!m&&b!==void 0){if(typeof M==typeof b)continue;s(M,b)}(u.sham||b&&b.sham)&&l(M,"sham",!0),a(f,v,M,u)}}},"./node_modules/core-js/internals/fails.js":function(t,i){t.exports=function(e){try{return!!e()}catch{return!0}}},"./node_modules/core-js/internals/function-to-string.js":function(t,i,e){var n=e("./node_modules/core-js/internals/shared.js");t.exports=n("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":function(t,i,e){var n=e("./node_modules/core-js/internals/classof.js"),o=e("./node_modules/core-js/internals/iterators.js"),l=e("./node_modules/core-js/internals/well-known-symbol.js"),a=l("iterator");t.exports=function(r){if(r!=null)return r[a]||r["@@iterator"]||o[n(r)]}},"./node_modules/core-js/internals/global.js":function(t,i,e){(function(n){var o="object",l=function(a){return a&&a.Math==Math&&a};t.exports=l(typeof globalThis==o&&globalThis)||l(typeof window==o&&window)||l(typeof self==o&&self)||l(typeof n==o&&n)||Function("return this")()}).call(this,e("./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":function(t,i){var e={}.hasOwnProperty;t.exports=function(n,o){return e.call(n,o)}},"./node_modules/core-js/internals/hidden-keys.js":function(t,i){t.exports={}},"./node_modules/core-js/internals/hide.js":function(t,i,e){var n=e("./node_modules/core-js/internals/descriptors.js"),o=e("./node_modules/core-js/internals/object-define-property.js"),l=e("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=n?function(a,r,s){return o.f(a,r,l(1,s))}:function(a,r,s){return a[r]=s,a}},"./node_modules/core-js/internals/html.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=n.document;t.exports=o&&o.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":function(t,i,e){var n=e("./node_modules/core-js/internals/descriptors.js"),o=e("./node_modules/core-js/internals/fails.js"),l=e("./node_modules/core-js/internals/document-create-element.js");t.exports=!n&&!o(function(){return Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/indexed-object.js":function(t,i,e){var n=e("./node_modules/core-js/internals/fails.js"),o=e("./node_modules/core-js/internals/classof-raw.js"),l="".split;t.exports=n(function(){return!Object("z").propertyIsEnumerable(0)})?function(a){return o(a)=="String"?l.call(a,""):Object(a)}:Object},"./node_modules/core-js/internals/internal-state.js":function(t,i,e){var n=e("./node_modules/core-js/internals/native-weak-map.js"),o=e("./node_modules/core-js/internals/global.js"),l=e("./node_modules/core-js/internals/is-object.js"),a=e("./node_modules/core-js/internals/hide.js"),r=e("./node_modules/core-js/internals/has.js"),s=e("./node_modules/core-js/internals/shared-key.js"),d=e("./node_modules/core-js/internals/hidden-keys.js"),u=o.WeakMap,g,h,y,x=function(w){return y(w)?h(w):g(w,{})},m=function(w){return function(E){var R;if(!l(E)||(R=h(E)).type!==w)throw TypeError("Incompatible receiver, "+w+" required");return R}};if(n){var f=new u,v=f.get,b=f.has,M=f.set;g=function(w,E){return M.call(f,w,E),E},h=function(w){return v.call(f,w)||{}},y=function(w){return b.call(f,w)}}else{var j=s("state");d[j]=!0,g=function(w,E){return a(w,j,E),E},h=function(w){return r(w,j)?w[j]:{}},y=function(w){return r(w,j)}}t.exports={set:g,get:h,has:y,enforce:x,getterFor:m}},"./node_modules/core-js/internals/is-array-iterator-method.js":function(t,i,e){var n=e("./node_modules/core-js/internals/well-known-symbol.js"),o=e("./node_modules/core-js/internals/iterators.js"),l=n("iterator"),a=Array.prototype;t.exports=function(r){return r!==void 0&&(o.Array===r||a[l]===r)}},"./node_modules/core-js/internals/is-forced.js":function(t,i,e){var n=e("./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,l=function(u,g){var h=r[a(u)];return h==d?!0:h==s?!1:typeof g=="function"?n(g):!!g},a=l.normalize=function(u){return String(u).replace(o,".").toLowerCase()},r=l.data={},s=l.NATIVE="N",d=l.POLYFILL="P";t.exports=l},"./node_modules/core-js/internals/is-object.js":function(t,i){t.exports=function(e){return typeof e=="object"?e!==null:typeof e=="function"}},"./node_modules/core-js/internals/is-pure.js":function(t,i){t.exports=!1},"./node_modules/core-js/internals/iterators-core.js":function(t,i,e){var n=e("./node_modules/core-js/internals/object-get-prototype-of.js"),o=e("./node_modules/core-js/internals/hide.js"),l=e("./node_modules/core-js/internals/has.js"),a=e("./node_modules/core-js/internals/well-known-symbol.js"),r=e("./node_modules/core-js/internals/is-pure.js"),s=a("iterator"),d=!1,u=function(){return this},g,h,y;[].keys&&(y=[].keys(),"next"in y?(h=n(n(y)),h!==Object.prototype&&(g=h)):d=!0),g==null&&(g={}),!r&&!l(g,s)&&o(g,s,u),t.exports={IteratorPrototype:g,BUGGY_SAFARI_ITERATORS:d}},"./node_modules/core-js/internals/iterators.js":function(t,i){t.exports={}},"./node_modules/core-js/internals/native-symbol.js":function(t,i,e){var n=e("./node_modules/core-js/internals/fails.js");t.exports=!!Object.getOwnPropertySymbols&&!n(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/function-to-string.js"),l=n.WeakMap;t.exports=typeof l=="function"&&/native code/.test(o.call(l))},"./node_modules/core-js/internals/object-create.js":function(t,i,e){var n=e("./node_modules/core-js/internals/an-object.js"),o=e("./node_modules/core-js/internals/object-define-properties.js"),l=e("./node_modules/core-js/internals/enum-bug-keys.js"),a=e("./node_modules/core-js/internals/hidden-keys.js"),r=e("./node_modules/core-js/internals/html.js"),s=e("./node_modules/core-js/internals/document-create-element.js"),d=e("./node_modules/core-js/internals/shared-key.js"),u=d("IE_PROTO"),g="prototype",h=function(){},y=function(){var x=s("iframe"),m=l.length,f="<",v="script",b=">",M="java"+v+":",j;for(x.style.display="none",r.appendChild(x),x.src=String(M),j=x.contentWindow.document,j.open(),j.write(f+v+b+"document.F=Object"+f+"/"+v+b),j.close(),y=j.F;m--;)delete y[g][l[m]];return y()};t.exports=Object.create||function(m,f){var v;return m!==null?(h[g]=n(m),v=new h,h[g]=null,v[u]=m):v=y(),f===void 0?v:o(v,f)},a[u]=!0},"./node_modules/core-js/internals/object-define-properties.js":function(t,i,e){var n=e("./node_modules/core-js/internals/descriptors.js"),o=e("./node_modules/core-js/internals/object-define-property.js"),l=e("./node_modules/core-js/internals/an-object.js"),a=e("./node_modules/core-js/internals/object-keys.js");t.exports=n?Object.defineProperties:function(s,d){l(s);for(var u=a(d),g=u.length,h=0,y;g>h;)o.f(s,y=u[h++],d[y]);return s}},"./node_modules/core-js/internals/object-define-property.js":function(t,i,e){var n=e("./node_modules/core-js/internals/descriptors.js"),o=e("./node_modules/core-js/internals/ie8-dom-define.js"),l=e("./node_modules/core-js/internals/an-object.js"),a=e("./node_modules/core-js/internals/to-primitive.js"),r=Object.defineProperty;i.f=n?r:function(d,u,g){if(l(d),u=a(u,!0),l(g),o)try{return r(d,u,g)}catch{}if("get"in g||"set"in g)throw TypeError("Accessors not supported");return"value"in g&&(d[u]=g.value),d}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":function(t,i,e){var n=e("./node_modules/core-js/internals/descriptors.js"),o=e("./node_modules/core-js/internals/object-property-is-enumerable.js"),l=e("./node_modules/core-js/internals/create-property-descriptor.js"),a=e("./node_modules/core-js/internals/to-indexed-object.js"),r=e("./node_modules/core-js/internals/to-primitive.js"),s=e("./node_modules/core-js/internals/has.js"),d=e("./node_modules/core-js/internals/ie8-dom-define.js"),u=Object.getOwnPropertyDescriptor;i.f=n?u:function(h,y){if(h=a(h),y=r(y,!0),d)try{return u(h,y)}catch{}if(s(h,y))return l(!o.f.call(h,y),h[y])}},"./node_modules/core-js/internals/object-get-own-property-names.js":function(t,i,e){var n=e("./node_modules/core-js/internals/object-keys-internal.js"),o=e("./node_modules/core-js/internals/enum-bug-keys.js"),l=o.concat("length","prototype");i.f=Object.getOwnPropertyNames||function(r){return n(r,l)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":function(t,i){i.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":function(t,i,e){var n=e("./node_modules/core-js/internals/has.js"),o=e("./node_modules/core-js/internals/to-object.js"),l=e("./node_modules/core-js/internals/shared-key.js"),a=e("./node_modules/core-js/internals/correct-prototype-getter.js"),r=l("IE_PROTO"),s=Object.prototype;t.exports=a?Object.getPrototypeOf:function(d){return d=o(d),n(d,r)?d[r]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?s:null}},"./node_modules/core-js/internals/object-keys-internal.js":function(t,i,e){var n=e("./node_modules/core-js/internals/has.js"),o=e("./node_modules/core-js/internals/to-indexed-object.js"),l=e("./node_modules/core-js/internals/array-includes.js"),a=e("./node_modules/core-js/internals/hidden-keys.js"),r=l(!1);t.exports=function(s,d){var u=o(s),g=0,h=[],y;for(y in u)!n(a,y)&&n(u,y)&&h.push(y);for(;d.length>g;)n(u,y=d[g++])&&(~r(h,y)||h.push(y));return h}},"./node_modules/core-js/internals/object-keys.js":function(t,i,e){var n=e("./node_modules/core-js/internals/object-keys-internal.js"),o=e("./node_modules/core-js/internals/enum-bug-keys.js");t.exports=Object.keys||function(a){return n(a,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":function(t,i,e){var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,l=o&&!n.call({1:2},1);i.f=l?function(r){var s=o(this,r);return!!s&&s.enumerable}:n},"./node_modules/core-js/internals/object-set-prototype-of.js":function(t,i,e){var n=e("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var o=!1,l={},a;try{a=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,a.call(l,[]),o=l instanceof Array}catch{}return function(s,d){return n(s,d),o?a.call(s,d):s.__proto__=d,s}}():void 0)},"./node_modules/core-js/internals/own-keys.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/object-get-own-property-names.js"),l=e("./node_modules/core-js/internals/object-get-own-property-symbols.js"),a=e("./node_modules/core-js/internals/an-object.js"),r=n.Reflect;t.exports=r&&r.ownKeys||function(d){var u=o.f(a(d)),g=l.f;return g?u.concat(g(d)):u}},"./node_modules/core-js/internals/path.js":function(t,i,e){t.exports=e("./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/shared.js"),l=e("./node_modules/core-js/internals/hide.js"),a=e("./node_modules/core-js/internals/has.js"),r=e("./node_modules/core-js/internals/set-global.js"),s=e("./node_modules/core-js/internals/function-to-string.js"),d=e("./node_modules/core-js/internals/internal-state.js"),u=d.get,g=d.enforce,h=String(s).split("toString");o("inspectSource",function(y){return s.call(y)}),(t.exports=function(y,x,m,f){var v=f?!!f.unsafe:!1,b=f?!!f.enumerable:!1,M=f?!!f.noTargetGet:!1;if(typeof m=="function"&&(typeof x=="string"&&!a(m,"name")&&l(m,"name",x),g(m).source=h.join(typeof x=="string"?x:"")),y===n){b?y[x]=m:r(x,m);return}else v?!M&&y[x]&&(b=!0):delete y[x];b?y[x]=m:l(y,x,m)})(Function.prototype,"toString",function(){return typeof this=="function"&&u(this).source||s.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":function(t,i){t.exports=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e}},"./node_modules/core-js/internals/set-global.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/hide.js");t.exports=function(l,a){try{o(n,l,a)}catch{n[l]=a}return a}},"./node_modules/core-js/internals/set-to-string-tag.js":function(t,i,e){var n=e("./node_modules/core-js/internals/object-define-property.js").f,o=e("./node_modules/core-js/internals/has.js"),l=e("./node_modules/core-js/internals/well-known-symbol.js"),a=l("toStringTag");t.exports=function(r,s,d){r&&!o(r=d?r:r.prototype,a)&&n(r,a,{configurable:!0,value:s})}},"./node_modules/core-js/internals/shared-key.js":function(t,i,e){var n=e("./node_modules/core-js/internals/shared.js"),o=e("./node_modules/core-js/internals/uid.js"),l=n("keys");t.exports=function(a){return l[a]||(l[a]=o(a))}},"./node_modules/core-js/internals/shared.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/set-global.js"),l=e("./node_modules/core-js/internals/is-pure.js"),a="__core-js_shared__",r=n[a]||o(a,{});(t.exports=function(s,d){return r[s]||(r[s]=d!==void 0?d:{})})("versions",[]).push({version:"3.1.3",mode:l?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":function(t,i,e){var n=e("./node_modules/core-js/internals/to-integer.js"),o=e("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(l,a,r){var s=String(o(l)),d=n(a),u=s.length,g,h;return d<0||d>=u?r?"":void 0:(g=s.charCodeAt(d),g<55296||g>56319||d+1===u||(h=s.charCodeAt(d+1))<56320||h>57343?r?s.charAt(d):g:r?s.slice(d,d+2):(g-55296<<10)+(h-56320)+65536)}},"./node_modules/core-js/internals/to-absolute-index.js":function(t,i,e){var n=e("./node_modules/core-js/internals/to-integer.js"),o=Math.max,l=Math.min;t.exports=function(a,r){var s=n(a);return s<0?o(s+r,0):l(s,r)}},"./node_modules/core-js/internals/to-indexed-object.js":function(t,i,e){var n=e("./node_modules/core-js/internals/indexed-object.js"),o=e("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(l){return n(o(l))}},"./node_modules/core-js/internals/to-integer.js":function(t,i){var e=Math.ceil,n=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?n:e)(o)}},"./node_modules/core-js/internals/to-length.js":function(t,i,e){var n=e("./node_modules/core-js/internals/to-integer.js"),o=Math.min;t.exports=function(l){return l>0?o(n(l),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":function(t,i,e){var n=e("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(o){return Object(n(o))}},"./node_modules/core-js/internals/to-primitive.js":function(t,i,e){var n=e("./node_modules/core-js/internals/is-object.js");t.exports=function(o,l){if(!n(o))return o;var a,r;if(l&&typeof(a=o.toString)=="function"&&!n(r=a.call(o))||typeof(a=o.valueOf)=="function"&&!n(r=a.call(o))||!l&&typeof(a=o.toString)=="function"&&!n(r=a.call(o)))return r;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":function(t,i){var e=0,n=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++e+n).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":function(t,i,e){var n=e("./node_modules/core-js/internals/is-object.js"),o=e("./node_modules/core-js/internals/an-object.js");t.exports=function(l,a){if(o(l),!n(a)&&a!==null)throw TypeError("Can't set "+String(a)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":function(t,i,e){var n=e("./node_modules/core-js/internals/global.js"),o=e("./node_modules/core-js/internals/shared.js"),l=e("./node_modules/core-js/internals/uid.js"),a=e("./node_modules/core-js/internals/native-symbol.js"),r=n.Symbol,s=o("wks");t.exports=function(d){return s[d]||(s[d]=a&&r[d]||(a?r:l)("Symbol."+d))}},"./node_modules/core-js/modules/es.array.from.js":function(t,i,e){var n=e("./node_modules/core-js/internals/export.js"),o=e("./node_modules/core-js/internals/array-from.js"),l=e("./node_modules/core-js/internals/check-correctness-of-iteration.js"),a=!l(function(r){Array.from(r)});n({target:"Array",stat:!0,forced:a},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":function(t,i,e){var n=e("./node_modules/core-js/internals/string-at.js"),o=e("./node_modules/core-js/internals/internal-state.js"),l=e("./node_modules/core-js/internals/define-iterator.js"),a="String Iterator",r=o.set,s=o.getterFor(a);l(String,"String",function(d){r(this,{type:a,string:String(d),index:0})},function(){var u=s(this),g=u.string,h=u.index,y;return h>=g.length?{value:void 0,done:!0}:(y=n(g,h,!0),u.index+=y.length,{value:y,done:!1})})},"./node_modules/webpack/buildin/global.js":function(t,i){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(e=window)}t.exports=e},"./src/default-attrs.json":function(t){t.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=Object.assign||function(y){for(var x=1;x<arguments.length;x++){var m=arguments[x];for(var f in m)Object.prototype.hasOwnProperty.call(m,f)&&(y[f]=m[f])}return y},o=function(){function y(x,m){for(var f=0;f<m.length;f++){var v=m[f];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(x,v.key,v)}}return function(x,m,f){return m&&y(x.prototype,m),f&&y(x,f),x}}(),l=e("./node_modules/classnames/dedupe.js"),a=d(l),r=e("./src/default-attrs.json"),s=d(r);function d(y){return y&&y.__esModule?y:{default:y}}function u(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}var g=function(){function y(x,m){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];u(this,y),this.name=x,this.contents=m,this.tags=f,this.attrs=n({},s.default,{class:"feather feather-"+x})}return o(y,[{key:"toSvg",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=n({},this.attrs,m,{class:(0,a.default)(this.attrs.class,m.class)});return"<svg "+h(f)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),y}();function h(y){return Object.keys(y).map(function(x){return x+'="'+y[x]+'"'}).join(" ")}i.default=g},"./src/icons.js":function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=e("./src/icon.js"),o=d(n),l=e("./dist/icons.json"),a=d(l),r=e("./src/tags.json"),s=d(r);function d(u){return u&&u.__esModule?u:{default:u}}i.default=Object.keys(a.default).map(function(u){return new o.default(u,a.default[u],s.default[u])}).reduce(function(u,g){return u[g.name]=g,u},{})},"./src/index.js":function(t,i,e){var n=e("./src/icons.js"),o=d(n),l=e("./src/to-svg.js"),a=d(l),r=e("./src/replace.js"),s=d(r);function d(u){return u&&u.__esModule?u:{default:u}}t.exports={icons:o.default,toSvg:a.default,replace:s.default}},"./src/replace.js":function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=Object.assign||function(h){for(var y=1;y<arguments.length;y++){var x=arguments[y];for(var m in x)Object.prototype.hasOwnProperty.call(x,m)&&(h[m]=x[m])}return h},o=e("./node_modules/classnames/dedupe.js"),l=s(o),a=e("./src/icons.js"),r=s(a);function s(h){return h&&h.__esModule?h:{default:h}}function d(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var y=document.querySelectorAll("[data-feather]");Array.from(y).forEach(function(x){return u(x,h)})}function u(h){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=g(h),m=x["data-feather"];if(delete x["data-feather"],r.default[m]===void 0){console.warn("feather: '"+m+"' is not a valid icon");return}var f=r.default[m].toSvg(n({},y,x,{class:(0,l.default)(y.class,x.class)})),v=new DOMParser().parseFromString(f,"image/svg+xml"),b=v.querySelector("svg");h.parentNode.replaceChild(b,h)}function g(h){return Array.from(h.attributes).reduce(function(y,x){return y[x.name]=x.value,y},{})}i.default=d},"./src/tags.json":function(t){t.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-buoy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=e("./src/icons.js"),o=l(n);function l(r){return r&&r.__esModule?r:{default:r}}function a(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!r)throw new Error("The required `key` (icon name) parameter is missing.");if(!o.default[r])throw new Error("No icon matching '"+r+"'. See the complete list of icons at https://feathericons.com");return o.default[r].toSvg(s)}i.default=a},0:function(t,i,e){e("./node_modules/core-js/es/array/from.js"),t.exports=e("./src/index.js")}})})})(je);var Ge=je.exports;const z=Fe(Ge),O=document.getElementById("upload-container"),Y=document.getElementById("preview-container"),Z=document.getElementById("room-preview"),q=document.getElementById("room-upload"),ye=document.getElementById("camera-btn"),ue=document.getElementById("change-image-btn"),he=document.getElementById("generate-btn"),we=document.getElementById("results-section");document.getElementById("loading-indicator");const V=document.getElementById("design-carousel"),me=document.getElementById("back-to-options-btn"),fe=document.getElementById("regenerate-btn"),ge=document.getElementById("save-design-btn"),$=document.getElementById("login-btn"),W=document.getElementById("auth-modal"),xe=document.getElementById("close-modal-btn"),N=document.getElementById("api-key"),te=document.getElementById("toggle-key-visibility-btn"),B=document.getElementById("replicate-api-key"),ne=document.getElementById("toggle-replicate-key-visibility-btn"),ve=document.getElementById("auth-action-btn");let S=null,A="empty",oe=[],L=new Set,P="keep-existing",D=!0,Me=localStorage.getItem("openai_api_key")||"",k=localStorage.getItem("replicate_api_key")||"";const Ee={empty:["Modern Minimalist","Cozy Scandinavian","Contemporary Industrial"],furnished:["Optimized Layout","Added Accent Pieces","Complete Makeover"]},Ue={empty:["Clean lines with essential furniture pieces. Neutral color palette with subtle accent colors.","Warm and inviting space with natural wood elements and soft textures.","Bold contrast with metal accents, exposed elements, and functional furniture."],furnished:["Rearranged existing furniture for better flow and functionality. Optimized for your space.","Kept your core furniture pieces and added strategic accent items to enhance the look.","Comprehensive redesign with new furniture arrangement and style elements."]},U=[{id:"sofa",name:"Sofa",icon:"square",category:"furniture"},{id:"coffee-table",name:"Coffee Table",icon:"table",category:"furniture"},{id:"dining-table",name:"Dining Table",icon:"table",category:"furniture"},{id:"chairs",name:"Chairs",icon:"square",category:"furniture"},{id:"bed",name:"Bed",icon:"square",category:"furniture"},{id:"desk",name:"Desk",icon:"monitor",category:"furniture"},{id:"bookshelf",name:"Bookshelf",icon:"book-open",category:"furniture"},{id:"tv",name:"TV",icon:"tv",category:"electronics"},{id:"lamp",name:"Lamp",icon:"zap",category:"lighting"},{id:"floor-lamp",name:"Floor Lamp",icon:"zap",category:"lighting"},{id:"rug",name:"Rug",icon:"square",category:"decor"},{id:"curtains",name:"Curtains",icon:"maximize-2",category:"decor"},{id:"art",name:"Art",icon:"image",category:"decor"},{id:"mirror",name:"Mirror",icon:"eye",category:"decor"},{id:"plants",name:"Plants",icon:"circle",category:"decor"},{id:"pillows",name:"Pillows",icon:"square",category:"decor"},{id:"throw-blanket",name:"Throw Blanket",icon:"square",category:"decor"},{id:"vase",name:"Vase",icon:"droplet",category:"decor"},{id:"candles",name:"Candles",icon:"zap",category:"decor"},{id:"clock",name:"Clock",icon:"clock",category:"decor"}],Ae={empty:"Transform this empty room into a beautifully furnished living space. Add appropriate furniture and decor that matches the room's size and architectural features. Include comfortable seating, functional surfaces, proper lighting, and decorative elements. Ensure the furniture placement creates good flow and conversation areas. Match the style: ",furnished:"Redesign this furnished room to improve its layout, aesthetics, and functionality. Rearrange existing furniture and items to create better flow, conversation areas, and visual balance. Ensure proper spacing and accessibility while maintaining the room's character. Match the style: "},Se=window.location.hostname==="localhost"?"http://localhost:3001":"",Ye=`${Se}/replicate/predictions`,Ke=`${Se}/replicate/poll`;document.addEventListener("DOMContentLoaded",()=>{q&&q.addEventListener("change",Je),ye&&ye.addEventListener("click",Qe),ue&&ue.addEventListener("click",Ze),he&&he.addEventListener("click",Ce),me&&me.addEventListener("click",ot),fe&&fe.addEventListener("click",rt),ge&&ge.addEventListener("click",it),$&&$.addEventListener("click",Oe),xe&&xe.addEventListener("click",re),W&&W.addEventListener("click",t=>{t.target===W&&re()}),te&&N&&te.addEventListener("click",be),ne&&B&&ne.addEventListener("click",be),ve&&ve.addEventListener("click",Xe);const c=document.querySelectorAll('input[name="room-type"]');c&&c.forEach(t=>{t.addEventListener("change",i=>{A=i.target.value,console.log(`Room type selected: ${A}`),ke()})});const p=document.querySelectorAll('input[name="furnished-option"]');p&&p.forEach(t=>{t.addEventListener("change",i=>{P=i.target.value,console.log(`Furnished option selected: ${P}`),Pe()})}),O&&(O.addEventListener("dragover",t=>{t.preventDefault(),O.classList.add("drag-over")}),O.addEventListener("dragleave",()=>{O.classList.remove("drag-over")}),O.addEventListener("drop",t=>{if(t.preventDefault(),O.classList.remove("drag-over"),t.dataTransfer.files.length){const i=t.dataTransfer.files[0];if(Ie(i)){const e=new FileReader;e.onload=async function(n){S=n.target.result,Z&&(Z.src=S),D=await le(S),console.log(`Uploaded room is ${D?"empty":"furnished"}`),O&&O.classList.add("hidden"),Y&&Y.classList.remove("hidden")},e.readAsDataURL(i)}else alert("Please upload a valid image file (JPEG, PNG, etc.)")}})),We()});function We(){Le(),z.replace(),A==="empty"&&ke()}function Le(){$&&(k?($.innerHTML='<i data-feather="check-circle"></i><span>API Key Set</span>',$.classList.add("authenticated"),z.replace()):($.innerHTML='<i data-feather="key"></i><span>API Key</span>',$.classList.remove("authenticated"),z.replace()))}function Oe(){W.classList.add("show"),N&&(N.value=Me),B&&(B.value=k)}function re(){W.classList.remove("show")}function be(c){const p=c.currentTarget;let t;if(p===te&&N)t=N;else if(p===ne&&B)t=B;else return;t.type==="password"?(t.type="text",p.innerHTML='<i data-feather="eye-off"></i>'):(t.type="password",p.innerHTML='<i data-feather="eye"></i>'),z.replace()}function Xe(){if(N){const c=N.value.trim();Me=c,localStorage.setItem("openai_api_key",c)}if(B){const c=B.value.trim();c?(k=c,localStorage.setItem("replicate_api_key",c)):(k="",localStorage.removeItem("replicate_api_key"))}else k="",localStorage.removeItem("replicate_api_key"),console.warn("Replicate API Key input not found in the HTML.");Le(),re(),k||alert("Replicate API key is recommended for image generation.")}async function Je(c){const p=c.target.files[0];if(p&&Ie(p)){const t=new FileReader;t.onload=async function(i){S=i.target.result,Z.src=S,D=await le(S),console.log(`Uploaded room is ${D?"empty":"furnished"}`),O.classList.add("hidden"),Y.classList.remove("hidden")},t.readAsDataURL(p)}else p&&alert("Please upload a valid image file (JPEG, PNG, etc.)")}function Ie(c){return["image/jpeg","image/png","image/jpg","image/webp"].includes(c.type)}function Qe(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const c=document.createElement("div");c.classList.add("camera-view");const p=document.createElement("video");p.setAttribute("autoplay",""),p.setAttribute("playsinline","");const t=document.createElement("button");t.classList.add("capture-btn"),t.innerHTML='<i data-feather="camera"></i>';const i=document.createElement("button");i.classList.add("cancel-btn"),i.innerHTML='<i data-feather="x"></i>',c.appendChild(p),c.appendChild(t),c.appendChild(i),document.body.appendChild(c),z.replace(),navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(e=>{p.srcObject=e,p.play(),t.addEventListener("click",async()=>{const n=document.createElement("canvas");n.width=p.videoWidth,n.height=p.videoHeight,n.getContext("2d").drawImage(p,0,0,n.width,n.height),S=n.toDataURL("image/jpeg"),Z.src=S,D=await le(S),console.log(`Captured room is ${D?"empty":"furnished"}`),O.classList.add("hidden"),Y.classList.remove("hidden"),e.getTracks().forEach(l=>l.stop()),c.remove()}),i.addEventListener("click",()=>{e.getTracks().forEach(n=>n.stop()),c.remove()})}).catch(e=>{console.error("Error accessing camera:",e),alert("Unable to access camera. Please check your device permissions."),c.remove()})}else alert("Your device does not support camera access")}function Ze(){q&&q.click()}async function le(c){return new Promise(p=>{const t=new Image;t.crossOrigin="anonymous",t.onload=function(){const i=document.createElement("canvas"),e=i.getContext("2d");i.width=t.width,i.height=t.height,e.drawImage(t,0,0);const o=e.getImageData(0,0,i.width,i.height).data;let l=0,a=o.length/4;const r=Math.min(1e3,a),s=Math.floor(a/r);for(let g=0;g<r;g++){const h=g*s*4,y=o[h],x=o[h+1],m=o[h+2],f=Math.abs(y-x)<30&&Math.abs(x-m)<30&&Math.abs(y-m)<30,v=(y+x+m)/3>100;f&&v&&l++}const d=l/r,u=d>.7;console.log(`Room analysis: ${Math.round(d*100)}% uniform neutral colors, likely empty: ${u}`),p(u)},t.onerror=function(){console.log("Could not analyze image, assuming room is furnished"),p(!1)},t.src=c})}function ke(){const c=document.getElementById("room-items-selection"),p=document.getElementById("furnished-options");A==="empty"?(c&&(c.classList.remove("hidden"),ae("empty"),ie()),p&&p.classList.add("hidden")):(p&&p.classList.remove("hidden"),Pe())}function ie(){const c=document.getElementById("items-grid");c&&(c.innerHTML="",U.forEach(p=>{const t=document.createElement("div");t.className="item-option",t.setAttribute("data-item-id",p.id),t.innerHTML=`
            <input type="checkbox" id="item-${p.id}" class="item-checkbox">
            <label for="item-${p.id}" class="item-label">
                <div class="item-icon">
                    <i data-feather="${p.icon}"></i>
                </div>
                <span class="item-name">${p.name}</span>
            </label>
        `,t.querySelector(".item-checkbox").addEventListener("change",e=>{e.target.checked?L.add(p.id):L.delete(p.id),console.log("Selected items:",Array.from(L))}),c.appendChild(t)}),z.replace())}function Pe(){const c=document.getElementById("room-items-selection");P==="keep-existing"?(c&&c.classList.add("hidden"),L.clear()):P==="add-new"?c&&(c.classList.remove("hidden"),ae("add-new"),ie()):P==="start-fresh"&&c&&(c.classList.remove("hidden"),ae("start-fresh"),ie())}function ae(c){const p=document.getElementById("items-selection-title"),t=document.getElementById("items-selection-hint");c==="empty"?(p.textContent="What would you like to add?",t.textContent="Select items you'd like to include in your room design"):c==="add-new"?(p.textContent="What additional items would you like?",t.textContent="Select new items to add to your existing furniture"):c==="start-fresh"&&(p.textContent="What would you like in your new room?",t.textContent="Select items to replace your existing furniture")}function ze(c,p){const t={positivePrompt:"",negativePrompt:"",shouldGenerate:!0},i="blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, change architectural structure, modify room structure, change room layout, change room dimensions, change room shape, change room size, change room proportions, change room geometry, change room boundaries, change room walls, change room windows, change room floor, change room ceiling, change room doors, change room architecture, change room design structure, change room construction, change room building elements, change room structural elements, change room framework, change room skeleton, change room shell, change room envelope, change room perimeter, change room outline, change room footprint, change room floorplan, change room blueprint, change room layout structure, change room spatial arrangement, change room spatial organization, change room spatial configuration, change room spatial layout, change room spatial design, change room spatial structure, change room spatial framework, change room spatial skeleton, change room spatial shell, change room spatial envelope, change room spatial perimeter, change room spatial outline, change room spatial footprint, change room spatial floorplan, change room spatial blueprint",e=D&&A==="furnished";if(A==="furnished"&&P==="start-fresh")if(L.size===0)t.positivePrompt=`EMPTY ROOM ONLY: Remove EVERYTHING except walls, floor, ceiling, windows, doors. NO furniture, NO decor, NO items, NO objects, NO couches, NO chairs, NO tables, NO TVs, NO lamps, NO rugs, NO curtains, NO art, NO plants, NO accessories. COMPLETELY BARE ROOM. Empty space only. Nothing in the room except architectural elements. Style: ${p}.`,t.negativePrompt=`${i}, furniture, decor, decorative items, accessories, any furniture, any decor, any items, all furniture, all decor, all items, existing furniture, existing decor, existing items, current furniture, current decor, current items, room contents, room items, room furniture, room decor, sofa, couch, chair, table, coffee table, dining table, bed, desk, bookshelf, lamp, floor lamp, rug, curtains, art, painting, mirror, plant, plants, pillow, pillows, throw blanket, vase, candle, candles, clock, any object, any item, any piece of furniture, any decoration, any accessory, any furnishing, any household item, any room item, any furniture piece, any decor item, any accessory item, any furnishing item, any household object, any room object, any furniture object, any decor object, any accessory object, any furnishing object, any household piece, any room piece, any furniture piece, any decor piece, any accessory piece, any furnishing piece, any household decoration, any room decoration, any furniture decoration, any decor decoration, any accessory decoration, any furnishing decoration`;else{const n=U.filter(r=>L.has(r.id)),o=U.filter(r=>!L.has(r.id)),l=n.map(r=>r.name.toLowerCase()).join(", ");t.positivePrompt=`REMOVE ALL EXISTING FURNITURE: Completely clear the room of all current furniture and items, then add ONLY: ${l}. NO other furniture, NO other decor, NO other items. Clean minimal room with ONLY the specified items. Remove everything else. Style: ${p}.`;const a=o.map(r=>r.name.toLowerCase()).join(", ");t.negativePrompt=`${i}, ${a}, existing furniture, existing decor, existing items, current furniture, current decor, current items, room contents, room items, room furniture, room decor, any furniture not specified, any decor not specified, any items not specified, any objects not specified, any pieces not specified, any furnishings not specified, any decorations not specified, any accessories not specified, any household items not specified, any room items not specified, any furniture pieces not specified, any decor items not specified, any accessory items not specified, any furnishing items not specified, any household objects not specified, any room objects not specified, any furniture objects not specified, any decor objects not specified, any accessory objects not specified, any furnishing objects not specified, any household pieces not specified, any room pieces not specified, any furniture pieces not specified, any decor pieces not specified, any accessory pieces not specified, any furnishing pieces not specified, any household decorations not specified, any room decorations not specified, any furniture decorations not specified, any decor decorations not specified, any accessory decorations not specified, any furnishing decorations not specified`}else if(A==="empty"||e)if(L.size===0)t.shouldGenerate=!1,t.positivePrompt="",t.negativePrompt="";else{const o=U.filter(r=>L.has(r.id)).map(r=>r.name.toLowerCase()).join(", ");t.positivePrompt=`Minimal room design. Add ONLY these items: ${o}. Empty room with nothing else. No additional furniture. No decorations. No extra items. Only the specified items. Clean, minimal space. Style: ${p}.`;const a=U.filter(r=>!L.has(r.id)).map(r=>r.name.toLowerCase()).join(", ");t.negativePrompt=`${i}, ${a}, sofa, couch, chair, table, coffee table, dining table, bed, desk, bookshelf, lamp, floor lamp, rug, curtains, art, painting, mirror, plant, plants, pillow, pillows, throw blanket, vase, candle, candles, clock, furniture, decor, decoration, decorative items, accessories, any furniture not explicitly listed, any decor not explicitly listed, any items not explicitly mentioned, additional furniture, additional decor, extra items, unnecessary items, unwanted items, unspecified items, unrequested items, other furniture, other decor, other items, more furniture, more decor, more items, extra furniture, extra decor, extra items, additional furniture, additional decor, additional items, unwanted furniture, unwanted decor, unwanted items, unspecified furniture, unspecified decor, unspecified items, unrequested furniture, unrequested decor, unrequested items`}else if(P==="keep-existing")t.positivePrompt=`${c}${p}. Keep all existing furniture and items, only rearrange them for better layout and flow. Do not add or remove any items.`,t.negativePrompt=i;else if(P==="add-new")if(L.size===0)t.positivePrompt=`${c}${p}. Keep all existing furniture and items, only rearrange them for better layout and flow.`,t.negativePrompt=i;else{const o=U.filter(l=>L.has(l.id)).map(l=>l.name.toLowerCase()).join(", ");t.positivePrompt=`${c}${p}. Keep all existing furniture and items, rearrange them for better layout, and add: ${o}.`,t.negativePrompt=i}return t}async function qe(){try{const c=new AbortController,p=setTimeout(()=>c.abort(),5e3),t=await fetch("https://api.replicate.com/v1/models",{method:"GET",signal:c.signal});return clearTimeout(p),t.ok}catch(c){return console.warn("Connection health check failed:",c.message),!1}}async function Re(c,p={},t=3,i=2e3){let e=0;for(;e<=t;)try{e>0&&(await qe()||(console.warn("Connection health check failed, waiting longer before retry..."),await new Promise(r=>setTimeout(r,i*2))));const n=new AbortController,o=setTimeout(()=>n.abort(),3e4),l=await fetch(c,{...p,signal:n.signal});return clearTimeout(o),l}catch(n){if(e++,e>t)throw new Error(`Request failed after ${t} retries: ${n.message}`);if(n.name==="AbortError"||n.message==="Failed to fetch"||n.message==="NetworkError when attempting to fetch resource.")console.warn(`Fetch attempt ${e} failed (timeout/network). Retrying in ${i/1e3}s...`),await new Promise(o=>setTimeout(o,i));else throw n}}async function _e(c,p){let t,i=0;const e=90;let n=2e3,o=0;const l=5;for(;i<e;){i++;try{const a=await Re(Ke,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Token ${p}`},body:JSON.stringify({predictionUrl:c})},2,1e3);if(!a.ok){o++;const r=await a.json().catch(()=>({}));if(console.error(`Polling error: Status ${a.status}`,r),a.status>=400&&a.status<500)throw new Error(`Polling failed with status ${a.status}: ${r.detail||"Client error"}`);o>=l&&(n=Math.min(n*1.5,1e4),console.log(`Too many consecutive errors, increasing delay to ${n}ms`)),await new Promise(s=>setTimeout(s,n));continue}if(o=0,t=await a.json(),console.log(`Polling attempt ${i}: Status - ${t.status}`),t.status==="succeeded"){if(!t.output||t.output.length===0)throw new Error("Replicate prediction succeeded but returned no output.");return{imageUrls:t.output}}else{if(t.status==="failed")throw console.error("Replicate prediction failed:",t.error),new Error(`Replicate prediction failed: ${t.error}`);if(t.status==="canceled")throw console.warn("Replicate prediction canceled:",t),new Error("Replicate prediction was canceled.")}t.status==="starting"?n=3e3:t.status==="processing"&&(n=2e3),await new Promise(r=>setTimeout(r,n))}catch(a){if(o++,console.error(`Polling attempt ${i} failed: ${a.message}`),i>=e)throw new Error(`Replicate prediction timed out after ${e} attempts: ${a.message}`);o>=l&&(n=Math.min(n*1.5,1e4),console.log(`Consecutive errors, increasing delay to ${n}ms`)),await new Promise(r=>setTimeout(r,n))}}throw new Error(`Replicate prediction timed out after ${e} attempts.`)}async function Te(c,p,t,i){const e=p.includes("completely empty space")||p.includes("Remove all furniture")||p.includes("empty room")||p.includes("COMPLETELY EMPTY ROOM")||p.includes("REMOVE ALL EXISTING FURNITURE")||p.includes("EMPTY ROOM ONLY"),n=e?[{version:"stability-ai/stable-diffusion-3.5-large",name:"SD 3.5 Large",type:"img2img"},{version:"stability-ai/stable-diffusion-xl-base-1.0",name:"SDXL Base",type:"img2img"},{version:"adirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",name:"SDXL Depth Midas",type:"controlnet"},{version:"lucataco/sdxl-controlnet-depth:465fb41789dc2203a9d7158be11d1d2570606a039c65e0e236fd329b5eecb10c",name:"SDXL ControlNet Depth",type:"controlnet"}]:[{version:"adirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",name:"SDXL Depth Midas",type:"controlnet"},{version:"lucataco/sdxl-controlnet-depth:465fb41789dc2203a9d7158be11d1d2570606a039c65e0e236fd329b5eecb10c",name:"SDXL ControlNet Depth",type:"controlnet"},{version:"stability-ai/stable-diffusion-3.5-large",name:"SD 3.5 Large",type:"img2img"},{version:"stability-ai/stable-diffusion-xl-base-1.0",name:"SDXL Base",type:"img2img"}];let o=null;for(let l=0;l<n.length;l++){const a=n[l];console.log(`Attempting generation with model: ${a.name}`);try{const r={image:c,prompt:p};t&&t.trim(),a.type==="controlnet"?(r.guidance_scale=12,r.num_inference_steps=30,e?r.controlnet_conditioning_scale=.01:r.controlnet_conditioning_scale=.8):a.type==="img2img"&&(e?(r.denoising_strength=.95,r.guidance_scale=20,r.num_inference_steps=50):(r.denoising_strength=.7,r.guidance_scale=12,r.num_inference_steps=30),r.scheduler="K_EULER",r.seed=Math.floor(Math.random()*1e6));const s=await Re(Ye,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Token ${i}`},body:JSON.stringify({version:a.version,input:r})},3,3e3);if(!s.ok){const g=await s.json().catch(()=>({})),h=`Model ${a.name} failed: ${g.detail||s.status}`;console.warn(h),o=new Error(h);continue}const d=await s.json();if(!d.urls||!d.urls.get){const g=`Model ${a.name} did not return a polling URL.`;console.warn(g),o=new Error(g);continue}console.log(`Polling for results from ${a.name}...`);const u=await _e(d.urls.get,i);return console.log(`Successfully generated with ${a.name}`),u.imageUrls}catch(r){if(console.warn(`Model ${a.name} failed:`,r.message),o=r,l===n.length-1)throw new Error(`All models failed. Last error: ${r.message}`);continue}}throw o||new Error("All model attempts failed")}async function Ce(){if(!S){alert("Please upload an image first");return}if(!k){alert("Please set your Replicate API key first"),Oe();return}Y.classList.add("hidden"),we.classList.remove("hidden"),V.innerHTML="";const c=document.getElementById("empty-room"),p=document.getElementById("furnished-room");c&&c.checked?A="empty":p&&p.checked&&(A="furnished");const t=Ae[A],i=Ee[A][0],e=Ue[A][0],n=ze(t,i);if(!n.shouldGenerate){alert(A==="empty"||A==="furnished"&&P!=="start-fresh"?"Please select at least one item to add to your empty room before generating a design.":"Please select at least one item to add to your room before generating a design.");return}const o=n.positivePrompt,l=n.negativePrompt,a={id:"design-0",title:i,description:e,imageUrl:"",originalImageUrl:S,prompt:o,isFallback:!1,loading:!0,needsRetry:!1,errorMessage:""};oe=[a],nt(oe);try{console.log("Starting image generation with prompt:",o),console.log("Negative prompt:",l);let r=await Te(S,o,l,k),s;Array.isArray(r)?s=r[0]:typeof r=="string"?s=r:s="",a.imageUrl=s,a.loading=!1,a.isFallback=!1}catch(r){console.error(`Error in image generation for design (${i}):`,r);let s="Image generation failed. Please try again.";r.message.includes("timed out")?s="Generation took too long and timed out. This can happen during peak usage. Please try again.":r.message.includes("All models failed")?s="All available models are currently busy. Please try again in a few minutes.":r.message.includes("network")||r.message.includes("fetch")?s="Network connection issue. Please check your internet connection and try again.":(r.message.includes("401")||r.message.includes("unauthorized"))&&(s="API key issue. Please check your Replicate API key."),a.imageUrl="",a.loading=!1,a.isFallback=!1,a.needsRetry=!0,a.errorMessage=s}He(a,0)}function et(c,p,t){const i=c.querySelector(".image-reveal-container");if(i){i.classList.remove("reveal-loading");const o=document.createElement("div");o.className="retry-container",o.innerHTML=`
            <div class="retry-content">
                <div class="retry-icon">
                    <i data-feather="alert-triangle"></i>
                </div>
                <div class="retry-message">
                    <h4>Generation Failed</h4>
                    <p>${p.errorMessage||"Image generation timed out or failed"}</p>
                </div>
                <button class="retry-btn">
                    <i data-feather="refresh-cw"></i>
                    <span>Retry Generation</span>
                </button>
            </div>
        `,i.innerHTML="",i.appendChild(o),o.querySelector(".retry-btn").addEventListener("click",()=>{tt()})}const e=c.querySelector(".design-disclaimer");e&&(e.innerHTML=`<p><strong>Generation Failed:</strong> ${p.errorMessage||"Timed out or API error"}</p>`,e.classList.add("error"),e.style.display="block");const n=c.querySelector(".design-description");n&&(n.textContent=p.description),z.replace()}async function tt(){console.log("Retrying image generation");const c=oe[0];if(!c){console.error("No design found");return}c.loading=!0,c.needsRetry=!1,c.errorMessage="",c.imageUrl="";const p=V.querySelector('[data-design-id="design-0"]');if(p){const t=p.querySelector(".image-reveal-container");if(t){t.classList.add("reveal-loading");const e=document.createElement("div");e.className="whiteboard-container",e.innerHTML=`
                <canvas class="whiteboard-canvas"></canvas>
                <div class="whiteboard-controls">
                    <button class="whiteboard-clear" title="Clear drawing">
                        <i data-feather="trash-2"></i>
                    </button>
                    <div class="whiteboard-colors">
                        <div class="color-option active" data-color="#6366f1"></div>
                        <div class="color-option" data-color="#ef4444"></div>
                        <div class="color-option" data-color="#10b981"></div>
                        <div class="color-option" data-color="#f59e0b"></div>
                        <div class="color-option" data-color="#8b5cf6"></div>
                        <div class="color-option" data-color="#000000"></div>
                    </div>
                    <div class="whiteboard-hint">Retrying... Draw while waiting!</div>
                </div>
            `,t.innerHTML=`
                <img class="design-image original-image" src="${c.originalImageUrl}" alt="Original Room">
                <img class="design-image generated-image" src="" alt="${c.title}" style="opacity: 0; z-index: 3;">
                <div class="slider-backdrop"></div>
                <input type="range" class="reveal-slider" min="0" max="100" value="0" orient="vertical" aria-label="Reveal Original Image" title="Slide down to reveal original image">
                <div class="slider-indicators">
                    <div class="slider-indicator slider-indicator-top">
                        <span>Generated</span>
                    </div>
                    <div class="slider-indicator slider-indicator-bottom">
                        <span>Original</span>
                    </div>
                </div>
                <div class="slider-hint-arrows">
                    <div class="slider-hint-arrow"></div>
                    <div class="slider-hint-arrow"></div>
                    <div class="slider-hint-arrow"></div>
                </div>
            `,t.insertBefore(e,t.firstChild);const n=e.querySelector(".whiteboard-canvas");n&&$e(n,p),z.replace()}const i=p.querySelector(".design-disclaimer");i&&(i.style.display="none")}try{const t=Ae[A],i=Ee[A][0],e=ze(t,i);if(!e.shouldGenerate){alert("Please select at least one item to add to your empty room before generating a design.");return}let n=await Te(S,e.positivePrompt,e.negativePrompt,k),o;Array.isArray(n)?o=n[0]:typeof n=="string"?o=n:o="",c.imageUrl=o,c.loading=!1,c.needsRetry=!1,c.isFallback=!1,console.log("Retry successful")}catch(t){console.error("Retry failed:",t),c.imageUrl="",c.loading=!1,c.needsRetry=!0,c.isFallback=!1,c.errorMessage=t.message}He(c,0)}function He(c,p){const t=V.querySelector(`[data-design-id="design-${p}"]`);if(console.log(`Updating card ${p}, found card: ${!!t}`),!t)return;const i=t.querySelector(".whiteboard-container"),e=t.querySelector(".generated-image");i&&(i.classList.add("fade-out"),setTimeout(()=>{if(i.remove(),c.needsRetry){et(t,c);return}if(e){e.onload=()=>{console.log(`Image ${p} loaded successfully`),e.style.opacity=1,e.style.display="block",e.style.zIndex=3;const r=t.querySelector(".image-reveal-container");r&&r.classList.remove("reveal-loading"),Q(t,p)},e.onerror=()=>{console.error(`Image ${p} failed to load: ${c.imageUrl}`);const r=t.querySelector(".image-reveal-container");r&&r.classList.remove("reveal-loading")},e.src=c.imageUrl,e.classList.add("fade-in"),e.style.opacity=1,e.style.zIndex=3;const a=t.querySelector(".image-reveal-container");if(a&&!a.querySelector(".reveal-slider")){console.log(`Adding reveal slider to card ${p}`);const r=document.createElement("input");r.type="range",r.className="reveal-slider",r.min="0",r.max="100",r.value="0",r.setAttribute("orient","vertical"),r.setAttribute("aria-label","Reveal Original Image"),r.setAttribute("title","Slide down to reveal original image");const s=document.createElement("div");s.className="slider-backdrop",a.appendChild(s),a.appendChild(r);const d=document.createElement("div");d.className="slider-indicators",d.innerHTML=`
                        <div class="slider-indicator slider-indicator-top">
                            <span>Generated</span>
                        </div>
                        <div class="slider-indicator slider-indicator-bottom">
                            <span>Original</span>
                        </div>
                    `,a.appendChild(d);const u=document.createElement("div");u.className="slider-hint-arrows",u.innerHTML=`
                        <div class="slider-hint-arrow"></div>
                        <div class="slider-hint-arrow"></div>
                        <div class="slider-hint-arrow"></div>
                    `,a.appendChild(u),Q(t,p)}setTimeout(()=>{e.style.opacity=1,e.style.display="block",e.style.zIndex=3;const r=t.querySelector(".image-reveal-container");r&&r.classList.remove("reveal-loading"),console.log(`Image ${p} should be visible now. Opacity: ${e.style.opacity}, Display: ${e.style.display}`),Q(t,p)},100)}const n=t.querySelector(".design-disclaimer");c.isFallback&&n&&(n.innerHTML="<p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>",n.classList.add("error"));const o=t.querySelector(".design-description");o&&(o.textContent=c.description);const l=t.querySelector(".compare-btn");l&&(c.isFallback?(l.disabled=!0,l.style.opacity="0.5",l.style.cursor="not-allowed",l.querySelector("span").textContent="Compare N/A"):(l.disabled=!1,l.style.opacity="",l.style.cursor="",l.querySelector("span").textContent="Compare with Original"))},400))}function nt(c){V.innerHTML="",c.forEach((i,e)=>{const n=document.createElement("div");n.classList.add("design-card"),n.setAttribute("data-design-id",i.id);let o="";i.isFallback?o=`
                <div class="design-disclaimer error">
                    <p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>
                </div>
            `:o='<div class="design-disclaimer" style="display:none"></div>';const l=!i.loading;n.innerHTML=`
            <div class="design-image-container">
                <div class="whiteboard-container${i.loading?"":" fade-out"}">
                    <canvas class="whiteboard-canvas"></canvas>
                    <div class="whiteboard-controls">
                        <button class="whiteboard-clear" title="Clear drawing">
                            <i data-feather="trash-2"></i>
                        </button>
                        <div class="whiteboard-colors">
                            <div class="color-option active" data-color="#6366f1"></div>
                            <div class="color-option" data-color="#ef4444"></div>
                            <div class="color-option" data-color="#10b981"></div>
                            <div class="color-option" data-color="#f59e0b"></div>
                            <div class="color-option" data-color="#8b5cf6"></div>
                            <div class="color-option" data-color="#000000"></div>
                        </div>
                        <div class="whiteboard-hint">Draw while waiting...</div>
                    </div>
                </div>
                <div class="image-reveal-container${i.loading?" reveal-loading":""}">
                    <img class="design-image original-image" src="${i.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image${i.loading?"":" fade-in"}" src="${i.loading?"":i.imageUrl}" alt="${i.title}" style="opacity:${i.loading?0:1}; z-index: 3;">
                    ${l?'<input type="range" class="reveal-slider" min="0" max="100" value="100" orient="vertical" aria-label="Reveal Original Image" title="Slide down to reveal original image">':""}
                </div>
                ${o}
            </div>
            <div class="design-info">
                <h3 class="design-title">${i.title}</h3>
                <p class="design-description">${i.description}</p>
            </div>
        `,V.appendChild(n)}),z.replace();const p=V.querySelector(".design-card[data-design-id]");if(p){const i=p.querySelector(".whiteboard-canvas");i&&$e(i,p)}const t=V.querySelector(".design-card");t&&(console.log("Setting up reveal slider for design card"),Q(t,0))}function $e(c,p){const t=c.getContext("2d");p.querySelector(".whiteboard-controls");const i=p.querySelector(".whiteboard-clear"),e=p.querySelectorAll(".color-option");let n=!1,o=0,l=0,a="#6366f1",r=3;const s=c.getBoundingClientRect(),d=window.devicePixelRatio||1;c.width=s.width*d,c.height=s.height*d,c.style.width=s.width+"px",c.style.height=s.height+"px",t.scale(d,d),t.lineCap="round",t.lineJoin="round",t.lineWidth=r,t.strokeStyle=a;function u(){t.fillStyle="#ffffff",t.fillRect(0,0,c.width,c.height)}u();function g(m){const f=c.getBoundingClientRect(),v=m.touches?m.touches[0].clientX:m.clientX,b=m.touches?m.touches[0].clientY:m.clientY;return{x:v-f.left,y:b-f.top}}function h(m){n=!0;const f=g(m);o=f.x,l=f.y,m.preventDefault()}function y(m){if(!n)return;const f=g(m);t.beginPath(),t.moveTo(o,l),t.lineTo(f.x,f.y),t.stroke(),o=f.x,l=f.y,m.preventDefault()}function x(){n=!1}c.addEventListener("mousedown",h),c.addEventListener("mousemove",y),c.addEventListener("mouseup",x),c.addEventListener("mouseout",x),c.addEventListener("touchstart",h),c.addEventListener("touchmove",y),c.addEventListener("touchend",x),c.addEventListener("touchcancel",x),i.addEventListener("click",u),e.forEach(m=>{m.addEventListener("click",()=>{e.forEach(f=>f.classList.remove("active")),m.classList.add("active"),a=m.dataset.color,t.strokeStyle=a})}),e.forEach(m=>{m.style.backgroundColor=m.dataset.color})}function ee(c){const p=c.querySelector(".slider-hint-arrows");p&&(p.classList.add("hidden"),setTimeout(()=>{p.parentNode&&p.parentNode.removeChild(p)},300))}function Q(c,p){const t=c.querySelector(".image-reveal-container"),i=c.querySelector(".reveal-slider"),e=c.querySelector(".generated-image");if(console.log(`Card ${p}: revealContainer=${!!t}, revealSlider=${!!i}, generatedImage=${!!e}`),!t||!i||!e){console.log(`Missing elements for card ${p}`);return}const n=i.cloneNode(!0);i.parentNode.replaceChild(n,i);const o=s=>{const d=s.target.value,u=(100-d)/100;e.style.opacity=u,console.log(`Slider value: ${d}, opacity: ${u}`),console.log(`Generated image opacity after change: ${e.style.opacity}`)};n.addEventListener("input",o),n.addEventListener("change",o),n.addEventListener("mousedown",()=>{console.log(`Slider ${p} mouse down - starting interaction`),ee(c)}),n.addEventListener("touchstart",()=>{console.log(`Slider ${p} touch start - starting interaction`),ee(c)});let l=!1;const a=()=>{l||(ee(c),l=!0)};n.addEventListener("input",a),n.addEventListener("change",a),console.log(`Testing slider ${p} - Current value: ${n.value}, Generated image opacity: ${e.style.opacity}`);const r=c.querySelector(".original-image");r&&(r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.zIndex=2,r.style.opacity=1,r.style.display="block",console.log(`Original image positioned for card ${p}`)),e.classList.remove("fade-in"),e.style.opacity=1,e.style.display="block",e.style.zIndex=3,e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",n.value=0,setTimeout(()=>{console.log(`Testing layering for card ${p} - setting opacity to 0.5`),e.style.opacity=.5,setTimeout(()=>{console.log(`Restoring opacity to 1 for card ${p}`),e.style.opacity=1,n.value=0},2e3)},1e3),e.offsetHeight,console.log(`Initialized card ${p} with opacity: ${e.style.opacity}, display: ${e.style.display}`),console.log("Generated image computed style:",window.getComputedStyle(e).opacity),console.log("Generated image src:",e.src)}function ot(){we.classList.add("hidden"),Y.classList.remove("hidden")}function rt(){Ce()}function it(){const c=document.querySelector(".design-card");if(c){const p=c.querySelector(".design-image");if(p){const t=document.createElement("a");t.download="decorai-design.jpg";const i=document.createElement("canvas"),e=i.getContext("2d"),n=new Image;n.crossOrigin="anonymous",n.onload=function(){i.width=n.width,i.height=n.height,e.drawImage(n,0,0);try{t.href=i.toDataURL("image/jpeg"),t.click()}catch(o){console.error("Error saving image:",o),window.open(p.src,"_blank")}},n.onerror=function(){console.error("Error loading image for download"),window.open(p.src,"_blank")},n.src=p.src}}}const Ve=document.createElement("style");Ve.textContent=`
    .camera-view {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .camera-view video {
        max-width: 100%;
        max-height: 80vh;
    }
    
    .capture-btn {
        position: absolute;
        bottom: 40px;
        background-color: white;
        border: none;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    
    .cancel-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: white;
    }
    
    .drag-over {
        border-color: var(--primary-color);
        background-color: rgba(99, 102, 241, 0.05);
    }
    
    .design-card {
        min-height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: var(--border-radius);
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        background: #fff;
        margin-bottom: 24px;
        overflow: hidden;
    }
    .design-image-container {
        position: relative;
        overflow: hidden;
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f6f6f7;
    }
    
    .whiteboard-container {
        width: 100%;
        height: 240px;
        position: relative;
        border-radius: var(--border-radius);
        background: #ffffff;
        border: 2px dashed #d1d5db;
        opacity: 1;
        transition: opacity 0.4s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
    }
    .whiteboard-container.fade-out {
        opacity: 0;
        transition: opacity 0.4s;
    }
    .whiteboard-canvas {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
        cursor: crosshair;
        background: #ffffff;
        touch-action: none;
        transition: cursor 0.2s;
    }
    .whiteboard-canvas:active {
        cursor: none;
    }
    .whiteboard-controls {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 6px 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
    .whiteboard-clear {
        background: none;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.2s;
    }
    .whiteboard-clear:hover {
        background: #f3f4f6;
        color: #374151;
    }
    .whiteboard-colors {
        display: flex;
        gap: 4px;
        margin: 0 8px;
    }
    .color-option {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.2s;
        position: relative;
    }
    .color-option:hover {
        transform: scale(1.1);
    }
    .color-option.active {
        border-color: #374151;
        transform: scale(1.1);
    }
    .color-option.active::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
    }
    .whiteboard-hint {
        font-size: 10px;
        color: #9ca3af;
        white-space: nowrap;
        animation: pulse-hint 2s infinite;
    }
    @keyframes pulse-hint {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
    }
    .design-image {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: var(--border-radius);
        opacity: 0;
        transition: opacity 0.4s;
        position: relative;
        z-index: 2;
        background: #f6f6f7;
    }
    .design-image.fade-in {
        opacity: 1;
        transition: opacity 0.4s;
    }
    .compare-btn {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        padding: 8px 12px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.2s ease;
        z-index: 2;
    }
    
    .compare-btn:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }
    
    .design-disclaimer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(220, 38, 38, 0.8);
        color: white;
        padding: 8px;
        font-size: 11px;
        text-align: center;
        z-index: 2;
    }
    
    .design-disclaimer p {
        margin: 0;
        color: white;
    }
    
    .login-btn.authenticated {
        color: var(--success-color);
        border-color: var(--success-color);
    }
    
    .design-disclaimer.warning {
        background-color: rgba(245, 158, 11, 0.8); /* Amber color */
    }
    .design-disclaimer.error {
         background-color: rgba(220, 38, 38, 0.8); /* Red color */
    }
    
    .room-type-selection {
        margin: 20px 0;
        padding: 0 20px;
    }
    
    .room-type-selection h3 {
        margin-bottom: 16px;
        color: #1f2937;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    
    .room-options {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
    }
    
    .room-option {
        position: relative;
        flex: 1;
        min-width: 320px;
        display: flex;
    }
    
    .room-option input[type="radio"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    
    .room-option label {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #fff;
        height: 100px;
        width: 100%;
        box-sizing: border-box;
        flex: 1;
    }
    
    .room-option label:hover {
        border-color: #d1d5db;
        background: #f9fafb;
    }
    
    .room-option input[type="radio"]:checked + label {
        border-color: var(--primary-color);
        background: rgba(99, 102, 241, 0.05);
    }
    
    .room-option .option-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #f3f4f6;
        color: #6b7280;
        transition: all 0.2s ease;
    }
    
    .room-option input[type="radio"]:checked + label .option-icon {
        background: var(--primary-color);
        color: white;
    }
    
    .room-option .option-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    
    .room-option .option-text h4 {
        margin: 0 0 4px 0;
        color: #1f2937;
        font-size: 1rem;
        font-weight: 600;
    }
    
    .room-option .option-text p {
        margin: 0;
        color: #6b7280;
        font-size: 0.875rem;
        line-height: 1.4;
    }
    
        @media (min-width: 700px) {
        .room-options {
            flex-direction: row;
            gap: 16px;
        }
        
        .room-option {
            flex: 1;
            min-width: 320px;
        }
    }
    
    @media (max-width: 699px) {
        .room-options {
            flex-direction: column;
            gap: 12px;
        }
        
        .room-option {
            min-width: auto;
            width: 100%;
        }
    }
    
    /* Room Items Selection Styles */
    .room-items-selection {
        margin: 20px 0;
        padding: 0 20px;
    }
    
    .room-items-selection h3 {
        margin-bottom: 8px;
        color: #1f2937;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    
    .selection-hint {
        text-align: center;
        color: #6b7280;
        font-size: 0.875rem;
        margin-bottom: 20px;
    }
    
    .items-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .item-option {
        position: relative;
    }
    
    .item-option input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    
    .item-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #fff;
        height: 100px;
        box-sizing: border-box;
        justify-content: center;
    }
    
    .item-label:hover {
        border-color: #d1d5db;
        background: #f9fafb;
        transform: translateY(-2px);
    }
    
    .item-option input[type="checkbox"]:checked + .item-label {
        border-color: var(--primary-color);
        background: rgba(99, 102, 241, 0.05);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
    }
    
    .item-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #f3f4f6;
        color: #6b7280;
        transition: all 0.2s ease;
    }
    
    .item-option input[type="checkbox"]:checked + .item-label .item-icon {
        background: var(--primary-color);
        color: white;
    }
    
    .item-name {
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
        text-align: center;
        line-height: 1.2;
    }
    
    .item-option input[type="checkbox"]:checked + .item-label .item-name {
        color: var(--primary-color);
        font-weight: 600;
    }
    
    @media (max-width: 480px) {
        .items-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 8px;
        }
        
        .item-label {
            padding: 12px 8px;
            height: 80px;
        }
        
        .item-icon {
            width: 28px;
            height: 28px;
        }
        
        .item-name {
            font-size: 0.8rem;
        }
    }
    
    /* Furnished Options Styles */
    .furnished-options {
        margin: 20px 0;
        padding: 0 20px;
    }
    
    .furnished-options h3 {
        margin-bottom: 16px;
        color: #1f2937;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    
    .furnished-options-grid {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .furnished-option {
        position: relative;
    }
    
    .furnished-option input[type="radio"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    
    .furnished-option label {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 20px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #fff;
        min-height: 120px;
        width: 100%;
        box-sizing: border-box;
        flex: 1;
    }
    
    .furnished-option label:hover {
        border-color: #d1d5db;
        background: #f9fafb;
    }
    
    .furnished-option input[type="radio"]:checked + label {
        border-color: var(--primary-color);
        background: rgba(99, 102, 241, 0.05);
    }
    
    .furnished-option .option-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #f3f4f6;
        color: #6b7280;
        transition: all 0.2s ease;
    }
    
    .furnished-option input[type="radio"]:checked + label .option-icon {
        background: var(--primary-color);
        color: white;
    }
    
    .furnished-option .option-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 80px;
    }
    
    .furnished-option .option-text h4 {
        margin: 0 0 8px 0;
        color: #1f2937;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.3;
    }
    
    .furnished-option .option-text p {
        margin: 0;
        color: #6b7280;
        font-size: 0.875rem;
        line-height: 1.5;
        flex: 1;
    }
    
    @media (min-width: 700px) {
        .furnished-options-grid {
            flex-direction: column;
            gap: 16px;
        }
        
        .furnished-option {
            width: 100%;
        }
    }
    
    @media (max-width: 699px) {
        .furnished-options-grid {
            flex-direction: column;
            gap: 12px;
        }
        
        .furnished-option {
            width: 100%;
        }
    }
     
     .image-preview-wrapper {
         position: relative;
         display: block;
         width: 100%;
         max-width: 600px;
         min-width: 50%;
         margin: 0 auto;
         border-radius: var(--border-radius);
         overflow: hidden;
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         transition: transform 0.2s ease;
     }
     
     .image-preview-wrapper:hover {
         transform: scale(1.02);
     }
     
     .image-preview-wrapper img {
         display: block;
         width: 100%;
         height: auto;
         border-radius: var(--border-radius);
     }
     
     .image-overlay {
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background: rgba(0, 0, 0, 0.5);
         display: flex;
         align-items: center;
         justify-content: center;
         opacity: 0;
         transition: opacity 0.3s ease;
         border-radius: var(--border-radius);
         backdrop-filter: blur(4px);
     }
     
     .image-preview-wrapper:hover .image-overlay {
         opacity: 1;
     }
     
     .change-image-overlay-btn {
         background: rgba(255, 255, 255, 0.95);
         color: #1f2937;
         border: none;
         border-radius: 12px;
         padding: 16px 24px;
         font-size: 1rem;
         font-weight: 600;
         cursor: pointer;
         display: flex;
         align-items: center;
         gap: 8px;
         transition: all 0.2s ease;
         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
         backdrop-filter: blur(10px);
         border: 2px solid rgba(255, 255, 255, 0.5);
     }
     
     .change-image-overlay-btn:hover {
         background: white;
         transform: translateY(-2px);
         box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
     }
     
     .change-image-overlay-btn:active {
         transform: translateY(0);
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
     }
     
     .change-image-overlay-btn i {
         font-size: 1.1rem;
     }
     
     .preview-container {
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 20px;
         text-align: center;
     }
     
     .preview-actions {
         display: flex;
         justify-content: center;
         margin-top: 24px;
     }
    .image-reveal-container {
        position: relative;
        width: 100%;
        height: 240px;
        overflow: hidden;
        border-radius: var(--border-radius);
        background: #f6f6f7;
    }
    .image-reveal-container.reveal-loading {
        display: none;
    }
    .image-reveal-container .original-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
        z-index: 2;
        background: #f6f6f7;
    }
    .image-reveal-container .generated-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
        z-index: 3;
        background: #f6f6f7;
        transition: opacity 0.2s ease;
        opacity: 1; /* Ensure it starts visible */
    }
    .image-reveal-container .generated-image.fade-in {
        opacity: 1; /* Initial opacity, can be overridden by slider */
    }
    .reveal-slider {
        position: absolute;
        right: -28px;
        top: 50%;
        transform: translateY(-50%) rotate(90deg);
        transform-origin: center;
        width: 140px;
        height: 12px;
        background: transparent;
        -webkit-appearance: none;
        appearance: none;
        cursor: grab;
        z-index: 4;
        outline: none;
        opacity: 1;
        transition: all 0.2s ease;
        pointer-events: all;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
    
    .slider-backdrop {
        position: absolute;
        right: -34px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 148px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        z-index: 3;
        backdrop-filter: blur(2px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .reveal-slider:hover {
        opacity: 1;
        transform: translateY(-50%) rotate(90deg) scale(1.05);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }
    .reveal-slider:active {
        cursor: grabbing;
        transform: translateY(-50%) rotate(90deg) scale(0.98);
    }
    .reveal-slider::-webkit-slider-track {
        width: 100%;
        height: 12px;
        background: linear-gradient(to bottom, #9ca3af 0%, #f9fafb 30%, #e5e7eb 70%, #9ca3af 100%);
        border-radius: 6px;
        border: 2px solid rgba(0, 0, 0, 0.4);
        box-shadow: 
            inset 0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 -2px 2px rgba(255, 255, 255, 1),
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 1px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.8);
    }
    .reveal-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.15),
            inset 0 -1px 1px rgba(255, 255, 255, 0.8),
            0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: grab;
        transition: all 0.2s ease;
        position: relative;
    }
    .reveal-slider::-webkit-slider-thumb:active {
        background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%);
        transform: scale(0.95);
        cursor: grabbing;
        box-shadow: 
            inset 0 3px 6px rgba(0, 0, 0, 0.25),
            inset 0 -1px 1px rgba(255, 255, 255, 0.6),
            0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .reveal-slider::-webkit-slider-thumb:hover {
        background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #d1d5db 100%);
        transform: scale(1.05);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.12),
            inset 0 -1px 1px rgba(255, 255, 255, 0.9),
            0 1px 3px rgba(0, 0, 0, 0.15);
    }
    .reveal-slider::-moz-range-track {
        width: 100%;
        height: 12px;
        background: linear-gradient(to bottom, #9ca3af 0%, #f9fafb 30%, #e5e7eb 70%, #9ca3af 100%);
        border-radius: 6px;
        border: 2px solid rgba(0, 0, 0, 0.4);
        box-shadow: 
            inset 0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 -2px 2px rgba(255, 255, 255, 1),
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 1px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.8);
    }
    .reveal-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.15),
            inset 0 -1px 1px rgba(255, 255, 255, 0.8),
            0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: grab;
        transition: all 0.2s ease;
    }
    .reveal-slider::-moz-range-thumb:hover {
        background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #d1d5db 100%);
        transform: scale(1.05);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.12),
            inset 0 -1px 1px rgba(255, 255, 255, 0.9),
            0 1px 3px rgba(0, 0, 0, 0.15);
    }
    
    .retry-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border-radius: var(--border-radius);
        padding: 20px;
        box-sizing: border-box;
    }
    
    .retry-content {
        text-align: center;
        max-width: 280px;
    }
    
    .retry-icon {
        color: #f59e0b;
        font-size: 28px;
        margin-bottom: 12px;
    }
    
    .retry-message {
        margin-bottom: 16px;
    }
    
    .retry-message h4 {
        color: #374151;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 8px 0;
    }
    
    .retry-message p {
        color: #6b7280;
        font-size: 13px;
        line-height: 1.4;
        margin: 0;
    }
    
    .retry-btn {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0 auto;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
    }
    
    .retry-btn:hover {
        background: linear-gradient(135deg, #5856f0 0%, #7c3aed 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
    }
    
    .retry-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
    }
    
    .retry-btn i {
        font-size: 16px;
    }
    
    .slider-indicators {
        position: absolute;
        right: 35px;
        top: 0;
        bottom: 0;
        width: 12px;
        z-index: 5;
        pointer-events: none;
    }
    
    .slider-indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        font-size: 10px;
        font-weight: 600;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    
    .slider-indicator span {
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
    }
    
    .image-reveal-container:hover .slider-indicator {
        opacity: 1;
    }
    
    .slider-indicator-top {
        position: absolute;
        top: calc(50% - 70px - 8px);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        align-items: center;
    }
    
    .slider-indicator-bottom {
        position: absolute;
        top: calc(50% + 70px + 8px);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        align-items: center;
    }
    
    .slider-hint-arrows {
        position: absolute;
        right: -33px;
        top: 50%;
        transform: translateY(30px);
        display: flex;
        flex-direction: column;
        gap: 2px;
        z-index: 6;
        pointer-events: none;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
    
    .slider-hint-arrows.hidden {
        opacity: 0;
        pointer-events: none;
    }
    
    .slider-hint-arrow {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 6px solid rgba(255, 255, 255, 0.9);
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
        animation: arrow-bounce 1.5s infinite;
    }
    
    .slider-hint-arrow:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .slider-hint-arrow:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes arrow-bounce {
        0%, 100% {
            transform: translateY(0);
            opacity: 0.8;
        }
        50% {
            transform: translateY(3px);
            opacity: 1;
        }
    }
`;document.head.appendChild(Ve);
