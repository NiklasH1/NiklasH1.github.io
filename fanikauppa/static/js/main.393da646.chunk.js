(this.webpackJsonpfanikauppa=this.webpackJsonpfanikauppa||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),i=c(6),s=c.n(i),j=(c(11),c(2)),u=c(3),o=(c(5),[{id:1,product:"Makkara",hinta:2.5,counter:0,url:"https://i.imgur.com/J4XHQxZ.png"},{id:2,product:"Televisio",hinta:342.5,counter:0,url:"https://cdn.verk.net/images/2/2_520457-2288x1683.jpeg"},{id:3,product:"Puhelin",hinta:252.5,counter:0,url:"https://i.imgur.com/ZJWamSn.png"}]),d=c(0),a=function(t){var e=t.product,c=t.lisaaostos,n=t.poistaostos,r=t.cart;return Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{id:"tiedot",children:[Object(d.jsx)("td",{children:e.product}),Object(d.jsxs)("td",{children:[e.hinta,"\u20ac"]}),Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.url,alt:"kuva tuotteesta"})}),!r&&Object(d.jsx)("td",{children:Object(d.jsxs)("p",{style:{paddingRight:5},children:[Object(d.jsx)("button",{onClick:function(){return c(e.id)},children:"+"})," ",e.counter]})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return n(e.id)},children:"-"})})]})})},b=function(t){var e=t.products,c=t.setProducts,n=function(t){var n=e.map((function(e){return t===e.id?Object(j.a)(Object(j.a)({},e),{},{counter:e.counter+1}):e}));c(n)},r=function(t){var n=e.map((function(e){return t===e.id&&e.counter>0?Object(j.a)(Object(j.a)({},e),{},{counter:e.counter-1}):e}));c(n)};return Object(d.jsx)("div",{children:e.map((function(t){return Object(d.jsx)(a,{product:t,lisaaostos:n,poistaostos:r},t.id)}))})},l=function(t){var e=t.product;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:e.url,alt:"kuva tuotteesta"})}),Object(d.jsxs)("p",{children:[e.product," "]}),Object(d.jsx)("p",{id:"counter",children:e.counter})]})})},O=function(t){var e=t.products,c=t.setProducts,n=e.filter((function(t){return t.counter>0}));return Object(d.jsxs)("div",{className:"cart",children:[n.map((function(t){return Object(d.jsx)(l,{product:t},t.id)})),Object(d.jsxs)("p",{children:["Yhteens\xe4: ",e.map((function(t){return t.hinta*t.counter})).reduce((function(t,e){return Math.round(100*(t+e+Number.EPSILON))/100})),"\u20ac"]}),Object(d.jsx)("button",{onClick:function(){return function(){var t=e.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{counter:0})}));c(t)}()},children:"Tyhjenn\xe4"})]})};var p=function(){var t=Object(n.useState)(o),e=Object(u.a)(t,2),c=e[0],r=e[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),a=s[0],l=s[1],p=Object(n.useState)(!1),h=Object(u.a)(p,2),x=h[0],m=h[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),g=v[0],k=v[1],y=Object(n.useState)({name:"",address:""}),C=Object(u.a)(y,2),P=C[0],S=C[1],N=function(t,e){var c=Object(j.a)({},P);c[e]=t.target.value,S(c)},q=c.filter((function(t){return t.counter>0}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("p",{children:"Fanikauppa"}),Object(d.jsx)("img",{src:"https://i.imgur.com/j3owMWw.png",alt:"ostosk\xe4rry",onClick:function(){return l(!a)}})]}),Object(d.jsx)("div",{className:"Products",style:{width:350},children:Object(d.jsx)(b,{products:c,setProducts:r})}),a&&q.length>0?Object(d.jsxs)("div",{id:"ostoskori",children:[Object(d.jsx)("div",{id:"cartwrapper",children:Object(d.jsx)(O,{id:"cart",products:c,setProducts:r})}),q.length>0&&Object(d.jsx)("button",{onClick:function(){return m(!x)},children:"Checkout"})]}):a&&Object(d.jsx)("div",{id:"ostoskori",children:Object(d.jsx)("p",{children:"Ei tuotteita ostoskorissa"})}),x&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{id:"form",style:{borderRadius:10},children:[Object(d.jsxs)("label",{children:["Name:",Object(d.jsx)("input",{type:"text",name:"name",value:P.name,onChange:function(t){return N(t,"name")},required:!0}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("label",{children:["Email:",Object(d.jsx)("input",{type:"text",email:"email",required:!0}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("label",{children:["Phone:",Object(d.jsx)("input",{type:"text",phone:"phone",required:!0}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("label",{children:["Address:",Object(d.jsx)("input",{type:"text",address:"address",value:P.address,onChange:function(t){return N(t,"address")},required:!0}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("label",{children:["Postcode:",Object(d.jsx)("input",{type:"text",postcode:"postcode",required:!0}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("label",{children:["Postal district:",Object(d.jsx)("input",{type:"text",district:"district",required:!0}),Object(d.jsx)("br",{})]})]}),Object(d.jsx)("button",{style:{position:"relative",marginRight:"5%"},onClick:function(){return k(!g)},children:"Confirm order"})]}),g&&Object(d.jsx)("div",{id:"modal"}),g&&Object(d.jsxs)("div",{id:"insidemodal",style:{borderRadius:10},children:[Object(d.jsxs)("p",{children:["Kiitos tilauksesta ",P.name,"!"]}),Object(d.jsxs)("p",{children:["Tilauksesi: ",Object(d.jsx)(O,{id:"cart",products:c})]}),Object(d.jsx)("button",{style:{marginBottom:10},onClick:function(){return[k(!g),l(!a),m(!x)]},children:"Sulje tilaus"})]})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),r(t),i(t),s(t)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),h()},5:function(t,e,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.393da646.chunk.js.map