import{K as pe,C as Ee,S as V,i as F,s as B,e as k,c as b,a as E,d as v,b as m,f as N,D as y,L as U,M as K,N as ye,t as z,g as G,O as R,h as H,P as Q,Q as Te,E as S,R as J,T as W,v as L,w as q,x as M,U as $,V as x,W as ee,p as A,X as te,Y as le,n as C,Z as se,A as P,m as ae,o as ne,_ as Ie,$ as oe,a0 as ie,a1 as we,a2 as re,a3 as Ne,a4 as De,j as Ae,a5 as Ce,l as Oe}from"../chunks/vendor-1db80630.js";const O=Ee([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Ue=pe(O,(i,e)=>{let t=i.filter(r=>r.color).map(r=>r.color),s=t.filter((r,o)=>t.indexOf(r)===o).map((r,o)=>({id:o,color:r}));e(s)});function ce(i,e,t){const l=i.slice();return l[11]=e[t],l}function ue(i,e){let t,l,s,r,o;return{key:i,first:null,c(){t=k("li"),l=k("button"),this.h()},l(a){t=b(a,"LI",{class:!0});var n=E(t);l=b(n,"BUTTON",{class:!0,style:!0}),E(l).forEach(v),n.forEach(v),this.h()},h(){m(l,"class","task__color-btn svelte-100588h"),m(l,"style",s=`background-color: ${e[11].color}`),m(t,"class","task__color-item svelte-100588h"),this.first=t},m(a,n){N(a,t,n),y(t,l),r||(o=U(l,"click",K(function(){ye(e[7](e[11].color))&&e[7](e[11].color).apply(this,arguments)})),r=!0)},p(a,n){e=a,n&20&&s!==(s=`background-color: ${e[11].color}`)&&m(l,"style",s)},d(a){a&&v(t),r=!1,o()}}}function Se(i){let e,t,l,s,r,o,a,n,c=[],d=new Map,g,w,T,h,f=i[4].filter(i[9]);const _=u=>u[11].id;for(let u=0;u<f.length;u+=1){let p=ce(i,f,u),I=_(p);d.set(I,c[u]=ue(I,p))}return{c(){e=k("div"),t=k("div"),l=k("p"),s=z(i[1]),r=k("div"),o=k("button"),a=k("span"),n=k("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=b(u,"DIV",{class:!0});var p=E(e);t=b(p,"DIV",{class:!0});var I=E(t);l=b(I,"P",{class:!0});var D=E(l);s=G(D,i[1]),D.forEach(v),I.forEach(v),r=b(p,"DIV",{class:!0});var X=E(r);o=b(X,"BUTTON",{class:!0});var Y=E(o);a=b(Y,"SPAN",{class:!0}),E(a).forEach(v),Y.forEach(v),X.forEach(v),n=b(p,"UL",{class:!0,style:!0});var Z=E(n);for(let j=0;j<c.length;j+=1)c[j].l(Z);Z.forEach(v),p.forEach(v),this.h()},h(){m(l,"class","svelte-100588h"),m(t,"class","task__main svelte-100588h"),m(a,"class","svg-image-del svelte-100588h"),m(o,"class","task__menu-btn task__menu-btn_del svelte-100588h"),m(r,"class","task__circle task__menu svelte-100588h"),m(n,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),m(n,"style",g=`background-color: ${i[2]}`),m(e,"class",w="task "+i[0]+" svelte-100588h"),R(e,"isDisabled",i[3])},m(u,p){N(u,e,p),y(e,t),y(t,l),y(l,s),y(e,r),y(r,o),y(o,a),y(e,n);for(let I=0;I<c.length;I+=1)c[I].m(n,null);T||(h=[U(t,"click",i[5]),U(o,"click",K(i[6]))],T=!0)},p(u,[p]){p&2&&H(s,u[1]),p&148&&(f=u[4].filter(u[9]),c=Q(c,p,_,1,u,f,d,n,Te,ue,null,ce)),p&4&&g!==(g=`background-color: ${u[2]}`)&&m(n,"style",g),p&1&&w!==(w="task "+u[0]+" svelte-100588h")&&m(e,"class",w),p&9&&R(e,"isDisabled",u[3])},i:S,o:S,d(u){u&&v(e);for(let p=0;p<c.length;p+=1)c[p].d();T=!1,J(h)}}}function Ve(i,e,t){let l,s;W(i,O,h=>t(10,l=h)),W(i,Ue,h=>t(4,s=h));let{class:r=""}=e,{text:o=""}=e,{color:a="#0029FF"}=e,{disabled:n=!1}=e,{id:c=null}=e;const d=()=>{let h=l.map(f=>(c===f.id&&(f.done=!f.done),f));O.set(h)},g=()=>{let h=l.filter(f=>f.id!=c);O.set(h),console.log("del",c)},w=h=>{let f=l.map(_=>(c===_.id&&(_.color=h),_));O.set(f)},T=h=>h.color!=a;return i.$$set=h=>{"class"in h&&t(0,r=h.class),"text"in h&&t(1,o=h.text),"color"in h&&t(2,a=h.color),"disabled"in h&&t(3,n=h.disabled),"id"in h&&t(8,c=h.id)},[r,o,a,n,s,d,g,w,c,T]}class fe extends V{constructor(e){super();F(this,e,Ve,Se,B,{class:0,text:1,color:2,disabled:3,id:8})}}function _e(i,e,t){const l=i.slice();return l[4]=e[t],l}function de(i,e,t){const l=i.slice();return l[4]=e[t],l}function he(i,e){let t,l,s,r,o,a=S,n;return l=new fe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=k("li"),L(l.$$.fragment),this.h()},l(c){t=b(c,"LI",{class:!0});var d=E(t);q(l.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){N(c,t,d),M(l,t,null),n=!0},p(c,d){e=c;const g={};d&2&&(g.text=e[4].text),d&2&&(g.color=e[4].color?e[4].color:null),d&2&&(g.id=e[4].id),l.$set(g)},r(){o=t.getBoundingClientRect()},f(){$(t),a(),x(t,o)},a(){a(),a=ee(t,o,oe,{duration:300})},i(c){n||(A(l.$$.fragment,c),te(()=>{r&&r.end(1),s=le(t,e[3],{key:e[4].id}),s.start()}),n=!0)},o(c){C(l.$$.fragment,c),s&&s.invalidate(),r=se(t,e[2],{key:e[4].id}),n=!1},d(c){c&&v(t),P(l),c&&r&&r.end()}}}function ve(i,e){let t,l,s,r,o,a=S,n;return l=new fe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=k("li"),L(l.$$.fragment),this.h()},l(c){t=b(c,"LI",{class:!0});var d=E(t);q(l.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){N(c,t,d),M(l,t,null),n=!0},p(c,d){e=c;const g={};d&2&&(g.text=e[4].text),d&2&&(g.color=e[4].color?e[4].color:null),d&2&&(g.id=e[4].id),l.$set(g)},r(){o=t.getBoundingClientRect()},f(){$(t),a(),x(t,o)},a(){a(),a=ee(t,o,oe,{duration:300})},i(c){n||(A(l.$$.fragment,c),te(()=>{r&&r.end(1),s=le(t,e[3],{key:e[4].id}),s.start()}),n=!0)},o(c){C(l.$$.fragment,c),s&&s.invalidate(),r=se(t,e[2],{key:e[4].id}),n=!1},d(c){c&&v(t),P(l),c&&r&&r.end()}}}function Fe(i){let e,t,l,s=[],r=new Map,o,a=[],n=new Map,c,d,g=i[1].filter(me);const w=f=>f[4].id;for(let f=0;f<g.length;f+=1){let _=de(i,g,f),u=w(_);r.set(u,s[f]=he(u,_))}let T=i[1].filter(ge);const h=f=>f[4].id;for(let f=0;f<T.length;f+=1){let _=_e(i,T,f),u=h(_);n.set(u,a[f]=ve(u,_))}return{c(){e=k("section"),t=k("div"),l=k("ul");for(let f=0;f<s.length;f+=1)s[f].c();o=k("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=b(f,"SECTION",{class:!0});var _=E(e);t=b(_,"DIV",{class:!0});var u=E(t);l=b(u,"UL",{class:!0});var p=E(l);for(let D=0;D<s.length;D+=1)s[D].l(p);p.forEach(v),o=b(u,"UL",{class:!0});var I=E(o);for(let D=0;D<a.length;D+=1)a[D].l(I);I.forEach(v),u.forEach(v),_.forEach(v),this.h()},h(){m(l,"class","task-section__col"),m(o,"class","task-section__col"),m(t,"class","container task-section__grid svelte-1rib3cm"),m(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(f,_){N(f,e,_),y(e,t),y(t,l);for(let u=0;u<s.length;u+=1)s[u].m(l,null);y(t,o);for(let u=0;u<a.length;u+=1)a[u].m(o,null);d=!0},p(f,[_]){if(_&2){g=f[1].filter(me),ae();for(let u=0;u<s.length;u+=1)s[u].r();s=Q(s,_,w,1,f,g,r,l,ie,he,null,de);for(let u=0;u<s.length;u+=1)s[u].a();ne()}if(_&2){T=f[1].filter(ge),ae();for(let u=0;u<a.length;u+=1)a[u].r();a=Q(a,_,h,1,f,T,n,o,ie,ve,null,_e);for(let u=0;u<a.length;u+=1)a[u].a();ne()}(!d||_&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&m(e,"class",c)},i(f){if(!d){for(let _=0;_<g.length;_+=1)A(s[_]);for(let _=0;_<T.length;_+=1)A(a[_]);d=!0}},o(f){for(let _=0;_<s.length;_+=1)C(s[_]);for(let _=0;_<a.length;_+=1)C(a[_]);d=!1},d(f){f&&v(e);for(let _=0;_<s.length;_+=1)s[_].d();for(let _=0;_<a.length;_+=1)a[_].d()}}}const me=i=>!i.done,ge=i=>i.done;function Be(i,e,t){let l;W(i,O,a=>t(1,l=a));let{class:s=""}=e;const[r,o]=Ie({duration:a=>Math.sqrt(a*200),fallback(a,n){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:we,css:g=>`
					transform: ${d} scale(${g});
					opacity: ${g}
				`}}});return i.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,o]}class Le extends V{constructor(e){super();F(this,e,Be,Fe,B,{class:0})}}function ke(i){let e,t,l,s=i[2].text&&be(i);return{c(){e=k("button"),s&&s.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var o=E(e);s&&s.l(o),o.forEach(v),this.h()},h(){m(e,"class","btn svelte-12pihab")},m(r,o){N(r,e,o),s&&s.m(e,null),t||(l=U(e,"click",K(i[6])),t=!0)},p(r,o){r[2].text?s?s.p(r,o):(s=be(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&v(e),s&&s.d(),t=!1,l()}}}function be(i){let e=i[2].text+"",t;return{c(){t=z(e)},l(l){t=G(l,e)},m(l,s){N(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&H(t,e)},d(l){l&&v(t)}}}function qe(i){let e,t,l,s,r,o=i[2]&&ke(i);return{c(){e=k("div"),t=k("input"),o&&o.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var n=E(e);t=b(n,"INPUT",{placeholder:!0,class:!0}),o&&o.l(n),n.forEach(v),this.h()},h(){m(t,"placeholder",i[1]),m(t,"class","svelte-12pihab"),m(e,"class",l="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",i[5])},m(a,n){N(a,e,n),y(e,t),re(t,i[4]),o&&o.m(e,null),i[9](e),s||(r=[U(t,"input",i[8]),U(t,"input",i[7])],s=!0)},p(a,[n]){n&2&&m(t,"placeholder",a[1]),n&16&&t.value!==a[4]&&re(t,a[4]),a[2]?o?o.p(a,n):(o=ke(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),n&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&m(e,"class",l),n&37&&R(e,"isError",a[5])},i:S,o:S,d(a){a&&v(e),o&&o.d(),i[9](null),s=!1,J(r)}}}function Me(i,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,o,a,n=!1;const c=Ne(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,n=!0)},g=()=>{t(5,n=!1)};function w(){a=this.value,t(4,a)}function T(h){De[h?"unshift":"push"](()=>{o=h,t(3,o)})}return i.$$set=h=>{"class"in h&&t(0,l=h.class),"placeholder"in h&&t(1,s=h.placeholder),"btn"in h&&t(2,r=h.btn)},[l,s,r,o,a,n,d,g,w,T]}class Pe extends V{constructor(e){super();F(this,e,Me,qe,B,{class:0,placeholder:1,btn:2})}}function Re(i){let e,t,l,s,r,o,a;return r=new Pe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),r.$on("submit",i[1]),{c(){e=k("div"),t=k("div"),l=k("button"),s=k("button"),L(r.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var c=E(e);t=b(c,"DIV",{class:!0});var d=E(t);l=b(d,"BUTTON",{class:!0}),E(l).forEach(v),s=b(d,"BUTTON",{class:!0}),E(s).forEach(v),d.forEach(v),q(r.$$.fragment,c),c.forEach(v),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-1inbivc"),m(s,"class","add-todo__color svelte-1inbivc"),m(t,"class","add-todo__color-list svelte-1inbivc"),m(e,"class",o="add-todo "+i[0]+" svelte-1inbivc")},m(n,c){N(n,e,c),y(e,t),y(t,l),y(t,s),M(r,e,null),a=!0},p(n,[c]){(!a||c&1&&o!==(o="add-todo "+n[0]+" svelte-1inbivc"))&&m(e,"class",o)},i(n){a||(A(r.$$.fragment,n),a=!0)},o(n){C(r.$$.fragment,n),a=!1},d(n){n&&v(e),P(r)}}}function je(i,e,t){let{class:l=""}=e;const s=r=>{let o={id:Date.now(),text:r.detail.value,color:"#000",done:!1};O.update(a=>a=[o,...a])};return i.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Ke extends V{constructor(e){super();F(this,e,je,Re,B,{class:0})}}function Qe(i){let e,t,l,s,r,o,a;return s=new Ke({}),o=new Le({props:{class:"mt-50"}}),{c(){e=Ae(),t=k("section"),l=k("div"),L(s.$$.fragment),L(o.$$.fragment),this.h()},l(n){Ce('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),e=Oe(n),t=b(n,"SECTION",{class:!0});var d=E(t);l=b(d,"DIV",{class:!0});var g=E(l);q(s.$$.fragment,g),g.forEach(v),d.forEach(v),q(o.$$.fragment,n),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(n,c){N(n,e,c),N(n,t,c),y(t,l),M(s,l,null),M(o,n,c),a=!0},p(n,[c]){(!a||c&1&&r!==(r=""+(n[0]+" mt-50 svelte-hols8d")))&&m(t,"class",r)},i(n){a||(A(s.$$.fragment,n),A(o.$$.fragment,n),a=!0)},o(n){C(s.$$.fragment,n),C(o.$$.fragment,n),a=!1},d(n){n&&v(e),n&&v(t),P(s),P(o,n)}}}function We(i,e,t){let{class:l=""}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Ye extends V{constructor(e){super();F(this,e,We,Qe,B,{class:0})}}export{Ye as default};