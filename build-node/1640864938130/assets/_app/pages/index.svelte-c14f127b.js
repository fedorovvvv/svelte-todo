import{K as Ie,C as Ne,S as U,i as V,s as L,e as b,c as y,a as T,d as p,b as v,f as N,D as w,L as F,M as R,N as J,t as $,g as x,O as j,h as ee,P as K,Q as Ae,E as O,R as te,T as Q,v as q,w as B,x as M,U as le,V as se,W as ne,p as C,X,Y as ae,n as D,Z as oe,A as P,m as Y,o as Z,_ as Ce,$ as re,a0 as ie,a1 as De,a2 as ce,a3 as Fe,a4 as Se,a5 as ue,a6 as Oe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-3fb21fa7.js";const S=Ne([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),fe=Ie(S,(o,e)=>{let t=o.filter(r=>r.color).map(r=>r.color),s=t.filter((r,c)=>t.indexOf(r)===c).map((r,c)=>({id:c,color:r}));e(s)});function _e(o,e,t){const l=o.slice();return l[11]=e[t],l}function de(o,e){let t,l,s,r,c;return{key:o,first:null,c(){t=b("li"),l=b("button"),this.h()},l(n){t=y(n,"LI",{class:!0});var a=T(t);l=y(a,"BUTTON",{class:!0,style:!0}),T(l).forEach(p),a.forEach(p),this.h()},h(){v(l,"class","task__color-btn svelte-100588h"),v(l,"style",s=`background-color: ${e[11].color}`),v(t,"class","task__color-item svelte-100588h"),this.first=t},m(n,a){N(n,t,a),w(t,l),r||(c=F(l,"click",R(function(){J(e[7](e[11].color))&&e[7](e[11].color).apply(this,arguments)})),r=!0)},p(n,a){e=n,a&20&&s!==(s=`background-color: ${e[11].color}`)&&v(l,"style",s)},d(n){n&&p(t),r=!1,c()}}}function qe(o){let e,t,l,s,r,c,n,a,i=[],h=new Map,k,g,m,_,f=o[4].filter(o[9]);const d=u=>u[11].id;for(let u=0;u<f.length;u+=1){let E=_e(o,f,u),I=d(E);h.set(I,i[u]=de(I,E))}return{c(){e=b("div"),t=b("div"),l=b("p"),s=$(o[1]),r=b("div"),c=b("button"),n=b("span"),a=b("ul");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=y(u,"DIV",{class:!0});var E=T(e);t=y(E,"DIV",{class:!0});var I=T(t);l=y(I,"P",{class:!0});var A=T(l);s=x(A,o[1]),A.forEach(p),I.forEach(p),r=y(E,"DIV",{class:!0});var z=T(r);c=y(z,"BUTTON",{class:!0});var G=T(c);n=y(G,"SPAN",{class:!0}),T(n).forEach(p),G.forEach(p),z.forEach(p),a=y(E,"UL",{class:!0,style:!0});var H=T(a);for(let W=0;W<i.length;W+=1)i[W].l(H);H.forEach(p),E.forEach(p),this.h()},h(){v(l,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(n,"class","svg-image-del svelte-100588h"),v(c,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(r,"class","task__circle task__menu svelte-100588h"),v(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(a,"style",k=`background-color: ${o[2]}`),v(e,"class",g="task "+o[0]+" svelte-100588h"),j(e,"isDisabled",o[3])},m(u,E){N(u,e,E),w(e,t),w(t,l),w(l,s),w(e,r),w(r,c),w(c,n),w(e,a);for(let I=0;I<i.length;I+=1)i[I].m(a,null);m||(_=[F(t,"click",o[5]),F(c,"click",R(o[6]))],m=!0)},p(u,[E]){E&2&&ee(s,u[1]),E&148&&(f=u[4].filter(u[9]),i=K(i,E,d,1,u,f,h,a,Ae,de,null,_e)),E&4&&k!==(k=`background-color: ${u[2]}`)&&v(a,"style",k),E&1&&g!==(g="task "+u[0]+" svelte-100588h")&&v(e,"class",g),E&9&&j(e,"isDisabled",u[3])},i:O,o:O,d(u){u&&p(e);for(let E=0;E<i.length;E+=1)i[E].d();m=!1,te(_)}}}function Be(o,e,t){let l,s;Q(o,S,_=>t(10,l=_)),Q(o,fe,_=>t(4,s=_));let{class:r=""}=e,{text:c=""}=e,{color:n="#0029FF"}=e,{disabled:a=!1}=e,{id:i=null}=e;const h=()=>{let _=l.map(f=>(i===f.id&&(f.done=!f.done),f));S.set(_)},k=()=>{let _=l.filter(f=>f.id!=i);S.set(_),console.log("del",i)},g=_=>{let f=l.map(d=>(i===d.id&&(d.color=_),d));S.set(f)},m=_=>_.color!=n;return o.$$set=_=>{"class"in _&&t(0,r=_.class),"text"in _&&t(1,c=_.text),"color"in _&&t(2,n=_.color),"disabled"in _&&t(3,a=_.disabled),"id"in _&&t(8,i=_.id)},[r,c,n,a,s,h,k,g,i,m]}class he extends U{constructor(e){super();V(this,e,Be,qe,L,{class:0,text:1,color:2,disabled:3,id:8})}}function me(o,e,t){const l=o.slice();return l[4]=e[t],l}function ve(o,e,t){const l=o.slice();return l[4]=e[t],l}function ge(o,e){let t,l,s,r,c,n=O,a;return l=new he({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=b("li"),q(l.$$.fragment),this.h()},l(i){t=y(i,"LI",{class:!0});var h=T(t);B(l.$$.fragment,h),h.forEach(p),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(i,h){N(i,t,h),M(l,t,null),a=!0},p(i,h){e=i;const k={};h&2&&(k.text=e[4].text),h&2&&(k.color=e[4].color?e[4].color:null),h&2&&(k.id=e[4].id),l.$set(k)},r(){c=t.getBoundingClientRect()},f(){le(t),n(),se(t,c)},a(){n(),n=ne(t,c,re,{duration:300})},i(i){a||(C(l.$$.fragment,i),X(()=>{r&&r.end(1),s=ae(t,e[3],{key:e[4].id}),s.start()}),a=!0)},o(i){D(l.$$.fragment,i),s&&s.invalidate(),r=oe(t,e[2],{key:e[4].id}),a=!1},d(i){i&&p(t),P(l),i&&r&&r.end()}}}function ke(o,e){let t,l,s,r,c,n=O,a;return l=new he({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=b("li"),q(l.$$.fragment),this.h()},l(i){t=y(i,"LI",{class:!0});var h=T(t);B(l.$$.fragment,h),h.forEach(p),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(i,h){N(i,t,h),M(l,t,null),a=!0},p(i,h){e=i;const k={};h&2&&(k.text=e[4].text),h&2&&(k.color=e[4].color?e[4].color:null),h&2&&(k.id=e[4].id),l.$set(k)},r(){c=t.getBoundingClientRect()},f(){le(t),n(),se(t,c)},a(){n(),n=ne(t,c,re,{duration:300})},i(i){a||(C(l.$$.fragment,i),X(()=>{r&&r.end(1),s=ae(t,e[3],{key:e[4].id}),s.start()}),a=!0)},o(i){D(l.$$.fragment,i),s&&s.invalidate(),r=oe(t,e[2],{key:e[4].id}),a=!1},d(i){i&&p(t),P(l),i&&r&&r.end()}}}function Me(o){let e,t,l,s=[],r=new Map,c,n=[],a=new Map,i,h,k=o[1].filter(pe);const g=f=>f[4].id;for(let f=0;f<k.length;f+=1){let d=ve(o,k,f),u=g(d);r.set(u,s[f]=ge(u,d))}let m=o[1].filter(be);const _=f=>f[4].id;for(let f=0;f<m.length;f+=1){let d=me(o,m,f),u=_(d);a.set(u,n[f]=ke(u,d))}return{c(){e=b("section"),t=b("div"),l=b("ul");for(let f=0;f<s.length;f+=1)s[f].c();c=b("ul");for(let f=0;f<n.length;f+=1)n[f].c();this.h()},l(f){e=y(f,"SECTION",{class:!0});var d=T(e);t=y(d,"DIV",{class:!0});var u=T(t);l=y(u,"UL",{class:!0});var E=T(l);for(let A=0;A<s.length;A+=1)s[A].l(E);E.forEach(p),c=y(u,"UL",{class:!0});var I=T(c);for(let A=0;A<n.length;A+=1)n[A].l(I);I.forEach(p),u.forEach(p),d.forEach(p),this.h()},h(){v(l,"class","task-section__col"),v(c,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",i="task-section "+o[0]+" svelte-1rib3cm")},m(f,d){N(f,e,d),w(e,t),w(t,l);for(let u=0;u<s.length;u+=1)s[u].m(l,null);w(t,c);for(let u=0;u<n.length;u+=1)n[u].m(c,null);h=!0},p(f,[d]){if(d&2){k=f[1].filter(pe),Y();for(let u=0;u<s.length;u+=1)s[u].r();s=K(s,d,g,1,f,k,r,l,ie,ge,null,ve);for(let u=0;u<s.length;u+=1)s[u].a();Z()}if(d&2){m=f[1].filter(be),Y();for(let u=0;u<n.length;u+=1)n[u].r();n=K(n,d,_,1,f,m,a,c,ie,ke,null,me);for(let u=0;u<n.length;u+=1)n[u].a();Z()}(!h||d&1&&i!==(i="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",i)},i(f){if(!h){for(let d=0;d<k.length;d+=1)C(s[d]);for(let d=0;d<m.length;d+=1)C(n[d]);h=!0}},o(f){for(let d=0;d<s.length;d+=1)D(s[d]);for(let d=0;d<n.length;d+=1)D(n[d]);h=!1},d(f){f&&p(e);for(let d=0;d<s.length;d+=1)s[d].d();for(let d=0;d<n.length;d+=1)n[d].d()}}}const pe=o=>!o.done,be=o=>o.done;function Pe(o,e,t){let l;Q(o,S,n=>t(1,l=n));let{class:s=""}=e;const[r,c]=Ce({duration:n=>Math.sqrt(n*200),fallback(n,a){const i=getComputedStyle(n),h=i.transform==="none"?"":i.transform;return{duration:600,easing:De,css:k=>`
					transform: ${h} scale(${k});
					opacity: ${k}
				`}}});return o.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l,r,c]}class Re extends U{constructor(e){super();V(this,e,Pe,Me,L,{class:0})}}function ye(o){let e,t,l,s=o[2].text&&Ee(o);return{c(){e=b("button"),s&&s.c(),this.h()},l(r){e=y(r,"BUTTON",{class:!0});var c=T(e);s&&s.l(c),c.forEach(p),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,c){N(r,e,c),s&&s.m(e,null),t||(l=F(e,"click",R(o[6])),t=!0)},p(r,c){r[2].text?s?s.p(r,c):(s=Ee(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&p(e),s&&s.d(),t=!1,l()}}}function Ee(o){let e=o[2].text+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,s){N(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&ee(t,e)},d(l){l&&p(t)}}}function je(o){let e,t,l,s,r,c=o[2]&&ye(o);return{c(){e=b("div"),t=b("input"),c&&c.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var a=T(e);t=y(a,"INPUT",{placeholder:!0,class:!0}),c&&c.l(a),a.forEach(p),this.h()},h(){v(t,"placeholder",o[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),j(e,"isError",o[5])},m(n,a){N(n,e,a),w(e,t),ce(t,o[4]),c&&c.m(e,null),o[9](e),s||(r=[F(t,"input",o[8]),F(t,"input",o[7])],s=!0)},p(n,[a]){a&2&&v(t,"placeholder",n[1]),a&16&&t.value!==n[4]&&ce(t,n[4]),n[2]?c?c.p(n,a):(c=ye(n),c.c(),c.m(e,null)):c&&(c.d(1),c=null),a&5&&l!==(l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),a&37&&j(e,"isError",n[5])},i:O,o:O,d(n){n&&p(e),c&&c.d(),o[9](null),s=!1,te(r)}}}function Ke(o,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,c,n,a=!1;const i=Fe(),h=()=>{n?(i("submit",{value:n}),t(4,n="")):t(5,a=!0)},k=()=>{t(5,a=!1)};function g(){n=this.value,t(4,n)}function m(_){Se[_?"unshift":"push"](()=>{c=_,t(3,c)})}return o.$$set=_=>{"class"in _&&t(0,l=_.class),"placeholder"in _&&t(1,s=_.placeholder),"btn"in _&&t(2,r=_.btn)},[l,s,r,c,n,a,h,k,g,m]}class Qe extends U{constructor(e){super();V(this,e,Ke,je,L,{class:0,placeholder:1,btn:2})}}function Te(o,e,t){const l=o.slice();return l[6]=e[t],l[8]=t,l}function we(o,e){let t,l,s,r,c,n;return{key:o,first:null,c(){t=b("button"),this.h()},l(a){t=y(a,"BUTTON",{class:!0,style:!0}),T(t).forEach(p),this.h()},h(){v(t,"class","add-todo__color svelte-123yf90"),v(t,"style",l=`color: ${e[6].color}; transition-delay: ${50*e[8]}ms`),this.first=t},m(a,i){N(a,t,i),r=!0,c||(n=F(t,"click",R(function(){J(e[4](e[6].color))&&e[4](e[6].color).apply(this,arguments)})),c=!0)},p(a,i){e=a,(!r||i&6&&l!==(l=`color: ${e[6].color}; transition-delay: ${50*e[8]}ms`))&&v(t,"style",l)},i(a){r||(X(()=>{s||(s=ue(t,scale,{},!0)),s.run(1)}),r=!0)},o(a){s||(s=ue(t,scale,{},!1)),s.run(0),r=!1},d(a){a&&p(t),a&&s&&s.end(),c=!1,n()}}}function We(o){let e,t,l,s,r=[],c=new Map,n,a,i,h=o[2].filter(o[5]);const k=g=>g[6].id;for(let g=0;g<h.length;g+=1){let m=Te(o,h,g),_=k(m);c.set(_,r[g]=we(_,m))}return n=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("submit",o[3]),{c(){e=b("div"),t=b("div"),l=b("span");for(let g=0;g<r.length;g+=1)r[g].c();q(n.$$.fragment),this.h()},l(g){e=y(g,"DIV",{class:!0});var m=T(e);t=y(m,"DIV",{class:!0});var _=T(t);l=y(_,"SPAN",{class:!0,style:!0}),T(l).forEach(p);for(let f=0;f<r.length;f+=1)r[f].l(_);_.forEach(p),B(n.$$.fragment,m),m.forEach(p),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-123yf90"),v(l,"style",s=`color: ${o[1]}`),v(t,"class","add-todo__color-list svelte-123yf90"),v(e,"class",a="add-todo "+o[0]+" svelte-123yf90")},m(g,m){N(g,e,m),w(e,t),w(t,l);for(let _=0;_<r.length;_+=1)r[_].m(t,null);M(n,e,null),i=!0},p(g,[m]){(!i||m&2&&s!==(s=`color: ${g[1]}`))&&v(l,"style",s),m&22&&(h=g[2].filter(g[5]),Y(),r=K(r,m,k,1,g,h,c,t,Oe,we,null,Te),Z()),(!i||m&1&&a!==(a="add-todo "+g[0]+" svelte-123yf90"))&&v(e,"class",a)},i(g){if(!i){for(let m=0;m<h.length;m+=1)C(r[m]);C(n.$$.fragment,g),i=!0}},o(g){for(let m=0;m<r.length;m+=1)D(r[m]);D(n.$$.fragment,g),i=!1},d(g){g&&p(e);for(let m=0;m<r.length;m+=1)r[m].d();P(n)}}}function Xe(o,e,t){let l;Q(o,fe,i=>t(2,l=i));let{class:s=""}=e,r="#0029FF";const c=i=>{let h={id:Date.now(),text:i.detail.value,color:"#000",done:!1};S.update(k=>k=[h,...k])},n=i=>{t(1,r=i)},a=i=>i.color!=r;return o.$$set=i=>{"class"in i&&t(0,s=i.class)},[s,r,l,c,n,a]}class Ye extends U{constructor(e){super();V(this,e,Xe,We,L,{class:0})}}function Ze(o){let e,t,l,s,r,c,n;return s=new Ye({}),c=new Re({props:{class:"mt-50"}}),{c(){e=Ue(),t=b("section"),l=b("div"),q(s.$$.fragment),q(c.$$.fragment),this.h()},l(a){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),e=Le(a),t=y(a,"SECTION",{class:!0});var h=T(t);l=y(h,"DIV",{class:!0});var k=T(l);B(s.$$.fragment,k),k.forEach(p),h.forEach(p),B(c.$$.fragment,a),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(t,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(a,i){N(a,e,i),N(a,t,i),w(t,l),M(s,l,null),M(c,a,i),n=!0},p(a,[i]){(!n||i&1&&r!==(r=""+(a[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(a){n||(C(s.$$.fragment,a),C(c.$$.fragment,a),n=!0)},o(a){D(s.$$.fragment,a),D(c.$$.fragment,a),n=!1},d(a){a&&p(e),a&&p(t),P(s),P(c,a)}}}function ze(o,e,t){let{class:l=""}=e;return o.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class He extends U{constructor(e){super();V(this,e,ze,Ze,L,{class:0})}}export{He as default};