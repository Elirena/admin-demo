"use strict";var precacheConfig=[["/admin-demo/index.html","a7f824276275ee64d3820194bca77453"],["/admin-demo/static/css/main.29853dd6.css","13d3235126d73e4d71850c469f6a84fe"],["/admin-demo/static/js/main.fc6e1ae3.js","af6ceb4b6dd09e020f69445ea722633f"],["/admin-demo/static/media/Flat-UI-Icons.659ea053.ttf","659ea053919edb12c29337a1c7903ef9"],["/admin-demo/static/media/Flat-UI-Icons.b05768e8.eot","b05768e869e391bcb12aa4f116af671f"],["/admin-demo/static/media/Flat-UI-Icons.c8a468bc.woff","c8a468bcba1b5575598a414e6cf4dfb6"],["/admin-demo/static/media/Flat-UI-Icons.cda8361a.svg","cda8361a23287e20042b2a217bd6681a"],["/admin-demo/static/media/imac-2x.740d287f.png","740d287ff06eb7932bd06585a5a6ab76"],["/admin-demo/static/media/lato-black-webfont.5407de99.eot","5407de996a439dd4470d0a1e98ecd396"],["/admin-demo/static/media/lato-black-webfont.5f46f9c0.ttf","5f46f9c0e2c988893b80b2717d764dd0"],["/admin-demo/static/media/lato-black-webfont.951e81fd.woff","951e81fd509ea2b6076cbc0033171215"],["/admin-demo/static/media/lato-black-webfont.ce29ce79.svg","ce29ce794688d46375a3f29a1329b9bc"],["/admin-demo/static/media/lato-bold-webfont.18f3bc8b.svg","18f3bc8b51fe687d41324fea6ff8c955"],["/admin-demo/static/media/lato-bold-webfont.2d4919ce.eot","2d4919ce2e98d98674657605ceef758b"],["/admin-demo/static/media/lato-bold-webfont.796a7724.woff","796a7724727a6bffefce3b5655f06b09"],["/admin-demo/static/media/lato-bold-webfont.eaa09e15.ttf","eaa09e151bae74b7370a99a460962d93"],["/admin-demo/static/media/lato-bolditalic-webfont.1ea78263.woff","1ea782637e4efcf4c7064a70f8325926"],["/admin-demo/static/media/lato-bolditalic-webfont.81dcf1c1.svg","81dcf1c13b499730ee0f6cba3b1c01ed"],["/admin-demo/static/media/lato-bolditalic-webfont.8a6af318.eot","8a6af3182a48e9e713931c04e6c656e8"],["/admin-demo/static/media/lato-bolditalic-webfont.d7345403.ttf","d7345403c917d48e835afe1186ac85fd"],["/admin-demo/static/media/lato-italic-webfont.0bac30a2.svg","0bac30a241cbb0b5ae21fad0913afe70"],["/admin-demo/static/media/lato-italic-webfont.3863ccce.woff","3863ccceaaed0b457fa1480df4704e63"],["/admin-demo/static/media/lato-italic-webfont.aadadb6c.ttf","aadadb6c2547baa7d95dc820b621a020"],["/admin-demo/static/media/lato-italic-webfont.cce53fc2.eot","cce53fc2eb9e68832563771801e3b84b"],["/admin-demo/static/media/lato-light-webfont.0f4346bc.svg","0f4346bce5b4bb4dd3c77a94e6913169"],["/admin-demo/static/media/lato-light-webfont.1b75c6e4.eot","1b75c6e45bfc6d5659b119723a95fb0c"],["/admin-demo/static/media/lato-light-webfont.288eb21c.woff","288eb21cf19a4f5eab19c1ccd3cc21b9"],["/admin-demo/static/media/lato-light-webfont.f652f545.ttf","f652f5451f853d5b29949248ad7613e9"],["/admin-demo/static/media/lato-regular-webfont.27faf192.woff","27faf19206c7a20e8126bedc37c95458"],["/admin-demo/static/media/lato-regular-webfont.544d9697.ttf","544d96974bf484f5a128a29d20a0f279"],["/admin-demo/static/media/lato-regular-webfont.77f286e4.eot","77f286e48a458105b9deb4433d0844d9"],["/admin-demo/static/media/lato-regular-webfont.ff97d89c.svg","ff97d89c3b44aafe76f144412e509e68"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/admin-demo/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});