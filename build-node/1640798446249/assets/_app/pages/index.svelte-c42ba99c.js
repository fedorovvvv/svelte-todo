import{C as re,S as N,i as F,s as S,e as m,t as M,c as v,a as p,g as P,d as f,b as _,f as E,D as y,h as z,E as $,v as V,w as C,x as j,J as R,K as B,p as w,L as J,n as D,A,m as K,M as Q,o as W,N as ie,O as ce,P as X,Q as ue,R as O,T as fe,U as Y,V as Z,W as _e,X as de,Y as he,j as me,Z as ve,l as pe}from"../chunks/vendor-83565f0b.js";const G=re([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:2,text:"test task 2",done:!0,color:"#FF9900"}]);function ge(r){let e,l,o,s,a,n;return{c(){e=m("div"),l=m("p"),o=M(r[1]),s=m("div"),this.h()},l(t){e=v(t,"DIV",{class:!0});var i=p(e);l=v(i,"P",{class:!0});var d=p(l);o=P(d,r[1]),d.forEach(f),s=v(i,"DIV",{class:!0,style:!0}),p(s).forEach(f),i.forEach(f),this.h()},h(){_(l,"class","svelte-1s64vcb"),_(s,"class","task__menu svelte-1s64vcb"),_(s,"style",a=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`),_(e,"class",n="task "+r[0]+" svelte-1s64vcb")},m(t,i){E(t,e,i),y(e,l),y(l,o),y(e,s)},p(t,[i]){i&2&&z(o,t[1]),i&4&&a!==(a=`background-color: ${t[2]!=null?t[2]:"#0029FF"}`)&&_(s,"style",a),i&1&&n!==(n="task "+t[0]+" svelte-1s64vcb")&&_(e,"class",n)},i:$,o:$,d(t){t&&f(e)}}}function ke(r,e,l){let{class:o}=e,{text:s=""}=e,{color:a=null}=e;return r.$$set=n=>{"class"in n&&l(0,o=n.class),"text"in n&&l(1,s=n.text),"color"in n&&l(2,a=n.color)},[o,s,a]}class H extends N{constructor(e){super();F(this,e,ke,ge,S,{class:0,text:1,color:2})}}function x(r,e,l){const o=r.slice();return o[4]=e[l],o}function ee(r,e,l){const o=r.slice();return o[4]=e[l],o}function te(r,e){let l,o,s,a,n;return a=new H({props:{text:e[4].text,color:e[4].color?e[4].color:null}}),{key:r,first:null,c(){l=m("li"),V(a.$$.fragment),this.h()},l(t){l=v(t,"LI",{"animation:flip":!0,class:!0}),p(l).forEach(f),C(a.$$.fragment,t),this.h()},h(){_(l,"animation:flip",""),_(l,"class","task-section__item"),this.first=l},m(t,i){E(t,l,i),j(a,t,i),n=!0},p(t,i){e=t;const d={};i&2&&(d.text=e[4].text),i&2&&(d.color=e[4].color?e[4].color:null),a.$set(d)},i(t){n||(R(()=>{s&&s.end(1),o=B(l,e[3],{key:e[4].id}),o.start()}),w(a.$$.fragment,t),n=!0)},o(t){o&&o.invalidate(),s=J(l,e[2],{key:e[4].id}),D(a.$$.fragment,t),n=!1},d(t){t&&f(l),t&&s&&s.end(),A(a,t)}}}function le(r,e){let l,o,s,a,n;return a=new H({props:{text:e[4].text,color:e[4].color?e[4].color:null}}),{key:r,first:null,c(){l=m("li"),V(a.$$.fragment),this.h()},l(t){l=v(t,"LI",{"animation:flip":!0,class:!0}),p(l).forEach(f),C(a.$$.fragment,t),this.h()},h(){_(l,"animation:flip",""),_(l,"class","task-section__item"),this.first=l},m(t,i){E(t,l,i),j(a,t,i),n=!0},p(t,i){e=t;const d={};i&2&&(d.text=e[4].text),i&2&&(d.color=e[4].color?e[4].color:null),a.$set(d)},i(t){n||(R(()=>{s&&s.end(1),o=B(l,e[3],{key:e[4].id}),o.start()}),w(a.$$.fragment,t),n=!0)},o(t){o&&o.invalidate(),s=J(l,e[2],{key:e[4].id}),D(a.$$.fragment,t),n=!1},d(t){t&&f(l),t&&s&&s.end(),A(a,t)}}}function be(r){let e,l,o,s=[],a=new Map,n,t=[],i=new Map,d,g,b=r[1].filter(se);const L=u=>u[4].id;for(let u=0;u<b.length;u+=1){let c=ee(r,b,u),h=L(c);a.set(h,s[u]=te(h,c))}let I=r[1].filter(ne);const k=u=>u[4].id;for(let u=0;u<I.length;u+=1){let c=x(r,I,u),h=k(c);i.set(h,t[u]=le(h,c))}return{c(){e=m("section"),l=m("div"),o=m("ul");for(let u=0;u<s.length;u+=1)s[u].c();n=m("ul");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=v(u,"SECTION",{class:!0});var c=p(e);l=v(c,"DIV",{class:!0});var h=p(l);o=v(h,"UL",{class:!0});var U=p(o);for(let T=0;T<s.length;T+=1)s[T].l(U);U.forEach(f),n=v(h,"UL",{class:!0});var q=p(n);for(let T=0;T<t.length;T+=1)t[T].l(q);q.forEach(f),h.forEach(f),c.forEach(f),this.h()},h(){_(o,"class","task-section__col"),_(n,"class","task-section__col"),_(l,"class","container task-section__grid svelte-ezmjle"),_(e,"class",d="task-section "+r[0]+" svelte-ezmjle")},m(u,c){E(u,e,c),y(e,l),y(l,o);for(let h=0;h<s.length;h+=1)s[h].m(o,null);y(l,n);for(let h=0;h<t.length;h+=1)t[h].m(n,null);g=!0},p(u,[c]){c&2&&(b=u[1].filter(se),K(),s=Q(s,c,L,1,u,b,a,o,X,te,null,ee),W()),c&2&&(I=u[1].filter(ne),K(),t=Q(t,c,k,1,u,I,i,n,X,le,null,x),W()),(!g||c&1&&d!==(d="task-section "+u[0]+" svelte-ezmjle"))&&_(e,"class",d)},i(u){if(!g){for(let c=0;c<b.length;c+=1)w(s[c]);for(let c=0;c<I.length;c+=1)w(t[c]);g=!0}},o(u){for(let c=0;c<s.length;c+=1)D(s[c]);for(let c=0;c<t.length;c+=1)D(t[c]);g=!1},d(u){u&&f(e);for(let c=0;c<s.length;c+=1)s[c].d();for(let c=0;c<t.length;c+=1)t[c].d()}}}const se=r=>!r.done,ne=r=>r.done;function Ee(r,e,l){let o;ie(r,G,t=>l(1,o=t));const[s,a]=ce({duration:t=>Math.sqrt(t*200),fallback(t,i){const d=getComputedStyle(t),g=d.transform==="none"?"":d.transform;return{duration:600,easing:ue,css:b=>`
					transform: ${g} scale(${b});
					opacity: ${b}
				`}}});let{class:n}=e;return r.$$set=t=>{"class"in t&&l(0,n=t.class)},[n,o,s,a]}class ye extends N{constructor(e){super();F(this,e,Ee,be,S,{class:0})}}function ae(r){let e,l,o,s=r[2].text&&oe(r);return{c(){e=m("button"),s&&s.c(),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var n=p(e);s&&s.l(n),n.forEach(f),this.h()},h(){_(e,"class","btn svelte-lxnxhr")},m(a,n){E(a,e,n),s&&s.m(e,null),l||(o=O(e,"click",fe(r[6])),l=!0)},p(a,n){a[2].text?s?s.p(a,n):(s=oe(a),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(a){a&&f(e),s&&s.d(),l=!1,o()}}}function oe(r){let e=r[2].text+"",l;return{c(){l=M(e)},l(o){l=P(o,e)},m(o,s){E(o,l,s)},p(o,s){s&4&&e!==(e=o[2].text+"")&&z(l,e)},d(o){o&&f(l)}}}function Ie(r){let e,l,o,s,a,n=r[2]&&ae(r);return{c(){e=m("div"),l=m("input"),n&&n.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var i=p(e);l=v(i,"INPUT",{placeholder:!0,class:!0}),n&&n.l(i),i.forEach(f),this.h()},h(){_(l,"placeholder",r[1]),_(l,"class","svelte-lxnxhr"),_(e,"class",o="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-lxnxhr"),Y(e,"isError",r[5])},m(t,i){E(t,e,i),y(e,l),Z(l,r[4]),n&&n.m(e,null),r[9](e),s||(a=[O(l,"input",r[8]),O(l,"input",r[7])],s=!0)},p(t,[i]){i&2&&_(l,"placeholder",t[1]),i&16&&l.value!==t[4]&&Z(l,t[4]),t[2]?n?n.p(t,i):(n=ae(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null),i&5&&o!==(o="input-group "+t[0]+" "+(t[2]?"input-group_btn":"")+" svelte-lxnxhr")&&_(e,"class",o),i&37&&Y(e,"isError",t[5])},i:$,o:$,d(t){t&&f(e),n&&n.d(),r[9](null),s=!1,_e(a)}}}function Te(r,e,l){let{class:o}=e,{placeholder:s="Placeholer"}=e,{btn:a=null}=e,n,t,i=!1;const d=de(),g=()=>{t?(d("submit",{value:t}),l(4,t="")):l(5,i=!0)},b=()=>{l(5,i=!1)};function L(){t=this.value,l(4,t)}function I(k){he[k?"unshift":"push"](()=>{n=k,l(3,n)})}return r.$$set=k=>{"class"in k&&l(0,o=k.class),"placeholder"in k&&l(1,s=k.placeholder),"btn"in k&&l(2,a=k.btn)},[o,s,a,n,t,i,g,b,L,I]}class we extends N{constructor(e){super();F(this,e,Te,Ie,S,{class:0,placeholder:1,btn:2})}}function De(r){let e,l,o,s;return l=new we({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",r[1]),{c(){e=m("div"),V(l.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=p(e);C(l.$$.fragment,n),n.forEach(f),this.h()},h(){_(e,"class",o="add-todo "+r[0]+" svelte-xriol")},m(a,n){E(a,e,n),j(l,e,null),s=!0},p(a,[n]){(!s||n&1&&o!==(o="add-todo "+a[0]+" svelte-xriol"))&&_(e,"class",o)},i(a){s||(w(l.$$.fragment,a),s=!0)},o(a){D(l.$$.fragment,a),s=!1},d(a){a&&f(e),A(l)}}}function Ne(r,e,l){let{class:o}=e;const s=a=>{let n={id:Date.now(),text:a.detail.value,color:null,done:!1};G.update(t=>t=[n,...t]),console.log(n)};return r.$$set=a=>{"class"in a&&l(0,o=a.class)},[o,s]}class Fe extends N{constructor(e){super();F(this,e,Ne,De,S,{class:0})}}function Se(r){let e,l,o,s,a,n;return s=new Fe({}),a=new ye({props:{class:"mt-50"}}),{c(){e=me(),l=m("section"),o=m("div"),V(s.$$.fragment),V(a.$$.fragment),this.h()},l(t){ve('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=pe(t),l=v(t,"SECTION",{class:!0});var d=p(l);o=v(d,"DIV",{class:!0});var g=p(o);C(s.$$.fragment,g),g.forEach(f),d.forEach(f),C(a.$$.fragment,t),this.h()},h(){document.title="ToDo",_(o,"class","container"),_(l,"class","mt-50")},m(t,i){E(t,e,i),E(t,l,i),y(l,o),j(s,o,null),j(a,t,i),n=!0},p:$,i(t){n||(w(s.$$.fragment,t),w(a.$$.fragment,t),n=!0)},o(t){D(s.$$.fragment,t),D(a.$$.fragment,t),n=!1},d(t){t&&f(e),t&&f(l),A(s),A(a,t)}}}class Ve extends N{constructor(e){super();F(this,e,null,Se,S,{})}}export{Ve as default};