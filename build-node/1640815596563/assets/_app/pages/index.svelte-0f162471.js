import{K as be,C as Ee,S as U,i as V,s as L,k as X,f as T,e as p,c as b,a as E,d as v,b as g,D as y,L as S,M as K,N as ye,t as Y,g as Z,O as R,h as z,E as F,P as Te,Q as G,R as Q,v as q,w as B,x as P,T as H,U as J,V as $,p as A,W as x,X as ee,n as D,Y as te,A as M,m as le,Z as se,o as ne,_ as Ie,$ as ae,a0 as oe,a1 as we,a2 as ie,a3 as Ne,a4 as Ae,j as De,a5 as Ce,l as Se}from"../chunks/vendor-f9e02ebb.js";const C=Ee([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Fe=be(C,(a,t)=>{let e=a.filter(i=>i.color).map(i=>i.color),s=e.filter((i,n)=>e.indexOf(i)===n).map((i,n)=>({id:n,color:i}));t(s)});function re(a,t,e){const l=a.slice();return l[10]=t[e],l}function ce(a){let t,e,l,s,i;return{c(){t=p("li"),e=p("button"),this.h()},l(n){t=b(n,"LI",{class:!0});var o=E(t);e=b(o,"BUTTON",{class:!0,style:!0}),E(e).forEach(v),o.forEach(v),this.h()},h(){g(e,"class","task__color-btn svelte-100588h"),g(e,"style",l=`background-color: ${a[10].color}`),g(t,"class","task__color-item svelte-100588h")},m(n,o){T(n,t,o),y(t,e),s||(i=S(e,"click",K(function(){ye(a[7](a[10].color))&&a[7](a[10].color).apply(this,arguments)})),s=!0)},p(n,o){a=n,o&16&&l!==(l=`background-color: ${a[10].color}`)&&g(e,"style",l)},d(n){n&&v(t),s=!1,i()}}}function ue(a){let t,e=a[10].color!=a[2]&&ce(a);return{c(){e&&e.c(),t=X()},l(l){e&&e.l(l),t=X()},m(l,s){e&&e.m(l,s),T(l,t,s)},p(l,s){l[10].color!=l[2]?e?e.p(l,s):(e=ce(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&v(t)}}}function Oe(a){let t,e,l,s,i,n,o,r,u,h,k,w,m=a[4],d=[];for(let c=0;c<m.length;c+=1)d[c]=ue(re(a,m,c));return{c(){t=p("div"),e=p("div"),l=p("p"),s=Y(a[1]),i=p("div"),n=p("button"),o=p("span"),r=p("ul");for(let c=0;c<d.length;c+=1)d[c].c();this.h()},l(c){t=b(c,"DIV",{class:!0});var f=E(t);e=b(f,"DIV",{class:!0});var _=E(e);l=b(_,"P",{class:!0});var N=E(l);s=Z(N,a[1]),N.forEach(v),_.forEach(v),i=b(f,"DIV",{class:!0});var O=E(i);n=b(O,"BUTTON",{class:!0});var I=E(n);o=b(I,"SPAN",{class:!0}),E(o).forEach(v),I.forEach(v),O.forEach(v),r=b(f,"UL",{class:!0,style:!0});var W=E(r);for(let j=0;j<d.length;j+=1)d[j].l(W);W.forEach(v),f.forEach(v),this.h()},h(){g(l,"class","svelte-100588h"),g(e,"class","task__main svelte-100588h"),g(o,"class","svg-image-del svelte-100588h"),g(n,"class","task__menu-btn task__menu-btn_del svelte-100588h"),g(i,"class","task__circle task__menu svelte-100588h"),g(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),g(r,"style",u=`background-color: ${a[2]}`),g(t,"class",h="task "+a[0]+" svelte-100588h"),R(t,"isDisabled",a[3])},m(c,f){T(c,t,f),y(t,e),y(e,l),y(l,s),y(t,i),y(i,n),y(n,o),y(t,r);for(let _=0;_<d.length;_+=1)d[_].m(r,null);k||(w=[S(e,"click",a[5]),S(n,"click",K(a[6]))],k=!0)},p(c,[f]){if(f&2&&z(s,c[1]),f&148){m=c[4];let _;for(_=0;_<m.length;_+=1){const N=re(c,m,_);d[_]?d[_].p(N,f):(d[_]=ue(N),d[_].c(),d[_].m(r,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=m.length}f&4&&u!==(u=`background-color: ${c[2]}`)&&g(r,"style",u),f&1&&h!==(h="task "+c[0]+" svelte-100588h")&&g(t,"class",h),f&9&&R(t,"isDisabled",c[3])},i:F,o:F,d(c){c&&v(t),Te(d,c),k=!1,G(w)}}}function Ue(a,t,e){let l,s;Q(a,Fe,m=>e(4,l=m)),Q(a,C,m=>e(9,s=m));let{class:i=""}=t,{text:n=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t;const h=()=>{let m=s.map(d=>(u===d.id&&(d.done=!d.done),d));C.set(m)},k=()=>{let m=s.filter(d=>d.id!=u);C.set(m),console.log("del",u)},w=m=>{let d=s.map(c=>(u===c.id&&(c.color=m),c));C.set(d)};return console.log(l),a.$$set=m=>{"class"in m&&e(0,i=m.class),"text"in m&&e(1,n=m.text),"color"in m&&e(2,o=m.color),"disabled"in m&&e(3,r=m.disabled),"id"in m&&e(8,u=m.id)},[i,n,o,r,l,h,k,w,u]}class fe extends U{constructor(t){super();V(this,t,Ue,Oe,L,{class:0,text:1,color:2,disabled:3,id:8})}}function _e(a,t,e){const l=a.slice();return l[4]=t[e],l}function de(a,t,e){const l=a.slice();return l[4]=t[e],l}function he(a,t){let e,l,s,i,n,o=F,r;return l=new fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:a,first:null,c(){e=p("li"),q(l.$$.fragment),this.h()},l(u){e=b(u,"LI",{class:!0});var h=E(e);B(l.$$.fragment,h),h.forEach(v),this.h()},h(){g(e,"class","task-section__item"),this.first=e},m(u,h){T(u,e,h),P(l,e,null),r=!0},p(u,h){t=u;const k={};h&2&&(k.text=t[4].text),h&2&&(k.color=t[4].color?t[4].color:null),h&2&&(k.id=t[4].id),l.$set(k)},r(){n=e.getBoundingClientRect()},f(){H(e),o(),J(e,n)},a(){o(),o=$(e,n,ae,{duration:300})},i(u){r||(A(l.$$.fragment,u),x(()=>{i&&i.end(1),s=ee(e,t[3],{key:t[4].id}),s.start()}),r=!0)},o(u){D(l.$$.fragment,u),s&&s.invalidate(),i=te(e,t[2],{key:t[4].id}),r=!1},d(u){u&&v(e),M(l),u&&i&&i.end()}}}function me(a,t){let e,l,s,i,n,o=F,r;return l=new fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:a,first:null,c(){e=p("li"),q(l.$$.fragment),this.h()},l(u){e=b(u,"LI",{class:!0});var h=E(e);B(l.$$.fragment,h),h.forEach(v),this.h()},h(){g(e,"class","task-section__item"),this.first=e},m(u,h){T(u,e,h),P(l,e,null),r=!0},p(u,h){t=u;const k={};h&2&&(k.text=t[4].text),h&2&&(k.color=t[4].color?t[4].color:null),h&2&&(k.id=t[4].id),l.$set(k)},r(){n=e.getBoundingClientRect()},f(){H(e),o(),J(e,n)},a(){o(),o=$(e,n,ae,{duration:300})},i(u){r||(A(l.$$.fragment,u),x(()=>{i&&i.end(1),s=ee(e,t[3],{key:t[4].id}),s.start()}),r=!0)},o(u){D(l.$$.fragment,u),s&&s.invalidate(),i=te(e,t[2],{key:t[4].id}),r=!1},d(u){u&&v(e),M(l),u&&i&&i.end()}}}function Ve(a){let t,e,l,s=[],i=new Map,n,o=[],r=new Map,u,h,k=a[1].filter(ve);const w=c=>c[4].id;for(let c=0;c<k.length;c+=1){let f=de(a,k,c),_=w(f);i.set(_,s[c]=he(_,f))}let m=a[1].filter(ge);const d=c=>c[4].id;for(let c=0;c<m.length;c+=1){let f=_e(a,m,c),_=d(f);r.set(_,o[c]=me(_,f))}return{c(){t=p("section"),e=p("div"),l=p("ul");for(let c=0;c<s.length;c+=1)s[c].c();n=p("ul");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){t=b(c,"SECTION",{class:!0});var f=E(t);e=b(f,"DIV",{class:!0});var _=E(e);l=b(_,"UL",{class:!0});var N=E(l);for(let I=0;I<s.length;I+=1)s[I].l(N);N.forEach(v),n=b(_,"UL",{class:!0});var O=E(n);for(let I=0;I<o.length;I+=1)o[I].l(O);O.forEach(v),_.forEach(v),f.forEach(v),this.h()},h(){g(l,"class","task-section__col"),g(n,"class","task-section__col"),g(e,"class","container task-section__grid svelte-1rib3cm"),g(t,"class",u="task-section "+a[0]+" svelte-1rib3cm")},m(c,f){T(c,t,f),y(t,e),y(e,l);for(let _=0;_<s.length;_+=1)s[_].m(l,null);y(e,n);for(let _=0;_<o.length;_+=1)o[_].m(n,null);h=!0},p(c,[f]){if(f&2){k=c[1].filter(ve),le();for(let _=0;_<s.length;_+=1)s[_].r();s=se(s,f,w,1,c,k,i,l,oe,he,null,de);for(let _=0;_<s.length;_+=1)s[_].a();ne()}if(f&2){m=c[1].filter(ge),le();for(let _=0;_<o.length;_+=1)o[_].r();o=se(o,f,d,1,c,m,r,n,oe,me,null,_e);for(let _=0;_<o.length;_+=1)o[_].a();ne()}(!h||f&1&&u!==(u="task-section "+c[0]+" svelte-1rib3cm"))&&g(t,"class",u)},i(c){if(!h){for(let f=0;f<k.length;f+=1)A(s[f]);for(let f=0;f<m.length;f+=1)A(o[f]);h=!0}},o(c){for(let f=0;f<s.length;f+=1)D(s[f]);for(let f=0;f<o.length;f+=1)D(o[f]);h=!1},d(c){c&&v(t);for(let f=0;f<s.length;f+=1)s[f].d();for(let f=0;f<o.length;f+=1)o[f].d()}}}const ve=a=>!a.done,ge=a=>a.done;function Le(a,t,e){let l;Q(a,C,o=>e(1,l=o));let{class:s=""}=t;const[i,n]=Ie({duration:o=>Math.sqrt(o*200),fallback(o,r){const u=getComputedStyle(o),h=u.transform==="none"?"":u.transform;return{duration:600,easing:we,css:k=>`
					transform: ${h} scale(${k});
					opacity: ${k}
				`}}});return a.$$set=o=>{"class"in o&&e(0,s=o.class)},[s,l,i,n]}class qe extends U{constructor(t){super();V(this,t,Le,Ve,L,{class:0})}}function ke(a){let t,e,l,s=a[2].text&&pe(a);return{c(){t=p("button"),s&&s.c(),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var n=E(t);s&&s.l(n),n.forEach(v),this.h()},h(){g(t,"class","btn svelte-12pihab")},m(i,n){T(i,t,n),s&&s.m(t,null),e||(l=S(t,"click",K(a[6])),e=!0)},p(i,n){i[2].text?s?s.p(i,n):(s=pe(i),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(i){i&&v(t),s&&s.d(),e=!1,l()}}}function pe(a){let t=a[2].text+"",e;return{c(){e=Y(t)},l(l){e=Z(l,t)},m(l,s){T(l,e,s)},p(l,s){s&4&&t!==(t=l[2].text+"")&&z(e,t)},d(l){l&&v(e)}}}function Be(a){let t,e,l,s,i,n=a[2]&&ke(a);return{c(){t=p("div"),e=p("input"),n&&n.c(),this.h()},l(o){t=b(o,"DIV",{class:!0});var r=E(t);e=b(r,"INPUT",{placeholder:!0,class:!0}),n&&n.l(r),r.forEach(v),this.h()},h(){g(e,"placeholder",a[1]),g(e,"class","svelte-12pihab"),g(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),R(t,"isError",a[5])},m(o,r){T(o,t,r),y(t,e),ie(e,a[4]),n&&n.m(t,null),a[9](t),s||(i=[S(e,"input",a[8]),S(e,"input",a[7])],s=!0)},p(o,[r]){r&2&&g(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&ie(e,o[4]),o[2]?n?n.p(o,r):(n=ke(o),n.c(),n.m(t,null)):n&&(n.d(1),n=null),r&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab")&&g(t,"class",l),r&37&&R(t,"isError",o[5])},i:F,o:F,d(o){o&&v(t),n&&n.d(),a[9](null),s=!1,G(i)}}}function Pe(a,t,e){let{class:l=""}=t,{placeholder:s="Placeholer"}=t,{btn:i=null}=t,n,o,r=!1;const u=Ne(),h=()=>{o?(u("submit",{value:o}),e(4,o="")):e(5,r=!0)},k=()=>{e(5,r=!1)};function w(){o=this.value,e(4,o)}function m(d){Ae[d?"unshift":"push"](()=>{n=d,e(3,n)})}return a.$$set=d=>{"class"in d&&e(0,l=d.class),"placeholder"in d&&e(1,s=d.placeholder),"btn"in d&&e(2,i=d.btn)},[l,s,i,n,o,r,h,k,w,m]}class Me extends U{constructor(t){super();V(this,t,Pe,Be,L,{class:0,placeholder:1,btn:2})}}function Re(a){let t,e,l,s;return e=new Me({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),e.$on("submit",a[1]),{c(){t=p("div"),q(e.$$.fragment),this.h()},l(i){t=b(i,"DIV",{class:!0});var n=E(t);B(e.$$.fragment,n),n.forEach(v),this.h()},h(){g(t,"class",l="add-todo "+a[0]+" svelte-hols8d")},m(i,n){T(i,t,n),P(e,t,null),s=!0},p(i,[n]){(!s||n&1&&l!==(l="add-todo "+i[0]+" svelte-hols8d"))&&g(t,"class",l)},i(i){s||(A(e.$$.fragment,i),s=!0)},o(i){D(e.$$.fragment,i),s=!1},d(i){i&&v(t),M(e)}}}function je(a,t,e){let{class:l=""}=t;const s=i=>{let n={id:Date.now(),text:i.detail.value,color:"#000",done:!1};C.update(o=>o=[n,...o])};return a.$$set=i=>{"class"in i&&e(0,l=i.class)},[l,s]}class Ke extends U{constructor(t){super();V(this,t,je,Re,L,{class:0})}}function Qe(a){let t,e,l,s,i,n,o;return s=new Ke({}),n=new qe({props:{class:"mt-50"}}),{c(){t=De(),e=p("section"),l=p("div"),q(s.$$.fragment),q(n.$$.fragment),this.h()},l(r){Ce('[data-svelte="svelte-1ms75pp"]',document.head).forEach(v),t=Se(r),e=b(r,"SECTION",{class:!0});var h=E(e);l=b(h,"DIV",{class:!0});var k=E(l);B(s.$$.fragment,k),k.forEach(v),h.forEach(v),B(n.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",g(l,"class","container"),g(e,"class",i=""+(a[0]+" mt-50 svelte-hols8d"))},m(r,u){T(r,t,u),T(r,e,u),y(e,l),P(s,l,null),P(n,r,u),o=!0},p(r,[u]){(!o||u&1&&i!==(i=""+(r[0]+" mt-50 svelte-hols8d")))&&g(e,"class",i)},i(r){o||(A(s.$$.fragment,r),A(n.$$.fragment,r),o=!0)},o(r){D(s.$$.fragment,r),D(n.$$.fragment,r),o=!1},d(r){r&&v(t),r&&v(e),M(s),M(n,r)}}}function We(a,t,e){let{class:l=""}=t;return a.$$set=s=>{"class"in s&&e(0,l=s.class)},[l]}class Ye extends U{constructor(t){super();V(this,t,We,Qe,L,{class:0})}}export{Ye as default};