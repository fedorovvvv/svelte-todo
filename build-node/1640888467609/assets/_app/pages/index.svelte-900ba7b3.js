import{K as Oe,C as Ae,S as P,i as q,s as M,e as b,c as y,a as E,d as m,b as k,f as F,D as C,L as N,M as B,N as ae,t as re,g as ie,O,h as ce,P as W,Q as Se,E as U,R as ue,T as X,v as R,w as j,x as K,U as Z,V as z,W as G,p as A,X as H,Y as fe,n as S,Z as _e,A as Q,m as J,o as $,_ as Ue,$ as x,a0 as ee,a1 as Ve,a2 as de,a3 as Be,a4 as Le,a5 as he,a6 as ke,j as Pe,a7 as qe,l as Me}from"../chunks/vendor-935e33b2.js";const V=Ae([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),me=Oe(V,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=a.filter(l=>l.color).map(l=>l.color).concat(e),r=n.filter((l,i)=>n.indexOf(l)===i).map((l,i)=>({id:i,color:l}));t(r)});function ge(a,t,e){const s=a.slice();return s[13]=t[e],s}function ve(a,t){let e,s,n,c,r;return{key:a,first:null,c(){e=b("li"),s=b("button"),this.h()},l(l){e=y(l,"LI",{class:!0});var i=E(e);s=y(i,"BUTTON",{class:!0,style:!0}),E(s).forEach(m),i.forEach(m),this.h()},h(){k(s,"class","task__color-btn svelte-gk1lxe"),k(s,"style",n=`background-color: ${t[13].color}`),k(e,"class","task__color-item svelte-gk1lxe"),this.first=e},m(l,i){F(l,e,i),C(e,s),c||(r=N(s,"click",B(function(){ae(t[8](t[13].color))&&t[8](t[13].color).apply(this,arguments)})),c=!0)},p(l,i){t=l,i&36&&n!==(n=`background-color: ${t[13].color}`)&&k(s,"style",n)},d(l){l&&m(e),c=!1,r()}}}function Re(a){let t,e,s,n,c,r,l,i,u,_=[],g=new Map,p,T,h,f,o,d,I=a[5].filter(a[10]);const L=v=>v[13].id;for(let v=0;v<I.length;v+=1){let w=ge(a,I,v),D=L(w);g.set(D,_[v]=ve(D,w))}return{c(){t=b("div"),e=b("div"),s=b("p"),n=re(a[1]),c=b("div"),r=b("div"),l=b("button"),i=b("span"),u=b("ul");for(let v=0;v<_.length;v+=1)_[v].c();T=b("button"),h=b("span"),this.h()},l(v){t=y(v,"DIV",{class:!0});var w=E(t);e=y(w,"DIV",{class:!0});var D=E(e);s=y(D,"P",{class:!0});var te=E(s);n=ie(te,a[1]),te.forEach(m),c=y(D,"DIV",{class:!0}),E(c).forEach(m),D.forEach(m),r=y(w,"DIV",{class:!0});var le=E(r);l=y(le,"BUTTON",{class:!0});var se=E(l);i=y(se,"SPAN",{class:!0}),E(i).forEach(m),se.forEach(m),le.forEach(m),u=y(w,"UL",{class:!0,style:!0});var ne=E(u);for(let Y=0;Y<_.length;Y+=1)_[Y].l(ne);ne.forEach(m),T=y(w,"BUTTON",{class:!0});var oe=E(T);h=y(oe,"SPAN",{class:!0}),E(h).forEach(m),oe.forEach(m),w.forEach(m),this.h()},h(){k(s,"class","svelte-gk1lxe"),k(c,"class","task__info svelte-gk1lxe"),k(e,"class","task__main svelte-gk1lxe"),k(i,"class","svg-image-del svelte-gk1lxe"),k(l,"class","task__menu-btn task__menu-btn_del svelte-gk1lxe"),k(r,"class","task__circle task__menu svelte-gk1lxe"),k(u,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-gk1lxe"),k(u,"style",p=`background-color: ${a[2]}`),k(h,"class","svelte-gk1lxe"),k(T,"class","task__info-open svelte-gk1lxe"),k(t,"class",f="task "+a[0]+" svelte-gk1lxe"),O(t,"isDisabled",a[3]),O(t,"isOpen",a[4])},m(v,w){F(v,t,w),C(t,e),C(e,s),C(s,n),C(e,c),C(t,r),C(r,l),C(l,i),C(t,u);for(let D=0;D<_.length;D+=1)_[D].m(u,null);C(t,T),C(T,h),o||(d=[N(e,"click",a[6]),N(l,"click",B(a[7])),N(T,"click",B(a[11]))],o=!0)},p(v,[w]){w&2&&ce(n,v[1]),w&292&&(I=v[5].filter(v[10]),_=W(_,w,L,1,v,I,g,u,Se,ve,null,ge)),w&4&&p!==(p=`background-color: ${v[2]}`)&&k(u,"style",p),w&1&&f!==(f="task "+v[0]+" svelte-gk1lxe")&&k(t,"class",f),w&9&&O(t,"isDisabled",v[3]),w&17&&O(t,"isOpen",v[4])},i:U,o:U,d(v){v&&m(t);for(let w=0;w<_.length;w+=1)_[w].d();o=!1,ue(d)}}}function je(a,t,e){let s,n;X(a,V,o=>e(12,s=o)),X(a,me,o=>e(5,n=o));let{class:c=""}=t,{text:r=""}=t,{color:l="#0029FF"}=t,{disabled:i=!1}=t,{id:u=null}=t,_=!1;const g=()=>{let o=s.map(d=>(u===d.id&&(d.done=!d.done),d));V.set(o)},p=()=>{let o=s.filter(d=>d.id!=u);V.set(o),console.log("del",u)},T=o=>{let d=s.map(I=>(u===I.id&&(I.color=o),I));V.set(d)},h=o=>o.color!=l,f=()=>e(4,_=!_);return a.$$set=o=>{"class"in o&&e(0,c=o.class),"text"in o&&e(1,r=o.text),"color"in o&&e(2,l=o.color),"disabled"in o&&e(3,i=o.disabled),"id"in o&&e(9,u=o.id)},[c,r,l,i,_,n,g,p,T,u,h,f]}class pe extends P{constructor(t){super();q(this,t,je,Re,M,{class:0,text:1,color:2,disabled:3,id:9})}}function be(a,t,e){const s=a.slice();return s[4]=t[e],s}function ye(a,t,e){const s=a.slice();return s[4]=t[e],s}function Ee(a,t){let e,s,n,c,r,l=U,i;return s=new pe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:a,first:null,c(){e=b("li"),R(s.$$.fragment),this.h()},l(u){e=y(u,"LI",{class:!0});var _=E(e);j(s.$$.fragment,_),_.forEach(m),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),K(s,e,null),i=!0},p(u,_){t=u;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),s.$set(g)},r(){r=e.getBoundingClientRect()},f(){Z(e),l(),z(e,r)},a(){l(),l=G(e,r,x,{duration:300})},i(u){i||(A(s.$$.fragment,u),H(()=>{c&&c.end(1),n=fe(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(u){S(s.$$.fragment,u),n&&n.invalidate(),c=_e(e,t[2],{key:t[4].id}),i=!1},d(u){u&&m(e),Q(s),u&&c&&c.end()}}}function Te(a,t){let e,s,n,c,r,l=U,i;return s=new pe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:a,first:null,c(){e=b("li"),R(s.$$.fragment),this.h()},l(u){e=y(u,"LI",{class:!0});var _=E(e);j(s.$$.fragment,_),_.forEach(m),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),K(s,e,null),i=!0},p(u,_){t=u;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),s.$set(g)},r(){r=e.getBoundingClientRect()},f(){Z(e),l(),z(e,r)},a(){l(),l=G(e,r,x,{duration:300})},i(u){i||(A(s.$$.fragment,u),H(()=>{c&&c.end(1),n=fe(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(u){S(s.$$.fragment,u),n&&n.invalidate(),c=_e(e,t[2],{key:t[4].id}),i=!1},d(u){u&&m(e),Q(s),u&&c&&c.end()}}}function Ke(a){let t,e,s,n=[],c=new Map,r,l=[],i=new Map,u,_,g=a[1].filter(we);const p=f=>f[4].id;for(let f=0;f<g.length;f+=1){let o=ye(a,g,f),d=p(o);c.set(d,n[f]=Ee(d,o))}let T=a[1].filter(Ce);const h=f=>f[4].id;for(let f=0;f<T.length;f+=1){let o=be(a,T,f),d=h(o);i.set(d,l[f]=Te(d,o))}return{c(){t=b("section"),e=b("div"),s=b("ul");for(let f=0;f<n.length;f+=1)n[f].c();r=b("ul");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){t=y(f,"SECTION",{class:!0});var o=E(t);e=y(o,"DIV",{class:!0});var d=E(e);s=y(d,"UL",{class:!0});var I=E(s);for(let v=0;v<n.length;v+=1)n[v].l(I);I.forEach(m),r=y(d,"UL",{class:!0});var L=E(r);for(let v=0;v<l.length;v+=1)l[v].l(L);L.forEach(m),d.forEach(m),o.forEach(m),this.h()},h(){k(s,"class","task-section__col"),k(r,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",u="task-section "+a[0]+" svelte-1rib3cm")},m(f,o){F(f,t,o),C(t,e),C(e,s);for(let d=0;d<n.length;d+=1)n[d].m(s,null);C(e,r);for(let d=0;d<l.length;d+=1)l[d].m(r,null);_=!0},p(f,[o]){if(o&2){g=f[1].filter(we),J();for(let d=0;d<n.length;d+=1)n[d].r();n=W(n,o,p,1,f,g,c,s,ee,Ee,null,ye);for(let d=0;d<n.length;d+=1)n[d].a();$()}if(o&2){T=f[1].filter(Ce),J();for(let d=0;d<l.length;d+=1)l[d].r();l=W(l,o,h,1,f,T,i,r,ee,Te,null,be);for(let d=0;d<l.length;d+=1)l[d].a();$()}(!_||o&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&k(t,"class",u)},i(f){if(!_){for(let o=0;o<g.length;o+=1)A(n[o]);for(let o=0;o<T.length;o+=1)A(l[o]);_=!0}},o(f){for(let o=0;o<n.length;o+=1)S(n[o]);for(let o=0;o<l.length;o+=1)S(l[o]);_=!1},d(f){f&&m(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<l.length;o+=1)l[o].d()}}}const we=a=>!a.done,Ce=a=>a.done;function Qe(a,t,e){let s;X(a,V,l=>e(1,s=l));let{class:n=""}=t;const[c,r]=Ue({duration:l=>Math.sqrt(l*200),fallback(l,i){const u=getComputedStyle(l),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ve,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return a.$$set=l=>{"class"in l&&e(0,n=l.class)},[n,s,c,r]}class We extends P{constructor(t){super();q(this,t,Qe,Ke,M,{class:0})}}function Fe(a){let t,e,s,n=a[2].text&&Ie(a);return{c(){t=b("button"),n&&n.c(),this.h()},l(c){t=y(c,"BUTTON",{class:!0});var r=E(t);n&&n.l(r),r.forEach(m),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(c,r){F(c,t,r),n&&n.m(t,null),e||(s=N(t,"click",B(a[6])),e=!0)},p(c,r){c[2].text?n?n.p(c,r):(n=Ie(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&m(t),n&&n.d(),e=!1,s()}}}function Ie(a){let t=a[2].text+"",e;return{c(){e=re(t)},l(s){e=ie(s,t)},m(s,n){F(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&ce(e,t)},d(s){s&&m(e)}}}function Xe(a){let t,e,s,n,c,r=a[2]&&Fe(a);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(l){t=y(l,"DIV",{class:!0});var i=E(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(m),this.h()},h(){k(e,"placeholder",a[1]),k(e,"class","svelte-12pihab"),k(t,"class",s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),O(t,"isError",a[5])},m(l,i){F(l,t,i),C(t,e),de(e,a[4]),r&&r.m(t,null),a[11](t),n||(c=[N(e,"input",a[9]),N(e,"input",a[7]),N(e,"keydown",a[10])],n=!0)},p(l,[i]){i&2&&k(e,"placeholder",l[1]),i&16&&e.value!==l[4]&&de(e,l[4]),l[2]?r?r.p(l,i):(r=Fe(l),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&s!==(s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",s),i&37&&O(t,"isError",l[5])},i:U,o:U,d(l){l&&m(t),r&&r.d(),a[11](null),n=!1,ue(c)}}}function Ye(a,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,r,l,i=!1;const u=Be(),_=()=>{l?(u("submit",{value:l}),e(4,l="")):e(5,i=!0)},g=()=>{e(5,i=!1)},p=o=>{let d=o.key;d==="Control"&&u("color"),d==="Enter"&&_()};function T(){l=this.value,e(4,l)}const h=o=>p(o);function f(o){Le[o?"unshift":"push"](()=>{r=o,e(3,r)})}return a.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[s,n,c,r,l,i,_,g,p,T,h,f]}class Ze extends P{constructor(t){super();q(this,t,Ye,Xe,M,{class:0,placeholder:1,btn:2})}}function De(a,t,e){const s=a.slice();return s[9]=t[e],s[11]=e,s}function Ne(a,t){let e,s,n,c,r=U,l,i,u;return{key:a,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),E(e).forEach(m),this.h()},h(){k(e,"class","add-todo__color svelte-y5nf6k"),k(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){F(_,e,g),l=!0,i||(u=N(e,"click",B(function(){ae(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,g){t=_,(!l||g&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&k(e,"style",s)},r(){c=e.getBoundingClientRect()},f(){Z(e),r(),z(e,c)},a(){r(),r=G(e,c,x,{})},i(_){l||(H(()=>{n||(n=he(e,ke,{},!0)),n.run(1)}),l=!0)},o(_){n||(n=he(e,ke,{},!1)),n.run(0),l=!1},d(_){_&&m(e),_&&n&&n.end(),i=!1,u()}}}function ze(a){let t,e,s,n,c=[],r=new Map,l,i,u,_,g,p=a[3].filter(a[7]);const T=h=>h[9].id;for(let h=0;h<p.length;h+=1){let f=De(a,p,h),o=T(f);r.set(o,c[h]=Ne(o,f))}return l=new Ze({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("color",a[8]),l.$on("submit",a[4]),{c(){t=b("div"),e=b("div"),s=b("span");for(let h=0;h<c.length;h+=1)c[h].c();R(l.$$.fragment),this.h()},l(h){t=y(h,"DIV",{class:!0});var f=E(t);e=y(f,"DIV",{class:!0});var o=E(e);s=y(o,"SPAN",{class:!0,style:!0}),E(s).forEach(m);for(let d=0;d<c.length;d+=1)c[d].l(o);o.forEach(m),j(l.$$.fragment,f),f.forEach(m),this.h()},h(){k(s,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),k(s,"style",n=`color: ${a[1]}`),k(e,"class","add-todo__color-list svelte-y5nf6k"),O(e,"isOpen",a[2]),k(t,"class",i="add-todo "+a[0]+" svelte-y5nf6k")},m(h,f){F(h,t,f),C(t,e),C(e,s);for(let o=0;o<c.length;o+=1)c[o].m(e,null);K(l,t,null),u=!0,_||(g=N(s,"click",B(a[6])),_=!0)},p(h,[f]){if((!u||f&2&&n!==(n=`color: ${h[1]}`))&&k(s,"style",n),f&42){p=h[3].filter(h[7]),J();for(let o=0;o<c.length;o+=1)c[o].r();c=W(c,f,T,1,h,p,r,e,ee,Ne,null,De);for(let o=0;o<c.length;o+=1)c[o].a();$()}f&4&&O(e,"isOpen",h[2]),(!u||f&1&&i!==(i="add-todo "+h[0]+" svelte-y5nf6k"))&&k(t,"class",i)},i(h){if(!u){for(let f=0;f<p.length;f+=1)A(c[f]);A(l.$$.fragment,h),u=!0}},o(h){for(let f=0;f<c.length;f+=1)S(c[f]);S(l.$$.fragment,h),u=!1},d(h){h&&m(t);for(let f=0;f<c.length;f+=1)c[f].d();Q(l),_=!1,g()}}}function Ge(a,t,e){let s;X(a,me,p=>e(3,s=p));let{class:n=""}=t,c="#0029FF",r=!1;const l=p=>{let T={id:Date.now(),text:p.detail.value,color:c,done:!1};V.update(h=>h=[T,...h])},i=p=>p&&e(1,c=p),u=()=>e(2,r=!r),_=p=>p.color!=c,g=()=>e(2,r=!r);return a.$$set=p=>{"class"in p&&e(0,n=p.class)},[n,c,r,s,l,i,u,_,g]}class He extends P{constructor(t){super();q(this,t,Ge,ze,M,{class:0})}}function Je(a){let t,e,s,n,c,r,l;return n=new He({}),r=new We({props:{class:"mt-50"}}),{c(){t=Pe(),e=b("section"),s=b("div"),R(n.$$.fragment),R(r.$$.fragment),this.h()},l(i){qe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(m),t=Me(i),e=y(i,"SECTION",{class:!0});var _=E(e);s=y(_,"DIV",{class:!0});var g=E(s);j(n.$$.fragment,g),g.forEach(m),_.forEach(m),j(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(s,"class","container"),k(e,"class",c=""+(a[0]+" mt-50 svelte-hols8d"))},m(i,u){F(i,t,u),F(i,e,u),C(e,s),K(n,s,null),K(r,i,u),l=!0},p(i,[u]){(!l||u&1&&c!==(c=""+(i[0]+" mt-50 svelte-hols8d")))&&k(e,"class",c)},i(i){l||(A(n.$$.fragment,i),A(r.$$.fragment,i),l=!0)},o(i){S(n.$$.fragment,i),S(r.$$.fragment,i),l=!1},d(i){i&&m(t),i&&m(e),Q(n),Q(r,i)}}}function $e(a,t,e){let{class:s=""}=t;return a.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class et extends P{constructor(t){super();q(this,t,$e,Je,M,{class:0})}}export{et as default};