import{K as Ae,C as le,S as U,i as V,s as B,e as b,c as y,a as T,d as p,b as k,f as I,D as w,L as N,M as j,N as se,t as ne,g as oe,O as K,h as ae,P as Q,Q as Fe,E as O,R as re,T as L,v as q,w as M,x as P,U as X,V as Y,W as Z,p as F,X as z,Y as ie,n as D,Z as ce,A as R,m as G,o as H,_ as De,$ as J,a0 as $,a1 as Ne,a2 as ue,a3 as Oe,a4 as Se,a5 as fe,a6 as _e,j as Ue,a7 as Ve,l as Be}from"../chunks/vendor-935e33b2.js";const S=le([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),de=Ae(S,(o,t)=>{let e=o.filter(a=>a.color).map(a=>a.color),s=e.filter((a,r)=>e.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(s)}),Le=le(["#0029FF","#FF9900","#AD00FF","#000000"]);function he(o,t,e){const l=o.slice();return l[11]=t[e],l}function me(o,t){let e,l,s,a,r;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(n){e=y(n,"LI",{class:!0});var i=T(e);l=y(i,"BUTTON",{class:!0,style:!0}),T(l).forEach(p),i.forEach(p),this.h()},h(){k(l,"class","task__color-btn svelte-100588h"),k(l,"style",s=`background-color: ${t[11].color}`),k(e,"class","task__color-item svelte-100588h"),this.first=e},m(n,i){I(n,e,i),w(e,l),a||(r=N(l,"click",j(function(){se(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),a=!0)},p(n,i){t=n,i&20&&s!==(s=`background-color: ${t[11].color}`)&&k(l,"style",s)},d(n){n&&p(e),a=!1,r()}}}function qe(o){let t,e,l,s,a,r,n,i,c=[],d=new Map,f,v,g,_,h=o[4].filter(o[9]);const m=u=>u[11].id;for(let u=0;u<h.length;u+=1){let E=he(o,h,u),C=m(E);d.set(C,c[u]=me(C,E))}return{c(){t=b("div"),e=b("div"),l=b("p"),s=ne(o[1]),a=b("div"),r=b("button"),n=b("span"),i=b("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=y(u,"DIV",{class:!0});var E=T(t);e=y(E,"DIV",{class:!0});var C=T(e);l=y(C,"P",{class:!0});var A=T(l);s=oe(A,o[1]),A.forEach(p),C.forEach(p),a=y(E,"DIV",{class:!0});var x=T(a);r=y(x,"BUTTON",{class:!0});var ee=T(r);n=y(ee,"SPAN",{class:!0}),T(n).forEach(p),ee.forEach(p),x.forEach(p),i=y(E,"UL",{class:!0,style:!0});var te=T(i);for(let W=0;W<c.length;W+=1)c[W].l(te);te.forEach(p),E.forEach(p),this.h()},h(){k(l,"class","svelte-100588h"),k(e,"class","task__main svelte-100588h"),k(n,"class","svg-image-del svelte-100588h"),k(r,"class","task__menu-btn task__menu-btn_del svelte-100588h"),k(a,"class","task__circle task__menu svelte-100588h"),k(i,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),k(i,"style",f=`background-color: ${o[2]}`),k(t,"class",v="task "+o[0]+" svelte-100588h"),K(t,"isDisabled",o[3])},m(u,E){I(u,t,E),w(t,e),w(e,l),w(l,s),w(t,a),w(a,r),w(r,n),w(t,i);for(let C=0;C<c.length;C+=1)c[C].m(i,null);g||(_=[N(e,"click",o[5]),N(r,"click",j(o[6]))],g=!0)},p(u,[E]){E&2&&ae(s,u[1]),E&148&&(h=u[4].filter(u[9]),c=Q(c,E,m,1,u,h,d,i,Fe,me,null,he)),E&4&&f!==(f=`background-color: ${u[2]}`)&&k(i,"style",f),E&1&&v!==(v="task "+u[0]+" svelte-100588h")&&k(t,"class",v),E&9&&K(t,"isDisabled",u[3])},i:O,o:O,d(u){u&&p(t);for(let E=0;E<c.length;E+=1)c[E].d();g=!1,re(_)}}}function Me(o,t,e){let l,s;L(o,S,_=>e(10,l=_)),L(o,de,_=>e(4,s=_));let{class:a=""}=t,{text:r=""}=t,{color:n="#0029FF"}=t,{disabled:i=!1}=t,{id:c=null}=t;const d=()=>{let _=l.map(h=>(c===h.id&&(h.done=!h.done),h));S.set(_)},f=()=>{let _=l.filter(h=>h.id!=c);S.set(_),console.log("del",c)},v=_=>{let h=l.map(m=>(c===m.id&&(m.color=_),m));S.set(h)},g=_=>_.color!=n;return o.$$set=_=>{"class"in _&&e(0,a=_.class),"text"in _&&e(1,r=_.text),"color"in _&&e(2,n=_.color),"disabled"in _&&e(3,i=_.disabled),"id"in _&&e(8,c=_.id)},[a,r,n,i,s,d,f,v,c,g]}class ve extends U{constructor(t){super();V(this,t,Me,qe,B,{class:0,text:1,color:2,disabled:3,id:8})}}function ge(o,t,e){const l=o.slice();return l[4]=t[e],l}function ke(o,t,e){const l=o.slice();return l[4]=t[e],l}function pe(o,t){let e,l,s,a,r,n=O,i;return l=new ve({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),q(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var d=T(e);M(l.$$.fragment,d),d.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,d){I(c,e,d),P(l,e,null),i=!0},p(c,d){t=c;const f={};d&2&&(f.text=t[4].text),d&2&&(f.color=t[4].color?t[4].color:null),d&2&&(f.id=t[4].id),l.$set(f)},r(){r=e.getBoundingClientRect()},f(){X(e),n(),Y(e,r)},a(){n(),n=Z(e,r,J,{duration:300})},i(c){i||(F(l.$$.fragment,c),z(()=>{a&&a.end(1),s=ie(e,t[3],{key:t[4].id}),s.start()}),i=!0)},o(c){D(l.$$.fragment,c),s&&s.invalidate(),a=ce(e,t[2],{key:t[4].id}),i=!1},d(c){c&&p(e),R(l),c&&a&&a.end()}}}function be(o,t){let e,l,s,a,r,n=O,i;return l=new ve({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),q(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var d=T(e);M(l.$$.fragment,d),d.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,d){I(c,e,d),P(l,e,null),i=!0},p(c,d){t=c;const f={};d&2&&(f.text=t[4].text),d&2&&(f.color=t[4].color?t[4].color:null),d&2&&(f.id=t[4].id),l.$set(f)},r(){r=e.getBoundingClientRect()},f(){X(e),n(),Y(e,r)},a(){n(),n=Z(e,r,J,{duration:300})},i(c){i||(F(l.$$.fragment,c),z(()=>{a&&a.end(1),s=ie(e,t[3],{key:t[4].id}),s.start()}),i=!0)},o(c){D(l.$$.fragment,c),s&&s.invalidate(),a=ce(e,t[2],{key:t[4].id}),i=!1},d(c){c&&p(e),R(l),c&&a&&a.end()}}}function Pe(o){let t,e,l,s=[],a=new Map,r,n=[],i=new Map,c,d,f=o[1].filter(ye);const v=h=>h[4].id;for(let h=0;h<f.length;h+=1){let m=ke(o,f,h),u=v(m);a.set(u,s[h]=pe(u,m))}let g=o[1].filter(Ee);const _=h=>h[4].id;for(let h=0;h<g.length;h+=1){let m=ge(o,g,h),u=_(m);i.set(u,n[h]=be(u,m))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let h=0;h<s.length;h+=1)s[h].c();r=b("ul");for(let h=0;h<n.length;h+=1)n[h].c();this.h()},l(h){t=y(h,"SECTION",{class:!0});var m=T(t);e=y(m,"DIV",{class:!0});var u=T(e);l=y(u,"UL",{class:!0});var E=T(l);for(let A=0;A<s.length;A+=1)s[A].l(E);E.forEach(p),r=y(u,"UL",{class:!0});var C=T(r);for(let A=0;A<n.length;A+=1)n[A].l(C);C.forEach(p),u.forEach(p),m.forEach(p),this.h()},h(){k(l,"class","task-section__col"),k(r,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(h,m){I(h,t,m),w(t,e),w(e,l);for(let u=0;u<s.length;u+=1)s[u].m(l,null);w(e,r);for(let u=0;u<n.length;u+=1)n[u].m(r,null);d=!0},p(h,[m]){if(m&2){f=h[1].filter(ye),G();for(let u=0;u<s.length;u+=1)s[u].r();s=Q(s,m,v,1,h,f,a,l,$,pe,null,ke);for(let u=0;u<s.length;u+=1)s[u].a();H()}if(m&2){g=h[1].filter(Ee),G();for(let u=0;u<n.length;u+=1)n[u].r();n=Q(n,m,_,1,h,g,i,r,$,be,null,ge);for(let u=0;u<n.length;u+=1)n[u].a();H()}(!d||m&1&&c!==(c="task-section "+h[0]+" svelte-1rib3cm"))&&k(t,"class",c)},i(h){if(!d){for(let m=0;m<f.length;m+=1)F(s[m]);for(let m=0;m<g.length;m+=1)F(n[m]);d=!0}},o(h){for(let m=0;m<s.length;m+=1)D(s[m]);for(let m=0;m<n.length;m+=1)D(n[m]);d=!1},d(h){h&&p(t);for(let m=0;m<s.length;m+=1)s[m].d();for(let m=0;m<n.length;m+=1)n[m].d()}}}const ye=o=>!o.done,Ee=o=>o.done;function Re(o,t,e){let l;L(o,S,n=>e(1,l=n));let{class:s=""}=t;const[a,r]=De({duration:n=>Math.sqrt(n*200),fallback(n,i){const c=getComputedStyle(n),d=c.transform==="none"?"":c.transform;return{duration:600,easing:Ne,css:f=>`
					transform: ${d} scale(${f});
					opacity: ${f}
				`}}});return o.$$set=n=>{"class"in n&&e(0,s=n.class)},[s,l,a,r]}class je extends U{constructor(t){super();V(this,t,Re,Pe,B,{class:0})}}function Te(o){let t,e,l,s=o[2].text&&we(o);return{c(){t=b("button"),s&&s.c(),this.h()},l(a){t=y(a,"BUTTON",{class:!0});var r=T(t);s&&s.l(r),r.forEach(p),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(a,r){I(a,t,r),s&&s.m(t,null),e||(l=N(t,"click",j(o[6])),e=!0)},p(a,r){a[2].text?s?s.p(a,r):(s=we(a),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(a){a&&p(t),s&&s.d(),e=!1,l()}}}function we(o){let t=o[2].text+"",e;return{c(){e=ne(t)},l(l){e=oe(l,t)},m(l,s){I(l,e,s)},p(l,s){s&4&&t!==(t=l[2].text+"")&&ae(e,t)},d(l){l&&p(e)}}}function Ke(o){let t,e,l,s,a,r=o[2]&&Te(o);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(n){t=y(n,"DIV",{class:!0});var i=T(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(p),this.h()},h(){k(e,"placeholder",o[1]),k(e,"class","svelte-12pihab"),k(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),K(t,"isError",o[5])},m(n,i){I(n,t,i),w(t,e),ue(e,o[4]),r&&r.m(t,null),o[9](t),s||(a=[N(e,"input",o[8]),N(e,"input",o[7])],s=!0)},p(n,[i]){i&2&&k(e,"placeholder",n[1]),i&16&&e.value!==n[4]&&ue(e,n[4]),n[2]?r?r.p(n,i):(r=Te(n),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",l),i&37&&K(t,"isError",n[5])},i:O,o:O,d(n){n&&p(t),r&&r.d(),o[9](null),s=!1,re(a)}}}function Qe(o,t,e){let{class:l=""}=t,{placeholder:s="Placeholer"}=t,{btn:a=null}=t,r,n,i=!1;const c=Oe(),d=()=>{n?(c("submit",{value:n}),e(4,n="")):e(5,i=!0)},f=()=>{e(5,i=!1)};function v(){n=this.value,e(4,n)}function g(_){Se[_?"unshift":"push"](()=>{r=_,e(3,r)})}return o.$$set=_=>{"class"in _&&e(0,l=_.class),"placeholder"in _&&e(1,s=_.placeholder),"btn"in _&&e(2,a=_.btn)},[l,s,a,r,n,i,d,f,v,g]}class We extends U{constructor(t){super();V(this,t,Qe,Ke,B,{class:0,placeholder:1,btn:2})}}function Ce(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Ie(o,t){let e,l,s,a,r=O,n,i,c;return{key:o,first:null,c(){e=b("button"),this.h()},l(d){e=y(d,"BUTTON",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){k(e,"class","add-todo__color svelte-13xn9ef"),k(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,f){I(d,e,f),n=!0,i||(c=N(e,"click",j(function(){se(t[4](t[9].color))&&t[4](t[9].color).apply(this,arguments)})),i=!0)},p(d,f){t=d,(!n||f&6&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&k(e,"style",l)},r(){a=e.getBoundingClientRect()},f(){X(e),r(),Y(e,a)},a(){r(),r=Z(e,a,J,{})},i(d){n||(z(()=>{s||(s=fe(e,_e,{},!0)),s.run(1)}),n=!0)},o(d){s||(s=fe(e,_e,{},!1)),s.run(0),n=!1},d(d){d&&p(e),d&&s&&s.end(),i=!1,c()}}}function Xe(o){let t,e,l,s,a=[],r=new Map,n,i,c,d=o[2].filter(o[5]);const f=v=>v[9].id;for(let v=0;v<d.length;v+=1){let g=Ce(o,d,v),_=f(g);r.set(_,a[v]=Ie(_,g))}return n=new We({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("submit",o[3]),{c(){t=b("div"),e=b("div"),l=b("span");for(let v=0;v<a.length;v+=1)a[v].c();q(n.$$.fragment),this.h()},l(v){t=y(v,"DIV",{class:!0});var g=T(t);e=y(g,"DIV",{class:!0});var _=T(e);l=y(_,"SPAN",{class:!0,style:!0}),T(l).forEach(p);for(let h=0;h<a.length;h+=1)a[h].l(_);_.forEach(p),M(n.$$.fragment,g),g.forEach(p),this.h()},h(){k(l,"class","add-todo__color add-todo__color_main svelte-13xn9ef"),k(l,"style",s=`color: ${o[1]}`),k(e,"class","add-todo__color-list svelte-13xn9ef"),k(t,"class",i="add-todo "+o[0]+" svelte-13xn9ef")},m(v,g){I(v,t,g),w(t,e),w(e,l);for(let _=0;_<a.length;_+=1)a[_].m(e,null);P(n,t,null),c=!0},p(v,[g]){if((!c||g&2&&s!==(s=`color: ${v[1]}`))&&k(l,"style",s),g&22){d=v[2].filter(v[5]),G();for(let _=0;_<a.length;_+=1)a[_].r();a=Q(a,g,f,1,v,d,r,e,$,Ie,null,Ce);for(let _=0;_<a.length;_+=1)a[_].a();H()}(!c||g&1&&i!==(i="add-todo "+v[0]+" svelte-13xn9ef"))&&k(t,"class",i)},i(v){if(!c){for(let g=0;g<d.length;g+=1)F(a[g]);F(n.$$.fragment,v),c=!0}},o(v){for(let g=0;g<a.length;g+=1)D(a[g]);D(n.$$.fragment,v),c=!1},d(v){v&&p(t);for(let g=0;g<a.length;g+=1)a[g].d();R(n)}}}function Ye(o,t,e){let l,s;L(o,de,f=>e(2,l=f)),L(o,Le,f=>e(6,s=f));let{class:a=""}=t,r="#0029FF",n=s.map(f=>f).concat(l.map(f=>f.color));n.filter((f,v)=>n.indexOf(f)===v),console.log(n);const i=f=>{let v={id:Date.now(),text:f.detail.value,color:r,done:!1};S.update(g=>g=[v,...g])},c=f=>{f&&e(1,r=f)},d=f=>f.color!=r;return o.$$set=f=>{"class"in f&&e(0,a=f.class)},[a,r,l,i,c,d]}class Ze extends U{constructor(t){super();V(this,t,Ye,Xe,B,{class:0})}}function ze(o){let t,e,l,s,a,r,n;return s=new Ze({}),r=new je({props:{class:"mt-50"}}),{c(){t=Ue(),e=b("section"),l=b("div"),q(s.$$.fragment),q(r.$$.fragment),this.h()},l(i){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=Be(i),e=y(i,"SECTION",{class:!0});var d=T(e);l=y(d,"DIV",{class:!0});var f=T(l);M(s.$$.fragment,f),f.forEach(p),d.forEach(p),M(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(l,"class","container"),k(e,"class",a=""+(o[0]+" mt-50 svelte-hols8d"))},m(i,c){I(i,t,c),I(i,e,c),w(e,l),P(s,l,null),P(r,i,c),n=!0},p(i,[c]){(!n||c&1&&a!==(a=""+(i[0]+" mt-50 svelte-hols8d")))&&k(e,"class",a)},i(i){n||(F(s.$$.fragment,i),F(r.$$.fragment,i),n=!0)},o(i){D(s.$$.fragment,i),D(r.$$.fragment,i),n=!1},d(i){i&&p(t),i&&p(e),R(s),R(r,i)}}}function Ge(o,t,e){let{class:l=""}=t;return o.$$set=s=>{"class"in s&&e(0,l=s.class)},[l]}class Je extends U{constructor(t){super();V(this,t,Ge,ze,B,{class:0})}}export{Je as default};