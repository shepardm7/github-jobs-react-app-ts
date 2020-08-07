(this["webpackJsonpgithub-jobs-app"]=this["webpackJsonpgithub-jobs-app"]||[]).push([[0],{159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),o=t.n(c),l=(t(58),t(22)),i=t(11),s=t(13),m=t(14),u=t.n(m),p="".concat("","https://jobs.github.com/positions.json/");function d(e,a){switch(a.type){case"make-request":return{loading:!0,jobs:[],hasNextPage:!1};case"get-data":return Object(i.a)({},e,{loading:!1,jobs:a.payload.jobs});case"error":return Object(i.a)({},e,{loading:!1,error:a.payload.error,jobs:[]});case"update-has-next-page":return Object(i.a)({},e,{hasNextPage:a.payload.hasNextPage});default:return e}}var g=t(31),E=t.n(g),b=t(19),h=t(32),f=t(50),y=t(52);function v(e){var a=e.job,t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=c[0],l=c[1];return r.a.createElement(b.a,{className:"mb-3"},r.a.createElement(b.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(b.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(b.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(h.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(h.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(E.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",src:a.company_logo||void 0,alt:a.company})),r.a.createElement(b.a.Text,null,r.a.createElement(f.a,{onClick:function(){return l((function(e){return!e}))},variant:"primary"},o?"Hide Details":"View Details")),r.a.createElement(y.a,{in:o},r.a.createElement("div",{className:"mt-4"},r.a.createElement(E.a,{source:a.description})))))}var j=t(10);function k(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(j.a,null,1!==a&&r.a.createElement(j.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(j.a.Item,{onClick:function(){return c(1)}},"1"),a>2&&r.a.createElement(j.a.Ellipsis,null),a>2&&r.a.createElement(j.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(j.a.Item,{active:!0},a),n&&r.a.createElement(j.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(j.a.Next,{onClick:function(){return c(1)}}))}var N=t(8),x=t(18);function w(e){var a=e.params,t=e.onParamChange;return r.a.createElement(N.a,{className:"mb-4"},r.a.createElement(N.a.Row,{className:"align-items-end"},r.a.createElement(N.a.Group,{as:x.a},r.a.createElement(N.a.Label,null,"Description"),r.a.createElement(N.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(N.a.Group,{as:x.a},r.a.createElement(N.a.Label,null,"Location"),r.a.createElement(N.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(N.a.Group,{as:x.a,xs:"auto",className:"ml-2"},r.a.createElement(N.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var C=t(51);var O=function(){var e=Object(n.useState)({description:"",location:"",full_time:!1}),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(1),m=Object(s.a)(o,2),g=m[0],E=m[1],b=function(e,a){var t=Object(n.useReducer)(d,{jobs:[],loading:!0,hasNextPage:!1}),r=Object(s.a)(t,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source(),n=u.a.CancelToken.source();return o({type:"make-request"}),u.a.get(p,{cancelToken:t.token,params:Object(i.a)({markdown:!0,page:e},a)}).then((function(e){o({type:"get-data",payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||o({type:"error",payload:{error:e}})})),u.a.get(p,{cancelToken:n.token,params:Object(i.a)({markdown:!0,page:e+1},a)}).then((function(e){o({type:"update-has-next-page",payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||o({type:"error",payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[a,e]),c}(g,t),h=b.jobs,f=b.loading,y=b.error,j=b.hasNextPage;return r.a.createElement(C.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"GitHub Jobs"),r.a.createElement(w,{params:t,onParamChange:function(e){var a=e.target,t=a.name,n=a.value;E(1),c((function(e){return Object(i.a)({},e,Object(l.a)({},t,n))}))}}),r.a.createElement(k,{page:g,setPage:E,hasNextPage:j}),f&&r.a.createElement("h1",null,"Loading..."),y&&r.a.createElement("h1",null,"Error. Try Refreshing."),h.map((function(e){return r.a.createElement(v,{key:e.id,job:e})})),r.a.createElement(k,{page:g,setPage:E,hasNextPage:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,a,t){e.exports=t(159)},58:function(e,a,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.6baa27e1.chunk.js.map