import{K as ye,C as Te,S as U,i as V,s as L,k as R,f as T,e as b,c as E,a as y,d as h,b as v,D as I,L as F,M as Q,N as Ie,t as G,g as H,O as j,h as J,P as W,Q as we,E as O,R as $,T as X,v as q,w as B,x as M,U as x,V as ee,W as te,p as A,X as le,Y as se,n as C,Z as ne,A as P,m as ae,o as ie,_ as Ne,$ as oe,a0 as re,a1 as De,a2 as ce,a3 as Ae,a4 as Ce,j as Se,a5 as Fe,l as Oe}from"../chunks/vendor-1db80630.js";const S=Te([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Ue=ye(S,(i,e)=>{let t=i.filter(l=>l.color).map(l=>l.color),s=t.filter((l,o)=>t.indexOf(l)===o);e(s)});function ue(i,e,t){const s=i.slice();return s[10]=e[t],s[12]=t,s}function fe(i){let e,t,s,l,o;return{c(){e=b("li"),t=b("button"),this.h()},l(n){e=E(n,"LI",{class:!0});var a=y(e);t=E(a,"BUTTON",{class:!0,style:!0}),y(t).forEach(h),a.forEach(h),this.h()},h(){v(t,"class","task__color-btn svelte-100588h"),v(t,"style",s=`background-color: ${i[10]}`),v(e,"class","task__color-item svelte-100588h")},m(n,a){T(n,e,a),I(e,t),l||(o=F(t,"click",Q(function(){Ie(i[7](i[10]))&&i[7](i[10]).apply(this,arguments)})),l=!0)},p(n,a){i=n,a&16&&s!==(s=`background-color: ${i[10]}`)&&v(t,"style",s)},d(n){n&&h(e),l=!1,o()}}}function _e(i,e){let t,s,l=e[10]!=e[2]&&fe(e);return{key:i,first:null,c(){t=R(),l&&l.c(),s=R(),this.h()},l(o){t=R(),l&&l.l(o),s=R(),this.h()},h(){this.first=t},m(o,n){T(o,t,n),l&&l.m(o,n),T(o,s,n)},p(o,n){e=o,e[10]!=e[2]?l?l.p(e,n):(l=fe(e),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(o){o&&h(t),l&&l.d(o),o&&h(s)}}}function Ve(i){let e,t,s,l,o,n,a,r,c=[],d=new Map,k,N,m,g,f=i[4];const _=u=>u[12];for(let u=0;u<f.length;u+=1){let p=ue(i,f,u),w=_(p);d.set(w,c[u]=_e(w,p))}return{c(){e=b("div"),t=b("div"),s=b("p"),l=G(i[1]),o=b("div"),n=b("button"),a=b("span"),r=b("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var p=y(e);t=E(p,"DIV",{class:!0});var w=y(t);s=E(w,"P",{class:!0});var D=y(s);l=H(D,i[1]),D.forEach(h),w.forEach(h),o=E(p,"DIV",{class:!0});var Y=y(o);n=E(Y,"BUTTON",{class:!0});var Z=y(n);a=E(Z,"SPAN",{class:!0}),y(a).forEach(h),Z.forEach(h),Y.forEach(h),r=E(p,"UL",{class:!0,style:!0});var z=y(r);for(let K=0;K<c.length;K+=1)c[K].l(z);z.forEach(h),p.forEach(h),this.h()},h(){v(s,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(a,"class","svg-image-del svelte-100588h"),v(n,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(o,"class","task__circle task__menu svelte-100588h"),v(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(r,"style",k=`background-color: ${i[2]}`),v(e,"class",N="task "+i[0]+" svelte-100588h"),j(e,"isDisabled",i[3])},m(u,p){T(u,e,p),I(e,t),I(t,s),I(s,l),I(e,o),I(o,n),I(n,a),I(e,r);for(let w=0;w<c.length;w+=1)c[w].m(r,null);m||(g=[F(t,"click",i[5]),F(n,"click",Q(i[6]))],m=!0)},p(u,[p]){p&2&&J(l,u[1]),p&148&&(f=u[4],c=W(c,p,_,1,u,f,d,r,we,_e,null,ue)),p&4&&k!==(k=`background-color: ${u[2]}`)&&v(r,"style",k),p&1&&N!==(N="task "+u[0]+" svelte-100588h")&&v(e,"class",N),p&9&&j(e,"isDisabled",u[3])},i:O,o:O,d(u){u&&h(e);for(let p=0;p<c.length;p+=1)c[p].d();m=!1,$(g)}}}function Le(i,e,t){let s,l;X(i,S,m=>t(9,s=m)),X(i,Ue,m=>t(4,l=m));let{class:o=""}=e,{text:n=""}=e,{color:a="#0029FF"}=e,{disabled:r=!1}=e,{id:c=null}=e;const d=()=>{let m=s.map(g=>(c===g.id&&(g.done=!g.done),g));S.set(m)},k=()=>{let m=s.filter(g=>g.id!=c);S.set(m),console.log("del",c)},N=m=>{let g=s.map(f=>(c===f.id&&(f.color=m),f));S.set(g)};return i.$$set=m=>{"class"in m&&t(0,o=m.class),"text"in m&&t(1,n=m.text),"color"in m&&t(2,a=m.color),"disabled"in m&&t(3,r=m.disabled),"id"in m&&t(8,c=m.id)},[o,n,a,r,l,d,k,N,c]}class de extends U{constructor(e){super();V(this,e,Le,Ve,L,{class:0,text:1,color:2,disabled:3,id:8})}}function he(i,e,t){const s=i.slice();return s[4]=e[t],s}function me(i,e,t){const s=i.slice();return s[4]=e[t],s}function ve(i,e){let t,s,l,o,n,a=O,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=b("li"),q(s.$$.fragment),this.h()},l(c){t=E(c,"LI",{class:!0});var d=y(t);B(s.$$.fragment,d),d.forEach(h),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){T(c,t,d),M(s,t,null),r=!0},p(c,d){e=c;const k={};d&2&&(k.text=e[4].text),d&2&&(k.color=e[4].color?e[4].color:null),d&2&&(k.id=e[4].id),s.$set(k)},r(){n=t.getBoundingClientRect()},f(){x(t),a(),ee(t,n)},a(){a(),a=te(t,n,oe,{duration:300})},i(c){r||(A(s.$$.fragment,c),le(()=>{o&&o.end(1),l=se(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){C(s.$$.fragment,c),l&&l.invalidate(),o=ne(t,e[2],{key:e[4].id}),r=!1},d(c){c&&h(t),P(s),c&&o&&o.end()}}}function ke(i,e){let t,s,l,o,n,a=O,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=b("li"),q(s.$$.fragment),this.h()},l(c){t=E(c,"LI",{class:!0});var d=y(t);B(s.$$.fragment,d),d.forEach(h),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){T(c,t,d),M(s,t,null),r=!0},p(c,d){e=c;const k={};d&2&&(k.text=e[4].text),d&2&&(k.color=e[4].color?e[4].color:null),d&2&&(k.id=e[4].id),s.$set(k)},r(){n=t.getBoundingClientRect()},f(){x(t),a(),ee(t,n)},a(){a(),a=te(t,n,oe,{duration:300})},i(c){r||(A(s.$$.fragment,c),le(()=>{o&&o.end(1),l=se(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){C(s.$$.fragment,c),l&&l.invalidate(),o=ne(t,e[2],{key:e[4].id}),r=!1},d(c){c&&h(t),P(s),c&&o&&o.end()}}}function qe(i){let e,t,s,l=[],o=new Map,n,a=[],r=new Map,c,d,k=i[1].filter(ge);const N=f=>f[4].id;for(let f=0;f<k.length;f+=1){let _=me(i,k,f),u=N(_);o.set(u,l[f]=ve(u,_))}let m=i[1].filter(pe);const g=f=>f[4].id;for(let f=0;f<m.length;f+=1){let _=he(i,m,f),u=g(_);r.set(u,a[f]=ke(u,_))}return{c(){e=b("section"),t=b("div"),s=b("ul");for(let f=0;f<l.length;f+=1)l[f].c();n=b("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=E(f,"SECTION",{class:!0});var _=y(e);t=E(_,"DIV",{class:!0});var u=y(t);s=E(u,"UL",{class:!0});var p=y(s);for(let D=0;D<l.length;D+=1)l[D].l(p);p.forEach(h),n=E(u,"UL",{class:!0});var w=y(n);for(let D=0;D<a.length;D+=1)a[D].l(w);w.forEach(h),u.forEach(h),_.forEach(h),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(f,_){T(f,e,_),I(e,t),I(t,s);for(let u=0;u<l.length;u+=1)l[u].m(s,null);I(t,n);for(let u=0;u<a.length;u+=1)a[u].m(n,null);d=!0},p(f,[_]){if(_&2){k=f[1].filter(ge),ae();for(let u=0;u<l.length;u+=1)l[u].r();l=W(l,_,N,1,f,k,o,s,re,ve,null,me);for(let u=0;u<l.length;u+=1)l[u].a();ie()}if(_&2){m=f[1].filter(pe),ae();for(let u=0;u<a.length;u+=1)a[u].r();a=W(a,_,g,1,f,m,r,n,re,ke,null,he);for(let u=0;u<a.length;u+=1)a[u].a();ie()}(!d||_&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(f){if(!d){for(let _=0;_<k.length;_+=1)A(l[_]);for(let _=0;_<m.length;_+=1)A(a[_]);d=!0}},o(f){for(let _=0;_<l.length;_+=1)C(l[_]);for(let _=0;_<a.length;_+=1)C(a[_]);d=!1},d(f){f&&h(e);for(let _=0;_<l.length;_+=1)l[_].d();for(let _=0;_<a.length;_+=1)a[_].d()}}}const ge=i=>!i.done,pe=i=>i.done;function Be(i,e,t){let s;X(i,S,a=>t(1,s=a));let{class:l=""}=e;const[o,n]=Ne({duration:a=>Math.sqrt(a*200),fallback(a,r){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:De,css:k=>`
					transform: ${d} scale(${k});
					opacity: ${k}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,o,n]}class Me extends U{constructor(e){super();V(this,e,Be,qe,L,{class:0})}}function be(i){let e,t,s,l=i[2].text&&Ee(i);return{c(){e=b("button"),l&&l.c(),this.h()},l(o){e=E(o,"BUTTON",{class:!0});var n=y(e);l&&l.l(n),n.forEach(h),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(o,n){T(o,e,n),l&&l.m(e,null),t||(s=F(e,"click",Q(i[6])),t=!0)},p(o,n){o[2].text?l?l.p(o,n):(l=Ee(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&h(e),l&&l.d(),t=!1,s()}}}function Ee(i){let e=i[2].text+"",t;return{c(){t=G(e)},l(s){t=H(s,e)},m(s,l){T(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&J(t,e)},d(s){s&&h(t)}}}function Pe(i){let e,t,s,l,o,n=i[2]&&be(i);return{c(){e=b("div"),t=b("input"),n&&n.c(),this.h()},l(a){e=E(a,"DIV",{class:!0});var r=y(e);t=E(r,"INPUT",{placeholder:!0,class:!0}),n&&n.l(r),r.forEach(h),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),j(e,"isError",i[5])},m(a,r){T(a,e,r),I(e,t),ce(t,i[4]),n&&n.m(e,null),i[9](e),l||(o=[F(t,"input",i[8]),F(t,"input",i[7])],l=!0)},p(a,[r]){r&2&&v(t,"placeholder",a[1]),r&16&&t.value!==a[4]&&ce(t,a[4]),a[2]?n?n.p(a,r):(n=be(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),r&37&&j(e,"isError",a[5])},i:O,o:O,d(a){a&&h(e),n&&n.d(),i[9](null),l=!1,$(o)}}}function Re(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:o=null}=e,n,a,r=!1;const c=Ae(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,r=!0)},k=()=>{t(5,r=!1)};function N(){a=this.value,t(4,a)}function m(g){Ce[g?"unshift":"push"](()=>{n=g,t(3,n)})}return i.$$set=g=>{"class"in g&&t(0,s=g.class),"placeholder"in g&&t(1,l=g.placeholder),"btn"in g&&t(2,o=g.btn)},[s,l,o,n,a,r,d,k,N,m]}class je extends U{constructor(e){super();V(this,e,Re,Pe,L,{class:0,placeholder:1,btn:2})}}function Ke(i){let e,t,s,l;return t=new je({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=b("div"),q(t.$$.fragment),this.h()},l(o){e=E(o,"DIV",{class:!0});var n=y(e);B(t.$$.fragment,n),n.forEach(h),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(o,n){T(o,e,n),M(t,e,null),l=!0},p(o,[n]){(!l||n&1&&s!==(s="add-todo "+o[0]+" svelte-hols8d"))&&v(e,"class",s)},i(o){l||(A(t.$$.fragment,o),l=!0)},o(o){C(t.$$.fragment,o),l=!1},d(o){o&&h(e),P(t)}}}function Qe(i,e,t){let{class:s=""}=e;const l=o=>{let n={id:Date.now(),text:o.detail.value,color:"#000",done:!1};S.update(a=>a=[n,...a])};return i.$$set=o=>{"class"in o&&t(0,s=o.class)},[s,l]}class We extends U{constructor(e){super();V(this,e,Qe,Ke,L,{class:0})}}function Xe(i){let e,t,s,l,o,n,a;return l=new We({}),n=new Me({props:{class:"mt-50"}}),{c(){e=Se(),t=b("section"),s=b("div"),q(l.$$.fragment),q(n.$$.fragment),this.h()},l(r){Fe('[data-svelte="svelte-1ms75pp"]',document.head).forEach(h),e=Oe(r),t=E(r,"SECTION",{class:!0});var d=y(t);s=E(d,"DIV",{class:!0});var k=y(s);B(l.$$.fragment,k),k.forEach(h),d.forEach(h),B(n.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",o=""+(i[0]+" mt-50 svelte-hols8d"))},m(r,c){T(r,e,c),T(r,t,c),I(t,s),M(l,s,null),M(n,r,c),a=!0},p(r,[c]){(!a||c&1&&o!==(o=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",o)},i(r){a||(A(l.$$.fragment,r),A(n.$$.fragment,r),a=!0)},o(r){C(l.$$.fragment,r),C(n.$$.fragment,r),a=!1},d(r){r&&h(e),r&&h(t),P(l),P(n,r)}}}function Ye(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class ze extends U{constructor(e){super();V(this,e,Ye,Xe,L,{class:0})}}export{ze as default};