import{K as Ee,C as ye,S as O,i as U,s as V,k as G,f as A,p as w,e as E,c as y,a as T,d,b as h,D as N,L as F,M as W,N as Te,O as H,P as J,m as M,n as D,o as R,t as $,g as x,Q as j,h as ee,R as Ie,T as te,U as X,V as le,v as L,w as q,x as B,W as se,X as ne,A as P,Y as we,Z as Ne,_ as Ae,$ as ae,a0 as De,a1 as oe,a2 as re,a3 as Ce,E as K,a4 as ie,a5 as Se,a6 as Fe,j as Oe,a7 as Ue,l as Ve}from"../chunks/vendor-82b764ed.js";const S=ye([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Le=Ee(S,(a,e)=>{let t=a.filter(o=>o.color).map(o=>o.color),s=t.filter((o,r)=>t.indexOf(o)===r).map((o,r)=>({id:r,color:o}));e(s)});function ce(a,e,t){const l=a.slice();return l[10]=e[t],l}function ue(a){let e,t,l,s,o,r,n;return{c(){e=E("li"),t=E("button"),this.h()},l(i){e=y(i,"LI",{class:!0});var f=T(e);t=y(f,"BUTTON",{class:!0,style:!0}),T(t).forEach(d),f.forEach(d),this.h()},h(){h(t,"class","task__color-btn svelte-100588h"),h(t,"style",l=`background-color: ${a[10].color}`),h(e,"class","task__color-item svelte-100588h")},m(i,f){A(i,e,f),N(e,t),o=!0,r||(n=F(t,"click",W(function(){Te(a[7](a[10].color))&&a[7](a[10].color).apply(this,arguments)})),r=!0)},p(i,f){a=i,(!o||f&16&&l!==(l=`background-color: ${a[10].color}`))&&h(t,"style",l)},i(i){o||(H(()=>{s||(s=J(e,le,{},!0)),s.run(1)}),o=!0)},o(i){s||(s=J(e,le,{},!1)),s.run(0),o=!1},d(i){i&&d(e),i&&s&&s.end(),r=!1,n()}}}function fe(a){let e,t,l=a[10].color!=a[2]&&ue(a);return{c(){l&&l.c(),e=G()},l(s){l&&l.l(s),e=G()},m(s,o){l&&l.m(s,o),A(s,e,o),t=!0},p(s,o){s[10].color!=s[2]?l?(l.p(s,o),o&20&&w(l,1)):(l=ue(s),l.c(),w(l,1),l.m(e.parentNode,e)):l&&(M(),D(l,1,1,()=>{l=null}),R())},i(s){t||(w(l),t=!0)},o(s){D(l),t=!1},d(s){l&&l.d(s),s&&d(e)}}}function qe(a){let e,t,l,s,o,r,n,i,f,g,k,C,m,v=a[4],c=[];for(let u=0;u<v.length;u+=1)c[u]=fe(ce(a,v,u));const _=u=>D(c[u],1,1,()=>{c[u]=null});return{c(){e=E("div"),t=E("div"),l=E("p"),s=$(a[1]),o=E("div"),r=E("button"),n=E("span"),i=E("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=y(u,"DIV",{class:!0});var b=T(e);t=y(b,"DIV",{class:!0});var p=T(t);l=y(p,"P",{class:!0});var I=T(l);s=x(I,a[1]),I.forEach(d),p.forEach(d),o=y(b,"DIV",{class:!0});var Y=T(o);r=y(Y,"BUTTON",{class:!0});var Z=T(r);n=y(Z,"SPAN",{class:!0}),T(n).forEach(d),Z.forEach(d),Y.forEach(d),i=y(b,"UL",{class:!0,style:!0});var z=T(i);for(let Q=0;Q<c.length;Q+=1)c[Q].l(z);z.forEach(d),b.forEach(d),this.h()},h(){h(l,"class","svelte-100588h"),h(t,"class","task__main svelte-100588h"),h(n,"class","svg-image-del svelte-100588h"),h(r,"class","task__menu-btn task__menu-btn_del svelte-100588h"),h(o,"class","task__circle task__menu svelte-100588h"),h(i,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),h(i,"style",f=`background-color: ${a[2]}`),h(e,"class",g="task "+a[0]+" svelte-100588h"),j(e,"isDisabled",a[3])},m(u,b){A(u,e,b),N(e,t),N(t,l),N(l,s),N(e,o),N(o,r),N(r,n),N(e,i);for(let p=0;p<c.length;p+=1)c[p].m(i,null);k=!0,C||(m=[F(t,"click",a[5]),F(r,"click",W(a[6]))],C=!0)},p(u,[b]){if((!k||b&2)&&ee(s,u[1]),b&148){v=u[4];let p;for(p=0;p<v.length;p+=1){const I=ce(u,v,p);c[p]?(c[p].p(I,b),w(c[p],1)):(c[p]=fe(I),c[p].c(),w(c[p],1),c[p].m(i,null))}for(M(),p=v.length;p<c.length;p+=1)_(p);R()}(!k||b&4&&f!==(f=`background-color: ${u[2]}`))&&h(i,"style",f),(!k||b&1&&g!==(g="task "+u[0]+" svelte-100588h"))&&h(e,"class",g),b&9&&j(e,"isDisabled",u[3])},i(u){if(!k){for(let b=0;b<v.length;b+=1)w(c[b]);k=!0}},o(u){c=c.filter(Boolean);for(let b=0;b<c.length;b+=1)D(c[b]);k=!1},d(u){u&&d(e),Ie(c,u),C=!1,te(m)}}}function Be(a,e,t){let l,s;X(a,Le,m=>t(4,l=m)),X(a,S,m=>t(9,s=m));let{class:o=""}=e,{text:r=""}=e,{color:n="#0029FF"}=e,{disabled:i=!1}=e,{id:f=null}=e;const g=()=>{let m=s.map(v=>(f===v.id&&(v.done=!v.done),v));S.set(m)},k=()=>{let m=s.filter(v=>v.id!=f);S.set(m),console.log("del",f)},C=m=>{let v=s.map(c=>(f===c.id&&(c.color=m),c));S.set(v)};return console.log(l),a.$$set=m=>{"class"in m&&t(0,o=m.class),"text"in m&&t(1,r=m.text),"color"in m&&t(2,n=m.color),"disabled"in m&&t(3,i=m.disabled),"id"in m&&t(8,f=m.id)},[o,r,n,i,l,g,k,C,f]}class _e extends O{constructor(e){super();U(this,e,Be,qe,V,{class:0,text:1,color:2,disabled:3,id:8})}}function de(a,e,t){const l=a.slice();return l[4]=e[t],l}function he(a,e,t){const l=a.slice();return l[4]=e[t],l}function me(a,e){let t,l,s,o=K,r;return l=new _e({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:a,first:null,c(){t=E("li"),L(l.$$.fragment),this.h()},l(n){t=y(n,"LI",{class:!0});var i=T(t);q(l.$$.fragment,i),i.forEach(d),this.h()},h(){h(t,"class","task-section__item"),this.first=t},m(n,i){A(n,t,i),B(l,t,null),r=!0},p(n,i){e=n;const f={};i&2&&(f.text=e[4].text),i&2&&(f.color=e[4].color?e[4].color:null),i&2&&(f.id=e[4].id),l.$set(f)},r(){s=t.getBoundingClientRect()},f(){se(t),o()},a(){o(),o=ne(t,s,oe,{duration:300})},i(n){r||(w(l.$$.fragment,n),r=!0)},o(n){D(l.$$.fragment,n),r=!1},d(n){n&&d(t),P(l)}}}function ve(a,e){let t,l,s,o,r,n=K,i;return l=new _e({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:a,first:null,c(){t=E("li"),L(l.$$.fragment),this.h()},l(f){t=y(f,"LI",{class:!0});var g=T(t);q(l.$$.fragment,g),g.forEach(d),this.h()},h(){h(t,"class","task-section__item"),this.first=t},m(f,g){A(f,t,g),B(l,t,null),i=!0},p(f,g){e=f;const k={};g&2&&(k.text=e[4].text),g&2&&(k.color=e[4].color?e[4].color:null),g&2&&(k.id=e[4].id),l.$set(k)},r(){r=t.getBoundingClientRect()},f(){se(t),n(),we(t,r)},a(){n(),n=ne(t,r,oe,{duration:300})},i(f){i||(w(l.$$.fragment,f),H(()=>{o&&o.end(1),s=Ne(t,e[3],{key:e[4].id}),s.start()}),i=!0)},o(f){D(l.$$.fragment,f),s&&s.invalidate(),o=Ae(t,e[2],{key:e[4].id}),i=!1},d(f){f&&d(t),P(l),f&&o&&o.end()}}}function Pe(a){let e,t,l,s=[],o=new Map,r,n=[],i=new Map,f,g,k=a[1].filter(ge);const C=c=>c[4].id;for(let c=0;c<k.length;c+=1){let _=he(a,k,c),u=C(_);o.set(u,s[c]=me(u,_))}let m=a[1].filter(ke);const v=c=>c[4].id;for(let c=0;c<m.length;c+=1){let _=de(a,m,c),u=v(_);i.set(u,n[c]=ve(u,_))}return{c(){e=E("section"),t=E("div"),l=E("ul");for(let c=0;c<s.length;c+=1)s[c].c();r=E("ul");for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=y(c,"SECTION",{class:!0});var _=T(e);t=y(_,"DIV",{class:!0});var u=T(t);l=y(u,"UL",{class:!0});var b=T(l);for(let I=0;I<s.length;I+=1)s[I].l(b);b.forEach(d),r=y(u,"UL",{class:!0});var p=T(r);for(let I=0;I<n.length;I+=1)n[I].l(p);p.forEach(d),u.forEach(d),_.forEach(d),this.h()},h(){h(l,"class","task-section__col"),h(r,"class","task-section__col"),h(t,"class","container task-section__grid svelte-1rib3cm"),h(e,"class",f="task-section "+a[0]+" svelte-1rib3cm")},m(c,_){A(c,e,_),N(e,t),N(t,l);for(let u=0;u<s.length;u+=1)s[u].m(l,null);N(t,r);for(let u=0;u<n.length;u+=1)n[u].m(r,null);g=!0},p(c,[_]){if(_&2){k=c[1].filter(ge),M();for(let u=0;u<s.length;u+=1)s[u].r();s=ae(s,_,C,1,c,k,o,l,re,me,null,he);for(let u=0;u<s.length;u+=1)s[u].a();R()}if(_&2){m=c[1].filter(ke),M();for(let u=0;u<n.length;u+=1)n[u].r();n=ae(n,_,v,1,c,m,i,r,re,ve,null,de);for(let u=0;u<n.length;u+=1)n[u].a();R()}(!g||_&1&&f!==(f="task-section "+c[0]+" svelte-1rib3cm"))&&h(e,"class",f)},i(c){if(!g){for(let _=0;_<k.length;_+=1)w(s[_]);for(let _=0;_<m.length;_+=1)w(n[_]);g=!0}},o(c){for(let _=0;_<s.length;_+=1)D(s[_]);for(let _=0;_<n.length;_+=1)D(n[_]);g=!1},d(c){c&&d(e);for(let _=0;_<s.length;_+=1)s[_].d();for(let _=0;_<n.length;_+=1)n[_].d()}}}const ge=a=>!a.done,ke=a=>a.done;function Me(a,e,t){let l;X(a,S,n=>t(1,l=n));let{class:s=""}=e;const[o,r]=De({duration:n=>Math.sqrt(n*200),fallback(n,i){const f=getComputedStyle(n),g=f.transform==="none"?"":f.transform;return{duration:600,easing:Ce,css:k=>`
					transform: ${g} scale(${k});
					opacity: ${k}
				`}}});return a.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l,o,r]}class Re extends O{constructor(e){super();U(this,e,Me,Pe,V,{class:0})}}function pe(a){let e,t,l,s=a[2].text&&be(a);return{c(){e=E("button"),s&&s.c(),this.h()},l(o){e=y(o,"BUTTON",{class:!0});var r=T(e);s&&s.l(r),r.forEach(d),this.h()},h(){h(e,"class","btn svelte-12pihab")},m(o,r){A(o,e,r),s&&s.m(e,null),t||(l=F(e,"click",W(a[6])),t=!0)},p(o,r){o[2].text?s?s.p(o,r):(s=be(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&d(e),s&&s.d(),t=!1,l()}}}function be(a){let e=a[2].text+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,s){A(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&ee(t,e)},d(l){l&&d(t)}}}function je(a){let e,t,l,s,o,r=a[2]&&pe(a);return{c(){e=E("div"),t=E("input"),r&&r.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=T(e);t=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(d),this.h()},h(){h(t,"placeholder",a[1]),h(t,"class","svelte-12pihab"),h(e,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),j(e,"isError",a[5])},m(n,i){A(n,e,i),N(e,t),ie(t,a[4]),r&&r.m(e,null),a[9](e),s||(o=[F(t,"input",a[8]),F(t,"input",a[7])],s=!0)},p(n,[i]){i&2&&h(t,"placeholder",n[1]),i&16&&t.value!==n[4]&&ie(t,n[4]),n[2]?r?r.p(n,i):(r=pe(n),r.c(),r.m(e,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&h(e,"class",l),i&37&&j(e,"isError",n[5])},i:K,o:K,d(n){n&&d(e),r&&r.d(),a[9](null),s=!1,te(o)}}}function Ke(a,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:o=null}=e,r,n,i=!1;const f=Se(),g=()=>{n?(f("submit",{value:n}),t(4,n="")):t(5,i=!0)},k=()=>{t(5,i=!1)};function C(){n=this.value,t(4,n)}function m(v){Fe[v?"unshift":"push"](()=>{r=v,t(3,r)})}return a.$$set=v=>{"class"in v&&t(0,l=v.class),"placeholder"in v&&t(1,s=v.placeholder),"btn"in v&&t(2,o=v.btn)},[l,s,o,r,n,i,g,k,C,m]}class Qe extends O{constructor(e){super();U(this,e,Ke,je,V,{class:0,placeholder:1,btn:2})}}function We(a){let e,t,l,s;return t=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",a[1]),{c(){e=E("div"),L(t.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var r=T(e);q(t.$$.fragment,r),r.forEach(d),this.h()},h(){h(e,"class",l="add-todo "+a[0]+" svelte-hols8d")},m(o,r){A(o,e,r),B(t,e,null),s=!0},p(o,[r]){(!s||r&1&&l!==(l="add-todo "+o[0]+" svelte-hols8d"))&&h(e,"class",l)},i(o){s||(w(t.$$.fragment,o),s=!0)},o(o){D(t.$$.fragment,o),s=!1},d(o){o&&d(e),P(t)}}}function Xe(a,e,t){let{class:l=""}=e;const s=o=>{let r={id:Date.now(),text:o.detail.value,color:"#000",done:!1};S.update(n=>n=[r,...n])};return a.$$set=o=>{"class"in o&&t(0,l=o.class)},[l,s]}class Ye extends O{constructor(e){super();U(this,e,Xe,We,V,{class:0})}}function Ze(a){let e,t,l,s,o,r,n;return s=new Ye({}),r=new Re({props:{class:"mt-50"}}),{c(){e=Oe(),t=E("section"),l=E("div"),L(s.$$.fragment),L(r.$$.fragment),this.h()},l(i){Ue('[data-svelte="svelte-1ms75pp"]',document.head).forEach(d),e=Ve(i),t=y(i,"SECTION",{class:!0});var g=T(t);l=y(g,"DIV",{class:!0});var k=T(l);q(s.$$.fragment,k),k.forEach(d),g.forEach(d),q(r.$$.fragment,i),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",h(l,"class","container"),h(t,"class",o=""+(a[0]+" mt-50 svelte-hols8d"))},m(i,f){A(i,e,f),A(i,t,f),N(t,l),B(s,l,null),B(r,i,f),n=!0},p(i,[f]){(!n||f&1&&o!==(o=""+(i[0]+" mt-50 svelte-hols8d")))&&h(t,"class",o)},i(i){n||(w(s.$$.fragment,i),w(r.$$.fragment,i),n=!0)},o(i){D(s.$$.fragment,i),D(r.$$.fragment,i),n=!1},d(i){i&&d(e),i&&d(t),P(s),P(r,i)}}}function ze(a,e,t){let{class:l=""}=e;return a.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class He extends O{constructor(e){super();U(this,e,ze,Ze,V,{class:0})}}export{He as default};