import{K as Ee,C as Te,S as F,i as V,s as q,e as y,c as g,a as p,d as _,b as v,f as N,D as I,t as G,g as H,L as Q,M,N as J,h as $,O as W,P as ze,E as B,Q as x,R as X,v as P,w as R,x as j,T as ee,U as te,V as le,p as O,W as se,X as ne,n as U,Y as ae,A as K,m as oe,o as ie,Z as Ie,_ as re,$ as ce,a0 as Ne,a1 as ue,a2 as we,a3 as Oe,j as Ue,a4 as Le,l as Be}from"../chunks/vendor-d1f6c60f.js";const D=Te([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]),De=Ee(D,(o,e)=>{let t=o.filter(l=>l.color).map(l=>l.color),s=t.filter((l,i)=>t.indexOf(l)===i);e(s)});function _e(o,e,t){const s=o.slice();return s[3]=e[t],s[10]=t,s}function fe(o,e){let t,s,l,i,a,n,r,c,k,m,b,T,z,h,f,u;return{key:o,first:null,c(){t=y("li"),s=y("button"),l=y("li"),i=y("button"),a=y("li"),n=y("button"),r=y("li"),c=y("button"),k=y("li"),m=y("button"),b=y("li"),T=y("button"),z=y("li"),h=y("button"),f=y("li"),u=y("button"),this.h()},l(d){t=g(d,"LI",{class:!0});var E=p(t);s=g(E,"BUTTON",{class:!0}),p(s).forEach(_),E.forEach(_),l=g(d,"LI",{class:!0});var w=p(l);i=g(w,"BUTTON",{class:!0}),p(i).forEach(_),w.forEach(_),a=g(d,"LI",{class:!0});var A=p(a);n=g(A,"BUTTON",{class:!0}),p(n).forEach(_),A.forEach(_),r=g(d,"LI",{class:!0});var C=p(r);c=g(C,"BUTTON",{class:!0}),p(c).forEach(_),C.forEach(_),k=g(d,"LI",{class:!0});var S=p(k);m=g(S,"BUTTON",{class:!0}),p(m).forEach(_),S.forEach(_),b=g(d,"LI",{class:!0});var L=p(b);T=g(L,"BUTTON",{class:!0}),p(T).forEach(_),L.forEach(_),z=g(d,"LI",{class:!0});var Y=p(z);h=g(Y,"BUTTON",{class:!0}),p(h).forEach(_),Y.forEach(_),f=g(d,"LI",{class:!0});var Z=p(f);u=g(Z,"BUTTON",{class:!0}),p(u).forEach(_),Z.forEach(_),this.h()},h(){v(s,"class","task__color-btn svelte-znykyn"),v(t,"class","task__color-item svelte-znykyn"),v(i,"class","task__color-btn svelte-znykyn"),v(l,"class","task__color-item svelte-znykyn"),v(n,"class","task__color-btn svelte-znykyn"),v(a,"class","task__color-item svelte-znykyn"),v(c,"class","task__color-btn svelte-znykyn"),v(r,"class","task__color-item svelte-znykyn"),v(m,"class","task__color-btn svelte-znykyn"),v(k,"class","task__color-item svelte-znykyn"),v(T,"class","task__color-btn svelte-znykyn"),v(b,"class","task__color-item svelte-znykyn"),v(h,"class","task__color-btn svelte-znykyn"),v(z,"class","task__color-item svelte-znykyn"),v(u,"class","task__color-btn svelte-znykyn"),v(f,"class","task__color-item svelte-znykyn"),this.first=t},m(d,E){N(d,t,E),I(t,s),N(d,l,E),I(l,i),N(d,a,E),I(a,n),N(d,r,E),I(r,c),N(d,k,E),I(k,m),N(d,b,E),I(b,T),N(d,z,E),I(z,h),N(d,f,E),I(f,u)},p(d,E){},d(d){d&&_(t),d&&_(l),d&&_(a),d&&_(r),d&&_(k),d&&_(b),d&&_(z),d&&_(f)}}}function Ae(o){let e,t,s,l,i,a,n,r,c=[],k=new Map,m,b,T,z,h=o[4];const f=u=>u[10];for(let u=0;u<h.length;u+=1){let d=_e(o,h,u),E=f(d);k.set(E,c[u]=fe(E))}return{c(){e=y("div"),t=y("div"),s=y("p"),l=G(o[1]),i=y("div"),a=y("button"),n=y("span"),r=y("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=g(u,"DIV",{class:!0});var d=p(e);t=g(d,"DIV",{class:!0});var E=p(t);s=g(E,"P",{class:!0});var w=p(s);l=H(w,o[1]),w.forEach(_),E.forEach(_),i=g(d,"DIV",{class:!0});var A=p(i);a=g(A,"BUTTON",{class:!0});var C=p(a);n=g(C,"SPAN",{class:!0}),p(n).forEach(_),C.forEach(_),A.forEach(_),r=g(d,"UL",{class:!0,style:!0});var S=p(r);for(let L=0;L<c.length;L+=1)c[L].l(S);S.forEach(_),d.forEach(_),this.h()},h(){v(s,"class","svelte-znykyn"),v(t,"class","task__main svelte-znykyn"),v(n,"class","svg-image-del svelte-znykyn"),v(a,"class","task__menu-btn task__menu-btn_del svelte-znykyn"),v(i,"class","task__circle task__menu svelte-znykyn"),v(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-znykyn"),v(r,"style",m=`background-color: ${o[3]}`),v(e,"class",b="task "+o[0]+" svelte-znykyn"),Q(e,"isDisabled",o[2])},m(u,d){N(u,e,d),I(e,t),I(t,s),I(s,l),I(e,i),I(i,a),I(a,n),I(e,r);for(let E=0;E<c.length;E+=1)c[E].m(r,null);T||(z=[M(t,"click",o[5]),M(a,"click",J(o[6]))],T=!0)},p(u,[d]){d&2&&$(l,u[1]),d&16&&(h=u[4],c=W(c,d,f,0,u,h,k,r,ze,fe,null,_e)),d&8&&m!==(m=`background-color: ${u[3]}`)&&v(r,"style",m),d&1&&b!==(b="task "+u[0]+" svelte-znykyn")&&v(e,"class",b),d&5&&Q(e,"isDisabled",u[2])},i:B,o:B,d(u){u&&_(e);for(let d=0;d<c.length;d+=1)c[d].d();T=!1,x(z)}}}function Ce(o,e,t){let s,l;X(o,D,b=>t(8,s=b)),X(o,De,b=>t(4,l=b));let{class:i=""}=e,{text:a=""}=e,{color:n="#0029FF"}=e,{disabled:r=!1}=e,{id:c=null}=e;const k=()=>{let b=s.map(T=>(c===T.id&&(T.done=!T.done),T));D.set(b)},m=()=>{let b=s.filter(T=>T.id!=c);D.set(b),console.log("del",c)};return o.$$set=b=>{"class"in b&&t(0,i=b.class),"text"in b&&t(1,a=b.text),"color"in b&&t(3,n=b.color),"disabled"in b&&t(2,r=b.disabled),"id"in b&&t(7,c=b.id)},[i,a,r,n,l,k,m,c]}class de extends F{constructor(e){super();V(this,e,Ce,Ae,q,{class:0,text:1,color:3,disabled:2,id:7})}}function he(o,e,t){const s=o.slice();return s[4]=e[t],s}function ve(o,e,t){const s=o.slice();return s[4]=e[t],s}function ke(o,e){let t,s,l,i,a,n=B,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=y("li"),P(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var k=p(t);R(s.$$.fragment,k),k.forEach(_),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,k){N(c,t,k),j(s,t,null),r=!0},p(c,k){e=c;const m={};k&2&&(m.text=e[4].text),k&2&&(m.color=e[4].color?e[4].color:null),k&2&&(m.id=e[4].id),s.$set(m)},r(){a=t.getBoundingClientRect()},f(){ee(t),n(),te(t,a)},a(){n(),n=le(t,a,re,{duration:300})},i(c){r||(O(s.$$.fragment,c),se(()=>{i&&i.end(1),l=ne(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){U(s.$$.fragment,c),l&&l.invalidate(),i=ae(t,e[2],{key:e[4].id}),r=!1},d(c){c&&_(t),K(s),c&&i&&i.end()}}}function me(o,e){let t,s,l,i,a,n=B,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=y("li"),P(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var k=p(t);R(s.$$.fragment,k),k.forEach(_),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,k){N(c,t,k),j(s,t,null),r=!0},p(c,k){e=c;const m={};k&2&&(m.text=e[4].text),k&2&&(m.color=e[4].color?e[4].color:null),k&2&&(m.id=e[4].id),s.$set(m)},r(){a=t.getBoundingClientRect()},f(){ee(t),n(),te(t,a)},a(){n(),n=le(t,a,re,{duration:300})},i(c){r||(O(s.$$.fragment,c),se(()=>{i&&i.end(1),l=ne(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){U(s.$$.fragment,c),l&&l.invalidate(),i=ae(t,e[2],{key:e[4].id}),r=!1},d(c){c&&_(t),K(s),c&&i&&i.end()}}}function Se(o){let e,t,s,l=[],i=new Map,a,n=[],r=new Map,c,k,m=o[1].filter(be);const b=h=>h[4].id;for(let h=0;h<m.length;h+=1){let f=ve(o,m,h),u=b(f);i.set(u,l[h]=ke(u,f))}let T=o[1].filter(ye);const z=h=>h[4].id;for(let h=0;h<T.length;h+=1){let f=he(o,T,h),u=z(f);r.set(u,n[h]=me(u,f))}return{c(){e=y("section"),t=y("div"),s=y("ul");for(let h=0;h<l.length;h+=1)l[h].c();a=y("ul");for(let h=0;h<n.length;h+=1)n[h].c();this.h()},l(h){e=g(h,"SECTION",{class:!0});var f=p(e);t=g(f,"DIV",{class:!0});var u=p(t);s=g(u,"UL",{class:!0});var d=p(s);for(let w=0;w<l.length;w+=1)l[w].l(d);d.forEach(_),a=g(u,"UL",{class:!0});var E=p(a);for(let w=0;w<n.length;w+=1)n[w].l(E);E.forEach(_),u.forEach(_),f.forEach(_),this.h()},h(){v(s,"class","task-section__col"),v(a,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(h,f){N(h,e,f),I(e,t),I(t,s);for(let u=0;u<l.length;u+=1)l[u].m(s,null);I(t,a);for(let u=0;u<n.length;u+=1)n[u].m(a,null);k=!0},p(h,[f]){if(f&2){m=h[1].filter(be),oe();for(let u=0;u<l.length;u+=1)l[u].r();l=W(l,f,b,1,h,m,i,s,ce,ke,null,ve);for(let u=0;u<l.length;u+=1)l[u].a();ie()}if(f&2){T=h[1].filter(ye),oe();for(let u=0;u<n.length;u+=1)n[u].r();n=W(n,f,z,1,h,T,r,a,ce,me,null,he);for(let u=0;u<n.length;u+=1)n[u].a();ie()}(!k||f&1&&c!==(c="task-section "+h[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(h){if(!k){for(let f=0;f<m.length;f+=1)O(l[f]);for(let f=0;f<T.length;f+=1)O(n[f]);k=!0}},o(h){for(let f=0;f<l.length;f+=1)U(l[f]);for(let f=0;f<n.length;f+=1)U(n[f]);k=!1},d(h){h&&_(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<n.length;f+=1)n[f].d()}}}const be=o=>!o.done,ye=o=>o.done;function Fe(o,e,t){let s;X(o,D,n=>t(1,s=n));let{class:l=""}=e;const[i,a]=Ie({duration:n=>Math.sqrt(n*200),fallback(n,r){const c=getComputedStyle(n),k=c.transform==="none"?"":c.transform;return{duration:600,easing:Ne,css:m=>`
					transform: ${k} scale(${m});
					opacity: ${m}
				`}}});return o.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s,i,a]}class Ve extends F{constructor(e){super();V(this,e,Fe,Se,q,{class:0})}}function ge(o){let e,t,s,l=o[2].text&&pe(o);return{c(){e=y("button"),l&&l.c(),this.h()},l(i){e=g(i,"BUTTON",{class:!0});var a=p(e);l&&l.l(a),a.forEach(_),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(i,a){N(i,e,a),l&&l.m(e,null),t||(s=M(e,"click",J(o[6])),t=!0)},p(i,a){i[2].text?l?l.p(i,a):(l=pe(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&_(e),l&&l.d(),t=!1,s()}}}function pe(o){let e=o[2].text+"",t;return{c(){t=G(e)},l(s){t=H(s,e)},m(s,l){N(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&$(t,e)},d(s){s&&_(t)}}}function qe(o){let e,t,s,l,i,a=o[2]&&ge(o);return{c(){e=y("div"),t=y("input"),a&&a.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var r=p(e);t=g(r,"INPUT",{placeholder:!0,class:!0}),a&&a.l(r),r.forEach(_),this.h()},h(){v(t,"placeholder",o[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),Q(e,"isError",o[5])},m(n,r){N(n,e,r),I(e,t),ue(t,o[4]),a&&a.m(e,null),o[9](e),l||(i=[M(t,"input",o[8]),M(t,"input",o[7])],l=!0)},p(n,[r]){r&2&&v(t,"placeholder",n[1]),r&16&&t.value!==n[4]&&ue(t,n[4]),n[2]?a?a.p(n,r):(a=ge(n),a.c(),a.m(e,null)):a&&(a.d(1),a=null),r&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),r&37&&Q(e,"isError",n[5])},i:B,o:B,d(n){n&&_(e),a&&a.d(),o[9](null),l=!1,x(i)}}}function Me(o,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:i=null}=e,a,n,r=!1;const c=we(),k=()=>{n?(c("submit",{value:n}),t(4,n="")):t(5,r=!0)},m=()=>{t(5,r=!1)};function b(){n=this.value,t(4,n)}function T(z){Oe[z?"unshift":"push"](()=>{a=z,t(3,a)})}return o.$$set=z=>{"class"in z&&t(0,s=z.class),"placeholder"in z&&t(1,l=z.placeholder),"btn"in z&&t(2,i=z.btn)},[s,l,i,a,n,r,k,m,b,T]}class Pe extends F{constructor(e){super();V(this,e,Me,qe,q,{class:0,placeholder:1,btn:2})}}function Re(o){let e,t,s,l;return t=new Pe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=y("div"),P(t.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var a=p(e);R(t.$$.fragment,a),a.forEach(_),this.h()},h(){v(e,"class",s="add-todo "+o[0]+" svelte-hols8d")},m(i,a){N(i,e,a),j(t,e,null),l=!0},p(i,[a]){(!l||a&1&&s!==(s="add-todo "+i[0]+" svelte-hols8d"))&&v(e,"class",s)},i(i){l||(O(t.$$.fragment,i),l=!0)},o(i){U(t.$$.fragment,i),l=!1},d(i){i&&_(e),K(t)}}}function je(o,e,t){let{class:s=""}=e;const l=i=>{let a={id:Date.now(),text:i.detail.value,color:null,done:!1};D.update(n=>n=[a,...n])};return o.$$set=i=>{"class"in i&&t(0,s=i.class)},[s,l]}class Ke extends F{constructor(e){super();V(this,e,je,Re,q,{class:0})}}function Qe(o){let e,t,s,l,i,a,n;return l=new Ke({}),a=new Ve({props:{class:"mt-50"}}),{c(){e=Ue(),t=y("section"),s=y("div"),P(l.$$.fragment),P(a.$$.fragment),this.h()},l(r){Le('[data-svelte="svelte-1ms75pp"]',document.head).forEach(_),e=Be(r),t=g(r,"SECTION",{class:!0});var k=p(t);s=g(k,"DIV",{class:!0});var m=p(s);R(l.$$.fragment,m),m.forEach(_),k.forEach(_),R(a.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",i=""+(o[0]+" mt-50 svelte-hols8d"))},m(r,c){N(r,e,c),N(r,t,c),I(t,s),j(l,s,null),j(a,r,c),n=!0},p(r,[c]){(!n||c&1&&i!==(i=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",i)},i(r){n||(O(l.$$.fragment,r),O(a.$$.fragment,r),n=!0)},o(r){U(l.$$.fragment,r),U(a.$$.fragment,r),n=!1},d(r){r&&_(e),r&&_(t),K(l),K(a,r)}}}function We(o,e,t){let{class:s=""}=e;return o.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Ye extends F{constructor(e){super();V(this,e,We,Qe,q,{class:0})}}export{Ye as default};