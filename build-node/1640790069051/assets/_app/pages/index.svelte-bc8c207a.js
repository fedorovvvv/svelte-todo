import{S as h,i as v,s as m,e as o,c as u,a as f,d as r,b as c,f as d,t as z,g as S,h as V,D as y,E as p,v as E,w as T,x as I,p as k,n as w,A as x,j as $,J as j,l as q}from"../chunks/vendor-16222881.js";function D(i){let e,t=i[2].text&&N(i);return{c(){e=o("button"),t&&t.c(),this.h()},l(s){e=u(s,"BUTTON",{class:!0});var l=f(e);t&&t.l(l),l.forEach(r),this.h()},h(){c(e,"class","btn svelte-15uvliz")},m(s,l){d(s,e,l),t&&t.m(e,null)},p(s,l){s[2].text?t?t.p(s,l):(t=N(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&r(e),t&&t.d()}}}function N(i){let e=i[2].text+"",t;return{c(){t=z(e)},l(s){t=S(s,e)},m(s,l){d(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&V(t,e)},d(s){s&&r(t)}}}function A(i){let e,t,s,l=i[2]&&D(i);return{c(){e=o("div"),t=o("input"),l&&l.c(),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=f(e);t=u(a,"INPUT",{placeholder:!0,class:!0}),l&&l.l(a),a.forEach(r),this.h()},h(){c(t,"placeholder",i[0]),c(t,"class","svelte-15uvliz"),c(e,"class",s="input-group "+i[1]+" "+(i[2]?"input-group_btn":"")+" svelte-15uvliz")},m(n,a){d(n,e,a),y(e,t),l&&l.m(e,null)},p(n,[a]){a&1&&c(t,"placeholder",n[0]),n[2]?l?l.p(n,a):(l=D(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null),a&6&&s!==(s="input-group "+n[1]+" "+(n[2]?"input-group_btn":"")+" svelte-15uvliz")&&c(e,"class",s)},i:p,o:p,d(n){n&&r(e),l&&l.d()}}}function C(i,e,t){let{placeholder:s="Placeholer"}=e,{class:l}=e,{btn:n=null}=e;return i.$$set=a=>{"placeholder"in a&&t(0,s=a.placeholder),"class"in a&&t(1,l=a.class),"btn"in a&&t(2,n=a.btn)},[s,l,n]}class O extends h{constructor(e){super();v(this,e,C,A,m,{placeholder:0,class:1,btn:2})}}function P(i){let e,t,s,l;return t=new O({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),{c(){e=o("div"),E(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=f(e);T(t.$$.fragment,a),a.forEach(r),this.h()},h(){c(e,"class",s="add-todo "+i[0]+" svelte-xriol")},m(n,a){d(n,e,a),I(t,e,null),l=!0},p(n,[a]){(!l||a&1&&s!==(s="add-todo "+n[0]+" svelte-xriol"))&&c(e,"class",s)},i(n){l||(k(t.$$.fragment,n),l=!0)},o(n){w(t.$$.fragment,n),l=!1},d(n){n&&r(e),x(t)}}}function U(i,e,t){let{class:s}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class B extends h{constructor(e){super();v(this,e,U,P,m,{class:0})}}function J(i){let e,t,s,l,n;return l=new B({}),{c(){e=$(),t=o("section"),s=o("div"),E(l.$$.fragment),this.h()},l(a){j('[data-svelte="svelte-8twn25"]',document.head).forEach(r),e=q(a),t=u(a,"SECTION",{class:!0});var g=f(t);s=u(g,"DIV",{class:!0});var b=f(s);T(l.$$.fragment,b),b.forEach(r),g.forEach(r),this.h()},h(){document.title="ToDo",c(s,"class","container"),c(t,"class","add-section svelte-xmnhfw")},m(a,_){d(a,e,_),d(a,t,_),y(t,s),I(l,s,null),n=!0},p,i(a){n||(k(l.$$.fragment,a),n=!0)},o(a){w(l.$$.fragment,a),n=!1},d(a){a&&r(e),a&&r(t),x(l)}}}class F extends h{constructor(e){super();v(this,e,null,J,m,{})}}export{F as default};