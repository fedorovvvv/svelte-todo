import{S as g,i as b,s as k,e as d,t as w,c as h,a as v,g as $,d as o,b as u,f as m,D as p,h as x,E,v as y,w as T,x as I,p as N,n as D,A as S,J as L,K as U,L as A,M as O,j as P,N as j,l as F}from"../chunks/vendor-cba0ff05.js";function B(i){let e,l,a,t,s,n;return{c(){e=d("li"),l=d("p"),a=w(i[1]),t=d("div"),this.h()},l(c){e=h(c,"LI",{class:!0});var r=v(e);l=h(r,"P",{class:!0});var _=v(l);a=$(_,i[1]),_.forEach(o),t=h(r,"DIV",{class:!0,stype:!0}),v(t).forEach(o),r.forEach(o),this.h()},h(){u(l,"class","svelte-1fa6qi8"),u(t,"class","task__menu svelte-1fa6qi8"),u(t,"stype",s=`color: ${i[2]}`),u(e,"class",n="task "+i[0]+" svelte-1fa6qi8")},m(c,r){m(c,e,r),p(e,l),p(l,a),p(e,t)},p(c,[r]){r&2&&x(a,c[1]),r&4&&s!==(s=`color: ${c[2]}`)&&u(t,"stype",s),r&1&&n!==(n="task "+c[0]+" svelte-1fa6qi8")&&u(e,"class",n)},i:E,o:E,d(c){c&&o(e)}}}function J(i,e,l){let{class:a}=e,{text:t}=e,{color:s="#0029FF"}=e;return i.$$set=n=>{"class"in n&&l(0,a=n.class),"text"in n&&l(1,t=n.text),"color"in n&&l(2,s=n.color)},[a,t,s]}class K extends g{constructor(e){super();b(this,e,J,B,k,{class:0,text:1,color:2})}}function M(i){let e,l,a,t,s,n,c;return t=new K({props:{text:"Test text"}}),{c(){e=d("section"),l=d("div"),a=d("ul"),y(t.$$.fragment),s=d("ul"),this.h()},l(r){e=h(r,"SECTION",{class:!0});var _=v(e);l=h(_,"DIV",{class:!0});var f=v(l);a=h(f,"UL",{class:!0});var q=v(a);T(t.$$.fragment,q),q.forEach(o),s=h(f,"UL",{class:!0}),v(s).forEach(o),f.forEach(o),_.forEach(o),this.h()},h(){u(a,"class","task-section__col"),u(s,"class","task-section__col"),u(l,"class","container task-section__grid"),u(e,"class",n="task-section "+i[0]+" svelte-xriol")},m(r,_){m(r,e,_),p(e,l),p(l,a),I(t,a,null),p(l,s),c=!0},p(r,[_]){(!c||_&1&&n!==(n="task-section "+r[0]+" svelte-xriol"))&&u(e,"class",n)},i(r){c||(N(t.$$.fragment,r),c=!0)},o(r){D(t.$$.fragment,r),c=!1},d(r){r&&o(e),S(t)}}}function R(i,e,l){let{class:a}=e;return i.$$set=t=>{"class"in t&&l(0,a=t.class)},[a]}class z extends g{constructor(e){super();b(this,e,R,M,k,{class:0})}}function V(i){let e,l,a,t=i[2].text&&C(i);return{c(){e=d("button"),t&&t.c(),this.h()},l(s){e=h(s,"BUTTON",{class:!0});var n=v(e);t&&t.l(n),n.forEach(o),this.h()},h(){u(e,"class","btn svelte-1td548p")},m(s,n){m(s,e,n),t&&t.m(e,null),l||(a=L(e,"click",U(i[4])),l=!0)},p(s,n){s[2].text?t?t.p(s,n):(t=C(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&o(e),t&&t.d(),l=!1,a()}}}function C(i){let e=i[2].text+"",l;return{c(){l=w(e)},l(a){l=$(a,e)},m(a,t){m(a,l,t)},p(a,t){t&4&&e!==(e=a[2].text+"")&&x(l,e)},d(a){a&&o(l)}}}function G(i){let e,l,a,t=i[2]&&V(i);return{c(){e=d("div"),l=d("input"),t&&t.c(),this.h()},l(s){e=h(s,"DIV",{class:!0});var n=v(e);l=h(n,"INPUT",{placeholder:!0,class:!0}),t&&t.l(n),n.forEach(o),this.h()},h(){u(l,"placeholder",i[1]),u(l,"class","svelte-1td548p"),u(e,"class",a="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-1td548p")},m(s,n){m(s,e,n),p(e,l),t&&t.m(e,null),i[5](e)},p(s,[n]){n&2&&u(l,"placeholder",s[1]),s[2]?t?t.p(s,n):(t=V(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&5&&a!==(a="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1td548p")&&u(e,"class",a)},i:E,o:E,d(s){s&&o(e),t&&t.d(),i[5](null)}}}function H(i,e,l){let{class:a}=e,{placeholder:t="Placeholer"}=e,{btn:s=null}=e,n;const c=A(),r=()=>{c("submit",{value:"value"})};function _(f){O[f?"unshift":"push"](()=>{n=f,l(3,n)})}return i.$$set=f=>{"class"in f&&l(0,a=f.class),"placeholder"in f&&l(1,t=f.placeholder),"btn"in f&&l(2,s=f.btn)},[a,t,s,n,r,_]}class Q extends g{constructor(e){super();b(this,e,H,G,k,{class:0,placeholder:1,btn:2})}}function W(i){let e,l,a,t;return l=new Q({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",i[1]),{c(){e=d("div"),y(l.$$.fragment),this.h()},l(s){e=h(s,"DIV",{class:!0});var n=v(e);T(l.$$.fragment,n),n.forEach(o),this.h()},h(){u(e,"class",a="add-todo "+i[0]+" svelte-xriol")},m(s,n){m(s,e,n),I(l,e,null),t=!0},p(s,[n]){(!t||n&1&&a!==(a="add-todo "+s[0]+" svelte-xriol"))&&u(e,"class",a)},i(s){t||(N(l.$$.fragment,s),t=!0)},o(s){D(l.$$.fragment,s),t=!1},d(s){s&&o(e),S(l)}}}function X(i,e,l){let{class:a}=e;const t=s=>{console.log("submit",s)};return i.$$set=s=>{"class"in s&&l(0,a=s.class)},[a,t]}class Y extends g{constructor(e){super();b(this,e,X,W,k,{class:0})}}function Z(i){let e,l,a,t,s,n;return t=new Y({}),s=new z({props:{class:"mt-50"}}),{c(){e=P(),l=d("section"),a=d("div"),y(t.$$.fragment),y(s.$$.fragment),this.h()},l(c){j('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=F(c),l=h(c,"SECTION",{class:!0});var _=v(l);a=h(_,"DIV",{class:!0});var f=v(a);T(t.$$.fragment,f),f.forEach(o),_.forEach(o),T(s.$$.fragment,c),this.h()},h(){document.title="ToDo",u(a,"class","container"),u(l,"class","mt-50")},m(c,r){m(c,e,r),m(c,l,r),p(l,a),I(t,a,null),I(s,c,r),n=!0},p:E,i(c){n||(N(t.$$.fragment,c),N(s.$$.fragment,c),n=!0)},o(c){D(t.$$.fragment,c),D(s.$$.fragment,c),n=!1},d(c){c&&o(e),c&&o(l),S(t),S(s,c)}}}class te extends g{constructor(e){super();b(this,e,null,Z,k,{})}}export{te as default};