import{C as _e,S as V,i as F,s as S,e as g,t as j,c as k,a as b,g as J,d as m,b as v,J as q,f as y,D as I,K as M,h as K,E as T,L as Q,v as A,w as L,x as O,M as W,N as X,O as Y,p as N,P as Z,Q as z,n as C,R as G,A as U,m as H,T as $,o as x,U as de,V as ee,W as te,X as he,Y as me,Z as le,_ as ve,$ as ge,a0 as ke,j as pe,a1 as be,l as we}from"../chunks/vendor-3f07ee1b.js";const P=_e([{id:1,text:"test task 1",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:3,text:"test task 3",done:!0,color:"#FF9900"}]);function Ee(r){let e,t,a,s,i,n,l,u,c,o;return{c(){e=g("div"),t=g("div"),a=g("p"),s=j(r[1]),i=g("div"),n=g("div"),this.h()},l(_){e=k(_,"DIV",{class:!0});var p=b(e);t=k(p,"DIV",{class:!0});var E=b(t);a=k(E,"P",{class:!0});var w=b(a);s=J(w,r[1]),w.forEach(m),E.forEach(m),i=k(p,"DIV",{class:!0}),b(i).forEach(m),n=k(p,"DIV",{class:!0,style:!0}),b(n).forEach(m),p.forEach(m),this.h()},h(){v(a,"class","svelte-1ea2sbw"),v(t,"class","task__main svelte-1ea2sbw"),v(i,"class","task__circle task__menu svelte-1ea2sbw"),v(n,"class","task__circle task__circle_visible task__circle_r-t svelte-1ea2sbw"),v(n,"style",l=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`),v(e,"class",u="task "+r[0]+" svelte-1ea2sbw"),q(e,"isDisabled",r[3])},m(_,p){y(_,e,p),I(e,t),I(t,a),I(a,s),I(e,i),I(e,n),c||(o=M(t,"click",r[4]),c=!0)},p(_,[p]){p&2&&K(s,_[1]),p&4&&l!==(l=`background-color: ${_[2]!=null?_[2]:"#0029FF"}`)&&v(n,"style",l),p&1&&u!==(u="task "+_[0]+" svelte-1ea2sbw")&&v(e,"class",u),p&9&&q(e,"isDisabled",_[3])},i:T,o:T,d(_){_&&m(e),c=!1,o()}}}function ye(r,e,t){let a;Q(r,P,o=>t(6,a=o));let{class:s=""}=e,{text:i=""}=e,{color:n=null}=e,{disabled:l=!1}=e,{id:u=null}=e;const c=()=>{let o=a.map(_=>(u===_.id&&(_.done=!_.done),_));P.set(o)};return r.$$set=o=>{"class"in o&&t(0,s=o.class),"text"in o&&t(1,i=o.text),"color"in o&&t(2,n=o.color),"disabled"in o&&t(3,l=o.disabled),"id"in o&&t(5,u=o.id)},[s,i,n,l,c,u]}class se extends V{constructor(e){super();F(this,e,ye,Ee,S,{class:0,text:1,color:2,disabled:3,id:5})}}function ae(r,e,t){const a=r.slice();return a[4]=e[t],a}function ne(r,e,t){const a=r.slice();return a[4]=e[t],a}function ie(r,e){let t,a,s,i,n,l=T,u;return a=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:r,first:null,c(){t=g("li"),A(a.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var o=b(t);L(a.$$.fragment,o),o.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,o){y(c,t,o),O(a,t,null),u=!0},p(c,o){e=c;const _={};o&2&&(_.text=e[4].text),o&2&&(_.color=e[4].color?e[4].color:null),o&2&&(_.id=e[4].id),a.$set(_)},r(){n=t.getBoundingClientRect()},f(){W(t),l(),X(t,n)},a(){l(),l=Y(t,n,ee,{duration:300})},i(c){u||(N(a.$$.fragment,c),Z(()=>{i&&i.end(1),s=z(t,e[3],{key:e[4].id}),s.start()}),u=!0)},o(c){C(a.$$.fragment,c),s&&s.invalidate(),i=G(t,e[2],{key:e[4].id}),u=!1},d(c){c&&m(t),U(a),c&&i&&i.end()}}}function re(r,e){let t,a,s,i,n,l=T,u;return a=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:r,first:null,c(){t=g("li"),A(a.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var o=b(t);L(a.$$.fragment,o),o.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,o){y(c,t,o),O(a,t,null),u=!0},p(c,o){e=c;const _={};o&2&&(_.text=e[4].text),o&2&&(_.color=e[4].color?e[4].color:null),o&2&&(_.id=e[4].id),a.$set(_)},r(){n=t.getBoundingClientRect()},f(){W(t),l(),X(t,n)},a(){l(),l=Y(t,n,ee,{duration:300})},i(c){u||(N(a.$$.fragment,c),Z(()=>{i&&i.end(1),s=z(t,e[3],{key:e[4].id}),s.start()}),u=!0)},o(c){C(a.$$.fragment,c),s&&s.invalidate(),i=G(t,e[2],{key:e[4].id}),u=!1},d(c){c&&m(t),U(a),c&&i&&i.end()}}}function Ie(r){let e,t,a,s=[],i=new Map,n,l=[],u=new Map,c,o,_=r[1].filter(oe);const p=d=>d[4].id;for(let d=0;d<_.length;d+=1){let f=ne(r,_,d),h=p(f);i.set(h,s[d]=ie(h,f))}let E=r[1].filter(ce);const w=d=>d[4].id;for(let d=0;d<E.length;d+=1){let f=ae(r,E,d),h=w(f);u.set(h,l[d]=re(h,f))}return{c(){e=g("section"),t=g("div"),a=g("ul");for(let d=0;d<s.length;d+=1)s[d].c();n=g("ul");for(let d=0;d<l.length;d+=1)l[d].c();this.h()},l(d){e=k(d,"SECTION",{class:!0});var f=b(e);t=k(f,"DIV",{class:!0});var h=b(t);a=k(h,"UL",{class:!0});var R=b(a);for(let D=0;D<s.length;D+=1)s[D].l(R);R.forEach(m),n=k(h,"UL",{class:!0});var B=b(n);for(let D=0;D<l.length;D+=1)l[D].l(B);B.forEach(m),h.forEach(m),f.forEach(m),this.h()},h(){v(a,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-v0wwi"),v(e,"class",c="task-section "+r[0]+" svelte-v0wwi")},m(d,f){y(d,e,f),I(e,t),I(t,a);for(let h=0;h<s.length;h+=1)s[h].m(a,null);I(t,n);for(let h=0;h<l.length;h+=1)l[h].m(n,null);o=!0},p(d,[f]){if(f&2){_=d[1].filter(oe),H();for(let h=0;h<s.length;h+=1)s[h].r();s=$(s,f,p,1,d,_,i,a,te,ie,null,ne);for(let h=0;h<s.length;h+=1)s[h].a();x()}if(f&2){E=d[1].filter(ce),H();for(let h=0;h<l.length;h+=1)l[h].r();l=$(l,f,w,1,d,E,u,n,te,re,null,ae);for(let h=0;h<l.length;h+=1)l[h].a();x()}(!o||f&1&&c!==(c="task-section "+d[0]+" svelte-v0wwi"))&&v(e,"class",c)},i(d){if(!o){for(let f=0;f<_.length;f+=1)N(s[f]);for(let f=0;f<E.length;f+=1)N(l[f]);o=!0}},o(d){for(let f=0;f<s.length;f+=1)C(s[f]);for(let f=0;f<l.length;f+=1)C(l[f]);o=!1},d(d){d&&m(e);for(let f=0;f<s.length;f+=1)s[f].d();for(let f=0;f<l.length;f+=1)l[f].d()}}}const oe=r=>!r.done,ce=r=>r.done;function De(r,e,t){let a;Q(r,P,l=>t(1,a=l));let{class:s=""}=e;const[i,n]=de({duration:l=>Math.sqrt(l*200),fallback(l,u){const c=getComputedStyle(l),o=c.transform==="none"?"":c.transform;return{duration:600,easing:he,css:_=>`
					transform: ${o} scale(${_});
					opacity: ${_}
				`}}});return r.$$set=l=>{"class"in l&&t(0,s=l.class)},[s,a,i,n]}class Te extends V{constructor(e){super();F(this,e,De,Ie,S,{class:0})}}function ue(r){let e,t,a,s=r[2].text&&fe(r);return{c(){e=g("button"),s&&s.c(),this.h()},l(i){e=k(i,"BUTTON",{class:!0});var n=b(e);s&&s.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-lxnxhr")},m(i,n){y(i,e,n),s&&s.m(e,null),t||(a=M(e,"click",me(r[6])),t=!0)},p(i,n){i[2].text?s?s.p(i,n):(s=fe(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&m(e),s&&s.d(),t=!1,a()}}}function fe(r){let e=r[2].text+"",t;return{c(){t=j(e)},l(a){t=J(a,e)},m(a,s){y(a,t,s)},p(a,s){s&4&&e!==(e=a[2].text+"")&&K(t,e)},d(a){a&&m(t)}}}function Ne(r){let e,t,a,s,i,n=r[2]&&ue(r);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var u=b(e);t=k(u,"INPUT",{placeholder:!0,class:!0}),n&&n.l(u),u.forEach(m),this.h()},h(){v(t,"placeholder",r[1]),v(t,"class","svelte-lxnxhr"),v(e,"class",a="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-lxnxhr"),q(e,"isError",r[5])},m(l,u){y(l,e,u),I(e,t),le(t,r[4]),n&&n.m(e,null),r[9](e),s||(i=[M(t,"input",r[8]),M(t,"input",r[7])],s=!0)},p(l,[u]){u&2&&v(t,"placeholder",l[1]),u&16&&t.value!==l[4]&&le(t,l[4]),l[2]?n?n.p(l,u):(n=ue(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null),u&5&&a!==(a="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-lxnxhr")&&v(e,"class",a),u&37&&q(e,"isError",l[5])},i:T,o:T,d(l){l&&m(e),n&&n.d(),r[9](null),s=!1,ve(i)}}}function Ce(r,e,t){let{class:a=""}=e,{placeholder:s="Placeholer"}=e,{btn:i=null}=e,n,l,u=!1;const c=ge(),o=()=>{l?(c("submit",{value:l}),t(4,l="")):t(5,u=!0)},_=()=>{t(5,u=!1)};function p(){l=this.value,t(4,l)}function E(w){ke[w?"unshift":"push"](()=>{n=w,t(3,n)})}return r.$$set=w=>{"class"in w&&t(0,a=w.class),"placeholder"in w&&t(1,s=w.placeholder),"btn"in w&&t(2,i=w.btn)},[a,s,i,n,l,u,o,_,p,E]}class Ve extends V{constructor(e){super();F(this,e,Ce,Ne,S,{class:0,placeholder:1,btn:2})}}function Fe(r){let e,t,a,s;return t=new Ve({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",r[1]),{c(){e=g("div"),A(t.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var n=b(e);L(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",a="add-todo "+r[0]+" svelte-xriol")},m(i,n){y(i,e,n),O(t,e,null),s=!0},p(i,[n]){(!s||n&1&&a!==(a="add-todo "+i[0]+" svelte-xriol"))&&v(e,"class",a)},i(i){s||(N(t.$$.fragment,i),s=!0)},o(i){C(t.$$.fragment,i),s=!1},d(i){i&&m(e),U(t)}}}function Se(r,e,t){let{class:a=""}=e;const s=i=>{let n={id:Date.now(),text:i.detail.value,color:null,done:!1};P.update(l=>l=[n,...l])};return r.$$set=i=>{"class"in i&&t(0,a=i.class)},[a,s]}class Ae extends V{constructor(e){super();F(this,e,Se,Fe,S,{class:0})}}function Le(r){let e,t,a,s,i,n;return s=new Ae({}),i=new Te({props:{class:"mt-50"}}),{c(){e=pe(),t=g("section"),a=g("div"),A(s.$$.fragment),A(i.$$.fragment),this.h()},l(l){be('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=we(l),t=k(l,"SECTION",{class:!0});var c=b(t);a=k(c,"DIV",{class:!0});var o=b(a);L(s.$$.fragment,o),o.forEach(m),c.forEach(m),L(i.$$.fragment,l),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(a,"class","container"),v(t,"class","mt-50")},m(l,u){y(l,e,u),y(l,t,u),I(t,a),O(s,a,null),O(i,l,u),n=!0},p:T,i(l){n||(N(s.$$.fragment,l),N(i.$$.fragment,l),n=!0)},o(l){C(s.$$.fragment,l),C(i.$$.fragment,l),n=!1},d(l){l&&m(e),l&&m(t),U(s),U(i,l)}}}function Oe(r,e,t){let{class:a=""}=e;return r.$$set=s=>{"class"in s&&t(0,a=s.class)},[a]}class qe extends V{constructor(e){super();F(this,e,Oe,Le,S,{class:0})}}export{qe as default};