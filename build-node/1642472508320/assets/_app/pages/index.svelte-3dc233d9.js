import{K as Qe,C as We,S as W,i as Z,L as Ze,e as y,c as T,a as w,d as g,b as v,f as L,D,M as N,N as H,O as Te,t as we,g as Ce,P as I,Q as oe,h as Ie,R as ae,T as Ge,E as j,U as Fe,V as re,u as Je,W as de,s as ie,v as G,w as J,x as $,X as _e,Y as he,Z as ve,p as B,_ as me,$ as De,n as M,a0 as Oe,A as x,m as ge,o as pe,a1 as $e,a2 as ke,a3 as be,a4 as xe,a5 as et,a6 as Se,a7 as Ae,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let o=l.filter(n=>n.color).map(n=>n.color).concat(e),a=o.filter((n,c)=>o.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(a)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function qe(l,t,e){const s=l.slice();return s[35]=t[e],s}function Le(l,t){let e,s,o,i,a;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=w(e);s=T(c,"BUTTON",{class:!0,style:!0}),w(s).forEach(g),c.forEach(g),this.h()},h(){v(s,"class","task__color-btn svelte-1torxvd"),v(s,"style",o=`background-color: ${t[35].color}`),v(e,"class","task__color-item svelte-1torxvd"),this.first=e},m(n,c){L(n,e,c),D(e,s),i||(a=N(s,"click",H(function(){Te(t[17](t[35].color))&&t[17](t[35].color).apply(this,arguments)})),i=!0)},p(n,c){t=n,c[0]&8196&&o!==(o=`background-color: ${t[35].color}`)&&v(s,"style",o)},d(n){n&&g(e),i=!1,a()}}}function ot(l){let t,e,s,o,i,a,n,c,f,d,p,E,F,m,r,u,h,C=[],U=new Map,A,V,P,z,K,X,Y=l[13].filter(l[28]);const ee=k=>k[35].id;for(let k=0;k<Y.length;k+=1){let b=qe(l,Y,k),q=ee(b);U.set(q,C[k]=Le(q,b))}return{c(){t=y("article"),e=y("div"),s=y("div"),o=y("div"),i=y("p"),a=y("textarea"),c=y("div"),f=y("div"),d=y("span"),p=we(l[4]),E=y("div"),F=y("button"),m=y("span"),r=y("button"),u=y("span"),h=y("ul");for(let k=0;k<C.length;k+=1)C[k].c();V=y("button"),P=y("span"),this.h()},l(k){t=T(k,"ARTICLE",{class:!0});var b=w(t);e=T(b,"DIV",{class:!0});var q=w(e);s=T(q,"DIV",{class:!0});var te=w(s);o=T(te,"DIV",{class:!0});var Q=w(o);i=T(Q,"P",{class:!0});var ue=w(i);ue.forEach(g),a=T(Q,"TEXTAREA",{class:!0}),w(a).forEach(g),Q.forEach(g),te.forEach(g),c=T(q,"DIV",{class:!0});var le=w(c);f=T(le,"DIV",{class:!0});var se=w(f);d=T(se,"SPAN",{class:!0});var ne=w(d);p=Ce(ne,l[4]),ne.forEach(g),se.forEach(g),le.forEach(g),q.forEach(g),E=T(b,"DIV",{class:!0});var _=w(E);F=T(_,"BUTTON",{class:!0});var O=w(F);m=T(O,"SPAN",{class:!0}),w(m).forEach(g),O.forEach(g),r=T(_,"BUTTON",{class:!0});var S=w(r);u=T(S,"SPAN",{class:!0}),w(u).forEach(g),S.forEach(g),_.forEach(g),h=T(b,"UL",{class:!0,style:!0});var Ee=w(h);for(let fe=0;fe<C.length;fe+=1)C[fe].l(Ee);Ee.forEach(g),V=T(b,"BUTTON",{class:!0});var ye=w(V);P=T(ye,"SPAN",{class:!0}),w(P).forEach(g),ye.forEach(g),b.forEach(g),this.h()},h(){v(i,"class","task__main-content svelte-1torxvd"),I(i,"isEdit",l[8]),v(a,"class","task__main-content svelte-1torxvd"),a.disabled=n=!l[8],I(a,"addTransition",l[11]),v(o,"class","task__main-content-wrapper svelte-1torxvd"),v(s,"class","task__main-container svelte-1torxvd"),v(d,"class","svelte-1torxvd"),v(f,"class","task__info-content svelte-1torxvd"),v(c,"class","task__info svelte-1torxvd"),v(e,"class","task__main svelte-1torxvd"),I(e,"isEdit",l[8]),v(m,"class","svg-image-del svelte-1torxvd"),v(F,"class","task__menu-btn task__menu-btn_del svelte-1torxvd"),v(u,"class","svg-image-pen svelte-1torxvd"),v(r,"class","task__menu-btn task__menu-btn_edit svelte-1torxvd"),I(r,"isSelect",l[8]),I(r,"isChanged",l[9]),I(r,"isSave",l[10]),v(E,"class","task__circle task__menu svelte-1torxvd"),I(E,"isOpen",l[8]),v(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1torxvd"),v(h,"style",A=`background-color: ${l[2]}`),I(h,"isOpen",l[8]),v(P,"class","svelte-1torxvd"),v(V,"class","task__info-open svelte-1torxvd"),I(V,"isHidden",l[8]),v(t,"class",z="task "+l[1]+" svelte-1torxvd"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[6]),I(t,"isEdit",l[8])},m(k,b){L(k,t,b),D(t,e),D(e,s),D(s,o),D(o,i),i.innerHTML=l[5],D(o,a),l[23](a),oe(a,l[0]),D(e,c),D(c,f),D(f,d),D(d,p),l[26](c),D(t,E),D(E,F),D(F,m),D(E,r),D(r,u),D(t,h);for(let q=0;q<C.length;q+=1)C[q].m(h,null);D(t,V),D(V,P),K||(X=[N(a,"input",l[24]),N(a,"input",l[25]),N(a,"keydown",l[19]),N(e,"click",l[14]),N(F,"click",H(l[15])),N(r,"click",H(l[27])),N(V,"click",H(l[29]))],K=!0)},p(k,b){b[0]&32&&(i.innerHTML=k[5]),b[0]&256&&I(i,"isEdit",k[8]),b[0]&256&&n!==(n=!k[8])&&(a.disabled=n),b[0]&1&&oe(a,k[0]),b[0]&2048&&I(a,"addTransition",k[11]),b[0]&16&&Ie(p,k[4]),b[0]&256&&I(e,"isEdit",k[8]),b[0]&256&&I(r,"isSelect",k[8]),b[0]&512&&I(r,"isChanged",k[9]),b[0]&1024&&I(r,"isSave",k[10]),b[0]&256&&I(E,"isOpen",k[8]),b[0]&139268&&(Y=k[13].filter(k[28]),C=ae(C,b,ee,1,k,Y,U,h,Ge,Le,null,qe)),b[0]&4&&A!==(A=`background-color: ${k[2]}`)&&v(h,"style",A),b[0]&256&&I(h,"isOpen",k[8]),b[0]&256&&I(V,"isHidden",k[8]),b[0]&2&&z!==(z="task "+k[1]+" svelte-1torxvd")&&v(t,"class",z),b[0]&10&&I(t,"isDisabled",k[3]),b[0]&66&&I(t,"isInfoOpen",k[6]),b[0]&258&&I(t,"isEdit",k[8])},i:j,o:j,d(k){k&&g(t),l[23](null),l[26](null);for(let b=0;b<C.length;b+=1)C[b].d();K=!1,Fe(X)}}}let Ve=new Set;function at(){Ve.forEach(l=>{l.edit(!1)})}function rt(l,t,e){let s,o;re(l,R,_=>e(31,s=_)),re(l,Ne,_=>e(13,o=_));let{class:i=""}=t,{text:a=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:d=""}=t,p=a,E=!1,F,m=!1,r=!1,u=!1,h=!1,C,U;const A=()=>{if(m===!1){let _=s.map(O=>(f===O.id&&(O.done=!O.done),O));R.set(_)}},V=()=>{let _=s.filter(O=>O.id!=f);R.set(_)};function P(_){e(8,m=_!=null?_:!m),m===!1&&X()}const z=_=>{let O=s.map(S=>(f===S.id&&(S.color=_),S));R.set(O)};function K(_){e(6,E=_!=null?_:!E);let O=0;F.childNodes.forEach(S=>O+=S.clientHeight),F.style.setProperty("--taskInfoHeight",`${E?O:0}px`)}function X(){r&&Y(a).then(()=>{e(9,r=!1),clearTimeout(U),e(10,u=!0),e(5,p=a),U=setTimeout(()=>{e(10,u=!1)},500)})}function Y(_){if(typeof _=="string")return new Promise(O=>{R.set(s.map(S=>(S.id===f&&(S.text=_),S))),O()});throw new Error("The value is not equal to the string")}function ee(_){let O=_.ctrlKey?!1:_.metaKey,S=_.keyCode;if(O&&S===83)return _.preventDefault(),X(),!1}function k(_=a){return e(9,r=_!==p)}function b(){e(12,C.rows=1,C);const _=parseFloat(ce(C,"padding-top"))+parseFloat(ce(C,"padding-bottom")),O=C.scrollHeight-_,S=parseFloat(ce(C,"line-height"));S==="normal"&&(S=parseFloat(ce(C,"font-size"))),console.log(O),e(12,C.rows=O/S,C)}Je(()=>{console.log(C.rows),b(),console.log(C.rows),e(11,h=!0)}),Ve.add({save(){X()},edit(_){P(_)}});function q(_){de[_?"unshift":"push"](()=>{C=_,e(12,C)})}function te(){a=this.value,e(0,a)}const Q=()=>{k(),b()};function ue(_){de[_?"unshift":"push"](()=>{F=_,e(7,F)})}const le=()=>{m===!1&&at(),P()},se=_=>_.color!=n,ne=()=>K();return l.$$set=_=>{"class"in _&&e(1,i=_.class),"text"in _&&e(0,a=_.text),"color"in _&&e(2,n=_.color),"disabled"in _&&e(3,c=_.disabled),"id"in _&&e(22,f=_.id),"date"in _&&e(4,d=_.date)},[a,i,n,c,d,p,E,F,m,r,u,h,C,o,A,V,P,z,K,ee,k,b,f,q,te,Q,ue,le,se,ne]}class Pe extends W{constructor(t){super();Z(this,t,rt,ot,Ze,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,o,i,a,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var d=w(e);J(s.$$.fragment,d),d.forEach(g),this.h()},h(){v(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,d){L(f,e,d),$(s,e,null),c=!0},p(f,d){t=f;const p={};d&2&&(p.text=t[4].text),d&2&&(p.color=t[4].color?t[4].color:null),d&2&&(p.id=t[4].id),d&2&&(p.date=t[4].date),s.$set(p)},r(){a=e.getBoundingClientRect()},f(){_e(e),n(),he(e,a)},a(){n(),n=ve(e,a,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),me(()=>{i&&i.end(1),o=De(e,t[3],{key:t[4].id}),o.start()}),c=!0)},o(f){M(s.$$.fragment,f),o&&o.invalidate(),i=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),x(s),f&&i&&i.end()}}}function Re(l,t){let e,s,o,i,a,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var d=w(e);J(s.$$.fragment,d),d.forEach(g),this.h()},h(){v(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,d){L(f,e,d),$(s,e,null),c=!0},p(f,d){t=f;const p={};d&2&&(p.text=t[4].text),d&2&&(p.color=t[4].color?t[4].color:null),d&2&&(p.id=t[4].id),d&2&&(p.date=t[4].date),s.$set(p)},r(){a=e.getBoundingClientRect()},f(){_e(e),n(),he(e,a)},a(){n(),n=ve(e,a,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),me(()=>{i&&i.end(1),o=De(e,t[3],{key:t[4].id}),o.start()}),c=!0)},o(f){M(s.$$.fragment,f),o&&o.invalidate(),i=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),x(s),f&&i&&i.end()}}}function it(l){let t,e,s,o=[],i=new Map,a,n=[],c=new Map,f,d,p=l[1].filter(He);const E=r=>r[4].id;for(let r=0;r<p.length;r+=1){let u=Be(l,p,r),h=E(u);i.set(h,o[r]=Me(h,u))}let F=l[1].filter(je);const m=r=>r[4].id;for(let r=0;r<F.length;r+=1){let u=Ue(l,F,r),h=m(u);c.set(h,n[r]=Re(h,u))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let r=0;r<o.length;r+=1)o[r].c();a=y("ul");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){t=T(r,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var C=w(s);for(let A=0;A<o.length;A+=1)o[A].l(C);C.forEach(g),a=T(h,"UL",{class:!0});var U=w(a);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(g),h.forEach(g),u.forEach(g),this.h()},h(){v(s,"class","task-section__col"),v(a,"class","task-section__col"),v(e,"class","container task-section__grid svelte-te6j4q"),v(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(r,u){L(r,t,u),D(t,e),D(e,s);for(let h=0;h<o.length;h+=1)o[h].m(s,null);D(e,a);for(let h=0;h<n.length;h+=1)n[h].m(a,null);d=!0},p(r,[u]){if(u&2){p=r[1].filter(He),ge();for(let h=0;h<o.length;h+=1)o[h].r();o=ae(o,u,E,1,r,p,i,s,be,Me,null,Be);for(let h=0;h<o.length;h+=1)o[h].a();pe()}if(u&2){F=r[1].filter(je),ge();for(let h=0;h<n.length;h+=1)n[h].r();n=ae(n,u,m,1,r,F,c,a,be,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();pe()}(!d||u&1&&f!==(f="task-section "+r[0]+" svelte-te6j4q"))&&v(t,"class",f)},i(r){if(!d){for(let u=0;u<p.length;u+=1)B(o[u]);for(let u=0;u<F.length;u+=1)B(n[u]);d=!0}},o(r){for(let u=0;u<o.length;u+=1)M(o[u]);for(let u=0;u<n.length;u+=1)M(n[u]);d=!1},d(r){r&&g(t);for(let u=0;u<o.length;u+=1)o[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const He=l=>!l.done,je=l=>l.done;function ct(l,t,e){let s;re(l,R,n=>e(1,s=n));let{class:o=""}=t;const[i,a]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),d=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:p=>`
					transform: ${d} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,o=n.class)},[o,s,i,a]}class ut extends W{constructor(t){super();Z(this,t,ct,it,ie,{class:0})}}function ze(l){let t,e,s,o=l[2].text&&Ke(l);return{c(){t=y("button"),o&&o.c(),this.h()},l(i){t=T(i,"BUTTON",{class:!0});var a=w(t);o&&o.l(a),a.forEach(g),this.h()},h(){v(t,"class","btn svelte-1yy2xse")},m(i,a){L(i,t,a),o&&o.m(t,null),e||(s=N(t,"click",H(l[6])),e=!0)},p(i,a){i[2].text?o?o.p(i,a):(o=Ke(i),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(i){i&&g(t),o&&o.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(s){e=Ce(s,t)},m(s,o){L(s,e,o)},p(s,o){o&4&&t!==(t=s[2].text+"")&&Ie(e,t)},d(s){s&&g(e)}}}function ft(l){let t,e,s,o,i,a=l[2]&&ze(l);return{c(){t=y("div"),e=y("input"),a&&a.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=w(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),a&&a.l(c),c.forEach(g),this.h()},h(){v(e,"placeholder",l[1]),v(e,"class","svelte-1yy2xse"),v(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(n,c){L(n,t,c),D(t,e),oe(e,l[4]),a&&a.m(t,null),l[10](t),o||(i=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],o=!0)},p(n,[c]){c&2&&v(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&oe(e,n[4]),n[2]?a?a.p(n,c):(a=ze(n),a.c(),a.m(t,null)):a&&(a.d(1),a=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&v(t,"class",s),c&37&&I(t,"isError",n[5])},i:j,o:j,d(n){n&&g(t),a&&a.d(),l[10](null),o=!1,Fe(i)}}}function dt(l,t,e){let{class:s=""}=t,{placeholder:o="Placeholer"}=t,{btn:i=null}=t,a,n,c=!1;const f=et(),d=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},p=()=>{e(5,c=!1)},E=r=>{let u=r.key,h=r.ctrlKey,C=r.shiftKey;r.keyCode,h&&C&&f("color"),u==="Enter"&&d()};function F(){n=this.value,e(4,n)}function m(r){de[r?"unshift":"push"](()=>{a=r,e(3,a)})}return l.$$set=r=>{"class"in r&&e(0,s=r.class),"placeholder"in r&&e(1,o=r.placeholder),"btn"in r&&e(2,i=r.btn)},[s,o,i,a,n,c,d,p,E,F,m]}class _t extends W{constructor(t){super();Z(this,t,dt,ft,ie,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,o,i,a=j,n,c,f;return{key:l,first:null,c(){e=y("button"),this.h()},l(d){e=T(d,"BUTTON",{class:!0,style:!0}),w(e).forEach(g),this.h()},h(){v(e,"class","add-todo__color svelte-1hafqlz"),v(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,p){L(d,e,p),n=!0,c||(f=N(e,"click",H(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(d,p){t=d,(!n||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&v(e,"style",s)},r(){i=e.getBoundingClientRect()},f(){_e(e),a(),he(e,i)},a(){a(),a=ve(e,i,ke,{})},i(d){n||(me(()=>{o||(o=Se(e,Ae,{},!0)),o.run(1)}),n=!0)},o(d){o||(o=Se(e,Ae,{},!1)),o.run(0),n=!1},d(d){d&&g(e),d&&o&&o.end(),c=!1,f()}}}function ht(l){let t,e,s,o,i=[],a=new Map,n,c,f,d,p,E=l[3].filter(l[7]);const F=m=>m[9].id;for(let m=0;m<E.length;m+=1){let r=Xe(l,E,m),u=F(r);a.set(u,i[m]=Ye(u,r))}return n=new _t({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let m=0;m<i.length;m+=1)i[m].c();G(n.$$.fragment),this.h()},l(m){t=T(m,"DIV",{class:!0});var r=w(t);e=T(r,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(g);for(let h=0;h<i.length;h+=1)i[h].l(u);u.forEach(g),J(n.$$.fragment,r),r.forEach(g),this.h()},h(){v(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),v(s,"style",o=`color: ${l[1]}`),v(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),v(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(m,r){L(m,t,r),D(t,e),D(e,s);for(let u=0;u<i.length;u+=1)i[u].m(e,null);$(n,t,null),f=!0,d||(p=N(s,"click",H(l[6])),d=!0)},p(m,[r]){if((!f||r&2&&o!==(o=`color: ${m[1]}`))&&v(s,"style",o),r&42){E=m[3].filter(m[7]),ge();for(let u=0;u<i.length;u+=1)i[u].r();i=ae(i,r,F,1,m,E,a,e,be,Ye,null,Xe);for(let u=0;u<i.length;u+=1)i[u].a();pe()}r&4&&I(e,"isOpen",m[2]),(!f||r&1&&c!==(c="add-todo "+m[0]+" svelte-1hafqlz"))&&v(t,"class",c)},i(m){if(!f){for(let r=0;r<E.length;r+=1)B(i[r]);B(n.$$.fragment,m),f=!0}},o(m){for(let r=0;r<i.length;r+=1)M(i[r]);M(n.$$.fragment,m),f=!1},d(m){m&&g(t);for(let r=0;r<i.length;r+=1)i[r].d();x(n),d=!1,p()}}}function vt(l,t,e){let s;re(l,Ne,E=>e(3,s=E));let{class:o=""}=t,i="#0029FF",a=!1;const n=E=>{let F={id:Date.now(),text:E.detail.value,color:i,done:!1,date:nt(new Date,"dot")};R.update(m=>m=[F,...m])},c=E=>E&&e(1,i=E),f=()=>e(2,a=!a),d=E=>E.color!=i,p=()=>e(2,a=!a);return l.$$set=E=>{"class"in E&&e(0,o=E.class)},[o,i,a,s,n,c,f,d,p]}class mt extends W{constructor(t){super();Z(this,t,vt,ht,ie,{class:0})}}function gt(l){let t,e,s,o,i,a,n;return o=new mt({}),a=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=y("section"),s=y("div"),G(o.$$.fragment),G(a.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=st(c),e=T(c,"SECTION",{class:!0});var d=w(e);s=T(d,"DIV",{class:!0});var p=w(s);J(o.$$.fragment,p),p.forEach(g),d.forEach(g),J(a.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(s,"class","container"),v(e,"class",i=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),D(e,s),$(o,s,null),$(a,c,f),n=!0},p(c,[f]){(!n||f&1&&i!==(i=""+(c[0]+" mt-50 svelte-110abfo")))&&v(e,"class",i)},i(c){n||(B(o.$$.fragment,c),B(a.$$.fragment,c),n=!0)},o(c){M(o.$$.fragment,c),M(a.$$.fragment,c),n=!1},d(c){c&&g(t),c&&g(e),x(o),x(a,c)}}}function pt(l,t,e){let{class:s=""}=t;return l.$$set=o=>{"class"in o&&e(0,s=o.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,pt,gt,ie,{class:0})}}export{bt as default};