(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r=n(67),c=n(0),i=n.n(c),a=n(9),o=n.n(a),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},d=n(60),l=n.n(d),s=(n(96),n(97),n(53)),j=n(31),m=n(61),p={refreshIDLength:10,shopNames:["Shop1","Shop2","Shop3","Shop4"],products:["Apple","Orange","Grapes","Mango"],themes:["light","dark"],tableHead:["ShopName","Product","Price"]},h=function(e){return e.reduce((function(e,t){return e.price<t.price?e:t}),{})},f=function(e){return e.reduce((function(e,t){return e.price>t.price?e:t}),{})},b={addItemAndPrice:function(e,t,n,r){return e.concat(function(e,t,n){return{id:Object(m.rndString)(p.refreshIDLength),product:e,price:parseFloat(t),shopName:n}}(t,n,r))},getItemCount:function(e){return e.length},getMin:h,getMax:f,getMinAndMax:function(e){return function(e){return Object(j.a)(new Set(e.map((function(e){return e.product}))))}(e).map((function(t){var n=e.filter((function(e){return e.product===t}));return{product:t,min:h(n),max:f(n)}}))},editItem:function(e,t,n,r,c){return e.map((function(e){return e.id===c.id?Object(s.a)(Object(s.a)({},e),{},{shopName:t,product:n,price:parseFloat(r)}):e}))},itemList:function(e,t,n){return e.filter((function(e){return"All"===t?e:e.shopName===t})).filter((function(e){return"All"===n?e:e.product===n}))}},x={increaseCount:function(e){var t=e.state,n=e.data;return{count:t.count+n}},addProduct:function(e){return{product:e.data}},addPrice:function(e){return{price:e.data}},addItemAndPrice:function(e){var t=e.state;return{price:"",item:b.addItemAndPrice(t.item,t.product,t.price,t.shopName)}},addShopName:function(e){return{shopName:e.data}},edit:function(e){var t=e.data;return{shopName:t.shopName,product:t.product,price:t.price,edit:t}},editItem:function(e){var t=e.state;return{price:"",edit:null,item:b.editItem(t.item,t.shopName,t.product,t.price,t.edit)}},filterShop:function(e){return{filterShop:e.data}},filterProduct:function(e){return{filterProduct:e.data}},themeSelect:function(e){return{theme:e.data}}},O={shopName:p.shopNames[0],product:p.products[0],price:"",item:[],edit:null,filterShop:"All",filterProduct:"All",theme:p.themes[0]},g={actions:x,config:p,seed:O},v={sayHai:function(){return console.log("Hi!")}},N=n(135),S=n(136),I=n(137),P=n(138),C=n(139),A=n(132),M=n(140),y=n(3),H=function(e){var t=e.id,n=e.product,r=e.price,c=e.shopName;return Object(y.jsxs)(A.a,{onClick:function(){return g.actions.edit(e)},children:[Object(y.jsx)(N.a,{align:"center",children:c}),Object(y.jsx)(N.a,{align:"center",children:n}),Object(y.jsx)(N.a,{align:"center",children:r})]},t)},L=function(e){return Object(y.jsx)(N.a,{align:"center",children:e},e)},k=function(){var e=g.state,t=e.item,n=e.filterShop,r=e.filterProduct,c=b.itemList(t,n,r);return Object(y.jsx)(S.a,{component:I.a,children:Object(y.jsxs)(P.a,{className:"items-table",children:[Object(y.jsx)(C.a,{children:Object(y.jsx)(A.a,{children:g.config.tableHead.map(L)})}),Object(y.jsx)(M.a,{children:c.map(H)})]})})},F=function(){return 0===b.getItemCount(g.state.item)?null:k()},w=n(145),E=n(154),T=n(141),D=n(155),z=n(150),B=function(e){return Object(y.jsx)(E.a,{value:e,children:e},e)},J=function(){var e=["All"].concat(Object(j.a)(g.config.products));return Object(y.jsxs)(T.a,{variant:"outlined",children:[Object(y.jsx)(D.a,{id:"demo-simple",children:"Product"}),Object(y.jsx)(z.a,{labelId:"demo-simple",id:"demo-simple-select-outlined",label:"product",value:g.state.filterProduct,onChange:function(e){return g.actions.filterProduct(e.target.value)},children:e.map(B)})]})},G=function(e){return Object(y.jsx)(E.a,{value:e,children:e},e)},q=function(){var e=["All"].concat(Object(j.a)(g.config.shopNames));return Object(y.jsxs)(T.a,{variant:"outlined",children:[Object(y.jsx)(D.a,{id:"demo-simple",children:"ShopName"}),Object(y.jsx)(z.a,{labelId:"demo-simple",id:"demo-simple-select-outlined",label:"Shop Name",value:g.state.filterShop,onChange:function(e){return g.actions.filterShop(e.target.value)},children:e.map(G)})]})},K=function(e){return Object(y.jsx)(w.a,{item:"true",xs:3,children:e},e)},Q=function(){var e=0===b.getItemCount(g.state.item),t=[q(),J()];return e?null:Object(y.jsx)(w.a,{container:"true",justifyContent:"center",children:t.map(K)})},R=function(e){return Object(y.jsx)(E.a,{value:e,children:e},e)},U=function(){return Object(y.jsxs)(T.a,{variant:"outlined",children:[Object(y.jsx)(D.a,{id:"demo-simple",children:"Theme"}),Object(y.jsx)(z.a,{labelId:"demo-simple",id:"demo-simple-select-outlined",label:"Theme",value:g.state.theme,onChange:function(e){return g.actions.themeSelect(e.target.value)},children:g.config.themes.map(R)})]})},V=n(151),W=function(e){return Object(y.jsx)(E.a,{value:e,children:e},e)},X=function(){return Object(y.jsxs)(T.a,{variant:"outlined",children:[Object(y.jsx)(D.a,{id:"demo-simple",children:"Product"}),Object(y.jsx)(z.a,{labelId:"demo-simple",id:"demo-simple-select-outlined",value:g.state.product,onChange:function(e){return g.actions.addProduct(e.target.value)},label:"product",children:g.config.products.map(W)})]})},Y=n(157),Z=function(){return Object(y.jsx)(Y.a,{id:"outlined-number",label:"Price",type:"number",value:g.state.price,onChange:function(e){return g.actions.addPrice(e.target.value)},variant:"outlined"})},$=function(e){return Object(y.jsx)(E.a,{value:e,children:e},e)},_=function(){return Object(y.jsxs)(T.a,{variant:"outlined",children:[Object(y.jsx)(D.a,{id:"demo-simple",children:"ShopName"}),Object(y.jsx)(z.a,{labelId:"demo-simple",id:"demo-simple-select-outlined",value:g.state.shopName,onChange:function(e){return g.actions.addShopName(e.target.value)},label:"Shop Name",children:g.config.shopNames.map($)})]})},ee=n(153),te=n(146),ne=n(147),re=function(){return Object(y.jsx)(ee.a,{title:"Add",children:Object(y.jsx)(te.a,{variant:"contained",color:"secondary",size:"large",disabled:""===g.state.price,onClick:g.actions.addItemAndPrice,endIcon:Object(y.jsx)(ne.a,{}),children:"Add"})})},ce=n(148),ie=function(){return Object(y.jsx)(ee.a,{title:"Edit",children:Object(y.jsx)(te.a,{variant:"outlined",color:"primary",size:"large",disabled:null===g.state.edit,onClick:g.actions.editItem,startIcon:Object(y.jsx)(ce.a,{}),children:"Edit"})})},ae=function(){return null===g.state.edit?re():ie()},oe=function(e){return Object(y.jsx)(w.a,{item:"true",xs:3,children:e},e)},ue=function(){var e=[_(),X(),Z(),ae()];return Object(y.jsx)(w.a,{container:"true",children:e.map(oe)})},de=function(e){return Object(y.jsxs)(V.a,{py:2,children:[" ",e]},e)},le=function(){var e=[ue(),F(),Q(),U()];return Object(y.jsx)(V.a,{id:"item-pane",height:"100vh",overflow:"auto",children:e.map(de)})},se=function(e){var t=e.product,n=e.min,r=e.max;return Object(y.jsxs)(A.a,{children:[Object(y.jsx)(N.a,{children:n.shopName}),Object(y.jsx)(N.a,{children:n.product}),Object(y.jsx)(N.a,{children:n.price}),Object(y.jsx)(N.a,{children:r.shopName}),Object(y.jsx)(N.a,{children:r.product}),Object(y.jsx)(N.a,{children:r.price})]},t)},je=function(){var e=g.state,t=e.item,n=e.filterShop,r=e.filterProduct,c=b.itemList(t,n,r),i=b.getMinAndMax(c);return Object(y.jsx)(M.a,{children:i.map(se)})},me=function(e){return Object(y.jsx)(N.a,{children:e},e)},pe=function(){return Object(y.jsx)(S.a,{component:I.a,children:Object(y.jsxs)(P.a,{className:"price-matrix-table",children:[Object(y.jsxs)(C.a,{children:[Object(y.jsxs)(A.a,{children:[Object(y.jsx)(N.a,{align:"center",colSpan:"3",children:"Minimum"}),Object(y.jsx)(N.a,{align:"center",colSpan:"3",children:"Maximum"})]}),Object(y.jsxs)(A.a,{children:[g.config.tableHead.map(me),g.config.tableHead.map(me)]})]}),je()]})})},he=function(){return 0===b.getItemCount(g.state.item)?null:pe()},fe=function(){return Object(y.jsxs)("div",{className:"price-matrix",children:[" ",he()," "]})},be=function(){return Object(c.useEffect)(v.sayHai,[]),Object(y.jsx)(V.a,{className:"App ".concat(g.state.theme),children:Object(y.jsxs)(w.a,{container:"true",children:[Object(y.jsxs)(w.a,{item:"true",xs:6,children:[" ",le()," "]}),Object(y.jsxs)(w.a,{item:"true",xs:6,children:[" ",fe()," "]})]})})},xe=function(){var e=Object(c.useState)(g.seed),t=Object(r.a)(e,2),n=t[0],i=t[1];return l()(g,{state:n,setState:i}),be(g)};o.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(xe,{})}),document.getElementById("root")),u()},96:function(e,t,n){},97:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.6154bda4.chunk.js.map