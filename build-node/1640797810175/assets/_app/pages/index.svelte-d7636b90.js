import{C as K,S as E,i as T,s as I,e as h,t as O,c as m,a as v,g as U,d as f,b as _,f as b,D as y,h as q,E as w,v as S,w as V,x as C,p as D,J as Q,K as W,n as N,L as X,A as F,m as Y,M as Z,o as G,N as H,O as x,P as $,Q as ee,R as A,T as te,U as L,V as P,W as se,X as le,Y as ae,j as ne,Z as re,l as oe}from"../chunks/vendor-83565f0b.js";const z=K([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"}]);function ie(o){let e,s,a,l,r,n;return{c(){e=h("div"),s=h("p"),a=O(o[1]),l=h("div"),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=v(e);s=m(i,"P",{class:!0});var d=v(s);a=U(d,o[1]),d.forEach(f),l=m(i,"DIV",{class:!0,style:!0}),v(l).forEach(f),i.forEach(f),this.h()},h(){_(s,"class","svelte-1s64vcb"),_(l,"class","task__menu svelte-1s64vcb"),_(l,"style",r=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),_(e,"class",n="task "+o[0]+" svelte-1s64vcb")},m(t,i){b(t,e,i),y(e,s),y(s,a),y(e,l)},p(t,[i]){i&2&&q(a,t[1]),i&4&&r!==(r=`background-color: ${t[2]!=null?t[2]:"#0029FF"}`)&&_(l,"style",r),i&1&&n!==(n="task "+t[0]+" svelte-1s64vcb")&&_(e,"class",n)},i:w,o:w,d(t){t&&f(e)}}}function ce(o,e,s){let{class:a}=e,{text:l=""}=e,{color:r=null}=e,{key:n=0}=e;return o.$$set=t=>{"class"in t&&s(0,a=t.class),"text"in t&&s(1,l=t.text),"color"in t&&s(2,r=t.color),"key"in t&&s(3,n=t.key)},[a,l,r,n]}class ue extends E{constructor(e){super();T(this,e,ce,ie,I,{class:0,text:1,color:2,key:3})}}function M(o,e,s){const a=o.slice();return a[4]=e[s],a}function R(o,e){let s,a,l,r,n;return a=new ue({props:{text:e[4].text,color:e[4].color?e[4].color:null}}),{key:o,first:null,c(){s=h("li"),S(a.$$.fragment),this.h()},l(t){s=m(t,"LI",{class:!0});var i=v(s);V(a.$$.fragment,i),i.forEach(f),this.h()},h(){_(s,"class","task-section__item"),this.first=s},m(t,i){b(t,s,i),C(a,s,null),n=!0},p(t,i){e=t;const d={};i&2&&(d.text=e[4].text),i&2&&(d.color=e[4].color?e[4].color:null),a.$set(d)},i(t){n||(D(a.$$.fragment,t),Q(()=>{r&&r.end(1),l=W(s,e[3],{key:e[4].id}),l.start()}),n=!0)},o(t){N(a.$$.fragment,t),l&&l.invalidate(),r=X(s,e[2],{key:e[4].id}),n=!1},d(t){t&&f(s),F(a),t&&r&&r.end()}}}function fe(o){let e,s,a,l=[],r=new Map,n,t,i,d=o[1];const p=c=>c[4].id;for(let c=0;c<d.length;c+=1){let u=M(o,d,c),k=p(u);r.set(k,l[c]=R(k,u))}return{c(){e=h("section"),s=h("div"),a=h("ul");for(let c=0;c<l.length;c+=1)l[c].c();n=h("ul"),this.h()},l(c){e=m(c,"SECTION",{class:!0});var u=v(e);s=m(u,"DIV",{class:!0});var k=v(s);a=m(k,"UL",{class:!0});var g=v(a);for(let j=0;j<l.length;j+=1)l[j].l(g);g.forEach(f),n=m(k,"UL",{class:!0}),v(n).forEach(f),k.forEach(f),u.forEach(f),this.h()},h(){_(a,"class","task-section__col"),_(n,"class","task-section__col"),_(s,"class","container task-section__grid svelte-ezmjle"),_(e,"class",t="task-section "+o[0]+" svelte-ezmjle")},m(c,u){b(c,e,u),y(e,s),y(s,a);for(let k=0;k<l.length;k+=1)l[k].m(a,null);y(s,n),i=!0},p(c,[u]){u&2&&(d=c[1],Y(),l=Z(l,u,p,1,c,d,r,a,$,R,null,M),G()),(!i||u&1&&t!==(t="task-section "+c[0]+" svelte-ezmjle"))&&_(e,"class",t)},i(c){if(!i){for(let u=0;u<d.length;u+=1)D(l[u]);i=!0}},o(c){for(let u=0;u<l.length;u+=1)N(l[u]);i=!1},d(c){c&&f(e);for(let u=0;u<l.length;u+=1)l[u].d()}}}function _e(o,e,s){let a;H(o,z,t=>s(1,a=t));const[l,r]=x({duration:t=>Math.sqrt(t*200),fallback(t,i){const d=getComputedStyle(t),p=d.transform==="none"?"":d.transform;return{duration:600,easing:ee,css:c=>`
					transform: ${p} scale(${c});
					opacity: ${c}
				`}}});let{class:n}=e;return o.$$set=t=>{"class"in t&&s(0,n=t.class)},[n,a,l,r]}class de extends E{constructor(e){super();T(this,e,_e,fe,I,{class:0})}}function B(o){let e,s,a,l=o[2].text&&J(o);return{c(){e=h("button"),l&&l.c(),this.h()},l(r){e=m(r,"BUTTON",{class:!0});var n=v(e);l&&l.l(n),n.forEach(f),this.h()},h(){_(e,"class","btn svelte-lxnxhr")},m(r,n){b(r,e,n),l&&l.m(e,null),s||(a=A(e,"click",te(o[6])),s=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=J(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&f(e),l&&l.d(),s=!1,a()}}}function J(o){let e=o[2].text+"",s;return{c(){s=O(e)},l(a){s=U(a,e)},m(a,l){b(a,s,l)},p(a,l){l&4&&e!==(e=a[2].text+"")&&q(s,e)},d(a){a&&f(s)}}}function he(o){let e,s,a,l,r,n=o[2]&&B(o);return{c(){e=h("div"),s=h("input"),n&&n.c(),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=v(e);s=m(i,"INPUT",{placeholder:!0,class:!0}),n&&n.l(i),i.forEach(f),this.h()},h(){_(s,"placeholder",o[1]),_(s,"class","svelte-lxnxhr"),_(e,"class",a="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-lxnxhr"),L(e,"isError",o[5])},m(t,i){b(t,e,i),y(e,s),P(s,o[4]),n&&n.m(e,null),o[9](e),l||(r=[A(s,"input",o[8]),A(s,"input",o[7])],l=!0)},p(t,[i]){i&2&&_(s,"placeholder",t[1]),i&16&&s.value!==t[4]&&P(s,t[4]),t[2]?n?n.p(t,i):(n=B(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null),i&5&&a!==(a="input-group "+t[0]+" "+(t[2]?"input-group_btn":"")+" svelte-lxnxhr")&&_(e,"class",a),i&37&&L(e,"isError",t[5])},i:w,o:w,d(t){t&&f(e),n&&n.d(),o[9](null),l=!1,se(r)}}}function me(o,e,s){let{class:a}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,t,i=!1;const d=le(),p=()=>{t?(d("submit",{value:t}),s(4,t="")):s(5,i=!0)},c=()=>{s(5,i=!1)};function u(){t=this.value,s(4,t)}function k(g){ae[g?"unshift":"push"](()=>{n=g,s(3,n)})}return o.$$set=g=>{"class"in g&&s(0,a=g.class),"placeholder"in g&&s(1,l=g.placeholder),"btn"in g&&s(2,r=g.btn)},[a,l,r,n,t,i,p,c,u,k]}class ve extends E{constructor(e){super();T(this,e,me,he,I,{class:0,placeholder:1,btn:2})}}function ke(o){let e,s,a,l;return s=new ve({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("submit",o[1]),{c(){e=h("div"),S(s.$$.fragment),this.h()},l(r){e=m(r,"DIV",{class:!0});var n=v(e);V(s.$$.fragment,n),n.forEach(f),this.h()},h(){_(e,"class",a="add-todo "+o[0]+" svelte-xriol")},m(r,n){b(r,e,n),C(s,e,null),l=!0},p(r,[n]){(!l||n&1&&a!==(a="add-todo "+r[0]+" svelte-xriol"))&&_(e,"class",a)},i(r){l||(D(s.$$.fragment,r),l=!0)},o(r){N(s.$$.fragment,r),l=!1},d(r){r&&f(e),F(s)}}}function ge(o,e,s){let{class:a}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};z.update(t=>t=[n,...t]),console.log(n)};return o.$$set=r=>{"class"in r&&s(0,a=r.class)},[a,l]}class pe extends E{constructor(e){super();T(this,e,ge,ke,I,{class:0})}}function be(o){let e,s,a,l,r,n;return l=new pe({}),r=new de({props:{class:"mt-50"}}),{c(){e=ne(),s=h("section"),a=h("div"),S(l.$$.fragment),S(r.$$.fragment),this.h()},l(t){re('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=oe(t),s=m(t,"SECTION",{class:!0});var d=v(s);a=m(d,"DIV",{class:!0});var p=v(a);V(l.$$.fragment,p),p.forEach(f),d.forEach(f),V(r.$$.fragment,t),this.h()},h(){document.title="ToDo",_(a,"class","container"),_(s,"class","mt-50")},m(t,i){b(t,e,i),b(t,s,i),y(s,a),C(l,a,null),C(r,t,i),n=!0},p:w,i(t){n||(D(l.$$.fragment,t),D(r.$$.fragment,t),n=!0)},o(t){N(l.$$.fragment,t),N(r.$$.fragment,t),n=!1},d(t){t&&f(e),t&&f(s),F(l),F(r,t)}}}class Ee extends E{constructor(e){super();T(this,e,null,be,I,{})}}export{Ee as default};