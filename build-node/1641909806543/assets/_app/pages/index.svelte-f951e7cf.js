import{K as Ke,C as He,S as Y,i as Q,s as W,e as E,c as w,a as q,d as k,b as d,f as A,D as I,L as F,M as L,N as ye,t as se,g as ne,O as C,h as ae,P as x,Q as je,E as M,R as Ee,T as ee,U as oe,v as X,w as Z,x as G,V as ie,W as re,X as ce,p as P,Y as ue,Z as we,n as B,_ as qe,A as J,m as fe,o as _e,$ as Ye,a0 as de,a1 as he,a2 as Qe,a3 as Te,a4 as We,a5 as Ie,a6 as Ce,j as Xe,a7 as Ze,l as Ge}from"../chunks/vendor-184f9251.js";const R=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),De=Ke(R,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,c)=>n.indexOf(a)===c).map((a,c)=>({id:c,color:a}));t(i)});function Oe(s,t,e){const l=s.slice();return l[26]=t[e],l}function Ne(s,t){let e,l,n,u,i;return{key:s,first:null,c(){e=E("li"),l=E("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var c=q(e);l=w(c,"BUTTON",{class:!0,style:!0}),q(l).forEach(k),c.forEach(k),this.h()},h(){d(l,"class","task__color-btn svelte-19qe0hw"),d(l,"style",n=`background-color: ${t[26].color}`),d(e,"class","task__color-item svelte-19qe0hw"),this.first=e},m(a,c){A(a,e,c),I(e,l),u||(i=F(l,"click",L(function(){ye(t[14](t[26].color))&&t[14](t[26].color).apply(this,arguments)})),u=!0)},p(a,c){t=a,c&1028&&n!==(n=`background-color: ${t[26].color}`)&&d(l,"style",n)},d(a){a&&k(e),u=!1,i()}}}function Je(s){let t,e,l,n,u,i,a,c,f,_,h,p,T,g,r,o=[],m=new Map,U,N,O,z,H,j,K=s[10].filter(s[22]);const $=b=>b[26].id;for(let b=0;b<K.length;b+=1){let y=Oe(s,K,b),S=$(y);m.set(S,o[b]=Ne(S,y))}return{c(){t=E("div"),e=E("div"),l=E("div"),n=E("p"),u=se(s[1]),i=E("div"),a=E("div"),c=E("span"),f=se(s[4]),_=E("div"),h=E("button"),p=E("span"),T=E("button"),g=E("span"),r=E("ul");for(let b=0;b<o.length;b+=1)o[b].c();N=E("button"),O=E("span"),this.h()},l(b){t=w(b,"DIV",{class:!0});var y=q(t);e=w(y,"DIV",{class:!0});var S=q(e);l=w(S,"DIV",{class:!0});var v=q(l);n=w(v,"P",{class:!0,contenteditable:!0});var D=q(n);u=ne(D,s[1]),D.forEach(k),v.forEach(k),i=w(S,"DIV",{class:!0});var V=q(i);a=w(V,"DIV",{class:!0});var ve=q(a);c=w(ve,"SPAN",{class:!0});var me=q(c);f=ne(me,s[4]),me.forEach(k),ve.forEach(k),V.forEach(k),S.forEach(k),_=w(y,"DIV",{class:!0});var te=q(_);h=w(te,"BUTTON",{class:!0});var ge=q(h);p=w(ge,"SPAN",{class:!0}),q(p).forEach(k),ge.forEach(k),T=w(te,"BUTTON",{class:!0});var ke=q(T);g=w(ke,"SPAN",{class:!0}),q(g).forEach(k),ke.forEach(k),te.forEach(k),r=w(y,"UL",{class:!0,style:!0});var pe=q(r);for(let le=0;le<o.length;le+=1)o[le].l(pe);pe.forEach(k),N=w(y,"BUTTON",{class:!0});var be=q(N);O=w(be,"SPAN",{class:!0}),q(O).forEach(k),be.forEach(k),y.forEach(k),this.h()},h(){d(n,"class","task__main-content svelte-19qe0hw"),d(n,"contenteditable",s[7]),d(l,"class","task__main-container svelte-19qe0hw"),d(c,"class","svelte-19qe0hw"),d(a,"class","task__info-content svelte-19qe0hw"),d(i,"class","task__info svelte-19qe0hw"),d(e,"class","task__main svelte-19qe0hw"),C(e,"isEdit",s[7]),d(p,"class","svg-image-del svelte-19qe0hw"),d(h,"class","task__menu-btn task__menu-btn_del svelte-19qe0hw"),d(g,"class","svg-image-pen svelte-19qe0hw"),d(T,"class","task__menu-btn task__menu-btn_edit svelte-19qe0hw"),C(T,"isSelect",s[7]),C(T,"isSave",s[8]),d(_,"class","task__circle task__menu svelte-19qe0hw"),C(_,"isOpen",s[7]),d(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-19qe0hw"),d(r,"style",U=`background-color: ${s[2]}`),C(r,"isOpen",s[7]),d(O,"class","svelte-19qe0hw"),d(N,"class","task__info-open svelte-19qe0hw"),C(N,"isHidden",s[7]),d(t,"class",z="task "+s[0]+" svelte-19qe0hw"),C(t,"isDisabled",s[3]),C(t,"isInfoOpen",s[5])},m(b,y){A(b,t,y),I(t,e),I(e,l),I(l,n),I(n,u),s[19](n),I(e,i),I(i,a),I(a,c),I(c,f),s[21](i),I(t,_),I(_,h),I(h,p),I(_,T),I(T,g),I(t,r);for(let S=0;S<o.length;S+=1)o[S].m(r,null);I(t,N),I(N,O),H||(j=[F(n,"input",s[20]),F(n,"keydown",s[16]),F(e,"click",s[11]),F(h,"click",L(s[12])),F(T,"click",L(s[13])),F(N,"click",L(s[23]))],H=!0)},p(b,[y]){y&2&&ae(u,b[1]),y&128&&d(n,"contenteditable",b[7]),y&16&&ae(f,b[4]),y&128&&C(e,"isEdit",b[7]),y&128&&C(T,"isSelect",b[7]),y&256&&C(T,"isSave",b[8]),y&128&&C(_,"isOpen",b[7]),y&17412&&(K=b[10].filter(b[22]),o=x(o,y,$,1,b,K,m,r,je,Ne,null,Oe)),y&4&&U!==(U=`background-color: ${b[2]}`)&&d(r,"style",U),y&128&&C(r,"isOpen",b[7]),y&128&&C(N,"isHidden",b[7]),y&1&&z!==(z="task "+b[0]+" svelte-19qe0hw")&&d(t,"class",z),y&9&&C(t,"isDisabled",b[3]),y&33&&C(t,"isInfoOpen",b[5])},i:M,o:M,d(b){b&&k(t),s[19](null),s[21](null);for(let y=0;y<o.length;y+=1)o[y].d();H=!1,Ee(j)}}}function $e(s,t,e){let l,n;ee(s,R,v=>e(24,l=v)),ee(s,De,v=>e(10,n=v));let{class:u=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,h=!1,p,T=!1,g=!1,r;const o=()=>{if(T===!1){let v=l.map(D=>(f===D.id&&(D.done=!D.done),D));R.set(v)}},m=()=>{let v=l.filter(D=>D.id!=f);R.set(v)},U=()=>{e(7,T=!T)},N=v=>{let D=l.map(V=>(f===V.id&&(V.color=v),V));R.set(D)};function O(v){e(5,h=v!=null?v:!h);let D=0;p.childNodes.forEach(V=>D+=V.clientHeight),p.style.setProperty("--taskInfoHeight",`${h?D:0}px`)}function z(){let v=r.innerText;console.log("save",v)}function H(v){let D=v.ctrlKey?!1:v.metaKey,V=v.keyCode;if(D&&V===83)return v.preventDefault(),z(),!1}function j(v=(D=>(D=r.innerText)!=null?D:i)()){return e(8,g=v!==i)}function K(v){oe[v?"unshift":"push"](()=>{r=v,e(9,r)})}const $=()=>j();function b(v){oe[v?"unshift":"push"](()=>{p=v,e(6,p)})}const y=v=>v.color!=a,S=()=>O();return s.$$set=v=>{"class"in v&&e(0,u=v.class),"text"in v&&e(1,i=v.text),"color"in v&&e(2,a=v.color),"disabled"in v&&e(3,c=v.disabled),"id"in v&&e(18,f=v.id),"date"in v&&e(4,_=v.date)},[u,i,a,c,_,h,p,T,g,r,n,o,m,U,N,O,H,j,f,K,$,b,y,S]}class Fe extends Y{constructor(t){super();Q(this,t,$e,Je,W,{class:0,text:1,color:2,disabled:3,id:18,date:4})}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,u,i,a=M,c;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),X(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=q(e);Z(l.$$.fragment,_),_.forEach(k),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),G(l,e,null),c=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),_&2&&(h.date=t[4].date),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){ie(e),a(),re(e,i)},a(){a(),a=ce(e,i,de,{duration:300})},i(f){c||(P(l.$$.fragment,f),ue(()=>{u&&u.end(1),n=we(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=qe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&k(e),J(l),f&&u&&u.end()}}}function Ue(s,t){let e,l,n,u,i,a=M,c;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),X(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=q(e);Z(l.$$.fragment,_),_.forEach(k),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),G(l,e,null),c=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),_&2&&(h.date=t[4].date),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){ie(e),a(),re(e,i)},a(){a(),a=ce(e,i,de,{duration:300})},i(f){c||(P(l.$$.fragment,f),ue(()=>{u&&u.end(1),n=we(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=qe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&k(e),J(l),f&&u&&u.end()}}}function xe(s){let t,e,l,n=[],u=new Map,i,a=[],c=new Map,f,_,h=s[1].filter(Pe);const p=r=>r[4].id;for(let r=0;r<h.length;r+=1){let o=Ae(s,h,r),m=p(o);u.set(m,n[r]=Ve(m,o))}let T=s[1].filter(Be);const g=r=>r[4].id;for(let r=0;r<T.length;r+=1){let o=Se(s,T,r),m=g(o);c.set(m,a[r]=Ue(m,o))}return{c(){t=E("section"),e=E("div"),l=E("ul");for(let r=0;r<n.length;r+=1)n[r].c();i=E("ul");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=w(r,"SECTION",{class:!0});var o=q(t);e=w(o,"DIV",{class:!0});var m=q(e);l=w(m,"UL",{class:!0});var U=q(l);for(let O=0;O<n.length;O+=1)n[O].l(U);U.forEach(k),i=w(m,"UL",{class:!0});var N=q(i);for(let O=0;O<a.length;O+=1)a[O].l(N);N.forEach(k),m.forEach(k),o.forEach(k),this.h()},h(){d(l,"class","task-section__col"),d(i,"class","task-section__col"),d(e,"class","container task-section__grid svelte-q8mvyt"),d(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(r,o){A(r,t,o),I(t,e),I(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);I(e,i);for(let m=0;m<a.length;m+=1)a[m].m(i,null);_=!0},p(r,[o]){if(o&2){h=r[1].filter(Pe),fe();for(let m=0;m<n.length;m+=1)n[m].r();n=x(n,o,p,1,r,h,u,l,he,Ve,null,Ae);for(let m=0;m<n.length;m+=1)n[m].a();_e()}if(o&2){T=r[1].filter(Be),fe();for(let m=0;m<a.length;m+=1)a[m].r();a=x(a,o,g,1,r,T,c,i,he,Ue,null,Se);for(let m=0;m<a.length;m+=1)a[m].a();_e()}(!_||o&1&&f!==(f="task-section "+r[0]+" svelte-q8mvyt"))&&d(t,"class",f)},i(r){if(!_){for(let o=0;o<h.length;o+=1)P(n[o]);for(let o=0;o<T.length;o+=1)P(a[o]);_=!0}},o(r){for(let o=0;o<n.length;o+=1)B(n[o]);for(let o=0;o<a.length;o+=1)B(a[o]);_=!1},d(r){r&&k(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function et(s,t,e){let l;ee(s,R,a=>e(1,l=a));let{class:n=""}=t;const[u,i]=Ye({duration:a=>Math.sqrt(a*200),fallback(a,c){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Qe,css:h=>`
					transform: ${_} scale(${h});
					opacity: ${h}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,i]}class tt extends Y{constructor(t){super();Q(this,t,et,xe,W,{class:0})}}const lt=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=E("button"),n&&n.c(),this.h()},l(u){t=w(u,"BUTTON",{class:!0});var i=q(t);n&&n.l(i),i.forEach(k),this.h()},h(){d(t,"class","btn svelte-1yy2xse")},m(u,i){A(u,t,i),n&&n.m(t,null),e||(l=F(t,"click",L(s[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Me(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=se(t)},l(l){e=ne(l,t)},m(l,n){A(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ae(e,t)},d(l){l&&k(e)}}}function st(s){let t,e,l,n,u,i=s[2]&&Le(s);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var c=q(t);e=w(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(k),this.h()},h(){d(e,"placeholder",s[1]),d(e,"class","svelte-1yy2xse"),d(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",s[5])},m(a,c){A(a,t,c),I(t,e),Te(e,s[4]),i&&i.m(t,null),s[11](t),n||(u=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[10])],n=!0)},p(a,[c]){c&2&&d(e,"placeholder",a[1]),c&16&&e.value!==a[4]&&Te(e,a[4]),a[2]?i?i.p(a,c):(i=Le(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&d(t,"class",l),c&37&&C(t,"isError",a[5])},i:M,o:M,d(a){a&&k(t),i&&i.d(),s[11](null),n=!1,Ee(u)}}}function nt(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,a,c=!1;const f=We(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,c=!0)},h=()=>{e(5,c=!1)},p=o=>{let m=o.key;m==="Control"&&f("color"),m==="Enter"&&_()};function T(){a=this.value,e(4,a)}const g=o=>p(o);function r(o){oe[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,i,a,c,_,h,p,T,g,r]}class at extends Y{constructor(t){super();Q(this,t,nt,st,W,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,u,i=M,a,c,f;return{key:s,first:null,c(){e=E("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),q(e).forEach(k),this.h()},h(){d(e,"class","add-todo__color svelte-1hafqlz"),d(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,h){A(_,e,h),a=!0,c||(f=F(e,"click",L(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,h){t=_,(!a||h&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&d(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ie(e),i(),re(e,u)},a(){i(),i=ce(e,u,de,{})},i(_){a||(ue(()=>{n||(n=Ie(e,Ce,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,Ce,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),c=!1,f()}}}function ot(s){let t,e,l,n,u=[],i=new Map,a,c,f,_,h,p=s[3].filter(s[7]);const T=g=>g[9].id;for(let g=0;g<p.length;g+=1){let r=Re(s,p,g),o=T(r);i.set(o,u[g]=ze(o,r))}return a=new at({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=E("div"),e=E("div"),l=E("span");for(let g=0;g<u.length;g+=1)u[g].c();X(a.$$.fragment),this.h()},l(g){t=w(g,"DIV",{class:!0});var r=q(t);e=w(r,"DIV",{class:!0});var o=q(e);l=w(o,"SPAN",{class:!0,style:!0}),q(l).forEach(k);for(let m=0;m<u.length;m+=1)u[m].l(o);o.forEach(k),Z(a.$$.fragment,r),r.forEach(k),this.h()},h(){d(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),d(l,"style",n=`color: ${s[1]}`),d(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",s[2]),d(t,"class",c="add-todo "+s[0]+" svelte-1hafqlz")},m(g,r){A(g,t,r),I(t,e),I(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);G(a,t,null),f=!0,_||(h=F(l,"click",L(s[6])),_=!0)},p(g,[r]){if((!f||r&2&&n!==(n=`color: ${g[1]}`))&&d(l,"style",n),r&42){p=g[3].filter(g[7]),fe();for(let o=0;o<u.length;o+=1)u[o].r();u=x(u,r,T,1,g,p,i,e,he,ze,null,Re);for(let o=0;o<u.length;o+=1)u[o].a();_e()}r&4&&C(e,"isOpen",g[2]),(!f||r&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&d(t,"class",c)},i(g){if(!f){for(let r=0;r<p.length;r+=1)P(u[r]);P(a.$$.fragment,g),f=!0}},o(g){for(let r=0;r<u.length;r+=1)B(u[r]);B(a.$$.fragment,g),f=!1},d(g){g&&k(t);for(let r=0;r<u.length;r+=1)u[r].d();J(a),_=!1,h()}}}function it(s,t,e){let l;ee(s,De,p=>e(3,l=p));let{class:n=""}=t,u="#0029FF",i=!1;const a=p=>{let T={id:Date.now(),text:p.detail.value,color:u,done:!1,date:lt(new Date,"dot")};R.update(g=>g=[T,...g])},c=p=>p&&e(1,u=p),f=()=>e(2,i=!i),_=p=>p.color!=u,h=()=>e(2,i=!i);return s.$$set=p=>{"class"in p&&e(0,n=p.class)},[n,u,i,l,a,c,f,_,h]}class rt extends Y{constructor(t){super();Q(this,t,it,ot,W,{class:0})}}function ct(s){let t,e,l,n,u,i,a;return n=new rt({}),i=new tt({props:{class:"mt-50"}}),{c(){t=Xe(),e=E("section"),l=E("div"),X(n.$$.fragment),X(i.$$.fragment),this.h()},l(c){Ze('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Ge(c),e=w(c,"SECTION",{class:!0});var _=q(e);l=w(_,"DIV",{class:!0});var h=q(l);Z(n.$$.fragment,h),h.forEach(k),_.forEach(k),Z(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",d(l,"class","container"),d(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(c,f){A(c,t,f),A(c,e,f),I(e,l),G(n,l,null),G(i,c,f),a=!0},p(c,[f]){(!a||f&1&&u!==(u=""+(c[0]+" mt-50 svelte-110abfo")))&&d(e,"class",u)},i(c){a||(P(n.$$.fragment,c),P(i.$$.fragment,c),a=!0)},o(c){B(n.$$.fragment,c),B(i.$$.fragment,c),a=!1},d(c){c&&k(t),c&&k(e),J(n),J(i,c)}}}function ut(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class _t extends Y{constructor(t){super();Q(this,t,ut,ct,W,{class:0})}}export{_t as default};