import{K as Me,C as Re,S as R,i as j,s as H,e as b,c as y,a as E,d as k,b as v,f as F,D as z,L as A,M as B,N as ge,t as $,g as x,O as D,h as ee,P as X,Q as je,E as L,R as pe,T as Z,U as be,v as K,w as Y,x as Q,V as te,W as le,X as se,p as V,Y as ae,Z as ye,n as P,_ as Ee,A as W,m as ne,o as oe,$ as He,a0 as ie,a1 as re,a2 as Ke,a3 as Te,a4 as Ye,a5 as Oe,a6 as ze,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const M=Re([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),we=Me(M,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=n.filter(s=>s.color).map(s=>s.color).concat(e),i=a.filter((s,r)=>a.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function Ce(n,t,e){const l=n.slice();return l[18]=t[e],l}function De(n,t){let e,l,a,o,i;return{key:n,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var r=E(e);l=y(r,"BUTTON",{class:!0,style:!0}),E(l).forEach(k),r.forEach(k),this.h()},h(){v(l,"class","task__color-btn svelte-1sz3iak"),v(l,"style",a=`background-color: ${t[18].color}`),v(e,"class","task__color-item svelte-1sz3iak"),this.first=e},m(s,r){F(s,e,r),z(e,l),o||(i=A(l,"click",B(function(){ge(t[12](t[18].color))&&t[12](t[18].color).apply(this,arguments)})),o=!0)},p(s,r){t=s,r&260&&a!==(a=`background-color: ${t[18].color}`)&&v(l,"style",a)},d(s){s&&k(e),o=!1,i()}}}function Ze(n){let t,e,l,a,o,i,s,r,f,_,m,g,w,d,c=[],u=new Map,h,N,S,C,p,I,U=n[8].filter(n[16]);const ce=T=>T[18].id;for(let T=0;T<U.length;T+=1){let O=Ce(n,U,T),q=ce(O);u.set(q,c[T]=De(q,O))}return{c(){t=b("div"),e=b("div"),l=b("p"),a=$(n[1]),o=b("div"),i=b("div"),s=b("span"),r=$(n[4]),f=b("div"),_=b("button"),m=b("span"),g=b("button"),w=b("span"),d=b("ul");for(let T=0;T<c.length;T+=1)c[T].c();N=b("button"),S=b("span"),this.h()},l(T){t=y(T,"DIV",{class:!0});var O=E(t);e=y(O,"DIV",{class:!0});var q=E(e);l=y(q,"P",{class:!0});var ue=E(l);a=x(ue,n[1]),ue.forEach(k),o=y(q,"DIV",{class:!0});var fe=E(o);i=y(fe,"DIV",{class:!0});var _e=E(i);s=y(_e,"SPAN",{class:!0});var de=E(s);r=x(de,n[4]),de.forEach(k),_e.forEach(k),fe.forEach(k),q.forEach(k),f=y(O,"DIV",{class:!0});var G=E(f);_=y(G,"BUTTON",{class:!0});var he=E(_);m=y(he,"SPAN",{class:!0}),E(m).forEach(k),he.forEach(k),g=y(G,"BUTTON",{class:!0});var ve=E(g);w=y(ve,"SPAN",{class:!0}),E(w).forEach(k),ve.forEach(k),G.forEach(k),d=y(O,"UL",{class:!0,style:!0});var me=E(d);for(let J=0;J<c.length;J+=1)c[J].l(me);me.forEach(k),N=y(O,"BUTTON",{class:!0});var ke=E(N);S=y(ke,"SPAN",{class:!0}),E(S).forEach(k),ke.forEach(k),O.forEach(k),this.h()},h(){v(l,"class","svelte-1sz3iak"),v(s,"class","svelte-1sz3iak"),v(i,"class","task__info-content svelte-1sz3iak"),v(o,"class","task__info svelte-1sz3iak"),v(e,"class","task__main svelte-1sz3iak"),v(m,"class","svg-image-del svelte-1sz3iak"),v(_,"class","task__menu-btn task__menu-btn_del svelte-1sz3iak"),v(w,"class","svg-image-pen svelte-1sz3iak"),v(g,"class","task__menu-btn task__menu-btn_edit svelte-1sz3iak"),D(g,"isSelect",n[7]),v(f,"class","task__circle task__menu svelte-1sz3iak"),D(f,"isOpen",n[7]),v(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1sz3iak"),v(d,"style",h=`background-color: ${n[2]}`),D(d,"isOpen",n[7]),v(S,"class","svelte-1sz3iak"),v(N,"class","task__info-open svelte-1sz3iak"),v(t,"class",C="task "+n[0]+" svelte-1sz3iak"),D(t,"isDisabled",n[3]),D(t,"isOpen",n[5])},m(T,O){F(T,t,O),z(t,e),z(e,l),z(l,a),z(e,o),z(o,i),z(i,s),z(s,r),n[15](o),z(t,f),z(f,_),z(_,m),z(f,g),z(g,w),z(t,d);for(let q=0;q<c.length;q+=1)c[q].m(d,null);z(t,N),z(N,S),p||(I=[A(e,"click",n[9]),A(_,"click",B(n[10])),A(g,"click",B(n[11])),A(N,"click",B(n[13]))],p=!0)},p(T,[O]){O&2&&ee(a,T[1]),O&16&&ee(r,T[4]),O&128&&D(g,"isSelect",T[7]),O&128&&D(f,"isOpen",T[7]),O&4356&&(U=T[8].filter(T[16]),c=X(c,O,ce,1,T,U,u,d,je,De,null,Ce)),O&4&&h!==(h=`background-color: ${T[2]}`)&&v(d,"style",h),O&128&&D(d,"isOpen",T[7]),O&1&&C!==(C="task "+T[0]+" svelte-1sz3iak")&&v(t,"class",C),O&9&&D(t,"isDisabled",T[3]),O&33&&D(t,"isOpen",T[5])},i:L,o:L,d(T){T&&k(t),n[15](null);for(let O=0;O<c.length;O+=1)c[O].d();p=!1,pe(I)}}}function Ge(n,t,e){let l,a;Z(n,M,p=>e(17,l=p)),Z(n,we,p=>e(8,a=p));let{class:o=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,g,w=!1;const d=()=>{let p=l.map(I=>(f===I.id&&(I.done=!I.done),I));M.set(p)},c=()=>{let p=l.filter(I=>I.id!=f);M.set(p)},u=()=>{e(7,w=!w)},h=p=>{let I=l.map(U=>(f===U.id&&(U.color=p),U));M.set(I)},N=()=>{e(5,m=!m);let p=0;g.childNodes.forEach(I=>p+=I.clientHeight),g.style.setProperty("--taskInfoHeight",`${m?p:0}px`)};function S(p){be[p?"unshift":"push"](()=>{g=p,e(6,g)})}const C=p=>p.color!=s;return n.$$set=p=>{"class"in p&&e(0,o=p.class),"text"in p&&e(1,i=p.text),"color"in p&&e(2,s=p.color),"disabled"in p&&e(3,r=p.disabled),"id"in p&&e(14,f=p.id),"date"in p&&e(4,_=p.date)},[o,i,s,r,_,m,g,w,a,d,c,u,h,N,f,S,C]}class Ie extends R{constructor(t){super();j(this,t,Ge,Ze,H,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Ne(n,t,e){const l=n.slice();return l[4]=t[e],l}function Fe(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ae(n,t){let e,l,a,o,i,s=L,r;return l=new Ie({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);Y(l.$$.fragment,_),_.forEach(k),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,_){F(f,e,_),Q(l,e,null),r=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){te(e),s(),le(e,i)},a(){s(),s=se(e,i,ie,{duration:300})},i(f){r||(V(l.$$.fragment,f),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(f){P(l.$$.fragment,f),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),W(l),f&&o&&o.end()}}}function Se(n,t){let e,l,a,o,i,s=L,r;return l=new Ie({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);Y(l.$$.fragment,_),_.forEach(k),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,_){F(f,e,_),Q(l,e,null),r=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){te(e),s(),le(e,i)},a(){s(),s=se(e,i,ie,{duration:300})},i(f){r||(V(l.$$.fragment,f),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(f){P(l.$$.fragment,f),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),W(l),f&&o&&o.end()}}}function Je(n){let t,e,l,a=[],o=new Map,i,s=[],r=new Map,f,_,m=n[1].filter(qe);const g=c=>c[4].id;for(let c=0;c<m.length;c+=1){let u=Fe(n,m,c),h=g(u);o.set(h,a[c]=Ae(h,u))}let w=n[1].filter(Ue);const d=c=>c[4].id;for(let c=0;c<w.length;c+=1){let u=Ne(n,w,c),h=d(u);r.set(h,s[c]=Se(h,u))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let c=0;c<a.length;c+=1)a[c].c();i=b("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=y(c,"SECTION",{class:!0});var u=E(t);e=y(u,"DIV",{class:!0});var h=E(e);l=y(h,"UL",{class:!0});var N=E(l);for(let C=0;C<a.length;C+=1)a[C].l(N);N.forEach(k),i=y(h,"UL",{class:!0});var S=E(i);for(let C=0;C<s.length;C+=1)s[C].l(S);S.forEach(k),h.forEach(k),u.forEach(k),this.h()},h(){v(l,"class","task-section__col"),v(i,"class","task-section__col"),v(e,"class","container task-section__grid svelte-q8mvyt"),v(t,"class",f="task-section "+n[0]+" svelte-q8mvyt")},m(c,u){F(c,t,u),z(t,e),z(e,l);for(let h=0;h<a.length;h+=1)a[h].m(l,null);z(e,i);for(let h=0;h<s.length;h+=1)s[h].m(i,null);_=!0},p(c,[u]){if(u&2){m=c[1].filter(qe),ne();for(let h=0;h<a.length;h+=1)a[h].r();a=X(a,u,g,1,c,m,o,l,re,Ae,null,Fe);for(let h=0;h<a.length;h+=1)a[h].a();oe()}if(u&2){w=c[1].filter(Ue),ne();for(let h=0;h<s.length;h+=1)s[h].r();s=X(s,u,d,1,c,w,r,i,re,Se,null,Ne);for(let h=0;h<s.length;h+=1)s[h].a();oe()}(!_||u&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&v(t,"class",f)},i(c){if(!_){for(let u=0;u<m.length;u+=1)V(a[u]);for(let u=0;u<w.length;u+=1)V(s[u]);_=!0}},o(c){for(let u=0;u<a.length;u+=1)P(a[u]);for(let u=0;u<s.length;u+=1)P(s[u]);_=!1},d(c){c&&k(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const qe=n=>!n.done,Ue=n=>n.done;function $e(n,t,e){let l;Z(n,M,s=>e(1,l=s));let{class:a=""}=t;const[o,i]=He({duration:s=>Math.sqrt(s*200),fallback(s,r){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ke,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return n.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,l,o,i]}class xe extends R{constructor(t){super();j(this,t,$e,Je,H,{class:0})}}const et=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Ve(n){let t,e,l,a=n[2].text&&Pe(n);return{c(){t=b("button"),a&&a.c(),this.h()},l(o){t=y(o,"BUTTON",{class:!0});var i=E(t);a&&a.l(i),i.forEach(k),this.h()},h(){v(t,"class","btn svelte-1yy2xse")},m(o,i){F(o,t,i),a&&a.m(t,null),e||(l=A(t,"click",B(n[6])),e=!0)},p(o,i){o[2].text?a?a.p(o,i):(a=Pe(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(o){o&&k(t),a&&a.d(),e=!1,l()}}}function Pe(n){let t=n[2].text+"",e;return{c(){e=$(t)},l(l){e=x(l,t)},m(l,a){F(l,e,a)},p(l,a){a&4&&t!==(t=l[2].text+"")&&ee(e,t)},d(l){l&&k(e)}}}function tt(n){let t,e,l,a,o,i=n[2]&&Ve(n);return{c(){t=b("div"),e=b("input"),i&&i.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var r=E(t);e=y(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){v(e,"placeholder",n[1]),v(e,"class","svelte-1yy2xse"),v(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",n[5])},m(s,r){F(s,t,r),z(t,e),Te(e,n[4]),i&&i.m(t,null),n[11](t),a||(o=[A(e,"input",n[9]),A(e,"input",n[7]),A(e,"keydown",n[10])],a=!0)},p(s,[r]){r&2&&v(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&Te(e,s[4]),s[2]?i?i.p(s,r):(i=Ve(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&v(t,"class",l),r&37&&D(t,"isError",s[5])},i:L,o:L,d(s){s&&k(t),i&&i.d(),n[11](null),a=!1,pe(o)}}}function lt(n,t,e){let{class:l=""}=t,{placeholder:a="Placeholer"}=t,{btn:o=null}=t,i,s,r=!1;const f=Ye(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,r=!0)},m=()=>{e(5,r=!1)},g=u=>{let h=u.key;h==="Control"&&f("color"),h==="Enter"&&_()};function w(){s=this.value,e(4,s)}const d=u=>g(u);function c(u){be[u?"unshift":"push"](()=>{i=u,e(3,i)})}return n.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,a=u.placeholder),"btn"in u&&e(2,o=u.btn)},[l,a,o,i,s,r,_,m,g,w,d,c]}class st extends R{constructor(t){super();j(this,t,lt,tt,H,{class:0,placeholder:1,btn:2})}}function Be(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function Le(n,t){let e,l,a,o,i=L,s,r,f;return{key:n,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),E(e).forEach(k),this.h()},h(){v(e,"class","add-todo__color svelte-1hafqlz"),v(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){F(_,e,m),s=!0,r||(f=A(e,"click",B(function(){ge(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!s||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&v(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){te(e),i(),le(e,o)},a(){i(),i=se(e,o,ie,{})},i(_){s||(ae(()=>{a||(a=Oe(e,ze,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Oe(e,ze,{},!1)),a.run(0),s=!1},d(_){_&&k(e),_&&a&&a.end(),r=!1,f()}}}function at(n){let t,e,l,a,o=[],i=new Map,s,r,f,_,m,g=n[3].filter(n[7]);const w=d=>d[9].id;for(let d=0;d<g.length;d+=1){let c=Be(n,g,d),u=w(c);i.set(u,o[d]=Le(u,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",n[8]),s.$on("submit",n[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let d=0;d<o.length;d+=1)o[d].c();K(s.$$.fragment),this.h()},l(d){t=y(d,"DIV",{class:!0});var c=E(t);e=y(c,"DIV",{class:!0});var u=E(e);l=y(u,"SPAN",{class:!0,style:!0}),E(l).forEach(k);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(k),Y(s.$$.fragment,c),c.forEach(k),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),v(l,"style",a=`color: ${n[1]}`),v(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",n[2]),v(t,"class",r="add-todo "+n[0]+" svelte-1hafqlz")},m(d,c){F(d,t,c),z(t,e),z(e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);Q(s,t,null),f=!0,_||(m=A(l,"click",B(n[6])),_=!0)},p(d,[c]){if((!f||c&2&&a!==(a=`color: ${d[1]}`))&&v(l,"style",a),c&42){g=d[3].filter(d[7]),ne();for(let u=0;u<o.length;u+=1)o[u].r();o=X(o,c,w,1,d,g,i,e,re,Le,null,Be);for(let u=0;u<o.length;u+=1)o[u].a();oe()}c&4&&D(e,"isOpen",d[2]),(!f||c&1&&r!==(r="add-todo "+d[0]+" svelte-1hafqlz"))&&v(t,"class",r)},i(d){if(!f){for(let c=0;c<g.length;c+=1)V(o[c]);V(s.$$.fragment,d),f=!0}},o(d){for(let c=0;c<o.length;c+=1)P(o[c]);P(s.$$.fragment,d),f=!1},d(d){d&&k(t);for(let c=0;c<o.length;c+=1)o[c].d();W(s),_=!1,m()}}}function nt(n,t,e){let l;Z(n,we,g=>e(3,l=g));let{class:a=""}=t,o="#0029FF",i=!1;const s=g=>{let w={id:Date.now(),text:g.detail.value,color:o,done:!1,date:et(new Date,"dot")};M.update(d=>d=[w,...d])},r=g=>g&&e(1,o=g),f=()=>e(2,i=!i),_=g=>g.color!=o,m=()=>e(2,i=!i);return n.$$set=g=>{"class"in g&&e(0,a=g.class)},[a,o,i,l,s,r,f,_,m]}class ot extends R{constructor(t){super();j(this,t,nt,at,H,{class:0})}}function it(n){let t,e,l,a,o,i,s;return a=new ot({}),i=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=b("section"),l=b("div"),K(a.$$.fragment),K(i.$$.fragment),this.h()},l(r){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Xe(r),e=y(r,"SECTION",{class:!0});var _=E(e);l=y(_,"DIV",{class:!0});var m=E(l);Y(a.$$.fragment,m),m.forEach(k),_.forEach(k),Y(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(e,"class",o=""+(n[0]+" mt-50 svelte-110abfo"))},m(r,f){F(r,t,f),F(r,e,f),z(e,l),Q(a,l,null),Q(i,r,f),s=!0},p(r,[f]){(!s||f&1&&o!==(o=""+(r[0]+" mt-50 svelte-110abfo")))&&v(e,"class",o)},i(r){s||(V(a.$$.fragment,r),V(i.$$.fragment,r),s=!0)},o(r){P(a.$$.fragment,r),P(i.$$.fragment,r),s=!1},d(r){r&&k(t),r&&k(e),W(a),W(i,r)}}}function rt(n,t,e){let{class:l=""}=t;return n.$$set=a=>{"class"in a&&e(0,l=a.class)},[l]}class ut extends R{constructor(t){super();j(this,t,rt,it,H,{class:0})}}export{ut as default};