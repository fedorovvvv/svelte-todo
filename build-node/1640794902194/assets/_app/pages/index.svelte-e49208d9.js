import{C as j,S as T,i as I,s as x,e as h,t as V,c as m,a as v,g as F,d as f,b as _,f as p,D as b,h as L,E as N,v as D,w,x as S,p as k,n as E,A,m as q,o as B,J,K,L as M,M as R,N as z,O as G,j as H,P as Q,l as W}from"../chunks/vendor-7d83252f.js";const X=j([{text:"test task",done:!1}]);function Y(c){let e,l,a,t,s,n;return{c(){e=h("li"),l=h("p"),a=V(c[1]),t=h("div"),this.h()},l(i){e=m(i,"LI",{class:!0});var r=v(e);l=m(r,"P",{class:!0});var g=v(l);a=F(g,c[1]),g.forEach(f),t=m(r,"DIV",{class:!0,style:!0}),v(t).forEach(f),r.forEach(f),this.h()},h(){_(l,"class","svelte-18tgxds"),_(t,"class","task__menu svelte-18tgxds"),_(t,"style",s=`background-color: ${c[2]!=null?c[2]:"#0029FF"}`),_(e,"class",n="task "+c[0]+" svelte-18tgxds")},m(i,r){p(i,e,r),b(e,l),b(l,a),b(e,t)},p(i,[r]){r&2&&L(a,i[1]),r&4&&s!==(s=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`)&&_(t,"style",s),r&1&&n!==(n="task "+i[0]+" svelte-18tgxds")&&_(e,"class",n)},i:N,o:N,d(i){i&&f(e)}}}function Z(c,e,l){let{class:a}=e,{text:t=""}=e,{color:s=null}=e;return c.$$set=n=>{"class"in n&&l(0,a=n.class),"text"in n&&l(1,t=n.text),"color"in n&&l(2,s=n.color)},[a,t,s]}class ee extends T{constructor(e){super();I(this,e,Z,Y,x,{class:0,text:1,color:2})}}function O(c,e,l){const a=c.slice();return a[2]=e[l],a}function P(c){let e,l;return e=new ee({props:{text:c[2].text}}),{c(){D(e.$$.fragment)},l(a){w(e.$$.fragment,a)},m(a,t){S(e,a,t),l=!0},p(a,t){const s={};t&2&&(s.text=a[2].text),e.$set(s)},i(a){l||(k(e.$$.fragment,a),l=!0)},o(a){E(e.$$.fragment,a),l=!1},d(a){A(e,a)}}}function te(c){let e,l,a,t,s,n,i=c[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=P(O(c,i,o));const g=o=>E(r[o],1,1,()=>{r[o]=null});return{c(){e=h("section"),l=h("div"),a=h("ul");for(let o=0;o<r.length;o+=1)r[o].c();t=h("ul"),this.h()},l(o){e=m(o,"SECTION",{class:!0});var d=v(e);l=m(d,"DIV",{class:!0});var u=v(l);a=m(u,"UL",{class:!0});var y=v(a);for(let C=0;C<r.length;C+=1)r[C].l(y);y.forEach(f),t=m(u,"UL",{class:!0}),v(t).forEach(f),u.forEach(f),d.forEach(f),this.h()},h(){_(a,"class","task-section__col"),_(t,"class","task-section__col"),_(l,"class","container task-section__grid"),_(e,"class",s="task-section "+c[0]+" svelte-xriol")},m(o,d){p(o,e,d),b(e,l),b(l,a);for(let u=0;u<r.length;u+=1)r[u].m(a,null);b(l,t),n=!0},p(o,[d]){if(d&2){i=o[1];let u;for(u=0;u<i.length;u+=1){const y=O(o,i,u);r[u]?(r[u].p(y,d),k(r[u],1)):(r[u]=P(y),r[u].c(),k(r[u],1),r[u].m(a,null))}for(q(),u=i.length;u<r.length;u+=1)g(u);B()}(!n||d&1&&s!==(s="task-section "+o[0]+" svelte-xriol"))&&_(e,"class",s)},i(o){if(!n){for(let d=0;d<i.length;d+=1)k(r[d]);n=!0}},o(o){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)E(r[d]);n=!1},d(o){o&&f(e),J(r,o)}}}function se(c,e,l){let a;K(c,X,s=>l(1,a=s));let{class:t}=e;return c.$$set=s=>{"class"in s&&l(0,t=s.class)},[t,a]}class le extends T{constructor(e){super();I(this,e,se,te,x,{class:0})}}function U(c){let e,l,a,t=c[2].text&&$(c);return{c(){e=h("button"),t&&t.c(),this.h()},l(s){e=m(s,"BUTTON",{class:!0});var n=v(e);t&&t.l(n),n.forEach(f),this.h()},h(){_(e,"class","btn svelte-1td548p")},m(s,n){p(s,e,n),t&&t.m(e,null),l||(a=M(e,"click",R(c[4])),l=!0)},p(s,n){s[2].text?t?t.p(s,n):(t=$(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&f(e),t&&t.d(),l=!1,a()}}}function $(c){let e=c[2].text+"",l;return{c(){l=V(e)},l(a){l=F(a,e)},m(a,t){p(a,l,t)},p(a,t){t&4&&e!==(e=a[2].text+"")&&L(l,e)},d(a){a&&f(l)}}}function ae(c){let e,l,a,t=c[2]&&U(c);return{c(){e=h("div"),l=h("input"),t&&t.c(),this.h()},l(s){e=m(s,"DIV",{class:!0});var n=v(e);l=m(n,"INPUT",{placeholder:!0,class:!0}),t&&t.l(n),n.forEach(f),this.h()},h(){_(l,"placeholder",c[1]),_(l,"class","svelte-1td548p"),_(e,"class",a="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-1td548p")},m(s,n){p(s,e,n),b(e,l),t&&t.m(e,null),c[5](e)},p(s,[n]){n&2&&_(l,"placeholder",s[1]),s[2]?t?t.p(s,n):(t=U(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&5&&a!==(a="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1td548p")&&_(e,"class",a)},i:N,o:N,d(s){s&&f(e),t&&t.d(),c[5](null)}}}function ne(c,e,l){let{class:a}=e,{placeholder:t="Placeholer"}=e,{btn:s=null}=e,n;const i=z(),r=()=>{i("submit",{value:"value"})};function g(o){G[o?"unshift":"push"](()=>{n=o,l(3,n)})}return c.$$set=o=>{"class"in o&&l(0,a=o.class),"placeholder"in o&&l(1,t=o.placeholder),"btn"in o&&l(2,s=o.btn)},[a,t,s,n,r,g]}class ce extends T{constructor(e){super();I(this,e,ne,ae,x,{class:0,placeholder:1,btn:2})}}function re(c){let e,l,a,t;return l=new ce({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",c[1]),{c(){e=h("div"),D(l.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0});var n=v(e);w(l.$$.fragment,n),n.forEach(f),this.h()},h(){_(e,"class",a="add-todo "+c[0]+" svelte-xriol")},m(s,n){p(s,e,n),S(l,e,null),t=!0},p(s,[n]){(!t||n&1&&a!==(a="add-todo "+s[0]+" svelte-xriol"))&&_(e,"class",a)},i(s){t||(k(l.$$.fragment,s),t=!0)},o(s){E(l.$$.fragment,s),t=!1},d(s){s&&f(e),A(l)}}}function ie(c,e,l){let{class:a}=e;const t=s=>{console.log("submit",s)};return c.$$set=s=>{"class"in s&&l(0,a=s.class)},[a,t]}class oe extends T{constructor(e){super();I(this,e,ie,re,x,{class:0})}}function ue(c){let e,l,a,t,s,n;return t=new oe({}),s=new le({props:{class:"mt-50"}}),{c(){e=H(),l=h("section"),a=h("div"),D(t.$$.fragment),D(s.$$.fragment),this.h()},l(i){Q('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=W(i),l=m(i,"SECTION",{class:!0});var g=v(l);a=m(g,"DIV",{class:!0});var o=v(a);w(t.$$.fragment,o),o.forEach(f),g.forEach(f),w(s.$$.fragment,i),this.h()},h(){document.title="ToDo",_(a,"class","container"),_(l,"class","mt-50")},m(i,r){p(i,e,r),p(i,l,r),b(l,a),S(t,a,null),S(s,i,r),n=!0},p:N,i(i){n||(k(t.$$.fragment,i),k(s.$$.fragment,i),n=!0)},o(i){E(t.$$.fragment,i),E(s.$$.fragment,i),n=!1},d(i){i&&f(e),i&&f(l),A(t),A(s,i)}}}class _e extends T{constructor(e){super();I(this,e,null,ue,x,{})}}export{_e as default};