import{C as we,S as L,i as O,s as S,e as k,t as z,c as g,a as b,g as G,d as v,b as m,K as j,f as N,D as w,L as F,M as H,h as J,E as A,N as $,O as ee,v as V,w as B,x as P,P as te,Q as le,R as se,p as D,T as ae,U as ne,n as U,V as ie,A as q,m as oe,W as re,o as ce,X as Te,Y as ue,Z as fe,_ as ye,$ as _e,a0 as Ie,a1 as Ne,j as De,a2 as Ue,l as Ae}from"../chunks/vendor-174655a0.js";const M=we([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Ce(i){let e,t,s,l,r,n,a,o,c,d,u,T,y,E,_,f,h,C;return{c(){e=k("div"),t=k("div"),s=k("p"),l=z(i[1]),r=k("div"),n=k("button"),a=k("span"),o=k("ul"),c=k("li"),d=k("button"),u=k("li"),T=k("button"),y=k("li"),E=k("button"),this.h()},l(I){e=g(I,"DIV",{class:!0});var p=b(e);t=g(p,"DIV",{class:!0});var x=b(t);s=g(x,"P",{class:!0});var K=b(s);l=G(K,i[1]),K.forEach(v),x.forEach(v),r=g(p,"DIV",{class:!0});var Q=b(r);n=g(Q,"BUTTON",{class:!0});var W=b(n);a=g(W,"SPAN",{class:!0}),b(a).forEach(v),W.forEach(v),Q.forEach(v),o=g(p,"UL",{class:!0,style:!0});var R=b(o);c=g(R,"LI",{class:!0});var X=b(c);d=g(X,"BUTTON",{class:!0}),b(d).forEach(v),X.forEach(v),u=g(R,"LI",{class:!0});var Y=b(u);T=g(Y,"BUTTON",{class:!0}),b(T).forEach(v),Y.forEach(v),y=g(R,"LI",{class:!0});var Z=b(y);E=g(Z,"BUTTON",{class:!0}),b(E).forEach(v),Z.forEach(v),R.forEach(v),p.forEach(v),this.h()},h(){m(s,"class","svelte-xaxwev"),m(t,"class","task__main svelte-xaxwev"),m(a,"class","svg-image-del svelte-xaxwev"),m(n,"class","task__menu-btn task__menu-btn_del svelte-xaxwev"),m(r,"class","task__circle task__menu svelte-xaxwev"),m(d,"class","task__color-btn svelte-xaxwev"),m(c,"class","task__color-item svelte-xaxwev"),m(T,"class","task__color-btn svelte-xaxwev"),m(u,"class","task__color-item svelte-xaxwev"),m(E,"class","task__color-btn svelte-xaxwev"),m(y,"class","task__color-item svelte-xaxwev"),m(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-xaxwev"),m(o,"style",_=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),m(e,"class",f="task "+i[0]+" svelte-xaxwev"),j(e,"isDisabled",i[3])},m(I,p){N(I,e,p),w(e,t),w(t,s),w(s,l),w(e,r),w(r,n),w(n,a),w(e,o),w(o,c),w(c,d),w(o,u),w(u,T),w(o,y),w(y,E),h||(C=[F(t,"click",i[4]),F(n,"click",H(i[5]))],h=!0)},p(I,[p]){p&2&&J(l,I[1]),p&4&&_!==(_=`background-color: ${I[2]!=null?I[2]:"#0029FF"}`)&&m(o,"style",_),p&1&&f!==(f="task "+I[0]+" svelte-xaxwev")&&m(e,"class",f),p&9&&j(e,"isDisabled",I[3])},i:A,o:A,d(I){I&&v(e),h=!1,$(C)}}}function Le(i,e,t){let s;ee(i,M,u=>t(7,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=s.map(T=>(o===T.id&&(T.done=!T.done),T));M.set(u)},d=()=>{let u=s.filter(T=>T.id!=o);M.set(u),console.log("del",o)};return i.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,o=u.id)},[l,r,n,a,c,d,o]}class de extends L{constructor(e){super();O(this,e,Le,Ce,S,{class:0,text:1,color:2,disabled:3,id:6})}}function he(i,e,t){const s=i.slice();return s[4]=e[t],s}function ve(i,e,t){const s=i.slice();return s[4]=e[t],s}function me(i,e){let t,s,l,r,n,a=A,o;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=k("li"),V(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);B(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){N(c,t,d),P(s,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){te(t),a(),le(t,n)},a(){a(),a=se(t,n,ue,{duration:300})},i(c){o||(D(s.$$.fragment,c),ae(()=>{r&&r.end(1),l=ne(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){U(s.$$.fragment,c),l&&l.invalidate(),r=ie(t,e[2],{key:e[4].id}),o=!1},d(c){c&&v(t),q(s),c&&r&&r.end()}}}function ke(i,e){let t,s,l,r,n,a=A,o;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=k("li"),V(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);B(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){N(c,t,d),P(s,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){te(t),a(),le(t,n)},a(){a(),a=se(t,n,ue,{duration:300})},i(c){o||(D(s.$$.fragment,c),ae(()=>{r&&r.end(1),l=ne(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){U(s.$$.fragment,c),l&&l.invalidate(),r=ie(t,e[2],{key:e[4].id}),o=!1},d(c){c&&v(t),q(s),c&&r&&r.end()}}}function Oe(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,c,d,u=i[1].filter(ge);const T=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=ve(i,u,_),h=T(f);r.set(h,l[_]=me(h,f))}let y=i[1].filter(be);const E=_=>_[4].id;for(let _=0;_<y.length;_+=1){let f=he(i,y,_),h=E(f);o.set(h,a[_]=ke(h,f))}return{c(){e=k("section"),t=k("div"),s=k("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=k("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=g(_,"SECTION",{class:!0});var f=b(e);t=g(f,"DIV",{class:!0});var h=b(t);s=g(h,"UL",{class:!0});var C=b(s);for(let p=0;p<l.length;p+=1)l[p].l(C);C.forEach(v),n=g(h,"UL",{class:!0});var I=b(n);for(let p=0;p<a.length;p+=1)a[p].l(I);I.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(n,"class","task-section__col"),m(t,"class","container task-section__grid svelte-1rib3cm"),m(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){N(_,e,f),w(e,t),w(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);w(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(ge),oe();for(let h=0;h<l.length;h+=1)l[h].r();l=re(l,f,T,1,_,u,r,s,fe,me,null,ve);for(let h=0;h<l.length;h+=1)l[h].a();ce()}if(f&2){y=_[1].filter(be),oe();for(let h=0;h<a.length;h+=1)a[h].r();a=re(a,f,E,1,_,y,o,n,fe,ke,null,he);for(let h=0;h<a.length;h+=1)a[h].a();ce()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&m(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)D(l[f]);for(let f=0;f<y.length;f+=1)D(a[f]);d=!0}},o(_){for(let f=0;f<l.length;f+=1)U(l[f]);for(let f=0;f<a.length;f+=1)U(a[f]);d=!1},d(_){_&&v(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const ge=i=>!i.done,be=i=>i.done;function Se(i,e,t){let s;ee(i,M,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=Te({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:ye,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class Fe extends L{constructor(e){super();O(this,e,Se,Oe,S,{class:0})}}function pe(i){let e,t,s,l=i[2].text&&Ee(i);return{c(){e=k("button"),l&&l.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(v),this.h()},h(){m(e,"class","btn svelte-12pihab")},m(r,n){N(r,e,n),l&&l.m(e,null),t||(s=F(e,"click",H(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=Ee(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&v(e),l&&l.d(),t=!1,s()}}}function Ee(i){let e=i[2].text+"",t;return{c(){t=z(e)},l(s){t=G(s,e)},m(s,l){N(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&J(t,e)},d(s){s&&v(t)}}}function Ve(i){let e,t,s,l,r,n=i[2]&&pe(i);return{c(){e=k("div"),t=k("input"),n&&n.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var o=b(e);t=g(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(v),this.h()},h(){m(t,"placeholder",i[1]),m(t,"class","svelte-12pihab"),m(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),j(e,"isError",i[5])},m(a,o){N(a,e,o),w(e,t),_e(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[F(t,"input",i[8]),F(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&m(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&_e(t,a[4]),a[2]?n?n.p(a,o):(n=pe(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&m(e,"class",s),o&37&&j(e,"isError",a[5])},i:A,o:A,d(a){a&&v(e),n&&n.d(),i[9](null),l=!1,$(r)}}}function Be(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=Ie(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},u=()=>{t(5,o=!1)};function T(){a=this.value,t(4,a)}function y(E){Ne[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,r=E.btn)},[s,l,r,n,a,o,d,u,T,y]}class Pe extends L{constructor(e){super();O(this,e,Be,Ve,S,{class:0,placeholder:1,btn:2})}}function qe(i){let e,t,s,l;return t=new Pe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=k("div"),V(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);B(t.$$.fragment,n),n.forEach(v),this.h()},h(){m(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,n){N(r,e,n),P(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&m(e,"class",s)},i(r){l||(D(t.$$.fragment,r),l=!0)},o(r){U(t.$$.fragment,r),l=!1},d(r){r&&v(e),q(t)}}}function Me(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Re extends L{constructor(e){super();O(this,e,Me,qe,S,{class:0})}}function je(i){let e,t,s,l,r,n,a;return l=new Re({}),n=new Fe({props:{class:"mt-50"}}),{c(){e=De(),t=k("section"),s=k("div"),V(l.$$.fragment),V(n.$$.fragment),this.h()},l(o){Ue('[data-svelte="svelte-1ms75pp"]',document.head).forEach(v),e=Ae(o),t=g(o,"SECTION",{class:!0});var d=b(t);s=g(d,"DIV",{class:!0});var u=b(s);B(l.$$.fragment,u),u.forEach(v),d.forEach(v),B(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",m(s,"class","container"),m(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,c){N(o,e,c),N(o,t,c),w(t,s),P(l,s,null),P(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&m(t,"class",r)},i(o){a||(D(l.$$.fragment,o),D(n.$$.fragment,o),a=!0)},o(o){U(l.$$.fragment,o),U(n.$$.fragment,o),a=!1},d(o){o&&v(e),o&&v(t),q(l),q(n,o)}}}function xe(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Qe extends L{constructor(e){super();O(this,e,xe,je,S,{class:0})}}export{Qe as default};