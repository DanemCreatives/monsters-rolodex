(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),o=(n(9),n(3)),i=(n(10),n(11),n(12),n(0));var u=function(e){var t=e.monster;return Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:"monster"}),Object(i.jsx)("h2",{children:t.name}),Object(i.jsx)("p",{children:t.email})]})};var j=function(e){var t=e.monsters;return Object(i.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(i.jsx)(u,{monster:e},e.id)}))})};n(14);var d=function(e){var t=e.changeHandler,n=e.placeholder;return Object(i.jsx)("input",{className:"search",type:"search",onChange:t,placeholder:n})};var h=function(){var e=Object(r.useState)({data:[]}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)({search:""}),a=Object(o.a)(s,2),u=a[0],h=a[1],l=n.data.filter((function(e){return e.name.toLowerCase().includes(u.search.toLowerCase())}));return Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c({data:e})}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Monsters Rolodex"}),Object(i.jsx)(d,{changeHandler:function(e){return h({search:e.target.value})},placeholder:"Enter Monster..."}),Object(i.jsx)(j,{monsters:l})]})};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.cf94a95f.chunk.js.map