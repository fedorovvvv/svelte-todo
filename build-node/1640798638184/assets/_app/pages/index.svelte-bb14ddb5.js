import{C as oe,S as N,i as F,s as S,e as d,t as q,c as m,a as v,g as R,d as f,b as _,f as b,D as E,h as B,E as V,v as j,w as A,x as C,p as w,J,K as $,n as D,A as L,m as K,L as Q,o as W,M as ie,N as O,O as X,P,Q as ce,R as G,T as H,U as ue,V as fe,W as _e,j as he,X as de,l as me}from"../chunks/vendor-3048d4b9.js";const Y=oe([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:2,text:"test task 2",done:!0,color:"#FF9900"}]);function ve(o){let e,t,a,l,r,s;return{c(){e=d("div"),t=d("p"),a=q(o[1]),l=d("div"),this.h()},l(n){e=m(n,"DIV",{class:!0});var i=v(e);t=m(i,"P",{class:!0});var p=v(t);a=R(p,o[1]),p.forEach(f),l=m(i,"DIV",{class:!0,style:!0}),v(l).forEach(f),i.forEach(f),this.h()},h(){_(t,"class","svelte-1s64vcb"),_(l,"class","task__menu svelte-1s64vcb"),_(l,"style",r=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),_(e,"class",s="task "+o[0]+" svelte-1s64vcb")},m(n,i){b(n,e,i),E(e,t),E(t,a),E(e,l)},p(n,[i]){i&2&&B(a,n[1]),i&4&&r!==(r=`background-color: ${n[2]!=null?n[2]:"#0029FF"}`)&&_(l,"style",r),i&1&&s!==(s="task "+n[0]+" svelte-1s64vcb")&&_(e,"class",s)},i:V,o:V,d(n){n&&f(e)}}}function pe(o,e,t){let{class:a=""}=e,{text:l=""}=e,{color:r=null}=e;return o.$$set=s=>{"class"in s&&t(0,a=s.class),"text"in s&&t(1,l=s.text),"color"in s&&t(2,r=s.color)},[a,l,r]}class Z extends N{constructor(e){super();F(this,e,pe,ve,S,{class:0,text:1,color:2})}}function x(o,e,t){const a=o.slice();return a[2]=e[t],a}function ee(o,e,t){const a=o.slice();return a[2]=e[t],a}function te(o,e){let t,a,l,r;return a=new Z({props:{text:e[2].text,color:e[2].color?e[2].color:null}}),{key:o,first:null,c(){t=d("li"),j(a.$$.fragment),this.h()},l(s){t=m(s,"LI",{class:!0,"animation:flip":!0});var n=v(t);A(a.$$.fragment,n),n.forEach(f),this.h()},h(){_(t,"class","task-section__item"),_(t,"animation:flip",""),this.first=t},m(s,n){b(s,t,n),C(a,t,null),r=!0},p(s,n){e=s;const i={};n&2&&(i.text=e[2].text),n&2&&(i.color=e[2].color?e[2].color:null),a.$set(i)},i(s){r||(w(a.$$.fragment,s),J(()=>{l||(l=$(t,O,{},!0)),l.run(1)}),r=!0)},o(s){D(a.$$.fragment,s),l||(l=$(t,O,{},!1)),l.run(0),r=!1},d(s){s&&f(t),L(a),s&&l&&l.end()}}}function le(o,e){let t,a,l,r;return a=new Z({props:{text:e[2].text,color:e[2].color?e[2].color:null}}),{key:o,first:null,c(){t=d("li"),j(a.$$.fragment),this.h()},l(s){t=m(s,"LI",{class:!0,"animation:flip":!0});var n=v(t);A(a.$$.fragment,n),n.forEach(f),this.h()},h(){_(t,"class","task-section__item"),_(t,"animation:flip",""),this.first=t},m(s,n){b(s,t,n),C(a,t,null),r=!0},p(s,n){e=s;const i={};n&2&&(i.text=e[2].text),n&2&&(i.color=e[2].color?e[2].color:null),a.$set(i)},i(s){r||(w(a.$$.fragment,s),J(()=>{l||(l=$(t,O,{},!0)),l.run(1)}),r=!0)},o(s){D(a.$$.fragment,s),l||(l=$(t,O,{},!1)),l.run(0),r=!1},d(s){s&&f(t),L(a),s&&l&&l.end()}}}function ge(o){let e,t,a,l=[],r=new Map,s,n=[],i=new Map,p,k,y=o[1].filter(se);const U=u=>u[2].id;for(let u=0;u<y.length;u+=1){let c=ee(o,y,u),h=U(c);r.set(h,l[u]=te(h,c))}let I=o[1].filter(ne);const g=u=>u[2].id;for(let u=0;u<I.length;u+=1){let c=x(o,I,u),h=g(c);i.set(h,n[u]=le(h,c))}return{c(){e=d("section"),t=d("div"),a=d("ul");for(let u=0;u<l.length;u+=1)l[u].c();s=d("ul");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){e=m(u,"SECTION",{class:!0});var c=v(e);t=m(c,"DIV",{class:!0});var h=v(t);a=m(h,"UL",{class:!0});var z=v(a);for(let T=0;T<l.length;T+=1)l[T].l(z);z.forEach(f),s=m(h,"UL",{class:!0});var M=v(s);for(let T=0;T<n.length;T+=1)n[T].l(M);M.forEach(f),h.forEach(f),c.forEach(f),this.h()},h(){_(a,"class","task-section__col"),_(s,"class","task-section__col"),_(t,"class","container task-section__grid svelte-ezmjle"),_(e,"class",p="task-section "+o[0]+" svelte-ezmjle")},m(u,c){b(u,e,c),E(e,t),E(t,a);for(let h=0;h<l.length;h+=1)l[h].m(a,null);E(t,s);for(let h=0;h<n.length;h+=1)n[h].m(s,null);k=!0},p(u,[c]){c&2&&(y=u[1].filter(se),K(),l=Q(l,c,U,1,u,y,r,a,X,te,null,ee),W()),c&2&&(I=u[1].filter(ne),K(),n=Q(n,c,g,1,u,I,i,s,X,le,null,x),W()),(!k||c&1&&p!==(p="task-section "+u[0]+" svelte-ezmjle"))&&_(e,"class",p)},i(u){if(!k){for(let c=0;c<y.length;c+=1)w(l[c]);for(let c=0;c<I.length;c+=1)w(n[c]);k=!0}},o(u){for(let c=0;c<l.length;c+=1)D(l[c]);for(let c=0;c<n.length;c+=1)D(n[c]);k=!1},d(u){u&&f(e);for(let c=0;c<l.length;c+=1)l[c].d();for(let c=0;c<n.length;c+=1)n[c].d()}}}const se=o=>!o.done,ne=o=>o.done;function ke(o,e,t){let a;ie(o,Y,r=>t(1,a=r));let{class:l=""}=e;return o.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,a]}class be extends N{constructor(e){super();F(this,e,ke,ge,S,{class:0})}}function ae(o){let e,t,a,l=o[2].text&&re(o);return{c(){e=d("button"),l&&l.c(),this.h()},l(r){e=m(r,"BUTTON",{class:!0});var s=v(e);l&&l.l(s),s.forEach(f),this.h()},h(){_(e,"class","btn svelte-lxnxhr")},m(r,s){b(r,e,s),l&&l.m(e,null),t||(a=P(e,"click",ce(o[6])),t=!0)},p(r,s){r[2].text?l?l.p(r,s):(l=re(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&f(e),l&&l.d(),t=!1,a()}}}function re(o){let e=o[2].text+"",t;return{c(){t=q(e)},l(a){t=R(a,e)},m(a,l){b(a,t,l)},p(a,l){l&4&&e!==(e=a[2].text+"")&&B(t,e)},d(a){a&&f(t)}}}function Ee(o){let e,t,a,l,r,s=o[2]&&ae(o);return{c(){e=d("div"),t=d("input"),s&&s.c(),this.h()},l(n){e=m(n,"DIV",{class:!0});var i=v(e);t=m(i,"INPUT",{placeholder:!0,class:!0}),s&&s.l(i),i.forEach(f),this.h()},h(){_(t,"placeholder",o[1]),_(t,"class","svelte-lxnxhr"),_(e,"class",a="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-lxnxhr"),G(e,"isError",o[5])},m(n,i){b(n,e,i),E(e,t),H(t,o[4]),s&&s.m(e,null),o[9](e),l||(r=[P(t,"input",o[8]),P(t,"input",o[7])],l=!0)},p(n,[i]){i&2&&_(t,"placeholder",n[1]),i&16&&t.value!==n[4]&&H(t,n[4]),n[2]?s?s.p(n,i):(s=ae(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),i&5&&a!==(a="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-lxnxhr")&&_(e,"class",a),i&37&&G(e,"isError",n[5])},i:V,o:V,d(n){n&&f(e),s&&s.d(),o[9](null),l=!1,ue(r)}}}function ye(o,e,t){let{class:a=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,s,n,i=!1;const p=fe(),k=()=>{n?(p("submit",{value:n}),t(4,n="")):t(5,i=!0)},y=()=>{t(5,i=!1)};function U(){n=this.value,t(4,n)}function I(g){_e[g?"unshift":"push"](()=>{s=g,t(3,s)})}return o.$$set=g=>{"class"in g&&t(0,a=g.class),"placeholder"in g&&t(1,l=g.placeholder),"btn"in g&&t(2,r=g.btn)},[a,l,r,s,n,i,k,y,U,I]}class Ie extends N{constructor(e){super();F(this,e,ye,Ee,S,{class:0,placeholder:1,btn:2})}}function Te(o){let e,t,a,l;return t=new Ie({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=d("div"),j(t.$$.fragment),this.h()},l(r){e=m(r,"DIV",{class:!0});var s=v(e);A(t.$$.fragment,s),s.forEach(f),this.h()},h(){_(e,"class",a="add-todo "+o[0]+" svelte-xriol")},m(r,s){b(r,e,s),C(t,e,null),l=!0},p(r,[s]){(!l||s&1&&a!==(a="add-todo "+r[0]+" svelte-xriol"))&&_(e,"class",a)},i(r){l||(w(t.$$.fragment,r),l=!0)},o(r){D(t.$$.fragment,r),l=!1},d(r){r&&f(e),L(t)}}}function we(o,e,t){let{class:a}=e;const l=r=>{let s={id:Date.now(),text:r.detail.value,color:null,done:!1};Y.update(n=>n=[s,...n]),console.log(s)};return o.$$set=r=>{"class"in r&&t(0,a=r.class)},[a,l]}class De extends N{constructor(e){super();F(this,e,we,Te,S,{class:0})}}function Ne(o){let e,t,a,l,r,s;return l=new De({}),r=new be({props:{class:"mt-50"}}),{c(){e=he(),t=d("section"),a=d("div"),j(l.$$.fragment),j(r.$$.fragment),this.h()},l(n){de('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=me(n),t=m(n,"SECTION",{class:!0});var p=v(t);a=m(p,"DIV",{class:!0});var k=v(a);A(l.$$.fragment,k),k.forEach(f),p.forEach(f),A(r.$$.fragment,n),this.h()},h(){document.title="ToDo",_(a,"class","container"),_(t,"class","mt-50")},m(n,i){b(n,e,i),b(n,t,i),E(t,a),C(l,a,null),C(r,n,i),s=!0},p:V,i(n){s||(w(l.$$.fragment,n),w(r.$$.fragment,n),s=!0)},o(n){D(l.$$.fragment,n),D(r.$$.fragment,n),s=!1},d(n){n&&f(e),n&&f(t),L(l),L(r,n)}}}class Se extends N{constructor(e){super();F(this,e,null,Ne,S,{})}}export{Se as default};