import{K as Qe,C as We,S as W,i as Z,L as Ze,e as y,c as T,a as q,d as v,b as m,f as L,D as F,M as A,N as H,O as Te,t as qe,g as we,P as C,Q as ae,h as Ce,R as oe,T as Ge,E as j,U as Ie,V as ie,u as Je,W as _e,s as re,v as G,w as J,x as $,X as de,Y as he,Z as me,p as B,_ as ge,$ as Fe,n as M,a0 as De,A as x,m as ve,o as pe,a1 as $e,a2 as ke,a3 as be,a4 as xe,a5 as et,a6 as Oe,a7 as Se,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ae=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),o=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(o)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function Ne(l,t,e){const s=l.slice();return s[35]=t[e],s}function Le(l,t){let e,s,a,r,o;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=q(e);s=T(c,"BUTTON",{class:!0,style:!0}),q(s).forEach(v),c.forEach(v),this.h()},h(){m(s,"class","task__color-btn svelte-10q176e"),m(s,"style",a=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-10q176e"),this.first=e},m(n,c){L(n,e,c),F(e,s),r||(o=A(s,"click",H(function(){Te(t[17](t[35].color))&&t[17](t[35].color).apply(this,arguments)})),r=!0)},p(n,c){t=n,c[0]&8196&&a!==(a=`background-color: ${t[35].color}`)&&m(s,"style",a)},d(n){n&&v(e),r=!1,o()}}}function at(l){let t,e,s,a,r,o,n,c,f,_,p,E,I,g,i,u,h,w=[],U=new Map,S,V,P,z,K,X,Y=l[13].filter(l[28]);const ee=k=>k[35].id;for(let k=0;k<Y.length;k+=1){let b=Ne(l,Y,k),N=ee(b);U.set(N,w[k]=Le(N,b))}return{c(){t=y("article"),e=y("div"),s=y("div"),a=y("div"),r=y("p"),o=y("textarea"),c=y("div"),f=y("div"),_=y("span"),p=qe(l[4]),E=y("div"),I=y("button"),g=y("span"),i=y("button"),u=y("span"),h=y("ul");for(let k=0;k<w.length;k+=1)w[k].c();V=y("button"),P=y("span"),this.h()},l(k){t=T(k,"ARTICLE",{class:!0});var b=q(t);e=T(b,"DIV",{class:!0});var N=q(e);s=T(N,"DIV",{class:!0});var te=q(s);a=T(te,"DIV",{class:!0});var Q=q(a);r=T(Q,"P",{class:!0});var ue=q(r);ue.forEach(v),o=T(Q,"TEXTAREA",{class:!0}),q(o).forEach(v),Q.forEach(v),te.forEach(v),c=T(N,"DIV",{class:!0});var le=q(c);f=T(le,"DIV",{class:!0});var se=q(f);_=T(se,"SPAN",{class:!0});var ne=q(_);p=we(ne,l[4]),ne.forEach(v),se.forEach(v),le.forEach(v),N.forEach(v),E=T(b,"DIV",{class:!0});var d=q(E);I=T(d,"BUTTON",{class:!0});var D=q(I);g=T(D,"SPAN",{class:!0}),q(g).forEach(v),D.forEach(v),i=T(d,"BUTTON",{class:!0});var O=q(i);u=T(O,"SPAN",{class:!0}),q(u).forEach(v),O.forEach(v),d.forEach(v),h=T(b,"UL",{class:!0,style:!0});var Ee=q(h);for(let fe=0;fe<w.length;fe+=1)w[fe].l(Ee);Ee.forEach(v),V=T(b,"BUTTON",{class:!0});var ye=q(V);P=T(ye,"SPAN",{class:!0}),q(P).forEach(v),ye.forEach(v),b.forEach(v),this.h()},h(){m(r,"class","task__main-content svelte-10q176e"),C(r,"isEdit",l[8]),m(o,"class","task__main-content svelte-10q176e"),o.disabled=n=!l[8],C(o,"addTransition",l[11]),m(a,"class","task__main-content-wrapper svelte-10q176e"),m(s,"class","task__main-container svelte-10q176e"),m(_,"class","svelte-10q176e"),m(f,"class","task__info-content svelte-10q176e"),m(c,"class","task__info svelte-10q176e"),m(e,"class","task__main svelte-10q176e"),C(e,"isEdit",l[8]),m(g,"class","svg-image-del svelte-10q176e"),m(I,"class","task__menu-btn task__menu-btn_del svelte-10q176e"),m(u,"class","svg-image-pen svelte-10q176e"),m(i,"class","task__menu-btn task__menu-btn_edit svelte-10q176e"),C(i,"isSelect",l[8]),C(i,"isChanged",l[9]),C(i,"isSave",l[10]),m(E,"class","task__circle task__menu svelte-10q176e"),C(E,"isOpen",l[8]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-10q176e"),m(h,"style",S=`background-color: ${l[2]}`),C(h,"isOpen",l[8]),m(P,"class","svelte-10q176e"),m(V,"class","task__info-open svelte-10q176e"),C(V,"isHidden",l[8]),m(t,"class",z="task "+l[1]+" svelte-10q176e"),C(t,"isDisabled",l[3]),C(t,"isInfoOpen",l[6]),C(t,"isEdit",l[8])},m(k,b){L(k,t,b),F(t,e),F(e,s),F(s,a),F(a,r),r.innerHTML=l[5],F(a,o),l[23](o),ae(o,l[0]),F(e,c),F(c,f),F(f,_),F(_,p),l[26](c),F(t,E),F(E,I),F(I,g),F(E,i),F(i,u),F(t,h);for(let N=0;N<w.length;N+=1)w[N].m(h,null);F(t,V),F(V,P),K||(X=[A(o,"input",l[24]),A(o,"input",l[25]),A(o,"keydown",l[19]),A(e,"click",l[14]),A(I,"click",H(l[15])),A(i,"click",H(l[27])),A(V,"click",H(l[29]))],K=!0)},p(k,b){b[0]&32&&(r.innerHTML=k[5]),b[0]&256&&C(r,"isEdit",k[8]),b[0]&256&&n!==(n=!k[8])&&(o.disabled=n),b[0]&1&&ae(o,k[0]),b[0]&2048&&C(o,"addTransition",k[11]),b[0]&16&&Ce(p,k[4]),b[0]&256&&C(e,"isEdit",k[8]),b[0]&256&&C(i,"isSelect",k[8]),b[0]&512&&C(i,"isChanged",k[9]),b[0]&1024&&C(i,"isSave",k[10]),b[0]&256&&C(E,"isOpen",k[8]),b[0]&139268&&(Y=k[13].filter(k[28]),w=oe(w,b,ee,1,k,Y,U,h,Ge,Le,null,Ne)),b[0]&4&&S!==(S=`background-color: ${k[2]}`)&&m(h,"style",S),b[0]&256&&C(h,"isOpen",k[8]),b[0]&256&&C(V,"isHidden",k[8]),b[0]&2&&z!==(z="task "+k[1]+" svelte-10q176e")&&m(t,"class",z),b[0]&10&&C(t,"isDisabled",k[3]),b[0]&66&&C(t,"isInfoOpen",k[6]),b[0]&258&&C(t,"isEdit",k[8])},i:j,o:j,d(k){k&&v(t),l[23](null),l[26](null);for(let b=0;b<w.length;b+=1)w[b].d();K=!1,Ie(X)}}}let Ve=new Set;function ot(){Ve.forEach(l=>{l.edit(!1)})}function it(l,t,e){let s,a;ie(l,R,d=>e(31,s=d)),ie(l,Ae,d=>e(13,a=d));let{class:r=""}=t,{text:o=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,p=o,E=!1,I,g=!1,i=!1,u=!1,h=!1,w,U;const S=()=>{if(g===!1){let d=s.map(D=>(f===D.id&&(D.done=!D.done),D));R.set(d)}},V=()=>{let d=s.filter(D=>D.id!=f);R.set(d)};function P(d){e(8,g=d!=null?d:!g),g===!1&&X()}const z=d=>{let D=s.map(O=>(f===O.id&&(O.color=d),O));R.set(D)};function K(d){e(6,E=d!=null?d:!E);let D=0;I.childNodes.forEach(O=>D+=O.clientHeight),I.style.setProperty("--taskInfoHeight",`${E?D:0}px`)}function X(){i&&Y(o).then(()=>{e(9,i=!1),clearTimeout(U),e(10,u=!0),e(5,p=o),U=setTimeout(()=>{e(10,u=!1)},500)})}function Y(d){if(typeof d=="string")return new Promise(D=>{R.set(s.map(O=>(O.id===f&&(O.text=d),O))),D()});throw new Error("The value is not equal to the string")}function ee(d){let D=d.ctrlKey?!1:d.metaKey,O=d.keyCode;if(D&&O===83)return d.preventDefault(),X(),!1}function k(d=o){return e(9,i=d!==p)}function b(){e(12,w.rows=1,w);const d=parseFloat(ce(w,"padding-top"))+parseFloat(ce(w,"padding-bottom")),D=w.scrollHeight-d,O=parseFloat(ce(w,"line-height"));O==="normal"&&(O=parseFloat(ce(w,"font-size"))),console.log(D),e(12,w.rows=D/O,w)}Je(()=>{console.log(w.rows),b(),console.log(w.rows),e(11,h=!0)}),Ve.add({save(){X()},edit(d){P(d)}});function N(d){_e[d?"unshift":"push"](()=>{w=d,e(12,w)})}function te(){o=this.value,e(0,o)}const Q=()=>{k(),b()};function ue(d){_e[d?"unshift":"push"](()=>{I=d,e(7,I)})}const le=()=>{g===!1&&ot(),P()},se=d=>d.color!=n,ne=()=>K();return l.$$set=d=>{"class"in d&&e(1,r=d.class),"text"in d&&e(0,o=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(22,f=d.id),"date"in d&&e(4,_=d.date)},[o,r,n,c,_,p,E,I,g,i,u,h,w,a,S,V,P,z,K,ee,k,b,f,N,te,Q,ue,le,se,ne]}class Pe extends W{constructor(t){super();Z(this,t,it,at,Ze,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,a,r,o,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=q(e);J(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){o=e.getBoundingClientRect()},f(){de(e),n(),he(e,o)},a(){n(),n=me(e,o,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),ge(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=De(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&r&&r.end()}}}function Re(l,t){let e,s,a,r,o,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=q(e);J(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){o=e.getBoundingClientRect()},f(){de(e),n(),he(e,o)},a(){n(),n=me(e,o,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),ge(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=De(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&r&&r.end()}}}function rt(l){let t,e,s,a=[],r=new Map,o,n=[],c=new Map,f,_,p=l[1].filter(He);const E=i=>i[4].id;for(let i=0;i<p.length;i+=1){let u=Be(l,p,i),h=E(u);r.set(h,a[i]=Me(h,u))}let I=l[1].filter(je);const g=i=>i[4].id;for(let i=0;i<I.length;i+=1){let u=Ue(l,I,i),h=g(u);c.set(h,n[i]=Re(h,u))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let i=0;i<a.length;i+=1)a[i].c();o=y("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){t=T(i,"SECTION",{class:!0});var u=q(t);e=T(u,"DIV",{class:!0});var h=q(e);s=T(h,"UL",{class:!0});var w=q(s);for(let S=0;S<a.length;S+=1)a[S].l(w);w.forEach(v),o=T(h,"UL",{class:!0});var U=q(o);for(let S=0;S<n.length;S+=1)n[S].l(U);U.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(o,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(i,u){L(i,t,u),F(t,e),F(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);F(e,o);for(let h=0;h<n.length;h+=1)n[h].m(o,null);_=!0},p(i,[u]){if(u&2){p=i[1].filter(He),ve();for(let h=0;h<a.length;h+=1)a[h].r();a=oe(a,u,E,1,i,p,r,s,be,Me,null,Be);for(let h=0;h<a.length;h+=1)a[h].a();pe()}if(u&2){I=i[1].filter(je),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=oe(n,u,g,1,i,I,c,o,be,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();pe()}(!_||u&1&&f!==(f="task-section "+i[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(i){if(!_){for(let u=0;u<p.length;u+=1)B(a[u]);for(let u=0;u<I.length;u+=1)B(n[u]);_=!0}},o(i){for(let u=0;u<a.length;u+=1)M(a[u]);for(let u=0;u<n.length;u+=1)M(n[u]);_=!1},d(i){i&&v(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const He=l=>!l.done,je=l=>l.done;function ct(l,t,e){let s;ie(l,R,n=>e(1,s=n));let{class:a=""}=t;const[r,o]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:p=>`
					transform: ${_} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,r,o]}class ut extends W{constructor(t){super();Z(this,t,ct,rt,re,{class:0})}}function ze(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=y("button"),a&&a.c(),this.h()},l(r){t=T(r,"BUTTON",{class:!0});var o=q(t);a&&a.l(o),o.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(r,o){L(r,t,o),a&&a.m(t,null),e||(s=A(t,"click",H(l[6])),e=!0)},p(r,o){r[2].text?a?a.p(r,o):(a=Ke(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&v(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=qe(t)},l(s){e=we(s,t)},m(s,a){L(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&Ce(e,t)},d(s){s&&v(e)}}}function ft(l){let t,e,s,a,r,o=l[2]&&ze(l);return{c(){t=y("div"),e=y("input"),o&&o.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=q(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),o&&o.l(c),c.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",l[5])},m(n,c){L(n,t,c),F(t,e),ae(e,l[4]),o&&o.m(t,null),l[10](t),a||(r=[A(e,"input",l[9]),A(e,"input",l[7]),A(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&m(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&ae(e,n[4]),n[2]?o?o.p(n,c):(o=ze(n),o.c(),o.m(t,null)):o&&(o.d(1),o=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),c&37&&C(t,"isError",n[5])},i:j,o:j,d(n){n&&v(t),o&&o.d(),l[10](null),a=!1,Ie(r)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,o,n,c=!1;const f=et(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},p=()=>{e(5,c=!1)},E=i=>{let u=i.key,h=i.ctrlKey,w=i.shiftKey;i.keyCode,h&&w&&f("color"),u==="Enter"&&_()};function I(){n=this.value,e(4,n)}function g(i){_e[i?"unshift":"push"](()=>{o=i,e(3,o)})}return l.$$set=i=>{"class"in i&&e(0,s=i.class),"placeholder"in i&&e(1,a=i.placeholder),"btn"in i&&e(2,r=i.btn)},[s,a,r,o,n,c,_,p,E,I,g]}class dt extends W{constructor(t){super();Z(this,t,_t,ft,re,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,r,o=j,n,c,f;return{key:l,first:null,c(){e=y("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),q(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){L(_,e,p),n=!0,c||(f=A(e,"click",H(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,p){t=_,(!n||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){r=e.getBoundingClientRect()},f(){de(e),o(),he(e,r)},a(){o(),o=me(e,r,ke,{})},i(_){n||(ge(()=>{a||(a=Oe(e,Se,{},!0)),a.run(1)}),n=!0)},o(_){a||(a=Oe(e,Se,{},!1)),a.run(0),n=!1},d(_){_&&v(e),_&&a&&a.end(),c=!1,f()}}}function ht(l){let t,e,s,a,r=[],o=new Map,n,c,f,_,p,E=l[3].filter(l[7]);const I=g=>g[9].id;for(let g=0;g<E.length;g+=1){let i=Xe(l,E,g),u=I(i);o.set(u,r[g]=Ye(u,i))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let g=0;g<r.length;g+=1)r[g].c();G(n.$$.fragment),this.h()},l(g){t=T(g,"DIV",{class:!0});var i=q(t);e=T(i,"DIV",{class:!0});var u=q(e);s=T(u,"SPAN",{class:!0,style:!0}),q(s).forEach(v);for(let h=0;h<r.length;h+=1)r[h].l(u);u.forEach(v),J(n.$$.fragment,i),i.forEach(v),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",a=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",l[2]),m(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(g,i){L(g,t,i),F(t,e),F(e,s);for(let u=0;u<r.length;u+=1)r[u].m(e,null);$(n,t,null),f=!0,_||(p=A(s,"click",H(l[6])),_=!0)},p(g,[i]){if((!f||i&2&&a!==(a=`color: ${g[1]}`))&&m(s,"style",a),i&42){E=g[3].filter(g[7]),ve();for(let u=0;u<r.length;u+=1)r[u].r();r=oe(r,i,I,1,g,E,o,e,be,Ye,null,Xe);for(let u=0;u<r.length;u+=1)r[u].a();pe()}i&4&&C(e,"isOpen",g[2]),(!f||i&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&m(t,"class",c)},i(g){if(!f){for(let i=0;i<E.length;i+=1)B(r[i]);B(n.$$.fragment,g),f=!0}},o(g){for(let i=0;i<r.length;i+=1)M(r[i]);M(n.$$.fragment,g),f=!1},d(g){g&&v(t);for(let i=0;i<r.length;i+=1)r[i].d();x(n),_=!1,p()}}}function mt(l,t,e){let s;ie(l,Ae,E=>e(3,s=E));let{class:a=""}=t,r="#0029FF",o=!1;const n=E=>{let I={id:Date.now(),text:E.detail.value,color:r,done:!1,date:nt(new Date,"dot")};R.update(g=>g=[I,...g])},c=E=>E&&e(1,r=E),f=()=>e(2,o=!o),_=E=>E.color!=r,p=()=>e(2,o=!o);return l.$$set=E=>{"class"in E&&e(0,a=E.class)},[a,r,o,s,n,c,f,_,p]}class gt extends W{constructor(t){super();Z(this,t,mt,ht,re,{class:0})}}function vt(l){let t,e,s,a,r,o,n;return a=new gt({}),o=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=y("section"),s=y("div"),G(a.$$.fragment),G(o.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=st(c),e=T(c,"SECTION",{class:!0});var _=q(e);s=T(_,"DIV",{class:!0});var p=q(s);J(a.$$.fragment,p),p.forEach(v),_.forEach(v),J(o.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),F(e,s),$(a,s,null),$(o,c,f),n=!0},p(c,[f]){(!n||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&m(e,"class",r)},i(c){n||(B(a.$$.fragment,c),B(o.$$.fragment,c),n=!0)},o(c){M(a.$$.fragment,c),M(o.$$.fragment,c),n=!1},d(c){c&&v(t),c&&v(e),x(a),x(o,c)}}}function pt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,pt,vt,re,{class:0})}}export{bt as default};