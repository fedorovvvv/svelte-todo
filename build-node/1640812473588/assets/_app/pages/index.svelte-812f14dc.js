import{C as ye,S,i as B,s as F,e as k,t as $,c as g,a as b,g as x,d as v,b as m,K as Q,f as w,D as p,L as V,M as ee,h as te,E as A,N as le,O as se,v as P,w as M,x as R,P as ae,Q as ne,R as ie,p as U,T as oe,U as re,n as L,V as ce,A as j,m as ue,W as fe,o as _e,X as Ne,Y as de,Z as he,_ as we,$ as ve,a0 as De,a1 as Ue,j as Le,a2 as Oe,l as Ae}from"../chunks/vendor-174655a0.js";const K=ye([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Ce(o){let e,t,s,l,r,n,a,i,c,d,u,T,q,E,_,f,h,D,O,N;return{c(){e=k("div"),t=k("div"),s=k("p"),l=$(o[1]),r=k("div"),n=k("button"),a=k("span"),i=k("ul"),c=k("li"),d=k("button"),u=k("li"),T=k("button"),q=k("li"),E=k("button"),_=k("li"),f=k("button"),this.h()},l(I){e=g(I,"DIV",{class:!0});var y=b(e);t=g(y,"DIV",{class:!0});var W=b(t);s=g(W,"P",{class:!0});var X=b(s);l=x(X,o[1]),X.forEach(v),W.forEach(v),r=g(y,"DIV",{class:!0});var Y=b(r);n=g(Y,"BUTTON",{class:!0});var Z=b(n);a=g(Z,"SPAN",{class:!0}),b(a).forEach(v),Z.forEach(v),Y.forEach(v),i=g(y,"UL",{class:!0,style:!0});var C=b(i);c=g(C,"LI",{class:!0});var z=b(c);d=g(z,"BUTTON",{class:!0}),b(d).forEach(v),z.forEach(v),u=g(C,"LI",{class:!0});var G=b(u);T=g(G,"BUTTON",{class:!0}),b(T).forEach(v),G.forEach(v),q=g(C,"LI",{class:!0});var H=b(q);E=g(H,"BUTTON",{class:!0}),b(E).forEach(v),H.forEach(v),_=g(C,"LI",{class:!0});var J=b(_);f=g(J,"BUTTON",{class:!0}),b(f).forEach(v),J.forEach(v),C.forEach(v),y.forEach(v),this.h()},h(){m(s,"class","svelte-132vqf1"),m(t,"class","task__main svelte-132vqf1"),m(a,"class","svg-image-del svelte-132vqf1"),m(n,"class","task__menu-btn task__menu-btn_del svelte-132vqf1"),m(r,"class","task__circle task__menu svelte-132vqf1"),m(d,"class","task__color-btn svelte-132vqf1"),m(c,"class","task__color-item svelte-132vqf1"),m(T,"class","task__color-btn svelte-132vqf1"),m(u,"class","task__color-item svelte-132vqf1"),m(E,"class","task__color-btn svelte-132vqf1"),m(q,"class","task__color-item svelte-132vqf1"),m(f,"class","task__color-btn svelte-132vqf1"),m(_,"class","task__color-item svelte-132vqf1"),m(i,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-132vqf1"),m(i,"style",h=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),m(e,"class",D="task "+o[0]+" svelte-132vqf1"),Q(e,"isDisabled",o[3])},m(I,y){w(I,e,y),p(e,t),p(t,s),p(s,l),p(e,r),p(r,n),p(n,a),p(e,i),p(i,c),p(c,d),p(i,u),p(u,T),p(i,q),p(q,E),p(i,_),p(_,f),O||(N=[V(t,"click",o[4]),V(n,"click",ee(o[5]))],O=!0)},p(I,[y]){y&2&&te(l,I[1]),y&4&&h!==(h=`background-color: ${I[2]!=null?I[2]:"#0029FF"}`)&&m(i,"style",h),y&1&&D!==(D="task "+I[0]+" svelte-132vqf1")&&m(e,"class",D),y&9&&Q(e,"isDisabled",I[3])},i:A,o:A,d(I){I&&v(e),O=!1,le(N)}}}function Se(o,e,t){let s;se(o,K,u=>t(7,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:i=null}=e;const c=()=>{let u=s.map(T=>(i===T.id&&(T.done=!T.done),T));K.set(u)},d=()=>{let u=s.filter(T=>T.id!=i);K.set(u),console.log("del",i)};return o.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,i=u.id)},[l,r,n,a,c,d,i]}class me extends S{constructor(e){super();B(this,e,Se,Ce,F,{class:0,text:1,color:2,disabled:3,id:6})}}function ke(o,e,t){const s=o.slice();return s[4]=e[t],s}function ge(o,e,t){const s=o.slice();return s[4]=e[t],s}function be(o,e){let t,s,l,r,n,a=A,i;return s=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=k("li"),P(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);M(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){w(c,t,d),R(s,t,null),i=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=ie(t,n,de,{duration:300})},i(c){i||(U(s.$$.fragment,c),oe(()=>{r&&r.end(1),l=re(t,e[3],{key:e[4].id}),l.start()}),i=!0)},o(c){L(s.$$.fragment,c),l&&l.invalidate(),r=ce(t,e[2],{key:e[4].id}),i=!1},d(c){c&&v(t),j(s),c&&r&&r.end()}}}function pe(o,e){let t,s,l,r,n,a=A,i;return s=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=k("li"),P(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);M(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){w(c,t,d),R(s,t,null),i=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=ie(t,n,de,{duration:300})},i(c){i||(U(s.$$.fragment,c),oe(()=>{r&&r.end(1),l=re(t,e[3],{key:e[4].id}),l.start()}),i=!0)},o(c){L(s.$$.fragment,c),l&&l.invalidate(),r=ce(t,e[2],{key:e[4].id}),i=!1},d(c){c&&v(t),j(s),c&&r&&r.end()}}}function Be(o){let e,t,s,l=[],r=new Map,n,a=[],i=new Map,c,d,u=o[1].filter(Ee);const T=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=ge(o,u,_),h=T(f);r.set(h,l[_]=be(h,f))}let q=o[1].filter(Te);const E=_=>_[4].id;for(let _=0;_<q.length;_+=1){let f=ke(o,q,_),h=E(f);i.set(h,a[_]=pe(h,f))}return{c(){e=k("section"),t=k("div"),s=k("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=k("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=g(_,"SECTION",{class:!0});var f=b(e);t=g(f,"DIV",{class:!0});var h=b(t);s=g(h,"UL",{class:!0});var D=b(s);for(let N=0;N<l.length;N+=1)l[N].l(D);D.forEach(v),n=g(h,"UL",{class:!0});var O=b(n);for(let N=0;N<a.length;N+=1)a[N].l(O);O.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(n,"class","task-section__col"),m(t,"class","container task-section__grid svelte-1rib3cm"),m(e,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(_,f){w(_,e,f),p(e,t),p(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);p(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(Ee),ue();for(let h=0;h<l.length;h+=1)l[h].r();l=fe(l,f,T,1,_,u,r,s,he,be,null,ge);for(let h=0;h<l.length;h+=1)l[h].a();_e()}if(f&2){q=_[1].filter(Te),ue();for(let h=0;h<a.length;h+=1)a[h].r();a=fe(a,f,E,1,_,q,i,n,he,pe,null,ke);for(let h=0;h<a.length;h+=1)a[h].a();_e()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&m(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)U(l[f]);for(let f=0;f<q.length;f+=1)U(a[f]);d=!0}},o(_){for(let f=0;f<l.length;f+=1)L(l[f]);for(let f=0;f<a.length;f+=1)L(a[f]);d=!1},d(_){_&&v(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const Ee=o=>!o.done,Te=o=>o.done;function Fe(o,e,t){let s;se(o,K,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=Ne({duration:a=>Math.sqrt(a*200),fallback(a,i){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:we,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return o.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class Ve extends S{constructor(e){super();B(this,e,Fe,Be,F,{class:0})}}function qe(o){let e,t,s,l=o[2].text&&Ie(o);return{c(){e=k("button"),l&&l.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(v),this.h()},h(){m(e,"class","btn svelte-12pihab")},m(r,n){w(r,e,n),l&&l.m(e,null),t||(s=V(e,"click",ee(o[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=Ie(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&v(e),l&&l.d(),t=!1,s()}}}function Ie(o){let e=o[2].text+"",t;return{c(){t=$(e)},l(s){t=x(s,e)},m(s,l){w(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&te(t,e)},d(s){s&&v(t)}}}function Pe(o){let e,t,s,l,r,n=o[2]&&qe(o);return{c(){e=k("div"),t=k("input"),n&&n.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var i=b(e);t=g(i,"INPUT",{placeholder:!0,class:!0}),n&&n.l(i),i.forEach(v),this.h()},h(){m(t,"placeholder",o[1]),m(t,"class","svelte-12pihab"),m(e,"class",s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),Q(e,"isError",o[5])},m(a,i){w(a,e,i),p(e,t),ve(t,o[4]),n&&n.m(e,null),o[9](e),l||(r=[V(t,"input",o[8]),V(t,"input",o[7])],l=!0)},p(a,[i]){i&2&&m(t,"placeholder",a[1]),i&16&&t.value!==a[4]&&ve(t,a[4]),a[2]?n?n.p(a,i):(n=qe(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),i&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&m(e,"class",s),i&37&&Q(e,"isError",a[5])},i:A,o:A,d(a){a&&v(e),n&&n.d(),o[9](null),l=!1,le(r)}}}function Me(o,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,i=!1;const c=De(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,i=!0)},u=()=>{t(5,i=!1)};function T(){a=this.value,t(4,a)}function q(E){Ue[E?"unshift":"push"](()=>{n=E,t(3,n)})}return o.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,r=E.btn)},[s,l,r,n,a,i,d,u,T,q]}class Re extends S{constructor(e){super();B(this,e,Me,Pe,F,{class:0,placeholder:1,btn:2})}}function je(o){let e,t,s,l;return t=new Re({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=k("div"),P(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);M(t.$$.fragment,n),n.forEach(v),this.h()},h(){m(e,"class",s="add-todo "+o[0]+" svelte-hols8d")},m(r,n){w(r,e,n),R(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&m(e,"class",s)},i(r){l||(U(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&v(e),j(t)}}}function Ke(o,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};K.update(a=>a=[n,...a])};return o.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Qe extends S{constructor(e){super();B(this,e,Ke,je,F,{class:0})}}function We(o){let e,t,s,l,r,n,a;return l=new Qe({}),n=new Ve({props:{class:"mt-50"}}),{c(){e=Le(),t=k("section"),s=k("div"),P(l.$$.fragment),P(n.$$.fragment),this.h()},l(i){Oe('[data-svelte="svelte-1ms75pp"]',document.head).forEach(v),e=Ae(i),t=g(i,"SECTION",{class:!0});var d=b(t);s=g(d,"DIV",{class:!0});var u=b(s);M(l.$$.fragment,u),u.forEach(v),d.forEach(v),M(n.$$.fragment,i),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",m(s,"class","container"),m(t,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(i,c){w(i,e,c),w(i,t,c),p(t,s),R(l,s,null),R(n,i,c),a=!0},p(i,[c]){(!a||c&1&&r!==(r=""+(i[0]+" mt-50 svelte-hols8d")))&&m(t,"class",r)},i(i){a||(U(l.$$.fragment,i),U(n.$$.fragment,i),a=!0)},o(i){L(l.$$.fragment,i),L(n.$$.fragment,i),a=!1},d(i){i&&v(e),i&&v(t),j(l),j(n,i)}}}function Xe(o,e,t){let{class:s=""}=e;return o.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Ze extends S{constructor(e){super();B(this,e,Xe,We,F,{class:0})}}export{Ze as default};