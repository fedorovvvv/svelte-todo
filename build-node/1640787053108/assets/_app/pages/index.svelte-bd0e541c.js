import{S as p,i as _,s as v,e as i,c as d,a as u,d as o,b as c,f,D as E,E as h,v as N,w as I,x,p as y,n as D,A as w,j as T,J as z,l as S}from"../chunks/vendor-16222881.js";function V(r){let e,s,n;return{c(){e=i("div"),s=i("input"),this.h()},l(t){e=d(t,"DIV",{class:!0});var a=u(e);s=d(a,"INPUT",{placeholder:!0,class:!0}),a.forEach(o),this.h()},h(){c(s,"placeholder",r[0]),c(s,"class","svelte-f0rfhz"),c(e,"class",n="input-group "+r[1]+" svelte-f0rfhz")},m(t,a){f(t,e,a),E(e,s)},p(t,[a]){a&1&&c(s,"placeholder",t[0]),a&2&&n!==(n="input-group "+t[1]+" svelte-f0rfhz")&&c(e,"class",n)},i:h,o:h,d(t){t&&o(e)}}}function j(r,e,s){let{placeholder:n="Placeholer"}=e,{className:t=""}=e;return r.$$set=a=>{"placeholder"in a&&s(0,n=a.placeholder),"className"in a&&s(1,t=a.className)},[n,t]}class q extends p{constructor(e){super();_(this,e,j,V,v,{placeholder:0,className:1})}}function A(r){let e,s,n;return s=new q({props:{placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",className:"add-todo__input"}}),{c(){e=i("div"),N(s.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var a=u(e);I(s.$$.fragment,a),a.forEach(o),this.h()},h(){c(e,"class","add-todo")},m(t,a){f(t,e,a),x(s,e,null),n=!0},p:h,i(t){n||(y(s.$$.fragment,t),n=!0)},o(t){D(s.$$.fragment,t),n=!1},d(t){t&&o(e),w(s)}}}class C extends p{constructor(e){super();_(this,e,null,A,v,{})}}function P(r){let e,s,n,t,a;return t=new C({}),{c(){e=T(),s=i("section"),n=i("div"),N(t.$$.fragment),this.h()},l(l){z('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=S(l),s=d(l,"SECTION",{});var g=u(s);n=d(g,"DIV",{class:!0});var $=u(n);I(t.$$.fragment,$),$.forEach(o),g.forEach(o),this.h()},h(){document.title="ToDo",c(n,"class","container")},m(l,m){f(l,e,m),f(l,s,m),E(s,n),x(t,n,null),a=!0},p:h,i(l){a||(y(t.$$.fragment,l),a=!0)},o(l){D(t.$$.fragment,l),a=!1},d(l){l&&o(e),l&&o(s),w(t)}}}class k extends p{constructor(e){super();_(this,e,null,P,v,{})}}export{k as default};