import{K as Qe,C as We,S as W,i as Z,L as Ze,e as y,c as T,a as w,d as v,b as m,f as L,D,M as N,N as H,O as Te,t as we,g as Ce,P as I,Q as oe,h as Ie,R as ae,T as Ge,E as j,U as Fe,V as re,u as Je,W as _e,s as ie,v as G,w as J,x as $,X as de,Y as he,Z as me,p as B,_ as ge,$ as De,n as M,a0 as Oe,A as x,m as ve,o as pe,a1 as $e,a2 as ke,a3 as be,a4 as xe,a5 as et,a6 as Se,a7 as Ae,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let o=l.filter(n=>n.color).map(n=>n.color).concat(e),r=o.filter((n,c)=>o.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(r)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function qe(l,t,e){const s=l.slice();return s[35]=t[e],s}function Le(l,t){let e,s,o,i,r;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=w(e);s=T(c,"BUTTON",{class:!0,style:!0}),w(s).forEach(v),c.forEach(v),this.h()},h(){m(s,"class","task__color-btn svelte-mroe7h"),m(s,"style",o=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-mroe7h"),this.first=e},m(n,c){L(n,e,c),D(e,s),i||(r=N(s,"click",H(function(){Te(t[16](t[35].color))&&t[16](t[35].color).apply(this,arguments)})),i=!0)},p(n,c){t=n,c[0]&4100&&o!==(o=`background-color: ${t[35].color}`)&&m(s,"style",o)},d(n){n&&v(e),i=!1,r()}}}function ot(l){let t,e,s,o,i,r,n,c,f,_,p,E,F,g,a,u,h,C=[],U=new Map,A,V,P,z,K,X,Y=l[12].filter(l[27]);const ee=k=>k[35].id;for(let k=0;k<Y.length;k+=1){let b=qe(l,Y,k),q=ee(b);U.set(q,C[k]=Le(q,b))}return{c(){t=y("article"),e=y("div"),s=y("div"),o=y("div"),i=y("p"),r=y("textarea"),c=y("div"),f=y("div"),_=y("span"),p=we(l[4]),E=y("div"),F=y("button"),g=y("span"),a=y("button"),u=y("span"),h=y("ul");for(let k=0;k<C.length;k+=1)C[k].c();V=y("button"),P=y("span"),this.h()},l(k){t=T(k,"ARTICLE",{class:!0});var b=w(t);e=T(b,"DIV",{class:!0});var q=w(e);s=T(q,"DIV",{class:!0});var te=w(s);o=T(te,"DIV",{class:!0});var Q=w(o);i=T(Q,"P",{class:!0});var ue=w(i);ue.forEach(v),r=T(Q,"TEXTAREA",{class:!0}),w(r).forEach(v),Q.forEach(v),te.forEach(v),c=T(q,"DIV",{class:!0});var le=w(c);f=T(le,"DIV",{class:!0});var se=w(f);_=T(se,"SPAN",{class:!0});var ne=w(_);p=Ce(ne,l[4]),ne.forEach(v),se.forEach(v),le.forEach(v),q.forEach(v),E=T(b,"DIV",{class:!0});var d=w(E);F=T(d,"BUTTON",{class:!0});var O=w(F);g=T(O,"SPAN",{class:!0}),w(g).forEach(v),O.forEach(v),a=T(d,"BUTTON",{class:!0});var S=w(a);u=T(S,"SPAN",{class:!0}),w(u).forEach(v),S.forEach(v),d.forEach(v),h=T(b,"UL",{class:!0,style:!0});var Ee=w(h);for(let fe=0;fe<C.length;fe+=1)C[fe].l(Ee);Ee.forEach(v),V=T(b,"BUTTON",{class:!0});var ye=w(V);P=T(ye,"SPAN",{class:!0}),w(P).forEach(v),ye.forEach(v),b.forEach(v),this.h()},h(){m(i,"class","task__main-content svelte-mroe7h"),I(i,"isEdit",l[7]),m(r,"class","task__main-content svelte-mroe7h"),r.disabled=n=!l[7],I(r,"addTransition",l[10]),m(o,"class","task__main-content-wrapper svelte-mroe7h"),m(s,"class","task__main-container svelte-mroe7h"),m(_,"class","svelte-mroe7h"),m(f,"class","task__info-content svelte-mroe7h"),m(c,"class","task__info svelte-mroe7h"),m(e,"class","task__main svelte-mroe7h"),I(e,"isEdit",l[7]),m(g,"class","svg-image-del svelte-mroe7h"),m(F,"class","task__menu-btn task__menu-btn_del svelte-mroe7h"),m(u,"class","svg-image-pen svelte-mroe7h"),m(a,"class","task__menu-btn task__menu-btn_edit svelte-mroe7h"),I(a,"isSelect",l[7]),I(a,"isChanged",l[8]),I(a,"isSave",l[9]),m(E,"class","task__circle task__menu svelte-mroe7h"),I(E,"isOpen",l[7]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-mroe7h"),m(h,"style",A=`background-color: ${l[2]}`),I(h,"isOpen",l[7]),m(P,"class","svelte-mroe7h"),m(V,"class","task__info-open svelte-mroe7h"),I(V,"isHidden",l[7]),m(t,"class",z="task "+l[1]+" svelte-mroe7h"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(k,b){L(k,t,b),D(t,e),D(e,s),D(s,o),D(o,i),i.innerHTML=l[0],D(o,r),l[22](r),oe(r,l[0]),D(e,c),D(c,f),D(f,_),D(_,p),l[25](c),D(t,E),D(E,F),D(F,g),D(E,a),D(a,u),D(t,h);for(let q=0;q<C.length;q+=1)C[q].m(h,null);D(t,V),D(V,P),K||(X=[N(r,"input",l[23]),N(r,"input",l[24]),N(r,"keydown",l[18]),N(e,"click",l[13]),N(F,"click",H(l[14])),N(a,"click",H(l[26])),N(V,"click",H(l[28]))],K=!0)},p(k,b){b[0]&1&&(i.innerHTML=k[0]),b[0]&128&&I(i,"isEdit",k[7]),b[0]&128&&n!==(n=!k[7])&&(r.disabled=n),b[0]&1&&oe(r,k[0]),b[0]&1024&&I(r,"addTransition",k[10]),b[0]&16&&Ie(p,k[4]),b[0]&128&&I(e,"isEdit",k[7]),b[0]&128&&I(a,"isSelect",k[7]),b[0]&256&&I(a,"isChanged",k[8]),b[0]&512&&I(a,"isSave",k[9]),b[0]&128&&I(E,"isOpen",k[7]),b[0]&69636&&(Y=k[12].filter(k[27]),C=ae(C,b,ee,1,k,Y,U,h,Ge,Le,null,qe)),b[0]&4&&A!==(A=`background-color: ${k[2]}`)&&m(h,"style",A),b[0]&128&&I(h,"isOpen",k[7]),b[0]&128&&I(V,"isHidden",k[7]),b[0]&2&&z!==(z="task "+k[1]+" svelte-mroe7h")&&m(t,"class",z),b[0]&10&&I(t,"isDisabled",k[3]),b[0]&34&&I(t,"isInfoOpen",k[5]),b[0]&130&&I(t,"isEdit",k[7])},i:j,o:j,d(k){k&&v(t),l[22](null),l[25](null);for(let b=0;b<C.length;b+=1)C[b].d();K=!1,Fe(X)}}}let Ve=new Set;function at(){Ve.forEach(l=>{l.edit(!1)})}function rt(l,t,e){let s,o;re(l,R,d=>e(30,s=d)),re(l,Ne,d=>e(12,o=d));let{class:i=""}=t,{text:r=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,p=r,E=!1,F,g=!1,a=!1,u=!1,h=!1,C,U;const A=()=>{if(g===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));R.set(d)}},V=()=>{let d=s.filter(O=>O.id!=f);R.set(d)};function P(d){e(7,g=d!=null?d:!g),g===!1&&X()}const z=d=>{let O=s.map(S=>(f===S.id&&(S.color=d),S));R.set(O)};function K(d){e(5,E=d!=null?d:!E);let O=0;F.childNodes.forEach(S=>O+=S.clientHeight),F.style.setProperty("--taskInfoHeight",`${E?O:0}px`)}function X(){a&&Y(r).then(()=>{e(8,a=!1),clearTimeout(U),e(9,u=!0),U=setTimeout(()=>{e(9,u=!1)},500)})}function Y(d){if(typeof d=="string")return new Promise(O=>{R.set(s.map(S=>(S.id===f&&(S.text=d),S))),O()});throw new Error("The value is not equal to the string")}function ee(d){let O=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(O&&S===83)return d.preventDefault(),X(),!1}function k(d=r){return e(8,a=d!==p)}function b(){e(11,C.rows=1,C);const d=parseFloat(ce(C,"padding-top"))+parseFloat(ce(C,"padding-bottom")),O=C.scrollHeight-d,S=parseFloat(ce(C,"line-height"));S==="normal"&&(S=parseFloat(ce(C,"font-size"))),console.log(O),e(11,C.rows=O/S,C)}Je(()=>{console.log(C.rows),b(),console.log(C.rows),e(10,h=!0)}),Ve.add({save(){X()},edit(d){P(d)}});function q(d){_e[d?"unshift":"push"](()=>{C=d,e(11,C)})}function te(){r=this.value,e(0,r)}const Q=()=>{k(),b()};function ue(d){_e[d?"unshift":"push"](()=>{F=d,e(6,F)})}const le=()=>{g===!1&&at(),P()},se=d=>d.color!=n,ne=()=>K();return l.$$set=d=>{"class"in d&&e(1,i=d.class),"text"in d&&e(0,r=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(21,f=d.id),"date"in d&&e(4,_=d.date)},[r,i,n,c,_,E,F,g,a,u,h,C,o,A,V,P,z,K,ee,k,b,f,q,te,Q,ue,le,se,ne]}class Pe extends W{constructor(t){super();Z(this,t,rt,ot,Ze,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,o,i,r,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){r=e.getBoundingClientRect()},f(){de(e),n(),he(e,r)},a(){n(),n=me(e,r,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),ge(()=>{i&&i.end(1),o=De(e,t[3],{key:t[4].id}),o.start()}),c=!0)},o(f){M(s.$$.fragment,f),o&&o.invalidate(),i=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&i&&i.end()}}}function Re(l,t){let e,s,o,i,r,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){r=e.getBoundingClientRect()},f(){de(e),n(),he(e,r)},a(){n(),n=me(e,r,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),ge(()=>{i&&i.end(1),o=De(e,t[3],{key:t[4].id}),o.start()}),c=!0)},o(f){M(s.$$.fragment,f),o&&o.invalidate(),i=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&i&&i.end()}}}function it(l){let t,e,s,o=[],i=new Map,r,n=[],c=new Map,f,_,p=l[1].filter(He);const E=a=>a[4].id;for(let a=0;a<p.length;a+=1){let u=Be(l,p,a),h=E(u);i.set(h,o[a]=Me(h,u))}let F=l[1].filter(je);const g=a=>a[4].id;for(let a=0;a<F.length;a+=1){let u=Ue(l,F,a),h=g(u);c.set(h,n[a]=Re(h,u))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let a=0;a<o.length;a+=1)o[a].c();r=y("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=T(a,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var C=w(s);for(let A=0;A<o.length;A+=1)o[A].l(C);C.forEach(v),r=T(h,"UL",{class:!0});var U=w(r);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(r,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(a,u){L(a,t,u),D(t,e),D(e,s);for(let h=0;h<o.length;h+=1)o[h].m(s,null);D(e,r);for(let h=0;h<n.length;h+=1)n[h].m(r,null);_=!0},p(a,[u]){if(u&2){p=a[1].filter(He),ve();for(let h=0;h<o.length;h+=1)o[h].r();o=ae(o,u,E,1,a,p,i,s,be,Me,null,Be);for(let h=0;h<o.length;h+=1)o[h].a();pe()}if(u&2){F=a[1].filter(je),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=ae(n,u,g,1,a,F,c,r,be,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();pe()}(!_||u&1&&f!==(f="task-section "+a[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(a){if(!_){for(let u=0;u<p.length;u+=1)B(o[u]);for(let u=0;u<F.length;u+=1)B(n[u]);_=!0}},o(a){for(let u=0;u<o.length;u+=1)M(o[u]);for(let u=0;u<n.length;u+=1)M(n[u]);_=!1},d(a){a&&v(t);for(let u=0;u<o.length;u+=1)o[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const He=l=>!l.done,je=l=>l.done;function ct(l,t,e){let s;re(l,R,n=>e(1,s=n));let{class:o=""}=t;const[i,r]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:p=>`
					transform: ${_} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,o=n.class)},[o,s,i,r]}class ut extends W{constructor(t){super();Z(this,t,ct,it,ie,{class:0})}}function ze(l){let t,e,s,o=l[2].text&&Ke(l);return{c(){t=y("button"),o&&o.c(),this.h()},l(i){t=T(i,"BUTTON",{class:!0});var r=w(t);o&&o.l(r),r.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(i,r){L(i,t,r),o&&o.m(t,null),e||(s=N(t,"click",H(l[6])),e=!0)},p(i,r){i[2].text?o?o.p(i,r):(o=Ke(i),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(i){i&&v(t),o&&o.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(s){e=Ce(s,t)},m(s,o){L(s,e,o)},p(s,o){o&4&&t!==(t=s[2].text+"")&&Ie(e,t)},d(s){s&&v(e)}}}function ft(l){let t,e,s,o,i,r=l[2]&&ze(l);return{c(){t=y("div"),e=y("input"),r&&r.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=w(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),r&&r.l(c),c.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(n,c){L(n,t,c),D(t,e),oe(e,l[4]),r&&r.m(t,null),l[10](t),o||(i=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],o=!0)},p(n,[c]){c&2&&m(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&oe(e,n[4]),n[2]?r?r.p(n,c):(r=ze(n),r.c(),r.m(t,null)):r&&(r.d(1),r=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),c&37&&I(t,"isError",n[5])},i:j,o:j,d(n){n&&v(t),r&&r.d(),l[10](null),o=!1,Fe(i)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:o="Placeholer"}=t,{btn:i=null}=t,r,n,c=!1;const f=et(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},p=()=>{e(5,c=!1)},E=a=>{let u=a.key,h=a.ctrlKey,C=a.shiftKey;a.keyCode,h&&C&&f("color"),u==="Enter"&&_()};function F(){n=this.value,e(4,n)}function g(a){_e[a?"unshift":"push"](()=>{r=a,e(3,r)})}return l.$$set=a=>{"class"in a&&e(0,s=a.class),"placeholder"in a&&e(1,o=a.placeholder),"btn"in a&&e(2,i=a.btn)},[s,o,i,r,n,c,_,p,E,F,g]}class dt extends W{constructor(t){super();Z(this,t,_t,ft,ie,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,o,i,r=j,n,c,f;return{key:l,first:null,c(){e=y("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){L(_,e,p),n=!0,c||(f=N(e,"click",H(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,p){t=_,(!n||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){i=e.getBoundingClientRect()},f(){de(e),r(),he(e,i)},a(){r(),r=me(e,i,ke,{})},i(_){n||(ge(()=>{o||(o=Se(e,Ae,{},!0)),o.run(1)}),n=!0)},o(_){o||(o=Se(e,Ae,{},!1)),o.run(0),n=!1},d(_){_&&v(e),_&&o&&o.end(),c=!1,f()}}}function ht(l){let t,e,s,o,i=[],r=new Map,n,c,f,_,p,E=l[3].filter(l[7]);const F=g=>g[9].id;for(let g=0;g<E.length;g+=1){let a=Xe(l,E,g),u=F(a);r.set(u,i[g]=Ye(u,a))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let g=0;g<i.length;g+=1)i[g].c();G(n.$$.fragment),this.h()},l(g){t=T(g,"DIV",{class:!0});var a=w(t);e=T(a,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(v);for(let h=0;h<i.length;h+=1)i[h].l(u);u.forEach(v),J(n.$$.fragment,a),a.forEach(v),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",o=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),m(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(g,a){L(g,t,a),D(t,e),D(e,s);for(let u=0;u<i.length;u+=1)i[u].m(e,null);$(n,t,null),f=!0,_||(p=N(s,"click",H(l[6])),_=!0)},p(g,[a]){if((!f||a&2&&o!==(o=`color: ${g[1]}`))&&m(s,"style",o),a&42){E=g[3].filter(g[7]),ve();for(let u=0;u<i.length;u+=1)i[u].r();i=ae(i,a,F,1,g,E,r,e,be,Ye,null,Xe);for(let u=0;u<i.length;u+=1)i[u].a();pe()}a&4&&I(e,"isOpen",g[2]),(!f||a&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&m(t,"class",c)},i(g){if(!f){for(let a=0;a<E.length;a+=1)B(i[a]);B(n.$$.fragment,g),f=!0}},o(g){for(let a=0;a<i.length;a+=1)M(i[a]);M(n.$$.fragment,g),f=!1},d(g){g&&v(t);for(let a=0;a<i.length;a+=1)i[a].d();x(n),_=!1,p()}}}function mt(l,t,e){let s;re(l,Ne,E=>e(3,s=E));let{class:o=""}=t,i="#0029FF",r=!1;const n=E=>{let F={id:Date.now(),text:E.detail.value,color:i,done:!1,date:nt(new Date,"dot")};R.update(g=>g=[F,...g])},c=E=>E&&e(1,i=E),f=()=>e(2,r=!r),_=E=>E.color!=i,p=()=>e(2,r=!r);return l.$$set=E=>{"class"in E&&e(0,o=E.class)},[o,i,r,s,n,c,f,_,p]}class gt extends W{constructor(t){super();Z(this,t,mt,ht,ie,{class:0})}}function vt(l){let t,e,s,o,i,r,n;return o=new gt({}),r=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=y("section"),s=y("div"),G(o.$$.fragment),G(r.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=st(c),e=T(c,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var p=w(s);J(o.$$.fragment,p),p.forEach(v),_.forEach(v),J(r.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",i=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),D(e,s),$(o,s,null),$(r,c,f),n=!0},p(c,[f]){(!n||f&1&&i!==(i=""+(c[0]+" mt-50 svelte-110abfo")))&&m(e,"class",i)},i(c){n||(B(o.$$.fragment,c),B(r.$$.fragment,c),n=!0)},o(c){M(o.$$.fragment,c),M(r.$$.fragment,c),n=!1},d(c){c&&v(t),c&&v(e),x(o),x(r,c)}}}function pt(l,t,e){let{class:s=""}=t;return l.$$set=o=>{"class"in o&&e(0,s=o.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,pt,vt,ie,{class:0})}}export{bt as default};