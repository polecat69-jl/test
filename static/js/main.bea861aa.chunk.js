(this.webpackJsonpjsfullstack=this.webpackJsonpjsfullstack||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(30),a=n.n(s),i=n(2),o=n(0),j=Object(c.createContext)(null),l=function(e){var t=e.children,n=Object(c.useState)(),r=Object(i.a)(n,2),s=r[0],a=r[1];return Object(o.jsx)(j.Provider,{value:[s,a],children:t})},u=n(11),b=n(3),A=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Welcome to the Homeview"})})},O=n(5),d=n.n(O),p=n(9),x=n(12),h=n.n(x),f=h.a.create({baseURL:"https://swapi.dev/api",headers:{"Content-Type":"application/json"}}),g=function(e){return f.get("/people/".concat(e))},v=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),a=Object(i.a)(s,2),j=a[0],l=a[1],u=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(j);case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error occured: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=localStorage.getItem("username");return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Hi and welcome ",b,":) browse our gallery of StarWars"]}),Object(o.jsx)("button",{onClick:function(){return u()},children:"Make API"}),Object(o.jsx)("button",{onClick:function(){return console.log(n)},children:"Check my state"}),Object(o.jsx)("input",{placeholder:"Search for Character with ID number",onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("h1",{children:null===n||void 0===n?void 0:n.name}),Object(o.jsxs)("p",{children:["Gender: ",null===n||void 0===n?void 0:n.gender]}),Object(o.jsxs)("p",{children:["Height: ",null===n||void 0===n?void 0:n.height," cm"]}),Object(o.jsxs)("p",{children:["Weight: ",null===n||void 0===n?void 0:n.mass," kg"]}),Object(o.jsxs)("p",{children:["Haircolor: ",null===n||void 0===n?void 0:n.hair_color]})]})},m=n(15),w=n(18),C="/",I="/gallery",B="/news",G="/login",H="/shop",R="/profile",D="/settings",k="/savedproducts",y="/itemdetail",E=h.a.create({baseURL:"http://localhost:3001"}),P=function(){return E.get("/user")},U=function(e){return E.post("/user",e)},F=function(){var e=Object(b.f)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),u=l[0],A=l[1],O=Object(c.useContext)(j),x=Object(i.a)(O,2),h=(x[0],x[1]),f=Object(c.useState)({username:"",password:""}),g=Object(i.a)(f,2),v=g[0],I=g[1],B=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(v);case 3:t=e.sent,n=t.data,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(e,t){I(Object(w.a)(Object(w.a)({},v),{},Object(m.a)({},t,e.target.value)))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Welcome user :)"}),Object(o.jsx)("span",{children:"Username: "})," ",Object(o.jsx)("input",{onChange:function(e){return s(e.target.value)}})," ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Password: "})," ",Object(o.jsx)("input",{onChange:function(e){return A(e.target.value)}})," ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return h(r,u),localStorage.setItem("username",r),localStorage.setItem("password",u),void e.push(C)},children:"Sign In"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h1",{children:"Register new User"}),Object(o.jsx)("input",{placeholder:"username",onChange:function(e){return G(e,"username")}}),Object(o.jsx)("input",{placeholder:"password",type:"password",onChange:function(e){return G(e,"password")}}),Object(o.jsx)("button",{onClick:function(){return B()},children:"Register new user"})]})},S=h.a.create({baseURL:"https://pokeapi.co/api/v2/",headers:{"Content-Type":"application/json"}}),K=function(e){return S.get("/pokemon/".concat(e))},T=function(){return S.get("pokemon?limit=100")},N=function(){var e=Object(b.f)(),t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!0),j=Object(i.a)(a,2),l=j[0],u=j[1],A=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:t=e.sent,n=t.data,s(n),u(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){A()}));return Object(o.jsx)("div",{children:function(){var t;if(!l)return null===r||void 0===r||null===(t=r.results)||void 0===t?void 0:t.map((function(t){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{onClick:function(){return e.push(y,t)},children:t.name})},t.name)}))}()})},J=function(){var e,t,n,r=Object(c.useState)(),s=Object(i.a)(r,2),a=s[0],j=s[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),b=u[0],A=u[1],O=function(e,t){var n=Object(c.useState)(e),r=Object(i.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e]),s}(b,1e3),x=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=6;break}return e.next=3,K(t);case 3:n=e.sent,c=n.data,j(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x(b)}),[O]),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{placeholder:" search 4 pokemons",onChange:function(e){return A(e.target.value)}}),Object(o.jsxs)("h1",{children:["Name: ",null===a||void 0===a?void 0:a.name]}),Object(o.jsxs)("h1",{children:["id: ",null===a||void 0===a?void 0:a.id]}),Object(o.jsxs)("h1",{children:["height ",null===a||void 0===a?void 0:a.height,'"']}),Object(o.jsxs)("h1",{children:["weight ",null===a||void 0===a?void 0:a.weight,"lb"]}),Object(o.jsxs)("h1",{children:["type ",null===a||void 0===a||null===(e=a.types)||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.type)||void 0===n?void 0:n.name]})]})},Q=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This is the settingsview"})})},z=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,n=t.data,r(n),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return s()},children:" Make call to backend "}),n.map((function(e){return Object(o.jsxs)("h1",{children:["UserID: ",e._id,Object(o.jsx)("br",{}),"Username: ",e.username,Object(o.jsx)("br",{}),"Password: ",e.password]})}))]})},L=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Saved products"})})},W=n.p+"static/media/pokeball.e834de00.gif",Y=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(i.a)(s,2),j=a[0],l=a[1],u=Object(b.g)(),A=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(u.state.url);case 3:t=e.sent,n=t.data,r(n),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){A()})),j?Object(o.jsx)("img",{src:W}):Object(o.jsx)("div",{children:function(){var e;if(!j)return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){return console.log(n)},children:"Show location"}),Object(o.jsx)("hr",{}),Object(o.jsx)("img",{src:null===n||void 0===n||null===(e=n.sprites)||void 0===e?void 0:e.front_default,alt:"error"}),Object(o.jsxs)("h1",{children:["name: ",null===n||void 0===n?void 0:n.name]}),Object(o.jsxs)("p",{children:["Gender: ",null===n||void 0===n?void 0:n.gender]}),Object(o.jsxs)("p",{children:["Height: ",null===n||void 0===n?void 0:n.height," cm"]}),Object(o.jsxs)("p",{children:["Haircolor: ",null===n||void 0===n?void 0:n.hair_color]})]})}()})},q=function(e){var t,n=e.children,r=Object(c.useContext)(j),s=Object(i.a)(r,2),a=s[0],l=s[1],O=function(e){return a?e:F};return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("username");e&&l(e)}()})),Object(o.jsxs)(u.a,{children:[n,Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:I,component:v}),Object(o.jsx)(b.a,{exact:!0,path:B,component:N}),Object(o.jsx)(b.a,{exact:!0,path:y,component:Y}),Object(o.jsx)(b.a,{exact:!0,path:H,component:J}),Object(o.jsx)(b.a,{exact:!0,path:G,component:(t=F,a?A:t)}),Object(o.jsx)(b.a,{exact:!0,path:D,component:O(Q)}),Object(o.jsx)(b.a,{exact:!0,path:R,component:O(z)}),Object(o.jsx)(b.a,{exact:!0,path:k,component:O(L)}),Object(o.jsx)(b.a,{component:A})]})]})},V=(n(61),n.p+"static/media/logotype.38f29b1e.png"),M=(n(62),n(63),"data:image/png;base64,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"),X="data:image/png;base64,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",Z="data:image/png;base64,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",_="data:image/png;base64,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",$=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,2),n=(t[0],t[1]),r=Object(b.f)();return Object(o.jsxs)("div",{className:"profileDropdownWrapper",children:[Object(o.jsx)("span",{children:"First Lastname"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Email"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("span",{onClick:function(){return r.push(R)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:_,alt:"error.."})," Profile"]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{onClick:function(){return r.push(D)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:X,alt:"error.."})," Settings"]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Language: SE"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Theme"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("span",{onClick:function(){return r.push(k)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:Z,alt:"error.."})," Saved Products"]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("span",{onClick:function(){return n(!1),localStorage.removeItem("username"),localStorage.removeItem("password"),void r.push(G)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:M,alt:"error.."})," Logout"]})]})},ee=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,1)[0];return Object(o.jsxs)("div",{className:"profileWrapper",children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{className:"profileImg",src:"https://thispersondoesnotexist.com/image",alt:"error..."}),Object(o.jsx)($,{})]})},te=function(){var e=Object(c.useContext)(j),t=Object(i.a)(e,1)[0],n=Object(b.f)();return Object(o.jsxs)("div",{className:"desktopNavigationWrapper",children:[Object(o.jsx)("img",{className:"navlogo",onClick:function(){return n.push(C)},src:V,alt:"error.."}),Object(o.jsx)("span",{className:"shopButton",onClick:function(){return n.push(H)},children:"Shop"}),Object(o.jsx)("span",{className:"galleryButton",onClick:function(){return n.push(I)},children:"Gallery"}),Object(o.jsx)("span",{className:"newsButton",onClick:function(){return n.push(B)},children:"News"}),t?Object(o.jsxs)("span",{className:"authUserNavigation",children:[" ",Object(o.jsx)(ee,{})," "]}):Object(o.jsx)("span",{className:"signinButton",onClick:function(){return n.push(G)},children:"Sign In"})]})},ne=(n(64),function(e){var t=e.drawerHandler;return Object(o.jsxs)("button",{className:"toggle-button",onClick:function(){return t(!0)},children:[Object(o.jsx)("div",{className:"toggle-button__line"}),Object(o.jsx)("div",{className:"toggle-button__line"}),Object(o.jsx)("div",{className:"toggle-button__line"})]})}),ce=(n(65),function(e){var t=e.drawerisOpen,n=e.drawerHandler,r=Object(c.useContext)(j),s=Object(i.a)(r,2),a=(s[0],s[1]),l=Object(b.f)();return Object(o.jsxs)("nav",{className:t?"side-drawer open":"side-drawer",children:[Object(o.jsx)("span",{onClick:function(){return n(!1)},children:"Exit"}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{className:"navlogo",onClick:function(){return l.push(C)},src:V,alt:"error.."}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"shopButton",onClick:function(){return l.push(H)},children:"Shop"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"galleryButton",onClick:function(){return l.push(I)},children:"Gallery"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"newsButton",onClick:function(){return l.push(B)},children:"News"}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"First Lastname"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Email"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("span",{onClick:function(){return l.push(R)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:_,alt:"error.."})," Profile"]}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{onClick:function(){return l.push(D)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:X,alt:"error.."})," Settings"]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Language: SE"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Theme"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("span",{onClick:function(){return l.push(k)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:Z,alt:"error.."})," Saved Products"]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("span",{onClick:function(){return a(!1),localStorage.removeItem("username"),localStorage.removeItem("password"),void l.push(G)},children:[Object(o.jsx)("img",{className:"profileDropDownImages",src:M,alt:"error.."})," Logout"]})]})}),re=(n(66),n(67),function(){return Object(o.jsx)("div",{className:"backdrop"})}),se=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(ne,{drawerHandler:r}),Object(o.jsx)(ce,{drawerisOpen:n,drawerHandler:r}),!n||Object(o.jsx)(re,{})]})},ae=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},ie=function(){var e=function(){var e=Object(c.useState)(ae()),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(){r(ae())};return Object(c.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),n}().width;return Object(o.jsx)("div",{children:e<=1e3?Object(o.jsx)(se,{}):Object(o.jsx)(te,{})})},oe=(n(68),function(){return Object(o.jsx)(l,{children:Object(o.jsx)(q,{children:Object(o.jsx)(ie,{})})})}),je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(oe,{})}),document.getElementById("root")),je()}},[[69,1,2]]]);
//# sourceMappingURL=main.bea861aa.chunk.js.map