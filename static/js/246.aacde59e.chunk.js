"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{6705:function(e,A,t){t.d(A,{Bt:function(){return d},Hq:function(){return l},Mc:function(){return u},Tg:function(){return o},y:function(){return f}});var r=t(5861),n=t(7757),a=t.n(n),c=t(4569),s=t.n(c),i="ce38b16e348c5ef06da5a87ddf3b3666",o=function(){var e=(0,r.Z)(a().mark((function e(){var A;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i)).catch((function(e){return console.log(e.message)}));case 2:return A=e.sent,e.abrupt("return",A.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(A){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(A,"?api_key=").concat(i)).catch((function(e){return console.log(e.message)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(A){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(A,"&page=1&include_adult=false")).catch((function(e){return console.log(e.message)}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(A){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(A,"/credits?api_key=").concat(i,"&language=en-US")).catch((function(e){return console.log(e.message)}));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(A){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(A,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).catch((function(e){return console.log(e.message)}));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},1246:function(e,A,t){function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function n(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?n(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}t.r(A),t.d(A,{default:function(){return y}});var c=t(885),s=t(7689),i=t(2791),o=t(6731),u=t(6705),l="MovieDetails_wrapper__YMWLn",f="MovieDetails_filmWrapper__T1Xqz",d="MovieDetails_linkList__767FF",p="MovieDetails_backBtn__rLQ3F",g="MovieDetails_placeholder__hh7lg",h=t(1809),w=t(2042),m=t(184),y=function(){var e,A=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,c.Z)(t,2),n=r[0],y=r[1],j=(0,i.useState)(!1),v=(0,c.Z)(j,2),x=v[0],k=v[1],B=(0,s.TH)().state,b=null!==(e=null===B||void 0===B?void 0:B.from)&&void 0!==e?e:"/";(0,i.useEffect)((function(){try{(0,u.Mc)(A).then((function(e){e&&(k(!0),y(null===e||void 0===e?void 0:e.data))}))}catch(e){console.log(e),y(null)}}),[A]);var W=n.genres,E=n.poster_path,V=n.title,O=n.vote_average,I=n.overview,H=n.release_date;return x?(0,m.jsxs)("main",{className:l,children:[(0,m.jsx)(o.rU,{to:b,className:p,children:"Back"}),(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("img",{src:E?"https://image.tmdb.org/t/p/original"+E:h,alt:"poster",width:300}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h1",{children:[V," (",H.split("-")[0],")"]}),(0,m.jsxs)("p",{children:["User score: ",O]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:I}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{children:W?W.map((function(e){var A=e.id,t=e.name;return(0,m.jsx)("li",{children:t},A)})):"Sorry, no genres info"})]})]}),(0,m.jsxs)("section",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{className:d,children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"cast",state:a({},B),children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"reviews",state:a({},B),children:"Reviews"})})]})]}),(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(s.j3,{})})]}):(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)(o.rU,{to:b,className:p,children:"Back"}),(0,m.jsx)("div",{children:"Sorry, no info"}),(0,m.jsx)("img",{src:w,alt:"placeholder",width:500})]})}},2042:function(e,A,t){e.exports=t.p+"static/media/no-info.8c6a183481a5e89e3a42.jpg"},1809:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=246.aacde59e.chunk.js.map