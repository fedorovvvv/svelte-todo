import{C as be,S as U,i as F,s as L,e as g,t as Y,c as k,a as b,g as Z,d as m,b as v,K as R,f as N,D as w,L as O,M as z,h as G,E as C,N as H,O as J,v as V,w as B,x as P,P as $,Q as x,R as ee,p as D,T as te,U as le,n as A,V as se,A as q,m as ae,W as ne,o as ie,X as pe,Y as oe,Z as re,_ as Ee,$ as ce,a0 as we,a1 as Te,j as ye,a2 as Ie,l as Ne}from"../chunks/vendor-174655a0.js";const M=be([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function De(i){let e,t,s,l,r,n,a,o,c,h,u,p,y,E,d,_;return{c(){e=g("div"),t=g("div"),s=g("p"),l=Y(i[1]),r=g("div"),n=g("button"),a=g("span"),o=g("ul"),c=g("li"),h=g("button"),u=g("li"),p=g("button"),this.h()},l(f){e=k(f,"DIV",{class:!0});var T=b(e);t=k(T,"DIV",{class:!0});var S=b(t);s=k(S,"P",{class:!0});var I=b(s);l=Z(I,i[1]),I.forEach(m),S.forEach(m),r=k(T,"DIV",{class:!0});var K=b(r);n=k(K,"BUTTON",{class:!0});var Q=b(n);a=k(Q,"SPAN",{class:!0}),b(a).forEach(m),Q.forEach(m),K.forEach(m),o=k(T,"UL",{class:!0,style:!0});var j=b(o);c=k(j,"LI",{class:!0});var W=b(c);h=k(W,"BUTTON",{class:!0}),b(h).forEach(m),W.forEach(m),u=k(j,"LI",{class:!0});var X=b(u);p=k(X,"BUTTON",{class:!0}),b(p).forEach(m),X.forEach(m),j.forEach(m),T.forEach(m),this.h()},h(){v(s,"class","svelte-w0l3fo"),v(t,"class","task__main svelte-w0l3fo"),v(a,"class","svg-image-del svelte-w0l3fo"),v(n,"class","task__menu-btn task__menu-btn_del svelte-w0l3fo"),v(r,"class","task__circle task__menu svelte-w0l3fo"),v(h,"class","task__color-btn svelte-w0l3fo"),v(c,"class","task__color-item svelte-w0l3fo"),v(p,"class","task__color-btn svelte-w0l3fo"),v(u,"class","task__color-item svelte-w0l3fo"),v(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-w0l3fo"),v(o,"style",y=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",E="task "+i[0]+" svelte-w0l3fo"),R(e,"isDisabled",i[3])},m(f,T){N(f,e,T),w(e,t),w(t,s),w(s,l),w(e,r),w(r,n),w(n,a),w(e,o),w(o,c),w(c,h),w(o,u),w(u,p),d||(_=[O(t,"click",i[4]),O(n,"click",z(i[5]))],d=!0)},p(f,[T]){T&2&&G(l,f[1]),T&4&&y!==(y=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`)&&v(o,"style",y),T&1&&E!==(E="task "+f[0]+" svelte-w0l3fo")&&v(e,"class",E),T&9&&R(e,"isDisabled",f[3])},i:C,o:C,d(f){f&&m(e),d=!1,H(_)}}}function Ae(i,e,t){let s;J(i,M,u=>t(7,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=s.map(p=>(o===p.id&&(p.done=!p.done),p));M.set(u)},h=()=>{let u=s.filter(p=>p.id!=o);M.set(u),console.log("del",o)};return i.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,o=u.id)},[l,r,n,a,c,h,o]}class ue extends U{constructor(e){super();F(this,e,Ae,De,L,{class:0,text:1,color:2,disabled:3,id:6})}}function fe(i,e,t){const s=i.slice();return s[4]=e[t],s}function _e(i,e,t){const s=i.slice();return s[4]=e[t],s}function de(i,e){let t,s,l,r,n,a=C,o;return s=new ue({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=g("li"),V(s.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var h=b(t);B(s.$$.fragment,h),h.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,h){N(c,t,h),P(s,t,null),o=!0},p(c,h){e=c;const u={};h&2&&(u.text=e[4].text),h&2&&(u.color=e[4].color?e[4].color:null),h&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){$(t),a(),x(t,n)},a(){a(),a=ee(t,n,oe,{duration:300})},i(c){o||(D(s.$$.fragment,c),te(()=>{r&&r.end(1),l=le(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){A(s.$$.fragment,c),l&&l.invalidate(),r=se(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),q(s),c&&r&&r.end()}}}function he(i,e){let t,s,l,r,n,a=C,o;return s=new ue({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=g("li"),V(s.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var h=b(t);B(s.$$.fragment,h),h.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,h){N(c,t,h),P(s,t,null),o=!0},p(c,h){e=c;const u={};h&2&&(u.text=e[4].text),h&2&&(u.color=e[4].color?e[4].color:null),h&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){$(t),a(),x(t,n)},a(){a(),a=ee(t,n,oe,{duration:300})},i(c){o||(D(s.$$.fragment,c),te(()=>{r&&r.end(1),l=le(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){A(s.$$.fragment,c),l&&l.invalidate(),r=se(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),q(s),c&&r&&r.end()}}}function Ce(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,c,h,u=i[1].filter(me);const p=d=>d[4].id;for(let d=0;d<u.length;d+=1){let _=_e(i,u,d),f=p(_);r.set(f,l[d]=de(f,_))}let y=i[1].filter(ve);const E=d=>d[4].id;for(let d=0;d<y.length;d+=1){let _=fe(i,y,d),f=E(_);o.set(f,a[d]=he(f,_))}return{c(){e=g("section"),t=g("div"),s=g("ul");for(let d=0;d<l.length;d+=1)l[d].c();n=g("ul");for(let d=0;d<a.length;d+=1)a[d].c();this.h()},l(d){e=k(d,"SECTION",{class:!0});var _=b(e);t=k(_,"DIV",{class:!0});var f=b(t);s=k(f,"UL",{class:!0});var T=b(s);for(let I=0;I<l.length;I+=1)l[I].l(T);T.forEach(m),n=k(f,"UL",{class:!0});var S=b(n);for(let I=0;I<a.length;I+=1)a[I].l(S);S.forEach(m),f.forEach(m),_.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(d,_){N(d,e,_),w(e,t),w(t,s);for(let f=0;f<l.length;f+=1)l[f].m(s,null);w(t,n);for(let f=0;f<a.length;f+=1)a[f].m(n,null);h=!0},p(d,[_]){if(_&2){u=d[1].filter(me),ae();for(let f=0;f<l.length;f+=1)l[f].r();l=ne(l,_,p,1,d,u,r,s,re,de,null,_e);for(let f=0;f<l.length;f+=1)l[f].a();ie()}if(_&2){y=d[1].filter(ve),ae();for(let f=0;f<a.length;f+=1)a[f].r();a=ne(a,_,E,1,d,y,o,n,re,he,null,fe);for(let f=0;f<a.length;f+=1)a[f].a();ie()}(!h||_&1&&c!==(c="task-section "+d[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(d){if(!h){for(let _=0;_<u.length;_+=1)D(l[_]);for(let _=0;_<y.length;_+=1)D(a[_]);h=!0}},o(d){for(let _=0;_<l.length;_+=1)A(l[_]);for(let _=0;_<a.length;_+=1)A(a[_]);h=!1},d(d){d&&m(e);for(let _=0;_<l.length;_+=1)l[_].d();for(let _=0;_<a.length;_+=1)a[_].d()}}}const me=i=>!i.done,ve=i=>i.done;function Se(i,e,t){let s;J(i,M,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=pe({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),h=c.transform==="none"?"":c.transform;return{duration:600,easing:Ee,css:u=>`
					transform: ${h} scale(${u});
					opacity: ${u}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class Ue extends U{constructor(e){super();F(this,e,Se,Ce,L,{class:0})}}function ge(i){let e,t,s,l=i[2].text&&ke(i);return{c(){e=g("button"),l&&l.c(),this.h()},l(r){e=k(r,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){N(r,e,n),l&&l.m(e,null),t||(s=O(e,"click",z(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=ke(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&m(e),l&&l.d(),t=!1,s()}}}function ke(i){let e=i[2].text+"",t;return{c(){t=Y(e)},l(s){t=Z(s,e)},m(s,l){N(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&G(t,e)},d(s){s&&m(t)}}}function Fe(i){let e,t,s,l,r,n=i[2]&&ge(i);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var o=b(e);t=k(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",i[5])},m(a,o){N(a,e,o),w(e,t),ce(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[O(t,"input",i[8]),O(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ce(t,a[4]),a[2]?n?n.p(a,o):(n=ge(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),o&37&&R(e,"isError",a[5])},i:C,o:C,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,H(r)}}}function Le(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=we(),h=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},u=()=>{t(5,o=!1)};function p(){a=this.value,t(4,a)}function y(E){Te[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,r=E.btn)},[s,l,r,n,a,o,h,u,p,y]}class Oe extends U{constructor(e){super();F(this,e,Le,Fe,L,{class:0,placeholder:1,btn:2})}}function Ve(i){let e,t,s,l;return t=new Oe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=g("div"),V(t.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=b(e);B(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,n){N(r,e,n),P(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",s)},i(r){l||(D(t.$$.fragment,r),l=!0)},o(r){A(t.$$.fragment,r),l=!1},d(r){r&&m(e),q(t)}}}function Be(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Pe extends U{constructor(e){super();F(this,e,Be,Ve,L,{class:0})}}function qe(i){let e,t,s,l,r,n,a;return l=new Pe({}),n=new Ue({props:{class:"mt-50"}}),{c(){e=ye(),t=g("section"),s=g("div"),V(l.$$.fragment),V(n.$$.fragment),this.h()},l(o){Ie('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Ne(o),t=k(o,"SECTION",{class:!0});var h=b(t);s=k(h,"DIV",{class:!0});var u=b(s);B(l.$$.fragment,u),u.forEach(m),h.forEach(m),B(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,c){N(o,e,c),N(o,t,c),w(t,s),P(l,s,null),P(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(D(l.$$.fragment,o),D(n.$$.fragment,o),a=!0)},o(o){A(l.$$.fragment,o),A(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),q(l),q(n,o)}}}function Me(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class je extends U{constructor(e){super();F(this,e,Me,qe,L,{class:0})}}export{je as default};