import{K as Te,C as we,S as O,i as U,s as V,e as E,c as T,a as w,d as g,b as k,f as A,D as C,L as F,M as K,N as Ie,O as Q,P as W,Q as X,R as Y,T as Z,U as z,V as G,t as ae,g as re,W as R,h as oe,m as H,X as J,Y as $,o as x,p as D,n as N,Z as ie,_ as ee,$ as ce,a0 as ue,E as q,v as L,w as B,x as M,A as P,a1 as fe,a2 as Ce,a3 as Ae,j as De,a4 as Ne,l as Se}from"../chunks/vendor-d38048ac.js";const S=we([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Fe=Te(S,(o,e)=>{let t=o.filter(r=>r.color).map(r=>r.color),s=t.filter((r,n)=>t.indexOf(r)===n).map((r,n)=>({id:n,color:r}));e(s)});function _e(o,e,t){const l=o.slice();return l[13]=e[t],l}function de(o,e){let t,l,s,r,n,a,u=q,i,d,m;return{key:o,first:null,c(){t=E("li"),l=E("button"),this.h()},l(y){t=T(y,"LI",{class:!0});var b=w(t);l=T(b,"BUTTON",{class:!0,style:!0}),w(l).forEach(g),b.forEach(g),this.h()},h(){k(l,"class","task__color-btn svelte-100588h"),k(l,"style",s=`background-color: ${e[13].color}`),k(t,"class","task__color-item svelte-100588h"),this.first=t},m(y,b){A(y,t,b),C(t,l),i=!0,d||(m=F(l,"click",K(function(){Ie(e[7](e[13].color))&&e[7](e[13].color).apply(this,arguments)})),d=!0)},p(y,b){e=y,(!i||b&20&&s!==(s=`background-color: ${e[13].color}`))&&k(l,"style",s)},r(){a=t.getBoundingClientRect()},f(){Q(t),u(),W(t,a)},a(){u(),u=X(t,a,Y,{})},i(y){i||(Z(()=>{n&&n.end(1),r=z(t,e[9],{key:e[13].id}),r.start()}),i=!0)},o(y){r&&r.invalidate(),n=G(t,e[8],{key:e[13].id}),i=!1},d(y){y&&g(t),y&&n&&n.end(),d=!1,m()}}}function Oe(o){let e,t,l,s,r,n,a,u,i=[],d=new Map,m,y,b,I,_,c=o[4].filter(o[11]);const f=h=>h[13].id;for(let h=0;h<c.length;h+=1){let v=_e(o,c,h),p=f(v);d.set(p,i[h]=de(p,v))}return{c(){e=E("div"),t=E("div"),l=E("p"),s=ae(o[1]),r=E("div"),n=E("button"),a=E("span"),u=E("ul");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){e=T(h,"DIV",{class:!0});var v=w(e);t=T(v,"DIV",{class:!0});var p=w(t);l=T(p,"P",{class:!0});var te=w(l);s=re(te,o[1]),te.forEach(g),p.forEach(g),r=T(v,"DIV",{class:!0});var le=w(r);n=T(le,"BUTTON",{class:!0});var se=w(n);a=T(se,"SPAN",{class:!0}),w(a).forEach(g),se.forEach(g),le.forEach(g),u=T(v,"UL",{class:!0,style:!0});var ne=w(u);for(let j=0;j<i.length;j+=1)i[j].l(ne);ne.forEach(g),v.forEach(g),this.h()},h(){k(l,"class","svelte-100588h"),k(t,"class","task__main svelte-100588h"),k(a,"class","svg-image-del svelte-100588h"),k(n,"class","task__menu-btn task__menu-btn_del svelte-100588h"),k(r,"class","task__circle task__menu svelte-100588h"),k(u,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),k(u,"style",m=`background-color: ${o[2]}`),k(e,"class",y="task "+o[0]+" svelte-100588h"),R(e,"isDisabled",o[3])},m(h,v){A(h,e,v),C(e,t),C(t,l),C(l,s),C(e,r),C(r,n),C(n,a),C(e,u);for(let p=0;p<i.length;p+=1)i[p].m(u,null);b=!0,I||(_=[F(t,"click",o[5]),F(n,"click",K(o[6]))],I=!0)},p(h,[v]){if((!b||v&2)&&oe(s,h[1]),v&148){c=h[4].filter(h[11]),H();for(let p=0;p<i.length;p+=1)i[p].r();i=J(i,v,f,1,h,c,d,u,$,de,null,_e);for(let p=0;p<i.length;p+=1)i[p].a();x()}(!b||v&4&&m!==(m=`background-color: ${h[2]}`))&&k(u,"style",m),(!b||v&1&&y!==(y="task "+h[0]+" svelte-100588h"))&&k(e,"class",y),v&9&&R(e,"isDisabled",h[3])},i(h){if(!b){for(let v=0;v<c.length;v+=1)D(i[v]);b=!0}},o(h){for(let v=0;v<i.length;v+=1)N(i[v]);b=!1},d(h){h&&g(e);for(let v=0;v<i.length;v+=1)i[v].d();I=!1,ie(_)}}}function Ue(o,e,t){let l,s;ee(o,S,c=>t(12,l=c)),ee(o,Fe,c=>t(4,s=c));let{class:r=""}=e,{text:n=""}=e,{color:a="#0029FF"}=e,{disabled:u=!1}=e,{id:i=null}=e;const d=()=>{let c=l.map(f=>(i===f.id&&(f.done=!f.done),f));S.set(c)},m=()=>{let c=l.filter(f=>f.id!=i);S.set(c),console.log("del",i)},y=c=>{let f=l.map(h=>(i===h.id&&(h.color=c),h));S.set(f)},[b,I]=ce({duration:c=>Math.sqrt(c*200),fallback(c,f){const h=getComputedStyle(c),v=h.transform==="none"?"":h.transform;return{duration:600,easing:ue,css:p=>`
                        transform: ${v} scale(${p});
                        opacity: ${p}
                    `}}}),_=c=>c.color!=a;return o.$$set=c=>{"class"in c&&t(0,r=c.class),"text"in c&&t(1,n=c.text),"color"in c&&t(2,a=c.color),"disabled"in c&&t(3,u=c.disabled),"id"in c&&t(10,i=c.id)},[r,n,a,u,s,d,m,y,b,I,i,_]}class he extends O{constructor(e){super();U(this,e,Ue,Oe,V,{class:0,text:1,color:2,disabled:3,id:10})}}function me(o,e,t){const l=o.slice();return l[4]=e[t],l}function ve(o,e,t){const l=o.slice();return l[4]=e[t],l}function ge(o,e){let t,l,s,r,n,a=q,u;return l=new he({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=E("li"),L(l.$$.fragment),this.h()},l(i){t=T(i,"LI",{class:!0});var d=w(t);B(l.$$.fragment,d),d.forEach(g),this.h()},h(){k(t,"class","task-section__item"),this.first=t},m(i,d){A(i,t,d),M(l,t,null),u=!0},p(i,d){e=i;const m={};d&2&&(m.text=e[4].text),d&2&&(m.color=e[4].color?e[4].color:null),d&2&&(m.id=e[4].id),l.$set(m)},r(){n=t.getBoundingClientRect()},f(){Q(t),a(),W(t,n)},a(){a(),a=X(t,n,Y,{duration:300})},i(i){u||(D(l.$$.fragment,i),Z(()=>{r&&r.end(1),s=z(t,e[3],{key:e[4].id}),s.start()}),u=!0)},o(i){N(l.$$.fragment,i),s&&s.invalidate(),r=G(t,e[2],{key:e[4].id}),u=!1},d(i){i&&g(t),P(l),i&&r&&r.end()}}}function ke(o,e){let t,l,s,r,n,a=q,u;return l=new he({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=E("li"),L(l.$$.fragment),this.h()},l(i){t=T(i,"LI",{class:!0});var d=w(t);B(l.$$.fragment,d),d.forEach(g),this.h()},h(){k(t,"class","task-section__item"),this.first=t},m(i,d){A(i,t,d),M(l,t,null),u=!0},p(i,d){e=i;const m={};d&2&&(m.text=e[4].text),d&2&&(m.color=e[4].color?e[4].color:null),d&2&&(m.id=e[4].id),l.$set(m)},r(){n=t.getBoundingClientRect()},f(){Q(t),a(),W(t,n)},a(){a(),a=X(t,n,Y,{duration:300})},i(i){u||(D(l.$$.fragment,i),Z(()=>{r&&r.end(1),s=z(t,e[3],{key:e[4].id}),s.start()}),u=!0)},o(i){N(l.$$.fragment,i),s&&s.invalidate(),r=G(t,e[2],{key:e[4].id}),u=!1},d(i){i&&g(t),P(l),i&&r&&r.end()}}}function Ve(o){let e,t,l,s=[],r=new Map,n,a=[],u=new Map,i,d,m=o[1].filter(pe);const y=_=>_[4].id;for(let _=0;_<m.length;_+=1){let c=ve(o,m,_),f=y(c);r.set(f,s[_]=ge(f,c))}let b=o[1].filter(be);const I=_=>_[4].id;for(let _=0;_<b.length;_+=1){let c=me(o,b,_),f=I(c);u.set(f,a[_]=ke(f,c))}return{c(){e=E("section"),t=E("div"),l=E("ul");for(let _=0;_<s.length;_+=1)s[_].c();n=E("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=T(_,"SECTION",{class:!0});var c=w(e);t=T(c,"DIV",{class:!0});var f=w(t);l=T(f,"UL",{class:!0});var h=w(l);for(let p=0;p<s.length;p+=1)s[p].l(h);h.forEach(g),n=T(f,"UL",{class:!0});var v=w(n);for(let p=0;p<a.length;p+=1)a[p].l(v);v.forEach(g),f.forEach(g),c.forEach(g),this.h()},h(){k(l,"class","task-section__col"),k(n,"class","task-section__col"),k(t,"class","container task-section__grid svelte-1rib3cm"),k(e,"class",i="task-section "+o[0]+" svelte-1rib3cm")},m(_,c){A(_,e,c),C(e,t),C(t,l);for(let f=0;f<s.length;f+=1)s[f].m(l,null);C(t,n);for(let f=0;f<a.length;f+=1)a[f].m(n,null);d=!0},p(_,[c]){if(c&2){m=_[1].filter(pe),H();for(let f=0;f<s.length;f+=1)s[f].r();s=J(s,c,y,1,_,m,r,l,$,ge,null,ve);for(let f=0;f<s.length;f+=1)s[f].a();x()}if(c&2){b=_[1].filter(be),H();for(let f=0;f<a.length;f+=1)a[f].r();a=J(a,c,I,1,_,b,u,n,$,ke,null,me);for(let f=0;f<a.length;f+=1)a[f].a();x()}(!d||c&1&&i!==(i="task-section "+_[0]+" svelte-1rib3cm"))&&k(e,"class",i)},i(_){if(!d){for(let c=0;c<m.length;c+=1)D(s[c]);for(let c=0;c<b.length;c+=1)D(a[c]);d=!0}},o(_){for(let c=0;c<s.length;c+=1)N(s[c]);for(let c=0;c<a.length;c+=1)N(a[c]);d=!1},d(_){_&&g(e);for(let c=0;c<s.length;c+=1)s[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const pe=o=>!o.done,be=o=>o.done;function qe(o,e,t){let l;ee(o,S,a=>t(1,l=a));let{class:s=""}=e;const[r,n]=ce({duration:a=>Math.sqrt(a*200),fallback(a,u){const i=getComputedStyle(a),d=i.transform==="none"?"":i.transform;return{duration:600,easing:ue,css:m=>`
					transform: ${d} scale(${m});
					opacity: ${m}
				`}}});return o.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,n]}class Le extends O{constructor(e){super();U(this,e,qe,Ve,V,{class:0})}}function ye(o){let e,t,l,s=o[2].text&&Ee(o);return{c(){e=E("button"),s&&s.c(),this.h()},l(r){e=T(r,"BUTTON",{class:!0});var n=w(e);s&&s.l(n),n.forEach(g),this.h()},h(){k(e,"class","btn svelte-12pihab")},m(r,n){A(r,e,n),s&&s.m(e,null),t||(l=F(e,"click",K(o[6])),t=!0)},p(r,n){r[2].text?s?s.p(r,n):(s=Ee(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&g(e),s&&s.d(),t=!1,l()}}}function Ee(o){let e=o[2].text+"",t;return{c(){t=ae(e)},l(l){t=re(l,e)},m(l,s){A(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&oe(t,e)},d(l){l&&g(t)}}}function Be(o){let e,t,l,s,r,n=o[2]&&ye(o);return{c(){e=E("div"),t=E("input"),n&&n.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var u=w(e);t=T(u,"INPUT",{placeholder:!0,class:!0}),n&&n.l(u),u.forEach(g),this.h()},h(){k(t,"placeholder",o[1]),k(t,"class","svelte-12pihab"),k(e,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",o[5])},m(a,u){A(a,e,u),C(e,t),fe(t,o[4]),n&&n.m(e,null),o[9](e),s||(r=[F(t,"input",o[8]),F(t,"input",o[7])],s=!0)},p(a,[u]){u&2&&k(t,"placeholder",a[1]),u&16&&t.value!==a[4]&&fe(t,a[4]),a[2]?n?n.p(a,u):(n=ye(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),u&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&k(e,"class",l),u&37&&R(e,"isError",a[5])},i:q,o:q,d(a){a&&g(e),n&&n.d(),o[9](null),s=!1,ie(r)}}}function Me(o,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,n,a,u=!1;const i=Ce(),d=()=>{a?(i("submit",{value:a}),t(4,a="")):t(5,u=!0)},m=()=>{t(5,u=!1)};function y(){a=this.value,t(4,a)}function b(I){Ae[I?"unshift":"push"](()=>{n=I,t(3,n)})}return o.$$set=I=>{"class"in I&&t(0,l=I.class),"placeholder"in I&&t(1,s=I.placeholder),"btn"in I&&t(2,r=I.btn)},[l,s,r,n,a,u,d,m,y,b]}class Pe extends O{constructor(e){super();U(this,e,Me,Be,V,{class:0,placeholder:1,btn:2})}}function Re(o){let e,t,l,s;return t=new Pe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=E("div"),L(t.$$.fragment),this.h()},l(r){e=T(r,"DIV",{class:!0});var n=w(e);B(t.$$.fragment,n),n.forEach(g),this.h()},h(){k(e,"class",l="add-todo "+o[0]+" svelte-hols8d")},m(r,n){A(r,e,n),M(t,e,null),s=!0},p(r,[n]){(!s||n&1&&l!==(l="add-todo "+r[0]+" svelte-hols8d"))&&k(e,"class",l)},i(r){s||(D(t.$$.fragment,r),s=!0)},o(r){N(t.$$.fragment,r),s=!1},d(r){r&&g(e),P(t)}}}function je(o,e,t){let{class:l=""}=e;const s=r=>{let n={id:Date.now(),text:r.detail.value,color:"#000",done:!1};S.update(a=>a=[n,...a])};return o.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Ke extends O{constructor(e){super();U(this,e,je,Re,V,{class:0})}}function Qe(o){let e,t,l,s,r,n,a;return s=new Ke({}),n=new Le({props:{class:"mt-50"}}),{c(){e=De(),t=E("section"),l=E("div"),L(s.$$.fragment),L(n.$$.fragment),this.h()},l(u){Ne('[data-svelte="svelte-1ms75pp"]',document.head).forEach(g),e=Se(u),t=T(u,"SECTION",{class:!0});var d=w(t);l=T(d,"DIV",{class:!0});var m=w(l);B(s.$$.fragment,m),m.forEach(g),d.forEach(g),B(n.$$.fragment,u),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",k(l,"class","container"),k(t,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(u,i){A(u,e,i),A(u,t,i),C(t,l),M(s,l,null),M(n,u,i),a=!0},p(u,[i]){(!a||i&1&&r!==(r=""+(u[0]+" mt-50 svelte-hols8d")))&&k(t,"class",r)},i(u){a||(D(s.$$.fragment,u),D(n.$$.fragment,u),a=!0)},o(u){N(s.$$.fragment,u),N(n.$$.fragment,u),a=!1},d(u){u&&g(e),u&&g(t),P(s),P(n,u)}}}function We(o,e,t){let{class:l=""}=e;return o.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Ye extends O{constructor(e){super();U(this,e,We,Qe,V,{class:0})}}export{Ye as default};