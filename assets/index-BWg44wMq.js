var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return w(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function w(){return g?!0:!(e.unstable_now()-te<C)}function ne(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&w());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():ee=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,re()))),r},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case w:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,O=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,`passive`,{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),k=kn(Mn),Nn,Pn,Fn,In=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=kn(In),Rn=kn(h({},In,{dataTransfer:0})),zn=kn(h({},Mn,{relatedTarget:0})),Bn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=kn(h({},An,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=kn(h({},Mn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=kn(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),A=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Xn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=kn(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),j=kn(h({},An,{newState:0,oldState:0})),Qn=[9,13,27,32],M=yn&&`CompositionEvent`in window,$n=null;yn&&`documentMode`in document&&($n=document.documentMode);var er=yn&&`TextEvent`in window&&!$n,tr=yn&&(!M||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!M&&ir(e,t)?(e=Tn(),wn=Cn=Sn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Gt(Dt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(yn){var vr;if(yn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,fn(e)),_n(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=yn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Kt(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};yn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),Mt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=mi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=mi(13,n,t,a),e.elementType=te,e.lanes=o,e;case w:return e=mi(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Ti=[],Ei=0,Di=null,N=0,Oi=[],P=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ti[Ei++]=N,Ti[Ei++]=Di,Di=e,N=t}function Ni(e,t,n){Oi[P++]=Ai,Oi[P++]=ji,Oi[P++]=ki,ki=e;var r=Ai;e=ji;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-qe(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,N=Ti[--Ei],Ti[Ei]=null;for(;e===ki;)ki=Oi[--P],Oi[P]=null,ji=Oi[--P],Oi[P]=null,Ai=Oi[--P],Oi[P]=null}function Ii(e,t){Oi[P++]=Ai,Oi[P++]=ji,Oi[P++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,F=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Li=Li.return}}function Wi(e){if(e!==Li)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Li?cf(e.stateNode.nextSibling):null;return!0}function Gi(){F=Li=null,I=!1}function Ki(){var e=Ri;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=me(null),Yi=null,Xi=null;function Zi(e,t,n){D(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,he(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,L={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new sa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=T.S;T.S=function(e,t){eu=O(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=me(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?D(ba,ba.current):D(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:L._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case re:return t=Aa(t),f(e,t,n)}if(ue(t)||se(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,aa(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Aa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,aa(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Aa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,aa(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Aa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,aa(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var R=!1;function Ya(){if(R){var e=ha;if(e!==null)throw e}}function Xa(e,t,n,r){R=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(R=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=me(null),eo=me(0);function to(e,t){e=Wl,D(eo,e),D($a,t),Wl=e|t.baseLanes}function no(){D(eo,Wl),D($a,$a.current)}function ro(){Wl=eo.current,he($a),he(eo)}var io=me(null),ao=null;function oo(e){var t=e.alternate;D(fo,fo.current&1),D(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){D(fo,fo.current),D(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(D(fo,fo.current),D(io,e),ao===null&&(ao=e)):lo(e)}function lo(){D(fo,fo.current),D(io,io.current)}function uo(e){he(io),ao===e&&(ao=null),he(fo)}var fo=me(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){T.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&na(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return ia(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Go(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=z;if(I){if(F){b:{for(var i=F,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Or(n,t)?n:$a.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Or(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Fs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,de,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ia(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:ia,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ia,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(I){var n=ji,r=Ai;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ni(e)}function Ys(e){console.error(e)}function Xs(e){ni(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(I)return t=io.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&s&&Pi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),no(),lo(t)):(Sa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:L._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),no(),co(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ra(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Gi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(fo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?oo(t):lo(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=L._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=fo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(fo,o),ac(e,t,r,n),r=I?N:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&na(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),Zi(t,L,e.memoizedState.cache),Gi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(fo,fo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Zi(t,L,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,I&&t.flags&1048576&&Ni(t,N,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,L,r),r!==o.cache&&ea(t,[L],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),qi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Li=t,I=!0,Ri=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Li=t,zi=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Li=t,F=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Li=t,F=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(L),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Zi(t,L,a)):((e.lanes&n)!==0&&(Wa(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,L,r),r!==a.cache&&ea(t,[L],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,L,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(L),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=ge.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=ge.current,Wi(t))Hi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Qi(t.type),U(t),null;case 19:if(he(fo),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return D(fo,fo.current&1|2),I&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&O()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return U(t),null}else 2*O()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=O(),e.sibling=null,n=fo.current,D(fo,a?n&1|2:n&1),I&&Mi(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(L),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(L),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(fo),null;case 4:return xe(),null;case 10:return Qi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&he(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(L),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:Qi(L),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:he(fo);break;case 10:Qi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&he(ba);break;case 24:Qi(L)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=O()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ia(L),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(L).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||I){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-O(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-O():(a&4194048)===a?eu-O():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Xi=Yi=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function Cu(e,t){z=null,T.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,wi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(J&4194048)===J?ao===null:(J&62914560)===J||J&536870912?e===ao:!1}function Tu(){var e=T.H;return T.H=zs,e===null?zs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&io.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,oi()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=O()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,oi(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Xi=Yi=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,wi(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>O()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=li(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=O(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,O()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Le,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=A;break;case Kr:case qr:case Jr:l=Bn;break;case Qr:l=Xn;break;case`scroll`:case`scrollend`:l=k;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=j}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(M)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=O()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/`+e},x={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=b(t,n),t in x)return;x[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:y,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function te(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ae(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:oe(t)}return ce(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ne(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function re(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ae(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?se(t):t,state:n,key:t&&t.key||r||re(),mask:i}}function oe({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function se(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ce(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:ae(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:ae(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return le(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function le(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:oe(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ue(e,t,n=`/`){return T(e,t,n,!1)}function T(e,t,n,r,i){let a=De((typeof t==`string`?se(t):t).pathname||`/`,n);if(a==null)return null;let o=i??de(e),s=null,c=Ee(a);for(let e=0;s==null&&e<o.length;++e)s=Ce(o[e],c,r);return s}function E(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function de(e){let t=fe(e);return me(t),t}function fe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=O([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:xe(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pe(e.path))a(e,t,!0,n)}),t}function pe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Se(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var he=/^:[\w-]+$/,D=3,ge=2,_e=1,ve=10,ye=-2,be=e=>e===`*`;function xe(e,t){let n=e.split(`/`),r=n.length;return n.some(be)&&(r+=ye),t&&(r+=ge),n.filter(e=>!be(e)).reduce((e,t)=>e+(he.test(t)?D:t===``?_e:ve),r)}function Se(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:O([a,u.pathname]),pathnameBase:Le(O([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=O([a,u.pathnameBase]))}return o}function we(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Te(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Te(e,t=!1,n=!0){ne(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ee(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ne(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function De(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Oe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ke(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?se(e):e,a;return n?(n=Fe(n),a=n.startsWith(`/`)?Ae(n.substring(1),`/`):Ae(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function Ae(e,t){let n=Ie(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function je(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Me(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ne(e){let t=Me(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Pe(e,t,n,r=!1){let i;typeof e==`string`?i=se(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),je(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),je(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),je(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ke(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Fe=e=>e.replace(/\/\/+/g,`/`),O=e=>Fe(e.join(`/`)),Ie=e=>e.replace(/\/+$/,``),Le=e=>Ie(e).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function He(e){return O(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ue=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function We(e,t){let n=e;if(typeof n!=`string`||!Oe.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ue)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=De(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ne(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ge=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ge);var Ke=[`GET`,...Ge];new Set(Ke);var qe=_.createContext(null);qe.displayName=`DataRouter`;var Je=_.createContext(null);Je.displayName=`DataRouterState`;var Ye=_.createContext(!1);function Xe(){return _.useContext(Ye)}var Ze=_.createContext({isTransitioning:!1});Ze.displayName=`ViewTransition`;var Qe=_.createContext(new Map);Qe.displayName=`Fetchers`;var $e=_.createContext(null);$e.displayName=`Await`;var et=_.createContext(null);et.displayName=`Navigation`;var tt=_.createContext(null);tt.displayName=`Location`;var nt=_.createContext({outlet:null,matches:[],isDataRoute:!1});nt.displayName=`Route`;var rt=_.createContext(null);rt.displayName=`RouteError`;var it=`REACT_ROUTER_ERROR`,at=`REDIRECT`,ot=`ROUTE_ERROR_RESPONSE`;function st(e){if(e.startsWith(`${it}:${at}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ct(e){if(e.startsWith(`${it}:${ot}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Be(t.status,t.statusText,t.data)}catch{}}function lt(e,{relative:t}={}){w(ut(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(et),{hash:i,pathname:a,search:o}=_t(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:O([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ut(){return _.useContext(tt)!=null}function dt(){return w(ut(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(tt).location}var ft=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function pt(e){_.useContext(et).static||_.useLayoutEffect(e)}function mt(){let{isDataRoute:e}=_.useContext(nt);return e?It():ht()}function ht(){w(ut(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(qe),{basename:t,navigator:n}=_.useContext(et),{matches:r}=_.useContext(nt),{pathname:i}=dt(),a=JSON.stringify(Ne(r)),o=_.useRef(!1);return pt(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(ne(o.current,ft),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Pe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:O([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function gt(){let{matches:e}=_.useContext(nt);return e[e.length-1]?.params??{}}function _t(e,{relative:t}={}){let{matches:n}=_.useContext(nt),{pathname:r}=dt(),i=JSON.stringify(Ne(n));return _.useMemo(()=>Pe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function vt(e,t){return yt(e,t)}function yt(e,t,n){w(ut(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(et),{matches:i}=_.useContext(nt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Rt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=dt(),d;if(t){let e=typeof t==`string`?se(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ue(e,{pathname:p});ne(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ne(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Et(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:O([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:O([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(tt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function bt(){let e=Ft(),t=Ve(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var xt=_.createElement(bt,null),St=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ct(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(nt.Provider,{value:this.props.routeContext},_.createElement(rt.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(wt,{error:e},t):t}};St.contextType=Ye;var Ct=new WeakMap;function wt({children:e,error:t}){let{basename:n}=_.useContext(et);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=st(t.digest);if(e){let r=Ct.get(t);if(r)throw r;let i=We(e.location,n);if(Ue&&!Ct.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ct.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Tt({routeContext:e,match:t,children:n}){let r=_.useContext(qe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(nt.Provider,{value:e},n)}function Et(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:He(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||xt,o&&(s<0&&c===0?(Rt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Tt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(St,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Dt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ot(e){let t=_.useContext(qe);return w(t,Dt(e)),t}function kt(e){let t=_.useContext(Je);return w(t,Dt(e)),t}function At(e){let t=_.useContext(nt);return w(t,Dt(e)),t}function jt(e){let t=At(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Mt(){return jt(`useRouteId`)}function Nt(){return kt(`useNavigation`).navigation}function Pt(){let{matches:e,loaderData:t}=kt(`useMatches`);return _.useMemo(()=>e.map(e=>E(e,t)),[e,t])}function Ft(){let e=_.useContext(rt),t=kt(`useRouteError`),n=jt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function It(){let{router:e}=Ot(`useNavigate`),t=jt(`useNavigate`),n=_.useRef(!1);return pt(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{ne(n.current,ft),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Lt={};function Rt(e,t,n){!t&&!Lt[e]&&(Lt[e]=!0,ne(!1,n))}_.memo(zt);function zt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return yt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Bt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Vt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!ut(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=se(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=De(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ne(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(et.Provider,{value:c},_.createElement(tt.Provider,{children:t,value:h}))}function Ht({children:e,location:t}){return vt(Ut(e),t)}_.Component;function Ut(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Ut(e.props.children,i));return}w(e.type===Bt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ut(e.props.children,i)),n.push(a)}),n}var Wt=`get`,Gt=`application/x-www-form-urlencoded`;function Kt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function qt(e){return Kt(e)&&e.tagName.toLowerCase()===`button`}function Jt(e){return Kt(e)&&e.tagName.toLowerCase()===`form`}function Yt(e){return Kt(e)&&e.tagName.toLowerCase()===`input`}function Xt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zt(e,t){return e.button===0&&(!t||t===`_self`)&&!Xt(e)}var Qt=null;function $t(){if(Qt===null)try{new FormData(document.createElement(`form`),0),Qt=!1}catch{Qt=!0}return Qt}var en=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function tn(e){return e!=null&&!en.has(e)?(ne(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gt}"`),null):e}function nn(e,t){let n,r,i,a,o;if(Jt(e)){let o=e.getAttribute(`action`);r=o?De(o,t):null,n=e.getAttribute(`method`)||Wt,i=tn(e.getAttribute(`enctype`))||Gt,a=new FormData(e)}else if(qt(e)||Yt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?De(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Wt,i=tn(e.getAttribute(`formenctype`))||tn(o.getAttribute(`enctype`))||Gt,a=new FormData(o,e),!$t()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Kt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Wt,r=null,i=Gt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var rn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},an=/[&><\u2028\u2029]/g;function on(e){return e.replace(an,e=>rn[e])}function sn(e,t){if(e===!1||e==null)throw Error(t)}function cn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&De(i.pathname,t)===`/`?i.pathname=`${Ie(t)}/_root.${r}`:i.pathname=`${Ie(i.pathname)}.${r}`,i}async function ln(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function un(e){return e!=null&&typeof e.page==`string`}function dn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function fn(e,t,n){return _n((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ln(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(dn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function pn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function mn(e,t,{includeHydrateFallback:n}={}){return hn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hn(e){return[...new Set(e)]}function gn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _n(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!un(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(gn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function vn(){let e=_.useContext(qe);return sn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function yn(){let e=_.useContext(Je);return sn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var bn=_.createContext(void 0);bn.displayName=`FrameworkContext`;function xn(){let e=_.useContext(bn);return sn(e,`You must render this element inside a <HydratedRouter> element`),e}function Sn(e,t){let n=_.useContext(bn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Cn(s,p),onBlur:Cn(c,m),onMouseEnter:Cn(l,p),onMouseLeave:Cn(u,m),onTouchStart:Cn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Cn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wn({page:e,...t}){let n=Xe(),{router:r}=vn(),i=_.useMemo(()=>ue(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?_.createElement(En,{page:e,matches:i,...t}):_.createElement(Dn,{page:e,matches:i,...t}):null}function Tn(e){let{manifest:t,routeModules:n}=xn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return fn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function En({page:e,matches:t,...n}){let r=dt(),{future:i}=xn(),{basename:a}=vn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=cn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Dn({page:e,matches:t,...n}){let r=dt(),{future:i,manifest:a,routeModules:o}=xn(),{basename:s}=vn(),{loaderData:c,matches:l}=yn(),u=_.useMemo(()=>pn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>pn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=cn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>mn(d,a),[d,a]),m=Tn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function On(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{kn&&(window.__reactRouterVersion=`7.15.0`)}catch{}function An({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=te({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Vt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function jn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Vt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}jn.displayName=`unstable_HistoryRouter`;var Mn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(et),y=typeof l==`string`&&Mn.test(l),b=We(l,h);l=b.to;let x=lt(l,{relative:r}),ee=dt(),S=null;if(o){let e=Pe(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:O([h,e.pathname])),S=g.createHref(e)}let[C,te,w]=Sn(n,p),ne=zn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function re(t){e&&e(t),t.defaultPrevented||ne(t)}let ie=!(b.isExternal||i),ae=_.createElement(`a`,{...p,...w,href:(ie?S:void 0)||b.absoluteURL||x,onClick:ie?re:e,ref:On(m,te),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return C&&!y?_.createElement(_.Fragment,null,ae,_.createElement(wn,{page:x})):ae});k.displayName=`Link`;var Nn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=_t(a,{relative:c.relative}),d=dt(),f=_.useContext(Je),{navigator:p,basename:m}=_.useContext(et),h=f!=null&&Yn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=De(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let w=typeof i==`function`?i(S):i;return _.createElement(k,{...c,"aria-current":C,className:te,ref:l,style:w,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Nn.displayName=`NavLink`;var Pn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Wt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(et),g=Hn(),v=Un(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&Mn.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Pn.displayName=`Form`;function Fn({getKey:e,storageKey:t,...n}){let r=_.useContext(bn),{basename:i}=_.useContext(et),a=dt(),o=Pt();qn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Kn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${on(JSON.stringify(t||Wn))}, ${on(JSON.stringify(s))})`}})}Fn.displayName=`ScrollRestoration`;function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ln(e){let t=_.useContext(qe);return w(t,In(e)),t}function Rn(e){let t=_.useContext(Je);return w(t,In(e)),t}function zn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=mt(),d=dt(),f=_t(e,{relative:o});return _.useCallback(p=>{if(Zt(p,t)){p.preventDefault();let t=n===void 0?oe(d)===oe(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Bn=0,Vn=()=>`__${String(++Bn)}__`;function Hn(){let{router:e}=Ln(`useSubmit`),{basename:t}=_.useContext(et),n=Mt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=nn(e,t);a.navigate===!1?await r(a.fetcherKey||Vn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Un(e,{relative:t}={}){let{basename:n}=_.useContext(et),r=_.useContext(nt);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={..._t(e||`.`,{relative:t})},o=dt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:O([n,a.pathname])),oe(a)}var Wn=`react-router-scroll-positions`,Gn={};function Kn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:De(e.pathname,n)||e.pathname},t)),i??=e.key,i}function qn({getKey:e,storageKey:t}={}){let{router:n}=Ln(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Rn(`useScrollRestoration`),{basename:a}=_.useContext(et),o=dt(),s=Pt(),c=Nt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Jn(_.useCallback(()=>{if(c.state===`idle`){let t=Kn(o,s,a,e);Gn[t]=window.scrollY}try{sessionStorage.setItem(t||Wn,JSON.stringify(Gn))}catch(e){ne(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Wn);e&&(Gn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Gn,()=>window.scrollY,e?(t,n)=>Kn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ne(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Jn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Yn(e,{relative:t}={}){let n=_.useContext(Ze);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ln(`useViewTransitionState`),i=_t(e,{relative:t});if(!n.isTransitioning)return!1;let a=De(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=De(n.nextLocation.pathname,r)||n.nextLocation.pathname;return we(i.pathname,o)!=null||we(i.pathname,a)!=null}var A={title:`Sally's log`,subtitle:`by Sally`,description:`직관의 해부`,author:{name:`Sally`,initial:`M`,github:`https://github.com/minjae0804`,githubid:`minjae0804`,email:`minjae11662@gmail.com`},nav:[{label:`Home`,href:`/`},{label:`Posts`,href:`/posts`},{label:`Category`,href:`/categories`},{label:`Tags`,href:`/tags`},{label:`About`,href:`/about`}],sidebar:{latestPostCount:5,postsPerPage:5},footer:{poweredBy:`Vite + React`,poweredByUrl:`https://vitejs.dev`},rss:{url:`/rss.xml`}};function Xn({title:e,description:t}){(0,_.useEffect)(()=>{let n=e?`${e} | ${A.title}`:A.title;document.title=n;let r=document.querySelector(`meta[name="description"]`);r||(r=document.createElement(`meta`),r.setAttribute(`name`,`description`),document.head.appendChild(r)),r.setAttribute(`content`,t||A.description);let i=document.querySelector(`meta[property="og:title"]`);i||(i=document.createElement(`meta`),i.setAttribute(`property`,`og:title`),document.head.appendChild(i)),i.setAttribute(`content`,n);let a=document.querySelector(`meta[property="og:description"]`);a||(a=document.createElement(`meta`),a.setAttribute(`property`,`og:description`),document.head.appendChild(a)),a.setAttribute(`content`,t||A.description)},[e,t])}var Zn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=Zn()}))();function Qn(){return(0,j.jsxs)(`a`,{href:`/`,className:`flex items-baseline gap-2 shrink-0`,children:[(0,j.jsx)(`span`,{className:`text-xl font-semibold tracking-tight text-stone-900 dark:text-white transition-colors`,children:A.title}),(0,j.jsx)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500 hidden sm:block`,children:A.subtitle})]})}var M={nav:{openMenu:`메뉴 열기`,closeMenu:`메뉴 닫기`},sidebar:{search:`검색`,searchPlaceholder:`포스트 검색...`,category:`카테고리`,latestPost:`최근 포스트`,tag:`태그`,about:`소개`},post:{readMore:`더 읽기 →`,readingTime:`분 읽기`,empty:`아직 작성된 포스트가 없습니다.`,notFound:`포스트를 찾을 수 없습니다.`,backToList:`← 목록으로 돌아가기`},category:{postCount:`개의 포스트`,empty:`이 카테고리에 포스트가 없습니다.`},tag:{postCount:`개의 포스트`,empty:`이 태그의 포스트가 없습니다.`},pagination:{prev:`이전 페이지`,next:`다음 페이지`},progressBar:`페이지 읽기 진행도`,scrollToTop:`맨 위로 이동`,darkMode:{toLight:`라이트 모드로 전환`,toDark:`다크 모드로 전환`},footer:{allRightsReserved:`All rights reserved.`,poweredByPrefix:`Powered by`},notFound:{code:`404`,title:`페이지를 찾을 수 없습니다`,desc:`요청하신 페이지가 존재하지 않거나 이동되었습니다.`,backToHome:`← 홈으로 돌아가기`},breadcrumb:{home:`홈`,category:`카테고리`,tag:`태그`},search:{placeholder:`제목, 태그, 카테고리 검색...`,resultCount:`개의 결과`,empty:`검색 결과가 없습니다.`,emptyDesc:`다른 키워드로 검색해보세요.`,label:`검색`}};function $n(){let[e,t]=(0,_.useState)(!1),{pathname:n}=dt();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`nav`,{className:`hidden md:flex items-center gap-1`,"aria-label":`메인 네비게이션`,children:A.nav.map(({label:e,href:t})=>{let r=n===t;return(0,j.jsx)(k,{to:t,"aria-current":r?`page`:void 0,className:`px-3 py-1.5 rounded-md text-sm transition-colors
                ${r?`text-brown-600 dark:text-brown-300 font-medium bg-brown-50 dark:bg-brown-800`:`text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800`}`,children:e},t)})}),(0,j.jsx)(`button`,{onClick:()=>t(e=>!e),"aria-label":e?M.nav.closeMenu:M.nav.openMenu,"aria-expanded":e,className:`md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors`,children:e?(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-5 h-5`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18L18 6M6 6l12 12`})}):(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-5 h-5`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5`})})}),e&&(0,j.jsx)(`div`,{className:`absolute top-16 left-0 right-0 z-20 md:hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shadow-sm`,children:(0,j.jsx)(`nav`,{className:`max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1`,"aria-label":`모바일 네비게이션`,children:A.nav.map(({label:e,href:r})=>{let i=n===r;return(0,j.jsx)(k,{to:r,"aria-current":i?`page`:void 0,onClick:()=>t(!1),className:`px-3 py-2.5 rounded-md text-sm transition-colors
                    ${i?`text-brown-600 dark:text-brown-300 font-medium bg-brown-50 dark:bg-brown-800`:`text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800`}`,children:e},r)})})})]})}function er(){return(0,j.jsx)(`div`,{className:`h-48 sm:h-64 md:h-80 bg-brown-600 dark:bg-brown-900 flex items-end`,children:(0,j.jsxs)(`div`,{className:`max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8`,children:[(0,j.jsx)(`h1`,{className:`text-2xl sm:text-4xl font-semibold tracking-tight text-brown-50 dark:text-brown-100`,children:A.title}),(0,j.jsxs)(`p`,{className:`mt-1.5 text-sm sm:text-base text-brown-300 dark:text-brown-300 max-w-md`,children:[`\xA0`,A.description]})]})})}function tr(){let[e,t]=(0,_.useState)(()=>{if(typeof window>`u`)return!1;let e=localStorage.getItem(`theme`);return e?e===`dark`:window.matchMedia(`(prefers-color-scheme: dark)`).matches});return(0,_.useEffect)(()=>{let t=document.documentElement;e?(t.classList.add(`dark`),localStorage.setItem(`theme`,`dark`)):(t.classList.remove(`dark`),localStorage.setItem(`theme`,`light`))},[e]),(0,j.jsx)(`button`,{onClick:()=>t(e=>!e),"aria-label":e?M.darkMode.toLight:M.darkMode.toDark,className:`w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors shrink-0`,children:e?(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-5 h-5`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z`})}):(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-5 h-5`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z`})})})}function nr(){return(0,j.jsxs)(`header`,{children:[(0,j.jsx)(`div`,{className:`sticky top-0 z-10 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm transition-colors duration-300`,children:(0,j.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4`,children:[(0,j.jsx)(Qn,{}),(0,j.jsx)($n,{}),(0,j.jsx)(tr,{})]})}),(0,j.jsx)(er,{})]})}var rr=`---
title: "추상화와 인터페이스 설계에 대하여"
date: "2026-03-06"
category: "tech"
tags: ["abstract", "theory"]
uploader: "Sally"
excerpt: "추상화란 근본적으로 무엇이며, 이것은 어떻게 활용되는가?"
---
추상화(abstraction)는 컴퓨터에서 가장 근본에 있는 개념이다. 컴퓨터는 추상화로 이루어져 있다고 하더라도 과언이 아니며, 추상화를 빼고 컴퓨터를 논하는 것은 불가능에 가깝다. 그렇다면 추상화란 무엇인가?

추상화란 어떠한 개념에 대해 특정 기준에 따라 필요없는 세부사항을 절사하는 것을 의미한다. 세부사항을 절사하기 때문에 핵심사항만을 추출하는 것으로 해석할 수도 있다.

간단한 개념처럼 보인다면 정확히 본 것으로, 실제로도 간단한 개념이 맞다.
다만 추상화가 사용되는 것을 보면 이 간단한 개념이 얼마나 광범위하게, 그리고 복잡하게 사용되는지 체감할 수 있을 것이다.

먼저 추상화는 컴퓨터만을 위한 개념이 아니다. 애초에 인간의 인지 체계 자체부터 추상화에 기반한다. 사람은 세상을 감각으로 받아들인다. 이는 시각, 청각, 후각, 촉각 등이다. 이 감각 정보를 뇌로 전달하면 뇌는 해당 감각 정보에서 핵심을 추출(추상화)한다. 노란색이 약간 섞인 붉은 색, 윗부분이 약간 들어간 구형, 신선한 향, 그리고 단맛 등이 그 핵심이 될 수 있다. 뇌는 추출한 핵심을 저장된 정보들과 대조하고 일치하는 결과를 도출한다. 위의 경우에는 사과가 정답이다. 물론 사람마다 핵심 정보를 추출하는 기준이 다르므로 사과를 보고 다른 핵심을 추출하는 사람도 존재할 것이다.

이런 것 뿐 아니라 익명 커뮤니티에서도 추상화가 사용된다. 사람이 익명 커뮤니티에서 글 등을 통해 의견을 타인에게 제시하는 것 또한 추상화이다. 익명 커뮤니티 관점에서는 그 의견을 표출하는 주체를 정확히 알 수 없다. 그 주체는 의견을 제시하는 객체일 뿐이며, 커뮤니티에서는 특수한 경우가 아닌 한 객체의 본체가 커뮤니티 외부에서 무엇인지 알 수 없다.  익명 커뮤니티에서 의견을 제시하는 객체, 그리고 그 객체가 제시하는 의견 외의 정보는 필요 없는 세부사항이며, 또한 보호해야 하는 대상이므로 절사되기 때문이다. 여기에서 객체가 지닐 수 있는 정보는 해당 커뮤니티의 인터페이스에 따른다. 인터페이스는 객체를 식별할 수 있는 값(닉네임이나 ID 등), 비밀번호, 작성글 정보 등의 상태를 저장할 수 있도록 허용할 수 있다. 따라서 이것은 추상화라고 볼 수 있다. 익명 커뮤니티의 인터페이스를 따르는 한 그 존재는 인터페이스가 허용한 기능만을 수행하는 추상 객체가 된다.

컴퓨터에서 추상화는 보통 계층화(layering)와 같이 사용된다. 추상화는 특정한 지점에서 발생하는데, 계층화는 그 지점을 수직으로 여러 개 쌓고 각 추상화 지점으로 인해 발생한 핵심 개념들을 추상화 계층으로 분리한다. 이러한 계층화로 인해 각 추상화 계층은 독립 영역으로 격리된다. 각 계층은 제한적인 수단으로 소통하며, 소통 시에 주고받는 데이터 또한 추상화 기준에 따라 정제된다. 때문에 상위 계층은 하위 계층의 구현을 알 필요가 없다. 단지 무엇을 제공하는지만 알면 된다.

계층화의 대표적인 예로, 운영체제의 HAL(Hardware Abstraction Layer, 하드웨어 추상화 계층)이 있다. 운영체제는 하드웨어를 소프트웨어로 간주할 수 있게 하는 역할을 하는데, 이는 응용프로그램이 하드웨어를 쉽게 사용할 수 있게 하기 위함이다. 이를 위해 운영체제의 HAL은 CPU나 메인보드의 제조사가 어디가 되든 동일한 인터페이스를 제공하게 한다. 하드웨어의 파편화된 세부사항을 숨겨 상위 소프트웨어가 안정적인 환경에서 구동할 수 있도록 보장하는 것이다.

이러한 구조에서의 인터페이스 설계는 미래에 발생할 사건과 변화를 예측하는 행위와 같다. 특정 기능을 수행하는 인터페이스를 설계할 때, 개발자는 미래에 해당 인터페이스가 의존할 구현체가 무엇일지 정확히 알 수 없다. 그러나 개발자는 미래에도 인터페이스가 의존할 구현체의 본질은 바뀌지 않을 것임을 가정하고 인터페이스를 설계한다.

OOP의 다형성은 이러한 예측의 산물이다. 다형성의 핵심은 동일 인터페이스를 다형으로 구현하는 것이 아닌, 미래에 등장할 다형의 구현체를 동일 인터페이스로 운용할 수 있음에 있다. 때문에 인터페이스라는 추상 규격이 정교히 부합한다면 미래에 나올 대부분의 구현체를 의존할 수 있다. 

다만 인터페이스가 제대로 설계되지 않으면 당장은 괜찮을지 몰라도 미래에 설계상 예상치 못한 구현체의 추가로 인해 하위 계층의 구현 방식을 암시하거나 세부 상태를 노출하게 된다. 이 경우 상위 계층이 구현체가 담당해야 할 세부사항을 일부 위임하거나 상위 계층이 하위 계층에 의존하는 경우가 발생하며, 이는 명명백백한 구조적 취약점이 된다.

이러한 추상화 설계 실패의 대가는 구현 및 인터페이스 설계 비용 증가로 시작한다. 그리고 설계가 꼬인 추상화에서 구현 및 설계의 누적이란 복잡도(entropy)의 누적과 같다. 이는 해당 인터페이스를 의존하는 상위 인터페이스까지 재설계가 반드시 필요하게 되는, 즉 신규 구현 및 설계에 부과되는 비용이 시스템 재설계 비용과 동일해지는 지점으로 서서히 근접함을 의미한다.

이것은 막을 수 없다. **[최저수준이 아닌 모든 추상화는 어느 정도 불안정성을 지니기 때문이다.](/posts/joel-spolsky-leaky-abstractions)**

추상화가 필연적으로 불안정성을 지니는 이유는 상술했듯 추상화가 미래를 예측하는 것이기 때문이다. 컴퓨터에서 대부분의 알고리즘이나 로직 등은 최선의 효율을 지닐 수 없으며, 모든 알고리즘은 주어질 수 있는 모든 작업에 대해 완벽히 효율적이지 못하다. 주어질 수 있는 경우의 수는 무수히 많으며, 그것들을 모두 최선의 효율로 처리할 수는 없다.

최선을 구현하기 위해서는 미래에 주어질 모든 작업을 완벽히 예측하여야 한다. 즉 미래를 알아야 한다. 당연하지만 이것은 불가능하며, 때문에 모든 설계는 적절한 기준에 따라 주어질 수 있는 경우의 수를 최대한 필터링하여 줄인 후 남은 경우의 수에 한해 최대한 효율적으로 처리하는 것을 목표로 한다. 불가능한 최선 대신 가능한 차선을 택하는 것이다.

이러한 차선의 설계에서 사용되는 필터링은 본질적으로 미래에 들어올 데이터에 대한 규정이다. 개발자는 미래의 데이터도 지금과 같은 패턴일 것 혹은 미래의 사용자도 이 인터페이스의 범주 안에서 움직일 것이라는 가정을 바탕으로 세부사항을 절사한다. 그러나 현실의 시간은 정지해 있지 않으며, 환경의 변화는 설계자가 세운 가정을 끊임없이 위협한다.

결국 설계 당시에는 합리적이었던 차선의 추상화는 시간이 지남에 따라 현실과의 괴리를 발생시킨다. 이 괴리가 임계점을 넘어서는 순간 본래 감추어져 있어야 할 하위 계층의 복잡성이 상위 계층으로 누수되기 시작한다. 이러한 추상화 설계 실패의 대가는 상술했듯 구현 및 인터페이스 설계 비용 증가로 시작하게 된다.

이는 상술했듯 절대 막을 수 없으며, 때문에 경험이 많은 개발자는 추상화 누수에 항상 대비한다. 이 때 추상화 누수에 대한 대비란 저수준에 대한 존중을 의미한다. 우리가 컴퓨터공학의 입문 과정에서 이산수학과 전자회로를 배우는 이유 또한 이러한 저수준에 대한 존중에서 비롯된다. 당장 고수준의 언어를 다루는 개발자에게 운영체제나 자료구조 같은 과목은 그리 흥미가 동하지 않을지도 모른다. 하지만 이를 깊이 이해했을 때 비로소 우리는 프로그램의 겉모습이 아닌 그 이면의 동작을 이해할 수 있다. 성능 하락이 발생했을 때 구현의 스택 정리 로직이 미비함을 추측한다거나, 저수준 데이터 처리에서 발생하는 병목 지점을 유추하는 능력은 바로 이 저수준에 대한 앎에서 비롯된다. 간단히 말하자면, **아는 만큼 보인다.**

때문에 경험이 많은 개발자들은 저수준을 이해하기 위해 노력한다. Spring을 앎에도 HTTP를 공부하고 소켓을 공부하는 이유는 언젠가 추상화가 깨지는 필연적 순간에 대한 존중이다. 예상치 못한 에러가 발생했을 때 개발자가 유일하게 완벽히 신뢰할 수 있는 것은 항상 변화하며 복잡한 추상화가 아닌 변화하기 힘들고 단순한 원리들 뿐이다.

현대의 시스템은 사람이 모두 이해하기 힘들 정도로 복잡하지만, 추상화는 우리를 그 복잡성의 위에 설 수 있게 했다. 개발자 된 사람으로서 우리는 추상화를 딛고 위를 보되, 그것을 받치는 구현을 잊으면 안 된다. 그것은 본질적으로 개발자가 아닌 기술자로서 새겨야 할 마음가짐일 것이다.


> 흥미로운 현상이 있습니다. 경험 많은 시니어 엔지니어일수록 오히려 ‘하위 레벨’을 계속 학습합니다. 프레임워크를 쓰면서도 그 아래의 HTTP를 공부하고, ORM을 쓰면서도 SQL을 깊이 파고, AI 에이전트를 활용하면서도 프롬프트가 어떻게 처리되는지 이해하려 하죠.
> 
> 이것은 오래된 기술에 대한 향수가 아닙니다. 추상화가 깨지는 순간에 대한 존중입니다. 새벽 3시, 장애가 터지고, 추상화 레이어가 무너지고, 문서에 없는 에러가 발생했을 때 — 결국 시스템과 홀로 마주해야 하는 건 AI가 아닌 사람입니다.
> 
> 좋은 추상화란 그 아래를 몰라도 되게 해주는 것입니다. 하지만 좋은 엔지니어란 자신이 어떤 복잡성 위에 서 있는지 알면서, 그럼에도 신경 쓰지 않기로 선택하는 사람입니다. 이들은 추상화를 신뢰하되, 그것이 어떻게 실패할 수 있는지에 대한 모델을 머릿속에 유지합니다. 모든 세부사항을 아는 게 아니라, 기본적인 실패 모드에 대한 작동 모델을 갖고 있는 것입니다.
> 
> > 정세훈, “개발자는 AI에게 대체될 것인가”
> https://toss.tech/article/will-ai-replace-developers
> >`,ir=`---
title: "Joel Spolsky의 추상화 누수 법칙"
date: "2026-03-04"
category: "tech"
tags: ["abstract", "theory"]
uploader: "Sally"
excerpt: "Joel Spolsky - The Law of Leaky Abstractions의 번역"
---
https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/

인터넷 엔지니어링에는 우리가 매일 의존하는 핵심적인 마법이 하나 있다. 그것은 인터넷의 근간을 이루는 빌딩 블록 중 하나인 TCP 프로토콜에서 일어난다.

TCP는 데이터를 **신뢰성 있게** 전송하는 방법이다. 여기서 신뢰성이란, TCP를 통해 네트워크로 메시지를 보내면 그 메시지가 변질되거나 손상되지 않고 반드시 도착한다는 의미다. 우리는 웹 페이지를 불러오거나 이메일을 보낼 때 등 많은 곳에 TCP를 사용한다. TCP의 신뢰성 덕분에 모든 이메일은 단 한 글자의 오차도 없이 완벽한 상태로 도착한다. 그것이 설령 영양가 없는 스팸 메일일지라도 말이다.

그에 반해 IP라고 불리는 또 다른 데이터 전송 방식은 **비신뢰적**이다. 데이터가 도착한다는 보장도 없고, 도착하기 전에 엉망이 될 수도 있다. IP로 메시지 묶음을 보내면 절반만 도착해도 이상할 것이 없다. 도착 순서가 뒤바뀌기도 하고, 어떤 메시지는 엉뚱한 내용(귀여운 오랑우탄 사진이나 읽을 수 없는 쓰레기 데이터)으로 대체되어 버릴 수도 있다.

여기서 마법 같은 부분은 **TCP가 IP 위에서 구축되었다는 점**이다. 즉, TCP는 오직 비신뢰적인 도구만을 사용하여 데이터를 신뢰성 있게 보내야 하는 숙명을 가졌다.

이것이 왜 마법인지 설명하기 위해, 실생활에서 일어날 법한(비록 황당하긴 하지만) 논리적으로 대등한 시나리오를 하나 생각해보자.

브로드웨이의 배우들을 할리우드로 보내기 위해 자동차에 태워 대륙을 횡단시킨다고 가정해보자. 어떤 차들은 사고가 나서 배우들이 죽기도 한다. 어떤 배우들은 가는 길에 술에 취해 머리를 밀거나 코에 문신을 해서 할리우드에서 일하기 부적합한 외모가 되어버리기도 한다. 또한 배우마다 각기 다른 경로를 택하기 때문에 출발한 순서와 다르게 도착하는 일이 빈번하다.

이제 할리우드 익스프레스라는 새로운 서비스를 상상해보자. 이 서비스는 배우들이 반드시 도착하고 순서대로 도착하며 완벽한 상태로 도착할 것을 보장한다. 마법 같은 점은, 이 서비스 역시 배우들을 차에 태워 대륙 횡단을 시키는 비신뢰적인 방법 외에는 다른 수단이 없다는 것이다.

할리우드 익스프레스는 각 배우가 완벽한 상태로 도착했는지 확인하고, 그렇지 않다면 본사에 전화해 그 배우의 일란성 쌍둥이를 대신 보내달라고 요청하는 방식으로 작동한다. 배우들이 잘못된 순서로 도착하면 순서를 재조합한다. 만약 네바다주 고속도로에 UFO가 추락해 길이 막히면, 그 길로 가던 배우들을 애리조나로 우회시키고 캘리조니아의 영화 감독들에게는 아무 말도 하지 않는다. 감독들의 눈에는 그저 배우들이 평소보다 조금 늦게 도착하는 것처럼 보일 뿐이며, UFO 추락 소식은 전혀 듣지 못한다.

이것이 대략적인 TCP의 마법이다. 컴퓨터 과학자들은 이를 **추상화(Abstraction)**라고 부른다. 내부에서 벌어지는 훨씬 더 복잡한 일을 단순화한 것이다. 사실 컴퓨터 프로그래밍의 상당 부분은 추상화를 구축하는 일로 이루어진다. 문자열 라이브러리란 무엇인가? 그것은 컴퓨터가 숫자를 다루는 것만큼이나 쉽게 문자열을 조작할 수 있는 것처럼 '가장'하는 방법이다. 파일 시스템은 또 어떠한가? 하드 드라이브가 사실은 특정 위치에 비트를 저장하는 회전하는 자기 플래터 뭉치가 아니라, 폴더 안에 폴더가 있고 그 안에 바이트 문자열로 이루어진 파일들이 들어있는 계층적 시스템인 것처럼 '가장'하는 방법일 뿐이다.

다시 TCP 이야기로 돌아가 보자. 앞서 단순화를 위해 약간의 거짓말을 했는데, 아마 이 때문에 화가 난 분들도 있을 것이다. 나는 TCP가 메시지 도착을 보장한다고 했다. 하지만 사실은 그렇지 않다. 만약 키우는 뱀이 컴퓨터 네트워크 케이블을 씹어버려 어떤 IP 패킷도 통과할 수 없다면, TCP는 아무것도 할 수 없고 메시지는 도착하지 않는다. 만약 당신이 사내 시스템 관리자에게 무례하게 굴어서 보복으로 과부하된 허브에 연결되었다면, 일부 IP 패킷만 통과하게 될 것이다. 이때 TCP는 작동은 하겠지만 모든 것이 매우 느려진다.

이것이 바로 내가 말하는 **누수된 추상화(Leaky Abstraction)**다. TCP는 기저의 비신뢰적인 네트워크를 완벽하게 추상화하려고 시도하지만, 때때로 네트워크의 본질이 추상화의 틈새로 흘러나온다. 그리고 우리는 추상화가 완전히 막아주지 못하는 문제들을 직접 느끼게 된다. 이것은 내가 명명한 추상화 누수 법칙의 한 사례일 뿐이다.

**모든 비사소한(non-trivial) 추상화는 어느 정도 누수되기 마련이다.**

추상화는 실패한다. 때로는 조금, 때로는 아주 많이. 누수가 발생하고 문제가 생긴다. 추상화가 존재하는 모든 곳에서 이런 일이 일어난다. 몇 가지 예를 들어보겠다.

- **메모리 관리:** 거대한 2차원 배열을 순회할 때, 가로로 하느냐 세로로 하느냐에 따라 성능이 극단적으로 달라질 수 있다. 이는 '나무의 결'과 같은 메모리 구조 때문이다. 한 방향은 다른 방향보다 훨씬 많은 페이지 폴트(page fault)를 일으키며, 페이지 폴트는 매우 느리다. 어셈블리 프로그래머조차 거대하고 평평한 주소 공간을 가졌다고 가정할 수 있어야 하지만, 가상 메모리라는 추상화는 페이지 폴트가 발생할 때 누수된다. 어떤 메모리 접근은 다른 접근보다 훨씬 많은 시간을 소모하게 된다.
- **SQL:** SQL 언어는 데이터베이스 쿼리에 필요한 절차적 단계를 추상화하여, 사용자가 원하는 결과만 정의하면 데이터베이스가 절차를 알아서 결정하도록 설계되었다. 그러나 어떤 경우에는 논리적으로 동일한 쿼리임에도 특정 방식이 수천 배 더 느리기도 한다. 어떤 SQL 서버는 \`where a=b and b=c\`라고만 쓸 때보다 \`where a=b and b=c and a=c\`라고 명시할 때 훨씬 빠르다. 원래는 절차에 신경 쓸 필요 없이 명세만 하면 되어야 한다. 하지만 추상화가 누수되면 실행 계획 분석기(query plan analyzer)를 꺼내 무엇이 잘못되었는지 공부하고 성능 개선 방법을 찾아야 한다.
- **NFS/SMB:** 네트워크 파일 시스템은 원격 시스템의 파일을 로컬 파일처럼 다루게 해주지만, 연결이 느려지거나 끊기면 더 이상 로컬 파일처럼 작동하지 않는다. "원격 파일은 로컬 파일과 같다"는 추상화가 누수되는 것이다. 유닉스 관리자들에게 구체적인 예가 있다. 사용자 홈 디렉토리를 NFS로 마운트하고(추상화 1), 사용자가 이메일 포워딩을 위해 \`.forward\` 파일을 만든다면(추상화 2), 이메일이 도착할 때 NFS 서버가 다운되어 있으면 \`.forward\` 파일을 찾지 못해 포워딩이 실패한다. 추상화의 누수가 실제 메일 분실로 이어지는 것이다.
- **C++ 문자열:** C++ 문자열 클래스는 문자열을 기본 데이터 타입처럼 다룰 수 있게 해주려 한다. 문자열 처리가 어렵다는 사실을 숨기고 정수처럼 쉽게 연산하게 하려 한다. 대부분의 클래스는 \`+\` 연산자를 오버로딩하여 문자열을 합칠 수 있게 한다. 하지만 그 어떤 클래스도 \`"foo" + "bar"\`는 허용하지 못한다. C++에서 문자열 리터럴은 항상 \`char*\`이지 문자열 객체가 아니기 때문이다. 언어가 해결해 주지 못하는 누수가 발생한 것이다. (재밌게도 C++의 진화 역사는 이 문자열 추상화의 누수를 막으려는 시도의 역사라고 볼 수 있다.)

비가 올 때 평소처럼 빨리 달릴 수 없는 것도 마찬가지다. 자동차에는 와이퍼, 헤드라이트, 지붕, 히터가 있어 비라는 날씨를 신경 쓰지 않게 해주지만(추상화), 수막현상이나 시야 확보 문제는 여전히 남는다. 날씨는 결코 완벽하게 추상화될 수 없기 때문이다.

이 법칙이 문제가 되는 이유는 추상화가 원래 의도만큼 우리 삶을 단순하게 만들어주지 못하기 때문이다. 누군가에게 C++ 프로그래밍을 가르칠 때, \`char*\`나 포인터 산술을 가르칠 필요 없이 바로 STL 문자열로 넘어갈 수 있다면 참 좋을 것이다. 하지만 언젠가 그들은 \`"foo" + "bar"\`를 입력할 것이고, 기괴한 일이 벌어질 것이다. 그러면 결국 멈춰서 \`char*\`에 대해 가르쳐야만 한다.

ASP.NET 프로그래밍도 마찬가지다. 버튼을 클릭하면 서버에서 코드가 실행된다는 것만 가르치면 좋겠지만, HTML에는 하이퍼링크로 폼을 제출하는 기능이 없기에 ASP.NET은 자바스크립트를 생성해 이를 해결한다. 만약 사용자가 자바스크립트를 차단하면 애플리케이션은 작동하지 않는다. 프로그래머가 추상화된 이면을 모른다면 무엇이 잘못되었는지 알 도리가 없다.

추상화 누수의 법칙은 새로운 마법 같은 도구가 나올 때마다 "수동으로 하는 법을 먼저 배우고 도구를 써라"라는 말이 나오는 이유를 설명해준다. 추상화 도구는 작업을 하는 시간을 줄여줄 수는 있어도, **그 원리를 배우는 시간은 줄여주지 못한다.**

역설적이게도 더 높은 수준의 프로그래밍 도구와 더 좋은 추상화가 나옴에도 불구하고, 숙련된 프로그래머가 되는 길은 점점 더 어려워지고 있다. 과거에는 K&R의 얇은 C 언어 책 한 권이면 충분했다. 하지만 오늘날 CityDesk 같은 프로그램을 만들려면 VB, COM, ATL, C++, Regular Expressions, DOM, HTML, CSS, XML 등을 모두 알아야 한다. 이 모든 고수준 도구들에도 불구하고 여전히 K&R 시절의 지식이 없으면 문제가 터졌을 때 해결할 수 없다.

추상화는 우리가 10~15년 전에는 상상도 못 했던 복잡한 작업(GUI, 네트워크 프로그래밍 등)을 가능하게 해주었다. 하지만 추상화가 누수되는 어느 날, 문제를 해결하는 데 2주가 걸릴 수도 있다. 단순히 VB 프로그래머를 고용하는 것만으로는 부족한 이유가 여기에 있다. 추상화가 누수되어 늪에 빠질 때마다 그들은 꼼짝달싹 못 할 것이기 때문이다.

추상화의 누수 법칙은 우리를 끊임없이 끌어내리고 있다.`,ar=`# Sally

About: Sally’s Law
Email: kums200@gmail.com
Membership Type: Workspace owner
Person: Sally`,or=`# .

isEnable?: No`,sr=`# Joel Spolsky의 추상화 누수 법칙

isEnable?: Yes
개요:  Joel Spolsky - The Law of Leaky Abstractions의 번역
작성일시: 2026년 3월 4일   (GMT+9)
태그: 기술/개념

[https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)

인터넷 엔지니어링에는 우리가 매일 의존하는 핵심적인 마법이 하나 있다. 그것은 인터넷의 근간을 이루는 빌딩 블록 중 하나인 TCP 프로토콜에서 일어난다.

TCP는 데이터를 **신뢰성 있게** 전송하는 방법이다. 여기서 신뢰성이란, TCP를 통해 네트워크로 메시지를 보내면 그 메시지가 변질되거나 손상되지 않고 반드시 도착한다는 의미다. 우리는 웹 페이지를 불러오거나 이메일을 보낼 때 등 많은 곳에 TCP를 사용한다. TCP의 신뢰성 덕분에 모든 이메일은 단 한 글자의 오차도 없이 완벽한 상태로 도착한다. 그것이 설령 영양가 없는 스팸 메일일지라도 말이다.

그에 반해 IP라고 불리는 또 다른 데이터 전송 방식은 **비신뢰적**이다. 데이터가 도착한다는 보장도 없고, 도착하기 전에 엉망이 될 수도 있다. IP로 메시지 묶음을 보내면 절반만 도착해도 이상할 것이 없다. 도착 순서가 뒤바뀌기도 하고, 어떤 메시지는 엉뚱한 내용(귀여운 오랑우탄 사진이나 읽을 수 없는 쓰레기 데이터)으로 대체되어 버릴 수도 있다.

여기서 마법 같은 부분은 **TCP가 IP 위에서 구축되었다는 점**이다. 즉, TCP는 오직 비신뢰적인 도구만을 사용하여 데이터를 신뢰성 있게 보내야 하는 숙명을 가졌다.

이것이 왜 마법인지 설명하기 위해, 실생활에서 일어날 법한(비록 황당하긴 하지만) 논리적으로 대등한 시나리오를 하나 생각해보자.

브로드웨이의 배우들을 할리우드로 보내기 위해 자동차에 태워 대륙을 횡단시킨다고 가정해보자. 어떤 차들은 사고가 나서 배우들이 죽기도 한다. 어떤 배우들은 가는 길에 술에 취해 머리를 밀거나 코에 문신을 해서 할리우드에서 일하기 부적합한 외모가 되어버리기도 한다. 또한 배우마다 각기 다른 경로를 택하기 때문에 출발한 순서와 다르게 도착하는 일이 빈번하다.

이제 할리우드 익스프레스라는 새로운 서비스를 상상해보자. 이 서비스는 배우들이 반드시 도착하고 순서대로 도착하며 완벽한 상태로 도착할 것을 보장한다. 마법 같은 점은, 이 서비스 역시 배우들을 차에 태워 대륙 횡단을 시키는 비신뢰적인 방법 외에는 다른 수단이 없다는 것이다.

할리우드 익스프레스는 각 배우가 완벽한 상태로 도착했는지 확인하고, 그렇지 않다면 본사에 전화해 그 배우의 일란성 쌍둥이를 대신 보내달라고 요청하는 방식으로 작동한다. 배우들이 잘못된 순서로 도착하면 순서를 재조합한다. 만약 네바다주 고속도로에 UFO가 추락해 길이 막히면, 그 길로 가던 배우들을 애리조나로 우회시키고 캘리조니아의 영화 감독들에게는 아무 말도 하지 않는다. 감독들의 눈에는 그저 배우들이 평소보다 조금 늦게 도착하는 것처럼 보일 뿐이며, UFO 추락 소식은 전혀 듣지 못한다.

이것이 대략적인 TCP의 마법이다. 컴퓨터 과학자들은 이를 **추상화(Abstraction)**라고 부른다. 내부에서 벌어지는 훨씬 더 복잡한 일을 단순화한 것이다. 사실 컴퓨터 프로그래밍의 상당 부분은 추상화를 구축하는 일로 이루어진다. 문자열 라이브러리란 무엇인가? 그것은 컴퓨터가 숫자를 다루는 것만큼이나 쉽게 문자열을 조작할 수 있는 것처럼 '가장'하는 방법이다. 파일 시스템은 또 어떠한가? 하드 드라이브가 사실은 특정 위치에 비트를 저장하는 회전하는 자기 플래터 뭉치가 아니라, 폴더 안에 폴더가 있고 그 안에 바이트 문자열로 이루어진 파일들이 들어있는 계층적 시스템인 것처럼 '가장'하는 방법일 뿐이다.

다시 TCP 이야기로 돌아가 보자. 앞서 단순화를 위해 약간의 거짓말을 했는데, 아마 이 때문에 화가 난 분들도 있을 것이다. 나는 TCP가 메시지 도착을 보장한다고 했다. 하지만 사실은 그렇지 않다. 만약 키우는 뱀이 컴퓨터 네트워크 케이블을 씹어버려 어떤 IP 패킷도 통과할 수 없다면, TCP는 아무것도 할 수 없고 메시지는 도착하지 않는다. 만약 당신이 사내 시스템 관리자에게 무례하게 굴어서 보복으로 과부하된 허브에 연결되었다면, 일부 IP 패킷만 통과하게 될 것이다. 이때 TCP는 작동은 하겠지만 모든 것이 매우 느려진다.

이것이 바로 내가 말하는 **누수된 추상화(Leaky Abstraction)**다. TCP는 기저의 비신뢰적인 네트워크를 완벽하게 추상화하려고 시도하지만, 때때로 네트워크의 본질이 추상화의 틈새로 흘러나온다. 그리고 우리는 추상화가 완전히 막아주지 못하는 문제들을 직접 느끼게 된다. 이것은 내가 명명한 추상화 누수 법칙의 한 사례일 뿐이다.

<aside>
❗

**모든 비사소한(non-trivial) 추상화는 어느 정도 누수되기 마련이다.**

</aside>

추상화는 실패한다. 때로는 조금, 때로는 아주 많이. 누수가 발생하고 문제가 생긴다. 추상화가 존재하는 모든 곳에서 이런 일이 일어난다. 몇 가지 예를 들어보겠다.

- **메모리 관리:** 거대한 2차원 배열을 순회할 때, 가로로 하느냐 세로로 하느냐에 따라 성능이 극단적으로 달라질 수 있다. 이는 '나무의 결'과 같은 메모리 구조 때문이다. 한 방향은 다른 방향보다 훨씬 많은 페이지 폴트(page fault)를 일으키며, 페이지 폴트는 매우 느리다. 어셈블리 프로그래머조차 거대하고 평평한 주소 공간을 가졌다고 가정할 수 있어야 하지만, 가상 메모리라는 추상화는 페이지 폴트가 발생할 때 누수된다. 어떤 메모리 접근은 다른 접근보다 훨씬 많은 시간을 소모하게 된다.
- **SQL:** SQL 언어는 데이터베이스 쿼리에 필요한 절차적 단계를 추상화하여, 사용자가 원하는 결과만 정의하면 데이터베이스가 절차를 알아서 결정하도록 설계되었다. 그러나 어떤 경우에는 논리적으로 동일한 쿼리임에도 특정 방식이 수천 배 더 느리기도 한다. 어떤 SQL 서버는 \`where a=b and b=c\`라고만 쓸 때보다 \`where a=b and b=c and a=c\`라고 명시할 때 훨씬 빠르다. 원래는 절차에 신경 쓸 필요 없이 명세만 하면 되어야 한다. 하지만 추상화가 누수되면 실행 계획 분석기(query plan analyzer)를 꺼내 무엇이 잘못되었는지 공부하고 성능 개선 방법을 찾아야 한다.
- **NFS/SMB:** 네트워크 파일 시스템은 원격 시스템의 파일을 로컬 파일처럼 다루게 해주지만, 연결이 느려지거나 끊기면 더 이상 로컬 파일처럼 작동하지 않는다. "원격 파일은 로컬 파일과 같다"는 추상화가 누수되는 것이다. 유닉스 관리자들에게 구체적인 예가 있다. 사용자 홈 디렉토리를 NFS로 마운트하고(추상화 1), 사용자가 이메일 포워딩을 위해 \`.forward\` 파일을 만든다면(추상화 2), 이메일이 도착할 때 NFS 서버가 다운되어 있으면 \`.forward\` 파일을 찾지 못해 포워딩이 실패한다. 추상화의 누수가 실제 메일 분실로 이어지는 것이다.
- **C++ 문자열:** C++ 문자열 클래스는 문자열을 기본 데이터 타입처럼 다룰 수 있게 해주려 한다. 문자열 처리가 어렵다는 사실을 숨기고 정수처럼 쉽게 연산하게 하려 한다. 대부분의 클래스는 \`+\` 연산자를 오버로딩하여 문자열을 합칠 수 있게 한다. 하지만 그 어떤 클래스도 \`"foo" + "bar"\`는 허용하지 못한다. C++에서 문자열 리터럴은 항상 \`char*\`이지 문자열 객체가 아니기 때문이다. 언어가 해결해 주지 못하는 누수가 발생한 것이다. (재밌게도 C++의 진화 역사는 이 문자열 추상화의 누수를 막으려는 시도의 역사라고 볼 수 있다.)

비가 올 때 평소처럼 빨리 달릴 수 없는 것도 마찬가지다. 자동차에는 와이퍼, 헤드라이트, 지붕, 히터가 있어 비라는 날씨를 신경 쓰지 않게 해주지만(추상화), 수막현상이나 시야 확보 문제는 여전히 남는다. 날씨는 결코 완벽하게 추상화될 수 없기 때문이다.

이 법칙이 문제가 되는 이유는 추상화가 원래 의도만큼 우리 삶을 단순하게 만들어주지 못하기 때문이다. 누군가에게 C++ 프로그래밍을 가르칠 때, \`char*\`나 포인터 산술을 가르칠 필요 없이 바로 STL 문자열로 넘어갈 수 있다면 참 좋을 것이다. 하지만 언젠가 그들은 \`"foo" + "bar"\`를 입력할 것이고, 기괴한 일이 벌어질 것이다. 그러면 결국 멈춰서 \`char*\`에 대해 가르쳐야만 한다.

ASP.NET 프로그래밍도 마찬가지다. 버튼을 클릭하면 서버에서 코드가 실행된다는 것만 가르치면 좋겠지만, HTML에는 하이퍼링크로 폼을 제출하는 기능이 없기에 ASP.NET은 자바스크립트를 생성해 이를 해결한다. 만약 사용자가 자바스크립트를 차단하면 애플리케이션은 작동하지 않는다. 프로그래머가 추상화된 이면을 모른다면 무엇이 잘못되었는지 알 도리가 없다.

추상화 누수의 법칙은 새로운 마법 같은 도구가 나올 때마다 "수동으로 하는 법을 먼저 배우고 도구를 써라"라는 말이 나오는 이유를 설명해준다. 추상화 도구는 작업을 하는 시간을 줄여줄 수는 있어도, **그 원리를 배우는 시간은 줄여주지 못한다.**

역설적이게도 더 높은 수준의 프로그래밍 도구와 더 좋은 추상화가 나옴에도 불구하고, 숙련된 프로그래머가 되는 길은 점점 더 어려워지고 있다. 과거에는 K&R의 얇은 C 언어 책 한 권이면 충분했다. 하지만 오늘날 CityDesk 같은 프로그램을 만들려면 VB, COM, ATL, C++, Regular Expressions, DOM, HTML, CSS, XML 등을 모두 알아야 한다. 이 모든 고수준 도구들에도 불구하고 여전히 K&R 시절의 지식이 없으면 문제가 터졌을 때 해결할 수 없다.

추상화는 우리가 10~15년 전에는 상상도 못 했던 복잡한 작업(GUI, 네트워크 프로그래밍 등)을 가능하게 해주었다. 하지만 추상화가 누수되는 어느 날, 문제를 해결하는 데 2주가 걸릴 수도 있다. 단순히 VB 프로그래머를 고용하는 것만으로는 부족한 이유가 여기에 있다. 추상화가 누수되어 늪에 빠질 때마다 그들은 꼼짝달싹 못 할 것이기 때문이다.

추상화의 누수 법칙은 우리를 끊임없이 끌어내리고 있다.`,cr=`# 기술은 어떻게 우리의 직관을 해부하는가

isEnable?: No
개요: 기술의 본질은 인지의 해체와 같다.
작성일시: 2026년 4월 8일
태그: 사유

기술의 발전이란 단순한 도구의 개선이 아닌, 인류의 지식과 과학적 원리를 기반으로 문제를 해결해가는 지속적이며 누적적인 과정을 의미한다.  자연의 현상과 물질의 신비를 파헤치는 과정이며, 자연에 이미 주어져 있는 다양한 것을 인간이 활용하는 법을 익히는 과정이다. 미지의 영역이었던 질병을 정복하고, 우주와 생명의 원리를 파악하며, 더 나아가 생활에 간편함과 풍요로움을 가져오는 것들이 그렇다. 하지만 본질적인 관점에서 들여다본다면 기술이 파헤치는 것은 자연이 아니다. 기술이 파헤치는 것은 사람의 인지 그 자체이다.

자연은 0과 1로 표현되는 컴퓨터의 비트보다 훨씬 정밀하며 복잡한 날것의 정보로서만 존재한다. 그러나 사람은 그러한 방대한 정보를 모두 처리할 수 있을 정도로 성능이 좋지 못하다. 때문에 사람은 효율적으로 살아가기 위해 복잡한 자연에서 필요한 정보만을 추출한다. 예를 들어, 사람이 길가의 나무를 볼 때 사람은 이러한 광경에서 나무의 위치, 나무의 형상, 또는 나무에 열매가 달렸는지에 대한 여부, 나무에서 나는 냄새 등을 일차적으로 정보로 추출한다. 이 때 추출하는 정보의 종류는 사람의 경험에 기반하는데, 만약 그 사람이 나무에 대해 박식하며 식물에 대한 조예가 있을 경우, 또는 나무가 관찰자의 경험한 나무의 형상과 비교하여 매우 특이한 경우 다른 정보가 추출될 수 있다. 이 일차적으로 추출된 정보는 사람의 경험에 기반하여 다른 정보로 변환된다. 예를 들어 나무의 형상을 보면 이 나무가 자작나무임을 추측할 수 있으며, 잎의 형태와 열매, 나무의 크기를 보아 나무가 주목임을, 그리고 열매의 색과 맛을 통해 열매의 상태-열린 지 얼마 안 되었는지, 어쩌면 썩었는지-를 추측할 수 있다. 어쩌면 이러한 정보를 통해 관찰자가 이 나무를 처음 보았음을 알아낼 수도 있다. 이러한 일차적 정보 처리의 구현을 **직관**이라고 한다.

이러한 직관을 이루는 것은 근본적으로 경험이다. 어떤 나무의 열매를 먹고 배가 매우 아팠던 경험이 있다면, 실제로 배탈의 원인이 그 열매였건 아니건 그 사람은 그 열매는 사람이 먹기에 좋지 않았음을 추측하게 될 것이다. 더 나아가 그 열매의 특징을 기억하게 되고, 앞으로는 그런 특징을 지니는 열매를 먹지 않으려고 할 것이다.`,lr=`# 이전 블로그

isEnable?: No
개요: 이전 블로그의 URL

[https://velog.io/@sally_law/posts](https://velog.io/@sally_law/posts)`,ur=`# 직관의 이해란

isEnable?: No
개요: 직관이란 경험의 추상화이며, 직관의 이해란 그 추상화의 해부이다.
작성일시: 2026년 3월 19일   (GMT+9)
태그: 사유`,dr=`# 추상화와 인터페이스 설계에 대하여

isEnable?: Yes
개요: 추상화란 근본적으로 무엇이며, 이것은 어떻게 활용되는가?
작성일시: 2026년 3월 5일   (GMT+9)
태그: 기술/개념

추상화(abstraction)는 컴퓨터에서 가장 근본에 있는 개념이다. 
컴퓨터는 추상화로 이루어져 있다고 하더라도 과언이 아니며, 추상화를 빼고 컴퓨터를 논하는 것은 불가능에 가깝다.
그렇다면 추상화란 무엇인가?

추상화란 어떠한 개념에 대해 특정 기준에 따라 필요없는 세부사항을 절사하는 것을 의미한다.
세부사항을 절사하기 때문에 핵심사항만을 추출하는 것으로 해석할 수도 있다.

간단한 개념처럼 보인다면 정확히 본 것으로, 실제로도 간단한 개념이 맞다.
다만 추상화가 사용되는 것을 보면 이 간단한 개념이 얼마나 광범위하게, 그리고 복잡하게 사용되는지 체감할 수 있을 것이다.

먼저 추상화는 컴퓨터만을 위한 개념이 아니다. 애초에 인간의 인지 체계 자체부터 추상화에 기반한다.

사람은 세상을 감각으로 받아들인다. 이는 시각, 청각, 후각, 촉각 등이다. 
이 감각 정보를 뇌로 전달하면 뇌는 해당 감각 정보에서 핵심을 추출(추상화)한다.
노란색이 약간 섞인 붉은 색, 윗부분이 약간 들어간 구형, 신선한 향, 그리고 단맛 등이 그 핵심이 될 수 있다.

뇌는 추출한 핵심을 저장된 정보들과 대조하고 일치하는 결과를 도출한다. 위의 경우에는 사과가 정답이다. 
물론 사람마다 핵심 정보를 추출하는 기준이 다르므로 사과를 보고 다른 핵심을 추출하는 사람도 존재할 것이다.

이런 것 뿐 아니라 익명 커뮤니티에서도 추상화가 사용된다.
사람이 익명 커뮤니티에서 글 등을 통해 의견을 타인에게 제시하는 것 또한 추상화이다. 

익명 커뮤니티 관점에서는 그 의견을 표출하는 주체를 정확히 알 수 없다.
그 주체는 의견을 제시하는 객체일 뿐이며, 커뮤니티에서는 특수한 경우가 아닌 한 객체의 본체가 커뮤니티 외부에서 무엇인지 알 수 없다. 
익명 커뮤니티에서 의견을 제시하는 객체, 그리고 그 객체가 제시하는 의견 외의 정보는 필요 없는 세부사항이며, 또한 보호해야 하는 대상이므로 절사되기 때문이다.

여기에서 객체가 지닐 수 있는 정보는 해당 커뮤니티의 인터페이스에 따른다.
인터페이스는 객체를 식별할 수 있는 값(닉네임이나 ID 등), 비밀번호, 작성글 정보 등의 상태를 저장할 수 있도록 허용할 수 있다.

따라서 이것은 추상화라고 볼 수 있다.
익명 커뮤니티의 인터페이스를 따르는 한 그 존재는 인터페이스가 허용한 기능만을 수행하는 추상 객체가 된다.

컴퓨터에서 추상화는 보통 계층화(layering)와 같이 사용된다. 
추상화는 특정한 지점에서 발생하는데, 계층화는 그 지점을 수직으로 여러 개 쌓는다.
각 추상화 지점으로 인해 발생한 핵심 개념들은 추상화 계층이 된다.

계층화는 각 추상화 계층을 독립 영역으로 격리한다.
각 계층은 제한적인 수단으로 소통하며, 소통 시에 주고받는 데이터 또한 추상화 기준에 따라 정제된다.

상위 계층은 하위 계층의 구현을 알 필요가 없다. 단지 무엇을 제공하는지만 알면 된다.

계층화의 대표적인 예로, 운영체제의 HAL(Hardware Abstraction Layer, 하드웨어 추상화 계층)이 있다.
운영체제는 하드웨어를 소프트웨어로 간주할 수 있게 하는 역할을 하는데, 이는 응용프로그램이 하드웨어를 쉽게 사용할 수 있게 하기 위함이다.

이를 위해 운영체제의 HAL은 CPU나 메인보드의 제조사가 어디가 되든 동일한 인터페이스를 제공하게 한다. 하드웨어의 파편화된 세부사항을 숨겨 상위 소프트웨어가 안정적인 환경에서 구동할 수 있도록 보장하는 것이다.

이러한 구조에서의 인터페이스 설계는 미래에 발생할 사건과 변화를 예측하는 행위와 같다.
특정 기능을 수행하는 인터페이스를 설계할 때, 개발자는 미래에 해당 인터페이스가 의존할 구현체가 무엇일지 정확히 알 수 없다.
그러나 개발자는 미래에도 인터페이스가 의존할 구현체의 본질은 바뀌지 않을 것임을 가정하고 인터페이스를 설계한다.

OOP의 다형성은 이러한 예측의 산물이다. 
다형성의 핵심은 동일 인터페이스를 다형으로 구현하는 것이 아닌, 미래에 등장할 다형의 구현체를 동일 인터페이스로 운용할 수 있음에 있다.
때문에 인터페이스라는 추상 규격이 정교히 부합한다면 미래에 나올 대부분의 구현체를 의존할 수 있다. 

다만 인터페이스가 제대로 설계되지 않으면 당장은 괜찮을지 몰라도 미래에 설계상 예상치 못한 구현체의 추가로 인해 하위 계층의 구현 방식을 암시하거나 세부 상태를 노출하게 된다.
이 경우 상위 계층이 구현체가 담당해야 할 세부사항을 일부 위임하거나 상위 계층이 하위 계층에 의존하는 경우가 발생하며, 이는 명명백백한 구조적 취약점이 된다.

이러한 추상화 설계 실패의 대가는 구현 및 인터페이스 설계 비용 증가로 시작한다. 
그리고 설계가 꼬인 추상화에서 구현 및 설계의 누적이란 복잡도(entropy)의 누적과 같다.
이는 해당 인터페이스를 의존하는 상위 인터페이스까지 재설계가 반드시 필요하게 되는, 즉 신규 구현 및 설계에 부과되는 비용이 시스템 재설계 비용과 동일해지는 지점으로 서서히 근접함을 의미한다.

이것은 완벽히 막을 수 없다.
[최저수준이 아닌 모든 추상화는 어느 정도 불안정성을 지니기 때문이다.](Joel%20Spolsky%EC%9D%98%20%EC%B6%94%EC%83%81%ED%99%94%20%EB%88%84%EC%88%98%20%EB%B2%95%EC%B9%99%203197f6b559dc808ca1c3fa3a58ec801b.md)

추상화가 필연적으로 불안정성을 지니는 이유는 상술했듯 추상화가 미래를 예측하는 것이기 때문이다. 
컴퓨터에서 대부분의 알고리즘이나 로직 등은 최선의 효율을 지닐 수 없으며, 모든 알고리즘은 주어질 수 있는 모든 작업에 대해 완벽히 효율적이지 못하다.
주어질 수 있는 경우의 수는 무수히 많으며, 그것들을 모두 최선의 효율로 처리할 수는 없다.

최선을 구현하기 위해서는 미래에 주어질 모든 작업을 완벽히 예측하여야 한다. 즉 미래를 알아야 한다.
당연하지만 이것은 불가능하며, 때문에 모든 설계는 적절한 기준에 따라 주어질 수 있는 경우의 수를 최대한 필터링하여 줄인 후 남은 경우의 수에 한해 최대한 효율적으로 처리하는 것을 목표로 한다.
불가능한 최선 대신 가능한 차선을 택하는 것이다.

이러한 차선의 설계에서 사용되는 필터링은 본질적으로 미래에 들어올 데이터에 대한 규정이다.
개발자는 "미래의 데이터도 지금과 같은 패턴일 것" 혹은 "미래의 사용자도 이 인터페이스의 범주 안에서 움직일 것"이라는 가정을 바탕으로 세부사항을 절사한다.
그러나 현실의 시간은 정지해 있지 않으며, 환경의 변화는 설계자가 세운 가정을 끊임없이 위협한다.

결국, 설계 당시에는 합리적이었던 차선의 추상화는 시간이 지남에 따라 현실과의 괴리를 발생시킨다. 
이 괴리가 임계점을 넘어서는 순간 본래 감추어져 있어야 할 하위 계층의 복잡성이 상위 계층으로 누수되기 시작한다. 
이러한 추상화 설계 실패의 대가는 상술했듯 구현 및 인터페이스 설계 비용 증가로 시작하게 된다.

이러한 불완전함에도 불구하고 우리가 추상화의 층을 쌓아 올리는 이유는 명확하다. 
인간의 인지 능력에는 한계가 있으며, 현대 컴퓨팅 시스템의 비대함은 추상화 없이 완전 이해가 불가능한 수준에 이르렀기 때문이다.

우리는 완벽한 추상화보다 변화에 유연하게 대응할 수 있는 적절한 수준의 추상화를 고민해야 한다. 
결국 좋은 설계란 미래의 모든 변수를 통제하려는 오만한 확신이 아니라, 우리가 만든 추상화가 언제든 무너질 수 있음을 인정하고 그 파편을 최소화하려는 겸손한 대비에서 시작된다.

> 
> 
> 
> 흥미로운 현상이 있습니다. 경험 많은 시니어 엔지니어일수록 오히려 ‘하위 레벨’을 계속 학습합니다. 프레임워크를 쓰면서도 그 아래의 HTTP를 공부하고, ORM을 쓰면서도 SQL을 깊이 파고, AI 에이전트를 활용하면서도 프롬프트가 어떻게 처리되는지 이해하려 하죠.
> 
> 이것은 오래된 기술에 대한 향수가 아닙니다. 추상화가 깨지는 순간에 대한 존중입니다. 새벽 3시, 장애가 터지고, 추상화 레이어가 무너지고, 문서에 없는 에러가 발생했을 때 — 결국 시스템과 홀로 마주해야 하는 건 AI가 아닌 사람입니다.
> 
> 좋은 추상화란 그 아래를 몰라도 되게 해주는 것입니다. 하지만 좋은 엔지니어란 자신이 어떤 복잡성 위에 서 있는지 알면서, 그럼에도 신경 쓰지 않기로 선택하는 사람입니다. 이들은 추상화를 신뢰하되, 그것이 어떻게 실패할 수 있는지에 대한 모델을 머릿속에 유지합니다. 모든 세부사항을 아는 게 아니라, 기본적인 실패 모드에 대한 작동 모델을 갖고 있는 것입니다.
> 
> > 정세훈, “개발자는 AI에게 대체될 것인가”
> ****[https://toss.tech/article/will-ai-replace-developers](https://toss.tech/article/will-ai-replace-developers)
> >`,fr=`# Bus Lock

isEnable?: Yes

멀티코어 프로세서 시스템에서 특정 코어가 시스템 버스를 독점하는 것, 또는 그러한 매커니즘.

버스 락은 메모리의 특정 데이터를 수정할 때 타 코어나 장치가 동시에 해당 메모리에 접근하지 못하도록 시스템 버스를 점유하여 연산의 원자성 및 일관성을 보장한다. 

버스 락은 성능 저하 및 병목현상의 원인이 될 수 있다.`,pr=`# CPU Interrupt Vector

isEnable?: Yes

| Number | Name | Meaning |
| --- | --- | --- |
| **INT 0** | Divide by Zero | 0으로 나누었을 때 발생한다. |
| **INT 1** | Debug Exception | DR0~DR3에 저장된 주소에서 DR7에 세팅된 조건이 발생할 경우 발생한다. |
| **INT 3** | Breakpoint | 코드에서 0xCC 명령어를 만났을 경우 발생한다. |
| **INT 6** | Invalid Opcode | CPU가 모르는 이상한 명령어를 실행하려고 할 때 발생한다. |
| **INT 13** | General Protection | 메모리 권한 위반으로 인해 발생한다. |
| **INT 14** | Page Fault | 데이터가 물리 메모리에 존재하지 않을 경우 발생한다. |`,mr=`# Calling Convention

isEnable?: Yes
출처: https://blog.naver.com/tjdghkgkdl/10117639381

함수 호출 규약. 
호출자와 피호출자간 함수 인자 전달 및 정리 방식에 대한 규약을 의미한다.
호출자는 Caller, 피호출자(함수)는 Callee라고 부른다.

크게 3가지가 있으며, 현재에는 _fastcall이 기본으로 사용된다.

### cdecl

C Declaration. C언어에서 기본적으로 사용하는 호출 규약.

cdecl에서는 인자를 스택에 적재한다. 인자는 우측부터 좌측 순서대로 적재된다.
ex) sum(1, 2, 3) 호출 시 3, 2, 1 순서대로 스택에 적재한다.

이 때 리턴값의 종류와 크기에 따라 리턴값이 저장되는 레지스터가 다르다.

| **리턴 대상 크기** | **데이터 타입** | **리턴 레지스터** |
| --- | --- | --- |
| **≤ 8 Bytes** | 정수, 포인터, 작은 구조체 | **\`rax\`** |
| **4 or 8 Bytes** | 실수 (\`float\`, \`double\`) | **\`xmm0\`** |
| **> 8 Bytes** (Windows) | 큰 구조체 | 메모리 주소 (caller가 할당) |
| **≤ 16 Bytes** (Linux) | 구조체 | **\`rax\`** + **\`rdx\`** 조합 |

cdecl에서 가장 중요한 점은 호출자가 스택 정리의 책임을 지닌다는 것이다.

\`\`\`nasm
push 20
push 10
call _add_cdecl
add esp, 8

_add_cdecl:
    mov eax, [esp+4]
    add eax, [esp+8]
    ret
\`\`\`

C에는 printf()와 같이 가변 개수 인자를 지닐 수 있는 함수가 있는데, 이러한 함수의 경우 피호출자에서 스택 프레임을 일관되게 정리하기 어렵다. 
이를 피호출자에서 처리하기 위해서는 피호출자가 인자 개수를 체크하고 그에 따라 스택을 정리하는 절차를 거쳐야 한다.
하지만 호출자에서 처리할 경우 호출자는 인자 개수를 이미 알고 있기 때문에 간단히 스택을 정리할 수 있다.

[실제로는 피호출자가 스택을 정리하는 것이 호출자가 스택을 정리하는 것보다 더 빠르고 효율적](Calling%20Convention%2032c7f6b559dc802d8ac4c2c6ccc7576b.md)이지만, 가변 인자 함수의 존재로 인해 C에서는 기본적으로 호출자가 스택을 정리한다.

### _stdcall

Standard Call. 윈도우에서 사용하는 표준 호출 규약.

cdecl과 비슷하게 인자를 스택에 적재하며, 우측부터 적재하는 것도 같다. 
리턴값 저장 방식도 동일하다.

_stdcall이 cdecl과 다른 점은 _stdcall의 경우 피호출자가 스택 정리의 책임을 지닌다는 것이다.

\`\`\`nasm
push 20
push 10
call _add_stdcall

_add_stdcall:
    mov eax, [esp+4]
    add eax, [esp+8]
    ret 8
\`\`\`

보통 windows API에서 사용하는데, windows API에는 가변 인자 함수가 존재하지 않기 때문이다.
후술하겠지만 피호출자가 스택을 정리하는 것은 호출자가 스택을 정리하는 것보다 더 효율적이며, 때문에 _stdcall에서는 호출자가 스택을 정리하지 않고 피호출자가 스택을 정리한다.

### _fastcall

Fast Call. 극한의 최적화를 위해 사용하는 호출 규약.

_fastcall은 _stdcall과 비슷하게 피호출자가 스택을 정리하나, 인자 적재 방식이 나머지 호출 규약과 다르다.

\`\`\`nasm
push 30
mov edx, 20
mov ecx, 10
call _add_fastcall

_add_fastcall:
    mov eax, ecx
    add eax, edx
    add eax, [esp+4]
    ret 4
\`\`\`

타 호출 규약과 비슷하게 우측에서 좌측 순서대로 인자를 스택에 푸시한다.
이 때 첫 번째와 두 번째 인자는 레지스터에 삽입한다.
때문에 호출자는 리턴 전에 스택 정리와 같이(인자가 3개 이상인 경우) 레지스터를 정리해야 한다.

스택이 메모리에 위치한 것과 달리 레지스터는 프로세서와 같이 CPU에 위치해 있으므로, 프로세서는 스택보다 레지스터에 대해 접근 속도가 더 빠르다. 때문에 _fastcall은 타 호출 규약에 비해서 일반적으로 성능이 좋다.

단 연산에 필요한 레지스터를 인자 저장에 사용하므로 연산에 필요한 레지스터가 부족해질 수 있다.
이 경우 레지스터의 인자를 스택으로 임시 이동시켜야 하는 경우가 생길 수 있는데, 이러면 오히려 성능이 하락할 수 있다.

x64 환경에서는 _fastcall이 기본적으로 사용되는데, x64 환경에서는 가용 가능한 레지스터가 많기 때문이다.
windows의 경우 4개의 인자까지 레지스터에 저장할 수 있으며, 정수 및 포인터는 RCX, RDX, R8, R9를 사용하고 실수의 경우 XMM0, XMM1, XMM2, XMM3을 사용한다. 5번째 인자부터는 스택에 푸시된다.

## 번외1. 피호출자의 스택 정리가 호출자의 스택 정리보다 효율적인 이유

피호출자 스택 정리는 호출자의 스택 정리보다 프로그램의 크기 면에서 효율적이다.

\`\`\`nasm
push 20
push 10
call _add_cdecl
add esp, 8

_add_cdecl:
    mov eax, [esp+4]
    add eax, [esp+8]
    ret
\`\`\`

위는 cdecl의 예시인데, 호출자가 스택에 인자를 푸시하고 호출 후 스택을 정리한다.
이 경우 함수를 여러 번 호출했을 때 호출자가 호출마다 스택 정리를 해야 하므로 피호출자가 스택을 정리하는 경우보다 코드의 크기가 커진다.

\`\`\`nasm
push 20
push 10
call _add_stdcall

_add_stdcall:
    mov eax, [esp+4]
    add eax, [esp+8]
    ret 8
\`\`\`

반면 _stdcall의 경우 \`ret 8\`로 간단히 스택이 정리되며, 때문에 코드의 크기가 cdecl보다 작아진다.
함수를 반복 호출했을 경우 차이는 더욱 커지며, 때문에 피호출자의 스택 정리는 호출자의 스택 정리보다 효율적이다.

## 번외2. 호출자가 사용하는 레지스터와 피호출자가 사용하는 레지스터

\`\`\`nasm
push eax
push esi
call ds:ShowWindow
push esi
call ds:UpdateWindow
mov eax, 1
pop esi
retn
\`\`\`

위 코드에서 esi가 showWindow에서 수정되었을 경우, 이후 동일하게 esi를 사용하는 updateWindow는 기대되는 결과를 얻지 못할 수 있다. 때문에 대부분의 Windows의 컴파일러들은 Saved-Register를 사용하여 레지스터 사용 충돌을 예방한다.

- Caller saved register: EAX, ECX, EDX
위 레지스터들은 호출자가 값을 백업해둔 후 피호출자가 사용할 수 있다.
- Callee saved register: EBX, ESI, EDI, EBP
위 레지스터들은 피호출자가 값을 백업해둔 후 호출자가 사용할 수 있다.
EBP의 경우 [프롤로그](Function%20Prolog%20and%20Epilog%2032c7f6b559dc809ca4a2c339f9d78ee2.md)에서 SFP(Saved Frame Pointer)로 스택에 삽입된다.

이 때 피호출자가 Callee saved register를 사용하려 할 경우 백업 후 사용하여야 하며, 에필로그에서 반드시 값을 복원하여야 한다.`,hr=`# Function Prolog and Epilog

isEnable?: Yes
출처: https://en.wikipedia.org/wiki/Function_prologue_and_epilogue

## Prolog

어셈블리어 코드에서, 함수 내에서 사용할 스택과 레지스터를 준비하는 역할을 하는 함수 시작부분의 코드를 의미한다.

아키텍처에 베이스 포인터(EBP)와 스택 포인터(ESP) 역할을 하는 레지스터가 존재할 경우 프롤로그는 일반적으로 다음과 같은 역할을 한다.

- 베이스 포인터를 스택에 푸시한다. 이는 나중에 복원할 수 있게끔 하기 위함이다.
- 베이스 포인터의 값을 스택 포인터의 주소로 설정한다. 이러면 베이스 포인터가 스택의 최상단을 가리키게 된다.
- 스택이 어떻게 쌓이는지에 따라 스택 포인터의 값을 증감시켜 이동한다. 대부분의 경우 스택이 높은 주소에서 낮은 주소로 쌓이므로 스택 포인터는 감소하게 된다.

프롤로그는 다양한 모습을 할 수 있으며, 이로 인해 스택 구성이 약간 달라질 수 있다.
프로그래머나 컴파일러가 함수 내부에서 스택을 올바른 방식으로 사용하기만 한다면 이러한 차이는 허용된다.

예를 들어, GCC 컴파일러가 생성하는 일반적인 x86 어셈블리 코드 프롤로그는 아래와 같다.

\`\`\`nasm
push ebp
mov	ebp, esp
sub	esp, N
\`\`\`

여기서 N은 지역 변수의 저장을 위해 스택에 예약된 공간의 크기이다.

\`\`\`nasm
enter	N, 0
\`\`\`

위와 같은 명령을 사용해도 동일한 결과를 얻을 수 있다. 여기에서 0은 언어의 중첩 레벨을 의미한다.
두 번째 인자를 0이 아닌 enter는 Pascal과 같은 언어에서 요구되는 고차 함수 구현을 위해 여러 개의 베이스/프레임 포인터를 푸시한다.
그러나 이러한 언어의 최신 버전에서는 일부의 경우 깊이를 제한하므로 이러한 명령어를 사용하지 않는다.

## Epilog

어셈블리어 코드에서, 함수 내에서 사용한 스택과 레지스터를 정리하는 역할을 하는 함수 끝부분의 코드를 의미한다.

프롤로그 동작을 역순으로 수행하며, 이를 통해 호출자에게 제어권을 반환한다. 일반적으로 다음과 같은 동작을 수행한다.

- 스택 포인터를 현재 베이스 포인터로 낮춰 프롤로그에서 지역 변수를 위해 예약된 공간을 해제한다.
- 스택에서 베이스 포인터를 꺼내 프롤로그 이전의 값으로 복원한다.
- 이전 프레임의 PC를 스택에서 해제하여 해당 프레임으로 점프함으로서 호출자로 돌아간다.

에필로그는 위의 프롤로그의 동작을 역전시킨다. 특정 호출 규약(_stdcall 등)에서는 스택 정리가 피호출자의 책임이므로 에필로그에는 스택 포인터를 증감시켜 이동하는 단계도 포함될 수 있다.

예를 들어, 위에서 기술한 동작은 아래의 명령어를 통해 수행할 수 있다.

\`\`\`nasm
mov	esp, ebp
pop	ebp
ret
\`\`\`

프롤로그의 enter와 마찬가지로 x86 프로세서에는 에필로그의 일부를 수행하는 내장 명령어가 있다. 

\`\`\`nasm
leave
\`\`\`

leave 명령을 실행하면 위 세 명령을 실행하는 것과 동일한 동작이 발생한다.

함수는 여러 개의 에필로그를 포함할 수 있다. 함수의 모든 종료 지점은 함수의 끝에 있는 공통 에필로그로 점프하거나 자체 에필로그를 포함하여야 한다. 
따라서 프로그래머나 컴파일러는 임의 지점에서 함수를 종료하기 위해 leave나 ret의 조합을 사용하는 경우가 많다. 예를 들어 C 컴파일러는 반환문을 leave/ret 시퀀스로 대체할 수 있다.`,gr=`# x86 CPU Registers

isEnable?: Yes

![image.png](x86%20CPU%20Registers/image.png)

| **Registers** |  | Description |
| --- | --- | --- |
| **EAX** | Extended Accumulator Register | 산술 연산의 결과나 함수의 리턴값을 저장한다. |
| **EBX** | Extended Base address Register | 메모리 주소를 저장한다. ESI나 EDI와 결합될 수 있다. |
| **ECX** | Extended Counter Register | 루핑 시 카운터 역할을 한다. |
| **EDX** | Extended Data Register | 부호 확장 명령 등에 사용된다. 큰 수의 곱셈 및 나눗셈 등의 연산을 할 때 EAX와 같이 쓰인다. |
| **ESI** | Extenden Source Index | 데이터를 조작 및 복사 시 소스 데이터의 주소가 저장된다. |
| **EDI** | Extended Destination Index | 데이터를 조작 및 복사 시 목적지의 주소가 저장된다. |
| **EBP** | Extended Base Pointer | 스택 프레임의 시작 지점 주소가 저장된다.  |
| **ESP** | Extended Stack Pointer | 스택 프레임의 끝 지점 주소가 저장된다.  |
| **EIP** | Extended Instruction Pointer | CPU가 다음에 실행할 명령의 주소가 저장된다. |

**EFLAGS의 플래그들**

| Flag |  | Description |
| --- | --- | --- |
| **ZF** | Zero Flag | 산술논리연산의 결과가 0일 경우 1, 아니면 0이 된다. |
| **PF** | Parity Flag | 연산 결과의 이진수 표현에서 1의 수가 짝수면 1, 홀수면 0이 된다. |
| **AF** | Auxilary Carry\xA0Flag | 8비트 산술논리연산 중 하위 4비트에서 올림이 발생할 경우 1이 된다. |
| **OF** | Overflow Flag | 부호 있는 산술 연산의 결과가 너무 크거나 작아서 목적지에 저장할 수 없을 경우 1이 된다. |
| **SF** | Sign Flag | 산술논리연산의 결과가 음수일 경우 1이 된다. |
| **CF** | Carry Flag | OF와 달리 부호 없는 산술 연산의 결과가 목적지에 저장하지 못할 정도로 큰 경우 1이 된다. |
| **DF** | Direction Flag | 문자열 조작 시 이 플래그가 1이면 주소를 감소시키고 1이면 증가시킨다. |
| **TF** | Trap Flag | 1일 경우 CPU가 명령 하나를 실행할 때마다 내부 인터럽트를 발생시킨다. |
| **IF** | Interrupt Flag | 1일 경우 하드웨어 등 외부 인터럽트를 처리하고 0이면 외부 인터럽트를 무시한다. |

**Segment Register**

| Register |  | Description |
| --- | --- | --- |
| **GS** | G Segment | x32에서 현재 실행 중인 스레드 정보(TIB)를 가리킨다. x64에서는 쓰이지 않는다. |
| **FS** | F Segment | x64에서 현재 실행 중인 스레드 정보(TIB)를 가리킨다. x32에서는 쓰이지 않는다. |
| **ES** | Extra Segment | 데이터를 옮길 때 보조적으로 사용하는 레지스터. |
| **DS** | Data Segment | 현재 실행 중인 데이터 영역을 가리키는 레지스터. |
| **CS** | Code Segment | 현재 실행 중인 코드 영역을 가리키는 레지스터. |
| **SS** | Stack Segment | 현재 실행 중인 스택 영역을 가리키는 레지스터. |

**Debug Register**

| **Register** | Description |
| --- | --- |
| **DR0** | 하드웨어 브레이크포인트 주소를 저장한다. DR0~DR3에 저장된 주소에서 DR7에 세팅된 조건이 발생할 경우 INT 1이 발생한다. |
| **DR1** | 하드웨어 브레이크포인트 주소를 저장한다. DR0~DR3에 저장된 주소에서 DR7에 세팅된 조건이 발생할 경우 INT 1이 발생한다. |
| **DR2** | 하드웨어 브레이크포인트 주소를 저장한다. DR0~DR3에 저장된 주소에서 DR7에 세팅된 조건이 발생할 경우 INT 1이 발생한다. |
| **DR3** | 하드웨어 브레이크포인트 주소를 저장한다. DR0~DR3에 저장된 주소에서 DR7에 세팅된 조건이 발생할 경우 INT 1이 발생한다. |
| **DR6** | INT 1이 발생한 이유를 알려준다. |
| **DR7** | DR0~DR3의 하드웨어 브레이크포인트 발동 조건을 지정한다. |

**DR6 - Debug Status**

INT 1이 발생했을 때 그 이유를 알려주는 디버그 레지스터.

| Bit name |  | Bit | Description |
| --- | --- | --- | --- |
| B0~B3 |  | 0:3 | 어떠한 레지스터에 의해 액세스되었는지를 나타낸다. 가령 B2가 1일 경우 DR2가 액세스한 것을 의미한다. |
| - |  | 10:4 | 예약된 비트. 386/486 프로세서에서는 1이며, 이후 프로세서에서는 항상 1로 읽힌다. |
| BLD | Bus Lock Detected | 11 | Bus Lock Trap Exception을 지원하는 프로세서 한정, [Bus Lock](Bus%20Lock%203287f6b559dc806b846bcaa32cf8de82.md) Trap Exception이 발생 시 0이 된다. 
Bus Lock Trap Exception을 지원하지 않는 프로세서에서는 10:4와 같은 취급이다. |
| BK | Break | 12 | 386/486 환경 한정, ICE 연결 시(DR7 B12 참조) 1이 된다.
386/486 이후 프로세서에서는 예약 비트이며 0이다. |
| BD | Break for Debug register access | 13 | DR7의 GD 비트가 1일 때 다음 명령어가 디버그 레지스터를 읽거나 쓰려고 할 경우 1이 된다. |
| BS | Break for Single-step | 14 | EFLAGS의 TF 비트로 인해 INT 1이 발생했을 경우 1이 된다. |
| BT | Break for Task switch | 15 | Task Switch으로 인해 INT 1이 발생했을 경우 1이 된다. |
| RTM | Restricted Transactional Memory | 16 | Intel TSX가 있는 프로세서 한정, 디버그 예외가 발생했을 때 예외 발생 위치가 RTM 트랜잭션 내부일 경우 0이 되고, 트랜잭션 외부일 경우 1이 된다.
TSX가 없는 프로세서에서는 예약된 비트이다. |
| - |  | 31:17 | 예약된 비트. 386/486/6x86에서는 0이며 이후 프로세서에서는 1로 읽힌다. |
| - |  | 63:32 | x86-64 전용 예약된 비트. 0이다. |

DR7 - Debug Control

[https://github.com/ayoubfaouzi/cpu-internals/blob/master/README.md](https://github.com/ayoubfaouzi/cpu-internals/blob/master/README.md)`,_r=`# x86dbg 명령

isEnable?: Yes

| 명령어 | 단축키 | 설명 |
| --- | --- | --- |
| Go to | ctrl + G | 원하는 주소로 이동(실행은 아님) |
| Execute till cursor | F4 | 커서 위치까지 실행 |
| Comment | ; | 주석 추가 |
| user-defined comment |  | 마우스 우측 메뉴에 위치 |
| label | : | 레이블 추가 |
| user-defined label |  | 마우스 우측 메뉴에 위치 |
| set/reset breakpoint | F2 | BP 설정/해제 |
| Run | F9 | 실행 |
| show the current EIP | * | 현재 EIP 위치를 보여줌 |
| Show the previous cursor | - | 직전 커서 위치를 다시 보여줌 |
| preview CALL/JMP address | enter | 커서가 CALL/JMP 등의 명령어에 위치해 있을 경우 해당 주소 쪽 내용을 보여줌(실행은 아님) |
| Restart | CTRL + F2 | 처음부터 다시 디버깅 시작
(디버깅 대상 프로세스 종료 및 재실행) |
| Step Info | F7 | 하나의 OP Code 실행
(CALL 명령을 만나면 그 함수 코드 내부로 들어감) |
| Step Over | F8 | 하나의 OP Code 실행
(CALL 명령을 만나면 함수 내부로 들어가지 않고 그냥 함수 실행) |
| Execute till Return | CTRL + F9 | 함수 코드 내에서 RETN 명령어까지 실행
(함수 탈출 목적으로 사용) |`,vr=`# 식별자 작성 방식

isEnable?: Yes

## Camel Case

첫 단어의 시작은 소문자로, 두 번째 단어부터 시작 알파벳을 대문자로 하는 방식.

exampleSample

## Pascal Case

모든 단어의 시작 알파벳을 대문자로 하는 방식.

ExampleSample

## Snake Case

각 단어를 _로 구분하는 방식.

example_sample`,yr=`# 이전 블로그

isEnable?: No

[https://velog.io/@sally_law/posts](https://velog.io/@sally_law/posts)`,br=`# Reversing 0. 리버싱이란

isEnable?: Yes
개요: 리버싱과 리버싱의 진행 과정에 대한 간략한 설명
시리즈: Reverse Engineering
작성일시: 2026년 3월 16일   (GMT+9)
출처: 리버싱 핵심 원리(이승원 저)

리버스 엔지니어링(reverse engineering, 역공학)이란 일반적으로 물건이나 기계장치 혹은 시스템 등의 구조, 기능, 동작 등을 분석하여 그 원리를 이해하며 단점을 보완하고 새로운 아이디어를 추가하는 일련의 작업이라고 할 수 있다.

리버스 코드 엔지니어링(reverse code engineering, RCE)은 소프트웨어 분야의 리버스 엔지니어링을 통칭한다. RCE 외에도 RE, 역공학, 리버싱 등의 용어가 사용되고 있다. 
이 시리즈에서는 리버싱이라는 용어를 사용하려고 한다.

리버싱, 즉 실행 파일의 분석 방법에는 크게 두 가지가 있다.

### 1. 정적 분석 Static Analysis

파일의 겉모습을 관찰하여 분석하는 방법. 

정적 분석 단계에서는 파일을 실행하지 않고, 파일의 종류, 크기, 헤더(PE) 정보, Import/Export API, 내부 문자열, 실행 압축 여부, 등록 정보, 디버깅 정보, 디지털 인증서 등의 다양한 내용을 확인한다.
또한 디스어셈블러를 이용하여 내부 코드와 그 구조를 확인하는 것도 정적 분석의 범주에 들어갈 수 있다./

정적 분석으로 얻어낸 다양한 정보는 동적 분석에 좋은 참고 자료로 활용된다.

### 2. 동적 분석 Dynamic Analysis

파일을 직접 실행시켜서 그 행위를 분석하고, 디버깅을 통하여 코드 흐름과 메모리 상태 등을 자세히 살펴보는 방법.

파일, 레지스트리, 네트워크 등을 관찰하면서 프로그램의 행위를 관찰한다. 또한 디버거를 이용하여 프로그램 내부 구조와 동작 원리를 분석할 수 있다.

보통 정적 분석으로 정보를 수집하면서 해당 프로그램의 구조와 동작 원리에 대해 예측하고, 그것을 바탕으로 동적 분석을 진행한다. 이러면 리버싱 시간을 많이 단축시킬 수 있으며 더욱 효과적인 분석이 가능하다.

리버싱에서 취급하는 대상은 보통 실행 파일인 경우가 많다. 소스 코드 없이 실행 파일의 바이너리 자체를 분석한다.
그렇다면 소스 코드와 바이너리 코드 사이의 관계를 살펴보는 것이 리버싱의 이해에 도움이 될 것이다.

소스코드를 빌드하면 실행 파일이 생성된다. 생성된 실행 파일은 컴퓨터가 이해할 수 있는 2진수 형식으로 되어 있다. 
보통 가독성을 위해 이 2진수 형식을 16진수 형식으로 변환한다. 이렇게 변환된 16진수 형식 코드를 hex code라고 한다.

그러나 16진수로 변환하였다 하더라도 사람이 읽기 쉽지는 않은데, 때문에 더 읽기 쉬운 어셈블리 코드 형태로 변환한다. 이를 디스어셈블(disassemble)이라고 한다. 일반적인 리버싱에서는 이러한 어셈블리 코드를 분석하곤 한다.
****`,xr=`# Reversing 1. Hello, World!

isEnable?: Yes
개요: Hello World를 출력하는 간단한 프로그램을 디버깅하는 과정
시리즈: Reverse Engineering
작성일시: 2026년 3월 16일   (GMT+9)
출처: 리버싱 핵심 원리(이승원 저)

개발 도구를 이용하여 소스 코드를 빌드하면 실행 파일이 생성된다. 이 과정은 사람이 이해하기 쉬운 소스코드를 기계가 이해하기 쉬운 기계어로 변환하는 과정이다. 
이러한 기계어는 사람이 알아보기 어려우므로 좀 더 편하게 보기 위해 디버거 유틸리티를 사용한다. 디버거에 내장된 디스어셈블러 모듈은 이 기계어를 어셈블리어로 번역하여 보여준다.

![디버거 중 하나인 x32dbg의 화면. 책에서는 OllyDbg를 사용했으나, 이 시리즈에서는 x32dbg를 사용한다.](Reversing%201%20Hello,%20World!/image.png)

디버거 중 하나인 x32dbg의 화면. 책에서는 OllyDbg를 사용했으나, 이 시리즈에서는 x32dbg를 사용한다.

위는 Hello world!를 출력하는 간단한 프로그램을 디버거로 실행한 모습이다. 
각 화면의 내용은 아래와 같다.

- **좌상단: Code window.** 
디스어셈블리 코드를 표시하여 각종 주석 및 레이블을 보여주며, 코드를 분석하여 loop나 jump의 위치 등의 정보를 표시한다.
- **우상단: Register window.**
CPU 레지스터 값을 실시간으로 표시. 특정 레지스터들은 수정도 가능하다.
- **좌하단: Dump window.**
프로세스에서 원하는 메모리 주소 위치를 Hex와 ASCII/unicode 값으로 표시. 수정도 가능하다.
- **우하단: Stack window.**
ESP register가 가리키는 프로세스 스택 메모리를 실시간으로 표시. 수정도 가능하다.

x32dbg의 기본 명령어 및 단축키는 아래와 같다.

| 명령어 | 단축키 | 설명 |
| --- | --- | --- |
| Restart | CTRL + F2 | 처음부터 다시 디버깅 시작
(디버깅 대상 프로세스 종료 및 재실행) |
| Step Info | F7 | 하나의 OP Code 실행
(CALL 명령을 만나면 그 함수 코드 내부로 들어감) |
| Step Over | F8 | 하나의 OP Code 실행
(CALL 명령을 만나면 함수 내부로 들어가지 않고 그냥 함수 실행) |
| Execute till Return | CTRL + F9 | 함수 코드 내에서 RETN 명령어까지 실행
(함수 탈출 목적으로 사용) |

![코드 윈도우에서 보이는 EIP는 Extended Instruction Pointer(확장된 명령 지시자)의 줄임으로, 다음에 실행할 명령어 줄을 가리키는 레지스터이다.
파일을 디버거로 열었을 때 EIP가 가리키는 줄이 EP이다.
푸른 점선은 조건 점프, 실선은 확정 점프를 의미한다.](Reversing%201%20Hello,%20World!/image%201.png)

코드 윈도우에서 보이는 EIP는 Extended Instruction Pointer(확장된 명령 지시자)의 줄임으로, 다음에 실행할 명령어 줄을 가리키는 레지스터이다.
파일을 디버거로 열었을 때 EIP가 가리키는 줄이 EP이다.
푸른 점선은 조건 점프, 실선은 확정 점프를 의미한다.

EIP가 가리키는 곳은 EP(Entry Point)로, EP는 실행 파일의 코드 시작점을 의미한다. 
현재 EP 코드는 773280D2 주소로 점프하라는 명령을 내리고 있다. 

적색 실선을 따라 점프 대상 주소의 코드를 보면 mov dword ptr ss:[ebp-4], FFFFFFFE라고 적혀 있다.
이는 ebp 레지스터에 저장된 주소에서 4만큼 떨어진 곳에서 4byte만큼을 가져와 FFFFFFFE 주소에 저장한다는 의미이다.

이 과정에서 레지스터 및 컴퓨터 구조에 대해 알아야 할 것 같아 약간의 공부를 거쳤다.

[Function Prolog and Epilog](../Memo%20DB/Function%20Prolog%20and%20Epilog%2032c7f6b559dc809ca4a2c339f9d78ee2.md) 

[Calling Convention](../Memo%20DB/Calling%20Convention%2032c7f6b559dc802d8ac4c2c6ccc7576b.md) 

[Bus Lock](../Memo%20DB/Bus%20Lock%203287f6b559dc806b846bcaa32cf8de82.md) 

[x86 CPU Registers](../Memo%20DB/x86%20CPU%20Registers%203267f6b559dc80418415ffebdabb1ea8.md) 

F7과 F8, ctrl+F9로 코드를 종횡무진 누비다 보면 어느 정도 구조가 보이기 시작한다.

![image.png](Reversing%201%20Hello,%20World!/image%202.png)

그리고 어느 순간 보인다.

![image.png](Reversing%201%20Hello,%20World!/image%203.png)

그리고 실행되고 끝.
[아래의 int3은 브레이크포인트를 의미한다.](../Memo%20DB/CPU%20Interrupt%20Vector%203267f6b559dc8047acfacfbfe91b42a2.md)

디버거 단축키는 F7, F8, ctrl+F9, ctrl+F2 이외에도 더 있다.

[x86dbg 명령](../Memo%20DB/x86dbg%20%EB%AA%85%EB%A0%B9%203337f6b559dc80afbcebc50736ce6e42.md) 

프로그램을 디버거로 실행할 때마다 엔트리 포인트에서 새로 시작한다. 이는 꽤 불편하지 않을 수 없다.
중간중간 중요 포인트를 지정해두면 이후 디버깅 재실행 시 해당 포인트로 빠르게 이동할 수 있다.

이렇게 재디버깅 시 시간을 단축하는 방법은 크게 네 가지가 있다.

#### Goto

포인트의 주소를 기억해 두었다가 Goto 명령으로 해당 주소로 빠르게 가는 방법.

#### Breakpoint

포인트에 브레이크포인트를 지정하고 실행하는 방법.
디버거는 현 실행 위치부터 프로세스를 실행하다가 BP에서 중단한다.

![image.png](Reversing%201%20Hello,%20World!/image%204.png)

alt + b로 브레이크포인트 목록을 띄울 수 있고, 브레이크포인트 더블클릭 시 해당 주소로 이동한다.

#### Comment

;로 주석을 달고 해당 주석을 따라가는 방법.

![image.png](Reversing%201%20Hello,%20World!/image%205.png)

#### Label

원하는 주소에 별칭을 붙이는 기능. 

![image.png](Reversing%201%20Hello,%20World!/image%206.png)

이렇게 주소 자체에 별칭이 붙게 된다.

### 코드를 빠르게 찾아내는 법

#### 코드 실행

프로그램의 기능이 명확한 경우 명령어를 하나하나 실행해가며 원하는 위치를 찾아갈 수 있다. 
이 방법은 코드의 크기가 작고 기능이 명확한 경우 사용하기 적합하다.

#### 문자열 검색 방법

디버거가 프로그램을 처음 로딩할 때 사전 분석 과정을 거치는데, 이 때 프로세스 메모리를 죽 훑어 참조되는 문자열과 호출되는 API들을 뽑아내서 따로 목록으로 정리한다. all referenced text strings 명령으로 프로그램 코드에서 참조되는 명령을 볼 수 있다.

![image.png](Reversing%201%20Hello,%20World!/image%207.png)

#### API 검색 방법 - 호출 코드에 BP

window 프로그래밍에서 모니터 화면에 뭔가 출력하기 위해서는 Win32 API를 사용하여 OS에게 화면출력을 요청하여야 한다. 즉, 프로그램 내부에서 Win32 API를 사용한다는 의미이다. 
이를 예상한다면, 즉 프로그램이 해당 API를 사용할 것을 예상한다면 디버깅이 편리해진다.

디버거의 사전 분석 중에는 프로그램이 사용하는 API를 뽑아내는 기능이 있다. 이를 통해 쉽게 원하는 모듈을 찾아낼 수 있다.

![image.png](Reversing%201%20Hello,%20World!/image%208.png)

위에서는 0045EA82 주소에서 MessageBoxW를 호출하는 것을 볼 수 있다. 이러한 기능을 통해 쉽게 원하는 기능 부분으로 이동할 수 있다.

#### API 검색 방법 - API 코드에 직접 BP

실행 파일이 packer나 protector를 통해 압축 및 보호되어 있을 경우 파일 구조가 변경되어 디버거 내에서 API 호출 목록이 보이지 않는다. 이런 경우 프로세스 메모리에 로딩된 라이브러리에 직접 BP를 걸어볼 수 있다. API는 .dll 파일 내부에 구현되어 있는데, 때문에 프로세스가 해당 라이브러리를 사용하기 위해서는 해당 dll 파일을 로딩하여야 한다. 

나의 경우 messageBoxW 함수를 사용하였으므로

![image.png](Reversing%201%20Hello,%20World!/image%209.png)

위 이미지는 프로세스 메모리의 일부이다.`,Sr=`# Reversing 2. Little Endian

isEnable?: Yes
개요: Byte Ordering에 대해서
시리즈: Reverse Engineering
작성일시: 2026년 4월 1일
출처: 리버싱 핵심 원리(이승원 저)

컴퓨터에서 메모리에 데이터를 저장하는 방법을 byte ordering이라고 한다,
바이트 오더링은 크게 Little Endian과 Big Endian으로 나뉜다.

바이트 오더링은 바이트 단위의 데이터 저장 방식이므로 1바이트 이하의 변수를 저장할 때에는 의미가 없으나, 2바이트 이상의 크기를 지닌 자료형부터는 차이가 발생한다. 
빅 엔디언의 경우 일반적으로 사람이 보는 것과 같이 정순으로 데이터가 순차 저장되나 리틀 엔디언의 경우 데이터를 저장할 때 역순으로 저장된다. 

바이트 오더링은 바이트 단위 저장 방식이므로 리틀 엔디언이라고 하더라도 바이트 자체는 정순으로 저장된다. 멀티바이트인 경우에만 각 바이트가 역순으로 저장된다.
또한 문자열의 경우 바이트 오더링과 상관없이 정순으로 저장되는데, 이는 문자열이 문자의 배열이기 때문이다. 

### 어떤 바이트 오더링 방식이 더 좋은가?

빅 엔디언의 장점은 사람이 보기에 직관적이라는 것이다. 빅 엔디언은 대형 UNIX 서버에 사용되는 RISC 계열의 CPU에서 많이 사용된다. 또한 네트워크 프로토콜에 빅 엔디언이 사용된다. 
이 사실은  x86 계열 응용 프로그램 개발자와 리버서에게 중요한데, 애플리케이션 개발에 사용된 데이터를 네트워크로 송수신할 때 엔디언 타입을 변경하여야 하기 때문이다.

바이트 오더링이 빅 엔디언으로만 사용된다면 굳이 별도의 설명이 필요없을 것이지만, 문제는 Intel x86 CPU 환경에서 리틀 엔디언을 사용한다는 것이다. 따라서, 리버싱을 배우고자 한다면 리틀 엔디언에 대해 잘 알아야 한다. 

빅 엔디언이 사람이 보기에 직관적이라는 장점을 지닌다면,  리틀 엔디언은 산술 연산과 데이터 타입 확장/축소 시 더 효율적이라는 장점을 지니고 있다.`,Cr=`# Reversing 3. IA-32 Register

isEnable?: Yes
개요: 레지스터들에 대해서
시리즈: Reverse Engineering
작성일시: 2026년 4월 1일
출처: 리버싱 핵심 원리(이승원 저)

Register란 CPU 내부에 존재하는 다목적 저장 공간이다. 
우리가 일반적으로 메모리라고 부르는 RAM과는 다른데, CPU와 상대적으로 거리가 먼 램과 달리 레지스터는 CPU와 붙어 있으므로 데이터 처리가 매우 빠르다.

IA-32에는 아래와 같은 레지스터 종류가 있다.

<aside>

1. Basic program execution registers
2. x87 FPU registers
3. MMX registers
4. XMM registers
5. Control registers
6. Memory management registers
7. Debug registers
8. Memory type range registers
9. Machine specific registers
10. Machine check registers

…

</aside>

이 글에서는 Basic program execution registers에 대해 중점적으로 다룬다.

### Basic program execution registers

베이직 프로그램 익스큐션 레지스터는 네 가지의 그룹으로 나눌 수 있다.

1. General Purpose Registers(32bit, 8개)
2. Segment Registers(16bit, 6개)
3. Program Status and Control Registers(32bit, 1개)
4. Instruction Pointer(32bit, 1개)

![image.png](Reversing%203%20IA-32%20Register/image.png)

#### General Purpose Registers

이름대로 범용적으로 사용되는 레지스터. IA-32 환경에서 각 범용 레지스터의 크기는 32비트이다. 
보통 상수나 주소 등을 저장할 때 주로 사용되며, 특정 어셈블리 명령어에서는 특정 레지스터를 조작하기도 한다. 또, 어떠한 레지스터의 경우 특수 용도로 사용되기도 한다. 

<aside>

각 레지스터들은 16비트 하위 호환을 위해 몇 가지의 구획으로 분리되어 있다. EAX로 예를 들자면,

1. EAX: 0~31, 32비트
2. AX: 0~15, EAX의 하위 16비트
3. AH: 8~15, AX의 상위 8비트
4. AL: 0~7, AX의 하위 8비트

이는 하나의 레지스터를 상황에 맞게 8, 16, 32비트 모든 환경에서 사용할 수 있게 하기 위함이다. 

</aside>

각 레지스터의 이름은 아래와 같다.

- EAX: Accumulator for operands and results data
- EBX: Pointer to data in the DS segment
- ECX: Counter for string and loop operands
- EDX: I/O Pointer

위 4개의 레지스터는 산술연산(ADD, SUB, XOR, OR 등) 명령어에서 상수/변수값 저장 용도로 사용된다. 어떤 어셈블리 명령어들은 특정 레지스터를 직접 조작하기도 한다.(MUL, DIV, LODS 등)

위 레지스터 중 ECX와 EAX는 특수한 용도로도 사용된다. ECX는 반복문 명령어에서 반복 카운트 용도로도 사용된다. EAX는 일반적으로 함수 리턴값을 저장할 때 사용한다. 모든 Win32 API 함수들은 리턴값을 EAX에 저장한 후 리턴한다.
때문에 Windows 어셈블리 프로그래밍에서는 API 호출 전에 반드시 ECX와 EDX 값을 타 레지스터나 스택에 백업해야 한다.

나머지 범용 레지스터들은 아래와 같다.

- EBP: pointer to data on the stack(in the SS segment)
- ESI: source pointer for string operation
- EDI: destination pointer for string operation
- ESP: stack pointer(in the SS segment)

위 4개의 레지스터들은 주로 메모리 주소를 저장하는 포인터로 사용된다.  ESP는 스택 메모리 주소를 가리킨다. PUSH, POP, CALL, RET 명령어는 ESP를 직접 조작하기도 하며, 때문에 ESP는 절대 다른 용도로 사용되어서는 안 된다. EBP는 함수가 호출되었을 때 그 순간의 ESP를 저장하고 있다가 함수가 리턴되기 직전 다시 ESP에 값을 되돌려 스택이 깨지지 않도록 한다. 이를 Stack Frame 기법이라고 한다. ESI와 EDI는 LODS, STOS, REP MOVS와 함께 주로 메모리 복사에 사용된다.

#### Segment Registers

세그먼트란 IA-32의 메모리 관리 모델에서 나오는 용어로,  세그먼트란 메모리를 조각내어 각 조각마다 시작 주소, 범위, 접근 권한 등을 부여하여 메모리를 보호하는 기법을 의미한다. 또한, 세그먼트는 페이징과 함께 가상 메모리를 물리 메모리로 변경할 때 사용된다. 

<aside>

참고로 최신 버전의 Windows는 세그먼테이션을 사용하지 않는다. 따라서 아래의 내용은 

</aside>

![image.png](Reversing%203%20IA-32%20Register/image%201.png)

![image.png](Reversing%203%20IA-32%20Register/image%202.png)

![image.png](Reversing%203%20IA-32%20Register/image%203.png)

세그먼트 메모리는 Segment Descriptor Table(SDT)라고 하는 곳에 기술되어 있는데, 세그먼트 레지스터는 이 SDT의 index를 지니고 있다. 
각 세그먼트 레지스터의 이름은 아래와 같다.

- CS: Code Segment
- SS: Stack Segment
- DS: Data Segment
- ES: Extra(Data) Segment
- FS: Data Segment
- GS: Data Segment

각각 이름 그대로의 의미이며, 특히 FS의 경우 SEH(Structured Exception Handling)나 TEB(Thread Environment Block), PEB(Process Environment Block) 등의 주소를 계산할 때 자주 사용된다.

#### EFLAGS

플래그 레지스터. 32b의 크기를 지닌다.
EFLAGS는 각각의 비트마다 의미를 지니며, 1 또는 0을 지님에 따라 On/Off 또는 True/False를 의미한다. EFLAGS의 비트 중 일부는 시스템에서 직접 세팅하고, 일부는 프로그램에서 사용된 명령의 수행 결과에 따라 세팅된다.

![image.png](Reversing%203%20IA-32%20Register/image%204.png)

이 중 중요한 것은 세 가지이다.

- ZF: Zero Flag. 연산 명령 후 결과값이 0일 경우 1이 된다.
- OF:Overflow Flag. 부호 있는 수의 오버플로가 발생했을 경우, 또는 MSB(Msot Significant Bit)가 변경되었을 경우 1이 된다.
- CF: Carry Flag. 부호 없는 수의 오버플로가 발생했을 경우 1이 된다.

#### EIP

Instruction Pointer. 다음에 처리할 명령어 주소를 나타내는 레지스터. 
CPU는 EIP에 저장된 주소의 명령어를 처리한 후 자동으로 그 명령어 길이만큼 EIP를 증가시킨다. 이런 식으로 계속 명령어를 처리해 나간다.

범용 레지스터와 달리, EIP는 값을 수동으로 변경할 수 없다. 때문에 다른 명령을 통해 간접적으로 변경하여야 한다. 

EIP를 변경하는 명령은 대표적으로 JMP, Jcc, CALL, RET이 있으며 또한 인터럽트나 예외로도 EIP를 변경시킬 수 있다.`,wr=`# Reversing 4. Stack

isEnable?: Yes
개요: Stack에 대해서
시리즈: Reverse Engineering
작성일시: 2026년 4월 4일
출처: 리버싱 핵심 원리(이승원 저)

프로세스에서 스택 메모리의 역할은 아래와 같다. 

1. 함수 내 로컬 변수 임시 저장.
2. 함수 호출 시 파라미터 전달.
3. 복귀 주소(return address) 저장.

프로세스에서 ESP의 초기값은 Stack Bottom, 즉 스택의 바닥 근처에 위치해 있으며 push 명령 등으로 데이터를 스택에 추가하면 ESP는 Stack Top, 즉 스택 상단으로 점차 올라간다. 반대로 pop 명령 등으로 데이터가 스택에서 제거되면 스택은 ESP는 스택 하단으로 내려간다. 

스택에서 데이터는 환경에 따라 다르지만 대부분 높은 주소에서 낮은 주소로 쌓이며, 이는 push/pop 명령어가 어떻게 동작하느냐에 따라 다르다. push가 스택에 데이터를 추가하고 ESP를 낮은 주소로 잡을 경우 스택은 높은 주소에서 낮은 주소로 쌓이며, 그 반대일 경우 스택은 낮은 주소에서 높은 주소로 쌓이게 된다. 대부분의 경우 push는 ESP를 줄이지만, 일부의 경우, 특히 HP 계열 프로세서는 push가 ESP를 높인다.`,Tr=`# Reversing 5. abex1 풀이

isEnable?: Yes
개요: abex1 풀이
시리즈: Reverse Engineering
작성일시: 2026년 4월 4일
출처: 리버싱 핵심 원리(이승원 저)

https://crackmes.one/

![image.png](Reversing%205%20abex1%20%ED%92%80%EC%9D%B4/image.png)

abex1의 내부는 대략 위와 같으며, 프로그램이 “Ok, I really think that your HD is a CD-ROM! :p” 메시지박스를 띄우게 하는 것이 목표이다.

위 코드를 잘 보면 call 이전에 push가 여럿 보이는데, 이는 cdecl의 특징이다. 즉, 위 소스코드는 (실제로는 아닐 가능성이 높으나) c로 빌드되었음을 추측할 수 있다.

나는 여기에서 두 가지의 풀이를 했다.

1. 401024의 cmp eax,esi를 cmp eax,eax로 바꾸어 ZF를 1로 고정시킨다.
2. 책의 내용대로 je를 jmp로 바꾼다.

두 방법은 점프를 강제한다는 점에서 차이는 없다. 
다른 풀이가 있을지도 모르나, 일단은 위와 같은 해법을 사용했다.

![image.png](Reversing%205%20abex1%20%ED%92%80%EC%9D%B4/image%201.png)

간단히 성공.
위에서는 401024의 cmp eax,esi를 cmp eax,eax로 바꿨다.`,Er=`# Reversing 6. Stack Frame

isEnable?: Yes
개요: 스택 프레임에 대해서
시리즈: Reverse Engineering
작성일시: 2026년 4월 5일
출처: 리버싱 핵심 원리(이승원 저)

스택 프레임이란 ESP가 아닌 EBP를 사용하여 스택 내 로컬 변수, 파라미터, 복귀 주소에 접근하는 기법을 의미한다. 
ESP는 프로그램 내에서 수시로 변경되므로 스택에 저장된 변수, 파라미터에 접근코자 할 때 ESP를 기준으로 하면 프로그램을 만들기 힘들고, CPU가 정확한 위치를 참고하려 할 때 어려움이 있다. 하여, 어떤 기준 시점(보통 함수의 시작 부분)의 ESP를 EBP에 저장하고 이를 함수 내에서 유지할 경우 ESP 값이 아무리 변하더라도 EBP를 기준으로 안전히 해당 함수의 변수, 파라미터, 복귀 주소에 접근할 수 있다. 

스택 프레임을 통해 함수 호출을 관리하면 아무리 호출 깊이가 깊고 복잡하더라도 스택을 완벽히 관리할 수 있다.`,Dr=`# Reversing 7.

isEnable?: No
개요: abex2 풀이
시리즈: Reverse Engineering
작성일시: 2026년 4월 8일
출처: 리버싱 핵심 원리(이승원 저)

![image.png](Reversing%207/image.png)

abex2의 실행 화면은 위와 같다.

![image.png](Reversing%207/image%201.png)

임의의 name과 serial을 입력하고 Check를 누르면 위와 같은 메시지박스가 출력된다. 
여기에서 Serial이 잘못되었다고 하는 것을 보아 아마 적절한 Serial을 입력하여야 하는 프로그램으로 보인다.

디버거로 실행해 보면 아래와 같은 코드가 보인다.

![image.png](Reversing%207/image%202.png)

EP는 401238로, 스택에 401E14를 푸시하는 코드이다.
EP 근처의 코드는 아래와 같다.

\`\`\`nasm
00401232 | FF25 A0104000            | jmp dword ptr ds:[<Ordinal#100>]        |
00401238 | 68 141E4000              | push abexcrackme2.401E14                |
0040123D | E8 F0FFFFFF              | call <JMP.&ThunRTMain>                  |
\`\`\`

401E14를 스택에 푸시하고 CALL이 나오는 것으로 보아 401E14는 함수의 인자로 쓰이는 것으로 보인다.
그런데 CALL은 401232를 가리키고 있다.

\`\`\`nasm
...
00401214 | FF25 78104000            | jmp dword ptr ds:[<Ordinal#608>]        |
0040121A | FF25 10104000            | jmp dword ptr ds:[<__vbaEnd>]           |
00401220 | FF25 68104000            | jmp dword ptr ds:[<EVENT_SINK_QueryInte |
00401226 | FF25 54104000            | jmp dword ptr ds:[<EVENT_SINK_AddRef>]  |
0040122C | FF25 60104000            | jmp dword ptr ds:[<EVENT_SINK_Release>] |
00401232 | FF25 A0104000            | jmp dword ptr ds:[<Ordinal#100>]        |
...
\`\`\`

401232에는 함수 자체가 아니라, 함수 부분으로 점프하는 명령이 있다.
해당 부분에는 이러한 JMP 명령이 밀집되어 있는데, 이렇게 함수부로 점프하는 명령이 밀집된 영역을 IAT(Import Address Table)이라고 한다. 
또한, 이러한 방식을 간접 호출(Indirect Call)이라고 한다.

401E14에는 RT_MainStruct라는 구조체가 존재한다. 이 구조체에는 또 다른 구조체들의 주소를 담고 있다. 즉 VB 엔진은 파라미터로 넘어온 RT_MainStruct 구조체를 통해 프로그램의 실행에 필요한 모든 정보를 얻는다는 것을 확인할 수 있다.`,Or=`# 이전 블로그

isEnable?: No
개요: 이전 블로그의 URL

[https://velog.io/@sally_law/posts](https://velog.io/@sally_law/posts)`,kr=`# Java프레임워크 2주차

작성일자: 2026/03/11   (GMT+9)
과목: Java프레임워크
교수: 유응구
요약: 데이터 처리 기본 연산, 의존성 등
isEnable?: Yes

| 데이터 처리 기본 연산 | 데이터 생성 | 데이터 조회 | 데이터 업데잍,? | 데이터 삭제 |
| --- | --- | --- | --- | --- |
| CRUD | Create | Read | Update | Delete |
| SQL | INSERT | SELECT | UPDATE | DELETE |
| HTTP 기본 메서드 | POST | GET | PUT | DELETE |`,Ar=`# Java프레임워크 3주차

작성일자: 2026/03/18   (GMT+9)
과목: Java프레임워크
교수: 유응구
요약: Spring 및 Springboot 개요, maven 및 gradle 활용
isEnable?: Yes

### jar - java archive

단순 아카이브 파일

JVM에서 실행 가능한 아카이브 파일

내장형 WAS 배포되어 동작하는 아카이브 파일

### war - web archive : Jakarta EE, JSP, Servlet, Spring 등

외장형 WAS 배포되어 동작하는 아카이브 파일

### Annotation(@)

그거

CoC Convention over Configuration`,jr=`# Java프레임워크 4주차

작성일자: 2026/03/25   (GMT+9)
과목: Java프레임워크
교수: 유응구
요약: Thymeleaf, Lombok. attributes
isEnable?: Yes

annotation 애노테이션:
일반적으로 주석으로 불리는 comment와 달리, 컴파일러를 위한 주석.
앞에 @(at)을 붙여 선언한다.

Domain object: business
Model object: MVC
DTO: Data Transfer

fragments 처리
모든 페이지에서 페이지 이동이 정상 처리될 수 있도록
모든 페이지를 컨트롤러에 매핑`,Mr=`# Java프레임워크 5주차

작성일자: 2026/04/01
과목: Java프레임워크
교수: 유응구
요약: 공동 모듈 작성 방법
isEnable?: Yes

.`,Nr=`# Java프레임워크 6주차

작성일자: 2026/04/08
과목: Java프레임워크
교수: 유응구
요약: RestController
isEnable?: Yes

\`\`\`java
@RestController
public class RestfulController {
    @GetMapping("api/v1")
    public String getApis() { return "./misc/buttons"; }
}
\`\`\`

\`\`\`java
@Controller
public class RestfulController {
    @GetMapping("api/v1")
    public @ResponseBody String getApis() { return "./misc/buttons"; }
}
\`\`\`

@RestController = @Controller + @ResponseBody
즉 위의 두 코드는 동작이 같다.`,Pr=`# Java프레임워크 7주차

작성일자: 2026/04/15
과목: Java프레임워크
교수: 유응구
요약: AOP 개요 및 활용
isEnable?: Yes

.`,Fr=`# Java프레임워크 8주차

작성일자: 2026/04/22
과목: Java프레임워크
교수: 유응구
요약: Spring Framework 기반 공동 모듈 개발
isEnable?: Yes

.`,Ir=`# Java프레임워크 9주차

과목: Java프레임워크
교수: 유응구
isEnable?: Yes

.`,Lr=`# iOS프로그래밍 2주차

작성일자: 2026/03/10   (GMT+9)
과목: iOS프로그래밍실무
교수: 한성현
요약: Swift의 기본 문법
isEnable?: Yes

\`\`\`swift
var x: Int
x = 10
print(x)
\`\`\`

swift에서 변수를 선언할 때는 var과 let을 사용한다.
var는 값 변경을 허용하며, let은 값 변경을 허용하지 않는다.

변수 선언과 동시에 초기화가 가능하며, 이 경우 자료형을 명시하지 않아도 된다.
자료형을 명시하지 않았을 때 컴파일러가 타입을 임의 지정하는 것을 **타입 추론(type inference)**이라고 한다.

반대로 타입을 명시하는 것은 **타입 어노테이션(type annotation)**이라고 한다.

대입 연산자는 양쪽에 일관된 공백이 있어야 한다. 
예를 들어 \`x= 10\` 은 에러가 발생한다.

데이터 타입은 아래와 같다.

| **데이터 타입** | **설명** | **예시** |
| --- | --- | --- |
| Bool | 참(true) 또는 거짓(false) 값 | \`var isValid: Bool = true\` |
| Character | 단일 문자
  • 타입을 명시하지 않을 경우 String으로 추론된다. | \`var letter: Character = "A"\` |
| Int | 64비트 정수(32비트 정수는 Int32) | \`var age: Int = 25\` |
| Float | 32비트 부동소수점 숫자 | \`var price: Float = 3.14\` |
| Double | 64비트 부동소수점 숫자 | \`var pi: Double = 3.141592653589793\` |
| String | 문자열 | \`var name: String = "Swift"\` |
| Void | 값이 없음 (함수 반환 타입) | \`func printMessage() -> Void { }\` |

Void는 빈 튜플의 별칭(typealias)이다. 튜플은 후술한다.

print 함수의 시그니처는 아래와 같다.
**print(_:separator:terminator:)**

separator는 문자열 구분자, terminator는 출력 완료 후 붙일 문자열이다.
separator는 디폴트로 공백이, terminator는 디폴트로 \\n이 설정되어 있다.

튜플은 여러 값을 일시적으로 묶는 객체이다.
일반적인 배열과 달리 튜플은 다양한 타입을 하나로 묶을 수 있다.

\`\`\`swift
let myTuple = (10, 12.1, "Hi")
var myString = myTuple.2
print(myTuple, myString)
\`\`\`

튜플의 자료형은 (요소의 자료형…)이다.

\`\`\`swift
let myTuple = (10, 12.1, "Hi")
print(type(of:myTuple))
\`\`\`

\`\`\`swift
// 튜플의 각 요소를 아래와 같이 변수에 대입할 수 있다.
let myTuple = (10, 12.1, "Hi")
let (myInt, myFloat, myString) = myTuple

// 특정 요소를 제외하고 대입할 수 있다.
var (myInt, _, myString) = myTuple //12.1 무시

// 각 요소에 이름을 붙일 수 있다.
let myTuple = (count: 10, length: 12.1, message: "Hi")
\`\`\`

Void는 빈 튜플이다.

\`typealias Void = ()\`

\`\`\`swift
// 리턴형 생략 가능
func logMessage(_ s: String) { print("Message: \\(s)") }

// 함수, 메서드 또는 클로저의 형(type)에는 반환형 반드시 작성
let logger: (String) -> Void = logMessage
logger("Hello")
\`\`\`

타입 뒤에 ? 또는 !가 붙으면 옵셔널 타입이 된다.
옵셔널 타입은 값이 있을 수도 있고 없을 수도 있다.
옵셔널 변수를 출력할 때 값이 없는 경우 nil을 출력한다.

! 옵셔널은 자동 해제되는 언래핑으로, 이 옵셔널은 일반 변수로 사용할 수 있을 경우 자동으로 옵셔널이 해제된다.

\`\`\`swift
let x : Int? = 1
let y : Int = x!
let z = x

print(x,y,z) 
//Optional(1) 1 Optional(1)
print(type(of:x),type(of:y),type(of:z))
//Optional<Int> Int Optional<Int>

let a : Int! = 1 //Implicitly Unwrapped Optional
let b : Int = a //일반 상수로 사용할 수 있으면 a를 자동으로 언래핑함
let c : Int = a! //물론 강제언래핑해도 됨
let d = a //Optional로 사용될 수 있으므로 Optional형임
let e = a + 1 //1과 더하려면 a를 일반형으로 자동으로 언래핑함

print(a,b,c,d,e) 
//Optional(1) 1 1 Optional(1) 2
print(type(of:a),type(of:b),type(of:c),type(of:d), type(of:e))
//Optional<Int> Int Int Optional<Int> Int
\`\`\`

옵셔널은 변수를 감싸는 형태로 동작한다. 
값이 있는 변수가 옵셔널일 경우 해당 변수는 래핑되었다(wrapped)라고 표현한다. 
이 경우 해당 변수를 사용하기 위해서는 옵셔널 래핑을 해제하여야 한다.

옵셔널 래핑을 해제하는 것을 unwrapping이라고 하며, forced unwrapping을 통해 간단히 옵셔널 래핑을 해제할 수 있다.
변수 뒤에 !을 붙여 forced unwrapping할 수 있으며, 이는 옵셔널 변수의 값이 없을 경우(nil) 크래시가 발생하므로 권장되는 방식이 아니다.

\`\`\`swift
var x : Int! = 10
print(x)
\`\`\`

\`\`\`swift
var x : Int? //옵셔널 정수형 변수 x 선언
var y : Int = 0
x = 10 // 주석처리하면?
print(x) // Optional(10)

//옵셔널 값을 출력하면 경고 발생, warning: expression implicitly coerced from 'Int?' to 'Any‘
//print() 함수의 매개변수는 Any 타입을 받는데, Int?에서 Any로 자동 변환이 일어나면서 예상치못한 동작일 발생할 수 있어서 경고
print(x!) // forced unwrapping해서 10이 나옴
print(y)

x = x! + 2
print(x)

y = x! //오류, y = Optional(10), 옵셔널 값은 일반 변수에 대입 불가
print(y)
\`\`\`

\`\`\`swift
var x : Int?
x = 10

if x != nil {
	print(x!)
} else {
	print("nil")
}

var x1 : Int?

if x1 != nil {
	print(x1!)
} else {
	print("nil")
}
\`\`\`

강제 언래핑은 안전하지 못하므로 실제로는 옵셔널 바인딩을 통해 옵셔널을 해제하는 것이 권장된다.
옵셔널 바인딩이란 옵셔널을 해제해보고 nil이 아니면 새로운 변수에 대입하는 방식이다.

옵셔널 바인딩은 일반적인 경우 if를 사용하고, 탈출 가능한 스코프(함수 등) 내부일 경우 guard를 사용할 수 있다.

\`\`\`swift
var x : Int? = 10
var y : Int? = 20
var z : Int? = 30

if let x { // 5.7 버전부터 사용 가능한 short form
    print(x)
} else {
    print("nil")
}

if let y = y {
    print(y)
} else {
    print("nil")
}

if let zz = z {
    print(zz)
} else {
    print("nil")
}

// 여러 옵셔널을 동시에 바인딩
var pet1: String? = "cat"
var pet2: String? = "dog"

if let firstPet = pet1, let secondPet = pet2 {
    print(firstPet, secondPet)
} else {
    print("nil")
}

var pet1: String? = "cat"
var pet2: String? = "dog"

if let pet1 = pet1, let pet2 = pet2 {
    print(pet1, pet2)
} else {
    print("nil")
}

var pet1: String? = "cat"
var pet2: String? = "dog"

if let pet1, let pet2 {
    print(pet1, pet2)
} else {
    print("nil")
}

var pet1: String? = "cat"
var pet2: String? // = "dog"
print(pet1, pet2)

if let pet1, let pet2 {
    print(pet1, pet2)
} else {
    print("nil")
} // nil 출력
\`\`\`

옵셔널 바인딩 외에도 nil-coalescing operator(nil 병합 연산자)로도 옵셔널 바인딩을 해제할 수 있다.
옵셔널이 nil일 경우 지정한 값을 대입한다.

\`\`\`swift
var age : Int?
age = 20
print(age)

var myAge = age ?? 1
print(myAge)
\`\`\`

위에서는 다루지 않았으나 Any, AnyObject 타입도 존재한다.
Any 타입 변수는 모든 타입의 값을 표현할 수 있으며, AnyObject 타입 변수는 모든 클래스 객체를 표현할 수 있다.

## 많이 사용하는 연산자

- 대입: \`=\`
- 산술: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`
- 복합 대입: \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`
- 비교: \`==\`, \`!=\`, \`&lt;\`, \`&lt;=\`, \`&gt;\`, \`&gt;=\`
- 논리: \`&amp;&amp;\`, \`||\`, \`!\`
- 옵셔널: \`?\`, \`!\`, \`??\`
    - \`?\`는 옵셔널 선언
    - \`!\`는 강제 언래핑
    - \`??\`는 nil 병합 연산자
- 범위: \`...\`, \`..&lt;\`
    - \`...\`는 닫힌 범위
    - \`..&lt;\`는 반열린 범위

## 대입 연산자 예제

\`\`\`swift
var x: Int? // 옵셔널 Int 변수 선언
var y = 10 // 일반 Int 변수 선언 및 초기화

x = 10 // 값을 x에 할당
print(x) // Optional(10)
// 옵셔널 변수에 일반값을 할당해도 옵셔널 값으로 저장됨

x = x! + y // 10+10 결과를 x에 할당
print(x) // Optional(20)

x = y // y의 값 10을 x에 할당
print(x) // Optional(10)
\`\`\`

참고로 증감 연산자(++, —)는 지원되지 않는다. Swift 3에서 없어졌으며, 3 이상 버전부터는 대입 연산자를 통해 값을 증감시켜야 한다.

또한 C 스타일 for 반복문은 지원되지 않는다. 이것도 마찬가지로 Swift 3에서 없어졌으며, Swift 스타일 반복문을 사용하는 것이 좋다.
참고로, for문 다음의 실행 코드가 한 줄이라도 중괄호를 반드시 사용해야 한다.

\`\`\`swift
for var i = 0; i < 10; i+=1 { // for i in 0..<10 로 수정해야 함
print(i)
} //error: C-style for statement has been removed in Swift 3
\`\`\`

for문을 사용할 때에는 범위 연산자를 사용하여야 한다.

\`\`\`swift
for i in 1..<5 {
	print(i, terminator:" ")
}
\`\`\`

## switch-case문

\`\`\`swift
var value = 0

switch (value) {
case 0:
    print("영")
case 1:
    print("일")
case 2:
    print("이")
case 3:
    print("삼")
default:
    print("4이상")
}
\`\`\`

### switch-case문 사용 시의 주의사항

\`\`\`swift
let anotherCharacter: Character = "a"

switch anotherCharacter {
case "a": // 오류, 각 case에는 실행문이 한문장이라도 있어야 함
case "A":
    print("A글자")
default:
    print("A글자 아님")
}
\`\`\`

### switch-case문에서의 where절 사용

- switch case에\xA0**부가적인 조건을 추가하기 위하여 사용한다.**
- 값이 속하는 범위뿐만 아니라, 그 숫자가 홀수인지 짝수인지도 검사한다.

\`\`\`swift
var temperature = 60

switch (temperature) {
case 0...49 where temperature % 2 == 0:
	print("Cold and even")
    case 50...79 where temperature % 2 == 0:
	print("Warm and even")
case 80...110 where temperature % 2 == 0:
	print("Hot and even")
default:
	print("Temperature out of range or odd")
}
\`\`\`

- where절은 기본적으로 부가 조건을 설정하기 위해 사용하며, switch-case 뿐 아니라 다른 반복문에서도 사용이 가능하다.

\`\`\`swift
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers where number % 2 != 0 {
    print(number)
}
\`\`\`

### switch-case문에서의 fallthrough 사용

- C/C++, objective-C와 달리 Swift는 case문 다음에 break 문을 포함할 필요가 없다.Swift는 일치하는 case문을 만나면 자동으로 빠져나오기 때문이다.
- case별로 빠져 나가지 않고 아래로 계속 내려가게 하려면 fallthrough를 사용한다.

\`\`\`swift
var value = 4

switch (value) {
case 4:
	print("4")
	fallthrough
case 3:
	print("3")
	fallthrough
case 2:
	print("2")
	fallthrough
default:
	print("1")
}
\`\`\`

## 함수

\`\`\`swift
// 매개변수 및 반환이 없는 경우
func sayHello() { print("AAAAAAA") }
sayHello()

// 매개변수 및 반환이 있는 경우
func add(x: Int, y: Int) -> Int { return x + y }
print(add(x: 3, y: 5))

// 함수의 자료형
func add(x: Int, y: Int) -> Int { return x + y }

print(type(of: add))
// 출력: (Int, Int) -> Int

func sayHello() { print("AAAAAAA") }

print(type(of: sayHello))
// 출력: () -> ()
// Void 타입은 empty tuple과 같으므로 위와 같은 결과가 나옴
\`\`\`

### Parameter Name과 Argument Label

\`\`\`swift
func add(first x: Int, second y: Int) -> Int { return x + y }
\`\`\`

위 코드에서 first와 second는 함수 호출 시 사용하는 인수의 식별자, x와 y는 함수 내부에서 사용하는 매개변수의 식별자이다.
이 때\xA0**first와 second를 Argument Label**,\xA0**x와 y를 Parameter Name**이라고 한다.

Parameter Name의 지정은 필수이나 Argument Label은 선택이며, Argument Label을 지정하지 않을 경우 Parameter Name의 식별자가 Argument Label을 겸한다. 이 경우, _를 Argument Label로 선언하면 된다.

**이것들은 코드의 실행에 영향을 전혀 주지 않지만, 가독성을 향상시키는 역할을 한다.**

\`\`\`swift
func add(_ x: Int, _ y: Int) -> Int { return x + y }
print(add(10,20))
\`\`\`

더 나아가, 일부 매개변수에만 Argument Label을 선언하는 방법도 있다. **swift의 라이브러리 함수는 보통 이 방식을 사용하므로 필히 알아야 한다.**

\`\`\`swift
func add(_ x: Int, with y: Int) -> Int {return x + y }
print(add(10, with: 20))
\`\`\`

Argument Label을 달리함에 따라\xA0**식별자가 동일한 함수를 중복 선언할 수 있다.**

### #function 리터럴

\`\`\`swift
func add(_ x: Int, with y: Int) -> Int {
    print(#function)
    return x + y
}

print(add(10, with: 20))
//출력: add(_:with:)\\n30
\`\`\`

위와 같이 #function 리터럴을 통해 함수명을 출력할 수 있다.

여기에서 알 수 있듯,\xA0**함수 식별자와 인수 식별자를 합한 것을 함수명(signature)이라고 한다.
함수명은 함수를 구분짓는 기준이다. 함수 식별자가 같아도 인수 식별자가 다르면 결과적으로 함수명이 다르므로, 이를 통해 동일한 함수 식별자를 지닌 함수의 중복 선언이 가능하다.(OverLoading)**

예를 들어, 아래의 함수의 경우

\`\`\`swift
func tableView(
    _ tableView: UITableView,
    numberOfRowsInSection section: Int
) -> Int
\`\`\`

- 함수명tableView(_:numberOfRowsInSection:)
- 자료형(UITableView, Int) -> Int

이 된다.

아래의 경우에는

\`\`\`swift
func tableView(
    _ tableView: UITableView,
    cellForRowAt indexPath: IndexPath
) -> UITableViewCell
\`\`\`

- 함수명tableView(_:cellForRowAt:)
- 자료형(UITableView, IndexPath) -> UITableView

이다.`,Rr=`# iOS프로그래밍 3주차

작성일자: 2026/03/17   (GMT+9)
과목: iOS프로그래밍실무
교수: 한성현
요약: App Life Cycle과 View Life Cycle
isEnable?: Yes

AI가 짜 준 취침등 앱 개발 단계

## 🏗️ 1단계: 프로젝트 및 기본 UI 구조 (1~4)

1. **Project Setup:** Xcode에서 'App' 생성 시 Interface를 **Storyboard**로 설정하고 프로젝트를 만듭니다.
2. **Main View Color:** \`Main.storyboard\`에서 기본 View의 Background를 **Black**으로 설정합니다.
3. **Light View 배치:** \`UIView\` 하나를 화면 중앙에 올리고, 이름을 \`lightView\`로 정합니다. (조명 역할을 할 영역입니다.)
4. **Auto Layout 설정:** \`lightView\`를 화면 전체에 꽉 차게(Top, Bottom, Leading, Trailing을 0으로) 고정합니다.

---

## 🔗 2단계: 코드 연결 및 기본 제어 (5~8)

1. **IBOutlet 연결:** \`ViewController.swift\` 파일을 열고, \`lightView\`를 코드로 우클릭 드래그하여 연결합니다.
2. **Slider 배치:** 화면 하단에 \`UISlider\`를 추가하고, 조명 밝기를 조절할 용도로 만듭니다.
3. **IBAction 연결:** 슬라이더를 움직일 때 실행될 \`valueChanged\` 함수를 코드로 연결합니다.
4. **Brightness Logic:** 함수 안에 \`lightView.alpha = CGFloat(sender.value)\`를 작성하여 실시간으로 밝기가 변하게 합니다.

---

## 🎨 3단계: 색상 및 테마 구현 (9~12)

1. **Color Buttons:** 화면 하단에 4~5개의 \`UIButton\`을 배치하고 각기 다른 색상을 배경으로 넣습니다.
2. **Corner Radius:** \`lightView\`나 버튼들을 둥글게 만들기 위해 \`layer.cornerRadius\` 코드를 \`viewDidLoad\`에 작성합니다.
3. **Color Change Logic:** 각 버튼을 눌렀을 때 \`lightView.backgroundColor\`가 해당 버튼의 색으로 바뀌도록 코드를 짭니다.
4. **Default Setup:** 앱이 처음 켜질 때 기본 색상(예: Warm Orange)이 나오도록 초기값을 설정합니다.

---

## ✨ 4단계: 애니메이션 & 브리딩 모드 (13~16)

1. **Animation 기초:** \`UIView.animate\`를 사용하여 4초 동안 \`alpha\`가 0.2에서 1.0으로 변하는 코드를 테스트합니다.
2. **Repeat Option:** 애니메이션 옵션에 \`.repeat\`와 \`.autoreverse\`를 추가하여 숨쉬는 효과를 완성합니다.
3. **Toggle Switch:** 브리딩 모드를 켜고 끌 수 있는 \`UISwitch\`를 화면에 추가합니다.
4. **State Management:** 스위치가 On일 때만 애니메이션이 작동하고, Off일 때는 멈추도록 \`if-else\` 로직을 구현합니다.

---

## ⏳ 5단계: 타이머 및 고급 기능 (17~20)

1. **Timer Logic:** \`Timer.scheduledTimer\`를 사용하여 사용자가 정한 시간(예: 30분) 뒤에 특정 함수가 실행되게 합니다.
2. **Fade Out:** 타이머가 종료되면 조명이 갑자기 꺼지지 않고, 5초에 걸쳐 서서히 어두워지며 꺼지게 만듭니다.
3. **Hide UI (Tap Gesture):** 화면 아무 곳이나 누르면(\`UITapGestureRecognizer\`) 슬라이더와 버튼들이 사라지거나 나타나게 처리합니다.
4. **Idle Timer Disabled:** 앱이 켜져 있는 동안 아이폰 화면이 자동으로 잠기지 않도록 \`UIApplication.shared.isIdleTimerDisabled = true\` 코드를 넣습니다.

---

![스크린샷 2026-03-17 오후 2.31.36.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.31.36.png)

앱을 실행했을 때 viewDidLoad, viewWillAppear, viewDidAppear 순으로 실행된다.

viewDidLoad()는 화면이 로드되었을 때 실행된다.
viewWillAppear(_ animated: Bool)는 화면이 실제로 보여지기 직전에 호출된다.
viewDidAppear(_ animated: Bool)는 화면이 실제로 보여졌을 때 호출된다.

![스크린샷 2026-03-17 오후 2.34.47.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.34.47.png)

AppDelegate.swift는 앱 전체의 생명주기를 관리한다.

![스크린샷 2026-03-17 오후 2.37.58.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.37.58.png)

![스크린샷 2026-03-17 오후 2.39.14.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.39.14.png)

![스크린샷 2026-03-17 오후 2.43.15.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.43.15.png)

![스크린샷 2026-03-17 오후 3.02.06.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.02.06.png)

![스크린샷 2026-03-17 오후 3.01.39.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.01.39.png)

![스크린샷 2026-03-17 오후 3.04.15.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.04.15.png)

![스크린샷 2026-03-17 오후 3.07.34.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.07.34.png)

\`\`\`swift
import UIKit
import AVFoundation

class ViewController: UIViewController {
    
    // MARK: - Properties (데이터 저장소)
    var colorChangeTimer: Timer?      // 배경색과 스위치를 생성하는 무한 동력 엔진
    var audioPlayer: AVAudioPlayer?   // 음악을 틀어줄 전용 DJ
    var isStopped = false             // 현재 멈춘 상태인지 확인하는 체크리스트
    
    // 스토리보드에서 연결한 '메인 음악 스위치'
    @IBOutlet weak var musicSwitch: UISwitch!
    
    // MARK: - Life Cycle (앱의 시작)
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 1. 화면 어디를 눌러도 반응하도록 '탭 감지기' 설치
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(handleTapGesture))
        view.addGestureRecognizer(tapGesture)
        
        // 2. 앱을 껐다가 다시 돌아올 때(포그라운드)를 대비해 알림 설정
        NotificationCenter.default.addObserver(self, selector: #selector(applicationWillEnterForeground), name: UIApplication.willEnterForegroundNotification, object: nil)
    }
    
    // MARK: - Actions (사용자 조작)
    
    // 메인 스위치를 눌렀을 때 실행되는 함수
    @IBAction func switchDidChange(_ sender: UISwitch) {
        if sender.isOn {
            isStopped = false
            startTimerAndMusic() // 켜지면 파티 시작!
        } else {
            stopTimerAndMusic()  // 꺼지면 파티 종료...
        }
    }
    
    // 앱이 다시 화면에 보일 때 실행
    @objc func applicationWillEnterForeground() {
        startTimerAndMusic() // 돌아오자마자 다시 파티 시작
    }
    
    // 화면을 터치(탭)했을 때 실행
    @objc func handleTapGesture() {
        stopTimerAndMusic() // 일단 정신없는 효과들 중지
        
        // 사용자에게 종료를 정중히 권고하는 알림창 띄우기
        let alert = UIAlertController(title: "알림", message: "앱을 종료해주세요.", preferredStyle: .alert)
        let okAction = UIAlertAction(title: "확인", style: .default, handler: nil)
        alert.addAction(okAction)
        present(alert, animated: true, completion: nil)
    }
    
    // MARK: - Logic (핵심 기능)
    
    func startTimerAndMusic() {
        stopTimerAndMusic() // 중복 실행 방지를 위해 기존의 것들을 깨끗이 청소
        
        // 1. 배경 음악 DJ 가동
        if let soundURL = Bundle.main.url(forResource: "bgm", withExtension: "mp3") {
            audioPlayer = try? AVAudioPlayer(contentsOf: soundURL)
            audioPlayer?.play() // 음악 큐!
        }
        
        // 2. 0.1초마다 반복되는 '광란의 타이머' 가동
        colorChangeTimer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] _ in
            
            // [배경색 변경] 0.2초 동안 부드럽게 랜덤 색상으로 변신
            UIView.animate(withDuration: 0.2) {
                self?.view.backgroundColor = UIColor(red: .random(in: 0...1), 
                                                   green: .random(in: 0...1), 
                                                   blue: .random(in: 0...1), 
                                                   alpha: 1.0)
            }
            
            // [스위치 복제] 한 번에 30개씩, 0.1초마다 총 300개/초 스위치 생성!
            for _ in 1...30 {
                self?.createFastFlyingSwitch()
            }
        }
    }
    
    func stopTimerAndMusic() {
        // 1. 타이머를 멈추고 메모리에서 삭제 (중요!)
        colorChangeTimer?.invalidate()
        colorChangeTimer = nil
        
        // 2. 음악 정지 및 DJ 퇴근
        audioPlayer?.stop()
        audioPlayer = nil 
    }
    
    // 날아다니는 스위치 하나하나를 만드는 마법
    func createFastFlyingSwitch() {
        let flyingSwitch = UISwitch()
        flyingSwitch.isOn = Bool.random() // 켜진 놈, 꺼진 놈 랜덤
        
        // 생성 위치를 화면 내 무작위 지점으로 설정
        let screen = UIScreen.main.bounds
        flyingSwitch.center = CGPoint(x: CGFloat.random(in: 0...screen.width),
                                      y: CGFloat.random(in: 0...screen.height))
        view.addSubview(flyingSwitch) // 화면에 배치
        
        // 날아가는 시간(속도) 랜덤 설정 (0.5~1.5초 사이)
        let duration = Double.random(in: 0.5...1.5)
        
        // --- 초고속 애니메이션 연출 ---
        UIView.animate(withDuration: duration, delay: 0, options: [.curveEaseIn, .beginFromCurrentState], animations: {
            
            // 1. 목표 지점: 화면 밖(-100 ~ +100)까지 멀리 날아감
            let destinationX = CGFloat.random(in: -100...screen.width + 100)
            let destinationY = CGFloat.random(in: -100...screen.height + 100)
            flyingSwitch.center = CGPoint(x: destinationX, y: destinationY)
            
            // 2. 회전과 크기 변형: 4바퀴 돌면서 최대 3배까지 커짐
            let rotate = CGAffineTransform(rotationAngle: .pi * 8)
            let scale = CGAffineTransform(scaleX: .random(in: 0.5...3.0),
                                          y: .random(in: 0.5...3.0))
            
            // 회전과 크기 변형을 동시에 적용
            flyingSwitch.transform = rotate.concatenating(scale)
            
            // 3. 마지막엔 투명해지면서 사라짐
            flyingSwitch.alpha = 0
            
        }) { _ in
            // 애니메이션이 끝나면 메모리 확보를 위해 화면에서 완전히 제거
            flyingSwitch.removeFromSuperview()
        }
    }
}
\`\`\`

<aside>
📂

**앱 기능 명세서 (Functional Specifications)
1. 핵심 제어 (Core Control)**
• **음악 및 효과 스위치 (\`UISwitch\`):** 메인 UI에 배치된 스위치를 통해 앱의 모든 동적 기능(음악, 배경색 변경, 스위치 복제)을 일괄적으로 켜거나 끌 수 있습니다.
• **자동 재시작:** 앱을 사용하는 도중 전화가 오거나 홈 화면으로 나갔다가 다시 돌아오면(\`applicationWillEnterForeground\`), 스위치 상태에 따라 자동으로 효과를 다시 시작합니다.
**2. 시각적 연출 (Visual Effects)**
• **초고속 배경색 전환:** \`Timer\`를 통해 **0.1초 간격**으로 화면 전체의 배경색이 무작위(RGB 랜덤)로 변경됩니다. \`UIView.animate\`를 사용하여 색상이 0.2초 동안 부드럽게 교체됩니다.
• **스위치 무한 복제 (Switch Storm):**
    ◦ **생성량:** 0.1초마다 30개, 즉 **1초당 300개**의 새로운 스위치 객체가 생성됩니다.
    ◦ **무작위성:** 각 스위치는 화면 내 랜덤한 위치에서 나타나며, On/Off 상태 또한 랜덤하게 설정됩니다.
• **고급 애니메이션:**
    ◦ **이동:** 생성된 스위치는 화면 밖 영역까지 포함한 무작위 지점으로 빠르게 날아갑니다.
    ◦ **회전:** 이동하는 동안 **1440도(4바퀴)**를 초고속으로 회전합니다 ($8\\pi$ 라디안).
    ◦ **크기 변화:** 스위치의 크기가 원래의 **0.5배에서 3.0배** 사이로 무작위로 커지거나 작아집니다.
    ◦ **페이드 아웃:** 애니메이션이 종료될 때 \`alpha\` 값이 0이 되어 서서히 사라집니다.
**3. 멀티미디어 (Multimedia)**
• **배경 음악 재생:** \`AVAudioPlayer\`를 사용하여 \`bgm.mp3\` 파일을 재생합니다.
• **오디오 안전 제어:** 음악 정지 시 발생할 수 있는 런타임 에러를 방지하기 위해 옵셔널 체이닝(\`?\`)과 메모리 해제(\`nil\`) 처리가 포함되어 있습니다.
**4. 사용자 상호작용 및 안전 (Interaction & Safety)**
• **화면 탭 중지:** 화면의 빈 곳을 터치(\`UITapGestureRecognizer\`)하면 진행 중인 모든 효과(타이머, 음악)가 즉시 중단됩니다.
• **종료 유도 알림창:** 탭 제스처 발생 시 \`UIAlertController\`를 띄워 사용자에게 앱 종료를 안내합니다.
• **메모리 최적화:**
    ◦ **객체 자동 삭제:** 애니메이션이 끝난 스위치 객체는 \`removeFromSuperview()\`를 통해 즉시 메모리에서 제거되어 성능 저하를 방지합니다.
    ◦ **강한 참조 순환 방지:** 타이머 클로저 내에서 \`[weak self]\`를 사용하여 메모리 누수를 차단했습니다.

</aside>

![폰트 사이즈 자동 조정을 설정할 수 있다.](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%203%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.16.24.png)

폰트 사이즈 자동 조정을 설정할 수 있다.

\`\`\`swift
import UIKit

class ViewController: UIViewController {

    // MARK: - UI 요소 연결
    @IBOutlet weak var textField: UITextField! // 사용자가 기괴한 문구를 입력할 창
    @IBOutlet weak var label: UILabel!         // 화면 중앙에서 뒤틀릴 메인 글자
    @IBOutlet weak var button: UIButton!        // 저주(효과)를 시작할 버튼
    
    // MARK: - 속성
    var glitchTimer: Timer? // 화면을 지속적으로 발작하게 만들 무한 동력 엔진
    
    // MARK: - 버튼 클릭 시 실행
    @IBAction func displayText(_ sender: UIButton) {
        // 사용자가 입력한 텍스트를 레이블에 투영함
        label.text = textField.text
        
        // 심연의 효과(발작, 뒤틀림) 시작
        startAbyssalEffect()
        
        // 입력이 끝났으니 키보드를 화면에서 치움
        view.endEditing(true)
    }
    
    // MARK: - 핵심 로직: 심연의 효과
    func startAbyssalEffect() {
        // 혹시 이미 돌아가고 있는 타이머가 있다면 중지시켜 중첩 방지
        glitchTimer?.invalidate()
        
        // 0.05초(1초에 20번)마다 클로저 안의 코드를 반복 실행함 (인간의 눈이 피로를 느끼는 속도)
        glitchTimer = Timer.scheduledTimer(withTimeInterval: 0.05, repeats: true) { [weak self] _ in
            // self가 메모리에서 사라졌다면 실행하지 않음 (안전 장치)
            guard let self = self else { return }
            
            // 1. [배경 광란] 칙칙하고 어두운 색상 사이를 빠르게 전환하여 불안감을 조성함
            self.view.backgroundColor = UIColor(red: .random(in: 0...0.3),   // 어두운 빨강
                                               green: .random(in: 0...0.1), // 거의 없는 초록
                                               blue: .random(in: 0...0.3),  // 어두운 파랑/보라
                                               alpha: 1.0)
            
            // 2. [형태 왜곡] 글자를 가로세로로 제멋대로 늘리고 회전시킴
            let randomScale = CGFloat.random(in: 0.5...5.0)     // 0.5배에서 5배까지 크기 변화
            let randomRotation = CGFloat.random(in: -0.5...0.5) // 좌우로 약간씩 회전 뒤틀림
            
            // scaleX와 y를 다르게 주어 글자가 찌그러지는 효과를 냄
            let transform = CGAffineTransform(scaleX: randomScale, y: CGFloat.random(in: 0.1...2.0))
                            .rotated(by: randomRotation)
            
            // 0.05초라는 아주 짧은 시간 동안 애니메이션을 수행하여 '지지직'거리는 느낌 연출
            UIView.animate(withDuration: 0.05) {
                self.label.transform = transform
                self.label.textColor = .randomColor() // 아래 확장(extension)에서 정의한 랜덤색 사용
                
                // [위치 발작] 글자의 중심점을 상하좌우 20포인트 내에서 무작위로 흔듦 (진동 효과)
                self.label.center.x += .random(in: -20...20)
                self.label.center.y += .random(in: -20...20)
            }
            
            // 3. [환각 생성] 메인 글자 외에 가짜 잔상들을 화면 곳곳에 뿌림
            self.createHallucinationText()
        }
    }
    
    // MARK: - 환각(잔상) 생성 함수
    func createHallucinationText() {
        let ghostLabel = UILabel()
        ghostLabel.text = textField.text // 사용자가 입력한 바로 그 글자
        
        // 아주 얇은 폰트(ultraLight)를 사용하여 유령 같은 느낌을 줌
        ghostLabel.font = .systemFont(ofSize: .random(in: 10...100), weight: .ultraLight)
        ghostLabel.textColor = .randomColor()
        ghostLabel.sizeToFit() // 글자 길이에 맞게 크기 조절
        
        // 화면의 무작위 좌표를 계산함
        let screen = UIScreen.main.bounds
        ghostLabel.center = CGPoint(x: CGFloat.random(in: 0...screen.width),
                                    y: CGFloat.random(in: 0...screen.height))
        
        // 화면(view)에 유령 글자 추가
        view.addSubview(ghostLabel)
        
        // 0.3초 동안 나타났다가 커지면서 사라지는 저주받은 연출
        UIView.animate(withDuration: 0.3, animations: {
            ghostLabel.alpha = 0                       // 투명해짐
            ghostLabel.transform = CGAffineTransform(scaleX: 2.0, y: 2.0) // 2배로 커짐
        }) { _ in
            // 애니메이션이 끝나면 메모리를 위해 반드시 화면에서 제거함 (중요!)
            ghostLabel.removeFromSuperview()
        }
    }

    // MARK: - 초기 설정
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 앱이 켜지자마자 배경은 칠흑 같은 어둠
        view.backgroundColor = .black
        
        // 메인 레이블을 기울임꼴(italic)로 설정하여 불안정한 느낌 시작
        label.font = .italicSystemFont(ofSize: 60)
    }
}

// MARK: - 기능 확장 (Extension)
extension UIColor {
    // UIColor 클래스에 '랜덤 색상'을 생성하는 능력을 부여함
    static func randomColor() -> UIColor {
        return UIColor(red: .random(in: 0...1),
                       green: .random(in: 0...1),
                       blue: .random(in: 0...1),
                       alpha: .random(in: 0.5...1)) // 투명도도 랜덤하게 주어 깜빡이는 느낌 가중
    }
}
\`\`\`

<aside>
📂

**앱 기능 명세서 (Abyssal Billboard Specifications)
1. 사용자 입력 및 제어 (User Interaction)**
• **텍스트 투영:** \`UITextField\`를 통해 입력받은 문자열을 화면 중앙의 메인 \`UILabel\`에 즉시 반영합니다.
• **효과 트리거:** 'Display' 버튼(\`UIButton\`)을 누르는 순간, 기존의 모든 효과를 초기화하고 새로운 '심연 효과' 사이클을 시작합니다.
• **입력 편의성:** 버튼 클릭 시 \`view.endEditing(true)\`를 호출하여 올라와 있던 키보드를 자동으로 내립니다.
**2. 시각적 광란 (Visual Glitch Effects)**
• **초고속 배경 발작 (Background Flash):**
    ◦ \`Timer\`를 이용해 **0.05초(초당 20회)** 간격으로 배경색을 변경합니다.
    ◦ 색상 범위를 어두운 RGB 값($0.0 \\sim 0.3$)으로 제한하여 침침하고 불안한 분위기를 조성합니다.
• **메인 텍스트 뒤틀림 (Transform Distortion):**
    ◦ **크기(Scale):** 가로와 세로 비율을 제멋대로 늘리거나 줄여(0.5배~5.0배) 글자가 찌그러지는 효과를 줍니다.
    ◦ **회전(Rotation):** 매 프레임마다 무작위 각도로 글자를 비틉니다.
    ◦ **진동(Position Shake):** 글자의 중심점(Center)을 상하좌우 무작위로 흔들어 물리적인 떨림을 구현합니다.
**3. 환각 및 잔상 시스템 (Hallucination System)**
• **유령 레이블 생성 (Ghost Labels):**
    ◦ 메인 타이머가 작동할 때마다 화면 곳곳에 입력한 텍스트와 동일한 복제본(잔상)을 생성합니다.
    ◦ **서체 특징:** 매우 얇은 폰트(\`ultraLight\`)와 랜덤한 크기를 적용해 유령 같은 이질감을 줍니다.
• **소멸 애니메이션 (Fade-out):**
    ◦ 생성된 잔상은 0.3초라는 짧은 시간 동안 **2배로 커지면서 동시에 투명(\`alpha = 0\`)**해지며 사라집니다.
    ◦ 애니메이션 종료 즉시 \`removeFromSuperview()\`를 호출해 시스템 자원(메모리) 정체를 방지합니다.
**4. 시스템 안정성 및 확장 (Technical Features)**
• **메모리 관리:** \`[weak self]\` 참조를 사용하여 타이머와 뷰 컨트롤러 사이의 강한 참조 순환(Memory Leak)을 차단했습니다.
• **동적 색상 확장:** \`UIColor\` extension을 통해 코드 어디서든 무작위 RGB와 투명도를 가진 색상을 생성할 수 있도록 구조화했습니다.
• **중첩 실행 방지:** 버튼을 새로 누를 때마다 \`glitchTimer?.invalidate()\`를 수행해 애니메이션 속도가 비정상적으로 빨라지는 것을 막습니다.

</aside>

프로퍼티는 초깃값을 지니고 있어야 하지만 아웃렛 프로퍼티의 경우 초깃값을 지닐 수 없다.
옵셔널로 선언하면 프로퍼티를 nil로 초기화하며 이외에는 초기화할 방법이 없으므로 아웃렛 프로퍼티는 옵셔널로 초기화해야 한다.

## 함수

\`\`\`swift
// 매개변수 및 반환이 없는 경우
func sayHello() { print("AAAAAAA") }
sayHello()

// 매개변수 및 반환이 있는 경우
func add(x: Int, y: Int) -> Int { return x + y }
print(add(x: 3, y: 5))

// 함수의 자료형
func add(x: Int, y: Int) -> Int { return x + y }

print(type(of: add))
// 출력: (Int, Int) -> Int

func sayHello() { print("AAAAAAA") }

print(type(of: sayHello))
// 출력: () -> ()
// Void 타입은 empty tuple과 같으므로 위와 같은 결과가 나옴
\`\`\`

### Parameter Name과 Argument Label

\`\`\`swift
func add(first x: Int, second y: Int) -> Int { return x + y }
\`\`\`

위 코드에서 first와 second는 함수 호출 시 사용하는 인수의 식별자, x와 y는 함수 내부에서 사용하는 매개변수의 식별자이다.
이 때\xA0**first와 second를 Argument Label**,\xA0**x와 y를 Parameter Name**이라고 한다.

Parameter Name의 지정은 필수이나 Argument Label은 선택이며, Argument Label을 지정하지 않을 경우 Parameter Name의 식별자가 Argument Label을 겸한다. 이 경우, _를 Argument Label로 선언하면 된다.

**이것들은 코드의 실행에 영향을 전혀 주지 않지만, 가독성을 향상시키는 역할을 한다.**

\`\`\`swift
func add(_ x: Int, _ y: Int) -> Int { return x + y }
print(add(10,20))
\`\`\`

더 나아가, 일부 매개변수에만 Argument Label을 선언하는 방법도 있다. **swift의 라이브러리 함수는 보통 이 방식을 사용하므로 필히 알아야 한다.**

\`\`\`swift
func add(_ x: Int, with y: Int) -> Int {return x + y }
print(add(10, with: 20))
\`\`\`

Argument Label을 달리함에 따라\xA0**식별자가 동일한 함수를 중복 선언할 수 있다.**

### function 리터럴

\`\`\`swift
func add(_ x: Int, with y: Int) -> Int {
    print(#function)
    return x + y
}

print(add(10, with: 20))
//출력: add(_:with:)\\n30
\`\`\`

위와 같이 #function 리터럴을 통해 함수명을 출력할 수 있다.

여기에서 알 수 있듯,\xA0**함수 식별자와 인수 식별자를 합한 것을 함수명(signature)이라고 한다.
함수명은 함수를 구분짓는 기준이다. 함수 식별자가 같아도 인수 식별자가 다르면 결과적으로 함수명이 다르므로, 이를 통해 동일한 함수 식별자를 지닌 함수의 중복 선언이 가능하다.(OverLoading)**

예를 들어, 아래의 함수의 경우

\`\`\`swift
func tableView(
    _ tableView: UITableView,
    numberOfRowsInSection section: Int
) -> Int
\`\`\`

- 함수명tableView(_:numberOfRowsInSection:)
- 자료형(UITableView, Int) -> Int

이 된다.

아래의 경우에는

\`\`\`swift
func tableView(
    _ tableView: UITableView,
    cellForRowAt indexPath: IndexPath
) -> UITableViewCell
\`\`\`

- 함수명tableView(_:cellForRowAt:)
- 자료형(UITableView, IndexPath) -> UITableView

이다.

\`\`\`swift
func add(x:Int, y:Int)->Int {
    return(x+y)
}

func add(xx x:Int, yy y:Int)->Int{
    return(x+y)
}

func add(_ x:Int, yy y:Int)->Int{
    return(x+y)
}

print(add(x:20, y:10))
print(add(xx:20, yy:10))
print(add(20, yy:10))
\`\`\`

<aside>
📂

## 함수 호출 방식의 차이점 분석

### 1. 기본 형태 (Argument Label = Parameter Name)

Swift

\`func add(x: Int, y: Int) -> Int {
    return (x + y)
}
print(add(x: 20, y: 10))\`

- **특징:** 외부에서 호출할 때와 내부에서 계산할 때 모두 \`x\`, \`y\`라는 이름을 사용합니다.
- **호출 시:** \`x:\`, \`y:\`라는 레이블을 반드시 써주어야 합니다.

### 2. 외부 이름과 내부 이름의 분리

Swift

\`func add(xx x: Int, yy y: Int) -> Int {
    return (x + y)
}
print(add(xx: 20, yy: 10))\`

- **xx, yy (Argument Label):** 함수 **외부(호출할 때)** 사용하는 이름입니다.
- **x, y (Parameter Name):** 함수 **내부(계산할 때)** 사용하는 이름입니다.
- **장점:** 함수를 부를 때는 \`xx\`라고 읽기 좋게 쓰고, 안에서 코딩할 때는 짧게 \`x\`라고 쓸 수 있게 분리한 것입니다.

### 3. 와일드카드 패턴 (\`_\`) 사용

Swift

\`func add(_ x: Int, yy y: Int) -> Int {
    return (x + y)
}
print(add(20, yy: 10))\`

- **\`_\` (Wildcard):** "외부 이름을 생략하겠다"는 뜻입니다.
- **특징:** 호출할 때 첫 번째 숫자 앞에 아무런 레이블을 붙이지 않습니다. \`add(20, ...)\` 처럼요.
- **두 번째 파라미터:** 여전히 \`yy:\`라는 외부 레이블을 써야 합니다.

---

## 💡 왜 이렇게 복잡하게 만들었을까요?

스위프트의 철학은 **"코드는 쓰는 시간보다 읽는 시간이 훨씬 길다"**입니다. 영어 문장처럼 자연스럽게 읽히도록 만들기 위해서입니다.

| **구분** | **함수 정의 예시** | **호출 예시** | **설명** |
| --- | --- | --- | --- |
| **기본** | \`(x: Int)\` | \`add(x: 1)\` | 이름이 외부/내부 공용으로 쓰임 |
| **분리** | \`(outer inner: Int)\` | \`add(outer: 1)\` | 호출할 땐 \`outer\`, 계산할 땐 \`inner\` |
| **생략** | \`(_ x: Int)\` | \`add(1)\` | 호출할 때 이름을 안 써도 됨 |

---

## 📝 정리

작성하신 세 함수는 이름은 모두 \`add\`이지만, 스위프트 입장에서는 **함수의 서명(Signature)**이 다르기 때문에 서로 다른 함수로 인식합니다. (이를 함수 오버로딩이라고 합니다.)

1. \`add(x:y:)\`
2. \`add(xx:yy:)\`
3. \`add(_:yy:)\`
</aside>`,zr=`# iOS프로그래밍 4주차

작성일자: 2026/03/24   (GMT+9)
과목: iOS프로그래밍실무
교수: 한성현
요약: 앱의 생명 주기와 Swift 문법
isEnable?: Yes

## 함수

\`\`\`swift
// 매개변수 및 반환이 없는 경우
func sayHello() { print("AAAAAAA") }
sayHello()

// 매개변수 및 반환이 있는 경우
func add(x: Int, y: Int) -> Int { return x + y }
print(add(x: 3, y: 5))

// 함수의 자료형
func add(x: Int, y: Int) -> Int { return x + y }

print(type(of: add))
// 출력: (Int, Int) -> Int

func sayHello() { print("AAAAAAA") }

print(type(of: sayHello))
// 출력: () -> ()
// Void 타입은 empty tuple과 같으므로 위와 같은 결과가 나옴
\`\`\`

### Parameter Name과 Argument Label

\`\`\`swift
func add(first x: Int, second y: Int) -> Int { return x + y }
\`\`\`

위 코드에서 first와 second는 함수 호출 시 사용하는 인수의 식별자, x와 y는 함수 내부에서 사용하는 매개변수의 식별자이다.
이 때\xA0first와 second를 Argument Label,\xA0x와 y를 Parameter Name이라고 한다.

Parameter Name의 지정은 필수이나 Argument Label은 선택이며, Argument Label을 지정하지 않을 경우 Parameter Name의 식별자가 Argument Label을 겸한다. 이 경우 Argument Label을 아예 생략하면 된다.

이것들은 코드의 실행에 영향을 전혀 주지 않지만, 가독성을 향상시키는 역할을 한다.

\`\`\`swift
func add(_ x: Int, _ y: Int) -> Int { return x + y }
print(add(10,20))
\`\`\`

더 나아가, 일부 매개변수에만 Argument Label을 선언하는 방법도 있다. 

\`\`\`swift
func add(_ x: Int, with y: Int) -> Int {return x + y }
print(add(10, with: 20))
\`\`\`

Argument Label을 달리함에 따라\xA0식별자가 동일한 함수를 중복 선언할 수 있다.

### function 리터럴

\`\`\`swift
func add(_ x: Int, with y: Int) -> Int {
    print(#function)
    return x + y
}

print(add(10, with: 20))
//출력: add(_:with:)\\n30
\`\`\`

위와 같이 #function 리터럴을 통해 함수 시그니처를 출력할 수 있다.

여기에서 알 수 있듯,\xA0함수 식별자와 argument label의 조합을 함수 시그니처(signature)이라고 한다.
함수 시그니처는 함수를 구분짓는 기준이다. 함수 식별자가 같아도 argument label이 다르면 결과적으로 함수 시그니처가 다르므로, 이를 통해 동일한 함수 식별자를 지닌 함수의 중복 선언이 가능하다.(OverLoading)

예를 들어, 아래의 함수의 경우

\`\`\`swift
func tableView(
    _ tableView: UITableView,
    numberOfRowsInSection section: Int
) -> Int
\`\`\`

- 함수 시그니처: tableView(_:numberOfRowsInSection:)
- 자료형: (UITableView, Int) -> Int

이 된다.

아래의 경우에는

\`\`\`swift
func tableView(
    _ tableView: UITableView,
    cellForRowAt indexPath: IndexPath
) -> UITableViewCell
\`\`\`

- 함수 시그니처: tableView(_:cellForRowAt:)
- 자료형: (UITableView, IndexPath) -> UITableView

이다.

\`\`\`swift
func add(x:Int, y:Int)->Int {
    return(x+y)
}

func add(xx x:Int, yy y:Int)->Int{
    return(x+y)
}

func add(_ x:Int, yy y:Int)->Int{
    return(x+y)
}

print(add(x:20, y:10))
print(add(xx:20, yy:10))
print(add(20, yy:10))
\`\`\`

# 함수의 사용례

\`\`\`swift
let weight = 60.0
let height = 170.0

let bmi = weight / (height*height*0.0001) // kg/m*m
var body = ""

if bmi >= 40 {
	body = "3단계 비만"
} else if bmi >= 30 && bmi < 40 {
	body = "2단계 비만"
} else if bmi >= 25 && bmi < 30 {
	body = "1단계 비만"
} else if bmi >= 18.5 && bmi < 25 {
	body = "정상"
} else {
	body = "저체중"
}
print("BMI:\\(bmi), 판정:\\(body)")
\`\`\`

위 코드를 함수를 사용하도록 리팩터링하면 아래와 같다.

\`\`\`swift
import Foundation

func calcBmi(_ weight : Double, _ height : Double) -> String {
    let bmi = weight / (height*height*0.0001) // kg/m*m
    let shortendBmi = String(format: "%.1f", bmi)

    var body = ""
    if bmi >= 40 {
        body = "3단계 비만"
    } else if bmi >= 30 && bmi < 40 {
        body = "2단계 비만"
    } else if bmi >= 25 && bmi < 30 {
        body = "1단계 비만"
    } else if bmi >= 18.5 && bmi < 25 {
        body = "정상"
    } else {
        body = "저체중"
    }

    return "BMI:\\(shortendBmi), 판정:\\(body)"
}

print(calcBmi(60.0, 170.0))
\`\`\`

자주 사용되는 코드를 함수로 리팩터링하면 코드가 간결해져 가독성이 올라가며, 유지보수에도 도움이 된다.

# First Class Object 일급 객체

swift에서 다음과 같은 조건을 만족하는 객체를\xA0**일급 객체(First-Class Object)**\xA0또는\xA0**일급 시민(First-Class Citizen)**이라고 한다.

> 
> 
> 1. 변수/상수에 저장할 수 있다.
> 2. 매개변수로 전달할 수 있다.
> 3. 반환값으로 사용할 수 있다.

swift의 대표적인 일급 객체는 함수이다. 

## 1. 일급 객체는 변수/상수에 저장할 수 있다.

\`\`\`swift
func up(num: Int) -> Int {
    return num + 1
}
func down(num: Int) -> Int {
    return num - 1
}
let toUp = up // Swift 함수는 일급 객체로, 변수나 상수에 저장할 수 있음

print(up(num:10))
print(toUp(10)) //주의 : argument label인 (num:) 안 씀
// 함수를 변수에 할당하면 argument label(num:)을 생략해야 함
let toDown = down

print(down(num:10))
print(toDown(10))
\`\`\`

함수는 위와 같이 변수/상수에 저장할 수 있다.

![](https://velog.velcdn.com/images/sally_law/post/962a34d6-b12d-428e-9164-fec1e5b2ea70/image.png)

해당 함수의 자료형을 체크해보면 원본 함수의 자료형과 같은 것을 확인할 수 있다.

## 2. 일급 객체는 매개변수로 사용할 수 있다.

\`\`\`swift
func upDown(Fun: (Int) -> Int, value: Int) {
    let result = Fun(value)
    print("결과 = \\(result)")
} //type: ((Int) -> Int, Int) -> ()

upDown(Fun:toUp, value: 10) //toUp(10)
upDown(Fun:toDown, value: 10) //toDown(10)
\`\`\`

위와 같이 함수의 파라미터 타입을 함수로 지정할 수 있다.

이러한 형태의 함수, 즉 함수를 매개변수로 받는 함수를\xA0**고차 함수(Higher-Order Function)**라고 한다.

## 3. 일급 객체는 반환값으로 사용할 수 있다.

\`\`\`swift
func decideFun(x: Bool) -> (Int) -> Int {
    //매개변수형 리턴형이 함수형
    if x {
        return toUp
    } else {
        return toDown
    }
}
let r = decideFun(x:true) // let r = toUp
print(type(of:r)) //(Int) -> Int
print(r(10)) // toUp(10)
\`\`\`

함수는 위와 같이 함수의 리턴값으로 사용될 수 있다.

# Closure 클로저

![](https://velog.velcdn.com/images/sally_law/post/c7f1a684-4836-4ff1-8120-068ca09eeaa8/image.png)

\`\`\`swift
// 일반 함수
func add(x: Int, y: Int) -> Int {
    return x+y
}
print(add(x:10, y:20))

// 클로저 표현식
let add1 = { (x:Int, y:Int) -> Int in return x+y}

print(add1(10, 20))
\`\`\`

타 코드의 람다나 익명 함수와 비슷한 개념으로,

\`\`\`swift
func mul(x: Int, y: Int) -> Int {
	return x * y
}
print(result)
\`\`\`

위 함수를 클로저 표현식으로 변환하면 아래와 같다.

\`\`\`swift
let multiply = { (x: Int, y: Int) -> Int in return x * y } // 여기서 multiply의 자료형은 (Int, Int) -> Int
let result = multiply(10, 20) //상수를 함수처럼 호출,200
print(result)
\`\`\`

## Trailing Closure 후행 클로저

함수를 호출할 때 해당 함수가 파라미터로 함수나 클로저를 받는 경우 후행 클로저를 적용할 수 있다. 
후행 클로저는 내부 동작이 바뀌거나 하지는 않으나, 가독성 향상 및 코드의 간결화에 의의가 있다.

\`\`\`swift
//기본
print(math(x: 10, y: 20, cal: {(a: Int, b: Int) -> in return a + b}))

//trailing closure 적용
print(math(x: 10, y: 20) {(a: Int, b: Int) -> in return a + b })
\`\`\`

# 클로저 축약

\`\`\`swift
//기본 클로저
print(math(x: 10, y: 20, cal: {(a: Int, b: Int) -> Int in return a + b }))

//리턴형 생략
print(math(x: 10, y: 20, cal: {(a: Int, b: Int) in return a + b}))

//trailing closure 적용
print(math(x: 10, y: 20) {(a: Int, b: Int) in return a + b })

//매개변수 생략, 단축인자(shorthand argument name) 사용
print(math(x: 10, y: 20) { return $0 + $1 })

//return 생략
print(math(x: 10, y: 20) { $0 + $1 })
\`\`\`

## 클로저의 활용처

- **콜백 함수**: 비동기 작업(예: 네트워크, 타이머) 완료 시 호출
- **함수형 프로그래밍**: map, filter, reduce 같은 메서드에서 사용
- **데이터 은닉**: 외부 변수 캡처로 상태 유지
- **UI 이벤트**: 버튼 클릭, 애니메이션 완료 처리

# Class 클래스

![](https://velog.velcdn.com/images/sally_law/post/3c6b35db-9a91-4da5-adf6-bfa82773fd80/image.png)

### 객체(Object)와 인스턴스(Instance)의 차이

**객체(Object)**

- 프로그램에서 메모리 내에 존재하는 모든 실체를 의미합니다. 클래스, 구조체 등에서 생성된 실제 데이터를 가진 것들이 객체라고 할 수 있어요. 즉, 구체적으로 존재하는 모든 것을 뜻합니다.

**인스턴스(Instance)**

- 특정 클래스 또는 구조체에서 생성된 실체를 의미합니다. 즉, 클래스를 기반으로 메모리에 할당되어 생성된 객체를 인스턴스라고 부릅니다. 쉽게 말해 "클래스의 구체적인 실체"입니다.

## 구조체와 클래스의 차이

![](https://velog.velcdn.com/images/sally_law/post/0252540e-3fb2-4685-83d9-b5e20753d32f/image.png)

구조체는 단순 사용자 정의 자료형을 만들 때 사용한다.

C++에서는 구조체와 클래스 간 차이가 거의 없다시피 했으나, Swift에서는 구조체는 단순 사용자 자료형을 만들 때, 클래스는 상속 등 OOP를 위한 인스턴스 생성 용도로 용도를 구분짓는다.

## 클래스의 구성

![](https://velog.velcdn.com/images/sally_law/post/799bca42-fb70-4a93-9d6e-0e3f7e9f38bd/image.png)

## Property 프로퍼티

java의 필드, c++의 멤버 변수에 대응되는 개념.

특이하게도 swift에서 프로퍼티는 크게 stored(저장), computed(계산), type(타입)으로 나뉘는데, 타 언어의 필드/멤버 변수에 대응하는 프로퍼티는 stored property이다.

> **stored property**: 실값을 저장
> 
> 
> **computed property**: 값을 계산
> 
> **type property**: 모든 인스턴스가 공유하는 값을 정의(java의 정적 필드와 비슷함)
> 

<aside>
💡

### computed property

호출 시마다 값을 계산해내는 프로퍼티. 다른 프로퍼티의 값에 의존하는 값이 필요하거나 게터/세터를 통해 타 프로퍼티 값을 수정 및 조회하여야 할 때 사용한다.

</aside>

swift에서 클래스에 stored property를 정의할 경우 반드시 초기화가 필요하다.
stored property를 초기화하는 방법은 세 가지가 있다.

1. 직접 초기화
2. 옵셔널로 정의
3. **생성자(Initializer)를 통한 초기화**

## Method 메서드

### Initializer 생성자

타 언어의 Constructor와 같으며, 보통 저장 프로퍼티의 초기화를 위해 사용된다.

생성자는 다음과 같은 특징이 있다.

> 
> 
> 1. 클래스에 기본적으로 존재하며, 따로 선언하지 않아도 내부적으로 자동 생성된다.
> 2. 타 메서드나 함수와 달리 생성자는 {클래스명}()으로 호출할 수 있다.
> 3. 생성자는 타 함수와 비슷하게 오버로딩이 가능하다.

\`\`\`swift
class Man {
    var age : Int = 1
    var weight : Double = 3.5
    
    func display() {
        print("나이=\\(age), 몸무게=\\(weight)")
    }
    
    init(yourAge: Int, yourWeight : Double) {
        age = yourAge
        weight = yourWeight
    } //designated initializer
}
var kim : Man = Man(yourAge:10, yourWeight:20.5)
kim.display()
\`\`\`

\`\`\`swift
class Man{
    var age : Int = 1
    var weight : Double = 3.5
    //init(){}
    //눈에 보이지 않지만 자동으로 만들어지는 default initializer
    func display(){
        print("나이=\\(age), 몸무게=\\(weight)")
    }
}
var kim : Man = Man() // ()는 init()호출하는 것
kim.display() //인스턴스 메서드는 인스턴스가 호출
print(kim.age)
\`\`\`

생성자를 아래와 같이 정의할 수 있다. 이를 통해 객체의 프로퍼티를 직접 초기화할 수 있다.
아래와 같이 모든 프로퍼티를 초기화하는 생성자를\xA0**designated initializer**라고 한다.

\`\`\`swift
init(yourAge: Int, yourWeight : Double){
    age = yourAge
    weight = yourWeight
} //designated initializer
\`\`\`

### self 키워드

클래스 자기 자신을 가리키는 키워드.

java의 this와 비슷하며, 아래와 같이 사용하여 가독성을 높이는 용도로 사용한다.

\`\`\`swift
init(age: Int, weight : Double){
    self.age = age
    self.weight = weight
}
\`\`\`

### Failable Initializer 실패 가능한 생성자

nil을 리턴할 수 있는 생성자를 의미한다.

\`\`\`
init?(){...return nil...}
\`\`\`

failable initializer를 통해 인스턴스가 생성될 경우 해당 인스턴스는 옵셔널 래핑된다.

\`\`\`swift
class Man{
    var age : Int
    var weight : Double
    func display(){
        print("나이=\\(age), 몸무게=\\(weight)")
    }
    init?(age: Int, weight : Double){
        if age <= 0 || weight <= 0.0 {
            return nil
        }
        else {
            self.age = age
            self.weight = weight
        }
    } // failable initializer
}
var kim : Man = Man(age:10, weight:20.5)
kim.display()
\`\`\`

위의 kim은 옵셔널 인스턴스가 되며, 언래핑을 거치지 않고 사용 시 에러가 발생한다.
따라서 아래와 같이 언래핑하여 사용한다.

\`\`\`swift
var kim : Man? = Man(age:1, weight:3.5)

// 1-1.옵셔널 형으로 선언
if let kim1 = kim { // 1-2.옵셔널 바인딩
    kim1.display()
}

// 2.인스턴스 생성과 동시에 옵셔널 바인딩
if let kim2 = Man(age:2, weight:5.5) {
    kim2.display()
}

// 3.인스턴스 생성하면서 바로 강제 언래핑
var kim3 : Man = Man(age:3, weight:7.5)!
kim3.display()

// 4.옵셔널 인스턴스를 사용시 강제 언래핑
var kim4 : Man? = Man(age:4, weight:10.5)
kim4!.display()
\`\`\`

3번 및 4번 방식의 경우 크래시의 위험이 있어 잘 쓰이지 않고, 옵셔널 바인딩 방식이 주로 쓰인다.

### Type Method 타입 메서드

클래스 객체가 아닌 클래스 자체에서 호출하는 메서드. class 메서드와 static 메서드로 나뉜다.
factory method라고도 한다.

메서드 앞에 class, static을 붙여 선언한다.

> 타 언어의 정적 메서드(static method)와 비슷한 개념이다.
단, swift의 타입 메서드는 상속 불가한 static method와 상속 가능한 class method로 나뉜다.
> 

static 메서드는 상속 및 오버라이딩이 불가능하나 class 메서드의 경우 자식 클래스가 오버라이딩할 수 있다.

\`\`\`swift
class Man{
    var age : Int = 1
    var weight : Double = 3.5

    func display(){
        print("나이=\\(age), 몸무게=\\(weight)")
    }

    class func cM(){
    	print("cM은 클래스 메서드입니다.")
    }

    static func scM(){
    	print("scM은 클래스 메서드(static)")
    }
}
var kim : Man = Man() // ()는 init()호출하는 것
kim.display() //인스턴스 메서드는 인스턴스가 호출
print(kim.age)

Man.scM()
\`\`\`

### Deinitializer 소멸자

클래스 객체 제거 시 기본적으로 호출하는 메서드.
캐시 정리나 실행한 파일을 해제하는 등의 작업을 넣는다.

생성자와 같이 클래스 정의 시 기본적으로 생성된다.

\`\`\`swift
deinit{}
\`\`\`

> swift는 GC(Garbage Collection)를 사용하지 않는 대신 ARC(Automatic Reference Counting) 기반 메모리 관리 방식을 사용하는데, ARC란 참조 카운트(reference count)를 통해 메모리를 관리하는 방식을 의미한다.
> 
> 
> 이 때 참조 카운트는 인스턴스를 참조하는 엔티티의 수를 의미하며, 인스턴스의 참조 카운트가 0이 될 경우 swift는 객체를 메모리에서 해제한다.
> 
> > 참고로 ARC 기반 메모리 관리 방식은 그래프에서 노드 간 엣지의 갯수를 세어 엣지의 갯수가 0인, 즉 타 노드와 연결되지 않은 고립된 노드를 제거하는 것과 비슷하게 이해할 수 있는데, 때문에 순환 참조가 발생할 경우 해당 객체의 메모리를 영구히 해제할 수 없게 되는 경우가 발생할 수 있다.
> > 
> > 
> > 이런 경우를 방지하기 위해 swift에서는 weak(약한 참조)와 unowned(비소유 참조)를 제공한다.
> > 

### Method Overloading 메서드 오버로딩

메서드명이 다른 여러 메서드를 여러 개 정의하여 유연성을 높이는 방식.
아래는 생성자를 오버로딩한 예시이다.

\`\`\`swift
class Man{
    var age : Int
    var weight : Double
    func display(){
        print("나이=\\(age), 몸무게=\\(weight)")
    }
    init(age: Int, weight : Double){ // 1
        self.age = age
        self.weight = weight
    }
    init(){ // 2
        self.age = 1
        self.weight = 3.5
    }
}
var kim : Man = Man(age:10, weight:20.5) //1
var kim1 : Man = Man() //2
//var kim2 : Man = Man()
//init가 없다면 인스턴스 만드는 방법
kim.display()
kim1.display()
\`\`\`

## Inheritance 상속

swift에서는 클래스 선언 시 아래와 같이 부모 클래스 및 프로토콜을 상속받을 수 있다.

> 프로토콜은 java의 인터페이스, c++의 순수가상함수에 대응되는 개념이다.
> 

\`\`\`swift
class 클래스명 : 부모클래스명, 프로토콜1, 프로토콜2... {...}
\`\`\`

클래스는 하나의 부모 클래스만 상속받을 수 있으나, 프로토콜은 여러 개 상속받을 수 있다.
첫 번째 상속은 부모 클래스 외에 프로토콜도 들어갈 수 있다.

\`\`\`swift
class Man{
    var age : Int = 1
    var weight : Double = 3.5
    func display(){
        print("나이=\\(age), 몸무게=\\(weight)")
    }
    init(age: Int, weight : Double){
        self.age = age
        self.weight = weight
    }
}
class Student : Man { // Man 클래스를 상속받는 클래스
    //비어있지만 Man의 모든 것을 가지고 있음
}
var kim : Man = Man(age:10, weight:20.5)
kim.display()

var lee : Student = Student(age:20,weight:65.2)
lee.display()

print(lee.age)
\`\`\`

### super

부모 클래스의 프로퍼티나 메서드를 호출할 때 사용하는 키워드.

\`\`\`swift
class Man{
    var age : Int
    var weight : Double
    func display(){
        print("나이=\\(age), 몸무게=\\(weight)")
    }
    init(age: Int, weight : Double){
        self.age = age
        self.weight = weight
    }
}

class Student : Man {
    var name : String
    func displayS() {
        print("이름=\\(name), 나이=\\(age), 몸무게=\\(weight)")
    }
    init(age: Int, weight : Double, name : String){
        self.name = name //자식의 프로퍼티 먼저 초기화
        super.init(age:age, weight:weight)
    }
}

var lee : Student = Student(age:20,weight:65.2,name:"홍길동")
lee.displayS()
lee.display()
\`\`\`

위에서 Student 클래스의 생성자에서는 super.init(age:weight:)을 통해 부모 클래스에서 상속받은 프로퍼티인 age, weight를 초기화하고 있다.

> swift에서는 자식 클래스의 생성자에서 부모 클래스의 생성자를 호출할 경우 반드시 자식 클래스 내부의 저장 프로퍼티를 모두 초기화한 후에 호출하여야 하며, 이는 문법적으로 강제된다.
> 

위와 같이\xA0**생성자 내부에서 타 생성자를 호출하는 방식을 생성자 체이닝(initializer/constructor chaining)이라고 한다.**

특히 swift에서는\xA0**부모 클래스로부터 받은 stored property는 반드시 부모 클래스의 생성자(정확히는 designated initializer)로 모두 초기화해야 한다**는 문법적 규칙이 존재하므로 생성자 체이닝이 필요하다.

### Override 오버라이딩

부모 클래스로부터 상속받은 메서드를 자식 클래스 내부에서 재정의하는 것을 의미한다.

메서드를 오버라이딩하기 위해서는 메서드명 앞에 override를 붙여야 한다.

\`\`\`swift
class Animal {
    func speak() {
        print("동물이 소리를 냅니다.")
    }
}
class Dog : Animal {
    override func speak() { // 오버라이드
        print("멍멍!")
    } //Dog에는 speak()이 2개
}

let ani = Animal()
let myDog = Dog()
ani.speak()
myDog.speak()
\`\`\`

프로퍼티도 오버라이딩이 가능하지만, 프로퍼티 중 stored property는 유일하게 오버라이딩이 불가하다.

## extention

![스크린샷 2026-03-24 오후 4.45.12.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%204%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.45.12.png)

\`\`\`swift
extension Double{
    var pow : Double { return self * self }
}

let myValue: Double = 2.0
print(myValue.pow) // 4.0

extension Int{
    var cash : String { return "₩" + String(self) }
}

let thousandWon: Int = 1000
print(thousandWon.cash) // ₩1000
\`\`\`

이미 존재하는 타입에 새로운 기능을 추가하는 문법.

### Access Modifier

코드의 특정 부분에 대한 액세스가 무엇에게 허용될지를 정의하는 문법.

| **제어자** | **접근 범위** | **설명** |
| --- | --- | --- |
| **\`open\`** | **모든 곳** | 다른 모듈에서도 **상속(Inheritance)**과 **오버라이딩**이 가능합니다. (가장 개방적, 클래스 전용) |
| **\`public\`** | **모든 곳** | 다른 모듈에서 접근은 가능하지만, **상속과 오버라이딩은 불가능**합니다. |
| **\`internal\`** | **같은 모듈** | 같은 앱이나 프레임워크 내에서는 자유롭지만, 외부에서는 안 보입니다. (**기본값**) |
| **\`fileprivate\`** | **같은 파일** | 같은 \`.swift\` 소스 파일 내에서만 접근 가능합니다. |
| **\`private\`** | **같은 정의 안** | 해당 기능을 정의한 \`{ }\` 블록 내부에서만 접근 가능합니다. (가장 폐쇄적) |

\`\`\`swift
public class MyClass{
	// 모듈의 모든 소스 파일 내에서 접근+정의한 모듈을 가져오는 다른 모듈의 소스파일에서도 접근 가능
	fileprivate var name : String = "Kim"
	
	//현재 소스 파일 내에서만 사용 가능
	private func play() {}
	
	//현재 블럭 내에서만 사용 가능
	func display(){} //internal은 디폴트 속성으로 생략됨
	
	// internal 접근은 해당 모듈의 모든 소스 파일 내에서 사용
}
\`\`\`

![스크린샷 2026-03-24 오후 4.44.12.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%204%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.44.12.png)

모듈: 배포될 수 있는 가장 작은 단위. 즉 애플리케이션이나 라이브러리.

![스크린샷 2026-03-24 오후 4.48.14.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%204%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.48.14.png)

### 번외. 클래스 메모리 레이아웃

이 글에서 stored property는 두 가지 특이한 점이 있다고 설명했다.

1. 부모 클래스의 stored property는 반드시 부모 클래스의 designated initializer로 모두 초기화해야 한다.
2. 오버라이딩이 불가능하다.

stored property가 위와 같은 특징을 지니는 이유는 부모 클래스가 자식 클래스에 상속되어도 부모에게 상속받은 stored property는 여전히 부모 클래스에 종속된 상태가 되기 때문이다.

이것을 이해하기 위해서는 swift의 클래스 메모리 레이아웃을 이해할 필요가 있다.

### 클래스 메모리 레이아웃

아래와 같은 구조를 지니는 클래스 A가 있다고 하자.

\`\`\`swift
class A {
    var a = 10
    var b = 20
}
\`\`\`

위와 같은 클래스 A를 정의하면 컴파일러는 A의 인스턴스를 생성하기 위해 아래와 같은 순서를 지니는 메모리 구조를 만들어낸다.

> 
> 
> 1. 헤더(런타임 메타데이터)
> 2. 클래스 메타데이터 포인터(메서드 테이블 등을 포함)
> 3. A.a
> 4. A.b
> - stored property는 메모리 내부에서 일정 오프셋을 가지고 연속적으로 배치된다.

이 메모리 구조를\xA0**클래스 메모리 레이아웃**이라고 한다.

### 상속받은 클래스의 메모리 레이아웃

아래와 같은 B 클래스가 있다고 하자.
이 클래스는 A 클래스를 상속받고, 새로운 stored property인 c를 정의했다.

\`\`\`swift
class B: A {
    var c = 30
}
\`\`\`

이 경우 B 클래스의 메모리 레이아웃은 아래와 같은 모습이 된다.

> 
> 
> 1. 헤더
> 2. 클래스 메타데이터 포인터
> 3. A.a
> 4. A.b
> 5. **B.c**

즉, 특정 클래스를 상속받는 클래스는 부모 클래스의 메모리 레이아웃을 기반으로 새로 정의한 프로퍼티를 이어붙여 자신만의 클래스 메모리 레이아웃을 만들어낸다.

이러한 상속 방식으로 인해\xA0**부모 클래스가 자식 클래스에 상속되어도 부모의 stored property는 부모 클래스에 종속된 상태**가 된다.

때문에 자식 클래스에서는 부모 클래스의 stored property를 재정의하거나 직접 초기화할 수 없다.`,Br=`# iOS프로그래밍 5주차

작성일자: 2026/03/31
과목: iOS프로그래밍실무
교수: 한성현
요약: TableView
isEnable?: Yes

### protocol

해야 할 일 목록. 자신을 상속하는 자식 클래스들이 반드시 가져야 하는 기능을 정의한다.
타 언어의 인터페이스, 순수가상함수와 비슷한 개념이다.

특정 클래스와 관련이 없는 프로퍼티/메서드 선언의 집합.
프로토콜 단위로 묶어 구현하며 extension으로 기본적인 것을 구현하는 프로그래밍 스타일을 Protocol Orientation Programming이라고 한다.

### delegate

대리자. 자신을 임명한 객체가 작업 일부를 전달하면 지정된 메서드를 통해 처리한다.
객체가 작업을 처리할 때 작업 일부의 처리를 타 객체에게 위임할 수 있으며, 이러한 디자인을 delegate pattern이라고 한다.

![스크린샷 2026-03-31 오후 2.20.45.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.20.45.png)

![스크린샷 2026-03-31 오후 2.25.09.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.25.09.png)

프로토콜의 프로퍼티는 get/set으로 값을 조회하거나 설정할 수 있어야 한다.
또한 프로토콜의 메서드는 선언만 될 수 있으며, 구현될 수 없다.

프로토콜을 상속하는 메서드는 프로토콜의 모든 멤버를 지녀야 한다.

![스크린샷 2026-03-31 오후 2.32.05.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.32.05.png)

![스크린샷 2026-03-31 오후 2.38.10.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.38.10.png)

클래스가 프로토콜의 기능을 구현하겠다고 약속하는 것을 채택(adopt)라고 한다.

![스크린샷 2026-03-31 오후 3.03.59.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.03.59.png)

constrain to margins: 슈퍼뷰에 대한 제약을 슈퍼뷰의 margin을 사용할지, 아니면 edge를 사용할지 결정하는 옵션.

Safe Area: 하늘색으로 표현된 사각형이 Safe Area에 해당하는 영역. 컨텐츠가 제대로 보일 수 있는 부분.
스테이터스 바, 네비게이션 바, 홈 인디케이터 영역을 제외한 부분

![스크린샷 2026-03-31 오후 3.16.09.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.16.09.png)

![스크린샷 2026-03-31 오후 4.08.20.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.08.20.png)

![스크린샷 2026-03-31 오후 4.12.33.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.12.33.png)

![스크린샷 2026-03-31 오후 4.28.33.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.28.33.png)

![스크린샷 2026-03-31 오후 4.37.04.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%205%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.37.04.png)`,Vr=`# iOS프로그래밍 6주차

작성일자: 2026/04/07
과목: iOS프로그래밍실무
교수: 한성현
요약: Swift 문법
isEnable?: Yes

\`\`\`swift
import UIKit
var name = ["콜라덮밥",
            "사이다덮밥",
            "코코아덮밥",
            "커피덮밥",
            "레몬에이드덮밥"]

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    @IBOutlet weak var table: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        table.dataSource = self
        table.delegate = self
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 5
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath) as! TableViewCell
        cell.myLabel.text = name[indexPath.row]
        print("c=\\(indexPath.description)")
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print(indexPath.description)
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 3
    }

}
\`\`\`

<aside>
💡

### Optional Chaining

옵셔널 체이닝(Optional Chaining)은 이름 그대로 옵셔널을 '체인(사슬)'처럼 엮어서, 그중 하나라도 \`nil\`이면 전체 결과가 깔끔하게 \`nil\`이 되도록 만드는 마법 같은 문법입니다.

전통적으로 \`nil\`인지 아닌지 확인하려면 \`if let\`을 주렁주렁 달아야 했지만, 옵셔널 체이닝을 쓰면 단 한 줄로 코드를 짤 수 있습니다.

---

### 1. 왜 필요한가요? (비교하기)

상황: \`사람\`에게는 \`집\`이 있고, \`집\`에는 \`방\`이 있습니다. 그런데 사람이 노숙자라 집이 없을 수도(\`nil\`) 있죠.

**기존 방식 (Optional Binding)**

Swift

\`\`\`swift
if let home = person.home {
    if let room = home.room {
        print("방 번호는 \\(room.number)입니다.")
    }
}
\`\`\`

- 계단식 코드가 되어 읽기 힘듭니다 (일명 '죽음의 피라미드').

**옵셔널 체이닝 방식**

Swift

\`\`\`swift
let roomNumber = person.home?.room?.number
\`\`\`

- \`home\`이 \`nil\`이면? 뒤는 쳐다보지도 않고 바로 결과가 \`nil\`이 됩니다.
- \`room\`이 \`nil\`이면? 마찬가지로 결과는 \`nil\`이 됩니다.
- **안전합니다.** \`nil\`인 대상에 접근하려다 앱이 꺼지는(Crash) 일을 막아줍니다.

---

### 2. 핵심 규칙 3가지

1. **질문표(?)를 붙인다**: 옵셔널 값 뒤에 \`?\`를 붙여 "이거 있으면 다음으로 넘어가고, 없으면 멈춰!"라고 말하는 것입니다.
2. **결과값은 항상 옵셔널이다**: 마지막 값(\`number\`)이 일반 \`Int\`였더라도, 체인 중간에 옵셔널이 섞여 있으면 최종 결과값은 \`Int?\`가 됩니다. (\`nil\`이 나올 가능성이 생기기 때문이죠.)
3. **함수 호출도 가능**: \`person.home?.clean()\` 처럼 사용하면, 집이 있을 때만 청소 함수가 실행됩니다.

---

### 3. 코드 예시

이해를 돕기 위해 간단한 구조체를 만들어 볼게요.

Swift

\`\`\`swift
struct Room {
    var number: Int
}

struct Home {
    var room: Room?
}

struct Person {
    var home: Home?
}

let gildong = Person(home: Home(room: Room(number: 101)))
let homeless = Person(home: nil)

// 1. 성공하는 경우
if let num = gildong.home?.room?.number {
    print("길동이네 방 번호: \\(num)") // 출력: 101
}

// 2. 실패하지만 안전한 경우
let hisRoom = homeless.home?.room?.number 
print(hisRoom) // 출력: nil (에러 나지 않음!)
\`\`\`

---

### 4. \`?\` vs \`!\` (강제 추출과 비교)

- \`person.home?.room\`: "집 있으면 방 좀 보여줘. (없으면 말고~)" -> **안전**
- \`person.home!.room\`: "집 있는 거 다 아니까 당장 방 내놔!" -> **위험** (집이 없으면 바로 앱 종료)

---

### 💡 팁

옵셔널 체이닝 뒤에 **Nil-Coalescing Operator (\`??\`)**를 붙이면 더 강력해집니다.

Swift

\`\`\`swift
let roomNum = person.home?.room?.number ?? 0
// 방 번호를 가져오되, 만약 중간에 하나라도 nil이면 기본값으로 0을 줘!
\`\`\`

</aside>

\`\`\`swift
class Person {
    var name: String
    var age: Int
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

let kim: Person = Person(name: "Kim", age: 20)
print(kim.age)

let han: Person? = Person(name: "Han", age: 25)
print(han!.age)
print(han?.age) //Optional(25), 옵셔널 체이닝
print((han?.age)!)
	
if let hanAge = han?.age {
		print(hanAge)
} else {
		print("nil")
}
\`\`\`

각 언어별 예외 처리 문뻡

| **언어** | **키워드 / 방식** | **특징** |
| --- | --- | --- |
| **Swift** | \`do-try-catch\` / \`throw\` | 함수 선언에 \`throws\`를 명시해야 하며, 호출 시 반드시 \`try\`를 붙여야 함. |
| **Java** | \`try-catch-finally\` / \`throw\` | **Checked Exception**(반드시 처리해야 하는 예외) 개념이 있어 엄격함. |
| **Python** | \`try-except-finally\` / \`raise\` | \`catch\` 대신 \`except\`를 사용하며, 문법이 직관적이고 쉬움. |
| **JavaScript** | \`try-catch-finally\` / \`throw\` | 비동기 처리 시 \`Promise.catch()\`나 \`async/await\`와 함께 자주 쓰임. |
| **C++** | \`try-catch\` / \`throw\` | 예외 객체뿐만 아니라 기본 타입(int 등)도 던질 수 있으나, 가급적 클래스 권장. |
| **Kotlin** | \`try-catch-finally\` | Java와 달리 Checked Exception이 없어 모든 예외 처리가 선택 사항임. |
| **Go** | \`if err != nil\` | 예외 던지기(throw) 대신 **에러 객체를 반환**하는 방식을 선호함. |
| **Rust** | \`Result<T, E>\` / \`panic!\` | \`try-catch\`가 없으며, 결과값을 열거형(\`Result\`)으로 받아 안전하게 처리함. |

오류가 발생하면 문제를 보정하는 방법을 시도하거나 사용자에게 알림으로써 오류를 처리

- do-catch 구문
    - throws로 전파하고 do-catch로 처리
    - 가장 일반적이고 널리 사용되는 방법으로, 에러를 명시적으로 처리할 수 있음
- 옵셔널 값으로 에러 처리 (try?)
    - 에러를 간단히 무시하거나 실패 여부만 확인하고 싶을 때 사용
- 단정 (try!)
    - 에러가 절대 발생하지 않을 것이라고 가정할 때 사용
    - 에러가 발생하면 프로그램이 크래시

<aside>
💡

# **init(contentsOf:)**

**Creates a player to play audio from a file.**

iOS 2.2+iPadOS 2.2+Mac Catalyst 13.1+macOS 10.7+tvOS 9.0+visionOS 1.0+watchOS 3.0+

\`init(contentsOf url: [URL](https://developer.apple.com/documentation/Foundation/URL)) throws\`

[**Parameters](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:)#parameters)\`url\`**A URL that identifies the local audio file to play.

## [**Return Value**](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:)#return-value)

A new audio player instance, or\xA0[\`nil\`](https://developer.apple.com/documentation/ObjectiveC/nil-227m0)\xA0if an error occurs.

## [**Discussion**](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:)#Discussion)

The audio data must be in a format that Core Audio supports.

## [**See Also**](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:)#see-also)

[**Creating an audio player**](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:)#Creating-an-audio-player)

[\`init(contentsOf:\xA0URL,\xA0fileTypeHint:\xA0String?)\xA0throws\`](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:filetypehint:))

Creates a player to play audio from a file of a particular type.

[\`init(data:\xA0Data)\xA0throws\`](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(data:))

Creates a player to play in-memory audio data.

[\`init(data:\xA0Data,\xA0fileTypeHint:\xA0String?)\xA0throws\`](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(data:filetypehint:))

Creates a player to play in-memory audio data of a particular type.

</aside>

do-catch를 활용한 예외처리

\`\`\`swift
do {
	try 오류 발생 코드
	오류가 발생하지 않으면 실행할 코드
} catch 오류패턴1 {
	처리 코드
} catch 오류패턴2 where 조건 {
	처리 코드
} catch {
	처리 코드
}
\`\`\`

throwing function에서 예외처리를 하지 않으면 Call can throw, but it is not marked with 'try' and the error is not handled라는 에러 메시지가 출력된다.

Generic

\`\`\`swift
func myPrint<T>(a: T, b: T) {
    print(b,a)
}

myPrint(a:1,b:2)
myPrint(a:2.5,b:3.5)
//myPrint(a:"Hi",b:"Hello")
\`\`\`

\`\`\`swift
class Box<T> {
    var item: T
    init(item: T) { self.item = item }
    func getItem() -> T { return item }
}

let intBox = Box(item: 12)

Box<Int>(item: 123)
Box(item: 123)
print(intBox.getItem()) // 12

let stringBox = Box(item: "Hello")

Box<String>(item: "Hello")
print(stringBox.getItem()) // Hello
\`\`\`

array도 제네릭을 사용하며, 제네릭 구조체이다.

\`\`\`swift
var x : [Int] = [] //빈 배열
var y = [Int]()
var z : Array<Int> = []

var a : [Int] = [1,2,3,4]
var b : Array<Int> = [1,2,3,4]
var c : Array<Double> = [1.2,2.3,3.5,4.1]
\`\`\`

빈 배열은 그대로 사용하면 안 된다. append()를 통해 값을 저장한 후 사용하여야 한다.

\`\`\`swift
let number : [Int] = []
//빈 배열을 let으로 만들 수는 있지만 초기값에서 변경 불가이니 배열의 의미 없음

var odd = [Int]()
var even : Array<Int> = Array()
print(number) //[]
print(number[0]) //오류, 빈 배열을 값을 넣은 다음에 접근

number.append(100) //let으로 선언한 불변형 배열이라 추가 불가능
//error: cannot use mutating member on immutable value: 'number' is a 'let' constant

print(number[0])
number.append(200)
print(number[0], number[1],number)
\`\`\`

array(repeating:count:)로 배열의 값을 특정 값으로만 채울 수 있다.

\`\`\`swift
var x = [0,0,0,0,0]
print(x)
//[0, 0, 0, 0, 0]

var x1 = Array(repeating: 0, count: 5)
print(x1)
//[0, 0, 0, 0, 0]

var x2 = [Int](repeating: 1, count: 3)
print(x2)
//[1, 1, 1]

var x3 = [String](repeating: "A", count: 4)
print(x3)
// ["A", "A", "A", "A"]
\`\`\`

array의 count, isEmpty 프로퍼티를 통해 배열의 요소 갯수, 배열이 비어있는지를 알 수 있다.

\`\`\`swift
let num = [1, 2, 3, 4]
var x = [Int]()
print(num.isEmpty) //배열이 비어있나? false print(x.isEmpty)

if num.isEmpty { 
	print("비어 있습니다")
} else {
	print(num.count) //배열 항목의 개수 
}
\`\`\`

first, last 프로퍼티로 배열의 첫 값과 끝값을 알 수 있다.

\`\`\`swift
let num = [1, 2, 3, 4]
let num1 = [Int]()
print(num.first, num.last)//Optional(1) Optional(4)
print(num1.first, num1.last)//nil nil

if let f = num.first, let l = num.last {
    print(f,l) //1 4
}
\`\`\`

서브스크립트로 배열의 특정 번째 요소에 접근할 수 있다.

\`\`\`swift
var num = [1, 2, 3, 4]
print(num[0], num[3])
print(num.first!)

for i in 0...num.count-1{ print(num[i]) }
print(num[1...2])

num[0...2] = [10,20,30]
	print(num)
\`\`\`

array의 추가/제거

\`\`\`swift
var num = [1, 2, 3]
print(num)

num.append(4)
print(num)

num.append(contentsOf: [6, 7, 8])
print(num)

num.insert(5, at: 4)
print(num)

num.remove(at: 3)
print(num)

num.removeLast()
print(num)

print(num.firstIndex(of: 2))

if let i = num.firstIndex(of: 2) {
    num[i] = 20
}
print(num)

num = num + num
print(num)

num += [8, 9]
print(num)

num.removeAll()
print(num)
\`\`\`

min, max를 통해 배열의 요소 중 최솟값과 최댓값을 뽑을 수 있다.

\`\`\`swift
var num = [1,2,3,10,20]

print(num)
print(num.min())
print(num.max())
print(num.min()!)
print(num.max()!)
\`\`\`

배열의 정렬

\`\`\`swift
var num = [1,5,3,2,4]

num.sort() //오름차순 정렬하여 원본 변경
print(num) //[1, 2, 3, 4, 5]

num[0...4] = [2,3,4,5,1]
num.sort(by:>) //내림차순 정렬하여 원본 변경
print(num) //[5, 4, 3, 2, 1]

num[0...4] = [2,3,4,5,1]
num.reverse() //반대로 정렬하여 원본 변경
print(num) //[1, 5, 4, 3, 2]
print(num.sorted()) //오름차순 정렬 결과를 리턴하고, 원본은 그대로, var x = num.sorted()

//[1, 2, 3, 4, 5]
print(num) //[1, 5, 4, 3, 2]
print(num.sorted(by:>)) //내림차순 정렬 결과를 리턴하고, 원본은 그대로
//[5, 4, 3, 2, 1]
print(num)//[1, 5, 4, 3, 2]
\`\`\``,Hr=`# iOS프로그래밍 7주차

작성일자: 2026/04/14
과목: iOS프로그래밍실무
교수: 한성현
요약: Swift 문법
isEnable?: Yes

열거형을 지원하는 언어

| **언어** | **주요 특징** |
| --- | --- |
| **Java** | 클래스처럼 메서드와 필드 사용 가능 |
| **C/C++** | 정수 값에 이름을 붙이는 기본 형태 |
| **Swift** | 연관 값을 가질 수 있어 상태 표현에 최적화 |
| **TypeScript** | 문자열과 숫자 기반 매핑 지원 |
| **Rust** | 각 항목이 서로 다른 데이터 구조를 가질 수 있음 |

\`\`\`swift
enum Compass {
    case North
    case South
    case East
    case West
}

//var x : Compass // Compass형 인스턴스 x
print(Compass.North) // North
var x = Compass.West
print(type(of:x)) // Compass
x = .East
print(x) // East
\`\`\`

변수에 이전에 동일한 열거형을 넣었을 경우 변수의 값들 동일한 열거형의 다른 항목으로 바꿀 때 열거형을 명시하지 않아도 된다.

\`\`\`swift
enum Compass {
    case North
    case South
    case East
    case West
}

var direction : Compass
direction = .South

switch direction { //switch의 비교값이 열거형 Compass
    case .North: //direction이 .North이면 "북" 출력
        print("북")
        
    case .South:
        print("남")
        
    case .East:
        print("동")
        
    case .West:
        print("서") //switch에서 모든 열거형 case를 포함하면 default 없어도 됨
}
\`\`\`

![스크린샷 2026-04-14 오후 2.20.50.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%207%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.20.50.png)

\`\`\`swift
enum Week {
    case Mon,Tue,Wed,Thur,Fri,Sat,Sun
    
    func printWeek() { //메서드도 가능
        switch self {
            case .Mon, .Tue, .Wed, .Thur, .Fri:
            print("주중")
            
            case .Sat, .Sun:
            print("주말")
        }
    }
}

var week: Week
week = .Thur

week.printWeek()
\`\`\`

\`\`\`swift
enum Color: Int { //원시값(rawValue) 지정
    case red
    case green = 2
    case blue
}

print(Color.red) //red
print(Color.blue)
print(Color.red.rawValue) //0
print(Color.blue.rawValue) //3
\`\`\`

rawValue는 이전 항목 +1이다.

\`\`\`swift
enum Week: String {
	case Monday = "월"
	case Tuesday = "화"
	case Wednesday = "수"
	case Thursday = "목"
	case Friday = "금"
	case Saturday //값이 지정되지 않으면 case 이름이 할당됨
	case Sunday // = "Sunday"
}

print(Week.Monday) //Monday
print(Week.Monday.rawValue) //월
print(Week.Sunday)
print(Week.Sunday.rawValue)
\`\`\`

\`\`\`swift
enum Date {
    case intDate(Int, Int, Int) //(int,Int,Int)형 연관값을 갖는 intDate
    case stringDate(String) //String형 연관값을 값는 stringDate
}

var todayDate = Date.intDate(2025,4,30)
todayDate = Date.stringDate("2025년 5월 20일") //주석처리하면?

switch todayDate {
    case .intDate(let year, let month, let day):
    print("\\(year)년 \\(month)월 \\(day)일")
    
    case .stringDate(let date):
    print(date)
}
\`\`\`

\`\`\`swift
public enum Optional<Wrapped> {
	case none
	case some(Wrapped)
}
\`\`\`

옵셔널은 열거형으로 구현되어 있다. 값이 있는 경우에는 some이며, 없는 경우에는 none이다.

\`\`\`swift
var x : Int? = 20 //.some(20)
var y : Int? = Optional.some(10)
var z : Int? = Optional.none
var x1 : Optional<Int> = 30
print(x, y, z, x1)
// Optional(20) Optional(10) nil Optional(30)
\`\`\`

\`\`\`swift
let age: Int? = 30 //Optional(30)
switch age {
case .none: // nil인 경우
    print("나이 정보가 없습니다.")
case .some(let a) where a < 20: // 옵셔널 바인딩
    print("\\(a)살 미성년자입니다")
case .some(let a) where a < 71:
    print("\\(a)살 성인입니다")
default:
    print("경로우대입니다")
} //30살 성인입니다.
\`\`\`

### 구조체

클래스와 비슷하지만 값 타입이며 상속이 불가능하다. 
Memberwise Initializer가 자동으로 만들어지며, Int, Double, String 등 기본 자료형은 구조체이다.

\`\`\`swift
struct Resolution { //구조체 정의
    var width = 1024 //프로퍼티
    var height = 768
}

let myComputer = Resolution() //인스턴스 생성
print(myComputer.width)

let yourComputer = Resolution(width: 1924, height: 1080)
\`\`\`

memberwise initializer란 구조체에 기본 내장된, 필드를 모두 초기화하는 생성자를 의미한다. 이는 클래스의 designated initializer와 같으나 구조체에서만, 자동 생성되는 특징이 있다.

\`\`\`swift
struct Resolution {
    var width: Int
    var height: Int
}

class VideoMode {
    var resolution: Resolution
    var frameRate: Double
    
    init(frameRate: Double, width: Int, height: Int) {
        self.frameRate = frameRate
        resolution = Resolution(width: width, height: height)
    }
}

let myVideo = VideoMode(frameRate: 30.0, width: 1024, height: 768)
print(myVideo.resolution.height)
\`\`\`

![스크린샷 2026-04-14 오후 3.22.40.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%207%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.22.40.png)

클래스가 구조체와 다른 점은 아래와 같다. 

- 상속이 가능
- 타입 캐스팅(is as as? as!)을 통해 실행 시점에 클래스 인스턴스의 타입을 검사하고 해석 가능
- deinitializer(deinit{})로 사용한 자원을 반환 가능
- 참조 카운팅을 통해 한 클래스 인스턴스를 여러 곳에서 참조(사용) 가능

\`\`\`swift
struct Resolution {
    var width = 0
    var height = 0
}
class VideoMode {
    var resolution = Resolution()
    var frameRate = 0
    var name: String?
}
var hd = Resolution(width: 1920, height: 1080)
var highDef = hd
print(hd.width, highDef.width)

hd.width = 1024
print(hd.width, highDef.width)

var xMonitor = VideoMode()
xMonitor.resolution = hd
xMonitor.name = "LG"
xMonitor.frameRate = 30
print(xMonitor.frameRate)

var yMonitor = xMonitor
yMonitor.frameRate = 25
print(yMonitor.frameRate)
print(xMonitor.frameRate)
\`\`\`

클래스는 참조 타입이었던 것과 달리 구조체는 값 타입이다. 

참조 타입은 값의 참조, 즉 값이 저장된 주소를 저장하며 참조 타입 변수의 복사본은 원본과 동일하게 값의 참조를 저장하며, 때문에 원본에서 값을 건드리면 복사본의 값도 바뀐다.
값 타입은 값 자체를 저장하며 값 타입 변수의 복사본은 값 자체를 복사한다. 때문에 원본에서 값을 수정하면 복사본의 값이 바뀌지 않으며, 그 반대 또한 마찬가지다.`,Ur=`# iOS프로그래밍 9주차

작성일자: 2026/04/28
과목: iOS프로그래밍실무
교수: 한성현
요약: Open API 기반 박스오피스 앱 개발
isEnable?: Yes

![스크린샷 2026-04-28 오후 2.25.39.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.25.39.png)

\`\`\`json
{
  "boxOfficeResult": {
    "boxofficeType": "일별 박스오피스",
    "showRange": "20120101~20120101",
    "dailyBoxOfficeList": [
      {
        "rnum": "1",
        "rank": "1",
        "rankInten": "0",
        "rankOldAndNew": "OLD",
        "movieCd": "20112207",
        "movieNm": "미션임파서블:고스트프로토콜",
        "openDt": "2011-12-15",
        "salesAmt": "2776060500",
        "salesShare": "36.3",
        "salesInten": "-415699000",
        "salesChange": "-13",
        "salesAcc": "40541108500",
        "audiCnt": "353274",
        "audiInten": "-60106",
        "audiChange": "-14.5",
        "audiAcc": "5328435",
        "scrnCnt": "697",
        "showCnt": "3223"
      }, 
      ...
    ]
  }
}
\`\`\`

\`\`\`swift
import Foundation

struct Welcome: Codable {
    let boxOfficeResult: BoxOfficeResult
}

struct BoxOfficeResult: Codable {
    let boxofficeType, showRange: String
    let dailyBoxOfficeList: [DailyBoxOfficeList]
}

struct DailyBoxOfficeList: Codable {
    let rnum, rank, rankInten: String
    let rankOldAndNew: RankOldAndNew
    let movieCD, movieNm, openDt, salesAmt: String
    let salesShare, salesInten, salesChange, salesAcc: String
    let audiCnt, audiInten, audiChange, audiAcc: String
    let scrnCnt, showCnt: String

    enum CodingKeys: String, CodingKey {
        case rnum, rank, rankInten, rankOldAndNew
        case movieCD = "movieCd"
        case movieNm, openDt, salesAmt, salesShare, salesInten, salesChange, salesAcc, audiCnt, audiInten, audiChange, audiAcc, scrnCnt, showCnt
    }
}

enum RankOldAndNew: String, Codable {
    case old = "OLD"
}

\`\`\`

![스크린샷 2026-04-28 오후 2.31.54.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.31.54.png)

![스크린샷 2026-04-28 오후 2.33.36.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.33.36.png)

![스크린샷 2026-04-28 오후 2.35.54.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.35.54.png)

![스크린샷 2026-04-28 오후 2.42.37.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.42.37.png)

API Application Programming Interface

- 두 개 이상의 컴퓨터 프로그램이 서로 통신하는 방법
- 다른 소프트웨어에 서비스를 제공하는 소프트웨어 인터페이스
- 컴퓨터와 사람을 연결하는 UI와 달리 API는 컴퓨터나 소프트웨어를 서로 연결
- printf, Java SE APIs, Windows API, SQLIte API, OpenGL API, Open API 등

[https://github.com/dl0312/open-apis-korea](https://github.com/dl0312/open-apis-korea)

[공공데이터 포털](https://www.data.go.kr/tcs/puc/selectPublicUseCaseListView.do)

[서울 열린데이터광장](https://data.seoul.go.kr/datasetRanking/popular.do)

![스크린샷 2026-04-28 오후 3.26.20.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.26.20.png)

![스크린샷 2026-04-28 오후 3.43.31.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.43.31.png)

optional 메서드는 필수 구현 메서드가 아니다.

![스크린샷 2026-04-28 오후 3.45.06.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.45.06.png)

옵셔널이 없는 메서드는 필수 메서드이다.

![스크린샷 2026-04-28 오후 3.48.34.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.48.34.png)

![스크린샷 2026-04-28 오후 4.19.47.png](iOS%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%209%EC%A3%BC%EC%B0%A8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-04-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.19.47.png)`,Wr=`# 빅데이터 10주차

작성일자: 2026/05/11
과목: 빅데이터
교수: 고수정
요약: 텍스트마이닝과 감성분석
isEnable?: Yes

# 텍스트마이닝

머신러닝에서 텍스트 데이터를 수치 데이터로 변환하는 핵심 기술. 

대량의 비정형 텍스트 데이터에서 유용한 정보를 추출하고 데이터의 패턴을 발견하여 가치 있는 지식을 얻는 과정. 자연어처리, 데이터 마이닝, 기계 학습 등 다양한 기술이 활용된다.

<aside>

## 텍스트마이닝의 절차

1. 데이터 수집
2. 데이터 전처리
3. 특징 추출
4. 패턴 분석
5. 해석 및 시각화
</aside>

## 감성분석

텍스트 데이터에서 감정이나 의견, 태도를 자동으로 파악하고 분류하는 컴퓨터 과학 및 데이터 분석의 한 방법. 소셜 미디어 게시물, 제품리뷰, 설문 조사 응답, 뉴스 기사 등의 텍스트에서 사람들의 감정을 긍정/부정/중립으로 구분하는 데에 사용한다.

### 말뭉치

여러 개의 문장을 모아놓은 텍스트의 집합. 텍스트 데이터를 저장하고 처리하기 위한 컨테이너 역할을 하며, 데이터의 내용을 변경하지 않음.

<aside>

#### 감성분석의 절차

1. 감성사전 구축
2. 말뭉치 데이터 수집 및 저장
3. 감성분석
4. 결과 시각화 및 분석
</aside>`,Gr=`# 빅데이터 1주차

작성일자: 2026/03/09   (GMT+9)
과목: 빅데이터
교수: 고수정
요약: R 및 RStudio 설치, R의 기본 문법 학습
isEnable?: Yes

사용 툴은 RStudio

정규표현식을 따름

주석은 #

산술연산함수는 아래와 같음

| 함수 | 의미 | 용례 |
| --- | --- | --- |
| log() | 로그함수 | log(10), log(10, base=2) |
| sqrt() | 제곱근 | sqrt(36) |
| max() | 가장 큰 값 | max(3, 9, 5) |
| min() | 가장 작은 값 | min(3, 9, 5) |
| abs() | 절댓값 | abs(-10) |
| factorial() | 팩토리얼 | factorial(5) |
| sin(), cos(), tan() | 삼각함수 | sin(pi/2) |

변수는 선언과 동시에 초기화되어야 한다.

변수는 변수명 <- 값으로 선언한다. ex) a <- 10

a = 10으로도 가능하나 권장되지 않는다.

print()를 통해 콘솔에서 변수 출력이 가능하나 그냥 변수명을 써도 출력 가능하다.

변수명은 아래의 규칙을 따라야 한다.

1. 첫 글자는 영문자나 마침표(.)로 시작
일반적으로 영문자로 시작
2. 두 번째 글자부터는 영문자, 숫자, 마침표(.), 언더바(_) 사용
3. 대문자와 소문자가 구분됨
4. 변수명 중간에는 스페이스가 들어갈 수 없음

R에서 사용 가능한 값의 자료형

| 자료형 | 사용 예 | 비고 |
| --- | --- | --- |
| 숫자형 | 1, 2, 3, -4, 12.8 | 정수와 실수 모두 가능 |
| 문자형 | "Tom", 'Jane' | 작은따옴표나 큰따옴표로 묶어서 표현 |
| 논리형 | TRUE, FALSE | 반드시 따옴표 없는 대문자로 표기하며, T나 F로 줄여서 사용하는 것도 가능 |
| 특수값 | NULL | 정의되어 있지 않음을 의미하며, 자료형도 없고 길이도 0임 |
| 특수값 | NA | 결측값(missing value) |
| 특수값 | NaN | 수학적으로 정의가 불가능한 값 (예: sqrt(-3)) |
| 특수값 | Inf, -Inf | 양의 무한대(Inf), 음의 무한대(-Inf) |

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image.png)

R은 약타입 언어이므로 변수의 자료형이 자유롭게 바뀔 수 있다
위와 같이 변수의 타입이 특별한 제약 없이 변경된다.

R에서 1차원 배열은 벡터로 표현 가능하다.
2차원 배열은 매트릭스 or 데이터프레임으로 표현한다.

![c는 combine의 약자이며, 여러 값을 하나의 벡터로 결합하는 데에 사용하는 함수이다.](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%201.png)

c는 combine의 약자이며, 여러 값을 하나의 벡터로 결합하는 데에 사용하는 함수이다.

![벡터로 묶인 데이터는 동일한 자료형으로 통일된다.
정수형 데이터가 문자형 데이터로 변경된 것이 보인다.](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%202.png)

벡터로 묶인 데이터는 동일한 자료형으로 통일된다.
정수형 데이터가 문자형 데이터로 변경된 것이 보인다.

![연속적인 값들을 표현할 때에는 :을 사용한다. 이 때 콜론의 좌/우의 값은 포함된다.
출력에서 줄바꿈 시마다 좌측에 나오는 숫자는 현재 줄의 가장 좌측의 값이 몇 번째인지를 나타낸다. v2의 출력의 58은 12번째 출력이다.](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%203.png)

연속적인 값들을 표현할 때에는 :을 사용한다. 이 때 콜론의 좌/우의 값은 포함된다.
출력에서 줄바꿈 시마다 좌측에 나오는 숫자는 현재 줄의 가장 좌측의 값이 몇 번째인지를 나타낸다. v2의 출력의 58은 12번째 출력이다.

![seq()는 일정한 간격의 숫자를 표현할 때 사용하는 함수이다. 첫 번째 인수는 시작값, 두 번째 인수는 끝값, 세 번째 인수는 간격이다.](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%204.png)

seq()는 일정한 간격의 숫자를 표현할 때 사용하는 함수이다. 첫 번째 인수는 시작값, 두 번째 인수는 끝값, 세 번째 인수는 간격이다.

![rep()는 첫 인수를 times만큼 반복하는 함수이다.](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%205.png)

rep()는 첫 인수를 times만큼 반복하는 함수이다.

![벡터에 저장된 값에 이름을 부여할 때에는 names()를 사용한다.](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%206.png)

벡터에 저장된 값에 이름을 부여할 때에는 names()를 사용한다.

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%207.png)

벡터에서 인덱스는 0이 아닌 1로 시작한다.

벡터[인덱스]로 벡터의 특정 위치에 존재하는 값에 접근할 수 있으며, 만약 인덱스로 접근한 위치에 값이 존재하지 않을 경우 NA를 출력한다.

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%208.png)

인덱스 접근은 위와 같이 활용 가능하다.

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%209.png)

names()를 활용하여 벡터의 값에 이름을 붙였을 경우 인덱스 접근으로 이름과 값이 같이 출력된다. 또한 인덱스가 아닌 이름으로도 벡터의 특정 위치에 접근할 수 있다.

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%201%EC%A3%BC%EC%B0%A8/image%2010.png)

인덱스를 통해 벡터의 특정 위치에 있는 값을 변경할 수도 있다. 

---

이하 AI 요약

## 📝 빅데이터 1주차 총정리

### 🛠️ 개발 환경

- 사용 툴: RStudio
- 정규표현식을 따름
- 주석: # 기호 사용

### 🔢 산술연산함수

R에서 제공하는 주요 산술연산함수는 log(), sqrt(), max(), min(), abs(), factorial(), sin(), cos(), tan() 등이 있으며, 각각 로그, 제곱근, 최댓값, 최솟값, 절댓값, 팩토리얼, 삼각함수 계산에 사용됩니다.

### 💾 변수

- 변수는 선언과 동시에 초기화되어야 함
- 선언 방식: \`변수명 &lt;- 값\` (예: \`a &lt;- 10\`)
- \`=\` 기호도 사용 가능하나 권장되지 않음
- 출력: \`print()\` 함수 또는 변수명만 입력

### 📋 변수명 규칙

1. 첫 글자는 영문자나 마침표(.)로 시작 (일반적으로 영문자)
2. 두 번째 글자부터는 영문자, 숫자, 마침표(.), 언더바(_) 사용 가능
3. 대소문자 구분됨
4. 변수명 중간에 스페이스 불가

### 🏷️ 자료형

- **숫자형:** 정수와 실수 모두 가능 (예: 1, 2.5, -4)
- **문자형:** 작은따옴표나 큰따옴표로 표현 (예: "Tom", 'Jane')
- **논리형:** TRUE, FALSE (대문자로 표기, T/F로 축약 가능)
- **특수값:** NULL (정의되지 않음), NA (결측값), NaN (정의 불가능한 값), Inf/-Inf (무한대)
- R은 약타입 언어로 변수의 자료형이 자유롭게 변경 가능

### 📊 데이터 구조

- **1차원:** 벡터
- **2차원:** 매트릭스 또는 데이터프레임

### 🔍 벡터 인덱싱

- 벡터의 인덱스는 1부터 시작 (0이 아님)
- 접근 방식: \`벡터[인덱스]\`
- 존재하지 않는 인덱스 접근 시 NA 출력
- \`names()\`로 벡터 값에 이름을 부여하면 이름으로도 접근 가능
- 인덱스를 통해 벡터의 특정 위치 값 변경 가능

### ✅ 핵심 포인트

R 프로그래밍의 기초로서 RStudio 환경에서 변수 선언, 다양한 자료형 활용, 벡터를 통한 데이터 구조 이해, 그리고 인덱싱을 통한 데이터 접근 및 조작 방법을 학습하였습니다.`,Kr=`# 빅데이터 2주차

작성일자: 2026/03/16   (GMT+9)
과목: 빅데이터
교수: 고수정
요약: 데이터 파악, 수정 및 가공
isEnable?: Yes

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image.png)

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image%201.png)

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image%202.png)

리스트: 다양한 데이터 유형의 요소를 저장하며 동일한 값이 저장될 수 있음
리스트는 순차적으로 인덱싱되거나 이름을 지닌 요소로 구성될 수 있으며 $나 [[]]를 사용하여 접근

팩터: 단일 데이터 유형의 요소를 저장하며 동일한 값을 저장할 수 없음
보통 남성과 여성이나 낮음, 중간, 높음 등의 범주형 데이터를 저장함

몸무게 등의 단일 주제 데이터를 저장할 때에는 벡터를 사용하며, 키, 몸무게, 나이 등 여러 주제(다차원)의 데이터를 저장할 때에는 매트릭스나 데이터프레임을 사용한다.

매트릭스는 데이터 테이블의 모든 셀의 값들이 동일한 타입이다.
데이터프레임은 각 셀의 값들의 타입이 다를 수 있다.

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image%203.png)

매트릭스의 예시: 

\`\`\`r
z <- matrix(1:20, nrow=4, ncol=5)
# z에 1부터 20까지의 값을 저장하는 4행 5열의 매트릭스를 저장 

z1 <- matrix(1:20, nrow=4, ncol=5, byrow = T)
# 값 저장은 열 -> 행 순이지만 byrow = T를 추가하여 행 -> 열 순서로 바꿀 수 있다.
\`\`\`

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image%204.png)

벡터와 벡터를 결합하여 새로운 매트릭스를 생성할 수 있다.

\`\`\`r
x <- c(1:3)
y <- c(3:5)

# 각 인수로 주어진 벡터를 열 방향으로 결합
m1 <- cbind(x, y)
m1

# 각 인수로 주어진 벡터를 행 방향으로 결합
m2 <- rbind(x, y)
m2
\`\`\`

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image%205.png)

데이터프레임은 숫자형 벡터, 문자형 벡터 등 서로 다른 형태의 데이터를 2차원 데이터 테이블로 묶을 수 있는 자료구조이다.
데이터프레임은 자료형이 같을 수도 있고 다를 수도 있는 여러 개의 벡터를 세로 방향으로 묶는다.

\`\`\`r
city <- c("Seoul", "Tokyo")
rank <- c(1, 3)
city.info <- data.frame(city, rank)
city.info
\`\`\`

![image.png](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/image%206.png)

---

이하 AI 요약

## 요약

이 수업에서는 R의 주요 데이터 구조인 리스트, 팩터, 매트릭스, 데이터프레임에 대해 학습했습니다.

- **리스트:** 다양한 데이터 유형을 저장할 수 있으며, $ 또는 [[]]로 접근 가능
- **팩터:** 단일 데이터 유형의 범주형 데이터를 저장 (예: 성별, 등급)
- **매트릭스:** 동일한 데이터 타입의 2차원 테이블. cbind()와 rbind()로 벡터를 결합하여 생성 가능
- **데이터프레임:** 서로 다른 데이터 타입의 벡터를 세로 방향으로 결합한 2차원 테이블

단일 주제 데이터는 벡터로, 다차원 데이터는 매트릭스나 데이터프레임으로 저장합니다. 매트릭스는 모든 셀이 동일한 타입이지만, 데이터프레임은 각 열마다 다른 타입을 가질 수 있습니다.

+R은 기본적으로 변수가 객체, 즉 참조 타입이다.
따라서 변수는 데이터가 저장된 주소를 가리키는 포인터를 저장하며, 변수를 변수에 대입 시 데이터가 아닌 해당 주소가 대입된다.(얕은 복사)

단, 대입된 변수의 값이 바뀌는 경우 그 즉시 실제 데이터를 복사하여 객체를 분리한다. 때문에 대입된 변수를 수정 시 원본 변수의 값이 변경되지 않는다.

 

[mj_chapter2.R](%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%202%EC%A3%BC%EC%B0%A8/mj_chapter2.r)`,qr=`# 빅데이터 3주차

작성일자: 2026/03/23   (GMT+9)
과목: 빅데이터
교수: 고수정
요약: 데이터 가공
isEnable?: Yes

데이터셋의 기본 정보를 확인하는 함수 모음

| **함수** | **설명** |
| --- | --- |
| dim(ds) | 행과 열의 개수 출력 |
| nrow(ds) | 행의 개수 출력 |
| ncol(ds) | 열의 개수 출력 |
| colnames(ds) | 열 이름 출력. names(ds)과 결과 동일 |
| head(ds) | 데이터셋의 앞부분 일부 출력, 기본 6행 |
| tail(ds) | 데이터셋의 뒷부분 일부 출력, 기본 6행 |
| str(ds) | 데이터셋 요약 |
| levels(ds) | 컬럼 나열(중복 제거) |
| table(ds[, ”cn”]) | 컬럼별 행 갯수 |
| colSums(ds[, c(x, y)) | 각 열별 합계 |
| colMeans(ds[, c(, y)]) | 각 열별 평균 |
| rowSums(ds[c(a, b), c(x, y)]) | 각 열 및 행 합계 |
| rowMeans(ds[c(a, b), c(x, y)]) | 각 열 및 합 평균 |
| t(ds) | 전치 |
| class(ds) | 데이터셋의 자료구조 확인 |
| is.matrix(ds) | 데이터셋이 매트리스인지? |
| is.data.frame(ds) | 데이터셋이 데이터프레임인지? |
| as.data.frame(ds) | 매트릭스를 데이터프레임으로 변환 |
| ad.matrix(ds) | 데이터프레임을 매트릭스로 변환 |
| read.csv(”fn.csv”, header=T) | 제목 추가하여 CSV 파일 읽기 |
| write.csv(ds, “fn.csv”, row.names=F) | 행 번호를 붙이지 않고 CSV 파일 저장 |

\`\`\`r
# ds: dataset, cn: colunm name, rv: row value
## ds에서 cn이 "rv"인 행만을 추출하여 IR.1에 저장
IR.1 <- subset(ds, cn=="rv")
head(IR.1)

## ds에서 cn1이 x보다 크며 cn2가 y보다 큰 행만을 추출하여 IR.2에 저장
IR.2 <- subset(ds, cn1 > x & cn2 > y)
tail(IR.2)
\`\`\`

\`\`\`r
class(ds)
is.matrix(ds)
is.data.frame(ds)
\`\`\``,Jr=`# 빅데이터 4주차

작성일자: 2026/03/30   (GMT+9)
과목: 빅데이터
교수: 고수정
요약: 조건문, 반복문, 함수
isEnable?: Yes

### if-else

\`\`\`r
job.type <- 'A'

if(job.type == 'B') {
	bonus <- 200
} else {
	bonus <- 100
}

print(bonus)
\`\`\`

\`\`\`r
a <- 10
b <- 20
c <- ifelse(a == b, a, b)
print(c)
// 삼항 연산자 스타일
\`\`\`

else는 if문의 코드블록이 끝나는 부분의 닫는 중괄호와 같은 줄에 작성되어야 한다.

### for

\`\`\`r
for(i in 1:5) { print('*') } // 개행
for(i in 1:5) { cat('*') } // 개행 x
\`\`\`

### while

\`\`\`r
sum <- 0
i <- 1

while(i <= 5) {
	print(i)
}
\`\`\`

\`\`\`r
for(i in 1:5) {
	if(i >= 2) break
	print(i)
}
\`\`\`

\`\`\`r
for(i in 1:10) {
	if (i %% 2 == 0) 
		next
	print(i)
}
\`\`\`

### apply()

반복의 대상이 matrix나 dataframe의 row나 column일 경우 for이나 while 대신 apply()를 사용할 수 있다.

\`apply(dataset, vector, func)\`
vector는 행/열 중 진행할 방향(1은 행, 2는 열), func는 적용할 함수를 의미한다.
func는 max, min 등이 들어갈 수 있으며 소괄호 및 인수는 입력하지 않는다.

### 사용자 정의 함수

\`\`\`r
funcname <- function(parameters) {
	...
	return(retvalue)
}
\`\`\`

### 조건에 맞는 데이터의 위치 찾기

\`\`\`r
score <- c(71, 88, 84)
which(score == 88)
which(score >= 70)
which.max(score)
which.min(score)
\`\`\``,Yr=`# 빅데이터 5주차

작성일자: 2026/04/06
과목: 빅데이터
교수: 고수정
요약: 단일 다중변수 자료의 탐색
isEnable?: Yes

## 자료의 특성에 따른 분류

- 범주형 자료(질적자료)
    - 성별과 같이 범주 또는 그룹으로 구분할 수 있는 값으로 구성된 자료.
- 연속형 자료(양적자료)
    - 값들의 대소 비교가 가능하고, 평균/최댓값/최솟값과 같은 산술연산이 가능한 자료.
- 단일변수 자료(일변량 자료)
    - 하나의 변수로만 구성된 자료.
- 다중변수 자료(다변량 자료)
    - 두 개 이상의 변수로 구성된 자료.
    - 특별히 두 개의 변수로 구성된 자료를 이변량 자료라고도 부른다.

### 중앙값

자료의 값들을 크기순 일렬로 줄세웠을 때 가장 중앙에 위치하는 값.

### 사분위수

주어진 자료에 있는 값들을 크기순으로 나열했을 때 이것을 4등분하는 지점에 위치한 값들.
값들을 4등분하면 등분점이 3개 생기는데, 이를 오름차순으로 제1사분위수(Q1)부터 제3사분위수(Q3)이라고 한다. 이 때 Q2는 중앙값과 같다.

전체 자료를 4개로 나누므로, 4개의 구간에는 각각 약 25%만큼의 자료가 존재한다.

### 산점도

이변량 자료의 분포를 나타내는 그래프.

### 선그래프

다중변수 자료의 변수 중 하나가 시간을 나타내는 값을 지니는 경우 용이한 그래프.
이 때 자료가 시간의 변화에 따를 경우, 이를 시계열 자료라고 한다.

선그래프는 시계열 자료의 내용을 파악하는 가장 기본적인 방법이다.

## 단일변수 범주형 자료의 탐색

단일변수 범주형 자료(또는 일변량 질적 자료)에 대해 할 수 있는 기본적인 작업 중 하나는, 자료에 포함된 관측값들의 종류별로 갯수를 세는 것이다. 관측값들의 종류별 갯수를 세면 종류별 비율을 알아낼 수 있다.

이는 막대그래프나 원그래프로 표현 가능하다.

### 숫자로 표현된 범주형 자료

숫자 형태의 범주형 자료도 문자 형태의 범주형 자료와 마찬가지로 도수분포를 계산한 후 막대그래프와 원그래프로 자료 내용을 확인할 수 있다.

## 단일변수 연속형 자료의 탐색

### 히스토그램

막대그래프와 외관이 비슷한 그래프. 연속형 자료의 분포를 시각화할 때 사용한다.
막대그래프를 그리기 위해서는 값의 종류별로 개수를 셀 수 있어야 하나, 키와 몸무게 등의 자료는 값의 종류라는 개념이 없으므로 구간을 나누고 구간에 속하는 값들의 개수를 세는 방법을 사용한다.

\`\`\`r
#기초 1
f.local <- c('Seoul', 'Busan', 'Seoul', 'Incheon', 'Busan')
f.local
table(f.local)

#기초 2
f.local <- c('Seoul', 'Busan', 'Seoul', 'Incheon', 'Busan')
ds <- table(f.local)
ds
barplot(ds, main='지역분포')

#기초 3
ds <- table(f.local)
ds
pie(ds, main='지역분포')

#기초 4
weight <- c(2,3,4,5)
mean(weight)
median(weight)
weight.heavy <- c(weight, 10)
mean(weight.heavy)
median(weight.heavy)

#기초 5
mydata <- c(1,2,3,4)
quantile(mydata)
quantile(mydata, (0:10)/10)

#기초 6
score <- c(45.5, 46.1, 50.6, 71.3, 55.2, 67.1)
hist(score,
     main='수학점수',
     xlab='점수',
     ylab='빈도수',
     border="blue",
     col="green",
     las=2)

#기초 7
score <- c(10, 50, 50, 60, 70, 80, 100)
quantile(score)
boxplot(score, main='수학점수')

#기초 8
wt <- c(10, 20, 30, 40, 50)
mpg <- c(50, 52.1, 53.4, 55.1, 60)
plot(wt, mpg, 
     main='용돈-몸무게 그래프',
     xlab='용돈',
     ylab='몸무게',
     col="red",
     pch=19)

#기초 9
wt <- c(10, 20, 30, 40, 50)
mpg <- c(50, 52.1, 53.4, 55.1, 60)
sp <- c(8, 8, 9, 9, 9)
st <- data.frame(wt, mpg, sp)
pairs(st, main="상관 그래프")

#기초 10
day = c(1:7)
sleeping = c(6, 7, 8, 5, 6, 7, 8)
plot(day,
     sleeping,
     main="요일별 수면 시간 통계",
     type="l",
     lty=2,
     lwd=2,
     xlab="day",
     ylab="sleeping time")

#코드 1
favorite <- c('WINTER', 'SUMMER', 'SPRING', 
              'SUMMER', 'SUMMER', 'FALL', 
              'FALL', 'SUMMER', 'SPRING', 'SPRING')
favorite
table(favorite)
table(favorite)/length(favorite)

#코드 2
ds <- table(favorite)
ds
barplot(ds, main='favorite season')

#코드 3
ds <- table(favorite)
ds
pie(ds, main='favorite season')

#코드 4
favorite.color <- c(2,3,2,1,1,2,2,1,3,2,1,3,2,1,2)
ds <- table(favorite.color)
ds
colors <- c('green', 'red', 'blue')
names(ds) <- colors
ds
barplot(ds, main='favorite color', col=colors)
pie(ds, main='favorite color', col=colors)

#코드 5
weight <- c(60, 62, 64, 65, 68, 69)
weaght.heavy <- c(weight, 120)
weight
weight.heavy
mean(weight)
mean(weight.heavy)
median(weight)
median(weight.heavy)

#코드 6
mydata <- c(60, 62, 64, 65, 68, 69, 120)
quantile(mydata)
quantile(mydata, (0:10)/10)

#코드 7
head(cars)
dist <- cars[,2]
hist(dist, 
     main='Histogram for 제동거리',
     xlab='제동거리',
     ylab='빈도수',
     border="blue",
     col="green",
     las=2)

#코드 8
dist <- cars[,2]
boxplot(dist, main="자동차 제동거리")

#코드 9
wt <- mtcars$wt
mpg <- mtcars$mpg
plot(wt, mpg,
     main="중량-연비 그래프",
     xlab='중량',
     ylab='연비(MPG)',
     col="red",
     pch=19)

#코드 10
vars <- c("mpg", "disp", "drat", "wt")
target <- mtcars[,vars]
head(target)
pairs(target, main="Multi Plots")

#코드 11
month <- c(1:12)
late1 <- c(5,8,7,9,4,6,12,13,8,6,6,4)
late2 <- c(4,6,5,8,7,8,20,11,6,5,7,3)
plot(month, 
     late1,
     main="Late Students",
     type="b",
     lty=1,
     col="red",
     xlab="Month",
     ylab="Late cnt")

#코드 12
lines(month,
      late2,
      type="o",
      col = "blue")

#종합 1
## 1
result <- c("P", "P", "F", "P", "F", 
            "P", "F", "P", "P", "F")
## 2
table(result)
## 3
barplot(table(result))
## 4
pie(table(result))

#종합 2
drink <- c('커피', '주스', '물', '커피', '탄산', '주스',
           '물', '커피', '탄산', '주스', '커피', '물',
           '탄산', '커피', '주스')
## 1
freq_table <- table(drink)
print(freq_table)
barplot(freq_table, 
        main="음료 판매 현황",
        xlab="음료 종류",
        ylab="판매 수량",
        col='skyblue')
pie(freq_table, labels=paste(names(freq_table)))
pie(freq_table, 
    labels=paste(drink, 
                 round(freq_table/sum(freq_table)*100, 1), 
                 "%"), 
    main="음료 판매 비율")

#종합 3
## 1
season <- c('여름', '겨울', '봄', '가을', '여름', 
            '가을', '겨울', '여름', '여름', '가을')
## 2
table(season)
## 3
barplot(table(season), 
        main="박민재 선호계절",
        xlab="계절",
        ylab="빈도")
## 4
pie(table(season),
    main="박민재 선호계절",
    labels=season)

#종합 4
## 1
score <- c(90,85,73,80,85,65,78,50,68,96)
names(score) <- c('KOR', 'ENG', 'ATH', 'HIST', 'SOC',
                  'MUSIC', 'BIO', 'EARTH', 'PHY', 'ART')
## 2
score

## 3
mean(score)
median(score)

## 4
boxplot(score)

## 5
hist(score, 
     main="박민재 학생성적",
     xlab="score",
     ylab="Frequency",
     col="purple")

#종합 5
plot(pressure$temperature, 
     pressure$pressure)

#종합 6
plot(iris$Sepal.Length, iris$Sepal.Width,
     main="꽃받침 길이와 너비의 관계",
     xlab="꽃받침 길이",
     ylab="꽃받침 너비",
     col='red')

#종합 7
income <- c(121,99,25,35,40,30,150,24,50,60)
period <- c(19,20,16,16,18,12,24,12,16,17)
plot(income, period,
     main="박민재")

#종합 8
year <- c(2021,2022,2023,2024,2025,2026)
population <- c(52123, 52261, 52388, 52504, 52609, 52704)
plot(year, population,
     type = "o",
     main = "연도별 예상 인구수 추계",
     xlab = "연도",
     ylab = "인구수 (천명)",
     pch = 16,
     col = "blue")

#종합 9
year <- c(2018, 2019, 2020, 2021, 2022, 2023)
temp <- c(12.4, 13.1, 13.8, 14.2, 14.9, 15.3)
plot(year, temp,
     type="b",
     main="연도별 평균 기온 변화",
     xlab="연도",
     ylab="평균기온(°C)",
     pch=16,
     col="tomato"
)

#종합 10
day <- c(1,2,3,4,5)
count <- c(45,62,58,71,83)
plot(day, count,
     type="p",
     main="일별 줄넘기 횟수",
     xlab="날짜",
     ylab="횟수",
     col="blue")

grade <- c('S', 'A', 'B', 'A', 'S', 
           'B', 'A', 'S', 'A', 'B')
grade_table <- table(grade)
barplot(grade_table, 
        main="성취 등급 분포", 
        col=c("gold", "skyblue", "pink"))
pie(grade_table,
    labels=paste(names(grade_table)))
pie(grade_table,
    labels=paste(names(grade_table), round(grade_table/sum(grade_table)*100, 1), "%"),
    main="성취 등급 비율")
\`\`\``,Xr=`# 빅데이터 6주차

작성일자: 2026/04/13
과목: 빅데이터
교수: 고수정
요약: 데이터전처리
isEnable?: Yes

## 결측값

데이터를 수집하고 저장하는 과정에서 저장할 값을 얻지 못했을 경우 발생하는 데이터의 빈 자리. 데이터셋에 결측값이 섞일 경우 데이터 분석 시 여러 문제를 야기할 수 있다.

따라서 결측값은 적절히 처리되어야 하며, 결측값을 처리하는 방법에는 결측값을 제거 및 제외하거나 결측값을 추정하여 적당한 값으로 치환하는 방법이 있다.

## 특이값

정상적으로 생각되는 데이터의 분포범위 밖에 위치하는 값들을 의미하며, 이상치라고도 부른다. 특이값은 전체 데이터의 양상을 파악하는 데에 왜곡을 가져올 수 있으므로 분석 시 제외하는 경우가 많다.

## 샘플링

주어진 값들이 있을 때 그 중 임의 개수의 값들을 추출하는 작업.

## 집계

2차원 데이터는 데이터 그룹에 대해 합계나 평균을 계산하여야 하는 경우가 많은데, 이를 집계라고 한다. 

## 병합

분리된 데이터를 공통 열 기준 하나로 합치는 작업을 의미한다.

\`\`\`r
#기초 1
z <- c(1,2,3,NA)
is.na(z)
sum(is.na(z))
z[is.na(z)] <- 0
z

#기초 2
x <- c(NA, 2,3)
y <- c(4,5,6)
xy <- data.frame(x,y)
xy
col_na <- function(y) { return(sum(is.na(y))) }
na.count <- apply(xy, 2, FUN=col_na)
na.count

#기초 3
xy
xy[!complete.cases(xy),]
xy.rm <- xy[complete.cases(xy),]
xy.rm

#기초 4
height <- c(165, 168, 170, 172, 175, 178, 180, 182, 185, 210)
test1 <- data.frame(height)
boxplot(test1$height, main="키 분포", ylab="키(cm)")
out.val <- boxplot.stats(test1$height)$out
out.val

#기초 5
test2 <- test1
test2
test2$height[test2$height %in% out.val] <- NA
test2

#기초 6
sp <- split(iris, iris$Species)
sp$setosa

#기초 7
x <- c(1:10)
y <- sample(x, size=3, replace=F)
y

#기초 8
x <- data.frame(name=c("a", "b", "a", "b"), math=c(90,80,40,40))
x
agg <- aggregate(math~name, data=x, FUN=mean)
agg

#기초 9
x <- data.frame(name=c("a", "b", "c"), math=c(90,80,40))
y <- data.frame(name=c("a", "b", "c"), korean=c(75,60,90))
x
y
z <- merge(x,y,by=c("name"))
z

#코드 1
z <- c(1,2,3,NA,5,NA,8)
sum(z)
is.na(z)

#코드 2
z2 <- c(5,8,1,NA,3,NA,7)
sum(is.na(z2))

#코드 3
x <- c(1,2,3)
y <- c(4,5,6)
y[3] <- NA
xy1 <- data.frame(x,y)
col_na <- function(y) { return(sum(is.na(y))) }
na_count <- apply(xy1, 1, FUN=col_na)
na_count

#코드 4
head(xy1)
xy1[!complete.cases(xy1),]
y_c <- xy1[complete.cases(xy1),]
y_c

#코드 5
region_data <- data.frame(
  Region=c("A", "B", "C", "D", "E"),
  Area=c(120,350,200,180,1500),
  Population=c(80,120,75,95,300)
)
region_data
boxplot(region_data$Area)
boxplot.stats(region_data$Area)$out

#코드 6
out.val <- boxplot.stats(region_data$Area)$out
region_data$Area[region_data$Area %in% out.val] <- NA
head(region_data)

#코드 7
head(region_data)
newdata <- region_data$Area[!is.na(region_data$Area)]
head(newdata)

#코드 8
student_data <- data.frame(
  Name=c("Alex", "Brian", "Cindy", "David", "Emma", "Frank"),
  Gender=c("M", "M", "F", "M", "F", "M"),
  Score=c(85,92,78,64,91,75)
)
student_data
sp <- split(student_data, student_data$Gender)
head(sp$F)
head(sp$M)

#코드 9
x <- c(1:100)
y <- sample(x, size=10, replace=F)
y

#코드 10
sample(1:20, size=5, replace=F)
sample(1:20, size=5, replace=T)
sample(1:20, size=5, replace=T)

#코드 11
simple_data <- data.frame(
  Group=c("A", "A", "B", "B"),
  Val1=c(5,7,10,14)
)
simple_data
agg <- aggregate(Val1~Group, data=simple_data, FUN=sd)
agg
agg

#코드 12
x <- data.frame(name=c("a", "b", "c"), math=c(90,80,40))
y <- data.frame(name=c("a", "b", "c"), korean=c(75,60,90))
x
y
z <- merge(x,y,by=c("name"))
z

#종합 1
x <- c(10,NA,30,NA)
y <- c(50,60,NA,80)
xy_m <- data.frame(x,y)
xy_m
col_na <- function(y) { return(sum(is.na(y))) }
na_count <- apply(xy_m, 1, FUN=col_na)
na_count

#종합 2
name <- c("Alice", "Bob", NA, "Diana", "Eve")
score <- c(85, NA,90, NA, 78)
grade <- c("A", "B", "A", NA, "C")
student_df <- data.frame(name, score, grade)
student_df
check_na <- function(z) { return(which(is.na(z))) }
na_pos <- apply(student_df, 2, FUN=check_na)
na_pos

#종합 3
x <- c(10,20,NA,NA)
y <- c(10000,60,70,10)
z1 <- data.frame(x,y)
z1
sum(is.na(z1))
z1[!complete.cases(z1),]
z1.rm <- z1[complete.cases(z1),]
z1.rm

#종합 4
product <- c("사과", "바나나", "포도", NA, "딸기")
price <- c(1200,NA,3000,2500,NA)
df <- data.frame(product, price)
df
sum(is.na(df))
na_rows <- which(!complete.cases(df))
df[na_rows,]
df.rm <- df[complete.cases(df),]
df.rm

#종합 5
x <- c(10,20,10,20,30,40,70)
y <- c(100000000,60,70,10,5,10,20)
z.val <- data.frame(x,y)
z.val
boxplot(z.val$y)
zval.out <- boxplot.stats(z.val$y)$out
zval.out
z.val$y[z.val$y %in% zval.out] <- NA
z.val

#종합 6
x <- data.frame(
  name=c("a", "b", "a", "b"), 
  math=c(90,80,40,40)
)
x
sp <- split(x, x$name)
sp$a

#종합 7
df <- data.frame(
  team=c("A", "B", "A", "B", "A"),
  score=c(85,70,90,60,75)
)
sp <- split(df, df$team)
sp$B

#종합 8
x <- c(1:100)
y <- sample(x, size=10, replace=T)
y

#종합 9
x <- data.frame(
  pageN=c(2,5,6,2,5),
  timeN=c(1,2,3,4,5),
  gender=c('M', 'F', 'M', 'F', 'M')
)
x
agg_page <- aggregate(pageN~gender, data=x, FUN=mean)
agg_time <- aggregate(timeN~gender, data=x, FUN=mean)
agg_page
agg_time

#종합 10
df <- data.frame(
  gender=c("남", "여", "남", "여", "남", "여"),
  sns=c("유튜브", "인스타", "틱톡", "유튜브", "인스타", "틱톡"),
  use_time=c(120,90,150,60,110,80)
)
my_range <- function(x) { return(max(x) - min(x)) }
agg_range <- aggregate(use_time~gender, data=df, FUN=my_range)
agg_range
my_sum <- function(x) { return(sum(x)) }
agg_sum <- aggregate(use_time~sns, data=df, FUN=my_sum)
agg_sum

#종합 11
df <- data.frame(
  major=c("공학", "인문", "공학", "인문", "공학", "인문"),
  hobby=c("운동", "게임", "독서", "운동", "게임", "독서"),
  hours=c(30,15,20,25,10,18)
)
df
my_range <- function(x) { return(max(x) - min(x)) }
agg_range <- aggregate(hours~major, data=df, FUN=my_range)
agg_range
my_sum <- function(x) { return(sum(x)) }
agg_sum <- aggregate(hours~hobby, data=df, FUN=my_sum)
agg_sum

#종합 12
x <- data.frame(
  colorN=c('R','B','W','Bl','P'),
  pageN=c(2,5,6,2,5)
)
y <- data.frame(
  colorN=c('R','B','W','Bl','P'),
  timeN=c(1,2,3,4,5)
)
z <- merge(x,y,by=c("colorN"))
z

\`\`\``,Zr=`# 빅데이터 7주차

작성일자: 2026/04/20
과목: 빅데이터
교수: 고수정
요약: 데이터시각화
isEnable?: Yes

데이터시각화: 숫자 형태의 데이터를 그래프나 그림 등의 형태로 표현하는 과정.

버블 차트: 앞에서 배운 산점도 위에 버블의 크기로 정보를 표시하는 시각화 방법. 산점도가 2개의 변수에 의한 위치정보를 표시한다면, 버블 차트는 3개의 변수정보를 하나의 그래프에 표시한다.`,Qr=`# 빅데이터 9주차

작성일자: 2026/05/04
과목: 빅데이터
교수: 고수정
요약: 연관분석과 워드클라우드
isEnable?: Yes

# 연관규칙분석(Association Analysis)

항목들간의 조건-결과로 이루어지는 패턴을 발견하는 기법. 

항목들 간 관계를 얻기 위해 한 항목의 존재가 다른 항목의 존재를 암시하는 조합을 발견하는 분석 방법이며, 즉 동시에 발생한 사건 간 관계를 정의하는 분석법.

<aside>

**거래(Transaction)**

하나의 식별자를 지니는 요소의 묶음.

</aside>

## 지지도(Support)

전체 거래에서 특정 품목(또는 품목들)이 포함된 거래의 비율.

$support(\\{X\\}) = {X의\\,거래건수 \\over {전체\\,거래건수}}$

$support(\\{X\\} \\rightarrow \\{Y\\}) = {X를\\,함께 \\,포함한\\,거래건수 \\over {전체\\,거래건수}}$

## 신뢰도(Confidence)

품목 A가 거래된 모든 거래 중 품목 B가 포함된 거래의 비율.

$confidence(\\{X\\} \\rightarrow \\{Y\\}) = {X,\\,Y를\\,포함한\\,거래건수 \\over X를\\,포함한\\,거래건수}$ 

## 향상도(lift)

품목간 상관성. 
두 품목이 독립적일 때에 비해 얼마나 자주 같이 거래되는가를 나타내는 비율.

$lift(\\{X\\} \\rightarrow \\{Y\\}) = {X,\\,Y를\\,포함한\\,거래건수 / 전체\\,거래건수 \\over {(X를\\,포함한\\,거래건수/전체\\,거래건수) \\times (Y를\\,포함한\\,거래건수/전체\\,거래건수)}}$

향상도는 높을수록 유효하거나 강한 연관관계를 지닌다고 해석하며, 반대로 낮을수록 약하거나 의미 없는 연관관계를 지닌다고 해석한다. 
특히 향상도가 1.0 이하일 경우 의미 없는 연관관계이며, 2.0 이상일 경우 강한 연관관계이다.

## 연관규칙분석과 관련된 알고리즘

- Apriori
- FP-growth
- PCY

### Apriori

연관규칙분석에 널리 이용되는 머신러닝 기법 중 하나.
지지도를 활용하여 어떠한 연관집합이 자주 발생하는지 발견한다.

Apriori 알고리즘은 다음과 같은 과정을 통해 연관규칙을 발견한다.

1. 빈도수 집합 탐색
2. 최소 지지도 확인 및 지정
3. 후보 집합 생성
4. 2~3 반복
5. 연관규칙 수행`,$r=`# 소프트웨어설계 2주차

작성일자: 2026/03/10   (GMT+9)
과목: 소프트웨어설계
교수: 남현우
요약: 기본적인 JS 문법 및 React 기초
isEnable?: Yes

js는 타입이 없어서 다양한 문제가 발생할 수 있다
그래서 let이나 const로 변수를 선언하는 것이 권장된다.

let은 재선언이 불가능한 변수. 덮어쓸 수는 있다.

const는 재선언 및 덮어쓰기가 불가능한 상수

![let은 재선언 시 경고를 출력한다.](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%202%EC%A3%BC%EC%B0%A8/image.png)

let은 재선언 시 경고를 출력한다.

다만 const로 정의한 변수를 변경할 수 있는 경우가 있다.
객체/배열의 오브젝트 타입의 데이터는 const로 정의해도 값 변경이 가능하다.
이는 객체/배열이 참조 객체이기 때문이다.

react에서는 const를 가장 많이 사용한다.
react에서 동적으로 바뀌는 값은 State라는 다른 개념으로 관리한다.
State로 관리하지 않으면서 처리 도중에 수정이 필요한 변수는 let으로 선언하여 사용한다.

기존에 문자열과 변수를 합칠 때에는 두 가지의 방법이 있다.
첫 번째는 + 연산자를 사용하는 것이며, 두 번째는 템플릿 문자열을 사용하는 것이다.
템플릿 문자열을 사용할 때는 문자열을 백틱으로 감싸고, 문자열 내에 \`\${변수명}\`을 넣는다.

\`\`\`jsx
const age = 24;
const a = \`나의 나이는 \${age}세입니다.\`;
\`\`\`

ES2015부터는 function 키워드를 이용하지 않고 함수를 선언할 수 있다.
기존 함수는 아래와 같이 선언했다.

\`\`\`jsx
function func1(value) { return value; }
\`\`\`

ES2015부터는 아래와 같이 함수를 선언할 수 있다. 수업에서는 화살표 함수라고 표현했는데 람다식 같다.

\`\`\`jsx
const func3 = (value) => { return value; }
\`\`\`

화살표 함수 작성 시에는 소괄호 생략이 가능하다.
단 파라미터가 2개 이상이면 소괄호를 생략하면 안 된다.

\`\`\`jsx
// 기본적으로는 아래와 같이 선언해야 하지만,
const func3 = (value) => { return value; }

// 실제로는 파라미터를 소괄호로 감싸지 않아도 된다. 파라미터가 한 개일 때만 가능함에 주의.
const func3 = value => { return value; }
\`\`\`

또한 return도 생략할 수 있다.
함수 내에 리턴문만 존재하며 함수가 1행일 경우 경우 중괄호 및 return을 생략 가능하다.

또한 반환값이 여럿일 경우 소괄호로 묶어도 리턴 생략이 가능하다.

\`\`\`jsx
// 아래의 경우
const func4 = (num1, num2) => { return num1 + num2; }

// 이렇게 선언할 수 있다. 이 때 함수는 1행이어야 한다. 
const func4 = (num1, num2) => num1 + num2;

// 이렇게 2행 이상일 경우 리턴이 나오지 않는 문제가 발생한다.
const func4 = (num1, num2) => 
	num1 + num2;
	
// 반환값이 여럿일 경우 소괄호로 묶으면 단일행 취급으로 한번에 반환할 수 있다.
const func5 = (val1, val2) => (
	{
		name: val1,
		age: val2,
	}
)
\`\`\`

객체에서 필드 정보를 추출할 때에는 분할 대입을 통해 코드를 간결히 할 수 있다.

\`\`\`jsx
// 아래와 같은 객체는
const myProfile = { 
	name: '홍길동', 
	age: 24, 
}

// 이렇게 변수 선언 시 필드명을 변수명으로 적시하여 간결하게 대입할 수 있다.
const { name, age } = myProfile;
const message = \`내 이름은 \${name}입니다. 나이는 \${age}세 입니다.\`;
console.log(message);

// 필드명을 변수명으로 하지 않고 싶을 경우 아래처럼 변수명을 따로 정할 수 있다.
const { name: newName, age: newAge } = myProfile;
const message = \`내 이름은 \${newName}입니다. 나이는 \${newAge}세 입니다.\`;
console.log(message);
\`\`\`

배열에서도 분할 대입이 가능하다.
변수 선언부에 []를 사용하여 배열에 저장된 순서에 임의 변수명을 설정하여 추출할 수 있다.

\`\`\`jsx
// 아래와 같은 배열은
const myProfile = ["홍길동", 24];

// 배열의 인덱스를 배열명에 적시할 수도 있지만
const message = \`내 이름은 \${myProfile[0]}입니다. 나이는 \${myProfile[1]}세입니다.\`;

// 배열에 저장된 순서대로 값을 변수에 대입하여 사용할 수도 있다. 
const [ name, age ] = myProfile;
const message = \`내 이름은 \${name}입니다. 나이는 \${age}세 입니다.\`;
\`\`\`

함수에는 디폴트 파라미터를 정할 수 있다.
호출 시 해당 자리에 인수를 안 넣으면 설정해 둔 디폴트값을 인수로 쓴다.

\`\`\`jsx
// 이 함수를 호출했을 때 인수를 안 넣으면 그냥 undifined가 뜬다.
const sayHello = (name) => console.log(\`\${name}님, 안녕하세요!\`);

// 디폴트를 설정하면 호출 시 인수를 안 박았을 때 디폴트를 인수로 쓴다.
const sayHello = (name="게스트") => console.log(\`\${name}님, 안녕하세요!\`);
\`\`\`

스프레드 구문(…)을 사용하면 배열 및 객체의 내부요소를 순차적으로 전개할 수 있다.

\`\`\`jsx
const arr1 = [1, 2];
const summaryFunc = (num1, num2) => console.log(num1 + num2);

// 일반적으로 배열값을 전달하는 경우
summaryFunc( arr1[0], arr1[1] );

// 스프레드 구문을 이용하는 방법
summaryFunc( ...arr1 );

// 아래와 같이 배열을 변수 및 배열에 대입하면
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

// 아래와 같은 결과가 나온다.
console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]

// 아래처럼 배열을 결합할 수도 있다.
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];
console.log(arr4);
console.log(arr6);
console.log(arr7);

// 객체도 가능.
const arr4 = {val1: 10, val2: 20};
const arr5 = {val3: 30, val4: 40};
const arr6 = {...arr4};
const arr7 = {...arr4, ...arr5};
console.log(arr4);
console.log(arr6);
console.log(arr7);
\`\`\`

**참고로 변수 선언 시 배열이나 객체 등의 객체 타입 변수를 그대로 대입하면(등호를 사용하면) 변수를 변경했을 때 원본 객체도 변경된다.**
이는 객체 타입 변수가 원본 데이터의 주소를 저장하기 때문이며, 따라서 반드시 스프레드 등으로 데이터를 복사하여야 한다.

\`\`\`jsx
const arr4 = [10, 20];

// 이걸 =로 대입하고
const arr8 = arr4;

// arr8의 처음 요소를 100으로 덮어씌우면
arr8[0] = 100;

// 원본도 [100, 20]이 된다.
console.log(arr4); 
\`\`\`

map, filter를 통해 배열 처리 시 기존 for문을 대체하여 효율적으로 코드작성이 가능하다.
map은 함수를 인수로 받는 고차 함수이다.

\`\`\`jsx
// 기존의 for문
const nameArr = ["홍길동", "이순신", "유관순"];
for(let index=0; index < nameArr.length; index++) { console.log(nameArr[index]); }

// map 메서드로 간결한 코드로 배열 순회가 가능하다.
nameArr.map((name) => console.log(name));

// 아래처럼도 가능.
nameArr.map((name, index) => console.log(\`\${index}번째 \${nameArr[index]} 입니다.\`))
\`\`\`

아래의 경우는 filter. 이것도 함수를 인수로 받는다.
필터는 map에 조건을 달아서 조건을 만족하는 것만 반환한다.

\`\`\`jsx
const numArr = [1, 2, 3, 4, 5];

// 홀수(2로 나눈 나머지가 1)인 경우만 추출한다.
const newNumArr = numArr.filter(num => num % 2 === 1;);
console.log(newNumArr); //[1, 3, 5]
\`\`\`

삼항 연산자.

\`\`\`jsx
const val1 = 1 > 0 ? "true입니다" : "false입니다.";
console.log(val1);

// 반환으로도 사용 가능.
const checkSumOver100 = (num1, num2) => num1+num2 > 100 ? "초과" : "허용 범위";
console.log(checkSumOver100(50, 40));
console.log(checkSumOver100(50, 70));
\`\`\`

React는 컴포넌트를 파일단위로 분리한다. 
export로 내보내고 import로 가져온다.

※ React에서 컴포넌트는 default export, 헬퍼 함수·상수는 named export가 관례
실제 React 프로젝트에서는 번들러(Webpack)를 통해 처리됨

\`\`\`jsx
// app.js
// ① named import → 반드시 { } 사용, 이름 일치
import { TAX_RATE, calcPrice } from "./utils.js";
// ② default import → { } 없이, 이름 자유
import formatPrice from "./utils.js";
// ③ 한 줄로 합치기
//import formatPrice, { TAX_RATE, calcPrice } from "./utils.js";
console.log(formatPrice(calcPrice(10000))); // "11,000원"

// utils.js
// ① named import → 반드시 { } 사용, 이름 일치
import { TAX_RATE, calcPrice } from "./utils.js";
// ② default import → { } 없이, 이름 자유
import formatPrice from "./utils.js";
// ③ 한 줄로 합치기
//import formatPrice, { TAX_RATE, calcPrice } from "./utils.js";
console.log(formatPrice(calcPrice(10000))); // "11,000원"
\`\`\`

**리액트는 웹 및 네이티브 사용자 인터페이스를 위한 라이브러리이다.**

**SPA(Single Page Application)**
단일 페이지로 구성된 웹 애플리케이션. 반대는 MPA(Multi Page Application).
하나의 HTML 틀을 만들어 놓고, 사용자가 요청할 그 페이지에 해당하는 콘텐츠를 가져와서 동적으로 페이지의 내용을 채워서 보여주는 방식.
리액트는 SPA를 쉽고 빠르게 만들 수 있도록 해 준다.

![image.png](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%202%EC%A3%BC%EC%B0%A8/image%201.png)

리액트는 Virtual DOM을 사용하여 최소한의 부분만을 찾아 빠르게 업데이트한다.
Virtual DOM이란 웹페이지와 실제 DOM 사이에서 중간 매개체 역할을 하는 일종의 매질을 의미한다.

![image.png](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%202%EC%A3%BC%EC%B0%A8/image%202.png)

리액트는 컴포넌트 기반 구조이다.
컴포넌트란 독립적인 기능을 사용하는 작은 기능 단위 모듈을 의미한다.

리액트에서는 모든 페이지가 컴포넌트 형태로 구성되며, 하나의 컴포넌트는 또 다른 여러 컴포넌트의 조합으로 구성될 수 있다.
이는 재사용성을 높이기 때문에 개발 기간 단축 및 유지보수에 용이하다.

![image.png](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%202%EC%A3%BC%EC%B0%A8/image%203.png)

리액트에서는 state라는 개념이 굉장히 중요하다.
state는 리액트 컴포넌트의 상태를 의미하는데, Virtual DOM은 state가 바뀐 컴포넌트만 업데이트한다.

성능 최적화를 위해서는  state의 관리가 중요하며, 컴포넌트의 갯수가 많아지면 상태관리의 복잡도가 증가한다.
대규모 프로젝트에서는 상태관리를 위해 Redux나 Zustand 등의 외부 라이브러리가 필요하다.

간단한 react 웹페이지의 예시.
아래는 버튼을 react 컴포넌트로 생성하는 웹페이지이다.

\`\`\`html
<!-- exam.html -->
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>안녕하세요!</h1>
    <div id="root"></div> <!-- Root Dom Node -->
    
    <!-- 리액트 가져오기 -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"><\/script>
    
    <!-- 리액트 컴포넌트 로드 -->
    <script src="MyButton.js"><\/script>
</body>
</html>
\`\`\`

\`\`\`jsx
// myButton.js
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Clicked here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
\`\`\`

\`\`\`css
/* style.css */
h1 { color: green; font-style: italic; }
\`\`\`

react 프로젝트는 아래와 같이 생성 및 실행한다.

\`\`\`bash
# 리액트 프로젝트 생성. 권한이 부족하다고 뜨는 경우가 있는데, 이 경우 명령 프롬프트를 관리자 권한으로 실행하면 된다.
npx create-react-app <project-name>

# 프로젝트 디렉터리로 이동
cd project-name

# 프로젝트 실행
npm start
\`\`\``,ei=`# 소프트웨어설계 3주차

작성일자: 2026/03/17   (GMT+9)
과목: 소프트웨어설계
교수: 남현우
요약: JSX 문법과 컴포넌트 설계
isEnable?: Yes

JSX: Javascript XML
js 내에서 html과 유사한 마크업을 작성할 수 있게 해 주는 리액트의 확장 문법.

js 코드와 html 코드를 함께 사용하는 형태.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

JSX는 내부적으로 XML/HTML 코드를 js로 변환한다.
이로 인해 코드가 간결해지고 가독성이 향상된다.

\`\`\`jsx
const element = (
	<h1 className="greeting">Hello, world!</h1>;
)
\`\`\`

\`\`\`jsx
const element = React.createElement(
	'h1', { className: 'greeting' }, 'Hello, world!'
)
\`\`\`

또한 보안성도 향상된다. 
JSX는 렌더링 전에 임베딩된 값을 모두 문자열로 변환하므로 인젝션 공격을 방어할 수 있다.

\`\`\`jsx
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;
\`\`\`

ReactDOM은 위 코드의 임베딩된 변수를 렌더링 전에 문자열로 변환하므로 XSS 공격을 방어할 수 있다.

## JSX 사용법

### 중괄호를 이용하여 JS 변수 및 함수 사용

\`\`\`jsx
const name = "인덕";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render (
	element,
	document.getElementById('root’)
);

\`\`\`

\`\`\`jsx
function formatterName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Hyunwoo',
	lastName: 'Nam'
}

const element = (
	<h1>Hello, {formatterName(user)}</h1>
);
ReactDOM.render (
	element, document.getElementById('root')
);
\`\`\`

### 태그의 속성에 값을 넣는 방법

\`\`\`jsx
const element = <div tabIndex="0"></div>;
\`\`\`

\`\`\`jsx
const element = <img src={user.avatarUrl}></img>;
\`\`\`

### 자식(children)을 정의하는 방법

\`\`\`jsx
const element = (
	<div>
		<h1>안녕하세요.</h1>
		<h2>반갑습니다.</h2>
	</div>
);
\`\`\`

---

JSX는 브라우저가 이해하지 못하며, 브라우저는 오직 표준 HTML/CSS/JS만 이해 가능하다.
따라서 JSX를 JS로 변환하고 여러 파일을 하나로 묶어주는 매개가 필요하다.

이 매개는 CRA와 Vite가 있는데, CRA는 현재 권장되지 않는다. 따라서 Vite를 주로 사용한다.

\`\`\`bash
npm create vite@latest my-app
# react 선택
## JavaScript 선택
### No 선택

cd my-app
npm install
npm run dev
\`\`\`

---

컴포넌트는 함수이다.
기존의 함수와 유사하나, 아래와 같은 차이점이 있다,

| **구분** | **일반 함수 (JavaScript)** | **리액트 컴포넌트 (React)** |
| --- | --- | --- |
| 입력 (Input) | 매개변수 (Arguments) | Props (속성) |
| 처리 (Process) | 더하기, 빼기 등 연산 | 데이터 가공, 로직 처리 |
| 출력 (Output) | 숫자, 문자열 (Data) | HTML (UI) |

\`\`\`jsx
function add(a, b) {
	const result = a + b;
	return result;
}

const value = add(10, 20);
console.log(value);
\`\`\`

\`\`\`jsx
function Profile(props) {
	const description = props.name + "님은" 
		+ props.job + "입니다.";
	return <div>{description}</div>
}

<Profile name="철수" job="개발자" />
\`\`\`

이외에도 함수와 다른 점이 있다.

1. **스네이크 케이스를 사용한다.**
    1. 일반 함수는 function add() {}처럼 카멜 케이스를 사용하지만, 컴포넌트는 function Card() {}처럼 스네이크 케이스를 사용한다.
    이는 컴포넌트를 일반적인 태그와 구분하기 위함이다.
2. **리턴값이 반드시 화면(JSX)이다.**
    1. 일반 함수는 return 100;처럼 리턴값이 다양할 수 있으나, 컴포넌트는 return <div>안녕하세요</div>;처럼 반드시 요소가 되어야 한다.

---

컴포넌트는 보통 파라미터가 props이다.
props는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 건네주는 매개이다. 

props는 부모가 던지고 자식이 받게 된다. 

\`\`\`jsx
import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 자바" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    )
}

export default Library;
\`\`\`

\`\`\`jsx
import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{\`이 책의 이름은 \${props.name}입니다.\`}</h1>
            <h2>{\`이 책은 총 \${props.numOfPage} 페이지로 이루어져 있습니다.\`}</h2>
        </div>
    );
}

export default Book;
\`\`\`

![결과.](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%203%EC%A3%BC%EC%B0%A8/image.png)

결과.

props로 데이터를 넘길 때에는 큰따옴표와 중괄호를 구별해야 한다.
일반적으로 대부분에 데이터는 중괄호를 사용하며, 문자열만 큰따옴표를 사용한다.

| **데이터 종류** | **작성법** | **예시** |
| --- | --- | --- |
| 문자열 (String) | 큰따옴표 "" | name="철수" |
| 숫자 (Number) | 중괄호 { } | age={20} |
| 불리언 (Boolean) | 중괄호 { } | isStudent={true} |
| 변수 (Variable) | 중괄호 { } | score={myScore} |

props는 읽기 전용이므로 수정이 불가능하다.
데이터는 부모에서 자식으로 흐르며, 부모에서 유래한 데이터는 자식이 수정할에Element

---

![image.png](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%203%EC%A3%BC%EC%B0%A8/image%201.png)

리액트 앱을 구성하는 요소를 Element라고 한다.

리액트 엘리먼트는 DOM 엘리먼트의 가상 표현으로, 엘리먼트는 화면에 보이는 것들을 기술한다.
이를 토대로 실제 웹브라우저에서 보는 DOM 엘리먼트가 생성된다.

엘리먼트는 JSX 코드로 구현된다.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

리액트 엘리먼트는 컴포넌트 유형,  속성, 자식에 대한 정보를 포함하는 JS 객체이다.

\`\`\`json
{
	type: 'button',
	props: {
		className: 'bg-green',
		chiledren: {
			type: 'b',
			props: {
				children: 'Hello, element!'
			}
		}
	}
}
\`\`\`

\`\`\`html
<button class='bg-green'>
	<b>
		Hello, element!
	</b>
</button>
\`\`\`

리액트 엘리먼트를 생성하는 메서드는 createElement()이다.

\`\`\`jsx
React.createElement(type, props, [...children])
\`\`\`

파라미터 중, 

type은 엘리먼트의 유형(<div>, <span>과 같은 html 태그나 다른 리액트 컴포넌트) 
props는 엘리먼트의 값(class, style, src, onclick 등 태그 속성)
children은 현재 엘리먼트가 포함하는 자식 엘리먼트를 의미한다.

\`\`\`jsx
function Button(props) {
	return (
		<button className={\`bg=\${props.color}\`}>
			<b>{props.children}</b>
		</button>
	)
}

function ConfirmDialog(props) {
	return (
		<div>
			<p>내용을 확인하셨다면 버튼을 눌러주세요.</p>
			<Button color='green'>확인</Button>
		</div>
	)
}
\`\`\`

Buttton 컴포넌트를 포함하는 ConfirmDialog 컴포넌트를 구성하면,

\`\`\`json
{
	type: 'button',
	props: {
		chiledren: {
			type: 'p',
			props: {
				children: '내용을 확인하셨다면 버튼을 눌러주세요.'
			}
		}, {
			type: Button,
			props: {
				color: 'green',
				children: '확인'
			}
		}
	}
}
\`\`\`

위와 같이 DOM 엘리먼트로 렌더링된다.

---

![image.png](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%203%EC%A3%BC%EC%B0%A8/image%202.png)

엘리먼트는 불변성을 지닌다.
엘리먼트가 생성된 후에는 children이나 attribure를 바꿀 수 없다.

때문에 화면에서 엘리먼트를 변경할 때에는 기존의 엘리먼트를 수정하는 것이 아니라 새로운 엘리먼트를 생성하고 기존 엘리먼트와 바꾼다.

root라는 id를 지닌 div 태그에 모든 리액트 엘리먼트들이 렌더링되며, 리액트 DOM에 의해 관리된다.
리액트만으로 만들어진 앱은 단 하나의 Root DOM Node를 지닌다.

\`\`\`jsx
const element = <h1>안녕, 리액트!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
\`\`\`

createRoot로 설정된 Root DOM Node에 render 함수를 사용하여 화면을 렌더링한다.
엘리먼트가 렌더링되는 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이다.

---

실습. 시계

\`\`\`jsx
import React from "react"

function Clock(props) {
    return (
        <div>
            <h1> {props.timeZone} &nbsp; 현재시간: { new Date().toLocaleTimeString( 'ko', { timeZone: props.timeZone } ) }</h1>
        </div>
    );
}
export default Clock;
\`\`\`

\`\`\`jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Clock from './components/Clock.jsx';

const root = createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <StrictMode>
      <Clock timeZone="Asia/Seoul" />
      <Clock timeZone="Europe/Paris" />
      <Clock timeZone="America/New_York" />
    </StrictMode>);
  }, 1000);
\`\`\`

![결과.](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%203%EC%A3%BC%EC%B0%A8/image%203.png)

결과.`,ti=`# 소프트웨어설계 4주차

작성일자: 2026/03/24   (GMT+9)
과목: 소프트웨어설계
교수: 남현우
요약: State 관리와 이벤트 처리
isEnable?: Yes

# Component

독립적인 기능을 수행하는 작은 기능 단위 모듈.
리액트에서는 모든 페이지가 컴포넌트로 구성된다.
하나의 컴포넌트는 또 다른 여러 컴포넌트 조합으로 구성될 수 있다.

리액트 컴포넌트는 개념적으로 JS의 함수와 비슷하다.
다만 리액트 컴포넌트는 속성(props)을 입력받아 이를 이용해 리액트 엘리먼트를 생성하여 리턴한다는 것이 차이점이다.

리액트 컴포넌트는 OOP Language의 클래스와 인스턴스 개념과 유사하다.

컴포넌트의 이름이 소문자로 시작할 경우 HTML 태그로 인식되므로, 항상 대문자로 시작하여야 한다.

## Props

Properties. 컴포넌트에 전달할 다양한 정보를 담고 있는 JS 객체. 하나의 컴포넌트로 속재료인 Props만 달리 하여 다양한 모습의 엘리먼트를 생성할 수 있다.

Props는 읽기 전용이며, 리액트 컴포넌트가 엘리먼트를 생성할 때 사용된다. 때문에 생성 도중에 수정될 경우 제대로 된 엘리먼트 생성이 불가능해지므로 수정이 불가능하다.
때문에, 엘리먼트의 props를 변경하고 싶을 경우 props를 변경하는 것이 아니라 새로운 props를 컴포넌트에 전달하여 새로운 엘리먼트를 생성하여야 한다.

props는 JSX 기반으로 작성되며, 키-값 쌍 형태로 컴포넌트에 props를 전달한다.

\`\`\`jsx
function App(props) {
	return (
		<Profile
			name="Sally"
			introdution="Hello!"
			viewCount={1500}
		/>
	);
}
\`\`\`

내부적으로 props는 아래의 js 객체 형태로 변환되어 전달된다.

또한 props의 값으로 컴포넌트도 포함할 수 있다.

\`\`\`jsx
function App(props) {
	return (
		<Layout
			width={2560}
			height={1440}
			header={ <Header title="aa" /> }
			footer={ <Footer /> }
		/>
	);
}
\`\`\`

## Component Rendering

사용자 정의 컴포넌트를 렌더링하는 코드는 아래와 같다.

\`\`\`jsx
const element = <Welcome name="Sally" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
\`\`\`

Welcome 컴포넌트에 {name:”Sally”} props를 넣어서 컴포넌트를 호출하고, 리액트 엘리먼트를 생성한다.
이러한 코드를 통해 웹 브라우저에 컴포넌트가 보이게 된다.

컴포넌트는 여럿을 합쳐 하나의 컴포넌트로 만들 수 있다. 이를 통해 복잡한 화면을 여럿의 컴포넌트로 나누어 구현이 가능하다. 
이를 컴포넌트 합성이라고 한다.

이와 반대로, 큰 컴포넌트에서 일부를 추출하여 새로운 컴포넌트를 생성할 수 있다. 이를 통해 컴포넌트 재사용성이 향상된다.

# State

리액트 컴포넌트의 상태, 즉 변경 가능한 데이터를 의미한다.

state는 개발자가 직접 정의해야 하며, state 값이 변경될 경우 컴포넌트도 자동으로 리렌더링된다. 따라서 개발자가 별도의 리렌더링 코드를 작성할 필요가 없다.

렌더링이나 데이터 플로우에 상관이 없는 state를 사용하는 경우, 불필요한 리렌더링이 발생하여 성능이 저하될 수 있다. 때문에, 렌더링이나 데이터 플로우에 사용되는 값만 state에 포함시켜야 한다.
그렇지 않은 값은 컴포넌트 인스턴스의 필드로 정의하면 된다.

state는 useState() 후크 함수를 사용하여 정의한다. useState()를 사용하려고 할 경우 useState를 임포트하여야 한다.

\`\`\`jsx
import React, { useState } from "react";
...
function LikeButton(props) {
	const [liked, setLiked] = useState(false);
	return ( <button>Button</button> );
}
\`\`\`

useState()는 아래와 같이 사용된다.

\`\`\`jsx
const [varname, setfunc] = useState(fval);
\`\`\`

varname은 state명, setfunc는 해당 state를 설정하는 세터 함수명이다. 이는 임의로 지정할 수 있다.
fval은 state의 초기값으로, 다양한 값이 들어갈 수 있다.

state는 일반적인 js 객체이므로 정해진 타입이 없다. 또한 직접 변경이 불가하며 직접 변경 시 리렌더링이 바생하지 않는다. 때문에 state를 변경할 경우 개별 state의 세터를 사용하여야 한다.

\`\`\`jsx
const [name, setName] = useState(false);

// state 직접 수정 (잘못된 방법)
name = "Induk";

// 전용 set 함수를 통한 수정(정상)
setName('Induk');
\`\`\`

### State를 사용하는 카운터 컴포넌트의 예시

\`\`\`jsx
import React, { useState } from "react";

function Counter(porps) {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>{count}</p>
			<button onClick={ () => { setCount(count-1); }}>
				-1
			</button>
			<button onClick={ () => { setCount(count+1); }}>
				+1
			</button>
		</div>
	);
}
export default Counter

\`\`\``,ni=`# 소프트웨어설계 5주차

작성일자: 2026/03/31
과목: 소프트웨어설계
교수: 남현우
요약: 컴포넌트 생명주기와 Effect Hook
isEnable?: Yes

## Lifecycle 생명주기

리액트 컴포넌트가 생성되고 사라지는 주기.
컴포넌트 작성 방식에 따른 생명주기가 존재한다.

### 함수형 컴포넌트의 후크

함수형 컴포넌트에서는 상태관리를 위해 다양한 후크 함수를 사용한다.

후크란 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 연동할 수 있게 하는 함수이다.
후크의 이름은 모두 use로 시작한다.

![image.png](%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%84%A4%EA%B3%84%205%EC%A3%BC%EC%B0%A8/image.png)

### 후크의 규칙

첫 번째로, 후크는 반드시 컴포넌트 내 최상위 레벨에서만 호출하여야 한다.
반복문, 조건문, 함수 내 함수에서 호출되면 안 된다.
이는 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 하기 때문이다.

두 번째로, 리액트 함수 컴포넌트에서만 호출되어야 한다.
일반적인 js 함수에서 후크가 호출되면 안 된다.

#### useState()

state를 사용하기 위한 후크.
사용하기 위해서는 useState도 함께 로드하여야 한다.

\`\`\`jsx
import React, { useState } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>총 {count}번 클릭했습니다.</p>
			<button onClick={ () => {
				setCount(count+1);
				console.log(count);
			}}>클릭</button>
		</div>
	);
}

export default Counter
\`\`\`

useState()를 호출할 때에는 state의 초기값을 파라미터로 전달해야 한다.

\`const [count, setCount] = useState(0);\`

\`\`\`jsx
import React, { useState } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>총 {count}번 클릭했습니다.</p>
			<button onClick={ () => {
				setCount(count+1);
				setCount(count+1);
				console.log(count);
			}}>클릭</button>
		</div>
	);
}

export default Counter
\`\`\`

위의 경우 setCount()를 2회 호출하지만, setCount()는 비동기 작동하며 렌더링 시점 값이 반영된다.
따라서 위에서 버튼을 1회 눌렀을 경우 카운터는 2가 아닌 1이 올라간다.

\`\`\`jsx
import React, { useState } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>총 {count}번 클릭했습니다.</p>
			<button onClick={ () => {
				setCount(prev => prev + 1);
				setCount(prev => prev + 1);
				console.log(count);
			}}>클릭</button>
		</div>
	);
}

export default Counter
\`\`\`

이는 함수 업데이트 방식으로 구현하여 해결할 수 있는데, 이전 값을 prev 인자를 통해 수정함으로서 호출 횟수만큼 값이 증가한다.

#### useEffect()

Side Effect를 수행하기 위한 후크.

리액트에서 side effect는 서버에서 데이터를 수신하거나 수둥으로 DOM 변경 등을 의미한다.
이러한 작업들은 타 컴포넌트에 영향을 미칠 수 있으며 렌더링 중에는 작업이 완료될 수 없다. 즉 렌더링 완료 후에 실행되어야 하는 작업이다.

\`\`\`jsx
useEffect(effectFunc, dependencyArr);

useEffect(() => { document.title = '총 \${count}회 클릭했습니다.';}, [count]);
\`\`\`

effectFunc: 처음 컴포넌트가 렌더링된 이후, 업데이트로 리렌더링 이후 실행되는 함수.
dependencyArr: 이 이펙트가 의존하고 있는 배열. 배열 내 변수 중 하나라도 값이 변경되면 이펙트 함수가 실행된다.

\`\`\`jsx
useEffect(effectFunc, []);

useEffect(() => { document.title = '총 \${count}회 클릭했습니다.';}, []);
\`\`\`

만약 의존배열이 빈 배열일 경우 마운트 및 언마운트 시에 단 한 번씩만 실행된다.

\`\`\`jsx
useEffect(effectFunc);

useEffect(() => { document.title = '총 \${count}회 클릭했습니다.';});
\`\`\`

의존배열을 인자로 넣지 않을 경우 컴포넌트가 업데이트될 때마다 실행된다.

\`\`\`jsx
import React, { useState, useEffect } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
	
	useEffect(()=> { console.log(count); }, [count])
	return (
		<div>
			<p>총 {count}번 클릭했습니다.</p>
			<button onClick={ () => {
				setCount(count+1);
			}}>클릭</button>
		</div>
	);
}

export default Counter
\`\`\`

useEffect()이 반환하는 함수를 cleanup 함수라고 한다.
useEffect()의 반환은 컴포넌트가 화면에서 사라질 때(unmount), 또는 다음 효과가 실행되기 직전에 호출된다.

클린업 함수는 클래스의 소멸자와 비슷하게 메모리 정리에 사용된다.

\`\`\`jsx
useEffect(() => {
	// 1. Effect 실행 (타이머 설정, 이벤트 등록 등)
		const timer = setInterval(() => {
		console.log("타이머 동작 중...");
	}, 1000);
	// 2. 뒷정리(Cleanup) 함수 반환
	return () => {
		// 컴포넌트가 사라지거나(Unmount) 다음 렌더링 직전에 실행됨
		console.log("타이머 정리!");
		clearInterval(timer); // 타이머 해제
	};
}, []); // 의존성 배열
\`\`\`

### useMemo()

memoized value를 반환하는 후크.
memoized value는 memoization의 산출물인데, 메모이제이션은 동일 계산이 반복될 경우 이전 계산한 값을 메모리에 저장함으로서 동일한 계산의 반복 수행을 제거하여 성능을 최적화하는 기술이다. 
메모이즈드 밸류는 메모이제이션 중 메모리에 저장하는 계산값이다.

\`\`\`jsx
const memoizedVal = useMemo(
	() => computeExpensiveValue(depval1, depval2), 
	[depval1, depval2]
);
\`\`\`

useMemo()는 의존성 배열의 요소값이 업데이트될 때만, 즉 현 메모이즈드 밸류가 더 이상 가용 불가할 경우에만 콜백 함수를 재호출한다. 
콜백 함수를 호출하여 메모이즈드 밸류를 업데이트하며, 해당 값은 의존배열 요소가 업데이트되기 전까지 유지된다.

useMemo()는 useEffect()와 달리 useMemo()에 인자로 전달된 함수는 렌더링 도중에 실행된다. 
때문에 렌더링이 일어나는 도중에 실행되면 컴포넌트 동작에 영향을 줄 수 있는 함수의 경우 useMemo()에 사용하면 안 되며, 반드시 useEffect()에 사용하여야 한다.

\`\`\`jsx
const memoizedVal = useMemo(
	() => computeExpensiveValue(depval1, depval2), 
	[]
);
\`\`\`

의존배열이 빈 배열일 경우 컴포넌트 마운트 시에만 값을 계산한다.
의존배열이 인자로 주어지지 않을 경우 매 렌더링마다 함수가 실행되며, 이는 메모이제이션으로 보기 힘드므로 의미가 없다.

\`\`\`jsx
function MyComponent({x, y}) {
	const val = useMemo(() => compute(x, y), [x, y]);
	return <div>{value}</div>
}

function compute(x, y) {
	// 계산
}
\`\`\`

\`\`\`jsx
import React, { useState, useMemo } from 'react';

function BigSquare() {
	const [number, setNumber] = useState(0); // 제곱 계산 입력값
	const [count, setCount] = useState(0); // “+1”버튼 클릭시 증가값
	
	// 느리게 계산되는 제곱 함수 (예제용으로 일부러 지연)
	const slowSquare = (num) => {
		console.log('계산 중...');
		let result = 0;
		for (let i = 0; i < 2500000000; i++) result = num * num;
		return result;
	};
	
	// useMemo로 계산 결과를 메모이제이션
	const squared = useMemo(() => slowSquare(number), [number]);
	
	return (
		<div>
			<h2>느린 제곱 계산기</h2>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(Number(e.target.value))}
			/>
			<p>제곱 결과: {squared}</p>
			<p>{count}</p>
			<button onClick={() => setCount(count+1)}>+1</button>
		</div>
	);
}

export default BigSquare;
\`\`\`

### useCallback()

함수를 메모이제이션하는 후크.
useMemo() 후크와 유사하나 값이 아닌 함수를 반환한다.

첫 인자로 넘어온 함수를 메모이제이션한다.

\`\`\`jsx
const memoizedCallback = useCallback(
	() => { doSomething(depval1, depval2); },
	[depval1, depval2]
)
\`\`\`

useCallback()을 사용하지 않고 컴포넌트 내에 함수를 정의할 경우 렌더링 발생 시마다 함수가 새로 정의된다.
useCallback() 훅을 사용하면 특정 변수의 값이 변경되는 경우에만 함수를 재정의한다.

\`\`\`jsx
import React, { useState, useEffect, useCallback } from "react";

export default function FetchComponent() {
	const [keyword, setKeyword] = useState("");
	const [data, setData] = useState("");
	
	// API 호출 함수 – useCallback으로 메모이제이션
	const fetchData = useCallback(
		() => {
			console.log(“데이터 불러오는 중...”);
			setTimeout(() => {
				setData(\`”\${keyword}”에 대한 검색 결과\`);
			}, 1000);
		}, [keyword]); // keyword가 바뀔 때만 함수 재생성
		
		// keyword 변경 시 자동 호출
		useEffect(
			() => {
				console.log(“useEffect()”);
				if (keyword) fetchData();
			}, [fetchData] 
		);
		
		return (
		<div>
			<h2>검색 예제 (단일 컴포넌트)</h2>
			<input
				type=“text”
				placeholder=“검색어 입력”
				value={keyword}
				onChange={ (e) => setKeyword(e.target.value) }
			/>
			<p>결과: {data}</p>
			<button onClick={fetchData}>수동 검색</button>
		</div>
	);
}
\`\`\`

### useRef()

렌더링을 유발하지 않는 변수를 저장하는 후크.
useState()는 값 변경 시 화면이 리렌더링되지만 useRef()는 화면이 리렌더링되지 않는다.

useRef()는 DOM 엘리먼트에 접근 가능한 참조 객체를 반환한다.
참조 객체의 .current 속성은 현재 참조 중인 엘리먼트를 가리킨다.

\`\`\`jsx
const refContainer = useRef(fval);
\`\`\`

위의 useRef()는 fval로 초기화된 레퍼런스를 반환하며, fval이 null일 경우 .current값이 null인 객체를 반환한다.

\`\`\`jsx
import React, { useState, useRef } from "react";

export default function TextInputWithFocusButton(props) {
	const inputElem = useRef(null);
	
	const onButtonClick = () => { inputElem.current.focus(); }
	return (
		<div>
			<input ref={inputElem}></input>
			<button onClick={ onButtonClick }>
				Focus the input
			</button>
		</div>
	);
}
\`\`\`

### 커스텀 후크

리액트에서 기본 제공되는 후크 이외에 추가로 필요한 기능을 직접 만들어서 사용할 수 있다.
여러 컴포넌트에서 반복적으로 사용되는 로직을 후크로 만들어 재사용할 수 있고, 이름이 use로 시작하고 내부에서 다른 후크를 호출하는 js 함수로 만들면 된다.

두 개의 js 함수에서 로직을 공유하고 싶을 경우, 두 js 함수에서 중복되는 로직을 추출하여 커스텀 후크로 정의한다.

커스텀 후크는 커스텀 후크만의 특별한 규칙은 없으나, 후크로서의 규칙을 따라야 한다.
use로 시작하여야 하며, 최상위 레벨에서만 호출해야 하고, 리액트 함수 컴포넌트에서만 호출하여야 한다.

또한 커스텀 후크의 호출은 독립적으로 동작하며, 컴포넌트 내부의 모든 state와 effect는 전부 분리되므로 각각의 커스텀 후크 호출에 대해 분리된 state를 얻게 된다.`,ri=`# 소프트웨어설계 6주차

작성일자: 2026/04/07
과목: 소프트웨어설계
교수: 남현우
요약: List, Key, Form
isEnable?: Yes

## 이벤트

브라우저에서 사용자의 조작이나 환경의 변화로 벌어지는 사건.

다양한 이벤트를 원하는 대로 처리하는 것을 이벤트 핸들링이라고 하며, 이 처리를 하는 함수를 이벤트 핸들러 또는 이벤트 리스너라고 한다.`,ii=`# 소프트웨어설계 7주차

작성일자: 2026/04/14
과목: 소프트웨어설계
교수: 남현우
요약: 입력 폼(Forms) 및 스타일링 전략
isEnable?: Yes

## 리스트

같은 아이템을 순서대로 모아놓은 것. 리스트를 위해 사용하는 자료구조.

### 키

각 객체나 아이템을 구분할 수 있는 고유한 값. 리액트에서는 배열과 키를 사용하여 반복되는 다수 엘리먼트를 쉽게 렌더링 가능하다.

리스트에서 키는 리스트에서 아이템을 구분하기 위한 고유값이다. 리스트에서 어떤 아이템이 추가/변경/제거되었는지 구분하기 위해 사용하며, 키의 값은 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다.

키 값은 숫자나 id, 인덱스를 사용하는 방식이 있다.

## 폼

사용자로부터 입력을 받기 위해 사용하는 양식. 리액트는 컴포넌트 내부에서 스테이트를 통해 데이터를 관리한다. 

### 제어 컴포넌트

리액트에 의해 값이 제어되는 컴포넌트를 제어 컴포넌트라고 한다. 

제어 컴포넌트를 사용하면 입력값을 리액트 컴포넌트의 state를 통해 관리할 수 있다. 또한 사용자의 입력을 직접적으로 제어할 수 있다. 즉, 입력값의 초깃값을 직접 지정하거나 어떤 양식의 값이 변경되었을 때 다른 양식의 값을 state로 제어할 수 있다.`,ai=`# 소프트웨어설계 9주차

작성일자: 2026/04/28
과목: 소프트웨어설계
교수: 남현우
요약: 리액트 라우터
isEnable?: Yes

MPA(Multi Page Application) : URL 별로 여러개의 html 파일로 구성되며 새롭게 로드됨.

SPA(Single Page Application) : 하나의 HTML 페이지에서 필요한 데이터만 가져오는 형태.

<aside>

## SPA

웹 애플리케이션에서 단일 HTML 페이지로 동작하는 애플리케이션 구조.

- 페이지를 이동할 때 서버에서 새로운 HTML 파일을 로드하여 이동하지 않고,
동적으로 필요한 데이터만 가져와 컨텐츠를 업데이트 하는 방식

특징

- 클라이언트 중심
- 페이지 로딩과 UI 업데이트는 주로 클라이언트(브라우저)에서 이루어짐
- 필요 데이터만 비동기로 가져와 UI를 업데이트하므로 전체 페이지를 재로드 할 필요 없음.
- Javascript 프레임워크 사용
- SPA는 React, Angular, Vue.js와 같은 프레임워크/라이브러리를 사용하여 구축됨
- SPA에서는 URL에 따라 콘텐츠를 변경하기 위해 클라이언트 측 라우팅이 필요함.

<aside>

### 장점

- 빠른 로딩 속도
    - 최초 로딩 이후 추가적인 페이지 로드 없이 데이터만 요청하므로 속도가 빠릅니다.
- 더 나은 사용자 경험(UX)
    - 페이지 전환이 부드럽고 끊김이 없어 데스크톱 애플리케이션과 유사한 경험을 제공함.
- 서버 부하 감소
    - 서버에서 전체 HTML 파일을 전달하지 않으므로 부하가 줄어듭니다.

### 단점

- SEO 문제
    - SPA는 클라이언트에서 렌더링되므로, 검색 엔진이 콘텐츠를 제대로 인덱싱하지 못할 수 있음.
    - 해결 방법: 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG) 사용.
- 초기 로딩 시간 증가
    - 초기 JavaScript 번들이 크면 첫 로딩 시간이 느려질 수 있습니다.
</aside>

</aside>

# Routing

URL 경로에 따라 사용자가 보게 될 컨텐츠를 결정하는 방식

- SPA에서 라우팅은 클라이언트 측에서 수행되며, 브라우저의 URL은 변경되지만 페이지는 다시 로드되지 않는다.

<aside>

## React Router

- 리액트에서는 라우팅을 위해 React Router 라이브러리(react-router-dom)를 사용함.

\`\`\`bash
# 라이브러리 설치
npm install react-router-dom
# 라이브러리 업데이트
npm install react-scripts
\`\`\`

\`\`\`jsx
// 라이브러리 로드
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
\`\`\`

</aside>`,oi=`# 안드로이드실무 1주차

작성일자: 2026/03/09   (GMT+9)
과목: 안드로이드 실무
교수: 전응섭
요약: 프로그래밍 개발환경 구축
isEnable?: Yes

android에 대한 레이아웃 설계, 위젯 등

이런 컨셉으로 만든다

어떤 컴포넌트들을 불러와서 어떻게 만들 것인지`,si=`# 안드로이드실무 2주차

작성일자: 2026/03/16   (GMT+9)
과목: 안드로이드 실무
교수: 전응섭
요약: 어플리케이션 기본 구조 파악
isEnable?: Yes

5가지 레이아웃

drawable
layout
mipmap
values
xml

ConstraintLayout
LinearLayout

TextView

values/strings.xml에서 문자열을 저장하고 레이아웃에서 불러올 수 있다.`,ci=`# 안드로이드실무 3주차

작성일자: 2026/03/23   (GMT+9)
과목: 안드로이드 실무
교수: 전응섭
요약: 사용자 인터페이스 기초
isEnable?: Yes

.`,li=`# 안드로이드실무 4주차

작성일자: 2026/03/30
과목: 안드로이드 실무
교수: 전응섭
요약: 이벤트 처리
isEnable?: Yes

.`,ui=`# 안드로이드실무 5주차

작성일자: 2026/04/06
과목: 안드로이드 실무
교수: 전응섭
요약: 메뉴와 대화상자
isEnable?: Yes

.`,di=`# 안드로이드실무 6주차

작성일자: 2026/04/13
과목: 안드로이드 실무
교수: 전응섭
요약: 고급위젯과 이벤트처리
isEnable?: Yes

.`,fi=`# 안드로이드실무 8주차

작성일자: 2026/04/27
과목: 안드로이드 실무
교수: 전응섭
요약: 고급위젯과 프래그먼트
isEnable?: Yes

주차

.`,pi=`# 안드로이드실무 9주차

과목: 안드로이드 실무
교수: 전응섭
요약: .
isEnable?: Yes

.`,mi=`# 정보보안 1주차

작성일자: 2026/03/05   (GMT+9)
과목: 정보보안
교수: 공준익
요약: 정보보안 개요, 보안 공격의 이해 및 필요 지식
isEnable?: Yes

# **정보 Information**

- 관찰이나 측정을 통하여 수집한 자료(data)를 실제 문제에 도움이 될 수 있도록 정리한 지식/자료
- 보안 측면 ⇒ data를 의사결정에 반영할 수 있도록 변환하여 컴퓨터 또는 저장매체에 전자문서 형태로 기록된 것

## **정보보호 대상**

- 기업의 소유 및 관리하고 있는 정보자산
    - 정보시스템(ICT) = 하드웨어 + 소프트웨어 + 네트워크
    - 추가적으로, 기업이 관리하는 데이터, 인적요소, 문서 등의 자산(Assets)도 보호

| **유형** | **내용** |
| --- | --- |
| 정보 | 컴퓨터에 저장, 처리, 연산되어 있는 업무와 관련된 전자적 자산 |
| 문서 | 종이 또는 기타 출력물로 보관되어 있는 업무와 관련된 문서 형태의 자산 |
| 서버 | 서비스를 제공하기 위해 정보자산 및 S/W가 탑재되어 있는 시스템 |
| 소프트웨어(어플리케이션) | 데이터를 서로 다른 시스템 간에 공유하는 네트워킹 기능을 제공할 수 있는 소프트웨어 자산 또는 정보시스템을 문서편집, 정보처리, 계산 등 사용자가 필요한 특정 분야에 사용하기 위해 작성된 소프트웨어 자산 |
| 네트워크 | 서로 다른 시스템 간에 네트워킹 기능을 제공하는 하드웨어 자산(Router, Switch 등) |
| 보안시스템 | 정보자산을 보호하기 위한 침입차단시스템, 침입방지시스템 등의 보안시스템 |
| 단말장비 | 개인들이 사용하는 업무용 PC, 노트북, PDA, 이동 저장 장치 등 |
| 물리적 시설 | 업무수행 및 전산장비 보호 등을 위한 물리적 시설 및 장비 |

## **정보보호의 정의**

1. 정보보호란 정보의 수집, 가공, 저장, 검색, 송신, 수신 중 발생할 수 있는 정보의 훼손, 변조, 유출 등을 방지하기 위한 관리적·기술적 수단을 마련하는 것
2. 정보보안 또는 정보보호라 함은 컴퓨터 등 정보처리 능력을 가진 장치를 이용하여 수집, 가공, 저장, 검색, 송신 또는 수신되는 정보의 유출, 위·변조, 훼손 등을 방지하기 위하여 기술적, 물리적, 관리적 수단을 강구하는 일체의 행위를 말하며 사이버 안전을 포함
3. 정보의 수집, 가공, 저장, 검색, 송신, 수신 중에 정보의 훼손, 변조, 유출 등을 방지하기 위한 관리적, 기술적 수단 또는 그러한 수단으로 이루어지는 행위

## **정보보호의 목표**

내부 또는 외부의 침입자나 공격자로부터 각종 정보의 파괴, 변조, 유출 등의 침해사고로부터 중요한
정보자산을 보호하는 것!
보안의 3대 요소(기밀성, 무결성, 가용성) 확보 및 달성 – OECD 정보보호 가이드라인
최근의 보안 추세는 기밀성보다는 무결성이, 무결성보다는 가용성이 더 큰 관심을 받고 있음

- **기밀성 Confidentiality**
    - 정보를 오직 인가된 사용자에게만 허가하는 것
    정보의 비밀 유지
    접근통제(물리적, 운영체제, 네트워크 등)와 암호화 등 수행
- **무결성 Integrity**
    - 부적절한 정보의 변경이나 파기 없이 정확하고 완전하게 보존하는 성질
    - 비인가된 사용자가 정보를 변경, 삭제, 생성할 수 없음
        - 정확성: 틀린 내용이 있으면 안 된다
        - 완전성: 내용 중에 빠짐이 있어서는 안 된다
        - 일관성: 다른 정보와 일치해야 한다
- **가용성 Availability**
    - 시기적절하면서 신뢰할 수 있는 정보로의 접근과 사용
- **책임추적성 Accountability**
    - 각 개체의 행위를 추적할 수 있음을 보장
    - 정보나 정보시스템의 사용에 대해 누가/언제/어떤 목적/어떤 방법으로 사용했는지 추적
- **인증성 Authentication**
    - 어떤 주체나 객체가 틀림없음을 보장
    - 정보시스템 상에서 이루어지는 어떤 활동이 정상적/합법적인 것을 보장
- **신뢰성 Reliability**
    - 의도된 행위에 대한 결과의 일관성 유지
    - 정보나 정보시스템을 사용할 때 오류 없이 일관되게 계획된 활동을 통해 기대한 결과를 얻는 환경 확보

## **보안취약점 Vulnerability**

- 컴퓨터의 하드웨어 또는 소프트웨어의 결함이나 체계 설계상의 허점으로 인해 사용자의 허용된 권한 이상의 동작이나 허용된 범위 이상의 정보 열람을 가능하게 하는 약점

| **구분** | **내용** |
| --- | --- |
| 물리적 취약점 | 허가받지 않은 침입자가 정보처리시설과 같이 정보시스템이 설치되어 있는 건물이나 워크스테이션 등과 같은 서버 및 개인용 컴퓨터가 설치되어 있는 사무실에 침입할 수 있다. 일단 침입에 성공하면 시스템 파괴, 부품 탈취 등과 같은 모든 수단의 불법 행위를 할 수 있다. |
| 자연적 취약점 | 정보시스템은 화재, 홍수, 지진, 번개 등의 자연 재해에 매우 취약하다. |
| 환경적 취약점 | 정보시스템은 먼지, 습도, 온도 등의 주변 환경에 취약하다. |
| 하드웨어 취약점 | 하드웨어 오류나 오동작이 전체 정보시스템의 보안에 손상을 입힐 수 있다. |
| 소프트웨어 취약점 | 시스템을 실패나 오동작으로 몰고 갈 수 있는 소프트웨어의 실패는 시스템을 취약하게 만들거나 또는 시스템을 불안정하게 만들 수 있다. |
| 매체 취약점 | 자기 디스크, 자기 테이프, 출력물 등은 손실되거나 손상을 입을 수 있다. |
| 전자파 취약점 | 모든 전자 장치는 전자파를 방출한다. 도청자는 정보시스템이나 네트워크 또는 휴대폰으로부터 발생하는 신호를 가로챌 수 있다. |
| 통신 취약점 | 컴퓨터가 네트워크나 모뎀에 연결된 경우 인가받지 않은 사람이 침입할 위험성이 증가한다. |
| 인적 취약점 | 정보시스템을 사용하거나 관리하는 직원은 가장 큰 취약점을 보인다. 관리자가 적절한 교육을 받지 않았거나 나쁜 유혹에 빠질 경우, 컴퓨터 사용자나 운용자 및 기타 직원들이 비밀 번호를 누설하거나 주요 시설물의 출입구를 열어 두는 등의 행동을 할 수 있다. |

## **보안 위협**

의도적이든, 실수로든 보안 취약점이 악용될 때 발생하며, 자산에 부정적인 영향을 미치는 사건(이벤트)

| **구분** | **내용** |
| --- | --- |
| 자연에 의한 위협 | 화재, 홍수, 지진, 전력 차단 등 자연에 의한 대표적인 위협으로부터 발생하는 재난을 항상 예방할 수는 없지만 화재경보기, 온도계, 무정전 시스템 등을 설치하여 피해를 최소화할 수 있다. |
| 의도하지 않은 위협 | 인간에 의한 비의도적 위협은 정보시스템의 보안 사고를 일으키는 가장 큰 위협으로 인간의 실수와 태만이 주된 원인이다. 패스워드의 공유, 데이터에 대한 백업의 부재 등이 대표적인 부주의와 태만으로 간주되며, 이러한 위협은 언론매체에서 크게 다루어지지는 않지만 실제로 정보보호 문제를 일으키는 가장 중요한 요인이다. |
| 의도적인 위협 | 인간에 의한 의도적 위협은 언론매체에서 흥미롭게 다루는 위협이며, 시중에 판매되는 정보보호 제품이 주력하여야 할 부분이다. 인간에 의한 의도적 위협은 컴퓨터 바이러스 제작자, 해커, 사이버 테러리스트 등으로부터 발생하며 도청, 신분 위장에 의한 불법 접근, 정당한 정보에 대한 부인, 악의적인 시스템 장애 유발 등이 포함된다. |

## **위험 Risk**

- 취약점을 활용하는 위협의 잠재적인 손실이나 피해
- 재정적 손실, 프라이버시 손실, 평판 손실 등
- 위험 = 취약점 X 위협
- (예) 랜섬웨어 공격
    - 위험(랜섬웨어 위험) = 취약점(시스템 결함 및 휴먼에러) X 위협(랜섬웨어)

## **정보보호 대책**

- 위협에 대응하여 정보자산을 보호하기 위한 관리적, 물리적, 기술적 대책 마련
- 방화벽, 침입탐지시스템 등의 정보보호시스템 뿐만 아니라 정책, 지침 등의 보안 거버넌스 마련

### **보안 거버넌스**

- 보안성 강화
    - 기술적 보호 조치(보안 솔루션)
    - 보안 정책에 의한 절차적 보안 조치도 필요(직원 교육 등)
    - 보안 정책과 기준을 기반으로 적합한 보안 제품을 도입
- 보안 거버넌스(Security Governance)
    - 조직이 자신에게 적합한 보안 정책을 수립하고 수립된 보안 정책에 의해 보안 관련 조직을 구성하여 일련의 보안 활동을 수행하는 것
    - APT 공격의 효과적인 대비책: 보안 거버넌스에 의한 관리
    - 절차적 보안과 기술적 보안이 모두 포함될 수 있도록 조직되고 관리되어야 함`,hi=`# 정보보안 2주차

작성일자: 2026/03/12   (GMT+9)
과목: 정보보안
교수: 공준익
요약: 시스템(윈도우 서버) 보안 관리
isEnable?: Yes

# 시스템

보안 공격의 대상이 될 수 있는 단위. 보안 공격자의 대표적인 공격 대상이며, 대표적으로 Server OS가 있다.

최근의 많은 보안사고는 네트워크를 통해 외부에서 침입한 공격에 의해 일어나고 있다.

## 시스템의 보안성을 평가하는 4가지 기준

- 계정 관리
- 서비스 관리
- 패치 관리
- 로그 관리

## 서버

서비스를 제공하는 시스템, 또는 Server OS가 설치된 컴퓨터. 웹서버, 데이터베이스 서버, 파일 서버 등이 서버에 속한다.

## 계정 Account

시스템에 접근하는 것이 허가된 사용자인지 검증하기 위한 정보. ID, 비밀번호가 이에 속한다.

### 관리자 계정

컴퓨터를 전체적으로 관리할 수 있는 막강한 권한이 있는 계정. 이 권한에는 일반 사용자 계정 생성, 소프트웨어 설치, 운영체제 환경 설정 변경, 로그 제거 등이 포함된다.

강한 권한을 지니므로 엄격한 관리가 요구된다.

### **계정 관리 지침**

1. **가능한 관리자 계정의 갯수를 최소화하라.**
    1. 관리자 계정의 갯수가 증가하면 보안 위험 범위가 확대되며 보안상 관리 비용이 증가한다.
2. **관리자 아이디를 변경하라.**
    1. 윈도우 관리자 계정은 여러 번 로그인 실패해도 계정이 잠기지 않으므로 브루트 포스 공격에 취약하다.이 때 관리자 계정의 id가 다를 경우 비밀번호 뿐 아니라 id 또한 브루트포스를 시도하여야 하므로 브루트포스에 걸리는 시간이 지수적으로 증가한다. 따라서 관리자 계정 아이디를 Adminstrator 대신 다른 것으로 변경하여 브루트 포스에 대비할 수 있다.

#### **암호 관리 지침**

1. **잘못된 비밀번호를 계속 입력하면 그 계정은 잠겨야 한다.**
    1. 브루트 포스 및 사전 공격을 막는 대표적인 방법으로, 계정 잠금 시간이 클 수록 보안성이 높아진다.(60시간 이상 권장)
2. **비밀번호는 정기적으로 변경해주어야 한다.**
    1. 공격자가 브루트 포스 등으로 비밀번호를 알아낸 경우에도 보호가 가능하다. 최대 암호 사용 기간은 90시간 이하로 설정하는 것이 좋다.

#### **좋은 암호가 가지는 특징**

1. 길이가 길어야 한다.(최소 8글자)
2. 복잡해야 한다.(영어, 숫자, 특수문자 등 조합)
3. 로컬 보안 정책을 설정한다.

**서비스 관리 지침**

1. 공유 폴더에 대한 익명 사용자의 접근을 막아라.
    1. 인가되지 않은 익명 사용자가 네트워크를 통해 중요 문서에 접근이 가능하면 보안적으로 심각한 문제가 발생할 수 있다.
2. 하드디스크의 기본 공유 옵션을 끈다.
3. 불필요한 서비스를 제거한다.
4. FTP 서비스를 가능한 사용하지 않거나 접근 제어를 엄격히 한다.
    1. 접근 권한 설정, 익명 인증 금지, 접근 제어 등을 설정한다. 또한 가능하면 SFTP를 사용하는 것이 좋다.

**패치 관리 지침**

1. **윈도우 운영체제의 패치**
    1. 보안은 지속적인 관리가 필요하므로 패치는 보안을 위해 필수적인 요소이다.
    2. 패치에는 hot fix와 service pack이 있다.
        1. hot fix는 긴급 배포하는 패치를 의미한다.
            1. 보통 단일한 보안취약점 또는 버그에 대응하며, 긴급히 진행하는 패치이므로 응용 프로그램에 영향이 발생할 수 있다.
        2. service pack은 여러 개의 패치 및 개선사항이 모여있는 프로그램을 의미한다.
            1. 기존에 없었던 새로운 기능이나 성능 개선 등의 내용이 포함되기도 하며, 커널이 변경될 수도 있다.
        3. 패치를 따로따로 설치하는 것보다 서비스팩을 설치하는 것이 좋다. 이는 설치가 간단하며 오류 발생 가능성이 낮기 때문이다.
        4. PMS(Patch Management System) 등으로 패치를 강제 진행하도록 설정하기도 한다.
2. **백신 업데이트**
    1. 백신은 주기적 업데이트가 필요하며, 자동 업데이트 및 업데이트 주기를 설정하는 것이 권장된다.
    2. 기업이나 공공기관에서는 사용자의 업데이트 여부를 모니터링할 필요가 있다.

**로그 관리**

1. **로그**
    1. 사용자의 행위에 대해 나중에 추적할 수 있도록 기록한 자료를 의미한다. 책임 추적성의 구현이기도 하다.
2. **로그 관리**
    1. 보안을 위해서는 법규 등 지침을 통해 강제적으로 로그를 저장하고 관리할 필요가 있다. 이 때 데이터 종류, 파일 저장 위치, 보관 기간 등에 주의하여야 하며, 백업 또한 필수이다.

**로그 분석의 목적**

- 외부로부터의 침입을 감지하거나 추적할 수 있다.
- 시스템 성능 관리 및 시스템의 장애 원인을 분석할 수 있다.
- 시스템 취약점 분석 및 이상징후를 파악할 수 있다.
- 침해 사고 시 근거 자료로 활용할 수 있다.(포렌식 분석)
- 각종 법규 및 지침에서의 관리 의무화 항목이다.

**로그 보기**

- 이벤트 뷰어
    - 실행 위치: 제어판 > 관리 도구 > 컴퓨터 관리 > 이벤트 뷰어 
    혹은 실행 > eventvwr.msc
    - 응용 프로그램(application)
        - 일반 응용 프로그램(예: 오피스)에서 발생한 이벤트
        - 로그 기록은 소프트웨어 개발사에 의해 결정
    - 보안(security)
        - 로그온 시도(성공/실패)
        - 사용자 계정 추가/삭제(권한 변경)
        - 로그 기록은 관리자에 의한 감사 로그 설정에 의해 결정
        (유일하게 기록할 이벤트 유형을 사용자가 변경 가능)
    - 설정(setup)
        - 윈도우에 응용 프로그램 설치 및 설정 관련 이벤트
    - 시스템(system)
        - 윈도우 시스템 구성요소에서 기록한 이벤트 (기록 유형이 정해져 있음)
        - 장치 드라이버의 로드 여부
        - 시스템 서비스의 시작 여부
- 이벤트 로그 속성
    - 속성 및 설명
        
        ![image.png](%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%202%EC%A3%BC%EC%B0%A8/image.png)
        

- 감사: 단체 규율과 구성원의 행동, 업무에 문제가 있는지 조사하고 감찰하는 직무
- 감사 정책 설정
    - 로그 ‘감사 정책’ : 어떤 로그를 남길지 정의한 규칙
        - 감사자와 IT 담당자가 사용자의 작업 내역을 추적하기 용이하도록 지원
    - 실제 서버에서 운영되는 서비스 및 보안 수준 등에 따라 어떤 로그를 남겨야 하는지 결정
- 감사 로그의 활용
    - 시스템 내에서 비정상적이거나 불법적인 행위를 인지
    - 잠재적인 보안 문제 식별에 대한 증거 및 분석 자료
    - 포렌식 증거(법적 근거자료)로 활용
- 로그 분석 방법: 필터링
    - 중요 보안 관련 이벤트 ID
        
        ![image.png](%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%202%EC%A3%BC%EC%B0%A8/image%201.png)
        

**로그 관리 방안**

- 최대 이벤트 로그 크기 산정
    - 너무 크게 설정 → 너무 많은 로그 저장 → 시스템 장애 발생
    - 너무 작게 설정 → 중요 로그가 삭제
- 최대 로그 크기 결정의 예
    - 보통 평균 이벤트는 약 500바이트 소비
    - 1일 약 1000개의 이벤트가 발생한다고 가정
    - 1달(30일) 동안 로그가 저장되어야 한다고 기준 설정
    - 최대 로그 크기 = 500 * 1,000 * 30 = 15,000,000 byte = 약 14.3Mbyte
- 중요 로그는 백업 수행
    - 예상하지 못한 대량의 로그로 중요 로그 삭제 가능성은 여전히 존재!
    - 자동 로그 백업, 원격 로그 서버 구성, 관리자의 수동 백업 등
- 주기적으로 쌓인 로그 분석 및 검토 수행
    - 로그를 많이 남기더라도 분석하지 않으면 무의미한 데이터가 됨
    - 침입 유무나 침입 시도 의심 사례들을 분석해야 접근 차단 등의 조치를 수행할 수 있음`,gi=`# 정보보안 3주차

작성일자: 2026/03/19   (GMT+9)
과목: 정보보안
교수: 공준익
요약: 시스템(리눅스/유닉스 서버) 보안 관리
isEnable?: Yes

## 시스템 보안

시스템(서버) 보안은 ‘들어오는 것, 할 수 있는 것, 남기는 것’을 통제한다.

### 1. 계정 관리

- 누가 시스템에 로그인할 수 있는지 통제한다.
- 사용자 식별을 위한 가장 기본적인 인증 수단은 ID/PW로 진행한다.

### 2. 세션 관리

- 로그인 후 접속 상태를 안전하게 유지·종료한다.
- 일정 시간이 지나면 세션을 종료하고, 비인가자의 세션 가로채기를 통제한다.

### 3. 접근 제어

- 어떤 시스템/자원에 접근 가능한지 통제한다.
- 네트워크 안에서 시스템을 다른 시스템으로부터 적절히 보호할 수 있도록 접근을 통제한다.

### 4. 권한 관리

- 사용자와 그룹에 필요한 최소 권한을 부여한다.
- 시스템의 각 사용자가 적절한 권한으로 정보자산에 접근하도록 통제한다.

### 5. 로그 관리

- 누가 언제 무엇을 했는지 기록 및 분석한다.
- 시스템 내부나 네트워크를 통해 외부에서 시스템에 어떤 영향을 미칠 경우 그 내용을 기록 및 관리한다.

### 6. 취약점 관리

- 시스템과 소프트웨어의 약점을 점검하고 보완한다.
- 시스템 자체의 결함을 체계적으로 관리한다.

## 보안의 대표적 인증 요소

최근에는 단일 인증보다 다중인증(MFA)이 권장되는 편이다.

### 1. 알고 있는 것 (Knowledge Factor)

- 머릿속에 기억하고 있는 정보를 통한 인증을 의미한다.
- **예시:** ID/PW, PIN 번호, 비밀번호

### 2. 가지고 있는 것 (Possession Factor)

- 신분증이나 OTP 장치 등 소유물을 통한 인증을 의미한다.
- **예시:** 출입카드, 스마트폰 앱, OTP 토큰

### 3. 자신의 모습 (Inherence Factor)

- 생체정보를 통한 인증을 의미한다.
- **예시:** 지문 인식, 홍채 인식, 안면 인식

### 4. 위치하는 곳 (Location Factor)

- 현재 접속을 시도하는 위치를 확인하여 인증한다.
- **확인 방법:** IP 주소, GPS 위치, 등록된 장소 등
- **콜백(Call Back):** 접속을 요청한 사람을 확인하기 위해 등록된 전화번호로 전화를 되걸어 본인 확인하는 방식

## 사용자 계정 관리

### 계정의 역할

- 시스템 접근(로그인) 및 자원 사용을 위해서는 계정(account)이 필요하다.
- 운영체제는 계정별 자원(프로세스, 파일 등)에 할당된 접근 권한으로 운영을 허용한다.

### 권한 관리 구조

- 운영체제는 사용자(user)별 접근 권한 및 그룹(group)별 접근 권한을 지원한다.
- 시스템 내 모든 계정은 그룹에 포함되어 관리된다.

### 계정 유형

- **관리자(root) 계정:** 시스템의 모든 권한을 가진 최고 관리자 계정
- **일반 사용자 계정:** 제한된 권한을 가진 일반 사용자 계정

### 서버 보안의 핵심

**서버 보안을 위해서는 '누가 로그인했는가'를 구분하는 것이 중요!**

## 리눅스 관리자 계정: root

### root 계정의 특징

- **리눅스의 기본 관리자 계정**
- 컴퓨터를 전체적으로 관리할 수 있는 막강한 권한 보유
- 공격자가 root 권한을 획득하면 시스템 전체가 장악될 위험

### root 계정 보안 관리 원칙

- 복잡한 비밀번호 사용 등 엄격한 관리 필요
- 최소한으로 사용하고 엄격히 보호

### 관리자 계정 관리 지침

- **Root 계정으로 원격 접속 금지**
- **사용 기록 추적이 가능하도록 sudo 사용 권장**
- **비밀번호 파일을 shadow 파일로 보호**
- **잘못된 비밀번호를 계속 입력하면 해당 계정 잠금 처리**

### 원격에서 root 계정 접속 금지

- 원격지에서 서버에 접속하기 위해 SSH, telnet(평문 전송, 사용 권장하지 않음) 등의 프로그램을 이용
- 네트워크를 통해 root 계정 원격 접속을 허용하면 1차 공격 대상이 되어 위험
- Ubuntu에서는 root 로그인이 안 되도록 기본 설정되어 있음
- 필요한 경우, 일반 유저로 접속한 후 root 계정으로 전환하는 것이 좋음 (sudo, su -)

### 리눅스에서 SSH 서버 설치

- 시스템의 패키지 목록 최신화: \`~$ sudo apt update\`
- ssh-server 설치: \`~$ sudo apt install openssh-server\`
- ssh 동작 확인: \`~$ sudo systemctl status ssh\`

### root 원격 접근 차단 설정

**설정 파일:** \`/etc/ssh/sshd_config\`

### 임의의 포트 설정

- SSH의 기본 포트 22를 다른 포트로 변경
- ※ 포트 변경은 공격 감소에 일부 도움이 있으나, 근본 대책은 아님

### PermitRootLogin 설정

root 사용자의 로그인 허용 여부를 다음 옵션 중 하나로 설정:

- \`yes\`: root 계정으로 원격 로그인 가능
- \`no\`: root 계정으로 원격 로그인 불가
- \`prohibit-password\`: 비밀번호를 사용한 로그인 불가, key 파일을 사용해 로그인 (default)
- \`without-password\`: 원격에서 키 로그인은 허용하며, 원격 패스워드 로그인은 금지
- \`forced-commands-only\`: 원격에서 키 로그인은 허용하지만, 로그인 대신 command를 사용해서 명령만 전달 가능

### MaxAuthTries 설정

- 로그인 시도 횟수 설정

### 비밀번호 파일을 shadow 파일로 보호

- 계정 정보와 암호화된 패스워드를 별도의 파일로 관리
- 사용 권한을 오직 root 사용자만 읽을 수 있음

### 계정 관리 명령어

- 사용자 추가: \`adduser [계정명]\`
- 비밀번호 설정: \`passwd [계정명]\`
- 사용자 삭제: \`deluser [계정명]\` (관리자(root) 권한으로만 실행 가능)

### 파일 권한 확인

**/etc/passwd 파일:**

\`\`\`bash
ls -l passwd
rw- r-- r-- 1 root root 1917 8월 7 23:50 passwd
\`\`\`

**/etc/shadow 파일:**

\`\`\`bash
ls -l shadow
r-- --- --- 1 root root 1138 8월 7 23:50 shadow
\`\`\`

※ 일반 사용자는 접근 불가

### /etc/passwd 파일

다양한 사용자 관련 정보가 저장됨:

- 계정 이름
- 사용자의 비밀번호 정보 (일반적으로 실제 암호 대신 x가 표시됨 → 실제 암호는 /etc/shadow에 저장)
- 사용자 ID
- 그룹 ID
- 사용자 코멘트 (시스템 설정에 영향을 주지 않음)
- 사용자의 홈 디렉터리
- 사용자가 기본적으로 사용하는 쉘 종류 (예: /bin/bash)

### /etc/shadow 파일

- 사용자 계정별 비밀번호를 관리 (백업 파일: /etc/shadow-)
- 파일은 시스템 관리자(root)만 접근 가능
- 비밀번호는 암호화되어 관리됨 ("!" 문구가 앞에 있으면 접근 불가 상태)

### 그룹 정보 관리

**설정 파일:** \`/etc/group\` & \`/etc/gshadow\`

- 그룹별 비밀번호를 관리 (백업 파일: /etc/gshadow-)
- 파일은 시스템 관리자(root)만 접근 가능
- 비밀번호는 암호화되어 관리

### 그룹 관리 명령어

- 그룹 추가: \`addgroup [그룹명]\`
- 그룹 삭제: \`delgroup [그룹명]\`
- 그룹 확인: \`groups\`

### 그룹 파일 구조

**/etc/group:** 그룹 이름, 그룹 비밀번호, 그룹 ID, 그룹 멤버

**/etc/gshadow:** 그룹 비밀번호, 그룹 관리자, 그룹 멤버

### 사용자 전환 (su)

- 명령어: \`su [계정명]\` 또는 \`su - [계정명]\`
- 시스템 관리자(root)로 전환 시 [계정명] 입력하지 않아도 됨
- Root로 장시간 전환 상태를 유지하는 것은 위험하므로 필요한 경우에만 짧게 사용 권장
- 사용자 전환 시 반드시 해당 계정의 비밀번호를 입력해야 함
- 단, 시스템 관리자(root)가 다른 계정으로 전환할 때는 비밀번호 입력 불필요

### su와 su - 의 차이

- \`su\`: 현재 위치하고 있는 디렉터리 유지
- \`su -\`: 전환된 계정의 홈 디렉터리로 전환 (새로 로그인한 것처럼 동작)

| **명령** | **의미** |
| --- | --- |
| su user | 사용자 전환, 현재 환경 일부 유지 |
| su - user | 새 로그인처럼 전환, 홈 디렉터리와 환경변수 적용 |

### 대리 실행 (sudo)

- 명령어: \`sudo [-u user] [명령어]\`
- 지정한 사용자 계정으로 명령어 실행
- 지정한 계정이 없을 경우 입력한 명령어는 시스템 관리자(root) 계정으로 실행됨
- 특정 명령만 일시적으로 높은 권한으로 실행 → 감사(audit) 추적에 유리
- 프로세스 종료 후 원래 계정으로 복귀
- 시스템에서 별도로 지정된 계정만 이용 가능
- 설정 파일: \`/etc/sudo.conf\`, \`/etc/sudoers\`, \`/etc/sudoers.d/*\`

### su와 sudo의 차이

- \`su\`: 지정된 사용자 계정으로 전환
- \`sudo\`: 일시적으로 지정된 사용자 계정으로 명령어 실행

※ 실무에서는 root 비밀번호 공유보다 sudo 사용이 권장됨

### 패스워드 관리

### 부적절한 패스워드

- 길이가 너무 짧거나 널(Null)인 패스워드
- 사전에 나오는 단어나 그 조합 또는 변형
- 키보드 자판의 일련 나열
- 사용자 계정 정보로 유추할 수 있는 단어

### 적절한 패스워드

- 본인은 기억하기 쉽지만, 상대는 예측하기 어려운 비밀번호/패스프레이즈(Passphrase) 권장

※ 패스프레이즈: 외우기 쉽거나 연상하기 쉬운 문장으로 구성된 암호

### 패스워드 정책

- 패스워드의 길이와 복잡도 설정 (예: 8자 이상, 숫자 & 알파벳 & 특수문자 혼합 등)
- 패스워드 변경 정책: 60일 또는 90일 간격으로 패스워드 변경하도록 설정
- 잘못된 패스워드 입력 시 계정 잠금

## 데이터베이스의 계정 관리

- 운영체제 계정 외에도 DB, 애플리케이션, 네트워크 장비마다 별도 계정 관리가 필요
- 운영체제 보안이 좋아도 응용 프로그램 계정이 약하면 전체 시스템이 위험해질 수 있음

### 주요 DBMS 관리자 계정

- **MS-SQL:** sa (관리자 계정)
- **Oracle:** sys, system (둘 다 관리자 계정이지만 system은 데이터베이스를 생성할 수 없음)

## 응용 프로그램의 계정 관리

- 취약한 응용 프로그램을 통해 공격자가 운영체제에 접근하여 민감한 정보를 습득한 뒤 운영체제를 공격하는 데 이용할 수 있음
- TFTP처럼 사용자 인증 없이 파일 전송하는 응용 프로그램은 더욱 세심한 주의가 필요 (대안: SFTP)

## 네트워크 장비의 계정 관리

- 네트워크 장비는 보통 패스워드만 알면 접근이 가능
- **시스코 장비의 계정 모드:**
    - **사용자 모드:** 네트워크 장비의 상태만 확인 가능
    - **관리자 모드:** 네트워크에 대한 설정 변경이 가능
    - 처음 접속 시 사용자 모드로 로그인되며, 관리자 모드로 전환하려면 \`enable\` 명령어와 함께 별도의 패스워드를 입력

## 세션 관리

### 세션의 개념

- 사용자와 시스템 사이 또는 두 시스템 사이의 활성화된 접속을 의미
- 클라이언트와 서버 간의 연결 상태를 나타냄
- 웹서버의 연결성을 유지하기 위해 세션 사용

### HTTP의 특성과 세션의 필요성

- **Stateless:** 클라이언트의 상태를 저장하지 않음
- **Connectionless:** 연결이 1회성으로 끊어짐
- 이러한 특성 때문에 연결 상태를 유지하기 위해 세션이 필요

### 세션 보안 관리

- 일정 시간 이후 자동 세션 종료 설정
- 세션을 안전하게 관리하지 않으면 세션 하이재킹 위험 발생
- 비인가자가 해당 세션을 갖지 못하도록 통제

### 세션 관련 주요 위험

- **공용 PC 로그아웃 미실시:** 공용 컴퓨터에서 로그아웃하지 않고 자리를 비울 경우
- **장시간 미사용 세션 방치:** 사용하지 않는 세션을 오래 유지할 경우
- **세션 쿠키 탈취:** 공격자가 세션 쿠키를 가로채어 사용자 세션을 도용하는 경우

## 패치 관리

### 패치의 필요성

- 패치는 버그 수정뿐 아니라 알려진 취약점을 제거하는 핵심 보안 활동
- 운영체제도 일종의 소프트웨어로서 새로운 버그 및 취약점이 지속적으로 발견됨
- 발견된 취약점을 악용하는 보안 공격이 발생할 수 있음

### 패치 적용 방법

- 자동 보안 업데이트 검토 및 활성화
- 리눅스 시스템의 경우 \`sudo apt update\` 및 \`sudo apt upgrade\` 명령어 사용

### 패치의 효과

- 보안성 및 시스템 안정성 확보
- **예시:** Ubuntu LTS에 대해 19개의 보안취약점을 해결하는 업데이트 실시(2023년)

## 로그 관리

### 개요

- 로그는 시스템 동작, 오류, 경고, 접속 기록 등을 남기는 데이터
- 로그는 서버의 "블랙박스"
- 사고 예방과 사고 대응에 중요

### 시스템 로그

- 시스템의 성능, 오류, 경고 및 운영 정보 등이 기록
- **서버 보안 관리자의 역할:**
    - 시스템 로그를 정기적으로 분석
    - 침입 유무 파악, 침입 시도 의심 사례의 분석 및 보고

### 유닉스의 표준 로그 인터페이스: syslog

- **syslog.conf:** 어떤 로그를 어디에 남길지에 대한 로그 저장 규칙을 정의

### syslog.conf 예시

- \`*.emerg *\` - 로그의 수준이 패닉(emerg, Emergency)인 경우에 모든 형태(*)로 로그 저장 (로그 파일, 콘솔(/dev/console) 등 포함)
- \`*.alert /var/adm/syslog.log\` - 로그의 수준이 심각한 에러(alert, Alert)인 경우에 파일(/var/adm/syslog.log)에 로그 저장
- \`authpriv.none /var/log/messages\` - 보안 로그(authpriv)의 경우라면 어떤 수준에 대해서도 로그를 남기지 않음 (none)
- \`authpriv.* /var/log/messages\` - 보안 로그(authpriv)의 경우라면 모든 수준(*)에 대해서 파일 /var/log/messages에 로그 저장

### syslog의 로그 수준

- 모든 로그를 남기는 것은 성능과 부하 측면에서 현실적으로 불가능
- 로그를 너무 많이 남기면 저장공간과 분석 비용 증가
- 로그를 너무 적게 남기면 사고 분석이 어려움
- 어느 이상의 심각한 수준에 대해서 선별적으로 로그를 남기는 것을 권장
- 서버에서 다루고 있는 보안 수준에 따라 로그 수준(level)을 결정
    
    ![image.png](%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%203%EC%A3%BC%EC%B0%A8/image.png)
    

### syslog 로그 파일의 종류 및 경로

- 대부분 로그 파일의 경로가 미리 약속되어 있음

![image.png](%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%203%EC%A3%BC%EC%B0%A8/image%201.png)

### 보안 로그 (/var/log/secure) 예시

![image.png](%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%203%EC%A3%BC%EC%B0%A8/image%202.png)

- \`su\` 명령어를 통해 sjinlee 사용자가 root 사용자 변경을 시도했지만 인증 실패
    - \`Password check failed for user (root) ..... Logname=sjinlee\`
- 단순 비밀번호 실패가 아니라 여러 차례 반복적으로 시도된 경우
    - 보안적으로 위험한 공격일 가능성 있음
    - 이를 분석하여 보고하는 역할을 수행

### 로그 관리 시 주의사항

- **로그 파일 용량의 정기적 점검 필요**
- 로그 파일을 위한 디스크 용량이 충분한지 정기적으로 점검
- 적절한 보관 주기에 따라 기존의 로그를 삭제하거나 다른 보관 매체로 이동

## 서비스 관리 요약

### ① 메모리 버퍼 오버플로 공격

**개념:** 정해진 크기의 버퍼보다 넘치게 데이터를 저장하여 시스템 보안 문제를 일으키는 공격

**영향:** 프로그램 오동작, 비정상 종료, 악성 코드 실행 등

**공격 예시:**

- 안전하지 않은 함수(strcpy 등) 사용 시 입력 길이 검증 없이 복사
- 버퍼에 인접한 메모리 영역(프로그램 흐름 제어 관련)을 덮어써서 프로그램 실행 흐름 변조

**대응 방안:**

1. **운영체제 자체 방어:** Non-Executable Stack, ASLR, DEP, Stack Guard 등
2. **보안 패치:** 오피스, 어도비 등 정기적인 패치 적용
3. **시큐어 코딩:**
    - 입력 값 길이(크기) 검증
    - 안전한 함수 사용 (strncpy 등)
    - 정적 소스 분석 도구 활용 (valgrind, cppcheck, mudflap 등)

### ② 포맷 스트링 공격

**개념:** printf() 등의 함수에서 포맷 스트링을 악용하여 메모리 내용을 읽거나 쓰는 공격

**포맷 스트링:** C 언어에서 입·출력 형태를 정의하는 문자열 (%x, %d, %s, %n 등)

**공격 예시:**

- \`printf(argv[1])\` 형태로 사용 시 %x로 메모리 주소 확인 가능
- %n을 이용한 메모리 변조: 화면 출력 문자 수를 메모리에 저장하여 값 변경

**대응 방안:**

- \`printf("%s", argv[1])\` 형태로 포맷 스트링을 명시적으로 지정
- %n, %hn 사용 최소화 또는 회피
- 정적 소스 분석으로 위험 요소 사전 제거

### ③ 경쟁 조건(Race Condition)

**개념:** 여러 프로세스/스레드가 공유 자원에 동시 접근하여 자원의 일관성이 깨지는 상태

**발생 예시:**

- 동일 파일을 2개 프로세스가 동시 수정
- 같은 잔액을 동시 갱신
- 같은 임시 파일에 동시 접근

**대응 방안:**

- **동기화 구문 사용:** 락(Lock), 뮤텍스(Mutex), 세마포어(Semaphore) 등
- 한 번에 하나의 프로세스만 접근하도록 제어
- 성능 저하를 고려하여 필요한 경우에만 최소화하여 사용

## 보안 관리자가 자주 하는 실수

### 1. root 계정을 직접 사용

- 관리자 작업을 모두 root로 수행하면, 실수 발생 시 시스템 전체에 큰 영향
- 가능하면 일반 사용자 계정으로 로그인한 뒤, 필요한 경우에만 sudo 사용 권장

### 2. 보안 패치를 제때 적용하지 않음

- 운영체제와 서비스 프로그램의 알려진 취약점이 방치됨
- 정기적인 업데이트와 패치 점검 필요

### 3. 약한 비밀번호 사용

- 짧거나 추측하기 쉬운 비밀번호는 무차별 대입 공격에 취약
- 충분한 길이와 복잡도를 갖춘 비밀번호 사용 필요

### 4. 로그를 확인하지 않음

- 침입 시도, 로그인 실패, 서비스 이상 징후를 놓칠 수 있음
- 주요 로그를 정기적으로 점검하고 이상 여부를 확인해야 함

### 5. 테스트 계정이나 불필요한 계정을 방치

- 사용하지 않는 계정은 공격자에게 불필요한 진입 지점 제공
- 테스트 계정, 퇴직자 계정, 장기 미사용 계정은 점검 후 삭제 또는 잠금 처리

### 6. 불필요한 서비스를 활성화한 채 운영

- 사용하지 않는 서비스가 공격 표면을 넓힐 수 있음
- 반드시 필요한 서비스만 실행하고 나머지는 비활성화

### 7. sudo 권한을 과도하게 부여

- 모든 사용자에게 넓은 관리자 권한을 주면 권한 오남용 위험 증가
- 최소 권한 원칙에 따라 필요한 명령만 허용해야 함

## 자주 사용하는 보안 점검 명령어

기본 명령어만 정확히 사용해도 현재 계정, 권한, 작업 위치를 빠르게 점검 가능

### whoami

- 현재 작업 중인 사용자의 계정명을 확인
- 현재 어떤 권한 수준에서 작업하고 있는지 점검할 때 사용

### id

- 현재 사용자 또는 지정한 사용자의 UID, GID, 소속 그룹 정보를 확인
- 사용자와 그룹 권한을 함께 점검할 때 유용

### groups

- 현재 사용자 또는 지정한 사용자가 속한 그룹 목록을 확인
- 특정 사용자가 어떤 권한 그룹에 포함되어 있는지 확인 가능

### pwd

- 현재 작업 중인 디렉터리의 경로를 출력
- 중요한 설정 파일이나 시스템 디렉터리에서 작업 중인지 확인할 때 사용

### uname

- 시스템 및 커널 정보 확인 명령어
- \`-a\`: 시스템 전체 정보 출력
- \`-r\`: 커널 버전 출력

## vi 에디터

리눅스 서버 보안 설정 파일은 텍스트 기반인 경우가 많아 CLI 편집기 사용 능력이 중요

### vi 에디터 실행 및 모드

**실행 방법:**

- \`vi [편집하려는 file의 경로]\`

**모드:**

- **삽입 모드:** 원하는 글자를 입력하는 상태
- **명령어 모드:** 방향키로 이동하거나, 글자 삭제 등의 편집이 가능한 상태
- **라인 편집 모드:** 파일을 저장하거나 종료할 수 있는 상태

**모드 전환:**

- 명령어 모드 → 삽입 모드: \`i\`, \`a\`, \`o\`
- 삽입 모드 → 명령어 모드: \`Esc\`
- 명령어 모드 → 라인 편집 모드: \`:\`, \`?\`, \`/\`

### vi 에디터 명령어

**이동 명령어:**

- \`h\`: 왼쪽으로 한 칸 이동
- \`j\`: 아래 줄로 이동
- \`k\`: 윗 줄로 이동
- \`l\`: 오른쪽으로 한 칸 이동
- \`0\`: 현재 줄의 처음으로 이동 (숫자 0)
- \`L\`: 화면의 마지막 라인으로 이동
- \`Ctrl+f\`: 한 페이지 위로 이동
- \`Ctrl+b\`: 한 페이지 아래로 이동

**라인 번호:**

- \`:set nu\`: vi 라인번호 출력
- \`:set nonu\`: vi 라인 번호 출력 취소

**편집 명령어:**

- \`i\`: 현재 커서가 있는 곳에 글자를 추가 (Insert)
- \`a\`: 커서의 우측에 글자를 추가 (Append)
- \`x\`: 현재 커서가 있는 곳의 글자를 지움
- \`dd\`: 현재 커서가 위치한 라인(한 줄)을 지움 (Delete Line)
- \`yy\`: 현재 줄을 버퍼로 복사 (Ctrl+C와 유사)
- \`p\`: 현재 커서가 있는 줄 바로 아래에 붙여넣기 (Ctrl+V와 유사)

**파일 저장 및 종료 명령어:**

- \`:w\`: 현재 편집하는 파일을 저장 (Write)
- \`:q\`: 현재 편집하는 파일을 저장하지 않고 vi 에디터 종료 (Quit)
- \`:wq\`: 현재 편집하는 파일을 저장하고 vi 에디터 종료 (Write & Quit)
- \`:q!\`: 현재 편집하는 파일을 저장하지 않고 강제로 vi 에디터 종료 (Quit)`,_i=`# 정보보안 4주차

작성일자: 2026/03/26   (GMT+9)
과목: 정보보안
교수: 공준익
요약: OSI 7 LAYER, Sniffing
isEnable?: Yes`,vi=`# 정보보안 5주차

작성일자: 2026/04/02
과목: 정보보안
교수: 공준익
요약: 네트워크 공격, Spoofing&DDoS
isEnable?: Yes

# Spoofing

공격자가 수신인 행세하여 송신자의 메시지를 강탈하는 공격.

## Snipping vs Spoofing

1. 스니핑은 수동적이며, 스푸핑은 능동적이다.
2. 스니핑은 수신자가 메시지를 받으나, 스푸핑은 수신자가 메시지를 받지 못하거나 메시지가 변조될 수 있다.

## Spoofing의 종류

스푸핑은 수행 계층에 따라 2계층, 3계층, 7계층으로 나뉜다.

1. 2계층 공격
    1. 공격자가 동일 스위치 내에 존재해야 가능
    2. **ARP 스푸핑**
2. 3계층 공격
    1. 공격자가 내부 및 외부 네트워크에서도 공격 가능
    2. **IP 스푸핑, ICMP 리다이렉트**
3. 7계층 공격
    1. 외부 네트워크에서도 공격 가능
    2. **DNS 스푸핑**

### ARP 스푸핑

ARP는 IP 주소를 MAC 주소로 변환하는 프로토콜이며, ARP 스푸핑은 공격자가 공격 대상자의 MAC 주소를 가로채는 공격을 의미한다.

#### ARP의 동작 원리

1. 같은 로컬 네트워크에 단말이 있는 경우
    1. IP 주소 b에 대한 MAC 주소가 없을 때, 단말 A는 B의 MAC 주소를 모르므로 스위치로 ARP Request를 보낸다.
    2. 스위치가 ARP Request를 수신하면, 자신에게 접속된 모든 단말에게 ARP Request를 브로드캐스트 전송한다.
    3. ARP Requset를 수신한 단말 중 실제 요청한 IP 주소를 지닌 단말 B가 있을 경우, 단말 B는 ARP Reply를 단말 A로 유니캐스트로 전송한다.
    4. 단말 A는  ARP Reply를 수신하여 자신의 ARP 테이블에 단말 B의 MAC 주소를 추가한다.
2. 외부 네트워크에 단말이 있는 경우
    1. 외부 네트워크에 존재하므로 게이트웨이의 MAC 주소가 해당 IP의 MAC 주소로 설정된다.

#### ARP 스푸핑의 과정

1. 공격자가 스위치에 연결된 다른 단말 A에 ARP Reply를 전송한다. 이로 인해 A의 ARP 테이블에 단말 B의 MAC 주소가 공격자의 MAC 주소로 설정된다.
2. A가 B로 메시지를 전송할 경우, 실제로는 공격자에게 메시지가 전달된다.

#### ARP 스푸핑을 통한 스니핑

1. ARP 스푸핑을 반복하여 스위치 내 모든 단말의 MAC 주소를 공격자의 MAC 주소로 변경한다.
2. 공격자에게 메시지가 전달된 경우 공격자는 원래의 수신자에게 메시지를 재전송한다.

#### ARP 스푸핑의 현상과 탐지 방법

1. 지속적인 ARP 응답을 탐지
    1. 공격자는 ARP 스푸핑의 성공을 위해 ARP 응답 및 ARP 요청을 주기적으로 전송하는데, 패킷 분석을 통해 이를 탐지할 수 있다.
2. ARP 테이블에서 중복된 MAC 주소 확인
    1. arp -a로 ARP 테이블을 확인할 수 있으며, 테이블에서 각 다른 IP 주소가 동일한 MAC 주소로 되어 있을 경우 ARP 스푸핑을 의심할 수 있다.
3. ARP 테이블 감시 프로그램 활용
    1. ARP 테이블은 규모가 크면 스푸핑 탐지가 어려우므로, xarp나 arpwatch 등을 활용하여 ARP 스푸핑을 탐지할 수 있다.
4. 네트워크 속도 저하 확인
    1. ARP 스푸핑을 통한 스니핑 시 송신자의 메시지가 공격자를 거쳐 수신자에게 도달하므로 네트워크 속도가 이유 없이 저하될 경우 스푸핑을 의심할 수 있다.

#### ARP 스푸핑 방지 대책

1. 정적인 ARP 테이블 관리
    1. 공격자가 보낸 ARP 응답으로 인해 MAC 주소가 변경되지 않도록 정적 주소를 설정한다.
    2. 다만 단말 추가 및 변경 시 수동으로 ARP 테이블을 수정해야 하므로 관리비용이 증가한다.
    3. 따라서 중요 단말만을 묶어 별도의 서브 네트워크를 구성하고, 이들에 대해서만 정적 ARP 테이블을 관리하는 방식을 사용할 수 있다.
2. PC와 서버의 보안 수준 강화
    1. 정기적인 보안 업데이트 및 최신화로 방지가 가능하다.

### IP 스푸핑

공격자의 IP 주소를 다른 IP 주소로 속이는 공격. 
자신이 보내는 메시지 내 Source IP Address를 변조하여 실행한다.

![image.png](%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%205%EC%A3%BC%EC%B0%A8/image.png)

#### IP 스푸핑이 효과적일 수 있는 조건

여러 서버가 IP 주소 기반 신뢰 관계, 즉 IP 주소가 일치할 경우 인증을 거치지 않고 리소스 공유나 작업 위임을 허용하는 상태일 경우 IP 스푸핑이 매우 효과적이다.

이러한 상태를 IP 주소 기반 신뢰 관계라고 한다.

#### IP 스푸핑의 과정

1. 공격자가 공격 대상과 IP 기반 신뢰 관계인 다른 서버를 공격한다. 
    1. DoS 등으로 공격하여 서버를 동작 불능케 한다.
2. 이후 Source IP Address가 해당 서버의 IP로 변조한 메시지를 공격 대상으로 전송한다.

#### IP 스푸핑의 방지 방법

1. IP 주소 기반 신뢰 관계를 맺지 않는다.
    1. 만약 서버 클러스터링이 반드시 필요할 경우, 신뢰관계에 있는 서버들의 보안 수준을 강화한다.
2. 패킷 필터링
    1. 게이트웨이 밖에서 시도되는 IP 스푸핑은 게이트웨이에서 Source IP Address가 내부 IP로 되어 있는 메시지를 차단하여 방지할 수 있다.

### ICMP 스푸핑(ICMP 리다이렉트)

ICMP는 네트워크 상 오류 진단 및 제어를 목적으로 사용하는 프로토콜로, IP 프로토콜의 약점 보완 목적으로 사용한다.

#### ICMP의 사용 목적

1. 네트워크 진단
2. 네트워크 흐름 통제

#### ICMP 스푸핑의 과정

1. 공격자가 자신을 게이트웨이인 것처럼 속여 A가 메시지를 전송케 한다. 
이로 인해 단말 A에서 보낸 메시지는 먼저 공격자 I로 전송된다. 
2. 공격자는 해당 메시지를 게이트웨이로 전송한다. 이를 통해 A와 게이트웨이 사이에 공격자가 위치하게 된다.
- ICMP 스푸핑은 3계층 공격이므로 스위치 외부 뿐 아니라 게이트웨이 외부에서도 공격이 가능하다.
- 최근의 게이트웨이는 ICMP 스푸핑을 차단하기 위해 ACL 등을 활용한다.

### DNS 스푸핑

DNS는 URL 주소를 IP 주소로 변환하는 서비스이며, URL 주소와 매칭되는 IP 주소를 다른 IP로 변조하여 공격 대상이 의도하지 않은 주소로 접속케 하는 공격을 DNS 스푸핑이라고 한다.

#### DNS 스푸핑의 과정 1. 스니핑을 이용하는 공격

1. DNS 질의를 스니핑한다.
2. 공격자가 DNS 응답을 DNS 서버보다 빨리 전송하여 IP 주소를 변조한다.
    1. DNS 응답은 UDP 방식으로 전달되므로 DNS 응답 중 가장 먼저 도착한 메시지만 선택되고, 나머지는 무시된다.

#### DNS 스푸핑의 과정 2. ID 생성 기반의 DNS 캐시 포이즈닝

1. 대규모 DNS 질의를 전송한다.
    1. DNS 서버는 공인 네임 서버의 DNS 응답이 자신이 보낸 요청에 대한 응답인지 확인을 위해 ID를 생성하는데, 이 ID는 스니핑이나 스푸핑으로 알아내야 한다. 
    2. 보통 랜덤한 ID를 여럿 생성하는 방법을 사용한다.
2. 대규모 DNS 응답을 전송한다.
    1. 여러 개의 서로 다른 ID 값을 랜덤하게 생성하여 DNS 응답을 동시에 전송한다. ID 값이 동일한 경우 공격자가 던진 DNS 응답이 공인 네임 서버에서 보내는 DNS 응답 대신 선택된다.

<aside>

#### DNS 질의

DNS 서버는 순환 질의 방식을 사용하는데, 이는 계층적으로 도메인의 주소를 질의하는 방식이다. 이를 통해 구해진 IP 주소는 DNS 서버에 캐시로 저장되는데, 이 캐시를 스푸핑에 이용할 수 있다.

</aside>

<aside>

#### Birthday Attack 기법

생일 공격은 생일 역설에 기반한 공격으로, 생일 역설은 23명 이상이 모여 있을 때 생일이 같은 사람이 존재할 가능성이 50% 이상이라는 이론이다.

DNS 질의에서 사용되는 ID는 2바이트 크기이며, 이는 65536가지의 경우의 수를 지님을 의미한다. 만약 임의 값을 가정하고, 약 750회의 랜덤 값을 생성하면 그 중 하나는 해당 임의값과 동일한 값을 가지게 될 가능성이 높다.

</aside>

#### DNS 캐시 포이즈닝 공격의 대비책

1. DNS 서버의 소프트웨어를 최신 버전으로 업데이트
2. 외부에서 요청되는 DNS 질의에 대해 DNS 서버가 순환 질의를 하지 않도록 설정
3. DNSSEC(Domain Server System Security Extension) 사용

# 서비스 거부 공격

서비스 거부 공격이란 서비스가 정상적으로 제공되지 못하도록 방해하는 공격을 의미한다. 공격 목적은 대상의 가용성을 하락시키는 것이다.

서비스 거부 공격이 여러 곳에서 동시에 발생할 경우 이를 분산 서비스 거부 공격이라고 한다. 

DoS 공격은 크게 대역폭 소진 공격과 서버 마비 공격으로 나눌 수 있으며, 대역폭 소진 공격은 TCP SYN 플러딩, ICMP 플러딩, IP 플러딩이 있고 서버 마비 공격에는 HTTP GET 플러딩이 있다.

## TCP SYN Flooding

SYN 패킷을 대량 전송하는 공격. 
TCP의 3-Way Handshaking의 특징을 악용하는 방식으로, 송신자가 SYN 패킷을 보낸 후 SYN + ACK 패킷을 받았을 때 ACK 패킷을 전송하지 않으면 수신자는 ACK 패킷을 계속 기다리게 되며 리소스를 낭비하게 된다.

이는 대기 큐의 크기 증가, 최대 접속 대기 시간 감소, IPS 적용 등으로 대응할 수 있다.

## ICMP Flooding

대량의 ICMP echo 응답을 생성하는 공격. 스머프 공격이라고도 한다.

ICMP는 브로드캐스팅 방식으로 동작하는데, ICMP echo 요청의 출발 IP를 변조하여 echo 응답을 공격 대상에게 전송되도록 하는 방식이다. 이 때 공격 대상이 사용하는 단말을 좀비, 봇, 슬레이브 등으로 부른다.

먼저 공격자가  브로드캐스트 요청을 전송하고, 공격자의 echo 요청을 받은 좀비들이 동시에 ICMP echo 응답을 공격 대상자에게 전송한다. 

<aside>

#### 분산 서비스 거부 공격의 구조

DDoS 공격에는 4가지 구성 요소가 있다. 공격자, 공격 대상자, 에이전트, 마스터가 그것이다.

1. 에이전트: 공격 대상에게 실제 공격을 던지는 주체. 좀비, 봇, 슬레이브라고도 한다.
2. 마스터: 공격자로부터 공격 명령을 에이전트로 전달하는 역할.
</aside>

## IP Flooding

DoS 공격을 위해 공격자가 IP 관련 내용을 변조하는 공격 방식. LAND와 Teardrop으로 나뉜다.

### LAND

Local Area Network Denial. 패킷을 보낼 때 출발지 IP 주소와 도착지 IP 주소를 동일하게 하면 응답이 자신에게 돌아와서 무한 루프에 빠진다. 

### Teardrop

IP 패킷의 헤더를 서로 중첩되도록 하여 IP 패킷 재조합 과정에서 오류가 발생하도록 하게 하는 공격.

## HTTP GET Flooding

특정 웹페이지를 동시에 여러 에이전트가 요청하는 방법. 정상 요청을 거부하면 안 되므로 대처가 어렵다는 특징이 있다.

특정 IP에서 임계치 값을 넘어 대량의 HTTP GET 요청이 지속될 경우 이후 해당 IP에서 오는 요청을 무시하는 임계치 기반 방어로 방어할 수 있다.

### HTTP GET Flooding 변종

1. HTTP CC 공격
    1. HTTP 헤더의 CC(Cache-Control) 옵션에서 캐시를 사용하지 않게 하여 부하를 증가시킨다.
2. 동적 HTTP 요청 공격
    1. 요청되는 웹 페이지 주소가 동적으로 변경되는 공격. 출발지 IP 주소 기반의 임계치 기반 방어를 적용하여야 방어할 수 있다.`,yi=`# 정보보안 6주차

작성일자: 2026/04/09
과목: 정보보안
교수: 공준익
요약: 웹 보안
isEnable?: Yes

# 웹 Web

하이퍼텍스트 문서들이 인터넷을 통해 연결된 시스템. 거미줄처럼 복잡하게 연결되었다고 하여 이러한 이름이 붙었다.

웹은 프로토콜, 컨텐츠, 주소 체계의 세 가지 핵심 요소로 이루어진다.

- 통신 프로토콜은 HTTP 프로토콜을 사용한다.
- 컨텐츠는 하이퍼텍스트 문서이며, 이는 다른 문서로 접근할 수 있는 문서를 의미한다. 대표적으로 HTML 문서가 있다.
- 주소 체계는 URL(Uniform Resource Locator)을 사용한다.

## HTTP

HTTP에서 2대의 컴퓨터가 통신할 때 한 쪽은 클라이언트, 한 쪽은 서버가 된다. 
이 떄 클라이언트는 요청(Request)을 던지고, 서버는 요청에 대한 응답(Response)을 던진다. 

### 요청

요청에는 메서드, 요청 URI, 프로토콜 버전, 헤더가 포함된다.

- 메서드(Method)는 서버가 수행해야 할 동작을 정의한다.
    - GET
    - POST
    - HEAD
    - OPTION
    - TRACE
    - PUT
    - DELETE
    - CONNECT
- 요청 URI는 경로이며, 상대 경로 또는 절대 경로로 요청 가능하다.
- 프로토콜 버전은 HTTP 프로토콜 통신 시에 한정하여 HTTP의 버전이다. 
이는 크게 0.9, 1.0, 1.1, 2.0이 있다.
- 헤더는 요청 시 필요 조건이나 특성 등을 나타내는 필드이다. 
Host, Content, Keep-Alive가 있다.
- POST 메서드 한정으로 요청 바디도 포함될 수 있다. 이는 클라이언트가 서버로 보내는 추가적인 데이터이다,

### 응답

응답에는 프로토콜 버전, 상태 코드 및 상태 코드 설명, 응답 헤더, 응답 바디가 포함된다.

- 프로토콜 버전, 응답 헤더, 응답 바디는 요청의 그것과 같다.
- 상태 코드 및 상태 코드 설명은 요청의 처리 상태를 의미한다.
    - 상태 코드는 100~599까지 존재한다.

### HTTP의 특징

HTTP는 비연결지향 프로토콜이며, 클라이언트가 요청을 보내면 서버는 응답을 보내고 연결이 종료된다. 이는 성능상 비효율적이며, 때문에 HTTP 프로토콜 버전에 따라 연결을 유지하는 옵션이 추가되어 있다.

또한 HTTP는 상태를 저장하지 않는(Stateless) 프로토콜이며, 때문에 상태를 저장하기 위한 대안으로 쿠키와 세션이 존재한다.

#### 쿠키(Cookie)

클라이언트에 저장되는 키/값이 들어있는 작은 데이터 파일.

클라이언트의 상태 정보를 로컬에 저장하고 이를 참조하는 방식이며, 응답 메시지를 보낼 때 헤더에 Set-Cookie 값을 설정하면 클라이언트에 쿠키가 생성된다. 여기에는 이름, 값, 경로 정보, 만료일시가 설정된다. 이를 통해 사용자마다 다르게 적절한 페이지를 보여줄 수 있다.

#### 세션

일정 시간 간 동 클라이언트로부터 전달되는 요청들을 하나의 그룹으로 보고 동일 세션으로 식별하는 기법.

클라이언트가 서버로 최초 요청을 보내면 클라이언트에 세션 ID를 부여하며, 이는 서버의 메모리에 객체로 저장된다. 세션은 브라우저 종료 시 세션이 만료된다.

### HTML 문서

- 정적 컨텐츠
    - 내용의 변경이 없다. 웹 서버는 파일을 읽고 내용을 전송한다.
- 동적 컨텐츠
    - 사용자 상황이나 요청에 따라 내용이 달라진다.
    - SSL(Server Side Script Language)로 구현한다. JSP, PHP, ASP 등이 있다.
    - 웹 서버가 SSL로 작성된 페이지를 내부적으로 실행하며 실행 결과를 HTML로 전송한다.

HTML 문서는 웹 브라우저로 전달되는데, 이 때 클라이언트의 웹 브라우저에서 실행되는 스크립트를 CSL(Client Side Script Language)라고 한다.

- 동적으로 화면 내용을 만들거나 다양한 UI를 제공한다. JS, VBS가 있다.

동적 컨텐츠에서는 입력 파라미터를 전달할 수 있다. 이 때 GET 메서드와 POST 메서드를 사용할 수 있다.

- GET 메서드는 URI에 파라미터가 포함되는 방식이며, 이는 보안적으로 권장되지 않는다.
- POST 메서드를 통한 방식은 파라미터 정보가 요청 바디에 포함되는 방식이며, 보안적으로 우수하다.

### URI(Uniform Resource Identifier)

인터넷의 특정 자원에 접근하기 위해 사용하는 식별자. 
URL은 URI의 하위 집합이며, 일반적으로 URI는 URL로 불린다.

URI는 아래와 같은 구성 요소를 지닌다.

- 스키마 이름: 어떤 프로토콜을 사용할지 정한다.
- 자격 정보: 서버에서 자원 취득에 필요한 사용자명, 비밀번호 등의 자격 정보. 생략 가능하다.
- 서버 호스트명: FQDN 또는 IP 주소.
- 서버 포트번호: 네트워크 포트 번호. 생략 시 기본 포트 번호를 사용한다.
- 계층 파일 경로. 요청 자원 경로.
- 질의 문자열: 입력 파라미터. 생략 가능하다.
- 단편 식별자: 취득한 자원에서 그 하위에 있는 특정 부분을 # 등으로 가리키는 것. 생략 가능하다.

URI에서 사용할 수 없는 문자를 표현할 때 사용하는 인코딩 방식을 퍼센트 인코딩, 또는 URL 인코딩이라고 한다. 대상이 되는 문자는 바이트 단위로 나누어 16진수 형태로 표시된다. 

<aside>

*예외적으로, HTTP의 POST 메소드를 사용하여 웹 폼 문자열을 전송할 때 MIME의 Content-Type에 ‘application/xxxx-form-urlencoded’가 사용되면 공백이 ‘%20’이 아니라 ‘+’로 변경된다.*

</aside>

## 웹 취약점

### SQL Injection

데이터베이스와 관련된 보안취약점. 사용자가 입력하는 입력값에 대해 유효성을 검증하지 않고 그대로 사용할 때 발생 가능하다. 

SQL 인젝션은 매개변수 바인딩을 통해 질의문 변조를 허용하지 않거나, 입력값에 대한 특수문자를 검증하는 방식으로 방어할 수 있다.

### 경로 조작

사용자가 입력하는 입력값에 대한 유효성을 검증하지 않고 그대로 사용할 때 발생할 수 있는 서버 시스템 자원 접근에 대한 보안취약점. 

입력값에 대한 특수문자 검사 및 해당 문자 제거를 통해 방어할 수 있다.

### 위험한 형식 파일 업로드

유효성 점검의 대상이 사용자가 업로드하려는 파일일 경우 발생할 수 있는 보안취약점.  

아래와 같은 방식으로 방어할 수 있다.

- 화이트리스트 방식의 허용된 확장자만 업로드를 허용한다.
- 파일명과 경로를 임의 문자열로 변경하여 저장한다.
- 파일 저장 경로를 아예 다른 곳으로 설정한다.
- 파일의 실행 속성을 제거한다.

### XSS

웹 브라우저에서 사용자가 입력하는 입력 값에 대한 유효성을 검증하지 않고 그대로 웹 서버로 전송했을 때 발생할 수 있는 보안취약점. 
악성 스크립트를 웹 서버에 저장하여 동일 웹서버에 접속한 다른 사용자들에게 배포할 수 있으며, 일반적으로 JS에서 주로 발생한다.

사용자의 입력값에 대한 특수문자 검증을 통해 방어할 수 있다.

### 적절한 인증 없는 중요기능 허용

인증 점검 없이 곧바로 비즈니스 로직이 수행될 경우 발생할 수 있는 보안취약점. 

인증 점검 로직을 먼저 호출한 후 비즈니스 로직을 호출하는 방식으로 방어할 수 있다.

### 부적절한 인가

적절한 인가 점검 없이 비즈니스 로직이 수행될 경우 발생할 수 있는 보안취약점.

인가 점검 로직을 먼저 호출한 후 비즈니스 로직을 호출하는 방식으로 방어할 수 있다.

<aside>

#### 인증과 인가

- 인증(authentication): 요청을 보낸 사용자가 시스템의 사용자가 맞는지 확인하는 과정.
- 인가(authorization): 사용자의 자원에 대한 접근 또는 사용을 허용하는 과정.
</aside>

### 중요 정보 평문 저장/전송 및 취약한 암호화 알고리즘 사용

파일/데이터베이스, 또는 메모리에 중요 데이터 저장 또는 전송 시 발생하는 보안취약점.

암호화하여 저장/전송하거나, 안전한 암호화 알고리즘을 사용하여 방어할 수 있다.

### 부적절한 오류 처리

오류 상황 대응 부재나 부적절한 예외 처리로 인해 발생할 수 있는 보안취약점. 
오류 서버에는 웹 서버의 종류, 스택 트레이스를 통한 내부 로직 정보, DB/운영체제의 정보가 포함될 수 있다.

오류 메시지에 최소한의 정보만을 포함하거나 적절한 예외 처리로 방어할 수 있다.

## 웹 서버의 계정 관리

웹 서버는 각 기업의 중요 정보에 접근하기 위한 진입점이며, 실제 서비스를 제공하는 서비스 주체의 역할을 한다. 하여, 웹 서버는 보안 공격자들의 대표적인 공격 대상이 된다.

보안 공격자는 웹 서버 자체가 지니는 약점, 웹 서버가 동적 컨텐츠를 생성하는 지점, CSS를 공격 대상으로 삼는다. 

웹 서버는 아직 알려지지 않은 보안 취약점으로 공격 당할 가능성이 존재하므로, 웹 서버를 실행시키는 운영체제상 사용자는 주어진 기능만을 실행할 수 있는 최소한의 권한을 지녀야 한다. 이러면 사용자 계정이 탈취당하더라도 권한이 부재하여 시스템 설정을 변경하지 못한다.

## 웹 서버의 파일 관리

### 디렉터리 검색 제거

웹 브라우저가 웹 서버로 디렉터리 정보를 요청했을 때 디렉터리 내 모든 파일 목록을 보이는 기능을 디렉터리 리스닝이라고 한다. 이는 디렉터리에 index와 같은 기본 문서가 부재할 경우 기본적으로 보여진다.

디렉터리 리스닝이 일반 사용자에게 노출되는 것은 매우 큰 보안 취약점이며, 때문에 디렉터리 리스닝 기능은 반드시 오프하여야 한다. 

### 불필요하게 설치된 파일 제거

웹 서버 설치 시 기본적으로 제공되는 매뉴얼 파일 및 예제 스크립트 파일 등을 제거하여야 한다.

## 웹 서버의 서비스 관리

### 파일 업로드 및 다운로드의 최대 크기 설정

파일 최대 크기 설정을 하지 않을 경우 부주의한 사용자나 악의적 사용자에 의해 서버의 가용성이 저하되거나 중요 자료가 대량으로 유출될 수 있다. 

### IIS의 WEBDAV 서비스 비활성화

## 웹 서버의 로그 관리

### IIS에서의 로그 관리

### Apache에서의 로그 관리`,bi=`# 정보보안 7주차

작성일자: 2026/04/16
과목: 정보보안
교수: 공준익
요약: Wireshark 실습
isEnable?: Yes

.`,xi=`# 정보보안 9주차

과목: 정보보안
교수: 공준익
isEnable?: Yes

.`,Si=`# Sally’s Law

---

직관의 이해.

<aside>

<aside>

# **최신 글**

</aside>

[제목 없음](Sally%E2%80%99s%20Law/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%2031e7f6b559dc802ea24def7470fe9f2e.csv)

</aside>

<aside>

<aside>

# 공부

</aside>

[제목 없음](Sally%E2%80%99s%20Law/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%2031e7f6b559dc80ebbec0fa427d5f1117.csv)

</aside>

<aside>

<aside>

# **수업의 기록**

</aside>

[제목 없음](Sally%E2%80%99s%20Law/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%203257f6b559dc8061aae2f655dbd39abd.csv)

</aside>

<aside>

<aside>

### **글쓴이에 대한 정보**

</aside>

- [GitHub](https://github.com/Minjae0804)
- [이전 블로그](https://velog.io/@sally_law/posts)
</aside>

---

<aside>

<aside>

### MEMO

</aside>

[제목 없음](Sally%E2%80%99s%20Law/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%203277f6b559dc80eab227e55a826469ac.csv)

</aside>

- DB 모음
    
    [Blog DB](Sally%E2%80%99s%20Law/Blog%20DB%20b137f6b559dc830bbb7c01305220d5f4.csv)
    
    [Study DB](Sally%E2%80%99s%20Law/Study%20DB%203257f6b559dc80189594c8729b19ef33.csv)
    
    [수업기록 DB](Sally%E2%80%99s%20Law/%EC%88%98%EC%97%85%EA%B8%B0%EB%A1%9D%20DB%2031e7f6b559dc8017b80defc2c5d5eaad.csv)
    
    [Memo DB](Sally%E2%80%99s%20Law/Memo%20DB%203267f6b559dc80d6b14ef1b6984d2a76.csv)`,Ci=`# 홈

[제목 없음](%ED%99%88/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%20965de3d3bb284073b41563070ccb8554.csv)

[내 작업](%ED%99%88/%EB%82%B4%20%EC%9E%91%EC%97%85%20ae61722074c74ae7a2696c9af2cc2f5f.csv)

[홈 보기](%ED%99%88/%ED%99%88%20%EB%B3%B4%EA%B8%B0%20d159bda7aa154e5c9190701cf93d7e4f.csv)

[제목 없음](%ED%99%88/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C%20ff2a7a8af94747369004b98f6ca68835.csv)`;function wi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ti=wi();function Ei(e){Ti=e}var Di={exec:()=>null};function N(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(P.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Oi=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),P={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},ki=/^(?:[ \t]*(?:\n|$))+/,Ai=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ji=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Mi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ni=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pi=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Fi=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ii=N(Fi).replace(/bull/g,Pi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Li=N(Fi).replace(/bull/g,Pi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),F=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,I=/^[^\n]+/,Ri=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,zi=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ri).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Bi=N(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pi).getRegex(),Vi=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Hi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ui=N(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Hi).replace(`tag`,Vi).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Wi=N(F).replace(`hr`,Mi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Vi).getRegex(),Gi={blockquote:N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Wi).getRegex(),code:Ai,def:zi,fences:ji,heading:Ni,hr:Mi,html:Ui,lheading:Ii,list:Bi,newline:ki,paragraph:Wi,table:Di,text:I},Ki=N(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Mi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Vi).getRegex(),qi={...Gi,lheading:Li,table:Ki,paragraph:N(F).replace(`hr`,Mi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ki).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Vi).getRegex()},Ji={...Gi,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Hi).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Di,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(F).replace(`hr`,Mi).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Ii).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Yi=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xi=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Zi=/^( {2,}|\\)\n(?!\s*$)/,Qi=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,$i=/[\p{P}\p{S}]/u,ea=/[\s\p{P}\p{S}]/u,ta=/[^\s\p{P}\p{S}]/u,na=N(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,ea).getRegex(),ra=/(?!~)[\p{P}\p{S}]/u,ia=/(?!~)[\s\p{P}\p{S}]/u,aa=/(?:[^\s\p{P}\p{S}]|~)/u,oa=N(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Oi?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),sa=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ca=N(sa,`u`).replace(/punct/g,$i).getRegex(),la=N(sa,`u`).replace(/punct/g,ra).getRegex(),L=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,ua=N(L,`gu`).replace(/notPunctSpace/g,ta).replace(/punctSpace/g,ea).replace(/punct/g,$i).getRegex(),da=N(L,`gu`).replace(/notPunctSpace/g,aa).replace(/punctSpace/g,ia).replace(/punct/g,ra).getRegex(),fa=N(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,ta).replace(/punctSpace/g,ea).replace(/punct/g,$i).getRegex(),pa=N(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,$i).getRegex(),ma=N(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ta).replace(/punctSpace/g,ea).replace(/punct/g,$i).getRegex(),ha=N(/\\(punct)/,`gu`).replace(/punct/g,$i).getRegex(),ga=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_a=N(Hi).replace(`(?:-->|$)`,`-->`).getRegex(),va=N(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,_a).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ya=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,ba=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,ya).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xa=N(/^!?\[(label)\]\[(ref)\]/).replace(`label`,ya).replace(`ref`,Ri).getRegex(),Sa=N(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ri).getRegex(),Ca=N(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,xa).replace(`nolink`,Sa).getRegex(),wa=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ta={_backpedal:Di,anyPunctuation:ha,autolink:ga,blockSkip:oa,br:Zi,code:Xi,del:Di,delLDelim:Di,delRDelim:Di,emStrongLDelim:ca,emStrongRDelimAst:ua,emStrongRDelimUnd:fa,escape:Yi,link:ba,nolink:Sa,punctuation:na,reflink:xa,reflinkSearch:Ca,tag:va,text:Qi,url:Di},Ea={...Ta,link:N(/^!?\[(label)\]\((.*?)\)/).replace(`label`,ya).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,ya).getRegex()},Da={...Ta,emStrongRDelimAst:da,emStrongLDelim:la,delLDelim:pa,delRDelim:ma,url:N(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,wa).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:N(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,wa).getRegex()},Oa={...Da,br:N(Zi).replace(`{2,}`,`*`).getRegex(),text:N(Da.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},ka={normal:Gi,gfm:qi,pedantic:Ji},Aa={normal:Ta,gfm:Da,breaks:Oa,pedantic:Ea},ja={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Ma=e=>ja[e];function Na(e,t){if(t){if(P.escapeTest.test(e))return e.replace(P.escapeReplace,Ma)}else if(P.escapeTestNoEncode.test(e))return e.replace(P.escapeReplaceNoEncode,Ma);return e}function Pa(e){try{e=encodeURI(e).replace(P.percentDecode,`%`)}catch{return null}return e}function Fa(e,t){let n=e.replace(P.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(P.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(P.slashPipe,`|`);return n}function Ia(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function La(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&P.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Ra(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function za(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Ba(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Va(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Ha=class{options;rules;lexer;constructor(e){this.options=e||Ti}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:La(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Va(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ia(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ia(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ia(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ia(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=za(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=La(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ia(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Fa(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ia(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Fa(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ia(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Ia(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Ra(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ba(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ba(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Ua=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ti,this.options.tokenizer=this.options.tokenizer||new Ha,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:P,block:ka.normal,inline:Aa.normal};this.options.pedantic?(t.block=ka.pedantic,t.inline=Aa.pedantic):this.options.gfm&&(t.block=ka.gfm,this.options.breaks?t.inline=Aa.breaks:t.inline=Aa.gfm),this.tokenizer.rules=t}static get rules(){return{block:ka,inline:Aa}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(P.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(P.tabCharGlobal,`    `).replace(P.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Wa=class{options;parser;constructor(e){this.options=e||Ti}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(P.notSpaceStart)?.[0],i=e.replace(P.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Na(r)+`">`+(n?i:Na(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Na(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Na(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Pa(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Na(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Pa(e);if(i===null)return Na(n);e=i;let a=`<img src="${e}" alt="${Na(n)}"`;return t&&(a+=` title="${Na(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Na(e.text)}},Ga=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Ka=class e{options;renderer;textRenderer;constructor(e){this.options=e||Ti,this.options.renderer=this.options.renderer||new Wa,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ga}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},qa=class{options;block;constructor(e){this.options=e||Ti}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ua.lex:Ua.lexInline}provideParser(e=this.block){return e?Ka.parse:Ka.parseInline}},Ja=new class{defaults=wi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ka;Renderer=Wa;TextRenderer=Ga;Lexer=Ua;Tokenizer=Ha;Hooks=qa;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Wa(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Ha(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new qa;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];qa.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&qa.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ua.lex(e,t??this.defaults)}parser(e,t){return Ka.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Ua.lex:Ua.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Ka.parse:Ka.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Ua.lex:Ua.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Ka.parse:Ka.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Na(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function R(e,t){return Ja.parse(e,t)}R.options=R.setOptions=function(e){return Ja.setOptions(e),R.defaults=Ja.defaults,Ei(R.defaults),R},R.getDefaults=wi,R.defaults=Ti,R.use=function(...e){return Ja.use(...e),R.defaults=Ja.defaults,Ei(R.defaults),R},R.walkTokens=function(e,t){return Ja.walkTokens(e,t)},R.parseInline=Ja.parseInline,R.Parser=Ka,R.parser=Ka.parse,R.Renderer=Wa,R.TextRenderer=Ga,R.Lexer=Ua,R.lexer=Ua.lex,R.Tokenizer=Ha,R.Hooks=qa,R.parse=R,R.options,R.setOptions,R.use,R.walkTokens,R.parseInline,Ka.parse,Ua.lex;var Ya=Object.assign({"../posts/about-abstraction-and-interface-design.md":rr,"../posts/joel-spolsky-leaky-abstractions.md":ir,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/People/Sally 7067f6b559dc83e09e5e81aa785b795a.md":ar,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/ 35d7f6b559dc80c5a173ca8e1d589208.md":or,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Blog DB/Joel Spolsky의 추상화 누수 법칙 3197f6b559dc808ca1c3fa3a58ec801b.md":sr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Blog DB/기술은 어떻게 우리의 직관을 해부하는가 31c7f6b559dc80a18f2ef9dd833eb42b.md":cr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Blog DB/이전 블로그 3197f6b559dc80ef955de31d1e5ed0cc.md":lr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Blog DB/직관의 이해란 3287f6b559dc80fab530d24232debe64.md":ur,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Blog DB/추상화와 인터페이스 설계에 대하여 3197f6b559dc8079b2ffd7755ff403ac.md":dr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/Bus Lock 3287f6b559dc806b846bcaa32cf8de82.md":fr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/CPU Interrupt Vector 3267f6b559dc8047acfacfbfe91b42a2.md":pr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/Calling Convention 32c7f6b559dc802d8ac4c2c6ccc7576b.md":mr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/Function Prolog and Epilog 32c7f6b559dc809ca4a2c339f9d78ee2.md":hr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/x86 CPU Registers 3267f6b559dc80418415ffebdabb1ea8.md":gr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/x86dbg 명령 3337f6b559dc80afbcebc50736ce6e42.md":_r,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/식별자 작성 방식 3367f6b559dc8038a201e9c15444c71a.md":vr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Memo DB/이전 블로그 3267f6b559dc81dda9a8c3c79322ec16.md":yr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 0 리버싱이란 3257f6b559dc80cb8d22c9f67a7d311b.md":br,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 1 Hello, World! 3257f6b559dc808e922ed78f7a4989f4.md":xr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 2 Little Endian 3357f6b559dc80d48cc6d354569fecde.md":Sr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 3 IA-32 Register 3357f6b559dc80ae9c8ef453856d8bf6.md":Cr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 4 Stack 3387f6b559dc8062b04cdf5d31feb19f.md":wr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 5 abex1 풀이 3387f6b559dc8028890efb7559bd4285.md":Tr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 6 Stack Frame 3397f6b559dc8099a5d3ce40ad381f7e.md":Er,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/Reversing 7 33c7f6b559dc80fa9606c46d584791b3.md":Dr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/Study DB/이전 블로그 3257f6b559dc81149519c7ae3440b029.md":Or,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 2주차 3207f6b559dc80eeb9d2c392836de103.md":kr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 3주차 3277f6b559dc806090c9f177584d2322.md":Ar,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 4주차 32e7f6b559dc80d594c9c5e8782f9794.md":jr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 5주차 3357f6b559dc80528cfacdee736d4d69.md":Mr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 6주차 33c7f6b559dc80748818eaca60483351.md":Nr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 7주차 34a7f6b559dc806d8421ddb378ff10ab.md":Pr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 8주차 34a7f6b559dc8050aec3da7ea97870a7.md":Fr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/Java프레임워크 9주차 35d7f6b559dc802ab353c1ac54132fac.md":Ir,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 2주차 31f7f6b559dc8084af5cdc3fd48ef31f.md":Lr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 3주차 31f7f6b559dc8068aea3eb0f67f82832.md":Rr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 4주차 3267f6b559dc8014a239c58a59b09868.md":zr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 5주차 3347f6b559dc804191b6f00a98e1f7d7.md":Br,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 6주차 33b7f6b559dc8028bd63c4db6df1ef75.md":Vr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 7주차 3427f6b559dc8090ad8bea8af7260b76.md":Hr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/iOS프로그래밍 9주차 3507f6b559dc80eba1a1dc3695835a4b.md":Ur,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 10주차 35d7f6b559dc80b7ab13f51be6a19ab8.md":Wr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 1주차 31e7f6b559dc80358385c44d08b07be9.md":Gr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 2주차 3257f6b559dc80dba031db5b8c8d2d2a.md":Kr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 3주차 32c7f6b559dc80c486a3d645a3d99e3e.md":qr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 4주차 3337f6b559dc804985c3e615b8ee5baa.md":Jr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 5주차 33a7f6b559dc80c08d75c9aa3dc1c032.md":Yr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 6주차 3417f6b559dc8073a907da73032a0bc5.md":Xr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 7주차 3487f6b559dc802c8ff6dc75209a60f6.md":Zr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/빅데이터 9주차 3567f6b559dc8050968ce67cc67cc5a4.md":Qr,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 2주차 31f7f6b559dc80de91e2fcb2b2d4e452.md":$r,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 3주차 3267f6b559dc80ba8ddfe95ebcf82a2e.md":ei,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 4주차 32d7f6b559dc80c4af6ce69f6242fcf7.md":ti,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 5주차 3347f6b559dc80a1a08bc79bf5f91b6c.md":ni,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 6주차 33b7f6b559dc80dfa63bf86bebfd6852.md":ri,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 7주차 3427f6b559dc80ceae8ad410b542bba9.md":ii,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/소프트웨어설계 9주차 3507f6b559dc808e87bac22edf74f334.md":ai,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 1주차 31e7f6b559dc804894d6ce3bb7f945d4.md":oi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 2주차 3257f6b559dc806e9a71f601bcb78275.md":si,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 3주차 32c7f6b559dc8087ac41fd4cf5801803.md":ci,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 4주차 3337f6b559dc8036bbcbef9d7f77e3b5.md":li,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 5주차 33a7f6b559dc80bf9fd5d549623bf0bc.md":ui,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 6주차 3417f6b559dc8059aeabe7dbacb24f89.md":di,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 8주차 34f7f6b559dc80f89640d7db9afb4a7a.md":fi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/안드로이드실무 9주차 35d7f6b559dc8087b0d7ca240e7b284f.md":pi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 1주차 3217f6b559dc80acb86efd8b51e74bc9.md":mi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 2주차 3217f6b559dc80cdb5baf5a0bbad253a.md":hi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 3주차 3287f6b559dc805aa148fa8c1c1cd2e4.md":gi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 4주차 3337f6b559dc80af8f4ae6889c3ce0a1.md":_i,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 5주차 3367f6b559dc80ec9ce1e842a66e9031.md":vi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 6주차 33d7f6b559dc80378765f0c13ca8d4be.md":yi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 7주차 3447f6b559dc8052958de841b7b7a99e.md":bi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law/수업기록 DB/정보보안 9주차 35d7f6b559dc80ff8a91f4ef3cd9f60a.md":xi,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/Sally’s Law 4487f6b559dc82979db0816766f36b89.md":Si,"../posts/notion/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677-Part-1/Export-5dcfd6b3-bb68-4e80-bf2d-91f83f627677/홈 68d3539b5b624fb48e669c5bdd3101cd.md":Ci});function Xa(e){let t=e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!t)return{data:{},content:e};let n={};return t[1].split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t===-1)return;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim().replace(/^"|"$/g,``);i.startsWith(`[`)?n[r]=i.slice(1,-1).split(`,`).map(e=>e.trim().replace(/^"|"$/g,``)):n[r]=i}),{data:n,content:t[2].trim()}}function Za(e,t){let{data:n,content:r}=Xa(e);return{slug:t,title:n.title??`제목 없음`,date:n.date?String(n.date):``,category:n.category??``,tags:Array.isArray(n.tags)?n.tags:[],uploader:n.uploader??``,excerpt:n.excerpt??r.slice(0,100).replace(/[#*`\n]/g,``).trim(),content:r,html:R.parse(r)}}var Qa=Object.entries(Ya).map(([e,t])=>Za(t,e.replace(`../posts/`,``).replace(`.md`,``))).sort((e,t)=>new Date(t.date)-new Date(e.date));function $a(e){return Qa.find(t=>t.slug===e)??null}function eo(){let e={};for(let t of Qa)t.category&&(e[t.category]=(e[t.category]??0)+1);return Object.entries(e).map(([e,t])=>({name:e,count:t})).sort((e,t)=>t.count-e.count)}function to(){let e={};for(let t of Qa)for(let n of t.tags)e[n]=(e[n]??0)+1;return Object.entries(e).map(([e,t])=>({name:e,count:t})).sort((e,t)=>t.count-e.count)}function no(e=5){return Qa.slice(0,e)}function ro(e=1,t=5){let n=(e-1)*t;return{posts:Qa.slice(n,n+t),totalPages:Math.ceil(Qa.length/t),currentPage:e}}function io(e){if(!e||!e.trim())return[];let t=e.trim().toLowerCase();return Qa.filter(e=>{let n=e.title.toLowerCase().includes(t),r=e.category.toLowerCase().includes(t),i=e.tags.some(e=>e.toLowerCase().includes(t));return n||r||i})}function ao(){let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(!1),i=(0,_.useRef)(null),a=e.trim().length>=1?io(e):[];(0,_.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let o=e=>{t(e.target.value),r(!0)},s=()=>{t(``),r(!1)};return(0,j.jsxs)(`div`,{ref:i,children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3`,children:M.sidebar.search}),(0,j.jsxs)(`div`,{className:`relative`,children:[(0,j.jsx)(`input`,{type:`search`,value:e,onChange:o,onFocus:()=>e.trim()&&r(!0),placeholder:M.sidebar.searchPlaceholder,"aria-label":M.sidebar.searchPlaceholder,className:`w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-brown-300/40 focus:border-brown-400 transition-colors`}),(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`absolute left-2.5 top-2.5 w-4 h-4 text-stone-400`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z`})}),n&&e.trim()&&(0,j.jsx)(`div`,{className:`absolute top-full left-0 right-0 mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg shadow-md z-50 overflow-hidden`,children:a.length===0?(0,j.jsx)(`div`,{className:`px-4 py-3 text-xs text-stone-400 dark:text-stone-500`,children:M.search.empty}):(0,j.jsx)(`ul`,{children:a.slice(0,6).map(e=>(0,j.jsx)(`li`,{children:(0,j.jsxs)(k,{to:`/posts/${e.slug}`,onClick:s,className:`flex flex-col gap-0.5 px-4 py-2.5 hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors`,children:[(0,j.jsx)(`span`,{className:`text-sm text-stone-800 dark:text-stone-200 line-clamp-1 leading-snug`,children:e.title}),(0,j.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[e.category&&(0,j.jsx)(`span`,{className:`text-xs text-brown-500 dark:text-brown-300`,children:e.category}),e.tags.slice(0,2).map(e=>(0,j.jsxs)(`span`,{className:`text-xs text-stone-400 dark:text-stone-500`,children:[`#`,e]},e))]})]})},e.slug))})})]})]})}function oo(){let{name:e,initial:t,github:n,email:r,description:i}={...A.author,description:A.description};return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3`,children:M.sidebar.about}),(0,j.jsxs)(`div`,{className:`flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-stone-100 dark:border-stone-800`,children:[(0,j.jsx)(`div`,{className:`w-16 h-16 rounded-full overflow-hidden bg-brown-50 dark:bg-brown-800 flex items-center justify-center ring-2 ring-stone-100 dark:ring-stone-800 shrink-0`,children:(0,j.jsx)(`span`,{className:`text-xl font-semibold text-brown-500 dark:text-brown-300`,"aria-hidden":`true`,children:t})}),(0,j.jsx)(`div`,{children:(0,j.jsx)(`p`,{className:`font-medium text-md text-stone-900 dark:text-white`,children:e})}),(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(`a`,{href:n,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,className:`w-8 h-8 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-500 hover:text-brown-500 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z`})})}),(0,j.jsx)(`a`,{href:`mailto:${r}`,"aria-label":`이메일`,className:`w-8 h-8 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-500 hover:text-brown-500 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z`})})})]})]})]})}function so(){let e=eo();return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3`,children:M.sidebar.category}),(0,j.jsx)(`ul`,{className:`flex flex-col gap-1`,children:e.map(({name:e,count:t})=>(0,j.jsx)(`li`,{children:(0,j.jsxs)(k,{to:`/categories/${e}`,className:`flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:bg-brown-50 dark:hover:bg-stone-800 hover:text-brown-600 dark:hover:text-brown-300 transition-colors group`,children:[(0,j.jsx)(`span`,{children:e}),(0,j.jsx)(`span`,{className:`text-xs text-stone-400 dark:text-stone-500 group-hover:text-stone-500 dark:group-hover:text-stone-400 tabular-nums`,children:t})]})},e))})]})}function co(){let e=no(A.sidebar.latestPostCount);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3`,children:M.sidebar.latestPost}),(0,j.jsx)(`ul`,{className:`flex flex-col gap-3`,children:e.map(({slug:e,title:t,date:n})=>{let r=new Date(n).toLocaleDateString(`ko-KR`,{year:`numeric`,month:`short`,day:`numeric`});return(0,j.jsx)(`li`,{children:(0,j.jsxs)(k,{to:`/posts/${e}`,className:`flex flex-col gap-0.5 group`,children:[(0,j.jsx)(`span`,{className:`text-sm text-stone-700 dark:text-stone-300 group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors line-clamp-1 leading-snug`,children:t}),(0,j.jsx)(`time`,{dateTime:n,className:`text-xs text-stone-400 dark:text-stone-500`,children:r})]})},e)})})]})}function lo(e,t,n){if(n===t)return`text-sm`;let r=(e-t)/(n-t);return r>.66?`text-base font-medium`:r>.33?`text-sm`:`text-xs`}function uo(){let e=to(),t=e.map(e=>e.count),n=Math.min(...t),r=Math.max(...t);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3`,children:M.sidebar.tag}),(0,j.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:e.map(({name:e,count:t})=>(0,j.jsxs)(k,{to:`/tags/${e}`,className:`${lo(t,n,r)} px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-brown-300 dark:hover:border-brown-600 hover:text-brown-600 dark:hover:text-brown-300 transition-colors`,children:[`#`,e]},e))})]})}function fo(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ao,{}),(0,j.jsx)(po,{}),(0,j.jsx)(oo,{}),(0,j.jsx)(po,{}),(0,j.jsx)(so,{}),(0,j.jsx)(po,{}),(0,j.jsx)(co,{}),(0,j.jsx)(po,{}),(0,j.jsx)(uo,{})]})}function po(){return(0,j.jsx)(`hr`,{className:`border-none border-t border-gray-100 dark:border-gray-800`})}function mo({title:e=``,slug:t=``}){return(0,j.jsx)(`h2`,{className:`text-base font-semibold text-stone-900 dark:text-white leading-snug group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors`,children:(0,j.jsx)(k,{to:`/posts/${t}`,children:e})})}function z({date:e=``}){return(0,j.jsx)(`time`,{dateTime:e,className:`text-xs text-stone-400 dark:text-stone-500`,children:e?new Date(e).toLocaleDateString(`ko-KR`,{year:`numeric`,month:`long`,day:`numeric`}):``})}function B({tags:e=[]}){return e.length===0?null:(0,j.jsx)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:e.map(e=>(0,j.jsxs)(k,{to:`/tags/${e}`,className:`text-xs px-2 py-0.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-brown-300 dark:hover:border-brown-600 hover:text-brown-600 dark:hover:text-brown-300 transition-colors`,children:[`#`,e]},e))})}function ho({category:e=``}){return e?(0,j.jsx)(k,{to:`/categories/${e}`,className:`text-xs font-medium px-2 py-0.5 rounded bg-brown-50 dark:bg-brown-800 text-brown-600 dark:text-brown-300 hover:bg-brown-100 dark:hover:bg-brown-700 transition-colors`,children:e}):null}function go({uploader:e=``}){return e?(0,j.jsxs)(`span`,{className:`flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500`,children:[(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-3.5 h-3.5`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z`})}),e]}):null}function _o({post:e}){let{slug:t,title:n,date:r,tags:i=[],category:a,uploader:o}=e;return(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap`,children:[(0,j.jsx)(ho,{category:a}),(0,j.jsx)(`span`,{className:`text-stone-300 dark:text-stone-600 text-xs`,"aria-hidden":`true`,children:`·`}),(0,j.jsx)(z,{date:r})]}),(0,j.jsx)(mo,{title:n,slug:t}),(0,j.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-2 mt-1`,children:[(0,j.jsx)(B,{tags:i}),(0,j.jsx)(go,{uploader:o})]})]})}function vo({excerpt:e=``}){return(0,j.jsx)(`p`,{className:`text-sm text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed`,children:e})}function yo({excerpt:e=``}){return(0,j.jsx)(`div`,{className:`mt-3`,children:(0,j.jsx)(vo,{excerpt:e})})}function bo({post:e}){let{slug:t,excerpt:n,content:r}=e;return(0,j.jsxs)(`article`,{className:`group p-5 rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-brown-300 dark:hover:border-brown-600 hover:shadow-sm transition-all duration-200`,children:[(0,j.jsx)(_o,{post:e}),(0,j.jsx)(yo,{excerpt:n,content:r}),(0,j.jsx)(`div`,{className:`mt-4 flex justify-end`,children:(0,j.jsx)(k,{to:`/posts/${t}`,className:`text-sm text-brown-500 dark:text-brown-300 font-medium hover:underline underline-offset-2`,children:M.post.readMore})})]})}function xo({page:e=1,perPage:t=5}){let{posts:n}=ro(e,t);return n.length===0?(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-20 text-stone-400 dark:text-stone-500 gap-2`,children:[(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-10 h-10`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z`})}),(0,j.jsx)(`p`,{className:`text-sm`,children:M.post.empty})]}):(0,j.jsx)(`div`,{className:`flex flex-col gap-4`,children:n.map(e=>(0,j.jsx)(bo,{post:e},e.slug))})}function So({currentPage:e=1,totalPages:t=5,basePath:n=`/`}){if(t<=1)return null;let r=e=>`${n}?page=${e}`,i=(()=>{let n=[],r=e-2,i=e+2;for(let e=1;e<=t;e++)(e===1||e===t||e>=r&&e<=i)&&n.push(e);let a=[],o=null;for(let e of n)o!==null&&e-o>1&&a.push(`...`),a.push(e),o=e;return a})();return(0,j.jsxs)(`nav`,{"aria-label":M.pagination.prev,className:`flex items-center justify-center gap-1`,children:[e>1?(0,j.jsx)(`a`,{href:r(e-1),"aria-label":M.pagination.prev,className:`w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15.75 19.5 8.25 12l7.5-7.5`})})}):(0,j.jsx)(`span`,{className:`w-9 h-9 flex items-center justify-center text-stone-300 dark:text-stone-700 cursor-not-allowed`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15.75 19.5 8.25 12l7.5-7.5`})})}),i.map((t,n)=>t===`...`?(0,j.jsx)(`span`,{className:`w-9 h-9 flex items-center justify-center text-sm text-stone-400 dark:text-stone-500`,children:`···`},`ellipsis-${n}`):(0,j.jsx)(`a`,{href:r(t),"aria-label":`${t}페이지`,"aria-current":t===e?`page`:void 0,className:`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-colors
              ${t===e?`bg-brown-500 text-white font-medium`:`text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800`}`,children:t},t)),e<t?(0,j.jsx)(`a`,{href:r(e+1),"aria-label":M.pagination.next,className:`w-9 h-9 flex items-center justify-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m8.25 4.5 7.5 7.5-7.5 7.5`})})}):(0,j.jsx)(`span`,{className:`w-9 h-9 flex items-center justify-center text-stone-300 dark:text-stone-700 cursor-not-allowed`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m8.25 4.5 7.5 7.5-7.5 7.5`})})})]})}function V(){let e=Number(new URLSearchParams(window.location.search).get(`page`))||1,t=A.sidebar.postsPerPage,{totalPages:n}=ro(e,t);return(0,j.jsx)(`main`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10`,children:(0,j.jsxs)(`div`,{className:`flex flex-col-reverse lg:flex-row gap-8`,children:[(0,j.jsxs)(`section`,{className:`flex-1 min-w-0 flex flex-col gap-6`,children:[(0,j.jsx)(xo,{page:e,perPage:t}),(0,j.jsx)(So,{currentPage:e,totalPages:n,basePath:`/`})]}),(0,j.jsx)(`aside`,{className:`w-full lg:w-72 lg:shrink-0`,children:(0,j.jsx)(`div`,{className:`lg:sticky lg:top-24 lg:self-start flex flex-col gap-6`,children:(0,j.jsx)(fo,{})})})]})})}function Co(){return(0,j.jsxs)(`p`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:[`© `,new Date().getFullYear(),` `,A.author.name,`. `,M.footer.allRightsReserved]})}function wo(){return(0,j.jsxs)(`a`,{href:A.footer.poweredByUrl,target:`_blank`,rel:`noopener noreferrer`,className:`text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors`,children:[M.footer.poweredByPrefix,` `,A.footer.poweredBy]})}var To=[{label:`GitHub`,href:A.author.github,icon:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z`})})},{label:`이메일`,href:`mailto:${A.author.email}`,icon:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z`})})}];function Eo(){return(0,j.jsx)(`div`,{className:`flex items-center gap-2`,children:To.map(({label:e,href:t,icon:n})=>(0,j.jsx)(`a`,{href:t,"aria-label":e,target:t.startsWith(`http`)?`_blank`:void 0,rel:t.startsWith(`http`)?`noopener noreferrer`:void 0,className:`w-8 h-8 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors`,children:n},e))})}function Do(){return(0,j.jsxs)(`a`,{href:A.rss.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`RSS 피드 구독`,className:`flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors group`,children:[(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-3.5 h-3.5`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z`})}),(0,j.jsx)(`span`,{className:`hidden sm:inline`,children:`RSS`})]})}function Oo(){return(0,j.jsx)(`footer`,{className:`mt-16 border-t border-stone-100 dark:border-stone-800 transition-colors duration-300`,children:(0,j.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4`,children:[(0,j.jsx)(Co,{}),(0,j.jsxs)(`div`,{className:`flex items-center gap-4 text-stone-400 dark:text-stone-500`,children:[(0,j.jsx)(Eo,{}),(0,j.jsx)(`span`,{className:`w-px h-4 bg-stone-200 dark:bg-stone-700`,"aria-hidden":`true`}),(0,j.jsx)(Do,{}),(0,j.jsx)(`span`,{className:`w-px h-4 bg-stone-200 dark:bg-stone-700`,"aria-hidden":`true`}),(0,j.jsx)(wo,{})]})]})})}function ko(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=()=>t(window.scrollY>300);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,j.jsx)(`button`,{onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),"aria-label":M.scrollToTop,className:`fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-brown-500 dark:bg-brown-400 text-white shadow-md transition-all duration-200
        ${e?`opacity-100 translate-y-0 pointer-events-auto`:`opacity-0 translate-y-2 pointer-events-none`}`,children:(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18`})})})}function Ao(){let[e,t]=(0,_.useState)(0);return(0,_.useEffect)(()=>{let e=()=>{let e=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight;t(n>0?Math.round(e/n*100):0)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,j.jsx)(`div`,{className:`fixed top-0 left-0 right-0 h-0.5 z-50 bg-transparent`,role:`progressbar`,"aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,"aria-label":M.progressBar,children:(0,j.jsx)(`div`,{className:`h-full bg-brown-500 transition-[width] duration-100 ease-out`,style:{width:`${e}%`}})})}function jo(){return Xn({}),(0,j.jsxs)(`div`,{className:`min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300`,children:[(0,j.jsx)(Ao,{}),(0,j.jsx)(nr,{}),(0,j.jsx)(V,{}),(0,j.jsx)(Oo,{}),(0,j.jsx)(ko,{})]})}function H({children:e}){return(0,j.jsxs)(`div`,{className:`min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300`,children:[(0,j.jsx)(Ao,{}),(0,j.jsx)(nr,{}),(0,j.jsx)(`main`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10`,children:e}),(0,j.jsx)(Oo,{}),(0,j.jsx)(ko,{})]})}function Mo(){return Xn({title:`포스트`}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`max-w-3xl mx-auto flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,j.jsx)(`h1`,{className:`text-2xl font-semibold text-stone-900 dark:text-white`,children:`포스트`}),(0,j.jsxs)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:[Qa.length,M.category.postCount]})]}),Qa.length===0?(0,j.jsx)(`div`,{className:`flex flex-col items-center justify-center py-20 text-stone-400 dark:text-stone-500 gap-2`,children:(0,j.jsx)(`p`,{className:`text-sm`,children:M.post.empty})}):(0,j.jsx)(`div`,{className:`flex flex-col gap-4`,children:Qa.map(e=>(0,j.jsx)(bo,{post:e},e.slug))})]})})}function No({prev:e,next:t,label:n}){return!e&&!t?null:(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsx)(`p`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase`,children:n}),(0,j.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,j.jsx)(`div`,{children:e?(0,j.jsxs)(k,{to:`/posts/${e.slug}`,className:`flex flex-col gap-0.5 group`,children:[(0,j.jsx)(`span`,{className:`text-xs text-stone-400 dark:text-stone-500`,children:`← 이전`}),(0,j.jsx)(`span`,{className:`text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors line-clamp-2 leading-snug`,children:e.title})]}):(0,j.jsx)(`div`,{})}),(0,j.jsx)(`div`,{className:`text-right`,children:t?(0,j.jsxs)(k,{to:`/posts/${t.slug}`,className:`flex flex-col gap-0.5 items-end group`,children:[(0,j.jsx)(`span`,{className:`text-xs text-stone-400 dark:text-stone-500`,children:`다음 →`}),(0,j.jsx)(`span`,{className:`text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors line-clamp-2 leading-snug`,children:t.title})]}):(0,j.jsx)(`div`,{})})]})]})}function Po({slug:e,category:t}){let n=Qa.findIndex(t=>t.slug===e),r=Qa[n+1]??null,i=Qa[n-1]??null,a=Qa.filter(e=>e.category===t),o=a.findIndex(t=>t.slug===e),s=a[o+1]??null,c=a[o-1]??null;return(0,j.jsxs)(`div`,{className:`mt-12 pt-6 border-t border-stone-100 dark:border-stone-800 flex flex-col gap-6`,children:[(s||c)&&(s?.slug!==r?.slug||c?.slug!==i?.slug)&&(0,j.jsx)(No,{prev:s,next:c,label:`${t} 카테고리`}),(0,j.jsx)(No,{prev:r,next:i,label:`전체 포스트`})]})}function Fo(){let{slug:e}=gt(),t=$a(e);return Xn({title:t?.title,description:t?.excerpt}),(0,_.useEffect)(()=>{if(!t)return;let e=[],n=setTimeout(()=>{document.querySelectorAll(`article pre`).forEach(t=>{if(t.querySelector(`.copy-btn`))return;let n=document.createElement(`button`);n.className=`copy-btn absolute top-2 right-2 text-xs px-2 py-1 rounded bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors`,n.textContent=`복사`,t.style.position=`relative`,t.appendChild(n);let r=()=>{let e=t.querySelector(`code`)?.innerText??t.innerText;navigator.clipboard.writeText(e).then(()=>{n.textContent=`완료 ✓`,setTimeout(()=>{n.textContent=`복사`},1500)})};n.addEventListener(`click`,r),e.push(()=>n.removeEventListener(`click`,r))})},0);return()=>{clearTimeout(n),e.forEach(e=>e())}},[t]),t?(0,j.jsx)(H,{children:(0,j.jsxs)(`article`,{className:`max-w-3xl mx-auto`,children:[(0,j.jsxs)(`header`,{className:`mb-8 pb-8 border-b border-stone-100 dark:border-stone-800`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2 mb-3 flex-wrap`,children:[(0,j.jsx)(ho,{category:t.category}),(0,j.jsx)(`span`,{className:`text-stone-300 dark:text-stone-600 text-xs`,"aria-hidden":`true`,children:`·`}),(0,j.jsx)(z,{date:t.date})]}),(0,j.jsx)(`h1`,{className:`text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white leading-snug mb-4`,children:t.title}),(0,j.jsx)(B,{tags:t.tags})]}),(0,j.jsx)(`div`,{className:`prose prose-stone dark:prose-invert max-w-none
            prose-headings:font-semibold
            prose-a:text-brown-500 dark:prose-a:text-brown-300 prose-a:no-underline hover:prose-a:underline
            prose-code:text-brown-600 dark:prose-code:text-brown-300
            prose-pre:bg-stone-50 dark:prose-pre:bg-stone-900
            prose-blockquote:border-brown-300 dark:prose-blockquote:border-brown-600`,dangerouslySetInnerHTML:{__html:t.html}}),(0,j.jsx)(Po,{slug:t.slug,category:t.category}),(0,j.jsx)(`div`,{className:`mt-6`,children:(0,j.jsx)(k,{to:`/`,className:`text-sm text-brown-500 dark:text-brown-300 hover:underline underline-offset-2`,children:M.post.backToList})})]})}):(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-20 gap-4`,children:[(0,j.jsx)(`p`,{className:`text-lg font-medium text-stone-900 dark:text-white`,children:M.post.notFound}),(0,j.jsx)(k,{to:`/`,className:`text-sm text-brown-500 hover:underline underline-offset-2`,children:M.notFound.backToHome})]})})}function Io(){let e=eo();return Xn({title:`카테고리`}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`max-w-3xl mx-auto flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,j.jsx)(`h1`,{className:`text-2xl font-semibold text-stone-900 dark:text-white`,children:`카테고리`}),(0,j.jsxs)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:[e.length,`개`]})]}),(0,j.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3`,children:e.map(({name:e,count:t})=>(0,j.jsxs)(k,{to:`/categories/${e}`,className:`flex items-center justify-between p-4 rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-brown-300 dark:hover:border-brown-600 hover:shadow-sm transition-all duration-200 group`,children:[(0,j.jsx)(`span`,{className:`font-medium text-stone-800 dark:text-stone-200 group-hover:text-brown-600 dark:group-hover:text-brown-300 transition-colors`,children:e}),(0,j.jsxs)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500 tabular-nums`,children:[t,M.category.postCount]})]},e))})]})})}function Lo(){let{name:e}=gt(),t=Qa.filter(t=>t.category===e);return Xn({title:e}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,j.jsx)(k,{to:`/`,className:`text-sm text-stone-400 hover:text-brown-500 transition-colors`,children:M.breadcrumb.home}),(0,j.jsx)(`span`,{className:`text-stone-300 dark:text-stone-600 text-sm`,children:`/`}),(0,j.jsx)(`span`,{className:`text-sm text-stone-500 dark:text-stone-400`,children:M.breadcrumb.category}),(0,j.jsx)(`span`,{className:`text-stone-300 dark:text-stone-600 text-sm`,children:`/`}),(0,j.jsx)(`span`,{className:`text-sm font-medium text-brown-500 dark:text-brown-300`,children:e})]}),(0,j.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,j.jsx)(`h1`,{className:`text-2xl font-semibold text-stone-900 dark:text-white`,children:e}),(0,j.jsxs)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:[t.length,M.category.postCount]})]}),t.length===0?(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-20 text-stone-400 gap-2`,children:[(0,j.jsx)(`p`,{className:`text-sm`,children:M.category.empty}),(0,j.jsx)(k,{to:`/`,className:`text-sm text-brown-500 hover:underline underline-offset-2`,children:M.notFound.backToHome})]}):(0,j.jsx)(`div`,{className:`flex flex-col gap-4`,children:t.map(e=>(0,j.jsx)(bo,{post:e},e.slug))})]})})}function Ro(e,t,n){if(n===t)return`text-sm`;let r=(e-t)/(n-t);return r>.66?`text-lg font-medium`:r>.33?`text-base`:`text-sm`}function zo(){let e=to(),t=e.map(e=>e.count),n=Math.min(...t),r=Math.max(...t);return Xn({title:`태그`}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`max-w-3xl mx-auto flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,j.jsx)(`h1`,{className:`text-2xl font-semibold text-stone-900 dark:text-white`,children:`태그`}),(0,j.jsxs)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:[e.length,`개`]})]}),(0,j.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:e.map(({name:e,count:t})=>(0,j.jsxs)(k,{to:`/tags/${e}`,className:`${Ro(t,n,r)} flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-brown-300 dark:hover:border-brown-600 hover:text-brown-600 dark:hover:text-brown-300 transition-colors`,children:[(0,j.jsxs)(`span`,{children:[`#`,e]}),(0,j.jsxs)(`span`,{className:`text-xs text-stone-400 dark:text-stone-500`,children:[`(`,t,`)`]})]},e))})]})})}function Bo(){let{name:e}=gt(),t=Qa.filter(t=>t.tags.includes(e));return Xn({title:`#${e}`}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,j.jsx)(k,{to:`/`,className:`text-sm text-stone-400 hover:text-brown-500 transition-colors`,children:M.breadcrumb.home}),(0,j.jsx)(`span`,{className:`text-stone-300 dark:text-stone-600 text-sm`,children:`/`}),(0,j.jsx)(`span`,{className:`text-sm text-stone-500 dark:text-stone-400`,children:M.breadcrumb.tag}),(0,j.jsx)(`span`,{className:`text-stone-300 dark:text-stone-600 text-sm`,children:`/`}),(0,j.jsxs)(`span`,{className:`text-sm font-medium text-brown-500 dark:text-brown-300`,children:[`#`,e]})]}),(0,j.jsxs)(`div`,{className:`flex items-baseline gap-3`,children:[(0,j.jsxs)(`h1`,{className:`text-2xl font-semibold text-stone-900 dark:text-white`,children:[`#`,e]}),(0,j.jsxs)(`span`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:[t.length,M.tag.postCount]})]}),t.length===0?(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-20 text-stone-400 gap-2`,children:[(0,j.jsx)(`p`,{className:`text-sm`,children:M.tag.empty}),(0,j.jsx)(k,{to:`/`,className:`text-sm text-brown-500 hover:underline underline-offset-2`,children:M.notFound.backToHome})]}):(0,j.jsx)(`div`,{className:`flex flex-col gap-4`,children:t.map(e=>(0,j.jsx)(bo,{post:e},e.slug))})]})})}var Vo={bio1:`호모 사피엔스 사피엔스, 우리은하 태양계에 거주 중.`,bio2:[`호모 사피엔스 사피엔스, 우리은하 태양계에 거주 중.`],skills:[{category:`Frontend`,items:[`React`,`Tailwind CSS`]},{category:`Backend`,items:[`Java`,`Spring Boot`,`PHP`]},{category:`DB`,items:[`MariaDB`,`MySQL`]},{category:`Tools`,items:[`Git`,`GitHub Actions`,`Figma`]}],links:{sectionLabel:`링크`,backToBlog:`돌아가기`}};function Ho(){let{name:e,github:t,email:n,initial:r}=A.author;return Xn({title:`소개`,description:A.description}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`max-w-2xl mx-auto flex flex-col gap-10`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,j.jsx)(`div`,{className:`w-20 h-20 rounded-full bg-brown-50 dark:bg-brown-800 flex items-center justify-center ring-2 ring-stone-100 dark:ring-stone-800 shrink-0`,children:(0,j.jsx)(`span`,{className:`text-3xl font-semibold text-brown-500 dark:text-brown-300`,"aria-hidden":`true`,children:r})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h1`,{className:`text-2xl font-semibold text-stone-900 dark:text-white`,children:e}),(0,j.jsx)(`p`,{className:`text-stone-500 dark:text-stone-400 mt-1`,children:A.description})]})]}),(0,j.jsx)(`div`,{className:`flex flex-col gap-3 text-stone-600 dark:text-stone-400 leading-relaxed text-sm`,children:(0,j.jsx)(`p`,{children:(0,j.jsx)(`strong`,{className:`text-stone-900 dark:text-white font-medium`,children:Vo.bio1})})}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase`,children:`기술 스택`}),(0,j.jsx)(`div`,{className:`flex flex-col gap-3`,children:Vo.skills.map(({category:e,items:t})=>(0,j.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,j.jsx)(`span`,{className:`text-xs font-medium text-brown-500 dark:text-brown-300 w-20 shrink-0 pt-0.5`,children:e}),(0,j.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:t.map(e=>(0,j.jsx)(`span`,{className:`text-xs px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400`,children:e},e))})]},e))})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,j.jsx)(`h2`,{className:`text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase`,children:Vo.links.sectionLabel}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsxs)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors w-fit`,children:[(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z`})}),`GitHub`]}),(0,j.jsxs)(`a`,{href:`mailto:${n}`,className:`flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors w-fit`,children:[(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-4 h-4`,"aria-hidden":`true`,children:(0,j.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z`})}),n]})]})]}),(0,j.jsx)(`div`,{className:`pt-4 border-t border-stone-100 dark:border-stone-800`,children:(0,j.jsx)(k,{to:`/`,className:`text-sm text-brown-500 dark:text-brown-300 hover:underline underline-offset-2`,children:Vo.links.backToBlog})})]})})}function Uo(){return Xn({title:M.notFound.title}),(0,j.jsx)(H,{children:(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-28 gap-4 text-center`,children:[(0,j.jsx)(`p`,{className:`text-7xl font-semibold text-brown-100 dark:text-brown-900 select-none`,children:M.notFound.code}),(0,j.jsx)(`h1`,{className:`text-xl font-semibold text-stone-900 dark:text-white`,children:M.notFound.title}),(0,j.jsx)(`p`,{className:`text-sm text-stone-400 dark:text-stone-500`,children:M.notFound.desc}),(0,j.jsx)(k,{to:`/`,className:`mt-2 text-sm text-brown-500 dark:text-brown-300 hover:underline underline-offset-2`,children:M.notFound.backToHome})]})})}function Wo(){return(0,j.jsx)(An,{children:(0,j.jsxs)(Ht,{children:[(0,j.jsx)(Bt,{path:`/`,element:(0,j.jsx)(jo,{})}),(0,j.jsx)(Bt,{path:`/posts`,element:(0,j.jsx)(Mo,{})}),(0,j.jsx)(Bt,{path:`/posts/:slug`,element:(0,j.jsx)(Fo,{})}),(0,j.jsx)(Bt,{path:`/categories`,element:(0,j.jsx)(Io,{})}),(0,j.jsx)(Bt,{path:`/categories/:name`,element:(0,j.jsx)(Lo,{})}),(0,j.jsx)(Bt,{path:`/tags`,element:(0,j.jsx)(zo,{})}),(0,j.jsx)(Bt,{path:`/tags/:name`,element:(0,j.jsx)(Bo,{})}),(0,j.jsx)(Bt,{path:`/about`,element:(0,j.jsx)(Ho,{})}),(0,j.jsx)(Bt,{path:`*`,element:(0,j.jsx)(Uo,{})})]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(_.StrictMode,{children:(0,j.jsx)(Wo,{})}));