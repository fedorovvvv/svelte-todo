import{K as Re,C as ze,S as H,i as j,s as K,e as y,c as E,a as q,d as g,b as h,f as F,D as w,L as A,M as B,N as ke,t as x,g as ee,O as C,h as te,P as Z,Q as He,E as L,R as pe,T as G,U as be,v as Y,w as Q,x as W,V as le,W as se,X as ne,p as V,Y as ae,Z as ye,n as P,_ as Ee,A as X,m as oe,o as ie,$ as je,a0 as re,a1 as ce,a2 as Ke,a3 as qe,a4 as Ye,a5 as Te,a6 as Oe,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const M=ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),we=Re(M,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=n.filter(s=>s.color).map(s=>s.color).concat(e),i=a.filter((s,r)=>a.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function Ce(n,t,e){const l=n.slice();return l[19]=t[e],l}function De(n,t){let e,l,a,o,i;return{key:n,first:null,c(){e=y("li"),l=y("button"),this.h()},l(s){e=E(s,"LI",{class:!0});var r=q(e);l=E(r,"BUTTON",{class:!0,style:!0}),q(l).forEach(g),r.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-qastf0"),h(l,"style",a=`background-color: ${t[19].color}`),h(e,"class","task__color-item svelte-qastf0"),this.first=e},m(s,r){F(s,e,r),w(e,l),o||(i=A(l,"click",B(function(){ke(t[12](t[19].color))&&t[12](t[19].color).apply(this,arguments)})),o=!0)},p(s,r){t=s,r&260&&a!==(a=`background-color: ${t[19].color}`)&&h(l,"style",a)},d(s){s&&g(e),o=!1,i()}}}function Ze(n){let t,e,l,a,o,i,s,r,u,_,m,k,O,d,c=[],f=new Map,v,I,S,N,z,p,D=n[8].filter(n[17]);const R=b=>b[19].id;for(let b=0;b<D.length;b+=1){let T=Ce(n,D,b),U=R(T);f.set(U,c[b]=De(U,T))}return{c(){t=y("div"),e=y("div"),l=y("p"),a=x(n[1]),o=y("div"),i=y("div"),s=y("span"),r=x(n[4]),u=y("div"),_=y("button"),m=y("span"),k=y("button"),O=y("span"),d=y("ul");for(let b=0;b<c.length;b+=1)c[b].c();I=y("button"),S=y("span"),this.h()},l(b){t=E(b,"DIV",{class:!0});var T=q(t);e=E(T,"DIV",{class:!0});var U=q(e);l=E(U,"P",{contenteditable:!0,class:!0});var fe=q(l);a=ee(fe,n[1]),fe.forEach(g),o=E(U,"DIV",{class:!0});var ue=q(o);i=E(ue,"DIV",{class:!0});var _e=q(i);s=E(_e,"SPAN",{class:!0});var de=q(s);r=ee(de,n[4]),de.forEach(g),_e.forEach(g),ue.forEach(g),U.forEach(g),u=E(T,"DIV",{class:!0});var J=q(u);_=E(J,"BUTTON",{class:!0});var he=q(_);m=E(he,"SPAN",{class:!0}),q(m).forEach(g),he.forEach(g),k=E(J,"BUTTON",{class:!0});var ve=q(k);O=E(ve,"SPAN",{class:!0}),q(O).forEach(g),ve.forEach(g),J.forEach(g),d=E(T,"UL",{class:!0,style:!0});var me=q(d);for(let $=0;$<c.length;$+=1)c[$].l(me);me.forEach(g),I=E(T,"BUTTON",{class:!0});var ge=q(I);S=E(ge,"SPAN",{class:!0}),q(S).forEach(g),ge.forEach(g),T.forEach(g),this.h()},h(){h(l,"contenteditable",n[7]),h(l,"class","svelte-qastf0"),h(s,"class","svelte-qastf0"),h(i,"class","task__info-content svelte-qastf0"),h(o,"class","task__info svelte-qastf0"),h(e,"class","task__main svelte-qastf0"),h(m,"class","svg-image-del svelte-qastf0"),h(_,"class","task__menu-btn task__menu-btn_del svelte-qastf0"),h(O,"class","svg-image-pen svelte-qastf0"),h(k,"class","task__menu-btn task__menu-btn_edit svelte-qastf0"),C(k,"isSelect",n[7]),h(u,"class","task__circle task__menu svelte-qastf0"),C(u,"isOpen",n[7]),h(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-qastf0"),h(d,"style",v=`background-color: ${n[2]}`),C(d,"isOpen",n[7]),h(S,"class","svelte-qastf0"),h(I,"class","task__info-open svelte-qastf0"),C(I,"isHidden",n[7]),h(t,"class",N="task "+n[0]+" svelte-qastf0"),C(t,"isDisabled",n[3]),C(t,"isOpen",n[5])},m(b,T){F(b,t,T),w(t,e),w(e,l),w(l,a),w(e,o),w(o,i),w(i,s),w(s,r),n[16](o),w(t,u),w(u,_),w(_,m),w(u,k),w(k,O),w(t,d);for(let U=0;U<c.length;U+=1)c[U].m(d,null);w(t,I),w(I,S),z||(p=[A(l,"input",n[15]),A(e,"click",n[9]),A(_,"click",B(n[10])),A(k,"click",B(n[11])),A(I,"click",B(n[13]))],z=!0)},p(b,[T]){T&2&&te(a,b[1]),T&128&&h(l,"contenteditable",b[7]),T&16&&te(r,b[4]),T&128&&C(k,"isSelect",b[7]),T&128&&C(u,"isOpen",b[7]),T&4356&&(D=b[8].filter(b[17]),c=Z(c,T,R,1,b,D,f,d,He,De,null,Ce)),T&4&&v!==(v=`background-color: ${b[2]}`)&&h(d,"style",v),T&128&&C(d,"isOpen",b[7]),T&128&&C(I,"isHidden",b[7]),T&1&&N!==(N="task "+b[0]+" svelte-qastf0")&&h(t,"class",N),T&9&&C(t,"isDisabled",b[3]),T&33&&C(t,"isOpen",b[5])},i:L,o:L,d(b){b&&g(t),n[16](null);for(let T=0;T<c.length;T+=1)c[T].d();z=!1,pe(p)}}}function Ge(n,t,e){let l,a;G(n,M,p=>e(18,l=p)),G(n,we,p=>e(8,a=p));let{class:o=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,m=!1,k,O=!1;const d=()=>{if(O===!1){let p=l.map(D=>(u===D.id&&(D.done=!D.done),D));M.set(p)}},c=()=>{let p=l.filter(D=>D.id!=u);M.set(p)},f=()=>{e(7,O=!O)},v=p=>{let D=l.map(R=>(u===R.id&&(R.color=p),R));M.set(D)},I=()=>{e(5,m=!m);let p=0;k.childNodes.forEach(D=>p+=D.clientHeight),k.style.setProperty("--taskInfoHeight",`${m?p:0}px`)},S=()=>console.log("input");function N(p){be[p?"unshift":"push"](()=>{k=p,e(6,k)})}const z=p=>p.color!=s;return n.$$set=p=>{"class"in p&&e(0,o=p.class),"text"in p&&e(1,i=p.text),"color"in p&&e(2,s=p.color),"disabled"in p&&e(3,r=p.disabled),"id"in p&&e(14,u=p.id),"date"in p&&e(4,_=p.date)},[o,i,s,r,_,m,k,O,a,d,c,f,v,I,u,S,N,z]}class Ie extends H{constructor(t){super();j(this,t,Ge,Ze,K,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Ne(n,t,e){const l=n.slice();return l[4]=t[e],l}function Fe(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ae(n,t){let e,l,a,o,i,s=L,r;return l=new Ie({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=q(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),W(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){le(e),s(),se(e,i)},a(){s(),s=ne(e,i,re,{duration:300})},i(u){r||(V(l.$$.fragment,u),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(u){P(l.$$.fragment,u),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),X(l),u&&o&&o.end()}}}function Se(n,t){let e,l,a,o,i,s=L,r;return l=new Ie({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=q(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),W(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){le(e),s(),se(e,i)},a(){s(),s=ne(e,i,re,{duration:300})},i(u){r||(V(l.$$.fragment,u),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(u){P(l.$$.fragment,u),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),X(l),u&&o&&o.end()}}}function Je(n){let t,e,l,a=[],o=new Map,i,s=[],r=new Map,u,_,m=n[1].filter(Ue);const k=c=>c[4].id;for(let c=0;c<m.length;c+=1){let f=Fe(n,m,c),v=k(f);o.set(v,a[c]=Ae(v,f))}let O=n[1].filter(Ve);const d=c=>c[4].id;for(let c=0;c<O.length;c+=1){let f=Ne(n,O,c),v=d(f);r.set(v,s[c]=Se(v,f))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let c=0;c<a.length;c+=1)a[c].c();i=y("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=E(c,"SECTION",{class:!0});var f=q(t);e=E(f,"DIV",{class:!0});var v=q(e);l=E(v,"UL",{class:!0});var I=q(l);for(let N=0;N<a.length;N+=1)a[N].l(I);I.forEach(g),i=E(v,"UL",{class:!0});var S=q(i);for(let N=0;N<s.length;N+=1)s[N].l(S);S.forEach(g),v.forEach(g),f.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",u="task-section "+n[0]+" svelte-q8mvyt")},m(c,f){F(c,t,f),w(t,e),w(e,l);for(let v=0;v<a.length;v+=1)a[v].m(l,null);w(e,i);for(let v=0;v<s.length;v+=1)s[v].m(i,null);_=!0},p(c,[f]){if(f&2){m=c[1].filter(Ue),oe();for(let v=0;v<a.length;v+=1)a[v].r();a=Z(a,f,k,1,c,m,o,l,ce,Ae,null,Fe);for(let v=0;v<a.length;v+=1)a[v].a();ie()}if(f&2){O=c[1].filter(Ve),oe();for(let v=0;v<s.length;v+=1)s[v].r();s=Z(s,f,d,1,c,O,r,i,ce,Se,null,Ne);for(let v=0;v<s.length;v+=1)s[v].a();ie()}(!_||f&1&&u!==(u="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",u)},i(c){if(!_){for(let f=0;f<m.length;f+=1)V(a[f]);for(let f=0;f<O.length;f+=1)V(s[f]);_=!0}},o(c){for(let f=0;f<a.length;f+=1)P(a[f]);for(let f=0;f<s.length;f+=1)P(s[f]);_=!1},d(c){c&&g(t);for(let f=0;f<a.length;f+=1)a[f].d();for(let f=0;f<s.length;f+=1)s[f].d()}}}const Ue=n=>!n.done,Ve=n=>n.done;function $e(n,t,e){let l;G(n,M,s=>e(1,l=s));let{class:a=""}=t;const[o,i]=je({duration:s=>Math.sqrt(s*200),fallback(s,r){const u=getComputedStyle(s),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ke,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return n.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,l,o,i]}class xe extends H{constructor(t){super();j(this,t,$e,Je,K,{class:0})}}const et=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Pe(n){let t,e,l,a=n[2].text&&Be(n);return{c(){t=y("button"),a&&a.c(),this.h()},l(o){t=E(o,"BUTTON",{class:!0});var i=q(t);a&&a.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(o,i){F(o,t,i),a&&a.m(t,null),e||(l=A(t,"click",B(n[6])),e=!0)},p(o,i){o[2].text?a?a.p(o,i):(a=Be(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(o){o&&g(t),a&&a.d(),e=!1,l()}}}function Be(n){let t=n[2].text+"",e;return{c(){e=x(t)},l(l){e=ee(l,t)},m(l,a){F(l,e,a)},p(l,a){a&4&&t!==(t=l[2].text+"")&&te(e,t)},d(l){l&&g(e)}}}function tt(n){let t,e,l,a,o,i=n[2]&&Pe(n);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var r=q(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){h(e,"placeholder",n[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",n[5])},m(s,r){F(s,t,r),w(t,e),qe(e,n[4]),i&&i.m(t,null),n[11](t),a||(o=[A(e,"input",n[9]),A(e,"input",n[7]),A(e,"keydown",n[10])],a=!0)},p(s,[r]){r&2&&h(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&qe(e,s[4]),s[2]?i?i.p(s,r):(i=Pe(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&C(t,"isError",s[5])},i:L,o:L,d(s){s&&g(t),i&&i.d(),n[11](null),a=!1,pe(o)}}}function lt(n,t,e){let{class:l=""}=t,{placeholder:a="Placeholer"}=t,{btn:o=null}=t,i,s,r=!1;const u=Ye(),_=()=>{s?(u("submit",{value:s}),e(4,s="")):e(5,r=!0)},m=()=>{e(5,r=!1)},k=f=>{let v=f.key;v==="Control"&&u("color"),v==="Enter"&&_()};function O(){s=this.value,e(4,s)}const d=f=>k(f);function c(f){be[f?"unshift":"push"](()=>{i=f,e(3,i)})}return n.$$set=f=>{"class"in f&&e(0,l=f.class),"placeholder"in f&&e(1,a=f.placeholder),"btn"in f&&e(2,o=f.btn)},[l,a,o,i,s,r,_,m,k,O,d,c]}class st extends H{constructor(t){super();j(this,t,lt,tt,K,{class:0,placeholder:1,btn:2})}}function Le(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function Me(n,t){let e,l,a,o,i=L,s,r,u;return{key:n,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),q(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){F(_,e,m),s=!0,r||(u=A(e,"click",B(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!s||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){le(e),i(),se(e,o)},a(){i(),i=ne(e,o,re,{})},i(_){s||(ae(()=>{a||(a=Te(e,Oe,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Te(e,Oe,{},!1)),a.run(0),s=!1},d(_){_&&g(e),_&&a&&a.end(),r=!1,u()}}}function nt(n){let t,e,l,a,o=[],i=new Map,s,r,u,_,m,k=n[3].filter(n[7]);const O=d=>d[9].id;for(let d=0;d<k.length;d+=1){let c=Le(n,k,d),f=O(c);i.set(f,o[d]=Me(f,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",n[8]),s.$on("submit",n[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let d=0;d<o.length;d+=1)o[d].c();Y(s.$$.fragment),this.h()},l(d){t=E(d,"DIV",{class:!0});var c=q(t);e=E(c,"DIV",{class:!0});var f=q(e);l=E(f,"SPAN",{class:!0,style:!0}),q(l).forEach(g);for(let v=0;v<o.length;v+=1)o[v].l(f);f.forEach(g),Q(s.$$.fragment,c),c.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",a=`color: ${n[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",n[2]),h(t,"class",r="add-todo "+n[0]+" svelte-1hafqlz")},m(d,c){F(d,t,c),w(t,e),w(e,l);for(let f=0;f<o.length;f+=1)o[f].m(e,null);W(s,t,null),u=!0,_||(m=A(l,"click",B(n[6])),_=!0)},p(d,[c]){if((!u||c&2&&a!==(a=`color: ${d[1]}`))&&h(l,"style",a),c&42){k=d[3].filter(d[7]),oe();for(let f=0;f<o.length;f+=1)o[f].r();o=Z(o,c,O,1,d,k,i,e,ce,Me,null,Le);for(let f=0;f<o.length;f+=1)o[f].a();ie()}c&4&&C(e,"isOpen",d[2]),(!u||c&1&&r!==(r="add-todo "+d[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(d){if(!u){for(let c=0;c<k.length;c+=1)V(o[c]);V(s.$$.fragment,d),u=!0}},o(d){for(let c=0;c<o.length;c+=1)P(o[c]);P(s.$$.fragment,d),u=!1},d(d){d&&g(t);for(let c=0;c<o.length;c+=1)o[c].d();X(s),_=!1,m()}}}function at(n,t,e){let l;G(n,we,k=>e(3,l=k));let{class:a=""}=t,o="#0029FF",i=!1;const s=k=>{let O={id:Date.now(),text:k.detail.value,color:o,done:!1,date:et(new Date,"dot")};M.update(d=>d=[O,...d])},r=k=>k&&e(1,o=k),u=()=>e(2,i=!i),_=k=>k.color!=o,m=()=>e(2,i=!i);return n.$$set=k=>{"class"in k&&e(0,a=k.class)},[a,o,i,l,s,r,u,_,m]}class ot extends H{constructor(t){super();j(this,t,at,nt,K,{class:0})}}function it(n){let t,e,l,a,o,i,s;return a=new ot({}),i=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=y("section"),l=y("div"),Y(a.$$.fragment),Y(i.$$.fragment),this.h()},l(r){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Xe(r),e=E(r,"SECTION",{class:!0});var _=q(e);l=E(_,"DIV",{class:!0});var m=q(l);Q(a.$$.fragment,m),m.forEach(g),_.forEach(g),Q(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",o=""+(n[0]+" mt-50 svelte-110abfo"))},m(r,u){F(r,t,u),F(r,e,u),w(e,l),W(a,l,null),W(i,r,u),s=!0},p(r,[u]){(!s||u&1&&o!==(o=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",o)},i(r){s||(V(a.$$.fragment,r),V(i.$$.fragment,r),s=!0)},o(r){P(a.$$.fragment,r),P(i.$$.fragment,r),s=!1},d(r){r&&g(t),r&&g(e),X(a),X(i,r)}}}function rt(n,t,e){let{class:l=""}=t;return n.$$set=a=>{"class"in a&&e(0,l=a.class)},[l]}class ft extends H{constructor(t){super();j(this,t,rt,it,K,{class:0})}}export{ft as default};