import{C as U,S as k,i as E,s as y,e as d,t as C,c as h,a as v,g as V,d as f,b as _,f as m,D as g,h as A,E as b,v as I,w as N,x as D,p as T,n as x,A as w,J as P,K as j,L as q,M as B,N as F,j as J,O as K,l as M}from"../chunks/vendor-d575e155.js";const R=U([{text:"test task",done:!1}]);function z(c){let e,s,l,t,a,n;return{c(){e=d("li"),s=d("p"),l=C(c[1]),t=d("div"),this.h()},l(i){e=h(i,"LI",{class:!0});var r=v(e);s=h(r,"P",{class:!0});var o=v(s);l=V(o,c[1]),o.forEach(f),t=h(r,"DIV",{class:!0,style:!0}),v(t).forEach(f),r.forEach(f),this.h()},h(){_(s,"class","svelte-18tgxds"),_(t,"class","task__menu svelte-18tgxds"),_(t,"style",a=`background-color: ${c[2]}`),_(e,"class",n="task "+c[0]+" svelte-18tgxds")},m(i,r){m(i,e,r),g(e,s),g(s,l),g(e,t)},p(i,[r]){r&2&&A(l,i[1]),r&4&&a!==(a=`background-color: ${i[2]}`)&&_(t,"style",a),r&1&&n!==(n="task "+i[0]+" svelte-18tgxds")&&_(e,"class",n)},i:b,o:b,d(i){i&&f(e)}}}function G(c,e,s){let{class:l}=e,{text:t=""}=e,{color:a="#0029FF"}=e;return c.$$set=n=>{"class"in n&&s(0,l=n.class),"text"in n&&s(1,t=n.text),"color"in n&&s(2,a=n.color)},[l,t,a]}class H extends k{constructor(e){super();E(this,e,G,z,y,{class:0,text:1,color:2})}}function Q(c,e,s){const l=c.slice();return l[1]=e[s],l}function W(c){let e,s;return e=new H({props:{text:"Test text"}}),{c(){I(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,t){D(e,l,t),s=!0},p:b,i(l){s||(T(e.$$.fragment,l),s=!0)},o(l){x(e.$$.fragment,l),s=!1},d(l){w(e,l)}}}function X(c){let e,s,l,t,a,n,i=R,r=[];for(let o=0;o<i.length;o+=1)r[o]=W(Q(c,i,o));return{c(){e=d("section"),s=d("div"),l=d("ul");for(let o=0;o<r.length;o+=1)r[o].c();t=d("ul"),this.h()},l(o){e=h(o,"SECTION",{class:!0});var u=v(e);s=h(u,"DIV",{class:!0});var p=v(s);l=h(p,"UL",{class:!0});var $=v(l);for(let S=0;S<r.length;S+=1)r[S].l($);$.forEach(f),t=h(p,"UL",{class:!0}),v(t).forEach(f),p.forEach(f),u.forEach(f),this.h()},h(){_(l,"class","task-section__col"),_(t,"class","task-section__col"),_(s,"class","container task-section__grid"),_(e,"class",a="task-section "+c[0]+" svelte-xriol")},m(o,u){m(o,e,u),g(e,s),g(s,l);for(let p=0;p<r.length;p+=1)r[p].m(l,null);g(s,t),n=!0},p(o,[u]){(!n||u&1&&a!==(a="task-section "+o[0]+" svelte-xriol"))&&_(e,"class",a)},i(o){if(!n){for(let u=0;u<i.length;u+=1)T(r[u]);n=!0}},o(o){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)x(r[u]);n=!1},d(o){o&&f(e),P(r,o)}}}function Y(c,e,s){let{class:l}=e;return c.$$set=t=>{"class"in t&&s(0,l=t.class)},[l]}class Z extends k{constructor(e){super();E(this,e,Y,X,y,{class:0})}}function L(c){let e,s,l,t=c[2].text&&O(c);return{c(){e=d("button"),t&&t.c(),this.h()},l(a){e=h(a,"BUTTON",{class:!0});var n=v(e);t&&t.l(n),n.forEach(f),this.h()},h(){_(e,"class","btn svelte-1td548p")},m(a,n){m(a,e,n),t&&t.m(e,null),s||(l=j(e,"click",q(c[4])),s=!0)},p(a,n){a[2].text?t?t.p(a,n):(t=O(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(a){a&&f(e),t&&t.d(),s=!1,l()}}}function O(c){let e=c[2].text+"",s;return{c(){s=C(e)},l(l){s=V(l,e)},m(l,t){m(l,s,t)},p(l,t){t&4&&e!==(e=l[2].text+"")&&A(s,e)},d(l){l&&f(s)}}}function ee(c){let e,s,l,t=c[2]&&L(c);return{c(){e=d("div"),s=d("input"),t&&t.c(),this.h()},l(a){e=h(a,"DIV",{class:!0});var n=v(e);s=h(n,"INPUT",{placeholder:!0,class:!0}),t&&t.l(n),n.forEach(f),this.h()},h(){_(s,"placeholder",c[1]),_(s,"class","svelte-1td548p"),_(e,"class",l="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-1td548p")},m(a,n){m(a,e,n),g(e,s),t&&t.m(e,null),c[5](e)},p(a,[n]){n&2&&_(s,"placeholder",a[1]),a[2]?t?t.p(a,n):(t=L(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1td548p")&&_(e,"class",l)},i:b,o:b,d(a){a&&f(e),t&&t.d(),c[5](null)}}}function te(c,e,s){let{class:l}=e,{placeholder:t="Placeholer"}=e,{btn:a=null}=e,n;const i=B(),r=()=>{i("submit",{value:"value"})};function o(u){F[u?"unshift":"push"](()=>{n=u,s(3,n)})}return c.$$set=u=>{"class"in u&&s(0,l=u.class),"placeholder"in u&&s(1,t=u.placeholder),"btn"in u&&s(2,a=u.btn)},[l,t,a,n,r,o]}class se extends k{constructor(e){super();E(this,e,te,ee,y,{class:0,placeholder:1,btn:2})}}function le(c){let e,s,l,t;return s=new se({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("submit",c[1]),{c(){e=d("div"),I(s.$$.fragment),this.h()},l(a){e=h(a,"DIV",{class:!0});var n=v(e);N(s.$$.fragment,n),n.forEach(f),this.h()},h(){_(e,"class",l="add-todo "+c[0]+" svelte-xriol")},m(a,n){m(a,e,n),D(s,e,null),t=!0},p(a,[n]){(!t||n&1&&l!==(l="add-todo "+a[0]+" svelte-xriol"))&&_(e,"class",l)},i(a){t||(T(s.$$.fragment,a),t=!0)},o(a){x(s.$$.fragment,a),t=!1},d(a){a&&f(e),w(s)}}}function ae(c,e,s){let{class:l}=e;const t=a=>{console.log("submit",a)};return c.$$set=a=>{"class"in a&&s(0,l=a.class)},[l,t]}class ne extends k{constructor(e){super();E(this,e,ae,le,y,{class:0})}}function ce(c){let e,s,l,t,a,n;return t=new ne({}),a=new Z({props:{class:"mt-50"}}),{c(){e=J(),s=d("section"),l=d("div"),I(t.$$.fragment),I(a.$$.fragment),this.h()},l(i){K('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=M(i),s=h(i,"SECTION",{class:!0});var o=v(s);l=h(o,"DIV",{class:!0});var u=v(l);N(t.$$.fragment,u),u.forEach(f),o.forEach(f),N(a.$$.fragment,i),this.h()},h(){document.title="ToDo",_(l,"class","container"),_(s,"class","mt-50")},m(i,r){m(i,e,r),m(i,s,r),g(s,l),D(t,l,null),D(a,i,r),n=!0},p:b,i(i){n||(T(t.$$.fragment,i),T(a.$$.fragment,i),n=!0)},o(i){x(t.$$.fragment,i),x(a.$$.fragment,i),n=!1},d(i){i&&f(e),i&&f(s),w(t),w(a,i)}}}class re extends k{constructor(e){super();E(this,e,null,ce,y,{})}}export{re as default};