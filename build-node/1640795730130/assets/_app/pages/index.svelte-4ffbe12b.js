import{C as K,S as y,i as I,s as N,e as h,t as C,c as v,a as m,g as V,d as f,b as _,f as g,D as b,h as L,E as w,v as D,w as S,x as F,p as k,n as E,A as j,m as M,o as Q,J as R,K as G,L as O,M as H,N as P,O as W,P as X,j as Y,Q as Z,l as $}from"../chunks/vendor-e80d1b85.js";const U=K([{text:"test task",done:!1},{text:"test task 2",done:!1,color:"#FF9900"}]);function x(r){let e,t,s,l,n,c;return{c(){e=h("li"),t=h("p"),s=C(r[1]),l=h("div"),this.h()},l(a){e=v(a,"LI",{class:!0});var o=m(e);t=v(o,"P",{class:!0});var p=m(t);s=V(p,r[1]),p.forEach(f),l=v(o,"DIV",{class:!0,style:!0}),m(l).forEach(f),o.forEach(f),this.h()},h(){_(t,"class","svelte-1s64vcb"),_(l,"class","task__menu svelte-1s64vcb"),_(l,"style",n=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`),_(e,"class",c="task "+r[0]+" svelte-1s64vcb")},m(a,o){g(a,e,o),b(e,t),b(t,s),b(e,l)},p(a,[o]){o&2&&L(s,a[1]),o&4&&n!==(n=`background-color: ${a[2]!=null?a[2]:"#0029FF"}`)&&_(l,"style",n),o&1&&c!==(c="task "+a[0]+" svelte-1s64vcb")&&_(e,"class",c)},i:w,o:w,d(a){a&&f(e)}}}function ee(r,e,t){let{class:s}=e,{text:l=""}=e,{color:n=null}=e;return r.$$set=c=>{"class"in c&&t(0,s=c.class),"text"in c&&t(1,l=c.text),"color"in c&&t(2,n=c.color)},[s,l,n]}class te extends y{constructor(e){super();I(this,e,ee,x,N,{class:0,text:1,color:2})}}function z(r,e,t){const s=r.slice();return s[2]=e[t],s}function q(r){let e,t;return e=new te({props:{class:"task-section__item",text:r[2].text,color:r[2].color?r[2].color:null}}),{c(){D(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,l){F(e,s,l),t=!0},p(s,l){const n={};l&2&&(n.text=s[2].text),l&2&&(n.color=s[2].color?s[2].color:null),e.$set(n)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){E(e.$$.fragment,s),t=!1},d(s){j(e,s)}}}function se(r){let e,t,s,l,n,c,a=r[1],o=[];for(let u=0;u<a.length;u+=1)o[u]=q(z(r,a,u));const p=u=>E(o[u],1,1,()=>{o[u]=null});return{c(){e=h("section"),t=h("div"),s=h("ul");for(let u=0;u<o.length;u+=1)o[u].c();l=h("ul"),this.h()},l(u){e=v(u,"SECTION",{class:!0});var d=m(e);t=v(d,"DIV",{class:!0});var i=m(t);s=v(i,"UL",{class:!0});var T=m(s);for(let A=0;A<o.length;A+=1)o[A].l(T);T.forEach(f),l=v(i,"UL",{class:!0}),m(l).forEach(f),i.forEach(f),d.forEach(f),this.h()},h(){_(s,"class","task-section__col"),_(l,"class","task-section__col"),_(t,"class","container task-section__grid svelte-ezmjle"),_(e,"class",n="task-section "+r[0]+" svelte-ezmjle")},m(u,d){g(u,e,d),b(e,t),b(t,s);for(let i=0;i<o.length;i+=1)o[i].m(s,null);b(t,l),c=!0},p(u,[d]){if(d&2){a=u[1];let i;for(i=0;i<a.length;i+=1){const T=z(u,a,i);o[i]?(o[i].p(T,d),k(o[i],1)):(o[i]=q(T),o[i].c(),k(o[i],1),o[i].m(s,null))}for(M(),i=a.length;i<o.length;i+=1)p(i);Q()}(!c||d&1&&n!==(n="task-section "+u[0]+" svelte-ezmjle"))&&_(e,"class",n)},i(u){if(!c){for(let d=0;d<a.length;d+=1)k(o[d]);c=!0}},o(u){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)E(o[d]);c=!1},d(u){u&&f(e),R(o,u)}}}function le(r,e,t){let s;G(r,U,n=>t(1,s=n));let{class:l}=e;return r.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s]}class ne extends y{constructor(e){super();I(this,e,le,se,N,{class:0})}}function B(r){let e,t,s,l=r[2].text&&J(r);return{c(){e=h("button"),l&&l.c(),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var c=m(e);l&&l.l(c),c.forEach(f),this.h()},h(){_(e,"class","btn svelte-1td548p")},m(n,c){g(n,e,c),l&&l.m(e,null),t||(s=O(e,"click",H(r[5])),t=!0)},p(n,c){n[2].text?l?l.p(n,c):(l=J(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&f(e),l&&l.d(),t=!1,s()}}}function J(r){let e=r[2].text+"",t;return{c(){t=C(e)},l(s){t=V(s,e)},m(s,l){g(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&L(t,e)},d(s){s&&f(t)}}}function ae(r){let e,t,s,l,n,c=r[2]&&B(r);return{c(){e=h("div"),t=h("input"),c&&c.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var o=m(e);t=v(o,"INPUT",{placeholder:!0,class:!0}),c&&c.l(o),o.forEach(f),this.h()},h(){_(t,"placeholder",r[1]),_(t,"class","svelte-1td548p"),_(e,"class",s="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-1td548p")},m(a,o){g(a,e,o),b(e,t),P(t,r[4]),c&&c.m(e,null),r[7](e),l||(n=O(t,"input",r[6]),l=!0)},p(a,[o]){o&2&&_(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&P(t,a[4]),a[2]?c?c.p(a,o):(c=B(a),c.c(),c.m(e,null)):c&&(c.d(1),c=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1td548p")&&_(e,"class",s)},i:w,o:w,d(a){a&&f(e),c&&c.d(),r[7](null),l=!1,n()}}}function ce(r,e,t){let{class:s}=e,{placeholder:l="Placeholer"}=e,{btn:n=null}=e,c,a;const o=W(),p=()=>{a&&(o("submit",{value:a}),t(4,a=""))};function u(){a=this.value,t(4,a)}function d(i){X[i?"unshift":"push"](()=>{c=i,t(3,c)})}return r.$$set=i=>{"class"in i&&t(0,s=i.class),"placeholder"in i&&t(1,l=i.placeholder),"btn"in i&&t(2,n=i.btn)},[s,l,n,c,a,p,u,d]}class oe extends y{constructor(e){super();I(this,e,ce,ae,N,{class:0,placeholder:1,btn:2})}}function re(r){let e,t,s,l;return t=new oe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",r[1]),{c(){e=h("div"),D(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var c=m(e);S(t.$$.fragment,c),c.forEach(f),this.h()},h(){_(e,"class",s="add-todo "+r[0]+" svelte-xriol")},m(n,c){g(n,e,c),F(t,e,null),l=!0},p(n,[c]){(!l||c&1&&s!==(s="add-todo "+n[0]+" svelte-xriol"))&&_(e,"class",s)},i(n){l||(k(t.$$.fragment,n),l=!0)},o(n){E(t.$$.fragment,n),l=!1},d(n){n&&f(e),j(t)}}}function ie(r,e,t){let{class:s}=e;const l=n=>{let c={text:n.detail.value,color:null,done:!1};U.update(a=>a=[c,...a]),console.log(c)};return r.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l]}class ue extends y{constructor(e){super();I(this,e,ie,re,N,{class:0})}}function fe(r){let e,t,s,l,n,c;return l=new ue({}),n=new ne({props:{class:"mt-50"}}),{c(){e=Y(),t=h("section"),s=h("div"),D(l.$$.fragment),D(n.$$.fragment),this.h()},l(a){Z('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=$(a),t=v(a,"SECTION",{class:!0});var p=m(t);s=v(p,"DIV",{class:!0});var u=m(s);S(l.$$.fragment,u),u.forEach(f),p.forEach(f),S(n.$$.fragment,a),this.h()},h(){document.title="ToDo",_(s,"class","container"),_(t,"class","mt-50")},m(a,o){g(a,e,o),g(a,t,o),b(t,s),F(l,s,null),F(n,a,o),c=!0},p:w,i(a){c||(k(l.$$.fragment,a),k(n.$$.fragment,a),c=!0)},o(a){E(l.$$.fragment,a),E(n.$$.fragment,a),c=!1},d(a){a&&f(e),a&&f(t),j(l),j(n,a)}}}class de extends y{constructor(e){super();I(this,e,null,fe,N,{})}}export{de as default};