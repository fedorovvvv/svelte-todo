import{C as re,S as w,i as N,s as C,e as v,v as S,c as k,a as b,w as D,d as m,b as p,f as $,x as A,K as R,L as B,M as P,p as T,N as j,O as K,n as I,P as Q,A as L,D as O,m as W,Q as X,o as Y,R as ce,T as ue,U as Z,V as z,W as fe,E as V,X as q,Y as _e,t as de,g as he,h as me,Z as G,_ as H,$ as pe,a0 as ge,a1 as ve,j as ke,a2 as be,l as $e}from"../chunks/vendor-f69e61ac.js";const J=re([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);class x extends w{constructor(e){super();N(this,e,null,null,C,{})}}function ee(i,e,t){const l=i.slice();return l[4]=e[t],l}function te(i,e,t){const l=i.slice();return l[4]=e[t],l}function se(i,e){let t,l,s,o,a,n=V,r;return l=new x({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=v("li"),S(l.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var d=b(t);D(l.$$.fragment,d),d.forEach(m),this.h()},h(){p(t,"class","task-section__item"),this.first=t},m(c,d){$(c,t,d),A(l,t,null),r=!0},p(c,d){e=c;const h={};d&2&&(h.text=e[4].text),d&2&&(h.color=e[4].color?e[4].color:null),d&2&&(h.id=e[4].id),l.$set(h)},r(){a=t.getBoundingClientRect()},f(){R(t),n(),B(t,a)},a(){n(),n=P(t,a,Z,{duration:300})},i(c){r||(T(l.$$.fragment,c),j(()=>{o&&o.end(1),s=K(t,e[3],{key:e[4].id}),s.start()}),r=!0)},o(c){I(l.$$.fragment,c),s&&s.invalidate(),o=Q(t,e[2],{key:e[4].id}),r=!1},d(c){c&&m(t),L(l),c&&o&&o.end()}}}function le(i,e){let t,l,s,o,a,n=V,r;return l=new x({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=v("li"),S(l.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var d=b(t);D(l.$$.fragment,d),d.forEach(m),this.h()},h(){p(t,"class","task-section__item"),this.first=t},m(c,d){$(c,t,d),A(l,t,null),r=!0},p(c,d){e=c;const h={};d&2&&(h.text=e[4].text),d&2&&(h.color=e[4].color?e[4].color:null),d&2&&(h.id=e[4].id),l.$set(h)},r(){a=t.getBoundingClientRect()},f(){R(t),n(),B(t,a)},a(){n(),n=P(t,a,Z,{duration:300})},i(c){r||(T(l.$$.fragment,c),j(()=>{o&&o.end(1),s=K(t,e[3],{key:e[4].id}),s.start()}),r=!0)},o(c){I(l.$$.fragment,c),s&&s.invalidate(),o=Q(t,e[2],{key:e[4].id}),r=!1},d(c){c&&m(t),L(l),c&&o&&o.end()}}}function Ee(i){let e,t,l,s=[],o=new Map,a,n=[],r=new Map,c,d,h=i[1].filter(ne);const U=f=>f[4].id;for(let f=0;f<h.length;f+=1){let u=te(i,h,f),_=U(u);o.set(_,s[f]=se(_,u))}let E=i[1].filter(ae);const g=f=>f[4].id;for(let f=0;f<E.length;f+=1){let u=ee(i,E,f),_=g(u);r.set(_,n[f]=le(_,u))}return{c(){e=v("section"),t=v("div"),l=v("ul");for(let f=0;f<s.length;f+=1)s[f].c();a=v("ul");for(let f=0;f<n.length;f+=1)n[f].c();this.h()},l(f){e=k(f,"SECTION",{class:!0});var u=b(e);t=k(u,"DIV",{class:!0});var _=b(t);l=k(_,"UL",{class:!0});var F=b(l);for(let y=0;y<s.length;y+=1)s[y].l(F);F.forEach(m),a=k(_,"UL",{class:!0});var M=b(a);for(let y=0;y<n.length;y+=1)n[y].l(M);M.forEach(m),_.forEach(m),u.forEach(m),this.h()},h(){p(l,"class","task-section__col"),p(a,"class","task-section__col"),p(t,"class","container task-section__grid svelte-1rib3cm"),p(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(f,u){$(f,e,u),O(e,t),O(t,l);for(let _=0;_<s.length;_+=1)s[_].m(l,null);O(t,a);for(let _=0;_<n.length;_+=1)n[_].m(a,null);d=!0},p(f,[u]){if(u&2){h=f[1].filter(ne),W();for(let _=0;_<s.length;_+=1)s[_].r();s=X(s,u,U,1,f,h,o,l,z,se,null,te);for(let _=0;_<s.length;_+=1)s[_].a();Y()}if(u&2){E=f[1].filter(ae),W();for(let _=0;_<n.length;_+=1)n[_].r();n=X(n,u,g,1,f,E,r,a,z,le,null,ee);for(let _=0;_<n.length;_+=1)n[_].a();Y()}(!d||u&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&p(e,"class",c)},i(f){if(!d){for(let u=0;u<h.length;u+=1)T(s[u]);for(let u=0;u<E.length;u+=1)T(n[u]);d=!0}},o(f){for(let u=0;u<s.length;u+=1)I(s[u]);for(let u=0;u<n.length;u+=1)I(n[u]);d=!1},d(f){f&&m(e);for(let u=0;u<s.length;u+=1)s[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const ne=i=>!i.done,ae=i=>i.done;function ye(i,e,t){let l;ce(i,J,n=>t(1,l=n));let{class:s=""}=e;const[o,a]=ue({duration:n=>Math.sqrt(n*200),fallback(n,r){const c=getComputedStyle(n),d=c.transform==="none"?"":c.transform;return{duration:600,easing:fe,css:h=>`
					transform: ${d} scale(${h});
					opacity: ${h}
				`}}});return i.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l,o,a]}class Te extends w{constructor(e){super();N(this,e,ye,Ee,C,{class:0})}}function ie(i){let e,t,l,s=i[2].text&&oe(i);return{c(){e=v("button"),s&&s.c(),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var a=b(e);s&&s.l(a),a.forEach(m),this.h()},h(){p(e,"class","btn svelte-12pihab")},m(o,a){$(o,e,a),s&&s.m(e,null),t||(l=q(e,"click",_e(i[6])),t=!0)},p(o,a){o[2].text?s?s.p(o,a):(s=oe(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&m(e),s&&s.d(),t=!1,l()}}}function oe(i){let e=i[2].text+"",t;return{c(){t=de(e)},l(l){t=he(l,e)},m(l,s){$(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&me(t,e)},d(l){l&&m(t)}}}function Ie(i){let e,t,l,s,o,a=i[2]&&ie(i);return{c(){e=v("div"),t=v("input"),a&&a.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var r=b(e);t=k(r,"INPUT",{placeholder:!0,class:!0}),a&&a.l(r),r.forEach(m),this.h()},h(){p(t,"placeholder",i[1]),p(t,"class","svelte-12pihab"),p(e,"class",l="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),G(e,"isError",i[5])},m(n,r){$(n,e,r),O(e,t),H(t,i[4]),a&&a.m(e,null),i[9](e),s||(o=[q(t,"input",i[8]),q(t,"input",i[7])],s=!0)},p(n,[r]){r&2&&p(t,"placeholder",n[1]),r&16&&t.value!==n[4]&&H(t,n[4]),n[2]?a?a.p(n,r):(a=ie(n),a.c(),a.m(e,null)):a&&(a.d(1),a=null),r&5&&l!==(l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&p(e,"class",l),r&37&&G(e,"isError",n[5])},i:V,o:V,d(n){n&&m(e),a&&a.d(),i[9](null),s=!1,pe(o)}}}function we(i,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:o=null}=e,a,n,r=!1;const c=ge(),d=()=>{n?(c("submit",{value:n}),t(4,n="")):t(5,r=!0)},h=()=>{t(5,r=!1)};function U(){n=this.value,t(4,n)}function E(g){ve[g?"unshift":"push"](()=>{a=g,t(3,a)})}return i.$$set=g=>{"class"in g&&t(0,l=g.class),"placeholder"in g&&t(1,s=g.placeholder),"btn"in g&&t(2,o=g.btn)},[l,s,o,a,n,r,d,h,U,E]}class Ne extends w{constructor(e){super();N(this,e,we,Ie,C,{class:0,placeholder:1,btn:2})}}function Ce(i){let e,t,l,s;return t=new Ne({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=v("div"),S(t.$$.fragment),this.h()},l(o){e=k(o,"DIV",{class:!0});var a=b(e);D(t.$$.fragment,a),a.forEach(m),this.h()},h(){p(e,"class",l="add-todo "+i[0]+" svelte-hols8d")},m(o,a){$(o,e,a),A(t,e,null),s=!0},p(o,[a]){(!s||a&1&&l!==(l="add-todo "+o[0]+" svelte-hols8d"))&&p(e,"class",l)},i(o){s||(T(t.$$.fragment,o),s=!0)},o(o){I(t.$$.fragment,o),s=!1},d(o){o&&m(e),L(t)}}}function Se(i,e,t){let{class:l=""}=e;const s=o=>{let a={id:Date.now(),text:o.detail.value,color:null,done:!1};J.update(n=>n=[a,...n])};return i.$$set=o=>{"class"in o&&t(0,l=o.class)},[l,s]}class De extends w{constructor(e){super();N(this,e,Se,Ce,C,{class:0})}}function Ae(i){let e,t,l,s,o,a,n;return s=new De({}),a=new Te({props:{class:"mt-50"}}),{c(){e=ke(),t=v("section"),l=v("div"),S(s.$$.fragment),S(a.$$.fragment),this.h()},l(r){be('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=$e(r),t=k(r,"SECTION",{class:!0});var d=b(t);l=k(d,"DIV",{class:!0});var h=b(l);D(s.$$.fragment,h),h.forEach(m),d.forEach(m),D(a.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",p(l,"class","container"),p(t,"class",o=""+(i[0]+" mt-50 svelte-hols8d"))},m(r,c){$(r,e,c),$(r,t,c),O(t,l),A(s,l,null),A(a,r,c),n=!0},p(r,[c]){(!n||c&1&&o!==(o=""+(r[0]+" mt-50 svelte-hols8d")))&&p(t,"class",o)},i(r){n||(T(s.$$.fragment,r),T(a.$$.fragment,r),n=!0)},o(r){I(s.$$.fragment,r),I(a.$$.fragment,r),n=!1},d(r){r&&m(e),r&&m(t),L(s),L(a,r)}}}function Le(i,e,t){let{class:l=""}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Ue extends w{constructor(e){super();N(this,e,Le,Ae,C,{class:0})}}export{Ue as default};