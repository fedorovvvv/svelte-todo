import{K as Be,C as Le,S as L,i as q,s as M,e as b,c as y,a as E,d as v,b as m,f as D,D as w,L as A,M as B,N as he,t as Z,g as G,O as z,h as me,P as W,Q as qe,E as U,R as ve,T as X,U as ge,v as R,w as j,x as H,V as J,W as $,X as x,p as S,Y as ee,Z as ke,n as V,_ as pe,A as K,m as te,o as le,$ as Me,a0 as se,a1 as ne,a2 as Re,a3 as be,a4 as je,a5 as ye,a6 as Ee,j as He,a7 as Ke,l as Qe}from"../chunks/vendor-184f9251.js";const P=Le([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Te=Be(P,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),i=n.filter((s,c)=>n.indexOf(s)===c).map((s,c)=>({id:c,color:s}));t(i)});function Ce(o,t,e){const l=o.slice();return l[15]=t[e],l}function Ie(o,t){let e,l,n,r,i;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var c=E(e);l=y(c,"BUTTON",{class:!0,style:!0}),E(l).forEach(v),c.forEach(v),this.h()},h(){m(l,"class","task__color-btn svelte-190ntz1"),m(l,"style",n=`background-color: ${t[15].color}`),m(e,"class","task__color-item svelte-190ntz1"),this.first=e},m(s,c){D(s,e,c),w(e,l),r||(i=A(l,"click",B(function(){he(t[9](t[15].color))&&t[9](t[15].color).apply(this,arguments)})),r=!0)},p(s,c){t=s,c&68&&n!==(n=`background-color: ${t[15].color}`)&&m(l,"style",n)},d(s){s&&v(e),r=!1,i()}}}function We(o){let t,e,l,n,r,i,s,c,f,_,h,p,T=[],g=new Map,u,a,d,k,F,N,Q=o[6].filter(o[13]);const oe=C=>C[15].id;for(let C=0;C<Q.length;C+=1){let I=Ce(o,Q,C),O=oe(I);g.set(O,T[C]=Ie(O,I))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=Z(o[1]),r=b("div"),i=b("div"),s=b("span"),c=Z("22.11.2003"),f=b("div"),_=b("button"),h=b("span"),p=b("ul");for(let C=0;C<T.length;C+=1)T[C].c();a=b("button"),d=b("span"),this.h()},l(C){t=y(C,"DIV",{class:!0});var I=E(t);e=y(I,"DIV",{class:!0});var O=E(e);l=y(O,"P",{class:!0});var ae=E(l);n=G(ae,o[1]),ae.forEach(v),r=y(O,"DIV",{class:!0});var re=E(r);i=y(re,"DIV",{class:!0});var ie=E(i);s=y(ie,"SPAN",{class:!0});var ce=E(s);c=G(ce,"22.11.2003"),ce.forEach(v),ie.forEach(v),re.forEach(v),O.forEach(v),f=y(I,"DIV",{class:!0});var ue=E(f);_=y(ue,"BUTTON",{class:!0});var fe=E(_);h=y(fe,"SPAN",{class:!0}),E(h).forEach(v),fe.forEach(v),ue.forEach(v),p=y(I,"UL",{class:!0,style:!0});var _e=E(p);for(let Y=0;Y<T.length;Y+=1)T[Y].l(_e);_e.forEach(v),a=y(I,"BUTTON",{class:!0});var de=E(a);d=y(de,"SPAN",{class:!0}),E(d).forEach(v),de.forEach(v),I.forEach(v),this.h()},h(){m(l,"class","svelte-190ntz1"),m(s,"class","svelte-190ntz1"),m(i,"class","task__info-content"),m(r,"class","task__info svelte-190ntz1"),m(e,"class","task__main svelte-190ntz1"),m(h,"class","svg-image-del svelte-190ntz1"),m(_,"class","task__menu-btn task__menu-btn_del svelte-190ntz1"),m(f,"class","task__circle task__menu svelte-190ntz1"),m(p,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-190ntz1"),m(p,"style",u=`background-color: ${o[2]}`),m(d,"class","svelte-190ntz1"),m(a,"class","task__info-open svelte-190ntz1"),m(t,"class",k="task "+o[0]+" svelte-190ntz1"),z(t,"isDisabled",o[3]),z(t,"isOpen",o[4])},m(C,I){D(C,t,I),w(t,e),w(e,l),w(l,n),w(e,r),w(r,i),w(i,s),w(s,c),o[12](r),w(t,f),w(f,_),w(_,h),w(t,p);for(let O=0;O<T.length;O+=1)T[O].m(p,null);w(t,a),w(a,d),F||(N=[A(e,"click",o[7]),A(_,"click",B(o[8])),A(a,"click",B(o[10]))],F=!0)},p(C,[I]){I&2&&me(n,C[1]),I&580&&(Q=C[6].filter(C[13]),T=W(T,I,oe,1,C,Q,g,p,qe,Ie,null,Ce)),I&4&&u!==(u=`background-color: ${C[2]}`)&&m(p,"style",u),I&1&&k!==(k="task "+C[0]+" svelte-190ntz1")&&m(t,"class",k),I&9&&z(t,"isDisabled",C[3]),I&17&&z(t,"isOpen",C[4])},i:U,o:U,d(C){C&&v(t),o[12](null);for(let I=0;I<T.length;I+=1)T[I].d();F=!1,ve(N)}}}function Xe(o,t,e){let l,n;X(o,P,k=>e(14,l=k)),X(o,Te,k=>e(6,n=k));let{class:r=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,_=!1,h;const p=()=>{let k=l.map(F=>(f===F.id&&(F.done=!F.done),F));P.set(k)},T=()=>{let k=l.filter(F=>F.id!=f);P.set(k),console.log("del",f)},g=k=>{let F=l.map(N=>(f===N.id&&(N.color=k),N));P.set(F)},u=()=>{e(4,_=!_);let k=0;h.childNodes.forEach(F=>{k+=F.clientHeight}),console.log(k),h.style.setProperty("--taskInfoHeight",40+"px")};function a(k){ge[k?"unshift":"push"](()=>{h=k,e(5,h)})}const d=k=>k.color!=s;return o.$$set=k=>{"class"in k&&e(0,r=k.class),"text"in k&&e(1,i=k.text),"color"in k&&e(2,s=k.color),"disabled"in k&&e(3,c=k.disabled),"id"in k&&e(11,f=k.id)},[r,i,s,c,_,h,n,p,T,g,u,f,a,d]}class we extends L{constructor(t){super();q(this,t,Xe,We,M,{class:0,text:1,color:2,disabled:3,id:11})}}function Fe(o,t,e){const l=o.slice();return l[4]=t[e],l}function Ne(o,t,e){const l=o.slice();return l[4]=t[e],l}function De(o,t){let e,l,n,r,i,s=U,c;return l=new we({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),R(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);j(l.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,_){D(f,e,_),H(l,e,null),c=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){J(e),s(),$(e,i)},a(){s(),s=x(e,i,se,{duration:300})},i(f){c||(S(l.$$.fragment,f),ee(()=>{r&&r.end(1),n=ke(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(f){V(l.$$.fragment,f),n&&n.invalidate(),r=pe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),K(l),f&&r&&r.end()}}}function Oe(o,t){let e,l,n,r,i,s=U,c;return l=new we({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),R(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);j(l.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,_){D(f,e,_),H(l,e,null),c=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){J(e),s(),$(e,i)},a(){s(),s=x(e,i,se,{duration:300})},i(f){c||(S(l.$$.fragment,f),ee(()=>{r&&r.end(1),n=ke(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(f){V(l.$$.fragment,f),n&&n.invalidate(),r=pe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),K(l),f&&r&&r.end()}}}function Ye(o){let t,e,l,n=[],r=new Map,i,s=[],c=new Map,f,_,h=o[1].filter(Ae);const p=u=>u[4].id;for(let u=0;u<h.length;u+=1){let a=Ne(o,h,u),d=p(a);r.set(d,n[u]=De(d,a))}let T=o[1].filter(ze);const g=u=>u[4].id;for(let u=0;u<T.length;u+=1){let a=Fe(o,T,u),d=g(a);c.set(d,s[u]=Oe(d,a))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let u=0;u<n.length;u+=1)n[u].c();i=b("ul");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){t=y(u,"SECTION",{class:!0});var a=E(t);e=y(a,"DIV",{class:!0});var d=E(e);l=y(d,"UL",{class:!0});var k=E(l);for(let N=0;N<n.length;N+=1)n[N].l(k);k.forEach(v),i=y(d,"UL",{class:!0});var F=E(i);for(let N=0;N<s.length;N+=1)s[N].l(F);F.forEach(v),d.forEach(v),a.forEach(v),this.h()},h(){m(l,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-1rib3cm"),m(t,"class",f="task-section "+o[0]+" svelte-1rib3cm")},m(u,a){D(u,t,a),w(t,e),w(e,l);for(let d=0;d<n.length;d+=1)n[d].m(l,null);w(e,i);for(let d=0;d<s.length;d+=1)s[d].m(i,null);_=!0},p(u,[a]){if(a&2){h=u[1].filter(Ae),te();for(let d=0;d<n.length;d+=1)n[d].r();n=W(n,a,p,1,u,h,r,l,ne,De,null,Ne);for(let d=0;d<n.length;d+=1)n[d].a();le()}if(a&2){T=u[1].filter(ze),te();for(let d=0;d<s.length;d+=1)s[d].r();s=W(s,a,g,1,u,T,c,i,ne,Oe,null,Fe);for(let d=0;d<s.length;d+=1)s[d].a();le()}(!_||a&1&&f!==(f="task-section "+u[0]+" svelte-1rib3cm"))&&m(t,"class",f)},i(u){if(!_){for(let a=0;a<h.length;a+=1)S(n[a]);for(let a=0;a<T.length;a+=1)S(s[a]);_=!0}},o(u){for(let a=0;a<n.length;a+=1)V(n[a]);for(let a=0;a<s.length;a+=1)V(s[a]);_=!1},d(u){u&&v(t);for(let a=0;a<n.length;a+=1)n[a].d();for(let a=0;a<s.length;a+=1)s[a].d()}}}const Ae=o=>!o.done,ze=o=>o.done;function Ze(o,t,e){let l;X(o,P,s=>e(1,l=s));let{class:n=""}=t;const[r,i]=Me({duration:s=>Math.sqrt(s*200),fallback(s,c){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Re,css:h=>`
					transform: ${_} scale(${h});
					opacity: ${h}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,r,i]}class Ge extends L{constructor(t){super();q(this,t,Ze,Ye,M,{class:0})}}function Se(o){let t,e,l,n=o[2].text&&Ve(o);return{c(){t=b("button"),n&&n.c(),this.h()},l(r){t=y(r,"BUTTON",{class:!0});var i=E(t);n&&n.l(i),i.forEach(v),this.h()},h(){m(t,"class","btn svelte-12pihab")},m(r,i){D(r,t,i),n&&n.m(t,null),e||(l=A(t,"click",B(o[6])),e=!0)},p(r,i){r[2].text?n?n.p(r,i):(n=Ve(r),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(r){r&&v(t),n&&n.d(),e=!1,l()}}}function Ve(o){let t=o[2].text+"",e;return{c(){e=Z(t)},l(l){e=G(l,t)},m(l,n){D(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&me(e,t)},d(l){l&&v(e)}}}function Je(o){let t,e,l,n,r,i=o[2]&&Se(o);return{c(){t=b("div"),e=b("input"),i&&i.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var c=E(t);e=y(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(v),this.h()},h(){m(e,"placeholder",o[1]),m(e,"class","svelte-12pihab"),m(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),z(t,"isError",o[5])},m(s,c){D(s,t,c),w(t,e),be(e,o[4]),i&&i.m(t,null),o[11](t),n||(r=[A(e,"input",o[9]),A(e,"input",o[7]),A(e,"keydown",o[10])],n=!0)},p(s,[c]){c&2&&m(e,"placeholder",s[1]),c&16&&e.value!==s[4]&&be(e,s[4]),s[2]?i?i.p(s,c):(i=Se(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&m(t,"class",l),c&37&&z(t,"isError",s[5])},i:U,o:U,d(s){s&&v(t),i&&i.d(),o[11](null),n=!1,ve(r)}}}function $e(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:r=null}=t,i,s,c=!1;const f=je(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,c=!0)},h=()=>{e(5,c=!1)},p=a=>{let d=a.key;d==="Control"&&f("color"),d==="Enter"&&_()};function T(){s=this.value,e(4,s)}const g=a=>p(a);function u(a){ge[a?"unshift":"push"](()=>{i=a,e(3,i)})}return o.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,r=a.btn)},[l,n,r,i,s,c,_,h,p,T,g,u]}class xe extends L{constructor(t){super();q(this,t,$e,Je,M,{class:0,placeholder:1,btn:2})}}function Ue(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Pe(o,t){let e,l,n,r,i=U,s,c,f;return{key:o,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),E(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-y5nf6k"),m(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,h){D(_,e,h),s=!0,c||(f=A(e,"click",B(function(){he(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,h){t=_,(!s||h&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",l)},r(){r=e.getBoundingClientRect()},f(){J(e),i(),$(e,r)},a(){i(),i=x(e,r,se,{})},i(_){s||(ee(()=>{n||(n=ye(e,Ee,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=ye(e,Ee,{},!1)),n.run(0),s=!1},d(_){_&&v(e),_&&n&&n.end(),c=!1,f()}}}function et(o){let t,e,l,n,r=[],i=new Map,s,c,f,_,h,p=o[3].filter(o[7]);const T=g=>g[9].id;for(let g=0;g<p.length;g+=1){let u=Ue(o,p,g),a=T(u);i.set(a,r[g]=Pe(a,u))}return s=new xe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[8]),s.$on("submit",o[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let g=0;g<r.length;g+=1)r[g].c();R(s.$$.fragment),this.h()},l(g){t=y(g,"DIV",{class:!0});var u=E(t);e=y(u,"DIV",{class:!0});var a=E(e);l=y(a,"SPAN",{class:!0,style:!0}),E(l).forEach(v);for(let d=0;d<r.length;d+=1)r[d].l(a);a.forEach(v),j(s.$$.fragment,u),u.forEach(v),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),m(l,"style",n=`color: ${o[1]}`),m(e,"class","add-todo__color-list svelte-y5nf6k"),z(e,"isOpen",o[2]),m(t,"class",c="add-todo "+o[0]+" svelte-y5nf6k")},m(g,u){D(g,t,u),w(t,e),w(e,l);for(let a=0;a<r.length;a+=1)r[a].m(e,null);H(s,t,null),f=!0,_||(h=A(l,"click",B(o[6])),_=!0)},p(g,[u]){if((!f||u&2&&n!==(n=`color: ${g[1]}`))&&m(l,"style",n),u&42){p=g[3].filter(g[7]),te();for(let a=0;a<r.length;a+=1)r[a].r();r=W(r,u,T,1,g,p,i,e,ne,Pe,null,Ue);for(let a=0;a<r.length;a+=1)r[a].a();le()}u&4&&z(e,"isOpen",g[2]),(!f||u&1&&c!==(c="add-todo "+g[0]+" svelte-y5nf6k"))&&m(t,"class",c)},i(g){if(!f){for(let u=0;u<p.length;u+=1)S(r[u]);S(s.$$.fragment,g),f=!0}},o(g){for(let u=0;u<r.length;u+=1)V(r[u]);V(s.$$.fragment,g),f=!1},d(g){g&&v(t);for(let u=0;u<r.length;u+=1)r[u].d();K(s),_=!1,h()}}}function tt(o,t,e){let l;X(o,Te,p=>e(3,l=p));let{class:n=""}=t,r="#0029FF",i=!1;const s=p=>{let T={id:Date.now(),text:p.detail.value,color:r,done:!1};P.update(g=>g=[T,...g])},c=p=>p&&e(1,r=p),f=()=>e(2,i=!i),_=p=>p.color!=r,h=()=>e(2,i=!i);return o.$$set=p=>{"class"in p&&e(0,n=p.class)},[n,r,i,l,s,c,f,_,h]}class lt extends L{constructor(t){super();q(this,t,tt,et,M,{class:0})}}function st(o){let t,e,l,n,r,i,s;return n=new lt({}),i=new Ge({props:{class:"mt-50"}}),{c(){t=He(),e=b("section"),l=b("div"),R(n.$$.fragment),R(i.$$.fragment),this.h()},l(c){Ke('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=Qe(c),e=y(c,"SECTION",{class:!0});var _=E(e);l=y(_,"DIV",{class:!0});var h=E(l);j(n.$$.fragment,h),h.forEach(v),_.forEach(v),j(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(e,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(c,f){D(c,t,f),D(c,e,f),w(e,l),H(n,l,null),H(i,c,f),s=!0},p(c,[f]){(!s||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-hols8d")))&&m(e,"class",r)},i(c){s||(S(n.$$.fragment,c),S(i.$$.fragment,c),s=!0)},o(c){V(n.$$.fragment,c),V(i.$$.fragment,c),s=!1},d(c){c&&v(t),c&&v(e),K(n),K(i,c)}}}function nt(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class at extends L{constructor(t){super();q(this,t,nt,st,M,{class:0})}}export{at as default};