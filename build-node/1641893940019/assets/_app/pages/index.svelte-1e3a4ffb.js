import{K as Re,C as ze,S as H,i as j,s as K,e as y,c as E,a as T,d as k,b as h,f as A,D as C,L as S,M as B,N as be,t as x,g as ee,O as D,h as te,P as Z,Q as He,E as L,R as ge,T as G,U as pe,v as Y,w as Q,x as W,V as le,W as se,X as ne,p as V,Y as ae,Z as ye,n as P,_ as Ee,A as X,m as oe,o as ie,$ as je,a0 as re,a1 as ce,a2 as Ke,a3 as Te,a4 as Ye,a5 as Oe,a6 as we,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const M=ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ce=Re(M,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=n.filter(s=>s.color).map(s=>s.color).concat(e),i=a.filter((s,r)=>a.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function De(n,t,e){const l=n.slice();return l[19]=t[e],l}function Ie(n,t){let e,l,a,o,i;return{key:n,first:null,c(){e=y("li"),l=y("button"),this.h()},l(s){e=E(s,"LI",{class:!0});var r=T(e);l=E(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(k),r.forEach(k),this.h()},h(){h(l,"class","task__color-btn svelte-47bkb3"),h(l,"style",a=`background-color: ${t[19].color}`),h(e,"class","task__color-item svelte-47bkb3"),this.first=e},m(s,r){A(s,e,r),C(e,l),o||(i=S(l,"click",B(function(){be(t[12](t[19].color))&&t[12](t[19].color).apply(this,arguments)})),o=!0)},p(s,r){t=s,r&260&&a!==(a=`background-color: ${t[19].color}`)&&h(l,"style",a)},d(s){s&&k(e),o=!1,i()}}}function Ze(n){let t,e,l,a,o,i,s,r,f,_,v,b,w,d,c=[],u=new Map,m,N,q,F,z,g,I=n[8].filter(n[17]);const R=p=>p[19].id;for(let p=0;p<I.length;p+=1){let O=De(n,I,p),U=R(O);u.set(U,c[p]=Ie(U,O))}return{c(){t=y("div"),e=y("div"),l=y("p"),a=x(n[1]),o=y("div"),i=y("div"),s=y("span"),r=x(n[4]),f=y("div"),_=y("button"),v=y("span"),b=y("button"),w=y("span"),d=y("ul");for(let p=0;p<c.length;p+=1)c[p].c();N=y("button"),q=y("span"),this.h()},l(p){t=E(p,"DIV",{class:!0});var O=T(t);e=E(O,"DIV",{class:!0});var U=T(e);l=E(U,"P",{class:!0,contenteditable:!0});var ue=T(l);a=ee(ue,n[1]),ue.forEach(k),o=E(U,"DIV",{class:!0});var fe=T(o);i=E(fe,"DIV",{class:!0});var _e=T(i);s=E(_e,"SPAN",{class:!0});var de=T(s);r=ee(de,n[4]),de.forEach(k),_e.forEach(k),fe.forEach(k),U.forEach(k),f=E(O,"DIV",{class:!0});var J=T(f);_=E(J,"BUTTON",{class:!0});var he=T(_);v=E(he,"SPAN",{class:!0}),T(v).forEach(k),he.forEach(k),b=E(J,"BUTTON",{class:!0});var me=T(b);w=E(me,"SPAN",{class:!0}),T(w).forEach(k),me.forEach(k),J.forEach(k),d=E(O,"UL",{class:!0,style:!0});var ve=T(d);for(let $=0;$<c.length;$+=1)c[$].l(ve);ve.forEach(k),N=E(O,"BUTTON",{class:!0});var ke=T(N);q=E(ke,"SPAN",{class:!0}),T(q).forEach(k),ke.forEach(k),O.forEach(k),this.h()},h(){h(l,"class","task__main-content svelte-47bkb3"),h(l,"contenteditable",n[7]),h(s,"class","svelte-47bkb3"),h(i,"class","task__info-content svelte-47bkb3"),h(o,"class","task__info svelte-47bkb3"),h(e,"class","task__main svelte-47bkb3"),h(v,"class","svg-image-del svelte-47bkb3"),h(_,"class","task__menu-btn task__menu-btn_del svelte-47bkb3"),h(w,"class","svg-image-pen svelte-47bkb3"),h(b,"class","task__menu-btn task__menu-btn_edit svelte-47bkb3"),D(b,"isSelect",n[7]),h(f,"class","task__circle task__menu svelte-47bkb3"),D(f,"isOpen",n[7]),h(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-47bkb3"),h(d,"style",m=`background-color: ${n[2]}`),D(d,"isOpen",n[7]),h(q,"class","svelte-47bkb3"),h(N,"class","task__info-open svelte-47bkb3"),D(N,"isHidden",n[7]),h(t,"class",F="task "+n[0]+" svelte-47bkb3"),D(t,"isDisabled",n[3]),D(t,"isOpen",n[5])},m(p,O){A(p,t,O),C(t,e),C(e,l),C(l,a),C(e,o),C(o,i),C(i,s),C(s,r),n[16](o),C(t,f),C(f,_),C(_,v),C(f,b),C(b,w),C(t,d);for(let U=0;U<c.length;U+=1)c[U].m(d,null);C(t,N),C(N,q),z||(g=[S(l,"input",n[15]),S(e,"click",n[9]),S(_,"click",B(n[10])),S(b,"click",B(n[11])),S(N,"click",B(n[13]))],z=!0)},p(p,[O]){O&2&&te(a,p[1]),O&128&&h(l,"contenteditable",p[7]),O&16&&te(r,p[4]),O&128&&D(b,"isSelect",p[7]),O&128&&D(f,"isOpen",p[7]),O&4356&&(I=p[8].filter(p[17]),c=Z(c,O,R,1,p,I,u,d,He,Ie,null,De)),O&4&&m!==(m=`background-color: ${p[2]}`)&&h(d,"style",m),O&128&&D(d,"isOpen",p[7]),O&128&&D(N,"isHidden",p[7]),O&1&&F!==(F="task "+p[0]+" svelte-47bkb3")&&h(t,"class",F),O&9&&D(t,"isDisabled",p[3]),O&33&&D(t,"isOpen",p[5])},i:L,o:L,d(p){p&&k(t),n[16](null);for(let O=0;O<c.length;O+=1)c[O].d();z=!1,ge(g)}}}function Ge(n,t,e){let l,a;G(n,M,g=>e(18,l=g)),G(n,Ce,g=>e(8,a=g));let{class:o=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,v=!1,b,w=!1;const d=()=>{if(w===!1){let g=l.map(I=>(f===I.id&&(I.done=!I.done),I));M.set(g)}},c=()=>{let g=l.filter(I=>I.id!=f);M.set(g)},u=()=>{e(7,w=!w)},m=g=>{let I=l.map(R=>(f===R.id&&(R.color=g),R));M.set(I)},N=()=>{e(5,v=!v);let g=0;b.childNodes.forEach(I=>g+=I.clientHeight),b.style.setProperty("--taskInfoHeight",`${v?g:0}px`)},q=()=>console.log("input");function F(g){pe[g?"unshift":"push"](()=>{b=g,e(6,b)})}const z=g=>g.color!=s;return n.$$set=g=>{"class"in g&&e(0,o=g.class),"text"in g&&e(1,i=g.text),"color"in g&&e(2,s=g.color),"disabled"in g&&e(3,r=g.disabled),"id"in g&&e(14,f=g.id),"date"in g&&e(4,_=g.date)},[o,i,s,r,_,v,b,w,a,d,c,u,m,N,f,q,F,z]}class Ne extends H{constructor(t){super();j(this,t,Ge,Ze,K,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Fe(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ae(n,t,e){const l=n.slice();return l[4]=t[e],l}function Se(n,t){let e,l,a,o,i,s=L,r;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(f){e=E(f,"LI",{class:!0});var _=T(e);Q(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),W(l,e,null),r=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){le(e),s(),se(e,i)},a(){s(),s=ne(e,i,re,{duration:300})},i(f){r||(V(l.$$.fragment,f),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(f){P(l.$$.fragment,f),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),X(l),f&&o&&o.end()}}}function qe(n,t){let e,l,a,o,i,s=L,r;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(f){e=E(f,"LI",{class:!0});var _=T(e);Q(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),W(l,e,null),r=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){le(e),s(),se(e,i)},a(){s(),s=ne(e,i,re,{duration:300})},i(f){r||(V(l.$$.fragment,f),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(f){P(l.$$.fragment,f),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),X(l),f&&o&&o.end()}}}function Je(n){let t,e,l,a=[],o=new Map,i,s=[],r=new Map,f,_,v=n[1].filter(Ue);const b=c=>c[4].id;for(let c=0;c<v.length;c+=1){let u=Ae(n,v,c),m=b(u);o.set(m,a[c]=Se(m,u))}let w=n[1].filter(Ve);const d=c=>c[4].id;for(let c=0;c<w.length;c+=1){let u=Fe(n,w,c),m=d(u);r.set(m,s[c]=qe(m,u))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let c=0;c<a.length;c+=1)a[c].c();i=y("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=E(c,"SECTION",{class:!0});var u=T(t);e=E(u,"DIV",{class:!0});var m=T(e);l=E(m,"UL",{class:!0});var N=T(l);for(let F=0;F<a.length;F+=1)a[F].l(N);N.forEach(k),i=E(m,"UL",{class:!0});var q=T(i);for(let F=0;F<s.length;F+=1)s[F].l(q);q.forEach(k),m.forEach(k),u.forEach(k),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",f="task-section "+n[0]+" svelte-q8mvyt")},m(c,u){A(c,t,u),C(t,e),C(e,l);for(let m=0;m<a.length;m+=1)a[m].m(l,null);C(e,i);for(let m=0;m<s.length;m+=1)s[m].m(i,null);_=!0},p(c,[u]){if(u&2){v=c[1].filter(Ue),oe();for(let m=0;m<a.length;m+=1)a[m].r();a=Z(a,u,b,1,c,v,o,l,ce,Se,null,Ae);for(let m=0;m<a.length;m+=1)a[m].a();ie()}if(u&2){w=c[1].filter(Ve),oe();for(let m=0;m<s.length;m+=1)s[m].r();s=Z(s,u,d,1,c,w,r,i,ce,qe,null,Fe);for(let m=0;m<s.length;m+=1)s[m].a();ie()}(!_||u&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",f)},i(c){if(!_){for(let u=0;u<v.length;u+=1)V(a[u]);for(let u=0;u<w.length;u+=1)V(s[u]);_=!0}},o(c){for(let u=0;u<a.length;u+=1)P(a[u]);for(let u=0;u<s.length;u+=1)P(s[u]);_=!1},d(c){c&&k(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const Ue=n=>!n.done,Ve=n=>n.done;function $e(n,t,e){let l;G(n,M,s=>e(1,l=s));let{class:a=""}=t;const[o,i]=je({duration:s=>Math.sqrt(s*200),fallback(s,r){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ke,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return n.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,l,o,i]}class xe extends H{constructor(t){super();j(this,t,$e,Je,K,{class:0})}}const et=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Pe(n){let t,e,l,a=n[2].text&&Be(n);return{c(){t=y("button"),a&&a.c(),this.h()},l(o){t=E(o,"BUTTON",{class:!0});var i=T(t);a&&a.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(o,i){A(o,t,i),a&&a.m(t,null),e||(l=S(t,"click",B(n[6])),e=!0)},p(o,i){o[2].text?a?a.p(o,i):(a=Be(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(o){o&&k(t),a&&a.d(),e=!1,l()}}}function Be(n){let t=n[2].text+"",e;return{c(){e=x(t)},l(l){e=ee(l,t)},m(l,a){A(l,e,a)},p(l,a){a&4&&t!==(t=l[2].text+"")&&te(e,t)},d(l){l&&k(e)}}}function tt(n){let t,e,l,a,o,i=n[2]&&Pe(n);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var r=T(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",n[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",n[5])},m(s,r){A(s,t,r),C(t,e),Te(e,n[4]),i&&i.m(t,null),n[11](t),a||(o=[S(e,"input",n[9]),S(e,"input",n[7]),S(e,"keydown",n[10])],a=!0)},p(s,[r]){r&2&&h(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&Te(e,s[4]),s[2]?i?i.p(s,r):(i=Pe(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&D(t,"isError",s[5])},i:L,o:L,d(s){s&&k(t),i&&i.d(),n[11](null),a=!1,ge(o)}}}function lt(n,t,e){let{class:l=""}=t,{placeholder:a="Placeholer"}=t,{btn:o=null}=t,i,s,r=!1;const f=Ye(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,r=!0)},v=()=>{e(5,r=!1)},b=u=>{let m=u.key;m==="Control"&&f("color"),m==="Enter"&&_()};function w(){s=this.value,e(4,s)}const d=u=>b(u);function c(u){pe[u?"unshift":"push"](()=>{i=u,e(3,i)})}return n.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,a=u.placeholder),"btn"in u&&e(2,o=u.btn)},[l,a,o,i,s,r,_,v,b,w,d,c]}class st extends H{constructor(t){super();j(this,t,lt,tt,K,{class:0,placeholder:1,btn:2})}}function Le(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function Me(n,t){let e,l,a,o,i=L,s,r,f;return{key:n,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){A(_,e,v),s=!0,r||(f=S(e,"click",B(function(){be(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!s||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){le(e),i(),se(e,o)},a(){i(),i=ne(e,o,re,{})},i(_){s||(ae(()=>{a||(a=Oe(e,we,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Oe(e,we,{},!1)),a.run(0),s=!1},d(_){_&&k(e),_&&a&&a.end(),r=!1,f()}}}function nt(n){let t,e,l,a,o=[],i=new Map,s,r,f,_,v,b=n[3].filter(n[7]);const w=d=>d[9].id;for(let d=0;d<b.length;d+=1){let c=Le(n,b,d),u=w(c);i.set(u,o[d]=Me(u,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",n[8]),s.$on("submit",n[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let d=0;d<o.length;d+=1)o[d].c();Y(s.$$.fragment),this.h()},l(d){t=E(d,"DIV",{class:!0});var c=T(t);e=E(c,"DIV",{class:!0});var u=T(e);l=E(u,"SPAN",{class:!0,style:!0}),T(l).forEach(k);for(let m=0;m<o.length;m+=1)o[m].l(u);u.forEach(k),Q(s.$$.fragment,c),c.forEach(k),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",a=`color: ${n[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",n[2]),h(t,"class",r="add-todo "+n[0]+" svelte-1hafqlz")},m(d,c){A(d,t,c),C(t,e),C(e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);W(s,t,null),f=!0,_||(v=S(l,"click",B(n[6])),_=!0)},p(d,[c]){if((!f||c&2&&a!==(a=`color: ${d[1]}`))&&h(l,"style",a),c&42){b=d[3].filter(d[7]),oe();for(let u=0;u<o.length;u+=1)o[u].r();o=Z(o,c,w,1,d,b,i,e,ce,Me,null,Le);for(let u=0;u<o.length;u+=1)o[u].a();ie()}c&4&&D(e,"isOpen",d[2]),(!f||c&1&&r!==(r="add-todo "+d[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(d){if(!f){for(let c=0;c<b.length;c+=1)V(o[c]);V(s.$$.fragment,d),f=!0}},o(d){for(let c=0;c<o.length;c+=1)P(o[c]);P(s.$$.fragment,d),f=!1},d(d){d&&k(t);for(let c=0;c<o.length;c+=1)o[c].d();X(s),_=!1,v()}}}function at(n,t,e){let l;G(n,Ce,b=>e(3,l=b));let{class:a=""}=t,o="#0029FF",i=!1;const s=b=>{let w={id:Date.now(),text:b.detail.value,color:o,done:!1,date:et(new Date,"dot")};M.update(d=>d=[w,...d])},r=b=>b&&e(1,o=b),f=()=>e(2,i=!i),_=b=>b.color!=o,v=()=>e(2,i=!i);return n.$$set=b=>{"class"in b&&e(0,a=b.class)},[a,o,i,l,s,r,f,_,v]}class ot extends H{constructor(t){super();j(this,t,at,nt,K,{class:0})}}function it(n){let t,e,l,a,o,i,s;return a=new ot({}),i=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=y("section"),l=y("div"),Y(a.$$.fragment),Y(i.$$.fragment),this.h()},l(r){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Xe(r),e=E(r,"SECTION",{class:!0});var _=T(e);l=E(_,"DIV",{class:!0});var v=T(l);Q(a.$$.fragment,v),v.forEach(k),_.forEach(k),Q(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",o=""+(n[0]+" mt-50 svelte-110abfo"))},m(r,f){A(r,t,f),A(r,e,f),C(e,l),W(a,l,null),W(i,r,f),s=!0},p(r,[f]){(!s||f&1&&o!==(o=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",o)},i(r){s||(V(a.$$.fragment,r),V(i.$$.fragment,r),s=!0)},o(r){P(a.$$.fragment,r),P(i.$$.fragment,r),s=!1},d(r){r&&k(t),r&&k(e),X(a),X(i,r)}}}function rt(n,t,e){let{class:l=""}=t;return n.$$set=a=>{"class"in a&&e(0,l=a.class)},[l]}class ut extends H{constructor(t){super();j(this,t,rt,it,K,{class:0})}}export{ut as default};