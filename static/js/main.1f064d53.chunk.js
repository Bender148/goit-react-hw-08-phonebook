(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{144:function(t,e,n){},145:function(t,e,n){"use strict";n.r(e);var c,r,a,u,o,i,s,b,j=n(0),l=n.n(j),O=n(29),d=n.n(O),f=n(19),h=n(15),p=n(22),v=n(4),x=n(80),g=n.n(x),k=n(28),m=n(3),N=n(23),L=n(9),_=n(7),y=Object(v.c)([],(c={},Object(m.a)(c,L.i,(function(t,e){return e.payload})),Object(m.a)(c,L.c,(function(t,e){return[e.payload].concat(Object(p.a)(t))})),Object(m.a)(c,L.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(m.a)(c,_.i,(function(){return[]})),Object(m.a)(c,L.l,(function(t,e){var n=e.payload;return t.map((function(t){return t.id===n.id?n:t}))})),c)),C=Object(v.c)("",Object(m.a)({},L.m,(function(t,e){return e.payload}))),w=Object(v.c)(!1,(r={},Object(m.a)(r,L.h,(function(){return!0})),Object(m.a)(r,L.i,(function(){return!1})),Object(m.a)(r,L.g,(function(){return!1})),Object(m.a)(r,L.b,(function(){return!0})),Object(m.a)(r,L.c,(function(){return!1})),Object(m.a)(r,L.a,(function(){return!1})),Object(m.a)(r,L.e,(function(){return!0})),Object(m.a)(r,L.f,(function(){return!1})),Object(m.a)(r,L.d,(function(){return!1})),r)),A=Object(v.c)(!1,(a={},Object(m.a)(a,L.k,(function(){return!0})),Object(m.a)(a,L.l,(function(){return!1})),Object(m.a)(a,L.j,(function(){return!1})),a)),z=Object(v.c)(null,(u={},Object(m.a)(u,L.g,(function(t,e){return e.payload})),Object(m.a)(u,L.a,(function(t,e){return e.payload})),Object(m.a)(u,L.d,(function(t,e){return e.payload})),Object(m.a)(u,L.j,(function(t,e){return e.payload})),u)),E=Object(N.b)({items:y,filter:C,loading:w,error:z,updateLoading:A}),S={name:null,email:null},R=Object(v.c)(S,(o={},Object(m.a)(o,_.l,(function(t,e){return e.payload.user})),Object(m.a)(o,_.f,(function(t,e){return e.payload.user})),Object(m.a)(o,_.i,(function(){return S})),Object(m.a)(o,_.c,(function(t,e){return e.payload})),o)),T=Object(v.c)(null,(i={},Object(m.a)(i,_.l,(function(t,e){return e.payload.token})),Object(m.a)(i,_.f,(function(t,e){return e.payload.token})),Object(m.a)(i,_.i,(function(){return null})),i)),U=Object(v.c)(null,(s={},Object(m.a)(s,_.j,(function(t,e){return e.payload})),Object(m.a)(s,_.d,(function(t,e){return e.payload})),Object(m.a)(s,_.g,(function(t,e){return e.payload})),Object(m.a)(s,_.a,(function(t,e){return e.payload})),s)),q=Object(v.c)(!1,(b={},Object(m.a)(b,_.l,(function(){return!0})),Object(m.a)(b,_.f,(function(){return!0})),Object(m.a)(b,_.b,(function(){return!0})),Object(m.a)(b,_.c,(function(){return!0})),Object(m.a)(b,_.i,(function(){return!1})),Object(m.a)(b,_.j,(function(){return!1})),Object(m.a)(b,_.d,(function(){return!1})),Object(m.a)(b,_.a,(function(){return!1})),b)),B=Object(N.b)({user:R,token:T,isAuthenticated:q,error:U}),M=Object(p.a)(Object(v.d)({serializableCheck:{ignoredActions:[k.a,k.f,k.b,k.c,k.d,k.e]}})),P={key:"token",storage:g.a,whitelist:["token"]},H=Object(v.a)({reducer:{contacts:E,auth:Object(k.g)(P,B)},middleware:M,devTools:!1}),J=Object(k.h)(H),D=n(81),F=n(10),G=n(57),I=n(84),Q=n.n(I),W=n(83),X=n.n(W),K=n(2),V=function(){return Object(K.jsx)(Q.a,{className:X.a.logo})},Y={home:"/",register:"/register",login:"/login",contacts:"/contacts"},Z=function(t){return t.auth.isAuthenticated},$=function(t){return t.auth.user.email},tt=n(33),et=n.n(tt);function nt(){var t=Object(h.c)(Z);return Object(K.jsx)("nav",{children:Object(K.jsxs)("ul",{className:et.a.NavLinksList,children:[Object(K.jsx)("li",{children:Object(K.jsx)(f.c,{exact:!0,to:Y.home,className:et.a.NavLink,children:Object(K.jsx)(V,{})})}),Object(K.jsx)("li",{children:Object(K.jsx)(f.c,{exact:!0,to:Y.home,className:et.a.NavLink,activeClassName:et.a["NavLink-active"],children:"Home"})}),t&&Object(K.jsx)("li",{children:Object(K.jsx)(f.c,{to:Y.contacts,className:et.a.NavLink,activeClassName:et.a["NavLink-active"],children:"Contacts"})})]})})}var ct=n(171),rt=n(172),at=n(88),ut=n.n(at),ot=n(43),it=n(55),st=n.n(it),bt=n(17),jt=Object(bt.a)({root:{backgroundColor:"#283593",color:"#ffffff"}})(ct.a);function lt(){var t=Object(h.b)(),e=Object(j.useCallback)((function(){return t(Object(ot.c)())}),[t]),n=Object(h.c)($);return Object(K.jsxs)("div",{className:st.a.UserMenu,children:[Object(K.jsx)(jt,{avatar:Object(K.jsx)(rt.a,{}),label:n}),Object(K.jsx)("button",{onClick:e,className:st.a.logoutbutton,children:Object(K.jsx)(ut.a,{})})]})}var Ot=n(35),dt=n.n(Ot),ft=function(){return Object(K.jsxs)("ul",{className:dt.a.NavLinksList,children:[Object(K.jsx)("li",{children:Object(K.jsx)(f.c,{to:Y.register,className:dt.a.NavLink,activeClassName:dt.a["NavLink-active"],children:"Register"})}),Object(K.jsx)("li",{children:Object(K.jsx)(f.c,{to:Y.login,className:dt.a.NavLink,activeClassName:dt.a["NavLink-active"],children:"Login"})})]})},ht=n(169),pt=n(89),vt=n.n(pt);function xt(){var t=Object(h.c)(Z);return Object(K.jsx)(ht.a,{position:"static",children:Object(K.jsx)(G.a,{children:Object(K.jsxs)("div",{className:vt.a.AppBar,children:[Object(K.jsx)(nt,{}),t?Object(K.jsx)(lt,{}):Object(K.jsx)(ft,{})]})})})}var gt=n(64),kt=n.n(gt),mt=(n(91),n(24)),Nt=n(6),Lt=["redirectTo","children"];function _t(t){var e=t.redirectTo,n=t.children,c=Object(Nt.a)(t,Lt),r=Object(h.c)(Z);return Object(K.jsx)(F.b,Object(mt.a)(Object(mt.a)({},c),{},{children:r?n:Object(K.jsx)(F.a,{to:e})}))}var yt=["redirectTo","children"];function Ct(t){var e=t.redirectTo,n=t.children,c=Object(Nt.a)(t,yt),r=Object(h.c)(Z);return Object(K.jsx)(F.b,Object(mt.a)(Object(mt.a)({},c),{},{children:r&&c.restricted?Object(K.jsx)(F.a,{to:e}):n}))}Ct.defaultProps={restricted:!0};var wt=Object(j.lazy)((function(){return n.e(2).then(n.bind(null,209))})),At=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,214))})),zt=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,215))})),Et=Object(j.lazy)((function(){return Promise.all([n.e(8),n.e(1)]).then(n.bind(null,213))})),St=Object(j.lazy)((function(){return Promise.all([n.e(8),n.e(1)]).then(n.bind(null,211))}));function Rt(){var t=Object(h.b)();return Object(j.useEffect)((function(){t(Object(ot.a)())}),[t]),Object(K.jsx)(f.b,{basename:"/",children:Object(K.jsxs)(j.Suspense,{fallback:Object(K.jsx)(kt.a,{type:"TailSpin",color:"#80cbc4",height:80,width:80,className:"loader"}),children:[Object(K.jsx)(xt,{}),Object(K.jsxs)(F.d,{children:[Object(K.jsx)(F.b,{exact:!0,path:Y.home,children:Object(K.jsx)(wt,{})}),Object(K.jsx)(Ct,{path:Y.register,redirectTo:Y.contacts,restricted:!0,children:Object(K.jsx)(zt,{})}),Object(K.jsx)(Ct,{path:Y.login,redirectTo:Y.contacts,restricted:!0,children:Object(K.jsx)(At,{})}),Object(K.jsx)(_t,{path:Y.contacts,redirectTo:Y.login,children:Object(K.jsx)(Et,{})}),Object(K.jsx)(F.b,{children:Object(K.jsx)(St,{})})]})]})})}n(143),n(144);d.a.render(Object(K.jsx)(l.a.StrictMode,{children:Object(K.jsx)(f.a,{children:Object(K.jsx)(h.a,{store:H,children:Object(K.jsx)(D.a,{loading:"Loading...",persistor:J,children:Object(K.jsx)(Rt,{})})})})}),document.getElementById("root"))},33:function(t,e,n){t.exports={NavLinksList:"Navigation_NavLinksList__2dWrz",NavLink:"Navigation_NavLink__1P3ga","NavLink-active":"Navigation_NavLink-active__2o4Ej"}},35:function(t,e,n){t.exports={NavLinksList:"AuthNav_NavLinksList__3Ha2A",NavLink:"AuthNav_NavLink__GC-73","NavLink-active":"AuthNav_NavLink-active__2UuTL"}},43:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return d}));var c=n(40),r=n(27),a=n.n(r),u=n(7),o=n(31),i=n.n(o);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.k)()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:c=e.sent,s(c.data.token),n(Object(u.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(u.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.e)()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:c=e.sent,s(c.data.token),n(Object(u.f)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(u.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(u.h)()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:b(),e(Object(u.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(u.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e,n){var c,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(r),e(Object(u.b)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:o=t.sent,e(Object(u.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(u.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},55:function(t,e,n){t.exports={UserMenu:"UserMenu_UserMenu__2wzSn",logoutbutton:"UserMenu_logoutbutton__1t1C_"}},57:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(0);var c=n(82),r=n.n(c),a=n(2),u=function(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},7:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var c=n(4),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError")},82:function(t,e,n){t.exports={container:"Container_container__25dqD"}},83:function(t,e,n){t.exports={logo:"Logo_logo__zz1CE"}},89:function(t,e,n){t.exports={AppBar:"AppBar_AppBar__XQ_Ba"}},9:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"k",(function(){return O})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"m",(function(){return h}));var c=n(4),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),O=Object(c.b)("contacts/updateContactRequest"),d=Object(c.b)("contacts/updateContactSuccess"),f=Object(c.b)("contacts/updateContactError"),h=Object(c.b)("phonebook/updateFilter")}},[[145,6,7]]]);
//# sourceMappingURL=main.1f064d53.chunk.js.map