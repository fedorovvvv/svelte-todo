import{C as ve,S,i as F,s as U,e as g,t as K,c as b,a as k,g as Q,d as m,b as v,K as M,f as I,D as w,L as V,M as W,h as X,E as z,N as Y,O as Z,v as L,w as O,x as B,P as G,Q as H,R as J,p as N,T as $,U as x,n as D,V as ee,A as P,m as te,W as se,o as le,X as ge,Y as ae,Z as ne,_ as be,$ as ie,a0 as ke,a1 as pe,j as Ee,a2 as we,l as Te}from"../chunks/vendor-174655a0.js";const q=ve([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function ye(i){let e,t,l,s,r,n,a,o,u,d,_,p,T,E;return{c(){e=g("div"),t=g("div"),l=g("p"),s=K(i[1]),r=g("div"),n=g("button"),a=g("span"),o=g("ul"),u=g("li"),d=g("button"),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=k(e);t=b(c,"DIV",{class:!0});var h=k(t);l=b(h,"P",{class:!0});var A=k(l);s=Q(A,i[1]),A.forEach(m),h.forEach(m),r=b(c,"DIV",{class:!0});var C=k(r);n=b(C,"BUTTON",{class:!0});var y=k(n);a=b(y,"SPAN",{class:!0}),k(a).forEach(m),y.forEach(m),C.forEach(m),o=b(c,"UL",{class:!0,style:!0});var R=k(o);u=b(R,"LI",{class:!0});var j=k(u);d=b(j,"BUTTON",{class:!0}),k(d).forEach(m),j.forEach(m),R.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","svelte-gw9sbz"),v(t,"class","task__main svelte-gw9sbz"),v(a,"class","svg-image-del svelte-gw9sbz"),v(n,"class","task__menu-btn task__menu-btn_del svelte-gw9sbz"),v(r,"class","task__circle task__menu svelte-gw9sbz"),v(d,"class","task__color-btn svelte-gw9sbz"),v(u,"class","task__color-item svelte-gw9sbz"),v(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-gw9sbz"),v(o,"style",_=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",p="task "+i[0]+" svelte-gw9sbz"),M(e,"isDisabled",i[3])},m(f,c){I(f,e,c),w(e,t),w(t,l),w(l,s),w(e,r),w(r,n),w(n,a),w(e,o),w(o,u),w(u,d),T||(E=[V(t,"click",i[4]),V(n,"click",W(i[5]))],T=!0)},p(f,[c]){c&2&&X(s,f[1]),c&4&&_!==(_=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`)&&v(o,"style",_),c&1&&p!==(p="task "+f[0]+" svelte-gw9sbz")&&v(e,"class",p),c&9&&M(e,"isDisabled",f[3])},i:z,o:z,d(f){f&&m(e),T=!1,Y(E)}}}function Ie(i,e,t){let l;Z(i,q,_=>t(7,l=_));let{class:s=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const u=()=>{let _=l.map(p=>(o===p.id&&(p.done=!p.done),p));q.set(_)},d=()=>{let _=l.filter(p=>p.id!=o);q.set(_),console.log("del",o)};return i.$$set=_=>{"class"in _&&t(0,s=_.class),"text"in _&&t(1,r=_.text),"color"in _&&t(2,n=_.color),"disabled"in _&&t(3,a=_.disabled),"id"in _&&t(6,o=_.id)},[s,r,n,a,u,d,o]}class re extends S{constructor(e){super();F(this,e,Ie,ye,U,{class:0,text:1,color:2,disabled:3,id:6})}}function oe(i,e,t){const l=i.slice();return l[4]=e[t],l}function ce(i,e,t){const l=i.slice();return l[4]=e[t],l}function ue(i,e){let t,l,s,r,n,a=z,o;return l=new re({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=g("li"),L(l.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var d=k(t);O(l.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){I(u,t,d),B(l,t,null),o=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),l.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){o||(N(l.$$.fragment,u),$(()=>{r&&r.end(1),s=x(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(u){D(l.$$.fragment,u),s&&s.invalidate(),r=ee(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),P(l),u&&r&&r.end()}}}function fe(i,e){let t,l,s,r,n,a=z,o;return l=new re({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=g("li"),L(l.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var d=k(t);O(l.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){I(u,t,d),B(l,t,null),o=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),l.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){o||(N(l.$$.fragment,u),$(()=>{r&&r.end(1),s=x(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(u){D(l.$$.fragment,u),s&&s.invalidate(),r=ee(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),P(l),u&&r&&r.end()}}}function Ne(i){let e,t,l,s=[],r=new Map,n,a=[],o=new Map,u,d,_=i[1].filter(_e);const p=f=>f[4].id;for(let f=0;f<_.length;f+=1){let c=ce(i,_,f),h=p(c);r.set(h,s[f]=ue(h,c))}let T=i[1].filter(de);const E=f=>f[4].id;for(let f=0;f<T.length;f+=1){let c=oe(i,T,f),h=E(c);o.set(h,a[f]=fe(h,c))}return{c(){e=g("section"),t=g("div"),l=g("ul");for(let f=0;f<s.length;f+=1)s[f].c();n=g("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=b(f,"SECTION",{class:!0});var c=k(e);t=b(c,"DIV",{class:!0});var h=k(t);l=b(h,"UL",{class:!0});var A=k(l);for(let y=0;y<s.length;y+=1)s[y].l(A);A.forEach(m),n=b(h,"UL",{class:!0});var C=k(n);for(let y=0;y<a.length;y+=1)a[y].l(C);C.forEach(m),h.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(f,c){I(f,e,c),w(e,t),w(t,l);for(let h=0;h<s.length;h+=1)s[h].m(l,null);w(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(f,[c]){if(c&2){_=f[1].filter(_e),te();for(let h=0;h<s.length;h+=1)s[h].r();s=se(s,c,p,1,f,_,r,l,ne,ue,null,ce);for(let h=0;h<s.length;h+=1)s[h].a();le()}if(c&2){T=f[1].filter(de),te();for(let h=0;h<a.length;h+=1)a[h].r();a=se(a,c,E,1,f,T,o,n,ne,fe,null,oe);for(let h=0;h<a.length;h+=1)a[h].a();le()}(!d||c&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(f){if(!d){for(let c=0;c<_.length;c+=1)N(s[c]);for(let c=0;c<T.length;c+=1)N(a[c]);d=!0}},o(f){for(let c=0;c<s.length;c+=1)D(s[c]);for(let c=0;c<a.length;c+=1)D(a[c]);d=!1},d(f){f&&m(e);for(let c=0;c<s.length;c+=1)s[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const _e=i=>!i.done,de=i=>i.done;function De(i,e,t){let l;Z(i,q,a=>t(1,l=a));let{class:s=""}=e;const[r,n]=ge({duration:a=>Math.sqrt(a*200),fallback(a,o){const u=getComputedStyle(a),d=u.transform==="none"?"":u.transform;return{duration:600,easing:be,css:_=>`
					transform: ${d} scale(${_});
					opacity: ${_}
				`}}});return i.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,n]}class ze extends S{constructor(e){super();F(this,e,De,Ne,U,{class:0})}}function he(i){let e,t,l,s=i[2].text&&me(i);return{c(){e=g("button"),s&&s.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var n=k(e);s&&s.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){I(r,e,n),s&&s.m(e,null),t||(l=V(e,"click",W(i[6])),t=!0)},p(r,n){r[2].text?s?s.p(r,n):(s=me(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&m(e),s&&s.d(),t=!1,l()}}}function me(i){let e=i[2].text+"",t;return{c(){t=K(e)},l(l){t=Q(l,e)},m(l,s){I(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&X(t,e)},d(l){l&&m(t)}}}function Ae(i){let e,t,l,s,r,n=i[2]&&he(i);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=k(e);t=b(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),M(e,"isError",i[5])},m(a,o){I(a,e,o),w(e,t),ie(t,i[4]),n&&n.m(e,null),i[9](e),s||(r=[V(t,"input",i[8]),V(t,"input",i[7])],s=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ie(t,a[4]),a[2]?n?n.p(a,o):(n=he(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),o&37&&M(e,"isError",a[5])},i:z,o:z,d(a){a&&m(e),n&&n.d(),i[9](null),s=!1,Y(r)}}}function Ce(i,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const u=ke(),d=()=>{a?(u("submit",{value:a}),t(4,a="")):t(5,o=!0)},_=()=>{t(5,o=!1)};function p(){a=this.value,t(4,a)}function T(E){pe[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,l=E.class),"placeholder"in E&&t(1,s=E.placeholder),"btn"in E&&t(2,r=E.btn)},[l,s,r,n,a,o,d,_,p,T]}class Se extends S{constructor(e){super();F(this,e,Ce,Ae,U,{class:0,placeholder:1,btn:2})}}function Fe(i){let e,t,l,s;return t=new Se({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=g("div"),L(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var n=k(e);O(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",l="add-todo "+i[0]+" svelte-hols8d")},m(r,n){I(r,e,n),B(t,e,null),s=!0},p(r,[n]){(!s||n&1&&l!==(l="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",l)},i(r){s||(N(t.$$.fragment,r),s=!0)},o(r){D(t.$$.fragment,r),s=!1},d(r){r&&m(e),P(t)}}}function Ue(i,e,t){let{class:l=""}=e;const s=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};q.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Ve extends S{constructor(e){super();F(this,e,Ue,Fe,U,{class:0})}}function Le(i){let e,t,l,s,r,n,a;return s=new Ve({}),n=new ze({props:{class:"mt-50"}}),{c(){e=Ee(),t=g("section"),l=g("div"),L(s.$$.fragment),L(n.$$.fragment),this.h()},l(o){we('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Te(o),t=b(o,"SECTION",{class:!0});var d=k(t);l=b(d,"DIV",{class:!0});var _=k(l);O(s.$$.fragment,_),_.forEach(m),d.forEach(m),O(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(l,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,u){I(o,e,u),I(o,t,u),w(t,l),B(s,l,null),B(n,o,u),a=!0},p(o,[u]){(!a||u&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(N(s.$$.fragment,o),N(n.$$.fragment,o),a=!0)},o(o){D(s.$$.fragment,o),D(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),P(s),P(n,o)}}}function Oe(i,e,t){let{class:l=""}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Pe extends S{constructor(e){super();F(this,e,Oe,Le,U,{class:0})}}export{Pe as default};