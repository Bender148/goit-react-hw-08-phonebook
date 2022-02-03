(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{174:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(0);var c=n(2),a=function(t){var e=t.children;return Object(c.jsx)("main",{children:e})}},175:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(0);var c=n(57),a=n(176),r=n.n(a),i=n(2),s=function(t){var e=t.children;return Object(i.jsx)("section",{className:r.a.section,children:Object(i.jsx)(c.a,{children:e})})}},176:function(t,e,n){t.exports={section:"Section_section__2-N-o"}},177:function(t,e,n){t.exports={title:"PageTitle_title__3Twq4"}},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(0);var c=n(177),a=n.n(c),r=n(2),i=function(t){var e=t.title;return e&&Object(r.jsx)("h1",{className:a.a.title,children:e})};i.defaultProps={title:""};var s=i},187:function(t,e,n){t.exports={title:"Title_title__Sa2En"}},188:function(t,e,n){t.exports={form:"ContactForm_form__ev9MJ",btn:"ContactForm_btn__344FQ"}},189:function(t,e,n){t.exports={filter:"Filter_filter__3THfh"}},190:function(t,e,n){t.exports={btn:"EditorButton_btn__A237R",delete:"EditorButton_delete__2ySS1 EditorButton_btn__A237R",edit:"EditorButton_edit__1eaOF EditorButton_btn__A237R",save:"EditorButton_save__3a1lr EditorButton_btn__A237R",cancel:"EditorButton_cancel__1ydTv EditorButton_btn__A237R"}},191:function(t,e,n){t.exports={info:"ContactListItem_info__2x43U",item:"ContactListItem_item__2D1UU",editorInput:"ContactListItem_editorInput__3Gw9h",btnGroup:"ContactListItem_btnGroup__2X8BF"}},194:function(t,e,n){t.exports={contacts:"ContactList_contacts__3ZJR8",notification:"ContactList_notification__nrf8V",loader:"ContactList_loader__1NOnV"}},211:function(t,e,n){"use strict";n.r(e);n(0);var c=n(174),a=n(175),r=n(178),i=n(2);e.default=function(){return Object(i.jsx)(c.a,{children:Object(i.jsx)(a.a,{children:Object(i.jsx)(r.a,{title:"404 Page not Found"})})})}},213:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(174),r=n(175),i=n(187),s=n.n(i),o=n(2),u=function(t){var e=t.title;return e&&Object(o.jsx)("h2",{className:s.a.title,children:e})};u.defaultProps={title:""};var b=u,l=n(3),j=n(24),f=n(56),d=n(15),O=n(40),m=n(27),p=n.n(m),x=n(9),_=n(31),h=n.n(_),v=n(45),g=function(t){return t.contacts.filter},k=function(t){return t.contacts.items},C=Object(v.a)([k,g],(function(t,e){return t.filter((function(t){var n=t.name,c=t.number;return n.toLowerCase().includes(e.toLocaleLowerCase())||c.includes(e)}))})),y=function(t){return t.contacts.loading},N=n(188),w=n.n(N);function E(){var t=Object(c.useState)({name:"",number:""}),e=Object(f.a)(t,2),n=e[0],a=e[1],r=Object(d.c)(k),i=Object(d.b)(),s=Object(c.useCallback)((function(t){var e=t.target,c=e.name,r=e.value;a(Object(j.a)(Object(j.a)({},n),{},Object(l.a)({},c,r)))}),[n]),u=Object(c.useCallback)((function(t){if(t.preventDefault(),n.name){var e,c=r.find((function(t){return t.name===n.name}));if(c)alert("".concat(c.name," is already in contacts."));else i((e=n,function(){var t=Object(O.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(x.b)()),t.prev=1,t.next=4,h.a.post("/contacts",e);case 4:c=t.sent,a=c.data,n(Object(x.c)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(x.a)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())),a({name:"",number:""})}}),[r,i,n]);return Object(o.jsxs)("form",{className:w.a.form,onSubmit:u,children:[Object(o.jsxs)("label",{children:["Name",Object(o.jsx)("input",{type:"name",name:"name",value:n.name,onChange:s,required:!0})]}),Object(o.jsxs)("label",{children:["Number",Object(o.jsx)("input",{type:"tel",name:"number",value:n.number,onChange:s,required:!0})]}),Object(o.jsx)("button",{type:"submit",className:w.a.btn,children:"Add"})]})}var F=n(189),S=n.n(F);function B(){var t=Object(d.b)(),e=Object(c.useCallback)((function(e){return t(Object(x.m)(e.target.value))}),[t]),n=Object(d.c)(g);return Object(o.jsx)("div",{className:S.a.filter,children:Object(o.jsxs)("label",{children:["Find contacts by name",Object(o.jsx)("input",{type:"text",name:"filter",value:n,onChange:e,autoComplete:"off",required:!0})]})})}var L=n(190),A=n.n(L),I=function(t){var e=t.type,n=t.purpose,c=t.callback;return Object(o.jsx)("button",{type:e,className:A.a[n],onClick:function(){return c()},children:n})};I.defaultProps={type:"button"};var T=I,q=n(64),R=n.n(q),P=(n(91),n(191)),G=n.n(P);function J(t){var e=t.contact,n=e.id,a=e.name,r=e.number,i=Object(c.useState)(!1),s=Object(f.a)(i,2),u=s[0],b=s[1],m=Object(c.useState)(!1),_=Object(f.a)(m,2),v=_[0],g=_[1],C=Object(c.useState)({name:a,number:r}),y=Object(f.a)(C,2),N=y[0],w=y[1],E=Object(d.b)(),F=function(t){return E(function(t){return function(){var e=Object(O.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(x.e)()),e.prev=1,e.next=4,h.a.delete("/contacts/".concat(t));case 4:n(Object(x.f)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(x.d)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))},S=Object(d.c)(k),B=Object(c.useCallback)((function(t){var e=t.target,n=e.name,c=e.value;w(Object(j.a)(Object(j.a)({},N),{},Object(l.a)({},n,c)))}),[N]),L=Object(c.useCallback)((function(t,e){if(!e.name||!e.number)return w({name:a,number:r}),void b(!0);var c=S.find((function(t){return t.name===e.name&&t.id!==n}));if(c)return alert("".concat(c.name," is already in contacts.")),void b(!0);S.find((function(t){return t.name===e.name&&t.id===n}))||(g(!0),E(function(t,e,n){return function(){var c=Object(O.a)(p.a.mark((function c(a){var r,i;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a(Object(x.k)()),c.prev=1,c.next=4,h.a.patch("/contacts/".concat(t),e);case 4:r=c.sent,i=r.data,a(Object(x.l)(i)),n(!1),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),a(Object(x.j)(c.t0.message));case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(t){return c.apply(this,arguments)}}()}(t,e,g))),b(!1)}),[S,E,n,a,r]);return Object(o.jsxs)("li",{className:G.a.item,children:[Object(o.jsx)(o.Fragment,{children:u?Object(o.jsxs)("div",{className:G.a.editorInput,children:[Object(o.jsx)("input",{type:"name",name:"name",value:N.name,onChange:B,required:!0}),Object(o.jsx)("input",{type:"tel",name:"number",value:N.number,onChange:B,required:!0})]}):v?Object(o.jsx)(R.a,Object(j.a)({},{type:"TailSpin",color:"#80cbc4",height:30,width:30})):Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:G.a.info,children:[a,":"]}),Object(o.jsx)("p",{className:G.a.info,children:r})]})}),Object(o.jsxs)("div",{className:G.a.btnGroup,children:[u?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(T,{purpose:"save",callback:function(){return L(n,N)}}),Object(o.jsx)(T,{purpose:"cancel",callback:function(){return b(!1)}})]}):Object(o.jsx)(T,{purpose:"edit",callback:function(){return b(!0)}}),Object(o.jsx)(T,{purpose:"delete",callback:function(){return F(n)}})]})]})}var U=n(192),D=n.n(U),V=n(194),H=n.n(V);function M(){var t=Object(d.b)();Object(c.useEffect)((function(){return t(function(){var t=Object(O.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(x.h)()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(x.i)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(x.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);var e=Object(d.c)(C),n=Object(d.c)(y),a={type:"TailSpin",color:"#80cbc4",height:50,width:50,className:H.a.loader};return Object(o.jsxs)(o.Fragment,{children:[n&&Object(o.jsx)(R.a,Object(j.a)({},a)),!D.a.isEmpty(e)&&Object(o.jsx)("ul",{className:H.a.contacts,children:e.map((function(t){return Object(o.jsx)(J,{contact:t},t.id)}))}),D.a.isEmpty(e)&&!n&&Object(o.jsx)("p",{className:H.a.notification,children:"No contact found."})]})}e.default=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(b,{title:"Add contacts"}),Object(o.jsx)(E,{}),Object(o.jsx)(b,{title:"Find contacts"}),Object(o.jsx)(B,{}),Object(o.jsx)(b,{title:"Contacts"}),Object(o.jsx)(M,{})]})})}}}]);
//# sourceMappingURL=contacts-page.ff1b5196.chunk.js.map