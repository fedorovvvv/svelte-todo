import{C as _e,S as V,i as A,s as F,e as p,t as j,c as b,a as E,g as K,d as m,b as v,K as q,f as I,D as y,L as B,h as Q,E as C,M as W,v as O,w as U,x as L,N as X,O as Y,P as Z,p as w,Q as z,R as G,n as N,T as H,A as P,m as J,U as $,o as x,V as de,W as ee,X as te,Y as he,Z as me,_ as se,$ as ve,a0 as ge,a1 as ke,j as pe,a2 as be,l as Ee}from"../chunks/vendor-697af2bf.js";const M=_e([{id:1,text:"test task 1",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:3,text:"test task 3",done:!0,color:"#FF9900"}]);function ye(i){let e,t,l,s,r,n,a,o,u,c,h,T;return{c(){e=p("div"),t=p("div"),l=p("p"),s=j(i[1]),r=p("div"),n=p("button"),a=p("span"),o=p("div"),this.h()},l(k){e=b(k,"DIV",{class:!0});var g=E(e);t=b(g,"DIV",{class:!0});var _=E(t);l=b(_,"P",{class:!0});var f=E(l);s=K(f,i[1]),f.forEach(m),_.forEach(m),r=b(g,"DIV",{class:!0});var d=E(r);n=b(d,"BUTTON",{class:!0});var S=E(n);a=b(S,"SPAN",{class:!0}),E(a).forEach(m),S.forEach(m),d.forEach(m),o=b(g,"DIV",{class:!0,style:!0}),E(o).forEach(m),g.forEach(m),this.h()},h(){v(l,"class","svelte-axxs57"),v(t,"class","task__main svelte-axxs57"),v(a,"class","svg-image-del svelte-axxs57"),v(n,"class","task__menu-btn svelte-axxs57"),v(r,"class","task__circle task__menu svelte-axxs57"),v(o,"class","task__circle task__circle_visible task__circle_r-t svelte-axxs57"),v(o,"style",u=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",c="task "+i[0]+" svelte-axxs57"),q(e,"isDisabled",i[3])},m(k,g){I(k,e,g),y(e,t),y(t,l),y(l,s),y(e,r),y(r,n),y(n,a),y(e,o),h||(T=B(t,"click",i[4]),h=!0)},p(k,[g]){g&2&&Q(s,k[1]),g&4&&u!==(u=`background-color: ${k[2]!=null?k[2]:"#0029FF"}`)&&v(o,"style",u),g&1&&c!==(c="task "+k[0]+" svelte-axxs57")&&v(e,"class",c),g&9&&q(e,"isDisabled",k[3])},i:C,o:C,d(k){k&&m(e),h=!1,T()}}}function Ie(i,e,t){let l;W(i,M,c=>t(6,l=c));let{class:s=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const u=()=>{let c=l.map(h=>(o===h.id&&(h.done=!h.done),h));M.set(c)};return i.$$set=c=>{"class"in c&&t(0,s=c.class),"text"in c&&t(1,r=c.text),"color"in c&&t(2,n=c.color),"disabled"in c&&t(3,a=c.disabled),"id"in c&&t(5,o=c.id)},[s,r,n,a,u,o]}class le extends V{constructor(e){super();A(this,e,Ie,ye,F,{class:0,text:1,color:2,disabled:3,id:5})}}function ae(i,e,t){const l=i.slice();return l[4]=e[t],l}function ne(i,e,t){const l=i.slice();return l[4]=e[t],l}function ie(i,e){let t,l,s,r,n,a=C,o;return l=new le({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=p("li"),O(l.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var c=E(t);U(l.$$.fragment,c),c.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,c){I(u,t,c),L(l,t,null),o=!0},p(u,c){e=u;const h={};c&2&&(h.text=e[4].text),c&2&&(h.color=e[4].color?e[4].color:null),c&2&&(h.id=e[4].id),l.$set(h)},r(){n=t.getBoundingClientRect()},f(){X(t),a(),Y(t,n)},a(){a(),a=Z(t,n,ee,{duration:300})},i(u){o||(w(l.$$.fragment,u),z(()=>{r&&r.end(1),s=G(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(u){N(l.$$.fragment,u),s&&s.invalidate(),r=H(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),P(l),u&&r&&r.end()}}}function re(i,e){let t,l,s,r,n,a=C,o;return l=new le({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=p("li"),O(l.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var c=E(t);U(l.$$.fragment,c),c.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,c){I(u,t,c),L(l,t,null),o=!0},p(u,c){e=u;const h={};c&2&&(h.text=e[4].text),c&2&&(h.color=e[4].color?e[4].color:null),c&2&&(h.id=e[4].id),l.$set(h)},r(){n=t.getBoundingClientRect()},f(){X(t),a(),Y(t,n)},a(){a(),a=Z(t,n,ee,{duration:300})},i(u){o||(w(l.$$.fragment,u),z(()=>{r&&r.end(1),s=G(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(u){N(l.$$.fragment,u),s&&s.invalidate(),r=H(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),P(l),u&&r&&r.end()}}}function Te(i){let e,t,l,s=[],r=new Map,n,a=[],o=new Map,u,c,h=i[1].filter(oe);const T=_=>_[4].id;for(let _=0;_<h.length;_+=1){let f=ne(i,h,_),d=T(f);r.set(d,s[_]=ie(d,f))}let k=i[1].filter(ce);const g=_=>_[4].id;for(let _=0;_<k.length;_+=1){let f=ae(i,k,_),d=g(f);o.set(d,a[_]=re(d,f))}return{c(){e=p("section"),t=p("div"),l=p("ul");for(let _=0;_<s.length;_+=1)s[_].c();n=p("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=b(_,"SECTION",{class:!0});var f=E(e);t=b(f,"DIV",{class:!0});var d=E(t);l=b(d,"UL",{class:!0});var S=E(l);for(let D=0;D<s.length;D+=1)s[D].l(S);S.forEach(m),n=b(d,"UL",{class:!0});var R=E(n);for(let D=0;D<a.length;D+=1)a[D].l(R);R.forEach(m),d.forEach(m),f.forEach(m),this.h()},h(){v(l,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){I(_,e,f),y(e,t),y(t,l);for(let d=0;d<s.length;d+=1)s[d].m(l,null);y(t,n);for(let d=0;d<a.length;d+=1)a[d].m(n,null);c=!0},p(_,[f]){if(f&2){h=_[1].filter(oe),J();for(let d=0;d<s.length;d+=1)s[d].r();s=$(s,f,T,1,_,h,r,l,te,ie,null,ne);for(let d=0;d<s.length;d+=1)s[d].a();x()}if(f&2){k=_[1].filter(ce),J();for(let d=0;d<a.length;d+=1)a[d].r();a=$(a,f,g,1,_,k,o,n,te,re,null,ae);for(let d=0;d<a.length;d+=1)a[d].a();x()}(!c||f&1&&u!==(u="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(_){if(!c){for(let f=0;f<h.length;f+=1)w(s[f]);for(let f=0;f<k.length;f+=1)w(a[f]);c=!0}},o(_){for(let f=0;f<s.length;f+=1)N(s[f]);for(let f=0;f<a.length;f+=1)N(a[f]);c=!1},d(_){_&&m(e);for(let f=0;f<s.length;f+=1)s[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const oe=i=>!i.done,ce=i=>i.done;function De(i,e,t){let l;W(i,M,a=>t(1,l=a));let{class:s=""}=e;const[r,n]=de({duration:a=>Math.sqrt(a*200),fallback(a,o){const u=getComputedStyle(a),c=u.transform==="none"?"":u.transform;return{duration:600,easing:he,css:h=>`
					transform: ${c} scale(${h});
					opacity: ${h}
				`}}});return i.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,n]}class we extends V{constructor(e){super();A(this,e,De,Te,F,{class:0})}}function ue(i){let e,t,l,s=i[2].text&&fe(i);return{c(){e=p("button"),s&&s.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var n=E(e);s&&s.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){I(r,e,n),s&&s.m(e,null),t||(l=B(e,"click",me(i[6])),t=!0)},p(r,n){r[2].text?s?s.p(r,n):(s=fe(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&m(e),s&&s.d(),t=!1,l()}}}function fe(i){let e=i[2].text+"",t;return{c(){t=j(e)},l(l){t=K(l,e)},m(l,s){I(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&Q(t,e)},d(l){l&&m(t)}}}function Ne(i){let e,t,l,s,r,n=i[2]&&ue(i);return{c(){e=p("div"),t=p("input"),n&&n.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=E(e);t=b(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),q(e,"isError",i[5])},m(a,o){I(a,e,o),y(e,t),se(t,i[4]),n&&n.m(e,null),i[9](e),s||(r=[B(t,"input",i[8]),B(t,"input",i[7])],s=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&se(t,a[4]),a[2]?n?n.p(a,o):(n=ue(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),o&37&&q(e,"isError",a[5])},i:C,o:C,d(a){a&&m(e),n&&n.d(),i[9](null),s=!1,ve(r)}}}function Ce(i,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const u=ge(),c=()=>{a?(u("submit",{value:a}),t(4,a="")):t(5,o=!0)},h=()=>{t(5,o=!1)};function T(){a=this.value,t(4,a)}function k(g){ke[g?"unshift":"push"](()=>{n=g,t(3,n)})}return i.$$set=g=>{"class"in g&&t(0,l=g.class),"placeholder"in g&&t(1,s=g.placeholder),"btn"in g&&t(2,r=g.btn)},[l,s,r,n,a,o,c,h,T,k]}class Se extends V{constructor(e){super();A(this,e,Ce,Ne,F,{class:0,placeholder:1,btn:2})}}function Ve(i){let e,t,l,s;return t=new Se({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=p("div"),O(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var n=E(e);U(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",l="add-todo "+i[0]+" svelte-hols8d")},m(r,n){I(r,e,n),L(t,e,null),s=!0},p(r,[n]){(!s||n&1&&l!==(l="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",l)},i(r){s||(w(t.$$.fragment,r),s=!0)},o(r){N(t.$$.fragment,r),s=!1},d(r){r&&m(e),P(t)}}}function Ae(i,e,t){let{class:l=""}=e;const s=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Fe extends V{constructor(e){super();A(this,e,Ae,Ve,F,{class:0})}}function Oe(i){let e,t,l,s,r,n,a;return s=new Fe({}),n=new we({props:{class:"mt-50"}}),{c(){e=pe(),t=p("section"),l=p("div"),O(s.$$.fragment),O(n.$$.fragment),this.h()},l(o){be('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Ee(o),t=b(o,"SECTION",{class:!0});var c=E(t);l=b(c,"DIV",{class:!0});var h=E(l);U(s.$$.fragment,h),h.forEach(m),c.forEach(m),U(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(l,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,u){I(o,e,u),I(o,t,u),y(t,l),L(s,l,null),L(n,o,u),a=!0},p(o,[u]){(!a||u&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(w(s.$$.fragment,o),w(n.$$.fragment,o),a=!0)},o(o){N(s.$$.fragment,o),N(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),P(s),P(n,o)}}}function Ue(i,e,t){let{class:l=""}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Pe extends V{constructor(e){super();A(this,e,Ue,Oe,F,{class:0})}}export{Pe as default};