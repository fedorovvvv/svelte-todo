import{S as m,i as _,s as v,e as i,c as d,a as u,d as l,b as c,f as h,D as x,E as p,v as E,w as y,x as I,p as D,n as q,A as w,j as T,J as S,l as V}from"../chunks/vendor-16222881.js";function j(o){let e,a;return{c(){e=i("div"),a=i("input"),this.h()},l(s){e=d(s,"DIV",{class:!0});var t=u(e);a=d(t,"INPUT",{placeholder:!0,class:!0}),t.forEach(l),this.h()},h(){c(a,"placeholder",o[0]),c(a,"class","svelte-igxeqa"),c(e,"class","input-group svelte-igxeqa")},m(s,t){h(s,e,t),x(e,a)},p(s,[t]){t&1&&c(a,"placeholder",s[0])},i:p,o:p,d(s){s&&l(e)}}}function A(o,e,a){let{placeholder:s="Placeholer"}=e;return o.$$set=t=>{"placeholder"in t&&a(0,s=t.placeholder)},[s]}class C extends m{constructor(e){super();_(this,e,A,j,v,{placeholder:0})}}function N(o){let e,a,s;return a=new C({props:{placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C"}}),{c(){e=i("div"),E(a.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var r=u(e);y(a.$$.fragment,r),r.forEach(l),this.h()},h(){c(e,"class","add-todo")},m(t,r){h(t,e,r),I(a,e,null),s=!0},p,i(t){s||(D(a.$$.fragment,t),s=!0)},o(t){q(a.$$.fragment,t),s=!1},d(t){t&&l(e),w(a)}}}class P extends m{constructor(e){super();_(this,e,null,N,v,{})}}function b(o){let e,a,s,t,r;return t=new P({}),{c(){e=T(),a=i("section"),s=i("div"),E(t.$$.fragment),this.h()},l(n){S('[data-svelte="svelte-8twn25"]',document.head).forEach(l),e=V(n),a=d(n,"SECTION",{});var $=u(a);s=d($,"DIV",{class:!0});var g=u(s);y(t.$$.fragment,g),g.forEach(l),$.forEach(l),this.h()},h(){document.title="ToDo",c(s,"class","container")},m(n,f){h(n,e,f),h(n,a,f),x(a,s),I(t,s,null),r=!0},p,i(n){r||(D(t.$$.fragment,n),r=!0)},o(n){q(t.$$.fragment,n),r=!1},d(n){n&&l(e),n&&l(a),w(t)}}}class J extends m{constructor(e){super();_(this,e,null,b,v,{})}}export{J as default};