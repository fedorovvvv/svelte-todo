import{K as Re,C as ze,S as z,i as H,s as j,e as b,c as y,a as T,d as m,b as v,f as A,D as w,L as S,M as L,N as pe,t as $,g as x,O as D,h as ee,P as X,Q as He,E as M,R as ke,T as Z,U as be,v as K,w as Y,x as Q,V as te,W as le,X as se,p as P,Y as ne,Z as ye,n as B,_ as Ee,A as W,m as ae,o as oe,$ as je,a0 as re,a1 as ie,a2 as Ke,a3 as Te,a4 as Ye,a5 as Oe,a6 as we,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const R=ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ce=Re(R,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=n.filter(s=>s.color).map(s=>s.color).concat(e),r=a.filter((s,i)=>a.indexOf(s)===i).map((s,i)=>({id:i,color:s}));t(r)});function De(n,t,e){const l=n.slice();return l[18]=t[e],l}function Ie(n,t){let e,l,a,o,r;return{key:n,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var i=T(e);l=y(i,"BUTTON",{class:!0,style:!0}),T(l).forEach(m),i.forEach(m),this.h()},h(){v(l,"class","task__color-btn svelte-fvgxph"),v(l,"style",a=`background-color: ${t[18].color}`),v(e,"class","task__color-item svelte-fvgxph"),this.first=e},m(s,i){A(s,e,i),w(e,l),o||(r=S(l,"click",L(function(){pe(t[12](t[18].color))&&t[12](t[18].color).apply(this,arguments)})),o=!0)},p(s,i){t=s,i&260&&a!==(a=`background-color: ${t[18].color}`)&&v(l,"style",a)},d(s){s&&m(e),o=!1,r()}}}function Ze(n){let t,e,l,a,o,r,s,i,u,_,g,p,C,d,c=[],f=new Map,h,I,q,N,k,F,V=n[8].filter(n[16]);const ce=E=>E[18].id;for(let E=0;E<V.length;E+=1){let O=De(n,V,E),U=ce(O);f.set(U,c[E]=Ie(U,O))}return{c(){t=b("div"),e=b("div"),l=b("p"),a=$(n[1]),o=b("div"),r=b("div"),s=b("span"),i=$(n[4]),u=b("div"),_=b("button"),g=b("span"),p=b("button"),C=b("span"),d=b("ul");for(let E=0;E<c.length;E+=1)c[E].c();I=b("button"),q=b("span"),this.h()},l(E){t=y(E,"DIV",{class:!0});var O=T(t);e=y(O,"DIV",{class:!0});var U=T(e);l=y(U,"P",{class:!0});var fe=T(l);a=x(fe,n[1]),fe.forEach(m),o=y(U,"DIV",{class:!0});var ue=T(o);r=y(ue,"DIV",{class:!0});var _e=T(r);s=y(_e,"SPAN",{class:!0});var de=T(s);i=x(de,n[4]),de.forEach(m),_e.forEach(m),ue.forEach(m),U.forEach(m),u=y(O,"DIV",{class:!0});var G=T(u);_=y(G,"BUTTON",{class:!0});var he=T(_);g=y(he,"SPAN",{class:!0}),T(g).forEach(m),he.forEach(m),p=y(G,"BUTTON",{class:!0});var ve=T(p);C=y(ve,"SPAN",{class:!0}),T(C).forEach(m),ve.forEach(m),G.forEach(m),d=y(O,"UL",{class:!0,style:!0});var ge=T(d);for(let J=0;J<c.length;J+=1)c[J].l(ge);ge.forEach(m),I=y(O,"BUTTON",{class:!0});var me=T(I);q=y(me,"SPAN",{class:!0}),T(q).forEach(m),me.forEach(m),O.forEach(m),this.h()},h(){v(l,"class","svelte-fvgxph"),v(s,"class","svelte-fvgxph"),v(r,"class","task__info-content svelte-fvgxph"),v(o,"class","task__info svelte-fvgxph"),v(e,"class","task__main svelte-fvgxph"),v(g,"class","svg-image-del svelte-fvgxph"),v(_,"class","task__menu-btn task__menu-btn_del svelte-fvgxph"),v(C,"class","svg-image-pen svelte-fvgxph"),v(p,"class","task__menu-btn task__menu-btn_edit svelte-fvgxph"),D(p,"isSelect",n[7]),v(u,"class","task__circle task__menu svelte-fvgxph"),D(u,"isOpen",n[7]),v(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-fvgxph"),v(d,"style",h=`background-color: ${n[2]}`),D(d,"isOpen",n[7]),v(q,"class","svelte-fvgxph"),v(I,"class","task__info-open svelte-fvgxph"),D(I,"isHidden",n[7]),v(t,"class",N="task "+n[0]+" svelte-fvgxph"),D(t,"isDisabled",n[3]),D(t,"isOpen",n[5])},m(E,O){A(E,t,O),w(t,e),w(e,l),w(l,a),w(e,o),w(o,r),w(r,s),w(s,i),n[15](o),w(t,u),w(u,_),w(_,g),w(u,p),w(p,C),w(t,d);for(let U=0;U<c.length;U+=1)c[U].m(d,null);w(t,I),w(I,q),k||(F=[S(e,"click",n[9]),S(_,"click",L(n[10])),S(p,"click",L(n[11])),S(I,"click",L(n[13]))],k=!0)},p(E,[O]){O&2&&ee(a,E[1]),O&16&&ee(i,E[4]),O&128&&D(p,"isSelect",E[7]),O&128&&D(u,"isOpen",E[7]),O&4356&&(V=E[8].filter(E[16]),c=X(c,O,ce,1,E,V,f,d,He,Ie,null,De)),O&4&&h!==(h=`background-color: ${E[2]}`)&&v(d,"style",h),O&128&&D(d,"isOpen",E[7]),O&128&&D(I,"isHidden",E[7]),O&1&&N!==(N="task "+E[0]+" svelte-fvgxph")&&v(t,"class",N),O&9&&D(t,"isDisabled",E[3]),O&33&&D(t,"isOpen",E[5])},i:M,o:M,d(E){E&&m(t),n[15](null);for(let O=0;O<c.length;O+=1)c[O].d();k=!1,ke(F)}}}function Ge(n,t,e){let l,a;Z(n,R,k=>e(17,l=k)),Z(n,Ce,k=>e(8,a=k));let{class:o=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:i=!1}=t,{id:u=null}=t,{date:_=""}=t,g=!1,p,C=!1;const d=()=>{let k=l.map(F=>(u===F.id&&(F.done=!F.done),F));R.set(k)},c=()=>{let k=l.filter(F=>F.id!=u);R.set(k)},f=()=>{e(7,C=!C)},h=k=>{let F=l.map(V=>(u===V.id&&(V.color=k),V));R.set(F)},I=()=>{e(5,g=!g);let k=0;p.childNodes.forEach(F=>k+=F.clientHeight),p.style.setProperty("--taskInfoHeight",`${g?k:0}px`)};function q(k){be[k?"unshift":"push"](()=>{p=k,e(6,p)})}const N=k=>k.color!=s;return n.$$set=k=>{"class"in k&&e(0,o=k.class),"text"in k&&e(1,r=k.text),"color"in k&&e(2,s=k.color),"disabled"in k&&e(3,i=k.disabled),"id"in k&&e(14,u=k.id),"date"in k&&e(4,_=k.date)},[o,r,s,i,_,g,p,C,a,d,c,f,h,I,u,q,N]}class Ne extends z{constructor(t){super();H(this,t,Ge,Ze,j,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Fe(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ae(n,t,e){const l=n.slice();return l[4]=t[e],l}function Se(n,t){let e,l,a,o,r,s=M,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(u){e=y(u,"LI",{class:!0});var _=T(e);Y(l.$$.fragment,_),_.forEach(m),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(u,_){A(u,e,_),Q(l,e,null),i=!0},p(u,_){t=u;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),l.$set(g)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(u){i||(P(l.$$.fragment,u),ne(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),i=!0)},o(u){B(l.$$.fragment,u),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),i=!1},d(u){u&&m(e),W(l),u&&o&&o.end()}}}function qe(n,t){let e,l,a,o,r,s=M,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(u){e=y(u,"LI",{class:!0});var _=T(e);Y(l.$$.fragment,_),_.forEach(m),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(u,_){A(u,e,_),Q(l,e,null),i=!0},p(u,_){t=u;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),l.$set(g)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(u){i||(P(l.$$.fragment,u),ne(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),i=!0)},o(u){B(l.$$.fragment,u),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),i=!1},d(u){u&&m(e),W(l),u&&o&&o.end()}}}function Je(n){let t,e,l,a=[],o=new Map,r,s=[],i=new Map,u,_,g=n[1].filter(Ue);const p=c=>c[4].id;for(let c=0;c<g.length;c+=1){let f=Ae(n,g,c),h=p(f);o.set(h,a[c]=Se(h,f))}let C=n[1].filter(Ve);const d=c=>c[4].id;for(let c=0;c<C.length;c+=1){let f=Fe(n,C,c),h=d(f);i.set(h,s[c]=qe(h,f))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let c=0;c<a.length;c+=1)a[c].c();r=b("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=y(c,"SECTION",{class:!0});var f=T(t);e=y(f,"DIV",{class:!0});var h=T(e);l=y(h,"UL",{class:!0});var I=T(l);for(let N=0;N<a.length;N+=1)a[N].l(I);I.forEach(m),r=y(h,"UL",{class:!0});var q=T(r);for(let N=0;N<s.length;N+=1)s[N].l(q);q.forEach(m),h.forEach(m),f.forEach(m),this.h()},h(){v(l,"class","task-section__col"),v(r,"class","task-section__col"),v(e,"class","container task-section__grid svelte-q8mvyt"),v(t,"class",u="task-section "+n[0]+" svelte-q8mvyt")},m(c,f){A(c,t,f),w(t,e),w(e,l);for(let h=0;h<a.length;h+=1)a[h].m(l,null);w(e,r);for(let h=0;h<s.length;h+=1)s[h].m(r,null);_=!0},p(c,[f]){if(f&2){g=c[1].filter(Ue),ae();for(let h=0;h<a.length;h+=1)a[h].r();a=X(a,f,p,1,c,g,o,l,ie,Se,null,Ae);for(let h=0;h<a.length;h+=1)a[h].a();oe()}if(f&2){C=c[1].filter(Ve),ae();for(let h=0;h<s.length;h+=1)s[h].r();s=X(s,f,d,1,c,C,i,r,ie,qe,null,Fe);for(let h=0;h<s.length;h+=1)s[h].a();oe()}(!_||f&1&&u!==(u="task-section "+c[0]+" svelte-q8mvyt"))&&v(t,"class",u)},i(c){if(!_){for(let f=0;f<g.length;f+=1)P(a[f]);for(let f=0;f<C.length;f+=1)P(s[f]);_=!0}},o(c){for(let f=0;f<a.length;f+=1)B(a[f]);for(let f=0;f<s.length;f+=1)B(s[f]);_=!1},d(c){c&&m(t);for(let f=0;f<a.length;f+=1)a[f].d();for(let f=0;f<s.length;f+=1)s[f].d()}}}const Ue=n=>!n.done,Ve=n=>n.done;function $e(n,t,e){let l;Z(n,R,s=>e(1,l=s));let{class:a=""}=t;const[o,r]=je({duration:s=>Math.sqrt(s*200),fallback(s,i){const u=getComputedStyle(s),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ke,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return n.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,l,o,r]}class xe extends z{constructor(t){super();H(this,t,$e,Je,j,{class:0})}}const et=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Pe(n){let t,e,l,a=n[2].text&&Be(n);return{c(){t=b("button"),a&&a.c(),this.h()},l(o){t=y(o,"BUTTON",{class:!0});var r=T(t);a&&a.l(r),r.forEach(m),this.h()},h(){v(t,"class","btn svelte-1yy2xse")},m(o,r){A(o,t,r),a&&a.m(t,null),e||(l=S(t,"click",L(n[6])),e=!0)},p(o,r){o[2].text?a?a.p(o,r):(a=Be(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(o){o&&m(t),a&&a.d(),e=!1,l()}}}function Be(n){let t=n[2].text+"",e;return{c(){e=$(t)},l(l){e=x(l,t)},m(l,a){A(l,e,a)},p(l,a){a&4&&t!==(t=l[2].text+"")&&ee(e,t)},d(l){l&&m(e)}}}function tt(n){let t,e,l,a,o,r=n[2]&&Pe(n);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=T(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(m),this.h()},h(){v(e,"placeholder",n[1]),v(e,"class","svelte-1yy2xse"),v(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",n[5])},m(s,i){A(s,t,i),w(t,e),Te(e,n[4]),r&&r.m(t,null),n[11](t),a||(o=[S(e,"input",n[9]),S(e,"input",n[7]),S(e,"keydown",n[10])],a=!0)},p(s,[i]){i&2&&v(e,"placeholder",s[1]),i&16&&e.value!==s[4]&&Te(e,s[4]),s[2]?r?r.p(s,i):(r=Pe(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&v(t,"class",l),i&37&&D(t,"isError",s[5])},i:M,o:M,d(s){s&&m(t),r&&r.d(),n[11](null),a=!1,ke(o)}}}function lt(n,t,e){let{class:l=""}=t,{placeholder:a="Placeholer"}=t,{btn:o=null}=t,r,s,i=!1;const u=Ye(),_=()=>{s?(u("submit",{value:s}),e(4,s="")):e(5,i=!0)},g=()=>{e(5,i=!1)},p=f=>{let h=f.key;h==="Control"&&u("color"),h==="Enter"&&_()};function C(){s=this.value,e(4,s)}const d=f=>p(f);function c(f){be[f?"unshift":"push"](()=>{r=f,e(3,r)})}return n.$$set=f=>{"class"in f&&e(0,l=f.class),"placeholder"in f&&e(1,a=f.placeholder),"btn"in f&&e(2,o=f.btn)},[l,a,o,r,s,i,_,g,p,C,d,c]}class st extends z{constructor(t){super();H(this,t,lt,tt,j,{class:0,placeholder:1,btn:2})}}function Le(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function Me(n,t){let e,l,a,o,r=M,s,i,u;return{key:n,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(m),this.h()},h(){v(e,"class","add-todo__color svelte-1hafqlz"),v(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){A(_,e,g),s=!0,i||(u=S(e,"click",L(function(){pe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,g){t=_,(!s||g&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&v(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){te(e),r(),le(e,o)},a(){r(),r=se(e,o,re,{})},i(_){s||(ne(()=>{a||(a=Oe(e,we,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Oe(e,we,{},!1)),a.run(0),s=!1},d(_){_&&m(e),_&&a&&a.end(),i=!1,u()}}}function nt(n){let t,e,l,a,o=[],r=new Map,s,i,u,_,g,p=n[3].filter(n[7]);const C=d=>d[9].id;for(let d=0;d<p.length;d+=1){let c=Le(n,p,d),f=C(c);r.set(f,o[d]=Me(f,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",n[8]),s.$on("submit",n[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let d=0;d<o.length;d+=1)o[d].c();K(s.$$.fragment),this.h()},l(d){t=y(d,"DIV",{class:!0});var c=T(t);e=y(c,"DIV",{class:!0});var f=T(e);l=y(f,"SPAN",{class:!0,style:!0}),T(l).forEach(m);for(let h=0;h<o.length;h+=1)o[h].l(f);f.forEach(m),Y(s.$$.fragment,c),c.forEach(m),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),v(l,"style",a=`color: ${n[1]}`),v(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",n[2]),v(t,"class",i="add-todo "+n[0]+" svelte-1hafqlz")},m(d,c){A(d,t,c),w(t,e),w(e,l);for(let f=0;f<o.length;f+=1)o[f].m(e,null);Q(s,t,null),u=!0,_||(g=S(l,"click",L(n[6])),_=!0)},p(d,[c]){if((!u||c&2&&a!==(a=`color: ${d[1]}`))&&v(l,"style",a),c&42){p=d[3].filter(d[7]),ae();for(let f=0;f<o.length;f+=1)o[f].r();o=X(o,c,C,1,d,p,r,e,ie,Me,null,Le);for(let f=0;f<o.length;f+=1)o[f].a();oe()}c&4&&D(e,"isOpen",d[2]),(!u||c&1&&i!==(i="add-todo "+d[0]+" svelte-1hafqlz"))&&v(t,"class",i)},i(d){if(!u){for(let c=0;c<p.length;c+=1)P(o[c]);P(s.$$.fragment,d),u=!0}},o(d){for(let c=0;c<o.length;c+=1)B(o[c]);B(s.$$.fragment,d),u=!1},d(d){d&&m(t);for(let c=0;c<o.length;c+=1)o[c].d();W(s),_=!1,g()}}}function at(n,t,e){let l;Z(n,Ce,p=>e(3,l=p));let{class:a=""}=t,o="#0029FF",r=!1;const s=p=>{let C={id:Date.now(),text:p.detail.value,color:o,done:!1,date:et(new Date,"dot")};R.update(d=>d=[C,...d])},i=p=>p&&e(1,o=p),u=()=>e(2,r=!r),_=p=>p.color!=o,g=()=>e(2,r=!r);return n.$$set=p=>{"class"in p&&e(0,a=p.class)},[a,o,r,l,s,i,u,_,g]}class ot extends z{constructor(t){super();H(this,t,at,nt,j,{class:0})}}function rt(n){let t,e,l,a,o,r,s;return a=new ot({}),r=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=b("section"),l=b("div"),K(a.$$.fragment),K(r.$$.fragment),this.h()},l(i){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(m),t=Xe(i),e=y(i,"SECTION",{class:!0});var _=T(e);l=y(_,"DIV",{class:!0});var g=T(l);Y(a.$$.fragment,g),g.forEach(m),_.forEach(m),Y(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(e,"class",o=""+(n[0]+" mt-50 svelte-110abfo"))},m(i,u){A(i,t,u),A(i,e,u),w(e,l),Q(a,l,null),Q(r,i,u),s=!0},p(i,[u]){(!s||u&1&&o!==(o=""+(i[0]+" mt-50 svelte-110abfo")))&&v(e,"class",o)},i(i){s||(P(a.$$.fragment,i),P(r.$$.fragment,i),s=!0)},o(i){B(a.$$.fragment,i),B(r.$$.fragment,i),s=!1},d(i){i&&m(t),i&&m(e),W(a),W(r,i)}}}function it(n,t,e){let{class:l=""}=t;return n.$$set=a=>{"class"in a&&e(0,l=a.class)},[l]}class ft extends z{constructor(t){super();H(this,t,it,rt,j,{class:0})}}export{ft as default};