import{K as we,C as Ie,S as U,i as V,s as L,k as R,f as T,p as D,e as b,c as E,a as y,d as h,b as v,D as w,L as F,M as Q,N as Ne,O as W,P as $,m as X,n as C,o as Y,t as x,g as ee,Q as j,h as te,R as Z,T as Ae,E as O,U as le,V as z,W as se,v as q,w as B,x as M,X as ne,Y as ae,Z as ie,_ as oe,$ as re,A as P,a0 as De,a1 as ce,a2 as ue,a3 as Ce,a4 as fe,a5 as Se,a6 as Fe,j as Oe,a7 as Ue,l as Ve}from"../chunks/vendor-6b7c1f24.js";const S=Ie([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Le=we(S,(i,e)=>{let t=i.filter(n=>n.color).map(n=>n.color),l=t.filter((n,a)=>t.indexOf(n)===a).map((n,a)=>({id:a,color:n}));e(l)});function _e(i,e,t){const s=i.slice();return s[10]=e[t],s}function de(i){let e,t,s,l,n,a,o;return{c(){e=b("li"),t=b("button"),this.h()},l(r){e=E(r,"LI",{class:!0});var c=y(e);t=E(c,"BUTTON",{class:!0,style:!0}),y(t).forEach(h),c.forEach(h),this.h()},h(){v(t,"class","task__color-btn svelte-100588h"),v(t,"style",s=`background-color: ${i[10].color}`),v(e,"class","task__color-item svelte-100588h")},m(r,c){T(r,e,c),w(e,t),n=!0,a||(o=F(t,"click",Q(function(){Ne(i[7](i[10].color))&&i[7](i[10].color).apply(this,arguments)})),a=!0)},p(r,c){i=r,(!n||c&16&&s!==(s=`background-color: ${i[10].color}`))&&v(t,"style",s)},i(r){n||(r&&W(()=>{l||(l=$(e,se,{},!0)),l.run(1)}),n=!0)},o(r){r&&(l||(l=$(e,se,{},!1)),l.run(0)),n=!1},d(r){r&&h(e),r&&l&&l.end(),a=!1,o()}}}function he(i,e){let t,s,l=e[10].color!=e[2]&&de(e);return{key:i,first:null,c(){t=R(),l&&l.c(),s=R(),this.h()},l(n){t=R(),l&&l.l(n),s=R(),this.h()},h(){this.first=t},m(n,a){T(n,t,a),l&&l.m(n,a),T(n,s,a)},p(n,a){e=n,e[10].color!=e[2]?l?(l.p(e,a),a&20&&D(l,1)):(l=de(e),l.c(),D(l,1),l.m(s.parentNode,s)):l&&(X(),C(l,1,1,()=>{l=null}),Y())},d(n){n&&h(t),l&&l.d(n),n&&h(s)}}}function qe(i){let e,t,s,l,n,a,o,r,c=[],d=new Map,k,N,m,g,f=i[4];const _=u=>u[10].id;for(let u=0;u<f.length;u+=1){let p=_e(i,f,u),I=_(p);d.set(I,c[u]=he(I,p))}return{c(){e=b("div"),t=b("div"),s=b("p"),l=x(i[1]),n=b("div"),a=b("button"),o=b("span"),r=b("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var p=y(e);t=E(p,"DIV",{class:!0});var I=y(t);s=E(I,"P",{class:!0});var A=y(s);l=ee(A,i[1]),A.forEach(h),I.forEach(h),n=E(p,"DIV",{class:!0});var G=y(n);a=E(G,"BUTTON",{class:!0});var H=y(a);o=E(H,"SPAN",{class:!0}),y(o).forEach(h),H.forEach(h),G.forEach(h),r=E(p,"UL",{class:!0,style:!0});var J=y(r);for(let K=0;K<c.length;K+=1)c[K].l(J);J.forEach(h),p.forEach(h),this.h()},h(){v(s,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(o,"class","svg-image-del svelte-100588h"),v(a,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(n,"class","task__circle task__menu svelte-100588h"),v(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(r,"style",k=`background-color: ${i[2]}`),v(e,"class",N="task "+i[0]+" svelte-100588h"),j(e,"isDisabled",i[3])},m(u,p){T(u,e,p),w(e,t),w(t,s),w(s,l),w(e,n),w(n,a),w(a,o),w(e,r);for(let I=0;I<c.length;I+=1)c[I].m(r,null);m||(g=[F(t,"click",i[5]),F(a,"click",Q(i[6]))],m=!0)},p(u,[p]){p&2&&te(l,u[1]),p&148&&(f=u[4],c=Z(c,p,_,1,u,f,d,r,Ae,he,null,_e)),p&4&&k!==(k=`background-color: ${u[2]}`)&&v(r,"style",k),p&1&&N!==(N="task "+u[0]+" svelte-100588h")&&v(e,"class",N),p&9&&j(e,"isDisabled",u[3])},i:O,o:O,d(u){u&&h(e);for(let p=0;p<c.length;p+=1)c[p].d();m=!1,le(g)}}}function Be(i,e,t){let s,l;z(i,S,m=>t(9,s=m)),z(i,Le,m=>t(4,l=m));let{class:n=""}=e,{text:a=""}=e,{color:o="#0029FF"}=e,{disabled:r=!1}=e,{id:c=null}=e;const d=()=>{let m=s.map(g=>(c===g.id&&(g.done=!g.done),g));S.set(m)},k=()=>{let m=s.filter(g=>g.id!=c);S.set(m),console.log("del",c)},N=m=>{let g=s.map(f=>(c===f.id&&(f.color=m),f));S.set(g)};return i.$$set=m=>{"class"in m&&t(0,n=m.class),"text"in m&&t(1,a=m.text),"color"in m&&t(2,o=m.color),"disabled"in m&&t(3,r=m.disabled),"id"in m&&t(8,c=m.id)},[n,a,o,r,l,d,k,N,c]}class me extends U{constructor(e){super();V(this,e,Be,qe,L,{class:0,text:1,color:2,disabled:3,id:8})}}function ve(i,e,t){const s=i.slice();return s[4]=e[t],s}function ke(i,e,t){const s=i.slice();return s[4]=e[t],s}function ge(i,e){let t,s,l,n,a,o=O,r;return s=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=b("li"),q(s.$$.fragment),this.h()},l(c){t=E(c,"LI",{class:!0});var d=y(t);B(s.$$.fragment,d),d.forEach(h),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){T(c,t,d),M(s,t,null),r=!0},p(c,d){e=c;const k={};d&2&&(k.text=e[4].text),d&2&&(k.color=e[4].color?e[4].color:null),d&2&&(k.id=e[4].id),s.$set(k)},r(){a=t.getBoundingClientRect()},f(){ne(t),o(),ae(t,a)},a(){o(),o=ie(t,a,ce,{duration:300})},i(c){r||(D(s.$$.fragment,c),W(()=>{n&&n.end(1),l=oe(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){C(s.$$.fragment,c),l&&l.invalidate(),n=re(t,e[2],{key:e[4].id}),r=!1},d(c){c&&h(t),P(s),c&&n&&n.end()}}}function pe(i,e){let t,s,l,n,a,o=O,r;return s=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=b("li"),q(s.$$.fragment),this.h()},l(c){t=E(c,"LI",{class:!0});var d=y(t);B(s.$$.fragment,d),d.forEach(h),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){T(c,t,d),M(s,t,null),r=!0},p(c,d){e=c;const k={};d&2&&(k.text=e[4].text),d&2&&(k.color=e[4].color?e[4].color:null),d&2&&(k.id=e[4].id),s.$set(k)},r(){a=t.getBoundingClientRect()},f(){ne(t),o(),ae(t,a)},a(){o(),o=ie(t,a,ce,{duration:300})},i(c){r||(D(s.$$.fragment,c),W(()=>{n&&n.end(1),l=oe(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){C(s.$$.fragment,c),l&&l.invalidate(),n=re(t,e[2],{key:e[4].id}),r=!1},d(c){c&&h(t),P(s),c&&n&&n.end()}}}function Me(i){let e,t,s,l=[],n=new Map,a,o=[],r=new Map,c,d,k=i[1].filter(be);const N=f=>f[4].id;for(let f=0;f<k.length;f+=1){let _=ke(i,k,f),u=N(_);n.set(u,l[f]=ge(u,_))}let m=i[1].filter(Ee);const g=f=>f[4].id;for(let f=0;f<m.length;f+=1){let _=ve(i,m,f),u=g(_);r.set(u,o[f]=pe(u,_))}return{c(){e=b("section"),t=b("div"),s=b("ul");for(let f=0;f<l.length;f+=1)l[f].c();a=b("ul");for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){e=E(f,"SECTION",{class:!0});var _=y(e);t=E(_,"DIV",{class:!0});var u=y(t);s=E(u,"UL",{class:!0});var p=y(s);for(let A=0;A<l.length;A+=1)l[A].l(p);p.forEach(h),a=E(u,"UL",{class:!0});var I=y(a);for(let A=0;A<o.length;A+=1)o[A].l(I);I.forEach(h),u.forEach(h),_.forEach(h),this.h()},h(){v(s,"class","task-section__col"),v(a,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(f,_){T(f,e,_),w(e,t),w(t,s);for(let u=0;u<l.length;u+=1)l[u].m(s,null);w(t,a);for(let u=0;u<o.length;u+=1)o[u].m(a,null);d=!0},p(f,[_]){if(_&2){k=f[1].filter(be),X();for(let u=0;u<l.length;u+=1)l[u].r();l=Z(l,_,N,1,f,k,n,s,ue,ge,null,ke);for(let u=0;u<l.length;u+=1)l[u].a();Y()}if(_&2){m=f[1].filter(Ee),X();for(let u=0;u<o.length;u+=1)o[u].r();o=Z(o,_,g,1,f,m,r,a,ue,pe,null,ve);for(let u=0;u<o.length;u+=1)o[u].a();Y()}(!d||_&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(f){if(!d){for(let _=0;_<k.length;_+=1)D(l[_]);for(let _=0;_<m.length;_+=1)D(o[_]);d=!0}},o(f){for(let _=0;_<l.length;_+=1)C(l[_]);for(let _=0;_<o.length;_+=1)C(o[_]);d=!1},d(f){f&&h(e);for(let _=0;_<l.length;_+=1)l[_].d();for(let _=0;_<o.length;_+=1)o[_].d()}}}const be=i=>!i.done,Ee=i=>i.done;function Pe(i,e,t){let s;z(i,S,o=>t(1,s=o));let{class:l=""}=e;const[n,a]=De({duration:o=>Math.sqrt(o*200),fallback(o,r){const c=getComputedStyle(o),d=c.transform==="none"?"":c.transform;return{duration:600,easing:Ce,css:k=>`
					transform: ${d} scale(${k});
					opacity: ${k}
				`}}});return i.$$set=o=>{"class"in o&&t(0,l=o.class)},[l,s,n,a]}class Re extends U{constructor(e){super();V(this,e,Pe,Me,L,{class:0})}}function ye(i){let e,t,s,l=i[2].text&&Te(i);return{c(){e=b("button"),l&&l.c(),this.h()},l(n){e=E(n,"BUTTON",{class:!0});var a=y(e);l&&l.l(a),a.forEach(h),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(n,a){T(n,e,a),l&&l.m(e,null),t||(s=F(e,"click",Q(i[6])),t=!0)},p(n,a){n[2].text?l?l.p(n,a):(l=Te(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&h(e),l&&l.d(),t=!1,s()}}}function Te(i){let e=i[2].text+"",t;return{c(){t=x(e)},l(s){t=ee(s,e)},m(s,l){T(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&te(t,e)},d(s){s&&h(t)}}}function je(i){let e,t,s,l,n,a=i[2]&&ye(i);return{c(){e=b("div"),t=b("input"),a&&a.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var r=y(e);t=E(r,"INPUT",{placeholder:!0,class:!0}),a&&a.l(r),r.forEach(h),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),j(e,"isError",i[5])},m(o,r){T(o,e,r),w(e,t),fe(t,i[4]),a&&a.m(e,null),i[9](e),l||(n=[F(t,"input",i[8]),F(t,"input",i[7])],l=!0)},p(o,[r]){r&2&&v(t,"placeholder",o[1]),r&16&&t.value!==o[4]&&fe(t,o[4]),o[2]?a?a.p(o,r):(a=ye(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null),r&5&&s!==(s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),r&37&&j(e,"isError",o[5])},i:O,o:O,d(o){o&&h(e),a&&a.d(),i[9](null),l=!1,le(n)}}}function Ke(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:n=null}=e,a,o,r=!1;const c=Se(),d=()=>{o?(c("submit",{value:o}),t(4,o="")):t(5,r=!0)},k=()=>{t(5,r=!1)};function N(){o=this.value,t(4,o)}function m(g){Fe[g?"unshift":"push"](()=>{a=g,t(3,a)})}return i.$$set=g=>{"class"in g&&t(0,s=g.class),"placeholder"in g&&t(1,l=g.placeholder),"btn"in g&&t(2,n=g.btn)},[s,l,n,a,o,r,d,k,N,m]}class Qe extends U{constructor(e){super();V(this,e,Ke,je,L,{class:0,placeholder:1,btn:2})}}function We(i){let e,t,s,l;return t=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=b("div"),q(t.$$.fragment),this.h()},l(n){e=E(n,"DIV",{class:!0});var a=y(e);B(t.$$.fragment,a),a.forEach(h),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(n,a){T(n,e,a),M(t,e,null),l=!0},p(n,[a]){(!l||a&1&&s!==(s="add-todo "+n[0]+" svelte-hols8d"))&&v(e,"class",s)},i(n){l||(D(t.$$.fragment,n),l=!0)},o(n){C(t.$$.fragment,n),l=!1},d(n){n&&h(e),P(t)}}}function Xe(i,e,t){let{class:s=""}=e;const l=n=>{let a={id:Date.now(),text:n.detail.value,color:"#000",done:!1};S.update(o=>o=[a,...o])};return i.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l]}class Ye extends U{constructor(e){super();V(this,e,Xe,We,L,{class:0})}}function Ze(i){let e,t,s,l,n,a,o;return l=new Ye({}),a=new Re({props:{class:"mt-50"}}),{c(){e=Oe(),t=b("section"),s=b("div"),q(l.$$.fragment),q(a.$$.fragment),this.h()},l(r){Ue('[data-svelte="svelte-1ms75pp"]',document.head).forEach(h),e=Ve(r),t=E(r,"SECTION",{class:!0});var d=y(t);s=E(d,"DIV",{class:!0});var k=y(s);B(l.$$.fragment,k),k.forEach(h),d.forEach(h),B(a.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",n=""+(i[0]+" mt-50 svelte-hols8d"))},m(r,c){T(r,e,c),T(r,t,c),w(t,s),M(l,s,null),M(a,r,c),o=!0},p(r,[c]){(!o||c&1&&n!==(n=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",n)},i(r){o||(D(l.$$.fragment,r),D(a.$$.fragment,r),o=!0)},o(r){C(l.$$.fragment,r),C(a.$$.fragment,r),o=!1},d(r){r&&h(e),r&&h(t),P(l),P(a,r)}}}function ze(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class He extends U{constructor(e){super();V(this,e,ze,Ze,L,{class:0})}}export{He as default};