"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[750],{4750:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(8152),u=n(2791),a=n(7335),s=n(6871),c="ReviewsMarkup_list__Rb+mW",o="ReviewsMarkup_item__mkDSj",i="ReviewsMarkup_author__SepET",p="ReviewsMarkup_content__U6mu+",l=n(184);function f(e){var t=e.reviews;return null!==t&&(0,l.jsx)("ul",{className:c,children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,l.jsxs)("li",{className:o,children:[(0,l.jsx)("p",{className:i,children:n}),(0,l.jsx)("p",{className:p,children:r})]},t)}))})}function h(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1],o=(0,s.UO)().movieId;return(0,u.useEffect)((function(){(0,a.tx)(o).then((function(e){return console.log(e),c(e),e}))}),[o]),console.log(n),n.length>0?(0,l.jsx)(f,{reviews:n}):(0,l.jsx)("div",{className:"title-wrapper",children:(0,l.jsx)("p",{className:"title",children:"There are no reviews in this movie."})})}},7335:function(e,t,n){n.d(t,{JN:function(){return p},TP:function(){return f},gH:function(){return w},tx:function(){return d},zv:function(){return v}});var r=n(5861),u=n(7757),a=n.n(u),s=n(4569),c=n.n(s),o="1b50ba0e0b99203af5e26bdcee6d2298",i="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get(i+"movie/popular",{params:{api_key:o}}).catch((function(e){return console.log(e),"No results"}));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c().get(i+"/movie/".concat(t),{params:{api_key:o}}).catch((function(e){return console.log(e),"No results"}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c().get(i+"/movie/".concat(t,"/credits"),{params:{api_key:o}}).catch((function(){return function(e){return console.log(e),"No results"}}));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c().get(i+"/movie/".concat(t,"/reviews"),{params:{api_key:o}}).catch((function(){return function(e){return console.log(e),"No results"}}));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,c().get(i+"search/movie",{params:{api_key:o,query:t}}).catch((function(){return function(e){return console.log(e),"No results"}}));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=750.555d2aa6.chunk.js.map