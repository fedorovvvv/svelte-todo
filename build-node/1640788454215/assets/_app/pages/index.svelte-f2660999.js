import{S as m,i as p,s as v,e as c,c as u,a as d,d as r,b as o,f,t as S,g as V,h as j,D as E,E as _,v as N,w as T,x as y,p as I,n as k,A as D,j as q,J as x,l as A}from"../chunks/vendor-16222881.js";function w(i){let e,t=i[2].text&&z(i);return{c(){e=c("button"),t&&t.c(),this.h()},l(n){e=u(n,"BUTTON",{class:!0});var l=d(e);t&&t.l(l),l.forEach(r),this.h()},h(){o(e,"class","btn")},m(n,l){f(n,e,l),t&&t.m(e,null)},p(n,l){n[2].text?t?t.p(n,l):(t=z(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(n){n&&r(e),t&&t.d()}}}function z(i){let e=i[2].text+"",t;return{c(){t=S(e)},l(n){t=V(n,e)},m(n,l){f(n,t,l)},p(n,l){l&4&&e!==(e=n[2].text+"")&&j(t,e)},d(n){n&&r(t)}}}function C(i){let e,t,n,l=i[2]&&w(i);return{c(){e=c("div"),t=c("input"),l&&l.c(),this.h()},l(a){e=u(a,"DIV",{class:!0});var s=d(e);t=u(s,"INPUT",{placeholder:!0,class:!0}),l&&l.l(s),s.forEach(r),this.h()},h(){o(t,"placeholder",i[0]),o(t,"class","svelte-f0rfhz"),o(e,"class",n="input-group "+i[1]+" "+(i[2]?"input-group_btn":"")+" svelte-f0rfhz")},m(a,s){f(a,e,s),E(e,t),l&&l.m(e,null)},p(a,[s]){s&1&&o(t,"placeholder",a[0]),a[2]?l?l.p(a,s):(l=w(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null),s&6&&n!==(n="input-group "+a[1]+" "+(a[2]?"input-group_btn":"")+" svelte-f0rfhz")&&o(e,"class",n)},i:_,o:_,d(a){a&&r(e),l&&l.d()}}}function O(i,e,t){let{placeholder:n="Placeholer"}=e,{className:l=""}=e,{btn:a=null}=e;return i.$$set=s=>{"placeholder"in s&&t(0,n=s.placeholder),"className"in s&&t(1,l=s.className),"btn"in s&&t(2,a=s.btn)},[n,l,a]}class P extends m{constructor(e){super();p(this,e,O,C,v,{placeholder:0,className:1,btn:2})}}function U(i){let e,t,n;return t=new P({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),{c(){e=c("div"),N(t.$$.fragment),this.h()},l(l){e=u(l,"DIV",{class:!0});var a=d(e);T(t.$$.fragment,a),a.forEach(r),this.h()},h(){o(e,"class","add-todo")},m(l,a){f(l,e,a),y(t,e,null),n=!0},p:_,i(l){n||(I(t.$$.fragment,l),n=!0)},o(l){k(t.$$.fragment,l),n=!1},d(l){l&&r(e),D(t)}}}class $ extends m{constructor(e){super();p(this,e,null,U,v,{})}}function B(i){let e,t,n,l,a;return l=new $({}),{c(){e=q(),t=c("section"),n=c("div"),N(l.$$.fragment),this.h()},l(s){x('[data-svelte="svelte-8twn25"]',document.head).forEach(r),e=A(s),t=u(s,"SECTION",{});var b=d(t);n=u(b,"DIV",{class:!0});var g=d(n);T(l.$$.fragment,g),g.forEach(r),b.forEach(r),this.h()},h(){document.title="ToDo",o(n,"class","container")},m(s,h){f(s,e,h),f(s,t,h),E(t,n),y(l,n,null),a=!0},p:_,i(s){a||(I(l.$$.fragment,s),a=!0)},o(s){k(l.$$.fragment,s),a=!1},d(s){s&&r(e),s&&r(t),D(l)}}}class R extends m{constructor(e){super();p(this,e,null,B,v,{})}}export{R as default};